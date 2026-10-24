
function SlotChangeModeDataModel(){
    this.mode = -1;
    this.freespinNumber = 0;
    this.freespinMultiplier = 0
}

SlotChangeModeDataModel.prototype.init= function(jsonResult){
    this.mode = jsonResult[0];
    //{"actionId":"2","eventData":[5],"id":"2"} //bonus mode
    if(jsonResult[1] != null){
        this.freespinNumber = jsonResult[1][0];
        this.freespinMultiplier = jsonResult[1][1];
    }
}

window.SlotChangeModeDataModel = SlotChangeModeDataModel;