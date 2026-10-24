cc.Class({
    extends: cc.Component,

    properties: {
        image: cc.Node,
        music: cc.AudioSource,
        slider_h: cc.Slider,
    },

    onLoad () {
    },

    _updateImageOpacity (progress) {
        this.image.opacity = progress * 255;
    },

    _updateMusicVolume (progress) {
        this.music.volume = progress;
    },


    onSliderHEvent (sender, eventType) {
        this._updateMusicVolume(sender.progress);
    }
});
