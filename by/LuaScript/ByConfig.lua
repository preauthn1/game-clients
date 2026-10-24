require("Module")
mmodule(...)
local G = require "Global"

FishTable = { };        -- 鱼配置表 
FishShoalTable = { };   -- 鱼群配置表
RoomTable = { };        -- 房间配置表
FishWaveTable = { };    -- 鱼潮配置表  
GlobalTable = {}        -- 全局配置
BoomTable = {};			-- 子彈表格

function Load()
    print("初始化配置表")
    local data = CS.AssetBundleManager.Instance:LoadByte(G.GetGamePName(), 'FishTable')
    FishTable = G.Protobuf.decode("DataCfg.FishTable_ARRAY", data).items
     
    local data = CS.AssetBundleManager.Instance:LoadByte(G.GetGamePName(), 'FishShoalTable')
    FishShoalTable = G.Protobuf.decode("DataCfg.FishShoalTable_ARRAY", data).items

    local data = CS.AssetBundleManager.Instance:LoadByte(G.GetGamePName(), 'RoomTable')
    RoomTable = G.Protobuf.decode("DataCfg.RoomTable_ARRAY", data).items
    
    local data = CS.AssetBundleManager.Instance:LoadByte(G.GetGamePName(), 'FishWaveTable')
    FishWaveTable = G.Protobuf.decode("DataCfg.FishWaveTable_ARRAY", data).items

    local data = CS.AssetBundleManager.Instance:LoadByte(G.GetGamePName(), 'GlobalTable')
    GlobalTable = G.Protobuf.decode("DataCfg.GlobalTable_ARRAY", data).items
    --GlobalTable = {{configId=1001, configInfo = "1,1,0;2,2,1;3,3,2;4,4,3;5,5,4;6,6,5;7,7,6;8,-1,7"}}
	
    local data = CS.AssetBundleManager.Instance:LoadByte(G.GetGamePName(), 'BoomTable')
    BoomTable = G.Protobuf.decode("DataCfg.BoomTable_ARRAY", data).items	
end
function GetGlobalTable(id)
    for k,v in ipairs(GlobalTable) do
        if v.configId == id then
            return v
        end
    end
end

function GetBoomTable(number)
    for k,v in ipairs(BoomTable) do
        if v.boomNumber == number then
            return v
        end
    end
end
 