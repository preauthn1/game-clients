local btnClose = this.transform:Find("UIBody/ButtonClose"):GetComponent("Button")
-- local btnChoose = this.transform:Find("UIBody/ButtonChoose"):GetComponent("Button")
-- local btnDelete = this.transform:Find("UIBody/ButtonDelete"):GetComponent("Button")
local imgTitle = this.transform:Find("UIBody/Background/Title"):GetComponent("Text")

local recTran_Grid = this.transform:Find("UIBody/SubList/Grid"):GetComponent("RectTransform")

local tglMail = this.transform:Find("UIBody/SubList/Grid/ButtonMail"):GetComponent("Toggle")
local tglActivity = this.transform:Find("UIBody/SubList/Grid/ButtonActivity"):GetComponent("Toggle")
local tglPost = this.transform:Find("UIBody/SubList/Grid/ButtonPost"):GetComponent("Toggle")

local imgActivityTag = this.transform:Find("UIBody/SubList/Grid/ButtonActivity/Tag"):GetComponent("Image")

local imgMailState1 = this.transform:Find("UIBody/SubList/Grid/ButtonMail/ImageState1"):GetComponent("Image")
local imgMailState2 = this.transform:Find("UIBody/SubList/Grid/ButtonMail/ImageState2"):GetComponent("Image")

local rectMailDetail = this.transform:Find("UIBody/SubContent/DetailMail"):GetComponent("RectTransform")
local scroll_Mail = this.transform:Find("UIBody/SubContent/DetailMail"):GetComponent("ScrollRect")
local rectMailGrid = this.transform:Find("UIBody/SubContent/DetailMail/Grid"):GetComponent("RectTransform")
local prefabMail = this.transform:Find("UIBody/SubContent/DetailMail/Grid/Button").gameObject
local txtMailNote = this.transform:Find("UIBody/SubContent/DetailMail/TextNote"):GetComponent("Text")
local imgMail = this.transform:Find("UIBody/SubList/Grid/ButtonMail/MailCount"):GetComponent("Image")
local txtMailCount = this.transform:Find("UIBody/SubList/Grid/ButtonMail/MailCount/Count"):GetComponent("Text")

local scroll_Activity = this.transform:Find("UIBody/SubContent/Activity"):GetComponent("ScrollRect")
local img_Activity = this.transform:Find("UIBody/SubContent/Activity/content/ContImg"):GetComponent("Image")
local txt_Activity = this.transform:Find("UIBody/SubContent/Activity/content/ContTxt"):GetComponent("Text")

-- 右邊分頁按鈕.
local subBtn = {}

--[[
 	活動列舉說明.
	Tag : 0 = "無", 1 = "熱門", 2 = "推薦", 3 = "最新".

]]

-- 標籤的Sprite Table.
local tagSprite = {
	[0] = "MailTag_1",
	[1] = "MailTag_2",
	[2] = "MailTag_3",
	[3] = "MailTag_4",
}

--- 以上内容为工具脚本自动生成，请不要在这之上做任何修改---

local G = require "Global";
local groupName = "UIMail";
local userdata = G.User.GetCurrentUser().UserData
local pool = {}

--將載入過的活動內文(貼圖)預存起來
local sprites = {}

local yield_return = G.Util.async_to_sync(function(to_to_yield, cb)
    this:YieldAndCallback(to_to_yield, cb)
end)

-- 收到信件的資料.
local MailRetList = {}

-- 初始化函数，实例化之后调用一次
function Start()
    btnClose:AddClickListener(function() EscapeWindow() end)	   	
	-- btnDelete:AddClickListener(function()  end)
	-- btnChoose:AddClickListener(function() 
	-- 	for i=1, #pool do
	-- 		pool[i].imgSelect.gameObject:SetActive(true) 
	-- 	end
	-- end)		
end

-- 脚本删除时调用，释放变量，释放资源
function OnDestroy()
	sprites = nil

    -- 回收当前页面注册的消息
    G.NetQ.RemoveMsgHookByGroup(groupName)

    -- 清空当前界面的浮动提示消息
    CS.UIBubblePrompt.ClearPrompt(groupName)
end

