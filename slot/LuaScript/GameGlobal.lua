require("Module")
mmodule(...)

local HallG = require "Global"
------------------------------------------------------------------------------
local gameName = HallG.GetGamePName()
-- 獲取遊戲名稱
function GetGameName()
	return gameName
end
------------------------------------------------------------------------------
-- 加载游戏lua模块的方法
function RequireG(modelname)    
	return HallG.RequireG(modelname);
end

--
Network = RequireG("GameNetwork")
Json = RequireG("Json")

local gameData = RequireG("GameData")

------------------------------------------------------------------------------
-- 游戏被切换到后台
local function AppPause(isPause)
    if isPause then
        print("...............游戏暂停...............")
        HallG.Service.NetworkService.CloseRoomSocket()
    else
        print("...............游戏恢复...............")
		HallG.Service.NetworkService.ReLoginRoom()
    end
end
------------------------------------------------------------------------------
function Init()
	
    -- CS.AppManager.Instance.OnAppPause = CS.AppManager.Instance.OnAppPause + AppPause;
	
	Network.Init()
end

function Start()
	Network.Start()
end

function onExit()

    -- CS.AppManager.Instance.OnAppPause = CS.AppManager.Instance.OnAppPause - AppPause;
	
	Network.onExit()
end
------------------------------------------------------------------------------
-- 音效開關狀態 獲取/設置
function SoundStatus(val)
	if(val == nil)then
		
    elseif(val == true)then
        CS.SoundManager.Instance.IsSoundOn = true
    else
        CS.SoundManager.Instance.IsSoundOn = false
		CS.SoundManager.Instance:CloseSound()
    end
	
    HallG.GameConfig.SoundStatus = CS.SoundManager.Instance.IsSoundOn
	return CS.SoundManager.Instance.IsSoundOn
end
-- 音樂開關狀態 獲取/設置
function MusicStatus(val)
    if (val == nil) then
    
	elseif (val == true) then
        CS.SoundManager.Instance.IsMusicOn = true
    else
        CS.SoundManager.Instance.IsMusicOn = false
    end
	
    HallG.GameConfig.MusicStatus = CS.SoundManager.Instance.IsMusicOn
	return CS.SoundManager.Instance.IsMusicOn
end

-- 播放音樂
function PlayGameBGM(audioClipName)
    CS.SoundManager.Instance:PlayBGM(GetGameName(), audioClipName)
end

-- 播放音效
function PlayGameSound(audioClipName, isLoop)
    isLoop = HallG.CaseWhen(isLoop == nil, false, isLoop)
    CS.SoundManager.Instance:PlaySound(GetGameName(), audioClipName, isLoop)
end

-- 關閉循環音效
function CloseLoopSound(audioClipName)
    CS.SoundManager.Instance:CloseLoopSound(audioClipName)
end
-- 關閉音樂
function CloseBGMSound()
    CS.SoundManager.Instance:CloseBGMSound()
end
-- 關閉音效
function CloseSound()
    CS.SoundManager.Instance:CloseSound()
end
------------------------------------------------------------------------------
-- 解析結構
function Print(...)
    arg = { ...}

    if arg == nil or #arg == 0 then
        print("table is nil.")
        return
    end

    local print_r_cache = { }
    local printStr = ""

    local t = arg
    if #arg > 1 then
        printStr = arg[1] .. ":"
        t = arg[2]
    end


    local function sub_print_r(t, indent)
        if (print_r_cache[tostring(t)]) then
            printStr = printStr .. "\n" ..(indent .. "*" .. tostring(t))
        else
            print_r_cache[tostring(t)] = true
            if (type(t) == "table") then
                for pos, val in pairs(t) do
                    if (type(val) == "table") then
                        printStr = printStr .. "\n" ..(indent .. "[" .. pos .. "] => " .. tostring(t) .. " {")
                        sub_print_r(val, indent .. string.rep(" ", string.len(pos) + 8))
                        printStr = printStr .. "\n" ..(indent .. string.rep(" ", string.len(pos) + 6) .. "}")
                    elseif (type(val) == "string") then
                        printStr = printStr .. "\n" ..(indent .. "[" .. pos .. '] => "' .. val .. '"')
                    else
                        printStr = printStr .. "\n" ..(indent .. "[" .. pos .. "] => " .. tostring(val))
                    end
                end
            else
                printStr = printStr .. "\n" ..(indent .. tostring(t))
            end
        end
    end
    if (type(t) == "table") then
        printStr = printStr .. "\n" ..(tostring(t) .. " {")
        sub_print_r(t, "  ")
        printStr = printStr .. "\n" ..("}")
    else
        sub_print_r(t, "  ")
    end
	
	print(printStr)
end

------------------------------------------------------------------------------
--[[
Example usage:							Output:
print(FormatNum(9))						9
print(FormatNum(999))					999
print(FormatNum(1000))					1,000
print(FormatNum('1333444.10'))			1,333,444.10
print(FormatNum('US$1333400'))			US$1,333,400
print(FormatNum('-$22333444.56'))		-$22,333,444.56
print(FormatNum('($22333444.56)'))		($22,333,444.56)
print(FormatNum('NEG $22333444.563'))	NEG $22,333,444.563
]]
function FormatNum(n) -- credit http://richard.warburton.it
	local decimalIndex = string.find(n,"%.")
	if(decimalIndex ~= nil)then
		n = string.sub (n, 1 ,decimalIndex)
	end
	n = string.format("%.2f", n * 0.01)
	local left,num,right = string.match(n,'^([^%d]*%d)(%d*)(.-)$')
	return left..(num:reverse():gsub('(%d%d%d)','%1,'):reverse())..right
end

function FormatUnit(n)
	if(gameData.UnitPrefix == nil)then
		return FormatNum(n)
	end

	local compare = function(dataA,dataB)		
		return dataA.Multiple > dataB.Multiple
	end
	
	local unit = ""
	local temp = n * 0.01
	table.sort(gameData.UnitPrefix,compare)
	for k, v in pairs(gameData.UnitPrefix)do		
		local multiple = v.Multiple * 100
		if(tonumber(n) >= multiple)then
			unit = v.Name
			temp = n / multiple
			break
		end
	end
		
	return FormatNum(temp * 100) ..unit
end

------------------------------------------------------------------------------
-- 離開遊戲
function ExitGame()
	HallG.Service.Game.ExitGame()
end
-- 獲取版本
function GetGameVersion()	
	local localVersion = CS.HotUpdate.HotUpdateManager.Instance:GetProjectVersion(GetGameName());
	return localVersion
end
-- 載入圖片
function SetImageSprite(image, spriteName)
	CS.UISpriteManager.Instance:SetImageSprite(image, GetGameName(), spriteName)
end
------------------------------------------------------------------------------
-- Json
function JsonDecode(json)
	if(json ~= nil and json ~= "")then
		return Json.decode(json)
	else
		return nil
	end
end
