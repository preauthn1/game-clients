
function OK2_DeathInfo(){
    this.playerId = 0;
    this.fishId = 0;
    this.winAmount = 0;
}

OK2_DeathInfo.prototype.init= function(jsonResult){
    this.playerId = jsonResult[0];
    this.fishId = jsonResult[1];
    this.winAmount = jsonResult[2];
}

window.OK2_DeathInfo = OK2_DeathInfo;
    