using UnityEngine;
using SimpleJSON;

namespace P8Games.MicroFish
{
    public class TargetObject {

		public int groupId { private set; get;}
		public string pathId { private set; get;}
		public Vector2 pathOffset { private set; get;}
		public double spawnTime { private set; get;}
		public double sustainTime { private set; get;}
		public TargetInfo[] targetInfo { private set; get;}

		public TargetObject(int _groupId, string _pathId, Vector2 _pathOffset, double _spawnTime, double _sustainTime)
		{
			groupId = _groupId;
			pathId = _pathId;
			pathOffset = _pathOffset;
			spawnTime = _spawnTime;
			sustainTime = _sustainTime;
		}

		public void SetTargetInfo(TargetInfo[] _targetInfo)
		{
			targetInfo = _targetInfo;
		}

		public void SetTargetInfo(SimpleJSON.JSONNode _targetInfo)
		{
			targetInfo = new TargetInfo[_targetInfo.Count];

			for (int i = 0; i < _targetInfo.Count; i++)
			{
				targetInfo[i] = new TargetInfo(_targetInfo[i].AsArray[0].AsInt, _targetInfo[i].AsArray[1].AsInt, _targetInfo[i].AsArray[2].AsDouble);
			}
		}

		public class TargetInfo
		{
			public int targetId { private set; get; }
			public int targetType { private set; get; }
			public double lifePoint { private set; get; }
			public bool isAlive { private set; get; }
			public double payout { private set; get; }
			public int specialType { private set; get;}
			public JSONArray specialParam { private set; get;}

			public TargetInfo(int _targetId, int _targetType, double _lifePoint)
			{
				targetId = _targetId;
				targetType = _targetType;
				lifePoint = _lifePoint;
				isAlive = true;
				payout = 0;
			}
			public TargetInfo(int _targetId, int _targetType, double _lifePoint,double _payout,int _specialType)
			{
				targetId = _targetId;
				targetType = _targetType;
				lifePoint = _lifePoint;
				isAlive = true;
				payout = _payout;
				specialType = _specialType;
			}

			public TargetInfo(int _targetId, int _targetType, double _lifePoint, bool _isAlive, double _payout)
			{
				targetId = _targetId;
				targetType = _targetType;
				lifePoint = _lifePoint;
				isAlive = _isAlive;
				payout = _payout;
			}

			public TargetInfo(int _targetId, int _targetType, double _lifePoint, bool _isAlive, double _payout,JSONArray _specialParam)
			{
				targetId = _targetId;
				targetType = _targetType;
				lifePoint = _lifePoint;
				isAlive = _isAlive;
				payout = _payout;
				specialParam = _specialParam;
			}

			public void thisFishDeath()
			{
				isAlive = false;
			}

			public void setPayout(double payOut)
			{
				this.payout = payout;
			}
		}
	}
}
