using UnityEngine;
using System.Collections;
using VMSoft.Utils;
public class SM_RotateManager : MonoBehaviour {

	public int rotateSpeed = 5;

	// Update is called once per frame
//    void FixedUpdate()
//    {
//		this.transform.Rotate(Vector3.back * rotateSpeed);
//	}

	void OnEnable(){
		InvokeRepeating ("Rotate", 0.05f, 0.02f);
	}
	void OnDisable(){
		CancelInvoke ("Rotate");
	}
	public void Rotate(){
		this.transform.Rotate(Vector3.back * rotateSpeed);
	}		
}
