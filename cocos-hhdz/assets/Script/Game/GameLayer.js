var G = require("Global")
var Download = require("DownloadTxtFile")
var GameLayer = fmg.class("GameLayer")
var uiuser = require("UIUser")
var uibet = require("UIBet")
/* 显示开始
function GameLayer:animGameStart()
    // 因應沒圖改版暫時停止撥放 add by bob
     self.uiRoot.gameStart.rootAni.gameObject:SetActive(true)
    self.uiRoot.gameStart.ani.gameObject:SetActive(false)
	
	fmg.delayFunc(function(adt)
		hhdz.gameAudio:turnStep(8, {1})
	end, 0.2, {})	
	
	fmg.delayFunc(function(adt)
		self.uiRoot.root.transform:DOShakePosition(0.2, 20)
	end, 0.7, {})
	 //因應沒圖改版暫時停止撥放 add by bob
	it1 = CS.UnityEngine.GameObject.Instantiate(self.uiRoot.gameStart.ani).transform
	it1:SetParent(self.uiRoot.gameStart.rootAni)
	it1.localScale = fmg.v3(1.5,1.5,1.5)
	it1.localPosition = fmg.v3(0,0,0)
	it1.gameObject:SetActive(true)
	//hhdz.compare:playCard()

	fmg.delayFunc(function(adt)
        fmg.Destroy(adt[1])
		self.uiRoot.gameStart.rootAni.gameObject:SetActive(false)
		self.uiRoot.root.transform.localPosition = fmg.v3(0, 0, 0)
	end, 2, {it1})
end*/
/*
//- 显示开始
function GameLayer:animGameStart()

    // 因應沒圖改版暫時停止撥放 add by bob
    self.uiRoot.gameStart.rootAni.gameObject:SetActive(true)
    
	local y = self.uiRoot.gameStart.rootLeft.anchoredPosition.y
	self.uiRoot.gameStart.rootLeft.anchoredPosition = CS.UnityEngine.Vector2(-600,y)
	local y = self.uiRoot.gameStart.rootRight.anchoredPosition.y
    self.uiRoot.gameStart.rootRight.anchoredPosition = CS.UnityEngine.Vector2(600,y)
	
//----->需重新編譯程式碼	local sequence = CS.DG.Tweening.DOTween.Sequence()
	
//----->需重新編譯程式碼	sequence:Append(self.uiRoot.gameStart.rootLeft:DOAnchorPosX(-100, 0.2))
//----->需重新編譯程式碼	sequence:Join(self.uiRoot.gameStart.rootLeft:DOScale(CS.UnityEngine.Vector3(0.8, 1.2, 1), 0.2))
//----->需重新編譯程式碼	sequence:Join(self.uiRoot.gameStart.rootRight:DOAnchorPosX(100, 0.2))
//----->需重新編譯程式碼	sequence:Join(self.uiRoot.gameStart.rootRight:DOScale(CS.UnityEngine.Vector3(0.8, 1.2, 1), 0.2))
			
//----->需重新編譯程式碼	sequence:Append(self.uiRoot.gameStart.rootLeft:DOScale(CS.UnityEngine.Vector3(1.2,0.8,1), 0.2))
//----->需重新編譯程式碼	sequence:Join(self.uiRoot.gameStart.rootRight:DOScale(CS.UnityEngine.Vector3(1.2,0.8,1), 0.2))
	
//----->需重新編譯程式碼	sequence:Join(self.uiRoot.gameStart.rootLeft:DOAnchorPosX(-300, 0.3))
//----->需重新編譯程式碼	sequence:Join(self.uiRoot.gameStart.rootRight:DOAnchorPosX(300, 0.3))
	
//----->需重新編譯程式碼	sequence:Append(self.uiRoot.gameStart.rootLeft:DOScale(CS.UnityEngine.Vector3.one, 0.1))
//----->需重新編譯程式碼	sequence:Join(self.uiRoot.gameStart.rootRight:DOScale(CS.UnityEngine.Vector3.one, 0.1))
	
//----->需重新編譯程式碼	sequence:AppendInterval(0.5)
//----->需重新編譯程式碼	sequence.call(function() 
		self.uiRoot.gameStart.rootAni.gameObject:SetActive(false)
	end)
end
*/

