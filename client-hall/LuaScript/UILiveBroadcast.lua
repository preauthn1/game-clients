local RecTran_Mask = this.transform:Find("Mask"):GetComponent("RectTransform")
local btnClose = this.transform:Find("UIBody/ButtonClose"):GetComponent("Button")
local RecTran_DetailService = this.transform:Find("UIBody/DetailService"):GetComponent("RectTransform")
local RecTran_WebGO = this.transform:Find("UIBody/DetailService/_WebGO"):GetComponent("RectTransform")

--- 以上内容为工具脚本自动生成，请不要在这之上做任何修改---

local G = require "Global";
local groupName = "UILiveBroadcast";
local UniWebView

-- 初始化函数，实例化之后调用一次
function Start()
	btnClose:AddClickListener(function() EscapeWindow() end)	
end

-- 载入客服
function LoadService()
    local url = G.GameDefine.WebViewIcon1Url
    print(url)
	
    if CS.UnityEngine.Application.platform == CS.UnityEngine.RuntimePlatform.WindowsEditor then
	
	else			
		UniWebView = RecTran_WebGO.gameObject:AddComponent(typeof(CS.UniWebView))
	end
	
	if UniWebView ~= nil then
		UniWebView:CleanCache()
	end
	
	-- 4个参数 分别为 距离上边距离，左边距离，下边距离，右边距离
	local screenWidth = CS.UniWebViewHelper.screenWidth * 0.5
	local screenHeight = CS.UniWebViewHelper.screenHeight * 0.5
	local rectWidth = RecTran_Mask.rect.width * 0.5
	local rectHeight = RecTran_Mask.rect.height * 0.5
	local scale = screenHeight/rectHeight
	top = math.modf((rectHeight - (RecTran_DetailService.rect.height * 0.5 + RecTran_DetailService.anchoredPosition.y))*scale)
	bottom = math.modf((rectHeight - (RecTran_DetailService.rect.height * 0.5 - RecTran_DetailService.anchoredPosition.y))*scale)
	
	scale = screenWidth/rectWidth
	left = math.modf((rectWidth - (RecTran_DetailService.rect.width * 0.5 - RecTran_DetailService.anchoredPosition.x))*scale)
	right = math.modf((rectWidth - (RecTran_DetailService.rect.width * 0.5 + RecTran_DetailService.anchoredPosition.x))*scale)
	
	print(top,left,bottom,right)
	if UniWebView ~= nil then
		UniWebView.insets = CS.UniWebViewEdgeInsets(top,left,bottom,right)
		UniWebView:OnLoadComplete('+', OnLoadComplete)
		UniWebView:OnReceivedMessage('+', OnReceivedMessage)
		-- 按下返回鍵不關掉webview，\Assets\FrameWork\XLuaWebViewExport中加上typeof(UniWebView.WebViewShouldCloseDelegate)
		--UniWebView:OnWebViewShouldClose('+', OnWebViewShouldClose)

		-- 载入页面时不显示loading
		UniWebView:SetShowSpinnerWhenLoading(false)
		UniWebView.toolBarShow = false
		UniWebView.url = url

		UniWebView:Load()
		UniWebView:Show()		
	end
end

function RefreshWindowData(windowData)
	RecTran_DetailService.gameObject:SetActive(true)

	LoadService()
end

function EscapeWindow()
    CS.WindowManager.Instance:CloseWindow(groupName, false);
end

function Update()
    if CS.UnityEngine.Application.platform == CS.UnityEngine.RuntimePlatform.WindowsEditor then
		return
	end
	
	if RecTran_WebGO.gameObject.activeSelf == true then
		local wv = RecTran_WebGO.gameObject:GetComponent(typeof(CS.UniWebView))
		if wv == nil then
			EscapeWindow()
		end
	end
end

function OnWebViewShouldClose(webView)
    return false
end

function OnReceivedMessage(webView, message)
    CS.UILoadingData.Hide()
    if (message.path == "close") then
        CS.UnityEngine.Object.Destroy(webView)
        if (message:GetArgs("message") ~= nil) then
            CS.UIBubblePrompt.Show(message:GetArgs("message"), groupName)
        end
    end

end

function OnLoadComplete(webView, success, errorMessage)
    if (isloadpayurl == false) then
        isloadpayurl = true
      
        if (success) then
            CS.UILoadingData.Hide()
			if SubIndex == 1 then
				webView:Show()
			end
        else
            CS.UILoadingData.Hide()
            print("加载webview失败:", errorMessage)
            webView:Hide()
            CS.UnityEngine.Object.Destroy(webView)

            CS.UIBubblePrompt.Show("启动失败。", groupName)
        end
    end
end