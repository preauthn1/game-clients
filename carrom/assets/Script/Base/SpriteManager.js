cc.Class({
    extends: cc.Component,

    onLoad () {
        this.file = new Map();

        var children = this.node.children;
        for (var i = 0; i < children.length; ++i) {
            let obj = children[i]
            let sprite = obj.getComponent(cc.Sprite)
            this.file.set(obj.name, sprite.spriteFrame);
        }
    },

    get(name){
        if (this.file.has(name) == undefined){
            return null
        }
        else{
            return this.file.get(name)
        }
    } 
});
