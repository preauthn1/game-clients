var config = require('MyBaseConfig');
var utils = require('Utils');

cc.Class({
    extends: cc.Component,

    properties: {
        selectionObj: [cc.Node],
        selectionResultTxt: [cc.Label],
        clickActionObj: [cc.Node],
        currentClick: 0,
        currentReceive: 0,
        totalClick: 0,
        totalWin: 0,
        totalWinTxt: cc.Label,
        resultSelectedDefaulAnimation: cc.String,
        resultSelectedAnimation: cc.String,
        resultSelectedNoAnimation: cc.String,
        delayComplete: 0,
        mainNode: cc.Node,
        clickedList: [],

        controller: cc.Node,
        audioManager: cc.Node,
        popUpMainView: cc.Node,
        bonusNumber: [],
        bonusValue: 0,
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start() {
        if (this.audioManager != null) {
            this.audioManager = this.audioManager.getComponent(config.SCRIPT.AUDIOMANAGER);
        }
        if (this.popUpMainView != null)
            this.popUpMainView = this.popUpMainView.getComponent(config.SCRIPT.POPUPMANAGER);
        if (this.controller != null)
            this.controller = this.controller.getComponent(config.SCRIPT.GAMECONTROLLER);
    },

    restoreBonusNumber(bonus) {
        this.bonusNumber = [];
        this.bonusNumber = bonus;
        this.startGame();
    },
    startGame() {
        this.mainNode.active = true;
        if (this.audioManager != null)
        this.audioManager.playBGM(3);

        for (let i = 0; i < this.selectionObj.length; i++) {
            let j = i;
            this.selectionObj[i].getComponent(cc.Animation).play(this.resultSelectedDefaulAnimation);
            this.selectionObj[i].getComponent(cc.Button).interactable = true;
            this.selectionObj[i].on('click', function () {
                this.onClickSelection(j)
            }, this);
        }

        this.currentClick = 0;
        this.currentReceive = 0;
        this.totalWin = 0;
        this.totalWinTxt.string = this.totalWin;

        this.clickedList = [];

        if (this.bonusNumber.length > 0) {
            for (let i = 0; i < this.bonusNumber.length; i++) {
                this.selectionObj[i].getComponent(cc.Button).interactable = false;
                this.selectionObj[i].off('click');
                this.currentClick++;
                this.clickedList.push(i);
                this.updateValue(this.bonusNumber[i]);
            }
            this.bonusNumber = [];
        }

        this.updateActionText(this.currentClick);
    },
    updateActionText(num) {
        for (let i = 0; i < this.clickActionObj.length; i++) {
            this.clickActionObj[i].active = false;
        }

        if(this.clickActionObj.length > num)
        this.clickActionObj[num].active = true;
    },
    onClickSelection(index) {
        if (this.currentClick >= this.totalClick)
            return;
        this.selectionObj[index].off('click');
        this.selectionObj[index].getComponent(cc.Button).interactable = false;
        this.currentClick++;
        this.updateActionText(this.currentClick);
        this.clickedList.push(index);
        this.controller.getComponent(config.SCRIPT.GAMECONTROLLER).onRequestBonusInfo(0);

        if (this.audioManager != null)
            this.audioManager.playCustomSoundSfx(this.audioManager.bonusSelectionClip, false);
    },
    updateValue(bonusNum) {
        this.bonusValue = bonusNum;
        if (this.currentReceive < this.clickedList.length) {
            if (this.selectionResultTxt[this.clickedList[this.currentReceive]] != null) {
                this.selectionResultTxt[this.clickedList[this.currentReceive]].string = bonusNum.toString();
            }
        }
        this.totalWin += bonusNum;
        this.totalWinTxt.string = this.totalWin;

        this.selectionObj[this.clickedList[this.currentReceive]].getComponent(cc.Animation).play(this.resultSelectedAnimation);
        this.currentReceive++;
        if (this.currentReceive == this.totalClick) {
            this.node.runAction(cc.sequence(
                cc.delayTime(this.delayComplete),
                cc.callFunc(this.completeGame, this)
            ));
        }
    },
    completeGame() {
        let count = 1;
        for (let i = 0; i < this.selectionObj.length; i++) {
            if (this.selectionObj[i].getComponent(cc.Button).interactable) {
                this.selectionResultTxt[i].string = Math.floor(Math.random() * this.bonusValue);

                this.selectionObj[i].runAction(cc.sequence(
                    cc.delayTime((count - 1) * 0.5),
                    cc.callFunc(function () {
                        this.selectionObj[i].getComponent(cc.Animation).play(this.resultSelectedNoAnimation);
                    }, this)
                ));
                count++;
            }
        }

        this.node.runAction(cc.sequence(
            cc.delayTime(count * 0.5),
            cc.callFunc(function () {
                if (this.audioManager != null)
                    this.audioManager.stopBGM();

                if (this.audioManager != null)
                    this.audioManager.playCustomSoundSfx(this.audioManager.bonusSumarryClip, false);

                this.popUpMainView.popUpBonusSummary(this.totalWin);
                this.mainNode.active = false;
            }, this)
        ));
    },
    updateTotalClick(num) {
        if (num > 0) {
            this.totalClick = num;
        }
    },
    // update (dt) {},
});