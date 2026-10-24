using System.Collections;
using System.Collections.Generic;
using UnityEngine;

namespace P8Games.MicroFish
{
    public class TacoMapController : MonoBehaviour
    {
        private bool rotateC = false;
        private int tweenId = 0;
        private int tweenRId = 0;

        public void ShowMap()
        {
            LeanTween.cancel(tweenId);
            LeanTween.cancel(tweenRId);
            this.gameObject.SetActive(true);
            rotateC = true;
            rotate = 60;
            RotateBackground();
            this.gameObject.transform.localRotation = new Quaternion(0, 0, 0, 0);
        }

        public void HideMap()
        {
            LeanTween.cancel(tweenId);
            LeanTween.cancel(tweenRId);
            this.gameObject.SetActive(false);
            rotateC = false;
            rotate = 60;
        }

        int rotate = 60;

        void RotateBackground()
        {
            LeanTween.cancel(tweenId);
            LeanTween.cancel(tweenRId);
			tweenId = LeanTween.rotateLocal(this.gameObject, new Vector3(0,0,rotate), 2f).setOnComplete(() =>
            {
                if (rotate == 360)
                {
                    this.gameObject.transform.localRotation = new Quaternion(0, 0, 0, 0);
                    rotate = 0;
                }
                rotate += 60;
                tweenRId = LeanTween.value(gameObject, 0f, 1f, 8f).setOnComplete(() =>
                {
                    if (rotateC)
                    {
                        RotateBackground();
                    }
                }).id;
            }).id;
        }
    }
}
