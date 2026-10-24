var G = require("Global")
var GameG = require("GameGlobal")
var fmg = null
var maxCount = 9

var ChartLayer = {
	extends: cc.Component,

	onExit(){
	},

	Init(){
		fmg = require("FFunction")

    	// 弹出动画显示和消失位置
	    this.dtPopAnimPos = [null, fmg.v3(260,32,0), fmg.v3(1044,32,0)]
	
	    this.dtRefType = ["type", "num"]                    // 
	    this.uiItems = [[], []]                             // 
		
	    let canvas = cc.find("Canvas/GameLayer")
	    let root = cc.find("ChartLayer",canvas)
	    this.uiRoot = {}
	    this.uiRoot.root = root
	    let uiRoot = this.uiRoot
	    root.active =(false)
		
	    root.getComponent(cc.Button).node.on('click',function(){
			GameG.PlayGameSound("se_click")
        	//brnn.gameAudio:btnClick()
	        ChartLayer.show(false)
	    })
	
	    this.uiRoot.bg = cc.find("bg",root)
	    this.uiRoot.chart = [{}, {}]
	    this.uiRoot.chart[1].scroll = cc.find("bg/type/scroll/Viewport/Content",root)
	    this.uiRoot.chart[1].item = cc.find("bg/type/item",root)
	    this.uiRoot.chart[1].item.active =(false)
	
	  
		this.uiRoot.bg.position = this.dtPopAnimPos[2]
		
	    this.uiRoot.choice = cc.find("bg/choice",root).getComponent(cc.Sprite)
		
		let repeatTween = cc.tween(uiRoot.choice.node)
		let tween = cc.tween(repeatTween)
		.to(0.5, {opacity: 255 * 0.6})
		.to(0.5, {opacity: 255})
		repeatTween.repeat(9999999999, tween).start()
	},

	//- 更新界面
	update(data){
		for(let i = 0; i < this.uiItems[1].length; ++i){
			fmg.Destroy(this.uiItems[1][i])
		}
	 	this.uiItems[1]=[]
			 
		for(let i = data.PokerList.length - 1; i >= 0; --i){
		   	if(i < data.PokerList.length - maxCount ){ return }
			
			for(let j = 1; j <= data.PokerList[i].RetType.length; ++j){
	       		if(data.PokerList[i].RetType[j]==1){ 
					this.addRst(j, true)
				} 
       			else{
					this.addRst(j, false)
	       		}
	     	}
	  	}
	},

	//- 显示界面
	show(bShow, call){
	    if(this.dtLayerShow == bShow ){ return }
		if(this.hPopAction ){ this.hPopAction.stop() }
		this.dtLayerShow = bShow
	    let over = bShow && this.dtPopAnimPos[1] || this.dtPopAnimPos[2]
	    //let speed = bShow && CS.DG.Tweening.Ease.OutSine || CS.DG.Tweening.Ease.InSine
		
		this.uiRoot.root.active =(true)
		
		var sqs = GameG.NewTween(this.uiRoot.bg)
		this.hPopAction = sqs
	//----->需重新編譯程式碼    sqs:SetEase(speed)
		sqs.to(0.5, {position: over})
	    fmg.argFuncAnim(sqs, function(adt){
	        adt[1].active =(adt[2])
	        if(adt[3] ){ adt[3]() }
		}, [null, this.uiRoot.root, bShow, call])
		sqs.start()

		for(let j = 0; j < this.uiItems[1].length; ++j){
			let it1=this.uiItems[1][j]
			let img = cc.find("1", it1).getComponent(cc.Sprite)
			console.log(img.node.width, img.node.height)
		}
	},

	//- 更新界面
	addRst(rtype,iswin){
	    let it1
	    if(rtype==1) {
	        if(this.uiItems[1].length >= maxCount ){
				it1 = this.uiItems[1][maxCount - 1]
				this.uiItems[1].pop()
				fmg.Destroy(it1)
			}

			it1 = cc.instantiate(this.uiRoot.chart[1].item)
	        it1.active =(true)
			this.uiItems[1].unshift(it1)
			
			for(let j = 0; j < this.uiItems[1].length; ++j){
				it1 =this.uiItems[1][j]
				it1.parent =(this.uiRoot.chart[1].scroll)
				it1.position = cc.v2(0,0)
			}
		} 

		it1=this.uiItems[1][0]
		
		let img = cc.find(rtype.toString(), it1).getComponent(cc.Sprite)
		img.node.active =(true)
		if(iswin){ 
			GameG.SetImageSprite(img, G.GetGamePName(), "rstIcon2", false)
		} 
		else{
			GameG.SetImageSprite(img, G.GetGamePName(), "rstIcon1", false)
		}
	},


};

module.exports = ChartLayer
