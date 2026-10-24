var GameGlobal = require("GameGlobal");
var GameManager = require("GameManager")
var FileManager = require("FileManager");
var SoundManager = require("SoundManager");
var UIManager = require("UIManager")

var Proto = require("Proto")
var networkQueue = require("NetworkQueue");
var GameProto = require("Game_DFDC")

var GameConfig = require("GameConfig")

var GameId = 25
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

        this.parseUrl() 
    },

    parseUrl:function(){
        if (IsTest) {       
            GameConfig.saveLang("EN-US")
            GameConfig.saveReferrer("0")
            
            if (GameConfig.getUserID() == null)
                GameConfig.saveUserID("1013573")
            
            let Cer = "eyJhbGciOiJBRVMiLCJ0eXAiOiJKV1QifQ==.eyJMb2dpblVzZXJJRCI6MTAxMzU3MywiTG9naW5OYW1lIjoiZGVtby0xNjAxODg4NzAwNzE1IiwiTWVyY2hhbnRJRCI6MTc1MDEzLCJMYW5nIjoiRU4tVVMiLCJUb2tlbkV4cGlyZWRUaW1lIjoxNjAyNzUyNzAxLCJSbmRJRCI6ImM1NDg3MTlhLWI0MzktNGU4OC1hN2M2LTdlZWYzNGU1YjIzNyIsIlNpZ25LZXkiOiI5ZTZkYzk3NjY2NWM0ODY1NmU5ZDNkOThmOGVkNzhhMSIsIlRva2VuVmVyc2lvbiI6MTAwMH0=.Ob3fFSoNyH1NPXWFYDOOUe+bTDFIZ1dC3fPEXelRt9A+T/s1+7siu8S0oOir8NZjBY+3gaAWxbpPKOkRi4ZECDvwa57brxJPwaMPmEs97KaYbME9qhEDBxc5H5Q+blgh3UvZzGP++UsoyM0CLmebM44ljFliNkOusCJOjR0dFfpW7xlW5B7PyaX0XqT8jOzFfTWXLbg/sD/YD2X6cG/Op2jCFajdZ3/pI0VFhYvnD+w2yImTa+GpfPiHxGBOv1C1fj7913ca1+79cqZjMlQ7febtxt8/omoWDtdFDqkTds4xe0G772qNXwRR8FlPjcJOEB08P41ysDh2iorR7wchl2BZqgTUXnTkGdKYeLguJvr/RnvtnO03YXQfh2NDfxtsv5MYegI60Sj8ueD/Y6Z1OQfRSd9+nAk72g4XtFh516XWorM6mN5UFXk3SjvL4JlXfMij76EeCLCYYiW13ScpSg=="
            if (GameConfig.getCer() == null)
                GameConfig.saveCer(Cer)
            
            if (GameConfig.getConnectIP() == null)
                GameConfig.saveConnectIP("wss://example.invalid/ws/102300410") //TEST
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

            if (GameConfig.getUserID() == null)
                GameConfig.saveUserID(data.playerID)
            if (GameConfig.getCer() == null)
                GameConfig.saveCer(data.access_Token)
            
            if (GameConfig.getConnectIP() == null){
                if (window.location.href.indexOf("https://") != -1)
                    GameConfig.saveConnectIP("wss://" + data.serverConnection)
                else
                    GameConfig.saveConnectIP("ws://" + data.serverConnection)
            }
        }

        GameGlobal.SetLanguage(GameConfig.getLang())

        UIManager.ShowLoading("载入中")

        this.beginConnect()
    },

    beginConnect:function()
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
