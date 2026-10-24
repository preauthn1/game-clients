local Btn_Close = this.transform:Find("UIBody/Top/_Close"):GetComponent("Button")
local Tog_OnlinePay = this.transform:Find("UIBody/ToggleGroup/_OnlinePay"):GetComponent("Toggle")
local Tog_AgentPay = this.transform:Find("UIBody/ToggleGroup/_AgentPay"):GetComponent("Toggle")
local Tog_AgentRecruit = this.transform:Find("UIBody/ToggleGroup/_AgentRecruit"):GetComponent("Toggle")
local RecTran_OnlinePayDetail = this.transform:Find("UIBody/_OnlinePayDetail"):GetComponent("RectTransform")
local Txt_CashAmount = this.transform:Find("UIBody/_OnlinePayDetail/_CashAmount"):GetComponent("Text")
local Btn_ConfirmOnlinePay = this.transform:Find("UIBody/_OnlinePayDetail/_ConfirmOnlinePay"):GetComponent("Button")
local Btn_Clear = this.transform:Find("UIBody/_OnlinePayDetail/_Clear"):GetComponent("Button")
local Btn_Amount = this.transform:Find("UIBody/_OnlinePayDetail/AmountList/_Amount")

local Tog_PayTypeTemplate = this.transform:Find("UIBody/_OnlinePayDetail/PayTypeGroup/_PayTypeTemplate"):GetComponent("Toggle")
local Ipt_RechageAmount = this.transform:Find("UIBody/_OnlinePayDetail/_RechageAmount"):GetComponent("InputField")
local RecTran_AgentPayDetail = this.transform:Find("UIBody/_AgentPayDetail"):GetComponent("RectTransform")
local Txt_AgentPayTips = this.transform:Find("UIBody/_AgentPayDetail/_AgentPayTips"):GetComponent("Text")
local Txt_PlayerID = this.transform:Find("UIBody/_AgentPayDetail/bg/_PlayerID"):GetComponent("Text")
local Btn_CopyMyID = this.transform:Find("UIBody/_AgentPayDetail/_CopyMyID"):GetComponent("Button")
local Btn_AgentItem = this.transform:Find("UIBody/_AgentPayDetail/AgentList/_AgentItem"):GetComponent("Button")
local Btn_ReportAgent = this.transform:Find("UIBody/_AgentPayDetail/_ReportAgent"):GetComponent("Button")
local Btn_RefreshAgentList = this.transform:Find("UIBody/_AgentPayDetail/_RefreshAgentList"):GetComponent("Button")
local RecTran_AgentRecuit = this.transform:Find("UIBody/_AgentRecuit"):GetComponent("RectTransform")
local Btn_ConfirmRecuit = this.transform:Find("UIBody/_AgentRecuit/_ConfirmRecuit"):GetComponent("Button")
local Ipt_AgentNote = this.transform:Find("UIBody/_AgentRecuit/_AgentNote"):GetComponent("InputField")
local Ipt_AgentWX = this.transform:Find("UIBody/_AgentRecuit/_AgentWX"):GetComponent("InputField")
local Ipt_AgentQQ = this.transform:Find("UIBody/_AgentRecuit/_AgentQQ"):GetComponent("InputField")
local Ipt_AgentPhone = this.transform:Find("UIBody/_AgentRecuit/_AgentPhone"):GetComponent("InputField")
local Ipt_AgentName = this.transform:Find("UIBody/_AgentRecuit/_AgentName"):GetComponent("InputField")
local RecTran_reportAgent = this.transform:Find("UIBody/_reportAgent"):GetComponent("RectTransform")
local Btn_CloseReport = this.transform:Find("UIBody/_reportAgent/_CloseReport"):GetComponent("Button")
local Ipt_ReportAgentWX = this.transform:Find("UIBody/_reportAgent/_ReportAgentWX"):GetComponent("InputField")
local Ipt_ReportText = this.transform:Find("UIBody/_reportAgent/_ReportText"):GetComponent("InputField")
local Btn_ReportAgentSubmit = this.transform:Find("UIBody/_reportAgent/_ReportAgentSubmit"):GetComponent("Button")
local RecTran_ContactAgent = this.transform:Find("UIBody/_ContactAgent"):GetComponent("RectTransform")
local Btn_CloseContactAgent = this.transform:Find("UIBody/_ContactAgent/_CloseContactAgent"):GetComponent("Button")
local Txt_ContactAgentQQ = this.transform:Find("UIBody/_ContactAgent/_ContactAgentQQ"):GetComponent("Text")
local Txt_ContactAgentName = this.transform:Find("UIBody/_ContactAgent/_ContactAgentName"):GetComponent("Text")
local Txt_ContactAgentWX = this.transform:Find("UIBody/_ContactAgent/_ContactAgentWX"):GetComponent("Text")
local Btn_ContactAgentQQCopy = this.transform:Find("UIBody/_ContactAgent/_ContactAgentQQCopy"):GetComponent("Button")
local Btn_ContactAgentWXCopy = this.transform:Find("UIBody/_ContactAgent/_ContactAgentWXCopy"):GetComponent("Button")
local RecTran_WebGO = this.transform:Find("UIBody/_WebGO"):GetComponent("RectTransform")
local txt_labpaytips = this.transform:Find("UIBody/_OnlinePayDetail/_LabPayTips"):GetComponent("Text")


