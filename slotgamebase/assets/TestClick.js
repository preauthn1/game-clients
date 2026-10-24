// Learn cc.Class:
//  - [Chinese] http://example.invalid/docs/creator/scripting/class.html
//  - [English] http://example.invalid/docs/editors_and_tools/creator-chapters/scripting/class/index.html
// Learn Attribute:
//  - [Chinese] http://example.invalid/docs/creator/scripting/reference/attributes.html
//  - [English] http://example.invalid/docs/editors_and_tools/creator-chapters/scripting/reference/attributes/index.html
// Learn life-cycle callbacks:
//  - [Chinese] http://example.invalid/docs/creator/scripting/life-cycle-callbacks.html
//  - [English] http://example.invalid/docs/editors_and_tools/creator-chapters/scripting/life-cycle-callbacks/index.html

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
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        this.node.on('mousedown',this.handleMouseDown,this);
        console.log("Start!!!");
    },
    onKeyDown: function (event) {
        console.log(event.keyCode);

    },
    handleMouseDown(e) {
        console.log(e._button);
        //e.button describes the mouse button that was clicked
        // 0 is left, 1 is middle, 2 is right
        if (e._button === 2) {
            console.log("Right CLick");
        } else if (e._button === 0) {  
          //Do something if left button was clicked and right button is still pressed
          console.log("Left CLick");
        }
      },
    // update (dt) {},
});
