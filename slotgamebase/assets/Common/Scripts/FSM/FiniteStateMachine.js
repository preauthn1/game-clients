class FiniteStateMachine {
    
        stateDict = {};
        curState = "";
    
        constructor() {
            this.fsmTarget = IFsm;
        }
    
        setupCallBack(target) {
            this.fsmTarget.state = target;
        }
    
        setInitialState(setToState) {
            this.curState = setToState;
        }
    
        getCurState() {
            return this.curState;
        }
    
        addTransition(fromState, toState, trans) {
            console.log("addTransition " + fromState + "  " + toState + "  " + trans);
            var tempFsm;
            if (this.stateDict[fromState] == null) {
                tempFsm = new FSMState(fromState);
                tempFsm.addState(toState, trans);
                this.stateDict[fromState] = tempFsm;
            }
            else {
                tempFsm = this.stateDict[fromState];
                tempFsm.addState(toState, trans);
                this.stateDict[tempFsm] = tempFsm;
            }
        }
    
        applyTransition(trans) {
    
            if (this.curState == '') {
                return;
            }
    
            var fromState = this.curState;
            this.curState = this.stateDict[this.curState].applyTransition(trans);
            if (this.fsmTarget.state != null) {
                this.fsmTarget.state = this.curState;
            }
        }
    }
    
    class FSMState {
    
        transDict = {};
        stateName = '';
    
        constructor(thisStateName) {
            this.stateName = thisStateName;
        }
    
        addState(state, transition) {
    
            if (this.transDict[transition] == null) {
                this.transDict[transition] = state;
            }
            else {
                // egret.log("This state <" + state + "> ald contain this transition <" + transition + ">.");
            }
        }
    
        applyTransition(transition) {
            var tempState = this.stateName;
    
            if (this.transDict[transition] != null) {
                tempState = this.transDict[transition];
            }
            else {
                // egret.log("This state <" + this.stateName + "> didnt have this transition <" + transition + ">");
            }
    
            return tempState;
        }
    
        checkTransition(transition) {
            // egret.log("From : " + this.stateName + " To : " + this.transDict[transition] + " With Trans : " + transition);
        }
    }
    
    class IFsm {
        state;
    }

    window.FiniteStateMachine = FiniteStateMachine;
