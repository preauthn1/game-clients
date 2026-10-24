var playerPrefsController = require('PlayerPrefsController');
var utils = require('Utils');

var audioController = cc.Class({
    extends: cc.Component,

    properties: {
        bgmNormalStr: 0,
        bgmFreeSpinStr: 1,
        bgmBonusStr: 2,
        bgmIdArr: {
            default: [],
            type: [cc.Integer]
        },
        bgmAudioClipArr: {             
            default: [],             
            type: cc.AudioClip,         
        },
        idArr:
            {
                default: [],
                type: [cc.Integer]
            },
        intro: {
            default: null,
            type: cc.AudioClip
        },
        buttonSpin: {
            default: null,
            type: cc.AudioClip
        },
        apStart: {
            default: null,
            type: cc.AudioClip
        },
        apStop: {
            default: null,
            type: cc.AudioClip
        },
        buttonUp: {
            default: null,
            type: cc.AudioClip
        },
        buttonDown: {
            default: null,
            type: cc.AudioClip
        },
        buttonClick: {
            default: null,
            type: cc.AudioClip
        },
        buttonTotalBet: {
            default: null,
            type: cc.AudioClip
        },
        climaxId: -1,
        climax: {
            default: null,
            type: cc.AudioClip
        },
        freeSpinSummary: {
            default: null,
            type: cc.AudioClip
        },
        lineToggle: {
            default: null,
            type: cc.AudioClip
        },
        preFreeSpinB: {
            default: null,
            type: cc.AudioClip
        },
        preFreeSpinSummary: {
            default: null,
            type: cc.AudioClip
        },
        preFreeSpinTrigger: {
            default: null,
            type: cc.AudioClip
        },
        freeSpinTrigger: {
            default: null,
            type: cc.AudioClip
        },
        reelSpin0: {
            default: null,
            type: cc.AudioClip
        },
        reelSpin1: {
            default: null,
            type: cc.AudioClip
        },
        reelSpin2: {
            default: null,
            type: cc.AudioClip
        },
        reelSpin3: {
            default: null,
            type: cc.AudioClip
        },
        freeSpinReelSpin0: {
            default: null,
            type: cc.AudioClip
        },
        freeSpinReelSpin1: {
            default: null,
            type: cc.AudioClip
        },
        freeSpinReelSpin2: {
            default: null,
            type: cc.AudioClip
        },
        freeSpinReelSpin3: {
            default: null,
            type: cc.AudioClip
        },
        reelStop: {
            default: null,
            type: cc.AudioClip
        },
        scatterHit: {
            default: [],
            type: [cc.AudioClip]
        },
        symbolCode: {
            default: [],
            type: ['String']
        },
        symbolPath: {
            default: [],
            type: cc.AudioClip
        },
        panelMinMax: {
            default: null,
            type: cc.AudioClip
        },
        smallWin: {
            default: null,
            type: cc.AudioClip
        },
        midWin: {
            default: null,
            type: cc.AudioClip
        },
        bigWin: {
            default: null,
            type: cc.AudioClip
        },
        bigWinId:{
            default:0,
            type:cc.Integer,   
        },
        bigWinPopUp:{
            default: null,
            type: cc.AudioClip
        },

        symbolStop:{             
            default: [],             
            type: cc.AudioClip,         
        },
    },


    init: function () {
    },

    start: function () {
        this.updateMuteStatus();
    },

    playIntro: function () {
        this.playCustomSoundSfx(this.intro, false);
    },

    playClimax: function () {
        this.stopSfx(this.climaxId);
        var isMute = playerPrefsController.instance.getIsMute();
        if (isMute == "false") {
            var audioID = cc.audioEngine.playEffect(this.climax, false);
            this.idArr.push(audioID);
            this.climaxId = audioID;
        }
    },

    playSpinB: function () {
        this.playCustomSoundSfx(this.buttonSpin, false);
    },

    playApStart: function () {
        this.playCustomSoundSfx(this.apStart, false);
    },

    playApStop: function () {
        this.playCustomSoundSfx(this.apStop, false);
    },

    playReelStop: function () {
        this.playCustomSoundSfx(this.reelStop, false);
    },

    playReelSpin: function () {
        this.playCustomSoundSfx(this.reelSpin0, false);
    },

    playFreeSpinReelSpin: function () {
        this.playCustomSoundSfx(this.freeSpinReelSpin0, false);
    },

    playButtonClick: function () {
        this.playCustomSoundSfx(this.buttonClick, false);
    },

    playScatter: function (val) {
        this.playCustomSoundSfx(this.scatterHit[val], false);
    },

    playPreFreeSpinTrigger: function () {
        this.playCustomSoundSfx(this.preFreeSpinTrigger, false);
    },

    playPreFreeSpinB: function () {
        this.playCustomSoundSfx(this.preFreeSpinB, false);
    },

    playPreFreeSpinSummary: function () {
        this.playCustomSoundSfx(this.preFreeSpinSummary, false);
    },

    playFreeSpinTrigger: function () {
        this.playCustomSoundSfx(this.freeSpinTrigger, false);
    },

    playLineToggle: function () {
        this.playCustomSoundSfx(this.lineToggle, false);
    },

    playFreeSpinSummary: function () {
        this.playCustomSoundSfx(this.freeSpinSummary, false);
    },

    playSymbol: function (val) {
        var index = this.symbolCode.indexOf(val);
        this.playCustomSoundSfx(this.symbolPath[index], false);
    },

    playPanelMinMax: function (val) {
        this.playCustomSoundSfx(this.panelMinMax, false);
    },

    playSmallWin: function (val) {
        this.playCustomSoundSfx(this.smallWin, false);
    },

    playMidWin: function (val) {
        this.playCustomSoundSfx(this.midWin, false);
    },
    playPopUp:function(){
        this.playCustomSoundSfx(this.bigWinPopUp, false);
    },
    playBigWin: function () {
        if (clip == null) {
            return;
        }
        var isMute = playerPrefsController.instance.getIsMute();
        if (isMute == "false") {
            var audioID = cc.audioEngine.playEffect(clip, true);
            this.bigWinId = audioID;
        }
        //this.playCustomSoundSfx(this.bigWin, false);
    },
    stopBigWin(){
        if(this.bigWinId == 0)
        return;

        cc.audioEngine.stopEffect(this.bigWinId);
        this.bigWinId = 0;
    },
    playButtonUp: function () {
        this.playCustomSoundSfx(this.buttonUp, false);
    },

    playButtonDown: function () {
        this.playCustomSoundSfx(this.buttonDown, false);
    },

    pauseAll: function () {
        cc.audioEngine.pauseAll();
    },

    resumeAll: function () {
        cc.audioEngine.resumeAll();
    },

    setEffectsVolume: function (val) {
        cc.audioEngine.setEffectsVolume(val);
    },

    getEffectsVolume: function () {
        var volume = cc.audioEngine.getEffectsVolume();
        return volume;
    },

    setMusicVolume: function (val) {
        cc.audioEngine.setMusicVolume(val);
    },

    getMusicVolume: function () {
        var volume = cc.audioEngine.getMusicVolume();
        return volume;
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

    stopSfx: function (val) {

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
        if (this.bgmAudioClipArr[val] != null) {
            var audioID = cc.audioEngine.playMusic(this.bgmAudioClipArr[val], true);
            this.bgmIdArr.push(audioID);
        }
    },

    playCustomSoundSfx: function (clip, isLoop) {
        if (clip == null) {
            return;
        }
        var isMute = playerPrefsController.instance.getIsMute();
        if (isMute == "false") {
            var audioID = cc.audioEngine.playEffect(clip, isLoop);
            this.idArr.push(audioID);
        }
    },

    updateMuteStatus: function () {
        var isMute = playerPrefsController.instance.getIsMute();
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
    playStopSound(i){
        this.playCustomSoundSfx(this.symbolStop[i-1],false);
    },
});
