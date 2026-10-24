cc.Class({
    extends : cc.Component,

    properties : {
        WrapMode:{
            type:cc.Texture2D.WrapMode,
            default:cc.Texture2D.WrapMode.REPEAT,
        }
    },
    pic : cc.Texture2D,
    nsp: cc.SpriteFrame,
    getRect: cc.Rect,
    SP : cc.Sprite,

    start() {
        this.SP=this.node.getComponent(cc.Sprite) || this.node.addComponent(cc.Sprite);
        this.pic = this.SP.spriteFrame ? this.SP.spriteFrame._texture : null;   
        if (this.pic){
            this.pic.setWrapMode(this.WrapMode, this.WrapMode);
            this.pic.packable=false;
            this.pic.genMipmaps=true;
            this.getRect = new cc.Rect(0, 0, this.pic.width, this.pic.height);
        }
    },

    update(dt) {
        if (! this.pic)
            return null;
        let l=this.node.UVX||0;
        let r=l+1;
        let t=this.node.UVY||0;
        let b=t+1;
        this.nsp=new cc.SpriteFrame(this.pic, this.getRect);
        this.nsp.uv=[l, b, r, b, l, t, r, t];
        this.SP.spriteFrame=this.nsp;
    },

    // editor : {
    //     executeInEditMode : true
    // }
});