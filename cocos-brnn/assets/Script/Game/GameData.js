var G = require("Global")
var GameConfig = require("GameConfig")

var GameData = {
	extends: cc.Component,

	Init(){
		this.BetCount = 0         //一次下注的数量
		this.BetMoney = 0         //一次下注的钱
	    this.BetRate = 100        // 1注筹码到钱的换算比例
		this.ZhuangLimit = 0      //上庄钱限制
		this.MaxZhuang = 1        //当庄局数
		this.OnceFapei = 0        //结算翻牌时间
		this.State = 4            //游戏状态
		this.userList = []        //玩家列表
		this.castBet = []         //下注纪录
		this.winList = []         //赢钱玩家列表
		this.loseList = []        //输钱玩家列表
		this.result = []          //结算资讯
		this.zhuangInfo = {}      //庄家资讯
		this.zhuangList = []      //上庄列表
		this.userSelf = {}        //玩家资讯
		//IDTitle = "ID:"      //
		this.IDTitle = ""      //
		this.ZhuangWin = 0        //当局庄家赢得金额
		this.SelfWin = 0          //当局玩家赢得金额
	},

	SetState(data){
		this.State = data
	},

	SetSetting(data){
	    this.BetCount = data.BetCount
	    this.BetMoney = data.BetMoney
	    this.ZhuangLimit = data.ZhuangLimit
	    this.MaxZhuang = data.MaxZhuang
		this.OnceFapei = data.OnceFapei
	},

	SetZhuang(data){
		this.zhuangInfo = {}
		if(data == null ){
			this.zhuangInfo.UserID = 0
			this.zhuangInfo.Score = 0
		} 
		else{
			this.zhuangInfo.UserID = data.UserID
			this.zhuangInfo.NickName = data.NickName
			this.zhuangInfo.Sex = data.Sex
			this.zhuangInfo.FaceID = data.FaceID
			this.zhuangInfo.Score = data.Score
			this.zhuangInfo.WinCount = data.WinCount
			this.zhuangInfo.LoseCount = data.LoseCount
			this.zhuangInfo.DrawCount = data.DrawCount
			this.zhuangInfo.StateValue = data.StateValue
			this.zhuangInfo.TableNo = data.TableNo
			this.zhuangInfo.SeatNo = data.SeatNo
		}
	},

	SetZhuangList(data){
		this.zhuangList = data.UserInfo
	},

	GetBetCountIndex(num){
		for(let k in (this.BetCount)){ 
			let v = this.BetCount[k] 
			if(v == num ){
				return k
			}
		}
		return 1
	},

	GameEnd(){
		this.userList = []
		this.castBet = []
		this.winList = []
		this.loseList = []
		this.ZhuangWin = 0
		this.SelfWin = 0
	},

	SetGameUser(data){
		this.userList[data.UserID] = {}
		this.userList[data.UserID].UserID = data.UserID
		this.userList[data.UserID].NickName = data.NickName
		this.userList[data.UserID].Sex = data.Sex
		this.userList[data.UserID].FaceID = data.FaceID
		this.userList[data.UserID].Score = data.Score
		this.userList[data.UserID].WinCount = data.WinCount
		this.userList[data.UserID].LoseCount = data.LoseCount
		this.userList[data.UserID].DrawCount = data.DrawCount
		this.userList[data.UserID].StateValue = data.StateValue
		this.userList[data.UserID].TableNo = data.TableNo
		this.userList[data.UserID].SeatNo = data.SeatNo
		
		if(data.UserID == GameConfig.getUserID() ){
			this.userSelf = {}
			this.userSelf.UserID = data.UserID
			this.userSelf.NickName = data.NickName
			this.userSelf.Sex = data.Sex
			this.userSelf.FaceID = data.FaceID
			this.userSelf.Score = data.Score
			this.userSelf.WinCount = data.WinCount
			this.userSelf.LoseCount = data.LoseCount
			this.userSelf.DrawCount = data.DrawCount
			this.userSelf.StateValue = data.StateValue
			this.userSelf.TableNo = data.TableNo
			this.userSelf.SeatNo = data.SeatNo
		}
	},

	SetAddCastBet(betType,count){
		this.castBet[betType] = this.castBet[betType] || 0
		this.castBet[betType] = this.castBet[betType] + count
	},

	SetClearCastBet(){
		castBet = []
	},

	SetGameUserScore(userID,score){
		
		if(this.userList[userID] != null ){
			this.userList[userID].Score = score
		}
		
		if(this.userID == this.userSelf.UserID ){
			this.userSelf.Score = score
		}
		
		if(this.userID == this.zhuangInfo.UserID ){
			this.zhuangInfo.Score = score
		}
	},

	SetGameResult(data){
		this.result[data.SitNo] = {}
		this.result[data.SitNo].WinLoss = data.WinLoss
		this.result[data.SitNo].NiuNiuRet = data.NiuNiuRet
		this.result[data.SitNo].NiuNiuNumber = data.NiuNiuNumber
		this.result[data.SitNo].SitPoker = data.SitPoker
	},

	SetGameResultWin(data){
		this.ZhuangWin = data.ZhuangWin
		this.SelfWin = data.SelfWin
		this.StageUerInfo = data.StageUerInfo
		
		for(let k in (data.StageUerInfo)){ 
			let v = data.StageUerInfo[k] 

			if(v.Win > 0 ){
				this.winList[this.winList.length +1] = v.UserID
			} 
			else if( v.Win < 0 ){
				this.loseList[this.loseList.length +1] = v.UserID
			}
		}
	},

	GetWinLoseCount(){
		let count = 0
		for(let k in (this.result)){ 
			let v = this.result[k] 
			if(k > 0) {//不算庄家
				count = count + this.result[k].WinLoss
			}
		}
		
		return count
	},

	GetResultOdd(sitNo){
		if(this.result[sitNo].WinLoss == 0 ){
			sitNo = 0
		}
		
		if(this.result[sitNo].NiuNiuRet == 4 ){
			return this.result[sitNo].NiuNiuNumber
		} 
		else if( this.result[sitNo].NiuNiuRet == 5 ){
			return 1
		} 
		else{
			return 10
		}
	},

	GetNiuNiuOdd(sitNo){
		if(this.result[sitNo].NiuNiuRet == 4 ){
			return this.result[sitNo].NiuNiuNumber
		} 
		else if( this.result[sitNo].NiuNiuRet == 5 ){
			return 1
		} 
		else{
			return 10
		}
	},


};

module.exports = GameData
