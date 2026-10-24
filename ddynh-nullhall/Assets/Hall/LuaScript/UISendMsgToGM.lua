local btnClose = this.transform:Find("UIBody/ButtonClose"):GetComponent("Button")
local imgTitle = this.transform:Find("UIBody/Background/ImageTitle"):GetComponent("Image")
local btnService = this.transform:Find("UIBody/SubList/Grid/ButtonService"):GetComponent("Button")
local imgServiceSelect = this.transform:Find("UIBody/SubList/Grid/ButtonService/ImageSelect"):GetComponent("Image")
local imgServiceTitle = this.transform:Find("UIBody/SubList/Grid/ButtonService/ImageTitle"):GetComponent("Image")
local btnService = this.transform:Find("UIBody/SubList/Grid/ButtonService"):GetComponent("Button")
local btnSendMailToGM = this.transform:Find("UIBody/SubList/ButtonSendMailToGM/Button"):GetComponent("Button")
local UniWebView = this.transform:Find("webView"):GetComponent("UniWebView")
local DetailService = this.transform:Find("webView"):GetComponent("RectTransform")
local btnHelp = this.transform:Find("UIBody/SubList/Grid/ButtonHelp"):GetComponent("Button")
local imgHelpSelect = this.transform:Find("UIBody/SubList/Grid/ButtonHelp/ImageSelect"):GetComponent("Image")
local imgHelpTitle = this.transform:Find("UIBody/SubList/Grid/ButtonHelp/ImageTitle"):GetComponent("Image")
local RecTran_DetailHelp = this.transform:Find("UIBody/DetailHelp"):GetComponent("RectTransform")
local txtHelpContent = this.transform:Find("UIBody/DetailHelp/Content"):GetComponent("Text")
local loadWebViewTip = this.transform:Find("UIBody/DetailService"):GetComponent("RectTransform")

--- 以上内容为工具脚本自动生成，请不要在这之上做任何修改---
local G = require "Global";
local groupName = "UISendMsgToGM";
local SubIndex = 1 --分页索引

-- 初始化函数，实例化之后调用一次
function Start()
	btnClose:AddClickListener(function() EscapeWindow() end)
	
	btnService:AddClickListener(function() ChangeSub(1) end)
	btnHelp:AddClickListener(function() ChangeSub(2) end)
	
	btnSendMailToGM:AddClickListener(function() 
		EscapeWindow()
		local openparam = CS.WindowNodeInitParam("UISendMailToGM", CS.AppDefine.HallNumber)
        CS.WindowManager.Instance:OpenWindow(openparam)
	end)
	
	LoadService()
	LoadHelp()
	ChangeSub(1)
end

-- 脚本删除时调用，释放变量，释放资源
function OnDestroy()
    -- 回收当前页面注册的消息
    G.NetQ.RemoveMsgHookByGroup(groupName)
end  

function EscapeWindow()
    G.Service.CS.RefreshCSList();
    CS.WindowManager.Instance:CloseWindow(groupName, false);
end

-- 切换分页
function ChangeSub(index)
	SubIndex = index
	imgServiceSelect.gameObject:SetActive(index == 1)
	loadWebViewTip.gameObject:SetActive(index == 1)
	
	imgHelpSelect.gameObject:SetActive(index == 2)
	RecTran_DetailHelp.gameObject:SetActive(index == 2)
	
	if index == 1 then
		UniWebView:Show()
	else
		UniWebView:Hide()
	end
	
	if index == 1 then
		ShowService()
	else
		ShowHelp()
	end
end

-- 显示客服
function ShowService()
	imgTitle.sprite = imgServiceTitle.sprite
end

-- 显示帮助
function ShowHelp()
	imgTitle.sprite = imgHelpTitle.sprite
end
-- 载入客服
function LoadService()
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
	UniWebView:Load(url, true)
end

-- 载入帮助
function LoadHelp()
	G.Service.FAQ.GetFAQ(function(content)
        txtHelpContent.text = content
    end)
end

function OnWebViewFinished(view, status, url)
	if status ~= 200 then 
		CS.UIBubblePrompt.Show("启动失败。", groupName)
		EscapeWindow()
	end
end

function OnWebViewError(view, error, msg)
	CS.UIBubblePrompt.Show("启动客服失败。", groupName)
end

function OnWebViewClose(view)
	EscapeWindow()
	return true
end