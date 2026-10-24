var GameG = require("GameGlobal")
var gameData = require("GameData")
var UISlotReel = require("UISlotReel")

/** 用途: 盤面 */
var UISlot = {
    extends: cc.Component,

    KillTotalSequence(){
        if (this.tween)
            this.tween.stop()
    },

    ResetReel() {
        for (var i = 1; i < this.poolReel.length; ++i) {
            this.poolReel[i].ResetStart();
        }

        for (var i = 1; i < this.poolWays.length; ++i) {
            for (var j = 1; j < this.poolWays[i].length; ++j) {
                this.poolWays[i][j].node.active = (false)
            }
        }

        for (var i = 1; i < this.poolPays.length; ++i) {
            this.poolPays[i].node.active = (false)
        }
    },

    RestartSpin() {
        this.callbackBet = null
        this.callbackCarousel = null
        this.callbackStop = null

        this.KillTotalSequence()

        this.txtPays.string = ""
        this.txtWays.string = ""
        this.rootWays.active = (false)
        this.rootPays.active = (false)
    },

    onExit() {      
        this.KillTotalSequence()

        for (let i = 1; i < this.poolReel.length; ++i) { this.poolReel[i].onExit() }
        for (let i = 1; i < this.poolWays.length; ++i) { this.poolWays[i] = null }
        for (let i = 1; i < this.poolPays.length; ++i) { this.poolPays[i] = null }
        for (let i = 1; i <= this.poolPrefab.length; ++i) { this.poolPrefab[i] = null }
    },


    Init(root, rootResult) {
        this.rootRect = root
        this.prefab = cc.find("Reel", root)
        this.prefab.active = (false)

        this.rootWays = cc.find("ImageNormal/PoolWays", rootResult)
        this.txtWays = cc.find("ImageNormal/TextWays", rootResult).getComponent(cc.Label)
        this.rootPays = cc.find("ImageNormal/PoolPays", rootResult)
        this.txtPays = cc.find("ImageNormal/TextPays", rootResult).getComponent(cc.Label)

        this.poolReel = []
        this.poolWays = []
        this.poolPays = []
        this.poolPrefab = {}
        this.sequenceDict = {}
        this.scheduleDict = {}

        this.ResetReel()
        this.RestartSpin()
    },

    Update (dt) {
        for (var index in this.poolReel)
            this.poolReel[index].Update(dt)
    },

    CreateClone(index, reelCount, prefabCount) {
        if (this.poolPrefab[index] != null) {
            return this.poolPrefab[index]
        }
        var clone = cc.instantiate(this.prefab)
        if (clone == null) {
            return null
        }
        //this.prefab.parent.addChild(clone)
        clone.parent = this.prefab.parent
        clone.scale = cc.v2(1, 1)
        clone.name = this.prefab.name + index
        clone.active = (true)

        this.poolPrefab[index] = clone

        var poolSpine = cc.find("PoolSpine", this.rootRect)
        this.poolReel[index] = new UISlotReel(this.poolPrefab[index], poolSpine)

        //輪軸間的距離
        var _space = 5
        //輪軸的寬度
        //var _width = (this.rootRect.sizeDelta.x + _space) / reelCount - _space
        var _width = (this.rootRect.width + _space) / reelCount - _space
        //輪軸的高度
        //var _height = this.rootRect.sizeDelta.y / gameData.RowCounts * prefabCount
        var _height = this.rootRect.height / gameData.RowCounts * prefabCount
        //輪軸的位置
        var _x = (_width + _space) * (index - 1)
		_x = _x - this.rootRect.width * 0.5 // 至左
		var _y = this.rootRect.height * 0.5 // 至上
        this.poolPrefab[index].position = cc.v2(_x, _y)
        this.poolPrefab[index].width = _width
        this.poolPrefab[index].height = _height
    },

    //設定輪軸清單
    SetReelSetting(list) {
        this.KillTotalSequence()

        //輪軸總數
        var reelCount = list.length
        //單輪軸預生成符號數量
        var prefabCount = (gameData.RowCounts + 2)

        for (var i = 0; i < list.length; ++i) {
			let index = i+1
            UISlot.CreateClone(index, reelCount, prefabCount)

            this.poolReel[index].SetReelSetting(list[i].SymbolGroup, prefabCount)
        }

        for (var i = 1; i <= list.length; ++i) {
            this.poolPays[i] = cc.find("Image" + i, this.rootPays).getComponent(cc.Sprite)

            this.poolWays[i] = []
            for (var j =1; j <= gameData.RowCounts; ++j) {
                //print("Image"..i.. "_"..j, poolWays, poolWays[i])
                this.poolWays[i][j] = cc.find("Image" + i + "_" + j, this.rootWays)
            }
        }
    },

    //顯示所有中獎符號特殊表演
    ShowGameResultSymbolWin(data) {
        // for(var k1 in (data.PayLineGroup)){
        // var v1 = data.PayLineGroup[k1]
        // for(var k2 in (v1.PayLineDetail)){
        //var v2 = v1.PayLineDetail[k2]
        // if (v2.Blink == true) {
        //poolReel[v2.ReelID].ShowWin(v2.SymbolID)
        //}
        //}
        //}

        for (var k1 in (data.PayAllGroup)) {
            var v1 = data.PayAllGroup[k1]
            for (var k2 in (v1.PayLineDetail)) {
                var v2 = v1.PayLineDetail[k2]
                if (v2.Blink == true) {
                    this.poolReel[v2.ReelID].ShowWin(v2.SymbolID)
                }
            }
            for (var k2 in (v1.PayAllDetail)) {
                var v2 = v1.PayAllDetail[k2]
                if (v2.SymbolName == "s1") {
                    GameG.PlayGameSound("se_fstrigger")
                }
            }
        }
    },

    ShowPayAndWay(data, v2)
    {
        this.rootWays.active = (true)
        this.rootPays.active = (true)
        //this.txtPays.string = tostring("PAYS " + string.format("%.2f", v2.PayRate * 0.01))
        this.txtPays.string = "PAYS " + (Math.floor(v2.PayRate)/100).toString()
        this.txtWays.string = v2.WayCount.toString() + " WAYS"

        //顯示中獎符號
        for (var i = 1; i < this.poolPays.length; ++i) {
            this.poolPays[i].node.active = (i <= v2.PayCount)
            this.poolPays[i].node.scale = 1
            if (v2.SymbolName == "s1" || v2.SymbolName == "w1") {
                this.poolPays[i].node.scale = 1.6
            }
            var symbolName = gameData.ChangeSymbolName(v2.SymbolName)
            //this.poolPays[i].node.name = symbolName
            GameG.SetImageSprite(this.poolPays[i], "UI/Symbol", "symbol_" + symbolName)
        }
        //關閉所有中獎位置
        for (var reelIndex = 1; reelIndex < this.poolWays.length; ++reelIndex) {
            for (var rowIndex = 1; rowIndex < this.poolWays[reelIndex].length; ++rowIndex) {
                this.poolWays[reelIndex][rowIndex].active = (false)
            }
        }

        //顯示中獎位置
        for (var i = 0; i < data.ReelSetting.length; ++i) {
            let ReelSetting = data.ReelSetting[i]
            let reelIndex = ReelSetting.RealID
            let rowIndex = ReelSetting.RowIndex
            for (var index = 0; index < ReelSetting.SymbolGroup.length; ++index) {
                let symbolID = ReelSetting.SymbolGroup[index].SymbolID
                for (var k3 in (v2.SymbolIDList)) {
                    var v3 = v2.SymbolIDList[k3]
                    if (v3 == symbolID) {
                        this.poolWays[reelIndex][rowIndex].active = (true)
                        this.poolReel[reelIndex].ShowWin(symbolID)
                    }
                }
            }
        }        
    },

    //依序輪播賠付線與獲得金額
    ShowGameResultCarousel(data) {
        let self = this
		
		let complete = function(){
            if (self.callbackCarousel != null) {
                self.callbackCarousel()
                self.callbackCarousel = null
            }	
		}

		if(data.WinMoney > 0){
			if (this.tween)
				this.tween.stop()
					
			this.tween = cc.tween(this.rootRect)
			let tween = cc.tween(this.tween)
			for (var k1 in (data.PayAllGroup)) {
				let v1 = data.PayAllGroup[k1]
				for (var k2 in (v1.PayAllDetail)) {
					let v2 = v1.PayAllDetail[k2]
					tween.call(function () {
						UISlot.ShowPayAndWay(data, v2)
					})
					tween.delay(gameData.GapTimer_CarouselPayLine)
					tween.call(function () {
						for (var i = 1; i < self.poolReel.length; ++i) {
							self.poolReel[i].ResetStart()
						}
					})
					tween.delay(1.0)
				}
			}
			tween.call(complete)
			this.tween.repeat(9999999999, tween).start()
		}
		else{
			complete()
		}			
    },

    //確認輪軸符合符號的數量
    CheckConformCount(reelSetting, reelIndex, symbolName) {
        var conformCount = 0 // 符合符號的數量
        var refreshResult = {} // 整理符合符號的清單

        var reelResult = this.GetListBySymbolName(reelSetting, symbolName)
        for (var i = 1; i <= reelResult.length; ++i) {
            var reel = reelResult[i].RealID
            refreshResult[reel] = refreshResult[reel] || {}
            refreshResult[reel].count = refreshResult[reel].count || 0
            refreshResult[reel].count = refreshResult[reel].count + 1
        }

        //計算輪軸已開獎符號符合的數量
        for (var k in (refreshResult)) {
            var v = refreshResult[k]
            if (k <= reelIndex) {
                conformCount = conformCount + v.count
            }
        }

        return conformCount
    },

    //確認符合符號的輪軸數量
    CheckConformReel(reelSetting, reelIndex, symbolName) {
        var conformCount = 0 // 符合符號的數量
        var refreshResult = {} // 整理符合符號的清單

        var reelResult = this.GetListBySymbolName(reelSetting, symbolName)
        for (var i = 0; i < reelResult.length; ++i) {
            var reel = reelResult[i].RealID
            refreshResult[reel] = refreshResult[reel] || {}
            refreshResult[reel].count = 1
        }

        //計算輪軸已開獎符號符合的數量
        for (var k in (refreshResult)) {
            if (k <= reelIndex) {
                conformCount = conformCount + refreshResult[k].count
            }
        }

        return conformCount
    },

    //確認符合符號的連線
    CheckConformConnection(reelSetting, reelIndex, symbolList) {
        let conformCount = 0 // 符合符號的數量
        let refreshResult = {} // 整理符合符號的清單

        for (let i = 1; i < this.poolReel.length; ++i) {
            refreshResult[i] = false
        }

        for (var k in (symbolList)) {
            var reelResult = this.GetListBySymbolName(reelSetting, symbolList[k])
            for (var i in reelResult) {
                var reel = reelResult[i].RealID
                refreshResult[reel] = true
            }
        }

        //計算輪軸已開獎符號符合的數量
        for (var k in (refreshResult)) {
            var v = refreshResult[k]
            if (k < reelIndex && v != true) {
                return false
            }
            else if (k == reelIndex && v == true) {
                return true
            }
        }

        return false
    },

    //播放指定符號音效
    ShowSymbolAudio(reelSetting, reelIndex, symbolName) {
        //符合符號的數量
        var conformCount = this.CheckConformReel(reelSetting, reelIndex, symbolName)

        //若數量符合則播放音效
        if (conformCount >= reelIndex) {
            GameG.PlayGameSound("se_scatter0" + conformCount)
        }
    },

    //確認是否聽牌
    CheckNearWinScatter(reelSetting, reelIndex) {
        //符合符號的數量
        var conform = this.CheckConformConnection(reelSetting, reelIndex, ["s1", "w1"])

        if (reelIndex >= 2) {
            return conform
        }

        return false
    },
	
	CheckNearWin(reelSetting, reelIndex) {		
		let isNearWin = false
		
		if(isNearWin == false){
			isNearWin = this.CheckNearWinScatter(reelSetting, reelIndex)
		}
		
		return isNearWin
	},

    //顯示下個輪軸聽牌
    ShowNearWin(reelIndex) {
        for (var i in this.poolReel) {
            if (parseInt(i) == parseInt(reelIndex) + 1) {
                this.poolReel[i].ShowNearWin()
            }
            else {
                this.poolReel[i].HideNearWin()
            }
        }
    },

    HideNearWin(reelIndex) {
        this.poolReel[reelIndex].HideNearWin()
    },
	
    //開始旋轉
    SetStartSpin() {
        this.RestartSpin()

        //開始旋轉
        for (var i in this.poolReel) {
            this.poolReel[i].ResetStart()
            this.poolReel[i].StartSpin()
        }

		this.spinLoopTimer = 0	
        GameG.NewDelay(function(){			
			this.spinLoopTimer = this.spinLoopTimer + 0.1
		}, 1, "WaitGameResult") 
    },

    SetGameResult(data, cbStop, cbBet, cbComplete, cbCarousel) {
        this.callbackBet = cbBet
        this.callbackStop = cbStop
        this.callbackComplete = cbComplete
        this.callbackCarousel = cbCarousel
        this.gameResultData = data

		GameG.CancelNewDelay("WaitGameResult")
        //不停旋轉
        let timer = (gameData.SpinLoopTimer - this.spinLoopTimer)
        if (timer > 0) {
            GameG.NewDelayOnce(function () {
                UISlot.SetStopSpin()
            }, timer)
        }
        else {
            UISlot.SetStopSpin()
        }
    },

    //確認所有輪軸是否皆在轉動
    CheckReelIsSpinning() {
        for (var i = 1; i < this.poolReel.length; ++i) {
            if (this.poolReel[i].GetIsSpinning() == true) {
                return true
            }
        }
        return false
    },

    //停止旋轉
    SetStopSpin(gapTimer) {
        if (this.gameResultData == null) {
            return
        }

        var data = this.gameResultData

        //停止旋轉
        var reelResult = []
        for (var i = 0; i < data.ReelSetting.length; ++i) {
            let reelIndex = data.ReelSetting[i].RealID
            let rowIndex = data.ReelSetting[i].RowIndex
            for (var index = 0; index < data.ReelSetting[i].SymbolGroup.length; ++index) {
                let symbolID = data.ReelSetting[i].SymbolGroup[index].SymbolID
                let symbolName = data.ReelSetting[i].SymbolGroup[index].SymbolName
                reelResult[reelIndex] = reelResult[reelIndex] || []
                reelResult[reelIndex][rowIndex] = reelResult[reelIndex][rowIndex] || {}
                reelResult[reelIndex][rowIndex].SymbolID = symbolID
                reelResult[reelIndex][rowIndex].SymbolName = symbolName
            }
        }

		let delayTimer = 0
		let self = this
        for (let i in this.poolReel) {
            //沒有停輪的輪軸才指定停輪資料
            if (this.poolReel[i].GetStopSymbolID() == null) {
                let timer = gapTimer || gameData.GapTimer_Spin
                let isNearWin = this.CheckNearWin(data.ReelSetting, i -1)				
                if (isNearWin == true) {
                    timer = gameData.GapTimer_NearWin
                }
				delayTimer += timer
                GameG.CancelNewDelay("stopspin" + i)
                GameG.NewDelayOnce(function () {
                    var reelIndex = i
                    self.poolReel[i].StopSpinModeData(reelResult[i], function () {
                        self.ShowSymbolAudio(data.ReelSetting, reelIndex, "s1")
						isNearWin = self.CheckNearWin(data.ReelSetting, i)
                        if (isNearWin == true) {
                            UISlot.ShowNearWin(reelIndex)
                        }
                        else {
                            UISlot.HideNearWin(reelIndex)
                        }

                        //全部輪軸皆沒有轉動
                        if (self.CheckReelIsSpinning() == false) {
                            if (self.callbackStop != null) {
                                self.callbackStop()
                                self.callbackStop = null
                            }
                            UISlot.ShowSymbolWin(data)
                        }
                    })
                }, delayTimer, "stopspin" + i)
            }
        }
    },

    //顯示所有中獎符號特殊表演
    ShowSymbolWin(data) {
        //顯示所有中獎符號特殊表演
		UISlot.ShowGameResultSymbolWin(data)
		
		let timer = 0
        if (data.WinMoney > 0) {
            timer = 1
        }

        GameG.NewDelayOnce(function () {
            UISlot.ShowSymbolDouble(data)
        },timer)
    },

    //依序顯示符號加倍且金額遞增
    ShowSymbolDouble(data) {
        // var sequence = this.GetSequence("SymbolDouble")
        // sequence.OnComplete(function () {        
			for (let i = 1; i < this.poolReel.length; ++i) {
                this.poolReel[i].ResetStart()
            }

            if (this.callbackComplete != null) {
                this.callbackComplete()
                this.callbackComplete = null
            }

            UISlot.KillTotalSequence()
            // UISlot.ResetReel()
            // 依序輪播賠付線與獲得金額
            UISlot.ShowGameResultCarousel(data)
        // })
    },

    //取得輪軸清單內的符號資訊
    GetListBySymbolName(ReelSetting, symbolName) {
        var list = []

        for (var i in ReelSetting) {
            for (var index in ReelSetting[i].SymbolGroup) {
                if (ReelSetting[i].SymbolGroup[index].SymbolName == symbolName) {
                    list.push(ReelSetting[i])
                }
            }
        }
        return list
    },

    ShowWinBySymbol(data, symbol){
        for (let k in data) {
            let reel = data[k].RealID
            for(let index in data[k].SymbolGroup){
                let group = data[k].SymbolGroup[index]
                if(symbol == group.SymbolName){
                    this.poolReel[reel].ShowWin(group.SymbolID)
                }
            }            
        }
        let self = this
        GameG.NewDelayOnce(function () {
            for (let i in self.poolReel) {
                self.poolReel[i].ResetStart()
            }
        }, 1)
    },
};

module.exports = UISlot;
