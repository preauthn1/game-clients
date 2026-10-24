export const enum Roulette_ResultCode {
  Roulette_ResultCodeSuccess = "Roulette_ResultCodeSuccess",
  Roulette_ResultCodeMoneyNotEnough = "Roulette_ResultCodeMoneyNotEnough",
  Roulette_ResultCodeIllegalBetType = "Roulette_ResultCodeIllegalBetType",
  Roulette_ResultCodeIllegalBetMoney = "Roulette_ResultCodeIllegalBetMoney",
  Roulette_ResultCodeBetTypeOverLimit = "Roulette_ResultCodeBetTypeOverLimit",
  Roulette_ResultCodeAlreadyBetOtherSide = "Roulette_ResultCodeAlreadyBetOtherSide",
  Roulette_ResultCodeCarryMoneyNotEnough = "Roulette_ResultCodeCarryMoneyNotEnough",
  Roulette_ResultCodeNotBetStep = "Roulette_ResultCodeNotBetStep",
  Roulette_ResultCodeIllegalNumbers = "Roulette_ResultCodeIllegalNumbers",
  Roulette_ResultCodeInvalidArgument = "Roulette_ResultCodeInvalidArgument",
  Roulette_ResultCodeInternalError = "Roulette_ResultCodeInternalError",
}

export const encodeRoulette_ResultCode: { [key: string]: number } = {
  Roulette_ResultCodeSuccess: 0,
  Roulette_ResultCodeMoneyNotEnough: 100,
  Roulette_ResultCodeIllegalBetType: 101,
  Roulette_ResultCodeIllegalBetMoney: 102,
  Roulette_ResultCodeBetTypeOverLimit: 104,
  Roulette_ResultCodeAlreadyBetOtherSide: 105,
  Roulette_ResultCodeCarryMoneyNotEnough: 106,
  Roulette_ResultCodeNotBetStep: 107,
  Roulette_ResultCodeIllegalNumbers: 108,
  Roulette_ResultCodeInvalidArgument: 9400,
  Roulette_ResultCodeInternalError: 9500,
};

export const decodeRoulette_ResultCode: { [key: number]: Roulette_ResultCode } = {
  0: Roulette_ResultCode.Roulette_ResultCodeSuccess,
  100: Roulette_ResultCode.Roulette_ResultCodeMoneyNotEnough,
  101: Roulette_ResultCode.Roulette_ResultCodeIllegalBetType,
  102: Roulette_ResultCode.Roulette_ResultCodeIllegalBetMoney,
  104: Roulette_ResultCode.Roulette_ResultCodeBetTypeOverLimit,
  105: Roulette_ResultCode.Roulette_ResultCodeAlreadyBetOtherSide,
  106: Roulette_ResultCode.Roulette_ResultCodeCarryMoneyNotEnough,
  107: Roulette_ResultCode.Roulette_ResultCodeNotBetStep,
  108: Roulette_ResultCode.Roulette_ResultCodeIllegalNumbers,
  9400: Roulette_ResultCode.Roulette_ResultCodeInvalidArgument,
  9500: Roulette_ResultCode.Roulette_ResultCodeInternalError,
};

export const enum Roulette_BetType {
  Roulette_BetTypeNone = "Roulette_BetTypeNone",
  Roulette_BetTypeOdd = "Roulette_BetTypeOdd",
  Roulette_BetTypeEven = "Roulette_BetTypeEven",
  Roulette_BetTypeRed = "Roulette_BetTypeRed",
  Roulette_BetTypeBlack = "Roulette_BetTypeBlack",
  Roulette_BetTypeSmall = "Roulette_BetTypeSmall",
  Roulette_BetTypeBig = "Roulette_BetTypeBig",
  Roulette_BetTypeFirst12 = "Roulette_BetTypeFirst12",
  Roulette_BetTypeSecond12 = "Roulette_BetTypeSecond12",
  Roulette_BetTypeThird12 = "Roulette_BetTypeThird12",
  Roulette_BetTypeFirstRow = "Roulette_BetTypeFirstRow",
  Roulette_BetTypeSecondRow = "Roulette_BetTypeSecondRow",
  Roulette_BetTypeThirdRow = "Roulette_BetTypeThirdRow",
  Roulette_BetTypeOneNumber = "Roulette_BetTypeOneNumber",
  Roulette_BetTypeTwoNumber = "Roulette_BetTypeTwoNumber",
  Roulette_BetTypeThreeNumber = "Roulette_BetTypeThreeNumber",
  Roulette_BetTypeFourNumber = "Roulette_BetTypeFourNumber",
  Roulette_BetTypeSixNumber = "Roulette_BetTypeSixNumber",
  Roulette_BetTypeSuperZero = "Roulette_BetTypeSuperZero",
}

