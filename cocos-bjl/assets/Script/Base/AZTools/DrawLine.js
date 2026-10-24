cc.Class({
    extends: cc.Component,

    properties: {
        Line: {
            type: cc.Vec2,
            default: [],
        },
        randTest: {
            type: cc.Boolean,
            default: false,
            notify() {
                this.clear();
                this.draw();
            }
        },
    },
    drawing: cc.Graphics,

    onLoad() {
        this.Line = [];
        this.Line.push(new cc.v2(-406, 0));
        this.Line.push(new cc.v2(-323.6, 0));
        this.Line.push(new cc.v2(-158.8, 0));
        this.Line.push(new cc.v2(6, 0));
        this.Line.push(new cc.v2(170.8, 0));
        this.Line.push(new cc.v2(335.6, 0));
        this.Line.push(new cc.v2(418, 0));
        this.drawing = this.node.getComponent(cc.Graphics);
    },

    draw: function ()             //呼叫這個畫線
    {
        let len = this.Line.length;
        if (len < 1) return;
        this.drawing.moveTo(this.Line[0].x, this.Line[0].y);
        for (let i = 1; i < len; i++) {
            this.drawing.lineTo(this.Line[i].x, this.Line[i].y);
        }
        this.drawing.stroke();
    },

    clear: function ()           //呼叫這個清除
    {
        this.drawing.clear();
    },

    update(dt)                   //測試用
    {
        if (this.randTest) {
            this.Line[0].y = this.Line[1].y = Math.floor(Math.random() * 40) * 10;
            this.Line[2].y = Math.floor(Math.random() * 40) * 10;
            this.Line[3].y = Math.floor(Math.random() * 40) * 10;
            this.Line[4].y = Math.floor(Math.random() * 40) * 10;
            this.Line[5].y = this.Line[6].y = Math.floor(Math.random() * 40) * 10;
            // this.randTest = false;   
            this.clear();
            this.draw();
        }
    },

    editor: {
        executeInEditMode: true,
        requireComponent: cc.Graphics
    }
});