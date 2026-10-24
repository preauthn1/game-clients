require("Module")
mmodule(...)

-- 删除所有字符串中的空格
function TrimAll(str)
    return string.gsub(str, "%s+", "")
end

-- 删除字符串首尾空格
function Trim(str)
    return string.gsub(str, "^%s*(.-)%s*$", "%1")
end

-- 删除字符串首空格
function TrimLeft(str)
    return string.gsub(str, "^%s*(.-)", "%1")
end

-- 删除字符串尾空格
function TrimRight(str)
    return string.gsub(str, "(.-)%s*$", "%1")
end

-- 分隔字符串返回一个Table
function Split(str, splitStr)
    if (str == nil or str == "") then
        return nil
    end

    local strAry = { }
    local afterStr = splitStr
    if (splitStr == ".") then
        splitStr = "%."
    end
    for v in string.gmatch(str .. afterStr, "(.-)" .. splitStr) do
        table.insert(strAry, v)
    end
    return strAry
end

-- 检查字符串是否为空
function IsEmpty(str)
    if str == nil or str == "" then
        return true
    end

    return TrimAll(str) == ""
end

function Sub(str, startIndex, endIndex)
    return string.sub(str, startIndex, endIndex)
end

function SubString(str, startIndex, len)
    return string.sub(str, startIndex, startIndex + len - 1)
end

-- 解析当前平台游戏的版本号 {平台号}_{版本号} 1_1.0.1,2_1.0.1
function ParseVersion(versionStr, platformID)
    local platformVersions = Split(versionStr, ",");

    platformID = tostring(platformID)

    for i = 1, #platformVersions - 1, 1 do
        local platform_Version = Split(platformVersions[i], "_");

        if platform_Version[1] == platformID then
            return platform_Version[2];
        end
    end

    return "0.0.0"
end