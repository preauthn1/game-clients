
function OK2_Game(){
    this.roundId = 0;
    this.mapId = 0;
    this.maxGameTime = 0;
    this.curGameTime = 0;
}

OK2_Game.prototype.init= function(_roundId, _mapId, _maxGameTime, _curGameTime){
    this.roundId = _roundId;
	this.mapId = _mapId;
	this.maxGameTime = _maxGameTime;
	this.curGameTime = _curGameTime;
}

window.OK2_Game = OK2_Game;
    