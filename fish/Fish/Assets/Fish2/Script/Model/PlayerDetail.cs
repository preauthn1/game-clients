namespace P8Games.MicroFish
{
    public class PlayerDetail {

		private string _playerName;
		private double _balance;

        public PlayerDetail(string _playerName, double _balance, int _betAmountIndex)
		{
            this._playerName = _playerName;
            this._balance = _balance;
		}

		public string playerName
		{
			get{
				return _playerName;
			}
		}

		public double balance
		{
			get{
				return _balance;
			}
        }
	}
}