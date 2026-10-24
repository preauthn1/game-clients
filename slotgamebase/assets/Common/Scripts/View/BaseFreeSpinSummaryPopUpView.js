var accounting = require('Accounting');
var config = require('BaseConfig');
var utils = require('Utils');

cc.Class({
    extends: cc.Component,

    properties: {
        gameController: cc.Node,
        parent: cc.Node,
        freeSpinSummaryPopUpGameWinL: cc.Label,
        freeSpinSummaryPopUpFeatureWinL: cc.Label,
        freeSpinSummaryPopUpTotalWinL: cc.Label,
        freeSpinSummaryContinueB: cc.Button,
        tweenGameWinVal: 0,
        tweenFeatureWinVal: 0,
        tweenTotalWinVal: 0,
    },

    onLoad: function () {
    },

    // use this for initialization
    init: function () {
        this.gameController = this.gameController.getComponent(config.SCRIPT_PREFIX + 'GameController');

        if (this.freeSpinSummaryContinueB != null) {
            var freeSpinSummaryButtonEventHandler = new cc.Component.EventHandler();
            freeSpinSummaryButtonEventHandler.target = this.node; //这个 node 节点是你的事件处理代码组件所属的节点
            freeSpinSummaryButtonEventHandler.component = config.SCRIPT_PREFIX + "FreeSpinSummaryPopUpView";
            freeSpinSummaryButtonEventHandler.handler = "onClickFreeSpinSummaryContinueB";
            this.freeSpinSummaryContinueB.clickEvents.push(freeSpinSummaryButtonEventHandler);
        }
    },

    show: function (preWin, freeSpinWin, totalWin) {
        
        this.parent.active = true;
        this.tweenGameWinVal = 0;
        this.tweenFeatureWinVal = 0;
        this.tweenTotalWinVal = 0;
        if (this.freeSpinSummaryPopUpGameWinL != null) {
            var preWinValue = accounting.formatNumber(preWin, 0, ",");
            this.freeSpinSummaryPopUpGameWinL.string = config.SLOTDETAILS.DENOMINATION_PREFIX + preWinValue.toString();
        }

        if (this.freeSpinSummaryPopUpFeatureWinL != null) {
            var freeSpinWinValue = accounting.formatNumber(freeSpinWin, 0, ",");
            this.freeSpinSummaryPopUpFeatureWinL.string = config.SLOTDETAILS.DENOMINATION_PREFIX + freeSpinWinValue.toString();
        }

        var totalWinValue = accounting.formatNumber(totalWin, 0, ",");
        this.freeSpinSummaryPopUpTotalWinL.string = config.SLOTDETAILS.DENOMINATION_PREFIX + totalWinValue.toString();
    },

    onClickFreeSpinSummaryContinueB: function () {
        this.hide();
        this.gameController.onFreeSpinEnd();
    },

    hide: function () {
        this.parent.active = false;
    },
});
