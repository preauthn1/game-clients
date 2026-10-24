//region *.lua
//Date
//此文件由[BabeLua]插件自动生成
//endregion
var G = require("Global")
var Compare = fmg.class("Compare")
/*判断输赢 (1:dataA,2:dataB)
function Compare:GetWinPoker(dataA,dataB)
	local ACardType = self:GetCardType(dataA)
	local BCardType = self:GetCardType(dataB)
	
	local AMaxPoker = self:GetMaxPoker(dataA)
	local AMidPoker = self:GetMidPoker(dataA)
	local AMinPoker = self:GetMinPoker(dataA)
	
	local BMaxPoker = self:GetMaxPoker(dataB)
	local BMidPoker = self:GetMidPoker(dataB)
	local BMinPoker = self:GetMinPoker(dataB)
	
	local result = 0
	if ACardType > BCardType then
		result = 1
	elseif ACardType < BCardType then
		result = 2
		
	elseif AMaxPoker.Number > BMaxPoker.Number then
		if BMaxPoker.Number == 1 then
			result = 2
		else
			result = 1
		end
	elseif AMaxPoker.Number < BMaxPoker.Number then
		if AMaxPoker.Number == 1 then
			result = 1
		else
			result = 2
		end
	elseif AMidPoker.Number > BMidPoker.Number then
		if AMidPoker.Number == 1 then
			result = 2
		else
			result = 1
		end
	elseif AMidPoker.Number < BMidPoker.Number then
		if AMidPoker.Number == 1 then
			result = 1
		else
			result = 2
		end
	elseif AMinPoker.Number > AMinPoker.Number then
		if AMinPoker.Number == 1 then
			result = 2
		else
			result = 1
		end
	elseif AMinPoker.Number < AMinPoker.Number then
		if AMinPoker.Number == 1 then
			result = 1
		else
			result = 2
		end
		
	elseif AMaxPoker.Color > BMaxPoker.Color then
		result = 1
	elseif AMaxPoker.Color < BMaxPoker.Color then
		result = 2
	elseif AMidPoker.Color > BMidPoker.Color then
		result = 1
	elseif AMidPoker.Color < BMidPoker.Color then
		result = 2
	elseif AMinPoker.Color > BMidPoker.Color then
		result = 1
	elseif AMinPoker.Color < BMidPoker.Color then
		result = 2
	end
	
	return result
end*/
/*
//取得牌型（三张牌）
function Compare:GetCardType(data)
	local sameColor =  self:CheckSameColor(data) // 同花
	local sameNumber = self:CheckSameNumber(data) // 同点
	local straight = self:CheckStraight(data) // 顺子
	
	local temp1 = data[1].Number
	local temp2 = data[2].Number
	local temp3 = data[3].Number
	if data[1].Number == 1 then temp1 = 14 end
	if data[2].Number == 1 then temp2 = 14 end
	if data[3].Number == 1 then temp3 = 14 end
	
	//豹子 三张点数相同的牌。例: AAA、222
	if sameNumber then
		return 7
		
	//顺金 花色相同的顺子。例:♠456、♥789。最大的顺金为花色相同的QKA，最小的顺金为花色相同的A23。
	elseif sameColor == true and straight == true then
		return 6
		
	//金花 花色相同，非顺子。例: ♠ 368、 ♦ A45。
	elseif sameColor == true and straight == false then
		return 5
		
	//顺子 花色不同的顺子。例:♠5♥6♦7 最大的顺子为花色不同的QKA，最小的顺子为花色不同的A23。
	elseif sameColor == false and straight == true then
		return 4
		
	//对子 两张点数相同的牌，9以上。例: 993，QQ4。
	elseif temp1 == temp2 and temp1 >= 9 then
		return 3
		
	elseif temp1 == temp3 and temp1 >= 9 then
		return 3
		
	elseif temp2 == temp3 and temp2 >= 9 then
		return 3
		
	//对子 两张点数相同的牌。例: 223，334。
	elseif data[1].Number == data[2].Number or data[1].Number == data[3].Number or data[2].Number == data[3].Number then
		return 2
		
	//单牌 三张不组成任何类型的牌，比牌时则用牌中最大的数字
	else 
		return 1
	end
end*/

