
const win = window as any;

export const languages = {
    "labeltext": {
        "lblGameNumber": '局数',
        "lblBetLimit": '限红',
        "lblDragonTitle": '龙',
        "lblTigerTitle": '虎',
        "lblTieTitle": '和',
        "lblTotal" : "总数",
        "lblTopMinMax": '<color=#ffffff>Min : {0}</color><color=#e2c657> / </color> <color=#ffffff>Max : {1}</color>',
        "lblAutoBet": '自动下注',
        "lblStartBetting": '开始下注',
        "lblStopBetting": '停止投注',
        "lblCountdown": '下注!',
        "lblSetting": '系统设定',
        "lblRuleTitle": '规则说明',
        "lblRultGameTitle": '游戏规则',
        "lblRulePointTitle": '点数大小',
        "lblRuleBetTitle": '投注倍率',
        "connectServer" : "正在连接服务器",
        "reconnectServer" : "与服务器连接断开,正在尝试重新连接",
        "login" : "登入中…",
        "dataConfirm" : "确认资料中",
        "gameLoading" : "游戏载入中",
        "lblGameRuleContent1": '龙虎门是一种简单休闲的娱乐游戏，牌面大小不比花色，只比点数。',
        "lblGameRuleContent2": '使用2副牌进行游戏，开牌时先发一张牌至龙区域，再发一张牌至虎区域，对比牌面大者获胜。',
        "lblGameRuleContent3": '点数大小由A到K，A为最小点数，K为最大点数，点数相同即为和局。',
        "lblGameRuleContent4": '玩家可以通过猜龙与虎的输赢进行投注。',
        "lblGameRuleContent5": '若开和局，压龙与虎的压注会退回给玩家。',
        "lblGameRuleContent6": '如遇任何故障导致游戏结果无法被判定，此局游戏不成立。',
        "lblGameRuleContent7": '若因网路波动引发结算争议，将以系统结算结果为准，以确保公平公正。',
        "lblGameRuleNumber1": '1.',
        "lblGameRuleNumber2": '2.',
        "lblGameRuleNumber3": '3.',
        "lblGameRuleNumber4": '4.',
        "lblGameRuleNumber5": '5.',
        "lblGameRuleNumber6": '6.',
        "lblGameRuleNumber7": '7.',
        "lblGameRuleContent": '1.龙虎门是一种简单休闲的娱乐游戏，牌面大小不比花色，只比点数。\n2.使用2副牌进行游戏，开牌时先发一张牌至龙区域，再发一张牌至虎区域，对比牌面大者获胜。\n3.点数大小由A到K，A为最小点数，K为最大点数，点数相同即为和局。\n4.玩家可以通过猜龙与虎的输赢进行投注。\n5.若开和局，压龙与虎的压注会退回给玩家。\n6.如遇任何故障导致游戏结果无法被判定，此局游戏不成立。\n7.若因网路波动引发结算争议，将以系统结算结果为准，以确保公平公正。',
        "lblGameRuleContentTest": ['1.Dragon Tiger is a simple casual game, cards are ranked as in poker, except aces are always low and no color.\n2.A game use 2 deck with 52-cards, a single card is given to each of the Dragon and Player hands.\n3.The primary bet is on which hand will get the higher card\n4.Ties return both Dragon and Tiger bets to players.'],
        "lblPointRuleContent": 'K > Q > J > 10 > 9 > 8 > 7 > 6 > 5 > 4 > 3 > 2 > A',
        "lblBetContent": '「龙」为1:{0}\n「虎」为1:{2}\n「和」为1:{1}',
        "NextNewGame": '请等待新一局游戏开始',
        "AutoBetOn": '您已经开始自动下注',
        "AutoBetOff": '您已经取消自动下注',
        "lblNextTiger" : "下局虎",
        "lblNextDragon" : "下局龙",
        "lblOn" : "开",
        "lblOff" : "关",
        "lblMusic": '音乐',
        "lblSound": '音效',
        "lblBetDT" : "龙/虎",
        "lblMin" : "最低",
        "lblMax" : "最高",
        "GameDataError": "游戏资讯错误",
        "PlayerDataError" : "玩家资料错误",
        "PlayerCertificationError": "玩家验证资料错误",
        "BetBothDT" : "不可同时下注龙与虎",

        "ResultCodeMoneyNotEnough": '你的钱不够！',
        "ResultCodeIllegalBetType": '非法投注类型！',
        "ResultCodeIllegalBetMoney": '非法投注！',
        "ResultCodeBetTypeOverLimit": '您的投注类型超过限额！',
        "ResultCodeAlreadyBetOtherSide": '不可同时下注龙与虎！',
        "ResultCodeCarryMoneyNotEnough": '你携带的钱不够！',
        "ResultCodeNotBetStep": '不在下注步骤！',
        "ResultCodeInvalidArgument": '无效参数',
        'ResultCodeInternalError': '内部错误'
    }
};

if (!win.languages) {
    win.languages = {};
}

win.languages.zhCN = languages;
