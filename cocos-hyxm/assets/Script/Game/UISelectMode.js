let GameG = require("GameGlobal")
let gameData = require("GameData")
let gameModel = require("GameModel")

let rootRect = null
let pool = []
let currentIndex = -1

/** 用途: 遊戲類型-選擇遊戲介面(對應gameData.EnumGameType.SelectGame) */
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

        let rootGroupMode = cc.find("GroupMode", root)
        for(let i = 0; i < rootGroupMode.children.length; ++i){
            rootGroupMode.children[i].active = false
        }

        this.txtCountdown = cc.find("ImageCountdown/Text", root).getComponent(cc.Label)
    },
    /** 設置資料 */
    SetData(data){
        let self = this
        for(let i = 0; i < data.length; ++i){
            if(pool[i] == null){
                let target = cc.find("GroupMode/Mode" + i, rootRect)
                pool[i] = {}
                pool[i].root = target
                pool[i].root.active = true
                pool[i].imgNormal = cc.find("ImageNormal", target)
                pool[i].imgNormal.active = true
                pool[i].imgSelect = cc.find("ImageSelect", target)
                pool[i].imgSelect.active = false
                pool[i].btn = target.getComponent(cc.Button)
                pool[i].btn.node.on('click',function(){
                    GameG.PlayGameSound("se_click")
                    // 設置指定模式
                    self.SetSelectMode(i)
                })
                pool[i].particle = cc.find("ImageSelect", target).getComponent("MotionEffectControl")

                pool[i].ModeID = data[i].ID
                pool[i].Count = data[i].Count
            }
        }
    },
    /** 顯示介面 */
    Show(){
		//GameG.PlayGameBGM("bgm_fm")
		gameData.SetGameTypeIndex(gameData.EnumGameType.SelectGame)
        rootRect.active = true
        currentIndex = -1
        // 開始倒數計時
        this.StartCountdown()
    },
    /** 關閉介面 */
    Hide(){
        rootRect.active = false
        GameG.CancelCountdown(this.countdown)
        for(let i in pool){
            pool[i].imgNormal.active = true
            pool[i].imgSelect.active = false
        }
    },
    /** 設置指定模式 */
    SetSelectMode(index){
        if(currentIndex >= 0){
            return;
        }
        
        currentIndex = index
        pool[index].imgSelect.active = true
        pool[index].particle.play()

        GameG.ScheduleOnce(function(){
            gameModel.SendChooseGame(gameData.GetGameOption(pool[index].ModeID))
            if(gameData.gameOptions != null){
                gameData.gameOptions.Times = gameData.gameOptions.Times -1
                if(gameData.gameOptions.Times == 0){
                    gameData.gameOptions = null
                }
            }
        }, 1)
    },
    /** 開始倒數計時 */
    StartCountdown(){
        let self = this
        GameG.CancelCountdown(this.countdown)
        this.countdown = GameG.StartCountdown(function(countdown){
            self.txtCountdown.node.parent.active = (gameData.SelectModeCountdownShowTime >= countdown && countdown > 0)
            self.txtCountdown.string = countdown
            if(countdown == 0){
                let randomIndex = GameG.MathRandom(0, pool.length)
                self.SetSelectMode(randomIndex)
            }
        }, 1, gameData.SelectModeCountdownTotalTime)
    },
};

module.exports = UISelectMode