import { Game_GEN } from "Game_GEN" //这里引入文件,msg为package的包名

var GameProto = {

    MessageID : Game_GEN.GEN_GameMessageClassID,
    GameMessageID: Game_GEN.GEN_GameMessageClassID,
    ErrorType : Game_GEN.GEN_ErrorType,

    initMsgModel: function()
    {
        var NetworkQueue = require("NetworkQueue");
        var BClass = require("BClass")
        var GameRoom = require("GameRoom")

        NetworkQueue.AddMsgModelName(BClass.GameRoom, GameRoom.ROOM_TableInfoID, Game_GEN.GEN_RoomInfo)        
        //NetworkQueue.AddMsgModelName(BClass.Game, Game_GEN.GEN_GameMessageClassID.GEN_None, )
        NetworkQueue.AddMsgModelName(BClass.Game, Game_GEN.GEN_GameMessageClassID.GEN_ErrorID, Game_GEN.GEN_Error)
        NetworkQueue.AddMsgModelName(BClass.Game, Game_GEN.GEN_GameMessageClassID.GEN_GameSettingID, Game_GEN.GEN_GameSetting)
        NetworkQueue.AddMsgModelName(BClass.Game, Game_GEN.GEN_GameMessageClassID.GEN_RoadMapID, Game_GEN.GEN_RoadMap)
        NetworkQueue.AddMsgModelName(BClass.Game, Game_GEN.GEN_GameMessageClassID.GEN_GameStatusID, Game_GEN.GEN_GameStatus)
        NetworkQueue.AddMsgModelName(BClass.Game, Game_GEN.GEN_GameMessageClassID.GEN_GameResultID, Game_GEN.GEN_GameResult)
        //NetworkQueue.AddMsgModelName(BClass.Game, Game_GEN.GEN_GameMessageClassID.GEN_Read_GameSettingID, )
        //NetworkQueue.AddMsgModelName(BClass.Game, Game_GEN.GEN_GameMessageClassID.GEN_Read_RoadMapID, )
        //NetworkQueue.AddMsgModelName(BClass.Game, Game_GEN.GEN_GameMessageClassID.GEN_Read_GameStatusID, )
        NetworkQueue.AddMsgModelName(BClass.Game, Game_GEN.GEN_GameMessageClassID.GEN_BetID, Game_GEN.GEN_Bet)
    }
};

module.exports = GameProto;