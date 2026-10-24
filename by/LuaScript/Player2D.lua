require("Module")
mmodule(...)

local G = require "Global"
local Model = G.RequireG("FishModel")
Player2D = { }
local Color = CS.UnityEngine.Color
local Vector3 = CS.UnityEngine.Vector3
local Quaternion = CS.UnityEngine.Quaternion
local Mathf = CS.UnityEngine.Mathf
local DOTween = CS.DG.Tweening.DOTween

local this = this or nil
local pojectName = G.GetGamePName()

function Player2D:ToString()
    self.gun.ToString()
end
-- 构造方法
function Player2D:New(o)
    o = o or { }
    setmetatable(o, self)
    self.__index = self
    return o
end
-- 初始化UI
function Player2D:InitUI()
    self.GunBgSprite = self.this.transform:Find("GunBG"):GetComponent("SpriteRenderer")
    self.Gun = self.this.transform:Find("GunAnim/Gun")
    self.GunSprite = self.Gun:GetComponent("SpriteRenderer")
    self.gunAnim = self.Gun.transform.gameObject:GetComponent("Animator")
    self:HideUI()
end
function Player2D:FrameUpdate()
    self.gun.FrameUpdate()
end
function Player2D:HideUI()
    self.this.gameObject:SetActive(false)
end

function Player2D:SetGunLevel()
	if Model.Call.HasBulletData() == false then
		return
	end
	
    local v = self:GetUser()
    local spr = Model.Call.GetGunPrefabName(tonumber(v.gunLevel))
    self.GunSprite.sprite = CS.UISpriteManager.Instance:GetSprite(G.GetGamePName(), spr)
    local sprBg = Model.Call.GetGunBgPrefabName(v.gunLevel)
    self.GunBgSprite.sprite = CS.UISpriteManager.Instance:GetSprite(G.GetGamePName(), sprBg)
end
-- 升级枪
function Player2D:UpGunLevel()
    local v = self:GetUser()
    local b = G.User.GetCurrentUserID() == v.User.UserID
    if b then
        G.Tool.Sound.PlayGameSound("gunchange")
    end
    self:PlayGunAnim()
end
-- 降级枪
function Player2D:DownGunLevel()
    local v = self:GetUser()
    local b = G.User.GetCurrentUserID() == v.User.UserID
    if b then
        G.Tool.Sound.PlayGameSound("gunchange")
    end
    self:PlayGunAnim()
end
function Player2D:PlayGunAnim()
    local v = self:GetUser()
    local spr = Model.Call.GetGunPrefabName(v.gunLevel)
    local sprBg = Model.Call.GetGunBgPrefabName(v.gunLevel)
    self.gunAnim:Play("ChangeGunAnim", 0, 0)

    local obj = self.Gun.gameObject
    local seq = DOTween.Sequence()
    seq:AppendInterval(0.167)
    seq:OnComplete( function()
        self.GunSprite.sprite = CS.UISpriteManager.Instance:GetSprite(G.GetGamePName(), spr)
		self.GunBgSprite.sprite = CS.UISpriteManager.Instance:GetSprite(G.GetGamePName(), sprBg)
    end )
end
function Player2D:ResetFireTime()
	self.gun.ResetFireTime()
end
-- 玩家数据
function Player2D:GetUser()
    local i = self.seatno
    return Model.Call.GetSeatnoToUser(i)
end
-- 设置玩家进入UI
function Player2D:SetPlayerEnter()
    local v = self:GetUser()
    local b = G.User.GetCurrentUserID() == v.User.UserID
    self.this.gameObject:SetActive(true)
    self.gun = self.this.gameObject:AddScriptComponent(pojectName, "UIGun")
    self.gun.Init( { seatno = self.seatno, isUse = b, isUser = b })
    self:SetGunLevel()
end
-- 玩家状态改变
function Player2D:ChangePlayerState()
    local v = self:GetUser()
end
-- 设置玩家离开
function Player2D:SetPlayerExit()
    self.this.gameObject:SetActive(false)
end
-- 设置子弹
function Player2D:SetGunChild(child)
     self.gun.SetGunChild(child)
end
-- 设置是否自动
function Player2D:SetAuto(b)
    self.gun.SetAuto(b)
end
-- 設置自動射擊時間
function Player2D:SetDirectShootTime(DirectShootTime)
    self.gun.SetDirectShootTime(DirectShootTime)
end
-- 自动开枪
function Player2D:AutoShoot()
    self.gun.AutoShoot()
end
-- 手动开枪
function Player2D:ManualShoot(vec)
    self.gun.ManualShoot(vec)
end
-- 开枪
function Player2D:Shoot(data)
    self.gun.Shoot(data)
end
-- 取得槍位置
function Player2D:GetPosition()
    return self.gun.GetPosition()
end
-- 取得黑洞位置
function Player2D:GetBlackHolePosition()
    return self.gun.GetBlackHolePosition()
end
-- 设置黑洞显示
function Player2D:SetBlackHoleActive(active,fishID)
	self.gun.SetBlackHoleActive(active,fishID)
end
-- 取得槍方向
function Player2D:GetDirection()
    return self.gun.GetDirection()
end
-- 旋转枪
function Player2D:RotateTo(isLeft)
    self.gun.RotateTo(isLeft)
end
-- 停止旋转
function Player2D:StopRotate()
    self.gun.StopRotate()
end
-- 子弹生成的坐标点
function Player2D:GetBulletPos()
    return self.gun.GetBulletPos()
end
function Player2D:SetLock(b)
    self.gun.SetLock(b)
end
function Player2D:ChangeGunLevel()
    local obj = self.Gun.gameObject
    local seq = Model.Call.GetSequence("ChangeGunLevel")
    seq:Append(DOTween.To( function() return obj.transform.localScale end, function(v) obj.transform.localScale = v end, Vector3(0.8, 0.8, 0.8), 0.1))
    seq:Append(DOTween.To( function() return obj.transform.localScale end, function(v) obj.transform.localScale = v end, Vector3(1, 1, 1), 0.1))
end
function Player2D:GraspFish()

end