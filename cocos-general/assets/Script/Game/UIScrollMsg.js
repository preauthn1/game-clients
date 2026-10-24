
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
    
    Show(player, game, type){
        let text = ""
        // 超級紅利獎/BIG BONUS
        if (type == 1){
            text = "BIG BONUS"
        }
        // 紅利獎/REGULAR BONUS
        else if (type == 2){
            text = "REGULAR BONUS"
        }

        let content = "恭喜" + player + "在" + game + "開出" + text
        this.StartScroll(content)
    },

    /**
     * 開始滾動信息
     * @param content 滾動內容
     */
    StartScroll(content)
    {
        if (this.node == null){
            return
        }

        let self = this
        if(content == null || content.length == 0)
        {
            return
        }
        this.node.active = true
        this.contentArr.push(content)

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