var G=require("Global");
// 接收消息table
var pojectName=G.GetGamePName();
var gameLayer=require("GameLayer");
var GameG=require("GameGlobal");
var maxBetCount=30;
var betMoveDuration=0.3;
var winLoseMoneyDuration=2.5;

var UIPlayer={
    extends : cc.Component,

    Create(root) {
        let target=require("Seat").Create(root);

        let playerInfo=cc.find("PlayerInfo", root);
        let playerBackground=cc.find("PlayerInfo/PlayerBackground", root).getComponent(cc.Sprite);
        let ownBackground=cc.find("PlayerInfo/OwnBackground", root).getComponent(cc.Sprite);
        let idText=cc.find("PlayerInfo/IDText", root).getComponent(cc.Label);
        let moneyText=cc.find("PlayerInfo/MoneyText", root).getComponent(cc.Label);
        let abandonImage=cc.find("AbandonImage", root).getComponent(cc.Sprite);
        let winMoneyText=cc.find("WinMoneyText", root).getComponent("TextControl");
        let loseMoneyText=cc.find("LoseMoneyText", root).getComponent("TextControl");
        let seatStateText=cc.find("SeatStateText", root).getComponent(cc.Label);
        let winLoseSkeleton=cc.find("WinLoseSkeleton", root).getComponent(sp.Skeleton);
        let tieSkeleton=cc.find("TieSkeleton", root).getComponent(sp.Skeleton);
        let seatSign=cc.find("SeatSign", root);
        let arrow=cc.find("SeatSign/Arrow", root).getComponent(cc.Sprite);

        let chooseBetType=0;
        let betPool=[];
        for (let i=0; i<=1; i ++) {
            betPool[i]={};
            betPool[i].button=cc.find("BetPoolButton" + i, root).getComponent(cc.Button);
            betPool[i].focusImage=cc.find("BetPoolButton" + i + "/FocusImage", root).getComponent(cc.Sprite);
            betPool[i].range=cc.find("BetPoolButton" + i + "/Range", root);
            betPool[i].totalText=cc.find("BetPoolButton" + i + "/TotalText", root).getComponent(cc.Label);
            betPool[i].pool=[];
            betPool[i].total=0;
        }
        for (let k in (betPool)) {
            let v=betPool[k * 1];
            v.button.betID=k * 1;
            v.button.node.on("click", function (hit) {
                gameLayer.Bet(hit.betID);
            });
        }

        let ClearPlayer=function () {
            playerInfo.active=false;
            for (let k in (betPool)) {
                let v=betPool[k * 1];
                v.button.node.active=false;
                v.button.interactable=false;
                v.focusImage.node.active=false;
                v.totalText.string="";
            }
            abandonImage.node.active=false;
            winMoneyText.node.active=false;
            loseMoneyText.node.active=false;
            winLoseSkeleton.node.active=false;
            tieSkeleton.node.active=false;
            seatSign.active=false;
            seatStateText.string=GameG.GetLocalizedString("等待入桌...");
            seatStateText.node.position=cc.v3(0, - 15, 0);
        };
        ClearPlayer();

        target.SetPlayer=function (playerData) {
            let state=playerData.State;
            if (state == 0) {
                ClearPlayer();
            } else {
                // let own                 = playerData.UserID == G.User.GetCurrentUserID(); 
                let own=playerData.UserID == GameG.getUserID();
                playerInfo.active=true;
                ownBackground.node.active=own;
                playerBackground.node.active= !own;
                idText.string="ID:" + playerData.UserID;
                moneyText.string=gameLayer.MoneyText(playerData.Money);
                for (let k in (betPool)) {
                    let v=betPool[k * 1];
                    v.button.node.active=true;
                }
                seatStateText.string=state == 2 ? GameG.GetLocalizedString("观看中") : "";
                seatStateText.node.position=cc.v3(0, - 70, 0);
            }
        };

        target.SetMoney=function (money) {
            moneyText.string=gameLayer.MoneyText(money);
        };

        target.HideAllSkeleton=function () {
            abandonImage.node.active=false;
            winLoseSkeleton.node.active=false;
            tieSkeleton.node.active=false;
        };

        target.ShowSeatSign=function () {
            seatSign.active=true;
            let xa=arrow.node.x;
            let xb=xa + 20;
            //----->已重新編譯
            let seq=gameLayer.GetSequence(arrow.node, "ShowSeatSign")
                             .by(0.4, { x : xb })
                             .by(0.4, { x : xa })
                             .call(function () {
                                 seatSign.active=false;
                                 gameLayer.clearTargetSequence(seq);
                             })
                             .start();
            //<-----已重新編譯
        };

        //輸贏金額
        target.ShowWinLoseMoney=function (money, OnComplete) {
            if (money == 0) {
                return;
            }
            let clone=cc.instantiate(money>0 ? winMoneyText.node : loseMoneyText.node);
            clone.active=true;
            clone.parent=root;
            clone.position=winMoneyText.node.position;
            clone.scale=cc.v3(1, 1, 1);
            let moneyString=gameLayer.MoneyText(money);
            clone.getComponent("TextControl").string=money>0 ? "+" + moneyString : moneyString;
            let destination=clone.position.y + 15;
            //----->已重新編譯
            gameLayer.GetSequence(clone, "ShowWinLoseMoney")
                     .to(winLoseMoneyDuration, { y : destination })
                     .call(function () {
                         clone.destroy();
                         if (OnComplete) OnComplete();
                     })
                     .start();
            //<-----已重新編譯
        };

        //輸贏動畫
        target.ShowWinLoseAnimation=function (animationName, Callback) {
            winLoseSkeleton.setAnimation(0, animationName, false);
            winLoseSkeleton.node.active=true;
            //----->已重新編譯     
            let seq=gameLayer.GetSequence(null, "ShowWinLoseAnimation").delay(0.67).call(function () {
                winLoseSkeleton.addAnimation(0, animationName + "_idle", true, 0);
                if (Callback) Callback();
                gameLayer.clearTargetSequence(seq);
            }).start();
            //<-----已重新編譯
        };

        //平手注動畫
        target.ShowTieAnimation=function () {
            tieSkeleton.setAnimation(0, "10x_win", false);
            tieSkeleton.addAnimation(0, "10x_win_idle", true, 0.67);
            tieSkeleton.node.active=true;
        };

        target.MoveTieSkeleton=function () {
            //----->已重新編譯     
            let seq=gameLayer.GetSequence(tieSkeleton.node, "MoveTieSkeleton")
                             .to(0.2, { x : 85 })
                             .call(function () {
                                 gameLayer.clearTargetSequence(seq);
                             })
                             .start();
            //<-----已重新編譯
        };

        //棄牌圖示
        target.SetAbandonImageActive=function (v) {
            abandonImage.node.active=v;
        };

        //GetCastBetRange(cc.Node)
        let GetCastBetRange=function (range) {
            let betPrefab=gameLayer.GetBetPrefab();
            let width=betPrefab.width * 0.5 * betPrefab.scaleX;
            let rangeX=gameLayer.RandomRange(range.width * - 0.5 + width, range.width * 0.5 - width);
            let height=betPrefab.height * 0.5 * betPrefab.scaleY;
            let rangeY=gameLayer.RandomRange(range.height * - 0.5 + height, range.height * 0.5 - height);
            return cc.v2(rangeX, rangeY);
        };

        let compare=function (a, b) {
            if (a.money>b.money) return 1;
            if (a.money<b.money) return - 1;
            return 0;
        };

        let SortBetPool=function (pool) {
            for (let i=1; i<pool.length; i ++) {
                for (let j=0; j<pool.length - 1; j ++) {
                    if (pool[j].money<pool[j + 1].money) {
                        let tmp=pool[j];
                        pool[j]=pool[j + 1];
                        pool[j + 1]=tmp;
                    }
                }
            }
        };

        let CreateBet=function (money, betType, startPosition) {
            let clone=cc.instantiate(gameLayer.GetBetPrefab());
            clone.active=true;
            clone.parent=(betType.range);
            if (startPosition) {
                clone.position=betType.range.convertToNodeSpaceAR(startPosition);
            } else {
                clone.position=cc.v2(0, 0);
            }

            let index=betType.pool.length;
            betType.pool[index]=[];
            betType.pool[index].root=clone;
            betType.pool[index].img=clone.getComponent(cc.Sprite);
            betType.pool[index].txt=cc.find("Text", clone).getComponent(cc.Label);
            betType.pool[index].money=money;
            betType.pool[index].txt.string=gameLayer.MoneyText(money);
            GameG.SetImageSprite(betType.pool[index].img, G.GetGamePName(), gameLayer.GetBetSpriteName(money));
            return betType.pool[index];
        };

        let CompareBetPool=function (betType) {
            let mix=gameLayer.DismantlingBet(betType.total);
            SortBetPool(betType.pool);
            if (betType.pool.length != mix.length) {
                for (let i=0; i<mix.length; i ++) {
                    if (betType.pool[i] != null && mix[i] != betType.pool[i].money) {
                        for (let j=betType.pool.length - 1; j>=i; j --) {
                            gameLayer.destoryNode(betType.pool[j].root);
                            gameLayer.tableRemove(betType.pool, j);
                        }
                    }
                    if (mix[i] != null && betType.pool[i] == null && betType.pool.length<maxBetCount) {
                        let bet=CreateBet(mix[i], betType);
                        bet.root.position=GetCastBetRange(betType.range);
                    }
                }
            }
        };

        let AddBetTotal=function (money, betType) {
            betType.total=betType.total + money;
            if (betType.total>0) {
                let betMax=betType == 0 && gameLayer.GetBaseBetMax() || gameLayer.GetTieBetMax();
                betMax=gameLayer.MoneyText(betMax);
                betType.totalText.string=gameLayer.MoneyText(betType.total) + "/" + betMax;
            } else {
                betType.totalText.string="";
            }
        };

        target.Bet=function (money, type, startPosition, iDuration) {
            let duration=iDuration || betMoveDuration;
            let betType=betPool[type];
            AddBetTotal(money, betType);
            GameG.PlayGameSound("chip");
            let betArray=gameLayer.DismantlingBet(money);
            for (let k in betArray) {
                let v=betArray[k];

                if (k>maxBetCount) {
                    break;
                }
                let bet=CreateBet(v, betType, startPosition);

                let destination=GetCastBetRange(betType.range);
                //----->已重新編譯       
                let seq=gameLayer.GetSequence(bet.root, "Bet");
                seq.to(duration, { position : destination })
                   .call(function () {
                       CompareBetPool(betType);
                       gameLayer.clearTargetSequence(seq);
                   })
                   .start();
                //<-----已重新編譯
            }
        };

        target.DoubleBet=function () {
            target.Bet(betPool[0].total, 0);
        };

        let ClearBetPool=function (betType) {
            for (let k in (betType.pool)) {
                let v=betType.pool[k];
                gameLayer.destoryNode(v.root);
            }
            betType.pool=[];
            betType.total=0;
            betType.totalText.string="";
        };

        //棄牌-戰爭不發
        target.Abandon=function (dealerPosition) {
            GameG.PlayGameSound("giveup");
            target.SetAbandonImageActive(true);
            target.ShowWinLoseMoney(betPool[0].total / 2);
            let pool=betPool[0].pool;

            if (pool.length == 1) {
                let tmpBet=cc.instantiate(pool[0].root);
                tmpBet.position=pool[0].root.position;
                tmpBet.parent=(pool[0].root.parent);
                let targetPos=tmpBet.parent.convertToNodeSpaceAR(dealerPosition);
                gameLayer.GetSequence(tmpBet, "戰爭不發 pool.length == 1").to(betMoveDuration, { position : targetPos }).call(function () {
                    tmpBet.destroy();
                }).start();
            }
            let betHalfCount=Math.ceil(pool.length / 2);
            for (let i=0; i<betHalfCount; i ++) {
                let targetPos=pool[i].root.parent.convertToNodeSpaceAR(target.GetPosition());
                gameLayer.GetSequence(pool[i].root, "戰爭不發 betHalfCount " + i).to(betMoveDuration, { position : targetPos }).start();
            }

            for (let i=betHalfCount; i<pool.length; i ++) {
                let targetPos=pool[i].root.parent.convertToNodeSpaceAR(dealerPosition);
                gameLayer.GetSequence(pool[i].root, "戰爭不發 betHalfCount " + i).to(betMoveDuration, { position : targetPos }).start();
            }

            gameLayer.Delay(betMoveDuration, function () {
                ClearBetPool(betPool[0]);
            });
        };

        target.MoveBetPool=function (type, idestination) {
            GameG.PlayGameSound("chip");
            let betType=betPool[type];
            for (let k in (betType.pool)) {
                let v=betType.pool[k * 1];

                let destination=v.root.parent.convertToNodeSpaceAR(idestination);
                gameLayer.GetSequence(v.root, "MoveBetPool").to(betMoveDuration, { position : destination }).start();
            }
            gameLayer.Delay(betMoveDuration, function () {
                ClearBetPool(betType);
            });
        };

        target.GetChooseBetType=function () {
            return chooseBetType;
        };

        target.SetBetPoolActive=function (value) {
            for (let k in (betPool)) {
                let v=betPool[k * 1];

                v.button.interactable=value;
                // v.focusImage.node.active = value;
            }
        };

        target.Reset=function () {
            for (let k in (betPool)) {
                let v=betPool[k];
                ClearBetPool(v);
            }
            target.HideAllSkeleton();
            //----->已重新編譯
            let seq=gameLayer.GetSequence(tieSkeleton.node, "UIPlayer Reset");
            seq.to(0.1, { x : 40 })
               .call(function () {
                   gameLayer.clearTargetSequence(seq);
               })
               .start();
            //<-----已重新編譯
        };

        return target;

    }


};

module.exports=UIPlayer;
