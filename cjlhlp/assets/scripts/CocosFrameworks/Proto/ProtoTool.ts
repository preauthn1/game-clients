/**
 * 所有共用Protobuf Data 加解密工具
 */

import { MessageBClassID } from "../../Proto/BClass";
import { PlatformCommonClassID } from "../../Proto/Common";
import { GameMessageClassID } from "../../Proto/Game";
import { GameRoomClassID } from "../../Proto/GameRoom";
import * as CommonMsg from '../../Proto/Msg/commonMsg';
import * as GameMsg from '../../Proto/Msg/gameMsg';
import * as GameRoomMsg from '../../Proto/Msg/gameRoomMsg';
import { Packet } from "./Packet";
import * as ICallback from '../../Data/ICallback';
import Long from "long";
import * as GameProtoTools from './GameProtoTools';

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
            if (subId <= 10000) {
                bytesData = getGameEncodeMsg(subId, data);
            } else {
                bytesData = GameProtoTools.getCustomGameEncodeMsg(subId, data);
            }
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
            if (subId <= 10000) {
                decodeData = getGameDecodeMsg(subId, reciver);
            } else {
                decodeData = GameProtoTools.getCustomGameDecodeMsg(subId, reciver)
            }
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

export function long2NumberCash (value: Long): number {
    return Math.floor(long2Number(value) / 100);
}

export function long2Number (value: Long): number {
    return new Long(value.low, value.high, value.unsigned).toNumber();
}




