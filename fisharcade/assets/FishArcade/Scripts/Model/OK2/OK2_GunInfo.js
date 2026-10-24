
function OK2_GunInfo(){
    this.type = 0;
    this.name = "";
    this.shootInterval = 0;
    this.bulletType = 0;
}

OK2_GunInfo.prototype.init= function(jsonResult){
    this.type = jsonResult[0];
    this.name = jsonResult[1];
    this.shootInterval = jsonResult[2];
    this.bulletType = jsonResult[3];
}

window.OK2_GunInfo = OK2_GunInfo;
    