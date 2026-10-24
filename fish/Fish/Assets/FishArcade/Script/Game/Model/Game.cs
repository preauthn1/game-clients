namespace P8Games.Fish
{
    public class Game {

		private int _roundId;
		private int _mapId;
		private double _maxGameTime;
		private double _curGameTime;

		public Game(int _roundId, int _mapId, double _maxGameTime, double _curGameTime)
		{
			this._roundId = _roundId;
			this._mapId = _mapId;
			this._maxGameTime = _maxGameTime;
			this._curGameTime = _curGameTime;
		}

		public int roundId
		{
			get{
				return _roundId;
			}
		}

		public int mapId
		{
			get{
				return _mapId;
			}
		}

		public double maxGameTime
		{
			get{
				return _maxGameTime;
			}
		}

		public double curGameTime
		{
			get{
				return _curGameTime;
			}
		}
	}
}