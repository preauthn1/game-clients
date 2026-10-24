var config = require('MyBaseConfig');
var EventManager = require(config.SCRIPT.REGISTEREVENT)

cc.Class({
    extends: cc.Component,

    properties: 
    {        
        eventManager:EventManager,
        // 需要表演的Symbol名稱
        animatedSymbolName:[cc.String],
        // 動畫關閉時間
        animTime:0,
        // 停輪觸發動畫
        effectAnim:[cc.Animation],
        // 停輪觸發位置
        targetPosNode:[cc.Node],
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () 
    {
        for(let i in this.effectAnim)
        {
            if(this.effectAnim[i] != null)
            {
                this.effectAnim[i].node.postion = this.targetPosNode[i].postion
            }
        }
    },
    
    // update (dt) {},    
    
    // data : [[1,1,1,1,1],[1,1,1,1,1],[1,1,1,1,1]]
    // data = fullReelData
    // isPlay = 是否Symbol要播放動畫
    playEffect(data, isPlay)
    {
        let isShow = false
        let reelData = data.fullReelData.slice(0)
        // 顛倒 - 因為Symbol第一個從下面開始算起
        reelData = reelData.reverse()
        // 飛蝙蝠
        for (let i in reelData)
        {
            for (let j in reelData[i])
            {
                let symbolName = reelData[i][j]
                
                if(this.animatedSymbolName.includes(symbolName))
                {
                    let reel = parseInt(j)
                    let row = parseInt(i)
                    let index = row * reelData[i].length + reel

                    if(this.effectAnim[index] != null)
                    {
                        if(isPlay == true)
                        {
                            this.eventManager.sendEventWithParam(config.EVENT.ENABLEWINFRAME,
                            {
                                x:reel,
                                y:row,
                                symbol:symbolName,
                            });
                        }
                        this.effectAnim[index].node.active = true
                        this.effectAnim[index].play()

                        this.node.runAction(cc.sequence(
                            cc.delayTime(this.animTime),
                            cc.callFunc(function()
                            {
                                this.effectAnim[index].node.active = false
                            },this)
                        ));
                        isShow = true
                        // console.log("播放特效 : " + index)
                    }
                }
            }
        }
        return isShow
    },

    disableAllSymbolAnim()
    {        
        this.eventManager.sendEventWithParam(config.EVENT.ENABLEWINFRAME,
        {
            x:-1,
            y:-1,
        });
    }
});
