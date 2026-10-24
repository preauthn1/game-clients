cc.Class({
    extends: cc.Component,

    properties: {
        obj:[cc.Node],
        color:cc.Color,
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {
        if(this.obj.length <= 1)
        return;

        this.drawing = this.node.getComponent(cc.Graphics);
        this.drawing.lineWidth = 10;
        this.drawing.moveTo(this.obj[0].position.x, this.obj[0].position.y);

        for(let i=1;i<this.obj.length;i++){
            this.drawing.lineTo(this.obj[i].position.x, this.obj[i].position.y);
        }

        this.drawing.strokeColor = this.color;
        this.drawing.stroke();
    },

    // update (dt) {},
});
