let GameG = require("GameGlobal")
let gameData = require("GameData")
let gameModel = require("GameModel")

let rootRect = null
let pool = []
let currentIndex = -1

/** 用途: 遊戲類型-選擇遊戲介面 */
var UISelectMode = {
	/** 遊戲離開(斷線重連) */
	onExit(){
        pool = []
        currentIndex = -1
    },
    /** 初始化 */
    Init(root){        
        rootRect = root
        rootRect.active = false

        let self = this
        let rootGroupMode = cc.find("GroupMode", root)
        for(let i = 0; i < rootGroupMode.children.length; ++i){
            let child = rootGroupMode.children[i]
            pool[i] = {}
            pool[i].root = child
            pool[i].btn = child.getComponent(cc.Button)
            pool[i].btn.node.on('click',function(){
                GameG.PlayGameSound("se_click")
                self.SetSelectMode(i)
            })
            pool[i].Options = null
            pool[i].Count = parseInt(child.name.split("_")[1]);
        }
        this.txtCountdown = cc.find("ImageCountdown/Text", root).getComponent(cc.Label)

        this.imgTitle = cc.find("Background/ImageTitle", root)

        this.Frame = {}
        this.Frame.root = cc.find("Frame", rootRect)
        this.Frame.Show = function(trans){
            self.Frame.root.position = trans.position
            self.Frame.SetActive(true)
            GameG.ScheduleOnce(function(){
                self.Frame.SetActive(false)
            }, 2)
        }
        this.Frame.SetActive = function(isActive){
            self.Frame.root.active = isActive
        }
        this.Frame.SetActive(false)


		// 第一個按鈕特殊
        this.btnObj = {}
        this.btnObj.Root = pool[0].root;
        // 輪軸
        this.btnObj.Slot = {}
        this.btnObj.Slot.root = cc.find("Slot", this.btnObj.Root)
        this.btnObj.Slot.slotTitle = cc.find("SlotTitle", this.btnObj.Root)
        this.btnObj.Slot.spine = cc.find("Slot/SkeletonGraphic(free_spin)", this.btnObj.Root).getComponent(sp.Skeleton)
        this.btnObj.Slot.spine.node.actice = false
        
        // 次數
        this.btnObj.Count = {}
        this.btnObj.Count.root = cc.find("Count", this.btnObj.Root)
        this.btnObj.Count.countTitle1 = cc.find("CountTitle1", this.btnObj.Root)
        this.btnObj.Count.countTitle2 = cc.find("CountTitle2", this.btnObj.Root)
        this.btnObj.Count.countFree = cc.find("CountFree", this.btnObj.Root)
        this.btnObj.Count.Images = []
        
        for (let j = 1; j <= 4; ++j) {
            let obj = cc.find("Image"+j, this.btnObj.Count.root)
            obj.active = false
            this.btnObj.Count.Images.push(obj)
        }

        this.btnObj.Count.Close = function(){
            self.btnObj.Count.countTitle1.active = true
            self.btnObj.Count.countTitle2.active = true
            self.btnObj.Count.countFree.active = false
            for (let j = 0; j < self.btnObj.Count.Images.length; ++j) {
                self.btnObj.Count.Images[j].active = false
            }
        }

        this.btnObj.Count.SetActive = function(isActive){
            self.btnObj.Count.root.active = isActive
        }
        this.btnObj.Count.SetActive(false)
        
        // 線數
        this.btnObj.PayLine = {}
        this.btnObj.PayLine.root = cc.find("PayLine", this.btnObj.Root)
        this.btnObj.PayLine.payLineTitle = cc.find("PayLineTitle", this.btnObj.Root)
        this.btnObj.PayLine.Images = []
        
        for (let j = 1; j <= 4; ++j) {
            let obj = cc.find("Image" + j, this.btnObj.PayLine.root)
            obj.active = false
            this.btnObj.PayLine.Images.push(obj)
        }
        
        this.btnObj.PayLine.Close = function(){
            self.btnObj.PayLine.payLineTitle.color = cc.Color.WHITE
            self.btnObj.PayLine.payLineTitle.opacity = 255
            for (let j = 0; j < self.btnObj.PayLine.Images.length; ++j) {
                self.btnObj.PayLine.Images[j].active = false
            }
        }
        
        this.btnObj.PayLine.SetActive = function(isActive){
            self.btnObj.PayLine.root.ㄇctive = isActive
        }
        this.btnObj.PayLine.SetActive(false)

    },

	Select(index){
        for (let i = 0; i < pool.length; ++i){
            let obj = pool[i].root
            let images = obj.getComponentInChildren(cc.Sprite)

            for (let j = 0; j < images.length; ++j){
                images[j].node.color = cc.Color.WHITE
                images[j].node.stopAllActions()
            }

			if(i == index){

            }
			else{
                for (let j = 0; j < images.length; ++j){
                    node.opacity = 0
                    let sequence = GameG.NewTween(images[j].node) 
                    sequence.to(2, {color: cc.Color.GRAY})
                    sequence.start() 
                }
            }
        }
    },

	SelectBonusBtn(){
        // for (let i = 0; i < this.btnObj.images.length; ++i){
        //     let m = this.btnObj.images[i]
        //     m.active(false)
        // }
		this.btnObj.Slot.spine.node.active = true
        
        this.btnObj.Count.countTitle1.active = true
        this.btnObj.Count.countTitle2.active = true
        this.btnObj.Count.countFree.active = false
        for (let j = 0; j < this.btnObj.Count.Images.length; ++j) {
            this.btnObj.Count.Images[j].active = false
        }

		this.btnObj.Count.SetActive(true)
		this.btnObj.PayLine.Close()
		this.btnObj.PayLine.SetActive(true)
    },

    GetIndex(arr, value){
        for (let i = 0; i < arr.length; ++i) {
            let j = arr[i]
            if(j == value){
                return i
            }
        }
    },

    PayLineSelect(index){
        this.DOColor(this.btnObj.PayLine.payLineTitle, 0.5, 0, null, false)

        for (let j = 0; j < this.btnObj.PayLine.Images.length; ++j) {
            let obj = this.btnObj.PayLine.Images[j]
            if(j == index){
                obj.active = true
                this.DOColor(obj, 0.5, 1)
            }
            else{
                this.active = false
            }
        }
    },

    CountSelect(index){
        this.btnObj.Count.countTitle1.active = false
        this.btnObj.Count.countTitle2.active = false
        this.btnObj.Count.countFree.active = true
        for (let j = 0; j < this.btnObj.Count.Images.length; ++j) {
            this.btnObj.Count.Images[j].active = j == index
        }
    },

    ShowBonusBtn(receiveMsg, callback){
        GameG.PlayGameSound("se_featureselect")

		let freeGameData = gameData.GetFreeGameDataById(receiveMsg.ID)
		if(freeGameData == null){
			return
        }

		let count = freeGameData.Count
		let totalPayLine = freeGameData.TotalPayLine
		let rowNum = freeGameData.RowNum

		let spineTime = 3
		let spineCount = 5
		let countArr = [ 15, 10, 5, 3 ]
        let totalPayLineArr = [ 243, 1024, 3125, 7776 ]
        
        this.btnObj.Slot.slotTitle.active = false

        let sequence = GameG.NewTween(rootRect) 
        let self = this

        // 中間 ? x ? 動畫
        this.btnObj.Slot.spine.node.active = true
        this.btnObj.Slot.spine.setAnimation(0, rowNum+"x5_spin", false)
        sequence.delay(2.5)
        sequence.call(function(){
            self.btnObj.Slot.spine.setAnimation(0, rowNum+"x5_stop", false)
        })        
        sequence.delay(1.5)
        // 下方 ? x ? 圖字
        sequence.call(function(){
            self.PayLineSelect(self.GetIndex(totalPayLineArr, totalPayLine))
        })
        sequence.delay(2)
        // 上方播次數 播完四次 第五次播結果
		for (let i = 1; i <= spineCount; ++i){
			let delay = spineTime / spineCount
			sequence.delay(delay)
			sequence.call(function(){
				if(i == spineCount){					
                    self.CountSelect(self.GetIndex(countArr, count))
                }
				else{
					self.CountSelect(i)
                }
            })
		}
		sequence.delay(3)
		sequence.call(function(){
            self.Hide()

            if (callback != null){
                callback()
            }
        })
        sequence.start()
    },

    InState(){
	    if(rootRect.active == true){
            return true
        }
	    else{
		    return false
        }
    },

    RetFreeGameMode(receiveMsg, callback){
        if (this.InState() == false){
            return
        }

        this.Frame.Show(pool[currentIndex].root)

        let self = this
        if(pool[currentIndex].Options.Type == "bonus"){
            GameG.ScheduleOnce(function(){
                GameG.PlayGameSound("se_mysteryselect")
                self.Select(currentIndex)
                self.SelectBonusBtn()
                self.ShowBonusBtn(receiveMsg, callback)
            }, 0.17)
        }
        else{
            this.Select(currentIndex)
            GameG.ScheduleOnce(function(){
                self.Hide()
                if (callback != null){
                    callback()
                }
            }, 3)
        }
    },
    /** 顯示介面 */
    Show(){
		GameG.PlayGameBGM("bgm_fm")
		gameData.SetGameTypeIndex(gameData.EnumGameType.SelectGame)
        rootRect.active = true
        currentIndex = -1
        // 開始倒數計時
        this.StartCountdown()

        for(let i in pool){
            let count = pool[i].Count
            let data = gameData.GetGameOptionByCount(count)
            if(data != null){
                pool[i].Options = data
            }
            // Count=0 對應gameOptions.Options的 ID=0 為隨機選擇
            else if(count == 0){                
                pool[i].Options = gameData.GetGameOptionById(0)
            }
            else{
                cc.error("選擇免費遊戲Options的對應資料有誤")
            }
        }

        // 初始化界面
        this.btnObj.Slot.spine.node.active = false
		this.btnObj.Count.countFree.active = false
		this.btnObj.Count.SetActive(false)
        this.btnObj.PayLine.SetActive(false)

        this.btnObj.PayLine.Close()

        for (let i = 0; i < pool.length; ++i){
            this.DOColor(pool[i].root, 2)
        }

        this.DOColor(this.btnObj.Slot.slotTitle, 2)
		this.DOColor(this.btnObj.Count.countTitle1, 2)
		this.DOColor(this.btnObj.Count.countTitle2,  2)
		this.DOColor(this.btnObj.PayLine.payLineTitle, 2)

        this.DOColor(rootRect, 1)
    },

    // 逐漸顯示
    DOColor(node, showTime, delay = 0, callback = null, isAdd = true){
        node.active = true
        
        if (isAdd == true){
            node.opacity = 0
        }
        else{
            node.opacity = 255
        }

        let sequence = GameG.NewTween(node) 
        if (delay > 0){
            sequence.delay(delay)
        }

        if (isAdd == true){
            sequence.to(showTime, {opacity: 255})
        }
        else{
            sequence.to(showTime, {opacity: 0})
        }

        if (callback != null){
            sequence.call(callback)
        }
        sequence.start() 
    },
    /** 關閉介面 */
    Hide(){
        rootRect.active = false
        GameG.CancelCountdown(this.countdown)
        for(let i in pool){
            pool[i].Options = null
        }
    },
    /** 設置指定模式 */
    SetSelectMode(index){
        if(currentIndex >= 0){
            return;
        }
        GameG.PlayGameSound("se_featureselect")
        currentIndex = index
        //pool[index].imgNormal.active = false
        // pool[index].imgSelect.active = true
        // pool[index].particle.play()
        // pool[index].spine.playAnimation("enter")
        gameModel.SendChooseGame(pool[index].Options)
    },
    /** 開始倒數計時 */
    StartCountdown(){
        let self = this
        GameG.CancelCountdown(this.countdown)
        this.countdown = GameG.StartCountdown(function(countdown){
            self.txtCountdown.node.parent.active = (gameData.SelectModeCountdownShowTimer >= countdown && countdown > 0)
            self.txtCountdown.string = countdown
            if(countdown == 0){
                let randomIndex = GameG.MathRandom(0, pool.length)
                self.SetSelectMode(randomIndex)
            }
        }, 1, gameData.SelectModeCountdownTotalTimer)
    },
};

module.exports = UISelectMode