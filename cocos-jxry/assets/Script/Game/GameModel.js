var G = require( "Global")
var gameLayer = null
var gameData = null

let networkQueue = require("NetworkQueue")
let Game_JXRY = require("Game_JXRY")
let BClass = require("BClass")
let Game = require("Game")

// 接收消息table
var groupName = G.GetGamePName()
//=== 客户端发送帧数据 ===

var GameModel = {
	extends: cc.Component,

	Init(){	
		gameData = require("GameData")
		gameLayer = require("GameLayer")
		
		//用户进入桌子消息
		networkQueue.RegMsgHook(BClass.Game, Game.UserEnterID, function(receiveMsg){	
			gameData.SetUserData(receiveMsg.User)
			gameLayer.SetUserData(receiveMsg.User)
		})
		
		/*用户状态改变
		networkQueue.RegMsgHook(BClass.Game, Game.UserStateChangeID, function(receiveMsg){	
			gameData.SetUserData(receiveMsg.User)
			gameLayer.SetUserData(receiveMsg.User)
		})*/
		//用户离开
		networkQueue.RegMsgHook(BClass.Game, Game.UserLeaveID, function(receiveMsg){
	
		})
		//游戏结束
		networkQueue.RegMsgHook(BClass.Game, Game.UserLeaveID, function(receiveMsg){
			gameLayer.GameEnd()
		})
	
		/*// [訊息] 遊戲初始時所需資訊 Server to Client -> JXRY_SettingID = 10001
		message JXRY_MSG_Setting {
			required int32 PayLineMode = 1;                  // 賠付線類型 (0.非全線, 1.全線)
			required int32 TotalPayLine = 2;                 // 總共多少賠付線(非全線讀SlotPayLine表，全線賠付為定值)
			repeated int32 BetCount = 3;                     // 一次下注的數量
			repeated int32 BigWinStep = 4;                   // BigWin各階段演出條件
			optional int32 RowCounts = 5;                    // 顯示結算的行數
			repeated JXRY_ReelSetting ReelSetting = 6;        // 動態輪軸
			repeated JXRY_SymbolPayTable SymbolPayTable = 7;  // 符號倍率設定
			repeated JXRY_PayLine PayLines = 8;               // 所有賠線
		};
			
		// 輪軸表演設置
		message JXRY_ReelSetting {
			required int32 RealID = 1;        // 輪軸編號
			repeated JXRY_Symbol Symbols = 2;  // 該輪軸群組的符號
		};
		
		// 符號賠率設定
		message JXRY_SymbolPayTable {
			required JXRY_Symbol Symbol = 1;  // Symbol
			required int32 Count = 2;        // 連續幾個Symbol
			required int32 Rate = 3;         // 該項Symbol倍率
		}

		// 賠線資訊
		message JXRY_PayLine {
			required int32 PayLineID = 1;             // 賠線ID
			repeated JXRY_ReelPosition Positions = 2;  // 賠線位置 [{Reel: 1, Row: 2},{Reel: 2, Row: 2},{Reel: 3, Row: 2},{Reel: 4, Row: 2},{Reel: 5, Row: 2}]
		}
		
		// 符號
		message JXRY_Symbol {
			required int32 SymbolID = 1;     // 符號ID
			required string SymbolName = 2;  // 符號Name
		};
		*/
		networkQueue.RegMsgHook(BClass.Game, Game_JXRY.JXRY_SettingID, function(receiveMsg){		
			gameData.SetSetting(receiveMsg)
			gameLayer.SetSetting(receiveMsg)
		} , groupName);
	
		/*// [訊息] 下注結果 Server to Client -> JXRY_BetStatusID = 10004
			message JXRY_MSG_BetStatus {
				required int32 Ret = 1;  // 下注狀態 0: 下注成功, -1: 用戶金額不足, -2: 下注的類型未找到, -3: 莊家不能下注, -4: 此類下注已達到上限, -5: 非下注階段, -6: 用戶金額小於下注限制
				required int64 Money = 2;  // 下注金額
			}
		*/
		networkQueue.RegMsgHook(BClass.Game, Game_JXRY.JXRY_BetStatusID, function(receiveMsg){	
			gameLayer.SetBetRet(receiveMsg)	
			if(receiveMsg.Ret == 0 )
			{
			
			} 
			else if( receiveMsg.Ret == -1 )
			{
				gameLayer.ShowMessage("金币不足")
			} 
			else if( receiveMsg.Ret == -2 )
			{
				gameLayer.ShowMessage("下注类型错误")
			} 
			else if( receiveMsg.Ret == -3 )
			{
				gameLayer.ShowMessage("庄家不能下注")
			} 
			else if( receiveMsg.Ret == -4 )
			{
				gameLayer.ShowMessage("总注数超过上限")
			} 
			else if( receiveMsg.Ret == -5 )
			{
				gameLayer.ShowMessage("非下注階段")
			} 
			else if( receiveMsg.Ret == -6 )
			{
				let MinCarryingScore = string.format("%.2f", gameData.MinCarryMoney * 0.01)
				/*if G.GetRunGameMinCarryingScore ~= nil then
					if G.GetRunGameMinCarryingScore() ~= nil then
						MinCarryingScore = G.GetRunGameMinCarryingScore()
					end
				end*/
				gameLayer.ShowMessage("携带金币少于" + MinCarryingScore + "无法下注喔!您可以前往充值后再来")
			}		
		} , groupName);
		/*// [訊息] 遊戲結果 (轉出內容，中獎項目，中獎金額) Server to Client -> JXRY_GameResultID = 10005
		message JXRY_MSG_GameResult {
			required int64 BetMoney = 1;             // 下注金額
			required int64 WinMoney = 2;             // 贏得獎金
			required int64 FinalMoney = 3;           // 最終身上金額
			required int64 JackpotMoney = 4;         // 贏得的Jackpot金額
			repeated JXRY_ReelResult ReelResult = 5;  // 輪軸結果
			repeated JXRY_PayGroup PayGroups = 6;     // 中獎內容，賠付線結果(派彩線)
		}
		
		// 輪軸結果
		message JXRY_ReelResult {
			required JXRY_ReelPosition Position = 1;  // 輪軸位置
			required JXRY_Symbol Symbols = 2;         // 該輪軸群組的符號
			required bool Blink = 3;                 // 是否亮符號
		};
		
		// 中獎內容，賠付線結果(派彩線)
		message JXRY_PayGroup {
			repeated JXRY_PayLine PayLines = 1;  // 中獎的賠線     [{Reel:1,Row:2},{Reel:2,Row:2},{Reel:3,Row:2}] , 給多少畫多少線
			required int64 WinMoney = 2;        // 這條連線中獎金額
		}
		
		// 賠線資訊
		message JXRY_PayLine {
			required int32 PayLineID = 1;             // 賠線ID
			repeated JXRY_ReelPosition Positions = 2;  // 賠線位置 [{Reel: 1, Row: 2},{Reel: 2, Row: 2},{Reel: 3, Row: 2},{Reel: 4, Row: 2},{Reel: 5, Row: 2}]
		}
		
		// 位置資訊
		message JXRY_ReelPosition {
			required int32 Reel = 1;  // 直的軸
			required int32 Row = 2;   // 橫的列
		}
		
		// 符號
		message JXRY_Symbol {
			required int32 SymbolID = 1;     // 符號ID
			required string SymbolName = 2;  // 符號Name
		};
		*/
		networkQueue.RegMsgHook(BClass.Game, Game_JXRY.JXRY_GameResultID, function(receiveMsg){
			gameLayer.SetGameResult(receiveMsg)
		} , groupName);
	
		/*// [訊息] 遊戲狀態 Server to Client -> JXRY_StatusID = 10002
			message JXRY_MSG_Status {
				required int32 State = 1;  // 狀態
			}
		*/
		networkQueue.RegMsgHook(BClass.Game, Game_JXRY.JXRY_StatusID, function(receiveMsg){	
			gameData.SetState(receiveMsg.State)	
			gameLayer.SetState(receiveMsg.State)
		} , groupName);
	
		/* // [訊息] 玩家贏得 BonusGame 並取得BonusGame紀錄 Server to Client ->  JXRY_BonusGameID = 10006
			message JXRY_MSG_BonusGame {
				repeated JXRY_BonusGameRecord Records = 1;  // 目前開獎順序 [{ID:1, Location:8, Money: 100}, {ID:2, Location:5, Money: 100}, {ID:3, Location:6, Money: 100},{ID:4, Location:0, Money: 100}]
				required int32 Count = 2;                  // 總共可翻次數，中獎進入BonusGame次數
				required int64 WinMoney = 3;               // 中獎金額
			}
			// BonusGame 選擇位置紀錄 {ID: 1, Location: 0, Money: 100}
			message JXRY_BonusGameRecord {
				required int32 ID = 1;        // 順序 1 開始，由小至大
				required int32 Location = 2;  // 位置 0: 未翻過, [1-12]:位置
				required string Money = 3;    // 中獎金額
			}
		*/
		networkQueue.RegMsgHook(BClass.Game, Game_JXRY.JXRY_BonusGameID, function(receiveMsg){
			gameData.SetBonusGame(receiveMsg)
			gameLayer.SetUserRecover()
		} , groupName);
	
		/*// [訊息] Jackpot資訊 Server to Client -> JXRY_JackpotPoolID = 10003
			message JXRY_MSG_JackpotPool {
				required int64 Money = 1;  // 水池金額
			}
		*/
		networkQueue.RegMsgHook(BClass.Game, Game_JXRY.JXRY_JackpotPoolID, function(receiveMsg){		
			gameLayer.SetJackpotPool(receiveMsg.Money)
		} , groupName);
		
		/*// [訊息] 玩家選則BonusGame -> JXRY_ActionPickRetID = 12004
			message JXRY_MSG_PickRet {
				required JXRY_BonusGameRecord Record = 1;  // 選擇內容
			}
			
			// BonusGame 選擇位置紀錄 {ID: 1, Location: 0, Money: 100}
			message JXRY_BonusGameRecord {
				required int32 ID = 1;        // 順序 1 開始，由小至大
				required int32 Location = 2;  // 位置 0: 未翻過, [1-12]:位置
				required string Money = 3;    // 中獎金額
			}
		*/
		networkQueue.RegMsgHook(BClass.Game, Game_JXRY.JXRY_ActionPickRetID, function(receiveMsg){	
			gameLayer.SetBounsPickResult(receiveMsg)
		} , groupName);
		
		/*
			//Slot 歷程紀錄結果
			message Slot_SendHistoryData {
				required int32 UserID=1; // 回傳玩家ID
				required int32 GameID=2; // 回傳遊戲ID
				required int32 PageCount=3; // 回傳全部筆數
				repeated Slot_SendHistoryLog SendHistoryLog=4; //歷程紀錄
			}
			//Slot 傳送歷程紀錄
			message Slot_SendHistoryLog {
				required int32 RowNum = 1;		//流水號
				required int32 CreateTime = 2;	//訂單時間
				required int64 OrderID = 3;		//訂單編號
				required int64 BetMoney = 4;	//投注金額
				required int64 Profit = 5;		//盈利/輸贏(計算方式:結算分數-原始分數)
			}
		*/
		networkQueue.RegMsgHook(BClass.Game, Game_JXRY.JXRY_LoadHistoryRetID, function(receiveMsg){	
			gameLayer.SetHistoryFindData(receiveMsg)
		} , groupName);
		
		
		/*			
			// 遊戲排列帶
			message JXRY_MSG_ReelSetting {
				repeated JXRY_GameReels GameReels = 1;  // 所有MainGameq排列帶
			}
		*/
		networkQueue.RegMsgHook(BClass.Game, Game_JXRY.JXRY_GameReelSettingID, function(receiveMsg)
		{
			gameData.SetGameReelSetting(receiveMsg)
		} , groupName);
	},

	/*// [訊息] 玩家Spin Client to Server -> JXRY_ActionSpinID = 11001
		message JXRY_MSG_Spin {
			required int64 Money = 1;  // 下注金額
		}
	*/
	SendGameStart(BetMoney)
	{
		let param = []
		param.Money = BetMoney
			
	    networkQueue.SendMsg(BClass.Game, Game_JXRY.JXRY_ActionSpinID, param)
	},

	/*// [訊息] 玩家選則BonusGame Client to Server -> JXRY_ActionPickID = 12003
		message JXRY_MSG_Pick {
			required JXRY_BonusGameRecord Record = 1;  // 選擇內容
		}
	*/
	SendBonusGameIcon(index,location,rewareValue)
	{
		let param = []
		param.Record = []
		param.Record.ID = index
		param.Record.Location = location
		param.Record.RewareValue = rewareValue
		
	    networkQueue.SendMsg(BClass.Game, Game_JXRY.JXRY_ActionPickID, param)
	},

	/*// Slot 讀取歷程紀錄
		message Slot_LoadHistoryData {
			required int32 UserID = 1;      // 玩家ID
			required int32 GameID = 2;      // 遊戲ID
			required string StartTime = 3;  // ServerID
			required string EndTime = 4;    // 原始分數
			optional int32 PageIndex = 5;   // 第幾頁
			optional int32 PageSize = 6;    // 一頁幾筆
		}
	*/
	
	SendFindHistory(StartTime,EndTime,PageIndex,PageSize)
	{
		let param = []
		param.UserID = gameData.User.UserID
		param.GameID = G.GetRunGameData().GameID
		param.StartTime = StartTime
		param.EndTime = EndTime
		param.PageIndex = PageIndex
		param.PageSize = PageSize
			
	    networkQueue.SendMsg(BClass.Game, Game_JXRY.JXRY_LoadHistoryID, param)
	},

	/* //查詢奬池資訊
		
	*/
	SendReadJackpotPoolID()
	{
	    networkQueue.SendMsg(BClass.Game, Game_JXRY.JXRY_ReadJackpotPoolID, null)
	},
};

module.exports = GameModel
