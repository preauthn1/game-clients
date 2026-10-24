local list = {
com_server_terpro1 = { Index = 0,CompanyName = "target",ProductName = "伺服器",BundleID = "com.server.target",AppName = "伺服器",AppleID = "nil",ServerOption = -1,PlatformID = 1,SiteID = 1,StaticSiteID = 1,FlagShare = 0,Agent=0,IconName="cqxx",NotExport="0",Branch=0 ,JPushAppKey=0 },
com_auer_terpro100100001 = { Index = 100,CompanyName = "auer",ProductName = "水枪公主老虎机",BundleID = "com.auer.terpro100",AppName = "auerslot",AppleID = "nil",ServerOption = 4,PlatformID = 100,SiteID = 100001,StaticSiteID = 100001,FlagShare = 0,Agent=0,IconName="vfh100",NotExport="0",Branch=0 ,JPushAppKey=0 },
com_stage_terpro100570 = { Index = 100,CompanyName = "target",ProductName = "Stage",BundleID = "com.stage.terpro100",AppName = "Stage",AppleID = "nil",ServerOption = 5,PlatformID = 100,SiteID = 70,StaticSiteID = 570,FlagShare = 0,Agent=0,IconName="cqxx",NotExport="0",Branch=0 ,JPushAppKey=0 },
com_qa_terpro100170 = { Index = 100,CompanyName = "target",ProductName = "QA",BundleID = "com.qa.terpro100",AppName = "QA",AppleID = "nil",ServerOption = 1,PlatformID = 100,SiteID = 70,StaticSiteID = 170,FlagShare = 0,Agent=0,IconName="cqxx",NotExport="0",Branch=0 ,JPushAppKey=0 },
com_dev_terpro10070 = { Index = 100,CompanyName = "target",ProductName = "Dev",BundleID = "com.dev.terpro100",AppName = "Dev",AppleID = "nil",ServerOption = 0,PlatformID = 100,SiteID = 70,StaticSiteID = 70,FlagShare = 0,Agent=0,IconName="cqxx",NotExport="0",Branch=0 ,JPushAppKey=0 },
com_stage_terpro1005100001 = { Index = 100,CompanyName = "target",ProductName = "Stage",BundleID = "com.stage.terpro100",AppName = "Stage",AppleID = "nil",ServerOption = 5,PlatformID = 100,SiteID = 100001,StaticSiteID = 5100001,FlagShare = 0,Agent=0,IconName="cqxx",NotExport="0",Branch=0 ,JPushAppKey=0 },
com_stage_terpro1015101001 = { Index = 101,CompanyName = "target",ProductName = "Demo",BundleID = "com.stage.terpro101",AppName = "Demo",AppleID = "nil",ServerOption = 5,PlatformID = 101,SiteID = 101001,StaticSiteID = 5101001,FlagShare = 0,Agent=0,IconName="stagedemo",NotExport="0",Branch=0 ,JPushAppKey=0 },
com_terpro_qa70 = { Index = 0,CompanyName = "qacc",ProductName = "Qacc",BundleID = "com.target.qa",AppName = "Qacc",AppleID = "nil",ServerOption = 1,PlatformID = 0,SiteID = 70,StaticSiteID = 70,FlagShare = 0,Agent=0,IconName="cqxx",NotExport="0",Branch=0 ,JPushAppKey=0 },
com_cqxx_myGametest70 = { Index = 0,CompanyName = "cqxx",ProductName = "超級大贏家-內部測試",BundleID = "com.cqxx.myGametest",AppName = "超級大贏家-內部測試",AppleID = "nil",ServerOption = 0,PlatformID = 0,SiteID = 70,StaticSiteID = 70,FlagShare = 0,Agent=0,IconName="cqxx",NotExport="0",Branch=0 ,JPushAppKey=0 },
com_cqxx_myGameserver1 = { Index = 0,CompanyName = "cqxx",ProductName = "超級大贏家-伺服器",BundleID = "com.cqxx.myGameserver",AppName = "超級大贏家-伺服器",AppleID = "nil",ServerOption = -1,PlatformID = 0,SiteID = 1,StaticSiteID = 1,FlagShare = 0,Agent=0,IconName="cqxx",NotExport="0",Branch=0 ,JPushAppKey=0 },
com_qa_p70v570 = { Index = 100,CompanyName = "qa",ProductName = "qa70v5",BundleID = "com.qa.p70v5",AppName = "qa70v5",AppleID = "nil",ServerOption = 1,PlatformID = 100,SiteID = 70,StaticSiteID = 70,FlagShare = 0,Agent=0,IconName="vfh999100",NotExport="0",Branch=0 ,JPushAppKey=test },
com_stage_p70v570 = { Index = 100,CompanyName = "stage",ProductName = "sg70v5",BundleID = "com.stage.p70v5",AppName = "stage70v5",AppleID = "nil",ServerOption = 5,PlatformID = 100,SiteID = 70,StaticSiteID = 70,FlagShare = 0,Agent=0,IconName="vfh99968",NotExport="0",Branch=0 ,JPushAppKey=test },

}
--- 以上内容为工具脚本自动生成，请不要在这之上做任何修改---
-- 模块定义
--function mmodule(mname)
--    local M = { }
--    _G[mname] = M
--    package.loaded[mname] = M
--    setmetatable(M, { __index = _G })
--    setfenv(2, M)
--   -- print(mname)
--end
--mmodule(...)

function GetTable ()
	local bundleId_site = CS.Utility.GetbundleIdentifier()
	bundleId_site = string.gsub(bundleId_site,"%.","_")	
	bundleId_site = bundleId_site .. CS.AppDefine.GameSiteID
	
	if list[tostring(bundleId_site)] ~= nil then
		return list[tostring(bundleId_site)]
	else
		local dataInfo = nil
		if CS.AppDefine.GameSiteID == 0 then

		elseif CS.AppDefine.GameSiteID == 2 then

		else
			for i, data in pairs(list) do
				if data.StaticSiteID == CS.AppDefine.GameSiteID then
					CS.UnityEngine.Debug.Log("PlatformRoute find by GameSiteID " .. tostring(CS.AppDefine.GameSiteID))
					dataInfo = data
					break
				end
			end
		end
	
		if dataInfo == nil then
			CS.UnityEngine.Debug.Log("PlatformRoute no this " .. tostring(bundleId_site))
			local class = {
				Index = 0,
				CompanyName = "",
				ProductName = "",
				BundleID = "",
				AppName = "",
				AppleID = "",
				ServerOption = 4,
				PlatformID = 2,
				SiteID = 2,
				Version=0,
				Agent = nil,
				Template="0",
				Branch = 0
			}
			
			return class
		else
			return dataInfo
		end
	end	
end

function GetAll ()
	return 	list	
end