using UnityEngine;
using VMSoft.SlotMachine;
using example.invalid;

namespace example.invalid
{
    public class SlotPreFreeSpinConnector : BaseConnector
    {
        public override RequestMethod GetRequestMethod()
        {
            return RequestMethod.POST;
        }

        string targetUrl;
        public override string GetUrl()
        {
            if(targetUrl == null)
                targetUrl = DataManager.Instance.gameServiceURL + "PreFreeSpin";

            return targetUrl;
        }


        public override string InitParameters()
        {
            return JsonUtility.ToJson(request);
        }


        public void SetUrl(string url)
        {
            targetUrl = url;
        }

        object request;
        public void SetParam(object request)
        {
            this.request = request;
        }

        public class Request
        {
            public string ProtocolVersion;
            public string SessionId;
            public int Client;
            public string SlotId;
            public int FreeType;

            public Request(string pVer, string session, int client, string id, int type){
                this.ProtocolVersion = pVer;
                this.SessionId = session; 
                this.Client = client;
                this.SlotId = id;
                this.FreeType = type;
            }
        }
    }
}

