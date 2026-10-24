cc.Class({
    extends: cc.Component,
    extends: require('FrameView'),

    properties: {
        game: {
            default: null,
            visible: false,
        },
        curTime: {
            default: 0,
            visible: false,
        },
    },

    getCurTime() {
        return this.curTime;
    },

    init(tempGame) {
        this.game = tempGame;
        this.curTime = this.game.curGameTime;
    },

    setCurTime(deltaTime) {
        if (this.gameStart) {
            this.curTime += deltaTime;
            if (this.curTime >= this.game.maxGameTime) {
                this.gameStart = false;
            }
        }
    },

    startGame() {
        this.gameStart = true;
    },

    endGame() {
        this.gameStart = false;
    },
});