/**
 * 所有Protobuf Data 加解密工具
 */

import { MessageBClassID } from "../Proto/BClass";
import { PlatformCommonClassID } from "../Proto/Common";
import { GameMessageClassID } from "../Proto/Game";
import { GameRoomClassID } from "../Proto/GameRoom";
import { LHD_GameMessageClassID } from "../Proto/Game_LHD";
import * as CommonMsg from '../Proto/Msg/commonMsg';
import * as GameMsg from '../Proto/Msg/gameMsg';
import * as GameRoomMsg from '../Proto/Msg/gameRoomMsg';
import * as GameMsg_LHD from '../Proto/Msg/gameMsg_LHD';
import * as HttpMsg_LHD from '../Proto/Msg/httpMsg_LHD';
import { Packet } from "../Common/Packet";
import Long from 'long';
import * as ICallback from '../Data/ICallback';

export function getProtoEncodeMsg(mainId: number, subId: number, data: any): ArrayBuffer {
    let bytesData = null;
    switch (mainId) {
        case MessageBClassID.Common: //一般消息
            bytesData = getCommonEncodeMsg(subId, data);
            break;
        case MessageBClassID.GameRoom: //遊戲房間消息
            bytesData = getGameRoomEncodeMsg(subId, data);
            break;
        case MessageBClassID.Game: //遊戲消息 > 10000 use getLHDGameMsg, 
            bytesData = subId > 10000 ? getLHDGameEncodeMsg(subId, data) : getGameEncodeMsg(subId, data);
            break;
        case MessageBClassID.NotifyServer: //不需使用
            console.log('getProtoEncodeMsg MessageBClassID.NotifyServer');
            break;
        case MessageBClassID.Hall: //不需使用
            console.log('getProtoEncodeMsg MessageBClassID.Hall');
            break;
        case MessageBClassID.DBServer: //不需使用
            console.log('getProtoEncodeMsg MessageBClassID.DBServer');
            break;
        case MessageBClassID.NewByDBServer:    //不需使用
            console.log('getProtoEncodeMsg MessageBClassID.NewByDBServer');
            break;
        case MessageBClassID.ServerMgm:    //不需使用
            console.log('getProtoEncodeMsg MessageBClassID.ServerMgm');
            break;
    }
    return new Packet({
        mainId: mainId,
        subId: subId,
        data: bytesData
    }).encode();
}

function getCommonEncodeMsg(subId: number, data: any): Uint8Array {
    switch (subId) {
        case PlatformCommonClassID.TipMessageID:   //提示說明搭配 TipMessage
            return CommonMsg.encodeTipMessage(data);
        case PlatformCommonClassID.HeartBeatConfigID:  //心跳設定搭配 HeartBeatConfig
            return CommonMsg.encodeHeartBeatConfig(data);
        case PlatformCommonClassID.IPReportID:
            return CommonMsg.encodeIPReport(data);
        case PlatformCommonClassID.ConnTokenID:
            return CommonMsg.encodeConnTokenMessage(data);
        case PlatformCommonClassID.HeartBeatID:   //發送心跳 
            break;
        case PlatformCommonClassID.HeartBeatReturnID:  //回覆心跳
            break;
        case PlatformCommonClassID.RequestHeartBeatConfigID:   //請求心跳設定
            break;
    }
    return null;
}

function getGameRoomEncodeMsg(subId: number, data: any): Uint8Array {
    switch (subId) {
        case GameRoomClassID.LoginRoomID:  //C2S登入消息
            return GameRoomMsg.encodeLoginGameRoomInfo(data);
        case GameRoomClassID.LoginRoomRetID:   //S2C登入回傳
            return GameRoomMsg.encodeLoginGameRoomRet(data);
        case GameRoomClassID.GameVerInfoID:
            return GameRoomMsg.encodeGameVerInfo(data);
    }
    return null;
}

