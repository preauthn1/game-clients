namespace P8Games.Fish
{
    public class LoginResult
	{	
		private string _token;
		private bool _loginSuccess;
		private string _loginDes;

		public LoginResult(string _token, bool _loginSuccess, string _loginDes)
		{
			this._token = [REDACTED];
			this._loginSuccess = _loginSuccess;
			this._loginDes = _loginDes;
		}

		public string token
		{
			get{
				return _token;
			}
		}

		public bool loginSuccess
		{
			get{
				return _loginSuccess;
			}
		}

		public string loginDes
		{
			get{
				return _loginDes;
			}
		}
	}
}