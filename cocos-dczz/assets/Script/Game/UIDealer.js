var G=require("Global");
var GameG=require("GameGlobal");
var gameLayer=require("GameLayer");
var uiBottomBar=require("UIBottomBar");
var maxGiveMoneyCount=30;
var betMoveDuration=0.3;
// 接收消息table
var pojectName=G.GetGamePName();

var UIDealer={
    extends : cc.Component,

    Create(root) {
        let target=require("Seat").Create(root);
        let dealerSkeleton=cc.find("DealerSkeleton", root).getComponent(sp.Skeleton);


        /**
         * 創建新的籌碼(丟到桌上的)
         * @param {int} money
         * @param {cc.Vec3} startPosition
         */
        let CreateBet=function (money, startPosition) {
            let clone=cc.instantiate(gameLayer.GetBetPrefab());
            clone.active=true;
            gameLayer.setParent(root, clone);
            // clone.parent                                         = root;
            // clone.position                                       = startPosition;
            //AZLDC fixing
            cc.find("Text", clone).getComponent(cc.Label).string=gameLayer.MoneyText(money);
            GameG.SetImageSprite(clone.getComponent(cc.Sprite), G.GetGamePName(), gameLayer.GetBetSpriteName(money));
            return clone;
        };

        let GetBetRange=function () {
            let position=target.GetPosition();
            let range=100;

            let rangeX=gameLayer.RandomRange(position.x - range, position.x + range);
            let rangeY=gameLayer.RandomRange(position.y - range, position.y + range);

            return cc.v3(rangeX, rangeY, 0);
        };

        /**
         * 創建新的籌碼(丟到桌上的)
         * @param {string} name 動畫名稱(狀態)
         */
        target.SetAnimation=function (name) {
            dealerSkeleton.setAnimation(0, name, false);
            dealerSkeleton.addAnimation(0, "idle", true, 2.1);
        };


        target.ShootMoney=function (money, idestination) {
            let betMoney=Math.abs(money);
            GameG.PlayGameSound("chip");

            if (betMoney<10) {
                betMoney=10;
            }
            let betArray=gameLayer.DismantlingBet(betMoney);
            for (let k in (betArray)) {
                let v=betArray[k];

                if (k>maxGiveMoneyCount) {
                    break;
                }
                let startPosition=GetBetRange();
                let clone=CreateBet(v, startPosition);

                let destination=clone.parent.convertToNodeSpaceAR(idestination);
                //----->已重新編譯              
                gameLayer.GetSequence(clone, "ShootMoney")
                         .to(betMoveDuration, { position : destination })
                         .call(function () {
                             clone.destroy();
                         })
                         .start();
                //<-----已重新編譯
            }
        };

        return target;
    }


};

module.exports=UIDealer;
