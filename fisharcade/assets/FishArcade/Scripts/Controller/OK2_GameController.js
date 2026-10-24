var dataManager = require("OK2_FishDataManager")
cc.Class({
    extends: cc.Component,

    properties: {
        gameView: cc.Node,
        gameViewScript: {
            visible: false,
            default: null
        }
    },

    onLoad: function () {
        this.gameViewScript = this.gameView.getComponent("OK2_GameView");
    },

    startConnect() {
        dataManager.registerListener(this, 2, null);
    },

    initGame(game, fishList, seatInfoList, playerId) {
        this.gameViewScript.initGame(game, fishList, seatInfoList, playerId);
    },

    updateHitedFishes(fishes, weaponType, shootId) {
        dataManager.updateFishGetHit(fishes, weaponType, shootId);
    },

    updateGunType() {
        dataManager.updateGunType(null);
    },

    updateOwnGunMove(gunMove) {
        dataManager.updateGunMove(gunMove);
    },

    updateGunShoot(gunShoot) {
        dataManager.updateGunShoot(gunShoot);
    },

    updateOwnGunType(gunChanged) {
        dataManager.updateGunType(gunChanged);
    },

    updateBetAmount(playerId, betAmount) {
        this.gameViewScript.updateBetAmount(playerId, betAmount);
    },

    updateAllGunMove(gunMove) {
        this.gameViewScript.updateAllGunMove(gunMove);
    },

    updatePlayerCredit(playerId, credit) {
        this.gameViewScript.updatePlayerCredit(playerId, credit);
    },

    updateAllGunShoot(gunShoot) {
        this.gameViewScript.updateAllGunShoot(gunShoot);
    },

    updateOwnShoot(gunShoot) {
        this.gameViewScript.updateOwnShoot(gunShoot);
    },

    updateAllGunType(gunChanged) {
        this.gameViewScript.updateAllGunType(gunChanged);
    },

    updateFishDeath(playerId, weaponId, credit, deathInfo) {
        this.gameViewScript.updateFishDeath(playerId, weaponId, credit, deathInfo);
    },

    receiveOwnGunShoot(gunShoot) {
        this.gameViewScript.receiveOwnGunShoot(gunShoot);
    },

    receiveRoundUpdate(roundNum) {
        this.gameViewScript.receiveRoundUpdate(roundNum);
    },

    receiveSpecialWeapon(shootId, weaponType, isOwnSw) {
        this.gameViewScript.receiveSpecialWeapon(shootId, weaponType, isOwnSw);
    },

    receiveSitInFail(status) {
        this.gameViewScript.receiveSitInFail(status);
    },

    onGameRoundUpdate(fishList, curGame) {
        this.gameViewScript.onGameRoundUpdate(fishList, curGame);
    },

    onReceivePlayerSitIn(playerInfo, thisPlayerSeatNum) {
        this.gameViewScript.onReceivePlayerSitIn(playerInfo, thisPlayerSeatNum);
    },

    receiveNextBatchFish(fishList, curGame) {
        this.gameViewScript.receiveNextBatchFish(fishList, curGame);
    },

    receiveSwObj(swObj) {
        this.gameViewScript.receiveSwObj(swObj);
    },

    checkNextGun() {
        this.gameViewScript.checkNextGun();
    },

    checkPlayerCredit(credit) {
        this.gameViewScript.checkPlayerCredit(credit);
    },

    playerChangeBetAmount(changeValue) {
        dataManager.changeBetAmount(changeValue);
    },
});