var dm = require("SlotDataManager");
var utils = require('Utils');
cc.Class({
    extends: cc.Component,

    properties: {
        loginUrl: "",
        // foo: {
        //    default: null,      // The default value will be used only when the component attaching
        //                           to a node for the first time
        //    url: cc.Texture2D,  // optional, default is typeof default
        //    serializable: true, // optional, default is true
        //    visible: true,      // optional, default is true
        //    displayName: 'Foo', // optional
        //    readonly: false,    // optional, default is false
        // },
        // ...
    },

    // use this for initialization
    onLoad: function () {
        utils.log("onload::registerlistener");
        //dm.registerListener(this, 0);
    },

    
    onRequestCheckVersion: function (url) {
        dm.onRequestCheckVersion(url);
    },

    onCheckVersionSuccess: function (type, version, loginUrl, mainFrom, mainTo, downloadlink) {
        if (type == 0) {
            this.loginUrl = loginUrl;
            //this.onRequestLogin(loginUrl, Global.login, Global.password, null);
        }
        else {
            //lobbyMainView.MaintainResponse(mainFrom, mainTo);
        }
    },

    onRequestLogin: function (url, username, password, nickname) {
        utils.log("onRequestLogin");
        dm.onRequestLogin(url, username, password, nickname);
    },
});
