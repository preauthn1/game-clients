local btnClose = this.transform:Find("UIBody/ButtonClose"):GetComponent("Button")
local UniWebView = this.transform:Find("webView"):GetComponent("UniWebView")
local DetailService = this.transform:Find("webView"):GetComponent("RectTransform")

--- 以上内容为工具脚本自动生成，请不要在这之上做任何修改---

local G = require "Global";
local groupName = "UILiveBroadcast";
local uiRoot

local yield_return = G.Util.async_to_sync(function(to_to_yield, cb)
    this:YieldAndCallback(to_to_yield, cb)
end)

-- 初始化函数，实例化之后调用一次
function Start()
	btnClose:AddClickListener(function() EscapeWindow() end)
	uiRoot = this.transform.root:GetComponent("CanvasScaler")
	CS.UnityEngine.Screen.autorotateToPortrait = true
	CS.UnityEngine.Screen.autorotateToPortraitUpsideDown = true
	
	local url = G.GameDefine.WebViewIcon1Url
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
	CS.UIBubblePrompt.Show("启动失败。", groupName)
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
