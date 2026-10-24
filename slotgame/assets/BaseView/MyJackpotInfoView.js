var accounting = require('Accounting');

cc.Class({
    extends: cc.Component,

    properties: {
        jackpotLabel: [cc.Label],
        openBtn: cc.Button,
        closeBtn: cc.Button,
        openMaxTime: 5,
        openTimer: 0,
        openFlag: 0,
        yPos: [cc.Float],
        startingValue: [cc.Integer],
        currValue:[cc.Integer],
        startingRandomPercent: [cc.Integer],
        glowSpeed: [cc.Float],
        isNotAnimate: false,
        isRunAnim: false,

        jackpotAnnoucement: [cc.String],
        jackpotAnnouceNode: cc.Node,
        jackpotAnnouceLabel: cc.RichText,
        isRunningJackpotAnnAnim:0,

        jackpotTotal:0,
        jackpotTotalTxt:cc.Label,
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start() {
        this.isRunAnim = false;
        if (this.openBtn != null)
            this.openBtn.node.on('click', this.open, this);
        if (this.closeBtn != null)
            this.closeBtn.node.on('click', this.close, this);

        window.jpMainView = this;

        // if(window.jpValue!=""){
        //     console.log(windo)
        //     this.show(window.jpValue);
        // }
        // else{
            for (let i = 0; i < this.startingValue.length; i++) {
                this.startingValue[i] += (this.startingValue[i] * Math.floor(Math.random() * this.startingRandomPercent[i]));
                let temp = accounting.formatNumber(this.startingValue[i], 0, ",");
                this.jackpotLabel[i].string = temp;
            }
        // }
        // this.jackpotAnnouceNode.setScale(0.6, 0.6);
        this.open();
        setInterval(this.updateValue, 200);
        // this.showAnnoucement();
    },
    addAnnoucement(jsonResult) {
        let annTxt = "Congratulation Player <b><color=#00ff00>" + jsonResult[1] + "</c></b> has won <b><color=#00EBFF>" + jsonResult[3] + "</c></b> in <b><color=#00EBFF>" + jsonResult[0] + "</c></b> jackpot";

        this.jackpotAnnoucement.push(annTxt);
        this.showAnnoucement();
    },
    deleteAnnoucement() {
        this.jackpotAnnoucement.shift();
    },
    showAnnoucement() {

        if (this.jackpotAnnoucement.length == 0 || this.jackpotAnnouceNode == null || this.isRunningJackpotAnnAnim == 1)
            return;

        this.jackpotAnnouceNode.active = true;
        this.jackpotAnnouceLabel.string = this.jackpotAnnoucement[0];
        this.isRunningJackpotAnnAnim = 1;
        this.jackpotLabel[0].node.runAction(cc.sequence(
            cc.delayTime(6.0),
            cc.callFunc(this.hideAnnoucement, this),
            cc.delayTime(1.0),
            cc.callFunc(this.deleteAnnoucement, this),
            cc.callFunc(this.showAnnoucement, this),
        ));
    },
    hideAnnoucement() {
        this.isRunningJackpotAnnAnim = 0;
        this.jackpotAnnouceNode.active = false;
    },
    show(arr) {
        // window.jpValue = arr;
        console.log("Show Array : " + arr);
        var array = JSON.parse(arr);

        this.jackpotTotal = 0;
        for (let i = 0; i < array.length; i++) {
            this.startingValue[array[i][1] - 1] = array[i][0];
            let temp = accounting.formatNumber(this.startingValue[array[i][1] - 1], 0, ",");
            if(this.jackpotTotal ==0){
                this.jackpotLabel[array[i][1] - 1].string = temp;
                // setInterval(this.updateValue, 1000);
            }
            this.jackpotTotal += parseInt(array[i][0]);
        }
        if(this.jackpotTotalTxt!=null){
            let temp = accounting.formatNumber(this.jackpotTotal, 0, ",");
            this.jackpotTotalTxt.string = temp;
        }
        if (!this.isNotAnimate)
            this.open();

    },
    updateValue(){
    },
    update(dt) {

        // if (this.openFlag == 1) {
        //     this.openTimer += dt;

        //     if (this.openTimer > this.openMaxTime) {
        //         this.openTimer = 0;
        //         this.close();
        //     }
        // }
        if (this.isRunAnim) {
            for (let i = 0; i < this.startingValue.length; i++) {
                let inc = dt * Math.random() * 100;
                this.startingValue[i] += inc;
                let temp = accounting.formatNumber(this.startingValue[i], 0, ",");
                this.jackpotLabel[i].string = temp;
            }
        }
    },

    open() {
        this.openTimer = 0;
        this.node.stopAllActions();
        this.isNotAnimate = true;
        // if(this.openFlag == 0){
        if (this.closeBtn != null)
            this.closeBtn.node.active = true;
        if (this.openBtn != null)
            this.openBtn.node.active = false;

        if(this.yPos.length>0){
            this.node.runAction(cc.sequence(
                cc.moveTo(0.5, cc.v2(this.node.position.x, this.yPos[0])),
                cc.delayTime(0),
            ));
        }
        this.openFlag = 1;
        // }
        // else{
        //     if(this.closeBtn!=null)
        //     this.closeBtn.node.active = false;
        //     if(this.openBtn!=null)
        //     this.openBtn.node.active = true;

        //     this.close();
        //     this.openFlag = 0;
        // }
    },
    close() {
        this.openTimer = 0;
        if (this.closeBtn != null)
            this.closeBtn.node.active = false;
        if (this.openBtn != null)
            this.openBtn.node.active = true;
        this.node.stopAllActions();
        this.openFlag = 0;

        if(this.yPos.length>0){
            this.node.runAction(cc.sequence(
                cc.moveTo(0.5, cc.v2(this.node.position.x, this.yPos[1])),
                cc.delayTime(0),
            ));
        }
        
    },
});