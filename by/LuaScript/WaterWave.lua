require("Module")
mmodule(...)

local m_material
local m_effectX = false
local m_effectY = false
local m_speed = 0.05
local m_offsetValue = 0.1
local m_distortionPower = 0.015

local m_isAdd = true
local m_value = 0
local m_enabled = true

local m_InitValueX
local m_InitValueY
local m_InitValueDisPower

function Init(material, effectX, effectY, speed, offsetValue, distortionPower)
	m_material = material
	m_effectX = effectX
	m_effectY = effectY
	m_speed = speed
	m_offsetValue = offsetValue
	m_distortionPower = distortionPower
	
	if m_material ~= nil then
		m_InitValueX = m_material:GetFloat("_DistortionScrollX")
		m_InitValueY = m_material:GetFloat("_DistortionScrollY")
		m_InitValueDisPower = m_material:GetFloat("_DistortionPower")
		
		m_material:SetFloat("_DistortionPower", m_distortionPower)
	end
	m_isAdd = true
	m_value = 0
end

function SetEnabled(enabled)
	m_enabled = enabled
end

function DoUpdate()
	if m_material == nil then
		return
	end
	
	if m_enabled == false then
		return
	end
	
	local deltaTime = CS.UnityEngine.Time.deltaTime
	if m_isAdd == true then
		m_value = m_value + deltaTime * m_speed
	else
		m_value = m_value - deltaTime * m_speed
	end
	
	if m_value > m_offsetValue then
		m_isAdd = false
	elseif m_value < -m_offsetValue then
		m_isAdd = true
	end

	if m_effectX == true then
		m_material:SetFloat("_DistortionScrollX", m_value)
	end
	
	if m_effectY == true then
		m_material:SetFloat("_DistortionScrollY", m_value)
	end
end

function End()
	if m_material ~= nil then
		m_material:SetFloat("_DistortionScrollX", m_InitValueX)
		m_material:SetFloat("_DistortionScrollY", m_InitValueY)
		m_material:SetFloat("_DistortionPower", m_InitValueDisPower)
	end
end