var G = require( "Global")
var GameG = require( "GameGlobal")
var GameLayer = null

let networkQueue = require("NetworkQueue");
let Game_DFDC = require("Game_DFDC")
let BClass = require("BClass")
let Game = require("Game")
let GameRoom = require("GameRoom")

var SymbolIcon = ["B7", "bar", "gift", "kendama", "pine", "princess", "ball"]

var groupName = G.GetGamePName()

var GameModel = {
	extends: cc.Component,

	Init(){	
		GameLayer = require("GameLayer")
        
        let self = this
        
		//用户进入桌子消息
		networkQueue.RegMsgHook(BClass.Game, Game.UserEnterID, function(receiveMsg){
            self.SendGameReady()
			GameLayer.SetUserData(receiveMsg.User)
        }, groupName);

        //用户状态改变
        networkQueue.RegMsgHook(BClass.Game, Game.UserStateChangeID, function(receiveMsg)
        {
            GameLayer.SetUserStateChange(receiveMsg.User)
        }, groupName),

        //用户离开
        networkQueue.RegMsgHook(BClass.Game, Game.UserLeaveID, function(receiveMsg)
        {

        }, groupName),

        //游戏结束
        networkQueue.RegMsgHook(BClass.Game, Game.GameEndID, function(receiveMsg)
        {
            GameLayer.GameEnd()
        }, groupName),

        //多財多福黃金符號
        networkQueue.RegMsgHook(BClass.Game, Game_DFDC.DFDCGoldenSymbolID, function(receiveMsg)
        {
            GameLayer.SetGoldenDetail(receiveMsg)
        } , groupName);
        
        //設定
        networkQueue.RegMsgHook(BClass.Game, Game_DFDC.DFDCSettingID, function(receiveMsg){
            self.SetSetting(receiveMsg)
        } , groupName);
        
        //遊戲狀態 0.下注状态 1.开奖状态 2.开奖动画 3.结算动画 4.等待游戏开始
       networkQueue.RegMsgHook(BClass.Game, Game_DFDC.DFDCStateID, function(receiveMsg)
       {
           GameLayer.SetState(receiveMsg.State)
       } , groupName);

        //下注結果
        networkQueue.RegMsgHook(BClass.Game, Game_DFDC.DFDCBetRetID, function(receiveMsg){            
            self.BetRet(receiveMsg)
		} , groupName);

		networkQueue.RegMsgHook(BClass.Game, Game_DFDC.DFDCGameResult, function(receiveMsg){
            self.GameResult(receiveMsg)
        } , groupName);        

	},

	SendGameReady(){
        networkQueue.SendMsg(BClass.GameRoom, GameRoom.GameReadyID, null)
	},

	SendStartSpin(Money, GoldenSymbol){
        let param = {}
        param.Money = Money
        param.GoldenSymbol = GoldenSymbol
			
        networkQueue.SendMsg(BClass.Game, Game_DFDC.DFDCGameStartID, param)
    },

    SetSetting(receiveMsg){
        let reelSetting = []
        for(let i=0; i < 3; ++i){
            let data = {}
            data.ReelSetting = {}
            data.RowCount = 3
            data.Symbol = SymbolIcon
            reelSetting.push(data)
        }
        
        GameLayer.UISlot.SetReelSetting(reelSetting)

        let counter = {}
        counter.bb = 10
        counter.rb = 18
        counter.total = 99

        this.bb = counter.bb
        this.rb = counter.rb
        this.total = counter.total

        counter.data = []

        for (let i = 0; i < 10; ++i){
            let bb = {}
            bb.type = GameG.RandomInt(0, 3)
            bb.value = 1
            counter.data.push(bb)
        }

        GameLayer.UICounter.setData(counter)

        let settingData = {}
        settingData.once = 3
        settingData.times = 0
        settingData.ratio = 50
        settingData.no = 23
        settingData.BetCount = receiveMsg.BetCount
        GameLayer.SetSetting(settingData)
    },

    BetRet(receiveMsg){
        if (receiveMsg.Ret == 0) {
            
        }
        else if (receiveMsg.Ret == -1) {
            GameLayer.showMessage("金币不足")
        }
        else if (receiveMsg.Ret == -2) {
            GameLayer.showMessage("下注类型错误")
        }
        else if (receiveMsg.Ret == -3) {
            GameLayer.showMessage("庄家不能下注")
        }
        else if (receiveMsg.Ret == -4) {
            GameLayer.showMessage("总注数超过上限")
        }
        else if (receiveMsg.Ret == -5) {
            GameLayer.showMessage("非下注階段")
        }
        else if (receiveMsg.Ret == -6) {
            let MinCarryingScore = 20
            GameLayer.ShowMessage(GameG.GetLocalizedString("前往充值后再来").replace("####", MinCarryingScore))
        }
        else if (receiveMsg.Ret == -7) {
            GameLayer.showMessage("非正常下注额")
        }
            
        GameLayer.SetBetRet(receiveMsg)
    },
    
    GameResult(receiveMsg){

        let data = {}
        // data.result = []

        let symbel = []
        for(let i = 0; i < receiveMsg.ReelSetting.length; ++i){
            let data1 = receiveMsg.ReelSetting[i]
            if (symbel[data1.SymbolGroup[0].SymbolName] == null){
                symbel[data1.SymbolGroup[0].SymbolName] = data1.SymbolGroup[0].SymbolName
            }
        }

        let acc = 0
        for(let i in symbel){
            if (symbel[i] == "w1" || symbel[i] == "s1"){
                symbel[i] = "ball"
            }
            else{
                if (acc >= SymbolIcon.length){
                    symbel[i] = SymbolIcon[SymbolIcon.length - 1]
                }else{
                    symbel[i] = SymbolIcon[acc]
                }
                acc++
            }
        }      

        // 盤面結果
        data.ReelSetting = []
        for(let i = 0; i < receiveMsg.ReelSetting.length; ++i){
            let data1 = receiveMsg.ReelSetting[i]

            if (data.ReelSetting[data1.RealID - 1] == null){
                data.ReelSetting[data1.RealID - 1] = []
            }

            data1.SymbolGroup[0].SymbolNameS = data1.SymbolGroup[0].SymbolName
            data1.SymbolGroup[0].SymbolName = symbel[data1.SymbolGroup[0].SymbolName]
            data.ReelSetting[data1.RealID - 1][data1.RowIndex - 1] = data1.SymbolGroup[0]
        }

        // 贏的金額
        data.win = receiveMsg.WinMoney

        // 連線
        data.PayAllDetail = receiveMsg.PayAllGroup[0].PayAllDetail

        GameLayer.SetGameResult(data)
        
        let aa = {}
        aa.type = GameG.RandomInt(0, 3)
        aa.value = 1

        this.total += 1
        aa.rb = this.rb
        aa.bb =  this.bb
        aa.total = this.total
        
        GameLayer.UICounter.addOneData(aa)
    },
};

module.exports = GameModel