var G                 = require("Global");
var GameG             = require("GameGlobal");
var rubbishDump       = null;
var cardPrefab        = null;
var recoverCard       = null;
var betPrefab         = null;
var blackMask         = null;
var rubbishBets       = {};
var rubbishCards      = {};
var sequenceArray     = [];
var chipData          = [];
var rubbishCardsArray = [];

var Tool = {
    extends : cc.Component,
    
    Init(){
        sequenceArray      = [];
        rubbishBets        = {};
        rubbishCards       = {};
        chipData           = [];
        rubbishDump        = cc.find("Canvas/RubbishDump");
        cardPrefab         = cc.find("CardPrefab", rubbishDump);
        recoverCard        = cc.find("RecoverCard", rubbishDump);
        rubbishBets.root   = cc.find("RubbishBets", rubbishDump);
        rubbishBets.pool   = [];
        rubbishCards.root  = cc.find("RubbishCards", rubbishDump);
        betPrefab          = cc.find("BetPrefab", rubbishDump);
        cardPrefab.active  = (false);
        recoverCard.active = (false);
        betPrefab.active   = (false);
        rubbishCardsArray  = [];
    },
    
    ////牌
    //重設
    ResetCard(card){
        card.parent   = cardPrefab.parent;
        card.scale    = cardPrefab.scale;
        card.angle    = cardPrefab.angle;
        card.position = cardPrefab.position;
        card.active   = (false);
    },
    
    //取得牌
    GetCard(){
        let card = null;
        if(rubbishCardsArray.length > 0){
            card = rubbishCardsArray[0];
            this.tableRemove(rubbishCardsArray, 0);
        }else{
            let clone    = cc.instantiate(cardPrefab);
            clone.parent = cardPrefab.parent;
            this.ResetCard(clone);
            card = clone.getComponent(cc.Sprite);
            //回傳圖片元件
        }
        return card
    },
    
    //丟棄牌
    DiscardCard(card){
        card.node.parent = (rubbishCards.root);
        this.ResetCard(card.node);
        this.tableInsert(rubbishCardsArray, card);
    },
    
    GetRecoverCard(){
        return recoverCard;
    },
    
    ////籌碼
    GetBetSpriteName(money){
        for(let k in (chipData)){
            let v = chipData[k];
            
            if(money == v.money){
                return v.spriteName;
            }
        }
        return chipData[0].spriteName;
    },
    
    SetChipData(data){
        for(let i = 0; i < data.length; i++){
            chipData[i]            = [];
            chipData[i].spriteName = "chip_" + (i + 1).toString() + "_t";
            chipData[i].money      = data[i];
        }
    },
    
    GetChipData(){
        return chipData;
    },
    
    //丟棄籌碼
    DiscardBet(bet){
        bet.root.active   = false;
        bet.root.parent   = rubbishBets.root;
        bet.root.position = this.Vector3(0, 0, 0);
        this.tableInsert(rubbishBets.pool, bet);
    },
    
    //創建籌碼
    CreateBet(){
        let bet       = cc.instantiate(betPrefab);
        let betTable  = {};
        betTable.root = bet;
        betTable.img  = bet.getComponent(cc.Sprite);
        betTable.txt  = cc.find("Text", bet).getComponent(cc.Label);
        //betType.pool
        return betTable;
    },
    
    //設置籌碼
    SetBet(bet, money){
        bet.money       = money;
        bet.txt.string  = Tool.ToCash(money);
        bet.root.active = true;
        this.SetSprite(bet.img, this.GetBetSpriteName(money));
    },
    
    //取得籌碼
    GetBet(money){
        let bet = null;
        if(rubbishBets.pool.length > 0){
            bet = rubbishBets.pool[0];
            this.tableRemove(rubbishBets.pool, 0);
        }else{
            bet = this.CreateBet();
        }
        
        this.SetBet(bet, money);
        return bet;
    },
    
    GetBetPrefab(){
        return betPrefab;
    },
    
    //拆籌碼
    SplitBet(money){
        if(money <= 0){
            return [];
        }
        let betArray = [];
        let i        = chipData.length - 1;
        while(i >= 0){
            if(money >= chipData[i].money){
                money = money - chipData[i].money;
                betArray.push(chipData[i].money);
            }else{
                i--;
            }
        }
        if(betArray.length <= 0){
            this.tableInsert(betArray, chipData[0].money);
        }
        return betArray;
    },
    
    //給錢
    ShootMoney(money, startPosition, endPosition){
        let self     = this;
        let betMoney = math.abs(money);
        GameG.PlayGameSound("chip");
        if(betMoney < 100){
            betMoney = 100
        }
        let betArray = this.SplitBet(betMoney);
        let tmpPool  = [pool = []];
        //local range = 200
        let space    = 3;
        for(let k in (betArray)){
            let v = betArray[k];
            
            if(k > 30){
                break
            }
            let x             = startPosition.x;
            let y             = startPosition.y + (space * k);
            let startPosition = Vector3(x, y, 0);
            let bet           = this.GetBet(v);
            bet.root.position = startPosition;
            bet.root.parent   = (rubbishBets.root);
            bet.root.tween    = cc.tween(bet.root)
                                  .do(0, { position : endPosition })
                                  .call(function(){
                                      self.DiscardBet(bet);
                                  })
                                  .start();
            
        }
    },
    
    PlayAnimation(skeleton, name, time, Callback){
        if(!skeleton) return;
        skeleton.node.active = (true);
        skeleton.setAnimation(0, name, false);
        
        this.Delay(time + 0.3, function(){
            skeleton.node.active = false;
            skeleton.clearTracks();
            if(Callback != null){
                Callback();
            }
        })
    },
    
    IsSelf(id){
        // return id == G.User.GetCurrentUserID();
        return id == GameG.getUserID();
    },
    
    Random(min, max){
        let de = max - min;
        return Math.floor(min + Math.random() * de);
    },
    
    Delay(time, Func){
        if(!this.TimeoutArr) this.TimeoutArr = [];
        let timeOut = setTimeout(Func, time * 1000);
        this.TimeoutArr.push(timeOut);
    },
    
    Err(message){
        cc.error(message);
    },
    
    Vector2(x, y){
        return cc.v2(x, y)
    },
    
    Vector3(x, y, z){
        return cc.v3(x, y, z)
    },
    
    Color(r, g, b, a){
        if(a != undefined && a != null){
            cc.error("alpha should set by opacity");
        }
        return cc.color(r, g, b);
    },
    
    
    SetSprite(image, spriteName){
        GameG.SetImageSprite(image, G.GetGamePName(), spriteName)
        image._applySpriteSize();
    },
    
    /**
     * @return {number}
     */
    MoneyText(money){
        let moneyText = money / 100;
        if(moneyText % 1 == 0){
            moneyText = Math.ceil(moneyText);
        }
        return moneyText;
    },
    
    ToCash(money){
        let moneyText = money / 100;
        if(moneyText % 1 == 0){
            moneyText = Math.ceil(moneyText);
        }
        return moneyText;
    },
    
    
    Split(str, delimiter){
        if(str == null || str == '' || delimiter == null){
            return null;
        }
        
        let result = [];
        for(match in (str + delimiter).gmatch("(.-)" + delimiter)){
            this.tableInsert(result, match);
        }
    },
    
    OnDestroy(){
        RemoveAllSequence();
        this.clearTimeOutEx();
    },
    
    SetNativeSize(sprite){
        sprite._applySpriteSize();
    }, tableInsert(arr, a, b){
        if(b != null && b != undefined){
            arr.splice(a - 1, 0, b);
        }else{
            arr.push(a);
        }
    }, tableRemove(arr, a){
        arr.splice(a, 1);
    }, tableRemoveObj(arr, a){
        let i = arr.indexOf(a);
        if(i >= 0){
            arr.splice(i, 1);
        }
    },
    
    //統一管理tween
    GetSequence(node){
        // let tweenObj = node ? node : { data : "null_" + sequenceArray.length };
        let tweenObj;
        
        if(!node){
            tweenObj = { data : "null_" + sequenceArray.length };
        }else if(node.node){
            tweenObj = node.node;
        }else{
            tweenObj = node;
        }
        
        // && node.node) || node || { data : "null_" + sequenceArray.length };
        let seq = cc.tween(tweenObj);
        sequenceArray.push(seq);
        return seq;
    },
    
    //停止所有tween
    RemoveAllSequence(){
        while(sequenceArray.length){
            let v = sequenceArray.shift();
            v.stop();
        }
        sequenceArray = [];
    },
    
    clearTimeOutEx(){
        if(this.TimeoutArr){
            let i, l = this.TimeoutArr.length;
            for(i = 0; i < l; i++){
                clearTimeout(this.TimeoutArr[i]);
            }
        }
    },
    
};

module.exports = Tool;
