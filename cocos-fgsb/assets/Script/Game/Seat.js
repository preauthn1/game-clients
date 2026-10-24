var G                  = require("Global");
var GameG              = require("GameGlobal");
var Tool               = require("Tool");
var cardSpace          = 35;
var cardMoveDuration   = 0.2;
var cardRotateDuration = 0.3;
var cardBackColor      = 7;
var cardBackNumber     = 0;
var patternName        = [null, null, null, "flush_", "straight_", "3_same_", "s_flush_", "royal_flush_"];
var utils              = require("../Base/utils");

function Seat(root, user){
    user.root                        = root;
    user.position                    = root.position;
    user.cards                       = [];
    user.cardRoot                    = cc.find("CardRoot", root);
    user.patternImage                = cc.find("PatternImage", root).getComponent(cc.Sprite);
    user.patternSkeleton             = cc.find("PatternSkeleton", root).getComponent(sp.Skeleton);
    user.patternImage.node.active    = false;
    user.patternSkeleton.node.active = false;
    user.ClearSeat                   = function(){
        user.HidePattern();
        while(user.cards.length > 0){
            let v = user.cards[0];
            Tool.DiscardCard(v);
            Tool.tableRemoveObj(user.cards, v);
        }
    };
    
    //發單張牌
    user.Deal = function(index, cardInfo, effects){
        let duration    = effects && cardMoveDuration || 0;
        let card        = Tool.GetCard();
        let x           = index * cardSpace;
        let destination = Tool.Vector3(x, 0);
        let spriteName  = "card_" + cardInfo.Color + "_" + cardInfo.CardNumber;
        
        Tool.tableInsert(user.cards, card);
        
        Tool.SetSprite(card, spriteName);
        utils.node.setParent(user.cardRoot, card.node);
        
        card.node.name = "card_" + cardInfo.Color + "_" + cardInfo.CardNumber;
        
        cc.tween(card.node)
          .delay(0.1)
          .call(function(){
              GameG.PlayGameSound("card");
              card.node.active = true;
          })
          .to(duration, { position : destination, angle : 0, scale : 1 })
          .start();
        return duration;
    };
    
    //轉牌
    let TurnCard = function(cardObject, iCardInfo){
        let cardInfo = iCardInfo || { Color : cardBackColor, CardNumber : cardBackNumber };//iCardInfo = 牌資訊 或 不開牌
        Tool.GetSequence(cardObject.node)
            .to(cardRotateDuration / 2, { scaleX : 0 })
            .call(function(){
                GameG.PlayGameSound("card");
                let spriteName = "card_" + cardInfo.Color + "_" + cardInfo.CardNumber;
                Tool.SetSprite(cardObject, spriteName);
                cardObject.node.name = "card_" + cardInfo.Color + "_" + cardInfo.CardNumber;
            })
            .to(cardRotateDuration / 2, { scaleX : 1 })
            .start();
    };
    
    //開牌
    user.ShowCards = function(startIndex, endIndex, userCards, Callback){
        for(let i = startIndex; i <= endIndex; i++){
            TurnCard(user.cards[i], userCards[i]);
        }
        if(Callback != null){
            Tool.Delay(cardRotateDuration, function(){
                Callback();
            });
        }
    };
    
    //回收牌
    user.RecoverCard = function(){
        let recoverCard = Tool.GetRecoverCard();
        user.HidePattern();
        let pTemp = [];
        for(let k in user.cards){
            let v = user.cards[k];
            // v.node.oldParent=v.node.parent;
            // v.node.parent=recoverCard;
            
            TurnCard(v, null);
            Tool.Delay(cardRotateDuration, function(){
                //Tool.TransPos(v.node,recoverCard)
                v.node.oldParent = v.node.parent;
                utils.node.setParent(recoverCard.parent, v.node);
                cc.tween(v.node)
                    //.to(cardMoveDuration, { angle : recoverCard.angle, scale : recoverCard.scale, position : Tool.Vector2(0, 0) })
                  .to(cardMoveDuration, { angle : recoverCard.angle, scale : recoverCard.scale, position : recoverCard.position })
                  .call(function(){
                      v.node.parent    = v.node.oldParent;
                      v.node.oldParent = undefined;
                      v.node.active    = false;
                  }).start();
            });
        }
    };
    
    //牌型                                                                                                            
    user.ShowPattern = function(pattern, effects){
        if(pattern >= 3){
            let name                         = patternName[pattern] + (effects && "start" || "stop");
            user.patternSkeleton.node.active = true;
            user.patternImage.node.active    = false;
            user.patternSkeleton.setAnimation(0, name, false);
        }else{
            user.patternImage.node.active    = true;
            user.patternSkeleton.node.active = false;
            Tool.SetSprite(user.patternImage, "pattern_" + pattern);
            // user.patternImage.spriteFrame.originalSize           
            // var size=user.patternImage.spriteFrame.originalSize;
            // user.patternImage.node.width=size.width;
            // user.patternImage.node.height=size.height;
            Tool.SetNativeSize(user.patternImage);
        }
    };
    
    //隱藏牌型
    user.HidePattern = function(){
        user.patternImage.node.active    = false;
        user.patternSkeleton.node.active = false;
        if(user.specialImage != null){
            user.specialImage.node.active = false;
        }
    };
    if(user != null && user != undefined) Object.assign(user, this);
};module.exports = Seat;
