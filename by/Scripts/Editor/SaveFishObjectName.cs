using UnityEditor;
using UnityEngine;

public class SaveFishObjectName
{
    const string CREATELUASCRIPT = "GameObject/按照鱼修改GameObject名称";

    [MenuItem(CREATELUASCRIPT, true, 1)]
    public static bool BuildScriptValidation()
    {
        return Selection.activeObject is GameObject;
    }

    [MenuItem(CREATELUASCRIPT, false, 1)]
    public static void BuildScript()
    {
        GameObject root = Selection.activeObject as GameObject;

        SpriteRenderer[] allSprite = root.GetComponentsInChildren<SpriteRenderer>();

        for (int i = 0; i < allSprite.Length; i++)
        {
            string fishName = "F" + allSprite[i].sprite.name.Substring(1, allSprite[i].sprite.name.LastIndexOf('_') - 1);
            allSprite[i].gameObject.name = fishName;



        }
    }
}
