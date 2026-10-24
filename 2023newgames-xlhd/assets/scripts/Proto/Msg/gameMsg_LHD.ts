import { LHD_Poker, _decodeLHD_Poker, _encodeLHD_Poker } from "./httpMsg_LHD";
import { GameUser, _decodeGameUser, _encodeGameUser } from "./gameMsg";

export interface LHD_Setting {
  BetCount?: number[];
  BetMoney: number;
  ZhuangLimit: Long;
  betlimitmoney?: Long;
  BetMax?: Long[];
  BetAreas?: BetArea[];
  UserMaxBet?: Long;
}

export function encodeLHD_Setting(message: LHD_Setting): Uint8Array {
  let bb = popByteBuffer();
  _encodeLHD_Setting(message, bb);
  return toUint8Array(bb);
}

function _encodeLHD_Setting(message: LHD_Setting, bb: ByteBuffer): void {
  // repeated int32 BetCount = 1;
  let array$BetCount = message.BetCount;
  if (array$BetCount !== undefined) {
    let packed = popByteBuffer();
    for (let value of array$BetCount) {
      writeVarint64(packed, intToLong(value));
    }
    writeVarint32(bb, 10);
    writeVarint32(bb, packed.offset);
    writeByteBuffer(bb, packed);
    pushByteBuffer(packed);
  }

  // required int32 BetMoney = 2;
  let $BetMoney = message.BetMoney;
  if ($BetMoney !== undefined) {
    writeVarint32(bb, 16);
    writeVarint64(bb, intToLong($BetMoney));
  }

  // required int64 ZhuangLimit = 3;
  let $ZhuangLimit = message.ZhuangLimit;
  if ($ZhuangLimit !== undefined) {
    writeVarint32(bb, 24);
    writeVarint64(bb, $ZhuangLimit);
  }

  // optional int64 betlimitmoney = 4;
  let $betlimitmoney = message.betlimitmoney;
  if ($betlimitmoney !== undefined) {
    writeVarint32(bb, 32);
    writeVarint64(bb, $betlimitmoney);
  }

  // repeated int64 BetMax = 5;
  let array$BetMax = message.BetMax;
  if (array$BetMax !== undefined) {
    let packed = popByteBuffer();
    for (let value of array$BetMax) {
      writeVarint64(packed, value);
    }
    writeVarint32(bb, 42);
    writeVarint32(bb, packed.offset);
    writeByteBuffer(bb, packed);
    pushByteBuffer(packed);
  }

  // repeated BetArea BetAreas = 6;
  let array$BetAreas = message.BetAreas;
  if (array$BetAreas !== undefined) {
    for (let value of array$BetAreas) {
      writeVarint32(bb, 50);
      let nested = popByteBuffer();
      _encodeBetArea(value, nested);
      writeVarint32(bb, nested.limit);
      writeByteBuffer(bb, nested);
      pushByteBuffer(nested);
    }
  }

  // optional int64 UserMaxBet = 7;
  let $UserMaxBet = message.UserMaxBet;
  if ($UserMaxBet !== undefined) {
    writeVarint32(bb, 56);
    writeVarint64(bb, $UserMaxBet);
  }
}

export function decodeLHD_Setting(binary: Uint8Array): LHD_Setting {
  return _decodeLHD_Setting(wrapByteBuffer(binary));
}

