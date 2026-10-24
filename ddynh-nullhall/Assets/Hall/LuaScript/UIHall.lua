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
local Root_BottomAttach = this.transform:Find("_Main/Bottom/Attach"):GetComponent("RectTransform")
local Btn_agent = this.transform:Find("_Main/Bottom/Attach/_Agent"):GetComponent("Button")
local Btn_Mail = this.transform:Find("_Main/Bottom/Attach/_Mail"):GetComponent("Button")
local Img_Mail1 = this.transform:Find("_Main/Bottom/Attach/_Mail/ImageState1"):GetComponent("Image")
local Img_Mail2 = this.transform:Find("_Main/Bottom/Attach/_Mail/ImageState2"):GetComponent("Image")
local Txt_Mail = this.transform:Find("_Main/Bottom/Attach/_Mail/ImageState2/Text"):GetComponent("Text")
local Img_CS1 = this.transform:Find("_Main/TOP/_CustomService/ImageState1"):GetComponent("Image")
local Img_CS2 = this.transform:Find("_Main/TOP/_CustomService/ImageState2"):GetComponent("Image")
local Txt_CS = this.transform:Find("_Main/TOP/_CustomService/ImageState2/Text"):GetComponent("Text")
local Btn_Coffer = this.transform:Find("_Main/Bottom/Attach/_Coffer"):GetComponent("Button")
local Img_Coffer1 = this.transform:Find("_Main/Bottom/Attach/_Coffer/ImageState1"):GetComponent("Image")
local Img_Coffer2 = this.transform:Find("_Main/Bottom/Attach/_Coffer/ImageState2"):GetComponent("Image")
local Btn_Exchange = this.transform:Find("_Main/Bottom/Attach/_Exchange"):GetComponent("Button")
local Btn_ExchangeFont1 = this.transform:Find("_Main/Bottom/Attach/_Exchange/ImageState1"):GetComponent("Image")
local Img_ExchangeGray1 = this.transform:Find("_Main/Bottom/Attach/_Exchange/ImageState1/gray"):GetComponent("Image")
local Btn_ExchangeFont2 = this.transform:Find("_Main/Bottom/Attach/_Exchange/ImageState2"):GetComponent("Image")
local Img_ExchangeGray2 = this.transform:Find("_Main/Bottom/Attach/_Exchange/ImageState2/gray"):GetComponent("Image")
local Btn_ExchangeFont3 = this.transform:Find("_Main/Bottom/Attach/_Exchange/ImageState3"):GetComponent("Image")
local Img_ExchangeGray3 = this.transform:Find("_Main/Bottom/Attach/_Exchange/ImageState3/gray"):GetComponent("Image")
local Btn_ExchangeFont4 = this.transform:Find("_Main/Bottom/Attach/_Exchange/ImageState4"):GetComponent("Image")
local Img_ExchangeGray4 = this.transform:Find("_Main/Bottom/Attach/_Exchange/ImageState4/gray"):GetComponent("Image")
local img_Bonus = this.transform:Find("_Main/Bottom/Attach/_Exchange/Bonus"):GetComponent("Image")
local txt__NowText = this.transform:Find("_Main/Bottom/Attach/_Exchange/Bonus/_NowText"):GetComponent("Text")
local txt__LimitText = this.transform:Find("_Main/Bottom/Attach/_Exchange/Bonus/_LimitText"):GetComponent("Text")
local Btn_Recharge = this.transform:Find("_Main/Bottom/_Recharge"):GetComponent("Button")
local Img_RechargeFont1 = this.transform:Find("_Main/Bottom/_Recharge/ImageState1"):GetComponent("Image")
local Img_RechargeFont2 = this.transform:Find("_Main/Bottom/_Recharge/ImageState2"):GetComponent("Image")
local Img_RechargeFont3 = this.transform:Find("_Main/Bottom/_Recharge/ImageState3"):GetComponent("Image")
local Img_RechargeFont4 = this.transform:Find("_Main/Bottom/_Recharge/ImageState4"):GetComponent("Image")
local Btn_CustomService = this.transform:Find("_Main/TOP/_CustomService"):GetComponent("Button")
local Img_CustomService = this.transform:Find("_Main/TOP/_CustomService/ImageState2"):GetComponent("Image")
local Btn_Notice = this.transform:Find("_Main/Bottom/Attach/_Notice"):GetComponent("Button")
local Img_Notice1 = this.transform:Find("_Main/Bottom/Attach/_Notice/ImageState1"):GetComponent("Image")
local Img_Notice2 = this.transform:Find("_Main/Bottom/Attach/_Notice/ImageState2"):GetComponent("Image")
local Btn_Promo = this.transform:Find("_Main/TOP/_Promo"):GetComponent("Button")
local Btn_Live = this.transform:Find("_Main/Bottom/Attach/_Live"):GetComponent("Button")
local Btn_LiveIcon0 = this.transform:Find("_Main/Bottom/Attach/_Live/Icon0").gameObject
local Btn_LiveIcon1 = this.transform:Find("_Main/Bottom/Attach/_Live/Icon1").gameObject
local Btn_Setting = this.transform:Find("_Main/TOP/_Setting"):GetComponent("Button")
local Btn_Upgrade = this.transform:Find("_Main/Bottom/Attach/_Upgrade"):GetComponent("Button")
local RecTran_Ann = this.transform:Find("_Main/TOP/_Ann"):GetComponent("RectTransform")
local Txt_NoticeContent = this.transform:Find("_Main/TOP/_Ann/Ann/_NoticeContent"):GetComponent("Text")
local RecTran_Room = this.transform:Find("_Room"):GetComponent("RectTransform")
local Img_RoomTitle = this.transform:Find("_Room/title/_RoomTitle"):GetComponent("Image")
local RecTran_NoDataGame = this.transform:Find("_Main/Panel/_GameList/_NoDataGame"):GetComponent("RectTransform")
local recTran__flagRoot = this.transform:Find("_Main/Panel/_flag"):GetComponent("RectTransform")
local btn__MoneyPool = this.transform:Find("_Main/TOP/_MoneyPool"):GetComponent("Button")
local txt__Money = this.transform:Find("_Main/TOP/_MoneyPool/_Money"):GetComponent("Text")
local RecTran_CarouselRoot = this.transform:Find("_Main/Panel/GameAttach/_GameScrollView/GameListContent/_Carousel"):GetComponent("RectTransform")

