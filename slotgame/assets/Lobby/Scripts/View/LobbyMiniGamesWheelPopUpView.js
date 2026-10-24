var constants = require('DJSlotConstants');
var utils = require('Utils');

cc.Class({
    extends: cc.Component,

    properties: {
        lobbyController: cc.Node,
        mainParent: cc.Node,
        popUpContent: cc.Node,
        winAmountL: cc.Label,
        exitB: cc.Button,
    },

    onLoad: function () {
        this.lobbyController = this.lobbyController.getComponent('LobbyController');

        var exitBClickEventHandler = new cc.Component.EventHandler();
        exitBClickEventHandler.target = this.node;
        exitBClickEventHandler.component = "LobbyMiniGamesWheelPopUpView";
        exitBClickEventHandler.handler = "onClickExitB";
        this.exitB.clickEvents.push(exitBClickEventHandler);

        this.mainParent.active = true;
    },

    checkVisibility: function () {
        utils.log("MiniGameWheelPopupView::mainParent::" + this.mainParent.active);
        utils.log("MiniGameWheelPopupView::popUpContent::" + this.popUpContent.active);
    },

    updateWinAmount: function(winAmount)
    {
        this.winAmountL.string = winAmount.toString();
    },

    show: function () {
        this.mainParent.active = true;
        this.popUpContent.active = true;
        this.popUpContent.setScale(0, 0);
        this.popUpContent.runAction(
            cc.ScaleTo(1, 1, 1).easing(cc.easeElasticOut(1)));

    },

    onClickExitB: function () {
        utils.log("onClickExitB");
        this.hide();
        this.lobbyController.endMiniGameWheel();
    },


    hide: function () {
        utils.log("minigameswheelpopupview::hide");
        this.mainParent.active = false;
        this.popUpContent.active = false;
    },

});
