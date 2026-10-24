var GData = require("GData")
var G = require("Global")
var _AnalyseCP = require("AnalyseCP")
var GameG = require("GameGlobal")
var UIUserPic = require("UIUserPic")
var GEnum = require("GEnum")
var UIManager = require("UIManager")

var networkQueue = null
var Game_DDZ = null
var BClass = null

var Chair = {
	extends: cc.Component,

	//[[初始化]]////////////////
	Init( node_init, node_tran,node_root, n_index, n_number, PrefabM ){
		networkQueue = require("NetworkQueue");
		Game_DDZ = require("Game_DDZ")
        BClass = require("BClass")

		this.PrefabM = PrefabM

		this.nNumber = n_number //顺序编号
		this.nIndex = n_index //座位编号
	
		this.pUser = null //玩家
		this.nHandCount = 0 //手牌数量
		this.nMoney = 0 //金币钱
		this.bDizhu = false //地主
		this.bMingPai = false //是否明牌
		this.bOffLine = false //是否掉线
		this.bTrusteeship=false//托管
		this.bBanker = false //是否庄家
		this.bLandlord = false //是否房主
		
		this.pUserLast = null //最近一次进入的玩家
		this.bHaveOut = false //是否出过牌
		this.bOpenHand = false //是否明牌
		this.bDrawingHand = false //是否听牌

		//[[取值]]//////
		this.node_root = node_root
		//操作按钮
		this.BtnOutOper = cc.find("Node_Oper_4/Button_OutOper",node_init).getComponent(cc.Button)
		this.BtnPassOper = cc.find("Node_Oper_4/Button_PassOper",node_init).getComponent(cc.Button)
		this.BtnHintOper = cc.find("Node_Oper_4/Button_HintOper",node_init).getComponent(cc.Button)
		//[[操作]]
		this.nodeOper1 = cc.find("Node_Oper_4",node_init)
		this.nodeOper2 = cc.find("Node_Oper_5",node_init)
		this.nodeOper3 = cc.find("Node_Oper_6",node_init)
	
	
		this.imageHead = cc.find("Player",node_root).getComponent(cc.Sprite)
		this.imgDz = cc.find("ImgDz",node_root).getComponent(cc.Sprite)
	
		this.playerHead = cc.find("userInfo/head",node_root).getComponent(cc.Sprite)
		
		this.tNickName = cc.find("Text_Name",node_root).getComponent(cc.Label)
		this.tMoney = cc.find("Text_Money",node_root).getComponent(cc.Label)
	
		this.ImgBujiao = cc.find("ImgBujiao",node_root).getComponent(cc.Sprite)
		this.ImgBuchu = cc.find("ImgBuchu",node_root).getComponent(cc.Sprite)
		this.ImgJiaodz = cc.find("ImgJiaodz",node_root).getComponent(cc.Sprite)
		this.ImgText = cc.find("Img_dawanl",node_root).getComponent(cc.Sprite)
		this.NodeNZ = cc.find("Node_NZ",node_root)
		this.player = null
	    this.ImgQDZ = cc.find("ImgQiangdz",node_root).getComponent(cc.Sprite)
		this.ImgBuQdz = cc.find("ImgBuQdz",node_root).getComponent(cc.Sprite)
	
		if(this.nIndex >1){
			this.CardBlack = cc.find("Img_Card",node_root)
			this.Notice = cc.find("Warning",node_root)
			this.tCardNum = cc.find("Img_Card/Text_CardNum",node_root).getComponent(cc.Label)
	       
			let s = "Node_" + n_index.toString()
			this.player = cc.find(s,node_init)
		} 
		else{
			this.player = cc.find("Player",node_root)
		}
		//出牌区
		this.panel1 = cc.find("Panel_1",node_root)
		this.panel2 = cc.find("Panel_2",node_root)
	
		this.logic = require("CardLogic")
		this.logic.Init(n_index, this.PrefabM)
		this.logic.panel1 = cc.find("Panel_1",node_root)
		this.logic.panel2 = cc.find("Panel_2",node_root)
	
		//动画
		this.node_ani = cc.find("Node_Ani",node_root)
		this.Node_AniC = cc.find("Node_Ani/node_root",node_init)
	
		if(1==n_index){ //自己
			this.ImgBeishuMax = cc.find("Img_beishumax",node_root).getComponent(cc.Sprite)
		
	        this.tBeishu = cc.find("Text_Beishu",node_root).getComponent(cc.Label)
	        this.imgBeishuBG = cc.find("Bg_beishu",node_root).getComponent(cc.Sprite)
	      
	        
			this.tips = cc.find("tips",node_root).getComponent(cc.Sprite)
			this.logic.Pok = this.logic.panel1.children[0]
		} 
		else{
			this.ImgOffLien = cc.find("Imgofflien",node_root).getComponent(cc.Sprite)
			this.ImgTuoGuan = cc.find("Imgtuoguan",node_root).getComponent(cc.Sprite)
		}
	
	
		this.init()
	},

	TestAni(  ){
		let n_index = 1
		let card = this.panel1.children[0]
		let card2 =this.panel2.children[0]
	//----->需重新編譯程式碼	let sequence = CS.DG.Tweening.DOTween.Sequence()

		let target = card2.position
	
	
	//----->需重新編譯程式碼	sequence:Append(card:DOMove(target, 0.8))
	//----->需重新編譯程式碼	sequence:Join(card:DOScale(cc.v3(0.6, 0.6, 1), 0.8))
	//----->需重新編譯程式碼	sequence:AppendCallback(function(  ){
	//----->需重新編譯程式碼		n_index = n_index + 1
	//----->需重新編譯程式碼	})
//----->需重新編譯程式碼	//sequence:AppendInterval(0)
	//----->需重新編譯程式碼	sequence:SetEase(CS.DG.Tweening.Ease.Linear):SetLoops(1)
	},

	//清除
	Clear(){
		this.init()
	},

	init(){
		this.node_root.active =(false)
		this.imgDz.node.active =(false)
		this.ImgBujiao.node.active =(false)
		this.ImgBuchu.node.active =(false)
		this.ImgJiaodz.node.active =(false)
	    this.player.active =(false)
		this.ImgQDZ.node.active =(false)
		this.ImgBuQdz.node.active =(false)
		this.ImgText.node.active =(false)
		
		this.bDizhu = false
		this.bMingPai = false
		this.nHandCount = 0
		this.pUser = null
	
		this.tMoney.string = ""
		if(this.nIndex ==1){
			this.tips.node.active =(false)
	        this.ImgBeishuMax.node.active =(false) 
		}
		if(this.nIndex >1){
			this.CardBlack.active =(false)
			this.ImgOffLien.node.active =(false)
			this.ImgTuoGuan.node.active =(false)
			this.Notice.active =(false)
			this.tCardNum.scale = 1
		}
		this.DelHandCard()
		this.ClearPanel1()
		this.ClearPanel2()
		this.ClearAni()
		this.HideDZ()
	},

	Rest(){
		this.bDizhu = false
		this.bMingPai = false
		this.nHandCount = 0
	
		if(this.nIndex >1){
			this.CardBlack.active =(false)
			this.Notice.active =(false)
		}
		this.ClearPanel1()
		this.ClearPanel2()
		this.ClearAni()
		this.HideDZ()
		this.DelHandCard()
		this.PassOper(false)
		this.ShowDiZhu(false)
	},

	//设置当前倍数
	SetCurBeishu( n_beishu ){
		if(this.nIndex == 1 ){
		
	       if((GData.stDeskConfig.nGameMaxBeishu).toString() == (n_beishu).toString()) {
				this.ImgBeishuMax.node.active =(true) 
	        }
	
	       if(this.tBeishu.string== (n_beishu).toString()) {
				this.AnimScale(this.ImgBeishuMax,1.5,0.2)
	            return 
	       }
	       if (n_beishu<= GData.stDeskConfig.nGameMaxBeishu) {
	       
				GameG.PlayGameSound("button")
	            this.AnimScale(this.tBeishu,1.5,0.2)
	          
	          
	        }

			if(n_beishu>1 && this.tBeishu.node.active != null) {
				this.tBeishu.node.active =(true) 
				this.imgBeishuBG.node.active =(true) ;
			}
	        this.tBeishu.string = (n_beishu).toString()
		}
	},

	//清空手牌数据
	DelHandCard(  ){
		this.logic.stCardCount=[]
		this.logic.stCardView=[]
		if(this.nIndex ==1){
			for(let  i = 1;  i <= GEnum.MAX_INDEX; ++ i){
				this.logic.stCardCount[i] = 0
			}
		}
	
		//清除动画
		if( this.logic.sequence ){
	//----->需重新編譯程式碼		this.logic.sequence:Kill()
		}
	},

	SetPanel1Enabled( _b ){
		this.panel1.getComponent(cc.Layout).enabled = _b
	},

	SetPanel2Enabled( _b ){
		this.panel2.getComponent(cc.Layout).enabled = _b
	},

	SetPanel2Alpha( nVar ){
		this.panel2.getComponent("CanvasGroup").alpha = nVar
	},

	Hide(  ){
		this.node_root.active =(false)
	},

	Show(  ){
		this.node_root.active =(true)
		this.player.active =(true)
	},

	SetUser( p_user ){
		if(p_user ==null){ return }
		this.pUser = p_user
	   
		this.tNickName.string = "ID:" + p_user.UserID

		this.tMoney.string = G.Tool.UserHelper.ToCash(p_user.Score)

		this.Show()
		this.SetHeadImage()
	},

	get_chair_idx(  ){
		return this.pUser.SeatNo
	},

	//托管
	SetTrusteeship( b_trusteeship ){
		this.bTrusteeship = b_trusteeship
		if(this.nIndex >1){
			this.ImgTuoGuan.node.active =(b_trusteeship)
		}
	},

	//[[头像设置 ]]//////////-
	SetHeadImage(  ){
		if(this.player==null || this.pUser==null){ return }
		this.ClearHead()
	
		UIUserPic.ResetSpriteByName(image, this.pUser.FaceID.toString(), false)
	},

	//修改昵称
	setNickName( s_path ){
	    let nlen = string.len(s_path)
	    if(nlen>5 ){
	        let newstr = string.getShortName(s_path,9,8)
	       
	      
		    this.tNickName.string = "ID:"+newstr
		} 
    	else{
	        this.tNickName.string = s_path || ""
	    }
	},

	//修改筹码
	setChip( i64_chip ){
		if(i64_chip == null ){ i64_chip = 0 }
		
		let userdata = G.User.GetCurrentUser()
		if(this.nIndex==1){
			this.tMoney.string = G.Tool.UserHelper.ToCash(userdata.UserData.CashAmount)
		}
	},

	GetUserState(  ){
		if(this.pUser==null){ return }
		return this.pUser.StateValue
	},

	//更新玩家信息
	UpdateUserInfo( p_user ){
		if(p_user==null){ return }
		this.pUser = p_user
		this.tNickName.string = "ID:" + p_user.UserID
	
		this.tMoney.string = G.Tool.UserHelper.ToCash(p_user.Score)
		
		if(p_user.StateValue == GEnum.UserStatus.US_OFFLINE){ //断线
	
		} 
		else if(p_user.StateValue == GEnum.UserStatus.US_PLAYING){ //游戏
	         if(this.nIndex >1){ 
	            this.tCardNum.scale = 1
	         }
		} 
		else if(p_user.StateValue == GEnum.UserStatus.US_JUSHOU){ //举手
			if( GData.cbGameStatus == GEnum.GameStatus.kGSResult_1) {
	            UIManager.ShowMessageGameFull("正在等待其他玩家进入+");
			}
			if(this.nIndex ==1){ 
			} 
        	else{

			}	
		} 
		else if(p_user.StateValue == GEnum.UserStatus.US_SIT){	//坐下状态

		
		} 
		else{
		}
	
		if(this.nIndex >1){ 
			this.ImgOffLien.node.active =(p_user.StateValue==GEnum.UserStatus.US_OFFLINE)
		}
	},

	Readyc( bShow ){
	   	if(bShow != null) {
	    	UIManager.HideMessageGameFull()
	   	}
	},

	OutTips(){
		this.tips.node.active =(true)
		let rt = this.tips.rectTransform
		let c = this.tips.color
		c.a = 0
	    this.tips.color = c
	
	   	let loc = GData.WorldToScreenPoint( rt.position )
	//----->需重新編譯程式碼    let sequence = CS.DG.Tweening.DOTween.Sequence()
	//----->需重新編譯程式碼	sequence:Join(this.tips:DOColor(cc.Color(c.r, c.g, c.b, 1), 0.5))
	//----->需重新編譯程式碼	sequence:AppendInterval(0.5)
	//----->需重新編譯程式碼	sequence:Append(this.tips:DOColor(cc.Color(c.r, c.g, c.b, 0), 1.0))
	//----->需重新編譯程式碼	sequence:OnComplete(function(  ){
	//----->需重新編譯程式碼	})
	},

	//显示叫地主
	ShowJiaDiZhu( _btrue ){
		this.ImgQDZ.node.active =(false)
		this.ImgBuQdz.node.active =(false)
	
		this.ImgBujiao.node.active =( _btrue == false )
		this.ImgJiaodz.node.active =( _btrue == true )
	},

	//抢地主
	ShowQiangDizhu( _btrue ){
		this.ImgBujiao.node.active =( false )
		this.ImgJiaodz.node.active =( false )
	
		this.ImgQDZ.node.active =(_btrue==true)
		this.ImgBuQdz.node.active =(_btrue==false)
	},

	HideDZ(  ){
		this.ImgBujiao.node.active =( false )
		this.ImgJiaodz.node.active =( false )
		this.ImgQDZ.node.active =(false)
		this.ImgBuQdz.node.active =(false)
	},

	//地主
	ShowDiZhu( _bDizhu ){
		this.imgDz.node.active =(_bDizhu)
		this.bDizhu = _bDizhu
	},

	JieShule( ){
		this.ImgText.node.active =(true)
		this.ImgText.scale = 0.5
	//----->需重新編譯程式碼	let sequence = CS.DG.Tweening.DOTween.Sequence()
	//----->需重新編譯程式碼	sequence:Append(this.ImgText:DOScale(cc.v3(1.1, 1.1, 1.0), 0.25))
	//----->需重新編譯程式碼	sequence:Append(this.ImgText:DOScale(cc.v3(1.0, 1.0, 1.0), 0.1))
	//----->需重新編譯程式碼	sequence:AppendInterval(1.0)
	//----->需重新編譯程式碼	sequence:AppendCallback(function(  ){
	//----->需重新編譯程式碼		let tweener = this.ImgText:DOScale(cc.v3(0.8, 0.8, 1), 0.1)
	//----->需重新編譯程式碼		tweener:OnComplete(function( ... ){
	//----->需重新編譯程式碼			this.ImgText.node.active =(false)
	//----->需重新編譯程式碼		})
	//----->需重新編譯程式碼	})
	},

	//[[警告器]]
	ShowNotice( nVar ){
		if(this.nIndex >1){
	        if(nVar != null) { return }
	      
	        n=(function(){ this.tCardNum.scale = 1.4   })    
	          
	        if( string.match != null(this.tCardNum.string, "color")) {
				this.tCardNum.string= "<color=red>"+this.tCardNum.string+"</color>";
	        }
	       
	        this.AnimScale(this.tCardNum,2.0,0.2,n)
	        
	       
		}
	},

	//[[清除Panel]]////-
	ClearAni(  ){
		let num = this.node_ani.children.length
		let node = null
		for(let  i = 0;  i <= num - 1; ++ i){
			node = this.node_ani.children[i]
			if(node !=null){ node.destroy()}
		}
	},

	ClearPanel1(  ){
		let num = this.panel1.children.length
		let o = null
		for(let  i = 0;  i <= num - 1; ++ i){
			o = this.panel1.children[i]
			if( o ){
				o.destroy()
			}
		}
	},

	ClearHead(){
		let num = this.player.children.length
		let o = null
		for(let  i = 0;  i <= num - 1; ++ i){
			o = this.player.children[i]
			if( o ){
				o.destroy()
			}
		}
	},

	ClearPanel2(  ){
		this.ImgBuchu.node.active =(false)
		let num = this.panel2.children.length
		let o = null
		for(let  i = 0;  i <= num - 1; ++ i){
			o = this.panel2.children[i]
			if( o ){
				o.destroy()
			}
		}
	},

	//[[设置 手牌数量 ]]//////////-
	AddHandCount( nNum ){
		this.nHandCount = nNum
		if(this.nIndex >1){
			this.CardBlack.active =(true)
			this.tCardNum.string = (this.nHandCount).toString()
		}
	},

	SetHandCardNum( st ){
		if(st.CardType ==0) { return }
	
		this.nHandCount = this.nHandCount - st.Cards.Cards.length
		if(this.nIndex >1){
			this.tCardNum.string = (this.nHandCount).toString()
		}
	
		//报牌音乐
		if(this.nHandCount <=3){

		}
		if(this.nHandCount <=3 && this.nIndex>1){
			GameG.PlayGameSound("callPolice")
		}
		//警告
		if(this.nHandCount <=3 && this.nIndex >1){
			this.ShowNotice(true)
		}
	},

	HintNotice(  ){
		//报牌音乐
		if(this.nHandCount <=3){

		}
		//警告
		if(this.nHandCount <=3 && this.nIndex >1){
			this.ShowNotice(true)
		}
	},

	//[[ 创建手牌 ]]////////////////////////
	AddCards( st_cards, bShow ){
		//排序 王2A 相同比颜色
		let compare = function(card1, card2){
			if(card1.Number >14 || card2.Number>14){
				return card2.Number - card1.Number
			}
			//处理2
			if(card1.Number==2 || card2.Number==2){
				if(card1.Number==2 && card2.Number!=2){ 
					return true
				} 
				else {
					return false
				}
			}
			if(card1.Number == card2.Number){
				return card2.Color - card1.Color
			}
			return card2.Number - card1.Number
		}
		st_cards.sort(compare);

		if(st_cards==null){ return }
		for(let i in (st_cards)){ 
			let key = st_cards[i] 

			if(key !=-1){
				this.logic.CreateCard( key, null, bShow )
			}
		}
	},

	//增加地主牌
	AddDzCard( st_cards ){
		if(st_cards==null){ return }
		for(let i in (st_cards)){ 
			let key = st_cards[i] 
			if(key !=-1){
				this.logic.CreateCard( key )
			}
		}
	},

	//[[明牌, 数据]]//////
	SetMingPai( st_cards ){
		this.bMingPai = true
		this.ClearPanel1()
		this.panel1.active =(true)
		if(st_cards==null){ return }

        let compare = function(card1, card2){
			if(card1.Number >14 || card2.Number>14){
				return card2.Number - card1.Number
			}
			//处理2
			if(card1.Number==2 || card2.Number==2){
				if(card1.Number==2 && card2.Number!=2){ 
					return true
				} 
				else{
					return false
				} 
			}
			return card2.Number - card1.Number
		}
        st_cards.sort(compare);

		for(let i in (st_cards)){ 
			let var1 = st_cards[i] 
			if(var1 !=-1){
				this.logic.CreateCard( var1, true,true )
			}
		}
	
		if(this.nIndex ==2){ //右
			this.logic.AddMingPCardLoc( 0 )
		}
		if(this.nIndex ==3){ //左边
		}
	},

	COper(){
		this.logic.CanelSelectCard()
	},

	//操作
	//[[ 操作牌处理 ]]////////////////-
	Touch_Begin( loc_ ){
		if(this.bTrusteeship){ return }
		let vect = this.panel1.position
	    let vec = GData.WorldToScreenPoint(new cc.v3(vect.x, vect.y, 1))
		let rect = {}
		rect.x = vec.x
		rect.y = vec.y
		rect.width = GData.display.width
		rect.height = this.panel1.height*GData.winScale.min
		if(GData.rectContainsPoint != null(rect, loc_)){ 
	   		GData.nSelIndex = 0
			GData.pSelPos = loc_
			return false 
		}
		
		let obj = this.logic.CheckTouchHandCard( loc_ )
		let i = obj.i
		let card = obj.card
		let loc = obj.vec
		if(i == -1){ //取消选择
			this.logic.CanelSelectCard()
			return false
		}
		GData.nSelIndex = i
		GData.pSelPos = loc_
		this.bTouch = card.bTouch
		this.bColor = card.bColor
	
		GameG.PlayGameSound("clickPai")
	},

	Touch_Move( loc_ ){
		if(GData.nSelIndex <1){ return }
		if(GData.nSelIndex >this.logic.stCardView.length){ return }
	
		if(!this.logic.IsTouchPanel(loc_)){ return }
	
		let card1 = this.logic.getCardbyIndex(GData.nSelIndex)
		let loc = GData.ScreenToWorldPoint(loc_)
		let cha = GData.pSub(loc_,GData.pSelPos)
		if( Math.max( Math.abs(cha.x), Math.abs(cha.y)) < 30 && card1){ 
			return false
		}
	
		let num = this.logic.stCardView.length
		let card = null
		let bTouch = this.logic.stCardView[GData.nSelIndex].bTouch
		let index = this.logic.getPointByCardIndex( loc_ )
	
		//移动方向>>>>
		for(let  i  =  num;  i  <=  1; ++ i ){
			//越界处理>>>>右
			if( cha.x >0 && i <= GData.nSelIndex){ 
				break  
			}
			card = this.logic.stCardView[i]
			if(card && card.Pk) {
				let vect = card.Pk.position
				let vec = GData.WorldToScreenPoint(new cc.v3(vect.x, vect.y, 1))
				let width = card.Pk.width*GData.winScale.min
				let height = card.Pk.height *GData.winScale.min
				let rect = {}
				rect.x = vec.x
				rect.y = vec.y
				rect.width = width
				rect.height = height
				//越界处理<<<<<左
				if(GData.rectContainsPoint(rect, loc_) && i==index){
					this.logic.SelectCardBeginToEnd(GData.nSelIndex, index,this.bTouch,this.bColor)
				}
			}
		}
	},

	Touch_End( loc_ ){
	    if(GData.nSelIndex ==-1){ return }
		if(!this.logic.IsTouchPanel(GData.pSelPos)){
			
			this.logic.CanelSelectCard()
			this.OutOper()
			return
		}
		let selnum = this.logic.GetSelectCard().length
		let max = this.logic.stCardView.length
		let card = null
	    
	  
		for(let  i  =  max;  i  <=  1; ++ i ){
			card = this.logic.stCardView[i]
			if( card.Pk ){
				this.logic.SelectCardAni(card,card.bTouch)
			}
			if(card.bColor){
				this.logic.SelectCardColor(card, !card.bColor)
			}
		}
    	//出牌
		this.CheckOper(selnum)
	},

	CheckOper( ni9 ){
	
		let st_card = this.logic.GetSelectCard()
		let max = 0
		let min = st_card.length
	
		if(GData.stCHUPHint.length >0 
			&& (GData.stCHUPHint[1].nOperType ==GEnum.PKOperType.kGSOne 
			|| GData.stCHUPHint[1].nOperType ==GEnum.PKOperType.KGSWZ)){
			max = 0xFF
		}
	
		if(GData.stCHUPHint.length >0 && GData.stCHUPHint[1].nOperType ==GEnum.PKOperType.kGSTwo){
			max = 1
		} 
		else{
			max = 2
		}

		if(min >=max && min <4 && ni9< max && GData.stCPGHint.length >0){
			this.logic.AutoSelectCard(st_card,ni9,max)
		} 
		else {
			this.OutOper( ni9 )
		}
	},

	//[[ 操作处理 ]]////////////////
	HideOper(  ){
		this.nodeOper1.active =(false)
		this.nodeOper2.active =(false)
		this.nodeOper3.active =(false)
	},

	//显示操作
	ShowOper( nOperType  ){	
		let bChuPai = false
		let bPass = true
		let bHint = false
		if(nOperType ==GEnum.GameStatus.kGSResult_1){
			return
		}
	
		if(nOperType ==GEnum.GameStatus.kGSChuPai_1){ 
		}
		this.BtnOutOper.interactable = bChuPai
		this.BtnPassOper.interactable = bPass
		this.BtnHintOper.interactable = bHint
	
		//计算 (数据)
		GData.nSelOut = -1
		GData.HINDIDX = 1
		GData.stCPGHint = []
		GData.stCPGHint.stChuPai = []
	
		//组合
		if(_AnalyseCP.HintChuPai(GData.stCPGHint,GData.stCHUPHint[1],this.logic.stCardCount)){
			bHint = true
		}
	
		if(GData.stCPGHint.length >0){ bHint = true
			GData.SortHintCard()
		}
		if(GData.stCPGHint.length <1){ bHint = false
		//自动过牌
		}
		if(GData.stCHUPHint.length <1){ bChuPai = true
		}
	
		if(bChuPai==true || bHint==true){
			this.BtnOutOper.interactable = bChuPai
			this.BtnHintOper.interactable = bHint
		}
		//自己出牌 不能Pass
		if(GData.stCHUPHint.length <1){
			this.BtnPassOper.interactable = false
			this.BtnHintOper.interactable = false
		}
	
		//显示操作>>>>
		this.nodeOper1.active =(bHint)
		this.nodeOper2.active =(bChuPai)
		this.nodeOper3.active =(!bChuPai && bHint==false)
	
		//>>>>检查有牌否?
		this.OutOper()
		if(GData.stCHUPHint.length >0){
			let Oper = GData.stCHUPHint[1]
		}
	},

	//[ni9:
	//[[操作前 已选中数量]//////////////
	OutOper( ni9 ){
		GData.OutCard = []
		let st_card = this.logic.GetSelectCard()
		let num = st_card.length
		ni9 = ni9 || 0
		this.BtnOutOper.interactable = false
		if(st_card.length <1){ return }
		
		let st_cards = []
		let KOper = []
		let kOper = []
		let bChuPai = false
	
		//>>计算 数据(手动操作)
		if(num > 0){
			for(let i in (st_card)){ 
				let v = st_card[i] 
				if(v.nKey > 0){
					st_cards.push(v.nKey)
				}
			}
			if(_AnalyseCP.HintTYPE(st_cards,KOper,0)){

			}
			if( KOper.length < 1){
				if (num >= 5 && ni9 < 1 && (GData.stCHUPHint.length < 1
					|| GData.stCHUPHint[1].nOperType==GEnum.PKOperType.kGSShunZi
					|| GData.stCHUPHint[1].nOperType==GEnum.PKOperType.KGSLianDui) 
					&& _AnalyseCP.HintChi(st_cards, KOper) ){
						let list = []
						let group = KOper[1].data
						this.logic.HintOper(KOper[1].data,false)
						for(let i in (group)){ 
							let v = group[i] 
							for(let j in (st_card)){ 
								let c = st_card[j] 
								if(c.bSel==null){ c.bSel =false 
							}
							if(c.nKey ==v && c.bSel != null){
								var obj = {}
								obj.nKey= c.nKey
								obj.kColor = c.kColor
								list.push(obj)
								c.bSel = true
								break
							}
						}
					}
					st_card = []
					st_card = list
				} 
				else if(KOper.length < 1){
					return false
				}
			}
		}
	
		kOper = KOper[1]
		//检查 出
		if(kOper.nKey!=null && kOper.nKey>0){ 
			bChuPai = false
			kOper.nKey = (kOper.nKey==2) && kOper.nKey+12.5 || kOper.nKey
		}
	
		if(this.BtnOutOper){
		}
		//是否 出牌
		if(GData.stCHUPHint.length <1 && kOper.nOperType >GEnum.PKOperType.kGSNone){
			bChuPai = true
		}

		if(GData.stCHUPHint.length >0 
			&& GData.stCHUPHint[1].nOperType ==kOper.nOperType
			&& kOper.nKey >GData.stCHUPHint[1].nKey
			&& GData.stCHUPHint[1].num == st_card.length
		){
			bChuPai = true
		}
		if(GData.stCHUPHint.length >0
			&& GData.stCHUPHint[1].nOperType !=kOper.nOperType 
			&& kOper.nOperType == GEnum.PKOperType.kGSBomb
			&& GData.stCHUPHint[1].nOperType != GEnum.PKOperType.KGSWZ
		){
			bChuPai = true
		}
		if(kOper.nOperType ==GEnum.PKOperType.KGSWZ 
			&& GData.stCHUPHint.length >0 
			&& GData.stCHUPHint[1].nOperType!=GEnum.PKOperType.KGSWZ)
		{
			bChuPai = true
		}
	  
		this.BtnOutOper.interactable = bChuPai
	
		GData.OutCard = st_card
	},

	Oper( st_oper, bAni ){
		this.ClearPanel2()
	       
		let num = (st_oper.Cards ==null) && 0 || st_oper.Cards.Cards.length
	    
		if(num <1){ this.PassOper(true)
			GData.nSelOut = -1
			GData.stCPGHint = []
		} 
		else{

		}
	
		//出 牌
		if(num > 0){
			this.logic.OperOut(st_oper.Cards.Cards,this.bDizhu,this.bMingPai)
		}
	
		//计算 数据(同桌玩家)
		if(num > 0)
		{
			let st_card = []
	
			for(let i in (st_oper.Cards.Cards)){ 
				let var1 = st_oper.Cards.Cards[i] 
				if(var1==null){ break }
				if(var1.Number >0){
					st_card.push(var1.Number)            
				}
			}
	
			let KOper = []
			if(_AnalyseCP.HintTYPE(st_card,KOper,0)){ 

			}
	
			let kOper = KOper[1]
			if(kOper.nKey!=null && kOper.nOperType > 0){
				kOper.nKey = (kOper.nKey==2) && kOper.nKey+12.5 || kOper.nKey
				GData.stCHUPHint = []
				var obj = {}
				obj.nOperType=kOper.nOperType
				obj.nSeatId=st_oper.SeatNo
				obj.num=num
				obj.nKey=kOper.nKey
				obj.data=kOper.data	
				GData.stCHUPHint.push(obj)
			}
		}
		if(st_oper.SeatNo ==GData.nOwnSeatId){
		}
	
		//动 画
		this.playChuPaiAction(GData.stCHUPHint[1],num,bAni)
		//音 效
		this.playSoundEffect(GData.stCHUPHint[1],num,bAni)
		//报 单
		this.playOneSound( num )
		//处理明牌
		if(st_oper.SeatNo ==GData.nOwnSeatId){
			GData.stCHUPHint = []
		}
		if(num <1 && GData.stCHUPHint.length>0 && GData.stCHUPHint[1].nSeatId==st_oper.SeatNo){
			GData.stCHUPHint = []
		}
	
		//整理手牌
		let nAni = st_oper.CardType
		let bPush = this.nIndex==1 && true || false
		if(this.nIndex==1){
			this.logic.SetHandCardLoc()
		} 
		else if(this.nIndex==2){
		}
	},

	PassOper( bPass ){
	//动画
	//
		this.ImgBuchu.node.active =(bPass)
	//----->需重新編譯程式碼    let sequence = CS.DG.Tweening.DOTween.Sequence()
	//----->需重新編譯程式碼    sequence:AppendInterval(1)
	//----->需重新編譯程式碼    sequence:OnComplete( function(){ this.ImgBuchu.node.active =(false)  })
	},

	//[[操作]]//////////////
	Click_BtnOper( kOper ){
		//操作 消息
		let struct = {}
	
		if(kOper == GEnum.PkOper.Pass){			
			this.logic.CanelSelectCard()
			networkQueue.SendMsg(BClass.Game, Game_DDZ.Pass, struct)
		} 
		else if(kOper == GEnum.PkOper.HintOper){
			let stcard =[]
			let num = GData.stCPGHint.length
			if (num <1){ return }

			if (GData.HINDIDX >num){ 
				GData.HINDIDX=1
			}
	
			if(GData.HINDIDX <=num){
				let _st = GData.stCPGHint[GData.HINDIDX]
				for(let i in (_st.data)){ 
					let nKey = _st.data[i] 
					stcard.push(nKey)
				}
	
				this.logic.HintOper(stcard, true)
				
				GData.HINDIDX = GData.HINDIDX + 1
			}
		} 
		else if(kOper == GEnum.PkOper.OutOper){
			if(GData.OutCard.length <1){ 
				this.OutTips()
				return
			}
			struct.Cards = []
	
			for(let i in (GData.OutCard)){ 
				let var1 = GData.OutCard[i] 
				if(var1 ){
					var obj = {}
					obj.Number= var1.nKey
					obj.Color = var1.kColor
					struct.Cards.push(obj)
				}
			}

			GData.OutCard = {}
			networkQueue.SendMsg(G.Proto.BClass.Game, G.Proto.Game_DDZ.ChuPai, struct)
	
			if(GData.OutCardMode ==2){
				GData.nSelIndex=-1
			}
		}
		GameG.PlayGameSound("button")
	},

	//[ 断线重连数据 ]////////////////////////////////////////////////////////////////////-
	//恢复手牌区
	RecoverHandCard( cbHandCard ){
		this.AddCards(cbHandCard,true)
	},

	RecoverOutCard( stOper ){
		this.ClearPanel2()
		if(stOper.Type==2){ return } //2不处理
		if(stOper.SendType==0){
			this.PassOper(true)
		}
		else{
			this.logic.OperOut(stOper.SendOutCards.Cards,this.bDizhu,this.bMingPai)
		}
	},

	RecoverGroupCard( cbGroupCard ){

	},

	playMingpaiAction(){
		let fileName = "FX_Mingpai"
		let prefab = this.PrefabM.LoadGameObject(fileName)
		let node = cc.instantiate(prefab)
		node.setParent(this.node_ani)
	},

	//播放特效
	playChuPaiAction( st_oper, num ,bAni){
		if(st_oper==null || num==0 || bAni){ return }
		let fileName = ""
		let soundfile = ""
		if(st_oper.nOperType==GEnum.PKOperType.kGSShunZi){
	         fileName = "FX_shunzi"
	         soundfile = "s_shunzi"
		} 
		else if(st_oper.nOperType==GEnum.PKOperType.KGSLianDui){

			fileName = "FX_liandui"
		} 
		else if(st_oper.nOperType==GEnum.PKOperType.KGSFeiJi 
			|| st_oper.nOperType==GEnum.PKOperType.KGSFJCP){
	        fileName = "FX_feiji"
			soundfile = "s_feiji"
	        this.shakecamara(1,1,1);
		} 
		else if(st_oper.nOperType==GEnum.PKOperType.kGSBomb){
	        fileName = "FX_zhadan"
	        soundfile = "s_zhadan"
			this.shakecamara(1,2,1);
		} 
		else if(st_oper.nOperType==GEnum.PKOperType.KGSWZ){
			fileName = "wangzha"
			soundfile = "s_wangzha"
	        this.shakecamara(1,3,1);
		}
	      
		//创建动画
		if(st_oper.nOperType==GEnum.PKOperType.kGSShunZi || st_oper.nOperType==GEnum.PKOperType.KGSLianDui || st_oper.nOperType==GEnum.PKOperType.KGSFeiJi || st_oper.nOperType==GEnum.PKOperType.KGSFJCP && fileName!=""){
			let prefab = this.PrefabM.LoadGameObject(fileName) //头像位置
			let node = cc.instantiate(prefab)
			node.setParent(this.node_ani)
		}
		if(st_oper.nOperType==GEnum.PKOperType.kGSBomb || st_oper.nOperType>GEnum.PKOperType.KGSFJCP && fileName!=""){
	    	let prefab = this.PrefabM.LoadGameObject(fileName) //中心位置
			let node = cc.instantiate(prefab)
			node.setParent(this.Node_AniC)
		}
		//动画音效
		if(soundfile!=""){
			GameG.PlayGameSound(soundfile)
		}
	},

	//[[报单]]////////
	playOneSound( num ){
		if(num==0){ return }
		let count = this.nHandCount - num
	
		let file = ""
		let n_gender = this.pUser.Sex
		if(n_gender==1){ 
			file = "girl_"
		} 
		else{
			file = "boy_"
		}
		let tempfile=""
		//boy_1zhang_1
		if(count>0 && count<3){
			let i = math.random(1,2)
			tempfile = count.toString() + "zhang_" + i.toString()
	
			GameG.PlayGameSound(file+tempfile)
		}
	},

	//叫抢(地主):音效
	LandlordSound( nOper, _bVar ){
		let file = ""
		let n_gender = this.pUser.Sex
		if(n_gender==1){ 
			file = "girl_"//"Audio/girl/"
		} 
		else{
			file = "boy_"//"Audio/boy/"
		}
	
		let tempfile=""
		if(nOper ==1 && _bVar){ //叫地主
			tempfile = "jiaodizhu_1"
		} 
		else{
			tempfile = "bujiao_1"
		}
		if(nOper ==2 && _bVar){ //抢地主
			tempfile = "qiangdizhu_1"
		} 
		else if(nOper ==2 && _bVar != null){
			tempfile = "buqiang"
		}
	
		GameG.PlayGameSound(file+tempfile)
	},

	//播放音效(出牌)
	playSoundEffect( st_oper, num,bAni ){
		if(bAni){ return }
		let file = ""
		let n_gender = this.pUser.Sex
		if(n_gender==1){ 
			file = "girl_"//"Audio/girl/"
		} 
		else{
			file = "boy_"//"Audio/boy/"
		}
	
		if(num == 0){
			file = file+"guo"
			GameG.PlayGameSound(file)
			return
		}
	
		let k_oper = st_oper.nOperType
		let n_key =  Math.floor( (st_oper.nKey==14.5) && st_oper.nKey-12.5 || st_oper.nKey )
		if(k_oper ==GEnum.PKOperType.kGSOne){
			let tempfile = "one_"+n_key
			file = file+tempfile
		} 
		else if(k_oper ==GEnum.PKOperType.kGSTwo){
			let tempfile = "two_"+n_key
			file = file+tempfile
		} 
		else if(k_oper ==GEnum.PKOperType.kGSThree){
			let tempfile = ""
			if(num ==3){  tempfile="3_0"
			} 
			else if(num ==4){	tempfile="3_1"
			} 
			else if(num ==5){ tempfile="3_2"

			}
			file = file+tempfile
		} 
		else if(k_oper ==GEnum.PKOperType.kGSBomb){
			file = file+"zhadan_1"
		} 
		else if(k_oper ==GEnum.PKOperType.kGSShunZi){
			file = file+"shunzi"
		} 
		else if(k_oper ==GEnum.PKOperType.KGSLianDui){
			file = file+"liandui"
		}
		else if(k_oper ==GEnum.PKOperType.KGSFeiJi
				|| k_oper ==GEnum.PKOperType.KGSFJCP){
			file = file+"feiji"
		} 
		else if(k_oper ==GEnum.PKOperType.KGSSD2){ //4带
			let tempfile = ""
			if(num==6){ 
				tempfile="4_2"
			} 
			else if(num==8){
				tempfile="4_22"
			}
			file = file+tempfile
		} 
		else if(k_oper ==GEnum.PKOperType.KGSWZ){	//对王
			file = file+"wangzha_2"
		}
		
		//播放
		GameG.PlayGameSound(file)
	},

	 shakecamara( t, s_type,num ){
	
	//----->需重新編譯程式碼let sequence = CS.DG.Tweening.DOTween.Sequence()
	//----->需重新編譯程式碼    sequence:AppendInterval(t)
	    let st=[[30,0],[0,50],[50,50]]
	//----->需重新編譯程式碼    sequence:OnComplete( function(){ 
	//----->需重新編譯程式碼    let canvas = cc.find("Canvas")
	//----->需重新編譯程式碼    
	//----->需重新編譯程式碼         if(canvas != null ){
	//----->需重新編譯程式碼          let camera = cc.find("Camera",canvas):GetComponent("Camera")
	//----->需重新編譯程式碼          if(camera != null ){
	//----->需重新編譯程式碼           camera:DOShakePosition(1, cc.v3(st[s_type][1], st[s_type][2], 0), 50, 0, true)
	//----->需重新編譯程式碼   
	//----->需重新編譯程式碼           :OnComplete( function(){
	//----->需重新編譯程式碼            camera.position = cc.v3(0, 0, -10)
	//----->需重新編譯程式碼           })
	//----->需重新編譯程式碼          } 
	//----->需重新編譯程式碼         }
	//----->需重新編譯程式碼    })
	},

	AnimScale( ani_obj, size,t,Completefunc){
	        ani_obj.scale = 1
	//----->需重新編譯程式碼        let sequenceb = CS.DG.Tweening.DOTween.Sequence()
	 
	//----->需重新編譯程式碼        sequenceb:Append(ani_obj:DOScale(cc.v3(1, 1, 1) * size, t))//放大1.5倍
	//----->需重新編譯程式碼        sequenceb:Append(ani_obj:DOScale(cc.v3(1, 1, 1) * 1.0,t))//放大1.5倍
	//----->需重新編譯程式碼        sequenceb:Append(ani_obj:DOScale(cc.v3(1, 1, 1) * size, t))//放大1.5倍
	//----->需重新編譯程式碼        sequenceb:Append(ani_obj:DOScale(cc.v3(1, 1, 1) * 1.0, t))//回復
	
	//----->需重新編譯程式碼          sequenceb:OnComplete( function(){
//----->需重新編譯程式碼          //結束要做的事情
	//----->需重新編譯程式碼          if(Completefunc) {
	//----->需重新編譯程式碼           Completefunc()
	//----->需重新編譯程式碼          }
	//----->需重新編譯程式碼            })
	},


};

module.exports = Chair
