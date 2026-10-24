local RecTran_Main = this.transform:Find("_Main"):GetComponent("RectTransform")
local RecTran_GameList = this.transform:Find("_Main/Panel/_GameList"):GetComponent("RectTransform")
local Scrr_GameScrollView = this.transform:Find("_Main/Panel/_GameScrollView"):GetComponent("ScrollRect")
local RecTran_GameRootTemp = this.transform:Find("_Main/Panel/_GameScrollView/GameListContent/_GameRootTemp"):GetComponent("RectTransform")
local Btn_LeftPage = this.transform:Find("_Main/Panel/_LeftPage"):GetComponent("Button")
local Btn_RightPage = this.transform:Find("_Main/Panel/_RightPage"):GetComponent("Button")
local Txt_LoadingGameTips = this.transform:Find("_Main/_LoadingGameTips"):GetComponent("Text")
--local Btn_faq = this.transform:Find("_Main/dialog/_faq"):GetComponent("Button")
local Btn_Mail = this.transform:Find("_Main/Bottom/_Mail"):GetComponent("Button")
local Img_MailUnReadMark = this.transform:Find("_Main/Bottom/_Mail/_MailUnReadMark"):GetComponent("Image")
local Btn_Coffer = this.transform:Find("_Main/Bottom/_Coffer"):GetComponent("Button")
local Btn_Exchange = this.transform:Find("_Main/Bottom/_Exchange"):GetComponent("Button")
local Btn_ExchangeTmp = this.transform:Find("_Main/Bottom/_ExchangeTmp"):GetComponent("Button")
local Btn_Recharge = this.transform:Find("_Main/Bottom/_Recharge"):GetComponent("Button")
local Btn_CustomService = this.transform:Find("_Main/Bottom/_CustomService"):GetComponent("Button")
local Btn_Exit = this.transform:Find("_Main/TOP/_Exit"):GetComponent("Button")
local Btn_HeadIcon = this.transform:Find("_Main/TOP/_HeadIcon"):GetComponent("Button")
local Txt_Money = this.transform:Find("_Main/TOP_1/_Money"):GetComponent("Text")
local Btn_GetMoney = this.transform:Find("_Main/TOP/_GetMoney"):GetComponent("Button")
local Btn_Setting = this.transform:Find("_Main/TOP/_Setting"):GetComponent("Button")
local Btn_Notice = this.transform:Find("_Main/TOP/_Notice"):GetComponent("Button")
local Txt_PlayerID = this.transform:Find("_Main/TOP_1/_PlayerID"):GetComponent("Text")
local Btn_Upgrade = this.transform:Find("_Main/TOP/_Upgrade"):GetComponent("Button")
local RecTran_Ann = this.transform:Find("_Main/TOP/_Ann"):GetComponent("RectTransform")
local Txt_NoticeContent = this.transform:Find("_Main/TOP/_Ann/Ann/_NoticeContent"):GetComponent("Text")
local RecTran_Room = this.transform:Find("_Room"):GetComponent("RectTransform")
local Btn_RoomlistBack = this.transform:Find("_Room/_RoomlistBack"):GetComponent("Button")
local Img_RoomTitle = this.transform:Find("_Room/title/_RoomTitle"):GetComponent("Image")
local RecTran_Rooms = this.transform:Find("_Room/_Rooms"):GetComponent("RectTransform")
local RecTran_RoomList = this.transform:Find("_Room/_RoomList"):GetComponent("RectTransform")
local RecTran_RoomRow1 = this.transform:Find("_Room/_RoomList/_RoomRow1"):GetComponent("RectTransform")
local RecTran_RoomRow2 = this.transform:Find("_Room/_RoomList/_RoomRow2"):GetComponent("RectTransform")
--local Dropdown = this.transform:Find("Dropdown"):GetComponent("Dropdown")


--- 以上内容为工具脚本自动生成，请不要在这之上做任何修改---
 
local RoomList = { };
local GameLogoList = { };

local G = require "Global";
local user = G.User.GetCurrentUser();
local userdata = user.UserData

local yield_return = G.Util.async_to_sync
(
function(to_to_yield, cb)
    this:YieldAndCallback(to_to_yield, cb)
end
)

local showMessageBox = G.Util.async_to_sync(CS.UIMessageBox.Show)

local groupName = "UIHall";
 
-- 当前请求进入的游戏ID
local RequestGameID = 0;
local isFisrtRequestServerList = true
local mailList = { };
  
