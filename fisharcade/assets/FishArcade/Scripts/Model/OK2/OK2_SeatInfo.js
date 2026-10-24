
function OK2_SeatInfo(){
    this.seatId = 0,
    this.playerId = 0,
    this.playerName = "",
    this.gunType = 0,
    this.balance = 0,
    this.gunAngle = 0,
    this.previosBetValue = 0
}

OK2_SeatInfo.prototype.init= function(_seatId,  _playerId,  _playerName,  _gunType,  _balance,  _angle, _previousBetValue){
    this.seatId = _seatId;
    this.playerId = _playerId;
    this.playerName = _playerName;
    this.gunType = _gunType;
    this.balance = _balance;
    this.gunAngle = _angle;
    this.previosBetValue = _previousBetValue;
}

window.OK2_SeatInfo = OK2_SeatInfo;
