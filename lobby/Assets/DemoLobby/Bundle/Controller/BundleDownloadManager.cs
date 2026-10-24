using UnityEngine;
using System.Collections;
using System.Collections.Generic;
using BetVictor;
using UnityEngine.SceneManagement;

namespace GSLibrary.Game.Bundle {
    public class BundleDownloadManager : MonoBehaviour
    {
        [Header("Active Downloads")]
        public bool isDownloading = false;
        public List<BundleRoomModel> downloadList = new List<BundleRoomModel>();
        public int currentDownloadPercentage = noDownload;
        public BundleRoomModel currentDownloadingGameRoom;

        //Constants
        public const int noDownload = -1; //display value when there isn't any download progress.

        //Delegates
		public delegate void DownloadManagerDelegate(string id);
		public delegate void DownloadManagerProgressDelegate(int percent);

        private Coroutine downloadCoroutine;
		private Coroutine loadCoroutine;
        private static AssetBundleManager assetBundleManager = new AssetBundleManager();
        private DownloadManagerDelegate onDownloadComplete;
        private DownloadManagerDelegate onDownloadStart;
		private DownloadManagerProgressDelegate onDownloadProgress;
        #region Unity

		public LobbyManager manager;
        void Awake()
        {
            Caching.maximumAvailableDiskSpace = 1024000000;
        }
		public void SetManager(LobbyManager _manager){
			manager = _manager;
		}

        void FixedUpdate()
        {
            if (isDownloading)
            {
                if (assetBundleManager.downloadBundleWWW != null)
                {
                    currentDownloadPercentage = (int)(assetBundleManager.downloadBundleWWW.progress * 100);
                }
//				Debug.Log (currentDownloadPercentage);
//				BroadcastMessage("CurrentBundleProgress", currentDownloadingGameRoom.id);
//				BroadcastMessage("UpdateDownloadPercentage", currentDownloadPercentage);
//				BroadcastMessage("UpdateBundleProgress", assetBundleManager.downloadBundleWWW.progress);

				if(manager!=null)
				manager.UpdateDownloadPercentage (currentDownloadingGameRoom, currentDownloadPercentage);

				if (onDownloadProgress != null)
				{
					onDownloadProgress(currentDownloadPercentage);
				}

            }
            else {
                currentDownloadPercentage = noDownload;
            }

        }

        #endregion


        #region API
        public void AddToDownload(BundleRoomModel targetDownloadGame)
        {
            //store download process in array
            downloadList.Add(targetDownloadGame);

            if (!isDownloading)
            {
                StartCoroutine(Download());
            }
        }

        public void CancelDownload(BundleRoomModel targetDownloadGame)
        {
            Debug.Log("clear pending download: " + targetDownloadGame.scene);
            if (downloadList.Contains(targetDownloadGame) &&
                targetDownloadGame.state != GameRoomState.Downloading)
            {
                downloadList.Remove(targetDownloadGame);
            }
        }

        /// <summary>
        /// Get if the DownloadManager has any download.?
        /// </summary>
        /// <value>The has download.</value>
        public bool HasDownloads
        {
            get
            {
                return downloadList.Count > 0;
            }
        }

        public void ClearDownload()
        {
            downloadList.Clear();
        }

        /// <summary>
        /// Adds the delegates. for any other classes should they need it..
        /// </summary>
        /// <returns>The delegates.</returns>
        /// <param name="downloadBegins">Download begins.</param>
        /// <param name="downloadCompletes">Download completes.</param>
		public void AddDelegates(DownloadManagerDelegate downloadBegins, DownloadManagerDelegate downloadCompletes, DownloadManagerProgressDelegate progress)
        {
            onDownloadStart = downloadBegins;
            onDownloadComplete = downloadCompletes;
			onDownloadProgress = progress;
        }
        #endregion


        public IEnumerator LoadAssetBundleFor(BundleRoomModel gameRoom)
        {
            while (!Caching.ready)
                yield return null;
			Debug.Log ("LoadOrDownloadAssetBundle!");
			loadCoroutine = StartCoroutine(
                assetBundleManager.LoadOrDownloadAssetBundle(
                    gameRoom, AssetBundleManager.ActionType.load));
			yield return loadCoroutine;
			if (assetBundleManager.loadBundleWWW != null)
			{
				SceneManager.LoadSceneAsync (gameRoom.scene);
			}
        }


        public static void SaveDownloadInfo(string url, int version)
        {
            PlayerPrefs.SetInt(url, version);
            PlayerPrefs.Save();
        }

        public bool IsCachedForGame(string url, int version)
        {
            bool success = false;

            success = !Caching.IsVersionCached(url, version);
            Debug.Log(success);
            Debug.Log(success ? "start download" : "already in cache, stop download");

            return success;
        }

        #region DownloadManager-Only
        private IEnumerator Download()
        {
            Debug.Log("<color=yellow>Number of Download in queue == " + downloadList.Count + " </color>");
            BundleRoomModel roomData = downloadList[0];

            while (!Caching.ready)
                yield return null;

            isDownloading = true;
            //gameData.isDownloading = true; <-- //TODO: to find out where is the reference

            if (onDownloadStart != null)
            {
				onDownloadStart(roomData.id);
            }

            //perform Download..


            //Get the Correlated GameRoom..
            if (roomData != null)
            {
                currentDownloadingGameRoom = roomData;
//                NGUITools.Broadcast("CurrentBundleProgress", currentDownloadingGameRoom.id);
            }

            //Wait until the Download has completed.
            downloadCoroutine = StartCoroutine(assetBundleManager.LoadOrDownloadAssetBundle(
                roomData));

            yield return downloadCoroutine;

            //if it wasn't cancelled half way..
            if (assetBundleManager.downloadBundleWWW != null)
            {
                //Clean up
                currentDownloadingGameRoom = null;

                isDownloading = false;

                //Save the Download information..
                SaveDownloadInfo(roomData.url, roomData.version);

                if (!roomData.Equals(null))
                {

                }

                if (onDownloadComplete != null)
                {
					onDownloadComplete(roomData.id);
                }
				if(manager!=null)
					manager.CompleteDownload (roomData);

                downloadList.RemoveAt(0);
            }

            //Start the next download
            if (downloadList.Count > 0)
            {
                Debug.Log("continue download");
                StartCoroutine(Download());
            }
        }

        #endregion
    }
}
