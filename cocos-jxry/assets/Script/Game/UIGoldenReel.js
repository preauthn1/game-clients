var HallG = require("Global")
var GameG = require("GameGlobal")
var rootRect = null
var reel3 = null
var reel4L = null
var reel4R = null
var reel5 = null
var autoSequenceKey = 0
var sequenceDict = []
var completeCallback = null
var countCallback = null
var moneyCallback = null

var UIGoldenReel = 
{
	extends: cc.Component,

	//取得Sequence
	GetSequence(key)
	{
	    if(key == null)
		{
	        key = "AutoSequenceKey_" + autoSequenceKey
	        autoSequenceKey = autoSequenceKey + 1
	    }
	    if(sequenceDict[key] == null)
		{
//----->需重新編譯程式碼        sequenceDict[key] = CS.DG.Tweening.DOTween.Sequence()
	}
    else
	{
//----->需重新編譯程式碼        sequenceDict[key]:Kill()
//----->需重新編譯程式碼        sequenceDict[key] = CS.DG.Tweening.DOTween.Sequence()
	    }
	    return sequenceDict[key]
	},

	//刪除Sequence
	KillSequence(key)
	{
	    if(sequenceDict[key])
		{
//----->需重新編譯程式碼        sequenceDict[key]:Kill()
	    }
	    sequenceDict[key] = null
	},

	//刪除全部Sequence
	KillTotalSequence()
	{
		for(let k in (sequenceDict))
		{
			let v = sequenceDict[k] 

			KillSequence(k)
		}
	},

	//離開遊戲
	onExit()
	{
		KillTotalSequence()
	},

	Init(root)
	{
		rootRect = root
		rootRect.active = (false)
		
		reel3 = []
		reel3.root = cc.find("RootReel3", root)
		reel3.root.active =(false)
		reel3.imgBg =cc.find("RootReel3/Image", root).getComponent(cc.Sprite)
		reel3.txtScore =cc.find("RootReel3/Image/Text", root).getComponent(cc.Label)
		
		reel4L = []
		reel4L.root = cc.find("RootReel4L", root)
		reel4L.root.active =(false)
		reel4L.imgTitle = cc.find("RootReel4L/ImageTitle", root).getComponent(cc.Sprite)
		
		reel4R = []
		reel4R.root = cc.find("RootReel4R", root)
		reel4R.root.active =(false)
		reel4R.imgTitle = cc.find("RootReel4R/ImageTitle", root).getComponent(cc.Sprite)
		
		reel5 = []
		reel5.root = cc.find("RootReel5", root)
		reel5.root.active =(false)
		reel5.rootMoney = cc.find("RootReel5/RootMoney", root)
		reel5.imgTitle = cc.find("RootReel5/RootMoney/ImageTitle", root).getComponent(cc.Sprite)
		reel5.imgBg = cc.find("RootReel5/RootMoney/ImageBg", root).getComponent(cc.Sprite)
		reel5.txtScore = cc.find("RootReel5/RootMoney/Text", root).getComponent(cc.Label)
		reel5.imgJackpot = cc.find("RootReel5/ImageJackpot", root).getComponent(cc.Sprite)
		reel5.effect = cc.find("RootReel5/Effect", root)
		reel5.SetEffectActive = function(isActive)
		{
			reel5.effect.active = (isActive)
		}
		reel5.SetEffectActive(false)
	},

	Show(data, money, callbackCount, callbackMoney, callbackComplete)
	{
		countCallback = callbackCount
		completeCallback = callbackComplete
		moneyCallback = callbackMoney
		rootRect.active =(true)
	
		let startIndex = 1
		let count = 0
		if(data != null)
		{
			for(let i in data)
			{
				if(startIndex + count == data[i].Reel)
				{
					count = count +1
				} 
				else if(count < 3)
				{
					startIndex = data[i].Reel
					count = 1
				}
			}
		}
		
		if(count == 3)
		{
			this.ShowReel3(startIndex,money)
		} 
		else if(count == 4 && startIndex == 1)
		{
			this.ShowReel4_Left()
		} 
		else if(count == 4 && startIndex == 2)
		{
			this.ShowReel4_Right()
		} 
		else if(count == 5)
		{
			this.ShowReel5(money)
		} 
		else
		{
			this.Hide()
		}
	},

	Hide()
	{
		rootRect.active = (false)
		
		if(completeCallback != null)
		{
			completeCallback()
		}
	},

	ShowReel3(startIndex, money)
	{
		GameG.PlayGameSound("se_goldframe")
		let _y = reel3.root.position.y
		let _z = reel3.root.position.z
		
		reel3.txtScore.text = GameG.FormatNum(money)
		if(startIndex == 1)
		{
			reel3.root.position = cc.v3(-185, _y, _z)
		} 
		else if(startIndex == 2)
		{
			reel3.root.position = cc.v3(0, _y, _z)	
		}
		else if(startIndex == 3)
		{
			reel3.root.position = cc.v3(185, _y, _z)
		}
	
		reel3.root.active =(true)
		// 縮放
		reel3.imgBg.scale = cc.v3(1, 1, 1)
		let sequence1 = GetSequence()
//----->需重新編譯程式碼	sequence1:Append(reel3.imgBg:DOScale(cc.v3(1, 1, 1) *1.2 , 0.5))
//----->需重新編譯程式碼	sequence1:Append(reel3.imgBg:DOScale(cc.v3(1, 1, 1) , 0.5))
		// 透明度
		let colorBg = reel3.imgBg.color
		reel3.imgBg.color = cc.Color(colorBg.r, colorBg.g, colorBg.b, 0)
		let sequence2 = GetSequence()
//----->需重新編譯程式碼	sequence2:Append(reel3.imgBg:DOColor(cc.Color(colorBg.r, colorBg.g, colorBg.b, 1) , 0.5))
//----->需重新編譯程式碼	sequence2:AppendInterval(2.0)
//----->需重新編譯程式碼	sequence2:Append(reel3.imgBg:DOColor(cc.Color(colorBg.r, colorBg.g, colorBg.b, 0) , 0.5))
//----->需重新編譯程式碼	sequence2.call(function(){ 
//----->需重新編譯程式碼		reel3.root.active =(false)
//----->需重新編譯程式碼		Hide()
//----->需重新編譯程式碼	})
		
		let colorScore = reel3.txtScore.color
		reel3.txtScore.color = cc.Color(colorScore.r, colorScore.g, colorScore.b, 0)
		let sequence3 = GetSequence()
//----->需重新編譯程式碼	sequence3:Append(reel3.txtScore:DOColor(cc.Color(colorScore.r, colorScore.g, colorScore.b, 1) , 0.5))
//----->需重新編譯程式碼	sequence3:AppendInterval(2.0)
//----->需重新編譯程式碼	sequence3:Append(reel3.txtScore:DOColor(cc.Color(colorScore.r, colorScore.g, colorScore.b, 0) , 0.5))	
//----->需重新編譯程式碼	sequence3.call(function(){
//----->需重新編譯程式碼		if(moneyCallback != null){
//----->需重新編譯程式碼			moneyCallback()
//----->需重新編譯程式碼		}
//----->需重新編譯程式碼	})
	},

	ShowReel4_Left()
	{
		GameG.PlayGameSound("se_goldframe")
		
		reel4L.root.active = (true)
		// 縮放
		reel4L.imgTitle.scale = cc.v3(1, 1, 1)
		let sequence1 = GetSequence()
//----->需重新編譯程式碼	sequence1:Append(reel4L.imgTitle:DOScale(cc.v3(1, 1, 1) *1.2 , 0.5))
//----->需重新編譯程式碼	sequence1:Append(reel4L.imgTitle:DOScale(cc.v3(1, 1, 1) , 0.5))
//----->需重新編譯程式碼	sequence1:Append(reel4L.imgTitle:DOScale(cc.v3(1, 1, 1) *1.2 , 0.5))
//----->需重新編譯程式碼	sequence1:Append(reel4L.imgTitle:DOScale(cc.v3(1, 1, 1) , 0.5))
		// 透明度
		let colorTitle = reel4L.imgTitle.color
		reel4L.imgTitle.color = cc.Color(colorTitle.r, colorTitle.g, colorTitle.b, 1)
		let sequence2 = GetSequence()
//----->需重新編譯程式碼	sequence2:AppendInterval(1.5)
//----->需重新編譯程式碼	sequence2:Append(reel4L.imgTitle:DOColor(cc.Color(colorTitle.r, colorTitle.g, colorTitle.b, 0) , 0.5))
//----->需重新編譯程式碼	sequence2:AppendInterval(1.0)
//----->需重新編譯程式碼	sequence2.call(function(){ 
//----->需重新編譯程式碼		if(countCallback != null){
//----->需重新編譯程式碼			countCallback()
//----->需重新編譯程式碼		}
//----->需重新編譯程式碼	})
//----->需重新編譯程式碼	sequence2:AppendInterval(1.0)
//----->需重新編譯程式碼	sequence2.call(function(){ 
//----->需重新編譯程式碼		reel4L.root.active =(false)
//----->需重新編譯程式碼		Hide()
//----->需重新編譯程式碼	})
		
		// 特效飛到左上角財神標示
		let sequence3 = GetSequence()
//----->需重新編譯程式碼	sequence3:AppendInterval(2.3)
//----->需重新編譯程式碼	sequence3.call(function(){ 
//----->需重新編譯程式碼		GameG.PlayGameSound("se_jptrigger")
//----->需重新編譯程式碼	})
	},

	ShowReel4_Right()
	{
		GameG.PlayGameSound("se_goldframe")
		GameG.PlayGameSound("se_jptrigger")
		
		reel4R.root.active =(true)
		// 縮放
		reel4R.imgTitle.scale = cc.v3(1, 1, 1)
		let sequence1 = GetSequence()
//----->需重新編譯程式碼	sequence1:Append(reel4R.imgTitle:DOScale(cc.v3(1, 1, 1) *1.2 , 0.5))
//----->需重新編譯程式碼	sequence1:Append(reel4R.imgTitle:DOScale(cc.v3(1, 1, 1) , 0.5))
//----->需重新編譯程式碼	sequence1:Append(reel4R.imgTitle:DOScale(cc.v3(1, 1, 1) *1.2 , 0.5))
//----->需重新編譯程式碼	sequence1:Append(reel4R.imgTitle:DOScale(cc.v3(1, 1, 1) , 0.5))
		// 透明度
		let sequence2 = GetSequence()
		let colorTitle = reel4R.imgTitle.color
		reel4R.imgTitle.color = cc.Color(colorTitle.r, colorTitle.g, colorTitle.b, 1)
//----->需重新編譯程式碼	sequence2:AppendInterval(1.5)
//----->需重新編譯程式碼	sequence2:Append(reel4R.imgTitle:DOColor(cc.Color(colorTitle.r, colorTitle.g, colorTitle.b, 0) , 0.5))
//----->需重新編譯程式碼	sequence2:AppendInterval(2.0)
//----->需重新編譯程式碼	sequence2.call(function(){ 
//----->需重新編譯程式碼		reel4R.root.active =(false)
//----->需重新編譯程式碼		Hide()
//----->需重新編譯程式碼	})
			
		// 特效飛到左上角財神標示
		let sequence3 = GetSequence()
//----->需重新編譯程式碼	sequence3:AppendInterval(2.3)
//----->需重新編譯程式碼	sequence3.call(function(){ 
//----->需重新編譯程式碼		GameG.PlayGameSound("se_jptrigger")
//----->需重新編譯程式碼	})
	},

	ShowReel5(money)
	{
		GameG.PlayGameSound("se_goldframe")
		GameG.PlayGameSound("jp_goldreel")
		
		reel5.root.active =(true)
		reel5.rootMoney.active =(true)
		reel5.imgJackpot.active =(false)
		reel5.txtScore.text = GameG.FormatNum(money)
		reel5.SetEffectActive(true)
		// 縮放
		reel5.imgTitle.scale = cc.v3(1, 1, 1)
		let sequence1 = GetSequence()
//----->需重新編譯程式碼	sequence1:Append(reel5.imgTitle:DOScale(cc.v3(1, 1, 1) *1.2 , 0.5))
//----->需重新編譯程式碼	sequence1:Append(reel5.imgTitle:DOScale(cc.v3(1, 1, 1) , 0.5))
//----->需重新編譯程式碼	sequence1:Append(reel5.imgTitle:DOScale(cc.v3(1, 1, 1) *1.2 , 0.5))
//----->需重新編譯程式碼	sequence1:Append(reel5.imgTitle:DOScale(cc.v3(1, 1, 1) , 0.5))
//----->需重新編譯程式碼	sequence1:Append(reel5.imgTitle:DOScale(cc.v3(1, 1, 1) *1.2 , 0.5))
//----->需重新編譯程式碼	sequence1:Append(reel5.imgTitle:DOScale(cc.v3(1, 1, 1) , 0.5))
//----->需重新編譯程式碼	sequence1:Append(reel5.imgTitle:DOScale(cc.v3(1, 1, 1) *1.2 , 0.5))
//----->需重新編譯程式碼	sequence1:Append(reel5.imgTitle:DOScale(cc.v3(1, 1, 1) , 0.5))
//----->需重新編譯程式碼	sequence1:Append(reel5.imgTitle:DOScale(cc.v3(1, 1, 1) *1.2 , 0.5))
//----->需重新編譯程式碼	sequence1:Append(reel5.imgTitle:DOScale(cc.v3(1, 1, 1) , 0.5))
//----->需重新編譯程式碼	sequence1:Append(reel5.imgTitle:DOScale(cc.v3(1, 1, 1) *1.2 , 0.5)) 
//----->需重新編譯程式碼	sequence1:Append(reel5.imgTitle:DOScale(cc.v3(1, 1, 1) , 0.5))
		// 透明度
		let colorTitle = reel5.imgTitle.color
		reel5.imgTitle.color = cc.Color(colorTitle.r, colorTitle.g, colorTitle.b, 1)
		let sequence2 = GetSequence()
//----->需重新編譯程式碼	sequence2:AppendInterval(7.14)
//----->需重新編譯程式碼	sequence2:Append(reel5.imgTitle:DOColor(cc.Color(colorTitle.r, colorTitle.g, colorTitle.b, 0) , 0.5))
		let colorBg = reel5.imgBg.color
		reel5.imgBg.color = cc.Color(colorBg.r, colorBg.g, colorBg.b, 1)
		let sequence3 = GetSequence()
//----->需重新編譯程式碼	sequence3:AppendInterval(7.14)
//----->需重新編譯程式碼	sequence3:Append(reel5.imgBg:DOColor(cc.Color(colorBg.r, colorBg.g, colorBg.b, 0) , 0.5)) 
		let colorScore = reel5.txtScore.color
		reel5.txtScore.color = cc.Color(colorScore.r, colorScore.g, colorScore.b, 1) 
		let sequence4 = GetSequence()
//----->需重新編譯程式碼	sequence4:AppendInterval(7.14)
//----->需重新編譯程式碼	sequence4:Append(reel5.txtScore:DOColor(cc.Color(colorScore.r, colorScore.g, colorScore.b, 0) , 0.5)) 	
//----->需重新編譯程式碼	sequence4.call(function(){
//----->需重新編譯程式碼		if(moneyCallback != null){
//----->需重新編譯程式碼			moneyCallback()
//----->需重新編譯程式碼		}
//----->需重新編譯程式碼	})
		// 關閉
		let sequence5 = GetSequence()
//----->需重新編譯程式碼	sequence5:AppendInterval(7.14)
//----->需重新編譯程式碼	sequence5.call(function(){ 
//----->需重新編譯程式碼		reel5.SetEffectActive(false)
//----->需重新編譯程式碼		ShowReel5_Jackpot()
//----->需重新編譯程式碼	})
	},

	ShowReel5_Jackpot()
	{
		GameG.PlayGameSound("se_goldframe")
		reel5.rootMoney.active =(false)
		// 縮放
		reel5.imgJackpot.active =(true)
		reel5.imgJackpot.scale = cc.v3(1, 1, 1)
		let sequence1 = GetSequence()
//----->需重新編譯程式碼	sequence1:Append(reel5.imgJackpot:DOScale(cc.v3(1, 1, 1) *1.2 , 0.5))
//----->需重新編譯程式碼	sequence1:Append(reel5.imgJackpot:DOScale(cc.v3(1, 1, 1) , 0.5))
//----->需重新編譯程式碼	sequence1:Append(reel5.imgJackpot:DOScale(cc.v3(1, 1, 1) *1.2 , 0.5))
//----->需重新編譯程式碼	sequence1:Append(reel5.imgJackpot:DOScale(cc.v3(1, 1, 1) , 0.5))
//----->需重新編譯程式碼	sequence1:Append(reel5.imgJackpot:DOScale(cc.v3(1, 1, 1) *1.2 , 0.5))
//----->需重新編譯程式碼	sequence1:Append(reel5.imgJackpot:DOScale(cc.v3(1, 1, 1) , 0.5))
//----->需重新編譯程式碼	sequence1:Append(reel5.imgJackpot:DOScale(cc.v3(1, 1, 1) *1.2 , 0.5))
//----->需重新編譯程式碼	sequence1:Append(reel5.imgJackpot:DOScale(cc.v3(1, 1, 1) , 0.5))
		
		// 關閉
		let sequence2 = GetSequence()
//----->需重新編譯程式碼	sequence2:AppendInterval(2.86)
//----->需重新編譯程式碼	sequence2.call(function(){ 
//----->需重新編譯程式碼		reel5.root.active =(false)
//----->需重新編譯程式碼		Hide()
//----->需重新編譯程式碼	})
		
		// 特效飛到左上角財神標示
		let sequence4 = GetSequence()
//----->需重新編譯程式碼	sequence4:AppendInterval(1.86)
//----->需重新編譯程式碼	sequence4.call(function(){ 
//----->需重新編譯程式碼		GameG.PlayGameSound("se_jptrigger")
//----->需重新編譯程式碼	})
//----->需重新編譯程式碼	sequence4:AppendInterval(0.7)
//----->需重新編譯程式碼	sequence4.call(function(){ 
//----->需重新編譯程式碼		if(countCallback != null){
//----->需重新編譯程式碼			countCallback()
//----->需重新編譯程式碼		}
//----->需重新編譯程式碼	})		
	},
};

module.exports = UIGoldenReel
