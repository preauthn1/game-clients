var config = require('MyBaseConfig');

cc.Class({
    extends: cc.Component,

    properties: {
        reelMainView: cc.Node,
        panelMainView: cc.Node,
        eventManager: cc.Node,
        bigWinView: cc.Node,
        winEffect: cc.Node,
        spinData: "",
    },
    start() {
        if (this.eventManager != null) {
            var reg = this.eventManager.getComponent(config.SCRIPT.REGISTEREVENT);
            reg.subscribeEvent(config.EVENT.STOPALLSPINNING, this.onReelStop, this);
        }
        if (this.reelMainView != null)
            this.reelMainView = this.reelMainView.getComponent(config.SCRIPT.REELMANAGER);
        if (this.panelMainView != null)
            this.panelMainView = this.panelMainView.getComponent(config.SCRIPT.PANELMANAGER);
        if (this.bigWinView != null)
            this.bigWinView = this.bigWinView.getComponent(config.SCRIPT.BIGWINVIEW);
        if (this.winEffect != null)
            this.winEffect = this.winEffect.getComponent(config.SCRIPT.WINEFFECT);

    },
    onReceiveSpinResult(data) {
        // console.log(data);
        this.winEffect.updateAmount(0);
        this.node.stopAllActions();
        this.reelMainView.startSpin();
        this.reelMainView.updateReelResult(data);
        this.spinData = data;
        this.bigWinView.disableBigWinEffect();

        this.node.runAction(cc.sequence(
            cc.delayTime(0.03),
            cc.callFunc(this.onDisplayResult, this),
            cc.delayTime(1),
            cc.callFunc(this.onDisplayWinAnim, this),
        ));
    },
    onDisplayResult() {
        this.reelMainView.receiveResult();
        this.reelMainView.instantStopReel();
        // this.node.runAction(cc.sequence(
        //     cc.delayTime(0.03),
        //     cc.callFunc(this.onDisplayWinAnim,this),
        // ));

        var isBigWin = false;
        var _totalWin = this.spinData.curTotalWin;
        //if got jackpot , five of kind will skip
        if (this.spinData.jackpotData != null && this.spinData.jackpotData != -1 && this.spinData.jackpotData[0] != -1) {
            this.bigWinView.startJackpotEffect(this.spinData.jackpotData);
        } else if (_totalWin / (this.spinData.lineNum * this.spinData.betValue) >= 20) {
            this.bigWinView.startMegaWinEffect(_totalWin);
        } else if (_totalWin / (this.spinData.lineNum * this.spinData.betValue) >= 10) {
            this.bigWinView.startBigWinEffect(_totalWin);
        }
        if (!isBigWin)
            this.winEffect.startCoinEffect(_totalWin);
    },
    onDisplayWinAnim() {
        this.reelMainView.startAllWinLine();
    },
    onReceivePlayerInfoUpdate: function (name, credit) {
        this.myCredit = credit;
        this.panelMainView.updatePlayerDetail(name, this.myCredit);
    },
});