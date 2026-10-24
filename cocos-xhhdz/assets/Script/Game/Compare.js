var G=require("Global")
var GameG=require("GameGlobal")
var gameAudio=require("GameAudio")
var fmg=require("FFunction")
var GameData=require("GameData")

var Compare={
    extends : cc.Component,

    onExit() {
    },

    initUi() {
        this.dtOpenCardStep=0 // 开牌动画

        this.startPos=fmg.v3(0, 0, 0)
        this.endPos=[fmg.v3(- 200, 0, 0), fmg.v3(200, 0, 0)]

        this.cardbg=["", "card_l", "card_h"]

        let canvas=cc.find("Canvas")
        let root=cc.find("GameLayer", canvas)
        this.uiRoot={}
        this.uiRoot.root=root
        this.uiRoot.bg=cc.find("compare/bg", root)

        let uiRoot=this.uiRoot

        // 比牌层初始化
        uiRoot.compare={}
        uiRoot.compare.root=cc.find("compare", root)
        uiRoot.compare.cardStart=cc.find("compare/cardStart", root)
        uiRoot.compare.cardEnd=cc.find("compare/cardEnd", root)
        uiRoot.compare.efWin=cc.find("compare/bg/efWin", root)
        uiRoot.compare.efWin.active=(false)

        this.cardStart=GameG.LocalConvertWorldPointAR(this.uiRoot.compare.cardStart)
        this.cardEnd=GameG.LocalConvertWorldPointAR(this.uiRoot.compare.cardEnd)


        uiRoot.compare.vsRoot=cc.find("Title_VS", root)

        uiRoot.compare.vs=cc.find("Title_VS/Title_VS", root)

        uiRoot.compare.cardHung={}
        uiRoot.compare.cardHung.root=cc.find("compare/bg/HungCard", root)
        uiRoot.compare.cardHung.card=[]
        uiRoot.compare.cardHung.resultIcon=cc.find("compare/bg/HungCard/Icon", root).getComponent(cc.Sprite)
        uiRoot.compare.cardHung.card[0]=cc.find("compare/bg/HungCard/card1", root).getComponent(cc.Sprite)
        uiRoot.compare.cardHung.card[1]=cc.find("compare/bg/HungCard/card2", root).getComponent(cc.Sprite)
        uiRoot.compare.cardHung.card[2]=cc.find("compare/bg/HungCard/card3", root).getComponent(cc.Sprite)
        uiRoot.compare.cardHung.winAnim=cc.find("compare/bg/HungCard/paimian", root)
        uiRoot.compare.cardHung.winPs=cc.find("compare/bg/HungCard/paimian/paimian", root).getComponent(cc.ParticleSystem)
        uiRoot.compare.cardHung.root.active=(false)

        uiRoot.compare.cardHei={}
        uiRoot.compare.cardHei.root=cc.find("compare/bg/HeiCard", root)
        uiRoot.compare.cardHei.card=[]
        uiRoot.compare.cardHei.card[0]=cc.find("compare/bg/HeiCard/card1", root).getComponent(cc.Sprite)
        uiRoot.compare.cardHei.card[1]=cc.find("compare/bg/HeiCard/card2", root).getComponent(cc.Sprite)
        uiRoot.compare.cardHei.card[2]=cc.find("compare/bg/HeiCard/card3", root).getComponent(cc.Sprite)

        uiRoot.compare.cardHei.resultIcon=cc.find("compare/bg/HeiCard/Icon", root).getComponent(cc.Sprite)
        uiRoot.compare.cardHei.winAnim=cc.find("compare/bg/HeiCard/paimian", root)
        uiRoot.compare.cardHei.winPs=cc.find("compare/bg/HeiCard/paimian/paimian", root).getComponent(cc.ParticleSystem)
        uiRoot.compare.cardHei.root.active=(false)

        uiRoot.compare.efdraw={}
        uiRoot.compare.efdraw.bet=cc.find("betNum/_efwbetDraw", root).getComponent(cc.Sprite)
        uiRoot.compare.efdraw.titleAnim=cc.find("compare/bg/efWin/heying", root)
        uiRoot.compare.efdraw.titlePs=cc.find("compare/bg/efWin/heying/ALL", root).getComponent(cc.ParticleSystem)
        uiRoot.compare.efdraw.bet.active=(false)

        uiRoot.compare.eflong={}
        uiRoot.compare.eflong.bet=cc.find("betNum/_efwbetLong", root).getComponent(cc.Sprite)
        uiRoot.compare.eflong.titleAnim=cc.find("compare/bg/efWin/longying", root)
        uiRoot.compare.eflong.titlePs=cc.find("compare/bg/efWin/longying/ALL", root).getComponent(cc.ParticleSystem)
        uiRoot.compare.eflong.bet.active=(false)

        uiRoot.compare.efhu={}
        uiRoot.compare.efhu.bet=cc.find("betNum/_efwbetHu", root).getComponent(cc.Sprite)
        uiRoot.compare.efhu.titleAnim=cc.find("compare/bg/efWin/huying", root)
        uiRoot.compare.efhu.titlePs=cc.find("compare/bg/efWin/huying/ALL", root).getComponent(cc.ParticleSystem)
        uiRoot.compare.efhu.bet.active=(false)

        this.init()
    },

    init() {
        this.initObject(this.uiRoot.compare.cardHei, 1)
        this.initObject(this.uiRoot.compare.cardHung, 2)
        this.uiRoot.compare.efWin.active=(false)
        this.uiRoot.compare.cardHei.resultIcon.node.active=(false)
        this.uiRoot.compare.cardHung.resultIcon.node.active=(false)
    },

    initObject(obj, bgIndex) {
        obj.root.active=(false)
        obj.root.scale=1

        for (let i=0; i<=2; ++ i) {//    for i = 1, 3 do
            let card=obj.card[i]
            card.node.active=(false)
            card.node.position=cc.v3(0, 0, 0)
            card.node.scale=1
            card.node.position=GameG.WorldConvertLocalPointAR(card.node, this.cardStart)
            card.node.scale=this.uiRoot.compare.cardStart.scale
            card.node.angle=this.uiRoot.compare.cardStart.angle
            GameG.SetImageSprite(card, G.GetGamePName(), this.cardbg[bgIndex], false)
        }
    },

    deal(obj, pos, sqs, delay) {
        let duration=0.2
        sqs.call(function () {
            obj.active=(true)
            let sqs1=GameG.NewTween(obj)
            sqs1.to(duration, { position : pos, angle : 0 })
            sqs1.call(function () {
                gameAudio.PlayCard()
            })
            sqs1.to(duration, { scale : 1 })
            sqs1.start()
        })
        sqs.delay(delay)
    },

    playCard() {
        let Hei=this.uiRoot.compare.cardHei
        let Hung=this.uiRoot.compare.cardHung
        Hei.root.active=(true)
        Hung.root.active=(true)

        let duration=0.2
        let delay=0.01
        let sqs=GameG.NewTween(Hei.root)
        sqs.delay(0.01)

        for (let i=0; i<=2; ++ i) {//    for i = 1, 3 do
            let pos=fmg.v3(- 140 + ((i + 1) * 70), 0, 0)

            this.deal(Hei.card[i].node, pos, sqs, duration)
            delay+=duration

            this.deal(Hung.card[i].node, pos, sqs, duration)
            delay+=duration
        }
        sqs.start()
    },

    //- 初始化比较特效 idx: 0:无；1:龙赢；2:和；2:虎赢
    initCompare(idx) {
        let cmp=this.uiRoot.compare
        let cfg=["eflong", "efdraw", "efhu"]
        for (let k in (cfg)) {
            let v=cfg[k]

            let obj=cmp[v]
            obj.bet.active=(false)
            obj.titleAnim.active=(false)
            if (obj.titlePs)
                obj.titlePs.Stop()
        }

        cfg=["cardHei", "cardHung"]
        let acc=0
        for (let k in (cfg)) {
            let v=cfg[k]

            let obj=cmp[v]
            obj.root.active=(true)
            obj.root.position=this.endPos[acc]
            for (let i=0; i<=2; ++ i) {//        for i = 1, 3 do
                let pos=fmg.v3(- 140 + ((i + 1) * 70), 0, 0)
                obj.card[i].node.active=(true)
                obj.card[i].node.position=pos
                obj.card[i].node.angle=0
            }
            acc=acc + 1
        }
    },

    //- 初始化比较特效 idx: 0:无；1:龙赢；2:和；2:虎赢
    blinkWinBetBg(idx) {
        this.stopBlinkWinBg()
        let cfg=["eflong", "efdraw", "efhu"]
        let obj=this.uiRoot.compare[cfg[idx]].bet
        obj.active=(true)
        fmg.setAlpha(obj, 0)
        this.dtWinIdx=idx

        this.hBlinkWinBetBg=cc.tween(obj)
        let tween=cc.tween(this.hBlinkWinBetBg)
        tween.to(0.3, { opacity : 255 })
        tween.delay(0.4)
        tween.to(0.3, { opacity : 0 })
        this.hBlinkWinBetBg.repeat(9999999999, tween).start()
    },

    //- 初始化比较特效 idx: 0:无；1:龙赢；2:和；2:虎赢
    stopBlinkWinBg() {
        if (this.hBlinkWinBetBg) {
            this.hBlinkWinBetBg.stop()
            this.hBlinkWinBetBg=null
            let cfg=["eflong", "efdraw", "efhu"]
            this.uiRoot.compare[cfg[this.dtWinIdx]].bet.active=(false)
        }
    },

    //- 开牌
    OpenCard(card, number, color, sqs) {
        card.node.scale=1

        sqs.call(function () {
            let sqs1=GameG.NewTween(card.node)
            sqs1.to(0.2, { scaleX : 0 })
            sqs1.call(function () {
                gameAudio.OpenCard()
                GameData.gameControl.initCard(card, number, color)
            })
            sqs1.to(0.2, { scaleX : 1 })
            sqs1.start()
        })
        sqs.delay(0.5)
    },

    //- 回收
    Recycle(obj, bgIndex) {
        obj.resultIcon.node.active=(false)
        let self=this

        gameAudio.PlayCard()

        for (let i=0; i<=2; ++ i) {//    for i = 1, 3 do
            let duration=0.15
            let card=obj.card[i]

            let cardEnd=GameG.WorldConvertLocalPointAR(card.node, this.cardEnd)

            let sqs1=GameG.NewTween(card.node)
            sqs1.delay(0.01)
            //sqs1:Append(card:DOLocalRotate(fmg.v3(0, -90, 0), duration))
            sqs1.call(function () {
                GameG.SetImageSprite(card, G.GetGamePName(), self.cardbg[bgIndex], false)
            })
            //sqs1:Append(card:DOLocalRotate(fmg.v3(0,0, 0), duration))
            sqs1.to(duration, { position : cardEnd, scale : self.uiRoot.compare.cardEnd.scale })
            //sqs1:Join(card:DORotate(self.uiRoot.compare.cardEnd.rotation.eulerAngles, duration))
            sqs1.call(function () {
                card.node.active=(false)
            })
            sqs1.start()
        }
    },

    //- 开牌主动画
    animOpenCards(data, call) {
        let self=this

        this.dtOpenCardStep=1
        let cmp=this.uiRoot.compare

        let sqs=GameG.NewTween(this.uiRoot.root)

        // 等待音效
        sqs.delay(1.2)
        // 弹出牌框，初始化状态
        fmg.argFuncAnim(sqs, function (adt) {
            // 显示并初始化结算界面
            self.initCompare(GameData.dtRstWin)
        }, [data])
        sqs.delay(0.3)

        // 开牌动画
        fmg.argFuncAnim(sqs, function (adt) {
            let sqs1=GameG.NewTween(self.uiRoot.bg)
            for (let i=0; i<=1; ++ i) {//        for i = 1, 2 do
                for (let j=0; j<=1; ++ j) {//            for j = 1, 2 do
                    let card=adt[i].card[j]
                    if (i == 0) {
                        self.OpenCard(card, data.HeiPoker[j].Number, data.HeiPoker[j].Color, sqs1)
                    }
                    else {
                        self.OpenCard(card, data.HungPoker[j].Number, data.HungPoker[j].Color, sqs1)
                    }
                }
            }

            self.OpenCard(adt[0].card[2], data.HeiPoker[2].Number, data.HeiPoker[2].Color, sqs1)
            self.blinkPorkerResult(data.HeiZuHe, self.uiRoot.compare.cardHei.resultIcon, sqs1)

            self.OpenCard(adt[1].card[2], data.HungPoker[2].Number, data.HungPoker[2].Color, sqs1)
            self.blinkPorkerResult(data.HungZuHe, self.uiRoot.compare.cardHung.resultIcon, sqs1)

            sqs1.start()
        }, [cmp.cardHei, cmp.cardHung])

        sqs.delay(4)
        sqs.call(function () {
            if (call) {
                call()
            }
        })

        //間隔清除牌的時間
        sqs.delay(6)
        sqs.call(function () {
            self.Recycle(self.uiRoot.compare.cardHei, 1)
            self.Recycle(self.uiRoot.compare.cardHung, 2)
        })
        sqs.delay(1)
        sqs.call(function () {
            self.init()
        })


        // 弹出结算界面
        fmg.argFuncAnim(sqs, function (adt) {
            self.uiRoot.compare.efWin.active=(false)
            self.uiRoot.compare.cardHei.resultIcon.node.active=(false)
            self.uiRoot.compare.cardHung.resultIcon.node.active=(false)

            self.dtOpenCardStep=0

        }, [null, call])

        sqs.start()
    },

    blinkPorkerResult(ZuHe, obj, sqq) {
        let self=this
        fmg.argFuncAnim(sqq, function (adt) {

            let ProkerType=self.GetCardType(ZuHe)
            obj.node.name="resultcardtype_" + ProkerType.toString()
            GameG.SetImageSprite(obj, G.GetGamePName(), "resultcardtype_" + ProkerType.toString(), true);
            gameAudio.cardTypeShow(ProkerType);
            obj.node.active=(true);

            var sqs=GameG.NewTween(obj.node)
            sqs.to(0.15, { scale : 1.7 })
            sqs.to(0.15, { scale : 1.0 })
            sqs.to(0.15, { scale : 1.7 })
            sqs.to(0.15, { scale : 1.0 })
            sqs.start()
        }, [])

        sqq.delay(0.5)
    },

    //判断是否为顺子
    CheckStraight(data) {
        let middle=(data[1].Number + data[2].Number + data[3].Number) / 3
        if (data[1].Number == middle) {
            if (data[2].Number == middle - 1 || data[3].Number == middle - 1) {
                return true
            }
        }
        else if (data[2].Number == middle) {

            if (data[1].Number == middle - 1 || data[3].Number == middle - 1) {
                return true
            }
        }
        else if (data[3].Number == middle) {

            if (data[1].Number == middle - 1 || data[2].Number == middle - 1) {
                return true
            }
        }

        //例外A
        let temp1=data[1].Number
        let temp2=data[2].Number
        let temp3=data[3].Number
	    if(data[1].Number == 1 ){ temp1 = 14 }
	    if(data[2].Number == 1 ){ temp2 = 14 }
	    if(data[3].Number == 1 ){ temp3 = 14 }
        middle=(temp1 + temp2 + temp3) / 3
        if (temp1 == middle) {
            if (temp2 == middle - 1 || temp3 == middle - 1) {
                return true
            }
        }
        else if (temp2 == middle) {
            if (temp1 == middle - 1 || temp3 == middle - 1) {
                return true
            }
        }
        else if (temp3 == middle) {

            if (temp1 == middle - 1 || temp2 == middle - 1) {
                return true
            }
        }
        return false
    },

    //判断是否为同花
    CheckSameColor(data) {
        if (data[1].Color == data[2].Color && data[1].Color == data[3].Color) {
            return true
        }
        return false
    },

    //判断是否为同点
    CheckSameNumber(data) {
        if (data[1].Number == data[2].Number && data[1].Number == data[3].Number) {
            return true
        }
        return false
    },

    //取得牌型（组合结果）
    //server 传入 4豹子、5顺金、6金花、7顺子、8对子（9-A）、9对子（2-8）、10单张
    //回传7豹子、6顺金、5金花、4顺子、3对子（9-A）、2对子（2-8）、1单张
    GetCardType(ZuHe) {
        return 11 - ZuHe
    },

    //单张大小：从大到小为A、K、Q、J、10、9、8、7、6、5、4、3、2。
    //最小的顺子A23
    GetMaxPoker(data) {
        let temp1=data[1].Number
        let temp2=data[2].Number
        let temp3=data[3].Number
	    if(data[1].Number == 1 ){ temp1 = 14 }
	    if(data[2].Number == 1 ){ temp2 = 14 }
	    if(data[3].Number == 1 ){ temp3 = 14 }

        let maxPoker
        if (temp1>=temp2 && temp1>=temp3) {
            maxPoker=data[1]
        }
        else if (temp2>=temp1 && temp2>=temp3) {

            maxPoker=data[2]
        }
        else if (temp3>=temp1 && temp3>=temp2) {

            maxPoker=data[3]
        }

        return maxPoker
    },

    GetMidPoker(data) {
        let temp1=data[1].Number
        let temp2=data[2].Number
        let temp3=data[3].Number
	    if(data[1].Number == 1 ){ temp1 = 14 }
	    if(data[2].Number == 1 ){ temp2 = 14 }
	    if(data[3].Number == 1 ){ temp3 = 14 }

        let midPoker
        if (temp2>=temp1 && temp1>=temp3) {
            midPoker=data[1]
        }
        else if (temp3>=temp1 && temp1>=temp2) {
            midPoker=data[1]
        }
        else if (temp1>=temp2 && temp2>=temp3) {
            midPoker=data[2]
        }
        else if (temp3>=temp2 && temp2>=temp1) {
            midPoker=data[2]
        }
        else if (temp1>=temp3 && temp3>=temp2) {
            midPoker=data[3]
        }
        else if (temp2>=temp3 && temp3>=temp1) {
            midPoker=data[3]
        }

        return midPoker
    },

    GetMinPoker(data) {
        let temp1=data[1].Number
        let temp2=data[2].Number
        let temp3=data[3].Number
	    if(data[1].Number == 1 ){ temp1 = 14 }
	    if(data[2].Number == 1 ){ temp2 = 14 }
	    if(data[3].Number == 1 ){ temp3 = 14 }

        let minPoker
        if (temp2>=temp1 && temp3>=temp1) {
            minPoker=data[1]
        }
        else if (temp1>=temp2 && temp3>=temp2) {
            minPoker=data[2]
        }
        else if (temp1>=temp3 && temp2>=temp3) {
            minPoker=data[3]
        }

        return minPoker
    },
};

module.exports=Compare
