local btnClose = this.transform:Find("UIBody/ButtonClose"):GetComponent("Button")
local btnChoose = this.transform:Find("UIBody/ButtonChoose"):GetComponent("Button")
local btnDelete = this.transform:Find("UIBody/ButtonDelete"):GetComponent("Button")

local btnMail = this.transform:Find("UIBody/SubList/Grid/ButtonMail"):GetComponent("Button")
local imgMailSelect = this.transform:Find("UIBody/SubList/Grid/ButtonMail/ImageSelect"):GetComponent("Image")
local imgMailState1 = this.transform:Find("UIBody/SubList/Grid/ButtonMail/ImageState1"):GetComponent("Image")
local imgMailState2 = this.transform:Find("UIBody/SubList/Grid/ButtonMail/ImageState2"):GetComponent("Image")
local rectMailDetail = this.transform:Find("UIBody/DetailMail"):GetComponent("RectTransform")
local rectMailGrid = this.transform:Find("UIBody/DetailMail/Grid"):GetComponent("RectTransform")
local prefabMail = this.transform:Find("UIBody/DetailMail/Grid/Button").gameObject
local txtMailNote = this.transform:Find("UIBody/DetailMail/TextNote"):GetComponent("Text")

local btnPost = this.transform:Find("UIBody/SubList/Grid/ButtonHelp"):GetComponent("Button")
local imgPostSelect = this.transform:Find("UIBody/SubList/Grid/ButtonHelp/ImageSelect"):GetComponent("Image")
local rectPostDetail = this.transform:Find("UIBody/DetailHelp"):GetComponent("RectTransform")
local txtPostContent = this.transform:Find("UIBody/DetailHelp/Content"):GetComponent("Text")

local imgMail = this.transform:Find("UIBody/SubList/Grid/ButtonMail/MailIcon"):GetComponent("Image")
local txtMailCount = this.transform:Find("UIBody/SubList/Grid/ButtonMail/MailIcon/Count"):GetComponent("Text")

local img_TitleMail = this.transform:Find("UIBody/TitleMail"):GetComponent("RectTransform")
local img_TitleNotice = this.transform:Find("UIBody/TitleNotice"):GetComponent("RectTransform")

--- 以上内容为工具脚本自动生成，请不要在这之上做任何修改---

local G = require "Global";
local groupName = "UIMailAndHelp";

local userdata = G.User.GetCurrentUser().UserData
local sequenceScale
local pool = {}

-- 初始化函数，实例化之后调用一次
function Start()

    btnClose:AddClickListener(function() EscapeWindow() end)
	btnMail:AddClickListener(function() ChangeSubList(1) end)
	btnPost:AddClickListener(function() ChangeSubList(2) end)
	
	
	btnDelete:AddClickListener(function()  end)
	btnChoose:AddClickListener(function() 
		for i=1, #pool do
			pool[i].imgSelect.gameObject:SetActive(true) 
		end
	end)
end
 
-- 脚本删除时调用，释放变量，释放资源
function OnDestroy()
    -- 回收当前页面注册的消息
    G.NetQ.RemoveMsgHookByGroup(groupName)

    -- 清空当前界面的浮动提示消息
    CS.UIBubblePrompt.ClearPrompt(groupName)
end

-- 界面被打开时接收界面参数
function RefreshWindowData(windowData)
	windowData = windowData or 1
	ChangeSubList(windowData)
	
	mailList = G.Service.Mail.GetMailList()
	
	RefreshMailCount()	
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
	
	local show = pool[index].show
	if show == false then		
		for k, v in pairs(pool[index].content)do
			CS.UnityEngine.GameObject.Destroy(v.gameObject)
			pool[index].content[k] = nil
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
	sequence:AppendInterval(0.1)
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
				
		if sequenceScale ~= nil then
			sequenceScale:Kill()
		end
		sequenceScale = CS.DG.Tweening.DOTween.Sequence()
		sequenceScale:Append(pool[index].rootContent.transform:DOScale(targetScale, timer))
		sequenceScale:Join(pool[index].root:DOSizeDelta(targetSizeDelta, timer))		
		sequenceScale:Append(rectMailGrid:DOAnchorPosY(targetAnchored, 0))
		sequenceScale:AppendCallback(function()
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
		pool[index].content[k] = nil
	end
end

function ChangeSubList(index)
	imgMailSelect.gameObject:SetActive(index == 1)
	imgPostSelect.gameObject:SetActive(index == 2)
	rectMailDetail.gameObject:SetActive(index == 1)
	rectPostDetail.gameObject:SetActive(index == 2)
	
	if index == 1 then
		img_TitleMail.gameObject:SetActive(true)
		img_TitleNotice.gameObject:SetActive(false)
		ShowMail()
	else
		img_TitleMail.gameObject:SetActive(false)
		img_TitleNotice.gameObject:SetActive(true)
		ShowPost()
	end
end

function ShowMail()
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

function ShowPost()
	G.Service.FAQ.GetFAQ(function(content)
        txtPostContent.text = content
    end)
end

function SendMailDetail(index)
	--再次查询是因为取得信件列表没有信件内容
	local param = { }
	param.ID = mailList[index].ID
	G.NetQ.SendMsg(G.Proto.BClass.Hall, G.Proto.Hall.GetMailDetailID, param)
end

-- region 查看邮件详情返回
G.NetQ.RegMsgHook(G.Proto.BClass.Hall, G.Proto.Hall.GetMailDetailRetID, function(receiveMsg)
	
	for i=1,#mailList do
		if mailList[i].ID == receiveMsg.ID then
			mailList[i].Title = receiveMsg.Title
			mailList[i].IsRead = receiveMsg.IsRead
			mailList[i].SendTime = receiveMsg.SendTime
			mailList[i].Content = receiveMsg.Content
			
			pool[i].state1.gameObject:SetActive(mailList[i].IsRead == false)
			pool[i].state2.gameObject:SetActive(mailList[i].IsRead == true)
			
			ShowContent(i,receiveMsg.Content)
		end
	end
	
	RefreshMailCount()	
	
end , groupName);
-- endregion
