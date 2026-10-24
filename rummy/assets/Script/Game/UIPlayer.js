var GameG = require("GameGlobal");
var Game_INRM = require("Game_INRM")

cc.Class({
    extends: cc.Component,

    properties: {
        isSelf : false,
        label_name : cc.Label,
        label_score : cc.Label,
        label_state : cc.Label,
        label_miss : cc.Label,
        label_point : cc.Label,
        pic: cc.Sprite,

        card: cc.Node, // 要clone的牌
        cardRoot: cc.Node,
        cardRoot_Self: {
            default: [],
            type : cc.Node,
        },      
    },

    init(UIGame){
        this.UIGame = UIGame

        this.cardList = []
        for (let i = 0; i < 13; ++i){
            let card = cc.instantiate(this.card)
            card.parent = this.card.parent
            this.cardList.push(card)
        }

        this.Time = {}
        this.Time.root = cc.find("role/Time", this.node)
        this.Time.frame = cc.find("frame", this.Time.root).getComponent(cc.Sprite)
        this.Time.label_time = cc.find("Label", this.Time.root).getComponent(cc.Label)
        
        this.hide()
        this.clear()
    },

    show(){
        this.node.active = true
    },

    hide(){
        //console.error("%%%%%%%%%%%%%%%%%%% player hide")
        this.node.active = false
    },

    hasUser(){
        if (this.UserData == null){
            return false
        }
        else{
            return true
        }
    },    

    clear(){
        this.label_name.string = ""
        this.label_score.string = ""
        this.label_state.string = ""
        this.label_miss.string = "miss: 0"
        this.label_point.string = "score: 0"

        this.updatePlayTime = false
        this.canPlayTime = 0
        this.Time.root.active = false

        this.UserData = null
    },

    beginCoolDown(time){
        if (this.Time.root.active == true){
            return
        }

        if (time < 0){
            return
        }

        this.Time.root.active = true
        this.roundTime = (time - 1) / 1000;
        this.updatePlayTime = true;
        this.canPlayTime = this.roundTime;        
        this.Time.label_time.string = Math.ceil(this.canPlayTime).toString()

        // 避免重覆播放音效
        this.soundFlag = [false, false, false]

        this.updateFrame(1)
    },

    stopCoolDown(){
        this.Time.root.active = false
        this.updatePlayTime = false;
    },

    /** 倒數邊框 */
    updateFrame(value){
        this.Time.frame.fillRange = value
    },    

    update(dt) {
        // 倒數
        if (this.updatePlayTime == false){
            return
        }

        this.canPlayTime -= dt

        if (this.canPlayTime > 0){
            this.Time.label_time.string = (Math.ceil(this.canPlayTime)).toString()
            let value = (this.canPlayTime / this.roundTime)
            this.updateFrame(value)            

            // 是自己，播放倒數音效
            if (this.isSelf == true){
                let intValue = Math.floor(this.canPlayTime)
                if (this.soundFlag[intValue] == false){
                    GameG.PlaySound(this.UIGame.sound_Countdown)
                    this.soundFlag[intValue] = true
                }
            }            
        }
        else{
            this.stopCoolDown()
        }
    },

    /** 設定玩家資料 */
    initData(data){
        this.show()

        // UserID Score SeatNo FaceId
        this.UserData = data
        this.label_name.string = this.UserData.UserID
        GameG.SetRolePic(this.pic, this.UserData.FaceID)
    },

    updateData(data){
        this.UserData = data
        let value = (this.UserData.Score / 100)
        this.label_score.string = value.toFixed(2)
    },

    /** 發別人的牌 */
    dealOtherCard(){
        let targetPos = GameG.GetWorldPosition(this.cardRoot)
        for (let i = 0; i < this.cardList.length; ++i){
            let card = this.cardList[i]
            card.active = true
            card.position = this.card.position

            let tween = GameG.NewTween(card)
            tween.delay(0.03 * i)
            tween.to(0.3, {position: targetPos})
            tween.delay(0.2)
            tween.call(function(){
                card.active = false
            })
            tween.start()
        }     
    },

    /** 發自己的牌 */
    dealSelfCard(){
        // 發牌
        for (let i = 0; i < this.cardList.length; ++i){
            let card = this.cardList[i]
            card.active = true
            card.position = this.card.position

            let targetPos = GameG.GetWorldPosition(this.cardRoot_Self[i])        

            let tween = GameG.NewTween(card)
            tween.delay(0.03 * i)
            tween.to(0.3, {position: targetPos, scale: 1})
            tween.start()
        }
    },

    turnSelfCard(cardData){
        let datas = []
        for (let i = 0; i < cardData.length; ++i){
            let data = cardData[i].Deck.Cards
            for (let j = 0; j < data.length; ++j){
                datas.push(data[j])
            }
        }

        // 打亂牌
        for (var i = 0; i < datas.length; i++) {
            var iRand = parseInt(datas.length * Math.random());
            var temp = datas[i];
            datas[i] = datas[iRand];
            datas[iRand] = temp;
        }

        // 翻牌
        for (let i = 0; i < this.cardList.length; ++i){
            if (i == 3){
                GameG.PlaySound(this.UIGame.sound_Card)
            }
            
            let card = this.cardList[i]
            card.active = true

            let data = datas[i]
            // 翻牌
            let tween = GameG.NewTween(card)
            tween.delay(0.03 * i)
            tween.to(0.15, {scaleX: 0})
            tween.call(function(){
                let sprite = card.getComponent(cc.Sprite)
                GameG.SetCardPic(sprite, data.Suit, data.Rank)
            })
            tween.to(0.15, {scaleX: 1})
            tween.start()
        }
    },

    hideSelfCard(){
        for (let i = 0; i < this.cardList.length; ++i){
            this.cardList[i].active = false
        }
    },

    updateState(state, miss){
        if (state == Game_INRM.PlayerState.INRM_PState_Wait){
            this.label_state.string = "等待中"
        }
        else if (state == Game_INRM.PlayerState.INRM_PState_GameV1){
            this.label_state.string = "遊戲中(只可抽牌，棄權)"
        }
        else if (state == Game_INRM.PlayerState.INRM_PState_GameV2){
            this.label_state.string = "遊戲中(只可棄牌，勝利)"
        }
        else if (state == Game_INRM.PlayerState.INRM_PState_FirstGiveup){
            this.label_state.string = "棄牌(第一輪)"
        }
        else if (state == Game_INRM.PlayerState.INRM_PState_Giveup){
            this.label_state.string = "棄牌"
        }
        else if (state == Game_INRM.PlayerState.INRM_PState_Bluff){
            this.label_state.string = "詐胡"
        }
        else if (state == Game_INRM.PlayerState.INRM_PState_Victory){
            this.label_state.string = "勝利"
        }
        else if (state == Game_INRM.PlayerState.INRM_PState_Loss){
            this.label_state.string = "失敗"
        }

        if (miss != null){
            this.label_miss.string = "miss: " + miss.toString()
        }
    },
});
