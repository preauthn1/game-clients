var PopUpView = require("PopUpView");
var constants = require('DJSlotConstants');
var utils = require('Utils');
cc.Class({
    extends: cc.Component,

    properties: {
        versionL: cc.Label,
        userNameL: cc.EditBox,
        passwordL: cc.EditBox,
        loginB: cc.Button,
        popUpView: cc.Node,
        maintainView: cc.Node,
        multiLoginController: cc.Node,
        usernameT: cc.Toggle,
        passwordT: cc.Toggle,
        splashScreen: cc.Node,
    },

    onLoad: function () {
        this.multiLoginController = this.multiLoginController.getComponent('MultiLoginController');
        this.maintainView = this.maintainView.getComponent('LoginMaintenanceView');
        this.popUpView = this.popUpView.getComponent('PopUpView');
        this.popUpView.show("", "connecting...", false);

        var buttonEventHandler = new cc.Component.EventHandler();
        buttonEventHandler.target = this.node; //这个 node 节点是你的事件处理代码组件所属的节点
        buttonEventHandler.component = "LoginMainView";
        buttonEventHandler.handler = "onClickLogin";
        this.loginB.clickEvents.push(buttonEventHandler);
    },

    /*
    startPreloading:function(){
        this._stateStr = "正在加载资源，请稍候";
        this._isLoading = true;
        var self = this;
        
        cc.loader.onProgress = function ( completedCount, totalCount,  item ){
            //console.log("completedCount:" + completedCount + ",totalCount:" + totalCount );
            if(self._isLoading){
                self._progress = completedCount/totalCount;
            }
        };
        
        cc.loader.loadResAll("textures", function (err, assets) {
            self.onLoadComplete();
        });      
    },
    
    onLoadComplete:function(){
        this._isLoading = false;
        this._stateStr = "准备登陆";
        cc.director.loadScene("login");
        cc.loader.onComplete = null;
    },
    */

    onCheckVersionComplete: function (newVersion) {
        this.popUpView.hide();
        this.versionL.string = "v." + newVersion;
        //cc.director.loadScene("Lobby");
    },


    onClickLogin: function () {
        if (this.multiLoginController.isSimulation == true) {
            this.goLobby();
        }
        else {
            if (this.checkLogin() == true) {
                this.popUpView.show("", "connecting...", false);
                this.multiLoginController.onLogin(this.userNameL.string, this.passwordL.string, null);
            }
            else {
                var checkUsernameLength = this.checkUsernameLength();
                var checkPasswordLength = this.checkPasswordLength();
                if (checkUsernameLength == false) {
                    this.popUpView.show(constants.constants.userNameZeroTitle, constants.constants.userNameZeroContent, false);
                }
                else if (checkPasswordLength == false) {
                    this.popUpView.show(constants.constants.passwordZeroTitle, constants.constants.passwordZeroContent, false);
                }
            }
        }
    },

    invalidLogin: function () {
        this.popUpView.show("", "Invalid Login", false);
        this.userNameL.string = "";
        this.passwordL.string = "";
        this.usernameT.isChecked = false;
        this.passwordT.isChecked = false;
        //cc.sys.localStorage.removeItem("username");  
        //cc.sys.localStorage.removeItem("password");     
    },

    goLobby: function () {
        cc.director.loadScene(constants.constants.lobbyScene);
    },

    showMaintainView: function (from, to) {
        this.maintainView.show(from, to);
    },

    onRequestNickname: function () {
        utils.log("not implemented onRequestNickname");
    },

    invalidNickname: function () {
        utils.log("not implemented invalidNickname");
    },

    checkLogin: function () {
        var checkUsernameLength = this.checkUsernameLength();
        var checkPasswordLength = this.checkPasswordLength();
        if (checkUsernameLength == true && checkPasswordLength == true) {
            return true;
        }
        else {
            return false;
        }
    },

    checkUsernameLength: function () {
        if (this.userNameL.string.length > 0) {
            return true;
        }
        else {
            return false;
        }
    },

    checkPasswordLength: function () {
        if (this.passwordL.string.length > 0) {
            return true;
        }
        else {
            return false;
        }
    },

    showPopUpError: function (title, content, forceExit) {
        this.popUpView.show(title, content, forceExit);
    },

    setGameObjectStatus(gameObject, status) {
        gameObject.active = status;
    },

    checkUserNameEditBox: function () {
        var checkUsernameLength = this.checkUsernameLength();
        if (checkUsernameLength == false) {
            this.popUpView.show(constants.constants.userNameZeroTitle, constants.constants.userNameZeroContent, false);
        }
    },

    checkPasswordEditBox: function () {
        var checkPasswordLength = this.checkPasswordLength();
        if (checkPasswordLength == false) {
            this.popUpView.show(constants.constants.passwordZeroTitle, constants.constants.passwordZeroContent, false);
        }
    },
});
