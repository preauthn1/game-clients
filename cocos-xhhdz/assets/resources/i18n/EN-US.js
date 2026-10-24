'use strict';

if (! window.i18n) {
    window.i18n={};
}

if (! window.i18n.languages) {
    window.i18n.languages={};
}

window.i18n.languages['EN-US']={
    // write your key value pairs here
    "label_text" : {
        "局数":"<size=18><color=#FFF7AD>Game Number </c><br/><color=#Ffffff>####</color></size>",
        "限红" : "Bet Limit",
        "携带金额不足" : "You don't have enough credits,please go to purchase credits.",
        "下局黑" : "Next Black",
        "下局红" : "Next Red",
        "黑" : "Black",
        "红" : "Red",
        "总数" : "Total",
        "红黑方" : "Red/Black",
        //後面不用掛LocalizedLabel但還是要加入列表讓JS讀取語系資料再來產生對應文字
        "幸运一击" : "Lucky Strike",
        "最小" : "Min:####",
        "最大" : "Max:####",
        "自动成功" : "Auto is on，It will auto bet after this.",
        "结算信息" : "Result",
        "资料错误" : "Data Error",
        "玩家资料错误" : "Player Data Error",
        "玩家验证资料错误" : "Player Certification Error",
        "游戏资讯错误" : "Game Data Error",
        "正在连接服务器" : "Server Connecting ...",
        "登入中" : "Login …",
        "确认资料中" : "Data Confirm",
        "载入中" : "Loading ...",
        "游戏载入中" : "Game Launch ...",
        "等待游戏开始" : "Waiting For Game Start ...",
        "正在尝试重新连接" : "Reconnect To The Server ...",
        "当前不能下注" : "You can't bet now",
        "当前下注倍数" : "Current Bet ####",
        "请前往充值" : "You need to have #### credits to bet,please go to purchase credits.",
        "携带金额不足请先充值" : "",
        "前往充值后再来" : "You need to have #### credits to bet,please go to purchase credits.",
        "退还押注成功" : "Return bet success",
        "下注类型错误" : "Bet type error",
        "请等待新一局游戏开始" : "Please waiting for a new game",
        "金币不足" : "Insufficient credits",
        "总注数超过上限" : "Maximum Bet Limit",
        "身上金币低于入场金额" : "not enouph chip, you will return to lobby.",
        "您已经开启自动下注" : "Auto bet on",
        "您已经取消自动下注" : "Auto bet off",
        "开" : "on",
        "关" : "off",
        "对子" : "Pairs",
        "和" : "Tie",
        "最低投注" : "Minimum bets",
        "最高投注" : "Maximum bets",
        "亿" : "M",
        "万" : "K",
        "不可同时下注红与黑" : "You can't bet both Black and Red",
        "清理次数超过上限，清理失败":"清理次数超过上限，清理失败",
        "与服务器连接断开,正在尝试重新连接..." : "Reconnect To The Server ...",
		"您的账号在别处登录,您已被强制下线." : "Some one login your account,You have been logged out.",
		"服务器错误." : "Server Error",
    }
};