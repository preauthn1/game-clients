require("Module")
mmodule(...)

local G = require "Global"

local RecTran_CarouselRoot
local AdScrr_GameScrollView
local AdScrr_GameListContent
local RecTran_Carousel
local RecTran_CellPhone
local CellPhoneAni 
local CurrentUrl = ""
local AdPageCount = 0
local AdCurrentIndex = 0
local RefreshAdTime = 6
local AdStartIndex = 0
local AdEndIndex = 0
local AdLeftSize = 0
local AdRightSize = 0
local adtype = 0
local AdNextPageBehavior = 0--翻页动作：0下一页 1前一页
local ParentUi
local yield_return 
local Ad_URL = {}
-- 預先下載的Table.
local downImages = {}

onLinkGame = nil
onOpenRechargeUI = nil -- 前往充值.
onOpenMail = nil
onOpenPost = nil --前往公告.
onOpenBank = nil -- 前往保險箱.
onOpenExchange = nil -- 前往兌換管理.
onOpenUserInfo = nil -- 前往個人訊息.
onOpenMsgToGM = nil -- 前往客服與幫助.
onOpenAgent = nil -- 前往徵求全民代理.
onOpenProxy = nil -- 前往全民代理.
onOpenLive = nil -- 前往直播.
onOpenNotice = nil -- 前往登入享好禮.

local function DoRefreshAD()  
    if (AdPageCount <= 1) then
        return;
    end
    local idx = AdCurrentIndex + 1
    local ScrollPage = AdScrr_GameScrollView:GetComponent("ScrollPage")
    if idx >= AdPageCount then
        for i = 0, AdPageCount - 1 do
            ScrollPage:ToPrePage()
        end
    else
        ScrollPage:ToNextPage()
    end
end

