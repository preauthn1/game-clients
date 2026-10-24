using OneSDK.StarterPack;
using UnityEngine;
//using P8Games.Fish;
using UnityEngine.UI;

namespace P8Games.MicroFish
{
    public class GameImpl : MonoBehaviour, IGame
    {
		public enum serverSelection{
			PROD,
			UAT,
			LOCAL
		}

		public serverSelection server; 

		public string url = "";
		public int port = 0;
		void Awake(){
			if (server == serverSelection.PROD) {
				url = "example.invalid";
				port = 8800;
			} else if (server == serverSelection.UAT) {
				url = "0.0.0.0";
				port = 7800;
			} else {
				//url = "0.0.0.0";
				port = 8800;
			}

		}

        FishDataManager dataManager;
        IGameHelper gameHelper;

        public float musicVolume { private set; get; }
        public float sfxVolume { private set; get; }
        public int languageCode { private set; get; }

        private bool loadFromOnes = false;

        public void OnInitialize(int code, string ticket, float musicVolume, float sfxVolume, int languageCode, int environment)
        {
            this.musicVolume = musicVolume;
            this.sfxVolume = sfxVolume;
            this.languageCode = languageCode;

            DontDestroyOnLoad(this);

            if (environment == 0)
            {
                
            }
            else if (environment == 1) // UAT
            {
				url = "0.0.0.0";
				port = 7800;
            }
            else if (environment == 2) // PROD
            {
				url = "example.invalid";
                port = 8800;
            }
//            Debug.Log("On Init : " + code);
			dataManager.InitGame(url, port, ticket);
        }

        public void OnNewTicketArrived(int code, string ticket)
        {
            Debug.Log("New Ticket Arrive : " + ticket);
			dataManager.ReconnectToGame(url, port, ticket);
        }

        public void OnCleanup()
        {
			if(dataManager!=null)
            dataManager.CleanUp();

			if(gameObject!=null)
            Destroy(gameObject);
            Debug.Log("Game Helper Clean Up");
        }

        public void InitGame(FishDataManager dataManager)
        {
            this.dataManager = dataManager;
            GameObject gameHelperObject = GameObject.FindWithTag("GameMetadata");

            if (gameHelperObject == null)
            {
                Debug.LogError("missing gameHelper object in this scene");
                return;
            }
            else
            {
                gameHelper = gameHelperObject.GetComponent<IGameHelper>();
            }
            loadFromOnes = true;

            gameHelper.Init(gameHelper.GetGameIdFromLobby(), this);
        }

        public void StandaloneInitGame(FishDataManager dataManager)
        {
            this.dataManager = dataManager;

            if (!PlayerPrefs.HasKey("FishM"))
            {
                PlayerPrefs.SetInt("FishM", 1);
                PlayerPrefs.Save();
            }

            if (!PlayerPrefs.HasKey("FishS"))
            {
                PlayerPrefs.SetInt("FishS", 1);
                PlayerPrefs.Save();
            }

            if (!PlayerPrefs.HasKey("FishL"))
            {
                PlayerPrefs.SetInt("FishL", 0);
                PlayerPrefs.Save();
            }

            this.musicVolume = PlayerPrefs.GetInt("FishM");
            this.sfxVolume = PlayerPrefs.GetInt("FishS");
            this.languageCode = PlayerPrefs.GetInt("FishL");

            loadFromOnes = false;
//            DontDestroyOnLoad(this);
        }

        public void OnError(int code, string message)
        {
            Debug.LogError("Game Impl Receive Error : " + message);
        }

        public void Disconnect()
        {
            gameHelper.RequestGameTicket();
        }

        public void BackToOneS()
        {
            gameHelper.BackToLobby();
        }

        public void SetMusicValume(float value)
        {
            if (loadFromOnes)
            {
                gameHelper.SetMusicVolume(value);
				musicVolume = value;
            }
            else
            {
                PlayerPrefs.SetInt("FishM", (int)value);
                PlayerPrefs.Save();
                musicVolume = value;
            }
        }

        public void SetSfxValume(float value)
        {
            if (loadFromOnes)
            {
                gameHelper.SetSfxVolume(value);
				sfxVolume = value;
            }
            else
            {
                PlayerPrefs.SetInt("FishS", (int)value);
                PlayerPrefs.Save();
                sfxVolume = value;
            }
        }

        public void SetLanguage(int value)
        {
            if (loadFromOnes)
            {
                gameHelper.ChangeLanguage(value);
            }
            else
            {
                PlayerPrefs.SetInt("FishL", value);
                PlayerPrefs.Save();
                languageCode = value;
            }
        }

        public void RequestNewToken()
        {
            gameHelper.RequestGameTicket();
        }

        public void RequestReloadScene()
        {
            gameHelper.ReloadScene();
        }
    }
}