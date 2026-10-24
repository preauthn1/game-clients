var GameManager = require("GameManager")
var FileManager = require("FileManager")
var SoundManager = require("SoundManager")
var UIManager = require("UIManager")

var Proto = require("Proto")
var networkQueue = require("NetworkQueue")
var GameProto = require("Game_JXRY")

var GameConfig = require("GameConfig")

var GameId = 1011
var IsTest = true
var IsKuoYuServer = true
// var IsKuoYuServer = false

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

    parseUrl:function()
	{
		if (IsKuoYuServer)
		{
			// 直接載入遊戲場景
			cc.director.loadScene("Game", function()
			{
				// 將原GameModel直接替換為KGameModel
				var kGameModel = require("KGameModel")
				var gameLayer = require("GameLayer")
				var gameModel = new kGameModel()
				gameModel.GameEnter()
				gameLayer.gameModel = gameModel
				UIManager.HideLoading()
			});
			return
		}
        if (IsTest)
		{
            GameConfig.saveUserID("1000168") // client_tgw
            let Cer = "eyJhbGciOiJBRVMiLCJ0eXAiOiJKV1QifQ==.eyJMb2dpblVzZXJJRCI6MTAwMDE2OCwiTG9naW5OYW1lIjoia3VveXUiLCJMYW5nIjoiWkgtQ04iLCJUb2tlbkV4cGlyZWRUaW1lIjoxNTg1NDY1NjA5LCJSbmRJRCI6ImU1NTRjN2QwLWRlYjQtNGFkNi04ZTUwLWZiYTMyYmYyOTUyNSIsIlNpZ25LZXkiOiI0MjU1NGYwNTM5ZWRkNTNlOTU3ZWRhNmY0OTIzOWE1OCIsIlRva2VuVmVyc2lvbiI6MX0=.Ob3fFSoNyH1NPXWFYDOOUe+bTDFIZ1dC3fPEXelRt9A+T/s1+7siu8S0oOir8NZjW/xS0Th/kGFnrdQINex8mRndW8tIApbI9VeKHLcF9yndEARORZJ+sMTbtaWTQZIqwLoEEHf+b2G5RTQ1oC43uKaXLnRFzz5DEQYK5jb/7E816fP6is658YL38k+SL4jzqzpKHtilONNAvTN/TyhFaeahR5MZx4du/1xB/gQTg1lUpN7XVrgvJOrL3JPiWxXhPTWGPJKLiYFXQ9PThrXkUiG36uBYKTgRtW5f4t5I/f3eMNxEmybYssdVzHiItng+p5s5Gg/YyGpeeT09cttyQScpoI4AEG/WTrTMeGDhw/KvSw5ZM5fxB9q+b9vIAjtYL68r0vmvg53Fd+9MxX5TYw=="
			//GameConfig.saveUserID("1000032")
            //let Cer = "eyJhbGciOiJBRVMiLCJ0eXAiOiJKV1QifQ==.eyJMb2dpblVzZXJJRCI6MTAwMDAzMiwiTG9naW5OYW1lIjoicmF5b24xIiwiTGFuZyI6IlpILUNOIiwiVG9rZW5FeHBpcmVkVGltZSI6MTU4MDAwNzc4OSwiUm5kSUQiOiJlM2RhZTg3NS02Mjg4LTQ2YjMtYjk2Zi1iMmJhODAxNjE4OTYiLCJTaWduS2V5IjoiZTM0ZTAzMDM4YmFlNjcxNDZjNDE3ZTc2NDBlZGM4MTgiLCJUb2tlblZlcnNpb24iOjF9.Ob3fFSoNyH1NPXWFYDOOUe+bTDFIZ1dC3fPEXelRt9A+T/s1+7siu8S0oOir8NZjjBhN0XqnhbkSKE6oVZO3Sgtly0WQ9KFaLZOYXbyk2YoN3hRM/8S4tQpOnoIKL6KIUzMsRMtngRnXXlaYeedhlVHfRttbaIobPrscWFT4dU/TdU5qG5rslIjFfcv19dUM1U/TJZAEjQ4pq7XEDhS3mIri4NTTkp1RxsZetl6F3IExSDsuHLcZJcdRnQVWnhaTk4L4ZjXvy3O9aIhJL1TJcaclXppQ3aDbI2iNXYMvsOSvQ6XwTVTw7rhhuYAhmZfyt2jPhOXVWSEtMpJ47XywaAQOQCvYZ/PUocd5A4hNuZyHHc0EyoNdSr2EODS62+AeqwMwsTvOXFyWVMh5YccbIg=="            //GameConfig.saveUserID("1000034")
            GameConfig.saveCer(Cer)
            GameConfig.saveReferrer("0")
            GameConfig.saveConnectIP("ws://0.0.0.0:13101/ws") //LOCAL
            GameConfig.saveConnectIP("ws://0.0.0.0:13101/ws") //RAYON
            // GameConfig.saveConnectIP("ws://0.0.0.0:10080/ws/13101") //小康
            GameConfig.saveConnectIP("ws://0.0.0.0:10080/ws/14501") //小白
            // GameConfig.saveConnectIP("ws://example.invalid:10080/ws/13201") //TEST
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
                console.log("data.referrer",data.referrer)
                GameConfig.saveReferrer(data.referrer)
            }
            else{
                console.log("data.referrer null")
                GameConfig.saveReferrer("0")
            }

            GameConfig.saveUserID(data.playerID)
            GameConfig.saveCer(data.access_Token)
            console.log("serverConnection", data.serverConnection)
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
