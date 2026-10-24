/** 自動重設圖片大小 */
cc.Class({
    extends: cc.Component,

    onLoad () {

        let sprite = this.node.getComponent(cc.Sprite);
        if (sprite == null)
            return;

        if (sprite.spriteFrame == null)
            return;

		let size = sprite.spriteFrame.getOriginalSize();
		sprite.node.width = size.width;
		sprite.node.height = size.height;
    },
});
