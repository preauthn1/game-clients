using System.Collections;
using System.Collections.Generic;
using UnityEngine;

namespace P8Games.Fish4
{
public class TurtleGroupBehavior : MonoBehaviour {

		public TargetObject crocodileGroup { private set; get; }

		private PoolView pv;

		private bool swimCondition = false;

		private bool exist = false;

		public void SpawnCrocodile(PoolView poolView, TargetObject targetGroup, double curGameTime)
		{
			exist = true;
			crocodileGroup = targetGroup;
			pv = poolView;

			TurtleBehavior crocodileArray = GetComponentInChildren<TurtleBehavior>();
			crocodileArray.InitCrocodile(crocodileGroup.targetInfo[0], this, pv, crocodileGroup.groupId);
			pv.AddTurtle(crocodileGroup.targetInfo[0].targetId, crocodileArray);


			Fish_GameAreaBehavior gameArea = FindObjectOfType<Fish_GameAreaBehavior>();
			gameArea.SetType(crocodileGroup.targetInfo[0].targetId, 106, crocodileArray);
			UpdateCrocodileGroupPosition(curGameTime);
		}

		internal void RemoveCrocodile(TurtleBehavior crocodileBehavior)
		{
			pv.RemoveGroup(this);
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
						TurtleBehavior crocodileArray = GetComponentInChildren<TurtleBehavior>();
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
			TurtleBehavior arr = GetComponentInChildren<TurtleBehavior>();
			Fish_GameAreaBehavior gameArea = FindObjectOfType<Fish_GameAreaBehavior>();
			gameArea.RemoveType(arr.fish.targetId);
		}

		void DisableCrocodile()
		{
			pv.RemoveGroup(this);
			Fish_GameAreaBehavior gameArea = FindObjectOfType<Fish_GameAreaBehavior>();
			TurtleBehavior arr = GetComponentInChildren<TurtleBehavior>();
			gameArea.RemoveType(arr.fish.targetId);
			if (swimCondition)
			{
				swimCondition = false;

				arr.HideAnimation();
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