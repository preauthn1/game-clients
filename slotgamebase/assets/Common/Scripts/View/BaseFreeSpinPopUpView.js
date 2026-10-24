var config = require('BaseConfig');
cc.Class({
    extends: cc.Component,

    properties: {
        gameController: cc.Node,
        parent: cc.Node,
        freeSpinL: cc.RichText,
        multiplierL: cc.RichText,
        freeSpinPopUpContinueB: cc.Button,
    },

    
    init: function () {
        this.gameController = this.gameController.getComponent(config.SCRIPT_PREFIX + 'GameController');
    },

    show: function(freeSpinLeft, multiplier)
    {
        this.parent.active = true;
        var fs = freeSpinLeft;
        var m = multiplier;
        this.freeSpinL.string = "<b>" + fs + "</b>";
        this.multiplierL.string = "<b>" + m + "</b>";
        var action = new cc.repeatForever(
            new cc.sequence(
                cc.scaleTo(0.5, 1.2),
                cc.scaleTo(0.5, 1)));
        this.freeSpinPopUpContinueB.node.runAction(action);
    },

    hide: function()
    {
        this.parent.active = false;
    },

    onClickFreeSpinPopUpContinueB: function () {
        this.gameController.onClickFreeSpinPopUpContinueB();
    },
});
