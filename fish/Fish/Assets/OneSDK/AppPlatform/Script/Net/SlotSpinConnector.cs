using example.invalid;
using UnityEngine;


namespace example.invalid
{
	public class SlotSpinConnector : BaseConnector
	{
		public override RequestMethod GetRequestMethod()
		{
			return RequestMethod.POST;
		}

		string targetUrl;
		public override string GetUrl()
		{
			if(targetUrl == null)
                targetUrl = gameServiceHost + "Spin";
			
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

		public class SpinRequest
		{
			public string ProtocolVersion;
			public string SessionId;
			public int Client;
			public int SlotId;
			public int BetValue;
			public int LineBet;
			public int TotalLines;
		}

		public class ReSpinRequest{
			public string ProtocolVersion;
			public string SessionId;
			public int Client;
			public int SlotId;
		}
	}
}

