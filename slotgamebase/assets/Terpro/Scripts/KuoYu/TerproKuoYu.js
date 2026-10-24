var config = require('MyBaseConfig');
var TerproPrefabPool = require('TerproPrefabPool')
var TerproCountDown = require('TerproCountDown')

cc.Class({

    extends: cc.Component,
        
    properties: 
    {
        reelMax:0,
        rowMax:0,
        prefabs:[cc.Node],
    },

    start()
    {
        this.controller = cc.find("Canvas/GameController")
        this.controller = this.controller.getComponent(config.SCRIPT.GAMECONTROLLER)

        // node回收桶
        this.terproPrefabPool = new TerproPrefabPool()
        this.terproPrefabPool.init(this.prefabs)

        // 倒數
        this.terproCountDown = new TerproCountDown()
    },
    
    update()
    {
        if(this.controller == null)
        {
            return
        }
        if(this.controller.reelMainView == null || this.controller.reelMainView.reel == null)
        {
            return
        }
        this.enabled = false
        this.controller.kuoyu = this
        // 初始化
        this.initSymbolPosition()
    },

    // 初始化Symbol座標
    initSymbolPosition()
    {
        this.symbolPositions = []
        for(let reel = 0; reel<this.reelMax; reel++)
        {
            this.symbolPositions[reel] = []
            for(let row = 0; row<this.rowMax; row++)
            {
                let symbol = this.getSymbol(reel, row)
                let position = this.getPosition(symbol)
                this.symbolPositions[reel][row] = position
            }
        }
    },
    
    // 取得Symbol位置
    getSymbolPositions(symbolNames)
    {
        let dataArr = []
        let reelData = this.controller.spinData.fullReelData.slice(0)
        reelData = reelData.reverse()
        for(let i in reelData)
        {
            for(let j in reelData[i])
            {
                if(symbolNames.includes(reelData[i][j]) == true)
                {
                    let symbolName = reelData[i][j]
                    let reel = j
                    let row = i
                    dataArr.push({symbolName:symbolName, reel:reel, row:row})
                }
            }
        } 
        return dataArr
    },

    // 取得Symbol
    getSymbol(reel, row)
    {
        let symbolNode = this.controller.reelMainView.reel[reel].symbolView[row].animation.node
        return symbolNode
    },

    // 取得Symbol座標
    getSymbolPosition(reel, row)
    {
        let position = this.symbolPositions[reel][row]
        return position
    },

    // 取座標
    getPosition(node)
    {
        let pos = node.position

        while(true)
        {
            node = node.parent

            if(node.name == "Canvas")
            {
                break
            }
            else
            {
                pos = pos.add(node.position)
            }
        }
        return pos
    },

    // 設定座標
    setPosition(node, pos)
    {
        let parentNode = node.parent

        while(true)
        {
            if(parentNode.name == "Canvas")
            {
                break
            }
            else
            {
                pos = pos.sub(parentNode.position)
            }
            parentNode = parentNode.parent
        }
        node.position = pos
    },

    // 取得Symbol的Node Position
    getSymbolNodePositions(symbolNames)
    {
        let position = this.getSymbolPositions(symbolNames)
        let dataArr = []
        // console.log("getSymbolNodePositions : ", position)
        for(let i in position)
        {
            let symbolName = position[i].symbolName
            let reel = position[i].reel
            let row = position[i].row
            let data = []
            data.symbolName = symbolName
            data.reel = reel
            data.row = row
            data.position = this.symbolPositions[reel][row]
            dataArr.push(data)
        }
        return dataArr
    },

    // 特定Symbol透明度
    setSymbolOpacity(reel, row, opacity)
    {
        let symbolView = this.controller.reelMainView.reel[reel].symbolView
        symbolView[row].animation.node.opacity = opacity
    },

    // 復原Symbol透明度
    recoverySymbolOpacity()
    {
        for(let i in this.controller.reelMainView.reel)
        {
            let symbolView = this.controller.reelMainView.reel[i].symbolView
            for(let j in symbolView)
            {
                symbolView[j].animation.node.opacity = 255
            }
        }
    },

    // 播放預製物動畫
    // index = Prefab索引
    // symbolNames = 要播放的Symbol
    playPrefabAnim(index, symbolNames)
    {
        // 微光金幣
        let dataArr = this.getSymbolNodePositions(symbolNames)
        for(let i in dataArr)
        {
            let data = dataArr[i]
            // 動畫
            this.terproPrefabPool.playAnim(index, data.position)
        }
    },


    // 播放預製物動畫 - Symbol位置
    // index = Prefab索引
    playPrefabAnimSymbolPos(index, reel, row)
    {
        let pos = this.getSymbolPosition(reel, row)
        this.terproPrefabPool.playAnim(index, pos)
    },

    // 取得語系
    getLanguage(id)
    {
        if(window.language == null)
        {
            return ""
        }
        let content = window.language[id]
        if(content == null)
        {
            return ""
        }
        return content
    }
});
