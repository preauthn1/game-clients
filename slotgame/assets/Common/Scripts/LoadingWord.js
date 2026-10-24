cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //    default: null,      // The default value will be used only when the component attaching
        //                           to a node for the first time
        //    url: cc.Texture2D,  // optional, default is typeof default
        //    serializable: true, // optional, default is true
        //    visible: true,      // optional, default is true
        //    displayName: 'Foo', // optional
        //    readonly: false,    // optional, default is false
        // },
        // ...
        word:{
            default:null,
            type:cc.RichText,
        },
        count:0,
        countTime:0,
    },

    // use this for initialization
    onLoad: function () {
        this.word = this.node.getComponent(cc.RichText);
    },

    //called every frame, uncomment this function to activate update callback
    update: function (dt) {

        if(!this.node.active)
        return;

        this.countTime += dt;
        if(this.countTime >= 1){
            this.countTime = 0;
            this.count ++ ;
            if(this.count > 3){
                this.count = 0;
            }

            var word = "<outline color=grey width=3><color=white>Loading"; //;"</color></outline>"
            for(let i =0;i<this.count;i++){
                word += ".";
            }
            word += "</color></outline>";
            this.word.string = word;
        }
    },
});