function getGameEncodeMsg(subId: number, data: any): Uint8Array {
    switch (subId) {
        case GameMessageClassID.UserStateChangeID:
            return GameMsg.encodeUserStateChange(data);
        case GameMessageClassID.UserEnterID:
            return GameMsg.encodeUserEnter(data);
        case GameMessageClassID.UserLeaveID:
            return GameMsg.encodeUserLeave(data);
        case GameMessageClassID.UserPokerID:
            return GameMsg.encodeUserPoker(data);
        case GameMessageClassID.UserActionCommitID:
            return GameMsg.encodeUserActionCommited(data);
        case GameMessageClassID.AllUserActionCommitID:
            return GameMsg.encodeAllUserActionCommited(data);
        case GameMessageClassID.LookOnUserNotifyID:
            return GameMsg.encodeLookOnUserNotify(data);
    }
    return null;
}

function getLHDGameEncodeMsg(subId: number, data: any): Uint8Array {
    switch (subId) {
        case LHD_GameMessageClassID.LHDSettingID:  //设置相关 S2C
            return GameMsg_LHD.encodeLHD_Setting(data);
        case LHD_GameMessageClassID.LHDStateID:    //阶段ID S2C
            return GameMsg_LHD.encodeLHD_Sate(data);
        case LHD_GameMessageClassID.LHDBetID:  //下注ID C2S
            return GameMsg_LHD.encodeLHD_BetArr(data);
        case LHD_GameMessageClassID.LHDBroadCastBetID: //广播下注 S2C
            return GameMsg_LHD.encodeLHD_BroadCastBetArr(data);
        case LHD_GameMessageClassID.LHDGameResultPokerID:  //游戏结果扑克 S2C
            return GameMsg_LHD.encodeLHD_GameResultPoker(data);
        case LHD_GameMessageClassID.LHDGameSceneID:    //游戏场景 断线重连
            //TODO
            break;
        case LHD_GameMessageClassID.LHDGameResultWinID:    //游戏结果赢钱 S2C
            return GameMsg_LHD.encodeLHD_GameResultUserMoney(data);
        case LHD_GameMessageClassID.LHDBetInfoID:  //用户断线重连已下注的消息
            return GameMsg_LHD.encodeLHD_UserBetInfo(data);
        case LHD_GameMessageClassID.LHDBetRetID:   //下注结果 S2C
            return GameMsg_LHD.encodeLHD_BetRet(data);
        case LHD_GameMessageClassID.LHDShangZhuangID:  //上庄请求 C2S
            return GameMsg_LHD.encodeLHD_ShangZhuang(data);
        case LHD_GameMessageClassID.LHDShangZhuangRetID:   //上庄请求结果 S2C
            return GameMsg_LHD.encodeLHD_ShangzhuangRet(data);
        case LHD_GameMessageClassID.LHDGetShangZhuangListID:   //获取上庄列表 C2S
            return GameMsg_LHD.encodeLHD_ZhuangList(data);
        case LHD_GameMessageClassID.LHDShangZhuangListInfoID:  //下发上庄列表 S2C
            return GameMsg_LHD.encodeLHD_ZhuangInfo(data);
        case LHD_GameMessageClassID.LHDZhuangInfoID:   //庄家信息 S2C
            break;
        case LHD_GameMessageClassID.LHDBetClearID: //玩家清除已下的注 C2S
            //TODO
            break;
        case LHD_GameMessageClassID.LHDResultCardListID:   //前20次开牌结果
            return HttpMsg_LHD.encodeLHD_ResultCardList(data);
        case LHD_GameMessageClassID.LHDBetClearRetID:  //清理下注结果
            return GameMsg_LHD.encodeLHD_BetClearRet(data);
        case LHD_GameMessageClassID.LHDRichestListID:  //大富豪列表的消息
            return GameMsg_LHD.encodeLHD_RichestList(data);
        case LHD_GameMessageClassID.LHDLuckyStarListID:    //明燈玩家的消息
            return GameMsg_LHD.encodeLHD_LuckyStarList(data);
        case LHD_GameMessageClassID.LHDRoundID:    //龍虎鬥本局局數
            return GameMsg_LHD.encodeLHD_RoundID(data);
    }
    return null;
}


