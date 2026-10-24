var GameData = require("GameData");

var GameLight = cc.Class({
    extends: cc.Component,

    onLoad(){
        this.actionManager = []
        for(let i in this.node.children){
            let manager = this.node.children[i].getComponent("UIActionManager")
            if(manager != null){
                manager.Init()
                this.actionManager.push(manager)
            }
        }

        this.EnumAction = cc.Enum({
            // Spin 
            StartSpin: 0,
            ReelStopSpin_Reel0: 10,
            ReelStopSpin_Reel1: 11,
            ReelStopSpin_Reel2: 12,
            StopSpinEnd_Reel0: 20,
            StopSpinEnd_Reel1: 21,
            StopSpinEnd_Reel2: 22,
            StopSpinEnd_All: 29,
            StopSpinEnd_All_NG: 30,
            StopSpinEnd_All_RB: 31,
            StopSpinEnd_All_BB: 32,
            StopSpinEnd_All_JAC: 33,
            // Scenario
            ScenarioNGEnter: 100,
            ScenarioNG: 101,
            ScenarioRBEnter: 120,
            ScenarioRB: 121,
            ScenarioBBEnter: 140,
            ScenarioBB: 141,
            ScenarioJACEnter: 160,
            ScenarioJAC: 161,
            // Process
            GameStart:200,
            ResultStart: 280,
            ResultWinMoney: 281,
            ResultEnd: 299,
            // 
            BonusSure: 510,
            BBObverse: 521,
            BBReverse: 522,
            ChanceBuff: 530,
            BonusStore: 550,
        })
    },

    ChangeAction(index){
        for(let i in this.actionManager){
            if(this.actionManager[i].getAction(index) != null){
                //console.log("change action [",this.EnumAction[index], index,"]",this.actionManager[i].node.name)
                this.actionManager[i].changeAction(index)
            }
        }
    },

    ShowGameStart(){
        this.ChangeAction(this.EnumAction.GameStart)
        if(GameData.GetScenario() == GameData.Enum_Scenario.GEN_Scenario_NG){
            this.ChangeAction(this.EnumAction.ScenarioNGEnter)
        }
        else if(GameData.GetScenario() == GameData.Enum_Scenario.GEN_Scenario_RB){
            this.ChangeAction(this.EnumAction.ScenarioRBEnter)
            if(GameData.GatBonusStore() > 0){
                this.ChangeAction(this.EnumAction.BonusStore)
            }
        }
        else if(GameData.GetScenario() == GameData.Enum_Scenario.GEN_Scenario_BB){
            this.ChangeAction(this.EnumAction.ScenarioBBEnter)
            if(GameData.GatBonusStore() > 0){
                this.ChangeAction(this.EnumAction.BonusStore)
            }
        }
        else if(GameData.GetScenario() == GameData.Enum_Scenario.GEN_Scenario_JAC){
            this.ChangeAction(this.EnumAction.ScenarioJACEnter)
        }

        if(GameData.GatBonusSure()){
            this.ChangeAction(this.EnumAction.BonusSure)
        }        
        
        if(GameData.GatChanceBuff()){
            this.ChangeAction(this.EnumAction.ChanceBuff)
        }
    },

    ShowStartSpin(){
        
        this.ChangeAction(this.EnumAction.StartSpin)   
        if(GameData.GetScenario() == GameData.Enum_Scenario.GEN_Scenario_NG){
            this.ChangeAction(this.EnumAction.ScenarioNG)
        }
        else if(GameData.GetScenario() == GameData.Enum_Scenario.GEN_Scenario_RB){
            this.ChangeAction(this.EnumAction.ScenarioRB)
            if(GameData.GatBonusStore() > 0){
                this.ChangeAction(this.EnumAction.BonusStore)
            }
			this.ChangeAction(this.EnumAction.BBReverse)
        }
        else if(GameData.GetScenario() == GameData.Enum_Scenario.GEN_Scenario_BB){
            this.ChangeAction(this.EnumAction.ScenarioBB)
            if(GameData.GatBonusStore() > 0){
                this.ChangeAction(this.EnumAction.BonusStore)
            }
            // JAC In 顯示順押
            if(GameData.CheckPayouts(GameData.Enum_PayType.GEN_PTBonus)){
                this.ChangeAction(this.EnumAction.BBObverse)
            }
            else{
                this.ChangeAction(this.EnumAction.BBReverse)
            }
        }
        else if(GameData.GetScenario() == GameData.Enum_Scenario.GEN_Scenario_JAC){
            this.ChangeAction(this.EnumAction.ScenarioJAC)
        }
    },

    ShowReelStopSpin(index){
        this.ChangeAction(this.EnumAction.ReelStopSpin_Reel0 + index)
    },
    
    ShowReelStopSpinEnd(index){
        if(index == null){            
            this.ChangeAction(this.EnumAction.StopSpinEnd_All)
            if(GameData.GetScenario() == GameData.Enum_Scenario.GEN_Scenario_NG){
                this.ChangeAction(this.EnumAction.StopSpinEnd_All_NG)
            }
            else if(GameData.GetScenario() == GameData.Enum_Scenario.GEN_Scenario_RB){
                this.ChangeAction(this.EnumAction.StopSpinEnd_All_RB)
            }
            else if(GameData.GetScenario() == GameData.Enum_Scenario.GEN_Scenario_BB){
                this.ChangeAction(this.EnumAction.StopSpinEnd_All_BB)
            }
            else if(GameData.GetScenario() == GameData.Enum_Scenario.GEN_Scenario_JAC){
                this.ChangeAction(this.EnumAction.StopSpinEnd_All_JAC)
            }
        }
        else{
            this.ChangeAction(this.EnumAction.StopSpinEnd_Reel0 + index)    
        }
    },

    ShowResultStart(){
        this.ChangeAction(this.EnumAction.ResultStart)
        if(GameData.GetWinMoney() > 0){
            this.ChangeAction(this.EnumAction.ResultWinMoney)
        }
    },

    ShowResultEnd(){
        this.ChangeAction(this.EnumAction.ResultEnd)
    },
});

module.exports = GameLight

