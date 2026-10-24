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

    setGameSetting(data){
        this.SettingData = data
    },

    getGameSetting(){
        return this.SettingData
    },

    setGameResult(data){
        this.GameResultData = data
    },

    getGameResult(){
        return this.GameResultData
    },

    setRank(data){
        this.RankData = data
    },
    
    getRank(){
        return this.RankData
    },

    getRoundTime(){
        return 10
    },

    getScoreByType(type){
        // red
        if (type == 0){
            return 50
        }        
        // white
        else if (type == 1){
            return 20
        }
        // black
        else if (type == 2){
            return 10
        }
    }
};

module.exports = GameData
