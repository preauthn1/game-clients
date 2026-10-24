using System;
using System.Collections.Generic;
using UnityEngine;
using example.invalid;
using System.Runtime.CompilerServices;
using System.Xml;
using UnityEditor;
using UnityEngine.SceneManagement;
using Object = UnityEngine.Object;
using SimpleJSON_CC;
using Json = MiniJSON.Json;
using LitJson;
using UnityEngine.Rendering;

public class ToCocosParticle3D
{
	static ParticleSystem PtcMng;

	static float particleLifespan = 0;
	static float particleLifespanVariance = 0;
	static float emissionRate = 0;

	static JSONNode ParticleList;
	static float progress = 0.0f;

	static string[] compareShaderNames = {
#if UNITY_2018
        "Legacy Shaders/Particles/Additive",                  //SrcAlpha    One
        "Legacy Shaders/Particles/Alpha Blended",             //SrcAlpha    OneMinusSrcAlpha
        "Legacy Shaders/Particles/Alpha Blended Premultiply", //One         OneMinusSrcAlpha
        "Legacy Shaders/Particles/Anim Alpha Blended",        //SrcAlpha    OneMinusSrcAlpha
        "Legacy Shaders/Particles/Blend",                     //DstColor    One
        "Legacy Shaders/Particles/Multiply",                  //Zero        SrcColor
        "Legacy Shaders/Particles/Multiply (Double)",         //DstColor    SrcColor
        "Legacy Shaders/Particles/VertexLit Blended",         //SrcAlpha    OneMinusSrcAlpha
        "Legacy Shaders/Particles/~Additive-Multiply",        //One         OneMinusSrcAlpha
        "Legacy Shaders/Particles/Additive (Soft)",           //One         OneMinusSrcColor
#else
		"Particles/Additive",                  //SrcAlpha    One
		"Particles/Alpha Blended",             //SrcAlpha    OneMinusSrcAlpha
		"Particles/Alpha Blended Premultiply", //One         OneMinusSrcAlpha
		"Particles/Anim Alpha Blended",        //SrcAlpha    OneMinusSrcAlpha
		"Particles/Blend",                     //DstColor    One
		"Particles/Multiply",                  //Zero        SrcColor
		"Particles/Multiply (Double)",         //DstColor    SrcColor
		"Particles/VertexLit Blended",         //SrcAlpha    OneMinusSrcAlpha
		"Particles/~Additive-Multiply",        //One         OneMinusSrcAlpha
		"Particles/Additive (Soft)",           //One         OneMinusSrcColor
#endif
		"Particles/Standard Surface",
		"Particles/Standard Unlit",
	};

	static int[] BlendSrc = {
        (int) BlendsModes.SRC_ALPHA,
        (int) BlendsModes.SRC_ALPHA,
        (int) BlendsModes.ONE,
        (int) BlendsModes.SRC_ALPHA,
        (int) BlendsModes.DST_COLOR,
        (int) BlendsModes.ZERO,
        (int) BlendsModes.DST_COLOR,
        (int) BlendsModes.SRC_ALPHA,
        (int) BlendsModes.ONE,
        (int) BlendsModes.ONE
    };

    static int[] BlendDst =
    {
        (int) BlendsModes.ONE,
        (int) BlendsModes.ONE_MINUS_SRC_ALPHA,
        (int) BlendsModes.ONE_MINUS_SRC_ALPHA,
        (int) BlendsModes.ONE_MINUS_SRC_ALPHA,
        (int) BlendsModes.ONE,
        (int) BlendsModes.SRC_COLOR,
        (int) BlendsModes.SRC_COLOR,
        (int) BlendsModes.ONE_MINUS_SRC_ALPHA,
        (int) BlendsModes.ONE_MINUS_SRC_ALPHA,
        (int) BlendsModes.ONE_MINUS_SRC_COLOR
    };

    enum BlendsModes
    {
        ZERO                     = 0,
        ONE                      = 1,
        SRC_COLOR                = 768,
        SRC_ALPHA                = 770,
        DST_ALPHA                = 772,
        DST_COLOR                = 774,
        ONE_MINUS_SRC_COLOR      = 769,
        ONE_MINUS_SRC_ALPHA      = 771,
        ONE_MINUS_DST_ALPHA      = 773,
        ONE_MINUS_DST_COLOR      = 775,
        SRC_ALPHA_SATURATE       = 776,
        ONE_MINUS_CONSTANT_ALPHA = 32772,
        ONE_MINUS_CONSTANT_COLOR = 32770
    }

    public static List<ParticleSystem> checkChildren(Transform trf)
    {
        List<ParticleSystem> allPS = new List<ParticleSystem>();
        ParticleSystem       tmp   = trf.GetComponent<ParticleSystem>();
        if (tmp)
        {
            allPS.Add(tmp);
        }

        foreach (Transform child in trf)
        {
            allPS.AddRange(checkChildren(child));
        }

        return allPS;
    }


    [MenuItem("Cocos/Output Particle to Cocos 2.3.0")]
    public static void SelectToOutPut()
    {
        string clearPath = Application.dataPath + "/../../outputJsonAnim/particles/";
        if (Directory.Exists(clearPath)) Directory.Delete(clearPath, true);

        var                  tmp   = SceneManager.GetActiveScene().GetRootGameObjects();
        List<ParticleSystem> allPS = new List<ParticleSystem>();
        foreach (GameObject gobj in tmp)
        {
            allPS.AddRange(checkChildren(gobj.transform));
        }

        ParticleList = new SimpleJSON_CC.JSONObject();
        ParticleList["type"]="AZ_ParticleList";

        int i = 0;
        foreach (ParticleSystem ptc in allPS)
        {
            progress = ((float) allPS.Count) / (float) i;
            EditorUtility.DisplayProgressBar("cocos resource converter", ptc.gameObject.name, progress);
            CreateData(ptc.gameObject);
            i++;
        }

		WriteJsonFile(ParticleList.ToString(), Application.dataPath + "/../../outputJsonAnim/ParticleList.JSON");

        EditorUtility.ClearProgressBar();
    }


    static string GameObjPath(Transform obj)
    {
        if (obj.parent)
            return GameObjPath(obj.parent) + "/" + obj.name;
        return obj.name;
    }

