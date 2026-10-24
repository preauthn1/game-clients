var State = require("State");
var StateTrans = require("StateTrans");

function StateMachine()
{
    var StateName = "";
    var Animation = null;
    var DefaultState = null;
    var StateMap = new Map();
    var NowState = null;
    var Param = null;
    var CondMap = new Map();
    var TempCondMap = new Map();
    var IsCondChange = false;
    var AnyTransArray = new Array();
    var TransData = null;
    var IsPlay = false;
    var IsReady = false;
	var tempChangeState = ""
    
    this.setAnimation = function(animation){
        Animation = animation;
    },

    this.initData = function(data)
    {
        StateName = data.name;

        Param = data.param

        let baseLayer = data.layer["Base Layer"];
        DefaultState = baseLayer.defaultState;

        initCond();
        if (tempChangeState != "" &&
            tempChangeState != DefaultState){
		}
		else{
			copyTempCond();
		}        
        
        baseLayer.state.forEach(function (stateData, key){
            let trans = getTransData(stateData.trans);
            let state = new State();
            state.create(Animation, stateData.name, stateData.motion, trans, stateData.speed)
            StateMap.set(stateData.name, state);
        });

        AnyTransArray = getTransData(baseLayer.any_trans);

        IsReady = true;
        
        if (tempChangeState != "" &&
            tempChangeState != DefaultState){
                this.changeState(tempChangeState);
		}
		else{
			this.changeState(DefaultState);
		}

        this.play();
    };

    var getTransData = function(data){
        let dataList = new Array()
        if (data != null){
            data.forEach(function (transData, key){
                let tran = new StateTrans();
                tran.init(transData.desState, transData.exitTime);
                
                // 條件
                if (transData.cond != null){
                    transData.cond.forEach(function (cond){
                        tran.createCond(cond.mode, cond.parameter, cond.threshold)
                    });
                }

                dataList.push(tran);
            });
        }

        return dataList;
    };

    this.play = function(){
        IsPlay = true;
    };

    this.stop = function(){
        IsPlay = false;
    };

    this.HasState = function(stateName){
        let hasState = StateMap.has(stateName);
        return hasState;
    },

    this.changeState = function(stateName, showLog, startTime){
        if (IsReady == false){
			tempChangeState = stateName
			return
		}
		
        if (showLog){
            if (NowState != null)
                console.log("******* " + Animation.node.name + " changeState " + StateName + " " + NowState.getStateName() + " -> " + stateName)
            else
                console.log("******* " + Animation.node.name + " changeState " + StateName + " null -> " + stateName)
        }

        TransData = null;

        if (NowState != null)
            NowState.onLeave(showLog);

        NowState = StateMap.get(stateName);

        if (NowState != null)
            NowState.onEnter(showLog, startTime);
    };

    var copyTempCond = function(){
        TempCondMap.forEach(function (data, key) {
            IsCondChange = true;

            CondMap.set(key, data)
        })
    };

    var initCond = function(){
        if (Param == null)
            return
        
        Param.forEach(function (data, key) {
            // Float = 1,
            if (data.type == 1){
                CondMap.set(data.name, data.defaultFloat)
            }
            // Int = 3,
            else if (data.type == 3){
                CondMap.set(data.name, data.defaultInt)
            }
            // Bool = 4,
           else  if (data.type == 4){
                CondMap.set(data.name, data.defaultBool)
            }
            // Trigger = 9
            else if (data.type == 9){
                CondMap.set(data.name, 0)
            }
        })
    };
    
    var ckeckCond = function(data1, showLog){
        let value =  CondMap.get(data1.parameter);
        // If = 1, The condition is true when the parameter value is true.
        if (data1.mode == 1){
            if (value == 1){
                return true
            }
            else{
                return false
            }
        }
        // IfNot = 2, The condition is true when the parameter value is false.
        else if (data1.mode == 2){
            if (value == 0)
                return true
            else
                return false
        }                
        // Greater = 3, The condition is true when parameter value is greater than the threshold.
        else if (data1.mode == 3){
            if (value > data1.threshold)
                return true
            else
                return false
        }
        // Less = 4, The condition is true when the parameter value is less than the threshold.
        else if (data1.mode == 4){
            if (value < data1.threshold)
                return true
            else
                return false
        }
        // Equals = 6, The condition is true when parameter value is equal to the threshold.
        else if (data1.mode == 6){
            if (value == data1.threshold)
                return true
            else
                return false
        }                                
        // NotEqual = 7 The condition is true when the parameter value is not equal to the threshold.
        else if (data1.mode == 7){
            if (value != data1.threshold)
                return true
            else
                return false
        }
    };

    var updateCond = function(AnyTransArray, showLog){
        AnyTransArray.forEach(function (data){
            let accCount = 0;
            data.CondArray.forEach(function (data1){
                let result = ckeckCond(data1, showLog)
                if(result == true)
                    accCount += 1;
            })

            if (accCount == data.CondArray.length){
                TransData = data;
                if (showLog == true)
                	console.log("************************* TransData")
                return;
            }
        });
    };

    this.update = function(dt, showLog){
        if (IsPlay == false)
        {
            if (showLog == true)
                console.log("111111111111 IsPlay false")            
            return;
        }

        if (NowState == null)
        {
            if (showLog == true)
                console.log("111111111111 ",  Animation.node.name, "NowState null")            
            return;
        }

        let StateTime = NowState.update(dt);

        let trans = NowState.getTransArray()
        if (trans.length > 0)
        {
            let tran = trans[0]
            let condLen = tran.CondArray.length
            if (condLen == 0)
            {
                let aniDuration = NowState.getNowAnimationDuration()
                if (StateTime >= aniDuration)
                {
                    if (showLog == true)
                        console.log("changeState")
                    this.changeState(tran.desState, showLog);
                }
            }
        }

        if (TransData != null){

            if (StateTime > TransData.exitTime){
                if (showLog == true)
                    console.log("changeState")
                this.changeState(TransData.desState, showLog);
            }      
        }
        else{
            if (IsCondChange == true){
                // any state cond
                updateCond(AnyTransArray, showLog);

                // state cond
                if (TransData == null){
                    let TransArray = NowState.getTransArray();
                    updateCond(TransArray, showLog);
                }

                if (TransData != null){
                    if (StateTime > TransData.exitTime){
                        if (showLog == true)
                            console.log("changeState")                        
                        this.changeState(TransData.desState, showLog);
                    }      
                }                
            }
            else
            {
                //if (showLog == true)
                //console.log("333333333333")
            }
        }

        // clear trigger
        if (Param != null){
            Param.forEach(function (data, key){
                if (data.type == 9) {
                    CondMap.set(data.name, 0)                
                }
            })
        }

        IsCondChange = false;

    };

    this.SetFloat = function(CondName, CondValue){
        if (IsReady == true){
            IsCondChange = true;

            CondMap.set(CondName, CondValue)
        }
        else{
            TempCondMap.set(CondName, CondValue)
        }
    };

    this.SetBool = function(CondName, CondValue){
        if (IsReady == true){
            IsCondChange = true;

            if (CondValue == true)
                CondMap.set(CondName, 1)
            else
                CondMap.set(CondName, 0)
        }
        else{
            if (CondValue == true)
                TempCondMap.set(CondName, 1)
            else
                TempCondMap.set(CondName, 0)
        }
    };

    this.SetInteger = function(CondName, CondValue){
        if (IsReady == true){
            IsCondChange = true;

            CondMap.set(CondName, CondValue)
        }
        else{
            TempCondMap.set(CondName, CondValue)
        }
    };

    this.SetTrigger = function(CondName, CondValue){
        if (IsReady == true){
            IsCondChange = true;

            if (CondValue == true)
                CondMap.set(CondName, 1)
            else
                CondMap.set(CondName, 0)
        }
        else{
            if (CondValue == true)
                TempCondMap.set(CondName, 1)
            else
                TempCondMap.set(CondName, 0)
        }
    };

    this.SetSpeed = function(Speed){
        if (NowState != null)
            NowState.setSpeed(Speed);
    };

    this.GetNowAnimationTime = function(){
        if (NowState != null)
            return NowState.getNowAnimationTime();
        else
            return 0;
    };

    this.GetNowAnimationName = function(){
        if (NowState != null)
            return NowState.getNowAnimationName();
        else
            return "";
    };

    this.SetCurrentTime = function(time){
        if (NowState != null)
            return NowState.setCurrentTime(time);
        else
            return "";
    };

    this.Pause = function(){
        if (Animation != null){
            Animation.pause();
        }
    };    
}

module.exports = StateMachine;