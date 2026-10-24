require("Module")
mmodule(...)

local G = require "Global"

local RecTran_Main
local RecTran_Room
local RecTran_EF
local Btn_RoomlistBack
local RecTran_RoomList 
local Txt_MaxOdds
local Txt_RoomVersion
local RecTran_RoomRow1
local RecTran_RoomRow2
local RecTran_RoomTitle
local RecTran_Rooms
local RecTran_RoomsBy
local RecTran_RoomsDdz
local rootGameBgDefault
local rootGameBg = {}
local RoomList = {}
local ParentUi

onRoomClick = nil

--切換至遊戲背景
local function ChangeBackground(gameId)
	rootGameBgDefault.gameObject:SetActive(gameId ~= nil and gameId > 0)
	
	for k,v in pairs(rootGameBg) do		
		rootGameBg[k].gameObject:SetActive(k == gameId)		
	end
end

function Init(hallUi)
    ParentUi = hallUi
    RecTran_Main = hallUi.transform:Find("_Main"):GetComponent("RectTransform")
    RecTran_Room = hallUi.transform:Find("_Room"):GetComponent("RectTransform")
    RecTran_EF = hallUi.transform:Find("EF"):GetComponent("RectTransform")
    Btn_RoomlistBack = hallUi.transform:Find("_Room/_RoomlistBack"):GetComponent("Button")
    RecTran_RoomList = hallUi.transform:Find("_Room/_RoomList"):GetComponent("RectTransform")
    Txt_MaxOdds = hallUi.transform:Find("_Room/_MaxOdds"):GetComponent("Text")
    Txt_RoomVersion = hallUi.transform:Find("_Room/_Version"):GetComponent("Text")
    RecTran_RoomRow1 = hallUi.transform:Find("_Room/_RoomList/_RoomRow1"):GetComponent("RectTransform")
    RecTran_RoomRow2 = hallUi.transform:Find("_Room/_RoomList/_RoomRow2"):GetComponent("RectTransform")
    RecTran_RoomTitle = hallUi.transform:Find("_Room/title"):GetComponent("RectTransform")
    RecTran_Rooms = hallUi.transform:Find("_Room/_Rooms"):GetComponent("RectTransform")
    RecTran_RoomsBy = hallUi.transform:Find("_Room/_RoomsBy"):GetComponent("RectTransform")
    RecTran_RoomsDdz = hallUi.transform:Find("_Room/_RoomsDdz"):GetComponent("RectTransform")
    rootGameBgDefault = hallUi.transform:Find("RoomBg"):GetComponent("RectTransform")
	rootGameBg[1] = hallUi.transform:Find("RoomBg1"):GetComponent("RectTransform")
	rootGameBg[14] = hallUi.transform:Find("RoomBg14"):GetComponent("RectTransform")
    rootGameBg[24] = hallUi.transform:Find("RoomBg24"):GetComponent("RectTransform")  
    
    Btn_RoomlistBack:AddClickListener(function()
        EscapeWindow()
    end)

    for i = 0, RecTran_Rooms.childCount - 1, 1 do
        local child = RecTran_Rooms:GetChild(i)
        local index = tonumber(child.name)
        RoomList[index] = RoomList[index] or {}
        RoomList[index].base = child
        RoomList[index].base:Find("UIBody/Icon").gameObject:SetActive(false)
    end

    for i = 0, RecTran_RoomsBy.childCount - 1, 1 do
        local child = RecTran_RoomsBy:GetChild(i)
        local index = tonumber(child.name)
        RoomList[index] = RoomList[index] or {}
        RoomList[index].by = child
    end

    for i = 0, RecTran_RoomsDdz.childCount - 1, 1 do
        local child = RecTran_RoomsDdz:GetChild(i)
        local index = tonumber(child.name)
        RoomList[index] = RoomList[index] or {}
        RoomList[index].ddz = child
    end
end

