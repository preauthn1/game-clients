var G               = require("Global");
var Tool            = require("Tool");
var GameLayer       = require("GameLayer");
var GameG           = require("GameGlobal");
var maxBetCount     = [20, 20, 20, 20];
var betMoveDuration = 0.2;
var betSpace        = 3;
var utils           = require("../Base/utils");

function UserBet(root, user){
    
    user.betTotalText = cc.find("BetTotalText", root).getComponent(cc.Label);
    //1:底注 , 2:邊注
    user.betPool      = [null];
    for(let i = 1; i <= 2; i++){
        let betRoot                = cc.find("BetPool" + i, root);
        user.betPool[i]            = [];
        user.betPool[i].root       = betRoot;
        user.betPool[i].range      = cc.find("Range", betRoot);
        user.betPool[i].totalText  = cc.find("TotalText", betRoot).getComponent(cc.Label);
        user.betPool[i].lightImage = cc.find("LightImage", betRoot).getComponent(cc.Sprite);
        user.betPool[i].pool       = [];
        user.betPool[i].total      = 0;
        user.betPool[i].flashing   = false;
        
        user.betPool[i].totalText.string        = "";
        user.betPool[i].lightImage.node.color   = Tool.Color(255, 255, 255);
        user.betPool[i].lightImage.node.opacity = 0;
        user.betPool[i].root.getComponent(cc.Button).node.on("click", function(){
            if(user.own){
                GameLayer.FGSB_Bet(i);
            }
        });
    }
    
    //3:贏得特殊牌型 , 4:贏得邊注
    for(let i = 3; i <= 4; i++){
        let betRoot                      = cc.find("BetPool" + i, root);
        user.betPool[i]                  = [];
        user.betPool[i].root             = betRoot;
        user.betPool[i].range            = cc.find("Range", betRoot);
        user.betPool[i].totalText        = cc.find("TotalText", betRoot).getComponent(cc.Label);
        user.betPool[i].pool             = [];
        user.betPool[i].total            = 0;
        user.betPool[i].totalText.string = "";
    }
    
    user.betTotalText.string = "";
    
    //清除
    let ClearBetPool = function(betType){
        for(let k in (betType.pool)){
            let v = betType.pool[k];
            Tool.DiscardBet(v);
        }
        betType.pool             = [];
        betType.total            = 0;
        betType.totalText.string = "";
    };
    
    user.ClearUserBet = function(){
        user.ClearSeat();
        for(let i = 1; i <= 4; i++){
            ClearBetPool(user.betPool[i]);
        }
        user.betTotalText.string = "";
    };
    
    //下注範圍
    // local function GetCastBetRange(range)
    // 	local betPrefab = Tool.GetBetPrefab ()
    // 	local width = betPrefab.sizeDelta.x * 0.5 * betPrefab.localScale.x	
    // 	local rangeX = CS.UnityEngine.Random.Range(range.sizeDelta.x * -0.5 + width,range.sizeDelta.x * 0.5 - width)
    // 	local height = betPrefab.sizeDelta.y * 0.5 * betPrefab.localScale.y
    // 	local rangeY = CS.UnityEngine.Random.Range(range.sizeDelta.y * -0.5 + height,range.sizeDelta.y * 0.5 - height)
    // 	return CS.UnityEngine.Vector2(rangeX,rangeY)
    // end
    
    // 下注位置索引
    let GetBetPosIndex = function(money, betType){
        let index = 0;
        for(let k in (betType.pool)){
            let v = betType.pool[k * 1];
            if(money <= v.money){
                index = k * 1 + 1;
            }else{
                break;
            }
        }
        return index;
    };
    
    //籌碼往後推
    let BetPushBack = function(startIndex, betType){
        startIndex = parseInt(startIndex);
        for(let i = startIndex; i < betType.pool.length; i++){
            betType.pool[i].root.setSiblingIndex(-1);  //betType.pool[i].root:SetAsLastSibling() 
            betType.pool[i].root.x = 0;
            betType.pool[i].root.y = i * betSpace;
        }
    };
    
    //取得籌碼
    let GetBet = function(money, istartPosition, toBetType, itablePos){
        let bet           = Tool.GetBet(money);
        let startPosition = istartPosition;
        let tablePos      = itablePos || toBetType.pool.length + 1;
        
        Tool.tableInsert(toBetType.pool, tablePos, bet);
        
        //bet.root.position = toBetType.range.convertToNodeSpaceAR(startPosition);//從世界座標  
        
        if(startPosition){
            bet.root.setParent(startPosition);
            bet.root.position = cc.v2(0, 0);
        }
        utils.node.setParent(toBetType.range, bet.root);
        
        bet.root.scale = Tool.GetBetPrefab().scale;
        bet.root.setSiblingIndex(-1);  //bet.root:SetAsLastSibling();     
        if(bet.root.tween) bet.root.tween.stop();
        return bet;
    };
    
    //排序下注池
    // let SortBetPool=function (pool) {
    //     for (let i=0; i<pool.length; i ++) {
    //         for (let j=0; j<pool.length; j ++) {
    //             if (pool[j] != null && pool[j + 1] != null && pool[j].money<pool[j + 1].money) {
    //                 let tmp=pool[j];
    //                 pool[j]=pool[j + 1];
    //                 pool[j + 1]=tmp
    //             }
    //         }
    //     }
    // };
    
    //合成籌碼
    let SynthesisBet = function(betType){
        let betArray     = Tool.SplitBet(betType.total);
        let destoryIndex = [];
        
        for(let k in betType.pool){
            let v = betType.pool[k * 1];
            
            let destory = true;
            // for (let j=0; j<betArray.length; j ++) {
            for(let j = betArray.length - 1; j >= 0; j--){
                if(v.money == betArray[j]){
                    destory = false;
                    Tool.tableRemove(betArray, j);
                    break;
                }
            }
            if(destory){
                destoryIndex[destoryIndex.length] = v;
            }
        }
        
        for(let k in destoryIndex){
            let v = destoryIndex[k * 1];
            for(let i = betType.pool.length - 1; i >= 0; i--){
                if(betType.pool[i] == v){
                    Tool.DiscardBet(betType.pool[i]);  //這枚籌碼直接會被關閉留待之後使用
                    Tool.tableRemove(betType.pool, i);  //從投注池中移除
                }
            }
        }
        
        
        for(let k in betArray){
            let v           = betArray[k * 1];
            let betPosIndex = GetBetPosIndex(v, betType);
            let bet         = GetBet(v, null, betType, betPosIndex);
            bet.root.x      = 0;
            bet.root.y      = betPosIndex * betSpace;
            bet.root.angle  = 0;
            //BetPushBack(betPosIndex + 1, betType);
        }
        BetPushBack(0, betType);
    };
    
    //顯示金額
    let AddBetTotal = function(money, betType){
        betType.total            = betType.total + money;
        betType.totalText.string = betType.total > 0 && Tool.ToCash(betType.total) || "";
    };
    
    //獲取下注金額
    user.GetBetTotal = function(){
        return [null, user.betPool[1].total, user.betPool[2].total];
    };
    
    //下注 1:底注 , 2:邊注 , 3:贏得特殊牌型 , 4:贏得邊注
    user.Bet = function(type, money, startPosition, synthesis){
        if(money <= 0){
            return;
        }
        let effects  = startPosition != null;
        let duration = effects && betMoveDuration || 0;
        let betArray = Tool.SplitBet(money);
        let betType  = user.betPool[type];
        
        for(let k in (betArray)){
            let v = betArray[k] * 1;
            
            if(k * 1 > maxBetCount[type]){
                break;
            }
            let betPosIndex = synthesis && GetBetPosIndex(v, betType) || betType.pool.length;
            let bet         = GetBet(v, startPosition, betType, betPosIndex);
            if(synthesis){
                BetPushBack(betPosIndex + 1, betType);
            }
            let destination = Tool.Vector2(0, betPosIndex * betSpace);
            // bet.root.DOLocalRotate(Tool.Vector3(0, 0, 0), duration);
            // bet.root.DOAnchorPos(destination, duration);
            
            bet.root.tween = cc.tween(bet.root)
                               .to(duration, { angle : 0, position : destination })
                               .start();
        }
        
        if(effects){
            GameG.PlayGameSound("chip");
        }
        
        Tool.Delay(betMoveDuration + 0.1, function(){
            if(betType.pool.length < maxBetCount[type] && synthesis){
                SynthesisBet(betType);
            }
        });
        
        AddBetTotal(money, betType);
        
        let total = 0;
        for(let i = 1; i <= 2; i++){
            total = total + user.betPool[i].total;
        }
        
        // user.betTotalText.string = Tool.MoneyText(total);  
        user.betTotalText.string = Tool.ToCash(total);
    };
    
    //移動籌碼
    user.MoveBetPool = function(type, destination){
        let betType = user.betPool[type];
        if(betType.pool.length <= 0){
            return;
        }
        GameG.PlayGameSound("chip_banker");
        for(let k in (betType.pool)){
            let v = betType.pool[k * 1];
            
            // v.root.oldParent = v.root.parent;
            
            nodePath(v);
            utils.node.setParent(destination._parent, v.root);
            
            v.root.tween = cc.tween(v.root)
                             .to(betMoveDuration, { position : destination.position })
                             .call(function(){
                                 utils.node.setParent(v.root.oldParent, v.root);
                                 v.root.oldParent = undefined;
                             })
                             .start();
        }
        Tool.Delay(betMoveDuration, function(){
            ClearBetPool(betType);
        });
    };
    
    // 閃爍
    user.Flicker = function(type){
        let betType = user.betPool[type];
        if(betType.flashing){
            return;
        }
        betType.flashing                = true;
        betType.lightImage.node.color   = Tool.Color(255, 255, 255);
        betType.lightImage.node.opacity = 255;
        cc.tween(betType.lightImage.node)
          .to(0.5, { opacity : 255 })
          .to(0.5, { opacity : 0 })
          .repeat(10)
          .call(function(){
              betType.flashing = false;
          })
          .start();
    };
    if(user != null && user != undefined) Object.assign(user, this);
};module.exports = UserBet;