local function PageSwitch(pageCount, currentIndex)
    -- print("<color=yellow>PageSwitch</color>")

    if ((DoRefreshAD ~= nil)) then
        -- print("<color=yellow>"..tostring(DoRefreshAD==nil).."</color>") 
        ParentUi:CancelInvokeRepeat(DoRefreshAD)
        ParentUi:InvokeRepeating(DoRefreshAD, 6, RefreshAdTime)
    end

    local sequence = CS.DG.Tweening.DOTween.Sequence()
    if (pageCount <= 6) then
        --差异值！调整广告起使位置的差异数值
        local v = AdStartIndex - 1
        for i = AdStartIndex, AdEndIndex, 1 do
            RecTran_CarouselRoot.transform:Find("_offset/p" .. tostring(i) .. "/cur"):GetComponent("Image").gameObject:SetActive((i == (currentIndex + 1 + v)))
        end
    else
        -------------------------------------------------- [总数大于6笔滑动处理]-------Start
        -------------- [纪录原始页签座标]-------Start
        local nativepos = {}
        for i = 1, 6, 1 do
            local o = RecTran_CarouselRoot.transform:Find("_offset/p" .. tostring(i))
            nativepos[i] = CS.UnityEngine.Vector3(o.transform.position.x, o.transform.position.y, o.transform.position.z)
        end
        -------------- [纪录原始页签座标]-------End
        -------------- [LOG]
        -- print("<color=purple>now page-------->"..tostring(currentIndex+1).."</color>")
        -------------- [当往下滑动一页等于最后一颗页签]-------Start 
        if ((currentIndex + 1) == AdEndIndex) then


            -- print("<color=yellow>Last Page</color>")


            -------------- [当往下滑动一页等于最后一页]-------Start 
            if ((currentIndex + 1) == AdPageCount) then
                RecTran_CarouselRoot.transform:Find("_offset/p5/cur"):GetComponent("Image").gameObject:SetActive(false)
                RecTran_CarouselRoot.transform:Find("_offset/p6/cur"):GetComponent("Image").gameObject:SetActive(true)
                -- print("<color=yellow>Final Page</color>")
                -------------- [当往下滑动一页等于最后一页]-------END 
            else
                -------------- [当往下滑动一页不是最后一页]-------Start
                -- print("<color=yellow>Need Chage Page</color>",AdStartIndex,AdEndIndex)
                AdEndIndex = AdEndIndex + 1
                AdStartIndex = AdStartIndex + 1
                ---------------------- [开始同步往左移动]-------------START
                local pr = this.transform:Find("_offset/pr");
                pr.gameObject:SetActive(true);

                pr.transform.localScale = CS.UnityEngine.Vector3(0.1, 0.1, 1)
                for i = 1, 6, 1 do
                    local o = RecTran_CarouselRoot.transform:Find("_offset/p" .. tostring(i))
                    local target = CS.UnityEngine.Vector3(o.transform.position.x - 34, o.transform.position.y, o.transform.position.z)
                    if (i == 1) then
                        sequence:Append(o.transform:DOMove(target, 0.2))
                    else
                        sequence:Join(o.transform:DOMove(target, 0.2))
                    end
                end
                --当最后一颗是最后一页时尺寸回覆1
                if (AdEndIndex == AdPageCount) then
                    sequence:Join(pr.transform:DOScale(1, 0.2))
                else
                    sequence:Join(pr.transform:DOScale(0.5, 0.2))
                end
                ---------------------- 开始同步往左移动-------------END                

                --隐藏演示的最后一颗与设定为远本座标 AppendCallback伫列（LIFO）储存 
                ---------------------- 移动结束,设定回为真实页签-------------START  
                sequence:AppendCallback(function()

                    RecTran_CarouselRoot.transform:Find("_offset/p6/cur").gameObject:SetActive(false);
                    RecTran_CarouselRoot.transform:Find("_offset/p5/cur").gameObject:SetActive(true);
                    --回归座标
                    for i = 1, 6, 1 do
                        local o = RecTran_CarouselRoot.transform:Find("_offset/p" .. tostring(i))
                        o.transform.position = CS.UnityEngine.Vector3(nativepos[i].x, nativepos[i].y, nativepos[i].z)
                    end
                    --关闭演示用页签
                    pr.gameObject:SetActive(false);
                    --当最后一颗是最后一页时尺寸回覆1

                    if (AdStartIndex ~= 1) then
                        RecTran_CarouselRoot.transform:Find("_offset/p1").transform.localScale = CS.UnityEngine.Vector3(0.5, 0.5, 1)
                    end


                    if (AdEndIndex == AdPageCount) then
                        RecTran_CarouselRoot.transform:Find("_offset/p6").transform.localScale = CS.UnityEngine.Vector3(1, 1, 1)
                    else
                        RecTran_CarouselRoot.transform:Find("_offset/p6").transform.localScale = CS.UnityEngine.Vector3(0.5, 0.5, 1)
                    end

                    -- print("<color=yellow>reset2</color>")
                end)
                ---------------------- 移动结束,设定回为真实页签-------------END  

                --指定第六颗亮起,第五颗暗下
                sequence:AppendCallback(function()
                    RecTran_CarouselRoot.transform:Find("_offset/p5/cur"):GetComponent("Image").gameObject:SetActive(false)
                    RecTran_CarouselRoot.transform:Find("_offset/p6/cur"):GetComponent("Image").gameObject:SetActive(true)
                    -- print("<color=yellow>reset1</color>")
                end)
                -------------- [当往下滑动一页不是最后一页]-------END   
            end
            -------------- [当往下滑动一页等于最后一颗页签]-------END 
            -------------- [当往前滑动一页等于第一颗页签]-------START 
        elseif ((currentIndex + 1) == AdStartIndex) then

            -- print("<color=yellow>First Page</color>")
            if ((currentIndex + 1) == 1) then
                -- print("<color=yellow>Top Page</color>")
                sequence:AppendInterval(0.3)
                sequence:AppendCallback(function()
                    -- print("<color=yellow>Top Page------RUN</color>")
                    RecTran_CarouselRoot.transform:Find("_offset/p2/cur"):GetComponent("Image").gameObject:SetActive(false)
                    RecTran_CarouselRoot.transform:Find("_offset/p1/cur"):GetComponent("Image").gameObject:SetActive(true)
                    RecTran_CarouselRoot.transform:Find("p6/cur"):GetComponent("Image").gameObject:SetActive(false)
                end)
            else
                -- print("<color=yellow>Need Chage Page</color>")               
                AdEndIndex = AdEndIndex - 1
                AdStartIndex = AdStartIndex - 1

                ---------------------- [开始同步往左移动]-------------START
                local pl = RecTran_CarouselRoot.transform:Find("_offset/pl");
                pl.gameObject:SetActive(true);

                pl.transform.localScale = CS.UnityEngine.Vector3(0.1, 0.1, 1)
                for i = 1, 6, 1 do
                    local o = RecTran_CarouselRoot.transform:Find("_offset/p" .. tostring(i))
                    local target = CS.UnityEngine.Vector3(o.transform.position.x + 34, o.transform.position.y, o.transform.position.z)
                    if (i == 1) then
                        sequence:Append(o.transform:DOMove(target, 0.2))
                    else
                        sequence:Join(o.transform:DOMove(target, 0.2))
                    end
                end
                --当最后一颗是最后一页时尺寸回覆1
                if (AdStartIndex == 1) then
                    sequence:Join(pl.transform:DOScale(1, 0.2))
                else
                    sequence:Join(pl.transform:DOScale(0.5, 0.2))
                end
                ---------------------- 开始同步往左移动-------------END                

                --隐藏演示的第一颗与设定为远本座标 AppendCallback伫列（LIFO）储存 
                ---------------------- 移动结束,设定回为真实页签-------------START  
                sequence:AppendCallback(function()

                    RecTran_CarouselRoot.transform:Find("_offset/p1/cur").gameObject:SetActive(false);
                    RecTran_CarouselRoot.transform:Find("_offset/p2/cur").gameObject:SetActive(true);
                    --回归座标
                    for i = 1, 6, 1 do
                        local o = RecTran_CarouselRoot.transform:Find("_offset/p" .. tostring(i))
                        o.transform.position = CS.UnityEngine.Vector3(nativepos[i].x, nativepos[i].y, nativepos[i].z)
                    end
                    --关闭演示用页签
                    pl.gameObject:SetActive(false);

                    if (AdEndIndex ~= AdPageCount) then
                        RecTran_CarouselRoot.transform:Find("_offset/p6").transform.localScale = CS.UnityEngine.Vector3(0.5, 0.5, 1)
                    end

                    --当第一颗是第一页时尺寸回覆1
                    if (AdStartIndex == 1) then
                        RecTran_CarouselRoot.transform:Find("_offset/p1").transform.localScale = CS.UnityEngine.Vector3(1, 1, 1)
                    else
                        RecTran_CarouselRoot.transform:Find("_offset/p1").transform.localScale = CS.UnityEngine.Vector3(0.5, 0.5, 1)
                    end

                    -- print("<color=yellow>reset2</color>")
                end)
                ---------------------- 移动结束,设定回为真实页签-------------END  

                --指定第1颗亮起,第5颗暗下
                sequence:AppendCallback(function()
                    RecTran_CarouselRoot.transform:Find("_offset/p2/cur"):GetComponent("Image").gameObject:SetActive(false)
                    RecTran_CarouselRoot.transform:Find("_offset/p1/cur"):GetComponent("Image").gameObject:SetActive(true)
                    -- print("<color=yellow>reset1</color>")
                end)
                -------------- [当往前滑动一页不是第一页]-------END
            end
            -------------- [当往前滑动一页等于第一颗页签]-------END
        else
            -------------- [当往前往后滑动一页不是最前或最后时]-------START
            sequence:AppendCallback(function()
                --重新设定选择页签
                local j = 1;
                for i = AdStartIndex, AdEndIndex, 1 do
                    RecTran_CarouselRoot.transform:Find("_offset/p" .. tostring(j) .. "/cur"):GetComponent("Image").gameObject:SetActive((i == (currentIndex + 1)))
                    j = j + 1;
                end
            end)
            -------------- [当往前往后滑动一页不是最前或最后时]-------END    
        end
    end
