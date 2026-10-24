
function OK2_FishGameInfo(){
    this.groupInfo = [],
    this.routeOffsetRange = []
}

OK2_FishGameInfo.prototype.init= function(jsonResult){
    this.groupInfo = [];
    this.routeOffsetRange = [];
    this.groupInfo[1] = 1;
    this.groupInfo[2] = 4;
    this.groupInfo[3] = 3;
    this.groupInfo[4] = 10;
    this.groupInfo[5] = 24;
    this.groupInfo[6] = 27;
    this.groupInfo[7] = 26;
    this.groupInfo[8] = 38;

    this.routeOffsetRange["r1"] = [-1, 1];
}

window.OK2_FishGameInfo = OK2_FishGameInfo;
    