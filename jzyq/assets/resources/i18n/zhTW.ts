
const win = window as any;

export const languages = {
    "labeltext": {
        "lblGameNumber": '局數',
        "lblBetLimit": '限红',
        "lblRoadMap": '路單',
        "lblAutoBet": '自動下注',
        "lblStartBetting": '下一局即將開始！',
        "lblStopBetting": '停止下注',
        "lblCountdown": '開始下注!',
        "lblSetting": '系統設置',
        "lblRuleTitle": '規則說明',
        "lblRultGameTitle": '遊戲規則',
        "lblRulePointTitle": '點數大小',
        "lblRuleBetTitle": '投注倍率',
        "lblGoal": '得分',// 得分(Goal)
        'lblLost': '失分',// 失分(Lost)
        'lblInside': '線內',// 線內(Inside)
        'lblOutside': '線外',// 線外(Outside)
        'lblGoalInside': '線內得分',// 線內(Inside)
        'lblGoalOutside': '線外得分',// 線外(Outside)
        'lblLostInside': '線內失分',// 線內(Inside)
        'lblLostOutside': '線外失分',// 線外(Outside)
        "lblOn" : "開",
        "lblOff" : "關",
        "lblMusic": '音樂',
        "lblSound": '音效',
        "lblMin" : "最低",
        "lblMax" : "最高",
        'lblBetType': '投注類型',
        'lblPayoutOdds': '賠率',
        'lblRuleContent': '每個投注選項的賠率相應地顯示在投注區.',

        "msgTopMinMax": '<color=#ffffff>最低 : {0}</color><color=#e2c657> / </color> <color=#ffffff>最高 : {1}</color>',
        "msgHistoryGameCount": '來自最近 {0} 局數.',
        "msgAutoBetOn": '您已經開始自動下注',
        "msgAutoBetOff": '您已經取消自動下注',

        "GameDataError": "遊戲資訊錯誤",
        "PlayerDataError" : "玩家資料錯誤",
        "PlayerCertificationError": "玩家驗證資料錯誤",
        "connectServer" : "正在連接服務器",
        "reconnectServer" : "與服務器連接斷開,正在嘗試重新連接",
        "login" : "登入中…",
        "dataConfirm" : "確認資料中",
        "gameLoading" : "遊戲載入中",
        "NextNewGame": '請等待新一局\n遊戲開始',

        "JZYQ_ResultCodeMoneyNotEnough": '你的錢不夠！',
        "JZYQ_ResultCodeIllegalBetType": '非法投注類型！',
        "JZYQ_ResultCodeIllegalBetMoney": '非法投注！',
        "JZYQ_ResultCodeBetTypeOverLimit": '您的投注類型超過限額！',
        "JZYQ_ResultCodeAlreadyBetOtherSide": '你已經在另一邊下注了！',
        "JZYQ_ResultCodeCarryMoneyNotEnough": '你攜帶的錢不夠！',
        "JZYQ_ResultCodeNotBetStep": '不在下注步驟！',
        "JZYQ_ResultCodeInvalidArgument": '無效參數',
        "JZYQ_ResultCodeInternalError": '內部錯誤'



// 投注(Bet)
// 贏(Won)
// 路單(Road Map)

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

win.languages.zhTW = languages;
