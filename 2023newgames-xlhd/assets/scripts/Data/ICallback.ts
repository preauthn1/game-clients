/**
 * Global variable
 * Interface All Callback
 * In Game Use Enum Data
 */

import { Enum } from "cc"

export interface webSocketCallback { (): void }
export interface webSocketRevicerCallback { (data: any): void }
export interface webSocketMsgCallback { (event: MessageEvent): void }
export interface wsConfig { url: string, pingTimeout: number, pongTimeout: number, reconnectTimeout: number, repeatLimit: number };

export interface gameStatusCallback { ( status: GameStatus): void }
export interface betCoinCallback{ (coin: number ): void }

export enum GameStatus {
    NONE = 0,
    LOADING = 1,
    LOGIN = 2,
    WAITING_NEXT_ROUND = 3,
    BET_START = 4,
    BET_COUNTDOWN = 5,
    BET_END = 6,
    SHOW_POKER = 7,
    BET_SCORE = 8,
    BET_FINISH = 9,
    RELOADING = 10
}

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
    RoundData = 'RoundData',
    GameState = 'GameState',
    PokerResult = 'PokerResult',
    SettingData = 'SettingData',
    TrandData = 'TrandData',
    ResultWinData = 'ResultWinData'
}

export interface reciverData {
    mainId: number,
    subId: number,
    data: any
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