var GameLayer = {
	extends: cc.Component,

//-
	GameLayer:ctor(){
	    self.dtOpenCardStep = 0                     // 开牌动画
	    self.bLockUseCoin = false                   // 是否不更新金币显示
	
	    self.dtBetTimer = "tmhBeginBet"             // 开奖投注倒计时名称
	    self.uiCast = [[], [], [], [],]             // 桌面下注筹码ui
	    self.hCastAnim = []                         // 下筹码动画保存
	    self.uiCastIdx = [0, 0, 0,]                 // 筹码重用索引
	
    // 下注筹码位置（相对gameLayer）
	    self.dtBetPos = [fmg.v3(-284,-300,0),fmg.v3(-135,-300,0),fmg.v3(6,-300,0),fmg.v3(147,-300,0),fmg.v3(290,-300,0),]
	    self.dtBetRectOther = [fmg.rect(-675,5,1,408), fmg.rect(675,5,1,408),]
		
	    self.dtBetBtnStart = fmg.v3(70, -70, 0)             // bet btn起始位置
	    self.dtBetBtnOfst = fmg.v3(130, 0, 0)               // bet btn偏移位置
	    self.LuckyStarIsPlaying=[0,0,0]
	
	    self:initUi()
	},

//-
	GameLayer:onExit(){
	},

//-
	GameLayer:initUi(){
	
    // 获取layer
	    let canvas = cc.find("Canvas")
	    let root =cc.find("GameLayer", canvas)
	    self.uiRoot = []
	    self.uiRoot.root = root
	    let uiRoot = self.uiRoot
	    
    // 查找按钮
	    let  findBtn = function(name, func){
	        let btn =cc.find(name, root).getComponent(cc.Button)
	        btn.node.on('click',func)
	        return btn
	    }
		
		uiRoot.userStar = uiuser.Create(cc.find("otherUser/Star",root))
		uiRoot.userList = []
	for(let  i = 1;  i <= 5; ++ i){ //	for i=1,5 do 
			uiRoot.userList[i] = uiuser.Create(cc.find("otherUser/No"+i,root))
		}
		
		uiRoot.betList = []
	for(let  i = 1;  i <= 3; ++ i){//	for i=1,3 do
			uiRoot.betList[i] = uibet.Create(i,cc.find("BetGroup/ButtonBet"+i,),cc.find("BetGroupFront/ButtonBet"+i,),cc.find("BetGroupLast/ButtonBet"+i,root))
			uiRoot.betList[i].SetCallback(function(index){ 
				if(hhdz.gameControl:BetCoin(index) == true) {
				/*
				if(hhdz.dtBetState == 0)then
					local num = hhdz.chooseMoney
					local chipIndex = hhdz.chooseBet
					local targetPos = self.uiRoot.betBtn.chip[chipIndex].root.transform.position
					uiRoot.betList[index].ShowCastBetChip(num,chipIndex,true,targetPos,G.User.GetCurrentUserID())
				end*/
				}
			})
		}
		
	    uiRoot.playerNum =cc.find("betNum/playerNum/num", root).getComponent(cc.Label)
	//
		uiRoot.gameStart = []
	    uiRoot.gameStart.betAni =cc.find("gameStartAni/betAni", root).getComponent(sp.Skeleton)
		uiRoot.gameStart.betAni.active =(false)
	/*
	
    uiRoot.gameStart.root = root.transform:Find("gameStart"):GetComponent("RectTransform")
    uiRoot.gameStart.ps = root.transform:Find("gameStart/UIBetStart"):GetComponent("ParticleSystem")
    uiRoot.gameStart.root.gameObject:SetActive(false)
	
    uiRoot.gameStart.rootAni = root.transform:Find("gameStartAni")
    uiRoot.gameStart.ani = root.transform:Find("gameStartAni/Ani")
    uiRoot.gameStart.rootAni.gameObject:SetActive(false)
    uiRoot.gameStart.ani.gameObject:SetActive(false)
    uiRoot.gameStart.rootLeft = root.transform:Find("gameStartAni/ImageLeft"):GetComponent("RectTransform")
	uiRoot.gameStart.rootRight = root.transform:Find("gameStartAni/ImageRight"):GetComponent("RectTransform")
	*/
    //
	    uiRoot.gameStop = []
	    uiRoot.gameStop.root =cc.find("gameStop", root)
	    uiRoot.gameStop.ps =cc.find("gameStop/UIBetEnd", root).getComponent(cc.ParticleSystem)
	    uiRoot.gameStop.root.active =(false)	
	
    //
	    uiRoot.betNum = []
	    uiRoot.betNum.hu =cc.find("betNum/_betHu/num", root).getComponent(cc.Label)
	    uiRoot.betNum.draw =cc.find("betNum/_betDraw/num", root).getComponent(cc.Label)
	    uiRoot.betNum.long =cc.find("betNum/_betLong/num", root).getComponent(cc.Label)
	    uiRoot.betNum.betCast =cc.find("betNum/_betCast", root)
	    uiRoot.betNum.hu.parent.active =(false)
	    uiRoot.betNum.draw.parent.active =(false)
	    uiRoot.betNum.long.parent.active =(false)
	    uiRoot.betNum.hu.text = "0"
	    uiRoot.betNum.draw.text = "0"
	    uiRoot.betNum.long.text = "0"
	
    //
	    uiRoot.betNum.iBet = []
	    uiRoot.betNum.iBet[1] =cc.find("betNum/_betILong/coin", root).getComponent(cc.Label)
	    uiRoot.betNum.iBet[2] =cc.find("betNum/_betIDraw/coin", root).getComponent(cc.Label)
	    uiRoot.betNum.iBet[3] =cc.find("betNum/_betIHu/coin", root).getComponent(cc.Label)
	for(let      i = 1;      i <= 3; ++     i){//    for i=1,3 do
	        uiRoot.betNum.iBet[i].text = "0"
	    }
	
    // bet btn
	    uiRoot.betBtn = []
	    uiRoot.betBtn.betBtn =cc.find("downMune/betBtn", root)
	    uiRoot.betBtn.scroll =cc.find("downMune/betBtn/scroll/Viewport/Content", root)
	
	    uiRoot.betUser =cc.find("downMune/users", root)
		betUserStartPos = self.uiRoot.betUser.position
	
		uiRoot.zhuang =cc.find("zhuang", root)
	
    // 底部工具栏
	    uiRoot.user = []
	    uiRoot.user.bg =cc.find("downMune/userInfo", root)
	    uiRoot.user.head =cc.find("downMune/userInfo/head", root).getComponent(cc.Sprite)
	    uiRoot.user.name =cc.find("downMune/userInfo/name", root).getComponent(cc.Label)
	    uiRoot.user.coin =cc.find("downMune/userInfo/coin", root).getComponent(cc.Label)
	    uiRoot.user.addcoin =cc.find("downMune/userInfo/addcoin", root).getComponent(cc.Label)
		uiRoot.user.subcoin =cc.find("downMune/userInfo/subcoin", root).getComponent(cc.Label)
	    uiRoot.user.bg.active =(false)
	    uiRoot.user.addcoin.active =(false)
		uiRoot.user.subcoin.active =(false)
		
	    uiRoot.betBtn.chart = findBtn("_chartLayer/_betChart", function(){
		    hhdz.gameAudio:btnClick()
	        hhdz.chartLayer:show(true)
		})
		
	//充值訊息
		uiRoot.recharge = []
		uiRoot.recharge.root 	=cc.find("Recharge", root)
		uiRoot.recharge.text 	=cc.find("Recharge/Text", root).getComponent(cc.Label)
		uiRoot.recharge.button 	= findBtn("Recharge/Button",function(){
		    hhdz.gameAudio:btnClick()
			let openparam = CS.WindowNodeInitParam("UIRecharge", CS.AppDefine.HallNumber)
	        CS.WindowManager.Instance:OpenWindow(openparam)
		})
		uiRoot.recharge.root.active =(false)
	
    // gameInfo
	    uiRoot.gameInfo = []
	    uiRoot.gameInfo.round =cc.find("gameInfo/roundTxt", root).getComponent(cc.Label)
	    uiRoot.gameInfo.min =cc.find("gameInfo/min", root).getComponent(cc.Label)
	    uiRoot.gameInfo.max =cc.find("gameInfo/max", root).getComponent(cc.Label)
	    uiRoot.gameInfo.roadToggle  =cc.find("gameInfo/RoadToggle", root).getComponent(cc.Toggle)
	    uiRoot.gameInfo.roadArrow  =cc.find("gameInfo/RoadToggle/Arrow", root)
	    uiRoot.gameInfo.roadToggle.onValueChanged:AddListener(function(isOn){
	        hhdz.gameAudio:btnClick()
	        let position = isOn && cc.v2(906,-50) || cc.v2(157,-50)
	        let arrowScale = isOn && cc.v3(-1,1,1) || cc.v3(1, 1, 1)
	        uiRoot.gameInfo.roadToggle.anchoredPosition = position
	        uiRoot.gameInfo.roadArrow.scale = arrowScale
	        uiRoot.road.root.active =(isOn)
		})
    // countdown
	    uiRoot.countdown = []
	    uiRoot.countdown.root =cc.find("countdown", root)
	    uiRoot.countdown.frame =cc.find("countdown/frame", root).getComponent(cc.Sprite)
	    uiRoot.countdown.circle =cc.find("countdown/circle", root).getComponent(cc.Sprite)
	    uiRoot.countdown.time =cc.find("countdown/time", root).getComponent(cc.Label)
	    uiRoot.countdown.countdownSequence = null
		uiRoot.countdown.root.active =(false)
		
	    uiRoot.betBtn.autoImg =cc.find("downMune/_betAuto", root).getComponent(cc.Sprite)
	    uiRoot.betBtn.auto = findBtn("downMune/_betAuto", function(){
		    hhdz.gameAudio:btnClick()
	        hhdz.bAutoBet = true
	        hhdz.gameLayer.uiRoot.betBtn.auto.active =(false)
	        hhdz.gameLayer.uiRoot.betBtn.autoNo.active =(true)
	        hhdz.toast:show("您已经开启自动下注")
	    })
	    uiRoot.betBtn.autoNoImg =cc.find("downMune/_betAutoNo", root).getComponent(cc.Sprite)
	    uiRoot.betBtn.autoNo = findBtn("downMune/_betAutoNo", function(){
		    hhdz.gameAudio:btnClick()
	        hhdz.bAutoBet = false
	       	hhdz.gameLayer.uiRoot.betBtn.auto.active =(true)
	        hhdz.gameLayer.uiRoot.betBtn.autoNo.active =(false)
	        hhdz.toast:show("您已经取消自动下注")
	    })
	    uiRoot.betBtn.betLong = findBtn("betNum/_doBetLong", function(){
		    hhdz.gameAudio:btnClick()
	        hhdz.gameControl:BetCoin(1)
	    })
	    uiRoot.betBtn.betHe = findBtn("betNum/_doBetHe", function(){
		    hhdz.gameAudio:btnClick()
	        hhdz.gameControl:BetCoin(2)
	    })
	    uiRoot.betBtn.betHu = findBtn("betNum/_doBetHu", function(){
		    hhdz.gameAudio:btnClick()
	        hhdz.gameControl:BetCoin(3)
	    })
	    uiRoot.betBtn.openPlayerList = findBtn("open", function(){
	        hhdz.gameAudio:btnClick()
	        hhdz.playerList:show(true)
		})
	
		
    //menu
	    uiRoot.menu = []
	    uiRoot.menu.exit = findBtn("menu/exit", function(){
	        hhdz.gameAudio:btnClick()
			G.Service.Game.ExitGame()
	    })
	    uiRoot.menu.setting = findBtn("menu/setting", function(){
	        hhdz.gameAudio:btnClick()
			uiRoot.setting.root.active =(true)
	    })
	    uiRoot.menu.description = findBtn("menu/description", function(){
	        hhdz.gameAudio:btnClick()
	        self.uiRoot.description.root.active =(true)
	        self:updateDescription()
		})
		
    //setting
	    uiRoot.setting = []
	    uiRoot.setting.root             =cc.find("Setting", root)
	    uiRoot.setting.bgmOpenToggle    =cc.find("Setting/Bgm/OpenToggle", root).getComponent(cc.Toggle)
	    uiRoot.setting.bgmCloseToggle   =cc.find("Setting/Bgm/CloseToggle", root).getComponent(cc.Toggle)
	    uiRoot.setting.soundOpenToggle  =cc.find("Setting/Sound/OpenToggle", root).getComponent(cc.Toggle)
	    uiRoot.setting.soundCloseToggle =cc.find("Setting/Sound/CloseToggle", root).getComponent(cc.Toggle)
	    uiRoot.setting.versionText      =cc.find("Setting/VersionText", root).getComponent(cc.Label)
	
		uiRoot.setting.settingCloseBG   = findBtn("Setting/CloseBG", function(){
			uiRoot.setting.root.active =(false)
	    })
	    uiRoot.setting.settingCloseButton =  findBtn("Setting/CloseButton", function(){
	        hhdz.gameAudio:btnClick()
			uiRoot.setting.root.active =(false)
	    })
	    let  SetBgm = function(value){
			G.Tool.Sound.MusicStatus(value)
			G.GameConfig.MusicStatus=value;
		}
	
		let  SetSound = function(value){
			G.Tool.Sound.SoundStatus(value)
			G.GameConfig.SoundStatus = value;
		}
		
		uiRoot.setting.bgmOpenToggle.isOn 		= G.Tool.Sound.MusicStatus()	
		uiRoot.setting.bgmCloseToggle.isOn 	    = not G.Tool.Sound.MusicStatus()	
		uiRoot.setting.soundOpenToggle.isOn 	= G.Tool.Sound.SoundStatus()
		uiRoot.setting.soundCloseToggle.isOn 	= not G.Tool.Sound.SoundStatus()
	
		uiRoot.setting.bgmOpenToggle.onValueChanged:AddListener(function(isOn){
			SetBgm(isOn)
	        hhdz.gameAudio:btnClick()
		})
		uiRoot.setting.bgmCloseToggle.onValueChanged:AddListener(function(isOn){
	        hhdz.gameAudio:btnClick()
		})
		uiRoot.setting.soundOpenToggle.onValueChanged:AddListener(function(isOn){
			SetSound(isOn)
	        hhdz.gameAudio:btnClick()
	    })
	    
    // 版號
	    let localVersion = CS.HotUpdate.HotUpdateManager.Instance:GetProjectVersion(G.GetGamePName())
	    root:Find("Setting/VersionText").getComponent(cc.Label).text = "V." + tostring(lo,    rootcalVersion)
		
	//description
		uiRoot.description = []
		uiRoot.description.root  =cc.find("Description", root)
		uiRoot.description.text  =cc.find("Description/ScrollRect/Text", root).getComponent(cc.Label)
		uiRoot.description.closeBG = findBtn("Description/CloseBG", function(){
		  uiRoot.description.root.active =(false)
		})
		uiRoot.description.closeButton = findBtn("Description/CloseButton", function(){
		  hhdz.gameAudio:btnClick()
		  uiRoot.description.root.active =(false)
		})
	
		
    // 下注范围(龙和虎)
		let offsetX = 0
		let offsetY = 10
		let subWidth = 80
		let subHeight = 180
		self.dtBetRect = 
		[
			fmg.ObjToRect(uiRoot.betBtn.betLong, offsetX, offsetY, subWidth, subHeight),
			fmg.ObjToRect(uiRoot.betBtn.betHe, offsetX, offsetY, subWidth, subHeight),
			fmg.ObjToRect(uiRoot.betBtn.betHu, offsetX, offsetY, subWidth, subHeight),
		]
		
	// uiRoot.banker = {}
		uiRoot.time = []
	    uiRoot.time.betTip =cc.find("timeBet/timeBet", root).getComponent(cc.Sprite)
	    uiRoot.time.rstTip =cc.find("timeBet/timeRst", root).getComponent(cc.Sprite)
	    uiRoot.time.count =cc.find("timeBet/timeBet/timeDown", root).getComponent(cc.Label)
		uiRoot.time.betTip.active =(false)
		uiRoot.time.rstTip.active =(false)
		
	    uiRoot.timer = []
		uiRoot.timer.effect =cc.find("_beginTimer", root).getComponent(cc.Sprite)	
		
		
	    uiRoot.road = []
	    uiRoot.road.root =cc.find("_chartLayer", root)
	    uiRoot.road.root.active =(false)
	//大路
	    uiRoot.road.bigRoad = []
		uiRoot.road.bigRoad.root =cc.find("_chartLayer/BigRoad", root)
		uiRoot.road.bigRoad.toggle =cc.find("_chartLayer/ToggleGroup/BigRoad", root).getComponent(cc.Toggle)
	    uiRoot.road.bigRoad.root.active =(true)
	
    //珠盘路
		uiRoot.road.beadRoad = []
		uiRoot.road.beadRoad.root =cc.find("_chartLayer/BeadRoad", root)
		uiRoot.road.beadRoad.toggle =cc.find("_chartLayer/ToggleGroup/BeadRoad", root).getComponent(cc.Toggle)
	    uiRoot.road.beadRoad.root.active =(false)
	
	    uiRoot.road.bigRoad.toggle.isOn = true
	    uiRoot.road.beadRoad.toggle.isOn = false
	
	    uiRoot.road.bigRoad.toggle.onValueChanged:AddListener(function(isOn){
	        hhdz.gameAudio:btnClick()
	        uiRoot.road.bigRoad.root.active =(isOn)
	        uiRoot.road.beadRoad.root.active =(not isOn)
	    })
	
		
    //下局
	    uiRoot.road.nextRound = []
	    uiRoot.road.nextRound.nextBlackDayanlu =cc.find("_chartLayer/NextRound/NextBlackDayanlu", root).getComponent(cc.Sprite)
	    uiRoot.road.nextRound.nextBlackXiaoyanlu =cc.find("_chartLayer/NextRound/NextBlackXiaoyanlu", root).getComponent(cc.Sprite)
	    uiRoot.road.nextRound.nextBlackZhanglanglu =cc.find("_chartLayer/NextRound/NextBlackZhanglanglu", root).getComponent(cc.Sprite)
	    uiRoot.road.nextRound.nextRedDayanlu =cc.find("_chartLayer/NextRound/NextRedDayanlu", root).getComponent(cc.Sprite)
	    uiRoot.road.nextRound.nextRedXiaoyanlu =cc.find("_chartLayer/NextRound/NextRedXiaoyanlu", root).getComponent(cc.Sprite)
	    uiRoot.road.nextRound.nextRedZhanglanglu =cc.find("_chartLayer/NextRound/NextRedZhanglanglu", root).getComponent(cc.Sprite)
	
    //總和
	    uiRoot.road.round = []
	    uiRoot.road.round.black =cc.find("_chartLayer/Total/TextBlack", root).getComponent(cc.Label)
	    uiRoot.road.round.red =cc.find("_chartLayer/Total/TextRed", root).getComponent(cc.Label)
	    uiRoot.road.round.total =cc.find("_chartLayer/Total/TextTotal", root).getComponent(cc.Label)
	
    // 
	//local targetPos = canvas.transform:Find("public/AnnAnchorPos").transform.position
   	// G.Service.Game.InitGameTopMenu(canvas.transform:Find("public/public").transform, nil, nil, targetPos)
    //hhdz.compare:initCompare(0)
	},

	GameLayer:CreateClone(perfab){
		let clone = cc.instantiate(perfab)
		if(clone == null){ return null }
		clone.parent =(perfab.parent)
		clone.position = cc.v3(0, 0, 0)
		clone.scale = cc.v3(1, 1, 1)
	
		return clone
	},

	GameLayer:CreateBigRoad(){
		let perfab =cc.find("Grid/Content", self.uiRoot.road.bigRoad.root)
		let clone = self:CreateClone(perfab)
		let index = self.uiRoot.road.bigRoad.length +1
		clone.name = "Content_" + index
		self.uiRoot.road.bigRoad[index] = []
		self.uiRoot.road.bigRoad[index].root = clone
		self.uiRoot.road.bigRoad[index].root.active =(true)
	for(let  j = 1;  j <= self.uiRoot.road.bigRoad[index].root.children.length; ++ j){//	for j=1,self.uiRoot.road.bigRoad[index].root.children.length do
			self.uiRoot.road.bigRoad[index][j] = []
			self.uiRoot.road.bigRoad[index][j].root =cc.find("Item_"+j, clone)
			self.uiRoot.road.bigRoad[index][j].img =cc.find("Item_"+j+"/Image", clone).getComponent(cc.Sprite)
			self.uiRoot.road.bigRoad[index][j].root.active =(true)
			self.uiRoot.road.bigRoad[index][j].img.active =(false)
		}
	},

	GameLayer:CreateBeadRoad(){
		let perfab =cc.find("Grid/Content", self.uiRoot.road.beadRoad.root)
		let clone = self:CreateClone(perfab)
		let index = self.uiRoot.road.beadRoad.length +1
		self.uiRoot.road.beadRoad[index] = []
		self.uiRoot.road.beadRoad[index].root = clone
		self.uiRoot.road.beadRoad[index].root.active =(true)
	for(let  j = 1;  j <= self.uiRoot.road.beadRoad[index].root.children.length; ++ j){//	for j=1,self.uiRoot.road.beadRoad[index].root.children.length do
			self.uiRoot.road.beadRoad[index][j] = []
			self.uiRoot.road.beadRoad[index][j].root =cc.find("Item_"+j, clone)
			self.uiRoot.road.beadRoad[index][j].img =cc.find("Item_"+j+"/Image", clone).getComponent(cc.Sprite)
			self.uiRoot.road.beadRoad[index][j].root.active =(true)
			self.uiRoot.road.beadRoad[index][j].img.active =(false)
		}
	},

	GameLayer:MoneyText(money){
		let moneyText = money / 100
		if(moneyText % 1 == 0 ){
			moneyText = math.ceil(moneyText)
		}
		return moneyText
	},

//- 设置限红
	GameLayer:updateGameInfo(min,max){
		self.uiRoot.gameInfo.min.text = "最小:"+self:MoneyText(min)
		self.uiRoot.gameInfo.max.text = "最大:"+self:MoneyText(max)
	 },

 //- 更新局数
	 GameLayer:updateRound(round){
		 self.uiRoot.gameInfo.round.text = round
	 },

//- 设置游戏说明
	GameLayer:updateDescription(){
	    let url = G.GameConfig.UpdateDomain + "Help/" + G.GetGamePName() + ".txt"
	    Download.DownloadFile(url, function (data){
	        let descriptionText = self.uiRoot.description.text
	        descriptionText.text = data
	        let width = descriptionText.width
	        let height = descriptionText.preferredHeight
	        descriptionText.sizeDelta = cc.v2(width,height)
	    }, null)
	},

//- 设置玩家信息
	GameLayer:updateUserInfo(bEnter, data){
	    if(bEnter && data.UserID==GameConfig.getUserID() ){
	        self.uiRoot.user.bg.active =(true)
	        self:updateUserCoin(data.Score)
			if(hhdz.ShowID == false ){
				self.uiRoot.user.name.text = "" + data.UserID
	} 
		else{
				self.uiRoot.user.name.text = "ID:" + data.UserID
			}
	        self.uiRoot.user.head:ResetSpriteByName(CS.AppDefine.HallNumber, tostring(data.FaceID))
	    }
	},

//- 设置玩家金币
	GameLayer:updateUserCoin(num){
	    if(hhdz.UserInfo ){
	        num = num || hhdz.UserInfo.Score
			hhdz.UserInfo.Score = num
		}
	    if(self.bLockUseCoin != null ){
			hhdz.bankerCoin = num
			self.uiRoot.user.coin.text = self:MoneyText(num)
		}
	},

//- 显示充值讯息
	GameLayer:updateCoinInsufficient(){
		if(hhdz.betlimitmoney != null && hhdz.bBetted != null ){
			let insufficient = hhdz.UserInfo.Score < hhdz.betlimitmoney * 100
			self.uiRoot.recharge.root.active =(insufficient)
		}
	},

//- 更新下注按钮的状态
	GameLayer:updateBetBtns(data){
		hhdz.betCount = data
	    self.uiRoot.betBtn.chip = []
		let prf = CS.AssetBundleManager.Instance:LoadGameObject(G.GetGamePName(), "PfChip")
	for(let      i = 1;      i <= data.length; ++     i){//    for i=1,data.length do
	    
	        let cfg = hhdz.dtBaseBet[i]
		    let cls = cc.instantiate(prf)
	        let bet = data[i]
			let tmp = i
			if(hhdz.chooseMoney == null){ hhdz.chooseMoney = bet*hhdz.dtBetRate }
		    if(cls ==null){ return }
	        cls.parent =(self.uiRoot.betBtn.scroll)
			cls.scale = cc.v3(1, 1, 1)
	
	        self.uiRoot.betBtn.chip[i] = []
	        self.uiRoot.betBtn.chip[i].root = cls
	        self.uiRoot.betBtn.chip[i].root.active =(true)
	        self.uiRoot.betBtn.chip[i].blink =cc.find("btn/blink", cls).getComponent(cc.Sprite)
	        self.uiRoot.betBtn.chip[i].btn =cc.find("btn", cls).getComponent(cc.Button)
	        self.uiRoot.betBtn.chip[i].bet =cc.find("bet", cls).getComponent(cc.Label)
					
			let buttomPicIndex = i
			if(i > 7 ){
				buttomPicIndex = 7
			}
	        GameG.SetImageSprite(cc.find("btn",cls).getComponent(cc.Sprite), G.GetGamePName(), "cast" + tostring(buttomPicIndex)+"_1", false)
		//CS.UISpriteManager.Instance:SetImageSprite(cls:Find("btn/disable"):GetComponent("Image"), G.GetGamePName(), "cast_btn_" .. tostring(buttomPicIndex), false)
	        self.uiRoot.betBtn.chip[i].bet.text = G.Tool.UserHelper.ToCash(bet*hhdz.dtBetRate)
	        self.uiRoot.betBtn.chip[i].btn.node.on('click',function(){
			//CS.UISpriteManager.Instance:SetImageSprite(self.uiRoot.betBtn.chip[hhdz.chooseBet].root:Find("btn"):GetComponent("Image"), G.GetGamePName(), "cast_btn_" .. tostring(hhdz.chooseBet), false)
	            hhdz.gameAudio:btnClick()
	            hhdz.gameLayer:setUserBet(bet, tmp)
	        })
	    }
	
	    self:setUserBet(data[1], 1)
	},

//- 设置下注倍数
	GameLayer:setUserBet(num, index){
	//----->需重新編譯程式碼    if(self.ahBetBlink ){ self.ahBetBlink:Kill() }
		hhdz.chooseBet = index		
		hhdz.chooseMoney = num*hhdz.dtBetRate
	
	for(let k in (self.uiRoot.betBtn.chip)){ 
	let v = self.uiRoot.betBtn.chip[k] 

	        v.blink.active =(num!=null && hhdz.dtBaseBet[k]==num)
	    }
	
	    if(num == null ){ return }
	
	    hhdz.dtUserBet = num
	    let obj = self.uiRoot.betBtn.chip[hhdz.GetBetIdx(num)].blink
	    let clr = obj.color
	    fmg.setAlpha(obj, 1)
	    obj.active =(true)
	
	for(let  j = 1;  j <= self.uiRoot.betBtn.chip.length; ++ j){//	for j=1,self.uiRoot.betBtn.chip.length do
			let obj = self.uiRoot.betBtn.chip[j].root
			
			if(index == j ){
				obj.scale = cc.v3(1, 1, 1) * 1.1
				obj.sizeDelta = cc.v2(124 * 1.05, 72)
	} 
		else{
				obj.scale = cc.v3(1, 1, 1)
				obj.sizeDelta = cc.v2(124, 72);
			}
			
	        obj.parent =(self.uiRoot.root)
	        obj.parent =(self.uiRoot.betBtn.scroll)		
		}
	
	//CS.UISpriteManager.Instance:SetImageSprite(self.uiRoot.betBtn.chip[index].root:Find("btn"):GetComponent("Image"), G.GetGamePName(), "cast" .. tostring(index).."_1", false)
//----->需重新編譯程式碼//    local sqs = CS.DG.Tweening.DOTween.Sequence()
//----->需重新編譯程式碼//    sqs:SetEase(CS.DG.Tweening.Ease.Linear):SetLoops(-1)
//    self.ahBetBlink = sqs
//----->需重新編譯程式碼//    sqs:Append(obj:DOColor(clr.r, clr.g, clr.b, 0),0.3)
//----->需重新編譯程式碼//    sqs:AppendInterval(0.4)
//----->需重新編譯程式碼//    sqs:Append(obj:DOColor(clr.r, clr.g, clr.b, 1),0.3)
	
	},

//- 下注倒计时
	GameLayer:beginBetTimer(tm){
		self:stopBetTimer()
	        self.uiRoot.countdown.root.active =(true)
			let remainingTime = tm //剩餘時間
			let alertSec = 3 	//開始警報時間
			let alertInterval =  1.1  //警報間隔
	//----->需重新編譯程式碼        let sequence = CS.DG.Tweening.DOTween.Sequence()
	        let red = cc.Color(1, 0, 0, 1)
	        self.uiRoot.countdown.countdownSequence = sequence
	//----->需重新編譯程式碼		sequence:SetLoops(-1,CS.DG.Tweening.LoopType.Restart)
	//----->需重新編譯程式碼		sequence:OnUpdate(function(){
	//----->需重新編譯程式碼			remainingTime = remainingTime - CS.UnityEngine.Time.deltaTime
	//----->需重新編譯程式碼			self.uiRoot.countdown.circle.fillAmount	= remainingTime / tm
	//----->需重新編譯程式碼			self.uiRoot.countdown.time.text = math.ceil(remainingTime)
	//----->需重新編譯程式碼			if(remainingTime <= alertSec ){ 
	//----->需重新編譯程式碼				if(alertInterval > 1 ){
//----->需重新編譯程式碼					//G.Tool.Sound.PlayGameSound("countdown")
	//----->需重新編譯程式碼					alertInterval = 0
	//----->需重新編譯程式碼					self.uiRoot.countdown.frame.color = red
	//----->需重新編譯程式碼					self.uiRoot.countdown.circle.color = red
	//----->需重新編譯程式碼					self.uiRoot.countdown.time.color = red
	//----->需重新編譯程式碼					self.uiRoot.countdown.time.scale = cc.v3(1.4,1.4,1.4)
	//----->需重新編譯程式碼					self.uiRoot.countdown.time:DOScale(2.3,0.1):SetLoops(2,CS.DG.Tweening.LoopType.Yoyo)
	//----->需重新編譯程式碼				}
	//----->需重新編譯程式碼				alertInterval = alertInterval + CS.UnityEngine.Time.deltaTime
	//----->需重新編譯程式碼			}
	//----->需重新編譯程式碼			if(remainingTime <= 0 ){ 
	//----->需重新編譯程式碼                self:stopBetTimer()
	//----->需重新編譯程式碼			}
	//----->需重新編譯程式碼        })
	/*
    self:stopBetTimer()
    self.uiRoot.time.betTip.gameObject:SetActive(true)
    self.uiRoot.time.count.text = string.format("%d",tm)
    fmg.hLuaGame:StartCountDown(tm, self.dtBetTimer, function(dt)
		hhdz.gameLayer.uiRoot.time.count.text = string.format("%d", dt)
		local num = hhdz.gameLayer.uiRoot.timer.effect
        if dt == 3 then 
			//hhdz.gameAudio:turnStep(2)
			num.gameObject:SetActive(true)
			hhdz.gameAudio:turnStep(7)
		end
        if dt <= 3 and dt > 0 then
			dtime = math.floor(dt+0.05)
			CS.UISpriteManager.Instance:SetImageSprite(num, hhdz.gameName, "overTimer"..dtime, true)

//----->需重新編譯程式碼			local sqs = CS.DG.Tweening.DOTween.Sequence()
//----->需重新編譯程式碼			sqs:Append(num.transform:DOScale(CS.UnityEngine.Vector3(1.5, 1.5, 1), 0.2))
//----->需重新編譯程式碼			sqs:Join(num:DOColor(CS.UnityEngine.Color(1, 1, 1, 1), 0.2))
//----->需重新編譯程式碼			sqs:Append(num.transform:DOScale(CS.UnityEngine.Vector3(0.5, 0.5, 1), 0.8))
//----->需重新編譯程式碼			sqs:Join(num:DOColor(CS.UnityEngine.Color(1, 1, 1, 0), 0.8))			
		end		
		
        if dt <= 0 then
            hhdz.gameLayer:stopBetTimer()
			num.gameObject:SetActive(false)
			hhdz.gameLayer.uiRoot.time.betTip.gameObject:SetActive(false)
			
			self.uiRoot.gameStop.root.gameObject:SetActive(true)
			self.uiRoot.gameStop.ps:Play()			
        end
	end, 1.0) 
	*/
	},

//- 停止下注倒计时
	GameLayer:stopBetTimer(){
		let white = cc.Color(1, 1, 1, 1)
	    if(self.uiRoot.countdown.countdownSequence != null ){
	//----->需重新編譯程式碼        self.uiRoot.countdown.countdownSequence:Kill()
	        self.uiRoot.countdown.countdownSequence = null
	        self.uiRoot.countdown.frame.color   = white
	        self.uiRoot.countdown.circle.color  = white
	        self.uiRoot.countdown.time.color    = white
	        self.uiRoot.countdown.time.scale = cc.v3(1,1,1)
	    }
		self.uiRoot.countdown.root.active =(false)
	/*
    if self.dtBetTimer then
        fmg.hLuaGame:RemoveCountDown(self.dtBetTimer) 
        self.dtBetTimer = nil		
        self.uiRoot.time.betTip.gameObject:SetActive(false)
	end
	*/
		
	},

//- 显示开始
	GameLayer:animStart(){
	/*
	self.uiRoot.gameStart.root.gameObject:SetActive(true)
	self.uiRoot.gameStart.ps:Play()	
	*/
		self:updateCoinInsufficient()
		let ani = self.uiRoot.gameStart.betAni
	    ani.setAnimation(0, "startbet", false)
	    ani.active =(true)
	    fmg.delayFunc(function(){
	        ani.active =(false)
		}, 2.4, [])
		
		hhdz.compare:playCard()
	},

//- 停止下注
	GameLayer:animEndBet(){
	    let ani = self.uiRoot.gameStart.betAni
	    ani.setAnimation(0, "endbet", false)
	    ani.active =(true)
	    fmg.delayFunc(function(){
	        ani.active =(false)
	    }, 2.4, [])
	},

//- 添加注
	GameLayer:animAddCast(data, noAnim, call, bOther){
	    
	    let max = 60
	    let allNum = 0
	for(let _ in (data)){ 
	let v = data[_] 

	        let vec = []
	        let idx, num = v.BetType, v.Count
	for(let          i = hhdz.dtBaseBet.length;          i <= 1; ++         i){//        for i=hhdz.dtBaseBet.length,1,-1 do
	            vec[i] = math.floor(num/hhdz.dtBaseBet[i])
	            num = num%hhdz.dtBaseBet[i]
	        }
	
	for(let          i = 1;          i <= vec.length; ++         i){//        for i=1,vec.length do
            // 获取筹码
	for(let              j = 1;              j <= vec[i]; ++             j){//            for j=1,vec[i] do
					let tmp = null
	                if(.length(self.uiCast[idx]) >= max ){
	                    self.uiCastIdx[idx] = math.fmod(self.uiCastIdx[idx]+1, max)+1
	                    tmp = self.uiCast[idx][self.uiCastIdx[idx]]
						SetCastData(tmp, i)
	} 
                else{
	                    tmp = hhdz.poolCast:get([cfg = hhdz.dtBaseBet[i]])
	                    self.uiCast[idx][.length(self.uiCast[idx])+1] = tmp
	                }
	
                // 执行动画
	                if(noAnim ){
	                    tmp.position = over
	                    if(adt[1] ){ adt[1]() }
	} 
                else{
                    // 初始化动画位置
	                    let beg, over
	                    if(bOther ){
	                        let rt = idx == 1 && self.dtBetRectOther[1] || self.dtBetRectOther[2]
	                        rt = idx == 2 && self.dtBetRectOther[math.random(0,3)%2+1] || rt
	                        beg = hhdz.gameLayer.uiRoot.betUser.position
							over = fmg.randInRect(self.dtBetRect[idx])
	} 
                    else{
	                        let len = 5
	                        let list = self.uiRoot.betBtn.chip
	                        let pos = -self.uiRoot.betBtn.scroll.position.x
	                        if(list.length>5 && (pos>self.dtBetBtnOfst.x*(i-1) || pos+self.dtBetBtnOfst.x*(len+1)<self.dtBetBtnOfst.x*i) ){
	                            let ofstx = 0
	                            if(i+(len-1) <= list.length ){
	                                ofstx = list[1].btn.position.x - list[i].btn.position.x
	} 
                            else if i-(len-1) >= 0 {

	                                ofstx = -self.dtBetBtnOfst.x*(i-5)
	                            }
	                            self.uiRoot.betBtn.scroll.position = fmg.v3(ofstx, self.uiRoot.betBtn.scroll.position.y, 0)
	                        }
	
	                        beg = fmg.convertPosN2N(self.uiRoot.betBtn.chip[i].btn, self.uiRoot.betNum.betCast, fmg.v3(0,0,0))
	                        over = fmg.randInRect(self.dtBetRect[idx])
	                    }
	
                    // 开始动画
	//----->需重新編譯程式碼                    if(self.hCastAnim[tmp] ){ self.hCastAnim[tmp]:Kill() }
	                    tmp.position = beg
	                    tmp.active =(false)
	//----->需重新編譯程式碼                    let sqs = CS.DG.Tweening.DOTween.Sequence()
	//----->需重新編譯程式碼                    sqs:SetEase(CS.DG.Tweening.Ease.OutSine)
	                    self.hCastAnim[tmp] = sqs
	//----->需重新編譯程式碼                    sqs:AppendInterval(math.min(allNum * 0.2, 1))
	//----->需重新編譯程式碼					sqs.call( function(){
	//----->需重新編譯程式碼                        tmp.active =(true)
	//----->需重新編譯程式碼						tmp:SetSiblingIndex(max*11)
	//----->需重新編譯程式碼					})					
	//----->需重新編譯程式碼                    sqs:Append(tmp:DOLocalMove(over, 0.5))
	                    fmg.argFuncAnim(sqs,function(adt){
	                        if(adt[1] ){ adt[1]() }
	                        hhdz.gameLayer.hCastAnim[adt[2]] = null
	                    },[call, tmp])
	                    allNum = allNum + 1
	                }
	            }
	        }
	    }
	},

//- 清除注
	GameLayer:resetBetCast(idx, num){
	    let castmax = 50
	    let coinmax = hhdz.dtBaseBet[hhdz.dtBaseBet]*castmax.length
	
    // 获取筹码数组
	    let vec, cast = [], 0
	    num = math.min(num, coinmax)
	for(let      i = hhdz.dtBaseBet.length;      i <= 1; ++     i){//    for i=hhdz.dtBaseBet.length,1,-1 do
	        vec[i] = math.floor(num/hhdz.dtBaseBet[i])
	        num = num%hhdz.dtBaseBet[i]
	    }
	
    // 按数量改变筹码
	for(let      j = 1;      j <= math.min(vec.length; ++     j){//    for j=1,math.min(vec.length, castmax) do
	for(let          i = 1;          i <= vec[j]; ++         i){//        for i=1,vec[j] do
	            cast = cast + 1
	            if(cast<=castmax ){			
                // 筹码不足，手动添加
	                self.uiCast[idx] = self.uiCast[idx] || []
	                if (.length(self.uiCast[idx])) < cast {
	                    tmp = hhdz.poolCast:get([cfg = hhdz.dtBaseBet[j]])
	                    self.uiCast[idx][.length(self.uiCast[idx])+1] = tmp
	                }
	
	                let obj = self.uiCast[idx][cast]
	                obj.position = fmg.randInRect(self.dtBetRect[idx])
	            }
			// 修正沒有重新指定籌碼的問題
				SetCastData(self.uiCast[idx][cast], j)
	        }
	    }
	
    // 删除多余的筹码
	for(let      i = cast+1;      i <= (self.uiCast[idx]).length; ++     i){//    for i=cast+1,.length(self.uiCast[idx]) do
	        hhdz.poolCast:remove(self.uiCast[idx][i])
        //fmg.Destroy(self.uiCast[idx][i])
	        self.uiCast[idx][i] = null
	    }
	},

//- 更新桌面底注
	GameLayer:updateAllBetNum(idx, num){
//print(idx)
//print(hhdz.dtRefBetType[idx])
//print( self.uiRoot.betNum[hhdz.dtRefBetType[idx].name])
	    self.uiRoot.betNum[hhdz.dtRefBetType[idx].name].parent.active =(idx && (num && num>0))
	    if(idx && num ){
	        self.uiRoot.betNum[hhdz.dtRefBetType[idx].name].text = G.Tool.UserHelper.ToCash(num)
	        if(num == 0 ){
	for(let _ in (self.uiCast[idx])){ 
	let v = self.uiCast[idx][_] 

	                hhdz.poolCast:remove(v)
	            }
	            self.uiCast[idx] = []
	        }
	    }
	},

//- 更新庄家信息
	GameLayer:updateBanker(data){
	    self:updateBetBtnState()
	},

//- 更新下注功能按钮的状态
	GameLayer:updateBetBtnState(){
	    let score = hhdz.UserInfo.Score
	    let recode = hhdz.gameControl:coluBetCoin(hhdz.dtBetRecodeOrg)*hhdz.dtBetRate
	    let allowBet = not hhdz.bIBanker && hhdz.dtBetState==0 //and score>=hhdz.dtUserBet
			
	    if(self.uiRoot.betBtn.chip ){
	for(let          i = 1;          i <= hhdz.dtBaseBet.length; ++         i){//        for i=1,hhdz.dtBaseBet.length do
				let sufficient = score >= hhdz.dtBaseBet[i]*hhdz.dtBetRate
				self.uiRoot.betBtn.chip[i].btn.interactable = allowBet && sufficient
	            if(sufficient != null && hhdz.chooseBet >= i ){
	                let index = i-1 <= 0 && 1 || i-1
	                hhdz.gameLayer:setUserBet(hhdz.betCount[index], index)
	            }
			}
	    }
	
    //self.uiRoot.betBtn.chart.interactable = true
	    
    /*self.uiRoot.betBtn.auto.interactable = allowBet
    self.uiRoot.betBtn.auto.gameObject:SetActive(not hhdz.bAutoBet)*/
	    self.uiRoot.betBtn.autoNo.interactable = allowBet
	    self.uiRoot.betBtn.auto.interactable = allowBet
	    self.uiRoot.betBtn.autoNo.active =(hhdz.bAutoBet)
	
	// 上莊中還是能按上莊列表按鈕
	    self.uiRoot.betBtn.betLong.interactable = allowBet
	    self.uiRoot.betBtn.betHe.interactable = allowBet
	    self.uiRoot.betBtn.betHu.interactable = allowBet
	},

//- 自己分数增加向上飘分数动画
	GameLayer:showAddCoin(num, tm, delay, score){
    /*
	if num == 0 then
		for _,v in pairs(hhdz.dtBetRecode) do
			num = num + v.Count * hhdz.dtBetRate
		end
	end
	*///
		
		if(num == 0 ){
			return
		}	
			
	    let obj = null
		if(num < 0 ){
			obj = self.uiRoot.user.subcoin
	} 
	else{
			obj = self.uiRoot.user.addcoin
		}
	
	//obj.text = (num>0 and "+" or "")..G.Tool.UserHelper.ToCashDetail(num)
		obj.text = (num>0 && "+" || "")+self:MoneyText(num)
	    let pos = self.uiRoot.user.coin.position + fmg.v3(0, 30, 0)
	    obj.position = pos
		
	//----->需重新編譯程式碼	let sqs = CS.DG.Tweening.DOTween.Sequence()
	//----->需重新編譯程式碼	sqs:AppendInterval(delay)
	//----->需重新編譯程式碼	sqs.call( function(){
	//----->需重新編譯程式碼		obj.active =(true)
	//----->需重新編譯程式碼		if(num > 0 ){
	//----->需重新編譯程式碼			self.uiRoot.user.coin.text = self:MoneyText(score)
	//----->需重新編譯程式碼		}
	//----->需重新編譯程式碼	})
	//----->需重新編譯程式碼	sqs:Append(obj:DOLocalMove(fmg.v3(pos.x, pos.y+100, pos.z), tm))
	//----->需重新編譯程式碼	sqs.call( function(){	
	//----->需重新編譯程式碼		obj.active =(false)
	//----->需重新編譯程式碼	})
	},

	SetCastData(obj, i){
		GameG.SetImageSprite(cc.find("btn",obj).getComponent(cc.Sprite), G.GetGamePName(), hhdz.GetBetBtnImg(hhdz.dtBaseBet[i])+"_1", false)
		obj:Find("bet").getComponent(cc.Label).text = G.,objTool.UserHelper.ToCash(hhdz.dtBaseBet[i]*hhdz.dtBetRate)
	},

// 移除沒贏區域的籌碼
	GameLayer:RemoveLoseArea(dtRstWin){
		let IsPlayAudio = false
	
	for(let  j = 1;  j <= 3; ++ j){//	for j=1,3 do
			if(j != dtRstWin ){
				if(.length(self.uiCast[j]) > 0 ){
					IsPlayAudio = true
					
	for(let  i = 1;  i <= (self.uiCast[j]).length; ++ i){//				for i=1,.length(self.uiCast[j]) do
						let obj = self.uiCast[j][i]				
	//----->需重新編譯程式碼					let sqs = CS.DG.Tweening.DOTween.Sequence()
	//----->需重新編譯程式碼					sqs:AppendInterval(math.random() * 0.3)
	//----->需重新編譯程式碼					sqs.call( function(){ 
	//----->需重新編譯程式碼						obj.active =(false)
	//----->需重新編譯程式碼					})
					}
				}
			}
		}
		
		if(IsPlayAudio == true ){
			hhdz.gameAudio:outCoin()	
		}
		
	},

// 播放獲勝區域動畫
	GameLayer:PlayWinAnimation(dtRstWin, returnMoney){
	// 取得玩家下注金額
		let userBetRecode = 0
		if(hhdz.dtBetRecode != null ){
			if(hhdz.dtBetRecode[dtRstWin] != null ){
				userBetRecode = hhdz.dtBetRecode[dtRstWin].Count * hhdz.dtBetRate
			}
		}
	// 其他玩家下注金額
		let otherBetRecode = 0
		if(hhdz.BroadBet[dtRstWin] != null ){
			otherBetRecode = hhdz.BroadBet[dtRstWin].Money - userBetRecode
		}
	
	//print("@@@@@@@@@@@@@@@@@ 玩家下注金額 " .. tostring(userBetRecode) )
	//print("@@@@@@@@@@@@@@@@@ 其他玩家下注金額 " .. tostring(otherBetRecode) )
		
	// 該位置有下注
		if(userBetRecode > 0 || otherBetRecode > 0 ){
			let newCountData = null
			
		// 補錢
			if(returnMoney == false ){
				fmg.delayFunc(function(adt){ 
					hhdz.gameAudio:addCoin()
					newCountData = hhdz.gameLayer:AddWinCast(userBetRecode, 4, dtRstWin)
					hhdz.gameLayer:AddWinCast(otherBetRecode, dtRstWin, dtRstWin)
				}, 0.5, [])
			// G.Tool.TableHelper.Print(self.uiCast)
	} 
		else{
				newCountData = hhdz.gameLayer:CalCast(userBetRecode, dtRstWin)
			}
			
		// 獲勝飛錢
			fmg.delayFunc(function(adt){ 
				hhdz.gameAudio:outCoin()
			// 玩家有下注
				if(userBetRecode > 0 ){	
					let acc = hhdz.gameLayer:resultFlyUserCast(newCountData, otherBetRecode, self.uiCast[4], dtRstWin, returnMoney)
				// 其他玩家有下注
					if(otherBetRecode > 0 ){
						hhdz.gameLayer:resultFlyOtherCast(acc, dtRstWin)
					}
			// 玩家沒下住
	} 
			else{
					hhdz.gameLayer:resultFlyOtherCast(1, dtRstWin)
				}
			}, 1.0, [])
		}
	},

	GameLayer:CalCast(money, dtRstWin){
		if(money == 0 ){
			return
		}
		
		let CheckBet = require("CheckBet")
		let Magnification = [ 1, 8, 1 ]
		let BetData, CountData = CheckBet.Init(money * Magnification[dtRstWin], hhdz.dtBaseBet, hhdz.dtBetRate)
	
	//print("################################### ")
	//G.Tool.TableHelper.Print(money)
	//G.Tool.TableHelper.Print(BetData)
	//G.Tool.TableHelper.Print(CountData)
		
	// 將計算結果轉換回一般順序
		let newCountData = []
	for(let  i  =  1;  i  <=  BetData.length; ++ i ){//	for i = 1, BetData.length do
			t1, t2 = math.modf(BetData[i]/hhdz.dtBetRate)
	for(let  j  =  1;  j  <=  hhdz.dtBaseBet.length; ++ j ){//		for j = 1, hhdz.dtBaseBet.length do
				if(t1 == hhdz.dtBaseBet[j] ){				
					newCountData[j] = CountData[i]
				}
			}
		}
		
		return newCountData
	},

// 增加贏區域籌碼數
	GameLayer:AddWinCast(money, poolIdx, dtRstWin){
		if(money == 0 ){
			return
		}
		
		let CheckBet = require("CheckBet")
		let Magnification = [ 1, 8, 1 ]
		let BetData, CountData = CheckBet.Init(money * Magnification[dtRstWin], hhdz.dtBaseBet, hhdz.dtBetRate)
	
	//print("################################### ")
	//G.Tool.TableHelper.Print(money)
	//G.Tool.TableHelper.Print(BetData)
	//G.Tool.TableHelper.Print(CountData)
		
	// 將計算結果轉換回一般順序
		let newCountData = []
	for(let  i  =  1;  i  <=  BetData.length; ++ i ){//	for i = 1, BetData.length do
			t1, t2 = math.modf(BetData[i]/hhdz.dtBetRate)
	for(let  j  =  1;  j  <=  hhdz.dtBaseBet.length; ++ j ){//		for j = 1, hhdz.dtBaseBet.length do
				if(t1 == hhdz.dtBaseBet[j] ){				
					newCountData[j] = CountData[i]
				}
			}
		}
	
	//print("金額" .. tostring(money))
	//G.Tool.TableHelper.Print(hhdz.dtBaseBet)
	//G.Tool.TableHelper.Print(newCountData)
		
		return newCountData
	},

	GameLayer:FlyUserCast(obj){
	//----->需重新編譯程式碼	let sqs = CS.DG.Tweening.DOTween.Sequence()
	//----->需重新編譯程式碼	sqs:AppendInterval(math.random() * 0.2)
	//----->需重新編譯程式碼	sqs:Append(obj:DOMove(hhdz.gameLayer.uiRoot.user.head.position, 0.5))
	//----->需重新編譯程式碼	sqs.call( function(){
	//----->需重新編譯程式碼		obj.active =(false)
	//----->需重新編譯程式碼	})
	},

// 贏區域的籌碼飛向玩家
	GameLayer:resultFlyUserCast(newCountData, otherBetRecode, usrpool, dtRstWin, returnMoney){
	// 莊家賠的籌碼
		if(returnMoney == false ){
			
		}
		
	// 其他玩家有下注，一部分飛向玩家，其他之後飛向其他玩家
		acc = 1
		if(otherBetRecode != 0 ){
	for(let  i  =  1;  i  <=  newCountData.length; ++ i ){//		for i = 1, newCountData.length do
	for(let  j  =  1;  j  <=  newCountData[i]; ++ j ){//			for j = 1, newCountData[i] do
					let obj = self.uiCast[dtRstWin][acc]
					SetCastData(obj, i)
					hhdz.gameLayer:FlyUserCast(obj)
					
					acc = acc + 1
				}
			}
	// 其他玩家沒下住，所有的錢飛向玩家
	} 
	else{
	for(let  i  =  1;  i  <=  self.uiCast[dtRstWin].length; ++ i ){//		for i = 1, self.uiCast[dtRstWin].length do
				let obj = self.uiCast[dtRstWin][i]
				hhdz.gameLayer:FlyUserCast(obj)
			}
		}
		return acc
	},

// 贏區域的籌碼飛向其他玩家
	GameLayer:resultFlyOtherCast(beginIdx, dtRstWin){
		if(beginIdx == 0 ){
			beginIdx = 1
		}
	
	for(let  i = beginIdx;  i <=  (self.uiCast[dtRstWin]).length; ++ i){//	for i=beginIdx, .length(self.uiCast[dtRstWin]) do
			let obj = self.uiCast[dtRstWin][i]
			let endPos = hhdz.gameLayer.uiRoot.betUser.position
	
	//----->需重新編譯程式碼		let sqs = CS.DG.Tweening.DOTween.Sequence()
	//----->需重新編譯程式碼		sqs:AppendInterval(math.random() * 0.2)
	//----->需重新編譯程式碼		sqs:Append(obj:DOLocalMove(endPos, 1))
		}	
	},

	GameLayer:GameStart(){
		self.uiRoot.userStar.SetActive(false)
	for(let k in (self.uiRoot.userList)){ 
	let v = self.uiRoot.userList[k] 
 v.GameStart() }
	for(let k in (self.uiRoot.betList)){ 
	let v = self.uiRoot.betList[k] 
 v.GameStart() }
		
	//hhdz.gameLayer:animGameStart()
	},

	GameLayer:GameEnd(){
		self.uiRoot.userStar.SetActive(false)
	for(let k in (self.uiRoot.userList)){ 
	let v = self.uiRoot.userList[k] 
 v.GameEnd() }
	for(let k in (self.uiRoot.betList)){ 
	let v = self.uiRoot.betList[k] 
 v.GameEnd() }
	    self.LuckyStarIsPlaying=[0,0,0]
	},

	GameLayer:SetUserList(data){
	for(let k in (data.RichestList)){ 
	let v = data.RichestList[k] 

	for(let k2 in (self.uiRoot.userList)){ 
	let v2 = self.uiRoot.userList[k2] 

				if(v.UserID != 0 && k2 == v.Ranking ){ 
					v2.SetActive(true)
					v2.SetHead(v.UserFaceID)
					v2.SetUserId(v.UserID)
					v2.SetScore(v.Money)
				}
			}
		}
	},

	GameLayer:SetUserStar(data){
		if(data == null ){ return }
		self.uiRoot.userStar.SetActive(true)
		self.uiRoot.userStar.SetHead(data.UserFaceID)
		self.uiRoot.userStar.SetUserId(data.UserID)
	},

//回收下注区金额
	GameLayer:ShowWinChip(siteNo){
		self.uiRoot.betList[siteNo].CloneWinChip(siteNo)
	//----->需重新編譯程式碼    CS.DG.Tweening.DOTween.Sequence().delay(0.7) .call(function(){
//----->需重新編譯程式碼		//self.uiRoot.betList[siteNo].ChangeChipUserId(hhdz.winList,true)
	//----->需重新編譯程式碼		self.uiRoot.betList[siteNo].ShowWinChip(self.uiRoot.user.head.position,GameConfig.getUserID())
	//----->需重新編譯程式碼for(let k in (self.uiRoot.userList)){ 
//----->需重新編譯程式碼	let v = self.uiRoot.userList[k] 
//----->需重新編譯程式碼
//----->需重新編譯程式碼			//self.uiRoot.betList[siteNo].ShowWinChip(v.GetPosition(),v.GetUserId())
	//----->需重新編譯程式碼			self.uiRoot.betList[siteNo].ShowWinChip(null,v.GetUserId())
	//----->需重新編譯程式碼		}
//----->需重新編譯程式碼		//self.uiRoot.betList[siteNo].ShowWinChip(self.uiRoot.userStar.GetPosition(),self.uiRoot.userStar.GetUserId())
	//----->需重新編譯程式碼		self.uiRoot.betList[siteNo].ShowWinChip(null,null)
	//----->需重新編譯程式碼	})
	},

//回收下注区金额
	GameLayer:ShowLoseChip(siteNo){
	//self.uiRoot.betList[siteNo].ChangeChipUserId(hhdz.winList,false)
	//self.uiRoot.betList[siteNo].ShowWinChip(self.uiRoot.user.head.transform.position,G.User.GetCurrentUserID())
		self.uiRoot.betList[siteNo].ShowWinChip(self.uiRoot.zhuang.position,GameConfig.getUserID())
	for(let k in (self.uiRoot.userList)){ 
	let v = self.uiRoot.userList[k] 

		//self.uiRoot.betList[siteNo].ShowWinChip(v.GetPosition(),v.GetUserId())
			self.uiRoot.betList[siteNo].ShowWinChip(self.uiRoot.zhuang.position, v.GetUserId())
		}
	//self.uiRoot.betList[siteNo].ShowWinChip(self.uiRoot.userStar.GetPosition(),self.uiRoot.userStar.GetUserId())
		self.uiRoot.betList[siteNo].ShowWinChip(self.uiRoot.zhuang.position, null)
	},

	GameLayer:ShowClearBetChip(userId){
		let targetPos = null
	for(let k in (self.uiRoot.betList)){ 
	let v = self.uiRoot.betList[k] 

	for(let kuser in (self.uiRoot.userList)){ 
	let vuser = self.uiRoot.userList[kuser] 

				if(vuser.GetUserId() == userId ){
					targetPos = vuser.GetPosition()
				}
			}
			if(self.uiRoot.userStar.GetUserId() == userId ){
				targetPos = self.uiRoot.userStar.GetPosition()
			}
			
			if(GameConfig.getUserID() == userId ){
				targetPos = self.uiRoot.user.head.position
				self:ShowBroadCastBetMy(k,0)
			}
		
			v.ShowClearBetChip(userId,targetPos)
		}
	},

	GameLayer:ClearBetRetError(siteNo,num,userId){
		self.uiRoot.betList[siteNo].ClearBetRetError(num,userId)
	},

	GameLayer:ShowBroadCastBetAll(siteNo,num){
		self.uiRoot.betList[siteNo].ShowBroadCastBetAll(num)
	},

	GameLayer:ShowBroadCastBetMy(siteNo,num){
		self.uiRoot.betList[siteNo].ShowBroadCastBetMy(num)
	},

	GameLayer:ShowCastBetChip(siteNo,num,index,userId){
		let targetPos = null
		let dir = 10
	//自己
		if(targetPos == null ){
			if(GameConfig.getUserID() == userId ){
				targetPos = self.uiRoot.betBtn.chip[hhdz.chooseBet].root.position
			}
		}
	/*
	//富豪榜
	if targetPos == nil then
		for k,v in pairs(self.uiRoot.userList) do
			if v.GetUserId() == userId then
				if k <= 4 then v.AnimShake(dir)
				else v.AnimShake(dir * -1) end
				targetPos = v.GetPosition()
			end
		end
	end
	//幸运星
	if targetPos == nil then
		if self.uiRoot.userStar.GetUserId() == userId then
			self.uiRoot.userStar.AnimShake(dir * -1)
			targetPos = self.uiRoot.userStar.GetPosition()
		end
	end
	*/
	//其他
		if(targetPos == null ){
	//----->需重新編譯程式碼		let sequence = CS.DG.Tweening.DOTween.Sequence()
	//----->需重新編譯程式碼		sequence:Append(self.uiRoot.betUser:DOMove(cc.v3(betUserStartPos.x - dir,betUserStartPos.y + dir,0), 0.1))
	//----->需重新編譯程式碼		sequence:Append(self.uiRoot.betUser:DOMove(cc.v3(betUserStartPos.x,betUserStartPos.y,0), 0.15))
	//----->需重新編譯程式碼		sequence.call( function(){ self.uiRoot.betUser.position = betUserStartPos })
		}
		
	//self.uiRoot.betList[siteNo].ShowCastBetChip(num,index,hhdz.dtBetState == 0,targetPos,userId)
		self.uiRoot.betList[siteNo].ShowCastBetChip(num,siteNo,index,true,targetPos,userId)
		
		
	},

	GameLayer:ShowLuckyStar(siteNo,show){
		if(show ){
	    
	       if(self.LuckyStarIsPlaying[siteNo]==1) { return }
	       self.LuckyStarIsPlaying[siteNo]=1;
		   self.uiRoot.betList[siteNo].ShowLuckyStar()
	} 
	else{
	    
	       self.LuckyStarIsPlaying[siteNo]=0;
		   self.uiRoot.betList[siteNo].StopLuckyStar()
		}
	},

	GameLayer:ShowResultWin(data){
		
	},

	GameLayer:ShowResultPoker(data){
	//----->需重新編譯程式碼	let sequence = CS.DG.Tweening.DOTween.Sequence()
		
		let result = data.Win
		let cardType = 0
		if(result == 1 ){
			cardType = hhdz.compare:GetCardType(data.HungZuHe)
	} 
	else if( result == 2 ){

			cardType = hhdz.compare:GetCardType(data.HeiZuHe)
		}
	for(let k in (self.uiRoot.betList)){ 
	let v = self.uiRoot.betList[k] 

			if(k == 3 && cardType > 2 ){
				v.ShowBlinkWin(6)
	} 
		else if( k == result ){

				v.ShowBlinkWin(6)
			}
		}
	},

	GameLayer:ShowResultWin(data){
		self.bLockUseCoin = true
		hhdz.winList = []
	for(let k in (data.StageUerInfo)){ 
	let v = data.StageUerInfo[k] 

			if(v.Win > 0 ){
				hhdz.winList[hhdz.winList.length +1] = v.UserID
			}
		}
		if(data.SelfWin > 0 ){ hhdz.winList[hhdz.winList.length +1] = GameConfig.getUserID() }
		if(data.ZhuangWin > 0 ){ hhdz.winList[hhdz.winList.length +1] = 1 }
		
		let timer = 0.85
	//----->需重新編譯程式碼	let sequence = CS.DG.Tweening.DOTween.Sequence()
		
		let result = hhdz.resultPoker.Win
		let cardType = null
		if(result == 1 ){
			cardType = hhdz.compare:GetCardType(hhdz.resultPoker.HungZuHe)
	} 
	else if( result == 2 ){

			cardType = hhdz.compare:GetCardType(hhdz.resultPoker.HeiZuHe)
		}
	//----->需重新編譯程式碼	sequence:AppendInterval(timer)
	//----->需重新編譯程式碼	sequence.call(function(){ 
	//----->需重新編譯程式碼for(let k in (self.uiRoot.betList)){ 
//----->需重新編譯程式碼	let v = self.uiRoot.betList[k] 
//----->需重新編譯程式碼
	//----->需重新編譯程式碼			if(k == 3 && cardType > 2 ){
	//----->需重新編譯程式碼				self:ShowWinChip(k)
	//----->需重新編譯程式碼} 
//----->需重新編譯程式碼			else if( k == result ){
//----->需重新編譯程式碼
	//----->需重新編譯程式碼				self:ShowWinChip(k)
	//----->需重新編譯程式碼} 
//----->需重新編譯程式碼			else{
	//----->需重新編譯程式碼				self:ShowLoseChip(k)
	//----->需重新編譯程式碼			}
	//----->需重新編譯程式碼		}
	//----->需重新編譯程式碼	})
		
	//----->需重新編譯程式碼	sequence:AppendInterval(timer)
	//----->需重新編譯程式碼	sequence.call(function(){ 
	//----->需重新編譯程式碼		self:ShowResultScore(data) 
	//----->需重新編譯程式碼		self.bLockUseCoin = false
	//----->需重新編譯程式碼	})
		
	},

	GameLayer:ShowResultScore(data){
	for(let k1 in (data.StageUerInfo)){ 
	let v1 = data.StageUerInfo[k1] 

			let showing = false
			if(GameConfig.getUserID() == v1.UserID ){
				showing = true
			}
			
			if(showing == false ){
	for(let k2 in (self.uiRoot.userList)){ 
	let v2 = self.uiRoot.userList[k2] 

					if(v2.GetUserId() == v1.UserID ){
						v2.AnimAddCoin(v1.Win)
						showing = true
					}
				}
			}
			
			if(showing == false ){
				if(self.uiRoot.userStar.GetUserId() == v1.UserID ){
					self.uiRoot.userStar.AnimAddCoin(v1.Win)
				}
			}
		}
	},

//- 开始赢家闪烁
	GameLayer:ShowBlinkWin(idx, tm){
	   self.uiRoot.betList[idx].ShowBlinkWin(tm)
	},

	GameLayer:StopBlinkWin(idx){
	    self.uiRoot.betList[idx].StopBlinkWin()
	},


};

module.exports = GameLayer
