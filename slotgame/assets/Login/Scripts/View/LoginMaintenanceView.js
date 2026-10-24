cc.Class({
    extends: cc.Component,

    properties: {
        maintainFromL: cc.Label,
        maintainToL: cc.Label,
        maintainB: cc.Button,
    },

    // use this for initialization
    onLoad: function () {
        var buttonEventHandler = new cc.Component.EventHandler();
        buttonEventHandler.target = this.node; //这个 node 节点是你的事件处理代码组件所属的节点
        buttonEventHandler.component = "LoginMaintenanceView";
        buttonEventHandler.handler = "hide";
        this.maintainB.clickEvents.push(buttonEventHandler);
    },

    show: function (from, to) {
        this.node.active = true;
        this.maintainFromL.string = from.toString();
        this.maintainToL.string = to.toString();
    },

    hide() {
        cc.game.end();
    },
});
