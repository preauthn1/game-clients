local Btn_Close = this.transform:Find("UIBody/ButtonClose"):GetComponent("Button")
local RecTran_ToggleGroup = this.transform:Find("UIBody/Toggle/ToggleGroup"):GetComponent("RectTransform")

local Tog_AgentPay = this.transform:Find("UIBody/Toggle/ToggleGroup/_AgentPay"):GetComponent("Toggle")
local img_AgentPayNormal = this.transform:Find("UIBody/Toggle/ToggleGroup/_AgentPay/Normal"):GetComponent("Image")
local img_AgentPaySelect = this.transform:Find("UIBody/Toggle/ToggleGroup/_AgentPay/Select"):GetComponent("Image")

local Tog_AgentRecruit = this.transform:Find("UIBody/Toggle/ToggleGroup/_AgentRecruit"):GetComponent("Toggle")
local img_AgentRecruitNormal = this.transform:Find("UIBody/Toggle/ToggleGroup/_AgentRecruit/Normal"):GetComponent("Image")
local img_AgentRecruitSelect = this.transform:Find("UIBody/Toggle/ToggleGroup/_AgentRecruit/Select"):GetComponent("Image")

local RecTran_OnlinePayDetail = this.transform:Find("UIBody/_OnlinePayDetail"):GetComponent("RectTransform")
local Btn_Amount = this.transform:Find("UIBody/_OnlinePayDetail/AmountList/AmountListGroup/_Amount")
local Txt_Note = this.transform:Find("UIBody/_OnlinePayDetail/_Note"):GetComponent("Text")

local RecTran_AgentPayDetail = this.transform:Find("UIBody/_AgentPayDetail"):GetComponent("RectTransform")
local Txt_AgentPayTips = this.transform:Find("UIBody/_AgentPayDetail/_AgentPayTips"):GetComponent("Text")
local Txt_PlayerID = this.transform:Find("UIBody/_AgentPayDetail/_CopyMyID/_PlayerID"):GetComponent("Text")
local Btn_CopyMyID = this.transform:Find("UIBody/_AgentPayDetail/_CopyMyID"):GetComponent("Button")
local RecTran_AgentList = this.transform:Find("UIBody/_AgentPayDetail/AgentList/Grid"):GetComponent("RectTransform")
local Btn_AgentItem = this.transform:Find("UIBody/_AgentPayDetail/_AgentItem"):GetComponent("Button")
local Btn_ReportAgent = this.transform:Find("UIBody/_AgentPayDetail/_ReportAgent"):GetComponent("Button")
local Btn_RefreshAgentList = this.transform:Find("UIBody/_AgentPayDetail/_RefreshAgentList"):GetComponent("Button")
local Img_AgentRefresh = this.transform:Find("UIBody/_AgentPayDetail/_RefreshAgentList/ImageRefresh"):GetComponent("Image")
local RecTran_AgentRecuit = this.transform:Find("UIBody/_AgentRecuit"):GetComponent("RectTransform")
local Btn_ConfirmRecuit = this.transform:Find("UIBody/_AgentRecuit/_ConfirmRecuit"):GetComponent("Button")
local Txt_NoDataTips = this.transform:Find("UIBody/_AgentPayDetail/_NoDataTips"):GetComponent("Text")

local Ipt_AgentNote = this.transform:Find("UIBody/_AgentRecuit/_AgentNote"):GetComponent("InputField")
local Ipt_AgentWX = this.transform:Find("UIBody/_AgentRecuit/_AgentWX"):GetComponent("InputField")
local Ipt_AgentQQ = this.transform:Find("UIBody/_AgentRecuit/_AgentQQ"):GetComponent("InputField")
local Ipt_AgentAlipay = this.transform:Find("UIBody/_AgentRecuit/_AgentAlipay"):GetComponent("InputField")
local Ipt_AgentPhone = this.transform:Find("UIBody/_AgentRecuit/_AgentPhone"):GetComponent("InputField")
local Ipt_AgentName = this.transform:Find("UIBody/_AgentRecuit/_AgentName"):GetComponent("InputField")

local RecTran_reportAgent = this.transform:Find("UIBody/_reportAgent"):GetComponent("RectTransform")
local Btn_CloseReport = this.transform:Find("UIBody/_reportAgent/_CloseReport"):GetComponent("Button")
local Ipt_ReportAgentWX = this.transform:Find("UIBody/_reportAgent/_ReportAgentWX"):GetComponent("InputField")
local Ipt_ReportText = this.transform:Find("UIBody/_reportAgent/_ReportText"):GetComponent("InputField")
local Btn_ReportAgentSubmit = this.transform:Find("UIBody/_reportAgent/_ReportAgentSubmit"):GetComponent("Button")
local RecTran_ContactAgent = this.transform:Find("UIBody/_ContactAgent"):GetComponent("RectTransform")
local Btn_CloseContactAgent = this.transform:Find("UIBody/_ContactAgent/_CloseContactAgent"):GetComponent("Button")
local Txt_ContactAgentName = this.transform:Find("UIBody/_ContactAgent/_ContactAgentName"):GetComponent("Text")
local Btn_ShowReportAgent = this.transform:Find("UIBody/_ContactAgent/_ShowReportAgent"):GetComponent("Button")

local Txt_ContactAgentRootQQ = this.transform:Find("UIBody/_ContactAgent/scrolldata/data/QQ")
local Txt_ContactAgentQQ = Txt_ContactAgentRootQQ.transform:Find("_ContactAgent"):GetComponent("Text")
local Btn_ContactAgentQQCopy = Txt_ContactAgentRootQQ.transform:Find("_ContactAgentCopy"):GetComponent("Button")

local Txt_ContactAgentRootWX = this.transform:Find("UIBody/_ContactAgent/scrolldata/data/WX")
local Txt_ContactAgentWX = Txt_ContactAgentRootWX.transform:Find("_ContactAgent"):GetComponent("Text")
local Btn_ContactAgentWXCopy = Txt_ContactAgentRootWX.transform:Find("_ContactAgentCopy"):GetComponent("Button")

local Txt_ContactAgentRootAlipay = this.transform:Find("UIBody/_ContactAgent/scrolldata/data/Alipay")
local Txt_ContactAgentAlipay = Txt_ContactAgentRootAlipay.transform:Find("_ContactAgent"):GetComponent("Text")
local Btn_ContactAgentAlipayCopy = Txt_ContactAgentRootAlipay.transform:Find("_ContactAgentCopy"):GetComponent("Button")

local RecTran_WebPanel = this.transform:Find("UIBody/_WebPanel"):GetComponent("RectTransform")
local RecTran_WebView = this.transform:Find("UIBody/_WebPanel/_View"):GetComponent("RectTransform")
local RecTran_WebGO = this.transform:Find("UIBody/_WebPanel/_WebGO"):GetComponent("RectTransform")

local Btn_CloseWeb = this.transform:Find("UIBody/_WebPanel/_CloseWeb"):GetComponent("Button")

local RecTran_BubblePrompt = this.transform:Find("UIBody/_BubblePrompt"):GetComponent("RectTransform")
local Img_BubblePrompt = this.transform:Find("UIBody/_BubblePrompt/UIBubblePrompt"):GetComponent("Image")
local txt_BubblePrompt = this.transform:Find("UIBody/_BubblePrompt/Date_2"):GetComponent("Text")

