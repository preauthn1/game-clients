var G = require( "Global")
var poolCount = 100

var UIBet = {
	extends: cc.Component,

	Create(index,root,rootFront,rootLast){
		let target = []
		
	    let canvas = cc.find("Canvas")
	    let perfab =cc.find("GameLayer/CastPool/PfCast", canvas)
		
		let anchor_start =cc.find("GameLayer/downMune/users", canvas)
		
		let txt_all =cc.find("TextAll", rootFront).getComponent(cc.Label)
		let txt_my =cc.find("TextMy",  rootFront).getComponent(cc.Label)
		let txt_mybg =cc.find("TextMyBg",  rootFront).getComponent(cc.Sprite)
		let luckyStar =cc.find("Star", rootFront).getComponent(cc.Sprite)
		let luckyStarStartPos = luckyStar.position
	//txt_my.text = ""
	//txt_mybg.gameObject:SetActive(false)
		
		let btn = root.getComponent(cc.Button)
		let range =cc.find("Range", root)
	    let blink =cc.find("blink", rootLast).getComponent(cc.Sprite)
		let luckyStarEffect =cc.find("LuckyStarEffect", root)
		let luckyStarEffectPos = luckyStarEffect.position
		luckyStarEffect.active =(false)
				
		let pool = []
		let roadmap = []
		let castBetAll = 0
		let castBetMy = 0
		let useIndex = 0
		
		target.SetCallback = function(data){ callback = data }
		btn.node.on('click',function(){ callback(index) })
		
		let  CreateClone = function(index){
			let clone = cc.instantiate(perfab)
			if(clone == null){ return null }
			clone.parent =(perfab.parent)
			clone.position = cc.v3(0, 0, 0)
			clone.scale = cc.v3(1, 1, 1)
			
			pool[index] = []
			pool[index].root = clone
			pool[index].btn =cc.find("btn", clone).getComponent(cc.Button)
			pool[index].img =cc.find("btn", clone).getComponent(cc.Sprite)
			pool[index].bet =cc.find("bet", clone).getComponent(cc.Label)
			pool[index].use = false	//使用中
			pool[index].userId = 0
			
		}
		
		let  RecycleCastBetChip = function(i){
			pool[i].use = false
			pool[i].count = 0
			pool[i].userId = 0
			pool[i].bettype = 0
			pool[i].root.active =(false)
		}
		
	for(let  i = 1;  i <= poolCount; ++ i){ CreateClone(i) }//	for i=1,poolCount do CreateClone(i) }
		
		let  GetCurrentChip = function(num,index){
	for(let k in (pool)){ 
	let v = pool[k] 

				if(v.use == false ){
					v.use = true
					v.bet.text = G.Tool.UserHelper.ToCash(num)
					v.count = num
					v.root.active =(true)
	//----->需重新編譯程式碼				v.root:SetAsLastSibling()
					v.root.eulerAngles = cc.v3(0, 0, 0)
				//v.root.transform:Rotate(fmg.v3(0, 0, math.random(-45,45)))
	
					GameG.SetImageSprite(v.img, G.GetGamePName(),  hhdz.GetBetBtnImg(hhdz.dtBaseBet[index])+"_4")
				//CS.UISpriteManager.Instance:SetImageSprite(v.img, G.GetGamePName(), "cast"..tostring(index-1).."_1")
					
					return v
				}
			}
			return null
		}
		
		let  GetCastBetChip = function(num,index){
			let clone = GetCurrentChip(num,index)
			if(clone == null ){
			// 从头开始
	for(let k in (pool)){ 
	let v = pool[k] 

					if(v.userId != GameConfig.getUserID() ){ 
						if(k > useIndex ){
							useIndex = k 
							if(useIndex >= pool.length ){ useIndex = 0 }
							v.use = false
							break
						}
					}
				}
				clone = GetCurrentChip(num,index)
			}
			if(clone == null ){
				CreateClone(pool.length +1)
				clone = GetCurrentChip(num,index)
			}
			
			return clone
		}
		
		let  GetCastBetRange = function(root){
			let targetPosX = range.position.x 
			let rangeX = CS.UnityEngine.Random.Range(range.width * -0.5,range.width * 0.5)
			if(rangeX > 0 ){ 
				targetPosX = targetPosX + rangeX - root.width * 0.5
	} 
		else{
				targetPosX = targetPosX + rangeX + root.width * 0.5
			}
			let targetPosY = range.position.y
			let rangeY = CS.UnityEngine.Random.Range(range.height * -0.5,range.height * 0.5)
			if(rangeY > 0 ){ 
				targetPosY = targetPosY + rangeY - root.height * 0.5
	} 
		else{
				targetPosY = targetPosY + rangeY + root.height * 0.5
			}
			return cc.v3(targetPosX,targetPosY)
		}
		
		let IsCanPlayAudio = true
		let  playAudio = function(){
			if(IsCanPlayAudio == true ){
				IsCanPlayAudio = false
			
			//hhdz.gameAudio:addCoin()
				G.Tool.Sound.PlayGameSound("adAddCastMax")
				CS.TimeManager.Instance:DelayInvoke(0.2, function( ){
					
					IsCanPlayAudio = true
				})
			}
		}		
	
		target.GetCastBetAll = function(){
			return castBetAll
		}
	// 下注失敗的時候回收籌碼
		target.ClearBetRetError = function(num,userId){
	for(let k in (pool)){ 
	let v = pool[k] 

				if(v.use == true && v.userId == userId && v.count == num ){
					RecycleCastBetChip(k)
					return
				}
			}
		}
		
		target.ShowCastBetChip = function(num,bettype,index,show,startPos,userId){
			if(num == 0 ){ return }
			startPos = startPos || anchor_start.position
			let obj = GetCastBetChip(num,index)
			obj.userId = userId
			obj.index = index
			obj.bettype = bettype
			if(userId == GameConfig.getUserID() ){
				G.Tool.Sound.PlayGameSound("adAddCast")
	      
			//hhdz.gameAudio:selfoutCoin()
	} 
		else{
				playAudio()
			}
			
			if(show == false ){
				obj.root.position = GetCastBetRange(obj.root)
	} 
		else{
			//hhdz.gameAudio:outCoin()
				
	
				obj.root.position = startPos
				obj.root.scale = cc.v3(1, 1, 1)
	//----->需重新編譯程式碼			let sequence = CS.DG.Tweening.DOTween.Sequence()
	//----->需重新編譯程式碼            sequence:SetEase(CS.DG.Tweening.Ease.InOutQuad)
	//----->需重新編譯程式碼			sequence:Append(obj.root:DOMove(GetCastBetRange(obj.root), 0.5))
	//----->需重新編譯程式碼			sequence:Append(obj.root:DOScale(0.8, 0.5))
	
			}
		}
		
		target.ShowClearBetChip = function(userId,targetPos){
			targetPos = targetPos || anchor_start.position
	for(let k in (pool)){ 
	let v = pool[k] 

				if(v.use == true && v.userId == userId ){
					playAudio()
	//----->需重新編譯程式碼				let sequence = CS.DG.Tweening.DOTween.Sequence()
	//----->需重新編譯程式碼				sequence:SetEase(CS.DG.Tweening.Ease.InOutQuad)
	//----->需重新編譯程式碼				sequence:Append(v.root:DOMove(targetPos, 0.5))
	//----->需重新編譯程式碼				sequence.call(function(){
	//----->需重新編譯程式碼					RecycleCastBetChip(k)
	//----->需重新編譯程式碼				})
				}
			}
		}
		
	//桌面底注
		target.ShowBroadCastBetAll = function(num){
			castBetAll = num
			txt_all.text = G.Tool.UserHelper.ToCash(num || 0)
		}
	//自己底注
		target.ShowBroadCastBetMy = function(num){
			castBetMy = num
		//txt_my.text = G.Tool.UserHelper.ToCash(num or 0)
//		if num == 0 then
//			txt_my.text ="1 赔 " .. tostring(hhdz.resultOdd[index])
//		end
	
		// if num == 0 then
		// 	txt_my.text = ""
		// 	txt_mybg.gameObject:SetActive(false)
		// else
		// 	txt_my.text = "下注:" .. G.Tool.UserHelper.ToCash(num)		
		// 	txt_mybg.gameObject:SetActive(true)
		// end	
	
			txt_my.text = G.Tool.UserHelper.ToCash(num)		
	
		}
		
		let  CheckShowWinChip = function(data,userId){
		//庄家全部回收
			if(userId == null ){
				return true
		//指定回收
	} 
		else if( data.userId == userId ){

				return true
			} 
			return false
		}
	
	//庄家赔付
		target.CloneWinChip = function(bettype){
	//----->需重新編譯程式碼        let sequence = CS.DG.Tweening.DOTween.Sequence()
	for(let          i = 1;          i <= pool.length; ++         i){//        for i=1,pool.length do
	            let obj = pool[i]
	            if(obj.use && obj.bettype == bettype ){
	//----->需重新編譯程式碼                sequence:AppendInterval(0.005)
	//----->需重新編譯程式碼                sequence.call(function(){
	//----->需重新編譯程式碼                    target.ShowCastBetChip(obj.count, obj.bettype, obj.index, true, hhdz.gameLayer.uiRoot.zhuang.position, obj.userId)
	//----->需重新編譯程式碼                })
	            }
	        }
		}
		
	
    //赢钱动画
		target.ShowWinChip = function(targetPos,userId){
	        isPlayAudio = false
	//----->需重新編譯程式碼		let sequenceDelay = CS.DG.Tweening.DOTween.Sequence()
			targetPos = targetPos || anchor_start.position
	for(let k in (pool)){ 
	let v = pool[k] 

				if(v.use == true && CheckShowWinChip(v,userId) == true ){
					v.use = false
				//local targetPos = targetPos or startPos
				//targetPos.x = targetPos.x + CS.UnityEngine.Random.Range(-10, 10)
				//targetPos.y = targetPos.y + CS.UnityEngine.Random.Range(-5, 5)
//----->需重新編譯程式碼				//sequenceDelay:AppendInterval(0.01)
	//----->需重新編譯程式碼				sequenceDelay:AppendInterval(0.005)
	//----->需重新編譯程式碼				sequenceDelay.call(function(){
	//----->需重新編譯程式碼                    if(isPlayAudio == false ){
//----->需重新編譯程式碼						//hhdz.gameAudio:outCoin()
	//----->需重新編譯程式碼						playAudio()
	//----->需重新編譯程式碼                        isPlayAudio= true
	//----->需重新編譯程式碼                    }
	//----->需重新編譯程式碼					let sequence = CS.DG.Tweening.DOTween.Sequence()
	//----->需重新編譯程式碼					sequence:SetEase(CS.DG.Tweening.Ease.InOutQuad)
//----->需重新編譯程式碼					//sequence:Append(v.root.transform:DOMove(targetPos, 1))
	//----->需重新編譯程式碼					sequence:Append(v.root:DOMove(targetPos, 0.7))
	//----->需重新編譯程式碼					sequence:AppendCallback(function(){
	//----->需重新編譯程式碼						RecycleCastBetChip(k)
	//----->需重新編譯程式碼					})
	//----->需重新編譯程式碼				})
				}
			}
		}
		
	//输钱动画(赔率,移动目标)
		target.ShowLoseChipAll = function(odd,targetPos,part){
			let part = part || 1
			let castBet = (castBetAll - castBetMy)
			if(castBet <= 0 ){ return }
			targetPos = targetPos || anchor_start.position
			
			let CheckBet = require("CheckBet")
			let BetData, CountData = CheckBet.Init(odd * castBet, hhdz.dtBaseBet, hhdz.dtBetRate)
			
	for(let  i = 1;  i <= BetData.length; ++ i){//		for i=1,BetData.length do
	for(let  j = 1;  j <= CountData[i]; ++ j){//			for j=1,CountData[i] do
					target.ShowCastBetChip(brnn.BetCount[k],k,true,targetPos,0)
				}
			}
		}
		
	//输钱动画(赔率,移动目标)
		target.ShowLoseChipMy = function(odd,targetPos){
			if(castBetMy <= 0 ){ return }
			targetPos = targetPos || anchor_start.position
			let castMyArr = brnn.gameControl:getCoinArr(odd * castBetMy)
	for(let k in (castMyArr)){ 
	let v = castMyArr[k] 

	for(let  i  = 1;  i  <= v; ++ i ){//			for i =1,v do
					if(v > 0 ){
						target.ShowCastBetChip(brnn.BetCount[k],k,true,targetPos,GameConfig.getUserID())
					}
				}
			}
		}
		
		target.ChangeChipUserId = function(data,iswin){
	for(let k in (pool)){ 
	let v = pool[k] 

				if(v.use == true ){
					if(iswin == true && v.userId != GameConfig.getUserID() ){
						v.userId = 0
	} 
				else if( iswin == false ){

						v.userId = 0
					}
				}
			}
			
			if(data.length != 0 ){
				let poolCount = 1
	for(let k in (pool)){ 
	let v = pool[k] 

					if(pool[k].userId == 0 ){
						let userNo = math.fmod(poolCount,data.length) +1
						pool[k].userId = data[userNo]
						poolCount = poolCount+1
					}
				}
			}
		}
		
		target.GameStart = function(){
	        target.ShowBroadCastBetAll(0)
	        target.ShowBroadCastBetMy(0)
			target.StopLuckyStar()
	for(let k in (pool)){ 
	let v = pool[k] 

				RecycleCastBetChip(k)
			}
		}
		
	    target.GameEnd = function(data){
	        target.ShowBroadCastBetAll(0)
	        target.ShowBroadCastBetMy(0)
			target.StopLuckyStar()
			IsCanPlayAudio = true
			CS.TimeManager.Instance:StopAllDelayInvoke()
	    }
			
		target.ShowLuckyStar = function(){
			luckyStarEffect.active =(true)
			luckyStarEffect.position = luckyStarEffectPos
			luckyStar.active =(true)
			luckyStar.color = cc.Color(1,1,1,0)
			
	//----->需重新編譯程式碼		let sequence = CS.DG.Tweening.DOTween.Sequence()
	//----->需重新編譯程式碼		sequence:SetEase(CS.DG.Tweening.Ease.InCirc)
	
	//----->需重新編譯程式碼		sequence:Append(luckyStarEffect:DOMove(luckyStar.position,0.5))
	
	//----->需重新編譯程式碼		sequence:Append(luckyStar:DOColor(cc.Color(luckyStar.color.r,luckyStar.color.g,luckyStar.color.b,1), 0.3))
	//----->需重新編譯程式碼		sequence:AppendInterval(0.8)
	//----->需重新編譯程式碼		sequence.call(function(){ luckyStarEffect.active =(false) })
		}
		
		target.StopLuckyStar = function(){
			luckyStarEffect.active =(false)
			luckyStar.active =(false)
			luckyStar.scale = cc.v3(1, 1, 1)
		}
		
	// 开始赢家闪烁
		target.ShowBlinkWin = function(tm){
			let color = blink.color
			blink.active =(true)
			blink.color = cc.Color.white
	
	//----->需重新編譯程式碼		let sequence = CS.DG.Tweening.DOTween.Sequence()
	for(let  i  =  tm;  i  <=  1; ++ i ){//		for i = tm, 1, -1 do
	//----->需重新編譯程式碼			sequence:Append(blink:DOColor(cc.Color(blink.color.r,blink.color.g,blink.color.b,1), 0.3))
	//----->需重新編譯程式碼			sequence:AppendInterval(0.4)
	//----->需重新編譯程式碼			sequence:Append(blink:DOColor(cc.Color(blink.color.r,blink.color.g,blink.color.b,0), 0.3))
			}
	//----->需重新編譯程式碼		sequence.call(function(){
	//----->需重新編譯程式碼			target.StopBlinkWin()
	//----->需重新編譯程式碼		})
		}
		
	// 停止赢家闪烁
		target.StopBlinkWin = function(){
			blink.active =(false)
			blink.color = cc.Color.white
		}
		
		return target
	},


};

module.exports = UIBet
