using UnityEngine;
using GSLibrary.Common.Connection;
using System.Collections.Generic;

namespace P8Games.Fish
{
    public abstract class Fish_ArcadeGameController : MonoBehaviour, IConnector
    {

        protected FishDataManager dataManager;

        public abstract void OnReceiveSystemConnected(long id, string username, double credit, string dateTime, int avatarId, int baseCurrType, double baseCurrRate, int playerCurrType, double playerCurrRate, string countryCode);
        public abstract void OnConnectionClosed(GSConnectionErrorType type, GSGameState gameState);
        public abstract void OnPlayerCreditUpdate(double credit);
        public abstract void OnReceiveTablePlayerLeave(int playerId, int seatId, int status);
        public abstract void OnUpdateServerRespondTime(double range);
        public abstract void OnReceiveSystemMaintenance(int type, string message, string fromDate, string toDate);
        public abstract void OnGameRoundUpdate(List<TargetObject> fishList, Game curGame);
        public abstract void OnReceivePlayerSitIn(SeatInfo playerInfo, int thisPlayerSeatNum);

        public abstract void OnReceiveJoinTableReject(string errorMsg);
        public abstract void OnReceiveTableSitError(string message);
        public abstract void OnRecieveTableKick();

        public abstract void UpdateRoundInfo(RoundUpdate roundUpdate);

        void Start()
        {

        }
    }
}
