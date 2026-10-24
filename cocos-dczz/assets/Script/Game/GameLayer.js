// var G                 = require("Global");
// let uiCutDeck         = null;
// 接收消息table
// let pojectName        = GameG.GetGameName;
const GameG=require("GameGlobal");
var utils=require("../Base/utils");
let root=null;
let uiBottomBar=null;
let uiDealer=null;
let uiMain=null;
let gameModel=null;
let seatNo=null;
let betPrefab=null;
let betStarted=false;
let inWar=false;
let playerState=0;
let playerMoney=0;
let baseBetMax=0;
let tieBetMax=0;
let sequenceArray=[];
let players=[];
let chipData=[];
let playerCount=3;
let dealStartPosition=cc.v3(0, 800, 0);

let BetCountdown=function (time) {
    uiMain.StartSquareCountdown("bet", time, function () {
        uiBottomBar.SetChipsActive(false);
        players[seatNo].SetBetPoolActive(false);
    });
};

//結算
let Settlement=function (userInfo) {
    let player=players[userInfo.SeatNo];
    if (userInfo.SeatNo == seatNo) {
        GameG.PlayGameSound(userInfo.Winner == 0 ? "lose" : "win");
        uiDealer.SetAnimation(userInfo.Winner == 0 ? "win" : "lose");
        playerMoney=userInfo.Money;
    }
    player.ShowWinLoseAnimation(userInfo.Winner == 0 ? "lose" : "win", function () {
        //輸
        if (userInfo.Winner == 0) {
            player.MoveBetPool(0, uiDealer.GetPosition());
            //贏
        } else if (userInfo.Winner == 1) {

            if (userInfo.SeatNo == seatNo) {
                GameG.PlayGameSound("coin");
            }
            uiDealer.ShootMoney(userInfo.TotalWinLose, player.GetPosition());
            player.MoveBetPool(0, player.GetPosition());
        }
        player.ShowWinLoseMoney(userInfo.TotalWinLose, function () { player.SetMoney(userInfo.Money); });
        if (userInfo.Bet_Side>0) {
            player.MoveBetPool(1, uiDealer.GetPosition());
        }
    });
};

