var accounting = require('Accounting');
var config = require('MyBaseConfig');
var WinEffect = require(config.SCRIPT.WINEFFECT);

cc.Class({
    extends: cc.Component,
    extends: WinEffect,

    properties: 
    {        
        WinMoneyText:cc.Label,
        WinMoneyEndText:cc.Label,
        winMoneyEffect:cc.Node,
        isStopWinSound:false,
        endClip:
        {
            type: cc.AudioClip,
            default: null,
        },
    },

    start : function()
    {
        this._super()
        this.hideObject()
        
        this.controller = cc.find("Canvas/GameController")
        this.controller = this.controller.getComponent(config.SCRIPT.GAMECONTROLLER)
    },

    // 播放贏分音效
    playWinClip()
    {        
        if(this.audioManager!=null)
        {
            // 如果有FreeSpin
            if(this.audioManager.freeSpinWinClip != null && this.controller.isInFreeSpin == true)
            {
                this.audioManager.playWinSoundSfx(this.audioManager.freeSpinWinClip,false);
            }
            else
            {
                this.audioManager.playWinSoundSfx(this.audioManager.winClip,false);
            }
        }               
    },

    startCoinEffect : function(amount)
    {
        // console.log("Win Amount : " +amount);
        if(amount <=0)
        {
            this.amount =0;
            return;
        }
        if(this.WinMoneyText!=null)
        this.WinMoneyText.node.active = true;
        if(this.WinMoneyEndText!=null)
        this.WinMoneyEndText.node.active = true;
        if(this.winMoneyEffect!=null)
        this.winMoneyEffect.active = true;
        if(this.coinAnim!=null)
        this.coinAnim.play("CoinsEffect");
        for(let i=0;i<this.coinsNum;i++)
        {
            var action = cc.sequence(
                cc.delayTime(((Math.floor(Math.random() * 5))+1)/10),
                cc.callFunc(this.instantiateCoin, this, {}),
            );
            this.node.runAction(action);
        }
        this.amount = amount;
        if(this.WinMoneyText!=null)
        this.WinMoneyText.node.stopAllActions();
        if(this.WinMoneyEndText!=null)
        this.WinMoneyEndText.node.stopAllActions();
        this.startTweenWinValue(this.amount);
        this.playWinClip()
    },

    hideObject : function()
    {
        // console.log("Update Win Effetc Amount to zero ::: ");
        this.updateAmount(0);
        // if(this.audioManager!=null)
        // this.audioManager.stopWinSoundSfx();

        // if(this.isHideWinAmt&&this.WinMoneyText!=null)
        // this.WinMoneyText.node.active = false;
        // if(this.isHideWinAmt&&this.WinMoneyEndText!=null)
        // this.WinMoneyEndText.node.active = false;
        //this.node.active = false;
        
        if(this.WinMoneyEndText!=null)
        this.WinMoneyEndText.node.active = false;
        if(this.winMoneyEffect!=null)
        this.winMoneyEffect.active = false;
    },

    updateAmount : function(amt)
    {
        var temp = accounting.formatNumberPrecision(amt)
        this.setWinMoneyText(temp)
        if(this.WinMoneyEndText!=null)
        this.WinMoneyEndText.string = temp
        if(this.totalWin2!=null)
        this.totalWin2.string = temp;
    },

    startTweenWinValue: function (end) 
    {
        this.unschedule(this.winValueCallBack);
        this.winValueCallBack = null;

        this.tweenWinValue = 0;
        var addValue = 0;
        var tempTimeCount = 20;
        addValue = end / tempTimeCount;
        addValue = Math.floor(addValue);
        if (addValue == 0) 
        {
            addValue = 1;
        }

        //console.log("startNormalTweenWinValue :: "+tempTimeCount +" / " +addValue +" / " + end);
        this.winValueCallBack = function () 
        {
            if (this.tweenWinValue >= end) 
            {
                if(this.isStopWinSound == true)
                {
                    if(this.audioManager!=null)
                    {
                        this.audioManager.stopWinSoundSfx();
                    }
                }
                if(this.endClip != null)
                {
                    this.audioManager.playWinSoundSfx(this.endClip, false);
                }
                var temp = accounting.formatNumberPrecision(end)
                this.setWinMoneyText(temp)
                if(this.WinMoneyEndText!=null)
                this.WinMoneyEndText.string = temp
                if(this.totalWin2!=null)
                this.totalWin2.string = temp;
                this.unschedule(this.winValueCallBack);
                this.winValueCallBack = null;
               
                // if(this.isHideWinAmt)
                // {
                //     var action = cc.sequence(
                //         cc.delayTime(2),
                //         cc.callFunc(this.hideObject,this,{}),
                //     );
                //     if(this.WinMoneyText!=null)
                //     this.WinMoneyText.node.runAction(action);
                //     if(this.WinMoneyEndText!=null)
                //     this.WinMoneyEndText.node.runAction(action);
                // }
                this.node.runAction(cc.sequence(
                    cc.delayTime(1),
                    cc.callFunc(function()
                    {
                        if(this.WinMoneyEndText!=null)
                        this.WinMoneyEndText.node.active = false;
                        if(this.winMoneyEffect!=null)
                        this.winMoneyEffect.active = false;
                    },this)
                ));                 
            } 
            else 
            {
                this.tweenWinValue += addValue;
                
                var temp = accounting.formatNumberPrecision(this.tweenWinValue)
                this.setWinMoneyText(temp)
                if(this.WinMoneyEndText!=null)
                this.WinMoneyEndText.string = temp
                if(this.totalWin2!=null)
                this.totalWin2.string = temp;
            }
        }
        this.schedule(this.winValueCallBack, 0.01);
    },

    // 設定WinMoney文字
    setWinMoneyText(number)
    {
        if(this.WinMoneyText!=null)
        {
            this.WinMoneyText.node.name = number
            this.WinMoneyText.string = number
        }
    },

    // 設定累積贏分
    setAccumulateWinMoney(amount)
    {
        let end = amount
        this.amount = amount;
        
        this.WinMoneyEndText.node.active = true;
        let actions = []
        actions.push(cc.scaleTo(0.2, 1.2))
        actions.push(cc.scaleTo(0.2, 1))
        this.WinMoneyEndText.node.runAction(cc.sequence(actions))
        
        this.unschedule(this.winValueCallBack);
        this.winValueCallBack = null;

        this.tweenWinValue = 0;
        var addValue = 0;
        var tempTimeCount = 20;
        addValue = end / tempTimeCount;
        addValue = Math.floor(addValue);
        if (addValue == 0) 
        {
            addValue = 1;
        }

        this.winValueCallBack = function () 
        {
            if (this.tweenWinValue >= end) 
            {
                this.unschedule(this.winValueCallBack);
                this.winValueCallBack = null;

                var temp = accounting.formatNumberPrecision(end)
                this.WinMoneyEndText.string = temp
            } 
            else 
            {
                this.tweenWinValue += addValue;
                var temp = accounting.formatNumberPrecision(this.tweenWinValue)
                this.WinMoneyEndText.string = temp
            }
        }
        this.schedule(this.winValueCallBack, 0.01);
        this.playWinClip()
    },

    // 播放累積贏分結束
    playAccumulateWinMoneyEnd()
    {
        if(this.isStopWinSound == true)
        {
            if(this.audioManager!=null)
            {
                this.audioManager.stopWinSoundSfx();
            }
        }
        if(this.endClip != null)
        {
            this.audioManager.playWinSoundSfx(this.endClip, false);
        }
        this.winMoneyEffect.active = true;
        this.node.runAction(cc.sequence(
            cc.delayTime(1),
            cc.callFunc(function()
            {
                this.WinMoneyEndText.node.active = false;
                this.winMoneyEffect.active = false;
            },this)
        ));        
    }
});
