var config = require('MyBaseConfig');
cc.Class({
    extends: cc.Component,

    properties: {
        
        controller:cc.Node,
        id:"0",
        disconnect:cc.Node,
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {
        this.controller = this.controller.getComponent("MyBaseControllerMulti");
    },

    // update (dt) {},
    onReceivePlayerUpdate(name,credit) {
        this.controller.onReceivePlayerInfoUpdate(name, credit);
    },
    onReceivePlayerJoin(id){
        this.id = id;
        this.disconnect.active = false;
    },
    onReceivePlayerLeave(){
        this.id = 0;
        this.disconnect.active = true;
    },

    processGameIncomingMessage(jsonResult) {
        console.log(jsonResult);
        // var actionId = jsonResult.actionId;
        // var roundId = jsonResult.eventData[0][0];
        // console.log("actionId " +actionId+" / " +roundId);
        // if (actionId == "1") {
        //     this.onReceiveStartGameData(jsonResult.eventData);
        // } else if (actionId == "2") {
        //     this.onReceiveChangeMode(jsonResult.eventData);
        // } else if (actionId == "9") {
        //     if (roundId == "1") {
        //         this.onReceiveSpinResult(jsonResult.eventData[4]);
        //     } else if (roundId == "2") {
        //         this.onReceiveFreeInfo(jsonResult.eventData);
        //     } else if (roundId == "4") {
        //         this.onReceiveBonusInfo(jsonResult.eventData);
        //     } 
        // } 
        this.onReceiveSpinResult(jsonResult);
    },
    onReceiveStartGameData(jsonResult) {
        var data = config.StartDataModel(jsonResult);
        this.controller.onReceiveStartGameData(data);
    },
    onReceiveChangeMode(jsonResult) {
        this.controller.onReceiveChangeMode(jsonResult);
    },
    onReceiveSpinResult(jsonResult) {
        var data = config.SpinDataModel(jsonResult);
        this.controller.onReceiveSpinResult(data);
    },
    onReceiveFreeInfo(jsonResult) {
        // console.log(jsonResult) ;
        var data = new SlotFreeSpinDataModel();
        data.init(jsonResult);
        this.controller.onReceiveFreeSpinInfo(data);
    },
    onReceiveBonusInfo(jsonResult) {
        var data = new SlotBonusDataModel();
        data.init(jsonResult);
        this.controller.onReceiveBonusInfo(data);
    },
    onReceiveJackpotInfo(jsonResult) {
        var data = new SlotJackpotDataModel();
        data.init(jsonResult);
        this.controller.onReceiveJackpotInfo(data);
    },
});
