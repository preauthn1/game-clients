var GameManager = require("GameManager")
var FileManager = require("FileManager");
var SoundManager = require("SoundManager");
var UIManager = require("UIManager")

var Proto = require("Proto")
var networkQueue = require("NetworkQueue");
var GameProto = require("Game_INFC")

var GameG = require("GameGlobal")
var GameConfig = require("GameConfig")

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
            GameConfig.saveUserID("1013169") // client_ald
            let Cer = "eyJhbGciOiJBRVMiLCJ0eXAiOiJKV1QifQ==.eyJMb2dpblVzZXJJRCI6MTAxMzE2OSwiTG9naW5OYW1lIjoiZGVtby0xNTk3NjQ5MjgyOTgxIiwiTGFuZyI6IkVOLVVTIiwiVG9rZW5FeHBpcmVkVGltZSI6MTU5NzczNTY4MywiUm5kSUQiOiI1Mjc2ODMyMy05NDg3LTRiYjQtYmM0ZS0xNWFkYzg1NTlkODciLCJTaWduS2V5IjoiNWIxMGQ4ZjFmMmQ4M2IxNjU3ZGJjNTdhYzIwZDhmZWEiLCJUb2tlblZlcnNpb24iOjEwMDB9.Ob3fFSoNyH1NPXWFYDOOUe+bTDFIZ1dC3fPEXelRt9A+T/s1+7siu8S0oOir8NZjxg6dHyY3O/ybXxjYALOaC1747JjH+4BYIeFjFMVNJxty8TSQfeTJizscw8ExxUSX30MBMgTBR9jF6qu5yUcU00R5ASjXoRaHcQySGnP9NDEMKqE6y0Bdx9Q4SLEtKQO503VOahua7JSIxX3L9fXVDGL+RSUQu0H3hgEZsxCmW0UyXRIrx7ps6o/SJlA9kwgXjUPvg+/zNSqrItex1LaCCZiNrKjeluZFWZwzSCBTvPF8ueNUJ7IHKoinZ95qAdcpFJ33cnhyknnTqzwsMy+I1+WmsLAkmkzH84Ame8cmfNK/DDEa+eh07vak51CxSLinH11JV8x6KtlY8ycNmKoRhwSJ1uf9qb9i+4N3Lfs25rcQpg+NLzTxmMIhFrmUz/Bt"
			
			GameConfig.saveCer(Cer)
            GameConfig.saveReferrer("0")
            GameConfig.saveConnectIP("ws://example.invalid/ws/13303") //LOCAL
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

            let urlData = "eyJkYXRhIjp7InBsYXllcklEIjoxMDE1MzQ0LCJwbGF5ZXJOYW1lIjoiZGVtby0xNjA2MTg3MDgyMDIyIiwibGFuZyI6IkVOLVVTIiwic2VydmVySUQiOjQwMDEwMDQxMCwiZ2FtZUlEIjo0MDAxLCJnYW1lQ29kZSI6ImluZmMiLCJzdHlsZU1vZGUiOjEsInNlcnZlckNvbm5lY3Rpb24iOiJ0ZnNlcnZlci5kZXYuZGQ5OS5zaXRlL3dzLzQwMDEwMDQxMCIsImFjY2Vzc19Ub2tlbiI6ImV5SmhiR2NpT2lKQlJWTWlMQ0owZVhBaU9pSktWMVFpZlE9PS5leUpNYjJkcGJsVnpaWEpKUkNJNk1UQXhOVE0wTkN3aVRHOW5hVzVPWVcxbElqb2laR1Z0YnkweE5qQTJNVGczTURneU1ESXlJaXdpVFdWeVkyaGhiblJKUkNJNk1UYzFNREV6TENKTVlXNW5Jam9pUlU0dFZWTWlMQ0pVYjJ0bGJrVjRjR2x5WldSVWFXMWxJam94TmpBM01EVXhNVEF4TENKU2JtUkpSQ0k2SW1Rd05HUXhNV0k0TFRBMll6Y3RORGM1TnkwNE9XUTFMV1l3TkRSa1pEWTNZbUl4WlNJc0lsTnBaMjVMWlhraU9pSmhOMkk0TUdNMU5UTTVOelV3WWpCaE9HTmxNelZoTm1FMVlXWmhOekJqWWlJc0lsUnZhMlZ1Vm1WeWMybHZiaUk2TVRBd01IMD0uT2IzZkZTb055SDFOUFhXRllET09VZStiVERGSVoxZEMzZlBFWGVsUnQ5QStUL3MxKzdzaXU4UzBvT2lyOE5aamhrTEhKMUV4SEpwK2hqRE1uNmlMVjRUbXl2dHg0QkttdXd0ZzIxYVgwQ2FZYk1FOXFoRURCeGM1SDVRK2JsZ2hvenhCTjFCaEEvcU9DVEtMOXJ2VmI0NGxqRmxpTmtPdXNDSk9qUjBkRmZwVzd4bFc1QjdQeWFYMFhxVDhqT3pGZlRXWExiZy9zRC9ZRDJYNmNHL09wMmpDRmFqZFozL3BJMFZGaFl2bkQreTI3UThMMVVJcDFlU0dHY3prb3RhZ1h2TjdtQ2kzYWdPR2tRc3ljb2c1cGpwMElmaGZOMStxSjhBUTB2c1NNWThQdkp3ajliL0hFR3FzVWx2b1IvOW9Lc2VKeGRJYU55WUVwRTBrUTdlN3VYT25LRFZ1Y1lES3RkbS83M29oUlduajYwWDM4Wld4QkQxOW1rdjRRWVIyOGhSSGtOSWVqNTh2RDM3VFBKRitJdmRmT1BnRzFXYmRJUmYyNnZQTUxUSFdvck02bU41VUZYazNTanZMNEpsWGZNaWo3NkVlQ0xDWVlpVzEzU2NwU2c9PSIsImxvZyI6MCwidGhpcmRQYXJ0eUluZm8iOnsiZ2FtZVZlbmRvcklEIjowLCJtRDVUZXh0IjpudWxsfX19"
            // let urlData = window.location.search.substring(1);
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

            data.log = true                
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
        let url = GameConfig.getConnectIP()

        UIManager.ShowLoading("正在连接服务器" + "...")

        GameManager.beginConnect(url, function(){

            UIManager.ShowLoading("登入中" + "...")

            GameManager.sendUserData(function(data){
            
                UIManager.ShowLoading("确认资料中" + "...")

                if (data.Code == 1){
                    UIManager.ShowLoading("载入中")
                    UIManager.HideMessageGameFull()

                    GameManager.loadGame();
                }
                else{
                    UIManager.ShowMessageGameFull(data.Message)
                }
            
            })

        })
    }
});
