local Btn_CancelGift = this.transform:Find("UIBody/_CancelGift"):GetComponent("Button")
local Btn_BingdingGift = this.transform:Find("UIBody/_BingdingGift"):GetComponent("Button")
local Btn_CloseGift = this.transform:Find("UIBody/_CloseGift"):GetComponent("Button")

--- 以上内容为工具脚本自动生成，请不要在这之上做任何修改---

-- 初始化函数，实例化之后调用一次
function Start()
    Btn_CancelGift:AddClickListener
    (
    function()
        CS.WindowManager.Instance:CloseWindow("UIBindingGift", false);
    end
    )

    Btn_CloseGift:AddClickListener
    (
    function()
        CS.WindowManager.Instance:CloseWindow("UIBindingGift", false);
    end
    )

    Btn_BingdingGift:AddClickListener
    (
    function()
        CS.WindowManager.Instance:CloseWindow("UIBindingGift", false);

        local openparam = CS.WindowNodeInitParam("UIUserInfo", CS.AppDefine.HallNumber)
        openparam.WindowData = 1;
        CS.WindowManager.Instance:OpenWindow(openparam)
    end
    )
end 


function EscapeWindow()
    CS.WindowManager.Instance:CloseWindow("UIBindingGift", false);
end