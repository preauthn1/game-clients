local Img_bg = this.transform:Find("_bg"):GetComponent("Image")
local Btn_exit = this.transform:Find("menubtn/_exit"):GetComponent("Button")
local Btn_help = this.transform:Find("menubtn/_help"):GetComponent("Button")
local Btn_set = this.transform:Find("menubtn/_set"):GetComponent("Button")
local RecTran_ann = this.transform:Find("_ann"):GetComponent("RectTransform")
local Txt_anncontent = this.transform:Find("_ann/shade/_anncontent"):GetComponent("Text")
local Txt_time = this.transform:Find("_time"):GetComponent("Text")
local Txt_roomname = this.transform:Find("_roomname"):GetComponent("Text")

--- 以上内容为工具脚本自动生成，请不要在这之上做任何修改---

local G = require "Global"

local isCustomExitUI = false
local event_exit = function()
    if (G.IsGameing()) then
        if (isCustomExitUI == true) then
            local openparam = CS.WindowNodeInitParam("UIExitGame", G.GetGamePName())
            openparam.NodeType = 5
            CS.WindowManager.Instance:OpenWindow(openparam)
        else
            local openparam = CS.WindowNodeInitParam("UIExitGame", CS.AppDefine.HallNumber)
            openparam.NodeType = 5
            CS.WindowManager.Instance:OpenWindow(openparam)
        end
    else
        G.Service.Game.ExitGame()
    end
end
local event_help = function()
    local openparam = CS.WindowNodeInitParam("UIHelp", G.GetGamePName())
    openparam.NodeType = 5
    CS.WindowManager.Instance:OpenWindow(openparam)
end
local event_set = function()
    local openparam = CS.WindowNodeInitParam("UISet", G.GetGamePName())
    openparam.NodeType = 5
    CS.WindowManager.Instance:OpenWindow(openparam)
end



local annShadeWidth = Txt_anncontent.transform.parent:GetComponent("RectTransform").sizeDelta.x -- 公告文本遮罩宽度 
local annInitPos = Txt_anncontent.transform.localPosition
local RectTran_anncontent = Txt_anncontent.transform:GetComponent("RectTransform")

function GetNoticeContentWidth()
    return CS.UnityEngine.UI.LayoutUtility.GetPreferredWidth(RectTran_anncontent)
end 
 
-- 初始化函数，实例化之后调用一次
function Start()
    CS.UISpriteManager.Instance:SetImageSprite(Img_bg, G.GetGamePName(), "gametopbg", false)
    Btn_exit:AddClickListener(event_exit)
    Btn_help:AddClickListener(event_help)
    Btn_set:AddClickListener(event_set)
    Txt_roomname.text = G.Room.GetRoomLevelName()
    if (G.GameConfig.GetIsShowTableNo(G.GetRunGameID())) then
        G.Service.Game.RegTableNoChange( function(tableNo)
            tableNo = tableNo + 1
            Txt_roomname.text = string.format("%s %s", G.Room.GetRoomLevelName(), string.rep("0", 3 - #(tostring(tableNo))) .. tableNo)
        end )
    end
end

function Update()
    if CS.UnityEngine.Input.GetKeyDown("escape") then
        if (CS.WindowManager.Instance:FindWindowNodeByName("UIExitGame") == nil) then
            event_exit()
        end
    end

    Txt_time.text = os.date("%H:%M")

    if (#Txt_anncontent.text > 0 and Txt_anncontent.transform.localPosition.x > annInitPos.x - GetNoticeContentWidth() - annShadeWidth) then
        Txt_anncontent.transform.localPosition = Txt_anncontent.transform.localPosition - CS.UnityEngine.Vector3(CS.UnityEngine.Time.deltaTime * 50, Txt_anncontent.transform.localPosition.y, Txt_anncontent.transform.localPosition.z)
    else
        local message = G.Service.Ann.GetOneAnnMeg()

        if message == nil then
            RecTran_ann.gameObject:SetActive(false)
            Txt_anncontent.text = ""
        else
            Txt_anncontent.transform.localPosition = annInitPos
            Txt_anncontent.text = message
            RecTran_ann.gameObject:SetActive(true)
        end
    end
end

function OnDestroy()
    G.Service.Game.RemoveTableNoChange()
    CS.WindowManager.Instance:CloseWindow("UIExitGame", false)
end

-- 接收公告通知
function ReceiveAnnNotify(data)

    Txt_anncontent.text = Txt_anncontent.text .. data
    annWidth = Txt_anncontent.transform:GetComponent("RectTransform").sizeDelta.x
    RecTran_ann.gameObject:SetActive(true)

end


 
-- 界面被打开时接收界面参数
function RefreshWindowData(windowData)
    if (windowData ~= nil) then
        isCustomExitUI = windowData.isCustomExitUI
    end
end
 