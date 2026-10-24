var GEnum = {
	extends: cc.Component,

	ator(){
		this.PKOperType = {};
		this.PKOperType.kGSNone = 0;		////0 无
		this.PKOperType.kGSOne = 1;			////单 牌
		this.PKOperType.kGSTwo = 2;			////对 子
		this.PKOperType.kGSThree = 3;		////三张牌
		this.PKOperType.kGSBomb = 4;		////炸 弹
		
		//[[其它]]//////////////
		this.PKOperType.kGSShunZi = 5;
		this.PKOperType.KGSLianDui = 6;
		this.PKOperType.KGSFeiJi = 7;
		this.PKOperType.KGSFJCP = 8;
		this.PKOperType.KGSSD2 = 9;
		this.PKOperType.KGSWZ = 10;
		
		//[[游戏,状态]]//////////////-
		this.GameStatus = {};
		this.GameStatus.kGSNone = -1;	    ////-1 无
		this.GameStatus.kGSReady = 1;	    ////0 准备阶段
		////////-
		this.GameStatus.kGSBegin = 2;		////游戏开始
		this.GameStatus.kGSFaPai_1 = 3;		////发 牌
		this.GameStatus.kGSJiaoPai = 4;		////叫 牌
		this.GameStatus.kGSQiangDizhu = 5;		////抢地主
		this.GameStatus.kGSMIngPai = 6;			////明 牌
		this.GameStatus.kGSChuPai_1 = 7;		////出 牌
		////////-[结算 阶段]//////////-
		this.GameStatus.kGSResult_1 = 8;		////结 束
		////////-[其它 阶段]//////////-
		this.GameStatus.kGSAnimationOver_1;////动画结束
		this.GameStatus.kGSMax;			////最大事件ID(不能超过 199)
		
		//[[用户状态]]//-
		this.UserStatus = {};
		this.UserStatus.US_NULL = -1; //没有状态
		this.UserStatus.US_FREE = 0; //站立状态
		this.UserStatus.US_WAIT = 1; //排队
		this.UserStatus.US_SIT = 2; //坐下状态
		this.UserStatus.US_JUSHOU = 3; //举手状态
		this.UserStatus.US_PLAYING = 4; //游戏状态
		this.UserStatus.US_OFFLINE = 5; //断线状态

		//[[组合,牌型]]////////-
		this.PkOper = {};
		this.PkOper.Pass = 0; 		////过牌
		this.PkOper.OutOper	= 1; 		////出牌
		this.PkOper.HintOper = 2; 		////提示

		this.MAX_INDEX = 20 //17+3
		this.MAX_INDEX_ZI = 16 //字牌最大索引(17*3)
	},

};

module.exports = GEnum