--- 以上内容为工具脚本自动生成，请不要在这之上做任何修改---

local G = require "Global"
local userdata = G.User.GetCurrentUser().UserData
local user = G.User.GetCurrentUser()
local groupName = "UIRecharge"

local payTypeTogs = { }
local amountBtns = { }
local isloadpayurl = false          -- 是否已经载入过充值页面，每次重新充值是设置为false
local showMessageBox = G.Util.async_to_sync(CS.UIMessageBox.Show)

function GetCurrentPayType()
    for i = 1, #payTypeTogs, 1 do
        if payTypeTogs[i].transform:GetComponent("Toggle").isOn then
            return tonumber(payTypeTogs[i].name)
        end
    end
end

-- 加载充值金额
function loadChargeAmountUI()
    for _, btn in pairs(amountBtns) do
        if (btn ~= nil) then
            CS.UnityEngine.GameObject.Destroy(btn)
        end
    end
    amountBtns = { }
    local aconfig = G.Service.ReCharge.GetPayAmountConfig()
    local _payType = tostring(GetCurrentPayType())
    for _, v in pairs(aconfig[_payType]) do
        local btn = CS.UnityEngine.GameObject.Instantiate(Btn_Amount.gameObject)
        btn.transform.parent = Btn_Amount.gameObject.transform.parent
        btn.transform.localScale = CS.UnityEngine.Vector3(1, 1, 1)
        btn.transform.localPosition = CS.UnityEngine.Vector3(0, 0, 0)
        btn.transform:Find("txt"):GetComponent("Text").text = v
        btn:GetComponent("Button"):AddClickListener( function()
            AddMoneyAmount(v)
        end )
        btn:SetActive(true)
        table.insert(amountBtns, btn)
    end
end

function closeWebView()
    local wb = RecTran_WebGO:GetComponent("UniWebView")
    if (wb ~= nil) then
        wb:Hide()
        CS.UnityEngine.GameObject.Destroy(wb)
    end
    RecTran_WebGO.gameObject:SetActive(false)
end

-- 初始化函数，实例化之后调用一次
function Start()
    Btn_Close:AddClickListener
    (
    function()
        CS.WindowManager.Instance:CloseWindow("UIRecharge", false)
    end
    )

    Tog_OnlinePay.onValueChanged:AddListener
    (
    function(isOn)
        RecTran_OnlinePayDetail.gameObject:SetActive(isOn)
    end
    )

    Btn_ConfirmOnlinePay:AddClickListener
    (
    function()
        local sendMsg = { }

        sendMsg.PayTypeID = GetCurrentPayType()
        sendMsg.Amount = tonumber(Ipt_RechageAmount.text)

        CS.UILoadingData.Show("正在创建订单,请稍后...", 10,
        (
        function()
            CS.UIBubblePrompt.Show("创建订单失败", groupName)
        end
        ))

        G.NetQ.SendMsg(G.Proto.BClass.Hall, G.Proto.Hall.CreatePayOrderID, sendMsg)
    end
    )

    Btn_Clear:AddClickListener
    (
    function()
        AddMoneyAmount(-1)
    end
    )


    Tog_AgentPay.onValueChanged:AddListener
    (
    function(isOn)
        RecTran_AgentPayDetail.gameObject:SetActive(isOn)
    end
    )

    Btn_CopyMyID:AddClickListener
    (
    function()
        CS.Utility.CopyText(Txt_PlayerID.text)
        CS.UIBubblePrompt.Show("复制成功", groupName)
    end
    )

    Btn_ReportAgent:AddClickListener
    (
    function()
        RecTran_reportAgent.gameObject:SetActive(true)
    end
    )

    Btn_RefreshAgentList:AddClickListener
    (
    function()
        RefreshAgentList(true)
    end
    )

    Tog_AgentRecruit.onValueChanged:AddListener
    (
    function(isOn)
        RecTran_AgentRecuit.gameObject:SetActive(isOn)
    end
    )

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
        sendMsg.Memo = Ipt_AgentNote.text

        G.NetQ.SendMsg(G.Proto.BClass.Hall, G.Proto.Hall.ApplyAgentID, sendMsg)
    end
    )

    Btn_CloseReport:AddClickListener
    (
    function()
        RecTran_reportAgent.gameObject:SetActive(false)
    end
    )

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

    Btn_ContactAgentQQCopy:AddClickListener
    (
    function()
        CS.Utility.CopyText(Txt_ContactAgentQQ.text)
        CS.UIBubblePrompt.Show("复制成功", groupName)
    end
    )

    Btn_ContactAgentWXCopy:AddClickListener
    (
    function()

        CS.Utility.CopyText(Txt_ContactAgentWX.text)
        CS.UIBubblePrompt.Show("复制成功", groupName)
    end
    )

    Btn_CloseContactAgent:AddClickListener
    (
    function()
        RecTran_ContactAgent.gameObject:SetActive(false)
    end
    )

    Ipt_RechageAmount.onEndEdit:AddListener
    (
    function()
        if G.Tool.StringHelper.IsEmpty(Ipt_RechageAmount.text) then
            Ipt_RechageAmount.text = "0"
        else
            Ipt_RechageAmount.text = tostring(G.Tool.Math.ParseInt(Ipt_RechageAmount.text))
        end
    end
    )
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

