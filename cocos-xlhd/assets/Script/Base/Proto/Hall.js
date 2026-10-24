var BClass = require("BClass")
var NetworkQueue = require("NetworkQueue");

import { HallMsg } from "./Msg/HallMsg" //这里引入文件,msg为package的包名

var Hall = {

    GuestLoginID :1,
    LoginRetID :2,
    UserLoginID :3,
    UserLogoutID :4,
    RequestHallVerID :5,
    HallVerInfoID :6,
    RequestServerListID :7,
    ServerListDataID :8,
    RequestGameServerAddrID :9,
    GameServerAddrInfoID :10,
    UpdateUserNotifyIdxC2HID :11,

    RequestUserHallInfoID :1013,
    UserHallInfoID :1014,    

    initMsgModel:function()
    {
        // 訊息
        NetworkQueue.AddMsgModelName(BClass.Hall, Hall.UpdateUserNotifyIdxC2HID, HallMsg.ClientUpdateUserNotifyIdx);

        // 登录
        NetworkQueue.AddMsgModelName(BClass.Hall, Hall.RequestServerListID, HallMsg.GetShowGameFlagByAreaMsg);
        NetworkQueue.AddMsgModelName(BClass.Hall, Hall.ServerListDataID, HallMsg.AllGameServerInfo);
        NetworkQueue.AddMsgModelName(BClass.Hall, Hall.GameServerAddrInfoID, HallMsg.GameServerAddr);
        NetworkQueue.AddMsgModelName(BClass.Hall, Hall.RequestHallVerID, HallMsg.HallVerReq);
        NetworkQueue.AddMsgModelName(BClass.Hall, Hall.HallVerInfoID, HallMsg.HallVerInfo);
        NetworkQueue.AddMsgModelName(BClass.Hall, Hall.GuestLoginID, HallMsg.GuestLogin);
        NetworkQueue.AddMsgModelName(BClass.Hall, Hall.UserLoginID, HallMsg.UserLogin);
        NetworkQueue.AddMsgModelName(BClass.Hall, Hall.LoginRetID, HallMsg.UserLoginRet);
        NetworkQueue.AddMsgModelName(BClass.Hall, Hall.RequestGameServerAddrID, HallMsg.RequestGameServerAddrInfo);
        NetworkQueue.AddMsgModelName(BClass.Hall, Hall.UserLogoutID, HallMsg.UserLogout);

        // 刷新用户信息;-
        NetworkQueue.AddMsgModelName(BClass.Hall, Hall.RequestUserHallInfoID, HallMsg.RequestUserHallInfo);
        NetworkQueue.AddMsgModelName(BClass.Hall, Hall.UserHallInfoID, HallMsg.UserLoginRet);
    }
};

module.exports = Hall;