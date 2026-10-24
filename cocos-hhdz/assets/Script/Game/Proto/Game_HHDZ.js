import { netproto } from "GameMsg_" //这里引入文件,msg为package的包名
var Game_HHDZ = {
	HHDZSettingID:10001,
	HHDZStateID:10002,
	HHDZBetID:10003,
	HHDZBroadCastBetID:10004,
	HHDZGameResultPokerID:10005,
	HHDZGameSceneID:10006,
	HHDZGameResultWinID:10007,
	HHDZBetInfoID:10008,
	HHDZBetRetID:10009,
	HHDZShangZhuangID:10010,
	HHDZShangZhuangRetID:10011,
	HHDZGetShangZhuangListID:10012,
	HHDZShangZhuangListInfoID:10013,
	HHDZZhuangInfoID:10014,
	HHDZBetClearID:10015,
	HHDZResultCardListID:10016,
	HHDZBetClearRetID:10017,
	HHDZRichestListID:10018,
	HHDZLuckyStarListID:10019,
	HHDZRoundID:10020,


	initMsgModel: function()
	{
		var NetworkQueue = require("NetworkQueue");
		var BClass = require("BClass")

		NetworkQueue.AddMsgModelName(BClass.Game, Game_HHDZ.HHDZSettingID              ,netproto.)
		NetworkQueue.AddMsgModelName(BClass.Game, Game_HHDZ.HHDZStateID                ,netproto.)
		NetworkQueue.AddMsgModelName(BClass.Game, Game_HHDZ.HHDZBetID                  ,netproto.)
		NetworkQueue.AddMsgModelName(BClass.Game, Game_HHDZ.HHDZBroadCastBetID         ,netproto.)
		NetworkQueue.AddMsgModelName(BClass.Game, Game_HHDZ.HHDZGameResultPokerID      ,netproto.)
		NetworkQueue.AddMsgModelName(BClass.Game, Game_HHDZ.HHDZGameSceneID            ,netproto.)
		NetworkQueue.AddMsgModelName(BClass.Game, Game_HHDZ.HHDZGameResultWinID        ,netproto.)
		NetworkQueue.AddMsgModelName(BClass.Game, Game_HHDZ.HHDZBetInfoID              ,netproto.)
		NetworkQueue.AddMsgModelName(BClass.Game, Game_HHDZ.HHDZBetRetID               ,netproto.)
		NetworkQueue.AddMsgModelName(BClass.Game, Game_HHDZ.HHDZShangZhuangID          ,netproto.)
		NetworkQueue.AddMsgModelName(BClass.Game, Game_HHDZ.HHDZShangZhuangRetID       ,netproto.)
		NetworkQueue.AddMsgModelName(BClass.Game, Game_HHDZ.HHDZGetShangZhuangListID   ,netproto.)
		NetworkQueue.AddMsgModelName(BClass.Game, Game_HHDZ.HHDZShangZhuangListInfoID  ,netproto.)
		NetworkQueue.AddMsgModelName(BClass.Game, Game_HHDZ.HHDZZhuangInfoID           ,netproto.)
		NetworkQueue.AddMsgModelName(BClass.Game, Game_HHDZ.HHDZBetClearID             ,netproto.)
		NetworkQueue.AddMsgModelName(BClass.Game, Game_HHDZ.HHDZResultCardListID       ,netproto.)
		NetworkQueue.AddMsgModelName(BClass.Game, Game_HHDZ.HHDZBetClearRetID          ,netproto.)
		NetworkQueue.AddMsgModelName(BClass.Game, Game_HHDZ.HHDZRichestListID          ,netproto.)
		NetworkQueue.AddMsgModelName(BClass.Game, Game_HHDZ.HHDZLuckyStarListID        ,netproto.)
		NetworkQueue.AddMsgModelName(BClass.Game, Game_HHDZ.HHDZRoundID                ,netproto.)
	},
};

module.exports = Game_HHDZ
