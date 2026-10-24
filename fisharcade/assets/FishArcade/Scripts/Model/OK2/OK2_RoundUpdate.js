
function OK2_RoundUpdate(){
    this.roundNumber = 0,
    this.roundPhase = 0
}

OK2_RoundUpdate.prototype.init= function(jsonResult){
    this.roundNumber = jsonResult[0];
    this.roundPhase = jsonResult[1];
}

window.OK2_RoundUpdate = OK2_RoundUpdate;
