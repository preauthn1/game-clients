var GameG = require("GameGlobal");

cc.Class({
    extends: cc.Component,

    init(slot, GameSetting){
        this.uiSlot = slot
        this.GameSetting = GameSetting
    },

    setPayData (data) {
        this.resultData = data
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
        GameG.CancelNewDelay("PayResultShow")
        GameG.CancelNewDelay("PayResultDelayShow")
    },

    show(data, uiSlot){
        let count = uiSlot.GetPoolReelCount()
        for (let j = 0; j < count; ++j){
            let uiSlotReel = uiSlot.GetPoolReel(j)
            uiSlotReel.stopAllAnimation()
        }

        for (let i = 0; i < data.length; ++i){
            if (data[i] > 0){
                for (let j = 0; j < data.length; ++j){
                    let uiSlotReel = uiSlot.GetPoolReel(j)
                    if (uiSlotReel != null){
                        uiSlotReel.playAnimmationBySymbolID(data[i], 0)
                        //uiSlotReel.playAnimmationByRowIndex(data[i], 0)
                    }
                }
            }
        }
    }
});
