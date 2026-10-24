var G=require("Global");
var GameG=null;
//var UIUserPic=require("UIUserPic");
var gameData=null;
var gameLayer = null

function UIUser(root) {
    GameG=require("GameGlobal");
    gameData=require("GameData");
	gameLayer = require("GameLayer")
    if (!root) return;

    root.active=false;

    let rootStartPos=root.position;
    //头像
    let img_head=cc.find("head", root).getComponent(cc.Sprite);
    //编码
    let txt_id=cc.find("name", root).getComponent(cc.Label);
    //金额
    let txt_coin=cc.find("coinbg/coin", root).getComponent(cc.Label);
    let txt_addCoin=cc.find("addCoin", root).getComponent("TextControl");
    let txt_delCoin=cc.find("delCoin", root).getComponent("TextControl");
    let addCoinStartPos=txt_addCoin.node.position;

    let userId=- 1;

    this.AnimAddCoin=function (data, timer) {
        // timer=timer || 1
        // let rnum=parseInt(data / 100);
        // if (rnum == 0) {
        //     return
        // }

        // txt_delCoin.node.active=(rnum<0);
        // txt_addCoin.node.active=(rnum>0);

        // let obj=null;

        // if (rnum<0) {
        //     txt_delCoin.text=gameLayer.MoneyText(data);
        //     obj=txt_delCoin.node;
        // }
        // else {
        //     txt_addCoin.text="+" + gameLayer.MoneyText(data);
        //     obj=txt_addCoin.node;
        // }

        // obj.position=addCoinStartPos;

        // let sequence=cc.tween(obj);
        // sequence.by(1.2, { position : cc.v3(0, 60, 0) });
        // sequence.delay(0.3);
        // sequence.call(function () {
        //     obj.active=false;
        // });
        // sequence.start();
    };


    this.AnimShake=function (dir) {

        let sequence=cc.tween(root);
        sequence.to(0.1, { position : (cc.v3(rootStartPos.x + dir, root.position.y, 0)) });
        sequence.to(0.15, { position : (cc.v3(rootStartPos.x, root.position.y, 0)) });
        sequence.call(function () {
            root.position=rootStartPos;
        });
        sequence.start();
    };

    this.AnimChangeUser=function () {
        root.scale=1;
        let sequence=cc.tween(root);
        sequence.to(0.25, { scaleX : 0, scaleY : 1.2, scaleZ : 1 });
        sequence.to(0.05, { scaleX : 1, scaleY : 1 });
        sequence.call(function () {
            root.scale=1;
        });
        sequence.start();
    }

    this.GameStart=function () {
        this.SetActive(false)
        userId= - 1;
    }

    this.GameEnd=function (data) {
        this.SetActive(false)
        userId= - 1;
    }
    //
    this.SetActive=function (enable) {
        root.active=(enable);
    }

    this.SetGameUser=function (data) {
        // UIUserPic.ResetSpriteByName(img_head, data.FaceID.tostring());

        txt_id.text=xlhd.IDTitle + (data.UserID).toString();
        txt_coin.text=gameLayer.MoneyText(data.Score);
    }

    this.SetHead=function (faceId) {
        // UIUserPic.ResetSpriteByName(img_head, faceId.tostring());
    }

    this.SetUserId=function (id) {
        if (userId != id) {
            this.AnimChangeUser();
        }
        userId=id;
        txt_id.text=xlhd.IDTitle + (id).toString();
    }

    this.SetScore=function (score) {
        txt_coin.text=gameLayer.MoneyText(score);
    }

    this.GetPosition=function () {
		return GameG.LocalConvertWorldPointAR(img_head.node)
    }

    this.GetUserId=function () {
        return userId;
    }
};

module.exports=UIUser;