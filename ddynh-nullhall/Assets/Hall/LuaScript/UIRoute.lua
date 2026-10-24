--region 路径
--位置 Scroll View Content
local recTran_Content = this.transform:Find("UIBody/ScrollView/Viewport/Content"):GetComponent("RectTransform")

--复制Prefab 线路 1 
local prefab_Route = this.transform:Find("UIBody/_ButtonRoute").gameObject

--确认 換线
local btn_Ok = this.transform:Find("UIBody/_ButtonOk"):GetComponent("Button")

--按钮 最下方取消
local btn_Cancle = this.transform:Find("UIBody/_ButtonCancle"):GetComponent("Button")

--图文 线路几
local img_FontRoute1 = this.transform:Find("UIBody/FontRoute/_FontRoute1"):GetComponent("Image")
local img_FontRoute2 = this.transform:Find("UIBody/FontRoute/_FontRoute2"):GetComponent("Image")
local img_FontRoute3 = this.transform:Find("UIBody/FontRoute/_FontRoute3"):GetComponent("Image")

--图 ping品直颜色
local img_PingCircleColour1 = this.transform:Find("UIBody/PingCircleColour/_PingCircleColour1"):GetComponent("Image")
local img_PingCircleColour2 = this.transform:Find("UIBody/PingCircleColour/_PingCircleColour2"):GetComponent("Image")
local img_PingCircleColour3 = this.transform:Find("UIBody/PingCircleColour/_PingCircleColour3"):GetComponent("Image")

--图文ping品直
local img_FontPing1 = this.transform:Find("UIBody/FontPing/_FontPing1"):GetComponent("Image")
local img_FontPing2 = this.transform:Find("UIBody/FontPing/_FontPing2"):GetComponent("Image")
local img_FontPing3 = this.transform:Find("UIBody/FontPing/_FontPing3"):GetComponent("Image")

--正在连线中,请稍后...
local txt_TextLoading = this.transform:Find("UIBody/TextLoading"):GetComponent("Text").gameObject

--- 以上内容为工具脚本自动生成，请不要在这之上做任何修改---
--endregion
--region 自定义
local G = require "Global"
local groupName = "UIRoute";
local iNowSelectRoute = 0 --目前打勾勾的线路
local toggleList = {} --所有的toggle
local pingSpeedList = {} --存取数字的地方
local pathDomainList = {} --熱更list
local isOK = false
--endregion

function Start()
    GetUpdateDomain()

    --region 注册按钮事件
    btn_Cancle:AddClickListener(function() EscapeWindow() end)
    btn_Ok:AddClickListener(function() ButtonOk(iNowSelectRoute) end)
    --endregion
end

function GetUpdateDomain()
    pathDomainList = G.Tool.StringHelper.Split(CS.UnityEngine.PlayerPrefs.GetString("UpdateDomain2", ""), ",")
    for i = 1, #pathDomainList, 1 do
        pathDomainList[i] = pathDomainList[i] .. "/UpdateFiles/"
    end

    GetPingData(pathDomainList[1], Success, Error)
end

--获取页面ping speed
function GetPingData(urlPing, onSuccess, onError)
    G.Util.coroutine_call(function()
        local totalTime = 0
        local beforeTime = os.clock()
        local www = CS.UnityEngine.WWW(urlPing)
        GetPing_Yield_Return(0)

        while  (www.isDone == false) do
            local nextTime = os.clock()
            totalTime = (nextTime-beforeTime)
            if(nextTime-beforeTime > 0.75) then
                print(groupName .. ' 連線timeout.. 网址 .. '..urlPing)
                onSuccess(100)
                return
            end
        end
	
        if www.error ~= nil then
            print(groupName..' error .. ' ..totalTime)
            onSuccess(100)
            onError()
            return
        end

        print(groupName .. ' 連線成功 网址 .. '..urlPing)
        onSuccess(totalTime)
        CS.TimeManager.Instance:StopAllCoroutines(urlPing)
    end)()
end

GetPing_Yield_Return = G.Util.async_to_sync
(
function(to_to_yield, cb)
    CS.TimeManager.Instance:YieldAndCallback(to_to_yield, cb)
end
)

