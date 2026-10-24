var BClass = require("BClass")
var Common = require("Common")
var GameRoom = require("GameRoom")

var networkQueue = require("NetworkQueue");
var Websocket = require("Websocket");
var wb;

var FileManager = require("FileManager");
var SoundManager = require("SoundManager");
var UIManager = require("UIManager");

// 是否在遊戲中
var gameStart = false
// 
var gameId = false
// 遊戲名稱
var gamePName = "infc";

var isSendUserData = false

var start = null

var GameManager = {

    beginConnect: function(url = null, connectCB = null)
    {
        this.connectCB = connectCB

        if (url == null)
        {
            url = "ws://0.0.0.0:13101/ws";
        }


        wb = new Websocket("Game", url, GameManager.onConnect);
    },

    closeConnect: function(){
        if (wb != null)
        {
            wb.close();
            wb = null
        }

        networkQueue.removeWebsocket("Game")
    },

    // 連上遊戲
    onConnect: function()
    {
        networkQueue.RemoveMsgHookByGroup(gamePName);

        // 心跳
        networkQueue.RegMsgHookOnce(BClass.Common, Common.HeartBeatConfigID, 
            function(data)
            {
                if (wb != null)
                    wb.setHeartbeat(data.BeatInterval,  data.ConnLoseTimeSpan);

                if (isSendUserData == true){
                    isSendUserData = false
                    GameManager.doSendUserData()
                }
            }
        , gamePName);
        networkQueue.SendGameMsg(BClass.Common, Common.RequestHeartBeatConfigID, null);

        // 连线中斷線重連,重新載入場景
        if (gameStart == true)
        {            
            GameManager.reloadGame();

            return;
        }

        gameStart = true;

        if (GameManager.connectCB != null){
            GameManager.connectCB()
            GameManager.connectCB = null
        }
    },

    sendUserData(callback)
    {
        this.callback = callback

        isSendUserData = true
    },

    doSendUserData(){
        var GameConfig = require("GameConfig")
        let param = {}
        param.Cer =  GameConfig.getCer();
        param.HDCode = GameConfig.getHDCode();
        param.HDType = 1
        param.UserID = GameConfig.getUserID();
        
        networkQueue.SendGameMsg(BClass.GameRoom, GameRoom.LoginRoomID, param)
        
        networkQueue.RegMsgHookOnce(BClass.GameRoom, GameRoom.LoginRoomRetID, 
            function(data)
            {
                if (GameManager.callback != null)
                    GameManager.callback(data)
            }
        , gamePName)        
    },

    loadGame: function()
    {
        UIManager.ShowLoading("游戏载入中")

        networkQueue.Pause()

        gameId = true

        console.log("load scene " + this.GetGamePName())

        start = new Date().getTime();
        
        UIManager.ShowLoadingBar(true)
        cc.director.preloadScene("Game", this.onProgress.bind(this), function(){
            cc.director.loadScene("Game", function(){
                UIManager.ShowLoadingBar(false)
            });  
        });   
    },
    
    onProgress :function(completedCount, totalCount, item){
        let value = completedCount/totalCount;
        UIManager.SetLoadingBarProgress(value);
    },

    reloadGame: function()
    {
        // 游戏中
        if (gameId == false){
            GameManager.sendUserData(null)
            return
        }

        console.log("reloadScene scene " + gameId + " " + this.GetGamePName(gameId))

        GameManager.sendUserData(function(data){
            if (data.Code == 1){
                UIManager.HideMessageGameFull()
                GameManager.loadGame(gameId);
            }
            else{
                UIManager.ShowMessageGameFull(data.Message)
            }
        })
    },

    clear: function()
    {
        networkQueue.RemoveMsgHookByGroup(gamePName);
        networkQueue.RemoveGameMsgHook();
        networkQueue.ClearPauseData()    
    },

    clearGameStart: function()
    {
        gameStart = false;
        networkQueue.Resume()
        FileManager.Clear(true, false);
    }, 

    leaveGame: function(ChangeScene = false)
    {
        if (wb != null)
        {
            wb.close();
            wb = null
        }

        gameStart = false;

        networkQueue.RemoveMsgHookByGroup(gamePName);
        networkQueue.RemoveGameMsgHook();

        FileManager.Clear(true);
        SoundManager.CloseSound();
        
        // 釋放記憶體
        cc.sys.garbageCollect();

        if (ChangeScene == true)
            cc.director.loadScene("Main");
    },

    GetGamePName: function()
    {
        return gamePName;
    },

    isGameStart : function()
    {
        return gameStart;
    },    

    calLoadTime()
    {
        if (start){
            var end = new Date().getTime();
            var cost = (end - start) / 1000
            cost = Math.round(cost)
            start = null
            return cost
        }
        else
        {
            return 0
        }
    },
};

module.exports = GameManager;