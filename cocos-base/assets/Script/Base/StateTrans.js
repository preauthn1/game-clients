function StateTrans()
{
    this.init = function(desState, exitTime)
    {
        this.CondArray = new Array();
        this.desState = desState;
        this.exitTime = exitTime;
    };

    this.createCond = function(mode, parameter, threshold)
    {
        let condData = {}
        condData.mode = mode;
        condData.parameter = parameter;
        condData.threshold = threshold;
        this.CondArray.push(condData);        
    };
}

module.exports = StateTrans;