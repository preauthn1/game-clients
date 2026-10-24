var playerPrefsController = require('PlayerPrefsController');
var constants = require('DJSlotConstants');
var utils = require('Utils');
var config = require('BaseConfig');

cc.Class({
    extends: cc.Component,

    properties: {
        gameController: cc.Node,
        audioController: cc.Node,
        popUpView: cc.Node,
        parent: cc.Node,
        lobbyB: cc.Button,
        paytableB: cc.Button,
        infoB: cc.Button,
        exitAppB: cc.Button,
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
        audioButton:cc.Button,
    },

    // use this for initialization
    init: function () {
        this.popUpView = this.popUpView.getComponent(config.SCRIPT_PREFIX + 'PopUpView');
        this.gameController = this.gameController.getComponent(config.SCRIPT_PREFIX + 'GameController');
        this.audioController = this.audioController.getComponent(config.SCRIPT_PREFIX + 'AudioController');

        var lobbyButtonEventHandler = new cc.Component.EventHandler();
        lobbyButtonEventHandler.target = this.node; //这个 node 节点是你的事件处理代码组件所属的节点
        lobbyButtonEventHandler.component = config.SCRIPT_PREFIX + "MenuView";
        lobbyButtonEventHandler.handler = "onClickLobbyB";
        this.lobbyB.clickEvents.push(lobbyButtonEventHandler);

        var paytableButtonEventHandler = new cc.Component.EventHandler();
        paytableButtonEventHandler.target = this.node; //这个 node 节点是你的事件处理代码组件所属的节点
        paytableButtonEventHandler.component = config.SCRIPT_PREFIX + "MenuView";
        paytableButtonEventHandler.handler = "onClickPaytableB";
        this.paytableB.clickEvents.push(paytableButtonEventHandler);

        var infoButtonEventHandler = new cc.Component.EventHandler();
        infoButtonEventHandler.target = this.node; //这个 node 节点是你的事件处理代码组件所属的节点
        infoButtonEventHandler.component = config.SCRIPT_PREFIX + "MenuView";
        infoButtonEventHandler.handler = "onClickInfoB";
        this.infoB.clickEvents.push(infoButtonEventHandler);

        var audioToggleEventHandler = new cc.Component.EventHandler();
        audioToggleEventHandler.target = this.node; //这个 node 节点是你的事件处理代码组件所属的节点
        audioToggleEventHandler.component = config.SCRIPT_PREFIX + "MenuView";
        audioToggleEventHandler.handler = "onClickAudioT";
        audioToggleEventHandler.customEventData = "";
        this.audioT.checkEvents.push(audioToggleEventHandler, audioToggleEventHandler.customEventData);

        var exitAppButtonEventHandler = new cc.Component.EventHandler();
        exitAppButtonEventHandler.target = this.node; //这个 node 节点是你的事件处理代码组件所属的节点
        exitAppButtonEventHandler.component = config.SCRIPT_PREFIX + "MenuView";
        exitAppButtonEventHandler.handler = "onClickExitAppB";
        this.exitAppB.clickEvents.push(exitAppButtonEventHandler);


        var exitButtonEventHandler = new cc.Component.EventHandler();
        exitButtonEventHandler.target = this.node; //这个 node 节点是你的事件处理代码组件所属的节点
        exitButtonEventHandler.component = config.SCRIPT_PREFIX + "MenuView";
        exitButtonEventHandler.handler = "onClickExitB";
        this.exitB.clickEvents.push(exitButtonEventHandler);

        var isMute = playerPrefsController.instance.getIsMute();

        if(this.audioT!=null){
            if (isMute == "false") {
                this.audioT.isChecked = true;
                this.updateSpriteFrame(this.audioTSprite, this.audioOnSprite);
            }
            else {
                this.audioT.isChecked = false;
                this.updateSpriteFrame(this.audioTSprite, this.audioOffSprite);
            }
        }

        if(this.audioButton!=null){
            if (isMute == "false") {
                this.updateSpriteFrame(this.audioButton.getComponent(cc.Sprite), this.audioOnSprite);
            }
            else {
                this.updateSpriteFrame(this.audioButton.getComponent(cc.Sprite), this.audioOffSprite);
            }
        }
    },

    show: function () {
        this.parent.active = true;
    },

    hide: function () {
        this.parent.active = false;
    },


    onClickLobbyB: function () {
        this.gameController.onExitGameToLobby();
    },

    onClickPaytableB: function () {

    },

    onClickInfoB: function () {

    },
    onClickSwitchAudio(){
        var isMute = playerPrefsController.instance.getIsMute();
        

        if(this.audioButton!=null){
            if (isMute == "true") {
                playerPrefsController.instance.setIsMute("false");
                this.updateSpriteFrame(this.audioButton.getComponent(cc.Sprite), this.audioOnSprite);
            }
            else {
                playerPrefsController.instance.setIsMute("true");
                this.updateSpriteFrame(this.audioButton.getComponent(cc.Sprite), this.audioOffSprite);
            }
            this.audioController.updateMuteStatus();
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

    updateSpriteFrame: function (sprite, texture) {
        if (!sprite || !texture) {
            return;
        }
        var frame = new cc.SpriteFrame(texture);
        sprite.spriteFrame = frame;
    },

    onClickExitAppB: function () {
        this.popUpView.show("Leave App", "Are you sure?", false, true, true, this.popUpView.actionType_ExitApp, this.popUpView.actionType_Hide);
    },

    onClickExitB: function () {
        this.hide();
    },
    
});
