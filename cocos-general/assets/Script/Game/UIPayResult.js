var GameG = require("GameGlobal");
var GameData = require("GameData");

cc.Class({
    extends: cc.Component,

    Init(slot, GameSetting){
        this.uiSlot = slot
        this.GameSetting = GameSetting

        this.columnCount = this.GameSetting.reelColumnCount
        this.rowCount = this.GameSetting.reelRowCount

        this.redNask = cc.find("red", this.node)

        this.reelData = []
        this.allSymbolData = [] // 紀錄牌面上所有Symbol
        for (let i = 0; i < this.columnCount; ++i){
            let obj = {}
            obj.reelObj = cc.find("Reel" + i.toString(), this.node)
            obj.mask = cc.find("Mask", obj.reelObj)
            obj.column = i
            
            obj.rowObj = []
            for (let j = 0; j < this.rowCount; ++j){
                obj.row = j

                let obj1 = {}
                obj1.root = cc.find("Column" + j.toString(), obj.reelObj)
                this.allSymbolData.push(obj1)

                obj.rowObj.push(obj1)
            }
            this.reelData.push(obj)
        }
    },

    /** 設定位置 */
    SetReelSetting(){
        for (let i = 0; i < this.columnCount; ++i){
            for (let j = 0; j < this.rowCount; ++j){
                let obj = this.reelData[i].rowObj[j].root
                let pos = this.uiSlot.GetSymbolPos(i, j + 1)
                obj.position = pos
            }
        }
    },

    /** 顯示單一輪軸遮罩 */
    ShowReelMask(index){
        this.reelData[index].mask.active = true
    },

    /** 影藏單一輪軸遮罩 */
    HideReelMask(index){
        this.reelData[index].mask.active = false
    },

    /** 顯示所有輪軸遮罩 */
    ShowAllReelMask(){
        for (let i = 0; i < this.reelData.length; ++i){
            this.ShowReelMask(i)
        }
    },

    /** 影藏所有輪軸遮罩 */
    HideAllReelMask(){
        for (let i = 0; i < this.reelData.length; ++i){
            this.HideReelMask(i)
        }
    }, 

    /** 顯示紅色遮罩 */
    SetRedMask(isShow){
        this.redNask.active = isShow
    },

    /** 播放動態 */
	PlayAnimmation(obj, ani){
		if (obj == null){
			console.error("obj is null")
			return
		}

		if (obj.aniObj == null){
			console.error("obj.aniObj is null", obj)
			return
        }

		let clipps = obj.aniObj.ani.getClips()
		if (clipps[ani] != null){
            obj.aniObj.root.active = true;
            obj.aniObj.ani.play(clipps[ani].name)
		}
		else{
			console.error("can not find ani index", ani)
		}
	},

    /** 停止所有動態 */
	StopAllAnimation(){
        for (let i = 0; i < this.allSymbolData.length; ++i){
            let obj = this.allSymbolData[i]
            this.StopAnimation(obj)
        }
    },

    /** 停止動態 */
    StopAnimation(obj){
        if (obj.aniObj == null){
            return
        }

        obj.aniObj.ani.stop()
        obj.aniObj.root.active = false
        this.uiSlot.FreeSymbolAni(obj.aniObj);
        obj.aniObj = null        
    },

    /** 儲存和設定結果 */
    UpdatePayData() {
        this.BlinkPositionsData = GameData.resultData.BlinkPositions
        this.ReelStrip = GameData.resultData.ReelStrip

        // 指定動畫
        for(let i = 0; i < this.ReelStrip.length; ++i){
            if (this.reelData[i] != null){
                let datas = this.ReelStrip[i].Symbols
                for(let j = 0; j < datas.length; ++ j){
                    let obj = this.reelData[i].rowObj[j]
                    let symbolName = datas[j]
                    obj.aniObj = this.uiSlot.GetSymbolAni(symbolName.toString(), 2)
                    obj.aniObj.root.parent = obj.root
                    obj.symbol = symbolName
                    obj.isPayLine = false
                }
            }
        }
        
        // 儲存連線資訊
        for (let i = 0; i < this.BlinkPositionsData.length; ++i){
            let data1 = this.BlinkPositionsData[i]
            let obj = this.reelData[data1.Reel - 1].rowObj[data1.Row - 1]
            obj.isPayLine = true
        }
    },

    /** 開始轉動 */
    SpinStart(){
        this.ShowResultEnd()

        let scenario = GameData.GetScenario()
        let Enum_Scenario = GameData.Enum_Scenario

        // Normal Game
        if (scenario == Enum_Scenario.GEN_Scenario_NG){
            this.HideAllReelMask()
        }
        // Regular Bonus
        else if (scenario == Enum_Scenario.GEN_Scenario_RB){
            this.ShowAllReelMask()
        }
        // Big Bonus
        else if (scenario == Enum_Scenario.GEN_Scenario_BB){
            this.ShowAllReelMask()
        }
        // JAC
        else if (scenario == Enum_Scenario.GEN_Scenario_JAC){
            this.ShowAllReelMask()
        }
    },

    /** 停止某一軸轉動 */
    SpinStop(index){
        let scenario = GameData.GetScenario()
        let Enum_Scenario = GameData.Enum_Scenario

        // Normal Game
        if (scenario == Enum_Scenario.GEN_Scenario_NG){

        }
        // Regular Bonus
        else if (scenario == Enum_Scenario.GEN_Scenario_RB){
        
        }
        // Big Bonus
        else if (scenario == Enum_Scenario.GEN_Scenario_BB){
            // 停輪就直接顯示有中獎的
            let data = this.BlinkPositionsData
            for (let i = 0; i < data.length; ++i){
                let data1 = data[i]
                if (index == data1.Reel - 1){
                let obj = this.reelData[data1.Reel - 1].rowObj[data1.Row - 1]
                this.PlayAnimmation(obj, 0)
                }
            }
        }
        // JAC
        else if (scenario == Enum_Scenario.GEN_Scenario_JAC){
        
        }        
    },

    /** 全部轉動停轉 */
    SpinStopAll(){
        let scenario = GameData.GetScenario()
        let Enum_Scenario = GameData.Enum_Scenario  
        let Enum_ResultType = GameData.Enum_ResultType
        let resultType = GameData.GetResultType()

        // Normal Game
        if (scenario == Enum_Scenario.GEN_Scenario_NG){

        }
        // Regular Bonus
        else if (scenario == Enum_Scenario.GEN_Scenario_RB){
            this.HideAllReelMask()
        }
        // Big Bonus
        else if (scenario == Enum_Scenario.GEN_Scenario_BB){
            // 純槓，紅燈
            if (resultType == Enum_ResultType.GEN_RT_FeatureNone){
                this.SetRedMask(true)
            }
            this.HideAllReelMask()
        }
        // JAC
        else if (scenario == Enum_Scenario.GEN_Scenario_JAC){
            // JAC槓，輪軸紅燈，符號v字閃
            if (resultType == Enum_ResultType.GEN_RT_JACNone){
                this.SetRedMask(true)
            }            
            this.HideAllReelMask()        
        }
    },
    
    /** 顯示結果 */
    ShowResult(isAutoPlay){
        if (this.BlinkPositionsData == null || this.BlinkPositionsData.length == 0){
            return
        }

        // this.ShowAll()

        let scenario = GameData.GetScenario()
        let Enum_Scenario = GameData.Enum_Scenario
        let Enum_ResultType = GameData.Enum_ResultType

        // let nowIndex = 0
        let self = this
        GameG.NewDelayOnce(function(){
            // Normal Game
            if (scenario == Enum_Scenario.GEN_Scenario_NG){
                self.ShowAllReelMask()
            }
            // Regular Bonus
            else if (scenario == Enum_Scenario.GEN_Scenario_RB){
    
            }
            // Big Bonus
            else if (scenario == Enum_Scenario.GEN_Scenario_BB){

            }
            // JAC
            else if (scenario == Enum_Scenario.GEN_Scenario_JAC){
    
            }
            
            // Bonus確定
            if(GameData.GatBonusSure() == true){
                // 拉中777或bar的時候會由左至右依序閃爍符號
                if (GameData.CheckResultType(Enum_ResultType.GEN_RT_BlueSevenLink) == true ||
                    GameData.CheckResultType(Enum_ResultType.GEN_RT_RedSevenLink) == true ||
                    GameData.CheckResultType(Enum_ResultType.GEN_RT_BarLink) == true)
                {
                        self.DoBonusSureEffect()
                }
                else{
                    self.ShowAllPayLine()
                }
            }
            else{
                self.ShowAllPayLine()
            }

            // 自動模式下播一下子就停止
            if (isAutoPlay == true){
                GameG.NewDelayOnce(function(){ 
                    self.ShowResultEnd()
                }, self.GameSetting.resultShowOneTime, "PayResultShowStop");
            }

        }, this.GameSetting.resultDelayShowTime, "PayResultDelayShow");
    },

    /** 顯示結果結束 */
    ShowResultEnd(){
        this.HideAllReelMask()
        this.StopAllAnimation()
        this.SetRedMask(false)

        GameG.CancelNewDelay("PayResultShowStop")
        GameG.CancelNewDelay("PayResultDelayShow")
        GameG.CancelNewDelay("DoBonusSureEffect")
    },

    /** 顯示所有 */
    ShowAll(){
        for (let i = 0; i < this.allSymbolData.length; ++i){
            let obj = this.allSymbolData[i]
            this.PlayAnimmation(obj, 0)
        }
    },

    /** 顯示所有連線 */
    ShowAllPayLine(){
        for (let i = 0; i < this.allSymbolData.length; ++i){
            let obj = this.allSymbolData[i]

            if (obj.aniObj != null){
                obj.aniObj.ani.stop()
                obj.aniObj.root.active = false
            }

            if (obj.isPayLine == true){
                this.PlayAnimmation(obj, 0)
            }
        }
    },    

    IsSpecialSymbol(obj){
        let Enum_Symbol = GameData.Enum_Symbol
        // 藍7 紅7 bar 以外的symbol
        if (obj.symbol != Enum_Symbol.GEN_RT_BlueSevenLink &&
            obj.symbol != Enum_Symbol.GEN_RT_RedSevenLink &&
            obj.symbol != Enum_Symbol.GEN_RT_BarLink)
        {
            return true
        }
        else
        {
            return false
        }           
    },

    DoBonusSureEffect(){
        // 藍7 紅7 bar 以外的symbol用一般的播放方式
        for (let i = 0; i < this.allSymbolData.length; ++i){
            let obj = this.allSymbolData[i]
            if (obj.isPayLine == true){
                if (this.IsSpecialSymbol(obj) == true){
                    this.PlayAnimmation(obj, 0)
                }
            }
        }

        // 輪播
        let nowIndex = 0
        let self = this
        this.PlayByReel(nowIndex, true)      
        GameG.NewDelay(function(){ 
            self.StopByReel(nowIndex)

            nowIndex += 1
            if (nowIndex >= self.columnCount){
                nowIndex = 0
            }
            self.PlayByReel(nowIndex, true)
        }, this.GameSetting.resultShowBonusSureTime, "DoBonusSureEffect");
    },

    PlayByReel(Index, checkSymbol){
        for (let j = 0; j < this.rowCount; ++j){
            let obj = this.reelData[Index].rowObj[j]
            if (obj.isPayLine == true){
                if (checkSymbol == true){
                    if (this.IsSpecialSymbol(obj) == true){
                        this.PlayAnimmation(obj, 0)
                    }
                }
                else{
                    this.PlayAnimmation(obj, 0)
                }
            }
        }
    },

    StopByReel(Index){
        for (let j = 0; j < this.rowCount; ++j){
            let obj = this.reelData[Index].rowObj[j]
            if (obj.isPayLine == true){
                obj.aniObj.ani.stop()
                obj.aniObj.root.active = false    
            }
        }
    }      
});
