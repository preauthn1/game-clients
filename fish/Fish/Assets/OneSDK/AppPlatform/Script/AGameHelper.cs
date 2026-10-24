using System;
using OneSDK.Spec;
using example.invalid;
using OneSDK.Utility;
using UnityEngine;
using UnityEngine.SceneManagement;
using VMSoft;
using VMSoft.SlotMachine;

namespace OneSDK.StarterPack
{
    public abstract class AGameHelper : MonoBehaviour, IGameHelper, OneSGameConnectionManager.IResponder
    {
        [Header("Recent Error")]
        [SerializeField] public ErrorCodeHandler.Package error;
        protected string messageHeader = "<color=orange>Game</color> ";

        //from IGameHelper

        public abstract void ChangeLanguage(int languageCode);
        public abstract string GetGameIdFromLobby();
        public abstract int GetLanguageCode();
        public abstract float GetMusicVolume();
        public abstract float GetSfxVolume();
        public abstract bool IsFullScreen();
        public abstract void SetMusicVolume(float musicValue);
        public abstract void SetSfxVolume(float sfxValue);


        [Header("Login Info")]
        public string gameId;
        public string playerId;
        public string password;
        //public string applicationKey;
        [SerializeField] public AppKey appKey = AppKey._live22;
        [SerializeField] public Configuration.Environment environment = Configuration.Environment.UNASSIGNED;

        [Header("Retrieved info")]
        public string operatorId;
        public string lobbyToken;
        public string gameTicket;
        public string gameServiceURL;
        [SerializeField] public bool hasInitialized = false;

        //Private Fields
        string SCENE_SDK_LOBBY = "SDK_LoginLobby";

        #region IGameHelper
        protected IGame game;
        protected OneSGameConnectionManager connectionManager;

        protected static AGameHelper instance;

        protected virtual void Awake()
        {
            if (instance && instance.gameObject != gameObject)
            {
                Destroy(gameObject);
            }
            else
                DontDestroyOnLoad(this);
        }

        void Start()
        {
            InitConnectionManager();
        }

        public void SetAppkey(AppKey key)
        {
            appKey = key;
        }

        string GetAppKeyString()
        {
            string rawAppKeyString = appKey.ToString();
            return rawAppKeyString.Substring(rawAppKeyString.IndexOf("_", StringComparison.Ordinal) + 1);
        }

        public AppKey ParseAppKey(string appKeyString)
        {
            return (AppKey)Enum.Parse(typeof(AppKey), "_" + appKeyString);
        }

        public void CopyDataFrom(AGameHelper gameHelper)
        {
            this.playerId = gameHelper.playerId;
            this.password = [REDACTED];
            this.appKey = gameHelper.appKey;
            this.gameId = gameHelper.gameId;

            this.lobbyToken = [REDACTED];
            this.gameTicket = gameHelper.gameTicket;
            this.gameServiceURL = gameHelper.gameServiceURL;
            this.hasInitialized = gameHelper.hasInitialized;

            if (this.environment == Configuration.Environment.UNASSIGNED)
            {
                this.environment = gameHelper.environment;
                //Debug.Log("environment was copied:" + gameHelper.environment);
            }
        }

        void InitConnectionManager()
        {
            //Get that current instance environment..
            if (connectionManager == null)
            {
                connectionManager = new OneSGameConnectionManager(this, environment);
                //response to the 'Instance' .. since many would share this.
                connectionManager.SetResponder(this);
            }
        }

        public void Init(string gameId, IGame game)
        {
            InitConnectionManager();
            hasInitialized = false;
            this.gameId = gameId;
            this.game = game;

            connectionManager.DoVersionInfo();
        }

        void RunLoginToGame()
        {
            if (string.IsNullOrEmpty(lobbyToken))
                DoLogin();//DoLogin first
            else
                DoGameLogin(gameId);
        }

        /// <summary>
        /// this is a hack login (in DEV) for in house 1sGames Development
        /// </summary>
        public void InitWithFakeOpLogin(string gameId, string protocolVersion, IGame game)
        {
            InitConnectionManager();
            hasInitialized = false;
            this.game = game;

            DoFakeOpLogin(protocolVersion);
        }

