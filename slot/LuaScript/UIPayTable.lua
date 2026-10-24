require("Module")
mmodule(...)
local HallG = require("Global")
local GameG = HallG.RequireG("GameGlobal")
local gameData = GameG.RequireG("GameData")
local poolPage = {}
local poolSymbol = {}
local poolPayLine = {}
local index = 1
local pageCount = 5
local pagePayLines = 4 --賠付線的頁數
local screenWidth = 1334
local isDragPage
local currentDragPos
local dragSequence

-- 頁面按鈕是否要循環
local pageBtnLoop = true
-- 切頁速度
local pageTimeSpeed = 0.3
-- 拖曳距離
local dragDistance = 300

function Init(root)
	
	poolPage = {}
    poolSymbol = {}
    poolPayLine = {}
	
	rootRect = root:GetComponent("RectTransform")
	rootRect.gameObject:SetActive(false)
	
	btnBack = root.transform:Find("ButtonBack"):GetComponent("Button")
    btnBack.onClick:AddListener(function()
		GameG.PlayGameSound("se_click")
		Hide()
    end)
	
    btnFront = root.transform:Find("ButtonFront"):GetComponent("Button")
    btnFront.onClick:AddListener(function()
		GameG.PlayGameSound("se_click")
		RefreshPoolPage(-1)
    end)
	
    btnNext = root.transform:Find("ButtonNext"):GetComponent("Button")
    btnNext.onClick:AddListener(function()
		GameG.PlayGameSound("se_click")
		RefreshPoolPage(1)
    end)
	
	pagePointPrefab = root.transform:Find("PagePoints/Point")
	pagePointPrefab.gameObject:SetActive(false)
		
	local poolRoot = root.transform:Find("PoolPage"):GetComponent("RectTransform")
	for i = 0, poolRoot.childCount - 1, 1 do
		local child = poolRoot:GetChild(i)
		poolPage[i +1] = {}
		poolPage[i +1].root = child.transform:GetComponent("RectTransform")
		poolPage[i +1].grid1 = child.transform:Find("Grid1") --某些介面可能沒有
		poolPage[i +1].grid2 = child.transform:Find("Grid2") --某些介面可能沒有
		poolPage[i +1].root.gameObject:SetActive(false)
		
		-- 建立點點
		local point = CS.UnityEngine.GameObject.Instantiate(pagePointPrefab)
		point.transform:SetParent(pagePointPrefab.transform.parent)
		point.transform.localPosition = CS.UnityEngine.Vector3.zero
		point.transform.localScale = CS.UnityEngine.Vector3.one		
		point.gameObject:SetActive(true)
		local btnPoint = point:Find("Button"):GetComponent("Button")
		btnPoint.onClick:AddListener(function() 
			GameG.PlayGameSound("se_click")
			SetPoolPage(i +1)
		end)
		btnPoint.image.color = CS.UnityEngine.Color(1,1,1,0.5)
		poolPage[i +1].btnPoint = btnPoint
	end
	
	prefabSymbol = root.transform:Find("PrefabSymbol"):GetComponent("RectTransform")
	prefabPayLine = root.transform:Find("PrefabPayLine"):GetComponent("RectTransform")
	
	local width = CS.UnityEngine.Screen.width
	
	if(width > screenWidth) then
		screenWidth = width
	end
end

function onExit()	
	for i= 1, #poolSymbol do poolSymbol[i] = nil end
end

local function CreateSymbol(index)
	if(poolSymbol[index] ~= nil) then return end
	local clone = CS.UnityEngine.GameObject.Instantiate(prefabSymbol)
	if(clone == nil)then return nil end
	clone.transform:SetParent(poolRoot)
	clone.transform.localPosition = CS.UnityEngine.Vector3.zero
	clone.transform.localScale = CS.UnityEngine.Vector3.one
	clone.gameObject:SetActive(false)
	
	poolSymbol[index] = {}
	poolSymbol[index].root = clone.transform:GetComponent("RectTransform")
	poolSymbol[index].img = clone.transform:Find("Image"):GetComponent("Image")
	poolSymbol[index].txt = {}
	poolSymbol[index].txt[2] = clone.transform:Find("Count/Text2"):GetComponent("Text")
	poolSymbol[index].txt[3] = clone.transform:Find("Count/Text3"):GetComponent("Text")
	poolSymbol[index].txt[4] = clone.transform:Find("Count/Text4"):GetComponent("Text")
	poolSymbol[index].txt[5] = clone.transform:Find("Count/Text5"):GetComponent("Text")
	poolSymbol[index].txt[6] = clone.transform:Find("Count/Text6"):GetComponent("Text")
	poolSymbol[index].txt[7] = clone.transform:Find("Count/Text7"):GetComponent("Text")
	poolSymbol[index].txt[8] = clone.transform:Find("Count/Text8"):GetComponent("Text")
	poolSymbol[index].txt[9] = clone.transform:Find("Count/Text9"):GetComponent("Text")
	poolSymbol[index].txtTitle = clone.transform:Find("TextTitle"):GetComponent("Text")
	poolSymbol[index].txtContent = clone.transform:Find("TextContent"):GetComponent("Text")
