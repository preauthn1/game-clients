using System.Collections;
using System.Collections.Generic;
using UnityEngine;


namespace P8Games.Fish4
{
public class BulbFishGroupBehavior : MonoBehaviour {

	public TargetObject bulbFishGroup { private set; get; }

	private PoolView pv;

	private bool swimCondition = false;

	private bool exist = false;

	public void SpawnBulbFish(PoolView poolView, TargetObject targetGroup, double curGameTime)
	{
		exist = true;
		bulbFishGroup = targetGroup;
		pv = poolView;

		BulbFishBehavior bulbFishArray = GetComponentInChildren<BulbFishBehavior>();
		bulbFishArray.InitBulbFish(bulbFishGroup.targetInfo[0], this, pv, bulbFishGroup.groupId);
		pv.AddBulbFish(bulbFishGroup.targetInfo[0].targetId, bulbFishArray);


		Fish_GameAreaBehavior gameArea = FindObjectOfType<Fish_GameAreaBehavior>();
		gameArea.SetType(bulbFishGroup.targetInfo[0].targetId, 104, bulbFishArray);
		UpdateBulbFishGroupPosition(curGameTime);
	}

	internal void RemoveBulbFish(BulbFishBehavior bulbFishBehavior)
	{
		pv.RemoveBulbFishGroup(this);
		Fish_GameAreaBehavior gameArea = FindObjectOfType<Fish_GameAreaBehavior>();
		gameArea.RemoveType(bulbFishBehavior.fish.targetId);
		exist = false;
	}

	private void UpdateBulbFishGroupPosition(double currentTime)
	{
		if (exist)
		{
			if (currentTime >= bulbFishGroup.spawnTime && currentTime <= bulbFishGroup.spawnTime + bulbFishGroup.sustainTime)
			{
				if (!swimCondition)
				{
					EnableGameObject();
					BulbFishBehavior bulbFishArray = GetComponentInChildren<BulbFishBehavior>();
					bulbFishArray.ShowAnimation();
					swimCondition = true;
				}
			}
			else
			{
				DisableBulbFish();
			}
		}
	}

	public void SpeedUpGroupPosition()
	{
		DisableBulbFish();
		BulbFishBehavior bulbFishArray = GetComponentInChildren<BulbFishBehavior>();
		Fish_GameAreaBehavior gameArea = FindObjectOfType<Fish_GameAreaBehavior>();
		gameArea.RemoveType(bulbFishArray.fish.targetId);
	}

	void DisableBulbFish()
	{
		pv.RemoveBulbFishGroup(this);
		Fish_GameAreaBehavior gameArea = FindObjectOfType<Fish_GameAreaBehavior>();
		BulbFishBehavior bulbFishArray = GetComponentInChildren<BulbFishBehavior>();
		gameArea.RemoveType(bulbFishArray.fish.targetId);
		if (swimCondition)
		{
			swimCondition = false;

			bulbFishArray.HideAnimation();
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
		UpdateBulbFishGroupPosition(curGameTime);
	}
}
}