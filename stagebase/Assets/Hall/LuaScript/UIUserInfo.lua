local Btn_Back = this.transform:Find("UIBody/_Back"):GetComponent("Button")
local RecTran_BindingZF = this.transform:Find("UIBody/_BindingZF"):GetComponent("RectTransform")
local Btn_BZComfirm = this.transform:Find("UIBody/_BindingZF/_BZComfirm"):GetComponent("Button")
local Ipt_BZAccount = this.transform:Find("UIBody/_BindingZF/_BZAccount"):GetComponent("InputField")
local Ipt_BZPlayerName = this.transform:Find("UIBody/_BindingZF/_BZPlayerName"):GetComponent("InputField")
local RecTran_BindingZFDone = this.transform:Find("UIBody/_BindingZFDone"):GetComponent("RectTransform")
local Txt_BZDAccount = this.transform:Find("UIBody/_BindingZFDone/_BZDAccount"):GetComponent("Text")
local Txt_BZDPlayerName = this.transform:Find("UIBody/_BindingZFDone/_BZDPlayerName"):GetComponent("Text")
local RecTran_BingdingPhone = this.transform:Find("UIBody/_BingdingPhone"):GetComponent("RectTransform")
local Btn_BPComfirm = this.transform:Find("UIBody/_BingdingPhone/_BPComfirm"):GetComponent("Button")
local Ipt_BPReapetPW = this.transform:Find("UIBody/_BingdingPhone/_BPReapetPW"):GetComponent("InputField")
local Ipt_BPNewPW = this.transform:Find("UIBody/_BingdingPhone/_BPNewPW"):GetComponent("InputField")
local Btn_BPGetCode = this.transform:Find("UIBody/_BingdingPhone/_BPGetCode"):GetComponent("Button")
local Txt_BPCountDown = this.transform:Find("UIBody/_BingdingPhone/_BPGetCode/_BPCountDown"):GetComponent("Text")
local Ipt_BPCode = this.transform:Find("UIBody/_BingdingPhone/_BPCode"):GetComponent("InputField")
local Ipt_BPPhoneNumber = this.transform:Find("UIBody/_BingdingPhone/_BPPhoneNumber"):GetComponent("InputField")
local RecTran_ChangePassword = [REDACTED]"UIBody/_ChangePassword"):GetComponent("RectTransform")
local Btn_CPConfirm = this.transform:Find("UIBody/_ChangePassword/_CPConfirm"):GetComponent("Button")
local Ipt_CPRepeatPW = this.transform:Find("UIBody/_ChangePassword/_CPRepeatPW"):GetComponent("InputField")
local Ipt_CPNewPW = this.transform:Find("UIBody/_ChangePassword/_CPNewPW"):GetComponent("InputField")
local Ipt_CPOldPW = this.transform:Find("UIBody/_ChangePassword/_CPOldPW"):GetComponent("InputField")
local RecTran_Information = this.transform:Find("UIBody/_Information"):GetComponent("RectTransform")
local Txt_ID = this.transform:Find("UIBody/_Information/_ID"):GetComponent("Text")
local Img_HeadIcon = this.transform:Find("UIBody/_Information/Head/_HeadIcon"):GetComponent("Image")
local Btn_ChangeHead = this.transform:Find("UIBody/_Information/_ChangeHead"):GetComponent("Button")
local Txt_Money = this.transform:Find("UIBody/_Information/Number/_Money"):GetComponent("Text")
local Txt_StoreMoney = this.transform:Find("UIBody/_Information/Number/_StoreMoney"):GetComponent("Text")
local Btn_ZF = this.transform:Find("UIBody/_Information/Btns/_ZF"):GetComponent("Button")
local Btn_BindingAccount = this.transform:Find("UIBody/_Information/Btns/_BindingAccount"):GetComponent("Button")
local Btn_ChangePassword = [REDACTED]"UIBody/_Information/Btns/_ChangePassword"):GetComponent("Button")
local Txt_Sex = this.transform:Find("UIBody/_Information/_Sex"):GetComponent("Text")
local Btn_Close = this.transform:Find("UIBody/Top/_Close"):GetComponent("Button")

