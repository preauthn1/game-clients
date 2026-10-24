var gameGlobal = require("GameGlobal")
var gameData = require("GameData")

var GameReceive = {
	DFDCSettingID: function(receiveMsg)
	{
		let data = receiveMsg || {}
		data.RowCounts = 3
		data.TotalPayLine = 25
		data.BetCount = {}
		data.BetCount[1] = 100
		data.BetCount[2] = 500
		data.BetCount[3] = 1000
		data.BetCount[4] = 5000
		data.BetCount[5] = 10000
		data.BetCount[6] = 50000
		data.BetCount[7] = 100000
		data.BigWinStep = {}
		data.BigWinStep[1] = 10000
		data.BigWinStep[2] = 50000
		data.BigWinStep[3] = 100000
		data.ReelSetting = {}
		data.ReelSetting[1] = {}
		data.ReelSetting[1].RealID = 1
		data.ReelSetting[1].SymbolGroup = {}
		data.ReelSetting[1].SymbolGroup[1] = {}
		data.ReelSetting[1].SymbolGroup[1].SymbolID = 1
		data.ReelSetting[1].SymbolGroup[1].SymbolName = "p1"
		data.ReelSetting[1].SymbolGroup[1].Order = 0
		data.ReelSetting[1].SymbolGroup[2] = {}
		data.ReelSetting[1].SymbolGroup[2].SymbolID = 2
		data.ReelSetting[1].SymbolGroup[2].SymbolName = "p2"
		data.ReelSetting[1].SymbolGroup[2].Order = 0
		data.ReelSetting[1].SymbolGroup[3] = {}
		data.ReelSetting[1].SymbolGroup[3].SymbolID = 3
		data.ReelSetting[1].SymbolGroup[3].SymbolName = "p3"
		data.ReelSetting[1].SymbolGroup[3].Order = 0
		data.ReelSetting[1].SymbolGroup[4] = {}
		data.ReelSetting[1].SymbolGroup[4].SymbolID = 4
		data.ReelSetting[1].SymbolGroup[4].SymbolName = "p4"
		data.ReelSetting[1].SymbolGroup[4].Order = 0
		data.ReelSetting[2] = {}
		data.ReelSetting[2].RealID = 2
		data.ReelSetting[2].SymbolGroup = {}
		data.ReelSetting[2].SymbolGroup[1] = {}
		data.ReelSetting[2].SymbolGroup[1].SymbolID = 1
		data.ReelSetting[2].SymbolGroup[1].SymbolName = "p1"
		data.ReelSetting[2].SymbolGroup[1].Order = 0
		data.ReelSetting[2].SymbolGroup[2] = {}
		data.ReelSetting[2].SymbolGroup[2].SymbolID = 2
		data.ReelSetting[2].SymbolGroup[2].SymbolName = "p2"
		data.ReelSetting[2].SymbolGroup[2].Order = 0
		data.ReelSetting[2].SymbolGroup[3] = {}
		data.ReelSetting[2].SymbolGroup[3].SymbolID = 3
		data.ReelSetting[2].SymbolGroup[3].SymbolName = "p3"
		data.ReelSetting[2].SymbolGroup[3].Order = 0
		data.ReelSetting[2].SymbolGroup[4] = {}
		data.ReelSetting[2].SymbolGroup[4].SymbolID = 4
		data.ReelSetting[2].SymbolGroup[4].SymbolName = "p4"
		data.ReelSetting[2].SymbolGroup[4].Order = 0
		data.ReelSetting[3] = {}
		data.ReelSetting[3].RealID = 3
		data.ReelSetting[3].SymbolGroup = {}
		data.ReelSetting[3].SymbolGroup[1] = {}
		data.ReelSetting[3].SymbolGroup[1].SymbolID = 1
		data.ReelSetting[3].SymbolGroup[1].SymbolName = "p1"
		data.ReelSetting[3].SymbolGroup[1].Order = 0
		data.ReelSetting[3].SymbolGroup[2] = {}
		data.ReelSetting[3].SymbolGroup[2].SymbolID = 2
		data.ReelSetting[3].SymbolGroup[2].SymbolName = "p2"
		data.ReelSetting[3].SymbolGroup[2].Order = 0
		data.ReelSetting[3].SymbolGroup[3] = {}
		data.ReelSetting[3].SymbolGroup[3].SymbolID = 3
		data.ReelSetting[3].SymbolGroup[3].SymbolName = "p3"
		data.ReelSetting[3].SymbolGroup[3].Order = 0
		data.ReelSetting[3].SymbolGroup[4] = {}
		data.ReelSetting[3].SymbolGroup[4].SymbolID = 4
		data.ReelSetting[3].SymbolGroup[4].SymbolName = "p4"
		data.ReelSetting[3].SymbolGroup[4].Order = 0
		data.ReelSetting[4] = {}
		data.ReelSetting[4].RealID = 4
		data.ReelSetting[4].SymbolGroup = {}
		data.ReelSetting[4].SymbolGroup[1] = {}
		data.ReelSetting[4].SymbolGroup[1].SymbolID = 1
		data.ReelSetting[4].SymbolGroup[1].SymbolName = "p1"
		data.ReelSetting[4].SymbolGroup[1].Order = 0
		data.ReelSetting[4].SymbolGroup[2] = {}
		data.ReelSetting[4].SymbolGroup[2].SymbolID = 2
		data.ReelSetting[4].SymbolGroup[2].SymbolName = "p2"
		data.ReelSetting[4].SymbolGroup[2].Order = 0
		data.ReelSetting[4].SymbolGroup[3] = {}
		data.ReelSetting[4].SymbolGroup[3].SymbolID = 3
		data.ReelSetting[4].SymbolGroup[3].SymbolName = "p3"
		data.ReelSetting[4].SymbolGroup[3].Order = 0
		data.ReelSetting[4].SymbolGroup[4] = {}
		data.ReelSetting[4].SymbolGroup[4].SymbolID = 4
		data.ReelSetting[4].SymbolGroup[4].SymbolName = "p4"
		data.ReelSetting[4].SymbolGroup[4].Order = 0
		data.ReelSetting[5] = {}
		data.ReelSetting[5].RealID = 5
		data.ReelSetting[5].SymbolGroup = {}
		data.ReelSetting[5].SymbolGroup[1] = {}
		data.ReelSetting[5].SymbolGroup[1].SymbolID = 1
		data.ReelSetting[5].SymbolGroup[1].SymbolName = "p1"
		data.ReelSetting[5].SymbolGroup[1].Order = 0
		data.ReelSetting[5].SymbolGroup[2] = {}
		data.ReelSetting[5].SymbolGroup[2].SymbolID = 2
		data.ReelSetting[5].SymbolGroup[2].SymbolName = "p2"
		data.ReelSetting[5].SymbolGroup[2].Order = 0
		data.ReelSetting[5].SymbolGroup[3] = {}
		data.ReelSetting[5].SymbolGroup[3].SymbolID = 3
		data.ReelSetting[5].SymbolGroup[3].SymbolName = "p3"
		data.ReelSetting[5].SymbolGroup[3].Order = 0
		data.ReelSetting[5].SymbolGroup[4] = {}
		data.ReelSetting[5].SymbolGroup[4].SymbolID = 4
		data.ReelSetting[5].SymbolGroup[4].SymbolName = "p4"
		data.ReelSetting[5].SymbolGroup[4].Order = 0
		
		return data
	},

	DFDCBetRetID: function()
	{
		let data = {}
		data.Money = 0
		data.Ret = 0
		
		return data
	},

	DFDCGameResult: function()
	{
		let data = {}
		data.WinMoney = 1000
		data.SymbolID = gameData.StopSymbolID
		data.PayLineGroup = {}
		
		let SetPayLineGroup = function(_PayLineID,_ReelID,SymbolID_Offset,_BetNumber,_BetMoney)
		{
			SymbolID_Offset = SymbolID_Offset || 0
			_BetNumber = _BetNumber || 0
			_BetMoney = _BetMoney || 0
			let index = data.PayLineGroup.length +1
			data.PayLineGroup[index] = {}
			data.PayLineGroup[index].PayLineID = _PayLineID
			data.PayLineGroup[index].PayLineDetail = {}
			data.PayLineGroup[index].PayLineDetail[_ReelID] = {}
			data.PayLineGroup[index].PayLineDetail[_ReelID].ReelID = _ReelID
			data.PayLineGroup[index].PayLineDetail[_ReelID].Blink = false
			data.PayLineGroup[index].PayLineDetail[_ReelID].SymbolID = gameData.StopSymbolID[_ReelID] + SymbolID_Offset
			data.PayLineGroup[index].PayLineDetail[_ReelID].Line = true
			data.PayLineGroup[index].PayLineDetail[_ReelID].BetNumber = _BetNumber
			data.PayLineGroup[index].PayLineDetail[_ReelID].BetMoney = _BetMoney
		}
		let _PayLineID = 1
		//----------------_PayLineID,	_ReelID,	SymbolID_Offset,	_BetNumber,	_BetMoney
		SetPayLineGroup(_PayLineID,	1,			1,					2,			200)	
		SetPayLineGroup(_PayLineID,	2,			1)
		SetPayLineGroup(_PayLineID,	3,			1)
		SetPayLineGroup(_PayLineID,	4,			1)
		SetPayLineGroup(_PayLineID,	5,			1)
		gameGlobal.Print(data)
		_PayLineID = 2
		//----------------_PayLineID,	_ReelID,	SymbolID_Offset,	_BetNumber,	_BetMoney
		SetPayLineGroup(_PayLineID,	1,			0)
		SetPayLineGroup(_PayLineID,	2,			0)
		SetPayLineGroup(_PayLineID,	3,			0)
		SetPayLineGroup(_PayLineID,	4,			0)
		SetPayLineGroup(_PayLineID,	5,			0)
		_PayLineID = 3
		//----------------_PayLineID,	_ReelID,	SymbolID_Offset,	_BetNumber,	_BetMoney
		SetPayLineGroup(_PayLineID,	1,			2)
		SetPayLineGroup(_PayLineID,	2,			2)
		SetPayLineGroup(_PayLineID,	3,			2)
		SetPayLineGroup(_PayLineID,	4,			2)
		SetPayLineGroup(_PayLineID,	5,			2)
		_PayLineID = 4
		//----------------_PayLineID,	_ReelID,	SymbolID_Offset,	_BetNumber,	_BetMoney
		SetPayLineGroup(_PayLineID,	1,			0)
		SetPayLineGroup(_PayLineID,	2,			1)
		SetPayLineGroup(_PayLineID,	3,			2)
		SetPayLineGroup(_PayLineID,	4,			1)
		SetPayLineGroup(_PayLineID,	5,			0)
		_PayLineID = 5
		//----------------_PayLineID,	_ReelID,	SymbolID_Offset,	_BetNumber,	_BetMoney
		SetPayLineGroup(_PayLineID,	1,			2)
		SetPayLineGroup(_PayLineID,	2,			1)
		SetPayLineGroup(_PayLineID,	3,			0)
		SetPayLineGroup(_PayLineID,	4,			1)
		SetPayLineGroup(_PayLineID,	5,			2)
		_PayLineID = 6
		//----------------_PayLineID,	_ReelID,	SymbolID_Offset,	_BetNumber,	_BetMoney
		SetPayLineGroup(_PayLineID,	1,			1)
		SetPayLineGroup(_PayLineID,	2,			0)
		SetPayLineGroup(_PayLineID,	3,			0)
		SetPayLineGroup(_PayLineID,	4,			0)
		SetPayLineGroup(_PayLineID,	5,			1)
		_PayLineID = 7
		//----------------_PayLineID,	_ReelID,	SymbolID_Offset,	_BetNumber,	_BetMoney
		SetPayLineGroup(_PayLineID,	1,			1)
		SetPayLineGroup(_PayLineID,	2,			2)
		SetPayLineGroup(_PayLineID,	3,			2)
		SetPayLineGroup(_PayLineID,	4,			2)
		SetPayLineGroup(_PayLineID,	5,			1)
		_PayLineID = 8
		//----------------_PayLineID,	_ReelID,	SymbolID_Offset,	_BetNumber,	_BetMoney
		SetPayLineGroup(_PayLineID,	1,			0)
		SetPayLineGroup(_PayLineID,	2,			0)
		SetPayLineGroup(_PayLineID,	3,			1)
		SetPayLineGroup(_PayLineID,	4,			2)
		SetPayLineGroup(_PayLineID,	5,			2)
		_PayLineID = 9
		//----------------_PayLineID,	_ReelID,	SymbolID_Offset,	_BetNumber,	_BetMoney
		SetPayLineGroup(_PayLineID,	1,			2)
		SetPayLineGroup(_PayLineID,	2,			2)
		SetPayLineGroup(_PayLineID,	3,			1)
		SetPayLineGroup(_PayLineID,	4,			0)
		SetPayLineGroup(_PayLineID,	5,			0)
		_PayLineID = 10
		//----------------_PayLineID,	_ReelID,	SymbolID_Offset,	_BetNumber,	_BetMoney
		SetPayLineGroup(_PayLineID,	1,			1)
		SetPayLineGroup(_PayLineID,	2,			0)
		SetPayLineGroup(_PayLineID,	3,			1)
		SetPayLineGroup(_PayLineID,	4,			2)
		SetPayLineGroup(_PayLineID,	5,			1)
		_PayLineID = 11
		//----------------_PayLineID,	_ReelID,	SymbolID_Offset,	_BetNumber,	_BetMoney
		SetPayLineGroup(_PayLineID,	1,			1)
		SetPayLineGroup(_PayLineID,	2,			2)
		SetPayLineGroup(_PayLineID,	3,			1)
		SetPayLineGroup(_PayLineID,	4,			0)
		SetPayLineGroup(_PayLineID,	5,			1)
		_PayLineID = 12
		//----------------_PayLineID,	_ReelID,	SymbolID_Offset,	_BetNumber,	_BetMoney
		SetPayLineGroup(_PayLineID,	1,			0)
		SetPayLineGroup(_PayLineID,	2,			1)
		SetPayLineGroup(_PayLineID,	3,			1)
		SetPayLineGroup(_PayLineID,	4,			1)
		SetPayLineGroup(_PayLineID,	5,			0)
		_PayLineID = 13
		//----------------_PayLineID,	_ReelID,	SymbolID_Offset,	_BetNumber,	_BetMoney
		SetPayLineGroup(_PayLineID,	1,			2)
		SetPayLineGroup(_PayLineID,	2,			1)
		SetPayLineGroup(_PayLineID,	3,			1)
		SetPayLineGroup(_PayLineID,	4,			1)
		SetPayLineGroup(_PayLineID,	5,			2)
		_PayLineID = 14
		//----------------_PayLineID,	_ReelID,	SymbolID_Offset,	_BetNumber,	_BetMoney
		SetPayLineGroup(_PayLineID,	1,			0)
		SetPayLineGroup(_PayLineID,	2,			1)
		SetPayLineGroup(_PayLineID,	3,			0)
		SetPayLineGroup(_PayLineID,	4,			1)
		SetPayLineGroup(_PayLineID,	5,			0)
		_PayLineID = 15
		//----------------_PayLineID,	_ReelID,	SymbolID_Offset,	_BetNumber,	_BetMoney
		SetPayLineGroup(_PayLineID,	1,			2)
		SetPayLineGroup(_PayLineID,	2,			1)
		SetPayLineGroup(_PayLineID,	3,			2)
		SetPayLineGroup(_PayLineID,	4,			1)
		SetPayLineGroup(_PayLineID,	5,			2)
		_PayLineID = 16
		//----------------_PayLineID,	_ReelID,	SymbolID_Offset,	_BetNumber,	_BetMoney
		SetPayLineGroup(_PayLineID,	1,			1)
		SetPayLineGroup(_PayLineID,	2,			1)
		SetPayLineGroup(_PayLineID,	3,			0)
		SetPayLineGroup(_PayLineID,	4,			1)
		SetPayLineGroup(_PayLineID,	5,			1)
		_PayLineID = 17
		//----------------_PayLineID,	_ReelID,	SymbolID_Offset,	_BetNumber,	_BetMoney
		SetPayLineGroup(_PayLineID,	1,			1)
		SetPayLineGroup(_PayLineID,	2,			1)
		SetPayLineGroup(_PayLineID,	3,			2)
		SetPayLineGroup(_PayLineID,	4,			1)
		SetPayLineGroup(_PayLineID,	5,			1)
		_PayLineID = 18
		//----------------_PayLineID,	_ReelID,	SymbolID_Offset,	_BetNumber,	_BetMoney
		SetPayLineGroup(_PayLineID,	1,			0)
		SetPayLineGroup(_PayLineID,	2,			0)
		SetPayLineGroup(_PayLineID,	3,			2)
		SetPayLineGroup(_PayLineID,	4,			0)
		SetPayLineGroup(_PayLineID,	5,			0)
		_PayLineID = 19
		//----------------_PayLineID,	_ReelID,	SymbolID_Offset,	_BetNumber,	_BetMoney
		SetPayLineGroup(_PayLineID,	1,			2)
		SetPayLineGroup(_PayLineID,	2,			2)
		SetPayLineGroup(_PayLineID,	3,			0)
		SetPayLineGroup(_PayLineID,	4,			2)
		SetPayLineGroup(_PayLineID,	5,			2)
		_PayLineID = 20
		//----------------_PayLineID,	_ReelID,	SymbolID_Offset,	_BetNumber,	_BetMoney
		SetPayLineGroup(_PayLineID,	1,			0)
		SetPayLineGroup(_PayLineID,	2,			2)
		SetPayLineGroup(_PayLineID,	3,			2)
		SetPayLineGroup(_PayLineID,	4,			2)
		SetPayLineGroup(_PayLineID,	5,			0)
		_PayLineID = 21
		//----------------_PayLineID,	_ReelID,	SymbolID_Offset,	_BetNumber,	_BetMoney
		SetPayLineGroup(_PayLineID,	1,			2)
		SetPayLineGroup(_PayLineID,	2,			0)
		SetPayLineGroup(_PayLineID,	3,			0)
		SetPayLineGroup(_PayLineID,	4,			0)
		SetPayLineGroup(_PayLineID,	5,			2)
		_PayLineID = 22
		//----------------_PayLineID,	_ReelID,	SymbolID_Offset,	_BetNumber,	_BetMoney
		SetPayLineGroup(_PayLineID,	1,			0)
		SetPayLineGroup(_PayLineID,	2,			0)
		SetPayLineGroup(_PayLineID,	3,			1)
		SetPayLineGroup(_PayLineID,	4,			0)
		SetPayLineGroup(_PayLineID,	5,			0)
		_PayLineID = 23
		//----------------_PayLineID,	_ReelID,	SymbolID_Offset,	_BetNumber,	_BetMoney
		SetPayLineGroup(_PayLineID,	1,			2)
		SetPayLineGroup(_PayLineID,	2,			2)
		SetPayLineGroup(_PayLineID,	3,			1)
		SetPayLineGroup(_PayLineID,	4,			2)
		SetPayLineGroup(_PayLineID,	5,			2)
		_PayLineID = 24
		//----------------_PayLineID,	_ReelID,	SymbolID_Offset,	_BetNumber,	_BetMoney
		SetPayLineGroup(_PayLineID,	1,			1)
		SetPayLineGroup(_PayLineID,	2,			0)
		SetPayLineGroup(_PayLineID,	3,			1)
		SetPayLineGroup(_PayLineID,	4,			0)
		SetPayLineGroup(_PayLineID,	5,			1)
		_PayLineID = 25
		//----------------_PayLineID,	_ReelID,	SymbolID_Offset,	_BetNumber,	_BetMoney
		SetPayLineGroup(_PayLineID,	1,			1)
		SetPayLineGroup(_PayLineID,	2,			2)
		SetPayLineGroup(_PayLineID,	3,			1)
		SetPayLineGroup(_PayLineID,	4,			2)
		SetPayLineGroup(_PayLineID,	5,			1)
		
		return data
	},

	DFDC_GodenSymbolList: function()
	{
		let data = {}
		let index = 1
		data[index] = {}
		data[index].Symbols = index
		data[index].Credits = 8
		index = 2
		data[index] = {}
		data[index].Symbols = index
		data[index].Credits = 18
		index = 3
		data[index] = {}
		data[index].Symbols = index
		data[index].Credits = 28
		index = 4
		data[index] = {}
		data[index].Symbols = index
		data[index].Credits = 38
		index = 5
		data[index] = {}
		data[index].Symbols = index
		data[index].Credits = 48
		
		return data
	},

	DFDC_BonusGame: function()
	{
		let data = {}
		data.Money = 10000
		data.BonusDetail = {}
		let index = 1
		data.BonusDetail[index] = {}
		data.BonusDetail[index].Id = index
		data.BonusDetail[index].Place = 0
		data.BonusDetail[index].Icon = 1
	/*	index = index +1
		data.BonusDetail[index] = {}
		data.BonusDetail[index].Id = index
		data.BonusDetail[index].Place = 0
		data.BonusDetail[index].Icon = 1
		index = index +1
		data.BonusDetail[index] = {}
		data.BonusDetail[index].Id = index
		data.BonusDetail[index].Place = 0
		data.BonusDetail[index].Icon = 2
		index = index +1
		data.BonusDetail[index] = {}
		data.BonusDetail[index].Id = index
		data.BonusDetail[index].Place = 0
		data.BonusDetail[index].Icon = 2
		index = index +1
		data.BonusDetail[index] = {}
		data.BonusDetail[index].Id = index
		data.BonusDetail[index].Place = 0
		data.BonusDetail[index].Icon = 3
		index = index +1
		data.BonusDetail[index] = {}
		data.BonusDetail[index].Id = index
		data.BonusDetail[index].Place = 0
		data.BonusDetail[index].Icon = 3
		index = index +1
		data.BonusDetail[index] = {}
		data.BonusDetail[index].Id = index
		data.BonusDetail[index].Place = 0
		data.BonusDetail[index].Icon = 4
		index = index +1
		data.BonusDetail[index] = {}
		data.BonusDetail[index].Id = index
		data.BonusDetail[index].Place = 0
		data.BonusDetail[index].Icon = 4
		index = index +1
		data.BonusDetail[index] = {}
		data.BonusDetail[index].Id = index
		data.BonusDetail[index].Place = 0
		data.BonusDetail[index].Icon = 1*/
		
		return data
	},
}

module.exports = GameReceive;
