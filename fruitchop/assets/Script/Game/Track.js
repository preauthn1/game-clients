var GameG = require( "GameGlobal")

/** 滑動效果 */
cc.Class({
    extends: cc.Component,

    init(touch, halfWidth, halfHeight, sound) {
        this.touch = touch;
        this.sound = sound

        this.BoxCollider = this.node.getComponent(cc.BoxCollider);

        GameG.PlaySound(this.sound)

        let pos = this.touch.GetTouchPos();
        pos.x = pos.x - halfWidth
        pos.y = pos.y - halfHeight        
        this.node.position = pos;

        let self = this;
        //  更新移動位置
        this.touch.touch_move_callback = function(touchPos){
            touchPos.x = touchPos.x - halfWidth
            touchPos.y = touchPos.y - halfHeight
            self.node.position = touchPos;
        }
        
        // 放開
        this.touch.touch_end_callback = function(){
            self.touch.touch_end_callback = null

            self.BoxCollider.enabled = false;
            
            setTimeout(function () {
                self.node.destroy()
            }.bind(self), 0.5 * 1000);
        }        
    },

    /** 取得滑動方向 */
    GetCourseDirection(){
        if (this.touch == null){
            console.error("this.touch is null")
            return new cc.Vec2(0, 0)
        }

        return this.touch.GetCourseDirection();
    },
});
