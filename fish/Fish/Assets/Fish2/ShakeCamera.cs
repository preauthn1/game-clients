using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class ShakeCamera : MonoBehaviour {
	public GameObject camera1;
	public GameObject obj1;
	public GameObject background;
	public float time;
	public int count;

	Vector3 objOriginPos;
	Vector3 objOriginPos2;
	public void Start(){
		objOriginPos = obj1.transform.localPosition;
		if(background!=null)
		objOriginPos2 = background.transform.position;
	}
	public void Shake(){
		//		Debug.Log ("Shake Camera");
		if (camera1 == null)
			camera1 = GameObject.FindObjectOfType<Camera> ().gameObject;

		LeanTween.moveLocal (camera1, new Vector3 (0.2f, 0.2f,-100f), time).setLoopCount(count);
		if (obj1 != null)
		LeanTween.moveLocal (obj1, new Vector3 (5f, 5f,0f), time).setLoopCount(count);

		if (background != null)
			LeanTween.moveLocal (background, new Vector3 (5f, 5f,0f), time).setLoopCount(count);
//		LeanTween.moveLocal (obj2, new Vector3 (10f, 10f,0f), time).setLoopCount(count);

		LeanTween.delayedCall (gameObject,time*count+0.05f, ()=> Reset());
	}
	public void Reset(){
		//		Debug.Log("Reset!!!");
		if (camera1 != null)
		camera1.transform.position = new Vector3 (0f, 0f,-100f);

		if (obj1 != null)
		obj1.transform.localPosition = objOriginPos;
		if (background != null)
			background.transform.localPosition = objOriginPos2;
	}
	public void StopLoop(){
		if(camera1!=null)
		LeanTween.cancel (camera1);
		if(obj1!=null)
		LeanTween.cancel (obj1);
		if(gameObject!=null)
		LeanTween.cancel (gameObject);
		if(background!=null)
			LeanTween.cancel (background);
		
		Reset ();
	}
	public void ShakeLoop(){
		if (camera1 == null)
			camera1 = GameObject.FindObjectOfType<Camera> ().gameObject;
		if (camera1 != null)
		LeanTween.moveLocal (camera1, new Vector3 (0.1f, 0.1f,-100f), time).setLoopCount(0);
		if (obj1 != null)
			LeanTween.moveLocal (obj1, new Vector3 (5f, 5f,0f), time).setLoopCount(0);
		if (background != null)
			LeanTween.moveLocal (background, new Vector3 (5f, 5f,0f), time).setLoopCount(0);
	}
}
