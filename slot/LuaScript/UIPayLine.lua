require("Module")
mmodule(...)
local HallG = require("Global")
local GameG = HallG.RequireG("GameGlobal")
local gameData = GameG.RequireG("GameData")

local poolLine = {}
local poolLeft = {}
local poolRight = {}
local layoutWorldPos = {}
local sizeMoney = 0.6
-- 這要依照換線時間
local payLineTime = 0.9

--離開遊戲
function onExit()

	for k,v in pairs(poolLine) do 
		poolLine[k] = nil 
	end
end

function Init(root)
	rootRect = root:GetComponent("RectTransform")
	
	rootLeft = root.transform:Find("RootLeft")
	if(rootLeft ~= nil)then
		rootLeft = rootLeft:GetComponent("RectTransform")
		rootLeft.gameObject:SetActive(false)
	end
	
	rootRight = root.transform:Find("RootRight")
	if(rootRight ~= nil)then
		rootRight = rootRight:GetComponent("RectTransform")
		rootRight.gameObject:SetActive(false)
	end
	
    prefab = root.transform:Find("PayLine").gameObject
	prefab.gameObject:SetActive(false)
	
	rootMoney = root.transform:Find("RootMoney"):GetComponent("RectTransform")
	txtMoney = root.transform:Find("RootMoney/Text"):GetComponent("Text")
end

local function CreateClone(index)
	if(poolLine[index] ~= nil) then return poolLine[index] end
	local clone = CS.UnityEngine.GameObject.Instantiate(prefab)
	if(clone == nil)then return nil end
	clone.transform:SetParent(prefab.transform.parent)
	clone.transform.localPosition = CS.UnityEngine.Vector3.zero
	clone.transform.localScale = CS.UnityEngine.Vector3.one
	clone.transform.name = prefab.name .. index
	
	poolLine[index] = {}
	poolLine[index].lineRenderer = clone.transform:GetComponent("LineRenderer")
	poolLine[index].particle = clone.transform:Find("Particle").transform
end	

function SetTotal(count)
	for i=1, count do
		CreateClone(i)
		poolLeft[i] = rootRect.transform:Find("RootLeft/PayLineID (".. i ..")" )
		if poolLeft[i] ~= nil then
			poolLeft[i] = poolLeft[i]:GetComponent("RectTransform")
		end
		poolRight[i] = rootRect.transform:Find("RootRight/PayLineID (".. i ..")" )
		if poolRight[i] ~= nil then
			poolRight[i] = poolRight[i]:GetComponent("RectTransform")
		end
	end	
	for k,v in pairs(poolLine) do
		poolLine[k].lineRenderer.gameObject:SetActive(false)
		poolLine[k].lineRenderer.positionCount = 0
		poolLine[k].offsetY = 0 -- 偏移值
	end	
end

function SetLayoutWorldPos(data)
	layoutWorldPos = data
end

-- 顯示介面
function SetGameResult(payGroups)
	
	local compare = function(reelA,reelB)		
		return reelA.Reel < reelB.Reel
	end
	
	for k1,v1 in pairs(payGroups) do
		local payLineID = v1.PayLines.PayLineID

		table.sort(v1.PayLines.Positions, compare)

		poolLine[payLineID].lineRenderer.positionCount = 0
		for k2, v2 in pairs(v1.PayLines.Positions)do
			if(layoutWorldPos[v2.Reel] ~= nil)then
				-- 因layoutWorldPos是初始設定的，沒有換算過螢幕解析度的縮放
				local targetPos = layoutWorldPos[v2.Reel][v2.Row] * gameData.CameraScale
				SetPosition(payLineID,v2.Reel,targetPos)
			end
		end
	end
end

-- 傳入類型
-- (nil,nil) 顯示全部有中獎的賠付線
-- (value,nil) 顯示金額
-- (value,value) 顯示金額，顯示中獎的賠付線
function Show(money, index)
	-- 判斷是否顯示賠付線
	for k,v in pairs(poolLine) do
		-- 判斷是否有連線
		local isShow = (poolLine[k].lineRenderer.positionCount >0)
		-- 總結算
		if(index == nil)then
			poolLine[k].lineRenderer.gameObject:SetActive(isShow)
		-- 指定賠付線
		else
			-- 判斷是否為指定賠付線
			local isSome = (index == k)
			poolLine[k].lineRenderer.gameObject:SetActive(isShow and isSome)
		end
	end
	
	txtMoney.transform.localScale = CS.UnityEngine.Vector3.one * sizeMoney
	
	local SetMoney = function(temp)
		txtMoney.text = GameG.FormatNum(temp)	
	end	
	
	-- 判斷是否顯示金額
	if(money ~= nil and money > 0)then
		rootMoney.gameObject:SetActive(true)
		-- 總結算
		if(index == nil)then
			local sequence = CS.DG.Tweening.DOTween.Sequence()
			sequence:Append(CS.DG.Tweening.DOTween.To(SetMoney, 0, money, gameData.GetMoneyShowTimer(money)));
			sequence:AppendInterval(1.0)
			sequence:OnUpdate(function ()
				if(CS.UnityEngine.Input.anyKeyDown)then
					SetMoney(money)
					if(callback ~= nil)then
						callback()
					end
					sequence:Kill()
					sequence = nil
				end
			end)
		-- 指定賠付線
		else
			AnimMoney()
			SetMoney(money)	
		end
	end
	
	if(poolLine[index] ~= nil)then
		-- 需靠左邊邊線
		local posIndex = 3
		-- 將金額的位置調整至賠付線的中間位置
		if(poolLine[index].lineRenderer.positionCount > posIndex)then
			rootMoney.transform.position = poolLine[index].lineRenderer:GetPosition(posIndex)
		end
		
		-- 飛特效
		poolLine[index].particle.transform.position = poolLine[index].lineRenderer:GetPosition(0)
		poolLine[index].particle.gameObject:SetActive(true)
		local sequenceParticle = CS.DG.Tweening.DOTween.Sequence()
		local speed = payLineTime / poolLine[index].lineRenderer.positionCount
		for i=1, poolLine[index].lineRenderer.positionCount do
			local pos = poolLine[index].lineRenderer:GetPosition(i - 1)
			sequenceParticle:Append(poolLine[index].particle:DOMove(pos, speed))
		end
		sequenceParticle:OnComplete( function()
			poolLine[index].particle.gameObject:SetActive(false)
		end)
	else
		rootMoney.transform.position = CS.UnityEngine.Vector3.zero
	end
