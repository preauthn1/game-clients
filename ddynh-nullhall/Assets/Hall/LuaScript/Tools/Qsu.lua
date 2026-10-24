require("Module")
mmodule(...)

local G = require "Global"
local Download = require("Tools/DownloadTxtFile")

local isSimulation = false
local simulationInitRes = 0
local simulationGetIpRes = 1
local simulationGetIpIp = "0.0.0.0"
local simulationGetIpPort = 10000

local isEncode = false
local encodeFileName = "encodeFile.txt"

local useNewEncode = true

-- 版本号
local ver = 1

-- 連接 1超级盾，2传统网络模式
local use = 1

-- app key
local key = "FUK16C18AFF653HY"

local port = 10000
-- 防护目标标识 大廳
local mLobby = "vfDrI6Vl"
-- stage
local mLobbyStage = ""
-- 支付
local mPay = ""
-- 取IP
local mWeb = "BS7aSr13"

-- 檔案位置
local CnFileNameNew ="qsu_NewCn_AE.txt"
local CnFileListDomain = 
{
	"aHR0cHM6Ly9zMy1hcC1zb3V0aGVhc3QtMS5hbWF6b25hd3MuY29tL3RlcnByb2NsaWVudC8=",
	"aHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL1RlcnByb0NsaWVudC9hcmsvbWFzdGVyLw==",
	"aHR0cDovL2RsLnN0YWdlLmFlZ3Brcy54eXovVXBkYXRlRmlsZXMvZmlsZS8=",
}

local StageFileNameNew ="qsu_NewStage_AE.txt"
local StageFileListDomain = 
{
	"aHR0cHM6Ly9zMy1hcC1zb3V0aGVhc3QtMS5hbWF6b25hd3MuY29tL3RlcnByb2NsaWVudC8=",
	"aHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL1RlcnByb0NsaWVudC9hcmsvbWFzdGVyLw==",
	"aHR0cDovL2RsLnN0YWdlLmFlZ3Brcy54eXovVXBkYXRlRmlsZXMvZmlsZS8=",
}

local AnFileNameNew ="qus_NewAn_AE.txt"
local AnFileListDomain = 
{
	"aHR0cHM6Ly9zMy1hcC1zb3V0aGVhc3QtMS5hbWF6b25hd3MuY29tL3RlcnByb2NsaWVudC8=",
	"aHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL1RlcnByb0NsaWVudC9hcmsvbWFzdGVyLw==",
	"aHR0cDovL2RsLnN0YWdlLmFlZ3Brcy54eXovVXBkYXRlRmlsZXMvZmlsZS8=",
}

local QaFileNameNew ="qsu_NewQa_AE.txt"
local QaFileListDomain = 
{
	"aHR0cDovLzYxLjIxOC40NC4yMzE6MTQwLw==",
}

local DevFileNameNew ="qsu_NewDev_AE.txt"
local DevFileListDomain =
{
	"aHR0cDovLzYxLjIxOC40NC4yMzE6MTQwLw==",
}

local ListDomain
local FileName

local tryCount = 3
local accTryCount = 0
local initSuccess = false

function init()
	if CS.UnityEngine.PlayerPrefs.GetInt("qsu_version", 0) == 0 then
		Save(ver, use, key, mLobby, port)
	end
	
	if isSimulation == true then
		Save(ver, use, key, mLobby, port)
	end	
end

function Save(verData, useData, keyData, mLobbyData, portData)
	print("verData", verData)
	print("keyData", keyData)
	print("useData", useData)
	print("mLobbyData", mLobbyData)
	print("portData", portData)

	CS.UnityEngine.PlayerPrefs.SetInt("qsu_version", verData)
	CS.UnityEngine.PlayerPrefs.SetString("qsu_appkey", keyData)
	CS.UnityEngine.PlayerPrefs.SetInt("qsu_type", useData)
	CS.UnityEngine.PlayerPrefs.SetString("qsu_mark_lobby", mLobbyData)
	CS.UnityEngine.PlayerPrefs.SetInt("qsu_port", portData)

	CS.UnityEngine.PlayerPrefs.Save()
end