-- 界面被打开时接收界面参数
function RefreshWindowData(windowData)	
	
	init()
	-- 分頁Key無資料或找不到對應分頁時，預設為第一頁.
	windowData = windowData or subBtn[windowData] or "Mail"	
		
	SetSubPage(G.Service.Activity.GetActivityList() )
		
	ChangeSubList(windowData)
	
	-- 暫時寫法
	if windowData == 3 then
		local pos = recTran_Grid.localPosition
		pos.y = 1000
		recTran_Grid.localPosition = pos
	end
	
	mailList = G.Service.Mail.GetMailList()
	
	RefreshMailCount()	
	ShowMail()			
end

-- 初始化按鈕和物件.
function init()
	-- 郵件分頁按鈕設定.
	tglMail.onValueChanged:AddListener
	(
		function(isOn)				
			if(isOn) then 				
				imgTitle.text = tglMail.transform:Find("Text"):GetComponent("Text").text
			 end
		end
	)
	-- 公告按鈕設置.
	tglPost.onValueChanged:AddListener
	(
		function(isOn)				
			if(isOn) then 
				scroll_Activity.verticalNormalizedPosition = 1			
				img_Activity.gameObject:SetActive(false)
				txt_Activity.gameObject:SetActive(true)					
				imgTitle.text = tglPost.transform:Find("Text"):GetComponent("Text").text	
				txt_Activity.text = userdata.AnnMsg					
			 end
		end
	)

	-- 按鈕分頁KEY，這邊預設使用物件名稱.
	subBtn["Mail"] = tglMail
	subBtn["Post"] = tglPost

	-- 先將Content全關閉.
	scroll_Mail.gameObject:SetActive(false)
	scroll_Activity.gameObject:SetActive(false)	
end

-- 根據活動陣列，設定要顯示的按鈕名稱和內容.
function SetSubPage(list)
	
	if(list == nil) then return end

	table.sort(list,function(a,b) return a.Sort<b.Sort end )       

	-- 活動分頁按鈕建構和設定.
	tglActivity.gameObject:SetActive(false)
	for k, v in pairs(list) do				
		local clone = CS.UnityEngine.GameObject.Instantiate(tglActivity)	
		clone.transform:SetParent(recTran_Grid)
		clone.transform.localPosition = CS.UnityEngine.Vector3.zero
		clone.transform.localScale = CS.UnityEngine.Vector3.one		
		clone.gameObject:SetActive(true)
		clone.transform:Find("Text"):GetComponent("Text").text = v.Title
		local imgTag = clone.transform:Find("Tag"):GetComponent("Image")
		-- 重設Sprite
		if(v.Tags > 0) then imgTag:ResetSpriteByName(CS.AppDefine.HallNumber, tagSprite[v.Tags]) end
		imgTag.gameObject:SetActive(v.Tags > 0)
		clone.onValueChanged:AddListener
		(
			function(isOn)				
				if(isOn) then 		
					scroll_Activity.verticalNormalizedPosition = 1			
					imgTitle.text = clone.transform:Find("Text"):GetComponent("Text").text
					img_Activity.gameObject:SetActive(v.DisplayMode == 0)
					txt_Activity.gameObject:SetActive(v.DisplayMode == 1)	
                    -- 設置內文                                    
                    if(v.DisplayMode == 0) then DownImage(img_Activity, v.ImageUrl) end
					if(v.DisplayMode == 1) then txt_Activity.text = v.Content end															
				 end
			end
		)		
		subBtn[v.Title] = clone
	end	
end 

-- 取得下載圖片素材(從Playerfabs)，並重設大小.
function DownImage(image, url)	
	local key = CS.Utility.GetMD5Code(url)
	if sprites[key] == nil then
		local dataStr = CS.UnityEngine.PlayerPrefs.GetString(key)
		if (dataStr == nil or dataStr == "") then
			print("!!!!!!!!!!!!!!!!!!!!!! pic error, url = " .. url)
		else
			local byteData = CS.System.Convert.FromBase64String(dataStr)
			local tex = CS.UnityEngine.Texture2D(512,512,CS.UnityEngine.TextureFormat.ETC2_RGBA8, false)
			tex:LoadImage(byteData)
			local rect = { x = 1, y = 1, width = tex.width, height = tex.height }                
			sprites[key] = CS.UnityEngine.Sprite.Create(tex, CS.UnityEngine.Rect(0, 0, tex.width, tex.height), CS.UnityEngine.Vector2(0, 0))
		end
	end

	if (sprites[key] == nil) then
		image.gameObject:SetActive(false)
	else
		image.sprite = sprites[key]
		image.gameObject:SetActive(true)
		ResetImage(image)
	end
