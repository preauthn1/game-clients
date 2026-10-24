cc.Class({
    extends: cc.Component,

    properties: {
    },

    onLoad () {
        var manager = cc.director.getCollisionManager();
        manager.enabled = true;
    }
});