end

local function CreatePayLine(index)
	if(poolPayLine[index] ~= nil) then return end
	local clone = CS.UnityEngine.GameObject.Instantiate(prefabPayLine)
	if(clone == nil)then return nil end
	
	local parent = poolPage[pagePayLines].grid or poolPage[pagePayLines].root
	clone.transform:SetParent(parent.transform)
	clone.transform.localPosition = CS.UnityEngine.Vector3.zero
	clone.transform.localScale = CS.UnityEngine.Vector3.one
	clone.gameObject:SetActive(false)
		
	poolPayLine[index] = {}
	poolPayLine[index].root = clone.transform:GetComponent("RectTransform")
	poolPayLine[index].txtNo = clone.transform:Find("TextNo"):GetComponent("Text")
	poolPayLine[index].grid = clone.transform:Find("Grid"):GetComponent("RectTransform")
	poolPayLine[index].payLine = {}
	for i = 0, poolPayLine[index].grid.childCount - 1, 1 do
		local child = poolPayLine[index].grid:GetChild(i)		
		poolPayLine[index].payLine[i +1] = child.transform:GetComponent("Image")
		poolPayLine[index].payLine[i +1].gameObject:SetActive(false)		
	end
end

local function SetPayLines()
	if(gameData.PayLines == nil)then
		return
	end
	
	for k,v in pairs(gameData.PayLines) do
		CreatePayLine(k)
		
		poolPayLine[k].txtNo.text = v.PayLineID
		poolPayLine[k].root.gameObject:SetActive(true)
		
		for i=1, #poolPayLine[k].payLine do
			poolPayLine[k].payLine[i].gameObject:SetActive(false)
		end
		
		for i=1, #v.Positions do
			local reel = v.Positions[i].Reel
			local row = v.Positions[i].Row
			
			local index = (reel -1) * gameData.RowCounts + row	
			if(poolPayLine[k].payLine[index] ~= nil)then
				poolPayLine[k].payLine[index].gameObject:SetActive(true)
			end
		end
	end
end

