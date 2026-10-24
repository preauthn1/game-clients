
cc.Class({
    extends: cc.Component,

    properties: 
    {
        speedBtn:cc.Button,
        speedOnSprite:cc.SpriteFrame,
        speedOffSprite:cc.SpriteFrame,
        speedTimeScaleMax:2,
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () 
    {
        this.speedSprite = this.speedBtn.node.getComponent(cc.Sprite)
        this.speedBtn.node.on('click', this.onSpeedBtn, this);
        this.speedTimeScale = 1
        this.updateSpeed()
    },
    
    // update (dt) {},   

    // 更新速度
    updateSpeed()
    {
        if(this.speedTimeScale == 1)
        {
            this.speedSprite.spriteFrame = this.speedOffSprite
        }
        else
        {
            this.speedSprite.spriteFrame = this.speedOnSprite
        }
        cc.director.getScheduler().setTimeScale(this.speedTimeScale)
    },

    // 按下速度按鈕
    onSpeedBtn()
    {
        if(this.speedTimeScale == 1)
        {
            this.speedTimeScale = this.speedTimeScaleMax
        }
        else
        {
            this.speedTimeScale = 1
        }
        this.updateSpeed()
    },
});
