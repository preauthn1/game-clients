namespace P8Games.Fish
{
    public class GunTypeChanged {

		private int _playerId;
		private int _gunType;

		public GunTypeChanged(int _playerId, int _gunType)
		{
			this._playerId = _playerId;
			this._gunType = _gunType;
		}

		public int playerId{

			get{
				return _playerId;
			}
		}

		public int gunType
		{
			get{
				return _gunType;
			}
		}
	}
}