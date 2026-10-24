cc.Class({
extends: cc.Component,

	properties:{

	},

	onLoad() {
		GameG.initSchedule(this)
	},

	start() {
		// 載入完圖片才開始遊戲
		GameG.InitAndLoadSprite(function(){
			//原始start改放這裡面

			networkQueue.Resume()
			UIManager.HideLoading()
		}

	},

	update(dt) {

	},

	onDestroy() {

	},
});
//----------------------------------------------------
//請將底下的程式碼轉至上方
//
// Author: xiaYu
// Date: 2017-09-5 15:29:13
//
var G = require("Global")
require("FFunction")
var _tbREGMSG_Room = G.GetGamePName()
/* 按键功能 ]]////////////////////////
//-[[功能]]//////
//网络消息
/* 桌子消息 ]]//////////////////////////
//Room
//G.Service.Game.RegUserEnterMsg( function( st )
//    print("================================玩家进入]",st)
//    //fpack(st)
//end)
//G.Service.Game.RegUserStateChangeMsg( function( st )
//	print("================================玩家状态改变]")
//	//fpack(st)
//end)
//G.Service.Game.RegGameStartMsg( function( st )
//	print("================================游戏开始]")
//	//fpack(st)
//end)
//G.Service.Game.RegGameEndMsg( function( st )
//	 print("================================游戏结束]")
//    //fpack(st)
//end)
//G.Service.Game.RegUserLeaveMsg( function( st )
//	print("================================用户离开]")
//    //fpack(st)
//end)
//10001 =游戏
/* 游戏命令 ]]//////////////////////////
////////////////////////////////-
//////////////////-

var GameStart = {
	extends: cc.Component,

//////-
////////////////////////////////////////////////////////////
	Awake(  ){
	////[初始化,取值]//////-
	//print("===================================>>Awake()")
		
	},

	Start(  ){
	
	//print("===================================>>Start()")
	///*等待分配]]
//	G.Tool.Sound.PlayGameBGM("Muisc")
	    fmg.hLuaGame = this
	    require("GameScene"):new()	
		
	    console.log("<color=00FFFF.length>ftest2 Resume clock="+(os.clock())+";data="+(os.date("%M:%S"))+"</color>")
	//CS.UILoadingData.Show("正在分配座位……")
		G.NetQ.Resume()
	    
	    if(hhdz.svrData.HHDZSettingID == null ){ hhdz.gameScene:hold("等待游戏开始……", 30) }
	
	},

	initUI(  ){
	},

//退出
	OnDestroy(  ){
		console.log("================地球出现怪兽 @奥特曼~~~~")
	
	    hhdz.gameScene:onExit()
	
	//清除消息
		G.NetQ.RemoveMsgHookByGroup(NetMsgList)
	},

//
//游戏场断线
//调用此方法清理界面
	G.Service.Game.RegNotifyGameSceneInit(function( ... ){
	//清理椅子数据
		
	//-清理桌子
	//>>>>
		initUI()
	},
)
//- 每帧更新
	Update(  ){
	
//	hhdz.gameControl:test()      // ftest1
	
	},


};

module.exports = GameStart
