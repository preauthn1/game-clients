
const win = window as any;

export const languages = {
    "labelText": {

        "lblStartBetting": '新的游戏即将开始！ ',
        "lblStopBetting": '停止下注',
        "lblCountdown": '开始下注!',

        "lblTotalPlay": '总下注金',
        "lblWin": '赢',

        "lblSpecialTitle": '特殊下注',
        "lblSpecial1": '轮盘\n零盘注',
        "lblSpecial2": '孤注',
        "lblSpecial3": '轮盘\n下角注',

        "lblClear": '清除',
        "lblUndo": '回复',
        "lblDouble": '加倍',
        "lblConfirm": '确认',

        "lblOn": "开",
        "lblOff": "关",
        "lblMusic": '音乐',
        "lblSound": '音效',

        "RuleContent1": '数字分为三种颜色：16个红色、16个黑色和1个绿色。',
        "RuleContent2": '有7种不同类型面值的筹码。 ',
        "RuleContent3": '请选择筹码值，决定是否要将它们放置在您决定的号码或布局表上的号码组上。',
        "RuleContent4": '下注时会进行倒计时，当倒计时为0时游戏开始，无法进行其他投注。',

        "RuleTableTitle1": '筹码范围',
        "RuleTableTitle2": '投注名称',
        "RuleTableTitle3": '最低下注额',
        "RuleTableTitle4": '最高下注额',
        "RuleTableTitle5": '赔率',

        "RuleTableContent11": '超级0号',
        "RuleTableContent12": '投注于「0」数字上',

        "RuleTableContent21": '单一数字',
        "RuleTableContent22": '投注于一个数字的格上',

        "RuleTableContent31": '两个字组',
        "RuleTableContent32": '投注于两个数字之间的线上',

        "RuleTableContent41": '三个字组合',
        "RuleTableContent42": '投注于横行三个数字与外围投注区的线上',

        "RuleTableContent51": '四个字组合',
        "RuleTableContent52": '投注于四个数字交接之间的点上',

        "RuleTableContent61": '六个字组合',
        "RuleTableContent62": '投注于两行横行数字外围投注区的交接点上',

        "RuleTableContent71": '12个字组合',
        "RuleTableContent72": 'Column: 可投注开出号码属于第一(1,4,7,10...)、二(2,5,8,11...)或三(3,6, 9,12...)直行\nDozen: 可投注开出号码属于前(1-12)、中(13-24)或后(25-36)12个号码',

        "RuleTableContent81": '18个字组合',
        "RuleTableContent82": '红或黑、奇或偶数、大或小(1-18、19-36)',

        "GameDataError": "游戏资讯错误",
        "PlayerDataError": "玩家资料错误",
        "PlayerCertificationError": "玩家验证资料错误",
        "connectServer": "正在连接服务器",
        "reconnectServer": "与服务器连接断开,正在尝试重新连接",
        "connectFailed": "连接失败",
        "login": "登入中…",
        "dataConfirm": "确认资料中",
        "gameLoading": "游戏载入中",
        "NextNewGame": '请等待新一局\n游戏开始',

        "overMaxLimit": '你已达下注上限',

        "betTimeOut": '投注时间到，您的投注将被退回。',

        "Roulette_ResultCodeSuccess": '投注发送成功',
        "Roulette_ResultCodeMoneyNotEnough": "金币不足！",
        "Roulette_ResultCodeIllegalBetType": "非法投注类型！",
        "Roulette_ResultCodeIllegalBetMoney": "非法投注！",
        "Roulette_ResultCodeBetTypeOverLimit": "您的投注类型超过限额！",
        "Roulette_ResultCodeAlreadyBetOtherSide": "你已在相对应位置下注！",
        "Roulette_ResultCodeCarryMoneyNotEnough": "携带金额不足,请先充值！",
        "Roulette_ResultCodeNotBetStep": "不在可下注时间下注！",
        "Roulette_ResultCodeIllegalNumbers": "参数错误",
        "Roulette_ResultCodeInvalidArgument": "无效参数",
        "Roulette_ResultCodeInternalError": "内部错误",
        "OrientationHint": "请旋转萤幕以获得最佳体验。"
    }
};

if (!win.languages) {
    win.languages = {};
}

win.languages.zhCN = languages;
