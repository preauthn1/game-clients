using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class PathPatternMove : MonoBehaviour {

	// Adjust the speed for the application.
	public float speed = 1.0f;

	// The target (cylinder) position.
	public Transform target;


	private bool reach = false;
	public float alpha = 0;
	public bool isDeath = false;
	public float delayTime = 0;
	// Use this for initialization
	void Start () {
		AlphaSprite (0);
	}
	
	void Update()
	{
		if (!reach && !isDeath && delayTime <= 0) {
			// Move our position a step closer to the target.
			float step = speed * Time.deltaTime; // calculate distance to move
			alpha += Time.deltaTime;
			AlphaSprite (alpha);
			transform.position = Vector3.MoveTowards (transform.position, target.position, step);

			// Check if the position of the cube and sphere are approximately equal.
			if (Vector3.Distance (transform.position, target.position) < 0.001f) {
				reach = true;
			}
		} 
		else if(!isDeath){
			float step = speed * Time.deltaTime; // calculate distance to move
			alpha += Time.deltaTime;
			AlphaSprite (alpha);
		}	
	}

	public void AlphaSprite(float _alpha){
//		for (int i = 0; i < sprite.Length; i++) {
		gameObject.GetComponent<SpriteRenderer>().color = new Color(1f, 1f, 1f, _alpha);
//		}
	}
}
