cc.Class({
    extends: cc.Component,

    properties: {
        show: false,
        image: cc.Node,
    },
    // use this for initialization
    onLoad: function () {
        this.schedule(this.blink, 1);
    },
    blink: function () {
        this.show = !this.show;
        this.image.active = this.show;
    },

});

