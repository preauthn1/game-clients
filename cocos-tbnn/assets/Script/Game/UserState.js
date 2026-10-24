var UserState = {
    // 准备
    ready : 1,
    // 游戏中的初始状态,即隐藏状态条
    none : 2,
    // 离线
    leave : 3,
    // 选择倍数
    choosebet : 4,
    // 组牌中
    zhupaizhong : 5,
    // 组牌完成
    zhupaifinished : 6,
    // 亮牌
    opencard : 7
}
module.exports = UserState