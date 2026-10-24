using example.invalid;
using UnityEngine;
using VMSoft.SlotMachine;

namespace example.invalid
{
	public class FakeOpLoginConnector:BaseConnector
    {
        //For fake setting the gameServerUrl that suppose to return from real API.
        //GameProperties will fill in for this connector.
        string _gameServerUrl;
        public string GameServerUrl{
            set{
                _gameServerUrl = value;
            }
        }

		public override RequestMethod GetRequestMethod()
		{
			return RequestMethod.POST;
		}

		public override string GetUrl()
		{
            return _gameServerUrl + "OPLogin";
		}

		public override string InitParameters()
		{
			return JsonUtility.ToJson(opLoginRequest);
		}

		#region Set
		OpLoginRequest opLoginRequest;
		public void SetParam(OpLoginRequest request)
		{
			opLoginRequest = request;
		}
		#endregion

        public OpLoginResponse Resolve(string response){
            OpLoginResponse responseData = JsonUtility.FromJson<OpLoginResponse>(response);
            responseData.GameServerUrl = _gameServerUrl;
            return responseData;
        }

		//Serialize class..
		public class OpLoginRequest{
			public string ProtocolVersion;
			public string SlotId;
			public int Client;
			public string LoginId;
			public int OPId;
		}

        public class OpLoginResponse{
            public string ProtocolVersion;
            public string SessionId;
            public int Status;
            public string StatusDescription;
            public string GameServerUrl;

            public override string ToString()
            {
                return string.Format("[OpLoginResponse: ProtocolVersion={0}, SessionId={1}, Status={2}, StatusDescription={3}, GameServerUrl={4}]", ProtocolVersion, SessionId, Status, StatusDescription, GameServerUrl);
            }
        }
	}
}


