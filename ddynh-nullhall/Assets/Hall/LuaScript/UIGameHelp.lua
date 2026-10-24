local G = require "Global"
local Download = require("Tools/DownloadTxtFile")

local txt_Text = this.transform:Find("mask/Panel/Text"):GetComponent("Text")
local txt_LoadingText = this.transform:Find("mask/LoadingText"):GetComponent("Text")
local btn_CloseButton = this.transform:Find("mask/CloseButton"):GetComponent("Button")

function Start()
    btn_CloseButton:AddClickListener( function()
        CS.WindowManager.Instance:CloseWindow("UIGameHelp", false)
    end )
	
	txt_Text.text = ""
	txt_LoadingText.gameObject:SetActive(true)
	
	BeginDownload()
end

function BeginDownload()
	local url = G.GameConfig.UpdateDomain .. "Help/" .. G.GetGamePName() .. ".txt"
	Download.DownloadFile(url, onSuccessCallback, onErrorCallback)	
end

function onSuccessCallback(data)
	txt_LoadingText.gameObject:SetActive(false)
	txt_Text.text = data
end

function onErrorCallback()
	BeginDownload()
end