end

-- 重製大小，以寬為準.
-- image : Image物件.
function ResetImage(image)
	local trans = image.gameObject.transform	
	local scale = trans.rect.width / image.sprite.texture.width
	image.gameObject.transform.sizeDelta = CS.UnityEngine.Vector2(0, image.sprite.texture.height * scale)	
end

function EscapeWindow()
    CS.WindowManager.Instance:CloseWindow(groupName, false);
end

function RefreshMailCount()	
	local mailCount = 0
	for i=1, #mailList do
		if(mailList[i].IsRead == false)then
			mailCount = mailCount +1
		end
	end
	
	txtMailCount.text = tostring(mailCount)
	imgMail.gameObject:SetActive(mailCount > 0)
end

function CreatPrefabMail()
	local clone = CS.UnityEngine.GameObject.Instantiate(prefabMail)
	if(clone == nil)then return nil end
	clone.transform:SetParent(prefabMail.transform.parent)
	clone.transform.localPosition = CS.UnityEngine.Vector3.zero
	clone.transform.localScale = CS.UnityEngine.Vector3.one
	
	local index = #pool +1
	pool[index] = {}
	pool[index].root = clone.transform:GetComponent("RectTransform")
	pool[index].btn = clone.transform:GetComponent("Button")
	pool[index].state1 = clone.transform:Find("ImageState1"):GetComponent("Image")
	pool[index].state2 = clone.transform:Find("ImageState2"):GetComponent("Image")
	pool[index].title = clone.transform:Find("TextTitle"):GetComponent("Text")
	pool[index].snedtime = clone.transform:Find("TextTime"):GetComponent("Text")
	pool[index].line = clone.transform:Find("ImageLine"):GetComponent("RectTransform")
	pool[index].txtContent = clone.transform:Find("Content/TextContent"):GetComponent("Text")
	pool[index].txtContent.gameObject:SetActive(false)
	pool[index].txtCode = clone.transform:Find("Content/TextCode"):GetComponent("Text")
	pool[index].txtCode.gameObject:SetActive(false)
	pool[index].txtLink = clone.transform:Find("Content/TextLink"):GetComponent("Text")
	pool[index].txtLink.gameObject:SetActive(false)
	pool[index].rootContent = clone.transform:Find("Content"):GetComponent("RectTransform")
	pool[index].btnSelect =  clone.transform:Find("Button"):GetComponent("Button")
	pool[index].imgSelect =  clone.transform:Find("Button/ImageSelect"):GetComponent("Image")
	pool[index].baseSizeDelta = pool[index].root.sizeDelta
	pool[index].content = {}
end

