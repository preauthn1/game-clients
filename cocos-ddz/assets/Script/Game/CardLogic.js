var G = require("Global")
var GData = require("GData")
var GameG = require("GameGlobal")
var GEnum = require("GEnum")

var GameService = null

var CardLogic = {
	extends: cc.Component,

	Init( n_index, PrefabM )
	{
		GameService = require("GameService")

		this.n_Index = n_index
		this.PrefabM = PrefabM
		this.panel1 = null //手牌区
		this.panel2 = null //出牌区

		this.stCardView = [] //界面手牌
		this.stCardLeft = [] //动画用手牌左边
		this.stCardRight = [] //动画用手牌右边
		this.stCardCount = [] //手牌数据{nKey = Index}

		this.STAR_WIDTH = 47
		this.STAR_HEIGHT = 77
		this.sequence = null
		//[初始化自己手牌,数据]--------
		if(this.n_Index ==1){
			for (var i=1; i <= GEnum.MAX_INDEX; ++i){
				this.stCardCount[i] = 0
			}
		}
	},

	DelSequence( ){
		if(this.sequence!=null){
			this.sequence.stop()()
			this.sequence = null
		}
	},

	Rest(  ){
		this.stCardView  = []
		this.stCardCount = []
		this.stCardLeft  = []
		this.stCardRight = []
	},

	SetCardKey( node_card, n_key ){
		if( node_card != null ){
			node_card.nKey = n_key.Number
			node_card.nVar = n_key.Number
			node_card.kColor = n_key.Color
		}
	},

	SetMjHuase( node_card, kColor, nVar ){
		//设置扑克
		var Asset = "poker_" + kColor.toString() + "_" + nVar.toString()
		var huase = cc.find("huase", node_card).getComponent(cc.Sprite)    
		GameG.SetImageSprite(huase, G.GetGamePName(), Asset, false)
	},

	SetMjback( node_card){
		//设置扑克
		var Asset = "poker_back"
		var huase = cc.find("huase", node_card).getComponent(cc.Sprite)
		GameG.SetImageSprite(huase, G.GetGamePName(), Asset, false)
	},

	CreateCardBack(u,parentT){
		var poker={}
		poker.Number=2
		poker.Color=2

		var card = this.CreateCardOne(poker,1,null)	
		card.Pk.setParent(parentT)	
		card.Pk.active=( false )	
		
		u.push(card)
		return card
	},

	CreateCard( n_key, b_MingPai, bShow ){
		if(n_key ==-1){
			return
		}
		var card = this.CreateCardOne(n_key,1,b_MingPai)	
		card.Pk.setParent(this.panel1)
		card.Pk.active=( bShow )

		//记录一个y坐标
		if(this.n_Index ==1){
			GData.pMjLoc = GData.WorldToScreenPoint( card.Pk.position )
			GData.pMjLLoc =  card.Pk.position 
		}

		if(this.n_Index ==1 && card){
			var index = card.nKey
			var num = this.stCardCount[index]
			this.stCardCount[ index ] = num + 1
		}

		this.stCardView.push(card)
		return card
	},

	//[[ 出牌 ]]-------------
	CreateCard2( card, k_action )
	{
		if(card.Number ==-1){
			return
		}
		var Go = this.PrefabM.LoadGameObject("Card2")
		var Card = cc.instantiate(Go)
		if(Card ==null){
			return
		}
		Card.setParent(this.panel2)

		if( Card !=null){
			this.SetMjHuase(Card,card.Color,card.Number)
		}

		if(k_action != null){
			this.SetCardAction(Card,k_action)
		}

		return Card
	},

	CreateCardOne( n_key , k_action, b_MingPai )
	{
		if(n_key ==-1){
			return
		}
		var card = this.CreateCellCard( b_MingPai )
		if( card.Pk != null ){
			this.SetCardKey(card, n_key)
			this.SetMjHuase(card.Pk, card.kColor, card.nVar)
		}
		if(k_action != null){
			this.SetCardAction(card.Pk,k_action)
		}
		return card
	},

	//[[创建一张卡牌]]--------
	CreateCellCard( b_MingPai )
	{
		var sCard = (b_MingPai==null )&& "Card" || "Card2"
		var Go = this.PrefabM.LoadGameObject(sCard)
		var Pk = cc.instantiate(Go)
		var card = {}

		//明牌
		if(b_MingPai && Pk!=null){
			card.Pk = Pk
			return card
		}

		//手牌
		if( Pk!=null ){
			Pk.active=( false )
			card.Pk = Pk
			card.bTouch = false
			card.bUp = false
			card.bColor = false
			return card
		}
		return null
	},

	//显示牌 n_action_idx== :2 地主 3:明牌
	SetCardAction( node_root, n_action_idx ){
		cc.find("icon", node_root).active = (n_action_idx==2)
		cc.find("icon2", node_root).active = (n_action_idx==3)
	},

	DelCardByIndex( n_index )
	{
		var card = this.stCardView[n_index]

		if(this.n_Index==1 && card.nKey >0){
			var index = card.nKey
			var num = this.stCardCount[index]
			this.stCardCount[ index ] = num - 1
		}

		this.stCardView.splice(n_index, 1);
		return card
	},

	DelCardKey( n_key )
	{
		if(n_key <1){
			return
		}
		for (var i in this.stCardView) {
			var card = this.stCardView[i]
			if(card.nKey ==n_key){
				return this.DelCardByIndex(i)
			}
		}

		return null
	},

	DelCardKeyOne( card ){
		if(card.Number <1){
			return
		}

		if( card.Number>0){
			for (var i in this.stCardView) {
				var var1 = this.stCardView[i]
				if(var1.nKey == card.Number && var1.kColor==card.Color){
					return this.DelCardByIndex(i)
				}
			}
		}
		return null
	},

	SortCard( st_cards, bBig ){
		let compare = function(card1, SortCardcard2){
			if(card1.nKey >14 || card2.nKey>14){
				return card2.nKey - card1.nKey
			}

			//处理2
			if(card1.nKey==2 || card2.nKey==2){
				if(card1.nKey==2 && card2.nKey!=2){
					return true
				}
				else{
					return false
				}
			}

			//颜色
			if(card1.nKey == card2.nKey){
				return card2.kColor > card1.kColor
			}
			return card2.nKey - card1.nKey
		}
		this.stCardView.sort(compare);

		if(this.n_Index ==1 || this.n_Index ==2){
			this.SortCardZOrder(this.stCardView)
		}
	},

	SortCardZOrder( st_cards )
	{
		var num = st_cards.length
		for (var i = 1; i < num; ++i) {
			var card = st_cards[i]
			card.Pk.setSiblingIndex( (i-1) )
		}
	},

	CardDizhuIcon( n_action_idx )
	{
		var index = this.stCardView.length
		if(index <1){
			return
		}
		var card = this.stCardView[index]

		this.SetCardAction(card.Pk,n_action_idx)
	},

	//[[ 地主牌 动画 ]]------------
	Ani_LandlordCard3( st_cards ){
		GData.bDialog = true
		//找 牌
		var lsit = []
		for (var i in st_cards) {
			var var1 = st_cards[i]
			for (var index in this.stCardView) {
				if(var1.Number == card.nKey && var1.Color==card.kColor){
					lsit.push(index)
				}
			}
		}
		//设置位置
		for (var i in lsit) {
			var index = lsit[i]
			var card = this.stCardView[index]

			//设置 位置
			var loc = GData.WorldToScreenPoint( card.Pk.position )
			var x = loc.x
			var y = loc.y + 30
			var wpos =  GData.ScreenToWorldPoint(new cc.v3(x, y, 10))
			card.Pk.position = wpos

			//移动 位置
			wpos = GData.ScreenToWorldPoint(new cc.v3(x, y-30, .0))
			card.Pk.transform.DOMove(wpos, 0.8)
		}
		
		setTimeout(function () {
			GData.bDialog = false
		}.bind(this), 1000 * 0.8);
	},

	ShowHandCard(  ){
		for (var i in this.stCardView) {
			var card = this.stCardView[i]
			if( card){
				card.Pk.active=(true)
			}
		}
	},

	//[[发牌动画_17]]-------------
	Ani_DealCard17( num )
	{
		var index = 1
		var max = this.stCardView.length
		var rect_Right_Card = cc.find("Node_Right/Tmp_Card". this.stCardView[1].Pk.parent.parent.parent)
		var rect_Left_Card  = cc.find("Node_Left/Tmp_Card", this.stCardView[1].Pk.parent.parent.parent)


		this.stCardView[1].Pk.parent.getComponent("GridLayoutGroup").enabled =(false);
		//建立发牌用牌背
		for (var tmpc = 1; tmpc <= 17; tmpc++){
			this.CreateCardBack(this.stCardLeft,rect_Left_Card);
			this.CreateCardBack(this.stCardRight,rect_Right_Card);
		}
		for (var tmpc = 1; tmpc <= 17; tmpc++){
			this.SetMjback(this.stCardLeft[tmpc].Pk)
			this.SetMjback(this.stCardRight[tmpc].Pk)
			this.SetMjback(this.stCardView[tmpc].Pk)
			this.stCardLeft[tmpc].Pk.position=cc.v3(-100,100,0);
			this.stCardRight[tmpc].Pk.position=cc.v3(-100,100,0);
			this.stCardView[tmpc].Pk.position=cc.v3(-100,100,0);
			this.stCardLeft[tmpc].Pk.active=(true)
			this.stCardRight[tmpc].Pk.active=(true)
			this.stCardView[tmpc].Pk.active=(true)
		}
		//延迟
		this.DelSequence()
		var i = 1
		var index = 1
		var max = this.stCardView.length
		var j=1
		var k=1
		//this.sequence = CS.DG.Tweening.DOTween.Sequence()
		
		while( i <= max){
			//this.sequence:AppendCallback(function(){
				var card = this.stCardView[index]
				var cardl = this.stCardLeft[index]
				var cardr = this.stCardRight[index]

				card.Pk.active=(true)
				cardl.Pk.active=(true)
				cardr.Pk.active=(true)
				//設計從中外下丟牌
				var npos=cc.v3((51.5+(index)*74.3),0,0);
				//  -665 -245
				npos = npos+card.Pk.parent.position
			
				//this.sequence:Append(card.Pk.transform:DOMove(npos, 0.2));
				var lpos=cc.v3(rect_Left_Card.position.x-29,rect_Left_Card.position.y-40,rect_Left_Card.position.z);
				var rpos=cc.v3(rect_Right_Card.position.x-36,rect_Right_Card.position.y-40,rect_Right_Card.position.z);
				
				// this.sequence:Append(cardl.Pk.transform:DOMove(lpos, 0.2));
				// this.sequence:Append(cardr.Pk.transform:DOMove(rpos, 0.2));
				// this.sequence:Append(cardl.Pk.transform:DOScale(0.34, 0.2));
				// this.sequence:Append(cardr.Pk.transform:DOScale(0.34, 0.2));
					
				var idx = Math.mod(index,GData.PLAY_NUM)

				GData.Chairs[2].AddHandCount(index)
				GData.Chairs[3].AddHandCount(index)

				if(index == max){
					var struct = {}
					struct.ActionName = "fapai"
					GameService.SendUserActionCommit("fapai")
				}
				GameG.PlayGameSound("fapai")
				index = index + 1
			//})
			
			//設計為分三次發
			if( Math.fmod( i+1 , 6 )==0) { 
				// this.sequence:AppendInterval(0.1)
				// this.sequence:AppendCallback(function(){
					var lastnum=((k*6)-1) 
					var startnum=(k==1) && 1 || ((k-1)*6)

					for (var j=startnum; j < lastnum; ++j) {
						var card1 = this.stCardView[j] 		
						this.SetMjHuase(card1.Pk,card1.kColor,card1.nVar)	        	
					}
					k=k+1
				//})
					
				if ((i+1)!=18){
					//this.sequence:AppendInterval(0.2)
				}
			}  
			
			//當發牌結束時開啟自動整牌
			if( Math.fmod( i , 17 )==0) {
				// this.sequence:AppendInterval(0.4)
				// this.sequence:AppendCallback(function(){
					for (var k in this.stCardLeft) {
						var v = this.stCardLeft[k]
						v.Pk.destroy();
					}
					
					for (var k in this.stCardRight) {
						var v = this.stCardRight[i]
						v.Pk.destroy();  
					}
					this.stCardLeft={}
					this.stCardRight={}
					this.stCardView[1].Pk.parent.getComponent("GridLayoutGroup").enabled =(true);  
				//}) 
			}
			//this.sequence:AppendInterval(0.07)
			i = i + 1         
		}
	
		// this.sequence:OnComplete()
		this.SetHandCardLoc()
	},

	//设置手牌
	SetHandCardLoc(  ){

	},

	//[[ 操作牌处理 ]]---------------------
	CheckTouchHandCard( loc ){
		var num = this.stCardView.length
		var obj = {}
		for (var i = num; i >= 1; i = i - 1){
			var card = this.stCardView[i]
			var vect = card.Pk.position
			var vec = GData.WorldToScreenPoint(new cc.v3(vect.x, vect.y, 1))

			var width = card.Pk.width*GData.winScale.min
			var height = card.Pk.height *GData.winScale.min

			var rect = {}
			rect.x = vec.x
			rect.y = vec.y
			rect.width = width
			rect.height = height

			if(GData.rectContainsPoint(rect, loc)){
				card.bTouch = !card.bTouch
				this.SelectCardColor(card, !card.bColor)
				obj.i = i
				obj.card = card
				obj.vec = vec				
				return obj
			}
		}
		obj.i = -1
		obj.card = null
		obj.vec = null
		return obj
	},

	getPointByCardIndex( loc ){
		var num = this.stCardView.length
		var index = -1
		for (var i = num; i >= 1; i = i - 1){
			var card = this.stCardView[i]
			var vect = card.Pk.position
			var vec = GData.WorldToScreenPoint(new cc.v3(vect.x, vect.y, 1))

			var width = card.Pk.width*GData.winScale.min
			var height = card.Pk.height *GData.winScale.min
			var rect = {}
			rect.x = vec.x
			rect.y = vec.y
			rect.width = width
			rect.height = height

			if(GData.rectContainsPoint(rect, loc)){
				index = i
				break
			}
		}
		return index
	},

	SelectCardAni( node, _b )
	{
		if(node ==null){
			return
		}
		if(node.bUp ==_b){
			return
		}
	
		node.bUp =_b
		var loc = GData.WorldToScreenPoint( node.Pk.position )

		var offy = 30 * GData.winScale.min
		//原始位置
		var x = loc.x
		var y = node.bUp && GData.pMjLoc.y +offy || GData.pMjLoc.y
		var nx = loc.x
		var ny = node.bUp && GData.pMjLLoc.y +offy || GData.pMjLLoc.y

		var wpos =  GData.ScreenToWorldPoint(new cc.v3(x, y, 0))	
		node.Pk.transform.DOLocalMove(cc.v3(node.Pk.position.x,ny,0), 0.1)
	},

	SelectCardColor( node, _b )
	{
		var huase = cc.find("huase", node.Pk).getComponent(cc.Sprite)
		node.bColor = _b
		if (node.bColor){
			huase.color = cc.Color.GRAY
		}
		else{
			huase.color = cc.Color.WHITE
		}
	},
	
	SelectCardBeginToEnd( nbegin, nEnd, bTouch, bColor )
	{
		if(nEnd > nbegin){ // 1 >> 4
			for (var i = nbegin; i < nEnd; ++i){
				var card = this.stCardView[i]
				card.bTouch = bTouch
				this.SelectCardColor(card,bColor)
			}
		}
		else{ // 1 << 4
			for (var i = nEnd; i > nbegin; ++i){
				var card = this.stCardView[i]
				card.bTouch = bTouch
				this.SelectCardColor(card,bColor)
			}
		}
	},

	performWithDelay(delay, callback)
	{
		// var sequence = CS.DG.Tweening.DOTween.Sequence()
		// sequence:AppendInterval(delay)
		// sequence:AppendCallback(callback)
		// sequence:OnComplete(function(  ){
		// 	sequence.stop()
		// })
	},

	DelayCOper(  ){
		this.performWithDelay(0,function(  ){
			this.CanelSelectCard()
		})
	},

	CanelSelectCard(  ){
		var num = this.stCardView.length
		var card = null
		for (var i = num; i > 1; i = i-1){
			card = this.stCardView[i]
			if( card.Pk && card.bTouch || card.bUp){
				this.SelectCardAni(card,false)
				this.SelectCardColor(card,false)
				card.bTouch = false
			}
		}
		GData.nSelOut = -1
	},

	CheckValue ( st_, _var ){
		for (var j in st_) {
			var c = st_[j]
			if((c>0) && (c ==_var)) {
				return true
			}
		}
		return false
	},

	//[[获取 数据:]]-------
	AutoSelectCard( st_cards, s_num, h_num )
	{
		if(GData.stCPGHint.length <1){

		}
		else if(st_cards.length <1){
			return
		}
		
		var n = 0
		var list = {}
		for (var i in GData.stCPGHint) {
			var c = GData.stCPGHint[i]
			for (var j in st_cards) {
				var m = st_cards[j]
				if((m.nKey>0) && this.CheckValue(c.data,m.nKey)){
					n = n + 1
				}
				if(n>=h_num){
					break
				}
			}

			if(n>=h_num){
				if(GData.nSelOut != i){ 
					list = c.data
					GData.nSelOut = i
				}
				break
			}
			n = 0
		}
		if (list.length > 0){
			this.HintOper(list,true)
		}
		else{
			GData.Chairs[1].OutOper(s_num)
		}
	},

	//拖拽
	ShowDragCard(  ){

	},

	SetCardColor( _bVar ){

	},

	getCardbyIndex( index ){

		if(index ==-1){
			return
		}
		return this.stCardView[index]
	},

	IsTouchPanel( loc ){
		var vect = this.panel1.position
		var pos = {}
		pos.x=vect.x
		pos.y=vect.y
		pos.z=1
		var vec = GData.WorldToScreenPoint(pos)

		var rect = {}
		rect.x = vec.x
		rect.y = vec.y
		rect.width = GData.display.width
		rect.height = this.panel1.height*GData.winScale.min
		if(!GData.rectContainsPoint(rect, loc)){
			return false
		}

		return true
	},

	//出牌
	SendOutCard( n_chairid ){
		
	},

	GetSelectCard(  ){
		var st_card = []
		for (var i in this.stCardView) {
			var card = this.stCardView[i]
			if(card && card.bUp){
				var obj = {}
				obj.nKey=card.nVar
				obj.kColor = card.kColor
				st_card.push(obj)
			}
		}
		return st_card
	},

	//[[玩家 明牌]]----------
	AddMingPai( st_card ){

	},

	//[[添加 出牌区域]]----------
	AddOutCardLoc( st_card, n_action, bw ){

	},

	//椅子2出牌位置
	SetOutCardLoc( st_card )
	{
		var num = this.panel2.children.length
		var posw = this.panel2.position
		var locs = GData.WorldToScreenPoint( posw )
		var x = 0
		var y = 0


		if(this.n_Index ==2){ //右
			for (var i = 0; i < num - 1; i++){
				var card = this.panel2.children[i]
				var posx = GData.WorldToScreenPoint( card.position )

				x = posx.x - Math.mod(i , 12) * (30*GData.winScale.min)
				y = locs.y - Math.floor(i / 12) * 40

				var loc = GData.ScreenToWorldPoint(new cc.v3(x, y, 0))
				card.position = loc

				//显示地主
			}
			//层:SetzOrder()
			for (var i = 0; i < num; i++) {
				var card = this.panel2.children[num-1]
				card.setSiblingIndex( i )
			}
			//处理换行牌:SetzOrder
			for (var i = 1; i < num - 12; i++){
				var card = this.panel2.children[0]
				card.setSiblingIndex( num-1 )
			}
		}
		else if(this.n_Index ==3){ //左
			//左边不处理,自动调整位置
		}
	},

	//椅子2明牌位置
	AddMingPCardLoc(  )
	{
		var num = this.panel1.children.length
		var posw = this.panel1.position
		var x = 0
		var y = 0
		var card_w = 60
		var card_h = 40
		var offx = -30
		var offy = -40

		if(this.n_Index ==2){ //右
			for (var i=0; i < num - 1; i++){
				var card = this.panel1.children[i]
				var posx = GData.WorldToScreenPoint( card.position )

				x = Math.mod(i , 13) * offx
				y = card_w + Math.floor(i / 13) * offy

				card.position = cc.v3(x,y,1)
			}
			//层:SetzOrder()
			for (var i = 0; i < num - 1; i++){
				var card = this.panel1.children[num-1]
				card.setSiblingIndex(i)
			}
			//处理换行牌:SetzOrder
			for (var i=1; i < num - 12; i++) {
				var card = this.panel1.children[i]
				card.setSiblingIndex(num-1)
			}
		}
		else if(this.n_Index ==3){ //左
			//左边不处理,自动调整位置
		}
	},


	OperOut( st_card, bDizhu, bMingPai )
	{
		let compare = function(card1,card){
			if(card1.Number==card2.Number){
				return card2.Color > card1.Color
			}
			return card2.Number > card1.Number
		}
		st_card.sort(compare);

		//创建牌(chupai)
		for (var i in st_card) {
			var card = st_card[i]
			var k_action = (bDizhu && (i == st_card.length) ) && 2 || 0
			if(this.n_Index ==2 && i==1 && bDizhu){ //右边第一张为地主牌
				this.CreateCard2(card,2)
			}
			else if(this.n_Index ==1){
				k_action = bMingPai && (i==st_card.length && 3 || 0) || k_action
				this.CreateCard2(card,k_action)
			}
			else{
				this.CreateCard2(card,k_action)
			}
		}

		if(this.n_Index ==1){ //自己 下
			var list = {}
			//删除手牌
			for (var i in st_card) {
				var v = st_card[i]
				var card = this.DelCardKeyOne(v)
				if( card ){
					list.push(card)
				}
			}

			if(list.length<1){
				return
			}

			var Dcard = null
			var endloc = null
			GData.Chairs[1].SetPanel2Alpha(0)

			setTimeout(function () {
				GData.Chairs[1].SetPanel2Enabled(false)
			}.bind(this), 1000 * 0.01);

			//出牌动 画
			setTimeout(function () {
				for (var i in list) {
					var card = list[i]
					Dcard = this.panel2.children[i-1]
					endloc = Dcard.position

					var loc = GData.WorldToScreenPoint( endloc )
					var x = loc.x-35
					var y = loc.y
					var z = loc.z
					var wpos =  GData.ScreenToWorldPoint(new cc.v3(x, y, z))
					// var sequence = CS.DG.Tweening.DOTween.Sequence()
					// sequence:Append(card.Pk.transform:DOMove(wpos, 0.2))
					// sequence:Join(card.Pk.transform:DOScale(cc.v3(0.6, 0.6, 1), 0.2))
					// sequence:AppendCallback(function(  ){
					// 	card.Pk.destroy()
					// 	if(i == list.length){
					// 		GData.Chairs[1].SetPanel2Alpha(1)
					// 		GData.Chairs[1].SetPanel2Enabled(true)
					// 		GData.bDialog=false
					// 	}
					// })
				}
			}.bind(this), 1000 * 0.02);
			
			GData.nSelOut = -1
			GData.nSelIndex = -1
			GData.pDargCard = null
			GData.bDialog = true
			GData.stCHUPHint = {}
			GData.stCPGHint = {}
			this.DelayCOper()
		}
		else{ //明牌
	
			if(this.n_Index ==2){ //右
				if( bMingPai ){ 
					var list = []
					//删除手牌
					for (var i in st_card) {
						var v = st_card[i]
						var card = this.DelCardKeyOne(v)
						if( card ){
							list.push(card)
						}
					}

					for (var i=list.length; i >= 1; i = i - 1){
						list[i].Pk.destroy()
					}

					this.SortCard()

					let self = this
					setTimeout(function () {
						self.AddMingPCardLoc( )
					}.bind(this), 1000 * 0.01);
				}
				//动 画
				this.panel2.transform.DOShakePosition(0.2, 20)
			}
			else if(this.n_Index ==3){ --左
				if( bMingPai ){ 
					var list = {}
					//删除手牌
					for (var i in st_card) {
						var v = st_card[i]
						var card = this.DelCardKeyOne(v)
						if( card ){
							list.push(card)
						}
					}

					for (var i=list.length; i >= 1; i = i - 1) {
						list[i].Pk.destroy()
					}
				}	

				//动 画
				this.panel2.transform.DOShakePosition(0.2, 20)
			}
		}

		//设置位置
		this.SetOutCardLoc()

		//地主牌 or 明牌
		if(this.n_Index==1){
			var n_action_idx = 0
			if(bMingPai==true){
				n_action_idx = 3
			}
			else if(bDizhu==true){
				n_action_idx = 2
			}
			this.CardDizhuIcon( n_action_idx)
		}
	},

	//取消所有选择
	CancelOpt( st_card, st_hitn, st_count )
	{
		for (var i=0; i < GEnum.MAX_INDEX_ZI; ++i){
			st_count[i]=0
		}
		for (var i in st_card) {
			var key = st_card[i]
			st_count[key] = st_count[key]+1
		}

		for (var i in this.stCardView) {
			var card = this.stCardView[i]
			if( card && card.bTouch || card.bUp){

				//是否为处理牌
				var bAni=true

				for (var j in st_card) {
					var nKey = st_card[j]
					if(nKey ==card.nKey && st_count[card.nKey]>0){
						bAni = false
						card.bUp = true
						card.bTouch = true
						st_hitn.push(nKey)
						st_count[card.nKey] = st_count[card.nKey] - 1
						break
					}
				}
				if(bAni){
					this.SelectCardAni(card,false)
					card.bUp = false
					card.bTouch = false
				}
			}
		}
	},

	//提示
	HintOper( st_card, bCheck ){
		var st_hitn = {}
		var st_count = {}
		this.CancelOpt( st_card , st_hitn, st_count)
		
		var num = this.stCardView.length
		var card = null
		//不处理(相同牌)
		if(st_hitn.length==st_card.length){
			GData.nSelIndex = -1
			GData.Chairs[1].BtnOutOper.interactable = true
			if(bCheck){
				GData.Chairs[1].OutOper()
			}
			return
		}
		//是否有多余牌?
		for (var i in st_card) {
			var m = st_card[i]
			for (var j in this.stCardView) {
				var v = this.stCardView[j]
				if ((v) && v.nKey>0) {
					if(m==v.nKey && (!v.bTouch) && st_count[v.nKey]>0){
						v.bTouch = true
						break
					}
				}
			}
		}

		//动 画
		for (var i = num; i >= 1; i = i-1){
			card = this.stCardView[i]
			if( card.Pk && card.bTouch){
				this.SelectCardAni(card,card.bTouch)

				GData.nSelIndex = -1
			}

			if(card.bColor){

			}
		}

		//检 测
		if(bCheck){
			GData.Chairs[1].OutOper()
		}
	},
};

module.exports = CardLogic