export function getProtoDecodeMsg(mainId: number, subId: number, reciver: Uint8Array): ICallback.reciverData {
    // console.log('getProtoDecodeMsg[mainId:' + mainId + ', subId:' + subId + ']');
    let decodeData = null;
    switch (mainId) {
        case MessageBClassID.Common: //一般消息
            // console.log('getProtoDecodeMsg MessageBClassID.Common');
            decodeData = getCommonDecodeMsg(subId, reciver);
        case MessageBClassID.Hall: //不需使用
            // console.log('getProtoDecodeMsg MessageBClassID.Hall');
            break;
        case MessageBClassID.GameRoom: //遊戲房間消息
            // console.log('getProtoDecodeMsg MessageBClassID.GameRoom');
            decodeData = getGameRoomDecodeMsg(subId, reciver);
            break;
        case MessageBClassID.Game: //遊戲消息 > 10000 use getLHDGameMsg, 
            // console.log('getProtoDecodeMsg MessageBClassID.Game');
            decodeData = subId > 10000 ? getLHDGameDecodeMsg(subId, reciver) : getGameDecodeMsg(subId, reciver);
            break;
        case MessageBClassID.NotifyServer: //不需使用
            // console.log('getProtoDecodeMsg MessageBClassID.NotifyServer');
            break;
        case MessageBClassID.DBServer: //不需使用
            // console.log('getProtoDecodeMsg MessageBClassID.DBServer');
            break;
        case MessageBClassID.NewByDBServer:    //不需使用
            // console.log('getProtoDecodeMsg MessageBClassID.NewByDBServer');
            break;
        case MessageBClassID.ServerMgm:    //不需使用
            // console.log('getProtoDecodeMsg MessageBClassID.ServerMgm');
            break;
    }
    return { mainId: mainId, subId: subId, data: decodeData };
}

function getCommonDecodeMsg(subId: number, reciver: Uint8Array) {
    let decodeData = null;
    switch(subId) {
        case PlatformCommonClassID.TipMessageID:   //提示說明搭配 TipMessage
            decodeData = CommonMsg.decodeTipMessage(reciver);
            break;
        case PlatformCommonClassID.HeartBeatConfigID:  //心跳設定搭配 HeartBeatConfig
            decodeData = CommonMsg.decodeHeartBeatConfig(reciver) as CommonMsg.HeartBeatConfig;
            break;
        case PlatformCommonClassID.IPReportID:
            break;
        case PlatformCommonClassID.ConnTokenID:
            break;
        case PlatformCommonClassID.HeartBeatID:   //發送心跳 
            break;
        case PlatformCommonClassID.HeartBeatReturnID:  //回覆心跳
            break;
        case PlatformCommonClassID.RequestHeartBeatConfigID:   //請求心跳設定
            break;
    }
    return decodeData;
}

function getGameRoomDecodeMsg(subId: number, revicer: Uint8Array) {
    let decodeData = null;
    switch (subId) {
        case GameRoomClassID.LoginRoomID:  //C2S登入消息
            break;
        case GameRoomClassID.LoginRoomRetID:   //S2C登入回傳
            decodeData = GameRoomMsg.decodeLoginGameRoomRet(revicer);
            break;
        case GameRoomClassID.GameVerInfoID:
            break;
    }
    return decodeData;
}

function getGameDecodeMsg(subId: number, revicer: Uint8Array) {
    let decodeData = null;
    switch (subId) {
        case GameMessageClassID.UserStateChangeID:
            decodeData = GameMsg.decodeUserStateChange(revicer);
            break;
        case GameMessageClassID.UserEnterID:
            decodeData = GameMsg.decodeUserEnter(revicer);
            break;
        case GameMessageClassID.UserLeaveID:
            decodeData = GameMsg.decodeUserLeave(revicer);
            break;
        case GameMessageClassID.UserPokerID:
            decodeData = GameMsg.decodeUserPoker(revicer);
            break;
        case GameMessageClassID.UserActionCommitID:
            decodeData = GameMsg.decodeUserActionCommited(revicer);
            break;
        case GameMessageClassID.AllUserActionCommitID:
            decodeData = GameMsg.decodeAllUserActionCommited(revicer);
            break;
        case GameMessageClassID.LookOnUserNotifyID:
            decodeData = GameMsg.decodeLookOnUserNotify(revicer);
            break;
    }
    return decodeData;
}

