using UnityEngine;
using System.Collections;
using System;

/** just a game object to hold the data */
namespace VMSoft.SlotMachine.Model{
	
    [Serializable]
	public class SlotData{
		
		public int totalLines;
		public int lineBet; 
		public int betValue;
		public long totalWin; 
		public long totalCoins;
        public float currencyRate;
		public string username;
        public string currencyName;
        public int totalBet
        {
            get
            {
                return lineBet * totalLines * betValue;
            }
        }

        public int freeSpinAdd; //Rarely use, added freespin gave by the server..
        public int freeSpinTotalCount; //the total free spin in this round
        public int freeSpinCurrentCount; //the current spin up to round that was taken. this is NOT the remaining one.
        /// <summary>
        /// Gets the free spin remains.
        /// </summary>
        /// <value>The free spin remains.</value>
        public int FreeSpinRemains
        {
            get
            {
                return freeSpinTotalCount - freeSpinCurrentCount + 1;
            }
        }


        public Specification specData;

		/// <summary>
		/// Builds from data manager.
		/// </summary>
		/// <returns>The from data manager.</returns>
		/// <param name="dataManager">Data manager.</param>
		public SlotData CopyFromDataManager(DataManager dataManager){
            this.totalCoins = dataManager.totalCoins;
            this.username = dataManager.playerName;
            this.currencyRate = dataManager.currencyRate;
            this.currencyName = dataManager.currencyName;
            return this;
		}

        /// <summary>
        /// Specification for the Slot Game Server, especially on betting rules etc.
        /// Take fields that's needed.
        /// </summary>
        public class Specification{
            public int totalLines;
            public int betValue;
            public int[] lineBetValuesArray;

            /// <summary>
            /// Get the largest value from the LineBet (Array);
            /// </summary>
            /// <returns>The line bet.</returns>
            public int LargestLineBet{
                get{
                    return lineBetValuesArray[lineBetValuesArray.Length-1];    
                }

            }
        }


        public override string ToString()
        {
            return string.Format("[SlotData: totalLines={0}, lineBet={1}, betValue={2}, totalWin={3}, totalCoins={4}, currencyRate={5}, username={6}, currencyName={7}, specData={8}, totalBet={9}]", totalLines, lineBet, betValue, totalWin, totalCoins, currencyRate, username, currencyName, specData, totalBet);
        }
	}
}
