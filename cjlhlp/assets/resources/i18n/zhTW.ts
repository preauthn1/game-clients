
const win = window as any;

export const languages = {
    "labelText": {

        "lblStartBetting": '新的遊戲即將開始！',
        "lblStopBetting": '停止下注',
        "lblCountdown": '開始下注!',

        "lblTotalPlay": '總下注金',
        "lblWin": '贏',


        "lblSpecialTitle": '特殊下注',
        "lblSpecial1": '輪盤\n零盤注',
        "lblSpecial2": '孤注',
        "lblSpecial3": '輪盤\n下角注',

        "lblClear": '清除',
        "lblUndo": '回復',
        "lblDouble": '加倍',
        "lblConfirm": '確認',

        "lblOn": "開",
        "lblOff": "關",
        "lblMusic": '音樂',
        "lblSound": '音效',

        "RuleContent1": '數字分為三種顏色：16個紅色、16個黑色和1個綠色。',
        "RuleContent2": '有7種不同類型面值的籌碼。',
        "RuleContent3": '請選擇籌碼值，決定是否要將它們放置在您決定的號碼或佈局表上的號碼組上。',
        "RuleContent4": '下注時會進行倒計時，當倒計時為0時遊戲開始，無法進行其他投注。',

        "RuleTableTitle1": '籌碼範圍',
        "RuleTableTitle2": '投注名稱',
        "RuleTableTitle3": '最低下注額',
        "RuleTableTitle4": '最高下注額',
        "RuleTableTitle5": '賠率',

        "RuleTableContent11": '超級0號',
        "RuleTableContent12": '投注於「0」數字上',

        "RuleTableContent21": '單一數字',
        "RuleTableContent22": '投注於一個數字的格上',

        "RuleTableContent31": '兩個字組',
        "RuleTableContent32": '投注於兩個數字之間的線上',

        "RuleTableContent41": '三個字組合',
        "RuleTableContent42": '投注於橫行三個數字與外圍投注區的線上',

        "RuleTableContent51": '四個字組合',
        "RuleTableContent52": '投注於四個數字交接之間的點上',

        "RuleTableContent61": '六個字組合',
        "RuleTableContent62": '投注於兩行橫行數字外圍投注區的交接點上',

        "RuleTableContent71": '12個字組合',
        "RuleTableContent72": 'Column: 可投注開出號碼屬於第一(1,4,7,10...)、二(2,5,8,11...)或三(3,6,9,12...)直行\nDozen: 可投注開出號碼屬於前(1-12)、中(13-24)或後(25-36)12個號碼',

        "RuleTableContent81": '18個字組合',
        "RuleTableContent82": '紅或黑、奇或偶數、大或小(1-18、19-36)',

        "GameDataError": "遊戲資訊錯誤",
        "PlayerDataError": "玩家資料錯誤",
        "PlayerCertificationError": "玩家驗證資料錯誤",
        "connectServer": "正在連接服務器",
        "reconnectServer": "與服務器連接斷開,正在嘗試重新連接",
        "connectFailed": "連線失敗",
        "login": "登入中…",
        "dataConfirm": "確認資料中",
        "gameLoading": "遊戲載入中",
        "NextNewGame": '請等待新一局\n遊戲開始',

        "overMaxLimit": '你已達下注上限',
        "betTimeOut": '投注時間到，您的投注將被退回。',

        "Roulette_ResultCodeSuccess": '投注發送成功',
        "Roulette_ResultCodeMoneyNotEnough": "金幣不足！",
        "Roulette_ResultCodeIllegalBetType": "非法投注類型！",
        "Roulette_ResultCodeIllegalBetMoney": "非法投注！",
        "Roulette_ResultCodeBetTypeOverLimit": "您的投注類型超過限額！",
        "Roulette_ResultCodeAlreadyBetOtherSide": "你已在相對應位置下注！",
        "Roulette_ResultCodeCarryMoneyNotEnough": "攜帶金額不足,請先充值！",
        "Roulette_ResultCodeNotBetStep": "不在可下注時間下注！",
        "Roulette_ResultCodeIllegalNumbers": "參數錯誤",
        "Roulette_ResultCodeInvalidArgument": "無效參數",
        "Roulette_ResultCodeInternalError": "內部錯誤",
        "OrientationHint": "請旋轉螢幕以獲得最佳體驗。"
    }
};

if (!win.languages) {
    win.languages = {};
}

win.languages.zhTW = languages;
