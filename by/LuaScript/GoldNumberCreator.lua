require("Module")
mmodule(...)

local G = require "Global"
local Model = G.RequireG("FishModel")
local uiFishMain = G.RequireG("UIFishMain")

local gameStart;
local objectParent;
local randomIns = CS.FrameWork.Random(9999)
local startBlackHold = false

local yield_return = G.Util.async_to_sync
(
function(to_to_yield, cb)
    gameStart:YieldAndCallback(to_to_yield, cb)
end
)

function Init(_gameStart, _objectParent)
    gameStart = _gameStart
    objectParent = _objectParent
end

-- ʾҵֵ _bornPositionʾλ,_money ȡ
function Creat(_bornPosition, _money, _isMy)
    local seq = Model.Call.GetSequence()
    local poolName = G.CaseWhen(_isMy, "GoldNumberShow", "OtherGoldNumberShow")
	
    local go = CS.FrameWork.ObjectPoolManager.Instance:Get(poolName)
    go.transform:SetParent(objectParent);
    go.transform.localScale = CS.UnityEngine.Vector3.one
	
    local txt_Text = go.transform:Find("Text"):GetComponent("Text")
	if _money ~= nil then
		txt_Text.text = "+" .. G.Tool.UserHelper.ToCashDetail(_money)	
	else
		txt_Text.text = ""
	end

    if (_bornPosition.x < Model.Defines.WorldDimensionMin_x + 0.5) then
        _bornPosition = CS.UnityEngine.Vector3(Model.Defines.WorldDimensionMin_x + 0.5, _bornPosition.y, 0)
    end
    -- жʾʱǷ̫ұ߽
    if (_bornPosition.x > Model.Defines.WorldDimensionMax_x - 0.5) then
        _bornPosition = CS.UnityEngine.Vector3(Model.Defines.WorldDimensionMax_x - 0.5, _bornPosition.y, 0)
    end
    -- жʾʱǷ̫ϱ߽
    if (_bornPosition.y > Model.Defines.WorldDimensionMax_y - 0.5) then
        _bornPosition = CS.UnityEngine.Vector3(_bornPosition.x, Model.Defines.WorldDimensionMax_y - 0.5, 0)
    end
    -- жʾʱǷ̫±߽
    if (_bornPosition.y < Model.Defines.WorldDimensionMin_y + 1.5) then
        _bornPosition = CS.UnityEngine.Vector3(_bornPosition.x, Model.Defines.WorldDimensionMin_y + 1.5, 0)
    end
	
    _bornPosition = Model.SceneData.camera:WorldToScreenPoint(_bornPosition);
    _bornPosition = Model.SceneData.uiCamera:ScreenToWorldPoint(_bornPosition);
	_bornPosition.x = _bornPosition.x + randomIns:RangeFloat(-20,20)
    go.transform.position = _bornPosition;
	local pos = _bornPosition + CS.UnityEngine.Vector3(0, randomIns:RangeFloat(30,100), 0)
	seq:Append(go.transform:DOMove(pos, 0.7))
    seq:OnComplete( function()
        CS.FrameWork.ObjectPoolManager.Instance:Release(poolName, go)
    end )
end