-- 游戏翻页时触发，用于显示或隐藏左右翻页按钮
local function onGamePageChanged(pageCount, currentIndex)
    if pageCount == 1 then
        Btn_LeftPage.gameObject:SetActive(false);
        Btn_RightPage.gameObject:SetActive(false);
    elseif currentIndex == 0 then
        Btn_LeftPage.gameObject:SetActive(false);
        Btn_RightPage.gameObject:SetActive(true);
    elseif pageCount == currentIndex + 1 then
        Btn_LeftPage.gameObject:SetActive(true);
        Btn_RightPage.gameObject:SetActive(false);
    else
        Btn_LeftPage.gameObject:SetActive(true);
        Btn_RightPage.gameObject:SetActive(true);
    end
end

local annShadeWidth = Txt_NoticeContent.transform.parent:GetComponent("RectTransform").sizeDelta.x -- 公告文本遮罩宽度 
local annInitPos = Txt_NoticeContent.transform.localPosition
local RectTran_NoticeContent = Txt_NoticeContent.transform:GetComponent("RectTransform")

function GetNoticeContentWidth()
    return CS.UnityEngine.UI.LayoutUtility.GetPreferredWidth(RectTran_NoticeContent)
end 
 
function Update()
    if G.IsGameStart() ~= true then
        if (#Txt_NoticeContent.text > 0 and Txt_NoticeContent.transform.localPosition.x > annInitPos.x - GetNoticeContentWidth() - annShadeWidth) then
            Txt_NoticeContent.transform.localPosition = Txt_NoticeContent.transform.localPosition - CS.UnityEngine.Vector3(CS.UnityEngine.Time.deltaTime * 50, Txt_NoticeContent.transform.localPosition.y, Txt_NoticeContent.transform.localPosition.z)
        else
            local message = G.Service.Ann.GetOneAnnMeg()

            if message == nil then
                RecTran_Ann.gameObject:SetActive(false)
                Txt_NoticeContent.text = ""
            else
                Txt_NoticeContent.transform.localPosition = annInitPos
                Txt_NoticeContent.text = message
                RecTran_Ann.gameObject:SetActive(true)
            end
        end
    end
end

function Start()

                -- local op1 = CS.UnityEngine.UI.Dropdown.OptionData("1234")
                -- Dropdown.options:Add(op1)
				
    local scrollPage = Scrr_GameScrollView:GetComponent("ScrollPage")
    scrollPage.OnPageChanged = scrollPage.OnPageChanged + onGamePageChanged

    for i = 0, RecTran_Rooms.childCount - 1, 1 do
        RoomList[i + 1] = RecTran_Rooms:GetChild(i)
    end

    for i = 0, RecTran_GameList.childCount - 1, 1 do
        GameLogoList[i + 1] = RecTran_GameList:GetChild(i)
    end

    RefreshServerList()
    --this:InvokeRepeating(RefreshServerList, 0, 60)

    -- Btn_faq:AddClickListener( function()
        -- local openparam = CS.WindowNodeInitParam("UIFAQ", CS.AppDefine.HallNumber)
        -- CS.WindowManager.Instance:OpenWindow(openparam)
    -- end )

    Btn_Exit:AddClickListener
    (
    function()
        EscapeWindow()
    end
    )

    Btn_RoomlistBack:AddClickListener
    (
    function()
        EscapeWindow()
    end
    )

    Btn_HeadIcon:AddClickListener
    (
    function()

        local openparam = CS.WindowNodeInitParam("UIUserInfo", CS.AppDefine.HallNumber)

        openparam.WindowCloseCallBack =
        (
        function()
            RefreshUserInfo()
        end
        )

        CS.WindowManager.Instance:OpenWindow(openparam)
    end
    )

    Btn_Recharge:AddClickListener
    (
    function()
        OpenRechargeUI()
    end
    )

    Btn_Exchange:AddClickListener
    (
    function()

        if userdata.IsBindGuest ~= true then

            G.Util.coroutine_call
            (
            function()
                local boxResult = showMessageBox(CS.MessageBoxStyle.OKCancel, "", "兑奖需要绑定用户信息，确认绑定吗？", "绑定", "取消");
                if boxResult == CS.MessageBoxResult.OK then
                    local openparam = CS.WindowNodeInitParam("UIUserInfo", CS.AppDefine.HallNumber)
                    openparam.WindowData = 1;
                    CS.WindowManager.Instance:OpenWindow(openparam)
                end
            end
            )()
        else
            -- CS.UIBubblePrompt.Show("功能尚未开放，敬请期待。", "UIHall")

            local openparam = CS.WindowNodeInitParam("UIExchange", CS.AppDefine.HallNumber)

            openparam.WindowCloseCallBack =
            (
            function()
                G.Service.Login.RequestUserInfoHall()
            end
            )

            CS.WindowManager.Instance:OpenWindow(openparam)
        end

    end
    )

    Btn_Coffer:AddClickListener
    (
    function()
        local openparam = CS.WindowNodeInitParam("UIBank", CS.AppDefine.HallNumber)

        openparam.WindowCloseCallBack =
        (
        function()
            RefreshUserInfo()
        end
        )


        CS.WindowManager.Instance:OpenWindow(openparam)
    end
    )

    Btn_Mail:AddClickListener
    (
    function()
        local openparam = CS.WindowNodeInitParam("UIMail", CS.AppDefine.HallNumber)

        openparam.WindowCloseCallBack =
        (
        function()
            if G.Service.Mail.HaveUnReadMail() then
                Img_MailUnReadMark.gameObject:SetActive(true);
            else
                Img_MailUnReadMark.gameObject:SetActive(false);
            end
        end
        )

        CS.WindowManager.Instance:OpenWindow(openparam)
    end
    )
    Btn_Setting:AddClickListener
    (
    function()
        local openparam = CS.WindowNodeInitParam("UISetting", CS.AppDefine.HallNumber)
        CS.WindowManager.Instance:OpenWindow(openparam)
    end
    )

    Btn_GetMoney:AddClickListener
    (
    function()
        OpenRechargeUI()
    end
    )

    Btn_Notice:AddClickListener
    (
    function()
        local openparam = CS.WindowNodeInitParam("UILoginNotice", CS.AppDefine.HallNumber)
        CS.WindowManager.Instance:OpenWindow(openparam)
    end
    )

    Btn_Upgrade:AddClickListener
    (
    function()
        local openparam = CS.WindowNodeInitParam("UIUserInfo", CS.AppDefine.HallNumber)

        openparam.WindowData = 1;

        openparam.WindowCloseCallBack =
        (
        function()
            RefreshUserInfo()
        end
        )

        CS.WindowManager.Instance:OpenWindow(openparam)
    end
    )

    Btn_CustomService:AddClickListener
    (
    function()
        local openparam = CS.WindowNodeInitParam("UISendMsgToGM", CS.AppDefine.HallNumber)
        CS.WindowManager.Instance:OpenWindow(openparam)
    end
    )

    Btn_LeftPage:AddClickListener
    (
    function()
        Scrr_GameScrollView:GetComponent("ScrollPage"):ToPrePage();
    end
    )

    Btn_RightPage:AddClickListener
    (
    function()
        Scrr_GameScrollView:GetComponent("ScrollPage"):ToNextPage();
    end
    )

    -- 游戏断线重连判断
    if userdata.IsGaming and userdata.LockGameID ~= 0 and userdata.ServerAddr ~= "" then
        G.Util.coroutine_call
        (
        function()
            local boxResult = showMessageBox(CS.MessageBoxStyle.OKCancel, "", "你正在房间[" .. userdata.ServerName .. "]中进行游戏，是否进入房间继续游戏？", "继续", "取消");
            print(boxResult)
            if boxResult == CS.MessageBoxResult.OK then
                local addressParm = G.Tool.StringHelper.Split(userdata.ServerAddr, ":");
                local ipAddress, port = G.Server.GetGameServerAddr(addressParm[1], addressParm[2])
                RequestGameID = userdata.LockGameID
                G.SetRunGameIPAndPort(ipAddress, port)
                print("去检查游戏版本------------------------------------")
                G.Service.NetworkService.CheckGameVersion(RequestGameID)
            end
        end
        )()
    else
        -- 判断是否弹出公告信息
        -- if userdata.IsTopWindow then
            -- local openparam = CS.WindowNodeInitParam("UILoginNotice", CS.AppDefine.HallNumber)
            -- openparam.WindowCloseCallBack =
            -- (
            -- function()
                -- CheckNeedShowBingdingGift()
            -- end
            -- )
            -- CS.WindowManager.Instance:OpenWindow(openparam)
        -- else
            -- CheckNeedShowBingdingGift()
        -- end
    end
end

function OpenRechargeUI()

    if G.Service.UIFlag.IsIOSRecharge() then
        local openparam = CS.WindowNodeInitParam("UIRecharge_IOS", CS.AppDefine.HallNumber)
        openparam.WindowCloseCallBack =
        (
        function()
            RefreshUserInfo()
        end
        )
        CS.WindowManager.Instance:OpenWindow(openparam)
    else
        local openparam = CS.WindowNodeInitParam("UIRecharge", CS.AppDefine.HallNumber)

        openparam.WindowCloseCallBack =
        (
        function()
            RefreshUserInfo()
        end
        )

        CS.WindowManager.Instance:OpenWindow(openparam)
    end
end

function CheckNeedShowBingdingGift()
    if userdata.IsBindGuest ~= true then
        local openparam = CS.WindowNodeInitParam("UIBindingGift", CS.AppDefine.HallNumber)
        CS.WindowManager.Instance:OpenWindow(openparam)
    end
end

-- 拦截邮件消息
G.Service.Mail.RegMailRetCallBack( function()
    if G.Service.Mail.HaveUnReadMail() then
        Img_MailUnReadMark.gameObject:SetActive(true);
    else
        Img_MailUnReadMark.gameObject:SetActive(false);
    end
end )
-- 界面被打开时接收界面参数
function RefreshWindowData(windowData)
    G.Tool.Sound.PlayHallBGM("HallBGM")

    G.Service.Mail.InitLoadMailList()
    G.Service.Login.RequestUserInfoHall()
    if windowData ~= nil and windowData.OpenRechargeUI then
        OpenRechargeUI()
    end
end

-- region 刷新用户个人信息
G.NetQ.RegMsgHook(G.Proto.BClass.Hall, G.Proto.Hall.UserHallInfoID, function(receiveMsg)
    if receiveMsg.Code == 1 then
        G.User.SetCurrentUserInfo(receiveMsg)
        RefreshUserInfo()
    else
        CS.UIBubblePrompt.Show(receiveMsg.Message, groupName);
    end
end , groupName);

-- endregion

function RefreshUserInfo()
    user = G.User.GetCurrentUser();
    userdata = user.UserData

    Txt_PlayerID.text = "ID: " .. user.UserID

    if userdata.IsBindGuest == false then
        Txt_PlayerID.text = Txt_PlayerID.text .. "(游客)"
    end

    Btn_Upgrade.gameObject:SetActive(userdata.IsBindGuest == false)

    Btn_HeadIcon:GetComponent("Image"):ResetSpriteByName(CS.AppDefine.HallNumber, tostring(userdata.HeadID))
    Txt_Money.text = G.Tool.UserHelper.ToCash(userdata.CashAmount);
end
 
function RefreshServerList()
    if G.IsGameStart() ~= true then
        if isFisrtRequestServerList then
            CS.UILoadingData.Show("正在请求游戏列表");
        end

        print("请求服务器列表...")
        G.NetQ.SendMsg(G.Proto.BClass.Hall, G.Proto.Hall.RequestServerListID, nil)
    end
end

-- region 请求服务器列表返回结果
G.NetQ.RegMsgHook(G.Proto.BClass.Hall, G.Proto.Hall.ServerListDataID, function(receiveMsg)

    if Txt_LoadingGameTips.gameObject.activeSelf then
        Txt_LoadingGameTips.gameObject:SetActive(false)
    end

    if isFisrtRequestServerList then
        isFisrtRequestServerList = false
        CS.UILoadingData.Hide()
    end

    print("获得服务器列表信息")
    G.Tool.TableHelper.Print(receiveMsg)
    local gamelist = { };
    for i, gameInfo in ipairs(receiveMsg.ServerList) do

        if (not gamelist[gameInfo.GameID]) then
            gamelist[gameInfo.GameID] = { };
        end

        gamelist[gameInfo.GameID][gameInfo.Flag] = gameInfo;
    end

    print("实例化游戏界面按钮")

    -- 临时变量，用于确定是否需要显示游戏Icon
    for i = 1, #GameLogoList, 1 do
        GameLogoList[i].gameObject:SetActive(false)
        GameLogoList[i]:SetParent(RecTran_GameList)
    end

    RecTran_GameRootTemp.transform.parent:DestoryAllChildren(false);

    local activeGameNumber = 0
    local logoParent;

    local userGameList = G.User.GetUserGameList()

    for _, gid in pairs(userGameList) do

        for gameId, subList in pairs(gamelist) do
			if G.GetGamePName(gameId) ~= nil then
				if gameId == gid then
					if activeGameNumber == 0 or activeGameNumber == 8 or activeGameNumber == 16 then
						logoParent = CS.UnityEngine.GameObject.Instantiate(RecTran_GameRootTemp.gameObject);
						logoParent.transform:SetParent(RecTran_GameRootTemp.parent);
						logoParent.transform.localScale = CS.UnityEngine.Vector3(1, 1, 1)
						logoParent.transform.localPosition = CS.UnityEngine.Vector3.zero
						logoParent:SetActive(true)
					end

					if GameLogoList[gameId] ~= nil then
						GameLogoList[gameId]:SetParent(logoParent.transform);
						GameLogoList[gameId].gameObject:SetActive(true);

						activeGameNumber = activeGameNumber + 1

						-- local gameEf = GameLogoList[gameId]:Find("gameInfo/GameLogoEf").gameObject
						-- CS.Utility.SetUISortingOrder(gameEf)

						GameLogoList[gameId]:GetComponent("Button").onClick:RemoveAllListeners()
						GameLogoList[gameId]:GetComponent("Button"):AddClickListener
						( function()
							Img_RoomTitle:ResetSpriteByName(CS.AppDefine.HallNumber, "GameTitle_" .. gameId, true);
							GameClick(subList);
						end );
					end
				end
			else
				print("*********** no game gameId", gameId)
			end
        end
    end

    Scrr_GameScrollView:GetComponent("ScrollPage"):SetPageCount(math.ceil(activeGameNumber / 8.0));
end , groupName);

-- EnterGame
function GameClick(subList)
    subList = G.Tool.TableHelper.Sort(subList, function(a, b)
        return a.Flag < b.Flag
    end )

    -- 临时变量，用于确定是否需要显示房间Icon
    local isShowIcon = false

    for i = 1, #RoomList, 1 do
        local gameRoomIns = RoomList[i]
        isShowIcon = false;
        for k, v in pairs(subList) do
            if v.Flag == tostring(i) then
                isShowIcon = true
                gameRoomIns:SetParent(G.CaseWhen(k < 4, RecTran_RoomRow1.gameObject.transform, RecTran_RoomRow2.gameObject.transform))
                gameRoomIns.localScale = CS.UnityEngine.Vector3(1, 1, 1)
                gameRoomIns.localPosition = CS.UnityEngine.Vector3(0, 0, 0)
                gameRoomIns.gameObject:SetActive(true)

                gameRoomIns:Find("Info1"):GetComponent("Text").text = string.format("入场限制：" .. G.Tool.UserHelper.ToCashUnit(v.LoginMoney));
                gameRoomIns:Find("Info2"):GetComponent("Text").text = string.format("底分:" .. G.Tool.UserHelper.ToCashUnit(v.BaseScore));

                gameRoomIns:GetComponent("Button").onClick:RemoveAllListeners()
                gameRoomIns:GetComponent("Button"):AddClickListener( function() RoomClick(v); end);

                -- local roomEf = gameRoomIns.transform:Find("RoomEF").gameObject
                -- CS.Utility.SetUISortingOrder(roomEf)
            end

            if not isShowIcon then
                gameRoomIns:SetParent(RecTran_Rooms)
                gameRoomIns.gameObject:SetActive(false)
            end
        end
    end

    RecTran_Main.gameObject:SetActive(false);
    RecTran_Room.gameObject:SetActive(true);
end

-- EnterRoom
function RoomClick(serverinfo)
    RequestGameID = serverinfo.GameID

    print("room click ..", RequestGameID)

    -- 强制解锁
    G.NetQ.Resume()
    local requestGameServerAddrInfo = { };
    requestGameServerAddrInfo.ServerFlag = serverinfo.Flag;
    requestGameServerAddrInfo.GameID = serverinfo.GameID;
    print("gameid", requestGameServerAddrInfo.GameID)
    G.Service.NetworkService.RequestGameGameServerAddr(requestGameServerAddrInfo)
	
	-- G.SetRunGameIPAndPort("0.0.0.0", 13700)
	-- G.Service.NetworkService.sendLoginRoom(serverinfo.GameID)
end

-- endregion

-- region 登录房间消息处理
G.NetQ.RegMsgHook(G.Proto.BClass.GameRoom, G.Proto.GameRoom.LoginRoomRetID, function(receiveMsg)
    CS.UILoadingData.Hide()

    if receiveMsg.Code ~= 1 then
        if (G.IsGameStart() == true) then
            G.Service.Game.ExitGame()
        end

        -- 关闭连接
        print("登录房间失败", string.find(receiveMsg.Message, "金币不足"))
        G.Tool.TableHelper.Print(receiveMsg)
        if (receiveMsg.Code == -2) then
            G.Util.coroutine_call
            (
            function()
                local boxResult = showMessageBox(CS.MessageBoxStyle.OKCancel, "", receiveMsg.Message, "前往充值", "取消");

                if boxResult == CS.MessageBoxResult.OK then
                    OpenRechargeUI()
                end
            end
            )()
        elseif (receiveMsg.Code == -3) then
            G.Util.coroutine_call
            (
            function()
                print("提示用户是否需要进入所在房间")
                local boxResult = showMessageBox(CS.MessageBoxStyle.OKCancel, "", receiveMsg.Message, "继续", "取消");
                print(boxResult)
                if boxResult == CS.MessageBoxResult.OK then
                    local serverParm = G.Tool.StringHelper.Split(receiveMsg.UserData.ServerAddr, "|");
                    RequestGameID = tonumber(serverParm[1])
                    local addressParm = G.Tool.StringHelper.Split(serverParm[2], ":");
                    local ipAddress, port = G.Server.GetGameServerAddr(addressParm[1], addressParm[2])
                    G.SetRunGameIPAndPort(ipAddress, port)
                    print("重新拉玩家进房间去检查游戏版本------------------------------------")
                    G.Service.NetworkService.CheckGameVersion(RequestGameID)
                end
            end
            )()
        else
            -- 提示失败原因
            CS.UIBubblePrompt.Show(receiveMsg.Message, "UIHall")
        end
    else
        print("进入房间成功")
        G.NetQ.Pause()
        G.Room.SetRoomInfo(receiveMsg.RoomInfo)


        if G.IsGameStart() == true then
            print("reload游戏场景")
            G.Service.Game.ReloadGame( function()
                CS.GameManager.Instance:StartGame()
            end )
        else
            print("关闭大厅界面")
            G.SetRunGame(RequestGameID)
            G.Tool.Sound.CloseBGMSound()
            CS.WindowManager.Instance:CloseWindow("UIHall", true);
            CS.GameManager.Instance:StartGame();
        end

        print("当前加载场景数量 " .. CS.UnityEngine.SceneManagement.SceneManager.sceneCount)
    end
end , groupName);
-- endregion

-- region 玩家属性变化
G.NetQ.RegMsgHook(G.Proto.BClass.NotifyServer, G.Proto.NotifyServer.AttrChangeID, function(receiveMsg)
    -- 循环变化属性，做相应操作
    for i, Attr in ipairs(receiveMsg.Attrs) do
        -- 0 金币变化 1 新邮件
        if Attr.TypeID == 0 then
            userdata.CashAmount = Attr.Param
            RefreshUserInfo()
        elseif Attr.TypeID == 1 then
            G.Tool.Sound.PlayHallSound("NewMail")
            G.Service.Mail.RefreshMailList();
        elseif Attr.TypeID == 3 then
            print("-------------------", Attr.SParam)
            G.User.SetPayAmountConfig(Attr.SParam)
        end
    end
end , groupName);
-- endregion

-- 脚本删除时调用，释放变量，释放资源
function OnDestroy()
    if CS.SoundManager.Instance then
        G.Tool.Sound.CloseBGMSound()
    end

    -- 回收当前页面注册的消息
    G.NetQ.RemoveMsgHookByGroup(groupName)

    -- 清空当前界面的浮动提示消息
    CS.UIBubblePrompt.ClearPrompt(groupName)

    -- 移除邮件列表消息接拦截
    G.Service.Mail.RemoveRegMailMsg()

    local scrollPage = Scrr_GameScrollView:GetComponent("ScrollPage")
    scrollPage.OnPageChanged = scrollPage.OnPageChanged - onGamePageChanged
end

function EscapeWindow()
    if RecTran_Room.gameObject.activeSelf then
        -- 删除所有显示出来的子节点
        RecTran_Main.gameObject:SetActive(true);
        RecTran_Room.gameObject:SetActive(false);

    else
        G.Util.coroutine_call
        (
        function()
            local boxResult = showMessageBox(CS.MessageBoxStyle.OKCancelClose, "", "您确定要确认退出游戏吗？", "再玩一下", "残忍退出");

            if boxResult == CS.MessageBoxResult.Cancel then
                G.Service.Login.Logout()
                CS.UnityEngine.Application.Quit();
            end
        end
        )()
    end
end