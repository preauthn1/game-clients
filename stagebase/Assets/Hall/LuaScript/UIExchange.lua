local RecTran_Bingding = this.transform:Find("_Bingding"):GetComponent("RectTransform")
local Btn_CancelBingding = this.transform:Find("_Bingding/_CancelBingding"):GetComponent("Button")
local Btn_Bingding = this.transform:Find("_Bingding/_Bingding"):GetComponent("Button")
local Btn_CloseBingding = this.transform:Find("_Bingding/_CloseBingding"):GetComponent("Button")
local RecTran_Exchange = this.transform:Find("_Exchange"):GetComponent("RectTransform")
local Btn_CloseExchange = this.transform:Find("_Exchange/_CloseExchange"):GetComponent("Button")
local Txt_Tips = this.transform:Find("_Exchange/_Tips"):GetComponent("Text")
local Txt_Money = this.transform:Find("_Exchange/_Money"):GetComponent("Text")
local Txt_Account = this.transform:Find("_Exchange/_Account"):GetComponent("Text")
local Ipt_ExchangeNumber = this.transform:Find("_Exchange/_ExchangeNumber"):GetComponent("InputField")
local Btn_Exchange = this.transform:Find("_Exchange/_Exchange"):GetComponent("Button")
local RecTran_ExchangeSucess = this.transform:Find("_ExchangeSucess"):GetComponent("RectTransform")
local Txt_SucessTip = this.transform:Find("_ExchangeSucess/_SucessTip"):GetComponent("Text")
local Btn_CloseSucessWin = this.transform:Find("_ExchangeSucess/_CloseSucessWin"):GetComponent("Button")

--- 以上内容为工具脚本自动生成，请不要在这之上做任何修改---

local G = require "Global";

local userdata = G.User.GetCurrentUser().UserData
local groupName = "UIExchange";

local yield_return = G.Util.async_to_sync
(
function(to_to_yield, cb)
    this:YieldAndCallback(to_to_yield, cb)
end
)

local showMessageBox = G.Util.async_to_sync(CS.UIMessageBox.Show)

-- 初始化函数，实例化之后调用一次
function Start()

    Btn_CloseExchange:AddClickListener
    (
    function()
        CS.WindowManager.Instance:CloseWindow("UIExchange", false);
    end
    )

    Btn_Exchange:AddClickListener
    (
    function()
        if G.Tool.StringHelper.IsEmpty(Ipt_ExchangeNumber.text) then
            CS.UIBubblePrompt.Show("请输入兑换数量", groupName)
            return
        end

        G.Util.coroutine_call
        (
        function()

            local boxResult = showMessageBox(CS.MessageBoxStyle.OKCancelClose, "确认", "确认要兑换" .. Ipt_ExchangeNumber.text .. "金币？", "确定", "取消");

            if boxResult == CS.MessageBoxResult.OK then
                local sendMsg = { }

                -- 渠道ID
                print(Ipt_ExchangeNumber.text)
                sendMsg.Amount = G.Tool.UserHelper.GetSaveCoin(Ipt_ExchangeNumber.text)

                -- 兑换
                print("发送兑换请求")
                G.NetQ.SendMsg(G.Proto.BClass.Hall, G.Proto.Hall.ConvertMoneyID, sendMsg)
            end
        end
        )()
    end
    )

    Btn_CloseSucessWin:AddClickListener
    (
    function()
        CS.WindowManager.Instance:CloseWindow("UIExchange", false);
    end
    )

    Ipt_ExchangeNumber.onEndEdit:AddListener
    (
    function()
        if G.Tool.StringHelper.IsEmpty(Ipt_ExchangeNumber.text) then
            Ipt_ExchangeNumber.text = "0"
        else
            Ipt_ExchangeNumber.text = tostring(G.Tool.Math.ParseInt(Ipt_ExchangeNumber.text))
        end
    end
    )

    Btn_Bingding:AddClickListener
    (
    function()
        CS.WindowManager.Instance:CloseWindow("UIExchange", false);

        local openparam = CS.WindowNodeInitParam("UIUserInfo", CS.AppDefine.HallNumber)
        openparam.WindowData = 2;
        CS.WindowManager.Instance:OpenWindow(openparam)
    end
    )

    Btn_CancelBingding:AddClickListener
    (
    function()
        CS.WindowManager.Instance:CloseWindow("UIExchange", false);
    end
    )

    Btn_CloseBingding:AddClickListener
    (
    function()
        CS.WindowManager.Instance:CloseWindow("UIExchange", false);
    end
    )
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
    if userdata.IsBindZhifubao ~= true then
        RecTran_Bingding.gameObject:SetActive(true);
    else
        RecTran_Exchange.gameObject:SetActive(true);
        Txt_Money.text = G.Tool.UserHelper.ToCashDetail(userdata.CashAmount);
        Txt_Account.text = userdata.LoginName;
        Ipt_ExchangeNumber.text = "0";
        Txt_Tips.text = userdata.ConvertRateTipMsg
    end
end

-- region 兑换回调
G.NetQ.RegMsgHook(G.Proto.BClass.Hall, G.Proto.Hall.ConvertMoneyRetID, function(receiveMsg)
    if receiveMsg.Code == 1 then
        Txt_SucessTip.text = receiveMsg.Message;
        RecTran_Exchange.gameObject:SetActive(false);
        RecTran_ExchangeSucess.gameObject:SetActive(true);
    else
        CS.UIBubblePrompt.Show(receiveMsg.Message, groupName);
    end
end , groupName); 


function EscapeWindow()
    CS.WindowManager.Instance:CloseWindow("UIExchange", false);
end