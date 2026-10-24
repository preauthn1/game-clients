var GameData = require("GameData");

var GameScene = {
    extends: cc.Component,

    Init(){
        this.GameSound = cc.find("Canvas/GameSound").getComponent("GameSound")

        // 動畫播放
        this.UIActionManager = cc.find("Canvas/ActionManager").getComponent("UIActionManager")
        this.UIActionManager.Init()
        this.UIActionManager.changeAction(1, null, -1)

        // 配合slot操作動畫
        this.UISlotActionManager = cc.find("Canvas/SlotActionManager").getComponent("UISlotActionManager")
        this.UISlotActionManager.Init()
        // this.UISlotActionManager.setData(1)
        // this.UISlotActionManager.do_start()

        this.startStopAccAction = 0
        this.stopAccAction = 0        
    },

    SetData(data){


    },

    //遊戲狀態S2C 0.下注状态 1.开奖状态 2.开奖动画 3.结算动画 4.等待游戏开始
    SetState(state){

    },

    // 遊戲結束
    GameEnd(){

    },

    // 初始狀態
    DoSpinInit(){
        this.startStopAccAction = 0
        this.stopAccAction = 0

        // 之後需實做各種情境
        this.GameSound.playBackGround(0)

        this.UIActionManager.changeAction(1, null, -1)
    },

    // 收到spin結果
    DoSpin(){
        this.UISlotActionManager.setData(1)
        this.UISlotActionManager.do_start()
    },    

    // 強制切到下一個action
    DoNextAction(){
        this.UISlotActionManager.doNextAction()
    },

    // 開始停止
    DoStartStopOne(index){
        this.UISlotActionManager.do_startStop(index)

        this.startStopAccAction += 1
        this.UISlotActionManager.do_startStopAcc(this.startStopAccAction)
    },

    // 停止
    DoStopOne(index){
        this.UISlotActionManager.do_stop(index)

        this.stopAccAction += 1
        this.UISlotActionManager.do_stopAcc(this.stopAccAction)
    },

    // 全部停止
    ShowResult(callback){
        // 之後需實做各種情境
        
        if (GameData.GetWinMoney() > 0){
            this.UIActionManager.changeAction(4, callback, -1)
        }
        else{
            this.UIActionManager.changeAction(2, callback, -1)
        }
    },
};

module.exports = GameScene