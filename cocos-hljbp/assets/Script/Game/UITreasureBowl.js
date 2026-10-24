var G=require("Global")
var GameG=null
var GameLayer=null
var Tool=null
var UIBet=null
var rouletteContentColor=null
//輪盤
var root=null
var rouletteRoot=null
var rouletteContentRoot=null
var treasureBowlButton=null
var rouletteContentPrefab=null
var totalText=null
var peopleText=null
var winningNumberText=null
var ringParticle=null
var betParticle=null
var betParticles=null
var betingParticle=null
var bigwinfireNode=null
var bigwinfireParticles=null
var rouletteContent=[]
var winningNumberSequence=null
var turn=false

var UITreasureBowl={
    extends : cc.Component,

    Init() {
        GameG=require("GameGlobal")
        GameLayer=require("GameLayer")
        Tool=require("Tool")
        UIBet=require("UIBet")
        rouletteContentColor=[
            Tool.Color(0, 0, 0, 255),
            Tool.Color(255, 42, 57, 255),
            Tool.Color(255, 152, 41, 255),
            Tool.Color(255, 249, 72, 255),
            Tool.Color(38, 218, 76, 255),
            Tool.Color(57, 211, 255, 255),
            Tool.Color(106, 170, 255, 255),
            Tool.Color(178, 123, 255, 255),
            Tool.Color(255, 106, 232, 255),
        ]

        root=cc.find("Canvas/UI/GameLayer/UITreasureBowl")
        rouletteRoot=cc.find("Roulette", root)
        rouletteContentRoot=cc.find("Roulette/Content", root)
        rouletteContentPrefab=cc.find("Roulette/Content/Prefab", root)
        peopleText=cc.find("Info/PeopleText", root).getComponent(cc.Label)
        winningNumberText=cc.find("Info/WinningNumberText", root).getComponent("TextControl")
        totalText=cc.find("Info/TotalText", root).getComponent(cc.Label)

        treasureBowlButton=cc.find("TreasureBowlButton", root).getComponent(cc.Button)
        ringParticle=cc.find("Roulette/RingParticle", root).getComponent(cc.ParticleSystem)
        betParticle=cc.find("Particle/BetParticle", root).getComponent(cc.ParticleSystem)
        betParticles=cc.find("Particle/BetParticle", root).getComponentsInChildren(cc.ParticleSystem)
        betingParticle=cc.find("Particle/BetingParticle", root).getComponent(cc.ParticleSystem)
        bigwinfireNode=cc.find("Canvas/UI/GameLayer/Particle/BigwinfireParticle");
        bigwinfireParticles=cc.find("Canvas/UI/GameLayer/Particle/BigwinfireParticle").getComponentsInChildren(cc.ParticleSystem)

        rouletteContent=[]
        winningNumberSequence=null
        turn=false

        treasureBowlButton.node.on('click', function () {
            GameLayer.HLJBP_Bet()
        })

        totalText.string="0"
        peopleText.string=GameG.GetLocalizedString("總人數").replace("####", "0");
        winningNumberText.string=""
        rouletteContentPrefab.active=(false)
        ringParticle.node.active=(false)
        betingParticle.node.active=(false)
        bigwinfireNode.active=(false)
        betParticle.node.active=(false)
        this.RefreshRoulette()
    },

    GetColor(seat) {
        return rouletteContentColor[seat]
    },

    SetActiveBetingParticle(value) {
        betingParticle.node.active=(value)
        if (value) {
            betingParticle.resetSystem()
        }
        else {
            betingParticle.stopSystem()
        }
    },

    PlayBetParticle() {
        if (betParticle.node.active == false)
            betParticle.node.active=true;

        for (let i in betParticles) {
            betParticles[i].resetSystem();
        }
    },

    //中獎號碼動畫
    SetWinningNumberAnimation() {
        let sequence=Tool.GetSequence()
        winningNumberSequence=sequence
        //----->需重新編譯程式碼    sequence:Append(winningNumberText:DOText("1245", 999, true, CS.DG.Tweening.ScrambleMode.Numerals))
    },

    SetWinningNumber(num) {
        if (winningNumberSequence != null) {
            winningNumberSequence.stop()
            winningNumberSequence=null
        }
        //低於四位數補0
        let text=(num).toString()
        for (let _=text.length; _<=3; ++ _) {
            text="0" + text
        }
        winningNumberText.string=text
    },

    //刷新轉盤內容
    RefreshRoulette() {
        let total=UIBet.GetBetTotal()
        let userBetData=UIBet.GetUserBetData()
        let zRotation=0
        for (let k in (userBetData)) {
            let v=userBetData[k]

            if (rouletteContent[k] == null) {
                let clone=cc.instantiate(rouletteContentPrefab)
                clone.parent=(rouletteContentRoot)
                clone.scale=cc.v3(1, 1, 1)
                clone.position=cc.v3(0, 0, 0)
                clone.color=rouletteContentColor[k]
                rouletteContent[k]={}
                rouletteContent[k].root=clone
                rouletteContent[k].sprite=clone.getComponent(cc.Sprite)
            }
            rouletteContent[k].sprite.fillRange=v / total * - 1
            rouletteContent[k].root.angle=zRotation
            let proportion=rouletteContent[k].sprite.fillRange * 360
            rouletteContent[k].root.active=(true)
            rouletteContent[k].startAngle=zRotation
            rouletteContent[k].endAngle=zRotation + proportion
            zRotation=rouletteContent[k].endAngle
        }

        totalText.string=Tool.MoneyText(total)
        if (UIBet.GetBetPeople() > 1){
            peopleText.string=GameG.GetLocalizedString("總人數s").replace("####", UIBet.GetBetPeople().toString());
        }
        else{
            peopleText.string=GameG.GetLocalizedString("總人數").replace("####", UIBet.GetBetPeople().toString());
        }
    },

    //轉輪盤
    Turn(index, OnComplete) {
        if (turn) {
            return
        }
        turn=true
        this.SetWinningNumberAnimation()
        let min=rouletteContent[index].startAngle - 2
        let max=rouletteContent[index].endAngle + 2
        let endValue=Tool.Random(min, max) //停止角度
        let times=14	//轉動次數
        let rotateSecond=3.6	//轉動時間

        ringParticle.node.active=(true)
        ringParticle.resetSystem()
        GameG.PlayGameSound("lucky", true)
        //轉動
        var rotateSeq=cc.rotateTo(rotateSecond, - 360 * times + endValue * - 1 + 90).easing(cc.easeQuarticActionInOut());
        var callSeq=cc.callFunc(function () {
            GameG.CloseLoopSound("lucky")
            GameG.PlayGameSound("win")
            ringParticle.node.active=(false)
            bigwinfireNode.active=(true)
            for (let i in bigwinfireParticles) {
                bigwinfireParticles[i].resetSystem();
            }
            ringParticle.stopSystem()
            turn=false
            if (OnComplete != null) {
                OnComplete()
            }
        }.bind(this));
        rouletteContentRoot.runAction(cc.sequence([rotateSeq, callSeq]))
    },

    Reset() {
        totalText.string="0"
        peopleText.string=GameG.GetLocalizedString("總人數").replace("####", "0");
        for (let k in (rouletteContent)) {
            let v=rouletteContent[k]

            v.root.active=(false)
        }
    },


};

module.exports=UITreasureBowl
