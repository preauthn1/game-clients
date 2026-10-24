var HallG = require("Global")
var GameG = require("GameGlobal")
var gameData = require("GameData")
var rootRect = null
var rootLeft = null
var rootRight = null
var prefab = null
var rootMoney = null
var txtMoney = null
var poolLine = []
var poolLeft = []
var poolRight = []
var layoutWorldPos = []
var sizeMoney = 0.6
// 這要依照換線時間
var payLineTime = 0.9

var UIPayLine = 
{
	extends: cc.Component,

	//離開遊戲
	onExit()
	{
		for(let k in (poolLine))
		{
			let v = poolLine[k]
 
			poolLine[k] = null 
		}
	},

	Init(root)
	{
		rootRect = root
		
		rootLeft = cc.find("RootLeft", root)
		rootLeft.active = (false)
		
		rootRight = cc.find("RootRight", root)
		rootRight.active = (false)
		
	    prefab = cc.find("PayLine", root)
		prefab.active = (false)
		
		rootMoney = cc.find("RootMoney", root)
		txtMoney = cc.find("RootMoney/Text", root).getComponent(cc.Label)
	},

	CreateClone(index)
	{
		if(poolLine[index] != null) { return poolLine[index] }
		let clone = cc.instantiate(prefab)
		if(clone == null){ return null }
		clone.parent = (prefab.parent)
		clone.position = cc.v3(0, 0, 0)
		clone.scale = cc.v3(1, 1, 1)
		clone.name = prefab.name + index
		
		poolLine[index] = []
		poolLine[index].lineRenderer = clone.getComponent("LineRenderer")
		poolLine[index].particle = cc.find("Particle", clone)
	},
	
	SetTotal(count)
	{
		/*
		// for i=1, count do
		for(let  i = 1;  i <=  count; ++ i)
		{
			this.CreateClone(i)
			poolLeft[i] = cc.find("RootLeft/PayLineID(" + i + ")", rootRect)
			poolRight[i] = cc.find("RootRight/PayLineID(" + i + ")" , rootRect)
		}
		for(let k in (poolLine))
		{
			let v = poolLine[k]

			poolLine[k].lineRenderer.active =(false)
			poolLine[k].lineRenderer.positionCount = 0
			poolLine[k].offsetY = 0 // 偏移值
		}
		*/
	},

	SetLayoutWorldPos(data)
	{
		layoutWorldPos = data
	},

	// 顯示介面
	SetGameResult(payGroups)
	{
		
		let compare = function(reelA,reelB)
		{	
			return reelA.Reel < reelB.Reel
		}
		
		for(let k1 in (payGroups))
		{
			let v1 = payGroups[k1]

			let payLineID = v1.PayLines.PayLineID
		
			table.sort(v1.PayLines.Positions, compare)
		
			poolLine[payLineID].lineRenderer.positionCount = 0
			
			for(let k2 in (v1.PayLines.Positions))
			{
				let v2 = v1.PayLines.Positions[k2]

				if(layoutWorldPos[v2.Reel] != null)
				{
					// 因layoutWorldPos是初始設定的，沒有換算過螢幕解析度的縮放
					let targetPos = layoutWorldPos[v2.Reel][v2.Row] * gameData.CameraScale
					SetPosition(payLineID,v2.Reel,targetPos)
				}
			}
		}
	},

	// 傳入類型
	// (nil,nil) 顯示全部有中獎的賠付線
	// (value,nil) 顯示金額
	// (value,value) 顯示金額，顯示中獎的賠付線
	Show(money, index)
	{
		// 判斷是否顯示賠付線
		for(let k in (poolLine))
		{
			let v = poolLine[k] 

			// 判斷是否有連線
			let isShow = (poolLine[k].lineRenderer.positionCount >0)
			// 總結算
			if(index == null)
			{
				poolLine[k].lineRenderer.active =(isShow)
			// 指定賠付線
			}
			else
			{
				// 判斷是否為指定賠付線
				let isSome = (index == k)
				poolLine[k].lineRenderer.active =(isShow && isSome)
			}
		}
		
		txtMoney.scale = cc.v3(1, 1, 1) * sizeMoney
		
		let SetMoney = function(temp)
		{
			txtMoney.text = GameG.FormatNum(temp)	
		}	
		
		// 判斷是否顯示金額
		if(money != null && money > 0)
		{
			rootMoney.active =(true)
			// 總結算
			if(index == null)
			{
//----->需重新編譯程式碼			let sequence = CS.DG.Tweening.DOTween.Sequence()
//----->需重新編譯程式碼			sequence:Append(CS.DG.Tweening.DOTween.To(SetMoney, 0, money, gameData.GetMoneyShowTimer(money)));
//----->需重新編譯程式碼			sequence:AppendInterval(1.0)
//----->需重新編譯程式碼			sequence:OnUpdate(function (){
//----->需重新編譯程式碼				if(CS.UnityEngine.Input.anyKeyDown){
//----->需重新編譯程式碼					SetMoney(money)
//----->需重新編譯程式碼					if(callback != null){
//----->需重新編譯程式碼						callback()
//----->需重新編譯程式碼					}
//----->需重新編譯程式碼					sequence:Kill()
//----->需重新編譯程式碼					sequence = null
//----->需重新編譯程式碼				}
//----->需重新編譯程式碼			})
			// 指定賠付線
			} 
			else
			{
				AnimMoney()
				SetMoney(money)	
			}
		}
		
		if(poolLine[index] != null)
		{
			// 需靠左邊邊線
			let posIndex = 3
			// 將金額的位置調整至賠付線的中間位置
			if(poolLine[index].lineRenderer.positionCount > posIndex)
			{
				rootMoney.position = poolLine[index].lineRenderer.getPosition(posIndex)
			}
			
			// 飛特效
			poolLine[index].particle.position = poolLine[index].lineRenderer.getPosition(0)
			poolLine[index].particle.active =(true)
//----->需重新編譯程式碼		let sequenceParticle = CS.DG.Tweening.DOTween.Sequence()

			let speed = payLineTime / poolLine[index].lineRenderer.positionCount
			
			// for i=1, poolLine[index].lineRenderer.positionCount do
			for(let  i = 1;  i <=  poolLine[index].lineRenderer.positionCount; ++ i)
			{
				let pos = poolLine[index].lineRenderer.getPosition(i - 1)
//----->需重新編譯程式碼			sequenceParticle:Append(poolLine[index].particle:DOMove(pos, speed))
			}
//----->需重新編譯程式碼		sequenceParticle.call( function(){
//----->需重新編譯程式碼			poolLine[index].particle.active =(false)
//----->需重新編譯程式碼		})
		} 
		else
		{
			rootMoney.position = cc.v3(0, 0, 0)
		}
	},

	// 關閉介面
	Hide()
	{
		rootMoney.active =(false)
		txtMoney.text = ""
		for(let k in (poolLine))
		{
			let v = poolLine[k]
			
			poolLine[k].lineRenderer.active =(false)
		}
	},

	// (第幾條賠付線,位置)
	SetPosition(index, reelIndex, position)
	{
		if(poolLine[index].lineRenderer == null)
		{
			return
		}
				
		let SetPoolLinePosition = function(pool,root)
		{
			if(pool[index] != null)
			{
				poolLine[index].lineRenderer.positionCount = poolLine[index].lineRenderer.positionCount +1
				poolLine[index].lineRenderer.setPosition(poolLine[index].lineRenderer.positionCount -1, pool[index].position)
			} 
			else if(root != null)
			{
				let _x = root.position.x
				let _y = position.y
				poolLine[index].lineRenderer.positionCount = poolLine[index].lineRenderer.positionCount +1
				poolLine[index].lineRenderer.setPosition(poolLine[index].lineRenderer.positionCount -1, cc.v3(_x, _y, 0))
			}
		}
		
		// 增加第一個點
		if(reelIndex == 1)
		{	
			SetPoolLinePosition(poolLeft, rootLeft)	
		}
			
		// 計算偏移量
		if(gameData.PayLineOffset == true)
		{
			// 依照第一輪軸與 poolLeft 的高度差
			if(reelIndex == 1 && poolLeft[index] != null)
			{
				poolLine[index].offsetY = poolLeft[index].position.y - position.y			
				// 依照第五輪軸與 poolRight 的高度差
			}
			else if(reelIndex == 5 && poolRight[index] != null)
			{
				poolLine[index].offsetY = poolRight[index].position.y - position.y
			}
		}
			
		let _x = position.x
		let _y = position.y + poolLine[index].offsetY
		poolLine[index].lineRenderer.positionCount = poolLine[index].lineRenderer.positionCount +1
		poolLine[index].lineRenderer.setPosition(poolLine[index].lineRenderer.positionCount -1, cc.v3(_x, _y, 0))
		
		// 增加最後個點
		if(reelIndex == 5)
		{
			SetPoolLinePosition(poolRight, rootRight)
		}
	},

	// 回合開始
	SetGameStart(){
		
	},

	// 回合結束
	SetGameEnd(){
		
	},

	SetStartSpin()
	{
		rootMoney.active =(false)
		txtMoney.text = ""
		for(let k in (poolLine))
		{
			let v = poolLine[k]
			poolLine[k].lineRenderer.active =(false)
			poolLine[k].lineRenderer.positionCount = 0
			poolLine[k].offsetY = 0
		}
	},

	// 獲得金額動畫
	AnimMoney()
	{
		txtMoney.scale = cc.v3(0,0,0)	
//----->需重新編譯程式碼	let sequence = CS.DG.Tweening.DOTween.Sequence()
//----->需重新編譯程式碼	sequence:Append(txtMoney:DOScale(cc.v3(0.8, 1.3, 0) * sizeMoney, 0.2));
//----->需重新編譯程式碼	sequence:Append(txtMoney:DOScale(cc.v3(1.2, 0.9, 0) * sizeMoney, 0.1));
//----->需重新編譯程式碼	sequence:Append(txtMoney:DOScale(cc.v3(0.9, 1.2, 0) * sizeMoney, 0.1));
//----->需重新編譯程式碼	sequence:Append(txtMoney:DOScale(cc.v3(1.1, 1.0, 0) * sizeMoney, 0.1));
//----->需重新編譯程式碼	sequence:Append(txtMoney:DOScale(cc.v3(1.0, 1.0, 0) * sizeMoney, 0.1));
	},
};

module.exports = UIPayLine
