let utils = require("utils");
var GameG = require("GameGlobal");

cc.Class({
    extends : cc.Component,

    properties : {},

    init : function (cardGroup, choose) {
        this.cardGroup     = cardGroup;
        this.choose        = choose;
        this.isSelect      = false;
        this.isDraging     = false;
        this.startP        = cc.v2(0, 0);
        this.node.position = cc.v2(0, 0);
        this.draginParent  = choose.draginParent;
        this.fakeCard      = cc.find("fakeDragin", this.draginParent);
        this.img           = this.node.getComponent(cc.Sprite);
        this.node.img      = this.img;
        let posAR          = this.node.convertToWorldSpaceAR(cc.v2(0, 0));
        this.x             = posAR.x;
        this.y             = posAR.y;
        this.pos           = cc.v2(this.x, this.y);
        let self           = this;

        // this.node.on("click", this.onClick, this);
        this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);

        this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.onTOUCHCANCEL, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.onTOUCH_END, this);

        this.node.data  = this;
        this.checkShift = cc.v2(0, 0);
    },
    
    onDestroy(){
        this.node.off(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        this.node.off(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        this.node.off(cc.Node.EventType.TOUCH_CANCEL, this.onTOUCHCANCEL, this);
        this.node.off(cc.Node.EventType.TOUCH_END, this.onTOUCH_END, this);
        delete this.node.data;//移除額外資料
        delete this.node.i;//移除額外資料
        delete this.node.img;//移除額外資料
    },

    setData(type, value) {
        this.cardType  = type;
        this.cardValue = value;
        this.img       = this.node.getComponent(cc.Sprite);
        this.node.name = "card_" + type + "_" + value;
        GameG.SetCardPic(this.img, type, value);
    },

    onTouchStart : function (event) {
        if(this.choose.TouchTrigger!==true){
            return;
        }
        this.isDraging = false;
        if (event.target === this.node && event.touch._id === 0) {
            this.isDraging = false;
            this.startP    = event.touch._startPoint;
        }
    },

    onTouchMove : function (event) {
        if(this.choose.TouchTrigger!==true){
            return;
        }
        if (event.target === this.node && event.touch._id === 0) {
            let tp    = event.touch._point;
            let shift = tp.sub(this.startP);
            //距離原來的座標超過5Pixel距離後
            if (shift.mag() > 5) {
                if (!this.isDraging) {
                    this.isDraging = true;
                    this.clearSelect();
                    this.choose.clearSelectCard(this);
                    this.choose.setDragingCard(this);
                    this.fakeCard.data.cardGroup = this.cardGroup;
                    this.fakeCard.parent         = this.node.parent;
                    this.cardGroup.setLayout(false);
                    let childx = this.cardGroup.node.children;
                    let len    = childx.length;

                    this.fakeCard.x = this.node.x;
                    this.fakeCard.y = 0;
                    childx.sort(this.compareByX);
                    for (i = 0; i < len; i++) {
                        childx[i].zIndex = i;
                    }

                    this.fakeCard.zIndex = this.node.zIndex;

                    childx.sort(this.compareByZ);
                    let i, j  = 0;
                    let grid  = this.choose.CardGrid;
                    let htotw = (grid * (len - 2)) / 2;     //helf total width
                    
                    for (i = 0; i < len; i++) {
                        let iObj = childx[i];
                        if (iObj !== this.node) {
                            iObj.x = j * grid - htotw;
                            j++;
                        }
                    }
                    this.choose.checkEnterStart();
                }
            }
            this.choose.checkEnter(event.getLocation(), this.node);
            
            if (this.isDraging) {
                // this.pos=event.getLocation().add(cc.v2(40, - 90));
                this.pos           = event.getLocation().add(cc.v2(0, 90));
                this.x             = this.pos.x;
                this.y             = this.pos.y;
                this.node.position = this.node.parent.convertToNodeSpaceAR(this.pos);
            }
        }
    },

    updateX() {
        this.x = this.node.convertToWorldSpaceAR(cc.v2(0, 0)).x;
    },

    checkTouchEnter(cx, cy, node) {
        if (node === this.node) {
            return false;
        }
        let p  = this.node.convertToNodeSpaceAR(cc.Vec2.ZERO);
        let hw = this.node.width * this.node.scaleX * 0.5;
        let hh = this.node.height * this.node.scaleY * 0.5;
        let x  = -p.x;
        let l  = x - hw;
        let r  = x + hw;
        return cx > l && cx < r;
    },

    onTouchEnter : function (card) {
        let target = card.node;
        let thisDC = this.choose.dragingCard;
        if (thisDC) {
            let grid          = this.choose.CardGrid;
            let i             = 0, j = 0, len = 0;
            thisDC.checkShift = thisDC.node.convertToWorldSpaceAR(cc.v2(40, 90));
            if (thisDC.cardGroup !== this.cardGroup) {
                thisDC.cardGroup.setLayout(true);
                this.cardGroup.setLayout(false);

                utils.node.setParent(this.cardGroup.node, thisDC.node);
                utils.node.setParent(this.cardGroup.node, this.fakeCard);
                thisDC.cardGroup = this.cardGroup;

                thisDC.lastIn = this;
                let childx    = this.cardGroup.node.children;
                len           = childx.length;

                cc.log("fakeCard",this.fakeCard);
                cc.log("thisDC",thisDC.node);
                
                this.fakeCard.x = thisDC.node.x - 1;
                childx.sort(this.compareByX);
                for (i = 0; i < len; i++) {
                    childx[i].i      = i;
                    childx[i].zIndex = i;
                }

                let htotw = (grid * (len - 3)) / 2;     //helf total width
                if (this.fakeCard.i === 0) {
                    for (i = 0; i < len; i++) {
                        let iObj = childx[i];
                        if (iObj !== thisDC.node) {
                            iObj.x = j * grid - htotw;
                            j++;
                        }
                    }
                }
                else {
                    for (i = 0; i < len; i++) {
                        let iObj = childx[i];
                        if (iObj !== thisDC.node) {
                            iObj.x = j * grid - htotw - grid / 2;
                            j++;
                        }
                    }
                }
                this.choose.resetGroupSize();
            }
            else {
                thisDC.lastIn = this;
                let childx    = this.cardGroup.node.children;
                len           = childx.length;
                let htotw     = (grid * (len - 2));     //helf total width

                this.cardGroup.node.width = htotw + 112;

                htotw /= 2;

                let childXX = [];
                for (i = 0; i < len; i++) {
                    childXX.push(childx[i]);
                }

                for (i = 0; i < len; i++) {
                    childXX[i].i      = i;
                    childXX[i].zIndex = i;
                }

                let s1 = this.fakeCard.i;
                let s2 = thisDC.node.i;
                let e  = target.i;
                let s  = s1;
                if (s1 > e) {     //後往前拉
                    s = s1 > s2 ? s2 : s1;
                    for (i = s; i < e; i++) {
                        childx[i].zIndex = i + 1;
                    }
                    thisDC.node.zIndex   = target.i - 1;
                    this.fakeCard.zIndex = target.i - 1;
                }
                else {          //前往後拉
                    s = s1 < s2 ? s2 : s1;
                    for (i = s; i > e; i--) {
                        childx[i].zIndex = i - 1;
                    }
                    thisDC.node.zIndex   = target.i + 1;
                    this.fakeCard.zIndex = target.i + 1;
                }

                childx.sort(this.compareByZ);
                for (i = 0; i < len; i++) {
                    childx[i].i      = i;
                    childx[i].zIndex = i;
                }

                for (i = 0; i < len; i++) {
                    let iObj = childx[i];
                    if (iObj !== thisDC.node) {
                        iObj.x = j * grid - htotw;
                        j++;
                    }
                }

                this.choose.resetGroupSize();
            }
        }
    },

    onTOUCHCANCEL : function (event) {
        let change = this.choose.dragingCard;
        if (change && event.touch._id === 0) {
            change.node.parent = change.cardGroup.node;
            let c              = change.cardGroup.node.children;
            let len            = c.length;
            for (let i = 0; i < len; i++) {
                c[i].zIndex = i;
            }

            change.node.zIndex   = this.fakeCard.zIndex;
            this.fakeCard.parent = this.draginParent;

            if(this.choose.OpenDeck.in()){
                this.choose.putCard();
                return;
            }
            this.choose.clearDragingCard(true);
        }
    },

    onTOUCH_END : function (event) {
        cc.log("onTOUCH_END this.choose.TouchTrigger",this.choose.TouchTrigger);
        if(this.choose.TouchTrigger!==true){
            this.isSelect = false;
            return;
        }
        this.isSelect = !this.isSelect;
        if (this.isSelect === true) {
            this.node.position = cc.v2(0, 70, 0);
            this.choose.setSelectCard(this, this.cardGroup);
        }
        else {
            this.clearSelect();
            this.choose.clearSelectCard(this);
        }
    },

    compareByWorldX(a, b) {
        let ax = a.convertToWorldSpaceAR(cc.v2(0, 0)).x;
        let bx = b.convertToWorldSpaceAR(cc.v2(0, 0)).x;
        return ax === bx ? 0 : ax > bx ? 1 : -1;
    },

    compareByX(a, b) {
        return a.x === b.x ? 0 : a.x > b.x ? 1 : -1;
    },

    compareByZ(a, b) {
        return a.zIndex === b.zIndex ? 0 : a.zIndex > b.zIndex ? 1 : -1;
    },

    clearSelect() {
        this.node.position = cc.v2(0, 0);
        this.isSelect      = false;
    },

    resetCard(cardGroup, choose) {
        this.cardGroup   = cardGroup;
        this.choose      = choose;
        this.node.width  = choose.CardSize.x;
        this.node.height = choose.CardSize.y;
        this.clearSelect();
    },

});
