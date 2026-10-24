cc.Class({
    extends: cc.Component,

    properties: {
        animationName: "", //播放動畫名稱，空值會播放Default
        loopDuration: -1,   //動畫Loop多久後關閉node，Clip為Loop模式下才有作用(-1:不關閉)
    },

    onEnable() {
        var anim = this.node.getComponent(cc.Animation)
        var animState = anim.play(this.animationName, 0);
        let duration = 0;

        if (animState.wrapMode == cc.WrapMode.Loop) {
            duration = this.loopDuration;
        }
        else if (animState.wrapMode == cc.WrapMode.Normal) {
            duration = animState.duration;
        }
        if (this.loopDuration != -1) {
            this.node.runAction(cc.sequence(
                cc.delayTime(duration),
                cc.callFunc(() => {
                    this.node.active = false;
                }, this),
            ));
        }
    },

    onDisable() {
        this.node.stopAllActions();
    },

});
