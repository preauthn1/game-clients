
function OK2_PlayerDetail(){
    this.playerName = "",
    this.balance = 0
}

OK2_PlayerDetail.prototype.init= function(jsonResult){
    this.playerName = jsonResult[0];
    this.balance = jsonResult[1];
}

window.OK2_PlayerDetail = OK2_PlayerDetail;
