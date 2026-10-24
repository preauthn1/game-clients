var utils = require('Utils');
var constants = require('DJSlotConstants');

cc.Class({
    extends: cc.Component,

    properties: {
        lobbyController: cc.Node,
        mainJackpotView: cc.Node,

        exitLobbyB: cc.Button,
        optionsB: cc.Button,
        miniGamesB: cc.Button,
        termsAndConditionsB: cc.Button,
        popUpView: cc.Node,
        notificationView: cc.Node,
        miniGamesWheelView: cc.Node,
        termsAndConditionsView: cc.Node,
        optionsView: cc.Node,
        loadingView: cc.Node,
        scrollView: cc.ScrollView,

        miniGamesPopUpView: cc.Node,

        radioButtonArr: {
            default: [],
            type: cc.Toggle
        },

        allGamesBArr:
        {
            default: [],
            type: cc.Button
        },

        allGamesStringArr:
        {
            default: [],
            type: [cc.String]
        },

        featureGamesBArr:
        {
            default: [],
            type: cc.Button
        },

        featureGamesStringArr:
        {
            default: [],
            type: [cc.String]
        },

        progressiveGamesBArr:
        {
            default: [],
            type: cc.Button
        },

        progressiveGamesStringArr:
        {
            default: [],
            type: [cc.String]
        },

        arcadeGamesBArr:
        {
            default: [],
            type: cc.Button
        },

        arcadeGamesStringArr:
        {
            default: [],
            type: [cc.String]
        },

        tableGamesBArr:
        {
            default: [],
            type: cc.Button
        },

        tableGamesStringArr:
        {
            default: [],
            type: [cc.String]
        },

        contentArr: {
            default: [],
            type: cc.Node
        },
        parent: cc.Node,
    },

    // use this for initialization
    onLoad: function () {
        this.lobbyController = this.lobbyController.getComponent('LobbyController');
        this.mainJackpotView = this.mainJackpotView.getComponent('LobbyMainJackpotView');
        this.popUpView = this.popUpView.getComponent('PopUpView');
        this.notificationView = this.notificationView.getComponent('LobbyNotificationView');
        this.miniGamesWheelView = this.miniGamesWheelView.getComponent('LobbyMiniGameWheelView');
        this.miniGamesPopUpView = this.miniGamesPopUpView.getComponent('LobbyMiniGamesPopUpView');
        this.termsAndConditionsView = this.termsAndConditionsView.getComponent('LobbyTermsAndConditionsView');
        this.optionsView = this.optionsView.getComponent('LobbyOptionsView');
        this.loadingView = this.loadingView.getComponent('BaseLoadingView');

        var exitLobbyBClickEventHandler = new cc.Component.EventHandler();
        exitLobbyBClickEventHandler.target = this.node;
        exitLobbyBClickEventHandler.component = "LobbyMainView";
        exitLobbyBClickEventHandler.handler = "onClickExitLobby";
        this.exitLobbyB.clickEvents.push(exitLobbyBClickEventHandler);

        var termsAndConditionsBClickEventHandler = new cc.Component.EventHandler();
        termsAndConditionsBClickEventHandler.target = this.node;
        termsAndConditionsBClickEventHandler.component = "LobbyMainView";
        termsAndConditionsBClickEventHandler.handler = "onClickTermsAndConditionsB";
        this.termsAndConditionsB.clickEvents.push(termsAndConditionsBClickEventHandler);

        var miniGamesBClickEventHandler = new cc.Component.EventHandler();
        miniGamesBClickEventHandler.target = this.node;
        miniGamesBClickEventHandler.component = "LobbyMainView";
        miniGamesBClickEventHandler.handler = "onClickMiniGames";
        this.miniGamesB.clickEvents.push(miniGamesBClickEventHandler);

        var optionsBClickEventHandler = new cc.Component.EventHandler();
        optionsBClickEventHandler.target = this.node;
        optionsBClickEventHandler.component = "LobbyMainView";
        optionsBClickEventHandler.handler = "onClickOptions";
        this.optionsB.clickEvents.push(optionsBClickEventHandler);

        for (var i = 0; i < this.radioButtonArr.length; i++) {
            this.contentArr[i].active = false;
        }

        this.contentArr[0].active = true;
        this.parent.setPosition(-1 * 1134 / 2, this.parent.getPositionY());
        var width = this.contentArr[0].width;
        this.parent.width = width;
    },

    updateNotification: function (msg) {
        this.notificationView.updateNotification(msg);
    },

    onReceiveLobbyData: function (isHaveJackpot, type, miniGamesSpinsLeft) {
        for (var i = 0; i < this.allGamesBArr.length; i++) {
            var clickEventHandler = new cc.Component.EventHandler();
            clickEventHandler.target = this.node;
            clickEventHandler.component = "LobbyMainView";
            clickEventHandler.handler = "onClickSlot";
            clickEventHandler.customEventData = this.allGamesStringArr[i];

            this.allGamesBArr[i].clickEvents.push(clickEventHandler);
        }
        for (var i = 0; i < this.featureGamesBArr.length; i++) {
            var clickEventHandler = new cc.Component.EventHandler();
            clickEventHandler.target = this.node;
            clickEventHandler.component = "LobbyMainView";
            clickEventHandler.handler = "onClickSlot";
            clickEventHandler.customEventData = this.featureGamesStringArr[i];

            this.featureGamesBArr[i].clickEvents.push(clickEventHandler);
        }
        for (var i = 0; i < this.progressiveGamesBArr.length; i++) {
            var clickEventHandler = new cc.Component.EventHandler();
            clickEventHandler.target = this.node;
            clickEventHandler.component = "LobbyMainView";
            clickEventHandler.handler = "onClickSlot";
            clickEventHandler.customEventData = this.progressiveGamesStringArr[i];

            this.progressiveGamesBArr[i].clickEvents.push(clickEventHandler);
        }

        for (var i = 0; i < this.arcadeGamesBArr.length; i++) {
            var clickEventHandler = new cc.Component.EventHandler();
            clickEventHandler.target = this.node;
            clickEventHandler.component = "LobbyMainView";
            clickEventHandler.handler = "onClickSlot";
            clickEventHandler.customEventData = this.arcadeGamesStringArr[i];

            this.arcadeGamesBArr[i].clickEvents.push(clickEventHandler);
        }

        for (var i = 0; i < this.tableGamesBArr.length; i++) {
            var clickEventHandler = new cc.Component.EventHandler();
            clickEventHandler.target = this.node;
            clickEventHandler.component = "LobbyMainView";
            clickEventHandler.handler = "onClickSlot";
            clickEventHandler.customEventData = this.tableGamesStringArr[i];

            this.tableGamesBArr[i].clickEvents.push(clickEventHandler);
        }
        if (isHaveJackpot == true) {
            var action = new cc.sequence(
                cc.delayTime(0.5),
                cc.callFunc(this.checkMiniGames, this, { a: type, b: miniGamesSpinsLeft }),
            );
            this.node.runAction(action);
        }
        else {
            this.miniGamesWheelView.hide();
        }

        if (miniGamesSpinsLeft == 0) {

            this.updateMiniGameSpinBStatus(false);
        }
        else {

            this.updateMiniGameSpinBStatus(true);
        }
    },

    onClickSlot: function (event, customEventData) {
        var gameId = "0";
        for (var i = 0; i < constants.constants.slotGameScene.length; i++) {
            if (constants.constants.slotGameScene[i] == customEventData) {
                constants.PLAYERPREFSKEYS.selectedGame = customEventData;
                gameId = constants.constants.slotGameId[i];
                break;
            }
        }
        if (this.lobbyController.isSimulation == true) {
            this.scrollView.enabled = false;
            this.lobbyController.onClickSlot(customEventData);
        }
        //if(gameId!="0")
        //this.getGameToken(gameId)

        // if(customEventData == constants.constants.slotGameScene[0])
        // {
        //     this.loadingView.show();
        //     cc.director.loadScene(customEventData);
        //     //this.slotLoginController.onRequestCheckVersion(constants.URL.VERIFY_GREATBLUE_URL);
        // }
        // else if(customEventData == constants.constants.slotGameScene[1])
        // {
        //     this.loadingView.show();
        //     cc.director.loadScene(customEventData);
        //     //this.slotLoginController.onRequestCheckVersion(constants.URL.VERIFY_PANTHERMOON_URL);
        // }
        // else if(customEventData == constants.constants.slotGameScene[2])
        // {
        //     this.loadingView.show();
        //     cc.director.loadScene(customEventData);
        //     //this.slotLoginController.onRequestCheckVersion(constants.URL.VERIFY_FUNKYMONKEY_URL);
        // }
        //this.loadingView.show(customEventData);
        //cc.director.loadScene(customEventData);
    },

    updateMiniGameSpinBStatus: function (status) {
        this.miniGamesB.interactable = status;
    },

    onReceiveMainJackpotData: function (arr) {
        this.mainJackpotView.onReceiveMainJackpotData(arr);
    },

    checkMiniGames: function (target, data) {
        var type = data.a;
        var freeSpinsLeft = data.b;
        this.lobbyController.checkMiniGames(type, freeSpinsLeft);
    },

    showMiniGamesWheelPopUp: function () {
        this.miniGamesPopUpView.show(constants.SERVERDATAKEYS.LOBBY_MINIGAME_WHEEL);
    },

    onClickWheelPopUpB: function (miniGamesSpinsLeft) {
        this.miniGamesPopUpView.hide();
        this.miniGamesWheelView.show(miniGamesSpinsLeft);
    },

    onReceiveWheelMiniGameData: function (spinsLeft, winAmount) {

        if (spinsLeft == 0) {

            this.updateMiniGameSpinBStatus(false);
        }
        else {

            this.updateMiniGameSpinBStatus(true);
        }
        this.miniGamesWheelView.onReceiveWheelMiniGameData(spinsLeft, winAmount);
    },

    endMiniGameWheel: function () {
        this.miniGamesWheelView.hide();
    },

    onClickTermsAndConditionsB: function () {
        this.termsAndConditionsView.show();
    },

    onClickExitLobby: function () {
        this.popUpView.show("Leave App", "Are you sure?", false, true, true, this.popUpView.actionType_ExitApp, this.popUpView.actionType_Hide);
    },

    onClickOptions: function () {
        this.optionsView.show();
    },

    onClickMiniGames: function () {
        this.lobbyController.onClickWheelB();
    },

    radioButtonClicked: function (toggle) {
        var index = this.radioButtonArr.indexOf(toggle);

        for (var i = 0; i < this.radioButtonArr.length; i++) {
            if (i == index) {
                this.contentArr[index].active = true;
            }
            else {
                this.contentArr[i].active = false;
            }
        }
        var width = this.contentArr[index].width;
        this.parent.width = width;
        this.parent.setPosition(-1 * 1134 / 2, this.parent.getPositionY());
    },

    reset: function () {
        this.miniGamesWheelView.hide();
        this.optionsView.hide();
        this.popUpView.hide();
    },

    checkVisibility: function () {
        this.loadingView.checkVisibility();
        this.miniGamesWheelView.checkVisibility();
    },
});
