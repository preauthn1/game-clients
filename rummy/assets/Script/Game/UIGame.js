var GameG = require("GameGlobal");
var GameConfig = require("GameConfig")
var GameData  = require("GameData")
var Game_INRM = require("Game_INRM");

cc.Class({
    extends: cc.Component,

    properties : {
        sound_Countdown : {
            default: null,
            type : cc.AudioClip,
        },
        sound_Card : {
            default: null,
            type : cc.AudioClip,
        },
        sound_DealCard : {
            default: null,
            type : cc.AudioClip,
        },                
        player : {
            default: [],
            type : require("UIPlayer"),
        },
        cardControl: cc.Node,
        cardCoose: require("Choose")
    },

    init (GameLayer) {
        this.GameLayer = GameLayer

        this.hide()
        
        this.UIWait = cc.find("Wait", this.node)
        this.Label_WaitTime = cc.find("label_time", this.UIWait).getComponent(cc.Label)

        // 蓋牌區
        this.CloseDeck = {}
        this.CloseDeck.root = cc.find("CloseDeck", this.node)
        this.CloseDeck.cardBtn = cc.find("Card", this.CloseDeck.root).getComponent(cc.Button)
        this.CloseDeck.jockerImg = cc.find("Jocker", this.CloseDeck.root).getComponent(cc.Sprite)
        this.CloseDeck.flyCard = cc.find("CloseDeckFlyCard", this.node)
        this.CloseDeck.selectEffect = cc.find("Card/Card5/SelectEffect", this.CloseDeck.root)
        this.CloseDeck.label_Count = cc.find("Label_Count", this.CloseDeck.root).getComponent(cc.Label)
        this.CloseDeck.card = []
        for (let i = 5; i >= 1; --i){
            let obj = cc.find("Card/Card" + i.toString(), this.CloseDeck.root)
            this.CloseDeck.card.push(obj)
        }

        // 亮牌區
        this.OpenDeck = {}
        this.OpenDeck.root = cc.find("OpenDeck", this.node)
        this.OpenDeck.card = cc.find("Card", this.OpenDeck.root)
        this.OpenDeck.cardBtn = this.OpenDeck.card.getComponent(cc.Button)
        this.OpenDeck.cardImg = this.OpenDeck.card.getComponent(cc.Sprite)
        this.OpenDeck.discard = cc.find("Discard", this.OpenDeck.root)
        this.OpenDeck.flyCard = cc.find("OpenDeckFlyCard", this.node)
        this.OpenDeck.selectEffect = cc.find("SelectEffect", this.OpenDeck.root)
        this.OpenDeck.label_Count = cc.find("Label_Count", this.OpenDeck.root).getComponent(cc.Label)

        // 初始玩家資料
        for (let i = 0; i < this.player.length; ++i){
            this.player[i].init(this)
        }
        
        // 牌群組按鈕
        this.GroupButton = cc.find("GroupButton", this.node)
        // 丟牌按鈕
        this.DropButton = cc.find("DropButton", this.node)
        this.label_dropValue = cc.find("label_dropValue", this.DropButton).getComponent(cc.Label)
        // 宣告勝利按鈕
        this.DeclareButton = cc.find("DeclareButton", this.node)
        // 棄牌按鈕
        this.DiscardButton = cc.find("DiscardButton", this.node)

        // 切牌表演
        this.shuffleCardAni = cc.find("shuffle_card", this.node).getComponent(sp.Skeleton)

        // 棄牌遮罩
        this.discardMask = cc.find("CardControl/discardMask", this.node)

        // 最終整理牌訊息
        this.finalRefreshCard = cc.find("FinalRefreshCard", this.node)
        this.finalRefreshCardLabel = cc.find("FinalRefreshCard/Label", this.node).getComponent(cc.Label)

        this.clear()
    },

    clear(){
        this.cardControl.active = false
        this.showDiscardMaskActive(false)

        this.UIWait.active = false
        
        this.CloseDeck.jockerImg.node.active = false
        this.CloseDeck.flyCard.active = false
        this.CloseDeck.selectEffect.active = false
        this.CloseDeck.cardBtn.interactable = false
        this.CloseDeck.label_Count.string = ""        

        this.OpenDeck.cardImg.node.active = false
        this.OpenDeck.discard.active = false
        this.OpenDeck.flyCard.active = false
        this.OpenDeck.selectEffect.active = false
        this.OpenDeck.cardBtn.interactable = false
        this.OpenDeck.label_Count.string = ""

        this.GroupButton.active = false
        this.DropButton.active = false
        this.DeclareButton.active = false
        this.DiscardButton.active = false
        this.shuffleCardAni.active = false

        this.finalRefreshCard.active = false

        GameData.setUserStateData(null)

        this.isGameEnd = false
        this.selfThrowCard = false
    },

    show(){
        this.node.active = true

        this.clear()
    },

    showStartTime(time){
        this.stopStartTime()

        if (time <= 0){
            return
        }

        if (this.UIWait.active == true){
            return
        }

        this.UIWait.active = true

        let setValue = function(label, value){
            label.string = value
            label.node.scale = 1
            label.node.opacity = 255
        }

        let value = Math.floor(time / 1000)
        setValue(this.Label_WaitTime, value.toString())

        let self = this
        let tween = GameG.NewTween(this.Label_WaitTime.node)
        for (let i = 0; i < value + 1; ++i){
            tween.to(1, {scale: 0.5, opacity: 0})
            tween.call(function(){
                value -= 1
                if (value >= 0){
                    setValue(self.Label_WaitTime, value.toString())
                    if (value <= 3){
                        GameG.PlaySound(self.sound_Countdown)
                    }
                }
                else{
                    self.stopStartTime()
                }
            })
        }
        tween.start()
    },

    stopStartTime(){
        this.Label_WaitTime.node.stopAllActions()
        this.UIWait.active = false
    },

    /** 遊戲開始 */
    gameStart(){
        this.clear()
        this.stopStartTime()
    },

    /** 遊戲結束 */
    gameOver(){
        this.discardUI()
        this.clear()
    },

    hide(){
        this.node.active = false
    },

    isShow(){
        return this.node.active
    },

    cloneObject(obj, pos){
        let clone = cc.instantiate(obj)
        clone.active = true
        clone.parent = obj.parent
        clone.position = pos
        return clone
    },
    
    cloneObjectWorld(obj, pos){
        let clone = cc.instantiate(obj)
        clone.active = true
        clone.parent = obj.parent
        let lpos = GameG.WorldConvertLocalPointAR(obj.parent,pos);
        if(lpos === null){
            cc.warn("W2L pos is null!!");
            clone.position = cc.Vec2.ZERO;
        }else{
            clone.position = lpos;
        }
        return clone
    },

    /** 玩家離開 */
    removePlayerData(data){
        let player = this.getPlayerByUserData(data)
        if (player != null){
            player.clear()
            player.hide()
        }
    },

    /** 更新玩家資料 */
    updatePlayerData(data){
        let player = null
        if (data.UserID == GameConfig.getUserID()) {
            player = this.player[0]
        }
        else{
            player = this.getPlayerByUserData(data)
        }

        if (player != null){
            player.initData(data)
            player.updateData(data)
        }
        else{
            console.error("111111111111111111 updatePlayerData error", data)
        }
    },

    getPlayerByUserData(data){
        let player = this. getPlayerByUserID(data.userId)
        if (player == null){
            player = this.getPlayerBySeatNo(data.SeatNo)
        }
        else{
            console.error("$$$$$$$$$$$$$$$$ getPlayerByUserData", data)
        }
        return player
    },

    getPlayerBySeatNo(seatNo){
        let selfSeatNo = GameData.getSeatNo()
        let index = seatNo - selfSeatNo
        if (index < 0){
            index += this.player.length
        }
        return this.player[index]
    },

    getPlayerByUserID(userID){
        for (let i = 0; i < this.player.length; ++i){
            let player = this.player[i]
            if (player.UserData != null &&
                player.UserData.UserID == userID){
                return player
            }
        }
        return null
    },    

    updateGameState(data){
        // 蓋牌堆數量
        this.CloseDeck.label_Count.string = data.CloseDeckCount.toString()
        // 小於五張牌時，動態修改蓋牌數量
        if (data.CloseDeckCount < 4){
            for (let i = 0; i < this.CloseDeck.card.length; ++i){
                this.CloseDeck.card[i].active = false
            }
            for (let i = 0; i < this.CloseDeck.card.length; ++i){
                this.CloseDeck.card[i].active = true
            }
        }
        else{
            for (let i = 0; i < this.CloseDeck.card.length; ++i){
                this.CloseDeck.card[i].active = true
            }
        }

        // 亮牌堆數量
        this.OpenDeck.label_Count.string = data.OpenDeckCount.toString()

        // 等待玩家
        if (data.State == Game_INRM.GameState.INRM_GState_WaitPlayer){
            // console.error("game state 等待玩家")
        }
        // 倒數開始中
        else if (data.State == Game_INRM.GameState.INRM_GState_CountDown){
            // console.error("game state 倒數開始中")
            this.showStartTime(data.StartCD)
        }
        // 遊戲中
        else if (data.State == Game_INRM.GameState.INRM_GState_Gaming){
            // console.error("game state 遊戲中")
        }

        // 更新當作鬼牌的點數
        if (data.RandJoker > 0){
            GameData.setRandJoker(data.RandJoker)
            this.CloseDeck.jockerImg.node.active = true
            GameG.SetCardPic(this.CloseDeck.jockerImg, Game_INRM.Poker_Suit.Poker_Suit_Spades, data.RandJoker);
        }

        // 亮牌堆第一張
        if (data.FirstOpenDeck != null){
            this.OpenDeck.cardImg.node.active = true
            GameG.SetCardPic(this.OpenDeck.cardImg, data.FirstOpenDeck.Suit, data.FirstOpenDeck.Rank);
        }

        this.stopAllCoolDown()

        if (data.PlayerID != 0){
            console.error("輪到", data.PlayerID)
        }

        for (let i = 0 ; i < data.Players.length; ++i){
            let playerData =  data.Players[i]
            let player = this.getPlayerByUserID(playerData.ID)
            if (player != null){
                player.updateState(playerData.State, playerData.Miss)
            }

            if (playerData.ID == GameConfig.getUserID()) {      
                if (playerData.State == Game_INRM.PlayerState.INRM_PState_Giveup){
                    this.discardUI()                    
                }
                
                GameData.setUserStateData(playerData.State)

                this.updateUI(playerData)
            }
        }
    },

    discardUI(){
        this.showDiscardMaskActive(true)

        this.CloseDeck.selectEffect.active = false
        this.CloseDeck.cardBtn.interactable = false

        this.OpenDeck.selectEffect.active = false
        this.OpenDeck.cardBtn.interactable = false
        
        this.DeclareButton.active = false
        this.DiscardButton.active = false

        this.DropButton.active = false
        
        this.GroupButton.active = false

        this.cardCoose.CardControll(false)
    },

    getCardEnd(){
        this.OpenDeck.selectEffect.active = false
        this.OpenDeck.cardBtn.interactable = false

        this.CloseDeck.selectEffect.active = false
        this.CloseDeck.cardBtn.interactable = false

        this.DiscardButton.active = true
        this.DropButton.active = true
    },

    showDiscardMaskActive(active){
        this.discardMask.active = active
    },
    
    updateUI(data){
        // 抽取亮牌區
        this.OpenDeck.selectEffect.active = false
        this.OpenDeck.cardBtn.interactable = false

        // 抽取蓋牌區
        this.CloseDeck.selectEffect.active = false
        this.CloseDeck.cardBtn.interactable = false

        // 丟牌
        this.DropButton.active = false

        // 玩家棄牌
        this.DiscardButton.active = false 

        // 宣告勝利
        this.DeclareButton.active = false  

        // 自己
        if (data.ID == GameConfig.getUserID()) {
            let state = data.State
            // 遊戲中(只可抽牌，棄權)
            if (state == Game_INRM.PlayerState.INRM_PState_GameV1){
                this.OpenDeck.selectEffect.active = true
                this.OpenDeck.cardBtn.interactable = true

                this.CloseDeck.selectEffect.active = true
                this.CloseDeck.cardBtn.interactable = true

                this.DiscardButton.active = true 
            }
            // 遊戲中(只可棄牌，勝利)
            else if (state == Game_INRM.PlayerState.INRM_PState_GameV2){
                this.DeclareButton.active = true
                this.DropButton.active = true
            }
        }
    },

    /** 遊戲倒數開始 */
    gameStartCountDown(){
        let time = GameData.getStartWaitTime()
        this.showStartTime(time)
    },

    /** 遊戲倒數取消 */
    gameStartCountDownCancel(){
        this.stopStartTime()
    },

    /** 停止所有玩家倒數 */
    stopAllCoolDown(){
        for (let i = 0; i < this.player.length; ++i){
            let player = this.player[i]        
            player.stopCoolDown()
        }
    },

    /** 發牌表現 */
    dealCard(data){
        let GameState = GameData.getGameState()

        this.UIWait.active = false

        this.GroupButton.active = true
        this.cardCoose.CardControll(true)

        // 如果玩家棄牌，顯示棄牌介面
        let PlaterState = GameData.getUserState()
        if (PlaterState != null){
            if (PlaterState == Game_INRM.PlayerState.INRM_PState_FirstGiveup || PlaterState == Game_INRM.PlayerState.INRM_PState_Giveup){
                this.discardUI()
            }
        }

        // 判斷是否斷線重連
        let isReconnect = false
        // 倒數開始中
        if (GameState == Game_INRM.GameState.INRM_GState_CountDown){
            isReconnect = false
        }
        // 遊戲中
        else if (GameState == Game_INRM.GameState.INRM_GState_Gaming){
            isReconnect = true
        }

        // 沒斷線，完整的發牌流程
        if (isReconnect == false){
            GameG.PlaySound(this.sound_DealCard)

            for (let i = 0; i < this.player.length; ++i){
                // 玩家本身
                if (i == 0){
                    let player = this.player[0]
                    // 發牌
                    player.dealSelfCard()

                    // 翻牌
                    setTimeout(function () {
                        player.turnSelfCard(data)
                    }.bind(this), 0.5 * 1000);

                    // 顯示牌組
                    let self = this
                    setTimeout(function () {
                        player.hideSelfCard()
                        self.cardControl.active = true
                        self.cardCoose.setCard(this, data)
                    }.bind(this), 1.5 * 1000);                
                }
                // 其他玩家
                else{
                    let player = this.player[i]
                    if (player.hasUser() == true){
                        player.dealOtherCard()
                    }
                }
            }
        }
        // 斷線重連，直接顯示牌組
        else{
            this.cardControl.active = true
            this.cardCoose.setCard(this, data)            
        }
    },    

    /********************** 更新手牌 *********************/
    /** 玩家更新手牌組合結果 */
    refreshHandRet(data){
        if(data.Success){
            this.cardCoose.refreshHandRet(data);
        }
    },
    /** 玩家更新手牌組合 */
    refreshHand(data){
        this.GameLayer.GameModel.refreshHand(data)
    },

    /********************** 取亮牌 *********************/
    /** 玩家抽取亮牌區結果 */
    popOpenDeckRet(data){
        if(data.Success){
            this.OpenDeck.discard.active = true

            GameG.PlaySound(this.sound_Card)

            let flyCard = this.cloneObject(this.OpenDeck.flyCard, this.OpenDeck.flyCard.position)
            let flyCardSprite = flyCard.getComponent(cc.Sprite)
            flyCardSprite.spriteFrame = this.OpenDeck.cardImg.spriteFrame

            this.getCardNode = this.cardCoose.addNewCard(data);
            setTimeout(this.popOpenDeckRetDelay,200,this,flyCard);
        }
        else{
            this.getCardEnd()
        }
    },
    
    popOpenDeckRetDelay(self,flyCard){
        let getCardNode = self.getCardNode;
        let endPos = GameG.GetWorldPosition(getCardNode);
        // endPos.y += 152; 
        endPos.y += 122; 
        let endScale = 1
        let tween = GameG.NewTween(flyCard)
        tween.to(0.3, {position: endPos, scale: endScale})
        tween.delay(0.2)
        tween.to(0.2, {opacity : 0})
        tween.call(function(){
            flyCard.destroy();
            self.cardCoose.addNewCardShow();
        })
        tween.start();
    },
    
    /** 玩家抽取亮牌區 */
    popOpenDeck(data){
        let player = this.getPlayerByUserID(data.ID)
        if (player == null){
            console.error("popOpenDeck can not find player", data.ID)
            return
        }

        // 其他玩家
        if (data.ID != GameConfig.getUserID()) {
            this.OpenDeck.discard.active = true

            GameG.PlaySound(this.sound_Card)

            let flyCard = this.cloneObject(this.OpenDeck.flyCard, this.OpenDeck.flyCard.position)
            let flyCardSprite = flyCard.getComponent(cc.Sprite)
            flyCardSprite.spriteFrame = this.OpenDeck.cardImg.spriteFrame

            let endPos = GameG.GetWorldPosition(player.cardRoot)

            let tween = GameG.NewTween(flyCard)
            tween.to(0.3, {position: endPos})
            tween.delay(0.2)
            tween.to(0.2, {opacity : 0})
            tween.call(function(){
                flyCard.destroy()
            })
            tween.start()
        }
        else{
            this.getCardEnd()
        }
    },

    /********************** 取蓋牌 *********************/
    /** 玩家抽取蓋牌區結果 */
    popCloseDeckRet(data){
        if(data.Success){
            GameG.PlaySound(this.sound_Card)
            
            let flyCard = this.cloneObject(this.OpenDeck.flyCard, this.CloseDeck.flyCard.position)

            // !!!!!!!!!! 需要改成牌最後位置和縮放
            let player = this.getPlayerByUserID(GameConfig.getUserID())
            let endPos = GameG.GetWorldPosition(player.cardRoot)
            let endScale = 1
            
            this.getCardNode = this.cardCoose.addNewCard(data);
            setTimeout(this.popCloseDeckRetDelay, 200, this, flyCard, data);
        }
        else{
            this.getCardEnd()           
        }
    },

    popCloseDeckRetDelay(self, flyCard, data) {
        let getCardNode = self.getCardNode;
        let endPos      = GameG.GetWorldPosition(getCardNode);
        // endPos.y += 152; 
        endPos.y += 122;
        let endScale    = 1;

        let tween = GameG.NewTween(flyCard);
        tween.to(0.2, {
            position : endPos,
            scale    : endScale
        });
        tween.delay(0.1);
        tween.call(function () {
            GameG.PlaySound(self.sound_Card);
        });
        tween.to(0.1, { scaleX : 0 });
        tween.call(function () {
            let flyCardSprite = flyCard.getComponent(cc.Sprite);
            GameG.SetCardPic(flyCardSprite, data.Card.Suit, data.Card.Rank);
        });
        tween.to(0.1, { scaleX : 1 });
        tween.call(function () {
            flyCard.destroy();
            self.cardCoose.addNewCardShow();
        });
        tween.start();
    },
    /** 玩家抽取蓋牌區 */
    popCloseDeck(data){
        let player = this.getPlayerByUserID(data.ID)
        if (player == null){
            console.error("popCloseDeck can not find player", data.ID)
            return
        }

        // 其他玩家
        if (data.ID != GameConfig.getUserID()) {
            GameG.PlaySound(this.sound_Card)
            
            let flyCard = this.cloneObject(this.CloseDeck.flyCard, this.CloseDeck.flyCard.position)

            let endPos = GameG.GetWorldPosition(player.cardRoot)

            let tween = GameG.NewTween(flyCard)
            tween.to(0.3, {position: endPos})
            tween.delay(0.2)
            tween.to(0.2, {opacity : 0})
            tween.call(function(){
                flyCard.destroy()
            })
            tween.start()
        }
        else{
            this.getCardEnd()
        }
    },

    /********************** 棄牌 *********************/
    /** 玩家棄牌結果 */
    giveupRet(data){

    },
    /** 玩家棄牌 */
    giveup(){

    },

    /********************** 丟牌 *********************/
    /** 玩家丟牌結果 */
    throwCardRet(data){
        if (this.selfThrowCard === true){
            this.cardCoose.throwCardRet(data);
        } 
    },
    /** 玩家丟牌 */
    throwCard(data){
        let player = this.getPlayerByUserID(data.PlayerID)
        if (player == null){
            console.error("throwCard can not find player", data.PlayerID)
            return
        }

        let startPos = null
        let startScale = 1;        
        let flyCard;
        // 其他玩家
        if (data.PlayerID !== GameConfig.getUserID()) {
            startPos = GameG.GetWorldPosition(player.cardRoot)
            flyCard = this.cloneObject(this.OpenDeck.flyCard, startPos)
        }
        else{
            let putCardNode = this.cardCoose.putNode();//獲取將丟的牌的Node
            startPos        = GameG.GetWorldPosition(putCardNode);
            flyCard         = this.cloneObjectWorld(this.OpenDeck.flyCard, startPos);
        }
        GameG.PlaySound(this.sound_Card)        

        flyCard.scale = startScale
        let flyCardSprite = flyCard.getComponent(cc.Sprite)
        GameG.SetCardPic(flyCardSprite, data.Throw.Suit, data.Throw.Rank);

        let endPos = this.OpenDeck.flyCard.position
        
        let self = this
        let tween = GameG.NewTween(flyCard)
        tween.to(0.3, {position: endPos, scale: this.OpenDeck.flyCard.scale})
        tween.call(function(){
            self.OpenDeck.discard.active = false

            flyCard.destroy()
            GameG.SetCardPic(self.OpenDeck.cardImg, data.Throw.Suit, data.Throw.Rank);

            if (data.ID == GameConfig.getUserID()) {
                //self.cardCoose.throwCardRet(data);
                self.selfThrowCard = false
            }
        })
        tween.start()        
    },

    /********************** 宣告勝利 *********************/
    /** 玩家宣告勝利結果 */
    declareRet(data){

    },
    /** 玩家宣告勝利 */
    declare(data){
        this.stopAllCoolDown()

        // 顯示誰勝利訊息
        this.finalRefreshCard.active = true;

        let text = "## has made a Valid Declaration.\nPlease arrange and send your cards."
        text = text.replace("##", data.PlayerID);
        this.finalRefreshCardLabel.string = text        
    },

    /********************** Miss *********************/
    /** 玩家Miss結果 */
    missRet(data){

    },
    /** 玩家Miss */
    miss(data){

    },

    /** 玩家詐糊 */
    bluff(dataq){

    },

    /** 當蓋牌區牌被抽完，會將開牌區重新洗過去 */
    deckReset(data){
        if (this.shuffleCardAni.node.active == true){
            return
        }

        // 播放洗牌動畫
        this.shuffleCardAni.node.active = true;
        this.shuffleCardAni.setAnimation(0, "animation")
        
        let self = this
        setTimeout(function () {
            self.shuffleCardAni.node.active = false;

            for (let i = 0; i < self.CloseDeck.card.length; ++i){
                self.CloseDeck.card[i].active = true
            }            
        }.bind(self), 1 * 1000);
    },

    /** 玩家動作倒數開始 */
    playerActionCountDown(data){
        if (this.isGameEnd == true){
            return
        }
        
        let player = this.getPlayerByUserID(data.ID)
        if (player != null){
            player.beginCoolDown(data.ActionCD)
        }
    },
    
    /** 玩家動作倒數取消 */
    playerActionCountDownCancel(data){
        let player = this.getPlayerByUserID(data.ID)
        if (player != null){
            player.stopCoolDown(data.ActionCD)
        }
    },
    
    /** 玩家最終更新倒數開始 */
    waitFinalRefreshCountDown(data){
        if (this.isGameEnd == false){
            this.stopAllCoolDown()
            let player = this.getPlayerByUserID(GameConfig.getUserID())
            if (player != null){
                player.beginCoolDown(data.CD)
            }
            this.isGameEnd = true
        }
    },

    /** 按下丟牌按鈕 */
    clickDropButton(){
        this.selfThrowCard = true

        this.GameLayer.playClickSound()

        let data = this.cardCoose.putCard();
        this.GameLayer.GameModel.throwCard(data);
    },
    
    /** 按下Declare按鈕 */
    clickDeclareButton(){
        this.GameLayer.playClickSound()

        let data = {}
        this.GameLayer.GameModel.declare(data)
    },
    
    /** 按下棄牌按鈕 */
    clickDiscardButton(){
        this.GameLayer.playClickSound()

        this.GameLayer.GameModel.giveup()
        this.discardUI()
    },

    /** 按下抽取亮牌區 */
    clickOpenDeckButton(){
        this.GameLayer.playClickSound()

        this.GameLayer.GameModel.openDeck()
    },

    /** 按下抽取蓋牌區 */
    clickCloseDeckButton(){
        this.GameLayer.playClickSound()
        
        this.GameLayer.GameModel.closeDeckID()
    },

});
