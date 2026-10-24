cc.Class({
    extends: cc.Component,

    properties: {
        reelView:[cc.Node],
        multiplier:cc.Node,
        reelPattern:[],
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {
        for(let i=0;i<this.reelView.length;i++){
            this.reelView[i] = this.reelView[i].getComponent("MyBaseReelView");
            
        }
        this.multiplier = this.multiplier.getComponent("MyAztecGemsMultiplierReel");
        this.startSpin();
    },
    startSpin(){
        this.node.stopAllActions();
        
        this.multiplier.startSpin();
        for(let i=0;i<this.reelView.length;i++){
            this.reelView[i].startSpin();
            this.reelView[i].node.runAction(cc.sequence(
            cc.delayTime(1),
            cc.callFunc(function(){
                //this.reelView[i].setRandomResult(3);
                this.reelView[i].receiveResult(0,false);
            },this),
            cc.callFunc(function(){
                this.multiplier.isReceiveResult(2,true);
            },this)
            ));  
        }  
        this.node.runAction(cc.sequence(
            cc.delayTime(2),
            cc.callFunc(function(){
                this.startSpin();
            },this),
        )); 
    },
    updateReelResult(data){
        //Reel Pattern
        var pattern = data.fullReelData;
        var reelCount = 0;
        this.reelPattern = [];
        
        for(let j=0;j<pattern[0].length;j++){
            var array2 = [];
            for(let i=pattern.length-1;i>=0;i--){
                array2.push(pattern[i][j]);
            }
            this.reelPattern.push(array2);
        }
        
        //Assign to Reel
        for(let i=0;i<this.reel.length;i++){
            this.reel[i].updateReelResult(this.reelPattern[i]);
        }
    },
    // update (dt) {},
});
