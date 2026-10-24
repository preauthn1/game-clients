local Btn_Close = this.transform:Find("UIBody/_Close"):GetComponent("Button")
local Btn_SwichAccount = this.transform:Find("UIBody/_SwichAccount"):GetComponent("Button")
local RecTran_SwichButton = this.transform:Find("UIBody/_SwichButton"):GetComponent("RectTransform")--切换账号+换线
local Btn_SwichAccount2 = this.transform:Find("UIBody/_SwichButton/_SwichAccount"):GetComponent("Button")
local Btn_SwichRoute = this.transform:Find("UIBody/_SwichButton/_SwichRoute"):GetComponent("Button")
local Txt_UserName = this.transform:Find("UIBody/_UserName"):GetComponent("Text")
local Tog_MusicGorup = this.transform:Find("UIBody/_MusicGorup"):GetComponent("Toggle")
local RecTran_MusicOff = this.transform:Find("UIBody/_MusicGorup/_MusicOff"):GetComponent("RectTransform")
local RecTran_MusicON = this.transform:Find("UIBody/_MusicGorup/_MusicON"):GetComponent("RectTransform")
local Tog_SoundGorup = this.transform:Find("UIBody/_SoundGorup"):GetComponent("Toggle")
local RecTran_SoundOff = this.transform:Find("UIBody/_SoundGorup/_SoundOff"):GetComponent("RectTransform")
local RecTran_SoundON = this.transform:Find("UIBody/_SoundGorup/_SoundON"):GetComponent("RectTransform")
local Txt_Version = this.transform:Find("UIBody/_Version"):GetComponent("Text")
local btn_DelButton = this.transform:Find("UIBody/DelButton"):GetComponent("Button")

--- 以上内容为工具脚本自动生成，请不要在这之上做任何修改---

-- 初始化函数，实例化之后调用一次

local G = require "Global";
local timer = 0.1
local delTimes = 0

local function SetMusicStatus(isOn)
    G.Tool.Sound.MusicStatus(isOn)
    G.GameConfig.MusicStatus=isOn;
    if isOn then
		local sequence = CS.DG.Tweening.DOTween.Sequence()
		local position = RecTran_MusicON.transform:Find("img_btn_bg"):GetComponent("RectTransform").anchoredPosition 
		local reset = RecTran_MusicOff.transform:Find("img_btn_bg"):GetComponent("RectTransform").anchoredPosition 
		local target = RecTran_MusicOff.transform:Find("img_btn_bg"):GetComponent("RectTransform")
		sequence:Append(target:DOAnchorPos(position,timer))
		sequence:AppendCallback(function()
			RecTran_MusicON.gameObject:SetActive(true);
			RecTran_MusicOff.gameObject:SetActive(false);
			target.anchoredPosition = reset;
		end)
    else
		local sequence = CS.DG.Tweening.DOTween.Sequence()
		local position = RecTran_MusicOff.transform:Find("img_btn_bg"):GetComponent("RectTransform").anchoredPosition 
		local reset = RecTran_MusicON.transform:Find("img_btn_bg"):GetComponent("RectTransform").anchoredPosition 
		local target = RecTran_MusicON.transform:Find("img_btn_bg"):GetComponent("RectTransform")
		sequence:Append(target:DOAnchorPos(position,timer))
		sequence:AppendCallback(function()
			RecTran_MusicON.gameObject:SetActive(false);
			RecTran_MusicOff.gameObject:SetActive(true);
			target.anchoredPosition = reset;
		end)
    end
end;


local function SetSoundStatus(isOn)
    G.Tool.Sound.SoundStatus(isOn)
    G.GameConfig.SoundStatus=isOn;
    if isOn then
		local sequence = CS.DG.Tweening.DOTween.Sequence()
		local position = RecTran_SoundON.transform:Find("img_btn_bg"):GetComponent("RectTransform").anchoredPosition 
		local reset = RecTran_SoundOff.transform:Find("img_btn_bg"):GetComponent("RectTransform").anchoredPosition 
		local target = RecTran_SoundOff.transform:Find("img_btn_bg"):GetComponent("RectTransform")
		sequence:Append(target:DOAnchorPos(position,timer))
		sequence:AppendCallback(function()
			RecTran_SoundON.gameObject:SetActive(true);
			RecTran_SoundOff.gameObject:SetActive(false);
			target.anchoredPosition = reset;
		end)
    else
		local sequence = CS.DG.Tweening.DOTween.Sequence()
		local position = RecTran_SoundOff.transform:Find("img_btn_bg"):GetComponent("RectTransform").anchoredPosition 
		local reset = RecTran_SoundON.transform:Find("img_btn_bg"):GetComponent("RectTransform").anchoredPosition 
		local target = RecTran_SoundON.transform:Find("img_btn_bg"):GetComponent("RectTransform")
		sequence:Append(target:DOAnchorPos(position,timer))
		sequence:AppendCallback(function()
			RecTran_SoundON.gameObject:SetActive(false);
			RecTran_SoundOff.gameObject:SetActive(true);
			target.anchoredPosition = reset;
		end)
    end
