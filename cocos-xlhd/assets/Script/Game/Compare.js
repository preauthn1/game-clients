var G=require("Global");
var GameG=require("GameGlobal");

var Compare={

    extends : cc.Component,

    init() {
        this.cardbg=["", "card_l", "card_h"];

        this.initData();
        this.initUi();
    },

    initData() {
        xlhd.gameLayer.dtOpenCardStep=0;         // 开牌动画
    },

    initUi() {
        let canvas=cc.find("Canvas");
        let root=cc.find("GameLayer/GameLayer", canvas);
        this.uiRoot={};
        this.uiRoot.root=root;
        let uiRoot=this.uiRoot;

        // 比牌层初始化
        uiRoot.compare={};
        uiRoot.compare.root=cc.find("compare", root);
        uiRoot.compare.efWin=cc.find("compare/bg/efWin", root);
        uiRoot.compare.efWin.active=false;

        uiRoot.compare.mask=cc.find("compare/bg/efWin/mask", root).getComponent(cc.Sprite);
        uiRoot.compare.mask.node.active=false;
        uiRoot.compare.resultAnim=cc.find("compare/bg/efWin/resultAnim", root).getComponent(sp.Skeleton);
        uiRoot.compare.resultAnim.node.active=false;
        uiRoot.compare.cardStart=cc.find("compare/cardStart", root);
        uiRoot.compare.cardEnd=cc.find("compare/cardEnd", root);
        this.cardStart=GameG.LocalConvertWorldPointAR(uiRoot.compare.cardStart);
        this.cardEnd=GameG.LocalConvertWorldPointAR(uiRoot.compare.cardEnd);
        
        uiRoot.compare.cardHu = {};
        uiRoot.compare.cardHu.root = cc.find("compare/bg/huCard", root);
        uiRoot.compare.cardHu.card = cc.find("compare/bg/huCard/card", root).getComponent(cc.Sprite);
        uiRoot.compare.cardHu.show = cc.find("compare/bg/huCard/show", root).getComponent(cc.Sprite);
        uiRoot.compare.cardHu.mask = cc.find("compare/bg/huCard/mask", root).getComponent(cc.Sprite);
        uiRoot.compare.cardHu.point = cc.find("compare/bg/huCard/point", root).getComponent("TextControl");
        uiRoot.compare.cardHu.cardValue = cc.find("compare/bg/huCard/value", root);
        uiRoot.compare.cardHu.startPos = GameG.WorldConvertLocalPointAR(uiRoot.compare.cardHu.card.node, this.cardStart)

        this.initObject(this.uiRoot.compare.cardHu, 2);

        uiRoot.compare.cardLong = {};
        uiRoot.compare.cardLong.root = cc.find("compare/bg/longCard", root);
        uiRoot.compare.cardLong.card = cc.find("compare/bg/longCard/card", root).getComponent(cc.Sprite);
        uiRoot.compare.cardLong.show = cc.find("compare/bg/longCard/show", root).getComponent(cc.Sprite);
        uiRoot.compare.cardLong.mask = cc.find("compare/bg/longCard/mask", root).getComponent(cc.Sprite);
        uiRoot.compare.cardLong.point = cc.find("compare/bg/longCard/point", root).getComponent("TextControl");
        uiRoot.compare.cardLong.cardValue = cc.find("compare/bg/longCard/value", root);
        uiRoot.compare.cardLong.startPos = GameG.WorldConvertLocalPointAR(uiRoot.compare.cardLong.card.node, this.cardStart)
        this.initObject(this.uiRoot.compare.cardLong, 1);

        uiRoot.compare.efWin.active=false;
    },

    initObject(obj, bgIndex) {
        obj.root.active=false;
        obj.root.scale=1;

        obj.card.node.active=false;
        obj.show.node.active=false;
        obj.point.text="";

        obj.show.node.position=cc.v3(0, 0, 0);
        obj.show.node.scale=1;
        obj.show.node.angle=0;

        obj.card.node.position= obj.startPos;
        obj.card.node.scale=this.uiRoot.compare.cardStart.scale;
        obj.card.node.angle=this.uiRoot.compare.cardStart.angle;
        GameG.SetImageSprite(obj.card, G.GetGamePName(), this.cardbg[bgIndex], false);
    },

    //發牌
    deal(obj, startPos) {
        obj.node.stopAllActions();
        obj.node.position=startPos;
        let duration=0.2;
        let endPos = cc.v2(0, 0)

        let sqs=cc.tween(obj.node)
                  .call(function () {
                        xlhd.gameAudio.turnStep(4, ["",1])
                        obj.node.active=true;
                        obj.node.color=cc.Color.WHITE;
                        obj.node.opacity=255;
                  })
                  .to(duration, { position : endPos, angle : 0, scale : 1 })
                  .start();
    },

    //玩牌
    playCard() {
        let Long=this.uiRoot.compare.cardLong;
        Long.root.active=true;
        this.deal(Long.card, Long.startPos);

        let Hu=this.uiRoot.compare.cardHu;
        Hu.root.active=true;
        this.deal(Hu.card, Hu.startPos);
    },

    //- 回收
    Recycle(obj, bgIndex) {
        let self=this;
        obj.point.text="";
        let duration=0.15;
        let card=obj.show;
        card.node.stopAllActions();
        let cardEnd=GameG.WorldConvertLocalPointAR(card.node, this.cardEnd);

        let sqs=GameG.NewTween(card.node);
        sqs.to(0.1, { scaleX : 0 });
        sqs.call(function () {
            GameG.SetImageSprite(card, G.GetGamePName(), self.cardbg[bgIndex], false);
        });
        sqs.to(0.1, { scaleX : 1 });
        sqs.to(duration, { position : cardEnd, scale : self.uiRoot.compare.cardEnd.scale });
        sqs.call(function () {
            card.node.position=new cc.v2(0, 0);
            card.node.scale=1;
            card.node.angle=1;
            card.node.active=false;
        });
        sqs.start();
    },

    //- 开牌主动画
    animOpenCards(data, call) {
        let self=this;

        xlhd.gameLayer.dtOpenCardStep=1;
        let cmp=this.uiRoot.compare;

        let sqs=cc.tween(cmp.root)
                    .delay(0.3)
                    .call(function () {
                        xlhd.gameControl.initCard(cmp.cardLong.show, data.Poker[0].Number, data.Poker[0].Color, cmp.cardLong.cardValue);
                        cmp.cardHu.show.node.active=true;

                        xlhd.gameControl.initCard(cmp.cardHu.show, data.Poker[1].Number, data.Poker[1].Color, cmp.cardHu.cardValue);
                        cmp.cardLong.show.node.active=true;

                        cmp.cardLong.card.node.stopAllActions();
                        cmp.cardLong.card.node.position = cc.v3(0,0,0)
                        cmp.cardLong.card.node.scale = 1
                        cmp.cardLong.card.node.angle = 0

                        // 翻龍
                        let sqs2=cc.tween(cmp.cardLong.card.node)
                                 .to(0.5, { position : cc.v2((cmp.cardLong.card.node.width / 10), 0) })
                                 .delay(0.5)
                                 .call(function() {
                                    xlhd.gameAudio.turnStep(4, ["",1])
                                 })
                                 .to(0.5, { position : cc.v2((cmp.cardLong.card.node.width * 1.5), 0), opacity : 0 })
                                 .call(function () {
                                    sqs2.stop();
                                    sqs2=null;

                                    cmp.cardLong.point.text=GameG.GetLocalizedString("点数").replace("####", data.Poker[0].Number);

                                    cmp.cardLong.mask.node.active=false;

                                    cmp.cardHu.show.node.active=true;
                                    cmp.cardHu.card.node.stopAllActions();
                                    cmp.cardHu.card.node.position = cc.v3(0,0,0)
                                    cmp.cardHu.card.node.scale = 1
                                    cmp.cardHu.card.node.angle = 0

                                    // 翻虎
                                    sqs2=cc.tween(cmp.cardHu.card.node)
                                            .to(0.5, { position : cc.v2((cmp.cardHu.card.node.width / 10), 0) })
                                            .delay(0.5)
                                            .call(function() {
                                                xlhd.gameAudio.turnStep(4, ["",1])
                                             })                                            
                                            .to(0.5, { position : cc.v2((cmp.cardHu.card.node.width * 1.5), 0), opacity : 0 })
                                            .call(function () {
                                                cmp.cardHu.point.text=GameG.GetLocalizedString("点数").replace("####", data.Poker[1].Number);
                                                cmp.cardHu.mask.node.active=false;
                                            })
                                            .start();
                                 })
                                 .start();
                  })
                  .delay(xlhd.dtRstWin == 2 && 3 || 2.75)
                  .call(function () {
                        xlhd.gameAudio.turnStep(5, ["", 1]);
                        self.uiRoot.compare.resultAnim.node.active=true;
                        self.uiRoot.compare.resultAnim.node.stopAllActions();
                        // 顯示結果
                        cc.tween(self.uiRoot.compare.resultAnim.node)
                            .delay(0.5)
                            .call(function () {
                                xlhd.gameAudio.turnStep(5, ["", 2]);
                                self.uiRoot.compare.mask.node.active=true;
                                if (xlhd.dtRstWin == 1) {
                                    self.uiRoot.compare.resultAnim.setAnimation(0, "dragon_w", false);
                                } else if (xlhd.dtRstWin == 2) {
                                    self.uiRoot.compare.resultAnim.setAnimation(0, "tie", false)
                                } else if (xlhd.dtRstWin == 3) {
                                    self.uiRoot.compare.resultAnim.setAnimation(0, "tiger_w", false)
                                }
                                xlhd.gameAudio.ePlayPlayerOrBankWin(xlhd.dtRstWin);
                            })
                            .delay(1.5)
                            .call(function () {
                                self.uiRoot.compare.resultAnim.node.active=false;
                                self.uiRoot.compare.mask.node.active=false;
                            })
                            .start();
                        self.uiRoot.compare.efWin.active=true;
                  })
                  .delay(xlhd.dtRstWin == 2 && 1 || 3)
                  .call(function () {
                        xlhd.gameAudio.turnStep(4, ["",1])
                        self.Recycle(self.uiRoot.compare.cardLong, 1);
                        self.Recycle(self.uiRoot.compare.cardHu, 2);
                  })
                  .delay(1)
                  .call(function () {
                        self.init();
                  })
                  .call(function () {
                        //弹出结算界面
                        self.uiRoot.compare.efWin.active=false;
                        xlhd.gameLayer.dtOpenCardStep=0;
                        if (call)
                            call();

                        // 釋放記憶體
                        cc.sys.garbageCollect();                            
                  })
                  .start();

    },
};

module.exports=Compare;
