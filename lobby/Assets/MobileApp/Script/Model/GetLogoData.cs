using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using SimpleJSON;

public class GetLogoData {
	public string logoUrl;
	public string mainLink;

	public void Init(JSONNode arr){
		//{"status":0,"id":10,"url":"http://0.0.0.0:8380/public/request/getLogo?code=11"}
		logoUrl = arr ["url"];
		mainLink  = arr["mainUrl"];
	}

}
