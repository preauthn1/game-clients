//var playerDataModel = require('PlayerDataModel').PlayerDataModel;
//var slotSpinDataModel = require('SlotSpinDataModel').SlotSpinDataModel;
//var slotStartDataModel = require('SlotStartDataModel').SlotStartDataModel;
var config = require('BaseConfig');
var constants = require('DJSlotConstants').constants;
var accounting = require('Accounting');
var utils = require('Utils');
cc.Class({
    extends: cc.Component,
    extends: require('BaseMainView'),
    properties: {
    },

    onResultState: function (winValue, isChangeGameMode, gameMode, freeSpinLeft, previousFreeSpinLeft, betAmount, freeSpinWin) {
        this._super(winValue, isChangeGameMode, gameMode, freeSpinLeft, previousFreeSpinLeft, betAmount, freeSpinWin);
        var freeSpinDifference = freeSpinLeft - previousFreeSpinLeft;
        if (isChangeGameMode == true) {
            this.nextStepBGo.active = true;
            var action = new cc.repeatForever(
                new cc.sequence(
                    cc.scaleTo(0.5, 1.2),
                    cc.scaleTo(0.5, 1)));
            this.nextStepBGo.runAction(action);
        }
        else if (freeSpinDifference > 15) {
            this.nextStepBGo.active = true;
            var action = new cc.repeatForever(
                new cc.sequence(
                    cc.scaleTo(0.5, 1.2),
                    cc.scaleTo(0.5, 1)));
            this.nextStepBGo.runAction(action);
        }
    }
});

