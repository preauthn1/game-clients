import { NotifyServerMsg } from "./Msg/NotifyServerMsg" //这里引入文件,msg为package的包名

var NotifyServer = {

    ServerRegID : 1,
    AnnID : 2,
    AttrChangeID : 3,
    ServerStopID : 4,
    RefreshVersionID : 5,
    ServerStopWhiteIPListID : 6,
    ServerHostAndBackUp : 7,
    AnnFishRegID : 8,
    AnnFishID : 9,
    PayOrderID : 10,
    UpdateHallUserListID : 11,
    UserNotifyRetN2HID : 12,
    UserNotifyRetH2CID : 13,
    UpdateUserNotifyIdxH2NID : 15,

    initMsgModel: function()
    {
        var NetworkQueue = require("NetworkQueue");
        var BClass = require("BClass");

        NetworkQueue.AddMsgModelName(BClass.NotifyServer, NotifyServer.AnnID, NotifyServerMsg.AnnList);
        NetworkQueue.AddMsgModelName(BClass.NotifyServer, NotifyServer.AttrChangeID, NotifyServerMsg.AttrChangeList);
        NetworkQueue.AddMsgModelName(BClass.NotifyServer, NotifyServer.UserNotifyRetH2CID, NotifyServerMsg.UserNotifyInfo)
    }
};

module.exports = NotifyServer;