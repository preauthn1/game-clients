
const win = window as any;

export const languages = {
    "labeltext": {
        "lblGameNumber": 'Game Number',// 第XX局(Game Number)
        "lblBetLimit": 'Bet Limit',// 限紅(Bet Limit)
        "lblRoadMap": 'Road Map',// 路單(Road Map)
        "lblAutoBet": 'Auto Bet',// 續押(Auto Bet)
        "lblStartBetting": 'Next round is coming out!',// 開獎結算(The result is coming out!)
        "lblStopBetting": 'Stop Betting',// 停止下注(Stop Betting)
        "lblCountdown": 'Place your bet!',// 開始下注(Start Betting)
        "lblSetting": 'Setting',// 系統設置(Setting)
        "lblRuleTitle": 'Rule',
        "lblRultGameTitle": 'Game Rule',// 遊戲規則(Game Rule)
        "lblRulePointTitle": 'Hands Order',
        "lblRuleBetTitle": 'Pay Table',
        "lblGoal": 'Goal',// 得分(Goal)
        'lblLost': 'Lost',// 失分(Lost)
        'lblInside': 'Inside',// 線內(Inside)
        'lblOutside': 'Outside',// 線外(Outside)
        'lblGoalInside': 'Inside Goal',// 線內(Inside)
        'lblGoalOutside': 'Outside Goal',// 線外(Outside)
        'lblLostInside': 'Inside Lost',// 線內(Inside)
        'lblLostOutside': 'Outside Lost',// 線外(Outside)
        "lblOn" : "ON",// 開(ON)
        "lblOff" : "OFF",// 關(OFF)
        "lblMusic": 'Music',// 音樂(Music)
        "lblSound": 'Sound',// 音效(Sound)
        "lblMin" : "Min",// 最小(Min)
        "lblMax" : "Max",// 最大(Max)
        'lblBetType': 'Type of Bet',
        'lblPayoutOdds': 'Payout Odds',
        'lblRuleContent': 'The odds for each betting optionae displayed on the betting area accord-ingly.',

        "msgTopMinMax": '<color=#ffffff>Min : {0}</color><color=#e2c657> / </color> <color=#ffffff>Max : {1}</color>',
        "msgHistoryGameCount": 'from post {0} games.',
        "msgAutoBetOn": 'Auto Bet is on',
        "msgAutoBetOff": 'Auto Bet is off',

        "GameDataError": "Game Data Error",
        "PlayerDataError" : "Player Data Error",
        "PlayerCertificationError": "Player Certification Error",
        "connectServer" : "Server Connecting",
        "reconnectServer" : "Reconnect To The Server",
        "login" : "Login…",
        "dataConfirm" : "Data Confirm",
        "gameLoading" : "Game Launch",
        "NextNewGame": 'Please waiting for a new game',// 請等待下一局(Please wait for the next round)
        
        "JZYQ_ResultCodeMoneyNotEnough": 'Your money not enough!',
        "JZYQ_ResultCodeIllegalBetType": 'Illegal bet type!',
        "JZYQ_ResultCodeIllegalBetMoney": 'Illegal Bet money!',
        "JZYQ_ResultCodeBetTypeOverLimit": 'Your bet type over limit!',
        "JZYQ_ResultCodeAlreadyBetOtherSide": 'You already bet other side!',
        "JZYQ_ResultCodeCarryMoneyNotEnough": 'Your carry money not enough!',
        "JZYQ_ResultCodeNotBetStep": 'Not on bet step!',
        "JZYQ_ResultCodeInvalidArgument": 'Invalid Argument',
        "JZYQ_ResultCodeInternalError": 'Internal Error',
// 投注(Bet)
// 贏(Won)


// 你已經下注得分(You have already bet on Goal)
// 你已經下注失分(You have already bet on Lost)
// 開獎結算(The result is coming out!)
// 用戶(players)
// 你已達下注上限(Your bet amount can’t exceed the maximum limit)
// 金幣不足(insufficient credits)
// 攜帶金額不足,請先充值(You do’t have enough credits,please go to purchase credits)

    }
};

if (!win.languages) {
    win.languages = {};
}


win.languages.enUS = languages;
