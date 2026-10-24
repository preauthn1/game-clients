using UnityEditor;
using UnityEditor.Animations;
using UnityEngine;
using UnityEngine.UI;
using example.invalid;
using LitJson;
using Spine.Unity;
using System.Collections.Generic;

public class ExportPrefabToJson : Editor
{
    delegate bool Filter(Component component);

    private static Dictionary<string, AnimatorController> m_AnimatorControllerList = new Dictionary<string, AnimatorController>();

    [MenuItem("Cocos/Export To Json")]
    static void ExportSelect()
    {
        if (Selection.objects != null)
        {
            Object[] prefabs = Selection.GetFiltered(typeof(GameObject), SelectionMode.TopLevel);
            if (prefabs != null)
            {

                // string outPath = Application.dataPath + "/../../../../../TulongQPProject/Assets/Tlqp/Lua/View";
                string savePath = EditorUtility.SaveFolderPanel("选择导出位置", null, "");
                if (!string.IsNullOrEmpty(savePath))
                {
                    foreach (Object obj in prefabs)
                    {
                        ExportJson(obj as GameObject, savePath);
                    }
                }
            }
        }
    }
    
    static void ExportJson(GameObject prefab, string savePath)
    {
        m_AnimatorControllerList.Clear();

        JsonData jd = GetNodeJson(prefab);

        // Debug.Log(JsonMapper.ToJson(jd));
        WriteJsonFile(JsonMapper.ToJson(jd), savePath, prefab.name);

        // AnimatorController
        foreach (KeyValuePair<string, AnimatorController> data in m_AnimatorControllerList)
        {
            string objPath = AssetDatabase.GetAssetPath(data.Value);
            
            objPath = savePath + "/" + objPath;
            var folder = Path.GetDirectoryName(objPath);

            if (File.Exists(folder))
                File.Delete(folder);

            Directory.CreateDirectory(folder);

            JsonData data1 = Parse(data.Value as AnimatorController);
            if (data1 != null)
                WriteJsonFile(JsonMapper.ToJson(data1), folder, data.Value.name + "_controller");
        }
    }

