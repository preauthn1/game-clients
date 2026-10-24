using UnityEditor;
using UnityEditor.Animations;
using UnityEngine;
using UnityEngine.UI;
using example.invalid;
using LitJson;
using System.Collections.Generic;
using System.Reflection;

public class ExportPrefabToJson : Editor
{
    delegate bool Filter(Component component);

    private static Dictionary<string, AnimatorController> m_AnimatorControllerList = new Dictionary<string, AnimatorController>();
    private static Dictionary<string, string> m_TexturePath = new Dictionary<string, string>();
    private static Dictionary<string, List<string>> m_CanvasIndex = new Dictionary<string, List<string>>();
    private static Dictionary<string, List<string>> m_SpriteRendererIndex = new Dictionary<string, List<string>>();
    private static Dictionary<string, string> m_AniPath = new Dictionary<string, string>();

    private static JsonData m_CallbackEvent = null;


    [MenuItem("Cocos/輸出Prefab資料")]
    static void ExportSelect()
    {
        if (Selection.objects == null)
        {
            return;
        }
        
        Object[] prefabs = Selection.GetFiltered(typeof(GameObject), SelectionMode.TopLevel);
        if (prefabs == null)
        {
            return;
        }

        string savePath = PlayerPrefs.GetString("ExportPrefabSavePath", "");
        savePath = EditorUtility.SaveFolderPanel("选择导出位置", savePath, "");
        if (string.IsNullOrEmpty(savePath) == true)
        {
            return;
        }

        PlayerPrefs.SetString("ExportPrefabSavePath", savePath);
        
        foreach (Object obj in prefabs)
        {
            m_AnimatorControllerList.Clear();
            m_TexturePath.Clear();
            m_CanvasIndex.Clear();
            m_SpriteRendererIndex.Clear();
            m_AniPath.Clear();
            m_CallbackEvent = null;

            GameObject go = obj as GameObject;
            Debug.Log("******************* 輸出 " + go.name);
            ExportJson(go, savePath);

            string Log = "";
            // ********************* Canvas Order Layer *********************
            foreach (KeyValuePair<string, List<string>> datas in m_CanvasIndex)
                foreach (string data in datas.Value)
                    Log += datas.Key + " " + data + "\n";
            Debug.Log("Canvas Order Layer\n" + Log);

            // ********************* SpriteRenderer Layer Order *********************
            Log = "";
            foreach (KeyValuePair<string, List<string>> datas in m_SpriteRendererIndex)
                foreach (string data in datas.Value)
                    Log += datas.Key + " " + data + "\n";
            Debug.Log("SpriteRenderer Layer Order\n" + Log);

            // ********************* 動畫路徑 *********************
            Log = "";
            foreach (KeyValuePair<string, string> data in m_AniPath)
                if (data.Key.Contains("Assets/Fish4") == true)
                    Log += data.Key + "\n";
            foreach (KeyValuePair<string, string> data in m_AniPath)
                if (data.Key.Contains("Assets/Fish4") == false)
                    Log += data.Key + "\n";
            Debug.Log("動畫路徑, 數量:" + m_AniPath.Count + " \n" + Log);

            // ********************* 貼圖路徑 *********************
            Log = "";
            foreach (KeyValuePair<string, string> data in m_TexturePath)
                if (data.Key.Contains("Assets/Fish4") == true)
                    Log += data.Key + "\n";
            foreach (KeyValuePair<string, string> data in m_TexturePath)
                if (data.Key.Contains("Assets/Fish4") == false)
                    Log += data.Key + "\n";
            Debug.Log("貼圖路徑, 數量:" + m_TexturePath.Count + " \n" + Log);
        }
    }

    static void ExportJson(GameObject prefab, string savePath)
    {
        JsonData jd = GetNodeJson(prefab);
        WriteJsonFile(JsonMapper.ToJson(jd), savePath, prefab.name);

        JsonData t_jd = new JsonData();
        if (m_TexturePath.Count > 0)
        {
            foreach (KeyValuePair<string, string> data in m_TexturePath)
            {
                string path = data.Key.Replace("Assets/FishArcade/Sprite/", "");
                path = path.Replace("Assets/Fish4/Sprite/", "");
                t_jd.Add(path);
            }
        }
        else
        {
            t_jd.Add("null");
        }
        WriteJsonFile(JsonMapper.ToJson(t_jd), savePath, prefab.name + "_texture");

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
                WriteJsonFile(JsonMapper.ToJson(data1), folder, data.Key + "_controller");
        }

