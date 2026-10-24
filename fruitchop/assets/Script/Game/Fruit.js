var GameG = require( "GameGlobal")

/** 水果 */
cc.Class({
    extends: cc.Component,

    properties: {
        Type : 0,
        Name : "",
        Pic : cc.SpriteFrame,
        Effect: cc.Prefab,
        WallEffect: {
            default: [],
            type : cc.Prefab,
        },        
        Sound: {
            default: [],
            type : cc.AudioClip,
        },
        ThrowSound: {
            default: null,
            type : cc.AudioClip,
        },
        MissSound: {
            default: null,
            type : cc.AudioClip,
        },        
        rotateSpeed: 50,
        trackRotateAngle: 0,
    },

    init(FruitManager, id){
        this.FruitManager = FruitManager
        this.id = id;

        this.RigidBody = this.node.getComponent(cc.RigidBody);
        this.Image = this.node.getComponent(cc.Sprite);
        this.BoxCollider = this.node.getComponent(cc.BoxCollider);

        this.ObjectL = cc.find("ObjectL", this.node); // 被切到以後左半部水果
        this.ObjectL.active = false;

        this.ObjectR = cc.find("ObjectR", this.node); // 被切到以後右半部水果
        this.ObjectR.active = false;

        // 播放丟出音效
        GameG.PlaySound(this.ThrowSound)    

        this.isTrack = false;
        
        this.node.angle = GameG.MathRandomBySeed() * 360

        // 避免一出現就撞到牆壁被當作失敗，必須出去再進來
        this.isExit = false
    },

    update(dt){
        if (this.isTrack == false)
            this.node.angle -= this.rotateSpeed * dt;

        this.accTime += dt
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

            GameG.PlaySound(this.MissSound)

            // 不馬上刪掉，等待掉出場外
            setTimeout(function () {
                if (self.node != null && self.node.parent != null){
                    self.node.destroy()
                }
            }.bind(self), 1 * 1000);
            
            this.FruitManager.GameModel.miss(this.Type)
            return
        }

        this.RigidBody.active = false;
        this.Image.enabled = false;
        this.BoxCollider.enabled = false;

        // 旋轉至切面角度
        let direction = other.node.getComponent("Track").GetCourseDirection()
        let trackAngle = Math.atan2(direction.y,direction.x)/Math.PI*180 + 180;
        trackAngle = trackAngle % 360;
        if (trackAngle < 0)
            trackAngle += 360;

        let nodeAngle = this.node.angle;
        nodeAngle = nodeAngle % 360;
        if (nodeAngle < 0)
            nodeAngle += 360;

        let subAngle;
        if (trackAngle > nodeAngle)
            subAngle = trackAngle - nodeAngle;
        else
            subAngle = nodeAngle - trackAngle;
            
        if (subAngle > 120 && subAngle < 240){
            trackAngle = trackAngle - 180;
        }
        trackAngle += this.trackRotateAngle
        this.node.angle = trackAngle;

        // 切擊效果
        this.ObjectL.active = true;
        this.ObjectL.getComponent(cc.RigidBody).linearVelocity = cc.v2(-100, 300);

        this.ObjectR.active = true;
        this.ObjectR.getComponent(cc.RigidBody).linearVelocity = cc.v2(100, 300);

        if (GameG.MathRandomBySeed() > 0.5){
            GameG.PlaySound(this.Sound[0])
        }
        else{
            GameG.PlaySound(this.Sound[1])
        }

        this.FruitManager.showWallEffect(this.WallEffect, this.node)

        /** 水果噴汁特效 */
        if (this.Effect != null){
            let effectObj = cc.instantiate(this.Effect);
            effectObj.active = true;
            effectObj.parent = this.node.parent;
            effectObj.scale = this.node.scale;
            effectObj.position = this.node.position;
        }

        this.isTrack = true

        if (this.Rotate){
            this.Rotate.enabled = false;
        }

        setTimeout(function () {
            if (self.node != null && self.node.parent != null){
                self.node.destroy()
            }
        }.bind(self), 2 * 1000);

        this.FruitManager.GameModel.hite(this.id);
    }
});
