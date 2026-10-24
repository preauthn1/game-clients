var commonFunc =  require('CommonFunction')
cc.Class({
    extends: cc.Component,
    extends: require('FishView'),

    properties: {
        fishType: {
            default: 0,
        },
        fish: {
            default: null,
            visible: false,
        },
        gb: {
            default: null,
            visible: false,
        },
        pv: {
            default: null,
            visible: false,
        },
        startPosition: {
            default: null,
            visible: false,
        },
        endPosition: {
            default: null,
            visible: false,
        },
        isDeath: {
            default: false,
            visible: false,
        },
        playerId: {
            default: 0,
            visible: false,
        },
        deathFish: {
            default: false,
            visible: false,
        },
    },

    getFishType() {
        return this.fishType;
    },

    getFishInfo() {
        return this.fish;
    },

    initFish(fishInfo, gb, pv) {
        this.fish = fishInfo;
        this.gb = gb;
        this.pv = pv;

        if (this.fish.lifePoint <= 0) {
            this.gb.removeFish(this);
        }
    },

    speedUpAnimation() {
        this.isDeath = true;
        this.node.getComponent(cc.Collider).enabled = false;
        this.gb.removeFish(this);
    },

    storeDeathInfo(playerId, deathFish) {
        this.gb.removeFish(this);
        this.isDeath = true;
        this.playerId = playerId;
        this.deathFish = deathFish;
    },

    hitFish() {
        this.fishBase.stopAction();
        this.fishBase.runAction(
            cc.sequence(
                cc.tintTo(0.2, 255, 0, 0),
                cc.tintTo(0.7, 255, 255, 255),
            )
        );
    },

    death(playerId, deathFish) {
        this.fishDead = true;
        // var pos = this.node.parent.position;
        // var rotation = this.node.parent.rotation;
        // this.pv.deathFishHolder.insertChild(this.node);
        // this.node.position = pos;
        // this.node.rotation = rotation;
        commonFunc.ChangeParent(this.node,this.pv.deathFishHolder);
        this.pv.deadFish(this.fish.targetId, deathFish.payout,playerId);
        var animation = this.fishDisplay[0].getClips();
        this.fishDisplay[0].play(animation[0].name, 0);
        this.fishDisplay[1].play(animation[0].name, 0);
        this.node.getComponent(cc.Collider).enabled = false;
        this.fishBase.runAction(
            cc.sequence(
                cc.delayTime(0.5),
                cc.fadeOut(0.5),
            )
        );
        this.fishShadow.runAction(
            cc.sequence(
                cc.delayTime(0.5),
                cc.fadeOut(0.5),
            )
        );
        this.scheduleOnce(function () {
            this.node.destroy();
        }, 5);
        this.gb.removeFish(this);
    },
    
    disableFish() {
        this.pv.removeFish(this.fish.targetId);
        this.node.position = this.startPoint;
        this.node.active = false;
    },

    onCollisionEnter: function (other, self) {
        if (other.node.group == "Wall") {

        } else if (other.node.group == "Bullet") {
            this.hitFish();
        }
    },

    onCollisionExit: function (other, self) {
        if (other.node.group == "GameArea") {
            if (!this.fishDead) {
                this.pv.removeFish(this.fish.targetId);
                this.node.active = false;
                this.node.destroy();
            }
        }
    },

    addRoute(original, addOn) {
        var positionX = original.x + addOn.x;
        var positionY = original.y + addOn.y;

        return new cc.v2(positionX, positionY);
    },

    deductRoute(original, addOn) {
        var positionX = original.x - addOn.x;
        var positionY = original.y - addOn.y;

        return new cc.v2(positionX, positionY);
    },
});