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
	uiRoot = this.transform.root:GetComponent("CanvasScaler")
	CS.UnityEngine.Screen.autorotateToPortrait = true
	CS.UnityEngine.Screen.autorotateToPortraitUpsideDown = true
	
	UniWebView:OnPageFinished("+", OnWebViewFinished)
	UniWebView:OnPageErrorReceived("+", OnWebViewError)
	UniWebView:OnShouldClose ("+", OnWebViewClose)
	UniWebView:OnOrientationChanged  ("+", OnWebViewOrientation)
end

function RefreshWindowData(windowData)
	local url = windowData
	--url = "http://0.0.0.0:2148/UpdateFiles/web-mobile/dfdc/QA/h5/?eyJkYXRhIjp7InBsYXllcklEIjoxMDAwMDc0LCJwbGF5ZXJOYW1lIjoicnJycnJyIiwibGFuZyI6IlpILUNOIiwic2VydmVySUQiOjM2NSwic2VydmVyQ29ubmVjdGlvbiI6IjE5Mi4xNjguMTAuOTA6MTAwODAvd3MvMTMxMDEiLCJhY2Nlc3NfVG9rZW4iOiJleUpoYkdjaU9pSkJSVk1pTENKMGVYQWlPaUpLVjFRaWZRPT0uZXlKTWIyZHBibFZ6WlhKSlJDSTZNVEF3TURBM05Dd2lURzluYVc1T1lXMWxJam9pY25KeWNuSnlJaXdpVEdGdVp5STZJbHBJTFVOT0lpd2lWRzlyWlc1RmVIQnBjbVZrVkdsdFpTSTZNVFU0TVRNeU56STNPU3dpVW01a1NVUWlPaUl5T1dRMU1HSmpNQzFrWWpRekxUUmtOMkV0T1RWaU1TMHdaR05pT1RjMVpUUTVPR0lpTENKVGFXZHVTMlY1SWpvaVltRm1PR05qTjJNM1pUQXhOVGM1T1RreFptVmtOR0V4WmpobVpUa3hNR01pTENKVWIydGxibFpsY25OcGIyNGlPakY5Lk9iM2ZGU29OeUgxTlBYV0ZZRE9PVWUrYlRERklaMWRDM2ZQRVhlbFJ0OUErVC9zMSs3c2l1OFMwb09pcjhOWmpqQmhOMFhxbmhia1NLRTZvVlpPM1NyV2xzOHIrVGNqbnV6S2cyL3BCZFFDSmRzZTVBTDc0V3ZMWE51VXZYZ2NLVXpNc1JNdG5nUm5YWGxhWWVlZGhsVkhmUnR0YmFJb2JQcnNjV0ZUNGRVL1RkVTVxRzVyc2xJakZmY3YxOWRVTVJmWGxPaENrMlB0MzduTUlYeXgwU0NOb2IyUlRGRWozT0Z5Y2t1SXlRR1BRazVzQTJXTytSNk5iWHduMCswWkFyckxBZGlpeTZjTDVlQUtPaDE5QUU2WGxxZGRlcnFnSGFtV0pzMjAzRmpiaU1HRXB0dHpuMjZDc1dPWnptOEhvdG8wdG9CbnFiZUhWd3c2QzBENjhrOWdLaWlKZHhFUG5CSXFwdEpFUHJ2aHpreE9BNUlXM1FCU0lNQTVwaUx0V3F3TXdzVHZPWEZ5V1ZNaDVZY2NiSWc9PSJ9fQ=="--G.GameDefine.WebViewIcon1Url
	print(url)
	
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
	print("OnWebViewFinished")
	if status ~= 200 then 
		CS.UIBubblePrompt.Show("启动失败。", groupName)
		EscapeWindow()
	end
end

function OnWebViewError(view, error, msg)
	print("OnWebViewError")
	CS.UIBubblePrompt.Show("启动失败。", groupName)
	EscapeWindow()
end

function OnWebViewClose(view)
	print("OnWebViewClose")
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
