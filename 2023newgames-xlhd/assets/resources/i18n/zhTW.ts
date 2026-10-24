
const win = window as any;

export const languages = {
    "labeltext": {
        "lblGameNumber": '局數',
        "lblBetLimit": '限红',
        "lblDragonTitle": '龍',
        "lblTigerTitle": '虎',
        "lblTieTitle": '和',
        "lblTotal" : "總數",
        "lblTopMinMax": '<color=#ffffff>最低 : {0}</color><color=#e2c657> / </color> <color=#ffffff>最高 : {1}</color>',
        "lblAutoBet": '自動下注',
        "lblStartBetting": '開始下注',
        "lblStopBetting": '停止下注',
        "lblCountdown": '下注!',
        "lblSetting": '系統設定',
        "lblRuleTitle": '規則說明',
        "lblRultGameTitle": '遊戲規則',
        "lblRulePointTitle": '點數大小',
        "lblRuleBetTitle": '投注倍率',
        "connectServer" : "正在連接服務器",
        "reconnectServer" : "與服務器連接斷開,正在嘗試重新連接",
        "login" : "登入中…",
        "dataConfirm" : "確認資料中",
        "gameLoading" : "遊戲載入中",
        "lblGameRuleContent1": '龍虎鬥是一種簡單休閒的娛樂遊戲，牌面大小不比花色，只比點數。',
        "lblGameRuleContent2": '使用2副牌進行遊戲，開牌時先發一張牌至龍區域，再發一張牌至虎區域，對比牌面大者獲勝。',
        "lblGameRuleContent3": '點數大小由A到K，A為最小點數，K為最大點數，點數相同即為和。',
        "lblGameRuleContent4": '玩家可通過猜龍與虎的輸贏進行投注。',
        "lblGameRuleContent5": '若開和局，壓龍虎的壓注會退回給玩家。',
        "lblGameRuleNumber1": '1.',
        "lblGameRuleNumber2": '2.',
        "lblGameRuleNumber3": '3.',
        "lblGameRuleNumber4": '4.',
        "lblGameRuleNumber5": '5.',
        "lblGameRuleContent": '\n\n\n\n',
        "lblPointRuleContent": 'K > Q > J > 10 > 9 > 8 > 7 > 6 > 5 > 4 > 3 > 2 > A',
        "lblBetContent": '「龍」為1:{0}\n「虎」為1:{2}\n「和」為1:{1}',
        "NextNewGame": '請等待新一局遊戲開始',
        "AutoBetOn": '您已經開始自動下注',
        "AutoBetOff": '您已經取消自動下注',
        "lblNextTiger" : "下局虎",
        "lblNextDragon" : "下局龍",
        "lblOn" : "開",
        "lblOff" : "關",
        "lblMusic": '音樂',
        "lblSound": '音效',
        "lblBetDT" : "龍/虎",
        "lblMin" : "最低",
        "lblMax" : "最高",
        "GameDataError": "遊戲資訊錯誤",
        "PlayerDataError" : "玩家資料錯誤",
        "PlayerCertificationError": "玩家驗證資料錯誤",
        "BetBothDT" : "不可同時下注龍與虎",

        "ResultCodeMoneyNotEnough": '你的錢不夠！',
        "ResultCodeIllegalBetType": '非法投注類型！',
        "ResultCodeIllegalBetMoney": '非法投注！',
        "ResultCodeBetTypeOverLimit": '您的投注類型超過限額！',
        "ResultCodeAlreadyBetOtherSide": '不可同時下注龍與虎！',
        "ResultCodeCarryMoneyNotEnough": '你攜帶的錢不夠！',
        "ResultCodeNotBetStep": '不在下注步驟！',
        "ResultCodeInvalidArgument": '無效參數',
        "ResultCodeInternalError": '內部錯誤'
    }
};

if (!win.languages) {
    win.languages = {};
}

win.languages.zhTW = languages;
