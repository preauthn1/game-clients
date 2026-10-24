using System.Collections;
using System.Collections.Generic;
using UnityEngine;

namespace P8Games.Fish4
{
    public class OnGuiToken : [REDACTED]
    {
		public GameImpl gameImpl;
        bool guiC = true;
        void OnGUI()
        {
			if (guiC) {
				GUILayout.BeginArea (new Rect (0, 0, Screen.width, Screen.height));
				GUILayout.FlexibleSpace ();
				GUILayout.BeginHorizontal ();
				GUILayout.FlexibleSpace ();

				// Now you can finally put in your GUI, such as:
				GUILayout.BeginVertical ("box");
				GUILayout.Label ("Please select a token for login");
				if (GUILayout.Button ("54be9ef1892a4489c2feb7ba52c3b078")) {
					FishDataManager dataManager = FindObjectOfType<FishDataManager> ();
					dataManager.InitGame (gameImpl.url, gameImpl.port, "54be9ef1892a4489c2feb7ba52c3b078");
					guiC = false;
				}

				if (GUILayout.Button ("b1e43a8e8331597f62446dfab942dbf9")) {
					FishDataManager dataManager = FindObjectOfType<FishDataManager> ();
					dataManager.InitGame (gameImpl.url, gameImpl.port, "b1e43a8e8331597f62446dfab942dbf9");
					guiC = false;
				}

				if (GUILayout.Button ("a75e109f917d723c2cf3be3e10819e53")) {
					FishDataManager dataManager = FindObjectOfType<FishDataManager> ();
					dataManager.InitGame (gameImpl.url, gameImpl.port, "a75e109f917d723c2cf3be3e10819e53");
					guiC = false;
				}

				if (GUILayout.Button ("a19fd8a9380a41b7158e2123d7561cc0")) {
					FishDataManager dataManager = FindObjectOfType<FishDataManager> ();
					dataManager.InitGame (gameImpl.url, gameImpl.port,"a19fd8a9380a41b7158e2123d7561cc0");
					guiC = false;
				}
				if (GUILayout.Button ("01f6789519d83d152fb196c7d9a939b1")) {
					FishDataManager dataManager = FindObjectOfType<FishDataManager> ();
					dataManager.InitGame (gameImpl.url, gameImpl.port,"01f6789519d83d152fb196c7d9a939b1");
					guiC = false;
				}

				if (GUILayout.Button ("ad4163a4e054f2f1953ad7cdeb2bdba5")) {
					FishDataManager dataManager = FindObjectOfType<FishDataManager> ();
					dataManager.InitGame (gameImpl.url, gameImpl.port, "ad4163a4e054f2f1953ad7cdeb2bdba5");
					guiC = false;
				}

				if (GUILayout.Button ("a77d50d74912477949b801663e813ac2")) {
					FishDataManager dataManager = FindObjectOfType<FishDataManager> ();
					dataManager.InitGame (gameImpl.url, gameImpl.port,"a77d50d74912477949b801663e813ac2");
					guiC = false;
				}

				if (GUILayout.Button ("6fb46b7958af54878e5a10b5d7903a15")) {
					FishDataManager dataManager = FindObjectOfType<FishDataManager> ();
					dataManager.InitGame (gameImpl.url, gameImpl.port, "6fb46b7958af54878e5a10b5d7903a15");
					guiC = false;
				}
				GUILayout.EndVertical ();

				GUILayout.FlexibleSpace ();
				GUILayout.EndHorizontal ();
				GUILayout.FlexibleSpace ();
				GUILayout.EndArea ();
			}
        }
	}
}