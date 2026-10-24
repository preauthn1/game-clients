function OK2_GunShoot() {
    this.playerId = 0;
    this.gunType = 0;
    this.shootAngle = 0;
    this.betValue = 0;
    this.credit = 0;
    this.shootId = 0;
}

OK2_GunShoot.prototype.init = function (_playerId, _gunType, _shootAngle, _betValue) {
    this.playerId = _playerId;
    this.gunType = _gunType;
    this.shootAngle = _shootAngle;
    this.betValue = _betValue;
}
OK2_GunShoot.prototype.init2 = function (_playerId, _gunType, _shootAngle, _betValue, _shootId, _credit) {
    this.playerId = _playerId;
    this.gunType = _gunType;
    this.shootAngle = _shootAngle;
    this.betValue = _betValue;
    this.credit = _credit;
    this.shootId = _shootId;
}

window.OK2_GunShoot = OK2_GunShoot;