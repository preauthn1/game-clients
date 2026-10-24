var GameG = require("GameGlobal");
var GameData = require("GameData");
var GameConfig = require("GameConfig");
var Game_INRM = require("Game_INRM")

cc.Class({
    extends: cc.Component,


    properties : {
        sound_Win : {
            default: null,
            type : cc.AudioClip,
        },
        sound_Lose : {
            default: null,
            type : cc.AudioClip,
        },
        playerCount: 5, // 玩家數量
        cardCount: 17, // 卡片數量
    },

    init (GameLayer) {
        this.GameLayer = GameLayer

        this.root = cc.find("root", this.node)
        this.note = cc.find("label_note", this.root)
        this.label_time = cc.find("label_time", this.root).getComponent(cc.Label)

        let playerObj = cc.find("ScrollView/view/content/player", this.root)

        this.playerData = []
        for (let i = 0; i < this.GameLayer.UIGame.player.length; ++i){
            let playerData = {}
            playerData.root = cc.instantiate(playerObj);
            playerData.root.parent = playerObj.parent
            playerData.pic = cc.find("role/pic", playerData.root).getComponent(cc.Sprite)
            playerData.label_name = cc.find("label_name", playerData.root).getComponent(cc.Label)
            playerData.label_point = cc.find("label_point", playerData.root).getComponent(cc.Label)
            playerData.win = cc.find("win", playerData.root)
            playerData.lose = cc.find("lose", playerData.root)
            playerData.label_score = cc.find("label_score", playerData.root).getComponent(cc.Label)
            playerData.cardRoot = cc.find("cardRoot", playerData.root)
            let cardObj = cc.find("card", playerData.cardRoot)

            // 卡的資料
            playerData.card = []
            for (let j = 0; j < this.cardCount; ++j){
                let cardData = {}
                cardData.root =	cc.instantiate(cardObj);
                cardData.root.parent = playerData.cardRoot
                cardData.sprite = cardData.root.getComponent(cc.Sprite)
                cardData.red = cc.find("red", cardData.root)
                cardData.green = cc.find("green", cardData.root)
                playerData.card.push(cardData)
            }

            this.playerData.push(playerData)

            cardObj.active = false
        }
        playerObj.active = false


        this.ValidDeclaration = cc.find("ValidDeclaration", this.node)
        this.InvalidDeclare = cc.find("InvalidDeclare", this.node)

        this.hide()
    },

    clear(){
        for (let i = 0; i < this.playerData.length; ++i){
            let data = this.playerData[i]
            data.label_name.string = ""
            data.label_point.string = "0"
            data.win.active = false
            data.lose.active = false
            data.label_score.string = "0"

            for (let j = 0; j < data.card.length; ++j){
                let cardData = data.card[j]
                cardData.sprite.spriteFrame = null
                cardData.red.active = false
                cardData.green.active = false
            }
            data.root.active = false
        }

        this.stopStartTime()

        this.ValidDeclaration.active = false
        this.InvalidDeclare.active = false
        this.root.active = false
    },

    show(data){
        this.node.active = true

        this.clear()

        // 勝利者資料
        this.setPlayerData(this.playerData[0], data.Winner, true)

        // 失敗者資料
        for (let i = 0; i < data.Losser.length; ++i){
            this.setPlayerData(this.playerData[i + 1], data.Losser[i], false)
        }

        let success = false
        // win
        if (data.Winner.ID == GameConfig.getUserID()){
            GameG.PlaySound(this.sound_Win)
            success = true
        }
        // lose
        else{
            GameG.PlaySound(this.sound_Lose)

            success = true

            for (let i = 0; i < data.Losser.length; ++i){
                let playerData = data.Losser[i]
                if (playerData.ID != GameConfig.getUserID()){
                    break
                }

                if (playerData.Hands == null || playerData.Hands.Decks == null){
                    break
                }

                for (let i = 0; i < playerData.Hands.Decks.length; ++i){
                    let isSuccess = this.checkSuccess(playerData.Hands.Decks[i].Category)
                    if (isSuccess == false){
                        success = false
                        break
                    }
                }
            }
        }

        // 組牌成功
        if (success == true){
            this.ValidDeclaration.active = true

            let self = this
            setTimeout(function () {
                self.ValidDeclaration.active = false
                self.root.active = true
            }.bind(this), 2 * 1000);            
        }
        // 組牌失敗
        else{
            this.InvalidDeclare.active = true
        }
    },

    checkSuccess(category){
        if (category == Game_INRM.Category.INRM_Category_1stLife ||
            category == Game_INRM.Category.INRM_Category_2stLife ||
            category == Game_INRM.Category.INRM_Category_PureSequence ||
            category == Game_INRM.Category.INRM_Category_ImpureSequence ||
            category == Game_INRM.Category.INRM_Category_Set)
        {
            return true
        }
        else{
            return false
        }
    },

    setPlayerData(uiPlayer, data, isWinner){
        uiPlayer.root.active = true

        uiPlayer.label_name.string = data.ID

        if (isWinner == true){
            uiPlayer.win.active = true
            uiPlayer.lose.active = false
        }
        else{
            uiPlayer.win.active = false
            uiPlayer.lose.active = true 
        }

        let point = Math.floor(data.UpdateScore / 100).toString()
        uiPlayer.label_point.string = point
        uiPlayer.label_score.string = data.LossPoint.toString()
        
        let playerData = this.GameLayer.UIGame.getPlayerByUserID(data.ID)
        if (playerData != null){
            if (playerData.UserData != null){
                GameG.SetRolePic(uiPlayer.pic, playerData.UserData.FaceID)
            }
        }

        if (data.Hands != null && data.Hands.Decks != null){
            let accIndex = 0
            for (let i = 0; i < data.Hands.Decks.length; ++i){
                // 是否有組成一組牌
                let isSuccess = this.checkSuccess(data.Hands.Decks[i].Category)

                // 顯示牌
                let cards = data.Hands.Decks[i].Deck.Cards
                for (let j = 0; j < cards.length; ++j){
                    let cardData = uiPlayer.card[accIndex]
                    if (cardData == null){
                        continue
                    }

                    let data = cards[j]
                    GameG.SetCardPic(cardData.sprite, data.Suit, data.Rank)

                    // 顯示是否組成一組牌
                    if (isSuccess == true){
                        cardData.green.active = true
                    }
                    else{
                        cardData.red.active = true
                    }

                    accIndex++
                }
                accIndex++
            }
        }
    },

    hide(){
        this.node.active = false
    },

    isShow(){
        return this.node.active
    },
    
    gameStartCountDown(){        
        let time = GameData.getStartWaitTime()
        this.showStartTime(time)
    },

    showStartTime(time){
        if (this.isShow() == false){
            return
        }

        if (time <= 0){
            return
        }

        if (this.label_time.node.active == true){
            return
        }

        time += 1
        
        this.note.active = false
        this.label_time.node.active = true

        let setValue = function(label, value){
            let text = "New Game Begins in ## Seconds"
            text = text.replace("##", value)
            label.string = text
            label.node.scale = 1
            label.node.opacity = 255
        }

        let value = Math.floor(time / 1000)
        setValue(this.label_time, value.toString())

        let self = this
        let tween = GameG.NewTween(this.label_time.node)
        for (let i = 0; i < value + 1; ++i){
            tween.to(1, {scale: 1, opacity: 255})
            tween.call(function(){
                value -= 1
                if (value >= 0){
                    setValue(self.label_time, value.toString())
                }
                else{
                    self.stopStartTime()
                    self.hide()
                }
            })
        }
        tween.start()
    },

    stopStartTime(){
        this.label_time.node.stopAllActions()
        this.note.active = false
        this.label_time.node.active = false
    },

    clickClose(){
        this.GameLayer.playClickSound()
        
        this.hide()
    },

    clickInvalidDeclareClose(){
        this.GameLayer.playClickSound()

        this.InvalidDeclare.active = false
        this.root.active = true
    }
});
