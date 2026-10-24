window.globalEvent = new cc.EventTarget();
var config = require('MyBaseConfig');
cc.Class({
    extends: cc.Component,

    properties: {
        openBtn:cc.Node,
        closeBtn:cc.Node,
        musicBtn:cc.Node,
        sfxBtn:cc.Node,
        musicOnOff:[cc.Node],
        sfxOnOff:[cc.Node],
    },
    onLoad () {
        this.closeBtn.on('click', this.close, this);
        this.openBtn.on('click', this.open, this);
        this.musicBtn.on('click', this.setMusicVolume, this);
        this.sfxBtn.on('click', this.setEffectsVolume, this);
        if(this.getSfxVolume() == null)
            this.setSfxVolume(1);

        if(this.getMusicVolume() == null)
        this.setMusicVolume1(1);

        if(this.getSfxVolume() == 1){
            cc.audioEngine.setEffectsVolume(1);
            this.sfxOnOff[0].active = true;
            this.sfxOnOff[1].active = false;
        }
        else{
            cc.audioEngine.setEffectsVolume(0);
            this.sfxOnOff[1].active = true;
            this.sfxOnOff[0].active = false;

        }
        if(this.getMusicVolume() == 1){
            cc.audioEngine.setMusicVolume(1);
            this.musicOnOff[0].active = true;
            this.musicOnOff[1].active = false;
        }
        else{
            cc.audioEngine.setMusicVolume(0);
            this.musicOnOff[1].active = true;
            this.musicOnOff[0].active = false;
        }
        
        this.node.active = false;
    },
    close(){
        this.node.active = false;
    },
    open(){
        this.node.active = true;
    },
    start () {
        
    },
    setMusicVolume: function () {
        let val = 0;
        console.log(this.getMusicVolume());
        if(this.getMusicVolume() == 1){
            val = 0;
            this.musicOnOff[1].active = true;
            this.musicOnOff[0].active = false;
        }
        else{
            val = 1;
            this.musicOnOff[0].active = true;
            this.musicOnOff[1].active = false;
        }
        this.setMusicVolume1(val);
        cc.audioEngine.setMusicVolume(val);
    },

    setEffectsVolume: function () {
        let val = 0;
        if(this.getSfxVolume() == 1){
            val = 0;
            this.sfxOnOff[1].active = true;
            this.sfxOnOff[0].active = false;
        }
        else{
            val = 1;
            this.sfxOnOff[0].active = true;
            this.sfxOnOff[1].active = false;
        }
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

    getMusicVolume: function () {
        var data = cc.sys.localStorage.getItem(config.PREFAB.BGM_VOLUME);
        return data;
    },

    setMusicVolume1: function (value) {
        cc.sys.localStorage.setItem(config.PREFAB.BGM_VOLUME, value);
    },

    // update (dt) {},
});
