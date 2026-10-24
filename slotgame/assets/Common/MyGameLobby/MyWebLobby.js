var MobileSocket = require("MobileSocket");
cc.Class({
    extends: cc.Component,

    properties: {
        errorView:cc.Node,
        gameButton: [cc.Node],
        playername:cc.Label,
        playercredit:cc.Label,
        currentGameType:0,
        bgmClip: {
            type: cc.AudioClip,
            default: null,
        },
        btnClip:{
            type: cc.AudioClip,
            default: null,
        },
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {
        var audioID = cc.audioEngine.playMusic(this.bgmClip, true);
        
        if (this.errorView != null) {
            this.errorView = this.errorView.getComponent("MyGameLobbyErrorView");
            this.errorView.controller = this;
        }
        if(window.isWebSite != "1"){
            let i = MobileSocket.getCookie("session");
            if(i!=null){
                MobileSocket.restoreCookieDetail();
            }
            MobileSocket.onSessionGetAccount(this);
        }
        for (let i = 0; i < this.gameButton.length; i++) {
            this.gameButton[i].on('click', function () {
                this.onRequestGameToken(i)
            }, this);
        }

        let gamename = "";
        let gamecredit = "";
        if(window.gameName!=null){
            gamename = window.gameName;
        }
        if(window.gameCredit!=null){
            gamecredit = window.gameCredit;
        }
        this.playername.string = gamename;
        this.playercredit.string = gamecredit;
    },
    onRequestGameToken(i) {
        // console.log("onRequestGameToken : " + i);
       this.clickBtn();
        this.currentGameType = i;
        if(window.isWebSite != "1"){
            MobileSocket.onGetGameToken(this, 17, 17,this.gameType[i]);
        }
        else{
            window.location.href = "../slotCrWeb.html?r="+Math.random() +"&gameType="+i;
        }
    },
    successGetToken(token){
        console.log("Success Token : [REDACTED];
        MobileSocket.setCookie("token",token);
        window.location.href = "../../secure/game2/"+this.gameLink[this.currentGameType]+"/index.html";
    },
    successGetLoginToken(token){
        console.log("Jackpot Token : " +token);
        window.jackpotToken = [REDACTED];
        this.jpDataManager.receiveJPToken();
    },
    successGetAcount(name, credit) {
        this.playername.string = name;
        this.playercredit.string = credit;
    },
    failedLogin(){
        console.log("On fail Login");
        this.disableLoading();
        if (this.errorView != null) {
            this.errorView.show("Login Failed...",0);
        }
    },
    failedGetToken(){
        this.disableLoading();
        if (this.errorView != null) {
            this.errorView.show("Failed To Get Token...",0);
        }
    },
    clickBtn(){
        var audioID = cc.audioEngine.playEffect(this.btnClip, false);
    },
    // update (dt) {},
});
