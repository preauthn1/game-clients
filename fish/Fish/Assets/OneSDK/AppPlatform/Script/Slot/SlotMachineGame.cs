using System;
using System.Collections.Generic;
using example.invalid;
using OneSDK.StarterPack;
using UnityEngine;
using VMSoft.Lobby.Model;
using VMSoft.SlotMachine;

namespace OneSDK.Slot
{
    public class SlotMachineGame : AGame, ISlotGame ,OneSlotConnectionManager.ISubsriber
    {
        //------- Private Field
        [Header("Development")]
        [Tooltip("sometimes auto register is not guaranteed..")]
        [SerializeField] public bool autoRegisterSlotGameBehaviours;
        //Private Fields
        [SerializeField] public List<SlotGameBehaviour> listSlotGameBehaviours;
        protected OneSlotConnectionManager slotConnectionManager;

        string protocolVersion;
      
        // Use this for initialization
        protected override void Awake()
        {
            GameProperties gameProperties= GameProperties.FindOrCreateIt();
            protocolVersion = gameProperties.getProtocolVersion();

            //loadingDisplay.SetActive(false);
            gameHelper = AGameHelper.FindGameHelper();
            Debug.Log(ThisMessage("Found this gameHelper is:")+((AGameHelper)gameHelper).name);//to log which object is this
           
            if(gameHelper.EnvironmentCode() == 0){
                Debug.Log(ThisMessage("Initialized with FakeOp [DEV]!"));

                ((AGameHelper)gameHelper).InitWithFakeOpLogin(gameHelper.GetGameIdFromLobby(),protocolVersion, this);
            }
            else{
                Debug.Log(ThisMessage("Initialized (As normal).."));
                gameHelper.Init(gameHelper.GetGameIdFromLobby(), this);
            }
        }

        void InitThisGame()
        {
            if (autoRegisterSlotGameBehaviours)
                RegisterSlotGameBehaviour();

            slotConnectionManager.DoLogin();
        }

        void RegisterSlotGameBehaviour()
        {
            listSlotGameBehaviours = new List<SlotGameBehaviour>();
            SlotGameBehaviour[] slotGameBehaviours = FindObjectsOfType<SlotGameBehaviour>();
            for (int i = 0; i < slotGameBehaviours.Length; i++)
            {
                listSlotGameBehaviours.Add(slotGameBehaviours[i]);
            }
            Debug.Log("Done Searching and Registering SlotGameBehaviours");
        }

        #region AGame
        public override void OnInitialize(int code, string ticket, float musicVolume, float sfxVolume, int languageCode, int environment)
        {
            //the ticket is the sessionId;
            string sessionId = ticket;
            slotConnectionManager = new OneSlotConnectionManager(this,
                                                                 gameHelper.GetGameServiceUrl(),
                                                                 protocolVersion,
                                                                 sessionId,
                                                                 gameHelper.GetGameIdFromLobby());
            slotConnectionManager.SetSubscriber(this);
            InitThisGame();
        }
        #endregion

        #region ISlotGame
        public virtual void DoSpin()
        {
            slotConnectionManager.DoSpin(1,4,25);
        }

        public virtual void DoAutoSpin(int count){
            throw new NotImplementedException();
        }

        public virtual void DoStopAutoSpin(){
            throw new NotImplementedException();
        }

        public virtual void DoStop()
        {
            throw new NotImplementedException();
        }

        public virtual void DoFreeSpin()
        {
            throw new NotImplementedException();
        }

        public virtual void DoPreFreeSpin()
        {
            throw new NotImplementedException();
        }

        public virtual void RequestFocus(SlotGameBehaviour slotGameBehaviour)
        {
            throw new NotImplementedException();
        }

        #endregion

        #region OneSlotConnectionManager
        public virtual void OnLoginSuccess(string username, double balance, string response)
        {
            slotConnectionManager.DoJackpotStatus(); //now get the jackpot
        }

        public void OnFailed(int code, string message, string connectorId)
        {
            //throw new NotImplementedException();
        }

        public void OnJackpotStatusReceived(JackpotData jackpotData, List<JackpotWinnerData> grandWinnerList, List<JackpotWinnerData> majorWinnerList, List<JackpotWinnerData> minorWinnerList, List<JackpotWinnerData> miniWinnerList)
        {
            foreach (SlotGameBehaviour slotGameBehaviour in listSlotGameBehaviours)
            {
                if (slotGameBehaviour != null && !slotGameBehaviour.Equals(null))
                {
                    Debug.LogWarning("Firing: " + slotGameBehaviour.name);
                    slotGameBehaviour.OnJackpotStatus(true, jackpotData);
                    slotGameBehaviour.OnJackpotWinnerReceived(grandWinnerList, majorWinnerList, minorWinnerList, miniWinnerList);
                }
            }
        }

      
        #endregion

    }
}

