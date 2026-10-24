local Btn_Close = this.transform:Find("UIBody/_Close"):GetComponent("Button")
local UniWebView = this.transform:Find("UIBody/DetailService"):GetComponent("UniWebView")
local DetailService = this.transform:Find("UIBody/DetailService"):GetComponent("RectTransform")

--- 以上内容为工具脚本自动生成，请不要在这之上做任何修改---

local G = require "Global"
local uiRoot
local groupName = "UICustomer"

local yield_return = G.Util.async_to_sync(function(to_to_yield, cb)
    this:YieldAndCallback(to_to_yield, cb)
end)

-- 初始化函数，实例化之后调用一次

function Start()
	uiRoot = this.transform.root:GetComponent("CanvasScaler")	
	Btn_Close:AddClickListener(function() EscapeWindow() end)
	CS.UnityEngine.Screen.autorotateToPortrait = true
	CS.UnityEngine.Screen.autorotateToPortraitUpsideDown = true

    local user = G.User.GetLocalUserInfo()
	-- edit下固定帳號登入取出來的值會是nil
	if user == nil then
		user = G.User.GetCurrentUser()
	end
	
    local url= "";
	if G.GameDefine.FlagCSThirdparty == 0 or G.GameDefine.CSThirdpartyUrl == "" then
		local CustomServiceDomain = G.GameConfig.CustomServiceDomain
		
		local hd=0; 
		if( G.Env.IsAndroid()) then
		  hd=2;
		elseif(G.Env.IsIOS()) then
		  hd=1;
		end
		
		if(G.Tool.StringHelper.IsUpgrade_v1(G.Env.GetHallVersion(),hd)) then
			url = CustomServiceDomain.."/ServiceTalk?isUploadFile=true&cerCode="..user.Cer;
		else
			url = CustomServiceDomain.."/ServiceTalk?cerCode="..user.Cer;
		end
	else
		url = G.GameDefine.CSThirdpartyUrl
	end
	print(url)
	
	UniWebView:OnPageFinished("+", OnWebViewFinished)
	UniWebView:OnPageErrorReceived("+", OnWebViewError)
	UniWebView:OnShouldClose ("+", OnWebViewClose)
	UniWebView:OnOrientationChanged  ("+", OnWebViewOrientation)
	UniWebView:Show()
	UniWebView:Load(url, true)
end

function EscapeWindow()	
	CS.UnityEngine.Screen.autorotateToPortrait = false
	CS.UnityEngine.Screen.autorotateToPortraitUpsideDown = false

	G.Util.coroutine_call(function()
		CS.UnityEngine.Screen.orientation = CS.UnityEngine.ScreenOrientation.Landscape
		yield_return(CS.UnityEngine.WaitForEndOfFrame)
		uiRoot.referenceResolution = CS.UnityEngine.Vector2(1334, 750)
		CS.UnityEngine.Screen.orientation = CS.UnityEngine.ScreenOrientation.AutoRotation
		CS.WindowManager.Instance:CloseWindow(groupName, false);
	end)()
end

function OnWebViewFinished(view, status, url)
	if status ~= 200 then 
		CS.UIBubblePrompt.Show("启动失败。", groupName)
		EscapeWindow()
	end
end

function OnWebViewError(view, error, msg)
	CS.UIBubblePrompt.Show("启动客服失败。", groupName)
	EscapeWindow()
end

function OnWebViewClose(view)
	EscapeWindow()
	return true
end

function OnWebViewOrientation(view, orientation)
	if orientation == CS.UnityEngine.ScreenOrientation.Portrait or orientation == CS.UnityEngine.ScreenOrientation.PortraitUpsideDown then
		uiRoot.referenceResolution = CS.UnityEngine.Vector2(750, 1334)
	else
		uiRoot.referenceResolution = CS.UnityEngine.Vector2(1334, 750)
	end
	
	G.Util.coroutine_call(function()
		yield_return(CS.UnityEngine.WaitForEndOfFrame)
		UniWebView.ReferenceRectTransform = DetailService
	end)()	
end


