var config = require('BaseConfig');

cc.Class({
    extends: cc.Component,
    properties: {

        betView: cc.Node,

        isSpinBHold: false,
        spinHoldDuration: 0,
    },

    // use this for initialization
    init: function () {
        this.betView = this.betView.getComponent(config.SCRIPT_PREFIX + 'BetView');
        if (cc.sys.isMobile == false) {
            this.node.on(cc.Node.EventType.MOUSE_DOWN, function (event) {
                this.isSpinBHold = true;
            }, this);

            this.node.on(cc.Node.EventType.MOUSE_UP, function (event) {
                if (this.isSpinBHold == true) {
                    this.isSpinBHold = false;
                    this.spinHoldDuration = 0;
                    this.betView.onClickSpin();
                }
            }, this);
        }
        else
            {
                this.node.on(cc.Node.EventType.TOUCH_START, function (event) {
                    this.isSpinBHold = true;
                }, this);
    
                this.node.on(cc.Node.EventType.TOUCH_END, function (event) {
                    if (this.isSpinBHold == true) {
                        this.isSpinBHold = false;
                        this.spinHoldDuration = 0;
                        this.betView.onClickSpin();
                    }
                }, this);
            }
    },

    update: function (dt) {
        if (this.isSpinBHold == true) {
            this.spinHoldDuration += dt;
            if (this.spinHoldDuration > 1) {
                this.isSpinBHold = false;
                this.spinHoldDuration = 0;
                this.betView.onHoldSpinB();
            }
        }
    },

    onDisable: function () {
        this.isSpinBHold = false;
        this.spinHoldDuration = 0;
    }
});
