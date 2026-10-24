cc.Class({
    extends: cc.Component,
    extends: require('GunView'),

    properties: {
        gunInfoContent:cc.Node,
        gunBetContent:cc.Node,
        playerInfoContent: cc.Node,
        gunContent: cc.Node,
        gunHead: cc.Node,
        thunderBullet: cc.Node,
        lockedFish: {
            visible: false,
            default: null,
        },
    },


    init(gunInfoList, poolView, seatInfo, isOwn) {
        if(isOwn){
            this.setAllGunSetting();
        }
        else
        this.resetGun();
        
        this.poolView = poolView;
        this.seatInfo = seatInfo;
        this.bulletList = [];
        this.gunNode.active =true;
        this.gunInfoContent.active =true;
        this.gunBetContent.active =true;
        this.playerInfoContent.getComponent("OK2_PlayerView").show(seatInfo, true, false);
        this.updateBetAmount(seatInfo.playerId, seatInfo.previosBetValue);
    },

    updatePlayerCredit(playerId, credit) {
        this.playerInfoContent.getComponent("OK2_PlayerView").updatePlayerCredit(credit);
    },

    updateBetAmount(playerId, betAmount){
        this.betText.getComponent(cc.Label).string = betAmount;
        this.betAmount = betAmount;
    },

    resetGun() {
        this.gunDisplay.play("OK2_weapon_0" + this.gunType + "_move", 0);
        if (this.gunType == 3) {
            this.gunNode.rotation = 0;
        }

        if (this.gunType == 1) {
            this.bulletTimeInterval = 0.3;
            this.lockedFish = null;
            this.thunderFire = false;
            this.thunderBullet.getComponent("OK2_ThunderView").resetTarget();
        } else if (this.gunType == 2) {
            this.bulletTimeInterval = 0.2;
            this.lockedFish = null;
            this.thunderFire = false;
            this.thunderBullet.getComponent("OK2_ThunderView").resetTarget();
        } else if (this.gunType == 3) {
            this.bulletTimeInterval = 0.5;
        }
    },

    selectedFish(fish) {
        if (this.gunType == 3) {
            this.lockedFish = fish;
            this.thunderFire = true;
            this.thunderBullet.getComponent("OK2_ThunderView").setTarget(fish);

        }
    },

    removeSelectedFish(fish) {
        if (this.gunType == 3) {
            this.lockedFish = null;
            this.thunderFire = false;
            this.thunderBullet.getComponent("OK2_ThunderView").removeTarget(fish);
        }
    },

    changeGun() {
        this.gunType += 1;
        if (this.gunType > 3) {
            this.gunType = 1;
        }
        this.resetGun();
    },

    fireBullet() {
        var gunShoot = new OK2_GunShoot();
        gunShoot.init(this.seatInfo.playerId, this.gunType, this.gunNode.rotation, this.betAmount);
        this.poolView.updateOwnGunShoot(gunShoot);
    },

    pressFireButton(gunShoot) {
        var bullet = cc.instantiate(this.bulletPrefab);
        bullet.parent = this.bulletParent;
        var position = this.bulletParent.convertToNodeSpaceAR(this.gunHead.parent.convertToWorldSpaceAR(this.gunHead.getPosition()));
        bullet.position = position;
        bullet.getComponent("OK2_BulletView").init(this.gunNode.rotation, this.gunType, this.seatId, gunShoot.shootId, this);
        this.gunDisplay.play("OK2_weapon_0" + this.gunType + "_shoot", 0);
        this.gunDisplay.on('finished', function (event) {
            this.gunDisplay.play("OK2_weapon_0" + this.gunType + "_move", 0);
        }, this);
        this.bulletShotId = gunShoot._hootId;
        this.bulletList.push(bullet);
    },

    hitUnit(betAmount, gunType, fishHit, shootId) {
        this.poolView.updateHitedFishes(fishHit, gunType, shootId);
    },

    fireLockedFish() {
        this.lockedFish.getComponent("OK2_FishView").lockedHitFish();
    },

    returnPosition() {
        return this.gunContent.position;
    },

});