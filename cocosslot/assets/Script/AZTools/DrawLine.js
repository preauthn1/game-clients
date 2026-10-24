cc.Class({
    extends: cc.Component,

    properties: {
        Line: {
            type: cc.Vec2,
            default: [],
        },
        lineNum: 0,
        randTest: {
            type: cc.Boolean,
            default: false,
            notify()
            {
                this.clear();
                this.draw();
            }
        },
    },
    drawing: cc.Graphics,

    onLoad()
    {
        var ar = this.node.parent.getChildByName("_PayLineIDLeft").children;
        this.drawing = this.node.getComponent(cc.Graphics);
        this.high = [[], [], []];
        var i, j;
        for (i = 0, j = 0; i < 8; i++, j++)
        {
            this.high[0].push(ar[i].y);
        }
        for (i = 8, j = 0; i < 17; i++, j++)
        {
            this.high[1].push(ar[i].y);
        }
        for (i = 17, j = 0; i < 25; i++, j++)
        {
            this.high[2].push(ar[i].y);
        }
        this.Line = [];
        this.Line.push(new cc.v2(-406, 0));
        this.Line.push(new cc.v2(-323.6, 0));
        this.Line.push(new cc.v2(-158.8, 0));
        this.Line.push(new cc.v2(6, 0));
        this.Line.push(new cc.v2(170.8, 0));
        this.Line.push(new cc.v2(335.6, 0));
        this.Line.push(new cc.v2(418, 0));
    },

    draw: function ()             //呼叫這個畫線
    {
        let len = this.Line.length;
        if (len < 1) return;
        this.drawing.moveTo(this.Line[0].x, this.Line[0].y);
        for (let i = 1; i < len; i++)
        {
            this.drawing.lineTo(this.Line[i].x, this.Line[i].y);
        }
        this.drawing.stroke();
    },

    clear: function ()           //呼叫這個清除
    {
        this.drawing.clear();
    },

    update(dt)                           //測試用
    {
        if (this.randTest)
        {
            let PNum = [];
            for (let i = 0; i < 5; i++)
            {
                PNum.push(Math.floor(Math.random() * 3));
            }
            this.Line[0].y = this.high[PNum[0]][this.lineNum];
            this.Line[1].y = this.high[PNum[0]][this.lineNum];
            this.Line[2].y = this.high[PNum[1]][this.lineNum];
            this.Line[3].y = this.high[PNum[2]][this.lineNum];
            this.Line[4].y = this.high[PNum[3]][this.lineNum];
            this.Line[5].y = this.high[PNum[4]][this.lineNum];
            this.Line[6].y = this.high[PNum[4]][this.lineNum];
            this.randTest = false;
        }
    },

    editor: {
        executeInEditMode: true,

        requireComponent: cc.Graphics
    }
});