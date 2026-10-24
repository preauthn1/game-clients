var fmg  = require("FFunction")
var GameG  = require("GameGlobal")

var Toast = {
	extends: cc.Component,

	//- ui初始化
	initUi(){

		this.hideTime = 1.5                         // 隐藏时间
	    
    	// 移动动画位置
	    this.dtMovePos = [fmg.v3(0,0,0), fmg.v3(0,100,0)]
		
    	// 创建toast
		this.root = cc.find("Canvas")
	    this.prefab = cc.find("Toast", this.root)	
	},

	//- 显示结算界面
	show(msg, tm){
		
        let clone = cc.instantiate(this.prefab)
        clone.parent = this.root
        clone.position = cc.v3(0,0,0)
        clone.scale = 1
        clone.active = true

	    let text =cc.find("obj/text", clone).getComponent(cc.Label)
	    text.string = msg
	
		tm = tm || this.hideTime

		let obj = cc.find("obj", clone)
		obj.opacity = 0

		let sequence = GameG.NewTween(obj)
		.to(tm / 3, {opacity : 255})
		.delay(tm/3)
		.to(tm / 3, {opacity : 0})
		.start()
		
		let sequence1 = GameG.NewTween(clone)
		.to(tm, {position: this.dtMovePos[1]})
		.delay(tm)
		.call(function(){
			clone.active = false
			clone.destroy()
		})
		.start()
	},


};

module.exports = Toast
