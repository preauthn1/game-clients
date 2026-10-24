var config = require('MyBaseConfig');
cc.Class({
    extends: cc.Component,

    properties: {
        eventManager:cc.Node,
        originalReel:[cc.Node],
        animateReel:[cc.Node],
        animateAmt:[cc.Node],
        symbolArr:[cc.Node],
        originalArr:[cc.Node],
        animAmtArr:[cc.Node],
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {
        if(this.eventManager!=null)
        var reg = this.eventManager.getComponent(config.SCRIPT.REGISTEREVENT);
        else
        var reg = this.node.parent.getComponent(config.SCRIPT.REGISTEREVENT);
        reg.subscribeEvent(config.EVENT.ENABLEWINFRAME,this.getAnimateSymbol,this);
        reg.subscribeEvent(config.EVENT.ENABLESCATTERFRAME,this.getAnimateSymbol,this);

        this.symbolArr = [];
        this.originalArr = [];
        this.animAmtArr = [];
        for(let i=0;i<this.animateReel.length;i++){   
            var childsNode = [];
            var childsNode2 = [];
            var childsNode3 = [];
            for(let j = 0;j<this.animateReel[i].childrenCount;j++){
                childsNode.push(this.animateReel[i].children[j]);
                childsNode2.push(this.originalReel[i].children[j]);
                if(this.animateAmt.length!=0){
                    childsNode3.push(this.animateAmt[i].children[j]);
                    this.animateAmt[i].children[j].active = false;
                }
                this.animateReel[i].children[j].active = false;
            }
            this.symbolArr.push(childsNode);
            this.originalArr.push(childsNode2);
            if(this.animateAmt.length!=0)
            this.animAmtArr.push(childsNode3);
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

        config.log("getAnimateSymbol : " +x +" @ " +y +" @ "+symbol +"@" +config.SymbolAnimation[symbol]);
        this.symbolArr[x][y].active = true;
        this.originalArr[x][y].active = false;

        this.symbolArr[x][y].getComponent(cc.Animation).play(config.SymbolAnimation[symbol]);
    
        if(winSymbolCount > config.REELDETAILS.MAXWINAMT)
        winSymbolCount =  config.REELDETAILS.MAXWINAMT;
        
        if(this.animateAmt.length!=0){
            symbolCount = symbolCount+1;
            if(winSymbolCount == parseInt(symbolCount)){
                //&& parseInt(symbolCount) <= config.REELDETAILS.MAXWINAMT
                this.animAmtArr[x][y].active = true;
                // this.animAmtArr[x][y].getComponent(cc.Label).string = winAmt;
                if(winAmt!=0)
                this.animAmtArr[x][y].getComponent(cc.Label).string = winAmt;
                else
                this.animAmtArr[x][y].getComponent(cc.Label).string = "";
            }
        }
    },

    disableAllSymbol(){
        for(let i=0;i<this.symbolArr.length;i++){   
            for(let j = 0;j<this.symbolArr[i].length;j++){
                this.symbolArr[i][j].active = false;
                this.originalArr[i][j].active = true;
                this.animAmtArr[i][j].active = false;
            }
        }
    },
    
    // QA - start
    // update (dt)
    // {
    //     for(let i in this.originalArr)
    //     {
    //         for(let j in this.originalArr[i])
    //         {
    //             if(this.originalArr[i][j].active == true)
    //             {
    //                 this.originalArr[i][j].opacity = 255
    //             }
    //             else
    //             {
    //                 this.originalArr[i][j].active = true
    //                 this.originalArr[i][j].opacity = 0
    //             }
    //         }
    //     }
    // },
    // QA - end
});
