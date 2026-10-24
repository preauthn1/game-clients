var config = require('MyBaseConfig');
var utils = require('Utils');
var accounting = require('Accounting');
cc.Class({
    extends: cc.Component,

    properties: {
        controller: cc.Node,
        audioManager: cc.Node,
        retriggerNode: cc.Node,
        retriggerAnimTime: 0,

        fiveOfKindNode: cc.Node,
        fiveOfKindAnimTime: 0,

        enterFsGameView: cc.Node,

        enterFsPopUp: cc.Node,
        enterFsTotalNum: cc.Label,
        enterFsMultiplier: cc.Label,

        enableFsBackground: false,
        enterFsBackground: cc.Node,
        enterFsPopUpAnimation: "",
        enterFsPopUpBtn: cc.Button,

        exitFsPopUp: cc.Node,
        exitFsTotalWin: cc.Node,
        exitFsGameWin: cc.Node,
        exitFsFeatureWin: cc.Node,
        exitFsPopUpBtn: cc.Button,
        fsType: 0,

        preJackpotTransNode: cc.Node,
        preJackpotDelay: 0,
        enterJpPopUp: cc.Node,
        enterJpPopUpBtn: cc.Button,
        enterJpDelay: 0,
        jpType: 0,


        enterBonusPopUp: cc.Node,
        enterBonusButton: cc.Button,
        bonusGameView: cc.Node,
        exitBonusPopUp: cc.Node,
        exitBonusAmount: cc.Label,
        exitBonusButton: cc.Button,
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start() {
        if (this.controller != null)
            this.controller = this.controller.getComponent(config.SCRIPT.GAMECONTROLLER);
        if (this.enterFsGameView != null)
            this.enterFsGameView = this.enterFsGameView.getComponent(config.SCRIPT.FREESPINGAMEVIEW);
        if (this.bonusGameView != null)
            this.bonusGameView = this.bonusGameView.getComponent(config.SCRIPT.BONUSGAMEVIEW);

        if (this.enterFsPopUpBtn != null) {
            this.enterFsPopUpBtn.node.on('click', this.enterFreeSpin, this);
            this.enterFsPopUpBtn.node.active = false;
        }

        if (this.exitFsPopUpBtn != null) {
            this.exitFsPopUpBtn.node.on('click', this.disableExitFreeSpin, this);
        }

        if (this.enterBonusButton != null) {
            this.enterBonusButton.node.on('click', this.enterBonus, this);
        }

        if (this.exitBonusButton != null) {
            this.exitBonusButton.node.on('click', this.disableExitBonus, this);
        }

        if (this.enterJsPopUpBtn != null)
            this.enterJsPopUpBtn.node.on('click', this.enterJackpot, this);

        if (this.enterFsBackground != null)
            this.enterFsBackground.active = false;



        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);

    },
    onKeyDown: function (event) {
        //console.log(event.keyCode);
        switch (event.keyCode) {
            case 32: //Space
                this.checkButtonCondition();
                break;
        }
    },
    checkButtonCondition() {
        if (this.exitFsPopUpBtn.node.active) {
            this.disableExitFreeSpin();
        }
    },

    enableFiveOfKind(isEnable) {
        if (!isEnable || this.fiveOfKindNode == null) {
            return 0;
        }

        //fiveOfKindNode
        this.fiveOfKindNode.active = true;

        if (this.audioManager != null)
            this.audioManager.playCustomSoundSfx(this.audioManager.fiveOfKind, false);

        this.node.runAction(cc.sequence(
            cc.delayTime(this.fiveOfKindAnimTime),
            cc.callFunc(this.disableFiveOfKind, this),
        ));

        return this.fiveOfKindAnimTime;
    },

    disableFiveOfKind() {
        this.fiveOfKindNode.active = false;
    },
    enableRetrigger(isEnable) {
        if (!isEnable || this.retriggerNode == null) {
            return 0;
        }

        //fiveOfKindNode
        return this.retriggerAnimTime;
    },
    preFreeSpinTransition() {

    },
    updateFreeSpinNumber(number) {

    },
    restorePreFreeSpinGame(data) {
        if(data!=null){
            for (let i = 0; i < data.length; i++) {
                if (data[i][0] == 0) {
                    this.enterFsGameView.restoreSectionFreeSpinMultiplier(i + 1, data[i][1]);
                } else if (data[i][0] == 1) {
                    this.enterFsGameView.restoreSectionFreeSpinNum(i + 1, data[i][1]);
                }
            }
        }
        this.enterFsGameView.showGame();
    },
    startFreeSpin(type, multiplier) {

        if (this.enterFsGameView != null) {
            this.enterFsGameView.showGame();
            return;
        }

        this.fsType = type;
        if (this.enterFsPopUp != null) {
            this.enterFsPopUp.active = true;
            if (this.enterFsPopUpAnimation != "") {
                this.enterFsPopUp.getComponent(cc.Animation).play(this.enterFsPopUpAnimation);
            }
            this.enterFsPopUpBtn.node.active = true;

            if (this.audioManager != null)
                this.audioManager.playCustomSoundSfx(this.audioManager.enterFreeSpin, false);

            if (this.enableFsBackground && this.enterFsBackground != null) {
                this.node.runAction(cc.sequence(
                    cc.delayTime(0.5),
                    cc.callFunc(function () {
                        this.enterFsBackground.active = true;
                    }, this),
                ));
            }
        } else {

        }
    },
    popUpEnterFSResult(num, multiplier) {
        if (this.enterFsPopUp != null) {
            this.enterFsPopUp.active = true;
            // console.log("4");
            if(this.enterFsTotalNum!=null)
            this.enterFsTotalNum.string = num;
            // console.log("3");
            if(this.enterFsMultiplier!=null)
            this.enterFsMultiplier.string = multiplier;
            // console.log("2");
            this.controller.updateFromFSSelectGame(num);
            // console.log("1");
            this.enterFsPopUpBtn.node.active = true;
        } else {
            this.enterFreeSpin();
        }
    },

    enterFreeSpin() {
        console.log("Enter Free Spin");
        if (this.enterFsPopUp != null)
            this.enterFsPopUp.active = false;
        if (this.enterFsPopUpBtn != null)
            this.enterFsPopUpBtn.node.active = false;

        if (this.audioManager != null)
            this.audioManager.stopAllSfx();

        if (this.enterFsGameView != null) {
            this.enterFsGameView.hideFreeSpinGame();
        }
        this.controller.enterFreeSpin();
    },
    setJackpotType(type) {
        this.jpType = type;
    },
    preJackpotTransition() {
        if (this.preJackpotTransNode != null) {
            this.node.runAction(cc.sequence(
                cc.delayTime(this.preJackpotDelay),
                cc.callFunc(this.startJackpot, this),
            ));
        } else {
            this.startJackpot();
        }
    },
    startJackpot() {
        this.node.stopAllActions();

        if (this.enterJpPopUp != null) {
            this.enterJpPopUp.active = true;

            this.node.runAction(cc.sequence(
                cc.delayTime(this.enterJpDelay),
                cc.callFunc(this.enterJackpot, this),
            ));
        } else {
            this.node.runAction(cc.sequence(
                cc.delayTime(this.enterJpDelay),
                cc.callFunc(this.enterJackpot, this),
            ));
        }
    },
    enterJackpot() {
        this.node.stopAllActions();

        this.enterJpPopUp.active = false;
    },
    exitFreeSpinMode(total, gameWin, featureWin) {
        if (this.exitFsPopUp != null) {
            this.exitFsPopUp.active = true;
        }

        if (this.audioManager != null)
            this.audioManager.playCustomSoundSfx(this.audioManager.exitFreeSpin, false);

        var temp = accounting.formatNumber(total, 0, ",");
        if (this.exitFsTotalWin != null && this.exitFsTotalWin.getComponent(cc.Label) != null) {
            this.exitFsTotalWin.getComponent(cc.Label).string = temp;
        } else if (this.exitFsTotalWin != null && this.exitFsTotalWin.getComponent(cc.RichText) != null) {
            this.exitFsTotalWin.getComponent(cc.RichText).string = utils.customRichTextFont(temp);
        }
        temp = accounting.formatNumber(featureWin, 0, ",");
        if (this.exitFsFeatureWin != null && this.exitFsFeatureWin.getComponent(cc.Label) != null) {
            this.exitFsFeatureWin.getComponent(cc.Label).string = temp;
        } else if (this.exitFsFeatureWin != null && this.exitFsFeatureWin.getComponent(cc.RichText) != null) {
            this.exitFsFeatureWin.getComponent(cc.RichText).string = utils.customRichTextFont(temp);
        }
        temp = accounting.formatNumber(gameWin, 0, ",");
        if (this.exitFsGameWin != null && this.exitFsGameWin.getComponent(cc.Label) != null) {
            this.exitFsGameWin.getComponent(cc.Label).string = temp;
        } else if (this.exitFsGameWin != null && this.exitFsGameWin.getComponent(cc.RichText) != null) {
            this.exitFsGameWin.getComponent(cc.RichText).string = utils.customRichTextFont(temp);
        }
    },
    disableExitFreeSpin() {
        if (this.exitFsPopUp != null && !this.exitFsPopUp.active) {
            return;
        }

        if (this.exitFsPopUp != null) {
            this.exitFsPopUp.active = false;
        }

        if (this.audioManager != null)
            this.audioManager.stopAllSfx();

        if(this.controller!=null)
        this.controller.backFromExitFSEvent();
    },

    startBonus() {
        if (this.enterBonusPopUp != null) {
            this.enterBonusPopUp.active = true;
        } else {
            this.enterBonus();
        }
    },
    enterBonus() {
        if (this.enterBonusPopUp != null) {
            this.enterBonusPopUp.active = false;
        } 
        this.bonusGameView.startGame();
    },
    popUpBonusSummary(totalBonus) {
        if (this.exitBonusPopUp != null)
            this.exitBonusPopUp.active = true;
        if (this.exitBonusAmount != null)
            this.exitBonusAmount.string = totalBonus;
    },
    disableExitBonus() {
        if (this.exitBonusPopUp != null) {
            this.exitBonusPopUp.active = false;
        }

        if (this.audioManager != null)
            this.audioManager.stopAllSfx();

        this.controller.backFromBonusSpecialEvent();
    },
    onReceiveFreeSpinInfo(data) {
        // console.log(data);
        if (data.selectionType == 1) {
            if (this.enterFsGameView != null)
                this.enterFsGameView.updateValue(data.selectionNum, 0);
        } else if (data.selectionType == 0) {
            if (this.enterFsGameView != null)
                this.enterFsGameView.updateValue(0, data.selectionNum);
        } else if(data.selectionType == 2){
            if (this.enterFsGameView != null)
                this.enterFsGameView.updateValue(data.selectionNum, data.selectionNum2);
        }else{
            this.enterFsGameView.updateValue(-1, -1);
        }
    },
    onReceiveBonusInfo(data) {
        this.bonusGameView.updateValue(data.amount);
    },

    updateBonusTotalClick(i) {
        this.bonusGameView.updateTotalClick(i);
    },
    restoreBonusNumber(nums) {
        this.bonusGameView.restoreBonusNumber(nums);
    },
    // update (dt) {},
});