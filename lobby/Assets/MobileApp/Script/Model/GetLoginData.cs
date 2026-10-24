using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using SimpleJSON;

public class GetLoginData {
	public string session = "";
	public string socketToken = "";

	public void Init(JSONNode arr){
		session = arr [1].AsArray [0];
		socketToken = [REDACTED] [1].AsArray [1];
	}
}