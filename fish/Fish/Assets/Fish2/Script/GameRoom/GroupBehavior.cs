using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

namespace P8Games.MicroFish
{
    public class GroupBehavior : MonoBehaviour
    {
        public TargetObject group { private set; get; }

        private Animator groupAnimator;
        private PoolView pv;
        private List<FishBehavior> fishList;

        private Vector3 startPosition;
        private Vector3 endPosition;

        private bool isSwimming = false;
//        private double previousMoveTime;

		public bool isSpecial = false;

		Fish_GameAreaBehavior gameArea;
        void Awake()
        {
            groupAnimator = transform.GetChild(0).GetComponent<Animator>();
        }
		public bool isDebug;
        public void SpawnGroup(PoolView poolView, TargetObject targetGroup, double curGameTime, bool rotateC)
        {

            isSwimming = true;
            this.group = targetGroup;
            pv = poolView;
            fishList = new List<FishBehavior>();

            List<FishBehavior> tempFishBehavior = new List<FishBehavior>(GetComponentsInChildren<FishBehavior>());

			if (isDebug)
				Debug.Log ("1: " +targetGroup.targetInfo.Length);
            for (int i = 0; i < targetGroup.targetInfo.Length; i++)
            {
                int index = 0;
				if (isDebug)
					Debug.Log ("2: " +tempFishBehavior.Count);
                for (int j = 0; j < tempFishBehavior.Count; j++)
                {
					if (isDebug) {
						Debug.Log ("3: " + tempFishBehavior [j].FishType + " / " + targetGroup.targetInfo [i].targetType);
						Debug.Log ("4: " + group.targetInfo [i].targetId);
					}
                    if (tempFishBehavior[j].FishType == targetGroup.targetInfo[i].targetType)
                        index = j;

                    tempFishBehavior[j].InitFish(group.targetInfo[i], this, pv);
                }

                if(!fishList.Contains(tempFishBehavior[index]))
                    fishList.Add(tempFishBehavior[index]);

                pv.AddFish(group.targetInfo[i].targetId, tempFishBehavior[index]);

                tempFishBehavior.RemoveAt(index);
            }

            RouteCollection.Path path = pv.rc.GetPath(targetGroup.pathId);
            startPosition = path.start;
            endPosition = path.end;

            transform.parent = pv.fishHolder.transform;
            if (!rotateC)
                transform.localScale = Vector3.one;
            else
                transform.localScale = new Vector3(1, -1, 1);

            transform.rotation = Quaternion.Euler(0f, 0f, (endPosition.x - startPosition.x > 0f ? -1 : 1)*Vector2.Angle(endPosition - startPosition, Vector2.up));

            UpdateGroupPosition(curGameTime);
        }

        private bool UpdateGroupPosition(double currentTime)
        {
			if (isSpecial) {
				this.transform.position = Vector3.zero;
				return false;
			}

            if (currentTime >= group.spawnTime && currentTime <= group.spawnTime + group.sustainTime)
            {
                transform.localPosition = startPosition + (endPosition - startPosition)*(float) ((currentTime - group.spawnTime)/group.sustainTime);
                gameObject.SetActive(true);
            }
            else if(currentTime < group.spawnTime)
                DisableFish();
            else
                return true;

            return false; // true if is death
        }

        public void SpeedUpGroupPosition()
        {
            if (!isSwimming)
                return;

            isSwimming = false;

            if (groupAnimator != null)
                groupAnimator.speed = 3;


            foreach (FishBehavior fish in fishList)
            {
                if (fish != null)
                {
                    fish.SpeedUpAnimation();
					if(gameArea==null)
                 	gameArea = FindObjectOfType<Fish_GameAreaBehavior>();
					
                    gameArea.RemoveType(fish.fish.targetId);
                }
            }

            LeanTween.moveLocal(this.gameObject, endPosition, 3f).setOnComplete(DisableFish);
        }

        void DisableFish()
        {
            transform.localPosition = startPosition;
            foreach (FishBehavior fish in fishList)
            {
                if (fish != null)
                {
					if(gameArea==null)
						gameArea = FindObjectOfType<Fish_GameAreaBehavior>();
                    gameArea.RemoveType(fish.fish.targetId);
                }
            }
			gameObject.SetActive(false);
        }

        public bool SwimGroup(double curGameTime)
        {
//            previousMoveTime = curGameTime;
            return UpdateGroupPosition(curGameTime); // true if is death
        }

        public void RemoveFish(FishBehavior fb)
        {
            foreach (FishBehavior fish in fishList)
            {
                if (fish == fb)
                {
					if(gameArea==null)
						gameArea = FindObjectOfType<Fish_GameAreaBehavior>();
                    gameArea.RemoveType(fish.fish.targetId);
                }
            }
            fishList.Remove(fb);
            if (fishList.Count == 0)
            {
                pv.RemoveGroup(this);
                //Destroy(this.gameObject);
            }
        }
    }
}