-- region *.lua
-- Date
-- 此文件由[BabeLua]插件自动生成
require("Module")
mmodule(...)

local G = require "Global"
local coinShowRate = 100
local function clearSuffix(str)
    if (string.find(str, ".") > 0) then
        str = string.gsub(str, "0+$", "")
        str = string.gsub(str, "%.$", "")
    end
    return str
end
-- 显示完整金币数
function ToCashDetail(num, isConvert)
    num = tonumber(num)
    if (isConvert == nil or isConvert == true) then
        num = num / coinShowRate
    end
    if (coinShowRate > 1) then
        num = G.Tool.Math.Decimal(num, 2)
        return clearSuffix(string.format("%.2f", num))
    else
        return string.format("%s", G.Tool.Math.ParseInt(num * coinShowRate))
    end
end

-- 显示简短金币数
function ToCash(num, isConvert)

    num = tonumber(num)
    if (isConvert ~= false) then
        num = num / coinShowRate
    end
    local pointNum = 0
    if (coinShowRate > 1) then
        pointNum = 2
        num = G.Tool.Math.Decimal(num, 2)
    else
        num = G.Tool.Math.ParseInt(num)
    end
    if (num < 100000) then
        return clearSuffix(string.format("%." .. pointNum .. "f", num))
    elseif (num < 100000000) then
        num = G.Tool.Math.Decimal(num / 10000, 2)
        num = clearSuffix(string.format("%2f", num))
        return string.format("%s万", num);
    else
        num = G.Tool.Math.Decimal(num / 100000000, 2)
        num = clearSuffix(string.format("%2f", num))
        return string.format("%s亿", num);
    end
end
-- 转换为单位的货币显示
function ToCashUnit(num)
    return ToCash(num) .. "元"
end

-- 获取保存的金币数
function GetSaveCoin(num)
    num = tonumber(num)
    return G.Tool.Math.ParseInt(num * coinShowRate)
end




-- endregion
