//Date
//此文件由[BabeLua]插件自动生成
//endregion
var G = require("Global")
var GameG = require("GameGlobal")
var gameLayer = null
var gameAudio = null
var bit = null
var fmg = null
var gameData = null

var Compare = {
	extends: cc.Component,

//-
	init(){
		gameLayer = require("GameLayer")
		gameAudio = require("GameAudio")
		bit = require("BitHelper")
		fmg = require("FFunction")
		gameData = require("GameData")

	    this.initData()
	    this.initUi()
	},

//-
	onExit(){
	},

//-
	initData(){
	    this.dtOpenCardStep = 0                     // 开牌动画
    	// 比牌双方的key，用于逻辑循环
		this.dtOpenPlayer = ["user", "banker"]
		
    	// card动画始末状态 dtCardTrans[(user,banker)[card[(初始,發牌)[(pos,rot,scale)]]]]	
		this.dtCardTrans = []
		this.dtCardTrans[1] = []
		this.dtCardTrans[1][1] = []
		this.dtCardTrans[1][1][1] = {}
		this.dtCardTrans[1][1][1].pos = cc.v3(0,-10,0)
		this.dtCardTrans[1][1][1].rot = cc.v3(0,0,0)
		this.dtCardTrans[1][1][1].scale = 1
		
		this.dtCardTrans[1][1][2] = {}
		this.dtCardTrans[1][1][2].pos = cc.v3(80,-10,0)
		this.dtCardTrans[1][1][2].rot = cc.v3(0,0,0)
		this.dtCardTrans[1][1][2].scale = 1
		
		this.dtCardTrans[1][2] = []
		this.dtCardTrans[1][2][1] = {}
		this.dtCardTrans[1][2][1].pos = cc.v3(0,-10,0)
		this.dtCardTrans[1][2][1].rot = cc.v3(0,0,0)
		this.dtCardTrans[1][2][1].scale = 1
		
		this.dtCardTrans[1][2][2] = {}
		this.dtCardTrans[1][2][2].pos = cc.v3(225,-10,0)
		this.dtCardTrans[1][2][2].rot = cc.v3(0,0,0)
		this.dtCardTrans[1][2][2].scale = 1
		
		this.dtCardTrans[1][3] = []
		this.dtCardTrans[1][3][1] = {}
		this.dtCardTrans[1][3][1].pos = cc.v3(0,-10,0)
		this.dtCardTrans[1][3][1].rot = cc.v3(0,0,0)
		this.dtCardTrans[1][3][1].scale = 1
		
		this.dtCardTrans[1][3][2] = {}
		this.dtCardTrans[1][3][2].pos = cc.v3(370,-10,0)
		this.dtCardTrans[1][3][2].rot = cc.v3(0,0,0)
		this.dtCardTrans[1][3][2].scale = 1
								
		this.dtCardTrans[2] = []
		this.dtCardTrans[2][1] = []
		this.dtCardTrans[2][1][1] = {}
		this.dtCardTrans[2][1][1].pos = cc.v3(0,-10,0)
		this.dtCardTrans[2][1][1].rot = cc.v3(0,0,0)
		this.dtCardTrans[2][1][1].scale = 1
		
		this.dtCardTrans[2][1][2] = {}
		this.dtCardTrans[2][1][2].pos = cc.v3(-80,-10,0)
		this.dtCardTrans[2][1][2].rot = cc.v3(0,0,0)
		this.dtCardTrans[2][1][2].scale = 1
		
		this.dtCardTrans[2][2] = []
		this.dtCardTrans[2][2][1] = {}
		this.dtCardTrans[2][2][1].pos = cc.v3(0,-10,0)
		this.dtCardTrans[2][2][1].rot = cc.v3(0,0,0)
		this.dtCardTrans[2][2][1].scale = 1
		
		this.dtCardTrans[2][2][2] = {}
		this.dtCardTrans[2][2][2].pos = cc.v3(-225,-10,0)
		this.dtCardTrans[2][2][2].rot = cc.v3(0,0,0)
		this.dtCardTrans[2][2][2].scale = 1
		
		this.dtCardTrans[2][3] = []
		this.dtCardTrans[2][3][1] = {}
		this.dtCardTrans[2][3][1].pos = cc.v3(0,-10,0)
		this.dtCardTrans[2][3][1].rot = cc.v3(0,0,0)
		this.dtCardTrans[2][3][1].scale = 1
		
		this.dtCardTrans[2][3][2] = {}
		this.dtCardTrans[2][3][2].pos = cc.v3(-370,-10,0)
		this.dtCardTrans[2][3][2].rot = cc.v3(0,0,0)
		this.dtCardTrans[2][3][2].scale = 1
		
    	// 当前牌的类型显示列表
		this.uiCardType = [[], []]
		this.tm = 0
	},

//-
	initUi(){
    // 
		let canvas = cc.find("Canvas/GameLayer")
		let root = cc.find("GameLayer/Compare",canvas)
	    this.uiRoot = []
	    this.uiRoot.root = root
	    let uiRoot = this.uiRoot
	    root.active =(false)
    //////
	    uiRoot.bg = cc.find("bg",root)
	    uiRoot.win1 = cc.find("bg/win1",root)
	    uiRoot.win2 = cc.find("bg/win2",root)
	    uiRoot.win3 = cc.find("bg/win3",root)
	    uiRoot.winImg1 = cc.find("bg/winImage/win1",root)
	    uiRoot.winImg2 = cc.find("bg/winImage/win2",root)
	    uiRoot.winImg3 = cc.find("bg/winImage/win3",root)	
	    uiRoot.win1.active =(false)
	    uiRoot.win2.active =(false)
	    uiRoot.win3.active =(false)
		for(let _ in (this.dtOpenPlayer)){ 
			let v = this.dtOpenPlayer[_] 

	        uiRoot[v] = {}
			let pl = uiRoot[v]
			pl.root = cc.find("bg/"+v,root)
	        pl.scoreBG = cc.find("bg/"+v+"/rstbg",root)
	        pl.score = cc.find("bg/"+v+"/rstbg/score",root).getComponent("TextControl")
	        pl.win = cc.find("bg/"+v+"/sheng",root)
	        pl.cardRoot = cc.find("bg/"+v+"/card",root)
			
	        pl.card = []
			for(let i = 1; i <= 3; ++i){
	            pl.card[i] = cc.find("bg/"+v+"/card/card"+i,root).getComponent(cc.Sprite)
	        }
			pl.mask = cc.find("bg/"+v+"/card/card3/mask",root).getComponent(cc.Sprite)
			pl.mask.node.active =(false)
	    }
    //
	},

//- 显示界面
	show(bShow, call){
	    fmg.popAnim(bShow, this.uiRoot.root, this.uiRoot.bg, 0.1, call)
	},

//- 开牌主动画
	animOpenCards(data, call){
	    this.dtOpenCardStep = 1
		
		let slef = this

		var sqs = GameG.NewTween(this.uiRoot.root)
		
		gameLayer.uiRoot.timer.root.active =(false)
		
	    fmg.argFuncAnim(sqs, function(adt){
			gameLayer.showBetEf(2)
			gameAudio.turnStep(4)
			gameAudio.eStopBetBg()	
		}, [data])
		sqs.delay(1.5)	
		
		// 显示比牌界面
	    fmg.argFuncAnim(sqs, function(adt){
	        slef.animOpenInit(adt[0])
	    }, [data])
		sqs.delay(0.5)
	    
		// 发牌动画
	    fmg.argFuncAnim(sqs, function(adt){
	        slef.animOpenDeal(adt[0])
	    }, [data])
		
		let playOnCardTime = 0.8
	    let tm = playOnCardTime * 4
		if(data.XianPoker.length == 3 ){
			tm = tm + playOnCardTime
		}
		if(data.ZhuangPoker.length == 3 ){
			tm = tm + playOnCardTime
		}
		sqs.delay(tm)		
		
		// 報閒點數
		sqs.call( function(){
			slef.showResultAudio(slef.uiRoot.user.root, data, 0)
			
			let cardRoot = slef.uiRoot.user.cardRoot
			let bs = cardRoot.scale
			let es = cardRoot.scale + 0.1
			let sqs1 = GameG.NewTween(cardRoot)
			sqs1.to(0.15, {scale: es})
			sqs1.to(0.15, {scale: bs})
			sqs1.start()	
		})
		sqs.delay(1)

		// 報庄點數
		sqs.call( function(){
			slef.showResultAudio(slef.uiRoot.banker.root, data, 1)
			
			let cardRoot = slef.uiRoot.banker.cardRoot
			let bs = cardRoot.scale
			let es = cardRoot.scale + 0.1
			let sqs1 = GameG.NewTween(cardRoot)
			//sqs1.easing(cc.easeQuadraticActionInOut ())
			sqs1.to(0.15, {scale: es})
			sqs1.to(0.15, {scale: bs})
			sqs1.start()	
		})
		sqs.delay(1.7)
			
		// 显示结果特效
	    fmg.argFuncAnim(sqs, function(adt){
	        slef.animOpenRstEf(adt[1])
		}, [null, data])
		sqs.delay(0.2)
		sqs.call( function(){
			gameAudio.ePlayResult()
		})
		sqs.delay(0.6)
		sqs.call( function(){
			gameLayer.uiRoot.timer.time_open.active =(true)
		})
		sqs.delay(1.2)
		sqs.call( function(){
			// let objImg = slef.uiRoot.winImg1
			
			// if(slef.dtWinSide == 2 ){ 
			// 	objImg = slef.uiRoot.winImg2
			// }
			// else if(slef.dtWinSide == 3 ){

			// 	objImg = slef.uiRoot.winImg3
			// }
			// objImg.active =(true)
			
			gameLayer.ShowResultPoker(data)
		})
		
		if(data.ZuHe != null ){
			let isPair = 0
			// 閒對子
			console.log(gameData.dtRstType[7])
			if(gameData.dtRstType[7].bit != null ){
				if(bit.band(data.ZuHe, gameData.dtRstType[7].bit) != 0 ){
					isPair = 1
				}
			}
			
			// 庄對子
			if(gameData.dtRstType[6].bit != null ){
				if(bit.band(data.ZuHe, gameData.dtRstType[6].bit) != 0 ){
					isPair = 2
				}
			}		
				
			if(isPair != 0 ){
				sqs.delay(0.1)
				sqs.call( function(){
					gameAudio.ePlayPlayerOrBankPair(isPair)
				})
			}
		}
		sqs.delay(1.5)
		
		// 隐藏比牌界面
		/*
	    fmg.argFuncAnim(sqs, function(adt){
			slef.show(false)
		}, [data])
		sqs.delay(0.5)
		*/
		// 结束回调
	    fmg.argFuncAnim(sqs, function(adt){
			slef.show(false)
			gameLayer.uiRoot.timer.time_open.active =(false)	
	        if(adt[1] ){ adt[1]() }
		}, [null, call])

		sqs.start()
	},

	//- 初始化牌面
	initCard(sp, number, color){
	    if(number==null || number==0 ){
	        number = 0
	        color = 0
	    }
	    GameG.SetImageSprite(sp, G.GetGamePName(), "card"+number+"_1_"+color, false)
	},

	//- 计算牌的点数
	coluRstPoint(data, pl, num){
	    let player = ["XianPoker", "ZhuangPoker"]
	    let cfg = data[player[pl]]
		
		let value = 0
		if(cfg[0].Number < 10){
			value = cfg[0].Number
		}
		
		if(num == 2 || num == 3 ){
			if(cfg[1].Number < 10 )
				value = value + cfg[1].Number
		}
		
		if(num == 3 && cfg[2]!=null){
			if(cfg[2].Number < 10)
				value = value + cfg[2].Number
		}		
		
		value = value %10
	    return value
	},

	//- 动画前初始化
	animOpenInit(data){
	    this.uiCardType = [[], []]
	    this.uiRoot.win1.active =(false)
	    this.uiRoot.win2.active =(false)
	    this.uiRoot.win3.active =(false)
	    this.uiRoot.winImg1.active =(false)
	    this.uiRoot.winImg2.active =(false)
	    this.uiRoot.winImg3.active =(false)	
		for(let k in (this.dtOpenPlayer)){ 
			let v = this.dtOpenPlayer[k] 
			let index = parseInt(k) +1 //lua 轉 javascript 初始值不同
	        let pl = this.uiRoot[v]
	        pl.win.active =(false)
	        pl.score.text = "0"
	        this.dtWinSide = null
			for(let i = 1; i <= 3; ++i){
	            pl.card[i].node.active =(false)
	            this.initCard(pl.card[i])
				let cfg = this.dtCardTrans[index][i][2]
            	//pl.card[i].position = cfg.pos
	            //pl.card[i].localEulerAngles = cfg.rot
	            pl.card[i].node.scale = cfg.scale
	            if(bit.band(data.ZuHe, gameData.dtRstType[i].bit) != 0 ){ this.dtWinSide = gameData.dtRstType[i].win }
	        }
	    }
	    if(this.dtWinSide == null ){
			for(let i = 1; i <=  gameData.dtRstType.length; ++i){
	            if(bit.band(data.ZuHe, gameData.dtRstType[i].bit) != 0 ){
	                this.dtWinSide = gameData.dtRstType[i].win
	                break
	            }
	        }
	    }
	    gameAudio.mCompare()
	    this.show(true)
	},

	//- 发牌动画
	animOpenDeal(data){
	    let self = this
    	// 翻牌前跳牌
	    let  jump = function(pl, idx){
	        let card = self.uiRoot[self.dtOpenPlayer[pl]].card[idx]
	        let bs = card.node.scale
			let es = card.node.scale + 0.15
			var sqs = GameG.NewTween(card.node)
			sqs.to(0.1, {scale: es})
			sqs.to(0.1, {scale: bs})
			sqs.start()
	    }
	    
    	// 翻牌
	    let  turn = function(pl, idx, number, color){
			let card = self.uiRoot[self.dtOpenPlayer[pl]].card[idx]
			var sqs = GameG.NewTween(card.node)
			sqs.to(0.2, {scaleX: 0, scaleY: 0.9})

	        fmg.argFuncAnim(sqs, function(adt){
	            self.initCard(adt[1], adt[2], adt[3])
	        }, [null, card.getComponent(cc.Sprite), number, color])
			sqs.to(0.2, {scale: 1})
			sqs.start()			
		}
		// 一張牌的流程
	    let  cardAni = function(sqs, pl, idx, data){
			let dataIdx = idx -1
			// 發牌
			fmg.argFuncAnim(sqs,function (adt){
			    let card = self.uiRoot[self.dtOpenPlayer[pl]].card[idx]
				card.node.active =(true)
			}, [])
			// 翻牌前跳動
			fmg.argFuncAnim(sqs,function (adt){
				jump(pl, idx)
			}, [])
			sqs.delay(0.1)

			// 翻牌
			fmg.argFuncAnim(sqs,function (adt){			
				if(pl == 0 ){
					turn(pl, idx, data.XianPoker[dataIdx].Number, data.XianPoker[dataIdx].Color)
				} 
				else{
					turn(pl, idx, data.ZhuangPoker[dataIdx].Number, data.ZhuangPoker[dataIdx].Color)			
				}
				gameAudio.turnStep(8)
			}, [ ])
			sqs.delay(0.2)
			
			// 顯示點數
			let scoreUI = self.uiRoot[self.dtOpenPlayer[pl]].scoreBG
			sqs.call( function(){
				self.uiRoot[self.dtOpenPlayer[pl]].score.text = (self.coluRstPoint(data, pl, idx)).toString()
				let sqs1 = GameG.NewTween(scoreUI)
				sqs1.to(0.2, {scale: 1.5})
				sqs1.to(0.2, {scale: 1.0})
				sqs1.start()
			})

			sqs.delay(0.3)
	    }
		let  lookcardAni = function(sqs, pl, idx, data){
			let dataIdx = idx -1
			fmg.argFuncAnim(sqs,function (adt){
				let card = self.uiRoot[self.dtOpenPlayer[pl]].card[idx].getComponent(cc.Sprite)
				card.node.active =(true)		

				let mask = self.uiRoot[self.dtOpenPlayer[pl]].mask
				mask.node.opacity = 255
				mask.node.position = cc.v3(0, 0, 0)
			}, [ ])
			fmg.argFuncAnim(sqs,function (adt){
				let card = self.uiRoot[self.dtOpenPlayer[pl]].card[idx].getComponent(cc.Sprite)
				if(pl == 0 ){
					self.initCard(card, data.XianPoker[dataIdx].Number, data.XianPoker[dataIdx].Color)
				} 
				else{
					self.initCard(card, data.ZhuangPoker[dataIdx].Number, data.ZhuangPoker[dataIdx].Color)
				}

				let mask = self.uiRoot[self.dtOpenPlayer[pl]].mask
				mask.node.active =(true)
				var tween_mask = GameG.NewTween(mask.node)
				tween_mask.by(0.5, {position: cc.v2(mask.node.width / 12, 0)})
				tween_mask.start()
			}, [ ])
			sqs.delay(0.8)

			fmg.argFuncAnim(sqs,function (adt){
				let card = self.uiRoot[self.dtOpenPlayer[pl]].card[idx].getComponent(cc.Sprite)
				
				let mask = self.uiRoot[self.dtOpenPlayer[pl]].mask
				var tween_mask = GameG.NewTween(mask.node)
				tween_mask.to(0.5, {opacity: 0, position: cc.v2(mask.node.width * 1.5,0)})
				tween_mask.start()

				gameAudio.turnStep(8)
			}, [ ])
			sqs.delay(0.4)
			
			// 顯示點數
			let scoreUI = self.uiRoot[self.dtOpenPlayer[pl]].scoreBG
			sqs.call( function(){
				self.uiRoot[self.dtOpenPlayer[pl]].score.text = (self.coluRstPoint(data, pl, idx)).toString()
				let sqs1 = GameG.NewTween(scoreUI)
				sqs1.to(0.2, {scale: 1.5})
				sqs1.to(0.2, {scale: 1})
				sqs1.start()
			})
		}
	    
		var sqs = GameG.NewTween(this.uiRoot)
		// 發牌順序
		// X X X vs Y Y Y
		// 6 4 2    1 3 5
		// 發庄閒第一、二張牌
		for(let  i  =  1;  i  <=  2; ++i){
			for(let  j  =  0;  j  <=  1; ++j){
				cardAni(sqs, j, i, data)
			}
		}
		
    	// 发闲家第三张牌
	    if(data.XianPoker.length == 3 ){
			lookcardAni(sqs, 0, 3, data)
			//cardAni(sqs, 1, 3, data)
	    }
		
    	// 发庄家第三张牌
	    if(data.ZhuangPoker.length == 3 ){
			lookcardAni(sqs, 1, 3, data)
			//cardAni(sqs, 2, 3, data)
		}
		sqs.start()
	},

	showResultAudio(node, data, ps){
		var sqs = GameG.NewTween(node)

		// 庄閒
	    fmg.argFuncAnim(sqs, function(adt){
	        gameAudio.ePlayPlayerOrBank(ps)
		}, [])
		sqs.delay(0.8)
			
		// 點數	
	    fmg.argFuncAnim(sqs, function(adt){
			let point = adt[1].coluRstPoint(adt[2], adt[3], 3)
	        gameAudio.ePlayNumber(point)
		}, [null,this,data,ps])
		sqs.start()
	},

//- 显示结果动画特效
	animOpenRstEf(data){
		let self = this
		var sqs = GameG.NewTween(this.uiRoot)
		//sqs.easing(cc.easeSineOut ())

		// 显示胜利方
	    let obj = this.uiRoot.win1
		let objImg = this.uiRoot.winImg1
	    if(this.dtWinSide == 2 ){ 
			obj = this.uiRoot.win2
			objImg = this.uiRoot.winImg2
		} 
    	else if(this.dtWinSide == 3 ){
	        obj = this.uiRoot.win3
			objImg = this.uiRoot.winImg3
	    }
	    fmg.argFuncAnim(sqs, function(adt){
        	//gameAudio.turnStep(11)
	        adt[1].active =(true)
	//----->需重新編譯程式碼	        let ps = cc.find("ALL",adt[1]).getComponent(cc.ParticleSystem)
        	//gameLayer.blinkWinBet(adt[2].ZuHe)
	//----->需重新編譯程式碼	        ps.Stop()
	//----->需重新編譯程式碼	        ps.Play()

			let sqs = GameG.NewTween(objImg)
			objImg.active =(true)
			objImg.opacity = 0
			objImg.scale = 3
			sqs.to(0.3, {opacity: 255, scale: 1})
			sqs.to(0.25, {scale: 1.2})
			sqs.to(0.25, {scale: 1})
			sqs.delay(1)
			sqs.start()

			gameAudio.ePlayPlayerOrBankWin(self.dtWinSide)
		}, [null,obj])
		sqs.start()
	},


};

module.exports = Compare
