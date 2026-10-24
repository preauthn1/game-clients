var config = require('BaseConfig');
var utils = require('Utils');

cc.Class({
    extends: cc.Component,

    properties: {
        symbolSpriteArr: {
            default: [],
            type: cc.SpriteFrame,
        },
        symbolBlurSpriteArr: {
            default: [],
            type: cc.SpriteFrame,
        },
        frameSpriteArr: {
            default: [],
            type: cc.SpriteFrame,
        },
        winPanelArr: {
            default: [],
            type: cc.SpriteFrame,
        },
        paylineMaskArr: {
            default: [],
            type: cc.SpriteFrame,
        },
        symbolDic: {
            default: [],
            type: ['String'],
        },
    },

    init: function () {
    },
    

    checkSymbolSprite: function (value) {
        for (var i = 0; i < config.SYMBOLCODEARR.length; i++) {
            if (value == config.SYMBOLCODEARR[i]) {
                return this.symbolSpriteArr[i];
            }
        }
    },

    checkSymbolBlurSprite: function (value) {
        for (var i = 0; i < config.SYMBOLCODEARR.length; i++) {
            if (value == config.SYMBOLCODEARR[i]) {
                return this.symbolBlurSpriteArr[i];
            }
        }
    },

    checkFrameSprite: function (value) {
        return this.frameSpriteArr[value];
    },

    checkWinPanelSprite: function (value) {
        return this.winPanelArr[value];
    },

    checkPaylineMaskSprite: function (value) {
        utils.log("checkPaylineMaskSprite::" + value);
        var index = 0;
        if (value == 3) {
            index = 1;
        }
        else if (value == 4) {
            index = 2;
        }
        else if (value == 5) {
            index = 3;
        }
        else if (value == -1) {
            index = 4;
        }
        return this.paylineMaskArr[index];
    }
});

