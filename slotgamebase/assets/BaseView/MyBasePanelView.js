var config = require('MyBaseConfig');
var accounting = require('Accounting');
var utils = require('Utils');
var MobileSocket = require("MobileSocket");
cc.Class({
    extends: cc.Component,

    properties: {
        controller:cc.Node,
        eventManager:cc.Node,
        audioManager:cc.Node,
        playerCredit:cc.Label,
        playerName:cc.Label,
        lineBetDisplay:cc.Label,
        totalBetDisplay:cc.Label,
        linesDisplay:cc.Label,
        backLobbyBtn:cc.Button,
        spinBtn:cc.Button,
        stopBtn:cc.Button,

        sidePanel:cc.Node,
        sideBtn:cc.Button,
        sideBtnCancel:cc.Button,
        totalBetPlus:cc.Button,
        totalBetMinus:cc.Button,

        lineBet:0,
        typeLineBets:[cc.Integer],
        lineBetText:cc.Label,

        autoSpinPanel:cc.Node,
        autoSpinLabel:cc.Label,
        autoSpinStopLabel:cc.Label,
        autoSpinAmt:0,
        autoSpinPlayBtn:cc.Button,
        autoSpinStopBtn:cc.Button,
        autoSpinCancelBtn:cc.Button,
        autoSpinSlider:cc.Slider,
        isAutoSpinPanelOpen:false,
        isSidePanelOpen:false,

        winAmountLabel:cc.Label,

        freespinTotalWinLabel:cc.Node,
        freespinNumLabel:cc.Node,
        freespinNumber:0,

        isSpinning:false,
        isConnection:false,
        connectionTimer:0,

        betPanel:cc.Node,
        menuPanel:cc.Node,
        inifinityBtn:cc.Button,
        maxBetBtn:cc.Button,

        delayFreeSpinEnterSpin:0.5,
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {
        if(this.controller!=null)
        this.controller = this.controller.getComponent(config.SCRIPT.GAMECONTROLLER);
        if(this.spinBtn!=null)
        this.spinBtn.node.on('click', this.startSpin, this);
        if(this.stopBtn!=null){
            this.stopBtn.node.on('click', this.stopSpin, this);
            this.stopBtn.node.active = false;
        }
        if(this.autoSpinPlayBtn!=null){
            this.autoSpinPlayBtn.node.on('click', this.autoSpin, this);
            this.autoSpinPlayBtn.node.active = false;
        }
        if(this.autoSpinStopBtn!=null){
            this.autoSpinStopBtn.node.on('click', this.stopAutoSpin, this);
            this.autoSpinStopBtn.node.active = false;
        }
        if(this.autoSpinCancelBtn!=null)
        this.autoSpinCancelBtn.node.on('click', this.resetAutoSpin, this);
        if(this.sideBtn!=null)
        this.sideBtn.node.on('click', this.openSidePanel, this);
        if(this.sideBtnCancel!=null)
        this.sideBtnCancel.node.on('click', this.disableSidePanel, this);
        if(this.totalBetMinus!=null)
        this.totalBetMinus.node.on('click', this.minusLineBet, this);
        if(this.totalBetPlus!=null)
        this.totalBetPlus.node.on('click', this.addLineBet, this);

        if(this.backLobbyBtn!=null)
        this.backLobbyBtn.node.on('click', this.backToLobby, this);

        if(this.lineBetDisplay!=null)
        this.linesDisplay.string = config.PAYLINEARR.length;

        if(this.inifinityBtn!=null)
        this.inifinityBtn.node.on('click', this.startInfinityAutoSpin, this);

        if(this.maxBetBtn!=null)
        this.maxBetBtn.node.on('click', this.maxBet, this);
        
        
        if(this.eventManager!=null)
        var reg = this.eventManager.getComponent(config.SCRIPT.REGISTEREVENT);
        else
        var reg = this.node.parent.getComponent(config.SCRIPT.REGISTEREVENT);
        reg.subscribeEvent(config.EVENT.STOPALLSPINNING,this.disableStopSpinBtn,this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        
        this.freespinNumber = -1;

        if(window.typeLineBets!=null)
        this.typeLineBets = window.typeLineBets; 
        this.updateLineBet();
        if(!cc.sys.isNative){
            // this.backLobbyBtn.node.active = false;
        }
    },
    backToLobby(){
        if(this.controller!=null)
        this.controller.cleanUp();
        
        // if(window.isWebSite == "1"){
        //     window.location.href = "../../../public/lobby/index.html?r="+Math.random();
        //     return;
        // }
        // else if(window.isWebSite == "2"){
        //     window.location.href = "uniwebview://backlobby";
        //     return;
        // }
        // else{
        //     window.location.href = "../../../public/lobbymobile/index.html";
        //     return;
        // }

        console.log(window.backLobbyLink);
        let link = window.backLobbyLink;
        window.location.href = link;
        return;

        if(this.controller!=null)
        this.controller.backToLobby();

        // cc.sys.localStorage.setItem("SlotBackFromLobby",1);
        // cc.director.preloadScene("MyLobby",function(count,total,event){
        //     // console.log(" Count : " +count);
        //     // console.log(" Total : " +total);
        //     // console.log(event);
        // }, function () {
        //     cc.log("Next scene preloaded");
        //     cc.director.loadScene("MyLobby");
        // });
    },
    onKeyDown: function (event) {
        // console.log(event.keyCode);
        switch (event.keyCode) {
           
           case 32: //Space
           this.checkButtonCondition();
           break;
           
        }
    },
    checkButtonCondition(){
        // console.log("checkButtonCondition");
        if(this.spinBtn.node.active && this.spinBtn.interactable){
            this.startSpin();
        }
        else if(this.stopBtn.node.active){
            this.stopSpin();
        }
        else if(this.autoSpinStopBtn.node.active){
            this.stopAutoSpin();
        }
    },
    updatePlayerDetail(id,credit){
        if(this.playerName!=null && id!="")
        this.playerName.string = id;
        if(this.playerCredit!=null)
        this.playerCredit.string = accounting.formatNumberPrecision(credit)
    },

    startSpin(){
        // console.log(this.controller.myCredit +" / " +this.controller.myTotalBet);
        if(this.controller.myCredit < this.controller.myTotalBet && this.freespinNumber <= 0){
            this.controller.insuffucientCoins();
            this.resetAutoSpin();
            this.resetAllButton();
            return;
        }
        if(this.autoSpinAmt > 0 && this.autoSpinAmt != 100)
        this.autoSpinAmt -= 1;
        if (this.autoSpinAmt != 100 && this.autoSpinAmt >=0 && this.autoSpinStopLabel!=null) {
            this.autoSpinStopLabel.string = this.autoSpinAmt;
        }

        this.disableAutoSpinPanel();
        this.disableSidePanel();
        if(this.autoSpinAmt > 0 && this.freespinNumber <= 0){
            this.autoSpinStopBtn.node.active = true;
            // this.stopBtn();
        }
        else{
            this.stopBtn.node.active = true;
        }

        //this.spinBtn.node.active = false;
        if(this.spinBtn!=null){
            this.spinBtn.node.active = false;
            this.spinBtn.interactable = false;
        }
        // console.log("Disable SPinBtn");
        if(this.audioManager!=null)
            this.audioManager.playCustomSoundSfx(this.audioManager.buttonClickClip,false);
        this.controller.startSpin();

        this.isConnection = true;
        this.connectionTimer = 0;
        this.node.runAction(cc.sequence(
            cc.delayTime(0.03),
            cc.callFunc(function(){
                this.controller.onRequestSpinResult(config.PAYLINEARR.length,this.typeLineBets[this.lineBet],1);
            },this)
        ));

        if(this.betPanel!=null)
        this.betPanel.active = false;
        // if(this.menuPanel!=null)
        // this.menuPanel.active = false;
        if(this.inifinityBtn!=null){
            this.inifinityBtn.interactable = false;
        }
    },
    openBetPanel(){
        if(this.betPanel.active){
            this.betPanel.active = false;
        }else{
            this.betPanel.active = true;
            this.menuPanel.active = false;
        }
    },
    openMenuPanel(){
        if(this.menuPanel.active){
            this.menuPanel.active = false;
        }else{
            this.menuPanel.active = true;
            this.betPanel.active = false;
        }
    },
    requestSpin(){
        this.controller.onRequestSpinResult(config.PAYLINEARR.length,this.typeLineBets[this.lineBet],1);
    },
    stopSpin(){
        if(this.audioManager!=null)
            this.audioManager.playCustomSoundSfx(this.audioManager.buttonClickClip,false);
        
        this.disableStopSpinBtn();
        this.controller.stopSpin();
    },
    disableStopSpinBtn(){
        if(this.stopBtn!=null)
        this.stopBtn.node.active = false;
        
        if (!this.autoSpinStopBtn.node.active)
            this.spinBtn.node.active = true;
    },
    resetAllButton(){
        if(this.freespinNumber > 0){
            this.node.runAction(cc.sequence(
                cc.delayTime(this.delayFreeSpinEnterSpin),
                cc.callFunc(this.startSpin,this)
            ));

            // this.startSpin();
        }
        else if(this.autoSpinAmt > 0){
            this.autoSpinStopBtn.node.active = true;
            // this.spinBtn.node.active = false;
            if(this.spinBtn!=null){
                this.spinBtn.node.active = false;
                this.spinBtn.interactable = false;
            }
            this.autoSpin();
        }
        else{
            console.log("Reset All Button");
            // this.spinBtn.node.active = true;
            if(this.spinBtn!=null){
                this.spinBtn.node.active = true;
                this.spinBtn.interactable = true;
            }
            this.autoSpinStopBtn.node.active = false;
            // if(this.inifinityBtn!=null)
            // this.inifinityBtn.node.active = true;
            if(this.inifinityBtn!=null){
                this.inifinityBtn.interactable = true;
            }
        }
        this.isConnection = false;
        this.connectionTimer = 0;
    },
    startSpecialEvent(){
        this.autoSpinStopBtn.node.active = false;
        this.spinBtn.node.active = true;
        // this.stopAutoSpin();
    },
    updateWinAmount(amount){
        if(amount==0)
        return;
        
        var value = accounting.formatNumber(amount, 2, ",");
        this.winAmountLabel.string = value;    

        this.winAmountLabel.node.runAction(cc.sequence(
            cc.delayTime(1),
            cc.callFunc(function(){
                this.winAmountLabel.string = "0";  
            },this)
        ));
    },
    maxBet(){
        if(this.freespinNumber >= 0){
            return;
        }
        if(this.isSpinning){
            return;
        }
        if(this.audioManager!=null)
            this.audioManager.playCustomSoundSfx(this.audioManager.buttonClickClip,false);

        this.lineBet = this.typeLineBets.length;
        this.updateLineBet();
    },
    addLineBet(){
        if(this.freespinNumber >= 0){
            return;
        }
        if(this.isSpinning){
            return;
        }
        if(this.autoSpinAmt > 0)
        {
            return;
        }
        // Bonus
        if(this.controller.eventType == 4)
        {
            return;
        }
        if(this.audioManager!=null)
            this.audioManager.playCustomSoundSfx(this.audioManager.buttonClickClip,false);
        this.lineBet+=1;
        this.updateLineBet();
    },
    minusLineBet(){
        if(this.freespinNumber >= 0){
            return;
        }
        if(this.isSpinning){
            return;
        }
        if(this.autoSpinAmt > 0)
        {
            return;
        }
        // Bonus
        if(this.controller.eventType == 4)
        {
            return;
        }
        if(this.audioManager!=null)
            this.audioManager.playCustomSoundSfx(this.audioManager.buttonClickClip,false);
        this.lineBet-=1;
        this.updateLineBet();
    },
    updateLineBet(){
        if(this.lineBet < 0){
            this.lineBet = 0;
        }
        if(this.lineBet >= this.typeLineBets.length){
            this.lineBet = this.typeLineBets.length-1;
        }
        if(this.lineBetText!=null)
        this.lineBetText.string = this.typeLineBets[this.lineBet];

        var _totalBet = this.typeLineBets[this.lineBet] * config.PAYLINEARR.length;
        if(this.controller!=null)
        this.controller.updateTotalBet(_totalBet);
        if(this.totalBetDisplay!=null)
        this.totalBetDisplay.string = accounting.formatNumberPrecision(_totalBet)
        if(this.lineBetDisplay!=null)
        this.lineBetDisplay.string = this.typeLineBets[this.lineBet];
        if(this.linesDisplay!=null)
        this.linesDisplay.string = config.PAYLINEARR.length;
    },
    restoreBackLineBet(value){
        for(let i=0;i<this.typeLineBets.length;i++){
            if(this.typeLineBets[i] == value){
                this.lineBet = i;
                break;
            }
        }
        this.updateLineBet();
    },
    //free spin function
    updateFreeSpinNumber(number){
        var fsNum = number;
        if(number < 0)
        {
            number = 0;
        }

        if(this.freespinNumLabel==null)
        return;
        
        //this.freespinNumLabel.string = number;
        if(this.freespinNumLabel.getComponent(cc.Label)!=null){
            this.freespinNumLabel.getComponent(cc.Label).string = number;
        }
        if(this.freespinNumLabel.getComponent(cc.RichText)!=null){
            this.freespinNumLabel.getComponent(cc.RichText).string = utils.customRichTextFont(number);
        }
        this.freespinNumber = fsNum;
    },
    updateFreeSpinTotalWin(number){
        // console.log(number);
        //this.freespinTotalWinLabel.string = number;
        var temp = accounting.formatNumber(number, 0, ",");
        // console.log(temp);
        if(this.freespinTotalWinLabel.getComponent(cc.Label)!=null){
            this.freespinTotalWinLabel.getComponent(cc.Label).string = number;
        }
        if(this.freespinTotalWinLabel.getComponent(cc.RichText)!=null){
            this.freespinTotalWinLabel.getComponent(cc.RichText).string = utils.customRichTextFont(temp);
        }
    },
    startInfinityAutoSpin(){
        this.autoSpinAmt = 100;
        this.autoSpin();
    },
    ///Auto spin function
    autoSpin(){
        if(this.audioManager!=null)
            this.audioManager.playCustomSoundSfx(this.audioManager.buttonClickClip,false);
        
        this.disableAutoSpinPanel();
        this.startSpin();
    },
    stopAutoSpin(){
        this.autoSpinStopBtn.node.active = false;
        this.autoSpinAmt = 0;
        this.spinBtn.node.active = true;
    },
    onHoldSpin(){
        if(this.freespinNumber > 0){
            return;
        }

        if(this.autoSpinPlayBtn!=null)
        this.autoSpinPlayBtn.node.active = true;
        // if(this.spinBtn!=null)
        // this.spinBtn.node.active = false;
        if(this.spinBtn!=null){
            this.spinBtn.node.active = false;
            this.spinBtn.interactable = false;
        }

        if(this.audioManager!=null)
            this.audioManager.playCustomSoundSfx(this.audioManager.buttonClickClip,false);
        
        this.updateAutoSpinValue(1);
        this.autoSpinSlider.progress = 1;
        this.isAutoSpinPanelOpen = true;
        this.autoSpinPanel.getComponent(cc.Animation).play('autoSpinEnable');
    },
    disableAutoSpinPanel(){
        if(!this.isAutoSpinPanelOpen)
        return;

        if(this.autoSpinPlayBtn!=null)
        this.autoSpinPlayBtn.node.active = false;
        // if(this.spinBtn!=null)
        // this.spinBtn.node.active = true;
        if(this.spinBtn!=null){
            this.spinBtn.node.active = true;
            this.spinBtn.interactable = true;
        }
        
        if(this.audioManager!=null)
            this.audioManager.playCustomSoundSfx(this.audioManager.buttonClickClip,false);
        

        this.isAutoSpinPanelOpen = false;
        this.autoSpinPanel.getComponent(cc.Animation).play('autoSpinDisable');
    },

    updateAutoSpinValue(val) {
        if (val < 0.01) {
            this.autoSpinLabel.string = "1 SPINS";
            this.autoSpinStopLabel.string = "1";
            this.autoSpinAmt = 1;
            return;
        }
        val = val * 100;
        val = Math.round(val);
        
        this.autoSpinAmt = val;
        if (val != 100) {
            this.autoSpinLabel.string = val + " SPINS";
            this.autoSpinStopLabel.string = val;
        }
        else {
            this.autoSpinLabel.string = "TO FEATURE";
            this.autoSpinStopLabel.string = "";
        }
    },

    onSliderHEvent(sender, eventType) {
        this.updateAutoSpinValue(sender.progress);
    },
    onSliderHEvent2(sender, eventType) {
        this.updateAutoSpinValue(sender.progress);
    },

    resetAutoSpin(){
        this.autoSpinAmt = 0;
        this.disableAutoSpinPanel();
    },

    enableAllButton(isEnable){
        this.spinBtn.active = isEnable;
        this.stopBtn.active = isEnable;
        this.sideBtn.active = isEnable;
    
    },
    openSidePanel(){
        if(this.freespinNumber >= 0){
            return;
        }

        if(this.audioManager!=null)
            this.audioManager.playCustomSoundSfx(this.audioManager.buttonClickClip,false);
        this.isSidePanelOpen = true;
        this.sidePanel.getComponent(cc.Animation).play("sideBtnEnable");
    },
    disableSidePanel(){
        if(!this.isSidePanelOpen)
        return;
        
        if(this.audioManager!=null)
            this.audioManager.playCustomSoundSfx(this.audioManager.buttonClickClip,false);
        
        this.isSidePanelOpen = false;
        this.sidePanel.getComponent(cc.Animation).play("sideBtnDisable");
    },

    resetFreeSpinNum(){
        this.freespinNumber = -1;
    },
    
    update (dt) {

        // if(this.isConnection){
        //     this.connectionTimer += dt;

        //     if(this.connectionTimer >= 10){
        //         this.connectionTimer = 0;
        //         this.isConnection =false;
        //         this.controller.showError("Something went wrong, Please Try Connect Again");
        //     }
        // }
    },

});
