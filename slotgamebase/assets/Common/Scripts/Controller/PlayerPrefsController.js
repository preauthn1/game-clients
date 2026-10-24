var djSlotConstants = require('DJSlotConstants');
var utils=require('Utils');
var playerPrefsController = cc.Class({
    extends: cc.Component,

    properties: {
        /*
        localStorage: {
            default: null,
            visible: false,
            type: Object
        }
        */
    },

    onLoad: function () {
        //this.localStorage = cc.sys.localStorage;
        playerPrefsController.instance = this;
        
        /*
        var isMute = this.localStorage.getItem(djSlotConstants.SERVERDATAKEYS.ISMUTE);
        if (!isMute) {
            this.setIsMute(false);
            utils.log("playerPrefsController::" + isMute);
        }
        else {
            utils.log("onLoad::" + this.localStorage.getItem(djSlotConstants.SERVERDATAKEYS.ISMUTE));
        }
        */
    },
    statics: {
        instance: null
    },

    getSfxVolume: function () {
        var data = cc.sys.localStorage.getItem(djSlotConstants.PLAYERPREFSKEYS.SFX_VOLUME);
        return data;
    },

    setSfxVolume: function (value) {
        cc.sys.localStorage.setItem(djSlotConstants.PLAYERPREFSKEYS.SFX_VOLUME, value);
    },

    getBgmVolume: function () {
        var data = cc.sys.localStorage.getItem(djSlotConstants.PLAYERPREFSKEYS.BGM_VOLUME);
        return data;
    },

    setBgmVolume: function (value) {
        cc.sys.localStorage.setItem(djSlotConstants.PLAYERPREFSKEYS.BGM_VOLUME, value);
    },

    getIsMute: function () {
        var data = cc.sys.localStorage.getItem(djSlotConstants.PLAYERPREFSKEYS.ISMUTE);
        return data;
    },

    setIsMute: function (value) {
        cc.sys.localStorage.setItem(djSlotConstants.PLAYERPREFSKEYS.ISMUTE, value);
        utils.log("playerprefs::isMute::" + playerPrefsController.instance.getIsMute());
    }
});
