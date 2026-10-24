let GameG = require("GameGlobal")
let gameData = require("GameData");
let gameModel= require("GameModel");

let pool = []
let completeCallback = null

/** 用途: 遊戲類型-獎勵遊戲介面 */
var UIBonusGame = {
	extends: cc.Component,
    /** 初始化 */
	Init(root){
        let self = this
		this.rootRect = root
        this.rootRect.active = false
        // 獎金池存放位置
        this.rootJackpotPool = cc.find("RootJackpotPool", root)
        // ---獎勵物件
        this.rootOptionGroup = cc.find("OptionGroup", root)
        for(let i in this.rootOptionGroup.children){
            let child = this.rootOptionGroup.children[i]
            let index = parseInt(i) +1
            pool[index] = {}
            pool[index].root = child
            pool[index].endPos = child.position
            pool[index].anim = cc.find("Spine", child).getComponent(sp.Skeleton)
            pool[index].ps = cc.find("Particle", child)
            pool[index].ps.active = false
            pool[index].btn = child.getComponent(cc.Button)
            pool[index].btn.node.on('click',function(){
                GameG.PlayGameSound("se_click")
                self.SetSelectOption(index)
            })
            pool[index].rewardValue = null
        }

        this.background = cc.find("Background", root)  

        this.txtNote = cc.find("Background/ImageNote", root).getComponent(cc.Label)        
        // 時間倒數文字
        this.txtCountdown = cc.find("ImageCountdown/Text", root).getComponent(cc.Label)
        // ---結果
        this.rootResult = cc.find("RootResult", root)
        // 結果-獲得金額文字
        this.txtMoney = cc.find("RootResult/TextMoney", root).getComponent(cc.Label)
        // 結果-獲得獎勵圖
        this.poolReward = []
        for(let i =1; i <= 4; ++i){
            this.poolReward[i] = cc.find("RootResult/ImageReward" + i, root)
        }
	},
    /** 獎金池存放位置(依遊戲畫面需求，切換層級用) */
	GetRootRectJackpotPool(){
		return this.rootJackpotPool
	},
    /** 顯示介面 */
	Show(callback, bowlNode){
        GameG.PlayGameBGM("bgm_jp")
        GameG.PlayGameSound("se_jptrigger")
		gameData.SetGameTypeIndex(gameData.EnumGameType.BonusGame)
        this.rootRect.active = true
        // 開始倒數計時
        this.StartCountdown()
        // 重設
        this.Reset()
        completeCallback = callback

        // 背景
        this.background.opacity = 0
        let sequence1 = GameG.NewTween(this.background)
        sequence1.to(1, {opacity: 255})
        sequence1.start()

        this.rootJackpotPool.opacity = 0
        let sequence2 = GameG.NewTween(this.rootJackpotPool)
        sequence2.to(1, {opacity: 255})
        sequence2.start()        

        // 金幣叢聚寶盆飛出來
        let bowlPos = GameG.GetWorldPosition(bowlNode)
        for(let i in pool){
            let obj = pool[i]
            obj.root.position = cc.v2(0,0)
            obj.root.position = GameG.WorldConvertLocalPointAR(obj.root, bowlPos)
            
            let sequence = GameG.NewTween(obj.root)
            sequence.to(1, {position: obj.endPos})
            sequence.start()
        }
        // 恢復選擇過的獎勵
        for(let i in gameData.bonusGame.Records){
            let data = gameData.bonusGame.Records[i]
            this.RecoverSelectOption(data)
        }
    },
    /** 關閉介面 */
    Hide(){
        this.rootRect.active = false
        // 取消倒數計時
        GameG.CancelCountdown(this.countdown)
    },
    /** 重設 */
    Reset(){
        this.rootResult.active = false
        for(let i in this.poolReward){
            this.poolReward[i].active = false
        }
        for(let i in pool){
            pool[i].btn.interactable = true
            pool[i].anim.setAnimation(0, "coin_idle", true);
            pool[i].ps.active = false
            pool[i].rewardValue = null
        }
    },
    /** 開始倒數計時 */
    StartCountdown(){
        let self = this
        // 取消倒數計時
        GameG.CancelCountdown(this.countdown)
        this.countdown = GameG.StartCountdown(function(countdown){
            self.txtCountdown.node.parent.active = (gameData.BonusGameCountdownShowTimer >= countdown && countdown > 0)
            self.txtCountdown.string = countdown
            // 倒數結束時
            if(countdown == 0){
                // 翻開剩下的獎勵
                for(let i in gameData.bonusGame.Records){
                    let randomIndex = self.GetSelectRandom()
                    self.SetSelectOption(randomIndex)
                }
            }
        }, 1, gameData.BonusGameCountdownTotalTimer)
    },
    /** 關閉倒數計時 */
    HideCountdown(){
        GameG.CancelCountdown(this.countdown)
        this.txtCountdown.node.parent.active = false
    },
    /** 取得可選擇的選項 */
    GetSelectRandom(){
        let data = []
        for(let i in pool){
            if(pool[i].rewardValue == null){
                data.push(i)
            }
        }
        let index = GameG.MathRandom(1, data.length)
        return data[index]
    },
    /** 取得獎勵對應動畫名稱 */
    GetAnimName(value){
        if(value == 1){
            return "01"
        }
		else if(value == 2){
            return "02"
        }
		else if(value == 3){
            return "03"
        }
		else if(value == 4){
			return "04"
        }
    },
    /** 選擇金幣-傳送封包 */
    SetSelectOption(index){
        // 已經被選過
        if(pool[index].btn.interactable == false){
            return
        }
        // 取得沒有被選過的獎勵
        let data = null
        for(let i in gameData.bonusGame.Records){
            let record = gameData.bonusGame.Records[i]
            if(record.Location == 0){
                data = record;
                break;
            }
        }
        if(data == null){
            return
        }
        // 指定獎勵的選擇位置
        data.Location = parseInt(index)
        // 封包
        gameModel.SendPickBonus(data)
        // 關閉按鈕的interactable
        pool[index].btn.interactable = false
        // 紀錄獎勵值
        pool[index].rewardValue = data.RewareValue
    },
    // 選擇金幣-封包結果
    SetPickBonusRet(data){
        let index = data.Location
        if(pool[index] == null){
            return
        }
        
        GameG.PlayGameSound("se_flip")
        // 獎勵被選擇動畫
        let animName = this.GetAnimName(data.RewareValue)
        pool[index].anim.setAnimation(0, "flip" + animName, false);
        pool[index].anim.addAnimation(0, "icon" + animName, true);

        // 重新倒數計時
        this.StartCountdown()
        // 未選的獎勵灰階
        this.ShowSelectGrayscale(data)
        
        let self = this
        GameG.ScheduleOnce(function(){
            // 顯示目前翻開裡最多數量的獎勵
            self.ShowMostReward()
            // 獎勵全部選擇完畢顯示結果
            self.ShowSelectComplete(data)
        }, 1.4)
    },
    /** 恢復選擇過的獎勵 */
    RecoverSelectOption(data){
        let index = data.Location
        if(pool[index] == null){
            return
        }
        pool[index].btn.interactable = false
        pool[index].rewardValue = data.RewareValue
        let animName = this.GetAnimName(data.RewareValue)
        pool[index].anim.setAnimation(0, "icon" + animName, true);

        // 顯示目前翻開裡最多數量的獎勵
        this.ShowMostReward()
        // 未選的獎勵灰階
        this.ShowSelectGrayscale(data)
        // 獎勵全部選擇完畢顯示結果
        this.ShowSelectComplete(data)
    },
    /** 顯示目前翻開裡最多數量的獎勵 */
    ShowMostReward(){
        let count = 0 // 目前最多的數量
        let array = []
        // 計算數量
        for(let i in gameData.bonusGame.Records){
            let data = gameData.bonusGame.Records[i]
            let index = data.RewareValue
            // 選過的獎勵
            if(data.Location != 0){
                array[index] = (array[index] == null)? 1 : array[index] +1
                if(array[index] > count){
                    count = array[index]
                }
            }
        }
        // 
        for(let rewardValue in array){
            for(let i in pool){
                if(pool[i].rewardValue != rewardValue){
                    continue
                }
                // 還在播放翻開來的動畫
                if(pool[i].anim.animation.indexOf("start_") >= 0){
                    continue
                }
                let animName = this.GetAnimName(rewardValue)             
                // 設置靜態動畫
                pool[i].anim.setAnimation(0, "icon" + animName, true);
                // 這個獎勵不是最多的 或是 數量為兩個以下
                if(array[rewardValue] != count || count < 2){
                    continue
                }
                // 設置最多獎勵的動畫
                pool[i].anim.addAnimation(0, "icon" + animName + "_idle", true);

                if(array[rewardValue] != count || count < 3){
                    continue
                }
                pool[i].ps.active = true;
            }
        }
    },
    /** 未選的獎勵灰階 */
    ShowSelectGrayscale(data){
        // 翻開的不是最後個獎勵
        if(data.ID != gameData.GetBonusGameLastRecordID()){
            return
        }
        GameG.PlayGameSound("se_flipend")
        for(let i in pool){
            // 沒有翻開的獎勵
            if(pool[i].rewardValue == null){
                // 設置灰階動畫
                //pool[i].anim.setAnimation(0, "bw_coin", false);
            }
        }
    },

    /** 獎勵全部選擇完畢顯示結果 */
    ShowSelectComplete(data){    
        // 翻開的不是最後個獎勵
        if(data.ID != gameData.GetBonusGameLastRecordID()){
            return
        }
        // 關閉倒數計時
        this.HideCountdown()
        
        let self = this
        GameG.ScheduleOnce(function(){
            // 顯示贏得金額
            self.ShowResult(data)
            // 等待關閉介面
            self.WaitHide(data)
        }, 2)
    },

    /** 顯示贏得金額 */
    ShowResult(data){
        this.rootResult.active = true
        this.poolReward[data.RewareValue].active = true
        this.txtMoney.string = GameG.FormatNum(gameData.bonusGame.WinMoney)
    },
    /** 等待關閉介面 */
    WaitHide(data){        
        let timer = 1
        if(data.RewareValue == 1){
            GameG.PlayGameSound("jp_grand")
            timer = 6
        }
        else if(data.RewareValue == 2){
            GameG.PlayGameSound("jp_major")
            timer = 5
        }
        else if(data.RewareValue == 3){
            GameG.PlayGameSound("jp_minor")
            timer = 5
        }
        else if(data.RewareValue == 4){
            GameG.PlayGameSound("jp_mini")
            timer = 4.4
        }

        let self = this
        GameG.ScheduleOnce(function(){
            // 重新取得獎金池資訊
            self.SendJackpotPool(data)
            let money = gameData.bonusGame.WinMoney
            gameData.bonusGame = null
            if(completeCallback != null){
                completeCallback(money)
            }
        }, timer)
    },
    /** 重新取得獎金池資訊，只取得已經玩過的獎勵 */
    SendJackpotPool(data){
        if(data.RewareValue == 1){
            gameModel.SendJackpotPool(gameData.GetJackpotPool("Grand").ID)
        }
        else if(data.RewareValue == 2){
            gameModel.SendJackpotPool(gameData.GetJackpotPool("Major").ID)
        }
        else if(data.RewareValue == 3){
            gameModel.SendJackpotPool(gameData.GetJackpotPool("Minor").ID)
        }
        else if(data.RewareValue == 4){
            gameModel.SendJackpotPool(gameData.GetJackpotPool("Mini").ID)
        }
    }
};

module.exports = UIBonusGame
