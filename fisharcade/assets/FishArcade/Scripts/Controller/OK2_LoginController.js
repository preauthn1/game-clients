var dataManager = require("OK2_FishDataManager")
cc.Class({
    extends: cc.Component,

    properties: {

    },

    start () {
        dataManager.registerListener(this, 0, null);
        dataManager.loginToToken(window.token, "example.invalid", 8801);
        // dataManager.loginToToken("31e067e518115b79c9298ef620a597ae", "0.0.0.0", 8840);
        
    },

    onLoginSuccess(){
        dataManager.removeListener(0);
        this.getComponent("OK2_GameController").startConnect();
    },
});