export const encodeRoulette_BetType: { [key: string]: number } = {
  Roulette_BetTypeNone: 0,
  Roulette_BetTypeOdd: 1,
  Roulette_BetTypeEven: 2,
  Roulette_BetTypeRed: 3,
  Roulette_BetTypeBlack: 4,
  Roulette_BetTypeSmall: 5,
  Roulette_BetTypeBig: 6,
  Roulette_BetTypeFirst12: 7,
  Roulette_BetTypeSecond12: 8,
  Roulette_BetTypeThird12: 9,
  Roulette_BetTypeFirstRow: 10,
  Roulette_BetTypeSecondRow: 11,
  Roulette_BetTypeThirdRow: 12,
  Roulette_BetTypeOneNumber: 13,
  Roulette_BetTypeTwoNumber: 14,
  Roulette_BetTypeThreeNumber: 15,
  Roulette_BetTypeFourNumber: 16,
  Roulette_BetTypeSixNumber: 17,
  Roulette_BetTypeSuperZero: 18,
};

export const decodeRoulette_BetType: { [key: number]: Roulette_BetType } = {
  0: Roulette_BetType.Roulette_BetTypeNone,
  1: Roulette_BetType.Roulette_BetTypeOdd,
  2: Roulette_BetType.Roulette_BetTypeEven,
  3: Roulette_BetType.Roulette_BetTypeRed,
  4: Roulette_BetType.Roulette_BetTypeBlack,
  5: Roulette_BetType.Roulette_BetTypeSmall,
  6: Roulette_BetType.Roulette_BetTypeBig,
  7: Roulette_BetType.Roulette_BetTypeFirst12,
  8: Roulette_BetType.Roulette_BetTypeSecond12,
  9: Roulette_BetType.Roulette_BetTypeThird12,
  10: Roulette_BetType.Roulette_BetTypeFirstRow,
  11: Roulette_BetType.Roulette_BetTypeSecondRow,
  12: Roulette_BetType.Roulette_BetTypeThirdRow,
  13: Roulette_BetType.Roulette_BetTypeOneNumber,
  14: Roulette_BetType.Roulette_BetTypeTwoNumber,
  15: Roulette_BetType.Roulette_BetTypeThreeNumber,
  16: Roulette_BetType.Roulette_BetTypeFourNumber,
  17: Roulette_BetType.Roulette_BetTypeSixNumber,
  18: Roulette_BetType.Roulette_BetTypeSuperZero,
};

export const enum Roulette_Step {
  Roulette_StepPrepare = "Roulette_StepPrepare",
  Roulette_StepStart = "Roulette_StepStart",
  Roulette_StepWaitBet = "Roulette_StepWaitBet",
  Roulette_StepShowAward = "Roulette_StepShowAward",
  Roulette_StepFinish = "Roulette_StepFinish",
}

export const encodeRoulette_Step: { [key: string]: number } = {
  Roulette_StepPrepare: 0,
  Roulette_StepStart: 1,
  Roulette_StepWaitBet: 2,
  Roulette_StepShowAward: 3,
  Roulette_StepFinish: 4,
};

export const decodeRoulette_Step: { [key: number]: Roulette_Step } = {
  0: Roulette_Step.Roulette_StepPrepare,
  1: Roulette_Step.Roulette_StepStart,
  2: Roulette_Step.Roulette_StepWaitBet,
  3: Roulette_Step.Roulette_StepShowAward,
  4: Roulette_Step.Roulette_StepFinish,
};

export interface Roulette_BetArea {
  Type?: Roulette_BetType;
  MinBet?: Long;
  MaxBet?: Long;
  Odd?: number;
}

export function encodeRoulette_BetArea(message: Roulette_BetArea): Uint8Array {
  let bb = popByteBuffer();
  _encodeRoulette_BetArea(message, bb);
  return toUint8Array(bb);
}

function _encodeRoulette_BetArea(message: Roulette_BetArea, bb: ByteBuffer): void {
  // optional Roulette_BetType Type = 1;
  let $Type = message.Type;
  if ($Type !== undefined) {
    writeVarint32(bb, 8);
    writeVarint32(bb, encodeRoulette_BetType[$Type]);
  }

  // optional int64 MinBet = 2;
  let $MinBet = message.MinBet;
  if ($MinBet !== undefined) {
    writeVarint32(bb, 16);
    writeVarint64(bb, $MinBet);
  }

  // optional int64 MaxBet = 3;
  let $MaxBet = message.MaxBet;
  if ($MaxBet !== undefined) {
    writeVarint32(bb, 24);
    writeVarint64(bb, $MaxBet);
  }

  // optional double Odd = 4;
  let $Odd = message.Odd;
  if ($Odd !== undefined) {
    writeVarint32(bb, 33);
    writeDouble(bb, $Odd);
  }
}

