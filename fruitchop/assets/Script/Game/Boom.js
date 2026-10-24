var GameG = require("GameGlobal");

/** 炸彈 */
cc.Class({
    extends: cc.Component,

    properties: {
        Type : 0,
        Name : "",
        Pic : cc.SpriteFrame,
        Animation: cc.Animation,
        ThrowSound: {
            default: null,
            type : cc.AudioClip,
        },
        FuseSound: {
            default: null,
            type : cc.AudioClip,
        },
        ExplodeSound: {
            default: null,
            type : cc.AudioClip,
        },
    },

    init(FruitManager, id){
        this.FruitManager = FruitManager
        this.id = id;

        this.RigidBody = this.node.getComponent(cc.RigidBody);
        this.BoxCollider = this.node.getComponent(cc.BoxCollider);

        GameG.PlaySound(this.ThrowSound)

        this.number = GameG.PlaySound(this.FuseSound, true)

        // 避免一出現就撞到牆壁被當作失敗，必須出去再進來
        this.isExit = false
    },

    stopSound(){
        GameG.StopSound(this.number)
        this.number = null
    },

    onCollisionExit(other, self){
        // 避免一出現就撞到牆壁被當作失敗，必須出去再進來
        this.isExit = true
    },
    
	onCollisionEnter(other, self)
	{
        if (other.node.group == "wall"){
            // 避免一出現就撞到牆壁被當作失敗，必須出去再進來
            if (this.isExit == false){
                return
            }

            this.BoxCollider.enabled = false;

            this.stopSound()

            // 不馬上刪掉，等待掉出場外
            setTimeout(function () {
                if (self.node != null && self.node.parent != null){
                    self.node.destroy()
                }
            }.bind(self), 1 * 1000);

            return
        }

        this.RigidBody.active = false;
        this.BoxCollider.enabled = false;

        this.stopSound()

        GameG.PlaySound(this.ExplodeSound)

        // 爆炸位置移到畫面中央
        this.node.position = cc.v2(0, 0)

        // 播放爆炸
        this.Animation.play("boom_boom")

        setTimeout(function () {
            if (self.node != null && self.node.parent != null){
                self.node.destroy();
            }
        }.bind(self), 2 * 1000);

        if (this.FruitManager.GameModel != null){
            this.FruitManager.GameModel.boom()
        }
    }    
});
