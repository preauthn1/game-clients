var HallG = require("Global")
var GameG = require("GameGlobal")
var gameData = require("GameData")
var gameModel = require("GameModel")
var rootRect = null
var txtLeftCount = null
var rootMode = null
var imgModeBg = null
var imgModeCountdown = null
var txtModeCountdown = null
var rootRetrigger = null
var spineRetrigger = null
var txtRetrigger = null
var rootWinMoney = null
var rootWinMoneyBg = null
var txtWinMoney = null
var autoSequenceKey = 0
var poolMode = []
var sequenceDict = []
var retriggerCallback = null
var isFreeSpining = false
var colors = []
colors["w2"] = cc.Color(10,156,34,255)
colors["w3"] = cc.Color(255,108,0,255)
colors["w4"] = cc.Color(235,0,0,255)

var UIFreeSpin = 
{
	extends: cc.Component,

	//取得Sequence
	GetSequence(key)
	{
	    if(key == null)
		{
	        key = "AutoSequenceKey_" + autoSequenceKey
	        autoSequenceKey = autoSequenceKey + 1
	    }
	    if(sequenceDict[key] == null)
		{
		//----->需重新編譯程式碼        sequenceDict[key] = CS.DG.Tweening.DOTween.Sequence()
		}
		else
		{
//----->需重新編譯程式碼        sequenceDict[key]:Kill()
//----->需重新編譯程式碼        sequenceDict[key] = CS.DG.Tweening.DOTween.Sequence()
	    }
	    return sequenceDict[key]
	},

	//刪除Sequence
	KillSequence(key)
	{
	    if(sequenceDict[key])
		{
//----->需重新編譯程式碼        sequenceDict[key]:Kill()
	    }
	    sequenceDict[key] = null
	},

	//刪除全部Sequence
	KillTotalSequence()
	{
		for(let k in (sequenceDict))
		{		
			let v = sequenceDict[k]
			KillSequence(k)
		}
	},

	//離開遊戲
	onExit()
	{
		KillTotalSequence()
	},

	Init(root, rootResult)
	{
		rootRect = root
		rootRect.active =(false)
	
		txtLeftCount = cc.find("TextLeftCount", root).getComponent(cc.Label)
		
		////- Mode
		rootMode = cc.find("RootMode", root)
		rootMode.active =(false)
		
		imgModeBg = cc.find("RootMode", root).getComponent(cc.Sprite)
		
		imgModeCountdown = cc.find("RootMode/ImageCountdown", root).getComponent(cc.Sprite)
		txtModeCountdown = cc.find("RootMode/ImageCountdown/Text", root).getComponent(cc.Label)
		
		poolMode = []
		// for i=1, 3 do
		for(let  i = 1;  i <=  3; ++ i)
		{
			poolMode[i] = []
			poolMode[i].imgAlpha = []
			poolMode[i].imgAlpha[1] = cc.find("RootMode/LayoutGroup/Button" + i + "/ImageTitle", root).getComponent(cc.Sprite)
			poolMode[i].imgAlpha[2] = cc.find("RootMode/LayoutGroup/Button" + i + "/ImageTitle/Image", root).getComponent(cc.Sprite)
			poolMode[i].imgAlpha[3] = cc.find("RootMode/LayoutGroup/Button" + i + "/ImageOr", root).getComponent(cc.Sprite)
			poolMode[i].imgAlpha[4] = cc.find("RootMode/LayoutGroup/Button" + i + "/ImageOr/Image", root).getComponent(cc.Sprite)
			poolMode[i].imgAlpha[5] = cc.find("RootMode/LayoutGroup/Button" + i + "/TextReel", root).getComponent(cc.Label)
			poolMode[i].imgAlpha[6] = cc.find("RootMode/LayoutGroup/Button" + i + "/TextBet", root).getComponent(cc.Label)
			poolMode[i].spineBase = cc.find("RootMode/LayoutGroup/Button" + i + "/SkeletonGraphicBase", root).getComponent(sp.Skeleton)
			poolMode[i].spineSelect = cc.find("RootMode/LayoutGroup/Button" + i + "/SkeletonGraphic (w_select)", root).getComponent(sp.Skeleton)
			poolMode[i].txtDouble = []
			poolMode[i].txtDouble[1] = cc.find("RootMode/LayoutGroup/Button" + i + "/TextDoubleL", root).getComponent(cc.Label)
			poolMode[i].txtDouble[2] = cc.find("RootMode/LayoutGroup/Button" + i + "/TextDoubleR", root).getComponent(cc.Label)
			poolMode[i].txtCount = cc.find("RootMode/LayoutGroup/Button" + i + "/TextCount", root).getComponent(cc.Label)
			poolMode[i].btn = cc.find("RootMode/LayoutGroup/Button" + i, root).getComponent(cc.Button)
			poolMode[i].btn.node.on('click',function()
			{
				GameG.PlayGameSound("se_fgselect")
				ChooseOption(i)
			})
			poolMode[i].option = null
		}
		
		////- Retrigger
		rootRetrigger = cc.find("RootRetrigger", root)
		rootRetrigger.active =(false)
		
		spineRetrigger = cc.find("RootRetrigger/SkeletonGraphic (free_game)", root).getComponent(sp.Skeleton)
		txtRetrigger = cc.find("RootRetrigger/Text", root).getComponent(cc.Label)
		
		////- WinMoney
		rootWinMoney = cc.find("RootWinMoney", root)
		rootWinMoneyBg = cc.find("RootWinMoney/Image", root)
		txtWinMoney = cc.find("RootWinMoney/Image/Text", root).getComponent(cc.Label)
		
		isFreeSpining = false
	},

	//取得目前是否在free spin
	InState()
	{
		return isFreeSpining
	},

	// 顯示介面
	Show(callback)
	{
		if(gameData.FreeGame == null)
		{
			if(callback != null)
			{
				callback()
			}
			return
		}
		if(gameData.FreeGame.LeftCount == 0)
		{
			if(callback != null)
			{
				callback()
			}
			return
		}
			
		let sequence = GetSequence()	
		if(isFreeSpining == false)
		{
			GameG.PlayGameBGM("bgm_fg")		
//----->需重新編譯程式碼		sequence:AppendInterval(2)
		}	
		
//----->需重新編譯程式碼	sequence.call(function(){			
//----->需重新編譯程式碼		if(callback != null){
//----->需重新編譯程式碼			callback()
//----->需重新編譯程式碼		}
//----->需重新編譯程式碼	})
		
		isFreeSpining = true
		rootRect.active =(true)	
		HideGameOption()
		
		txtLeftCount.text = gameData.FreeGame.LeftCount -1	
	},

	// 關閉介面
	Hide(money,callback)
	{
		if(gameData.FreeGame == null)
		{
			if(callback != null)
			{
				callback()
			}
			return
		} 
		else if(gameData.FreeGame.LeftCount > 0)
		{
			if(callback != null)
			{
				callback()
			}
			return
		}
		
		isFreeSpining = false
		rootRect.active =(true)
		rootWinMoney.active =(true)
		
		rootWinMoneyBg.scale = cc.v3(1, 1, 1) * 0.2
		
		txtWinMoney.text = GameG.FormatNum(money)
		
		GameG.CloseBGMSound()
		GameG.PlayGameSound("se_fgend")
		
		let sequence = GetSequence()
//----->需重新編譯程式碼	sequence:Append(rootWinMoneyBg:DOScale(cc.v3(1, 1, 1), 0.2))
//----->需重新編譯程式碼	sequence:AppendInterval(3)
//----->需重新編譯程式碼	sequence.call(function(){
//----->需重新編譯程式碼		GameG.PlayGameBGM("bgm_mg")
//----->需重新編譯程式碼		gameData.FreeGame = null
//----->需重新編譯程式碼		rootRect.active =(false)
//----->需重新編譯程式碼		rootWinMoney.active =(false)
//----->需重新編譯程式碼		if(callback != null){
//----->需重新編譯程式碼			callback()
//----->需重新編譯程式碼		}
//----->需重新編譯程式碼	})
	},

	// 回合開始
	SetGameStart()
	{
	
	},

	// 回合結束
	SetGameEnd()
	{
		
	},

	// 開始遊戲
	StartGame()
	{		
		
	},

	// =============================================================
	// 顯示選擇模式
	ShowGameOption(callback)
	{
		if(gameData.FreeMode == null)
		{
			if(callback != null)
			{
				callback()
			}		
			return
		}
		
		GameG.Print("FreeMode",gameData.FreeMode)	
		GameG.PlayGameBGM("bgm_fm")	
		
		rootRect.active =(true)
		rootMode.active =(true)	
		
		// for i=1, gameData.FreeMode.Options.length do
		for(let  i = 1;  i <=  gameData.FreeMode.Options.length; ++ i)
		{
			if(poolMode[i] != null)
			{
				poolMode[i].option = gameData.FreeMode.Options[i]
				
				let optionData = gameData.FreeMode.ParseOptions[i]
				poolMode[i].txtCount.text = optionData.Data.count
				
				let freeID = optionData.ID
				let info = gameData.GetFreeGameInfoByID(freeID)			
				poolMode[i].txtDouble[1].text = "X" + info.Data.multi[1]
				poolMode[i].txtDouble[2].text = "X" + info.Data.multi[2]
				poolMode[i].btn.interactable = true
			}
		}	
			
		// 淡入動畫
		AlphaFadeIn(imgModeBg)
		// for i=1, poolMode.length do
		for(let  i = 1;  i <=  poolMode.length; ++ i)
		{
			let oriColor = poolMode[i].spineSelect.color
			poolMode[i].spineSelect.color = cc.Color(oriColor.r,oriColor.g,oriColor.b,0)
			poolMode[i].spineBase.setAnimation(0, "entrance", true);
			AlphaFadeIn(poolMode[i].txtDouble[1])
			AlphaFadeIn(poolMode[i].txtDouble[2])
			AlphaFadeIn(poolMode[i].txtCount)
			AlphaFadeIn(poolMode[i].spineBase)
			// for j=1, poolMode[i].imgAlpha.length do
			for(let  j = 1;  j <=  poolMode[i].imgAlpha.length; ++ j)
			{
				AlphaFadeIn(poolMode[i].imgAlpha[j])
			}
		}
		// 開始倒數計時
		StartCountdown()	
	},

	// 等待關閉選擇模式
	WaitHideGameOption()
	{
		gameData.FreeMode = null
	},

	// 關閉選擇模式
	HideGameOption()
	{
		rootMode.active =(false)
	},

	// 開始倒數計時
	StartCountdown()
	{
		let sequence = GetSequence("countdown")
		let timer = gameData.FreeSpinTotalCountdown
		// for i = timer, 1, -1 do
		for(let  i  =  timer;  i  <=  1; ++ i )
		{
//----->需重新編譯程式碼        sequence.call(function(){ 
//----->需重新編譯程式碼			imgModeCountdown.active =(gameData.FreeSpinShowCountdown >= i && timer >= i)
//----->需重新編譯程式碼			txtModeCountdown.text = tostring(i)
//----->需重新編譯程式碼		})
//----->需重新編譯程式碼        sequence:AppendInterval(1)
	    }
//----->需重新編譯程式碼	sequence.call(function(){
//----->需重新編譯程式碼        imgModeCountdown.active =(false)
//----->需重新編譯程式碼		StartAutoChoose()
//----->需重新編譯程式碼	})
	},

	// 自動選擇模式
	StartAutoChoose()
	{
		let index = math.random(1, poolMode.length)
		ChooseOption(index)
	},

	// 選擇模式
	ChooseOption(index)
	{
		KillSequence("countdown")
		WaitHideGameOption()
		// 淡入動畫
		AlphaFadeIn(poolMode[index].spineSelect)
		// 淡出動畫	
		//	for i=1, poolMode.length do
		for(let  i = 1;  i <=  poolMode.length; ++ i)
		{
			poolMode[i].btn.interactable = false
			poolMode[i].spineBase.setAnimation(0, "off", false);
			if(i != index)
			{
				AlphaFadeOut(poolMode[i].txtDouble[1])
				AlphaFadeOut(poolMode[i].txtDouble[2])
				AlphaFadeOut(poolMode[i].txtCount)
				// for j=1, poolMode[i].imgAlpha.length do
				for(let  j = 1;  j <=  poolMode[i].imgAlpha.length; ++ j)
				{
					AlphaFadeOut(poolMode[i].imgAlpha[j])
				}
			}
		}
		
		let sequence = GetSequence()
//----->需重新編譯程式碼	sequence:AppendInterval(2)
//----->需重新編譯程式碼	sequence.call(function(){       
//----->需重新編譯程式碼		// 送出封包
//----->需重新編譯程式碼		if(poolMode[index].option != null){
//----->需重新編譯程式碼			gameModel.SendFreeGameMode(poolMode[index].option)
//----->需重新編譯程式碼		}
//----->需重新編譯程式碼	})	
	},

	// 物件淡入淡出
	AlphaFadeIn(obj,timer)
	{
		timer = timer || 1
		let oriColor = obj.color
		obj.color = cc.Color(oriColor.r,oriColor.g,oriColor.b,0.3)
		let sequence = GetSequence()
//----->需重新編譯程式碼	sequence:Append(obj:DOColor(cc.Color(oriColor.r,oriColor.g,oriColor.b,1), timer));
	},

	// 物件淡入淡出
	AlphaFadeOut(obj, timer)
	{
		timer = timer || 1
		let oriColor = obj.color
		obj.color = cc.Color(oriColor.r,oriColor.g,oriColor.b,1)
		let sequence = GetSequence()
//----->需重新編譯程式碼	sequence:Append(obj:DOColor(cc.Color(oriColor.r,oriColor.g,oriColor.b,0.7), timer));
	},

	// =============================================================
	// 顯示再次觸發
	ShowRetrigger(callback)
	{
		if(gameData.RetriggerFreeGame == null)
		{
			if(callback != null)
			{
				callback()
			}
			return
		}
		retriggerCallback = callback
		rootRect.active =(true)
		rootRetrigger.active =(true)
		
		GameG.PlayGameSound("se_retrigger")
			
		let freeGameInfo = gameData.GetFreeGameInfoByID(gameData.RetriggerFreeGame.ID)
		if(freeGameInfo == null)
		{
		
		} 
		else if(freeGameInfo.Data.key == "w2")
		{
			txtRetrigger.color = colors["w2"]
			spineRetrigger.setAnimation(0, "start_green", false);
			spineRetrigger.addAnimation(0, "idle_green", true , 1);
		}
		else if(freeGameInfo.Data.key == "w3")
		{
			txtRetrigger.color = colors["w3"]	
			spineRetrigger.setAnimation(0, "start_yellow", false);
			spineRetrigger.addAnimation(0, "idle_yellow", true , 1);
		} 
		else if(freeGameInfo.Data.key == "w4")
		{
			txtRetrigger.color = colors["w4"]	
			spineRetrigger.setAnimation(0, "start_red", false);
			spineRetrigger.addAnimation(0, "idle_red", true , 1);
		}
		
		txtRetrigger.text = "+" + gameData.RetriggerFreeGame.Count
		
		let sequence = GetSequence()
//----->需重新編譯程式碼	sequence:AppendInterval(3.979)
//----->需重新編譯程式碼	sequence.call(function(){
//----->需重新編譯程式碼        HideRetrigger()
//----->需重新編譯程式碼	})	
	},

	// 關閉再次觸發
	HideRetrigger()
	{
		gameData.RetriggerFreeGame = null
		rootRect.active =(true)
		rootRetrigger.active =(false)
		if(retriggerCallback != null)
		{
			retriggerCallback()
		}
	},
};

module.exports = UIFreeSpin