-- 获取代理回调
G.NetQ.RegMsgHook(G.Proto.BClass.Hall, G.Proto.Hall.GetAgentListRetID, function(receiveMsg)
    Btn_AgentItem.transform.parent:DestoryAllChildren(false)
    G.Agent.SetAgentInfo(receiveMsg.AgentList)
    CreateAgentList()
end , groupName) 

function CreateAgentList()
    local agentList = G.Agent.GetAgentInfo()

    for i = 1, #agentList, 1 do
        local agentItem = CS.UnityEngine.GameObject.Instantiate(Btn_AgentItem.gameObject)
        agentItem.transform.parent = Btn_AgentItem.gameObject.transform.parent
        agentItem.transform.localScale = CS.UnityEngine.Vector3(1, 1, 1)
        agentItem.transform.localPosition = CS.UnityEngine.Vector3.zero

        agentItem:SetActive(true)

        agentItem.transform:Find("Name"):GetComponent("Text").text = agentList[i].Name

        agentItem.transform:GetComponent("Button"):AddClickListener( function()
            RecTran_ContactAgent.gameObject:SetActive(true)
            Txt_ContactAgentQQ.text = agentList[i].QQ
            Txt_ContactAgentName.text = agentList[i].Name
            Txt_ContactAgentWX.text = agentList[i].WXNo
        end )
    end
end

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

            local url = string.format(G.GameConfig.ChargeDomain, user.UserID, GetCurrentPayType(), tonumber(Ipt_RechageAmount.text), receiveMsg.OrderID, G.GameConfig.GamePlatformID, G.GameConfig.GameSiteID) .. "&r=" .. os.time()
            local webView = RecTran_WebGO:GetComponent("UniWebView")

            if (webView == nil) then
                webView = RecTran_WebGO.gameObject:AddComponent(typeof(CS.UniWebView))
            end
            webView:CleanCache()
            CS.UILoadingData.Show("正在启动支付,请稍后...", 15)

            -- 4个参数 分别为 距离上边距离，左边距离，下边距离，右边距离

            RecTran_WebGO.gameObject:SetActive(true)
            
            webView.insets = CS.UniWebViewEdgeInsets(1, 1, CS.UniWebViewHelper.screenHeight - 2, CS.UniWebViewHelper.screenWidth - 2)
            -- local top =(CS.UnityEngine.Screen.height - CS.UnityEngine.Camera.main:WorldToScreenPoint(btn_closewebview.gameObject:GetComponent("RectTransform").position).y) * 2
            -- webView.insets = CS.UniWebViewEdgeInsets(G.Tool.Math.ParseInt(top), 5, 5, 5)

            webView:OnLoadComplete('+', OnLoadComplete)
            webView:OnReceivedMessage('+', OnReceivedMessage)
            -- 添加微信外部协议白名单
            webView:AddUrlScheme("xy:weixin")
            -- 添加支付宝外部协议白名单
            webView:AddUrlScheme("xy:alipays")
            -- 载入页面时不显示loading
            webView:SetShowSpinnerWhenLoading(false)
            webView.toolBarShow = false
            webView.url = url

            webView:Load()
            print("---------------url", url)
            isloadpayurl = false
        else
            CS.UILoadingData.Hide()
            CS.UIBubblePrompt.Show("只有移动客户端支持支付功能.", groupName)
        end
    else
        CS.UILoadingData.Hide()
        CS.UIBubblePrompt.Show(receiveMsg.message, groupName)
    end
