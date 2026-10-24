function State()
{
    var StateName = "";
    var Animation = null;
    var ClipName = "";
    var TransArray = new Array();
    var StateTime = 0;

    this.create = function(ani, name, motion, trans){
        Animation = ani
        StateName = name;
        ClipName = motion;
        TransArray = trans;
    };

    this.onEnter = function(showLog){
        StateTime = 0;

        if (Animation == null){
            console.log("***************** self.animation is null")
            return
        }

        let state = Animation.play(ClipName);
        if (showLog)
        {
            console.log(Animation._clips.length)
            
            if (state == null)
                console.log("**************************** play null ",ClipName)
        }
    };

    this.update = function(dt){
        StateTime += dt;
        return StateTime;
    };

    this.onLeave = function(showLog){

    };

    this.getTransArray = function(){
        return TransArray;
    }

    this.getStateName = function(){
        return StateName;
    }
}

module.exports = State;