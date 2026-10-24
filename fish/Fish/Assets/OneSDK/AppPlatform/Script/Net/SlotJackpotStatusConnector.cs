using System;
using System.Collections.Generic;
using OneSDK.Slot;
using example.invalid;
using SimpleJSON;
using UnityEngine;
using VMSoft.Lobby.Model;

namespace example.invalid
{
    public class SlotJackpotStatusConnector : BaseConnector
    {
        public override RequestMethod GetRequestMethod()
        {
            return RequestMethod.POST;
        }

        public override string GetUrl()
        {
            return gameServiceHost + "JackpotStatus";
        }

        JackpotStatusRequest request;
        public override string InitParameters()
        {
            return JsonUtility.ToJson(request);
        }

        public void SetParam(JackpotStatusRequest request)
        {
            this.request = request;
        }

        #region Inner Class
        public class JackpotStatusRequest
        {
            public string ProtocolVersion;
            public string SessionId;
            public int Client;
            public int SlotId;
        }

        public Response responseData;
        public class Response{
            public int status;
            public string sessionId;
            public JackpotData jackpotData;
            public List<JackpotWinnerData> grandWinnerList;
            public List<JackpotWinnerData> majorWinnerList;
            public List<JackpotWinnerData> minorWinnerList;
            public List<JackpotWinnerData> miniWinnerList;
        }
        #endregion

        public Response Resolve(string response){

            this.responseData = new Response();

            JSONNode jackpotStatusList = JSON.Parse(response);

            responseData.status = jackpotStatusList["Status"].AsInt;
            responseData.sessionId = jackpotStatusList["SessionId"];

            long grand = long.Parse(jackpotStatusList["Grand"]);
            long major = long.Parse(jackpotStatusList["Major"]);
            long minor = long.Parse(jackpotStatusList["Minor"]);
            long mini = long.Parse(jackpotStatusList["Mini"]);

            JackpotData jackpotData = new JackpotData(grand,major,minor,mini);
            responseData.jackpotData = jackpotData;

            //        DataManager.Instance.grand = grand;
            //        DataManager.Instance.major = major;
            //        DataManager.Instance.minor = minor;
            //        DataManager.Instance.mini = mini;
            //        DataManager.Instance.totalJackpot = totalJackpot;

            JSONArray grandHistory = jackpotStatusList["GrandHistory"].AsArray;
            JSONArray majorHistory = jackpotStatusList["MajorHistory"].AsArray;
            JSONArray minorHistory = jackpotStatusList["MinorHistory"].AsArray;
            JSONArray miniHistory = jackpotStatusList["MiniHistory"].AsArray;

            responseData.grandWinnerList = BuildWinnerDataList(grandHistory);
            responseData.majorWinnerList = BuildWinnerDataList(majorHistory);
            responseData.minorWinnerList = BuildWinnerDataList(minorHistory);
            responseData.miniWinnerList = BuildWinnerDataList(miniHistory);

            return responseData;
        }

        /// <summary>
        /// Build a new WinnerDataList, blank one
        /// </summary>
        /// <returns>The winner data list.</returns>
        /// <param name="jackpotCategoryDataArray">Jackpot category data array.</param>
        public List<JackpotWinnerData> BuildWinnerDataList(JSONArray jackpotCategoryDataArray)
        {
            List<JackpotWinnerData> winnerDataList = new List<JackpotWinnerData>();
            foreach (JSONNode node in jackpotCategoryDataArray)
            {
                JackpotWinnerData winnerData = new JackpotWinnerData();
                DateTime tempTime = ToDateTime(DateTime.UtcNow, long.Parse(node["TimeStamp"]));

                winnerData.amount = long.Parse(node["Amount"]).ToString("###,###,###,##0");
                winnerData.playerName = node["Player"];
                winnerData.slotId = node["SlotId"];
                winnerData.date = tempTime.ToShortDateString();
                winnerData.time = tempTime.ToLongTimeString();

                winnerDataList.Add(winnerData);
            }

            return winnerDataList;
        }

        public DateTime ToDateTime(DateTime target, long timestamp)
        {
            DateTime dateTime = new DateTime(1970, 1, 1, 8, 0, 0, target.Kind);
            return dateTime.AddSeconds(timestamp);
        }

    }
}

