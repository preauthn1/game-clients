var GameG = require("GameGlobal")

/** 用途: 訊息介面 */
var UIMessage = {
    extends: cc.Component,
    
    Init(root){
        this.rootRect = root
        this.rootRect.active = false
        
        this.txtMessage = cc.find("Text", root).getComponent(cc.Label)
    },
    
    CreateClone(content){
        let clone = cc.instantiate(this.rootRect)
        if(clone == null) return null
        this.rootRect.parent.addChild(clone)
        clone.position = cc.v3(0,0,0)
        clone.scale = 1
        clone.active = true
        
        let temp = {}
        temp.root = clone
        temp.imgc = cc.find("Background", clone).getComponent(cc.Sprite)
        temp.imgl = cc.find("Background/Left", clone).getComponent(cc.Sprite)
        temp.imgr = cc.find("Background/Right", clone).getComponent(cc.Sprite)
        temp.txt = cc.find("Text", clone).getComponent(cc.Label)
        temp.txt.string = GameG.GetLocalizedString(content)
        
        return temp
    },
    /** 顯示動畫介面 */
    ShowTimer(content,timer){
        timer = timer || 1
        let clone = UIMessage.CreateClone(content)
		
		let effectTime = timer /3
		
        cc.tween(clone.root)
        .to(timer, {position: cc.v2(0, 100)})
        .delay(effectTime)
        .call(function(){
            clone.root.active = false
            clone.root.destroy()
		})
		.start()
		
		let action = cc.tween()
					.to(effectTime, {opacity: 255})
					.delay(effectTime)
					.to(effectTime, {opacity: 0})

        clone.imgc.node.opacity = 0
        clone.imgl.node.opacity = 0
        clone.imgr.node.opacity = 0
		clone.txt.node.opacity = 0

		action.clone(clone.imgc.node).start();		
		action.clone(clone.imgl.node).start();
		action.clone(clone.imgr.node).start();
		action.clone(clone.txt.node).start();
    },
    /** 顯示介面 */
    Show(content){
        this.txtMessage.string = GameG.GetLocalizedString(content)
        this.rootRect.active = true
    },
    /** 關閉介面 */
    Hide(){
        this.rootRect.active = false
    },
};

module.exports = UIMessage;
