
import { CommonMsg } from "./Msg/CommonMsg" //这里引入文件,msg为package的包名

var Common = {

    TipMessageID : 1,
    HeartBeatID : 2,
    HeartBeatReturnID : 3,
    RequestHeartBeatConfigID : 4,
    HeartBeatConfigID : 5,
    IPReportID : 6,
    ConnTokenID : 7,

    initMsgModel: function()
    {
        var NetworkQueue = require("NetworkQueue");
        var BClass = require("BClass");
        
        NetworkQueue.AddMsgModelName(BClass.Common, Common.TipMessageID, CommonMsg.TipMessage);
        NetworkQueue.AddMsgModelName(BClass.Common, Common.HeartBeatConfigID, CommonMsg.HeartBeatConfig);
        NetworkQueue.AddMsgModelName(BClass.Common, Common.IPReportID, CommonMsg.IPReport);
        NetworkQueue.AddMsgModelName(BClass.Common, Common.ConnTokenID, CommonMsg.ConnTokenMessage)
    }
};

module.exports = Common;