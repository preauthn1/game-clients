var GameG = require("GameGlobal")

/** 用途: 黃金符號介面 */
var UIGoldSymbol = {
    
    // 離開遊戲
    onExit(){
    
    },
    
    Init(root){
        this.pool = []
        this.chooseIndex = 1
        this.toggleCallback = null
        this.symbolList = []

        this.rootRect = root
        let toggleGroup = cc.find("ToggleGroup", root)
        for (let i = 0; i < toggleGroup.children.length; ++i){
            let child = toggleGroup.children[i]
            let ret = child.name.substr(6, 1)
            let index = parseInt(ret)
            this.pool[index] = {}
            this.pool[index].root = child
            this.pool[index].toggle = child.getComponent(cc.Toggle)
            this.pool[index].toggle.isChecked = (index == this.chooseIndex)
            this.pool[index].txtSymbols = cc.find("TextSymbols", child).getComponent(cc.Label)
            this.pool[index].txtCredits = cc.find("TextCredits", child).getComponent(cc.Label)
            this.pool[index].credits = 1
            this.pool[index].toggle.node.on('toggle', function(toggle) {
                if(toggle.isChecked == true){
                    GameG.PlayGameSound("se_click")
                    this.chooseIndex = index
                    UIGoldSymbol.RefreshSymbol()
                    UIGoldSymbol.AnimChangeSymbol()
                    if(this.toggleCallback != null){
                        this.toggleCallback()
                    }
                }
            }, this);
        }
        
        for (let i = 1; i <= 5; ++i){
            this.symbolList[i] = {}
            this.symbolList[i].normal = cc.find("ImageSymbol" + i + "_0", root)
            this.symbolList[i].gold = cc.find("ImageSymbol" + i + "_1", root)
        }
        
        this.img_allUp = cc.find("ImageAllUp", root).getComponent(cc.Sprite)
        this.img_change = cc.find("ImageChange", root).getComponent(cc.Sprite)
        this.img_change.node.opacity = 0
        UIGoldSymbol.RefreshSymbol()
    },
    // 回合開始
    SetGameStart(){
    
    },
    // 回合結束
    SetGameEnd(){
        
    },
    
    SetToggleCallback(callback){
        this.toggleCallback = callback
    },
    
    SetData(data){
        if (data == null)
            return
        
        let batTitle = GameG.GetLocalizedString("倍")
        for (let i = 0; i < data.length; ++i){
            this.pool[i+1].txtSymbols.string = data[i].Symbols 
            this.pool[i+1].txtCredits.string = "(" + data[i].Credits + batTitle + ")" 
            this.pool[i+1].credits = data[i].Credits
        }
    },
    
    // 設定目前指定黃金符號
    SetCurrentCredits(num){
        for (let i = 1; i < this.pool.length; ++i){
            this.pool[i].toggle.isChecked = (this.pool[i].credits == num)
            if(this.pool[i].credits == num){
                this.chooseIndex = i
                UIGoldSymbol.RefreshSymbol()
                UIGoldSymbol.AnimChangeSymbol()
                if(this.toggleCallback != null){
                    this.toggleCallback()
                }
            }
        }
    },
    
    // 取得目前所選积分
    GetChooseCredits(){
        return this.pool[this.chooseIndex].credits
    },
    
    // 取得目前所選階段
    GetChooseStep(){
        return this.chooseIndex
    },
    
    RefreshSymbol(){
        for (let i = 1; i < this.symbolList.length; ++i){
            this.symbolList[i].normal.active = this.chooseIndex >= i
            this.symbolList[i].gold.active = this.chooseIndex < i
        }
        this.img_allUp.node.active = (this.chooseIndex == this.symbolList.length - 1)
    },
    
    AnimChangeSymbol(){
        this.img_change.node.opacity = 0
        
        cc.tween(this.img_change.node)
        .to(0.5, { opacity: 255})
        .to(0.5, { opacity: 0})
        .start()
    },
    
    SetInteractable(enable){
        /*
        if(enable == false){
            enable = (this.chooseIndex == i)
        }
        */
        for (let i = 1; i < this.pool.length; ++i){
            this.pool[i].toggle.interactable = (enable)
        }
    },
    
};

module.exports = UIGoldSymbol;

