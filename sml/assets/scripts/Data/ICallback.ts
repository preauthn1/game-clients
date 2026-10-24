/**
 * 網路通訊委派介面
 */
export interface webSocketCallback { (): void }
export interface webSocketReceiverCallback { (data: any): void }
export interface webSocketMsgCallback { (event: MessageEvent): void }
export interface wsConfig { url: string, pingTimeout: number, pongTimeout: number, reconnectTimeout: number, repeatLimit: number };

/**
 * 遊戲資料類型
 */
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

/**
 * 收到的資料格式
 */
export interface receiverData {
    mainId: number,
    subId: number,
    data: any
}
