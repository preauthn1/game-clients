using System.Collections;
using System.Collections.Generic;
using UnityEngine;

namespace P8Games.Fish4
{
    public class TacoGroupBehavior : MonoBehaviour
    {
        public TargetObject tacoGroup { private set; get; }

        private PoolView pv;
        private Vector3 startPosition;
        private Vector3 endPosition;

        private bool swimCondition = false;
        private bool exist = false;

        private int tweenId = 0;
        public void SpawnTaco(PoolView poolView, TargetObject targetGroup, double curGameTime)
        {
			if (tacoGroup != null) {
				Fish_GameAreaBehavior gameArea = FindObjectOfType<Fish_GameAreaBehavior>();
				gameArea.RemoveType(tacoGroup.targetInfo[0].targetId);
//				Debug.LogWarning ("Before Spawn Taco : " + tacoGroup.targetInfo [0].targetId + "/" + gameObject.name);
			}
            tacoGroup = targetGroup;
            pv = poolView;

            exist = true;

            TacoBehavior tacoArray = GetComponentInChildren<TacoBehavior>();
            tacoArray.InitTaco(tacoGroup.targetInfo[0], this, pv, tacoGroup.groupId);
            pv.AddTaco(tacoGroup.targetInfo[0].targetId, tacoArray);

            tweenId = LeanTween.value(0, 1, 1f).setOnComplete(() =>
            {
                Fish_GameAreaBehavior gameArea = FindObjectOfType<Fish_GameAreaBehavior>();
                gameArea.SetType(tacoGroup.targetInfo[0].targetId, 103, tacoArray);
            }).id;
            UpdateTacoGroupPosition(curGameTime);
        }

        internal void RemoveTaco(TacoBehavior tacoBehavior)
        {
//			Debug.LogWarning ("Remove Taco : " +tacoGroup.targetInfo[0].targetId);
            exist = false;
            LeanTween.cancel(tweenId);
            pv.RemoveTacoGroup(this);
            swimCondition = false;

            Fish_GameAreaBehavior gameArea = FindObjectOfType<Fish_GameAreaBehavior>();
            gameArea.RemoveType(tacoGroup.targetInfo[0].targetId);
        }

        private void UpdateTacoGroupPosition(double currentTime)
        {
            if (exist)
            {
                if (currentTime >= tacoGroup.spawnTime && currentTime <= tacoGroup.spawnTime + tacoGroup.sustainTime)
                {
                    if (!swimCondition)
                    {
                        EnableGameObject();
                        TacoBehavior tacoArray = GetComponentInChildren<TacoBehavior>();
                        tacoArray.ShowAnimation();
                        swimCondition = true;
                    }
                }
                else
                {
                    DisableFish();
                }
            }
        }

        public void SpeedUpGroupPosition()
        {
            DisableFish();
            Fish_GameAreaBehavior gameArea = FindObjectOfType<Fish_GameAreaBehavior>();
            gameArea.RemoveType(tacoGroup.targetInfo[0].targetId);
        }

        void DisableFish()
        {
//			Debug.LogWarning ("Remove Taco : " +tacoGroup.targetInfo[0].targetId);
            pv.RemoveTacoGroup(this);
            Fish_GameAreaBehavior gameArea = FindObjectOfType<Fish_GameAreaBehavior>();
            gameArea.RemoveType(tacoGroup.targetInfo[0].targetId);
            if (swimCondition)
            {
                swimCondition = false;
                TacoBehavior tacoArray = GetComponentInChildren<TacoBehavior>();
                tacoArray.HideAnimation();
            }

            exist = false;
        }

        public void EnableGameObject()
        {
            this.gameObject.SetActive(true);
        }

        public void DisableGameObject()
        {
            this.gameObject.SetActive(false);
            swimCondition = false;
        }

        public void SwimGroup(double curGameTime)
        {
            UpdateTacoGroupPosition(curGameTime);
        }
    }
}
