cc.Class({
    extends: cc.Component,

    properties: {
        gameStart:{
            default:false,
            visible:false,
        },
        maxGameTime:{
            default:60,
            visible:false,
        },
        currGameTime:{
            default:0,
            visible:false,
        },
        curGame: {
            default: null,
            visible: false,
        },
        gameController:cc.Node,
        gameControllerScript:{
            default:null,
            visible:false,
        },
        poolView:cc.Node,
        poolViewScript:{
            default:null,
            visible:false,
        },
        frameView: cc.Node,
        frameViewScript: {
            default: null,
            visible: false,
        },

        backgroundView:cc.Node,
    },

    update (dt) {
         if(this.gameStart){
            this.currGameTime += dt;
            this.updateTime(this.currGameTime);
         }
     },
});