    static void outPutMatrial(string name, string path, string tPath)
    {
        JSONNode pmtl = new SimpleJSON_CC.JSONObject();
        pmtl["type"]                                                = "cc.Material";
        pmtl["_name"]                                               = name;
        pmtl["_objFlags"]                                           = 0;
        pmtl["_native"]                                             = "";
        pmtl["_effectAsset"]["uuid"]                                = "829a282c-b049-4019-bd38-5ace8d8a6417"; //這邊是固定的
        pmtl["_techniqueIndex"]                                     = 0;
        pmtl["_techniqueData"]["0"]["props"]["mainTexture"]["path"] = tPath;
        pmtl["_techniqueData"]["0"]["defines"]                      = new SimpleJSON_CC.JSONObject();
        path                                                        = Path.ChangeExtension(Application.dataPath + "/../../outputJsonAnim/" + path, "json");
        WriteJsonFile(pmtl.ToString(), path);
    }


    static void CreateData(Object selected)
    {
        int  i, j, k, l;
        bool gravity = false;

        PtcMng = (selected as GameObject).GetComponent<ParticleSystem>();
        if (!PtcMng)
            return;
        ParticleSystemRenderer PtcRenderer = PtcMng.gameObject.GetComponent<ParticleSystemRenderer>();


        JSONNode PTC = new SimpleJSON_CC.JSONObject();
        PTC["__type__"] = "custom ";

        int    nameIndex = 0;
        string path      = Application.dataPath + "/../../outputJsonAnim/particles/" + Path.ChangeExtension(PtcMng.name + "_Particle_" + nameIndex, "json");
        while (File.Exists(path))
        {
            nameIndex++;
            path = Application.dataPath + "/../../outputJsonAnim/particles/" + Path.ChangeExtension(PtcMng.name + "_Particle_" + nameIndex, "json");
        }


        Debug.Log("relativePath = " + relativePath(Application.dataPath + "/../../outputJsonAnim/ParticleList.JSON", path));

        ParticleList[GameObjPath(PtcRenderer.transform)] = "particles/" + Path.ChangeExtension(PtcMng.name + "_Particle_" + nameIndex, "json");

        var folder = Path.GetDirectoryName(path);
        if (folder != null) Directory.CreateDirectory(folder);

        PTC["duration"]    = PtcMng.main.duration;
        PTC["_capacity"]   = PtcMng.main.maxParticles;
        PTC["loop"]        = PtcMng.main.loop;
        PTC["playOnAwake"] = PtcMng.main.playOnAwake;
        PTC["_prewarm"]    = PtcMng.main.prewarm;
        PTC["_simulationSpace"] =
            PtcMng.main.simulationSpace == ParticleSystemSimulationSpace.World ? 0 :
            PtcMng.main.simulationSpace == ParticleSystemSimulationSpace.Local ? 1 : 2;
        PTC["simulationSpeed"] = PtcMng.main.simulationSpeed;

        PTC["startDelay"]      = JSONConvert(PtcMng.main.startDelay);
        PTC["startLifetime"]   = JSONConvert(PtcMng.main.startLifetime);
        PTC["startColor"]      = JSONConvert(PtcMng.main.startColor);
        PTC["scaleSpace"]      = (int) PtcMng.main.scalingMode; //world,local,custom vs Hierarchy,Local,shape
        PTC["startSize"]       = JSONConvert(PtcMng.main.startSize);
        PTC["startSpeed"]      = JSONConvert(PtcMng.main.startSpeed);
        PTC["startRotation"]   = JSONConvert(PtcMng.main.startRotation);
        PTC["gravityModifier"] = JSONConvert(PtcMng.main.gravityModifier);

        if (PtcMng.emission.enabled)
        {
            PTC["rateOverTime"]     = JSONConvert(PtcMng.emission.rateOverTime);
            PTC["rateOverDistance"] = JSONConvert(PtcMng.emission.rateOverDistance);
            l                       = PtcMng.emission.burstCount;
            int                    val    = 0;
            ParticleSystem.Burst[] bursts = new ParticleSystem.Burst[l];
            PtcMng.emission.GetBursts(bursts);
            PTC["bursts"] = new JSONArray();
            for (i = 0; i < l; i++)
            {
                PTC["bursts"][i]["_time"]          = bursts[i].time;
                PTC["bursts"][i]["minCount"]       = bursts[i].minCount;
                PTC["bursts"][i]["maxCount"]       = bursts[i].maxCount;
                PTC["bursts"][i]["_repeatCount"]   = bursts[i].cycleCount;
                PTC["bursts"][i]["repeatInterval"] = bursts[i].repeatInterval;
            }
        }

        PTC["shapeModule"]["enable"] = PtcMng.shape.enabled;
        if (PtcMng.shape.enabled)
        {
            switch (PtcMng.shape.shapeType)
            {
                case ParticleSystemShapeType.Box:
					PTC["shapeModule"]["_shapeType"]               = 0;
					PTC["shapeModule"]["_position"]["x"]           = PtcMng.shape.position.x;
					PTC["shapeModule"]["_position"]["y"]           = PtcMng.shape.position.y;
					PTC["shapeModule"]["_position"]["z"]           = PtcMng.shape.position.z;
					PTC["shapeModule"]["_rotation"]["x"]           = PtcMng.shape.rotation.x;
					PTC["shapeModule"]["_rotation"]["y"]           = PtcMng.shape.rotation.y;
					PTC["shapeModule"]["_rotation"]["z"]           = PtcMng.shape.rotation.z;
					PTC["shapeModule"]["_scale"]["x"]              = PtcMng.shape.scale.x;
					PTC["shapeModule"]["_scale"]["y"]              = PtcMng.shape.scale.y;
					PTC["shapeModule"]["_scale"]["z"]              = PtcMng.shape.scale.z;
                    PTC["shapeModule"]["alignToDirection"]         = PtcMng.shape.alignToDirection;
                    PTC["shapeModule"]["randomDirectionAmount"]    = PtcMng.shape.randomDirectionAmount;
                    PTC["shapeModule"]["sphericalDirectionAmount"] = PtcMng.shape.sphericalDirectionAmount;
                    PTC["shapeModule"]["emitFrom"]                 = 3; //Volume
                    break;
                case ParticleSystemShapeType.BoxEdge:
					PTC["shapeModule"]["_shapeType"]               = 0;
					PTC["shapeModule"]["_position"]["x"]           = PtcMng.shape.position.x;
					PTC["shapeModule"]["_position"]["y"]           = PtcMng.shape.position.y;
					PTC["shapeModule"]["_position"]["z"]           = PtcMng.shape.position.z;
					PTC["shapeModule"]["_rotation"]["x"]           = PtcMng.shape.rotation.x;
					PTC["shapeModule"]["_rotation"]["y"]           = PtcMng.shape.rotation.y;
					PTC["shapeModule"]["_rotation"]["z"]           = PtcMng.shape.rotation.z;
                    PTC["shapeModule"]["_scale"]["x"]              = PtcMng.shape.scale.x;
                    PTC["shapeModule"]["_scale"]["y"]              = PtcMng.shape.scale.y;
                    PTC["shapeModule"]["_scale"]["z"]              = PtcMng.shape.scale.z;
                    PTC["shapeModule"]["alignToDirection"]         = PtcMng.shape.alignToDirection;
                    PTC["shapeModule"]["randomDirectionAmount"]    = PtcMng.shape.randomDirectionAmount;
                    PTC["shapeModule"]["sphericalDirectionAmount"] = PtcMng.shape.sphericalDirectionAmount;
                    PTC["shapeModule"]["emitFrom"]                 = 1; //Edge
                    break;
                case ParticleSystemShapeType.BoxShell:
					PTC["shapeModule"]["_shapeType"]               = 0;
					PTC["shapeModule"]["_position"]["x"]           = PtcMng.shape.position.x;
					PTC["shapeModule"]["_position"]["y"]           = PtcMng.shape.position.y;
					PTC["shapeModule"]["_position"]["z"]           = PtcMng.shape.position.z;
					PTC["shapeModule"]["_rotation"]["x"]           = PtcMng.shape.rotation.x;
					PTC["shapeModule"]["_rotation"]["y"]           = PtcMng.shape.rotation.y;
					PTC["shapeModule"]["_rotation"]["z"]           = PtcMng.shape.rotation.z;
                    PTC["shapeModule"]["_scale"]["x"]              = PtcMng.shape.scale.x;
                    PTC["shapeModule"]["_scale"]["y"]              = PtcMng.shape.scale.y;
                    PTC["shapeModule"]["_scale"]["z"]              = PtcMng.shape.scale.z;
                    PTC["shapeModule"]["alignToDirection"]         = PtcMng.shape.alignToDirection;
                    PTC["shapeModule"]["randomDirectionAmount"]    = PtcMng.shape.randomDirectionAmount;
                    PTC["shapeModule"]["sphericalDirectionAmount"] = PtcMng.shape.sphericalDirectionAmount;
                    PTC["shapeModule"]["emitFrom"]                 = 2; //Shell
                    break;
                case ParticleSystemShapeType.Circle:
					PTC["shapeModule"]["_shapeType"] 				= 1;
					PTC["shapeModule"]["_position"]["x"]            = PtcMng.shape.position.x;
					PTC["shapeModule"]["_position"]["y"]            = PtcMng.shape.position.y;
					PTC["shapeModule"]["_position"]["z"]            = PtcMng.shape.position.z;
					PTC["shapeModule"]["_rotation"]["x"]            = PtcMng.shape.rotation.x;
					PTC["shapeModule"]["_rotation"]["y"]            = PtcMng.shape.rotation.y;
					PTC["shapeModule"]["_rotation"]["z"]            = PtcMng.shape.rotation.z;
					PTC["shapeModule"]["_scale"]["x"]              	= PtcMng.shape.scale.x;
					PTC["shapeModule"]["_scale"]["y"]              	= PtcMng.shape.scale.y;
					PTC["shapeModule"]["_scale"]["z"]              	= PtcMng.shape.scale.z;
                    PTC["shapeModule"]["radius"]     				= PtcMng.shape.radius;
                    PTC["shapeModule"]["_arc"]       				= PtcMng.shape.arc / 57.295779513082320876798154814105; //(180/pi)
                    PTC["shapeModule"]["arcMode"]    				= (int) PtcMng.shape.arcMode;                           //* unity 0 ~ 3, cocos 0 ~ 2
                    PTC["shapeModule"]["arcSpread"]  				= PtcMng.shape.arcSpread;
                    PTC["shapeModule"]["arcSpeed"]   				= JSONConvert(PtcMng.shape.arcSpeed);

                    PTC["shapeModule"]["alignToDirection"]         	= PtcMng.shape.alignToDirection;
                    PTC["shapeModule"]["randomDirectionAmount"]    	= PtcMng.shape.randomDirectionAmount;
                    PTC["shapeModule"]["sphericalDirectionAmount"] 	= PtcMng.shape.sphericalDirectionAmount;
                    PTC["shapeModule"]["emitFrom"]                 	= 3; //Volume
                    break;
                case ParticleSystemShapeType.CircleEdge:
					PTC["shapeModule"]["_shapeType"]               	= 1;
					PTC["shapeModule"]["_position"]["x"]            = PtcMng.shape.position.x;
					PTC["shapeModule"]["_position"]["y"]            = PtcMng.shape.position.y;
					PTC["shapeModule"]["_position"]["z"]            = PtcMng.shape.position.z;
					PTC["shapeModule"]["_rotation"]["x"]            = PtcMng.shape.rotation.x;
					PTC["shapeModule"]["_rotation"]["y"]            = PtcMng.shape.rotation.y;
					PTC["shapeModule"]["_rotation"]["z"]            = PtcMng.shape.rotation.z;
					PTC["shapeModule"]["_scale"]["x"]              	= PtcMng.shape.scale.x;
					PTC["shapeModule"]["_scale"]["y"]              	= PtcMng.shape.scale.y;
					PTC["shapeModule"]["_scale"]["z"]              	= PtcMng.shape.scale.z;
                    PTC["shapeModule"]["radius"]                   	= PtcMng.shape.radius;
                    PTC["shapeModule"]["_arc"]                     	= PtcMng.shape.arc / 57.295779513082320876798154814105; //(180/pi)
                    PTC["shapeModule"]["arcMode"]                  	= (int) PtcMng.shape.arcMode;                           //* unity 0 ~ 3, cocos 0 ~ 2
                    PTC["shapeModule"]["arcSpread"]                	= PtcMng.shape.arcSpread;
                    PTC["shapeModule"]["arcSpeed"]                 	= JSONConvert(PtcMng.shape.arcSpeed);

                    PTC["shapeModule"]["alignToDirection"]         	= PtcMng.shape.alignToDirection;
                    PTC["shapeModule"]["randomDirectionAmount"]    	= PtcMng.shape.randomDirectionAmount;
                    PTC["shapeModule"]["sphericalDirectionAmount"] 	= PtcMng.shape.sphericalDirectionAmount;
                    PTC["shapeModule"]["emitFrom"]                 	= 1; //Edge
                    break;
                case ParticleSystemShapeType.Cone: //base
					PTC["shapeModule"]["_shapeType"]               = 2;
					PTC["shapeModule"]["_position"]["x"]           = PtcMng.shape.position.x;
					PTC["shapeModule"]["_position"]["y"]           = PtcMng.shape.position.y;
					PTC["shapeModule"]["_position"]["z"]           = PtcMng.shape.position.z;
					PTC["shapeModule"]["_rotation"]["x"]           = PtcMng.shape.rotation.x;
					PTC["shapeModule"]["_rotation"]["y"]           = PtcMng.shape.rotation.y;
					PTC["shapeModule"]["_rotation"]["z"]           = PtcMng.shape.rotation.z;
					PTC["shapeModule"]["_scale"]["x"]              = PtcMng.shape.scale.x;
					PTC["shapeModule"]["_scale"]["y"]              = PtcMng.shape.scale.y;
					PTC["shapeModule"]["_scale"]["z"]              = PtcMng.shape.scale.z;
                    PTC["shapeModule"]["_angle"]                   = PtcMng.shape.angle / 57.295779513082320876798154814105; //(180/pi)
                    PTC["shapeModule"]["radius"]                   = PtcMng.shape.radius;
                    PTC["shapeModule"]["_arc"]                     = PtcMng.shape.arc / 57.295779513082320876798154814105; //(180/pi)
                    PTC["shapeModule"]["arcMode"]                  = (int) PtcMng.shape.arcMode;                           //* unity 0 ~ 3, cocos 0 ~ 2
                    PTC["shapeModule"]["arcSpread"]                = PtcMng.shape.arcSpread;
                    PTC["shapeModule"]["arcSpeed"]                 = JSONConvert(PtcMng.shape.arcSpeed);
                    PTC["shapeModule"]["alignToDirection"]         = PtcMng.shape.alignToDirection;
                    PTC["shapeModule"]["randomDirectionAmount"]    = PtcMng.shape.randomDirectionAmount;
                    PTC["shapeModule"]["sphericalDirectionAmount"] = PtcMng.shape.sphericalDirectionAmount;
                    PTC["shapeModule"]["emitFrom"]                 = 0;
                    break;
                case ParticleSystemShapeType.ConeShell: //base shell
					PTC["shapeModule"]["_shapeType"]               = 2;
					PTC["shapeModule"]["_position"]["x"]           = PtcMng.shape.position.x;
					PTC["shapeModule"]["_position"]["y"]           = PtcMng.shape.position.y;
					PTC["shapeModule"]["_position"]["z"]           = PtcMng.shape.position.z;
					PTC["shapeModule"]["_rotation"]["x"]           = PtcMng.shape.rotation.x;
					PTC["shapeModule"]["_rotation"]["y"]           = PtcMng.shape.rotation.y;
					PTC["shapeModule"]["_rotation"]["z"]           = PtcMng.shape.rotation.z;
					PTC["shapeModule"]["_scale"]["x"]              = PtcMng.shape.scale.x;
					PTC["shapeModule"]["_scale"]["y"]              = PtcMng.shape.scale.y;
					PTC["shapeModule"]["_scale"]["z"]              = PtcMng.shape.scale.z;
                    PTC["shapeModule"]["_angle"]                   = PtcMng.shape.angle / 57.295779513082320876798154814105; //(180/pi)
                    PTC["shapeModule"]["radius"]                   = PtcMng.shape.radius;
                    PTC["shapeModule"]["_arc"]                     = PtcMng.shape.arc / 57.295779513082320876798154814105; //(180/pi)
                    PTC["shapeModule"]["arcMode"]                  = (int) PtcMng.shape.arcMode;                           //* unity 0 ~ 3, cocos 0 ~ 2
                    PTC["shapeModule"]["arcSpread"]                = PtcMng.shape.arcSpread;
                    PTC["shapeModule"]["arcSpeed"]                 = JSONConvert(PtcMng.shape.arcSpeed);
                    PTC["shapeModule"]["alignToDirection"]         = PtcMng.shape.alignToDirection;
                    PTC["shapeModule"]["randomDirectionAmount"]    = PtcMng.shape.randomDirectionAmount;
                    PTC["shapeModule"]["sphericalDirectionAmount"] = PtcMng.shape.sphericalDirectionAmount;
                    PTC["shapeModule"]["emitFrom"]                 = 2;
                    break;
                case ParticleSystemShapeType.ConeVolume:      //Volume
                case ParticleSystemShapeType.ConeVolumeShell: //Volume shell
					PTC["shapeModule"]["_shapeType"]               = 2;
					PTC["shapeModule"]["_position"]["x"]           = PtcMng.shape.position.x;
					PTC["shapeModule"]["_position"]["y"]           = PtcMng.shape.position.y;
					PTC["shapeModule"]["_position"]["z"]           = PtcMng.shape.position.z;
					PTC["shapeModule"]["_rotation"]["x"]           = PtcMng.shape.rotation.x;
					PTC["shapeModule"]["_rotation"]["y"]           = PtcMng.shape.rotation.y;
					PTC["shapeModule"]["_rotation"]["z"]           = PtcMng.shape.rotation.z;
					PTC["shapeModule"]["_scale"]["x"]              = PtcMng.shape.scale.x;
					PTC["shapeModule"]["_scale"]["y"]              = PtcMng.shape.scale.y;
					PTC["shapeModule"]["_scale"]["z"]              = PtcMng.shape.scale.z;
                    PTC["shapeModule"]["_angle"]                   = PtcMng.shape.angle / 57.295779513082320876798154814105; //(180/pi)
                    PTC["shapeModule"]["radius"]                   = PtcMng.shape.radius;
                    PTC["shapeModule"]["_arc"]                     = PtcMng.shape.arc / 57.295779513082320876798154814105; //(180/pi)
                    PTC["shapeModule"]["arcMode"]                  = (int) PtcMng.shape.arcMode;                           //* unity 0 ~ 3, cocos 0 ~ 2
                    PTC["shapeModule"]["arcSpread"]                = PtcMng.shape.arcSpread;
                    PTC["shapeModule"]["arcSpeed"]                 = JSONConvert(PtcMng.shape.arcSpeed);
                    PTC["shapeModule"]["alignToDirection"]         = PtcMng.shape.alignToDirection;
                    PTC["shapeModule"]["randomDirectionAmount"]    = PtcMng.shape.randomDirectionAmount;
                    PTC["shapeModule"]["sphericalDirectionAmount"] = PtcMng.shape.sphericalDirectionAmount;
                    PTC["shapeModule"]["emitFrom"]                 = 3;
                    break;
                case ParticleSystemShapeType.Sphere: //emitted from Volume
					PTC["shapeModule"]["_shapeType"]               = 3;
					PTC["shapeModule"]["_position"]["x"]           = PtcMng.shape.position.x;
					PTC["shapeModule"]["_position"]["y"]           = PtcMng.shape.position.y;
					PTC["shapeModule"]["_position"]["z"]           = PtcMng.shape.position.z;
					PTC["shapeModule"]["_rotation"]["x"]           = PtcMng.shape.rotation.x;
					PTC["shapeModule"]["_rotation"]["y"]           = PtcMng.shape.rotation.y;
					PTC["shapeModule"]["_rotation"]["z"]           = PtcMng.shape.rotation.z;
					PTC["shapeModule"]["_scale"]["x"]              = PtcMng.shape.scale.x;
					PTC["shapeModule"]["_scale"]["y"]              = PtcMng.shape.scale.y;
					PTC["shapeModule"]["_scale"]["z"]              = PtcMng.shape.scale.z;
                    PTC["shapeModule"]["radius"]                   = PtcMng.shape.radius;
                    PTC["shapeModule"]["alignToDirection"]         = PtcMng.shape.alignToDirection;
                    PTC["shapeModule"]["randomDirectionAmount"]    = PtcMng.shape.randomDirectionAmount;
                    PTC["shapeModule"]["sphericalDirectionAmount"] = PtcMng.shape.sphericalDirectionAmount;
                    PTC["shapeModule"]["emitFrom"]                 = 3;
                    break;
                case ParticleSystemShapeType.SphereShell: //emitted from shell
					PTC["shapeModule"]["_shapeType"]               = 3;
					PTC["shapeModule"]["_position"]["x"]           = PtcMng.shape.position.x;
					PTC["shapeModule"]["_position"]["y"]           = PtcMng.shape.position.y;
					PTC["shapeModule"]["_position"]["z"]           = PtcMng.shape.position.z;
					PTC["shapeModule"]["_rotation"]["x"]           = PtcMng.shape.rotation.x;
					PTC["shapeModule"]["_rotation"]["y"]           = PtcMng.shape.rotation.y;
					PTC["shapeModule"]["_rotation"]["z"]           = PtcMng.shape.rotation.z;
					PTC["shapeModule"]["_scale"]["x"]              = PtcMng.shape.scale.x;
					PTC["shapeModule"]["_scale"]["y"]              = PtcMng.shape.scale.y;
					PTC["shapeModule"]["_scale"]["z"]              = PtcMng.shape.scale.z;
                    PTC["shapeModule"]["radius"]                   = PtcMng.shape.radius;
                    PTC["shapeModule"]["alignToDirection"]         = PtcMng.shape.alignToDirection;
                    PTC["shapeModule"]["randomDirectionAmount"]    = PtcMng.shape.randomDirectionAmount;
                    PTC["shapeModule"]["sphericalDirectionAmount"] = PtcMng.shape.sphericalDirectionAmount;
                    PTC["shapeModule"]["emitFrom"]                 = 2;
                    break;
                case ParticleSystemShapeType.Hemisphere: //emitted from Volume
					PTC["shapeModule"]["_shapeType"]               = 4;
					PTC["shapeModule"]["_position"]["x"]           = PtcMng.shape.position.x;
					PTC["shapeModule"]["_position"]["y"]           = PtcMng.shape.position.y;
					PTC["shapeModule"]["_position"]["z"]           = PtcMng.shape.position.z;
					PTC["shapeModule"]["_rotation"]["x"]           = PtcMng.shape.rotation.x;
					PTC["shapeModule"]["_rotation"]["y"]           = PtcMng.shape.rotation.y;
					PTC["shapeModule"]["_rotation"]["z"]           = PtcMng.shape.rotation.z;
					PTC["shapeModule"]["_scale"]["x"]              = PtcMng.shape.scale.x;
					PTC["shapeModule"]["_scale"]["y"]              = PtcMng.shape.scale.y;
					PTC["shapeModule"]["_scale"]["z"]              = PtcMng.shape.scale.z;
                    PTC["shapeModule"]["radius"]                   = PtcMng.shape.radius;
                    PTC["shapeModule"]["alignToDirection"]         = PtcMng.shape.alignToDirection;
                    PTC["shapeModule"]["randomDirectionAmount"]    = PtcMng.shape.randomDirectionAmount;
                    PTC["shapeModule"]["sphericalDirectionAmount"] = PtcMng.shape.sphericalDirectionAmount;
                    PTC["shapeModule"]["emitFrom"]                 = 3;
                    break;
                case ParticleSystemShapeType.HemisphereShell: //emitted from shell
					PTC["shapeModule"]["_shapeType"]               = 4;
					PTC["shapeModule"]["_position"]["x"]           = PtcMng.shape.position.x;
					PTC["shapeModule"]["_position"]["y"]           = PtcMng.shape.position.y;
					PTC["shapeModule"]["_position"]["z"]           = PtcMng.shape.position.z;
					PTC["shapeModule"]["_rotation"]["x"]           = PtcMng.shape.rotation.x;
					PTC["shapeModule"]["_rotation"]["y"]           = PtcMng.shape.rotation.y;
					PTC["shapeModule"]["_rotation"]["z"]           = PtcMng.shape.rotation.z;
					PTC["shapeModule"]["_scale"]["x"]              = PtcMng.shape.scale.x;
					PTC["shapeModule"]["_scale"]["y"]              = PtcMng.shape.scale.y;
					PTC["shapeModule"]["_scale"]["z"]              = PtcMng.shape.scale.z;
                    PTC["shapeModule"]["radius"]                   = PtcMng.shape.radius;
                    PTC["shapeModule"]["alignToDirection"]         = PtcMng.shape.alignToDirection;
                    PTC["shapeModule"]["randomDirectionAmount"]    = PtcMng.shape.randomDirectionAmount;
                    PTC["shapeModule"]["sphericalDirectionAmount"] = PtcMng.shape.sphericalDirectionAmount;
                    PTC["shapeModule"]["emitFrom"]                 = 2;
                    break;
                default:
                    Debug.LogError("there's No the smae setting in cocos : " + PtcMng.shape.shapeType);
                    break;
            }
        }

        PTC["colorOverLifetimeModule"]["enable"] = PtcMng.colorOverLifetime.enabled;
        if (PtcMng.colorOverLifetime.enabled)
        {
            PTC["colorOverLifetimeModule"]["color"] = JSONConvert(PtcMng.colorOverLifetime.color);
        }

        PTC["sizeOvertimeModule"]["enable"] = PtcMng.sizeOverLifetime.enabled;
        if (PtcMng.sizeOverLifetime.enabled)
        {
            PTC["sizeOvertimeModule"]["separateAxes"] = PtcMng.sizeOverLifetime.separateAxes;
            PTC["sizeOvertimeModule"]["size"]         = JSONConvert(PtcMng.sizeOverLifetime.size);
        }

        PTC["velocityOvertimeModule"]["enable"] = PtcMng.velocityOverLifetime.enabled;
        if (PtcMng.velocityOverLifetime.enabled)
        {
            PTC["velocityOvertimeModule"]["space"] = PtcMng.velocityOverLifetime.space == ParticleSystemSimulationSpace.World ? 0 : 1;
            PTC["velocityOvertimeModule"]["x"]     = JSONConvert(PtcMng.velocityOverLifetime.x);
            PTC["velocityOvertimeModule"]["y"]     = JSONConvert(PtcMng.velocityOverLifetime.y);
            PTC["velocityOvertimeModule"]["z"]     = JSONConvert(PtcMng.velocityOverLifetime.z);
        }

        PTC["forceOvertimeModule"]["enable"] = PtcMng.forceOverLifetime.enabled;
        if (PtcMng.forceOverLifetime.enabled)
        {
            PTC["forceOvertimeModule"]["space"] = PtcMng.forceOverLifetime.space == ParticleSystemSimulationSpace.World ? 0 : 1;
            PTC["forceOvertimeModule"]["x"]     = JSONConvert(PtcMng.forceOverLifetime.x);
            PTC["forceOvertimeModule"]["y"]     = JSONConvert(PtcMng.forceOverLifetime.y);
            PTC["forceOvertimeModule"]["z"]     = JSONConvert(PtcMng.forceOverLifetime.z);
        }

        PTC["limitVelocityOvertimeModule"]["enable"] = PtcMng.limitVelocityOverLifetime.enabled;
        if (PtcMng.limitVelocityOverLifetime.enabled)
        {
            PTC["limitVelocityOvertimeModule"]["space"]        = PtcMng.limitVelocityOverLifetime.space == ParticleSystemSimulationSpace.World ? 0 : 1;
            PTC["limitVelocityOvertimeModule"]["separateAxes"] = PtcMng.limitVelocityOverLifetime.separateAxes;
            PTC["limitVelocityOvertimeModule"]["limit"]        = JSONConvert(PtcMng.limitVelocityOverLifetime.limit);
            PTC["limitVelocityOvertimeModule"]["limitX"]       = JSONConvert(PtcMng.limitVelocityOverLifetime.limitX);
            PTC["limitVelocityOvertimeModule"]["limitY"]       = JSONConvert(PtcMng.limitVelocityOverLifetime.limitY);
            PTC["limitVelocityOvertimeModule"]["limitZ"]       = JSONConvert(PtcMng.limitVelocityOverLifetime.limitZ);
            PTC["limitVelocityOvertimeModule"]["dampen"]       = PtcMng.limitVelocityOverLifetime.dampen;
        }

        PTC["rotationOvertimeModule"]["enable"] = PtcMng.rotationOverLifetime.enabled;
        if (PtcMng.rotationOverLifetime.enabled)
        {
            PTC["rotationOvertimeModule"]["_separateAxes"] = PtcMng.rotationOverLifetime.separateAxes;
            PTC["rotationOvertimeModule"]["x"]             = JSONConvert(PtcMng.rotationOverLifetime.x);
            PTC["rotationOvertimeModule"]["y"]             = JSONConvert(PtcMng.rotationOverLifetime.y);
            PTC["rotationOvertimeModule"]["z"]             = JSONConvert(PtcMng.rotationOverLifetime.z);
        }

        PTC["textureAnimationModule"]["_enable"] = PtcMng.textureSheetAnimation.enabled;
        if (PtcMng.textureSheetAnimation.enabled)
        {
#if UNITY_2018
            PTC["textureAnimationModule"]["_mode"] = PtcMng.textureSheetAnimation.mode == ParticleSystemAnimationMode.Grid?0:1;
//            PtcMng.textureSheetAnimation.timeMode
#endif
            PTC["textureAnimationModule"]["numTilesX"]      = 0;
            PTC["textureAnimationModule"]["numTilesY"]      = 0;
            PTC["textureAnimationModule"]["frameOverTime"]  = JSONConvert(PtcMng.textureSheetAnimation.frameOverTime);
            PTC["textureAnimationModule"]["startFrame"]     = JSONConvert(PtcMng.textureSheetAnimation.startFrame);
            PTC["textureAnimationModule"]["cycleCount"]     = PtcMng.textureSheetAnimation.cycleCount;
            PTC["textureAnimationModule"]["_flipU"]         = JSONConvert(PtcMng.textureSheetAnimation.flipU);
            PTC["textureAnimationModule"]["_flipV"]         = JSONConvert(PtcMng.textureSheetAnimation.flipV);
            PTC["textureAnimationModule"]["_uvChannelMask"] = (int) PtcMng.textureSheetAnimation.uvChannelMask;
        }

        PTC["trailModule"]["_enable"] = PtcMng.trails.enabled;
        if (PtcMng.trails.enabled)
        {
            //PtcMng.trails.ratio
            PTC["trailModule"]["lifeTime"]             = JSONConvert(PtcMng.trails.lifetime);
            PTC["trailModule"]["_minParticleDistance"] = PtcMng.trails.minVertexDistance;
            PTC["trailModule"]["_space"]               = PtcMng.trails.worldSpace ? 0 : 1;
            PTC["trailModule"]["existWithParticles"]   = PtcMng.trails.dieWithParticles;
            PTC["trailModule"]["textureMode"]          = PtcMng.trails.textureMode == ParticleSystemTrailTextureMode.Stretch ? 0 : 1;
            PTC["trailModule"]["widthFromParticle"]    = PtcMng.trails.sizeAffectsWidth;
            PTC["trailModule"]["colorFromParticle"]    = PtcMng.trails.inheritParticleColor;
            PTC["trailModule"]["colorOverTrail"]       = JSONConvert(PtcMng.trails.colorOverTrail);
            PTC["trailModule"]["widthRatio"]           = JSONConvert(PtcMng.trails.widthOverTrail);
            PTC["trailModule"]["colorOvertime"]        = JSONConvert(PtcMng.trails.colorOverLifetime);
            PTC["trailModule"]["sizeAffectsLifetime"]  = PtcMng.trails.sizeAffectsLifetime; //bool
        }

        PTC["_renderMode"]    = (int) PtcRenderer.renderMode;
        PTC["_velocityScale"] = PtcRenderer.velocityScale;
        PTC["_lengthScale"]   = PtcRenderer.lengthScale;
        PTC["_mesh"]          = AssetDatabase.GetAssetPath(PtcRenderer.mesh);


        PTC["rotationBySpeed"]["enabled"] = PtcMng.rotationBySpeed.enabled;
        PTC["rotationBySpeed"]["enabled"] = PtcMng.rotationBySpeed.enabled;

        PTC["materialPath"] = new JSONArray();
        l = PtcRenderer.sharedMaterials.Length;
        if (PtcRenderer && l > 0)
        {
            string pathInProject = "";
            for (i = 0; i < l; i++)
            {
                Material loopTemp     = PtcRenderer.sharedMaterials[i];
                string   MaterialPath = AssetDatabase.GetAssetPath(loopTemp);
                if (!loopTemp)
                {
                    continue;
                }

                string mainTexturePath = AssetDatabase.GetAssetPath(loopTemp.mainTexture);
                string materialPath;
                if (mainTexturePath != "Resources/unity_builtin_extra" && mainTexturePath != "")
                {
                    string copyFromePath = Application.dataPath + "/../"                   + mainTexturePath;
                    string copyToPath    = Application.dataPath + "/../../outputJsonAnim/" + mainTexturePath;
                    string copyToRoot    = Path.GetDirectoryName(copyToPath);
                    if (copyToRoot != null) Directory.CreateDirectory(copyToRoot);

                    if (File.Exists(copyToPath))
                    {
                        FileUtil.ReplaceFile(copyFromePath, copyToPath);
                    }
                    else
                    {
                        FileUtil.CopyFileOrDirectory(copyFromePath, copyToPath);
                    }

                    materialPath = AssetDatabase.GetAssetPath(loopTemp);

                    outPutMatrial(loopTemp.name, AssetDatabase.GetAssetPath(loopTemp), relativePath(materialPath, mainTexturePath)); //(string name, string path)
                    
                    PTC["materialPath"][i] = materialPath;
                }
                else
                {
                    //預設材質球 
                    PTC["materialPath"][i] = "Default";
                }
            }
        }
        else
        {
            //預設材質球 
            PTC["materialPath"][0] = "Default";
        }


        l = PtcRenderer.sharedMaterials.Length;


//        Debug.Log(PtcMng.name + " sharedMaterials.Length :" + l);
//        for (i = 0; i < l; i++)
//        {
//            Debug.Log(PtcMng.name + " sharedMaterials[" + i + "] :" + PtcRenderer.sharedMaterials[i]);
//
//
//            //_materials
//        }
//
//        l = PtcRenderer.materials.Length;
//        Debug.Log(PtcMng.name + " materials.Length :" + l);
//        for (i = 0; i < l; i++)
//        {
//            Debug.Log(PtcMng.name + " materials[" + i + "] :" + PtcRenderer.materials[i]);
//        }
//
//        Debug.Log(PtcMng.name + " sharedMaterial         :" + PtcRenderer.sharedMaterial);
//        Debug.Log(PtcMng.name + " material               :" + PtcRenderer.material);
//        Debug.Log(PtcMng.name + " trailMaterial          :" + PtcRenderer.trailMaterial);

//        PtcRenderer.materials
//        PtcRenderer.material
//        PtcRenderer.trailMaterial
        //PtcMng.rotationBySpeed
        //PtcMng.externalForces
        //PtcMng.noise
        //PtcMng.collision
        //PtcMng.subEmitters   有_subEmitters但似乎功能不同
        //PtcMng.lights
        //PtcMng.customData    有_customData但似乎功能不同
        //PtcMng.trigger        //cocos addListener(PUListener *listener) / removeListener(PUListener *listener) / removeAllListener ()

        WriteJsonFile(PTC.ToString(), path);
    }

