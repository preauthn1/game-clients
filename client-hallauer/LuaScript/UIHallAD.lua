require("Module")
mmodule(...)
local G = require "Global"
local groupName = "UIHall";

local UIHall

local RecTran_CarouselRoot
local RootAdImg
local AdScrr_GameScrollView
local AdScrr_GameListContent
local RecTran_Carousel
local Btn_AdScrr
local AdscrollPage

local AdPageCount = 0
local AdCurrentIndex = 0
local RefreshAdTime = 6
local AdStartIndex = 0
local AdEndIndex = 0
local AdLeftSize = 0
local AdRightSize = 0
--翻页动作：0下一页 1前一页
local AdNextPageBehavior = 0

local adtype = -1;
local CurrentUrl = "";

local Ad_URL = {} -- 圖片位置

local yield_return = G.Util.async_to_sync(function(to_to_yield, cb)
    UIHall:YieldAndCallback(to_to_yield, cb)
end)


function Init(hall, root, ClickAD)
	UIHall = hall 
	RecTran_CarouselRoot = root
	
	RootAdImg = RecTran_CarouselRoot:Find("ImageAD"):GetComponent("RectTransform")
	AdScrr_GameScrollView = RecTran_CarouselRoot.transform:Find("_offset/_AddScrollView"):GetComponent("ScrollRect")
	AdScrr_GameListContent = RecTran_CarouselRoot.transform:Find("_offset/_AddScrollView/GameListContent"):GetComponent("RectTransform")
	RecTran_Carousel = RecTran_CarouselRoot.transform:Find("_offset"):GetComponent("RectTransform")
	
    onAdPageChanged(1, 0)
    AdscrollPage = AdScrr_GameScrollView:GetComponent("ScrollPage")
    AdscrollPage.OnPageChanged = AdscrollPage.OnPageChanged + onAdPageChanged
	
	Btn_AdScrr = RecTran_CarouselRoot.transform:Find("_offset"):GetComponent("Button")
    Btn_AdScrr:AddClickListener(function()
		ClickAD(adtype, CurrentUrl)
    end)	
end

function onAdPageChanged(pageCount, currentIndex)
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

function DoRefreshAD()
	if (AdPageCount <= 1) then
		return;
	end
	local idx = AdCurrentIndex + 1
	if idx >= AdPageCount then
		for i = 0, AdPageCount - 1 do
			AdscrollPage:ToPrePage()
		end
	else
		AdscrollPage:ToNextPage()
	end
end

function RefreshAD()
	UIHall:CancelInvokeRepeat(DoRefreshAD)
	UIHall:InvokeRepeating(DoRefreshAD, 0, RefreshAdTime)
end

function PageSwitch(pageCount, currentIndex)
	-- print("<color=yellow>PageSwitch</color>")

	if ((DoRefreshAD ~= nil)) then
		-- print("<color=yellow>"..tostring(DoRefreshAD==nil).."</color>") 
		UIHall:CancelInvokeRepeat(DoRefreshAD)
		UIHall:InvokeRepeating(DoRefreshAD, 6, RefreshAdTime)
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
				local RecTran_CarouselRoot = this.transform:Find("_offset/pr");
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

function InitPager(pagecount)
	-- print("<color=yellow>InitPager</color>")
	AdStartIndex = (pagecount <= 4) and 2 or 1;

	if (pagecount <= 4) then
		AdEndIndex = pagecount + 1;
	elseif (pagecount == 5) then
		AdEndIndex = 5;
	else
		AdEndIndex = 6;
	end

	for i = AdStartIndex, AdEndIndex do
		local p = RecTran_CarouselRoot.transform:Find("_offset/p" .. tostring(i))
		p.gameObject:SetActive(true);
	end
end

function UpdateAD()
	if RecTran_CarouselRoot == nil then
		return
	end

    local adl = G.User.GetAdList()
    --print("<color=red>ad count:" .. #adl .. "</color>")
    if (AdPageCount <= 1) then
        InitPager(#adl);
        PageSwitch(#adl, 0);
    end
	
    RefreshAD()
	
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

    AdscrollPage:SetPageCount(#adl)	
end

function SetAd(url, Img_Content, index)
	-- 避免重複下載
	if Ad_URL[index] == url then
		return
	end
	
    Img_Content.gameObject:SetActive(false)

    G.Util.coroutine_call(function()	
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

function OnDestroy()
	if AdscrollPage ~= nil then
		AdscrollPage.OnPageChanged = AdscrollPage.OnPageChanged - onAdPageChanged
	end
end