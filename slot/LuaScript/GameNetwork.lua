require("Module")
mmodule(...)

local HallG = require("Global")
local GameG = HallG.RequireG("GameGlobal")

local server = GameG.RequireG("GameServer")
-- 註冊監聽消息
local registerMessages = {}
-- 使用接收假封包
local useFakeServer = false

function Init()	

end

function Start()	
	Resume()
			
	if(useFakeServer == true)then
		server.Start()
	end
end

function onExit()
	registerMessages = {}
		
	--清除消息
	HallG.NetQ.RemoveMsgHookByGroup(GameG.GetGameName())
    HallG.NetQ.RemoveGameMsgHook()
end

-- 暫停處理消息
function Pause()
	HallG.NetQ.Pause()
end

-- 恢復處理消息
function Resume()
	HallG.NetQ.Resume()
end

-- 添加消息協議解析結構
function AddMessageModelName(packetID, name)
    HallG.NetQ.AddReturnMsgModelName(HallG.Proto.BClass.Game, packetID, name)	
end

-- 註冊監聽消息攔截
function RegisterMessage(packetID, callfun)
	if(useFakeServer == false)then
		HallG.NetQ.RegMsgHook(HallG.Proto.BClass.Game, packetID, function(receiveMsg)
			if(callfun ~= nil)then
				callfun(receiveMsg)
			end
		end , GameG.GetGameName());
	else
		local message = {packetID = packetID, callfun = callfun}
		table.insert(registerMessages, message)	
	end
end

-- 向伺服器發送消息
function SendMessage(packetID, data)
	if(useFakeServer == false)then
		HallG.NetQ.SendMsg(HallG.Proto.BClass.Game, packetID, data)	
	else
		ShowLog("送出假消息", "<color=#FF7B00>", packetID, data)
		server.Receive(packetID, data)
	end
end

-- 監聽網路消息
function onReceiveFakeMessage(packetID, data)
    for k, v in pairs(registerMessages) do
        if (v.packetID == packetID) then
			ShowLog("收到假消息", "<color=#FFC90E>", packetID, data)
            v.callfun(data)
        end
    end
end

-- 顯示訊息
function ShowLog(text, color, packetID, data)
	local mainId = HallG.Proto.BClass.Game
    local logText = ""..color..text.."</color>"..
					" Type:"..color..mainId.." " ..CS.Protocol.GetTypeString(mainId).."</color>"..
					" ProtoId:"..color..packetID.." " ..CS.Protocol.GetProtocolString(mainId, packetID).."</color>"
    if (data ~= nil) then
        if (type(data) == "table") then
            GameG.Print(logText, data)
        else
			print(logText.."\n".. data)
        end
    else
		print(logText.."\n nil")
    end
end
