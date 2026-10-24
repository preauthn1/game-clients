var G = require( "Global")
var GameG = require("GameGlobal")
var GameLayer = require("GameLayer")
var GameInfo = require("GameInfo")
var GameManager = require("GameManager")
var FileManager = require("FileManager")
var GameConfig = require("GameConfig")

function UIMain(root) {
	let action 				= cc.find("Action",root)
	let abandonButton 		= cc.find("Action/AbandonButton",root).getComponent(cc.Button)
	let doubleButton 		= cc.find("Action/DoubleButton",root).getComponent(cc.Button)

	let countdown 			= cc.find("Countdown",root)
	let countdownTxt 		= cc.find("Countdown/Text",root).getComponent("TextControl")
	
	let amplificationCardButton = cc.find("AmplificationCardButton",root).getComponent(cc.Button)
	let amplificationPattern 	= cc.find("PatternImage",amplificationCardButton.node).getComponent(cc.Sprite)
	let amplificationCard 		= []
	for(let i = 1;  i <= 5; ++i){
		amplificationCard[i-1] = cc.find("AmplificationCard"+i,amplificationCardButton.node).getComponent(cc.Sprite)
	}

	let message 			= cc.find("Message",root)
	let startBetSkeleton	= cc.find("StartBetSkeleton",root).getComponent(sp.Skeleton)
	let stopBetSkeleton		= cc.find("StopBetSkeleton",root).getComponent(sp.Skeleton)
	let equarSkeleton		= cc.find("EquarSkeleton",root).getComponent(sp.Skeleton)
	let winSkeleton			= cc.find("WinSkeleton",root).getComponent(sp.Skeleton)
	let loseSkeleton		= cc.find("LoseSkeleton",root).getComponent(sp.Skeleton)
	let getJackpotSkeleton	= cc.find("GetJackpotSkeleton",root).getComponent(sp.Skeleton)
	let getJackpotText = []
	for(let i = 1;  i <= 5; ++i){
		getJackpotText[i] = []
		getJackpotText[i][0] = cc.find("GetJackpotSkeleton/Mask/Text"+i,root)
		for(let j = 1;  j <= 2; ++j){	
			getJackpotText[i][j] = cc.find("GetJackpotSkeleton/Mask/Text"+i+"-"+j,root).getComponent(cc.Label)
			getJackpotText[i][j].node.active =(false)
		}
	}
	let waitStart				= cc.find("WaitStart",root)
	let watch 					= cc.find("Watch",root)
	let jackpotMoney 			= cc.find("JackpotMoney",root)
	let jackpotMoneyText 		= cc.find("JackpotMoney/Text",root).getComponent(cc.Label)

	let menuButton 				= cc.find("Options/MenuButton",root).getComponent(cc.Button)
	let menuCloseBG 			= cc.find("Options/MenuButton/CloseBG",root).getComponent(cc.Button)
	let rechargeButton 			= cc.find("Options/RechargeButton",root).getComponent(cc.Button)
	let menuContent 			= cc.find("Options/MenuButton/Mask/Content",root)
	let exitGameButton 			= cc.find("Options/MenuButton/Mask/Content/ExitGameButton",root).getComponent(cc.Button)
	let settingButton 			= cc.find("Options/MenuButton/Mask/Content/SettingButton",root).getComponent(cc.Button)
	let descriptionButton		= cc.find("Options/MenuButton/Mask/Content/DescriptionButton",root).getComponent(cc.Button)

	let descriptionWindow 		= cc.find("Options/DescriptionWindow",root)
	let descriptionCloseBG		= cc.find("Options/DescriptionWindow/CloseBG",root).getComponent(cc.Button)
	let descriptionText 		= cc.find("Options/DescriptionWindow/ScrollRect/Text",root).getComponent(cc.RichText)
	let descriptionCloseButton 	= cc.find("Options/DescriptionWindow/CloseButton",root).getComponent(cc.Button)
	
	let settingWindow		= cc.find("Options/SettingWindow",root)
	let settingCloseBG		= cc.find("Options/SettingWindow/CloseBG",root).getComponent(cc.Button)
	let bgmToggle			= cc.find("Options/SettingWindow/Bgm/BgmToggle",root).getComponent(cc.Button)
	let bgmEnableImage		= cc.find("Options/SettingWindow/Bgm/BgmToggle/BgmEnableImage",root).getComponent(cc.Sprite)
	let bgmSliderImage		= cc.find("Options/SettingWindow/Bgm/BgmToggle/BgmSliderImage",root).getComponent(cc.Sprite)
	let soundToggle			= cc.find("Options/SettingWindow/Sound/SoundToggle",root).getComponent(cc.Button)
	let soundEnableImage	= cc.find("Options/SettingWindow/Sound/SoundToggle/SoundEnableImage",root).getComponent(cc.Sprite)
	let soundSliderImage	= cc.find("Options/SettingWindow/Sound/SoundToggle/SoundSliderImage",root).getComponent(cc.Sprite)

	let settingCloseButton	= cc.find("Options/SettingWindow/CloseButton",root).getComponent(cc.Button)
	let versionText			= cc.find("Options/SettingWindow/VersionText",root).getComponent(cc.Label)

	let idText 				= cc.find("UserInfo/IDText",root).getComponent(cc.Label)
	let profileImage 		= cc.find("UserInfo/ProfileFrame/Mask/ProfileImage",root).getComponent(cc.Sprite)
	let moneyText 			= cc.find("UserInfo/MoneyText",root).getComponent(cc.Label)

	let menuEnable = false
	let countdownSequence = null
	let CountdownCallback = null
	
	countdown.active =(false)
	descriptionWindow.active =(false)
	menuCloseBG.node.active =(false)
	settingWindow.active =(false)
	waitStart.active =(false)
	message.active =(false)
	action.active =(false)
	getJackpotSkeleton.node.active =(false)
	amplificationCardButton.node.active =(false)

	this.SetActiveAction = function(v){
		action.active =(v)
	}

	let self = this

	////動作按鈕
	//棄牌
	abandonButton.node.on('click',function(){ 
		GameG.PlayGameSound("click")
		GameLayer.FoldCard()
		self.SetActiveAction(false)
	})

	//加倍
	doubleButton.node.on('click',function(){ 
		GameG.PlayGameSound("click")
		GameLayer.DoubleBet()
		self.SetActiveAction(false)
	})

	//放大牌型
	amplificationCardButton.node.on('click',function(){ 
		self.CloseAmplificationCardWindow()
	})

	this.SetAmplificationCard = function(cardsInfo, pattern){
		for(let i = 0;  i < 5; ++i){
			let spriteName = "card_"+cardsInfo[i].Color+"_"+cardsInfo[i].CardNumber
			GameG.SetImageSprite(amplificationCard[i], null,spriteName)
		}
		GameG.SetImageSprite(amplificationPattern, null,"pattern_"+pattern, true)
	}

	this.SwitchAmplificationCardWindow = function(){
		let value = !amplificationCardButton.node.activeSelf
		amplificationCardButton.node.active =(value)
	}

	this.CloseAmplificationCardWindow= function(){
		amplificationCardButton.node.active =(false)
	}

	//版本
	versionText.string = "V." + GameG.GetGameVersion();

	menuContent.active = false

	//菜單
	let SwitchMenu = function(){ 
		menuEnable = !menuEnable
		menuCloseBG.node.active =(menuEnable)
		menuContent.active = menuEnable

		// let y = 0
		// if (menuEnable == true)
		// 	y = 280
		// GameG.NewTween(menuContent)
		// .to(0.1, { position : cc.v3(0,y,0)})
		// .start()		
	};

	menuButton.node.on('click',function(){ 
		GameG.PlayGameSound("click")
		SwitchMenu() 
	})

	menuCloseBG.node.on('click',function(){ 
		SwitchMenu() 
	})

	//充值
	rechargeButton.node.active = false;
	// rechargeButton.node.on('click',function(){ 
	// 	GameG.PlayGameSound("click")
	// 	let openparam = CS.WindowNodeInitParam("UIRecharge", CS.AppDefine.HallNumber)
	// 	CS.WindowManager.Instance:OpenWindow(openparam)
	// })
	
	////離開遊戲
	exitGameButton.node.on('click',function(){ 
		GameG.PlayGameSound("click")
		GameG.ExitGame()
	})

	let Referrer = GameConfig.getReferrer()
	if (Referrer=="0") {
		exitGameButton.node.active = false;
		menuContent.position = cc.v3(0,35,0)
	}
	else{
		exitGameButton.node.active = true;
		menuContent.position = cc.v3(0,0,0)
	}
	
	////遊戲說明
	let SetActiveDescriptionWindow = function(value){
		descriptionWindow.active =(value)
	}

	descriptionButton.node.on('click',function(){ 
		GameG.PlayGameSound("click")
		let value = !descriptionWindow.activeSelf
		SetActiveDescriptionWindow(value)
	})
	descriptionCloseButton.node.on('click',function(){ 
		GameG.PlayGameSound("click")
		SetActiveDescriptionWindow(false)
		window.isShowHelp = true
	})

	descriptionCloseBG.node.on('click',function(){ 
		SetActiveDescriptionWindow(false)
		window.isShowHelp = true
	})

	this.updateDescription = function () {
        let fileName = GameInfo.GetGamePName(GameManager.getGameId())
        let urlData = window.location.search.substring(1);
        if (urlData == null || urlData == "") {
            FileManager.LoadFile(true, "Txt", fileName, cc.TextAsset, (err, data) => {
                if (err) {
                    return
                }

				if (descriptionText.node == null || descriptionText.node.parent == null){
					return
				}
				
				descriptionText.string = data.text
            })
        } else {
            cc.loader.load({ url : fileName + ".txt?=" + Math.random().toString(), type : cc.TextAsset }, function (err, ret) {
                if (err) {
                    console.error(err);
                    return;
                }

                descriptionText.string = ret
            })
        }
	};

	this.updateDescription()
	if (window.isShowHelp == null){
		SetActiveDescriptionWindow(true)
	}	
	
	////設定
	settingWindow.active =(true)

	let SetActiveSettingWindow = function(value){
		settingWindow.active =(value)
	};

	settingButton.node.on('click',function(){ 
		GameG.PlayGameSound("click")
		let value = !settingWindow.activeSelf
		SetActiveSettingWindow(value)
	})

	settingCloseButton.node.on('click',function(){ 
		GameG.PlayGameSound("click")
		SetActiveSettingWindow(false)	
	})

	settingCloseBG.node.on('click',function(){ 
		SetActiveSettingWindow(false)
	})
		
	////音效
	let SetSlider = function(sliderImage, enableImage, value){ 
		let localPosition = value && cc.v3(25,-3,0) || cc.v3(-25,-3,0)
		sliderImage.node.position = localPosition
		enableImage.node.active =(value)
	};
	
	let bgmToggleIsOn =  GameG.GetMusicStatus()	
	SetSlider(bgmSliderImage, bgmEnableImage, bgmToggleIsOn) 
	let SetBgm = function(value){
		GameG.SetMusicStatus(value)
		SetSlider(bgmSliderImage, bgmEnableImage, value) 
	};
	
	bgmToggle.node.on('click', function(){
		bgmToggleIsOn = !bgmToggleIsOn
		SetBgm(bgmToggleIsOn)
		GameG.PlayGameSound("click")
	})

	let soundToggleIsOn = GameG.GetSoundStatus()
	SetSlider(soundSliderImage, soundEnableImage, soundToggleIsOn) 
	let SetSound = function(value){
		GameG.SetSoundStatus(value)
		SetSlider(soundSliderImage, soundEnableImage, value)
	};
	
	soundToggle.node.on('click', function(){
		soundToggleIsOn = !soundToggleIsOn
		SetSound(soundToggleIsOn)
		GameG.PlayGameSound("click")
	})
	settingWindow.active =(false)

	//User
	this.SetUserInfo = function(id, money, faceID){
		idText.string = "ID:"+id
		moneyText.string = GameLayer.MoneyText(money)
		GameG.SetImageSprite(profileImage, null,"face_"+faceID)
	};

	this.SetUserMoney = function(money){ 
		moneyText.string = GameLayer.MoneyText(money)
	};

	//倒數
	this.StartCountdown = function (time, Callback){
		this.Stopcountdown()
		countdown.active =(true)
		CountdownCallback = Callback

		let self = this
		let sequence = GameLayer.GetSequence(countdown)
		countdownSequence = sequence

		let loadingTime = GameManager.calLoadTime()
		time = time - loadingTime

		for(let i = time;  i >= 1; -- i ){
			sequence.call(function (){
				if (i <= 2){
					GameG.PlayGameSound("countdown")
				}
				countdownTxt.string = Math.floor(i).toString()
			})
			sequence.delay(1)
		}
		sequence.call(function (){
			self.Stopcountdown()
		})
		sequence.start()
	};

	//停止倒數
	this.Stopcountdown = function(){
		if(countdownSequence != null ){
			countdownSequence.stop()
			countdownSequence = null

			if( CountdownCallback != null ){ 
				CountdownCallback()
				CountdownCallback = null
			}
		}
		countdown.active =(false)
	};
	
	//訊息
	this.ShowMessage = function (msg, timer){
		if (timer == null)
			timer = 1
		
		let clone 		= cc.instantiate(message)
		clone.parent 	=(root)
		clone.active 	=(true)

		GameLayer.GetSequence(clone)
		.by(timer, { position : cc.v3(0,200,0) })
		.call(function(){
			clone.destroy()
		})
		.start()

		let background 		= cc.find("Background",clone).getComponent(cc.Sprite)
		background.opacity	= 0
		GameLayer.GetSequence(background.node)
		.to(timer / 3, { opacity : 255 })
		.delay(timer / 3)
		.to(timer / 3, { opacity : 0 })
		.start()

		let txt 			= cc.find("Text",clone).getComponent(cc.Label)
		txt.node.opacity 	= 0
		txt.string 			= GameG.GetLocalizedString(msg);
		GameLayer.GetSequence(txt.node)
		.to(timer / 3, { opacity : 255 })
		.delay(timer / 3)
		.to(timer / 3, { opacity : 0 })
		.start()
	};

	//播動畫
	let PlayAnimation = function(skeleton, name, time, Callback){ 
		skeleton.node.active =(true)
		skeleton.setAnimation(0, name, false)
		GameG.NewDelayOnce(function(){
			skeleton.node.active =(false)
			//skeleton.stop()
			if(Callback != null ){ 
				Callback()
			}			
		}, time + 0.1)
	};

	//開始下注
	this.PlayStartBetAnimation = function(Callback){
		PlayAnimation(startBetSkeleton,"kaishixiazhu",1.7,Callback) 
	};

	//停止下注
	this.PlayStopBetAnimation = function(Callback){
		PlayAnimation(stopBetSkeleton,"tingzhixiazhu",2,Callback) 
	};

	//和
	this.PlayEquarAnimation = function(Callback){
		PlayAnimation(equarSkeleton,"he",2.2,Callback) 
	};
	
	//勝
	this.PlayWinAnimation = function(Callback){
		PlayAnimation(winSkeleton,"win",2,Callback) 
	};

	//負
	this.PlayLoseAnimation = function(Callback){
		PlayAnimation(loseSkeleton,"fu",2,Callback) 
	};

	//觀看中
	this.SetActiveWatch = function (v){
		watch.active =(v)
	};
	
	//等待開始
	this.SetWaitStart = function (v){
		waitStart.active =(v)
	};
	
	////JP
	//JP獎池
	this.SetJackpotMoney = function(money){
		jackpotMoneyText.string = GameLayer.MoneyText(money)
	};

	this.GetJackpot = function(){
		return jackpotMoney
	}

	//中JP動畫
	let SetActiveGetJackpotText = function(value){
		for(let i = 1;  i <= 5; ++ i){
			for(let j = 1;  j <= 2; ++ j){	
				getJackpotText[i][j].node.active =(value)
			}
		}
	};

	let TurnJpText = function(text1, text2, sequence){
		let speed = 0.05
		sequence.call(function(){
			GameG.NewTween(text1.node)
			.to(speed, { y : -95 })
			.call(function(){
				let text = Math.ceil(GameG.Random(0,9))
				text1.node.y = 95
				text1.node.string = text
			})
			.start();

			GameG.NewTween(text2.node)
			.to(speed, { y : 0 })
			.start();
		})
		sequence.delay(speed)
		sequence.delay(0.01)
	};

	this.ShowGetJackpotAnimation = function(money, Callback){
		GameG.PlayGameSound("jackpot")
		money = (Math.floor(money / 100)).toString()
		//money = string.reverse(money)
		money = money.split("").reverse().join("")

		let frequency = 5
		for(let i = 1;  i <= 5; ++ i){
			let sequence = GameLayer.GetSequence(getJackpotText[i][0])
			for(let j = 1;  j <= frequency; ++ j){	
				TurnJpText(getJackpotText[i][1],getJackpotText[i][2],sequence)
				TurnJpText(getJackpotText[i][2],getJackpotText[i][1],sequence)
			}
			sequence.call(function(){ 
				GameG.PlayGameSound("jackpot_win")
				for(let i = 5;  i > 0; -- i){
					//let text = string.sub(money,i,i)
					let text = money.substring(i, i - 1)
					getJackpotText[i][1].string = text == "" && "0" || text
				}
			})
			sequence.start()
		}

		PlayAnimation(getJackpotSkeleton,"gongxizhongcai",4.4,Callback)

		GameLayer.Delay(0.2,
			function(){
				SetActiveGetJackpotText(true)
			}
		)

		GameLayer.Delay(4.2,
			function(){
				SetActiveGetJackpotText(false)
			}
		)
	};
};

module.exports = UIMain