local function SetSymbol()
	local SetData = function(pageIndex,poolIndex,symbolName,gridIndex)
		local symbolName = gameData.ChangeSymbolName(symbolName)
		local data = gameData.SymbolPayTable[symbolName]
		if(data == nil)then
			return
		end
		
		if(poolIndex > #poolSymbol)then
			CreateSymbol(poolIndex)
		end
		
		local parent = poolPage[pageIndex].root
		if(poolPage[pageIndex].grid1 ~= nil and gridIndex == 1)then
			parent = poolPage[pageIndex].grid1
		elseif(poolPage[pageIndex].grid2 ~= nil and gridIndex == 2)then
			parent = poolPage[pageIndex].grid2
		end
		poolSymbol[poolIndex].root.transform:SetParent(parent.transform)
		poolSymbol[poolIndex].root.transform.localScale = CS.UnityEngine.Vector3.one
		poolSymbol[poolIndex].root.gameObject:SetActive(true)
		GameG.SetImageSprite(poolSymbol[poolIndex].img,"symbol_n_" .. symbolName)
		
		for k,v in pairs(poolSymbol[poolIndex].txt) do			
			local detail = gameData.GetSymbolPayDetail(symbolName,k)
			poolSymbol[poolIndex].txt[k].gameObject:SetActive(detail ~= nil)
			if(detail ~= nil)then
				poolSymbol[poolIndex].txt[k].text = detail.payout
			end
		end
		poolSymbol[poolIndex].txtTitle.text = data.title
		poolSymbol[poolIndex].txtContent.text = data.desc
	end
		
	local compare = function(symbolNameA,symbolNameB)
		symbolNameA = gameData.ChangeSymbolName(symbolNameA)
		local dataA = gameData.SymbolPayTable[symbolNameA].detail[5].payout
		symbolNameB = gameData.ChangeSymbolName(symbolNameB)
		local dataB = gameData.SymbolPayTable[symbolNameB].detail[5].payout
		if(dataA > dataB)then
			return true
		elseif(dataA == dataB)then
			local valueA = string.gsub(symbolNameA, "p", "")
			local valueB = string.gsub(symbolNameB, "p", "")
			return valueA < valueB
		end
		return false
	end
	
	local poolIndex = 1
	local pageSymbol = {}
	pageSymbol[1] = {"p1","p2","p3","p4","p5"}
	pageSymbol[2] = {"p6","p7","p8","p9","p10","p11"}
	
	local pageGrid = {}
	pageGrid[1] = {1,1,2,2,2}
	pageGrid[2] = {1,1,1,2,2,2}
	
	table.sort(pageSymbol[1],compare)
	table.sort(pageSymbol[2],compare)
	for pageIndex,symbolList in pairs(pageSymbol) do	
		for i=1, #symbolList do		
			local gridIndex = pageGrid[pageIndex][i]
			SetData(pageIndex,poolIndex,symbolList[i],gridIndex)			
			poolIndex = poolIndex +1
		end
	end	
end

-- 顯示介面
function Show()
	rootRect.gameObject:SetActive(true)	
		
	-- symbol
	SetSymbol()
	-- payLine
	SetPayLines()
	
	if(index ~= 1)then	
		-- 不是第一個 先關閉當前在設定1 因為不要滑動 所以這邊設
		SetPoolButtonPoint(index, false, true, 0)
		index = 1
		SetPoolButtonPoint(index, true, true, 0)
	else
		SetPoolButtonPoint(index, true, true, 0)
	end
	
	dragSequence = CS.DG.Tweening.DOTween.Sequence()
	dragSequence:SetLoops(-1,CS.DG.Tweening.LoopType.Restart)
	dragSequence:OnUpdate(function()
		-- 按下
		if(CS.UnityEngine.Input:GetMouseButtonDown(0))then
			isDragPage = true
			currentDragPos = CS.UnityEngine.Input.mousePosition
		end		
		-- 按上
		if(CS.UnityEngine.Input:GetMouseButtonUp(0))then
			isDragPage = false
		end
		if(isDragPage)then
			local pos = CS.UnityEngine.Input.mousePosition
			local posX = currentDragPos.x - pos.x
			if(posX > dragDistance) then
				isDragPage = false
				RefreshPoolPage(1)
				GameG.PlayGameSound("se_click")
			elseif (posX < -dragDistance) then
				isDragPage = false
				RefreshPoolPage(-1)
				GameG.PlayGameSound("se_click")
			end
		end
	end)
end
	
-- 關閉介面
function Hide()
	rootRect.gameObject:SetActive(false)
	
	if(dragSequence ~= nil) then
		dragSequence:Kill()
	end
end

function RefreshPoolPage(offset)
	SetPoolPage(index + offset)
end

-- 設定頁
function SetPoolPage(pageIndex)

	local isLeft = index < pageIndex
		
	SetPoolButtonPoint(index, false, isLeft, pageTimeSpeed)
	index = pageIndex;
	
	if(pageBtnLoop == true)then
		if(index < 1)then
			index = #poolPage
		elseif(index > #poolPage) then
			index = 1
		end
	end
	
	SetPoolButtonPoint(index, true, isLeft, pageTimeSpeed)
	
	if(pageBtnLoop == false) then
		btnFront.interactable = (pageIndex > 1)
		btnNext.interactable = (pageIndex < #poolPage)
	end	
end

function SetPoolButtonPoint(i, isActive, isLeft, timeSpeed)
	local startPos
	local endPos
	if(isActive)then
		if(isLeft) then
			startPos = screenWidth
			endPos = 0
		else
			startPos = -screenWidth
			endPos = 0
		end
	else
		if(isLeft) then
			startPos = 0
			endPos = -screenWidth
		else
			startPos = 0
			endPos = screenWidth
		end
	end
	if(isActive) then
		poolPage[i].btnPoint.image.color = CS.UnityEngine.Color.white
		
		local gridRT = poolPage[i].root.transform:GetComponent("RectTransform")
		gridRT.anchoredPosition = CS.UnityEngine.Vector2(startPos, gridRT.anchoredPosition.y)	
		local sequence = CS.DG.Tweening.DOTween.Sequence()
		sequence:Append(gridRT:DOAnchorPosX(endPos, timeSpeed))
		poolPage[i].root.gameObject:SetActive(true)
		poolPage[i].btnPoint.interactable = false
	else
		poolPage[i].btnPoint.image.color = CS.UnityEngine.Color(1,1,1,0.5)
		
		local gridRT = poolPage[i].root.transform:GetComponent("RectTransform")
		gridRT.anchoredPosition = CS.UnityEngine.Vector2(startPos, gridRT.anchoredPosition.y)	
		local sequence = CS.DG.Tweening.DOTween.Sequence()
		sequence:Append(gridRT:DOAnchorPosX(endPos, timeSpeed))
		sequence:AppendCallback( function() 
			if(index ~= i) then 
				poolPage[i].root.gameObject:SetActive(false)
				poolPage[i].btnPoint.interactable = true
			end
		end)
	end
end