--- 以上内容为工具脚本自动生成，请不要在这之上做任何修改---

-- 初始化函数，实例化之后调用一次

local G = require "Global";

local groupName = "UIUserInfo";
local user = G.User.GetCurrentUser()
local userData = user.UserData

-- region 刷新用户个人信息
G.NetQ.RegMsgHook(G.Proto.BClass.Hall, G.Proto.Hall.UserHallInfoID, function(receiveMsg)
    if receiveMsg.Code == 1 then
        G.User.SetCurrentUserInfo(receiveMsg)
        user = G.User.GetCurrentUser()
        userData = user.UserData

        -- 刷新成功
        Txt_BZDAccount.text = userData.Zhifubao
        Txt_BZDPlayerName.text = userData.RealName

        Btn_BindingAccount.gameObject:SetActive(userData.IsBindGuest ~= true)
        Btn_ChangePassword.gameObject:SetActive(userData.IsBindGuest)
    else
        CS.UIBubblePrompt.Show(receiveMsg.Message, groupName);
    end
end , groupName);

-- region 绑定支付宝返回结果
G.NetQ.RegMsgHook(G.Proto.BClass.Hall, G.Proto.Hall.BindZhifubaoRetID, function(receiveMsg)
    if receiveMsg.Code == 1 then
        CS.UIBubblePrompt.Show("支付宝绑定成功", groupName);
        RecTran_BindingZF.gameObject:SetActive(false)
        RecTran_BindingZFDone.gameObject:SetActive(true)
        G.Service.Login.RequestUserInfoHall()
    else
        CS.UIBubblePrompt.Show(receiveMsg.Message, groupName);
    end
end , groupName);

-- region 修改密码返回结果
G.NetQ.RegMsgHook(G.Proto.BClass.Hall, G.Proto.Hall.ModifyPasswordRetID, function(receiveMsg)
    if receiveMsg.Code == 1 then
        CS.UIBubblePrompt.Show("密码修改成功", groupName);

        RecTran_ChangePassword.gameObject:SetActive(false);
        RecTran_Information.gameObject:SetActive(true);
    else
        CS.UIBubblePrompt.Show(receiveMsg.Message, groupName);
    end
end , groupName);

-- region 发送手机验证码
G.NetQ.RegMsgHook(G.Proto.BClass.Hall, G.Proto.Hall.SendPhoneVCodeRetID, function(receiveMsg)

    if receiveMsg.Code == 1 then
        CS.UIBubblePrompt.Show("验证码发送成功", groupName);

        Btn_BPGetCode.enabled = false;

        local sequence = CS.DG.Tweening.DOTween.Sequence();

        for i = receiveMsg.CountDown, 1, -1 do
            sequence:Append(Txt_BPCountDown:DOText(string.format("获取验证码(%s)", i), 1));
        end

        sequence:Append(Txt_BPCountDown:DOText("获取验证码", 1))

        sequence:OnComplete( function()
            Btn_BPGetCode.enabled = true;
        end );
    else
        CS.UIBubblePrompt.Show(receiveMsg.Message, groupName);
    end

end , groupName);


-- region 绑定手机
G.NetQ.RegMsgHook(G.Proto.BClass.Hall, G.Proto.Hall.BindGuestAccountRetID, function(receiveMsg)

    if receiveMsg.Code == 1 then
        CS.UIBubblePrompt.Show("绑定成功", groupName);
        RecTran_BingdingPhone.gameObject:SetActive(false)
        RecTran_Information.gameObject:SetActive(true);
        G.Service.Login.RequestUserInfoHall();
    else
        CS.UIBubblePrompt.Show(receiveMsg.Message, groupName);
    end

end , groupName);

