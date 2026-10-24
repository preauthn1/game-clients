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
	
	init(){
		gameLayer = require("GameLayer")
		gameAudio = require("GameAudio")
		bit = require("BitHelper")
		fmg = require("FFunction")
		gameData = require("GameData")

	    this.initData()
	    this.initUi()
	},

	initData(){
	    this.dtOpenCardStep = 0                     // 开牌动画

		// 比牌双方的key，用于逻辑循环
		this.dtOpenPlayer = ["user", "banker"]
		
		// 牌的位置
		this.dtCardTrans = []
		this.dtCardTrans[1] = []
		this.dtCardTrans[1][1] = cc.v3(0,0,0)
		this.dtCardTrans[1][2] = cc.v3(70,0,0)
		this.dtCardTrans[1][3] = cc.v3(70,0,0)
								
		this.dtCardTrans[2] = []
		this.dtCardTrans[2][1] = cc.v3(-70,0,0)
		this.dtCardTrans[2][2] = cc.v3(0,0,0)
		this.dtCardTrans[2][3] = cc.v3(70,0,0)
	},

	initUi(){
		let canvas = cc.find("Canvas/GameLayer")
		let root = cc.find("GameLayer/Compare",canvas)
	    this.uiRoot = []
	    this.uiRoot.root = root
	    let uiRoot = this.uiRoot

		uiRoot.cardStart = cc.find("cardStart", root)
		uiRoot.cardEnd = cc.find("cardEnd", root)
		this.cardStart = GameG.LocalConvertWorldPointAR(this.uiRoot.cardStart)
		this.cardEnd = GameG.LocalConvertWorldPointAR(this.uiRoot.cardEnd)

		uiRoot.bg = cc.find("bg",root)
		
		uiRoot.mask = cc.find("bg/mask", root).getComponent(cc.Sprite)
		uiRoot.resultAnim = cc.find("bg/resultAnim", root).getComponent(sp.Skeleton)
		uiRoot.mask.node.active=(false)
		uiRoot.resultAnim.node.active=(false)
		
		for(let _ in (this.dtOpenPlayer)){ 
			let v = this.dtOpenPlayer[_] 

	        uiRoot[v] = {}
			let pl = uiRoot[v]
			pl.root = cc.find("bg/"+v,root)
	        pl.scoreBG = cc.find("bg/"+v+"/rstbg",root)
	        pl.score = cc.find("bg/"+v+"/rstbg/score",root).getComponent("TextControl")
			pl.cardRoot = cc.find("bg/"+v+"/card",root)

			pl.startPos = []
	        pl.card = []
			for(let i = 1; i <= 3; ++i){
	            pl.card[i] = cc.find("bg/"+v+"/card/card"+i,root).getComponent(cc.Sprite)
				pl.startPos[i] = GameG.WorldConvertLocalPointAR(pl.card[i].node, this.cardStart)
	        }
			pl.mask = cc.find("bg/"+v+"/card/card3/mask",root).getComponent(cc.Sprite)
			pl.mask.node.active =(false)
			pl.score.string = ""
		}

		this.initCardPos()
	},

	initCardPos(){
		for (var k in this.dtOpenPlayer){
			let v = this.dtOpenPlayer[k]
			let pl = this.uiRoot[v]
			
			for (var i=1; i<=3; ++i) {
				let card = pl.card[i].node
				card.position = pl.startPos[i]
				card.scale = this.uiRoot.cardStart.scale
				card.angle =this.uiRoot.cardStart.angle				
				card.active=(false)
			}
		}
	},

	clearMove(){
		for (var k in this.dtOpenPlayer) {
			let v = this.dtOpenPlayer[k]
			let pl = this.uiRoot[v]

			for (var i=1; i<=3; ++i) {
				let card = pl.card[i].node
				card.stopAllActions();
			}
		}
	},

	//- 牌移動
	deal(user,cardIndex){
		gameAudio.eDealCard()

		let pl = this.uiRoot[this.dtOpenPlayer[user]]
		let card = pl.card[cardIndex]
		card.node.active=(true) 

		card.node.position = pl.startPos[cardIndex]
		card.node.scale = this.uiRoot.cardStart.scale
		card.node.angle =this.uiRoot.cardStart.angle	

		card.node.stopAllActions()

		let duration = 0.15
		let pos = this.dtCardTrans[parseInt(user) + 1][cardIndex]

		let sqs1 = GameG.NewTween(card.node)
		sqs1.to(duration, {position: pos, angle: 0, scale: 1 })
		sqs1.call(function (){
			card.node.position = pos
			card.node.angle = 0
			card.node.scale = 1
			gameData.bDeal = true
		})
		sqs1.start()
	},

	//- 回收
	recycle(){
		gameAudio.eDealCard()

		this.clearMove();

		for (var k in this.dtOpenPlayer) {
			let v = this.dtOpenPlayer[k]
			let pl = this.uiRoot[v]
			pl.score.string = ""
			let duration = 0.15

			let self = this
			for (var i=1; i<=3; ++i) {
				let card = pl.card[i]

				card.node.stopAllActions()

				let cardEnd = GameG.WorldConvertLocalPointAR(card.node, this.cardEnd)
				let sqs = GameG.NewTween(card.node)
				sqs.to(0.03, {scaleX : 0})
				sqs.call(function (){
					GameG.SetImageSprite(card, G.GetGamePName(), "card0_1_0", false)
				})
				sqs.to(0.03, {scaleX: 1})
				sqs.to(duration, {position: cardEnd, scale: self.uiRoot.cardEnd.scale })
				sqs.call(function (){
					card.node.active=(false)
				})
				sqs.start()
			}
		}
		gameData.bDeal = false
	},

	//- 开牌主动画
	animOpenCards(data, call){
		gameLayer.SetGameStateImage(3)

	    this.dtOpenCardStep = 1
		
		let self = this

		var sqs = GameG.NewTween(this.uiRoot.root)

	    fmg.argFuncAnim(sqs, function(adt){
			gameLayer.showBetEf(2)
			gameAudio.turnStep(4)
			gameAudio.eStopBetBg()	
		}, [data])
		sqs.delay(2)

		// 显示比牌界面
	    fmg.argFuncAnim(sqs, function(adt){
			self.clearMove();
	        self.animOpenInit(adt[0])
	    }, [data])
		sqs.delay(0.5)
	    
		// 发牌动画
	    fmg.argFuncAnim(sqs, function(adt){
	        self.animOpenDeal(adt[0])
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
			self.showResultAudio(self.uiRoot.user.root, data, 0)
			
			let cardRoot = self.uiRoot.user.cardRoot
			let bs = cardRoot.scale
			let es = cardRoot.scale + 0.1
			let sqs1 = GameG.NewTween(cardRoot)
			sqs1.to(0.1, {scale: es})
			sqs1.to(0.1, {scale: bs})
			sqs1.start()	
		})
		sqs.delay(1)

		// 報庄點數
		sqs.call( function(){
			self.showResultAudio(self.uiRoot.banker.root, data, 1)
			
			let cardRoot = self.uiRoot.banker.cardRoot
			let bs = cardRoot.scale
			let es = cardRoot.scale + 0.1
			let sqs1 = GameG.NewTween(cardRoot)
			sqs1.to(0.1, {scale: es})
			sqs1.to(0.1, {scale: bs})
			sqs1.start()	
		})
		sqs.delay(1.7)
			
		// 显示结果特效
	    fmg.argFuncAnim(sqs, function(adt){
	        self.animOpenRstEf(adt[1])
		}, [null, data])
		sqs.delay(0.2)
		sqs.call( function(){
			gameLayer.SetGameStateImage(4)
			gameAudio.ePlayResult()
		})

		sqs.delay(1.2)
		sqs.call( function(){
			gameLayer.ShowResultPoker(data)
		})
		
		if(data.ZuHe != null ){
			let isPair = 0
			// 閒對子
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
		}
		sqs.delay(2.0)
		
		// 隐藏比牌界面
	    fmg.argFuncAnim(sqs, function(adt){
			self.recycle()
		}, [data])

		sqs.delay(1.0)

		// 结束回调
	    fmg.argFuncAnim(sqs, function(adt){
			self.initCardPos()
			gameLayer.SetGameStateImage(5)			
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
		sp.node.name = "card"+number+"_1_"+color
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
		for(let k in (this.dtOpenPlayer)){ 
			let v = this.dtOpenPlayer[k] 
			let index = parseInt(k) +1 //lua 轉 javascript 初始值不同
	        let pl = this.uiRoot[v]
	        pl.score.string = ""
	        this.dtWinSide = null
			for(let i = 1; i <= 3; ++i){
				let card = pl.card[i]
				this.initCard(card)
				if (i != 3){
					card.node.position = this.dtCardTrans[index][i]
					card.node.scale = 1
					card.node.angle = 0
				}
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
	},

	//- 发牌动画
	animOpenDeal(data){
		let self = this
		let dtCardTrans = this.dtCardTrans

		let initCard = function(pl, idx){
			let card = self.uiRoot[self.dtOpenPlayer[pl]].card[idx]
			let pos = dtCardTrans[pl + 1][idx]
			card.node.active =(true)
			card.node.position = pos
			card.node.scale = 1
			card.node.angle = 0
			card.node.stopAllActions();
		}

    	// 翻牌前跳牌
	    let jump = function(pl, idx){
			initCard(pl, idx)

			let card = self.uiRoot[self.dtOpenPlayer[pl]].card[idx]
			card.node.stopAllActions()
			var sqs = GameG.NewTween(card.node)
			sqs.to(0.1, {scaleX : 0})
			sqs.to(0.1, {scaleX: 1})
			sqs.start()
	    }
	    
    	// 翻牌
	    let turn = function(pl, idx, number, color){
			initCard(pl, idx)

			let card = self.uiRoot[self.dtOpenPlayer[pl]].card[idx]
			card.node.stopAllActions()
			var sqs = GameG.NewTween(card.node)
	        fmg.argFuncAnim(sqs, function(adt){
	            self.initCard(adt[1], adt[2], adt[3])
	        }, [null, card.getComponent(cc.Sprite), number, color])
			sqs.start()			
		}

		let setCard = function(pl, idx){
			let dataIdx = idx -1
			if(pl == 0 ){
				turn(pl, idx, data.XianPoker[dataIdx].Number, data.XianPoker[dataIdx].Color)
			} 
			else{
				turn(pl, idx, data.ZhuangPoker[dataIdx].Number, data.ZhuangPoker[dataIdx].Color)
			}
		}

		// 一張牌的流程
	    let cardAni = function(sqs, pl, idx, data){			
			// 發牌
			fmg.argFuncAnim(sqs,function (adt){
				initCard(pl, idx)
			}, [])
			
			// 翻牌前跳動
			fmg.argFuncAnim(sqs,function (adt){
				jump(pl, idx)
			}, [])
			sqs.delay(0.1)

			// 翻牌
			fmg.argFuncAnim(sqs,function (adt){			
				setCard(pl, idx)

				gameAudio.turnStep(8)
			}, [ ])
			sqs.delay(0.2)
			
			// 顯示點數
			sqs.call( function(){
				setCard(pl, idx)
				self.uiRoot[self.dtOpenPlayer[pl]].score.string = GameG.GetLocalizedString("点数").replace("####", (self.coluRstPoint(data, pl, idx)).toString());
			})

			sqs.delay(0.2)
		}
		
		var sqs = GameG.NewTween(this.uiRoot.root)
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
			sqs.call(function (){
				gameAudio.eDealDraw()
			})
			sqs.delay(0.4)
			sqs.call(function(){
				self.deal(0,3)

				for (var i=1; i<=2; ++i){
					//往左移
					let sqs1 = GameG.NewTween(self.uiRoot[self.dtOpenPlayer[0]].card[i].node)
					sqs1.by(0.2, { position : new cc.v3(-70, 0, 0) })
					sqs1.start()
				}				
			})
			sqs.delay(0.2)
			cardAni(sqs, 0, 3, data)
	    }
		
    	// 发庄家第三张牌
	    if(data.ZhuangPoker.length == 3 ){
			sqs.call(function (){
				gameAudio.eDealDraw()
			})
			sqs.delay(0.4)
			sqs.call(function(){
				self.deal(1,3)
			})
			sqs.delay(0.2)
			cardAni(sqs, 1, 3, data)		
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
		var sqs = GameG.NewTween(this.uiRoot.root)

		self.uiRoot.resultAnim.node.active=(true)
		self.uiRoot.mask.active=(true)
		if (self.dtWinSide == 1) {
			self.uiRoot.resultAnim.setAnimation(0, "player_win", false)
		}
		else if (self.dtWinSide == 2) {
			self.uiRoot.resultAnim.setAnimation(0, "banker_win", false)
		}
		else if (self.dtWinSide == 3) {
			self.uiRoot.resultAnim.setAnimation(0, "tie", false)
		}
		gameAudio.ePlayPlayerOrBankWin(self.dtWinSide)
		sqs.delay(2)
		fmg.argFuncAnim(sqs, function(adt){
			self.uiRoot.resultAnim.node.active=(false)
			self.uiRoot.mask.active=(false)
		}, {})

		sqs.start()
	},
};

module.exports = Compare
