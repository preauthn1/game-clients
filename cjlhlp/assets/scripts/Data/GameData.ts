/**
 * All Global Game enum
 */

import { Enum } from "cc";

export const GameStatusToString: { [key: number]: string } = {
    0: 'NONE',
    1: 'LOADING',
    2: 'LOGIN',
    3: 'WAITING_NEXT_ROUND',
    4: 'BET_START',
    5: 'BET_COUNTDOWN',
    6: 'BET_END',
    7: 'SHOW_GAME_RESULT',
    8: 'BET_SCORE',
    9: 'BET_FINISH',
    10: 'RELOADING'
};


export enum DialogType {
    SETTING = 0,
    RULE = 1,
    TREND = 2
}



export enum SoundType {
    BUTTON_CLICK = 0,
    START_BETTING = 1,
    END_BETTING = 2,
    SHOW_CARD = 3,
    DEAL_CARD = 4,
    SHOW_RESULT_FIRST = 5,
    SHOW_RESULT_FINISH = 6,
    ADD_CAST = 7
}

export enum Game_ResultCode {
    Roulette_ResultCodeSuccess = 0,               // 成功
    Roulette_ResultCodeMoneyNotEnough = 100,      // 用戶金額不足
    Roulette_ResultCodeIllegalBetType = 101,      // 非法的下注區域
    Roulette_ResultCodeIllegalBetMoney = 102,     // 非法的下注金額
    Roulette_ResultCodeBetTypeOverLimit = 104,    // 此類下注已達上限
    Roulette_ResultCodeAlreadyBetOtherSide = 105, // 不能對壓
    Roulette_ResultCodeCarryMoneyNotEnough = 106, // 攜帶金額低於限制
    Roulette_ResultCodeNotBetStep = 107,          // 非下注狀態
    Roulette_ResultCodeIllegalNumbers = 108,        //非法的下注號碼組
    Roulette_ResultCodeInvalidArgument = 9400,    // 參數錯誤
    Roulette_ResultCodeInternalError = 9500,      // 內部錯誤
}
Enum(Game_ResultCode)

// 下注類型
export enum Game_BetType {
    Roulette_BetTypeNone = 0,
    Roulette_BetTypeOdd = 1,
    Roulette_BetTypeEven = 2,
    Roulette_BetTypeRed = 3,
    Roulette_BetTypeBlack = 4,
    Roulette_BetTypeSmall = 5,
    Roulette_BetTypeBig = 6,
    Roulette_BetTypeFirst12 = 7,
    Roulette_BetTypeSecond12 = 8,
    Roulette_BetTypeThird12 = 9,
    Roulette_BetTypeFirstRow = 10,
    Roulette_BetTypeSecondRow = 11,
    Roulette_BetTypeThirdRow = 12,
    Roulette_BetTypeOneNumber = 13,
    Roulette_BetTypeTwoNumber = 14,
    Roulette_BetTypeThreeNumber = 15,
    Roulette_BetTypeFourNumber = 16,
    Roulette_BetTypeSixNumber = 17,
    Roulette_BetTypeSuperZero = 18,
}
Enum(Game_BetType)