function ShowGameRoom(gameId, subList, interactable)
    RecTran_Main.gameObject:SetActive(false);
    RecTran_Room.gameObject:SetActive(true);
    RecTran_EF.gameObject:SetActive(false);

    nowGameId = gameId    
    subList = G.Tool.TableHelper.Sort(subList, function(a, b)
        return a.Flag < b.Flag
    end)

    local isShowIcon = false

    ChangeBackground(gameId)

    RecTran_RoomList.transform.position = CS.UnityEngine.Vector3(RecTran_RoomList.transform.position.x, -90, RecTran_RoomList.transform.position.z)
    for index, roomdata in pairs(RoomList) do
        if roomdata.base ~= nil then
            roomdata.base:SetParent(RecTran_Rooms)
            roomdata.base.gameObject:SetActive(false)
        end
        if roomdata.by ~= nil then
            roomdata.by:SetParent(RecTran_RoomsBy)
            roomdata.by.gameObject:SetActive(false)
        end
        if roomdata.ddz ~= nil then
            roomdata.ddz:SetParent(RecTran_RoomsDdz)
            roomdata.ddz.gameObject:SetActive(false)
        end
    end

    local Oddsetting = false;
    Txt_MaxOdds.gameObject:SetActive(false);

    for index, roomdata in pairs(RoomList) do
        local gameRoomIns = roomdata.base

        if gameId == 14 and roomdata.by ~= nil then
            gameRoomIns = roomdata.by
        elseif gameId == 24 and roomdata.by ~= nil then
            gameRoomIns = roomdata.by
        elseif gameId == 1 and roomdata.ddz ~= nil then
            gameRoomIns = roomdata.ddz
        end

        local localVersion = CS.HotUpdate.HotUpdateManager.Instance:GetProjectVersion(G.GetGamePName(gameId));
        Txt_RoomVersion.text = "V." .. tostring(localVersion)

        for k, v in pairs(subList) do
            if v.Flag == tostring(index) then
                if ((v.MaxOdd ~= nil) and (v.MaxOdd ~= 0) and (Oddsetting ~= true)) then
                    Oddsetting = true;
                    Txt_MaxOdds.text = string.format("所有场最大倍率%s倍", v.MaxOdd)
                    Txt_MaxOdds.gameObject:SetActive(true);
                end
                
                -- if (v.GameID == 1) then
                    -- gameRoomIns:SetParent(G.CaseWhen(tonumber(v.Flag) <= 6, RecTran_RoomRow1.gameObject.transform, RecTran_RoomRow2.gameObject.transform))
                -- else
                    gameRoomIns:SetParent(G.CaseWhen(k <= #RoomList, RecTran_RoomRow1.gameObject.transform, RecTran_RoomRow2.gameObject.transform))
                -- end
                gameRoomIns.localScale = CS.UnityEngine.Vector3(1, 1, 1)
                gameRoomIns.localPosition = CS.UnityEngine.Vector3(0, 0, 0)
                gameRoomIns.gameObject:SetActive(true)

                --体验场要放第一个
                if index == 6 then
                    gameRoomIns.transform:SetAsFirstSibling()
                end
                --在動畫演示前先將按鈕觸控
                gameRoomIns:GetComponent("Button").interactable = interactable;

                gameRoomIns:Find("UIBody/Info1"):GetComponent("Text").text = string.format(G.Tool.UserHelper.ToCashUnit(v.LoginMoney) .. "入场");

                if v.GameID == 14 or v.GameID == 24 then
                    if index == 6 then
                        gameRoomIns:Find("UIBody/Info2"):GetComponent("Text").text = "输赢不计"
                        gameRoomIns:Find("UIBody/Info1"):GetComponent("Text").text = "免费体验"
                    else
                        gameRoomIns:Find("UIBody/Info2"):GetComponent("Text").text = string.format("倍率：" .. G.Tool.UserHelper.ToCashUnit(v.BaseScore));
                    end
                elseif v.GameID == 1 then
                    if index == 6 then
                        gameRoomIns:Find("UIBody/Info2"):GetComponent("Text").text = string.format("底分：" .. G.Tool.UserHelper.ToCashUnit(v.BaseScore));
                        gameRoomIns:Find("UIBody/Info1"):GetComponent("Text").text = "免费体验"
                    else
                        gameRoomIns:Find("UIBody/Info2"):GetComponent("Text").text = string.format("底分：" .. G.Tool.UserHelper.ToCashUnit(v.BaseScore));
                    end
                else
                    gameRoomIns:Find("UIBody/Info2"):GetComponent("Text").text = string.format("底分：" .. G.Tool.UserHelper.ToCashUnit(v.BaseScore));
                end

                gameRoomIns:GetComponent("Button").onClick:RemoveAllListeners()
                gameRoomIns:GetComponent("Button"):AddClickListener(function() onRoomClick(v) end)           

                if v.GameID == 1 then
                    gameRoomIns:Find("UIBody/Icon").gameObject:SetActive(true)

                else
                    gameRoomIns:Find("UIBody/Icon").gameObject:SetActive(false)
                end
            end
        end
    end
end

function AnimRoom(gameId)
    local sequence = CS.DG.Tweening.DOTween.Sequence()

    local timer = 0.25

    local target = RecTran_RoomTitle.transform.position
    RecTran_RoomTitle.transform.position = CS.UnityEngine.Vector3(1000, target.y, target.z)
    sequence:Join(RecTran_RoomTitle.transform:DOMove(target, timer))

    target = RecTran_RoomList.transform.position
    if (gameId == 1) then
        target = CS.UnityEngine.Vector3(target.x, -90, target.z)
    elseif (gameId == 14 or gameId == 24) then
        target = CS.UnityEngine.Vector3(target.x, -90, target.z)
    end
    RecTran_RoomList.transform.position = CS.UnityEngine.Vector3(1000, target.y, target.z)
    sequence:Join(RecTran_RoomList.transform:DOMove(target, timer))

    if (gameId == 14 or gameId == 24) then

        math.randomseed(4)

        for i = 1, #RoomList do


            if (RoomList[i].by.transform:Find("UIBody") ~= nil) then

                RoomList[i].by.transform:Find("UIBody").transform.localScale = CS.UnityEngine.Vector3.zero
            end
        end
        local rnd = G.Tool.Math.MakeRandom(1, RecTran_RoomRow1.childCount);

        --動畫播放
        for i = 0, RecTran_RoomRow1.childCount - 1, 1 do
            sequence:AppendCallback(function()
                G.Tool.Ani.BubbleScaleS2B1(RecTran_RoomRow1:GetChild((rnd[i + 1] - 1)).transform:Find("UIBody"), 1.3, 0.1, nil)
            end)
            sequence:AppendInterval(0.1)
        end
        --啟用按鈕觸動
        for i = 0, RecTran_RoomRow1.childCount - 1, 1 do
            sequence:AppendCallback(function()
                RecTran_RoomRow1:GetChild((rnd[i + 1] - 1)):GetComponent("Button").interactable = true;
            end)
            sequence:AppendInterval(0.1)
        end

    elseif (gameId == 1) then
        for i = 1, #RoomList do
            if (RoomList[i].ddz.transform:Find("UIBody") ~= nil) then
                RoomList[i].ddz.transform:Find("UIBody").transform.localScale = CS.UnityEngine.Vector3.zero
            end
        end
        --提供不重複亂數排序
        rnd = G.Tool.Math.MakeRandom(1, RecTran_RoomRow1.childCount);
        local rnd1 = G.Tool.Math.MakeRandom(1, RecTran_RoomRow2.childCount);


        for i = 0, RecTran_RoomRow1.childCount - 1, 1 do
            sequence:AppendCallback(function()
                G.Tool.Ani.LandingScale(RecTran_RoomRow1:GetChild((rnd[i + 1] - 1)).transform:Find("UIBody"), 3, 0.15, nil)
            end)
            sequence:AppendInterval(0.1)
        end

        for i = 0, RecTran_RoomRow2.childCount - 1, 1 do
            sequence:AppendCallback(function()
                G.Tool.Ani.LandingScale(RecTran_RoomRow2:GetChild((rnd1[i + 1] - 1)).transform:Find("UIBody"), 3, 0.15, nil)
            end)
            sequence:AppendInterval(0.1)
        end

        --啟用按鈕觸動
        for i = 0, RecTran_RoomRow1.childCount - 1, 1 do
            sequence:AppendCallback(function()
                RecTran_RoomRow1:GetChild((rnd[i + 1] - 1)):GetComponent("Button").interactable = true;
            end)
            sequence:AppendInterval(0.1)
        end
        --啟用按鈕觸動
        for i = 0, RecTran_RoomRow2.childCount - 1, 1 do
            sequence:AppendCallback(function()
                RecTran_RoomRow2:GetChild((rnd[i + 1] - 1)):GetComponent("Button").interactable = true;
            end)
            sequence:AppendInterval(0.1)
        end

    else
        for i = 1, #RoomList do
            if (RoomList[i].base.transform:Find("UIBody") ~= nil) then
                RoomList[i].base.transform:Find("UIBody").transform.localScale = CS.UnityEngine.Vector3.zero
            end
        end
        --提供不重複亂數排序
        rnd = G.Tool.Math.MakeRandom(1, RecTran_RoomRow1.childCount);

        for i = 1, #rnd, 1 do
            print("<color=yellow>" .. rnd[i] .. "</color>");
        end

        for i = 0, RecTran_RoomRow1.childCount - 1, 1 do
            sequence:AppendCallback(function()
                G.Tool.Ani.LandingScale(RecTran_RoomRow1:GetChild((rnd[i + 1] - 1)).transform:Find("UIBody"), 3, 0.15, nil)
            end)
            sequence:AppendInterval(0.1)
        end
        --啟用按鈕觸動
        for i = 0, RecTran_RoomRow1.childCount - 1, 1 do
            sequence:AppendCallback(function()
                RecTran_RoomRow1:GetChild((rnd[i + 1] - 1)):GetComponent("Button").interactable = true;
            end)
            sequence:AppendInterval(0.1)
        end
    end
end

function EscapeWindow()
     -- 删除所有显示出来的子节点
     RecTran_Main.gameObject:SetActive(true);
     RecTran_Room.gameObject:SetActive(false);
     RecTran_EF.gameObject:SetActive(true);
     ChangeBackground()
end
