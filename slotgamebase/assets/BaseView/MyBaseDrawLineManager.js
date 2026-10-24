var config = require('MyBaseConfig');
cc.Class({
    extends: cc.Component,

    properties: {
        isUseSystemDraw:false,
        winlineNode:cc.Node,
        reelObj:[cc.Node],
        color:[cc.Color],
        prefab:cc.Node,
        childsPos:[],
        linePos:[],
        lineObj:[],
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        for(let i=0;i<this.reelObj.length;i++){
            let _childs = [];
            for(let j = 0;j<this.reelObj[i].childrenCount;j++){
                _childs.push(this.reelObj[i].children[j].position);
            }

            this.childsPos.push(_childs);
        }
    },

    start () {
        this.startDrawAllLine();
        if(this.winlineNode!=null){
            this.winlineNode = this.winlineNode.getComponent(config.SCRIPT.LINEMANAGER);
            // console.log(this.lineObj);
            this.winlineNode.winLine = this.lineObj;
            this.winlineNode.winLinePos = this.childsPos;
            // console.log(this.winlineNode.winLine);
        }
    },
    startDrawAllLine(){
        if(this.isUseSystemDraw){
            for(let i=0;i<config.PAYLINEARR.length;i++){
                let drawing = cc.instantiate(this.prefab);
                // drawing.active = false;
                this.lineObj.push(drawing);
                this.node.addChild(drawing);
                drawing = drawing.getComponent(cc.Graphics);
                drawing.lineWidth = 10;
    
                let arr = config.PAYLINEARR[i];
                let index = arr[0]-1;
                drawing.moveTo(this.childsPos[0][index].x, this.childsPos[0][index].y);
        
                for(let i=1;i<arr.length;i++){
                    index = arr[i]-1;
                    // console.log(i +" / " +index);
                    // console.log(this.childsPos[i][index]);
                    drawing.lineTo(this.childsPos[i][index].x, this.childsPos[i][index].y);
                }
        
                drawing.strokeColor = this.color[i];
                drawing.stroke();
            }
        }
        
    },
    // update (dt) {},
});
