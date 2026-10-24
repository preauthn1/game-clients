using System;
using UnityEngine;
using VMSoft.SlotMachine;
using example.invalid;

namespace example.invalid
{
	public class SlotFreeSpinConnector : BaseConnector
	{
		public override RequestMethod GetRequestMethod()
		{
			return RequestMethod.POST;
		}

		public override string GetUrl()
		{
			return DataManager.Instance.gameServiceURL + "FreeSpin";
		}

		public override string InitParameters()
		{
			return JsonUtility.ToJson(request);
		}

		object request;
		public void SetParam(object request){
			this.request = request;
		}

		public class FreeSpinRequest{
			public string ProtocolVersion;
			public string SessionId;
			public int Client;
			public int SlotId;
		}

		public class FreeSpinRequestOcean:FreeSpinRequest{
			public int FreeType;
		}
	}
}

