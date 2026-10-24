
var constants = require('DJSlotConstants');
var utils = require('Utils');
cc.Class({
    extends: cc.Component,
    properties: {
        isSimulation: false,
        isJackpotSimulation: false,
        mainView: cc.Node,
        loadingView: cc.Node,
        lobbySimulator: cc.Node,
        audioController: cc.Node,
        slotLoginController: cc.Node,
        popUpView: cc.Node,
        miniGamesSpinsLeft: -1,
    },

    // use this for initialization
    onLoad: function () {
        this.loadingView = this.loadingView.getComponent('BaseLoadingView');
        this.slotLoginController = this.slotLoginController.getComponent('SlotLoginController');
        this.lobbySimulator = this.lobbySimulator.getComponent('LobbySimulator');
        this.mainView = this.mainView.getComponent('LobbyMainView');
        this.audioController = this.audioController.getComponent('LobbyAudioController');
        this.popUpView = this.popUpView.getComponent('PopUpView');
    },

    start: function () {
        if (this.isSimulation == true) {
            this.lobbySimulator.onRequestLobbyData();
        }
        if (this.isJackpotSimulation == true) {
            this.lobbySimulator.startMainJackpotSimulation();
        }
        this.popUpView.init();
    },

    onReceiveLobbyData: function (lobbyData, isHaveJackpot, type, miniGamesSpinsLeft) {
        

        utils.log("gameController::onReceiveLobbyData::" + miniGamesSpinsLeft);
        this.reset();
        this.miniGamesSpinsLeft = miniGamesSpinsLeft;
        this.mainView.onReceiveLobbyData(isHaveJackpot, type, miniGamesSpinsLeft);
    },

    updateNotification: function (notificationMsgs) {
        this.mainView.updateNotification(notificationMsgs);
    },

    onReceiveMainJackpotData: function (arr) {
        //this.grandValue = arr[0];
        //this.majorValue = arr[1];
        //this.minorValue = arr[2];
        constants.STORED_SERVER_DATA.GRAND_VAL =  arr[0];
        constants.STORED_SERVER_DATA.MAJOR_VAL =  arr[1];
        constants.STORED_SERVER_DATA.MINOR_VAL =  arr[2];
        this.mainView.onReceiveMainJackpotData(arr);
    },

    checkMiniGames: function (type, freeSpinsLeft) {
        if (type == constants.SERVERDATAKEYS.LOBBY_MINIGAME_WHEEL) {
            if (freeSpinsLeft != 0) {
                this.mainView.showMiniGamesWheelPopUp();
            }
        }
        this.loadingView.hide();
        //this.mainView.checkVisibility();
    },

    onClickWheelB: function () {
        this.mainView.onClickWheelPopUpB(this.miniGamesSpinsLeft);
    },

    onReceiveWheelMiniGameData: function (spinsLeft, winAmount) {
        this.miniGamesSpinsLeft = spinsLeft;
        this.mainView.onReceiveWheelMiniGameData(spinsLeft, winAmount);
    },

    endMiniGameWheel: function () {
        this.mainView.endMiniGameWheel();
    },

    onClickSlot: function (customEventData) {
        var gameId = "0";
        for (var i = 0; i < constants.constants.slotGameScene.length; i++) {
            if (constants.constants.slotGameScene[i] == customEventData) {
                constants.PLAYERPREFSKEYS.selectedGame = customEventData;
                gameId = constants.constants.slotGameId[i];
                break;
            }
        }
        if (this.isSimulation == true) {
            this.loadingView.show();
            this.audioController.stopAllSound();
            cc.director.loadScene(customEventData);
        };
    },

    getGameToken(gameId) {
        var url = constants.URL.LOGIN_URL;
        url = url +
            "username=" + constants.PLAYERPREFSKEYS.USERNAME + constants.URL.suffix
            + "&password=" + constants.PLAYERPREFSKEYS.PASSWORD;
        /*
        url = url +
              "username=" + username+ Global.suffix
              + "&password=" + password;
        */
        var xhr = cc.loader.getXMLHttpRequest();
        var rawData = "";

        xhr.open("POST", url);
        xhr.setRequestHeader("Content-Type", "Application/json");
        xhr.send(rawData);

        xhr.target = this;

        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && (xhr.status >= 200 && xhr.status <= 207)) {
                var httpStatus = xhr.statusText;
                var response = xhr.responseText;
                utils.log("gameController::onLogin::" + response);
                if (response == "\"-1\"") {
                    //xhr.target.getComponent("LoginMainView").invalidLogin();
                }
                else if (response == "\"-2\"") {
                    //xhr.target.getComponent("LoginMainView").onRequestNickname();
                }
                else if (response == "\"-3\"") {
                    //xhr.target.getComponent("LoginMainView").invalidNickname();
                }
                else if (response == "\"-4\"") {
                    //xhr.target.getComponent("LoginMainView").showPopUpError("", constants.constants.ERR_ACCOUNT_SUSPENDED, false);
                }
                else if (response == "\"-5\"") {
                    //xhr.target.getComponent("LoginMainView").showPopUpError("", "Your account has no permission to login. Please contact your operator", false);
                }
                else if (response == "\"-6\"") {
                    //xhr.target.getComponent("LoginMainView").showPopUpError("", "If you have continuously failed to connect to the game, please check your internet connection.", false);
                }
                else {
                    var jsonResult = JSON.parse(response);

                    var responseString = jsonResult[0];
                    if (responseString == "\"-1\"") {
                        //xhr.target.getComponent("LoginMainView").invalidLogin();
                    }
                    else if (responseString == "\"-2\"") {
                        //xhr.target.getComponent("LoginMainView").onRequestNickname();
                    }
                    else if (responseString == "\"-3\"") {
                        //xhr.target.getComponent("LoginMainView").showPopUpError("", "Display name unavailable, please choose another name.", false);
                    }
                    else if (responseString == "\"-4\"") {
                        //xhr.target.getComponent("LoginMainView").showPopUpError("", "Your account has been suspended. Please contact your operator", false);
                    }
                    else if (responseString == "\"-5\"") {
                        //xhr.target.getComponent("LoginMainView").showPopUpError("", "Your account has no permission to login. Please contact your operator", false);
                    }
                    else if (responseString == "\"-6\"") {
                        //xhr.target.getComponent("LoginMainView").showPopUpError("", "If you have continuously failed to connect to the game, please check your internet connection.", false);
                    }
                    else {
                        constants.URL.GAME_TOKEN = [REDACTED];
                        constants.URL.IP = jsonResult[1];
                        constants.URL.PORT = jsonResult[2];
                        //xhr.target.getComponent("LoginMainView").goLobby();
                        cc.director.loadScene(constants.PLAYERPREFSKEYS.selectedGame);
                    }
                }
            }
            else {
                if (xhr.status < 200 && xhr.status > 207) {
                    //xhr.target.getComponent("LoginMainView").showPopUpError("", "If you have continuously failed to connect to the game, please check your internet connection.", false);
                }
            }
        }
    },

    onExitGameToLogin: function () {
        this.loadingView.show();
        this.audioController.stopAllSound();
        this.simulator.onExitGameToLobby();
        cc.director.loadScene(constants.constants.loginScene);
    },

    onExitApp: function () {
        this.loadingView.show();
        this.audioController.stopAllSound();
        cc.game.end();
    },


    reset: function () {
        this.mainView.reset();
    }
});
