using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

namespace P8Games.Fish4
{
    public class BackgroundBehavior : MonoBehaviour
    {
        public Image leftImage;
        public Image rightImage;
        public ParticleSystem waveParticle;

        public Vector3 wavePositionOffset;
        public float bgTransitionTime = 2f;
        public float waveExtraTime = 0.4f;

        public Sprite[] bgSprite;

        private int spriteIndex;
        private bool isTransition = false;
        private float edgePosition = 3600;

        private Vector3 startPost;
        private Vector3 endPost;

        // Use this for initialization
        void Start()
        {

            spriteIndex = UnityEngine.Random.Range(0, bgSprite.Length);
            leftImage.fillAmount = 1f;
            rightImage.fillAmount = 0f;

            leftImage.sprite = bgSprite[spriteIndex];
            waveParticle.gameObject.SetActive(false);
        }

        // Update is called once per frame
        void Update()
        {
            if (Input.GetKeyDown(KeyCode.A))
            {
                ChangeBackground();
            }
        }

        public void ChangeBackground()
        {
            if (isTransition)
                return;

            spriteIndex++;
            if (spriteIndex >= bgSprite.Length)
                spriteIndex = 0;

            rightImage.sprite = bgSprite[spriteIndex];
            waveParticle.gameObject.SetActive(true);
            isTransition = true;

            startPost = new Vector3(edgePosition/bgTransitionTime*(bgTransitionTime + waveExtraTime), 0f, 0f);
            endPost = new Vector3(-edgePosition/bgTransitionTime*(bgTransitionTime + waveExtraTime), 0f, 0f);

            LeanTween.value(gameObject, 0f, 1f, bgTransitionTime + waveExtraTime).setOnUpdate((float t) =>
            {
                waveParticle.transform.localPosition = startPost + (endPost - startPost)*t + wavePositionOffset;
            }).setOnComplete(() =>
            {
                isTransition = false;
                waveParticle.gameObject.SetActive(false);
            });

            LeanTween.delayedCall(gameObject, waveExtraTime/2f, () =>
            {
                LeanTween.value(gameObject, 0f, 1f, bgTransitionTime).setOnUpdate((float t) =>
                {
                    leftImage.fillAmount = 1f - t;
                    rightImage.fillAmount = t;
                }).setOnComplete(() =>
                {
                    leftImage.sprite = rightImage.sprite;

                    leftImage.fillAmount = 1f;
                    rightImage.fillAmount = 0f;
                });
            });
        }
    }
}
