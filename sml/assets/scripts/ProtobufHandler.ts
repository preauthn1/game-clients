/**
 * Protobuf處理器
 */
import * as ProtoTool from './Tools/ProtoTool';
import * as GameMsgSML from './Proto/Msg/GameMsg_SML';
import * as ICallback from './Data/ICallback';
import { SuperToolAddAssignReward } from './Proto/Msg/gameMsg';
import { Packet } from './Common/Packet';
import { MessageBClassID } from './Proto/BClass';
import { SML_Bet } from './Proto/Msg/GameMsg_SML';
import { SML_GameMessageClassID } from './Proto/Game_SML';


export function getProtoEncodeMsg(mainId: number, subId: number, data: any): ArrayBuffer {
    return getEncodeMsg(mainId, subId, data);
}

export function getProtoDecodeMsg(mainId: number, subId: number, receiver: Uint8Array): ICallback.receiverData {
    return getDecodeMsg(mainId, subId, receiver);
}

function getEncodeMsg(mainId: number, subId: number, data: any): ArrayBuffer {
    var bytesData = null;
    switch (mainId) {
        case MessageBClassID.Game:
            if (subId > 10000) {
                switch (subId) {
                    case SML_GameMessageClassID.SMLBetID:  //下注ID C2S    SML_BetRequest
                        bytesData = GameMsgSML.encodeSML_BetRequest(data);
                        break;
                    case SML_GameMessageClassID.SMLBetClearID:// 玩家清除已下的注 C2S SML_BetRequest
                        bytesData = GameMsgSML.encodeSML_BetRequest(data);
                        break;
                }
            }
            break;
    }

    if (bytesData == null) { 
        return ProtoTool.getProtoEncodeMsg(mainId, subId, data);
    } else {
        return new Packet({
            mainId: mainId,
            subId: subId,
            data: bytesData
        }).encode();
    };
}

function getDecodeMsg(mainId: number, subId: number, receiver: Uint8Array): any {
    let decodeData = null;
    switch (mainId) {
        case MessageBClassID.Game:
            if (subId > 10000) {
                switch (subId) {
                    case SML_GameMessageClassID.SMLSettingID:// 設置相關 S2C  SML_Setting
                        decodeData = GameMsgSML.decodeSML_Setting(receiver);
                        break;
                    case SML_GameMessageClassID.SMLStepID:// 階段ID S2C   SML_StepInfo
                        decodeData = GameMsgSML.decodeSML_StepInfo(receiver);
                        break;
                    case SML_GameMessageClassID.SMLRoundID:// 本局局數 S2C  SML_RoundInfo
                        decodeData = GameMsgSML.decodeSML_RoundInfo(receiver);
                        break;
                    case SML_GameMessageClassID.SMLBoardCastBetID:// 廣播下注 S2C  SML_BoardCastBet
                        decodeData = GameMsgSML.decodeSML_BoardCastBet(receiver);
                        break;
                    case SML_GameMessageClassID.SMLGameResultID:// 遊戲結果 S2C  SML_GameResult
                        decodeData = GameMsgSML.decodeSML_GameResult(receiver);
                        break;
                    case SML_GameMessageClassID.SMLGameResultWinID:// 遊戲結果贏錢 S2C SML_GameResultWin,
                        decodeData = GameMsgSML.decodeSML_GameResultWin(receiver);
                        break;
                    case SML_GameMessageClassID.SMLRecordsID:// 歷史開獎結果 S2C SML_GameRecords
                        decodeData = GameMsgSML.decodeSML_GameRecords(receiver);
                        break;
                    case SML_GameMessageClassID.SMLRichestListID:// 富豪榜列表 S2C SML_RichestList
                        decodeData = GameMsgSML.decodeSML_RichestList(receiver);
                        break;
                    case SML_GameMessageClassID.SMLLuckyStarListID:// 幸運星列表 S2C SML_LuckyStarList
                        decodeData = GameMsgSML.decodeSML_LuckyStarList(receiver);
                        break;
                    case SML_GameMessageClassID.SMLBetRetID:// 下注結果 S2C  SML_BetResponse
                        decodeData = GameMsgSML.decodeSML_BetResponse(receiver);
                        break;
                    case SML_GameMessageClassID.SMLBetClearRetID:// 玩家清除已下的注 S2C SML_BetResponse
                        decodeData = GameMsgSML.decodeSML_BetResponse(receiver);
                        break;
                }
            }
            break;
    }
    
    if (decodeData == null) { 
        return ProtoTool.getProtoDecodeMsg(mainId, subId, receiver);
    } else {
        return { mainId: mainId, subId: subId, data: decodeData };
    }
}