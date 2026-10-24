using UnityEngine;
using System.Collections;
using System.Collections.Generic;
using UnityEngine.SceneManagement;

namespace GSLibrary.Game.Bundle
{

    public class AssetBundleManager
    {
        public WWW downloadBundleWWW;
        public WWW loadBundleWWW;

        static Dictionary<string, AssetBundleRef> loadedAssetBundleRefDictionary = new Dictionary<string, AssetBundleRef>();

        public AssetBundleManager()
        {
            loadedAssetBundleRefDictionary = new Dictionary<string, AssetBundleRef>();
        }

        #region AssetBundle Reference
        class AssetBundleRef
        {
            public AssetBundle assetBundle;
            public int version;
            public string url;
            public AssetBundleRef(string strUrlIn, int intVersionIn)
            {
                url = strUrlIn;
                version = intVersionIn;
            }
        };
        #endregion

        public AssetBundle getAssetBundle(string key)
        {
			Debug.Log ("getAssetBundle");
            AssetBundleRef abRef;
            if (loadedAssetBundleRefDictionary.TryGetValue(key, out abRef))
                return abRef.assetBundle;

            return null;
        }

        public enum ActionType { load, download };

        public IEnumerator LoadOrDownloadAssetBundle(BundleRoomModel roomModel, ActionType type = ActionType.download, string crc32 = null)
        {

            AssetBundle ab = null;
            string assetBundleKey = roomModel.url + roomModel.version;

            bool isContinueToLoadOrDownload = true;
			Debug.Log (loadedAssetBundleRefDictionary.ContainsKey(assetBundleKey));
            if (loadedAssetBundleRefDictionary.ContainsKey(assetBundleKey))
            {
                ab = getAssetBundle(assetBundleKey);
                if (ab == null)
                {
                    loadedAssetBundleRefDictionary.Remove(assetBundleKey);
                }
                else {
                    isContinueToLoadOrDownload = false;
                }
            }

            if (isContinueToLoadOrDownload)
            {
                string urlWithString = roomModel.url + "?" + roomModel.version;
				Debug.Log (urlWithString);
                WWW www = WWW.LoadFromCacheOrDownload(urlWithString, roomModel.version);
				Debug.Log (type);
                if (type == ActionType.download)
                {
                    downloadBundleWWW = www;
                }
                else
                {
                    loadBundleWWW = www;
                }
                yield return www;
//                if (type == ActionType.download && downloadBundleWWW != null)
//                {
//                    yield break;
//                }
//                else
//                {
//                    Debug.Log("load scene");
////                    SceneSwitchController sceneSwitch = MonoBehaviour.FindObjectOfType<SceneSwitchController>();
////                    sceneSwitch.LoadScene(roomModel.scene);
//					SceneManager.LoadScene(roomModel.scene);
//                }

				ab = www.assetBundle;


                if (www.error != null && !www.error.EndsWith("loaded.", System.StringComparison.Ordinal))
                {

                }
                else
                {
                    AssetBundleRef abRef = new AssetBundleRef(roomModel.url, roomModel.version);
                    abRef.assetBundle = www.assetBundle;
					Debug.Log ("Add Dictionary");
                    loadedAssetBundleRefDictionary.Add(assetBundleKey, abRef);

                }

            }
            else
            {
//                SceneSwitchController sceneSwitch = MonoBehaviour.FindObjectOfType<SceneSwitchController>();
//                sceneSwitch.LoadScene(roomModel.scene);
				SceneManager.LoadSceneAsync (roomModel.scene);
            }


            yield return null;
        }
    }
}
