var MobileSocket = require("MobileSocket");
cc.Class({
    extends: cc.Component,

    properties: {
        jpDataManager: cc.Node,
        loginView: cc.Node,
        lobbyView: cc.Node,
        settingView: cc.Node,
        errorView: cc.Node,
        loading: cc.Node,
        bgmClip:{
            type: cc.AudioClip, 
            default: []
        },
        btnClip: {
            type: cc.AudioClip,
            default: null,
        },
        gameButton: [cc.Node],
        gameType: [cc.String],
        gameCategory: [cc.String],
        gameLink: [cc.String],
        gameFavor: [cc.Node],
        currentGameType: 0,
        playerNameLabel: cc.Label,
        playerCreditLabel: cc.Label,

        thumnailParent: cc.Node,
        recentPlayClick: cc.Node,
        recentPlaySprite: [cc.SpriteFrame],
        recentPlayStatus: 0,
        favorClick: cc.Node,
        favorSprite: [cc.SpriteFrame],
        favorStatus: 0,
        logoutBtn: cc.Node,

        categoryBtn: [cc.Button],
        categoryBtnOn: [cc.Node],
        categoryFilterNum: [cc.Integer],
        currentCategory: cc.Integer,
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start() {
        var audioID = cc.audioEngine.playMusic(this.bgmClip[Math.floor(Math.random() * this.bgmClip.length)]);

        this.recentPlayClick.on('click', this.enableRecentlyPlayPage, this);
        this.favorClick.on('click', this.enableFavouritePage, this);
        if (this.loginView != null) {
            this.loginView = this.loginView.getComponent("MyGameLoginView");
            this.loginView.controller = this;
        }
        if (this.lobbyView != null) {
            this.lobbyView = this.lobbyView.getComponent("MyGameLobbyView");
            this.lobbyView.controller = this;
        }
        if (this.settingView != null) {
            this.settingView = this.settingView.getComponent("MyGameLobbySettingView");
            this.settingView.controller = this;
        }
        if (this.errorView != null) {
            this.errorView = this.errorView.getComponent("MyGameLobbyErrorView");
            this.errorView.controller = this;
        }

        if (this.jpDataManager != null) {
            this.jpDataManager = this.jpDataManager.getComponent("MyJackpotDataManager");
        }
        for (let i = 0; i < this.gameButton.length; i++) {
            this.gameButton[i].on('click', function () {
                this.onRequestGameToken(i)
            }, this);
            this.gameFavor[i].on('click', function () {
                let type = this.gameType[i];
                this.setFavourite(type)
            }, this);

            var data = cc.sys.localStorage.getItem(this.gameType[i]);
            if (data == 0 || data == null) {
                this.gameFavor[i].children[0].active = false;
            } else if (data == 1) {
                this.gameFavor[i].children[0].active = true;
            }
        }

        if (window.isWebSite != "1") {
            let i = MobileSocket.getCookie("session");
            if (i != null) {
                MobileSocket.restoreCookieDetail();
            }
            MobileSocket.onSessionGetAccount(this);
            this.logoutBtn.on('click', this.logOut, this);
            window.jackpotToken = i;
            // this.jpDataManager.receiveJPToken();
        } else {

            let gamename = "";
            let gamecredit = "";
            if (window.gameName != null) {
                gamename = window.gameName;
            }
            if (window.gameCredit != null) {
                gamecredit = window.gameCredit;
            }
            this.playerNameLabel.string = gamename;
            this.playerCreditLabel.string = gamecredit;
        }
        for (let i = 0; i < this.categoryBtn.length; i++) {
            let l = this.categoryFilterNum[i];
            this.categoryBtn[i].node.on('click', function () {
                this.onRequestFilterCategory(l)
            }, this);
        }
        //MobileSocket.onSessionGetLoginToken(this);
    },
    PlayRandMusic: function () {
        cc.audioEngine.playMusic(this.bgmClip[Math.floor(Math.random() * this.bgmClip.length)], true);
    },

    RandMusicFinish: function () {
        if (cc.audioEngine.isMusicPlaying()) {
            // cc.log("music is playing");
        } else {
            // cc.log("music is off");
            this.PlayRandMusic();
        }
    },
    logOut() {
        window.location.href = "../loginmobile/index.html";
    },
    enableFavouritePage() {
        if (this.favor == 1) {
            this.favor = 0;
            this.resetDefaultButton();
            this.favorClick.getComponent(cc.Sprite).spriteFrame = this.favorSprite[1];
        } else {
            this.favor = 1;
            this.favorClick.getComponent(cc.Sprite).spriteFrame = this.favorSprite[0];
            for (let j = 0; j < this.gameButton.length; j++) {
                var data = cc.sys.localStorage.getItem(this.gameType[j]);
                if (data == 1) {
                    this.gameButton[j].active = true;
                } else {
                    this.gameButton[j].active = false;
                }
            }
        }

    },
    enableRecentlyPlayPage() {
        // console.log("enableRecentlyPlayPage");
        if (this.recentPlayStatus == 1) {
            this.recentPlayStatus = 0;
            this.recentPlayClick.getComponent(cc.Sprite).spriteFrame = this.recentPlaySprite[0];
            this.resetDefaultButton();
        } else {
            this.recentPlayStatus = 1;
            this.recentPlayClick.getComponent(cc.Sprite).spriteFrame = this.recentPlaySprite[1];
            var arr;
            if (this.getRecentlyPlay() != null) {
                arr = this.getRecentlyPlay();
            }
            // console.log(arr);
            for (let j = 0; j < this.gameButton.length; j++) {
                this.gameButton[j].active = false;
            }
            if (arr == null) {
                return;
            }
            arr = JSON.parse(arr);

            for (let i = arr.length - 1; i >= 0; i--) {
                for (let j = 0; j < this.gameButton.length; j++) {
                    if (this.gameType[j] == arr[i]) {
                        this.gameButton[j].active = true;
                        this.thumnailParent.insertChild(this.gameButton[j], 0);
                    }
                }
            }
        }

    },
    resetDefaultButton() {
        for (let j = 0; j < this.gameButton.length; j++) {
            this.gameButton[j].active = true;
            this.thumnailParent.insertChild(this.gameButton[j], 0);
        }
    },
    addRecentlyPlay(gameId) {
        var arr;
        if (this.getRecentlyPlay() != null) {
            arr = this.getRecentlyPlay();
        }
        // console.log(arr);
        if (arr != null) {
            arr = JSON.parse(arr);

            for (let i = arr.length - 1; i >= 0; i--) {
                if (gameId == arr[i]) {
                    arr.splice(i, 1);
                }
            }
        } else {
            arr = [];
        }
        // console.log(gameId);
        arr.unshift(gameId);

        this.setRecentlyPlay(JSON.stringify(arr));
    },
    setFavourite(gameId) {
        console.log(gameId);
        var data = cc.sys.localStorage.getItem(gameId);

        if (data == null) {
            cc.sys.localStorage.setItem(gameId, 1);
            for (let j = 0; j < this.gameButton.length; j++) {
                if (this.gameType[j] == gameId) {
                    this.gameFavor[j].children[0].active = true;
                }
            }
        } else {
            if (data == 0) {
                cc.sys.localStorage.setItem(gameId, 1);
                for (let j = 0; j < this.gameButton.length; j++) {
                    if (this.gameType[j] == gameId) {
                        this.gameFavor[j].children[0].active = true;
                    }
                }
            } else if (data == 1) {
                cc.sys.localStorage.setItem(gameId, 0);
                for (let j = 0; j < this.gameButton.length; j++) {
                    if (this.gameType[j] == gameId) {
                        this.gameFavor[j].children[0].active = false;
                    }
                }
            }
        }
    },
    getRecentlyPlay() {
        var data = cc.sys.localStorage.getItem("recentlyPlay");
        return data;
    },
    setRecentlyPlay: function (value) {
        cc.sys.localStorage.setItem("recentlyPlay", value);
    },
    // getFavourite(){
    //     var data = cc.sys.localStorage.getItem("favourite");
    //     return data;
    // },
    // setFavourite: function (value) {
    //     cc.sys.localStorage.setItem("favourite", value);
    // },
    successGetLoginToken(token) {
        window.jackpotToken = [REDACTED];
        this.jpDataManager.receiveJPToken();
    },
    successGetAcount(name, credit) {
        this.playerNameLabel.string = name;
        this.playerCreditLabel.string = credit;
    },
    clickBtn() {
        var audioID = cc.audioEngine.playEffect(this.btnClip, false);
    },
    successLogin() {
        this.disableLoading();
        if (this.lobbyView != null)
            this.lobbyView.successLogin();
    },
    failedLogin() {
        console.log("On fail Login");
        this.disableLoading();
        if (this.errorView != null) {
            this.errorView.show("Login Failed...", 0);
        }
    },
    failedGetToken() {
        this.disableLoading();
        if (this.errorView != null) {
            this.errorView.show("Failed To Get Token...", 0);
        }
    },
    failed() {
        this.disableLoading();
        if (this.errorView != null) {
            this.errorView.show("Your request has error.Please contact system adminstrator...", 0);
        }
    },
    enableLoading() {
        this.loading.active = true;
    },
    disableLoading() {
        this.loading.active = false;
    },

    onRequestGameToken(i) {
        // this.enableLoading();
        this.addRecentlyPlay(this.gameType[i]);
        this.clickBtn();
        this.currentGameType = i;

        if (this.gameCategory[this.currentGameType] == "21") {
            MobileSocket.onGetLiveCasinoToken(this, this.gameType[i], this.gameCategory[this.currentGameType]);
            return;
        } else if (this.gameCategory[this.currentGameType] == "33") {
            MobileSocket.onGetPokDengToken(this, this.gameType[i], this.gameCategory[this.currentGameType]);
            return;
        } else if (this.gameCategory[this.currentGameType] == "32") {
            MobileSocket.onGetPokDengToken(this, this.gameCategory[this.currentGameType], this.gameType[i]);
            return;
        } else if (this.gameCategory[this.currentGameType] == "-1") {
            window.location.href = "../../secure/game2/ionlivecasino/index.html";
        } else {
            // MobileSocket.onGetSlotToken(this,31);
            // return;
            if (window.isWebSite != "1") {
                MobileSocket.onGetGameToken(this, 17, 17, this.gameType[i]);
                // MobileSocket.onGetSlotToken(this,31);
            } else {
                window.location.href = "../slotCrWeb.html?r=" + Math.random() + "&gameType=" + i;
            }
            // return;
        }



    },
    successGetLiveCasinoToken(token) {
        if (this.gameCategory[this.currentGameType] == "21") {
            let url = "http://example.invalid?token=" + token + "&type=live&mobile=1"; //no vpn (gp)
            cc.sys.openURL(url);
        } else if (this.gameCategory[this.currentGameType] == "32") {
            window.location.href = "http://example.invalid/fs/secure/game/h5oceanking2/index.html?r=" + Math.random() + "&gameToken=" + token;
        } else {
            // MobileSocket.setCookie("LobbyLink","http://localhost:7456/");//
            //window.location.href ="http://gamepd.blogcity.city/pd/public/pokdengWeb.html?r="+Math.random() +"&loginToken=[REDACTED];
            // window.location.href = "http://gamepd.blogcity.city/pd/secure/game2/index.html?r="+Math.random() +"&loginToken=[REDACTED];
            window.location.href = "http://gamepd.blogcity.city/pd/secure/game2/index.html?r=" + Math.random() + "&gameToken=" + token;
            // cc.sys.openURL(url);
        }

    },
    successGetSlotToken(token) {
        // let url = "http://example.invalid/st/public/slotCrWeb2.html?r="+Math.random() +"&gameType="+ this.currentGameType+"&loginToken=[REDACTED];
        // console.log(url);

        //cc.sys.openURL(url);
        window.location.href = "../slotCrWeb2.html?r=" + Math.random() + "&gameType=" + this.currentGameType + "&loginToken=" + token;

        // this.disableLoading();
        console.log("Success Token : " + token);
        // MobileSocket.setCookie("token",token);
        // if (this.errorView != null) {
        //     this.errorView.show(MobileSocket.getCookie("token"),0);
        // }

        // window.location.href = "../../secure/game2/"+this.gameLink[this.currentGameType]+"/index.html";
    },
    successGetToken(token) {
        this.disableLoading();
        this.jpDataManager.cleanUp();
        console.log("Success Token : " + token);
        MobileSocket.setCookie("token", token);
        // if (this.errorView != null) {
        //     this.errorView.show(MobileSocket.getCookie("token"),0);
        // }
        window.location.href = "../../secure/game2/"+this.gameLink[this.currentGameType]+"/index.html";
    },

    onRequestFilterCategory(category) {
        for (let i = 0; i < this.categoryBtn.length; i++) {
            let l = this.categoryFilterNum[i];
            if (category == l && this.currentCategory != category) {
                // this.categoryBtn[i].interactable = false;
                this.categoryBtnOn[i].active = true;
            } else {
                // this.categoryBtn[i].interactable = true;
                this.categoryBtnOn[i].active = false;
            }
        }
        //console.log(this.currentCategory + " / " + category);
        if (this.currentCategory == category) {
            this.currentCategory = 0;
            category = 0;
        } else
            this.currentCategory = category;

        for (let j = 0; j < this.gameButton.length; j++) {
            if (this.gameCategory[j] == category || category == 0)
                this.gameButton[j].active = true;
            else
                this.gameButton[j].active = false;
        }

        // if (category == 21) {
        //     this.gameButton[this.gameButton.length - 1].active = true;
        // }
    },


    update (dt) {
        this.RandMusicFinish();
    },
});