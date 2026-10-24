
function OK2_TargetObject(){
    this.groupId = 0;
    this.pathId ="";
    this.pathOffSet ;//= cc.v2 ;
    this.spawnTime = 0;
    this.sustainTime = 0;
    this.targetInfo = [];
}

OK2_TargetObject.prototype.init= function(_groupId,_pathId,_pathOffSet,_spawnTime,_sustainTime){
    this.groupId = _groupId;
    this.pathId = _pathId;
    this.pathOffSet = _pathOffSet;
    this.spawnTime = _spawnTime;
    this.sustainTime = _sustainTime;


}
OK2_TargetObject.prototype.setTargetInfo= function(_targetInfo){
    this.targetInfo = _targetInfo;
}

window.OK2_TargetObject = OK2_TargetObject;