local recTran__Loading = this.transform:Find("UIBody/_Loading"):GetComponent("RectTransform")


--- 以上内容为工具脚本自动生成，请不要在这之上做任何修改---

local G = require "Global"
local _PayCallBack
local CallPayCount=0
local DirPayUrl=""
local ProxyRequestRetCallfun = nil
local yield_return = G.Util.async_to_sync
(
function(to_to_yield, cb)
    CS.TimeManager.Instance:YieldAndCallback(to_to_yield, cb)
end
)

local Json = require("Tools/Json")


-- 在線支付
-- index 方舟索引
-- payType 統一支付索引
local onlineSetingData =
{
	{ index = 0, payType = 0, gbname = "_Coin" },-- 金币充值
	{ index = 12, payType = 8, gbname = "_AlipayFixed" },-- 支付寶定額
	{ index = 11, payType = 6, gbname = "_AlipayQR" },-- 支付寶掃碼
	{ index = 21, payType = 7, gbname =  "_WeixinQR" },-- 微信掃碼
	{ index = 1, payType = 1, gbname = "_Alipay" },-- 支付宝
	{ index = 4, payType = 3, gbname = "_QQ" },-- QQ
	{ index = 2, payType = 2, gbname = "_Weixin" },-- 微信
	{ index = 3, payType = 4, gbname = "_Unionpay" },-- 银联	
	{ index = 5, payType = 5, gbname = "_JD" },-- 京東
	{ index = 22, payType = 9, gbname = "_WeixinFixed" },-- 微信固额
	{ index = 13, payType = 12, gbname = "_RedEnvelope" },-- 紅包支付
	{ index = 7, payType = 11, gbname = "_YunShan" },-- 闪云支付
	{ index = 41, payType = 41, gbname = "_GashCard" },-- Gash點卡
	{ index = 42, payType = 42, gbname = "_GashWallet" },-- Gash錢包
}

local IsInitOnlineSetingData = false
function InitOnlineSetingData()
	if IsInitOnlineSetingData == true then
		return
	end
	
	IsInitOnlineSetingData = true

	local ToggleGroup = this.transform:Find("UIBody/Toggle/ToggleGroup/")
	for _, data in pairs(onlineSetingData) do
		data.gameobject = ToggleGroup.transform:Find(data.gbname)
		data.gb 		= data.gameobject:GetComponent("Toggle")
		data.normal 	= data.gameobject.transform:Find("Normal")
		--data.normalName = data.normal.transform:Find("TypeName"):GetComponent("Text")
		data.select 	= data.gameobject.transform:Find("Select")
		--data.selectName = data.select.transform:Find("TypeName"):GetComponent("Text")
	end
end

-- 外部协议白名单
schemes = {
    "weixin",-- 微信
    "alipays",-- 支付宝
    "alipay",-- 支付宝
    "mqqwpa",-- QQ
    "mqqapi",-- QQ
}

local apiaconfig = { }


-- api table 對應开新画面不走WEBVIEW
local redirecpayment = {9,7,6}
local LastPayType = nil
local LastPayGWID = nil
local userdata = G.User.GetCurrentUser().UserData
local user = G.User.GetCurrentUser()
local groupName = "UIRecharge"

local payTypeTogs = { }
local amountBtns = { }
local isloadpayurl = false		-- 是否已经载入过充值页面，每次重新充值是设置为false
local isAppError = false		-- 是否已經收到過自動開啟支付失敗訊息，每次重新充值是设置为false
local showMessageBox = G.Util.async_to_sync(CS.UIMessageBox.Show)
local curWebView
local pause=false;

local sqs1
local sqs2

local currentPayType=0
local currentGwid=0
function SetCurrentPayType(Type,gwid)
	currentPayType = Type
    currentGwid=gwid
end

--当下选择付费方式
function GetCurrentPayType()
	return currentPayType, currentGwid;
end

--方舟支付編號
function GetCurrentPayIndex()
	for _, data in pairs(onlineSetingData) do
		if data.payType == currentPayType then
			return data.index
		end
	end
end


function FormatNum(n) -- credit http://richard.warburton.it
	local decimalIndex = string.find(n,"%.")
	if(decimalIndex ~= nil)then
		n = string.sub (n, 1 ,decimalIndex)
	end
	n = string.format("%.0f", n * 0.01)
	local left,num,right = string.match(n,'^([^%d]*%d)(%d*)(.-)$')
	return left..(num:reverse():gsub('(%d%d%d)','%1,'):reverse())..right
end

-- 加载充值金额
function loadChargeAmountUI()
    --移除金额按钮
    for _, btn in pairs(amountBtns) do
        if (btn ~= nil) then
            CS.UnityEngine.GameObject.Destroy(btn)
        end
    end

    amountBtns = { }
	
    local _payType,gwid = GetCurrentPayType()
			
    local aconfig = G.Tool.TableHelper.Find(apiaconfig, function(v) return v.typeID == _payType and v.gwid==gwid end)[1].amounts
	local idx = 0
    for _, v in pairs(aconfig) do
		idx = idx + 1
		if idx > 8 then
			idx = 8
		end
	
		local btn = CS.UnityEngine.GameObject.Instantiate(Btn_Amount.gameObject)
		btn.transform:SetParent(Btn_Amount.gameObject.transform.parent.transform)
		btn.transform.localScale = CS.UnityEngine.Vector3(1, 1, 1)
		btn.transform.localPosition = CS.UnityEngine.Vector3(0, 0, 0)
		
		if v.bouns > 0 then
			btn.transform:Find("bonusIcon").gameObject:SetActive(true)				
			btn.transform:Find("bonusIcon/bonus"):GetComponent("Text").text = tostring(v.bonus)
		else
			btn.transform:Find("bonusIcon").gameObject:SetActive(false)				
		end
		
		local txtAdd = btn.transform:Find("txtAdd"):GetComponent("Text")
		if v.pointAmount > 0 then
			txtAdd.text = FormatNum(v.pointAmount)
		else
			txtAdd.text = ""
		end
		
		btn.transform:Find("icon"):GetComponent("Image"):ResetSpriteByName(CS.AppDefine.HallNumber, "PayIcon_" .. tostring(idx), true);
		
		local btnamt = math.modf(v.amount / 100)
		btn.transform:Find("txt"):GetComponent("Text").text = tostring(btnamt)

		btn:GetComponent("Button"):AddClickListener( function()
			ConfirmOnlinePay(btnamt)
		end )
		btn:SetActive(true)
		table.insert(amountBtns, btn)
    end
end

function CloseWebView()
    local wb = RecTran_WebGO:GetComponent("UniWebView")
    if (wb ~= nil) then
        wb:Hide()
        CS.UnityEngine.GameObject.Destroy(wb)
    end
	curWebView = nil
    RecTran_WebPanel.gameObject:SetActive(false)
end

function SetIconAndName(data)
	-- 雲閃付提醒
	if data.index == 7 then
		Txt_Note.gameObject:SetActive(true)
	else
		Txt_Note.gameObject:SetActive(false)
	end	
end

