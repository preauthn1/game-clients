function OK2_TargetInfo() {
    this.targetId = 0;
    this.targetType = 0;
    this.lifePoint = 0;
    this.isAlive = true;
    this.payout = 0;
}

OK2_TargetInfo.prototype.init1 = function (_targetId, _targetType, _lifePoint) {
    this.targetId = _targetId;
    this.targetType = _targetType;
    this.lifePoint = _lifePoint;
    this.isAlive = true;
    this.payout = 0;
}
OK2_TargetInfo.prototype.init2 = function (_targetId, _targetType, _lifePoint, _payout, _specialType) {
    this.targetId = _targetId;
    this.targetType = _targetType;
    this.lifePoint = _lifePoint;
    this.isAlive = true;
    this.payout = _payout;
    this.specialType = _specialType;
}

OK2_TargetInfo.prototype.init3 = function (_targetId, _targetType, _lifePoint, _isAlive, _payout, _specialParam) {
    this.targetId = _targetId;
    this.targetType = _targetType;
    this.lifePoint = _lifePoint;
    this.isAlive = _isAlive;
    this.payout = _payout;
    this.specialParam = _specialParam;
}
OK2_TargetInfo.prototype.isDeath = function () {
    this.isAlive = false;
}
OK2_TargetInfo.prototype.setPayout = function (payout) {
    this.payout = payout;
}
window.OK2_TargetInfo = OK2_TargetInfo;