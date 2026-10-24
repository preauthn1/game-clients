function SlotJackpotValueDataModel(){
    this.type = 0;
    this.amount = 0;
}

SlotJackpotValueDataModel.prototype.init= function(jsonResult){
    //{"actionId":"13","eventData":[1,[100,1]],"id":"2"}
    this.type = jsonResult[1][1];
    this.amount = jsonResult[1][0];
}

window.SlotJackpotValueDataModel = SlotJackpotValueDataModel;