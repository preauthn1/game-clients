var G = require( "Global")

var NiuNiuSF = {
	extends: cc.Component,

	GetCardPoint(card){
	    let point = 0
	    if (card.Color < 4 && card.CardNumber == 14) {
	        point = 1
	} 
    else if (card.CardNumber >= 10 || card.Color >= 4) {

	        point = 10
	} 
    else{
	        point = card.CardNumber
	    }
	    return point
	},

	// 是否特殊牌型
	IsSpecial(carddata){
	    let samePointCount = 0
	    let lastPoint = 0
	    let huaPaiCount = 0
	    let sumPoint = 0    
		
		let cards = []
		for(let k in (carddata)){ 
			let v = carddata[k] 
			cards.push(v)
	    }	

		let compare = function(a,b){
			return a.CardNumber - b.CardNumber
		}
		cards.sort(compare);

		for(let _ in (cards)){ 
			let v = cards[_] 

        	// 四炸判断
			if (lastPoint == v.CardNumber) {
				samePointCount = samePointCount + 1
			} 
        	else{
	            lastPoint = v.CardNumber
	        }
			// 判断是否为五花的点数
			let s = ",11,12,13,15,16,17,"
	        if (s.indexOf("," + v.CardNumber + ",") > 0) {
	            huaPaiCount = huaPaiCount + 1
	        }
        	// 五小牛判断
	        sumPoint = sumPoint + this.GetCardPoint(v)
	    }
	    return samePointCount == 4 || huaPaiCount == 5 || sumPoint <= 10
	},

	IsExistNiu(cards){
	    let value = 0
		for(let k in (cards)){ 
			let v = cards[k] 

	        value = this.GetCardPoint(v)
			for(let k1 in (cards)){ 
				let v1 = cards[k1] 

	            if (k1 > k) {
	                value = value + this.GetCardPoint(v1)
					for(let k2 in (cards)){ 
						let v2 = cards[k2] 
	                    if (k2 > k1) {
	                        value = value + this.GetCardPoint(v2)
	                        if (value % 10 == 0) {
	                            return true
							} 
                        	else{
	                            value = value - this.GetCardPoint(v2)
	                        }
	                    }
	                }
	                value = value - this.GetCardPoint(v1)
	            }
	        }
	    }
	    return false
	},


};

module.exports = NiuNiuSF
