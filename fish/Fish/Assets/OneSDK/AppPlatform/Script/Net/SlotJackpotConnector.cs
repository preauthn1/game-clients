
using UnityEngine;
using example.invalid;

namespace example.invalid.Slot
{
	public class SlotJackpotConnector:BaseConnector
	{
		public override RequestMethod GetRequestMethod()
		{
			return RequestMethod.POST;
		}

		string targetUrl;
		public override string GetUrl()
		{
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

		public class JackpotRequest
		{
			public string ProtocolVersion;
			public string SessionId;
			public int Client;
			public int SlotId;
		}
	}
}

