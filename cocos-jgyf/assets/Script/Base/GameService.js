var G = require("Global")
var NetworkQueue = require("NetworkQueue");
var BClass = require("BClass")
var Game = require("Game")
var GameRoom = require("GameRoom")
var GameConfig = require("GameConfig")
var GameInfo = require("GameInfo")
var GameManager = require("GameManager")

var CallbackExit = null
var tableNoChange = null

var GameService = {
    //獲取遊戲名稱
    GetGamePName() {
        return GameInfo.GetGamePName(GameManager.getGameId())
    },

    // 用户入桌消息
    RegUserEnterMsg(callfun){
        let self = this
        NetworkQueue.RegMsgHook(BClass.Game, Game.UserEnterID, function(data){
            callfun(data)
            if (data.User.UserID == GameConfig.getUserID() && data.User.StateValue == 2) {
                self.ReadyGame()
            }
        } , this.GetGamePName())
    },
    
    // 用户状态改变消息
    RegUserStateChangeMsg(callfun){
        NetworkQueue.RegMsgHook(BClass.Game, Game.UserStateChangeID, function(data){
            if (data.User.UserID == GameConfig.getUserID()) {
                if (tableNoChange != null) {
                    if (data.User.TableNo >= 0) {
                        tableNoChange(data.User.TableNo)
                    }
                }
    
                // 设置全局用户状态值
                //G.User.SetUserState(data.User)
    
                if (data.User.StateValue > 3) {
                    //G.IsGameing(true)
                }
                else{
                    //G.IsGameing(false)
                }
            }
            callfun(data);
        } , this.GetGamePName())
    },
    
    // 游戏开始消息
    RegGameStartMsg(callfun){
        NetworkQueue.RegMsgHook(BClass.Game, Game.GameStartID, function(data){
            callfun(data)
        } , this.GetGamePName())
    },
    
    // 游戏结束消息
    RegGameEndMsg(callfun){
        NetworkQueue.RegMsgHook(BClass.Game, Game.GameEndID, function(data){
            callfun(data);
        } , this.GetGamePName())
    },
    
    // 用户离开消息
    RegUserLeaveMsg(callfun){
        NetworkQueue.RegMsgHook(BClass.Game, Game.UserLeaveID, function(data){
            callfun(data);
         } , this.GetGamePName())
    },
    
    // 截拦当前桌所有玩家动画完成消息
    RegAllUserActionCommitedMsg(callfun){
        NetworkQueue.RegMsgHook(BClass.Game, Game.AllUserActionCommitID, function(data){
            callfun(data.ActionName);
        } , this.GetGamePName())
    },
    
    // 旁观用户消息通知
    RegLookOnUserNotify(callfun){
        NetworkQueue.RegMsgHook(BClass.Game, Game.LookOnUserNotifyID, function(data){
            callfun(data)
        } , this.GetGamePName())
    },
    
    // 遊戲倒數通知
    RegGameBeginCountDownMsg(callfun){
        NetworkQueue.RegMsgHook(BClass.Game, Game.GameBeginCountDownID, function(data){
            callfun(data);
        } , this.GetGamePName())
    },
    
    // 遊戲停止倒數通知
    RegGameBeginCountDownStopMsg(callfun){
        NetworkQueue.RegMsgHook(BClass.Game, Game.GameBeginCountDownStopID, function(data){
            callfun(data);
        } , this.GetGamePName())
    },
    
    SetCallbackExit(callback){
        CallbackExit = callback
    },
    
    GetCallbackExit(){
        return CallbackExit
    },
    
    // 发送客户端动作完成消息
    SendUserActionCommit(data, isLookOn){
        isLookOn = G.CaseWhen(isLookOn == null, false, isLookOn)
        if (!isLookOn) {
            NetworkQueue.SendMsg(BClass.Game, Game.UserActionCommitID, { ActionName : data })
        }
        else{

        }
    },
    
    // 发送准备消息
    ReadyGame(){
        NetworkQueue.SendMsg(BClass.GameRoom, GameRoom.GameReadyID, null)
    },
    
    // 发送换桌消息
    ChangeDesk(){
        NetworkQueue.SendMsg(BClass.GameRoom, GameRoom.UserQueueID, null)
    },

    // 注册桌子号改变事件
    RegTableNoChange(callfun){
        tableNoChange = callfun
    },

    RemoveTableNoChange(){
        tableNoChange = null
    }
    
};

module.exports = GameService;