    // relativePath(載體路徑,圖片相對路徑)
    // 回傳：與載體的相對路徑
    // 用途：可以在cocos中使用animformjson中，使用relativePath(載體路徑,圖片相對路徑)取回db路徑
    static string relativePath(string inA, string inB)
    {
        int i, j, k, l;
        l = inA.Length * 1;
        k = inB.Length * 1;
        for (i = 0, j = 0; i < l && i < k; i++)
        {
            if (inA[i] != inB[i])
            {
                j = i;
                break;
            }
        }

        string[] arr   = inA.Substring(j, l - j).Split('/');
        string   pathA = inB.Substring(j, k - j);
        l = arr.Length;
        string tmp = "";
        for (i = 0; i < l - 1; i++)
            tmp = "../" + tmp;

        return tmp + pathA;
    }


    static JSONNode JSONConvert(ParticleSystem.MinMaxCurve thisCurve)
    {
        JSONNode ret = new SimpleJSON_CC.JSONObject();
        switch (thisCurve.mode)
        {
            default:
                ret["mode"]     = 0;
                ret["constant"] = thisCurve.constant;
                break;
            case ParticleSystemCurveMode.Curve:
                ret["mode"]  = 1;
                ret["curve"] = JSONConvert(thisCurve.curve);
                break;
            case ParticleSystemCurveMode.TwoCurves:
                ret["mode"]     = 2;
                ret["curveMin"] = JSONConvert(thisCurve.curveMin);
                ret["curveMax"] = JSONConvert(thisCurve.curveMax);
                break;
            case ParticleSystemCurveMode.TwoConstants:
                ret["mode"]        = 3;
                ret["constantMin"] = thisCurve.constantMin;
                ret["constantMax"] = thisCurve.constantMax;
                break;
        }

        return ret;
    }

