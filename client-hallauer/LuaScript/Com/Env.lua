require("Module")
mmodule(...)

-- 获取设备类型
function GetHDType()
    -- IOS
    if CS.UnityEngine.Application.platform == CS.UnityEngine.RuntimePlatform.IPhonePlayer
        or CS.UnityEngine.Application.platform == CS.UnityEngine.RuntimePlatform.OSXEditor
        or CS.UnityEngine.Application.platform == CS.UnityEngine.RuntimePlatform.OSXPlayer
    then
        return 3
    elseif CS.UnityEngine.Application.platform == CS.UnityEngine.RuntimePlatform.Android then
        return 2
    elseif CS.UnityEngine.Application.platform == CS.UnityEngine.RuntimePlatform.WindowsEditor
        or CS.UnityEngine.Application.platform == CS.UnityEngine.RuntimePlatform.WindowsPlayer then
        return 1
    end
end

-- 获取大厅版本号
function GetHallVersion()
    return CS.HotUpdate.HotUpdateManager.Instance:GetProjectVersion(CS.AppDefine.HallNumber)
end

-- 获取设备码
function GetHDCode()
    if CS.UnityEngine.Application.platform == CS.UnityEngine.RuntimePlatform.WindowsEditor or CS.UnityEngine.Application.platform == CS.UnityEngine.RuntimePlatform.WindowsPlayer then
		if (CS.AppDefine.useDeviceUniqueIdentifier == false) then
			return CS.System.Guid.NewGuid():ToString();
		else
			return CS.UnityEngine.SystemInfo.deviceUniqueIdentifier
        end
     else 
		
		if CS.Utility.IsNewUUID == true then
			local copy=CS.UniPasteBoard:GetClipBoardString()
            if copy ~= nil and copy ~= "" then
			 if(CS.Utility.IsUUID(copy))then
			     
			  CS.Utility.GetUUID=CS.UniPasteBoard:GetClipBoardString()
			 end
            end
		end
		
        local uuid = CS.Utility.GetUUID
        --當取不到uuid時版本為舊版本,則回傳預設值 update by bob
        if(uuid==nil) then
           return CS.UnityEngine.SystemInfo.deviceUniqueIdentifier;
        else
           return uuid;
        end
     end
end

-- 是否Android环境
function IsAndroid()
    return CS.UnityEngine.Application.platform == CS.UnityEngine.RuntimePlatform.Android
end

-- 是否IOS环境
function IsIOS()
    return CS.UnityEngine.Application.platform == CS.UnityEngine.RuntimePlatform.IPhonePlayer
    or CS.UnityEngine.Application.platform == CS.UnityEngine.RuntimePlatform.OSXEditor
    or CS.UnityEngine.Application.platform == CS.UnityEngine.RuntimePlatform.OSXPlayer
end

-- 是否WindowsEditor
function IsWindows()
    return CS.UnityEngine.Application.platform == CS.UnityEngine.RuntimePlatform.WindowsEditor or CS.UnityEngine.Application.platform == CS.UnityEngine.RuntimePlatform.WindowsPlayer
end