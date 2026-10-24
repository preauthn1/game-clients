var HallG = require("Global")
var GameG = require("GameGlobal")
var gameData = require("GameData")
var rootRect = null
var rootDoorL = null
var rootDoorR = null
var imgCount = null
var txtCount = null
var doorCloseX = 1000
var autoSequenceKey = 0
var sequenceDict = []

var UIBonusEnter = 
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
		rootRect.active =(true)
		
		rootDoorL = cc.find("RawImageDoorL", root)
		rootDoorR = cc.find("RawImageDoorR", root)
		
		doorCloseX = rootDoorR.x
		
		imgCount = cc.find("ImageCount", root).getComponent(cc.Sprite)
		txtCount = cc.find("ImageCount/Text", root).getComponent(cc.Label)
		imgCount.active =(false)
	},

	// 回合開始
	SetGameStart()
	{
	
	},

	// 回合結束
	SetGameEnd()
	{
	
	},

	Update(dt)
	{
		
	},

	Show(callback)
	{
		if(gameData.BonusGame == null)
		{
			if(callback != null)
			{
				callback()
			}
			return
		}
		
		GameG.PlayGameSound("se_jpcutscene")
		GameG.PlayGameSound("se_jpclosedoor")
			
		let sequence = GetSequence()
		// 關門
//----->需重新編譯程式碼	sequence:Append(rootDoorL:DOAnchorPosX(0, 0.5))
//----->需重新編譯程式碼	sequence:Join(rootDoorR:DOAnchorPosX(0, 0.5))
		// 等待時間
//----->需重新編譯程式碼	sequence:AppendInterval(1.0)
//----->需重新編譯程式碼	sequence.call(function(){ 
//----->需重新編譯程式碼		GameG.PlayGameSound("se_jpclosedoor")
//----->需重新編譯程式碼		if(callback != null){
//----->需重新編譯程式碼			callback()
//----->需重新編譯程式碼		}	
//----->需重新編譯程式碼	})	
		
		// 開門
//----->需重新編譯程式碼	sequence:Append(rootDoorL:DOAnchorPosX(doorCloseX *-1, 1.0))
//----->需重新編譯程式碼	sequence:Join(rootDoorR:DOAnchorPosX(doorCloseX, 1.0))
	},

	ShowBonusGameCount()
	{
		if(gameData.RetriggerBonusGame == null)
		{
			imgCount.active =(false)
			return
		}
		if(gameData.RetriggerBonusGame.Count <= 0)
		{
			imgCount.active =(false)
			return
		}
		imgCount.active =(true)
		txtCount.text = "X" + gameData.RetriggerBonusGame.Count
		
		let sequence = GetSequence()
//----->需重新編譯程式碼	sequence:Append(imgCount:DOScale(cc.v3(1, 1, 1) *1.2 , 0.5))
//----->需重新編譯程式碼	sequence:Append(imgCount:DOScale(cc.v3(1, 1, 1) , 0.5))
	},
};

module.exports = UIBonusEnter
