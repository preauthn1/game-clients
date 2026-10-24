
var config = require('BaseConfig');
var accounting = require('Accounting');
var utils = require('Utils');
var constants = require('DJSlotConstants');

cc.Class({
    extends: cc.Component,

    properties: {
        spriteController: cc.Node,
        maskIGoParent: cc.Node,
        maskIGoArr: {
            default: [],
            type: [cc.Node]
        },
        maskMArr: {
            default: [],
            type: [cc.Mask]
        },
        paylineIGoArr: {
            default: [],
            type: [cc.Node]
        },
        paylineTGoArr: {
            default: [],
            type: [cc.Toggle]
        },
        paylineColorIGoArr: {
            default: [],
            type: [cc.Node]
        },
        framesParent: cc.Node,
        framesPrefab: {
            default: null,
            type: cc.Prefab,
        },
        framesGoArr: [],
        paylineContentParent: cc.Node,
    },

    init: function () {
        this.spriteController = this.spriteController.getComponent(config.SCRIPT_PREFIX + 'SpriteController');
        var rows = config.REELDETAILS.NUM_ROW;
        var reels = config.REELDETAILS.NUM_REEL;
        var reelHeight = config.REELDETAILS.SLOT_MACHINE_HEIGHT;
        var reelWidth = config.REELDETAILS.SLOT_MACHINE_WIDTH;
        var width = config.REELDETAILS.FRAME_WIDTH;
        var height = config.REELDETAILS.FRAME_HEIGHT;
        var heightPadding = config.REELDETAILS.SYMBOL_HEIGHT_PADDING;
        var heightOffset = config.REELDETAILS.SYMBOL_HEIGHT_OFFSET;
        var widthPadding = config.REELDETAILS.SYMBOL_WIDTH_PADDING;
        var defaultXPos = -1 * reelWidth * 0.5;
        var defaultYPos = reelHeight * 0.5;
        utils.log("init::");
        utils.log("height::" + height);
        utils.log("heightPadding::" + heightPadding);
        utils.log("defaultYPos::" + defaultYPos);
        if (this.framesPrefab != null) {
            for (var i = 0; i < reels; i++) {
                var reel = [];
                for (var j = 0; j < rows; j++) {
                    var posX = defaultXPos + (i * (width + widthPadding));
                    //var posY = defaultYPos + (-1 * j * (height + heightPadding));
                    var posY = defaultYPos + (-1 * j * height);

                    utils.log("payline::reels::i::" + i + "::j::" + j + "::posY::" + posY);
                    var frames = cc.instantiate(this.framesPrefab);
                    reel.push(frames);
                    frames.parent = this.framesParent;
                    frames.setContentSize(width, height);
                    frames.setAnchorPoint(0, 1);
                    frames.setPosition(posX, posY);
                    frames.active = false;
                }
                this.framesGoArr.push(reel);
            }
        }
    },

    onSpinState: function () {
        this.hideAllPaylines();
    },

    onClickPaylines: function (val) {
        if (this.paylineTGoArr.length != 0) {
            for (var i = 0; i < this.paylineTGoArr.length; i++) {
                if (i <= val) {
                    this.paylineTGoArr[i].isChecked = true;
                }
                else {
                    this.paylineTGoArr[i].isChecked = false;
                }
            }
        }
        this.hideAllPaylines();
        this.node.runAction(
            cc.sequence(
                cc.callFunc(this.showClickPaylines, this, { a: val }),
                cc.delayTime(config.REELDETAILS.SINGLE_PAYLINE_SHOW_DURATION),
                cc.callFunc(this.hideAllPaylines, this, {}),
            )
        );
    },

    showClickPaylines: function (target, data) {
        var val = data.a;
        if (this.paylineIGoArr.length != 0) {
            for (var i = 0; i < this.paylineIGoArr.length; i++) {
                if (i <= val) {
                    this.paylineIGoArr[i].active = true;
                }
            }
        }
    },

    showAllWinningPaylines: function (data) {
        this.hideAllPaylines();
        if (this.paylineIGoArr.length != 0) {
            for (var i = 0; i < data.length; i++) {
                if (data[i] != 0) {
                    this.paylineIGoArr[data[i]].active = true;
                }
            }
        }
        if (this.paylineColorIGoArr.length != 0) {
            for (var i = 0; i < data.length; i++) {
                if (data[i] != 0) {
                    this.paylineColorIGoArr[data[i]].active = true;
                }
            }
        }
    },

    showSinglePayline: function (paylineVal, winVal, symbolAmount, direction) {
        this.hideAllPaylines();
        if (this.paylineIGoArr.length != 0) {
            this.paylineIGoArr[paylineVal].active = true;
        }
        if (this.paylineColorIGoArr.length != 0) {
            this.paylineColorIGoArr[paylineVal].active = true;
        }

        var coordinates = config.PAYLINEARR[paylineVal];
        if (this.framesPrefab != null) {
            if (direction == constants.SERVERDATAKEYS.PAYLINE_START_FROM_LEFT) {
                for (var i = 0; i < coordinates.length; i++) {
                    if (i + 1 < symbolAmount + 1) {
                        var arr = this.framesGoArr[i];
                        var go = arr[coordinates[i] - 1];
                        go.active = true;
                        this.maskIGoArr[i].setPosition(go.x, go.y);
                        this.setFrameSprite(go.getComponent(cc.Sprite), paylineVal);
                        this.setMaskPosition(go, this.maskIGoArr[i]);
                        if (i == 0) {
                            var childNode = go.getChildByName("winPanel");
                            childNode.active = true;
                            this.setWinPanelSprite(childNode.getComponent(cc.Sprite), paylineVal);
                            var lableNode = childNode.getChildByName("winL");
                            winVal = accounting.formatNumber(winVal, 0, ",");
                            lableNode.getComponent(cc.Label).string = config.SLOTDETAILS.DENOMINATION_PREFIX + winVal;
                        }
                    }
                }
            }
            else {
                var iterate = symbolAmount;
                for (var i = coordinates.length - 1; i > -1; i--) {
                    if (iterate > 0) {
                        var arr = this.framesGoArr[i];
                        var go = arr[coordinates[i] - 1];
                        go.active = true;
                        this.maskIGoArr[i].setPosition(go.x, go.y);
                        this.setFrameSprite(go.getComponent(cc.Sprite), paylineVal);
                        this.setMaskPosition(go, this.maskIGoArr[i]);
                        if (i == coordinates.length - 1) {
                            var childNode = go.getChildByName("winPanel");
                            childNode.active = true;
                            this.setWinPanelSprite(childNode.getComponent(cc.Sprite), paylineVal);
                            var lableNode = childNode.getChildByName("winL");
                            winVal = accounting.formatNumber(winVal, 0, ",");
                            lableNode.getComponent(cc.Label).string = config.SLOTDETAILS.DENOMINATION_PREFIX + winVal;
                        }
                        iterate--;
                    }
                }
            }
            for (var i = 0; i < this.maskIGoArr.length; i++) {
                if (i > 0) {
                    var wp = this.maskIGoArr[i].convertToWorldSpace(this.maskIGoArr[i].getPosition());
                    this.maskIGoArr[i].parent = this.maskIGoArr[i - 1];
                    var lp = this.maskIGoArr[i].convertToNodeSpace(wp);
                    this.maskIGoArr[i].setPosition(lp);
                }
            }
            for (var i = 0; i < this.maskIGoArr.length; i++) {
                if (i + 1 < symbolAmount + 1) {
                    this.maskMArr[i].enabled = true;
                }
                else {
                    this.maskMArr[i].enabled = false;
                }
            }
            var wp = this.paylineContentParent.convertToWorldSpace(this.paylineContentParent.getPosition());
            this.paylineContentParent.parent = this.maskIGoArr[this.maskIGoArr.length - 1];
            var lp = this.paylineContentParent.convertToNodeSpace(wp);
            this.paylineContentParent.setPosition(lp);
        }
    },

    setMaskPosition: function (transform, mask) {
        var x = transform.x;
        var y = transform.y;
        var w = transform.width;
        var h = transform.height;
        mask.setContentSize(w, h);
        mask.setAnchorPoint(0, 1);
        mask.setPosition(x, y);
    },

    setFrameSprite: function (sprite, val) {
        var x = sprite.node.x;
        var y = sprite.node.y;
        var w = sprite.node.width;
        var h = sprite.node.height;
        sprite.spriteFrame = this.spriteController.checkFrameSprite(val);
        sprite.node.setContentSize(w, h);
        sprite.node.setAnchorPoint(0, 1);
        sprite.node.setPosition(x, y);
    },

    setWinPanelSprite: function (sprite, val) {
        var x = sprite.node.x;
        var y = sprite.node.y;
        var w = sprite.node.width;
        var h = sprite.node.height;
        sprite.spriteFrame = this.spriteController.checkWinPanelSprite(val);
        sprite.node.setContentSize(w, h);
        sprite.node.setAnchorPoint(0, 1);
        sprite.node.setPosition(x, y);
    },

    hideAllPaylines: function () {
        this.node.stopAllActions();
        var wp = this.paylineContentParent.convertToWorldSpace(this.paylineContentParent.getPosition());
        this.paylineContentParent.parent = this.node;
        var lp = this.paylineContentParent.convertToNodeSpace(wp);
        this.paylineContentParent.setPosition(lp);
        if (this.paylineIGoArr.length != 0) {
            for (var i = 0; i < this.paylineIGoArr.length; i++) {
                this.paylineIGoArr[i].active = false;
            }
        }
        if (this.paylineColorIGoArr.length != 0) {
            for (var i = 0; i < this.paylineColorIGoArr.length; i++) {
                this.paylineColorIGoArr[i].active = false;
            }
        }
        if (this.framesPrefab != null) {
            for (var i = 0; i < this.framesGoArr.length; i++) {
                var arr = this.framesGoArr[i];
                for (var j = 0; j < arr.length; j++) {
                    arr[j].active = false;
                    var childNode = arr[j].getChildByName("winPanel");
                    childNode.active = false;
                }
            }
        }
        if (this.maskIGoArr.length != 0) {
            for (var i = 0; i < this.maskIGoArr.length; i++) {
                var wp = this.maskIGoArr[i].convertToWorldSpace(this.maskIGoArr[i].getPosition());
                this.maskIGoArr[i].parent = this.maskIGoParent;
                var lp = this.maskIGoArr[i].convertToNodeSpace(wp);
                this.maskIGoArr[i].setPosition(lp);
                this.maskMArr[i].enabled = false;
            }
        }
    },
});