-- 初始化函数，实例化之后调用一次
function Start()	
    CS.AppManager.Instance.OnAppPause = CS.AppManager.Instance.OnAppPause + AppPause
	
	G.Service.Msg.SetWebViewCB(HideWebView, ShowWebView)
	
    RecTran_BubblePrompt.gameObject:SetActive(false)
    Btn_AgentItem.gameObject:SetActive(false)

    Btn_CloseWeb:AddClickListener(CloseWebView)
    Btn_Close:AddClickListener
    (
        function()
            G.Tool.UILoading.Hide()
            CS.UILoadingData.Hide()
            CS.WindowManager.Instance:CloseWindow("UIRecharge", false)
        end
    )
	
	--處理內頁金額
	for _, data in pairs(onlineSetingData) do
		if data.gb ~= nil then
          --  print("onValueChanged",data.payType)
			data.gb.onValueChanged:AddListener
			(
    			function(isOn)
					if isOn == false then
						data.normal.gameObject:SetActive(true)
						data.select.gameObject:SetActive(false)
					else
						data.normal.gameObject:SetActive(false)
						data.select.gameObject:SetActive(true)
					end
					
    				-- isOn是關掉的情況不必重新抓資料和顯示 by Rayon
    				if isOn == false then
    					RecTran_OnlinePayDetail.gameObject:SetActive(false)
    					return
    				end
					
					SetIconAndName(data)
    				
    				InitPayConfig()

                    -- 内页点选时重新抽选
                    local paylist=G.Tool.TableHelper.Find(apiaconfig, function(v) return v.typeID == data.index end);
                    local len=tablelength(paylist);
                    local assignnum= math.random(1,len);    
                    SetCurrentPayType(data.index,paylist[assignnum].gwid)      				
					
    				payConfig = G.Service.ReCharge.GetPayConfig()			
    				ProcessAmtList(payConfig)
    				RecTran_OnlinePayDetail.gameObject:SetActive(true) 
    			end
			)
		end
	end
	
	function ShowErrorMessage()
		G.Util.coroutine_call
		(
		function()
			local boxResult = showMessageBox(CS.MessageBoxStyle.OK, "提示", "支付渠道忙碌中,请再试一次...", "确定");
			if boxResult == CS.MessageBoxResult.OK then
			CS.WindowManager.Instance:CloseWindow("UIRecharge", false)
			end
		end
		)()	
	end

    --代理支付
    Tog_AgentPay.onValueChanged:AddListener
    (
        function(isOn)		
			if isOn == true then
				img_AgentPayNormal.gameObject:SetActive(false)
				img_AgentPaySelect.gameObject:SetActive(true)
			else
				img_AgentPayNormal.gameObject:SetActive(true)
				img_AgentPaySelect.gameObject:SetActive(false)			
			end
            RecTran_AgentPayDetail.gameObject:SetActive(isOn)
        end
    )
    
    Btn_CopyMyID:AddClickListener
    (
        function()
            local user = G.User.GetCurrentUser()
            local msg = "我是「" .. G.GameDefine.AppName .. "遊戲」的玩家，"
            msg = msg .. "我的ID：" .. Txt_PlayerID.text
            msg = msg .. " 充值金額："

            CS.Utility.CopyText(msg)
            CS.UIBubblePrompt.Show("复制成功", groupName)
        end
    )
	
    --舉報代理
    Btn_ReportAgent:AddClickListener
    (
        function()
            RecTran_reportAgent.gameObject:SetActive(true)
            Ipt_ReportAgentWX.text = ""
        end
    )
	
    --刷新代理清單
    Btn_RefreshAgentList:AddClickListener
    (
        function()
            RefreshAgentList(true)
        end
    )
	
    --招募代理
    Tog_AgentRecruit.onValueChanged:AddListener
    (
        function(isOn)
			if isOn == true then
				img_AgentRecruitNormal.gameObject:SetActive(false)
				img_AgentRecruitSelect.gameObject:SetActive(true)
			else
				img_AgentRecruitNormal.gameObject:SetActive(true)
				img_AgentRecruitSelect.gameObject:SetActive(false)			
			end
            RecTran_AgentRecuit.gameObject:SetActive(isOn)
        end
    )
	
    --送出招募代理
    Btn_ConfirmRecuit:AddClickListener
    (
        function()

            if G.Tool.StringHelper.IsEmpty(Ipt_AgentName.text) then
                CS.UIBubblePrompt.Show("请输入姓名", groupName)
                return
            end
            if G.Tool.StringHelper.IsEmpty(Ipt_AgentPhone.text) then
                CS.UIBubblePrompt.Show("请输入电话号码", groupName)
                return
            end
            if G.Tool.StringHelper.IsEmpty(Ipt_AgentQQ.text) then
                CS.UIBubblePrompt.Show("请输入QQ号码", groupName)
                return
            end
            if G.Tool.StringHelper.IsEmpty(Ipt_AgentWX.text) then
                CS.UIBubblePrompt.Show("请输入微信号", groupName)
                return
            end
            if G.Tool.StringHelper.IsEmpty(Ipt_AgentAlipay.text) then
                CS.UIBubblePrompt.Show("请输入支付宝号", groupName)
                return
            end
            if G.Tool.StringHelper.IsEmpty(Ipt_AgentNote.text) then
                CS.UIBubblePrompt.Show("请输入说明信息", groupName)
                return
            end

            local sendMsg = { }
            sendMsg.AreaID = G.GameConfig.GameSiteID
            sendMsg.Name = Ipt_AgentName.text
            sendMsg.Tel = Ipt_AgentPhone.text
            sendMsg.QQ = Ipt_AgentQQ.text
            sendMsg.WXNo = Ipt_AgentWX.text
            sendMsg.Alipay = Ipt_AgentAlipay.text
            sendMsg.Memo = Ipt_AgentNote.text
            G.NetQ.SendMsg(G.Proto.BClass.Hall, G.Proto.Hall.ApplyAgentID, sendMsg)
        end
    )
	
    --關閉回報頁面
    Btn_CloseReport:AddClickListener
    (
        function()
            RecTran_reportAgent.gameObject:SetActive(false)
        end
    )
	
    --送出舉報內容
    Btn_ReportAgentSubmit:AddClickListener
    (
        function()
            if G.Tool.StringHelper.IsEmpty(Ipt_ReportText.text) then
                CS.UIBubblePrompt.Show("请输入举报内容", groupName)
                return
            end
            if G.Tool.StringHelper.IsEmpty(Ipt_ReportAgentWX.text) then
                CS.UIBubblePrompt.Show("请输入代理微信号", groupName)
                return
            end

            local sendMsg = { }
            sendMsg.AreaID = G.GameConfig.GameSiteID
            sendMsg.AgentName = Ipt_ReportAgentWX.text
            sendMsg.Content = Ipt_ReportText.text
            G.NetQ.SendMsg(G.Proto.BClass.Hall, G.Proto.Hall.ReportAgentID, sendMsg)
        end
    )
	
    --複製QQ
    Btn_ContactAgentQQCopy:AddClickListener
    (
        function()
            CS.Utility.CopyText(Txt_ContactAgentQQ.text)
            CS.UIBubblePrompt.Show("已复制代理资讯,3秒后自动打开QQ", groupName)
			
            local sequence = CS.DG.Tweening.DOTween.Sequence()
            sequence:AppendInterval(2)
            sequence:AppendCallback( function()
                CS.UnityEngine.Application.OpenURL("mqqwpa://im/chat?chat_type=wpa&uin=" .. Txt_ContactAgentQQ.text)
            end )
            sequence:AppendInterval(2)
            sequence:AppendCallback( function()
                 if(pause) then
                    pause=false;
                 else   
                    CS.UnityEngine.Application.OpenURL("https://example.invalid/download/")
                 end
            end )
        end
    )
	
    --複製維信
    Btn_ContactAgentWXCopy:AddClickListener
    (
        function()
            CS.Utility.CopyText(Txt_ContactAgentWX.text)
            CS.UIBubblePrompt.Show("已复制代理资讯,3秒后自动打开微信", groupName)
			
            local sequence = CS.DG.Tweening.DOTween.Sequence()
            sequence:AppendInterval(2)
            sequence:AppendCallback( function()
                CS.UnityEngine.Application.OpenURL("weixin://")
            end )
            sequence:AppendInterval(2)
            sequence:AppendCallback( function()
                 if(pause) then
                    pause=false;
                 else   
                    CS.UnityEngine.Application.OpenURL("https://example.invalid/")
                 end
            end )
        end
    )

    Btn_ContactAgentAlipayCopy:AddClickListener
    (
        function()
            CS.Utility.CopyText(Txt_ContactAgentAlipay.text)
    		CS.UIBubblePrompt.Show("已复制代理资讯,3秒后自动打开支付宝", groupName)
			
            local sequence = CS.DG.Tweening.DOTween.Sequence()
            sequence:AppendInterval(2)
            sequence:AppendCallback( function()
                CS.UnityEngine.Application.OpenURL("alipays://")
            end )
            sequence:AppendInterval(2)
            sequence:AppendCallback( function()
                 if(pause) then
                    pause=false;
                 else   
                    CS.UnityEngine.Application.OpenURL("https://example.invalid/login/index.htm?goto=https%3A%2F%example.invalid%2Fportal%2Fi.htm")
                 end
            end )
        end
    )

    Btn_CloseContactAgent:AddClickListener
    (
        function()
            RecTran_ContactAgent.gameObject:SetActive(false)
        end
    )

    Btn_ShowReportAgent:AddClickListener
    (
        function()
            RecTran_ContactAgent.gameObject:SetActive(false)
            RecTran_reportAgent.gameObject:SetActive(true)
        end
    )
