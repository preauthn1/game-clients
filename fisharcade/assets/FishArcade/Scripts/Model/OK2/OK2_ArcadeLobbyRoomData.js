
function OK2_ArcadeLobbyRoomData(){
    this.roomId = 0;
    this.seatedPlayer = 0;
    this.maxPlayer = 0;
    this.gameDelay = 0;
    this.multiplier = 0;
    this.minBuyIn = 0;
    this.minStay = 0;
    this.categoryId = 0;
}

OK2_ArcadeLobbyRoomData.prototype.init= function(jsonResult){
    this.roomId = jsonResult[0];
    this.seatedPlayer = jsonResult[1];
    this.maxPlayer = jsonResult[2];
    this.gameDelay = jsonResult[3];
    this.multiplier = jsonResult[4];
    this.minBuyIn = jsonResult[5];
    this.minStay = jsonResult[6];
    this.categoryId = jsonResult[7];
}

window.OK2_ArcadeLobbyRoomData = OK2_ArcadeLobbyRoomData;
