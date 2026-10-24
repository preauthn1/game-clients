local RecTran_Main = this.transform:Find("_Main"):GetComponent("RectTransform")
local RecTran_GameList = this.transform:Find("_Main/Panel/_GameList"):GetComponent("RectTransform")
local Scrr_GameScrollView = this.transform:Find("_Main/Panel/GameAttach/_GameScrollView"):GetComponent("ScrollRect")
local RecTran_GameScrollView = this.transform:Find("_Main/Panel/GameAttach/_GameScrollView"):GetComponent("RectTransform")

local RecTran_Panel = this.transform:Find("_Main/Panel"):GetComponent("RectTransform")
local Layout_Panel = this.transform:Find("_Main/Panel"):GetComponent("HorizontalLayoutGroup")
local RecTran_GameAttach = this.transform:Find("_Main/Panel/GameAttach"):GetComponent("RectTransform")

local RecTran_GameRootTemp = this.transform:Find("_Main/Panel/GameAttach/_GameScrollView/GameListContent/_GameRootTemp"):GetComponent("RectTransform")
local GridLayoutGroup_GameRootTemp = this.transform:Find("_Main/Panel/GameAttach/_GameScrollView/GameListContent/_GameRootTemp"):GetComponent("GridLayoutGroup")
local RecTran_GameAttachList = this.transform:Find("_Main/Panel/GameAttach/_GameScrollView/GameListContent"):GetComponent("RectTransform")
local Txt_LoadingGameTips = this.transform:Find("_Main/_LoadingGameTips"):GetComponent("Text")

local Btn_Mail = this.transform:Find("_Main/TOP/_Mail"):GetComponent("Button")
local Img_Mail1 = this.transform:Find("_Main/TOP/_Mail/ImageState1"):GetComponent("Image")
local Img_Mail2 = this.transform:Find("_Main/TOP/_Mail/ImageState2"):GetComponent("Image")
local Txt_Mail = this.transform:Find("_Main/TOP/_Mail/ImageState2/Text"):GetComponent("Text")

local Btn_Recharge = this.transform:Find("_Main/TOP/_Recharge"):GetComponent("Button")

local Btn_Setting = this.transform:Find("_Main/TOP/_Setting"):GetComponent("Button")

local RecTran_Ann = this.transform:Find("_Main/TOP/_Ann"):GetComponent("RectTransform")
local Txt_NoticeContent = this.transform:Find("_Main/TOP/_Ann/Ann/_NoticeContent"):GetComponent("Text")

local RecTran_NoDataGame = this.transform:Find("_Main/Panel/_GameList/_NoDataGame"):GetComponent("RectTransform")
local recTran__flagRoot = this.transform:Find("_Main/Panel/_flag"):GetComponent("RectTransform")

local ImgShader = this.transform:Find("_Main/Panel/_shader"):GetComponent("Image")

local RecTran_CellPhone = this.transform:Find("CellPhone"):GetComponent("RectTransform")
local CellPhoneAni = this.transform:Find("CellPhone/CellphoneAni")

--- 以上内容为工具脚本自动生成，请不要在这之上做任何修改---


local updatemode = 1

local RoomList = {};
local GameLogoList = {};
local GameVersion = {};
local GameT = {};
local gamelist = {};
local autolist = {};
local rootGameBg = {}

local iconNameList = {};

local moneypool = 0

local G = require "Global";
local user = G.User.GetCurrentUser();
local userdata = user.UserData
local CheckIsGetData = G.RequireG("Tools/CheckIsGetData")
local uiCommon = G.RequireG("UIHallCommon")
uiCommon.Init(this.transform:Find("_Common"):GetComponent("RectTransform"))

local ui_AD = G.RequireG("UIHallAD")
local RecTran_Carousel = this.transform:Find("_Main/Panel/GameAttach/_GameScrollView/GameListContent/_Carousel"):GetComponent("RectTransform")
ui_AD.Init(this, RecTran_Carousel, 
	function(adtype, CurrentUrl)
		--adtype = 8

		-- 0:複製,1:直連該網頁,2:一鍵入廳,3:甚麼都不做,4:前往充值,5:评分(IOS),7:開啟IOS儲存網頁,8:活動
		if (adtype == 0) then
			CS.Utility.CopyText(CurrentUrl)
			CS.UIBubblePrompt.Show("复制成功", groupName);
		elseif (adtype == 1) then
			CS.UnityEngine.Application.OpenURL(CurrentUrl)
		elseif (adtype == 2) then
			local gameId = tonumber(CurrentUrl);
			local nversion = CS.HotUpdate.HotUpdateManager.Instance:GetProjectVersion(G.GetGamePName(gameId))
			local rversion = GameVersion[gameId]
			--当尚未下载先下载游戏
			if (CheckGameIsDownLoad(gameId) and (VersionToNum(nversion, gameId) < VersionToNum(rversion, gameId))) then
				StartDownloadGame(gamelist[gameId], gameId)
			else
				-- 一鍵入廳
				if (not autolist[gameId]) then

				-- 自動入桌
				else
					RoomClick(autolist[gameId], 1);
				end
			end
		elseif (adtype == 3) then
			--甚麼多不做
		elseif (adtype == 4) then
			--Go Recharge
			OpenRechargeUI();

		elseif (adtype == 5) then
			if CurrentUrl ~= nil and CurrentUrl ~= '' then
				CS.UnityEngine.Application.OpenURL(CurrentUrl)
			end
		elseif (adtype == 6) then

		elseif (adtype == 7) then
			if CurrentUrl ~= nil and CurrentUrl ~= '' then
				PlayCellPhoneAni()
			end
		end	
	end)

local yield_return = G.Util.async_to_sync(function(to_to_yield, cb)
    this:YieldAndCallback(to_to_yield, cb)
end)

local showMessageBox = G.Util.async_to_sync(CS.UIMessageBox.Show)

local groupName = "UIHall";

-- 当前请求进入的游戏ID
local RequestGameID = 0;
local isFisrtRequestServerList = true
local isFisrtGetUserInfo = true
local mailList = {};
local activeGameNumber = 0;
local GameListWidth = 900;
local nowGameId = 0
local IsGetServerList = false

local RefreshServerListTime = 60

local annShadeWidth = Txt_NoticeContent.transform.parent:GetComponent("RectTransform").rect.width -- 公告文本遮罩宽度 
local annInitPos = Txt_NoticeContent.transform.localPosition
local RectTran_NoticeContent = Txt_NoticeContent.transform:GetComponent("RectTransform")

function GetNoticeContentWidth()
    return CS.UnityEngine.UI.LayoutUtility.GetPreferredWidth(RectTran_NoticeContent)
