var G = require("Global")
var GameG = require("GameGlobal")
var fmg  = require("FFunction")

var GameAudio = {
	extends: cc.Component,

	//- 析构
	onExit(){

	},

	//- 初始化数据
	initData(){
	    
	    this.hAudio = {}        // 播放音效句柄
	    this.resAudio = {}      // 音效资源
	
		this.resAudio.turn = []
		// this.resAudio.turn[1]=["", "adBetStart", "adBetStartMan"]
		this.resAudio.turn[1]=["", "adBetStart"]
		this.resAudio.turn[2]=["", "adBetLast3"]
		// this.resAudio.turn[3]=["", "adBetStop", "adBetStopMan"]
		this.resAudio.turn[3]=["", "adBetStop"]
		this.resAudio.turn[4]=["", "adTurnCardDeal", "adTurnCardShow"]
		this.resAudio.turn[5]=["", "adRst", "adRstTitle"]
		this.resAudio.turn[6]=["", "adBGMRstWin", "adBGMRstLose"]
		this.resAudio.turn[7] =["", "adeBetLast4" ]
		this.resAudio.turn[8] =["", "adVS", ]
	
	    this.resAudio.btnClick = "adBtnClick"
	    this.resAudio.addCoin = "adAddCast"
	    this.resAudio.outCoin = "adOutCast"
	    this.resAudio.selfoutCoin = "adAddCast"
		
	    this.resAudio.bgm = {}
	    this.resAudio.bgm.normal = "admNormal"
	    this.resAudio.bgm.normal1 = "admNormal1"
	    this.resAudio.bgm.rstWin = "adBGMRstWin"
	    this.resAudio.bgm.rstLose = "adBGMRstLose"
	    this.resAudio.playcard = "adeDealCard"
		
		// this.resAudio.cardType = []
		// this.resAudio.cardType[1] = "DanZhang";//單張
		// this.resAudio.cardType[2] = "DuiZi";//對子
		// this.resAudio.cardType[3] = "DuiZi";//對子
		// this.resAudio.cardType[4] = "ShunZi";//順子
		// this.resAudio.cardType[5] = "JinHua";//金花
		// this.resAudio.cardType[6] = "ShunJin";//順子
		// this.resAudio.cardType[7] = "BaoZi";//豹子
	
	},

	// 列表中选中一首
	rand(ary){
	    return ary.length==1 && ary[1] || ary[Math.random() * ary.length + 1]
	},

	//- 播放背景音乐
	bgmNormalRandom(){
		GameG.PlayGameBGM(this.resAudio.bgm.normal1)
	},

	//- 播放背景音乐
	bgmNormal(){
	    if(this.hAudio.bgm != this.resAudio.bgm.normal ){
	        this.hAudio.bgm = this.resAudio.bgm.normal
	        GameG.PlayGameBGM(this.resAudio.bgm.normal)
	    }
	},

	//- 播放输/赢牌音乐
	bgmRst(bWin){
	    if(this.hAudio.bgm != "rst" ){
	        this.hAudio.bgm = "rst"
	        let bgm = bWin && this.resAudio.bgm.rstWin || this.resAudio.bgm.rstLose
	        GameG.PlayGameBGM(bgm)
	    }
	},

	//- 普通按钮点击音效
	btnClick(){
	    GameG.PlayGameSound(this.resAudio.btnClick, false)
	},

	//- 筹码增加音效
	addCoin(){
	    this.hAudio.addCoin = GameG.PlayGameSound(this.resAudio.addCoin, false)
	},

	//- 添加筹码音效
	outCoin(){
	    this.hAudio.addCoin = GameG.PlayGameSound(this.resAudio.outCoin, false)
	},

	//- 添加筹码音效
	thisoutCoin(){PlayGameSound
	    this.hAudio.addCoin = GameG.PlayGameSound(this.resAudio.thisoutCoin, false)
	},

	cardTypeShow(index){
		//AZLDC : 這邊於語系切換版本時拔除
		//this.hAudio.addCoin = GameG.PlayGameSound(this.resAudio.cardType[index], false);
	},

	OpenCard(){
		this.hAudio.addCoin = GameG.PlayGameSound(this.resAudio.turn[4][1], false)
	},

	PlayCard(){
		this.hAudio.addCoin = GameG.PlayGameSound(this.resAudio.playcard, false)
	},

	//- 停止开奖音效
	stopTurnStep(){
		this.hAudio.turnStep = this.hAudio.turnStep || []
		for(let _ in (this.hAudio.turnStep)){ 
			let v = this.hAudio.turnStep[_] 
			GameG.CloseLoopSound(v.res)
		}
		this.hAudio.turnStep = []
	},

	//- 播放开奖音效
	turnStep(step, args){
	    this.hAudio.turnStep = this.hAudio.turnStep || []
	    let res = this.hAudio.turnStep
	    this.stopTurnStep()
	    let tm = 0
	    if(step == 1 ){
			res[1] = {}
			res[1].res = this.resAudio.turn[1][1]
			res[1].loop = false
	  //       res[2] = {}
			// res[2].res = this.resAudio.turn[1][2]
			// res[2].loop = false
		} 
		else if( step == 2 ){
	        res[1] = {}
			res[1].res = this.resAudio.turn[2][1]
			res[1].loop = false
		}
    	else if( step == 3 ){
			res[1] = {}
			res[1].res = this.resAudio.turn[3][1]
			res[1].loop = false
			// res[2] = {}
			// res[2].res = this.resAudio.turn[3][2]
			// res[2].loop = false
		} 
    	else if( step == 4 ){
			res[1] = {}
			res[1].res = args[1] == 1 && this.resAudio.turn[4][1] || this.resAudio.turn[4][2]
			res[1].loop = false
		} 
    	else if( step == 5 ){
			res[1] = {}
			res[1].res = args[1] == 1 && this.resAudio.turn[5][1] || this.resAudio.turn[5][2]
			res[1].loop = false
		} 
    	else if( step == 6 ){
			res[1] = {}
			res[1].res = args[1] && this.resAudio.turn[6][1] || this.resAudio.turn[6][2]
			res[1].loop = false
		} 
    	else if( step == 7 ){
			res[1] = {}
			res[1].res = this.resAudio.turn[7][1]
			res[1].loop = false
		} 
    	else if( step == 8 ){
			res[1] = {}
			res[1].res = this.resAudio.turn[8][1]
			res[1].loop = false
		} 
    	else{
	        return
	    }
	    
		for(let _ in (res)){ 
			let v = res[_] 
	        GameG.PlayGameSound(v.res, v.loop)
	    }
	    if(tm && tm > 0 ){ 
			GameG.NewDelayOnce(function(){ this.stopTurnStep() }, tm, [])
		}
	}
};

module.exports = GameAudio
