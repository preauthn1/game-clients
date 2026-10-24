var GameData = require("GameData");

cc.Class({
    extends : cc.Component,

    properties : {
        CardSize     : cc.v2(176, 238),
        SizeBet      : 0.65,
        CardGrid     : 32,
        CardGrip     : 80,
        OpenDeck     : cc.Node,
        GroupButton  : cc.Node,
        draginParent : cc.Node
    },

    // Start(){
    setCard(iUIGame, cardGroupData, loopBlock) {
        this.UIGame = iUIGame;
        cc.warn("UIGame", this.UIGame);
        cc.log("cardData", cardGroupData);
        loopBlock = loopBlock || false;
        this.MSG  = require("GameMsg_INRM").GameMsg_INRM;
        // this.CardControll(true);

        this.dataInPut = cardGroupData;

        this.SpaceX = this.CardGrid - this.CardSize.x;

        this.cardGroup = this.node.getComponentsInChildren("CardGroup");
        for (let k in this.cardGroup) {
            this.cardGroup[k].init(this, k);
        }

        this.selectList  = [];
        this.dragingCard = null;
        let self         = this;
        this.root        = cc.find("Canvas");
        this.fakeCard    = cc.find("fakeDragin", this.draginParent);
        this.fakeCard.getComponent("fakeCard").init(this);
        this.fakeCard.width  = this.CardSize.x;
        this.fakeCard.height = this.CardSize.y;

        this.layouts = this.node.getComponentsInChildren(cc.Layout);
        for (let k in this.layouts)//this.SpaceX
        {
            let obj = this.layouts[k];
            if(obj.node === this.node) {

                obj.spacingX     = 10;
                obj.paddingLeft  = 10;
                obj.paddingRight = 10;
            } else {
                obj.spacingX     = this.SpaceX;
                obj.paddingLeft  = 0;
                obj.paddingRight = 0;
            }
            obj.updateLayout();
        }

        this.root.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
        this.root.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);

        let defaultGroups = [];
        //addnew card
        let accIndex      = 0;
        this.cardList     = this.node.getComponentsInChildren("Card");
        for (let i = 0; i < cardGroupData.length; ++i) {
            accIndex += cardGroupData[i].Deck.Cards.length;
        }

        while (this.cardList.length < accIndex) {
            this.createCard();
        }

        accIndex = 0;
        for (let i = 0; i < cardGroupData.length; ++i) {
            let cardData = cardGroupData[i].Deck.Cards;
            let ags      = [];
            for (let j = 0; j < cardData.length; ++j) {
                let data = cardData[j];
                this.cardList[accIndex].setData(data.Suit, data.Rank);
                ags.push(this.cardList[accIndex]);
                accIndex += 1;
            }
            defaultGroups.push(ags);
        }

        //顯示特殊鬼牌
        this.RandJoker = GameData.getRandJoker();
        let i, len     = this.cardList.length;
        let yellow     = new cc.color(255, 255, 128, 255);
        let white      = new cc.color(255, 255, 255, 255);

        for (i = 0; i < len; i++) {
            if(this.cardList[i].cardValue === this.RandJoker) {
                this.cardList[i].node.color = yellow;
            } else {
                this.cardList[i].node.color = white;
            }
        }

        //this.RandJoker
        if(this.OpenDeck) {
            let od         = this.OpenDeck;
            let ar         = od.convertToNodeSpaceAR(cc.Vec2.ZERO);
            od.rect        = new cc.rect();
            od.rect.width  = od.width * od.scaleX;
            od.rect.height = od.height * od.scaleY;
            od.rect.x      = ar.x * -od.scaleX - od.rect.width / 2;
            od.rect.y      = ar.y * -od.scaleY - od.rect.height / 2;
            od.in          = function (point) {
                this._in = point ? this.rect.contains(point) : this._in;
                return this._in;
            };
        }

        //依照伺服器給予的牌組重新整理
        for (let g in defaultGroups) {
            for (let c in defaultGroups[g]) {
                let card            = defaultGroups[g][c];
                defaultGroups[g][c] = {
                    cardType  : card.cardType,
                    cardValue : card.cardValue,
                    node      : card.node
                };
            }
        }
        this.groupSets = defaultGroups;
        this.cardGroupSets();   //剛發牌後排組順序重新排序(依照排組中的卡牌數量)
        this.clearDragingCard(!loopBlock);
        this.resetGroupSize();

        let l = cardGroupData.length;
        for (i = 0; i < l; i++) {
            this.cardGroup[i].setMsg(this.cardType(cardGroupData[i].Category));
        }
        // 移到UIGame中處理
        //this.UIGame = cc.director.getScene().getComponentsInChildren("UIGame");

        // if(this.UIGame.length === 1) {
        //     this.UIGame                 = this.UIGame[0];
        //     this.UIGame.popCloseDeckRet = function (data) {
        //         self.addNewCard(data);
        //     };
        //     this.UIGame.popOpenDeckRet  = function (data) {
        //         self.addNewCard(data);
        //     };
        //     this.UIGame.clickDropButton = function () {
        //         let data = this.cardCoose.putCard();
        //         this.GameLayer.GameModel.throwCard(data);
        //     };
        //     this.UIGame.throwCardRet    = function (data) {
        //         self.throwCardRet(data);
        //     };
        // }


        cc.log("set Card End cardList :", this.cardList);
    },

    cardType(index) {
        let valuesById = {};
        valuesById[0]  = "UNSPECIFIED";
        valuesById[1]  = "1st Life";
        valuesById[2]  = "2st Life";
        valuesById[3]  = "Pure Sequence";
        valuesById[4]  = "Impure Sequence";
        valuesById[5]  = "Set";
        valuesById[10] = "None";
        valuesById[11] = "Invalid";
        valuesById[21] = "1st Life Needed";
        valuesById[22] = "2st Life Needed";
        return valuesById[index];
    },

    /*
     data = {[Result:Object],[Success:bool]}   
     Result = {[Decks:INRM_Deck Array],[Point:int]}
     INRM_Deck = {[Category:int],[Deck:Object]}
     Deck = {[Cards:Poker_Card Array]}    
     Poker_Card = {[Suit:int],[Rank:int]}
     */
    refreshHandRet(data) {
        cc.log("refreshHandRet", data);
        let dataInPut = data.Result.Decks;
        let dd        = [];
        let i, l      = dataInPut.length;
        for (i = 0; i < l; i++) {
            dd.push(dataInPut[i]);
        }
        let self = this;
        this.scheduleOnce(function () {
            self.setCard(self.UIGame ,data.Result, true);
            for (i = 0; i < l; i++) {
                cc.log(dd[i]);
                self.cardGroup[i].setMsg(self.cardType(dd[i].Category));
            }
        }, 0.3);
    },

    //關閉拖牌和群組反應的部分
    CardControll(sw) {
        cc.warn("拖牌和群組開關：", sw);
        this.TouchTrigger = sw;
        if(sw === false) {
            this.clearDragingCard(false);
            for (let k in this.selectList) {
                let card = this.selectList[k];
                card.clearSelect();
            }
            // 按鈕隱藏
            if(this.GroupButton) this.GroupButton.active = false;
            for (let k in this.cardGroup) {
                this.cardGroup[k].hideAddButton();
                if(this.cardGroup[k].card.length > 0) this.cardGroup[k].showMsg();
            }
            this.resetGroupSize();
        }
    },

    //新增群組
    newGroup() {
        if(this.TouchTrigger !== true) {
            return;
        }
        let firstGroup = this.cardGroup[0];
        while (this.groupSets.length >= this.cardGroup.length) {
            let count         = this.cardGroup.length + 1;
            let newNode       = new cc.Node("Group_" + count);
            newNode.parent    = firstGroup.node.parent;
            let layout        = newNode.addComponent(cc.Layout);
            layout.type       = cc.Layout.Type.HORIZONTAL;
            layout.resizeMode = cc.Layout.ResizeMode.CONTAINER;
            layout.spacingX   = -80;
            let group         = newNode.addComponent("CardGroup");
            this.cardGroup.push(group);
            newNode        = cc.instantiate(firstGroup.ButtonUI);
            newNode.name   = "Button_" + count;
            newNode.parent = firstGroup.ButtonUI.parent;
            group.ButtonUI = newNode;
            group.init(this, count);
        }

        // if (this.groupSets.length < this.cardGroup.length - 1) {
        let cardGroup = this.cardGroup[this.groupSets.length];
        for (let k in this.selectList) {
            let card         = this.selectList[k];
            card.node.parent = cardGroup.node;
            card.clearSelect();
        }
        this.selectList = [];
        // 按鈕隱藏
        if(this.GroupButton) this.GroupButton.active = false;
        for (let k in this.cardGroup) {
            this.cardGroup[k].hideAddButton();
            this.cardGroup[k].showMsg();
        }

        this.resetGroupData();
        for (let k in this.cardGroup) {
            this.cardGroup[k].sortChild();
        }

        this.clearDragingCard(true);
        this.cardGroupSets();

        for (let k in this.cardGroup) {
            this.cardGroup[k].resetData();
        }
        this.resetGroupSize();
        // }
    },

    //手牌打出去, return 打出去的牌
    putCard() {
        //call by onTOUCHCANCEL、clickPutCard    
        if(this.selectList.length === 1) {
            this.dragingCard = this.selectList[0];
        }
        
        if(!this.dragingCard){
            this.dragingCard = this.newCard.data;
        }
        
        if(this.cardList.length < 14) {
            return;
        }
        cc.log("put", this.dragingCard);
        
        let putCard        = {};
        putCard.Throw      = {};
        putCard.Throw.Suit = this.dragingCard.cardType;
        putCard.Throw.Rank = this.dragingCard.cardValue;
        putCard.PlayerID   = window.UserID;
        

        // cc.warn("window.UserID",window.UserID);
        let card = this.dragingCard; //將可能移動(打出去)的卡牌     
        this.clearSelectCard(card);
        this.clearDragingCard(true);
        this.PutCard = card.node;//打出去牌的Node
        this.throwData = putCard;
        
        return putCard;
    },

    putNode(self) {
        this.PutCard = this.PutCard || this.selectList[this.selectList.length - 1] || this.newCard;
        if(this.PutCard) {
            this.PutCard.opacity = 0;
        }
        return this.PutCard;
    },

    throwCardRet(data) {
        if(data.Success) {
            if(!this.PutCard && this.newCard) {
                this.PutCard = this.newCard;
            }
            this.newCard = null;
            this.PutCard.destroy();
            for (let k in this.cardGroup) {
                this.cardGroup[k].init(this, k);
            }
            
            this.cardList = this.node.getComponentsInChildren("Card");
            let i; 
            for (i = this.cardList.length - 1; i >= 0; i--) {
                if(this.cardList[i].node === null){
                    this.cardList.splice(i, 1);
                }
            }

            this.cardGroupSets();
            this.resetGroupData();
            this.resetGroupSize();

            let j,m,l=this.groupSets.length;
            for(i=0;i<l;i++){
                m=this.groupSets[i].length;
                for(j=0;j<m;j++) {
                    if(this.groupSets[i][j] && this.groupSets[i][j].cardType === this.throwData.Throw.Suit && this.groupSets[i][j].cardValue === this.throwData.Throw.Rank){
                        this.groupSets[i].splice(j, 1);
                        break;
                    }
                }
            }
            cc.log("將送出牌", this.groupSets, this.throwData);
            this.sendCards();
        }
    },

    //摸牌
    addNewCard(cardData) {
        console.error("摸牌:", cardData);
        if(cardData.Success === false) {
            return;
        }

        let i, len = this.cardList.length;
        for (i = 0; i < len; i++) {
            if(!this.cardList[i]) {
                cc.log(this.cardList, i);
            } else if(this.cardList[i].node === null) {
                this.cardList.splice(i, 1);
            }
        }

        if(this.cardList.length > 13) {
            cc.error("摸牌err:手上超過14張牌", this.cardList);
        }

        let data     = cardData.Card;
        this.newCard = this.createCard();
        this.newCard.data.setData(data.Suit, data.Rank);
        this.newCard.opacity = 64;

        for (let k in this.cardGroup) {
            this.cardGroup[k].init(this, k);
        }

        this.clearDragingCard(true);
        this.cardGroupSets();   //剛發牌後排組順序重新排序(依照排組中的卡牌數量)
        this.resetGroupSize();

        this.newCard.opacity = 0;
        return this.newCard;
    },
    
    addNewCardShow(){
        console.error("摸牌顯示:", this.newCard);
        this.newCard.opacity = 255;
    },

    createCard() {
        let newCard    = new cc.Node("card");
        newCard.parent = this.cardGroup[this.cardGroup.length - 1].node;
        newCard.addComponent(cc.Sprite);
        newCard.data = newCard.addComponent("Card");
        newCard.addComponent(cc.Button);
        this.cardList.push(newCard.data);
        return newCard;
    },

    onTouchEnd : function (event) {
        let change = this.dragingCard;
        if(event.target === this.root && change) {
            cc.warn("event:", event);
        }

        if(change) {
            cc.log(this.dragingCard.node.name);
            change.node.parent = change.cardGroup.node;

            let c   = change.cardGroup.node.children;
            let len = c.length;
            for (let i = 0; i < len; i++) {
                cc.log("change", i);
                c[i].zIndex = i;
            }
            change.node.zIndex   = this.fakeCard.zIndex;
            this.fakeCard.parent = this.draginParent;
            this.fakeCard.data.updateX();
            this.clearDragingCard(false);
        }
    },

    checkEnterStart() {
        let cards = this.node.getComponentsInChildren("Card").concat(this.node.getComponentsInChildren("fakeCard"));
        for (let k in cards) {
            cards[k].updateX();
        }
        this.enterOnly = null;
    },

    checkEnter(touchPoint, node) {
        let cards   = this.node.getComponentsInChildren("Card").concat(this.node.getComponentsInChildren("fakeCard"));
        let cardsIn = [];
        let lastOne = null;
        for (let k in cards) {
            if(cards[k].checkTouchEnter(touchPoint.x, touchPoint.y, node)) {
                cardsIn.push(cards[k]);
            }
        }
        cardsIn.sort(this.compareByX);
        for (let k in cardsIn) {
            lastOne = cardsIn[k];
        }
        if(this.enterOnly !== lastOne) {
            this.enterOnly = lastOne;
            if(lastOne) {
                lastOne.onTouchEnter(lastOne);
                lastOne.updateX();
                this.fakeCard.data.updateX();
            }
        }
        this.OpenDeck.in(touchPoint);
    },

    setSelectCard(card, cardGroup) {
        this.selectList.push(card);

        // 新Group按鈕顯示
        if(this.GroupButton) this.GroupButton.active = true;
        // 顯示Add按鈕
        for (let k in this.cardGroup) {
            this.cardGroup[k].showAddButton();
            this.cardGroup[k].hideMsg();
        }
    },

    clearSelectCard(card) {
        var index = this.selectList.indexOf(card);
        if(index > -1) {
            this.selectList.splice(index, 1);
        }

        // 沒有牌被選擇 隱藏Add按鈕
        if(this.selectList.length === 0) {
            if(this.GroupButton) this.GroupButton.active = false;
            for (let k in this.cardGroup) {
                this.cardGroup[k].hideAddButton();
                this.cardGroup[k].showMsg();
            }
        }
    },

    resetGroupSize() {
        let self = this;
        this.scheduleOnce(function () {
            for (let k in this.cardGroup) {
                self.cardGroup[k].resetSize();
            }
        }, 0.5);
    },

    //依照獲取的groupSets重新分配cardGroup中的卡牌
    cardGroupSets() {
        // let lastOne = this.groupSets.pop();
        // this.groupSets.sort(this.compareByLen);
        // this.groupSets.push(lastOne);

        let firstGroup = this.cardGroup[0];
        while (this.groupSets.length >= this.cardGroup.length) {
            let count         = this.cardGroup.length + 1;
            let newNode       = new cc.Node("Group_" + count);
            newNode.parent    = firstGroup.node.parent;
            let layout        = newNode.addComponent(cc.Layout);
            layout.type       = cc.Layout.Type.HORIZONTAL;
            layout.resizeMode = cc.Layout.ResizeMode.CONTAINER;
            layout.spacingX   = -80;
            let group         = newNode.addComponent("CardGroup");
            this.cardGroup.push(group);
            newNode        = cc.instantiate(firstGroup.ButtonUI);
            newNode.name   = "Button_" + count;
            newNode.parent = firstGroup.ButtonUI.parent;
            group.ButtonUI = newNode;
            group.init(this, count);
        }

        for (let k in this.groupSets) {
            let g = this.groupSets[k];
            for (let i in g) {
                if(this.cardGroup[k]) {
                    this.cardGroup[k].node.active = true;
                    g[i].node.parent              = this.cardGroup[k].node;
                }
            }
            this.cardGroup[k].resetData();
        }
    },

    setDragingCard(card) {
        if(!this.dragingCard) {
            this.dragingCard = card;
        }
    },

    setLayout(sw) {
        for (let k in this.cardGroup) {
            this.cardGroup[k].setLayout(sw);
        }
    },

    //加入群組
    clickAdd(cardGroup) {
        for (let k in this.selectList) {
            let card         = this.selectList[k];
            card.node.parent = cardGroup.node;
            card.clearSelect();
        }
        // 新Group按鈕隱藏
        if(this.GroupButton) this.GroupButton.active = false;
        this.selectList = [];
        for (let k in this.cardGroup) {
            this.cardGroup[k].hideAddButton();
            this.cardGroup[k].showMsg();
        }

        this.resetGroupData();
        for (let k in this.cardGroup) {
            this.cardGroup[k].sortChild();
        }
        this.clearDragingCard(true);
        this.cardGroupSets();
        this.resetGroupSize();
    },

    clearDragingCard(sendCard) {
        this.dragingCard = null;
        this.selectList  = []; //單純清除
        this.resetGroupData();
        this.setLayout(true);

        this.updateGroupSets();
        if(sendCard === true) {
            this.sendCards();
        }
    },

    //重新獲取群組和卡牌資料
    resetGroupData() {
        this.updateGroupSets();
        for (let k in this.cardGroup) {
            this.cardGroup[k].resetData();
        }
    },

    updateGroupSets() {
        this.groupSets = [];
        for (let k in this.cardGroup) {
            let groupSet = [];
            for (let i in this.cardGroup[k].card) {
                let card = this.cardGroup[k].card[i];
                groupSet.push({
                    cardType  : card.cardType,
                    cardValue : card.cardValue,
                    node      : card.node
                });
            }
            if(groupSet.length > 0) {
                this.groupSets.push(groupSet);
            }
        }
    },

    //送出目前手牌資料
    sendCards() {
        let len       = this.groupSets.length;
        let dlen, i, j;
        // let outData = [];
        let outData   = {};
        outData.Decks = [];
        
        for (i = 0; i < len; i++) {
            let d            = this.groupSets[i];
            let Poker_Deck   = {};
            Poker_Deck.Cards = [];
            dlen             = d.length;
            for (j = 0; j < dlen; j++) {
                let Poker_Card  = {};
                Poker_Card.Suit = d[j].cardType;
                Poker_Card.Rank = d[j].cardValue;
                Poker_Deck.Cards.push(Poker_Card);
            }
            outData.Decks.push(Poker_Deck);
        }
        if(this.UIGame !== undefined && this.UIGame !== null) {
            this.UIGame.refreshHand(outData);
        } else {
            cc.log("sendCards outData no this.UIGame", outData);
        }
    },

    compareByX(a, b) {
        return a.x === b.x ? 0 : a.x > b.x ? 1 : -1;
    },

    compareByLen(a, b) {
        return a.length === b.length ? 0 : a.length > b.length ? -1 : 1;
    },
});
