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
        list:[cc.Node],
        currentIndex:0,
        leftBtn:cc.Button,
        rightBtn:cc.Button,
        openBtn:cc.Button,
        closeBtn:cc.Button,
    },

    // use this for initialization
    onLoad: function () {
        if(this.openBtn!=null)
        this.openBtn.node.on('click', this.open, this);
        if(this.closeBtn!=null)
        this.closeBtn.node.on('click', this.exit, this);
    },

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
    updateTable(index){
        for(let i=0;i<this.list.length;i++){
            this.list[i].active = false;
        }
        if(index == 0){
            this.leftBtn.interactable = false;
        }
        else{
            this.leftBtn.interactable = true;
        }
        if(index == this.list.length - 1){
            this.rightBtn.interactable = false;
        }
        else{
            this.rightBtn.interactable = true;
        }
        if(index <= this.list.length-1)
        this.list[index].active = true;
    },
    left(){
        this.currentIndex -=1;
        this.updateTable(this.currentIndex);
    },
    right(){
        this.currentIndex +=1;
        this.updateTable(this.currentIndex);
    },
    exit(){
        if (window.jpMainView != null) {
            window.jpMainView.open();
        }
        this.node.active = false;
    },
    open(){
        if (window.jpMainView != null) {
            window.jpMainView.close();
        }
        this.node.active = true;
        this.currentIndex = 0;
        this.updateTable(this.currentIndex);
    },
});
