using UnityEngine;
using System.Collections;

public class RotateFloat : MonoBehaviour {

	public float rotateSpeed = 5;

	// Update is called once per frame
	void FixedUpdate()
	{
		this.transform.Rotate(Vector3.back * rotateSpeed);
	}
}
