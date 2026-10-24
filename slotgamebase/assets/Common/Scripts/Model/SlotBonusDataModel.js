function SlotBonusDataModel(){
    this.amount = 0;
}

SlotBonusDataModel.prototype.init= function(jsonResult){
    this.amount = jsonResult[1][0];
}

window.SlotBonusDataModel = SlotBonusDataModel;