var gameGlobal = require("GameGlobal")
var gameData = require("GameData")

/** 用途: 遊戲類型-免費遊戲介面 */
var UIFreeSpin = {
    extends: cc.Component,

    // 離開遊戲
    onExit(){
    
    },
    
    Init(root, rootResult){
        this.doorCloseX = 1000
        this.sequencePress = null
        this.sequenceTime = null

        this.rootRect = root
        this.rootRect.active = false
        
        this.rootDoorL = cc.find("ImageDoorL", root)
        this.rootDoorR = cc.find("ImageDoorR", root)
        
        this.imgPress = cc.find("ButtonStart/ImagePress", root).getComponent(cc.Sprite)
        this.txtTotalFreeCount = cc.find("ButtonStart/TextFreeCount", root).getComponent("TextControl")
        
        this.imgSecond = cc.find("ButtonStart/ImageSecond", root).getComponent(cc.Sprite)
        this.txtSecond = cc.find("ButtonStart/TextSecond", root).getComponent(cc.Label)
        
        this.rootEnd = cc.find("ImageEnd", root)
        this.txtScore = cc.find("ImageEnd/TextScore", root).getComponent("TextControl")
        
        this.btnStart = cc.find("ButtonStart", root).getComponent(cc.Button)
        this.btnStart.node.on('click', function () {
            gameGlobal.PlayGameSound("se_click")
            UIFreeSpin.StartGame()
        })

        this.txtFreeCount = cc.find("ImageFreeSpin/TextFreeCount", rootResult).getComponent("TextControl")
    },

    // 取得目前是否在free spin
    InState(){
        if(this.rootRect.activeInHierarchy == true)		
            return true
        else	
            return false
    },
    
    // 顯示介面
    Show(freeCount, closeCallback,openCallback){
        this.txtFreeCount.text = (freeCount -1).toString()
        if(this.rootRect.activeInHierarchy == true){
            if(openCallback != null){
                openCallback()
            }
            return
        }
        this.startCallback = openCallback
        this.rootRect.active = true
        this.rootEnd.active = false
            
        this.txtTotalFreeCount.text = freeCount.toString()
        
        this.btnStart.node.active = false
        this.rootDoorL.active = true
        this.rootDoorR.active = true
        //this.rootDoorL.anchoredPosition = cc.v2(this.doorCloseX *-1, 0)
        //this.rootDoorR.anchoredPosition = cc.v2(this.doorCloseX, 0)
        this.rootDoorL.position = cc.v2(this.doorCloseX *-1, 0)
        this.rootDoorR.position = cc.v2(this.doorCloseX, 0)        

        this.imgPress.node.active = true
        this.imgSecond.node.active = false
        this.txtSecond.node.active = false
        
        gameGlobal.PlayGameSound("se_cutscenes")
        
        let self = this

        // 關門
        let sequenceR = cc.tween(this.rootDoorR)
        sequenceR.to(0.5, {position: cc.v2(0, 0)})
        // 等待時間
        sequenceR.delay(1.0)
        // 開門
        sequenceR.to(1.0, {position: cc.v2(this.doorCloseX, 0)})
        sequenceR.start()
		
        // 關門
        let sequenceL = cc.tween(this.rootDoorL)
        sequenceL.to(0.5, {position: cc.v2(0, 0)})
        // 等待時間
        sequenceL.delay(1.0)		
        sequenceL.call(function(){
            self.btnStart.node.active = gameData.IsRecover == false
            gameGlobal.PlayGameBGM("bgm_fg")
            if(closeCallback != null){
                closeCallback()
            }
        })        
        // 開門
        sequenceL.to(1.0, {position: cc.v2(this.doorCloseX *-1, 0)})
        sequenceL.call( function(){
            self.rootDoorL.active = false
            self.rootDoorR.active = false
            if(gameData.IsRecover == true){
                UIFreeSpin.StartGame()
            }
            else if(self.btnStart.node.activeInHierarchy == true){
                // 點擊開始遊戲
                if(self.sequencePress != null){
                    self.sequencePress.stop()
                }

                if(self.sequenceTime != null){
                    self.sequenceTime.stop()
                }
                
                self.imgPress.node.opacity = 0
                self.sequencePress = cc.tween(self.imgPress.node)
                var tween = cc.tween(self.sequencePress)
                tween.to(0.5, {opacity: 255})
                tween.to(0.5, {opacity: 0})
                self.sequencePress.repeat(9999999999, tween).start()

                self.sequenceTime = cc.tween(self.txtSecond.node)	
                for (let i = gameData.FreeSpinTotalCountdown; i > 0; --i){
                    self.sequenceTime.call(function(){
                        self.txtSecond.string = gameGlobal.GetLocalizedString("秒後開始").replace("####", i.toString())
                        // self.txtSecond.string = i.toString()
                        self.imgPress.node.active = i > gameData.FreeSpinShowCountdown
                        //self.imgSecond.node.active = i <= gameData.FreeSpinShowCountdown
                        self.txtSecond.node.active = i <= gameData.FreeSpinShowCountdown
                    })
                    self.sequenceTime.delay(1)
                }
                self.sequenceTime.call( function(){
                    UIFreeSpin.StartGame()
                })
				self.sequenceTime.start()
            }
        })
        sequenceL.start()
    },
        
    // 關閉介面
    Hide(score, closeCallback,openCallback){
        if(this.rootRect.activeInHierarchy == false){
            if(openCallback != null){
                openCallback()
            }
            return
        }
            
        this.rootDoorL.active = true
        this.rootDoorR.active = true
        //this.rootDoorL.anchoredPosition = cc.v2(this.doorCloseX * -1,0)
        //this.rootDoorR.anchoredPosition = cc.v2(this.doorCloseX,0)
        this.rootDoorL.position = cc.v2(this.doorCloseX * -1,0)
        this.rootDoorR.position = cc.v2(this.doorCloseX,0)

        if(score != null){
            this.rootEnd.active = true
            this.txtScore.text = gameGlobal.FormatNum(score)
            gameGlobal.NewDelayOnce(function() {
                gameGlobal.PlayGameSound("se_cutscenes")
                UIFreeSpin.ShowEffect(closeCallback, openCallback)
            }, 1.5);
        }
        else{
            UIFreeSpin.ShowEffect(closeCallback,openCallback)
        }
    },

    ShowEffect(closeCallback,openCallback){
        let tweenL = cc.tween(this.rootDoorL)
		.to(0.5, {position: cc.v2(0, 0)})
		.start()

		let self = this
        let tweenR = cc.tween(this.rootDoorR)
		.to(0.5, {position: cc.v2(0, 0)})        
        .call(function(){
            gameGlobal.NewDelayOnce(function() {
                self.rootEnd.active = false
                gameGlobal.PlayGameBGM("bgm_mg")
                if(closeCallback != null){
                    closeCallback()
                }

                let tweenL1 = cc.tween(self.rootDoorL)
                .to(1.0, {position: cc.v2(self.doorCloseX *-1, 0)})
				.start()
        
                let tweenR1 = cc.tween(self.rootDoorR)
                .to(1.0, {position: cc.v2(self.doorCloseX, 0)})                  
                .call(function(){
                    self.rootRect.active = false
                    if(openCallback != null){
                        openCallback()
                    }
                })
				.start()
            }, 1.0)
        })
		.start()
    },
    // 回合開始
    SetGameStart()	{
    
    },
    // 回合結束
    SetGameEnd(){
        
    },
    
    // 開始遊戲
    StartGame(){
        this.btnStart.node.active = false
        if(this.startCallback != null){
            this.startCallback()
        }
        if(this.sequencePress != null){
            this.sequencePress.stop()
            this.sequencePress = null
        }
        if(this.sequenceTime != null){
            this.sequenceTime.stop()
            this.sequenceTime = null
        }        
    },
};

module.exports = UIFreeSpin;

