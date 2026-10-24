local RecTran_Content = this.transform:Find("UIBody/HeadScr/Viewport/_Content"):GetComponent("RectTransform")
local Img_ChoosedMark = this.transform:Find("UIBody/HeadScr/Viewport/_ChoosedMark"):GetComponent("Image")
local Btn_RightMove = this.transform:Find("UIBody/_RightMove"):GetComponent("Button")
local Btn_LeftMove = this.transform:Find("UIBody/_LeftMove"):GetComponent("Button")
local Btn_Cancel = this.transform:Find("UIBody/_Cancel"):GetComponent("Button")

--- 以上内容为工具脚本自动生成，请不要在这之上做任何修改---

local G = require "Global";

local userdata = G.User.GetCurrentUser().UserData

local buttonPath = "UIBody/HeadScr/Viewport/_Content/Item/";

local currentIconIndex = 0;
local moveDistence = 713;

local groupName = "UIChooseHeadIcon";

-- 藉由ScrollBar來判斷目前所在頁面，開關左右按鈕
local UseScrollBar = true
local Scrollbar_HeadScrb = this.transform:Find("UIBody/_HeadScrb"):GetComponent("Scrollbar")

-- region 修改头像回调
G.NetQ.RegMsgHook(G.Proto.BClass.Hall, G.Proto.Hall.ModifyFaceRetID, function(receiveMsg)
    if receiveMsg.Code == 1 then
        userdata.HeadID = currentIconIndex
        userdata.Sex = G.CaseWhen(currentIconIndex > 8, 1, 0)

        CS.UIBubblePrompt.Show("修改头像成功", "UIUserInfo");
        CS.WindowManager.Instance:CloseWindow("UIChooseHeadIcon", false);
    else
        CS.UIBubblePrompt.Show(receiveMsg.Message, groupName);
    end
end , groupName);

-- 初始化函数，实例化之后调用一次
function Start()

    for i = 1, 16, 1 do
        local btnIcon = this.transform:Find(buttonPath .. tostring(i)):GetComponent("Button")

        btnIcon:AddClickListener
        (
        function()
            currentIconIndex = i;
            SetCurrentHead(btnIcon.transform)
              local sendMsg = { }

        -- 手机号
        sendMsg.FaceID = currentIconIndex
        --  修改头像
        G.NetQ.SendMsg(G.Proto.BClass.Hall, G.Proto.Hall.ModifyFaceID, sendMsg)
        end
        )
    end

    Btn_RightMove:AddClickListener
    (
    function()
        print(RecTran_Content.localPosition)
        RecTran_Content.localPosition = RecTran_Content.localPosition + CS.UnityEngine.Vector3(- moveDistence, 0, 0)
        print(RecTran_Content.localPosition)

    end
    )

    Btn_LeftMove:AddClickListener
    (
    function()
        RecTran_Content.localPosition = RecTran_Content.localPosition + CS.UnityEngine.Vector3(moveDistence, 0, 0)
    end
    )

--    Btn_Confirm:AddClickListener
--    (
--    function()
--        local sendMsg = { }

--        -- 手机号
--        sendMsg.FaceID = currentIconIndex

--        --  修改头像
--        G.NetQ.SendMsg(G.Proto.BClass.Hall, G.Proto.Hall.ModifyFaceID, sendMsg)
--    end
--    )

    Btn_Cancel:AddClickListener
    (
    function()
        CS.WindowManager.Instance:CloseWindow("UIChooseHeadIcon", false);
    end
    )
end

-- 每帧调用一次
function Update()

end

-- 脚本删除时调用，释放变量，释放资源
function OnDestroy()
    -- 回收当前页面注册的消息
    G.NetQ.RemoveMsgHookByGroup(groupName)
end 

-- 界面被打开时接收界面参数
function RefreshWindowData(windowData)

    currentIconIndex = userdata.HeadID

    for i = 1, 16, 1 do
        if currentIconIndex == i then
            local currentHeadIcon = this.transform:Find(buttonPath .. tostring(i))
            SetCurrentHead(currentHeadIcon)

            if (i > 4 and i < 9) or i > 12 then
                print("修改位置")
                print(RecTran_Content.sizeDelta.x)
                print(RecTran_Content.localPosition)
                RecTran_Content.localPosition = RecTran_Content.localPosition + CS.UnityEngine.Vector3(- moveDistence, 0, 0)
                print(RecTran_Content.localPosition)
				
				UpdateButtonByType(1)
			else
				UpdateButtonByType(-1)				
            end
        end
    end

	Scrollbar_HeadScrb.onValueChanged:AddListener(UpdateButton);
end

function SetCurrentHead(headIcon)
    Img_ChoosedMark.transform:SetParent(headIcon)
    Img_ChoosedMark.transform.localScale = CS.UnityEngine.Vector3(1, 1, 1)
    Img_ChoosedMark.transform.localPosition = CS.UnityEngine.Vector3(0, 0, 0)
end

function UpdateButton()
	if Scrollbar_HeadScrb.value <= 0.05 then
		UpdateButtonByType(-1)
	elseif Scrollbar_HeadScrb.value >= 0.95 then
		UpdateButtonByType(1)
	else
		UpdateButtonByType(0)
	end
end

function UpdateButtonByType(Type)
	if UseScrollBar == false then
		return
	end
	
	if Type == -1 then
		Btn_LeftMove.gameObject:SetActive(false)
		Btn_RightMove.gameObject:SetActive(true)
	elseif Type == 1 then
		Btn_LeftMove.gameObject:SetActive(true)
		Btn_RightMove.gameObject:SetActive(false)
	else
		Btn_LeftMove.gameObject:SetActive(true)
		Btn_RightMove.gameObject:SetActive(true)
	end
end

function EscapeWindow()
    CS.WindowManager.Instance:CloseWindow("UIChooseHeadIcon", false);
end