export function decodeRoulette_BetArea(binary: Uint8Array): Roulette_BetArea {
  return _decodeRoulette_BetArea(wrapByteBuffer(binary));
}

function _decodeRoulette_BetArea(bb: ByteBuffer): Roulette_BetArea {
  let message: Roulette_BetArea = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional Roulette_BetType Type = 1;
      case 1: {
        message.Type = decodeRoulette_BetType[readVarint32(bb)];
        break;
      }

      // optional int64 MinBet = 2;
      case 2: {
        message.MinBet = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // optional int64 MaxBet = 3;
      case 3: {
        message.MaxBet = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // optional double Odd = 4;
      case 4: {
        message.Odd = readDouble(bb);
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface Roulette_Bet {
  Type?: Roulette_BetType;
  Money?: Long;
  Numbers?: number[];
}

export function encodeRoulette_Bet(message: Roulette_Bet): Uint8Array {
  let bb = popByteBuffer();
  _encodeRoulette_Bet(message, bb);
  return toUint8Array(bb);
}

function _encodeRoulette_Bet(message: Roulette_Bet, bb: ByteBuffer): void {
  // optional Roulette_BetType Type = 1;
  let $Type = message.Type;
  if ($Type !== undefined) {
    writeVarint32(bb, 8);
    writeVarint32(bb, encodeRoulette_BetType[$Type]);
  }

  // optional int64 Money = 2;
  let $Money = message.Money;
  if ($Money !== undefined) {
    writeVarint32(bb, 16);
    writeVarint64(bb, $Money);
  }

  // repeated uint32 Numbers = 3;
  let array$Numbers = message.Numbers;
  if (array$Numbers !== undefined) {
    let packed = popByteBuffer();
    for (let value of array$Numbers) {
      writeVarint32(packed, value);
    }
    writeVarint32(bb, 26);
    writeVarint32(bb, packed.offset);
    writeByteBuffer(bb, packed);
    pushByteBuffer(packed);
  }
}

export function decodeRoulette_Bet(binary: Uint8Array): Roulette_Bet {
  return _decodeRoulette_Bet(wrapByteBuffer(binary));
}

function _decodeRoulette_Bet(bb: ByteBuffer): Roulette_Bet {
  let message: Roulette_Bet = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional Roulette_BetType Type = 1;
      case 1: {
        message.Type = decodeRoulette_BetType[readVarint32(bb)];
        break;
      }

      // optional int64 Money = 2;
      case 2: {
        message.Money = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // repeated uint32 Numbers = 3;
      case 3: {
        let values = message.Numbers || (message.Numbers = []);
        if ((tag & 7) === 2) {
          let outerLimit = pushTemporaryLength(bb);
          while (!isAtEnd(bb)) {
            values.push(readVarint32(bb) >>> 0);
          }
          bb.limit = outerLimit;
        } else {
          values.push(readVarint32(bb) >>> 0);
        }
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface Roulette_UserInfo {
  UserID?: number;
  UserName?: string;
  FaceID?: number;
  AvatarFrameID?: number;
  Money?: Long;
  Ranking?: number;
  Win?: Long;
}

export function encodeRoulette_UserInfo(message: Roulette_UserInfo): Uint8Array {
  let bb = popByteBuffer();
  _encodeRoulette_UserInfo(message, bb);
  return toUint8Array(bb);
}

function _encodeRoulette_UserInfo(message: Roulette_UserInfo, bb: ByteBuffer): void {
  // optional int32 UserID = 1;
  let $UserID = message.UserID;
  if ($UserID !== undefined) {
    writeVarint32(bb, 8);
    writeVarint64(bb, intToLong($UserID));
  }

  // optional string UserName = 2;
  let $UserName = message.UserName;
  if ($UserName !== undefined) {
    writeVarint32(bb, 18);
    writeString(bb, $UserName);
  }

  // optional int32 FaceID = 3;
  let $FaceID = message.FaceID;
  if ($FaceID !== undefined) {
    writeVarint32(bb, 24);
    writeVarint64(bb, intToLong($FaceID));
  }

  // optional int32 AvatarFrameID = 4;
  let $AvatarFrameID = message.AvatarFrameID;
  if ($AvatarFrameID !== undefined) {
    writeVarint32(bb, 32);
    writeVarint64(bb, intToLong($AvatarFrameID));
  }

  // optional int64 Money = 5;
  let $Money = message.Money;
  if ($Money !== undefined) {
    writeVarint32(bb, 40);
    writeVarint64(bb, $Money);
  }

  // optional int32 Ranking = 10;
  let $Ranking = message.Ranking;
  if ($Ranking !== undefined) {
    writeVarint32(bb, 80);
    writeVarint64(bb, intToLong($Ranking));
  }

  // optional int64 Win = 20;
  let $Win = message.Win;
  if ($Win !== undefined) {
    writeVarint32(bb, 160);
    writeVarint64(bb, $Win);
  }
}

export function decodeRoulette_UserInfo(binary: Uint8Array): Roulette_UserInfo {
  return _decodeRoulette_UserInfo(wrapByteBuffer(binary));
}

function _decodeRoulette_UserInfo(bb: ByteBuffer): Roulette_UserInfo {
  let message: Roulette_UserInfo = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional int32 UserID = 1;
      case 1: {
        message.UserID = readVarint32(bb);
        break;
      }

      // optional string UserName = 2;
      case 2: {
        message.UserName = readString(bb, readVarint32(bb));
        break;
      }

      // optional int32 FaceID = 3;
      case 3: {
        message.FaceID = readVarint32(bb);
        break;
      }

      // optional int32 AvatarFrameID = 4;
      case 4: {
        message.AvatarFrameID = readVarint32(bb);
        break;
      }

      // optional int64 Money = 5;
      case 5: {
        message.Money = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // optional int32 Ranking = 10;
      case 10: {
        message.Ranking = readVarint32(bb);
        break;
      }

      // optional int64 Win = 20;
      case 20: {
        message.Win = readVarint64(bb, /* unsigned */ false);
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface Roulette_Setting {
  BetMinCarry?: Long;
  BetCount?: Long[];
  BetAreas?: Roulette_BetArea[];
  UserMaxBet?: Long;
}

export function encodeRoulette_Setting(message: Roulette_Setting): Uint8Array {
  let bb = popByteBuffer();
  _encodeRoulette_Setting(message, bb);
  return toUint8Array(bb);
}

function _encodeRoulette_Setting(message: Roulette_Setting, bb: ByteBuffer): void {
  // optional int64 BetMinCarry = 1;
  let $BetMinCarry = message.BetMinCarry;
  if ($BetMinCarry !== undefined) {
    writeVarint32(bb, 8);
    writeVarint64(bb, $BetMinCarry);
  }

  // repeated int64 BetCount = 2;
  let array$BetCount = message.BetCount;
  if (array$BetCount !== undefined) {
    let packed = popByteBuffer();
    for (let value of array$BetCount) {
      writeVarint64(packed, value);
    }
    writeVarint32(bb, 18);
    writeVarint32(bb, packed.offset);
    writeByteBuffer(bb, packed);
    pushByteBuffer(packed);
  }

  // repeated Roulette_BetArea BetAreas = 3;
  let array$BetAreas = message.BetAreas;
  if (array$BetAreas !== undefined) {
    for (let value of array$BetAreas) {
      writeVarint32(bb, 26);
      let nested = popByteBuffer();
      _encodeRoulette_BetArea(value, nested);
      writeVarint32(bb, nested.limit);
      writeByteBuffer(bb, nested);
      pushByteBuffer(nested);
    }
  }

  // optional int64 UserMaxBet = 4;
  let $UserMaxBet = message.UserMaxBet;
  if ($UserMaxBet !== undefined) {
    writeVarint32(bb, 32);
    writeVarint64(bb, $UserMaxBet);
  }
}

export function decodeRoulette_Setting(binary: Uint8Array): Roulette_Setting {
  return _decodeRoulette_Setting(wrapByteBuffer(binary));
}

function _decodeRoulette_Setting(bb: ByteBuffer): Roulette_Setting {
  let message: Roulette_Setting = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional int64 BetMinCarry = 1;
      case 1: {
        message.BetMinCarry = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // repeated int64 BetCount = 2;
      case 2: {
        let values = message.BetCount || (message.BetCount = []);
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

      // repeated Roulette_BetArea BetAreas = 3;
      case 3: {
        let limit = pushTemporaryLength(bb);
        let values = message.BetAreas || (message.BetAreas = []);
        values.push(_decodeRoulette_BetArea(bb));
        bb.limit = limit;
        break;
      }

      // optional int64 UserMaxBet = 4;
      case 4: {
        message.UserMaxBet = readVarint64(bb, /* unsigned */ false);
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface Roulette_StepInfo {
  Step?: Roulette_Step;
  Time?: number;
}

export function encodeRoulette_StepInfo(message: Roulette_StepInfo): Uint8Array {
  let bb = popByteBuffer();
  _encodeRoulette_StepInfo(message, bb);
  return toUint8Array(bb);
}

function _encodeRoulette_StepInfo(message: Roulette_StepInfo, bb: ByteBuffer): void {
  // optional Roulette_Step Step = 1;
  let $Step = message.Step;
  if ($Step !== undefined) {
    writeVarint32(bb, 8);
    writeVarint32(bb, encodeRoulette_Step[$Step]);
  }

  // optional int32 Time = 2;
  let $Time = message.Time;
  if ($Time !== undefined) {
    writeVarint32(bb, 16);
    writeVarint64(bb, intToLong($Time));
  }
}

export function decodeRoulette_StepInfo(binary: Uint8Array): Roulette_StepInfo {
  return _decodeRoulette_StepInfo(wrapByteBuffer(binary));
}

function _decodeRoulette_StepInfo(bb: ByteBuffer): Roulette_StepInfo {
  let message: Roulette_StepInfo = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional Roulette_Step Step = 1;
      case 1: {
        message.Step = decodeRoulette_Step[readVarint32(bb)];
        break;
      }

      // optional int32 Time = 2;
      case 2: {
        message.Time = readVarint32(bb);
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface Roulette_RoundInfo {
  RoundID?: number;
  Goal?: number;
  Save?: number;
}

export function encodeRoulette_RoundInfo(message: Roulette_RoundInfo): Uint8Array {
  let bb = popByteBuffer();
  _encodeRoulette_RoundInfo(message, bb);
  return toUint8Array(bb);
}

function _encodeRoulette_RoundInfo(message: Roulette_RoundInfo, bb: ByteBuffer): void {
  // optional int32 RoundID = 4;
  let $RoundID = message.RoundID;
  if ($RoundID !== undefined) {
    writeVarint32(bb, 32);
    writeVarint64(bb, intToLong($RoundID));
  }

  // optional int32 Goal = 1;
  let $Goal = message.Goal;
  if ($Goal !== undefined) {
    writeVarint32(bb, 8);
    writeVarint64(bb, intToLong($Goal));
  }

  // optional int32 Save = 2;
  let $Save = message.Save;
  if ($Save !== undefined) {
    writeVarint32(bb, 16);
    writeVarint64(bb, intToLong($Save));
  }
}

export function decodeRoulette_RoundInfo(binary: Uint8Array): Roulette_RoundInfo {
  return _decodeRoulette_RoundInfo(wrapByteBuffer(binary));
}

function _decodeRoulette_RoundInfo(bb: ByteBuffer): Roulette_RoundInfo {
  let message: Roulette_RoundInfo = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional int32 RoundID = 4;
      case 4: {
        message.RoundID = readVarint32(bb);
        break;
      }

      // optional int32 Goal = 1;
      case 1: {
        message.Goal = readVarint32(bb);
        break;
      }

      // optional int32 Save = 2;
      case 2: {
        message.Save = readVarint32(bb);
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface Roulette_BoardCastBet {
  UserID?: number;
  Bets?: Roulette_Bet[];
}

export function encodeRoulette_BoardCastBet(message: Roulette_BoardCastBet): Uint8Array {
  let bb = popByteBuffer();
  _encodeRoulette_BoardCastBet(message, bb);
  return toUint8Array(bb);
}

function _encodeRoulette_BoardCastBet(message: Roulette_BoardCastBet, bb: ByteBuffer): void {
  // optional int32 UserID = 1;
  let $UserID = message.UserID;
  if ($UserID !== undefined) {
    writeVarint32(bb, 8);
    writeVarint64(bb, intToLong($UserID));
  }

  // repeated Roulette_Bet Bets = 2;
  let array$Bets = message.Bets;
  if (array$Bets !== undefined) {
    for (let value of array$Bets) {
      writeVarint32(bb, 18);
      let nested = popByteBuffer();
      _encodeRoulette_Bet(value, nested);
      writeVarint32(bb, nested.limit);
      writeByteBuffer(bb, nested);
      pushByteBuffer(nested);
    }
  }
}

export function decodeRoulette_BoardCastBet(binary: Uint8Array): Roulette_BoardCastBet {
  return _decodeRoulette_BoardCastBet(wrapByteBuffer(binary));
}

function _decodeRoulette_BoardCastBet(bb: ByteBuffer): Roulette_BoardCastBet {
  let message: Roulette_BoardCastBet = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional int32 UserID = 1;
      case 1: {
        message.UserID = readVarint32(bb);
        break;
      }

      // repeated Roulette_Bet Bets = 2;
      case 2: {
        let limit = pushTemporaryLength(bb);
        let values = message.Bets || (message.Bets = []);
        values.push(_decodeRoulette_Bet(bb));
        bb.limit = limit;
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface Roulette_GameResult {
  RoundID?: number;
  Result?: number;
}

export function encodeRoulette_GameResult(message: Roulette_GameResult): Uint8Array {
  let bb = popByteBuffer();
  _encodeRoulette_GameResult(message, bb);
  return toUint8Array(bb);
}

function _encodeRoulette_GameResult(message: Roulette_GameResult, bb: ByteBuffer): void {
  // optional int32 RoundID = 1;
  let $RoundID = message.RoundID;
  if ($RoundID !== undefined) {
    writeVarint32(bb, 8);
    writeVarint64(bb, intToLong($RoundID));
  }

  // optional uint32 Result = 2;
  let $Result = message.Result;
  if ($Result !== undefined) {
    writeVarint32(bb, 16);
    writeVarint32(bb, $Result);
  }
}

export function decodeRoulette_GameResult(binary: Uint8Array): Roulette_GameResult {
  return _decodeRoulette_GameResult(wrapByteBuffer(binary));
}

function _decodeRoulette_GameResult(bb: ByteBuffer): Roulette_GameResult {
  let message: Roulette_GameResult = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional int32 RoundID = 1;
      case 1: {
        message.RoundID = readVarint32(bb);
        break;
      }

      // optional uint32 Result = 2;
      case 2: {
        message.Result = readVarint32(bb) >>> 0;
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface Roulette_GameResultWin {
  Win?: Long;
  WinUserInfo?: Roulette_UserInfo[];
  StageUserInfo?: Roulette_UserInfo[];
}

export function encodeRoulette_GameResultWin(message: Roulette_GameResultWin): Uint8Array {
  let bb = popByteBuffer();
  _encodeRoulette_GameResultWin(message, bb);
  return toUint8Array(bb);
}

function _encodeRoulette_GameResultWin(message: Roulette_GameResultWin, bb: ByteBuffer): void {
  // optional int64 Win = 1;
  let $Win = message.Win;
  if ($Win !== undefined) {
    writeVarint32(bb, 8);
    writeVarint64(bb, $Win);
  }

  // repeated Roulette_UserInfo WinUserInfo = 2;
  let array$WinUserInfo = message.WinUserInfo;
  if (array$WinUserInfo !== undefined) {
    for (let value of array$WinUserInfo) {
      writeVarint32(bb, 18);
      let nested = popByteBuffer();
      _encodeRoulette_UserInfo(value, nested);
      writeVarint32(bb, nested.limit);
      writeByteBuffer(bb, nested);
      pushByteBuffer(nested);
    }
  }

  // repeated Roulette_UserInfo StageUserInfo = 3;
  let array$StageUserInfo = message.StageUserInfo;
  if (array$StageUserInfo !== undefined) {
    for (let value of array$StageUserInfo) {
      writeVarint32(bb, 26);
      let nested = popByteBuffer();
      _encodeRoulette_UserInfo(value, nested);
      writeVarint32(bb, nested.limit);
      writeByteBuffer(bb, nested);
      pushByteBuffer(nested);
    }
  }
}

export function decodeRoulette_GameResultWin(binary: Uint8Array): Roulette_GameResultWin {
  return _decodeRoulette_GameResultWin(wrapByteBuffer(binary));
}

function _decodeRoulette_GameResultWin(bb: ByteBuffer): Roulette_GameResultWin {
  let message: Roulette_GameResultWin = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional int64 Win = 1;
      case 1: {
        message.Win = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // repeated Roulette_UserInfo WinUserInfo = 2;
      case 2: {
        let limit = pushTemporaryLength(bb);
        let values = message.WinUserInfo || (message.WinUserInfo = []);
        values.push(_decodeRoulette_UserInfo(bb));
        bb.limit = limit;
        break;
      }

      // repeated Roulette_UserInfo StageUserInfo = 3;
      case 3: {
        let limit = pushTemporaryLength(bb);
        let values = message.StageUserInfo || (message.StageUserInfo = []);
        values.push(_decodeRoulette_UserInfo(bb));
        bb.limit = limit;
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface Roulette_GameRecords {
  Results?: Roulette_GameResult[];
}

export function encodeRoulette_GameRecords(message: Roulette_GameRecords): Uint8Array {
  let bb = popByteBuffer();
  _encodeRoulette_GameRecords(message, bb);
  return toUint8Array(bb);
}

function _encodeRoulette_GameRecords(message: Roulette_GameRecords, bb: ByteBuffer): void {
  // repeated Roulette_GameResult Results = 1;
  let array$Results = message.Results;
  if (array$Results !== undefined) {
    for (let value of array$Results) {
      writeVarint32(bb, 10);
      let nested = popByteBuffer();
      _encodeRoulette_GameResult(value, nested);
      writeVarint32(bb, nested.limit);
      writeByteBuffer(bb, nested);
      pushByteBuffer(nested);
    }
  }
}

export function decodeRoulette_GameRecords(binary: Uint8Array): Roulette_GameRecords {
  return _decodeRoulette_GameRecords(wrapByteBuffer(binary));
}

function _decodeRoulette_GameRecords(bb: ByteBuffer): Roulette_GameRecords {
  let message: Roulette_GameRecords = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // repeated Roulette_GameResult Results = 1;
      case 1: {
        let limit = pushTemporaryLength(bb);
        let values = message.Results || (message.Results = []);
        values.push(_decodeRoulette_GameResult(bb));
        bb.limit = limit;
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface Roulette_RichestList {
  Users?: Roulette_UserInfo[];
}

export function encodeRoulette_RichestList(message: Roulette_RichestList): Uint8Array {
  let bb = popByteBuffer();
  _encodeRoulette_RichestList(message, bb);
  return toUint8Array(bb);
}

function _encodeRoulette_RichestList(message: Roulette_RichestList, bb: ByteBuffer): void {
  // repeated Roulette_UserInfo Users = 1;
  let array$Users = message.Users;
  if (array$Users !== undefined) {
    for (let value of array$Users) {
      writeVarint32(bb, 10);
      let nested = popByteBuffer();
      _encodeRoulette_UserInfo(value, nested);
      writeVarint32(bb, nested.limit);
      writeByteBuffer(bb, nested);
      pushByteBuffer(nested);
    }
  }
}

export function decodeRoulette_RichestList(binary: Uint8Array): Roulette_RichestList {
  return _decodeRoulette_RichestList(wrapByteBuffer(binary));
}

function _decodeRoulette_RichestList(bb: ByteBuffer): Roulette_RichestList {
  let message: Roulette_RichestList = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // repeated Roulette_UserInfo Users = 1;
      case 1: {
        let limit = pushTemporaryLength(bb);
        let values = message.Users || (message.Users = []);
        values.push(_decodeRoulette_UserInfo(bb));
        bb.limit = limit;
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface Roulette_LuckyStarList {
  Users?: Roulette_UserInfo[];
}

export function encodeRoulette_LuckyStarList(message: Roulette_LuckyStarList): Uint8Array {
  let bb = popByteBuffer();
  _encodeRoulette_LuckyStarList(message, bb);
  return toUint8Array(bb);
}

function _encodeRoulette_LuckyStarList(message: Roulette_LuckyStarList, bb: ByteBuffer): void {
  // repeated Roulette_UserInfo Users = 1;
  let array$Users = message.Users;
  if (array$Users !== undefined) {
    for (let value of array$Users) {
      writeVarint32(bb, 10);
      let nested = popByteBuffer();
      _encodeRoulette_UserInfo(value, nested);
      writeVarint32(bb, nested.limit);
      writeByteBuffer(bb, nested);
      pushByteBuffer(nested);
    }
  }
}

export function decodeRoulette_LuckyStarList(binary: Uint8Array): Roulette_LuckyStarList {
  return _decodeRoulette_LuckyStarList(wrapByteBuffer(binary));
}

function _decodeRoulette_LuckyStarList(bb: ByteBuffer): Roulette_LuckyStarList {
  let message: Roulette_LuckyStarList = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // repeated Roulette_UserInfo Users = 1;
      case 1: {
        let limit = pushTemporaryLength(bb);
        let values = message.Users || (message.Users = []);
        values.push(_decodeRoulette_UserInfo(bb));
        bb.limit = limit;
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface Roulette_BetRequest {
  Bet?: Roulette_Bet;
}

export function encodeRoulette_BetRequest(message: Roulette_BetRequest): Uint8Array {
  let bb = popByteBuffer();
  _encodeRoulette_BetRequest(message, bb);
  return toUint8Array(bb);
}

function _encodeRoulette_BetRequest(message: Roulette_BetRequest, bb: ByteBuffer): void {
  // optional Roulette_Bet Bet = 1;
  let $Bet = message.Bet;
  if ($Bet !== undefined) {
    writeVarint32(bb, 10);
    let nested = popByteBuffer();
    _encodeRoulette_Bet($Bet, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }
}

export function decodeRoulette_BetRequest(binary: Uint8Array): Roulette_BetRequest {
  return _decodeRoulette_BetRequest(wrapByteBuffer(binary));
}

function _decodeRoulette_BetRequest(bb: ByteBuffer): Roulette_BetRequest {
  let message: Roulette_BetRequest = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional Roulette_Bet Bet = 1;
      case 1: {
        let limit = pushTemporaryLength(bb);
        message.Bet = _decodeRoulette_Bet(bb);
        bb.limit = limit;
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface Roulette_BetResponse {
  Code?: Roulette_ResultCode;
  Money?: Long;
  Bets?: Roulette_Bet[];
}

export function encodeRoulette_BetResponse(message: Roulette_BetResponse): Uint8Array {
  let bb = popByteBuffer();
  _encodeRoulette_BetResponse(message, bb);
  return toUint8Array(bb);
}

function _encodeRoulette_BetResponse(message: Roulette_BetResponse, bb: ByteBuffer): void {
  // optional Roulette_ResultCode Code = 1;
  let $Code = message.Code;
  if ($Code !== undefined) {
    writeVarint32(bb, 8);
    writeVarint32(bb, encodeRoulette_ResultCode[$Code]);
  }

  // optional int64 Money = 2;
  let $Money = message.Money;
  if ($Money !== undefined) {
    writeVarint32(bb, 16);
    writeVarint64(bb, $Money);
  }

  // repeated Roulette_Bet Bets = 3;
  let array$Bets = message.Bets;
  if (array$Bets !== undefined) {
    for (let value of array$Bets) {
      writeVarint32(bb, 26);
      let nested = popByteBuffer();
      _encodeRoulette_Bet(value, nested);
      writeVarint32(bb, nested.limit);
      writeByteBuffer(bb, nested);
      pushByteBuffer(nested);
    }
  }
}

export function decodeRoulette_BetResponse(binary: Uint8Array): Roulette_BetResponse {
  return _decodeRoulette_BetResponse(wrapByteBuffer(binary));
}

function _decodeRoulette_BetResponse(bb: ByteBuffer): Roulette_BetResponse {
  let message: Roulette_BetResponse = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional Roulette_ResultCode Code = 1;
      case 1: {
        message.Code = decodeRoulette_ResultCode[readVarint32(bb)];
        break;
      }

      // optional int64 Money = 2;
      case 2: {
        message.Money = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // repeated Roulette_Bet Bets = 3;
      case 3: {
        let limit = pushTemporaryLength(bb);
        let values = message.Bets || (message.Bets = []);
        values.push(_decodeRoulette_Bet(bb));
        bb.limit = limit;
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface Roulette_BetAreaInfo {
  Bets?: Roulette_Bet[];
  UserBets?: Roulette_BoardCastBet[];
}

export function encodeRoulette_BetAreaInfo(message: Roulette_BetAreaInfo): Uint8Array {
  let bb = popByteBuffer();
  _encodeRoulette_BetAreaInfo(message, bb);
  return toUint8Array(bb);
}

function _encodeRoulette_BetAreaInfo(message: Roulette_BetAreaInfo, bb: ByteBuffer): void {
  // repeated Roulette_Bet Bets = 1;
  let array$Bets = message.Bets;
  if (array$Bets !== undefined) {
    for (let value of array$Bets) {
      writeVarint32(bb, 10);
      let nested = popByteBuffer();
      _encodeRoulette_Bet(value, nested);
      writeVarint32(bb, nested.limit);
      writeByteBuffer(bb, nested);
      pushByteBuffer(nested);
    }
  }

  // repeated Roulette_BoardCastBet UserBets = 2;
  let array$UserBets = message.UserBets;
  if (array$UserBets !== undefined) {
    for (let value of array$UserBets) {
      writeVarint32(bb, 18);
      let nested = popByteBuffer();
      _encodeRoulette_BoardCastBet(value, nested);
      writeVarint32(bb, nested.limit);
      writeByteBuffer(bb, nested);
      pushByteBuffer(nested);
    }
  }
}

export function decodeRoulette_BetAreaInfo(binary: Uint8Array): Roulette_BetAreaInfo {
  return _decodeRoulette_BetAreaInfo(wrapByteBuffer(binary));
}

function _decodeRoulette_BetAreaInfo(bb: ByteBuffer): Roulette_BetAreaInfo {
  let message: Roulette_BetAreaInfo = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // repeated Roulette_Bet Bets = 1;
      case 1: {
        let limit = pushTemporaryLength(bb);
        let values = message.Bets || (message.Bets = []);
        values.push(_decodeRoulette_Bet(bb));
        bb.limit = limit;
        break;
      }

      // repeated Roulette_BoardCastBet UserBets = 2;
      case 2: {
        let limit = pushTemporaryLength(bb);
        let values = message.UserBets || (message.UserBets = []);
        values.push(_decodeRoulette_BoardCastBet(bb));
        bb.limit = limit;
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

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