var Compare = {
	extends: cc.Component,

//-
	Compare:ctor(){
	
	    self.startPos = fmg.v3(0, 0, 0)
	    self.endPos = [ fmg.v3(-200, 0, 0), fmg.v3(200, 0, 0) ]
	
	    self.cardbg = [ "card_l", "card_h" ]
	
	    self:initData()
	    self:initUi()
	},

//-
	Compare:onExit(){
	},

//-
	Compare:initData(){
	    self.dtOpenCardStep = 0 // 开牌动画
	},

//-
	Compare:initUi(){
	
    // 
	    let canvas = cc.find("Canvas")
	    let root =cc.find("GameLayer", canvas)
	    self.uiRoot = []
	    self.uiRoot.root = root
	    let uiRoot = self.uiRoot
	
    // 比牌层初始化
	    uiRoot.compare = []
	    uiRoot.compare.root =cc.find("compare", root)
	    uiRoot.compare.cardStart =cc.find("compare/cardStart", root)
	    uiRoot.compare.cardEnd =cc.find("compare/cardEnd", root)
	    uiRoot.compare.efWin =cc.find("compare/bg/efWin", root)
	    uiRoot.compare.efWin.active =(false)
	
	    uiRoot.compare.vsRoot =cc.find("Title_VS", root)
	
	    uiRoot.compare.vs =cc.find("Title_VS/Title_VS", root)
    //uiRoot.compare.vs.gameObject:SetActive(false)
	
	    uiRoot.compare.vsAnim =cc.find("Title_VS/Title_Ani_VS", root)
	
	    uiRoot.compare.cardHung = []
	    uiRoot.compare.cardHung.root =cc.find("compare/bg/HungCard", root)
	    uiRoot.compare.cardHung.card = []
	    uiRoot.compare.cardHung.resultIcon =cc.find("compare/bg/HungCard/Icon", root).getComponent(cc.Sprite)
	    uiRoot.compare.cardHung.card[1] =cc.find("compare/bg/HungCard/card1", root).getComponent(cc.Sprite)
	    uiRoot.compare.cardHung.card[2] =cc.find("compare/bg/HungCard/card2", root).getComponent(cc.Sprite)
	    uiRoot.compare.cardHung.card[3] =cc.find("compare/bg/HungCard/card3", root).getComponent(cc.Sprite)
	    uiRoot.compare.cardHung.winAnim =cc.find("compare/bg/HungCard/paimian", root)
	    uiRoot.compare.cardHung.winPs =cc.find("compare/bg/HungCard/paimian/paimian", root).getComponent(cc.ParticleSystem)
	    uiRoot.compare.cardHung.root.active =(false)
	
	    uiRoot.compare.cardHei = []
	    uiRoot.compare.cardHei.root =cc.find("compare/bg/HeiCard", root)
	    uiRoot.compare.cardHei.card = []
	    uiRoot.compare.cardHei.card[1] =cc.find("compare/bg/HeiCard/card1", root).getComponent(cc.Sprite)
	    uiRoot.compare.cardHei.card[2] =cc.find("compare/bg/HeiCard/card2", root).getComponent(cc.Sprite)
	    uiRoot.compare.cardHei.card[3] =cc.find("compare/bg/HeiCard/card3", root).getComponent(cc.Sprite)
	
	    uiRoot.compare.cardHei.resultIcon =cc.find("compare/bg/HeiCard/Icon", root).getComponent(cc.Sprite)
	    uiRoot.compare.cardHei.winAnim =cc.find("compare/bg/HeiCard/paimian", root)
	    uiRoot.compare.cardHei.winPs =cc.find("compare/bg/HeiCard/paimian/paimian", root).getComponent(cc.ParticleSystem)
	    uiRoot.compare.cardHei.root.active =(false)
	
	    uiRoot.compare.efdraw = []
	    uiRoot.compare.efdraw.bet =cc.find("betNum/_efwbetDraw", root).getComponent(cc.Sprite)
	    uiRoot.compare.efdraw.titleAnim =cc.find("compare/bg/efWin/heying", root)
	    uiRoot.compare.efdraw.titlePs =cc.find("compare/bg/efWin/heying/ALL", root).getComponent(cc.ParticleSystem)
	    uiRoot.compare.efdraw.bet.active =(false)
	
	    uiRoot.compare.eflong = []
	    uiRoot.compare.eflong.bet =cc.find("betNum/_efwbetLong", root).getComponent(cc.Sprite)
	    uiRoot.compare.eflong.titleAnim =cc.find("compare/bg/efWin/longying", root)
	    uiRoot.compare.eflong.titlePs =cc.find("compare/bg/efWin/longying/ALL", root).getComponent(cc.ParticleSystem)
	    uiRoot.compare.eflong.bet.active =(false)
	
	    uiRoot.compare.efhu = []
	    uiRoot.compare.efhu.bet =cc.find("betNum/_efwbetHu", root).getComponent(cc.Sprite)
	    uiRoot.compare.efhu.titleAnim =cc.find("compare/bg/efWin/huying", root)
	    uiRoot.compare.efhu.titlePs =cc.find("compare/bg/efWin/huying/ALL", root).getComponent(cc.ParticleSystem)
	    uiRoot.compare.efhu.bet.active =(false)
	
	    self:init()
	},

	Compare:init(){
	    self:initObject(self.uiRoot.compare.cardHei, 1)
	    self:initObject(self.uiRoot.compare.cardHung, 2)
	    self.uiRoot.compare.efWin.active =(false)
	    self.uiRoot.compare.cardHei.resultIcon.active =(false)
	    self.uiRoot.compare.cardHung.resultIcon.active =(false)
    //self.uiRoot.compare.vs.gameObject:SetActive(false)	
	},

	Compare:initObject(obj, bgIndex){
	
	    obj.root.active =(false)
	    obj.root.scale = fmg.v3(1, 1, 1)
	
	for(let      i  =  1;      i  <=  3; ++     i ){//    for i = 1, 3 do
	        obj.card[i].active =(false)
        // obj.card[i].transform.localPosition = fmg.v3((-140 + (i * 70)), 0, 0)
        // obj.card[i].transform.localScale = fmg.v3(1, 1, 1)
        // obj.card[i].transform.localRotation = CS.UnityEngine.Quaternion.identity
	        obj.card[i].position = self.uiRoot.compare.cardStart.position
	        obj.card[i].scale = self.uiRoot.compare.cardStart.scale
	        obj.card[i].rotation =self.uiRoot.compare.cardStart.rotation
	        GameG.SetImageSprite(obj.card[i], G.GetGamePName(), self.cardbg[bgIndex], false)
	    }
	},

	Compare:deal(obj,pos,sqs){
	    let duration = 0.2
	//----->需重新編譯程式碼    sqs.call(function (){ obj.active =(true) })
	//----->需重新編譯程式碼    sqs:Append(obj:DOLocalMove(pos,duration))
	//----->需重新編譯程式碼    sqs:Join(obj:DOLocalRotate(fmg.v3(0, 0, 0),duration))
	//----->需重新編譯程式碼    sqs:Join(obj:DOScale(1,duration))
	},

	Compare:playCard(){
	    hhdz.gameAudio:PlayCard()
	    let Hei = self.uiRoot.compare.cardHei
	    let Hung = self.uiRoot.compare.cardHung
	//----->需重新編譯程式碼    let sqs = CS.DG.Tweening.DOTween.Sequence()
	    Hei.root.active =(true)
	    Hung.root.active =(true)
	for(let      i  =  1;      i  <=  3; ++     i ){//    for i = 1, 3 do
	        let pos = fmg.v3(-140 + (i * 70), 0, 0)
	        self:deal(Hei.card[i],pos,sqs)
	        self:deal(Hung.card[i],pos,sqs)
	    }
    /*
    for i = 1, 3 do
        fmg.setAlpha(Hei.card[i], 0)
        fmg.setAlpha(Hung.card[i], 0)
    end

//----->需重新編譯程式碼    local sqs = CS.DG.Tweening.DOTween.Sequence()
    Hei.root.gameObject.transform.localPosition = self.startPos
    Hei.root.gameObject:SetActive(true)
    local color = Hei.card[1].color
    for i = 1, 3 do
        Hei.card[i].gameObject:SetActive(true)
    end
    Hung.root.gameObject.transform.localPosition = self.startPos
//----->需重新編譯程式碼    sqs:Append(Hei.root:DOLocalMove(self.endPos[1], 0.5))
    for i = 1, 3 do
//----->需重新編譯程式碼        sqs:Join(Hei.card[i]:DOColor(fmg.c4(color.r, color.g, color.g, 1), 0.3))
    end
    color = Hung.card[1].color
//----->需重新編譯程式碼    sqs.call(function()
//----->需重新編譯程式碼        Hung.root.gameObject:SetActive(true)
//----->需重新編譯程式碼        for i = 1, 3 do
//----->需重新編譯程式碼            Hung.card[i].gameObject:SetActive(true)
//----->需重新編譯程式碼        end
//----->需重新編譯程式碼    end)
//----->需重新編譯程式碼    sqs:Append(Hung.root:DOLocalMove(self.endPos[2], 0.5))
//----->需重新編譯程式碼    for i = 1, 3 do
//----->需重新編譯程式碼        sqs:Join(Hung.card[i]:DOColor(fmg.c4(color.r, color.g, color.g, 1), 0.3))
//----->需重新編譯程式碼    end
//----->需重新編譯程式碼    sqs:AppendCallback(function()
//----->需重新編譯程式碼        //self.uiRoot.compare.vs.gameObject:SetActive(true)
//----->需重新編譯程式碼    end)
//----->需重新編譯程式碼    */
	//----->需重新編譯程式碼},

//- 初始化比较特效 idx: 0:无；1:龙赢；2:和；2:虎赢
	//----->需重新編譯程式碼Compare:initCompare(idx){
	//----->需重新編譯程式碼
	//----->需重新編譯程式碼    let cmp = self.uiRoot.compare
	//----->需重新編譯程式碼    let cfg = [ "eflong", "efdraw", "efhu" ]
	//----->需重新編譯程式碼for(let k in (cfg)){ 
//----->需重新編譯程式碼	let v = cfg[k] 
//----->需重新編譯程式碼
	//----->需重新編譯程式碼        let obj = cmp[v]
	//----->需重新編譯程式碼
//----->需重新編譯程式碼        //local show = (k == idx and true or false)
	//----->需重新編譯程式碼        obj.bet.active =(false)
	//----->需重新編譯程式碼        obj.titleAnim.active =(false)
	//----->需重新編譯程式碼        obj.titlePs:Stop()
	//----->需重新編譯程式碼    }
	
	    cfg = [ "cardHei", "cardHung" ]
	    let acc = 1
	for(let k in (cfg)){ 
	let v = cfg[k] 

	        let obj = cmp[v]
	        obj.root.active =(true)
	        obj.root.position = self.endPos[acc]
	for(let          i  =  1;          i  <=  3; ++         i ){//        for i = 1, 3 do
	            obj.card[i].active =(true)
	
	            fmg.setAlpha(obj.card[i], 1)
	        }
	        acc = acc + 1
	    }
	},

//- 初始化比较特效 idx: 0:无；1:龙赢；2:和；2:虎赢
	Compare:blinkWinBetBg(idx){
	
	    self:stopBlinkWinBg()
	    let cfg = [ "eflong", "efdraw", "efhu" ]
	    let obj = self.uiRoot.compare[cfg[idx]].bet
	    let color = obj.color
	    obj.active =(true)
	    fmg.setAlpha(obj, 0)
	    self.dtWinIdx = idx
	
	//----->需重新編譯程式碼    let sqs = CS.DG.Tweening.DOTween.Sequence()
	    self.hBlinkWinBetBg = sqs
	//----->需重新編譯程式碼    sqs:SetLoops(-1)
	//----->需重新編譯程式碼    sqs:Append(obj:DOColor(fmg.c4(color.r, color.g, color.g, 1), 0.3))
	//----->需重新編譯程式碼    sqs:AppendInterval(0.4)
	//----->需重新編譯程式碼    sqs:Append(obj:DOColor(fmg.c4(color.r, color.g, color.g, 0), 0.3))
	},

//- 初始化比较特效 idx: 0:无；1:龙赢；2:和；2:虎赢
	Compare:stopBlinkWinBg(){
	    if(self.hBlinkWinBetBg ){
	//----->需重新編譯程式碼        self.hBlinkWinBetBg:Kill()
	        self.hBlinkWinBetBg = null
	        let cfg = [ "eflong", "efdraw", "efhu" ]
	        self.uiRoot.compare[cfg[self.dtWinIdx]].bet.active =(false)
	    }
	},

//- 开牌
	Compare:OpenCard(card,number,color,sqs){
	//----->需重新編譯程式碼    sqs:Append(card:DOLocalRotate(fmg.v3(0, -90, 0), 0.2))
	//----->需重新編譯程式碼    sqs:Join(card:DOScale(fmg.v3(1.2, 1.2, 1), 0.2))
	//----->需重新編譯程式碼    sqs.call(function(){
	//----->需重新編譯程式碼        hhdz.gameAudio:OpenCard()
	//----->需重新編譯程式碼        card.eulerAngles = cc.v3(0, 0, 0)
	//----->需重新編譯程式碼        hhdz.gameControl:initCard(card, number, color)
	//----->需重新編譯程式碼    })
	//----->需重新編譯程式碼    sqs:Join(card:DOScale(fmg.v3(1, 1, 1), 0.2))
	//----->需重新編譯程式碼    sqs:AppendInterval(0.2)
	},

//- 回收
	Compare:Recycle(obj,bgIndex){
	    obj.resultIcon.active =(false)
	for(let      i  =  1;      i  <=  3; ++     i ){//    for i = 1, 3 do
	         let duration = 0.15
	//----->需重新編譯程式碼         let sqs1 = CS.DG.Tweening.DOTween.Sequence()
	         let card = obj.card[i]
	//----->需重新編譯程式碼         sqs1:Append(card:DOLocalRotate(fmg.v3(0, -90, 0), duration))
	//----->需重新編譯程式碼         sqs1.call(function (){ GameG.SetImageSprite(card, G.GetGamePName(), self.cardbg[bgIndex], false) })
	//----->需重新編譯程式碼         sqs1:Append(card:DOLocalRotate(fmg.v3(0,0, 0), duration))
	//----->需重新編譯程式碼         sqs1:Append(card:DOMove(self.uiRoot.compare.cardEnd.position, duration))
	//----->需重新編譯程式碼         sqs1:Join(card:DORotate(self.uiRoot.compare.cardEnd.rotation.eulerAngles, duration))
	//----->需重新編譯程式碼         sqs1:Join(card:DOScale(self.uiRoot.compare.cardEnd.scale, duration))
	//----->需重新編譯程式碼         sqs1.call(function (){ card.active =(false) })
	    }
	 },

//- 开牌主动画
	Compare:animOpenCards(data, call){
    //self.uiRoot.compare.vs.gameObject:SetActive(false)	
	
    //vs_Ani = CS.UnityEngine.GameObject.Instantiate(self.uiRoot.compare.vsAnim).transform
    //	vs_Ani:SetParent(self.uiRoot.compare.vsRoot)
    //	vs_Ani.localScale = fmg.v3(1,1,1)
    //	vs_Ani.localPosition = fmg.v3(0,0,0)
    //	vs_Ani.gameObject:SetActive(true)	
	
	    let cfgRoot = [ "eflong", "efdraw", "efhu" ]
	    let cfgCard = [ "cardHung", "cardHei" ]
	    self.dtOpenCardStep = 1
	    let cmp = self.uiRoot.compare
	//----->需重新編譯程式碼    let sqs = CS.DG.Tweening.DOTween.Sequence()
	
    // 等待音效
	//----->需重新編譯程式碼    sqs:AppendInterval(1.2)
    // 弹出牌框，初始化状态
	    fmg.argFuncAnim(sqs, function(adt){
        // 显示并初始化结算界面
	        self:initCompare(hhdz.dtRstWin)
	    }, [ data ])
	//----->需重新編譯程式碼    sqs:AppendInterval(0.3)
	
    // 开牌动画
	    fmg.argFuncAnim(sqs, function(adt){
	//----->需重新編譯程式碼        let sqs1 = CS.DG.Tweening.DOTween.Sequence()
        /*
        for i = 1, 2 do
            for j = 1, 3 do
                local card = adt[i].card[j]

//----->需重新編譯程式碼                sqs1:Append(card.gameObject.transform:DOLocalRotate(fmg.v3(0, -90, 0), 0.2))
//----->需重新編譯程式碼                sqs1:Join(card.gameObject.transform:DOScale(fmg.v3(1.2, 1.2, 1), 0.2))

//----->需重新編譯程式碼                sqs1.call(function()
//----->需重新編譯程式碼                    hhdz.gameAudio:OpenCard()
//----->需重新編譯程式碼                    card.transform.localRotation = CS.UnityEngine.Quaternion.identity
//----->需重新編譯程式碼                    if (i == 1) then
//----->需重新編譯程式碼                        hhdz.gameControl:initCard(card, data.HeiPoker[j].Number, data.HeiPoker[j].Color)
//----->需重新編譯程式碼                    else
//----->需重新編譯程式碼                        hhdz.gameControl:initCard(card, data.HungPoker[j].Number, data.HungPoker[j].Color)
//----->需重新編譯程式碼                    end
//----->需重新編譯程式碼                end)
//----->需重新編譯程式碼                sqs1:Join(card.gameObject.transform:DOScale(fmg.v3(1.0, 1.0, 1), 0.2))
//----->需重新編譯程式碼                sqs1:AppendInterval(0.2)
//----->需重新編譯程式碼
//----->需重新編譯程式碼                if (j == 3) then
//----->需重新編譯程式碼                    if (i == 1) then
//----->需重新編譯程式碼                        self:blinkPorkerResult(data.HeiZuHe, self.uiRoot.compare.cardHei.resultIcon, sqs1)
//----->需重新編譯程式碼                    else
//----->需重新編譯程式碼                        self:blinkPorkerResult(data.HungZuHe, self.uiRoot.compare.cardHung.resultIcon, sqs1)
//----->需重新編譯程式碼                    end
//----->需重新編譯程式碼                end
//----->需重新編譯程式碼            end
//----->需重新編譯程式碼        end
//----->需重新編譯程式碼        */
	//----->需重新編譯程式碼        
	//----->需重新編譯程式碼for(let          i  =  1;          i  <=  2; ++         i ){//        for i = 1, 2 do
	//----->需重新編譯程式碼for(let              j  =  1;              j  <=  2; ++             j ){//            for j = 1, 2 do
	//----->需重新編譯程式碼                let card = adt[i].card[j]
	//----->需重新編譯程式碼                if(i == 1 ){
	//----->需重新編譯程式碼                    self:OpenCard(card, data.HeiPoker[j].Number, data.HeiPoker[j].Color,sqs1)
	//----->需重新編譯程式碼} 
//----->需重新編譯程式碼                else{
	//----->需重新編譯程式碼                    self:OpenCard(card, data.HungPoker[j].Number, data.HungPoker[j].Color,sqs1)
	//----->需重新編譯程式碼                }
	//----->需重新編譯程式碼            }
	//----->需重新編譯程式碼        }
	
	        self:OpenCard(adt[1].card[3], data.HeiPoker[3].Number, data.HeiPoker[3].Color,sqs1)
	        self:blinkPorkerResult(data.HeiZuHe, self.uiRoot.compare.cardHei.resultIcon, sqs1)
	        self:OpenCard(adt[2].card[3], data.HungPoker[3].Number, data.HungPoker[3].Color,sqs1)
	        self:blinkPorkerResult(data.HungZuHe, self.uiRoot.compare.cardHung.resultIcon, sqs1)
	
        /*
//----->需重新編譯程式碼        sqs1.call(function()
//----->需重新編譯程式碼            fmg.Destroy(vs_Ani)
//----->需重新編譯程式碼            self.uiRoot.compare.vs.gameObject:SetActive(true)
//----->需重新編譯程式碼        end)
//----->需重新編譯程式碼        */
	//----->需重新編譯程式碼    }, [ cmp.cardHei, cmp.cardHung, ])
//----->需重新編譯程式碼    //sqs:AppendInterval(hhdz.dtRstWin == 2 and 5 or 5.5)
	
	//----->需重新編譯程式碼    sqs:AppendInterval(4)
	//----->需重新編譯程式碼    sqs:AppendCallback(function(){
	//----->需重新編譯程式碼        if(call ){ call() }
	    })
	
    //間隔清除牌的時間
	//----->需重新編譯程式碼    sqs:AppendInterval(6)
	//----->需重新編譯程式碼    sqs.call(function(){
	//----->需重新編譯程式碼        self:Recycle(self.uiRoot.compare.cardHei,1)
	//----->需重新編譯程式碼        self:Recycle(self.uiRoot.compare.cardHung,2)
	//----->需重新編譯程式碼    })
	//----->需重新編譯程式碼    sqs:AppendInterval(1)
	//----->需重新編譯程式碼    sqs.call(function(){
	//----->需重新編譯程式碼        self:init()
	//----->需重新編譯程式碼    })
	
	
    // 弹出结算界面
	    fmg.argFuncAnim(sqs, function(adt){
	        self.uiRoot.compare.efWin.active =(false)
	        self.uiRoot.compare.cardHei.resultIcon.active =(false)
	        self.uiRoot.compare.cardHung.resultIcon.active =(false)
	
	        self.dtOpenCardStep = 0
        // if adt[1] then adt[1]() end
	
        /*hhdz.dtRstWin = 2
        if hhdz.dtRstWin ~= 2 then
            hhdz.gameLayer:RemoveLoseArea(hhdz.dtRstWin)
            hhdz.gameLayer:PlayWinAnimation(hhdz.dtRstWin, false)
        else
            hhdz.gameLayer:PlayWinAnimation(2, false)
            hhdz.gameLayer:PlayWinAnimation(1, true)
            hhdz.gameLayer:PlayWinAnimation(3, true)
        end*/
	    }, [ call ])
	},

	Compare:blinkPorkerResult(ZuHe, obj, sqq){
	
	    fmg.argFuncAnim(sqq, function(adt){
	
	
	
	
	//----->需重新編譯程式碼        let sqs2 = CS.DG.Tweening.DOTween.Sequence()
	        let ProkerType = self:GetCardType(ZuHe)
	
	
	        GameG.SetImageSprite(obj, G.GetGamePName(), "resultcardtype_" + tostring(ProkerType));
	        hhdz.gameAudio:cardTypeShow(ProkerType);
	        obj.active =(true);
	
	//----->需重新編譯程式碼        sqs2:Join(obj:DOScale(fmg.v3(1.7, 1.7, 1), 0.15));
	//----->需重新編譯程式碼        sqs2:AppendInterval(0.15);
	//----->需重新編譯程式碼        sqs2:Join(obj:DOScale(fmg.v3(1.0, 1.0, 1), 0.15));
	//----->需重新編譯程式碼        sqs2:AppendInterval(0.15);
	//----->需重新編譯程式碼        sqs2:Join(obj:DOScale(fmg.v3(1.7, 1.7, 1), 0.15));
	//----->需重新編譯程式碼        sqs2:AppendInterval(0.15);
	//----->需重新編譯程式碼        sqs2:Join(obj:DOScale(fmg.v3(1.0, 1.0, 1), 0.15));
	//----->需重新編譯程式碼        sqs2:AppendInterval(0.15);
	    }, [])
	},

//判断是否为顺子
	Compare:CheckStraight(data){
	    let middle = (data[1].Number + data[2].Number + data[3].Number) / 3
	    if(data[1].Number == middle ){
	        if(data[2].Number == middle - 1 || data[3].Number == middle - 1 ){
	            return true
	        }
	} 
    else if( data[2].Number == middle ){

	        if(data[1].Number == middle - 1 || data[3].Number == middle - 1 ){
	            return true
	        }
	} 
    else if( data[3].Number == middle ){

	        if(data[1].Number == middle - 1 || data[2].Number == middle - 1 ){
	            return true
	        }
	    }
	
    //例外A
	    let temp1 = data[1].Number
	    let temp2 = data[2].Number
	    let temp3 = data[3].Number
	    if(data[1].Number == 1 ){ temp1 = 14 }
	    if(data[2].Number == 1 ){ temp2 = 14 }
	    if(data[3].Number == 1 ){ temp3 = 14 }
	    let middle = (temp1 + temp2 + temp3) / 3
	    if(temp1 == middle ){
	        if(temp2 == middle - 1 || temp3 == middle - 1 ){
	            return true
	        }
	} 
    else if( temp2 == middle ){

	        if(temp1 == middle - 1 || temp3 == middle - 1 ){
	            return true
	        }
	} 
    else if( temp3 == middle ){

	        if(temp1 == middle - 1 || temp2 == middle - 1 ){
	            return true
	        }
	    }
	    return false
	},

//判断是否为同花
	Compare:CheckSameColor(data){
	    if(data[1].Color == data[2].Color && data[1].Color == data[3].Color ){
	        return true
	    }
	    return false
	},

//判断是否为同点
	Compare:CheckSameNumber(data){
	    if(data[1].Number == data[2].Number && data[1].Number == data[3].Number ){
	        return true
	    }
	    return false
	},

//取得牌型（组合结果）
//server 传入 4豹子、5顺金、6金花、7顺子、8对子（9-A）、9对子（2-8）、10单张
//回传7豹子、6顺金、5金花、4顺子、3对子（9-A）、2对子（2-8）、1单张
	Compare:GetCardType(ZuHe){
	    return 11 - ZuHe
	},

//单张大小：从大到小为A、K、Q、J、10、9、8、7、6、5、4、3、2。
//最小的顺子A23
	Compare:GetMaxPoker(data){
	    let temp1 = data[1].Number
	    let temp2 = data[2].Number
	    let temp3 = data[3].Number
	    if(data[1].Number == 1 ){ temp1 = 14 }
	    if(data[2].Number == 1 ){ temp2 = 14 }
	    if(data[3].Number == 1 ){ temp3 = 14 }
	
	    let maxPoker
	    if(temp1 >= temp2 && temp1 >= temp3 ){
	        maxPoker = data[1]
	} 
    else if( temp2 >= temp1 && temp2 >= temp3 ){

	        maxPoker = data[2]
	} 
    else if( temp3 >= temp1 && temp3 >= temp2 ){

	        maxPoker = data[3]
	    }
	
	    return maxPoker
	},

	Compare:GetMidPoker(data){
	    let temp1 = data[1].Number
	    let temp2 = data[2].Number
	    let temp3 = data[3].Number
	    if(data[1].Number == 1 ){ temp1 = 14 }
	    if(data[2].Number == 1 ){ temp2 = 14 }
	    if(data[3].Number == 1 ){ temp3 = 14 }
	
	    let midPoker
	    if(temp2 >= temp1 && temp1 >= temp3 ){
	        midPoker = data[1]
	} 
    else if( temp3 >= temp1 && temp1 >= temp2 ){

	        midPoker = data[1]
	} 
    else if( temp1 >= temp2 && temp2 >= temp3 ){

	        midPoker = data[2]
	} 
    else if( temp3 >= temp2 && temp2 >= temp1 ){

	        midPoker = data[2]
	} 
    else if( temp1 >= temp3 && temp3 >= temp2 ){

	        midPoker = data[3]
	} 
    else if( temp2 >= temp3 && temp3 >= temp1 ){

	        midPoker = data[3]
	    }
	
	    return midPoker
	},

	Compare:GetMinPoker(data){
	    let temp1 = data[1].Number
	    let temp2 = data[2].Number
	    let temp3 = data[3].Number
	    if(data[1].Number == 1 ){ temp1 = 14 }
	    if(data[2].Number == 1 ){ temp2 = 14 }
	    if(data[3].Number == 1 ){ temp3 = 14 }
	
	    let minPoker
	    if(temp2 >= temp1 && temp3 >= temp1 ){
	        minPoker = data[1]
	} 
    else if( temp1 >= temp2 && temp3 >= temp2 ){

	        minPoker = data[2]
	} 
    else if( temp1 >= temp3 && temp2 >= temp3 ){

	        minPoker = data[3]
	    }
	
	    return minPoker
	},


};

module.exports = Compare
