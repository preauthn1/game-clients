cc.Class({
    extends: cc.Component,

    properties: {
        playerNameText: cc.Label,
        playerBalanceText: cc.Label,
        playerArrowObj: cc.Node,
        playerName: {
            visible: false,
            default: null,
        },
        playerBalance: {
            visible: false,
            default: 0,
        },
    },

    hide() {
        this.node.active = false;
    },

    show(seatInfo, isMySeat, rotate) {
        this.node.active = true;
        this.playerName = seatInfo.playerName;
        this.playerBalance = seatInfo.balance;
        this.playerNameText.string = this.playerName;
        this.playerBalanceText.string = this.playerBalance;
        if (isMySeat) {
            this.playerArrowObj.active = true;
            var position = this.playerArrowObj.y;
            var seq = cc.sequence(
                cc.moveTo(0.5, new cc.v2(this.playerArrowObj.x, position - 30)),
                cc.moveTo(0.5, new cc.v2(this.playerArrowObj.x, position)),
            ).repeat(5);
            this.playerArrowObj.runAction(
                cc.sequence(
                    seq,
                    cc.callFunc(function () {
                        this.playerArrowObj.active = false;
                    }, this),
                ),
            );
        } else {
            this.playerArrowObj.active = false;
        }
    },

    updatePlayerCredit(credit){
        this.playerBalance = credit;
        this.playerBalanceText.string = this.playerBalance;
    },
});
