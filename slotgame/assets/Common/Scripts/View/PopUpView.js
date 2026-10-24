
var utils = require('Utils');
var constants = require('DJSlotConstants');
var config = require('BaseConfig');

cc.Class({
    extends: cc.Component,

    properties: {
        gameController: cc.Node,
        lobbyController: cc.Node,
        parent: cc.Node,
        contentParent: cc.Node,
        title: cc.Label,
        content: cc.Label,
        forceExit: false,
        exitBGo: cc.Node,
        exitB: cc.Button,
        fullScreenBGo: cc.Node,
        fullScreenB: cc.Button,
        yesBGo: cc.Node,
        yesB: cc.Button,
        noBGo: cc.Node,
        noB: cc.Button,
        actionType_ExitApp: 0,
        actionType_Hide: 1,
        actionType_BackToLogin: 2,
        actionType_BackToLobby: 3,
        layout_twoB_width: 250,
        layout_oneB_width: 115,
    },

    init: function () {
        if (this.gameController != null) {
            this.gameController = this.gameController.getComponent(config.SCRIPT_PREFIX + 'GameController');
        }
        else if (this.lobbyController != null) {
            this.lobbyController = this.lobbyController.getComponent('LobbyController');
        }

        if (this.exitB != null) {
            var buttonEventHandler = new cc.Component.EventHandler();
            buttonEventHandler.target = this.node; //这个 node 节点是你的事件处理代码组件所属的节点
            buttonEventHandler.component = "PopUpView";
            buttonEventHandler.handler = "onClick";
            this.exitB.clickEvents.push(buttonEventHandler);
        }
    },

    start: function () {

    },

    hide: function () {
        this.node.stopAllActions();
        this.setGameObjectStatus(this.parent, false);
        this.setGameObjectStatus(this.contentParent, false);
        this.setGameObjectStatus(this.fullScreenBGo, false);
        this.setGameObjectStatus(this.exitBGo, false);
        this.setExitBInteractable("", { a: false });
    },
    testShowMessage(){
        //this.show("Error", "You have been disconnected", false, true, false, "null","null");
    },
    show: function (title, content, forceExit, isShowYesB, isShowNoB, yesActionType, noActionType) {
        console.log("Show Pop Up : " +title);
        this.parent.active = true;
        this.contentParent.active = true;
        //this.contentParent.setScale(0, 0);
        //this.contentParent.runAction(
        //    cc.ScaleTo(1, 1, 1).easing(cc.easeElasticOut(1)));

        this.node.stopAllActions();
        if (this.forceExit == false) {
            this.forceExit = forceExit;
        }
        if (this.forceExit == false) {
            this.setExitBInteractable("", { a: true });
            /*
            var action = new cc.sequence(
                cc.delayTime(0.5),
                cc.callFunc(this.setExitBInteractable, this, { a: true }),
            );
            this.node.runAction(action);
            */
        }
        else {
            this.setExitBInteractable("", { a: false });
        }
        this.yesBGo.active = isShowYesB;
        this.noBGo.active = isShowNoB;
        if (isShowYesB == true && isShowNoB == false) {
            this.yesBGo.setPosition(0, 0);
        }
        else if (isShowYesB == true && isShowNoB == true) {
            this.yesBGo.setPosition(-70, 0);
            this.noBGo.setPosition(70, 0);
        }
        this.title.string = title;
        this.content.string = content;
        this.setGameObjectStatus(this.parent, true);
        this.yesB.clickEvents = [];
        this.noB.clickEvents = [];
        // if (yesActionType != null) {
        //     if (yesActionType == this.actionType_ExitApp) {
        //         var buttonEventHandler = new cc.Component.EventHandler();
        //         buttonEventHandler.target = this.node; //这个 node 节点是你的事件处理代码组件所属的节点
        //         buttonEventHandler.component = "PopUpView";
        //         buttonEventHandler.handler = "exitApp";
        //         this.yesB.clickEvents.push(buttonEventHandler);
        //     }
        //     else if (yesActionType == this.actionType_BackToLogin) {
        //         var buttonEventHandler = new cc.Component.EventHandler();
        //         buttonEventHandler.target = this.node; //这个 node 节点是你的事件处理代码组件所属的节点
        //         buttonEventHandler.component = "PopUpView";
        //         buttonEventHandler.handler = "backToLogin";
        //         this.yesB.clickEvents.push(buttonEventHandler);
        //     }
        //     else if (yesActionType == this.actionType_BackToLobby) {
        //         var buttonEventHandler = new cc.Component.EventHandler();
        //         buttonEventHandler.target = this.node; //这个 node 节点是你的事件处理代码组件所属的节点
        //         buttonEventHandler.component = "PopUpView";
        //         buttonEventHandler.handler = "backToLobby";
        //         this.yesB.clickEvents.push(buttonEventHandler);
        //     }
        // }
        // if (noActionType != null) {
        //     if (noActionType == this.actionType_Hide) {
        //         var buttonEventHandler = new cc.Component.EventHandler();
        //         buttonEventHandler.target = this.node; //这个 node 节点是你的事件处理代码组件所属的节点
        //         buttonEventHandler.component = "PopUpView";
        //         buttonEventHandler.handler = "hide";
        //         this.noB.clickEvents.push(buttonEventHandler);
        //     }
        // }
    },

    setExitBInteractable: function (target, data) {
        var val = data.a;
        if (val == true) {
            this.fullScreenB.interactable = true;
            this.setGameObjectStatus(this.fullScreenBGo, true);
            this.setGameObjectStatus(this.exitBGo, true);
        }
        else {
            this.fullScreenB.interactable = false;
            this.setGameObjectStatus(this.fullScreenBGo, false);
            this.setGameObjectStatus(this.exitBGo, false);
        }
    },


    onClick: function () {
        if (this.forceExit == true) {
            return;
        }
        this.hide();
    },

    exitApp: function () {
        if (this.gameController != null) {
            this.gameController.onExitApp();
        }
        else if (this.lobbyController != null) {
            //cc.game.end();
            this.lobbyController.onExitApp();
        }
    },

    backToLogin: function () {
        if (this.gameController != null) {
            this.gameController.onExitGameToLogin();
        }
        else if (this.lobbyController != null) {
            this.lobbyController.onExitGameToLogin();
        }
    },

    backToLobby: function () {
        if (this.gameController != null) {
            this.gameController.onExitGameToLobby();
        }
    },
    refresh(){
        window.refresh();
    },

    setGameObjectStatus: function (gameObject, status) {
        if (gameObject != null) {
            gameObject.active = status;
        }
    }


});
