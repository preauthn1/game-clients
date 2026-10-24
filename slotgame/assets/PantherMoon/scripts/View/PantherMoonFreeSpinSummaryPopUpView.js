cc.Class({
    extends: cc.Component,
    extends: require('BaseFreeSpinSummaryPopUpView'),
    properties: {
    },

    // use this for initialization
    onLoad: function () {
        this.gameController = this.gameController.getComponent('PantherMoonGameController');

        var freeSpinSummaryButtonEventHandler = new cc.Component.EventHandler();
        freeSpinSummaryButtonEventHandler.target = this.node; //这个 node 节点是你的事件处理代码组件所属的节点
        freeSpinSummaryButtonEventHandler.component = "PantherMoonFreeSpinSummaryPopUpView";
        freeSpinSummaryButtonEventHandler.handler = "onClickFreeSpinSummaryContinueB";
        this.freeSpinSummaryContinueB.clickEvents.push(freeSpinSummaryButtonEventHandler);
    },
});
