cc.Class({
    extends: cc.Component,
    extends: require('GameView'),

    properties: {
        pendingGunList: {
            default: [],
            visible: false,
        },
        playerId: {
            default: 0,
            visible: false,
        },
    },

    onLoad: function () {
        this.gameControllerScript = this.gameController.getComponent("OK2_GameController");
        this.poolViewScript = this.poolView.getComponent("OK2_PoolView");
        this.frameViewScript = this.frameView.getComponent("OK2_FrameView");
        this.backgroundView = this.backgroundView.getComponent("OK2_BackgroundView");
    },

    initGame(game, fishList, seatInfoList, playerId) {
        var time = 300 - game.curGameTime;
        if (time < 0) {
            time = 0;
        }
        this.poolViewScript.init(this, fishList, null, seatInfoList, game.curGameTime, playerId);
        this.playerId = playerId;
        this.frameViewScript.init(game);
        this.backgroundView.backgroundLoading();
        if (game.roundId > -1) {
            this.startGame();
            this.curGame = game;
        }
    },

    update(dt) {
        if (this.gameStart) {
            this.frameViewScript.setCurTime(dt);
            if (this.frameViewScript.getCurTime() < this.curGame.maxGameTime) {
                this.poolViewScript.updateAllGroup(this.frameViewScript.getCurTime());
            } else {
                this.gameStart = false;
                this.endGame();
            }
        }
    },

    startGame() {
        this.gameStart = true;
        this.frameViewScript.startGame();
    },

    endGame() {
        this.frameViewScript.endGame();
        this.poolViewScript.endGameGroup();
    },

    updateTime(currentTime) {
        this.poolViewScript.updateCurrentTime(currentTime);
    },

    playerChangeWeapon() {
        this.gameControllerScript.updateGunType();
    },

    updateOwnGunMove(gunMove) {
        this.gameControllerScript.updateGunMove(gunMove);
    },

    updateOwnGunShoot(gunShoot) {
        this.gameControllerScript.updateGunShoot(gunShoot);
    },

    updateOwnGunType(gunChanged) {
        this.gameControllerScript.updateGunType(gunChanged);
    },

    updateBetAmount(playerId, betAmount) {
        this.poolViewScript.updateBetAmount(playerId, betAmount);
    },

    updateHitedFishes(fishes, weaponType, shootId) {
        this.gameControllerScript.updateHitedFishes(fishes, weaponType, shootId);
    },

    updateAllGunMove(gunMove) {
        this.poolViewScript.updateAllGunMove(gunMove);
    },

    updatePlayerCredit(playerId, credit) {
        this.poolViewScript.updatePlayerCredit(playerId, credit);
    },

    updateAllGunShoot(gunShoot) {
        if (this.playerId == gunShoot.playerId)
            return;

            this.poolViewScript.updateAllGunShoot(gunShoot);
    },

    updateOwnShoot(gunShoot) {
        this.poolViewScript.updateAllGunShoot(gunShoot);
    },

    updateAllGunType(gunChanged) {
        if (gunChanged.gunType == -1)
            return;

        this.poolViewScript.updateAllGunType(gunChanged);
    },

    updateFishDeath(playerId, weaponId, credit, deathInfo) {
        this.poolViewScript.onFishStatusUpdate(playerId, weaponId, credit, deathInfo);
    },

    receiveOwnGunShoot(gunShoot) {
        this.poolViewScript.receiveOwnGunShoot(gunShoot);
    },

    receiveRoundUpdate(roundNum) {
        if (roundNum == 2) {
            this.poolViewScript.resetDict();
            this.poolViewScript.playerShootStatus(true);
        }
    },

    receiveSpecialWeapon(shootId, weaponType, isOwnSw) {

    },

    receiveSitInFail(status) {
        if (status == 1) {
            console.log("An error occurred while joining table. Please try again.");
        } else if (status == 2) {
            console.log("Sit In Fail - Table Full");
        }
    },

    onGameRoundUpdate(fishList, curGame)
    {
        this.curGame = curGame;
        this.poolViewScript.roundUpdate(fishList, curGame);
        this.poolViewScript.playerShootStatus(false);
        this.frameViewScript.init(curGame);
        this.startGame ();
    },

    onReceivePlayerSitIn(playerInfo, thisPlayerSeatNum)
    {
        this.poolViewScript.sitInSuccess(playerInfo, thisPlayerSeatNum);
    },

    receiveNextBatchFish(fishList, curGame)
    {
        this.poolViewScript.receiveNextBatchFish(fishList, curGame);
    },

    receiveSwObj(swObj)
    {
    },

    checkNextGun()
    {
    },

    checkPlayerCredit(credit){
        if (credit < 10) {
            console.log("Credit is Less that Minimun Buy In.");
        }
    },

    playerChangeBetAmount(changeValue) {
        this.gameControllerScript.playerChangeBetAmount(changeValue);
    },
});