function Start()

    Btn_Back:AddClickListener
    (
    function()
        EscapeWindow();
    end
    )

    -- 绑定支付宝按钮
    Btn_BZComfirm:AddClickListener
    (
    function()

        -- 检查用户名
        if G.Tool.StringHelper.IsEmpty(Ipt_BZPlayerName.text) then
            CS.UIBubblePrompt.Show("姓名不能为空。", groupName)
            return
        end

        -- 支付宝账号不能为空
        if G.Tool.StringHelper.IsEmpty(Ipt_BZAccount.text) then
            CS.UIBubblePrompt.Show("账号不能为空。", groupName)
            return
        end

        local sendMsg = { }

        -- 账户
        sendMsg.Zhifubao = Ipt_BZAccount.text

        -- 姓名
        sendMsg.RealName = Ipt_BZPlayerName.text

        -- 发送登录游戏服务消息
        G.NetQ.SendMsg(G.Proto.BClass.Hall, G.Proto.Hall.BindZhifubaoID, sendMsg)
    end
    )

    -- 绑定手机获取验证码
    Btn_BPGetCode:AddClickListener
    (
    function()

        -- 判断手机号码
        if G.Tool.StringHelper.IsEmpty(Ipt_BPPhoneNumber.text) then
            CS.UIBubblePrompt.Show("请输入手机号码", groupName)
            return
        end

        local sendMsg = { }

        -- 手机号
        sendMsg.Tel = Ipt_BPPhoneNumber.text

        -- 类型
        sendMsg.CodeType = 1

        -- 绑定手机验证码
        G.NetQ.SendMsg(G.Proto.BClass.Hall, G.Proto.Hall.SendPhoneVCodeID, sendMsg)

    end
    )

    -- 绑定手机按钮
    Btn_BPComfirm:AddClickListener
    (
    function()

        if G.Tool.StringHelper.IsEmpty(Ipt_BPPhoneNumber.text) then
            CS.UIBubblePrompt.Show("请输入手机号码", groupName)
            return
        end

        if G.Tool.StringHelper.IsEmpty(Ipt_BPCode.text) then
            CS.UIBubblePrompt.Show("请输入验证码", groupName)
            return
        end

        if G.Tool.StringHelper.IsEmpty(Ipt_BPNewPW.text) then
            CS.UIBubblePrompt.Show("请输入密码", groupName)
            return
        end

        if Ipt_BPNewPW.text ~= Ipt_BPReapetPW.text then
            CS.UIBubblePrompt.Show("输入密码和确认密码不一致，请验证输入", groupName)
            return
        end

        local sendMsg = { }

        -- 账户
        sendMsg.Tel = Ipt_BPPhoneNumber.text

        -- 验证码
        sendMsg.VCode = Ipt_BPCode.text

        -- 密码
        sendMsg.Password = [REDACTED]

        -- 发送绑定用户消息
        G.NetQ.SendMsg(G.Proto.BClass.Hall, G.Proto.Hall.BindGuestAccountID, sendMsg)
    end
    )

    -- 修改密码按钮
    Btn_CPConfirm:AddClickListener
    (
    function()

        if G.Tool.StringHelper.IsEmpty(Ipt_CPOldPW.text) then
            CS.UIBubblePrompt.Show("旧密码不能为空", groupName)
            return
        end

        if G.Tool.StringHelper.IsEmpty(Ipt_CPNewPW.text) then
            CS.UIBubblePrompt.Show("请输入新密码", groupName)
            return
        end

        if Ipt_CPNewPW.text ~= Ipt_CPRepeatPW.text then
            CS.UIBubblePrompt.Show("新密码和确认密码不一致，请验证输入", groupName)
            return
        end

        local sendMsg = { }

        -- 手机号
        sendMsg.OldPwd = [REDACTED]

        -- 类型
        sendMsg.NewPassword = [REDACTED]

        -- 发送修改密码消息
        G.NetQ.SendMsg(G.Proto.BClass.Hall, G.Proto.Hall.ModifyPasswordID, sendMsg)
    end
    )

    Btn_ChangeHead:AddClickListener
    (
    function()
        local openparam = CS.WindowNodeInitParam("UIChooseHeadIcon", CS.AppDefine.HallNumber)

        openparam.WindowCloseCallBack =
        (
        function()
            Img_HeadIcon:ResetSpriteByName(CS.AppDefine.HallNumber, tostring(userData.HeadID))
            Txt_Sex.text = G.CaseWhen(userData.Sex == 1, "女", "男")
        end
        )

        CS.WindowManager.Instance:OpenWindow(openparam)
    end
    )

    Btn_BindingAccount:AddClickListener
    (
    function()
        RecTran_BingdingPhone.gameObject:SetActive(true)
        RecTran_Information.gameObject:SetActive(false)
    end
    )

    Btn_ZF:AddClickListener
    (
    function()
        RecTran_Information.gameObject:SetActive(false)

        if userData.IsBindZhifubao then
            RecTran_BindingZFDone.gameObject:SetActive(true)

            Txt_BZDAccount.text = userData.Zhifubao
            Txt_BZDPlayerName.text = userData.RealName
        else
            RecTran_BindingZF.gameObject:SetActive(true)
        end
    end
    )

    Btn_ChangePassword:[REDACTED]
    (
    function()
        Ipt_CPOldPW.text = "";
        Ipt_CPNewPW.text = "";
        Ipt_CPRepeatPW.text = "";

        RecTran_ChangePassword.gameObject:SetActive(true)
        RecTran_Information.gameObject:SetActive(false)
    end
    )

    Btn_Close:AddClickListener
    (
    function()
        CS.WindowManager.Instance:CloseWindow("UIUserInfo", false);
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

    Img_HeadIcon:ResetSpriteByName(CS.AppDefine.HallNumber, tostring(userData.HeadID))
    Txt_ID.text = tostring(user.UserID);
    Txt_Money.text = G.Tool.UserHelper.ToCashDetail(userData.CashAmount);
    Txt_StoreMoney.text = G.Tool.UserHelper.ToCashDetail(userData.BankAmount);

    Btn_BindingAccount.gameObject:SetActive(userData.IsBindGuest ~= true)
    Btn_ChangePassword.gameObject:SetActive(userData.IsBindGuest)

    Btn_ZF.gameObject:SetActive(userData.IsBindGuest)

    Txt_Sex.text = G.CaseWhen(userData.Sex == 1, "女", "男")

    -- 绑定账号
    if windowData ~= nil and windowData == 1 then
        RecTran_BingdingPhone.gameObject:SetActive(true)
        RecTran_Information.gameObject:SetActive(false)
    end

    -- 绑定支付宝
    if windowData ~= nil and windowData == 2 then
        RecTran_Information.gameObject:SetActive(false)
        RecTran_BindingZF.gameObject:SetActive(true)
    end
end


function EscapeWindow()
    if RecTran_BindingZF.gameObject.activeSelf then
        RecTran_BindingZF.gameObject:SetActive(false)
        RecTran_Information.gameObject:SetActive(true)

    elseif RecTran_BindingZFDone.gameObject.activeSelf then
        RecTran_BindingZFDone.gameObject:SetActive(false)
        RecTran_Information.gameObject:SetActive(true)

    elseif RecTran_BingdingPhone.gameObject.activeSelf then
        RecTran_BingdingPhone.gameObject:SetActive(false)
        RecTran_Information.gameObject:SetActive(true)

    elseif RecTran_ChangePassword.gameObject.activeSelf then
        RecTran_ChangePassword.gameObject:SetActive(false)
        RecTran_Information.gameObject:SetActive(true)
    else
        CS.WindowManager.Instance:CloseWindow("UIUserInfo", false);
    end
end