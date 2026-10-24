var GameG = null
var gameLayer = null
var gameData = null

// ==== 接收封包內容改為單機模式 ====
module.exports = class KGameModel
{
	constructor()
	{
		GameG = require("GameGlobal")
		gameData = require("GameData")
		gameLayer = require("GameLayer")
	}
	
	GameEnter()
	{
		// 載入完圖片才開始遊戲
		GameG.InitAndLoadSprite(function()
		{
			// UserStateChange - 6
			var msgUserStateChange = []
			msgUserStateChange.User = []
            msgUserStateChange.User.UserID = 15267529
            msgUserStateChange.User.NickName = "来自火星"
            msgUserStateChange.User.Sex = 1
            msgUserStateChange.User.FaceID = 13
            msgUserStateChange.User.Score = 200000
            msgUserStateChange.User.WinCount = 0
            msgUserStateChange.User.LoseCount = 0
			msgUserStateChange.User.DrawCount = 0
            msgUserStateChange.User.StateValue = 1
            msgUserStateChange.User.TableNo = -1
            msgUserStateChange.User.SeatNo = -1
            msgUserStateChange.User.LastWinLose = 0
			gameData.SetUserData(msgUserStateChange.User)
			gameLayer.SetUserData(msgUserStateChange.User)	
			
			// UserEnter - 4
			var msgUserEnter = []
			msgUserEnter.User = []
            msgUserEnter.User.UserID = 15267529
            msgUserEnter.User.NickName = "来自火星"
            msgUserEnter.User.Sex = 1
            msgUserEnter.User.FaceID = 13
            msgUserEnter.User.Score = 200000
            msgUserEnter.User.WinCount = 0
            msgUserEnter.User.LoseCount = 0
			msgUserEnter.User.DrawCount = 0
            msgUserEnter.User.StateValue = 2
            msgUserEnter.User.TableNo = 0
            msgUserEnter.User.SeatNo = 0
            msgUserEnter.User.LastWinLose = 0
			gameData.SetUserData(msgUserEnter.User)
			gameLayer.SetUserData(msgUserEnter.User)
			  
			// 狀態 - 20002
			var msgStatus = []
			msgStatus.State = 4;			
			gameData.SetState(msgStatus.State)	
			gameLayer.SetState(msgStatus.State)
			
			// UserStateChange - 6
			msgUserStateChange = []
			msgUserStateChange.User = []
            msgUserStateChange.User.UserID = 15267529
            msgUserStateChange.User.NickName = "来自火星"
            msgUserStateChange.User.Sex = 1
            msgUserStateChange.User.FaceID = 13
            msgUserStateChange.User.Score = 200000
            msgUserStateChange.User.WinCount = 0
            msgUserStateChange.User.LoseCount = 0
			msgUserStateChange.User.DrawCount = 0
            msgUserStateChange.User.StateValue = 4
            msgUserStateChange.User.TableNo = 0
            msgUserStateChange.User.SeatNo = 0
            msgUserStateChange.User.LastWinLose = 0
			gameData.SetUserData(msgUserStateChange.User)
			gameLayer.SetUserData(msgUserStateChange.User)
			
			var SymbolsData = []
			SymbolsData[0] = new Symbol(10567, "p3")
			SymbolsData[1] = new Symbol(10568, "p1")
			SymbolsData[2] = new Symbol(10570, "p8")
			SymbolsData[3] = new Symbol(10572, "p6")
			SymbolsData[4] = new Symbol(10574, "p4")
			SymbolsData[5] = new Symbol(10575, "p3")
			SymbolsData[6] = new Symbol(10577, "p1")
			SymbolsData[7] = new Symbol(10569, "p9")
			SymbolsData[8] = new Symbol(10571, "p7")
			SymbolsData[9] = new Symbol(10573, "p5")
			SymbolsData[10] = new Symbol(10576, "p2")
			SymbolsData[11] = new Symbol(10578, "s1")
			
			// 排列帶 - 20010
			var data1 = []
			data1.Name = "MainGame(16)"
			data1.ConditionType = "betRate"
			data1.ConditionValue = "28"
			data1.ID = "16"
			data1.ReelSetting = new ReelSetting(1, SymbolsData)
			var msgGameReels = []
			msgGameReels.GameReels = {}
			msgGameReels.GameReels[0] = data1
			msgGameReels.GameReels[1] = data1
			msgGameReels.GameReels[2] = data1
			msgGameReels.GameReels[3] = data1
			msgGameReels.GameReels[4] = data1
			gameData.SetGameReelSetting(msgGameReels)
			
			// 設定 - 20001
			var msgSetting = []
			msgSetting.PayLineMode = 1
			msgSetting.TotalPayLine = 1024
			msgSetting.MinCarryMoney = 5000
			msgSetting.RowCounts = 3
			msgSetting.BetMoneys = [ 10, 20, 30, 50, 60, 100]
			msgSetting.BetRates = [ 28, 38, 58, 88 ]
			msgSetting.BigWinStep = [ 200, 500, 800, 1200 ]
			msgSetting.SymbolPayTable = []
			msgSetting.SymbolPayTable[0] = new SymbolPayTable(new Symbol(0, "p1"), 5, "chip", 100, "", "")
			msgSetting.SymbolPayTable[1] = new SymbolPayTable(new Symbol(0, "p1"), 4, "chip", 50, "", "")
			msgSetting.SymbolPayTable[2] = new SymbolPayTable(new Symbol(0, "p1"), 3, "chip", 30, "", "")
			msgSetting.SymbolPayTable[3] = new SymbolPayTable(new Symbol(0, "p1"), 2, "chip", 15, "", "")
			msgSetting.SymbolPayTable[4] = new SymbolPayTable(new Symbol(0, "p2"), 5, "chip", 100, "", "")
			msgSetting.SymbolPayTable[5] = new SymbolPayTable(new Symbol(0, "p2"), 4, "chip", 50, "", "")
			msgSetting.SymbolPayTable[6] = new SymbolPayTable(new Symbol(0, "p2"), 3, "chip", 30, "", "")
			msgSetting.SymbolPayTable[7] = new SymbolPayTable(new Symbol(0, "p2"), 2, "chip", 15, "", "")
			msgSetting.SymbolPayTable[8] = new SymbolPayTable(new Symbol(0, "p3"), 5, "chip", 70, "", "")
			msgSetting.SymbolPayTable[9] = new SymbolPayTable(new Symbol(0, "p3"), 4, "chip", 50, "", "")
			msgSetting.SymbolPayTable[10] = new SymbolPayTable(new Symbol(0, "p3"), 3, "chip", 30, "", "")
			msgSetting.SymbolPayTable[11] = new SymbolPayTable(new Symbol(0, "p4"), 5, "chip", 70, "", "")
			msgSetting.SymbolPayTable[12] = new SymbolPayTable(new Symbol(0, "p4"), 4, "chip", 50, "", "")
			msgSetting.SymbolPayTable[13] = new SymbolPayTable(new Symbol(0, "p4"), 3, "chip", 30, "", "")
			msgSetting.SymbolPayTable[14] = new SymbolPayTable(new Symbol(0, "p5"), 5, "chip", 70, "", "")
			msgSetting.SymbolPayTable[15] = new SymbolPayTable(new Symbol(0, "p5"), 4, "chip", 50, "", "")
			msgSetting.SymbolPayTable[16] = new SymbolPayTable(new Symbol(0, "p5"), 3, "chip", 30, "", "")
			msgSetting.SymbolPayTable[17] = new SymbolPayTable(new Symbol(0, "p6"), 5, "chip", 50, "", "")
			msgSetting.SymbolPayTable[18] = new SymbolPayTable(new Symbol(0, "p6"), 4, "chip", 30, "", "")
			msgSetting.SymbolPayTable[19] = new SymbolPayTable(new Symbol(0, "p6"), 3, "chip", 10, "", "")
			msgSetting.SymbolPayTable[20] = new SymbolPayTable(new Symbol(0, "p7"), 5, "chip", 50, "", "")
			msgSetting.SymbolPayTable[21] = new SymbolPayTable(new Symbol(0, "p7"), 4, "chip", 30, "", "")
			msgSetting.SymbolPayTable[22] = new SymbolPayTable(new Symbol(0, "p7"), 3, "chip", 10, "", "")
			msgSetting.SymbolPayTable[23] = new SymbolPayTable(new Symbol(0, "p8"), 5, "chip", 30, "", "")
			msgSetting.SymbolPayTable[24] = new SymbolPayTable(new Symbol(0, "p8"), 4, "chip", 20, "", "")
			msgSetting.SymbolPayTable[25] = new SymbolPayTable(new Symbol(0, "p8"), 3, "chip", 10, "", "")
			msgSetting.SymbolPayTable[26] = new SymbolPayTable(new Symbol(0, "p9"), 5, "chip", 30, "", "")
			msgSetting.SymbolPayTable[27] = new SymbolPayTable(new Symbol(0, "p9"), 4, "chip", 20, "", "")
			msgSetting.SymbolPayTable[28] = new SymbolPayTable(new Symbol(0, "p9"), 3, "chip", 10, "", "")
			msgSetting.SymbolPayTable[29] = new SymbolPayTable(new Symbol(0, "p10"), 5, "chip", 20, "", "")
			msgSetting.SymbolPayTable[30] = new SymbolPayTable(new Symbol(0, "p10"), 4, "chip", 10, "", "")
			msgSetting.SymbolPayTable[31] = new SymbolPayTable(new Symbol(0, "p10"), 3, "chip", 5, "", "")
			msgSetting.SymbolPayTable[32] = new SymbolPayTable(new Symbol(0, "p11"), 5, "chip", 20, "", "")
			msgSetting.SymbolPayTable[33] = new SymbolPayTable(new Symbol(0, "p11"), 4, "chip", 10, "", "")
			msgSetting.SymbolPayTable[34] = new SymbolPayTable(new Symbol(0, "p11"), 3, "chip", 5, "", "")
			msgSetting.SymbolPayTable[35] = new SymbolPayTable(new Symbol(0, "s1"), 5, "chip", 50, "", "")
			msgSetting.SymbolPayTable[36] = new SymbolPayTable(new Symbol(0, "s1"), 4, "chip", 10, "", "")
			msgSetting.SymbolPayTable[37] = new SymbolPayTable(new Symbol(0, "s1"), 3, "chip", 5, "", "")
			msgSetting.ReelSetting = []
			msgSetting.ReelSetting[0] = new ReelSetting(1, SymbolsData)
			msgSetting.ReelSetting[1] = new ReelSetting(2, SymbolsData)
			msgSetting.ReelSetting[2] = new ReelSetting(3, SymbolsData)
			msgSetting.ReelSetting[3] = new ReelSetting(4, SymbolsData)
			msgSetting.ReelSetting[4] = new ReelSetting(5, SymbolsData)
			msgSetting.FreeGames = []
			msgSetting.FreeGames.ID = "FreeGames"
			msgSetting.FreeGames.Count = 13
			msgSetting.FreeGames.ReelSetting = []
			msgSetting.FreeGames.ReelSetting[0] = new ReelSetting(1, SymbolsData)
			msgSetting.FreeGames.ReelSetting[1] = new ReelSetting(1, SymbolsData)
			msgSetting.FreeGames.ReelSetting[2] = new ReelSetting(1, SymbolsData)
			msgSetting.FreeGames.ReelSetting[3] = new ReelSetting(1, SymbolsData)
			msgSetting.FreeGames.ReelSetting[4] = new ReelSetting(1, SymbolsData)
			msgSetting.FreeGames.Data = '{"Condition":"betRate","ConditionValue":28,"key":"w2","multi":[2,3]}'
			msgSetting.PayLines = []
			msgSetting.UnitPrefix = []
			msgSetting.Descriptions = []
			msgSetting.Descriptions[0] = []
			msgSetting.Descriptions[0].Name = "w2"
			msgSetting.Descriptions[0].Desc = "只出现在免费游戏，可代表任何符号，除了分散符号及黄金背景，只出现在第2、3、4转轴。"
			msgSetting.Descriptions[0].Title = "百搭"
			msgSetting.Descriptions[1] = {}
			msgSetting.Descriptions[1].Name = "w3"
			msgSetting.Descriptions[1].Desc = "只出现在免费游戏，可代表任何符号，除了分散符号及黄金背景，只出现在第2、3、4转轴。"
			msgSetting.Descriptions[1].Title = "百搭"
			msgSetting.Descriptions[2] = {}
			msgSetting.Descriptions[2].Name = "w4"
			msgSetting.Descriptions[2].Desc = "只出现在免费游戏，可代表任何符号，除了分散符号及黄金背景，只出现在第2、3、4转轴。"
			msgSetting.Descriptions[2].Title = "百搭"
			msgSetting.Descriptions[3] = {}
			msgSetting.Descriptions[3].Name = "w1"
			msgSetting.Descriptions[3].Desc = "只出现在一般游戏，可代表任何符号，除了分散符号及黄金背景，只出现在第2、3、4转轴。"
			msgSetting.Descriptions[3].Title = "百搭"
			msgSetting.Descriptions[4] = {}
			msgSetting.Descriptions[4].Name = "s1"
			msgSetting.Descriptions[4].Desc = "出现3或更多时，会进入免费游戏特别奖。\n免费游戏中，当2、3、4、5个符號出现时。即分别赢得5、15、25、50个额外免费游戏。"
			msgSetting.Descriptions[4].Title = "分散符号"
			msgSetting.GoldBallSetting = []
			msgSetting.Jackpots = []
			msgSetting.Jackpots[0] = new JackpotInfo("10002320", "Grand", 21, true)
			msgSetting.Jackpots[1] = new JackpotInfo("502855", "Major", 22, true)
			msgSetting.Jackpots[2] = new JackpotInfo("29917", "Minor", 23, true)
			msgSetting.Jackpots[3] = new JackpotInfo("14420", "Mini", 24, true)
			msgSetting.Jackpots[4] = new JackpotInfo("106550", "GoldReel", 25, true)		
			gameData.SetSetting(msgSetting)
			gameLayer.SetSetting(msgSetting)
			
			// Jackpot - 22004
			var msgJackpot = []
			msgJackpot.Jackpots = []
			msgJackpot.Jackpots[0] = new JackpotInfo("10002320", "Grand", 21, true)
			msgJackpot.Jackpots[1] = new JackpotInfo("502855", "Major", 22, true)
			msgJackpot.Jackpots[2] = new JackpotInfo("29917", "Minor", 23, true)
			msgJackpot.Jackpots[3] = new JackpotInfo("14420", "Mini", 24, true)
			msgJackpot.Jackpots[4] = new JackpotInfo("106550", "GoldReel", 25, true)
			gameLayer.SetJackpotPool(msgJackpot.Jackpots)
			
			// 增加遊戲有次數 - 20011
			var msgIncreaseGameTimes = []
			msgIncreaseGameTimes.Count = 0
			msgIncreaseGameTimes.Type = "jackpot_game"
			msgIncreaseGameTimes.Data = "Init"
			msgIncreaseGameTimes.ID = 0
			gameData.SetIncreaseGameTimes(msgIncreaseGameTimes)
						
			// 狀態 - 20002
			var msgStatus = []
			msgStatus.State = 0;			
			gameData.SetState(msgStatus.State)
			gameLayer.SetState(msgStatus.State)			
		})
	}
	
	SendGameStart()
	{
		// 下注狀態 - 10004
		var msgBetStatus = []
		msgBetStatus.Money = 150
		msgBetStatus.Ret = 0
		gameLayer.SetBetRet(msgBetStatus)	
		
		// 狀態 - 10002
		var msgStatus = []
		msgStatus.State = 1		
		gameData.SetState(msgStatus.State)	
		gameLayer.SetState(msgStatus.State)
		
		// JPPool - 10003
		var msgJackpotPool = []
		msgJackpotPool.Money = []
		msgJackpotPool.Money[0] = 1030310
		gameLayer.SetJackpotPool(msgJackpotPool.Money)
		
		// 結果 - 10005
		let msgGameResult = new GameResult()
		msgGameResult.BetMoney = 6
		msgGameResult.WinMoney = 0
		msgGameResult.FinalMoney = 299580
		msgGameResult.JackpotMoney = 0
		msgGameResult.ReelResult[0]  = new ReelResult(1001, "p8", 1, 1, false)
		msgGameResult.ReelResult[1]  = new ReelResult(1002, "p8", 2, 1, false)
		msgGameResult.ReelResult[2]  = new ReelResult(1003, "p8", 3, 1, false)
		msgGameResult.ReelResult[3]  = new ReelResult(1004, "p8", 4, 1, false)
		msgGameResult.ReelResult[4]  = new ReelResult(1005, "p8", 5, 1, false)
		msgGameResult.ReelResult[5]  = new ReelResult(1006, "p8", 1, 2, false)
		msgGameResult.ReelResult[6]  = new ReelResult(1007, "p8", 2, 2, false)
		msgGameResult.ReelResult[7]  = new ReelResult(1008, "p8", 3, 2, false)
		msgGameResult.ReelResult[8]  = new ReelResult(1009, "p8", 4, 2, false)
		msgGameResult.ReelResult[9]  = new ReelResult(1010, "p8", 5, 2, false)
		msgGameResult.ReelResult[10] = new ReelResult(1011, "p8", 1, 3, false)
		msgGameResult.ReelResult[11] = new ReelResult(1012, "p8", 2, 3, false)
		msgGameResult.ReelResult[12] = new ReelResult(1013, "p8", 3, 3, false)
		msgGameResult.ReelResult[13] = new ReelResult(1014, "p8", 4, 3, false)
		msgGameResult.ReelResult[14] = new ReelResult(1015, "p8", 5, 3, false)
		gameLayer.SetGameResult(msgGameResult)
				
		// 狀態 - 10002
		var msgStatus = []
		msgStatus.State = 4	
		gameData.SetState(msgStatus.State)	
		gameLayer.SetState(msgStatus.State)
		
		// GameEnd - 8
		
		// 狀態 - 10002
		var msgStatus = []
		msgStatus.State = 0
		gameData.SetState(msgStatus.State)	
		gameLayer.SetState(msgStatus.State)		
	}
	
	SendBonusGameIcon(index,location,rewareValue)
	{
		
	}
	
	SendFindHistory(StartTime,EndTime,PageIndex,PageSize)
	{
		
	}
	
	SendReadJackpotPoolID()
	{
		
	}
}

