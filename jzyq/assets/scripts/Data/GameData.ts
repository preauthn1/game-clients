/**
 * All Global Game enum
 */

import { Enum } from "cc";

export enum GameStatus {
    NONE = 0,
    LOADING = 1,
    LOGIN = 2,
    WAITING_NEXT_ROUND = 3,
    BET_START = 4,
    BET_COUNTDOWN = 5,
    BET_END = 6,
    SHOW_GAME_RESULT = 7,
    BET_SCORE = 8,
    BET_FINISH = 9,
    RELOADING = 10
}

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

Enum(GameStatus)

export enum DialogType {
    SETTING = 0,
    RULE = 1,
    TREND = 2
}

export enum GameDataType {
    UserData = 'UserData',
    BetData = 'BetData',
    BetRetData = 'BetRetData',
    UserBetRet = 'UserBetRet',
    RoundData = 'RoundData',
    GameState = 'GameState',
    GameResult = 'GameResult',
    SettingData = 'SettingData',
    TrandData = 'TrandData',
    ResultWinData = 'ResultWinData'
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
    JZYQ_ResultCodeSuccess = 0,               // 成功

    JZYQ_ResultCodeMoneyNotEnough = 100,      // 用戶金額不足
    JZYQ_ResultCodeIllegalBetType = 101,      // 非法的下注區域
    JZYQ_ResultCodeIllegalBetMoney = 102,     // 非法的下注金額
    JZYQ_ResultCodeBetTypeOverLimit = 104,    // 此類下注已達上限
    JZYQ_ResultCodeAlreadyBetOtherSide = 105, // 不能對壓
    JZYQ_ResultCodeCarryMoneyNotEnough = 106, // 攜帶金額低於限制
    JZYQ_ResultCodeNotBetStep = 107,          // 非下注狀態

    JZYQ_ResultCodeInvalidArgument = 9400,    // 參數錯誤
    JZYQ_ResultCodeInternalError = 9500,      // 內部錯誤
}
Enum(Game_ResultCode)

// 下注類型
export enum Game_BetType {
    JZYQ_BetTypeNone = 0,

    JZYQ_BetTypeGoal = 16,                    // 得分
    JZYQ_BetTypeGoalInside = 17,              // 得分-線內
    JZYQ_BetTypeGoalOutside = 18,             // 得分-線外

    JZYQ_BetTypeLost = 32,                    // 失分
    JZYQ_BetTypeLostInside = 33,              // 失分-線內
    JZYQ_BetTypeLostOutside = 34,             // 失分-線外
}
Enum(Game_BetType)