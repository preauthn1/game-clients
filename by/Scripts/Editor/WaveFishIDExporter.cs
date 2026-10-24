using System.Collections;
using System.Collections.Generic;
using System.Linq;
using UnityEditor;
using UnityEngine;

// 导出鱼潮ID，服务器根据ID可识别鱼类型，在客户端捕中鱼的时候服务器根据这个ID验证是否是合法数据
public class WaveFishIDExporter
{
    const string CREATELUASCRIPT_Asset = "Assets/打印鱼潮配置";

    [MenuItem(CREATELUASCRIPT_Asset, true, 62)]
    public static bool SetCurrentProject()
    {
        return Selection.activeObject is GameObject;
    }

    [MenuItem(CREATELUASCRIPT_Asset, false, 62)]
    public static void BuildScript()
    {
        if (Selection.activeGameObject == null)
        {
            Debug.LogWarning("请选择打印的鱼潮预制体。");
            return;
        }

        for (int i = 0; i < Selection.gameObjects.Length; i++)
        {
            Dictionary<int, int> fishID_NumberDic = new Dictionary<int, int>();

            GameObject selectobj = Selection.gameObjects[i];

            Transform[] transforms = selectobj.GetComponentsInChildren<Transform>(true);
            List<Transform> fishTransList = transforms.ToList().FindAll(m => m.name.StartsWith("Fish_"));

            foreach (Transform item in fishTransList)
            {
                int fishID = 0;
                int.TryParse(item.name.Remove(0, 5), out fishID);

                if (fishID != 0)
                {
                    if (!fishID_NumberDic.ContainsKey(fishID))
                        fishID_NumberDic.Add(fishID, 0);

                    fishID_NumberDic[fishID] += 1;
                }
            }

            string logInfo = string.Empty;

            foreach (var item in fishID_NumberDic)
                logInfo += string.Format("{0}:{1}", item.Key, item.Value) + ",";

            Debug.Log(string.Format("鱼潮{0}信息配置 {1}", selectobj.name, logInfo.TrimEnd(',')));
        }
    }
}
