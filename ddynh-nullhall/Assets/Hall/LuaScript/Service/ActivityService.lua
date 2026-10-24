require("Module")
mmodule(...)

local G = require "Global"

local activityPopList = nil    -- 活動彈窗陣列.

local activityList = nil    -- 活動內文陣列.

local groupName = "ActivityService"

local urlList = {}
function ClearUrlList()
    urlList = {}
end

-- 判斷是否有收到封包.
local isPopupRet = false
local isAnnouncementRet = false

local yield_return = G.Util.async_to_sync(function(to_to_yield, cb)
    CS.TimeManager.Instance:YieldAndCallback("Activity", to_to_yield, cb)
end)

function BeginDownImg(urlList)
	AccDownImg = 0
	DownImg(urlList, 1)
end

G.NetQ.RegOnceMsgHook(G.Proto.BClass.Hall, G.Proto.Hall.PromotionEventsPopupRetID, function(receiveMsg) 		       
    -- 要將下載網址變成一個陣列(用Lua陣列來處理).		
    isPopupRet = true    
    for k, v in pairs(receiveMsg.PopupList) do
        -- 先檢查有沒有Key，避免重複放入,以及網址為空也不要放入.
        if(urlList[v.ImageUrl] == nil and string.len(v.ImageUrl) > 0) then table.insert(urlList,v.ImageUrl) end
    end    
    if(isPopupRet and isAnnouncementRet) then BeginDownImg(urlList) end    
end, groupName)

G.NetQ.RegMsgHook(G.Proto.BClass.Hall, G.Proto.Hall.PromotionEventsAnnouncementRetID, function(receiveMsg)                        
    isAnnouncementRet = true
    for k, v in pairs(receiveMsg.AnnouncementList) do        
        if(urlList[v.ImageUrl] == nil and string.len(v.ImageUrl) > 0) then table.insert(urlList,v.ImageUrl) end        
    end
    if(isPopupRet and isAnnouncementRet) then BeginDownImg(urlList) end
end, groupName)

function ClearActivityList()
    activityList = nil
end

function GetActivityList()
    return activityList
end

function ClearActivityPopList()
    activityPopList = nil
end

function GetActivityPopList()
    return activityPopList
end
-- 初始化活動清單.
function InitLoadActivityList()
    if (activityPopList == nil) then
        RefreshActivityPopList()
    end
    if (activityList == nil) then
        RefreshActivityList()
    end
end

-- 初始化要預載的圖示內容.
function InitActivity()   
	-- 送出活動彈窗和內文請求.	
    G.NetQ.SendMsg(G.Proto.BClass.Hall, G.Proto.Hall.PromotionEventsPopupID, { Area_ID = G.GameConfig.GameSiteID} )
    G.NetQ.SendMsg(G.Proto.BClass.Hall, G.Proto.Hall.PromotionEventsAnnouncementID, { Area_ID = G.GameConfig.GameSiteID} )
end

-- 提供網址陣列,當前一份處理完畢，才處理下一份.
-- 要提供網址清單，以及要下載的編號.
-- 已下載的也不會下載.
function DownImg(list, index)    
	AccDownImg = AccDownImg + 1
	
    if(index > #list) then
		return
	end
	
    local url = list[index]             
    local key = CS.Utility.GetMD5Code(url)
    
    -- 避免網址為空.
    if(url == nil or #url == 0) then
        DownImg(list, index+1)
		return
	end

    if(CS.UnityEngine.PlayerPrefs.HasKey(key)) then                
        DownImg(list, index+1)
        return
    end
	
	G.Util.coroutine_call(function()   				
        local www = CS.UnityEngine.WWW(url)
		
		yield_return(www)
		
		if (www.isDone and www.texture ~= nil and www.texture.width ~= 8 ) then         			
			local str = CS.System.Convert.ToBase64String(www.texture:EncodeToPNG())
			CS.UnityEngine.PlayerPrefs.SetString(key, str)
		else
			print("!!!!!!!!!!!!!!!!!!!!!! download pic error, url = " .. url)
        end
		
		DownImg(list, index+1)
    end)()
end

-- 全素材是否已都下載.
-- 將封包的url和Playerfabs比對，確認是否都下載完畢.
function IsPreDownLoad()    
    local isRet = (isPopupRet and isAnnouncementRet)    
    if(isRet == false) then return false end
    
	if (AccDownImg > #urlList) then
		return true
	else
		return false
	end
end

function RefreshActivityList()
    G.NetQ.SendMsg(G.Proto.BClass.Hall, G.Proto.Hall.PromotionEventsAnnouncementID, { Area_ID = G.GameConfig.GameSiteID} )
end

-- 註冊活動內文返回要執行的動作.
function RegActivityRetCallBack(callback)
    G.NetQ.RegMsgHook(G.Proto.BClass.Hall, G.Proto.Hall.PromotionEventsAnnouncementRetID, function(receiveMsg)        
        activityList = receiveMsg.AnnouncementList
        if callback ~= nil then
            callback()
        end
    end , groupName)

    G.NetQ.RegMsgHook(G.Proto.BClass.Hall, G.Proto.Hall.PromotionEventsPopupRetID, function(receiveMsg)        
        activityPopList = receiveMsg.PopupList
        if callback ~= nil then
            callback()
        end
    end , groupName)
end

-- 清除活動彈窗資訊
function InitLoadActivityPopList()
    if (activityList == nil) then
        RefreshActivityPopList()
    end
end

-- 刷新活動彈窗資訊
function RefreshActivityPopList()
    G.NetQ.SendMsg(G.Proto.BClass.Hall, G.Proto.Hall.PromotionEventsPopupID, { Area_ID = G.GameConfig.GameSiteID} )
end

function RemoveRegActivityMsg()
    G.NetQ.RemoveMsgHookByGroup(groupName)
end