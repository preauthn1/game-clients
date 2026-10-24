var GameGlobal = require("GameGlobal");
var GameManager = require("GameManager")
var FileManager = require("FileManager");
var SoundManager = require("SoundManager");
var UIManager = require("UIManager")

var Proto = require("Proto")
var networkQueue = require("NetworkQueue");
var GameProto = require("Game_JGYF")

var GameConfig = require("GameConfig")

var GameId = 1027
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
            GameConfig.saveUserID("1015053")
            let Cer = "eyJhbGciOiJBRVMiLCJ0eXAiOiJKV1QifQ==.eyJMb2dpblVzZXJJRCI6MTAxNTA1MywiTG9naW5OYW1lIjoiZGVtby0xNjA0OTcxNTkzNDQxIiwiTWVyY2hhbnRJRCI6MTc1MDEzLCJMYW5nIjoiRU4tVVMiLCJUb2tlbkV4cGlyZWRUaW1lIjoxNjA1ODM1NjMzLCJSbmRJRCI6IjUxN2MzZGRkLTcxNzctNGRjYy05YTJhLTUxOGE3N2ZmNWVlMCIsIlNpZ25LZXkiOiI2YmM3ZWU1ZGEyMzFiYWU4NTlhYWVjODdmMGNlZmViMSIsIlRva2VuVmVyc2lvbiI6MTAwMH0=.Ob3fFSoNyH1NPXWFYDOOUe+bTDFIZ1dC3fPEXelRt9A+T/s1+7siu8S0oOir8NZjANeV+fGyejXo/pqth8SFKedGipsSyFgpiUk8zrTdkzyYbME9qhEDBxc5H5Q+blgh0L9xfUOwnTG8qPXGJwEfx44ljFliNkOusCJOjR0dFfpW7xlW5B7PyaX0XqT8jOzFfTWXLbg/sD/YD2X6cG/Op2jCFajdZ3/pI0VFhYvnD+zNLnwEFIgwYqsFvza0X8sKncW9+uJBRLVKN/SBznhtvy7i2FAYFTDT0SBDBW01Swm56SwhQafxnCAwrXuLSlrCc9Ouh6D5cu7F80CBQvLRprrbGY0JGVZvxzGz5DUGo08Y8ylhFsnOXLP9ldekNCsEPNsOBfBbRWa6Si82Fr6ItsIllaKWvt24ass4DX3+vlLWorM6mN5UFXk3SjvL4JlXfMij76EeCLCYYiW13ScpSg=="
            GameConfig.saveCer(Cer)
            GameConfig.saveReferrer("0")
            GameConfig.saveConnectIP("ws://example.invalid/ws/101000420") //TEST               
            
        }
        else
        {
            var pathName = window.document.location.pathname;
            var dir = pathName.split('/')
            var lang = dir[dir.length - 2]
            GameConfig.saveLang(lang)
            GameGlobal.SetLanguage(GameConfig.getLang())

            // let urlData = "eyJkYXRhIjp7InBsYXllcklEIjoxMDE1MTA4LCJwbGF5ZXJOYW1lIjoiZGVtby0xNjA1MDgwMTUxMjg5IiwibGFuZyI6IkVOLVVTIiwic2VydmVySUQiOjEwMTAwMDQyMCwiZ2FtZUlEIjoxMDEwLCJnYW1lQ29kZSI6ImpneWYiLCJzdHlsZU1vZGUiOjEsInNlcnZlckNvbm5lY3Rpb24iOiJ0ZnNlcnZlci5kZXYuZGQ5OS5zaXRlL3dzLzEwMTAwMDQyMCIsImFjY2Vzc19Ub2tlbiI6ImV5SmhiR2NpT2lKQlJWTWlMQ0owZVhBaU9pSktWMVFpZlE9PS5leUpNYjJkcGJsVnpaWEpKUkNJNk1UQXhOVEV3T0N3aVRHOW5hVzVPWVcxbElqb2laR1Z0YnkweE5qQTFNRGd3TVRVeE1qZzVJaXdpVFdWeVkyaGhiblJKUkNJNk1UYzFNREV6TENKTVlXNW5Jam9pUlU0dFZWTWlMQ0pVYjJ0bGJrVjRjR2x5WldSVWFXMWxJam94TmpBMU9UUTBNVFV4TENKU2JtUkpSQ0k2SW1SbU4ySTFOVE0yTFdRMFl6RXROREExTlMwNE9XTTNMVE5qWXpCbU5HSTNZV1F6WkNJc0lsTnBaMjVMWlhraU9pSTROalE0TXpGbU56Y3dPV000WldWaVl6STJPREptWTJNM01URmlOR0V6TkNJc0lsUnZhMlZ1Vm1WeWMybHZiaUk2TVRBd01IMD0uT2IzZkZTb055SDFOUFhXRllET09VZStiVERGSVoxZEMzZlBFWGVsUnQ5QStUL3MxKzdzaXU4UzBvT2lyOE5aajRZWWc0VDRmUEczUlJuU2NFSDFBc3RXOU5raUZTSmVjalFrVUc4ZjhvL21ZYk1FOXFoRURCeGM1SDVRK2JsZ2haTUlLOThEMFd6Z3N2d0pBemNwOCtJNGxqRmxpTmtPdXNDSk9qUjBkRmZwVzd4bFc1QjdQeWFYMFhxVDhqT3pGZlRXWExiZy9zRC9ZRDJYNmNHL09wMmpDRmFqZFozL3BJMFZGaFl2bkQreFBqbGdNbURDMnpMdVZwNDdGS1NNbTZiQ2FRMWRFTmFOczY0bG93azR2NXBFSmtLbGRxd21SOHRqVVlYaHBBNEh3SGxxQ2FjbTZkeGpyOXpLQkxjZGZRUXBnRzRENGVWK3B2dXNSa2ZFMW15V2Mvd2JBanE4M2tCVlpmNU5Qd1BtUUJsR1lJNGhFQWpyTkJJUWI1M0RPWDJzc2gwOUJyY3ArS1Fua051L1o4OEk5MWtyYnlHUGxmUEJCL05GMjJrZldvck02bU41VUZYazNTanZMNEpsWGZNaWo3NkVlQ0xDWVlpVzEzU2NwU2c9PSIsImxvZyI6MCwidGhpcmRQYXJ0eUluZm8iOnsiZ2FtZVZlbmRvcklEIjowLCJtRDVUZXh0IjpudWxsfX19"
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
                    UIManager.HideMessageGameFull();
                    GameManager.loadGame(GameId);
                }
                else{
                    UIManager.ShowMessageGameFull(data.Message)
                }
            
            })

        })
    }
});
