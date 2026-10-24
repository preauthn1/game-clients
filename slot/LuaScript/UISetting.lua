require("Module")
mmodule(...)
local HallG = require("Global")
local GameG = HallG.RequireG("GameGlobal")

--離開遊戲
function onExit()

end

function Init(root)
	rootRect = root:GetComponent("RectTransform")
	
	txtVersion = root.transform:Find("TextVersion"):GetComponent("Text")
	
	btnClose = root.transform:Find("ButtonClose"):GetComponent("Button")
    btnClose.onClick:AddListener(function()		
		GameG.PlayGameSound("se_click")
		Hide()
	end)
	
	-- btnExit = root.transform:Find("ButtonExit"):GetComponent("Button")
    -- btnExit.onClick:AddListener(function()
		-- GameG.PlayGameSound("se_click")
		-- ClickExit()
	-- end)
	
	imgMusic = root.transform:Find("ButtonMusic/Image"):GetComponent("Image")
	btnMusic = root.transform:Find("ButtonMusic"):GetComponent("Button")
    btnMusic.onClick:AddListener(function()
		GameG.PlayGameSound("se_click")
		local state = GameG.MusicStatus()
        GameG.MusicStatus(state == false)
		imgMusic.gameObject:SetActive(GameG.MusicStatus() == false)
	end)

	imgSound = root.transform:Find("ButtonSound/Image"):GetComponent("Image")
	btnSound = root.transform:Find("ButtonSound"):GetComponent("Button")
    btnSound.onClick:AddListener(function()
		GameG.PlayGameSound("se_click")
		local state = GameG.SoundStatus()
        GameG.SoundStatus(state == false)
		imgSound.gameObject:SetActive(GameG.SoundStatus() == false)
	end)

end

function Update()
    if CS.UnityEngine.Input.GetKeyDown("escape") then
		GameG.ExitGame()
    end
end

function Show()
	rootRect.gameObject:SetActive(true)
	
	txtVersion.text = "V." .. tostring(GameG.GetGameVersion())
	
	imgMusic.gameObject:SetActive(GameG.MusicStatus() == false)
	imgSound.gameObject:SetActive(GameG.SoundStatus() == false)
end

function Hide()
	rootRect.gameObject:SetActive(false)
end

function ClickExit()
	GameG.ExitGame()
end