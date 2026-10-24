var MobileSocket = require("MobileSocket");

cc.Class({
    extends: cc.Component,

    properties: {
        controller: cc.Node,
        playerEdit: cc.EditBox,
        passwordEdit: cc.EditBox,
        togger: cc.Node,
        toggerTick: cc.Node,
        isRemember: 0,
        loginBtn: cc.Node,
        errorView:cc.Node,
        loadingPage:cc.Node,
        bgmClip:{
            type: cc.AudioClip,
            default: null,
        },
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start() {
        var audioID = cc.audioEngine.playMusic(this.bgmClip);
        if (this.getRemember() == null) {
            this.isRemember = 0;
            this.setRemember("0");
        }
        if (this.errorView != null) {
            this.errorView = this.errorView.getComponent("MyGameLobbyErrorView");
            this.errorView.controller = this;
        }
        if (this.getRemember() == "1") {
            this.isRemember = 1;
            this.playerEdit.string = this.getId();
            this.passwordEdit.string = this.getPass();
            this.toggerTick.active = true;
        } else {
            this.isRemember = 0;
            this.toggerTick.active = false;
        }

        if (this.loginBtn != null)
            this.loginBtn.on('click', this.onRequestLogin, this);
        if (this.togger != null)
            this.togger.on('click', this.clickTogger, this);

        var data = cc.sys.localStorage.getItem("SlotBackFromLobby");
        if(data == 1){
            cc.sys.localStorage.setItem("SlotBackFromLobby",0);
            this.playerEdit.string = this.getId();
            this.passwordEdit.string = this.getPass();
            this.onRequestLogin();
        }
        
        document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    },
    getId: function () {
        var data = cc.sys.localStorage.getItem("SlotId");
        return data;
    },
    getPass: function () {
        var data = cc.sys.localStorage.getItem("SlotPass");
        return data;
    },
    setPass: function (value) {
        cc.sys.localStorage.setItem("SlotPass", value);
    },
    setId: function (value) {
        cc.sys.localStorage.setItem("SlotId", value);
    },
    getRemember: function () {
        var data = cc.sys.localStorage.getItem("SlotRemember");
        return data;
    },
    setRemember: function (value) {
        cc.sys.localStorage.setItem("SlotRemember", value);
    },
    clickTogger() {
        // console.log("clickTogger");
        if (this.togger.isRemember == 1) {
            this.setRemember("0");
            this.togger.isRemember = 0;
            this.toggerTick.active = false;
        } else {
            this.setRemember("1");
            this.togger.isRemember = 1;
            this.toggerTick.active = true;
        }
    },
    onRequestLogin() {
        if (this.togger.isRemember == 1) {
            this.setRemember("1");
        }
        this.setId(this.playerEdit.string);
        this.setPass(this.passwordEdit.string);
        this.loadingPage.active = true;
        console.log(this.playerEdit.string +" / " +this.passwordEdit.string);
        // this.controller.clickBtn();
        this.onMobileSessionLogin(this.playerEdit.string, this.passwordEdit.string);

        // this.successLogin();
    },

    onMobileSessionLogin(username, password) {
        //Global.login = username;
        //Global.password = [REDACTED];
        // this.controller.enableLoading();
        
        MobileSocket.onSessionLogin(this, username, password);
    },

    successLogin() {
        console.log("On Success Login");
        // this.node.active = false;
        // this.controller.disableLoading();
        //this.node.active = false;
        // this.controller.successLogin();
        // console.log(MobileSocket.session);
        // let str = "http://0.0.0.0:8980/st/public/lobbyCrWeb.html?r="+ Math.random() + '&loginToken=' + MobileSocket.session;
        // window.open(str)

        // cc.director.preloadScene("MyLobby",function(count,total,event){
        // }, function () {         
        //     cc.audioEngine.stopMusic();
        //     cc.audioEngine.stopEffect();
        //     // cc.log("Next scene preloaded");
        //     cc.director.loadScene("MyLobby");
        // });
        
        
        MobileSocket.setCookie("session",MobileSocket.session);
        MobileSocket.setCookie("sessionToken",MobileSocket.sessionToken);
        MobileSocket.setCookie("getId",this.getId());
        window.jackpotToken = [REDACTED];
        // this.onRequestGameToken();
        //cc.director.loadScene("MyThaiLobby");
        //MobileSocket.onSessionGetLoginToken(this);
        window.location.href = "../lobbymobile/index.html";
    },
    onRequestGameToken(){
        // this.enableLoading();
        console.log("onRequestGameToken ");
        MobileSocket.onGetTangkasGameToken(this, 12);

    },
    successGetToken(token){
        // this.disableLoading();
        console.log("Success Token : [REDACTED];
        MobileSocket.setCookie("token",token);
        MobileSocket.gameToken = [REDACTED];
        window.location.href = "../../secure/game/tangkasmobile/index.html";
        // window.location.href = "../lobbymobile/index.html";
    },
    failedGetToken(){
        this.loadingPage.active = false;
        this.errorView.show("Fail to get token.",0);
    },
    failedLogin() {
        this.loadingPage.active = false;
        this.errorView.show("Fail to login.",0);
    },
    // update (dt) {},
});