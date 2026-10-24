//region *.lua
//Date
//此文件由[BabeLua]插件自动生成
//endregion
var G = require("Global")
var ChartLayer = fmg.class("ChartLayer")
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
/*
function ChartLayer:UpdateSingle(result,effect)
	for i=1,SingleCount do
		if Single[i].root.gameObject.activeSelf == false then
			Single[i].root.gameObject:SetActive(true)
//----->需重新編譯程式碼			Single[i].root.transform:SetAsFirstSibling()
			local last = i -1
			if last <= 0 then last = SingleCount end
			Single[last].light.gameObject:SetActive(false)
			Single[i].light.gameObject:SetActive(true)
			if result == 1 then
				CS.UISpriteManager.Instance:SetImageSprite(Single[i].img, G.GetGamePName(), "roadmap_1")
			elseif result == 2 then
				CS.UISpriteManager.Instance:SetImageSprite(Single[i].img, G.GetGamePName(), "roadmap_2")
			else
				Single[i].root.gameObject:SetActive(false)
			end
			
			if effect == true then
				self:ShowEffect(Single[i].img)
			end
			return
		end
	end
	
	/*
	Single[SingleIndex].root.gameObject:SetActive(false)
	SingleIndex = SingleIndex + 1
	if SingleIndex > SingleCount then
		SingleIndex = 1
	end
	
	self:UpdateSingle(result,effect)
end
*/
/*
function ChartLayer:UpdateOutSingle(result,effect)
	for i=1,SingleCount do
		if OutSingle[i].root.gameObject.activeSelf == false then
			OutSingle[i].root.gameObject:SetActive(true)
//----->需重新編譯程式碼			OutSingle[i].root.transform:SetAsFirstSibling()
			local last = i -1
			if last <= 0 then last = SingleCount end
			OutSingle[last].light.gameObject:SetActive(false)
			OutSingle[i].light.gameObject:SetActive(true)
			if result == 1 then
				CS.UISpriteManager.Instance:SetImageSprite(OutSingle[i].img, G.GetGamePName(), "roadmap_1")
			elseif result == 2 then
				CS.UISpriteManager.Instance:SetImageSprite(OutSingle[i].img, G.GetGamePName(), "roadmap_2")
			else
				OutSingle[i].root.gameObject:SetActive(false)
			end
			
			if effect == true then
				self:ShowEffect(OutSingle[i].img)
			end
			return
		end
	end
	
	OutSingle[OutSingleIndex].root.gameObject:SetActive(false)
	OutSingleIndex = OutSingleIndex + 1
	if OutSingleIndex > SingleCount then
		OutSingleIndex = 1
	end
	
	self:UpdateOutSingle(result,effect)
end
*/

