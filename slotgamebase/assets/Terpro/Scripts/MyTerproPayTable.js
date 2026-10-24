var PayTableSC = require("PayTableSC")

cc.Class({
    extends: cc.Component,
    extends: PayTableSC,

    properties: 
    {
        points:[cc.Button],        
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () 
    {
        this.updateTable(this.currentIndex)
    },

    // update (dt) {},

    updateTable : function(index)
    {
        this._super(index)

        for(let i in this.points)
        {
            this.points[i].interactable = i == index;
        }
    }
});
