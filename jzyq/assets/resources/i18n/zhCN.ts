
const win = window as any;

export const languages = {
    "labeltext": {
        "lblGameNumber": '局数',
        "lblBetLimit": '限红',
        "lblRoadMap": '路单',// 路單(Road Map)
        "lblAutoBet": '自动下注',
        "lblStartBetting": '下一局即将开始！',
        "lblStopBetting": '停止投注',
        "lblCountdown": '下注!',
        "lblSetting": '系统设定',
        "lblRuleTitle": '规则说明',
        "lblRultGameTitle": '游戏规则',
        "lblRulePointTitle": '点数大小',
        "lblRuleBetTitle": '投注倍率',
        "lblOn" : "开",
        "lblOff" : "关",
        "lblMusic": '音乐',
        "lblSound": '音效',
        "lblMin" : "最低",
        "lblMax" : "最高",
        "lblGoal": '得分',// 得分(Goal)
        'lblLost': '失分',// 失分(Lost)
        'lblInside': '线内',// 線內(Inside)
        'lblOutside': '线外',// 線外(Outside)
        'lblGoalInside': '线内得分',// 线内(Inside)
        'lblGoalOutside': '线外得分',// 线外(Outside)
        'lblLostInside': '线内失分',// 线内(Inside)
        'lblLostOutside': '线外失分',// 线外(Outside)
        'lblBetType': '投注类型',
        'lblPayoutOdds': '赔率',
        'lblRuleContent': '每个投注选项的赔率相应地显示在投注区',

        "msgTopMinMax": '<color=#ffffff>Min : {0}</color><color=#e2c657> / </color> <color=#ffffff>Max : {1}</color>',
        "msgHistoryGameCount": '来自最近 {0} 局数',
        "msgBetOn": '您已经开始自动下注',
        "msgBetOff": '您已经取消自动下注',

        "GameDataError": "游戏资讯错误",
        "PlayerDataError" : "玩家资料错误",
        "PlayerCertificationError": "玩家验证资料错误",
        "connectServer" : "正在连接服务器",
        "reconnectServer" : "与服务器连接断开,正在尝试重新连接",
        "login" : "登入中…",
        "dataConfirm" : "确认资料中",
        "gameLoading" : "游戏载入中",
        "NextNewGame": '请等待新一局\n游戏开始',

        "JZYQ_ResultCodeMoneyNotEnough": '你的钱不够！',
        "JZYQ_ResultCodeIllegalBetType": '非法投注类型！',
        "JZYQ_ResultCodeIllegalBetMoney": '非法投注！',
        "JZYQ_ResultCodeBetTypeOverLimit": '您的投注类型超过限额！',
        "JZYQ_ResultCodeAlreadyBetOtherSide": '你已经在另一边下注了！',
        "JZYQ_ResultCodeCarryMoneyNotEnough": '你携带的钱不够！',
        "JZYQ_ResultCodeNotBetStep": '不在下注步骤！',
        "JZYQ_ResultCodeInvalidArgument": '无效参数',
        'JZYQ_ResultCodeInternalError': '内部错误'




    }
};

if (!win.languages) {
    win.languages = {};
}

win.languages.zhCN = languages;
