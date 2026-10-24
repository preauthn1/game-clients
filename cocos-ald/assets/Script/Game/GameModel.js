var G = require( "Global")
var GameG = require( "GameGlobal")
var gameLayer = null
var gameData = null

let networkQueue = require("NetworkQueue");
let Game_ALD = require("Game_ALD")
let BClass = require("BClass")
let Game = require("Game")
let GameRoom = require("GameRoom")

var groupName = null

/** 用途: 接收和傳送封包 */
var GameModel = {
	extends: cc.Component,
	/** 初始化 */
	Init(){	
		let self = this
		gameLayer = require("GameLayer")
		gameData = require("GameData")
		groupName = GameG.GetGameName()
		
		//用户进入桌子消息
		networkQueue.RegMsgHook(BClass.Game, Game.UserEnterID, function(receiveMsg){	
			self.SendGameReady()
			gameData.SetUserData(receiveMsg.User)
			gameLayer.SetUserData(receiveMsg.User)
		}, groupName);
	
		/*用户状态改变
		networkQueue.RegMsgHook(BClass.Game, Game.UserStateChangeID, function(receiveMsg){		
			gameData.SetUserData(receiveMsg.User)
			gameLayer.SetUserData(receiveMsg.User)
		}, groupName);*/
		//用户离开
		networkQueue.RegMsgHook(BClass.Game, Game.UserLeaveID, function(receiveMsg){
		
		}, groupName);
	//遊戲開始
		networkQueue.RegMsgHook(BClass.Game, Game.GameStartID, function(receiveMsg){
		
		} , groupName);
	//游戏结束
        networkQueue.RegMsgHook(BClass.Game, Game.GameEndID, function(receiveMsg){
			gameLayer.GameEnd()
		}, groupName);
	
	/*// [訊息] 遊戲初始時所需資訊 Server to Client -> Slot_SettingID = 20001
		message ALD_MSG_Setting {
			required int32 PayLineMode = 1;                   // 賠付線類型 (0.非全線, 1.全線)
			required int32 TotalPayLine = 2;                  // 總共多少賠付線(非全線讀SlotPayLine表，全線賠付為定值)
			repeated int32 BetMoneys = 3;                      // 一次下注的數量
			repeated int32 BigWinStep = 4;                    // BigWin各階段演出條件
			optional int32 RowCounts = 5;                     // 顯示結算的行數
			repeated Slot_ReelSetting ReelSetting = 6;        // 動態輪軸
			repeated Slot_SymbolPayTable SymbolPayTable = 7;  // 符號倍率設定
			repeated Slot_PayLine PayLines = 8;               // 所有賠線
			required int64 MinCarryMoney = 9;                 // 最小攜帶金額
			optional string PayLineDesc = 10;                 // 派彩線說明文字
		};
	*/
		networkQueue.RegMsgHook(BClass.Game, Game_ALD.ALD_SettingID, function(receiveMsg){		
			gameData.SetSetting(receiveMsg)
			gameLayer.SetSetting(receiveMsg)
			
			gameData.SetUserRecover()
			gameLayer.SetUserRecover()
		} , groupName);
	
	/*// [訊息] 下注結果 Server to Client -> Slot_BetStatusID = 20003
		message Slot_MSG_BetStatus {
			required int32 Ret = 1;  // 下注狀態 0: 下注成功, -1: 用戶金額不足, -2: 下注的類型未找到, -3: 莊家不能下注, -4: 此類下注已達到上限, -5: 非下注階段, -6: 用戶金額小於下注限制
			required int64 Money = 2;  // 下注金額
		}
	*/
		networkQueue.RegMsgHook(BClass.Game, Game_ALD.ALD_BetStatusID, function(receiveMsg){	
			gameLayer.SetBetRet(receiveMsg)	
			if(receiveMsg.Ret == 0 ){
			
			} 
			else if( receiveMsg.Ret == -1 ){
				gameLayer.ShowMessage("金币不足")
			} 
			else if( receiveMsg.Ret == -2 ){
				gameLayer.ShowMessage("下注类型错误")
			} 
			else if( receiveMsg.Ret == -3 ){
				gameLayer.ShowMessage("庄家不能下注")
			} 
			else if( receiveMsg.Ret == -4 ){
				gameLayer.ShowMessage("总注数超过上限")
			} 
			else if( receiveMsg.Ret == -5 ){
				gameLayer.ShowMessage("非下注階段")
			} 
			else if( receiveMsg.Ret == -6 ){
				let MinCarryingScore = GameG.FormatNum(gameData.MinCarryMoney)
			/*if G.GetRunGameMinCarryingScore ~= nil then
				if G.GetRunGameMinCarryingScore() ~= nil then
					MinCarryingScore = G.GetRunGameMinCarryingScore()
				end
			end*/
				gameLayer.ShowMessage("携带金币少于" + MinCarryingScore + "无法下注喔!您可以前往充值后再来")
			}		
		} , groupName);
	/*// [訊息] 遊戲結果 (轉出內容，中獎項目，中獎金額) Server to Client -> Slot_GameResultID = 20004
		message ALD_MSG_GameResult {
			required int64 BetMoney = 1;             // 下注金額
			required int64 WinMoney = 2;             // 贏得獎金
			required int64 FinalMoney = 3;           // 最終身上金額
			repeated ALD_GameResult SlotResult = 4;  // 輪軸結果
		}
		
		// 阿拉丁遊戲結果 會附帶一組第一次轉完畫面，與拓展後畫面加結算，
		message ALD_GameResult {
			repeated Slot_ReelResult InitResult = 1;      // 第一次轉完畫面
			required bool IsRespin = 2;                   // 是否為重轉
			required bool IsExpand = 3;                   // 是否表演拓展
			required int32 ExpandReel = 4;                // 若有拓展，是第幾軸
			required string ExpandOrder = 5;              // 若有拓展，順序為 ASC: 上到下，DESC: 下到上
			required Slot_MSG_GameResult SlotResult = 6;  // 拓展後畫面與結算
		}
		
		// [訊息] 遊戲結果 (轉出內容，中獎項目，中獎金額) Server to Client -> Slot_GameResultID = 20004
		message Slot_MSG_GameResult {
			required int64 BetMoney = 1;              // 下注金額
			required int64 WinMoney = 2;              // 贏得獎金
			required int64 FinalMoney = 3;            // 最終身上金額
			optional int64 JackpotMoney = 4;          // 贏得的Jackpot金額
			repeated Slot_ReelResult ReelResult = 5;  // 輪軸結果
			repeated Slot_PayGroup PayGroups = 6;     // 中獎內容，賠付線結果(派彩線)
		}
		
		// 輪軸結果
		message Slot_ReelResult {
			required Slot_ReelPosition Position = 1;  // 輪軸位置
			required Slot_Symbol Symbol = 2;          // 該輪軸群組的符號
			required bool Blink = 3;                  // 是否亮符號
		};
		
		// 中獎內容，賠付線結果(派彩線)
		message Slot_PayGroup {
			required Slot_PayLine PayLines = 1;  // 中獎的賠線     [{Reel:1,Row:2},{Reel:2,Row:2},{Reel:3,Row:2}] , 給多少畫多少線
			required int64 WinMoney = 2;         // 這條連線中獎金額
			optional string LinkType = 3;        // 連線方式. left: 由左至右連線，right: 由右至左連線
		}
		
		// 位置資訊
		message Slot_ReelPosition {
			required int32 Reel = 1;  // 直的軸
			required int32 Row = 2;   // 橫的列
		}
		
		// 符號
		message Slot_Symbol {
			required int32 SymbolID = 1;     // 符號ID
			required string SymbolName = 2;  // 符號Name
		};
	*/
		networkQueue.RegMsgHook(BClass.Game, Game_ALD.ALD_GameResultID, function(receiveMsg){
		// receiveMsg = gameReceive.TGW_GameResultID(receiveMsg)
			gameData.SetGameResult(receiveMsg)
			gameLayer.SetGameResult(gameData.GetGameResult())
		} , groupName);
	
	/*// [訊息] 遊戲狀態 Server to Client -> Slot_StatusID = 20002
		message Slot_MSG_Status {
			required int32 State = 1;  // 遊戲狀態 0: 玩家可下注, 1: 開獎, 2: 開獎動畫, 3: 結算動畫, 4: 等待遊戲開始
		}
	*/
		networkQueue.RegMsgHook(BClass.Game, Game_ALD.ALD_StatusID, function(receiveMsg){	
			gameData.SetState(receiveMsg.State)	
			gameLayer.SetState(receiveMsg.State)
		} , groupName);
	
	/*// 讀取歷程紀錄
		message Slot_LoadHistoryData {
			required int32 UserID = 1;      // 玩家ID
			required int32 GameID = 2;      // 遊戲ID
			required string StartTime = 3;  // ServerID
			required string EndTime = 4;    // 原始分數
			optional int32 PageIndex = 5;   // 第幾頁
			optional int32 PageSize = 6;    // 一頁幾筆
		}
	*/
		networkQueue.RegMsgHook(BClass.Game, Game_ALD.ALD_LoadHistoryRetID, function(receiveMsg){	
			gameLayer.SetHistoryFindData(receiveMsg)
		} , groupName);
	},

//=== 客户端发送帧数据 ===
	SendGameReady(){
		networkQueue.SendMsg(BClass.GameRoom, GameRoom.GameReadyID, null)
	},

	/** 開始下注 */
	SendGameStart(BetMoney){
		let param = {}
		param.Money = BetMoney
			
	    networkQueue.SendMsg(BClass.Game, Game_ALD.ALD_ActionSpinID, param)
	},

	/** 查詢歷史紀錄(UIHistory) */
	SendFindHistory(StartTime,EndTime,PageIndex,PageSize){
		let param = {}
		param.UserID = gameData.User.UserID
		param.GameID = GameG.GetGameId()
		param.StartTime = StartTime
		param.EndTime = EndTime
		param.PageIndex = PageIndex
		param.PageSize = PageSize
			
	    networkQueue.SendMsg(BClass.Game, Game_ALD.ALD_LoadHistoryID, param)
	},


};

module.exports = GameModel
