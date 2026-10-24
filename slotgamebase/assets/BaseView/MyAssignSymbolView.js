var config = require('MyBaseConfig');
cc.Class({
    extends: cc.Component,

    properties: {
        isResetSymbolChild:false,
        symbolChild:[cc.Node],
        symbolChildIndex:0,
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
                
                let symbol = symbolsList.children[i];
                if(this.isResetSymbolChild){
                    // console.log("00 : "+symbol.childrenCount);
                    // for(let x=symbol.childrenCount-1;x>=0;x--){
                    //     console.log(symbol.children[x]);
                    //     symbol.children[x].destroy();
                    // }
                    symbol.removeAllChildren(); 
                    let _child = null;
                    for(let c=0;c<this.symbolChild.length;c++){
                        _child = cc.instantiate(this.symbolChild[c]);
                        symbol.addChild(_child);
                        if(c == this.symbolChildIndex){
                            symbol.getComponent(config.SCRIPT.SYMBOLVIEW).symbolSprite = _child.getComponent(cc.Sprite);
                        }
                    }
                    
                    //console.log(_child);
                  
                    // console.log("22 : "+symbol.childrenCount);
                }
                // symbolsList.children[i].getComponent(cc.Animation).play("DiamondJ1");
            }
        }
    },

    // update (dt) {},
});
