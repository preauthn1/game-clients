cc.Class({
    extends: cc.Component,
    extends: require('BaseMenuView'),
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
    },

    onLoad: function () {
        this.popUpView = this.popUpView.getComponent('PantherMoonPopUpView');
        this.gameController = this.gameController.getComponent('PantherMoonGameController');
        this.audioController = this.audioController.getComponent('PantherMoonAudioController');

        var lobbyButtonEventHandler = new cc.Component.EventHandler();
        lobbyButtonEventHandler.target = this.node; //这个 node 节点是你的事件处理代码组件所属的节点
        lobbyButtonEventHandler.component = "PantherMoonMenuView";
        lobbyButtonEventHandler.handler = "onClickLobbyB";
        this.lobbyB.clickEvents.push(lobbyButtonEventHandler);

        var paytableButtonEventHandler = new cc.Component.EventHandler();
        paytableButtonEventHandler.target = this.node; //这个 node 节点是你的事件处理代码组件所属的节点
        paytableButtonEventHandler.component = "PantherMoonMenuView";
        paytableButtonEventHandler.handler = "onClickPaytableB";
        this.paytableB.clickEvents.push(paytableButtonEventHandler);

        var infoButtonEventHandler = new cc.Component.EventHandler();
        infoButtonEventHandler.target = this.node; //这个 node 节点是你的事件处理代码组件所属的节点
        infoButtonEventHandler.component = "PantherMoonMenuView";
        infoButtonEventHandler.handler = "onClickInfoB";
        this.infoB.clickEvents.push(infoButtonEventHandler);

        var audioToggleEventHandler = new cc.Component.EventHandler();
        audioToggleEventHandler.target = this.node; //这个 node 节点是你的事件处理代码组件所属的节点
        audioToggleEventHandler.component = "PantherMoonMenuView";
        audioToggleEventHandler.handler = "onClickAudioT";
        audioToggleEventHandler.customEventData = "";
        this.audioT.checkEvents.push(audioToggleEventHandler, audioToggleEventHandler.customEventData);

        var exitAppButtonEventHandler = new cc.Component.EventHandler();
        exitAppButtonEventHandler.target = this.node; //这个 node 节点是你的事件处理代码组件所属的节点
        exitAppButtonEventHandler.component = "PantherMoonMenuView";
        exitAppButtonEventHandler.handler = "onClickExitAppB";
        this.exitAppB.clickEvents.push(exitAppButtonEventHandler);


        var exitButtonEventHandler = new cc.Component.EventHandler();
        exitButtonEventHandler.target = this.node; //这个 node 节点是你的事件处理代码组件所属的节点
        exitButtonEventHandler.component = "PantherMoonMenuView";
        exitButtonEventHandler.handler = "onClickExitB";
        this.exitB.clickEvents.push(exitButtonEventHandler);
    },

    show: function () {
        this._super();
    },

    hide: function () {
        this._super();
    },

    onClickLobbyB: function () {
        this._super();
    },

    onClickPaytableB: function () {
        this._super();
    },

    onClickInfoB: function () {
        this._super();
    },

    onClickAudioT: function (event, customEventData) {
        this._super(event, customEventData);
    },

    onClickExitAppB: function () {
        this._super();
    },

    onClickExitB: function () {
        this._super();
    },

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});

