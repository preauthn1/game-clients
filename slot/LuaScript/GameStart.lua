--
-- Author: xiaYu
-- Date: 2017-09-5 15:29:13
--
local HallG = require("Global")
local GameG = HallG.RequireG("GameGlobal")
local gameData = GameG.RequireG("GameData")
local gameLayer = GameG.RequireG("GameLayer")
local gameModel = GameG.RequireG("GameModel")

function Awake()
	GameG.Init()
	gameData.Init()
	gameLayer.Init()
	gameModel.Init()
end

function Start()  
	GameG.Start()  
	gameLayer.Start()
end

--退出
function OnDestroy()
    
	GameG.onExit()
	gameLayer.onExit()
end

function Update()
	gameLayer.Update()
end