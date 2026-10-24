namespace P8Games.Fish4
{
    public class SeatInfo
	{
		public int seatId { private set; get;}
		public int playerId { private set; get; }
		public string playerName { private set; get;}
		public int gunType { private set; get;}
		public double balance { private set; get;}
		public float gunAngle { private set; get;}
		public double previosBetValue { private set; get;}

		public SeatInfo(int _seatId, int _playerId, string _playerName, int _gunType, double _balance, float _angle, double _previousBetValue)
		{
			seatId = _seatId;
			playerId = _playerId;
			playerName = _playerName;
			gunType = _gunType;
			balance = _balance;
			gunAngle = _angle;
			previosBetValue = _previousBetValue;
		}
	}
}