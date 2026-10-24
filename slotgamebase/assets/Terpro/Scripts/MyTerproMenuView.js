cc.Class({
    extends: cc.Component,

    properties: 
    {
        // 賠付表版面
        payTablePanel:cc.Node,
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    // update (dt) {},

    // 賠付表
    onPayTableBtn()
    {
        console.log("onPayTableBtn")
        this.payTablePanel.active = true
    },

    // 音樂
    onMusicBtn()
    {
        console.log("onMusicBtn")
    },

    // 回大廳
    onBackLobbyBtn()
    {
        console.log("onBackLobbyBtn")
        window.close();
    },

    // 關閉
    onCloseBtn()
    {
        console.log("onCloseBtn")
        this.node.active = false
    },
});
