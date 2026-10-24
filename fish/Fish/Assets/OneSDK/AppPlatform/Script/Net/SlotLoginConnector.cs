using System;
using example.invalid;
using SimpleJSON;
using UnityEngine;
using VMSoft.SlotMachine;

namespace example.invalid
{
    public class SlotLoginConnector:BaseConnector
    {
		public override RequestMethod GetRequestMethod()
		{
			return RequestMethod.POST;
		}

		public override string GetUrl()
		{
            return gameServiceHost + "Login";
		}

		public override string InitParameters()
		{
			//{"ProtocolVersion":"9.0.0","SlotId":800,"Client":0,"SessionId":"V2XKco4H-5343266e-jaUf3l"}
			return JsonUtility.ToJson(loginRequest);
		}

		LoginRequest loginRequest;
		public void SetParam(LoginRequest request){
			loginRequest = request;
		}

        //Resolve the response into data format
        public Response responseData;

        public Response Resolve(string response){
            this.responseData = new Response();
            responseData = JsonUtility.FromJson<Response>(response);

            //JSONNode node = JSON.Parse (response)
            //responseData.Status = node ["Status"].AsInt;
            //responseData.SessionId = node ["SessionId"];

            //Debug.Log("Resolved login response");
            return responseData;
        }

        #region innner class
		public class LoginRequest{
			public string ProtocolVersion;
			public string SlotId;
			public int Client;
			public string SessionId;
		}

         
        public class Response{
            public int Status;
            public string SessionId;
			public string Username;
			public double TotalCoins;
        }
        #endregion
	}
}

