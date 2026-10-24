var accounting = require('Accounting');
var BigWinEffect = require('BigWinEffect');

var StatueEnum = cc.Enum(
    {
        Run: 0,
        RunEnd: 1,            
        End: 2,
    });

cc.Class({
    extends: cc.Component,
    extends: BigWinEffect,

    properties: 
    {
        jackpotEffect:cc.Node,
        bigWinTimerCountMax:5,
        megaWinTimerCountMax:8,
        autoCloseDelayTime:30,
        bigWinClip:
        {
            type:cc.AudioClip,
            default:null,
        },
        megaWinClip:
        {
            type:cc.AudioClip,
            default:null,
        },
        winrollingClip:
        {
            type:cc.AudioClip,
            default:null,
        },
        winrollingendClip:
        {
            type:cc.AudioClip,
            default:null,
        },
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () 
    {
        this._super()
        // 預設關閉. Controller在start會將她打開, this.start完畢後關閉
        this.node.active = false

        if(this.jackpotEffect != null)
        {
            this.jackpotEffect = this.jackpotEffect.getComponent("MyTerproJackpotEffect")
        }
    },

    onKeyDown: function (event) 
    {
        // console.log(event.keyCode);
        switch (event.keyCode) 
        {           
           case 32: //Space
           this.WinEnd()
           break;
        }
    },
    
    // update : function(dt) { },

    startJackpotEffect(data)
    {
        if(this.jackpotEffect == null)
        {
            return
        }
        let typeJP = parseInt(data[0])-1;
        let amount = data[1];
        this.jackpotEffect.show(typeJP, amount)
    },

    startBigWinEffect : function(amount)
    {
        this.winType = "BigWin"
        this.statue = StatueEnum.Run
        this.audioManager.playSymbolSoundSfx(this.winrollingClip,true)
        this.audioManager.playSymbolSoundSfx(this.bigWinClip,false)
        this.node.stopAllActions()
        this.node.active = true
        this.amount = amount
        this.loopTime = 200
        if(this.button!=null)
            this.button.active = false
        if(this.jpButton!=null)
            this.jpButton.active = false
        this.startTweenWinValue(this.amount)
        this.animation = this.node.getComponent(cc.Animation)
        this.animation.play("BigWin_BigStart")

        this.node.runAction(cc.sequence(
            cc.delayTime(1),
            cc.callFunc(function()
            {
                this.animation.play("BigWin_BigIdle")
            }, this),
            cc.callFunc(this.playPopUpSfx, this),
            cc.delayTime(0.5),
            cc.callFunc(this.playBigWinSfx, this),
        ));

        return 2;
    },

    startMegaWinEffect : function(amount)
    {
        this.winType = "MegaWin"
        this.isPlayMegaWinAnimation = false
        this.statue = StatueEnum.Run
        this.audioManager.playSymbolSoundSfx(this.winrollingClip,true)
        this.audioManager.playSymbolSoundSfx(this.bigWinClip,false);
        this.node.stopAllActions();
        this.node.active = true;
        this.amount = amount;
        this.loopTime = 400;
        if(this.button!=null)
            this.button.active = false;
        if(this.jpButton!=null)
            this.jpButton.active = false;
        this.startTweenWinValue(this.amount);
        this.animation = this.node.getComponent(cc.Animation)
        this.animation.play("BigWin_BigStart")

        this.node.runAction(cc.sequence(
            cc.delayTime(1),
            cc.callFunc(function()
            {
                this.animation.play("BigWin_BigIdle")
            }, this),
            cc.delayTime(3),
            cc.callFunc(this.playMegaWinAnimation, this),
        ));

        this.node.runAction(cc.sequence(
            cc.callFunc(this.playPopUpSfx, this),
            cc.delayTime(0.5),
            cc.callFunc(this.playBigWinSfx, this),
        ));

        return 4;
    },

    playMegaWinAnimation : function()
    {
        if(this.isPlayMegaWinAnimation == true)
        {
            return
        }
        this.isPlayMegaWinAnimation = true
        this.node.stopAllActions()
        // 播放MegaWin
        this.audioManager.playSymbolSoundSfx(this.megaWinClip, false)
        this.animation = this.node.getComponent(cc.Animation)
        this.animation.play("BigWin_MegaStart")

        this.node.runAction(cc.sequence(
            cc.delayTime(1),
            cc.callFunc(function()
            {
                this.animation.play("BigWin_MegaIdle")
            }, this),
        ));
    },
    
    startTweenWinValue: function (end) 
    {
        this.text.string = 0
        this.unschedule(this.winValueCallBack);
        this.winValueCallBack = null;

        this.tweenWinValue = 0;
        var addValue = 0;
        var tempTimeCount = this.loopTime;
        addValue = end / tempTimeCount;
        addValue = Math.floor(addValue);
        if (addValue == 0) {
            addValue = 1;
        }
        //console.log("startNormalTweenWinValue :: "+tempTimeCount +" / " +addValue +" / " + end);
        this.winValueCallBack = function () 
        {
            if (this.tweenWinValue >= end) 
            {
                this.WinEnd()
            }
            else 
            {
                this.tweenWinValue += addValue;
                
                var temp = accounting.formatNumberPrecision(this.tweenWinValue);
                //console.log("startNormalTweenWinValue :: "+this.tweenWinValue +" / " +temp );
                this.text.string = temp;
                // this.jpText.string = temp;
            }
        }
        this.schedule(this.winValueCallBack, 0.01);
    },

    // 結束表演
    WinEnd()
    { 
        switch(this.statue )
        {
            case StatueEnum.Run:
                {
                    this.statue = StatueEnum.RunEnd
                    break
                }

            case StatueEnum.RunEnd:
                {
                    this.statue = StatueEnum.End
                    this.node.stopAllActions()
                    this.disableBigWinEffect();
                    return
                }

            case StatueEnum.End:
                {
                    return
                }
        }
        this.isWinValueEnd = true
        this.audioManager.stopAllSfx()
        this.audioManager.playSymbolSoundSfx(this.winrollingendClip, false)
        var temp = accounting.formatNumberPrecision(this.amount)
        this.text.string = temp;
        // this.jpText.string = temp;
        if(this.winValueCallBack != null)
        {
            this.unschedule(this.winValueCallBack);
            this.winValueCallBack = null;
        }
        if(this.button!=null)
            this.button.active = true;
        if(this.jpButton!=null)
            this.jpButton.active = true;
        // this.audioController.stopBigWin();

        if(this.winType == "MegaWin")
        {
            this.playMegaWinAnimation()
        }

        this.node.runAction(cc.sequence(
            cc.delayTime(3),
            cc.callFunc(function()
            {
                this.disableBigWinEffect();
            },this)
        ));
    },

    // 取得小數點幾位
    getPrecision(value)
    {
        return ((value % 1) > 0) ? 2 : 0
    }
});