-- dataType 0:一般文字 1:code 2:超连结
function NewContentData(item, dataType, text, url)
	if (#text == 0 or text == " ") and (url == nil or #url == 0) then
		return item
	end
	
	local data = {}
	data.type = dataType
	data.text = text	
	data.url = url
	table.insert(item, data)
	return item
end

function DecodeContent(content)
	--content = '恭喜您获得了免费看三天成人视频的兑换码 : {{DiACm7e01PS5}} 立即前往 <a href="http://example.invalid">好玩的游戏</a>'
	local item = {}
	local arr1 = G.Tool.StringHelper.Split(content, "}}")
	for _, data1 in pairs(arr1) do	
		arr2 = G.Tool.StringHelper.Split(data1, "</a>")
		for _, data2 in pairs(arr2) do
			-- code
			if string.find(data2, '{{', 1, true) ~= nil then
				local arr = G.Tool.StringHelper.Split(data2, '{{')
				if #arr > 1 then
					item = NewContentData(item, 0, arr[1])
					item = NewContentData(item, 1, arr[2])
				end
			-- url
			elseif string.find(data2, '">', 1, true) ~= nil then				
				-- <a href=" 前面的字
				startindex = string.find(data2, '<a href="', 1, true)
				if startindex > 1 then
					local tmpstr1 = G.Tool.StringHelper.SubString(data2, 1, startindex - 1)
					item = NewContentData(item, 0, tmpstr1)
				end
				-- 拆URL
				local tmpstr = G.Tool.StringHelper.SubString(data2, startindex + 9, G.Tool.StringHelper.length(data2) - startindex)
				local Len = string.find(tmpstr, '">', 1, true) - 1
				local url = G.Tool.StringHelper.SubString(tmpstr, 1, Len)
				-- url字
				local data = nil
				local arr = G.Tool.StringHelper.Split(data2, '">')
				if #arr > 1 then
					data = arr[2]
				end
				item = NewContentData(item, 2, data, url)
			else
				item = NewContentData(item, 0, data2)
			end
		end
	end
	
	return item
end

function ShowContent(index,content)
	
	local CreatClone = function(prefab)
		local clone = CS.UnityEngine.GameObject.Instantiate(prefab.gameObject)
		if(clone == nil)then return nil end
		clone.transform:SetParent(prefab.transform.parent)
		clone.transform.localPosition = CS.UnityEngine.Vector3.zero
		clone.transform.localScale = CS.UnityEngine.Vector3.one
		clone.gameObject:SetActive(true)
		
		local count = #pool[index].content +1
		pool[index].content[count] = clone
		
		return clone
	end
	
	if pool[index].tween ~= nil then return end

	pool[index].tween = true
	local show = pool[index].show
	if show == false then		
		for k, v in pairs(pool[index].content)do
			CS.UnityEngine.GameObject.Destroy(v.gameObject)
			table.remove( pool[index].content, k )			
		end
	
		pool[index].line.gameObject:SetActive(true)
		pool[index].rootContent.gameObject:SetActive(true)
		pool[index].rootContent.transform.localScale = CS.UnityEngine.Vector3(1,0,1)
		pool[index].txtContent.text = content
		pool[index].show = true
		
		local item = DecodeContent(content)
		for _, data in pairs(item) do	
			--print("111", data.type, data.text, data.url)
			-- 0:一般文字
			if(data.type == 0)then
				local clone = CreatClone(pool[index].txtContent)
				local txt = clone.transform:GetComponent("Text")
				txt.text = data.text
			-- 1:code
			elseif(data.type == 1)then
				local clone = CreatClone(pool[index].txtCode)
				local txt = clone.transform:GetComponent("Text")
				txt.text = data.text
				
				local btn = clone.transform:Find("Button"):GetComponent("Button")
				btn:AddClickListener(function()					
					CS.Utility.CopyText(data.text)
					CS.UIBubblePrompt.Show("复制成功", groupName)
				end)
			-- 2:超连结
			elseif(data.type == 2)then
				local clone = CreatClone(pool[index].txtLink)
				local txt = clone.transform:GetComponent("Text")
				txt.text = data.text
			
				local btn = clone.transform:Find("Button"):GetComponent("Button")
				btn:AddClickListener(function() 
					CS.UnityEngine.Application.OpenURL(data.url)
				end)
								
				local line = clone.transform:Find("TextLine"):GetComponent("Text")
				line.text = "_"
				if(line.preferredWidth > 0)then
					local lineCount = txt.preferredWidth / line.preferredWidth
					for i=1, lineCount do
						line.text = line.text .. "_"
					end
				end
			end
		end
	end
	
	
	local timer = 0.1
	local sequence = CS.DG.Tweening.DOTween.Sequence()
	sequence:AppendInterval(0.15)
	sequence:AppendCallback(function()
		local targetScale = CS.UnityEngine.Vector3(1,0,1)
		-- 此则内容高度
		local targetSizeDelta = pool[index].baseSizeDelta.y
		
		--要拖曳到的位置
		local targetAnchored = rectMailGrid.anchoredPosition.y
		if show == false then
			targetScale = CS.UnityEngine.Vector3.one
			targetSizeDelta = targetSizeDelta + pool[index].line.sizeDelta.y
			targetSizeDelta = targetSizeDelta + pool[index].rootContent.sizeDelta.y
			targetSizeDelta = targetSizeDelta + 20 --预留空间
			
			local space = pool[index].root.anchoredPosition.y
			space = space + pool[index].baseSizeDelta.y * 0.5
			space = space - targetSizeDelta
			space = space + rectMailDetail.sizeDelta.y
			space = space + rectMailGrid.anchoredPosition.y
			-- 内文过长置顶
			if targetSizeDelta > rectMailDetail.sizeDelta.y then
				targetAnchored = pool[index].root.anchoredPosition.y + rectMailDetail.sizeDelta.y
				targetAnchored = rectMailDetail.sizeDelta.y - targetAnchored
				targetAnchored = targetAnchored - pool[index].baseSizeDelta.y * 0.5
			-- 置底
			elseif space < 0 then
				targetAnchored = targetAnchored + CS.UnityEngine.Mathf.Abs(space)
			end			
		end

		targetSizeDelta = CS.UnityEngine.Vector2(pool[index].baseSizeDelta.x,targetSizeDelta)
	
		local sequenceScale = CS.DG.Tweening.DOTween.Sequence()
		sequenceScale:Append(pool[index].rootContent.transform:DOScale(targetScale, timer))
		sequenceScale:Join(pool[index].root:DOSizeDelta(targetSizeDelta, timer))		
		sequenceScale:Append(rectMailGrid:DOAnchorPosY(targetAnchored, 0))
		sequenceScale:AppendCallback(function()
			pool[index].tween = nil			
			if show == true then				
				HideContent(index)
			end
		end)
	end)
end

function HideContent(index)
	pool[index].line.gameObject:SetActive(false)
	pool[index].rootContent.gameObject:SetActive(false)
	pool[index].root.sizeDelta = pool[index].baseSizeDelta
	pool[index].show = false
	
	for k, v in pairs(pool[index].content)do
		CS.UnityEngine.GameObject.Destroy(v.gameObject)
		table.remove( pool[index].content, k )
	end
end

-- 切換分頁.
-- subKey : 分頁的key值.
function ChangeSubList(subKey)	
	-- subKey除了是數字外，也可以是string.
	for k, v in pairs(subBtn) do			
		tgl = v.gameObject:GetComponent("Toggle")
		tgl.isOn = k == subKey				
	end	
end

function ShowMail()
	--imgTitle.sprite = imgMailTitle.sprite
	mailList = G.Service.Mail.GetMailList()
	
	txtMailNote.gameObject:SetActive(#mailList == 0)
	
	for i=1, #mailList do
		if i > #pool then CreatPrefabMail() end
		
		local index = i
		pool[index].root.gameObject:SetActive(true)
		pool[index].btn.onClick:RemoveAllListeners()
		pool[index].btn:AddClickListener(function() SendMailDetail(index) end)
		pool[index].btnSelect.onClick:RemoveAllListeners()
		pool[index].btnSelect:AddClickListener(function() 
			pool[index].imgSelect.gameObject:SetActive(pool[index].imgSelect.gameObject.activeSelf == false) 
		end)
		pool[index].state1.sprite = imgMailState1.sprite
		pool[index].state2.sprite = imgMailState2.sprite
		pool[index].state1.gameObject:SetActive(mailList[index].IsRead == false)
		pool[index].state2.gameObject:SetActive(mailList[index].IsRead == true)
		pool[index].imgSelect.gameObject:SetActive(false) 
		pool[index].title.text = mailList[index].Title
		pool[index].snedtime.text = mailList[index].SendTime
		HideContent(index)
	end
	
	for i=#mailList +1, #pool do
		pool[i].root.gameObject:SetActive(false)
	end
end

function SendMailDetail(index)	
	
	local param = { }
	param.ID = mailList[index].ID

	-- 先會檢查本地端是否有保留信記內容，有的話直接更新.
	if(MailRetList[param.ID] ~= nil) then		
		UpdateContent(MailRetList[param.ID])				
		RefreshMailCount()
	else		
		G.NetQ.SendMsg(G.Proto.BClass.Hall, G.Proto.Hall.GetMailDetailID, param)
	end

end
-- 更新被點擊的信件大綱，展開信件內容.
-- mail : 信件內容.
function UpdateContent(mail)
	for i=1,#mailList do
		if mailList[i].ID == mail.ID then
			mailList[i].Title = mail.Title
			mailList[i].IsRead = mail.IsRead
			mailList[i].SendTime = mail.SendTime
			mailList[i].Content = mail.Content
			
			pool[i].state1.gameObject:SetActive(mailList[i].IsRead == false)
			pool[i].state2.gameObject:SetActive(mailList[i].IsRead == true)
			
			ShowContent(i,mail.Content)
		end
	end
end

-- 查看邮件详情返回
G.NetQ.RegMsgHook(G.Proto.BClass.Hall, G.Proto.Hall.GetMailDetailRetID, function(receiveMsg)
	
	-- 信件內容記錄在本地端一份.
	if(MailRetList[receiveMsg.ID] == nil) then
		MailRetList[receiveMsg.ID] = receiveMsg	
	end

	UpdateContent(receiveMsg)	
	
	RefreshMailCount()	
	
end , groupName);

function Update()
	CS.Application.targetFrameRate = 5
end
