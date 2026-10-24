var config = require('MyBaseConfig');
cc.Class({
    extends: cc.Component,

    properties: {
        controller:cc.Node,
        popUpMainView:cc.Node,

        mainNode:cc.Node,
        selectionNode:[cc.Node],
        clickActionNode:[cc.Node],
        currentClick:{ visible: false, default: 0 },
        currentReceive:{ visible: false, default: 0 },
        totalClick:0,
        originalSpin:8,
        originalMultiplier:2,
        currentSpins:{ visible: false, default: 8 },
        currentMultiplier:{ visible: false, default: 2 },

        spinsText:cc.Label,
        multiplierText:cc.Label,
        delayComplete:0,

        clickedList:{ visible: false, default: 0},

        restoreFS :{ visible: false, default: 0},
        restoreMultiplier:{ visible: false, default: 0},

        preSelectionNum:[cc.String],
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {

    },
    onEnable(){
        // console.log("This Object ENable");
        // this.node.getComponent(cc.Animation).play(this.animationName);
    },

    showFreeSpinGame(){
        for(let i=0;i<this.selectionNode.length;i++){
            //this
        }
    },
    // update (dt) {},
});
