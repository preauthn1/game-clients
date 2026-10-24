var playerPrefsController = require('PlayerPrefsController');
var utils = require('Utils');

cc.Class({
    extends: cc.Component,
    properties: {
        loginBgm: {
            default: null,
            type: cc.AudioClip
        },
        bgmIdArr: {
            default: [],
            type: [cc.Integer]
        },
        idArr:
        {
            default: [],
            type: [cc.Integer]
        },
    },
    
    start: function () {
        this.playBGM(0);
        this.updateMuteStatus();
    },

    stopAllSfx: function () {
        for (var i = 0; i < this.idArr.length; i++) {
            var val = this.idArr[i];
            var check = this.bgmIdArr.indexOf(val);
            if (check == -1) {
                cc.audioEngine.stopEffect(val);
            }
        };
        this.idArr = [];
    },

    stopBGM: function () {
        cc.audioEngine.stopMusic();
        this.bgmIdArr = [];
    },

    stopAllSound: function () {
        this.stopAllSfx();
        this.stopBGM();
    },

    playBGM: function (val) {
        this.stopBGM();
        var audioID = cc.audioEngine.playMusic(this.loginBgm, true);
        this.bgmIdArr.push(audioID);
    },

    setIsMute: function (val) {
        playerPrefsController.instance.setIsMute(val);
        this.updateMuteStatus();
    },

    updateMuteStatus: function()
    {
        var isMute = playerPrefsController.instance.getIsMute();
        utils.log("loginAudio::isMute::" + isMute);
        if (isMute == "false") {
            this.setMusicVolume(1);
            this.setEffectsVolume(1);
        }
        else {
            this.setMusicVolume(0);
            this.setEffectsVolume(0);
        }
    },

    setMusicVolume: function (val) {
        playerPrefsController.instance.setBgmVolume(val);
        cc.audioEngine.setMusicVolume(val);
    },

    setEffectsVolume: function (val) {
        playerPrefsController.instance.setSfxVolume(val);
        cc.audioEngine.setEffectsVolume(val);
    },

});
