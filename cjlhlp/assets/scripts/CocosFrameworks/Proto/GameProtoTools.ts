/**
 * JZYQ protobuf 加解密資料封包
 */

import { Roulette_GameMessageClassID } from "../../Proto/Game/Game_Roulette";
import * as RouletteGameMsg from '../../Proto/Game/GameMsg_Roulette'

export function getCustomGameEncodeMsg(subId: number, data: any): Uint8Array {
    switch (subId) {
        case Roulette_GameMessageClassID.RouletteBetID: // 下注ID C2S    Roulette_BetRequest
            return RouletteGameMsg.encodeRoulette_BetRequest(data);
        case Roulette_GameMessageClassID.RouletteBetClearID:    // 玩家清除已下的注 C2S Roulette_BetRequest
            return RouletteGameMsg.encodeRoulette_BetRequest(data);
    }
    return null;
}

export function getCustomGameDecodeMsg(subId: number, reciver: Uint8Array): any {
    let decodeData = null
    switch (subId) {
        case Roulette_GameMessageClassID.RouletteSettingID:              // 設置相關 S2C  Roulette_Setting
            decodeData = RouletteGameMsg.decodeRoulette_Setting(reciver);
            break;
        case Roulette_GameMessageClassID.RouletteStepID:                  // 階段ID S2C   Roulette_StepInfo
            decodeData = RouletteGameMsg.decodeRoulette_StepInfo(reciver);
            break;
        case Roulette_GameMessageClassID.RouletteRoundID:                 // 本局局數 S2C  Roulette_RoundInfo
            decodeData = RouletteGameMsg.decodeRoulette_RoundInfo(reciver);
            break;
        case Roulette_GameMessageClassID.RouletteBoardCastBetID:          // 廣播下注 S2C  Roulette_BoardCastBet
            decodeData = RouletteGameMsg.decodeRoulette_BoardCastBet(reciver);
            break;
        case Roulette_GameMessageClassID.RouletteGameResultID:            // 遊戲結果 S2C  Roulette_GameResult
            decodeData = RouletteGameMsg.decodeRoulette_GameResult(reciver);
            break;
        case Roulette_GameMessageClassID.RouletteGameResultWinID:         // 遊戲結果贏錢 S2C Roulette_GameResultWin
            decodeData = RouletteGameMsg.decodeRoulette_GameResultWin(reciver);
            break;
        case Roulette_GameMessageClassID.RouletteRecordsID:               // 歷史開獎結果 S2C Roulette_GameRecords
            decodeData = RouletteGameMsg.decodeRoulette_GameRecords(reciver);
            break;
        case Roulette_GameMessageClassID.RouletteRichestListID:           // 富豪榜列表 S2C Roulette_RichestList
            decodeData = RouletteGameMsg.decodeRoulette_RichestList(reciver);
            break;
        case Roulette_GameMessageClassID.RouletteLuckyStarListID:         // 幸運星列表 S2C Roulette_LuckyStarList
            decodeData = RouletteGameMsg.decodeRoulette_LuckyStarList(reciver);
            break;
        case Roulette_GameMessageClassID.RouletteBetRetID:                // 下注結果 S2C  Roulette_BetResponse
            decodeData = RouletteGameMsg.decodeRoulette_BetResponse(reciver);
            break;
        case Roulette_GameMessageClassID.RouletteBetClearRetID:           // 玩家清除已下的注 S2C Roulette_BetResponse
            decodeData = RouletteGameMsg.decodeRoulette_BetResponse(reciver);
            break;
        case Roulette_GameMessageClassID.RouletteBetAreaInfoID:           // 當前下注區域金額 S2C Roulette_BetAreaInfo
            decodeData = RouletteGameMsg.decodeRoulette_BetAreaInfo(reciver);
            break;
    }
    return decodeData;
}

