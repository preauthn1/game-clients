import { Game_GEN } from "Game_GEN" //这里引入文件,msg为package的包名
let networkQueue = require("NetworkQueue");

var GameData = {
    extends: cc.Component,

    Init(){
        /** Enum_Scenario 情境
         **   GEN_Scenario_NG = 0;        // Normal Game
         **   GEN_Scenario_RB = 1;        // Regular Bonus
         **   GEN_Scenario_BB = 2;        // Big Bonus
         **   GEN_Scenario_JAC = 3;       // JAC
        */
        this.Enum_Scenario = Game_GEN.GEN_Scenario

        /** Enum_Mode 當前模式
         **   GEN_MODE_Unassigned = 0;    // 未指定
         **   GEN_MODE_A = 1;             // A模式
         **   GEN_MODE_B = 2;             // B模式
         **   GEN_MODE_Heaven = 3;        // 天國模式
        */
        this.Enum_Mode = Game_GEN.GEN_Mode 

        /** GEN_Symbol 符號
         **   GEN_Symbol_BlueSeven 藍7 p1
         **   GEN_Symbol_RedSeven 紅7 p2
         **   GEN_Symbol_Bar Bar(將軍) p3
         **   GEN_Symbol_Bell 銅鐘 p4
         **   GEN_Symbol_WaterMelon 西瓜(松) p5
         **   GEN_Symbol_Berry 櫻桃 p6
         **   GEN_Symbol_Replay Replay(青再) p7     
        */
        this.Enum_Symbol = Game_GEN.GEN_Symbol

        /** 牌型 GEN_ResultType
         **   GEN_RT_Empty Empty
         **   GEN_RT_None 沒有中獎
         **   GEN_RT_FeatureNone 純槓
         **   GEN_RT_JACNone JAC槓
         **   GEN_RT_BlueSevenLink 藍7連線
         **   GEN_RT_RedSevenLink 紅7連線
         **   GEN_RT_BarLink Bar連線
         **   GEN_RT_BellLink 銅鐘連線
         **   GEN_RT_WaterMelonLink 西瓜連線
         **   GEN_RT_BerryLink 櫻桃連線
         **   GEN_RT_ReplayLink Replay連線
         **   GEN_RT_DoubleSevenLink 雙7(藍7紅7混合)連線
         **   GEN_RT_ReleaseRT 需要解除RT 骰出後要依照當前大獎是 RB / BB，對應到 ReleaseRTonBB / ReleaseRTonRB
         **   GEN_RT_ReleaseRTonBB 需要解除RT 當前大獎為BB
         **   GEN_RT_ReleaseRTonRB 需要解除RT 當前大獎為RB
         **   GEN_RT_BonusSure Bonus確定
         **   GEN_RT_BerryLeftAny 櫻桃出現在左邊任意位置
        */        
        this.Enum_ResultType  = Game_GEN.GEN_ResultType 

        /**
         ** GEN_PTChip 賠錢 Payout 為倍數
         ** GEN_PTReplay 免費再轉 Payout 為次數
         ** GEN_PTBonus 大獎 Payout 為 GameModeConfig 的 ID
         ** GEN_PT1G G連 增加 Bonus 連莊 Payout 為次數 
         */
        this.Enum_PayType  = Game_GEN.GEN_PayType 
    },
    GetIntData(value){
        if (value == null){
            return 0
        }
        else{
            return value
        }
    },

    GetBoolData(value){
        if (value == null){
            return false
        }
        else{
            return value
        }
    },

    /** 遊戲狀態
     **   GEN_Scenario Scenario 當前情境
     **   GEN_Mode Mode 當前模式
     **   GEN_Scenario Bonus 當前大獎
     **   int32 RT 剩餘RT數
     **   bool Replay 是否為重玩
     **   bool BonusSure Bonus確定
     **   int32 RequireCoin 當前遊戲所需Coin數
     **   int32 BonusLeft 當前Bonus剩餘次數
     **   int32 JACLeft 當前JAC剩餘次數
     **   bool ChanceBuff 當前是否為機會模式
     **   int32 ChanceBuffDeadLine 機會模式當前轉數到達時解除
    */
    SetState(stateData){
        this.stateData = stateData

        if(networkQueue.IsShowLog() != false){
            let Scenario = this.Enum_Scenario[this.GetScenario()].split("_")[2]
            let Mode = this.Enum_Mode[this.GetMode()].split("_")[2]
            let Bonus = this.Enum_Scenario[this.GetBonus()].split("_")[2]
            let content = "%c[當前情境] " + Scenario + " [當前模式] " + Mode + " [當前大獎] " + Bonus
            console.log(content,'background:#FFE5D4; color:#000000; font-size:120%')
        }
    },    
    /** 取得遊戲狀態*/
    GetState(){
        return this.stateData
    },
    /** 下回合的遊戲狀態 */
    SetNextGameState(data){
        this.nextStateData = data
    },
    /** 取得下回合的遊戲狀態 */
    GetNextGameState(){
        return this.nextStateData
    },
    /** 取得當前情境 Enum_Scenario */
    GetScenario(){
        return this.GetIntData(this.stateData.Scenario)
    },

    /** 取的當前模式  Enum_Mode*/
    GetMode(){
        return this.GetIntData(this.stateData.Mode)
    },
    /** 取得當前大獎 Enum_Scenario */
    GetBonus(){
        return this.GetIntData(this.stateData.Bonus)
    },
    /** 剩餘RT數 */
    GetRT(){
        return this.GetIntData(this.stateData.RT)
    },
    /** 是否為重玩 */ 
    GetReplay(){
        return this.GetBoolData(this.stateData.Replay)
    },
    /** Bonus確定 */ 
    GatBonusSure(){
        return this.GetBoolData(this.stateData.BonusSure)
    },
    /** 目前累積1G連次數 */ 
    GatBonusStore(){
        return this.GetIntData(this.stateData.BonusStore)
    },
    /** 當前Bonus剩餘次數 */
    GatBonusLeft(){
        return this.GetIntData(this.stateData.BonusLeft)
    },
    /** 當前遊戲所需Coin數 */ 
    GatRequireCoin(){
        return this.GetIntData(this.stateData.RequireCoin)
    },
    /** 當前JAC剩餘次數 */
    GatJACLeft(){
        return this.GetIntData(this.stateData.JACLeft)
    },
    /** 當前是否為機會模式 */
    GatChanceBuff(){
        return this.GetBoolData(this.stateData.ChanceBuff)
    },
    /** 機會模式當前轉數到達時解除 */
    GatChanceBuffDeadLine(){
        return this.GetIntData(this.stateData.ChanceBuffDeadLine)
    },

    /** 玩家狀態感變 */
    SetUserStateChange(data){
        this.userData = data
    },
    /** 儲存玩家資料 */
    SetUserData(data){
        this.userData = data
    },
    /** 轉移次需要的錢 枚數 * 倍率 */
    GetNowBet(){
        return this.GetBetOdds() * this.GatRequireCoin()
    },
    /** 遊戲設定 */
    SetSetting(data){
        this.betOdds = data.BetOdds
        this.odds = data.Odds
    },
    /** 設定目前倍率 */
    SetBetOdds(betOdds){
        this.betOdds = betOdds
    },
    /** 取得目前倍率 */
    GetBetOdds(){
        return this.GetIntData(this.betOdds)
    },
    /** 取得能選擇的倍率 */
    GetOdds(index){
        if(index != null){
            return this.odds[index]
        }
        return this.odds
    },
    /** 能選擇的倍率數量 */
    GetOddsLength(){
        return (this.odds == null) ? 0 : this.odds.length
    },
    /** 遊戲結果 
        int64 BetMoney 下注金額
        int64 WinMoney 贏錢金額
        GEN_ResultType Result 牌型
        repeated int32 StopIndex 停輪index 起始為0
        repeated GEN_ReelStrip ReelStrip 停輪樣式 內容的符號只會為3個
        bool ReleaseRT 是否解除RT
        repeated GEN_Payout Payouts 獎勵內容
        repeated GEN_Position BlinkPositions 亮燈位置
    */
    SetResultData(data){
        this.resultData = data
    },
    /** 取得結果牌型 Enum_ResultType */
    GetResultType()
    {
        return this.GetIntData(this.resultData.Result )
    },
    /** 取得玩家贏的錢 */
    GetWinMoney(){
        return this.GetIntData(this.resultData.WinMoney)
    },
    /** 取得獎勵內容 Array GEN_Payout
        GEN_PayType Type 獎勵類型
        int64 Amount 獎勵數量
    */
    GetPayouts(){
        return this.resultData.Payouts
    },
    /** 判斷獎勵類型中是否有指定的類型 */
    CheckPayouts(Type){
        let Payouts = this.GetPayouts()
        if (Payouts != null){
            for (let i = 0; i < Payouts.length; ++i){
                let data = Payouts[i]
                if (data.Type == Type){
                    return true
                }
            }
        }
        return false
    },
    /** 判斷牌型是否相同 */
    CheckResultType(Type){
        if (Type == this.resultData.Result){
            return true
        }
        else{
            return false
        }
    },
    /** 設定轉數表 */
    SetRoadMap(data){
        this.roadMap = data
    },
    /** 取得轉數表 */
    GetRoadMap(){
        return this.roadMap
    },
};

module.exports = GameData