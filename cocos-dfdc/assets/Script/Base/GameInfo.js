var GameIDs = new Map(
    [
        /*
        ["1", "ddz"],  // 斗地主
        ["2", "qznn"],  // 抢庄牛牛
        ["3", "zjh"],  // 诈金花
        ["4", "dzpk"],  // 德州扑克
        ["5", "wzp"],  // 梭哈
        ["6", "qzesyd"],  // 21点
        ["7", "tbnn"],  // 经典牛牛
        ["8", "sangong"],  // 三公
        ["9", "sgj"],  // 水果机
        ["10", "sss"],  // 十三水
        ["11", "lhd"],  // 龙虎斗
        ["12", "ttz"],  // 推筒子
        ["13", "bjl"],  // 百家乐
        ["14", "by"],  // 捕鱼
        ["15", "scmj"],  // 四川麻将
        ["16", "srnn"],  // 双人牛牛
        ["17", "ermj"],  // 兩人麻将
        ["18", "fkeb"],  // 疯狂二八
        ["19", "brnn"],  // 百人牛牛
        ["20", "hhdz"],  // 紅黑大戰
        ["21", "hhnn"],  // 紅黑牛牛
        ["22", "codyqzesyd"],  // 21
        ["23", "sgbjl"],  // 性感百家樂
        ["24", "bynew"],  // 新捕鱼
        ["25", "dfdc"],  // 多福多财
        ["26", "tgw"],  // 糖果屋
        ["27", "ald"],  // 阿拉丁
        ["28", "jlbpk"],  // 加勒比扑克(預留)
        ["29", "zcjb"],  // 招财进宝
        ["1000", "slot"],  // 老虎机
        ["1001", "wlzb"],  // 五龙争霸
        ["1002", "xgpd"],  // 星光派对
        ["1003", "xmbx"],  // 熊猫报喜
        ["1004", "jjbx"],  // 金吉报喜
        ["2001", "jlbpk"],  // 加勒比扑克
        ["2003", "dczz"],  // 赌场战争
        ["40", "jdesyd"],  // 经典21点
        */
       ["25", "dfdc"],  // 多福多财
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