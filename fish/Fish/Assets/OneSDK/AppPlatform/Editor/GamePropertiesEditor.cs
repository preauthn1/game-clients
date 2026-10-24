using UnityEngine;
using UnityEditor;
using VMSoft.SlotMachine;

namespace VMSoft.Utils
{
	[CustomEditor(typeof(GameProperties))]
	public class GamePropertiesEditor : Editor
	{

		public Texture2D titleTexture;
		public GUIStyle importantLabelStyle;
		GameProperties script;

		void OnEnable()
		{
			LoadTextures();
			script = target as GameProperties;
			HideTransform();
		}

		void OnDisable()
		{
			HideTransform();
		}

		private void LoadTextures()
		{
			if(!titleTexture) {
				titleTexture = AssetDatabase.LoadAssetAtPath("Assets/Gizmos/key-icon.png", typeof(Texture2D)) as Texture2D;
				//titleBar = Resources.LoadAssetAtPath ("Assets/Gizmos/TitleBar.png", typeof(Texture2D)) as Texture2D;
				//Debug.Log ("loading the gear-title gizmos picture: "  + titleTexture);
			}
		}

		private void HideTransform()
		{
			if(script != null) {
				if(script.GetComponent<Transform>().hideFlags != HideFlags.HideInInspector)
					script.GetComponent<Transform>().hideFlags = HideFlags.NotEditable | HideFlags.HideInInspector;
			}
		}

		private void DrawTitleTexture()
		{
			if(titleTexture != null) {
				GUILayout.BeginHorizontal();
				{
					GUILayout.FlexibleSpace();
					{
						GUILayout.Label(titleTexture);
					}
					GUILayout.FlexibleSpace();
				}
				GUILayout.EndHorizontal();
			}
		}

		private void SetupStyle()
		{
			importantLabelStyle = new GUIStyle(GUI.skin.label);
			importantLabelStyle.normal.textColor = Color.yellow;
			importantLabelStyle.fontStyle = FontStyle.Bold;
		}

		#region Overrides
		public override void OnInspectorGUI()
		{

			DrawTitleTexture();
			SetupStyle();

			//##GAME ##
			EditorGUILayout.LabelField("GameProperties", importantLabelStyle);
			GUILayout.Space(20);

			//---- Achievement Frame ------
			GUILayout.BeginHorizontal();
			GUILayout.Label("[ Achievement ]", EditorStyles.boldLabel);
			GUILayout.Label("\"The Key Person\"", importantLabelStyle);
			GUILayout.EndHorizontal();


			//---- CONNECTION URL ------
			GUILayout.BeginHorizontal();
			GUILayout.Label("Present To ", EditorStyles.boldLabel);
			GUILayout.Label("Jery Teoh", importantLabelStyle);
			GUILayout.EndHorizontal();

			//This technique is learnt from the SoundFxManagerPro
			EditorGUILayout.HelpBox(@"Small badge awarded to Jery for unlocking the cool achievement of 1000 Logins
and Spending Huge Effort in Maintaining all the Games! 
 
Congratulation! 

		-- William", 
			example.invalid);

			EditorGUILayout.Space();
			EditorGUILayout.Separator();

			//----- Draw the rest of the other properties-- 
			DrawDefaultInspector();

			SceneView.RepaintAll();
		}

		#endregion
	}
}