var ChartLayer = {
	extends: cc.Component,

//-
	ChartLayer:ctor(){
	
		self:initUi()
	},

//-
	ChartLayer:onExit(){
		root.active =(false)
	},

//-
	ChartLayer:initUi(){
	
		let canvas = cc.find("Canvas")
		root =cc.find("ChartLayer", canvas)
		
		btn_close =cc.find("ButtonClose", root).getComponent(cc.Button)
		btn_close.node.on('click',function(){
	        hhdz.gameAudio:btnClick()
			self:onExit()
		})
		
	// txt_round1 = root.transform:Find("Round/Image1/Text"):GetComponent("Text")
	// txt_round2 = root.transform:Find("Round/Image2/Text"):GetComponent("Text")
	// txt_round3 = root.transform:Find("Round/Image3/Text"):GetComponent("Text")
		txt_round1 =cc.find("Down/TextRed", root).getComponent(cc.Label)
		txt_round2 =cc.find("Down/TextBlack", root).getComponent(cc.Label)
		txt_round3 =cc.find("Down/TextTotal", root).getComponent(cc.Label)
		
		txt_round1.text = "0"
		txt_round2.text = "0"
		txt_round3.text = "0"
		
		img_rate =cc.find("Rate", root).getComponent(cc.Sprite)
		img_rateMid =cc.find("RateMid", root).getComponent(cc.Sprite)
		attach_rateMid =cc.find("Rate/AttachMid", root)
		txt_rateL =cc.find("RateMid/TextL", root).getComponent(cc.Label)
		txt_rateR =cc.find("RateMid/TextR", root).getComponent(cc.Label)
		txt_rateL.text = ""
		txt_rateR.text = ""
	
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
			CardType[i] = []
			CardType[i].root =cc.find("CardType/Item_"+i, root)
			CardType[i].light =cc.find("CardType/Item_"+i+"/Light", root).getComponent(cc.Sprite)
			CardType[i].img =cc.find("CardType/Item_"+i+"/Icon", root).getComponent(cc.Sprite)
			CardType[i].root.active =(false)
			CardType[i].light.active =(false)
		}
		
	//牌型
		OutCardType = []
		OutCardTypeIndex = 1
	for(let  i = 1;  i <= OutCardTypeCount; ++ i){//	for i=1,OutCardTypeCount do
			OutCardType[i] = []
			OutCardType[i].root =cc.find("GameLayer/_chartLayer/CardType/Item_"+i, canvas)
			OutCardType[i].light =cc.find("GameLayer/_chartLayer/CardType/Item_"+i+"/Light", canvas).getComponent(cc.Sprite)
			OutCardType[i].img =cc.find("GameLayer/_chartLayer/CardType/Item_"+i+"/Icon", canvas).getComponent(cc.Sprite)
			OutCardType[i].root.active =(false)
			OutCardType[i].light.active =(false)
		}
		
	/*
	//单排路
	Single = {}
	SingleIndex = 1
	for i=1,SingleCount do
		Single[i] = {}
		Single[i].root = root.transform:Find("Single/Item_"..i):GetComponent("RectTransform")
		Single[i].light = root.transform:Find("Single/Item_"..i.."/Light"):GetComponent("Image")
		Single[i].img = root.transform:Find("Single/Item_"..i.."/Icon"):GetComponent("Image")
		Single[i].root.gameObject:SetActive(false)
		Single[i].light.gameObject:SetActive(false)
	end
	
	//单排路
	OutSingle = {}
	OutSingleIndex = 1
	for i=1,SingleCount do
		OutSingle[i] = {}
		OutSingle[i].root = canvas.transform:Find("GameLayer/_chartLayer/Single/Item_"..i):GetComponent("RectTransform")
		OutSingle[i].light = canvas.transform:Find("GameLayer/_chartLayer/Single/Item_"..i.."/Light"):GetComponent("Image")
		OutSingle[i].img = canvas.transform:Find("GameLayer/_chartLayer/Single/Item_"..i.."/Icon"):GetComponent("Image")
		OutSingle[i].root.gameObject:SetActive(false)
		OutSingle[i].light.gameObject:SetActive(false)
	end
	*/
	
	//珠盘路
		BeadRoad = []
		BeadRoad.grid = []
		BeadRoad.grid.rect =cc.find("BeadRoad/Grid", root)
		BeadRoad.grid.layout =cc.find("BeadRoad/Grid", root).getComponent(cc.Layout)
	for(let  i = 1;  i <= BeadRoadCount; ++ i){//	for i=1,BeadRoadCount do
			self:CreateBeadRoad()
		}
		
	//大路
		BigRoad = []
		BigRoadUse = 1
		BigRoad.grid = []
		BigRoad.grid.rect =cc.find("BigRoad/Grid", root)
		BigRoad.grid.layout =cc.find("BigRoad/Grid", root).getComponent(cc.Layout)
	for(let  i = 1;  i <= BigRoadCount; ++ i){//	for i=1,BigRoadCount do
			self:CreateBigRoad()
		}
	
	//大眼路
		Dayanlu = []
		DayanluColumnUse = 1
		DayanluRowUse = 1
		Dayanlu.grid = []
		Dayanlu.grid.rect =cc.find("Dayanlu/Grid", root)
		Dayanlu.grid.layout =cc.find("Dayanlu/Grid", root).getComponent(cc.Layout)
	for(let  i = 1;  i <= DayanluCount; ++ i){//	for i=1,DayanluCount do
			self:CreateDayanlu()
		}
	
		
	//小眼路
		Xiaoyanlu = []
		XiaoyanluColumnUse = 1
		XiaoyanluRowUse = 1
		Xiaoyanlu.grid = []
		Xiaoyanlu.grid.rect =cc.find("Xiaoyanlu/Grid", root)
		Xiaoyanlu.grid.layout =cc.find("Xiaoyanlu/Grid", root).getComponent(cc.Layout)
	for(let  i = 1;  i <= XiaoyanluCount; ++ i){//	for i=1,XiaoyanluCount do
			self:CreateXiaoyanlu()
		}
	
	//蟑螂路
		Zhanglanglu = []
		ZhanglangluColumnUse = 1
		ZhanglangluRowUse = 1
		Zhanglanglu.grid = []
		Zhanglanglu.grid.rect =cc.find("Zhanglanglu/Grid", root)
		Zhanglanglu.grid.layout =cc.find("Zhanglanglu/Grid", root).getComponent(cc.Layout)
	for(let  i = 1;  i <= ZhanglangluCount; ++ i){//	for i=1,ZhanglangluCount do
			self:CreateZhanglanglu()
		}
	
	},

	ChartLayer:updateLimit(HungHe,XingYun){
		HungHeLimit.text = hhdz.gameLayer:MoneyText(HungHe)
		XingYunLimit.text = hhdz.gameLayer:MoneyText(XingYun)
	},

	ChartLayer:CreateClone(perfab){
		let clone = cc.instantiate(perfab)
		if(clone == null){ return null }
		clone.parent =(perfab.parent)
		clone.position = cc.v3(0, 0, 0)
		clone.scale = cc.v3(1, 1, 1)
	
		return clone
	},

	ChartLayer:CreateBeadRoad(){
		let perfab =cc.find("BeadRoad/Grid/Content", root)
		let clone = self:CreateClone(perfab)
		
		let index = BeadRoad.length +1
		BeadRoad[index] = []
		BeadRoad[index].root = clone
		BeadRoad[index].root.active =(true)
	for(let  j = 1;  j <= BeadRoad[index].root.children.length; ++ j){//	for j=1,BeadRoad[index].root.children.length do
			BeadRoad[index][j] = []
			BeadRoad[index][j].root =cc.find("Item_"+j, clone)
			BeadRoad[index][j].img =cc.find("Item_"+j+"/Image", clone).getComponent(cc.Sprite)
			BeadRoad[index][j].root.active =(true)
			BeadRoad[index][j].img.active =(false)
		}
		hhdz.gameLayer:CreateBeadRoad()
	},

	ChartLayer:CreateBigRoad(){
		let perfab =cc.find("BigRoad/Grid/Content", root)
		let clone = self:CreateClone(perfab)
		
		let index = BigRoad.length +1
		clone.name = "Content_" + index
		BigRoad[index] = []
		BigRoad[index].root = clone
		BigRoad[index].root.active =(true)
	for(let  j = 1;  j <= BigRoad[index].root.children.length; ++ j){//	for j=1,BigRoad[index].root.children.length do
			BigRoad[index][j] = []
			BigRoad[index][j].root =cc.find("Item_"+j, clone)
			BigRoad[index][j].img =cc.find("Item_"+j+"/Image", clone).getComponent(cc.Sprite)
			BigRoad[index][j].root.active =(true)
			BigRoad[index][j].img.active =(false)
			BigRoad[index][j].resultUse = 0   //結果
			BigRoad[index][j].columnUse = 0   //
		}
		hhdz.gameLayer:CreateBigRoad()
	},

	ChartLayer:CreateDayanlu(){
		let perfab =cc.find("Dayanlu/Grid/Content", root)
		let clone = self:CreateClone(perfab)
		
		let index = Dayanlu.length +1
		clone.name = "Content_" + index
		Dayanlu[index] = []
		Dayanlu[index].root = clone
		Dayanlu[index].root.active =(true)
	
	for(let  j = 1;  j <= Dayanlu[index].root.children.length; ++ j){//	for j=1,Dayanlu[index].root.children.length do
			Dayanlu[index][j] = []
			Dayanlu[index][j].root =cc.find("Item_"+j, clone)
			Dayanlu[index][j].img =cc.find("Item_"+j+"/Image", clone).getComponent(cc.Sprite)
			Dayanlu[index][j].root.active =(true)
			Dayanlu[index][j].img.active =(false)
			Dayanlu[index][j].resultUse = 0   //結果
		}
	},

	ChartLayer:CreateXiaoyanlu(){
		let perfab =cc.find("Xiaoyanlu/Grid/Content", root)
		let clone = self:CreateClone(perfab)
		
		let index = Xiaoyanlu.length +1
		clone.name = "Content_" + index
		Xiaoyanlu[index] = []
		Xiaoyanlu[index].root = clone
		Xiaoyanlu[index].root.active =(true)
	
	for(let  j = 1;  j <= Xiaoyanlu[index].root.children.length; ++ j){//	for j=1,Xiaoyanlu[index].root.children.length do
			Xiaoyanlu[index][j] = []
			Xiaoyanlu[index][j].root =cc.find("Item_"+j, clone)
			Xiaoyanlu[index][j].img =cc.find("Item_"+j+"/Image", clone).getComponent(cc.Sprite)
			Xiaoyanlu[index][j].root.active =(true)
			Xiaoyanlu[index][j].img.active =(false)
			Xiaoyanlu[index][j].resultUse = 0   //結果
		}
	},

	ChartLayer:CreateZhanglanglu(){
		let perfab =cc.find("Zhanglanglu/Grid/Content", root)
		let clone = self:CreateClone(perfab)
		
		let index = Zhanglanglu.length +1
		clone.name = "Content_" + index
		Zhanglanglu[index] = []
		Zhanglanglu[index].root = clone
		Zhanglanglu[index].root.active =(true)
	
	for(let  j = 1;  j <= Zhanglanglu[index].root.children.length; ++ j){//	for j=1,Zhanglanglu[index].root.children.length do
			Zhanglanglu[index][j] = []
			Zhanglanglu[index][j].root =cc.find("Item_"+j, clone)
			Zhanglanglu[index][j].img =cc.find("Item_"+j+"/Image", clone).getComponent(cc.Sprite)
			Zhanglanglu[index][j].root.active =(true)
			Zhanglanglu[index][j].img.active =(false)
			Zhanglanglu[index][j].resultUse = 0   //結果
		}
	},

