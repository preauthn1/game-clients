var config = require('MyBaseConfig');
cc.Class({
    extends: cc.Component,

    properties: {
        reels:[cc.Node],
        symbolsAnimation:[cc.AnimationClip],
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    onLoad () {
        // for(let j = 0;j<this.reels.childrenCount;j++){
        //     var symbolsList = this.reels.children[j];
        //     for(let i=0;i<symbolsList.childrenCount;i++){
        //         for(let k=0;k<this.symbolsAnimation.length;k++){
        //             symbolsList.children[i].getComponent(cc.Animation).addClip(this.symbolsAnimation[k]);
        //         }
        //         // symbolsList.children[i].getComponent(cc.Animation).play("DiamondJ1");
        //     }
        // }
        
        for(let j = 0;j<this.reels.length;j++){
            var symbolsList = this.reels[j];
            for(let i=0;i<symbolsList.childrenCount;i++){
                for(let k=0;k<this.symbolsAnimation.length;k++){
                    symbolsList.children[i].getComponent(cc.Animation).addClip(this.symbolsAnimation[k]);
                }
                // symbolsList.children[i].getComponent(cc.Animation).play("DiamondJ1");
            }
        }
    },

    // update (dt) {},
});
