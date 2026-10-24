using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Setting : MonoBehaviour {
	[SerializeField] BetVictor.LoginManager loginManager;
	[SerializeField] GameObject languageList;
	[SerializeField] RectTransform languageArrow;
	[SerializeField] GameObject logout;
	public void SwitchLanguageListActive()
	{
		bool value = languageList.activeSelf;
		languageList.SetActive(!value);
		float z = value ? 180 : 0;
		languageArrow.rotation = Quaternion.Euler(0, 0, z);
	}

	void OnEnable()
	{
		logout.SetActive(loginManager.SignedIn);
	}
	
}
