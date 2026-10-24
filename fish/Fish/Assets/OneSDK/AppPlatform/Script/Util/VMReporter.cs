using System;
using System.Collections.Generic;
using UnityEngine.Analytics;

namespace VMSoft.Utils
{
    public class VMReporter
    {
        public enum Event{
            appLaunch, //when user launch this game
            gameStart, //when each game is clicked, 
            netError, //keep a record of all the connection error
            bet //record betting per game
        };

        static string currentUserId;


        Dictionary<string, object> tempDictionary;

        public void SendGameBet(string gameId, int betValue, int lineBet, int totalLine){
            tempDictionary = CreateReportData();
            tempDictionary.Add("gameId", gameId);
            tempDictionary.Add("bet", betValue);
            tempDictionary.Add("lineBet", lineBet);
            tempDictionary.Add("line", totalLine);
            Send(Event.bet, tempDictionary);
        }
  
        public void SendGamePlayed(string gameId, string gameName){
            tempDictionary = CreateReportData();
            tempDictionary.Add("gameId", gameId);
            tempDictionary.Add("name", gameName);
            Send(Event.gameStart, tempDictionary);
        }

		public void SendHTMLGameInfo(string gameType, string gameName){
			tempDictionary = CreateReportData();
			tempDictionary.Add("gameType", gameType);
			tempDictionary.Add("name", gameName);
			Send(Event.gameStart, tempDictionary);
		}

        public void SendConnectionFailure(int errorCode, string errorMessage, string connectorId, string requestMsg, string requestUrl){
            tempDictionary = CreateReportData();
            tempDictionary.Add("code", errorCode);
            tempDictionary.Add("error", errorMessage);
            tempDictionary.Add("connector", connectorId);
            tempDictionary.Add("requestUrl", requestUrl);
            tempDictionary.Add("requestMsg", requestMsg);

            Send(Event.netError, tempDictionary);
        }

        void Send(Event eventKey, Dictionary<string, object> dictData){
            Analytics.CustomEvent(eventKey.ToString(),dictData);
        }

        public Dictionary<string, object> CreateReportData(string message = null){
            Dictionary<string, object> dict = new Dictionary<string, object>();
            dict.Add("version", Configuration.VERSION_STRING);
            dict.Add("build", Configuration.BUILD_NUMBER);
            dict.Add("flavour", Configuration.CurrentAppKeyString);
            //dict.Add("id", Configuration.AppId);

            if(message!=null){
                dict.Add("message", message);
            }
            return dict;
        }

    }//end of class


}
