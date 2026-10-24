var BClass = require("BClass")
var Common = require("Common")
var GameRoom = require("GameRoom")

var networkQueue = require("NetworkQueue");
var Websocket = require("Websocket");
var wb;

var FileManager = require("FileManager");
var SoundManager = require("SoundManager");
var UIManager = require("UIManager");

var GameInfo = require("GameInfo")

// 是否在遊戲中
var gameStart = false
// 遊戲編號
var gameId = 0;
// 遊戲名稱
var gamePName = null;

var isSendUserData = false

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

    loadGame: function(game_Id)
    {
        UIManager.ShowLoading("游戏载入中...")

        GameManager.setGameId(game_Id)

        networkQueue.Pause()

        console.log("load scene " + gameId + " " + GameInfo.GetGamePName(gameId))

        cc.director.loadScene("Game", function(){
        

        });    
    },

    reloadGame: function()
    {
        // 游戏中
        if (gameId == 0){
            GameManager.sendUserData(null)
            return
        }

        console.log("reloadScene scene " + gameId + " " + GameInfo.GetGamePName(gameId))

        GameManager.sendUserData(function(data){
            if (data.Code == 1){
                GameManager.loadGame(gameId);
            }
            else{
                console.log("资料错误")
            }
        })
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

    getGameId: function()
    {
        return gameId;
    },

    setGameId: function(game_Id)
    {
        gameId = game_Id;

        gamePName = GameInfo.GetGamePName(GameManager.getGameId())
    },

    isGameStart : function()
    {
        return gameStart;
    },    
};

module.exports = GameManager;