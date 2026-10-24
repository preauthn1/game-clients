local txt_Tips = this.transform:Find("Tips"):GetComponent("Text")
local sld_Slider = this.transform:Find("Slider"):GetComponent("Slider")
local txt__DownLoadSizeInfo = this.transform:Find("DownLoadInfo/_DownLoadSizeInfo"):GetComponent("Text")
local Txt_Channel = this.transform:Find("Channel"):GetComponent("Text")
local TextCompany = this.transform:Find("TextCompany"):GetComponent("Text")	
local TextHDCode = this.transform:Find("HDCode"):GetComponent("Text")
local Btn_Common = this.transform:Find("_Common"):GetComponent("Button")
local Btn_Website = this.transform:Find("_Website"):GetComponent("Button")
local Btn_Route = this.transform:Find("_Route"):GetComponent("Button")	
local txt_Version = this.transform:Find("Version"):GetComponent("Text")

--- 以上内容为工具脚本自动生成，请不要在这之上做任何修改---

local G = require "Global"
local seq = nil

function Start()
    txt__DownLoadSizeInfo.text = ""
    Txt_Channel.text = tostring(G.GameConfig.GameSiteID) .. "." .. tostring(G.GameConfig.GamePlatformID) .. "." .. tostring(G.GameConfig.GetServerOption()) .. "." .. G.GameDefine.Branch
    TextCompany.text = G.Platform.GetCopyright()
    txt_Version.text = "V." .. G.Env.GetHallVersion()

    Btn_Common:AddClickListener(function()
        if (G.User.GetLocalUserInfo() ~= nil) then
            local openparam = CS.WindowNodeInitParam("UICustomer", CS.AppDefine.HallNumber)
            openparam.NodeType = CS.BaseNodeType.Propmt;
            CS.WindowManager.Instance:OpenWindow(openparam)
        end
    end)

    Btn_Website:AddClickListener(function()
        G.GameDefine.DownloadUrl = CS.UnityEngine.PlayerPrefs.GetString("WebsiteUrl", "")
        if(G.GameDefine.DownloadUrl ~= "") then
            CS.UnityEngine.Application.OpenURL(G.GameDefine.DownloadUrl)
        end
    end)

    Btn_Route:AddClickListener(function()
        if (CS.UnityEngine.PlayerPrefs.GetString("UpdateDomain2", "") ~= "") then
            local openparam = CS.WindowNodeInitParam("UIRoute", CS.AppDefine.HallNumber)
            openparam.NodeType = CS.BaseNodeType.Propmt;
            CS.WindowManager.Instance:OpenWindow(openparam)
        end
    end)

end

-- 每帧调用一次
function Update()
    if CS.HotUpdate.HotUpdateManager.Instance.IsWorking == false then return end

    local info = CS.HotUpdate.HotUpdateManager.Instance.updateProgressInfo
    txt_Tips.text = info.TipsContent
    sld_Slider.value = info.ProgressPercentage
    txt__DownLoadSizeInfo.text = info.DownLoadSizeInfo
end

function SetTipAndProgress(tip, progress)
    txt_Tips.text = tip
    txt__DownLoadSizeInfo.text = ""

    if seq ~= nil then
        seq:Kill()
        seq = nil
    end
    
    if (progress == 0) then
        sld_Slider.value = progress
    else
        seq = CS.DG.Tweening.DOTween.Sequence()
        seq:Append(CS.DG.Tweening.DOTween.To(function(val) 		
            sld_Slider.value = val
        end, sld_Slider.value, progress, 1))		
    end	
end

function ShowHDCode()
    TextHDCode.text = G.Env.GetHDCode()   
end



