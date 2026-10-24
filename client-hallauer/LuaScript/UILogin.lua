local Btn_VisitorLogin = this.transform:Find("_VisitorLogin"):GetComponent("Button")

--- 以上内容为工具脚本自动生成，请不要在这之上做任何修改---
local G = require "Global"
local gameDefine = require("Com/GameDefine")
local groupName = "UILogin";

local function onLoginRet(receiveMsg)
		
    -- 登入成功
    if receiveMsg.Code == 1 then
	        print("大厅登录成功")
        CS.UILoadingData.Hide()

        -- 关闭当前界面
        CS.WindowManager.Instance:CloseWindow("UILogin", false);

        -- 打开大厅界面
		if CS.WindowManager.Instance:FindWindowNodeByName("UIHall") == nil then
			local openparam = CS.WindowNodeInitParam("UIHall", CS.AppDefine.HallNumber)
			openparam.NodeType = 0
			CS.WindowManager.Instance:OpenWindow(openparam)
		end
	-- 登入失败
	else
        print("大厅登录失败")
        CS.UILoadingData.Hide()

        Btn_VisitorLogin.enabled = true

        CS.UIBubblePrompt.Show(receiveMsg.Message, "UILogin")
    end
end


-- 初始化函数，实例化之后调用一次
function Start()

    -- 游客登录
    Btn_VisitorLogin:AddClickListener
    (
    function()

        Btn_VisitorLogin.enabled = false

        local uiData = CS.LoadingDataUIData()

        uiData.TipsContent = "登录中，请稍后。。。";
        uiData.MaxLastTime = 5; 
        uiData.MaxTimeCloseWindowCallBack =
        (
        function()
            CS.UIBubblePrompt.Show("登录失败", "Login")
            Btn_VisitorLogin.enabled = true
        end
        )

        CS.UILoadingData.Show(uiData)

        G.Service.Login.GuestLoginHall(onLoginRet)
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


function EscapeWindow()
	CS.UnityEngine.Application.Quit()
end