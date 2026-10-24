var config = require('MyBaseConfig');
cc.Class({
    extends: cc.Component,
    extends: require('MyAnimateSymbolView'),
    properties: {
        isSpecialWild:cc.Node,
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {
        this._super();
        if(this.eventManager!=null)
        var reg = this.eventManager.getComponent(config.SCRIPT.REGISTEREVENT);
        else
        var reg = this.node.parent.getComponent(config.SCRIPT.REGISTEREVENT);
        reg.subscribeEvent(config.EVENT.ENABLEWINLINE,this.setSpecialWildAnimation,this);
    },
    setSpecialWildAnimation(event){
        
        var symbols = event.winSymbols;

        if(this.symbols == "w1"){
            this.isSpecialWild = true;
        }
        else{
            this.isSpecialWild = false;
        }
    },
    getAnimateSymbol(event){
        var symbolCount = event.symbolCount;
        var winSymbolCount = event.winSymbolCount;
        var winAmt = event.winAmt;
        var x = event.x;
        var y = event.y;
        var symbol = event.symbol;

        if(x == -1 || y == -1){
            this.disableAllSymbol();
            return;
        }

        // config.log("getAnimateSymbol : " +x +" @ " +y +" @ "+symbol +"@" +config.SymbolAnimation[symbol]);
        this.symbolArr[x][y].active = true;
        this.originalArr[x][y].active = false;
        
        if(this.isSpecialWild)
        {
            symbol = "w2";
        }
        
        if(winSymbolCount > config.REELDETAILS.MAXWINAMT)
        winSymbolCount =  config.REELDETAILS.MAXWINAMT;

        if(this.animateAmt.length!=0){
            console.log(winSymbolCount+ " / " +parseInt(symbolCount));
            symbolCount = symbolCount+1;
            // console.log(winAmt);
            if(winSymbolCount == parseInt(symbolCount)){
                // console.log(x+ " ?? " +y);
                this.animAmtArr[x][y].active = true;
                // console.log(x+ " ???? " +y);
                if(winAmt!=0)
                this.animAmtArr[x][y].getComponent(cc.Label).string = winAmt;
                else
                this.animAmtArr[x][y].getComponent(cc.Label).string = "";
            }
        }
        this.symbolArr[x][y].getComponent(cc.Animation).play(config.SymbolAnimation[symbol]);
    },
    // update (dt) {},
});