end

local function onAdPageChanged(pageCount, currentIndex)
    AdPageCount = pageCount
    AdNextPageBehavior = (AdCurrentIndex == currentIndex) and 0 or 1
    AdCurrentIndex = currentIndex
    local adl = G.User.GetAdList()
    if adl == nil or #adl == 0 then
        local AD1 = AdScrr_GameScrollView.transform:Find("GameListContent/_AD1")
        AD1.gameObject:SetActive(false)
        return
    end

    --设定对应广告行为与连结
    CurrentUrl = adl[currentIndex + 1].Link
    adtype = adl[currentIndex + 1].Behavior
    -- 切换页签
    if (currentIndex == 1) then
        AdRightSize = 1;
    end
    -- print("<color=yellow>onAdPageChanged</color>")

    if (pageCount > 1) then
        PageSwitch(pageCount, currentIndex);
    end
end

local function SetAd(url, Img_Content, index)
	-- 避免重複下載
	if Ad_URL[index] == url then
		return
	end
		
    Img_Content.gameObject:SetActive(false)


    G.Util.coroutine_call(function()
        --url = "http://example.invalid/Upload/AdImage/ad_p7_hall.png"
        local www = CS.UnityEngine.WWW(url)
        yield_return(www);
        if www.error ~= nil then
            print(www.error)
        else
            if www.isDone and www.texture ~= nil and www.texture.width ~= 8 then
                local rect = { x = 1, y = 1, width = www.texture.width, height = www.texture.height }
                Img_Content.gameObject:SetActive(true)
                Img_Content.sprite = CS.UnityEngine.Sprite.Create(www.texture, CS.UnityEngine.Rect(0, 0, www.texture.width, www.texture.height), CS.UnityEngine.Vector2(0, 0));

				Ad_URL[index] = url
            end
        end
    end)()