        public void RequestGameTicket()
        {
            DoGameLogin(gameId);
        }

        public void ReportError(int code, string message, string gameId)
        {
            Debug.Log(messageHeader + "Error reported: " + code + " message: " + message);
            error = new ErrorCodeHandler.Package(code, message,
                    "caused by gameId" + gameId,
                    ErrorCode.GetSeverity(code));
            ErrorCodeHandler.Show(error);
        }

        public string GetGameServiceUrl()
        {
            return gameServiceURL;
        }

        public virtual void BackToLobby()
        {
            if (game != null)
                game.OnCleanup();

            if (Application.CanStreamedLevelBeLoaded(SCENE_SDK_LOBBY))
                SceneManager.LoadSceneAsync(SCENE_SDK_LOBBY);
            else if (Application.CanStreamedLevelBeLoaded(Configuration.SCENE_LOBBY))
                SceneManager.LoadSceneAsync(Configuration.SCENE_LOBBY);
            else
                Debug.LogError("You're missing either a valid LOBBY SCENE or SDK_LOBBY SCENE for this function");
        }

        public int EnvironmentCode()
        {
            return (int)environment; //for the selected one 
        }

        public void ReloadScene()
        {

            //Clean up this current game instance
            if (game != null)
                game.OnCleanup();

            Scene currentScene = SceneManager.GetActiveScene();
            SceneManager.LoadSceneAsync(currentScene.name);
        }
        #endregion


        void DoFakeOpLogin(string protocolVersion)
        {
            Debug.Log("Perform Fake OpLogin");
            connectionManager.DoFakeOpLogin(playerId, gameId, (int)Configuration.ClientPlatform, protocolVersion);
        }
        void DoLogin()
        {
            //apply this QuickLogin AppKey and harden the original storage.
            Configuration.CurrentAppKey = appKey;
            Debug.Log("Perform login since lobby token not available");
            connectionManager.DoLogin(playerId, password, GetAppKeyString());
        }

        public void DoGameLogin(string gameId)
        {
            //game.OnProcessing(true);
            Debug.Log("<color=cyan>GameHelper</color> Started GameLogin Process");
            connectionManager.DoGameLogin(gameId, (int)Configuration.ClientPlatform, operatorId, lobbyToken);
        }


        #region Utility
        public static IGameHelper FindGameHelper()
        {
            //1st we gave priority to search if DataManager (Derivatives is available in the scene)
            AGameHelper gameHelper = FindObjectOfType<DataManager>() as AGameHelper;

            //then we look for other derived instance of AGameHelper
            if (gameHelper == null)
            {
                gameHelper = FindObjectOfType<AGameHelper>();
            }

            //if it's null either, then we initiate one
            if (gameHelper == null)
            {
                gameHelper = DataManager.Instance;
                Debug.LogWarning("Missing thus, " +
                                 "created the DataManagergameHelper object in this scene, with DEV");
            }
            return gameHelper.GetComponent<IGameHelper>();
        }

        string ThisMessage(object message)
        {
            return string.Concat(messageHeader, message);
        }
        #endregion


        #region Implement: IResponder

        public void OnVersionInfoSuccess(string response)
        {
            RunLoginToGame();
        }

        public void OnLoginSuccess(string token, string operatorId)
        {
            this.lobbyToken = [REDACTED];
            this.operatorId = operatorId;
            DoGameLogin(this.gameId);
        }


        public void OnGameLoginSuccess(string gameToken, string gameServerUrl)
        {
            this.gameTicket = gameToken;
            this.gameServiceURL = gameServerUrl;

            Debug.Log(ThisMessage("OnGameLogin Success, we send back ticket:" + this.gameTicket));
            if (!hasInitialized)
            {
                hasInitialized = true;
                game.OnInitialize(200, this.gameTicket, GetMusicVolume(), GetSfxVolume(), GetLanguageCode(), this.EnvironmentCode());
            }
            else
            {
                game.OnNewTicketArrived(200, this.gameTicket);
            }
        }

        public void OnFailed(int code, string message)
        {
            game.OnError(code, message);
            ReportError(code, message, gameId);
        }
        #endregion
    }

}
