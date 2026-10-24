var gameGlobal = require("GameGlobal")
var gameData = require("GameData")
var MScrollChoose = require("MScrollChoose")

/** 用途: 下注金額介面 */
var UIChip = {
    extends: cc.Component,
    
    Init(root){
        this.pool = []
        this.currentIndex = 0
        this.clickCallback = null

        this.rootRect = root
        this.rootRect.active = false
        
        this.rootOption = cc.find("ScrollView/Mask/Offset/Content/OptionGroup", root)
        // 預載物件
        this.prefab = cc.find("ButtonOption", this.rootOption)
        this.prefab.active = false
        // 關閉按鈕
        this.btnClose = cc.find("ButtonClose", root).getComponent(cc.Button)
        this.btnClose.node.on('click', function () {
            gameGlobal.PlayGameSound("se_click")
            UIChip.Hide()
        })

        // 滾動
        let scrollRect = cc.find("ScrollView", root).getComponent(cc.ScrollView)	
        // 選項高度
        //let optionHeight = this.prefab.sizeDelta.y
        let optionHeight = this.prefab.height
        // 建立滾動
        this.mScrollChoose = new MScrollChoose(scrollRect, optionHeight, UIChip.ChooseAction)
    },
    
    CreateClone(index){
        let clone = cc.instantiate(this.prefab)
        if(clone == null) return null
        clone.active = true
        this.prefab.parent.addChild(clone)
        clone.position = cc.v3(0,0,0)
        clone.scale = 1
    
        this.pool[index] = {}
        this.pool[index].root = clone
        this.pool[index].btn = clone.getComponent(cc.Button)
        this.pool[index].txtBet = cc.find("TextBet", clone).getComponent(cc.Label)
    },
    
    // 離開遊戲
    onExit(){
        for (let i = 1; i < this.pool.length; ++i) {
            UIChip.pool[i] = null 
        }
        
        if (this.mScrollChoose)
            this.mScrollChoose.Close()
    },
    
    // 回合開始
    SetGameStart(){
        UIChip.Hide()
    },
    
    // 回合結束
    SetGameEnd(){
    
    },
    
    // 顯示介面
    Show(){
        this.rootRect.active = true
        
        if (this.mScrollChoose){
            this.mScrollChoose.Show()
            this.mScrollChoose.MoveIndexPos(this.currentIndex)
        }
    },
        
    // 關閉介面
    Hide(){
        if(this.rootRect.activeInHierarchy == false){
            return
        }
    
        this.rootRect.active = false
    
        if (this.mScrollChoose){
            this.mScrollChoose.ChooseNow()
            this.mScrollChoose.Close()
        }
    },
    
    // 設定資料
    SetData(data){
        let self = this
        
        for (let i = 1; i < this.pool.length; ++i) {
            self.pool[i].root.active = false
        }        
        
        for (let index = 0; index < data.length; ++index) {
            if (self.pool[index] == null){
                UIChip.CreateClone(index)
            }
            let count = data[index]
            let clone = self.pool[index]
            clone.root.active = true
            //clone.root.transform.SetAsFirstSibling()
            clone.txtBet.string = gameGlobal.FormatNum(count)
            clone.betCount = count
            clone.root.removeFromParent()
            self.prefab.parent.addChild(clone.root)
        }
            
        //let pos = this.rootOption.anchoredPosition;
        //this.rootOption.anchoredPosition = cc.v2(pos.x,0)
        let pos = this.rootOption.position;
        this.rootOption.position = cc.v2(pos.x,0)

        //設定Pool
        if (this.mScrollChoose){
            this.mScrollChoose.SetPool(this.pool)
        }
    },
    
    // 取得目前倍率
    GetCurrentBetCount(){
        if (this.pool[this.currentIndex])
            return this.pool[this.currentIndex].betCount
        else
            return 0
    },
    
    // 取得目前索引
    GetCurrentIndex(){
        return this.currentIndex
    },
        
    // 取得目前所選位置
    GetCurrentPosition(){
        return this.pool[this.currentIndex].root.position
    },
    
    // 設定點擊後callback
    SetClickCallback(callback){
        this.clickCallback = callback
    },
    
    // 設定目前索引
    SetCurrentIndex(index){
        this.currentIndex = index
        if (this.clickCallback != null){
            this.clickCallback()
        }
    },

    // 設定目前倍率
    SetCurrentBetCount(value){
        for (let i = 1; i < this.pool.length; ++i) {
            if(this.pool[i].betCount == value){
                UIChip.SetCurrentIndex(i)
                if (this.mScrollChoose)
                    this.mScrollChoose.MoveIndexPos(this.currentIndex)
            }
        }
    },
    
    // 降低倍率
    ClickDown(){
        UIChip.SetCurrentIndex(this.currentIndex -1)	
        if (this.mScrollChoose)
            this.mScrollChoose.MoveIndexPos(this.currentIndex)
    },
    
    // 提高倍率
    ClickUp(){
        UIChip.SetCurrentIndex(this.currentIndex +1)	
        if (this.mScrollChoose)
            this.mScrollChoose.MoveIndexPos(this.currentIndex)
    },
    
    // 滾動結果
    ChooseAction(index){
        //UIChip.SetCurrentIndex(index + 1)
        UIChip.SetCurrentIndex(index)
    },
};

module.exports = UIChip;
