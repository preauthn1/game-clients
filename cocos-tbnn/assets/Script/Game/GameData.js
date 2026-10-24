var data = {}

var GameData = {
	extends: cc.Component,

	Destory(){
	    data = {}
	    data.GameConfig = [ ]
	    data.AllowBaseScoreTimes = [ ]
	},

	AllowBaseScoreTimes(_config){
	    if (_config != null) {
	        data.AllowBaseScoreTimes = _config        
		}
    	else{
	        return data.AllowBaseScoreTimes
	    }
	},

	// 获取游戏配置
	GameConfig(_gameconfig){
	    if (_gameconfig != null) {
	        data.GameConfig = _gameconfig
		} 
    	else{
	        return data.GameConfig
	    }
	},

	// 是否自动准备
	IsAutoReady(value){
	    if (value != null) {
	        data.IsAutoReady = value
		} 
    	else{
	        return data.IsAutoReady
	    }
	},


};

module.exports = GameData
