var config = require('BaseConfig');
var utils = require('Utils');
var constants = require('DJSlotConstants');
cc.Class({
    extends: cc.Component,

    properties: {
        slotMachineView: cc.Node,
        spriteController: cc.Node,
        audioController: cc.Node,
        id: -1,
        symbolPrefab: {
            default: null,
            type: cc.Prefab,
        },
        symbolGoArr: {
            default: [],
            type: [cc.Node]
        },

        resultArr: [],
        symbolCodeArr: [],
        reelPosData: 0,
        currentResultSymbolIndex: 0,
        isSpin: false,
        isReceiveServerResult: false,
        isPrepareToStop: false,

        defaultYPos: 0,
        columns: 0,
        rows: 0,
        width: 0,
        height: 0,
        heightPadding: 0,
        stepY: 0,
        heightOffset: 0,
    },

    // use this for initialization
    init: function () {
        this.slotMachineView = this.slotMachineView.getComponent(config.SCRIPT_PREFIX + 'SlotMachineView');
        this.spriteController = this.spriteController.getComponent(config.SCRIPT_PREFIX + 'SpriteController');
        this.audioController = this.audioController.getComponent(config.SCRIPT_PREFIX + 'AudioController');
    },

    start: function () {
        this.defaultNodeY = this.node.position.y;
        this.reelHeight = config.REELDETAILS.SLOT_MACHINE_HEIGHT;
        this.reelWidth = config.REELDETAILS.REEL_WIDTH;
        this.defaultYPos = this.reelHeight * 0.5;
        this.columns = config.REELDETAILS.NUM_REEL;
        this.rows = config.REELDETAILS.NUM_ROW;
        this.width = config.REELDETAILS.SYMBOL_WIDTH;
        this.height = config.REELDETAILS.SYMBOL_HEIGHT;
        this.heightPadding = config.REELDETAILS.SYMBOL_HEIGHT_PADDING;
        this.heightOffset = config.REELDETAILS.SYMBOL_HEIGHT_OFFSET;
        var upmostSymbol = this.height + this.heightPadding;
        //var posX = this.reelWidth * 0.5;
        for (var i = 0; i < this.rows + 1; i++) {
            var posY = -1 * i * upmostSymbol;
            posY = posY + this.heightOffset;
            posY = posY + (upmostSymbol * 0.5);
            var symbol = cc.instantiate(this.symbolPrefab);
            this.symbolGoArr[i] = symbol;
            symbol.parent = this.node;
            symbol.setContentSize(this.width, this.height);
            symbol.setPosition(0, posY);
        }
    },

    onReceiveStartGameData: function (data, reelPosData) {
        var rand = this.getRandomInt(0, config.SYMBOLCODEARR.length - 1);
        var str = config.SYMBOLCODEARR[rand];
        data.unshift(str);
        this.symbolCodeArr = data.slice(0);
        this.reelPosData = reelPosData;
        this.resultArr = this.symbolCodeArr.slice(0);
        this.resultArr.splice(0, 1);
        for (var i = 0; i < this.symbolCodeArr.length; i++) {
            this.setSymbolSprite(i, this.symbolCodeArr[i]);
        }
        if (reelPosData == constants.SERVERDATAKEYS.REELPOS_NEUTRAL) {
            this.defaultYPos = this.reelHeight * 0.5 + config.REELDETAILS.REELPOS_NEUTRAL_Y;
        }
        else if (reelPosData == constants.SERVERDATAKEYS.REELPOS_DOWN) {
            this.defaultYPos = this.reelHeight * 0.5 + config.REELDETAILS.REELPOS_DOWN_Y;
        }
        else if (reelPosData == constants.SERVERDATAKEYS.REELPOS_UP) {
            this.defaultYPos = this.reelHeight * 0.5 + config.REELDETAILS.REELPOS_UP_Y;
        }
        var posX = this.node.position.x;
        var posY = this.defaultYPos;
        this.node.setPosition(posX, posY);
    },

    getRandomInt: function (min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
    },

    onReceiveSpinResult: function (data, reelPosData) {
        this.resultArr = data.slice(0);
        this.reelPosData = reelPosData;
        this.isReceiveServerResult = true;
        this.currentResultSymbolIndex = config.REELDETAILS.NUM_ROW - 1;
        if (reelPosData == constants.SERVERDATAKEYS.REELPOS_NEUTRAL) {
            this.defaultYPos = this.reelHeight * 0.5 + config.REELDETAILS.REELPOS_NEUTRAL_Y;
        }
        else if (reelPosData == constants.SERVERDATAKEYS.REELPOS_DOWN) {
            this.defaultYPos = this.reelHeight * 0.5 + config.REELDETAILS.REELPOS_DOWN_Y;
        }
        else if (reelPosData == constants.SERVERDATAKEYS.REELPOS_UP) {
            this.defaultYPos = this.reelHeight * 0.5 + config.REELDETAILS.REELPOS_UP_Y;
        }
    },

    prepareToSpin: function () {
        // this.defaultYPos = this.reelHeight * 0.5;
        // this.node.setPosition(this.node.position.x,this.defaultYPos);
        this.isPrepareToStop = false;
        this.spin(false);
    },

    prepareToStop: function () {
        this.isPrepareToStop = true;
    },

    spin: function (isBounceUp) {
        
        this.node.setPosition(this.node.position.x, this.reelHeight / 2);
        if (isBounceUp == false) {
            if (this.slotMachineView.isSpinBlur == true) {
                for (var i = 0; i < this.symbolGoArr.length; i++) {
                    var id = this.symbolGoArr[i].getComponent('BaseSymbolView').getId();
                    var sprite = this.spriteController.checkSymbolBlurSprite(id);
                    this.symbolGoArr[i].getComponent('BaseSymbolView').setBlurSprite(sprite);
                }
            }
            this.node.runAction(cc.sequence(
                cc.moveTo(config.REELDETAILS.PER_CYCLE_SPIN_DURATION, cc.p(this.node.position.x, (this.reelHeight * 0.5) - (this.height + this.heightPadding))),
                cc.callFunc(this.onReelDownCheck, this)
            )
            )
        }
        else {
            var posX = this.node.position.x;
            var posY = this.defaultYPos - (this.height + this.heightPadding);
            this.node.runAction(cc.sequence(
                cc.moveTo(config.REELDETAILS.PER_CYCLE_SPIN_DURATION, cc.p(posX, posY - 50)),
                cc.callFunc(this.playStopSound, this),
                cc.moveTo(0.3, cc.p(posX, posY)).easing(cc.easeIn(0.3)),
                cc.callFunc(this.onReelDownCheck, this)
            )
            )
        }
    },

    playStopSound: function () {
        this.audioController.playReelStop();
    },

    setSymbolSprite: function (index, val) {
        var sprite = this.spriteController.checkSymbolSprite(val);
        this.symbolGoArr[index].getComponent('BaseSymbolView').setId(this.id, index, val);
        this.symbolGoArr[index].getComponent('BaseSymbolView').setSprite(sprite);
    },

    playSymbolAnimation: function (index, val) {
        
        var id = this.symbolGoArr[index].getComponent('BaseSymbolView').getId();
        for (var i = 0; i < config.SYMBOLCODEARR.length; i++) {
            if (id == config.SYMBOLCODEARR[i]) {
                var str = config.ANIMSTRINGARR[i];
                this.symbolGoArr[index].getComponent('BaseSymbolView').playSymbolAnimation(str);
            }
        }
    },
    playStopAnimation(symbol){
        for(let i=0;i<this.symbolGoArr.length;i++){
            if(this.symbolGoArr[i].getComponent('BaseSymbolView').getId() == symbol){
                this.symbolGoArr[i].getComponent('BaseSymbolView').playStopAnimation();
            }
        }
    },
    onReelDownCheck: function () {
        if (this.isPrepareToStop == true) {
            if (this.isReceiveServerResult == true) {

                if (this.currentResultSymbolIndex != -1) {
                    this.shiftSymbolsDown(this.resultArr[this.currentResultSymbolIndex]);
                    var isBounceUp = false;
                    if (this.currentResultSymbolIndex == 0) {
                        isBounceUp = true;
                    }
                    this.spin(isBounceUp);
                    this.currentResultSymbolIndex--;
                }
                else {
                    var rand = this.getRandomInt(0, config.SYMBOLCODEARR.length - 1);
                    var str = config.SYMBOLCODEARR[rand];
                    this.shiftSymbolsDown(str);
                    this.node.setPosition(this.node.position.x, this.defaultYPos);
                    this.onSpinComplete();
                }
            }
            else {
                var rand = this.getRandomInt(0, config.SYMBOLCODEARR.length - 1);
                var str = config.SYMBOLCODEARR[rand];
                this.shiftSymbolsDown(str);
                this.spin(false);
            }
        }
        else {
            var rand = this.getRandomInt(0, config.SYMBOLCODEARR.length - 1);
            var str = config.SYMBOLCODEARR[rand];
            this.shiftSymbolsDown(str);
            this.spin(false);
        }
    },

    checkScatter: function () {
        var totalScatter = 0;
        for (var i = 0; i < this.resultArr.length; i++) {
            var scatterId = config.SYMBOLCODE.SYMBOL_SCATTER;
            if (this.symbolCodeArr[i] == scatterId) {
                totalScatter++;
            }
        }
        return totalScatter;
    },

    shiftSymbolsDown: function (str) {
        var clone = this.symbolCodeArr.slice(0);
        clone.unshift(str);
        clone.splice(clone.length - 1, 1);
        this.symbolCodeArr = clone.slice(0);
        for (var i = 0; i < this.symbolCodeArr.length; i++) {
            this.setSymbolSprite(i, this.symbolCodeArr[i]);
        }
    },

    playScatterAnimation: function (type) {
        if (this.reelPosData == config.REELDETAILS.REELPOS_NEUTRAL_Y) {
            for (var i = 0; i < this.symbolCodeArr.length; i++) {
                var scatterId = config.SYMBOLCODE.SYMBOL_SCATTER;
                if (this.symbolCodeArr[i] == scatterId) {
                    this.playSymbolAnimation(i, scatterId);
                }
            }
        }
    },
    playSpecialSymbolAnimation(type,animation){
        for (var i = 0; i < this.symbolCodeArr.length; i++) {
            if (this.symbolCodeArr[i] == type) {
                //this.playSymbolAnimation(i, animation);
                for(var j=0;j<config.SYMBOLCODEARR.length; j++){
                    if(config.SYMBOLCODEARR[j] == animation){
                        var str = config.ANIMSTRINGARR[j];
                        this.symbolGoArr[i].getComponent('BaseSymbolView').playSymbolAnimation(str);
                    }
                }
            }
        }
    },
    playJackpotAnimation: function () {
        for (var i = 0; i < this.symbolCodeArr.length; i++) {
            var scatterId = config.SYMBOLCODE.SYMBOL_JACKPOT;
            if (this.symbolCodeArr[i] == scatterId) {
                this.playSymbolAnimation(i, scatterId);
            }
        }
    },

    onSpinComplete: function () {
        this.node.stopAllActions();
        var clone = this.resultArr.slice(0);
        var rand = this.getRandomInt(0, config.SYMBOLCODEARR.length - 1);
        var str = config.SYMBOLCODEARR[rand];
        clone.unshift(str);
        this.symbolCodeArr = clone.slice(0);
        this.slotMachineView.onReelSpinComplete(this.id);
    },

    reset: function () {
        this.node.stopAllActions();
        for (var i = 0; i < this.symbolGoArr.length; i++) {
            this.symbolGoArr[i].getComponent('BaseSymbolView').stopSymbolAnimation();
            this.symbolGoArr[i].setScale(1, 1);
        }
        var clone = this.resultArr.slice(0);
        var rand = this.getRandomInt(0, config.SYMBOLCODEARR.length - 1);
        var str = config.SYMBOLCODEARR[rand];
        clone.unshift(str);
        this.symbolCodeArr = clone.slice(0);
        this.node.setPosition(this.node.position.x, this.defaultYPos);
        for (var i = 0; i < this.symbolCodeArr.length; i++) {
            this.setSymbolSprite(i, this.symbolCodeArr[i]);
        }
        this.isSpin = false;
        this.isPrepareToStop = false;
        this.isReceiveServerResult = false;
        this.currentResultSymbolIndex = config.REELDETAILS.NUM_ROW - 1;
    }
});
