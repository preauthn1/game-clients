cc.Class({
    extends: cc.Component,

    properties: {
        parent: cc.Node,
        content: cc.Node,
        exitB: cc.Button,
        innerContent: cc.Node,
    },

    onLoad: function () {
        var exitBClickEventHandler = new cc.Component.EventHandler();
        exitBClickEventHandler.target = this.node;
        exitBClickEventHandler.component = "LobbyTermsAndConditionsView";
        exitBClickEventHandler.handler = "onClickExit";
        this.exitB.clickEvents.push(exitBClickEventHandler);
    },

    show: function () {
        this.parent.active = true;
        this.innerContent.active = false;
        this.content.setScale(0, 0);

        var action = new cc.sequence(
            cc.ScaleTo(1, 1, 1).easing(cc.easeElasticOut(1)),
            cc.callFunc(this.showInnerContent, this));
        this.content.runAction(action);
    },

    showInnerContent: function () {
        this.innerContent.active = true;
    },


    hide: function () {
        this.parent.active = false;
    },

    onClickExit: function () {
        this.hide();
    },
});
