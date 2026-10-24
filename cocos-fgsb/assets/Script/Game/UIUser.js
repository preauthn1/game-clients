var G          = require("Global");
var GameG      = require("GameGlobal");
var Tool       = require("Tool");
var GameLayer  = require("GameLayer");
var UserBet    = null;
var Seat       = null;
var focusImage = null;
var User       = [];

function UIUser(root, iSeat){
    var self = this;
    Seat     = new require("Seat")(root, self);
    UserBet  = new require("UserBet")(root, self);
    
    var idColor              = Tool.Color(255, 231, 67);
    var ownIdColor           = Tool.Color(255, 255, 255);
    var cardGroupSpace       = [0, 100, 80, 70];
    var cardGroupScale       = [1, 1, 0.8, 0.65];
    var winLoseMoneyDuration = 1.0;
    var splitDuration        = 0.1;
    
    this.root      = root;
    this.own       = false;  		//自己
    this.userState = 0;  	    //玩家狀態，0:空位，1:正常，2:觀戰
    this.sex       = 0;
    this.id        = 0;
    this.money     = 0;
    this.seat      = iSeat;
    
    this.userInfo      = cc.find("UserInfo", root);
    this.idBackground  = cc.find("UserInfo/IDBackground", root);
    this.ownBackground = cc.find("UserInfo/OwnBackground", root);
    this.idText        = cc.find("UserInfo/IDText", root).getComponent(cc.Label);
    this.profileBG     = cc.find("UserInfo/ProfileBg", root).getComponent(cc.Sprite);
    
    // this.profileImage=cc.find("UserInfo/ProfileImage", root).getComponent(cc.Sprite);
    this.profileImage = cc.find("UserInfo/ProfileMask/ProfileImage", root).getComponent(cc.Sprite);
    
    this.actionSignImage = cc.find("ActionSignImage", root).getComponent(cc.Sprite);
    this.specialImage    = cc.find("SpecialImage", root).getComponent(cc.Sprite);
    this.sitDownButton   = cc.find("SitDownButton", root).getComponent(cc.Button);
    this.winMoneyText    = cc.find("WinMoneyText", root).getComponent("TextControl");
    this.loseMoneyText   = cc.find("LoseMoneyText", root).getComponent("TextControl");
    
    this.TotalBG       = cc.find("TotalBG", root);
    this.seatStateText = cc.find("SeatStateText", root).getComponent(cc.Label);
    
    this.seatStateText.node.on(cc.Node.EventType.SIZE_CHANGED, function(){
        let size           = self.seatStateText.node.width + 20;
        size               = size < 110 ? 110 : size;
        self.TotalBG.width = size;
    });
    
    this.seatStateText.node.on("active-in-hierarchy-changed", function(node){
        let size           = self.seatStateText.node.width + 20;
        size               = self.seatStateText.node.active ? size : 110;
        self.TotalBG.width = size;
    });
    
    this.sitDownButton.node.on("click", function(hit){
        let UIBottom = require("UIBottom");
        let min      = Tool.GetChipData()[0].money * 2;
        if(UIBottom.money > min){
            GameLayer.FGSB_SelectSeat(self.seat);
        }else{
            let msg = "您的金额不足####，请前往储值";
            min     = Tool.MoneyText(min);
            UIMain.ShowMessage(GameG.GetLocalizedString(msg).replace("####", min), 2);
        }
    });
    
    this.ClearUser = function(){
        this.ClearUserBet();
    };
    
    this.ClearUserInfo = function(){
        this.ClearUser();
        this.id                          = 0;
        this.money                       = 0;
        this.own                         = false;
        this.userInfo.active             = false;
        this.actionSignImage.node.active = false;
        this.specialImage.node.active    = false;
        this.winMoneyText.node.active    = false;
        this.loseMoneyText.node.active   = false;
        this.sitDownButton.node.active   = false;
        this.seatStateText.string        = GameG.GetLocalizedString("等待入桌");
        let size                         = this.seatStateText.node.width + 20;
        this.TotalBG.width               = size < 110 ? 110 : size;
        
        this.betTotalText.string = "";
    };
    
    this.SetUserInfo = function(userData){
        this.userState = userData.State;
        this.own       = Tool.IsSelf(userData.UserID);
        if(this.userState == 0){
            this.ClearUserInfo();
        }else{
            this.sex                       = userData.FaceID <= 8 && 1 || 2;
            this.id                        = userData.UserID;
            this.money                     = userData.Money;
            this.idText.string             = "ID:" + this.id;
            this.idBackground.active       = !this.own;
            this.ownBackground.active      = this.own;
            this.seatStateText.string      = "";
            let size                       = this.seatStateText.node.width + 20;
            this.TotalBG.width             = size < 110 ? 110 : size;
            this.idText.node.color         = this.own && ownIdColor || idColor;
            this.userInfo.active           = true;
            this.sitDownButton.node.active = false;
            this.profileBG.node.active     = (this.own);
            this.profileImage.node.active  = (this.own);
            Tool.SetSprite(this.profileImage, "faceid_" + userData.FaceID);
        }
    };
    
    this.SetMoney = function(money){
        this.money = money;
    };
    
    //選位
    this.SetActiveSitDownButton = function(v){
        if(v && this.userState != 0){
            return;
        }
        this.sitDownButton.node.active = v;
    };
    
    //////顯示
    //輸贏金額
    this.ShowWinLoseMoney = function(money, iOnComplete){
        let clone      = cc.instantiate(money > 0 && this.winMoneyText.node || this.loseMoneyText.node);
        clone.active   = true;
        clone.parent   = this.root;
        clone.position = this.winMoneyText.node.position;
        clone.angle    = this.winMoneyText.node.angle;
        clone.scale    = 1;
        let moneyText  = Tool.ToCash(money);
        
        let txt  = clone.getComponent("TextControl");
        txt.text = money > 0 && "+" + moneyText || moneyText;
        txt.showString();
        
        let destination = clone.y + 15;
        cc.tween(clone)
          .to(winLoseMoneyDuration, { y : destination })
          .call(function(){
              clone.destroy();
              if(iOnComplete != null){
                  iOnComplete();
              }
          }).start();
    };
    
    //動作
    this.ShowActionSignImage = function(type){
        let self                         = this;
        this.actionSignImage.node.active = true;
        Tool.SetSprite(this.actionSignImage, "action_" + type);
        Tool.Delay(1, function(){ self.actionSignImage.node.active = false; });
        // if (type == 1) {
        //     GameG.PlayGameSound(this.sex == 1 && "bet_man" || "bet_woman");
        // } else if (type == 0) {
        //     GameG.PlayGameSound(this.sex == 1 && "giveup_man" || "giveup_woman");
        // }
    };
    
    //動作
    this.ShowSpecial = function(){
        this.specialImage.node.active = true;
    };
}

module.exports = UIUser;
