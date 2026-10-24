using UnityEngine;

namespace OneSDK.StarterPack
{
    public abstract class AGame : MonoBehaviour, IGame
    {

        #region Private
        protected IGameHelper gameHelper;
        string messageHeader = "<color=orange>Game</color> ";
        #endregion

        // Use this for initialization
        protected virtual void Awake()
        {
            //loadingDisplay.SetActive(false);
            gameHelper = AGameHelper.FindGameHelper();

            Debug.Log(ThisMessage("Found gameHelper and Initialized!"));
            gameHelper.Init(gameHelper.GetGameIdFromLobby(), this);
        }


        protected string ThisMessage(object message)
        {
            return string.Concat(messageHeader, message);
        }


        #region IGame Implementation
        public virtual void OnCleanup()
        {
            //throw new NotImplementedException();
        }

        public virtual void OnError(int code, string message)
        {
            //throw new NotImplementedException();
        }

        public virtual void OnInitialize(int code, string ticket, float musicVolume, float sfxVolume, int languageCode, int environment)
        {
            //throw new NotImplementedException();
        }

        public virtual void OnNewTicketArrived(int code, string ticket)
        {
            //throw new NotImplementedException();
        }
        #endregion
    }
}