//- 更新界面
	ChartLayer:update(data){
		
	},

//- 显示界面
	ChartLayer:show(){
		root.active =(true)
	},

	ChartLayer:UpdateCardType(result,effect){
	for(let  i = 1;  i <= CardTypeCount; ++ i){//	for i=1,CardTypeCount do
			if(CardType[i].root.activeSelf == false ){
				CardType[i].root.active =(true)
	//----->需重新編譯程式碼			CardType[i].root:SetAsFirstSibling()
				let last = i -1
				if(last <= 0 ){ last = CardTypeCount }
				CardType[last].light.active =(false)
				CardType[i].light.active =(true)
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
				
				if(effect == true ){
					self:ShowEffect(CardType[i].img)
				}
				return
			}
		}
		
		CardType[CardTypeIndex].root.active =(false)
		CardTypeIndex = CardTypeIndex + 1
		if(CardTypeIndex > CardTypeCount ){
			CardTypeIndex = 1
		}
		
		self:UpdateCardType(result,effect)
	},

	ChartLayer:UpdateOutCardType(result,effect){
	for(let  i = 1;  i <= OutCardTypeCount; ++ i){//	for i=1,OutCardTypeCount do
			if(OutCardType[i].root.activeSelf == false ){
				OutCardType[i].root.active =(true)
	//----->需重新編譯程式碼			OutCardType[i].root:SetAsFirstSibling()
				let last = i -1
				if(last <= 0 ){ last = OutCardTypeCount }
				OutCardType[last].light.active =(false)
				OutCardType[i].light.active =(true)
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
				
				if(effect == true ){
					self:ShowEffect(OutCardType[i].img)
				}
				return
			}
		}
		
		OutCardType[OutCardTypeIndex].root.active =(false)
		OutCardTypeIndex = OutCardTypeIndex + 1
		if(OutCardTypeIndex > OutCardTypeCount ){
			OutCardTypeIndex = 1
		}
		
		self:UpdateOutCardType(result,effect)
	},

	CloseZhiLuo(){
		DayanluZhiLuo = false
		XiaoyanluZhiLuo = false
		ZhanglangluZhiLuo = false
	},

	ChartLayer:UpdateBeadRoad(result,effect){
	for(let  i = 1;  i <= BeadRoad.length; ++ i){//	for i=1,BeadRoad.length do
	for(let  j = 1;  j <= BeadRoad[i].length; ++ j){//		for j=1,BeadRoad[i].length do
				if(BeadRoad[i][j].img.activeSelf == false ){
					let gameLayerObj = hhdz.gameLayer.uiRoot.road.beadRoad[i][j]
					BeadRoad[i][j].img.active =(true)
					gameLayerObj.img.active =(true)
					if(result == 1 ){ 
						GameG.SetImageSprite(BeadRoad[i][j].img, G.GetGamePName(), xiaoyanluRed)
						GameG.SetImageSprite(gameLayerObj.img, G.GetGamePName(), xiaoyanluRed)
	} 
				else if( result == 2 ){

						GameG.SetImageSprite(BeadRoad[i][j].img, G.GetGamePName(), xiaoyanluBlack)
						GameG.SetImageSprite(gameLayerObj.img, G.GetGamePName(), xiaoyanluBlack)
	} 
				else{
						BeadRoad[i][j].img.active =(false)
						gameLayerObj.img.active =(false)
					}
					
					if(effect == true ){
						self:ShowEffect(BeadRoad[i][j].img)
						self:ShowEffect(gameLayerObj.img)
					}
					self:ShowCurrentResult(BeadRoad,i,BeadRoadCount,BeadRoad.grid)
					return
				}
			}
		}
		
		self:CreateBeadRoad()
		self:UpdateBeadRoad(result,effect)
	},

	ChartLayer:UpdateBigRoadData(result,effect){
	
		let gameLayerNext = hhdz.gameLayer.uiRoot.road.nextRound
	
		if(BigRoadDataColumn != 1 || BigRoadDataRow > 1 ){ 
			if(BigRoadData[BigRoadDataColumn][BigRoadDataRow - 1] != result ){
				BigRoadDataColumn = BigRoadDataColumn + 1
				BigRoadDataRow = 1
				CloseZhiLuo()
			}
		}
		if(BigRoadData[BigRoadDataColumn] == null ){
			BigRoadData[BigRoadDataColumn] = []
		}
		BigRoadData[BigRoadDataColumn][BigRoadDataRow] = result
	
	//更新大眼路
		if (BigRoadDataColumn >= 2 && BigRoadDataRow >= 2) || BigRoadDataColumn >= 3 {
			if(DayanluZhiLuo ){
				self:UpdateDayanlu(1,effect)
	} 
		else if( BigRoadDataRow == 1 ){

				let dayanluResult = BigRoadData[BigRoadDataColumn-1].length == BigRoadData[BigRoadDataColumn-2] && 1 || 2
				self:UpdateDayanlu(dayanluResult,effect)
	} 
		else if( BigRoadDataRow > 1 ){ 

				let dayanluResult = BigRoadData[BigRoadDataColumn-1][BigRoadDataRow] != null && 1 || 2
				self:UpdateDayanlu(dayanluResult,effect)
				if(dayanluResult == 2 ){ DayanluZhiLuo = true }
			}
		}
	
	//下局大眼路
		if( BigRoadDataColumn >= 2 ){
			nextBlackDayanlu.active =(true)
			nextRedDayanlu.active =(true)
			gameLayerNext.nextBlackDayanlu.active =(true)
			gameLayerNext.nextRedDayanlu.active =(true)
			let nextBlack = ""
			let nextRed = ""
			let youwu = BigRoadData[BigRoadDataColumn-1][BigRoadDataRow + 1] == null //有無
			let qizheng = BigRoadData[BigRoadDataColumn-1].length == BigRoadData[BigRoadDataColumn] //齊整
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
		if (BigRoadDataColumn >= 3 && BigRoadDataRow >= 2) || BigRoadDataColumn >= 4  { 
			if(XiaoyanluZhiLuo ){
				self:UpdateXiaoyanlu(1,effect)
	} 
		else if( BigRoadDataRow == 1 ){

				let xiaoyanluResult = BigRoadData[BigRoadDataColumn-1].length == BigRoadData[BigRoadDataColumn-3] && 1 || 2
				self:UpdateXiaoyanlu(xiaoyanluResult,effect)
	} 
		else if( BigRoadDataRow > 1 ){ 

				let xiaoyanluResult = BigRoadData[BigRoadDataColumn-2][BigRoadDataRow] != null && 1 || 2
				self:UpdateXiaoyanlu(xiaoyanluResult,effect)
				if(xiaoyanluResult == 2 ){ XiaoyanluZhiLuo = true }
			}
		}
	
	 //下局小眼路
		if( BigRoadDataColumn >= 3 ){
			nextBlackXiaoyanlu.active =(true)
			nextRedXiaoyanlu.active =(true)
			gameLayerNext.nextBlackXiaoyanlu.active =(true)
			gameLayerNext.nextRedXiaoyanlu.active =(true)
			let nextlong = ""
			let nexthu = ""
			let youwu = BigRoadData[BigRoadDataColumn-2][BigRoadDataRow + 1] == null //有無
			let qizheng = BigRoadData[BigRoadDataColumn-2].length == BigRoadData[BigRoadDataColumn] //齊整
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
		if (BigRoadDataColumn >= 4 && BigRoadDataRow >= 2) || BigRoadDataColumn >= 5  { 
			if(ZhanglangluZhiLuo ){
				self:UpdateZhanglanglu(1,effect)
	} 
		else if( BigRoadDataRow == 1 ){

				let zhanglangluResult = BigRoadData[BigRoadDataColumn-1].length == BigRoadData[BigRoadDataColumn-4] && 1 || 2
				self:UpdateZhanglanglu(zhanglangluResult,effect)
	} 
		else if( BigRoadDataRow > 1 ){ 

				let zhanglangluResult = BigRoadData[BigRoadDataColumn-3][BigRoadDataRow] != null && 1 || 2
				self:UpdateZhanglanglu(zhanglangluResult,effect)
				if(zhanglangluResult == 2 ){ ZhanglangluZhiLuo = true }
			}
		}
		
	//下局蟑螂路
		if( BigRoadDataColumn >= 4 ){
			nextBlackZhanglanglu.active =(true)
			nextRedZhanglanglu.active =(true)
			gameLayerNext.nextBlackZhanglanglu.active =(true)
			gameLayerNext.nextRedZhanglanglu.active =(true)
			let nextlong = ""
			let nexthu = ""
			let youwu = BigRoadData[BigRoadDataColumn-3][BigRoadDataRow + 1] == null //有無
			let qizheng = BigRoadData[BigRoadDataColumn-3].length == BigRoadData[BigRoadDataColumn] //齊整
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

	ChartLayer:UpdateBigRoad(result,effect){
		self:UpdateBigRoadData(result,effect)
		let row = 1
	for(let  i = BigRoadUse;  i <= BigRoad.length; ++ i){//	for i=BigRoadUse,BigRoad.length do
	for(let  j = row;  j <= BigRoad[i].length; ++ j){//		for j=row,BigRoad[i].length do
				if(i != BigRoadUse && j != row ){
					break
	} 
			else if( BigRoad[i][j].resultUse == 0 ){

					let gameLayerObj = hhdz.gameLayer.uiRoot.road.bigRoad[i][j]
					BigRoad[i].root.active =(true)
					BigRoad[i][j].img.active =(true)
					BigRoad[i][j].resultUse = result
					BigRoad[i][j].columnUse = BigRoadUse
					gameLayerObj.img.active =(true)
					if(effect == true ){
						self:ShowEffect(BigRoad[i][j].img)
						self:ShowEffect(gameLayerObj.img)
					}
					if(result == 1 ){
						GameG.SetImageSprite(BigRoad[i][j].img, G.GetGamePName(),eyeRed )
						GameG.SetImageSprite(gameLayerObj.img, G.GetGamePName(),eyeRed)
	} 
				else if( result == 2 ){

						GameG.SetImageSprite(BigRoad[i][j].img, G.GetGamePName(),eyeBlack)
						GameG.SetImageSprite(gameLayerObj.img, G.GetGamePName(),eyeBlack)
	} 
				else{
						BigRoad[i][j].img.active =(false)
						gameLayerObj.img.active =(false)
						BigRoad[i][j].resultUse = 0
						BigRoad[i][j].columnUse = 0
					}
					self:ShowCurrentResult(BigRoad,i,BigRoadCount,BigRoad.grid)
					return
			//不同结果换行
	} 
			else if( BigRoad[i][1].resultUse == 1 && result == 2 ){

					BigRoadUse = BigRoadUse+1
					row = 1
					break
			//不同结果换行
	} 
			else if( BigRoad[i][1].resultUse == 2 && result == 1 ){

					BigRoadUse = BigRoadUse+1
					row = 1
					break
				
			//其他结果已使用向右排序
	} 
			else if( BigRoad[i][j].resultUse != result ){

					row = j -1
					break
					
			//其他结果已使用向右排序
	} 
			else if( BigRoad[i][j].columnUse != BigRoadUse ){

					row = j -1
					break
				
			//到底向右排序
	} 
			else if( j == BigRoad[i].length ){

					row = j
					break
				}
			}
		}
		
		self:CreateBigRoad()
		self:UpdateBigRoad(result,effect)
	},

//更新大眼路
	ChartLayer:UpdateDayanlu(result,effect){
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
			self:CreateDayanlu()
		}
	
		let obj = Dayanlu[column][DayanluRowUse]
		obj.img.active =(true)
		obj.resultUse = result
		if(effect == true ){
			self:ShowEffect(obj.img)
		}
		if(result == 2 ){
			GameG.SetImageSprite(obj.img, G.GetGamePName(), eyeBlack)
	} 
	else if( result == 1 ){

			GameG.SetImageSprite(obj.img, G.GetGamePName(), eyeRed)
	} 
	else{
			obj.img.active =(false)
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
	ChartLayer:UpdateXiaoyanlu(result,effect){
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
			self:CreateXiaoyanlu()
		}
	
		let obj = Xiaoyanlu[column][XiaoyanluRowUse]
		obj.img.active =(true)
		obj.resultUse = result
		if(effect == true ){
			self:ShowEffect(obj.img)
		}
		if(result == 2 ){
			GameG.SetImageSprite(obj.img, G.GetGamePName(), xiaoyanluBlack)
	} 
	else if( result == 1 ){

			GameG.SetImageSprite(obj.img, G.GetGamePName(), xiaoyanluRed)
	} 
	else{
			obj.img.active =(false)
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
	ChartLayer:UpdateZhanglanglu(result,effect){
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
			self:CreateZhanglanglu()
		}
	
		let obj = Zhanglanglu[column][ZhanglangluRowUse]
		obj.img.active =(true)
		obj.resultUse = result
		if(effect == true ){
			self:ShowEffect(obj.img)
		}
		if(result == 2 ){
			GameG.SetImageSprite(obj.img, G.GetGamePName(), zhanglangluBlack)
	} 
	else if( result == 1 ){

			GameG.SetImageSprite(obj.img, G.GetGamePName(), zhanglangluRed)
	} 
	else{
			obj.img.active =(false)
			obj.resultUse = 0
		}
	
		if(ZhanglangluRowUse == 6 || Zhanglanglu[column][ZhanglangluRowUse + 1].resultUse != 0 ){
			ZhanglangluRight = ZhanglangluRight + 1
	} 
	else{
			ZhanglangluRowUse = ZhanglangluRowUse + 1
		}
	},

	ChartLayer:ClearBeadRoad(){
		let item = BeadRoad.grid.layout.cellSize.x + BeadRoad.grid.layout.spacing.x
		BeadRoad.grid.rect.sizeDelta = cc.v2(item * BigRoadCount, BeadRoad.grid.rect.height)
		BeadRoad.grid.rect.anchoredPosition = cc.v2(0, BeadRoad.grid.rect.anchoredPosition.y)
	for(let  i = 1;  i <= BeadRoad.length; ++ i){//	for i=1,BeadRoad.length do
			BeadRoad[i].root.active =(i <= BeadRoadCount)
	for(let  j = 1;  j <= BeadRoad[i].length; ++ j){//		for j=1,BeadRoad[i].length do
				BeadRoad[i][j].img.active =(false)
				hhdz.gameLayer.uiRoot.road.beadRoad[i][j].img.active =(false)
			}
		}
	},

	ChartLayer:ClearBigRoad(){
		BigRoadData = []
		BigRoadDataRow = 1
		BigRoadDataColumn = 1
		CloseZhiLuo()
	
		BigRoadUse = 1
		let item = BigRoad.grid.layout.cellSize.x + BigRoad.grid.layout.spacing.x
		BigRoad.grid.rect.sizeDelta = cc.v2(item * BigRoadCount, BigRoad.grid.rect.height)
		BigRoad.grid.rect.anchoredPosition = cc.v2(0, BigRoad.grid.rect.anchoredPosition.y)
	for(let  i = 1;  i <= BigRoad.length; ++ i){//	for i=1,BigRoad.length do
			BigRoad[i].root.active =(i <= BigRoadCount)
	for(let  j = 1;  j <= BigRoad[i].length; ++ j){//		for j=1,BigRoad[i].length do
				let gameLayerObj = hhdz.gameLayer.uiRoot.road.bigRoad[i][j]
				BigRoad[i][j].img.active =(false)
				gameLayerObj.img.active =(false)
				BigRoad[i][j].resultUse = 0
				BigRoad[i][j].columnUse = 0
			}
		}
	},

	ChartLayer:ClearDayanlu(){
		DayanluColumnUse = 1
		DayanluRowUse = 1
		DayanluRight = 0
	
		
		nextBlackDayanlu.active =(false)
		nextRedDayanlu.active =(false)
		hhdz.gameLayer.uiRoot.road.nextRound.nextBlackDayanlu.active =(false)
		hhdz.gameLayer.uiRoot.road.nextRound.nextRedDayanlu.active =(false)
	
		let item = Dayanlu.grid.layout.cellSize.x + Dayanlu.grid.layout.spacing.x
		Dayanlu.grid.rect.sizeDelta = cc.v2(item * DayanluCount, Dayanlu.grid.rect.height)
		Dayanlu.grid.rect.anchoredPosition = cc.v2(0, Dayanlu.grid.rect.anchoredPosition.y)
	for(let  i = 1;  i <= Dayanlu.length; ++ i){//	for i=1,Dayanlu.length do
		//Dayanlu[i].root.gameObject:SetActive(i <= DayanluCount)
	for(let  j = 1;  j <= Dayanlu[i].length; ++ j){//		for j=1,Dayanlu[i].length do
				Dayanlu[i][j].img.active =(false)
				Dayanlu[i][j].resultUse = 0
			}
		}
	},

	ChartLayer:ClearXiaoyanlu(){
		XiaoyanluColumnUse = 1
		XiaoyanluRowUse = 1
		XiaoyanluRight = 0
		nextBlackXiaoyanlu.active =(false)
		nextRedXiaoyanlu.active =(false)
		hhdz.gameLayer.uiRoot.road.nextRound.nextBlackXiaoyanlu.active =(false)
		hhdz.gameLayer.uiRoot.road.nextRound.nextRedXiaoyanlu.active =(false)
		
		let item = Xiaoyanlu.grid.layout.cellSize.x + Xiaoyanlu.grid.layout.spacing.x
		Xiaoyanlu.grid.rect.sizeDelta = cc.v2(item * XiaoyanluCount, Xiaoyanlu.grid.rect.height)
		Xiaoyanlu.grid.rect.anchoredPosition = cc.v2(0, Xiaoyanlu.grid.rect.anchoredPosition.y)
	for(let  i = 1;  i <= Xiaoyanlu.length; ++ i){//	for i=1,Xiaoyanlu.length do
		//Xiaoyanlu[i].root.gameObject:SetActive(i <= XiaoyanluCount)
	for(let  j = 1;  j <= Xiaoyanlu[i].length; ++ j){//		for j=1,Xiaoyanlu[i].length do
				Xiaoyanlu[i][j].img.active =(false)
				Xiaoyanlu[i][j].resultUse = 0
			}
		}
	},

	ChartLayer:ClearZhanglanglu(){
		ZhanglangluColumnUse = 1
		ZhanglangluRowUse = 1
		ZhanglangluRight = 0
		nextBlackZhanglanglu.active =(false)
		nextRedZhanglanglu.active =(false)
		hhdz.gameLayer.uiRoot.road.nextRound.nextBlackZhanglanglu.active =(false)
		hhdz.gameLayer.uiRoot.road.nextRound.nextRedZhanglanglu.active =(false)
	
		let item = Zhanglanglu.grid.layout.cellSize.x + Zhanglanglu.grid.layout.spacing.x
		Zhanglanglu.grid.rect.sizeDelta = cc.v2(item * ZhanglangluCount, Zhanglanglu.grid.rect.height)
		Zhanglanglu.grid.rect.anchoredPosition = cc.v2(0, Zhanglanglu.grid.rect.anchoredPosition.y)
	for(let  i = 1;  i <= Zhanglanglu.length; ++ i){//	for i=1,Zhanglanglu.length do
		//Zhanglanglu[i].root.gameObject:SetActive(i <= ZhanglangluCount)
	for(let  j = 1;  j <= Zhanglanglu[i].length; ++ j){//		for j=1,Zhanglanglu[i].length do
				Zhanglanglu[i][j].img.active =(false)
				Zhanglanglu[i][j].resultUse = 0
			}
		}
	},

	ChartLayer:SetRound(){
		txt_round1.text = hhdz.resultRound.HungWin || 0
		txt_round2.text = hhdz.resultRound.HeiWin || 0 
		txt_round3.text = hhdz.resultRound.RoundID || 0
		hhdz.gameLayer.uiRoot.road.round.red.text = hhdz.resultRound.HungWin || 0
		hhdz.gameLayer.uiRoot.road.round.black.text = hhdz.resultRound.HeiWin || 0 
		hhdz.gameLayer.uiRoot.road.round.total.text = hhdz.resultRound.RoundID || 0
	    hhdz.gameLayer:updateRound(hhdz.resultRound.RoundID)
	},

//- 更新界面
	ChartLayer:addRst(data,round,effect){
		let result = data.Win
	//清掉所有路单
		if(round == 1 ){
			self:ClearBeadRoad()
			self:ClearBigRoad()
			self:ClearDayanlu()
			self:ClearXiaoyanlu()
			self:ClearZhanglanglu()
			self:ClearRate()
		}
		
		self:UpdateBeadRoad(result,effect)
		self:UpdateBigRoad(result,effect)
	//self:UpdateSingle(result,effect)
	//self:UpdateOutSingle(result,effect)
		self:UpdateRate(result)
		self:SetRound()
		
		if(result == 1 ){
			let cardType = hhdz.compare:GetCardType(data.HungZuHe)
			self:UpdateCardType(cardType,effect)
			self:UpdateOutCardType(cardType,effect)
	} 
	else if( result == 2 ){

			let cardType = hhdz.compare:GetCardType(data.HeiZuHe)
			self:UpdateCardType(cardType,effect)
			self:UpdateOutCardType(cardType,effect)
		}
	},

	ChartLayer:ClearRate(){
		Rate = []
	},

	ChartLayer:UpdateRate(result){
		
		Rate[Rate.length +1] = result
		if(Rate.length > SingleCount ){
			table.remove(Rate,1)
		}
		
		let winL = 0
		let total = 0
		
	for(let  i  =  1;  i  <=  Rate.length; ++ i ){//	for i = 1, Rate.length do
			if(Rate[i] == 1 ){
				total = total +1
	} 
		else if( Rate[i] == 2 ){

				winL = winL +1
				total = total +1
			}
		}
		
		let rateL = math.floor(G.CaseWhen(total > 0,winL/ total,0)*100)
		let rateR = G.CaseWhen(total > 0, 100 - rateL,0)
		
		txt_rateL.text = rateL +"%"
		txt_rateR.text = rateR +"%"
		
		img_rate.scale = cc.v3(G.CaseWhen(rateL > 0,rateL / 100,0.5) ,1,1)
		img_rateMid.position = attach_rateMid.position
	},

	ChartLayer:ShowEffect(obj){
	//----->需重新編譯程式碼	let sequence = CS.DG.Tweening.DOTween.Sequence()
		obj.color = cc.Color(obj.color.r,obj.color.g,obj.color.b,1)
	//----->需重新編譯程式碼	sequence:Append(obj:DOColor(cc.Color(obj.color.r,obj.color.g,obj.color.b,0), 0.5))
	//----->需重新編譯程式碼	sequence:Append(obj:DOColor(cc.Color(obj.color.r,obj.color.g,obj.color.b,1), 0.5))
	//----->需重新編譯程式碼	sequence:Append(obj:DOColor(cc.Color(obj.color.r,obj.color.g,obj.color.b,0), 0.5))
	//----->需重新編譯程式碼	sequence:Append(obj:DOColor(cc.Color(obj.color.r,obj.color.g,obj.color.b,1), 0.5))
	},

	ChartLayer:ShowCurrentResult(pool,column,columnMax,grid){
		let count = G.CaseWhen( column < columnMax, 0, column - columnMax)
		let item = grid.layout.cellSize.x + grid.layout.spacing.x
		grid.rect.sizeDelta = cc.v2(item * pool.length, grid.rect.height)
		grid.rect.anchoredPosition = cc.v2(item * count * -1, grid.rect.anchoredPosition.y)
	},


};

module.exports = ChartLayer
