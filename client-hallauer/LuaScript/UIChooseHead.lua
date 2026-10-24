
local Btn_Cancel = this.transform:Find("UIBody/_Cancel"):GetComponent("Button")
local Btn_Recharge = this.transform:Find("UIBody/_Recharge"):GetComponent("Button")

local Img_Head = this.transform:Find("UIBody/_head"):GetComponent("Image")

local HeadAttach = this.transform:Find("UIBody/_HeadScr/Content"):GetComponent("RectTransform")
local HeadPrefab = this.transform:Find("UIBody/_HeadScr/Content/Item"):GetComponent("RectTransform")

local Txt_ID = this.transform:Find("UIBody/_PlayerId/_PlayerID"):GetComponent("Text")
local Txt_Money = this.transform:Find("UIBody/_Recharge/_Money"):GetComponent("Text")

--- 以上内容为工具脚本自动生成，请不要在这之上做任何修改---

local G = require "Global";

local user = G.User.GetCurrentUser()
local userdata = user.UserData

local groupName = "UIChooseHead";

local HeadData = {}

local currentHeadIndex

-- 初始化函数，实例化之后调用一次
function Start()	
    Btn_Cancel:AddClickListener
    (
    function()
		EscapeWindow()
    end
    )
	
    Btn_Recharge:AddClickListener(function()
        OpenRechargeUI()
		EscapeWindow()
    end)
end

-- 脚本删除时调用，释放变量，释放资源
function OnDestroy()
    -- 回收当前页面注册的消息
    G.NetQ.RemoveMsgHookByGroup(groupName)
end 

-- region 修改头像回调
G.NetQ.RegMsgHook(G.Proto.BClass.Hall, G.Proto.Hall.ModifyFaceRetID, function(receiveMsg)
    if receiveMsg.Code == 1 then
        userdata.HeadID = currentHeadIndex
		
        CS.UIBubblePrompt.Show("修改头像成功", "UIChooseHead");
		
		UpdateHead()
    else
        CS.UIBubblePrompt.Show(receiveMsg.Message, groupName);
    end
end , groupName);

-- 界面被打开时接收界面参数
function RefreshWindowData(windowData)
	
    local playerID = "ID:" .. user.UserID
    if userdata.IsBindGuest == false then
        playerID = playerID --.. "(游客)"
    end	
    Txt_ID.text = tostring(playerID);

    Txt_Money.text = G.Tool.UserHelper.ToCashDetail(userdata.CashAmount);	
	
	-- 頭像
    currentHeadIndex = userdata.HeadID
		
    for i = 9, 16, 1 do	
		local clone = CS.UnityEngine.GameObject.Instantiate(HeadPrefab)
		clone.transform:SetParent(HeadAttach.transform)
		clone.transform.localPosition = CS.UnityEngine.Vector3.zero
		clone.transform.localScale = CS.UnityEngine.Vector3.one
		
		local data = {}
		data.index = i
		data.icon = clone.transform:Find("icon"):GetComponent("Image")
		data.use = clone.transform:Find("use"):GetComponent("Image")
        table.insert(HeadData, data)
		
		data.icon:ResetSpriteByName(CS.AppDefine.HallNumber, tostring(data.index))
		
        local btnIcon = clone:GetComponent("Button")
        btnIcon:AddClickListener
        (
        function()		
			if currentHeadIndex == i then
				return
			end

            currentHeadIndex = i;		

			local sendMsg = { }
			sendMsg.FaceID = currentHeadIndex
			G.NetQ.SendMsg(G.Proto.BClass.Hall, G.Proto.Hall.ModifyFaceID, sendMsg)
        end
        )
    end
	HeadPrefab.gameObject:SetActive(false)
		
	UpdateHead()
end

function UpdateHead()
	Img_Head:ResetSpriteByName(CS.AppDefine.HallNumber, tostring(currentHeadIndex))
	
    for i, data in ipairs(HeadData) do
		if data.index == currentHeadIndex then
			data.use.gameObject:SetActive(true)
		else
			data.use.gameObject:SetActive(false)
		end
	end
end

function SetCurrentHead(headIcon)
    Img_ChoosedMark.transform:SetParent(headIcon)
    Img_ChoosedMark.transform.localScale = CS.UnityEngine.Vector3(1, 1, 1)
    Img_ChoosedMark.transform.localPosition = CS.UnityEngine.Vector3(0, 0, 0)
end

function EscapeWindow()
    CS.WindowManager.Instance:CloseWindow("UIChooseHead", false);
end

function OpenRechargeUI()
    local openparam = nil;
    local CashAmount = userdata.CashAmount

    if G.GameConfig.IsSubmissionCtx() == true then
        openparam = CS.WindowNodeInitParam("UIRecharge_IOS", CS.AppDefine.HallNumber)
    else
        openparam = CS.WindowNodeInitParam("UIRecharge", CS.AppDefine.HallNumber)
    end
    -- 充值頁面關閉時重刷大廳資訊
    openparam.WindowCloseCallBack =
    (function()
		-- 金額變多表示充值
        if userdata.CashAmount > CashAmount then
            G.Service.Login.RequestUserInfoHall()
        end
    end)
    CS.WindowManager.Instance:OpenWindow(openparam)
end