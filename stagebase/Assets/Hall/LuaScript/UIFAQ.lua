local Btn_close = this.transform:Find("_close"):GetComponent("Button")
local Txt_Content = this.transform:Find("Bg_7/Scroll View/Viewport/_Content"):GetComponent("Text")

--- 以上内容为工具脚本自动生成，请不要在这之上做任何修改---

local G = require "Global";

-- 初始化函数，实例化之后调用一次
function Start()
    Txt_Content.text = "加载中……"
    Btn_close:AddClickListener( function()
        EscapeWindow()
    end )
    G.Service.FAQ.GetFAQ( function(content)
        Txt_Content.text = content
    end )
end

-- 在Window下按下Esc或在Android 下按下Back
function EscapeWindow()
    CS.WindowManager.Instance:CloseWindow("UIFAQ", false)
end