end

-- 關閉介面
function Hide()	
	rootMoney.gameObject:SetActive(false)
	txtMoney.text = ""
	for k,v in pairs(poolLine) do
		poolLine[k].lineRenderer.gameObject:SetActive(false)
	end
end

-- (第幾條賠付線,位置)
function SetPosition(index, reelIndex, position)
	if(poolLine[index].lineRenderer == nil)then
		return
	end
			
	local SetPoolLinePosition = function(pool,root)
		if(pool[index] ~= nil)then
			poolLine[index].lineRenderer.positionCount = poolLine[index].lineRenderer.positionCount +1
			poolLine[index].lineRenderer:SetPosition(poolLine[index].lineRenderer.positionCount -1, pool[index].transform.position)
		elseif(root ~= nil)then
			local _x = root.transform.position.x
			local _y = position.y
			poolLine[index].lineRenderer.positionCount = poolLine[index].lineRenderer.positionCount +1
			poolLine[index].lineRenderer:SetPosition(poolLine[index].lineRenderer.positionCount -1, CS.UnityEngine.Vector3(_x, _y, 0))
		end
	end
	
	-- 增加第一個點
	if(reelIndex == 1)then	
		SetPoolLinePosition(poolLeft, rootLeft)	
	end
		
	-- 計算偏移量
	if(gameData.PayLineOffset == true)then
		-- 依照第一輪軸與 poolLeft 的高度差
		if(reelIndex == 1 and poolLeft[index] ~= nil)then
			poolLine[index].offsetY = poolLeft[index].transform.position.y - position.y			
		-- 依照第五輪軸與 poolRight 的高度差
		elseif(reelIndex == 5 and poolRight[index] ~= nil)then
			poolLine[index].offsetY = poolRight[index].transform.position.y - position.y
		end
	end
		
	local _x = position.x
	local _y = position.y + poolLine[index].offsetY
	poolLine[index].lineRenderer.positionCount = poolLine[index].lineRenderer.positionCount +1
	poolLine[index].lineRenderer:SetPosition(poolLine[index].lineRenderer.positionCount -1, CS.UnityEngine.Vector3(_x, _y, 0))
	
	-- 增加最後個點
	if(reelIndex == 5)then
		SetPoolLinePosition(poolRight, rootRight)
	end	
end

-- 回合開始
function SetGameStart()	
	
end
-- 回合結束
function SetGameEnd()
	
end

function SetStartSpin()
	rootMoney.gameObject:SetActive(false)
	txtMoney.text = ""
	for k,v in pairs(poolLine) do
		poolLine[k].lineRenderer.gameObject:SetActive(false)
		poolLine[k].lineRenderer.positionCount = 0
		poolLine[k].offsetY = 0
	end
end

-- 獲得金額動畫
function AnimMoney()
	txtMoney.transform.localScale = CS.UnityEngine.Vector3(0,0,0)

	local sequence = CS.DG.Tweening.DOTween.Sequence()
	sequence:Append(txtMoney.transform:DOScale(CS.UnityEngine.Vector3(0.8, 1.3, 0) * sizeMoney, 0.2));
	sequence:Append(txtMoney.transform:DOScale(CS.UnityEngine.Vector3(1.2, 0.9, 0) * sizeMoney, 0.1));
	sequence:Append(txtMoney.transform:DOScale(CS.UnityEngine.Vector3(0.9, 1.2, 0) * sizeMoney, 0.1));
	sequence:Append(txtMoney.transform:DOScale(CS.UnityEngine.Vector3(1.1, 1.0, 0) * sizeMoney, 0.1));
	sequence:Append(txtMoney.transform:DOScale(CS.UnityEngine.Vector3(1.0, 1.0, 0) * sizeMoney, 0.1));
end