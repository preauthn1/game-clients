local Btn_CloseWin = this.transform:Find("UIBody/Top/_CloseWin"):GetComponent("Button")
local Txt_NoMailSign = this.transform:Find("UIBody/_NoMailSign"):GetComponent("Text")
local RecTran_Item = this.transform:Find("UIBody/MailList/Viewport/Content/_Item"):GetComponent("RectTransform")
local RecTran_MailDetail = this.transform:Find("UIBody/_MailDetail"):GetComponent("RectTransform")
local Btn_CloseDetail = this.transform:Find("UIBody/_MailDetail/_CloseDetail"):GetComponent("Button")
local Txt_DetailTitle = this.transform:Find("UIBody/_MailDetail/_DetailTitle"):GetComponent("Text")
local Txt_SendTime = this.transform:Find("UIBody/_MailDetail/_SendTime"):GetComponent("Text")
local Txt_Sender = this.transform:Find("UIBody/_MailDetail/_Sender"):GetComponent("Text")
local Txt_DetailContent = this.transform:Find("UIBody/_MailDetail/Scroll View/Viewport/_DetailContent"):GetComponent("Text")

--- 以上内容为工具脚本自动生成，请不要在这之上做任何修改---

local G = require "Global";
local groupName = "UIMail";

-- 初始化函数，实例化之后调用一次
function Start()
    Btn_CloseWin:AddClickListener
    (
    function()
        CS.WindowManager.Instance:CloseWindow("UIMail", false);
    end
    )

    Btn_CloseDetail:AddClickListener
    (
    function()
        RecTran_MailDetail.gameObject:SetActive(false);
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
    local mailList = G.Service.Mail.GetMailList();

    if mailList == nil or #mailList == 0 then
        Txt_NoMailSign.gameObject:SetActive(true);
    else
        Txt_NoMailSign.gameObject:SetActive(false);
        for i = 1, #mailList, 1 do

            local mailItem = CS.UnityEngine.GameObject.Instantiate(RecTran_Item.gameObject);
            mailItem.transform.parent = RecTran_Item.gameObject.transform.parent;
            mailItem.transform.localScale = CS.UnityEngine.Vector3(1, 1, 1)
            mailItem.transform.localPosition = CS.UnityEngine.Vector3.zero
            mailItem:SetActive(true)

            mailItem.name = tostring(mailList[i].ID)
            mailItem.transform:Find("OpenMail/UnReadMark").gameObject:SetActive(mailList[i].IsRead == false);
            mailItem.transform:Find("MailTitle"):GetComponent("Text").text = mailList[i].Title;
            mailItem.transform:Find("ReadMark"):GetComponent("Image"):ResetSpriteByName(CS.AppDefine.HallNumber, G.CaseWhen(mailList[i].IsRead, "MailRead", "MailUnread"))
            mailItem.transform:Find("SendTime"):GetComponent("Text").text = mailList[i].SendTime

            mailItem.transform:Find("OpenMail"):GetComponent("Button"):AddClickListener( function()
                local sendMsg = { }
                -- 邮件ID
                sendMsg.ID = mailList[i].ID
                G.NetQ.SendMsg(G.Proto.BClass.Hall, G.Proto.Hall.GetMailDetailID, sendMsg)
            end )
        end
    end
end
 
-- region 查看邮件详情返回
G.NetQ.RegMsgHook(G.Proto.BClass.Hall, G.Proto.Hall.GetMailDetailRetID, function(receiveMsg)

    RecTran_MailDetail.gameObject:SetActive(true);

    Txt_DetailTitle.text = receiveMsg.Title
    Txt_SendTime.text = receiveMsg.SendTime
    Txt_DetailContent.text = receiveMsg.Content
    -- Txt_Sender.text = "";

    local mailList = G.Service.Mail.GetMailList();

    for i = 1, #mailList, 1 do
        if mailList[i].ID == receiveMsg.ID then
            mailList[i].IsRead = true
        end
    end

    for i = 0, RecTran_Item.transform.parent.childCount - 1, 1 do
        local item = RecTran_Item.transform.parent:GetChild(i)

        if item.gameObject.name == tostring(receiveMsg.ID) then
            item:Find("OpenMail/UnReadMark").gameObject:SetActive(false);
            item:Find("ReadMark"):GetComponent("Image"):ResetSpriteByName(CS.AppDefine.HallNumber, "MailRead")
        end
    end
end , groupName);
-- endregion

function EscapeWindow()
    if RecTran_MailDetail.gameObject.activeSelf then
        RecTran_MailDetail.gameObject:SetActive(false);
    else
        CS.WindowManager.Instance:CloseWindow("UIMail", false);
    end
end