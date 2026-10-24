function SlotJackpotGameDataModel(){
    this.totalPayout = 0;
    this.balancePayout = 0;
    this.givenPayout = 0;
    this.state = 0;

    this.betSize =0;
    this.jackpotType = 0;
    this.restoreData = [];
}

SlotJackpotGameDataModel.prototype.init= function(jsonResult){
    // [6,0,100000,100000,0]
    // [6,0,totalpayout,balancepayout,givenpayout]
    // console.log(jsonResult);
    //{"actionId":"9","eventData":[6,1,1150,1150,0,50,["f1","f1","f1","s7","s1","s8","s1","s9","s2","s6","s1","s8","s5","s9","s8"]],"id":"2"}
    this.state = jsonResult[1];
    this.totalPayout = jsonResult[2];
    this.balancePayout = jsonResult[3];
    this.givenPayout = jsonResult[4];
    this.betSize = jsonResult[5];
    this.jackpotType = jsonResult[6];   //1 grand 2 major 3 minor /4 mini
    if(jsonResult.length > 7){
        for(let i=0;i<jsonResult[7].length;i++){
            this.restoreData.push(jsonResult[7][i]);
        }
    }
}

window.SlotJackpotGameDataModel = SlotJackpotGameDataModel;