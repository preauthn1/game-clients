namespace P8Games.Fish4
{
    public class GunMove {

		private int _gunSeatNum;
		private float _moveRate;
		//private float _moveSpeed;
		private float _startingAngle;
		private float _endingAngle;

		public GunMove(int _gunSeatNum, float _moveRate/*, float _moveSpeed*/, float _startingAngle, float _endingAngle)
		{
			this._gunSeatNum = _gunSeatNum;
			this._moveRate = _moveRate;
			//this._moveSpeed = _moveSpeed;
			this._startingAngle = _startingAngle;
			this._endingAngle = _endingAngle;
		}

		public int gunSeatNum
		{
			get
			{
				return _gunSeatNum;
			}
		}

		public float moveRate
		{
			get{
				return _moveRate;
			}
		}

		/*public float moveSpeed
		{
			get{
				return _moveSpeed;
			}
		}*/

		public float startingAngle
		{
			get{
				return _startingAngle;
			}
		}

		public float endingAngle
		{
			get{
				return _endingAngle;
			}
		}
	}
}