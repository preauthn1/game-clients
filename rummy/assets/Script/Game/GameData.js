var GameData = {
	extends: cc.Component,

    init(){        
        this.initGameData()     
    },

    initGameData(){
        this.MissFruit = []
        this.BoomCount = 0
        this.GameResultData = null
        this.RankData = null
    },

    setUserData(data){
        this.UserData = data
    },

    getUserData(){
        return this.UserData
    },

    getSeatNo(){
        return this.UserData.SeatNo
    },

    /*
    // [印度拉米] 遊戲設定
    message INRM_GameSetting {
        // 機台編號
        int32 TableNo = 1;
        // 等待遊戲開始時間(ms)
        int32 StartWaitTime = 11;
        // 每次動作等待時間(ms)
        int32 ActionWaitTime = 12;
        // 每一點分數
        int64 ScorePerPoint = 13;
        // 手牌張數
        int64 HandCardLength = 14;
        // 最大失敗點數
        int64 MaxPoint = 15;
        // 棄牌點數
        int64 GiveupPoint = 16;
        // 最大失誤次數
        int32 MissLimit = 17;
    }
    */    
    setGameSetting(data){
        this.SettingData = data
    },

    getGameSetting(){
        return this.SettingData
    },

    setGameStateData(data){
        this.GameStateData = data
    },

    getGameState(){
        return this.GameStateData.State
    },

    setUserStateData(data){
        this.UserStateData = data
    },

    getUserState(){
        return this.UserStateData
    },    

    getStartWaitTime(){
        if (this.SettingData == null){
            return 0
        }
        return this.SettingData.StartWaitTime
    },

    getActionWaitTime(){
        return this.SettingData.ActionWaitTime
    },

    setGameResult(data){
        this.GameResultData = data
    },

    getGameResult(){
        return this.GameResultData
    },

    getRoundTime(){
        return 10
    },

    setRandJoker(randJoker){
        this.RandJoker = randJoker
    },

    getRandJoker(){
        return this.RandJoker
    },    
};

module.exports = GameData
