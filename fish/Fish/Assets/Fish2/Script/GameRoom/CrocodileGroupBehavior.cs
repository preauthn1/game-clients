using System.Collections;
using System.Collections.Generic;
using UnityEngine;

namespace P8Games.MicroFish
{
public class CrocodileGroupBehavior : MonoBehaviour {

		public TargetObject crocodileGroup { private set; get; }

		private PoolView pv;

		private bool swimCondition = false;

		private bool exist = false;

		public void SpawnCrocodile(PoolView poolView, TargetObject targetGroup, double curGameTime)
		{
			exist = true;
			crocodileGroup = targetGroup;
			pv = poolView;

			CrocodileBehavior crocodileArray = GetComponentInChildren<CrocodileBehavior>();
			crocodileArray.InitCrocodile(crocodileGroup.targetInfo[0], this, pv, crocodileGroup.groupId);
			pv.AddCrocodile(crocodileGroup.targetInfo[0].targetId, crocodileArray);


			Fish_GameAreaBehavior gameArea = FindObjectOfType<Fish_GameAreaBehavior>();
			gameArea.SetType(crocodileGroup.targetInfo[0].targetId, crocodileGroup.targetInfo[0].targetType, crocodileArray);
			UpdateCrocodileGroupPosition(curGameTime);
		}

		internal void RemoveCrocodile(CrocodileBehavior crocodileBehavior)
		{
			pv.RemoveCrocodileGroup(this);
			Fish_GameAreaBehavior gameArea = FindObjectOfType<Fish_GameAreaBehavior>();
			gameArea.RemoveType(crocodileBehavior.fish.targetId);
			exist = false;
		}

		private void UpdateCrocodileGroupPosition(double currentTime)
		{
			if (exist)
			{
				if (currentTime >= crocodileGroup.spawnTime && currentTime <= crocodileGroup.spawnTime + crocodileGroup.sustainTime)
				{
					if (!swimCondition)
					{
						EnableGameObject();
						CrocodileBehavior crocodileArray = GetComponentInChildren<CrocodileBehavior>();
						crocodileArray.ShowAnimation();
						swimCondition = true;
					}
				}
				else
				{
					DisableCrocodile();
				}
			}
		}

		public void SpeedUpGroupPosition()
		{
			DisableCrocodile();
			CrocodileBehavior crocodileArray = GetComponentInChildren<CrocodileBehavior>();
			Fish_GameAreaBehavior gameArea = FindObjectOfType<Fish_GameAreaBehavior>();
			gameArea.RemoveType(crocodileArray.fish.targetId);
		}

		void DisableCrocodile()
		{
			pv.RemoveCrocodileGroup(this);
			Fish_GameAreaBehavior gameArea = FindObjectOfType<Fish_GameAreaBehavior>();
			CrocodileBehavior crocodileArray = GetComponentInChildren<CrocodileBehavior>();
			gameArea.RemoveType(crocodileArray.fish.targetId);
			if (swimCondition)
			{
				swimCondition = false;

				crocodileArray.HideAnimation();
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
			UpdateCrocodileGroupPosition(curGameTime);
		}
}
}