        JsonData a_jd = new JsonData();
        if (m_AniPath.Count > 0)
        {
            foreach (KeyValuePair<string, string> data in m_AniPath)
            {
                string path = data.Key.Replace("Assets/Fish4/Animation/", "");
                a_jd.Add(path);
            }
            WriteJsonFile(JsonMapper.ToJson(a_jd), savePath, prefab.name + "_animationclip");
        }

        JsonData ce_jd = new JsonData();
        if (m_CallbackEvent != null)
        {
            WriteJsonFile(JsonMapper.ToJson(m_CallbackEvent), savePath, prefab.name + "_callbackEvents");
        }
    }

    static string GetAssetPath(GameObject go, Object obj)
    {
        string path = AssetDatabase.GetAssetPath(obj);
        if (path.Contains("Assets/Fish4") == false)
        {
            if (path != "Resources/unity_builtin_extra")
                Debug.LogWarning(GetRefer(go.transform) + "\n" + path);
        }

        if (m_TexturePath.ContainsKey(path) == false)
        {
            m_TexturePath.Add(path, path);
        }

        path = path.Replace("Assets/FishArcade/Sprite/", "");
        path = path.Replace("Assets/Fish4/Sprite/", "");

        return path;
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
                    cj["path"] = GetAssetPath(go, sprite.sprite.texture);
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
                    cj["path"] = GetAssetPath(go, texture.mainTexture);
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
                    node["button"]["Normal"] = GetAssetPath(go, btn.image.sprite);

                    if (btn.spriteState.highlightedSprite)
                        node["button"]["Highlighted"] = GetAssetPath(go, btn.spriteState.highlightedSprite);
                    if (btn.spriteState.pressedSprite)
                        node["button"]["Pressed"] = GetAssetPath(go, btn.spriteState.pressedSprite);
                    if (btn.spriteState.disabledSprite)
                        node["button"]["Disabled"] = GetAssetPath(go, btn.spriteState.disabledSprite);
                }
            }

            int count = btn.onClick.GetPersistentEventCount();
            if (count > 0)
            {
                for (int i = 0; i < count; ++i)
                {
                    string mn = btn.onClick.GetPersistentMethodName(i);
                    object o = btn.onClick.GetPersistentTarget(i);
                    var d = o as Component;

                    JsonData j = new JsonData();
                    j["Index"] = i;
                    j["Path"] = GetRefer(btn.gameObject.transform);
                    j["Refer"] = GetRefer(d.gameObject.transform);
                    j["Class"] = o.GetType().Name;
                    j["MethodName"] = mn;
                    j["Type"] = "Button";

                    if (m_CallbackEvent == null)
                        m_CallbackEvent = new JsonData();
                    m_CallbackEvent.Add(j);
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
                    node["toggle"]["Normal"] = GetAssetPath(go, toggle.image.sprite);

                    if (toggle.spriteState.highlightedSprite)
                        node["toggle"]["Highlighted"] = GetAssetPath(go, toggle.spriteState.highlightedSprite);
                    if (toggle.spriteState.pressedSprite)
                        node["toggle"]["Pressed"] = GetAssetPath(go, toggle.spriteState.pressedSprite);
                    if (toggle.spriteState.disabledSprite)
                        node["toggle"]["Disabled"] = GetAssetPath(go, toggle.spriteState.disabledSprite);
                }
            }

            if (toggle.graphic)
                node["toggle"]["checkmark"] = toggle.graphic.name;
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
                string[] paths = objPath.Split('/');
                bool isAdd = false;
                string _path = "";
                for (int i = 0; i < paths.Length; ++i)
                {
                    if (paths[i] == "Animation")
                    {
                        isAdd = true;
                        _path = "Animation";
                    }
                    else if (isAdd == true)
                    {
                        if (i != paths.Length - 1)
                            _path += "/" + paths[i];
                    }
                }
                node["animator"]["path"] = _path;

                AnimatorController animatorController = animator.runtimeAnimatorController as AnimatorController;
                string objPath1 = AssetDatabase.GetAssetPath(animatorController);
                if (objPath1.Contains("Assets/Fish4") == false)
                {
                    Debug.LogWarning(GetRefer(go.transform) + "\n" + objPath1);
                }

                if (m_AnimatorControllerList.ContainsKey(name) == false)
                    m_AnimatorControllerList.Add(name, animatorController);

                AnimationClip[] AnimationClips = animatorController.animationClips;
                if (AnimationClips.Length > 0)
                {
                    node["animator"]["clip"] = new JsonData();

                    Dictionary<string, string> clipPaths = new Dictionary<string, string>();
                    foreach (var data in AnimationClips)
                    {
                        var path1 = AssetDatabase.GetAssetPath(data);
                        path1 = path1.Replace("Assets/Fish4/Animation/", "");
                        path1 = path1.Replace(".anim", "");

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

            Transform tr = canvas.transform;
            string refer = tr.name;
            while (tr.parent != null)
            {
                tr = tr.parent;
                refer = tr.name + "/" + refer;
            }
            string key = canvas.renderOrder + "-" + canvas.sortingOrder;
            if (m_CanvasIndex.ContainsKey(key) == false)
                m_CanvasIndex.Add(key, new List<string>());
            m_CanvasIndex[key].Add(refer);
        }

        RectTransform rect = go.GetComponent<RectTransform>();
        if (rect != null)
        {
            node["isRect"] = true;

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
            if (scrollRect.content)
                node["scrollView"]["content"] = scrollRect.content.name;
            else
                Debug.Log("scrollRect.content is null " + go.name);
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

            node["lineRenderer"]["material"] = new JsonData();
            for (int i = 0; i < lineRenderer.materials.Length; ++i)
                node["lineRenderer"]["material"].Add(lineRenderer.materials[i].mainTexture.name);
        }

        SpriteRenderer spr = go.GetComponent<SpriteRenderer>();
        if (spr != null)
        {
            int layer = 0;
            if (spr.sortingLayerName == "Background")
                layer = 0;
            else if (spr.sortingLayerName == "Default")
                layer = 1;
            else if (spr.sortingLayerName == "SPFish")
                layer = 2;
            else if (spr.sortingLayerName == "Fish")
                layer = 3;
            else if (spr.sortingLayerName == "UI")
                layer = 4;

            node["spr"] = new JsonData();
            if (spr.sprite)
                node["spr"]["name"] = spr.sprite.name;
            node["spr"]["layer"] = layer;
            node["spr"]["order"] = spr.sortingOrder;
            if (spr.sprite)
                node["spr"]["path"] = GetAssetPath(go, spr.sprite.texture);
            if (spr.color.r != 1 && spr.color.g != 1 && spr.color.g != 1)
                node["spr"]["color"] = ColorUtility.ToHtmlStringRGB(spr.color);
            if (spr.color.a != 1)
                node["spr"]["alpha"] = (int)(spr.color.a * 255);

            Transform tr = spr.transform;
            string refer = spr.name;
            while (tr.parent != null)
            {
                tr = tr.parent;
                refer = tr.name + "/" + refer;
            }
            string key = spr.sortingLayerName + "-" + spr.sortingOrder;
            if (m_SpriteRendererIndex.ContainsKey(key) == false)
                m_SpriteRendererIndex.Add(key, new List<string>());
            m_SpriteRendererIndex[key].Add(refer);
        }

        int tag = 0;
        if (go.tag == "Fish")
            tag = 1;
        else if (go.tag == "Wall")
            tag = 2;
        else if (go.tag == "Shadow")
            tag = 3;
        else if (go.tag == "GameMetaData")
            tag = 4;

        BoxCollider2D boxCollider2D = go.GetComponent<BoxCollider2D>();
        if (boxCollider2D != null)
        {
            node["boxCollider2D"] = new JsonData();
            node["boxCollider2D"]["tag"] = tag;
            node["boxCollider2D"]["w"] = boxCollider2D.size.x;
            node["boxCollider2D"]["h"] = boxCollider2D.size.y;
            node["boxCollider2D"]["ox"] = boxCollider2D.offset.x;
            node["boxCollider2D"]["oy"] = boxCollider2D.offset.y;
        }

        CapsuleCollider2D capsuleCollider2D = go.GetComponent<CapsuleCollider2D>();
        if (capsuleCollider2D != null)
        {
            node["capsuleCollider2D"] = new JsonData();
            node["capsuleCollider2D"]["tag"] = tag;
            node["capsuleCollider2D"]["w"] = capsuleCollider2D.size.x;
            node["capsuleCollider2D"]["h"] = capsuleCollider2D.size.y;
            node["capsuleCollider2D"]["ox"] = capsuleCollider2D.offset.x;
            node["capsuleCollider2D"]["oy"] = capsuleCollider2D.offset.y;
        }

        CircleCollider2D circleCollider2D = go.GetComponent<CircleCollider2D>();
        if (circleCollider2D != null)
        {
            node["circleCollider2D"] = new JsonData();
            node["circleCollider2D"]["tag"] = tag;
            node["circleCollider2D"]["ox"] = circleCollider2D.offset.x;
            node["circleCollider2D"]["oy"] = circleCollider2D.offset.y;
            node["circleCollider2D"]["radius"] = circleCollider2D.radius;
        }

        PolygonCollider2D polygonCollider2D = go.GetComponent<PolygonCollider2D>();
        if (polygonCollider2D != null)
        {
            node["polygonCollider2D"] = new JsonData();
            node["polygonCollider2D"]["ox"] = polygonCollider2D.offset.x;
            node["polygonCollider2D"]["oy"] = polygonCollider2D.offset.y;
            node["polygonCollider2D"]["size"] = polygonCollider2D.pathCount;
            node["polygonCollider2D"]["tag"] = tag;

            node["polygonCollider2D"]["points"] = new JsonData();
            foreach (var v in polygonCollider2D.points) {
                JsonData cj = new JsonData();
                cj["x"] = v.x;
                cj["y"] = v.y;
                node["polygonCollider2D"]["points"].Add(cj);
            }
        }

        Slider slider = go.GetComponent<Slider>();
        if (slider != null)
        {
            node["slider"] = new JsonData();
            node["slider"]["progress"] = slider.value;

            if (slider.direction == Slider.Direction.BottomToTop ||
                slider.direction == Slider.Direction.TopToBottom)
            {
                node["slider"]["direction"] = 1;
            }
            else if (slider.direction == Slider.Direction.LeftToRight ||
                    slider.direction == Slider.Direction.RightToLeft)
            {
                node["slider"]["direction"] = 0;
            }

            if (slider.fillRect != null)
            {
                Image Background = slider.fillRect.GetComponent<Image>();
                if (Background)
                {
                    node["slider"]["Background"] = GetRefer(Background.transform);
                }
            }

            if (slider.handleRect != null)
            {
                Image Handle = slider.handleRect.GetComponent<Image>();
                if (Handle)
                {
                    node["slider"]["Handle"] = GetRefer(Handle.transform);
                }
            }
            int count = slider.onValueChanged.GetPersistentEventCount();
            if (count > 0)
            {
                for (int i = 0; i < count; ++i)
                {
                    string mn = slider.onValueChanged.GetPersistentMethodName(i);
                    object o = slider.onValueChanged.GetPersistentTarget(i);
                    if (o == null)
                        continue;

                    var d = o as Component;
                    if (d == null)
                        continue;

                    JsonData j = new JsonData();
                    j["Index"] = i;
                    j["Path"] = GetRefer(slider.gameObject.transform);
                    j["Refer"] = GetRefer(d.gameObject.transform);
                    j["Class"] = o.GetType().Name;
                    j["MethodName"] = mn;
                    j["Type"] = "Slider";

                    if (m_CallbackEvent == null)
                        m_CallbackEvent = new JsonData();
                    m_CallbackEvent.Add(j);
                }
            }
        }

        ExportSetting es = go.GetComponent<ExportSetting>();
        if (es != null)
        {
            node["ExportSetting"] = new JsonData();
            node["ExportSetting"]["IsNullRect"] = es.IsNullRect;
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
                    s["speed"] = state.state.speed;
                    
                    if (state.state.motion != null)
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
            {
                node["clip"].Add(data.name);

                string objPath = AssetDatabase.GetAssetPath(data);

                if (m_AniPath.ContainsKey(objPath) == false)
                {
                    m_AniPath.Add(objPath, objPath);
                }
            }
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

    static void WriteJsonFile(string content, string savePath, string name)
    {
        savePath = string.Format("{0}/{1}.json", savePath, name);
        //Debug.Log("SavePath: " + savePath);
        if (File.Exists(savePath))
        {
            File.Delete(savePath);
            /*
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
            */
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

    static string GetRefer(Transform tr)
    {
        string refer = tr.name;
        while (tr.parent != null)
        {
            tr = tr.parent;
            refer = tr.name + "/" + refer;
        }
        return refer;
    }
}