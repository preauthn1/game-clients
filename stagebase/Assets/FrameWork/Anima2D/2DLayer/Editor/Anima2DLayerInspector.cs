using UnityEditor;
using UnityEngine;

[CustomEditor(typeof(Anima2DLayer))]
public class Anima2DLayerInspector : Editor
{
    override public void OnInspectorGUI()
    {
        Anima2DLayer _src = target as Anima2DLayer;

        base.OnInspectorGUI();


        GUILayout.BeginHorizontal();

        GUILayout.FlexibleSpace();
        if (GUILayout.Button("重绘", GUILayout.Width(230)))
            _src.RefreshRawImage();
        GUILayout.FlexibleSpace();

        GUILayout.EndHorizontal();
    }
}
