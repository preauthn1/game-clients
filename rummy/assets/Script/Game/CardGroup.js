cc.Class({
    extends : cc.Component,

    properties : {
        ButtonUI : cc.Node
    },

    init(choose, id) {
        this.choose = choose;
        this.resetData();
        this.id  = id;
        let self = this;

        this.Msg       = cc.find("Message/Background", this.ButtonUI);
        this.MsgSprite = cc.find("Message/Background", this.ButtonUI).getComponent(cc.Sprite);
        this.MsgText   = cc.find("Message/Background/Label", this.ButtonUI).getComponent(cc.Label);
        this.layout    = this.node.getComponent(cc.Layout);

        this.ButtonAdd = cc.find("ButtonAdd", this.ButtonUI).getComponent(cc.Button);
        this.hideAddButton();
        this.ButtonAdd.node.on("click", function () {
            self.choose.clickAdd(self);
        }, this.ButtonAdd.node);

        this.card = this.node.getComponentsInChildren("Card");
        for (let k in this.card) {
            this.card[k].init(this, choose);
        }


        this.node.on(cc.Node.EventType.SIZE_CHANGED, this.resizeMSG, this);

    },

    resizeMSG() {
        this.resetSize();
    },

    setLayout(sw) {
        this.layout.enabled = sw;
    },

    getId() {
        return this.id;
    },

    resetSize() {
        let l = this.node.childrenCount;
        if(l > 0) {
            this.ButtonUI.position     = this.node.position;
            this.MsgSprite.node.width  = this.node.width;
            this.MsgSprite.node.active = true;
        }
        else {
            this.MsgSprite.node.active = false;
        }
    },

    resetData() {
        this.node.width = 0;

        let l     = this.node.childrenCount;
        this.card = this.node.getComponentsInChildren("Card");
        if(l > 0) {
            let self = this;
            this.scheduleOnce(function () {
                this.ButtonUI.active      = true;
                self.ButtonUI.position    = self.node.position;
                self.MsgSprite.node.width = self.node.width;
            }, 0.1);
            for (let k in this.card) {
                this.card[k].resetCard(this, this.choose);
            }
        }
        else {
            this.node.active     = false;
            this.ButtonUI.active = false;
        }
    },

    //陣列中以x排序
    compareByX(a, b) {
        return a.x === b.x ? 0 : a.x > b.x ? 1 : -1;
    },

    //陣列中以cardType排序
    compareByStyle(a, b) {
        return a.cardType === b.cardType ? 0 : a.cardType > b.cardType ? 1 : -1;
    },

    //陣列中以cardValue排序
    compareByValue(a, b) {
        return a.cardValue === b.cardValue ? 0 : a.cardValue > b.cardValue ? 1 : -1;
    },

    //為新加入牌組的卡牌排序整個牌組
    sortChild() {
        this.card.sort(this.compareByValue);
        this.card.sort(this.compareByStyle);
        for (let k in this.card) {
            this.card[k].node.zIndex = k;
        }
    },

    showAddButton() {
        this.ButtonAdd.node.active = true;
    },

    hideAddButton() {
        this.ButtonAdd.node.active = false;
    },

    setMsg(msg) {
        if(this.MsgText) {
            this.MsgText.string = msg;
        } else {
            cc.warn("message is miss",this.Msg);
        }
    },

    showMsg() {
        this.Msg.active = true;
    },

    hideMsg() {
        this.Msg.active = false;
    },
});
