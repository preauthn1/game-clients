var config = require('MyBaseConfig');

cc.Class({
    extends: cc.Component,
    properties: {

        betView: cc.Node,
        isSpinBHold: false,
        spinHoldDuration: 0,
    },

    // use this for initialization
    start: function () {
        this.betView = this.betView.getComponent(config.SCRIPT.PANELMANAGER);
        if (cc.sys.isMobile == false) {
            this.node.on(cc.Node.EventType.MOUSE_DOWN, function (event) {
                this.isSpinBHold = true;
            }, this);

            this.node.on(cc.Node.EventType.MOUSE_UP, function (event) {
                if (this.isSpinBHold == true) {
                    this.isSpinBHold = false;
                    this.spinHoldDuration = 0;
                    this.betView.startSpin();
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
                        this.betView.startSpin();
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
                this.betView.onHoldSpin();
            }
        }
    },

    onDisable: function () {
        this.isSpinBHold = false;
        this.spinHoldDuration = 0;
    }
});
