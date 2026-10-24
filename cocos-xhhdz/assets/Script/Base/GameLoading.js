var GameGlobal=require("GameGlobal");
var GameManager=require("GameManager")
var FileManager=require("FileManager");
var SoundManager=require("SoundManager");
var UIManager=require("UIManager")

var Proto=require("Proto")
var networkQueue=require("NetworkQueue");

var GameConfig=require("GameConfig")

var GameId=20
var IsTest=false;
var DebugToolBar=document.getElementsByClassName("ToolBar");
if (DebugToolBar && DebugToolBar.length > 0) IsTest=true;

cc.Class({
    extends : cc.Component,

    onLoad : function () {
        FileManager.Init();
        SoundManager.Init();

        Proto.initMsgModel();
        networkQueue.Init();
    },

    start : function () {

        cc.macro.ENABLE_WEBGL_ANTIALIAS=true

        let root=cc.find("Root", this.node.parent)
        UIManager.Init(root)

        this.parseUrl()
    },

    parseUrl : function () {
        if (IsTest) {
            GameConfig.saveLang("EN-US")
            GameConfig.saveUserID("1012630")
            let Cer="eyJhbGciOiJBRVMiLCJ0eXAiOiJKV1QifQ==.eyJMb2dpblVzZXJJRCI6MTAxMjYzMCwiTG9naW5OYW1lIjoiQVpMREMwMDAyIiwiTGFuZyI6IkVOLVVTIiwiVG9rZW5FeHBpcmVkVGltZSI6MTU5NjYxODUyMiwiUm5kSUQiOiJjMjAxMTE1MC02MGIwLTQxOTYtOTJlZC0xYzc3ODExOThiYWUiLCJTaWduS2V5IjoiYmY2MTYyMGE0ZjU1ZmI0ZDRhMDY0YTQ1N2ZlODRhZmEiLCJUb2tlblZlcnNpb24iOjEwMDB9.Ob3fFSoNyH1NPXWFYDOOUe+bTDFIZ1dC3fPEXelRt9A+T/s1+7siu8S0oOir8NZjNcaqZ7V5U2zoJ6oSVLJ8jcOuZHAo0udbMDBgXV85TytZL6k1eSdrTf3a0nljo3Fq2K35qbbMl0FWhavnOA/SY0/krsVH5Kf/5MusYZM2UnLYGqlsuvPzE1UXt6i/IIZpL1uydjvXRQmvDSnwi58+TwNSw1jSKwe9mooxVZG6rGld1vB9vPtnY6QV7o6Mbah0P2/kvy0f5B94F0Bjmmh/VE/u2SVyBX93fHb8gx7YBkq24LVodBXK7yP224tf80afUVCgQmJAaduaWJF6+0CSyNEMTJeIr8mjnaaGVQcQW3sSFcIkVQU2ZngMn5rTKqfP+wVTmlZExmZcRPN1AJjEOUE/pCcVLoqVmQyU1egEw9o="
            GameConfig.saveCer(Cer)
            GameConfig.saveReferrer("0")
            GameConfig.saveConnectIP("ws://example.invalid/ws/12701") //TEST
        } else {
            var pathName=window.document.location.pathname;
            var dir=pathName.split('/')
            var lang=dir[dir.length - 2]
            GameConfig.saveLang(lang)
            GameGlobal.SetLanguage(GameConfig.getLang())

            let urlData=window.location.search.substring(1);
            if (urlData == null || urlData == "") {
                console.log("json error")
                UIManager.ShowLoading("资料错误", false)
                return
            }
            urlData = urlData.split('&nsukey=')[0]
            
            let datas=JSON.parse(window.atob(urlData))
            if (datas == null) {
                console.log("json error")
                UIManager.ShowLoading("资料错误", false)
                return
            }

            let data=datas.data;
            if (data.playerID == null || data.playerID == "") {
                console.log("playerID error")
                UIManager.ShowLoading("玩家资料错误", false)
                return
            }

            if (data.access_Token == null || data.access_Token == "") {
                console.log("access_Token error")
                UIManager.ShowLoading("玩家验证资料错误", false)
                return
            }

            if (data.serverConnection == null || data.serverConnection == "") {
                console.log("serverConnection error")
                UIManager.ShowLoading("游戏资讯错误", false)
                return
            }

            if (data.referrer) {
                console.log("data.referrer", data.referrer)
                GameConfig.saveReferrer(data.referrer)
            } else {
                console.log("data.referrer null")
                GameConfig.saveReferrer("0")
            }

            if (data.log == 0) {
                networkQueue.ShowLog(false)
                console.log("hide log")
            } else {
                networkQueue.ShowLog(true)
                console.log("show log")
            }

            if (data.lang) {
                GameConfig.saveLang(data.lang)
            }

            GameConfig.saveUserID(data.playerID)
            GameConfig.saveCer(data.access_Token)
            if (window.location.href.indexOf("https://") != - 1)
                GameConfig.saveConnectIP("wss://" + data.serverConnection)
            else
                GameConfig.saveConnectIP("ws://" + data.serverConnection)
        }

        GameGlobal.SetLanguage(GameConfig.getLang())

        this.beginConnect()
    },

    beginConnect : function () {
        UIManager.ShowLoading("载入中")

        let url=GameConfig.getConnectIP()

        UIManager.ShowLoading("正在连接服务器")

        GameManager.setGameId(GameId);

        GameManager.beginConnect(url, function () {

            UIManager.ShowLoading("登入中")

            GameManager.sendUserData(function (data) {

                UIManager.ShowLoading("确认资料中")

                if (data.Code == 1) {
                    UIManager.ShowLoading("载入中")
                    UIManager.HideMessageGameFull()

                    GameManager.loadGame(GameId);
                } else {
                    UIManager.ShowMessageGameFull(data.Message)
                }

            })

        })
    }
});
