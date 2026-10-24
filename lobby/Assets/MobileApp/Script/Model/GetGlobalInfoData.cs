using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using SimpleJSON;
using System;

public class GetGlobalInfoData {
	public string announcement;
	public List<string> bannerSlidesUrl =new List<string>();
	public string companyLink;
	public void Init(JSONNode data){
		announcement = data ["runningText"];

		for (int i = 0; i < data ["slides"].Count; i++) {
			if (!String.IsNullOrEmpty (data ["slides"][i])) {
				bannerSlidesUrl.Add (data ["slides"][i]);
			}
		}
	}
}