var MobileSocket = require("MobileSocket")

cc.Class({
    extends: cc.Component,

    properties: {
        controller: cc.Node,
        jpDataManager: cc.Node,
        loadingScenePage: cc.Node,
        playerNameLabel: cc.Label,
        playerCreditLabel: cc.Label,

        gameSceneName: [cc.String],
        gameId: [cc.String],
        gameCode: [cc.String],
        gameParam: [cc.String],
        gameButton: [cc.Node],

        currentGameId: 0,

        webViewPrefab: cc.WebView,
        webViewPrefab2: cc.WebView,
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start() {
        if (this.loadingScenePage != null) {
            this.loadingScenePage = this.loadingScenePage.getComponent("LoadingEffect");
        }
        for (let i = 0; i < this.gameButton.length; i++) {
            this.gameButton[i].on('click', function () {
                this.onRequestGameToken(i)
            }, this);
        }

        if (this.jpDataManager != null) {
            this.jpDataManager = this.jpDataManager.getComponent("MyJackpotDataManager");
        }
        if(!cc.sys.isNative){
            
        }
        else{
            this.successLogin();
        }
    },

    successLogin() {
        if (this.jpDataManager != null) {
            this.jpDataManager.receiveToken(MobileSocket.session);
        }
        MobileSocket.onSessionGetAccount(this);
    },
    successGetAcount(name, credit) {
        this.playerNameLabel.string = name;
        this.playerCreditLabel.string = credit;
    },
    onTesting() {
        console.log("123");
    },
    onRequestGameToken(i) {
        this.controller.clickBtn();
        console.log("onRequestGameToken : " + i);
        // 31 slot/arcade
        // 32 fish
        // 3 tangkas
        if (this.loadingScenePage != null)
            this.loadingScenePage.node.active = true;
        this.currentGameId = i;
        MobileSocket.onGetGameToken(this, this.gameId[this.currentGameId], this.gameCode[this.currentGameId], this.gameParam[this.currentGameId]);
        // let _sceneName = this.gameSceneName[this.currentGameId];
        // cc.director.loadScene(_sceneName);
    },
    failedGetToken() {
        console.log("failedGetToken : [REDACTED]");
        this.controller.failedGetToken();
    },
    successGetToken(token) {

        MobileSocket.gameToken = [REDACTED];
        MobileSocket.loading = this.loadingScenePage;
        let _sceneName = this.gameSceneName[this.currentGameId];
        if (this.loadingScenePage != null)
            this.loadingScenePage.node.active = true;
        this.controller.enableLoading();

        if (_sceneName != "") {
            // cc.director.loadScene(_sceneName);
            cc.director.preloadScene(_sceneName,function(count,total,event){
                // console.log(" Count : " +count);
                // console.log(" Total : " +total);
                // console.log(event);
    
                // if(MobileSocket.loading!=null)
                // MobileSocket.loading.show(count,total);
            }, function () {         
                cc.audioEngine.stopMusic();
                cc.audioEngine.stopEffect();
                // cc.log("Next scene preloaded");
                cc.director.loadScene(_sceneName);
            });
        }
        else {
            if (this.webView != null) {
                // this.webView.
            }

            // this.webView = cc.instantiate(this.webViewPrefab);
            // console.log(this.currentGameId);
            if (this.currentGameId == 4) {
                this.controller.disableLoading();
                this.webViewPrefab.node.active = true;
                this.webViewPrefab.url = "http://example.invalid?token=" + token + "&type=live&mobile=1";//no vpn (gp)
            }
            else if (this.currentGameId == 5) {
                this.controller.disableLoading();
                let url = "http://example.invalid/welcome.aspx?token=" + token + "&locale=en&sb=http://example.invalid&device=m"; //vpn (sbo)
                // this.webViewPrefab2.node.active = true;
                // this.webViewPrefab2.url = url;
                cc.sys.openURL(url);
            }
            else if (this.currentGameId == 6) {      
                this.controller.disableLoading();          
                let url = token.replace("https://example.invalid", "https://example.invalid/h5/");//vpn (all bet)
                // this.webViewPrefab.node.active = true;
                // this.webViewPrefab.url = token;
                cc.sys.openURL(url);
            }
            else {
                this.controller.disableLoading();
                let url = token;
                cc.sys.openURL(url);
                // this.webViewPrefab.node.active = true;
                // this.webViewPrefab.url = token; //vpn (play tech)
                // this.webViewPrefab.url = token; //vpn (AG)
                // this.webViewPrefab.url = token; //vpn (MG) 
            }
        }
        //console.log(_sceneName);
       
    },
    failedGetToken() {

    },

    onRequestGameIdList(){
        MobileSocket.onRequestGameIdList(this);
    },
    onRequestTransferInGame(){
        // 27463
        MobileSocket.onRequestTransferInGame(this,"27463",1);
    },
    onRequestTransferOutGame(){
        // 27463
        MobileSocket.onRequestTransferOutGame(this,"27463",1);
    },
    
    // update (dt) {},
});