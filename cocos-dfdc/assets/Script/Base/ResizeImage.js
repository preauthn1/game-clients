cc.Class({
    extends: cc.Component,

    onLoad () {

        let sprite = this.node.getComponent(cc.Sprite);
        if (sprite == null)
            return;

        if (sprite.spriteFrame == null)
            return;

        let texture = sprite.spriteFrame.getTexture();
        let size = sprite.spriteFrame.getOriginalSize()
     
        if (texture != null){
            sprite.node.width = size.width;
            sprite.node.height = size.height;
        }
    },
});
