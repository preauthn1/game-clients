var G         = require("Global");
var GameLayer = require("GameLayer");
var Tool      = require("Tool");
var GameG     = require("GameGlobal");

var UIBottom = {
    extends : cc.Component,
    
    Create(root){
        
        let idText       = cc.find("UserInfo/IDText", root).getComponent(cc.Label);
        let moneyText    = cc.find("UserInfo/UserMoney/Text", root).getComponent(cc.Label);
        let faceImage    = cc.find("UserInfo/FaceImage/Image", root).getComponent(cc.Sprite);
        let actionArea   = cc.find("ActionArea", root);
        let actionButton = [];
        
        this.money = 0;
        
        moneyText.string  = "";
        idText.string     = "";
        actionArea.active = (false);
        
        for(let i = 0; i < 2; i++){
            actionButton[i]       = cc.find("ActionArea/ActionButton" + i, root).getComponent(cc.Button);
            actionButton[i].hitID = i;
            actionButton[i].node.on("click", function(hit){
                GameG.PlayGameSound("click");
                GameLayer.DoubleAction(hit.hitID);
            });
        }
        
        this.SetUserInfo = function(data){
            idText.string = "ID:" + data.UserID;
            let userMoney = data.Money;
            
            let min = Tool.GetChipData()[0].money * 2;
            if(userMoney <= min){
                min     = Tool.MoneyText(min);
                let msg = "您的金额不足####，请前往储值";
                UIMain.ShowNeedMoney(msg, min);
            }else{
                UIMain.HideNeedMoney();
            }
            
            moneyText.string = Tool.ToCash(userMoney);
            Tool.SetSprite(faceImage, "faceid_" + data.FaceID);
            this.money = userMoney;
        };
        
        this.RefreshMoney = function(){
            let userMoney = GameLayer.GetUserMoney();
            
            if(userMoney <= Tool.GetChipData()[0].money * 2){
            }else{
                UIMain.HideNeedMoney();
            }
            
            moneyText.string = Tool.ToCash(userMoney);
            this.money       = userMoney;
        };
        
        this.SetActiveActionArea = function(value){
            actionArea.active = (value);
        };
        
    },
    
    
};

module.exports = UIBottom;