end , groupName) 

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
            webView:Show()
        else
            CS.UILoadingData.Hide()
            print("加载webview失败:", errorMessage)
            webView:Hide()
            CS.UnityEngine.Object.Destroy(webView)

            CS.UIBubblePrompt.Show("启动支付失败。", groupName)
        end
    end
end

function AddMoneyAmount(amount)
    Ipt_RechageAmount.text = tostring(amount)
    local currentMoneyAmount = tonumber(Ipt_RechageAmount.text)

    if currentMoneyAmount == nil then
        currentMoneyAmount = 0
    end

    if amount == -1 then
        currentMoneyAmount = 0
    else
        currentMoneyAmount = amount
    end

    Ipt_RechageAmount.text = tostring(currentMoneyAmount)
end
 

-- 脚本删除时调用，释放变量，释放资源
function OnDestroy()

    -- 回收当前页面注册的消息
    G.NetQ.RemoveMsgHookByGroup(groupName)

    -- 清空当前界面的浮动提示消息
    CS.UIBubblePrompt.ClearPrompt(groupName)
end  

-- 界面被打开时接收界面参数
function RefreshWindowData(windowData)
    local leftMenu = { }
    table.insert(leftMenu, { isshow = G.Service.UIFlag.IsShowOnlinePay(), gb = Tog_OnlinePay, detailgb = RecTran_OnlinePayDetail })
    table.insert(leftMenu, { isshow = G.Service.UIFlag.IsShowAgentPay(), gb = Tog_AgentPay, detailgb = RecTran_AgentPayDetail })
    table.insert(leftMenu, { isshow = G.Service.UIFlag.IsShowAgentApply(), gb = Tog_AgentRecruit, detailgb = RecTran_AgentRecuit })

    local isFirst = true

    for _, menu in pairs(leftMenu) do
        if (menu.isshow == true) then
            menu.gb.gameObject:SetActive(true)
            if (isFirst) then
                menu.gb.isOn = true
                menu.gb.gameObject.transform.parent:GetComponent("ToggleGroup"):NotifyToggleOn(menu.gb)
                menu.detailgb.gameObject:SetActive(true)
                isFirst = false
            end
        else
            menu.detailgb.gameObject:SetActive(false)
            menu.gb.gameObject:SetActive(false)
        end
    end

    Ipt_RechageAmount.text = "0"

    Txt_PlayerID.text = tostring(user.UserID)
    Txt_CashAmount.text = G.Tool.UserHelper.ToCashDetail(userdata.CashAmount)
    RefreshAgentList(false)
    -- 只有需要显示充值才加载充值类型
    if (G.Service.UIFlag.IsShowOnlinePay() == true) then
        local types = G.Tool.StringHelper.Split(userdata.PaySort, ",")

        for i = 1, #types, 1 do
            local payType = CS.UnityEngine.GameObject.Instantiate(Tog_PayTypeTemplate.gameObject)
            payType.transform.parent = Tog_PayTypeTemplate.gameObject.transform.parent
            payType.transform.localScale = CS.UnityEngine.Vector3(1, 1, 1)
            payType.transform.localPosition = CS.UnityEngine.Vector3(0, 0, 0)
            payType:SetActive(true)

            if i == 1 then
                payType:GetComponent("Toggle").isOn = true
            else
                payType:GetComponent("Toggle").isOn = false
            end

            payType:GetComponent("Image"):ResetSpriteByName(CS.AppDefine.HallNumber, "PayType_" .. types[i], true)
            payType:GetComponent("Toggle").onValueChanged:AddListener( function(isOn)
                if (isOn) then
                    loadChargeAmountUI()
                end
            end )
            payType.gameObject.name = tostring(types[i])
            payTypeTogs[i] = payType
            if i == 1 then loadChargeAmountUI() end
        end
    end

    --设置充值提示
    txt_labpaytips.text = G.User.GetCurrentUser().UserData.PayTips
end

function EscapeWindow()
    if RecTran_reportAgent.gameObject.activeSelf then
        RecTran_reportAgent.gameObject:SetActive(false)
    elseif RecTran_ContactAgent.gameObject.activeSelf then
        RecTran_ContactAgent.gameObject:SetActive(false)
    else
        CS.WindowManager.Instance:CloseWindow("UIRecharge", false)
    end
end


