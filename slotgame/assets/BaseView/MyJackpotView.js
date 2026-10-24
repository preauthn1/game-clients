var config = require('MyBaseConfig');
var utils = require('Utils');
var accounting = require('Accounting');
cc.Class({
    extends: cc.Component,

    properties: {
        eventManager:cc.Node,
        amountLabel:[cc.Label],
        tweenValue:[cc.Float],
        endValue:[cc.Float],
        audioManager:cc.Node,

        jackpotGameScript:"",
        jackpotGameNode:cc.Node,
        speed:100,
    },
    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {
        // if(this.eventManager!=null)
        // var reg = this.eventManager.getComponent(config.SCRIPT.REGISTEREVENT);
        // else
        // var reg = this.node.parent.getComponent(config.SCRIPT.REGISTEREVENT);

        //reg.subscribeEvent(config.EVENT.UPDATEJACKPOTAMT,this.onReceiveJackpotData,this);

        if(this.jackpotGameNode !=null){
            this.jackpotGameNode=this.jackpotGameNode.getComponent(this.jackpotGameScript);
        }
    },

    onReceiveJackpotData(data){
        if(this.amountLabel.length == 0)
        return;

        var type = data.type;
        var amount = data.amount;
        this.endJackpotValue[type-1] = amount;
    },

    update (dt) {
        for(let i=0;i<this.amountLabel.length;i++){
            if (this.tweenValue[i] >= this.endValue[i]) {
                var temp = accounting.formatNumber(this.endValue[i], 2, ",");
                this.updateValue(this.amountLabel[i],temp);
            }
            else if(this.endValue[i] > this.tweenValue[i]){
                this.tweenValue[i] += dt * this.speed;
                
                var temp = accounting.formatNumber(this.tweenValue[i], 2, ",");
                this.updateValue(this.amountLabel[i],temp);
            }
        }
    },

    updateValue(text,value){
        if(text==null)
        return;

        if(this.text.getComponent(cc.Label)!=null){
            this.text.getComponent(cc.Label).string = value;
        }
        else if(this.text.getComponent(cc.RichText)!=null){
            this.text.getComponent(cc.RichText).string = utils.customRichTextFont(value);
        }
    },

    showJackpot(type,amt){
        if(this.jackpotGameNode!=null){
           var time = 0; 
           time = this.jackpotGameNode.showJackpot(type,amt);
           return time;
        }

        return 0;
    },
    
});
