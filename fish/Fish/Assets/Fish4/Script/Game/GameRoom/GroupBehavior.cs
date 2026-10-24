using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

namespace P8Games.Fish4
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

		public Animator[] specialAnim;
		public bool isSpecialG = false;
		public string pathId = "";
		public float randomZaxis =0;
        void Awake()
        {
            groupAnimator = transform.GetChild(0).GetComponent<Animator>();
			randomZaxis = UnityEngine.Random.Range (0f, 50f);
		}

        public void SpawnGroup(PoolView poolView, TargetObject targetGroup, double curGameTime, bool rotateC)
        {

            isSwimming = true;
            this.group = targetGroup;
            pv = poolView;
            fishList = new List<FishBehavior>();

//			Debug.Log (" 123 : " +gameObject.name);
            List<FishBehavior> tempFishBehavior = new List<FishBehavior>(GetComponentsInChildren<FishBehavior>(true));
//			Debug.Log (" 1234 : " +tempFishBehavior.Count);
//			Debug.Log (" 1234 : " +targetGroup.targetInfo.Length);

            for (int i = 0; i < targetGroup.targetInfo.Length; i++)
            {
//				Debug.Log ("Fish Type : " +targetGroup.targetInfo [i].targetType);
                int index = 0;

                for (int j = 0; j < tempFishBehavior.Count; j++)
                {
                    if (tempFishBehavior[j].FishType == targetGroup.targetInfo[i].targetType)
                        index = j;

                    tempFishBehavior[j].InitFish(group.targetInfo[i], this, pv);
                }

//				Debug.Log (" 1235 : " +index);
//				Debug.Log (" 123 : " +tempFishBehavior.Count);
//				Debug.Log (" 1234 : " +tempFishBehavior[index]);
//				Debug.Log (" 12345 : " +group.targetInfo[i].targetId);

				if(!fishList.Contains(tempFishBehavior[index]))
                    fishList.Add(tempFishBehavior[index]);


                pv.AddFish(group.targetInfo[i].targetId, tempFishBehavior[index]);

                tempFishBehavior.RemoveAt(index);
            }
			pathId = targetGroup.pathId;
			if(pathId.Substring(0, 1) == "P"){

				string[] pattern = targetGroup.pathId.Split ('_');

				if (pattern[1] == "1") {
					if (!rotateC)
						transform.localScale = new Vector3(1, 1, 1);
					else
						transform.localScale = new Vector3(1, -1, 1);
				}else if (pattern[1] == "2") {
					if (!rotateC)
						transform.localScale = new Vector3(-1, 1, 1);
					else
						transform.localScale = new Vector3(-1, -1, 1);
				}else if (pattern[1] == "3") {
					if (!rotateC)
						transform.localScale = new Vector3(-1, -1, 1);
					else
						transform.localScale = new Vector3(1, 1, 1);
				}else if (pattern[1] == "4") {
					if (!rotateC)
						transform.localScale = new Vector3(1, -1, 1);
					else
						transform.localScale = new Vector3(1, 1, 1);
				}	
				for (int i = 0; i < specialAnim.Length; i++) {
//					Debug.Log(curGameTime +" / " + group.spawnTime);
					if (curGameTime == group.spawnTime){
						specialAnim [i].SetInteger ("pattern", Int32.Parse (pattern [2]));
						specialAnim [i].Play (pattern [2]);
					}
					else {
						specialAnim [i].SetInteger("pattern",Int32.Parse(pattern [2]));
						specialAnim [i].Play (pattern [2], 0, (float)((curGameTime - group.spawnTime) / group.sustainTime));
					}
				}
				isSpecialG = true;
				transform.parent = pv.fishHolder.transform;
				transform.localPosition = Vector3.zero;
			}
			else{
				if (isSpecialG) {
					transform.parent = pv.fishHolder.transform;
					transform.localPosition = Vector3.zero;
					return;
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

            
        }
		public string GetSpecialPathId(){
			string[] pattern = pathId.Split ('_');
			return pattern [2];
		}
        private bool UpdateGroupPosition(double currentTime)
        {
            if (currentTime >= group.spawnTime && currentTime <= group.spawnTime + group.sustainTime)
            {
				if(!isSpecialG)
                transform.localPosition = startPosition + (endPosition - startPosition)*(float) ((currentTime - group.spawnTime)/group.sustainTime);

				transform.localPosition = new Vector3 (transform.localPosition.x,transform.localPosition.y,randomZaxis);
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
                    Fish_GameAreaBehavior gameArea = FindObjectOfType<Fish_GameAreaBehavior>();
                    gameArea.RemoveType(fish.fish.targetId);
                }
            }

            LeanTween.moveLocal(this.gameObject, endPosition, 3f).setOnComplete(DisableFish);
        }

        void DisableFish()
        {
            transform.localPosition = startPosition;
            gameObject.SetActive(false);
            foreach (FishBehavior fish in fishList)
            {
                if (fish != null)
                {
                    Fish_GameAreaBehavior gameArea = FindObjectOfType<Fish_GameAreaBehavior>();
                    gameArea.RemoveType(fish.fish.targetId);
                }
            }
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
                    Fish_GameAreaBehavior gameArea = FindObjectOfType<Fish_GameAreaBehavior>();
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