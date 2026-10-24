var constants = require('DJSlotConstants');
var utils = require('Utils');

cc.Class({
    extends: cc.Component,

    properties: {
        lobbyController: cc.Node,
        mainParent: cc.Node,
        wheelParent: cc.Node,
        wheelContent: cc.Node,
        wheelB: cc.Button,
        exitWheelB: cc.Button,
    },

    onLoad: function () {
        this.lobbyController = this.lobbyController.getComponent('LobbyController');

        var wheelBClickEventHandler = new cc.Component.EventHandler();
        wheelBClickEventHandler.target = this.node;
        wheelBClickEventHandler.component = "LobbyMiniGamesPopUpView";
        wheelBClickEventHandler.handler = "onClickWheelB";
        this.wheelB.clickEvents.push(wheelBClickEventHandler);

        var exitWheelBClickEventHandler = new cc.Component.EventHandler();
        exitWheelBClickEventHandler.target = this.node;
        exitWheelBClickEventHandler.component = "LobbyMiniGamesPopUpView";
        exitWheelBClickEventHandler.handler = "onClickExitWheelB";
        this.exitWheelB.clickEvents.push(exitWheelBClickEventHandler);
    },

    show: function (type) {
        this.mainParent.active = true;
        if (type == constants.SERVERDATAKEYS.LOBBY_MINIGAME_WHEEL) {
            this.wheelParent.active = true;
            this.wheelContent.setScale(0, 0);
            this.wheelContent.runAction(
                cc.ScaleTo(1, 1, 1).easing(cc.easeElasticOut(1)));

        }
    },

    onClickExitWheelB: function () {
        this.hide();
    },

    onClickWheelB: function () {
        this.hide();
        this.lobbyController.onClickWheelB();
    },

    hide: function () {
        this.mainParent.active = false;
        this.wheelParent.active = false;
    },

});
