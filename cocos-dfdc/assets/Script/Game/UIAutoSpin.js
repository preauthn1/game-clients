var gameGlobal = require("GameGlobal")

/** 用途: 自動旋轉次數選擇 */
var UIAutoSpin = {
    extends: cc.Component,

    // 離開遊戲
    onExit(){
    
    
    },
    
    CreateClone(index)
    {
        if(this.pool[index] != null) return this.pool[index]
        let clone = cc.instantiate(this.prefab);
        if(clone == null) return null
        this.prefab.parent.addChild(clone)
        clone.position = cc.v2(0,0)
        clone.scale = 1
        clone.name = this.prefab.name + index
        clone.active = true;

        this.pool[index] = []
        this.pool[index].root = clone
        this.pool[index].btn = clone.getComponent(cc.Button)
        this.pool[index].txt = cc.find("Text", clone).getComponent(cc.Label)
    },
    
    Init(root){
        this.pool = []
        this.currentCount = 0 //自動轉動(-1.無限,0.手動)
        this.clickCallback = null

        this.rootRect = root
        this.rootRect.active = false;

        this.rootOption = cc.find("OptionGroup", root)
        
        this.prefab = cc.find("OptionGroup/ButtonOption", root)
        this.prefab.active = false;
        
        this.btnClose = cc.find("ButtonClose", root).getComponent(cc.Button)
        this.btnClose.node.on('click', function () {
            gameGlobal.PlayGameSound("se_click")
            UIAutoSpin.Hide()
        })
    },
    
    SetOptionList(data){
        for (let i = 0; i < data.length; ++i)
        {
            UIAutoSpin.CreateClone(i)
            
            let tempIndex = i
            this.pool[i].count = data[i]
            this.pool[i].txt.string = data[i]
            this.pool[i].btn.node.on('click', function () {
                gameGlobal.PlayGameSound("se_click")
                this.currentCount = data[tempIndex]
                UIAutoSpin.Hide()
                if(this.clickCallback)
                    this.clickCallback()
            })
        }
    },
    
    SetManual(){
        this.currentCount = 0
    },
    
    // 顯示介面
    Show(callback){
        if(this.pool.length == 0) {
            if(this.currentCount == -1)
                this.currentCount = 0
            else
                this.currentCount = -1
            
            if(callback)
                callback()
            
            return
        }
        this.clickCallback = callback
    
        this.rootRect.active = true;
        
        //let _x = this.rootOption.sizeDelta.x
        let _x = this.rootOption.width
        this.rootOption.position = cc.v2(_x,0)
        //this.rootOption.anchoredPosition = cc.v2(_x,0)
        
        cc.tween(this.rootOption)
        .by(0.2, {position: cc.v3(0, 0.2, 0)})
        .start();
    },
        
    // 關閉介面
    Hide() {
        //let _x = this.rootOption.sizeDelta.x
        let _x = this.rootOption.width
        let self = this

        cc.tween(this.rootOption)
        .by(0.2, {position: cc.v3(0, 0.2, 0)})
        .call( function() {
            self.rootRect.active = false;
        })
        .start();
    },
    
    // 取得是否自動旋轉
    GetIsAutoMode() {
        if(this.currentCount == -1)
            return true
        else if(this.currentCount > 0)
            return true
        else
            return false
    },
    /** 取得剩餘次數 */
    GetCurrentCount() {
        return this.currentCount
    },
    
    // 回合開始
    SetGameStart()	{
    
    },

    // 回合結束
    SetGameEnd(){
        
    },

    // 開始轉動
    StartSpin() {
        if(this.currentCount > 0)
            this.currentCount = this.currentCount -1
    },
    
    StopSpin()	{
        
    },
    
};

module.exports = UIAutoSpin;
