var GameManager = require("GameManager")
var FileManager = require("FileManager");
var SoundManager = require("SoundManager");
var UIManager = require("UIManager")

var Proto = require("Proto")
var networkQueue = require("NetworkQueue");
var GameProto = require("Game_BJL")

var GameConfig = require("GameConfig")

var GameId = 13
var IsTest = false

cc.Class({
    extends: cc.Component,

    onLoad: function ()
    {
        FileManager.Init();
        SoundManager.Init();

        Proto.initMsgModel();
        networkQueue.Init();
        GameProto.initMsgModel()
    },

    start: function (){

        cc.macro.ENABLE_WEBGL_ANTIALIAS = true

        let root = cc.find("Root", this.node.parent)
        UIManager.Init(root)
        UIManager.ShowLoading("载入中...")

        this.parseUrl() 
    },

    parseUrl:function(){
        if (IsTest) {       
            GameConfig.saveUserID("1000087")
            let Cer = "eyJhbGciOiJBRVMiLCJ0eXAiOiJKV1QifQ==.eyJMb2dpblVzZXJJRCI6MTAwMDA4NywiTG9naW5OYW1lIjoiYWFhYWFhYWEiLCJMYW5nIjoiWkgtQ04iLCJUb2tlbkV4cGlyZWRUaW1lIjoxNTkyMTk2OTk2LCJSbmRJRCI6IjNjMzI0MmEyLTIwZjYtNDA2NC1hMjU2LWFmMDc1N2UxMzI4ZiIsIlNpZ25LZXkiOiJlZGFmMDJjMWQyZTEwMmVmMmU2MjU1NjBmYzEzYWM3MiIsIlRva2VuVmVyc2lvbiI6MTAwMH0=.Ob3fFSoNyH1NPXWFYDOOUe+bTDFIZ1dC3fPEXelRt9A+T/s1+7siu8S0oOir8NZjjBhN0XqnhbkSKE6oVZO3Soxafb4YoyyNK54hz7wJJaOMlghQ6AtyqPSgCaYAdPSXXHAnxwXwTpJ7EQ143pOrkyAufM4hyv3KHiLm3qob8wMavMwos1FHkBK1Zqta/bjhuHVrIidLyu9goXlIjdmCHNO7bU+OW389ld5AnVu3gGo8zZUMYvzcTTvfDRzi2JVw8U6Hry4Hz1uQQ0O7X9KMxySIzDovvSmP8U4lt1m5gG0n5PKGsVfvIyGpDcEb7wYNcJZxDCy7DBLHdZGu5+lTwyTtmI4t1n2USuE4LKFjueQnLhUCKakbwP7LGdVplahW3gxou0wB4T6u3DvaGukywQT78kaqra1pxEQLV/eDkOI="
            GameConfig.saveCer(Cer)
            GameConfig.saveReferrer("0")
            GameConfig.saveConnectIP("ws://example.invalid/ws/12201") //TEST
        }
        else
        {
            let urlData = window.location.search.substring(1);
            if (urlData == null || urlData == ""){
                console.log("json error")
                UIManager.ShowLoading("资料错误", false)
                return
            }

            let datas = JSON.parse(window.atob(urlData))
            if (datas == null){
                console.log("json error")
                UIManager.ShowLoading("资料错误", false)
                return
            }

            let data = datas.data;
            if (data.playerID == null || data.playerID == ""){
                console.log("playerID error")
                UIManager.ShowLoading("玩家资料错误", false)
                return
            }

            if (data.access_Token == null || data.access_Token == ""){
                console.log("access_Token error")
                UIManager.ShowLoading("玩家验证资料错误", false)
                return
            }
            
            if (data.serverConnection == null || data.serverConnection == ""){
                console.log("serverConnection error")
                UIManager.ShowLoading("游戏资讯错误", false)
                return
            }        
            
            if (data.referrer){
                GameConfig.saveReferrer(data.referrer)
            }
            else{
                console.log("data.referrer null")
                GameConfig.saveReferrer("0")
            }

            if (data.log == 0){
                networkQueue.ShowLog(false)
                console.log("hide log")
            }
            else{
                networkQueue.ShowLog(true)
                console.log("show log")
            }
			
            GameConfig.saveUserID(data.playerID)
            GameConfig.saveCer(data.access_Token)
            GameConfig.saveConnectIP("ws://" + data.serverConnection)           
        }

        this.beginConnect()
    },

    beginConnect:function()
    {
        let self = this

        let url = GameConfig.getConnectIP()

        UIManager.ShowLoading("正在连接服务器...")

        GameManager.setGameId(GameId);

        GameManager.beginConnect(url, function(){

            UIManager.ShowLoading("登入中...")

            GameManager.sendUserData(function(data){
            
                UIManager.ShowLoading("确认资料中...")

                if (data.Code == 1){
                    UIManager.ShowLoading("载入中")

                    GameManager.loadGame(GameId);
                }
                else{
                    UIManager.ShowLoading("资料错误", false)
                }
            
            })

        })
    }
});
