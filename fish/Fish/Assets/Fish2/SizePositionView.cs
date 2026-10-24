using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

namespace P8Games.MicroFish
{
    public class SizePositionView : MonoBehaviour
    {
        private float defaultRatio = 0;
        private RectTransform currentTransform;

        void Start()
        {
            currentTransform = this.GetComponent<RectTransform>();
			float screenRatio = Mathf.Round((1.0f*Screen.width) /(1.0f*Screen.height)*100f) /100f;
			Debug.Log (Screen.height + " / " + Screen.width);
            defaultRatio = screenRatio;

            if (screenRatio >= 2.1 && screenRatio <= 2.2) //iphone 5...
            {
                setScreenSize(defaultRatio, true);
            }
            else
            {
                setScreenSize(defaultRatio);
            }
        }

        void FixedUpdate()
        {
			float screenRatio = Mathf.Round((1.0f * Screen.width) / (1.0f * Screen.height) * 100f) / 100f;
            if (defaultRatio != screenRatio)
            {
                defaultRatio = screenRatio;
                if (screenRatio >= 2.1 && screenRatio <= 2.2) //iphone X, XR XS ...
                {
                    setScreenSize(defaultRatio, true);
                }
                else
                {
                    setScreenSize(defaultRatio);
                }

            }
        }

        void setScreenSize(double defaultRatio, bool newType = false)
        {
            int newWidth = 0;
            int newHeight = 0;
			Debug.Log (defaultRatio);
            double remainRatio = defaultRatio / 2.1;
			Debug.Log (remainRatio);
            if (remainRatio < 1)
            {
                currentTransform.sizeDelta = new Vector2(1280, 720);
                return;
            }
            newWidth = (int) (1280* remainRatio);
            newHeight = (int) (720* remainRatio);
			Debug.Log (newWidth);
            if (newType)
            {
				currentTransform.sizeDelta = new Vector2(newWidth-150, newHeight);
            }
            else
            {
                currentTransform.sizeDelta = new Vector2(newWidth, newHeight);
            }
        }
    }
}
