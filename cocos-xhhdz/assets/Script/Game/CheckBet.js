var BetValue = []
var BetCount = []
var Amout

var CheckBet = {
	extends: cc.Component,

	// 傳入參數: 錢的數量, 籌碼面額, 倍率
	// 回傳參數: 籌碼面額 * 倍率, 籌碼數量
	Init(Value, Bet, BetRate){
		Amout = Value
		BetValue = []
		BetCount = []
		
		for(let i = 0; i < Bet.length; ++i){
			BetValue.push(Bet[i] * BetRate)
			BetCount.push(0)
		}
		
		let compare = function(dataA,dataB){
			return dataB - dataA
		}

		BetValue.sort(compare);

		this.CalBet()
		
	//ShowResult(Value)
		
		var NewBetValue = []
		var NewBetCount = []
		NewBetValue.push(0)
		NewBetCount.push(0)

		for(let i = 0; i < BetValue.length; ++i){
			NewBetValue.push(BetValue[i])
			NewBetCount.push(BetCount[i])
		}

		var info = {"value":NewBetValue, "count" : NewBetCount}
		return info
	},

	// 計算方式
	// 由大面額到低面額，依序取餘數，直到餘數為0
	// 若算完時還有餘數，則依序往上一個面額兌換數值，繼續往下計算，直到餘數為0
	CalBet(){
		let Index = 0	
		//檢查直到全部都整除
		while (this.Chcek(Index) == false) {
			
			// 計算是否有數值可返還
			let Acc = 0
			for(let  i  =  BetValue.length - 1;  i  <=  1; ++i){
				Acc = Acc + BetCount[i]
			}	
			
			// 無東西可返還
			if(Acc == 0 ){
				return
			}
			
			// 返回第一個有值的數值
			for(let  i  =  BetValue.length - 1;  i  <=  1; ++i){
				if(BetCount[i] > 0 ){
					Amout = Amout + BetValue[i]
					BetCount[i] =  BetCount[i] - 1
					Index = i + 1
					break
				}
			}
		}
	},

	Chcek(BeginIndex){
		
		for(let  i  =  BeginIndex;  i  <  BetValue.length; ++i){
			let Value = BetValue[i]
			//t1, t2 = math.modf(Amout/Value)
			let t1 = parseInt(Amout/Value)
			
			BetCount[i] = BetCount[i] + t1
			Amout = Amout - Value * t1		
		}
		
		if(Amout == 0 ){
			return true
		} 
		else{
			return false
		}
	},

	ShowResult(Value){	
		let AccValue = 0
		let Log = ""
		for(let  i  =  1;  i  <=  BetValue.length; ++i){
			Log = Log + BetValue[i].toString() + " " + BetCount[i].toString() + "\n"
			
			AccValue = AccValue + BetValue[i] * BetCount[i]
		}
		if(Value == AccValue ){
			console.log(".length Count\n" + Log)
		}
		
		console.log(".length ShowResult " + Value + " " + AccValue)
	},


};

module.exports = CheckBet
