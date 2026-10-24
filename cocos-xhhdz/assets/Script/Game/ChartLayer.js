
var G = require("Global")
var GameG = require("GameGlobal")
var gameAudio = require("GameAudio")
var GameData = require("GameData")

var SingleCount = 20
var BeadRoadCount = 30
var BigRoadCount = 30
var DayanluCount = 18
var XiaoyanluCount = 18
var ZhanglangluCount = 18
var CardTypeCount = 20
var OutCardTypeCount = 6
var eyeRed = "eye_1"
var eyeBlack = "eye_2"
var xiaoyanluRed = "roadmap_1"
var xiaoyanluBlack = "roadmap_2"
var zhanglangluRed = "zhanglanglu_red"
var zhanglangluBlack = "zhanglanglu_black"
var BigRoadData = []
var BigRoadDataColumn = 1
var BigRoadDataRow = 1
var DayanluZhiLuo = false
var XiaoyanluZhiLuo = false
var ZhanglangluZhiLuo = false
var DayanluRight = 0
var XiaoyanluRight = 0
var ZhanglangluRight = 0


var btn_close
var txt_round1
var txt_round2
var txt_round3


var img_rate
var img_rateMid
var attach_rateMid
var txt_rateL
var txt_rateR

var HungHeLimit
var XingYunLimit

var nextBlackDayanlu
var nextBlackXiaoyanlu
var nextBlackZhanglanglu

var nextRedDayanlu
var nextRedXiaoyanlu
var nextRedZhanglanglu

var Rate = []
		
//牌型
var CardType = []
var CardTypeIndex = 1

//牌型
var OutCardType = []
var OutCardTypeIndex = 1

//珠盘路
var BeadRoadObj = {}
var BeadRoad = []

//大路
var BigRoadObj = {}
var BigRoad = []
var BigRoadUse

//大眼路
var DayanluObj = {}
var Dayanlu = []
var DayanluColumnUse
var DayanluRowUse = 1
var DayanluRight = 0

//小眼路
var XiaoyanluObj = {}
var Xiaoyanlu = []
var XiaoyanluColumnUse = 1
var XiaoyanluRowUse = 1
	
//蟑螂路
var ZhanglangluObj = {}
var Zhanglanglu = []
var ZhanglangluColumnUse = 1
var ZhanglangluRowUse = 1


