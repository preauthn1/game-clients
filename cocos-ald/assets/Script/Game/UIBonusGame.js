/** 用途: 遊戲類型-獎勵遊戲介面 */
var UIBonusGame = {
	extends: cc.Component,

//離開遊戲
	onExit(){
			
	},

	Init(root){
		
	},

// 回合開始
	SetGameStart(){
	
	},

// 回合結束
	SetGameEnd(){
	
	},

//取得可以選擇的索引
	GetCanChooseIndex(){
	
	},

//自動選擇
	StartAutoChoose(){	
	
	},

// 開始倒數
	StartCountdown(delayCountdown){

	},

//關閉計時器
	CloseCountdown(){
	
	},

//表演
	Show(initPosition, delayCountdown, callback){
		if(callback != null)
			callback()
	},

// 開啟糖果
	OpenCandy(index, value, isPlayerOpen){
	
	},

//按下選擇次數按鈕
	OnClickChooseBtn(tempIndex,isPlayer){	
	
	},

// 關閉介面
	Hide(){
	
	},

//重置總分
	ResetTotalScore(){
	
	},

//增加總分
	AddTotalScore(rewareValue){

	},

//更新總分
	UpdateTotalScore(){
	
	},

//重置選擇次數
	ResetChooseCount(){
	
	},

//增加選擇次數
	AddChooseCount(value){
	
	},

//更新選擇次數文字
	UpdateChooseCountText(){
	
	},

//取得選擇次數是否用完
	GetChooseCountEnd(){
		
	},

//選擇糖果完成
	SelectCandyComplete(){
	
	},

	ShowMoney(){	
		
	},


};

module.exports = UIBonusGame