-- 是否支援超级盾
function IsQsuSDK()
	if isSimulation == true then
		return true
	end

	if G.GameConfig.GetServerOption() == 0 or
		G.GameConfig.GetServerOption() == 1 then
		return false
	end		
	
	-- 編輯器下讀設定設定
    if CS.UnityEngine.Application.platform == CS.UnityEngine.RuntimePlatform.WindowsEditor or 
		CS.UnityEngine.Application.platform == CS.UnityEngine.RuntimePlatform.OSXEditor	 then
		return false
	else
		if CS.QsuSDK.s_IsQsuSDK == true then
			return false
		else
			return false
		end
	end
end

function GetVer()
	return CS.UnityEngine.PlayerPrefs.GetInt("qsu_version")
end

function GetType()
	return CS.UnityEngine.PlayerPrefs.GetInt("qsu_type")
end

-- 目前連線方式
local nowUse
function GetNowUse()
	return nowUse
end
function SetNowUse(use)
	nowUse = use
end

-- 下載的設定連線方式
local downloadUse
function GetDownloadUse()
	return downloadUse
end

function GetKey()
	return CS.UnityEngine.PlayerPrefs.GetString("qsu_appkey")
end

function GetMLobby()
	-- 美服和國服
	if G.GameConfig.GetServerOption() == 3 or 
		G.GameConfig.GetServerOption() == 4 then
		return CS.UnityEngine.PlayerPrefs.GetString("qsu_mark_lobby")
	-- stage
	else
		return mLobbyStage	
	end
end

function GetPort()
	return CS.UnityEngine.PlayerPrefs.GetInt("qsu_port")
end

function GetPay()
	return mPay
end

function GetWeb()
	return mWeb
end

function ShowLog(str)
	print(str)
end

