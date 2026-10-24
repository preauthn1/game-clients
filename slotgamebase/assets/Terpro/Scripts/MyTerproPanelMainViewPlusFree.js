var config = require('MyBaseConfig');
var MyTerproPanelMainViewPlus = require('MyTerproPanelMainViewPlus');

cc.Class({
    extends: cc.Component,
    extends: MyTerproPanelMainViewPlus,

    properties: 
    {
        panelMainView:cc.Node,
        freeSpinNum:cc.Node,
        freeSpinText:cc.Label,
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () 
    {
        this._super()

        let self = this
        
        if(this.panelMainView != null)
        {
            this.panelMainView = this.panelMainView.getComponent(config.SCRIPT.PANELMANAGER)
            this.panelMainView.updateFreeSpinNumber = function(number)
            {
                if(number <= 0)
                {
                    self.freeSpinNum.active = false
                }
                else
                {
                    self.freeSpinNum.active = true
                    self.freeSpinText.string = number;
                }
                self.panelMainView.freespinNumber = number
            }
        }
    },

    // update (dt) {},
});
