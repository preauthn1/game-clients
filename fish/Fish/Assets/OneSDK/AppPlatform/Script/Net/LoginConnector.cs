using UnityEngine;
using SimpleJSON;

namespace example.invalid
{
    public class LoginConnector : BaseConnector
    {

        public override RequestMethod GetRequestMethod()
        {
            return RequestMethod.POST;
        }

        public override string GetUrl()
        {
            return lobbyServiceUrl + "/Login";
        }

        public override string InitParameters()
        {
            return JsonUtility.ToJson(request); ;
        }

        protected override void OnSuccess(string response)
        {
            loginResponse = new PlayerLoginResponse();
            JSONNode loginData = JSON.Parse(response);

            loginResponse.playerName = loginData["player"]["displayName"];
            loginResponse.playerId = loginData["player"]["playerId"];
            loginResponse.token = [REDACTED]"details"]["token"];
            loginResponse.coinRate = loginData["player"]["coinsRate"].AsFloat;
            loginResponse.fundBalance = loginData["player"]["fundBalance"].AsDouble;
            loginResponse.coinBalance = loginData["player"]["coinsBalance"].AsDouble;
            loginResponse.currency = loginData["player"]["currency"];
            loginResponse.operatorId = loginData["player"]["operatorId"];
			loginResponse.status = loginData["details"]["status"].AsInt;
			loginResponse.message = loginData["details"]["description"];

            base.OnSuccess(response);
        }

        object request;
        public void SetParam(object request)
        {
            this.request = request;
        }


        PlayerLoginResponse loginResponse;
        public PlayerLoginResponse ResponseData{
            get{
                return loginResponse;
            }
        }


        #region model
        public class PlayerLoginRequest
        {
            public string playerLoginId;
            public string playerPassword;
            public string appKey;
        }

        public class PlayerLoginResponse
        {
            public string playerName;
            public string playerId;
            public string token;
            public float coinRate;
            public double fundBalance;
            public double coinBalance;
            public string currency;
            public string operatorId;
			public int status;
			public string message;
        }
        #endregion
    }
}