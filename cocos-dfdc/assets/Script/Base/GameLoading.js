var GameManager = require("GameManager")
var FileManager = require("FileManager");
var SoundManager = require("SoundManager");
var UIManager = require("UIManager")

var Proto = require("Proto")
var networkQueue = require("NetworkQueue");
var GameProto = require("Game_DFDC")

var GameG = require("GameGlobal")
var GameConfig = require("GameConfig")

var GameId = 25
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
            GameConfig.saveUserID("1000258") // client_dfdc
            let Cer = "eyJhbGciOiJBRVMiLCJ0eXAiOiJKV1QifQ==.eyJMb2dpblVzZXJJRCI6MTAwMDI1OCwiTG9naW5OYW1lIjoiY2xpZW50X2RmZGMiLCJMYW5nIjoiWkgtQ04iLCJUb2tlbkV4cGlyZWRUaW1lIjoxNTk2MDgwMTUyLCJSbmRJRCI6IjdkNDhkZjVkLTVlNGYtNGYzZS1hODk0LTJjOWE4NjhhOWQ4YyIsIlNpZ25LZXkiOiJlYjE4MTI0NGEwODMyMDY3ZTdiNGIyMDM4MzMxZGEwMSIsIlRva2VuVmVyc2lvbiI6MTAwMH0=.Ob3fFSoNyH1NPXWFYDOOUe+bTDFIZ1dC3fPEXelRt9A+T/s1+7siu8S0oOir8NZjVSi7YYBT0+EBkqpXeVPgktnXbg5EfKNwY+0mMSoHSGv0zeffrxKhRppPJ7ZYNAoMjvVujSV2zbDmcFnkuIfwpdOPk6lNfeb8Aq1Swyq0gs8UT35qfdzza2vMLWeBb467yOqCxK11MFES0P46lh6Qy+xXKx/BIUM3BVnkpsf0rP1CualBlzadXktbdUtjketsShf0h5ERVBUwuHOBxN+tAP3RqV9ODNRTzZwusnS0cVJmQ5lY5nOQRCSDyG0fXwoLNkXm1FftROuzfnSow7Kd2mbuC6+hCIsM2+LHSdtw2xwAsUicP0AR4EnJGAj7Y1JiJsvy7hjrRd2vbZG8xOyElR4jEp2oBeR/QCB5Tm00wSo="
            //GameConfig.saveUserID("1000032")
            //let Cer = "eyJhbGciOiJBRVMiLCJ0eXAiOiJKV1QifQ==.eyJMb2dpblVzZXJJRCI6MTAwMDAzMiwiTG9naW5OYW1lIjoicmF5b24xIiwiTGFuZyI6IlpILUNOIiwiVG9rZW5FeHBpcmVkVGltZSI6MTU4MDAwNzc4OSwiUm5kSUQiOiJlM2RhZTg3NS02Mjg4LTQ2YjMtYjk2Zi1iMmJhODAxNjE4OTYiLCJTaWduS2V5IjoiZTM0ZTAzMDM4YmFlNjcxNDZjNDE3ZTc2NDBlZGM4MTgiLCJUb2tlblZlcnNpb24iOjF9.Ob3fFSoNyH1NPXWFYDOOUe+bTDFIZ1dC3fPEXelRt9A+T/s1+7siu8S0oOir8NZjjBhN0XqnhbkSKE6oVZO3Sgtly0WQ9KFaLZOYXbyk2YoN3hRM/8S4tQpOnoIKL6KIUzMsRMtngRnXXlaYeedhlVHfRttbaIobPrscWFT4dU/TdU5qG5rslIjFfcv19dUM1U/TJZAEjQ4pq7XEDhS3mIri4NTTkp1RxsZetl6F3IExSDsuHLcZJcdRnQVWnhaTk4L4ZjXvy3O9aIhJL1TJcaclXppQ3aDbI2iNXYMvsOSvQ6XwTVTw7rhhuYAhmZfyt2jPhOXVWSEtMpJ47XywaAQOQCvYZ/PUocd5A4hNuZyHHc0EyoNdSr2EODS62+AeqwMwsTvOXFyWVMh5YccbIg=="            //GameConfig.saveUserID("1000034")
            GameConfig.saveCer(Cer)
            GameConfig.saveReferrer("0")
            GameConfig.saveConnectIP("ws://example.invalid/ws/13101") //LOCAL
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

            UIManager.ShowLoading("载入中" + "...") 
            
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

        UIManager.ShowLoading(GameG.GetLocalizedString("载入中..."))

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
