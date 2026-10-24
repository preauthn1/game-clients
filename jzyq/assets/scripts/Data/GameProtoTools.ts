/**
 * JZYQ protobuf 加解密資料封包
 */

import * as ProtoTool from '../Tools/ProtoTool';
import * as ICallback from './ICallback';
import { MessageBClassID } from '../Proto/BClass';
import { Packet } from '../Common/Packet';
import { JZYQ_GameMessageClassID } from '../Proto/Game/Game_JZYQ';
import * as CustomGameMsg from '../Proto/Game/GameMsg_JZYQ';

export function getProtoEncodeMsg(mainId: number, subId: number, data: any): ArrayBuffer {
    let encodeMsg = null;
    if (mainId === MessageBClassID.Game && subId > 10000) {
        let bytesDate = getCustomGameEncodeMsg(subId, data);
        encodeMsg = new Packet({
            mainId: mainId,
            subId: subId,
            data: bytesDate
        }).encode();
    } else {
        encodeMsg = ProtoTool.getProtoEncodeMsg(mainId, subId, data);
    }
    return encodeMsg;
    
}

function getCustomGameEncodeMsg(subId: number, data: any): Uint8Array {
    switch (subId) {
        case JZYQ_GameMessageClassID.JZYQBetID:       // 下注ID C2S    JZYQ_BetRequest
            return CustomGameMsg.encodeJZYQ_BetRequest(data);
        case JZYQ_GameMessageClassID.JZYQBetClearID:    // 玩家清除已下的注 C2S JZYQ_BetRequest
            return CustomGameMsg.encodeJZYQ_BetRequest(data);
    }
    return null;
}

export function getProtoDecodeMsg(mainId: number, subId: number, reciver: Uint8Array): ICallback.reciverData {
    let decodeData = null;
    if (mainId === MessageBClassID.Game && subId > 10000) {
        decodeData = getCustomGameDecodeMsg(subId, reciver);
    } else {
        decodeData = ProtoTool.getProtoDecodeMsg(mainId, subId, reciver);
    }
    return {
        mainId: mainId,
        subId: subId,
        data: decodeData.data ?? decodeData
    };
}

function getCustomGameDecodeMsg(subId: number, reciver: Uint8Array): any {
    let decodeData = null
    switch (subId) {
        case JZYQ_GameMessageClassID.JZYQSettingID:  // 設置相關 S2C  JZYQ_Setting
            decodeData = CustomGameMsg.decodeJZYQ_Setting(reciver);
            break;            
        case JZYQ_GameMessageClassID.JZYQStepID:     // 階段ID S2C   JZYQ_StepInfo
            decodeData = CustomGameMsg.decodeJZYQ_StepInfo(reciver);
            break;
        case JZYQ_GameMessageClassID.JZYQRoundID:     // 本局局數 S2C  JZYQ_RoundInfo
            decodeData = CustomGameMsg.decodeJZYQ_RoundInfo(reciver);
            break;
        case JZYQ_GameMessageClassID.JZYQBoardCastBetID:   // 廣播下注 S2C  JZYQ_BoardCastBet
            decodeData = CustomGameMsg.decodeJZYQ_BoardCastBet(reciver);
            break;
        case JZYQ_GameMessageClassID.JZYQGameResultID:   // 遊戲結果 S2C  JZYQ_GameResult
            decodeData = CustomGameMsg.decodeJZYQ_GameResult(reciver);
            break;
        case JZYQ_GameMessageClassID.JZYQGameResultWinID:  // 遊戲結果贏錢 S2C JZYQ_GameResultWin
            decodeData = CustomGameMsg.decodeJZYQ_GameResultWin(reciver);
            break;
        case JZYQ_GameMessageClassID.JZYQRecordsID:      // 歷史開獎結果 S2C JZYQ_GameRecords
            decodeData = CustomGameMsg.decodeJZYQ_GameRecords(reciver);
            break;
        case JZYQ_GameMessageClassID.JZYQRichestListID:       // 富豪榜列表 S2C JZYQ_RichestList
            decodeData = CustomGameMsg.decodeJZYQ_RichestList(reciver);
            break;
        case JZYQ_GameMessageClassID.JZYQLuckyStarListID:    // 幸運星列表 S2C JZYQ_LuckyStarList
            decodeData = CustomGameMsg.decodeJZYQ_LuckyStarList(reciver);
            break;
        case JZYQ_GameMessageClassID.JZYQBetRetID:          // 下注結果 S2C  JZYQ_BetResponse
            decodeData = CustomGameMsg.decodeJZYQ_BetResponse(reciver);
            break;
        case JZYQ_GameMessageClassID.JZYQBetClearRetID:     // 玩家清除已下的注 S2C JZYQ_BetResponse
            decodeData = CustomGameMsg.decodeJZYQ_BetResponse(reciver);
            break;
    }
    return decodeData;
}