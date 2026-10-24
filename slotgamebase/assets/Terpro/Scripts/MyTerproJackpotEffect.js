var config = require('MyBaseConfig');
var accounting = require('Accounting');

cc.Class({
    extends: cc.Component,

    properties: 
    {
        controller:cc.Node,
        audioManager:cc.Node,
        blackOut:cc.Node,
        winPanel:cc.Node,
        coinFX:cc.Node,
        jpNodes:[cc.Node],
        jpWinTexts:[cc.Label],
        jpCountClip:
        {
            default:null,
            type:cc.AudioClip
        },
        jpStartClip:
        {
            default:null,
            type:cc.AudioClip
        },
        jpEndClip:
        {
            default:null,
            type:cc.AudioClip
        },
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () 
    {
        this.controller = this.controller.getComponent(config.SCRIPT.GAMECONTROLLER);
        this.audioManager = this.audioManager.getComponent(config.SCRIPT.AUDIOMANAGER);
    },

    // update (dt) {},

    // 表演JP
    show (jpType, amount)
    {
        // console.log("!!! openJackpotGame")
        this.audioManager.playSound(this.jpStartClip,false)
        this.node.runAction(cc.sequence(
            [
                cc.callFunc(function()
                {
                    let positions = this.controller.kuoyu.getSymbolNodePositions( ["j1"] )
                    for(let i in positions)
                    {
                        let position = positions[i]
                        this.controller.reelMainView.reel[position.reel].symbolView[position.row].isDimSymbol(false)
                        let symbol = this.controller.kuoyu.getSymbol(position.reel, position.row)                        
                        symbol.runAction(cc.sequence(
                            [
                                cc.fadeTo(0.5, 0),
                                cc.fadeTo(0.5, 255),
                                cc.fadeTo(0.5, 0),
                                cc.fadeTo(0.5, 255),
                            ]))
                    }
                },this),
                cc.delayTime(1.8),
                cc.callFunc(function()
                {
                    for(let i in this.jpNodes)
                    {
                        this.jpNodes[i].active = false
                    }
                    let jpIndex = jpType
                    this.jpNodes[jpIndex].active = true
                    this.jpWinTexts[jpIndex].string = ""
                    this.winPanel.scale = 0
                    this.winPanel.active = true
                    this.blackOut.active = true
                    this.winPanel.runAction(cc.sequence(
                        [
                            cc.scaleTo(0.3, 1.2),
                            cc.scaleTo(0.1, 1),
                        ]))
                    this.audioManager.playSound(this.jpCountClip,false)
                },this),
                cc.delayTime(0.3),
                cc.callFunc(function()
                {
                    let jpIndex = jpType
                    this.coinFX.active = true
                    this.startTweenWinValue(this.jpWinTexts[jpIndex], amount)
                },this)
            ]))
    },

    startTweenWinValue (richText, end) 
    {
        this.unschedule(this.winValueCallBack)
        this.winValueCallBack = null

        this.tweenWinValue = 0
        var addValue = 0
        addValue = end / 50
        addValue = Math.floor(addValue)

        if (addValue == 0) 
        {
            addValue = 1
        }
        this.winValueCallBack = function () 
        {
            if (this.tweenWinValue >= end) 
            {
                let temp = accounting.formatNumberPrecision(end)
                let winText = temp
                richText.string = winText
                this.unschedule(this.winValueCallBack)
                this.winValueCallBack = null
                this.audioManager.stopSound(this.jpCountClip)
        
                this.node.runAction(cc.sequence(
                    cc.callFunc(function()
                    {
                        this.audioManager.playSound(this.jpEndClip,false)
                    },this),
                    cc.scaleTo(0.3, 1.3),
                    cc.scaleTo(0.2, 1),
                    cc.delayTime(4),
                    cc.callFunc(function()
                    {
                        this.audioManager.stopSound(this.jpEndClip)
                        for(let i in this.jpNodes)
                        {
                            this.jpNodes[i].active = false
                        }
                        this.winPanel.active = false
                        this.blackOut.active = false
                        this.coinFX.active = false
                        this.controller.resultPresentation();
                    },this)
                ));
            }
            else
            {
                this.tweenWinValue += addValue
                
                let temp = accounting.formatNumberPrecision(this.tweenWinValue)
                let winText = temp
                richText.string = winText
            }
        }
        this.schedule(this.winValueCallBack, 0.01)
    },  
});
