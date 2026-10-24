var GameData = {
	extends: cc.Component,

    init(){
        this.IsBot = false
        
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

    setBot(){
        this.IsBot = !this.IsBot
    },

    setGameSetting(data){
        this.SettingData = data
    },

    getGameSetting(){
        return this.SettingData
    },

    setProtoSetting(data){
        this.ProtoSetting = data
    },

    getProtoSetting(){
        return this.ProtoSetting
    },

    addMissFruit(id){
        this.MissFruit.push(id)
    },

    getMissFruit(){
        return this.MissFruit
    },

    clearMissFruit(){
        this.MissFruit = []
    },

    addBoomCount(){
        this.BoomCount += 1
    },

    getBoomCount(){
        return this.BoomCount
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
};

module.exports = GameData
