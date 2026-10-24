
function OK2_LoginInfo(){
    this.loginId = "",
    this.loginPassword = ""
}

OK2_LoginInfo.prototype.init= function(_loginId, _loginPassword){
    this.loginId = _loginId;
    this.loginPassword = [REDACTED];
}

window.OK2_LoginInfo = OK2_LoginInfo;
