var GameIDs = new Map(
    [
       ["1027", "wlyc"],  
    ]
);

var GameInfo = 
{
    // 获取当前游戏项目名称(用于加载资源)
    GetGamePName: function(gameID)
    {
        return GameIDs.get(gameID.toString());
    },

    HasGame: function(gameID)
    {
        if (GameIDs.get(gameID.toString()) == null)
            return false
        else
            return true
    },
};

module.exports = GameInfo;