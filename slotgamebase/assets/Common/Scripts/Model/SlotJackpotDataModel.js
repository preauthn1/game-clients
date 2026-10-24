function SlotJackpotDataModel(){
    this.jackpotType = [];
    this.multiply = [];
    this.payOut = [];
    this.totalAmount = 0;
}

SlotJackpotDataModel.prototype.init= function(jsonResult){
    //{"actionId":"9","eventData":[[5,-1],[[100001,10000],[8,800],[10,1000]],null],"id":"2"}
    //{"actionId":"9","eventData":[[5,-1],[[[1,0,20],[-1,50,5000],[-1,25,2500]],[],[1,0,7520],0],null],"id":"2"}
    var dataArr = jsonResult[1][0];
    for(var i=0;i<dataArr.length;i++){
        this.multiply.push(dataArr[i][1]);
        this.payOut.push(dataArr[i][2]);
    }
    this.totalAmount = jsonResult[1][2][2];
}

window.SlotJackpotDataModel = SlotJackpotDataModel;