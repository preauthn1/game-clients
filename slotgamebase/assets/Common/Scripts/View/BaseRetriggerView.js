var config = require('BaseConfig');
cc.Class({
    extends: cc.Component,

    properties: {
        gameController: cc.Node,
        parent: cc.Node,
        freeSpinL: cc.RichText,
        retriggerContinueB: cc.Button,
    },
    
    init: function () {
        this.gameController = this.gameController.getComponent(config.SCRIPT_PREFIX + 'GameController');

                var retriggerButtonEventHandler = new cc.Component.EventHandler();
                retriggerButtonEventHandler.target = this.node; //这个 node 节点是你的事件处理代码组件所属的节点
                retriggerButtonEventHandler.component = config.SCRIPT_PREFIX + "RetriggerView";
                retriggerButtonEventHandler.handler = "onClickRetriggerContinueB";
                this.retriggerContinueB.clickEvents.push(retriggerButtonEventHandler);
    },

    show: function (freeSpin) {
        this.parent.active = true;
        var fs = freeSpin;
        this.freeSpinL.string = "<b>" + fs + "</b>";
        var action = new cc.repeatForever(
            new cc.sequence(
                cc.scaleTo(0.5, 1.2),
                cc.scaleTo(0.5, 1)));
        this.retriggerContinueB.node.runAction(action);
    },

    hide: function () {
        this.parent.active = false;
    },

    onClickRetriggerContinueB: function () {
        this.gameController.onClickRetriggerContinueB();
    },
});
