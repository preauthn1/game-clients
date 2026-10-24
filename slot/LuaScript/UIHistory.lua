require("Module")
mmodule(...)
local HallG = require("Global")
local GameG = HallG.RequireG("GameGlobal")
local gameData = GameG.RequireG("GameData")
local gameModel= GameG.RequireG("GameModel")
local uiHistoryDate = GameG.RequireG("UIHistoryDate")
local betMoney = 0
local pageCurrent = 1 -- 目前頁數
local pageTotal = 1 -- 總頁數
local poolMaxCount = 9 -- 單頁最大數量
local startFindDate = nil -- 開始查詢的日期
local endFindDate = nil -- 開始查詢的日期
local pool = {}

--離開遊戲
function onExit()
	uidateStart.onExit()
	uidateEnd.onExit()
end

local function CreateClone(index)
	local clone = CS.UnityEngine.GameObject.Instantiate(prefab)
	if(clone == nil)then return nil end
	clone.transform:SetParent(prefab.transform.parent)
	clone.transform.localPosition = CS.UnityEngine.Vector3.zero
	clone.transform.localScale = CS.UnityEngine.Vector3.one
	clone.gameObject:SetActive(false)
	
	pool[index] = {}
	pool[index].root = clone.transform:GetComponent("RectTransform")
	pool[index].bg = clone.transform:Find("Background"):GetComponent("RectTransform")
	pool[index].txtBetCoin = clone.transform:Find("TextBetCoin"):GetComponent("Text")
	pool[index].txtOrderID = clone.transform:Find("TextOrderID"):GetComponent("Text")
	pool[index].txtProfit = clone.transform:Find("TextProfit"):GetComponent("Text")
	pool[index].txtTime = clone.transform:Find("TextTime"):GetComponent("Text")
	pool[index].imageCoin = clone.transform:Find("ImageCoin")
	
	return clone	
end

function Init(root)
	rootRect = root:GetComponent("RectTransform")
	rootRect.gameObject:SetActive(false)
	
	btnClose = root:Find("ButtonClose"):GetComponent("Button")
	btnClose.onClick:AddListener(function()
		GameG.PlayGameSound("se_click")
		Hide()
    end)
	
	btnFind = root:Find("ButtonFind"):GetComponent("Button")
	btnFind.onClick:AddListener(function()
		GameG.PlayGameSound("se_click")
		ShowFindOption()
    end)
	
	btnFront = root:Find("ButtonFront"):GetComponent("Button")
	btnFront.onClick:AddListener(function()
		GameG.PlayGameSound("se_click")
		pageCurrent = pageCurrent -1
		ChangePage()
		SendFindDate(startFindDate, endFindDate)
    end)
	
	btnNext = root:Find("ButtonNext"):GetComponent("Button")
	btnNext.onClick:AddListener(function()
		GameG.PlayGameSound("se_click")
		pageCurrent = pageCurrent +1
		ChangePage()
		SendFindDate(startFindDate, endFindDate)
    end)
	
	txtFind = root:Find("ButtonFind/Text"):GetComponent("Text")
	txtPage = root:Find("ImagePage/Text"):GetComponent("Text")
		
	rootCustom = root:Find("Custom"):GetComponent("RectTransform")
	rootCustom.gameObject:SetActive(false)
		
	rootFindOption = root:Find("FindOption"):GetComponent("RectTransform")
	rootFindOption.transform.localScale = CS.UnityEngine.Vector3(1,0,1)
	rootFindHide = root:Find("ButtonFind/ImageHide"):GetComponent("RectTransform")
	rootFindHide.gameObject:SetActive(false)
	rootFindShow = root:Find("ButtonFind/ImageShow"):GetComponent("RectTransform")
	rootFindShow.gameObject:SetActive(true)
	
	uidateStart = uiHistoryDate.Create(root:Find("Custom/ImageStart"))
	uidateEnd = uiHistoryDate.Create(root:Find("Custom/ImageEnd"))
	
	prefab = root.transform:Find("ScrollView/Content/Prefab")
	prefab.gameObject:SetActive(false)
	for i=0, poolMaxCount do CreateClone(i) end
	
	-- 查詢天
	txtFindToday = root:Find("FindOption/ButtonToday/Text"):GetComponent("Text")
	btnFindToday = root:Find("FindOption/ButtonToday"):GetComponent("Button")
	btnFindToday.onClick:AddListener(function()
		GameG.PlayGameSound("se_click")
		pageCurrent = 1
		ChangePage()
		local startDate = os.date("%Y-%m-%d")
		local endDate = os.date("%Y-%m-%d")
		SendFindDate(startDate,endDate)
		ShowFindText(txtFindToday)
		ShowFindOption()
    end)
	-- 查詢周
	txtFindWeek = root:Find("FindOption/ButtonWeek/Text"):GetComponent("Text")
	btnFindWeek = root:Find("FindOption/ButtonWeek"):GetComponent("Button")
	btnFindWeek.onClick:AddListener(function()
		GameG.PlayGameSound("se_click")
		pageCurrent = 1
		ChangePage()
		local startDate = os.date("%Y-%m-%d",os.time({year=os.date("%Y"),month=os.date("%m"),day=os.date("%d")-6}))
		local endDate = os.date("%Y-%m-%d")
		SendFindDate(startDate,endDate)
		ShowFindText(txtFindWeek)
		ShowFindOption()
    end)
	-- 查詢月
	txtFindMonth = root:Find("FindOption/ButtonMonth/Text"):GetComponent("Text")
	btnFindMonth = root:Find("FindOption/ButtonMonth"):GetComponent("Button")
	btnFindMonth.onClick:AddListener(function()
		GameG.PlayGameSound("se_click")
		pageCurrent = 1
		ChangePage()
		local startDate = os.date("%Y-%m-%d",os.time({year=os.date("%Y"),month=os.date("%m")-1,day=os.date("%d")+1}))
		local endDate = os.date("%Y-%m-%d")
		SendFindDate(startDate,endDate)
		ShowFindText(txtFindMonth)
		ShowFindOption()
    end)
	-- 自訂查詢
	txtFindCustom = root:Find("FindOption/ButtonCustom/Text"):GetComponent("Text")
	btnFindCustom = root:Find("FindOption/ButtonCustom"):GetComponent("Button")
	btnFindCustom.onClick:AddListener(function()
		GameG.PlayGameSound("se_click")
		pageCurrent = 1
		ChangePage()
		ShowFindText(txtFindCustom)
		ShowFindOption()
		rootCustom.gameObject:SetActive(true)
		uidateStart.Show()
		uidateEnd.Show()
    end)
	
	--　確認查詢
	btnEnter = root:Find("Custom/ButtonEnter"):GetComponent("Button")
	btnEnter.onClick:AddListener(function()
		GameG.PlayGameSound("se_click")
		pageCurrent = 1
		ChangePage()
		rootCustom.gameObject:SetActive(false)
		local startDate = uidateStart.GetCurrentDate()
		local endDate = uidateEnd.GetCurrentDate()
		SendFindDate(startDate,endDate)
		uidateStart.Hide()
		uidateEnd.Hide()
    end)
