function SlotJackpotValueDataModel() {
    this.grandJp = 0;
    this.majorJp = 0;
    this.minorJp = 0;
    this.miniJp = 0;
}

SlotJackpotValueDataModel.prototype.init = function (jsonResult) {
    //[3,[[2499000,1,"35"],[499100,2,"35"],100,50]]
    console.log(jsonResult[0]);
    if (jsonResult[0] == 3) {
        this.grandJp = jsonResult[1][0][0];
        this.majorJp = jsonResult[1][1][0];
        this.minorJp = jsonResult[1][2];
        this.miniJp = jsonResult[1][3];
    }

    // this.type = jsonResult[1][1];
    // this.amount = jsonResult[1][0];
}

window.SlotJackpotValueDataModel = SlotJackpotValueDataModel;