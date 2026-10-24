cc.Class({
    extends: cc.Component,
    
    onLoad () {
        this.btnStart = this.node.getComponent(cc.Button)

        //声明触摸时间变量
        this.touchFlag = false;
        this.touchStartTime = null;
        //添加按钮触摸监听 长按弹托管弹窗列表
        this.btnStart.node.on(cc.Node.EventType.TOUCH_START, this.touchStart, this);
        this.btnStart.node.on(cc.Node.EventType.TOUCH_END, this.touchEnd, this);
    },

    //触摸开始
    touchStart(){
        //触摸开始 
        this.touchFlag = true;
        //记录下触摸开始时间
        this.touchStartTime = new Date();
    },

    //长按检测函数
    touchHold(){
        if(this.touchFlag && this.touchStartTime != null){
            //判断按钮的按压时长
            let touchHoldTime = new Date();
            let milliseconds = touchHoldTime.getTime() - this.touchStartTime.getTime();
            if(milliseconds > 300){
                this.touchFlag = false;
                //触发托管事务逻辑 
                //todo...
            }
        }
    },

    //触摸结束
    touchEnd(){
        this.touchFlag = false;
        this.touchStartTime = null;
        //出发单击事务逻辑
        //todo...
    },

    update (dt) {
        //判断是否检测按钮长按状态
        if(this.touchFlag){
            this.touchHold();
        }
    },
});