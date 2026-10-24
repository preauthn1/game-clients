var G = require( "Global")
var GameG = require( "GameGlobal")

function MScrollChoose(scrollRect, optionHeight, chooseAction)
{	
	let target = []
	let contentRT = scrollRect.content
	let sequenceUpdate = null
	let sequenceSearchNear = null
	let currentPos
	let minIndexPosY
	let maxIndexPosY
	let isDown = false
	let isInfinity = false
	let isInfinityMouseMoving = false
	let infinityMoustPos
	let infinityMinPosY
	let infinityMaxPosY
	let poolCount
	let pool = null
	
	// 取得按鈕索引
	let GetIndex = function()
	{
		let posY = contentRT.position.y		
		// 保護範圍
		if(posY > minIndexPosY)
		{
			posY = minIndexPosY
		}
		if(posY < maxIndexPosY)
		{
			posY = maxIndexPosY
		}
		// 計算索引
		let index = Math.abs(Math.floor((posY / optionHeight) + 0.5))
		return index
	};
	
	// 移動
	let Move = function(index, action)
	{
		let targetPosY = -(index * optionHeight)
		sequenceSearchNear = GameG.NewTween(contentRT)
		.to(0.2, {position: cc.v2(contentRT.position.x, targetPosY)})
		.call(function()
		{			
			if(action != null)
			{
				// 調用選擇
				action(pool[index + 1].index)
			}
		})
		.start();
	};
	
	// 重置索引位置
	let ResetIndexPos = function()
	{
		minIndexPosY = 0
		maxIndexPosY = -(pool.length - 1)* optionHeight
	};
	
	// 無限拖曳移動啟動
	let InfinityMouseMovingEnabled = function()
	{	
		if(isDown) 
		{
			scrollRect.enabled = false
			isInfinityMouseMoving = true
			infinityMoustPos = CS.UnityEngine.Input.mousePosition
		}
	};
	
	//設定Pool
	this.SetPool = function(poolTarget)
	{
		pool = poolTarget
		poolCount = pool.length
		for(let i in pool)
		{
			pool[i].index = i - 1
		}
		ResetIndexPos()
	};
		
	//顯示
	this.Show = function()
	{
//----->需重新編譯程式碼		sequenceUpdate = CS.DG.Tweening.DOTween.Sequence()
//----->需重新編譯程式碼		sequenceUpdate:AppendInterval(1)
//----->需重新編譯程式碼		sequenceUpdate:SetLoops(-1)
//----->需重新編譯程式碼		sequenceUpdate:OnUpdate(function(){
//----->需重新編譯程式碼			
//----->需重新編譯程式碼			// 按下
//----->需重新編譯程式碼			if(CS.UnityEngine.Input:GetMouseButtonDown(0)){
//----->需重新編譯程式碼				isDown = true
//----->需重新編譯程式碼				currentPos = contentRT.position
//----->需重新編譯程式碼				if(sequenceSearchNear != null){
//----->需重新編譯程式碼					sequenceSearchNear:Kill()
//----->需重新編譯程式碼					sequenceSearchNear = null
//----->需重新編譯程式碼				}
//----->需重新編譯程式碼			}
//----->需重新編譯程式碼			
//----->需重新編譯程式碼			// 按上
//----->需重新編譯程式碼			if(CS.UnityEngine.Input:GetMouseButtonUp(0)){
//----->需重新編譯程式碼			
//----->需重新編譯程式碼				// 為點下時離開
//----->需重新編譯程式碼				if(isDown == false) { return }
//----->需重新編譯程式碼				
//----->需重新編譯程式碼				isDown = false
//----->需重新編譯程式碼				
//----->需重新編譯程式碼				if(currentPos != contentRT.position){
//----->需重新編譯程式碼					let index = GetIndex()
//----->需重新編譯程式碼					this.ChooseIndex(index)
//----->需重新編譯程式碼				}
//----->需重新編譯程式碼				
//----->需重新編譯程式碼				// 無限拖曳
//----->需重新編譯程式碼				if(isInfinity == true) {
//----->需重新編譯程式碼					scrollRect.enabled = true
//----->需重新編譯程式碼					isInfinityMouseMoving = false
//----->需重新編譯程式碼				}
//----->需重新編譯程式碼			}
//----->需重新編譯程式碼			
//----->需重新編譯程式碼			// 無限拖曳
//----->需重新編譯程式碼			if(isInfinity == true) {
//----->需重新編譯程式碼							
//----->需重新編譯程式碼				// 只有按下才會開始計算
//----->需重新編譯程式碼				if(isDown) {
//----->需重新編譯程式碼					if(isInfinityMouseMoving == true) {
//----->需重新編譯程式碼						// 計算玩家滑鼠移動
//----->需重新編譯程式碼						let pos = CS.UnityEngine.Input.mousePosition - infinityMoustPos
//----->需重新編譯程式碼						infinityMoustPos = CS.UnityEngine.Input.mousePosition
//----->需重新編譯程式碼						contentRT.position = contentRT.position + cc.v3(0, pos.y, 0)
//----->需重新編譯程式碼					}
//----->需重新編譯程式碼				}
//----->需重新編譯程式碼				
//----->需重新編譯程式碼				// 計算是否超過邊界
//----->需重新編譯程式碼				let pos = contentRT.position					
//----->需重新編譯程式碼				if(pos.y > infinityMinPosY) {
//----->需重新編譯程式碼					contentRT.position = cc.v3(0, infinityMaxPosY, 0)
//----->需重新編譯程式碼					InfinityMouseMovingEnabled()
//----->需重新編譯程式碼} 
//----->需重新編譯程式碼				else if(pos.y < infinityMaxPosY) {
//----->需重新編譯程式碼
//----->需重新編譯程式碼					contentRT.position = cc.v3(0, infinityMinPosY, 0)
//----->需重新編譯程式碼					InfinityMouseMovingEnabled()
//----->需重新編譯程式碼				}	
//----->需重新編譯程式碼			}
//----->需重新編譯程式碼		})
	};
	
	//關閉
	this.Close = function()
	{
		if(sequenceUpdate != null)
		{
//----->需重新編譯程式碼			sequenceUpdate:Kill()
			sequenceUpdate = null
		}
		if(sequenceSearchNear != null)
		{
			sequenceSearchNear.stop()
			sequenceSearchNear = null
		}
	};
	
	// 立即選擇
	this.ChooseNow = function()
	{
		if(pool == null) { return }
		let index = GetIndex()
		let targetPosY = -(index * optionHeight)
		contentRT.position = cc.v3(contentRT.position.x, targetPosY, 0)	
		if(chooseAction != null) 
		{
			chooseAction(pool[index + 1].index)
		}
	};
	
	// 選擇索引 (飛到目的地)
	this.ChooseIndex = function(index)
	{
		Move(index, chooseAction)
	};
	
	// 移動索引 (飛到目的地)
	this.MoveIndex = function(index)
	{
		Move(index, null)
	};
	
	// 直接移動索引位置 (直接目的地)
	this.MoveIndexPos = function(index)
	{
		if(isInfinity) 
		{
			index = index + poolCount - 1
		}
		let targetPosY = -(index * optionHeight)
		contentRT.position = cc.v3(0, targetPosY, 0)
	};
	
	// 無限拖曳
	this.Infinity = function()
	{
		let length = pool.length
		let index = pool.length
		for(let i = 1; i <= 2; ++ i)
		{
			for(let j in pool)
			{
				index = index + 1
				let obj = pool[j]
				let clone = cc.instantiate(obj.root)
				clone.parent =(obj.root.parent)
				clone.setSiblingIndex(0)
				clone.position = cc.v3(0, 0, 0)
				clone.scale = 1
				pool[index] = []
				pool[index].root = clone
				pool[index].index = obj.index
			}
		}
		infinityMinPosY = -(length * optionHeight)
		infinityMaxPosY = infinityMinPosY * 2
		ResetIndexPos()
		isInfinity = true
	};
	
	// 銷毀物件
	this.Destroy = function()
	{
		if(pool != null)
		{
			for(let i = 0; i < pool.length; i++)
			{
				pool[i].root.Destroy()
			}
		}
		pool = null
	}
};

module.exports = MScrollChoose
