var config = require('MyBaseConfig');
var utils = require('Utils');
cc.Class({
    extends: cc.Component,

    properties: {
        audioManager: cc.Node,
        audioManageScript: cc.Node,
        controller: cc.Node,
        popUpMainView: cc.Node,
        popUpMainViewScript: cc.Node,

        mainNode: cc.Node,

        gameAnimationNode: cc.Node,
        gameAnimationBtn: cc.Button,

        selectionObj: [cc.Node],
        selectionResultTxt: [cc.Label],
        resultSelectedDefaulAnimation: cc.String,
        resultSelectedAnimation: cc.String,
        resultSelectedNoAnimation: cc.String,
        clickActionObj: [cc.Node],
        currentClick: 0,
        currentReceive: 0,
        totalClick: 2,
        originalSpins: 8,
        originalMultiplier: 2,
        currentSpins: 9,
        currentMultiplier: 2,
        spinsText: cc.Label,
        multiplierText: cc.Label,
        spinsRichText: cc.RichText,
        multiplierRichText: cc.RichText,
        delayComplete: 0,

        clickedList: [],
        restoreFS: [],
        restoreMultiplier: [],
        preSelectionNum: [cc.String],
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        if (this.gameAnimationBtn != null) {
            this.gameAnimationBtn.node.on('click', this.startGame, this);
        }
    },

    start() {
        if (this.audioManageScript == null && this.audioManager != null) {
            this.audioManageScript = this.audioManager.getComponent(config.SCRIPT.AUDIOMANAGER);
        }
    },

    restoreSectionFreeSpinNum(_currentClick, _number) {
        console.log("click : "+_currentClick);
        this.currentClick = _currentClick;
        this.restoreFS.push(_number);
        //this.currentSpins = _number;
    },
    restoreSectionFreeSpinMultiplier(_currentClick, _number) {
        
        this.currentClick = _currentClick;
        this.restoreMultiplier.push(_number);
        //this.currentMultiplier = _number;
    },

    showGame() {
        if (this.gameAnimationNode != null && this.restoreFS.length == 0 && this.restoreMultiplier.length == 0) {
            this.gameAnimationNode.active = true;
            if (this.audioManageScript != null)
            this.audioManageScript.playCustomSoundSfx(this.audioManageScript.preFSSelectionTriggerClip, false);
        
        } else {
            this.startGame();
        }
    },
    startGame() {
        // console.log("Start Game");
        this.mainNode.active = true;

        if(this.gameAnimationNode!=null)
        this.gameAnimationNode.active = false;
        
        if (this.audioManageScript != null)
        this.audioManageScript.playBGM(2);

        if (this.popUpMainViewScript == null && this.popUpMainView != null) {
            this.popUpMainViewScript = this.popUpMainView.getComponent(config.SCRIPT.POPUPMANAGER);
        }
        for (let i = 0; i < this.selectionObj.length; i++) {
            let j = i;
            this.selectionObj[i].getComponent(cc.Animation).play(this.resultSelectedDefaulAnimation);
            this.selectionObj[i].getComponent(cc.Button).interactable = true;
            this.selectionObj[i].on('click', function () {
                this.onClickSelection(j)
            }, this);
        }

        if (this.spinsText != null)
            this.spinsText.string = this.originalSpins.toString();
        if (this.multiplierText != null)
            this.multiplierText.string = "x" + this.originalMultiplier.toString();

        if (this.spinsRichText != null)
            this.spinsRichText.string = utils.customRichTextFont(this.originalSpins.toString());

        if (this.multiplierRichText != null)
            this.multiplierRichText.string = utils.customRichTextFont(this.currentMultiplier.toString());

        this.clickedList = [];
        this.updateActionText(this.currentClick);

        // console.log(this.currentClick);
        if (this.currentClick != 0) {
            let countRestore = 0;
            // console.log(this.restoreFS.length);
            for (let i = 0; i < this.restoreFS.length; i++) {
                this.selectionObj[this.preSelectionNum[countRestore]].getComponent(cc.Button).interactable = false;
                this.selectionObj[this.preSelectionNum[countRestore]].off('click');
                this.clickedList.push(this.preSelectionNum[countRestore]);
                if (this.audioManageScript != null)
                    this.audioManageScript.playCustomSoundSfx(this.audioManageScript.preFSSelectionClip, false);
                this.updateValue(this.restoreFS[i], 0);
                countRestore++;
            }

            for (let i = 0; i < this.restoreMultiplier.length; i++) {
                this.selectionObj[this.preSelectionNum[countRestore]].getComponent(cc.Button).interactable = false;
                this.selectionObj[this.preSelectionNum[countRestore]].off('click');
                this.clickedList.push(this.preSelectionNum[countRestore]);
                if (this.audioManageScript != null)
                    this.audioManageScript.playCustomSoundSfx(this.audioManageScript.preFSSelectionClip, false);
                this.updateValue(0, this.restoreMultiplier[i]);
                countRestore++;
            }
        }

        this.restoreMultiplier = [];
        this.restoreFS = [];
    },
    hideFreeSpinGame() {
        for (let i = 0; i < this.selectionObj.length; i++) {
            this.selectionObj[i].off('click');
            this.selectionObj[i].getComponent(cc.Button).interactable = false;
            this.selectionObj[i].getComponent(cc.Animation).play(this.resultSelectedDefaulAnimation);
        }

        this.currentClick = 0;
        this.currentReceive = 0;
        this.currentSpins = this.originalSpins;
        this.currentMultiplier = this.originalMultiplier;

        this.mainNode.active = false;
    },
    onEnable() {

    },
    onDisable() {

    },

    updateActionText(index) {
        for (let i = 0; i < this.clickActionObj.length; i++) {
            if (index == i)
                this.clickActionObj[i].active = true;
            else
                this.clickActionObj[i].active = false;
        }
    },

    onClickSelection(index) {
        if (this.currentClick >= this.totalClick)
            return;
        this.selectionObj[index].off('click');
        this.selectionObj[index].getComponent(cc.Button).interactable = false;
        this.currentClick++;
        this.updateActionText(this.currentClick);
        this.clickedList.push(index);
        this.controller.getComponent(config.SCRIPT.GAMECONTROLLER).onRequestFreeInfo(index);
        // preFSSelectionClip
        if (this.audioManageScript != null)
            this.audioManageScript.playCustomSoundSfx(this.audioManageScript.preFSSelectionClip, false);
    },
    updateValue(freeSpinNum, multiplier) {
        // console.log(freeSpinNum + " / " + multiplier);
        // console.log(this.clickedList);
        // console.log(this.clickedList[this.currentReceive]);

        if(freeSpinNum == -1 || multiplier == -1){
            this.selectionObj[this.clickedList[this.currentReceive]].getComponent(cc.Button).interactable = true;
            //this.selectionObj[this.clickedList[this.currentReceive]].getComponent(cc.Animation).play(this.resultSelectedNoAnimation);
            //this.selectionResultTxt[this.clickedList[this.currentReceive]].string = "1";
            this.node.runAction(cc.sequence(
                cc.delayTime(this.delayComplete),
                cc.callFunc(this.completeGame, this)
            ));
            return;
        }

        // console.log(freeSpinNum);
        if (freeSpinNum != 0) {
            let value = freeSpinNum - this.currentSpins;
            this.currentSpins = freeSpinNum;
            if (this.spinsText != null)
                this.spinsText.string = this.currentSpins.toString();
            if (this.spinsRichText != null)
                this.spinsRichText.string = utils.customRichTextFont(this.currentSpins.toString());

                
            if (this.currentReceive < this.clickedList.length) {
                // console.log(this.clickedList[this.currentReceive]);
                if (this.selectionResultTxt[this.clickedList[this.currentReceive]] != null) {
                    this.selectionResultTxt[this.clickedList[this.currentReceive]].string = value.toString();
                }
            }
        }
        // console.log(this.currentReceive +" / " +this.clickedList.length);
        if (multiplier != 0) {
            let value = multiplier - this.currentMultiplier;
            this.currentMultiplier = multiplier;

            if (this.multiplierText != null)
                this.multiplierText.string = this.currentMultiplier.toString();
            if (this.multiplierRichText != null)
                this.multiplierRichText.string = utils.customRichTextFont(this.currentMultiplier.toString());

            if (this.currentReceive < this.clickedList.length) {
                if (this.selectionResultTxt[this.clickedList[this.currentReceive]] != null) {
                    this.selectionResultTxt[this.clickedList[this.currentReceive]].string = "x" + value.toString();
                }
            }
        }
        // console.log(this.currentReceive + " ///// " +  this.clickedList.length);
        if (this.currentReceive < this.clickedList.length){
            this.selectionObj[this.clickedList[this.currentReceive]].getComponent(cc.Animation).play(this.resultSelectedAnimation);
        }
          
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
                let _type = Math.floor(Math.random() * 2);
                if (_type == 0) {
                    let rand = Math.floor(Math.random() * 16);
                    rand += 1;
                    this.selectionResultTxt[i].string = rand.toString();
                } else {
                    let rand = Math.floor(Math.random() * 3);
                    rand += 1;
                    this.selectionResultTxt[i].string = "x" + rand.toString();
                }

                this.selectionObj[i].runAction(cc.sequence(
                    cc.delayTime((count - 1) * 0.5),
                    cc.callFunc(function () {
                        this.selectionObj[i].getComponent(cc.Animation).play(this.resultSelectedNoAnimation);
                        //this.selectionObj[i].getComponent(cc.Animation).play(this.resultSelectedNoAnimation);
                    }, this)
                ));
                count++;
            }
        }

        this.node.runAction(cc.sequence(
            cc.delayTime(count * 0.5),
            cc.callFunc(function () {
                if (this.audioManageScript != null)
                this.audioManageScript.stopBGM();

                if (this.audioManageScript != null)
                this.audioManageScript.playCustomSoundSfx(this.audioManageScript.preFSSelectionSummaryClip, false);
        
                this.popUpMainViewScript.popUpEnterFSResult(this.currentSpins, this.currentMultiplier);
            }, this)
        ));
    },
    updateOriginalSpinNumber(num = 0, multi = 0) {
        if (num != 0)
            this.originalSpins = num;
        if (multi != 0)
            this.originalMultiplier = multi;
    },
    // update (dt) {},
});