    static JSONNode JSONConvert(ParticleSystem.MinMaxGradient thisGradient)
    {
        JSONNode ret = new SimpleJSON_CC.JSONObject();

        switch (thisGradient.mode)
        {
            case ParticleSystemGradientMode.Color:
                ret["mode"] = 0;
                ret["color"] = ColorConvert(thisGradient.color);
                break;
            case ParticleSystemGradientMode.Gradient:
                ret["mode"]    = 1;
                ret["gradient"] = JSONConvert(thisGradient.gradient);
                break;
            case ParticleSystemGradientMode.TwoColors:
                ret["mode"]    = 2;
                ret["colorMin"] = ColorConvert(thisGradient.colorMin);
                ret["colorMax"] = ColorConvert(thisGradient.colorMax);
                break;
            case ParticleSystemGradientMode.TwoGradients:
                ret["mode"]       = 3;
                ret["gradientMin"] = JSONConvert(thisGradient.gradientMin);
                ret["gradientMax"] = JSONConvert(thisGradient.gradientMax);
                break;
            case ParticleSystemGradientMode.RandomColor:
                ret["mode"] = 4;
                break;
        }

        return ret;
    }

    static JSONNode JSONConvert(AnimationCurve thisCurve)
    {
        JSONNode ret = new SimpleJSON_CC.JSONObject();
        ret["_keyFrames"] = new JSONArray();
        int i, l = thisCurve.length;
        for (i = 0; i < l; i++)
        {
            ret["_keyFrames"][i]["time"]       = thisCurve.keys[i].time;
            ret["_keyFrames"][i]["value"]      = thisCurve.keys[i].value;
            ret["_keyFrames"][i]["inTangent"]  = thisCurve.keys[i].inTangent;
            ret["_keyFrames"][i]["outTangent"] = thisCurve.keys[i].outTangent;
            switch (thisCurve.preWrapMode)
            {
                case WrapMode.Default:
                    ret["preWrapMode"] = 0;
                    break;
                case WrapMode.Once: //=Clamp
                    ret["preWrapMode"] = 1;
                    break;
                case WrapMode.Loop:
                    ret["preWrapMode"] = 2;
                    break;
                case WrapMode.PingPong:
                    ret["preWrapMode"] = 3;
                    break;
                case WrapMode.ClampForever:
                    ret["preWrapMode"] = 4;
                    break;
            }

            switch (thisCurve.postWrapMode)
            {
                case WrapMode.Default:
                    ret["postWrapMode"] = 0;
                    break;
                case WrapMode.Once: //=Clamp
                    ret["postWrapMode"] = 1;
                    break;
                case WrapMode.Loop:
                    ret["postWrapMode"] = 2;
                    break;
                case WrapMode.PingPong:
                    ret["postWrapMode"] = 3;
                    break;
                case WrapMode.ClampForever:
                    ret["postWrapMode"] = 4;
                    break;
            }
        }

        return ret;
    }

