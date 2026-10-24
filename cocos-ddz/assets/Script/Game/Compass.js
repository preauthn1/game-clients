var G = require("Global")
var GData = require("GData")
var GameG = require("GameGlobal")

var Compass = {
	extends: cc.Component,

	//[[ 初始化 ]]//////////////////////
	Init(  ){
		this.root = null
		this.nDir = -1
		this.fTime = 30
		this.funTimeOut = null
		this.sequence = null
		this.seqAni3 = null
	},

	SetRoot( _node ){
		this.root = _node
		this.tfTime = cc.find("text",_node).getComponent(cc.Label)
	},

	Hide(  ){
		this.root.active =(false)
	},

	Show(  ){
		this.root.active =(true)
	},

	onDestroy(  ){
		if(this.sequence!=null){
			this.sequence.stop()
		}
		if(this.this.seqAni3!=null){
			this.seqAni3.stop()
		}
	},

	SetInning( n_count ){

	},

	//设置庄家
	SetBanker( n_index ){

	},

	SetDir( n_index ){
		let chair = GData.GetViewChair(n_index)
		let node = chair.NodeNZ
		let wpos = node.position
		if(GData.cbGameStatus== GEnum.GameStatus.kGSJiaoPai
			|| GData.cbGameStatus== GEnum.GameStatus.kGSMIngPai
			|| GData.cbGameStatus== GEnum.GameStatus.kGSQiangDizhu && chair.nIndex==1)
		{
			let loc = GData.WorldToScreenPoint( node.position )
			let offx = GData.cbGameStatus== GEnum.GameStatus.kGSMIngPai && 85 || 70
			wpos =  GData.ScreenToWorldPoint([x=loc.x+(offx*GData.winScale.min),y=loc.y,z=10.0])
	
		}
		this.root.DOMove(wpos, 0.3)
	},

	// [[ 功能 ]]////////////////
	//设置时间
	SetActionTime( n_time ){
		if(n_time < 0){
			this.tfTime.string = "0"
			return
		}
	
		this.tfTime.string = (n_time).toString()
		this.remove_Ani3()
		this.fTime = n_time
	
		if(this.sequence!=null){ return }
	
	//----->需重新編譯程式碼	this.sequence = CS.DG.Tweening.DOTween.Sequence()
	//----->需重新編譯程式碼	this.sequence:Append(this.tfTime:DOScale(cc.v3(1.0, 1.0, 1.0), 0))
	//----->需重新編譯程式碼	this.sequence:AppendCallback(function(  ){
	//----->需重新編譯程式碼		this:Updata()
	//----->需重新編譯程式碼	})
	//----->需重新編譯程式碼	this.sequence:AppendInterval(1.0);
	//----->需重新編譯程式碼	this.sequence:SetEase(CS.DG.Tweening.Ease.Linear):SetLoops(-1);
	},

	//时间倒计时
	updata( f_dt ){
		if(this.fTime<0){
			return
		}
		this.fTime = this.fTime - 1
		if(this.fTime >=0){
		//this:SetActionTime(this.fTime)
			this.tfTime.string = (this.fTime).toString()
//----->需重新編譯程式碼		// this.sequence:SetEase(CS.DG.Tweening.Ease.Linear):SetLoops(0);
		}

		if(this.fTime==3){
			this.Tips_Ani3()
			GameG.PlayGameSound("tips")
		}
		if(this.fTime < 0){
			this.remove_Ani3()
		}
	},

	Tips_Ani3(){
	//----->需重新編譯程式碼	this.seqAni3 = CS.DG.Tweening.DOTween.Sequence()
	//----->需重新編譯程式碼	this.seqAni3:Append(this.root:DORotate(cc.v3(1.0, 1.0, 0), 0.02))
	//----->需重新編譯程式碼	this.seqAni3:Append(this.root:DORotate(cc.v3(1.0, 1.0, -5), 0.02))
	//----->需重新編譯程式碼	this.seqAni3:Append(this.root:DORotate(cc.v3(1.0, 1.0, 0), 0.02))
	//----->需重新編譯程式碼	this.seqAni3:Append(this.root:DORotate(cc.v3(1.0, 1.0, -5), 0.02))
	//----->需重新編譯程式碼	this.seqAni3:Append(this.root:DORotate(cc.v3(1.0, 1.0, 0), 0.02))
	//----->需重新編譯程式碼	this.seqAni3:SetEase(CS.DG.Tweening.Ease.Linear):SetLoops(-1);
	},

	remove_Ani3(  ){
		if(this.seqAni3!=null){ 
			this.seqAni3.stop()
		}
	//还原
		this.root.DORotate(cc.v3(1.0, 1.0, 0), 0)
	},


};

module.exports = Compass