end

-- 顯示介面
function Show()
	rootRect.gameObject:SetActive(true)
	rootCustom.gameObject:SetActive(false)
	
	SendFindDate(os.date("%Y-%m-%d"),os.date("%Y-%m-%d"))
	ShowFindText(txtFindToday)
	
	uidateStart.SetRangeDate(2018,01,01,os.date("%Y"),os.date("%m"),os.date("%d"))
	uidateStart.SetCurrentDate(os.date("%Y"),os.date("%m"),os.date("%d"))
	uidateStart.SetChangeCallback(function()		
		local startYear = uidateStart.GetCurrentYear()
		local startMonth = uidateStart.GetCurrentMonth()
		local startDay = uidateStart.GetCurrentDay()
		
		local endYear = uidateEnd.GetCurrentYear()
		local endMonth = uidateEnd.GetCurrentMonth()
		local endDay = uidateEnd.GetCurrentDay()
		
		uidateEnd.SetRangeDate(startYear,startMonth,startDay,os.date("%Y"),os.date("%m"),os.date("%d"))
		uidateEnd.SetCurrentDate(endYear,endMonth,endDay)
		
	end)
	uidateEnd.SetRangeDate(os.date("%Y"),os.date("%m"),os.date("%d"),os.date("%Y"),os.date("%m"),os.date("%d"))
	uidateEnd.SetCurrentDate(os.date("%Y"),os.date("%m"),os.date("%d"))	
	
	ChangePage()
end
	
-- 關閉介面
function Hide()
	rootRect.gameObject:SetActive(false)
end

-- 回合開始
function SetGameStart()	

end

-- 回合結束
function SetGameEnd()
	
end

function ShowFindOption()
	rootFindShow.gameObject:SetActive(rootFindHide.gameObject.activeSelf == true)
	rootFindHide.gameObject:SetActive(rootFindHide.gameObject.activeSelf  == false)
	if(rootFindHide.gameObject.activeSelf == true)then
		local sequence = CS.DG.Tweening.DOTween.Sequence()
		sequence:Append(rootFindOption:DOScaleY(1,0.2))
	else
		rootCustom.gameObject:SetActive(false)
		local sequence = CS.DG.Tweening.DOTween.Sequence()
		sequence:Append(rootFindOption:DOScaleY(0,0.2))
	end
end

function ShowFindText(temp)
	txtFindToday.color = CS.UnityEngine.Color.white
	txtFindWeek.color = CS.UnityEngine.Color.white
	txtFindMonth.color = CS.UnityEngine.Color.white
	txtFindCustom.color = CS.UnityEngine.Color.white
	txtFind.text = temp.text
	temp.color = txtFind.color
end

-- 送出查詢(開始日期,結束日期)
function SendFindDate(startDate,endDate)
	startFindDate = startDate
	endFindDate = endDate
	
	gameModel.SendFindHistory(startDate, endDate, pageCurrent, poolMaxCount)
end

-- 接收查詢資訊
function SetFindData(data)
	pageTotal = math.ceil(data.PageCount / poolMaxCount)
	
	for i=1, #pool do
		pool[i].root.gameObject:SetActive(false)
	end 
	
	local list = data.Logs or {}
	for i=1, #list do
		pool[i].root.gameObject:SetActive(true)
		pool[i].txtBetCoin.text = GameG.FormatUnit(list[i].BetMoney)
		pool[i].txtOrderID.text = list[i].OrderID
		pool[i].txtProfit.text = GameG.FormatUnit(list[i].Profit)
		pool[i].txtTime.text = list[i].CreateTime
		pool[i].imageCoin.gameObject:SetActive(list[i].Profit > 0)
		pool[i].bg.gameObject:SetActive(i%2 == 1)
	end
	
	ChangePage()
end

function ChangePage()
	
	btnFront.gameObject:SetActive(pageCurrent > 1)
	btnNext.gameObject:SetActive(pageCurrent < pageTotal)
	
	txtPage.text = pageCurrent
end