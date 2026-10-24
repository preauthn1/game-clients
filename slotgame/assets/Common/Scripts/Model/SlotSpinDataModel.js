
function SlotSpinDataModel(){
    this.roundId = -1;
    this.symbolResult = [];
    this.freeSpinLeft = -1;
    this.multiplier = -1;
    this.totalWin = 0;
    this.preWinAmount = 0;
    this.nextRoundId = 0;
    this.betValue = 0;
    this.lineBet = 0;
    this.gameAction = -1;
    this.reelPosData = [];
    this.winlineData = [];
    this.progressJackpotData = [];
    this.progressJackpotWinType = -1;
    this.progressJackpotWinAmount = -1;
}

SlotSpinDataModel.prototype.init= function(jsonResult){
    var gameSetting;
    var reelDetail;

    reelDetail = jsonResult;
    gameSetting = reelDetail[0];
    this.roundId = gameSetting[0];
    this.multiplier = gameSetting[2];
    this.freeSpinLeft = gameSetting[3];
    this.lineBet = gameSetting[4];
    this.betValue = gameSetting[5];
    this.totalWin = gameSetting[6];
    this.preWinAmount = gameSetting[7];
    this.retriggerNum = gameSetting[9];

    this.symbolResult = jsonResult[1][0];
    this.reelPosData = jsonResult[1][1];
    if(jsonResult[1].length>=3 && jsonResult[1][2]!=null){
        this.progressJackpotData = jsonResult[1][2]; 
        //this.progressJackpotWinType = jsonResult[1][2][0];
        //this.progressJackpotWinAmount = jsonResult[1][2][2];
    }
    this.winlineData = jsonResult[2];

    this.nextRoundId = reelDetail[3][0];
}

window.SlotSpinDataModel = SlotSpinDataModel;