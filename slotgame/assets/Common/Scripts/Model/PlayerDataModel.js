function PlayerDataModel(){
    this.playerName = null;
    this.credit = 0;
}

PlayerDataModel.prototype.init= function(playerName, credit){
    this.playerName = playerName;
    this.credit = credit;
}

window.PlayerDataModel = PlayerDataModel;