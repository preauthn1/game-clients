require("Module")
mmodule(...)
local HallG = require("Global")
local GameG = HallG.RequireG("GameGlobal")

function Create(scrollRect, optionHeight, chooseAction)

	local target = {}
	local contentRT = scrollRect.content
	local sequenceUpdate = nil
	local sequenceSearchNear = nil
	local currentPos
	local minIndexPosY
	local maxIndexPosY
	local isDown = false
	local isInfinity = false
	local isInfinityMouseMoving = false
	local infinityMoustPos
	local infinityMinPosY
	local infinityMaxPosY
	local poolCount
	local pool = nil
	
	-- 取得按鈕索引
	local function GetIndex()
		local posY = contentRT.anchoredPosition.y		
		-- 保護範圍
		if(posY > minIndexPosY)then
			posY = minIndexPosY
		end
		if(posY < maxIndexPosY)then
			posY = maxIndexPosY
		end
		-- 計算索引
		local index = math.abs(math.floor((posY / optionHeight) + 0.5))
		return index
	end
	
	-- 移動
	local function Move(index, action)
		local targetPosY = -(index * optionHeight)
		sequenceSearchNear = CS.DG.Tweening.DOTween.Sequence()
		sequenceSearchNear:Append(contentRT:DOAnchorPosY(targetPosY,0.2))
		sequenceSearchNear:OnComplete(function()
			
			if(action ~= nil)then
				-- 調用選擇
				action(pool[index + 1].index)
			end
		end)
	end
	
	-- 重置索引位置
	local function ResetIndexPos()
		minIndexPosY = 0
		maxIndexPosY = -(#pool - 1)* optionHeight
	end
	
	-- 無限拖曳移動啟動
	local function InfinityMouseMovingEnabled()	
		if(isDown) then
			scrollRect.enabled = false
			isInfinityMouseMoving = true
			infinityMoustPos = CS.UnityEngine.Input.mousePosition
		end
	end
	
	--設定Pool
	target.SetPool = function(poolTarget)
		pool = poolTarget
		poolCount = #pool
		for i=1,#pool do
			pool[i].index = i - 1
		end
		ResetIndexPos()
	end
		
	--顯示
	target.Show = function()
		sequenceUpdate = CS.DG.Tweening.DOTween.Sequence()
		sequenceUpdate:AppendInterval(1)
		sequenceUpdate:SetLoops(-1)
		sequenceUpdate:OnUpdate(function()
			
			-- 按下
			if(CS.UnityEngine.Input:GetMouseButtonDown(0))then
				isDown = true
				currentPos = contentRT.anchoredPosition
				if(sequenceSearchNear ~= nil)then
					sequenceSearchNear:Kill()
					sequenceSearchNear = nil
				end
			end
			
			-- 按上
			if(CS.UnityEngine.Input:GetMouseButtonUp(0))then
			
				-- 為點下時離開
				if(isDown == false) then return end
				
				isDown = false
				
				if(currentPos ~= contentRT.anchoredPosition)then
					local index = GetIndex()
					target.ChooseIndex(index)
				end
				
				-- 無限拖曳
				if(isInfinity == true) then
					scrollRect.enabled = true
					isInfinityMouseMoving = false
				end
			end
			
			-- 無限拖曳
			if(isInfinity == true) then
							
				-- 只有按下才會開始計算
				if(isDown) then
					if(isInfinityMouseMoving == true) then
						-- 計算玩家滑鼠移動
						local pos = CS.UnityEngine.Input.mousePosition - infinityMoustPos
						infinityMoustPos = CS.UnityEngine.Input.mousePosition
						contentRT.transform.localPosition = contentRT.transform.localPosition + CS.UnityEngine.Vector3(0, pos.y, 0)
					end
				end
				
				-- 計算是否超過邊界
				local pos = contentRT.transform.localPosition					
				if(pos.y > infinityMinPosY) then
					contentRT.transform.localPosition = CS.UnityEngine.Vector3(0, infinityMaxPosY, 0)
					InfinityMouseMovingEnabled()
				elseif(pos.y < infinityMaxPosY) then
					contentRT.transform.localPosition = CS.UnityEngine.Vector3(0, infinityMinPosY, 0)
					InfinityMouseMovingEnabled()
				end	
			end
		end)
	end	
	
	--關閉
	target.Close = function()
		if(sequenceUpdate ~= nil)then
			sequenceUpdate:Kill()
			sequenceUpdate = nil
		end
		if(sequenceSearchNear ~= nil)then
			sequenceSearchNear:Kill()
			sequenceSearchNear = nil
		end
	end
	
	-- 立即選擇
	target.ChooseNow = function()
		if(pool == nil) then return end
		local index = GetIndex()
		local targetPosY = -(index * optionHeight)
		contentRT.transform.localPosition = CS.UnityEngine.Vector3(contentRT.transform.localPosition.x, targetPosY, 0)	
		if(chooseAction ~= nil) then
			chooseAction(pool[index + 1].index)
		end
	end
	
	-- 選擇索引 (飛到目的地)
	target.ChooseIndex = function(index)
		Move(index, chooseAction)
	end
	
	-- 移動索引 (飛到目的地)
	target.MoveIndex = function(index)
		Move(index, nil)
	end
	
	-- 直接移動索引位置 (直接目的地)
	target.MoveIndexPos = function(index)
		if(isInfinity) then
			index = index + poolCount - 1
		end
		local targetPosY = -(index * optionHeight)
		contentRT.transform.localPosition = CS.UnityEngine.Vector3(0, targetPosY, 0)
	end
	
	-- 無限拖曳
	target.Infinity = function()
		local length = #pool
		local index = #pool
		for i=1, 2 do
			for j=1,length do
				index = index + 1
				local obj = pool[j]
				local clone = CS.UnityEngine.GameObject.Instantiate(obj.root)
				clone.transform:SetParent(obj.root.transform.parent)
				clone.transform:SetAsFirstSibling()
				clone.transform.position = CS.UnityEngine.Vector3.zero
				clone.transform.localScale = CS.UnityEngine.Vector3.one
				pool[index] = {}
				pool[index].root = clone
				pool[index].index = obj.index
			end
		end
		infinityMinPosY = -(length * optionHeight)
		infinityMaxPosY = infinityMinPosY * 2
		ResetIndexPos()
		isInfinity = true
	end
	
	return target
end