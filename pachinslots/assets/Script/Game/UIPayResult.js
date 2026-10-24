var GameG = require("GameGlobal");

cc.Class({
    extends: cc.Component,

    init(slot, GameSetting){
        this.uiSlot = slot
        this.GameSetting = GameSetting

        this.ColumnCount = this.GameSetting.reelColumnCount
        this.RowCount = this.GameSetting.reelRowCount

        this.reelData = []
        for (let i = 0; i < this.ColumnCount; ++i){
            let obj = {}
            obj.reelObj = cc.find("Reel" + i.toString(), this.node)
            obj.column = i
            
            obj.rowObj = []
            for (let j = 0; j < this.RowCount; ++j){
                obj.row = j

                let obj1 = {}
                obj1.root = cc.find("Column" + j.toString(), obj.reelObj)
                obj.rowObj.push(obj1)
            }
            this.reelData.push(obj)
        }
    },

    SetReelSetting(){
        for (let i = 0; i < this.ColumnCount; ++i){
            for (let j = 0; j < this.RowCount; ++j){
                let obj = this.reelData[i].rowObj[j].root
                let pos = this.uiSlot.GetSymbolPos(i, j + 1)
                obj.position = pos
            }
        }
    },

    showMask(index){
        this.reelData[index].reelObj.active = true
    },

    hideMask(index){
        this.reelData[index].reelObj.active = false
    },

    hideAllMask(){
        for (let i = 0; i < this.reelData.length; ++i){
            this.reelData[i].reelObj.active = false
        }
    },

    setPayData(data) {
        this.resultData = data.PayAllDetail

        for(let i = 0; i < data.ReelStrip.length; ++i){
            let datas = data.ReelStrip[i].Symbols
            for(let j = 0; j < datas.length; ++ j){
                if (this.reelData[i] != null){
                    let obj = this.reelData[i].rowObj[j]
                    let symbolName = datas[j]
                    
                    obj.aniObj = this.uiSlot.GetSymbolAni(symbolName, 2)
                    obj.aniObj.root.parent = obj.root
                    
                    obj.name = datas[j]                 
                }
            }
		}
    },
    
    showResult(){
        if (this.resultData == null){
            return
        }

        if (this.resultData.length == 0){
            return
        }

        let nowIndex = 0
        let self = this
        GameG.NewDelayOnce(function(){
            let data = self.resultData[nowIndex].SymbolIDList
            self.show(data, self.uiSlot)

            // 輪播
            GameG.NewDelay(function(){ 
                nowIndex += 1
                if (nowIndex >= self.resultData.length)
                    nowIndex = 0

                data = self.resultData[nowIndex].SymbolIDList
                self.show(data, self.uiSlot)
            }, self.GameSetting.resultShowOneTime, "PayResultShow");
        }, this.GameSetting.resultDelayShowTime, "PayResultDelayShow");
    },

    showResultEnd(){
        this.hideAllMask()
        this.stopAllAnimation()

        GameG.CancelNewDelay("PayResultShow")
        GameG.CancelNewDelay("PayResultDelayShow")
    },

    show(data, uiSlot){
        // for (let i = 0; i < data.length; ++i){
        //     if (data[i] > 0){
        //         for (let j = 0; j < data.length; ++j){
        //             let uiSlotReel = uiSlot.GetPoolReel(j)
        //             if (uiSlotReel != null){
        //                 this.playAnimmationBySymbolID(data[i], 0)
        //                 // this.playAnimmationByRowIndex(i, data[i], 0)
        //             }
        //         }
        //     }
        // }

        for (let i = 0; i < this.ColumnCount; ++i){
            for (let j = 0; j < this.RowCount; ++j){
                let obj = this.reelData[i].rowObj[j]
                obj.aniObj.ani.stop()
                obj.aniObj.root.active = false
            }
        }

        for (let i = 0; i < data.length; ++i){
            let obj = data[i]
            this.playAnimmationByRowIndex(obj.Reel - 1, obj.Row - 1, 0)
        }        
    },

    playAnimmationByRowIndex(index, row, ani){
        if (this.reelData[index] == null){
            return
        }

        let obj = this.reelData[index].rowObj[row]
		this.playAnimmation(obj, ani)
    },
    
    GetObjBySymbolID(id){
        for (let i = 0; i < this.ColumnCount; ++i){
            for (let j = 0; j < this.RowCount; ++j){
                let obj = this.reelData[i].rowObj[j]
                if (obj.id == id){
                    return obj
                }
            }
        }
        return null
    },

	playAnimmationBySymbolID(id, ani){
        let obj = this.GetObjBySymbolID(id)
        this.playAnimmation(obj, ani)
	},

	playAnimmation(obj, ani){
		if (obj == null){
			return
		}

		if (obj.aniObj == null){
			console.error("obj.aniObj is null", obj)
			return
		}

		let clipps = obj.aniObj.ani.getClips()
		if (clipps[ani] != null){
            obj.aniObj.root.active = true;
            obj.aniObj.ani.play(clipps[ani].name, 0)
		}
		else{
			console.error("can not find ani index", ani)
		}
	},

	stopAllAnimation(){
        for (let i = 0; i < this.ColumnCount; ++i){
            for (let j = 0; j < this.RowCount; ++j){
                let obj = this.reelData[i].rowObj[j]

                if (obj.aniObj != null){
                    obj.aniObj.ani.stop()
                    obj.aniObj.root.active = false
                    this.uiSlot.FreeSymbolAni(obj.aniObj);
                    obj.aniObj = null
                }
            }
        }
	},
});
