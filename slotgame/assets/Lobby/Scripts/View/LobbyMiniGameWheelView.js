var config = require('BaseConfig');
var constants = require('DJSlotConstants').constants;
var accounting = require('Accounting');
var utils = require('Utils');

cc.Class({
    extends: cc.Component,

    properties: {
        lobbyController: cc.Node,
        miniGamesWheelPopUpView: cc.Node,
        parent: cc.Node,
        spinB: cc.Button,
        wheel: cc.Node,
        lobbySimulator: cc.Node,
        spinsLeftL: cc.Label,
        collectB: cc.Button,
        spinRoundAmount: 7,
        exitB: cc.Button,
        radioButtonArr: {
            default: [],
            type: cc.Toggle
        },
        contentArr: {
            default: [],
            type: cc.Node
        },
    },

    onLoad: function () {
        this.lobbySimulator = this.lobbySimulator.getComponent('LobbySimulator');
        this.lobbyController = this.lobbyController.getComponent('LobbyController');
        this.miniGamesWheelPopUpView = this.miniGamesWheelPopUpView.getComponent('LobbyMiniGamesWheelPopUpView');

        var spinBClickEventHandler = new cc.Component.EventHandler();
        spinBClickEventHandler.target = this.node;
        spinBClickEventHandler.component = "LobbyMiniGameWheelView";
        spinBClickEventHandler.handler = "onClickSpinB";
        this.spinB.clickEvents.push(spinBClickEventHandler);

        var exitBClickEventHandler = new cc.Component.EventHandler();
        exitBClickEventHandler.target = this.node;
        exitBClickEventHandler.component = "LobbyMiniGameWheelView";
        exitBClickEventHandler.handler = "hide";
        this.exitB.clickEvents.push(exitBClickEventHandler);

        for (var i = 0; i < this.radioButtonArr.length; i++) {
            if (i == 0) {
                this.contentArr[0].active = true;
            }
            else {
                this.contentArr[i].active = false;
            }
        }
        /*
        var collectBClickEventHandler = new cc.Component.EventHandler();
        collectBClickEventHandler.target = this.node;
        collectBClickEventHandler.component = "LobbyMiniGameWheelView";
        collectBClickEventHandler.handler = "onClickCollectB";
        this.collectB.clickEvents.push(collectBClickEventHandler);
        */
    },

    checkVisibility: function () {
        utils.log("MiniGameWheelView::" + this.parent.active);
        this.miniGamesWheelPopUpView.checkVisibility();
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
    },

    onClickSpinB: function () {
        this.exitB.interactable = false;
        this.spinB.interactable = false;
        var action = new cc.repeatForever(
            cc.sequence(
                cc.rotateTo(0.5, 180),
                cc.rotateTo(0.5, 360),
                //cc.callFunc(this.prepareToStop, this, { a: id + 1 }),
            )
        );
        //var action = cc.rotateTo(1, 359);
        /*
        var action = new cc.repeatForever(
            cc.rotateTo(1, 360).easing(cc.easeIn(1)));
            */
        this.wheel.runAction(action);
        this.lobbySimulator.onRequestWheelMiniGameData();
    },

    onReceiveWheelMiniGameData: function (spinsLeft, winAmount) {
        utils.log("onReceiveWheelMiniGameData::spinsLeft::" + spinsLeft + "::winAmount::" + winAmount);
        this.wheel.stopAllActions();
        this.spinsLeftL.string = spinsLeft.toString();
        var temp = accounting.formatNumber(winAmount, 2, ",");
        this.miniGamesWheelPopUpView.updateWinAmount(temp);
        //this.winAmountL.string = config.SLOTDETAILS.DENOMINATION_PREFIX + temp;
        //this.winAmountL.string = winAmount.toString();
        var angle = this.getAngleValue(winAmount);
        this.wheel.runAction(
            cc.sequence(
                cc.rotateTo(this.spinRoundAmount, angle).easing(cc.easeOut(2)),
                cc.rotateBy(1, 10).easing(cc.easeOut(2)),
                cc.rotateBy(2, -10).easing(cc.easeInOut(2)),
                cc.delayTime(1),
                cc.callFunc(this.endSpin, this, {}),
            )
        );
    },

    endSpin: function () {
        this.exitB.interactable = true;
        this.spinB.interactable = true;
        this.miniGamesWheelPopUpView.show();
    },

    getAngleValue: function (winAmount) {
        var val = 360 * this.spinRoundAmount;
        return val;
    },

    show: function (miniGamesSpinsLeft) {
        this.node.stopAllActions();
        this.wheel.stopAllActions();
        this.wheel.rotation = 0;
        this.parent.active = true;
        this.spinB.interactable = true;
        this.miniGamesWheelPopUpView.hide();
        this.spinsLeftL.string = miniGamesSpinsLeft.toString();
        this.node.setScale(0, 0);
        this.node.runAction(
            cc.ScaleTo(1, 1, 1).easing(cc.easeElasticOut(1)));
    },

    hide: function () {
        this.parent.active = false;
        this.miniGamesWheelPopUpView.hide();
        /*
        this.node.runAction(
            cc.moveTo(1, cc.p(this.offPos.position.x, this.offPos.position.y)).easing(cc.easeElasticOut(1)));
            */
    },
});
