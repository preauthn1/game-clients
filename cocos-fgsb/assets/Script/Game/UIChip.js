var G          = require("Global");
var GameG      = require("GameGlobal");
var GameLayer  = require("GameLayer");
var Tool       = require("Tool");
var pojectName = G.GetGamePName();

function UIChip(root){
    let chipPrefab      = cc.find("Chips/ChipPrefab", root);
    let chips           = root;//cc.find("Chips", root);
    let chooseChipIndex = -1;
    let baseMax         = 0;
    let sideMax         = 0;
    let chipPool        = [];
    
    chipPrefab.active = (false);
    chips.active      = (false);
    
    let SetChooseChip = function(index){
        if(chooseChipIndex == index){
            return;
        }
        if(chooseChipIndex >= 0){
            chipPool[chooseChipIndex].img_select.node.active = false;
            //chipPool[chooseChipIndex].root:DOScale(chipPrefab.scale,0.2)
            cc.tween(chipPool[chooseChipIndex].root)
              .to(0.2, { scale : chipPrefab.scale })
              .start();
        }
        chooseChipIndex = index;
        if(chipPool[index] != null){
            let scale = chipPrefab.scale + 0.15;
            //chipPool[index].root:DOScale(scale,0.2)
            cc.tween(chipPool[index].root)
              .to(0.2, { scale : scale })
              .start();
            
            chipPool[index].img_select.node.active = true;
        }
    };
    
    let compare = function(dataA, dataB){
        
        if(dataA < dataB){
            return -1;
        }
        if(dataA > dataB){
            return 1;
        }
        return 0;
    };
    
    this.CreateChip = function(chipData){
        if(chipPool.length > 0){
            return;
        }
        if(!chipData){
            console.error("chipData", chipData);
        }
        chipData.sort(compare);
        for(let i = 0; i < chipData.length; i++){
            let clone                          = cc.instantiate(chipPrefab);
            clone.parent                       = (chipPrefab.parent);
            clone.name                         = chipPrefab.name + "(" + (i + 1) + ")";
            clone.x                            = clone.y = 0;
            clone.scale                        = chipPrefab.scale;
            chipPool[i]                        = {};
            chipPool[i].root                   = clone;
            chipPool[i].btn                    = clone.getComponent(cc.Button);
            chipPool[i].img_normal             = clone.getComponent(cc.Sprite);
            chipPool[i].img_select             = cc.find("Select", clone).getComponent(cc.Sprite);
            chipPool[i].txt                    = cc.find("Text", clone).getComponent(cc.Label);
            chipPool[i].money                  = chipData[i];
            chipPool[i].img_select.node.active = false;
            chipPool[i].txt.string             = Tool.ToCash(chipData[i]);
            let index                          = i > 7 && 8 || i + 1;
            Tool.SetSprite(chipPool[i].img_normal, "chip_" + index.toString());
            chipPool[i].btn.selectID = i;                                                                   //觸發時i = chipData.length
            chipPool[i].btn.node.on("click", function(select){
                GameG.PlayGameSound("click");
                SetChooseChip(select.selectID);
                
            });
            
            clone.active = true;
        }
        SetChooseChip(0);
    };
    
    this.GetChipPosition = function(money){
        let position = null;
        let i, l     = chipPool.length;
        for(i = 0; i < l; i++){
            let v = chipPool[i];
            if(money == v.money){
                //position = v.root.convertToWorldSpaceAR(cc.v2(0, 0));
                position = v.root;
            }
        }
        return position || chipPool[0].root;
    };
    
    this.GetChooseChipMoney = function(){
        return chipPool[chooseChipIndex] == null && chipPool[0].money || chipPool[chooseChipIndex].money;
    };
    
    this.RefreshChipInteractable = function(){
        let betTotal  = GameLayer.GetBetTotal();
        let userMoney = GameLayer.GetUserMoney();
        let limitLet  = chipPool[0].money;
        for(let k in (chipPool)){
            let v = chipPool[k * 1];
            
            let active         = userMoney - v.money >= betTotal[1] + v.money + limitLet;
            v.btn.interactable = active;
            if(!active && chooseChipIndex >= (k * 1)){
                SetChooseChip(k * 1 - 1);
            }
            
        }
    };
    
    this.SetMaxBet = function(base, side){
        baseMax = base;
        sideMax = side;
    };
    
    this.SetChipsActive = function(value){
        chips.active = (value);
        if(value){
            //AZLDC
            let min = Tool.GetChipData()[0].money * 2;
            if(GameLayer.GetUserMoney() <= min){
                let msg = "您的金额不足####，请前往储值";
                min     = Tool.MoneyText(min);
                UIMain.ShowNeedMoney(msg, min);
            }else{
                UIMain.HideNeedMoney();
            }
            
            this.RefreshChipInteractable();
        }
    };
    
    
};

module.exports = UIChip;
