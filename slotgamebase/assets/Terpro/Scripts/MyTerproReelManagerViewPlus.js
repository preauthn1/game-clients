var config = require('MyBaseConfig');

cc.Class({
    extends: cc.Component,

    properties: {
    },
    
    start()
    {
        // 設定Reel音效
        let reelManagerView = this.node.getComponent(config.SCRIPT.REELMANAGER)
        if(reelManagerView != null)
        {
            for(let i in reelManagerView.reel)
            {
                reelManagerView.reel[i].audioManager = reelManagerView.audioManager.getComponent(config.SCRIPT.AUDIOMANAGER)
            }
        }
    },
});
