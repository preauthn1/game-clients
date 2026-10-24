var GameGlobal = require("GameGlobal");
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

        this.parseUrl() 
    },

    parseUrl:function(){
        if (IsTest) {       
            GameConfig.saveLang("EN-US")
            GameConfig.saveUserID("1012973")
            let Cer = "eyJhbGciOiJBRVMiLCJ0eXAiOiJKV1QifQ==.eyJMb2dpblVzZXJJRCI6MTAxMjk3MywiTG9naW5OYW1lIjoiZGVtby0xNTk3MzEzMTY2NzM0IiwiTGFuZyI6IkVOLVVTIiwiVG9rZW5FeHBpcmVkVGltZSI6MTU5NzM5OTU3MCwiUm5kSUQiOiJlZjU4MGVkYS1jZGRmLTQyNTMtODhjNy0yMjc1NWIyZjAxYjkiLCJTaWduS2V5IjoiYzNmMDFjNjZjNGQ3N2YxZGYxMDJjNjkwNTYxNDU3NTkiLCJUb2tlblZlcnNpb24iOjEwMDB9.Ob3fFSoNyH1NPXWFYDOOUe+bTDFIZ1dC3fPEXelRt9A+T/s1+7siu8S0oOir8NZjQYcvV0hJWGrldkI+aBf5cTvwa57brxJPwaMPmEs97KZy8TSQfeTJizscw8ExxUSXNORTzSQQKtae28eLqkqw6kR5ASjXoRaHcQySGnP9NDEMKqE6y0Bdx9Q4SLEtKQO503VOahua7JSIxX3L9fXVDBIkxrNa8KDkUQmPSxeZfFD/IWY0JYw3EHx221XDsIMbGE18Kz6i9XflbGTgdEqwTRYyPWv/tvkFRXss+zQWKUYqO8OF58j/wcgV2BAfxqIiq9SiAyOkI3HM/rfv4YQ98j0tTPQMJRz0N3d5+2Vyy9kPVa6pUkSzH40vCVoC6jgxf2Np/9/JovDX88xz0uEUvgSJ1uf9qb9i+4N3Lfs25rcQpg+NLzTxmMIhFrmUz/Bt"
            GameConfig.saveCer(Cer)
            GameConfig.saveReferrer("0")
            GameConfig.saveConnectIP("ws://example.invalid/ws/12201") //TEST
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