end


    --支付點擊
function ConfirmOnlinePay(currentMoneyAmount)
	local _payType,gwid = GetCurrentPayType()
	if G.GameConfig.GetServerOption() == 1 or G.GameConfig.GetServerOption() == 2 then                
		ShowBubblePrompt("方舟:" .. _payType .. " gwid:" .. gwid)
	end
	
	nowPayConfig = GetNowPayConfig()
	
	if nowPayConfig == nil then                
		-- 检查充值资料有错误
		ShowErrorMessage()
		return
	end
	
	local aconfig = G.Tool.TableHelper.Find(nowPayConfig, function(v) return v.typeID == _payType and v.gwid==gwid  end)[1];
	if (aconfig == nil) then                
		-- 检查充值资料有错误
		ShowErrorMessage()
		return
	end
	
	-- 檢查輸入金額是否相符
	local isFind = false
	local inputValue = currentMoneyAmount
	local aconfigValue = G.Tool.TableHelper.Find(nowPayConfig, function(v) return v.typeID == _payType and v.gwid==gwid end)[1].amounts
	for _, v in pairs(aconfigValue) do
		local btnamt = math.modf(v.amount / 100)
		if inputValue == btnamt then
			isFind = true
			break
		end
	end
	
	-- 检查充值资料有错误
	if isFind == false then
		-- 检查充值资料有错误
		ShowErrorMessage()
		return
	end
	
	local sendMsg = { }
	local pt = _payType

	sendMsg.PayTypeID = tonumber(pt)
	sendMsg.Amount = currentMoneyAmount
	LastPayType = tonumber(pt)
	LastPayGWID=tonumber(gwid)
	
	CS.UILoadingData.Show("正在创建订单,请稍后...", 10,
	(
	function()
		CS.UIBubblePrompt.Show("创建订单失败", groupName)
	end
	))
	
	G.NetQ.SendMsg(G.Proto.BClass.Hall, G.Proto.Hall.CreatePayOrderID, sendMsg)
end

function ProcessPayList()
    recTran__Loading.gameObject:SetActive(false);
    CS.UILoadingData.Hide()
    G.Tool.UILoading.Hide()
    loadChargeAmountUI()
end

function ProcessAmtList(data)
    if(data=="" or data==nil)then
        CS.UIBubblePrompt.Show("支付渠道忙碌中请稍后再试...", groupName)
        CS.WindowManager.Instance:CloseWindow("UIRecharge", false)
        return
    end

    if(data.data == nil or data.data == "")then
        CS.UIBubblePrompt.Show("支付渠道忙碌中请稍后再试...", groupName)
        CS.WindowManager.Instance:CloseWindow("UIRecharge", false)
        return
    end
	
	recTran__Loading.gameObject:SetActive(false);
	CS.UILoadingData.Hide()

	-- 只有需要显示充值才加载充值类型
	if (G.Service.UIFlag.IsShowOnlinePay() == true) then
		local types = apiaconfig
		G.Tool.UILoading.Hide()
		recTran__Loading.gameObject:SetActive(false);

		-- 修正當開啟的號碼非連號會掛掉的問題 by Bob
		local index = 1;
		for i = 1, tablelength(types), 1 do
			if index == 1 then
				loadChargeAmountUI()
			end
			index = index + 1;
		end
	end
end

--指定使用内建浏览器开启
function ProcessOrderRedirctRet(data)
    if(data=="" or data==nil)then
        CS.UIBubblePrompt.Show("支付渠道忙碌中请稍后再试...", groupName)
        CS.WindowManager.Instance:CloseWindow("UIRecharge", false)
        return
    end

    if(data.data == nil or data.data == "")then
        CS.UIBubblePrompt.Show("支付渠道忙碌中请稍后再试...", groupName)
        CS.WindowManager.Instance:CloseWindow("UIRecharge", false)
        return
    end
	
    -- Android
    if CS.UnityEngine.Application.platform == CS.UnityEngine.RuntimePlatform.Android or CS.UnityEngine.Application.platform == CS.UnityEngine.RuntimePlatform.WindowsEditor then
       if(string.find(data.data, 'n.href="', 1, true)~=nil)then          
            print("用解析URL ")
            local startindex=string.find(data.data, 'n.href="', 1, true)+8;
            local tmpstr=G.Tool.StringHelper.SubString(data.data,startindex,G.Tool.StringHelper.length(data.data)-startindex);       
            --雙引號計算多一個   
            local Len=string.find(tmpstr, '";</script>', 1, true)-1;                       
            local url=G.Tool.StringHelper.SubString(tmpstr,1,Len);
            print("DirPayUrl",url)
            CS.UnityEngine.Application.OpenURL(url)
        elseif(string.find(data.data, 'n.replace(\'', 1, true)~=nil)then          
            print("Replace用解析URL ");
            local startindex=string.find(data.data, 'n.replace(\'', 1, true)+11;
            local tmpstr=G.Tool.StringHelper.SubString(data.data,startindex,G.Tool.StringHelper.length(data.data)-startindex);  
            local Len=string.find(tmpstr, '\');</script>', 1, true)-1;                       
            local url=G.Tool.StringHelper.SubString(tmpstr,1,Len);
            print("DirPayUrl",url)
            CS.UnityEngine.Application.OpenURL(url)
        else
            print("NO IP Redirect ")
            ProcessOrderRet(data);
        end
        
        return
    end
    
    -- IOS
    if CS.UnityEngine.Application.platform == CS.UnityEngine.RuntimePlatform.IPhonePlayer or CS.UnityEngine.Application.platform == CS.UnityEngine.RuntimePlatform.OSXEditor  then      
        if(string.find(data.data, 'n.href="', 1, true)~=nil)then          
            print("用解析URL ")
            local startindex=string.find(data.data, 'n.href="', 1, true)+8;
            local tmpstr=G.Tool.StringHelper.SubString(data.data,startindex,G.Tool.StringHelper.length(data.data)-startindex);       
            --雙引號計算多一個   
            local Len=string.find(tmpstr, '";</script>', 1, true)-1;                       
            local url=G.Tool.StringHelper.SubString(tmpstr,1,Len);
            print("DirPayUrl",url)
            CS.UnityEngine.Application.OpenURL(url)
         elseif(string.find(data.data, 'n.replace(\'', 1, true)~=nil)then          
            print("Replace用解析URL ");
            local startindex=string.find(data.data, 'n.replace(\'', 1, true)+11;
            local tmpstr=G.Tool.StringHelper.SubString(data.data,startindex,G.Tool.StringHelper.length(data.data)-startindex);  
            local Len=string.find(tmpstr, '\');</script>', 1, true)-1;                      
            local url=G.Tool.StringHelper.SubString(tmpstr,1,Len);
            print("DirPayUrl",url)
            CS.UnityEngine.Application.OpenURL(url)
        else
            ProcessOrderRet(data);
        end
    end
