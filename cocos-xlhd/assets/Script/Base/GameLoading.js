var GameGlobal = require("GameGlobal");
var GameManager = require("GameManager")
var FileManager = require("FileManager");
var SoundManager = require("SoundManager");
var UIManager = require("UIManager")

var Proto = require("Proto")
var networkQueue = require("NetworkQueue");
var GameProto = require("Game_XLHD")

var GameConfig = require("GameConfig")

var GameId = 11
var IsTest = false

cc.Class({
    extends:cc.Component,

    onLoad()
    {
        FileManager.Init();
        SoundManager.Init();

        Proto.initMsgModel();
        networkQueue.Init();
        GameProto.initMsgModel()
    },

    start(){
        cc.macro.ENABLE_WEBGL_ANTIALIAS = true

        let root = cc.find("Root", this.node.parent)
        UIManager.Init(root)
        UIManager.ShowLoading("载入中")

        this.parseUrl() 
    },

    parseUrl(){

        if (IsTest) {       
            GameConfig.saveLang("EN-US")
            GameConfig.saveUserID("1013009")
            let Cer = "eyJhbGciOiJBRVMiLCJ0eXAiOiJKV1QifQ==.eyJMb2dpblVzZXJJRCI6MTAxMzAwOSwiTG9naW5OYW1lIjoiZGVtby0xNTk3MzE5MTIwNDQ0IiwiTGFuZyI6IkVOLVVTIiwiVG9rZW5FeHBpcmVkVGltZSI6MTU5NzQwNTUyNCwiUm5kSUQiOiI4OTdkMzNlMy1lYjc2LTQ5Y2YtYmNjOC1mOWI0MjRmNDNmMTEiLCJTaWduS2V5IjoiZTk1NTg3YzgxYzcyN2NjZWQ1ODk3YTcxZWQwZDY3N2MiLCJUb2tlblZlcnNpb24iOjEwMDB9.Ob3fFSoNyH1NPXWFYDOOUe+bTDFIZ1dC3fPEXelRt9A+T/s1+7siu8S0oOir8NZj5HW7ojskC2l3lkITLvePKlhT5mlcBNYUjPJHeg60m/ty8TSQfeTJizscw8ExxUSXbYLrq+meRDcUtDbxnXzKiUR5ASjXoRaHcQySGnP9NDEMKqE6y0Bdx9Q4SLEtKQO503VOahua7JSIxX3L9fXVDDp++ExwE9MbkDGVGHifTp1eaigw+KH8Ur/5z5xT/ixJiVCtzs/eajNyfQ71WSNQIX9qpyUzjdJBHopWRysvdfjj7EHyL25bHKsds1oVA0UhgSQubS1sjUouDCKZqz0ieSMs3EM3B8r0atAtxheWFtA1FddrN/hFy8BDq21DV/xZddEgMLkkR1KxuyYPOne43QSJ1uf9qb9i+4N3Lfs25rcQpg+NLzTxmMIhFrmUz/Bt"
            GameConfig.saveCer(Cer)
            GameConfig.saveReferrer("0")
            GameConfig.saveConnectIP("ws://example.invalid/ws/12101")
        }
        else
        {
            var pathName = window.document.location.pathname;
            var dir = pathName.split('/')
            var lang = dir[dir.length - 2]
            GameConfig.saveLang(lang)
            GameGlobal.SetLanguage(GameConfig.getLang())

            let urlData = window.location.search.substring(1);
            if (urlData == null || urlData == ""){
                console.log("json error")
                UIManager.ShowLoading("资料错误", false)
                return
            }
            urlData = urlData.split('&nsukey=')[0]
            
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

            if (data.lang){
                GameConfig.saveLang(data.lang)
            }            

            GameConfig.saveUserID(data.playerID)
            GameConfig.saveCer(data.access_Token)
            if (window.location.href.indexOf("https://") != -1)
                GameConfig.saveConnectIP("wss://" + data.serverConnection)
            else
                GameConfig.saveConnectIP("ws://" + data.serverConnection)
        }

        GameGlobal.SetLanguage(GameConfig.getLang())

        UIManager.ShowLoading("载入中")

        this.beginConnect()
    },

    beginConnect()
    {
        let self = this

        let url = GameConfig.getConnectIP()

        UIManager.ShowLoading("正在连接服务器")

        GameManager.setGameId(GameId);

        GameManager.beginConnect(url, function(){

            UIManager.ShowLoading("登入中")

            GameManager.sendUserData(function(data){
            
                UIManager.ShowLoading("确认资料中")

                if (data.Code == 1){
                    UIManager.ShowLoading("载入中")
                    UIManager.HideMessageGameFull()

                    GameManager.loadGame(GameId);
                }
                else{
                    UIManager.ShowMessageGameFull(data.Message)
                }            
            })

        })
    }
});
