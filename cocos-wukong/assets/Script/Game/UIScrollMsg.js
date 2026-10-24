
cc.Class({
    extends: cc.Component,

    properties: {
        maskNode: {
            default: null, 
            type: cc.Node,
        },
        label: {
            default: null, 
            type: cc.Label,
        },
        speed: 100,     
    },
    
    onLoad()
    {
        this.startPos = cc.v2(this.maskNode.width/2,0)

        this.contentArr = []
        this.node.active = false
        this.label.node.position = this.startPos
    },

    /**
     * 開始滾動信息
     * @param content 滾動內容
     */
    startScroll(content)
    {
        let self = this
        if(content == null || content.length == 0)
        {
            return
        }
        this.node.active = true
        this.contentArr.push(content)

        // if(self.label.node.getActionByTag(0) != null && this.label.node.getActionByTag(0).isDone() == false)//如果正在播放只插入數據
        if (self.tweenId != null)
        {
            return
        }

        let scrollFunc = function()
        {
            if(self.contentArr.length > 0)
            {
                self.label.string = self.contentArr.shift()
                //需要先更新標籤的寬度，不然下一幀才更新，這裏取到的值就會是原來的值，導致寬度計算錯誤
                self.label._forceUpdateRenderData()
                let startPos = cc.v2(self.startPos.x, self.startPos.y)
                startPos.x += self.label.node.width * 0.5
                // self.label.node.position = self.startPos
                self.label.node.position = startPos
                let distance = self.label.node.width + self.label.node.parent.width
                let duration = distance / self.speed

                self.tweenId = cc.tween(self.label.node)
                .by(duration, { position : cc.v2(-distance,0) })
                .call(function () {
                    self.label.string = ""
                    self.label.node.position = self.startPos
                    self.tweenId = null
                    scrollFunc()
                })
                .start()
                
                // let seq = cc.sequence(
                //     cc.moveBy(duration,cc.v2(-distance,0)),
                //     cc.callFunc(function(){
                //         self.label.string = ""
                //         self.label.node.position = self.startPos
                //         scrollFunc()
                //     })
                // )
                // seq.setTag(0)
                // self.label.node.runAction(seq)
            }
            else
            {
                self.node.active = false
            }
        }
        scrollFunc()
    },

    onDestroy()
    {
        if (this.label.node == null){
            return
        }
        
        if(this.label.node.getActionByTag(0) != null )
        {
             this.label.node.stopAction(this.label.node.getActionByTag(0))
        }
    }
});