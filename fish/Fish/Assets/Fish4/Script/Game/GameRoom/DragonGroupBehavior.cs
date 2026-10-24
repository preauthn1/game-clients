using System.Collections;
using System.Collections.Generic;
using UnityEngine;

namespace P8Games.Fish4
{
    public class DragonGroupBehavior : MonoBehaviour
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

            DragonBehavior dragonArray = GetComponentInChildren<DragonBehavior>();
            dragonArray.InitDragon(dragonGroup.targetInfo[0], this, pv, dragonGroup.groupId);
            pv.AddDragon(dragonGroup.targetInfo[0].targetId, dragonArray);

            Fish_GameAreaBehavior gameArea = FindObjectOfType<Fish_GameAreaBehavior>();
            gameArea.SetType(dragonGroup.targetInfo[0].targetId, 102, dragonArray);
            UpdateDragonGroupPosition(curGameTime);

        }

        internal void RemoveDragon(DragonBehavior dragonBehavior)
        {
            exist = false;
            pv.RemoveDragonGroup(this);
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
                        DragonBehavior dragonArray = GetComponentInChildren<DragonBehavior>();
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
                DragonBehavior dragonArray = GetComponentInChildren<DragonBehavior>();
                dragonArray.HideAnimation();
            }

            pv.RemoveDragonGroup(this);
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