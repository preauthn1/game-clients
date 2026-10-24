var MobileSocket = require("MobileSocket");
cc.Class({
    extends: cc.Component,

    properties: {
        gameButton:cc.Node,
        playerNameLabel:cc.Label,
        playerCreditLabel:cc.Label,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.gameButton.on('click', this.onRequestGameToken, this);
        if(window.isWebSite != "1"){
           
            // this.logoutBtn.on('click', this.logOut, this);
            // window.jackpotToken = i;
            // this.jpDataManager.receiveJPToken();
        }else{

            // let gamename = "";
            // let gamecredit = "";
            // if(window.gameName!=null){
            //     gamename = window.gameName;
            // }
            // if(window.gameCredit!=null){
            //     gamecredit = window.gameCredit;
            // }
            // this.playerNameLabel.string = gamename;
            // this.playerCreditLabel.string = gamecredit;
        }
         let i = MobileSocket.getCookie("session");
         console.log(i);
            if(i!=null){
                MobileSocket.restoreCookieDetail();
            }
            MobileSocket.onSessionGetAccount(this);
    },
    successGetAcount(name, credit) {
        this.playerNameLabel.string = name;
        this.playerCreditLabel.string = credit;
    },
    start () {

    },
    onRequestGameToken(){
        // this.enableLoading();
        console.log("onRequestGameToken ");
        MobileSocket.onGetTangkasGameToken(this, 3);

    },
    successGetToken(token){
        // this.disableLoading();
        console.log("Success Token : [REDACTED];
        MobileSocket.setCookie("token",token);
        
        // if (this.errorView != null) {
        //     this.errorView.show(token,0);
        // }
        // window.location.href = "../../secure/game2/"+this.gameLink[this.currentGameType]+"/index.html?r="+Math.random();
        window.location.href = "../tangkasAceCrWeb.html?r="+Math.random()+"&loginToken=[REDACTED];
    },
    // update (dt) {},
});