    static JsonData GetNodeJson(GameObject go)
    {
        JsonData node = new JsonData();
        node["name"] = go.name;
        node["pos"] = new JsonData();
        // 保留小数点后两位
        node["pos"]["x"] = System.Math.Round((double)go.transform.localPosition.x, 2);
        node["pos"]["y"] = System.Math.Round((double)go.transform.localPosition.y, 2);
        node["scale"] = new JsonData();
        node["scale"]["x"] = System.Math.Round((double)go.transform.localScale.x, 2);
        node["scale"]["y"] = System.Math.Round((double)go.transform.localScale.y, 2);

        node["rotation"] = System.Math.Round((double)go.transform.localEulerAngles.z, 2);
        node["active"] = go.activeSelf;

        MaskableGraphic comp = go.GetComponent<MaskableGraphic>();
        if (comp != null)
        {
            node["components"] = new JsonData();

            JsonData cj = new JsonData();
            cj["type"] = comp.GetType().ToString();
            cj["size"] = new JsonData();
            cj["size"]["width"] = System.Math.Round(comp.rectTransform.sizeDelta.x, 2);
            cj["size"]["height"] = System.Math.Round(comp.rectTransform.sizeDelta.y, 2);
            if (comp.color.r != 1 && comp.color.g != 1 && comp.color.g != 1)
                cj["color"] = ColorUtility.ToHtmlStringRGB(comp.color);
            if (comp.color.a != 1)
                cj["alpha"] = (int)(comp.color.a * 255);
            cj["depth"] = comp.depth;
            //cj["pivot"] = comp.pivot.ToString();


            if (comp is Text)
            {
                Text label = (comp as Text);
                if (label.font && label.font.name != "Arial")
                    cj["fontName"] = label.font.name;

                cj["text"] = label.text;
                cj["fontSize"] = label.fontSize;
                cj["overflowH"] = (int)label.horizontalOverflow;
                cj["overflowV"] = (int)label.verticalOverflow;
                cj["bestFit"] = label.resizeTextForBestFit;
                cj["spacingY"] = label.lineSpacing;
                cj["alignment"] = (int)label.alignment;

                BindingFont bindingFont = go.GetComponent<BindingFont>();
                if (bindingFont != null)
                {
                    if (bindingFont.isActiveAndEnabled == true)
                        cj["fontName"] = bindingFont.GetFontName();
                }

                /*
                if (label.bitmapFont)
                {
                    // Debug.Log(label.bitmapFont.name);
                    cj["bitmapFont"] = label.bitmapFont.name;
                }
                */
            }

            if (comp is Image)
            {
                Image sprite = comp as Image;
                cj["spType"] = sprite.type.ToString();
                if (sprite.sprite != null)
                {
                    cj["spName"] = sprite.sprite.name;
                    cj["atlas"] = sprite.sprite.texture.name;
                }
                if (sprite.hasBorder == true)
                {
                    cj["border"] = new JsonData();
                    cj["border"]["left"] = sprite.sprite.border.x;
                    cj["border"]["right"] = sprite.sprite.border.z;
                    cj["border"]["top"] = sprite.sprite.border.w;
                    cj["border"]["bottom"] = sprite.sprite.border.y;
                    // Debug.Log("border: " + sprite.spriteName + " node: " + go.name);
                }

                if (sprite.type == Image.Type.Filled)
                {
                    //cj["fillDir"] = (uint)sprite.fillDirection;
                }
            }

            if (comp is RawImage)
            {
                RawImage texture = comp as RawImage;
                if (texture.mainTexture != null)
                {
                    cj["spName"] = texture.mainTexture.name;
                }
            }


            node["components"].Add(cj);
        }

        Button btn = go.GetComponent<Button>();
        if (btn != null)
        {
            node["button"] = new JsonData();
            node["button"]["interactable"] = btn.interactable;
            node["button"]["Transition"] = btn.transition.ToString();

            if (btn.transition == Selectable.Transition.SpriteSwap)
            {
                if (btn.image.sprite)
                {
                    node["button"]["Normal"] = btn.image.sprite.name;

                    if (btn.spriteState.highlightedSprite)
                        node["button"]["Highlighted"] = btn.spriteState.highlightedSprite.name;
                    if (btn.spriteState.pressedSprite)
                        node["button"]["Pressed"] = btn.spriteState.pressedSprite.name;
                    if (btn.spriteState.disabledSprite)
                        node["button"]["Disabled"] = btn.spriteState.disabledSprite.name;
                }
            }
        }

        ToggleGroup[] togglegroup = go.GetComponents<ToggleGroup>();
        if (togglegroup.Length > 0)
        {
            node["togglegroup"] = true;
        }

        Toggle toggle = go.GetComponent<Toggle>();
        if (toggle != null)
        {
            node["toggle"] = new JsonData();
            node["toggle"]["Transition"] = toggle.transition.ToString();

            if (toggle.transition == Selectable.Transition.SpriteSwap)
            {
                if (toggle.image.sprite)
                {
                    node["toggle"]["Normal"] = toggle.image.sprite.name;

                    if (toggle.spriteState.highlightedSprite)
                        node["toggle"]["Highlighted"] = toggle.spriteState.highlightedSprite.name;
                    if (toggle.spriteState.pressedSprite)
                        node["toggle"]["Pressed"] = toggle.spriteState.pressedSprite.name;
                    if (toggle.spriteState.disabledSprite)
                        node["toggle"]["Disabled"] = toggle.spriteState.disabledSprite.name;
                }
            }

            if (toggle.graphic)
                node["toggle"]["checkmark"] = toggle.graphic.name;
        }

        SkeletonGraphic sg = go.GetComponent<SkeletonGraphic>();
        if (sg != null)
        {
            if (sg.skeletonDataAsset != null)
            {
                node["sg"] = new JsonData();
                node["sg"]["startanimation"] = sg.startingAnimation;
                node["sg"]["loop"] = sg.startingLoop;
                node["sg"]["timescale"] = sg.timeScale;
                node["sg"]["initialSkinName"] = sg.initialSkinName;
                node["sg"]["SkeletonDataAsset"] = sg.skeletonDataAsset.name;
            }
            else
            {
                Debug.Log("sg.skeletonDataAsset is null " + go.name);
            }
        }

        Animator animator = go.GetComponent<Animator>();
        if (animator != null)
        {
            if (animator.runtimeAnimatorController)
            {
                string name = animator.runtimeAnimatorController.name;

                node["animator"] = new JsonData();
                node["animator"]["name"] = name + ".controller";

                string objPath = AssetDatabase.GetAssetPath(animator.runtimeAnimatorController);
                string _path = GetPath(objPath);
                node["animator"]["path"] = _path;

                AnimatorController animatorController = animator.runtimeAnimatorController as AnimatorController;
                string objPath1 = AssetDatabase.GetAssetPath(animatorController);

                if (m_AnimatorControllerList.ContainsKey(objPath1) == false)
                    m_AnimatorControllerList.Add(objPath1, animatorController);
                else
                    Debug.Log("the same name " + objPath1);

                AnimationClip[] AnimationClips = animatorController.animationClips;
                if (AnimationClips.Length > 0)
                {
                    node["animator"]["clip"] = new JsonData();

                    Dictionary<string, string> clipPaths = new Dictionary<string, string>();
                    foreach (var data in AnimationClips)
                    {
                        var path1 = AssetDatabase.GetAssetPath(data);
                        path1 = path1.Replace(".anim", "");
                        path1 = GetPath(path1);

                        if (clipPaths.ContainsKey(path1) == false)
                        {
                            clipPaths[path1] = path1;
                            node["animator"]["clip"].Add(path1);
                        }
                    }

                    AnimatorControllerLayer[] AnimatorControllerLayers = animatorController.layers;
                    if (AnimatorControllerLayers.Length > 0)
                    {
                        foreach (var data in AnimatorControllerLayers)
                        {
                            AnimatorStateMachine stateMachine = data.stateMachine;
                            string defaultState = stateMachine.defaultState.name;

                            ChildAnimatorState[] states = stateMachine.states;
                            if (states.Length > 0)
                            {
                                foreach (var state in states)
                                {
                                    if (state.state.name == defaultState)
                                    {
                                        if (state.state.motion)
                                            node["animator"]["defaultClip"] = state.state.motion.name;
                                        break;
                                    }
                                }
                            }
                            break;
                        }
                    }
                }
            }
        }

        Canvas canvas = go.GetComponent<Canvas>();
        if (canvas != null)
        {
            node["canvas"] = true;
            node["canvasRenderOrder"] = canvas.renderOrder;
        }

        RectTransform rect = go.GetComponent<RectTransform>();
        if (rect != null)
        {
            if (rect.anchorMin.x != 0.5f || rect.anchorMin.y != 0.5f ||
                rect.anchorMax.x != 0.5f || rect.anchorMax.y != 0.5f ||
                rect.pivot.x != 0.5f || rect.pivot.y != 0.5f)
            {
                node["rect"] = new JsonData();
                node["rect"]["AnchorMinX"] = System.Math.Round((double)rect.anchorMin.x, 2);
                node["rect"]["AnchorMinY"] = System.Math.Round((double)rect.anchorMin.y, 2);
                node["rect"]["AnchorMaxX"] = System.Math.Round((double)rect.anchorMax.x, 2);
                node["rect"]["AnchorMaxY"] = System.Math.Round((double)rect.anchorMax.y, 2);
                node["rect"]["PivotX"] = System.Math.Round((double)rect.pivot.x, 2);
                node["rect"]["PivotY"] = System.Math.Round((double)rect.pivot.y, 2);
                node["rect"]["Left"] = System.Math.Round((double)rect.offsetMin.x, 2);
                node["rect"]["Botton"] = System.Math.Round((double)rect.offsetMin.y, 2);
                node["rect"]["Right"] = -System.Math.Round((double)rect.offsetMax.x, 2);
                node["rect"]["Top"] = -System.Math.Round((double)rect.offsetMax.y, 2);
                node["rect"]["AnchoredPositionX"] = System.Math.Round((double)rect.anchoredPosition.x, 2);
                node["rect"]["AnchoredPositionY"] = System.Math.Round((double)rect.anchoredPosition.y, 2);
                node["rect"]["SizeDeltaX"] = System.Math.Round((double)rect.sizeDelta.x, 2);
                node["rect"]["SizeDeltaY"] = System.Math.Round((double)rect.sizeDelta.y, 2);

                node["rect"]["x"] = System.Math.Round((double)rect.rect.x, 2);
                node["rect"]["y"] = System.Math.Round((double)rect.rect.y, 2);
                node["rect"]["width"] = System.Math.Round((double)rect.rect.width, 2);
                node["rect"]["height"] = System.Math.Round((double)rect.rect.height, 2);
            }
        }

        VerticalLayoutGroup vlg = go.GetComponent<VerticalLayoutGroup>();
        if (vlg != null)
        {
            node["vlg"] = new JsonData();
            node["vlg"]["width"] = System.Math.Round((double)rect.sizeDelta.x, 2);
            node["vlg"]["height"] = System.Math.Round((double)rect.sizeDelta.y, 2);
            node["vlg"]["spacing"] = System.Math.Round((double)vlg.spacing, 2);
        }

        HorizontalLayoutGroup hlg = go.GetComponent<HorizontalLayoutGroup>();
        if (hlg != null)
        {
            node["hlg"] = new JsonData();
            node["hlg"]["width"] = System.Math.Round((double)rect.sizeDelta.x, 2);
            node["hlg"]["height"] = System.Math.Round((double)rect.sizeDelta.y, 2);
            node["hlg"]["spacing"] = System.Math.Round((double)hlg.spacing, 2);
        }

        ScrollRect scrollRect = go.GetComponent<ScrollRect>();
        if (scrollRect)
        {
            node["scrollView"] = new JsonData();
            node["scrollView"]["horizontal"] = scrollRect.horizontal;
            node["scrollView"]["vertical"] = scrollRect.vertical;
            node["scrollView"]["content"] = scrollRect.content.name;
            node["scrollView"]["movementType"] = (int)scrollRect.movementType;
        }

        Mask mask = go.GetComponent<Mask>();
        if (mask != null)
        {
            node["mask"] = true;
        }

        ParticleSystem ps = go.GetComponent<ParticleSystem>();
        if (ps != null)
        {
            node["ps"] = new JsonData();

            string path = go.name;
            Transform tr = go.transform;
            while (tr.parent != null)
            {
                tr = tr.parent;
                path = tr.name + ">" + path;
            }
            node["ps"]["path"] = path;
        }

        LineRenderer lineRenderer = go.GetComponent<LineRenderer>();
        if (lineRenderer != null)
        {
            node["lineRenderer"] = new JsonData();

            node["lineRenderer"]["width"] = lineRenderer.startWidth;
            node["lineRenderer"]["color"] = ColorUtility.ToHtmlStringRGB(lineRenderer.startColor);
            node["lineRenderer"]["numCapVertices"] = lineRenderer.numCapVertices;
        }

        /*
        UIGrid grid = go.GetComponent<UIGrid>();
        if (grid && grid.enabled)
        {
            node["grid"] = new JsonData();
            node["grid"]["arrangement"] = (uint)grid.arrangement;
        }
        */
        if (go.transform.childCount > 0)
        {
            node["children"] = new JsonData();
            for (int i = 0, len = go.transform.childCount; i < len; ++i)
            {
                JsonData child = GetNodeJson(go.transform.GetChild(i).gameObject);
                node["children"].Add(child);
            }
        }

        DG.Tweening.DOTweenPath tweenPath = go.GetComponent<DG.Tweening.DOTweenPath>();
        if (tweenPath != null)
        {
            List<Vector3> wps = tweenPath.wps;
            if (wps.Count > 0)
            {
                node["tweenPath"] = new JsonData();
                node["tweenPath"]["duration"] = tweenPath.duration;
                node["tweenPath"]["wps"] = new JsonData();
                foreach (var data in wps) {
                    JsonData data1 = new JsonData();
                    // 保留小数点后两位
                    data1["x"] = System.Math.Round((double)data.x, 2);
                    data1["y"] = System.Math.Round((double)data.y, 2);
                    data1["z"] = System.Math.Round((double)data.z, 2);
                    node["tweenPath"]["wps"].Add(data1);
                }
            }
        }

        return node;
    }