function getLHDGameDecodeMsg(subId: number, revicer: Uint8Array) {
    let decodeData = null;
    switch (subId) {
        case LHD_GameMessageClassID.LHDSettingID:  //设置相关 S2C
            decodeData = GameMsg_LHD.decodeLHD_Setting(revicer);
            break;
        case LHD_GameMessageClassID.LHDStateID:    //阶段ID S2C
            decodeData = GameMsg_LHD.decodeLHD_Sate(revicer);
            break;
        case LHD_GameMessageClassID.LHDBetID:  //下注ID C2S
            decodeData = GameMsg_LHD.decodeLHD_Bet(revicer);
            break;
        case LHD_GameMessageClassID.LHDBroadCastBetID: //广播下注 S2C
            decodeData = GameMsg_LHD.decodeLHD_BroadCastBetArr(revicer);
            break;
        case LHD_GameMessageClassID.LHDGameResultPokerID:  //游戏结果扑克 S2C
            decodeData = GameMsg_LHD.decodeLHD_GameResultPoker(revicer);
            break;
        case LHD_GameMessageClassID.LHDGameSceneID:    //游戏场景 断线重连
            //TODO
            break;
        case LHD_GameMessageClassID.LHDGameResultWinID:    //游戏结果赢钱 S2C
            decodeData = GameMsg_LHD.decodeLHD_GameResultUserMoney(revicer);
            break;
        case LHD_GameMessageClassID.LHDBetInfoID:  //用户断线重连已下注的消息
            decodeData = GameMsg_LHD.decodeLHD_UserBetInfo(revicer);
            break;
        case LHD_GameMessageClassID.LHDBetRetID:   //下注结果 S2C
            decodeData = GameMsg_LHD.decodeLHD_BetRet(revicer);
            break;
        case LHD_GameMessageClassID.LHDShangZhuangID:  //上庄请求 C2S
            decodeData = GameMsg_LHD.decodeLHD_ShangZhuang(revicer);
            break;
        case LHD_GameMessageClassID.LHDShangZhuangRetID:   //上庄请求结果 S2C
            decodeData = GameMsg_LHD.decodeLHD_ShangzhuangRet(revicer);
            break;
        case LHD_GameMessageClassID.LHDGetShangZhuangListID:   //获取上庄列表 C2S
            decodeData = GameMsg_LHD.decodeLHD_ZhuangList(revicer);
            break;
        case LHD_GameMessageClassID.LHDShangZhuangListInfoID:  //下发上庄列表 S2C
            decodeData = GameMsg_LHD.decodeLHD_ZhuangInfo(revicer);
            break;
        case LHD_GameMessageClassID.LHDZhuangInfoID:   //庄家信息 S2C
            break;
        case LHD_GameMessageClassID.LHDBetClearID: //玩家清除已下的注 C2S
            //TODO
            break;
        case LHD_GameMessageClassID.LHDResultCardListID:   //前20次开牌结果
            decodeData = HttpMsg_LHD.decodeLHD_ResultCardList(revicer);
            break;
        case LHD_GameMessageClassID.LHDBetClearRetID:  //清理下注结果
            decodeData = GameMsg_LHD.decodeLHD_BetClearRet(revicer);
            break;
        case LHD_GameMessageClassID.LHDRichestListID:  //大富豪列表的消息
            decodeData = GameMsg_LHD.decodeLHD_RichestList(revicer);
            break;
        case LHD_GameMessageClassID.LHDLuckyStarListID:    //明燈玩家的消息
            // decodeData = GameMsg_LHD.decodeLHD_LuckyStarList(revicer);
            break;
        case LHD_GameMessageClassID.LHDRoundID:    //龍虎鬥本局局數
            decodeData = GameMsg_LHD.decodeLHD_RoundID(revicer);
            break;
    }
    return decodeData;
}

export function long2NumberCash (value: Long): number {
    return Math.floor(long2Number(value) / 100);
}

export function long2Number (value: Long): number {
    return new Long(value.low, value.high, value.unsigned).toNumber();
}


