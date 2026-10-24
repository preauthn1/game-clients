require("Module")
mmodule(...)

local roomInfo = nil
local roomLevelNames = {
    "新手场",
    "中级场",
    "高级场",
    "富豪场",
    "皇家场"
}
-- 游戏房间提示步骤定义
RoomTips = {
    Allot = "正在分配座位……",
    WaitOtherPlayer = "正在等待其他玩家进入……",
    ReAllot = "正在重新分配座位……",
    WaitGameStart = "等待游戏开始……",
    Restore = "正在恢复游戏场景……"
}
function Clear()
    roomInfo = nil
end
 
-- 设置代理信息
function SetRoomInfo(currentRoomInfo)
    roomInfo = currentRoomInfo
end

-- 获取代理信息
function GetRoomInfo()
    return roomInfo
end 

-- 1 新手场 2 中级场 3高级场 4富豪场 5皇家场
function GetRoomLevel()
    return roomInfo.Flag
end

-- 获取游戏等级场名称
function GetRoomLevelName()
    return roomLevelNames[tonumber(roomInfo.Flag)]
end
