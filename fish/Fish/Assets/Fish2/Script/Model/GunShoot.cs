namespace P8Games.MicroFish
{
    public class GunShoot {

		private int _playerId;
		private int _gunType;
		private float _shootAngle;
		public double _betValue { private set; get; }
		public double _credit { private set; get; }
		public long _shootId{ private set; get; }
		public int fishId = 0;
		public GunShoot(int _playerId, int _gunType, float _shootAngle, double _betValue)
		{
			this._playerId = _playerId;
			this._gunType = _gunType;
			this._shootAngle = _shootAngle;
			this._betValue = _betValue;
		}
		public GunShoot(int _playerId, int _gunType, float _shootAngle, double _betValue,int _fishId)
		{
			this._playerId = _playerId;
			this._gunType = _gunType;
			this._shootAngle = _shootAngle;
			this._betValue = _betValue;
			this.fishId = _fishId;
		}

		public GunShoot(GunShoot shoot, long _shootId)
		{
			this._playerId = shoot.playerId;
			this._gunType = shoot.gunType;
			this._shootAngle = shootAngle;
			this._betValue = shoot._betValue;
			this._credit = _credit;
			this._shootId = _shootId;
		}

		public GunShoot(int _playerId, int _gunType, float _shootAngle, double _betValue, long _shootId, double _credit)
		{
			this._playerId = _playerId;
			this._gunType = _gunType;
			this._shootAngle = _shootAngle;
			this._betValue = _betValue;
			this._credit = _credit;
			this._shootId = _shootId;
		}
		public GunShoot(int _playerId, int _gunType, float _shootAngle, double _betValue, long _shootId, double _credit,int _fishId)
		{
			this._playerId = _playerId;
			this._gunType = _gunType;
			this._shootAngle = _shootAngle;
			this._betValue = _betValue;
			this._credit = _credit;
			this._shootId = _shootId;
			this.fishId = _fishId;
		}

		public int playerId
		{
			get
			{
				return _playerId;
			}
		}

		public int gunType
		{
			get
			{
				return _gunType;
			}
		}

		public float shootAngle
		{
			get
			{
				return _shootAngle;
			}
		}
	}
}