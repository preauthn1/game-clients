var G=require("Global");
var gameLayer=require("GameLayer");
var GameG=require("GameGlobal");
var pojectName=G.GetGamePName();

var UIBottomBar={
    extends : cc.Component,

    target : {},

    Create(root) {
        let target={};
        let chipPrefab=cc.find("Chips/ChipPrefab", root);
        let chips=cc.find("Chips", root);
        let warArea=cc.find("WarArea", root);
        let warButton=cc.find("WarArea/WarButton", root).getComponent(cc.Button);
        let abandonButton=cc.find("WarArea/AbandonButton", root).getComponent(cc.Button);
        let chooseChipIndex=- 1;
        let chipPool=[];
        let betData=[];
        for (let i=0; i<=1; ++ i) {
            betData[i]=[];
            betData[i].betTotal=0;
        }

        target.Reset=function () {
            for (let k in (betData)) {
                let v=betData[k * 1];
                v.betTotal=0;
            }
        };

        target.Reset();

        chipPrefab.active=false;
        chips.active=false;
        warArea.active=false;

        warButton.node.on("click", function () {
            gameLayer.WarPhaseSelection(1);
        });

        abandonButton.node.on("click", function () {
            gameLayer.WarPhaseSelection(0);
        });

        let compare=function (dataA, dataB) {
            return dataA - dataB;
        };

        //- 选择下注的按钮
        // let SetChooseChip = function(chooseIndex){
        //     for(let i = 1; i <= chipPool.length; ++i){
        //         //關閉其他
        //         chipPool[i].img_select.active = (chooseIndex == i);
        //         chipPool[i].root.scale        = chooseIndex == i ? chipScale * 1.15 : chipScale;
        //     }
        //     chooseChipIndex = chooseIndex;
        // }

        let SetChooseChip=function (index) {
            if (chooseChipIndex == index) {
                return;
            }
            if (chooseChipIndex>=0) {
                chipPool[chooseChipIndex].img_select.node.active=false;
                let seq=gameLayer.GetSequence(chipPool[chooseChipIndex].root, "籌碼按鈕縮小");
                seq.to(0.2, { scale : 0.9 })
                   .call(function () {
                       gameLayer.clearTargetSequence(seq);
                   })
                   .start();
            }
            chooseChipIndex=index;
            if (chipPool[index]) {
                chipPool[index].img_select.node.active=true;
                let seq=gameLayer.GetSequence(chipPool[chooseChipIndex].root, "籌碼按鈕放大");
                seq.to(0.2, { scale : 1.05 })
                   .call(function () {
                       gameLayer.clearTargetSequence(seq);
                   })
                   .start();
            }
        };

        target.CreateChip=function (chipData) {
            chipData.sort(compare);
            target.limitChip=chipData[0];
            for (let i=0; i<chipData.length; i ++) {
                let clone=cc.instantiate(chipPrefab);
                clone.active=true;
                clone.parent=chipPrefab.parent;
                clone.position=cc.v2(0, 0);
                clone.scale=chipPrefab.scale;
                chipPool[i]=[];
                chipPool[i].root=clone;
                chipPool[i].img_normal=clone.getComponent(cc.Sprite);
                chipPool[i].img_select=cc.find("Select", clone).getComponent(cc.Sprite);
                chipPool[i].btn=clone.getComponent(cc.Button);
                chipPool[i].txt=cc.find("Text", clone).getComponent(cc.Label);
                chipPool[i].money=chipData[i];
                // chipPool[i].txt.text   = G.Tool.UserHelper.ToCash(chipData[i]);
                // chipPool[i].txt.string = GameG.ToCash(chipData[i]);
                chipPool[i].txt.string=gameLayer.MoneyText(chipData[i]);
                let index=i>8 ? 8 : i;
                GameG.SetImageSprite(chipPool[i].img_normal, pojectName, "chip_" + (index + 1).toString(), true);

                chipPool[i].img_select.node.active=false;
                chipPool[i].btn.selectID=i;
                chipPool[i].btn.node.on("click", function (select) {
                    SetChooseChip(select.selectID);
                });
            }
        };

        target.thisCanBet=function () {
            let v=chipPool[chooseChipIndex];
            let playerMoney=gameLayer.GetPlayerMoney();
            return ((playerMoney - betData[0].betTotal - v.money)>v.money);
        };

        target.SetChipButtonInteractable=function () {
            let playerMoney=gameLayer.GetPlayerMoney();
            let i, l=chipPool.length;

            for (i=l - 1; i>=0; i --) {
                let v=chipPool[i];
                let active=playerMoney>=v.money;
                v.btn.interactable=active;
                if (active == false && chooseChipIndex>=i) {
                    SetChooseChip(i - 1);
                }
            }

            // for (let k in (chipPool)) {
            //     let v=chipPool[k * 1];
            //     let active=((playerMoney - betData[0].betTotal - v.money)>v.money);
            //
            //     v.btn.interactable=active;
            //     if (active == false && chooseChipIndex>k) {
            //         SetChooseChip(k * 1 - 1);
            //     }
            // }

        };

        target.GetChooseChip=function () {
            return chipPool[chooseChipIndex];
        };

        target.GetChipPosition=function (money) {
            let position=null;
            for (let k in (chipPool)) {
                let v=chipPool[k * 1];

                if (money == v.money) {
                    position=v.root.convertToWorldSpaceAR(cc.v2(0, 0));       //AZLDC :fix to world pos
                }
            }
            return position || chipPool[1].root.convertToWorldSpaceAR(cc.v2(0, 0));        //AZLDC :fix to world pos
        };

        target.AddBetMoney=function (money, type) {
            betData[type].betTotal=betData[type].betTotal + money;
            target.SetChipButtonInteractable();
        };

        target.SetChipsActive=function (value) {
            chips.active=value;
            target.SetChipButtonInteractable();
            if (value) {
                SetChooseChip(0);
            }
        };

        target.SetWarAreaActive=function (value) {
            warArea.active=value;
        };

        // target.SetWarAreaPosition = function(position){
        //     //position is world pos
        //     //gameLayer.GetSequence(warArea, "SetWarAreaPosition").to(0.1, { x : position.x }).start();
        // };

        Object.assign(this, target);

        return target;
    }

};

module.exports=UIBottomBar;
