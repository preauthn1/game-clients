var GameG = require("GameGlobal")
var GameData = require("GameData");

var CheckItem = cc.Class({    
    name : "CheckItem",

    properties: {
        symbol: 0,
        soundName: "",
    },    
})

cc.Class({
    extends: cc.Component,

    properties: {
        CheckData: {
            default: [], 
            type: CheckItem,
        },
    },

    Init(){
        this.payLines = []
        this.payLines.push([0,0,0]) // pay line 1
        this.payLines.push([1,1,1]) // pay line 2
        this.payLines.push([2,2,2]) // pay line 3
        this.payLines.push([0,1,2]) // pay line 4
        this.payLines.push([2,1,0]) // pay line 5
    },

    Start(){
        // 用來記錄哪一軸被停
        this.checkMask = [false, false, false]
    },

    Stop(index){
        this.checkMask[index] = true

        let acc = 0
        for (let i = 0; i < this.checkMask.length; ++i){
            acc += this.checkMask[i]
        }

        // 停任意兩軸才觸發
        if (acc != 2){
            return
        }

        for (let i = 0; i < this.CheckData.length; ++i){
            let data = this.CheckData[i]
            this.CheckDataByValue(data.symbol, data.soundName)
        }
    },

    CheckDataByValue(value, soundName)
    {
        let reelStrip = GameData.resultData.ReelStrip
        for (let i = 0; i < this.payLines.length; ++i){
            let acc = 0
            let payLine = this.payLines[i]
            for (let j = 0; j < payLine.length; ++j){
                let reel = j
                // 該輪軸停止才計算數量
                if (this.checkMask[reel] == true){
                    let row = payLine[reel]
                    let data = reelStrip[reel].Symbols[row]
                    if (data == value){
                        acc += 1
                    }
                }
            }

            // 有兩個符號一樣表示聽牌
            if (acc >= 2){
                GameG.PlayGameSound(soundName, false)
            }          
        }
    }
});
