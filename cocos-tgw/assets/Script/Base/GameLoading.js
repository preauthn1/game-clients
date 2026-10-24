var GameManager = require("GameManager")
var FileManager = require("FileManager");
var SoundManager = require("SoundManager");
var UIManager = require("UIManager")

var Proto = require("Proto")
var networkQueue = require("NetworkQueue");
var GameProto = require("Game_TGW")
var GameG = require("GameGlobal")
var GameConfig = require("GameConfig")

var GameId = 26
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
            GameConfig.saveUserID("1014877")
            let Cer = "eyJhbGciOiJBRVMiLCJ0eXAiOiJKV1QifQ==.eyJMb2dpblVzZXJJRCI6MTAxNDg3NywiTG9naW5OYW1lIjoiZGVtby0xNjAzNjkyODIyMjU0IiwiTWVyY2hhbnRJRCI6MTc1MDEzLCJMYW5nIjoiRU4tVVMiLCJUb2tlbkV4cGlyZWRUaW1lIjoxNjAzNzc5MjI0LCJSbmRJRCI6IjJhZDI1NTdiLTNmOWMtNDNlMC1hOGExLWViZGUxYTZmNDNmYSIsIlNpZ25LZXkiOiI0MWRlMWViNTYwNTE1NmRlZWEzNmIxZjNhMTNkZTQ5MyIsIlRva2VuVmVyc2lvbiI6MTAwMH0=.Ob3fFSoNyH1NPXWFYDOOUe+bTDFIZ1dC3fPEXelRt9A+T/s1+7siu8S0oOir8NZjivMDbprCRyQygzP3FyfmGK1kQ6pwFCYtqInCVDy3h8iYbME9qhEDBxc5H5Q+blghsinJt30ZuZ7NVOA4itvfB44ljFliNkOusCJOjR0dFfpW7xlW5B7PyaX0XqT8jOzFfTWXLbg/sD/YD2X6cG/Op2jCFajdZ3/pI0VFhYvnD+wj768vBbyY4iRwATUIAyAEFcMo1CKv5sZBeJKhCLjYGqTLQ0G+VmGP5KGYb2PJs5w7bXGpOl6ZIFsS45zbT0KBZgPkiPr1aCp+Ndy8MaynfodRokhcfD9vh9C8KkWGS7VfmqlzQ8ro0RacXoKJpeK/Wx2GL+IZa9m5dBdOvgGK/O+/CzQXA/vVeg+O/lKJVDnWorM6mN5UFXk3SjvL4JlXfMij76EeCLCYYiW13ScpSg=="
            
            GameConfig.saveCer(Cer)
            GameConfig.saveReferrer("0")
            GameConfig.saveConnectIP("ws://example.invalid/ws/102400410")
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
            UIManager.ShowLoading("载入中") 

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

            if (window.location.href.indexOf("https://") != -1)
                GameConfig.saveConnectIP("wss://" + data.serverConnection)
            else
                GameConfig.saveConnectIP("ws://" + data.serverConnection)         
            }

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
