var G = require("Global")
var GameG = require("GameGlobal")
var uistart = null
var uibetend = null
var uibetstart = null
var uimessage = null
var uicheckzhung = null
var uizhunglist = null
var uiuser = null
var uizhuang = null
var uibet = null
var uipoker = null
var uichip = null
var gameData = null
var gameControl = null
var chartLayer = null
var GameConfig = require("GameConfig")
var uigameTopMenu = null
var uiGameHelp = null
var uiSetGame = null
var GameManager = require("GameManager")

var GameLayer = {
	extends: cc.Component,

	Init(){
	
		uistart = require("UIStart")
		uibetend = require("UIBetEnd")
		uibetstart = require("UIBetStart")
		uimessage = require("UIMessage")
		uicheckzhung = require("UICheckZhuang")
		uizhunglist = require("UIZhuangList")
		uiuser = require("UIUser")
		uizhuang = require("UIZhuang")
		uibet = require("UIBet")
		uipoker = require("UIPoker")
		uichip = require("UIChip")
		gameData = require("GameData")
		gameControl = require("GameControl")
		chartLayer = require("ChartLayer")
		uigameTopMenu = require("UIGameTopMenu")
		uiGameHelp = require("UIGameHelp")
		uiSetGame = require("UISetGame")

	    let canvas = cc.find("Canvas/GameLayer")
	    uizhunglist.Init(canvas)
	    uimessage.Init(canvas)
	    uicheckzhung.Init(canvas)
	    uibetend.Init(canvas)
	    uibetstart.Init(canvas)
	    uistart.Init(canvas)
	
	    let root = cc.find("GameLayer",canvas)
		
		this.sequenceResultPoker = null
		this.sequenceTimer = null

		this.uiRoot = {}
		this.uiRoot.root = root
		this.uiRoot.bg = cc.find("BG",root)
		this.uiRoot.bg1 = cc.find("BG (1)",root)
		this.uiRoot.TextBetTimer = cc.find("TextBetTimer",root)

		let nodePublic = cc.find("public",canvas)

		// game help
		this.uiRoot.uiGameHelpPrefab = cc.find("UIGameHelp",nodePublic)
		uiGameHelp.Init(this.uiRoot.uiGameHelpPrefab)

		// 遊戲設定介面
		this.uiRoot.uiSetGamePrefab = cc.find("UISetGame",nodePublic)
		uiSetGame.Init(this.uiRoot.uiSetGamePrefab)

		// top menu
	    this.uiRoot.topMenu = cc.find("UIGameTopMenu",nodePublic)
		uigameTopMenu.Init(this.uiRoot.topMenu, 
			// help_callback
			function(){
				uiGameHelp.Show()
			},
			// set_callback
			function(){
				uiSetGame.Show()
			},
			// exit_callback
			function(){

			},                        
		)


    	// 下注的按钮
	    this.uiRoot.chip = new uichip(cc.find("Down/ChipGrop",root))
    	//庄家
	    this.uiRoot.zhuang = new uizhuang(cc.find("Top/Zhuang",root))
    	//玩家
	    this.uiRoot.userSelf = new uiuser(cc.find("Down/User",root))
	
	    this.uiRoot.userOther = cc.find("Down/OtherUser",root)
	    this.userOtherStartPos = this.uiRoot.userOther.position
    	//幸运星
	    this.uiRoot.userStar = new uiuser(cc.find("otherUser/Star",root))
    	//富豪列表
	    this.uiRoot.userList = []
		for(let i = 1; i <= 7; ++i ){
			this.uiRoot.userList[i] = new uiuser(cc.find("otherUser/No" + i.toString(), root))
		}
	
	    this.uiRoot.betList = []
	    this.uiRoot.pokerList = []
	    this.uiRoot.pokerList[0] = new uipoker(cc.find("Top/PokerGrop",root))
		for(let i = 1; i <= 4; ++i ){
			this.uiRoot.betList[i] = new uibet(i, cc.find("BetGroup/ButtonBet" + i.toString(), root))
	        this.uiRoot.betList[i].SetCallback(function(index){
	            if (gameControl.BetCoin(index, GameLayer.uiRoot.chip.GetChooseMoney()) == true) {
	                if (gameData.State == 0) {
	                    let num = GameLayer.uiRoot.chip.GetChooseMoney()
	                    let chipIndex = GameLayer.uiRoot.chip.GetChooseIndex()
	                    let targetPos = GameLayer.uiRoot.chip.GetChoosePosition()
	                    GameLayer.uiRoot.betList[index].ShowCastBetChip(num, chipIndex, true, targetPos, GameConfig.getUserID())
	                }
	            }
	        })
	        this.uiRoot.pokerList[i] = new uipoker(cc.find("BetGroup/ButtonBet" + i.toString() + "/PokerGrop", root))
	    }
	
	
    	//申请上庄
		this.uiRoot.btn_upZhuang = uizhunglist.GetButtonUp()
	    this.uiRoot.btn_upZhuang.node.on('click',function(){
			GameG.PlayGameSound("se_click")
	        gameControl.BRNNShangZhuangID(true)
	    }),
	
    	//下庄
	    this.uiRoot.btn_downZhuang = uizhunglist.GetButtonDown()
	    this.uiRoot.btn_downZhuang.node.on('click',function(){
			GameG.PlayGameSound("se_click")
	        gameControl.BRNNShangZhuangID(false)
	    }),
	
    	//自动
	    this.uiRoot.btn_auto = cc.find("Down/ButtonAuto",root).getComponent(cc.Button)
	    this.uiRoot.btn_auto.node.on('click',function(){
			GameG.PlayGameSound("se_click")
	        gameData.bAutoBet = true;
	        GameLayer.ShowAutoButton(false);
	    })
	
    	//取消
	    this.uiRoot.btn_cancel = cc.find("Down/ButtonCancel",root).getComponent(cc.Button)
	    this.uiRoot.btn_cancel.node.on('click',function(){
			GameG.PlayGameSound("se_click")
	        gameData.bAutoBet = false;
	        GameLayer.ShowAutoButton(true)
	    })
	
    	//上庄清单
	    this.uiRoot.btn_zhuangList = cc.find("ButtonZhuangList",root).getComponent(cc.Button)
	    this.uiRoot.btn_zhuangList.node.on('click',function(){
			GameG.PlayGameSound("se_click")
	        gameControl.BRNNGetShangZhuangListID()
	    })
	
	    //路单图
	    this.uiRoot.btn_chart = cc.find("Top/ButtonRoadmap",root).getComponent(cc.Button)
	    this.uiRoot.btn_chart.node.on('click',function(){
			GameG.PlayGameSound("se_click")
	        chartLayer.show(true)
	    })
	
	    this.uiRoot.img_countdown = []
		for(let i = 1; i <= 3; ++i ){
	        this.uiRoot.img_countdown[i] = cc.find("ImageCountdown" + i.toString(),root).getComponent(cc.Sprite)
	        this.uiRoot.img_countdown[i].active =(false)
	    }
    	//下注倒数时间
	    this.uiRoot.txt_betTimerRoot = cc.find("TextBetTimer",root)
	    this.uiRoot.txt_betTimer = cc.find("TextBetTimer/TextBetTimer",root).getComponent("TextControl")
    	//已下注
	    this.uiRoot.txt_alreadyTotalBet = cc.find("TextAlreadyTotalBet",root).getComponent(cc.Label)
    	//還可下注
	    this.uiRoot.txt_ableTotalBet = cc.find("TextAbleTotalBet",root).getComponent(cc.Label)
	},

	onExit(){
	    if(this.sequenceTimer != null ){
			this.sequenceTimer.stop()
	        this.sequenceTimer = null
			this.sequenceTimer = GameG.NewTween(this.UIRoot.TextBetTimer)
	    }
	    if(this.sequenceResultPoker != null ){
			this.sequenceResultPoker.stop()
	    }
	},

	ShowRoadmapList(data){
		for(let kround in (data)){ 
			let vround = data[kround] 

			for(let ktype in (vround.RetType)){ 
				let vtype = vround.RetType[ktype] 
				ktype = parseInt(ktype) + 1
	            this.uiRoot.betList[ktype].ShowRoadmap(vtype == 1, false)
	        }
	    }
	},

	ShowRoadmapBySite(siteNo, data, timer){
	    this.uiRoot.betList[siteNo].ShowRoadmap(data, true, timer)
	    chartLayer.addRst(siteNo, data)
	},

	ShowZhunglist(){
	    uizhunglist.Show(gameData.zhuangList, gameData.ZhuangLimit)
	},

	ShowStart(){
	    gameData.dtBetTotal = 0
	    uistart.Show()
	},

	ShowBetStart(){
	    uibetstart.Show()
	},

	ShowBetEnd(){
	    uibetend.Show()
	},

	GameStart(){
	    this.uiRoot.userStar.SetActive(false)
		for(let k in (this.uiRoot.betList)){ 
			let v = this.uiRoot.betList[k] 
			 v.GameStart()
		}
	},

	GameEnd(){
	    this.uiRoot.userStar.SetActive(false)
		for(let k in (this.uiRoot.betList)){ 
			let v = this.uiRoot.betList[k] 
			 v.GameEnd()
		}
		for(let k in (this.uiRoot.pokerList)){ 
			let v = this.uiRoot.pokerList[k] 
			 v.GameEnd()
		}
	},

	SetUserList(data){
		for(let k in (data.RichestList)){ 
			let v = data.RichestList[k] 

			for(let k2 in (this.uiRoot.userList)){ 
				let v2 = this.uiRoot.userList[k2] 

	            if(v.UserID != 0 && k2 == v.Ranking ){
	                v2.SetActive(true)
	                v2.SetHead(v.UserFaceID)
	                v2.SetUserId(v.UserID)
	                v2.SetScore(v.Money)
	            }
	        }
	    }
	},

	SetUserStar(data){
	    if(data == null ){ return }
	    if(data.UserFaceID == 0 ){ return }
	    if(data.UserID == 0 ){ return }
	    this.uiRoot.userStar.SetActive(true)
	    this.uiRoot.userStar.SetHead(data.UserFaceID)
	    this.uiRoot.userStar.SetUserId(data.UserID)
	},

	//庄家信息
	SetZhuang(data){
	    this.uiRoot.zhuang.SetGameUser(data.UserInfo[1])
	    this.uiRoot.zhuang.SetLastTurn(data.LastTurn, gameData.MaxZhuang)
	},

	//玩家信息
	SetUser(data){
	    this.uiRoot.userSelf.SetGameUser(data)
	},

	//- 下注的按钮
	SetChip(data){
	    this.uiRoot.chip.Show(data)
	},

	//倒数计时
	SetBetTimer(timer){
		timer = timer - GameManager.calLoadTime()

		if(timer == 0 ){ return }

		let self = this
		this.uiRoot.txt_betTimerRoot.active =(true)

	    if(this.sequenceTimer != null ){
			this.sequenceTimer.stop()
	    }
		this.sequenceTimer = GameG.NewTween(this.uiRoot.txt_betTimerRoot)

		for(let i = timer; i >= 1; --i ){
			this.sequenceTimer.call(function(){
				self.uiRoot.txt_betTimer.text = i.toString()
				GameLayer.ShowCountdown(i)
			})
			this.sequenceTimer.delay(1)
		}
		this.sequenceTimer.call(function(){
			self.uiRoot.txt_betTimerRoot.active =(false)
		})
		this.sequenceTimer.start()
	},

	StopBetTimer(){
	    this.uiRoot.txt_betTimerRoot.active =(false)
	},

	ShowCountdown(i){
		if(i > 3 ){ return }
		
	    this.uiRoot.img_countdown[i].node.active =(true)
		this.uiRoot.img_countdown[i].node.scale = 1
		
	    GameG.PlayGameSound(i.toString())
	    if(i == 3 ){
	        GameG.PlayGameSound("adeBetLast4")
		}
		
		let self = this
		var sqs = GameG.NewTween(this.uiRoot.img_countdown[i].node)
		sqs.delay(0.3)
		sqs.to(0.7, {scale: 0})
		sqs.call(function(){
			self.uiRoot.img_countdown[i].node.active =(false)
		})				
		sqs.start()
	},

	//发三牌(一次发)
	ShowFapaiThreeCard(data){
	    let showEffect = (gameData.State == 4)
	
	    let timer = 0.2 //等待一轮时间
	    if(showEffect == false ){
	        timer = 0
	    }
	
		let self = this
		var sequence = GameG.NewTween(this.uiRoot.root)
		for(let k in (data.UserPokerCard)){ 
			let v = data.UserPokerCard[k] 
			sequence.call(function(){
				self.uiRoot.pokerList[v.SitNo].ShowFapaiThreeCard(v.CardGroup, 0.025, showEffect)
			})
			sequence.delay(timer)
		}
		sequence.start()		
	},

	//发二牌
	ShowFapaiTwoCard(data){
		for(let k in (data.UserPokerCard)){ 
			let v = data.UserPokerCard[k] 
	        this.uiRoot.pokerList[v.SitNo].ShowFapaiTwoCard(v.CardGroup)
	    }
	},

	//結算
	ShowResultPoker(data){
	    if (data.SitNo == 4) {
	        if(this.sequenceResultPoker != null ){
				this.sequenceResultPoker.stop()
	        }
			this.sequenceResultPoker = GameG.NewTween(this.uiRoot.bg)
	        let timer = 0.5
			for(let i = 0; i <= 4; ++i ){
	            GameLayer.ShowResultBySitNoPart1(i, timer)
	        }
			for(let i = 0; i <= 4; ++i ){
				this.sequenceResultPoker.delay(gameData.OnceFapei * 0.001 + timer)
				this.sequenceResultPoker.call(function(){
					GameLayer.ShowResultBySitNo(i)
				})
			}
			this.sequenceResultPoker.start()
	    }
	},

	ShowResultBySitNoPart1(sitNo, timer){
	    this.uiRoot.pokerList[sitNo].ShowFapaiFiveCard(gameData.result[sitNo].SitPoker)
	},

	ShowResultBySitNo(sitNo){
	    let timer = 0.5
		this.uiRoot.pokerList[sitNo].ShowKapai(1, 0)
		this.uiRoot.pokerList[sitNo].ShowKapai(2, 0)
		this.uiRoot.pokerList[sitNo].ShowKapai(3, 0)
		this.uiRoot.pokerList[sitNo].ShowKapai(4, timer)
		this.uiRoot.pokerList[sitNo].ShowKapai(5, timer)
		
		// 显示牌型文本
		let self = this
		GameG.NewDelayOnce(function(){
			self.uiRoot.pokerList[sitNo].ShowPaixi(gameData.result[sitNo], gameData.GetNiuNiuOdd(sitNo))
		}, timer)
	
	    if(sitNo == 0 ){ return }
		
		var sequence = GameG.NewTween(this.uiRoot.pokerList[sitNo].root)
		sequence.delay(timer + timer)
	    sequence.call(function(){
        	//显示路单
	        self.ShowRoadmapBySite(sitNo, (gameData.result[sitNo].WinLoss == 1), timer)
        	// 开始赢家闪烁
	        if(gameData.result[sitNo].WinLoss == 1 ){
	            self.uiRoot.betList[sitNo].ShowBlinkWin(3)
	        }
	    })

	
	    if(sitNo == 4 ){
        	//判斷通贏通賠顯示動畫
	        if (gameData.GetWinLoseCount() == 0) {
	            sequence.delay(timer)
	            sequence.call(function(){
					gameData.compare.AllWin()
				})
			} 
        	else if (gameData.GetWinLoseCount() == 4) {
	            sequence.delay(timer)
	            sequence.call(function(){
					gameData.compare.AllLose() 
				})
	        }
	
        	//补给下注区金额
	        sequence.delay(timer)
	        sequence.call(function(){
	            GameLayer.ShowOtherLoseChip()
	        })
        	//回收下注区金额
	        sequence.delay(timer)
	        sequence.call(function(){
	            GameLayer.ShowZhuangWinChip()
	        })
        	//补给下注区金额
	        sequence.delay(timer)
	        sequence.call(function(){
	            GameLayer.ShowZhuangLoseChip()
	        })
        	//回收下注区金额
	        sequence.delay(timer)
	        sequence.call(function(){
	            GameLayer.ShowOtherWinChip()
	        })
        	//显示输赢金额
	        sequence.delay(timer)
	        sequence.call(function(){
				GameLayer.ShowResultScore()
			})
		}
		sequence.start()
	},

	//玩家信息
	SetUserScore(score){
	    this.uiRoot.userSelf.SetScore(score)
	},

	ShowResultScore(){
	    if(gameData.SelfWin > 0 ){
	        GameG.PlayGameSound("adeRstWinMan")
	        GameG.PlayGameSound("adeFlyWinCoin")
		} 
    	else if( gameData.SelfWin < 0 ){

	    }
	
	    gameData.SetGameUserScore(gameData.zhuangInfo.UserID, gameData.zhuangInfo.Score + gameData.ZhuangWin)
	    gameData.SetGameUserScore(gameData.userSelf.UserID, gameData.userSelf.Score + gameData.SelfWin)
	
	    this.uiRoot.userSelf.SetScore(gameData.userSelf.Score)
	    this.uiRoot.zhuang.SetScore(gameData.zhuangInfo.Score)
	
	    this.uiRoot.zhuang.AnimAddCoin(gameData.ZhuangWin)
	    this.uiRoot.userSelf.AnimAddCoin(gameData.SelfWin)
	
		for(let k1 in (gameData.StageUerInfo)){ 
			let v1 = gameData.StageUerInfo[k1] 

	        let showing = false
	        if(GameConfig.getUserID() == v1.UserID ){
	            this.uiRoot.userSelf.AnimAddCoin(v1.Win)
	            showing = true
	        }
	
	        if(showing == false ){
				for(let k2 in (this.uiRoot.userList)){ 
					let v2 = this.uiRoot.userList[k2] 

	                if(v2.GetUserId() == v1.UserID ){
	                    v2.AnimAddCoin(v1.Win)
	                    showing = true
	                }
	            }
	        }
	
	        if(showing == false ){
	            if(this.uiRoot.userStar.GetUserId() == v1.UserID ){
	                this.uiRoot.userStar.AnimAddCoin(v1.Win)
	            }
	        }
	    }
	},

	ShowCastBetSound(winLose){
	    let count = 0
		for(let k in (this.uiRoot.betList)){ 
			let v = this.uiRoot.betList[k] 

	        if(gameData.result[k].WinLoss == winLose ){
	            count = count + this.uiRoot.betList[k].GetCastBetAll()
	        }
	    }
	    if(count > 0 ){
	        GameG.PlayGameSound("adeFlyWinCoin")
	    }
	},

	//庄家回收下注区金额
	ShowZhuangWinChip(){
	    this.ShowCastBetSound(0)
		for(let k in (this.uiRoot.betList)){ 
			let v = this.uiRoot.betList[k] 

	        if(gameData.result[k].WinLoss == 0 ){
	            this.uiRoot.betList[k].ShowWinChip(this.uiRoot.zhuang.GetPosition())
	        }
	    }
	},

	//闲家回收下注区金额
	ShowOtherWinChip(){
	    this.ShowCastBetSound(1)
		for(let k in (this.uiRoot.betList)){ 
			let v = this.uiRoot.betList[k] 

	        if(gameData.result[k].WinLoss == 1 ){
	            this.uiRoot.betList[k].ChangeChipUserId(gameData.winList)
				for(let _ in (this.uiRoot.userList)){ 
					let userlist = this.uiRoot.userList[_] 

	                this.uiRoot.betList[k].ShowWinChip(userlist.GetPosition(), userlist.GetUserId())
	            }
	            this.uiRoot.betList[k].ShowWinChip(this.uiRoot.userStar.GetPosition(), this.uiRoot.userStar.GetUserId())
	            this.uiRoot.betList[k].ShowWinChip(this.uiRoot.userSelf.GetPosition(), this.uiRoot.userSelf.GetUserId())
	            this.uiRoot.betList[k].ShowWinChip(null, null)
	        }
	    }
	},

	//庄家补给下注区金额
	ShowZhuangLoseChip(){
	    this.ShowCastBetSound(1)
		for(let k in (this.uiRoot.betList)){ 
			let v = this.uiRoot.betList[k] 

	        if(gameData.result[k].WinLoss == 1 ){
	            this.uiRoot.betList[k].ShowLoseChipAll(gameData.GetResultOdd(k), this.uiRoot.zhuang.GetPosition())
	            this.uiRoot.betList[k].ShowLoseChipMy(gameData.GetResultOdd(k), this.uiRoot.zhuang.GetPosition())
	        }
	    }
	},

	//闲家补给下注区金额
	ShowOtherLoseChip(){
	    this.ShowCastBetSound(0)
		for(let k in (this.uiRoot.betList)){ 
			let v = this.uiRoot.betList[k] 

	        if(gameData.result[k].WinLoss == 0 ){
				for(let userKey in (this.uiRoot.userList)){ 
					let userData = this.uiRoot.userList[userKey] 

					for(let _ in (gameData.loseList)){ 
						let loser = gameData.loseList[_] 

	                    if(userData.GetUserId() == loser ){
	                        this.uiRoot.betList[k].ShowLoseChipAll(gameData.GetResultOdd(k) - 1, userData.GetPosition())
	                    }
	                }
	            }
	            this.uiRoot.betList[k].ShowLoseChipMy(gameData.GetResultOdd(k) - 1, this.uiRoot.userSelf.GetPosition())
	        }
	    }
	},

	//廣播已下注和還可下注
	ShowBroadCastTotal(data){
	    this.uiRoot.txt_alreadyTotalBet.string = G.FormatDecimal(data.AlreadyTotalBet, 0)
	    this.uiRoot.txt_ableTotalBet.string = G.FormatDecimal(data.AbleTotalBet, 0)
	},

	ShowClearBetChip(userId){
	    let targetPos = null
		for(let k in (this.uiRoot.betList)){ 
			let v = this.uiRoot.betList[k] 

			for(let kuser in (this.uiRoot.userList)){ 
				let vuser = this.uiRoot.userList[kuser] 

	            if(vuser.GetUserId() == userId ){
	                targetPos = vuser.GetPosition()
	            }
	        }
	        if(this.uiRoot.userStar.GetUserId() == userId ){
	            targetPos = this.uiRoot.userStar.GetPosition()
	        }
	
	        if(GameConfig.getUserID() == userId ){
	            targetPos = this.uiRoot.userSelf.GetPosition()
	            GameLayer.ShowBroadCastBetMy(k, 0)
	        }
	
	        v.ShowClearBetChip(userId, targetPos)
	    }
	},

	ClearBetRetError(siteNo, num, userId){
	    this.uiRoot.betList[siteNo].ClearBetRetError(num, userId)
	},

	ShowBroadCastBetAll(siteNo, num){
	    this.uiRoot.betList[siteNo].ShowBroadCastBetAll(num)
	},

	ShowBroadCastBetMy(siteNo){
	    this.uiRoot.betList[siteNo].ShowBroadCastBetMy(gameData.castBet[siteNo])
	},

	ShowCastBetChip(siteNo, num, index, userId, count){
	    if(gameData.State == 3 ){ return }
	    let targetPos = null
	    let dir = 10
    	//自己
	    if(targetPos == null ){
	        if(GameConfig.getUserID() == userId ){
	            if(count != null ){
	                targetPos = this.uiRoot.chip.GetCountPosition(count)
				} 
            	else{
	                targetPos = this.uiRoot.chip.GetChoosePosition()
	            }
	        }
	    }
    	//富豪榜
	    if(targetPos == null ){
			for(let k in (this.uiRoot.userList)){ 
				let v = this.uiRoot.userList[k] 
	            if(v.GetUserId() == userId ){
	                if(k <= 4 ){
						v.AnimShake(dir)
					}
                	else{
						v.AnimShake(dir * -1)
					}
					targetPos = v.GetPosition()
				}
	        }
	    }
    	//幸运星
	    if(targetPos == null ){
	        if(this.uiRoot.userStar.GetUserId() == userId ){
	            this.uiRoot.userStar.AnimShake(dir * -1)
	            targetPos = this.uiRoot.userStar.GetPosition()
	        }
	    }
    	//其他
	    if(targetPos == null ){
			let self = this
			var sqs = GameG.NewTween(this.uiRoot.userOther)
			sqs.to(0.1, {position: cc.v2(this.userOtherStartPos.x - dir, this.userOtherStartPos.y + dir)})
			sqs.to(0.15, {position: cc.v2(this.userOtherStartPos.x, this.userOtherStartPos.y)})
			sqs.call(function(){
				self.this.uiRoot.userOther.position = self.userOtherStartPos
			})				
			sqs.start()
	    }
	
	    this.uiRoot.betList[siteNo].ShowCastBetChip(num, index, gameData.State == 0, targetPos, userId)
	},

	ShowLuckyStar(siteNo, show){
	    if(show ){
	        this.uiRoot.betList[siteNo].ShowLuckyStar()
		} 
		else{
	        this.uiRoot.betList[siteNo].StopLuckyStar()
	    }
	},

	ShowAutoButton(active){
	    this.uiRoot.btn_cancel.active =(!active)
	    this.uiRoot.btn_auto.active =(active)
	    if(active ){
	        GameLayer.ShowMessage("您已经关闭自动下注")
		} 
		else{
	        GameLayer.ShowMessage("您已经开启自动下注")
	    }
	},

	ShowUpZhuangButton(active){
	    this.uiRoot.btn_downZhuang.active =(!active)
	    this.uiRoot.btn_upZhuang.active =(active)
	},

	UpdateState(state){
	    this.UpdateButtonState(state)
		for(let k in (this.uiRoot.pokerList)){ 
			let v = this.uiRoot.pokerList[k] 
			 v.UpdataState(state) 
		}
	},

	UpdateButtonState(state){
	    let show = (state == 0) && (!gameData.bIBanker)
	    this.uiRoot.btn_cancel.interactable = show
	    this.uiRoot.btn_auto.interactable = show
	    this.uiRoot.btn_downZhuang.interactable = (state == 0) && gameData.bIBanker
	    this.uiRoot.btn_upZhuang.interactable = show
	    if(state != 0 ){
	        this.uiRoot.chip.UpdateButtonState(false)
		} 
    	else if( gameData.bIBanker ){

	        this.uiRoot.chip.UpdateButtonState(false)
	    }
	},

	CheckScore(st){
	    this.uiRoot.chip.CheckScore(st)
	},

	ShowMessage(message, timer){
	    let tim = timer || 1
	    uimessage.Show(message, tim)
	},
};

module.exports = GameLayer
