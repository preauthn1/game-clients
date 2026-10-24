require("Module")
mmodule(...)

local G = require "Global"
local Model = G.RequireG("FishModel")
UIPlayer = { }
local Color = CS.UnityEngine.Color
local Vector3 = CS.UnityEngine.Vector3
local Quaternion = CS.UnityEngine.Quaternion
local Mathf = CS.UnityEngine.Mathf
local GameObject = CS.UnityEngine.GameObject

local this = this or nil
local pojectName = G.GetGamePName()

-- 构造方法
function UIPlayer:New(o)
    o = o or { }
    setmetatable(o, self)
    self.__index = self
    return o
end
function UIPlayer:ToString()
    
end
-- 初始化UI
function UIPlayer:InitUI(gameStart, playerNode)
	self.gameStart = gameStart
	self.playerNode = playerNode
	
    self.BG = self.this.transform:Find("BG")
    self.HintNode = self.this.transform:Find("Widget2DNode/HintNode")
    self.Line01 = self.this.transform:Find("Line01")
    self.Line02 = self.this.transform:Find("Line02")
    self.PoChanNode = self.this.transform:Find("PoChanNode")
    self.Widget2DNode = self.this.transform:Find("Widget2DNode")
    self.PaokouNode = self.this.transform:Find("FXNode/PaokouNode")
    self.Paokou = self.this.transform:Find("FXNode/PaokouNode/paokou")
    self.Paokou.gameObject:SetActive(false)
    self.ChangeGun = self.this.transform:Find("FXNode/qiehuan")
    self.ChangeGun3 = self.this.transform:Find("FXNode/qiehuan3")
    self.ChangeGun.gameObject:SetActive(false)
    self.ChangeGun3.gameObject:SetActive(false)
    self.FXNode = self.this.transform:Find("FXNode")
    self.GoldNumberPos = self.this.transform:Find("GoldNumberPos").position

    self.Wait2DNode = self.this.transform:Find("Wait2DNode")
    self.GunSizeBG = self.this.transform:Find("Widget2DNode/GunSizeBG")
    self.GunSizeBGOther = self.this.transform:Find("Widget2DNode/GunSizeBGOther")
    self.GunSizeText = self.this.transform:Find("Widget2DNode/GunSizeText"):GetComponent("Text")
    self.DecGunButton = self.this.transform:Find("Widget2DNode/GunSizeBG/DecGunButton")
    self.AddGunButton = self.this.transform:Find("Widget2DNode/GunSizeBG/AddGunButton")
    self.DecGunButton:GetComponent("Button"):AddClickListener( function() self:OnDownGunLevel() end)
    self.AddGunButton:GetComponent("Button"):AddClickListener( function() self:OnUpGunLevel() end)

	self.IconGlod = {}
	self.IconGlod[0] = self.this.transform:Find("Line02/IconImage0")
	self.IconGlod[1] = self.this.transform:Find("Line02/IconImage1")
	
    self.NickName = self.this.transform:Find("Line01/NickName"):GetComponent("Text")
    self.GoldNumber = self.this.transform:Find("Line02/GoldNumber"):GetComponent("Text")
    self.NickName.text = ""
    self.GoldNumber.text = "0"
    self.AddMoneyText = self.this.transform:Find("AddMoneyText"):GetComponent("Text")
    self.AddMoneyText.text = ""
    self.SubMoneyText = self.this.transform:Find("SubMoneyText"):GetComponent("Text")
    self.SubMoneyText.text = ""	
    self.isChangeGunLevelFinish = true
	self.isJoinGame = false
	self.BulletBelt = {}
    -- 修改枪等级完成
    self:HideUI()
end

function UIPlayer:GetPlayerNode()
    return self.playerNode.transform.position
end

function UIPlayer:FrameUpdate()
    
end
function UIPlayer:JoinGame(_type)
	self.isJoinGame = true
	
	for k, v in pairs(self.IconGlod) do
		v.gameObject:SetActive(k == _type)			
	end
end
function UIPlayer:HideUI()
    local b = false
    self.BG.gameObject:SetActive(b)
    self.HintNode.gameObject:SetActive(b)
    self.Line01.gameObject:SetActive(b)
    self.Line02.gameObject:SetActive(b)
    self.Widget2DNode.gameObject:SetActive(b)
    self.Wait2DNode.gameObject:SetActive(not b and self.isJoinGame)
    self.PoChanNode.gameObject:SetActive(b)
end
-- 玩家数据
function UIPlayer:GetUser()
    local i = Model.Call.GetPosToSeatno(self.seatno)
    return Model.Call.GetSeatnoToUser(i)