end

local function PlayCellPhoneAni()
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

function Dispose()
    Ad_URL = {} --清空廣告圖片資料 避免重新登入時掉圖
    local AdscrollPage = AdScrr_GameScrollView:GetComponent("ScrollPage")
    AdscrollPage.OnPageChanged = AdscrollPage.OnPageChanged - onAdPageChanged
end

function Init(hallUi)
    ParentUi = hallUi
    RecTran_CarouselRoot = hallUi.transform:Find("_Main/Panel/GameAttach/_GameScrollView/GameListContent/_Carousel"):GetComponent("RectTransform")
    AdScrr_GameScrollView = RecTran_CarouselRoot.transform:Find("_offset/_AddScrollView"):GetComponent("ScrollRect")
    AdScrr_GameListContent = RecTran_CarouselRoot.transform:Find("_offset/_AddScrollView/GameListContent"):GetComponent("RectTransform")
    RecTran_Carousel = RecTran_CarouselRoot.transform:Find("_offset"):GetComponent("RectTransform")
    RecTran_CellPhone = hallUi.transform:Find("CellPhone"):GetComponent("RectTransform")
    CellPhoneAni = hallUi.transform:Find("CellPhone/CellphoneAni")

    yield_return = G.Util.async_to_sync(function(to_to_yield, cb)
        hallUi:YieldAndCallback(to_to_yield, cb)
    end)

    onAdPageChanged(1, 0)
    local AdscrollPage = AdScrr_GameScrollView:GetComponent("ScrollPage")
    AdscrollPage.OnPageChanged = AdscrollPage.OnPageChanged + onAdPageChanged

    local Btn_AdScrr = RecTran_CarouselRoot.transform:Find("_offset"):GetComponent("Button")
    Btn_AdScrr:AddClickListener(function() ProcAD(adtype, CurrentUrl) end)    
end

