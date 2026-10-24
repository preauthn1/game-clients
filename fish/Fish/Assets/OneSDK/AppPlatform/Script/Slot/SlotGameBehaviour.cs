using System.Collections.Generic;
using OneSDK.Slot;
using VMSoft.Lobby.Model;
using VMSoft.SlotMachine.Model;

namespace OneSDK
{
    /// <summary>
    /// Slot game behaviour.
    /// what the object would behave.. these SlotGameBehaviour will be controlled by the 'Game'
    /// These are sets of behaviour dictates the requirement for 1sGames.
    /// </summary>
    public class SlotGameBehaviour : GameBehaviour
    {
		public virtual void OnLoginInfoReady(string username, double balance){}

        /// <summary>
        /// Everything about the gameServer, specification, bet details
        /// </summary>
        /// <param name="specData">Spec data.</param>
        public virtual void OnGameInfoReady(SlotData.Specification specData){}            

        /// <summary>
        /// Determine if jackpot is available for this game.
        /// </summary>
        public virtual void OnJackpotStatus(bool isAvailable, JackpotData jackpotData){}

        /// <summary>
        /// //When actually receive the jackpot winner information. If Jackpot Status not available, like this one is unavailable too.
        /// </summary>
        public virtual void OnJackpotWinnerReceived(List<JackpotWinnerData> grandWinnerList,
                                               List<JackpotWinnerData> majorWinnerList,
                                               List<JackpotWinnerData> minorWinnerList,
                                               List<JackpotWinnerData> miniWinnerList){}

        public virtual void OnSpinResult(){}
        public virtual void OnSpinStart(){}
    }
}