end
-- 设置玩家进入UI
function UIPlayer:SetPlayerEnter()
    local v = self:GetUser()
    local b = true
    self.BG.gameObject:SetActive(b)
    self.Line01.gameObject:SetActive(b)
    self.Line02.gameObject:SetActive(b)
    self.Widget2DNode.gameObject:SetActive(b)
    self.Wait2DNode.gameObject:SetActive(not b and self.isJoinGame)
    self.NickName.text = "" .. v.User.UserID--NickName
    self:UpdatePlayerMoneyNumber()
    local i = Model.Call.GetPosToSeatno(self.seatno)
    if Model.Call.IsPlayerSeat(i) then
        self.GunSizeBG.gameObject:SetActive(true)
        self.GunSizeBGOther.gameObject:SetActive(false)

        self.HintNode.gameObject:SetActive(true)		
		self.gameStart:DelayInvoke(10,
		function()
			self.HintNode.gameObject:SetActive(false)
		end )
    else
        self.GunSizeBG.gameObject:SetActive(false)
        self.GunSizeBGOther.gameObject:SetActive(true)
    end
    self:SetGunLevel()
end
-- 玩家状态改变
function UIPlayer:ChangePlayerState()
    local v = self:GetUser()
    self:UpdatePlayerMoneyNumber()
end
-- 设置玩家离开
function UIPlayer:SetPlayerExit()
    self:HideUI()
	self:RelaseBulletBelt()
end
function UIPlayer:SetPoChan(isPC)
    if isPC then
		local gameType = (Model.Call.GetGameType() ~= 1)
        self.PoChanNode.gameObject:SetActive(true and gameType)
    end
end
function UIPlayer:ClosePoChan()
	self.PoChanNode.gameObject:SetActive(false)
end
function UIPlayer:GetPoChan()
	return self.PoChanNode.gameObject.activeSelf
end
-- 获取枪炮位置
function UIPlayer:GetGunPos()
    return self.Widget2DNode.position
end

function UIPlayer:PlayCoinEffect(PrefabName, Value)
	local MoneyObject = CS.FrameWork.ObjectPoolManager.Instance:Get(PrefabName)
	MoneyObject.gameObject:SetActive(true)
	MoneyObject.transform:SetParent(self.GoldNumber.gameObject.transform);
	MoneyObject.transform.localScale = CS.UnityEngine.Vector3.one * 0.5

	if self.seatno == 0 or self.seatno == 1 then
		MoneyObject.transform.localPosition = CS.UnityEngine.Vector3(0, 30, 0)
	else
		MoneyObject.transform.localPosition = CS.UnityEngine.Vector3(0, -10, 0)	
	end

	local MoneyText = MoneyObject.gameObject:GetComponent("Text")	
    MoneyText.text = Value
	
    local seq = CS.DG.Tweening.DOTween.Sequence()
	local pos = MoneyObject.transform.position + CS.UnityEngine.Vector3(0, 30, 0)
	seq:Append(MoneyObject.transform:DOMove(pos, 0.6))
    seq:OnComplete( function()
		MoneyObject.gameObject:SetActive(false)
		CS.FrameWork.ObjectPoolManager.Instance:Release(PrefabName, MoneyObject)
    end )
end

-- 加钱
function UIPlayer:AddMoneyNumber(num)
    num = G.Tool.UserHelper.ToCashDetail(num)
	self:PlayCoinEffect("AddMoneyText", "+" .. num)
end
-- 减钱
function UIPlayer:DecMoneyNumber(num)
    num = G.Tool.UserHelper.ToCashDetail(num)
	self:PlayCoinEffect("SubMoneyText", "-" .. num)
end
-- 更新玩家钱
function UIPlayer:UpdatePlayerMoneyNumber()
    local v = self:GetUser()
    money = v.User.Score
    self.GoldNumber.text = G.Tool.UserHelper.ToCashDetail(money)
	
	if Model.IsPoChanOnce == false then
		if self.PoChanNode.gameObject.activeSelf == true then
			local MinBulletData = Model.Call.GetMinBulletData()
			if MinBulletData ~= nil then
				if v.User.Score >= MinBulletData.BoomRate then
					self:ClosePoChan()
				end
			end
		end
	end
end
-- 升级枪
function UIPlayer:UpGunLevel()
    self.isChangeGunLevelFinish = true
    self:SetGunLevel()
	
    local v = self:GetUser()	
	local BoomType = Model.Call.GetBulletBoomType(v.gunLevel)
	if BoomType == 3 then
		self.ChangeGun3.gameObject:SetActive(false)
		self.ChangeGun3.gameObject:SetActive(true)
	else
		self.ChangeGun.gameObject:SetActive(false)
		self.ChangeGun.gameObject:SetActive(true)
	end
