var config = require('MyBaseConfig');
cc.Class({
    extends: cc.Component,

    properties: {
        eventManager: cc.Node,
        winLine: [cc.Node],
        winFrameParent: [cc.Node],
        winFrame: {
            default: [],
            type: cc.Node,
            visible: false,
        },
        winFrameSprite: [cc.SpriteFrame],
        winFrameColor: [cc.Color],
        winDotLeftParent: cc.Node,
        winDotLeft: {
            default: [],
            type: cc.Node,
            visible: false,
        },
        winDotRightParent: cc.Node,
        winDotRight: {
            default: [],
            type: cc.Node,
            visible: false,
        },
        winLinePos: [cc.Node],
        lineAnimPrefab: cc.Node,
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start() {
        if (this.eventManager != null)
            var reg = this.eventManager.getComponent(config.SCRIPT.REGISTEREVENT);
        else
            var reg = this.node.parent.getComponent(config.SCRIPT.REGISTEREVENT);
        reg.subscribeEvent(config.EVENT.ENABLEWINLINE, this.enableWinLine, this);
        reg.subscribeEvent(config.EVENT.ENABLEWINFRAME, this.enableWinFrame, this);
        reg.subscribeEvent(config.EVENT.ENABLESCATTERFRAME, this.enableScatterFrame, this);

        var childs = [];
        for (let i = 0; i < this.winFrameParent.length; i++) {
            var frames = [];
            for (let j = 0; j < this.winFrameParent[i].childrenCount; j++) {
                frames.push(this.winFrameParent[i].children[j]);
                this.winFrameParent[i].children[j].active = false;
            }
            childs.push(frames);
        }
        this.winFrame = childs;

        var frames2 = [];
        if (this.winDotLeftParent != null) {
            for (let j = 0; j < this.winDotLeftParent.childrenCount; j++) {
                frames2.push(this.winDotLeftParent.children[j]);
                this.winDotLeftParent.children[j].active = false;
            }
            this.winDotLeft = frames2;
        }

        var frames3 = [];
        if (this.winDotRightParent != null) {
            for (let j = 0; j < this.winDotRightParent.childrenCount; j++) {
                frames3.push(this.winDotRightParent.children[j]);
                this.winDotRightParent.children[j].active = false;
            }
            this.winDotRight = frames3;
        }

        //cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);

    },
    onKeyDown: function (event) {
        switch (event.keyCode) {
            case 77: //Space
                var winline = 4;
                if (this.lineAnimPrefab != null) {
                    var line = cc.instantiate(this.lineAnimPrefab);
                    line.parent = this.node;

                    var multiActions = [];

                    let arr = config.PAYLINEARR[winline];
                    let index = arr[0] - 1;
                    console.log(this.winLinePos);
                    line.position = cc.v2(this.winLinePos[0][index].x, this.winLinePos[0][index].y);
                    for (let i = 1; i < arr.length; i++) {
                        index = arr[i] - 1;
                        multiActions.push(cc.moveTo(0.3, cc.v2(this.winLinePos[i][index].x, this.winLinePos[i][index].y)));
                    }
                    multiActions.push(cc.callFunc(this.destroyObject, this, { obj: line }));
                    line.runAction(cc.sequence(multiActions));
                }
                break;
        }
    },

    enableWinLine(event) {
        // config.log(event);
        var winline = event.line;

        if (winline < 0) {
            this.disableAllWinLine();
            this.disableAllWinDot();
            return;
        }
        if (this.lineAnimPrefab != null && this.winLine.length == 0) {
            var line = cc.instantiate(this.lineAnimPrefab);
            line.parent = this.node;

            var multiActions = [];

            let arr = config.PAYLINEARR[winline];
            let index = arr[0] - 1;
            line.position = cc.v2(this.winLinePos[0][index].x, this.winLinePos[0][index].y);
            for (let i = 1; i < arr.length; i++) {
                index = arr[i] - 1;
                multiActions.push(cc.moveTo(0.3, cc.v2(this.winLinePos[i][index].x, this.winLinePos[i][index].y)));
            }
            multiActions.push(cc.callFunc(this.destroyObject, this, { obj: line }));
            line.runAction(cc.sequence(multiActions));
        }
        if (this.winLine.length != 0)
            this.winLine[winline].active = true;

        if (this.winDotLeft.length != 0)
            this.winDotLeft[winline].active = true;
        if (this.winDotRight.length != 0)
            this.winDotRight[winline].active = true;
    },
    destroyObject(target, data) {
        data.obj.destroy();
    },
    enableWinFrame(event) {
        if (this.winFrame.length == 0)
            return;

        var winFrameX = event.x;
        var winFrameY = event.y;
        let winLine = event.line;
        if (winFrameX == -1 || winFrameY == -1) {
            this.disableAllFrame();
            return;
        }
        // console.log("enableWinFrame : " +winFrameX + " / " +winFrameY);
        if (this.winFrameSprite.length != 0 && winLine != -1) {
            this.winFrame[winFrameX][winFrameY].getComponent(cc.Sprite).spriteFrame = this.winFrameSprite[winLine];
        } else if (this.winFrameColor.length != 0 && winLine != -1) {
            this.winFrame[winFrameX][winFrameY].color = this.winFrameColor[winLine];
        }
        // console.log("enableWinFrame2 : " +winLine);
        // console.log( this.winFrame[winFrameX][winFrameY]);
        this.winFrame[winFrameX][winFrameY].active = true;
    },
    enableScatterFrame(event) {
        if (this.winFrame.length == 0)
            return;

        var winFrameX = event.x;
        var winFrameY = event.y;
        let winLine = event.line;
        if (winFrameX == -1 || winFrameY == -1) {
            this.disableAllFrame();
            return;
        }

        if (this.winFrameSprite.length != 0)
            this.winFrame[winFrameX][winFrameY].getComponent(cc.Sprite).spriteFrame = this.winFrameSprite[0];
        else if (this.winFrameColor.length != 0) {
            this.winFrame[winFrameX][winFrameY].color = this.winFrameColor[0];
        }

        this.winFrame[winFrameX][winFrameY].active = true;
    },
    disableAllWinLine() {
        // console.log(this.winLine);
        for (let i = 0; i < this.winLine.length; i++) {
            this.winLine[i].active = false;
        }

        // if(winFrameX == -1 || winFrameY == -1){
        //     this.disableAllFrame();
        //     return;
        // }
        // this.winFrame[winFrameX][winFrameY].active = true;
    },
    disableAllFrame() {
        for (let i = 0; i < this.winFrame.length; i++) {
            for (let j = 0; j < this.winFrame[i].length; j++) {
                this.winFrame[i][j].active = false;
            }
        }
    },
    disableAllWinDot() {
        for (let i = 0; i < this.winDotLeft.length; i++) {
            this.winDotLeft[i].active = false;
        }
        for (let i = 0; i < this.winDotRight.length; i++) {
            this.winDotRight[i].active = false;
        }
    },
});