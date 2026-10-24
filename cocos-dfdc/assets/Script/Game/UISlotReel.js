var G = require("Global")
var GameG = require("GameGlobal")
var gameData = require("GameData")

/** 用途: 輪軸 */
function UISlotReel(root, poolSpine) {
    
    let rootRect = root
    let rootParent = rootRect.parent
    let rootPoolSpine = poolSpine
    let pool = []
    let symbolHeight = 0 //單個符號高度
    let spinHeight = 0 //轉軸的高度
    let rectHeight = 0 //看得見的範圍高度
    let whiteColor = new cc.Color(1,1,1)
    let sequenceSpin = null
    let stopSymbolID = null
    let stopReelSetting = null //結算符號資料
    let stopReelIndex = 0
    let spinReelSetting = null //轉動符號資料
    let spinReelIndex = 0	
    let stopCallback = null
    let refreshPositionIndex = 0
    let refreshPositionCount = 0
    let isSpinning = false //轉動中
        
    let rootNearWin = cc.find("near_win", rootRect)
    rootNearWin.active = false
    rootNearWin.parent = cc.find("Canvas/GameLayer/UISlotParticle")

    let animationNearWin = rootNearWin.getComponent(cc.Animation)
        
    let prefab = cc.find("Symbol", rootRect)
    prefab.active = false

    let SetSprite = function(img,symbolName){
        GameG.SetImageSprite(img, "UI/Symbol", "symbol_" + symbolName)
        if(symbolName == "s1" || symbolName == "w1"){
            img.node.scale = 1.6
        }
        else{
            img.node.scale = 1
        }
    };
            
    let SetData = function(index, symbolID, symbolName){
        pool[index].root.name = prefab.name + "_" + index
        pool[index].symbolID = symbolID
        pool[index].symbolName = symbolName
        
        pool[index].detail.txtSymbolID.string = symbolID
        pool[index].detail.txtSymbolName.string = symbolName
        
        symbolName = gameData.ChangeSymbolName(symbolName)
        
        pool[index].imgIcon.node.name = symbolName
        SetSprite(pool[index].imgIcon,symbolName)
        
        if (pool[index].anim)
            pool[index].anim.SetTrigger(symbolName)
    };
    
    let ResetData = function(index){
        pool[index].symbolID = null
        pool[index].detail.txtSymbolID.string = ""
        if(pool[index].spine != null){
            pool[index].spine.destroy()
            pool[index].spine = null
        }
    };
            
    let CreateClone = function(index){
        if(pool[index] != null){
            ResetData(index) 
            return null
        }
        let clone = cc.instantiate(prefab);
        if(clone == null) return null
        prefab.parent.addChild(clone)
        clone.position = cc.v3(0,0,0)
        clone.scale = 1
        clone.name = prefab.name + index
        clone.active = true
        
        pool[index] = []
        pool[index].root = clone
        pool[index].imgIcon = cc.find("ImageIcon", clone).getComponent(cc.Sprite)
        pool[index].anim = cc.find("ImageIcon", clone).getComponent("AnimationController")
        pool[index].txtBet = cc.find("TextBet", clone).getComponent(cc.Label)
        pool[index].reScaleBet = pool[index].txtBet.scale
        //let _width = this.rootRect.sizeDelta.x
        let _width = rootRect.width
        let _y = symbolHeight * index * -1
        pool[index].root.position = cc.v2(0,_y)
        //pool[index].root.anchoredPosition = cc.v2(0,_y)
        pool[index].root.width = _width
        pool[index].root.height = symbolHeight
        
        pool[index].detail = []
        pool[index].detail.root = cc.find("ImageDetail", clone)
        pool[index].detail.txtSymbolID = cc.find("ImageDetail/TextSymbolID", clone).getComponent(cc.Label)
        pool[index].detail.txtSymbolName = cc.find("ImageDetail/TextSymbolName", clone).getComponent(cc.Label)
        pool[index].detail.root.active = gameData.ShowReelSymbolDetail
    };
	/** 盤面上位置取得索引值 */
    let GetIndexByRow = function(row){
        let index = refreshPositionIndex + row
        if(index >= pool.length){
            index = index - pool.length +1
        }
        return index
    };
	/** 刷新符號位置 */
    let RefreshPosition = function(callback){
        //let _y = this.rootRect.anchoredPosition.y
        let _y = rootRect.position.y
        let SetPosition = function(i){ 
			if(stopSymbolID != null){
				if(pool[GetIndexByRow(1)].symbolID == stopSymbolID){
					return
				}
			}
			
            //let _rootX = pool[i].root.anchoredPosition.x
            let _rootX = pool[i].root.position.x
            //let _rootY = pool[i].root.anchoredPosition.y
            let _rootY = pool[i].root.position.y
            let _side = Math.round(_rootY + _y)
            let _line = Math.round((rootParent.height * 0.5 + symbolHeight * 0.5) * -1)
            // 超出框線的放到第一個
            if(_side <= _line){
                let _targetY = refreshPositionCount * symbolHeight
                //pool[i].root.anchoredPosition = cc.v2(_rootX,_targetY)	
                pool[i].root.position = cc.v2(_rootX,_targetY)	
                refreshPositionIndex = i
                refreshPositionCount = refreshPositionCount +1
                if(callback != null){
                    callback(i)
                }
            }
        }
        
        let tempIndex = refreshPositionIndex
        
        for (let i = tempIndex; i > 0; --i){
            if(i != tempIndex){
                SetPosition(i)
            }
        }
        for (let i = pool.length -1; i > 0; --i){
            SetPosition(i)
        }
    };
    
    let GetIndexBySymbolID = function(symbolID){
        for (let i = 1; i < pool.length; ++i){
            if(pool[i].symbolID == symbolID){
                return i
            }
        }
        return null
    };


    this.ResetStart = function(){
        for (let i = 1; i < pool.length; ++i){
            pool[i].imgIcon.active = true
            pool[i].imgIcon.color = whiteColor
            pool[i].txtBet.string = ""
            if (pool[i].anim)
                pool[i].anim.SetBool("win",false)
        }
    };

    // 初始化輪軸資訊
    this.SetReelSetting = function(symbolGroup,totalCount){
        //GameG.Print(symbolGroup)
        //symbolHeight = rootRect.sizeDelta.y / totalCount
        symbolHeight = rootRect.height / totalCount
        spinHeight = symbolHeight * (totalCount)
        rectHeight = symbolHeight * gameData.RowCounts
        spinReelSetting = symbolGroup
        spinReelIndex = symbolGroup.length -1
        
        for (let i = 1; i <= totalCount; ++i){
            CreateClone(i)
            
            // 隨機設定初始畫面
            let index = G.getRandom(1, symbolGroup.length) - 1
            let symbolID = null
            // 確保symbolID 不會有重複的問題
            if(gameData.SpinDataMode == 0){
                symbolID = symbolGroup[index].SymbolID
            }
            let symbolName = symbolGroup[index].SymbolName
            SetData(i, symbolID, symbolName)
        }
        
        RefreshPosition(null)		
    };
    
    this.Update = function(dt){		 
        if (isSpinning == true){
			let _x = rootRect.position.x
			let _y = rootRect.position.y
			let _timer = dt * gameData.SpinMoveTimer
			let movePercent = gameData.SpinPercent
			_y = _y + symbolHeight * movePercent * -1 * _timer
			rootRect.position = cc.v3(_x, _y,0)   

			// _y = rootRect.position.y
			if(stopSymbolID != null){
				let index = GetIndexBySymbolID(stopSymbolID)
				if(index != null){
					let _rootY = pool[index].root.position.y - symbolHeight * 1.5
					let _outBack = symbolHeight *0.2 // 回彈的幅度
					if(_rootY + _y + _outBack <= 0){
						isSpinning = false
                        RefreshPosition(null)
						this.StopSpin(_rootY *-1)
					}
				}
			}			
		}
		
		if(this.GetIsSpinning() == true){
			RefreshPosition(function(index)	{
				if(stopReelIndex <= 0){
				}
				// 更換資料
				else if(stopReelSetting.length >= stopReelIndex && stopReelIndex > 0){
					let symbolID = stopReelSetting[stopReelIndex].SymbolID
					let symbolName = stopReelSetting[stopReelIndex].SymbolName
					SetData(index, symbolID, symbolName)
					stopReelIndex = stopReelIndex -1
				}
				else{
					// 確保symbolID 不會有重複的問題
					let symbolID =  null
					if(gameData.SpinDataMode == 0){
						symbolID = spinReelSetting[spinReelIndex].SymbolID
					}
					let symbolName = spinReelSetting[spinReelIndex].SymbolName
					SetData(index, symbolID, symbolName)
					spinReelIndex = spinReelIndex -1
					if(spinReelIndex <= 0){
						spinReelIndex = spinReelSetting.length -1
					}
				}
			})
		}
    };

    //開始轉動輪軸(movePercent 每幀移動每隔符號的百分比)
    this.StartSpin = function(){	
        stopSymbolID = null
        stopReelSetting = {}
        stopReelIndex = gameData.RowCounts
        isSpinning = false
        // 開始轉動把輪軸拉回初始位置
        let _x = rootRect.position.x  
        let _y = rootRect.position.y
		let _targetY = rootParent.height * 0.5    
        rootRect.position = cc.v2(_x, _targetY) 		
		// 輪軸在初始位置，子物件相對應位置 (註解高度為 100)
		// [index : refreshPositionCount : positionY]
		// [4 : 1       : 100   ] (refreshPositionCount)
		// [5 : 0       : 0     ] (startIndex)
		// [1 : default : -100  ] 
		// [2 : default : -200  ]
		// [3 : default : -300  ]
        refreshPositionCount = 1		
		let startIndex = GetIndexByRow(1)
        for (let i = startIndex; i < pool.length + startIndex -1; ++i){
			let index = i
			if(index >= pool.length)
				index = index - pool.length +1
			
            pool[index].root.active = true
            // 開始轉動把輪軸拉回初始位置
            let _rootX = pool[index].root.position.x
            let _rootY = symbolHeight * (i-startIndex) * -1
            pool[index].root.position = cc.v2(_rootX, _rootY)    
            // 確保symbolID 不會有重複的問題
            if(gameData.SpinDataMode == 1){
                ResetData(index)
            }
        }
		
        RefreshPosition(null)
		
		if(sequenceSpin != null)
			sequenceSpin.stop()
		
		sequenceSpin = cc.tween(rootRect)
        .to(0.5, {position: cc.v2(_x, rootRect.position.y  + symbolHeight *0.5)})
        .call(function(){						
			for (let i = 1; i < pool.length; ++i){
                if (pool[i].anim){
                    pool[i].anim.SetBool("spin",true)
                    pool[i].anim.SetBool("win",false)
                }
            }

			isSpinning = true
        })
		.start()	
    };
	
	this.StopSpin = function(targetY){
		if(sequenceSpin != null)
			sequenceSpin.stop()
		
        let _x = rootRect.position.x  
		sequenceSpin = cc.tween(rootRect)
        .to(0.25, {position: cc.v2(_x, targetY)})
        .call(function(){
			sequenceSpin = null
			GameG.PlayGameSound("se_normalstop")
			for (let i = 1; i < pool.length; ++i){
				if (pool[i].anim)
					pool[i].anim.SetBool("spin",false)
			}
			if(stopCallback != null){
				stopCallback()
			}
        })
		.start()	
	},
    
    //停止轉動輪軸(symbolID 第一行的符號)
    this.StopSpinModeSymbol = function(symbolID,callback){
        stopCallback = callback
        if (symbolID == 0) {
            let gameLayer = require("GameLayer")
            gameLayer.ShowMessage("结果资料错误，請確認伺服器資料", 5)
            stopSymbolID = pool[1].symbolID
        }
        
        stopSymbolID = symbolID
    },

    //停止轉動輪軸(reelSetting 整列的符號)
    this.StopSpinModeData = function(reelSetting,callback){
        stopCallback = callback
        stopReelSetting = reelSetting
        for (let i in reelSetting){
            if(stopSymbolID == null){
                stopSymbolID = reelSetting[i].SymbolID
            }
        }
    };
    
    //取得輪軸是否在運轉
    this.GetIsSpinning = function(){
		if(isSpinning == false)
			return false
		
		if(sequenceSpin == null)
			return false
			
        return isSpinning
    };
    
    //取得停輪符號
    this.GetStopSymbolID = function(){
        return stopSymbolID
    };
        
    this.GetSymbolWorldPos = function(symbolID){
        let index = GetIndexBySymbolID(symbolID)
        let position = pool[index].root.position
        //因為中心點在符號的左上方
        //let _x = pool[index].root.sizeDelta.x * 0.5
        let _x = pool[index].root.width * 0.5
        //let _y = pool[index].root.sizeDelta.y * 0.5 * -1
        let _y = pool[index].root.height * 0.5 * -1
        position = position + cc.v3(_x,_y,0)
        return position
    };
    
    //取得圖片名稱
    this.GetSymbolName = function(symbolID){
        let index = GetIndexBySymbolID(symbolID)
        return pool[index].symbolName
    };
        
    //顯示亮框
    this.ShowWin = function(symbolID){
        let index = GetIndexBySymbolID(symbolID)
        if (pool[index].anim)
            pool[index].anim.SetBool("win",true)
    },
    
    //顯示倍率
    this.ShowBet = function(symbolID,bet,showTimer){
        if(bet != null && bet <= 1) bet = null
        let index = GetIndexBySymbolID(symbolID)
        pool[index].txtBet.string = bet
        pool[index].txtBet.scale = pool[index].reScaleBet
        

        cc.tween(pool[index].txtBet.node)
        .to(showTimer, { scale: pool[index].reScaleBet * 2 })
		.start()
        //let sequence = CS.DG.Tweening.DOTween.Sequence()
        //sequence.Append(pool[index].txtBet.transform.DOScale(pool[index].reScaleBet * 2, showTimer))
    };
    
    // 顯示聽牌效果
    this.ShowNearWin = function(){
		let _x = rootRect.position.x + rootRect.width * 0.5
        let _y = rectHeight * 0.5
        rootNearWin.position = cc.v2(_x, 0)
        rootNearWin.active = true
        GameG.PlayGameSound("se_nearwin")

        animationNearWin.play('243frame')
    };
    
    // 關閉聽牌效果
    this.HideNearWin = function(){        
        rootNearWin.active = false
    };
    
    this.onExit = function(){        
        if(sequenceSpin != null){
            sequenceSpin.stop()		
            sequenceSpin = null
        }
                
        for (let i = 1; i < pool.length; ++i){
            pool[i] = null
        }
    };
    
}
 
module.exports = UISlotReel;