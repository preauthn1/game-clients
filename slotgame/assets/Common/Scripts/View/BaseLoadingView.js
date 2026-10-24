var utils = require('Utils');
cc.Class({
    extends: cc.Component,

    properties: {
        parent: cc.Node,
        loadingIGo: cc.Node,
    },

    onLoad: function () {
    },

    checkVisibility: function () {
        utils.log("loadingView::" + this.parent.active);
    },

    show: function () {
        this.parent.active = true;
        /*
        var action = new cc.repeatForever(
            new cc.sequence(
                cc.rotateTo(1, 180),
                cc.rotateTo(1, 360),
                cc.callFunc(this.resetLoadingIcon, this)));
        this.loadingIGo.runAction(action);
        */
    },

    resetLoadingIcon : function()
    {
        this.loadingIGo.setRotation(0);
    },

    hide: function () {
        this.parent.active = false;
    },

    preloadScene: function () {

        /*
        cc.director.preloadScene(val, (err) => {
            if (err) {
                // error handling
                return;
            }
            cc.director.loadScene(val);
        });



        cc.loader.onProgress = (completedCount, totalCount, item) => {
            var percent = 0;
            if (totalCount > 0) {
                percent = 100 * completedCount / totalCount;
            }
            //this.progressL.string = Math.round(percent) + '%';
        };
*/
    },
});
