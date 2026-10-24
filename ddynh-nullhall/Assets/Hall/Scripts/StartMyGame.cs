using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using System.Runtime.InteropServices;

public partial class StartMyGame 
{
	
#if UNITY_IOS && !UNITY_EDITOR
	[DllImport("__Internal")]
	private static extern void startMySDK();
#endif

	// Use this for initialization
	public static void StartXCodeGame () {
#if UNITY_IOS && !UNITY_EDITOR
		startMySDK();
#endif
	}
}
