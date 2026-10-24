var GameManager = require("GameManager")
var FileManager = require("FileManager");
var SoundManager = require("SoundManager");
var UIManager = require("UIManager")

var Proto = require("Proto")
var networkQueue = require("NetworkQueue");
var GameProto = require("Game_BRNN")

var GameConfig = require("GameConfig")

var GameId = 19
var IsTest = true

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
            GameConfig.saveUserID("1012472")
            let Cer = "eyJhbGciOiJBRVMiLCJ0eXAiOiJKV1QifQ==.eyJMb2dpblVzZXJJRCI6MTAxMjQ3MiwiTG9naW5OYW1lIjoiZGZzZGZzZGZmc2RkZnNzZGYiLCJMYW5nIjoiWkgtQ04iLCJUb2tlbkV4cGlyZWRUaW1lIjoxNTk1NTc3Mjc3LCJSbmRJRCI6IjcyNDY4Y2Y3LTg2ZmUtNGQxMi05YjZjLWNiNDJkNjYxNzY2ZCIsIlNpZ25LZXkiOiI4ODE3NGNlNzBjODY3MWQ1MTI4NjcyOWVjMTEyZDA2MiIsIlRva2VuVmVyc2lvbiI6MTAwMH0=.Ob3fFSoNyH1NPXWFYDOOUe+bTDFIZ1dC3fPEXelRt9A+T/s1+7siu8S0oOir8NZjChoxh1Hzjd1wJQ1KXRaPhDDFmXYEC5+OBhJaHK95mKUkZLZ0fzFNgOraeeRCualTBANZRxsj5XpuIsFqqxYaS8C6BBB3/m9huUU0NaAuN7imly50Rc8+QxEGCuY2/+xPrPgcP3/CRa5nrOBJKkkRonrlqg4tE08dwNvaiQsIZ8k+w+fipRKN3lJh4moIThmpsC8B9fE6UBp4+NqD1ep4bad3q3whwVAymWP0A0wwP5KTVoU8Maai+KT1A694FE7B8vWplog7C+e4SBlf9cdIDV/aZzVCR//KKcPqPKantLRnCxXqR69TvFqWrQHR1CnQ3okCSvpaj+ctjCSjVC3A8lC4tLpGn/3Cv59febg0OpdTb1ZasiphfQWa/dKO7/tW"
            GameConfig.saveCer(Cer)
            GameConfig.saveReferrer("0")
            GameConfig.saveConnectIP("ws://example.invalid/ws/12601") //LOCAL
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
