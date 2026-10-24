#pragma warning disable 414
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using example.invalid;
using VMSoft;
using VMSoft.Lobby.Model;
using UnityEngine.Networking;

namespace VMSoft.Utils
{
	/// <summary>
	/// Grab thumbnail utility.
	/// to get the thumbnail from internet or from the application cache
	/// </summary>

	public class GrabThumbnailUtility: MonoBehaviour
	{
		//Get from the thumbnails directory
		public Text textObject;
		const string KEY_THUMBNAIL = "thumbnail_";
		public RawImage rawImage;
		private Texture2D texture2d;
		public SpriteRenderer spriteRenderer;
		[SerializeField] public GameObject downloadIndicator;

		[Header ("Debug")]
		[SerializeField] public bool isDisplayedSource = false;
        [SerializeField] public int testVersion = 0;
		[SerializeField] public string testGameId = "3800";
		[SerializeField] public bool testAutoGrab = false;
		[SerializeField] public string assignedFilename = "";
		[SerializeField] public bool showLog = false;

		[Header("Default Set")]
		[SerializeField] public Texture2D unknownLarge;
		[SerializeField] public Texture2D unknownStandard;


		void Start(){
			//determine whether to show any debug stuff.
			if(textObject)
				textObject.transform.parent.gameObject.SetActive(isDisplayedSource);

			if(testAutoGrab)
				GrabImageFor(testGameId, testVersion);
		}

		/// <summary>
		/// Set the thumbnail object.
		/// </summary>
		/// <param name="rawImage">Raw image.</param>
		public void SetThumbnailObject(RawImage rawImage){
			this.rawImage = rawImage;
		}
			
		public void SetTextureImage(Texture texture){
			if (spriteRenderer != null) {
				texture2d = (texture)as Texture2D;

				Rect rec = new Rect(0, 0, texture2d.width, texture2d.height);
				spriteRenderer.sprite = Sprite.Create(texture2d, rec, new Vector2(0.5f,0.5f),100);
			}

			if (rawImage != null) {
				rawImage.texture = texture;
			}

		}

		public void SetThumbnailSpriteObject(SpriteRenderer spriteRenderer){
			this.spriteRenderer = spriteRenderer;
		}

		public void GrabImageFor(string gameIdThumbnail, int version, bool isBigThumbnail = false, int localeId = 0, Text titleObject = null)
		{
			downloadIndicator.SetActive(true);

			//add in the suffix for the name
			string suffix = "";
			if(localeId == 0)
				suffix += "";
			if(localeId == 1)
				suffix += "_CN";
			if(isBigThumbnail)
				suffix += "_L";

			string gameId = gameIdThumbnail;
			gameIdThumbnail += suffix;
			assignedFilename = gameIdThumbnail;

			string url = GetThumbnailUrl(gameIdThumbnail);

			//only run if this is a valid id..
			if(gameId != GameData.NO_ID)
				StartCoroutine (LoadOrDownload (url, version, gameId, isBigThumbnail, titleObject));
			//textObject.transform.parent.gameObject.SetActive (IsDisplayedSource);
		}

		//Usually should be a PNG File
		public string GetThumbnailUrl (string gameId)
		{
			return Configuration.GetServerUrl () + "/" + Configuration.THUMBNAIL_FOLDER + "/" + gameId + ".png";
		}

		private void SetDisplaySource(string text){
			if(isDisplayedSource)
				textObject.text = "Source: "+ text;
		}

		private IEnumerator LoadOrDownload (string filename, int version, string gameId, bool isBigThumbnail, Text titleObject)
		{

			WWW www = null;
			Texture2D tex = new Texture2D (4, 4, TextureFormat.DXT1, false);
			
            //Display game title while grabbing the thumbnail. who knows if it could be slow .. 
            if(titleObject)
                titleObject.transform.parent.gameObject.SetActive(true);


			int fileNameIndex = filename.LastIndexOf ("/");
			if(showLog)Debug.Log ("filename last index: " + fileNameIndex);
			string actualFileName = filename.Substring (filename.LastIndexOf ("/") + 1, filename.Length - fileNameIndex - 1);
			string fullPathFileName = Application.persistentDataPath + "/" + Configuration.THUMBNAIL_FOLDER +
				"/" + actualFileName;
			if(showLog)Debug.Log ("fullPathFileName:" + fullPathFileName + "|");


			if(showLog)Debug.Log ("Exist?" + File.Exists (fullPathFileName));

			bool directoryExists = Directory.Exists (Application.persistentDataPath + "/" + Configuration.THUMBNAIL_FOLDER);
			if(showLog)Debug.Log ("Folder exists?" + directoryExists);
			if (!directoryExists) {
				Directory.CreateDirectory (Application.persistentDataPath + "/" + Configuration.THUMBNAIL_FOLDER);
				if(showLog)Debug.Log ("created necessary directory");
			}

			if (example.invalid.File.Exists (fullPathFileName) && VerifyVersion (gameId, version, isBigThumbnail)) {
				if(showLog)Debug.Log ("load file from cache");
				// proudly load from cache with confidence
				www = new WWW ("file://" + fullPathFileName);
				yield return www;
				www.LoadImageIntoTexture (tex);
				if(showLog)Debug.Log ("loaded from speedy local cache.");    
				//this.rawImage.texture = tex;
				SetTextureImage (tex);
				SetDisplaySource("cache");

				//hide the title object, if we have thumbnail
				if(titleObject)
					titleObject.transform.parent.gameObject.SetActive(false);

			} else {
				//download the file and save..
				if(showLog)
                    Debug.Log ("To download the file:" + filename);

				www = new WWW (filename);
               // UnityWebRequest.GetTexture(File);

				yield return www;

                if(showLog)
                    Debug.Log("Download Completed");


				if(www.error!=null)
				{
					Debug.LogWarning("Problem Getting Thumbnail:" + filename + " Error: " + www.error);
					SetDisplaySource("error");
					//this.rawImage.texture = (isBigThumbnail)? unknownLarge : unknownStandard;
					SetTextureImage ((isBigThumbnail) ? unknownLarge : unknownStandard);
					//show the title object in that case of failure..
					if(titleObject)
						titleObject.transform.parent.gameObject.SetActive(true);

				}
				else{

					//hide the title object, if we have thumbnail
					if(titleObject)
						titleObject.transform.parent.gameObject.SetActive(false);

					www.LoadImageIntoTexture (tex);
					example.invalid.File.WriteAllBytes (fullPathFileName, www.bytes); 

					PlayerPrefs.SetInt (GetThumbKey(gameId, isBigThumbnail), version);
					//this.rawImage.texture = tex;
					SetTextureImage (tex);
					SetDisplaySource("internet");
				}
			}
			downloadIndicator.SetActive(false);
		}

		/// <summary>
		/// For Saving/ Retrieve the from the player pref
		/// </summary>
		/// <returns>The thumb key.</returns>
		/// <param name="isBigThumbnail">If set to <c>true</c> is big thumbnail.</param>
		string GetThumbKey(string gameId, bool isBigThumbnail){
			return KEY_THUMBNAIL + gameId 
				+ new string[]{"", "_CN"}[LanguageManager.CurrentLocaleId]
				+ (isBigThumbnail ? "_L" : "");
		}

		bool VerifyVersion (string gameId, int version, bool isBigThumbnail)
		{
			bool isMatching = (version == PlayerPrefs.GetInt (GetThumbKey(gameId, isBigThumbnail), -1));
			if (!isMatching)
				if(showLog)Debug.Log ("version not match");
		
			return isMatching;
		}
	}
}