function RandomList(t)
    if type(t)~="table" then
        return
    end
	
    local temp = {}
	for _, data in pairs(t) do
		table.insert(temp, data)
	end
	t = temp
	
    local tab={}
    local index=1
    while #t~=0 do
        local n=math.random(0,#t)
        if t[n]~=nil then
            tab[index]=t[n]
            table.remove(t,n)
            index=index+1
        end
    end
    return tab
end

local downlodIndex = 1
-- ErrorCallback
-- 0 key不同,需強更
-- 1 全部檔案下載失敗
-- 2 Aes Decode失敗
-- 3 下載後Init失敗
-- 4 decodeBase64失敗
-- 5 無新資料
function DownloadQsuFile(SuccessCallback, ErrorCallback)
	m_onSuccessCallback = SuccessCallback
	m_onErrorCallback = ErrorCallback
	
	downlodIndex = 1
	
	if G.GameConfig.GetServerOption() == 0 then
		ListDomain = DevFileListDomain
		FileName = DevFileName
	elseif G.GameConfig.GetServerOption() == 1 then
		ListDomain = QaFileListDomain
		FileName = QaFileName
	elseif G.GameConfig.GetServerOption() == 3 then
		ListDomain = AnFileListDomain
		FileName = AnFileName
	elseif G.GameConfig.GetServerOption() == 4 then
		ListDomain = CnFileListDomain
		FileName = CnFileName
	elseif G.GameConfig.GetServerOption() == 5 then
		ListDomain = StageFileListDomain
		FileName = StageFileName
	end	
	
	if useNewEncode == true then
		if G.GameConfig.GetServerOption() == 0 then
			FileName = DevFileNameNew
		elseif G.GameConfig.GetServerOption() == 1 then
			FileName = QaFileNameNew
		elseif G.GameConfig.GetServerOption() == 3 then
			FileName = AnFileNameNew
		elseif G.GameConfig.GetServerOption() == 4 then
			FileName = CnFileNameNew
		elseif G.GameConfig.GetServerOption() == 5 then
			FileName = StageFileNameNew
		end
	end
	
	if isEncode == true then
		FileName = encodeFileName
	end
	
	
	-- 打亂順序
	ListDomain = RandomList(ListDomain)
	
	DoDownloadQsuFile()
end

function DoDownloadQsuFile()
	if downlodIndex <= #ListDomain then
		local url = G.Tool.Base64.decodeBase64(ListDomain[downlodIndex]) .. FileName
		downlodIndex = downlodIndex + 1
		Download.DownloadFile(url, onSuccessCallback, DoDownloadQsuFile)	
	else
		ShowLog("全部檔案下載失敗")
		m_onErrorCallback(1)
	end
end

-- 1.目前版号
-- 2.使用模式 1超级盾，2传统网络模式
-- 3.KEY
-- 4.大厅
-- 5.大厅PORT
function onSuccessCallback(data)

	if isEncode == true then
		local jasnData = G.Tool.Aes.Encode(data)
		CS.UnityEngine.Debug.LogWarning("########################## Encode data\n" .. jasnData)
		--jasnData = G.Tool.Aes.Decode(jasnData)
		--print(jasnData)		
	end
	

	local dataList = G.Tool.StringHelper.NewSplit(data, "\n")
	if #dataList == 1 then
		if useNewEncode == false then
			data = G.Tool.Aes.Decode(data)
		else
			data = G.Tool.Aes.DecodeNoJson(data)
		end		
		if data == nil then
			m_onErrorCallback(2)
			return			
		end
		dataList = G.Tool.StringHelper.NewSplit(data, "\n")
	end
	
	local nowVer = GetVer()
	local _fileVer = tonumber(dataList[1])
	if _fileVer >= nowVer then
		downloadUse = tonumber(dataList[2])
		local _use = 1
		local _key = dataList[3]
		local _mLobby = dataList[4]
		local _port = tonumber(dataList[5])
		
		Save(_fileVer, _use, _key, _mLobby, _port)
		
		local isNeedRestart = false
		local _nowKey = GetKey()
		
		-- key有更新，必須重新啟動遊戲
		if _nowKey ~= _key then
			isNeedRestart = true
		end
		
		if isNeedRestart == false then
			if initSuccess == false then
				ShowLog("尚未初始化過,需初始化")
				accTryCount = 0
				InitEx(true)
			else
				ShowLog("已經初始化過")			
				m_onSuccessCallback()
			end
		else
			ShowLog("key不相同，必須重新啟動")
			m_onErrorCallback(0)
		end
	else
		downloadUse = 1
		ShowLog("無新資料")
		m_onSuccessCallback()
	end
end

function Init()
	ShowLog("************* init Qsu")

	init()
	
	InitEx(false)
end

-- SDK初始化
function InitEx(isNeedCallback)
	ShowLog("InitEx Qsu")

	if accTryCount >= tryCount then
		if isNeedCallback == true then
			m_onErrorCallback(3)
		end
		return
	end
	
	accTryCount = accTryCount + 1
	
	local skey = GetKey()
	--skey = G.Tool.Base64.decodeBase64(skey)
	if skey == "" then
		if isNeedCallback == true then
			m_onErrorCallback(4)
		end	
		return
	end
	
	initRes = CS.QsuSDK.Initialize(skey)
	if isSimulation == true then
		initRes = simulationInitRes
		if isNeedCallback == true then
			initRes = 0
		end
	end
	
	if initRes ~= 0 then
		ShowLog("InitEx 失敗")
		
		InitEx(isNeedCallback)
	else
		initSuccess = true
		ShowLog("InitEx 成功")
		
		if isNeedCallback == true then
			m_onSuccessCallback()
		end
	end
end

function IsInitSuccess()
	return initSuccess
end

local isGet = false
function getProxyTcpByDomain(domain, port)
	print("######################## Qsu getProxyTcpByDomain domain ", domain)
	print("######################## Qsu getProxyTcpByDomain port ", port)

	if isSimulation == true then
		if isGet == false then
			isGet = true
			return simulationGetIpRes, simulationGetIpIp, simulationGetIpPort
		else
			return 0, simulationGetIpIp, simulationGetIpPort
		end
	end
	
	local QsuIP = "0.0.0.0"
	local QsuPort = CS.QsuSDK.GetLocalPort(domain, port)
	return 0, QsuIP, QsuPort
end

function GetIP(port)
	local res, ip, port = getProxyTcpByDomain(GetMLobby(), tostring(port))
	ShowLog("取得IP " .. tostring(res) .. " " .. ip .. " " .. tostring(port))
	return res, ip, port
end