var GameG = require("GameGlobal")
var GameData = require("GameData")

cc.Class({
    extends : cc.Component,

    properties : {
        player : require("UIPlayer"),
        cueBall : require("CueBall"), // 桌面上具有物理的球
        controlBall : require("ControlBall"), // 介面上和用來表演的球
        range : cc.Node, // 力道範圍
        posBar : cc.Slider, // 用來調整球位置
        arrow : cc.Node, // 方向元件
        velocity : cc.Node, // 方向力道指標
        flyInPos : cc.Vec2, // 母球飛向桌子的開始位置
    },

    init(UIGame){
        this.UIGame = UIGame

        this.node.on(cc.Node.EventType.TOUCH_START, this.onMouseDown, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.onMouseUp, this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onMouseMove, this);
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.onMouseUp, this);

        this.cueBall.init(this)
        this.controlBall.hide();
        this._mouseDown=false;
        this.range.active = false
        this.posBar.node.active = false;
        this.arrow.active=false;
        this.updatePlayTime = false
        this.canPlayTime = 0

        this.hide()
    },

    show() {
        this.node.active = true;
        this._mouseDown=false;
        this.posBar.node.active = true;
        this.arrow.active=false;
        this.range.active = false;
        
        // 指定倒數時間
        this.roundTime = GameData.getRoundTime();
        this.updatePlayTime = true;
        this.canPlayTime = this.roundTime;

        this.player.begin();
    },
    
    hide(){
        this.node.active = false;
    },

    hideCueBall(){
        this.cueBall.hide();
    },

    end(){
        this._mouseDown=false;
        this.posBar.progress=0.5
        this.updatePos()        
        this.posBar.node.active = false;
        this.arrow.active = false;
        this.range.active = false;
        this.controlBall.hide();

        this.updatePlayTime = false;

        this.player.updateFrame(0)
    },

    onMouseDown(event) {
        if (this.updatePlayTime == false){
            return
        }

        // 和其他球重疊時無法指定力道
        if (this.controlBall.isCollision() == true){
            return
        }

        this._mouseDown=true;
        this.touchPos=event.getLocation();

        this.velocity.width = 0;
        this.range.active = true;
        this.range.width = 0;   
    },

    onMouseMove(event) {
        if (this._mouseDown == false) {
            return;
        }

        this.posBar.node.active=false;

        // 計算並顯示力道
        var loc = event.getLocation();
        let dir = loc.sub(this.touchPos);
        let mag = dir.mag();
        if (mag > this.UIGame.maxLength){
            mag = this.UIGame.maxLength
        }
        this.velocity.width = mag;

        // 力道範圍
        let self_mag = mag * 0.5;
        this.range.width = self_mag;
        this.range.height = self_mag;

        // 顯示旋轉角度
        let angle=this.V2Angle(dir) - 90;
        this.arrow.active=true;
        this.arrow.angle=angle;        
    },

    onMouseUp(event) {
        if (this._mouseDown == false) {
            return;
        }

        this._mouseDown = false;

        // 計算力道
        let dir=this.touchPos.sub(event.getLocation());
        let direction=dir.normalize();
        let velocity=dir.mag();
        // 力量太小
        if (velocity == 0){
            return
        }
        // 修正        
        if (velocity > this.UIGame.maxLength){
            velocity = this.UIGame.maxLength
        }

        velocity = Math.sqrt(velocity);
        velocity = velocity * this.UIGame.velocityAddition;
        velocity = direction.mul(velocity);

        this.cueBall.addVelocity(velocity);

        this.end()
    },

    // 球停止
    onwballSleep() {
        this.UIGame.ballStop()
    },

    //給v2向量，計算出面向的角度，-90向上, 返回角度angel,類型number
    V2Angle(v, offset) {
        offset=offset || - 90;
        return Math.atan2(v.y, v.x) / Math.PI * 180 + offset;
    },

    /** 更新其他玩家資料
     * pos bar和球位置
     * angle 方向
     * velocity 力道
    */
    updateBarPos(pos, angle, velocity){
        this.posBar.progress = pos;
        this.posBar.angle = angle;
        this.velocity.width = velocity;
    },

    update(dt) {
        // 倒數
        if (this.updatePlayTime == false){
            return
        }

        this.canPlayTime -= dt

        let value = this.canPlayTime / this.roundTime
        if (value <= 0){
            value = 0
            this.end()
            this.flyBall(this.flyInPos, 100, true)
            this.UIGame.timeOut()
        }
        this.player.updateFrame(value)
    },

    updatePos(){
        let pos=this.node.position;
        pos.x=this.posBar.handle.node.position.x;
        this.node.position=pos;
    },

    /** 母球進洞 */
    cueBallInHole(type, index){
        this.UIGame.cueBallInHole(type, index)
    },

    /** 重新設定控制球位置 */
    resetBall(){
        this.cueBall.hide()
        this.controlBall.showError(false)

        // 設定控制球在物理球位置
        let pos = this.cueBall.getPosition()
        this.controlBall.setPosition(pos)
        this.flyBall(cc.v2(0,0), 255, false)
    },

    /** 母球從玩家飛向桌子 */
    ballFlyIn(){
        this.controlBall.showError(false)

        // 設定控制球在畫面外
        this.controlBall.setPosition(this.flyInPos)
        this.controlBall.node.opacity = 100
        this.flyBall(cc.v2(0,0), 255, false)
    },

    /** 母球桌子飛向玩家 */
    ballFlyOut(){
        if (this.cueBall.isShow() == false){
            return
        }

        this.cueBall.hide()
        this.controlBall.showError(false)

        // 設定控制球在物理球位置
        let pos = this.cueBall.getPosition()
        this.controlBall.setPosition(pos)
        this.flyBall(this.flyInPos, 100, true)
    },

    /** 母球飛向桌子 */
    flyBall(endPos, opacity, isHide){
        this.node.active = true;
        this.controlBall.show();

        // 控直球飛到原點
        let self = this
        let tween = GameG.NewTween(this.controlBall.node)
        tween.to(0.5, {position: endPos, opacity: opacity})
        tween.call(function(){
            if (isHide == true){
                self.hide()
            }
            else {
                self.show()
                self.controlBall.showError(true)
                self.controlBall.updateError()
            }
        })
        tween.start()
    },
});
