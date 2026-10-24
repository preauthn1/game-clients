cc.Class({
    extends : cc.Component,

    properties : {
        x : 0, cardGroup : 0
    },

    init : function (choose) {
        this.cardGroup     = null;
        this.choose        = choose;
        this.node.position = cc.v2(0, 0);
        this.draginParent  = choose.draginParent;
        this.img           = this.node.getComponent(cc.Sprite);
        this.node.img      = this.img;
        this.x             = this.node.convertToWorldSpaceAR(cc.v2(0, 0)).x;
        this.node.on(cc.Node.EventType.TOUCH_END, this.onTOUCHEND, this);
        this.node.data   = this;
        this.node.zIndex = 0;
    },

    updateX() {
        this.x = this.node.convertToWorldSpaceAR(cc.v2(0, 0)).x;
    },

    checkTouchEnter(cx, cy, node) {
        if (node === this.node) {
            return false;
        }
        let p  = this.node.convertToNodeSpaceAR(cc.Vec2.ZERO);
        let hw = this.node.width * this.node.scaleX * 0.5;
        let hh = this.node.height * this.node.scaleY * 0.5;
        let x  = -p.x;
        let l  = x - hw;
        let r  = x + hw;
        return cx > l && cx < r;
    },

    //混在Card.js的陣列中用的，沒其餘作用
    onTouchEnter : function (target) {

    },

    onTOUCHEND : function (event) {
        let change = this.choose.dragingCard;
        if (change) {
            change.node.parent = change.cardGroup.node;
            let c              = change.cardGroup.node.children;
            let len            = c.length;
            for (let i = 0; i < len; i++) {
                c[i].zIndex = i;
            }

            change.node.zIndex = this.node.zIndex;
            this.node.parent   = this.draginParent;
            this.choose.clearDragingCard();
        }
    },

});
