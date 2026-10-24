var constants = require('DJSlotConstants');
var playerPrefsController = require('PlayerPrefsController');

cc.Class({
    extends: cc.Component,

    properties: {
        lobbyController: cc.Node,
        parent: cc.Node,
        content: cc.Node,
        loadingView: cc.Node,
        audioController: cc.Node,
        logOutB: cc.Button,
        exitB: cc.Button,

        audioT: cc.Button,
        audioTSprite: cc.Sprite,
        audioOffSprite: {
            type: cc.Texture2D,
            default: null,
        },
        audioOnSprite: {
            type: cc.Texture2D,
            default: null,
        },
    },

    onLoad: function () {
        this.loadingView = this.loadingView.getComponent('BaseLoadingView');
        this.lobbyController = this.lobbyController.getComponent('LobbyController');
        this.audioController = this.audioController.getComponent('LobbyAudioController');

        var audioToggleEventHandler = new cc.Component.EventHandler();
        audioToggleEventHandler.target = this.node; //这个 node 节点是你的事件处理代码组件所属的节点
        audioToggleEventHandler.component = "LobbyOptionsView";
        audioToggleEventHandler.handler = "onClickAudioT";
        audioToggleEventHandler.customEventData = "";
        this.audioT.checkEvents.push(audioToggleEventHandler, audioToggleEventHandler.customEventData);

        var logOutBClickEventHandler = new cc.Component.EventHandler();
        logOutBClickEventHandler.target = this.node;
        logOutBClickEventHandler.component = "LobbyOptionsView";
        logOutBClickEventHandler.handler = "onClickLogOut";
        this.logOutB.clickEvents.push(logOutBClickEventHandler);

        var exitButtonEventHandler = new cc.Component.EventHandler();
        exitButtonEventHandler.target = this.node; //这个 node 节点是你的事件处理代码组件所属的节点
        exitButtonEventHandler.component = "LobbyOptionsView";
        exitButtonEventHandler.handler = "onClickExitB";
        this.exitB.clickEvents.push(exitButtonEventHandler);
    },

    start: function () {
        var isMute = playerPrefsController.instance.getIsMute();
        if (isMute == "false") {
            this.audioT.isChecked = true;
            this.updateSpriteFrame(this.audioTSprite, this.audioOnSprite);
        }
        else {
            this.audioT.isChecked = false;
            this.updateSpriteFrame(this.audioTSprite, this.audioOffSprite);
        }
    },

    onClickAudioT: function (event, customEventData) {
        if (this.audioT.isChecked == true) {
            playerPrefsController.instance.setIsMute("false");
            this.updateSpriteFrame(this.audioTSprite, this.audioOnSprite);
            this.audioController.updateMuteStatus();
        }
        else {

            playerPrefsController.instance.setIsMute("true");
            this.updateSpriteFrame(this.audioTSprite, this.audioOffSprite);
            this.audioController.updateMuteStatus();
        }
    },

    onClickLogOut: function () {
        this.lobbyController.onExitGameToLogin();
    },

    updateSpriteFrame: function (sprite, texture) {
        if (!sprite || !texture) {
            return;
        }
        var frame = new cc.SpriteFrame(texture);
        sprite.spriteFrame = frame;
    },

    show: function () {
        this.parent.active = true;
        this.parent.active = true;
        this.content.setScale(0, 0);
        this.content.runAction(
            cc.ScaleTo(1, 1, 1).easing(cc.easeElasticOut(1)));
    },

    hide: function () {
        this.parent.active = false;
    },

    onClickExitB: function () {
        this.hide();
    },
});