    public static JsonData Parse(AnimatorController assetObject)
    {
        AnimatorControllerLayer[] AnimatorControllerLayers = assetObject.layers;
        if (AnimatorControllerLayers.Length < 0)
            return null;

        JsonData node = new JsonData();
        node["__type__"] = "controller";
        node["name"] = assetObject.name;

        node["layer"] = new JsonData();
        foreach (var data in AnimatorControllerLayers)
        {
            JsonData cl = new JsonData();

            node["layer"][data.name] = cl;
            AnimatorStateMachine stateMachine = data.stateMachine;

            cl["defaultState"] = stateMachine.defaultState.name;

            AnimatorStateTransition[] any_transitions = stateMachine.anyStateTransitions;
            if (any_transitions.Length > 0)
            {
                cl["any_trans"] = new JsonData();
                foreach (var t in any_transitions)
                {
                    JsonData cj = new JsonData();
                    cj["desState"] = t.destinationState.name;
                    cj["exitTime"] = t.exitTime;
                    
                    if (t.conditions.Length > 0)
                    {
                        cj["cond"] = new JsonData();
                        foreach (var c in t.conditions)
                        {
                            JsonData cond = new JsonData();
                            cond["mode"] = (int)(c.mode);
                            cond["parameter"] = c.parameter;
                            cond["threshold"] = c.threshold;
                            if (c.parameter == "New Bool")
                            {
                                int aa = 0;
                            }
                            if(c.parameter == "spin")
                            {
                                Debug.Log(c.mode + " " + c.threshold);
                            }

                            cj["cond"].Add(cond);
                        }
                    }

                    cl["any_trans"].Add(cj);
                }
            }

            ChildAnimatorState[] states = stateMachine.states;
            if (states.Length > 0)
            {
                cl["state"] = new JsonData();
                foreach (var state in states)
                {
                    JsonData s = new JsonData();
                    s["name"] = state.state.name;
                    s["motion"] = state.state.motion.name;

                    AnimatorStateTransition[] state_transitions = state.state.transitions;
                    if (state_transitions.Length > 0)
                    {
                        s["trans"] = new JsonData();
                        foreach (var t in state_transitions)
                        {
                            JsonData cj = new JsonData();
                            cj["desState"] = t.destinationState.name;
                            cj["exitTime"] = t.exitTime;

                            if (t.conditions.Length > 0)
                            {
                                cj["cond"] = new JsonData();
                                foreach (var c in t.conditions)
                                {
                                    JsonData cond = new JsonData();
                                    cond["mode"] = (int)(c.mode);
                                    cond["parameter"] = c.parameter;
                                    cond["threshold"] = c.threshold;
                                    if (c.parameter == "New Bool")
                                    {
                                        int aa = 0;
                                    }
                                    if (c.parameter == "spin")
                                    {
                                        Debug.Log(state.state.name + " " + c.mode + " " + c.threshold);
                                    }
                                    cj["cond"].Add(cond);
                                }
                            }

                            s["trans"].Add(cj);
                        }
                    }

                    cl["state"].Add(s);
                }
            }
        }

        AnimationClip[] AnimationClips = assetObject.animationClips;
        if (AnimationClips.Length > 0)
        {
            node["clip"] = new JsonData();
            foreach (var data in AnimationClips)
                node["clip"].Add(data.name);
        }

        AnimatorControllerParameter[] Parameters = assetObject.parameters;
        if (Parameters.Length > 0)
        {
            node["param"] = new JsonData();
            foreach (var data in Parameters)
            {
                JsonData param = new JsonData();
                param["name"] = data.name;
                param["type"] = (int)(data.type);

                if (data.type == AnimatorControllerParameterType.Float)
                    param["defaultFloat"] = data.defaultFloat;
                else if (data.type == AnimatorControllerParameterType.Int)
                    param["defaultInt"] = data.defaultInt;
                else if (data.type == AnimatorControllerParameterType.Bool)
                {
                    if (data.defaultBool == true)
                        param["defaultBool"] = 1;
                    else
                        param["defaultBool"] = 0;
                }

                node["param"].Add(param);
            }
        }

        return node;
    }

