cc.Class({
    extends: cc.Component,

    properties: {
        isMySelf: false,
        gunSwitchBtn:cc.Node,
        gunNode: cc.Node,
        gunBase: cc.Node,
        bulletPrefab: cc.Prefab,
        bulletParent: cc.Node,
        bulletTotalTimeInterval: {
            default: 0,
            type: cc.Float,
            visible: false,
        },
        bulletTimeInterval: 0,
        flipC: {
            default: false,
            visible: false,
        },

        bulletList: [cc.Node],
        gunRotation: {
            default: 0,
            type: cc.Float,
            visible: false,
        },
        gunDisplay:{
            default: null,
            visible: false,
        },
        gunType:1,
        autoFire:{
            default: null,
            visible: false,
        },
        firing:{
            default: null,
            visible: false,
        },
        thunderFire:{
            default: null,
            visible: false,
        },
        seatId:1,
        bulletShotId:{
            default: 0,
            visible: false,
        },
        bulletList:{
            default: [],
            visible: false,
        },
        poolView:{
            default: null,
            visible: false,
        },
        seatInfo:{
            default: null,
            visible: false,
        },
        plusBetBtn:cc.Node,
        minusBetBtn:cc.Node,
        betText:cc.Node,
        betAmount:{
            default: 0,
            visible: false,
        },
    },

    onLoad: function () {
       
    },
    setAllGunSetting(){
        var canvas = cc.find('Canvas');
        canvas.on(cc.Node.EventType.TOUCH_START, this.onTouchBegan, this);
        canvas.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        canvas.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
        this.gunDisplay = this.gunBase.getComponent(cc.Animation);
        this.gunSwitchBtn.on('click', this.changeGun, this);
        this.plusBetBtn.on('click', this.addBetValue, this);
        this.minusBetBtn.on('click', this.minusBetValue, this);
        this.resetGun();
    },
    addBetValue(){
        this.poolView.playerChangeBetAmount(+1);
    },

    minusBetValue(){
        this.poolView.playerChangeBetAmount(-1);
    },

    onTouchBegan: function (event) {
        if(this.gunType == 3){
            this.gunNode.rotation = 0;
            return;
        }
        var touchLoc = event.touch.getLocation();
        var gunLoc = this.gunNode.position;
        var angle = Math.atan2(touchLoc.y - gunLoc.y , touchLoc.x - gunLoc.x);
        angle = angle * (180 / Math.PI);
        if (angle < 0) {
            angle = 360 - (-angle);
        }
        angle = (angle - 90) * -1;
        this.gunNode.rotation = angle;
        this.autoFire = true;
        this.firing = true;
    },

    onTouchMove: function (event) {
        if(this.gunType == 3){
            this.gunNode.rotation = 0;
            return;
        }
        var touchLoc = event.touch.getLocation();
        var gunLoc = this.gunNode.position;
        var angle = Math.atan2(touchLoc.y - gunLoc.y , touchLoc.x - gunLoc.x);
        angle = angle * (180 / Math.PI);
        if (angle < 0) {
            angle = 360 - (-angle);
        }
        angle = (angle - 90) * -1;
        this.gunNode.rotation = angle;
        this.autoFire = true;
        this.firing = true;
    },

    onTouchEnd: function (event) {
        this.autoFire = false;
        this.firing = false;
    },

    update: function (dt) {
        this.bulletTotalTimeInterval += dt;
        if (this.bulletTotalTimeInterval >= this.bulletTimeInterval && this.autoFire && this.firing) {
            this.bulletTotalTimeInterval = 0;
            this.fireBullet();
        }

        if (this.bulletTotalTimeInterval >= this.bulletTimeInterval && this.thunderFire) {
            this.bulletTotalTimeInterval = 0;
            this.fireLockedFish();
        }
    },

    fishTouch(position) {
        if(this.gunType == 3){
            this.gunNode.rotation = 0;
            return;
        }
        var touchLoc = position;
        var gunLoc = this.gunNode.position;
        var angle = Math.atan2(touchLoc.y - gunLoc.y , touchLoc.x - gunLoc.x);
        angle = angle * (180 / Math.PI);
        if (angle < 0) {
            angle = 360 - (-angle);
        }
        angle = (angle - 90) * -1;
        this.gunNode.rotation = angle;
        this.fireBullet();
    },
});