--- 以上内容为工具脚本自动生成，请不要在这之上做任何修改---
--AE2
local GameLogoList = {};
local GameVersion = {};
local GameT = {};
local gamelist = {};
local autolist = {};
local htmllist = {};
local iconNameList = {};
local moneypool = 0
local seqJackpotPoolRet = nil
local G = require "Global";
local user = G.User.GetCurrentUser();
local userdata = user.UserData
local CheckIsGetData = G.RequireG("Tools/CheckIsGetData")
local showMessageBox = G.Util.async_to_sync(CS.UIMessageBox.Show)
local groupName = "UIHall";
local isFisrtRequestServerList = true
local mailList = {};
local CurrentUrl = "";
local activeGameNumber = 0;
local GameListWidth = 900;
local nowGameId = 0
local IsGetServerList = false
local RefreshServerListTime = 60
local RefresButtonTime = 60
local annShadeWidth = Txt_NoticeContent.transform.parent:GetComponent("RectTransform").rect.width -- 公告文本遮罩宽度 
local annInitPos = Txt_NoticeContent.transform.localPosition
local RectTran_NoticeContent = Txt_NoticeContent.transform:GetComponent("RectTransform")
local Check_UserData = nil
local Check_Mail = nil
local Check_ExchangeLog = nil
local Check_LoginBonus = nil
local Check_CSData = nil
local Check_Activity = nil
local isGetAllDataFinish = false

local CheckServerListTime = 1
local AccCheckServerListTime = 0

local uiCommon = G.RequireG("UIHallCommon")
uiCommon.Init(this.transform:Find("_Common"):GetComponent("RectTransform"))

local uiAd = G.RequireG("UIHallAd")
uiAd.Init(this)

local uiRoom = G.RequireG("UIHallRoom")
uiRoom.Init(this)

uiGameUpdate = G.RequireG("UIGameUpdate")

local uiFilterGame = G.RequireG("uiFilterGame")
local initPanelWidth = RecTran_Panel.offsetMin.x
local initScrollViewRight = RecTran_GameScrollView.sizeDelta.x

local function GetNoticeContentWidth()
    return CS.UnityEngine.UI.LayoutUtility.GetPreferredWidth(RectTran_NoticeContent)
end

G.Service.ExchangeLog.RegLogRetCallBack(function()
    if Check_ExchangeLog ~= nil then
        Check_ExchangeLog.SetGetDataFinish()
    end
end)

-- 刷新用户个人信息
G.NetQ.RegMsgHook(G.Proto.BClass.Hall, G.Proto.Hall.UserHallInfoID, function(receiveMsg)
    G.NetQ.SendMsg(G.Proto.BClass.Hall, G.Proto.Hall.GetJackpotPoolID, nil)
  
    if Check_UserData ~= nil then
        Check_UserData.SetGetDataFinish()
    end

    if receiveMsg.Code == 1 then
        G.User.SetCurrentUserInfo(receiveMsg)
        RefreshUserInfo()
        CS.TimeManager.Instance:DelayInvoke(1, uiAd.InitAd)

        -- 除了第一次進入遊戲，之後回到大廳取得玩家資訊後，再更新一次遊戲列表 by Rayon
        if isFisrtRequestServerList == false then
            RefreshServerList()
            this:CancelInvokeRepeat(RefreshServerList)
            this:InvokeRepeating(RefreshServerList, 60, RefreshServerListTime)

            UpdateButton()
            this:CancelInvokeRepeat(UpdateButton)
            this:InvokeRepeating(UpdateButton, 60, RefresButtonTime)

            CheckShowEvaluate()
            CheckDailyGiftInGame()
        end

        UpdateButton()
    else
        CS.UIBubblePrompt.Show(receiveMsg.Message, groupName);
    end
end, groupName);

--彩池接收
G.NetQ.RegMsgHook(G.Proto.BClass.Hall, G.Proto.Hall.GetJackpotPoolRetID, function(receiveMsg)
    local randomnum = math.random(-500000, 500000)

    moneypool = receiveMsg.amount + randomnum
    print("彩池接收", moneypool, randomnum)
    if (seqJackpotPoolRet ~= nil) then
        seqJackpotPoolRet:Kill()
    end
    seqJackpotPoolRet = CS.DG.Tweening.DOTween.Sequence()
    seqJackpotPoolRet:SetLoops(-1)

    seqJackpotPoolRet:AppendCallback(function()
        moneypool = moneypool + 10
        txt__Money.text = tostring(G.Tool.UserHelper.ToCashDetail(moneypool))
    end)
end, groupName);

