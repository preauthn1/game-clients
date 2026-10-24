var _allPoker=[]
var _PokerString=[]

var CountPoker = {
	extends: cc.Component,

	Init(){
	    _allPoker[2]=4
	    _allPoker[3]=4
	    _allPoker[4]=4
	    _allPoker[5]=4
	    _allPoker[6]=4
	    _allPoker[7]=4
	    _allPoker[8]=4
	    _allPoker[9]=4
	    _allPoker[10]=4
	    _allPoker[11]=4
	    _allPoker[12]=4
	    _allPoker[13]=4
	    _allPoker[14]=4
	    _allPoker[15]=1
		_allPoker[16]=1
		
		_PokerString[2] = "2"
		_PokerString[3] = "3"
		_PokerString[4] = "4"
		_PokerString[5] = "5"
		_PokerString[6] = "6"
		_PokerString[7] = "7"
		_PokerString[8] = "8"
		_PokerString[9] = "9"
		_PokerString[10] = "10"
		_PokerString[11] = "J"
		_PokerString[12] = "Q"
		_PokerString[13] = "K"
		_PokerString[14] = "A"
		_PokerString[15] = "小王"
		_PokerString[16] = "大王"
	},

	Recovery(Cards){
	    _allPoker[2]=0
	    _allPoker[3]=0
	    _allPoker[4]=0
	    _allPoker[5]=0
	    _allPoker[6]=0
	    _allPoker[7]=0
	    _allPoker[8]=0
	    _allPoker[9]=0
	    _allPoker[10]=0
	    _allPoker[11]=0
	    _allPoker[12]=0
	    _allPoker[13]=0
	    _allPoker[14]=0
	    _allPoker[15]=0
	    _allPoker[16]=0
	
		for(let i in (Cards)){ 
			let v = Cards[i] 
			let vn=v.Number
			_allPoker[vn]= _allPoker[vn]+1
		}
	
	},

	ChuPai(Cards){
		for(let i in (Cards)){ 
			let v = Cards[i] 
	   		let vn=v.Number
	   		_allPoker[vn]= _allPoker[vn]-1
	  	}
	},

	Dizu(Cards){
		for(let i in (Cards)){ 
			let v = Cards[i] 
			let vn=v.Number
			_allPoker[vn]= _allPoker[vn]-1
		}
	},

	AllPoker(){
		return _allPoker;
	},

	FaPai(Cards){
		for(let i in (Cards)){ 
			let v = Cards[i] 
			let vn=v.Number
			_allPoker[vn]= _allPoker[vn]-1
		}
	},

	RecoverRet(Cards){
	 	this.Init()
		for(let i in (Cards)){ 
			let v = Cards[i] 
			let vn=v.Number
			_allPoker[vn]= _allPoker[vn]-1
		}
	},

	ConvertPString(number){
	    return _PokerString[number]
	},
};

module.exports = CountPoker