class Symbol
{
	constructor(symbolID, symbolName)
	{
		this.SymbolID = symbolID
		this.SymbolName = symbolName
	}
}
class Position
{
	constructor(reel, row)
	{
		this.Reel = reel
		this.Row = row
	}
}
class ReelResult
{
	constructor(symbolID, symbolName, reel, row, blink)
	{
		this.Symbol = new Symbol(symbolID, symbolName)		
		this.Position = new Position(reel, row)
		this.Blink = blink
	}
}
class GameResult
{
	constructor()
	{
		this.BetMoney = 0
		this.WinMoney = 0
		this.FinalMoney = 0
		this.JackpotMoney = 0
		this.ReelResult = []
		this.PayGroups = []
		this.FreeGameWinMoney = 0
		this.FreeGameExtAward = []
		this.BackgroundInfo = []
	}
}

class JackpotInfo
{
	constructor(money, name, id, isLink)
	{
		this.Money = money
		this.Name = name
		this.ID = id
		this.IsLink = isLink
	}
}

class SymbolPayTable
{
	constructor(symbol, count, type, payout, title, desc)
	{
		this.Symbol = symbol
		this.Count = count
		this.Type = type
		this.Payout = payout
		this.Title = title
		this.Desc = desc
	}
}

class ReelSetting
{
	constructor(reelID, symbols)
	{
		this.ReelID = reelID
		this.Symbols = symbols
	}
}