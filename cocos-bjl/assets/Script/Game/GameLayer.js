var G = require("Global")
var GameG = require("GameGlobal")
var gameControl = null
var gameData = null
var gameAudio = null
var uigameTopMenu = null
var uiuser = null
var uibet = null
var fmg = null
var uiUserPic = null
var uiGameHelp = null
var uiSetGame = null
var gameManager = null

var bit

var GameLayer = {
	extends: cc.Component,

//-
	init(){
		gameManager = require("GameManager")
		gameControl = require("GameControl")
		gameData = require("GameData")
		gameAudio = require("GameAudio")
		uigameTopMenu = require("UIGameTopMenu")
		uiuser = require("UIUser")
		uibet = require("UIBet")
		fmg = require("FFunction")
		uiUserPic = require("UIUserPic")
		uiGameHelp = require("UIGameHelp")
		uiSetGame = require("UISetGame")
		bit = require("BitHelper")

		this.initData()
		this.initUi()
	},

//-
	onExit(){
	},

//-
	initData(){
	    this.uiChipBtn = []                         // 下注倍数按钮
	    this.bLockUseCoin = false                   // 是否不更新金币显示
	    this.hTimer = [name = "tmhBeginBet"]        // 倒计时进度条
	    this.hCastAnim = []                         // 下筹码动画保存
	    this.hBlinkWinBet = []                      // 下注区域赢的显示
    	// 筹码列表,筹码重复使用索引
	    this.uiCast = []
		this.uiCastIdx = []
		for(let i = 1; i <= gameData.dtBetTypeNum + 1; ++i){
	        this.uiCast[i] = []
	        this.uiCastIdx[i] = 0
	    }
		
    	// 筹码落点区域
		this.dtBetRect = []
			
		// 籌碼備份數量
	    this.betMax = [	70, //LM 庄
						70, //RM 閒
						60, //MM 和
						40, //LU 庄天王
						40,	//RU 閒天王
						40, //LD 庄對子
						40, //RD 閒對子
						40, //LM 庄順子
						40, //RM 閒順子
						40,]//MD 同點和				
	},

//-
	initUi(){
    // 获取layer
		let canvas = cc.find("Canvas/GameLayer")
	    let root = cc.find("Canvas/GameLayer/GameLayer")
	    this.uiRoot = {}
	    this.uiRoot.root = root
	    let uiRoot = this.uiRoot
		
		uiRoot.desk = cc.find("desk",root)

    // 查找按钮
	    let findBtn = function(name, func){
	        let btn = cc.find(name,root).getComponent(cc.Button)
	        btn.node.on('click',function(){			
				GameG.PlayGameSound("se_click")
				func()
			})
	        return btn
	    }
		
		uiRoot.zhungPos = GameG.LocalConvertWorldPointAR(cc.find("Compare/bg/coin",root))
		
		uiRoot.userStar = new uiuser(cc.find("otherUser/Star",root))
		uiRoot.userList = []
		for(let i = 1; i <= 5; ++i){ 
			uiRoot.userList[i] = new uiuser(cc.find("otherUser/No"+i,root))
		}
		
		uiRoot.betList = []
		for(let i = 1; i <= 10; ++i){
			uiRoot.betList[i] = new uibet(i,cc.find("BetGroup/ButtonBet"+i,root),cc.find("BetGroupFront/ButtonBet"+i,root))
			uiRoot.betList[i].SetCallback(function(index){ 
				if(gameControl.BetCoin(index) == true){
					if(gameData.dtBetState == 0){
						let num = gameData.chooseMoney
						let chipIndex = gameData.chooseBet
						let targetPos = GameG.LocalConvertWorldPointAR(uiRoot.betBtn.chip[gameData.chooseBet].root);
						uiRoot.betList[index].ShowCastBetChip(num,chipIndex,true,targetPos,GameG.getUserID())
					}
				}
			})
		}
    //
	    uiRoot.AnnAnchorPos = cc.find("public/AnnAnchorPos",canvas)
		
	    uiRoot.roomName = cc.find("ChartLayer/info/roomName",root).getComponent(cc.Label)
		// uiRoot.roomName.text = G.Room.GetRoomLevelName()
		uiRoot.roomName.text = ""
		
	    uiRoot.timer = {}
	    uiRoot.timer.root = cc.find("time/time",root)
	    uiRoot.timer.text = cc.find("time/time/timer",root).getComponent("TextControl")
	    uiRoot.timer.urgent = cc.find("time/time/urgent",root).getComponent(cc.Sprite)
	    uiRoot.timer.time_open = cc.find("time/time_open",root)
		//uiRoot.timer.timeSlider = cc.find("ChartLayer/time/Slider",root).getComponent(cc.Slider)
		uiRoot.timer.effect = cc.find("_beginTimer",root).getComponent(cc.Sprite)
		uiRoot.timer.root.active =(false)
		uiRoot.timer.time_open.active =(false)
		uiRoot.timer.urgent.node.active =(false)
		
		let repeatTween = cc.tween(uiRoot.timer.urgent.node)
		let tween = cc.tween(repeatTween)
        .to(0.2, {opacity: 0})
	    .delay(0.3)
		.to(0.1, {opacity: 255})
		repeatTween.repeat(9999999999, tween).start()
				
	    uiRoot.betUser = cc.find("downMune/users",root)
		this.betUserStartPos = uiRoot.betUser.position	
		
    //
		uiRoot.bet = {}
	    uiRoot.bet.cast = {}
	    uiRoot.bet.cast.root = cc.find("cast",root)
	    uiRoot.bet.chip = []
	    uiRoot.bet.num = []
		
	    uiRoot.betBtn = {}
	    uiRoot.betBtn.betBtn = cc.find("downMune/betBtn",root)
	    uiRoot.betBtn.scroll = cc.find("downMune/betBtn/scroll/Viewport/Content",root)	
		
		uiRoot.pfChip = cc.find("PfChip",canvas)
		
		let offsetX = 0
		let offsetY = -15
		let subWidth = 100
		let subHeight = 100	
		
		for(let i = 1; i <= 10; ++i){
	        uiRoot.bet.num[i] = {}
	        uiRoot.bet.num[i].all = cc.find("BetGroupFront/ButtonBet"+i+"/TextAll",root).getComponent(cc.Label)
	        uiRoot.bet.num[i].my = cc.find("BetGroupFront/ButtonBet"+i+"/TextMy",root).getComponent(cc.Label)
	        uiRoot.bet.num[i].efWin = cc.find("BetGroup/ButtonBet"+i+"/blink",root).getComponent(cc.Sprite)
	        uiRoot.bet.num[i].all.text = "0"
	        uiRoot.bet.num[i].my.text = ""
	        uiRoot.bet.num[i].efWin.node.active =(false)
			
	        let tmp = i
	        uiRoot.bet.chip[i] = cc.find("BetGroup/ButtonBet"+i,root).getComponent(cc.Button)
	        uiRoot.bet.chip[i].node.on('click',function(){
            //gameAudio.btnClick()
			//gameControl.BetCoin(tmp)
	        })
			
			this.dtBetRect[i] = fmg.ObjToRect(uiRoot.bet.chip[i], offsetX, offsetY, subWidth, subHeight)		
	    }
		
	    uiRoot.bet.continue = findBtn("downMune/continue", function(){
	        gameAudio.btnClick()
	        gameControl.BetCoinAry(gameData.dtBetRecodeOrg)
	    })
		
    //
	    uiRoot.user = {}
	    uiRoot.user.root = cc.find("downMune/userInfo",root)
	    uiRoot.user.head = cc.find("downMune/userInfo/head",root).getComponent(cc.Sprite)
	    uiRoot.user.name = cc.find("downMune/userInfo/name",root).getComponent(cc.Label)
	    uiRoot.user.coin = cc.find("downMune/userInfo/coin",root).getComponent(cc.Label)
	    uiRoot.user.addcoin = cc.find("downMune/userInfo/addcoin",root).getComponent("TextControl")
		uiRoot.user.subcoin = cc.find("downMune/userInfo/subcoin",root).getComponent("TextControl")
	    uiRoot.user.root.active =(false)
	    uiRoot.user.addcoin.node.active =(false)
		uiRoot.user.subcoin.node.active =(false)

	    uiRoot.start = {}
	    uiRoot.start.root = cc.find("kaishixiazhu",root)
		uiRoot.start.obj = cc.find("kaishixiazhu/UIBetStart",root)
		uiRoot.start.tween = null

	    uiRoot.stop = {}
	    uiRoot.stop.root = cc.find("tingzhixiazhu",root)
	    uiRoot.stop.obj = cc.find("tingzhixiazhu/UIBetEnd",root)
		uiRoot.stop.tween = null

		GameLayer.showBetEf()
		
    // 
		let targetPos = uiRoot.AnnAnchorPos.position
		//uigameTopMenu.Init(uiRoot.topMenu,false,true,targetPos)	
		
		let nodePublic = cc.find("public",canvas)

		// game help
		uiRoot.uiGameHelpPrefab = cc.find("UIGameHelp",nodePublic)
		uiGameHelp.Init(uiRoot.uiGameHelpPrefab)

		// 遊戲設定介面
		uiRoot.uiSetGamePrefab = cc.find("UISetGame",nodePublic)
		uiSetGame.Init(uiRoot.uiSetGamePrefab)

		// top menu
	    uiRoot.topMenu = cc.find("UIGameTopMenu",nodePublic)
		uigameTopMenu.Init(uiRoot.topMenu, 
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

	},

	//- 设置玩家信息
	updateUserInfo(bEnter, data){
	    if(bEnter && data.UserID== GameG.getUserID() ){
	        this.uiRoot.user.root.active =(true)
	       	this.updateUserCoin(data.Score)
			if(gameData.ShowID == false ){
				this.uiRoot.user.name.string = "" + data.UserID
			} 
			else{
				this.uiRoot.user.name.string = "ID:" + data.UserID
			}
			uiUserPic.ResetSpriteByName(this.uiRoot.user.head, (data.FaceID).toString())
	    }
	},

	//- 设置玩家金币
	updateUserCoin(num){
	    if(gameData.UserInfo ){
	        num = num || gameData.UserInfo.Score
	        gameData.UserInfo.Score = num
	    }
	    if(this.bLockUseCoin != null){
			this.uiRoot.user.coin.string = GameG.FormatUnit(num || 0)
		}

	},

	//- 更新下注的按钮
	updateBetBtns(data){
		let self = this
	    this.uiRoot.betBtn.chip = []
		for(let i in data){
			let index = parseInt(i) +1 //lua 轉 javascript 初始值不同
	        let cfg = gameData.dtBaseBet[i]
		    let cls = cc.instantiate(this.uiRoot.pfChip)
	        let bet = data[i]
			if(gameData.chooseMoney == null){ gameData.chooseMoney = bet*gameData.dtBetRate }
		    if(cls ==null){ return }
	        cls.parent =(this.uiRoot.betBtn.scroll)
			cls.scale = 1
	        this.uiRoot.betBtn.chip[index] = {}
	        this.uiRoot.betBtn.chip[index].root = cls
	        this.uiRoot.betBtn.chip[index].root.active =(true)
	        this.uiRoot.betBtn.chip[index].blink = cc.find("btn/blink",cls).getComponent(cc.Sprite)
	        this.uiRoot.betBtn.chip[index].btn = cc.find("btn",cls).getComponent(cc.Button)
	        this.uiRoot.betBtn.chip[index].bet = cc.find("bet",cls).getComponent("TextControl")
			this.uiRoot.betBtn.chip[index].betValue = bet
					
			let buttomPicIndex = index
			if(index > 7 ){
				buttomPicIndex = 7
			}
	        GameG.SetImageSprite(cc.find("btn",cls).getComponent(cc.Sprite), "", "cast" + (buttomPicIndex).toString() + "_1", false)
			GameG.SetImageSprite(cc.find("btn/disable",cls).getComponent(cc.Sprite), "", "cast" + (buttomPicIndex).toString() + "_4", false)
	        this.uiRoot.betBtn.chip[index].bet.text = G.FormatDecimal(bet* gameData.dtBetRate, 0)
	        this.uiRoot.betBtn.chip[index].btn.node.on('click',function(){
				GameG.PlayGameSound("se_click")
	            gameAudio.btnClick()
	            self.setUserBet(bet, index)
				gameData.chooseBet = index
				gameData.chooseMoney = bet*gameData.dtBetRate
	        })
	    }
	   this.setUserBet(data[0], 1)	
	},

	//- 设置下注倍数
	setUserBet(num, index){
	//----->需重新編譯程式碼	if(this.ahBetBlink ){ this.ahBetBlink.stop() }
	//----->需重新編譯程式碼    if(this.ahBetBlink ){ this.ahBetBlink:Kill() }		
	    if(num == null ){ return }
	    gameData.dtUserBet = num
		for(let j in (this.uiRoot.betBtn.chip)){
			this.uiRoot.betBtn.chip[j].blink.node.active = (index == j)
			let obj = this.uiRoot.betBtn.chip[j].root		
			if(index == j ){
				obj.scale = 1.1
				obj.width = 124 * 1.05
				obj.height = 72
			} 
			else{
				obj.scale = 1
				obj.width = 124
				obj.height = 72
			}
	        obj.parent =(this.uiRoot.root)
	        obj.parent =(this.uiRoot.betBtn.scroll)
		}
	},

	//- 下注倒计时
	beginBetTimer(tm, call){
		if(this.hTimer.bAnim == true ){
			console.log("!!!!!!!!!!!!!!!!!!! stopBetTimer 2 !!!!!! ")
			return
		}
		
		// 扣掉載入場景花費的時間
		tm = tm - gameManager.calLoadTime()

		let self = this
    	// 初始化数据
		this.stopBetTimer()
	    this.hTimer.all = tm
	    this.hTimer.now = tm
	    this.uiRoot.timer.root.active =(true)
		this.uiRoot.timer.urgent.node.active =(false)
	    this.uiRoot.timer.text.text = (tm).toString()
		this.hTimer.bAnim = true
		
		let nowTime = 0

    	// 定时回调
	    this.hTimer.seq = GameG.StartCountDown(this.uiRoot.desk, 0.1, function(dt){
	        self.hTimer.now = self.hTimer.now - 0.1
			
			let num = self.uiRoot.timer.effect
			let timevalue = Math.ceil(self.hTimer.now)
	        self.uiRoot.timer.text.text = (timevalue).toString()

			if(timevalue <= 3 && timevalue > 0 && nowTime != timevalue){
				nowTime = timevalue
				GameG.SetImageSprite(num, "", "overTimer"+timevalue, true)

				var sqs = GameG.NewTween(num.node)
				sqs.to(0.2, {opacity: 255, scale: 1.5})
				sqs.to(0.8, {opacity: 0, scale: 0.5})
				sqs.start()
			}
			
			if(timevalue == 3 ){
				num.node.active =(true)
				self.uiRoot.timer.urgent.node.active =(true)
				self.uiRoot.timer.root.active =(false)
				gameAudio.turnStep(3)
			}

			if(self.hTimer.now <= 0 ){
	            //G.Service.Game.SendUserActionCommit("betend")
	            self.stopBetTimer()
				num.active =(false)
	            if(call ){ call() }
	        }
		})
	},

	//- 停止下注倒计时
	stopBetTimer(){
	    this.uiRoot.timer.text.text = "0"
	    if(this.hTimer.bAnim==true ){
	        GameG.RemoveCountDown(this.hTimer.seq)
	        this.hTimer.bAnim = false
	    }
	    this.hTimer.now = 0
	},

	//- 更新庄家信息
	updateBanker(data){
	   this.updateBetBtnState()
	},

	//- 添加注
	animAddCast(data, noAnim, call, bOther){
		let self = this
	    let max = 100
	    let len = 5
	    let allNum = 0
		for(let _ in (data)){ 
			let v = data[_] 

	        let vec = []
	        let idx = v.BetType
			let num = v.Count
			for(let i = gameData.dtBaseBet.length; i <= 1; ++i){
	            if(gameData.dtBaseBet[i] && gameData.dtBaseBet[i]>0 ){
	                vec[i] = Math.floor(num/gameData.dtBaseBet[i])
	                num = num%gameData.dtBaseBet[i]
				} 
            	else{
	                vec[i] = 0
	            }
	        }
			for(let i = 1; i <= vec.length; ++i){
            // 获取筹码
				for(let j = 1; j <= vec[i]; ++j){
					let tmp = null
				
	                if((this.uiCast[idx].length) >= this.betMax[idx] ){
	                    //this.uiCastIdx[idx] = math.fmod(this.uiCastIdx[idx]+1, this.betMax[idx])+1
	                    this.uiCastIdx[idx] = this.uiCastIdx[idx]+1 % this.betMax[idx] + 1
	                    tmp = this.uiCast[idx][this.uiCastIdx[idx]]
						SetCastData(tmp, i)
					} 
                	else{
	                    tmp = gameData.poolCast.get([cfg = gameData.dtBaseBet[i]])
	                    this.uiCast[idx][(this.uiCast[idx].length)+1] = tmp
	                }
                	// 执行动画
	                let over = fmg.randInRect(this.dtBetRect[idx])
	                if(noAnim ){
	                    tmp.position = over
					} 
                	else{
                    	// 初始化动画位置
	                    let beg = null					
	                    if(bOther ){
	                        beg = this.uiRoot.betUser.position
							over = fmg.randInRect(this.dtBetRect[idx])
						} 
                    	else{
	                        beg = fmg.convertPosN2N(this.uiRoot.betBtn.chip[i].btn, this.uiRoot.bet.cast.root, fmg.v3(0,0,0))
						}
											
					// 开始动画
					if(this.hCastAnim[tmp] ){ this.hCastAnim[tmp].stop() }
						tmp.position = beg
						var sqs = GameG.NewTween(tmp)
						//sqs.easing(cc.easeSineOut ())
						this.hCastAnim[tmp] = sqs
	                    sqs.delay(Math.min(allNum * 0.2, 1))
						sqs.call( function(){
							//tmp:SetSiblingIndex(max*11)
						})
						sqs.by(0.5, {position: over})
						
	                    fmg.argFuncAnim(sqs,function(adt){
	                        if(adt[1] ){ adt[1]() }
	                        slef.hCastAnim[adt[2]] = null
						},[call, tmp])
						sqs.start()
	                    allNum = allNum + 1
	                }
	            }
	        }
	    }
	    if(noAnim && call ){ call() }
	},

	//- 清除注
	resetBetCast(idx, num){
	    let castmax = 40
	    let coinmax = gameData.dtBaseBet[gameData.dtBaseBet]*castmax.length
		// 获取筹码数组
	    let vec = []
		let cast = 0
	    num = Math.min(num, coinmax)
		for(let i = gameData.dtBaseBet.length; i <= 1; ++i){
	        vec[i] = Math.floor(num/gameData.dtBaseBet[i])
	        num = num%gameData.dtBaseBet[i]
	    }
		// 按数量改变筹码
		for(let j = 1; j <= Math.min(vec.length, castmax); ++j){
			for(let i = 1; i <= vec[j]; ++i){
	            cast = cast + 1
	            if(cast<=castmax ){
                // 筹码不足，手动添加
					this.uiCast[idx] = this.uiCast[idx] || []
	                if ((this.uiCast[idx].length) < cast) {
	                    tmp = gameData.poolCast.get([cfg = gameData.dtBaseBet[j]])
	                    this.uiCast[idx][(this.uiCast[idx].length)+1] = tmp
	                }
	                let obj = this.uiCast[idx][cast]
	                obj.position = fmg.randInRect(this.dtBetRect[idx])
	            }
			// 修正沒有重新指定籌碼的問題
				SetCastData(this.uiCast[idx][cast], j)			
	        }
	    }
		// 删除多余的筹码
		for(let i = cast+1; i <= (this.uiCast[idx]).length; ++i){
	        gameData.poolCast.remove(this.uiCast[idx][i])
        	//fmg.Destroy(this.uiCast[idx][i])
			this.uiCast[idx][i] = null
	    }
	},

	//- 更新自己底注
	updateBetNumMy(idx, num){
    //this.uiRoot.bet.num[idx].my.text = GameG.FormatUnit(num || 0)
		if(num == 0 ){
			if(this.uiRoot.bet.num[idx] != null)
				this.uiRoot.bet.num[idx].my.text = ""		
		} 
		else{
			if(this.uiRoot.bet.num[idx] != null)
				this.uiRoot.bet.num[idx].my.text = "下注:" + G.FormatDecimal(num || 0, 0, 0)
		}
	},

	//- 更新桌面底注
	updateBetNumAll(idx, num){
	    if(idx && num ){
			if(this.uiRoot.bet.num[idx] != null)
				this.uiRoot.bet.num[idx].all.text = G.FormatDecimal(num, 0, 0)
	        if(num == 0 ){
				for(let _ in (this.uiCast[idx])){ 
					let v = this.uiCast[idx][_] 
	                gameData.poolCast.remove(v)
	            }
	            this.uiCast[idx] = []
	        }
	    }
	},

	//- 更新下注功能按钮的状态
	updateBetBtnState(){
	    let score = gameData.UserInfo.Score
	    let recode = gameControl.coluBetCoin(gameData.dtBetRecodeOrg)*gameData.dtBetRate
	    let allowBet = (gameData.bIBanker != null) && gameData.dtBetState==0 //and score>=gameData.dtUserBet
	    if(this.uiChipBtn ){
			for(let i = 1; i <= gameData.dtBaseBet.length; ++i){
	            this.uiRoot.betBtn.chip[i].btn.interactable = allowBet && score>=gameData.dtBaseBet[i]*gameData.dtBetRate
	        }
	    }
		for(let i = 1; i <= 10; ++i){
			this.uiRoot.bet.chip[i].interactable = allowBet
		}
		this.uiRoot.bet.continue.interactable = allowBet && recode>0 && score>=recode && (gameData.bBetted != null)
	},

	//- 显示上庄申请气泡
	showBankerBubble(num, bShow){
	},

	//- 显示下注特效：0:无；1:开始；2:结束；
	showBetEf(state){
	    this.uiRoot.start.root.active =(state == 1)
		this.uiRoot.stop.root.active =(state == 2)

		if (this.uiRoot.start.tween)
			this.uiRoot.start.tween.stop()

		if (this.uiRoot.stop.tween)
			this.uiRoot.stop.tween.stop()			

		let obj = null
		var sqs = null
		if(state == 1 ){
			obj = this.uiRoot.start.obj
			sqs = GameG.NewTween(obj)
			this.uiRoot.start.tween = sqs
		} 
	    else if(state == 2 ){
			obj = this.uiRoot.stop.obj
			sqs = GameG.NewTween(obj)
			this.uiRoot.stop.tween = sqs
		}
		
		if (obj)
		{
			obj.position = cc.v3(0,0,0)
			obj.opacity = 0
			obj.scale = 2

			sqs.to(0.2, {opacity: 255, scale: 1})
			sqs.to(0.25, {scale: 1.2})
			sqs.to(0.25, {scale: 0.9})
			sqs.to(0.25, {scale: 1.1})
			sqs.to(0.25, {scale: 1})
			sqs.delay(0.2)
			sqs.to(0.7, {position: cc.v3(2000,0,0)})
			sqs.start()
		}
	},

	//- 更新下注按钮的弧形位置
	UpdateCurvedBetBtn(pos){
	    let area = fmg.rect(0,-298,550,151)
		let center = fmg.v3(0, -555, 0)
		let radius = 550
		let chipSz = fmg.v2(127, 139)
	    let minX = -(area.width/2+chipSz.x/2)
		let maxX = (area.width/2+chipSz.x/2+chipSz.x)
	    let scroll = this.uiRoot.bet.chip.scroll
	    let content = this.uiRoot.betBtn.scroll
		for(let _ in (this.uiChipBtn)){ 
			let v = this.uiChipBtn[_] 

	        let pos = fmg.convertPosN2N(v.root, scroll, fmg.v3(0, 0, 0))
	        if(pos.x>=minX && pos.x<=maxX && Math.abs(pos.x)<=radius ){
	            pos.y = Math.max(Math.min(pos.y, -141), -5)
	            pos.y = Math.sqrt(radius*radius-(pos.x-center.x)*(pos.x-center.x))+center.y
	            pos = fmg.convertPosN2N(scroll, content, pos)
	            v.root.position = pos
	        }
	    }
	},

	//- 设置玩家人数
	updatePlayerNum(num){
	},

	//- 开始赢家闪烁
	blinkWinBet(zuhe){
	   this.stopBlinkWin()
		
		let LoseArea = []
		let WinArea = []
		for(let i = 1; i <= 10; ++i){
	        if(bit.band(zuhe, gameData.dtRstType[i].bit) != 0 ){
	            let obj = this.uiRoot.bet.num[i].efWin
	            //let color = obj.color
	            obj.active =(true)
				fmg.setAlpha(obj, 0)
				
				let repeatTween = GameG.NewTween(obj)
				let sqs = cc.tween(repeatTween)
				.to(0.3, {opacity: 255})
				.delay(0.4)
				.to(0.3, {opacity: 0})
				repeatTween.repeat(9999999999, tween).start()

				this.hBlinkWinBet[i] = sqs
				WinArea.push(i)
			} 
			else{
				LoseArea.push(i)
	        }
	    }	
		
		this.RemoveLoseArea(LoseArea)
		this.PlayWinAnimation(WinArea)	
	},

	//- 停止赢家闪烁
	stopBlinkWin(){
		for(let i = 1; i <= 10; ++i){
	        if(this.hBlinkWinBet[i] ){
				this.hBlinkWinBet[i].stop()
				this.hBlinkWinBet[i] = null
				this.uiRoot.bet.num[i].efWin.active =(false)
	        }
	    }
	},

	//- 自己分数增加向上飘分数动画
	showAddCoin(num, tm, score){
		if(num == 0 ){
			return
		}
		
	    let obj = null
		if(num < 0 ){
			obj = this.uiRoot.user.subcoin
		} 
		else{
			obj = this.uiRoot.user.addcoin
		}
	    obj.text = (num>0 && "+" || "")+GameG.FormatNum(num)
	    let pos = this.uiRoot.user.coin.node.position
	    obj.node.position = pos
		
		let self = this
        var sqs = GameG.NewTween(obj.node)
		sqs.call( function(){
			obj.node.active =(true)
			if(num > 0 ){
				self.uiRoot.user.coin.text = GameG.FormatNum(score)
			}
		})
		sqs.by(tm, {position: cc.v3(0,100,0)})
		sqs.call( function(){	
			obj.node.active =(false)
		})
		sqs.start()
	},

	SetCastData(obj, i){
		GameG.SetImageSprite(cc.find("btn",obj).getComponent(cc.Sprite), "", gameData.GetBetBtnImg(gameData.dtBaseBet[i], 1)+"_1", false)
		obj.Find("bet").getComponent(cc.Label).text = G.FormatDecimal(gameData.dtBaseBet[i]*gameData.dtBetRate, 0)
		//obj:SetSiblingIndex(100*11)
	},
	
	// 移除沒贏區域的籌碼
	RemoveLoseArea(LoseArea){
		let self = this
		fmg.delayFunc(function(adt){
			let IsPlayAudio = false
			
			for(let _ in (LoseArea)){ 
				let j = LoseArea[_] 

				if((self.uiCast[j].length) > 0 ){
					IsPlayAudio = true
					
					for(let  i = 1;  i <= (self.uiCast[j]).length; ++i){
						let obj = self.uiCast[j][i]
						var sqs = GameG.NewTween(obj)
						sqs.delay(Math.random() * 0.3)
						sqs.call( function(){ 
							obj.node.active =(false) 
						})
						sqs.start()
					}
				}
			}
			
			if(IsPlayAudio == true ){
				gameAudio.outCast()	
			}		
		}, 3.5, [])
	},

	// 播放獲勝區域動畫
	PlayWinAnimation(WinArea){
		let self = this
		fmg.delayFunc(function(adt){
			for(let _ in (WinArea)){ 
				let dtRstWin = WinArea[_] 

				// 取得玩家下注金額
				let userBetRecode = 0
				if(gameData.dtBetRecode != null ){
					if(gameData.dtBetRecode[dtRstWin] != null ){
						userBetRecode = gameData.dtBetRecode[dtRstWin].Count * gameData.dtBetRate
					}
				}
				// 其他玩家下注金額
				let otherBetRecode = 0
				if(gameData.BroadBet[dtRstWin] != null ){
					otherBetRecode = gameData.BroadBet[dtRstWin].Money - userBetRecode
				}
				
				//console.log("@@@@@@@@@@@@@@@@@ 玩家下注金額 " + tostring(userBetRecode) )
				//console.log("@@@@@@@@@@@@@@@@@ 其他玩家下注金額 " + tostring(otherBetRecode) )
				
				// 該位置有下注
				if(userBetRecode > 0 || otherBetRecode > 0 ){
					let newCountData = null
				
					// 補錢
					fmg.delayFunc(function(adt){ 
						gameAudio.addCoin()
						newCountData = this.AddWinCast(userBetRecode, 11, dtRstWin)
						this.AddWinCast(otherBetRecode, dtRstWin, dtRstWin)
					}, 0.5, [])
					
					// 獲勝飛錢
					fmg.delayFunc(function(adt){ 
						gameAudio.outCast()
						// 玩家有下注
						if(userBetRecode > 0 ){	
							let acc = this.resultFlyUserCast(newCountData, otherBetRecode, dtRstWin, self.uiCast[11])
							// 其他玩家有下注
							if(otherBetRecode > 0 ){
								this.resultFlyOtherCast(acc, dtRstWin)
							}
						} 
						// 玩家沒下住
						else{
								this.resultFlyOtherCast(1, dtRstWin)		
						}
					}, 1, [])
				}
			}
		}, 4, [])
	},

	// 增加贏區域籌碼數
	AddWinCast(money, poolIdx, dtRstWin){
		if(money == 0 ){
			return
		}
		
		let CheckBet = require("CheckBet")
		let Magnification = [1, 	//LM 庄
								1, 	//RM 閒
								8, 	//MM 和
								0, 	//LU 庄天王
								0,	//RU 閒天王
								11, //LD 庄對子
								11, //RD 閒對子
								0, 	//LM 庄順子
								0, 	//RM 閒順子
								0,]	//MD 同點和
		
		let BetInfo = CheckBet.Init(money * Magnification[dtRstWin], gameData.dtBaseBet, gameData.dtBetRate)
		let BetData = BetInfo["value"]
		let CountData = BetInfo["count"]
		
		// 將計算結果轉換回一般順序
		let newCountData = []
		for(let  i  =  1;  i  <=  BetData.length; ++i){
			//t1, t2 = math.modf(BetData[i]/gameData.dtBetRate)
			t1 = parseInt(BetData[i]/gameData.dtBetRate)
			for(let  j  =  1;  j  <=  gameData.dtBaseBet.length; ++j){
				if(t1 == gameData.dtBaseBet[j] ){				
					newCountData[j] = CountData[i]
				}
			}
		}
		
		// 庄家補錢動畫
		for(let  i  =  1;  i  <=  newCountData.length; ++i){
			for(let  j  =  1;  j  <=  newCountData[i]; ++j){
				tmp = gameData.poolCast.get([cfg = gameData.dtBaseBet[i]])
				this.uiCast[poolIdx][(this.uiCast[poolIdx].length)+1] = tmp
				SetCastData(tmp, i)
				
				var sqs = GameG.NewTween(obj)
				sqs.by(0.4, {position: 0.4})
				sqs.delay(Math.random() * 0.2)
				sqs.start()
			}
		}
		
		return newCountData
	},

	FlyUserCast(obj){
		var sqs = GameG.NewTween(obj)
		sqs.to(0.5, {position: this.uiRoot.user.head.position})
		sqs.delay(Math.random() * 0.2)
		sqs.call(function(){
			obj.active =(false)
		})
		sqs.start()
	},

	// 贏區域的籌碼飛向玩家
	resultFlyUserCast(newCountData, otherBetRecode, dtRstWin, usrpool){
		// 莊家賠的籌碼
		for(let  i = 1;  i <= usrpool.length; ++i){
			let obj = usrpool[i]
			this.FlyUserCast(obj)
		}
		
		// 其他玩家有下注，一部分飛向玩家，其他之後飛向其他玩家
		acc = 1
		if(otherBetRecode != 0 ){
			for(let  i  =  1;  i  <=  newCountData.length; ++i){
				for(let  j  =  1;  j  <=  newCountData[i]; ++j){
					let obj = this.uiCast[dtRstWin][acc]
					SetCastData(obj, i)
					this.FlyUserCast(obj)
					acc = acc + 1
				}
			}
		// 其他玩家沒下住，所有的錢飛向玩家
	} 
	else{
		for(let i = 1; i  <= this.uiCast[dtRstWin].length; ++i){
				let obj = this.uiCast[dtRstWin][i]
				this.FlyUserCast(obj)
			}
		}
		return acc
	},

	// 贏區域的籌碼飛向其他玩家
	resultFlyOtherCast(beginIdx, dtRstWin){
		if(beginIdx == 0 ){
			beginIdx = 1
		}
		
		for(let  i = beginIdx;  i <=  (this.uiCast[dtRstWin]).length; ++i){
			let obj = this.uiCast[dtRstWin][i]
			let endPos = this.uiRoot.betUser.position
		
			var sqs = GameG.NewTween(obj)
			sqs.by(1, {position: endPos})
			sqs.delay(Math.random() * 0.2)
			sqs.call(function(){
				obj.active =(false)
			})
			sqs.start()
		}	
	},

	GameStart(){
		this.uiRoot.userStar.SetActive(false)
		for(let k in (this.uiRoot.userList)){ 
			let v = this.uiRoot.userList[k] 
			if(v != null)
				v.GameStart() 
		}
		for(let k in (this.uiRoot.betList)){ 
			let v = this.uiRoot.betList[k] 
			if(v != null)
				v.GameStart() 
		}
	},

	GameEnd(){
		this.uiRoot.userStar.SetActive(false)
		for(let k in (this.uiRoot.userList)){ 
			let v = this.uiRoot.userList[k] 
			if(v != null)
				v.GameEnd()
		}
		for(let k in (this.uiRoot.betList)){ 
			let v = this.uiRoot.betList[k] 
			if(v != null)
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
		this.uiRoot.userStar.SetActive(true)
		this.uiRoot.userStar.SetHead(data.UserFaceID)
		this.uiRoot.userStar.SetUserId(data.UserID)
	},

	//回收下注区金额
	ShowWinChip(siteNo,isWin){
		if(this.uiRoot.betList[siteNo] != null){
			this.uiRoot.betList[siteNo].ChangeChipUserId(gameData.winList,isWin)
			let headPosition = GameG.LocalConvertWorldPointAR(this.uiRoot.user.head.node)
			this.uiRoot.betList[siteNo].ShowWinChip(headPosition,GameG.getUserID())
			for(let k in (this.uiRoot.userList)){ 
				let v = this.uiRoot.userList[k] 
				this.uiRoot.betList[siteNo].ShowWinChip(v.GetPosition(),v.GetUserId())
			}
			this.uiRoot.betList[siteNo].ShowWinChip(this.uiRoot.userStar.GetPosition(),this.uiRoot.userStar.GetUserId())
			
			this.uiRoot.betList[siteNo].ShowWinChip(this.uiRoot.zhungPos,0)
			this.uiRoot.betList[siteNo].ShowWinChip(this.uiRoot.xianPos,0)
			this.uiRoot.betList[siteNo].ShowWinChip(null,null)
		}
	},

	//补给下注区金额
	ShowLoseChip(siteNo){
		if(this.uiRoot.betList[siteNo] != null){
			this.uiRoot.betList[siteNo].ShowLoseChipAll(gameData.GetResultOdd(siteNo),this.uiRoot.zhungPos)
			this.uiRoot.betList[siteNo].ShowLoseChipMy(gameData.GetResultOdd(siteNo),this.uiRoot.zhungPos)
		}
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
			
			if(GameG.getUserID() == userId ){
				targetPos = this.uiRoot.user.head.position
				this.ShowBroadCastBetMy(k,0)
			}
			
			if(v != null)
				v.ShowClearBetChip(userId,targetPos)
		}
	},

	ClearBetRetError(siteNo,num,userId){
		if(this.uiRoot.betList[siteNo] != null)
			this.uiRoot.betList[siteNo].ClearBetRetError(num,userId)
	},

	ShowBroadCastBetAll(siteNo,num){
		if(this.uiRoot.betList[siteNo] != null)
			this.uiRoot.betList[siteNo].ShowBroadCastBetAll(num)
	},

	ShowBroadCastBetMy(siteNo,num){
		if(this.uiRoot.betList[siteNo] != null)
			this.uiRoot.betList[siteNo].ShowBroadCastBetMy(num)
	},

	ShowCastBetChip(siteNo,num,index,userId){
		let targetPos = null
		let dir = 10
		//自己
		if(targetPos == null ){
			if(GameG.getUserID() == userId ){
				targetPos = this.uiRoot.betBtn.chip[gameData.chooseBet].root.position
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
					else v.AnimShake(dir * -1) 
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
			var seq = GameG.NewTween(this.uiRoot.betUser)
			seq.to(0.1, {position: cc.v2(this.betUserStartPos.x - dir,this.betUserStartPos.y + dir)})
			seq.to(0.15, {position: cc.v2(this.betUserStartPos.x,this.betUserStartPos.y)})
			seq.call(function(){
				self.uiRoot.betUser.position = self.betUserStartPos
			})
			seq.start()
		}
		
		if(this.uiRoot.betList[siteNo] != null)
			this.uiRoot.betList[siteNo].ShowCastBetChip(num,index,gameData.dtBetState == 0,targetPos,userId)		
	},

	ShowLuckyStar(siteNo,show){
		if(show ){
			if(this.uiRoot.betList[siteNo] != null)
				this.uiRoot.betList[siteNo].ShowLuckyStar()
		} 
		else{
			if(this.uiRoot.betList[siteNo] != null)
				this.uiRoot.betList[siteNo].StopLuckyStar()
		}
	},

	ShowResultPoker(data){
		for(let k in (this.uiRoot.betList)){ 
			let v = this.uiRoot.betList[k] 
			if(v != null){
				if(bit.band(data.ZuHe, gameData.dtRstType[k].bit) != 0 ){
					v.ShowBlinkWin(10)
				}
			}
		}
	},

	ShowResultWin(data){
		if(gameData.winZuHe == null ){
			return
		}
		
		this.bLockUseCoin = true
		
		gameData.winList = []
		for(let k in (data.StageUerInfo)){ 
			let v = data.StageUerInfo[k] 

			if(v.Win > 0 ){
				gameData.winList[gameData.winList.length +1] = v.UserID
			}
		}
		let self = this
		let timer = 0.85
		let sequence = GameG.NewTween(this.uiRoot)
		sequence.call(function(){ 
			for(let k in (self.uiRoot.betList)){ 
				if(bit.band(gameData.winZuHe, gameData.dtRstType[k].bit) != 0 ){
					self.ShowLoseChip(k)
				}
			}
		})
		
		sequence.delay(timer)
		sequence.call(function(){ 
			for(let k in (self.uiRoot.betList)){ 
				let isWin = bit.band(gameData.winZuHe, gameData.dtRstType[k].bit) != 0
				// 开和全退
				if(bit.band(gameData.winZuHe, gameData.dtRstType[3].bit) != 0 ){
					if(k != 6 && k != 7 ){
						isWin = true
					}
				}
				self.ShowWinChip(k,isWin)
			}
		})
		
		sequence.delay(timer)
		sequence.call(function(){ 
			self.ShowResultScore(data) 
			self.bLockUseCoin = false
		})
		sequence.start()
	},

	ShowResultScore(data){
		gameAudio.eFlyMoneyNum(data.SelfWin != 0)
		this.showAddCoin(data.SelfWin, 1.7, gameData.UserInfo.Score)
		
		for(let k1 in (data.StageUerInfo)){ 
			let v1 = data.StageUerInfo[k1] 

			let showing = false
			if(GameG.getUserID() == v1.UserID ){
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

//- 开始赢家闪烁
	ShowBlinkWin(idx, tm){
		if(this.uiRoot.betList[idx] != null)
			this.uiRoot.betList[idx].ShowBlinkWin(tm)
	},

	StopBlinkWin(idx){
		if(this.uiRoot.betList[idx] != null)
			this.uiRoot.betList[idx].StopBlinkWin()
	},


};

module.exports = GameLayer
