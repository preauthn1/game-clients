using UnityEngine;
using UnityEngine.SceneManagement;
using System;
using System.Collections.Generic;

using VMSoft.Utils;
using OneSDK.StarterPack;

namespace VMSoft.SlotMachine
{
    public class DataManager : AGameHelper
    {
        /// <summary>
        /// Indicate if this game has been started or comes from lobby
        /// True - has login from lobby / game has been started.
        /// if the game is in [DEV] mode this will be false too.
        /// </summary>
		public static bool isGameStarted = false;
        public static bool isReadyAutoLogin = true; //whether this allow automatically login
                                                    //Constant Key to save in the Player Prefs.
        public const string KEY_MUSIC_VOLUME = "volumeMusic";
        public const string KEY_SFX_VOLUME = "sfxVolume";
        public const string KEY_FULLSCREEN_MODE = "fullScreen";

        //temporary key for ZynGie (don't use fo production)
        public const string KEY_USERNAME = "sm_dino_username";//string 
        public const string KEY_BALANCE = "sm_dino_balance"; //int


        [Header("Editor Option for Developers")]
        public bool skipDownload = false;
        public bool ignoreVersion = false;
        public bool useMobileGameList = false;
        [SerializeField] public bool launchEditorScene = false;
        public bool IsLaunchEditorScene{
            get{
                #if UNITY_EDITOR
                    return launchEditorScene;
                #else
                    return false;
                #endif
            }
        }

        [Tooltip("launch the SDK Scene in editor to test the integration flow. required LAUNCH_EDITOR_SCENE = true")]
        public bool addSDKSceneTest = false;

        public const string GAMEOBJECT_NAME = "_DataManagerGameHelper";

        [Space(10)]

        public GameServicesManager serviceManager;

        [Space(10)]

        [Header("Music & Sound")]
        [SerializeField] public SoundSystem sound;
        public static SoundSystem Sound
        {
            get
            {
                return Instance.sound;
            }
        }


        [Header("Game Setting")]
        [SerializeField] public SettingSystem setting;
        public static SettingSystem Setting
        {
            get
            {
                return Instance.setting;
            }
        }

        public float musicVolume = 0;
        public float sfxVolume = 0;

        [Header("Game Related")]
        /// <summary>
        /// should be using this instead of slotId as we're support more games
        /// </summary>
        public int currentMode;
 

        public int bonusAmount;
        public int winLineCount; // Started use in ServerD
        public int reSpin; //used in the ServerD
        public int multiplier; //used in the ServerE
        public int jackpotType;// used in the server Frozen
        public long jackpotAmount;//used in the server Frozen
        public int totalWinOfAKind;
        public long freeSpinsTotalCoinsWin;

        public string ProtocolVersion
        {
            get; set;
        }

        [Header("Player Information")]
        /** Use for the game login */
        public string playerName = "-";
        public long totalCoins;
        public string currencyName;
        public float currencyRate;
        public double currencyBalance;

 

        [Header("Game Flags")]
        public bool isFreshLogin = false; // whenever it was logout.. and a fresh login to the game
        public bool inSpinning = false;
        public bool inChecking = false;
        public bool inBackLobby = false;
        public bool inJackpot = false;
        public bool inJackpotList = false;
        public bool inBigWin;
        public bool inErrorMessage = false;
        public bool AudioAvailable = false;
        public bool enterFreeSpinMode = false;
        public bool exitFreeSpinMode = false;
        public bool enterBonusMode = false;
        public bool exitBonusMode = false;
        public bool inPopUp = false;
        public bool inGamePopUp = false;
        public bool inRespin = false;


        [Header("Server Data")]
        public bool isMaintenance;
        public bool isMaintenanceForSecondaryLogin;

        //Singleton
        public static DataManager Instance
        {
            get
            {
                if (!instance)
                {
                    //instance = GameObject.FindObjectOfType <DataManager> ();
                    instance = (AGameHelper)FindObjectOfType<DataManager>();

                    if (instance == null)
                    {
                        //// ==== Verify if the scene is using any other GameHelper ====
                        ////if so then we need to copy over
                        AGameHelper otherGameHelper = FindObjectOfType<AGameHelper>();

                        //then only we start to make the DataManager..
                        //Debug.Log ("<color=#FFA812>Instantiate DataManager once...</color>");
                        GameObject dataMgrObj = Instantiate(Resources.Load(GAMEOBJECT_NAME)) as GameObject;
                        instance = dataMgrObj.GetComponent<DataManager>();

                        if(otherGameHelper!= null){
                            instance.CopyDataFrom(otherGameHelper);
                            //DestroyImmediate(otherGameHelper.gameObject);
                            Debug.Log("<color=magenta>DataManagerGameHelper took over from other gameHelper</color>");
                        }
                    }
                }
                return (DataManager)instance;
            }
        }
        void OnEnable()
        {
            SceneManager.sceneLoaded += OnSceneFinishLoading;
        }
        void OnDisable()
        {
            SceneManager.sceneLoaded -= OnSceneFinishLoading;
        }


