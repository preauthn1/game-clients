var G = require("Global")
var gameData = require("GameData")

var GameReceive = {
	extends: cc.Component,

	TGW_BonusGameID(receiveMsg){
		data = receiveMsg || {}
		data.WinMoney = 10000
		data.Records = []
		
		let index = 1
		data.Records[index] = {}
		data.Records[index].ID = index
		data.Records[index].Location = 5
		data.Records[index].Money = "100"
		
		index = index + 1;
		data.Records[index] = {}
		data.Records[index].ID = index
		data.Records[index].Location = 3
		data.Records[index].Money = "200"
		
		index = index + 1;
		data.Records[index] = {}
		data.Records[index].ID = index
		data.Records[index].Location = 0
		data.Records[index].Money = "1000"
		
		index = index + 1;
		data.Records[index] = {}
		data.Records[index].ID = index
		data.Records[index].Location = 0
		data.Records[index].Money = "1000"
		
		index = index + 1;
		data.Records[index] = {}
		data.Records[index].ID = index
		data.Records[index].Location = 0
		data.Records[index].Money = "1000"
		
		data.Count = data.Records.length
		
		return data
	},

	TGW_GameResultID(receiveMsg){
		data = receiveMsg || {}
		
		data.BetMoney = 400
		data.WinMoney = 8000
		data.FinalMoney = 74860812
		data.ReelResult = []
		data.PayGroups = []
		
		let SetReelResult = function(reel, row, symbolID, symbolName, blink){
			let index = data.ReelResult.length +1
			data.ReelResult[index] = {}
			data.ReelResult[index].Position = {}
			data.ReelResult[index].Position.Reel = reel
			data.ReelResult[index].Position.Row = row
			data.ReelResult[index].Symbol = {}
			data.ReelResult[index].Symbol.SymbolID = symbolID
			data.ReelResult[index].Symbol.SymbolName =symbolName
			data.ReelResult[index].Blink = blink
		}
		
		SetReelResult(1,1,1442,"p8",false)
		SetReelResult(2,1,1474,"p9",true)
		SetReelResult(3,1,1507,"p6",false)
		SetReelResult(4,1,1542,"p4",false)
		SetReelResult(5,1,1568,"p8",false)
		SetReelResult(1,2,1452,"p9",true)
		SetReelResult(2,2,1487,"p6",false)
		SetReelResult(3,2,1515,"p9",true)
		SetReelResult(4,2,1550,"p6",false)
		SetReelResult(5,2,1581,"p6",false)
		SetReelResult(1,3,1467,"p5",false)
		SetReelResult(2,3,1496,"p7",false)
		SetReelResult(3,3,1533,"p2",false)
		SetReelResult(4,3,1557,"p9",true)
		SetReelResult(5,3,1591,"p7",false)
		
		let SetPayGroups = function(winMoney, payLineID, row1, row2, row3, row4, row5){
			let index = data.PayGroups.length +1
			data.PayGroups[index] = {}
			data.PayGroups[index].WinMoney = winMoney
			data.PayGroups[index].PayLines = {}
			data.PayGroups[index].PayLines.PayLineID = payLineID
			data.PayGroups[index].PayLines.Positions = []
			data.PayGroups[index].PayLines.Positions[1] = {}
			data.PayGroups[index].PayLines.Positions[1].Reel = 1
			data.PayGroups[index].PayLines.Positions[1].Row = row1
			data.PayGroups[index].PayLines.Positions[2] = {}
			data.PayGroups[index].PayLines.Positions[2].Reel = 2
			data.PayGroups[index].PayLines.Positions[2].Row = row2
			data.PayGroups[index].PayLines.Positions[3] = {}
			data.PayGroups[index].PayLines.Positions[3].Reel = 3
			data.PayGroups[index].PayLines.Positions[3].Row = row3
			data.PayGroups[index].PayLines.Positions[4] = {}
			data.PayGroups[index].PayLines.Positions[4].Reel = 4
			data.PayGroups[index].PayLines.Positions[4].Row = row4
			data.PayGroups[index].PayLines.Positions[5] = {}
			data.PayGroups[index].PayLines.Positions[5].Reel = 5
			data.PayGroups[index].PayLines.Positions[5].Row = row5
		}
			
		SetPayGroups(6000,10,2,1,2,3,2)
		SetPayGroups(2000,24,2,1,2,1,2)
		
		return data
	},


};

module.exports = GameReceive
