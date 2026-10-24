var G = require("Global")
var GData = require("GData")
var GameG = require("GameGlobal")
var GameService = null

var ResultOneLayer = {
	extends: cc.Component,

	Init( node_init, parm ){
		GameService = require("GameService")
		
		this.parm = parm
		this.node_root = node_init
		this.nodeChairs = []
		this.stData = null
	
		//[[取值]]//
		this.nodeChairs.push(cc.find("Panel/Node_1",node_init))
		this.nodeChairs.push(cc.find("Panel/Node_2",node_init))
		this.nodeChairs.push(cc.find("Panel/Node_3",node_init))
	
		//Button
		let BtnClose = cc.find("Panel/Button_Close",node_init).getComponent(cc.Button)
		let BtnHZYx = cc.find("Panel/Button_ZHKS",node_init).getComponent(cc.Button)
		let BtnJxGame = cc.find("Panel/Button_JXYX",node_init).getComponent(cc.Button)
	
		this.text_ = cc.find("Panel/Time",node_init).getComponent(cc.Label)
		this.Node_Win = cc.find("Panel/Node_win",node_init)
		this.Node_fail = cc.find("Panel/Node_fail",node_init)
		this.Player = cc.find("Panel/Img_Head",node_init)
	
		BtnClose.node.on('click', this.Click_Close, this)
		BtnHZYx.node.on('click', this.Click_ChangeTb, this)
		BtnJxGame.node.on('click', this.Click_Continue, this)
		
		this.Dialog = cc.find("Panel/DialogBox",node_init)
	
		this.sequence = null
		this.countDown = null
	},

	IsData(){
		return this.stData
	},

	ClearTime(){
		if(this.sequence){
			this.sequence.stop()
		}
	
		if (this.countDown != null)
	    	GameG.RemoveCountDown(this.countDown)
	},

	ReadyTime(){	
		if(this.sequence){
			this.sequence.stop()
		}
		
		this.text_.string = "_:"+GData.stDeskConfig.nGameOvertime
	    if(GData.stDeskConfig.nGameOvertime<1){ return
	    }
	
		if (this.countDown != null)
			GameG.RemoveCountDown(this.countDown)

		let time = GData.stDeskConfig.nGameOvertime
		this.countDown = GameG.StartCountDown(this.node, 0.1, function( ){
			let dt = time - 0.1
			this.text_.string = dt.toString()
		},1.0)
	},

	SetData( p_msg ){
		if(p_msg.length ==null){ return }
	
		this.stData = p_msg
		this.InitData( p_msg )
	},

	Show(){
		this.node_root.active =(this.stData!=null)
	},

	Hide(){
		this.node_root.active =(false)
	},

	InitData( p_msg ){
		cc.find("Node_Down/Text_Beishu", this.node_root.parent).getComponent(cc.Label).string="0";
		cc.find("Node_Down/Text_Beishu", this.node_root.parent).getComponent(cc.Label).node.active =(false) 
		cc.find("Node_Down/Bg_beishu", this.node_root.parent).getComponent(cc.Sprite).node.active =(false) ;
		cc.find("Node_Down/Img_beishumax", this.node_root.parent).getComponent(cc.Sprite).node.active =(false) ;

		//显示输赢
		let uid = G.User.GetCurrentUser().UserID
		let bWin = false
		for(let i in (p_msg.Settlement)){ 
			let chair = p_msg.Settlement[i] 
			if(chair.UserId == uid){
				if(chair.Money >0){
					bWin = true
				}
			}
		}
		if( bWin ){
			//print("================================播放胜利音乐")
		} 
		else{
			//print("================================播放失败音乐")
		}

		this.Node_Win.active =( bWin)
		this.Node_fail.active =( !bWin)

		for(let  i = 1;  i <= GData.PLAY_NUM; ++ i){
			this.InitChairData(i, p_msg)
		}
	},

	InitChairData( n_index, p_msg ){
		let root = this.nodeChairs[n_index]
		let chairData = p_msg.Settlement[n_index]
		//设置值
		cc.find("Text_name", root).getComponent(cc.Label).string =chairData,root.UserId
		cc.find("Text_gold", root).getComponent(cc.Label).string = G.Tool.U,rootserHelper.ToCash(chairData.Money)
	
		let imageLandlord = cc.find("Image_landlord",root) //地主
		let imagePoChan = cc.find("Image_fall",root) //破产
		
		let bSelf = (chairData.UserId == G.User.GetCurrentUserID()) && true || false
		let color = (bSelf==true) && cc.Color.yellow || cc.Color.white
		//字体颜色
		cc.find("Text_name", root).getComponent(cc.Label).node.color = color
		cc.find("Text_gold", root).getComponent(cc.Label).node.color = color
		
		imageLandlord.active =(chairData.IsDiZhu)//地主
		imagePoChan.active =(chairData.Bankruptcy)
	
		for(let  i = 1;  i <= GData.PLAY_NUM; ++ i){
		}
	    let sig=p_msg.Calculation==0 && "+" || "X"   
		let MaxBs=parseInt(GData.stDeskConfig.nGameMaxBeishu) < 999
    	//详情
		let node = cc.find("Text",this.Dialog)
	    
	    cc.find("Text_difdu", this.Dialog).getComponent(cc.Label).string = (sig+"1" ).toString()
	
    	//王炸
	    cc.find("Text_wangzha", node).active =( parseInt(p_msg.Rocket ) > 0)
		cc.find("Text_wangzha", node).getComponent(cc.Label).string = (sig+p_msg.Rocket ).toString()
    	//炸弹
	    cc.find("Text_bomb", node).active =( parseInt(p_msg.ZhaDanOdds) > 0)
		cc.find("Text_bomb", node).getComponent(cc.Label).string = (sig+p_msg.ZhaDanOdds).toString()
		//明牌
	    cc.find("Text_mingpai", node).active =( parseInt(p_msg.MingPaiOdds) > 0)
		cc.find("Text_mingpai", node).getComponent(cc.Label).string = (sig+p_msg.MingPaiOdds).toString()
		//叫地主
	    cc.find("Text_jiaodizhu", node).active =( parseInt(p_msg.JiaoDiZhuOdds) > 0)
		cc.find("Text_jiaodizhu", node).getComponent(cc.Label).string = (sig+p_msg.JiaoDiZhuOdds).toString()
		//底牌
	    cc.find("Text_dipai", node).active =( parseInt(p_msg.DiZhuCardTypeOdds) > 0)
		cc.find("Text_dipai", node).getComponent(cc.Label).string = (sig+p_msg.DiZhuCardTypeOdds).toString()
		//抢地主
	    cc.find("Text_qdizhu", node).active =( parseInt(p_msg.QiangDiZhuOdds) > 0)
		cc.find("Text_qdizhu", node).getComponent(cc.Label).string = (sig+p_msg.QiangDiZhuOdds).toString()
		//春天
	    cc.find("Text_chuntian", node).active =( parseInt(p_msg.ChunTianOdds) > 0)
		cc.find("Text_chuntian", node).getComponent(cc.Label).string = (sig+p_msg.ChunTianOdds).toString()
   		//反春天
		cc.find("Text_fanchuntian", node).active =( parseInt(p_msg.FanChunTianOdds ) > 0)
		cc.find("Text_fanchuntian", node).getComponent(cc.Label).string = (sig+p_msg.FanChunTianOdds ).toString()
		//公共倍数
	    cc.find("Text_bs1", this.Dialog).active =( parseInt(p_msg.TotalOdds) > 0)
	    cc.find("Text_bs1", this.Dialog).getComponent(cc.Label).string = tostrin,this.Dialogg((MaxBs && p_msg.TotalOdds>=GData.stDeskConfig.nGameMaxBeishu) && GData.stDeskConfig.nGameMaxBeishu || p_msg.TotalOdds)
    	//公共倍数
	    cc.find("Text_maxbs", this.Dialog).active =( MaxBs)
		cc.find("Text_maxbs", this.Dialog).getComponent(cc.Label).string = string.fo,this.Dialogrmat("最大倍率%s倍",GData.stDeskConfig.nGameMaxBeishu)
		//底分
		cc.find("Text_difen", node.parent).getComponent(cc.Label).string = G.Tool.UserHelper.ToCash(p_msg.BaseScore)
		//得分
		let totalScore = p_msg.TotalOdds * p_msg.BaseScore //(总倍数乘以底分)
		cc.find("Text_totalbeishu", node.parent).getComponent(cc.Label).string = G.Tool.UserHelper.ToCash(totalScore)
	
	
		//显示地主
		if(bSelf && chairData.IsDiZhu){

		} 
		else{

		}
		//破产提示
		cc.find("bg_dialog", this.Dialog).active =(chairDat,this.Dialoga.Bankruptcy)
	},

	selfResultInfo(  ){

	},

	//[[ 头像设置 ]]//////////-
	SetHeadImage( n_Sex, bWin ){

	},

	//[[按钮 事件]]////-
	//关闭
	Click_Close( pSender ){
		this.Hide()
		
		G.Service.Game.ExitGame()
	},

	//换桌
	Click_ChangeTb( pSender ){
		this.Hide()
		GameService.ChangeDesk()
	},

	//继续
	Click_Continue( pSender ){
		this.Hide()
		GameService.ReadyGame()
	
	    this.parm.pCompass.Hide()
	    this.parm.pOper1.active =(false)
		this.parm.pOper2.active =(false)
		this.parm.pOper3.active =(false)
		this.parm.pOper4.active =(false)
		this.parm.Pane1.active =(false)
		this.parm.pOper7.active =(false)
		//清除椅子
		for(let i in (GData.Chairs)){ 
			let chair = GData.Chairs[i] 
	    	chair.ClearAni()
	    	chair.ClearPanel1()
			chair.ClearPanel2()
			chair.PassOper(false)
			chair.DelHandCard()
			if(i >1){
				chair.CardBlack.active =(false)
			}
	    }
	},

	//(详情)
	Click_ResultInfo(  ){
		this.Dialog.active =(!this.bDialog)
		this.bDialog = !this.bDialog
	},
};

module.exports = ResultOneLayer
