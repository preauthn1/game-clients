var config = require('MyBaseConfig');
cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //     // ATTRIBUTES:
        //     default: null,        // The default value will be used only when the component attaching
        //                           // to a node for the first time
        //     type: cc.SpriteFrame, // optional, default is typeof default
        //     serializable: true,   // optional, default is true
        // },
        // bar: {
        //     get () {
        //         return this._bar;
        //     },
        //     set (value) {
        //         this._bar = value;
        //     }
        // },
        obj:cc.Node,
        objs:[cc.Node],
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {
        // var actions = [];
        // for(let i=0;i<this.objs.length;i++){
        //     let j= i;
        //     let time = i*10;
        //     console.log(time);
            
        //     // cc.delayTime(_delayTime),
        //     // cc.callFunc(this.allReelFinishStop,this),

        //     actions.push(cc.delayTime(3));
        //     actions.push(cc.callFunc(function(){
        //         this.objs[i].getComponent(cc.Animation).play("test");
        //     },this));
        //     actions.push(cc.callFunc(this.testing2,this));
        // }
        // this.node.runAction(cc.sequence(actions));

        setInterval(this.updateValue, 1000);

        //console.log(config.Symbol["S1"]);
        //this.obj.getComponent(cc.Animation).play(config.SymbolAnimation["s5"]);

        // var action1 = cc.delayTime(1);
        // var action2 = null;
        // var action3 = cc.callFunc(this.testing1,this);
        // var action4 = cc.delayTime(1);
        // var action5 = cc.callFunc(this.testing2,this);
        // var action6 = null;
        // var action7 = cc.callFunc(this.testing3,this);


        // var multiAction = [];
        // multiAction.push(action1);
        // multiAction.push(action2);
        // multiAction.push(action3);
        // multiAction.push(action4);
        // multiAction.push(action5);
        // multiAction.push(action6);
        // multiAction.push(action7);
        // multiAction.push(action4);
        // multiAction.push(action5);

        // var multiAction = [];
        // multiAction.push(cc.delayTime(1));
        // multiAction.push(null);
        // multiAction.push(cc.callFunc(this.testing1,this));
        // // multiAction.push(cc.delayTime(1));
        // // multiAction.push(cc.callFunc(this.testing2,this));
        // // multiAction.push(null);
        // // multiAction.push(cc.callFunc(this.testing3,this));

        // if(multiAction.length >= 2)
        // this.node.runAction(cc.sequence(
        //     multiAction
        // ));
        // else
        // this.node.runAction(multiAction);
    },
    updateValue(){
        console.log("123");
    },
    playAnim(obj){
        console.log("123");
        obj.getComponent(cc.Animation).play("test")
    },
    testing1(){
        console.log("Testing 123!!");
    },
    testing2(){
        console.log("Testing 321!!");
    },
    testing3(){
        console.log("Testing!!");
    },
    fireEvent(){
        console.log("Fire Event");
        var sender = this.node.parent.getComponent(config.SCRIPT.REGISTEREVENT);
        // sender.sendEvent(config.EVENT.ENABLEWINLINE);
        sender.sendEventWithParam(config.EVENT.ENABLEWINLINE,{winline:'1'})
    },
    // update (dt) {},
});
