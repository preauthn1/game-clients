/**
 * Global variable
 * Interface All Callback
 **/
// import { CoinTemplate } from "../template/CoinTemplate"

import { GameStatus } from "../CocosFrameworks/Data/BaseGameDataManager";

export interface webSocketCallback { (): void }
export interface webSocketRevicerCallback { (data: any): void }
export interface webSocketMsgCallback { (event: MessageEvent): void }
export interface wsConfig { url: string, pingTimeout: number, pongTimeout: number, reconnectTimeout: number, repeatLimit: number };

export interface gameStatusCallback { ( status: GameStatus): void }
// export interface betCoinCallback{ (template: CoinTemplate ): void }

export interface reciverData {
    mainId: number,
    subId: number,
    data: any
}

