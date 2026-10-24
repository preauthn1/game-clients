cc.Class({
    extends: cc.Component,

    properties: {
        speed:{
            visible:false,
            default:0,
        },
        direction:180,
        bulletType:0,
        bulletShotId:0,
        moving:false,
        bulletDisplay:{
            visible:false,
            default:null,
        },
        gunView:{
            visible:false,
            default:null,
        },
    },
    

    onLoad: function () {
        this.bulletDisplay = this.node.getComponent(cc.Animation);
    },

    update: function (dt) {
        if(this.moving){
            var rotationRadians = this.node.rotation * (Math.PI / 180)
            var vX = Math.sin(rotationRadians) * this.speed;
            var vY = Math.cos(rotationRadians) * this.speed;
            this.node.x += vX * dt;
            this.node.y += vY * dt;
        }
    },
});