end;


function Start()
    btn_DelButton:AddClickListener(function()
        delTimes = delTimes + 1
        if delTimes == 5 then
            CS.UIBubblePrompt.Show("再按5次就會刪除下載資料!", "UIHall")
        end

        if delTimes >= 10 then
            CS.UIBubblePrompt.Show("已刪除下載資料!", "UIHall")
            delTimes = 0

            CS.FileUtility.DeleteDirectory(CS.AppDefine.LOCAL_TEMP_PATH)            
            CS.FileUtility.DeleteDirectory(CS.AppDefine.LOCAL_DATA_PATH)
        end
    end)

    --UpdateDomain2 无资料时 指显示切换账号
    if CS.UnityEngine.PlayerPrefs.GetString("UpdateDomain2", "") == ""  then 
        Btn_SwichAccount.gameObject:SetActive(true)
    else --显示 切换账号+换线
        RecTran_SwichButton.gameObject:SetActive(true)
    end

    Btn_Close:AddClickListener(function() CS.WindowManager.Instance:CloseWindow("UISetting", false) end)
    Btn_SwichAccount:AddClickListener(function() SwichAccount() end)
    Btn_SwichAccount2:AddClickListener(function() SwichAccount() end)

    --换线
    Btn_SwichRoute:AddClickListener(function() 
        G.GameConfig.IsUISetting = true
        local openparam = CS.WindowNodeInitParam("UIRoute", CS.AppDefine.HallNumber)
        openparam.NodeType = CS.BaseNodeType.Propmt;
        CS.WindowManager.Instance:OpenWindow(openparam)
    end)

    Tog_MusicGorup.onValueChanged:AddListener(function(isOn) SetMusicStatus(isOn) end)
    Tog_SoundGorup.onValueChanged:AddListener(function(isOn) SetSoundStatus(isOn) end)
end

function SwichAccount()
    G.ClearLoginData()
    CS.WindowManager.Instance:CloseWindow("UISetting", false);

    G.Tool.Sound.CloseBGMSound()
    CS.WindowManager.Instance:CloseWindow("UIHall", false);

    local openparam = CS.WindowNodeInitParam("UILogin", CS.AppDefine.HallNumber)
    openparam.NodeType = 0
    CS.WindowManager.Instance:OpenWindow(openparam)
end

-- 界面被打开时接收界面参数
function RefreshWindowData(windowData)
    userdata = G.User.GetCurrentUser()

    Txt_Version.text = "版本号：" .. G.Env.GetHallVersion() .. "\n(" .. 
						tostring(G.GameConfig.GameSiteID) .. "." .. tostring(G.GameConfig.GamePlatformID) .. "." .. tostring(G.GameConfig.GetServerOption()) .. ".".. G.GameDefine.Branch .. ")";

    Tog_MusicGorup.isOn = G.Tool.Sound.MusicStatus()
    Tog_SoundGorup.isOn = G.Tool.Sound.SoundStatus()

    SetMusicStatus(G.Tool.Sound.MusicStatus())
    SetSoundStatus(G.Tool.Sound.SoundStatus())
    --Img_HeadIcon:ResetSpriteByName(CS.AppDefine.HallNumber, tostring(userdata.UserData.HeadID))
    -- if userdata.UserData.IsBindGuest then
    --     Txt_UserName.text = userdata.UserData.LoginName;
    -- else
    --     Txt_UserName.text = "ID:" .. userdata.UserID .. "(游客)"
    -- end
end

function EscapeWindow()
    G.GameConfig.IsUISetting = false
    CS.WindowManager.Instance:CloseWindow("UISetting", false);
end