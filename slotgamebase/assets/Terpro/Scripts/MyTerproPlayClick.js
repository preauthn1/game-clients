var config = require('MyBaseConfig');
var AudioManager = require(config.SCRIPT.AUDIOMANAGER);
cc.Class({
    extends: cc.Component,
    properties: {
    },
     start () {
         this.node.on('click', this.play, this);
         this.audioManager = cc.find("Canvas/AudioView").getComponent(AudioManager);
    },
     play(){
        if (this.audioManager != null) this.audioManager.playCustomSoundSfx(this.audioManager.buttonClickClip,false);
     }
});
