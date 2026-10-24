var HallG = require("Global")
var GameG = require("GameGlobal")
var gameData = require("GameData")
var rootRect = null
var spineDragon = null
var autoSequenceKey = 0
var sequenceDict = []
var completeCallback = null

var UIFortuneGod = 
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
		rootRect.active =(false)
		
		spineDragon = cc.find("SkeletonGraphic (dragon_fly)", root).getComponent(sp.Skeleton)
		
	},

	CheckCondition(data)
	{
		// 是否達到出現機率
		let randomIndex = Math.floor(Math.random() * 100) + 1
		if(randomIndex < 80)
		{
			return false
		}
			
		// big win
		if (data.WinMoney >= gameData.BigWinStep[1])
		{
			return true
		}
		
		// gold reel
		let startIndex = 1
		let count = 0
		let result = data.BackgroundInfo.BlinkPositions
		if(result == null)
		{
			return false
		}
		
		// for i=1, result.length do
		for(let  i = 1;  i <=  result.length; ++ i)
		{
			if(startIndex + count == result[i].Reel)
			{
				count = count +1
			} 
			else if(count < 3)
			{
				startIndex = result[i].Reel
				count = 1
			}
		}
		if(count >= 3)
		{
			return true
		}		
		return false
	},

	Show(data, callback)
	{
		if(this.CheckCondition(data) == false)
		{
			if(callback != null)
			{
				callback(false)
			}
			return
		}
		
		completeCallback = callback		
		GameG.PlayGameSound("se_lucky")
		
		rootRect.active = (true)
		let width = 1500
		spineDragon.position = cc.v3(width *-1,0,0)
		let sequence = GetSequence()
//----->需重新編譯程式碼	sequence:AppendInterval(0.35)
//----->需重新編譯程式碼	sequence:Append(spineDragon:DOLocalMoveX(width, 2.7))
//----->需重新編譯程式碼	sequence.call(function(){ 
//----->需重新編譯程式碼		Hide()
//----->需重新編譯程式碼	})
	},

	Hide()
	{
		rootRect.active = (false)
		
		if(completeCallback != null)
		{
			completeCallback(true)
		}
	},
};

module.exports = UIFortuneGod
