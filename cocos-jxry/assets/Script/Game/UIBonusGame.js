var HallG = require("Global")
var GameG = require("GameGlobal")
var gameData = require("GameData")
var gameModel= require("GameModel")
var rootRect = null
var rootBg = null
var rootOption = null
var imgFortuneGod = null
var rootFortuneGod = null
var resetGodScale = null
var resetGodPosY = null
var particleFortuneGod = null
var spineGod = null
var rootMoney = null
var txtMoney = null
var imageTitle = null
var txtScore = null
var txtCount = null
var rootTimer = null
var txtTimer = null
var pool = []
var completeCallback = null
var autoSequenceKey = 0
var sequenceDict = []

var UIBonusGame = 
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
		
		//	for i=1, pool.length do
		for(let  i = 1;  i <=  pool.length; ++ i)
		{
			pool[i] = null
		}
	},

	Init(root)
	{
		rootRect = root
		rootRect.active =(false)
	
		rootBg = cc.find("Background", root)
		
		rootOption = cc.find("RootOption", root)
		imgFortuneGod = cc.find("Background/ImageFortuneGod", root).getComponent(cc.Sprite)
		rootFortuneGod = cc.find("Background/RootFortuneGod", root)
		resetGodScale = rootFortuneGod.scaleX
		resetGodPosY = rootFortuneGod.y
		particleFortuneGod = cc.find("Background/RootFortuneGod/dhzw_ingots light", root)
		particleFortuneGod.active =(false)
		spineGod = cc.find("Background/RootFortuneGod/SkeletonGraphic (money_man)", root).getComponent(sp.Skeleton)
		
		rootMoney = cc.find("RootMoney", root)
		rootMoney.active =(false)	
		txtMoney = cc.find("RootMoney/Text", root).getComponent(cc.Label)
		imageTitle = []
		// for i=1, 4 do
		for(let  i = 1;  i <=  4; ++ i)
		{
			imageTitle[i] = cc.find("RootMoney/ImageTitle" + i, root).getComponent(cc.Sprite)
		}
		
		txtScore = cc.find("TextScore", root).getComponent(cc.Label)
		txtCount = cc.find("TextCount", root).getComponent(cc.Label)
		
		rootTimer = cc.find("ImageTimer", root)
		txtTimer = cc.find("ImageTimer/Text", root).getComponent(cc.Label)		
			
		// for i=1, rootOption.children.length do
		for(let  i = 1;  i <=  rootOption.children.length; ++ i)
		{
			let child = rootOption.children[i - 1]
			
			// for j=1, child.children.length do
			for(let  j = 1;  j <=  child.children.length; ++ j)
			{
				let children = child.children[j - 1]
				let index = pool.length + 1
				pool[index] = []
				pool[index].root = children
				pool[index].btn = children.getComponent(cc.Button)
				pool[index].btn.node.on('click',function()
				{
					ChooseOption(index)
				})
				pool[index].spine = cc.find("SkeletonGraphic (bonus_coin)", children).getComponent(sp.Skeleton)
				pool[index].particle = []
				pool[index].particle[1] = cc.find("dhzw_coin star (RD)", children)
				pool[index].particle[2] = cc.find("dhzw_coin star (pur)", children)
				pool[index].particle[3] = cc.find("dhzw_coin star (BL)", children)
				pool[index].particle[4] = cc.find("dhzw_coin star (gr)", children)
			}
		}
	},

	// 回合開始
	SetGameStart(){
	
	},

	// 回合結束
	SetGameEnd(){
	
	},

	//表演
	Show(callback){
		if(gameData.BonusGame == null){
			if(callback != null){
				callback()
			}
			return
		}
			
		if(gameData.RetriggerBonusGame != null){
			let count = gameData.RetriggerBonusGame.Count
			gameData.RetriggerBonusGame.Count = count -1
		}	
		
		GameG.Print("BounsGame",gameData.BonusGame)
		completeCallback = callback
		rootBg.scale = cc.v3(1, 1, 1)
		rootRect.active =(true)
		
		GameG.PlayGameBGM("bgm_jp")	
		// 顯示未開獎勵狀態
		rootOption.active =(true)
		rootMoney.active =(false)
		imgFortuneGod.active =(true)
		rootFortuneGod.active =(false)
		rootFortuneGod.scale = cc.v3(1, 1, 1) * resetGodScale
		rootFortuneGod.anchoredPosition = cc.v2(0, resetGodPosY)
		
	for(let  i = 1;  i <=  pool.length; ++ i){//	for i=1, pool.length do
			pool[i].btn.enabled = true
			pool[i].spine.setAnimation(0, "idle_coin", true);
			pool[i].record = null
			
	for(let k in (pool[i].particle)){ 
	let v = pool[i].particle[k] 

				pool[i].particle[k].active =(false)
			}
		}
		
	for(let  i = 1;  i <=  imageTitle.length; ++ i){//	for i=1, imageTitle.length do
			imageTitle[i].active =(false)
		}
		
		RecoverRecord()
		ShowAllReward()
		StartCountdown()
	},

	// 回復翻牌紀錄
	RecoverRecord()
	{
		for(let k in (gameData.BonusGame.Records))
		{
			let v = gameData.BonusGame.Records[k]

			let data = gameData.BonusGame.Records[k]
			let index = data.Location
			if(pool[index] != null)
			{
				pool[index].btn.enabled = false
				pool[index].record = data
				if(data.RewareValue == 1)
				{
					pool[index].spine.setAnimation(0, "idle_huge", false);
				}
			}
			else if(data.RewareValue == 2)
			{
					pool[index].spine.setAnimation(0, "idle_big", false);
			} 
			else if(data.RewareValue == 3)
			{
				pool[index].spine.setAnimation(0, "idle_medium", false);
			} 
			else if(data.RewareValue == 4)
			{
				pool[index].spine.setAnimation(0, "idle_small", false);
			}
		}
	},

	// 等待關閉介面
	WaitHide()
	{
		if(completeCallback != null)
		{
			completeCallback()
		}
	},

	// 關閉介面
	Hide()
	{
		gameData.BonusGame = gameData.BonusGameStandby
		gameData.BonusGameStandby = null
		
		rootRect.active =(false)	
		rootMoney.active =(false)
		
		GameG.PlayGameBGM("bgm_mg")
	},

	ChooseOption(index)
	{
		let data = gameData.GetBonusGameRecord(index)
		if(data != null)
		{
			data.Location = index
			gameModel.SendPickBonus(data)
		}		
		data = gameData.BonusGame.Records[gameData.BonusGame.Records.length]		
		if(data.Location != index)
		{
			//從新計時自動翻牌
			StartCountdown()
		}
		else
		{
			KillSequence("countdown")
			rootTimer.active =(false)
		
			for(let k in (pool))
			{
				let v = pool[k] 

				if(pool[k].record == null)
				{
					pool[k].btn.enabled = false
					pool[k].spine.setAnimation(0, "bw_coin", false);
				}
			}
		}			
	},

	SetRecords(data)
	{
		GameG.PlayGameSound("se_flip")
		
		let index = data.Location
		pool[index].record = data
		pool[index].btn.enabled = false
		pool[index].particle[data.RewareValue].active =(true)
		if(data.RewareValue == 1)
		{
			pool[index].spine.setAnimation(0, "start_huge", false);
		} 
		else if(data.RewareValue == 2)
		{
			pool[index].spine.setAnimation(0, "start_big", false);
		} 
		else if(data.RewareValue == 3)
		{
			pool[index].spine.setAnimation(0, "start_medium", false);
		} 
		else if(data.RewareValue == 4)
		{
			pool[index].spine.setAnimation(0, "start_small", false);
		}
		
		// 翻完牌，顯示下個階段
		let sequence = GetSequence()
		//----->需重新編譯程式碼	sequence:AppendInterval(1.0)
		//----->需重新編譯程式碼	sequence.call(function(){ 
		//----->需重新編譯程式碼		ShowAllReward(index)
		//----->需重新編譯程式碼	})		
	},

	// 開出所有獎項
	ShowAllReward(index)
	{
		// 還未翻完全部
		let data = gameData.GetBonusGameRecord(0)
		if(data != null)
		{
			return
		}		
		// 不是最後一個
		data = gameData.BonusGame.Records[gameData.BonusGame.Records.length]
		if(data.Location != index && index != null)
		{
			return
		}
		
		for(let k in (pool))
		{
			let v = pool[k] 

			if(pool[k].record == null)
			{
				pool[k].btn.enabled = false
				pool[k].spine.setAnimation(0, "bw_coin", false);
			} 
			else if(pool[k].record.RewareValue == data.RewareValue)
			{
				if(data.RewareValue == 1)
				{
					pool[k].spine.setAnimation(0, "idle_huge", true);
				}
			}
			else if(data.RewareValue == 2)
			{
				pool[k].spine.setAnimation(0, "idle_big", true);
			} 
			else if(data.RewareValue == 3)
			{
				pool[k].spine.setAnimation(0, "idle_medium", true);
			} 
			else if(data.RewareValue == 4)
			{
				pool[k].spine.setAnimation(0, "idle_small", true);
			}
		}
		
		if(data.RewareValue == 1)
		{
			GameG.PlayGameSound("jp_grand")
		} 
		else if(data.RewareValue == 2)
		{
			GameG.PlayGameSound("jp_major")
		} 
		else if(data.RewareValue == 3)
		{
			GameG.PlayGameSound("jp_minor")
		} 
		else if(data.RewareValue == 4)
		{
			GameG.PlayGameSound("jp_mini")
		}
			
		let sequence = GetSequence()
		//----->需重新編譯程式碼	sequence:AppendInterval(2.0)
		//----->需重新編譯程式碼	sequence.call(function(){ 
		//----->需重新編譯程式碼		ShowFortuneGod()
		//----->需重新編譯程式碼	})
	},

	// 財神爺動畫
	ShowFortuneGod()
	{
		rootOption.active =(false)
		rootFortuneGod.active =(true)
		imgFortuneGod.active =(false)
		
		let zoomScale = 3.5
		let sequence1 = GetSequence()
		//----->需重新編譯程式碼	sequence1:Append(rootBg:DOScale(zoomScale, 1))
		//----->需重新編譯程式碼	sequence1.call(function(){
		//----->需重新編譯程式碼		rootMoney.active =(true)
		//----->需重新編譯程式碼		// 取得最後個獎勵
		//----->需重新編譯程式碼		let data = gameData.BonusGame.Records[gameData.BonusGame.Records].length
		//----->需重新編譯程式碼		imageTitle[data.RewareValue].active =(true)
		//----->需重新編譯程式碼		particleFortuneGod.active =(true)
		//----->需重新編譯程式碼	})
		
		let sequence2 = GetSequence()
		//----->需重新編譯程式碼	sequence2:AppendInterval(0.2)
		//----->需重新編譯程式碼	sequence2:Append(rootFortuneGod:DOScale((1/zoomScale) , 1))
		
		let sequence3 = GetSequence()
		//----->需重新編譯程式碼	sequence3:AppendInterval(0.38)
		//----->需重新編譯程式碼	sequence3.call(function(){
		//----->需重新編譯程式碼		spineGod.setAnimation(0, "start", false);
		//----->需重新編譯程式碼		spineGod.addAnimation(0, "idle", true , 1.7);
		//----->需重新編譯程式碼	})
		//----->需重新編譯程式碼	sequence3:Append(rootFortuneGod:DOAnchorPosY(350, 0.62))
		//----->需重新編譯程式碼	sequence3.call(function(){
		//----->需重新編譯程式碼		ShowMoney()
		//----->需重新編譯程式碼	})			
	},

	// 顯示獲得金額
	ShowMoney()
	{
		rootMoney.active =(true)
		txtMoney.text = GameG.FormatNum(gameData.BonusGame.WinMoney)
		txtMoney.scale = cc.v3(1, 1, 1)	
		
		let sequence = GetSequence()
		let data = gameData.BonusGame.Records[gameData.BonusGame.Records].length
		if(data.RewareValue == 1)
		{
			//----->需重新編譯程式碼		sequence:AppendInterval(4.7)
		} 
		else if(data.RewareValue == 2)
		{
			//----->需重新編譯程式碼		sequence:AppendInterval(3.3)
		} 
		else if(data.RewareValue == 3)
		{
			//----->需重新編譯程式碼		sequence:AppendInterval(2.5)
		} 
		else if(data.RewareValue == 4)
		{
			//----->需重新編譯程式碼		sequence:AppendInterval(1.7)
		}		
		//----->需重新編譯程式碼	sequence.call(function(){ 
		//----->需重新編譯程式碼		WaitHide()
		//----->需重新編譯程式碼	})
	},

	// 開始倒數計時
	StartCountdown()
	{
		let sequence = GetSequence("countdown")
		let timer = gameData.BonusTotalCountdown
		
		//	for i = timer, 1, -1 do
		for(let  i  =  timer;  i  <=  1; ++ i )
		{
			//----->需重新編譯程式碼        sequence.call(function(){ 
			//----->需重新編譯程式碼			rootTimer.active =(gameData.BonusShowCountdown >= i && timer >= i)
			//----->需重新編譯程式碼			txtTimer.text = tostring(i)
			//----->需重新編譯程式碼		})
			//----->需重新編譯程式碼        sequence:AppendInterval(1)
		}
			//----->需重新編譯程式碼	sequence.call(function(){
			//----->需重新編譯程式碼        rootTimer.active =(false)
			//----->需重新編譯程式碼		StartAutoChoose()
			//----->需重新編譯程式碼	})
	},

	// 自動選擇獎勵
	StartAutoChoose()
	{
		let list = GetCanChooseList()
		let sequence = GetSequence()
		
		for(let k in (gameData.BonusGame.Records))
		{			
			let v = gameData.BonusGame.Records[k]
			let data = gameData.BonusGame.Records[k]
			if(data.Location == 0)
			{
				//----->需重新編譯程式碼			sequence.call(function(){ 
				//----->需重新編譯程式碼				ChooseOption(list[k])
				//----->需重新編譯程式碼			})
				//----->需重新編譯程式碼			sequence:AppendInterval(0.1)
			}
		}
	},

	// 取得目前可選擇的獎勵
	GetCanChooseList()
	{
		let list = []
		for(let k in (pool))
		{			
			let v = pool[k]		
			if(pool[k].btn.enabled == true)
			{
				table.insert(list,k)
			}
		}	
		// 還需亂數可選擇的獎勵
		//	for i=1, list.length do
		for(let  i = 1;  i <=  list.length; ++i)
		{
			let index = math.random(i,list.length)		
			if(i != index)
			{
				let temp = list[index]
				list[index] = list[i]
				list[i] = temp
			}
		}
		return list
	},
};

module.exports = UIBonusGame
