var utils = require('Utils');
var accounting = require('Accounting');

cc.Class({
    extends: cc.Component,

    properties: {
        progressP: {
            default: null,
            type: cc.ProgressBar
        },
        isProgressing: false,
        toProgress: 0,
        progressL: cc.Label,
        //isStartLoading: false,
    },



    // use this for initialization
    onLoad: function () {
        this.progressP.active = false;
        this.node.runAction(
            cc.sequence(
                cc.delayTime(1),
                cc.callFunc(this.startLoading, this, {}),
            )
        );
    },

    startLoading: function (target, data) {
        this.isStartLoading = true;
        /*
        cc.loader.onProgress = function (completedCount, totalCount, item) {
            var progress = (completedCount / totalCount).toFixed(2);
            cc.log("completedCount = "+completedCount+",totalCount="+totalCount+",progress="+progress);
            /*
            if(item && item.uuid && progress > self.loadBar.fillRange){
                self.loadBar.fillRange = progress;
            }
        };
    
        cc.director.loadScene('Hall',null,function () {
            cc.loader.onProgress = null;
        });
        
            */
    },

    update: function (dt) {
        if (this.isStartLoading == true) {
            var progress = this.progressP.progress;
            if (progress > 0) {
                if (progress < 1) {
                    progress += dt;
                    var temp = progress * 100; 
                    var value = accounting.formatNumber(temp, 2, ",");
                    this.progressL.string = value + "%";
                }
                else {
                    progress = 1;
                    var temp = progress * 100; 
                    var value = accounting.formatNumber(temp, 2, ",");
                    this.progressL.string = value + "%";
                    this.isStartLoading = false;
                    cc.director.loadScene('Login');
                }
            }
            this.progressP.progress = progress;
        }
    }

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