function UpdateGameIcon()  
    for k, v in pairs(GameLogoList)do
        GameLogoList[k].gameObject:SetActive(false)
        GameLogoList[k]:SetParent(RecTran_GameList)
    end

    RecTran_CarouselRoot.gameObject:SetActive(false)--避免廣告被刪除
    RecTran_GameRootTemp.transform.parent:DestoryAllChildren(false);
    RecTran_CarouselRoot.gameObject:SetActive(true)--重新打開廣告UI

    -- 修正刷新列表記憶體一直增加的問題
    CS.Utility.CallGC();

    activeGameNumber = 0
    local logoParent;

    local userGameList = nil
    if ((G.User.GetUserGameList2() ~= nil)) then
        userGameList = G.User.GetUserGameList2()

    else
        userGameList = G.User.GetUserGameList()
    end
	
	userGameList = uiFilterGame.GetFilterGame(userGameList)
	
	--更新以後，回到原始位置
	RecTran_GameAttachList.transform.localPosition = CS.UnityEngine.Vector3.zero	
	
    -- 只顯示的遊戲
    local isShowAll = G.Game.IsShowAllGame()

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

            -- 依造充值金額開啟，鬥地主預設開啟
            local isShow = false
            isShow = isShowAll or gameId == 1

            local GameObject = GameLogoList[tostring(gameId)]

            if isShow == true and gameId == gid and GameObject ~= nil then
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
--                if iconNameList[gameId] ~= name then
--                    iconNameList[gameId] = name
--
--                    SetGameIcon(GameObject, "gameInfo", name)
--                    SetGameIcon(GameObject, "Pressed", name)
--                end
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

                if (G.Env.IsIOS()) then
                    GameVersion[gid] = GetIOSVersion(subList)
                else
                    GameVersion[gid] = GetAndroidVersion(subList);          
                end

                ResetRibbon(imgt_game, gameId)
                ResetRibbon(imgt_press, gameId)

                GameObject:GetComponent("Button"):AddClickListener(function()
                    local nowversion = CS.HotUpdate.HotUpdateManager.Instance:GetProjectVersion(G.GetGamePName(gid))

                    --判斷新變數single 0則維持舊機制顯示列表 1則自動入桌,缺產生第一個房間v資料
					-- 自動入桌
                    if (autolist[gameId]) then
                        RoomClick(autolist[gameId]);
                    elseif (htmllist[gameId]) then
						local openparam = CS.WindowNodeInitParam("UIGameWebview", CS.AppDefine.HallNumber)
						openparam.WindowData = htmllist[gameId].IPAddress;
						CS.WindowManager.Instance:OpenWindow(openparam)
					else
                        local name = "GameTitle_" .. gameId
                        -- 设置选厅标题
                        if tonumber(newgid.IconName) ~= 0 then
                            --name = name .. "_" ..G.GameDefine.Version
                            name = name .. "_" .. tonumber(newgid.IconName)
                        end
                        Img_RoomTitle:ResetSpriteByName(CS.AppDefine.HallNumber, name, true);
                        GameClick(gameId, subList);
                    end
                end);

                -- 判斷是否下載過
                if RecTran_NoDataGame ~= nil then
                    if G.Service.NetworkService.CheckVer(GetGameVer(gameId), GameVersion[gameId]) > 0 then
                        local TempNoDataGame = GameObject.transform:Find("NoDataGame")
                        if TempNoDataGame == nil then
                            TempNoDataGame = CS.UnityEngine.GameObject.Instantiate(RecTran_NoDataGame);
                            TempNoDataGame.transform:SetParent(GameObject.transform);
                            TempNoDataGame.transform.localScale = CS.UnityEngine.Vector3(1, 1, 1)
                            TempNoDataGame.transform.localPosition = CS.UnityEngine.Vector3.zero
                            TempNoDataGame.name = "NoDataGame"
							
							-- 顯示未安裝按鈕
							InitNoDataButtonIcon(GameObject, TempNoDataGame, IsDownload, gameId)

							TempNoDataGame:GetComponent("Button").onClick:RemoveAllListeners()
							TempNoDataGame:GetComponent("Button"):AddClickListener(function() 
							uiGameUpdate.AddUpdateList(gameId) end);  							
                        end
                    else
                        ShowIcon(gameId)
                    end
                end
            end
        end
    end
  
    -- 依造小遊戲多寡調整顯示位置和大小
    UpdateGridLayoutGroup(logoParent, activeGameNumber)
end

-- 请求服务器列表返回结果
G.NetQ.RegMsgHook(G.Proto.BClass.Hall, G.Proto.Hall.ServerListDataID, function(receiveMsg)
    IsGetServerList = true

    if Txt_LoadingGameTips.gameObject.activeSelf then
        Txt_LoadingGameTips.gameObject:SetActive(false)
    end

    if isFisrtRequestServerList then
        isFisrtRequestServerList = false
        CS.UILoadingData.Hide()
    end

    -- 熱更期間不重整遊戲介面
    if uiGameUpdate.IsHotUpdate() == true then
        return
    end
  
	local isFull = uiFilterGame.UpdateButton(receiveMsg)
	CalculateGameScrollView(isFull)
	
    gamelist = {};
    autolist = {};
    htmllist = {};
    for i, gameInfo in ipairs(receiveMsg.ServerList) do
        if (not gamelist[gameInfo.GameID]) then
            gamelist[gameInfo.GameID] = {};
        end
        if (gameInfo.Single == 1) then
            autolist[gameInfo.GameID] = gameInfo;
        end
        if (gameInfo.Single == 2) then
            htmllist[gameInfo.GameID] = gameInfo;
        end		

        gamelist[gameInfo.GameID][gameInfo.Flag] = gameInfo;
    end
	
	UpdateGameIcon()
	
    -- 选厅介面开启时也要同时间刷新房间资讯
    if RecTran_Room.gameObject.activeSelf == true then
        local roomData = nil
        for gameId, subList in pairs(gamelist) do
            if gameId == nowGameId then
                roomData = subList
                break
            end
        end

        -- 有游戏厅资料 刷新
        if roomData ~= nil then
            uiRoom.ShowGameRoom(nowGameId, roomData, true)
            -- 没游戏厅资料 显示大厅
        else
            RecTran_Main.gameObject:SetActive(true);
            RecTran_Room.gameObject:SetActive(false)
        end
    end

end, groupName);