end

function HideWebView()
	if (curWebView ~= nil) then
		local wb = RecTran_WebGO:GetComponent("UniWebView")
		if (wb ~= nil) then
			wb:Hide()
		end
		RecTran_WebPanel.gameObject:SetActive(false)
	end
end

function ShowWebView()
	if (curWebView ~= nil) then
		local wb = RecTran_WebGO:GetComponent("UniWebView")
		if (wb ~= nil) then
			wb:Show()
		end
		RecTran_WebPanel.gameObject:SetActive(true)
	end
end

--指定使用WEBVIEW开启
function ProcessOrderRet(data)
	if(data=="" or data==nil)then
        CS.UIBubblePrompt.Show("支付渠道忙碌中请稍后再试...", groupName)
        CS.WindowManager.Instance:CloseWindow("UIRecharge", false)
        return
    end

    if(data.data == nil or data.data == "")then
        CS.UIBubblePrompt.Show("支付渠道忙碌中请稍后再试...", groupName)
        CS.WindowManager.Instance:CloseWindow("UIRecharge", false)
        return
    end
	
    local function GoWebView(payhtml)
		CS.UILoadingData.Hide()
		RecTran_WebPanel.gameObject:SetActive(true)
            
		local webView = RecTran_WebGO:GetComponent("UniWebView")
		if (webView == nil) then
			webView = RecTran_WebGO.gameObject:AddComponent(typeof(CS.UniWebView))
		end
		webView:CleanCache()
		CS.UILoadingData.Show("正在启动支付,请稍后...", 5)

		-- 4个参数 分别为 距离上边距离，左边距离，下边距离，右边距离
		local screenWidth = CS.UniWebViewHelper.screenWidth * 0.5
		local screenHeight = CS.UniWebViewHelper.screenHeight * 0.5
		local rectWidth = RecTran_WebPanel.rect.width * 0.5
		local rectHeight = RecTran_WebPanel.rect.height * 0.5
		local scale = screenHeight / rectHeight
		local top = math.modf((rectHeight -(RecTran_WebView.rect.height * 0.5 + RecTran_WebView.anchoredPosition.y)) * scale)
		local bottom = math.modf((rectHeight -(RecTran_WebView.rect.height * 0.5 - RecTran_WebView.anchoredPosition.y)) * scale)

		scale = screenWidth / rectWidth
		local left = math.modf((rectWidth -(RecTran_WebView.rect.width * 0.5 - RecTran_WebView.anchoredPosition.x)) * scale)
		local right = math.modf((rectWidth -(RecTran_WebView.rect.width * 0.5 + RecTran_WebView.anchoredPosition.x)) * scale)
		-- print(top,left,bottom,right)
		webView.insets = CS.UniWebViewEdgeInsets(top, left, bottom, right)
		webView:OnLoadComplete('+', OnLoadComplete)
		webView:OnReceivedMessage('+', OnReceivedMessage)
		-- 按下返回鍵不關掉webview，\Assets\FrameWork\XLuaWebViewExport中加上typeof(UniWebView.WebViewShouldCloseDelegate)
		--webView:OnWebViewShouldClose('+', OnWebViewShouldClose)

		-- 加入外部协议白名单
		for i = 1, #schemes do
			webView:AddUrlScheme("xy:" .. schemes[i])
		end

		-- 载入页面时不显示loading
		--webView:SetShowSpinnerWhenLoading(false)
		webView.toolBarShow = false

		webView:LoadHTMLString(payhtml,nil)
		curWebView = webView
		isloadpayurl = false
		isAppError = false
    end
	
	-- Android
	if CS.UnityEngine.Application.platform == CS.UnityEngine.RuntimePlatform.Android or CS.UnityEngine.Application.platform == CS.UnityEngine.RuntimePlatform.WindowsEditor then
		-- local function WritePay(payhtml)
		-- CS.UILoadingData.Hide()
		-- path = example.invalid.Path.Combine(CS.UnityEngine.Application.dataPath, tostring(os.time()) .. ".html");
		-- fileStream_Open = example.invalid.FileStream(path, example.invalid.FileMode.OpenOrCreate);
		-- streamWriter2 = example.invalid.StreamWriter(fileStream_Open, CS.System.Text.UTF8Encoding(true));
		-- streamWriter2:Write(payhtml);
		-- streamWriter2:Flush();
		-- streamWriter2:Close();			
		-- w = CS.UnityEngine.WWW(path);
		-- CS.UnityEngine.Application.OpenURL(w.url);
		-- end 
        
        _PayCallBack=GoWebView;
        PaymentPass(data.data,GoWebView);
		return
	end
	
	-- IOS
	if CS.UnityEngine.Application.platform == CS.UnityEngine.RuntimePlatform.IPhonePlayer or CS.UnityEngine.Application.platform == CS.UnityEngine.RuntimePlatform.OSXEditor  then
        _PayCallBack=GoWebView;        
        PaymentPass(data.data,GoWebView);
        return
	end
	
	CS.UIBubblePrompt.Show("支付渠道忙碌中请稍后再试...", groupName)	
end