end
-- 降级枪
function UIPlayer:DownGunLevel()
    self.isChangeGunLevelFinish = true
    self:SetGunLevel()
    self.ChangeGun.gameObject:SetActive(false)
    self.ChangeGun.gameObject:SetActive(true)
end
-- 升级枪
function UIPlayer:OnUpGunLevel()
    if not self.isChangeGunLevelFinish then
        return
    end
    local v = self:GetUser()
	local gunLevel = Model.Call.GetBulletData(v.gunLevel).BoomIdx
    if gunLevel < #Model.Defines.BulletData then
        self.isChangeGunLevelFinish = false
        gunLevel = gunLevel + 1
    else
        gunLevel = 1
    end
	self.isChangeGunLevelFinish = false
	gunLevel = Model.Call.GetBulletDataByIdx(gunLevel).BoomNumber
	Model.Call.SendGunBei(gunLevel)
end
-- 降级枪
function UIPlayer:OnDownGunLevel()
    if not self.isChangeGunLevelFinish then
        return
    end
    local v = self:GetUser()
	local gunLevel = Model.Call.GetBulletData(v.gunLevel).BoomIdx
    if gunLevel > 1 then
        gunLevel = gunLevel - 1
    else
        gunLevel = #Model.Defines.BulletData
    end
	self.isChangeGunLevelFinish = false
	gunLevel = Model.Call.GetBulletDataByIdx(gunLevel).BoomNumber
	Model.Call.SendGunBei(gunLevel)	
end
function UIPlayer:SetGunLevel()
	if Model.Call.HasBulletData() == false then
		return
	end

    local v = self:GetUser()
    local b = G.User.GetCurrentUserID() == v.User.UserID
    if(b) then
		if Model.Call.GetFishBulletData(v.gunLevel) == nil then
			CS.UnityEngine.PlayerPrefs.SetInt("MyBYGunLevel", v.gunLevel)
		end
    end
	
	local bulletBoomRate = Model.Call.GetBulletBoomRate(v.gunLevel)
    self.GunSizeText.text = "" .. G.Tool.UserHelper.ToCashDetail(bulletBoomRate)
end

function UIPlayer:ShowGunLevel(isShow)
	-- 槍的數量於1時才顯示可以換槍
	if #Model.Defines.BulletData <= 1 then
		isShow = false
	end

	self.DecGunButton.gameObject:SetActive(isShow)
	self.AddGunButton.gameObject:SetActive(isShow)
end

function UIPlayer:GetGoldNumberPos() 
    return self.GoldNumberPos
end

-- 开枪
function UIPlayer:Shoot(data)
    if not Model.IsRecoverRet then
        --self.HintNode.gameObject:SetActive(false)
    end
    local r = Mathf.Atan2(data.Pos.y, data.Pos.x) * Mathf.Rad2Deg
	
	if Model.Call.IsRotationPlayer() then
        r = r + 90
		r = -r
	else
		r = r - 90
    end

    self.PaokouNode.transform.rotation = Quaternion.Euler(0, 0, r)
 
    self.Paokou.gameObject:SetActive(false)
    self.Paokou.gameObject:SetActive(true)
end

-- 取得弹夹
function UIPlayer:GetBulletBelt()
	local obj = nil
	if #self.BulletBelt > 0 then
		obj = self.BulletBelt[1] 
	end
	
	return obj
end
-- 加入弹夹
function UIPlayer:SetBulletBelt(gunLevel)
	local bulletName = Model.Call.GetBulletPrefabName(tonumber(gunLevel))
	local obj = CS.FrameWork.ObjectPoolManager.Instance:Get(bulletName)
	obj.name = bulletName
	table.insert(self.BulletBelt, obj)
	return obj
end
-- 清除弹夹第一个子弹
function UIPlayer:RemoveBulletBelt()
	if #self.BulletBelt > 0 then
		self.BulletBelt[1].gameObject:SetActive(false)
        CS.FrameWork.ObjectPoolManager.Instance:Release(self.BulletBelt[1].name, self.BulletBelt[1])
		table.remove(self.BulletBelt, 1)
	end
end
-- 清除弹夹
function UIPlayer:RelaseBulletBelt()
	for i=1, #self.BulletBelt do
		self.BulletBelt[i].gameObject:SetActive(false)
        CS.FrameWork.ObjectPoolManager.Instance:Release(self.BulletBelt[i].name, self.BulletBelt[i])
	end
	
	self.BulletBelt ={}
end