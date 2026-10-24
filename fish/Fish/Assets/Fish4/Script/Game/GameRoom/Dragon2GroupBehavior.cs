using System.Collections;
using System.Collections.Generic;
using UnityEngine;

namespace P8Games.Fish4
{
    public class Dragon2GroupBehavior : MonoBehaviour
    {
        public TargetObject dragonGroup { private set; get; }

        private PoolView pv;
        private Vector3 startPosition;
        private Vector3 endPosition;

        private bool swimCondition = false;
        private bool exist = false;

        public void SpawnDragon(PoolView poolView, TargetObject targetGroup, double curGameTime)
        {
            dragonGroup = targetGroup;
            pv = poolView;

            exist = true;

			Dragon2Behavior dragonArray = GetComponentInChildren<Dragon2Behavior>();
            dragonArray.InitDragon(dragonGroup.targetInfo[0], this, pv, dragonGroup.groupId);
			pv.AddDragon2(dragonGroup.targetInfo[0].targetId, dragonArray);

            Fish_GameAreaBehavior gameArea = FindObjectOfType<Fish_GameAreaBehavior>();
            gameArea.SetType(dragonGroup.targetInfo[0].targetId, 107, dragonArray);
            UpdateDragonGroupPosition(curGameTime);
        }

		internal void RemoveDragon(Dragon2Behavior dragonBehavior)
        {
            exist = false;
			pv.RemoveGroup(this);
            Fish_GameAreaBehavior gameArea = FindObjectOfType<Fish_GameAreaBehavior>();
            gameArea.RemoveType(dragonGroup.targetInfo[0].targetId);
        }

        private void UpdateDragonGroupPosition(double currentTime)
        {
            if (exist)
            {
                if (currentTime >= dragonGroup.spawnTime && currentTime <= dragonGroup.spawnTime + dragonGroup.sustainTime)
                {
                    if (!swimCondition)
                    {
                        EnableGameObject();
						Dragon2Behavior dragonArray = GetComponentInChildren<Dragon2Behavior>();
                        dragonArray.ShowAnimation();
                        swimCondition = true;
                    }
                }
                else
                {
                    DisableDragon();
                }
            }
        }

        public void SpeedUpGroupPosition()
        {
            DisableDragon();
            Fish_GameAreaBehavior gameArea = FindObjectOfType<Fish_GameAreaBehavior>();
            gameArea.RemoveType(dragonGroup.targetInfo[0].targetId);
        }

        void DisableDragon()
        {

            if (swimCondition)
            {
                swimCondition = false;
				Dragon2Behavior dragonArray = GetComponentInChildren<Dragon2Behavior>();
                dragonArray.HideAnimation();
            }

			pv.RemoveGroup(this);
            Fish_GameAreaBehavior gameArea = FindObjectOfType<Fish_GameAreaBehavior>();
            gameArea.RemoveType(dragonGroup.targetInfo[0].targetId);
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
            UpdateDragonGroupPosition(curGameTime);
        }
    }
}