function PaymentPass(data,p)
	if(string.find(data, 'example.invalid', 1, true)~=nil)then
		local startindex=string.find(data, 'example.invalid', 1, true)-8;
		local tmpstr=G.Tool.StringHelper.SubString(data,startindex,G.Tool.StringHelper.length(data)-startindex);
		local Len=string.find(tmpstr, '\';</script>', 1, true)-1;           
		local url=G.Tool.StringHelper.SubString(tmpstr,1,Len);
		print("ali url",url)
		CS.UILoadingData.Hide()
		CS.UnityEngine.Application.OpenURL(url);
	elseif(string.find(data, 'tiaozhuan', 1, true)~=nil)then
		local startindex=string.find(data, 'example.invalid', 1, true)-8;
		local tmpstr=G.Tool.StringHelper.SubString(data,startindex,G.Tool.StringHelper.length(data)-startindex);
		--雙引號計算多一個
		local Len=string.find(tmpstr, '";', 1, true)-1; 
		local url=G.Tool.StringHelper.SubString(tmpstr,1,Len);
		print("tiaozhuan url",url)
		if(CS.UnityEngine.Application.platform == CS.UnityEngine.RuntimePlatform.IPhonePlayer or CS.UnityEngine.Application.platform == CS.UnityEngine.RuntimePlatform.OSXEditor)then
			DirPayUrl=url;
			GetProxyRequest(url, ProcessPayRet);    
		else
			CS.UILoadingData.Hide()
			CS.UnityEngine.Application.OpenURL(url);   
		end
	elseif(string.find(data, 'n.href="', 1, true)~=nil)then          
		print("用解析URL ")
		local startindex=string.find(data, 'n.href="', 1, true)+8;
		local tmpstr=G.Tool.StringHelper.SubString(data,startindex,G.Tool.StringHelper.length(data)-startindex);       
		--雙引號計算多一個   
		local Len=string.find(tmpstr, '";</script>', 1, true)-1;                       
		local url=G.Tool.StringHelper.SubString(tmpstr,1,Len);
		print("DirPayUrl",url)
		CS.UILoadingData.Hide()
		CS.UnityEngine.Application.OpenURL(url)
	 elseif(string.find(data, 'n.replace(\'', 1, true)~=nil)then          
		print("Replace用解析URL ");
		local startindex=string.find(data, 'n.replace(\'', 1, true)+11;
		local tmpstr=G.Tool.StringHelper.SubString(data,startindex,G.Tool.StringHelper.length(data)-startindex);  
		local Len=string.find(tmpstr, '\');</script>', 1, true)-1;                       
		local url=G.Tool.StringHelper.SubString(tmpstr,1,Len);
		print("DirPayUrl",url)
		CS.UILoadingData.Hide()
		CS.UnityEngine.Application.OpenURL(url)
	else
		print("NO IP Process ")
		p(data);
	end
end

--循环解析HTML
function ProcessPayRet(data)
	print("<color=yellow>ProcessPayRet</color>")
    print(url)
    
    if(CallPayCount>5)then
		_PayCallBack=nil;
		CallPayCount=0;
		DirPayUrl="";
		CS.UILoadingData.Hide()
		CS.UILoadingData.Show("支付渠道忙碌中请稍后再试...", 5)
        return
    end

	if(data=="" or data==nil)then
		CallPayCount=CallPayCount+1
        GetProxyRequest(DirPayUrl, ProcessPayRet)
        return 
    end

    if(data.data == nil or data.data == "")then
    	CallPayCount=CallPayCount+1
        GetProxyRequest(DirPayUrl, ProcessPayRet)
        return 
    end
    print("<color=yellow>Call PayCallBack </color>")
    print(data.data)
	_PayCallBack(data.data);
	_PayCallBack=nil;
	CallPayCount=0;
	DirPayUrl="";
end

function RefreshAgentList(refresh)
    local sendMsg = { }
    sendMsg.AreaID = G.GameConfig.GameSiteID

    if G.Agent.GetAgentInfo() == nil or refresh then
        G.NetQ.SendMsg(G.Proto.BClass.Hall, G.Proto.Hall.GetAgentListID, sendMsg)
    else
        CreateAgentList()
    end
end

function CreateAgentList()
    local agentList = G.Agent.GetAgentInfo()
	
	if #agentList > 0 then
		Txt_NoDataTips.gameObject:SetActive(false)
	else
		Txt_NoDataTips.gameObject:SetActive(true)	
	end
	
    for i = 1, #agentList, 1 do
        local agentItem = CS.UnityEngine.GameObject.Instantiate(Btn_AgentItem.gameObject)
        agentItem.transform:SetParent(RecTran_AgentList.transform)
        agentItem.transform.localScale = CS.UnityEngine.Vector3(1, 1, 1)
        agentItem.transform.localPosition = CS.UnityEngine.Vector3.zero

        agentItem.transform.gameObject:SetActive(true)
        local txtName = agentItem.transform:Find("Name"):GetComponent("Text")
        txtName.text = agentList[i].Name
		
        local imgQQ = agentItem.transform:Find("Grid/ImageQQ")
        imgQQ.gameObject:SetActive(agentList[i].QQ ~= "" and agentList[i].QQ ~= "0")
        local imgWXNo = agentItem.transform:Find("Grid/ImageWXNo")
        imgWXNo.gameObject:SetActive(agentList[i].WXNo ~= "" and agentList[i].WXNo ~= "0")
        local imgAlipay = agentItem.transform:Find("Grid/ImageAlipay")
        imgAlipay.gameObject:SetActive(agentList[i].Alipay ~= "" and agentList[i].Alipay ~= "0")
		
        agentItem.transform:GetComponent("Button"):AddClickListener( function()

            RecTran_ContactAgent.gameObject:SetActive(true)
            Ipt_ReportAgentWX.text = txtName.text

            Txt_ContactAgentQQ.text = agentList[i].QQ
            Txt_ContactAgentName.text = agentList[i].Name
            Txt_ContactAgentWX.text = agentList[i].WXNo
            Txt_ContactAgentAlipay.text = agentList[i].Alipay
			
            if agentList[i].QQ == "" or agentList[i].QQ == "0" then
                Txt_ContactAgentRootQQ.gameObject:SetActive(false)
            else
                Txt_ContactAgentRootQQ.gameObject:SetActive(true)
            end

            if agentList[i].WXNo == "" or agentList[i].WXNo == "0" then
                Txt_ContactAgentRootWX.gameObject:SetActive(false)
            else
                Txt_ContactAgentRootWX.gameObject:SetActive(true)
            end

            if agentList[i].Alipay == "" or agentList[i].Alipay == "0" then
                Txt_ContactAgentRootAlipay.gameObject:SetActive(false)
            else
                Txt_ContactAgentRootAlipay.gameObject:SetActive(true)
            end

        end )
    end
end

-- 拦截代理信息
G.NetQ.RegMsgHook(G.Proto.BClass.Hall, G.Proto.Hall.ProxyRequestRetID, function(data)
	if data.type == "2" then
		ProxyRequestRetCallfun(data)
	end
end, groupName )

function GetProxyRequest(url,callfun)	
	ProxyRequestRetCallfun = callfun
	
	sendata={};
	sendata.data=url;
	sendata.type=2;
	G.NetQ.SendMsg(G.Proto.BClass.Hall, G.Proto.Hall.ProxyRequestID, sendata)
end