var ChartLayer = {
	extends: cc.Component,

	onExit(){
		this.root.active =(false)
	},

	initUi(){
		let self = this

		let canvas = cc.find("Canvas")
		let root =cc.find("ChartLayer", canvas)
		this.root = root

		btn_close =cc.find("ButtonClose", root).getComponent(cc.Button)
		btn_close.node.on('click',function(){
	        gameAudio.btnClick()
			self.onExit()
		})
		

		txt_round1 =cc.find("Down/TextRed", root).getComponent(cc.Label)
		txt_round2 =cc.find("Down/TextBlack", root).getComponent(cc.Label)
		txt_round3 =cc.find("Down/TextTotal", root).getComponent(cc.Label)
		
		txt_round1.string = "0"
		txt_round2.string = "0"
		txt_round3.string = "0"
		
		img_rate =cc.find("Rate", root).getComponent(cc.Sprite)
		img_rateMid =cc.find("RateMid", root).getComponent(cc.Sprite)
		attach_rateMid =cc.find("Rate/AttachMid", root)
		txt_rateL =cc.find("RateMid/TextL", root).getComponent(cc.Label)
		txt_rateR =cc.find("RateMid/TextR", root).getComponent(cc.Label)
		txt_rateL.string = ""
		txt_rateR.string = ""
	
		HungHeLimit =cc.find("TableLimit/HungHe", root).getComponent(cc.Label)
		XingYunLimit =cc.find("TableLimit/XingYun", root).getComponent(cc.Label)
	
		nextBlackDayanlu =cc.find("NextRound/NextBlackDayanlu", root).getComponent(cc.Sprite)
		nextBlackXiaoyanlu =cc.find("NextRound/NextBlackXiaoyanlu", root).getComponent(cc.Sprite)
		nextBlackZhanglanglu =cc.find("NextRound/NextBlackZhanglanglu", root).getComponent(cc.Sprite)
	
		nextRedDayanlu =cc.find("NextRound/NextRedDayanlu", root).getComponent(cc.Sprite)
		nextRedXiaoyanlu =cc.find("NextRound/NextRedXiaoyanlu", root).getComponent(cc.Sprite)
		nextRedZhanglanglu =cc.find("NextRound/NextRedZhanglanglu", root).getComponent(cc.Sprite)
		
		//胜率用纪录
		Rate = []
		
		//牌型
		CardType = []
		CardTypeIndex = 1
		for(let  i = 1;  i <= CardTypeCount; ++ i){//	for i=1,CardTypeCount do
			CardType[i] = {}
			CardType[i].root =cc.find("CardType/Item_"+i, root)
			CardType[i].light =cc.find("CardType/Item_"+i+"/Light", root).getComponent(cc.Sprite)
			CardType[i].img =cc.find("CardType/Item_"+i+"/Icon", root).getComponent(cc.Sprite)
			CardType[i].root.active =(false)
			CardType[i].light.active =(false)
			CardType[i].isUse = false
		}
		
		//牌型
		OutCardType = []
		OutCardTypeIndex = 1
		for(let  i = 1;  i <= OutCardTypeCount; ++ i){//	for i=1,OutCardTypeCount do
			OutCardType[i] = {}
			OutCardType[i].root =cc.find("GameLayer/_chartLayer/CardType/Item_"+i, canvas)
			OutCardType[i].light =cc.find("GameLayer/_chartLayer/CardType/Item_"+i+"/Light", canvas).getComponent(cc.Sprite)
			OutCardType[i].img =cc.find("GameLayer/_chartLayer/CardType/Item_"+i+"/Icon", canvas).getComponent(cc.Sprite)
			OutCardType[i].root.active =(false)
			OutCardType[i].light.node.active =(false)
			OutCardType[i].isUse = false
		}
	
		//珠盘路
		BeadRoad = []
		BeadRoadObj = {}
		BeadRoadObj.grid = {}
		BeadRoadObj.grid.rect =cc.find("BeadRoad/Grid", root)
		BeadRoadObj.grid.layout =cc.find("BeadRoad/Grid", root).getComponent(cc.Layout)
		BeadRoadObj.grid.perfab = cc.find("BeadRoad/Grid/Content",root)
		BeadRoadObj.grid.initPos = BeadRoadObj.grid.rect.position
		for(let  i = 1;  i <= BeadRoadCount; ++ i){//	for i=1,BeadRoadCount do
			self.CreateBeadRoad()
		}
		
		//大路
		BigRoad = []
		BigRoadObj = {}
		BigRoadUse = 1
		BigRoadObj.grid = {}
		BigRoadObj.grid.rect =cc.find("BigRoad/Grid", root)
		BigRoadObj.grid.layout =cc.find("BigRoad/Grid", root).getComponent(cc.Layout)
		BigRoadObj.grid.perfab = cc.find("BigRoad/Grid/Content",root)
		BigRoadObj.grid.initPos = BigRoadObj.grid.rect.position
		for(let  i = 1;  i <= BigRoadCount; ++ i){//	for i=1,BigRoadCount do
			self.CreateBigRoad()
		}
	
		//大眼路
		Dayanlu = []
		DayanluObj = {}
		DayanluColumnUse = 1
		DayanluRowUse = 1
		DayanluObj.grid = {}
		DayanluObj.grid.rect =cc.find("Dayanlu/Grid", root)
		DayanluObj.grid.layout =cc.find("Dayanlu/Grid", root).getComponent(cc.Layout)
		DayanluObj.grid.perfab = cc.find("Dayanlu/Grid/Content",root)
		DayanluObj.grid.initPos = DayanluObj.grid.rect.position
		for(let  i = 1;  i <= DayanluCount; ++ i){//	for i=1,DayanluCount do
			self.CreateDayanlu()
		}
	
		
		//小眼路
		Xiaoyanlu = []
		XiaoyanluObj = {}
		XiaoyanluColumnUse = 1
		XiaoyanluRowUse = 1
		XiaoyanluObj.grid = {}
		XiaoyanluObj.grid.rect =cc.find("Xiaoyanlu/Grid", root)
		XiaoyanluObj.grid.layout =cc.find("Xiaoyanlu/Grid", root).getComponent(cc.Layout)
		XiaoyanluObj.grid.perfab = cc.find("Xiaoyanlu/Grid/Content",root)
		XiaoyanluObj.grid.initPos = XiaoyanluObj.grid.rect.position
		for(let  i = 1;  i <= XiaoyanluCount; ++ i){//	for i=1,XiaoyanluCount do
			self.CreateXiaoyanlu()
		}
	
		//蟑螂路
		Zhanglanglu = []
		ZhanglangluObj = {}
		ZhanglangluColumnUse = 1
		ZhanglangluRowUse = 1
		ZhanglangluObj.grid = {}
		ZhanglangluObj.grid.rect =cc.find("Zhanglanglu/Grid", root)
		ZhanglangluObj.grid.layout =cc.find("Zhanglanglu/Grid", root).getComponent(cc.Layout)
		ZhanglangluObj.grid.perfab = cc.find("Zhanglanglu/Grid/Content",root)
		ZhanglangluObj.grid.initPos = ZhanglangluObj.grid.rect.position
		for(let  i = 1;  i <= ZhanglangluCount; ++ i){//	for i=1,ZhanglangluCount do
			self.CreateZhanglanglu()
		}
	
	},

	updateLimit(HungHe,XingYun){
		HungHeLimit.string = GameData.gameLayer.MoneyText(HungHe)
		XingYunLimit.string = GameData.gameLayer.MoneyText(XingYun)
	},

	CreateClone(perfab){
		let clone = cc.instantiate(perfab)
		if(clone == null){ return null }
		clone.parent =(perfab.parent)
		clone.position = cc.v3(0, 0, 0)
		clone.scale = 1
	
		return clone
	},

	CreateBeadRoad(){
		let perfab =cc.find("BeadRoad/Grid/Content", this.root)
		let clone = this.CreateClone(perfab)
		
		let index = BeadRoad.length
		if (index == 0)
			index = 1		
		BeadRoad[index] = []
		clone.active =(true)

		if (BeadRoadObj.grid.root == null)
			BeadRoadObj.grid.root = []
		BeadRoadObj.grid.root[index] = clone

		for(let  j = 1;  j <= clone.childrenCount; ++ j){
			BeadRoad[index][j] = {}
			BeadRoad[index][j].root =cc.find("Item_"+j, clone)
			BeadRoad[index][j].img =cc.find("Item_"+j+"/Image", clone).getComponent(cc.Sprite)
			BeadRoad[index][j].root.active =(true)
			BeadRoad[index][j].img.node.active =(false)
			BeadRoad[index][j].resultUse = false
		}
		GameData.gameLayer.CreateBeadRoad()
	},

	CreateBigRoad(){
		let perfab =cc.find("BigRoad/Grid/Content", this.root)
		let clone = this.CreateClone(perfab)
		
		let index = BigRoad.length
		if (index == 0)
			index = 1		
		clone.name = "Content_" + index
		BigRoad[index] = []
		clone.active =(true)

		if (BigRoadObj.grid.root == null)
			BigRoadObj.grid.root = []
		BigRoadObj.grid.root[index] = clone

		for(let  j = 1;  j <= clone.childrenCount; ++ j){//	for j=1,BigRoad[index].root.children.length do
			BigRoad[index][j] = {}
			BigRoad[index][j].root =cc.find("Item_"+j, clone)
			BigRoad[index][j].img =cc.find("Item_"+j+"/Image", clone).getComponent(cc.Sprite)
			BigRoad[index][j].root.active =(true)
			BigRoad[index][j].img.node.active =(false)
			BigRoad[index][j].resultUse = 0   //結果
			BigRoad[index][j].columnUse = 0   //
		}
		GameData.gameLayer.CreateBigRoad()
	},

	CreateDayanlu(){
		let perfab =cc.find("Dayanlu/Grid/Content", this.root)
		let clone = this.CreateClone(perfab)
		
		let index = Dayanlu.length
		if (index == 0)
			index = 1
		clone.name = "Content_" + index
		Dayanlu[index] = []
		clone.active =(true)

		if (DayanluObj.grid.root == null)
			DayanluObj.grid.root = []
		DayanluObj.grid.root[index] = clone

		for(let  j = 1;  j <= clone.childrenCount; ++ j){//	for j=1,Dayanlu[index].root.children.length do
			Dayanlu[index][j] = {}
			Dayanlu[index][j].root =cc.find("Item_"+j, clone)
			Dayanlu[index][j].img =cc.find("Item_"+j+"/Image", clone).getComponent(cc.Sprite)
			Dayanlu[index][j].root.active =(true)
			Dayanlu[index][j].img.node.active =(false)
			Dayanlu[index][j].resultUse = 0   //結果
		}
	},

	CreateXiaoyanlu(){
		let perfab =cc.find("Xiaoyanlu/Grid/Content", this.root)
		let clone = this.CreateClone(perfab)
		
		let index = Xiaoyanlu.length
		if (index == 0)
			index = 1		
		clone.name = "Content_" + index
		Xiaoyanlu[index] = []
		clone.active =(true)

		if (XiaoyanluObj.grid.root == null)
			XiaoyanluObj.grid.root = []
		XiaoyanluObj.grid.root[index] = clone

		for(let  j = 1;  j <= clone.childrenCount; ++ j){//	for j=1,Xiaoyanlu[index].root.children.length do
			Xiaoyanlu[index][j] = {}
			Xiaoyanlu[index][j].root =cc.find("Item_"+j, clone)
			Xiaoyanlu[index][j].img =cc.find("Item_"+j+"/Image", clone).getComponent(cc.Sprite)
			Xiaoyanlu[index][j].root.active =(true)
			Xiaoyanlu[index][j].img.node.active =(false)
			Xiaoyanlu[index][j].resultUse = 0   //結果
		}
	},

	CreateZhanglanglu(){
		let perfab =cc.find("Zhanglanglu/Grid/Content", this.root)
		let clone = this.CreateClone(perfab)
		
		let index = Zhanglanglu.length
		if (index == 0)
			index = 1		
		clone.name = "Content_" + index
		Zhanglanglu[index] = []
		clone.active =(true)

		if (ZhanglangluObj.grid.root == null)
			ZhanglangluObj.grid.root = []
		ZhanglangluObj.grid.root[index] = clone

		for(let  j = 1;  j <= clone.childrenCount; ++ j){//	for j=1,Zhanglanglu[index].root.children.length do
			Zhanglanglu[index][j] = {}
			Zhanglanglu[index][j].root =cc.find("Item_"+j, clone)
			Zhanglanglu[index][j].img =cc.find("Item_"+j+"/Image", clone).getComponent(cc.Sprite)
			Zhanglanglu[index][j].root.active =(true)
			Zhanglanglu[index][j].img.node.active =(false)
			Zhanglanglu[index][j].resultUse = 0   //結果
		}
	},

	//- 更新界面
	update(data){
		
	},

	//- 显示界面
	show(){
		this.root.active =(true)
	},

	UpdateCardType(result,effect){
		for(let  i = CardTypeCount - 1;  i > 0; -- i){//	for i=1,OutCardTypeCount do
			if(CardType[i].isUse == true ){
				CardType[i + 1].isUse = true
				CardType[i + 1].root.active =(true)
				CardType[i + 1].img.spriteFrame = CardType[i].img.spriteFrame
			}
		}

		var i = 1
		CardType[i].isUse = true
		CardType[i].root.active =(true)
//----->需重新編譯程式碼			CardType[i].root:SetAsFirstSibling()
		let last = i -1
		if(last <= 0 ){ last = CardTypeCount }
		CardType[last].light.node.active =(false)
		CardType[i].light.node.active =(true)
		if(result == 1 ){
			GameG.SetImageSprite(CardType[i].img, G.GetGamePName(), "cardtype_out_1")
		} 
		else if( result == 2 ){
			GameG.SetImageSprite(CardType[i].img, G.GetGamePName(), "cardtype_out_2")
		} 
		else if( result == 3 ){
			GameG.SetImageSprite(CardType[i].img, G.GetGamePName(), "cardtype_out_3")
		} 
		else if( result == 4 ){
			GameG.SetImageSprite(CardType[i].img, G.GetGamePName(), "cardtype_out_4")
		} 
		else if( result == 5 ){
			GameG.SetImageSprite(CardType[i].img, G.GetGamePName(), "cardtype_out_5")
		} 
		else if( result == 6 ){
			GameG.SetImageSprite(CardType[i].img, G.GetGamePName(), "cardtype_out_6")
		} 
		else if( result == 7 ){
			GameG.SetImageSprite(CardType[i].img, G.GetGamePName(), "cardtype_out_7")
		} 
		else{
			CardType[i].root.active =(false)
		}

		this.ShowEffect(CardType[i].root)
	},

	UpdateOutCardType(result,effect){
		for(let  i = OutCardTypeCount - 1;  i > 0; -- i){//	for i=1,OutCardTypeCount do
			if(OutCardType[i].isUse == true ){
				OutCardType[i + 1].isUse = true
				OutCardType[i + 1].root.active =(true)
				OutCardType[i + 1].img.spriteFrame = OutCardType[i].img.spriteFrame
			}
		}
		
		var i = 1
		OutCardType[i].isUse = true
		OutCardType[i].root.active =(true)
//----->需重新編譯程式碼			OutCardType[i].root:SetAsFirstSibling()
		let last = i -1
		if(last <= 0 ){ last = OutCardTypeCount }
		OutCardType[last].light.node.active =(false)
		OutCardType[i].light.node.active =(true)
		if(result == 1 ){
			GameG.SetImageSprite(OutCardType[i].img, G.GetGamePName(), "cardtype_out_1")
		} 
		else if( result == 2 ){
			GameG.SetImageSprite(OutCardType[i].img, G.GetGamePName(), "cardtype_out_2")
		} 
		else if( result == 3 ){
			GameG.SetImageSprite(OutCardType[i].img, G.GetGamePName(), "cardtype_out_3")
		} 
		else if( result == 4 ){
			GameG.SetImageSprite(OutCardType[i].img, G.GetGamePName(), "cardtype_out_4")
		} 
		else if( result == 5 ){
			GameG.SetImageSprite(OutCardType[i].img, G.GetGamePName(), "cardtype_out_5")
		} 
		else if( result == 6 ){
			GameG.SetImageSprite(OutCardType[i].img, G.GetGamePName(), "cardtype_out_6")
		} 
		else if( result == 7 ){
			GameG.SetImageSprite(OutCardType[i].img, G.GetGamePName(), "cardtype_out_7")
		} 
		else{
			OutCardType[i].root.active =(false)
		}

		this.ShowEffect(OutCardType[i].root)
	},

	CloseZhiLuo(){
		DayanluZhiLuo = false
		XiaoyanluZhiLuo = false
		ZhanglangluZhiLuo = false
	},

	UpdateBeadRoad(result,effect){
		for(let  i = 1;  i < BeadRoad.length; ++ i){
			for(let  j = 1;  j < BeadRoad[i].length; ++ j){
				if(BeadRoad[i][j].resultUse == false ){
					BeadRoad[i][j].resultUse = true
					let obj = BeadRoad[i][j]
					let gameLayerObj = GameData.gameLayer.GetBeadRoad(i, j)
					if(result == 1 ){ 
						obj.img.node.active =(true)
						GameG.SetImageSprite(obj.img, G.GetGamePName(), xiaoyanluRed)
						gameLayerObj.img.node.active =(true)
						GameG.SetImageSprite(gameLayerObj.img, G.GetGamePName(), xiaoyanluRed)
					} 
					else if( result == 2 ){
						obj.img.node.active =(true)
						GameG.SetImageSprite(obj.img, G.GetGamePName(), xiaoyanluBlack)
						gameLayerObj.img.node.active =(true)
						GameG.SetImageSprite(gameLayerObj.img, G.GetGamePName(), xiaoyanluBlack)
					} 
					else{
						obj.img.node.active =(false)
						gameLayerObj.img.nodeactive =(false)
					}
					
					if(effect == true ){
						this.ShowEffect(obj.root)
						this.ShowEffect(gameLayerObj.root)
					}
					this.ShowCurrentResult(BeadRoad, i, BeadRoadCount, BeadRoadObj.grid)
					return
				}
			}
		}
		
		this.CreateBeadRoad()
		this.UpdateBeadRoad(result,effect)
	},

	UpdateBigRoadData(result,effect){
	
		let gameLayerNext = GameData.gameLayer.GetRoadUI().nextRound
	
		if(BigRoadDataColumn != 1 || BigRoadDataRow > 1 ){ 
			if(BigRoadData[BigRoadDataColumn][BigRoadDataRow - 1] != result ){
				BigRoadDataColumn = BigRoadDataColumn + 1
				BigRoadDataRow = 1
				this.CloseZhiLuo()
			}
		}
		if(BigRoadData[BigRoadDataColumn] == null ){
			BigRoadData[BigRoadDataColumn] = []
		}
		BigRoadData[BigRoadDataColumn][BigRoadDataRow] = result
	
		//更新大眼路
		if ((BigRoadDataColumn >= 2 && BigRoadDataRow >= 2) || BigRoadDataColumn >= 3) {
			if(DayanluZhiLuo ){
				this.UpdateDayanlu(1,effect)
			} 
			else if( BigRoadDataRow == 1 ){
				let dayanluResult = BigRoadData[BigRoadDataColumn-1].length == BigRoadData[BigRoadDataColumn-2].length && 1 || 2
				
				this.UpdateDayanlu(dayanluResult,effect)
			} 
			else if( BigRoadDataRow > 1 ){ 
				let dayanluResult = BigRoadData[BigRoadDataColumn-1][BigRoadDataRow] != null && 1 || 2
				this.UpdateDayanlu(dayanluResult,effect)
				if(dayanluResult == 2 ){ DayanluZhiLuo = true }
			}
		}
	
		//下局大眼路
		if( BigRoadDataColumn >= 2 ){
			nextBlackDayanlu.node.active =(true)
			nextRedDayanlu.node.active =(true)
			gameLayerNext.nextBlackDayanlu.node.active =(true)
			gameLayerNext.nextRedDayanlu.node.active =(true)
			let nextBlack = ""
			let nextRed = ""
			let youwu = BigRoadData[BigRoadDataColumn-1][BigRoadDataRow + 1] == null //有無
			let qizheng = BigRoadData[BigRoadDataColumn-1].length == BigRoadData[BigRoadDataColumn].length //齊整
			if(result == 2 ){
				if(DayanluZhiLuo ){
					nextBlack = eyeRed
			} 
			else{
					nextBlack = youwu && eyeBlack || eyeRed
				}
				nextRed = qizheng && eyeRed || eyeBlack
			} 
			else if( result == 1 ){

				if(DayanluZhiLuo ){
					nextRed = eyeRed
				} 
				else{
					nextRed = youwu && eyeBlack || eyeRed
				}
				nextBlack = qizheng && eyeRed || eyeBlack
			}
			GameG.SetImageSprite(nextBlackDayanlu, G.GetGamePName(),nextBlack)
			GameG.SetImageSprite(gameLayerNext.nextBlackDayanlu, G.GetGamePName(),nextBlack)
			GameG.SetImageSprite(nextRedDayanlu, G.GetGamePName(),nextRed)
			GameG.SetImageSprite(gameLayerNext.nextRedDayanlu, G.GetGamePName(),nextRed)
		}
		
		//更新小眼路
		if ((BigRoadDataColumn >= 3 && BigRoadDataRow >= 2) || BigRoadDataColumn >= 4) { 
			if(XiaoyanluZhiLuo ){
				this.UpdateXiaoyanlu(1,effect)
			} 
			else if( BigRoadDataRow == 1 ){
				let xiaoyanluResult = BigRoadData[BigRoadDataColumn-1].length == BigRoadData[BigRoadDataColumn-3].length && 1 || 2
				this.UpdateXiaoyanlu(xiaoyanluResult,effect)
			} 
			else if( BigRoadDataRow > 1 ){ 
				let xiaoyanluResult = BigRoadData[BigRoadDataColumn-2][BigRoadDataRow] != null && 1 || 2
				this.UpdateXiaoyanlu(xiaoyanluResult,effect)
				if(xiaoyanluResult == 2 ){ XiaoyanluZhiLuo = true }
			}
		}
	
	 	//下局小眼路
		if( BigRoadDataColumn >= 3 ){
			nextBlackXiaoyanlu.node.active =(true)
			nextRedXiaoyanlu.node.active =(true)
			gameLayerNext.nextBlackXiaoyanlu.node.active =(true)
			gameLayerNext.nextRedXiaoyanlu.node.active =(true)
			let nextlong = ""
			let nexthu = ""
			let youwu = BigRoadData[BigRoadDataColumn-2][BigRoadDataRow + 1] == null //有無
			let qizheng = BigRoadData[BigRoadDataColumn-2].length == BigRoadData[BigRoadDataColumn].length //齊整
			if(result == 2 ){
				if(XiaoyanluZhiLuo ){
					nextlong = xiaoyanluRed 
			} 
			else{
				nextlong = youwu && xiaoyanluBlack || xiaoyanluRed
			}
			nexthu = qizheng && xiaoyanluRed || xiaoyanluBlack
		} 
		else if( result == 1 ){
			if(XiaoyanluZhiLuo ){
				nexthu = xiaoyanluRed
			} 
			else{
					nexthu = youwu && xiaoyanluBlack || xiaoyanluRed
				}
				nextlong = qizheng && xiaoyanluRed || xiaoyanluBlack
			}
			GameG.SetImageSprite(nextBlackXiaoyanlu, G.GetGamePName(),nextlong)
			GameG.SetImageSprite(gameLayerNext.nextBlackXiaoyanlu, G.GetGamePName(),nextlong)
			GameG.SetImageSprite(nextRedXiaoyanlu, G.GetGamePName(),nexthu)
			GameG.SetImageSprite(gameLayerNext.nextRedXiaoyanlu, G.GetGamePName(),nexthu)
		}
	
		//更新蟑螂路
		if ((BigRoadDataColumn >= 4 && BigRoadDataRow >= 2) || BigRoadDataColumn >= 5)  { 
			if(ZhanglangluZhiLuo ){
				this.UpdateZhanglanglu(1,effect)
			} 
			else if( BigRoadDataRow == 1 ){
				let zhanglangluResult = BigRoadData[BigRoadDataColumn-1].length == BigRoadData[BigRoadDataColumn-4].length && 1 || 2
				this.UpdateZhanglanglu(zhanglangluResult,effect)
			} 
			else if( BigRoadDataRow > 1 ){ 
				let zhanglangluResult = BigRoadData[BigRoadDataColumn-3][BigRoadDataRow] != null && 1 || 2
				this.UpdateZhanglanglu(zhanglangluResult,effect)
				if(zhanglangluResult == 2 ){ ZhanglangluZhiLuo = true }
			}
		}
		
		//下局蟑螂路
		if( BigRoadDataColumn >= 4 ){
			nextBlackZhanglanglu.node.active =(true)
			nextRedZhanglanglu.node.active =(true)
			gameLayerNext.nextBlackZhanglanglu.node.active =(true)
			gameLayerNext.nextRedZhanglanglu.node.active =(true)
			let nextlong = ""
			let nexthu = ""
			let youwu = BigRoadData[BigRoadDataColumn-3][BigRoadDataRow + 1] == null //有無
			let qizheng = BigRoadData[BigRoadDataColumn-3].length == BigRoadData[BigRoadDataColumn].length //齊整
			if(result == 2 ){
				if(ZhanglangluZhiLuo ){
					nextlong = zhanglangluRed
				} 
				else{
					nextlong = youwu && zhanglangluBlack || zhanglangluRed
				}
				nexthu = qizheng && zhanglangluRed || zhanglangluBlack
			} 
			else if( result == 1 ){
				if(ZhanglangluZhiLuo ){
					nexthu = zhanglangluRed
				} 
				else{
					nexthu = youwu && zhanglangluBlack || zhanglangluRed
				}
				nextlong = qizheng && zhanglangluRed || zhanglangluBlack
			}
			GameG.SetImageSprite(nextBlackZhanglanglu, G.GetGamePName(),nextlong)
			GameG.SetImageSprite(gameLayerNext.nextBlackZhanglanglu, G.GetGamePName(),nextlong)
			GameG.SetImageSprite(nextRedZhanglanglu, G.GetGamePName(),nexthu)
			GameG.SetImageSprite(gameLayerNext.nextRedZhanglanglu, G.GetGamePName(),nexthu)
		}
		BigRoadDataRow = BigRoadDataRow + 1
	},

	UpdateBigRoad(result,effect){
		this.UpdateBigRoadData(result,effect)
		let row = 1
		for(let  i = BigRoadUse;  i < BigRoad.length; ++ i){
			for(let  j = row;  j < BigRoad[i].length; ++ j){
				if(i != BigRoadUse && j != row ){
					break
				} 
				else if( BigRoad[i][j].resultUse == 0 ){
					BigRoadObj.grid.root[i].active =(true)

					let obj = BigRoad[i][j]				
					obj.img.node.active =(true)
					obj.resultUse = result
					obj.columnUse = BigRoadUse

					let gameLayerObj = GameData.gameLayer.GetBigRoad(i, j)
					gameLayerObj.img.node.active =(true)

					if(effect == true ){
						this.ShowEffect(obj.root)
						this.ShowEffect(gameLayerObj.root)
					}
					if(result == 1 ){
						GameG.SetImageSprite(obj.img, G.GetGamePName(),eyeRed )
						GameG.SetImageSprite(gameLayerObj.img, G.GetGamePName(),eyeRed)
					} 
					else if( result == 2 ){
						GameG.SetImageSprite(obj.img, G.GetGamePName(),eyeBlack)
						GameG.SetImageSprite(gameLayerObj.img, G.GetGamePName(),eyeBlack)
					} 
					else{
						obj.img.node.active =(false)
						obj.resultUse = 0
						obj.columnUse = 0
						gameLayerObj.img.node.active =(false)
					}
					this.ShowCurrentResult(BigRoad,i,BigRoadCount,BigRoadObj.grid)
					return
				} 
				//不同结果换行
				else if( BigRoad[i][1].resultUse == 1 && result == 2 ){
					BigRoadUse = BigRoadUse+1
					row = 1
					break
				} 
				//不同结果换行
				else if( BigRoad[i][1].resultUse == 2 && result == 1 ){
					BigRoadUse = BigRoadUse+1
					row = 1
					break
				} 
				//其他结果已使用向右排序
				else if( BigRoad[i][j].resultUse != result ){
					row = j -1
					break
					
				} 
				//其他结果已使用向右排序
				else if( BigRoad[i][j].columnUse != BigRoadUse ){
					row = j -1
					break
				
				} 
				//到底向右排序
				else if( j == BigRoad[i].length - 1){
					row = j
					break
				}
			}
		}

		this.CreateBigRoad()
		this.UpdateBigRoad(result,effect)
	},

	//更新大眼路
	UpdateDayanlu(result,effect){
		//不同結果換行
		if(DayanluColumnUse != 1 || DayanluRowUse != 1 ){
			if(result != Dayanlu[DayanluColumnUse][DayanluRowUse - 1].resultUse ){
				DayanluRight = 0
				DayanluColumnUse = DayanluColumnUse + 1
				DayanluRowUse = 1
			}
		}
		
		let column = DayanluColumnUse + DayanluRight
		if(Dayanlu.length - column < 3 ){ 
			this.CreateDayanlu()
		}
	
		let obj = Dayanlu[column][DayanluRowUse]
		obj.img.node.active =(true)
		obj.resultUse = result
		if(effect == true ){
			this.ShowEffect(obj.root)
		}
		if(result == 2 ){
			GameG.SetImageSprite(obj.img, G.GetGamePName(), eyeBlack)
		} 
		else if( result == 1 ){
			GameG.SetImageSprite(obj.img, G.GetGamePName(), eyeRed)
		} 
		else{
			obj.img.node.active =(false)
			obj.resultUse = 0
		}
	
		if(DayanluRowUse == 6 || Dayanlu[column][DayanluRowUse + 1].resultUse != 0 ){
			DayanluRight = DayanluRight + 1
		} 
		else{
			DayanluRowUse = DayanluRowUse + 1
		}
	},

	//更新小眼路
	UpdateXiaoyanlu(result,effect){
		//不同結果換行
		if(XiaoyanluColumnUse != 1 || XiaoyanluRowUse != 1 ){
			if(result != Xiaoyanlu[XiaoyanluColumnUse][XiaoyanluRowUse - 1].resultUse ){
				XiaoyanluRight = 0
				XiaoyanluColumnUse = XiaoyanluColumnUse + 1
				XiaoyanluRowUse = 1
			}
		}
	
		let column = XiaoyanluColumnUse + XiaoyanluRight
		if(Xiaoyanlu.length - column < 3 ){ 
			this.CreateXiaoyanlu()
		}
	
		let obj = Xiaoyanlu[column][XiaoyanluRowUse]
		obj.img.node.active =(true)
		obj.resultUse = result
		if(effect == true ){
			this.ShowEffect(obj.root)
		}
		if(result == 2 ){
			GameG.SetImageSprite(obj.img, G.GetGamePName(), xiaoyanluBlack)
		} 
		else if( result == 1 ){
			GameG.SetImageSprite(obj.img, G.GetGamePName(), xiaoyanluRed)
		} 
		else{
			obj.img.node.active =(false)
			obj.resultUse = 0
		}
	
		if(XiaoyanluRowUse == 6 || Xiaoyanlu[column][XiaoyanluRowUse + 1].resultUse != 0 ){
			XiaoyanluRight = XiaoyanluRight + 1
		} 
		else{
			XiaoyanluRowUse = XiaoyanluRowUse + 1
		}
	},

	//更新蟑螂路
	UpdateZhanglanglu(result,effect){
		//不同結果換行
		if(ZhanglangluColumnUse != 1 || ZhanglangluRowUse != 1 ){
			if(result != Zhanglanglu[ZhanglangluColumnUse][ZhanglangluRowUse - 1].resultUse ){
				ZhanglangluRight = 0
				ZhanglangluColumnUse = ZhanglangluColumnUse + 1
				ZhanglangluRowUse = 1
			}
		}
	
		let column = ZhanglangluColumnUse + ZhanglangluRight
		if(Zhanglanglu.length - column < 3 ){ 
			this.CreateZhanglanglu()
		}
	
		let obj = Zhanglanglu[column][ZhanglangluRowUse]
		obj.img.node.active =(true)
		obj.resultUse = result
		if(effect == true ){
			this.ShowEffect(obj.root)
		}
		if(result == 2 ){
			GameG.SetImageSprite(obj.img, G.GetGamePName(), zhanglangluBlack)
		} 
		else if( result == 1 ){
			GameG.SetImageSprite(obj.img, G.GetGamePName(), zhanglangluRed)
		} 
		else{
			obj.img.node.active =(false)
			obj.resultUse = 0
		}
	
		if(ZhanglangluRowUse == 6 || Zhanglanglu[column][ZhanglangluRowUse + 1].resultUse != 0 ){
			ZhanglangluRight = ZhanglangluRight + 1
		} 
		else{
			ZhanglangluRowUse = ZhanglangluRowUse + 1
		}
	},

	ClearBeadRoad(){
		BeadRoadObj.grid.rect.position = BeadRoadObj.grid.initPos
		for(let  i = 1;  i < BeadRoad.length; ++ i){
			BeadRoadObj.grid.root[i].active =(i <= BeadRoadCount)
			for(let  j = 1;  j < BeadRoad[i].length; ++ j){
				BeadRoad[i][j].resultUse = false
				BeadRoad[i][j].img.node.active =(false)
				GameData.gameLayer.GetBeadRoad(i, j).img.node.active =(false)
			}
		}
	},

	ClearBigRoad(){
		BigRoadData = []
		BigRoadDataRow = 1
		BigRoadDataColumn = 1
		this.CloseZhiLuo()
	
		BigRoadUse = 1
		BigRoadObj.grid.rect.position = BigRoadObj.grid.initPos
		for(let  i = 1;  i < BigRoad.length; ++ i){
			BigRoadObj.grid.root[i].active =(i <= BigRoadCount)
			for(let  j = 1;  j < BigRoad[i].length; ++ j){
				let gameLayerObj = GameData.gameLayer.GetBigRoad(i, j)
				BigRoad[i][j].img.node.active =(false)
				gameLayerObj.img.node.active =(false)
				BigRoad[i][j].resultUse = 0
				BigRoad[i][j].columnUse = 0
			}
		}
	},

	ClearDayanlu(){
		DayanluColumnUse = 1
		DayanluRowUse = 1
		DayanluRight = 0
	
		
		nextBlackDayanlu.node.active =(false)
		nextRedDayanlu.node.active =(false)
		GameData.gameLayer.GetRoadUI().nextRound.nextBlackDayanlu.node.active =(false)
		GameData.gameLayer.GetRoadUI().nextRound.nextRedDayanlu.node.active =(false)
	
		DayanluObj.grid.rect.position = DayanluObj.grid.initPos
		for(let  i = 1;  i < Dayanlu.length; ++ i){
			for(let  j = 1;  j < Dayanlu[i].length; ++ j){
				Dayanlu[i][j].img.node.active =(false)
				Dayanlu[i][j].resultUse = 0
			}
		}
	},

	ClearXiaoyanlu(){
		XiaoyanluColumnUse = 1
		XiaoyanluRowUse = 1
		XiaoyanluRight = 0
		nextBlackXiaoyanlu.node.active =(false)
		nextRedXiaoyanlu.node.active =(false)
		GameData.gameLayer.GetRoadUI().nextRound.nextBlackXiaoyanlu.node.active =(false)
		GameData.gameLayer.GetRoadUI().nextRound.nextRedXiaoyanlu.node.active =(false)
		
		XiaoyanluObj.grid.rect.position = XiaoyanluObj.grid.initPos
		for(let  i = 1;  i < Xiaoyanlu.length; ++ i){
			for(let  j = 1;  j < Xiaoyanlu[i].length; ++ j){
				Xiaoyanlu[i][j].img.node.active =(false)
				Xiaoyanlu[i][j].resultUse = 0
			}
		}
	},

	ClearZhanglanglu(){
		ZhanglangluColumnUse = 1
		ZhanglangluRowUse = 1
		ZhanglangluRight = 0
		nextBlackZhanglanglu.node.active =(false)
		nextRedZhanglanglu.node.active =(false)
		GameData.gameLayer.GetRoadUI().nextRound.nextBlackZhanglanglu.node.active =(false)
		GameData.gameLayer.GetRoadUI().nextRound.nextRedZhanglanglu.node.active =(false)
	
		ZhanglangluObj.grid.rect.position = ZhanglangluObj.grid.initPos
		for(let  i = 1;  i < Zhanglanglu.length; ++ i){
			for(let  j = 1;  j < Zhanglanglu[i].length; ++ j){
				Zhanglanglu[i][j].img.node.active =(false)
				Zhanglanglu[i][j].resultUse = 0
			}
		}
	},

	SetRound(){
		if (GameData.resultRound == null)
			return

		txt_round1.string = parseInt(GameData.resultRound.HungWin).toString();
		txt_round2.string = parseInt(GameData.resultRound.HeiWin).toString();
		txt_round3.string = parseInt(GameData.resultRound.RoundID).toString();
		GameData.gameLayer.GetRoundUI().red.string = parseInt(GameData.resultRound.HungWin).toString();
		GameData.gameLayer.GetRoundUI().black.string = parseInt(GameData.resultRound.HeiWin).toString();
		GameData.gameLayer.GetRoundUI().total.string = parseInt(GameData.resultRound.RoundID).toString();
	    GameData.gameLayer.updateRound(GameData.resultRound.RoundID)
	},

	//- 更新界面
	addRst(data,round,effect){
		let result = data.Win
		//清掉所有路单
		if(round == 1 ){
			this.ClearBeadRoad()
			this.ClearBigRoad()
			this.ClearDayanlu()
			this.ClearXiaoyanlu()
			this.ClearZhanglanglu()
			this.ClearRate()
		}
		
		this.UpdateBeadRoad(result,effect)
		this.UpdateBigRoad(result,effect)
		this.UpdateRate(result)
		this.SetRound()
		
		if(result == 1 ){
			let cardType = GameData.compare.GetCardType(data.HungZuHe)
			this.UpdateCardType(cardType,effect)
			this.UpdateOutCardType(cardType,effect)
		} 
		else if( result == 2 ){
			let cardType = GameData.compare.GetCardType(data.HeiZuHe)
			this.UpdateCardType(cardType,effect)
			this.UpdateOutCardType(cardType,effect)
		}
	},

	ClearRate(){
		Rate = []
	},

	UpdateRate(result){
		
		Rate.push(result)
		if(Rate.length > SingleCount ){
			Rate.shift()
		}
		
		let winL = 0
		let total = 0
		
		for(let  i  =  1;  i  <=  Rate.length; ++ i ){
			if(Rate[i] == 1 ){
				total = total +1
			} 
			else if( Rate[i] == 2 ){
				winL = winL +1
				total = total +1
			}
		}
		
		let rateL = Math.floor(G.CaseWhen(total > 0,winL/ total,0)*100)
		let rateR = G.CaseWhen(total > 0, 100 - rateL,0)
		
		txt_rateL.string = rateL + "%"
		txt_rateR.string = rateR + "%"
		
		img_rate.scale = cc.v3(G.CaseWhen(rateL > 0,rateL / 100,0.5) ,1,1)
		img_rateMid.position = attach_rateMid.position
	},

	ShowEffect(obj){
		let sqs = GameG.NewTween(obj)
		sqs.to(0.5, {opacity: 0})
		sqs.to(0.5, {opacity: 255})
		sqs.to(0.5, {opacity: 0})
		sqs.to(0.5, {opacity: 255})
		sqs.start()
	},

	ShowCurrentResult(pool,column,columnMax,grid){
		let count = G.CaseWhen( column < columnMax, 0, column - columnMax)
		let item = grid.perfab.width
		grid.rect.position = cc.v2(item * count * -1 + grid.initPos.x, grid.initPos.y)
	},


};

module.exports = ChartLayer
