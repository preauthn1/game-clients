var config = require('MyBaseConfig');
var accounting = require('Accounting');

cc.Class({
    extends: cc.Component,

    properties: 
    {
        winCountLabel:cc.Label,
        iconSprite:cc.Sprite,
        contentLable:cc.Label,
        symbolSpriteFrames:[cc.SpriteFrame],
        symbolSpriteScales:[cc.Float],
        symbolPayTable:[cc.String],
        symbolWinCount:[cc.String],
    },

    start () 
    {
        this.node.active = false
    },

    init(controller)
    {
        this.controller = controller
        this.reelMainView = this.controller.reelMainView
        this.reelMainView.linePaysView = this
        this.initSymbol()
    },

    // 初始化Symbol
    initSymbol()
    {
        let symbolSpriteFramesData = []
        for(let i in this.symbolSpriteFrames)
        {
            let sprite = this.symbolSpriteFrames[i]
            symbolSpriteFramesData[sprite.name] =  sprite
        }
        this.symbols = []
        for(let i in this.symbolPayTable)
        {
            let payTableData = this.symbolPayTable[i].split(":")

            // Symbol名稱
            let symbolName = payTableData[0]
            // 圖片名稱
            let sprite = symbolSpriteFramesData[payTableData[1]]
            // 賠付表
            let payTable = payTableData[2].split(",")
            // 是xTotalBet
            let isXTotalBet = payTableData[3] == "true"
            // 資料
            let data = []
            data.sprite = sprite
            data.payTable = payTable
            data.isXTotalBet = isXTotalBet
            data.scale = 1
            if(this.symbolSpriteScales[i] != null && this.symbolSpriteScales[i] > 0)
            {
                data.scale = this.symbolSpriteScales[i]
            }
            this.symbols[symbolName] = data
        }
        // SymbolManyWinCount
        this.symbolWinCountDic = []
        for(let i in this.symbolWinCount)
        {
            let symbolWinCountData = this.symbolWinCount[i].split(":")
            
            // Symbol名稱
            let symbolName = symbolWinCountData[0]
            // 代表幾連線
            let winCount = parseInt(symbolWinCountData[1])
            // 資料
            let data = []
            data.winCount = winCount
            this.symbolWinCountDic[symbolName] = data
        }
    },

    // 顯示線
    show(multiple)
    {
        let spinData = this.reelMainView.spinData
        let lineCount = this.reelMainView.lineCount

        if(spinData.winLines.length == 0)
        {
            return
        }
        let winLine = spinData.winLines[lineCount]
        let winSymbol = spinData.winSymbols[lineCount]
        let winCount = spinData.winCounts[lineCount]
        let winNumber = spinData.winNumbers[lineCount]

        if(this.symbolWinCount.length > 0)
        {
            let count = 0
            let payLine = config.PAYLINEARR[winLine-1]
            for(let i = 0; i < winCount; i++)
            {
                let fullReelData = spinData.fullReelData.slice(0)
                fullReelData = fullReelData.reverse()
                let symbolName = fullReelData[payLine[i]-1][i]
                let symbolWinCount = this.symbolWinCountDic[symbolName]
                if(symbolWinCount == null)
                {
                    count++
                }
                else
                {
                    count = count + symbolWinCount.winCount
                }
            }
            winCount = count
        }

        let symbol = this.symbols[winSymbol]
        if(symbol == null)
        {
            console.log("not line pays : " + winSymbol)
            return
        }
        // 總贏分 / 賠付 / 下注
        if(this.lineBet == null)
        {
            this.lineBet = this.controller.panelMainView.lineBetText.string
        }
        // console.log("!!! WAY : " + winNumber +"/"+ symbol.payTable[winCount - 1] +"/"+ this.lineBet)
        if(winCount > symbol.payTable.length)
        {
            winCount = symbol.payTable.length
        }
        let payTable = symbol.payTable[winCount - 1]
        // 是XTotalBet
        if(symbol.isXTotalBet == true)
        {
            let bet = config.PAYLINEARR.length
            payTable = payTable * bet
        }
        this.ways = Math.ceil(winNumber / payTable / this.lineBet)
        this.winCountLabel.string = winCount
        this.iconSprite.spriteFrame = symbol.sprite
        this.iconSprite.node.scale = symbol.scale
        
        let wayContent = ""

        // 是Ways才顯示
        if(this.controller.reelMainView.isWaysSlot == true)
        {
            winNumber = winNumber / this.ways
            wayContent = " (x" + this.ways + ")"
        }

        if(multiple == null)
        {
            this.contentLable.string = "PAYS " + accounting.formatNumberPrecision(winNumber) + wayContent
        }
        else
        {
            this.contentLable.string = "PAYS " + accounting.formatNumberPrecision(winNumber) + "x" + multiple + wayContent
        }
        this.node.active = true
    },

    // 隱藏
    hide()
    {
        this.lineBet = null
        this.node.active = false
    },
});
