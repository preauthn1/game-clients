
var constants = require('DJSlotConstants');
var utils = require('Utils');

cc.Class({
    extends: cc.Component,

    properties: {
        lobbyController: cc.Node,
        notificationMsgs: {
            default: [],
            type: [cc.String]
        },
        grandTween:94050,
        majorTween:33692,
        minorTween:15622,
        jackpotWinValueCallBack: null, 
    },

    // use this for initialization
    onLoad: function () {
        this.lobbyController = this.lobbyController.getComponent('LobbyController');
    },

    updateNotification: function () {
        this.lobbyController.updateNotification(this.notificationMsgs);
    },

    onRequestLobbyData: function () {
        
        var lobbyData = [];
        this.lobbyController.onReceiveLobbyData(lobbyData, true, constants.SERVERDATAKEYS.LOBBY_MINIGAME_WHEEL, constants.STORED_SERVER_DATA.MINIGAME_WHEEL_SPINSLEFT);
        this.updateNotification();
        this.schedule(function () {
            // 这里的 this 指向 component
            this.updateNotification();
        }, 60);
      
    },

    onExitGameToLobby: function () {
        if (this.jackpotWinValueCallBack != null) {
            this.unschedule(this.jackpotWinValueCallBack);
        }
    },

    startMainJackpotSimulation: function () {
        console.log("startMainJackpotSimulation");
        this.updateMainJackpot();
        this.jackpotWinValueCallBack = function () {
            // 这里的 this 指向 component
            this.updateMainJackpot();
        },
            this.schedule(this.jackpotWinValueCallBack, 5);
    },

    updateMainJackpot: function () {
        this.grandTween += 5750;
        this.majorTween += 5692;
        this.minorTween += 5622;

        var arr = [this.grandTween, this.majorTween, this.minorTween];
        this.lobbyController.onReceiveMainJackpotData(arr);
    },

    onRequestWheelMiniGameData: function () {
        constants.STORED_SERVER_DATA.MINIGAME_WHEEL_SPINSLEFT = 0;
        this.lobbyController.onReceiveWheelMiniGameData(constants.STORED_SERVER_DATA.MINIGAME_WHEEL_SPINSLEFT, 200000);
    },

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