function _decodeLHD_Setting(bb: ByteBuffer): LHD_Setting {
  let message: LHD_Setting = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // repeated int32 BetCount = 1;
      case 1: {
        let values = message.BetCount || (message.BetCount = []);
        if ((tag & 7) === 2) {
          let outerLimit = pushTemporaryLength(bb);
          while (!isAtEnd(bb)) {
            values.push(readVarint32(bb));
          }
          bb.limit = outerLimit;
        } else {
          values.push(readVarint32(bb));
        }
        break;
      }

      // required int32 BetMoney = 2;
      case 2: {
        message.BetMoney = readVarint32(bb);
        break;
      }

      // required int64 ZhuangLimit = 3;
      case 3: {
        message.ZhuangLimit = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // optional int64 betlimitmoney = 4;
      case 4: {
        message.betlimitmoney = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // repeated int64 BetMax = 5;
      case 5: {
        let values = message.BetMax || (message.BetMax = []);
        if ((tag & 7) === 2) {
          let outerLimit = pushTemporaryLength(bb);
          while (!isAtEnd(bb)) {
            values.push(readVarint64(bb, /* unsigned */ false));
          }
          bb.limit = outerLimit;
        } else {
          values.push(readVarint64(bb, /* unsigned */ false));
        }
        break;
      }

      // repeated BetArea BetAreas = 6;
      case 6: {
        let limit = pushTemporaryLength(bb);
        let values = message.BetAreas || (message.BetAreas = []);
        values.push(_decodeBetArea(bb));
        bb.limit = limit;
        break;
      }

      // optional int64 UserMaxBet = 7;
      case 7: {
        message.UserMaxBet = readVarint64(bb, /* unsigned */ false);
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  if (message.BetMoney === undefined)
    throw new Error("Missing required field: BetMoney");

  if (message.ZhuangLimit === undefined)
    throw new Error("Missing required field: ZhuangLimit");

  return message;
}

export interface BetArea {
  Type?: number;
  Min?: Long;
  Max?: Long;
  Odds?: number;
}

export function encodeBetArea(message: BetArea): Uint8Array {
  let bb = popByteBuffer();
  _encodeBetArea(message, bb);
  return toUint8Array(bb);
}

function _encodeBetArea(message: BetArea, bb: ByteBuffer): void {
  // optional int32 Type = 1;
  let $Type = message.Type;
  if ($Type !== undefined) {
    writeVarint32(bb, 8);
    writeVarint64(bb, intToLong($Type));
  }

  // optional int64 Min = 2;
  let $Min = message.Min;
  if ($Min !== undefined) {
    writeVarint32(bb, 16);
    writeVarint64(bb, $Min);
  }

  // optional int64 Max = 3;
  let $Max = message.Max;
  if ($Max !== undefined) {
    writeVarint32(bb, 24);
    writeVarint64(bb, $Max);
  }

  // optional float Odds = 4;
  let $Odds = message.Odds;
  if ($Odds !== undefined) {
    writeVarint32(bb, 37);
    writeFloat(bb, $Odds);
  }
}

export function decodeBetArea(binary: Uint8Array): BetArea {
  return _decodeBetArea(wrapByteBuffer(binary));
}

function _decodeBetArea(bb: ByteBuffer): BetArea {
  let message: BetArea = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional int32 Type = 1;
      case 1: {
        message.Type = readVarint32(bb);
        break;
      }

      // optional int64 Min = 2;
      case 2: {
        message.Min = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // optional int64 Max = 3;
      case 3: {
        message.Max = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // optional float Odds = 4;
      case 4: {
        message.Odds = readFloat(bb);
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface LHD_Sate {
  State: number;
  Time: number;
}

export function encodeLHD_Sate(message: LHD_Sate): Uint8Array {
  let bb = popByteBuffer();
  _encodeLHD_Sate(message, bb);
  return toUint8Array(bb);
}

function _encodeLHD_Sate(message: LHD_Sate, bb: ByteBuffer): void {
  // required int32 State = 1;
  let $State = message.State;
  if ($State !== undefined) {
    writeVarint32(bb, 8);
    writeVarint64(bb, intToLong($State));
  }

  // required int32 Time = 2;
  let $Time = message.Time;
  if ($Time !== undefined) {
    writeVarint32(bb, 16);
    writeVarint64(bb, intToLong($Time));
  }
}

export function decodeLHD_Sate(binary: Uint8Array): LHD_Sate {
  return _decodeLHD_Sate(wrapByteBuffer(binary));
}

function _decodeLHD_Sate(bb: ByteBuffer): LHD_Sate {
  let message: LHD_Sate = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // required int32 State = 1;
      case 1: {
        message.State = readVarint32(bb);
        break;
      }

      // required int32 Time = 2;
      case 2: {
        message.Time = readVarint32(bb);
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  if (message.State === undefined)
    throw new Error("Missing required field: State");

  if (message.Time === undefined)
    throw new Error("Missing required field: Time");

  return message;
}

export interface LHD_UserBetInfo {
  UserMoney: Long;
  BetInfo?: LHD_BroadCastBet[];
}

export function encodeLHD_UserBetInfo(message: LHD_UserBetInfo): Uint8Array {
  let bb = popByteBuffer();
  _encodeLHD_UserBetInfo(message, bb);
  return toUint8Array(bb);
}

function _encodeLHD_UserBetInfo(message: LHD_UserBetInfo, bb: ByteBuffer): void {
  // required int64 UserMoney = 1;
  let $UserMoney = message.UserMoney;
  if ($UserMoney !== undefined) {
    writeVarint32(bb, 8);
    writeVarint64(bb, $UserMoney);
  }

  // repeated LHD_BroadCastBet BetInfo = 2;
  let array$BetInfo = message.BetInfo;
  if (array$BetInfo !== undefined) {
    for (let value of array$BetInfo) {
      writeVarint32(bb, 18);
      let nested = popByteBuffer();
      _encodeLHD_BroadCastBet(value, nested);
      writeVarint32(bb, nested.limit);
      writeByteBuffer(bb, nested);
      pushByteBuffer(nested);
    }
  }
}

export function decodeLHD_UserBetInfo(binary: Uint8Array): LHD_UserBetInfo {
  return _decodeLHD_UserBetInfo(wrapByteBuffer(binary));
}

function _decodeLHD_UserBetInfo(bb: ByteBuffer): LHD_UserBetInfo {
  let message: LHD_UserBetInfo = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // required int64 UserMoney = 1;
      case 1: {
        message.UserMoney = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // repeated LHD_BroadCastBet BetInfo = 2;
      case 2: {
        let limit = pushTemporaryLength(bb);
        let values = message.BetInfo || (message.BetInfo = []);
        values.push(_decodeLHD_BroadCastBet(bb));
        bb.limit = limit;
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  if (message.UserMoney === undefined)
    throw new Error("Missing required field: UserMoney");

  return message;
}

export interface LHD_BroadCastBetArr {
  UserID: number;
  BroadCastBetArr?: LHD_BroadCastBet[];
}

export function encodeLHD_BroadCastBetArr(message: LHD_BroadCastBetArr): Uint8Array {
  let bb = popByteBuffer();
  _encodeLHD_BroadCastBetArr(message, bb);
  return toUint8Array(bb);
}

function _encodeLHD_BroadCastBetArr(message: LHD_BroadCastBetArr, bb: ByteBuffer): void {
  // required int32 UserID = 1;
  let $UserID = message.UserID;
  if ($UserID !== undefined) {
    writeVarint32(bb, 8);
    writeVarint64(bb, intToLong($UserID));
  }

  // repeated LHD_BroadCastBet BroadCastBetArr = 2;
  let array$BroadCastBetArr = message.BroadCastBetArr;
  if (array$BroadCastBetArr !== undefined) {
    for (let value of array$BroadCastBetArr) {
      writeVarint32(bb, 18);
      let nested = popByteBuffer();
      _encodeLHD_BroadCastBet(value, nested);
      writeVarint32(bb, nested.limit);
      writeByteBuffer(bb, nested);
      pushByteBuffer(nested);
    }
  }
}

export function decodeLHD_BroadCastBetArr(binary: Uint8Array): LHD_BroadCastBetArr {
  return _decodeLHD_BroadCastBetArr(wrapByteBuffer(binary));
}

function _decodeLHD_BroadCastBetArr(bb: ByteBuffer): LHD_BroadCastBetArr {
  let message: LHD_BroadCastBetArr = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // required int32 UserID = 1;
      case 1: {
        message.UserID = readVarint32(bb);
        break;
      }

      // repeated LHD_BroadCastBet BroadCastBetArr = 2;
      case 2: {
        let limit = pushTemporaryLength(bb);
        let values = message.BroadCastBetArr || (message.BroadCastBetArr = []);
        values.push(_decodeLHD_BroadCastBet(bb));
        bb.limit = limit;
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  if (message.UserID === undefined)
    throw new Error("Missing required field: UserID");

  return message;
}

export interface LHD_BroadCastBet {
  Type: number;
  Money: Long;
  LuckyStar: boolean;
}

export function encodeLHD_BroadCastBet(message: LHD_BroadCastBet): Uint8Array {
  let bb = popByteBuffer();
  _encodeLHD_BroadCastBet(message, bb);
  return toUint8Array(bb);
}

function _encodeLHD_BroadCastBet(message: LHD_BroadCastBet, bb: ByteBuffer): void {
  // required int32 Type = 1;
  let $Type = message.Type;
  if ($Type !== undefined) {
    writeVarint32(bb, 8);
    writeVarint64(bb, intToLong($Type));
  }

  // required int64 Money = 2;
  let $Money = message.Money;
  if ($Money !== undefined) {
    writeVarint32(bb, 16);
    writeVarint64(bb, $Money);
  }

  // required bool LuckyStar = 3;
  let $LuckyStar = message.LuckyStar;
  if ($LuckyStar !== undefined) {
    writeVarint32(bb, 24);
    writeByte(bb, $LuckyStar ? 1 : 0);
  }
}

export function decodeLHD_BroadCastBet(binary: Uint8Array): LHD_BroadCastBet {
  return _decodeLHD_BroadCastBet(wrapByteBuffer(binary));
}

function _decodeLHD_BroadCastBet(bb: ByteBuffer): LHD_BroadCastBet {
  let message: LHD_BroadCastBet = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // required int32 Type = 1;
      case 1: {
        message.Type = readVarint32(bb);
        break;
      }

      // required int64 Money = 2;
      case 2: {
        message.Money = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // required bool LuckyStar = 3;
      case 3: {
        message.LuckyStar = !!readByte(bb);
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  if (message.Type === undefined)
    throw new Error("Missing required field: Type");

  if (message.Money === undefined)
    throw new Error("Missing required field: Money");

  if (message.LuckyStar === undefined)
    throw new Error("Missing required field: LuckyStar");

  return message;
}

export interface LHD_BetArr {
  BetArr?: LHD_Bet[];
}

export function encodeLHD_BetArr(message: LHD_BetArr): Uint8Array {
  let bb = popByteBuffer();
  _encodeLHD_BetArr(message, bb);
  return toUint8Array(bb);
}

function _encodeLHD_BetArr(message: LHD_BetArr, bb: ByteBuffer): void {
  // repeated LHD_Bet BetArr = 1;
  let array$BetArr = message.BetArr;
  if (array$BetArr !== undefined) {
    for (let value of array$BetArr) {
      writeVarint32(bb, 10);
      let nested = popByteBuffer();
      _encodeLHD_Bet(value, nested);
      writeVarint32(bb, nested.limit);
      writeByteBuffer(bb, nested);
      pushByteBuffer(nested);
    }
  }
}

export function decodeLHD_BetArr(binary: Uint8Array): LHD_BetArr {
  return _decodeLHD_BetArr(wrapByteBuffer(binary));
}

function _decodeLHD_BetArr(bb: ByteBuffer): LHD_BetArr {
  let message: LHD_BetArr = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // repeated LHD_Bet BetArr = 1;
      case 1: {
        let limit = pushTemporaryLength(bb);
        let values = message.BetArr || (message.BetArr = []);
        values.push(_decodeLHD_Bet(bb));
        bb.limit = limit;
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface LHD_Bet {
  BetType: number;
  Count: number;
}

export function encodeLHD_Bet(message: LHD_Bet): Uint8Array {
  let bb = popByteBuffer();
  _encodeLHD_Bet(message, bb);
  return toUint8Array(bb);
}

function _encodeLHD_Bet(message: LHD_Bet, bb: ByteBuffer): void {
  // required int32 BetType = 1;
  let $BetType = message.BetType;
  if ($BetType !== undefined) {
    writeVarint32(bb, 8);
    writeVarint64(bb, intToLong($BetType));
  }

  // required int32 Count = 2;
  let $Count = message.Count;
  if ($Count !== undefined) {
    writeVarint32(bb, 16);
    writeVarint64(bb, intToLong($Count));
  }
}

export function decodeLHD_Bet(binary: Uint8Array): LHD_Bet {
  return _decodeLHD_Bet(wrapByteBuffer(binary));
}

function _decodeLHD_Bet(bb: ByteBuffer): LHD_Bet {
  let message: LHD_Bet = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // required int32 BetType = 1;
      case 1: {
        message.BetType = readVarint32(bb);
        break;
      }

      // required int32 Count = 2;
      case 2: {
        message.Count = readVarint32(bb);
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  if (message.BetType === undefined)
    throw new Error("Missing required field: BetType");

  if (message.Count === undefined)
    throw new Error("Missing required field: Count");

  return message;
}

export interface LHD_BetRet {
  Ret: number;
  Money: Long;
  Type?: number;
  BetArr?: LHD_Bet[];
}

export function encodeLHD_BetRet(message: LHD_BetRet): Uint8Array {
  let bb = popByteBuffer();
  _encodeLHD_BetRet(message, bb);
  return toUint8Array(bb);
}

function _encodeLHD_BetRet(message: LHD_BetRet, bb: ByteBuffer): void {
  // required int32 Ret = 1;
  let $Ret = message.Ret;
  if ($Ret !== undefined) {
    writeVarint32(bb, 8);
    writeVarint64(bb, intToLong($Ret));
  }

  // required int64 Money = 2;
  let $Money = message.Money;
  if ($Money !== undefined) {
    writeVarint32(bb, 16);
    writeVarint64(bb, $Money);
  }

  // optional int32 Type = 3;
  let $Type = message.Type;
  if ($Type !== undefined) {
    writeVarint32(bb, 24);
    writeVarint64(bb, intToLong($Type));
  }

  // repeated LHD_Bet BetArr = 4;
  let array$BetArr = message.BetArr;
  if (array$BetArr !== undefined) {
    for (let value of array$BetArr) {
      writeVarint32(bb, 34);
      let nested = popByteBuffer();
      _encodeLHD_Bet(value, nested);
      writeVarint32(bb, nested.limit);
      writeByteBuffer(bb, nested);
      pushByteBuffer(nested);
    }
  }
}

export function decodeLHD_BetRet(binary: Uint8Array): LHD_BetRet {
  return _decodeLHD_BetRet(wrapByteBuffer(binary));
}

function _decodeLHD_BetRet(bb: ByteBuffer): LHD_BetRet {
  let message: LHD_BetRet = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // required int32 Ret = 1;
      case 1: {
        message.Ret = readVarint32(bb);
        break;
      }

      // required int64 Money = 2;
      case 2: {
        message.Money = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // optional int32 Type = 3;
      case 3: {
        message.Type = readVarint32(bb);
        break;
      }

      // repeated LHD_Bet BetArr = 4;
      case 4: {
        let limit = pushTemporaryLength(bb);
        let values = message.BetArr || (message.BetArr = []);
        values.push(_decodeLHD_Bet(bb));
        bb.limit = limit;
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  if (message.Ret === undefined)
    throw new Error("Missing required field: Ret");

  if (message.Money === undefined)
    throw new Error("Missing required field: Money");

  return message;
}

export interface LHD_GameResultPoker {
  Poker?: LHD_Poker[];
  RoundID: number;
}

export function encodeLHD_GameResultPoker(message: LHD_GameResultPoker): Uint8Array {
  let bb = popByteBuffer();
  _encodeLHD_GameResultPoker(message, bb);
  return toUint8Array(bb);
}

function _encodeLHD_GameResultPoker(message: LHD_GameResultPoker, bb: ByteBuffer): void {
  // repeated LHD_Poker Poker = 1;
  let array$Poker = message.Poker;
  if (array$Poker !== undefined) {
    for (let value of array$Poker) {
      writeVarint32(bb, 10);
      let nested = popByteBuffer();
      _encodeLHD_Poker(value, nested);
      writeVarint32(bb, nested.limit);
      writeByteBuffer(bb, nested);
      pushByteBuffer(nested);
    }
  }

  // required int32 RoundID = 2;
  let $RoundID = message.RoundID;
  if ($RoundID !== undefined) {
    writeVarint32(bb, 16);
    writeVarint64(bb, intToLong($RoundID));
  }
}

export function decodeLHD_GameResultPoker(binary: Uint8Array): LHD_GameResultPoker {
  return _decodeLHD_GameResultPoker(wrapByteBuffer(binary));
}

function _decodeLHD_GameResultPoker(bb: ByteBuffer): LHD_GameResultPoker {
  let message: LHD_GameResultPoker = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // repeated LHD_Poker Poker = 1;
      case 1: {
        let limit = pushTemporaryLength(bb);
        let values = message.Poker || (message.Poker = []);
        values.push(_decodeLHD_Poker(bb));
        bb.limit = limit;
        break;
      }

      // required int32 RoundID = 2;
      case 2: {
        message.RoundID = readVarint32(bb);
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  if (message.RoundID === undefined)
    throw new Error("Missing required field: RoundID");

  return message;
}

export interface LHD_GameResultUserMoney {
  ZhuangWin: Long;
  SelfWin: Long;
  WinUserInfo?: LHD_WinUerInfo[];
  StageUerInfo?: LHD_StageUerInfo[];
}

export function encodeLHD_GameResultUserMoney(message: LHD_GameResultUserMoney): Uint8Array {
  let bb = popByteBuffer();
  _encodeLHD_GameResultUserMoney(message, bb);
  return toUint8Array(bb);
}

function _encodeLHD_GameResultUserMoney(message: LHD_GameResultUserMoney, bb: ByteBuffer): void {
  // required int64 ZhuangWin = 1;
  let $ZhuangWin = message.ZhuangWin;
  if ($ZhuangWin !== undefined) {
    writeVarint32(bb, 8);
    writeVarint64(bb, $ZhuangWin);
  }

  // required int64 SelfWin = 2;
  let $SelfWin = message.SelfWin;
  if ($SelfWin !== undefined) {
    writeVarint32(bb, 16);
    writeVarint64(bb, $SelfWin);
  }

  // repeated LHD_WinUerInfo WinUserInfo = 3;
  let array$WinUserInfo = message.WinUserInfo;
  if (array$WinUserInfo !== undefined) {
    for (let value of array$WinUserInfo) {
      writeVarint32(bb, 26);
      let nested = popByteBuffer();
      _encodeLHD_WinUerInfo(value, nested);
      writeVarint32(bb, nested.limit);
      writeByteBuffer(bb, nested);
      pushByteBuffer(nested);
    }
  }

  // repeated LHD_StageUerInfo StageUerInfo = 4;
  let array$StageUerInfo = message.StageUerInfo;
  if (array$StageUerInfo !== undefined) {
    for (let value of array$StageUerInfo) {
      writeVarint32(bb, 34);
      let nested = popByteBuffer();
      _encodeLHD_StageUerInfo(value, nested);
      writeVarint32(bb, nested.limit);
      writeByteBuffer(bb, nested);
      pushByteBuffer(nested);
    }
  }
}

export function decodeLHD_GameResultUserMoney(binary: Uint8Array): LHD_GameResultUserMoney {
  return _decodeLHD_GameResultUserMoney(wrapByteBuffer(binary));
}

function _decodeLHD_GameResultUserMoney(bb: ByteBuffer): LHD_GameResultUserMoney {
  let message: LHD_GameResultUserMoney = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // required int64 ZhuangWin = 1;
      case 1: {
        message.ZhuangWin = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // required int64 SelfWin = 2;
      case 2: {
        message.SelfWin = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // repeated LHD_WinUerInfo WinUserInfo = 3;
      case 3: {
        let limit = pushTemporaryLength(bb);
        let values = message.WinUserInfo || (message.WinUserInfo = []);
        values.push(_decodeLHD_WinUerInfo(bb));
        bb.limit = limit;
        break;
      }

      // repeated LHD_StageUerInfo StageUerInfo = 4;
      case 4: {
        let limit = pushTemporaryLength(bb);
        let values = message.StageUerInfo || (message.StageUerInfo = []);
        values.push(_decodeLHD_StageUerInfo(bb));
        bb.limit = limit;
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  if (message.ZhuangWin === undefined)
    throw new Error("Missing required field: ZhuangWin");

  if (message.SelfWin === undefined)
    throw new Error("Missing required field: SelfWin");

  return message;
}

export interface LHD_WinUerInfo {
  UserName: string;
  Win: Long;
}

export function encodeLHD_WinUerInfo(message: LHD_WinUerInfo): Uint8Array {
  let bb = popByteBuffer();
  _encodeLHD_WinUerInfo(message, bb);
  return toUint8Array(bb);
}

function _encodeLHD_WinUerInfo(message: LHD_WinUerInfo, bb: ByteBuffer): void {
  // required string UserName = 1;
  let $UserName = message.UserName;
  if ($UserName !== undefined) {
    writeVarint32(bb, 10);
    writeString(bb, $UserName);
  }

  // required int64 Win = 2;
  let $Win = message.Win;
  if ($Win !== undefined) {
    writeVarint32(bb, 16);
    writeVarint64(bb, $Win);
  }
}

export function decodeLHD_WinUerInfo(binary: Uint8Array): LHD_WinUerInfo {
  return _decodeLHD_WinUerInfo(wrapByteBuffer(binary));
}

function _decodeLHD_WinUerInfo(bb: ByteBuffer): LHD_WinUerInfo {
  let message: LHD_WinUerInfo = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // required string UserName = 1;
      case 1: {
        message.UserName = readString(bb, readVarint32(bb));
        break;
      }

      // required int64 Win = 2;
      case 2: {
        message.Win = readVarint64(bb, /* unsigned */ false);
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  if (message.UserName === undefined)
    throw new Error("Missing required field: UserName");

  if (message.Win === undefined)
    throw new Error("Missing required field: Win");

  return message;
}

export interface LHD_StageUerInfo {
  UserID: number;
  Win: Long;
}

export function encodeLHD_StageUerInfo(message: LHD_StageUerInfo): Uint8Array {
  let bb = popByteBuffer();
  _encodeLHD_StageUerInfo(message, bb);
  return toUint8Array(bb);
}

function _encodeLHD_StageUerInfo(message: LHD_StageUerInfo, bb: ByteBuffer): void {
  // required int32 UserID = 1;
  let $UserID = message.UserID;
  if ($UserID !== undefined) {
    writeVarint32(bb, 8);
    writeVarint64(bb, intToLong($UserID));
  }

  // required int64 Win = 2;
  let $Win = message.Win;
  if ($Win !== undefined) {
    writeVarint32(bb, 16);
    writeVarint64(bb, $Win);
  }
}

export function decodeLHD_StageUerInfo(binary: Uint8Array): LHD_StageUerInfo {
  return _decodeLHD_StageUerInfo(wrapByteBuffer(binary));
}

function _decodeLHD_StageUerInfo(bb: ByteBuffer): LHD_StageUerInfo {
  let message: LHD_StageUerInfo = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // required int32 UserID = 1;
      case 1: {
        message.UserID = readVarint32(bb);
        break;
      }

      // required int64 Win = 2;
      case 2: {
        message.Win = readVarint64(bb, /* unsigned */ false);
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  if (message.UserID === undefined)
    throw new Error("Missing required field: UserID");

  if (message.Win === undefined)
    throw new Error("Missing required field: Win");

  return message;
}

export interface LHD_ShangzhuangRet {
  ret: number;
}

export function encodeLHD_ShangzhuangRet(message: LHD_ShangzhuangRet): Uint8Array {
  let bb = popByteBuffer();
  _encodeLHD_ShangzhuangRet(message, bb);
  return toUint8Array(bb);
}

function _encodeLHD_ShangzhuangRet(message: LHD_ShangzhuangRet, bb: ByteBuffer): void {
  // required int32 ret = 1;
  let $ret = message.ret;
  if ($ret !== undefined) {
    writeVarint32(bb, 8);
    writeVarint64(bb, intToLong($ret));
  }
}

export function decodeLHD_ShangzhuangRet(binary: Uint8Array): LHD_ShangzhuangRet {
  return _decodeLHD_ShangzhuangRet(wrapByteBuffer(binary));
}

function _decodeLHD_ShangzhuangRet(bb: ByteBuffer): LHD_ShangzhuangRet {
  let message: LHD_ShangzhuangRet = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // required int32 ret = 1;
      case 1: {
        message.ret = readVarint32(bb);
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  if (message.ret === undefined)
    throw new Error("Missing required field: ret");

  return message;
}

export interface LHD_ShangZhuang {
  IsShangZhuang: boolean;
}

export function encodeLHD_ShangZhuang(message: LHD_ShangZhuang): Uint8Array {
  let bb = popByteBuffer();
  _encodeLHD_ShangZhuang(message, bb);
  return toUint8Array(bb);
}

function _encodeLHD_ShangZhuang(message: LHD_ShangZhuang, bb: ByteBuffer): void {
  // required bool IsShangZhuang = 1;
  let $IsShangZhuang = message.IsShangZhuang;
  if ($IsShangZhuang !== undefined) {
    writeVarint32(bb, 8);
    writeByte(bb, $IsShangZhuang ? 1 : 0);
  }
}

export function decodeLHD_ShangZhuang(binary: Uint8Array): LHD_ShangZhuang {
  return _decodeLHD_ShangZhuang(wrapByteBuffer(binary));
}

function _decodeLHD_ShangZhuang(bb: ByteBuffer): LHD_ShangZhuang {
  let message: LHD_ShangZhuang = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // required bool IsShangZhuang = 1;
      case 1: {
        message.IsShangZhuang = !!readByte(bb);
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  if (message.IsShangZhuang === undefined)
    throw new Error("Missing required field: IsShangZhuang");

  return message;
}

export interface LHD_ZhuangInfo {
  UserID: number;
  LastTurn: number;
  UserInfo?: GameUser[];
}

export function encodeLHD_ZhuangInfo(message: LHD_ZhuangInfo): Uint8Array {
  let bb = popByteBuffer();
  _encodeLHD_ZhuangInfo(message, bb);
  return toUint8Array(bb);
}

function _encodeLHD_ZhuangInfo(message: LHD_ZhuangInfo, bb: ByteBuffer): void {
  // required int32 UserID = 1;
  let $UserID = message.UserID;
  if ($UserID !== undefined) {
    writeVarint32(bb, 8);
    writeVarint64(bb, intToLong($UserID));
  }

  // required int32 LastTurn = 2;
  let $LastTurn = message.LastTurn;
  if ($LastTurn !== undefined) {
    writeVarint32(bb, 16);
    writeVarint64(bb, intToLong($LastTurn));
  }

  // repeated GameUser UserInfo = 3;
  let array$UserInfo = message.UserInfo;
  if (array$UserInfo !== undefined) {
    for (let value of array$UserInfo) {
      writeVarint32(bb, 26);
      let nested = popByteBuffer();
      _encodeGameUser(value, nested);
      writeVarint32(bb, nested.limit);
      writeByteBuffer(bb, nested);
      pushByteBuffer(nested);
    }
  }
}

export function decodeLHD_ZhuangInfo(binary: Uint8Array): LHD_ZhuangInfo {
  return _decodeLHD_ZhuangInfo(wrapByteBuffer(binary));
}

function _decodeLHD_ZhuangInfo(bb: ByteBuffer): LHD_ZhuangInfo {
  let message: LHD_ZhuangInfo = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // required int32 UserID = 1;
      case 1: {
        message.UserID = readVarint32(bb);
        break;
      }

      // required int32 LastTurn = 2;
      case 2: {
        message.LastTurn = readVarint32(bb);
        break;
      }

      // repeated GameUser UserInfo = 3;
      case 3: {
        let limit = pushTemporaryLength(bb);
        let values = message.UserInfo || (message.UserInfo = []);
        values.push(_decodeGameUser(bb));
        bb.limit = limit;
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  if (message.UserID === undefined)
    throw new Error("Missing required field: UserID");

  if (message.LastTurn === undefined)
    throw new Error("Missing required field: LastTurn");

  return message;
}

export interface LHD_ZhuangList {
  UserInfo?: GameUser[];
}

export function encodeLHD_ZhuangList(message: LHD_ZhuangList): Uint8Array {
  let bb = popByteBuffer();
  _encodeLHD_ZhuangList(message, bb);
  return toUint8Array(bb);
}

function _encodeLHD_ZhuangList(message: LHD_ZhuangList, bb: ByteBuffer): void {
  // repeated GameUser UserInfo = 1;
  let array$UserInfo = message.UserInfo;
  if (array$UserInfo !== undefined) {
    for (let value of array$UserInfo) {
      writeVarint32(bb, 10);
      let nested = popByteBuffer();
      _encodeGameUser(value, nested);
      writeVarint32(bb, nested.limit);
      writeByteBuffer(bb, nested);
      pushByteBuffer(nested);
    }
  }
}

export function decodeLHD_ZhuangList(binary: Uint8Array): LHD_ZhuangList {
  return _decodeLHD_ZhuangList(wrapByteBuffer(binary));
}

function _decodeLHD_ZhuangList(bb: ByteBuffer): LHD_ZhuangList {
  let message: LHD_ZhuangList = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // repeated GameUser UserInfo = 1;
      case 1: {
        let limit = pushTemporaryLength(bb);
        let values = message.UserInfo || (message.UserInfo = []);
        values.push(_decodeGameUser(bb));
        bb.limit = limit;
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface LHD_BetClearRet {
  Money: Long;
  Ret: number;
}

export function encodeLHD_BetClearRet(message: LHD_BetClearRet): Uint8Array {
  let bb = popByteBuffer();
  _encodeLHD_BetClearRet(message, bb);
  return toUint8Array(bb);
}

function _encodeLHD_BetClearRet(message: LHD_BetClearRet, bb: ByteBuffer): void {
  // required int64 Money = 1;
  let $Money = message.Money;
  if ($Money !== undefined) {
    writeVarint32(bb, 8);
    writeVarint64(bb, $Money);
  }

  // required int32 Ret = 2;
  let $Ret = message.Ret;
  if ($Ret !== undefined) {
    writeVarint32(bb, 16);
    writeVarint64(bb, intToLong($Ret));
  }
}

export function decodeLHD_BetClearRet(binary: Uint8Array): LHD_BetClearRet {
  return _decodeLHD_BetClearRet(wrapByteBuffer(binary));
}

function _decodeLHD_BetClearRet(bb: ByteBuffer): LHD_BetClearRet {
  let message: LHD_BetClearRet = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // required int64 Money = 1;
      case 1: {
        message.Money = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // required int32 Ret = 2;
      case 2: {
        message.Ret = readVarint32(bb);
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  if (message.Money === undefined)
    throw new Error("Missing required field: Money");

  if (message.Ret === undefined)
    throw new Error("Missing required field: Ret");

  return message;
}

export interface LHD_RichestList {
  RichestList?: LHD_Richest[];
}

export function encodeLHD_RichestList(message: LHD_RichestList): Uint8Array {
  let bb = popByteBuffer();
  _encodeLHD_RichestList(message, bb);
  return toUint8Array(bb);
}

function _encodeLHD_RichestList(message: LHD_RichestList, bb: ByteBuffer): void {
  // repeated LHD_Richest RichestList = 1;
  let array$RichestList = message.RichestList;
  if (array$RichestList !== undefined) {
    for (let value of array$RichestList) {
      writeVarint32(bb, 10);
      let nested = popByteBuffer();
      _encodeLHD_Richest(value, nested);
      writeVarint32(bb, nested.limit);
      writeByteBuffer(bb, nested);
      pushByteBuffer(nested);
    }
  }
}

export function decodeLHD_RichestList(binary: Uint8Array): LHD_RichestList {
  return _decodeLHD_RichestList(wrapByteBuffer(binary));
}

function _decodeLHD_RichestList(bb: ByteBuffer): LHD_RichestList {
  let message: LHD_RichestList = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // repeated LHD_Richest RichestList = 1;
      case 1: {
        let limit = pushTemporaryLength(bb);
        let values = message.RichestList || (message.RichestList = []);
        values.push(_decodeLHD_Richest(bb));
        bb.limit = limit;
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface LHD_Richest {
  Ranking: number;
  UserID: number;
  UserFaceID: number;
  Money: Long;
  AvatarFrameID?: number;
}

export function encodeLHD_Richest(message: LHD_Richest): Uint8Array {
  let bb = popByteBuffer();
  _encodeLHD_Richest(message, bb);
  return toUint8Array(bb);
}

function _encodeLHD_Richest(message: LHD_Richest, bb: ByteBuffer): void {
  // required int32 Ranking = 1;
  let $Ranking = message.Ranking;
  if ($Ranking !== undefined) {
    writeVarint32(bb, 8);
    writeVarint64(bb, intToLong($Ranking));
  }

  // required int32 UserID = 2;
  let $UserID = message.UserID;
  if ($UserID !== undefined) {
    writeVarint32(bb, 16);
    writeVarint64(bb, intToLong($UserID));
  }

  // required int32 UserFaceID = 3;
  let $UserFaceID = message.UserFaceID;
  if ($UserFaceID !== undefined) {
    writeVarint32(bb, 24);
    writeVarint64(bb, intToLong($UserFaceID));
  }

  // required int64 Money = 4;
  let $Money = message.Money;
  if ($Money !== undefined) {
    writeVarint32(bb, 32);
    writeVarint64(bb, $Money);
  }

  // optional int32 AvatarFrameID = 5;
  let $AvatarFrameID = message.AvatarFrameID;
  if ($AvatarFrameID !== undefined) {
    writeVarint32(bb, 40);
    writeVarint64(bb, intToLong($AvatarFrameID));
  }
}

export function decodeLHD_Richest(binary: Uint8Array): LHD_Richest {
  return _decodeLHD_Richest(wrapByteBuffer(binary));
}

function _decodeLHD_Richest(bb: ByteBuffer): LHD_Richest {
  let message: LHD_Richest = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // required int32 Ranking = 1;
      case 1: {
        message.Ranking = readVarint32(bb);
        break;
      }

      // required int32 UserID = 2;
      case 2: {
        message.UserID = readVarint32(bb);
        break;
      }

      // required int32 UserFaceID = 3;
      case 3: {
        message.UserFaceID = readVarint32(bb);
        break;
      }

      // required int64 Money = 4;
      case 4: {
        message.Money = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // optional int32 AvatarFrameID = 5;
      case 5: {
        message.AvatarFrameID = readVarint32(bb);
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  if (message.Ranking === undefined)
    throw new Error("Missing required field: Ranking");

  if (message.UserID === undefined)
    throw new Error("Missing required field: UserID");

  if (message.UserFaceID === undefined)
    throw new Error("Missing required field: UserFaceID");

  if (message.Money === undefined)
    throw new Error("Missing required field: Money");

  return message;
}

export interface LHD_LuckyStarList {
  LuckyStarList?: LHD_LuckyStar[];
}

export function encodeLHD_LuckyStarList(message: LHD_LuckyStarList): Uint8Array {
  let bb = popByteBuffer();
  _encodeLHD_LuckyStarList(message, bb);
  return toUint8Array(bb);
}

function _encodeLHD_LuckyStarList(message: LHD_LuckyStarList, bb: ByteBuffer): void {
  // repeated LHD_LuckyStar LuckyStarList = 1;
  let array$LuckyStarList = message.LuckyStarList;
  if (array$LuckyStarList !== undefined) {
    for (let value of array$LuckyStarList) {
      writeVarint32(bb, 10);
      let nested = popByteBuffer();
      _encodeLHD_LuckyStar(value, nested);
      writeVarint32(bb, nested.limit);
      writeByteBuffer(bb, nested);
      pushByteBuffer(nested);
    }
  }
}

export function decodeLHD_LuckyStarList(binary: Uint8Array): LHD_LuckyStarList {
  return _decodeLHD_LuckyStarList(wrapByteBuffer(binary));
}

function _decodeLHD_LuckyStarList(bb: ByteBuffer): LHD_LuckyStarList {
  let message: LHD_LuckyStarList = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // repeated LHD_LuckyStar LuckyStarList = 1;
      case 1: {
        let limit = pushTemporaryLength(bb);
        let values = message.LuckyStarList || (message.LuckyStarList = []);
        values.push(_decodeLHD_LuckyStar(bb));
        bb.limit = limit;
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface LHD_LuckyStar {
  UserID: number;
  UserFaceID: number;
  AvatarFrameID?: number;
}

export function encodeLHD_LuckyStar(message: LHD_LuckyStar): Uint8Array {
  let bb = popByteBuffer();
  _encodeLHD_LuckyStar(message, bb);
  return toUint8Array(bb);
}

function _encodeLHD_LuckyStar(message: LHD_LuckyStar, bb: ByteBuffer): void {
  // required int32 UserID = 1;
  let $UserID = message.UserID;
  if ($UserID !== undefined) {
    writeVarint32(bb, 8);
    writeVarint64(bb, intToLong($UserID));
  }

  // required int32 UserFaceID = 2;
  let $UserFaceID = message.UserFaceID;
  if ($UserFaceID !== undefined) {
    writeVarint32(bb, 16);
    writeVarint64(bb, intToLong($UserFaceID));
  }

  // optional int32 AvatarFrameID = 3;
  let $AvatarFrameID = message.AvatarFrameID;
  if ($AvatarFrameID !== undefined) {
    writeVarint32(bb, 24);
    writeVarint64(bb, intToLong($AvatarFrameID));
  }
}

export function decodeLHD_LuckyStar(binary: Uint8Array): LHD_LuckyStar {
  return _decodeLHD_LuckyStar(wrapByteBuffer(binary));
}

function _decodeLHD_LuckyStar(bb: ByteBuffer): LHD_LuckyStar {
  let message: LHD_LuckyStar = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // required int32 UserID = 1;
      case 1: {
        message.UserID = readVarint32(bb);
        break;
      }

      // required int32 UserFaceID = 2;
      case 2: {
        message.UserFaceID = readVarint32(bb);
        break;
      }

      // optional int32 AvatarFrameID = 3;
      case 3: {
        message.AvatarFrameID = readVarint32(bb);
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  if (message.UserID === undefined)
    throw new Error("Missing required field: UserID");

  if (message.UserFaceID === undefined)
    throw new Error("Missing required field: UserFaceID");

  return message;
}

export interface LHD_RoundID {
  LongWin: number;
  HeWin: number;
  HuWin: number;
  RoundID: number;
}

export function encodeLHD_RoundID(message: LHD_RoundID): Uint8Array {
  let bb = popByteBuffer();
  _encodeLHD_RoundID(message, bb);
  return toUint8Array(bb);
}

function _encodeLHD_RoundID(message: LHD_RoundID, bb: ByteBuffer): void {
  // required int32 LongWin = 1;
  let $LongWin = message.LongWin;
  if ($LongWin !== undefined) {
    writeVarint32(bb, 8);
    writeVarint64(bb, intToLong($LongWin));
  }

  // required int32 HeWin = 2;
  let $HeWin = message.HeWin;
  if ($HeWin !== undefined) {
    writeVarint32(bb, 16);
    writeVarint64(bb, intToLong($HeWin));
  }

  // required int32 HuWin = 3;
  let $HuWin = message.HuWin;
  if ($HuWin !== undefined) {
    writeVarint32(bb, 24);
    writeVarint64(bb, intToLong($HuWin));
  }

  // required int32 RoundID = 4;
  let $RoundID = message.RoundID;
  if ($RoundID !== undefined) {
    writeVarint32(bb, 32);
    writeVarint64(bb, intToLong($RoundID));
  }
}

export function decodeLHD_RoundID(binary: Uint8Array): LHD_RoundID {
  return _decodeLHD_RoundID(wrapByteBuffer(binary));
}

function _decodeLHD_RoundID(bb: ByteBuffer): LHD_RoundID {
  let message: LHD_RoundID = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // required int32 LongWin = 1;
      case 1: {
        message.LongWin = readVarint32(bb);
        break;
      }

      // required int32 HeWin = 2;
      case 2: {
        message.HeWin = readVarint32(bb);
        break;
      }

      // required int32 HuWin = 3;
      case 3: {
        message.HuWin = readVarint32(bb);
        break;
      }

      // required int32 RoundID = 4;
      case 4: {
        message.RoundID = readVarint32(bb);
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  if (message.LongWin === undefined)
    throw new Error("Missing required field: LongWin");

  if (message.HeWin === undefined)
    throw new Error("Missing required field: HeWin");

  if (message.HuWin === undefined)
    throw new Error("Missing required field: HuWin");

  if (message.RoundID === undefined)
    throw new Error("Missing required field: RoundID");

  return message;
}

export interface Long {
  low: number;
  high: number;
  unsigned: boolean;
}

interface ByteBuffer {
  bytes: Uint8Array;
  offset: number;
  limit: number;
}

function pushTemporaryLength(bb: ByteBuffer): number {
  let length = readVarint32(bb);
  let limit = bb.limit;
  bb.limit = bb.offset + length;
  return limit;
}

function skipUnknownField(bb: ByteBuffer, type: number): void {
  switch (type) {
    case 0: while (readByte(bb) & 0x80) { } break;
    case 2: skip(bb, readVarint32(bb)); break;
    case 5: skip(bb, 4); break;
    case 1: skip(bb, 8); break;
    default: throw new Error("Unimplemented type: " + type);
  }
}

function stringToLong(value: string): Long {
  return {
    low: value.charCodeAt(0) | (value.charCodeAt(1) << 16),
    high: value.charCodeAt(2) | (value.charCodeAt(3) << 16),
    unsigned: false,
  };
}

function longToString(value: Long): string {
  let low = value.low;
  let high = value.high;
  return String.fromCharCode(
    low & 0xFFFF,
    low >>> 16,
    high & 0xFFFF,
    high >>> 16);
}

// The code below was modified from https://example.invalid/protobufjs/bytebuffer.js
// which is under the Apache License 2.0.

let f32 = new Float32Array(1);
let f32_u8 = new Uint8Array(f32.buffer);

let f64 = new Float64Array(1);
let f64_u8 = new Uint8Array(f64.buffer);

function intToLong(value: number): Long {
  value |= 0;
  return {
    low: value,
    high: value >> 31,
    unsigned: value >= 0,
  };
}

let bbStack: ByteBuffer[] = [];

function popByteBuffer(): ByteBuffer {
  const bb = bbStack.pop();
  if (!bb) return { bytes: new Uint8Array(64), offset: 0, limit: 0 };
  bb.offset = bb.limit = 0;
  return bb;
}

function pushByteBuffer(bb: ByteBuffer): void {
  bbStack.push(bb);
}

function wrapByteBuffer(bytes: Uint8Array): ByteBuffer {
  return { bytes, offset: 0, limit: bytes.length };
}

function toUint8Array(bb: ByteBuffer): Uint8Array {
  let bytes = bb.bytes;
  let limit = bb.limit;
  return bytes.length === limit ? bytes : bytes.subarray(0, limit);
}

function skip(bb: ByteBuffer, offset: number): void {
  if (bb.offset + offset > bb.limit) {
    throw new Error('Skip past limit');
  }
  bb.offset += offset;
}

function isAtEnd(bb: ByteBuffer): boolean {
  return bb.offset >= bb.limit;
}

function grow(bb: ByteBuffer, count: number): number {
  let bytes = bb.bytes;
  let offset = bb.offset;
  let limit = bb.limit;
  let finalOffset = offset + count;
  if (finalOffset > bytes.length) {
    let newBytes = new Uint8Array(finalOffset * 2);
    newBytes.set(bytes);
    bb.bytes = newBytes;
  }
  bb.offset = finalOffset;
  if (finalOffset > limit) {
    bb.limit = finalOffset;
  }
  return offset;
}

function advance(bb: ByteBuffer, count: number): number {
  let offset = bb.offset;
  if (offset + count > bb.limit) {
    throw new Error('Read past limit');
  }
  bb.offset += count;
  return offset;
}

function readBytes(bb: ByteBuffer, count: number): Uint8Array {
  let offset = advance(bb, count);
  return bb.bytes.subarray(offset, offset + count);
}

function writeBytes(bb: ByteBuffer, buffer: Uint8Array): void {
  let offset = grow(bb, buffer.length);
  bb.bytes.set(buffer, offset);
}

function readString(bb: ByteBuffer, count: number): string {
  // Sadly a hand-coded UTF8 decoder is much faster than subarray+TextDecoder in V8
  let offset = advance(bb, count);
  let fromCharCode = String.fromCharCode;
  let bytes = bb.bytes;
  let invalid = '\uFFFD';
  let text = '';

  for (let i = 0; i < count; i++) {
    let c1 = bytes[i + offset], c2: number, c3: number, c4: number, c: number;

    // 1 byte
    if ((c1 & 0x80) === 0) {
      text += fromCharCode(c1);
    }

    // 2 bytes
    else if ((c1 & 0xE0) === 0xC0) {
      if (i + 1 >= count) text += invalid;
      else {
        c2 = bytes[i + offset + 1];
        if ((c2 & 0xC0) !== 0x80) text += invalid;
        else {
          c = ((c1 & 0x1F) << 6) | (c2 & 0x3F);
          if (c < 0x80) text += invalid;
          else {
            text += fromCharCode(c);
            i++;
          }
        }
      }
    }

    // 3 bytes
    else if ((c1 & 0xF0) == 0xE0) {
      if (i + 2 >= count) text += invalid;
      else {
        c2 = bytes[i + offset + 1];
        c3 = bytes[i + offset + 2];
        if (((c2 | (c3 << 8)) & 0xC0C0) !== 0x8080) text += invalid;
        else {
          c = ((c1 & 0x0F) << 12) | ((c2 & 0x3F) << 6) | (c3 & 0x3F);
          if (c < 0x0800 || (c >= 0xD800 && c <= 0xDFFF)) text += invalid;
          else {
            text += fromCharCode(c);
            i += 2;
          }
        }
      }
    }

    // 4 bytes
    else if ((c1 & 0xF8) == 0xF0) {
      if (i + 3 >= count) text += invalid;
      else {
        c2 = bytes[i + offset + 1];
        c3 = bytes[i + offset + 2];
        c4 = bytes[i + offset + 3];
        if (((c2 | (c3 << 8) | (c4 << 16)) & 0xC0C0C0) !== 0x808080) text += invalid;
        else {
          c = ((c1 & 0x07) << 0x12) | ((c2 & 0x3F) << 0x0C) | ((c3 & 0x3F) << 0x06) | (c4 & 0x3F);
          if (c < 0x10000 || c > 0x10FFFF) text += invalid;
          else {
            c -= 0x10000;
            text += fromCharCode((c >> 10) + 0xD800, (c & 0x3FF) + 0xDC00);
            i += 3;
          }
        }
      }
    }

    else text += invalid;
  }

  return text;
}

function writeString(bb: ByteBuffer, text: string): void {
  // Sadly a hand-coded UTF8 encoder is much faster than TextEncoder+set in V8
  let n = text.length;
  let byteCount = 0;

  // Write the byte count first
  for (let i = 0; i < n; i++) {
    let c = text.charCodeAt(i);
    if (c >= 0xD800 && c <= 0xDBFF && i + 1 < n) {
      c = (c << 10) + text.charCodeAt(++i) - 0x35FDC00;
    }
    byteCount += c < 0x80 ? 1 : c < 0x800 ? 2 : c < 0x10000 ? 3 : 4;
  }
  writeVarint32(bb, byteCount);

  let offset = grow(bb, byteCount);
  let bytes = bb.bytes;

  // Then write the bytes
  for (let i = 0; i < n; i++) {
    let c = text.charCodeAt(i);
    if (c >= 0xD800 && c <= 0xDBFF && i + 1 < n) {
      c = (c << 10) + text.charCodeAt(++i) - 0x35FDC00;
    }
    if (c < 0x80) {
      bytes[offset++] = c;
    } else {
      if (c < 0x800) {
        bytes[offset++] = ((c >> 6) & 0x1F) | 0xC0;
      } else {
        if (c < 0x10000) {
          bytes[offset++] = ((c >> 12) & 0x0F) | 0xE0;
        } else {
          bytes[offset++] = ((c >> 18) & 0x07) | 0xF0;
          bytes[offset++] = ((c >> 12) & 0x3F) | 0x80;
        }
        bytes[offset++] = ((c >> 6) & 0x3F) | 0x80;
      }
      bytes[offset++] = (c & 0x3F) | 0x80;
    }
  }
}

function writeByteBuffer(bb: ByteBuffer, buffer: ByteBuffer): void {
  let offset = grow(bb, buffer.limit);
  let from = bb.bytes;
  let to = buffer.bytes;

  // This for loop is much faster than subarray+set on V8
  for (let i = 0, n = buffer.limit; i < n; i++) {
    from[i + offset] = to[i];
  }
}

function readByte(bb: ByteBuffer): number {
  return bb.bytes[advance(bb, 1)];
}

function writeByte(bb: ByteBuffer, value: number): void {
  let offset = grow(bb, 1);
  bb.bytes[offset] = value;
}

function readFloat(bb: ByteBuffer): number {
  let offset = advance(bb, 4);
  let bytes = bb.bytes;

  // Manual copying is much faster than subarray+set in V8
  f32_u8[0] = bytes[offset++];
  f32_u8[1] = bytes[offset++];
  f32_u8[2] = bytes[offset++];
  f32_u8[3] = bytes[offset++];
  return f32[0];
}

function writeFloat(bb: ByteBuffer, value: number): void {
  let offset = grow(bb, 4);
  let bytes = bb.bytes;
  f32[0] = value;

  // Manual copying is much faster than subarray+set in V8
  bytes[offset++] = f32_u8[0];
  bytes[offset++] = f32_u8[1];
  bytes[offset++] = f32_u8[2];
  bytes[offset++] = f32_u8[3];
}

function readDouble(bb: ByteBuffer): number {
  let offset = advance(bb, 8);
  let bytes = bb.bytes;

  // Manual copying is much faster than subarray+set in V8
  f64_u8[0] = bytes[offset++];
  f64_u8[1] = bytes[offset++];
  f64_u8[2] = bytes[offset++];
  f64_u8[3] = bytes[offset++];
  f64_u8[4] = bytes[offset++];
  f64_u8[5] = bytes[offset++];
  f64_u8[6] = bytes[offset++];
  f64_u8[7] = bytes[offset++];
  return f64[0];
}

function writeDouble(bb: ByteBuffer, value: number): void {
  let offset = grow(bb, 8);
  let bytes = bb.bytes;
  f64[0] = value;

  // Manual copying is much faster than subarray+set in V8
  bytes[offset++] = f64_u8[0];
  bytes[offset++] = f64_u8[1];
  bytes[offset++] = f64_u8[2];
  bytes[offset++] = f64_u8[3];
  bytes[offset++] = f64_u8[4];
  bytes[offset++] = f64_u8[5];
  bytes[offset++] = f64_u8[6];
  bytes[offset++] = f64_u8[7];
}

function readInt32(bb: ByteBuffer): number {
  let offset = advance(bb, 4);
  let bytes = bb.bytes;
  return (
    bytes[offset] |
    (bytes[offset + 1] << 8) |
    (bytes[offset + 2] << 16) |
    (bytes[offset + 3] << 24)
  );
}

function writeInt32(bb: ByteBuffer, value: number): void {
  let offset = grow(bb, 4);
  let bytes = bb.bytes;
  bytes[offset] = value;
  bytes[offset + 1] = value >> 8;
  bytes[offset + 2] = value >> 16;
  bytes[offset + 3] = value >> 24;
}

function readInt64(bb: ByteBuffer, unsigned: boolean): Long {
  return {
    low: readInt32(bb),
    high: readInt32(bb),
    unsigned,
  };
}

function writeInt64(bb: ByteBuffer, value: Long): void {
  writeInt32(bb, value.low);
  writeInt32(bb, value.high);
}

function readVarint32(bb: ByteBuffer): number {
  let c = 0;
  let value = 0;
  let b: number;
  do {
    b = readByte(bb);
    if (c < 32) value |= (b & 0x7F) << c;
    c += 7;
  } while (b & 0x80);
  return value;
}

function writeVarint32(bb: ByteBuffer, value: number): void {
  value >>>= 0;
  while (value >= 0x80) {
    writeByte(bb, (value & 0x7f) | 0x80);
    value >>>= 7;
  }
  writeByte(bb, value);
}

function readVarint64(bb: ByteBuffer, unsigned: boolean): Long {
  let part0 = 0;
  let part1 = 0;
  let part2 = 0;
  let b: number;

  b = readByte(bb); part0 = (b & 0x7F); if (b & 0x80) {
    b = readByte(bb); part0 |= (b & 0x7F) << 7; if (b & 0x80) {
      b = readByte(bb); part0 |= (b & 0x7F) << 14; if (b & 0x80) {
        b = readByte(bb); part0 |= (b & 0x7F) << 21; if (b & 0x80) {

          b = readByte(bb); part1 = (b & 0x7F); if (b & 0x80) {
            b = readByte(bb); part1 |= (b & 0x7F) << 7; if (b & 0x80) {
              b = readByte(bb); part1 |= (b & 0x7F) << 14; if (b & 0x80) {
                b = readByte(bb); part1 |= (b & 0x7F) << 21; if (b & 0x80) {

                  b = readByte(bb); part2 = (b & 0x7F); if (b & 0x80) {
                    b = readByte(bb); part2 |= (b & 0x7F) << 7;
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  return {
    low: part0 | (part1 << 28),
    high: (part1 >>> 4) | (part2 << 24),
    unsigned,
  };
}

function writeVarint64(bb: ByteBuffer, value: Long): void {
  let part0 = value.low >>> 0;
  let part1 = ((value.low >>> 28) | (value.high << 4)) >>> 0;
  let part2 = value.high >>> 24;

  // ref: src/google/protobuf/io/coded_stream.cc
  let size =
    part2 === 0 ?
      part1 === 0 ?
        part0 < 1 << 14 ?
          part0 < 1 << 7 ? 1 : 2 :
          part0 < 1 << 21 ? 3 : 4 :
        part1 < 1 << 14 ?
          part1 < 1 << 7 ? 5 : 6 :
          part1 < 1 << 21 ? 7 : 8 :
      part2 < 1 << 7 ? 9 : 10;

  let offset = grow(bb, size);
  let bytes = bb.bytes;

  switch (size) {
    case 10: bytes[offset + 9] = (part2 >>> 7) & 0x01;
    case 9: bytes[offset + 8] = size !== 9 ? part2 | 0x80 : part2 & 0x7F;
    case 8: bytes[offset + 7] = size !== 8 ? (part1 >>> 21) | 0x80 : (part1 >>> 21) & 0x7F;
    case 7: bytes[offset + 6] = size !== 7 ? (part1 >>> 14) | 0x80 : (part1 >>> 14) & 0x7F;
    case 6: bytes[offset + 5] = size !== 6 ? (part1 >>> 7) | 0x80 : (part1 >>> 7) & 0x7F;
    case 5: bytes[offset + 4] = size !== 5 ? part1 | 0x80 : part1 & 0x7F;
    case 4: bytes[offset + 3] = size !== 4 ? (part0 >>> 21) | 0x80 : (part0 >>> 21) & 0x7F;
    case 3: bytes[offset + 2] = size !== 3 ? (part0 >>> 14) | 0x80 : (part0 >>> 14) & 0x7F;
    case 2: bytes[offset + 1] = size !== 2 ? (part0 >>> 7) | 0x80 : (part0 >>> 7) & 0x7F;
    case 1: bytes[offset] = size !== 1 ? part0 | 0x80 : part0 & 0x7F;
  }
}

function readVarint32ZigZag(bb: ByteBuffer): number {
  let value = readVarint32(bb);

  // ref: src/google/protobuf/wire_format_lite.h
  return (value >>> 1) ^ -(value & 1);
}

function writeVarint32ZigZag(bb: ByteBuffer, value: number): void {
  // ref: src/google/protobuf/wire_format_lite.h
  writeVarint32(bb, (value << 1) ^ (value >> 31));
}

function readVarint64ZigZag(bb: ByteBuffer): Long {
  let value = readVarint64(bb, /* unsigned */ false);
  let low = value.low;
  let high = value.high;
  let flip = -(low & 1);

  // ref: src/google/protobuf/wire_format_lite.h
  return {
    low: ((low >>> 1) | (high << 31)) ^ flip,
    high: (high >>> 1) ^ flip,
    unsigned: false,
  };
}

function writeVarint64ZigZag(bb: ByteBuffer, value: Long): void {
  let low = value.low;
  let high = value.high;
  let flip = high >> 31;

  // ref: src/google/protobuf/wire_format_lite.h
  writeVarint64(bb, {
    low: (low << 1) ^ flip,
    high: ((high << 1) | (low >>> 31)) ^ flip,
    unsigned: false,
  });
}