    static JSONNode JSONConvert(Gradient thisGradient)
    {
        JSONNode ret = new SimpleJSON_CC.JSONObject();
        ret["colorKeys"] = new JSONArray();
        int i, l = thisGradient.colorKeys.Length;
        for (i = 0; i < l; i++)
        {
            ret["colorKeys"][i]["color"] = ColorConvert(thisGradient.colorKeys[i].color);
            ret["colorKeys"][i]["time"]  = thisGradient.colorKeys[i].time;
        }

        ret["alphaKeys"] = new JSONArray();
        l                = thisGradient.alphaKeys.Length;
        for (i = 0; i < l; i++)
        {
            ret["alphaKeys"][i]["alpha"] = (int) (thisGradient.alphaKeys[i].alpha * 255);
            ret["alphaKeys"][i]["time"]  = thisGradient.alphaKeys[i].time;
        }

        ret["mode"] = thisGradient.mode == GradientMode.Blend ? 1 : 0;
        return ret;
    }

    static JSONNode ColorConvert(Color thisColor, bool alpha = false)
    {
        JSONNode ret = new SimpleJSON_CC.JSONObject();
        ret["r"] = Mathf.Floor(thisColor.r * 255);
        ret["g"] = Mathf.Floor(thisColor.g * 255);
        ret["b"] = Mathf.Floor(thisColor.b * 255);
        if (alpha) ret["a"] = Mathf.Floor(thisColor.a * 255);
        else ret["a"]       = 255;
        return ret;
    }


