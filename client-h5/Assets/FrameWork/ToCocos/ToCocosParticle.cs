using System;
using UnityEngine;
using example.invalid;
using System.Runtime.CompilerServices;
using System.Xml;
using UnityEditor;
using Object = UnityEngine.Object;

public class ToCocosParticle
{
    static ParticleSystem PtcMng;

    static float particleLifespan         = 0;
    static float particleLifespanVariance = 0;
    static float emissionRate             = 0;

    static float progress = 0.0f;

    static string[] compareShaderNames =
    {
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
        "Particles/Standard Surface",
        "Particles/Standard Unlit"
    };

    static int[] BlendSrc =
    {
        (int) BlendsModes.SRC_ALPHA,
        (int) BlendsModes.ONE,
        (int) BlendsModes.SRC_ALPHA,
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

    [MenuItem("Tools/output particle to Cocos")]
    public static void SelectToOutPut()
    {
        Object[] selectedAsset = Selection.GetFiltered(typeof(GameObject), SelectionMode.Editable);
        if (selectedAsset.Length < 1)
        {
            EditorUtility.DisplayDialog("Output Particle",
                "Select a 'Particle' to Output", "Back");
            return;
        }

        int i = 0;
        foreach (Object obj in selectedAsset)
        {
            progress = ((float) selectedAsset.Length) / (float) i;
            EditorUtility.DisplayProgressBar("cocos resource converter", obj.name, progress);

            if (obj is GameObject)
            {
                CreateXml(obj);
            }

            i++;
        }

        EditorUtility.ClearProgressBar();
    }

    static void CreateXml(Object selected)
    {
        int  i, j, k, l;
        bool gravity = false;

        PtcMng = (selected as GameObject).GetComponent<ParticleSystem>();
        if (!PtcMng)
            return;
        ParticleSystemRenderer PtcRenderer = PtcMng.gameObject.GetComponent<ParticleSystemRenderer>();

        Color maxC = new Color(0, 0, 0, 0), minC = new Color(0, 0, 0, 0);
        float maxN = 0,
            minN   = 0,
            tmpN   = 0;
        string pathInProject = "";

        if (PtcRenderer)
        {
            string mainTexturePath = AssetDatabase.GetAssetPath(PtcRenderer.sharedMaterial.mainTexture);

            // Debug.Log("shader:" + PtcRenderer.sharedMaterial.shader.name);

            // Debug.Log("shader GetInt Blend :" + shader.GetFloat(0));

            pathInProject = Path.GetDirectoryName(mainTexturePath) + "\\";
            string copyFromePath = Application.dataPath + "/../"                   + mainTexturePath;
            string copyToPath    = Application.dataPath + "/../../outputJsonAnim/" + mainTexturePath;
            if (File.Exists(copyToPath))
            {
                FileUtil.ReplaceFile(copyFromePath, copyToPath);
            }
            else
            {
                FileUtil.CopyFileOrDirectory(copyFromePath, copyToPath);
            }
        }


        string path = Application.dataPath + "/../../outputJsonAnim/" + pathInProject + Path.ChangeExtension(PtcMng.name + "_Particle", "plist");

        var folder = Path.GetDirectoryName(path);
        Directory.CreateDirectory(folder);

        if (File.Exists(path))
        {
            File.Delete(path);
        }

        XmlDocument xmldoc;
        //创建最上一层的节点。
        xmldoc = new XmlDocument();
        xmldoc.AppendChild(xmldoc.CreateXmlDeclaration("1.0", "UTF-8", null));
        xmldoc.AppendChild(xmldoc.CreateDocumentType("plist", "-//Apple//DTD PLIST 1.0//EN",
            "http://example.invalid/DTDs/PropertyList-1.0.dtd", null));

        //创建最上一层的节点。
        XmlElement root = xmldoc.CreateElement("plist");
        root.SetAttribute("version", "1.0");
        xmldoc.AppendChild(root);

        XmlElement elementChild1;
        XmlElement element = NewXmlElement(root, "dict");

        //裡面這邊順序不重要 最大值與最小值也可以互換
        if (PtcRenderer)
        {
            NweKeys(element, "spriteFrameName", PtcRenderer.sharedMaterial.mainTexture.name); //圖片的名稱
        }

        float duration = PtcMng.main.duration;
        duration = -1;
        NweKeys(element, "duration", duration); //動態的時間長度


        switch (PtcMng.emission.rateOverTime.mode) //emissionRate
        {
            case ParticleSystemCurveMode.Constant:
                emissionRate = PtcMng.emission.rateOverTime.constant;
                break;
            case ParticleSystemCurveMode.Curve:

                l    = PtcMng.emission.rateOverTime.curve.length;
                maxN = 0;
                for (i = 0; i < l; i++)
                {
                    maxN = PtcMng.emission.rateOverTime.curve[i].value > maxN ? PtcMng.emission.rateOverTime.curve[i].value : maxN;
                }

                minN = maxN;
                for (i = 0; i < l; i++)
                {
                    minN = PtcMng.emission.rateOverTime.curve[i].value < minN ? PtcMng.emission.rateOverTime.curve[i].value : minN;
                }

                emissionRate = Mathf.Floor((maxN + minN) * 0.5f);
                break;
            case ParticleSystemCurveMode.TwoConstants:
                maxN         = PtcMng.emission.rateOverTime.constantMax;
                minN         = PtcMng.emission.rateOverTime.constantMin;
                emissionRate = Mathf.Floor((maxN + minN) * 0.5f);
                break;
            case ParticleSystemCurveMode.TwoCurves:
                l    = PtcMng.emission.rateOverTime.curveMax.length;
                maxN = 0;
                for (i = 0; i < l; i++)
                {
                    maxN = PtcMng.emission.rateOverTime.curveMax[i].value > maxN ? PtcMng.emission.rateOverTime.curveMax[i].value : maxN;
                }

                l    = PtcMng.emission.rateOverTime.curveMin.length;
                minN = maxN;
                for (i = 0; i < l; i++)
                {
                    minN = PtcMng.emission.rateOverTime.curveMin[i].value < minN ? PtcMng.emission.rateOverTime.curveMin[i].value : minN;
                }

                emissionRate = Mathf.Floor((maxN + minN) * 0.5f);
                break;
        }


        switch (PtcMng.emission.rateOverDistance.mode) //emissionRate
        {
            case ParticleSystemCurveMode.Constant:
                emissionRate = emissionRate + 10 / PtcMng.emission.rateOverDistance.constant;
                break;
            case ParticleSystemCurveMode.Curve:

                l    = PtcMng.emission.rateOverDistance.curve.length;
                maxN = 0;
                for (i = 0; i < l; i++)
                {
                    maxN = PtcMng.emission.rateOverDistance.curve[i].value > maxN ? PtcMng.emission.rateOverDistance.curve[i].value : maxN;
                }

                minN = maxN;
                for (i = 0; i < l; i++)
                {
                    minN = PtcMng.emission.rateOverDistance.curve[i].value < minN ? PtcMng.emission.rateOverDistance.curve[i].value : minN;
                }

                emissionRate = emissionRate + 10 / Mathf.Floor((maxN + minN) * 0.5f);
                break;
            case ParticleSystemCurveMode.TwoConstants:
                maxN         = PtcMng.emission.rateOverDistance.constantMax;
                minN         = PtcMng.emission.rateOverDistance.constantMin;
                emissionRate = emissionRate + 10 / Mathf.Floor((maxN + minN) * 0.5f);
                break;
            case ParticleSystemCurveMode.TwoCurves:
                l    = PtcMng.emission.rateOverDistance.curveMax.length;
                maxN = 0;
                for (i = 0; i < l; i++)
                {
                    maxN = PtcMng.emission.rateOverDistance.curveMax[i].value > maxN ? PtcMng.emission.rateOverDistance.curveMax[i].value : maxN;
                }

                l    = PtcMng.emission.rateOverDistance.curveMin.length;
                minN = maxN;
                for (i = 0; i < l; i++)
                {
                    minN = PtcMng.emission.rateOverDistance.curveMin[i].value < minN ? PtcMng.emission.rateOverDistance.curveMin[i].value : minN;
                }

                emissionRate = emissionRate + 10 / Mathf.Floor((maxN + minN) * 0.5f);
                break;
        }


        NweKeys(element, "emissionRate", emissionRate); //每秒產生的粒子數目

        switch (PtcMng.main.startLifetime.mode)
        {
            case ParticleSystemCurveMode.Constant:
                particleLifespan         = PtcMng.main.startLifetime.constant;
                particleLifespanVariance = 0;
                break;
            case ParticleSystemCurveMode.Curve:

                l    = PtcMng.main.startLifetime.curve.length;
                maxN = 0;
                for (i = 0; i < l; i++)
                {
                    maxN = PtcMng.main.startLifetime.curve[i].value > maxN ? PtcMng.main.startLifetime.curve[i].value : maxN;
                }

                minN = maxN;
                for (i = 0; i < l; i++)
                {
                    minN = PtcMng.main.startLifetime.curve[i].value < minN ? PtcMng.main.startLifetime.curve[i].value : minN;
                }

                tmpN                     = maxN - minN;
                particleLifespan         = minN;
                particleLifespanVariance = tmpN;
                break;
            case ParticleSystemCurveMode.TwoConstants:
                minN                     = PtcMng.main.startLifetime.constantMin;
                particleLifespan         = minN;
                particleLifespanVariance = PtcMng.main.startLifetime.constantMax - minN;
                break;
            case ParticleSystemCurveMode.TwoCurves:

                l    = PtcMng.main.startLifetime.curveMax.length;
                maxN = 0;
                for (i = 0; i < l; i++)
                {
                    maxN = PtcMng.main.startLifetime.curveMax[i].value > maxN ? PtcMng.main.startLifetime.curveMax[i].value : maxN;
                }

                l    = PtcMng.main.startLifetime.curveMin.length;
                minN = maxN;
                for (i = 0; i < l; i++)
                {
                    minN = PtcMng.main.startLifetime.curveMin[i].value < minN ? PtcMng.main.startLifetime.curveMin[i].value : minN;
                }

                tmpN                     = maxN - minN;
                particleLifespan         = minN;
                particleLifespanVariance = tmpN;

                break;
        }

        NweKeys(element, "particleLifespan",         particleLifespan);         //粒子存活時間基礎值
        NweKeys(element, "particleLifespanVariance", particleLifespanVariance); //粒子存活時間亂數值


        NweKeys(element, "maxParticles",  PtcMng.main.maxParticles); //同時存在的粒子最大數量 
        NweKeys(element, "angle",         180);                      //角度起始值(粒子產生後的移動角度偏移)
        NweKeys(element, "angleVariance", PtcMng.shape.arc);         //角度亂數值(正負值，例：設為90，則由-90到90共180度)

        ParticleColor(element);    //顏色設定
        ParticleSize(element);     //大小設定
        ParticleRotation(element); //旋轉設定

        int[] posTypeArray = {2, 0, 1};
        NweKeys(element, "positionType", posTypeArray[(int) PtcMng.main.simulationSpace]); //粒子位置類型

        switch (PtcMng.main.gravityModifier.mode)
        {
            case ParticleSystemCurveMode.Constant:
                if (PtcMng.main.gravityModifier.constant > 0)
                {
                    gravity = true;
                    NweKeys(element, "emitterType",             0);                                           //0:Gravity, 1:Radius
                    NweKeys(element, "radialAccelVariance",     0.0f);                                        //emitterType 為0時 粒子平行於重力方向的加速度基礎值
                    NweKeys(element, "radialAcceleration",      0.0f);                                        //emitterType 為0時 粒子平行於重力方向的加速度亂數值
                    NweKeys(element, "tangentialAccelVariance", 0.0f);                                        //emitterType 為0時 粒子全局旋轉重力基礎值 
                    NweKeys(element, "tangentialAcceleration",  0.0f);                                        //emitterType 為0時 粒子全局旋轉重力亂數值
                    NweKeys(element, "gravityx",                0.0f);                                        //emitterType 為0時 X方向的重力值
                    NweKeys(element, "gravityy",                PtcMng.main.gravityModifier.constant * -10f); //emitterType 為0時 Y方向的重力值
                }

                break;
            case ParticleSystemCurveMode.TwoConstants:
                minN = PtcMng.main.gravityModifier.constantMin;
                maxN = PtcMng.main.gravityModifier.constantMax;
                if (minN > 0 || maxN > 0)
                {
                    gravity = true;
                    tmpN    = (minN + maxN) / 2;

                    NweKeys(element, "emitterType",             0);    //0:Gravity, 1:Radius
                    NweKeys(element, "radialAccelVariance",     0.0f); //emitterType 為0時 粒子平行於重力方向的加速度基礎值
                    NweKeys(element, "radialAcceleration",      0.0f); //emitterType 為0時 粒子平行於重力方向的加速度亂數值
                    NweKeys(element, "tangentialAccelVariance", 0.0f); //emitterType 為0時 粒子全局旋轉重力基礎值 
                    NweKeys(element, "tangentialAcceleration",  0.0f); //emitterType 為0時 粒子全局旋轉重力亂數值
                    NweKeys(element, "gravityx",                0.0f); //emitterType 為0時 X方向的重力值
                    NweKeys(element, "gravityy",                tmpN); //emitterType 為0時 Y方向的重力值
                }

                break;
            case ParticleSystemCurveMode.Curve:
                gravity = true;
                l       = PtcMng.main.gravityModifier.curve.length;
                tmpN    = 0;
                for (i = 0; i < l; i++)
                {
                    minN =  PtcMng.main.gravityModifier.curve[i].value;
                    tmpN += minN;
                }

                tmpN = tmpN / l;
                NweKeys(element, "emitterType",             0);    //0:Gravity, 1:Radius
                NweKeys(element, "radialAccelVariance",     0.0f); //emitterType 為0時 粒子平行於重力方向的加速度基礎值
                NweKeys(element, "radialAcceleration",      0.0f); //emitterType 為0時 粒子平行於重力方向的加速度亂數值
                NweKeys(element, "tangentialAccelVariance", 0.0f); //emitterType 為0時 粒子全局旋轉重力基礎值 
                NweKeys(element, "tangentialAcceleration",  0.0f); //emitterType 為0時 粒子全局旋轉重力亂數值
                NweKeys(element, "gravityx",                0.0f); //emitterType 為0時 X方向的重力值
                NweKeys(element, "gravityy",                tmpN); //emitterType 為0時 Y方向的重力值

                break;
            case ParticleSystemCurveMode.TwoCurves:
                gravity = true;
                minN    = PtcMng.main.gravityModifier.curveMin.length;
                tmpN    = 0;
                for (i = 0; i < minN; i++)
                {
                    tmpN += PtcMng.main.gravityModifier.curveMin[i].value;
                }

                maxN = PtcMng.main.gravityModifier.curveMax.length;
                tmpN = 0;
                for (i = 0; i < maxN; i++)
                {
                    tmpN += PtcMng.main.gravityModifier.curveMax[i].value;
                }

                tmpN = tmpN / (minN + maxN);

                NweKeys(element, "emitterType",             0);    //0:Gravity, 1:Radius
                NweKeys(element, "radialAccelVariance",     0.0f); //emitterType 為0時 粒子平行於重力方向的加速度基礎值
                NweKeys(element, "radialAcceleration",      0.0f); //emitterType 為0時 粒子平行於重力方向的加速度亂數值
                NweKeys(element, "tangentialAccelVariance", 0.0f); //emitterType 為0時 粒子全局旋轉重力基礎值 
                NweKeys(element, "tangentialAcceleration",  0.0f); //emitterType 為0時 粒子全局旋轉重力亂數值
                NweKeys(element, "gravityx",                0.0f); //emitterType 為0時 X方向的重力值
                NweKeys(element, "gravityy",                tmpN); //emitterType 為0時 Y方向的重力值
                break;
        }

        switch (PtcMng.main.startSpeed.mode)
        {
            case ParticleSystemCurveMode.Curve:
                l    = PtcMng.main.startSpeed.curve.length;
                tmpN = 0;
                maxN = 0;
                for (i = 0; i < l; i++)
                {
                    minN =  PtcMng.main.startSpeed.curve[i].value;
                    tmpN += minN;
                    maxN =  minN > maxN ? minN : maxN;
                }

                minN = PtcMng.shape.radius;
                tmpN = PtcMng.shape.radiusThickness * 0.5f;
                break;
            case ParticleSystemCurveMode.TwoConstants:
                minN = PtcMng.shape.radius + PtcMng.main.startSpeed.constantMin; //起始
                tmpN = PtcMng.shape.radiusThickness * 0.5f;
                break;
            case ParticleSystemCurveMode.TwoCurves:
                l    = PtcMng.main.startSpeed.curveMin.length;
                tmpN = 0;
                maxN = 0;
                for (i = 0; i < l; i++)
                {
                    minN =  PtcMng.main.startSpeed.curveMin[i].value;
                    tmpN += minN;
                    maxN =  minN > maxN ? minN : maxN;
                }

                minN = PtcMng.shape.radius + tmpN / l;
                tmpN = PtcMng.shape.radiusThickness * 0.5f;
                break;
            default:
                minN = PtcMng.shape.radius;
                tmpN = PtcMng.shape.radiusThickness * 0.5f;
                break;
        }

        if (gravity)
        {
//            Debug.Log("simulationSpeed = " + PtcMng.main.simulationSpeed);
            NweKeys(element, "speed",                   minN * (1 - tmpN) * PtcMng.main.simulationSpeed * 2); //emitterType 為0時 粒子最大移動範圍基礎值
            NweKeys(element, "speedVariance",           minN * tmpN * PtcMng.main.simulationSpeed       * 2); //emitterType 為0時 粒子最大移動範圍亂數值
            NweKeys(element, "maxRadius",               0f);                                                  //emitterType 為1時 start Radius Max 開始時的粒子移動基礎值
            NweKeys(element, "maxRadiusVariance",       0f);                                                  //emitterType 為1時 start Radius Min 開始時的粒子移動亂數值
            NweKeys(element, "minRadius",               0f);                                                  //emitterType 為1時 End Radius Max 結束時的粒子移動基礎值
            NweKeys(element, "minRadiusVariance",       0f);                                                  //emitterType 為1時 End Radius Max 結束時的粒子移動亂數值
            NweKeys(element, "rotatePerSecond",         0f);                                                  //emitterType 為1時 每秒旋轉角度基礎值
            NweKeys(element, "rotatePerSecondVariance", 0f);                                                  //emitterType 為1時 每秒旋轉角度亂數值(正負亂數)
            NweKeys(element, "rotationIsDir",           false);                                               //emitterType 為1時 粒子依照移動方向旋轉
        }
        else
        {
            NweKeys(element, "emitterType",             1);    //0:Gravity, 1:Radius
            NweKeys(element, "radialAccelVariance",     0.0f); //emitterType 為0時 粒子平行於重力方向的加速度基礎值
            NweKeys(element, "radialAcceleration",      0.0f); //emitterType 為0時 粒子平行於重力方向的加速度亂數值
            NweKeys(element, "tangentialAccelVariance", 0.0f); //emitterType 為0時 粒子全局旋轉重力基礎值 
            NweKeys(element, "tangentialAcceleration",  0.0f); //emitterType 為0時 粒子全局旋轉重力亂數值
            NweKeys(element, "speed",                   0.0f); //emitterType 為0時 粒子最大移動範圍基礎值
            NweKeys(element, "speedVariance",           0.0f); //emitterType 為0時 粒子最大移動範圍亂數值
            NweKeys(element, "gravityx",                0.0f); //emitterType 為0時 X方向的重力值
            NweKeys(element, "gravityy",                0.0f); //emitterType 為0時 Y方向的重力值
            if (PtcMng.shape.enabled)
            {
                switch (PtcMng.shape.shapeType)
                {
                    case ParticleSystemShapeType.Sphere:
                    case ParticleSystemShapeType.Hemisphere:
                    case ParticleSystemShapeType.Cone:
                    case ParticleSystemShapeType.Circle:
                        switch (PtcMng.main.startSpeed.mode)
                        {
                            case ParticleSystemCurveMode.Curve:
                                l    = PtcMng.main.startSpeed.curve.length;
                                tmpN = 0;
                                maxN = 0;
                                for (i = 0; i < l; i++)
                                {
                                    minN =  PtcMng.main.startSpeed.curve[i].value;
                                    tmpN += minN;
                                    maxN =  minN > maxN ? minN : maxN;
                                }

                                minN = PtcMng.shape.radius; //起始
                                maxN = minN + tmpN / l;     //結束
                                tmpN = PtcMng.shape.radiusThickness * 0.5f;
                                NweKeys(element, "maxRadius",         minN * (1 - tmpN)); //emitterType 為1時 Start Radius Max 開始時的粒子移動基礎值
                                NweKeys(element, "maxRadiusVariance", minN * tmpN);       //emitterType 為1時 Start Radius Min 開始時的粒子移動亂數值
                                NweKeys(element, "minRadius",         maxN * (1 - tmpN)); //emitterType 為1時 End Radius Max 結束時的粒子移動基礎值
                                NweKeys(element, "minRadiusVariance", maxN * tmpN);       //emitterType 為1時 End Radius Max 結束時的粒子移動亂數值
                                break;
                            case ParticleSystemCurveMode.TwoConstants:
                                minN = PtcMng.shape.radius + PtcMng.main.startSpeed.constantMin; //起始
                                maxN = minN                + PtcMng.main.startSpeed.constantMax; //結束
                                tmpN = PtcMng.shape.radiusThickness * 0.5f;
                                NweKeys(element, "maxRadius",         minN * (1 - tmpN)); //emitterType 為1時 Start Radius Max 開始時的粒子移動基礎值
                                NweKeys(element, "maxRadiusVariance", minN * tmpN);       //emitterType 為1時 Start Radius Min 開始時的粒子移動亂數值
                                NweKeys(element, "minRadius",         maxN * (1 - tmpN)); //emitterType 為1時 End Radius Max 結束時的粒子移動基礎值
                                NweKeys(element, "minRadiusVariance", maxN * tmpN);       //emitterType 為1時 End Radius Max 結束時的粒子移動亂數值
                                break;
                            case ParticleSystemCurveMode.TwoCurves:

                                l    = PtcMng.main.startSpeed.curveMax.length;
                                tmpN = 0;
                                maxN = 0;
                                for (i = 0; i < l; i++)
                                {
                                    minN =  PtcMng.main.startSpeed.curveMax[i].value;
                                    tmpN += minN;
                                    maxN =  minN > maxN ? minN : maxN;
                                }

                                float maxBC = tmpN / l;
                                l    = PtcMng.main.startSpeed.curveMin.length;
                                tmpN = 0;
                                maxN = 0;
                                for (i = 0; i < l; i++)
                                {
                                    minN =  PtcMng.main.startSpeed.curveMin[i].value;
                                    tmpN += minN;
                                    maxN =  minN > maxN ? minN : maxN;
                                }

                                minN = PtcMng.shape.radius + tmpN / l; //起始
                                maxN = minN                + maxBC;    //結束
                                tmpN = PtcMng.shape.radiusThickness * 0.5f;
                                NweKeys(element, "maxRadius",         minN * (1 - tmpN)); //emitterType 為1時 Start Radius Max 開始時的粒子移動基礎值
                                NweKeys(element, "maxRadiusVariance", minN * tmpN);       //emitterType 為1時 Start Radius Min 開始時的粒子移動亂數值
                                NweKeys(element, "minRadius",         maxN * (1 - tmpN)); //emitterType 為1時 End Radius Max 結束時的粒子移動基礎值
                                NweKeys(element, "minRadiusVariance", maxN * tmpN);       //emitterType 為1時 End Radius Max 結束時的粒子移動亂數值
                                break;
                            default:
                                minN = PtcMng.shape.radius;                    //起始
                                maxN = minN + PtcMng.main.startSpeed.constant; //結束
                                tmpN = PtcMng.shape.radiusThickness * 0.5f;
                                NweKeys(element, "maxRadius",         minN * (1 - tmpN)); //emitterType 為1時 Start Radius Max 開始時的粒子移動基礎值
                                NweKeys(element, "maxRadiusVariance", minN * tmpN);       //emitterType 為1時 Start Radius Min 開始時的粒子移動亂數值
                                if (PtcMng.main.startSpeed.constant == 0)
                                {
                                    NweKeys(element, "minRadius",         -1); //emitterType 為1時 End Radius Max 結束時的粒子移動基礎值
                                    NweKeys(element, "minRadiusVariance", 0);  //emitterType 為1時 End Radius Max 結束時的粒子移動亂數值
                                }
                                else
                                {
                                    NweKeys(element, "minRadius",         maxN * (1 - tmpN)); //emitterType 為1時 End Radius Max 結束時的粒子移動基礎值
                                    NweKeys(element, "minRadiusVariance", maxN * tmpN);       //emitterType 為1時 End Radius Max 結束時的粒子移動亂數值
                                }

                                break;
                        }

                        break;
                    case ParticleSystemShapeType.Donut: //甜甜圈型 跟Cocos最像

                        NweKeys(element, "maxRadius",         PtcMng.shape.radius);      //emitterType 為1時 Start Radius Max 開始時的粒子移動基礎值
                        NweKeys(element, "maxRadiusVariance", PtcMng.shape.donutRadius); //emitterType 為1時 Start Radius Min 開始時的粒子移動亂數值
                        NweKeys(element, "minRadius",         PtcMng.shape.radius);      //emitterType 為1時 End Radius Max 結束時的粒子移動基礎值
                        NweKeys(element, "minRadiusVariance", PtcMng.shape.donutRadius); //emitterType 為1時 End Radius Max 結束時的粒子移動亂數值
                        break;
                }
            }
            else
            {
                NweKeys(element, "maxRadius",         0f); //emitterType 為1時 start Radius Max 開始時的粒子移動基礎值
                NweKeys(element, "maxRadiusVariance", 0f); //emitterType 為1時 start Radius Min 開始時的粒子移動亂數值
                NweKeys(element, "minRadius",         0f); //emitterType 為1時 End Radius Max 結束時的粒子移動基礎值
                NweKeys(element, "minRadiusVariance", 0f); //emitterType 為1時 End Radius Max 結束時的粒子移動亂數值
            }

            NweKeys(element, "rotatePerSecond",         0f);    //emitterType 為1時 每秒旋轉角度基礎值
            NweKeys(element, "rotatePerSecondVariance", 0f);    //emitterType 為1時 每秒旋轉角度亂數值(正負亂數)
            NweKeys(element, "rotationIsDir",           false); //emitterType 為1時 粒子依照移動方向旋轉
        }

        ParticleRenderor(element, PtcRenderer);

        //魔改粒子動圖
        TextureSheetAnimate(element);

        //最后保存文件
        xmldoc.Save(path);
        Debug.Log("out put to " + path);
    }

    static void ParticleColor(XmlElement element)
    {
        Color maxV = Color.clear,
            minV   = Color.clear,
            tmpV   = Color.clear,
            SP     = Color.clear,
            SPV    = Color.clear,
            FP     = Color.clear,
            FPV    = Color.clear;
        SPV.a = 0;
        FPV.a = 0;

        switch (PtcMng.main.startColor.mode)
        {
            case ParticleSystemGradientMode.Color:
                SP = PtcMng.main.startColor.color;
                FP = SP;
                break;
            case ParticleSystemGradientMode.RandomColor:
            case ParticleSystemGradientMode.Gradient:

                foreach (GradientColorKey v in PtcMng.main.startColor.gradient.colorKeys)
                {
                    if (v.color.r > maxV.r) maxV.r = v.color.r;
                    if (v.color.g > maxV.g) maxV.g = v.color.g;
                    if (v.color.b > maxV.b) maxV.b = v.color.b;
                }

                foreach (GradientAlphaKey v in PtcMng.main.startColor.gradient.alphaKeys)
                {
                    if (v.alpha > maxV.a) maxV.a = v.alpha;
                }

                minV = maxV;
                foreach (GradientColorKey v in PtcMng.main.startColor.gradient.colorKeys)
                {
                    if (v.color.r < minV.r) minV.r = v.color.r;
                    if (v.color.g < minV.g) minV.g = v.color.g;
                    if (v.color.b < minV.b) minV.b = v.color.b;
                }

                foreach (GradientAlphaKey v in PtcMng.main.startColor.gradient.alphaKeys)
                {
                    if (v.alpha < minV.a) minV.a = v.alpha;
                }

                tmpV = maxV / 2f + minV / 2f;
                SP   = tmpV;
                SPV  = maxV - SP;
                FP   = SP;
                FPV  = SPV;
                break;
            case ParticleSystemGradientMode.TwoColors:
                maxV = PtcMng.main.startColor.colorMax;
                minV = PtcMng.main.startColor.colorMin;
                tmpV = maxV / 2f + minV / 2f;
                SP   = tmpV;
                SPV  = maxV - SP;
                FP   = SP;
                FPV  = SPV;
                break;
            case ParticleSystemGradientMode.TwoGradients:
                foreach (GradientColorKey v in PtcMng.main.startColor.gradientMax.colorKeys)
                {
                    if (v.color.r > maxV.r) maxV.r = v.color.r;
                    if (v.color.g > maxV.g) maxV.g = v.color.g;
                    if (v.color.b > maxV.b) maxV.b = v.color.b;
                }

                foreach (GradientAlphaKey v in PtcMng.main.startColor.gradientMax.alphaKeys)
                {
                    if (v.alpha > maxV.a) maxV.a = v.alpha;
                }

                foreach (GradientColorKey v in PtcMng.main.startColor.gradientMin.colorKeys)
                {
                    if (v.color.r > maxV.r) maxV.r = v.color.r;
                    if (v.color.g > maxV.g) maxV.g = v.color.g;
                    if (v.color.b > maxV.b) maxV.b = v.color.b;
                }

                foreach (GradientAlphaKey v in PtcMng.main.startColor.gradientMin.alphaKeys)
                {
                    if (v.alpha > maxV.a) maxV.a = v.alpha;
                }

                minV = maxV;
                foreach (GradientColorKey v in PtcMng.main.startColor.gradientMax.colorKeys)
                {
                    if (v.color.r < minV.r) minV.r = v.color.r;
                    if (v.color.g < minV.g) minV.g = v.color.g;
                    if (v.color.b < minV.b) minV.b = v.color.b;
                }

                foreach (GradientAlphaKey v in PtcMng.main.startColor.gradientMax.alphaKeys)
                {
                    if (v.alpha < minV.a) minV.a = v.alpha;
                }

                foreach (GradientColorKey v in PtcMng.main.startColor.gradientMin.colorKeys)
                {
                    if (v.color.r < minV.r) minV.r = v.color.r;
                    if (v.color.g < minV.g) minV.g = v.color.g;
                    if (v.color.b < minV.b) minV.b = v.color.b;
                }

                foreach (GradientAlphaKey v in PtcMng.main.startColor.gradientMin.alphaKeys)
                {
                    if (v.alpha < minV.a) minV.a = v.alpha;
                }

                tmpV = maxV / 2f + minV / 2f;
                SP   = tmpV;
                SPV  = maxV - SP;
                FP   = SP;
                FPV  = SPV;
                break;
        }


        if (PtcMng.colorOverLifetime.enabled)
        {
            maxV = Color.clear;
            switch (PtcMng.colorOverLifetime.color.mode)
            {
                case ParticleSystemGradientMode.Gradient:

                    foreach (GradientColorKey v in PtcMng.colorOverLifetime.color.gradient.colorKeys)
                    {
                        if (v.color.r > maxV.r) maxV.r = v.color.r;
                        if (v.color.g > maxV.g) maxV.g = v.color.g;
                        if (v.color.b > maxV.b) maxV.b = v.color.b;
                    }

                    foreach (GradientAlphaKey v in PtcMng.colorOverLifetime.color.gradient.alphaKeys)
                    {
                        if (v.alpha > maxV.a) maxV.a = v.alpha;
                    }

                    minV = maxV;

                    foreach (GradientColorKey v in PtcMng.colorOverLifetime.color.gradient.colorKeys)
                    {
                        if (v.color.r < minV.r) minV.r = v.color.r;
                        if (v.color.g < minV.g) minV.g = v.color.g;
                        if (v.color.b < minV.b) minV.b = v.color.b;
                    }

                    foreach (GradientAlphaKey v in PtcMng.colorOverLifetime.color.gradient.alphaKeys)
                    {
                        if (v.alpha < minV.a) minV.a = v.alpha;
                    }

                    tmpV = maxV / 2f + minV / 2f;
                    FP   = tmpV;
                    FPV  = maxV - FP;
                    break;
                case ParticleSystemGradientMode.TwoGradients:
                    //直接從動態曲線中直接取最大與最小值
                    foreach (GradientColorKey v in PtcMng.colorOverLifetime.color.gradientMax.colorKeys)
                    {
                        if (v.color.r > maxV.r) maxV.r = v.color.r;
                        if (v.color.g > maxV.g) maxV.g = v.color.g;
                        if (v.color.b > maxV.b) maxV.b = v.color.b;
                        if (v.color.a > maxV.a) maxV.a = v.color.a;
                    }

                    foreach (GradientAlphaKey v in PtcMng.colorOverLifetime.color.gradientMax.alphaKeys)
                    {
                        if (v.alpha > maxV.a) maxV.a = v.alpha;
                    }

                    minV = maxV;
                    foreach (GradientColorKey v in PtcMng.colorOverLifetime.color.gradientMax.colorKeys)
                    {
                        if (v.color.r < minV.r) minV.r = v.color.r;
                        if (v.color.g < minV.g) minV.g = v.color.g;
                        if (v.color.b < minV.b) minV.b = v.color.b;
                        if (v.color.a < minV.b) minV.b = v.color.a;
                    }

                    foreach (GradientAlphaKey v in PtcMng.colorOverLifetime.color.gradientMax.alphaKeys)
                    {
                        if (v.alpha < minV.a) minV.a = v.alpha;
                    }

                    tmpV = maxV / 2f + minV / 2f;
                    FP   = tmpV;
                    FPV  = maxV - FP;
                    break;
            }
        }

        NweKeys(element, "startColorAlpha",          (float) SP.a);  //開始時的粒子透明度亂數範圍最大值(0~1)
        NweKeys(element, "startColorBlue",           (float) SP.b);  //開始時的粒子藍色亂數範圍最大值(0~1)
        NweKeys(element, "startColorGreen",          (float) SP.g);  //開始時的粒子綠色亂數範圍最大值(0~1)
        NweKeys(element, "startColorRed",            (float) SP.r);  //開始時的粒子紅色亂數範圍最大值(0~1)
        NweKeys(element, "startColorVarianceAlpha",  (float) SPV.a); //開始時的粒子透明度亂數範圍最小值(0~1)
        NweKeys(element, "startColorVarianceBlue",   (float) SPV.b); //開始時的粒子藍色亂數範圍最小值(0~1)
        NweKeys(element, "startColorVarianceGreen",  (float) SPV.g); //開始時的粒子綠色亂數範圍最小值(0~1)
        NweKeys(element, "startColorVarianceRed",    (float) SPV.r); //開始時的粒子紅色亂數範圍最小值(0~1)
        NweKeys(element, "finishColorAlpha",         (float) FP.a);  //開始時的粒子透明度亂數範圍最大值(0~1)
        NweKeys(element, "finishColorBlue",          (float) FP.b);  //開始時的粒子藍色亂數範圍最大值(0~1)
        NweKeys(element, "finishColorGreen",         (float) FP.g);  //開始時的粒子綠色亂數範圍最大值(0~1)
        NweKeys(element, "finishColorRed",           (float) FP.r);  //開始時的粒子紅色亂數範圍最大值(0~1)
        NweKeys(element, "finishColorVarianceAlpha", (float) FPV.a); //開始時的粒子透明度亂數範圍最小值(0~1)
        NweKeys(element, "finishColorVarianceBlue",  (float) FPV.b); //開始時的粒子藍色亂數範圍最小值(0~1)
        NweKeys(element, "finishColorVarianceGreen", (float) FPV.g); //開始時的粒子綠色亂數範圍最小值(0~1)
        NweKeys(element, "finishColorVarianceRed",   (float) FPV.r); //開始時的粒子紅色亂數範圍最小值(0~1)
    }

    static void ParticleSize(XmlElement element)
    {
        float maxN = 0, minN, tmpN = 0, SP = 0.0f, SPV = 0.0f, FP = 0.0f, FPV = 0.0f;
        int   i,        l;
        switch (PtcMng.main.startSize.mode)
        {
            case ParticleSystemCurveMode.Constant:
                SP = PtcMng.main.startSize.constant;
                FP = PtcMng.main.startSize.constant;
                break;
            case ParticleSystemCurveMode.Curve:
                l = PtcMng.main.startSize.curve.length;
                for (i = 0; i < l; i++)
                {
                    minN =  PtcMng.main.startSize.curve[i].value;
                    tmpN += minN;
                    maxN =  minN > maxN ? minN : maxN;
                }

                minN = tmpN / l;
                tmpN = maxN - tmpN;

                SP  = minN;
                SPV = tmpN;
                FP  = minN;
                FPV = tmpN;
                break;
            case ParticleSystemCurveMode.TwoConstants:
                maxN = PtcMng.main.startSize.constantMax > PtcMng.main.startSize.constantMin ? PtcMng.main.startSize.constantMax : PtcMng.main.startSize.constantMin;
                minN = PtcMng.main.startSize.constantMin < PtcMng.main.startSize.constantMax ? PtcMng.main.startSize.constantMin : PtcMng.main.startSize.constantMax;
                minN = (maxN + minN) / 2;
                tmpN = maxN - minN;
                SP   = minN;
                SPV  = tmpN;
                FP   = minN;
                FPV  = tmpN;
                break;
            case ParticleSystemCurveMode.TwoCurves:
                l = PtcMng.main.startSize.curveMax.length;
                for (i = 0; i < l; i++)
                {
                    minN =  PtcMng.main.startSize.curveMax[i].value;
                    tmpN += minN;
                    maxN =  minN > maxN ? minN : maxN;
                }

                l = PtcMng.main.startSize.curveMin.length;
                for (i = 0; i < l; i++)
                {
                    minN =  PtcMng.main.startSize.curveMax[i].value;
                    tmpN += minN;
                    maxN =  minN > maxN ? minN : maxN;
                }

                l = PtcMng.main.startSize.curveMax.length + i;

                minN = tmpN / l;
                tmpN = maxN - tmpN;

                SP  = minN;
                SPV = tmpN;
                FP  = minN;
                FPV = tmpN;
                break;
        }

        if (PtcMng.sizeOverLifetime.enabled)
        {
            switch (PtcMng.sizeOverLifetime.size.mode)
            {
                case ParticleSystemCurveMode.Curve: //結束時的粒子顆粒縮放亂數值

                    tmpN = 0;
                    minN = 0;
                    maxN = 0;
                    foreach (Keyframe v in PtcMng.sizeOverLifetime.size.curve.keys)
                    {
                        minN += 1;
                        tmpN += v.value;
                        if (v.value > maxN) maxN = v.value;
                    }

                    FP  = tmpN / minN          * SP;
                    FPV = (maxN - tmpN / minN) * SP;
                    break;
                case ParticleSystemCurveMode.TwoConstants:
                    maxN = PtcMng.sizeOverLifetime.size.constantMax;
                    minN = PtcMng.sizeOverLifetime.size.constantMin;
                    tmpN = maxN - minN;
                    FP   = minN * SP;
                    FPV  = tmpN * SP;
                    break;
                case ParticleSystemCurveMode.TwoCurves:
                    tmpN = 0;
                    minN = 0;
                    maxN = 0;
                    foreach (Keyframe v in PtcMng.sizeOverLifetime.size.curveMax.keys)
                    {
                        minN++;
                        tmpN += v.value;
                        if (v.value > maxN) maxN = v.value;
                    }

                    foreach (Keyframe v in PtcMng.sizeOverLifetime.size.curveMin.keys)
                    {
                        minN++;
                        tmpN += v.value;
                        if (v.value > maxN) maxN = v.value;
                    }

                    FP  = tmpN / minN          * SP;
                    FPV = (maxN - tmpN / minN) * SP;
                    break;
            }
        }

        SP  = SP  < 1 ? 1 : SP;
        SPV = SPV < 1 ? 1 : SPV;
        FP  = FP  < 1 ? 1 : FP;
        FPV = FPV < 1 ? 1 : FPV;

        NweKeys(element, "startParticleSize",          SP);  //開始時的粒子顆粒縮放起始值
        NweKeys(element, "startParticleSizeVariance",  SPV); //開始時的粒子顆粒縮放亂數值
        NweKeys(element, "finishParticleSize",         FP);  //結束時的粒子顆粒縮放起始值
        NweKeys(element, "finishParticleSizeVariance", FPV);
    }

    static void ParticleRotation(XmlElement element)
    {
        float maxN, minN, tmpN, SP = 0.0f, SPV = 0.0f, FP = 0.0f, FPV = 0.0f, eulerA = 180 / Mathf.PI;

        switch (PtcMng.main.startRotation.mode)
        {
            case ParticleSystemCurveMode.Constant:

                SP = PtcMng.main.startRotation.constant;
                FP = PtcMng.main.startRotation.constant;
                break;
            case ParticleSystemCurveMode.Curve:
                SP = PtcMng.main.startRotation.curve[0].value;
                FP = PtcMng.main.startRotation.curve[PtcMng.main.startRotation.curve.length - 1].value;
                break;
            case ParticleSystemCurveMode.TwoConstants:
                maxN = PtcMng.main.startRotation.constantMax;
                minN = PtcMng.main.startRotation.constantMin;
                tmpN = maxN - minN;
                SP   = minN;
                SPV  = tmpN;
                FP   = minN;
                FPV  = tmpN;
                break;
            case ParticleSystemCurveMode.TwoCurves:
                maxN = PtcMng.main.startRotation.curveMax[0].value;
                minN = PtcMng.main.startRotation.curveMin[0].value;
                tmpN = maxN - minN;
                SP   = minN;
                SPV  = tmpN;
                maxN = PtcMng.main.startRotation.curveMax[PtcMng.main.startRotation.curveMax.length - 1].value;
                minN = PtcMng.main.startRotation.curveMin[PtcMng.main.startRotation.curveMin.length - 1].value;
                tmpN = maxN - minN;
                FP   = minN;
                FPV  = tmpN;
                break;
        }

        if (PtcMng.rotationOverLifetime.enabled)
        {
            switch (PtcMng.rotationOverLifetime.z.mode)
            {
                case ParticleSystemCurveMode.Constant:
                    FP = PtcMng.rotationOverLifetime.z.constant;
                    break;
                case ParticleSystemCurveMode.Curve:
                    FP = PtcMng.rotationOverLifetime.z.curve[PtcMng.rotationOverLifetime.z.curve.length - 1].value;
                    break;
                case ParticleSystemCurveMode.TwoConstants:
                    maxN = PtcMng.rotationOverLifetime.z.constantMax;
                    minN = PtcMng.rotationOverLifetime.z.constantMin;
                    tmpN = maxN - minN;
                    FP   = minN;
                    FPV  = tmpN;

                    break;
                case ParticleSystemCurveMode.TwoCurves:
                    maxN = PtcMng.rotationOverLifetime.z.curveMax[PtcMng.rotationOverLifetime.z.curveMax.length - 1].value;
                    minN = PtcMng.rotationOverLifetime.z.curveMin[PtcMng.rotationOverLifetime.z.curveMin.length - 1].value;
                    tmpN = maxN - minN;
                    FP   = minN;
                    FPV  = tmpN;
                    break;
            }
        }

        NweKeys(element, "rotationStart",         SP  * eulerA); //Start Spin 開始時的粒子旋轉基礎值
        NweKeys(element, "rotationStartVariance", SPV * eulerA); //Start Spin 開始時的粒子旋轉亂數值
        NweKeys(element, "rotationEnd",           FP  * eulerA); //End Spin 結束時的粒子旋轉基礎值
        NweKeys(element, "rotationEndVariance",   FPV * eulerA); //End Spin 結束時的粒子旋轉亂數值 
    }

    static void ParticleRenderor(XmlElement element, ParticleSystemRenderer PtcRenderer)
    {
        if (PtcRenderer)
        {
            string shadername  = PtcRenderer.sharedMaterial.shader.name;
            int    shaderindex = Array.IndexOf(compareShaderNames, shadername);
            if (shaderindex == -1)
            {
                Debug.Log("Shader [" + shadername + "] is not in the [compareShaderNames], now use default Blend Modes!");
                NweKeys(element, "blendFuncDestination", (int) BlendsModes.SRC_ALPHA);
                NweKeys(element, "blendFuncSource",      (int) BlendsModes.ONE_MINUS_SRC_ALPHA);
            }
            else
            {
                NweKeys(element, "blendFuncDestination", BlendDst[shaderindex]);
                NweKeys(element, "blendFuncSource",      BlendSrc[shaderindex]);
            }
        }
    }


    static void NweKeys(XmlElement Parente, string key, int integer)
    {
        NewXmlElement(Parente, "key",     key);
        NewXmlElement(Parente, "integer", integer.ToString());
    }

    static void NweKeys(XmlElement Parente, string key, float number)
    {
        NewXmlElement(Parente, "key",  key);
        NewXmlElement(Parente, "real", number.ToString());
    }

    static void NweKeys(XmlElement Parente, string key, bool keyBool)
    {
        NewXmlElement(Parente, "key", key);
        NewXmlElement(Parente, keyBool.ToString());
    }

    static void NweKeys(XmlElement Parente, string key, string value)
    {
        NewXmlElement(Parente, "key",    key);
        NewXmlElement(Parente, "string", value);
    }

    static XmlElement NewXmlElement(XmlElement Parente, string name, string InnerText = null)
    {
        if (Parente.OwnerDocument != null)
        {
            XmlElement elementChild = Parente.OwnerDocument.CreateElement(name);
            if (InnerText != null)
            {
                elementChild.InnerText = InnerText;
            }

            Parente.AppendChild(elementChild);
            return elementChild;
        }

        return null;
    }

    static void TextureSheetAnimate(XmlElement element)
    {
        if (PtcMng.textureSheetAnimation.enabled)
        {
            int i, l;
            float maxN = 0,
                minN   = 0,
                tmpN   = 0;
            float maxframe  = 0;
            float frameRate = 1;
            switch (PtcMng.textureSheetAnimation.mode)
            {
                case ParticleSystemAnimationMode.Grid:
                    maxframe = PtcMng.textureSheetAnimation.numTilesX * PtcMng.textureSheetAnimation.numTilesY;
                    NweKeys(element, "UVGridX", PtcMng.textureSheetAnimation.numTilesX);
                    NweKeys(element, "UVGridY", PtcMng.textureSheetAnimation.numTilesY);
                    break;
                case ParticleSystemAnimationMode.Sprites:
                    int oSPL = PtcMng.textureSheetAnimation.spriteCount;
                    maxframe = oSPL;
                    for (i = 0; i < oSPL; i++)
                    {
                        NweKeys(element, "Sprites_" + i, PtcMng.textureSheetAnimation.GetSprite(i).name);
                    }

                    break;
            }

            switch (PtcMng.textureSheetAnimation.timeMode)
            {
                case ParticleSystemAnimationTimeMode.Lifetime:

                    switch (PtcMng.textureSheetAnimation.frameOverTime.mode)
                    {
                        case ParticleSystemCurveMode.Constant: //不會動 應該不會用
                            NweKeys(element, "frameRate", -1);
                            break;
                        case ParticleSystemCurveMode.Curve:
                            l    = PtcMng.textureSheetAnimation.frameOverTime.curve.length;
                            tmpN = PtcMng.textureSheetAnimation.frameOverTime.curve.keys[l - 1].time;
                            maxN = PtcMng.textureSheetAnimation.frameOverTime.curve.keys[l - 1].value;
                            if (l == 2 && maxN > 0.9f)
                            {
                                maxframe  = (1 / tmpN) * maxframe;
                                maxframe  = maxframe   / (particleLifespan + particleLifespanVariance);
                                frameRate = 1          / maxframe;
                                NweKeys(element, "frameRate", frameRate);
                            }

                            break;
                        case ParticleSystemCurveMode.TwoConstants:
                            //隨機一張 應該不會用
                            break;
                        case ParticleSystemCurveMode.TwoCurves:
                            //隨機兩種速度...低機率
                            l    = PtcMng.textureSheetAnimation.frameOverTime.curveMin.length;
                            tmpN = PtcMng.textureSheetAnimation.frameOverTime.curveMin.keys[l - 1].time;
                            maxN = PtcMng.textureSheetAnimation.frameOverTime.curveMin.keys[l - 1].value;
                            if (l == 2)
                            {
                                frameRate = (1 / tmpN) * maxframe * maxN;
                                frameRate = frameRate             / (particleLifespan + particleLifespanVariance);
                                frameRate = maxN                  / frameRate;
                            }

                            l    = PtcMng.textureSheetAnimation.frameOverTime.curveMax.length;
                            tmpN = PtcMng.textureSheetAnimation.frameOverTime.curveMax.keys[l - 1].time;
                            maxN = PtcMng.textureSheetAnimation.frameOverTime.curveMax.keys[l - 1].value;
                            if (l == 2)
                            {
                                minN      = frameRate;
                                frameRate = (1 / tmpN) * maxframe * maxN;
                                frameRate = frameRate             / (particleLifespan + particleLifespanVariance);
                                frameRate = maxN                  / frameRate;
                            }

                            frameRate = (frameRate + minN) / 2;
                            NweKeys(element, "frameRate", frameRate);
                            break;
                    }

                    break;
                case ParticleSystemAnimationTimeMode.Speed:
                    //依照移動速度決定目前偵.....?????
                    break;
                case ParticleSystemAnimationTimeMode.FPS:
                    frameRate = 1 / PtcMng.textureSheetAnimation.fps;
                    NweKeys(element, "frameRate", frameRate);
                    break;
            }
        }
    }
}