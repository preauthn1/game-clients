cc.Class({
    extends: cc.Component,
    extends: require('PayoutView'),

    properties: {
        tween:{
            default:false,
            visible:false,
        },
        minValue:{
            default:false,
            visible:false,
        },
        maxValue:{
            default:false,
            visible:false,
        },
        current:{
            default:0,
            visible:false,
        },
    },

    showPayout(value){
        this.payoutText.string = 0;
        this.minValue = value / 1;
        this.maxValue = value;
        this.tween = true;
        this.scheduleOnce(function(){
            this.node.destroy();
        }, 2);
    },

    update(dt){
        if(this.tween){
            this.current += dt;
            var value = Math.round(this.minValue * this.current);
            if(value > this.maxValue){
                value = this.maxValue;
                this.tween = false;
            }
            this.payoutText.string = value;
        }
    },
});
