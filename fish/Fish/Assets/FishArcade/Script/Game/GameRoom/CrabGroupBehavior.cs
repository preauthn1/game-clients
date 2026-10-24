using System.Collections;
using System.Collections.Generic;
using UnityEngine;

namespace P8Games.Fish
{
    public class CrabGroupBehavior : MonoBehaviour
    {

        public TargetObject crabGroup { private set; get; }

        private PoolView pv;

        private bool swimCondition = false;

        private bool exist = false;

        public void SpawnCrab(PoolView poolView, TargetObject targetGroup, double curGameTime)
        {
            exist = true;
            crabGroup = targetGroup;
            pv = poolView;

            CrabBehavior crabArray = GetComponentInChildren<CrabBehavior>();
            crabArray.InitCrab(crabGroup.targetInfo[0], this, pv, crabGroup.groupId);
            pv.AddCrab(crabGroup.targetInfo[0].targetId, crabArray);


            Fish_GameAreaBehavior gameArea = FindObjectOfType<Fish_GameAreaBehavior>();
            gameArea.SetType(crabGroup.targetInfo[0].targetId, crabGroup.targetInfo[0].targetType, crabArray);
            UpdateCrabGroupPosition(curGameTime);
        }

        internal void RemoveCrab(CrabBehavior crabBehavior)
        {
            pv.RemoveCrabGroup(this);
            Fish_GameAreaBehavior gameArea = FindObjectOfType<Fish_GameAreaBehavior>();
            gameArea.RemoveType(crabBehavior.fish.targetId);
            exist = false;
        }

        private void UpdateCrabGroupPosition(double currentTime)
        {
            if (exist)
            {
                if (currentTime >= crabGroup.spawnTime && currentTime <= crabGroup.spawnTime + crabGroup.sustainTime)
                {
                    if (!swimCondition)
                    {
                        EnableGameObject();
                        CrabBehavior crabArray = GetComponentInChildren<CrabBehavior>();
                        crabArray.ShowAnimation();
                        swimCondition = true;
                    }
                }
                else
                {
                    DisableCrab();
                }
            }
        }

        public void SpeedUpGroupPosition()
        {
            DisableCrab();
            CrabBehavior crabArray = GetComponentInChildren<CrabBehavior>();
            Fish_GameAreaBehavior gameArea = FindObjectOfType<Fish_GameAreaBehavior>();
			gameArea.RemoveType(crabArray.fish.targetId);
        }

        void DisableCrab()
        {
            pv.RemoveCrabGroup(this);
            Fish_GameAreaBehavior gameArea = FindObjectOfType<Fish_GameAreaBehavior>();
            CrabBehavior crabArray = GetComponentInChildren<CrabBehavior>();
            gameArea.RemoveType(crabArray.fish.targetId);
            if (swimCondition)
            {
                swimCondition = false;

                crabArray.HideAnimation();
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
            UpdateCrabGroupPosition(curGameTime);
        }
    }
}
