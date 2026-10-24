using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class FakeJackpot : MonoBehaviour {

    long defaultNum =0;
    public float speed=10;

    public Text tex;
	// Use this for initialization
	void Start () {
        defaultNum = (long)Random.RandomRange(1f, 10f);
        defaultNum = defaultNum * 1000000;
    }
	
	// Update is called once per frame
	void Update () {
        defaultNum = (long)(defaultNum + (Time.deltaTime * speed));
        //Debug.Log(defaultNum);
        tex.text = defaultNum.ToString("###,###,###,##0");
    }
}
