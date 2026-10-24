cc.Class({
    extends: cc.Component,
    extends: require('GroupBehaviorView'),

    properties: {

    },

    spawnGroup(poolView, targetGroup, curGameTime, rotateC) {
        this.isSwimming = true;
        this.group = targetGroup;
        this.poolView = poolView;
        this.fishList = [];
        var tempFishBehavior = this.getComponentsInChildren("OK2_FishView");
        for (let i = 0; i < targetGroup.targetInfo.length; i++) {
            let index = 0;
            for (let j = 0; j < tempFishBehavior.length; j++) {
                if (tempFishBehavior[j].getFishType() == targetGroup.targetInfo[i].targetType){
                    index = j;
                }

                tempFishBehavior[j].initFish(this.group.targetInfo[i], this, this.poolView);
            }

            if (this.fishList[tempFishBehavior[index]] != null) {
                this.fishList.push(tempFishBehavior[index]);
            }
            this.poolView.addFish(this.group.targetInfo[i].targetId, tempFishBehavior[index]);
            tempFishBehavior.splice(index, 1);
        }

        var path = this.poolView.getRouteView().getPath(targetGroup.pathId);
        this.startPosition = path.start;
        this.endPosition = path.end;

        this.node.parent = this.poolView.getHolderPosition();
        if (!rotateC) {
            this.node.setScale(1, 1);
        } else {
            this.node.setScale(1, -1);
        }
        this.remainPoint = this.deductRoute(this.endPosition, this.startPosition);
        var angleDeg = Math.atan2(this.endPosition.y - this.startPosition.y, this.endPosition.x - this.startPosition.x) * 180 / Math.PI;
        var angleDeg2 = -(angleDeg - 90);
        if (angleDeg2 < 0) {
            angleDeg2 * -1;
        }
        this.node.rotation = angleDeg2;
        this.updateGroupPosition(curGameTime);
    },

    updateGroupPosition(currentTime) {
        if (currentTime >= this.group.spawnTime && currentTime <= this.group.spawnTime + this.group.sustainTime) {
            var remainTime = (currentTime - this.group.spawnTime) / this.group.sustainTime;
            var position = this.addRoute(this.startPosition, new cc.v2(this.remainPoint.x * remainTime, this.remainPoint.y * remainTime));
            this.node.position = position;
            this.node.active = true;
        } else if (currentTime < this.group.spawnTime) {
            this.disableFish();
        } else
            return true;

        return false; // true if is death
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

    speedUpGroupPosition() {
        if (!this.isSwimming)
            return;

        this.isSwimming = false;

        for (let i = 0; i < this.fishList.length; i++) {
            gameArea.RemoveType(fish.fish.targetId);
        }

        this.node.runAction(
            cc.sequence(
                cc.moveTo(3, this.endPosition),
                cc.callFunc(() => this.disableFish(), this),
            )
        )
    },

    disableFish() {
        this.node.position = this.startPosition;
        this.node.active = false;
    },

    swimGroup(curGameTime) {
        return this.updateGroupPosition(curGameTime); // true if is death
    },

    removeFish(fb) {
        this.fishList.splice(this.fishList.indexOf(fb), 1);
    },
});