function InitAd()
    local adl = G.User.GetAdList()
    -- print("<color=red>ad count:" .. #adl .. "</color>")

    if (AdPageCount <= 1) then
        AdStartIndex = (#adl <= 4) and 2 or 1;

        if (#adl <= 4) then
            AdEndIndex = #adl + 1;
        elseif (#adl == 5) then
            AdEndIndex = 5;
        else
            AdEndIndex = 6;
        end
    
        for i = AdStartIndex, AdEndIndex do
            local p = RecTran_CarouselRoot.transform:Find("_offset/p" .. tostring(i))
            p.gameObject:SetActive(true);
        end

        PageSwitch(#adl, 0);
    end

    ParentUi:CancelInvokeRepeat(DoRefreshAD)
    ParentUi:InvokeRepeating(DoRefreshAD, 0, RefreshAdTime)

    for i = 1, #adl, 1 do
        if (AdScrr_GameScrollView.transform:Find("GameListContent/_AD" .. tostring(i) .. "/_Content") == nil) then
            local prev_obj = AdScrr_GameScrollView.transform:Find("GameListContent/_AD" .. tostring(i - 1)).gameObject;
            local ad = CS.UnityEngine.GameObject.Instantiate(prev_obj);
            ad.transform:SetParent(prev_obj.transform.parent)
            ad.transform.localScale = CS.UnityEngine.Vector3(1, 1, 1)
            ad.transform.localPosition = CS.UnityEngine.Vector3.zero
            ad.name = "_AD" .. tostring(i)
        end

        local ImgContent = AdScrr_GameScrollView.transform:Find("GameListContent/_AD" .. tostring(i) .. "/_Content"):GetComponent("Image");
        local ImgRoot = AdScrr_GameScrollView.transform:Find("GameListContent/_AD" .. tostring(i)):GetComponent("Image");
        ImgRoot.gameObject:SetActive(true);
        SetAd(adl[i].Picture, ImgContent, i)
    end

    AdScrr_GameScrollView:GetComponent("ScrollPage"):SetPageCount(#adl);
end

function SetOnLinkGame(callback)
    onLinkGame = callback
end

-- 預載(活動圖片).
function PreDownLoad(list)   
    for k, v in pairs(list) do        
        downImages[v.ImageUrl] = CS.UnityEngine.WWW(v.ImageUrl)
    end
end

-- 全素材是否已都下載.
function IsPreDownLoad()
    local isOk = false    
    for k, v in pairs(downImages) do         
        local isDown = (v.isDone and v.texture ~= nil and v.texture.width ~= 8 )        
        if(isDown == false) then return false end        
    end
    
    return true
end

-- 執行跳轉的連結.
-- typeId : 動作種類, url : 連結資訊.
function ProcAD(typeId, url, params) 
	-- 沒有廣告不做複製
    local adl = G.User.GetAdList()
	if (#adl == 0) then
		return
	end
       
    -- 0:複製,1:直連該網頁,2:一鍵入廳,3:甚麼都不做,4:前往充值,5:评分(IOS),7:開啟IOS儲存網頁
    if (typeId == 0) then
        CS.Utility.CopyText(url)
        CS.UIBubblePrompt.Show("复制成功", groupName);
    elseif (typeId == 1) then
        CS.UnityEngine.Application.OpenURL(url)
    elseif (typeId == 2) then
        onLinkGame(tonumber(url))
    elseif (typeId == 3) then
        --甚麼多不做
    elseif (typeId == 4) then
        --Go Recharge
        onOpenRechargeUI();

    elseif (typeId == 5) then
        if url ~= nil and url ~= '' then
            CS.UnityEngine.Application.OpenURL(url)
        end
    elseif (typeId == 6) then
        CS.UILoadingData.Show("正在请求资料");
        G.Service.Agent.GetAgentData(function(content)
            CS.UILoadingData.Hide();
            CS.Utility.CopyText(content.AgentDetailData.OfficeUser1)
            CS.UIBubblePrompt.Show("复制成功", groupName)
            CS.UnityEngine.Application.OpenURL("weixin://")
        end)
    elseif (typeId == 7) then
        if url ~= nil and url ~= '' then
            PlayCellPhoneAni()
        end
    elseif(typeId == 101) then
        OpenMail("Mail")        
    elseif(typeId == 102) then
        onOpenMail("Post")       
    elseif(typeId == 151) then
        --前往活動分頁.
        onOpenMail(params)      
    elseif(typeId == 201) then
        onOpenBank()    
    elseif(typeId == 351) then
        onOpenExchange()
    elseif(typeId == 401) then
        onOpenUserInfo()
    elseif(typeId == 501) then
        onOpenMsgToGM()
    elseif(typeId == 7001) then
        onOpenAgent()
    elseif(typeId == 7002) then
        onOpenProxy()
    elseif(typeId == 9001) then
        onOpenLive()
    elseif(typeId == 9901) then
        onOpenNotice()
    elseif(typeId == 9902) then
        CheckShowBingdingGift(true)
    end
end

--region 彈窗

-- 取得活動彈窗資訊並顯示.
function ShowActivity()    
    -- 須將活動內容，依照Sort排序.
    local list = G.Service.Activity.GetActivityPopList()    
    if(list == nil) then
		CheckShowMail()
		return
	end
    
    table.sort(list,function(a,b) return a.Sort<b.Sort end )          
    SetOpenActivity(list, 1)    
end

-- 設定開啟活動UI，當活動彈跳開完後，開Mail.
-- list: 活動的陣列資料.
-- index : 要使用的活動編號.
function SetOpenActivity(list, index)     
    local openparam = {}
    openparam.WindowData = {}        
    
    if(index > #list) then 
        CheckShowMail()        
    else
	
	local activity = list[index]
    if(activity == nil) then return end
	
        -- 之前預載的圖物件取出.
        local url = list[index].ImageUrl
		
		local dataStr = CS.UnityEngine.PlayerPrefs.GetString(CS.Utility.GetMD5Code(url))
		if (dataStr == nil or dataStr == "") then
			SetOpenActivity(list,index+1)
			return
		end
		
        local www = downImages[url] -- 預載的圖片.    

        openparam = CS.WindowNodeInitParam("UI_Activity", CS.AppDefine.HallNumber)        
        local data = {}
        data.Index = index
        data.List = list
        data.WWW = www
        openparam.WindowData = data
        openparam.WindowCloseCallBack = (function()                        
			SetOpenActivity(list,index+1)
        end)     
        
        CS.WindowManager.Instance:OpenWindow(openparam)        
    end    
end 

function CheckShowMail()
    local userdata =  G.User.GetCurrentUser().UserData 
    -- 判断是否弹出公告信息
    if userdata.AnnMsgShow ~= 1 then
        CheckMailEnd()
        return
    end
    
    onOpenMail("Post", CheckMailEnd)     
end

function CheckMailEnd()
	if G.User.IsCurrentUserGuest() == true then
		CheckShowBingdingGift(false)
	else
		CheckShowHDRechageBonus()
	end
end

function CheckShowBingdingGift(showBinding)
    if G.User.IsCurrentUserGuest() == true then
		if(G.User.GiftMoney == 0)then
			-- 按鈕
			if showBinding == true then
				local openparam = CS.WindowNodeInitParam("UIUserInfo", CS.AppDefine.HallNumber)
				openparam.WindowData = 1;
				openparam.WindowCloseCallBack = (function()
					CheckShowHDRechageBonus()
				end)
				CS.WindowManager.Instance:OpenWindow(openparam)	
			-- 登入遊戲
			else
				CheckShowHDRechageBonus()
			end
			return
		end
	
        local openparam = CS.WindowNodeInitParam("UIBindingGift", CS.AppDefine.HallNumber)
        openparam.WindowCloseCallBack = CheckShowHDRechageBonus
        CS.WindowManager.Instance:OpenWindow(openparam)
    else
        CheckShowHDRechageBonus()
    end
end

function CheckShowHDRechageBonus()
    local user = G.User.GetCurrentUser()
    if (user.FlowInfo.Status == 1 and user.FlowInfo.UnionPlatform == 1 and  user.FlowInfo.BonusRate > 0) then
		local openparam = CS.WindowNodeInitParam("UIExchangeRebate", CS.AppDefine.HallNumber)
		CS.WindowManager.Instance:OpenWindow(openparam)
	end
end

--endregion