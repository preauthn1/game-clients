
const win = window as any;

export const languages = {
    "labeltext": {
        "lblGameNumber": 'Game Number',
        "lblBetLimit": 'Bet Limit',
        "lblDragonTitle": 'Dragon',
        "lblTigerTitle": 'Tiger',
        "lblTieTitle": 'Tie',
        "lblTotal" : "Total",
        "lblTopMinMax": '<color=#ffffff>Min : {0}</color><color=#e2c657> / </color> <color=#ffffff>Max : {1}</color>',
        "lblAutoBet": 'Auto Bet',
        "lblStartBetting": 'Start Betting',
        "lblStopBetting": 'Stop Betting',
        "lblCountdown": 'Place your bet!',
        "lblSetting": 'Setting',
        "lblRuleTitle": 'Rule',
        "lblRultGameTitle": 'Game Rule',
        "lblRulePointTitle": 'Hands Order',
        "lblRuleBetTitle": 'Pay Table',
        "connectServer" : "Server Connecting",
        "reconnectServer" : "Reconnect To The Server",
        "login" : "Login…",
        "dataConfirm" : "Data Confirm",
        "gameLoading" : "Game Launch",
        "lblGameRuleContent1": 'Dragon Tiger is a simple casual entertainment game where the rank of the cards is determined solely by their face value, not their suit.',
        "lblGameRuleContent2": 'The game is played with two decks of cards. When the cards are dealt, one card is placed in the Dragon area and another card is placed in the Tiger area. The winner is determined by comparing the ranks of the two cards.',
        "lblGameRuleContent3": 'The ranks of the cards are from A to K, with A being the lowest rank and K being the highest rank. If the ranks are the same, it results in a tie.',
        "lblGameRuleContent4": 'Players can place bets by guessing the outcome of the Dragon and Tiger comparison.',
        "lblGameRuleContent5": 'In the event of a tie, the bets placed on Dragon and Tiger are returned to the players.',
        "lblGameRuleContent6": 'If any malfunction occurs that prevents the determination of the game result, the game for that round is void.',
        "lblGameRuleContent7": 'If there is a dispute over settlement due to network fluctuations, the system settlement result will be considered as the final and fair outcome.',
        "lblGameRuleNumber1": '1.',
        "lblGameRuleNumber2": '2.',
        "lblGameRuleNumber3": '3.',
        "lblGameRuleNumber4": '4.',
        "lblGameRuleNumber5": '5.',
        "lblGameRuleNumber6": '6.',
        "lblGameRuleNumber7": '7.',
        "lblGameRuleContent": '1.Dragon Tiger is a simple casual entertainment game where the rank of the cards is determined solely by their face value, not their suit.\n2.The game is played with two decks of cards. When the cards are dealt, one card is placed in the Dragon area and another card is placed in the Tiger area. The winner is determined by comparing the ranks of the two cards.\n3.The ranks of the cards are from A to K, with A being the lowest rank and K being the highest rank. If the ranks are the same, it results in a tie.\n4.Players can place bets by guessing the outcome of the Dragon and Tiger comparison.\n5.In the event of a tie, the bets placed on Dragon and Tiger are returned to the players.\n6.If any malfunction occurs that prevents the determination of the game result, the game for that round is void.\n7.If there is a dispute over settlement due to network fluctuations, the system settlement result will be considered as the final and fair outcome.',
        "lblGameRuleContentTest": '1.Dragon Tiger is a simple casual game, cards are ranked as in poker, except aces are always low and no color.\n2.A game use 2 deck with 52-cards, a single card is given to each of the Dragon and Player hands.\n3.The primary bet is on which hand will get the higher card\n4.Ties return both Dragon and Tiger bets to players.',
        "lblPointRuleContent": 'K > Q > J > 10 > 9 > 8 > 7 > 6 > 5 > 4 > 3 > 2 > A',
        "lblBetContent": '【Dragon】 x{0}\n【Tiger】 x{2}\n【Tie】 x{1}',
        "NextNewGame": 'Please waiting for a new game',
        "AutoBetOn": 'Auto Bet is on',
        "AutoBetOff": 'Auto Bet is off',
        "lblNextTiger" : "Next\nTiger",
        "lblNextDragon" : "Next\nDragon",
        "lblOn" : "ON",
        "lblOff" : "OFF",
        "lblMusic": 'Music',
        "lblSound": 'Sound',
        "lblBetDT" : "Dragon/Tiger",
        "lblMin" : "Min",
        "lblMax" : "Max",
        "GameDataError": "Game Data Error",
        "PlayerDataError" : "Player Data Error",
        "PlayerCertificationError": "Player Certification Error",
        "BetBothDT" : "You can't bet both Dragon and Tiger",

        "ResultCodeMoneyNotEnough": 'Your money not enough!', //-1
        "ResultCodeIllegalBetType": 'Illegal bet type!',    //-2
        "ResultCodeIllegalBetMoney": 'Illegal Bet money!',  
        "ResultCodeBetTypeOverLimit": 'Your bet type over limit!',  //-4
        "ResultCodeAlreadyBetOtherSide": "You can't bet both Dragon and Tiger!", //-5
        "ResultCodeCarryMoneyNotEnough": 'Your carry money not enough!',    //-6
        "ResultCodeNotBetStep": 'Not on bet step!',
        "ResultCodeInvalidArgument": 'Invalid Argument',
        "ResultCodeInternalError": 'Internal Error',
    }
};

if (!win.languages) {
    win.languages = {};
}


win.languages.enUS = languages;
