// Learn cc.Class:
//  - [Chinese] http://example.invalid/creator/manual/zh/scripting/class.html
//  - [English] http://example.invalid/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://example.invalid/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://example.invalid/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://example.invalid/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://example.invalid/docs/creator/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        symbolsNode: {
            default: [],
            visible: false,
        },
        symbolsDefaulPos: {
            default: [],
            visible: false,
        },
        checkDesposeStatus: [cc.String],
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start() {
        var childsNode = [];
        var childsPos = [];
        var checkPos = null;

        var childView = [];
        for (let j = 0; j < this.node.childrenCount; j++) {
            childsNode.push(this.node.children[j]);
            childsPos.push(this.node.children[j].position);
        }
        this.symbolsNode = childsNode;
        this.symbolsDefaulPos = childsPos;
    },

    playMoveDownAnimate() {
        let deposeSymbol = [];
        let desposeNum = [];
        let num= 0;
        for (let i = 0; i < this.checkDesposeStatus.length; i++) {
            if (this.checkDesposeStatus[i] == 1) {
                deposeSymbol.push(this.symbolsNode[i]);
                desposeNum.push(i);
                this.symbolsNode[i].active = false;
            }
        }

         //perform restore array
         for (let i = deposeSymbol.length-1; i>=0; i--) {
            this.symbolsNode.splice(desposeNum[i],1);
         }
         for (let i =0;i<deposeSymbol.length;i++) {
            this.symbolsNode.push(deposeSymbol[i]);
         }

         console.log(this.symbolsNode);
         this.playMoveAnimate();
    },

    playMoveAnimate(){
        for (let j = 0; j < this.symbolsNode.length; j++) {
            let pos = this.symbolsDefaulPos[j];
            if(this.symbolsNode[j].activeInHierarchy){
                this.symbolsNode[j].runAction(cc.sequence(
                    cc.delayTime(2),
                    cc.moveTo(1, cc.v2(this.symbolsDefaulPos[j].x, this.symbolsDefaulPos[j].y)),
                    // cc.callFunc(this.resetAllEffect, this),
                ));
            }
            else{
                this.symbolsNode[j].active = true;
                this.symbolsNode[j].runAction(cc.sequence(
                    cc.delayTime(0),
                    cc.moveTo(0.05, cc.v2(this.symbolsDefaulPos[j].x, this.symbolsDefaulPos[j].y)),
                    // cc.callFunc(this.resetAllEffect, this),
                ));
            }
        }
    },
    update (dt) {},
});
