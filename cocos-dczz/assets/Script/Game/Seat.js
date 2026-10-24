var G=require("../Base/Global");
// 接收消息table
var pojectName=G.GetGamePName();
var gameLayer=require("GameLayer");
var GameG=require("GameGlobal");
var cardSpace=25;
var cardMoveDuration=0.2;
var cardRotateDuration=0.3;
var cardBackColor=4;
var cardBackNumber=17;

var Seat={
    extends : cc.Component,

    Create(root) {
        let target=[];
        let cards=[];
        let cardPrefab=cc.find("Canvas/GameLayer/CardPrefab");
        let recoverCardPrefab=cc.find("Canvas/GameLayer/RecoverCardPosition");
        let cardRoot=cc.find("CardRoot", root);

        //轉牌
        let TurnCard=function (card, cardInfo) {
            return gameLayer.GetSequence(card, "轉牌")
                            .to(cardRotateDuration / 2, { scaleX : 0, scaleY : 1 })
                            .call(function () {
                                GameG.PlayGameSound("card");
                                let spriteName="card_" + cardInfo.Color + "_" + cardInfo.CardNumber;
                                GameG.SetImageSprite(card, G.GetGamePName(), spriteName, false);
                            })
                            .to(cardRotateDuration / 2, { scaleX : 1, scaleY : 1 });
        };

        let CloneCard=function () {
            let clone=cc.instantiate(cardPrefab);
            clone.active=true;
            clone.parent=cardPrefab;
            clone.position=cc.v2(0, 0);
            clone.scaleX=clone.scaleY=1;
            gameLayer.setParent(cardRoot, clone);
            let cardImage=clone.getComponent(cc.Sprite);
            gameLayer.tableInsert(cards, cardImage);
            return cardImage;
        };

        let DestroyCard=function () {
            for (let i=0; i<cards.length; i ++) {
                for (let k in (cards)) {
                    let v=cards[k * 1];
                    gameLayer.destoryNode(v);
                }
                cards=[];
                let seq=gameLayer.GetSequence(cardRoot, "DestroyCard");
                seq.to(0.1, { x : 0 })
                   .call(function () {
                       gameLayer.clearTargetSequence(seq);
                   })
                   .start();
            }
        };

        //發單張牌
        // target.Deal = function(cardInfo, sequence, i_duration){
        target.Deal=function (cardInfo, i_duration) {
            let duration=i_duration !== undefined ? i_duration : cardMoveDuration;
            let card=CloneCard();
            let x=(cards.length - 1) * cardSpace;
            let destination=cc.v2(x, 0);

            card.node.opacity=50;
            GameG.PlayGameSound("card");
            if (cardInfo) {
                let spriteName="card_" + cardInfo.Color + "_" + cardInfo.CardNumber;
                card.node.name=spriteName;
                GameG.SetImageSprite(card, G.GetGamePName(), spriteName, false);
            } else {
                cc.error("there's no cardInfo", cardInfo);
            }
            gameLayer.GetSequence(card.node, "發單張牌")
                     .to(duration, { x : x, y : 0, angle : 0, scale : 1, opacity : 255 })
                     .start();
        };

        //開牌
        target.ShowCards=function (startIndex, endIndex, userCards) {
            for (let i=startIndex; i<=endIndex; ++ i) {
                TurnCard(cards[i], userCards[i]).start();
            }
        };

        //回收牌
        target.RecoverCard=function (destination) {
            let cardBack={ Color : cardBackColor, CardNumber : cardBackNumber };
            for (let k in (cards)) {
                let v=cards[k * 1];
                gameLayer.setParent(recoverCardPrefab, v.node);
                //----->已重新編譯
                let seq2=gameLayer.GetSequence(v.node, "回收牌")
                                  .to(cardRotateDuration, { x : 0.0, y : 0.0, angle : 0.0, scale : 1.0 })
                                  .call(function () {
                                      DestroyCard();
                                  });
                TurnCard(v, cardBack)//蓋卡完畢後接著上面這邊的移動回收牌區
                    .then(seq2)
                    .start();
                //<-----已重新編譯
            }
        };

        target.MoveCardRoot=function () {
            //----->已重新編譯
            gameLayer.GetSequence(cardRoot, "MoveCardRoot")
                     .to(0.2, { x : - 50 })
                     .start();
            //<-----已重新編譯
        };

        target.GetPosition=function () {
            return root.convertToWorldSpaceAR(cc.v2(0, 0));   //AZLDC : fix to world pos
        };

        return target;
    }


};

module.exports=Seat;
