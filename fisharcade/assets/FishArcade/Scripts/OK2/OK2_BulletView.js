cc.Class({
    extends: cc.Component,
    extends: require('BulletView'),

    properties: {

    },

    init(rotation, bulletType, seatId, bulletShotId, gunView){
        this.node.rotation = rotation;
        this.moving = true;
        this.bulletType = bulletType;
        this.seatId = seatId;
        this.bulletShotId = bulletShotId;
        this.gunView = gunView;
        if(this.bulletType == 1){
            this.speed = 1000;
            this.bulletDisplay.play("OK2_bullet_0" +  this.bulletType + "_move", 0);	
        }
        else if(this.bulletType == 2){
            this.speed = 1500;
            this.bulletDisplay.play("OK2_bullet_0" +  this.bulletType + "_move", 0);	
        }
    },

    onCollisionEnter: function (other, self) {
        if(other.node.group == "Wall"){
            if(other.node.name == "TopCollider" || other.node.name == "BtmCollider"){
                this.node.rotation = -(this.node.rotation + 180);
            }
            else{
                this.node.rotation = -this.node.rotation;
            }
        }
        else if(other.node.group == "Fish"){
            this.moving = false;
            var fb = other.node.getComponent("OK2_FishView");
            var target = [];
            target.push(fb.getFishInfo().targetId);
            this.gunView.hitUnit(1, this.bulletType, target , this.bulletShotId);
            if(this.bulletType == 1){
                this.speed = 1000;
                this.node.getComponent(cc.BoxCollider).enabled = false;
                this.bulletDisplay.play("OK2_bullet_0" +  this.bulletType + "_dead_0" + this.seatId, 0);	
                this.bulletDisplay.on('finished', function(event) {
                    this.node.destroy();	
                }, this);
            }
            else if(this.bulletType == 2){
                this.speed = 1500;
                this.node.getComponent(cc.BoxCollider).enabled = false;
                this.bulletDisplay.play("OK2_bullet_0" +  this.bulletType + "_dead", 0);	
                this.bulletDisplay.on('finished', function(event) {
                    this.node.destroy();	
                }, this);
            }
        }
    },
});
