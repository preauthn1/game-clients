import { GameRoomMsg } from "./Msg/GameRoomMsg" //这里引入文件,msg为package的包名

var GameRoom = {

    LoginRoomID : 1,
    LoginRoomRetID : 2,
    UserQueueID : 3,
    GameReadyID : 4,
    RequestGameVerID : 5,
    GameVerInfoID : 6,

    // 牌桌資訊
    ROOM_TableInfoID : 1000,
    ROOM_Read_TableInfoID : 2000,

    // 玩家選桌
    ROOM_ChooseTableID : 1001,


    initMsgModel: function()
    {
        var NetworkQueue = require("NetworkQueue");
        var BClass = require("BClass")
        
        NetworkQueue.AddMsgModelName(BClass.GameRoom, GameRoom.LoginRoomID, GameRoomMsg.LoginGameRoomInfo)
        NetworkQueue.AddMsgModelName(BClass.GameRoom, GameRoom.LoginRoomRetID, GameRoomMsg.LoginGameRoomRet)
        NetworkQueue.AddMsgModelName(BClass.GameRoom, GameRoom.GameVerInfoID, GameRoomMsg.GameVerInfo)
    }
};

module.exports = GameRoom;