cc.Class({

    extends:cc.Component,

    // 計時開始
    start(panel, richText, endTime, showTime, callback)
    {
        this.panel = panel
        this.richText = richText
        this.endTime = endTime
        this.showTime = showTime
        this.callback = callback
        this.timeDelta = 0

        // console.log("start")
        if(this.isCountDown == true)
        {
            return
        }
        this.isCountDown = true
        this.timeDelta = this.endTime
        this.schedule(this.invoke, 1)
        if(this.panel != null)
        {
            this.panel.active = false
        }
    },

    // 計時停止
    stop()
    {
        // console.log("stop")
        this.isCountDown = false
        this.unschedule(this.invoke)
        if(this.panel != null)
        {
            this.panel.active = false
        }
    },

    // 調用倒數
    invoke()
    {
        // console.log("countDown")
        this.timeDelta--

        if(this.timeDelta <= this.showTime)
        {
            if(this.panel != null)
            {
                this.panel.active = true
            }
            if(this.richText != null)
            {
                this.richText.string = this.timeDelta
            }
        }

        if(this.timeDelta == 0)
        {
            // console.log("開始自動選擇")
            if(this.callback != null)
            {
                this.callback()
            }
            // 停止倒數
            this.stop()
        }
    },
});