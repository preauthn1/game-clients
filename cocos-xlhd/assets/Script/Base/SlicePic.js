cc.Class({
    extends:cc.Component,

    properties:{
        source:{
            type:cc.Texture2D, // use 'type:' to define Texture2D object directly
            default:null     // object's default value is null
        },
        targetSprite:{
            type:cc.Sprite,
            default:null
        },
        rect:cc.rect(),
    },

    start()
    {
        //切割图片
        if (this.targetSprite == null) this.targetSprite = this.node.getComponent(cc.Sprite);
        this.targetSprite.spriteFrame = new cc.SpriteFrame(this.source, this.rect);
    },

    update(dt)
    {
        if (this.targetSprite == null) this.targetSprite = this.node.getComponent(cc.Sprite);
        this.targetSprite.spriteFrame = new cc.SpriteFrame(this.source, this.rect);
    },

    // this property is for Component only
    // value type:Object
    editor:CC_EDITOR && {
        // Allows the current component to run in editor mode.
        // By default, all components are executed only at runtime, meaning that they will not have
        // their callback functions executed while the Editor is in edit mode.
        //
        // Value type:Boolean
        // Default:false
        executeInEditMode:true,
    }
});