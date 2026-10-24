import { GameMsg_INRM } from "GameMsg_INRM" //这里引入文件,msg为package的包名

var Game_INRM = {	
	initMsgModel: function()
	{
        /**
            INRM_SClassID_UNSPECIFIED = 0;

            // 遊戲設定 (內容為 INRM_GameSetting)
            INRM_GameSettingID = 10000;
            // 遊戲狀態 (狀態，第幾輪，當前玩家) (內容為 INRM_GameState) (廣播)
            INRM_GameStateID = 10010;
            // 遊戲結果 (內容為 INRM_GameResult) (廣播)
            INRM_GameResultID = 10020;
            // 玩家手牌 (內容為 INRM_PlayerCards) (開始時發送一次)
            INRM_PlayerCardID = 10030;
            // 當蓋牌區牌被抽完，會將開牌區重新洗過去 (內容為 Poker_Hand) (廣播)
            INRM_DeckResetID = 10040;
         
            // 遊戲倒數開始 (廣播)
            INRM_GameStartCountDownID = 20000;
            // 遊戲倒數取消 (廣播)
            INRM_GameStartCountDownCancelID = 20001;
			// 玩家動作倒數開始 (廣播) (內容為 INRM_Player)(僅 ID, ActionCD)
			INRM_PlayerActionCountDownID = 20010;
			// 玩家動作倒數取消 (廣播) (內容為 INRM_Player)(僅 ID)
			INRM_PlayerActionCountDownCancelID = 20011;
			// 玩家最終更新倒數開始 (廣播) (內容為 INRM_TimeCD)
			INRM_WaitFinalRefreshCountDownID = 20020;
            // 玩家更新手牌組合 (內容為 Poker_Hand)
            INRM_RefreshHandID = 30000;
            // 玩家抽取亮牌區 (完成後廣播其他玩家)
            INRM_PopOpenDeckID = 30010;
            // 玩家抽取蓋牌區 (完成後廣播其他玩家)
            INRM_PopCloseDeckID = 30011;
            // 玩家棄牌 (完成後廣播其他玩家)
            INRM_GiveupID = 30020;
            // 玩家丟牌 (內容為 INRM_ThrowCard) (完成後廣播其他玩家)
            INRM_ThrowCardID = 30030;
            // 玩家宣告勝利 (內容為 INRM_Declare) (完成後廣播其他玩家)
            INRM_DeclareID = 30040;
            // 玩家Miss (完成後廣播其他玩家)
            INRM_MissID = 30050;
            
            // 玩家更新手牌組合[回覆] (內容為 INRM_ActionRet)
            INRM_RefreshHandRetID = 40000;
            // 玩家抽取亮牌區[回覆] (內容為 INRM_PopCardRet)
            INRM_PopOpenDeckRetID = 40010;
            // 玩家抽取蓋牌區[回覆] (內容為 INRM_PopCardRet)
            INRM_PopCloseDeckRetID = 40011;
            // 玩家棄牌[回覆] (內容為 INRM_ActionRet)
            INRM_GiveupRetID = 40020;
            // 玩家丟牌[回覆] (內容為 INRM_ActionRet)
            INRM_ThrowCardRetID = 40030;
            // 玩家宣告勝利[回覆] (內容為 INRM_ActionRet)
            INRM_DeclareRetID = 40040;
            // 玩家Miss[回覆] (內容為 INRM_ActionRet)
            INRM_MissRetID = 40050;
            
            // [事件發生] 玩家更新手牌組合 (內容為 INRM_Player)(僅 ID)
            INRM_RefreshHandHappenedID = 50000;
            // [事件發生] 玩家抽取亮牌區 (內容為 INRM_Player)(僅 ID)
            INRM_PopOpenDeckHappenedID = 50010;
            // [事件發生] 玩家抽取蓋牌區 (內容為 INRM_Player)(僅 ID)
            INRM_PopCloseDeckHappenedID = 50011;
            // [事件發生] 玩家棄牌 (內容為 INRM_Player)(僅 ID)
            INRM_GiveupHappenedID = 50020;
            // [事件發生] 玩家丟牌 (內容為 INRM_ThrowCard)(多 PlayerID)
            INRM_ThrowCardHappenedID = 50030;
            // [事件發生] 玩家宣告勝利 (內容為 INRM_Declare)(多 PlayerID)
            INRM_DeclareHappenedID = 50040;
            // [事件發生] 玩家詐糊 (廣播) (內容為 INRM_Player)(僅 ID)
            INRM_BluffHappenedID = 50041;
            // [事件發生] 玩家Miss (內容為 INRM_Player)(僅 ID)
            INRM_MissHappenedID = 50050;
         */
        this.MessageID = GameMsg_INRM.INRM_GameMessageClassID,
        this.GameState = GameMsg_INRM.INRM_GState
        this.PlayerState = GameMsg_INRM.INRM_PState
        this.Poker_Suit = GameMsg_INRM.Poker_Suit
        this.Category = GameMsg_INRM.INRM_Category

		var NetworkQueue = require("NetworkQueue");
		var BClass = require("BClass")

		NetworkQueue.AddMsgModelName(BClass.Game, this.MessageID.INRM_GameSettingID, GameMsg_INRM.INRM_GameSetting)
		NetworkQueue.AddMsgModelName(BClass.Game, this.MessageID.INRM_GameStateID, GameMsg_INRM.INRM_GameState)
		NetworkQueue.AddMsgModelName(BClass.Game, this.MessageID.INRM_GameResultID, GameMsg_INRM.INRM_GameResult)
		NetworkQueue.AddMsgModelName(BClass.Game, this.MessageID.INRM_PlayerCardID, GameMsg_INRM.INRM_PlayerCards)
		NetworkQueue.AddMsgModelName(BClass.Game, this.MessageID.INRM_DeckResetID, GameMsg_INRM.Poker_Hand)


		NetworkQueue.AddMsgModelName(BClass.Game, this.MessageID.INRM_PlayerActionCountDownID, GameMsg_INRM.INRM_Player)
		NetworkQueue.AddMsgModelName(BClass.Game, this.MessageID.INRM_PlayerActionCountDownCancelID, GameMsg_INRM.INRM_Player)
		NetworkQueue.AddMsgModelName(BClass.Game, this.MessageID.INRM_WaitFinalRefreshCountDownID, GameMsg_INRM.INRM_TimeCD)
		
		NetworkQueue.AddMsgModelName(BClass.Game, this.MessageID.INRM_RefreshHandID, GameMsg_INRM.Poker_Hand)
		NetworkQueue.AddMsgModelName(BClass.Game, this.MessageID.INRM_ThrowCardID, GameMsg_INRM.INRM_ThrowCard)
		NetworkQueue.AddMsgModelName(BClass.Game, this.MessageID.INRM_DeclareID, GameMsg_INRM.INRM_Declare)

		NetworkQueue.AddMsgModelName(BClass.Game, this.MessageID.INRM_RefreshHandRetID, GameMsg_INRM.INRM_RefreshHandRet)
		NetworkQueue.AddMsgModelName(BClass.Game, this.MessageID.INRM_PopOpenDeckRetID, GameMsg_INRM.INRM_PopCardRet)
		NetworkQueue.AddMsgModelName(BClass.Game, this.MessageID.INRM_PopCloseDeckRetID, GameMsg_INRM.INRM_PopCardRet)
		NetworkQueue.AddMsgModelName(BClass.Game, this.MessageID.INRM_GiveupRetID, GameMsg_INRM.INRM_ActionRet)
		NetworkQueue.AddMsgModelName(BClass.Game, this.MessageID.INRM_ThrowCardRetID, GameMsg_INRM.INRM_ActionRet)
		NetworkQueue.AddMsgModelName(BClass.Game, this.MessageID.INRM_DeclareRetID, GameMsg_INRM.INRM_ActionRet)
        NetworkQueue.AddMsgModelName(BClass.Game, this.MessageID.INRM_MissRetID, GameMsg_INRM.INRM_ActionRet)
        
		NetworkQueue.AddMsgModelName(BClass.Game, this.MessageID.INRM_RefreshHandHappenedID, GameMsg_INRM.INRM_Player)
		NetworkQueue.AddMsgModelName(BClass.Game, this.MessageID.INRM_PopOpenDeckHappenedID, GameMsg_INRM.INRM_Player)
		NetworkQueue.AddMsgModelName(BClass.Game, this.MessageID.INRM_PopCloseDeckHappenedID, GameMsg_INRM.INRM_Player)
		NetworkQueue.AddMsgModelName(BClass.Game, this.MessageID.INRM_GiveupHappenedID, GameMsg_INRM.INRM_Player)
		NetworkQueue.AddMsgModelName(BClass.Game, this.MessageID.INRM_ThrowCardHappenedID, GameMsg_INRM.INRM_ThrowCard)
		NetworkQueue.AddMsgModelName(BClass.Game, this.MessageID.INRM_DeclareHappenedID, GameMsg_INRM.INRM_Declare)
        NetworkQueue.AddMsgModelName(BClass.Game, this.MessageID.INRM_BluffHappenedID, GameMsg_INRM.INRM_Player)
        NetworkQueue.AddMsgModelName(BClass.Game, this.MessageID.INRM_MissHappenedID, GameMsg_INRM.INRM_Player)
	},
};

module.exports = Game_INRM
