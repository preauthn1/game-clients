namespace P8Games.MicroFish
{
    public class LoginInfo {

		private string _loginId;
		private string _loginPassword;

		public LoginInfo(string _loginId, string _loginPassword)
		{
			this._loginId = _loginId;
			this._loginPassword = [REDACTED];
		}

		public string loginId
		{
			get{
				return _loginId;
			}
		}

		public string loginPassword
		{
			get {
				return _loginPassword;
			}
		}
	}
}