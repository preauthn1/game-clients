using SimpleJSON;
using UnityEngine;

namespace example.invalid
{
    public class GameLoginConnector:BaseConnector
    {

        Request requestData;
        Response responseData;

        public Response ResponseData{
            get{
                return responseData;
            }
        }

        //Used in case for testing..
        public string url{
            get;set;
        }

        string htmlGameUrl; //only available if LobbyService ever return one to us.
        public string HtmlGameUrl{
            get{
                return htmlGameUrl;
            }
        }

        public override RequestMethod GetRequestMethod()
        {
            return RequestMethod.POST;
        }

        public override string GetUrl()
        {
            return lobbyServiceUrl + "/GameLogin";
        }


        public override string InitParameters()
        {
            return JsonUtility.ToJson(requestData);
        }

		public void SetGameData(string token, string gameId, string operatorId,int clientType = -1){
            requestData = new Request();
            requestData.token = [REDACTED];
            requestData.clientType = clientType;
            requestData.gameId = gameId;
			requestData.opId = operatorId;
        }

        public class Request{
            public string token; 
            public string gameId;
            public int clientType;
			public string opId;
        }

        public class Response{
            public string token; //lobby service token.
            public string gameTicket; //gameToken / sessionId / or ticket
            public double balance;
            public double coinBalance;
            public float coinRate;
            public string gameServerId;
            public string playerId;
            public string gameUrl;
            public int status;
            public string message;
        }

        protected override void OnSuccess(string response)
        {
            responseData = new Response();
            JSONNode node = JSON.Parse(response);
            responseData.status = node["details"]["status"].AsInt;
            responseData.message = node["details"]["description"];


            if(responseData.status == 200){
                responseData.token = [REDACTED]"details"]["token"];

                //the Json Web Token (JWT) that was used as a sessionId for the gameServer
                responseData.gameTicket = node["gameLogin"]["gameToken"];
                responseData.gameUrl = node["gameLogin"]["url"];

                this.htmlGameUrl = node["gameLogin"]["url"]; //the game url

                if(responseData.gameUrl.Contains("%")) {
                    responseData.gameUrl = WWW.UnEscapeURL(responseData.gameUrl);
                    //Debug.Log("The [Unescaped] game service url is =" + DataManager.Instance.gameServiceURL);
                }

                responseData.playerId = node["gameLogin"]["playerId"];
                responseData.coinBalance = node["gameLogin"]["coinsBalance"].AsDouble;
                responseData.balance = node["gameLogin"]["balance"].AsDouble;
            }

            base.OnSuccess(response);
        }
    }
}