function ShowBubblePrompt(text)
    RecTran_BubblePrompt.gameObject:SetActive(true)

    local fadeTime = 0.2
    local showTime = 1.0
    local objColor

    objColor = Img_BubblePrompt.color
    CS.UnityEngine.Color(objColor.r, objColor.g, objColor.b, 0)
    if sqs2 ~= nil then sqs2:Kill() end
    sqs2 = CS.DG.Tweening.DOTween.Sequence()
    sqs2:Append(Img_BubblePrompt:DOColor(CS.UnityEngine.Color(objColor.r, objColor.g, objColor.g, 1), fadeTime))
    sqs2:AppendInterval(showTime)
    sqs2:Append(Img_BubblePrompt:DOColor(CS.UnityEngine.Color(objColor.r, objColor.g, objColor.g, 0), fadeTime))
	
    txt_BubblePrompt.text = text
    objColor = txt_BubblePrompt.color
    CS.UnityEngine.Color(objColor.r, objColor.g, objColor.b, 0)
    if sqs1 ~= nil then sqs1:Kill() end
    sqs1 = CS.DG.Tweening.DOTween.Sequence()
    sqs1:Append(txt_BubblePrompt:DOColor(CS.UnityEngine.Color(objColor.r, objColor.g, objColor.g, 1), fadeTime))
    sqs1:AppendInterval(showTime)
    sqs1:Append(txt_BubblePrompt:DOColor(CS.UnityEngine.Color(objColor.r, objColor.g, objColor.g, 0), fadeTime))
    sqs1:AppendCallback( function()
        RecTran_BubblePrompt.gameObject:SetActive(false)
    end )
end

function Update()
	if RecTran_WebPanel.gameObject.activeSelf == true then
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
    print("OnLoadComplete ...................................", success, errorMessage)

    if (isloadpayurl == false) then
        isloadpayurl = true
        if (success) then
            CS.UILoadingData.Hide()
            webView:Show()
        else
            CS.UILoadingData.Hide()
            print("加载webview失败:", errorMessage)
            webView:Hide()
            CS.UnityEngine.Object.Destroy(webView)
			curWebView = nil
        end
    end

    -- 顯示錯誤訊息
    if success == false then
        _, q = string.find(errorMessage, "启动第三方app失败")
        -- 開啟APP錯誤
        if q ~= nil then
            -- 第一次為自動開啟失敗
            if isAppError == false then
                isAppError = true
                -- 玩家點擊開啟失敗
            else
                ShowBubblePrompt("启动支付APP失败，请确保您手机上安装了相应的客户端。")
            end
		-- 其他錯誤
        else
            print("OnLoadComplete error:", errorMessage)
        end
    end
end

function IsUrlThirdScheme(url)
    for i = 1, #schemes do
        if (string.find(url, schemes[i])) then
            return true
        end
    end
    return false
end

function AppPause(isPause)
    local wb = RecTran_WebGO:GetComponent("UniWebView")
    if (wb ~= nil and wb.currentUrl) then
        if IsUrlThirdScheme(wb.currentUrl) then
            CloseWebView()
        end
    end

     if isPause then
        pause=true;
     end
end
 

-- 脚本删除时调用，释放变量，释放资源
function OnDestroy()
    if (CS.AppManager.Instance) then
        CS.AppManager.Instance.OnAppPause = CS.AppManager.Instance.OnAppPause - AppPause
    end

    -- 回收当前页面注册的消息
    G.NetQ.RemoveMsgHookByGroup(groupName)

    -- 清空当前界面的浮动提示消息
    CS.UIBubblePrompt.ClearPrompt(groupName)
	
	G.Service.Msg.ClaerWebViewCB()	
end  

function desConfig(configData)
	local aconfig={}
	local pi=0
	-- 資料
	local results = nil
	local allpaymentdata = nil

	local newdata = Json.decode(configData.data)
	if newdata == nil then
        CS.UIBubblePrompt.Show("支付渠道忙碌中请稍后再试...", groupName)
		return pi, nil
	end	

	for _, v1 in pairs(newdata.data.payAmountInfo) do
		local paydata = {}
		paydata.typeID = v1.typeID
		paydata.payType = v1.payType
		paydata.minAmount = v1.minAmount
		paydata.maxAmount = v1.maxAmount
		paydata.status = v1.status
		paydata.gwid = v1.gwid
		paydata.isRange = v1.isRange
		
		paydata.amounts = { };
		if v1.amountsPoint ~= nil then
			for _, v2 in pairs(v1.amountsPoint) do
				local data2 = {}
				data2.id = v2.id
				data2.amount = tonumber(v2.amount) * 100
				data2.pointAmount = tonumber(v2.pointAmount)
				data2.bouns = tonumber(v2.bouns)
				data2.payTypeID = v2.payTypeID
				table.insert(paydata.amounts, data2)
			end
		end
		
		if #v1.amountsPoint == 0 then
			local amounts = G.Tool.StringHelper.Split(v1.amounts, ",")
			for _, v2 in pairs(amounts) do
				local data2 = {}
				data2.amount = tonumber(v2)
				data2.pointAmount = math.modf(tonumber(v2) / 100)
				data2.bouns = 0
				table.insert(paydata.amounts, data2)
			end
		end
		
		table.insert(aconfig, paydata)
		pi = pi + 1
	end
	
	return pi, aconfig
end

local isInitPayConfig = false
local tempApiaconfig = {}
function InitPayConfig()
	-- 第二次直接拿暫存的資料
	if isInitPayConfig == true then
		apiaconfig = tempApiaconfig
		return	
	end
	
	data = G.Service.ReCharge.GetPayConfig()
    if(data=="" or data==nil)then
        CS.UIBubblePrompt.Show("支付渠道忙碌中请稍后再试...", groupName)
        return
    end

    if(data.data == nil or data.data == "")then
        CS.UIBubblePrompt.Show("支付渠道忙碌中请稍后再试...", groupName)
        return
    end
	
	local pi=0
	pi, apiaconfig = desConfig(data)
	
	--- endregion
	if(pi==0)then
        CS.UIBubblePrompt.Show("无支付清单,请稍后再试...", groupName)
		return
	end    
	
	-- 紀錄第一次的資料
	isInitPayConfig = true
	tempApiaconfig = apiaconfig
	
	G.Tool.TableHelper.Print("apiaconfig", apiaconfig)
end

function GetNowPayConfig()
	local dataNow = G.Service.ReCharge.GetPayConfig()
    if(dataNow=="" or dataNow==nil)then
        return nil
    end

    if(dataNow.data == nil or dataNow.data == "")then
        return nil
    end
	
	local pi=0
	pi, apiaconfigNow = desConfig(dataNow)
	
	--- endregion
	if(pi==0)then
        return nil
	end    
	
	G.Tool.TableHelper.Print("now apiaconfig", apiaconfigNow)
	
	return apiaconfigNow
end

function SetToggleTypeButton(gb)
	gb.gameObject.transform:SetParent(this.transform)
	gb.gameObject.transform:SetParent(RecTran_ToggleGroup)
	local pos = gb.gameObject.transform.localPosition
	pos.z = -1
	gb.gameObject.transform.localPosition = pos
end