-- ʾתֵ̽Ч,_bornPositionʾλ,_money ȡ,_userSeatNoûλ
function CreatLarge(_bornPosition, _money, _uiName, _userSeatNo,_scale)
	if startBlackHold == true then return end
    G.Tool.Sound.PlayGameSound("NumberShow_Large", true)
	
	-- ?ܶXЧ
	--[[
	local coinEffectName = "jinbi_eruption"
	local user = Model.Call.GetSeatnoToUser(_userSeatNo)
	if user ~= nil then
		if user.User.UserID ~= G.User.GetCurrentUserID() then
			coinEffectName = "yinbi_eruption"
		end
	end
	
	local coinEffect = CS.FrameWork.ObjectPoolManager.Instance:Get(coinEffectName)
	local pos = uiFishMain.GetPlayerNode(_userSeatNo)
	if _userSeatNo == 0 or _userSeatNo == 1 then
		pos.y = pos.y + 1.5
	else
		pos.y = pos.y - 1.5
	end
	coinEffect.transform.position = pos	
	]]--
	
	-- 첻ͬ@ʾͬDP
    local poolName
	if _money < 500 * 100 then
		poolName = "GoldNumberShow_Small"
	else
		poolName = "GoldNumberShow_Large"
	end
	
	_scale = _scale or 1
	
    local go = CS.FrameWork.ObjectPoolManager.Instance:Get(poolName)
    go.transform:SetParent(objectParent);
    go.transform.localScale = CS.UnityEngine.Vector3.one * _scale
    go.transform.position = _bornPosition;
	
    local txt_Text = go.transform:Find("Text"):GetComponent("Text")
    txt_Text.text = "+" .. G.Tool.UserHelper.ToCashDetail(_money)
			
	local sprite = CS.UISpriteManager.Instance:GetSprite(G.GetGamePName(), "ui_fish_" .. _uiName)
    local nameObj = go.transform:Find("titleimg/name"):GetComponent("Image")
	if sprite ~= nil then
		nameObj.gameObject:SetActive(true)
		nameObj.sprite =sprite
	else
		nameObj.gameObject:SetActive(false)
	end
	
	local iconSprite = CS.UISpriteManager.Instance:GetSprite(G.GetGamePName(), "fish_" .. _uiName)
	local iconObj = go.transform:Find("icon"):GetComponent("Image")
	if iconSprite ~= nil then
		iconObj.gameObject:SetActive(true)
		iconObj.sprite = iconSprite
		iconObj:SetNativeSize()
		
		local w = iconObj.rectTransform.sizeDelta.x
		if w < 200 then
			iconObj.transform.localScale = CS.UnityEngine.Vector3.one * 0.5
		else
			iconObj.transform.localScale = CS.UnityEngine.Vector3.one * 0.3
		end
	else
		iconObj.gameObject:SetActive(false)
	end
	
    local seq = Model.Call.GetSequence("NumberShow_Large_" .. _userSeatNo)
	--[[
    for i = 1, 10, 1 do
		seq:AppendInterval(0.2)
		seq:AppendCallback( function()
			G.Tool.Sound.PlayGameSound("drop_gold")
		end)
	end
	]]--
	seq:AppendInterval(3.0)
    seq:OnKill( function()
        if (titleObj) then
            titleObj.gameObject:SetActive(false)
        end
		--G.Tool.Sound.PlayGameSound("collectGold")
        G.Tool.Sound.CloseLoopSound("NumberShow_Large")
        CS.FrameWork.ObjectPoolManager.Instance:Release(poolName, go)
        --CS.FrameWork.ObjectPoolManager.Instance:Release(coinEffectName, coinEffect)
    end )
end


-- ʾLuckyBonus
function CreateLuckyBonus(_bornPosition, _bonus)	
	if startBlackHold == true then return end
	-- 2.3.4.5ű݄?,0 or 1 ñ
	if _bonus <= 1 then
		return
	end
	
    local poolName = "LuckyBonus"
    local go = CS.FrameWork.ObjectPoolManager.Instance:Get(poolName)
    go.transform:SetParent(objectParent);
    go.transform.localScale = CS.UnityEngine.Vector3.one
	
    _bornPosition = Model.SceneData.camera:WorldToScreenPoint(_bornPosition);
    _bornPosition = Model.SceneData.uiCamera:ScreenToWorldPoint(_bornPosition);	
    go.transform.position = _bornPosition + CS.UnityEngine.Vector3(0,30,0);
	
    local txt_Text = go.transform:Find("Text/Text"):GetComponent("Text")
    txt_Text.text = "x" .. tostring(_bonus)
	txt_Text.color = CS.UnityEngine.Color(1,1,1,0)

    local img_Text = go.transform:Find("Text/Image"):GetComponent("Image")
	img_Text.color = CS.UnityEngine.Color(1,1,1,0)
	
	local seq = Model.Call.GetSequence()
	seq:Append(img_Text:DOColor(CS.UnityEngine.Color(1,1,1,1), 0.3))
	seq:Join(txt_Text:DOColor(CS.UnityEngine.Color(1,1,1,1), 0.3))	
	seq:AppendInterval(1.0)
	seq:Append(img_Text:DOColor(CS.UnityEngine.Color(1,1,1,0), 0.3))
	seq:Join(txt_Text:DOColor(CS.UnityEngine.Color(1,1,1,0), 0.3))
    seq:OnKill( function()
        CS.FrameWork.ObjectPoolManager.Instance:Release(poolName, go)
    end )
