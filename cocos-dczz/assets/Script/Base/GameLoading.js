var GameGlobal=require("GameGlobal");
var GameManager=require("GameManager");
var FileManager=require("FileManager");
var SoundManager=require("SoundManager");
var UIManager=require("UIManager");

var Proto=require("Proto");
var networkQueue=require("NetworkQueue");
var GameProto=require("Game_DCZZ");

var GameConfig=require("GameConfig");

var GameId=2003;
var IsTest=false;
if (document.getElementsByClassName != null) {
    var DebugToolBar=document.getElementsByClassName("ToolBar");
    if (DebugToolBar.length>0) IsTest=true;
}

cc.Class({
    extends : cc.Component,

    onLoad : function () {
        FileManager.Init();
        SoundManager.Init();

        Proto.initMsgModel();
        networkQueue.Init();
        GameProto.initMsgModel();

        cc.game.on(cc.game.EVENT_HIDE, function () {
            console.log("游戏进入后台");
            GameManager.closeConnect();
        }, this);

        cc.game.on(cc.game.EVENT_SHOW, function () {
            console.log("重新返回游戏");
            GameManager.clearGameStart();
            GameManager.closeConnect();
            GameManager.clear();

            cc.director.loadScene("GameMain");
        }, this);
    },

    start : function () {

        cc.macro.ENABLE_WEBGL_ANTIALIAS=true;

        let root=cc.find("Root", this.node.parent);
        UIManager.Init(root);

        this.parseUrl();
    },

    parseUrl : function () {
        if (IsTest) {
            /*/
             GameConfig.saveLang("ZH-CN");
             /*/
            GameConfig.saveLang("EN-US");
            //*/
            GameConfig.saveUserID("1013086");
            let Cer="eyJhbGciOiJBRVMiLCJ0eXAiOiJKV1QifQ==.eyJMb2dpblVzZXJJRCI6MTAxMzA4NiwiTG9naW5OYW1lIjoiZGVtby0xNTk5NTM1ODg3OTAxIiwiTWVyY2hhbnRJRCI6MTc1MDEzLCJMYW5nIjoiRU4tVVMiLCJUb2tlbkV4cGlyZWRUaW1lIjoxNjAwMzk5OTU2LCJSbmRJRCI6IjM2ZjMxYmYwLTZjMWYtNGFmZC1hZThiLWFmMmQwN2NmOWQ3ZiIsIlNpZ25LZXkiOiIyOTNlNjgxYmVhMDkzNWMyYWRkMzUyNmUyZWRjMmMxMCIsIlRva2VuVmVyc2lvbiI6MTAwMH0=.Ob3fFSoNyH1NPXWFYDOOUe+bTDFIZ1dC3fPEXelRt9A+T/s1+7siu8S0oOir8NZj5HW7ojskC2l3lkITLvePKmgYjSfWKCpOeITlwTAGWY9y8TSQfeTJizscw8ExxUSXhnGOetkEpo67aemzrBGuCI4ljFliNkOusCJOjR0dFfpW7xlW5B7PyaX0XqT8jOzFfTWXLbg/sD/YD2X6cG/Op2jCFajdZ3/pI0VFhYvnD+ynnWX4hlKDE+XOfSKtPgasLpQBbMBcI1jVVOMpetCy0o5gM4hwl4w39PydRYJtqpCq7Rf+2zyhTrsqobDt7cdyK7U4/peb4S9CTaA9XJ8LuJGUIwSS0k40dTboWQBQh9d7b8iqT4DiAQIymw3Zvtyx/0X9dPVnge9OHjYvYX48sOFbN62ZymQc3SHcar3Kur3WorM6mN5UFXk3SjvL4JlXfMij76EeCLCYYiW13ScpSg==";
            GameConfig.saveCer(Cer);
            GameConfig.saveReferrer("0");
            // GameConfig.saveConnectIP("ws://example.invalid/ws/200300410"); //TEST   QA
            GameConfig.saveConnectIP("wss://example.invalid/ws/200300410"); //TEST   Dev
        } else {
            var pathName=window.document.location.pathname;
            var dir=pathName.split("/");
            var lang=dir[dir.length - 2];
            GameConfig.saveLang(lang);
            GameGlobal.SetLanguage(GameConfig.getLang());

            let urlData=window.location.search.substring(1);
            if (urlData == null || urlData == "") {
                console.log("json error");
                UIManager.ShowLoading("资料错误", false);
                return;
            }
            urlData=urlData.split("&nsukey=")[0];

            let datas=JSON.parse(window.atob(urlData));
            if (datas == null) {
                console.log("json error");
                UIManager.ShowLoading("资料错误", false);
                return;
            }

            let data=datas.data;
            if (data.playerID == null || data.playerID == "") {
                console.log("playerID error");
                UIManager.ShowLoading("玩家资料错误", false);
                return;
            }

            if (data.access_Token == null || data.access_Token == "") {
                console.log("access_Token error");
                UIManager.ShowLoading("玩家验证资料错误", false);
                return;
            }

            if (data.serverConnection == null || data.serverConnection == "") {
                console.log("serverConnection error");
                UIManager.ShowLoading("游戏资讯错误", false);
                return;
            }

            if (data.referrer) {
                GameConfig.saveReferrer(data.referrer);
            } else {
                console.log("data.referrer null");
                GameConfig.saveReferrer("0");
            }

            if (data.log == 0) {
                networkQueue.ShowLog(false);
                console.log("hide log");
            } else {
                networkQueue.ShowLog(true);
                console.log("show log");
            }

            if (data.lang) {
                GameConfig.saveLang(data.lang);
            }

            GameConfig.saveUserID(data.playerID);
            GameConfig.saveCer(data.access_Token);

            if (window.location.href.indexOf("https://") != - 1) {
                GameConfig.saveConnectIP("wss://" + data.serverConnection);
            } else {
                GameConfig.saveConnectIP("ws://" + data.serverConnection);
            }
        }

        GameGlobal.SetLanguage(GameConfig.getLang());

        UIManager.ShowLoading("载入中");

        this.beginConnect();
    },

    beginConnect : function () {
        let self=this;

        let url=GameConfig.getConnectIP();

        UIManager.ShowLoading("正在连接服务器");

        GameManager.setGameId(GameId);

        GameManager.beginConnect(url, function () {

            UIManager.ShowLoading("登入中");

            GameManager.sendUserData(function (data) {

                UIManager.ShowLoading("确认资料中");

                if (data.Code == 1) {
                    UIManager.ShowLoading("载入中");
                    UIManager.HideMessageGameFull();
                    GameManager.loadGame(GameId);
                } else {
                    UIManager.ShowMessageGameFull(data.Message);
                }

            });

        });
    }
});