    static void WriteJsonFile(string content, string filename)
    {
        FileStream f;

        string copyToRoot = Path.GetDirectoryName(filename);
        Directory.CreateDirectory(copyToRoot);

        if (File.Exists(filename))
        {
            f = new FileStream(filename, FileMode.Truncate, FileAccess.Write);
        }
        else
        {
            f = new FileStream(filename, FileMode.Create, FileAccess.Write);
        }

        StreamWriter sw = new StreamWriter(f);
        sw.Write("");
        sw.Close();
        f.Close();
        f  = new FileStream(filename, FileMode.Truncate, FileAccess.Write);
        sw = new StreamWriter(f);
        string FormatJSON = "null";
        try
        {
            FormatJSON = JsonTree(Json.Serialize(Json.Deserialize(content)));
        }
        catch (Exception e)
        {
            sw.Write(content);
            sw.Close();
            f.Close();
            Console.WriteLine(e);
            throw;
        }

        sw.Write(FormatJSON);
        sw.Close();
        f.Close();
    }

    public static string JsonTree(string json)
    {
        int    level    = 0;
        char[] jsonArr  = json.ToCharArray();
        string jsonTree = string.Empty;
        for (int i = 0; i < json.Length; i++)
        {
            char c = jsonArr[i];
            if (level > 0 && '\n' == jsonTree.ToCharArray()[jsonTree.Length - 1])
            {
                jsonTree += TreeLevel(level);
            }

            switch (c)
			{
				case '{':
				case '[':
                    jsonTree += c + "\n";
                    level++;
                    break;
                case ',':
                    jsonTree += c + "\n";
				break;
				case '}':
				case ']':
                    jsonTree += "\n";
                    level--;
                    jsonTree += TreeLevel(level);
                    jsonTree += c;
                    break;
                default:
                    jsonTree += c;
                    break;
            }
        }

        return jsonTree;
    }

    private static string TreeLevel(int level)
    {
        string leaf = string.Empty;
        for (int t = 0; t < level; t++)
        {
            leaf += "\t";
        }

        return leaf;
    }
}