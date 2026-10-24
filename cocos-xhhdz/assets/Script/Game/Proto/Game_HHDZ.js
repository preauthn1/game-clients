import { GameMsg_HHDZ } from "GameMsg_HHDZ" //这里引入文件,msg为package的包名
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

		NetworkQueue.AddMsgModelName(BClass.Game, Game_HHDZ.HHDZSettingID, GameMsg_HHDZ.HHDZ_Setting)
		NetworkQueue.AddMsgModelName(BClass.Game, Game_HHDZ.HHDZStateID, GameMsg_HHDZ.HHDZ_Sate)
		NetworkQueue.AddMsgModelName(BClass.Game, Game_HHDZ.HHDZBetID, GameMsg_HHDZ.HHDZ_BetArr)
		NetworkQueue.AddMsgModelName(BClass.Game, Game_HHDZ.HHDZBroadCastBetID, GameMsg_HHDZ.HHDZ_BroadCastBetArr)
		NetworkQueue.AddMsgModelName(BClass.Game, Game_HHDZ.HHDZGameResultPokerID, GameMsg_HHDZ.HHDZ_GameResultPoker)
		NetworkQueue.AddMsgModelName(BClass.Game, Game_HHDZ.HHDZGameResultWinID, GameMsg_HHDZ.HHDZ_GameResultUserMoney)
		NetworkQueue.AddMsgModelName(BClass.Game, Game_HHDZ.HHDZBetInfoID, GameMsg_HHDZ.HHDZ_UserBetInfo)
		NetworkQueue.AddMsgModelName(BClass.Game, Game_HHDZ.HHDZBetRetID, GameMsg_HHDZ.HHDZ_BetRet)
		
		NetworkQueue.AddMsgModelName(BClass.Game, Game_HHDZ.HHDZResultCardListID, GameMsg_HHDZ.HHDZ_ResultCardList)
		NetworkQueue.AddMsgModelName(BClass.Game, Game_HHDZ.HHDZBetClearRetID, GameMsg_HHDZ.HHDZ_BetClearRet)
		NetworkQueue.AddMsgModelName(BClass.Game, Game_HHDZ.HHDZRichestListID, GameMsg_HHDZ.HHDZ_RichestList)
		NetworkQueue.AddMsgModelName(BClass.Game, Game_HHDZ.HHDZLuckyStarListID, GameMsg_HHDZ.HHDZ_LuckyStar)
		NetworkQueue.AddMsgModelName(BClass.Game, Game_HHDZ.HHDZRoundID, GameMsg_HHDZ.HHDZ_RoundID)		
	},
};

module.exports = Game_HHDZ