    static string GetPath(string objPath)
    {
        string[] paths = objPath.Split('/');
        bool isAdd = false;
        string _path = "";
        for (int i = 0; i < paths.Length; ++i)
        {
            if (paths[i] == "Game")
            {
                isAdd = true;
                i = i + 1;
            }
            else if (isAdd == true)
            {
                if (_path != "")
                    _path += "/";

                _path += paths[i];
            }
        }

        return _path;
    }

    static void WriteJsonFile(string content, string savePath, string name)
    {
        savePath = string.Format("{0}/{1}.json", savePath, name);
        Debug.Log("SavePath: " + savePath);
        if (File.Exists(savePath))
        {
            int option = EditorUtility.DisplayDialogComplex("文件已存在",
                savePath + "已存在, 是否替换?",
                "替换",
                "取消",
                "保留两者");

            switch (option)
            {
                case 0:
                    File.Delete(savePath);
                    break;

                case 1:
                    return;

                case 2:
                    savePath = savePath.Replace(".lua", "_auto.lua");
                    if (File.Exists(savePath))
                        File.Delete(savePath);
                    break;

                default:
                    Debug.LogError("Unrecognized option.");
                    break;
            }
        }

        FileStream fs = new FileStream(savePath, FileMode.Create);
        StreamWriter sw = new StreamWriter(fs);
        sw.Write(content);

        //清空缓冲区
        sw.Flush();
        //关闭流
        sw.Close();
        fs.Close();
    }
}