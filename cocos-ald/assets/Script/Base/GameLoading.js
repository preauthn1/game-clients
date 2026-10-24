var GameManager = require("GameManager")
var FileManager = require("FileManager");
var SoundManager = require("SoundManager");
var UIManager = require("UIManager")

var Proto = require("Proto")
var networkQueue = require("NetworkQueue");
var GameProto = require("Game_ALD")

var GameG = require("GameGlobal")
var GameConfig = require("GameConfig")

var GameId = 27
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

        this.parseUrl() 
    },

    parseUrl:function(){
        if (IsTest) {
            GameConfig.saveUserID("1014881")
            let Cer = "eyJhbGciOiJBRVMiLCJ0eXAiOiJKV1QifQ==.eyJMb2dpblVzZXJJRCI6MTAxNDg4MSwiTG9naW5OYW1lIjoiZGVtby0xNjAzNjk0OTQ1Mzc0IiwiTWVyY2hhbnRJRCI6MTc1MDEzLCJMYW5nIjoiWkgtQ04iLCJUb2tlbkV4cGlyZWRUaW1lIjoxNjAzNzgzODAzLCJSbmRJRCI6IjM4NjUwYzBkLWE0MjUtNDNiOS04Zjc0LWJmYjljMjUyMjYzNSIsIlNpZ25LZXkiOiI4OTk1MjI2Mzc1NjQzOGZlY2Y4NzdlYjMwNzNhZjc1NSIsIlRva2VuVmVyc2lvbiI6MTAwMH0=.Ob3fFSoNyH1NPXWFYDOOUe+bTDFIZ1dC3fPEXelRt9A+T/s1+7siu8S0oOir8NZjivMDbprCRyQygzP3FyfmGJV1OPpnQbk3u+komGG7OM+YbME9qhEDBxc5H5Q+blghyFXy5KO3qGKIIfGe7lYlkY4ljFliNkOusCJOjR0dFfpW7xlW5B7PyaX0XqT8jOzFbq99ORLYRW41n1rAu8Erk2jCFajdZ3/pI0VFhYvnD+zHdy61cT25v4pph/sAhi4SP8XVqmuPyBurAUPB6BHBDoztoXRta1VVj78T2/uqdQxEFyjI5X26eOl7kkUjrQwmh0RLe99YDcPurqYuxUAfwjwpsC06jDtksBUZWG+gfFkiaQOjIxADJDlz1uKTEOLJ94vinec+gjcDV/j6S7xJJxuBcSdcJXcIq5eEE1QacmnWorM6mN5UFXk3SjvL4JlXfMij76EeCLCYYiW13ScpSg=="
			
			GameConfig.saveCer(Cer)
            GameConfig.saveReferrer("0")
            GameConfig.saveConnectIP("ws://example.invalid/ws/102500410")
            GameConfig.saveLang("EN-US")
            GameG.SetLanguage(GameConfig.getLang())
        }
        else
        {
            var pathName = window.document.location.pathname;
            var dir = pathName.split('/')
            var lang = dir[dir.length - 2]
            GameConfig.saveLang(lang)
            GameG.SetLanguage(GameConfig.getLang())

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
            
            if (data.lang){
                GameConfig.saveLang(data.lang)
                GameG.SetLanguage(GameConfig.getLang())
            }

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
                UIManager.ShowLoading("游戏资讯错误", false)
                return
            }        

            if (data.referrer)
                GameConfig.saveReferrer(data.referrer)
            else
                GameConfig.saveReferrer("0")

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
            
            if (window.location.href.indexOf("https://") != -1)
                GameConfig.saveConnectIP("wss://" + data.serverConnection)
            else
                GameConfig.saveConnectIP("ws://" + data.serverConnection)
        }

        UIManager.ShowLoading("载入中")

        this.beginConnect()
    },

    beginConnect:function()
    {
        let self = this

        let url = GameConfig.getConnectIP()

        UIManager.ShowLoading("正在连接服务器" + "...")

        GameManager.setGameId(GameId);

        GameManager.beginConnect(url, function(){

            UIManager.ShowLoading("登入中" + "...")

            GameManager.sendUserData(function(data){
            
                UIManager.ShowLoading("确认资料中" + "...")

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
