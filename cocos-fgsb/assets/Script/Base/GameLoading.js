var GameGlobal   = require("GameGlobal");
var GameManager  = require("GameManager");
var FileManager  = require("FileManager");
var SoundManager = require("SoundManager");
var UIManager    = require("UIManager");

var Proto        = require("Proto");
var networkQueue = require("NetworkQueue");

var GameConfig = require("GameConfig");

var GameId = 2007;
var IsTest = false;
if(document.getElementsByClassName != null){
    var DebugToolBar = document.getElementsByClassName("ToolBar");
    if(DebugToolBar.length > 0) IsTest = true;
}

cc.Class({
    extends : cc.Component,
    
    onLoad : function(){
        FileManager.Init();
        SoundManager.Init();
        
        Proto.initMsgModel();
        networkQueue.Init();
    },
    
    start : function(){
        
        cc.macro.ENABLE_WEBGL_ANTIALIAS = true;
        
        let root = cc.find("Root", this.node.parent);
        UIManager.Init(root);
        
        this.parseUrl();
    },
    
    parseUrl : function(){
        if(IsTest){
            GameConfig.saveLang("EN-US");
            // AZLDC0001
            GameConfig.saveUserID("1013329");
            let Cer = "eyJhbGciOiJBRVMiLCJ0eXAiOiJKV1QifQ==.eyJMb2dpblVzZXJJRCI6MTAxMzMyOSwiTG9naW5OYW1lIjoiZGVtby0xNTk3ODIwODA4NTQ3IiwiTWVyY2hhbnRJRCI6MTc1MDEzLCJMYW5nIjoiRU4tVVMiLCJUb2tlbkV4cGlyZWRUaW1lIjoxNTk3OTA3MjE0LCJSbmRJRCI6IjdlMmI0NzRlLTUyMTgtNDE2Yy04ZTI5LTcyYTA1NGYxZDE3MSIsIlNpZ25LZXkiOiI5ZGVjNzVjMjhlYjk4NTk0NjUyMDMyNTdhZjRlM2I3MiIsIlRva2VuVmVyc2lvbiI6MTAwMH0=.Ob3fFSoNyH1NPXWFYDOOUe+bTDFIZ1dC3fPEXelRt9A+T/s1+7siu8S0oOir8NZjibBBEdaTpzASZ3hsE2rJGPlVaufTYl0sbEVSQRFIsp9y8TSQfeTJizscw8ExxUSX69FNd9VNvMF3aTN7bS3CHI4ljFliNkOusCJOjR0dFfpW7xlW5B7PyaX0XqT8jOzFfTWXLbg/sD/YD2X6cG/Op2jCFajdZ3/pI0VFhYvnD+wPFCnrBZQZi/m2vflQS9cFvNWjU2n+sYotNXnh3JjB66hKPowDwVaCyIHZ/zA7L65jJ6OWxeYTObwCKeQG3TQ1+qrMBXGp6yYXL7PHKUIZtOus7WJMV3/EBA8VBAqaa39OS3jCG1Xrgsvak5OJBYL/eYm4R6phB5v/XqnI67m3Gv/bmzvTjnOTkLvVyRMl78bWorM6mN5UFXk3SjvL4JlXfMij76EeCLCYYiW13ScpSg==";
            GameConfig.saveCer(Cer);
            GameConfig.saveReferrer("0");
            GameConfig.saveConnectIP("ws://example.invalid/ws/47102"); //TEST
        }else{
            var pathName = window.document.location.pathname;
            var dir      = pathName.split("/");
            var lang     = dir[dir.length - 2];
            GameConfig.saveLang(lang);
            GameGlobal.SetLanguage(GameConfig.getLang());
            
            let urlData = window.location.search.substring(1);
            if(urlData == null || urlData == ""){
                console.log("json error");
                UIManager.ShowLoading("资料错误", false);
                return;
            }
            urlData = urlData.split("&nsukey=")[0];
            
            let datas = JSON.parse(window.atob(urlData));
            if(datas == null){
                console.log("json error");
                UIManager.ShowLoading("资料错误", false);
                return;
            }
            
            let data = datas.data;
            if(data.playerID == null || data.playerID == ""){
                console.log("playerID error");
                UIManager.ShowLoading("玩家资料错误", false);
                return;
            }
            
            if(data.access_Token == null || data.access_Token == ""){
                console.log("access_Token error");
                UIManager.ShowLoading("玩家验证资料错误", false);
                return;
            }
            
            if(data.serverConnection == null || data.serverConnection == ""){
                console.log("serverConnection error");
                UIManager.ShowLoading("游戏资讯错误", false);
                return;
            }
            
            if(data.referrer){
                console.log("data.referrer", data.referrer);
                GameConfig.saveReferrer(data.referrer);
            }else{
                console.log("data.referrer null");
                GameConfig.saveReferrer("0");
            }
            
            if(data.log == 0){
                networkQueue.ShowLog(false);
                console.log("hide log");
            }else{
                networkQueue.ShowLog(true);
                console.log("show log");
            }
            
            if(data.lang){
                GameConfig.saveLang(data.lang);
            }
            
            GameConfig.saveUserID(data.playerID);
            GameConfig.saveCer(data.access_Token);
            //GameConfig.saveConnectIP("ws://" + data.serverConnection)
            
            if(window.location.href.indexOf("https://") != -1) GameConfig.saveConnectIP("wss://" + data.serverConnection); else GameConfig.saveConnectIP("ws://" + data.serverConnection);
            
        }
        
        GameGlobal.SetLanguage(GameConfig.getLang());
        
        this.beginConnect();
    },
    
    beginConnect : function(){
        UIManager.ShowLoading("载入中");
        
        let url = GameConfig.getConnectIP();
        
        UIManager.ShowLoading("正在连接服务器");
        
        GameManager.setGameId(GameId);
        
        GameManager.beginConnect(url, function(){
            
            UIManager.ShowLoading("登入中");
            
            GameManager.sendUserData(function(data){
                
                UIManager.ShowLoading("确认资料中");
                
                if(data.Code == 1){
                    UIManager.ShowLoading("载入中");
                    UIManager.HideMessageGameFull()
                    
                    GameManager.loadGame(GameId);
                }else{
                    UIManager.ShowMessageGameFull(data.Message)
                }
                
            });
            
        });
    }
});
