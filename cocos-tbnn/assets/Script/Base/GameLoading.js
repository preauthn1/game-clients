var GameManager = require("GameManager")
var FileManager = require("FileManager");
var SoundManager = require("SoundManager");
var UIManager = require("UIManager")

var Proto = require("Proto")
var networkQueue = require("NetworkQueue");
var GameProto = require("Game_TBNN")

var GameConfig = require("GameConfig")

var GameId = 7
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
           GameConfig.saveUserID("1000144")
            let Cer = "eyJhbGciOiJBRVMiLCJ0eXAiOiJKV1QifQ==.eyJMb2dpblVzZXJJRCI6MTAwMDE0NCwiTG9naW5OYW1lIjoid3d3d3d3d3d3d3d3d3d3d3d3IiwiTGFuZyI6IlpILUNOIiwiVG9rZW5FeHBpcmVkVGltZSI6MTU4NDY4NjYzMiwiUm5kSUQiOiI4Njg2ZGM0Ny01NTlmLTQ5OTYtOTlmNS03ZGQ2NDVjZGZmMjEiLCJTaWduS2V5IjoiZDUwYTY4YjQ0MzgzMzM2ZTk1M2U3NTM4NjBjNGEwMWMiLCJUb2tlblZlcnNpb24iOjF9.Ob3fFSoNyH1NPXWFYDOOUe+bTDFIZ1dC3fPEXelRt9A+T/s1+7siu8S0oOir8NZjW/xS0Th/kGFnrdQINex8mYTmyvtx4BKmuwtg21aX0Caa+lbGZabOVQh1+ip9EUSHfInKuLIqAyxMaJCb99ppmFMzLETLZ4EZ115WmHnnYZVR30bbW2iKGz67HFhU+HVP03VOahua7JSIxX3L9fXVDB8oSOEFURZQ2/uqQ6oH7Sxhu+HHek+cEXq970NkkIKFZD4hB6pt6Vm5atUaZtn7R9+XRz2SKp+IVZegtsIuDuYWbo8Suw2Ghqr+Gjy5DDQ2OMGNZuGlw6fVfMUxSFHAOu3rz1ZigaSUxtdeXh+9Cpeo3R/kK6Qpak1kZgsxTxgaPG2HfRpSqQw0+YzfkpuGQqsDMLE7zlxcllTIeWHHGyI="
            GameConfig.saveCer(Cer)
            GameConfig.saveReferrer("0")
            GameConfig.saveConnectIP("ws://0.0.0.0:13101/ws") //LOCAL
            GameConfig.saveConnectIP("ws://example.invalid:10080/ws/11301") //TEST
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
                console.log("data.referrer",data.referrer)
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
