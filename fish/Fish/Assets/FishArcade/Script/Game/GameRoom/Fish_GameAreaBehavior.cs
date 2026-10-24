using System.Collections;
using System.Collections.Generic;
using UnityEngine;

namespace P8Games.Fish
{
    public class Fish_GameAreaBehavior : MonoBehaviour
    {
        private Dictionary<int, int> fishTypeDic;
        private Dictionary<int, FishBehavior> fishBehaviorDic;

        private Dictionary<int, DragonBehavior> dragonBehaviorDic;

        private Dictionary<int, TacoBehavior> tacoBehaviorDic;

        private Dictionary<int, CrabBehavior> crabBehaviorDic;
		private Dictionary<int, BulbFishBehavior> bulbFishBehaviorDic;
		private Dictionary<int, CrocodileBehavior> crocodileBehaviorDic;
        void Start()
        {
            fishTypeDic = new Dictionary<int, int>();
            fishBehaviorDic = new Dictionary<int, FishBehavior>();
            dragonBehaviorDic = new Dictionary<int, DragonBehavior>();
            tacoBehaviorDic = new Dictionary<int, TacoBehavior>();
            crabBehaviorDic = new Dictionary<int, CrabBehavior>();
			bulbFishBehaviorDic = new Dictionary<int, BulbFishBehavior>();
			crocodileBehaviorDic = new Dictionary<int, CrocodileBehavior>();
        }

        public bool IsValidTarget(int targetId)
        {
            return fishTypeDic.ContainsKey(targetId);
        }

        public Dictionary<int, int> GetFishType
        {
            get { return fishTypeDic; }
        }

        public Dictionary<int, FishBehavior> GetFishBehavior
        {
            get { return fishBehaviorDic; }
        }

        public Dictionary<int, DragonBehavior> GetDragonBehavior
        {
            get { return dragonBehaviorDic; }
        }

        public Dictionary<int, TacoBehavior> GetTacoBehavior
        {
            get { return tacoBehaviorDic; }
        }

        public Dictionary<int, CrabBehavior> GetCrabBehavior
        {
            get { return crabBehaviorDic; }
        }

		public Dictionary<int, BulbFishBehavior> GetBulbFishBehavior
		{
			get { return bulbFishBehaviorDic; }
		}

		public Dictionary<int, CrocodileBehavior> GetCrocodileBehavior
		{
			get { return crocodileBehaviorDic; }
		}

        public void SetType(int key, int value, DragonBehavior bh)
        {
            if(!fishTypeDic.ContainsKey(key))
                fishTypeDic.Add(key, value);

            if (!dragonBehaviorDic.ContainsKey(key))
                dragonBehaviorDic.Add(key, bh);
        }
        public void SetType(int key, int value, TacoBehavior bh)
        {
            if (!fishTypeDic.ContainsKey(key))
                fishTypeDic.Add(key, value);

            if (!tacoBehaviorDic.ContainsKey(key))
                tacoBehaviorDic.Add(key, bh);
        }
        public void SetType(int key, int value, CrabBehavior bh)
        {
            Debug.Log("<color=red>set crab " + key + "</color>");
            if (!fishTypeDic.ContainsKey(key))
                fishTypeDic.Add(key, value);

            if (!crabBehaviorDic.ContainsKey(key))
                crabBehaviorDic.Add(key, bh);
        }

		public void SetType(int key, int value, BulbFishBehavior bh)
		{
			if (!fishTypeDic.ContainsKey(key))
				fishTypeDic.Add(key, value);

			if (!bulbFishBehaviorDic.ContainsKey(key))
				bulbFishBehaviorDic.Add(key, bh);
		}

		public void SetType(int key, int value, CrocodileBehavior bh)
		{
			if (!fishTypeDic.ContainsKey(key))
				fishTypeDic.Add(key, value);

			if (!crocodileBehaviorDic.ContainsKey(key))
				crocodileBehaviorDic.Add(key, bh);
		}

        public void RemoveType(int targetId)
        {

            if (fishTypeDic.ContainsKey(targetId))
            {
                fishTypeDic.Remove(targetId);
            }

            if (fishBehaviorDic.ContainsKey(targetId))
            {
                fishBehaviorDic.Remove(targetId);
            }

            if(dragonBehaviorDic.ContainsKey(targetId))
            {
                dragonBehaviorDic.Remove(targetId);
            }

            if (tacoBehaviorDic.ContainsKey(targetId))
            {
//                Debug.Log("<color=orange>Remove Taco " + targetId + "</color>");
                tacoBehaviorDic.Remove(targetId);
            }

            if (crabBehaviorDic.ContainsKey(targetId))
            {
//                Debug.Log("<color=orange>Remove crab " + targetId + "</color>");
                crabBehaviorDic.Remove(targetId);
            }

			if (bulbFishBehaviorDic.ContainsKey(targetId))
			{
				bulbFishBehaviorDic.Remove(targetId);
			}

			if (crocodileBehaviorDic.ContainsKey(targetId))
			{
				crocodileBehaviorDic.Remove(targetId);
			}
        }

        public void ResetType()
        {
            fishTypeDic = new Dictionary<int, int>();
            fishBehaviorDic = new Dictionary<int, FishBehavior>();
            dragonBehaviorDic = new Dictionary<int, DragonBehavior>();
            tacoBehaviorDic = new Dictionary<int, TacoBehavior>();
            crabBehaviorDic= new Dictionary<int, CrabBehavior>();
			bulbFishBehaviorDic = new Dictionary<int, BulbFishBehavior>();
			crocodileBehaviorDic = new Dictionary<int, CrocodileBehavior>();
        }

        void OnTriggerEnter2D(Collider2D other)
        {
            if (other.tag == "Fish")
            {
                if (other.GetComponentInParent<FishBehavior>() != null)
                {

                    int fishId = other.GetComponentInParent<FishBehavior>().fish.targetId;
                    int fishType = other.GetComponentInParent<FishBehavior>().FishType;

                    if (!fishTypeDic.ContainsKey(fishId))
                    {
                        fishTypeDic.Add(fishId, fishType);
                    }

                    if (!fishBehaviorDic.ContainsKey(fishId))
                    {
                        fishBehaviorDic.Add(fishId, other.GetComponentInParent<FishBehavior>());
                    }
                }
            }
        }

        void OnTriggerExit2D(Collider2D other)
        {
            if (other.tag == "Fish")
            {
                if (other.GetComponentInParent<FishBehavior>() != null)
                {
                    int fishId = other.GetComponentInParent<FishBehavior>().fish.targetId;

                    if (fishTypeDic.ContainsKey(fishId))
                    {
                        fishTypeDic.Remove(fishId);
                    }

                    if(fishBehaviorDic.ContainsKey(fishId))
                    {
                        fishBehaviorDic.Remove(fishId);
                    }
                }
            }
        }
    }
}
