local Btn_Close = this.transform:Find("UIBody/_CloseGift"):GetComponent("Button")
local Btn_Go = this.transform:Find("UIBody/_BingdingGift"):GetComponent("Button")

local G = require "Global";
local PoolSequence = {}

--- 以上内容为工具脚本自动生成，请不要在这之上做任何修改---

-- 初始化函数，实例化之后调用一次
function Start()
    Btn_Close:AddClickListener
    (
    function()
        EscapeWindow()
    end
    )
	
    Btn_Go:AddClickListener
    (
    function()
        EscapeWindow()
	
        local openparam = CS.WindowNodeInitParam("UIMail", CS.AppDefine.HallNumber)
        openparam.WindowData = 3;
		openparam.WindowCloseCallBack = (function()
			EscapeWindow()
		end)
        CS.WindowManager.Instance:OpenWindow(openparam)
    end
    )	
end 


function EscapeWindow()
    CS.WindowManager.Instance:CloseWindow("UI_Activity13", false);
end