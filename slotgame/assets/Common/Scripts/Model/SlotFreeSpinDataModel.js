
function SlotFreeSpinDataModel(){
    this.selectionType = -1;
    this.selectionNum = -1;
    this.selectionNum2 = -1;
}

SlotFreeSpinDataModel.prototype.init= function(jsonResult){
    this.selectionType = jsonResult[1][0];
    this.selectionNum = jsonResult[1][1];
    this.selectionNum2 = jsonResult[1][2];
}

window.SlotFreeSpinDataModel = SlotFreeSpinDataModel;