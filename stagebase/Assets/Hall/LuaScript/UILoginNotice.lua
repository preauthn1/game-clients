local Txt_Content = this.transform:Find("UIBody/Bg_2/Scroll View/Viewport/_Content"):GetComponent("Text")
local Btn_Close = this.transform:Find("UIBody/_Close"):GetComponent("Button")

--- 以上内容为工具脚本自动生成，请不要在这之上做任何修改---

local G = require "Global";

-- 初始化函数，实例化之后调用一次
function Start()
    Btn_Close:AddClickListener
    (
    function()
        CS.WindowManager.Instance:CloseWindow("UILoginNotice", false);
    end
    )

    local logoEf = this.gameObject.transform:Find("UIBody/Title/doudizhu_gonggao").gameObject
    CS.Utility.SetUISortingOrder(logoEf)
end
 
-- 界面被打开时接收界面参数
function RefreshWindowData(windowData)
    local userdata = G.User.GetCurrentUser()
    Txt_Content.text = userdata.UserData.AnnMsg;
end


function EscapeWindow()
    CS.WindowManager.Instance:CloseWindow("UILoginNotice", false);
end