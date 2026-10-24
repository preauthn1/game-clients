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
        let settingData = {}

        // 輪軸帶
        settingData.ReelStrips = []
        for(let i=0; i < 3; ++i){
            let data = {}
            data.Reel = i +1
            data.Symbols = []
            for(let index = 0; index < 21; ++index){
                data.Symbols.push(GameG.RandomInt(0, 7).toString())
            }
            settingData.ReelStrips.push(data)
        }

        // 轉數
        settingData.counter = {}
        settingData.counter.bb = 10
        settingData.counter.rb = 18
        settingData.counter.total = 99

        this.bb = settingData.counter.bb
        this.rb = settingData.counter.rb
        this.total = settingData.counter.total
        
        settingData.counter.data = []
        for (let i = 0; i < 10; ++i){
            let bb = {}
            bb.type = GameG.RandomInt(0, 3)
            bb.value = 1
            settingData.counter.data.push(bb)
        }

        // 遊戲設定
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

        // 盤面結果
        data.ReelStrip = []
        data.StopIndex = []
        for(let i = 1; i <= 3; ++i){
            let reelStrip = {}
            reelStrip.Reel = i
            reelStrip.Symbols = []
            for(let index = 0; index < 3; ++index){
                reelStrip.Symbols.push(GameG.RandomInt(0, 7).toString())
            }
            data.ReelStrip.push(reelStrip)
            data.StopIndex.push(GameG.RandomInt(0, 21))
        }

        // 贏的金額
        data.WinMoney = receiveMsg.WinMoney

        // 連線
        let PayAllDetail = []
        
        let newObject = function(reel, row){
            let obj = {}
            obj.Reel = reel
            obj.Row = row
            return obj
        }
        let obj = {}
        obj.SymbolIDList = []
        obj.SymbolIDList.push(newObject(1, 2))
        obj.SymbolIDList.push(newObject(2, 2))
        obj.SymbolIDList.push(newObject(3, 2))
        PayAllDetail.push(obj)

        obj = {}
        obj.SymbolIDList = []
        obj.SymbolIDList.push(newObject(1, 3))
        PayAllDetail.push(obj)        

        data.PayAllDetail = PayAllDetail

        // 紀錄
        this.total += 1
        data.Counter = {}
        data.Counter.type = GameG.RandomInt(0, 3)
        data.Counter.value = 1
        data.Counter.rb = this.rb
        data.Counter.bb =  this.bb
        data.Counter.total = this.total
        
        GameLayer.SetGameResult(data)
    },
};

module.exports = GameModel