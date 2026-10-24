var G = require("Global")
var GameG = require("GameGlobal")
var gameData = require("GameData")
var gameLayer = require("GameLayer")

function UISlotReel(root, poolSpine)
{
	let rootRect = root
	let rootParent = rootRect.parent
	let rootPoolSpine = poolSpine
	let target = []
	let pool = []
	let symbolHeight = 0 //單個符號高度
	let spinHeight = 0 //轉軸的高度
	let rectHeight = 0 //看得見的範圍高度
	let whiteColor = cc.Color(1,1,1,1)
	let blackColor = cc.Color(0,0,0,0.3)
	let sequenceSpin = null
//----->需重新編譯程式碼	let sequenceSpin = CS.DG.Tweening.DOTween.Sequence()
//----->需重新編譯程式碼	let sequenceLoop = CS.DG.Tweening.DOTween.Sequence()
	let stopSymbolID = null
	let stopReelResult = null //結算符號資料
	let stopReelIndex = 0
	let spinReelSetting = null //轉動符號資料
	let spinReelIndex = 0	
	let stopCallback = null
	let refreshPositionIndex
	let refreshPositionCount = 1
	let isSpinning = false //轉動中
	let symbolClickCallback = null // 點擊符號事件
	let changeUpgrade = false // 升級背景
	let changeSymbolName = false // 更換符號
	let readyMergeWild = false
	let upgradeReel = false
		
	let rootNearWin = cc.find("ChangeParent/ParticleNearWin", rootRect)
	rootNearWin.active = (false)
	
	let prefab = cc.find("Symbol", rootRect)	
	prefab.active = (false)
	
	let rootUpgradeDoor = cc.find("ChangeParent/RootUpgradeDoor", rootRect)
	rootUpgradeDoor.active = (false)
	let spineUpgradeDoor = cc.find("ChangeParent/RootUpgradeDoor/SkeletonGraphic (gold_slot)" , rootRect).getComponent(sp.Skeleton)
		
	let wildKey = ["w2", "w3", "w4"]
	let poolMergeWild = []
	
	//	for i=1, wildKey.length do
	for(let  i = 0;  i < wildKey.length; ++ i)
	{
		let key = wildKey[i]
		poolMergeWild[key] = []
		poolMergeWild[key].root = cc.find("ChangeParent/RootMerge_" + key, rootRect)
		poolMergeWild[key].root.active =(false)
		poolMergeWild[key].spine = []
		poolMergeWild[key].spine[0] = cc.find("ChangeParent/RootMerge_" + key + "/SkeletonGraphic1", rootRect).getComponent(sp.Skeleton)
		poolMergeWild[key].spine[1] = cc.find("ChangeParent/RootMerge_" + key + "/SkeletonGraphic2", rootRect).getComponent(sp.Skeleton)
		poolMergeWild[key].spine[2] = cc.find("ChangeParent/RootMerge_" + key + "/SkeletonGraphic3", rootRect).getComponent(sp.Skeleton)
		poolMergeWild[key].spine[3] = cc.find("ChangeParent/RootMerge_" + key + "/SkeletonGraphic4", rootRect).getComponent(sp.Skeleton)
	}
		
	let rootChangeParent = cc.find("ChangeParent", rootRect)
	rootChangeParent.parent = (rootRect.parent)
//----->需重新編譯程式碼	rootChangeParent:SetAsLastSibling()	
	rootChangeParent.name = rootRect.name + "_" + rootChangeParent.name
	
	let autoSequenceKey = 0
	let sequenceDict = []

	//取得Sequence
	let GetSequence = function(key)
	{
		if(key == null)
		{
			key = "AutoSequenceKey_" + autoSequenceKey
			autoSequenceKey = autoSequenceKey + 1
		}
		if(sequenceDict[key] == null)
		{
			//----->需重新編譯程式碼			sequenceDict[key] = CS.DG.Tweening.DOTween.Sequence()
		} 
	else
	{
		//----->需重新編譯程式碼			sequenceDict[key]:Kill()
		//----->需重新編譯程式碼			sequenceDict[key] = CS.DG.Tweening.DOTween.Sequence()
	}
		return sequenceDict[key]
	}
	//刪除Sequence
	let KillSequence = function(key)
	{
		if(sequenceDict[key] )
		{
			//----->需重新編譯程式碼			sequenceDict[key]:Kill()
		}
		sequenceDict[key] = null
	}
	//刪除全部Sequence
	let KillTotalSequence = function()
	{
		for(let k in (sequenceDict))
		{				
			let v = sequenceDict[k]
			KillSequence(k)
		}
	}
	
	let SetSprite = function(img,symbolName)
	{
		GameG.SetImageSprite(img, G.GetGamePName(), "symbol_" + symbolName)
	}
	
	let SetSpine = function(index,symbolName)
	{
		let temp = cc.find("SkeletonGraphic (sp_" + symbolName + ")" , rootPoolSpine,)
		if(temp != null )
		{
			let clone = cc.instantiate(temp)
			clone.parent = (pool[index].root)
//----->需重新編譯程式碼			clone:SetAsFirstSibling()
			clone.scale = 1
			clone.active =(true)
			clone.position = pool[index].rootPos.position
			pool[index].spine = clone.getComponent(sp.Skeleton)
			pool[index].spine.setAnimation(0, "idle", false)
		}
	}
		
	let SetUpgrade = function(index, upgrade)
	{
		pool[index].imgBg.active = (upgrade == true)
		
		// 如果結果是金輪，過程中沒有開啟，便留在停輪時再開門
		if(upgradeReel == true && changeUpgrade != true)
		{
			pool[index].imgBg.active =(false)
		} 
		else
		{
			changeUpgrade = upgrade
		}
				
		// 下個的符號 
		let nextIndex = index + 1
		if(nextIndex >= pool.length)
		{
			nextIndex = 0
		}
		
		if(upgrade != true)
		{
			if(pool[nextIndex].imgBg.activeSelf == true)
			{
				SetSprite(pool[nextIndex].imgBg, "bg_1")
			}
			return
		}
		
		// 下個的符號 
		nextIndex = index + 1
		if(nextIndex >= pool.length)
		{
			nextIndex = 0
		}
		
		if(pool[nextIndex].imgBg.activeSelf == false)
		{
			SetSprite(pool[index].imgBg, "bg_4")
		}
		else
		{
			SetSprite(pool[index].imgBg, "bg_3")
		}
	}
	
	let SetData = function(index, symbolID, symbolName, upgrade)
	{
		pool[index].root.name = prefab.name +"_"+ index
		pool[index].symbolID = symbolID
		pool[index].symbolName = symbolName
		
		pool[index].detail.txtSymbolID.text = symbolID
		pool[index].detail.txtSymbolName.text = symbolName
		
		symbolName = gameData.ChangeSymbolName(symbolName)
		pool[index].imgIcon.node.active = (symbolID == null)
		pool[index].imgBlur.node.active = (false)
		
		if(pool[index].spine != null)
		{
			pool[index].spine.destroy()
			pool[index].spine = null
		}
		
		SetUpgrade(index, upgrade)
		if(symbolID != null)
		{
			SetSpine(index,symbolName)
		}
		else
		{
			SetSprite(pool[index].imgIcon, "n_" + symbolName)
			SetSprite(pool[index].imgBlur, "b_" + symbolName)
		}
			
		if(symbolName == "s1")
		{
//----->需重新編譯程式碼			pool[index].root:SetAsFirstSibling()
		}
	}
	let ResetData = function(index)
	{
		pool[index].symbolID = null
		pool[index].detail.txtSymbolID.text = null
	}
			
	let CreateClone = function(index)
	{
		if(pool[index] != null) 
		{ 
			ResetData(index) 
			return null
		}
		let clone = cc.instantiate(prefab)
		if(clone == null)
		{
			return null 
		}
		clone.parent = (prefab.parent)
		clone.position = cc.v3(0, 0, 0)
		clone.scale = 1
		clone.name = prefab.name + index
		clone.active = (true)
		
		pool[index] = []
		pool[index].root = clone
		pool[index].btn = clone.getComponent(cc.Button)
		pool[index].rootPos = cc.find("RootPos", clone)
		pool[index].imgBg = cc.find("ImageBg", clone).getComponent(cc.Sprite)
		pool[index].imgBg.active = (false)
		pool[index].imgBg.name = pool[index].imgBg.name + "_" +rootRect.name + "_" + index
		pool[index].imgIcon = cc.find("ImageIcon", clone).getComponent(cc.Sprite)
		pool[index].imgBlur = cc.find("ImageBlur", clone).getComponent(cc.Sprite)
		pool[index].txtBet = cc.find("TextBet", clone).getComponent(cc.Label)
		pool[index].reScaleBet = pool[index].txtBet.scale
		let _width = rootRect.width
		let _y = (symbolHeight) * (index-1) * -1
		pool[index].root.position = cc.v2(0,_y)
		pool[index].root.width = _width
		pool[index].root.height = symbolHeight
		
		pool[index].detail = []
		pool[index].detail.root = cc.find("ImageDetail", clone)
		pool[index].detail.txtSymbolID = cc.find("ImageDetail/TextSymbolID", clone).getComponent(cc.Label)
		pool[index].detail.txtSymbolName = cc.find("ImageDetail/TextSymbolName", clone).getComponent(cc.Label)
		pool[index].detail.root.active =(gameData.ShowReelSymbolDetail)
		
		pool[index].btn.node.on('click',function()
		{
			if(symbolClickCallback != null)
			{
				GameG.PlayGameSound("se_click")
				let data = []
				data.symbolName = pool[index].symbolName
				symbolClickCallback(isSpinning,data)
			}
		})			
		refreshPositionIndex = pool.length - 1
	}
	
	let GetIndexByRow = function(row)
	{
		let index = refreshPositionIndex + row
		if(index >= pool.length)
		{
			index = index - pool.length
		}
		return index
	}
	
	// 刷新符號的位置
	let RefreshPosition = function(callback)
	{
		let _y = rootRect.position.y
		let SetPosition = function(i)
		{				
			if(stopSymbolID != null)
			{
				if(pool[GetIndexByRow(1)].symbolID == stopSymbolID)
				{
					return
				}
			}
			
			let _rootX = pool[i].root.position.x
			let _rootY = pool[i].root.position.y
			let _side = Math.round(_rootY + _y)
			let _line = Math.round((rootParent.height * 0.5 + symbolHeight * 0.5) * -1)
			// 超出框線的放到第一個
			if(_side <= _line)
			{
				pool[i].root.position = cc.v2(_rootX,_rootY + spinHeight)
				
				refreshPositionIndex = i
				if(callback != null)
				{
					callback(i)
				}
			}
		}
		
		let tempIndex = refreshPositionIndex
		
		//	for i=tempIndex, 1, -1 do
		for(let i = tempIndex; i >= 0; -- i)
		{
			if(i != tempIndex)
			{
				SetPosition(i)
			}
		}
		
		//	for i=pool.length, tempIndex, -1 do
		for(let i = pool.length - 1; i > tempIndex; -- i)
		{
			SetPosition(i)
		}
	}
	
	// 更改盤面結果
	this.SetReelResult = function(data)
	{
		let index = GetIndexByRow(data.Position.Row - 1)		
		let symbolID = data.Symbol.SymbolID
		let symbolName = data.Symbol.SymbolName
		SetData(index, symbolID, symbolName)
	}
	
	this.SetBackgroundResult = function(data)
	{
		upgradeReel = false
		let index = GetIndexByRow(data.Position.Row)
		let upgrade = (data.Type == "gold")
		// 先將全部背景塞成中間的，再計算頭尾
		pool[index].imgBg.active = (upgrade)
		if(upgrade == true)
		{
			SetSprite(pool[index].imgBg, "bg_3")
		}
	}
	
	// 更換輪軸資訊
	this.ChangeReelSetting = function(symbolGroup)
	{
		spinReelSetting = symbolGroup
		spinReelIndex = symbolGroup.length - 1
	}
	
	// 初始化輪軸資訊
	this.SetReelSetting = function(symbolGroup, totalCount)
	{
		symbolHeight = rootRect.height / totalCount
		spinHeight = symbolHeight * (totalCount)
		rectHeight = symbolHeight * gameData.RowCounts
		spinReelSetting = symbolGroup
		spinReelIndex = symbolGroup.length - 1
		
		//	for i=1, totalCount do
		for(let i = 0; i < totalCount; ++ i)
		{
			CreateClone(i)
			
			// 隨機設定初始畫面
			let index = Math.floor(Math.random() * (symbolGroup.length - 1) + 1)
			
			// 確保symbolID 不會有重複的問題
			let symbolID = null
			if(gameData.SpinDataMode == 0)
			{
				symbolID = symbolGroup[index].SymbolID
			}
			let symbolName = symbolGroup[index].SymbolName
			
			SetData(i, symbolID, symbolName)
		}
		
		RefreshPosition(null)
		
		// 初始化界面
		let _x = rootRect.position.x
		let _width = rootRect.width		
		rootChangeParent.position = cc.v3(_x + _width *0.5, 0, 0)
	}	
		
	let GetIndexBySymbolID = function(symbolID)
	{
		for(let i in pool)
		{
			if(pool[i].symbolID == symbolID)
			{
				return i
			}
		}
		return null
	}		
	
	this.ResetStart = function()
	{
		for(let i in pool)
		{
			pool[i].txtBet.text = ""
			if(pool[i].spine != null)
			{
				pool[i].spine.setAnimation(0, "stop", false)
			} 
			else
			{
				pool[i].imgIcon.active = (true)
				pool[i].imgBlur.active = (false)
			}
		}
	}
	
	// 註冊符號點擊事件
	this.SetSymbolClickCallback = function(callback)
	{
		symbolClickCallback = callback
	}	
		
	// 只顯示結果符號
	this.ShowResult = function()
	{
		let _y = rootRect.position.y
		
		for(let i in pool)
		{
			pool[i].root.active = (pool[i].symbolID != null)
		}
	}
	
	let HideBackground = function()
	{
		for(let i in pool)
		{
			pool[i].imgBg.parent = (pool[i].root)
//----->需重新編譯程式碼			pool[i].imgBg:SetAsFirstSibling()
		}
	}
		
	this.Update = function(dt)
	{
		// GameG.Print("Update : " + isSpinning)
		if(isSpinning == true)
		{
			let _x = rootRect.position.x
			let _y = rootRect.position.y
			let _timer = dt * gameData.SpinMoveTimer
			let movePercent = gameData.SpinPercent
			_y = _y + symbolHeight * movePercent * -1 * _timer
			rootRect.position = cc.v3(_x, _y, 0)
			
			if(stopSymbolID != null)
			{
				let index = GetIndexBySymbolID(stopSymbolID)
				
				if(index != null)
				{
					let _rootY = pool[index].root.position.y - symbolHeight * 1.5
					let _outBack = symbolHeight * 0.2 // 回彈的幅度
					if(_rootY + _y + _outBack <= 0)
					{
						isSpinning = false
						this.StopSpin(_rootY * -1)
					}
				}
			}
		}
		
		if(this.GetIsSpinning() == true)
		{
			RefreshPosition(function(index)
			{
				if(stopReelIndex < 0)
				{
					
				} 
				//更換資料
				else if(stopReelResult.length > stopReelIndex && stopReelIndex >= 0)
				{
					let symbolID = stopReelResult[stopReelIndex].SymbolID
					let symbolName = stopReelResult[stopReelIndex].SymbolName
					
					SetData(index, symbolID, symbolName)
					
					if(pool[index].spine != null)
					{
						pool[index].spine.setAnimation(0, "spin", false)
					}
					else
					{
						pool[index].imgIcon.node.active = (false)
						pool[index].imgBlur.node.active = (true)
					}
					stopReelIndex = stopReelIndex - 1
				}
				else
				{
					// 確保symbolID 不會有重複的問題
					let symbolID = null
					
					if(gameData.SpinDataMode == 0)
					{
						symbolID = spinReelSetting[spinReelIndex].SymbolID
					}
					let symbolName = spinReelSetting[spinReelIndex].SymbolName
					
					SetData(index, symbolID, symbolName)
					
					if(pool[index].spine != null)
					{
						pool[index].spine.setAnimation(0, "spin", false)
					} 
					else
					{
						pool[index].imgIcon.node.active = (false)
						pool[index].imgBlur.node.active = (true)
					}
					spinReelIndex = spinReelIndex - 1
					
					if(spinReelIndex <= 0)
					{
						spinReelIndex = spinReelSetting.length - 1
					}
				}
			})
		}
	},
	
	//開始轉動輪軸
	this.StartSpin = function(callback)
	{
		stopSymbolID = null
		stopReelResult = []
		stopReelIndex = gameData.RowCounts - 1
		isSpinning = false
		changeSymbolName = null
		readyMergeWild = false
		
		//隨機設定升級背景
		if(changeUpgrade != true)
		{
			let randomIndex = Math.floor(Math.random() * 100) + 1
			changeUpgrade = (randomIndex >= 50)
		}
		// 開始轉動把輪軸拉回初始位置
		let _x = rootRect.position.x
		let _y = rootRect.position.y
		rootRect.position = cc.v2(_x,0)
		refreshPositionCount = 2
		
		for(let i in pool)
		{
			pool[i].root.active = (true)
			
			// 開始轉動把輪軸拉回初始位置
			let _rootX = pool[i].root.position.x
			let _rootY = pool[i].root.position.y
			pool[i].root.position = cc.v2(_rootX,_rootY + _y)
			
			// 確保symbolID 不會有重複的問題
			if(gameData.SpinDataMode == 1)
			{
				ResetData(i)
			}	
		}
		
		// 回復
		HideBackground()
		
		for(let key in (poolMergeWild))
		{ 
			let v = poolMergeWild[key]
			poolMergeWild[key].root.active =(false)
		}
		
		
		if(sequenceSpin != null)
		{
			sequenceSpin.stop()
		}
		
		sequenceSpin = GameG.NewTween(rootRect)
		sequenceSpin.to(0.5, {position: cc.v2(_x, rootRect.position.y  + symbolHeight * 0.5)})
		sequenceSpin.call(function()
		{
			if(callback != null)
			{
				callback()
			}
			for(let i in pool)
			{
				if(pool[i].spine != null)
				{
					pool[i].spine.setAnimation(0, "spin", false)
				} 
				else
				{
					pool[i].imgIcon.node.active = (false)
					pool[i].imgBlur.node.active = (true)
				}
			}
			isSpinning = true
		})
		sequenceSpin.start()
		
//----->需重新編譯程式碼		sequenceLoop:Kill()
//----->需重新編譯程式碼		sequenceSpin:Kill()
//----->需重新編譯程式碼		sequenceSpin = CS.DG.Tweening.DOTween.Sequence()
//----->需重新編譯程式碼		sequenceSpin:Append(rootRect:DOAnchorPosY(rootRect.anchoredPosition.y  + symbolHeight * 0.4, 0.23))
//----->需重新編譯程式碼		sequenceSpin.call(function(){ 	
//----->需重新編譯程式碼			if(callback != null){
//----->需重新編譯程式碼				callback()
//----->需重新編譯程式碼			}
//----->需重新編譯程式碼for(let  i = 1;  i <=  pool.length; ++ i){		//			for i=1, pool.length do		
//----->需重新編譯程式碼				if(pool[i].spine != null){
//----->需重新編譯程式碼					pool[i].spine.setAnimation(0, "spin", false);
//----->需重新編譯程式碼} 
//----->需重新編譯程式碼				else{
//----->需重新編譯程式碼					pool[i].imgIcon.active =(false)
//----->需重新編譯程式碼					pool[i].imgBlur.active =(true)
//----->需重新編譯程式碼				}
//----->需重新編譯程式碼			}
//----->需重新編譯程式碼			sequenceLoop = CS.DG.Tweening.DOTween.Sequence()
//----->需重新編譯程式碼			sequenceLoop:SetLoops(-1,CS.DG.Tweening.LoopType.Restart)
//----->需重新編譯程式碼			sequenceLoop:OnUpdate(function(){
//----->需重新編譯程式碼				let _y = rootRect.anchoredPosition.y
//----->需重新編譯程式碼				let _timer = CS.UnityEngine.Time.deltaTime * gameData.SpinMoveTimer
//----->需重新編譯程式碼				let movePercent = gameData.SpinPercent
//----->需重新編譯程式碼				rootRect:Translate(cc.v3(0,symbolHeight * movePercent * -1,0) * _timer)
//----->需重新編譯程式碼				RefreshPosition(function(index){
//----->需重新編譯程式碼					if(stopReelIndex <= 0){
//----->需重新編譯程式碼						let symbolName = spinReelSetting[spinReelIndex].SymbolName
//----->需重新編譯程式碼						SetData(index, null, symbolName, changeUpgrade)
//----->需重新編譯程式碼					//更換資料
//----->需重新編譯程式碼} 
//----->需重新編譯程式碼					else if(stopReelResult.length >= stopReelIndex && stopReelIndex > 0){
//----->需重新編譯程式碼
//----->需重新編譯程式碼						let symbolID = stopReelResult[stopReelIndex].SymbolID
//----->需重新編譯程式碼						let symbolName = stopReelResult[stopReelIndex].SymbolName
//----->需重新編譯程式碼						let upgrade = stopReelResult[stopReelIndex].Upgrade
//----->需重新編譯程式碼						SetData(index, symbolID, symbolName, upgrade)	
//----->需重新編譯程式碼						if(pool[index].spine != null){					
//----->需重新編譯程式碼							pool[index].spine.setAnimation(0, "spin", false);
//----->需重新編譯程式碼} 
//----->需重新編譯程式碼						else{
//----->需重新編譯程式碼							pool[index].imgIcon.active =(false)
//----->需重新編譯程式碼							pool[index].imgBlur.active =(true)
//----->需重新編譯程式碼						}
//----->需重新編譯程式碼						stopReelIndex = stopReelIndex -1						
//----->需重新編譯程式碼} 
//----->需重新編譯程式碼					else{
//----->需重新編譯程式碼						let symbolName = spinReelSetting[spinReelIndex].SymbolName
//----->需重新編譯程式碼						if(changeSymbolName != null){
//----->需重新編譯程式碼							symbolName = changeSymbolName
//----->需重新編譯程式碼						}
//----->需重新編譯程式碼						SetData(index, null, symbolName, changeUpgrade)
//----->需重新編譯程式碼						if(pool[index].spine != null){
//----->需重新編譯程式碼							pool[index].spine.setAnimation(0, "spin", false);
//----->需重新編譯程式碼} 
//----->需重新編譯程式碼						else{
//----->需重新編譯程式碼							pool[index].imgIcon.active =(false)
//----->需重新編譯程式碼							pool[index].imgBlur.active =(true)
//----->需重新編譯程式碼						}
//----->需重新編譯程式碼						spinReelIndex = spinReelIndex -1
//----->需重新編譯程式碼						if(spinReelIndex <= 0){
//----->需重新編譯程式碼							spinReelIndex = spinReelSetting.length
//----->需重新編譯程式碼						}
//----->需重新編譯程式碼					}
//----->需重新編譯程式碼				})
//----->需重新編譯程式碼				
//----->需重新編譯程式碼				let _y = rootRect.anchoredPosition.y
//----->需重新編譯程式碼				if(stopSymbolID != null){
//----->需重新編譯程式碼					let index = GetIndexBySymbolID(stopSymbolID)
//----->需重新編譯程式碼					if(index != null){
//----->需重新編譯程式碼						let _rootY = pool[index].root.anchoredPosition.y
//----->需重新編譯程式碼						let _outBack = symbolHeight *0.2 // 回彈的幅度
//----->需重新編譯程式碼						if(_rootY + _y + _outBack <= 0){
//----->需重新編譯程式碼							sequenceLoop:Kill()
//----->需重新編譯程式碼							sequenceSpin = CS.DG.Tweening.DOTween.Sequence()
//----->需重新編譯程式碼							sequenceSpin:AppendCallback(function(){
//----->需重新編譯程式碼								GameG.PlayGameSound("se_normalstop")
//----->需重新編譯程式碼for(let  i = 1;  i <= pool.length; ++ i){//								for i=1,pool.length do
//----->需重新編譯程式碼									if(pool[i].spine != null){
//----->需重新編譯程式碼										pool[i].spine.setAnimation(0, "stop", true);
//----->需重新編譯程式碼} 
//----->需重新編譯程式碼									else{
//----->需重新編譯程式碼										pool[i].imgIcon.active =(true)
//----->需重新編譯程式碼										pool[i].imgBlur.active =(false)
//----->需重新編譯程式碼									}
//----->需重新編譯程式碼								}
//----->需重新編譯程式碼							})
//----->需重新編譯程式碼							sequenceSpin:Append(rootRect:DOAnchorPosY(_rootY * -1, 0.2))
//----->需重新編譯程式碼							sequenceSpin:OnComplete(function(){ 
//----->需重新編譯程式碼								isSpinning = false
//----->需重新編譯程式碼								ShowResult()
//----->需重新編譯程式碼								if(stopCallback != null){
//----->需重新編譯程式碼									stopCallback()
//----->需重新編譯程式碼								}	
//----->需重新編譯程式碼							})
//----->需重新編譯程式碼						}
//----->需重新編譯程式碼					}
//----->需重新編譯程式碼				}
//----->需重新編譯程式碼			})
//----->需重新編譯程式碼		})
	}
	
	this.StopSpin = function(targetY)
	{
		if(sequenceSpin != null)
		{
			sequenceSpin.stop()
		}
		
        let _x = rootRect.position.x
		sequenceSpin = GameG.NewTween(rootRect)
		sequenceSpin.call(function()
		{
			GameG.PlayGameSound("se_normalstop")
			
			for(let i in pool)
			{
				if(pool[i].spine != null)
				{
					pool[i].spine.setAnimation(0, "stop", true)
				}
				else
				{
					pool[i].imgIcon.node.active = (true)
					pool[i].imgBlur.node.active = (false)
				}
			}
		})
		sequenceSpin.to(0.2, {position: cc.v2(_x, targetY)})
		sequenceSpin.call(function()
		{
			isSpinning = false
			if(stopCallback != null)
			{
				stopCallback()
			}
		})
		sequenceSpin.start()
	};
	
	//停止轉動輪軸(symbolID 第一行的符號)
	this.StopSpinModeSymbol = function(symbolID,callback)
	{
		stopCallback = callback
		
		if (symbolID == 0) 
		{
			gameLayer.ShowMessage("结果资料错误，請確認伺服器資料", 5)
			stopSymbolID = pool[0].symbolID
		}
		
		stopSymbolID = symbolID
	}
	
	//停止轉動輪軸(reelResult 整列的符號)
	this.StopSpinModeData = function(reelResult, callback)
	{
		stopCallback = callback
		stopReelResult = reelResult
		
		for(let i in reelResult)
		{
			if(stopSymbolID == null)
			{
				stopSymbolID = reelResult[i].SymbolID
			}
		}
	}
	
	// 預知結果
	this.PredictionResult = function(reelResult, upgrad)
	{
		upgradeReel = upgrad
		// 金輪未升級背景的才須提前變換背景
		if(upgrad != true)
		{
			changeUpgrade = reelResult[reelResult.length - 1].Upgrade == true
		}
	}
		
	// 取得輪軸是否在運轉
	this.GetIsSpinning = function()
	{
		return isSpinning
	}
	
	//取得停輪符號
	this.GetStopSymbolID = function()
	{
		return stopSymbolID
	}
	
	// 取得符號的世界座標
	this.GetSymbolWorldPos = function(index)
	{
		return pool[index].rootPos.position
	}
	
	//取得圖片名稱
	this.GetSymbolName = function(symbolID)
	{
		let index = GetIndexBySymbolID(symbolID)
		return pool[index].symbolName
	}
	
	//顯示亮框
	this.ShowWin = function(symbolID, multi)
	{
		let index = GetIndexBySymbolID(symbolID)
		if(pool[index].spine != null)
		{
			if(multi > 2)
			{
				pool[index].spine.setAnimation(0, "win_xx_start", true);
				pool[index].spine.addAnimation(0, "win_xx", true , 1);
			} 
			else if(multi == 2)
			{
				pool[index].spine.setAnimation(0, "win_x2_start", true);
				pool[index].spine.addAnimation(0, "win_x2", true , 1);
			} 
			else
			{
				pool[index].spine.setAnimation(0, "win", true);
			}
		} 
		else
		{
			pool[index].imgIcon.active = (true)
			pool[index].imgBlur.active = (false)
		}
	}
	
	//顯示倍率
	this.ShowBet = function(symbolID,bet,showTimer)
	{
		if(bet != null && bet <= 1){ bet = null }
		let index = GetIndexBySymbolID(symbolID)
		pool[index].txtBet.text = bet
		pool[index].txtBet.scale = pool[index].reScaleBet
		
		//----->需重新編譯程式碼		let sequence = CS.DG.Tweening.DOTween.Sequence()
		//----->需重新編譯程式碼		sequence:Append(pool[index].txtBet:DOScale(pool[index].reScaleBet * 2, showTimer))
	}
	
	// 顯示聽牌效果
	this.ShowNearWin = function()
	{
		// local _offsetX = rootParent.anchoredPosition.x
		// _offsetX = _offsetX - rootParent.sizeDelta.x * 0.5
		// _offsetX = _offsetX + rootRect.anchoredPosition.x
		// _offsetX = _offsetX + rootRect.sizeDelta.x * 0.5
		let _offsetX = 0
		let _x = rootRect.width * 0.5
		let _y = rectHeight * 0.5
		rootNearWin.position = cc.v2(-_x + _offsetX, _y)
		
		rootNearWin.active =(true)
		GameG.PlayGameSound("se_nearwin")
		
		let runTimer = 0.05
		let gapTimer = 0.04
		let sequence = GetSequence("near_win")
		//----->需重新編譯程式碼		sequence:SetLoops(-1,CS.DG.Tweening.LoopType.Restart)
		//----->需重新編譯程式碼		sequence:Append(rootNearWin:DOAnchorPos(cc.v2( _x + _offsetX,  _y)	, runTimer))
		//----->需重新編譯程式碼		sequence:AppendInterval(gapTimer)
		//----->需重新編譯程式碼		sequence:Append(rootNearWin:DOAnchorPos(cc.v2( _x + _offsetX, -_y)	, runTimer))
		//----->需重新編譯程式碼		sequence:AppendInterval(gapTimer)
		//----->需重新編譯程式碼		sequence:Append(rootNearWin:DOAnchorPos(cc.v2(-_x + _offsetX, -_y)	, runTimer))
		//----->需重新編譯程式碼		sequence:AppendInterval(gapTimer)
		//----->需重新編譯程式碼		sequence:Append(rootNearWin:DOAnchorPos(cc.v2(-_x + _offsetX,  _y)	, runTimer))
		//----->需重新編譯程式碼		sequence:AppendInterval(gapTimer)
	}
	
	// 關閉聽牌效果
	this.HideNearWin = function()
	{
		KillSequence("near_win")			
		rootNearWin.active = false
	}
		
	this.onExit = function()
	{	
		KillTotalSequence()
		if(sequenceLoop != null)
		{
			//----->需重新編譯程式碼			sequenceLoop:Kill()
			sequenceLoop = null
		}
		
		if(sequenceSpin != null)
		{
			//----->需重新編譯程式碼			sequenceSpin:Kill()		
			sequenceSpin = null
		}
		
		for(let i in pool)
		{	
			pool[i] = null	
		}
	}
	
	// 取得是否升級輪軸
	this.CheckShowUpgradeDoor = function()
	{
		for(let i = 0;  i < 4; ++ i)
		{
			let index = GetIndexByRow(i)
			if(pool[index].imgBg.activeSelf == false)
			{
				return true
			}
		}
		return false
	}
	
	// 顯示升級輪軸關門
	let ShowUpgradeDoor = function(callback)
	{
		GameG.PlayGameSound("se_reelupgrade")
		rootUpgradeDoor.active =(true)
		spineUpgradeDoor.setAnimation(0, "animation", false);
		let sequence = GetSequence()
		//----->需重新編譯程式碼		sequence:AppendInterval(gameData.UpgradeDoorTimer * 0.5)
		//----->需重新編譯程式碼		sequence.call(function(){
		//----->需重新編譯程式碼			if(callback != null){
		//----->需重新編譯程式碼				callback()
		//----->需重新編譯程式碼			}
		//----->需重新編譯程式碼		})
		//----->需重新編譯程式碼		sequence:AppendInterval(gameData.UpgradeDoorTimer * 0.5)
		//----->需重新編譯程式碼		sequence.call(function(){
		//----->需重新編譯程式碼			rootUpgradeDoor.active =(false)
		//----->需重新編譯程式碼		})
	}
	
	// 顯示升級背景
	this.ShowUpgradeBackground = function()
	{
		ShowUpgradeDoor(function()
		{
			changeUpgrade = true
			
			for(let i in pool)
			{
				pool[i].imgBg.active =(true)
				SetSprite(pool[i].imgBg, "bg_2")
			}
		})
	}
		
	let GetMergeWild = function(reelResult)
	{
		let symbolName = gameData.ChangeSymbolName(reelResult[0].SymbolName)
		if(symbolName == "w1")
		{
			
		} 
		else if(symbolName == "w2")
		{

		} 
		else if(symbolName == "w3")
		{

		} 
		else if(symbolName == "w4")
		{

		} 
		else
		{
			return null
		}
		
		for(let i in reelResult)
		{
			if(gameData.ChangeSymbolName(reelResult[i].SymbolName) != symbolName)
			{
				return null
			}
		}			
		return symbolName
	}
	
	// 關門金輪，更換符號百搭(只有freespin才會觸發)
	this.ReadyMergeWild = function(reelResult, callback)
	{
		let key = GetMergeWild(reelResult)
		if(key == null)
		{
			if(callback != null)
			{
				callback()
			}
			return
		}
		// 已經更換過符號
		if(readyMergeWild == true)
		{
			if(callback != null)
			{
				callback()
			}
			return
		}
		
		readyMergeWild = true
		
		//1.輪軸開關門
		ShowUpgradeDoor(function()
		{
			//2.符號Wild在後面跑
			changeSymbolName = key			
		})
		
		let sequence = GetSequence()
		//----->需重新編譯程式碼		sequence:AppendInterval(gameData.UpgradeDoorTimer)
		//----->需重新編譯程式碼		sequence.call(function(){
		//----->需重新編譯程式碼			if(callback != null){
		//----->需重新編譯程式碼				callback()
		//----->需重新編譯程式碼			}
		//----->需重新編譯程式碼		})
		if(callback != null)
		{
			callback()
		}
	}
	
	// 合併百搭(只有freespin才會觸發)
	this.ShowMergeWild = function()
	{
		if(gameData.FreeGame == null)
		{
			return false
		}
		
		let key = GetMergeWild(stopReelResult)
		key = gameData.ChangeSymbolName(key)
		if(poolMergeWild[key] == null)
		{
			return false
		}
		
		if(poolMergeWild[key].root.activeSelf == true)
		{
			return true
		}
		
		// for index=1, poolMergeWild[key].spine.length do
		for(let index = 0; index < poolMergeWild[key].spine.length; ++ index)
		{
			let _y = (symbolHeight) * (index -2) * -1 + 60
			poolMergeWild[key].spine[index].position = cc.v2(0,_y)
		}
		
		// 1.顯示四個符號Wild
		poolMergeWild[key].root.active = true
		
		//	for i=1, pool.length do
		for(let i = 0;  i < pool.length; ++ i)
		{
			pool[i].root.active =(false)
		}
		// 2.四個符號Wild展開合併效果
		// for index=1, poolMergeWild[key].spine.length do
		for(let index = 0; index < poolMergeWild[key].spine.length; ++ index)
		{
			let _y = poolMergeWild[key].spine[index].rectTransform.position.y
			if(index == 1)
			{
				_y = _y + (symbolHeight * 0.3)
			}
			else if(index == 2)
			{
				_y = _y + (symbolHeight * 0.15)
			} 
			else if(index == 3)
			{
				_y = _y - (symbolHeight * 0.15)
			} 
			else if(index == 4)
			{
				_y = _y - (symbolHeight * 0.3)
			}
		}
			
		poolMergeWild[key].spine[index].active =(true)
		poolMergeWild[key].spine[index].setAnimation(0, "entrance", true);	
		let sequence = GetSequence()
		//----->需重新編譯程式碼			sequence:Append(poolMergeWild[key].spine[index].rectTransform:DOAnchorPosY(_y, 0.5))
		//----->需重新編譯程式碼			sequence:Append(poolMergeWild[key].spine[index].rectTransform:DOAnchorPosY(0, 0.2))
		//----->需重新編譯程式碼			sequence.call(function(){
		//----->需重新編譯程式碼				poolMergeWild[key].spine[index].active =(index == 1)		
		//----->需重新編譯程式碼			})
	
		//3.播放合成一個符號動畫
		let sequence3 = GetSequence()
		//----->需重新編譯程式碼		sequence3:AppendInterval(0.7)
		//----->需重新編譯程式碼		sequence3.call(function(){
		//----->需重新編譯程式碼			GameG.PlayGameSound("se_multiplier")
		//----->需重新編譯程式碼			poolMergeWild[key].spine[1].setAnimation(0, "start", false);
		//----->需重新編譯程式碼			poolMergeWild[key].spine[1].addAnimation(0, "idle", true, 1);
		//----->需重新編譯程式碼		})
		return true
	}
};

module.exports = UISlotReel
