var config = require('MyBaseConfig');
cc.Class({
    extends: cc.Component,

    properties: {
        musicOnSprite: cc.SpriteFrame,
        musicOffSprite: cc.SpriteFrame,
        musicButton: cc.Node,

        bgmIdArr: [cc.Integer],
        idArr: [cc.Integer],
        winArr: [cc.Integer],
        bgmPattern: 0,
        bgmClip: {
            default: [],
            type: cc.AudioClip,
        }, //normal , freespin 
        climaxClip: {
            default: [],
            type: cc.AudioClip,
        },
        fiveOfKind: {
            type: cc.AudioClip,
            default: null,
        },
        buttonClickClip: {
            type: cc.AudioClip,
            default: null,
        },
        winClip: {
            type: cc.AudioClip,
            default: null,
        },
        bigWinClip: {
            type: cc.AudioClip,
            default: null,
        },
        symbolClip: {
            default: [],
            type: cc.AudioClip,
        },
        symbolStopClip: {
            default: [],
            type: cc.AudioClip,
        },
        freeSpinTrigger: {
            type: cc.AudioClip,
            default: null,
        },
        enterFreeSpin: {
            type: cc.AudioClip,
            default: null,
        },
        exitFreeSpin: {
            type: cc.AudioClip,
            default: null,
        },
        reelStopClip: {
            type: cc.AudioClip,
            default: null,
        },
        preFSSelectionClip: {
            type: cc.AudioClip,
            default: null,
        },
        preFSSelectionTriggerClip: {
            type: cc.AudioClip,
            default: null,
        },
        preFSSelectionSummaryClip: {
            type: cc.AudioClip,
            default: null,
        },
        bonusTriggerClip: {
            type: cc.AudioClip,
            default: null,
        },
        bonusSelectionClip: {
            type: cc.AudioClip,
            default: null,
        },
        bonusSumarryClip: {
            type: cc.AudioClip,
            default: null,
        },
        desposeAnimClip: {
            type: cc.AudioClip,
            default: null,
        },
        desposeAnimDropClip: {
            type: cc.AudioClip,
            default: null,
        }
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start() {
        if (this.bgmPattern == 1) {
            this.playBGM(0);
        }

        if (this.getSfxVolume() == null)
            this.setSfxVolume(1);

        if (this.getBgmVolume() == null)
            this.setBgmVolume(1);

        if (this.getIsMute() == null)
            this.setIsMute(false);

        if (this.musicButton != null) {
            this.musicButton.on('click', this.enableMusic, this);
            this.updateButtonSprite();
        }
    },
    enableMusic() {
        var isMute = this.getIsMute();
        if (isMute != "true") {
            if (this.bgmPattern == 1) {
                cc.audioEngine.setMusicVolume(0);
            }
            this.setIsMute(true);
        }
        else {
            if (this.bgmPattern == 1) {
                cc.audioEngine.setMusicVolume(1);
            }
            this.setIsMute(false);
        }
        this.updateButtonSprite();
        if (this.buttonClickClip != null)
            this.playCustomSoundSfx(this.buttonClickClip, false);
    },
    updateButtonSprite() {
        if (this.musicButton == null)
            return;

        var isMute = this.getIsMute();
        config.log(isMute);
        if (isMute != "true") {
            this.musicButton.getComponent(cc.Sprite).spriteFrame = this.musicOnSprite;
        }
        else {
            this.musicButton.getComponent(cc.Sprite).spriteFrame = this.musicOffSprite;
        }
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
        this.stopWinSoundSfx();
    },

    stopBGM: function () {
        cc.audioEngine.stopMusic();
        this.bgmIdArr = [];
    },
    backFromSpecialToNormal(){
        if (this.bgmPattern == 1) {
            this.playBGM(0);
        }
    },
    spinPlayBGM(val) {
        if (this.bgmIdArr.length != 0)
            return;

        if (this.bgmPattern != 1) {
            this.playBGM(val);
        }
    },
    spinStopBGM() {
        if (this.bgmPattern != 1) {
            this.stopBGM();
        }
    },

    stopAllSound: function () {
        this.stopAllSfx();
        this.stopBGM();
    },

    playBGM: function (val) {
        this.stopBGM();
        var isMute = this.getIsMute();
        if (this.bgmClip[val] != null) {
            var audioID = cc.audioEngine.playMusic(this.bgmClip[val], true);
            if (isMute != "true") {
                cc.audioEngine.setMusicVolume(1);
            }
            else {
                cc.audioEngine.setMusicVolume(0);
            }
            this.bgmIdArr.push(audioID);
        }
    },

    playCustomSoundSfx: function (clip, isLoop) {
        if (clip == null) {
            return;
        }

        var isMute = this.getIsMute();
        var audioID = cc.audioEngine.playEffect(clip, isLoop);
        this.idArr.push(audioID);
        if (isMute != "true") {
            cc.audioEngine.setEffectsVolume(1);
        }
        else {
            cc.audioEngine.setEffectsVolume(0);
        }
    },
    playSymbolSoundSfx(clip) {
        if (clip == null)
            return;

        var isMute = this.getIsMute();
        if (isMute != "true") {
            cc.audioEngine.stopEffect();
            var audioID = cc.audioEngine.playEffect(clip, false);
            this.winArr.push(audioID);
        }
    },
    playWinSoundSfx(clip) {
        if (clip == null)
            return;

        var isMute = this.getIsMute();
        if (isMute != "true") {
            var audioID = cc.audioEngine.playEffect(clip, false);
            this.winArr.push(audioID);
        }
    },
    stopWinSoundSfx() {
        for (var i = 0; i < this.winArr.length; i++) {
            var val = this.winArr[i];
            cc.audioEngine.stopEffect(val);
        };
        this.winArr = [];
    },

    updateMuteStatus: function () {
        var isMute = this.getIsMute();
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
        this.setBgmVolume(val);
        cc.audioEngine.setMusicVolume(val);
    },

    setEffectsVolume: function (val) {
        this.setSfxVolume(val);
        cc.audioEngine.setEffectsVolume(val);
    },

    getSfxVolume: function () {
        var data = cc.sys.localStorage.getItem(config.PREFAB.SFX_VOLUME);
        return data;
    },

    setSfxVolume: function (value) {
        cc.sys.localStorage.setItem(config.PREFAB.SFX_VOLUME, value);
    },

    getBgmVolume: function () {
        var data = cc.sys.localStorage.getItem(config.PREFAB.BGM_VOLUME);
        return data;
    },

    setBgmVolume: function (value) {
        cc.sys.localStorage.setItem(config.PREFAB.BGM_VOLUME, value);
    },

    getIsMute: function () {
        var data = cc.sys.localStorage.getItem(config.PREFAB.ISMUTE);
        return data;
    },

    setIsMute: function (value) {
        cc.sys.localStorage.setItem(config.PREFAB.ISMUTE, value);
    }
    // update (dt) {},


});
