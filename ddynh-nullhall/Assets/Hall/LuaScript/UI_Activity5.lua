local Btn_CloseGift = this.transform:Find("UIBody/_CloseGift"):GetComponent("Button")
local Btn_BingdingGift = this.transform:Find("UIBody/_BingdingGift"):GetComponent("Button")

--- 以上内容为工具脚本自动生成，请不要在这之上做任何修改---

-- 初始化函数，实例化之后调用一次
function Start()
  
    Btn_CloseGift:AddClickListener(function()
        EscapeWindow()
    end)
  
    Btn_BingdingGift:AddClickListener(function()
        EscapeWindow()
        
        local openparam = CS.WindowNodeInitParam("UILiveBroadcast", CS.AppDefine.HallNumber)
        openparam.WindowData = 1;
        CS.WindowManager.Instance:OpenWindow(openparam)
    end)

end

-- 在Window下按下Esc或在Android 下按下Back
function EscapeWindow()
    CS.WindowManager.Instance:CloseWindow("UI_Activity5", false);
end
