using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class ChangeScren : MonoBehaviour {
	[SerializeField] ScreenOrientation orientation;
	void Awake () {
		Screen.orientation = orientation;
	}
}
