var config = require('MyBaseConfig');
cc.Class({
    extends: cc.Component,

    properties: {
        eventManager:cc.Node,
        reel:{
            default:[],
            type:cc.Node,
        },
        reelPattern:[],
        reelDetails:[],
        reelPositionY:[],
        spinData:"",

        symbolAnimation:{
            default:[],
            type:cc.Animation,
        },
        gameController:cc.Node,
        linePaysView:cc.Node,

        reelStop:0,
        defaultReelStopTime:0.5,
        reelFastStopTime:0.2,
        isStopFaster:false,
        isStopFasterTime:0.5,
        startingTimeDiff:0.01,
        climaxAnimTime:[cc.Float],
        climaxCount:0,
        allwinDelayTime:0,
        lineByLineDelayTime:0,
        lineCount:0,
        isFinishFirstRoundLine:false,
        audioManager:cc.Node,
        isPlayWildSoundFirst:false,
        isDisableDimEffect:false,
        isScatterWild:false,
        isFreeSpinClimax:true,
        isSkipFullWinLine:false,
        desposeAnimTime:1,
        isDesposeSlot:false,
        isWaysSlot:false,
    },

    setSymbolAnimation(){
        
    },
    // use this for initialization
    onLoad: function () {
        
    },
    start(){
        if(this.gameController!=null)
        this.gameController = this.gameController.getComponent(config.SCRIPT.GAMECONTROLLER);
        
        if(this.eventManager!=null)
        this.eventManager = this.eventManager.getComponent(config.SCRIPT.REGISTEREVENT);

        if(this.linePaysView!=null)
        {
            this.linePaysView = this.linePaysView.getComponent("MyTerproLinePaysView");
            this.linePaysView.init(this.gameController)
        }

        for(let i=0;i<this.reel.length;i++){
            var reelComp = this.reel[i].getComponent(config.SCRIPT.REEL);
            this.reel[i] = reelComp;
            this.reel[i].setReelManager(this);
            this.reel[i].randomAllSymbol();
        }  
    },
    
    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
    setAudioManager(am){
        this.audioManager = am;
        for(let i=0;i<this.reel.length;i++){
            this.reel[i].audioManager = am;
        }  
    },

    startSpin(){
        this.linePaysHide()
        this.eventManager.sendEventWithParam(config.EVENT.ENABLEWINLINE,{line:-1});
        this.eventManager.sendEventWithParam(config.EVENT.ENABLEWINFRAME,{x:-1,y:-1});
        this.node.stopAllActions();
        this.disableAllFrame();
        this.stopAllAnimation();
        this.resetStopAnimationIndex();

        this.eventManager.sendEventWithParam(config.EVENT.SPINNING,{});

        let actions = []
        for(let i=0;i<this.reel.length;i++)
        {
            actions.push(cc.callFunc(this.reel[i].startSpin, this.reel[i]))
            actions.push(cc.delayTime(this.startingTimeDiff))
        }
        this.node.runAction(cc.sequence(actions))
        // this.node.runAction(cc.sequence(
        //     cc.delayTime(2),
        //     cc.callFunc(this.receiveResult, this)
        // ));
        this.isStopFaster = false;
        this.isFinishFirstRoundLine = false;
        this.reelStop = 0;
        this.lineCount = 0;
    },
    onStartResult(data){
        //Assign to Reel
        for(let i=0;i<this.reel.length;i++){
            for(let j=0;j<this.reelPattern[i].length;j++){
                this.reel[i].updateReelResult(this.reelPattern[i][j]);
            }
        }
    },
    receiveResult(){
        //this.reelStop = 0;
        // console.log("Receive Reel Result");
        this.stopReel();
        // console.log("Receive Reel Result1");
        this.climaxCount = 0;
    },
    addReelClimax(){
        this.climaxCount++;
    },
    stopReel(){
        // console.log("stopReel Reel Result : " +this.reelStop+" / "+this.reel.length);
        if(this.reelStop==this.reel.length){
            this.reelStop = -1;
            var _delayTime = 0;

            if(this.isStopFaster){
                _delayTime = this.isStopFasterTime;
            }

            this.node.runAction(cc.sequence(
                cc.delayTime(_delayTime),
                cc.callFunc(this.allReelFinishStop,this),
            ));
            return;
        }
        // console.log("stopReel Reel Result2 : " +this.reelStop);
        if(this.reelStop < 0)
        return;
        // if(this.isStopFaster)
        // return;

        // console.log("stopReel Reel Result3 : " +this.reelStop);
        var stopTime = this.defaultReelStopTime;
        // if(this.isStopFaster){
        //     stopTime = this.reelFastStopTime;
        // }
        
        if(this.reelStop < this.reel.length && this.reel[this.reelStop].isClimax){
            //this.reel[this.reelStop].enableClimax();
            stopTime += this.climaxAnimTime[this.climaxCount];
        }
        // console.log("stopReel Reel Result4 : " +config.EVENT.STOPSPINNING);
        // this.eventManager.sendEventWithParam(config.EVENT.STOPSPINNING,{i:this.reelStop});
        // this.eventManager.sendEventWithParam(config.EVENT.ENABLEWINLINE,{line:-1});
        // console.log("stopReel Reel Result6 : " +this.reelStop);

        if(!this.isFreeSpinClimax && this.gameController.isInFreeSpin){
            stopTime = this.defaultReelStopTime;
            this.reel[this.reelStop].isClimax = false;
        }

        this.reel[this.reelStop].receiveResult(stopTime,false);
        // console.log("stopReel Reel Result5 : " +this.reelStop);
        this.reelStop+=1;
    },
    checkStopAnimation(reel){
        var stopSymbol = config.REELSTOPDETAILS.SYMBOL;

        for(let i=0;i<stopSymbol.length;i++){
            var isStopSymb = false;

            isStopSymb = reel.checkStopAnimation(stopSymbol[i]);

            if(isStopSymb){
                //play audio
                if(this.audioManager!=null)
                this.audioManager.playOnceSoundSfx(this.audioManager.symbolStopClip[config.REELSTOPDETAILS.COUNT[i]+config.REELSTOPDETAILS.SOUNDSTOPINDEX[i]]);
                config.REELSTOPDETAILS.COUNT[i] =  config.REELSTOPDETAILS.COUNT[i] + 1;
            }
        }
    },
    // checkStopAnimation(){
    //     this.checkStopAnimation(this.reel[this.reelStop]);
    // },
    resetStopAnimationIndex(){
        var stopSymbols = config.REELSTOPDETAILS.SYMBOL;
        for(let i=0;i<stopSymbols.length;i++){
            config.REELSTOPDETAILS.COUNT[i] = 0;
        }
    },
    allReelFinishStop(){
        this.eventManager.sendEventWithParam(config.EVENT.STOPALLSPINNING,{});

        for(let i=0;i<this.reel.length;i++){
            this.reel[i].cleanStopAnim();
        }
        if(this.gameController!=null)
        this.gameController.onReelStop();

    },
    instantStopReel(){
        this.isStopFaster = true;
        //this.receiveResult();
        var count = 1;
        var reelStopCount = this.reelStop;
        if(reelStopCount>= 5){
            return;
        }
        for(let i=reelStopCount;i<this.reel.length;i++){
            // console.log(i);
            this.reel[i].instantStopReel(this.reelFastStopTime);
            //this.reel[i].receiveResult((i*0.2)+this.reelFastStopTime,true);
            //count+=1;
        }

        // this.node.stopAllActions();
        // this.node.runAction(cc.sequence(
        //     cc.delayTime(this.reelFastStopTime),
        //     cc.callFunc(this.stopReel, this, {}),
        // ));

    },
    updateReelResult(data){
        //Reel Pattern
        var pattern = data.fullReelData;
        var reelCount = 0;
        this.reelPattern = [];
        
        for(let j=0;j<pattern[0].length;j++){
            var array2 = [];
            for(let i=pattern.length-1;i>=0;i--){
                array2.push(pattern[i][j]);
            }
            this.reelPattern.push(array2);
        }
        
        //Assign to Reel
        for(let i=0;i<this.reel.length;i++){
            this.reel[i].updateReelResult(this.reelPattern[i]);
        }

        //Calculate Climax
        this.processClimax();

        //Reel Detail
        this.spinData = data;
    },
    processClimax(){
        var climaxs = config.REELCLIMAX;
        for(let c=0;c<climaxs.SYMBOL.length;c++){
            climaxs.COUNT[c] = 0;
        }

        for(let i=0;i<this.reel.length;i++){
            if(i!=0){
                this.reel[i].isClimax = this.canDoClimaxEffectCondition(i);
            }

            for(let j=0;j<this.reelPattern[i].length;j++){
                for(let c=0;c<climaxs.SYMBOL.length;c++){
                    if(this.reelPattern[i][j] == climaxs.SYMBOL[c]){
                        climaxs.COUNT[c] += 1;
                    }
                }
            }
        }
    },
    canDoClimaxEffectCondition(reelIndex){
        var climaxs = config.REELCLIMAX;
        for(let c=0;c<climaxs.SYMBOL.length;c++){
            if(this.checkCanDoClimax(reelIndex,climaxs.COUNT[c],climaxs.MINCOUNT[c],climaxs.PATTERN[c])){
                return true;
            }
        }
        return false;
    },
    checkCanDoClimax(currentReel,symbolCount,minCount,pattern){
        if(symbolCount < minCount - 1)
        return false;
        if(!pattern[currentReel])
        return false;
        
        return true;
    },
    updateReelPosition(){
        if(this.reelPositionY.length == 0){
            return;
        }

        for(let i=0;i<this.reel.length;i++){
            this.reel[i].instantReelPosition(this.reelPositionY[this.spinData.reelPosData[i]]);
        }
    },
    instantUpdateAllReel(isRandom){
        if(isRandom){
            for(let i=0;i<this.reel.length;i++){
                this.reel[i].randomUpdateReel();
            }
        }
        else{
            for(let i=0;i<this.reel.length;i++){
                this.reel[i].instantUpdateReel();
            }
        }
    },
    startAllWinLine(){
        if(this.isSkipFullWinLine || this.spinData.winLines.length <= 0){
            this.afterAllWinLine();
            return;
        }   

        if(!this.isDisableDimEffect){
            for(let j=0;j<this.reel.length;j++){
                this.reel[j].isDimAllSymbol(true);
            }
        }

        var _winlines = this.spinData.winLines;
        var _winCounts = this.spinData.winCounts;
        var _winSymbols = this.spinData.winSymbols;
        var _winWays = this.spinData.winWays;
        
        for(let i=0;i<_winlines.length;i++){
            if(!this.isWaysSlot){
                let winCount =0;
                // console.log("Checking winline : " +_winlines[i]);
                if(_winlines[i] !=0 ){    
                    this.eventManager.sendEventWithParam(config.EVENT.ENABLEWINLINE,{line:_winlines[i]-1,winSymbols:_winSymbols[i]});
                    if(_winWays[i]!=1){
                        let jCount = 0;
                        for(let j=this.reel.length-1;j>=0;j--){
                            if(winCount<_winCounts[i]){
                                this.reel[j].setSymbolAnimate(config.PAYLINEARR[_winlines[i]-1][j],true);
                                this.eventManager.sendEventWithParam(config.EVENT.ENABLEWINFRAME,{line:_winlines[i]-1,x:j,y:config.PAYLINEARR[_winlines[i]-1][j]-1,winAmt:0,winWay:_winWays[i],x2:jCount,symbolCount:0,winSymbolCount:0,symbol:this.reelPattern[j][config.PAYLINEARR[_winlines[i]-1][j]-1]});
                                winCount++;
                            }
                            jCount++;
                        }
                    }
                    else{
                        for(let j=0;j<this.reel.length;j++){
                            if(winCount<_winCounts[i]){
                                this.reel[j].setSymbolAnimate(config.PAYLINEARR[_winlines[i]-1][j],true);
                                this.eventManager.sendEventWithParam(config.EVENT.ENABLEWINFRAME,{line:_winlines[i]-1,x:j,y:config.PAYLINEARR[_winlines[i]-1][j]-1,winAmt:0,winWay:_winWays[i],x2:0,symbolCount:0,winSymbolCount:0,symbol:this.reelPattern[j][config.PAYLINEARR[_winlines[i]-1][j]-1]});
                                winCount++;
                            }
                        }
                    }
                }
                else{
                    if(_winWays[i]!=1){
                        for(let j=this.reel.length-1;j>=0;j--){
                            for(let k=0;k<this.reelPattern[j].length;k++){
                                // console.log("Checking Symbol : " +this.reelPattern[j][k] +" / " +_winSymbols[this.lineCount]);
                                if(this.reelPattern[j][k] == _winSymbols[i] && winCount < _winCounts[i]){
                                    this.reel[j].setSymbolAnimate(k+1,true);
                                    this.eventManager.sendEventWithParam(config.EVENT.ENABLESCATTERFRAME,{x:j,y:k,symbol:this.reelPattern[j][k]});
                                    winCount++;
                                    k = this.reelPattern[j].length;
                                }else if(this.isScatterWild && this.reelPattern[j][k] == config.SYMBOLCODE.SYMBOL_WILD && winCount < _winCounts[i]){
                                    this.reel[j].setSymbolAnimate(k+1,true);
                                    this.eventManager.sendEventWithParam(config.EVENT.ENABLESCATTERFRAME,{x:j,y:k,symbol:this.reelPattern[j][k]});
                                    winCount++;
                                    k = this.reelPattern[j].length;
                                }
                            }
                        }
                    }
                    else{
                        for(let j=0;j<this.reel.length;j++){
                            for(let k=0;k<this.reelPattern[j].length;k++){
                                if(this.reelPattern[j][k] == _winSymbols[i] && winCount < _winCounts[i]){
                                    this.reel[j].setSymbolAnimate(k+1,true);
                                    this.eventManager.sendEventWithParam(config.EVENT.ENABLESCATTERFRAME,{x:j,y:k,symbol:this.reelPattern[j][k]});
                                    winCount++;
                                    k = this.reelPattern[j].length;
                                }else if(this.isScatterWild && this.reelPattern[j][k] == config.SYMBOLCODE.SYMBOL_WILD && winCount < _winCounts[i]){
                                    this.reel[j].setSymbolAnimate(k+1,true);
                                    this.eventManager.sendEventWithParam(config.EVENT.ENABLESCATTERFRAME,{x:j,y:k,symbol:this.reelPattern[j][k]});
                                    winCount++;
                                    k = this.reelPattern[j].length;
                                }
                            }
                        }
                    }
                }
            }
            else{
                for(let j=0;j<this.reel.length;j++){
                    let isStopWinningSymbol = true;
                    for(let k=0;k<this.reelPattern[j].length;k++){
                        if(this.reelPattern[j][k] == _winSymbols[i] && (this.reelPattern[j][k] == config.SYMBOLCODE.SYMBOL_JACKPOT2|| this.reelPattern[j][k] == config.SYMBOLCODE.SYMBOL_JACKPOT3)){
                            this.reel[j].setSymbolAnimate(k+1,true);
                            this.eventManager.sendEventWithParam(config.EVENT.ENABLESCATTERFRAME,{x:j,y:k,symbol:this.reelPattern[j][k]});
                            isStopWinningSymbol = false;
                        }
                        else if(this.reelPattern[j][k] == _winSymbols[i] || this.reelPattern[j][k] == config.SYMBOLCODE.SYMBOL_WILD){
                            this.reel[j].setSymbolAnimate(k+1,true);
                            this.eventManager.sendEventWithParam(config.EVENT.ENABLESCATTERFRAME,{x:j,y:k,symbol:this.reelPattern[j][k]});
                            isStopWinningSymbol = false;
                        }else if(this.isScatterWild && this.reelPattern[j][k] == config.SYMBOLCODE.SYMBOL_WILD){
                            this.reel[j].setSymbolAnimate(k+1,true);
                            this.eventManager.sendEventWithParam(config.EVENT.ENABLESCATTERFRAME,{x:j,y:k,symbol:this.reelPattern[j][k]});
                            isStopWinningSymbol = false;
                        }
                    }
                    if(_winSymbols[i] ==config.SYMBOLCODE.SYMBOL_JACKPOT2 || _winSymbols[i] == config.SYMBOLCODE.SYMBOL_JACKPOT3 ||  _winSymbols[i] == config.SYMBOLCODE.SYMBOL_JACKPOT){
                        
                    }
                    else if(isStopWinningSymbol)
                    {
                        break;
                    }
                }
            }
        }
        this.node.runAction(cc.sequence(
            cc.delayTime(this.allwinDelayTime),
            cc.callFunc(this.afterAllWinLine,this),
        ));
        
    },
    afterAllWinLine(){
        if(this.gameController!=null)
        this.gameController.afterAllWinLine();
    },
    disableAllFrame(){
        this.eventManager.sendEventWithParam(config.EVENT.ENABLEWINLINE,{line:-1});
        this.eventManager.sendEventWithParam(config.EVENT.ENABLEWINFRAME,{x:-1,y:-1});
        // this.eventManager.sendEventWithParam(config.EVENT.ENABLESCATTERFRAME,{x:-1,y:-1});
        // this.eventManager.sendEventWithParam(config.EVENT.ENABLEWINFRAME,{x:-1,y:-1});
        // for(let j=0;j<this.reel.length;j++){
        //     for(let k=0;k<this.reelPattern[j].length;k++){
        //         if(this.reelPattern[j][k] == _winSymbols && winCount < _winCounts){
        //             this.reel[j].setSymbolAnimate(k,false);
        //         }
        //     }
        // }
    },

    startWinLineByLine(){
        this.linePaysShow(null)
        this.eventManager.sendEventWithParam(config.EVENT.ENABLEWINLINE,{line:-1});
        this.eventManager.sendEventWithParam(config.EVENT.ENABLEWINFRAME,{x:-1,y:-1});
        this.stopAllAnimation();

        if(this.spinData.winLines.length <=0)
        return;
        var hasWild = false;

        if(!this.isDisableDimEffect){
            for(let j=0;j<this.reel.length;j++){
                this.reel[j].isDimAllSymbol(true);
            }
        }

        var _winlines = this.spinData.winLines;
        var _winCounts = this.spinData.winCounts;
        var _winSymbols = this.spinData.winSymbols;
        var _winWays = this.spinData.winWays;
        var _winNumbers = this.spinData.winNumbers;
        var winCount = 0;

        if(_winlines[this.lineCount]-1 >= 0){
            this.eventManager.sendEventWithParam(config.EVENT.ENABLEWINLINE,{line:_winlines[this.lineCount]-1,winSymbols:_winSymbols[this.lineCount]});
        }

        if(!this.isWaysSlot){
            if(_winWays[this.lineCount] != 1){
                let jCount = 0;
                for(let j=this.reel.length-1;j>=0;j--){
                    if(_winlines[this.lineCount]>0){   
                        if(winCount<_winCounts[this.lineCount]){
                            if(this.reelPattern[j][config.PAYLINEARR[_winlines[this.lineCount]-1][j]-1] == "w1"){
                                hasWild = true;
                            }
                            this.reel[j].setSymbolAnimate(config.PAYLINEARR[_winlines[this.lineCount]-1][j],true);
                            this.eventManager.sendEventWithParam(config.EVENT.ENABLEWINFRAME,{line:_winlines[this.lineCount]-1,x:j,y:config.PAYLINEARR[_winlines[this.lineCount]-1][j]-1,winAmt:_winNumbers[this.lineCount],symbolCount:winCount,winSymbolCount:_winCounts[this.lineCount],winWay:_winWays[this.lineCount],x2:jCount,symbol:this.reelPattern[j][config.PAYLINEARR[_winlines[this.lineCount]-1][j]-1]});
                            winCount++;
                        }
                    }
                    else{
                        for(let k=0;k<this.reelPattern[j].length;k++){
                            if(this.reelPattern[j][k] == _winSymbols[this.lineCount] && winCount < _winCounts[this.lineCount]){
                                this.reel[j].setSymbolAnimate(k+1,true);
                                this.eventManager.sendEventWithParam(config.EVENT.ENABLESCATTERFRAME,{line:0,x:j,y:k,winAmt:_winNumbers[this.lineCount],symbolCount:winCount,winSymbolCount:_winCounts[this.lineCount],symbol:this.reelPattern[j][k]});
                                winCount++;
                            }else if(this.isScatterWild && this.reelPattern[j][k] == config.SYMBOLCODE.SYMBOL_WILD && winCount < _winCounts[this.lineCount]){
                                this.reel[j].setSymbolAnimate(k+1,true);
                                this.eventManager.sendEventWithParam(config.EVENT.ENABLESCATTERFRAME,{line:0,x:j,y:k,winAmt:_winNumbers[this.lineCount],symbolCount:winCount,winSymbolCount:_winCounts[this.lineCount],symbol:this.reelPattern[j][k]});
                                winCount++;
                                k = this.reelPattern[j].length;
                            }
                        }
                    }
                    jCount++;
                }
            }
            else{
                for(let j=0;j<this.reel.length;j++){
                    if(_winlines[this.lineCount]>0){   
                        if(winCount<_winCounts[this.lineCount]){
                            if(this.reelPattern[j][config.PAYLINEARR[_winlines[this.lineCount]-1][j]-1] == "w1"){
                                hasWild = true;
                            }
    
                            this.reel[j].setSymbolAnimate(config.PAYLINEARR[_winlines[this.lineCount]-1][j],true);
                            this.eventManager.sendEventWithParam(config.EVENT.ENABLEWINFRAME,{line:_winlines[this.lineCount]-1,x:j,y:config.PAYLINEARR[_winlines[this.lineCount]-1][j]-1,winAmt:_winNumbers[this.lineCount],symbolCount:winCount,winSymbolCount:_winCounts[this.lineCount],winWay:_winWays[this.lineCount],x2:0,symbol:this.reelPattern[j][config.PAYLINEARR[_winlines[this.lineCount]-1][j]-1]});
                            winCount++;
                        }
                    }
                    else{
                        for(let k=0;k<this.reelPattern[j].length;k++){
                            if(this.reelPattern[j][k] == _winSymbols[this.lineCount] && winCount < _winCounts[this.lineCount]){
                                this.reel[j].setSymbolAnimate(k+1,true);
                                this.eventManager.sendEventWithParam(config.EVENT.ENABLESCATTERFRAME,{line:0,x:j,y:k,winAmt:_winNumbers[this.lineCount],symbolCount:winCount,winSymbolCount:_winCounts[this.lineCount],symbol:this.reelPattern[j][k]});
                                winCount++;
                            }else if(this.isScatterWild && this.reelPattern[j][k] == config.SYMBOLCODE.SYMBOL_WILD && winCount < _winCounts[this.lineCount]){
                                this.reel[j].setSymbolAnimate(k+1,true);
                                this.eventManager.sendEventWithParam(config.EVENT.ENABLESCATTERFRAME,{line:0,x:j,y:k,winAmt:_winNumbers[this.lineCount],symbolCount:winCount,winSymbolCount:_winCounts[this.lineCount],symbol:this.reelPattern[j][k]});
                                winCount++;
                                k = this.reelPattern[j].length;
                            }
                        }
                    }
                }
            }
        }
        else{
            let isStopWinAmountDisplay = true;
            let winSymbolCountAmount = 3;
            let isDisplayWinAmt = false;
            for(let j=0;j<this.reel.length;j++){
                let isStopWinningSymbol = true;
                for(let k=0;k<this.reelPattern[j].length;k++){
                    if(this.reelPattern[j][k] == _winSymbols[this.lineCount] || this.reelPattern[j][k] == config.SYMBOLCODE.SYMBOL_WILD){
                        this.reel[j].setSymbolAnimate(k+1,true);
                        this.eventManager.sendEventWithParam(config.EVENT.ENABLESCATTERFRAME,{line:0,x:j,y:k,winAmt:_winNumbers[this.lineCount],symbolCount:j,winSymbolCount:winSymbolCountAmount,symbol:this.reelPattern[j][k]});
                        isStopWinningSymbol = false;
                        if(j==2 && !isDisplayWinAmt){
                            isDisplayWinAmt = true;
                        }
                    }else if(this.isScatterWild && this.reelPattern[j][k] == config.SYMBOLCODE.SYMBOL_WILD){
                        this.reel[j].setSymbolAnimate(k+1,true);
                        this.eventManager.sendEventWithParam(config.EVENT.ENABLESCATTERFRAME,{line:0,x:j,y:k,winAmt:_winNumbers[this.lineCount],symbolCount:j,winSymbolCount:winSymbolCountAmount,symbol:this.reelPattern[j][k]});
                        isStopWinningSymbol = false;
                        if(j==2 && !isDisplayWinAmt){
                            isDisplayWinAmt = true;
                        }
                    }
                    if(this.isDisplayWinAmt){
                        winSymbolCountAmount = -100;
                    }
                }
                if(isStopWinningSymbol)
                    break;
            }
        }
        if(this.isPlayWildSoundFirst && hasWild){
            this.audioManager.playSymbolSoundSfx(this.audioManager.symbolClip[config.SymbolAnimationSound["w1"]],false);
        }
        else if(this.audioManager!=null && !this.isFinishFirstRoundLine)
        this.audioManager.playSymbolSoundSfx(this.audioManager.symbolClip[config.SymbolAnimationSound[_winSymbols[this.lineCount]]],false);

        this.lineCount ++;

        if(this.isDesposeSlot){
            
            if(this.lineCount >= _winlines.length){
                this.lineCount = 0;
                this.isFinishFirstRoundLine = true;
                this.node.runAction(cc.sequence(
                    cc.delayTime(this.lineByLineDelayTime),
                    cc.callFunc(this.gameController.finishFirstRoundLine,this.gameController),
                ));
            }
            else{
                this.node.runAction(cc.sequence(
                    cc.delayTime(this.lineByLineDelayTime),
                    cc.callFunc(this.startWinLineByLine,this),
                ));
            }
            // this.gameController.finishFirstRoundLine();
        }
        else{
            if(this.lineCount >= _winlines.length){
                this.lineCount = 0;
                this.isFinishFirstRoundLine = true;
            }
            this.node.runAction(cc.sequence(
                cc.delayTime(this.lineByLineDelayTime),
                cc.callFunc(this.startWinLineByLine,this),
            ));
        }
    },
    preDespose(){
        this.node.stopAllActions();
        this.disableAllFrame();
        this.stopAllAnimation();
        this.resetStopAnimationIndex();

        for(let j=0;j<this.reel.length;j++){
            this.reel[j].isDimAllSymbol(true);
        }
        var _winlines = this.spinData.winLines;
        var _winCounts = this.spinData.winCounts;
        var _winSymbols = this.spinData.winSymbols;
        var _winWays = this.spinData.winWays;
        
        
        for(let i=0;i<_winlines.length;i++){
            let winCount =0;
            // console.log("Checking winline : " +_winlines[i]);
            if(_winlines[i] !=0 ){    
                this.eventManager.sendEventWithParam(config.EVENT.ENABLEWINLINE,{line:_winlines[i]-1,winSymbols:_winSymbols[i]});
                if(_winWays[i]!=1){
                    let jCount = 0;
                    for(let j=this.reel.length-1;j>=0;j--){
                        if(winCount<_winCounts[i]){
                            this.reel[j].setSymbolAnimate(config.PAYLINEARR[_winlines[i]-1][j],true);
                            this.eventManager.sendEventWithParam(config.EVENT.ENABLEWINFRAME,{line:_winlines[i]-1,x:j,y:config.PAYLINEARR[_winlines[i]-1][j]-1,winAmt:0,winWay:_winWays[i],x2:jCount,symbolCount:0,winSymbolCount:0,symbol:this.reelPattern[j][config.PAYLINEARR[_winlines[i]-1][j]-1]});
                            winCount++;
                        }
                        jCount++;
                    }
                }
                else{
                    for(let j=0;j<this.reel.length;j++){
                        if(winCount<_winCounts[i]){
                            this.reel[j].setSymbolAnimate(config.PAYLINEARR[_winlines[i]-1][j],true);
                            this.eventManager.sendEventWithParam(config.EVENT.ENABLEWINFRAME,{line:_winlines[i]-1,x:j,y:config.PAYLINEARR[_winlines[i]-1][j]-1,winAmt:0,winWay:_winWays[i],x2:0,symbolCount:0,winSymbolCount:0,symbol:this.reelPattern[j][config.PAYLINEARR[_winlines[i]-1][j]-1]});
                            winCount++;
                        }
                    }
                }
            }
            else{
                if(_winWays[i]!=1){
                    for(let j=this.reel.length-1;j>=0;j--){
                        for(let k=0;k<this.reelPattern[j].length;k++){
                            // console.log("Checking Symbol : " +this.reelPattern[j][k] +" / " +_winSymbols[this.lineCount]);
                            if(this.reelPattern[j][k] == _winSymbols[i] && winCount < _winCounts[i]){
                                this.reel[j].setSymbolAnimate(k+1,true);
                                this.eventManager.sendEventWithParam(config.EVENT.ENABLESCATTERFRAME,{x:j,y:k,symbol:this.reelPattern[j][k]});
                                winCount++;
                                k = this.reelPattern[j].length;
                            }else if(this.isScatterWild && this.reelPattern[j][k] == config.SYMBOLCODE.SYMBOL_WILD && winCount < _winCounts[i]){
                                this.reel[j].setSymbolAnimate(k+1,true);
                                this.eventManager.sendEventWithParam(config.EVENT.ENABLESCATTERFRAME,{x:j,y:k,symbol:this.reelPattern[j][k]});
                                winCount++;
                                k = this.reelPattern[j].length;
                            }
                        }
                    }
                }
                else{
                    for(let j=0;j<this.reel.length;j++){
                        for(let k=0;k<this.reelPattern[j].length;k++){
                            if(this.reelPattern[j][k] == _winSymbols[i] && winCount < _winCounts[i]){
                                this.reel[j].setSymbolAnimate(k+1,true);
                                this.eventManager.sendEventWithParam(config.EVENT.ENABLESCATTERFRAME,{x:j,y:k,symbol:this.reelPattern[j][k]});
                                winCount++;
                                k = this.reelPattern[j].length;
                            }else if(this.isScatterWild && this.reelPattern[j][k] == config.SYMBOLCODE.SYMBOL_WILD && winCount < _winCounts[i]){
                                this.reel[j].setSymbolAnimate(k+1,true);
                                this.eventManager.sendEventWithParam(config.EVENT.ENABLESCATTERFRAME,{x:j,y:k,symbol:this.reelPattern[j][k]});
                                winCount++;
                                k = this.reelPattern[j].length;
                            }
                        }
                    }
                }
            }
        }

 
        for(let i=0;i<_winlines.length;i++){
            let winCount =0;
            for(let j=0;j<this.reel.length;j++){
                if(winCount<_winCounts[i]){
                    this.reel[j].setDesposeStatus(config.PAYLINEARR[_winlines[i]-1][j]);
                    winCount++;
                }
            }
        }
        
        // console.log("preDespose");
        this.node.runAction(cc.sequence(
            cc.delayTime(2),
            cc.callFunc(this.requestDesposeResult,this),
        ));
    },
    requestDesposeResult(){
        for(let j=0;j<this.reel.length;j++){
            this.reel[j].resetDesposeAnim();
        }
        
        this.gameController.requestDesposeResult();
    },
    playDesposeAnimation(){
        for(let j=0;j<this.reel.length;j++){
            this.reel[j].isDimAllSymbol(false);
        }
        this.disableAllFrame();
        if(this.audioManager!=null)
            this.audioManager.playCustomSoundSfx(this.audioManager.desposeAnimClip,false);
        for(let j=0;j<this.reel.length;j++){
            this.reel[j].playDesposeAnimate();
        }
        this.node.runAction(cc.sequence(
            cc.delayTime(1.5),
            cc.callFunc(this.gameController.resultPresentation,this.gameController),
        ));
    },

    
    stopAllAnimation(){
        for(let i=0;i<this.reel.length;i++){
            this.reel[i].stopAllSymbolAnimation();
        }
    },
    stopAllWinFrame(){
        this.eventManager.sendEventWithParam(config.EVENT.ENABLEWINFRAME,{x:-1,y:-1});
    },
    playJackpotSymbol(){
        // for(let i=0;i<this.reel.length;i++){
        //     this.reel[i].playSpecificAnimation("j1");
        // }
        this.playSpecificAnimation(config.SYMBOLCODE.SYMBOL_JACKPOT);
    },
    playFreeSpinSymbol(){
        // for(let i=0;i<this.reel.length;i++){
        //     this.reel[i].playSpecificAnimation("c1");
        // }
        this.playSpecificAnimation(config.SYMBOLCODE.SYMBOL_FREESPINSCATTER);
    },
    playBonusSymbol(){
        this.playSpecificAnimation(config.SYMBOLCODE.SYMBOL_BONUS);
    },
    playFeverSymbol(){
        for(let j=0;j<this.reel.length;j++){
            for(let k=0;k<this.reelPattern[j].length;k++){
                if(this.reelPattern[j][k] == "f1"){
                    this.reel[j].playSpecialAnimation(k+1,true);
                    let code = config.SPECIALSYMBOLANIM["f1"];
                    this.eventManager.sendEventWithParam(config.EVENT.ENABLESCATTERFRAME,{x:j,y:k,symbol:code});
                }
                else if(this.reelPattern[j][k] == "f2"){
                    this.reel[j].playSpecialAnimation(k+1,true);
                    let code = config.SPECIALSYMBOLANIM["f2"];
                    this.eventManager.sendEventWithParam(config.EVENT.ENABLESCATTERFRAME,{x:j,y:k,symbol:code});
                }
                else{
                    if(!this.isDisableDimEffect)
                    this.reel[j].isSingleSymbol(k+1,true);
                }
            }
        }
    },
    playJackpotGameSymbol(){
        for(let j=0;j<this.reel.length;j++){
            for(let k=0;k<this.reelPattern[j].length;k++){
                if(this.reelPattern[j][k] == "j2"){
                    this.reel[j].playSpecialAnimation(k+1,true);
                    let code = config.SPECIALSYMBOLANIM["j2"];
                    this.eventManager.sendEventWithParam(config.EVENT.ENABLESCATTERFRAME,{x:j,y:k,symbol:code});
                }
                else if(this.reelPattern[j][k] == "j3"){
                    this.reel[j].playSpecialAnimation(k+1,true);
                    let code = config.SPECIALSYMBOLANIM["j3"];
                    this.eventManager.sendEventWithParam(config.EVENT.ENABLESCATTERFRAME,{x:j,y:k,symbol:code});
                }
                else{
                    if(!this.isDisableDimEffect)
                    this.reel[j].isSingleSymbol(k+1,true);
                }
            }
        }
    },
    playSpecificAnimation(symbolCode){
        for(let j=0;j<this.reel.length;j++){
            for(let k=0;k<this.reelPattern[j].length;k++){
                if(this.reelPattern[j][k] == symbolCode){
                    this.reel[j].playSpecialAnimation(k+1,true);
                    let code = config.SPECIALSYMBOLANIM[symbolCode];
                    this.eventManager.sendEventWithParam(config.EVENT.ENABLESCATTERFRAME,{x:j,y:k,symbol:code});
                }
                else{
                    if(!this.isDisableDimEffect)
                    this.reel[j].isSingleSymbol(k+1,true);
                }
            }
        }
    },

    linePaysShow(multiple)
    {
        if(this.linePaysView == null)
        {
            return
        }
        this.linePaysView.show(multiple)
    },

    linePaysHide()
    {
        if(this.linePaysView == null)
        {
            return
        }
        this.linePaysView.hide()
    },
});
