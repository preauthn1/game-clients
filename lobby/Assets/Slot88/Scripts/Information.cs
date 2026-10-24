using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class Information : MonoBehaviour {

	//[SerializeField] Image profile;
	//[SerializeField] Text username;
	[SerializeField] Text id;
	[SerializeField] Text credit;

	public void SetInformation(string id, string credit)
	{
		this.id.text = "ID: "+id;
		this.credit.text = credit;
		//this.username.text = username;
	}

}
