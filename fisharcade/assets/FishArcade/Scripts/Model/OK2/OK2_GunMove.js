
function OK2_GunMove(){
    this.gunSeatNum = 0;
    this.moveRate = 0;
    this.startingAngle = 0;
    this.endingAngle = 0;
}

OK2_GunMove.prototype.init= function(jsonResult){
    this.gunSeatNum = jsonResult[0];
    this.moveRate = jsonResult[1];
    this.startingAngle = jsonResult[2];
    this.endingAngle = jsonResult[3];
}

window.OK2_GunMove = OK2_GunMove;
    