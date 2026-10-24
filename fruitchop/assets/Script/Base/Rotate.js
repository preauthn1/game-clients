/** 自動旋轉物件 */
cc.Class({
    extends: cc.Component,

    properties: {
        speed: 100
    },

    update (dt) {
        this.node.angle += dt * this.speed
    },
});
