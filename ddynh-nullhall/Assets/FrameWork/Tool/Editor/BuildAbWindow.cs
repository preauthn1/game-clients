using System.Collections.Generic;
using UnityEngine;
using UnityEditor;

public class BuildAbWindow : EditorWindow 
{
	[System.Serializable]
	public class HallData
	{
		public string branch;
		public string skin;
		public string version;
	}

	[SerializeField] List<HallData> dataList = new List<HallData>();
	
	SerializedObject dataListObj;
	SerializedProperty dataListProperty;

	Vector2 scrollPos;

	[MenuItem("Publish/打包资源/批次打包大廳")]
    static void OpenWindow()
    {
		GetWindow<BuildAbWindow>(false, "Build Hall", true);
    }

	void OnEnable()
	{
		dataListObj = new SerializedObject(this);
		dataListProperty = dataListObj.FindProperty("dataList");
	}

	void OnGUI()
    {
		scrollPos = EditorGUILayout.BeginScrollView(scrollPos);

		//更新
		dataListObj.Update();

		//开始检查是否有修改
		EditorGUI.BeginChangeCheck();

		//显示属性
		//第二个参数必须为true，否则无法显示子节点即List内容
		EditorGUILayout.PropertyField(dataListProperty, true);

		//结束检查是否有修改
		if (EditorGUI.EndChangeCheck())
		{//提交修改
			dataListObj.ApplyModifiedProperties();
		}	

		EditorGUILayout.EndScrollView();
		GUILayout.FlexibleSpace();

		if (GUILayout.Button("加入預設資料", GUILayout.Height(50)))
		{
			dataList.Add(new HallData(){ branch = "AE_new1", skin = "UI_5", version = "12.5.1" });
			dataList.Add(new HallData(){ branch = "AE2_new1", skin = "UI_6", version = "12.6.1" });
			//dataList.Add(new HallData(){ branch = "AE2_109_new", skin = "109_UI_6", version = "11.1096.1" });
			dataList.Add(new HallData(){ branch = "AE3_new1", skin = "UI_7", version = "12.7.1" });
		}

		if (GUILayout.Button("打包熱更", GUILayout.Height(50)))
		{
			if (string.IsNullOrEmpty(AppDefine.CurrentProjectPath))
			{
				EditorUtility.DisplayDialog("错误", "没有设置当前项目，右键->设置为当前项目可设置当前项目。", "确定");
				return;
			}

 			if (AppDefine.CurrentProjectPath.IndexOf("Hall") < 0)
			{
				EditorUtility.DisplayDialog("错误", "目前只支援打包大廳!", "确定");
				return;
			}

			AppBuildScript.DeleteAssetBundle();
			int index = 0;	
			string dirName = System.DateTime.Now.ToString("yyyyMMdd_HHmmss") + "/UpdateFiles";		
			foreach (var data in dataList)
			{
				index++;
				GitCommit.Checkout(data.branch);
				PlatformRouteController.Refresh(() => { AppBuildScript.PackageAssets(new GameConfig(){ Version = data.version, Skin = data.skin }, false); });					
				ReleaseScript.CopyFilesToHotFixFolder(dirName, false, index == dataList.Count);
			}		
		}
	}	
}
