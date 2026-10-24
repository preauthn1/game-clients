local Btn_SendMsg = this.transform:Find("UIBody/_SendMsg"):GetComponent("Button")
local Ipt_Content = this.transform:Find("UIBody/_Content"):GetComponent("InputField")
local Btn_CloseSendMsgTOGM = this.transform:Find("UIBody/_CloseSendMsgTOGM"):GetComponent("Button")

--- 以上内容为工具脚本自动生成，请不要在这之上做任何修改---
local G = require "Global";

local userdata = G.User.GetCurrentUser().UserData
local groupName = "UISendMsgToGM";

-- 初始化函数，实例化之后调用一次
function Start()
    Btn_SendMsg:AddClickListener
    (
    function()
        if G.Tool.StringHelper.IsEmpty(Ipt_Content.text) then
            CS.UIBubblePrompt.Show("请输入消息内容", groupName)
            return
        end

        local sendMsg = { }
        sendMsg.Msg = Ipt_Content.text
        G.NetQ.SendMsg(G.Proto.BClass.Hall, G.Proto.Hall.ContactServiceID, sendMsg)
    end
    )

    Btn_CloseSendMsgTOGM:AddClickListener
    (
    function()
        CS.WindowManager.Instance:CloseWindow("UISendMsgToGM", false);
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
 
-- region 绑定支付宝返回结果
G.NetQ.RegMsgHook(G.Proto.BClass.Hall, G.Proto.Hall.ContactServiceRetID, function(receiveMsg)
    if receiveMsg.Code == 1 then
        CS.WindowManager.Instance:CloseWindow("UISendMsgToGM", false);
        CS.UIBubblePrompt.Show("消息发送成功", "UIHall");
    else
        CS.UIBubblePrompt.Show(receiveMsg.Message, groupName);
    end
end , groupName);

function EscapeWindow()
    CS.WindowManager.Instance:CloseWindow("UISendMsgToGM", false);
end