const GameLayer={
    extends : cc.Component,

    Init : function () {
        root=cc.find("Canvas/GameLayer");
        gameModel=require("GameModel");
        gameModel.Start();
        uiBottomBar=require("UIBottomBar").Create(cc.find("UIBottomBar", root));
        uiDealer=require("UIDealer").Create(cc.find("UIDealer", root));
        uiMain=require("UIMain").Create(cc.find("UIMain", root));
        betPrefab=cc.find("BetPrefab", root);
        sequenceArray=[];
        players=[];
        chipData=[];
        for (let i=1; i<=playerCount; i ++) {
            players[i]=require("UIPlayer").Create(cc.find("UIPlayer/Player" + i, root));
        }
        betPrefab.active=false;
        betStarted=false;
        inWar=false;
        this.wasSet=true;
    },

    checkState : function () {
        if (!this.wasSet) return false;
        return true;
    },

    GetBetPrefab : function () {
        return betPrefab;
    },

    GetPlayerMoney : function () {
        return playerMoney;
    },

    GetBaseBetMax : function () {
        return baseBetMax;
    },

    GetTieBetMax : function () {
        return tieBetMax;
    },

    /**
     * 新建或取得指定Node以及相同ID的Tween
     * @param {cc.Node} node
     * @param {string} ID
     * @returns {cc.Tween}
     */
    GetSequence : function (node, ID) {
        let obj=node && node.node || node || {};
        if (node && node.stopAllActions) node.stopAllActions();
        obj.seqID=this.newSeqID();
        if (node && node.stopAllActions) node.stopAllActions();
        this.clearMissingNode();
        let sequence=cc.tween(obj);
        sequenceArray.push(sequence);
        sequence.id=ID;
        return sequence;
    },

    newSeqID(iD) {
        iD=iD || 0;
        let i, l=sequenceArray.length;
        let cid="seq_" + iD;
        for (i=0; i<l; i ++) {
            if (sequenceArray[i]._target.seqID == cid) {
                return this.newSeqID(iD + 1);
            }
        }
        return cid;
    },

    /**
     * 停止tween並從紀錄陣列中清除
     * @param {cc.Tween} seq
     */
    clearTargetSequence(seq) {
        //seq.stop();
        this.tableRemove(sequenceArray, seq);
        seq=null;
        // cc.log("del", sequenceArray);
    },

    clearMissingNode() {
        let seq=null;
        let i, l=sequenceArray.length;
        for (i=0; i<l; i ++) {
            seq=sequenceArray[i];
            if (!seq._finalAction) {
                this.clearTargetSequence(seq);
                this.clearMissingNode();
                break;
            }
            let nodepath=nodePath(seq._target);
            if (nodepath && !cc.isValid(seq._target, true)) {
                this.clearTargetSequence(seq);
                this.clearMissingNode();
                break;
            }
        }
    },

    RemoveAllSequence : function () {
        while (sequenceArray.length>0) {
            let tmp=sequenceArray.shift();
            tmp.stop();
            tmp=null;
        }
    },

    Delay : function (time, Func) {
        if (!Func) {
            cc.log("Func", Func);
            return;
        }
        let seq=this.GetSequence(null, "Delay");
        let self=this;
        seq.delay(time)
           .call(function () {
               Func();
               self.clearTargetSequence(seq);
           })
           .start();
    },

    MoneyText : function (money) {
        let betMoneyText=money / 100;
        if (betMoneyText % 1 == 0) {
            betMoneyText=Math.ceil(betMoneyText);
        }
        return money == 0 && "" || betMoneyText;
    },

    OnDestroy : function () {
        this.RemoveAllSequence();
    },

    Start : function () {
    },

    Reset : function () {
        for (let k in (players)) {
            let v=players[k * 1];
            v.Reset();
        }
        uiBottomBar.Reset();
        if (inWar) {
            GameG.PlayGameBGM("main");
            inWar=false;
        }
        betStarted=false;
    },

    GetBetSpriteName : function (money) {
        for (let k in (chipData)) {
            let v=chipData[k * 1];

            if (money == v.money) {
                return v.spriteName;
            }
        }
    },

    SetChipData : function (data) {
        for (let i=0; i<data.length; i ++) {
            chipData[i]={};
            chipData[i].spriteName="chip_" + (i + 1).toString();
            chipData[i].money=data[i];
        }
    },

    GetChipData : function () {
        return chipData;
    },

    PlayWarBgm : function () {
        if (inWar != null) {
            GameG.PlayGameBGM("war");
            inWar=true;
        }
    },

    CreateBet : function (data) {
        for (let k in (data.AllUserInfo)) {
            let v=data.AllUserInfo[k * 1];

            if (v.State == 1 && v.Bet_Base>0) {
                let basePoolMoney=v.Bet_Base + v.Bet_Double;
                let tiePoolMoney=v.Bet_Side;
                players[v.SeatNo].Bet(basePoolMoney, 0, null, 0);
                players[v.SeatNo].Bet(tiePoolMoney, 1, null, 0);
                if (v.SeatNo == seatNo) {
                    uiBottomBar.AddBetMoney(basePoolMoney, 0);
                    uiBottomBar.AddBetMoney(tiePoolMoney, 1);
                }
            }
        }
    },

    CreateCard : function (data) {
        let self=this;
        //斷線重連的重新發牌 不用緩速
        let sequence=this.GetSequence(null, "CreateCard");
        for (let k in (data.AllUserInfo)) {
            let v=data.AllUserInfo[k * 1];
            if (v.State == 1 && v.HandCards != null && v.HandCards.length>0) {
                let player=players[v.SeatNo];
                for (let cardIndex in (v.HandCards)) {
                    let cardInfo=v.HandCards[cardIndex * 1];
                    sequence.call(function () {
                        player.Deal(cardInfo, 0);//0=0.2
                    });
                    if (cardIndex>4) {
                        player.MoveCardRoot();
                        player.MoveTieSkeleton();
                    }
                }
                if (v.GetTieAward) {
                    player.ShowTieAnimation();
                }

                if (v.Winner == 0) {
                    player.ShowWinLoseAnimation("lose");
                }

                if (v.Winner == 1) {
                    player.ShowWinLoseAnimation("win");
                }

                if (v.IsFolded) {
                    player.SetAbandonImageActive(true);
                }

                if (v.CanEnterWar) {
                    this.PlayWarBgm();
                }
            }
        }

        if (data.DealerCards != null && data.DealerCards.length>0) {
            for (let k in (data.DealerCards)) {
                let v=data.DealerCards[k * 1];
                sequence.call(function () {
                    uiDealer.Deal(v, 0);
                });
                if (k>4) {
                    uiDealer.MoveCardRoot();
                }
            }
        }

        sequence.call(function () {
            self.clearTargetSequence(sequence);
        });

        this.CreateCardSeq=sequence;
        sequence.start();
    },

    DismantlingBet : function (money) {
        if (money<=0) {
            return [];
        }
        let individualChips=[];
        let i=chipData.length - 1;
        while (i>=0) {
            if (money>=chipData[i].money && money - chipData[i].money>=0) {
                money=money - chipData[i].money;
                individualChips.push(chipData[i].money);
            } else {
                i --;
            }
        }
        return individualChips;
    },

    SetChipButtonInteractable : function () {
        uiBottomBar.SetChipButtonInteractable();
    },

    //10001 S2C 牌局資訊，於玩家進入牌局或斷線重連時傳送
    GameInfo : function (data) {
        this.AllUserInfo(data);
        uiBottomBar.CreateChip(data.ChipValue);
        uiMain.SetGameDescriptionText(data.PokerManual);
        this.SetChipData(data.ChipValue);
        // uiBottomBar.SetWarAreaPosition(players[seatNo].GetPosition());
        baseBetMax=data.BetBaseLimit;
        tieBetMax=data.BetSideLimit;
        players[seatNo].ShowSeatSign();
        this.CreateBet(data);
        this.CreateCard(data);
    },

    // 10002 S2C 玩家資訊，當玩家人數或狀態有變動時傳送
    AllUserInfo : function (data) {
        for (let k in (data.AllUserInfo)) {
            let v=data.AllUserInfo[k * 1];
            players[v.SeatNo].SetPlayer(v);
            if (v.UserID == GameG.getUserID()) {
                seatNo=v.SeatNo;
                playerMoney=v.Money;
                playerState=v.State;
            }
        }
    },

    //10003 S2C 等待遊戲開始，此階段玩家可自由進出遊戲
    WaitingStart : function (data) {
        uiMain.StartSquareCountdown("waiting", data.TimeRemain);
    },

    //10004 S2C 洗牌
    Shuffle : function () {
        let self=this;
        uiMain.ShowShuffleSkeleton(function () {
            self.ShuffleOK();
        });
    },

    //10005 C2S 洗牌動畫播放完成
    ShuffleOK : function () {
        gameModel.ShuffleOK();
    },

    //10006 S2C 開始下注
    StartBetting : function (data) {
        GameG.PlayGameSound("BetBegin");
        if (!betStarted) {
            betStarted=true;
            if (playerState == 1) {
                players[seatNo].SetBetPoolActive(true);
                uiBottomBar.SetChipsActive(true);
            }
            uiMain.PlayStartBetAnimation(function () {
                let time=data.TimeRemain - 2.2;
                BetCountdown(time);
            });
        }
    },

    GetChooseBetType : function () {
        return players[seatNo].GetChooseBetType();
    },

    //10007 C2S 玩家下注
    Bet : function (type) {
        let data={};
        data.BetType=type;
        if (type !== 0 || uiBottomBar.thisCanBet()) {
            data.Bet=uiBottomBar.GetChooseChip().money;
            gameModel.Bet(data);
        } else {
            uiMain.ShowMessage("总压注额超过上限");
        }
    },

    //10008 S2C 玩家下注結果
    BetResult : function (data) {
        if (data.Result == 0) {
            let bet=data.Bet;
            let type=data.BetType;
            let position=data.SeatNo == seatNo ? uiBottomBar.GetChipPosition(bet) : players[data.SeatNo].GetPosition();     //AZLDC : world pos
            players[data.SeatNo].Bet(bet, type, position);
            players[data.SeatNo].SetMoney(data.MoneyRemain);
            if (data.SeatNo == seatNo) {
                playerMoney=data.MoneyRemain;
                uiBottomBar.AddBetMoney(bet, type);
            }
        } else if (data.Result == - 1) {
            uiMain.ShowMessage("下注失败");
        } else if (data.Result == - 2) {
            uiMain.ShowMessage("携带金额不足");
        } else if (data.Result == - 3) {
            uiMain.ShowMessage("已停止下注");
        } else if (data.Result == - 4) {
            uiMain.ShowMessage("总压注额超过上限");
        } else if (data.Result == - 5) {
            uiMain.ShowMessage("压注金额低于1");
        }
    },

    //10009 S2C 玩家停止下注
    StopBetting : function () {
        let self=this;
        uiBottomBar.SetChipsActive(false);
        GameG.PlayGameSound("BetEnd");
        uiMain.PlayEndBetAnimation(function () {
            self.StopBettingAnimationOK();
        });
    },

    // 10010 C2S 玩家停止下注動畫播放完成
    StopBettingAnimationOK : function () {
        uiBottomBar.SetChipsActive(false);
        gameModel.StopBettingAnimationOK();
    },

    // 10011 S2C 一般發牌
    NormalDeal : function (data) {
        let self=this;
        let sequence=this.GetSequence(null, "NormalDeal");

        for (let k in (data.AllUserInfo)) {
            let v=data.AllUserInfo[k * 1];

            if (v.State == 1 && v.HandCards != null && v.HandCards.length>0) {
                sequence.call(function () {
                    players[v.SeatNo].Deal(v.HandCards[0]);
                })
                        .delay(0.2);
            }
        }

        sequence.call(function () {
            uiDealer.Deal(data.DealerCards[0]);
        })
                .delay(1.2)
                .call(function () {
                    self.NormalDealAnimationOK();
                    self.clearTargetSequence(sequence);
                })
                .start();


    },

    NormalDealAnimationOK : function (data) {
        gameModel.NormalDealAnimationOK();
    },


    // 10013 S2C 一般結算
    NormalSettlement : function (data) {
        let self=this;
        for (let k in (data.AllUserInfo)) {
            let v=data.AllUserInfo[k * 1];

            if (v.State == 1) {
                let player=players[v.SeatNo];
                //平手
                if (v.Winner == 2 && v.Bet_Side>0) {
                    if (v.SeatNo == seatNo) {
                        uiMain.ShowTieSkeleton();
                    }
                    player.ShowTieAnimation();
                    player.MoveBetPool(1, player.GetPosition());
                    uiDealer.ShootMoney(v.TotalWinLose, player.GetPosition());
                    player.ShowWinLoseMoney(v.TotalWinLose, function () { player.SetMoney(v.Money); });
                } else if (v.Winner == 0 || v.Winner == 1) {
                    Settlement(v);
                }
            }
        }
        this.Delay(3, function () { self.NormalSettlementOK(); });
    },

    //10014 C2S 一般結算動畫播放完成
    NormalSettlementOK : function () {
        gameModel.NormalSettlementOK();
    },


    // 10015 S2C 進入戰爭階段，符合資格玩家選擇是否要進入
    WarPhase : function (data) {
        this.PlayWarBgm();
        if (playerState != 1) {
            return;
        }
        for (let k in (data.AllUserInfo)) {
            let v=data.AllUserInfo[k * 1];

            let player=players[v.SeatNo];
            if (v.SeatNo == seatNo && v.CanEnterWar) {
                uiBottomBar.SetWarAreaActive(true);
                uiMain.StartSquareCountdown("selection", data.TimeRemain, function () {
                    uiBottomBar.SetWarAreaActive(false);
                });
            }
        }
    },

    // 10016 C2S 戰爭階段選項
    WarPhaseSelection : function (selection) {
        let data=[];
        data.Selection=selection;
        gameModel.WarPhaseSelection(data);
        uiMain.StopSquareCountdown();
        uiBottomBar.SetWarAreaActive(false);
    },

    // 10017  S2C 戰爭階段選擇結果
    WarPhaseselectionResult : function (data) {
        if (data.Selection == 0) {
            players[data.SeatNo].Abandon(uiDealer.GetPosition());
            GameG.PlayGameSound("giveup");
        } else {
            players[data.SeatNo].DoubleBet();
            players[data.SeatNo].SetMoney(data.MoneyRemain);
        }
    },

    // 10018 S2C 開始戰爭階段
    WarPhaseBegin : function () {
        let self=this;
        GameG.PlayGameSound("fight");
        uiMain.ShowVSSkeleton(function () {
            self.WarPhaseAnimationOK();
        });
    },

    //10019 C2S 進入戰爭階段動畫播放完成
    WarPhaseAnimationOK : function () {
        gameModel.WarPhaseAnimationOK();
    },

    //10020 S2C 戰爭階段發牌
    WarDeal : function (data) {
        let self=this;
        let sequence=this.GetSequence(null, "WarDeal");
        for (let k in (data.AllUserInfo)) {
            let v=data.AllUserInfo[k * 1];

            if (v.State == 1 && v.CanEnterWar && v.HandCards != null && v.HandCards.length>1) {
                for (let i=1; i<5; i ++) {
                    sequence.call(function () {
                        players[v.SeatNo].Deal(v.HandCards[i]);
                    })
                            .delay(0.2);
                }
                sequence.call(function () {
                    players[v.SeatNo].MoveCardRoot();
                    players[v.SeatNo].MoveTieSkeleton();
                });
            }
        }
        for (let i=1; i<5; i ++) {
            sequence.call(function () {
                uiDealer.Deal(data.DealerCards[i]);
            });
            sequence.delay(0.2);
        }

        sequence.call(function () {
            uiDealer.MoveCardRoot();
        })
                .delay(1)
                .call(function () {
                    self.WarDealAnimationOK();
                    self.clearTargetSequence(sequence);
                })
                .start();
    },

    //10021 C2S 戰爭階段發牌動畫播放完成
    WarDealAnimationOK : function () {
        gameModel.WarDealAnimationOK();
    },

    //10022 S2C 戰爭階段結算
    WarSettlement : function (data) {
        for (let k in (data.AllUserInfo)) {
            let v=data.AllUserInfo[k * 1];
            if (v.State == 1 && v.CanEnterWar && v.HandCards.length>1) {
                Settlement(v);
            }
        }
        this.Delay(2, function () { gameModel.WarSettlementOK(); });

    },

    //10024  S2C 本局結束
    GameOver : function () {
        let self=this;
        let test=this.GetSequence(null, "WarDeal");
        test.stop();
        //stop WarDeal
        if (this.CreateCardSeq) {
            this.CreateCardSeq.stop();
            this.CreateCardSeq=null;
        }

        for (let k in (players)) {
            let v=players[k * 1];

            v.HideAllSkeleton();
            v.RecoverCard(dealStartPosition);
        }
        uiDealer.RecoverCard(dealStartPosition);

        this.Delay(0.3, function () {
            self.Reset();
        });
    },

    WarSettlementOK : function () {
        gameModel.WarSettlementOK();
    },

    ///tableInsert(Array, object, index)
    ///tableInsert(Array, object)
    /// arr : Array for edit 
    /// a : an object to add to arr
    /// b : insert object a to arr in index b 
    tableInsert(arr, a, b) {
        if (b != null && b != undefined) {
            if (arr[0]) a-=1;
            arr.splice(a, 0, b);
        } else {
            arr.push(a);
        }
    },

    ///tableRemove(Array, index)
    /// arr : Array for edit
    /// a : index to remove, or an object in arr to remove
    tableRemove(arr, a) {
        let p=parseInt(a);
        if (isNaN(p)) {
            let i=arr.indexOf(a);
            if (i>=0) {
                arr.splice(i, 1);
            }
        } else {
            arr.splice(a, 1);
        }
    },

    RandomRange(min, max) {
        return min + Math.random() * (max - min);
    },

    destoryNode(iNode) {
        if (!iNode) {
            cc.warn("trying to destory a Node is null");
            return;
        }
        let node=iNode.node || iNode;
        node.destroy();
    },

    SetNativeSize(sprite) {
        sprite._applySpriteSize();
    },

    setParent(parent, node) {
        if (parent.node) parent=parent.node;
        if (node.node) node=node.node;
        utils.node.setParent(parent, node);
    },

    ////////////////////////////
    /// 指定物件往目標物件所在位置移動
    ////////////////////////////
    /// node   : cc.node, 將操作的目標
    /// from   : cc.node, 指定來源,若為null，則從node目前位置開始
    /// to     : cc.node, 指定目標, node將移動到to的位置
    /// time   : 秒數, 緩動效果花費時間
    /// callBack : function, 結束後呼叫的function
    /// rotate : bool, 是否跟隨旋轉
    /// scale  : bool, 是否跟隨縮放
    worldPosToFollow(node, from, to, time, callBack, rotate, scale, delay) {
        if (!node || !to) return;
        if (node.node) node=node.node;
        if (to.node) to=to.node;
        if (from && from.node) from=from.node;
        let oldParent=node.parent;
        if (time<=0) {
            node.parent=to;
            node.parent=oldParent;
            node.position=cc.v2(0, 0);
            if (rotate) node.angle=0;
            if (scale) node.scaleX=node.scaleY=1;
            //not yeat done
            return;
        }
        if (from) {
            node.parent=from;
            node.x=cc.v2(0, 0);
            if (rotate) node.angle=0;
            if (scale) node.scaleX=node.scaleY=1;
        }
        utils.node.setParent(to, node);
        cc.error("run!!");
        let seq=this.GetSequence(node);
        if (!rotate && !scale) {
            seq.to(time, { position : cc.v2(0, 0) });
        }
        if (rotate && !scale) {
            seq.to(time, { position : cc.v2(0, 0), angle : 0 });
        }
        if (!rotate && scale) {
            seq.to(time, { position : cc.v2(0, 0), scaleX : 1, scaleY : 1 });
        }
        if (rotate && scale) {
            seq.to(time, { position : cc.v2(0, 0), angle : 0, scale : 1 });
        }
        if (callBack) {
            seq.call(callBack());
        }
        seq.start();
    }

};

module.exports=GameLayer;