end


-- ʾתֵ̽Ч,_bornPositionʾλ,_money ȡ,_userSeatNoûλ
function CreatBlack(_userid,_bornPosition, _moneyList, _timer)
	startBlackHold = true
	
    local poolName = "GoldNumberShow_Black"
    local go = CS.FrameWork.ObjectPoolManager.Instance:Get(poolName)
    go.transform:SetParent(objectParent);
    go.transform.localScale = CS.UnityEngine.Vector3.one
    go.transform.position = _bornPosition;
	
	local txt_Text = go.transform:Find("Text"):GetComponent("Text")
	
	local sequenceRandom = CS.DG.Tweening.DOTween.Sequence()
	local sequence = CS.DG.Tweening.DOTween.Sequence()
	
	local CloseSequence = function()
		startBlackHold = false
		--G.Tool.Sound.PlayGameSound("collectGold")
        G.Tool.Sound.CloseLoopSound("NumberShow_Large")
        CS.FrameWork.ObjectPoolManager.Instance:Release(poolName, go)
        --CS.FrameWork.ObjectPoolManager.Instance:Release(coinEffectName, coinEffect)
	end
	
	local CheckUserExist = function()
		local user = Model.Call.GetIDToUser(_userid)
		if not user then
			sequence:Kill()
			CloseSequence()
			return false
		end
		
		return true
	end
	
	for i = 1, #_moneyList do
		sequence:AppendCallback( function()
			if CheckUserExist() == true then
				sequenceRandom = CS.DG.Tweening.DOTween.Sequence()
				for i=1, 50 do
					sequenceRandom:AppendCallback( function()
						local randomNumber = CS.UnityEngine.Random.Range(100,999)
						txt_Text.text = "+" .. math.floor(randomNumber)
					end)
					sequenceRandom:AppendInterval(0.025)
				end
			end
		end)
		sequence:AppendInterval(_timer - 1.0)
		sequence:AppendCallback( function()
			if CheckUserExist() == true then
				txt_Text.text = "+" .. G.Tool.UserHelper.ToCashDetail(_moneyList[i])
				sequenceRandom:Kill()
			end
		end)
		--[[sequence:AppendInterval(0.2)
		sequence:Append(txt_Text:DOColor(CS.UnityEngine.Color(1,1,1,0),0.2))
		sequence:Append(txt_Text:DOColor(CS.UnityEngine.Color(1,1,1,1),0.2))
		sequence:Append(txt_Text:DOColor(CS.UnityEngine.Color(1,1,1,0),0.2))
		sequence:Append(txt_Text:DOColor(CS.UnityEngine.Color(1,1,1,1),0.2))]]
		sequence:Append(txt_Text.transform:DOScale(CS.UnityEngine.Vector3.one * 1.8,0.2))
		sequence:AppendInterval(0.6)
		sequence:Append(txt_Text.transform:DOScale(CS.UnityEngine.Vector3.one * 1.5,0.2))
	end
	
    sequence:OnComplete(CloseSequence)
end
