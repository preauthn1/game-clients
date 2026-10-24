cc.Class({
    extends: cc.Component,
    extends: require('PoolView'),

    properties: {
        fishHolder: cc.Node,
        deathFishHolder: cc.Node,
        routeView: cc.Node,
        routeViewScript: {
            default: null,
            visible: false,
        },
        gunView: [cc.Node],
        gunViewId: [cc.Node],
        fishObj: [cc.Prefab],
        groupFishObj: [cc.Prefab],
        coinPrefab: cc.Prefab,
        coinToPosition: [cc.Node],
        payoutPrefab: [cc.Prefab],
        currTime: {
            default: 0,
            visible: false,
        },
        unspawnTarget: {
            default: [],
            visible: false,
        },
        groupList: {
            default: [],
            visible: false,
        },
        gameView: {
            default: null,
            visible: false,
        },
        myPlayerId: 0,
    },

    onLoad: function () {
        this.routeViewScript = this.routeView.getComponent("OK2_RouteView");
    },

    init(gameView, tempFishList, gunInfoList, seatList, curGameTime, playerId) {
        this.gameView = gameView;
        this.myPlayerId = playerId;
        // console.log(this.myPlayerId);
        if (tempFishList != null && tempFishList.Count > 0) {
            this.spawnAllFish(tempFishList, curGameTime);
        }
        if (seatList != null && seatList.length > 0) {
            for (let i = 0; i < seatList.length; i++) {
                this.gunViewId[seatList[i].seatId - 1] = seatList[i].playerId;
                this.gunView[seatList[i].seatId - 1].getComponent("OK2_GunView").init(null, this, seatList[i], false);
            }
        }
    },

    spawnAllFish(targetObjectList, curGameTime) {
        for (let i = 0; i < targetObjectList.length; i++) {
            this.unspawnTarget.push(targetObjectList[i]);
        }
        this.unspawnTarget.sort(function (a, b) {
            return a.spawnTime - b.spawnTime;
        });
        this.checkAndSpawnGroup(curGameTime);
    },

    checkAndSpawnGroup(currentTime) {
        while (this.unspawnTarget.length > 0 && this.unspawnTarget[0].spawnTime <= currentTime) {
            if (this.unspawnTarget[0].groupId == 1) {
                var fishType = this.unspawnTarget[0].targetInfo[0].targetType;

                if (fishType < 100) {
                    let fish = cc.instantiate(this.fishObj[fishType - 1]);
                    var gb = fish.getComponent("OK2_GroupBehaviorView");
                    gb.spawnGroup(this, this.unspawnTarget[0], currentTime, false);
                    var child = fish.children;
                    for (let i = 0; i < child.length; i++) {
                        child[i].on('click', function () {
                            this.fishTouch(fish.position);
                        }, this);
                    }
                    this.groupList.push(gb);
                } else if (fishType > 200) {

                }
            } else {
                let fish = cc.instantiate(this.groupFishObj[this.unspawnTarget[0].groupId - 2]);
                var gb = fish.getComponent("OK2_GroupBehaviorView");
                gb.spawnGroup(this, this.unspawnTarget[0], currentTime, false);
                var child = fish.children;
                for (let i = 0; i < child.length; i++) {
                    child[i].on('click', function () {
                        this.fishTouch(fish.position);
                    }, this);
                }
                this.groupList.push(gb);
            }

            this.unspawnTarget.shift();
        }
    },
    fishTouch(pos) {
        this.gunView[this.getPlayerGunSeat(this.myPlayerId)].getComponent("OK2_GunView").fishTouch(pos);
    },
    selectedFish(fishId) {
        if (this.fishDic[fishId] != null) {
            //this.gunView.getComponent("OK2_GunView").selectedFish(this.fishDic[fishId]);
        }
    },

    updateCurrentTime(currentTime) {
        this.currTime = currentTime;
        for (var key in this.fishDic) {
            if (this.fishDic[key] != null) {
                this.fishDic[key].getComponent("OK2_GroupBehaviorView").updatePosition(currentTime);
            }
        }
    },

    updateAllGroup(curGameTime) {
        this.checkAndSpawnGroup(curGameTime);

        for (let i = this.groupList.length - 1; i >= 0; i--) {
            if (this.groupList[i].swimGroup(curGameTime)) {
                //console.log("dead");
                this.deathGroupList.push(this.groupList[i]);
                this.groupList.splice(i, 1);
            }

            // if(this.groupList[i].fishList.length == 0){
            //     this.deathGroupList.push(this.groupList[i]);
            //     this.groupList.splice(i, 1); 
            // }
        }

        for (let i = this.deathGroupList.length - 1; i >= 0; i--) {
            this.deathGroupList[i].destroy();
        }
        this.deathGroupList = [];

    },
    deadFish(key, winAmount, playerId) {
        for (let i = 0; i < 5; i++) {
            let tempCoin = cc.instantiate(this.coinPrefab);
            tempCoin.parent = this.deathFishHolder;
            tempCoin.position = this.fishDic[key].node.position;
            //var bezier = [cc.v2(0, 1280 / 2), cc.v2(0, -1280 / 2), new cc.v2(this.coinToPosition[0].position)];
            let delayTime = i * 0.1;
            let seat = this.getPlayerGunSeat(playerId);
            tempCoin.runAction(
                cc.sequence(
                    cc.delayTime(i * 0.1),
                    cc.moveTo(0.2, cc.v2(tempCoin.position.x, tempCoin.position.y + 70)),
                    cc.delayTime(i * 0.1),
                    //cc.bezierTo(0.6, bezier),
                    cc.moveTo(0.5, this.coinToPosition[seat].position),
                    cc.callFunc(() => tempCoin.destroy(), this),
                )
            )
        }

        let tempPayout = cc.instantiate(this.payoutPrefab[0]);
        tempPayout.parent = this.deathFishHolder;
        tempPayout.position = this.fishDic[key].node.position;
        tempPayout.getComponent("OK2_PayoutView").showPayout(winAmount);
        this.gunView[this.getPlayerGunSeat(playerId)].getComponent("OK2_GunView").removeSelectedFish(this.fishDic[key]);
        this.fishDic[key] = null;
    },

    addFish(id, fish) {
        if (this.fishDic != null && this.fishDic[id] == null) {
            this.fishDic[id] = fish;
        }
    },

    removeFish(key) {
        //this.gunView.getComponent("OK2_GunView").removeSelectedFish(this.fishDic[key]);
        this.fishDic[key] = null;
    },

    resetPool() {
        this.fishDic = [];
    },

    getRouteView() {
        return this.routeViewScript;
    },

    getHolderPosition() {
        return this.fishHolder;
    },

    updateHitedFishes(fishes, weaponType, shootId) {
        this.gameView.updateHitedFishes(fishes, weaponType, shootId);
    },

    endGameGroup() {
        console.log("OK2_PoolView.endGameGroup()");
    },

    updateBetAmount(playerId, betAmount) {
        this.gunView[this.getPlayerGunSeat(playerId)].getComponent("OK2_GunView").updateBetAmount(playerId, betAmount);
    },

    updateAllGunMove(gunMove) {
        console.log("OK2_PoolView.updateAllGunMove()");
    },

    updatePlayerCredit(playerId, credit) {
        this.gunView[this.getPlayerGunSeat(playerId)].getComponent("OK2_GunView").updatePlayerCredit(playerId, credit);
    },

    updateAllGunShoot(gunShoot) {
        if (gunShoot.playerId == this.myPlayerId)
        {
            for(let i=0;i<this.gunViewId.length;i++){
                if(this.gunViewId[i] == gunShoot.playerId)
                this.gunView[this.getPlayerGunSeat(gunShoot.playerId)].getComponent("OK2_GunView").pressFireButton(gunShoot);
            }
        }
        else
        {
            this.receiveOwnGunShoot(gunShoot);
        }
    },

    updateOwnShoot(gunShoot) {
        console.log("OK2_PoolView.updateOwnShoot()");
    },

    updateOwnGunShoot(gunShoot) {
        this.gameView.updateOwnGunShoot(gunShoot);
    },

    updateAllGunType(gunChanged) {
        console.log("OK2_PoolView.updateAllGunType()");
    },

    onFishStatusUpdate(playerId, weaponId, credit, fishStatusList) {
        for (let i = 0; i < fishStatusList.length; i++) {
            if (this.fishDic[fishStatusList[i].targetId] != null && !fishStatusList[i].isAlive) {
                if (this.fishDic[fishStatusList[i].targetId] != null) {
                    this.fishDic[fishStatusList[i].targetId].death(playerId, fishStatusList[i]);
                }

                this.fishDic[fishStatusList[i].targetId] == null;
            }
        }
    },

    receiveOwnGunShoot(gunShoot) {
        this.gunView[this.getPlayerGunSeat(this.myPlayerId)].getComponent("OK2_GunView").pressFireButton(gunShoot);
    },

    resetDict() {
        console.log("OK2_PoolView.resetDict()");
    },

    playerShootStatus(condition) {
        console.log("OK2_PoolView.playerShootStatus()");
    },

    roundUpdate(fishList, curGame) {
        this.resetDict();
        this.unspawnTarget = [];
        if (fishList != null) {
            this.spawnAllFish(fishList, curGame.curGameTime);
        }
    },

    receiveNextBatchFish(fishList, curGame) {
        for (let i = 0; i < fishList.length; i++) {
            this.unspawnTarget.push(fishList[i]);
        }
        this.unspawnTarget.sort(function (a, b) {
            return a.spawnTime - b.spawnTime;
        });
    },

    sitInSuccess(playerInfo, thisPlayerSeatNum) {
        // console.log(playerInfo);
        this.gunViewId[playerInfo.seatId - 1] = playerInfo.playerId;
        if (playerInfo.playerId == this.myPlayerId)
            this.gunView[playerInfo.seatId - 1].getComponent("OK2_GunView").init(null, this, playerInfo, true);
        else
            this.gunView[playerInfo.seatId - 1].getComponent("OK2_GunView").init(null, this, playerInfo, false);
    },

    playerChangeBetAmount(changeValue) {
        this.gameView.playerChangeBetAmount(changeValue);
    },

    getPlayerGunSeat(id) {
        for (let i = 0; i < this.gunViewId.length; i++) {
            if (this.gunViewId[i] == id)
                return i;
        }
        return -1;
    },
});