// Learn cc.Class:
//  - [Chinese] https://example.invalid/creator/manual/zh/scripting/class.html
//  - [English] http://example.invalid/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://example.invalid/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://example.invalid/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://example.invalid/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://example.invalid/docs/creator/manual/en/scripting/life-cycle-callbacks.html

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

    onLoad () {
        this.canvas = cc.find("Canvas").getComponent(cc.Canvas)
    },

    start () {

    },

    getWidth(){
        return window.innerWidth
    },

    getHeight(){
        return window.innerHeight
    },

    update (dt) {
        if(this.canvas != null){
            if(this.viewWidth != this.getWidth() || this.viewHeight != this.getHeight()){
                this.viewWidth = this.getWidth()
                this.viewHeight = this.getHeight()
                let height = 1334
                let width = 750

                height = this.viewHeight * width / this.viewWidth
                
                if(height > 1560){
                    this.canvas.fitWidth = true
                    this.canvas.fitHeight  = false
                    this.canvas.designResolution = new cc.Size(width, 1560)
                    console.log("designResolution",this.canvas.designResolution)
                }
                else if(height > 1334){
                    this.canvas.fitWidth = true
                    this.canvas.fitHeight  = false
                    this.canvas.designResolution = new cc.Size(width, height)
                    console.log("designResolution",this.canvas.designResolution)
                }
                else{
                    this.canvas.fitWidth = true
                    this.canvas.fitHeight  = true
                    this.canvas.designResolution = new cc.Size(width, 1334)
                    console.log("designResolution",this.canvas.designResolution)
                }
            }
        }
    },
});
