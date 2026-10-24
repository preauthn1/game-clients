local Btn_Close = this.transform:Find("UIBody/Background/_CloseGift"):GetComponent("Button")
local Btn_Go = this.transform:Find("UIBody/Background/_BingdingGift"):GetComponent("Button")
local Image_Bg = this.transform:Find("UIBody/Background"):GetComponent("Image")
local Root = this.transform:Find("UIBody")

local G = require "Global";
local PoolSequence = {}
local uiAd = G.RequireG("UIHallAd")

local yield_return = G.Util.async_to_sync(function(to_to_yield, cb)
    this:YieldAndCallback(to_to_yield, cb)
end)

-- 彈跳視窗最大解析度.
local defaultSize = CS.UnityEngine.Vector2(1280, 720)

-- 初始化函数，实例化之后调用一次
function Start()
    Btn_Close:AddClickListener
    (
    function()
        EscapeWindow()
    end
    )   
end 

function EscapeWindow()
    CS.WindowManager.Instance:CloseWindow("UI_Activity", false);
end

function RefreshWindowData(windowData)            
    Root.gameObject:SetActive(false)
    -- 解析資料.        
    local activity = windowData.List[windowData.Index]
    if(activity == nil) then return end
    
    -- 設定點擊的連結動作,使用大廳(Hall)的AD.
    Btn_Go.onClick:RemoveAllListeners()
    Btn_Go:AddClickListener
    (
    function()
        EscapeWindow()        
        uiAd.ProcAD(activity.BehaviorType, activity.BehaviorSettingValue, activity.Title)
    end
    )                
    
    -- 從Playerfabs取得素材.
    local url = activity.ImageUrl
    local dataStr = CS.UnityEngine.PlayerPrefs.GetString(CS.Utility.GetMD5Code(url))
	if (dataStr == nil or dataStr == "") then
		EscapeWindow()
		return
	end
	
	local byteData = CS.System.Convert.FromBase64String(dataStr)
	local tex = CS.UnityEngine.Texture2D(256,256,CS.UnityEngine.TextureFormat.ETC2_RGBA8,false)
	tex:LoadImage(byteData)
				
    ResetImage(Image_Bg, tex)   
     -- 當圖已被下載完成，才讓彈窗開啟.
     Root.gameObject:SetActive(true)   
end

-- 重設定Image大小，並保持縮放比.
-- trans : 物件的RectTransform, texture : 欲放入的材質.
function ResetImage(image, texture)
    local trans = image:GetComponent("RectTransform")
    -- 將WWW素材處理成Image.
    local rect = { x = 1, y = 1, width = texture.width, height = texture.height }                
    local sprite = CS.UnityEngine.Sprite.Create(texture, CS.UnityEngine.Rect(0, 0, texture.width, texture.height), CS.UnityEngine.Vector2(0, 0))
    image.sprite = sprite

    local size = CS.UnityEngine.Vector2(texture.width, texture.height)
    if(texture.width < defaultSize.x or texture.height < defaultSize.y) then
        -- 素材小於1280*720時，將圖案回復原有大小.
        image:SetNativeSize()    
    else 
        -- image長寬任一超過1280 * 720時，就等比例.        
        if(size.y > defaultSize.y) then 
            local scale = defaultSize.y / size.y
            local width = size.x * scale            
            size = CS.UnityEngine.Vector2(width, defaultSize.y)
        end

        if(size.x > defaultSize.x) then
            local scale = defaultSize.x / size.x
            local height = size.y * scale            
            size = CS.UnityEngine.Vector2(defaultSize.x, height)
        end

        trans.sizeDelta = size
    end
end