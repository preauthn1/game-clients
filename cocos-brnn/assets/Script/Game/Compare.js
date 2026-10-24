var GameG = require("GameGlobal")

var Compare = {
	extends: cc.Component,

	onExit(){

	},

	Init(){
	    let canvas = cc.find("Canvas/GameLayer")
	    let root = cc.find("Compare",canvas)
	    this.uiRoot = {}
	    this.uiRoot.root = root
	    root.active =(false)
	     
	
	    this.uiRoot.allwin = {}
	    this.uiRoot.allwin.root = cc.find("erba_effct",root)
	    this.uiRoot.allwin.img = cc.find("erba_effct/text",root).getComponent(cc.Sprite)
	
	    this.uiRoot.alllose = {}
	    this.uiRoot.alllose.root = cc.find("tongpei",root)
		this.uiRoot.alllose.img = cc.find("tongpei/text",root).getComponent(cc.Sprite)
	},

	animStart(){
	    this.uiRoot.allwin.root.active =(false)
	    this.uiRoot.alllose.root.active =(false)
	    Compare.show(true)
	},

	//- 显示界面
	show(bShow){
		this.uiRoot.root.active = bShow
	},

	AllWin(){
	    GameG.PlayGameSound("eBankerWin")
		Compare.animStart()

		this.PlayAllParticle(this.uiRoot.allwin.root)

		this.uiRoot.allwin.root.active = true
		this.uiRoot.allwin.img.node.position = cc.v3(0,0,0)
		this.uiRoot.allwin.img.node.opacity = 0 
		this.uiRoot.allwin.img.node.scale = 3
		var sqs = GameG.NewTween(this.uiRoot.allwin.img.node)
		sqs.to(0.5, {opacity: 255, scale: 1})
		sqs.delay(1.5)
		sqs.to(0.5, {position: cc.v3(2000,0,0)})
		sqs.call(function(){
			Compare.show(false)
	    })
		sqs.delay(0.5)
		sqs.start()	
	},

	AllLose(){
	    GameG.PlayGameSound("eBankerLose")
		Compare.animStart()
		
		this.PlayAllParticle(this.uiRoot.alllose.root)

		this.uiRoot.alllose.root.active = true
		this.uiRoot.alllose.img.node.position = cc.v3(0,0,0)
		this.uiRoot.alllose.img.node.opacity = 0 
		this.uiRoot.alllose.img.node.scale = 3
		var sqs = GameG.NewTween(this.uiRoot.alllose.img.node)
		sqs.to(0.5, {opacity: 255, scale: 1})
		sqs.delay(1.5)
		sqs.to(0.5, {position: cc.v3(2000,0,0)})
		sqs.call(function(){
			Compare.show(false)
	    })
		sqs.delay(0.5)
		sqs.start()	   
	},

	PlayAllParticle(node){
		var children = node.children;
		for (var i = 0; i < children.length; ++i) {
			let ps =  children[i].getComponent(cc.ParticleSystem)
			if (ps != null)
				ps.resetSystem()
		}
	},
};

module.exports = Compare
