//Date
//此文件由[BabeLua]插件自动生成
//endregion
var G = require("Global")
var GameG = require("GameGlobal")

var GameAudio = {
	extends: cc.Component,

//- 析构
	onExit(){
    //GameG.CloseSound()
	},

//- 初始化数据
	initData(){	    
	    this.hAudio = {}        // 播放音效句柄
	    this.resAudio = {}      // 音效资源
	    this.resAudio.turn = []
	    // this.resAudio.turn[1] = ["","Betbegin", "adeBetBegin",],//開始下注
	    this.resAudio.turn[2] = ["","adeBetBg", ],//沒這東西??
	    this.resAudio.turn[3] = ["","adeBetLast4", ],
	    // this.resAudio.turn[4] = ["","BetEnd", "adeBetEndMan", ],//結束下注
	    this.resAudio.turn[5] = ["","adeXiuXiu", ],//沒這東西??
	    // this.resAudio.turn[6] = ["","adeRstWinMan", "adeRstLoseMan", ],
	    this.resAudio.turn[7] = ["","adeCharge", ],
	    this.resAudio.turn[8] = ["","card"],
	    // this.resAudio.turn[9] = ["","adeShowPoint"],
	    // this.resAudio.turn[10] = ["","adeShowFan"],
	    // this.resAudio.turn[11] = ["","adeCompRst"],
	    // this.resAudio.turn[12] = ["player","banker"],
	    // this.resAudio.turn[14] = ["PlayerPair","BankerPair"],
	    // this.resAudio.turn[15] = ["", "player_win","banker_win","tie"],
		// this.resAudio.turn[16] = ["0p","1p","2p","3p","4p","5p","6p","7p","8p","9p",]
			
		this.resAudio.click = "adBtnClick";
		this.resAudio.flyMoneyNum = "coin";
		this.resAudio.clickChip = "adeClickChip";//沒這東西??
	    this.resAudio.flyCast = "adeFlyCast";//沒這東西??
	    this.resAudio.dealCard = "card";
	    this.resAudio.compareRst = "adeCompareRst";//沒這東西??
		this.resAudio.addCoin = "chip";
		this.resAudio.outCast = "chip";
		// this.resAudio.dealVoice = "deal_voice"
		this.resAudio.countdown = "countdown";
		// this.resAudio.draw = "draw"
		
	    this.resAudio.bgm = {}
	    this.resAudio.bgm.normal = "main";
	    this.resAudio.bgm.compare = "admCompare";//沒這東西??
	    this.resAudio.bgm.rstWin = "adeFlyWinCoin";//沒這東西??
	    this.resAudio.bgm.rstLose = "adeFlyWinCoin";//沒這東西??
		
		this.hAudio.turnStep = []

	    this.resAudio.Result = "show";
		
	},

	// 列表中选中一首
	 rand (ary){
	    return ary.length==1 && ary[1] || ary[Math.random()*ary.length + 1]
	},

	//- 设置音效状态
	soundState(bOn){
	    if(bOn ){
	        if(gameData.dtBetState == 0 ){
	            this.eStartBetBg()
	        }
		} 
		else{
			//GameG.CloseSound()
			this.eStopBetBg()
		}
	},

	//- 播放背景音乐
	bgmNormal(){
	    if(this.hAudio.bgm != this.resAudio.bgm.normal ){
	        this.hAudio.bgm = this.resAudio.bgm.normal
	        GameG.PlayGameBGM(this.resAudio.bgm.normal)
	    }
	},

	//- 普通按钮点击音效
	btnClick(){
    	//G.Tool.Sound.PlayGameSound("button")
	    //GameG.PlayGameSound("ButtonClick", false)
		//GameG.PlayGameSound(this.resAudio.btnClick, false)
		GameG.PlayGameSound(this.resAudio.click, false)		
	},

	//- 停止开奖音效
	stopTurnStep(){
	    if(this.hAudio.turnStep){
	        this.hAudio.turnStep = this.hAudio.turnStep || []
			for(let _ in (this.hAudio.turnStep)){ 
				let v = this.hAudio.turnStep[_] 

	            if(v.loop ){
	                GameG.CloseLoopSound(v.res)
	            }
	        }
	        this.hAudio.turnStep = []
	    }
	},

	//- 播放开奖音效
	turnStep(step, args){	
	    this.hAudio.turnStep = this.hAudio.turnStep || []
	    this.stopTurnStep()
	    this.hAudio.turnStep = []
	    let res = this.hAudio.turnStep
	    
	    let loop = false
	    let tm = 0
	    if(step == 1 ){
			// res[1] = {}
	  //       res[1].res = this.resAudio.turn[1][1]
			// res[1].loop = false
			// res[1].bgm = false
	        // res[2] = {}
			// res[2].res = this.resAudio.turn[1][2]
			// res[2].loop = false
			// res[2].bgm = false
		} 
		else if(step == 2 ){
			res[1] = {}
			res[1].res = this.resAudio.turn[2][1]
			res[1].loop = true
		} 
		else if(step == 3 ){
			res[1] = {}
			res[1].res = this.resAudio.turn[3][1]
			res[1].loop = false
		} 
		else if(step == 4 ){
			// res[1] = {}
			// res[1].res = this.resAudio.turn[4][1]
			// res[1].loop = false
			// res[1].bgm = false
			// res[2] = {}
			// res[2].res = this.resAudio.turn[4][2]
			// res[2].loop = false
			// res[2].bgm = false
		} 
		else if(step == 5 ){
			res[1] = args[1] && [res = this.resAudio.turn[5][1], loop = false, bgm = false] || []
		} 
		else if(step == 6 ){
			// res[1] = [res = args[1] && this.resAudio.turn[6][1] || this.resAudio.turn[6][2], loop = false]
		} 
		else if(step == 7 ){
			res[1] = {}
			res[1].res = this.resAudio.turn[7][1]
			res[1].loop = false
			res[1].bgm = false
		} 
		else if(step == 8 ){
			res[1] = {}
			res[1].res = this.resAudio.turn[8][1]
			res[1].loop = false
			res[1].bgm = false
		} 
		else if(step == 9 ){
			// res[1] = {}
			// res[1].res = this.resAudio.turn[9][1]
			// res[1].loop = false
			// res[1].bgm = false
		} 
		else if(step == 10 ){
			// res[1] = args[1] && [res = this.resAudio.turn[10][1], loop = false, bgm = false] || []
		} 
		else if(step == 11 ){
	  //       res[1] = {}
			// res[1].res = this.resAudio.turn[11][1]
			// res[1].loop = false
			// res[1].bgm = false
	    }
	    
	    this.hAudio.turnStep = res
		for(let _ in (res)){ 
			let v = res[_] 

	        if(v.res ){
	            if(v.bgm ){
	                GameG.PlayGameBGM(v.res)
			} 
            else{
	                GameG.PlayGameSound(v.res, v.loop)
	            }
	        }
	    }
	    if(tm && tm > 0 ){
			GameG.NewDelayOnce(function(){ this.stopTurnStep() }, tm, "stopTurnStep")
			//fmg.delayFunc(function(adt){ this.stopTurnStep() }, tm, [])
		}
	},

	//- 播放比牌背景音乐
	mCompare(){
	    if(this.hAudio.bgm != this.resAudio.bgm.compare ){
	        this.hAudio.bgm = this.resAudio.bgm.compare;//沒這東西??
	        GameG.PlayGameBGM(this.hAudio.bgm)
	    }
	},

	//- 播放背景音乐
	bgmRst(bWin){
	    if(this.hAudio.bgm != this.resAudio.bgm.rstWin ){//沒這東西??
	        this.hAudio.bgm = bWin && this.resAudio.bgm.rstWin || this.resAudio.bgm.rstLose
        //GameG.PlayGameBGM(this.hAudio.bgm)
	        GameG.PlayGameSound(this.hAudio.bgm, false)
	    }
	},

	//- 增加金币的飘数字动画
	eFlyMoneyNum(bPlay){
	    if(bPlay != null){
			return 
		}
	    GameG.PlayGameSound(this.resAudio.flyMoneyNum, false)
	},

	//- 选中下注倍数
	eClickChip(){//沒這東西??
	    GameG.PlayGameSound(this.resAudio.clickChip, false)
	},

	//- 下注飞筹码
	eFlyCast(){//沒這東西??
	    GameG.PlayGameSound(this.resAudio.flyCast, false)
	},

	//- 发牌音效
	eDealCard(){
	    GameG.PlayGameSound(this.resAudio.dealCard, false)
	},

	//- 发牌語音
	eDealVoice(){
		// GameG.PlayGameSound(this.resAudio.dealVoice, false)
	},
	
	//- 補牌
	eDealDraw(){
		// GameG.PlayGameSound(this.resAudio.draw, false)
	},

	//- 比牌结果
	eCompareRst(){//沒這東西??
	    GameG.PlayGameSound(this.resAudio.compareRst, false)
	},

	//- 开始下注背景嘈声
	eStartBetBg(){
	    GameG.PlayGameSound(this.resAudio.turn[2][1], true)
	},

	//- 停止下注背景嘈声
	eStopBetBg(){
	    GameG.CloseLoopSound(this.resAudio.turn[2][1])
	},

	//- 筹码增加音效
	addCoin(){
	    this.hAudio.addCoin = GameG.PlayGameSound(this.resAudio.addCoin, false)
	},

	//- 添加筹码音效
	outCast(){
	    this.hAudio.addCoin = GameG.PlayGameSound(this.resAudio.outCast, false)
	},

	//- 播放庄閒
	ePlayPlayerOrBank(Number){
	    // GameG.PlayGameSound(this.resAudio.turn[12][Number], false)
	},

	//- 播放庄閒對
	ePlayPlayerOrBankPair(Number){
	    // GameG.PlayGameSound(this.resAudio.turn[14][Number], false)
	},

	//- 播放庄閒贏
	ePlayPlayerOrBankWin(Number){
	    // GameG.PlayGameSound(this.resAudio.turn[15][Number], false)
	},

	//- 播放號碼
	ePlayNumber(Number){
	    // GameG.PlayGameSound(this.resAudio.turn[16][Number], false)
	},

	//- 播放結果音效
	ePlayResult(){
	    GameG.PlayGameSound(this.resAudio.Result, false)
	},
	
	//- 播放結果音效
	ePlayCountdown(){
		GameG.PlayGameSound(this.resAudio.countdown, false)
	},
};

module.exports = GameAudio
