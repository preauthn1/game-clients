var GameG = require("GameGlobal")
var gameData = require("GameData")

/** 用途: 賠付表介面 */
var UIPayTable = {
    extends: cc.Component,
    
    Init(root){
        this.pool = []
        this.poolPrefab = []
        this.symbolTable = []
        this.index = 1
        this.pageCount = 5

        this.rootRect = root
        this.rootRect.active = false
		// 關閉按鈕
        this.btn_back = cc.find("ButtonBack", root).getComponent(cc.Button)
        this.btn_back.node.on('click', function () {
            GameG.PlayGameSound("se_click")
            UIPayTable.Hide()
        })
		// 上一頁按鈕
        this.btn_front = cc.find("ButtonFront", root).getComponent(cc.Button)
        this.btn_front.node.on('click', function () {
            GameG.PlayGameSound("se_click")
            UIPayTable.RefreshPool(-1)
        })
		// 下一頁按鈕
        this.btn_next = cc.find("ButtonNext", root).getComponent(cc.Button)
        this.btn_next.node.on('click', function () {
            GameG.PlayGameSound("se_click")
            UIPayTable.RefreshPool(1) 
        })
        
        this.poolRoot = cc.find("Pool", root)
        var children = this.poolRoot.children;
        for (var i = 0; i < children.length; ++i) {        
            let child = children[i]
            this.pool[i +1] = child
        }

        this.txtContentS1 = cc.find("Pool/RawImage (3)/Text", root).getComponent(cc.Label)
		// 預載
        this.prefab = cc.find("Prefab", root)
        
        UIPayTable.RefreshPool(0)
    },
    
    onExit(){
        for (let i = 0; i < this.poolPrefab.length; ++i)
            this.poolPrefab[i] = null
    },
    
    CreateClone(index){
        if(this.poolPrefab[index] != null) return
        let clone = cc.instantiate(this.prefab)
        if(clone == null) return null
        this.poolRoot.addChild(clone)

        clone.position = cc.v3(0,0,0)
        clone.scale = 1
        clone.active = false
        
        this.poolPrefab[index] = {}
        this.poolPrefab[index].root = clone
        this.poolPrefab[index].img = cc.find("Image", clone).getComponent(cc.Sprite)
        this.poolPrefab[index].txt = cc.find("Text", clone).getComponent(cc.Label)
    },

    // 顯示介面
    Show(){
        let self = this

        this.rootRect.active = true	
        
        let GetContent = function(symbolName,totalBetMoney){
            let content = ""
            if(self.symbolTable[symbolName] != null){
                for (let i = 5; i >= 1; --i) {
                    if(self.symbolTable[symbolName].detail[i] != null){
                        if(content != ""){
                            content = content + "\n" 
                        }                        
                        content = content + i + " = " + GameG.AbbreviateNumber(self.symbolTable[symbolName].detail[i] * totalBetMoney, true)
                    }
                }
            }
            return content
        }
        
        let SetData = function(pageIndex,poolIndex,symbolName1){    
            let symbolName = gameData.ChangeSymbolName(symbolName1)
            let data = self.symbolTable[symbolName]
            if(data == null){
                return
            }
            
            if(poolIndex >= self.poolPrefab.length){
                UIPayTable.CreateClone(poolIndex)
            }
            
            //self.pool[pageIndex].addChild(self.poolPrefab[poolIndex].root)
            self.poolPrefab[poolIndex].root.parent = self.pool[pageIndex]
            self.poolPrefab[poolIndex].root.scale = 1
            self.poolPrefab[poolIndex].root.active = true
            GameG.SetImageSprite(self.poolPrefab[poolIndex].img, "UI/Symbol", "symbol_" + symbolName, false)
            self.poolPrefab[poolIndex].txt.string = GetContent(symbolName, gameData.GetBetMoney())
        }
        
        let compare = function(symbolNameA,symbolNameB){
            symbolNameA = gameData.ChangeSymbolName(symbolNameA)
            let dataA = 0
            if (UIPayTable.symbolTable[symbolNameA])
                dataA = UIPayTable.symbolTable[symbolNameA].detail[5]
    
            symbolNameB = gameData.ChangeSymbolName(symbolNameB)
            let dataB = 0
            if (UIPayTable.symbolTable[symbolNameB])
                dataB = UIPayTable.symbolTable[symbolNameB].detail[5]
                return dataB - dataA
        }

        let poolIndex = 1
        let pageSymbol = []
        pageSymbol[1] = ["p1","p2","p3","p4","p5"]
        pageSymbol[2] = ["p6","p7","p8","p9","p10","p11"]
        
        pageSymbol[1].sort(compare);

        pageSymbol.forEach(function (symbolList, pageIndex) {
            for (let i = 0; i < symbolList.length; ++i){
                SetData(pageIndex,poolIndex,symbolList[i])			
                poolIndex = poolIndex +1
            }
        })
        
        this.txtContentS1.string = GetContent("s1", gameData.GetTotalBetMoney())
    },
        
    // 關閉介面
    Hide(){
        this.rootRect.active = false
    },
    
    RefreshPool(offset){
        this.index = this.index + offset
        for (let i = 1; i < this.pool.length; ++i){
            this.pool[i].active = (i == this.index)
        }
        this.btn_front.interactable = (this.index > 1)
        this.btn_next.interactable = (this.index + 1 < this.pool.length)
    },
    
    SetData(data){
        if (data == null)
            return

        for (let i = 0; i < data.length; ++i){
            let symbolName = data[i].SymbolName
            this.symbolTable[symbolName] = this.symbolTable[symbolName] || {}
            this.symbolTable[symbolName].symbolName = symbolName
            this.symbolTable[symbolName].detail = this.symbolTable[symbolName].detail || {}
            let count = data[i].Count
            this.symbolTable[symbolName].detail[count] = data[i].Rate
        }	
    },
};

module.exports = UIPayTable;
