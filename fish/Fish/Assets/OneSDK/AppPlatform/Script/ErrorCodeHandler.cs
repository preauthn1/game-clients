using System;
using System.Collections.Generic;
using OneSDK.Spec;
using OneSDK.StarterPack;
using UnityEngine;
using UnityEngine.EventSystems;
using UnityEngine.SceneManagement;
using UnityEngine.UI;

namespace OneSDK.Utility
{

	public class ErrorCodeHandler : MonoBehaviour
	{

		[Serializable]
		public class Package
		{
			public int code;
			public string message;
			public string otherInfo;
			public ErrorType type;

			public Package(int code, string message, string otherInfo, ErrorType type = ErrorType.Low)
			{
				this.code = code;
				this.message = message;
				this.otherInfo = otherInfo;
				this.type = type;
			}

			public Package(){
				this.code = 0;
				this.message = string.Empty;
				this.otherInfo = string.Empty;
				this.type = ErrorType.Resolvable;
			}
		}

		[Header("MainPanel")]
		[SerializeField] public GameObject errorPanel;

		[Header("Button")]
		public Button button1;
		public Button button2;
		public Button button3;
		public Text txtTitleCode;
		public Text txtMessage;

		[Header("Handling Input")]
		[SerializeField] public EventSystem eventSystemObj;

		Package errorPackage;

		static GameObject errorCodeHandlerObj;
		const string PrefabObjectName = "ErrorMessage-Canvas";

		void Awake()
		{
			errorCodeHandlerObj = gameObject; //this static instance point to this gameObject;
			button1.onClick.AddListener(Dismiss);
			button2.onClick.AddListener(ReturnToLobby);

			//it's hidden by default when it awakes (even if it's accidentally added to scene)
			errorPanel.SetActive(false); 
		}

		bool isErrorSceneIsValid(Package errorDetails){
			bool valid = (errorDetails.code != 0 || errorDetails.type != ErrorType.Resolvable);
			return valid;
		}

		void ProcessEventSystemObjects()
		{
			EventSystem[] eventSystemObjects = FindObjectsOfType<EventSystem>();
			if (eventSystemObjects.Length <= 0) //if it's not there.
			{
				Debug.Log("turn on our existing backup event system, since not found outside");
				//we disable the existing that one we're known of.
				eventSystemObj.gameObject.SetActive(true);
			}
			else
			{
				Debug.Log("turn off our existing backup event system, since found outside");
				eventSystemObj.gameObject.SetActive(false);
			}
		}

		void SetupThisError(Package _errorPackage)
		{
			errorPanel.SetActive(true);
			this.errorPackage = _errorPackage;

			ProcessEventSystemObjects();

			if(!isErrorSceneIsValid(errorPackage)){
				Dismiss(); //if not valid we would dismiss this scene.
				return;
			}
				
			HandleSpecialCase(errorPackage.code, errorPackage.message);

			//Setup the message accordingly.
			txtTitleCode.text = errorPackage.code.ToString();
			txtMessage.text = errorPackage.message;
			SetupButtonSelection(errorPackage.type);
		}

		public static void Show(Package errorPackage)
		{
			//Load the Scene and Show the Error Message
			Debug.LogWarning("Error Displayed");

			if(!errorCodeHandlerObj)
			{
				errorCodeHandlerObj = Instantiate(Resources.Load(PrefabObjectName)) as GameObject;
			}
			ErrorCodeHandler errorCodeHandler = errorCodeHandlerObj.GetComponent<ErrorCodeHandler>();
			errorCodeHandler.SetupThisError(errorPackage);
		}


		void SetupButtonSelection(ErrorType type)
		{
			button1.gameObject.SetActive(false);
			button2.gameObject.SetActive(false);
			button3.gameObject.SetActive(false);

			switch (type)
			{
				//even default.. we put something there. (similar to type Low)
				default:
					button1.gameObject.SetActive(true);
					break;
				case ErrorType.Low:
					button1.gameObject.SetActive(true);
					break;
				case ErrorType.Medium:
					button2.gameObject.SetActive(true);
					break;
				case ErrorType.High:
					button3.gameObject.SetActive(true);
					break;
			}
		}

		void Dismiss()
		{
			Debug.Log("going to dismiss this error object");
			errorCodeHandlerObj = null; //we need to clean this static object reference too
			DestroyImmediate(gameObject);
			//SceneManager.UnloadSceneAsync("SDK_Error"); //
		}

		void ReturnToLobby()
		{
			Debug.Log("going to return to lobby");
			AGameHelper.FindGameHelper().BackToLobby();
		}

		#region Special Handling
		void HandleSpecialCase(int code, string errorMessage)
		{
			//Here are list of special code rquire special handling
			switch (code)
			{
				case ErrorCodeAlliance.ERR_GAMELOCK:
					//need to translate the gameId to the game name
					this.errorPackage.message = ResolveMessage(errorMessage);
					break;
				default:
					return;
			}
		}

		string ResolveMessage(string message)
		{
			int startIndex = message.LastIndexOf("<") + 1;
			int length = message.LastIndexOf(">") - startIndex;
			string id = message.Substring(startIndex, length);
			return "Player is required to complete unfinished progress in Game : [" + GetGameNameWithId(id) + "]";
		}

		string GetGameNameWithId(string id)
		{
			Dictionary<string, string> gameIdNameDictionary = new Dictionary<string, string>{
				{"800005", "Panther Moon"},
				{"800002", "Great Blue"},
				{"810001", "Monkey Thunderbolt"}
			};

			if (!gameIdNameDictionary.ContainsKey(id))
				return "GameId-" + id;
			else
				return gameIdNameDictionary[id];
		}

		#endregion
	}
}
