
var utils = require('Utils');

function SlotStartDataModel(){
    this.playerId = "";
    this.playerCredit = 0;
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
    this.retriggerNum = -1;
    this.freeSpinSelectionType = -1;
    this.freeSpinSelectionNum = -1;
}

SlotStartDataModel.prototype.init= function(jsonResult){

    this.playerId = jsonResult[1][0];
    this.playerCredit = jsonResult[1][1];
    
    var gameDetail = jsonResult[2];
    var reelDetail;
    var gameSetting;

    this.nextRoundId = gameDetail[3];
    
    if(jsonResult[2]!="-1"){
        this.roundId = gameDetail[0][0];
        if(this.roundId == 1){
            //Game Setting
            reelDetail = gameDetail;
            gameSetting = reelDetail[0];

            this.multiplier = gameSetting[2];
            this.freeSpinLeft = gameSetting[3];
            this.lineBet = gameSetting[4];
            this.betValue = gameSetting[5];
            this.preWinAmount = gameSetting[7];
            this.totalWin = gameSetting[6];
            this.retriggerNum = gameSetting[9];
        }
        else if(this.roundId == 2){
            reelDetail = gameDetail[2];
            this.gameAction = gameDetail[0][1];
            gameSetting = reelDetail[0];

            this.multiplier = gameSetting[2];
            this.freeSpinLeft = gameSetting[3];
            this.lineBet = gameSetting[4];
            this.betValue = gameSetting[5];
            this.preWinAmount = gameSetting[7];
            this.totalWin = gameSetting[6];
            this.retriggerNum = gameSetting[9];
            
            if(this.gameAction > -1){
                var bonusDetail = gameDetail[1][0];
                this.freeSpinSelectionType = bonusDetail[0];
                this.freeSpinSelectionNum = bonusDetail[1];
            }
        }
        this.symbolResult = reelDetail[1][0];
        this.reelPosData = reelDetail[1][1];
        if(jsonResult.length >= 4){
            this.progressJackpotData = jsonResult[3];
        }
        this.winlineData = reelDetail[2];
    }
    else{
        this.roundId = -1;
    }


    // if(this.roundId != -1){

    // }

    // this.roundId = spinStartData[0];
    // this.symbolResult = spinStartData[1];
    // this.freeSpinLeft = spinStartData[2];
    // this.multiplier = spinStartData[3];
    // this.totalWin = spinStartData[4];
    // this.totalGameWin = spinStartData[5];
    // this.curTotalWin = spinStartData[6];
    // this.preWinAmount = spinStartData[7];
    // this.nextRoundId = spinStartData[8];
}

window.SlotStartDataModel = SlotStartDataModel;