        void OnSceneFinishLoading(Scene scene, LoadSceneMode mode)
        {
            LanguageManager.Instance.CleanUp();
        }

        protected override void Awake()
        {
            base.Awake();
            Screen.sleepTimeout = (int)SleepTimeout.NeverSleep;
            Instance.musicVolume = PlayerPrefs.GetFloat(KEY_MUSIC_VOLUME, 1.0f);
            Instance.sfxVolume = PlayerPrefs.GetFloat(KEY_SFX_VOLUME, 1.0f);
            //launchEditorScene = true;
        }

        //Assign the build environment code, such that connection works as expected.
        public void AssignEnvironmentCode(Configuration.Environment env){
            Debug.Log("Main DataManagerGameHelper was assigned environment from Configuration:" + env.ToString());
            this.environment = env;
        }

        public void Reset()
        {
            gameId = ""; //clean up the gameId
            inSpinning = false;
            inJackpot = false;
            inChecking = false;
            inBackLobby = false;
            AudioAvailable = false;
            inErrorMessage = false;
            enterFreeSpinMode = false;
            exitFreeSpinMode = false;
            enterBonusMode = false;
            exitBonusMode = false;
            inPopUp = false;
            inRespin = false;
            inGamePopUp = false;
            reSpin = 0;
            freeSpinsTotalCoinsWin = 0;
        }

        #region IGameHelper
        public override string GetGameIdFromLobby()
        {
            return gameId;
        }


        public override float GetMusicVolume()
        {
            return this.sound.HasMusic ? 1f : 0f;
        }

        public override float GetSfxVolume()
        {
            return this.sound.HasSfx ? 1f : 0f;
        }

        public override bool IsFullScreen()
        {
            return false;
        }

        public override void SetMusicVolume(float musicValue)
        {
            sound.HasMusic = (musicValue > 0);
        }

        public override void SetSfxVolume(float sfxValue)
        {
            sound.HasSfx = (sfxValue > 0);
        }

        public override void ChangeLanguage(int languageCode)
        {
            LanguageManager.Locale = LanguageManager.GetLocaleCode(languageCode);
            LanguageManager.Instance.ApplyChanges();
        }

        public override int GetLanguageCode()
        {
            return LanguageManager.CurrentLocaleId;
        }

        #endregion

        [Serializable]
        public class SettingSystem
        {
            public bool IsFullScreen
            {
                get
                {
                    return bool.Parse(PlayerPrefs.GetString(KEY_FULLSCREEN_MODE, "true"));
                }
                set
                {
                    //No event required, this setting will be read every time when we do the spinning..
                    PlayerPrefs.SetString(KEY_FULLSCREEN_MODE, value.ToString());
                    PlayerPrefs.Save();
                }
            }
        }

        [Serializable]
        public class SoundSystem
        {

            public const string KEY_MUSIC_MODE = "musicMode";
            public const string KEY_SFX_MODE = "sfxmode";

            //in the EggHead Server when there is a Multiplier event happens.
            public delegate void SoundSettingChanged(bool hasMusic, bool hasSfx);
            public static event SoundSettingChanged OnSoundSettingChanged;

            private void DispatchEvent()
            {
                if (OnSoundSettingChanged != null)
                {
                    //Apply the Sound Setting.. here
                    OnSoundSettingChanged(HasMusic, HasSfx);
                }
            }

            public bool HasMusic
            {
                get
                {
                    return bool.Parse(PlayerPrefs.GetString(KEY_MUSIC_MODE, "true")); ;
                }

                set
                {
                    PlayerPrefs.SetString(KEY_MUSIC_MODE, value.ToString());
                    PlayerPrefs.Save();
                    DispatchEvent();
                }
            }

            public bool HasSfx
            {
                get
                {
                    return bool.Parse(PlayerPrefs.GetString(KEY_SFX_MODE, "true")); ;
                }

                set
                {
                    PlayerPrefs.SetString(KEY_SFX_MODE, value.ToString());
                    PlayerPrefs.Save();
                    DispatchEvent();
                }
            }
        }

        [Serializable]
        public class GameServicesManager
        {
            public string downloadUrl;
            public string appUrl;
            public string roomUrl;
            public string assetAPI;
            public string lobbyServiceUrl;
            public string iosPlistAPI;

            public Dictionary<LobbyServiceAPI, string> lobbyServiceApiDict = new Dictionary<LobbyServiceAPI, string>();

            public enum LobbyServiceAPI
            {
                status,
                login,
                createShortLogin,
                logout,
                balance,
                playerinfo,
                statement,
                jackpot,
                gamelogin,
                gamelist,
                jCasinoForward,
            }
        }
    }
}
