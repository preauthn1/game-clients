
function OK2_LoginResult(){
    this.token = "",
    this.loginSuccess = false,
    this.loginDes = ""
}

OK2_LoginResult.prototype.init= function(_token, _loginSuccess, _loginDes){
    this.token =[REDACTED];
    this.loginSuccess = _loginSuccess;
    this.loginDes = _loginDes;
}

window.OK2_LoginResult = OK2_LoginResult;
