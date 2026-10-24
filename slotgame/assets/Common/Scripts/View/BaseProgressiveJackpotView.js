var accounting = require('Accounting');
var utils = require('Utils');
var config = require('BaseConfig');

cc.Class({
    extends: cc.Component,

    properties: {
        gameController: cc.Node,
        audioController: cc.Node,
        progressiveJackpotContent: cc.Node,
        progressiveJackpotSummary: cc.Node,
        progressiveIGoArr: {
            default: [],
            type: cc.Node,
        },
        progressiveJackpotSummaryL: cc.Label,
    },

    init: function () {
        this.gameController = this.gameController.getComponent(config.SCRIPT_PREFIX + 'GameController');
        this.audioController = this.audioController.getComponent(config.SCRIPT_PREFIX + 'AudioController');
    },

    show: function (progressJackpotWinType, progressJackpotWinAmount) {
        
        this.showProgressiveJackpotAnim(progressJackpotWinType, progressJackpotWinAmount);
    },

    hideProgressiveJackpotContent: function () {
        //this.hide();
    },

    hide: function () {
        for(let i=0;i<this.progressiveIGoArr.length;i++){
            this.progressiveIGoArr[i].active = false;
        }
        this.progressiveJackpotContent.active = false;
        this.progressiveJackpotSummary.active = false;
        this.hideProgressiveJackpotContent();
    },

    getProgressJackpotIndex: function (progressJackpotWinType) {
        return progressJackpotWinType;
    },  

    onReelSpinComplete: function (val) {
      },

    onSpinState: function () {
       
    },

    reset: function()
    {
        this.node.stopAllActions();
        this.hide(); 
    },

    onReceiveJackpotInfo(data){

    }
    
});
