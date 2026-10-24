using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using P8Games.MicroFish;

public class PlaySfxSingle : MonoBehaviour {
	public AudioClip sfx;
	public AudioClip animSfx1;
	public AudioClip animSfx2;
	public FishSfxController sfxController;

	// Use this for initialization
	void Start () {
		if(sfxController==null)
			sfxController = FindObjectOfType<FishSfxController>();
	}
	
	// Update is called once per frame
	void Update () {
		
	}

	public void PlaySfx(){
		sfxController.PlaySingleSfx (sfx);
	}
	public void PlayAnimSfx(){
		sfxController.PlaySingleSfx (animSfx1);
	}
	public void PlayAnim2Sfx(){
		sfxController.PlaySingleSfx (animSfx2);
	}
}
