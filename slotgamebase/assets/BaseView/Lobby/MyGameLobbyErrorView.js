cc.Class({
    extends: cc.Component,

    properties: {
        mainNode:cc.Node,
        errorLabel:cc.Label,
        closeBtn:[cc.Node],
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {
        for(let i=0;i<this.closeBtn.length;i++){
            this.closeBtn[i].on('click', this.close, this);
        }
    },

    close(){
        this.mainNode.active = false;
    },

    show(msg,type){
        this.mainNode.active = true;
        this.errorLabel.string = msg;

        for(let i=0;i<this.closeBtn.length;i++){
            this.closeBtn[i].active = true;
        }
    },
    // update (dt) {},
});
