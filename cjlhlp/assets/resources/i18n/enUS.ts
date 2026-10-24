
const win = window as any;

export const languages = {
    "labelText": {

        "lblStartBetting": 'A NEW GAME WILL START IN A MOMENT!',// 開獎結算(The result is coming out!)
        "lblStopBetting": 'STOP BETTING',// 停止下注(Stop Betting)
        "lblCountdown": 'PLACE YOUR BETS!',// 開始下注(Start Betting)

        "lblTotalPlay": 'TOTAL PLAY',
        "lblWin": 'WIN',

        "lblSpecialTitle": 'Special Bet',
        "lblSpecial1": 'Voisins\ndu Zero',
        "lblSpecial2": 'Orphelins',
        "lblSpecial3": 'Tiers du\nCylindre',

        "lblClear": 'CLEAR',
        "lblUndo": 'UNDO',
        "lblDouble": 'DOUBLE',
        "lblConfirm": 'CONFIRM',

        "lblOn": "ON",// 開(ON)
        "lblOff": "OFF",// 關(OFF)
        "lblMusic": 'Music',// 音樂(Music)
        "lblSound": 'Sound',// 音效(Sound)

        "RuleContent1": 'Numbers are divided in three colors: 16 red, 16 black and 1 green.',
        "RuleContent2": 'There are 7 different types of chips with different denominations.',
        "RuleContent3": 'Please select the chips value and decide if you want them to be placed on numbers you decide or on groups of numbers on the layout table.',
        "RuleContent4": 'When placing bets, a countdown will appear, when it reaches 0 the game will start and ft won\'t be possible to place other bets.',

        "RuleTableTitle1": 'CHIPS RANGE',
        "RuleTableTitle2": 'BET NAME',
        "RuleTableTitle3": 'MIN BET',
        "RuleTableTitle4": 'MAX BET',
        "RuleTableTitle5": 'ODDS',

        "RuleTableContent11": '1 Number Bet 0',
        "RuleTableContent12": 'Super Zero',

        "RuleTableContent21": '1 Number',
        "RuleTableContent22": 'Straight Up',

        "RuleTableContent31": '2 Number',
        "RuleTableContent32": 'Split',

        "RuleTableContent41": '3 Number',
        "RuleTableContent42": 'Street',

        "RuleTableContent51": '4 Number',
        "RuleTableContent52": 'Corner/Four',

        "RuleTableContent61": '6 Number',
        "RuleTableContent62": 'Line',

        "RuleTableContent71": '12',
        "RuleTableContent72": 'Column/Dozen',

        "RuleTableContent81": '18',
        "RuleTableContent82": 'RED/BLACK, ODD/EVEN,\n1-18/19-36',

        "GameDataError": "Game Data Error",
        "PlayerDataError": "Player Data Error",
        "PlayerCertificationError": "Player Certification Error",
        "connectServer": "Server Connecting",
        "reconnectServer": "Reconnect To The Server",
        "connectFailed": "Connected Failed",
        "login": "Login…",
        "dataConfirm": "Data Confirm",
        "gameLoading": "Game Launch",
        "NextNewGame": 'Please waiting for a new game',// 請等待下一局(Please wait for the next round)

        "overMaxLimit": 'Your bet amount can’t exceed the maximum limit',
        "betTimeOut": 'Bet times up ,Your bet will be returned.',

        "Roulette_ResultCodeSuccess": 'Bet send successfully',
        "Roulette_ResultCodeMoneyNotEnough": "Insufficient credits!",
        "Roulette_ResultCodeIllegalBetType": "Illegal bet type!",
        "Roulette_ResultCodeIllegalBetMoney": "Illegal Bet money!",
        "Roulette_ResultCodeBetTypeOverLimit": "Your bet type over limit!",
        "Roulette_ResultCodeAlreadyBetOtherSide": "You already bet on other side!",
        "Roulette_ResultCodeCarryMoneyNotEnough": "You don’t have enough credits,please go to purchase credits!",
        "Roulette_ResultCodeNotBetStep": "Do not place bets during the available time!",
        "Roulette_ResultCodeIllegalNumbers": "Parameter error",
        "Roulette_ResultCodeInvalidArgument": "Invalid Argument",
        "Roulette_ResultCodeInternalError": "Internal Error",
        "OrientationHint": "Please rotate the screen for the best experience."
    }
};

if (!win.languages) {
    win.languages = {};
}

win.languages.enUS = languages;
