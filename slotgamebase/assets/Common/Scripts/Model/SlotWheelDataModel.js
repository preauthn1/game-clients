
function SlotWheelDataModel(){
    this.selectionType = -1;
    this.selectionNum = -1;
}

SlotWheelDataModel.prototype.init= function(jsonResult){
    this.selectionType = jsonResult[1][0];
    this.selectionNum = jsonResult[1][1];
}

window.SlotWheelDataModel = SlotWheelDataModel;
