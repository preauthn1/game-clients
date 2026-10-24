var accounting = require('Accounting');
var config = require('BaseConfig');
var utils = require('Utils');

cc.Class({
    extends: cc.Component,

    properties: {
        isStartJackpotAnim: false,
        grandValue: 9904050,
        majorValue: 3569012,
        minorValue: 1766022,

        grandTween: 0,//9004050
        majorTween: 0,//3369012
        minorTween: 0,//1566022

        grandL: cc.Label,
        majorL: cc.Label,
        minorL: cc.Label,
    },

    // called every frame, uncomment this function to activate update callback
    update: function (dt) {

        if (this.isStartJackpotAnim == true) {
            var interval = dt * 3000;
            if (this.grandTween < this.grandValue) {
                this.grandTween += interval;
            }
            if (this.majorTween < this.majorValue) {
                this.majorTween += interval;
            }
            if (this.minorTween < this.minorValue) {
                this.minorTween += interval;
            }

            var tempGrand = accounting.formatNumber(this.grandTween, 0, ",");
            var tempMajor = accounting.formatNumber(this.majorTween, 0, ",");
            var tempMinor = accounting.formatNumber(this.minorTween, 0, ",");

            this.grandL.string = config.SLOTDETAILS.DENOMINATION_PREFIX + tempGrand;
            this.majorL.string = config.SLOTDETAILS.DENOMINATION_PREFIX + tempMajor;
            this.minorL.string = config.SLOTDETAILS.DENOMINATION_PREFIX + tempMinor;
        }
    },

    onReceiveMainJackpotData: function (arr) {
        this.grandValue = arr[0];
        this.majorValue = arr[1];
        this.minorValue = arr[2];

        this.isStartJackpotAnim = true;
    },
});

