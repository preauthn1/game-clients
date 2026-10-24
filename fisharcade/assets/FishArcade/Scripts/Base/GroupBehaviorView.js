cc.Class({
    extends: cc.Component,

    properties: {
        group:{
            default:null,
            visible:false,
        },
        groupAnimator:{
            default:null,
            visible:false,
        },
        poolView:{
            default:null,
            visible:false,
        },
        fishList:{
            default:[],
            visible:false,
        },
        startPosition:{
            default:null,
            visible:false,
        },
        endPosition:{
            default:null,
            visible:false,
        },
        remainPoint:{
            default:null,
            visible:false,
        },
        isSwimming :{
            default:false,
            visible:false,
        },
    },

    onLoad:function(){
        this.groupAnimator = this.getComponentInChildren(cc.Animation);
    },
});