--登录房间消息处理
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
                local boxResult = showMessageBox(CS.MessageBoxStyle.OKCancel, "", receiveMsg.Message, "前往充值", "取消");
                if boxResult == CS.MessageBoxResult.OK then
                    OpenRechargeUI()
                end
            end)()
        elseif (receiveMsg.Code == -3) then
            G.Util.coroutine_call(function()
                local boxResult = showMessageBox(CS.MessageBoxStyle.OKCancel, "", receiveMsg.Message, "继续", "取消");
                if boxResult == CS.MessageBoxResult.OK then
                    local serverParm = G.Tool.StringHelper.Split(receiveMsg.UserData.ServerAddr, "|")
                    ReGoGame(serverParm[2], tonumber(serverParm[1]))                   
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

--玩家属性变化
G.NetQ.RegMsgHook(G.Proto.BClass.NotifyServer, G.Proto.NotifyServer.AttrChangeID, function(receiveMsg)
    -- 循环变化属性，做相应操作
    for i, Attr in ipairs(receiveMsg.Attrs) do
        -- 0 金币变化 1 新邮件
        if Attr.TypeID == 0 then
            if this.gameObject.activeSelf == true then
                -- 金額變多，有可能是充值，刷新介面
                if Attr.Param > userdata.CashAmount then
                    G.Service.Login.RequestUserInfoHall()
                else
                    userdata.CashAmount = Attr.Param
                    RefreshUserInfo()
                end

                -- 在充值介面錢變動時刷新介面
                local node = CS.WindowManager.Instance:FindWindowNodeByName("UIRecharge")
                if node ~= nil then
                    local Txt_CashAmount = node.WindowGameObject.transform:Find("UIBody/_OnlinePayDetail/_CashAmount"):GetComponent("Text")
                    if Txt_CashAmount ~= nil then
                        Txt_CashAmount.text = G.Tool.UserHelper.ToCash(Attr.Param)
                    end
                end
            else
                print("@@@@@@@@@@@@ 大廳介面不顯示,不刷新大廳資訊")
            end
        elseif Attr.TypeID == 1 then
            G.Tool.Sound.PlayHallSound("NewMail")
            G.Service.Mail.RefreshMailList();
        elseif Attr.TypeID == 3 then
            G.User.SetPayAmountConfig(Attr.SParam)
        elseif Attr.TypeID == 4 then
            G.Tool.Sound.PlayHallSound("NewMail")
            G.Service.CS.RefreshCSList();
        end
    end
end, groupName);

-- 拦截邮件消息
G.Service.Mail.RegMailRetCallBack(function()
    if Check_Mail ~= nil then
        Check_Mail.SetGetDataFinish()
    end
    UpdateElement()
end)
-- 拦截邮件消息
G.Service.CS.RegCSRetCallBack(function()
    if Check_CSData ~= nil then
        Check_CSData.SetGetDataFinish()
    end
    UpdateCS()
end)

-- 攔截活動訊息.

G.Service.Activity.RegActivityRetCallBack(function()
    --print("活動事件")
    if Check_Activity ~= nil then
        Check_Activity.SetGetDataFinish()
    end
    -- 更新圖片預載.        
    --local list = G.Service.Activity.GetActivityPopList()
    --if(list ~= nil ) then uiAd.PreDownLoad(G.Service.Activity.GetActivityPopList()) end
end)

function Start()
	uiFilterGame.Init(this, UpdateGameIcon)

	uiGameUpdate.Init(GameLogoList, GameVersion, ShowIcon)
	
    -- 避免UIRoute進大廳後破圖
	local UIRoute = CS.WindowManager.Instance:FindWindowNodeByName("UIRoute")
	if UIRoute ~= nil then
		CS.WindowManager.Instance:CloseWindow("UIRoute", false);
    end

	-- 直播按钮开关
	if G.GameDefine.FlagWebViewIcon1 == 0 or G.GameDefine.WebViewIcon1Url == "" then
		Btn_Live.gameObject:SetActive(false)
	else
        Btn_Live.gameObject:SetActive(true)
        
        -- 直播按鈕名稱 改影城
        Btn_LiveIcon0.gameObject:SetActive(G.GameDefine.WebViewIcon1Type == 0)
        Btn_LiveIcon1.gameObject:SetActive(G.GameDefine.WebViewIcon1Type == 1)
	end

    uiCommon.SetCallbackHeadIcon(OpenUserInfo)
    uiCommon.SetCallbackRecharge(OpenRechargeUI)
    
    -- 設定AD可開啟的位置.
    uiAd.onLinkGame = LinkGame
    uiAd.onOpenRechargeUI = OpenRechargeUI
    uiAd.onOpenMail = OpenMail    
    uiAd.onOpenBank = OpenBank    
    uiAd.onOpenExchange = OpenExchange
    uiAd.onOpenUserInfo = OpenUserInfo
    uiAd.onOpenMsgToGM = OpenMsgToGM
    uiAd.onOpenAgent = OpenAgent
    uiAd.onOpenProxy = OpenProxy
    uiAd.onOpenLive = OpenLive    
    uiAd.onOpenNotice = OpenNotice
    uiRoom.onRoomClick = RoomClick

    CalculateGameScrollView(true)
	
    -- 兌換文字 ExchangeFontType
    Btn_ExchangeFont1.gameObject:SetActive(tonumber(G.GameDefine.ExchangeFontType) == 0)
    Btn_ExchangeFont2.gameObject:SetActive(tonumber(G.GameDefine.ExchangeFontType) == 1)
    Btn_ExchangeFont3.gameObject:SetActive(tonumber(G.GameDefine.ExchangeFontType) == 2)
    Btn_ExchangeFont4.gameObject:SetActive(tonumber(G.GameDefine.ExchangeFontType) == 3)
    Btn_Promo.gameObject:SetActive(G.GameDefine.Club2Agent == 1)
	
    -- 商城文字
    local shopNameID = userdata.ShopNameID
    Img_RechargeFont1.gameObject:SetActive(shopNameID == 1)
    Img_RechargeFont2.gameObject:SetActive(shopNameID == 2)
    Img_RechargeFont3.gameObject:SetActive(shopNameID == 3)
    Img_RechargeFont4.gameObject:SetActive(shopNameID == 4)

    --彩金池是否開啟
    btn__MoneyPool.gameObject:SetActive(G.GameDefine.ShowCaiJinchi == 1)

    uiCommon.ShowRecharge(true)
    Btn_Recharge.gameObject:SetActive(true)
  
    UpdateElement()
    UpdateCS()

    RecTran_GameList.gameObject:SetActive(false)

    for k, v in pairs(G.Game.GameIDs) do
        GameLogoList[k] = RecTran_GameList.transform:Find("GameLogo_" .. k):GetComponent("RectTransform")
    end

    this:InvokeRepeating(RefreshServerList, 0, RefreshServerListTime)
    this:InvokeRepeating(UpdateButton, 0, RefresButtonTime)

    G.Service.ReCharge.GetRechargeList()

    Btn_agent.gameObject:SetActive(G.GameDefine.Agent == 1)

    Btn_agent:AddClickListener(function() OpenAgent() end)

    Btn_Promo:AddClickListener(function() OpenProxy() end)

    Btn_Recharge:AddClickListener(function()

        OpenRechargeUI()
    end)
  
    btn__MoneyPool:AddClickListener(function()
        local openparam = CS.WindowNodeInitParam("UIMoneyPool", CS.AppDefine.HallNumber)
        openparam.WindowData = moneypool;
        CS.WindowManager.Instance:OpenWindow(openparam)
    end)

    Btn_Exchange:AddClickListener(function()

		-- 还没到达显示条件 跳出讯息
		local IsShow = IsShowExchangeButton()
		if IsShow == false then
			if userdata.ConvertPopupText ~= nil then
				G.Util.coroutine_call(function()
					showMessageBox(CS.MessageBoxStyle.OK, "", userdata.ConvertPopupText, "确定");
				end)()
			end
			return
		end
		
        if (user.FlowInfo.Status == 1 and user.FlowInfo.UnionPlatform == 1) then
            if (user.FlowInfo.Achievement == 0) then
                img_Bonus.gameObject:SetActive(true);
                local sequence = CS.DG.Tweening.DOTween.Sequence()
                img_Bonus.transform.localScale = CS.UnityEngine.Vector3(1, 1, 1)

                sequence:AppendInterval(1.2)
                sequence:Append(img_Bonus.transform:DOScale(0.1, 0.3))

                sequence:AppendCallback(function()
                    img_Bonus.gameObject:SetActive(false);
                end)
                return
            end
        end



        if (G.Service.BindingTest.IsBindingTestMode()) then --add by Bob

            if G.Service.BindingTest.IsBingdingPhone() ~= true then

                G.Util.coroutine_call(function()
                    local showMessage = "兑换需绑定用户信息，确认绑定吗?"
                    if tonumber(G.GameDefine.ExchangeFontType) == 1 then
                        showMessage = "福利需绑定用户信息，确认绑定吗？"
                    elseif tonumber(G.GameDefine.ExchangeFontType) == 2 then
                        showMessage = "清算需绑定用户信息，确认绑定吗？"
                    elseif tonumber(G.GameDefine.ExchangeFontType) == 3 then
                        showMessage = "提现需绑定用户信息，确认绑定吗？"
                    end

                    local boxResult = showMessageBox(CS.MessageBoxStyle.OKCancel, "", showMessage, "绑定", "取消");
                    if boxResult == CS.MessageBoxResult.OK then
                        local openparam = CS.WindowNodeInitParam("UIUserInfo", CS.AppDefine.HallNumber)
                        openparam.WindowData = 1;
                        CS.WindowManager.Instance:OpenWindow(openparam)
                    end
                end)()
            else
                OpenExchange()
            end


        else
            if userdata.IsBindGuest ~= true then

                G.Util.coroutine_call(function()
                    local showMessage = "需要绑定用户信息，确认绑定吗？"
                    local boxResult = showMessageBox(CS.MessageBoxStyle.OKCancel, "", showMessage, "绑定", "取消");
                    if boxResult == CS.MessageBoxResult.OK then
                        local openparam = CS.WindowNodeInitParam("UIUserInfo", CS.AppDefine.HallNumber)
                        openparam.WindowData = 1;
                        CS.WindowManager.Instance:OpenWindow(openparam)
                    end
                end)()
            else
                OpenExchange()                
            end
        end
    end)

    Btn_Mail:AddClickListener(function() OpenMail("Mail") end)    

    Btn_Coffer:AddClickListener(function() OpenBank() end)
	
	Btn_Live:AddClickListener(function() OpenLive() end)
	
    Btn_Setting:AddClickListener(function()

        local openparam = CS.WindowNodeInitParam("UISetting", CS.AppDefine.HallNumber)
        CS.WindowManager.Instance:OpenWindow(openparam)
    end)
   
    Btn_Notice:AddClickListener(function() OpenNotice() end)

    Btn_Upgrade:AddClickListener(function()

        if G.Platform.Is_L_Site() then 
            OpenUserInfo(1)            
        else
            uiAd.CheckShowBingdingGift(true)
        end
    end)

    UpdateButton()
    Btn_CustomService:AddClickListener(function() OpenMsgToGM() end)   

    if userdata.IsGaming and userdata.LockGameID ~= 0 and userdata.ServerAddr ~= "" then
        G.Util.coroutine_call(function()
  
            local boxResult = showMessageBox(CS.MessageBoxStyle.OKCancel, "", "你正在房间[" .. G.Game.ReplaceGameName(userdata.ServerName) .. "]中进行游戏，是否进入房间继续游戏？", "继续", "取消");
            if boxResult == CS.MessageBoxResult.OK then
                -- 紀錄BUG，有時候userdata.ServerAddr拆分數字會有問題
                -- 原因LoginRetID中有ServerAddr值，後來傳來的UserHallInfoID中卻無ServerAddr值
                if userdata.ServerAddr ~= "" then
                    ReGoGame(userdata.ServerAddr, userdata.LockGameID)
                else
                    CS.UIBubblePrompt.Show("游戏连接失败", "UIHall")
                end
            end
        end)()
    end
end

function Update()
    -- 檢查所有資料是否下載完畢
    CheckGetData()

    -- 檢查是否要過serverlist
    CheckServerList()

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

-- 界面被打开时接收界面参数
function RefreshWindowData(windowData)
    G.Tool.Sound.PlayHallBGM("bg_music")
    G.Tool.Sound.MusicStatus()
    G.Tool.Sound.SoundStatus()

    -- 開啟大廳
    if RecTran_Room.gameObject.activeSelf == false then
        RecTran_Main.gameObject:SetActive(true);
    end

    GetUserInfoData()

    if windowData ~= nil and windowData.OpenRechargeUI then
        OpenRechargeUI()
    end
end

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

    G.Service.Activity.RemoveRegActivityMsg()

    G.Service.CS.RemoveRegCSMsg()

    uiAd.Dispose()

    if (seqJackpotPoolRet ~= nil) then
        seqJackpotPoolRet:Kill()
    end
	
	-- 清除遊戲下載
	uiGameUpdate.ClearGameHotUpdate()
end

function EscapeWindow()

    if RecTran_Room.gameObject.activeSelf then
        uiRoom.EscapeWindow()
        G.Service.Game.CloseScene()
    else
        G.Util.coroutine_call(function()
            local boxResult = showMessageBox(CS.MessageBoxStyle.OKCancelClose, "", "您确定要确认退出游戏吗？", "再玩一下", "残忍退出");

            if boxResult == CS.MessageBoxResult.Cancel then
                G.Service.Login.Logout()
                CS.UnityEngine.Application.Quit();
            end
        end)()
    end
end

function SendGetLoginBonus()
    G.Service.LoginBonus.SendRequest(function()
        if Check_LoginBonus ~= nil then
            Check_LoginBonus.SetGetDataFinish()
        end

        if G.Service.LoginBonus.IsOpenLoginBonus() == false then
            Btn_Notice.gameObject:SetActive(false)
        else
            Btn_Notice.gameObject:SetActive(true)
        end
    end)
end

function CheckGetData()
    if isGetAllDataFinish == false then
        if Check_UserData ~= nil then
            Check_UserData.UpdateGetData()
        end

        if Check_ExchangeLog ~= nil then
            Check_ExchangeLog.UpdateGetData()
        end

        if Check_Mail ~= nil then
            Check_Mail.UpdateGetData()
        end

        if Check_Activity ~= nil then
            Check_Activity.UpdateGetData()
        end

        if Check_CSData ~= nil then
            Check_CSData.UpdateGetData()
        end

        if Check_LoginBonus ~= nil then
            Check_LoginBonus.UpdateGetData()
        end

        if (Check_UserData.IsGetDataFinish() == true and
                Check_ExchangeLog.IsGetDataFinish() == true and
                Check_Mail.IsGetDataFinish() == true and
                Check_Activity.IsGetDataFinish() == true and
                Check_LoginBonus.IsGetDataFinish() == true and
                Check_CSData.IsGetDataFinish() == true and 
                G.Service.Activity.IsPreDownLoad() ) then

            isGetAllDataFinish = true

            uiAd.ShowActivity()
        end
    elseif(IsGetServerList == true)then
        CS.WindowManager.Instance:CloseWindow("UIUpdateHall", false)
    end
end

function CheckShowReward()
    if G.Service.LoginBonus.RetCode == -4 then
        CheckShowLoginGift()
        return false
    elseif G.Service.LoginBonus.RetCode == -3 then
        CheckShowLoginGift()
        return false
    elseif G.Service.LoginBonus.RetCode ~= 2 then
        return false
    end

    local openparam = CS.WindowNodeInitParam("UINotice", CS.AppDefine.HallNumber)
    openparam.WindowCloseCallBack = RefreshUserInfo
    CS.WindowManager.Instance:OpenWindow(openparam)
end

function CheckShowLoginGift()
    local openparam = CS.WindowNodeInitParam("UILoginGift", CS.AppDefine.HallNumber)
    openparam.WindowCloseCallBack = nil
    CS.WindowManager.Instance:OpenWindow(openparam)
end

function CheckDailyGiftInGame()
    G.Service.LoginBonus.SendRequest(UpdateElement)
end

function CheckShowEvaluate()
    --未储值
    if userdata.SumCharge == 0 then
        return false
    end

    --玩家金额不足
    if userdata.CashAmount < 1 then
        return false
    end

    local play_times = CS.UnityEngine.PlayerPrefs.GetInt("play_times", 0)
    local evaluate_times = CS.UnityEngine.PlayerPrefs.GetInt("evaluate_times", 3 - 20)

    --print("~~~~~~~~~~~~~~~~~~~~~~~~~~play_times",play_times)
    --print("~~~~~~~~~~~~~~~~~~~~~~~~~~evaluate_times",evaluate_times)
    if play_times - evaluate_times < 20 then
        return false
    end

    CS.UnityEngine.PlayerPrefs.SetInt("evaluate_times", play_times)
    local openparam = CS.WindowNodeInitParam("UIEvaluate", CS.AppDefine.HallNumber)
    --openparam.WindowCloseCallBack = callback
    CS.WindowManager.Instance:OpenWindow(openparam)
end

--计算游戏列表在画面显示范围
function CalculateGameScrollView(isFull)
	local offsetMin
	local sizeDelta
	if (isFull == true) then
		offsetMin = CS.UnityEngine.Vector2 (0, RecTran_Panel.offsetMin.y);
		sizeDelta = CS.UnityEngine.Vector2(initScrollViewRight, 0)	
	else
		offsetMin = CS.UnityEngine.Vector2 (initPanelWidth, RecTran_Panel.offsetMin.y);
		sizeDelta = CS.UnityEngine.Vector2(-(initScrollViewRight + initPanelWidth), 0)	
	end
	RecTran_Panel.offsetMin = offsetMin
	RecTran_GameScrollView.sizeDelta = sizeDelta
	
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

    if Check_ExchangeLog == nil then
        Check_ExchangeLog = CheckIsGetData.Create()
        G.Service.ExchangeLog.ClearLoadLogList()
        Check_ExchangeLog.Init(G.Service.ExchangeLog.InitLoadLogList, "ExchangeLog", false)
    else
        Check_ExchangeLog.StartGet()
    end

    if Check_Mail == nil then
        Check_Mail = CheckIsGetData.Create()
        G.Service.Mail.ClearMailList()
        Check_Mail.Init(G.Service.Mail.InitLoadMailList, "Check_Mail", false)
    else
        Check_Mail.StartGet()
    end

    if Check_Activity == nil then
        Check_Activity = CheckIsGetData.Create()
        G.Service.Activity.ClearActivityList()
        Check_Activity.Init(G.Service.Activity.InitLoadActivityList, "Check_Activity", false)
    else
        Check_Activity.StartGet()
    end       

    if Check_CSData == nil then
        Check_CSData = CheckIsGetData.Create()
        G.Service.CS.ClearCSList()
        Check_CSData.Init(G.Service.CS.InitLoadCS, "Check_CSData", false)
    else
        Check_CSData.StartGet()
    end

    if Check_LoginBonus == nil then
        Check_LoginBonus = CheckIsGetData.Create()
        Check_LoginBonus.Init(SendGetLoginBonus, "LoginBonus", false)
    else
        Check_LoginBonus.StartGet()
    end
end

function RefreshUserInfo()
    user = G.User.GetCurrentUser();
    userdata = user.UserData

    local playerID = "ID:" .. user.UserID

    if userdata.IsBindGuest == false then
        playerID = playerID .. "(游客)"
    end
    uiCommon.SetPlayerID(playerID)
    Btn_Upgrade.gameObject:SetActive(userdata.IsBindGuest == false)
    uiCommon.SetHeadIcon(userdata.HeadID)
    uiCommon.SetMoney(G.Tool.UserHelper.ToCash(userdata.CashAmount))
end

function RefreshServerList()
    if G.IsGameStart() ~= true then
        -- 熱更期間不重整遊戲介面
        if uiGameUpdate.IsHotUpdate() == true then
            return
        end

        if isFisrtRequestServerList then
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
end

function InitNoDataButtonIcon(scoureData, cloneData, downloadtype, gameId)

    scoureData:GetComponent("Animator").enabled = false
    cloneData.gameObject:SetActive(true)
    cloneData.transform:Find("_Loading"):GetComponent("Image").gameObject:SetActive(false)
    cloneData.transform:Find("_Percentage"):GetComponent("Text").gameObject:SetActive(false)
    cloneData.transform:Find("_WaitText").gameObject:SetActive(false)
end

function ShowIcon(gameId)
    local GameObject = GameLogoList[tostring(gameId)]

    if GameObject ~= nil then
        GameObject:GetComponent("Animator").enabled = true

        local TempNoDataGame = GameObject.transform:Find("NoDataGame")
        if TempNoDataGame ~= nil then
            TempNoDataGame.gameObject:SetActive(false)
        end

        local GameInfo = GameObject.transform:Find("gameInfo")
        local GamePress = GameObject.transform:Find("Pressed")

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

--設定遊戲彩帶狀態
function ResetRibbon(imgt, gameId)
    --當版本號不足時
    if G.Service.NetworkService.CheckVer(GetGameVer(gameId), GameVersion[gameId]) > 0 then
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

function DestroyChild(Go)
    for i = 0, Go.transform.childCount - 1 do
        local node = Go.transform:GetChild(i)
        if (node ~= nil) then CS.UnityEngine.GameObject.Destroy(node.gameObject) end
    end
end

function InitUpdateGridLayoutGroup(logoParent)
    if logoParent == nil then
        return
    end
    local _grid = logoParent:GetComponent("GridLayoutGroup");
    if _grid ~= nil then
        _grid.padding.left = GridLayoutGroup_GameRootTemp.padding.left
        _grid.padding.right = GridLayoutGroup_GameRootTemp.padding.right
        _grid.example.invalid = GridLayoutGroup_GameRootTemp.example.invalid
        _grid.padding.bottom = GridLayoutGroup_GameRootTemp.padding.bottom
        _grid.spacing = GridLayoutGroup_GameRootTemp.spacing
        _grid.constraintCount = GridLayoutGroup_GameRootTemp.constraintCount
    end
end

function UpdateGridLayoutGroup(logoParent, activeGameNumber)  
    if G.Game.IsShowAllGame() == true then
        InitUpdateGridLayoutGroup(logoParent)
        return
    end

    if (activeGameNumber == 1) then
        SetGridLayoutGroup(logoParent, 300, 200, 0, 0, 1.5, 4)
    elseif (activeGameNumber == 2) then
        SetGridLayoutGroup(logoParent, 125, 100, 100, 0, 1.2, 4)
    elseif (activeGameNumber == 3) then
        SetGridLayoutGroup(logoParent, 50, 100, 25, 0, 1, 4)
    elseif (activeGameNumber == 4) then
        SetGridLayoutGroup(logoParent, 100, 0, 100, 0, 1.2, 2)
    end
end

function SetGridLayoutGroup(_parent, _left, _top, _spacingX, _spacingY, _childSize, _constraintCount)
    --print("SetGridLayoutGroup",_left,_top,_spacingX,_spacingY,_childSize)
    if _parent == nil then
        return
    end

    local _grid = _parent:GetComponent("GridLayoutGroup");
    if _grid ~= nil then
        _grid.padding.left = _left
        _grid.padding.right = 0
        _grid.example.invalid = _top
        _grid.padding.bottom = 0
        _grid.spacing = CS.UnityEngine.Vector2(_spacingX, _spacingY)
        _grid.constraintCount = _constraintCount
    end

    for i = 0, _parent.transform.childCount - 1, 1 do
        _parent.transform:GetChild(i).localScale = CS.UnityEngine.Vector3.one * _childSize
    end
end

function GetGameVer(id)
	return CS.HotUpdate.HotUpdateManager.Instance:GetProjectVersion(G.GetGamePName(id))
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

--回到玩到一半的遊戲
function ReGoGame(ServerAddr, gameId)
    local addressParm = G.Tool.StringHelper.Split(ServerAddr, ":")
    local data = {}
    data.IP = addressParm[1]
    data.Port = addressParm[2]
    data.GameID = gameId
	
    if G.Service.NetworkService.CheckVer(GetGameVer(gameId), GameVersion[gameId]) > 0 then
        local openparam = CS.WindowNodeInitParam("UIUpdateGame", CS.AppDefine.HallNumber)
        openparam.NodeType = CS.BaseNodeType.Loading
        openparam.LoadComplatedCallBack = function(windowNode)
			local sld_Slider = windowNode.WindowGameObject.transform:Find("Slider"):GetComponent("Slider")
			
			uiGameUpdate.AddUpdateList(
				gameId,
				function(ProgressPercentage)
				    sld_Slider.value = ProgressPercentage
				end,
				function()
					G.Service.NetworkService.RequestGameServerAddr(data)
					CS.WindowManager.Instance:CloseWindow("UIUpdateGame", false)
				end,
				function (gameId)
					CS.WindowManager.Instance:CloseWindow("UIUpdateGame", false)
				end
			)
        end
        CS.WindowManager.Instance:OpenWindow(openparam)
    else
        G.Service.NetworkService.RequestGameServerAddr(data) 
    end
end

function LinkGame(gameId)
    --当尚未下载先下载游戏
    if G.Service.NetworkService.CheckVer(GetGameVer(gameId), GameVersion[gameId]) > 0 then
        uiGameUpdate.AddUpdateList(gameId)
    else
		-- 自動入桌
        if (autolist[gameId]) then
            RoomClick(autolist[gameId]);
		elseif (htmllist[gameId]) then
			local openparam = CS.WindowNodeInitParam("UIGameWebview", CS.AppDefine.HallNumber)
			openparam.WindowData = htmllist[gameId].IPAddress;
			CS.WindowManager.Instance:OpenWindow(openparam)			
        else    
            local name = "GameTitle_" .. gameId
            -- 一鍵入廳設定切換入廳文字
            local userGameList = nil;
            if ((G.User.GetUserGameList2() ~= nil)) then
                userGameList = G.User.GetUserGameList2()
            else
                userGameList = G.User.GetUserGameList()
            end

            local fontVer = tonumber(G.Tool.TableHelper.Find(userGameList, function(v) return v.GameID == gameId end)[1].IconName)

            if fontVer ~= 0 then
                name = name .. "_" .. fontVer
            end

            Img_RoomTitle:ResetSpriteByName(CS.AppDefine.HallNumber, name, true);
            GameClick(gameId, gamelist[gameId]);
        end
    end
end

function GameClick(gameId, subList)
    nowGameId = gameId   
    uiRoom.ShowGameRoom(gameId, subList, false)   
    uiRoom.AnimRoom(gameId)
end

-- EnterRoom
function RoomClick(serverinfo)
    if ((userdata.CashAmount + userdata.BankAmount) > serverinfo.KickOutMoney and serverinfo.KickOutMoney ~= 0 and serverinfo.KickOutMoney ~= nil) then
        CS.UIBubblePrompt.Show("您的金币超出房间限制" .. G.Tool.UserHelper.ToCashDetail(serverinfo.KickOutMoney) .. "!请前往菁英场进行游戏", groupName);
        return
    end

    -- 强制解锁
    G.NetQ.Resume()
    local requestGameServerAddrInfo = {};
    requestGameServerAddrInfo.GameID = serverinfo.GameID;
    requestGameServerAddrInfo.IP = serverinfo.IPAddress
    requestGameServerAddrInfo.Port = serverinfo.Port

    G.Service.NetworkService.RequestGameServerAddr(requestGameServerAddrInfo)
end

function UpdateElement()
    Img_Mail1.gameObject:SetActive(G.Service.Mail.GetUnReadMailCount() == 0)
    Img_Mail2.gameObject:SetActive(G.Service.Mail.GetUnReadMailCount() > 0)
    Txt_Mail.text = G.Service.Mail.GetUnReadMailCount()


    Img_Notice1.gameObject:SetActive(G.Service.LoginBonus.RetCode ~= 2)
    Img_Notice2.gameObject:SetActive(G.Service.LoginBonus.RetCode == 2)

    Img_Coffer1.gameObject:SetActive(userdata.SumCharge == 0)
    Img_Coffer2.gameObject:SetActive(userdata.SumCharge > 0)
end

function UpdateCS()
    Img_CS1.gameObject:SetActive(G.Service.CS.GetUnReadCSCount() == 0)
    Img_CS2.gameObject:SetActive(G.Service.CS.GetUnReadCSCount() > 0)
    Txt_CS.text = G.Service.CS.GetUnReadCSCount()
end

function UpdateButton()
    Btn_CustomService.gameObject:SetActive(true)
		
	local IsShow = IsShowExchangeButton()
	-- 还没到达显示条件
	if IsShow == false then
		-- 是否强制显示
		if userdata.ShowConvertPopup == 1 then
			Btn_Exchange.gameObject:SetActive(true)
		else
			Btn_Exchange.gameObject:SetActive(false)
		end
	else
		Btn_Exchange.gameObject:SetActive(IsShow)
	end
	
	local gray = nil
    if (tonumber(G.GameDefine.ExchangeFontType) == 0) then
		gray = Img_ExchangeGray1
    elseif (tonumber(G.GameDefine.ExchangeFontType) == 1) then
		gray = Img_ExchangeGray2
    elseif (tonumber(G.GameDefine.ExchangeFontType) == 2) then
		gray = Img_ExchangeGray3
    elseif (tonumber(G.GameDefine.ExchangeFontType) == 3) then
		gray = Img_ExchangeGray4
    end

    if (user.FlowInfo.Status == 1 and user.FlowInfo.UnionPlatform == 1) then
        if (IsExchangeAchievement()) then
			gray.gameObject:SetActive(false)
        else
			gray.gameObject:SetActive(true)
        end
        txt__NowText.text = tostring(user.FlowInfo.FlowAmountNow * 0.01);
        txt__LimitText.text = tostring(user.FlowInfo.FlowAmountLimit * 0.01);
    end
end

-- 兑换按钮
function IsShowExchangeButton()
    -- 讀設定
    if G.GameDefine.FlagExchage == 0 then
        return false
    end

    local result = G.User.CheckOpenData(G.User.andor.ConvertAndOr, userdata.ShowConvertLimit, userdata.PlaytimeConvert, userdata.ShowConvertBindPhone)
    return result
end

function IsExchangeAchievement()
    return (user.FlowInfo.Achievement == 1)
end

--region 打開UI

function OpenRechargeUI()

    local openparam = CS.WindowNodeInitParam("UIRecharge", CS.AppDefine.HallNumber)
    local CashAmount = userdata.CashAmount
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
    --end
end

function OpenUserInfo(page)
    page = page or 0
    local openparam = CS.WindowNodeInitParam("UIUserInfo", CS.AppDefine.HallNumber)
    openparam.WindowData = page
    openparam.WindowCloseCallBack = RefreshUserInfo
    CS.WindowManager.Instance:OpenWindow(openparam)
end

function OpenMail(page, onClose)
    local openparam = CS.WindowNodeInitParam("UIMail", CS.AppDefine.HallNumber)
    openparam.WindowData = page
    openparam.WindowCloseCallBack = function()
        RefreshUserInfo()
        UpdateElement()
        if onClose ~= nil then onClose() end        
    end

    -- 開啟前送出更新活動內容請求，較能讓開啟UI時取到的是已更新的資料.
	G.Service.Activity.ClearUrlList()
    G.Service.Activity.RefreshActivityList()
    CS.WindowManager.Instance:OpenWindow(openparam)

end

function OpenBank()
    local openparam = CS.WindowNodeInitParam("UIBank", CS.AppDefine.HallNumber)
    openparam.WindowCloseCallBack = RefreshUserInfo()      
    CS.WindowManager.Instance:OpenWindow(openparam)
end

function OpenExchange()
    local openparam = CS.WindowNodeInitParam("UIExchange", CS.AppDefine.HallNumber)
    openparam.WindowCloseCallBack =
    (function()
        G.Service.Login.RequestUserInfoHall()
    end)
    CS.WindowManager.Instance:OpenWindow(openparam)
end

function OpenMsgToGM()
    local openparam = CS.WindowNodeInitParam("UISendMsgToGM", CS.AppDefine.HallNumber)
    CS.WindowManager.Instance:OpenWindow(openparam)
end

function OpenAgent(page)
    if (userdata.ClubOpen) then
        local openparam = CS.WindowNodeInitParam("UIAgent", CS.AppDefine.HallNumber)
        openparam.WindowData = page
        CS.WindowManager.Instance:OpenWindow(openparam)
    else
        CS.UIBubblePrompt.Show("代理功能近期上线,敬请期待", groupName);
    end
end

function OpenProxy()
    if (userdata.ClubOpen) then
        CS.UILoadingData.Show("载入中,请稍后...", 5)

        local openparam = CS.WindowNodeInitParam("UIProxy", CS.AppDefine.HallNumber)
        openparam.WindowCloseCallBack =  RefreshUserInfo()
        CS.WindowManager.Instance:OpenWindow(openparam)
    else
        CS.UIBubblePrompt.Show("代理功能近期上线,敬请期待", groupName);
    end
end

function OpenLive()
    local openparam = CS.WindowNodeInitParam("UILiveBroadcast", CS.AppDefine.HallNumber)
    CS.WindowManager.Instance:OpenWindow(openparam)
end

-- 還有一個登入享好禮的地方,CheckShowReward未使用.
function OpenNotice()
    G.Service.LoginBonus.SendRequest(function()
        local CashAmount = userdata.CashAmount
        local openparam = CS.WindowNodeInitParam("UINotice", CS.AppDefine.HallNumber)
        openparam.WindowCloseCallBack = (function()
            UpdateElement()
            -- 充值頁面關閉時重刷大廳資訊
            if userdata.CashAmount > CashAmount then
                G.Service.Login.RequestUserInfoHall()
            else
                RefreshUserInfo()
            end
        end)
        CS.WindowManager.Instance:OpenWindow(openparam)
    end)
end