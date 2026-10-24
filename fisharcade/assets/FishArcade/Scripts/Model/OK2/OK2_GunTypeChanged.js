
function OK2_GunTypeChanged(){
    this.playerId = 0,
    this.gunType = 0
}

OK2_GunTypeChanged.prototype.init= function(_playerId, _gunType){
    this.playerId = _playerId;
    this.gunType = _gunType;
}

window.OK2_GunTypeChanged = OK2_GunTypeChanged;
