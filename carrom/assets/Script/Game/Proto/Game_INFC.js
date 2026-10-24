import { GameMsg_INFC } from "GameMsg_INFC" //这里引入文件,msg为package的包名

var Game_INFC = {
	INFC_SClassID_UNSPECIFIED : 0,

	// 遊戲設定 (內容為 INFC_GameSetting)
	INFC_GameSettingID : 10000,
	// 下注階段(Server主動扣錢)
	INFC_BetStepID : 10010,
	// 遊戲開始 (可以開始切)
	INFC_GameStartID : 10020,
	// 排行榜 (內容為 INFC_GameRank)
	INFC_GameRankID : 10030,
	// 遊戲結果 (內容為 INFC_GameResult)
	INFC_GameResultID : 10040,

	// 玩家分數異動 (內容為 INFC_IncScore)
	INFC_IncScoreID : 30000,
	// 玩家漏切水果
	INFC_MissID : 30010,
	// 玩家切到炸彈
	INFC_BoomID : 30020,

	initMsgModel: function()
	{
		/**
	    	INFC_State_UNSPECIFIED = 0;
			// 比賽中
			INFC_State_Gaming = 1;
			// 掛了
			INFC_State_Dead = 2;
			// 離線
			INFC_State_Offline = 3;
		*/
		this.PlayerState = GameMsg_INFC.INFC_PlayerState


		var NetworkQueue = require("NetworkQueue");
		var BClass = require("BClass")

		NetworkQueue.AddMsgModelName(BClass.Game, Game_INFC.INFC_GameSettingID, GameMsg_INFC.INFC_GameSetting)
		NetworkQueue.AddMsgModelName(BClass.Game, Game_INFC.INFC_GameRankID, GameMsg_INFC.INFC_GameRank)
		NetworkQueue.AddMsgModelName(BClass.Game, Game_INFC.INFC_GameResultID, GameMsg_INFC.INFC_GameResult)
		NetworkQueue.AddMsgModelName(BClass.Game, Game_INFC.INFC_IncScoreID, GameMsg_INFC.INFC_IncScore)
	},
};

module.exports = Game_INFC
