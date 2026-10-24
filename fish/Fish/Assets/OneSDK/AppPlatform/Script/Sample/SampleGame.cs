using UnityEngine;
using UnityEngine.UI;

namespace OneSDK.StarterPack
{

    public class SampleGame : MonoBehaviour, IGame
    {

        public Text text;
        public Button button;
        public Button btnNewTicket;
        public Button btnShowError;
        public IGameHelper gameHelper;
        public GameObject loadingDisplay;

        string messageHeader = "<color=orange>Game</color> ";

        [Header("Ticket/Token insert here!")]
        public string gameTicket = "009320DC5AAB4A1CB3F6AC0B5319E685";

        // Use this for initialization
        void Start()
        {

            loadingDisplay.SetActive(false);
            gameHelper = AGameHelper.FindGameHelper();

            Debug.Log(ThisMessage("Found gameHelper and Initialized!"));
            gameHelper.Init(gameHelper.GetGameIdFromLobby(), this);

            //Button Event Binding
            button.onClick.AddListener(ButtonActionBack);
            btnNewTicket.onClick.AddListener(gameHelper.RequestGameTicket);
            btnShowError.onClick.AddListener(ShowError);
        }

        string ThisMessage(object message)
        {
            return string.Concat(messageHeader, message);
        }

        public void ButtonActionBack()
        {
            gameHelper.BackToLobby();
        }

        public void ShowError()
        {
            gameHelper.ReportError(9299, "hello what's wrong", "800001");   
        }


        #region Implementation Only
        public void OnInitialize(int code, string ticket, float musicVolume, float sfxVolume, int languageCode, int environment)
        {
            Debug.Log(string.Format(messageHeader + "[Init] code: {0}, ticket {1}", code, ticket));
            text.text = "Connected and Ready to go";
        }

        public void OnNewTicketArrived(int code, string ticket)
        {
            Debug.Log(string.Format(messageHeader + "[NewTicket] code: {0}, ticket {1}", code, ticket));
            text.text = "Resumed with new Ticket and Ready to go";
        }

        public void OnCleanup()
        {
            Debug.Log(messageHeader + "Code Cleanup before return to lobby");
        }

        public void OnError(int code, string message)
        {
            Debug.Log(messageHeader + "Error happened with code:" + code + " : " + message);
        }

        public void onProcessing(bool isRunning, string message = "", float estimateWait = -1F)
        {
            Debug.Log(messageHeader + "Display processing dialog:" + isRunning);
            loadingDisplay.SetActive(isRunning);
        }
        #endregion

    }

}
