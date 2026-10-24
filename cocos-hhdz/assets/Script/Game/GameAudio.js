//region *.lua
//Date
//此文件由[BabeLua]插件自动生成
//endregion
var G = require("Global")
var GameAudio = fmg.class("GameAudio")

var GameAudio = {
	extends: cc.Component,

//- 构造
	GameAudio:ctor(){
	    self:initData()
	},

//- 析构
	GameAudio:onExit(){
	    if(CS.SoundManager==null || CS.SoundManager.Instance==null ){ return }
	    SoundManager.GetComponent(typeof(CS.UnityEngine.AudioSource)):Stop()
    //G.Tool.Sound.CloseSound()
	},

//- 初始化数据
	GameAudio:initData(){
	    
	    self.hAudio = []        // 播放音效句柄
	    self.resAudio = []      // 音效资源
	
	    self.resAudio.turn = [
	        [1]=["adBetStart", "adBetStartMan"],
	        [2]=["adBetLast3"],
	        [3]=["adBetStop", "adBetStopMan"],
	        [4]=["adTurnCardDeal", "adTurnCardShow"],
	        [5]=["adRst", "adRstTitle"],
	        [6]=["adBGMRstWin", "adBGMRstLose"],
	        [7] =["adeBetLast4", ],
	        [8] =["adVS", ],
	    ]
	
	    self.resAudio.btnClick = "adBtnClick"
	    self.resAudio.addCoin = "adAddCast"
	    self.resAudio.outCoin = "adOutCast"
	    self.resAudio.selfoutCoin = "adAddCast"
		
	    self.resAudio.bgm = []
	    self.resAudio.bgm.openCard = "adBGMTurnCardOpen"
	    self.resAudio.bgm.normal = "admNormal"
	    self.resAudio.bgm.normal1 = "admNormal1"
	    self.resAudio.bgm.normal2 = "admNormal2"
	    self.resAudio.bgm.rstWin = "adBGMRstWin"
	    self.resAudio.bgm.rstLose = "adBGMRstLose"
	     self.resAudio.playcard = "adeDealCard"
	
	    self.resAudio.cardType=[
	    
	    [1] = "DanZhang",
	    [2] = "DuiZi",
	    [3] = "DuiZi",
	    [4] = "ShunZi",
	    [5] = "JinHua",
	    [6] = "ShunJin",
	    [7] = "BaoZi"
	    
	   
	    ]
	
	},

// 列表中选中一首
	rand(ary){
	    return ary.length==1 && ary[1] || ary[math.random(1,ary.length)]
	},

//- 播放背景音乐
	GameAudio:bgmNormalRandom(){
		let bgm	
		if(math.random(0,10) > 5 ){
			bgm = self.resAudio.bgm.normal1
	} 
	else{
			bgm = self.resAudio.bgm.normal2
		}
	
		SoundManager.PlayBGM(G.GetGamePName(), bgm)
	},

//- 播放背景音乐
	GameAudio:bgmNormal(){
	    if(self.hAudio.bgm != self.resAudio.bgm.normal ){
	        self.hAudio.bgm = self.resAudio.bgm.normal
	        SoundManager.PlayBGM(G.GetGamePName(), self.resAudio.bgm.normal)
	    }
	},

//- 播放开牌音乐
	GameAudio:bgmOpenCard(){
	    if(self.hAudio.bgm != self.resAudio.bgm.openCard ){
	        self.hAudio.bgm = self.resAudio.bgm.openCard
	        SoundManager.PlayBGM(G.GetGamePName(), self.resAudio.bgm.openCard)
	    }
	},

//- 播放输/赢牌音乐
	GameAudio:bgmRst(bWin){
	    if(self.hAudio.bgm != "rst" ){
	        self.hAudio.bgm = "rst"
	        let bgm = bWin && self.resAudio.bgm.rstWin || self.resAudio.bgm.rstLose
	        SoundManager.PlayBGM(G.GetGamePName(), bgm)
	    }
	},

//- 普通按钮点击音效
	GameAudio:btnClick(){
    //G.Tool.Sound.PlayGameSound("button")
    //CS.SoundManager.Instance:PlaySound(CS.AppDefine.HallNumber, "ButtonClick", false)
	    SoundManager.PlaySound(G.GetGamePName(), self.resAudio.btnClick, false)
	},

//- 筹码增加音效
	GameAudio:addCoin(){
	    self.hAudio.addCoin = SoundManager.PlaySound(G.GetGamePName(), self.resAudio.addCoin, false)
	},

//- 添加筹码音效
	GameAudio:outCoin(){
	    self.hAudio.addCoin = SoundManager.PlaySound(G.GetGamePName(), self.resAudio.outCoin, false)
	},

//- 添加筹码音效
	GameAudio:selfoutCoin(){
	    self.hAudio.addCoin = SoundManager.PlaySound(G.GetGamePName(), self.resAudio.selfoutCoin, false)
	},

	GameAudio:cardTypeShow(index){
	
	   self.hAudio.addCoin = SoundManager.PlaySound(G.GetGamePName(), self.resAudio.cardType[index], false)
	},

	GameAudio:OpenCard(){
	
	   self.hAudio.addCoin = SoundManager.PlaySound(G.GetGamePName(),  self.resAudio.turn[4][1], false)
	},

	GameAudio:PlayCard(){
	
	   self.hAudio.addCoin = SoundManager.PlaySound(G.GetGamePName(),  self.resAudio.playcard, false)
	},

//- 停止开奖音效
	GameAudio:stopTurnStep(){
	    if(self.hAudio.turnStep && CS.SoundManager!=null && CS.SoundManager.Instance!=null ){
	        self.hAudio.turnStep = self.hAudio.turnStep || []
	for(let _ in (self.hAudio.turnStep)){ 
	let v = self.hAudio.turnStep[_] 

	            SoundManager.CloseLoopSound(v.res)
	        }
	        self.hAudio.turnStep = []
	    }
	},

//- 播放开奖音效
	GameAudio:turnStep(step, args){
	    if(CS.SoundManager==null || CS.SoundManager.Instance==null ){ return }
	    self.hAudio.turnStep = self.hAudio.turnStep || []
	    let res = self.hAudio.turnStep
	    self:stopTurnStep()
	    SoundManager.GetComponent(typeof(CS.UnityEngine.AudioSource)):Stop()
	    
	    let loop = false
	    let tm = 0
	    if(step == 1 ){
	        res[1] = [res = self.resAudio.turn[1][1], loop = false]
	        res[2] = [res = self.resAudio.turn[1][2], loop = false]
	} 
    else if( step == 2 ){

	        res[1] = [res = self.resAudio.turn[2][1], loop = false]
	} 
    else if( step == 3 ){

	        res[1] = [res = self.resAudio.turn[3][1], loop = false]
	        res[2] = [res = self.resAudio.turn[3][2], loop = false]
	} 
    else if( step == 4 ){

	        res[1] = [res = args[1] == 1 && self.resAudio.turn[4][1] || self.resAudio.turn[4][2], loop = false]
	} 
    else if( step == 5 ){

	        res[1] = [res = args[1] == 1 && self.resAudio.turn[5][1] || self.resAudio.turn[5][2], loop = false]
	} 
    else if( step == 6 ){

	        res[1] = [res = args[1] && self.resAudio.turn[6][1] || self.resAudio.turn[6][2], loop = false]
	} 
    else if( step == 7 ){

	        res[1] = [res = self.resAudio.turn[7][1], loop = false]
	} 
    else if( step == 8 ){

	        res[1] = [res = self.resAudio.turn[8][1], loop = false]				
	} 
    else{
	        return
	    }
	    
	for(let _ in (res)){ 
	let v = res[_] 

	        SoundManager.PlaySound(G.GetGamePName(), v.res, v.loop)
	    }
	    if(tm && tm > 0 ){ fmg.delayFunc(function(adt){ hhdz.gameAudio:stopTurnStep() }, tm, []) }
	
	}
	
	return GameAudio

};

module.exports = GameAudio