-- 界面被打开时接收界面参数
function RefreshWindowData(windowData)

	InitPayConfig()
	
	InitOnlineSetingData()

    ----預設加仔原本內容
    local leftMenu = { }
	
    -- 設置資料
    local setingData = {
        { },-- IOS
        { idx = 1, isshow = G.Service.UIFlag.IsShowOnlinePay(), detailgb = RecTran_OnlinePayDetail },-- 在線支付
        { idx = 2, isshow = G.Service.UIFlag.IsShowAgentPay(), gb = Tog_AgentPay, detailgb = RecTran_AgentPayDetail },-- 代理支付
        { idx = 3, isshow = G.Service.UIFlag.IsShowAgentApply(), gb = Tog_AgentRecruit, detailgb = RecTran_AgentRecuit },-- 代理招商
    }
	
	RecTran_OnlinePayDetail.gameObject:SetActive(false)
	RecTran_AgentPayDetail.gameObject:SetActive(false)
	RecTran_AgentRecuit.gameObject:SetActive(false)
	    
    -- 排序		
    local order = G.User.GetCurrentUser().UserData.UISort
    if order == nil or order == "" then
        print("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! no UISort data")

        order = { 1, 3, 2, 4 }
    else
        order = { }
        value_1 = G.Tool.StringHelper.SubString(G.User.GetCurrentUser().UserData.UISort, 1, 1)
        value_2 = G.Tool.StringHelper.SubString(G.User.GetCurrentUser().UserData.UISort, 3, 1)
        value_3 = G.Tool.StringHelper.SubString(G.User.GetCurrentUser().UserData.UISort, 5, 1)
        value_4 = G.Tool.StringHelper.SubString(G.User.GetCurrentUser().UserData.UISort, 7, 1)

        table.insert(order, value_1) -- 不可以動        
        table.insert(order, value_2)
        table.insert(order, value_3)
        table.insert(order, value_4)
    end
	
    local isFirst = true
    for i = 2, #order, 1 do
        menu = setingData[tonumber(order[i])]

		--將在線支付拆出到左列
		if menu.idx == 1 then
			-- 顯示在線支付
			for _, data in pairs(onlineSetingData) do
				if data.gb ~= nil then				
					if (menu.isshow == false) then
						data.gb.gameObject:SetActive(false)
					else
						data.gb.gameObject:SetActive(true)
					
						local isFind = false
						
						if tempApiaconfig~=nil then
							--G.Tool.TableHelper.Print(tempApiaconfig) 
							for _, configData in pairs(tempApiaconfig) do
								if tostring(configData.typeID) == tostring(data.index) then
									isFind = true
									break
								end
							end
						end
												
						-- 有找到該類型資料
						if isFind == true then
							SetToggleTypeButton(data.gb)
						
							-- 是左邊分頁的第一筆資料
							if isFirst == true then									
								data.gb.isOn = true
								data.gb.gameObject.transform.parent:GetComponent("ToggleGroup"):NotifyToggleOn(data.gb)
								
								data.normal.gameObject:SetActive(false)
								data.select.gameObject:SetActive(true)

								isFirst = false
								menu.detailgb.gameObject:SetActive(true)                                
								-- 随机抽选机制（将在点选时做现有清单随机抽选送出）
								local paylist=G.Tool.TableHelper.Find(tempApiaconfig, function(v) return tostring(v.typeID) == tostring(data.index) end);                                
								local len=tablelength(paylist);   
								--抽选号码                             
								local assignnum= math.random(1,len);  
								--设定支付方式（PaytypeID）与厂商ID（GWID）                              
								SetCurrentPayType(data.index, paylist[assignnum].gwid)
								payConfig = G.Service.ReCharge.GetPayConfig()			
								ProcessAmtList(payConfig)
								SetIconAndName(data.gb)
							else
								data.normal.gameObject:SetActive(true)
								data.select.gameObject:SetActive(false)
							end
						else					
							data.gb.gameObject:SetActive(false)
						end
					end
				end
			end
		-- 其他支付類型
		else		
			if (menu.isshow == true) then
				SetToggleTypeButton(menu.gb)
				
				local normalObj = menu.gb.transform:Find("Normal")
				local selectObj = menu.gb.transform:Find("Select")
				
                -- print("idx:"..menu.idx,"true")
				menu.gb.gameObject:SetActive(true)
				
				-- 是左邊分頁的第一筆資料
				if (isFirst) then	
					isFirst = false

					menu.gb.isOn = true
					menu.gb.gameObject.transform.parent:GetComponent("ToggleGroup"):NotifyToggleOn(menu.gb)
					menu.detailgb.gameObject:SetActive(true)
					
					normalObj.gameObject:SetActive(false)
					selectObj.gameObject:SetActive(true)
				else
					normalObj.gameObject:SetActive(true)
					selectObj.gameObject:SetActive(false)
				end
			else
                print("idx:"..menu.idx,"false")
				menu.gb.gameObject:SetActive(false)
			end
		end
    end
	
    Txt_PlayerID.text = tostring(user.UserID)
    RefreshAgentList(false)
end



function EscapeWindow()
    if RecTran_WebPanel.gameObject.activeSelf then
        CloseWebView()
    elseif RecTran_reportAgent.gameObject.activeSelf then
        RecTran_reportAgent.gameObject:SetActive(false)
    elseif RecTran_ContactAgent.gameObject.activeSelf then
        RecTran_ContactAgent.gameObject:SetActive(false)
    else
        CS.WindowManager.Instance:CloseWindow("UIRecharge", false)
    end
end


function tablelength(T)
    local count = 0
    for _ in pairs(T) do count = count + 1 end
    return count
end


-- 获取代理回调
G.NetQ.RegMsgHook(G.Proto.BClass.Hall, G.Proto.Hall.GetAgentListRetID, function(receiveMsg)
    RecTran_AgentList.transform:DestoryAllChildren(false)
    G.Agent.SetAgentInfo(receiveMsg.AgentList)
    CreateAgentList()
end , groupName) 

-- 代理招商申请回调
G.NetQ.RegMsgHook(G.Proto.BClass.Hall, G.Proto.Hall.ApplyAgentRetID, function(receiveMsg)
    if receiveMsg.Code == 1 then
        CS.UIBubblePrompt.Show("申请成功", groupName)
    else
        CS.UIBubblePrompt.Show(receiveMsg.Message, groupName)
    end
end , groupName) 


-- 举报代理
G.NetQ.RegMsgHook(G.Proto.BClass.Hall, G.Proto.Hall.ReportAgentRetID, function(receiveMsg)
    if receiveMsg.Code == 1 then
        CS.UIBubblePrompt.Show("举报成功", groupName)
    else
        CS.UIBubblePrompt.Show(receiveMsg.Message, groupName)
    end
end , groupName)

		
-- 创建订单返回
G.NetQ.RegMsgHook(G.Proto.BClass.Hall, G.Proto.Hall.CreatePayOrderRetID, function(receiveMsg)
    if receiveMsg.code == 1 then
		if not G.Env.IsWindows() then
            if ( LastPayType ~= 6) then
            	local url = string.format(G.GameConfig.ChargeDomain, receiveMsg.OrderID,LastPayGWID)
                print("--------------- Normal url", url,G.GameConfig.ChargeDomain)
		      
				local _payType = tostring(GetCurrentPayType())
				local IsRedirect=(G.Tool.TableHelper.Find(redirecpayment, function(p) return tostring(p) == _payType; end)[1] ~= nil)
				print("IsRedirect",IsRedirect,_payType)
				-- 透过server取得网页结果
				if(IsRedirect) then
					GetProxyRequest(url, ProcessOrderRedirctRet)
				else
					GetProxyRequest(url, ProcessOrderRet)
				end
            end
        else
			CS.UILoadingData.Hide()
			CS.UIBubblePrompt.Show("只有移动客户端支持支付功能.", groupName)
        end
    else
		CS.UILoadingData.Hide()
        CS.UIBubblePrompt.Show(receiveMsg.message, groupName)
    end
end , groupName) 