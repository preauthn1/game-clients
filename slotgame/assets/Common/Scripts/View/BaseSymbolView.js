var config = require('BaseConfig');
var utils = require('Utils');

cc.Class({
    extends: cc.Component,

    properties: {
        sprite: cc.Sprite,
        reelId: -1,
        index: -1,
        id: -1,
    },

    setSprite: function (image) {
        this.sprite.spriteFrame = image;
        //this.node.getComponent(cc.Animation).play("BlazingHitS1Anim");
    },

    setBlurSprite: function (image) {
        this.sprite.spriteFrame = image;
    },

    playSymbolAnimation: function (id) {
        this.node.getComponent(cc.Animation).play(id);
    },

    stopSymbolAnimation: function()
    {
        this.node.getComponent(cc.Animation).stop();
        this.sprite.node.setScale(1,1,1);
    },
    playStopAnimation(){
        this.node.runAction(
            cc.sequence(
                cc.scaleTo(0.2,1.3,1.3),
                cc.scaleTo(0.2,1,1),
            )
        );
    },
    setId: function (reelId, index, id) {

        this.reelId = reelId;
        this.index = index;
        this.id = id;
    },

    getId: function () {
        return this.id;
    },
});