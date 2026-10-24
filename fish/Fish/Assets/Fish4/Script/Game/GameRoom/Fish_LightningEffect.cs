using System.Collections;
using System.Collections.Generic;
using UnityEngine;

namespace P8Games.Fish4
{
    public class Fish_LightningEffect : MonoBehaviour
    {

        public Transform launcherTransform;
        public RectTransform lightningTransform;

        private Transform targetTransform;
        private Canvas parentCanvas;

        private bool flipC = false;
		public float lightningAmount = 0.85f;

        void Awake()
        {
            parentCanvas = GetComponentInParent<Canvas>();
        }

        void Start()
        {

            gameObject.SetActive(false);
        }

        void Update()
        {
            if (targetTransform != null)
            {
                UpdateLightningEffect();
            }
            else
            {
                gameObject.SetActive(false);
            }
        }

        public void ShotTarget(Transform target, bool flip)
        {
            targetTransform = target;
            flipC = flip;
            if (targetTransform != null)
            {
                UpdateLightningEffect();
            }
            else
            {
                gameObject.SetActive(false);
            }
        }

        private void UpdateLightningEffect()
        {
            gameObject.SetActive(true);
            gameObject.transform.position = launcherTransform.position;

            if (!flipC)
            {
                Vector2 targetVector = targetTransform.position - launcherTransform.position;

                gameObject.transform.eulerAngles = new Vector3(0f, 0f, Mathf.Atan2(targetVector.y, targetVector.x)*Mathf.Rad2Deg - 90f);
				lightningTransform.sizeDelta = new Vector2(lightningTransform.sizeDelta.x, targetVector.magnitude/parentCanvas.transform.localScale.y*lightningAmount);
            }
            else
            {
                Vector2 targetVector = targetTransform.position - launcherTransform.position;

                gameObject.transform.eulerAngles = new Vector3(0f, 0f, Mathf.Atan2(targetVector.y, targetVector.x)*Mathf.Rad2Deg - 90f - 180f);
				lightningTransform.sizeDelta = new Vector2(lightningTransform.sizeDelta.x, targetVector.magnitude/parentCanvas.transform.localScale.y*lightningAmount);
            }

        }
    }
}