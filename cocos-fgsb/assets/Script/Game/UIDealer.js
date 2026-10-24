var Tool = require("Tool");
var Seat = null;

function UIDealer(root, o){
    Seat = new require("Seat")(root, this);
    
    this.root     = root;
    this.position = root.position;
    
    this.dealerSkeleton = cc.find("DealerSkeleton", root).getComponent(sp.Skeleton);
    
    this.PlayAnimation = function(animationName, time, timeScale){
        let self                      = this;
        let itimeScale                = timeScale || 1;
        this.dealerSkeleton.TimeScale = itimeScale;
        this.dealerSkeleton.setAnimation(0, animationName, false);
        let delayTime = time / itimeScale;
        Tool.Delay(delayTime, function(){
            self.dealerSkeleton.TimeScale = 1;
            self.dealerSkeleton.setAnimation(0, "idle", true);
        });
    };
    
    if(o != null && o != undefined) Object.assign(o, this);
}

module.exports = UIDealer;
