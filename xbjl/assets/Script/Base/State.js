function State()
{
    var StateName = "";
    var Animation = null;
    var ClipName = "";
    var TransArray = new Array();
    var StateTime = 0;
    var Speed = 1;
    var AnimationState = null;

    this.create = function(ani, name, motion, trans, speed = 1){
        Animation = ani
        StateName = name;
        ClipName = motion;
        TransArray = trans;
        Speed = speed;
    };

    this.onEnter = function(showLog, startTime){
        StateTime = 0;

        if (Animation == null){
            console.log("***************** self.animation is null")
            return
        }

        AnimationState = Animation.getAnimationState(ClipName);
        if (AnimationState != null)
        {
            if (startTime > 0)
            {
                startTime = startTime * AnimationState.duration
            }
            else
            {
                startTime = 0
            }

            Animation.stop();
            Animation.play(ClipName, startTime);
            AnimationState.speed = Speed;
            
            // let anis = Animation.getComponentsInChildren("AnimationController");
            // for (var key in anis)
            // {
            //     let ani = anis[key]
            //     ani.SetCurrentTime(0);
            // }
        }
        else
        {
            if (showLog)
            {            
                console.log("**************************** play null ",ClipName)
            }
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

    this.getNowAnimationState = function(){
        return AnimationState;
    }

    this.getNowAnimationDuration  = function(){
        if (AnimationState != null)
            return AnimationState.duration;
        else
            return 0;
    }     

    this.getNowAnimationTime  = function(){
        if (AnimationState != null)
            return AnimationState.time;
        else
            return 0;
    }

    this.setSpeed = function(Speed){
        if (AnimationState != null)
            AnimationState.speed = Speed;
    }

    this.getNowAnimationName = function(){
        return ClipName;
    }

    this.setCurrentTime = function(time){
        if (Animation != null)
            Animation.setCurrentTime(time);
    }
}

module.exports = State;