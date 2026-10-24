var GameConfig =  require("GameConfig")
var GameG = require("GameGlobal")

let networkQueue = require("NetworkQueue");
let Game_DFDC = require("Game_DFDC")
let BClass = require("BClass")
let Game = require("Game")
let GameRoom = require("GameRoom")

/** 用途: 接收和傳送封包 */
var GameModel = {
    extends: cc.Component,

    Init: function()
    {
        let gameLayer = require("GameLayer")
        let gameData = require("GameData")
        let groupName = GameG.GetGameName()
        let gameReceive = require("GameReceive")

        //用户进入桌子消息
        networkQueue.RegMsgHook(BClass.Game, Game.UserEnterID, function(receiveMsg)
        {
            var UserID = GameConfig.getUserID();
            if (receiveMsg.User.UserID == UserID && receiveMsg.User.StateValue == 2) {
                //print("发送准备请求")
                networkQueue.SendMsg(BClass.GameRoom, GameRoom.GameReadyID)
            }

            gameData.SetUserData(receiveMsg.User)
            gameLayer.SetUserData(receiveMsg.User)        
        } , groupName),
        
        //用户状态改变
        networkQueue.RegMsgHook(BClass.Game, Game.UserStateChangeID, function(receiveMsg)
        {
            gameData.SetUserStateChange(receiveMsg.User)
        }, groupName),

        //用户离开
        networkQueue.RegMsgHook(BClass.Game, Game.UserLeaveID, function(receiveMsg)
        {

        }, groupName),

        //游戏结束
        networkQueue.RegMsgHook(BClass.Game, Game.GameEndID, function(receiveMsg)
        {
            gameLayer.GameEnd()
        }, groupName),
        
        /*
            设置相关 S2C
            message DFDC_Setting{
                repeated int32 BetCount=1;//一次下注的数量
                required int32 BetMoney=2;//一次下注的钱
                repeated DFDC_ReelSetting ReelSetting=3;		//動態輪軸
                optional int32 RowCounts=4;	//顯示結算的行數
                required int32 TotalPayLine=5;	//總共多少賠付線
                repeated int32 BigWinStep=6; //BigWin各階段演出條件
            };
            //輪軸的圖片順序設置
            message DFDC_ReelSetting {
                required int32 RealID=1;	//輪軸編號
                repeated DFDC_SymbolGroup SymbolGroup=2;	//該輪軸群組的符號
            };
            //該輪軸群組的符號
            message DFDC_SymbolGroup {
                required int32 SymbolID=1;	//符號
                required string SymbolName=2;	//符號Name(client圖片使用) 符號類型(符號可組合，e.g. w1,w2,w3代表w1+w2+w3的組合，並以w1為主要辨識符號),s = scatter,w1~wN = wild (wj = 普通=> e.g. 女王 ; w2 = 特殊=> e.g. 法老),p1~pN 一般的符號,b1~bN bonus的符號
            };
            
        */
        networkQueue.RegMsgHook(BClass.Game, Game_DFDC.DFDCSettingID, function(receiveMsg)
        {	
            //receiveMsg = gameReceive.DFDCSettingID(receiveMsg)
            gameData.SetSetting(receiveMsg)
            gameLayer.SetSetting(receiveMsg)
            
            //local data = gameReceive.DFDC_GodenSymbolList()
            //gameLayer.SetGoldSymbol(data)
        } , groupName);

        /*
            S2C下注結果
            //下注回覆
            message DFDC_BetRet{
                required int32 Ret = 1;	//0下注成功，-1用户金额不足，-2下注的类型未找到，-3庄家不能下注，-4此类下注已达到上限，-5非下注階段，-6用户金额小於下注限制
                required int64 Money=2;//用户的下注金額
            }
        */
        networkQueue.RegMsgHook(BClass.Game, Game_DFDC.DFDCBetRetID, function(receiveMsg)
        {
            //receiveMsg = gameReceive.DFDCBetRetID()
            gameLayer.SetBetRet(receiveMsg)
            if (receiveMsg.Ret == 0) {
                
            }
            else if (receiveMsg.Ret == -1) {
                gameLayer.ShowMessage("金币不足")
                gameLayer.SetCloseAutoSpin()
            }
            else if (receiveMsg.Ret == -2) {
                gameLayer.ShowMessage("下注类型错误")
            }
            else if (receiveMsg.Ret == -3) {
                gameLayer.ShowMessage("庄家不能下注")
            }
            else if (receiveMsg.Ret == -4) {
                gameLayer.ShowMessage("总注数超过上限")
            }
            else if (receiveMsg.Ret == -5) {
                gameLayer.ShowMessage("非下注階段")
            }
            else if (receiveMsg.Ret == -6) {
                let MinCarryingScore = 20
                /*if G.GetRunGameMinCarryingScore ~= null then
                    if G.GetRunGameMinCarryingScore() ~= null then
                        MinCarryingScore = G.GetRunGameMinCarryingScore()
                    end
                end*/
                gameLayer.ShowMessage(GameG.GetLocalizedString("前往充值后再来").replace("####", MinCarryingScore))
            }
            else if (receiveMsg.Ret == -7) {
                gameLayer.ShowMessage("非正常下注额")
            }
            
            
            //receiveMsg = gameReceive.DFDCGameResult()
            //gameLayer.SetGameResult(receiveMsg)	
        } , groupName);
        /*
            遊戲結果S2C
            //游戏輪軸结果
            message DFDC_GameResultReel{
                repeated int32 SymbolID=1;//結果起始號碼
                repeated DFDC_PayLineGroup PayLineGroup=2;	//	賠付線
                optional int32 WinMoney=3;	//結算金額
            };

            //賠付線結果(派彩線)
            message DFDC_PayLineGroup{
                required int32 PayLineID=1;	//賠付線號碼
                repeated DFDC_PayLineDetail PayLineDetail=2;
                optional int64 WinMoney = 3;	//賠付線金額
            };

            //連線與得獎符號
            message DFDC_PayLineDetail {
                required int32 ReelID = 1;	//第幾個輪軸
                required int32 SymbolID = 2;
                required bool Blink = 3;	//是否亮符號
                required bool Line = 4;		//是否畫線
                optional int32 BetNumber = 5;	//是否乘倍數目
                optional int64 BetMoney = 6;	//是否乘倍金額
            };
        */

        networkQueue.RegMsgHook(BClass.Game, Game_DFDC.DFDCGameResult, function(receiveMsg)
        {
            //receiveMsg = gameReceive.DFDCGameResult()
            //gameData.SetBonusGame(gameReceive.DFDC_BonusGame())
            gameLayer.SetGameResult(receiveMsg)
        } , groupName);

        /*
            遊戲狀態S2C
            //遊戲狀態
            message DFDC_GameStatus {
                required int32 State=1;//状态 0.下注状态 1.开奖状态 2.开奖动画 3.结算动画 4.等待游戏开始
            }
        */
        networkQueue.RegMsgHook(BClass.Game, Game_DFDC.DFDCStateID, function(receiveMsg)
        {
            gameData.SetState(receiveMsg.State)	
            gameLayer.SetState(receiveMsg.State)
        } , groupName);

        /*
            遊戲要付費或免費
            //遊戲要付費或免費
            message DFDC_FreeOrPayMsg{
                required int32 FreeCount=1;		//免費次數(0.付費)
                repeated DFDC_ReelSetting ReelSetting=2; //動態輪軸
            };
        */
        networkQueue.RegMsgHook(BClass.Game, Game_DFDC.DFDCFreeOrPayID, function(receiveMsg)
        {
            //print("FreeCount",receiveMsg.FreeCount)	
            gameData.SetSpinFreeOrPay(receiveMsg)		
        } , groupName);

        /* 
            Bonus Game
            //多財多福 Bonus Game
            message DFDC_BonusGame {
                repeated DFDC_BonusGameDetail BonusDetail=1;	//此組數為最終總共開幾組
                required int64 Money = 2;	//Bonus Game結果總金額
            }

            //多財多福 Bonus Game內容
            message DFDC_BonusGameDetail {
                required int32 Id = 1;		//流水號
                required int32 Place = 2;	//在哪個位置(起始值1 未開啟0)
                required int32 Icon = 3;	//圖片名稱
            }
        */
        networkQueue.RegMsgHook(BClass.Game, Game_DFDC.DFDCBonusGameID, function(receiveMsg)
        {	
            gameData.SetBonusGame(receiveMsg)
        } , groupName);

        /*[
            S2C 更新Client Jackpot 值	
            //S2C更新Jackpot值
            message DFDC_JackpotPoolS2CMsg{
                repeated DFDC_JackpotPoolDetail JackpotPoolID = 1;
            }
            //Jackpot水池內容
            message DFDC_JackpotPoolDetail {
                required int32 JackpotID=1;
                required int64 Syspool = 2;	//系統獎金水池
                optional string Level = 3;	//圖片
            }
        */
        networkQueue.RegMsgHook(BClass.Game, Game_DFDC.DFDCJackpotPoolS2CID, function(receiveMsg)
        {
            gameLayer.SetJackpotPool(receiveMsg.JackpotPoolID)
        } , groupName);

        /*
            多財多福黃金符號
            //多財多福黃金符號
            message DFDC_GoldenSymbolList {
                required DFDC_GoldenSymbolDetail GodenDetail=1;
            }

            //多財多福黃金符號內容
            message DFDC_GoldenSymbolDetail {
                required int32 Symbols = 1;
                required int32 Credits = 2;
            }
        */
        networkQueue.RegMsgHook(BClass.Game, Game_DFDC.DFDCGoldenSymbolID, function(receiveMsg)
        {
            //receiveMsg = gameReceive.DFDC_GoldenSymbolList()
            gameData.SetGoldenDetail(receiveMsg)
            gameLayer.SetGoldenDetail(receiveMsg)
        } , groupName);

        
        /*
            多財多福 玩家殘餘資料
            //多財多福 玩家殘餘資料
            message DFDC_UserRecover {
                required int64 WinMoey = 1;		//贏多少錢
                required int64 BetMoney = 2;	//玩家下注金額
                required int32 GoldenSymbol = 3; //下注黃金符號
            }
        */
        networkQueue.RegMsgHook(BClass.Game, Game_DFDC.DFDCUserRecoverID, function(receiveMsg)
        {
            gameLayer.SetCurrentChip(receiveMsg.BetMoney)
            gameLayer.SetCurrentGoldSymbol(receiveMsg.GoldenSymbol)
            gameData.SetUserRecover(receiveMsg)
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
        networkQueue.RegMsgHook(BClass.Game, Game_DFDC.DFDC_LoadHistoryRetID, function(receiveMsg)
        {
            gameLayer.SetHistoryFindData(receiveMsg)
        } , groupName);
    },

    //=== 客户端发送帧数据 ===

    /*
        遊戲開始C2S
        message DFDC_StartBet{
            required int32 Money=1;
            required int32 GoldenSymbol=2;
        }
    */
    SendGameStart: function(BetMoney,GoldenSymbol)
    {
        let param = {}
        param.Money = BetMoney
        param.GoldenSymbol = GoldenSymbol
            
        networkQueue.SendMsg(BClass.Game, Game_DFDC.DFDCGameStartID, param)
    },

    /*
        玩家Bonus Game選擇 (DFDC_BonusGameDetail)
        //多財多福 Bonus Game內容
        message DFDC_BonusGameDetail {
            required int32 Id = 1;		//流水號
            required int32 Place = 2;	//在哪個位置(起始值1 未開啟0)
            required int32 Icon = 3;	//圖片名稱
        }
    */
    SendBonusGameIcon: function(index,Place,Icon)
    {
        let param = {}
        param.Id = index
        param.Place = Place
        param.Icon = Icon
            
        networkQueue.SendMsg(BClass.Game, Game_DFDC.DFDCBonusGameIconID, param)
    },

    /*
        //多財多福 索取遊戲歷程
        message DFDC_GetGameLog {
            required string StartTime = 1;		//開始時間
            required string EndTime = 2;		//結束時間
            required int32 PageIndex  = 3; 		//第幾頁
            required int32 PageSize   = 4; 		//一頁幾筆
        }
    */
    SendFindHistory: function(StartTime,EndTime,PageIndex,PageSize)
    {
        let param = {}
        param.StartTime = StartTime
        param.EndTime = EndTime
        param.PageIndex = PageIndex
        param.PageSize = PageSize
            
        networkQueue.SendMsg(BClass.Game, Game_DFDC.DFDC_LoadHistoryID, param)
    }
};

module.exports = GameModel;
