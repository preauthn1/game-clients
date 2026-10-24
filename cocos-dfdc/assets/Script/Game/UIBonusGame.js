var gameGlobal = require("GameGlobal")
var G = require("Global")
var gameData = require("GameData")
var gameModel= require("GameModel")

/** 用途: 遊戲類型-獎勵遊戲介面 */
var UIBonusGame = {
    extends: cc.Component,
    
    // 離開遊戲
    onExit() {
        if(this.sequenceCountdown != null) {
            this.sequenceCountdown.stop()
            this.sequenceCountdown = null
        }
    },
    
    Init(root){

        this.pool = []
        this.currentIndex = 0
        this.completeCallback = null
        this.sequenceCountdown = null

        this.rootRect = root
        this.rootRect.active = false
    
        this.rootBg = cc.find("ImageBg", root)
        this.imgBg = cc.find("ImageBg", root).getComponent(cc.Sprite)
            
        this.rootMoney = cc.find("ImageMoney", root)
        this.txtMoney = cc.find("ImageMoney/Text", root).getComponent("TextControl")
        this.rootStep = cc.find("ImageMoney/RootStep", root)
        // 時間倒數文字
        this.txtCountdown = cc.find("TextCountdown", root).getComponent(cc.Label)
        
        this.rootMask = cc.find("ImageMask", root)
        this.rootMask.active = false
        
        let index = 1
        this.imgMoney = {}
        for (let i = 0; i < this.rootStep.children.length; ++i) {
            this.imgMoney[index] = this.rootStep.children[i].getComponent(cc.Sprite)
            index = index +1
        }
        
        index = 1
        for (let i = 0; i < this.rootBg.children.length; ++i) {
            let group = this.rootBg.children[i]
            for (let j = 0; j < group.children.length; ++j) {
                let object = group.children[j]
                let tempIndex = index
                this.pool[index] = []
                this.pool[index].root = object.getComponent(cc.Sprite)
                this.pool[index].anim = object.getComponent("AnimationController")
                this.pool[index].rootCoin = cc.find("ImageCoin", object)
                this.pool[index].btn = object.getComponent(cc.Button)
                this.pool[index].btn.node.on('click', function () {
                    gameGlobal.PlayGameSound("se_click")
                    UIBonusGame.ClickChoose(tempIndex)
                })
                index = index +1
            }
        }
    },

    // 回合開始
    SetGameStart() {
    
    },
    
    // 回合結束
    SetGameEnd() {
    
    },

    GetCanChoose() {
        let list = []
        for (let i = 1; i < this.pool.length; ++i) {
            if(this.pool[i].btn.interactable == true){
                list.push(i)
            }
        }

        let index = G.getRandom(1, list.length) - 1
        return list[index]
    },
    
    AutoChoose() {
        let self = this
        
        this.rootMask.active = true

		gameGlobal.NewDelayOnce(function() {
            UIBonusGame.ClickChoose(self.GetCanChoose())
            self.rootMask.active = false
            if(self.currentIndex < gameData.BonusDetail.length){
                UIBonusGame.AutoChoose()
            }
		}, 0.2)
    },
    
    // 開始倒數
    StartCountdown() {
        let self = this
        
        if(this.sequenceCountdown != null){
			this.sequenceCountdown.stop()
			this.sequenceCountdown = null
		}
		this.sequenceCountdown = cc.tween(this.rootRect)
        this.sequenceCountdown.delay(1)        
		for (let i = gameData.BonusTotalCountdown; i > 0; --i) {
			this.sequenceCountdown.call( function() {
				self.txtCountdown.node.active = i <= gameData.BonusShowCountdown
                self.txtCountdown.string = i.toString()
			})
			this.sequenceCountdown.delay(1)
		}
		this.sequenceCountdown.call( function() {
			self.txtCountdown.node.active = false
			UIBonusGame.AutoChoose()
		})
		this.sequenceCountdown.start()
    },
    
    Show(initPosition, callback) {
        if(this.rootRect.activeInHierarchy == true){
            return
        }
            
        if(gameData.BonusDetail == null){
            if(callback != null) {
                callback()
            }
            return
        }
        
        this.txtCountdown.node.active = false
        this.currentIndex = 0
        this.completeCallback = callback
        this.rootRect.active = true
        this.rootBg.active = true
        this.rootMoney.active = false
        this.initPosition = initPosition || cc.v3(0,0,0)
        
        gameGlobal.PlayGameBGM("bgm_jp")
        
        
        for (let i in this.imgMoney) {
            this.imgMoney[i].node.active = false
        }
        
        for (let i in this.pool) {
            if (this.pool[i].anim != null) {
                this.pool[i].anim.ChangeState("default")
                this.pool[i].anim.SetInteger("icon",0)
                this.pool[i].anim.SetBool("comeout",false)
                this.pool[i].anim.SetBool("win",false)
            }
            this.pool[i].btn.interactable = true
        }
        
		let count = 0
        for (let i = 0; i < gameData.BonusDetail.length; ++i) {
            let index = gameData.BonusDetail[i].Place
            let icon = gameData.BonusDetail[i].Icon
			count = count +1
            if(index > 0){
                this.currentIndex = count
                if (this.pool[index].anim)
                    this.pool[index].anim.SetInteger("icon",icon)
                this.pool[index].btn.interactable = false
            }
        }
        
		let self = this
        if(this.currentIndex == 0){
            this.imgBg.node.opacity = 0
			
			cc.tween(this.imgBg.node)
            .to(0.5, {opacity: 255})
            .call(function(){
				for (let i in self.pool) {
                    if (self.pool[i].anim != null)
                        self.pool[i].anim.SetBool("comein",false)
                }
                
                UIBonusGame.StartCountdown()                
            })
			.start()
	
            for (let i in this.pool) {
                if (this.pool[i].anim != null)
                    this.pool[i].anim.SetBool("comein",true)
				
                this.pool[i].rootCoin.position = initPosition
				
				cc.tween(this.pool[i].rootCoin)
				.to(0.3, {position: cc.v2(0, 0)})
				.start()
            }	
			
            // let sequence = CS.DG.Tweening.DOTween.Sequence()	
            // sequence.Append(this.imgBg.DOColor(new cc.Color(this.imgBg.color.r,this.imgBg.color.g,this.imgBg.color.b,1), 0.5))
            // for (let i = 0; i < this.pool.length; ++i) {
                // if (this.pool[i].anim)
                    // this.pool[i].anim.SetBool("comein",true)
                // this.pool[i].rootCoin.position = initPosition
                //sequence.Join(pool[i].rootCoin.DOLocalJump(cc.v3(0,0,0), 200, 1, 0.6))
                // sequence.Join(this.pool[i].rootCoin.DOAnchorPos(cc.v2(0,0), 1))
            // }
            // sequence.OnComplete( function() {
                // for (let i = 0; i < this.pool.length; ++i) {
                    // if (this.pool[i].anim)
                        // this.pool[i].anim.SetBool("comein",false)
                // }
                
                // UIBonusGame.StartCountdown()
            // })
        }
        else if(this.currentIndex >= gameData.BonusDetail.length){
            UIBonusGame.Hide()
		}
        else {
            UIBonusGame.ShowMostSomeImage()
            UIBonusGame.StartCountdown()
        }
    },
    
    // 目前選到第幾個符號
    GetCurrentIndex() {
        return this.currentIndex
    },
    
    ClickChoose(tempIndex) {
        let self = this

        this.currentIndex = this.currentIndex +1
        this.txtCountdown.node.active = false
		
		if(this.sequenceCountdown != null){
			this.sequenceCountdown.stop()
			this.sequenceCountdown = null
		}
		
        if(this.currentIndex > gameData.BonusDetail.length)
            return
        else if(this.currentIndex < gameData.BonusDetail.length)
            UIBonusGame.StartCountdown()
            
        let icon = gameData.BonusDetail[this.currentIndex -1].Icon
        if (this.pool[tempIndex].anim){
            this.pool[tempIndex].anim.ChangeState("comeout")
            //this.pool[tempIndex].anim.SetBool("comeout",true)
            gameGlobal.NewDelayOnce(function(){
                self.pool[tempIndex].anim.ChangeState("icon" + icon)
                //self.pool[tempIndex].anim.SetInteger("icon",icon)
            }, 0.35)
        }

        gameModel.SendBonusGameIcon(this.currentIndex,tempIndex,icon);
        gameData.BonusDetail[this.currentIndex -1].Place = tempIndex
        
        gameGlobal.PlayGameSound("se_flip")
                    
        for (let i in this.pool) {
            if (this.pool[i].anim)
                this.pool[i].anim.SetBool("win",false)
        }		
                
        for (let i in gameData.BonusDetail) {
            let temp = gameData.BonusDetail[i].Place
            if(temp > 0){
                this.pool[temp].btn.interactable = false
            }
        }
        		
        let tween1 = cc.tween(this.pool[tempIndex].root.node)
        tween1.delay(0.5)
        tween1.call(function(){
            UIBonusGame.ShowMostSomeImage()
            if(self.currentIndex >= gameData.BonusDetail.length){
                gameGlobal.PlayGameSound("se_flipend")
            }
        })
        if(this.currentIndex >= gameData.BonusDetail.length){
            tween1.delay(1)
            tween1.call(function(){
                self.rootMoney.active = true
                let index = gameData.BonusDetail[gameData.BonusDetail.length -1].Icon
                self.imgMoney[index].node.active = true
                self.txtMoney.text = gameGlobal.FormatNum(gameData.BonusMoney)
                if(index == 1)
                    gameGlobal.PlayGameSound("jp_grand")
                else if(index == 2)
                    gameGlobal.PlayGameSound("jp_major")
                else if(index == 3)
                    gameGlobal.PlayGameSound("jp_minor")
                else if(index == 4)
                    gameGlobal.PlayGameSound("jp_mini")
            })			
            tween1.delay(5)
            tween1.call(function(){
                self.rootBg.active = false
                self.rootMoney.active = false		
                UIBonusGame.Hide()
            })
        }
		tween1.start()
    },
        
    // 關閉介面
    Hide(){
        this.currentIndex = 0	
        gameData.BonusDetail = null
        this.rootRect.active = false
        gameGlobal.PlayGameBGM("bgm_mg")
        if(this.completeCallback != null){
            this.completeCallback()
        }
    },
    
    // 顯示最多相同的圖片
    ShowMostSomeImage() {
        let count = []
        let maxCount = 0
        for (let i in gameData.BonusDetail) {
            if(gameData.BonusDetail[i].Place > 0){
                let icon = gameData.BonusDetail[i].Icon
                count[icon] = count[icon] || 0
                count[icon] = count[icon] +1
                if(count[icon] > maxCount)
                    maxCount = count[icon]
            }
        }	
        
        // 計算延遲播放時間
        let time = 0.02
		for(let k in count){
			if(count[k] == maxCount && maxCount > 1){
				for (let i = 0; i < gameData.BonusDetail.length; ++i) {
					let Icon = gameData.BonusDetail[i].Icon
					let tempIndex = gameData.BonusDetail[i].Place
					if(Icon == k && tempIndex > 0) {
                        if (this.pool[tempIndex].anim != null){
                            let StateName = this.pool[tempIndex].anim.GetStateName()
                            if (StateName != null && StateName == "comeout"){
                                time = 0.15
                            }                          
                        }
					}
				}
			}
		}

        let self = this
		for(let k in count){
			if(count[k] == maxCount && maxCount > 1){
				for (let i = 0; i < gameData.BonusDetail.length; ++i) {
					let Icon = gameData.BonusDetail[i].Icon
					let tempIndex = gameData.BonusDetail[i].Place
					if(Icon == k && tempIndex > 0) {
                        if (this.pool[tempIndex].anim != null){
                            gameGlobal.NewDelayOnce(function(){
                                self.pool[tempIndex].anim.ChangeState("icon" + Icon + "_win")
                            }, time)                            
                        }
					}
				}
			}
		}
    },
};

module.exports = UIBonusGame;
