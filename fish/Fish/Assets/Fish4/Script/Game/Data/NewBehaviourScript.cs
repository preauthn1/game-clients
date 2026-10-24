using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using GSLibrary.Common.Security;

public class NewBehaviourScript : MonoBehaviour {


	// Use this for initialization
	void Start () {
		string msg = AESEncryption.ByteArrayToString(AESEncryption.AES_Encrypt(" ", "4770a463f37a8968d76b252919aa5f23"));
		Debug.Log (msg);
		AESEncryption.AES_Decrypt(AESEncryption.StringToByteArray("F2C4EDFB5B72E74C9C501CB04FFC8BC5FAE0AE62C4FEBFF3DCA0A149BDF0C97355B8A2102345A084765B988639793B0382DC433130B89AE5AD41CA544A2AD7EFC91A4CAC8FAA0C5A5C619D74FC6B4D414013C772377A7B99A54DCAFBFA3"), "4770a463f37a8968d76b252919aa5f23");

	}
	
	// Update is called once per frame
	void Update () {
		
	}
}
