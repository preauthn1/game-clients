using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using example.invalid;

namespace example.invalid
{
    public class SlotServerInfoConnector : BaseConnector {

        public override RequestMethod GetRequestMethod()
        {
            return RequestMethod.GET;
        }

        public override string GetUrl()
        {
            return gameServiceHost + "ServerInfo";
        }

        public override string InitParameters()
        {
            return "";
        }

        //Resolve the response into data format
        public Response responseData;

        public Response Resolve(string response){
            this.responseData = new Response();
            responseData = JsonUtility.FromJson<Response>(response);
            return responseData;
        }

        #region innner class
        public class Response{
            public string ProtocolVersion;
        }
        #endregion
    }
}