--要到速率后
function Success(totalTime)
    print(groupName .. ' --ping : ' .. totalTime)
    local index = #pingSpeedList + 1 --塞值
    pingSpeedList[index] = totalTime

    --要完所有的ping后 开UI
    if #pingSpeedList >= #pathDomainList then
        ShowUI()
    else
        GetPingData(pathDomainList[#pingSpeedList + 1], Success, Error)
    end
end

--失败回传
function Error()
    print(groupName .. ' www GetPingData Error')
end

--region UI事件
--封包收取完后show物件
function ShowUI()
    print(groupName .. ' 有几条线要产生 : ' .. #pingSpeedList)

    if txt_TextLoading.gameObject:Equals(nil) then
        return
    else
        txt_TextLoading.gameObject:SetActive(false)
        CreatPrefabRoute(#pingSpeedList)
        CurrentRouteNumber()
        isOK = true
    end
end

--由小到大
function SortGT(a, b)
    return a < b
end

--产生目前线路编号(Clone)
function CreatPrefabRoute(RouteCount)
    local tbl = pingSpeedList --根据快慢产生的排序
    local tb2 = {} --原本的排序

    for c=1,#tbl,1 do
        table.insert(tb2, tbl[c])
     end

    table.sort(tbl,SortGT)

    for i = 1, RouteCount do
        local clone = CS.UnityEngine.GameObject.Instantiate(prefab_Route)

        if (clone == nil) then
            return nil
        end

        clone.gameObject:SetActive(true)
        clone.transform:SetParent(recTran_Content.transform)
        clone.transform.localPosition = CS.UnityEngine.Vector3.zero
        clone.transform.localScale = CS.UnityEngine.Vector3.one
        
        --region Toggle
        local toggle = clone.transform:Find("_Toggle"):GetComponent(typeof(CS.UnityEngine.UI.Toggle))
        toggle.isOn = false

        local index = #toggleList + 1
        toggleList[index] = {}
        toggleList[index] = toggle

        toggleList[index].onValueChanged:AddListener
        (
        function(isOn)
            if isOn then
                SelectNowRoute(index)
            end
        end
        )
        --endregion
        --region 线路几
        if i == 1 then
            clone.transform:Find("FontRoute"):GetComponent("Image").sprite = img_FontRoute1.sprite
        elseif i== 2 then
            clone.transform:Find("FontRoute"):GetComponent("Image").sprite = img_FontRoute2.sprite
        elseif i == 3 then
            clone.transform:Find("FontRoute"):GetComponent("Image").sprite = img_FontRoute3.sprite
        end
        --endregion
        --region --速率显示
        if tb2[i] >= 100 then
            clone.transform:Find("TextPingSpeed"):GetComponent("Text").text = '('..'逾时'..')'
        elseif tb2[i] <= 0.01 then
            clone.transform:Find("TextPingSpeed"):GetComponent("Text").text = '('..'0.01'..'S'..')'
        else
            clone.transform:Find("TextPingSpeed"):GetComponent("Text").text = '('..string.format("%.2f", tb2[i])..'S'..')'
        end
        --endregion
        --region 比较后 快的显示绿点
        for j = 1, #tbl , 1 do
            if tb2[i] == tbl[j] then
                if j == 1 then
                    --print(groupName ..'线路 : '.. i ..' 最快')
                    clone.transform:Find("PingBgCircle/PingCircleColour"):GetComponent("Image").sprite = img_PingCircleColour1.sprite
                    clone.transform:Find("FontPing"):GetComponent("Image").sprite = img_FontPing1.sprite
                    break
                elseif j == 2 then
                    --print(groupName ..'线路 : '.. i ..' 中等')
                    clone.transform:Find("FontPing"):GetComponent("Image").gameObject:SetActive(false)
                    clone.transform:Find("PingBgCircle/PingCircleColour"):GetComponent("Image").sprite = img_PingCircleColour2.sprite
                    clone.transform:Find("FontPing"):GetComponent("Image").sprite = img_FontPing2.sprite
                    break
                else
                    --print(groupName ..'线路 : '.. i ..' 慢')
                    clone.transform:Find("FontPing"):GetComponent("Image").gameObject:SetActive(false)
                    clone.transform:Find("PingBgCircle/PingCircleColour"):GetComponent("Image").sprite = img_PingCircleColour3.sprite
                    clone.transform:Find("FontPing"):GetComponent("Image").sprite = img_FontPing3.sprite
                    break
                end
            end
        end
        --endregion
    end
end

--显示当前线路
function CurrentRouteNumber()
    for i = 1, #pathDomainList, 1 do
        if G.GameConfig.UpdateDomain == pathDomainList[i] then --目前线路 = 要到的线路
            toggleList[i].isOn = true
            SelectNowRoute(i)
            print(groupName .. ' 目前线路 : ' .. G.GameConfig.UpdateDomain)
            break
        end
    end
end

-- 删除全部线路的Prefab(Clone)
function DeletePrefab()
    print(groupName .. ' DeletePrefab : ' .. recTran_Content.childCount)
    for i = recTran_Content.childCount - 1, 0, -1 do
        local child = recTran_Content:GetChild(i)
        if child ~= nil then
            CS.UnityEngine.GameObject.Destroy(child.gameObject)
        end
    end
end
--endregion

--region 按钮事件
--点及toggle 选择线路
function SelectNowRoute(index)
    --print(groupName .. ' 选择线路' .. index)
    iNowSelectRoute = index
end

--按钮 确认 切换线路
function ButtonOk(index)
    if isOK ~= true then
        return
    end

    G.GameConfig.UpdateDomain = pathDomainList[index]
    print(groupName .. ' 成功切换线路: ' .. index .. ' /线路名称: ' .. G.GameConfig.UpdateDomain)

    CS.AppDefine.UpdateFileUrl = G.GameConfig.UpdateDomain .. G.GameConfig.UpdateFilesPath

    EscapeWindow()
end

--关闭视窗
function EscapeWindow()
    CS.WindowManager.Instance:CloseWindow(groupName, false);
end
--endregion

-- 界面被打开时接收界面参数
function RefreshWindowData(windowData)
    --print(groupName .. ' RefreshWindowData')

    if windowData ~= nil then
        --print(windowData)
    end
end