end

local Check_UserData = nil
local Check_Mail = nil

-- 拦截邮件消息
G.Service.Mail.RegMailRetCallBack(function()
    if Check_Mail ~= nil then
        Check_Mail.SetGetDataFinish()
    end
    UpdateElement()
end)

local isGetAllDataFinish = false
function CheckGetData()
    if isGetAllDataFinish == false then
        if Check_UserData ~= nil then
            Check_UserData.UpdateGetData()
        end
		
        if Check_Mail ~= nil then
            Check_Mail.UpdateGetData()
        end
		
        if (Check_UserData.IsGetDataFinish() == true and
			Check_Mail.IsGetDataFinish() == true) then

            isGetAllDataFinish = true

            CheckShowMail()
        end
	elseif(IsGetServerList == true)then
		CS.UILoading.Hide()
    end
end

function Update()
	
    -- 更新熱更百分比
    DoHotUpdate()

    -- 檢查所有資料是否下載完畢
    CheckGetData()

    -- 檢查是否要過serverlist
    CheckServerList()

    -- 送審階段關掉跑馬燈 By Rayon
    if G.GameConfig.IsSubmissionCtx() == true then
        return
    end

    if G.IsGameStart() ~= true then
        if (#Txt_NoticeContent.text > 0 and Txt_NoticeContent.transform.localPosition.x > annInitPos.x - GetNoticeContentWidth() - annShadeWidth) then

            Txt_NoticeContent.transform.localPosition = Txt_NoticeContent.transform.localPosition - CS.UnityEngine.Vector3(CS.UnityEngine.Time.deltaTime * 50, Txt_NoticeContent.transform.localPosition.y, Txt_NoticeContent.transform.localPosition.z)
        else
            local message = G.Service.Ann.GetOneAnnMeg()

            if message == nil then
                RecTran_Ann.gameObject:SetActive(false)
                Txt_NoticeContent.text = ""
            else
                message = string.gsub(message, "%s", " ")
                Txt_NoticeContent.transform.localPosition = annInitPos
                Txt_NoticeContent.text = message
                RecTran_Ann.gameObject:SetActive(true)
            end
        end
    end
end

function Start()

    uiCommon.SetCallbackHeadIcon(OpenUserInfo)
    uiCommon.SetCallbackRecharge(OpenRechargeUI)
	
    CalculateGameScrollView()
	
    uiCommon.ShowRecharge(G.GameConfig.IsRechargeCtx())
    Btn_Recharge.gameObject:SetActive(G.GameConfig.IsRechargeCtx())


    UpdateElement()
	
    RecTran_GameList.gameObject:SetActive(false)
	
	for k, v in pairs(G.Game.GameIDs) do
        GameLogoList[k] = RecTran_GameList.transform:Find("GameLogo_" .. k):GetComponent("RectTransform")
    end

    this:InvokeRepeating(RefreshServerList, 0, RefreshServerListTime)
	
    G.Service.ReCharge.GetRechargeList()
	
    Btn_Recharge:AddClickListener(function()
        OpenRechargeUI()
    end)

    Btn_Mail:AddClickListener(function()
        local openparam = CS.WindowNodeInitParam("UIMailAndHelp", CS.AppDefine.HallNumber)
        openparam.WindowCloseCallBack =
        (function()
            RefreshUserInfo()
            UpdateElement()
        end)
        CS.WindowManager.Instance:OpenWindow(openparam)
    end)

    Btn_Setting:AddClickListener(function()
        local openparam = CS.WindowNodeInitParam("UISetting", CS.AppDefine.HallNumber)
        CS.WindowManager.Instance:OpenWindow(openparam)
    end)

    -- 皜豢??剔瑪???斗
    if userdata.IsGaming and userdata.LockGameID ~= 0 and userdata.ServerAddr ~= "" then
        G.Util.coroutine_call(function()
            local boxResult = showMessageBox(CS.MessageBoxStyle.OKCancel, "", "你正在房间[" .. G.Game.ReplaceGameName(userdata.ServerName) .. "]中进行游戏，是否进入房间继续游戏？", "继续", "取消");
            if boxResult == CS.MessageBoxResult.OK then
                -- 紀錄BUG，有時候userdata.ServerAddr拆分數字會有問題
                -- 原因LoginRetID中有ServerAddr值，後來傳來的UserHallInfoID中卻無ServerAddr值
                if userdata.ServerAddr ~= "" then
                    local addressParm = G.Tool.StringHelper.Split(userdata.ServerAddr, ":");
                    G.Server.GetGameServerAddrCallback(addressParm[1], addressParm[2], function(res, ipAddress, port)
                        if res == 0 then
                            RequestGameID = userdata.LockGameID
                            G.SetRunGameIPAndPort(ipAddress, port)

                            --寫入SKIN
                            local userGameList = nil;
                            if ((G.User.GetUserGameList2() ~= nil)) then
                                userGameList = G.User.GetUserGameList2()
                            else
                                userGameList = G.User.GetUserGameList()
                            end
                            local skin = G.Tool.TableHelper.Find(userGameList, function(v) return v.GameID == RequestGameID end)[1].Skin

                            print("去检查游戏版本------------------------------------")
                            G.GameConfig.RequestGameRemoteVersion = GameVersion[RequestGameID]

                            G.Service.NetworkService.CheckGameVersion(RequestGameID, skin)
                        else
                            CS.UIBubblePrompt.Show("游戏连接失败(1)", "UIHall")
                        end
                    end);
                else
                    CS.UIBubblePrompt.Show("游戏连接失败", "UIHall")
                end
            end
        end)()
    end
end

function OpenRechargeUI()
    local openparam = nil;
    local CashAmount = userdata.CashAmount

    if G.GameConfig.IsSubmissionCtx() == true then
        openparam = CS.WindowNodeInitParam("UIRecharge_IOS", CS.AppDefine.HallNumber)
    else
        openparam = CS.WindowNodeInitParam("UIRecharge", CS.AppDefine.HallNumber)
    end
    openparam.WindowCloseCallBack =
    (function()
        -- 充值頁面關閉時重刷大廳資訊
        if userdata.CashAmount > CashAmount then
            G.Service.Login.RequestUserInfoHall()
        else
            RefreshUserInfo()
        end
    end)
    CS.WindowManager.Instance:OpenWindow(openparam)
end

function OpenUserInfo()
    local openparam = CS.WindowNodeInitParam("UIChooseHead", CS.AppDefine.HallNumber)

    openparam.WindowCloseCallBack =
    (function()
        RefreshUserInfo()
    end)
    CS.WindowManager.Instance:OpenWindow(openparam)
end

function CheckShowMail()
	UpdateElement()
end

--计算游戏列表在画面显示范围
function CalculateGameScrollView()
    --计算全萤幕跟最小尺寸左边宽度
    local scrollWidth = (RecTran_Main.rect.width - RecTran_Panel.rect.width) * 0.5
    scrollWidth = RecTran_Main.rect.width - scrollWidth
    --扣掉左方显示的子物件
    for i = 0, RecTran_Panel.transform.childCount do
        local child = RecTran_Panel.transform:GetChild(i)
        --子物件不存在
        if child == nil then break end
        --子物件是要计算的物件停止扣除
        if child.gameObject.name == RecTran_GameAttach.gameObject.name then break end
        --子物件有显示才需计算
        if child.gameObject.activeSelf == true then
            child = child.transform:GetComponent("RectTransform")
            if child == nil then break end
            scrollWidth = scrollWidth - child.sizeDelta.x
        end
    end
    scrollWidth = scrollWidth - Layout_Panel.padding.left - Layout_Panel.padding.right
    RecTran_GameAttach.sizeDelta = CS.UnityEngine.Vector2(scrollWidth, RecTran_GameAttach.sizeDelta.y)
end

local CheckServerListTime = 1
local AccCheckServerListTime = 0
function CheckServerList()
    if IsGetServerList == true then
        return
    end

    AccCheckServerListTime = AccCheckServerListTime + CS.UnityEngine.Time.deltaTime
    if AccCheckServerListTime < CheckServerListTime then
        return
    else
        AccCheckServerListTime = 0
    end

    isFisrtRequestServerList = true

    RefreshServerList()
end

function GetUserInfoData()

    if Check_UserData == nil then
        Check_UserData = CheckIsGetData.Create()
        Check_UserData.Init(G.Service.Login.RequestUserInfoHall, "UserData", false)
    else
        Check_UserData.StartGet()
    end

    if Check_Mail == nil then
        Check_Mail = CheckIsGetData.Create()
        G.Service.Mail.ClearMailList()
        Check_Mail.Init(G.Service.Mail.InitLoadMailList, "Check_Mail", false)
    else
        Check_Mail.StartGet()
    end
end

-- 界面被打开时接收界面参数
function RefreshWindowData(windowData)
 	G.Tool.Sound.PlayHallBGM("bg_music")
	
	RecTran_Main.gameObject:SetActive(true);
	
    GetUserInfoData()

    if windowData ~= nil and windowData.OpenRechargeUI then
        OpenRechargeUI()
    end
end

-- 刷新用户个人信息
G.NetQ.RegMsgHook(G.Proto.BClass.Hall, G.Proto.Hall.UserHallInfoID, function(receiveMsg)
    if Check_UserData ~= nil then
        Check_UserData.SetGetDataFinish()
    end
	
    if receiveMsg.Code == 1 then		
        G.User.SetCurrentUserInfo(receiveMsg)
		
		local user_data = G.User.GetCurrentUser().UserData
		if user_data.HeadID == 0 then
			user_data.HeadID = 1
		end		
		if user_data.HeadID <= 8 then
			user_data.HeadID = user_data.HeadID + 8
		end
		
		RefreshUserInfo()
		
		-- 不是第一次取得玩家資訊
		if isFisrtGetUserInfo == false then
			-- 已經取得玩家列表，之後回到大廳取得玩家資訊後，再更新一次遊戲列表 by Rayon
			if isFisrtRequestServerList == false then
				if ui_AD ~= nil then
					ui_AD.RefreshAD()
				end
				RefreshServerList()
				this:CancelInvokeRepeat(RefreshServerList)
				this:InvokeRepeating(RefreshServerList, 60, RefreshServerListTime)
			end
		end
		
        RefreshDownloadGame()

		isFisrtGetUserInfo = true
    else
        CS.UIBubblePrompt.Show(receiveMsg.Message, groupName);
    end	
end, groupName);

function RefreshUserInfo()
    user = G.User.GetCurrentUser();
    userdata = user.UserData

    local playerID = "ID:" .. user.UserID
    if userdata.IsBindGuest == false then
        playerID = playerID --.. "(游客)"
    end
    uiCommon.SetPlayerID(playerID)
	
    uiCommon.SetHeadIcon(userdata.HeadID)
    uiCommon.SetMoney(G.Tool.UserHelper.ToCash(userdata.CashAmount))
end

function RefreshServerList()
    if G.IsGameStart() ~= true then
        -- 熱更期間不重整遊戲介面
        if IsHotUpdate == true then
            return
        end

        if isFisrtRequestServerList == true then
            CS.UILoadingData.Show("正在请求游戏列表");
        end

        local parm = {}
        parm.Area_ID = G.GameConfig.GameSiteID
        G.NetQ.SendMsg(G.Proto.BClass.Hall, G.Proto.Hall.RequestServerListID, parm)
    end
end

function SetGameIcon(GameObject, Path, IconName)
    local Image = GameObject:Find(Path .. "/ImageTitle_0/name"):GetComponent("Image")
    if Image ~= nil then
        Image:ResetSpriteByName(CS.AppDefine.HallNumber, IconName, true);
    end

    -- 修改shaher，避免黑邊
    --[[
    local ImageTitleG = GameObject:Find(Path .. "/Ani_Icon")
    if ImageTitleG ~= nil then
        local MaskableGraphic = ImageTitleG:GetComponent("MaskableGraphic")
        if MaskableGraphic ~= nil then
            MaskableGraphic.material = ImgShader.material
        end
    end
    ]] --
    --[[
    local ImageTitleG = GameObject:Find(Path .. "/ImageTitle_0")
    if ImageTitleG.transform.childCount > 0 then
        SkeletonGraphic = ImageTitleG.transform:GetChild(0)
        local MaskableGraphic = SkeletonGraphic:GetComponent("MaskableGraphic")
        if MaskableGraphic ~= nil then
            MaskableGraphic.material = ImgShader.material
        end
    end	
    ]] --
end

-- region 请求服务器列表返回结果
G.NetQ.RegMsgHook(G.Proto.BClass.Hall, G.Proto.Hall.ServerListDataID, function(receiveMsg)

    IsGetServerList = true

    if Txt_LoadingGameTips.gameObject.activeSelf then
        Txt_LoadingGameTips.gameObject:SetActive(false)
    end

    if isFisrtRequestServerList then
        isFisrtRequestServerList = false
        CS.UILoadingData.Hide()
    end

    --G.Tool.TableHelper.Print(receiveMsg)

    -- 熱更期間不重整遊戲介面
    if IsHotUpdate == true then
        return
    end

    gamelist = {};
    autolist = {};
    for i, gameInfo in ipairs(receiveMsg.ServerList) do

        if (not gamelist[gameInfo.GameID]) then
            gamelist[gameInfo.GameID] = {};
        end
        --if (gameInfo.Single == 1) then
            autolist[gameInfo.GameID] = {};
            autolist[gameInfo.GameID] = gameInfo;
        --end
		
        gamelist[gameInfo.GameID][gameInfo.Flag] = gameInfo;
    end

    -- 临时变量，用于确定是否需要显示游戏Icon
    for k, v in pairs(GameLogoList)do
        GameLogoList[k].gameObject:SetActive(false)
        GameLogoList[k]:SetParent(RecTran_GameList)
    end
	
	RecTran_Carousel.gameObject:SetActive(false)
    RecTran_GameRootTemp.transform.parent:DestoryAllChildren(false);
	RecTran_Carousel.gameObject:SetActive(true)
	
    -- 修正刷新列表記憶體一直增加的問題
    CS.Utility.CallGC();

    local userGameList = nil
    if ((G.User.GetUserGameList2() ~= nil)) then
        userGameList = G.User.GetUserGameList2()
    else
        userGameList = G.User.GetUserGameList()
    end
	
    activeGameNumber = 0
    local logoParent
	
    for _, newgid in pairs(userGameList) do
        local gid = nil
        local tv = nil
        if (tonumber(newgid)) then
            gid = newgid
            tv = 0
        else
            gid = newgid.GameID
            tv = newgid.Popular
            GameT[gid] = tv
        end

        for gameId, subList in pairs(gamelist) do
            local GameObject = GameLogoList[tostring(gameId)]

            if gameId == gid and GameObject ~= nil then


                t1, t2 = math.modf(activeGameNumber / 8);
                -- 8個小遊戲為一單位，取餘數 == 0
                if t2 == 0 then
                    logoParent = CS.UnityEngine.GameObject.Instantiate(RecTran_GameRootTemp.gameObject);
                    logoParent.transform:SetParent(RecTran_GameRootTemp.parent);
                    logoParent.transform.localScale = CS.UnityEngine.Vector3(1, 1, 1)
                    logoParent.transform.localPosition = CS.UnityEngine.Vector3.zero
                    logoParent:SetActive(true)
                end
                activeGameNumber = activeGameNumber + 1

                GameObject:SetParent(logoParent.transform);
                GameObject.gameObject:SetActive(true);
                GameObject.transform.localScale = CS.UnityEngine.Vector3.one

                GameObject:GetComponent("Button").onClick:RemoveAllListeners()

                --游戏入口图标题 设定文字
                local name = "GameIcon_" .. gameId .. "_" .. tostring(newgid.IconName)
                --名称一样不再重新载入
				if iconNameList[tostring(gameId)] == nil then
					table.insert(iconNameList, tostring(name))
				end
				if iconNameList[tostring(gameId)] ~= name then
					iconNameList[tostring(gameId)] = name

					SetGameIcon(GameObject, "gameInfo", name)
					SetGameIcon(GameObject, "Pressed", name)
				end
				
                local imgt_game = GameObject:Find("gameInfo/t")
                local imgt_press = GameObject:Find("Pressed/t")
                local remoteversion = "0.0.0"

                if (G.Env.IsIOS()) then
                    remoteversion = GetIOSVersion(subList);
                    GameVersion[gid] = GetIOSVersion(subList)
                elseif (G.Env.IsAndroid()) then
                    remoteversion = GetAndroidVersion(subList);
                    GameVersion[gid] = GetAndroidVersion(subList);
                else
                    remoteversion = GetAndroidVersion(subList);
                    GameVersion[gid] = GetAndroidVersion(subList)
                end

                local nversion = CS.HotUpdate.HotUpdateManager.Instance:GetProjectVersion(G.GetGamePName(gid))

                ResetRibbon(imgt_game, gameId)
                ResetRibbon(imgt_press, gameId)

                GameObject:GetComponent("Button"):AddClickListener(function()
                    local nowversion = CS.HotUpdate.HotUpdateManager.Instance:GetProjectVersion(G.GetGamePName(gid))

                    -- 判斷新變數single 0則維持舊機制顯示列表 1則自動入桌,缺產生第一個房間v資料
                    if (not autolist[gameId]) then

                    else
                        if (VersionToNum(nowversion, gameId) < VersionToNum(remoteversion, gameId)) then

                        else
                            -- 自動入桌
                            RoomClick(autolist[gameId], 1);
                        end
                    end
                end);

                -- 判斷是否下載過
                if RecTran_NoDataGame ~= nil then
                    local IsDownload = CheckGameIsDownLoad(gameId)
                    -- 已經下載過
                    if IsDownload == 0 then
                        -- 需要更新
                        if (VersionToNum(nversion, gameId) < VersionToNum(remoteversion, gameId)) then
                            IsDownload = 2
                        end
                    end

                    -- 0不需要 1第一次下載 2更新
                    if IsDownload > 0 then
                        TempNoDataGame = GameObject.transform:Find("NoDataGame")
                        if TempNoDataGame == nil then
                            TempNoDataGame = CS.UnityEngine.GameObject.Instantiate(RecTran_NoDataGame);
                            TempNoDataGame.transform:SetParent(GameObject.transform);
                            TempNoDataGame.transform.localScale = CS.UnityEngine.Vector3(1, 1, 1)
                            TempNoDataGame.transform.localPosition = CS.UnityEngine.Vector3.zero
                            TempNoDataGame.name = "NoDataGame"
                        end

                        -- 顯示未安裝按鈕
                        InitNoDataButtonIcon(GameObject, TempNoDataGame, IsDownload, gameId)

                        TempNoDataGame:GetComponent("Button").onClick:RemoveAllListeners()
                        TempNoDataGame:GetComponent("Button"):AddClickListener(function()
                            StartDownloadGame(subList, gameId)
                        end);
                    else
                        ShowIcon(gameId)
                    end
                end
            end
        end
    end
	
	if ui_AD ~= nil then
		ui_AD.UpdateAD()
	end	
end, groupName);

function InitNoDataButtonIcon(scoureData, cloneData, downloadtype, gameId)
    scoureData:GetComponent("Animator").enabled = false
    cloneData.gameObject:SetActive(true)
    cloneData.transform:Find("_Loading"):GetComponent("Image").gameObject:SetActive(false)
    cloneData.transform:Find("_Percentage"):GetComponent("Text").gameObject:SetActive(false)
    cloneData.transform:Find("_WaitText").gameObject:SetActive(false)
	
	if updatemode == 1 then
		local img_scouregameicon = scoureData.transform:Find("gameInfo/Icon"):GetComponent("Image")
		local img_gameicon = cloneData.transform:Find("_Icon"):GetComponent("Image")
		img_gameicon.gameObject:SetActive(true)
		img_gameicon.sprite = img_scouregameicon.sprite
		
		local img_scouregamename = scoureData.transform:Find("gameInfo/ImageTitle_0/name"):GetComponent("Image")
		local img_gamename = cloneData.transform:Find("_Icon/ImageTitle_0/name"):GetComponent("Image")
		img_gamename.sprite = img_scouregamename.sprite
	end
end

function SetSprite(scoureData, scoureName, replaceData, replaceName)
    local _replaceData = replaceData.transform:Find(replaceName):GetComponent("Image")
    if _replaceData == nil then
        return
    end

    local _scoreData = scoureData.transform:Find(scoureName):GetComponent("Image")
    if _scoreData == nil then
        return
    end

    _replaceData.sprite = _scoreData.sprite
end

IsHotUpdate = false
WindowNode_HotUpdateGameObject = nil
Slider_HotUpdate = nil
Img_Icon = nil
Img_Circle = nil
Img_Circle1 = nil
Txt_Persent = nil
DownloadGameList = {}
DownloadSubList = {}
DownloadingGameId = 0

function SetDownloadGame(subList, gameId)
    --CS.UnityEngine.Debug.LogError("--------SetDownloadGame :　" .. tostring(gameId).. "/" .. tostring(G.GetGamePName(gameId)) .. "/" .. tostring(#DownloadGameList))
    local isSave = true
    for i = 1, #DownloadGameList do
        if DownloadGameList[i] == gameId then
            --CS.UnityEngine.Debug.LogError("--------get some gameId :　" .. tostring(gameId).. "/" .. tostring(G.GetGamePName(gameId)) .. "/" .. tostring(i))
            isSave = false
        end
    end

    if isSave == true then
        --CS.UnityEngine.Debug.LogError("--------SetDownloadGame save")
        DownloadGameList[#DownloadGameList + 1] = gameId
        DownloadSubList[#DownloadSubList + 1] = subList
        print("SetDownloadGame", gameId)
    end

    local GameObject = GameLogoList[tostring(gameId)]
    local NoDataGame = GameObject.transform:Find("NoDataGame")

    if NoDataGame ~= nil then
        if DownloadingGameId ~= gameId then
            local temp_WaitText = NoDataGame.transform:Find("_WaitText")
            temp_WaitText.gameObject:SetActive(true)

            local temp_Circle = NoDataGame.transform:Find("_Loading"):GetComponent("Image")
            temp_Circle.gameObject:SetActive(false)

            local temp_Persent = NoDataGame.transform:Find("_Percentage"):GetComponent("Text")
            temp_Persent.gameObject:SetActive(false)
        end
    end
end

function RefreshDownloadGame()
    local supportVersion = (G.Tool.SupportVersion.CheckHall("CallbackHotUpdateFail"))

    --CS.UnityEngine.Debug.LogError("--------RefreshDownloadGame")
    for i = 1, #DownloadGameList do
        local gameId = DownloadGameList[i]
        local GameObject = GameLogoList[tostring(gameId)]
        local NoDataGame = GameObject.transform:Find("NoDataGame")
        if NoDataGame ~= nil then
            if DownloadingGameId ~= gameId then
                local temp_WaitText = NoDataGame.transform:Find("_WaitText")
                temp_WaitText.gameObject:SetActive(supportVersion == true)

                local temp_Circle = NoDataGame.transform:Find("_Loading"):GetComponent("Image")
                temp_Circle.gameObject:SetActive(false)

                local temp_Persent = NoDataGame.transform:Find("_Percentage"):GetComponent("Text")
                temp_Persent.gameObject:SetActive(false)
            end
        end
    end

    if (supportVersion == false) then
        --CS.UnityEngine.Debug.LogError("--------RefreshDownloadGame : supportVersion false")
        if (DownloadingGameId ~= nil and DownloadingGameId ~= 0) then
            --CS.UnityEngine.Debug.LogError("--------RefreshDownloadGame :　--CS.UIUpdateGame.Hide")
            CS.UIUpdateGame.Hide();
        end
        HotUpdateFaild(DownloadingGameId)

        DownloadGameList = {}
        return
    end

    DownloadNextGame()
end

function StartDownloadGame(subList, gameId)
	if subList == nil then
		return
	end

    print("StartDownloadGame", gameId, IsHotUpdate)
    --CS.UnityEngine.Debug.LogError("---------------StartDownloadGame :　" .. tostring(gameId).. "/" .. tostring(G.GetGamePName(gameId)))
    --當該遊戲也在下載中時,不繼續加入下載列表
    if (DownloadingGameId == gameId) then
        return
    end

    if IsHotUpdate == true then
        SetDownloadGame(subList, gameId)
        return
    end

    IsHotUpdate = true;
    --設定該ID為正在下載中的遊戲ID
    DownloadingGameId = gameId

    for k, v in pairs(subList) do

        G.Service.NetworkService.SetUpdateGameUiLoadingComplatedCallBack(function(WindowNode)
            BeginHotUpdate(gameId, WindowNode)
        end)

        G.Service.NetworkService.SetUpdateGameComplatedCallBack(function()
            HotUpdateEnd(gameId)
        end)

        G.Service.NetworkService.SetUpdateGameDownloadNextCallBack(function()
            DownloadNextGame()
        end)

        G.Service.NetworkService.SetUpdateGameErrorCallBack(function()
            HotUpdateError(gameId)
        end)

        G.Service.NetworkService.SetUpdateGameFaildCallBack(function()
            HotUpdateFaild(gameId)
        end)
		
        -- 下載完不要自動入桌 By Rayon
        G.Service.NetworkService.SetIsAutoLoginGame(false);

        RoomClick(v, 0, false);

        break
    end
end

function BeginHotUpdate(gameId, WindowNode)
    print("BeginHotUpdate", gameId, G.GetGamePName(gameId))
    --CS.UnityEngine.Debug.LogError("--------BeginHotUpdate :　" .. tostring(gameId).. "/" .. tostring(G.GetGamePName(gameId)))

    WindowNode_HotUpdateGameObject = WindowNode.WindowGameObject
    WindowNode_HotUpdateGameObject.transform.localPosition = CS.UnityEngine.Vector3(0, 9999, 0)
	
	-- 熱更進度歸0
	local temp_slider = WindowNode_HotUpdateGameObject.transform:Find("Slider"):GetComponent("Slider")
	temp_slider.value = 0

    local GameObject = GameLogoList[tostring(gameId)]
    UpdateTempNoDataGame = GameObject.transform:Find("NoDataGame")
    if UpdateTempNoDataGame ~= nil then
        --Img_Icon = UpdateTempNoDataGame.transform:Find("_Icon"):GetComponent("Image")
        --Img_Icon.gameObject:SetActive(true)

        local temp_WaitText = UpdateTempNoDataGame.transform:Find("_WaitText")
        temp_WaitText.gameObject:SetActive(false)

        Img_Circle = UpdateTempNoDataGame.transform:Find("_Loading"):GetComponent("Image")
        Img_Circle.gameObject:SetActive(true)
        Img_Circle1 = UpdateTempNoDataGame.transform:Find("_Loading/_Loading"):GetComponent("Image")
        Img_Circle1.fillAmount = 1

        Txt_Persent = UpdateTempNoDataGame.transform:Find("_Percentage"):GetComponent("Text")
        Txt_Persent.gameObject:SetActive(true)
        Txt_Persent.text = "0%"
		
		if updatemode == 1 then 
			Img_Icon = UpdateTempNoDataGame.transform:Find("_Icon"):GetComponent("Image")
			Img_Icon.fillAmount = 1
			
        	Img_Circle1.gameObject:SetActive(false)

        	Img_Loadingbg1 = UpdateTempNoDataGame.transform:Find("_Loading/_Loadingbg1"):GetComponent("Image")
			Img_Loadingbg1.gameObject:SetActive(false)
		end		
    end
end

function DoHotUpdate()
    if IsHotUpdate == false then
        return
    end

    if WindowNode_HotUpdateGameObject == nil then
        return;
    end

    if Slider_HotUpdate == nil then
        Slider_HotUpdate = WindowNode_HotUpdateGameObject.transform:Find("Slider"):GetComponent("Slider")
    end

    if Slider_HotUpdate == nil then
        return
    end

    if Img_Icon ~= nil then
        Img_Icon.fillAmount = 1 - Slider_HotUpdate.value
    end

    if Img_Circle1 ~= nil then
        Img_Circle1.fillAmount = 1 - Slider_HotUpdate.value
    end

    if Txt_Persent ~= nil then
        Txt_Persent.text = string.format("%.2f", Slider_HotUpdate.value * 100)
    end
end

function HotUpdateEnd(gameId)
    local supportVersion = (G.Tool.SupportVersion.CheckHall("CallbackHotUpdateFail"))
    if (supportVersion == false) then
        --CS.UnityEngine.Debug.LogError("--------HotUpdateEnd :　--CS.UIUpdateGame.Hide")
        CS.UIUpdateGame.Hide();
    end
    print("HotUpdateEnd", gameId, G.GetGamePName(gameId))
    --CS.UnityEngine.Debug.LogError("--------HotUpdateEnd :　" .. tostring(gameId).. "/" .. tostring(G.GetGamePName(gameId)))
    WindowNode_HotUpdateGameObject = nil
    Slider_HotUpdate = nil

    IsHotUpdate = false
    Img_Icon = nil
    Slider_HotUpdate = nil
    Img_Circle = nil
    Txt_Persent = nil

    DownloadingGameId = 0

    ShowIcon(gameId)

    local openparam = CS.WindowNodeInitParam("UIMessage", CS.AppDefine.HallNumber)
    openparam.NodeType = CS.BaseNodeType.AboveNormal;
    openparam.LoadComplatedCallBack = function(windowNode)
        local txt = windowNode.WindowGameObject.transform:Find("Date_2"):GetComponent("Text")
        print("gameIdgameIdgameIdgameIdgameIdgameId " .. tostring(gameId))
        txt.text = G.Game.GetGameName(tostring(gameId)) .. " 下载完成"
    end
    windowNode = CS.WindowManager.Instance:OpenWindow(openparam)
end

function DownloadNextGame()
    if #DownloadGameList > 0 then
        --CS.UnityEngine.Debug.LogError("--------DownloadNextGame")

        local gameId = DownloadGameList[1]
        local subList = DownloadSubList[1]
        print("DownloadNextGame", #DownloadGameList, DownloadGameList[1])
        table.remove(DownloadGameList, 1)
        table.remove(DownloadSubList, 1)
        StartDownloadGame(subList, gameId)
    else
        --CS.UnityEngine.Debug.LogError("--------DownloadNextGame list is null")
    end
end

function HotUpdateError()
    local supportVersion = (G.Tool.SupportVersion.CheckHall("CallbackHotUpdateFail"))
    if (supportVersion == false) then
        --CS.UnityEngine.Debug.LogError("--------HotUpdateError :　--CS.UIUpdateGame.Hide")
        CS.UIUpdateGame.Hide();
    end

    print("HotUpdateError", DownloadingGameId, G.GetGamePName(DownloadingGameId))
    --CS.UnityEngine.Debug.LogError("--------HotUpdateError :　" .. tostring(DownloadingGameId).. "/" .. tostring(G.GetGamePName(DownloadingGameId)))
    local GameObject = GameLogoList[tostring(DownloadingGameId)]
    UpdateTempNoDataGame = GameObject.transform:Find("NoDataGame")
    if UpdateTempNoDataGame ~= nil then
        local temp_WaitText = UpdateTempNoDataGame.transform:Find("_WaitText")
        temp_WaitText.gameObject:SetActive(false)
    end

    DownloadingGameId = 0
end

function HotUpdateFaild()
    print("HotUpdateFaild", DownloadingGameId, G.GetGamePName(DownloadingGameId))
    --CS.UnityEngine.Debug.LogError("--------HotUpdateError :　" .. tostring(DownloadingGameId).. "/" .. tostring(G.GetGamePName(DownloadingGameId)))
    if (DownloadingGameId == nil) then
        return
    elseif (GameLogoList[tostring(DownloadingGameId)] == nil) then
        return
    end

    local NowDownloadingGameId = DownloadingGameId
    local openparam = CS.WindowNodeInitParam("UIMessage", CS.AppDefine.HallNumber)
    openparam.NodeType = CS.BaseNodeType.AboveNormal;
    openparam.LoadComplatedCallBack = function(windowNode)
        local txt = windowNode.WindowGameObject.transform:Find("Date_2"):GetComponent("Text")
        txt.text = G.Game.GetGameName(tostring(NowDownloadingGameId)) .. " 下载失败"
    end
    windowNode = CS.WindowManager.Instance:OpenWindow(openparam)

    local GameObject = GameLogoList[tostring(DownloadingGameId)]
    UpdateTempNoDataGame = GameObject.transform:Find("NoDataGame")
    if UpdateTempNoDataGame ~= nil then
        local temp_WaitText = UpdateTempNoDataGame.transform:Find("_WaitText")
        temp_WaitText.gameObject:SetActive(false)

        local temp_Circle = UpdateTempNoDataGame.transform:Find("_Loading"):GetComponent("Image")
        temp_Circle.gameObject:SetActive(false)

        local temp_Persent = UpdateTempNoDataGame.transform:Find("_Percentage"):GetComponent("Text")
        temp_Persent.gameObject:SetActive(false)
    end

    WindowNode_HotUpdateGameObject = nil

    IsHotUpdate = false
    Img_Icon = nil
    Slider_HotUpdate = nil
    Img_Circle = nil
    Txt_Persent = nil

    DownloadingGameId = 0
end

function ShowIcon(gameId)
    local GameObject = GameLogoList[tostring(gameId)]
    if GameObject ~= nil then
        GameObject:GetComponent("Animator").enabled = true

        TempNoDataGame = GameObject.transform:Find("NoDataGame")
        if TempNoDataGame ~= nil then
            TempNoDataGame.gameObject:SetActive(false)
        end

        GameInfo = GameObject.transform:Find("gameInfo")
        GamePress = GameObject.transform:Find("Pressed")

        if GameInfo ~= nil then
            GameInfo.gameObject:SetActive(true)
            local imgt = GameInfo:Find("t")
            ResetRibbon(imgt, gameId)
        end
        if GamePress ~= nil then
            local imgt = GamePress:Find("t")
            ResetRibbon(imgt, gameId)
        end
    end
end

function Destroy(Go)
    CS.UnityEngine.GameObject.Destroy(Go.gameObject)
end

function DestroyChild(Go)
    for i = 0, Go.transform.childCount - 1 do
        node = Go.transform:GetChild(i)
        if (node ~= nil) then Destroy(node) end
    end
end

--設定遊戲彩帶狀態
function ResetRibbon(imgt, gameId)
    --當下遊戲版本號
    local nversion = CS.HotUpdate.HotUpdateManager.Instance:GetProjectVersion(G.GetGamePName(gameId))
    --遠端版本號
    local rversion = GameVersion[gameId]
	
    --當版本號不足時
    if (VersionToNum(nversion, gameId) < VersionToNum(rversion, gameId)) then
        imgt.gameObject:SetActive(true);
        local num = imgt.transform.childCount
        if (num > 0) then
            DestroyChild(imgt)
        end

        local RibbonItem = CS.UnityEngine.GameObject.Instantiate(recTran__flagRoot.transform:Find("t6"));
        RibbonItem.transform:SetParent(imgt.transform)
        RibbonItem.transform.localScale = CS.UnityEngine.Vector3(1, 1, 1)
        RibbonItem.transform.localPosition = CS.UnityEngine.Vector3.zero
    elseif (GameT[gameId] == 0) then
        imgt.gameObject:SetActive(false);

    else
        imgt.gameObject:SetActive(true);
        local num = imgt.transform.childCount
        if (num > 0) then
            DestroyChild(imgt)
        end

        local RibbonItem = CS.UnityEngine.GameObject.Instantiate(recTran__flagRoot.transform:Find("t" .. GameT[gameId]));
        RibbonItem.transform:SetParent(imgt.transform)
        RibbonItem.transform.localScale = CS.UnityEngine.Vector3(1, 1, 1)
        RibbonItem.transform.localPosition = CS.UnityEngine.Vector3.zero
    end
end

function VersionToNum(v, gameId)
    if CS.AppDefine.OpenHotUpdate == false then
        return 0
    end

    if v == nil or v == "" then
        print("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! parse VersionToNum error " .. gameId)
        return 100000
    end

    local strarr = G.Tool.StringHelper.Split(v, ".")

    return (tonumber(strarr[1]) * 100000) + (tonumber(strarr[2]) * 1000) + (tonumber(strarr[3]) * 1)
end


function GetAndroidVersion(subList)
    for k, v in pairs(subList) do
        return v.AndroidVersion
    end
end

function GetIOSVersion(subList)
    for k, v in pairs(subList) do
        return v.IOSVersion
    end
end

function RoomClick(serverinfo, gohotupdate, formHotUpdate)
    local supportVersion = (G.Tool.SupportVersion.CheckHall("CallbackHotUpdateFail"))
    if IsHotUpdate == true and formHotUpdate == nil and supportVersion == false then
        CS.UIBubblePrompt.Show("您正在下载游戏，请稍后", groupName);
        return
    end
	
    if ((userdata.CashAmount + userdata.BankAmount) > serverinfo.KickOutMoney and serverinfo.KickOutMoney ~= 0 and serverinfo.KickOutMoney ~= nil and CheckGameIsDownLoad(serverinfo.GameID) and gohotupdate ~= 0) then
        CS.UIBubblePrompt.Show("您的金币超出房间限制" .. G.Tool.UserHelper.ToCashDetail(serverinfo.KickOutMoney) .. "!请前往菁英场进行游戏", groupName);
        return
    end
	
    RequestGameID = serverinfo.GameID

    -- 强制解锁
    G.NetQ.Resume()
    local requestGameServerAddrInfo = {};
    requestGameServerAddrInfo.ServerFlag = serverinfo.Flag;
    requestGameServerAddrInfo.GameID = serverinfo.GameID;
    requestGameServerAddrInfo.IP = serverinfo.IPAddress
    requestGameServerAddrInfo.Port = serverinfo.Port

    G.GameConfig.RequestGameRemoteVersion = GameVersion[serverinfo.GameID]
    G.GameConfig.RequestGameServerFlag = serverinfo.Flag

    local userGameList = nil;
    if ((G.User.GetUserGameList2() ~= nil)) then
        userGameList = G.User.GetUserGameList2()
    else
        userGameList = G.User.GetUserGameList()
    end
    local skin = G.Tool.TableHelper.Find(userGameList, function(v) return v.GameID == RequestGameID end)[1].Skin
	
    if (formHotUpdate == nil) then
        G.Service.NetworkService.RequestGameGameServerAddr(requestGameServerAddrInfo, skin)
    else
        G.Service.NetworkService.RequestHotUpdate(serverinfo, skin)
    end
end

-- region 登录房间消息处理
G.NetQ.RegMsgHook(G.Proto.BClass.GameRoom, G.Proto.GameRoom.LoginRoomRetID, function(receiveMsg)
    CS.UILoadingData.Hide()
	
    local RequestGameID = receiveMsg.RoomInfo.GameID
    local RequestFlag = receiveMsg.RoomInfo.Flag
    local obj = GameLogoList[tostring(RequestGameID)]
    local imgt_game = obj:Find("gameInfo/t")
    local imgt_press = obj:Find("Pressed/t")
    ResetRibbon(imgt_game, RequestGameID)
    ResetRibbon(imgt_press, RequestGameID)

    if receiveMsg.Code ~= 1 then
        if (G.IsGameStart() == true) then
            G.Service.Game.ExitGame()
        end
		
        -- 关闭连接
        if (receiveMsg.Code == -2) then
            G.Util.coroutine_call(function()
                -- 充值開關 Add By Rayon
                if G.GameConfig.IsRechargeCtx() == false then
                    showMessageBox(CS.MessageBoxStyle.OKCancel, "", receiveMsg.Message, "继续", "取消");
                else
                    local boxResult = showMessageBox(CS.MessageBoxStyle.OKCancel, "", receiveMsg.Message, "前往充值", "取消");
                    if boxResult == CS.MessageBoxResult.OK then
                        OpenRechargeUI()
                    end
                end
            end)()
        elseif (receiveMsg.Code == -3) then
            G.Util.coroutine_call(function()
                local boxResult = showMessageBox(CS.MessageBoxStyle.OKCancel, "", receiveMsg.Message, "继续", "取消");
                if boxResult == CS.MessageBoxResult.OK then
                    local serverParm = G.Tool.StringHelper.Split(receiveMsg.UserData.ServerAddr, "|");
                    RequestGameID = tonumber(serverParm[1])
                    local addressParm = G.Tool.StringHelper.Split(serverParm[2], ":");
                    G.Server.GetGameServerAddrCallback(addressParm[1], addressParm[2], function(res, ipAddress, port)
                        if res == 0 then
                            G.SetRunGameIPAndPort(ipAddress, port)

                            --寫入SKIN
                            local userGameList = nil;
                            if ((G.User.GetUserGameList2() ~= nil)) then
                                userGameList = G.User.GetUserGameList2()
                            else
                                userGameList = G.User.GetUserGameList()
                            end
                            local skin = G.Tool.TableHelper.Find(userGameList, function(v) return v.GameID == RequestGameID end)[1].Skin

                            G.Service.NetworkService.CheckGameVersion(RequestGameID, skin)
                        else
                            CS.UIBubblePrompt.Show("游戏连接失败(1)", "UIHall")
                        end
                    end);
                end
            end)()
        else
            -- 提示失败原因
            CS.UIBubblePrompt.Show(receiveMsg.Message, "UIHall")
        end
    else

        RecTran_Main.gameObject:SetActive(false);

        print("进入房间成功")
        G.NetQ.Pause()
        G.Room.SetRoomInfo(receiveMsg.RoomInfo)
        G.Room.SetUserData(receiveMsg.UserData)


        if G.IsGameStart() == true then
            CS.FrameWork.ObjectPoolManager.Instance:Retrieve();
            print("reload游戏场景")
            G.Service.Game.ReloadGame(function()
                G.Room.GameLoginSuccess(true)
                CS.GameManager.Instance:StartGame()
            end)
        else
            print("关闭大厅界面")
            G.SetRunGame(RequestGameID)
            G.SetRunGameData(gamelist[RequestGameID][RequestFlag])
            G.Tool.Sound.CloseBGMSound()
            CS.WindowManager.Instance:CloseWindow("UIHall", true);
            CS.Utility.CallGC();
            G.Room.GameLoginSuccess(true)
            CS.GameManager.Instance:StartGame();
        end

        print("当前加载场景数量 " .. CS.UnityEngine.SceneManagement.SceneManager.sceneCount)
    end
end, groupName);
-- endregion

-- region 玩家属性变化
G.NetQ.RegMsgHook(G.Proto.BClass.NotifyServer, G.Proto.NotifyServer.AttrChangeID, function(receiveMsg)
    -- 循环变化属性，做相应操作
    for i, Attr in ipairs(receiveMsg.Attrs) do
        -- 0 金币变化 1 新邮件 2充值到账 3充值金额配置变化
        if Attr.TypeID == 0 then
            if this.gameObject.activeSelf == true then
                -- 金額變多，有可能是充值，刷新介面
                if Attr.Param > userdata.CashAmount then
                    G.Service.Login.RequestUserInfoHall()
                else
                    userdata.CashAmount = Attr.Param
                    RefreshUserInfo()
                end
            else
                print("@@@@@@@@@@@@ 大廳介面不顯示,不刷新大廳資訊")
            end
        elseif Attr.TypeID == 1 then
            G.Tool.Sound.PlayHallSound("NewMail")
            G.Service.Mail.RefreshMailList();
        elseif Attr.TypeID == 3 then
            G.User.SetPayAmountConfig(Attr.SParam)
        end
    end
end, groupName);


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
	
	if ui_AD ~= nil then
		ui_AD.OnDestroy()
	end
end

function EscapeWindow()
	G.Util.coroutine_call(function()
		local boxResult = showMessageBox(CS.MessageBoxStyle.OKCancelClose, "", "您确定要确认退出游戏吗？", "再玩一下", "残忍退出");

		if boxResult == CS.MessageBoxResult.Cancel then
			G.Service.Login.Logout()
			CS.UnityEngine.Application.Quit();
		end
	end)()
end

function CheckGameIsDownLoad(gameId)
    if CS.AppDefine.OpenHotUpdate == false then
        return 0
    end

    local version = CS.HotUpdate.HotUpdateManager.Instance:GetProjectVersion(G.GetGamePName(gameId));
    if version == "0.0.0" then
        return 1
    else
        return 0
    end
end

function UpdateElement()
    Img_Mail1.gameObject:SetActive(G.Service.Mail.GetUnReadMailCount() == 0)
    Img_Mail2.gameObject:SetActive(G.Service.Mail.GetUnReadMailCount() > 0)
    Txt_Mail.text = G.Service.Mail.GetUnReadMailCount()
end

function PlayCellPhoneAni()
    RecTran_CellPhone.gameObject:SetActive(true)

    local cellPhone = CS.UnityEngine.GameObject.Instantiate(CellPhoneAni.gameObject)
    cellPhone.transform:SetParent(CellPhoneAni.parent.transform)
    cellPhone.transform.localScale = CS.UnityEngine.Vector3(1, 1, 1)
    cellPhone.transform.localPosition = CS.UnityEngine.Vector3.zero
    cellPhone.transform.gameObject:SetActive(true)

    CS.TimeManager.Instance:DelayInvoke(1.5,
        function()
            RecTran_CellPhone.gameObject:SetActive(false)
            if cellPhone ~= nil then
                CS.UnityEngine.GameObject.Destroy(cellPhone)
                cellPhone = nil
            end

            local openUrl = CurrentUrl .. tostring(G.GameConfig.GamePlatformID)
            CS.UnityEngine.Application.OpenURL(openUrl)
        end)
end