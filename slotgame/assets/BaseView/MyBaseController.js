var config = require('MyBaseConfig');
cc.Class({
    extends: cc.Component,

    properties: {
        audioManager: cc.Node,
        eventManager: cc.Node,
        dataManager: cc.Node,
        panelMainView: cc.Node,
        reelMainView: cc.Node,
        popUpMainView: cc.Node,
        preFreeSpinMainView: cc.Node,
        freespinMainView: cc.Node,
        lineMainView: cc.Node,
        jackpotMainView: cc.Node,
        errorMainView: cc.Node,
        bigWinView: cc.Node,
        winEffect: cc.Node,
        loadingPage: cc.Node,

        spinData: "",

        delayFSAnimToPopup: 2,

        myCredit: 0,
        myTotalBet: 0,
        multiplier: 1,
        currentBetLine: 25,
        betValue: 0,
        enableRetrigger: false,
        isSpecialEvent: false,
        eventType: -1,
        freespinNum: 0,
        freespinMulti: 0,
        isInFreeSpin: false,
        countSpin: 0,
        resultTotalWin: 0,
        resultTotalBet: 0,
        isRequestDepose: 0,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        if(this.loadingPage!=null)
        this.loadingPage.active = true;

        if (this.errorMainView != null) {
            this.errorMainView = this.errorMainView.getComponent(config.SCRIPT.ERRORVIEW);
            this.errorMainView.controller = this;
        }
    },

    start() {
        if (this.dataManager != null)
            this.dataManager = this.dataManager.getComponent(config.SCRIPT.DATAMANAGER);

        if (this.popUpMainView != null)
            this.popUpMainView = this.popUpMainView.getComponent(config.SCRIPT.POPUPMANAGER);
        if (this.reelMainView != null)
            this.reelMainView = this.reelMainView.getComponent(config.SCRIPT.REELMANAGER);
        if (this.panelMainView != null)
            this.panelMainView = this.panelMainView.getComponent(config.SCRIPT.PANELMANAGER);
        if (this.bigWinView != null)
            this.bigWinView = this.bigWinView.getComponent(config.SCRIPT.BIGWINVIEW);
        if (this.winEffect != null)
            this.winEffect = this.winEffect.getComponent(config.SCRIPT.WINEFFECT);
        if (this.freespinMainView != null)
            this.freespinMainView = this.freespinMainView.getComponent(config.SCRIPT.FREESPIN);
        if (this.audioManager != null)
            this.audioManager = this.audioManager.getComponent(config.SCRIPT.AUDIOMANAGER);
        if (this.jackpotMainView != null)
            this.jackpotMainView = this.jackpotMainView.getComponent(config.SCRIPT.JACKPOTVIEW);


        if (this.reelMainView != null)
            this.reelMainView.setAudioManager(this.audioManager);
        if (this.popUpMainView != null)
            this.popUpMainView.audioManager = this.audioManager;
        if (this.winEffect != null)
            this.winEffect.audioManager = this.audioManager;
        if (this.bigWinView != null)
            this.bigWinView.audioManager = this.audioManager;
        if (this.jackpotMainView != null)
            this.jackpotMainView.audioManager = this.audioManager;
        if (this.panelMainView != null)
            this.panelMainView.audioManager = this.audioManager;

    },
    backToLobby() {
        this.cleanUp();
        cc.sys.localStorage.setItem("SlotBackFromLobby", 1);
        cc.director.loadScene("MyLobby");
    },

    cleanUp() {
        if (this.dataManager != null)
            this.dataManager.cleanUp();
    },
    //Show Error message
    onVerifyFail() {

    },
    onCheckVersionFail() {
        console.log("onCheckVersionFail");
        if (this.errorMainView != null)
            this.errorMainView.disconnectWithMsg("1","check version fail");
    },
    onLoginFail(err) {
        console.log("onLoginFail");
        if (this.errorMainView != null)
            this.errorMainView.loginFail();
    },
    onConnectWsFail() {
        console.log("onConnectWsFail");
        if (this.errorMainView != null)
            this.errorMainView.disconnectWithMsg("2","connect server fail");
    },
    onVerifyFail() {
        console.log("onVerifyFail");
        if (this.errorMainView != null)
            this.errorMainView.disconnectWithMsg("3","verify fail");
    },
    onGameHide() {
        if (this.errorMainView != null)
            this.errorMainView.disconnect();
    },
    onDisconnect(er, msg) {
        // console.log("onDisconnect" + this.errorMainView);
        if (this.errorMainView != null)
            this.errorMainView.disconnectWithMsg(er, msg);
        // this.errorMainView
    },
    showError(msg) {
        if (this.errorMainView != null)
            this.errorMainView.show(msg);
    },
    onGameLock(gameType) {
        // console.log("Game Type 1: " +gameType);
        if (this.errorMainView != null)
            this.errorMainView.errorGameLock(gameType);
    },
    onReceivePlayerUpdate: function (type, credit) {
        this.myCredit = credit;
        if (type == 0) {
            this.panelMainView.updatePlayerDetail("", this.myCredit);
        }
    },
    onReceivePlayerInfoUpdate: function (name, credit) {
        this.myCredit = credit;
        this.panelMainView.updatePlayerDetail(name, this.myCredit);
    },
    onReceiveChangeMode: function (data) {
        // this.gameMode = data.mode;
        // this.slotSpinData.freeSpinLeft = data.freespinNumber;
        // this.slotSpinData.freespinMultiplier = data.freespinMultiplier;
        // this.isChangeGameMode = true;
        // this.isFirstFreeSpinAfterChangeMode = true;
        this.freespinNum = -1;

        console.log("onReceiveChangeMode : " + data);
        if (data == 1) {
            this.isSpecialEvent = true;
            this.eventType = -1;

            return;
        }

        var type = data[0];
        if (type == 1) {
            var num = data[1][0];
            if (num > 0) {
                this.freespinNum = data[1][0];
                this.freespinMulti = data[1][1];
                this.eventType = 0;
                this.isSpecialEvent = true;
            }
        } else if (type == 2) {
            this.eventType = 0;
            this.isSpecialEvent = true;
        } else if (type == 3) {
            //gameble
        } else if (type == 4) {
            //bonus 
            //bonus update click data[1][0];
            this.eventType = 4;
            this.isSpecialEvent = true;
            this.popUpMainView.updateBonusTotalClick(data[1][0]);
        }
    },

    onReceiveStartGameData(data) {
        // console.log(data);
        if (this.loadingPage != null)
            this.loadingPage.active = false;

        this.spinData = data;
        this.myCredit = data.playerCredit;
        this.panelMainView.updatePlayerDetail(data.playerName, this.myCredit);

        this.isSpecialEvent = data.isSpecialEvent;
        this.eventType = data.eventType;
        this.freespinNum = data.freeSpinNum;
        this.freespinMulti = data.freeSpinMultiplier;
        // console.log("Start FreeSpin Num : " +this.freespinNum +" / " +data.roundId +" / "+data.gameActionData);
        // console.log("gameActionData : " +data.gameActionData);
        if (data.gameActionData > -1) {
            if (window.jpMainView != null) {
                window.jpMainView.close();
            }
            if (this.popUpMainView != null)
                this.popUpMainView.restorePreFreeSpinGame(data.restoreDataFSArr);

            return;
        }

        if (this.freespinNum > 0 && data.roundId != -1) {
            if (window.jpMainView != null) {
                window.jpMainView.close();
            }
            this.panelMainView.updateFreeSpinTotalWin(this.spinData.curTotalWin - this.spinData.totalGameWin);
            this.popUpMainView.popUpEnterFSResult(this.spinData.freeSpinNum, this.spinData.freeSpinMultiplier);
            console.log(this.spinData.freeSpinNum);
            this.panelMainView.updateFreeSpinNumber(this.spinData.freeSpinNum);
            this.isInFreeSpin = true;
        }
        if (this.eventType == 4) {
            if (window.jpMainView != null) {
                window.jpMainView.close();
            }
            let bonusNum = [];
            for (let i = 0; i < data.restoreDataBonus.length; i++) {
                bonusNum.push(data.restoreDataBonus[i]);
            }
            this.popUpMainView.updateBonusTotalClick(bonusNum.length + data.restoreBonusRemaining);
            this.popUpMainView.restoreBonusNumber(bonusNum);
        }

        if (data.roundId != -1) {
            this.reelMainView.updateReelResult(this.spinData);
            this.reelMainView.instantUpdateAllReel(false);
            this.reelMainView.updateReelPosition();
        } else {
            this.reelMainView.instantUpdateAllReel(true);
        }
        // console.log("this isSpecialEvent : " +this.isSpecialEvent);
        // console.log("this eventType : " +this.eventType);
        if (this.isSpecialEvent) {
            if (this.eventType == 0) {
                // console.log("Is Special Event!!! :" + this.isSpecialEvent);
                this.node.runAction(cc.sequence(
                    cc.delayTime(0),
                    // cc.callFunc(this.updateFreeSpin, this),
                    // cc.delayTime(2),
                    cc.callFunc(this.playSpecialEvent, this),
                ));
            }
        }
    },
    onReceiveJackpotData(_data) {
        var sender = this.node.parent.getComponent(config.SCRIPT.REGISTEREVENT);
        // sender.sendEvent(config.EVENT.ENABLEWINLINE);
        //sender.sendEventWithParam(config.EVENT.REGISTEREVENT,{data:_data})
    },
    onReceiveSpinResult(data) {
        this.isSpecialEvent = false;

        this.spinData = data;
        console.log(this.spinData.freeSpinNum + " / " + this.freespinNum);
        if (this.spinData.freeSpinNum > this.freespinNum)
            this.enableRetrigger = false;

        // console.log("Receive Spin Result0");
        this.freespinNum = this.spinData.freeSpinNum;
        this.panelMainView.updateFreeSpinNumber(this.freespinNum);
        // console.log("Receive Spin Result1");
        this.reelMainView.updateReelResult(this.spinData);
        // console.log("Receive Spin Result3");

        // console.log("Receive Spin Result2");
        // console.log(this.spinData);
        this.countSpin++;
        this.resultTotalWin += this.spinData.curTotalWin;

        if (this.isRequestDepose == 1) {
            this.reelMainView.playDesposeAnimation();
            this.panelMainView.isConnection = false;
        }
        else {
            this.beforeReelStop();
        }
        // console.log(this.countSpin +" : " +this.resultTotalWin +" / " +this.resultTotalBet);
    },
    beforeReelStop() {
        this.reelMainView.receiveResult();
    },
    onReelStop() {
        // console.log("onReelStop"  + this.spinData.freeSpinNum);
        if (this.audioManager != null && this.spinData.freeSpinNum < 0)
            this.audioManager.spinStopBGM();

        var isFiveOfKind = false;
        for (let i = 0; i < this.spinData.winCounts.length; i++) {
            if (this.spinData.winCounts[i] == 5) {
                isFiveOfKind = true;
            }
        }
        var delayTime = 0;
        var multiActions = [];
        var isBigWin = false;
        multiActions.push(cc.delayTime(0));
        multiActions.push(cc.delayTime(0));

        var _totalWin = this.spinData.curTotalWin;
        if (this.spinData.freeSpinNum >= 0) {
            //this.freespinMainView.updateFreeSpinTotalWin(this.spinData.curTotalWin - this.spinData.totalGameWin);
            // this.panelMainView.updateFreeSpinTotalWin(this.spinData.curTotalWin - this.spinData.totalGameWin);
            _totalWin = 0;
            for (let i = 0; i < this.spinData.winNumbers.length; i++) {
                _totalWin += this.spinData.winNumbers[i];
            }
        }

        //if got jackpot , five of kind will skip
        if (this.spinData.jackpotData != null && this.spinData.jackpotData != -1 && this.spinData.jackpotData[0] != -1) {
            //multiActions.push(cc.delayTime(delayTime));
            // multiActions.push(cc.callFunc(this.updateJackpot,this));
            // multiActions.push(cc.callFunc(this.startJackpot,this));
            // multiActions.push(cc.delayTime(5));
            // console.log("Enable Jackpot Effect : " +this.spinData.jackpotData);
            // console.log("Enable Jackpot Effect : " +this.spinData.jackpotData[0]);
            this.eventType = 5;
            this.isSpecialEvent = true;
            // this.updateJackpot();
            delayTime = this.bigWinView.startJackpotEffect(this.spinData.jackpotData);
            isBigWin = true;
        } else if (this.enableRetrigger) {
            delayTime = this.popUpMainView.enableRetrigger(enableRetrigger)
            multiActions.push(cc.delayTime(delayTime));
            multiActions.push(cc.callFunc(this.updateFreeSpin, this));
            multiActions.push(cc.delayTime(2));
        } else if (_totalWin / (this.spinData.lineNum * this.spinData.betValue) >= 20) {
            delayTime = this.bigWinView.startMegaWinEffect(_totalWin);
            isBigWin = true;
        } else if (_totalWin / (this.spinData.lineNum * this.spinData.betValue) >= 10) {
            delayTime = this.bigWinView.startBigWinEffect(_totalWin);
            isBigWin = true;
        } else if (isFiveOfKind) {
            delayTime = this.popUpMainView.enableFiveOfKind(isFiveOfKind);
            multiActions.push(cc.delayTime(delayTime));
        }

        if (!isBigWin)
            multiActions.push(cc.callFunc(this.resultPresentation, this));

        this.node.runAction(cc.sequence(multiActions));
    },
    resultPresentation: function () {
        // if(!this.enableRetrigger){
        //     if(this.eventType < 0){
        //        this.panelMainView.reelCompleteStop();
        //     }
        // }

        // console.log("resultPresentation : ");
        var _totalWin = this.spinData.curTotalWin;
        if (this.spinData.freeSpinNum >= 0) {
            //this.freespinMainView.updateFreeSpinTotalWin(this.spinData.curTotalWin - this.spinData.totalGameWin);
            this.panelMainView.updateFreeSpinTotalWin(this.spinData.curTotalWin - this.spinData.totalGameWin);
            _totalWin = 0;
            for (let i = 0; i < this.spinData.winNumbers.length; i++) {
                _totalWin += this.spinData.winNumbers[i];
            }
        }

        //this.panelMainView.updateWinAmount(_totalWin);
        this.winEffect.startCoinEffect(_totalWin);

        this.reelMainView.startAllWinLine();
    },
    updatePlayerCredit() {
        this.panelMainView.updatePlayerDetail("", this.myCredit);
    },
    afterAllWinLine() {
        this.reelMainView.disableAllFrame();

        this.panelMainView.updatePlayerDetail("", this.myCredit);
        // this.node.runAction(cc.sequence(
        //     cc.delayTime(2),
        //     cc.callFunc(this.updatePlayerCredit,this),
        // ));
        // console.log("afterAllWinLine");
        if (this.isSpecialEvent) {
            this.panelMainView.startSpecialEvent();
            if (this.eventType == 0) {
                var delayTime = 0;
                // if(this.enableRetrigger){
                //     this.enableRetrigger = false;
                //     // this.freespinMainView.enableRetrigger();
                //     this.delayTime = 2;
                // }

                this.node.runAction(cc.sequence(
                    cc.delayTime(2),
                    cc.callFunc(this.updateFreeSpin, this),
                    cc.delayTime(this.delayFSAnimToPopup),
                    cc.callFunc(this.playSpecialEvent, this),
                ));
            } else if (this.eventType == -1) {
                this.node.runAction(cc.sequence(
                    cc.delayTime(2),
                    cc.callFunc(this.backFromSpecialEvent, this),
                ));
            } else if (this.eventType == 4) {
                this.node.runAction(cc.sequence(
                    cc.delayTime(2),
                    cc.callFunc(this.updateBonus, this),
                    cc.delayTime(2),
                    cc.callFunc(this.playSpecialEvent, this),
                ));
            } else if (this.eventType == 5) {
                this.node.runAction(cc.sequence(
                    cc.delayTime(2),
                    cc.callFunc(this.updateJackpot, this),
                    cc.delayTime(0),
                    cc.callFunc(this.backFromJackpotEvent, this),
                ));
            }
        } else if (this.isBigWin) {
            if (this.panelMainView.autoSpinAmt > 0) {
                this.node.runAction(cc.sequence(
                    cc.delayTime(2),
                    cc.callFunc(function () {
                        this.panelMainView.startSpin();
                    }, this),
                ));
            } else if (this.freespinNum > 0) {
                this.node.runAction(cc.sequence(
                    cc.delayTime(2),
                    cc.callFunc(function () {
                        this.panelMainView.startSpin();
                    }, this),
                ));
            }
        }
        else if (this.reelMainView.isDesposeSlot) {
            if (this.panelMainView.autoSpinAmt > 0 && this.reelMainView.spinData.winLines.length <= 0) {
                this.node.runAction(cc.sequence(
                    cc.delayTime(1),
                    cc.callFunc(function () {
                        this.panelMainView.startSpin();
                    }, this),
                ));
                //this.resetDesposeStatus();
            }
            else if (this.freespinNum > 0 && this.reelMainView.spinData.winLines.length <= 0) {
                this.node.runAction(cc.sequence(
                    cc.delayTime(1),
                    cc.callFunc(function () {
                        this.panelMainView.startSpin();
                    }, this),
                ));
            }
            else {
                if (this.reelMainView.spinData.winLines.length <= 0) {
                    this.panelMainView.resetAllButton();
                    this.panelMainView.isSpinning = false;
                    //this.resetDesposeStatus();
                }
                this.reelMainView.startWinLineByLine();
            }

            this.isRequestDepose = 0;
            return;
        }
        else {
            // console.log("Check after freespin : " +this.freespinNum);
            if (this.panelMainView.autoSpinAmt > 0) {
                this.node.runAction(cc.sequence(
                    cc.delayTime(1),
                    cc.callFunc(function () {
                        this.panelMainView.startSpin();
                    }, this),
                ));
            } else if (this.freespinNum > 0) {
                this.node.runAction(cc.sequence(
                    cc.delayTime(1),
                    cc.callFunc(function () {
                        this.panelMainView.startSpin();
                    }, this),
                ));
            } else {
                this.panelMainView.resetAllButton();
                this.reelMainView.startWinLineByLine();

                // if (window.jpMainView != null) {
                //     window.jpMainView.open();
                // }
            }
        }
        this.panelMainView.isSpinning = false;
    },
    resetDesposeStatus() {

    },
    finishFirstRoundLine() {
        this.reelMainView.preDespose();
    },
    requestDesposeResult() {
        // console.log("requestDesposeResult");
        this.isRequestDepose = 1;
        this.dataManager.onRequestSpinResult(config.PAYLINEARR.length, this.panelMainView.typeLineBets[this.panelMainView.lineBet], 1);
    },
    updateFreeSpin() {
        this.resetAllAnimation();
        if (this.audioManager != null)
            this.audioManager.playCustomSoundSfx(this.audioManager.freeSpinTrigger, false);

        this.reelMainView.playFreeSpinSymbol();
    },
    updateJackpot() {
        this.resetAllAnimation();
        if (this.audioManager != null)
            this.audioManager.playCustomSoundSfx(this.audioManager.jackpotTrigger, false);

        this.reelMainView.playJackpotSymbol();
    },
    startJackpot() {
        // console.log(this.spinData.jackpotData[0] + "/" + this.spinData.jackpotData[2]);
        var time = this.jackpotMainView.showJackpot(this.spinData.jackpotData[0], this.spinData.jackpotData[2]);
        this.node.runAction(cc.sequence(
            cc.delayTime(time),
            cc.callFunc(function () {
                // this.panelMainView.resetAllButton();
                this.panelMainView.updatePlayerDetail("", this.myCredit);
            }, this),
        ));
    },
    updateBonus() {
        this.resetAllAnimation();
        if (this.audioManager != null)
            this.audioManager.playCustomSoundSfx(this.audioManager.bonusTriggerClip, false);

        this.reelMainView.playBonusSymbol();
    },
    resetAllAnimation() {
        this.reelMainView.stopAllAnimation();
        this.reelMainView.stopAllWinFrame();
    },
    playSpecialEvent() {
        this.resetAllAnimation();

        if (window.jpMainView != null) {
            window.jpMainView.close();
        }
        if (this.eventType == 0) {
            // console.log("Controller Start Free Spin!");
            this.panelMainView.updateFreeSpinTotalWin(0);
            this.popUpMainView.startFreeSpin(this.spinData.freeSpinNum, this.spinData.freeSpinMultiplier);
            this.popUpMainView.updateFreeSpinNumber(this.spinData.freeSpinNum);
            this.isInFreeSpin = true;
        } else if (this.eventType == 4) {
            this.panelMainView.updateFreeSpinTotalWin(0);
            this.popUpMainView.startBonus();
        } else if (this.eventType == 5) {
            this.startJackpot();
        }

        // this.panelMainView.resetAutoSpin();
    },
    updateFromFSSelectGame(num, multi) {
        this.freespinNum = num;
    },
    enterFreeSpin() {
        this.freespinMainView.enterFreeSpin();
        this.panelMainView.updateFreeSpinNumber(this.freespinNum);
        this.panelMainView.resetAllButton();
        if (this.audioManager != null) {
            this.audioManager.playBGM(1);
        }
    },
    backFromSpecialEvent() {
        // this.panelMainView.resetAllButton();
        this.panelMainView.updatePlayerDetail("", this.myCredit);
        this.panelMainView.resetFreeSpinNum();
        if (this.freespinMainView != null) {
            this.freespinMainView.exitFreeSpin();
        }
        if (this.popUpMainView != null)
            this.popUpMainView.exitFreeSpinMode(this.spinData.curTotalWin, this.spinData.totalGameWin, this.spinData.curTotalWin - this.spinData.totalGameWin);

        if (this.winEffect != null)
            this.winEffect.updateAmount(this.spinData.curTotalWin);

        if (this.audioManager != null) {
            this.audioManager.stopBGM();
            this.audioManager.backFromSpecialToNormal();
        }
        this.isInFreeSpin = false;

        if (window.jpMainView != null) {
            window.jpMainView.open();
        }
    },
    backFromExitFSEvent() {
        this.panelMainView.resetAllButton();
    },
    backFromJackpotEvent() {
        this.panelMainView.resetAllButton();
        this.panelMainView.updatePlayerDetail("", this.myCredit);

        if (this.winEffect != null)
            this.winEffect.updateAmount(this.spinData.curTotalWin);

        if (this.audioManager != null) {
            this.audioManager.stopBGM();
            this.audioManager.backFromSpecialToNormal();
        }


        // this.node.runAction(cc.sequence(
        //     cc.delayTime(2),
        //     cc.callFunc(function () {
        //         this.panelMainView.resetAllButton();
        //     }, this),
        // ));
        if (window.jpMainView != null) {
            window.jpMainView.open();
        }
    },
    backFromBonusSpecialEvent() {
        this.panelMainView.resetAllButton();
        this.panelMainView.updatePlayerDetail("", this.myCredit);

        if (this.winEffect != null)
            this.winEffect.updateAmount(this.spinData.curTotalWin + this.spinData.totalGameWin);

        if (window.jpMainView != null) {
            window.jpMainView.open();
        }
    },

    //Panel Function
    stopSpin() {
        this.reelMainView.instantStopReel();
    },
    startSpin() {
        this.panelMainView.isSpinning = true;
        this.node.stopAllActions();
        if(this.popUpMainView!=null)
        this.popUpMainView.disableExitFreeSpin();
        if (this.winEffect != null)
            this.winEffect.hideObject();

        //console.log("startSpin");
        this.reelMainView.startSpin();

        // console.log("startSpin" + this.spinData.freeSpinNum);
        if (this.audioManager != null && this.spinData.freeSpinNum <= 0) {
            this.audioManager.spinPlayBGM(0);
        }
    },
    //ErrorMessage Prompt
    insuffucientCoins() {
        if (this.errorMainView != null)
            this.errorMainView.insuffucientCoins();
    },
    onReceiveFreeSpinInfo(data) {
        // console.log(data);
        if (this.popUpMainView != null) {
            this.popUpMainView.onReceiveFreeSpinInfo(data);
        }
    },
    onReceiveBonusInfo(data) {
        if (this.popUpMainView != null) {
            this.popUpMainView.onReceiveBonusInfo(data);
        }
    },

    //Request Data
    onRequestJackpotInfo: function (val) {
        this.dataManager.onRequestJackpotInfo(val);
    },
    onRequestSpinResult: function (payline, betPerLine, multiplier) {
        // if (this.myCredit < (payline * betPerLine)) {
        //     this.insuffucientCoins();
        //     return;
        // }
        // if (window.jpMainView != null) {
        //     window.jpMainView.close();
        // }
        this.resetDesposeStatus();
        this.resultTotalBet += payline;
        this.dataManager.onRequestSpinResult(payline, betPerLine, multiplier);
    },
    onRequestFreeInfo: function (val) {
        this.dataManager.onRequestFreeInfo(val);
    },
    onRequestBonusInfo: function (val) {
        this.dataManager.onRequestBonusInfo(val);
    },
    // update (dt) {},
});