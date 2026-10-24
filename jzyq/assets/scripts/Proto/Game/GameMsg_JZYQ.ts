export const enum JZYQ_ResultCode {
  JZYQ_ResultCodeSuccess = "JZYQ_ResultCodeSuccess",
  JZYQ_ResultCodeMoneyNotEnough = "JZYQ_ResultCodeMoneyNotEnough",
  JZYQ_ResultCodeIllegalBetType = "JZYQ_ResultCodeIllegalBetType",
  JZYQ_ResultCodeIllegalBetMoney = "JZYQ_ResultCodeIllegalBetMoney",
  JZYQ_ResultCodeBetTypeOverLimit = "JZYQ_ResultCodeBetTypeOverLimit",
  JZYQ_ResultCodeAlreadyBetOtherSide = "JZYQ_ResultCodeAlreadyBetOtherSide",
  JZYQ_ResultCodeCarryMoneyNotEnough = "JZYQ_ResultCodeCarryMoneyNotEnough",
  JZYQ_ResultCodeNotBetStep = "JZYQ_ResultCodeNotBetStep",
  JZYQ_ResultCodeInvalidArgument = "JZYQ_ResultCodeInvalidArgument",
  JZYQ_ResultCodeInternalError = "JZYQ_ResultCodeInternalError",
}

export const encodeJZYQ_ResultCode: { [key: string]: number } = {
  JZYQ_ResultCodeSuccess: 0,
  JZYQ_ResultCodeMoneyNotEnough: 100,
  JZYQ_ResultCodeIllegalBetType: 101,
  JZYQ_ResultCodeIllegalBetMoney: 102,
  JZYQ_ResultCodeBetTypeOverLimit: 104,
  JZYQ_ResultCodeAlreadyBetOtherSide: 105,
  JZYQ_ResultCodeCarryMoneyNotEnough: 106,
  JZYQ_ResultCodeNotBetStep: 107,
  JZYQ_ResultCodeInvalidArgument: 9400,
  JZYQ_ResultCodeInternalError: 9500,
};

export const decodeJZYQ_ResultCode: { [key: number]: JZYQ_ResultCode } = {
  0: JZYQ_ResultCode.JZYQ_ResultCodeSuccess,
  100: JZYQ_ResultCode.JZYQ_ResultCodeMoneyNotEnough,
  101: JZYQ_ResultCode.JZYQ_ResultCodeIllegalBetType,
  102: JZYQ_ResultCode.JZYQ_ResultCodeIllegalBetMoney,
  104: JZYQ_ResultCode.JZYQ_ResultCodeBetTypeOverLimit,
  105: JZYQ_ResultCode.JZYQ_ResultCodeAlreadyBetOtherSide,
  106: JZYQ_ResultCode.JZYQ_ResultCodeCarryMoneyNotEnough,
  107: JZYQ_ResultCode.JZYQ_ResultCodeNotBetStep,
  9400: JZYQ_ResultCode.JZYQ_ResultCodeInvalidArgument,
  9500: JZYQ_ResultCode.JZYQ_ResultCodeInternalError,
};

export const enum JZYQ_BetType {
  JZYQ_BetTypeNone = "JZYQ_BetTypeNone",
  JZYQ_BetTypeGoal = "JZYQ_BetTypeGoal",
  JZYQ_BetTypeGoalInside = "JZYQ_BetTypeGoalInside",
  JZYQ_BetTypeGoalOutside = "JZYQ_BetTypeGoalOutside",
  JZYQ_BetTypeLost = "JZYQ_BetTypeLost",
  JZYQ_BetTypeLostInside = "JZYQ_BetTypeLostInside",
  JZYQ_BetTypeLostOutside = "JZYQ_BetTypeLostOutside",
}

export const encodeJZYQ_BetType: { [key: string]: number } = {
  JZYQ_BetTypeNone: 0,
  JZYQ_BetTypeGoal: 16,
  JZYQ_BetTypeGoalInside: 17,
  JZYQ_BetTypeGoalOutside: 18,
  JZYQ_BetTypeLost: 32,
  JZYQ_BetTypeLostInside: 33,
  JZYQ_BetTypeLostOutside: 34,
};

export const decodeJZYQ_BetType: { [key: number]: JZYQ_BetType } = {
  0: JZYQ_BetType.JZYQ_BetTypeNone,
  16: JZYQ_BetType.JZYQ_BetTypeGoal,
  17: JZYQ_BetType.JZYQ_BetTypeGoalInside,
  18: JZYQ_BetType.JZYQ_BetTypeGoalOutside,
  32: JZYQ_BetType.JZYQ_BetTypeLost,
  33: JZYQ_BetType.JZYQ_BetTypeLostInside,
  34: JZYQ_BetType.JZYQ_BetTypeLostOutside,
};

export const enum JZYQ_Step {
  JZYQ_StepPrepare = "JZYQ_StepPrepare",
  JZYQ_StepStart = "JZYQ_StepStart",
  JZYQ_StepWaitBet = "JZYQ_StepWaitBet",
  JZYQ_StepShowAward = "JZYQ_StepShowAward",
  JZYQ_StepFinish = "JZYQ_StepFinish",
}

export const encodeJZYQ_Step: { [key: string]: number } = {
  JZYQ_StepPrepare: 0,
  JZYQ_StepStart: 1,
  JZYQ_StepWaitBet: 2,
  JZYQ_StepShowAward: 3,
  JZYQ_StepFinish: 4,
};

export const decodeJZYQ_Step: { [key: number]: JZYQ_Step } = {
  0: JZYQ_Step.JZYQ_StepPrepare,
  1: JZYQ_Step.JZYQ_StepStart,
  2: JZYQ_Step.JZYQ_StepWaitBet,
  3: JZYQ_Step.JZYQ_StepShowAward,
  4: JZYQ_Step.JZYQ_StepFinish,
};

export interface JZYQ_BetArea {
  Type?: JZYQ_BetType;
  MinBet?: Long;
  MaxBet?: Long;
  Odd?: number;
}

export function encodeJZYQ_BetArea(message: JZYQ_BetArea): Uint8Array {
  let bb = popByteBuffer();
  _encodeJZYQ_BetArea(message, bb);
  return toUint8Array(bb);
}

function _encodeJZYQ_BetArea(message: JZYQ_BetArea, bb: ByteBuffer): void {
  // optional JZYQ_BetType Type = 1;
  let $Type = message.Type;
  if ($Type !== undefined) {
    writeVarint32(bb, 8);
    writeVarint32(bb, encodeJZYQ_BetType[$Type]);
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

export function decodeJZYQ_BetArea(binary: Uint8Array): JZYQ_BetArea {
  return _decodeJZYQ_BetArea(wrapByteBuffer(binary));
}

function _decodeJZYQ_BetArea(bb: ByteBuffer): JZYQ_BetArea {
  let message: JZYQ_BetArea = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional JZYQ_BetType Type = 1;
      case 1: {
        message.Type = decodeJZYQ_BetType[readVarint32(bb)];
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

export interface JZYQ_Bet {
  Type?: JZYQ_BetType;
  Money?: Long;
}

export function encodeJZYQ_Bet(message: JZYQ_Bet): Uint8Array {
  let bb = popByteBuffer();
  _encodeJZYQ_Bet(message, bb);
  return toUint8Array(bb);
}

function _encodeJZYQ_Bet(message: JZYQ_Bet, bb: ByteBuffer): void {
  // optional JZYQ_BetType Type = 1;
  let $Type = message.Type;
  if ($Type !== undefined) {
    writeVarint32(bb, 8);
    writeVarint32(bb, encodeJZYQ_BetType[$Type]);
  }

  // optional int64 Money = 2;
  let $Money = message.Money;
  if ($Money !== undefined) {
    writeVarint32(bb, 16);
    writeVarint64(bb, $Money);
  }
}

export function decodeJZYQ_Bet(binary: Uint8Array): JZYQ_Bet {
  return _decodeJZYQ_Bet(wrapByteBuffer(binary));
}

function _decodeJZYQ_Bet(bb: ByteBuffer): JZYQ_Bet {
  let message: JZYQ_Bet = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional JZYQ_BetType Type = 1;
      case 1: {
        message.Type = decodeJZYQ_BetType[readVarint32(bb)];
        break;
      }

      // optional int64 Money = 2;
      case 2: {
        message.Money = readVarint64(bb, /* unsigned */ false);
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface JZYQ_UserInfo {
  UserID?: number;
  UserName?: string;
  FaceID?: number;
  AvatarFrameID?: number;
  Money?: Long;
  Ranking?: number;
  Win?: Long;
}

export function encodeJZYQ_UserInfo(message: JZYQ_UserInfo): Uint8Array {
  let bb = popByteBuffer();
  _encodeJZYQ_UserInfo(message, bb);
  return toUint8Array(bb);
}

function _encodeJZYQ_UserInfo(message: JZYQ_UserInfo, bb: ByteBuffer): void {
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

export function decodeJZYQ_UserInfo(binary: Uint8Array): JZYQ_UserInfo {
  return _decodeJZYQ_UserInfo(wrapByteBuffer(binary));
}

function _decodeJZYQ_UserInfo(bb: ByteBuffer): JZYQ_UserInfo {
  let message: JZYQ_UserInfo = {} as any;

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

export interface JZYQ_Setting {
  BetMinCarry?: Long;
  BetCount?: Long[];
  BetAreas?: JZYQ_BetArea[];
  UserMaxBet?: Long;
}

export function encodeJZYQ_Setting(message: JZYQ_Setting): Uint8Array {
  let bb = popByteBuffer();
  _encodeJZYQ_Setting(message, bb);
  return toUint8Array(bb);
}

function _encodeJZYQ_Setting(message: JZYQ_Setting, bb: ByteBuffer): void {
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

  // repeated JZYQ_BetArea BetAreas = 3;
  let array$BetAreas = message.BetAreas;
  if (array$BetAreas !== undefined) {
    for (let value of array$BetAreas) {
      writeVarint32(bb, 26);
      let nested = popByteBuffer();
      _encodeJZYQ_BetArea(value, nested);
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

export function decodeJZYQ_Setting(binary: Uint8Array): JZYQ_Setting {
  return _decodeJZYQ_Setting(wrapByteBuffer(binary));
}

function _decodeJZYQ_Setting(bb: ByteBuffer): JZYQ_Setting {
  let message: JZYQ_Setting = {} as any;

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

      // repeated JZYQ_BetArea BetAreas = 3;
      case 3: {
        let limit = pushTemporaryLength(bb);
        let values = message.BetAreas || (message.BetAreas = []);
        values.push(_decodeJZYQ_BetArea(bb));
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

export interface JZYQ_StepInfo {
  Step?: JZYQ_Step;
  Time?: number;
}

export function encodeJZYQ_StepInfo(message: JZYQ_StepInfo): Uint8Array {
  let bb = popByteBuffer();
  _encodeJZYQ_StepInfo(message, bb);
  return toUint8Array(bb);
}

function _encodeJZYQ_StepInfo(message: JZYQ_StepInfo, bb: ByteBuffer): void {
  // optional JZYQ_Step Step = 1;
  let $Step = message.Step;
  if ($Step !== undefined) {
    writeVarint32(bb, 8);
    writeVarint32(bb, encodeJZYQ_Step[$Step]);
  }

  // optional int32 Time = 2;
  let $Time = message.Time;
  if ($Time !== undefined) {
    writeVarint32(bb, 16);
    writeVarint64(bb, intToLong($Time));
  }
}

export function decodeJZYQ_StepInfo(binary: Uint8Array): JZYQ_StepInfo {
  return _decodeJZYQ_StepInfo(wrapByteBuffer(binary));
}

function _decodeJZYQ_StepInfo(bb: ByteBuffer): JZYQ_StepInfo {
  let message: JZYQ_StepInfo = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional JZYQ_Step Step = 1;
      case 1: {
        message.Step = decodeJZYQ_Step[readVarint32(bb)];
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

export interface JZYQ_RoundInfo {
  RoundID?: number;
  Goal?: number;
  Lost?: number;
}

export function encodeJZYQ_RoundInfo(message: JZYQ_RoundInfo): Uint8Array {
  let bb = popByteBuffer();
  _encodeJZYQ_RoundInfo(message, bb);
  return toUint8Array(bb);
}

function _encodeJZYQ_RoundInfo(message: JZYQ_RoundInfo, bb: ByteBuffer): void {
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

  // optional int32 Lost = 2;
  let $Lost = message.Lost;
  if ($Lost !== undefined) {
    writeVarint32(bb, 16);
    writeVarint64(bb, intToLong($Lost));
  }
}

export function decodeJZYQ_RoundInfo(binary: Uint8Array): JZYQ_RoundInfo {
  return _decodeJZYQ_RoundInfo(wrapByteBuffer(binary));
}

function _decodeJZYQ_RoundInfo(bb: ByteBuffer): JZYQ_RoundInfo {
  let message: JZYQ_RoundInfo = {} as any;

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

      // optional int32 Lost = 2;
      case 2: {
        message.Lost = readVarint32(bb);
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface JZYQ_BoardCastBet {
  UserID?: number;
  Bets?: JZYQ_Bet[];
}

export function encodeJZYQ_BoardCastBet(message: JZYQ_BoardCastBet): Uint8Array {
  let bb = popByteBuffer();
  _encodeJZYQ_BoardCastBet(message, bb);
  return toUint8Array(bb);
}

function _encodeJZYQ_BoardCastBet(message: JZYQ_BoardCastBet, bb: ByteBuffer): void {
  // optional int32 UserID = 1;
  let $UserID = message.UserID;
  if ($UserID !== undefined) {
    writeVarint32(bb, 8);
    writeVarint64(bb, intToLong($UserID));
  }

  // repeated JZYQ_Bet Bets = 2;
  let array$Bets = message.Bets;
  if (array$Bets !== undefined) {
    for (let value of array$Bets) {
      writeVarint32(bb, 18);
      let nested = popByteBuffer();
      _encodeJZYQ_Bet(value, nested);
      writeVarint32(bb, nested.limit);
      writeByteBuffer(bb, nested);
      pushByteBuffer(nested);
    }
  }
}

export function decodeJZYQ_BoardCastBet(binary: Uint8Array): JZYQ_BoardCastBet {
  return _decodeJZYQ_BoardCastBet(wrapByteBuffer(binary));
}

function _decodeJZYQ_BoardCastBet(bb: ByteBuffer): JZYQ_BoardCastBet {
  let message: JZYQ_BoardCastBet = {} as any;

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

      // repeated JZYQ_Bet Bets = 2;
      case 2: {
        let limit = pushTemporaryLength(bb);
        let values = message.Bets || (message.Bets = []);
        values.push(_decodeJZYQ_Bet(bb));
        bb.limit = limit;
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface JZYQ_GameResult {
  RoundID?: number;
  Result?: JZYQ_BetType;
}

export function encodeJZYQ_GameResult(message: JZYQ_GameResult): Uint8Array {
  let bb = popByteBuffer();
  _encodeJZYQ_GameResult(message, bb);
  return toUint8Array(bb);
}

function _encodeJZYQ_GameResult(message: JZYQ_GameResult, bb: ByteBuffer): void {
  // optional int32 RoundID = 1;
  let $RoundID = message.RoundID;
  if ($RoundID !== undefined) {
    writeVarint32(bb, 8);
    writeVarint64(bb, intToLong($RoundID));
  }

  // optional JZYQ_BetType Result = 2;
  let $Result = message.Result;
  if ($Result !== undefined) {
    writeVarint32(bb, 16);
    writeVarint32(bb, encodeJZYQ_BetType[$Result]);
  }
}

export function decodeJZYQ_GameResult(binary: Uint8Array): JZYQ_GameResult {
  return _decodeJZYQ_GameResult(wrapByteBuffer(binary));
}

function _decodeJZYQ_GameResult(bb: ByteBuffer): JZYQ_GameResult {
  let message: JZYQ_GameResult = {} as any;

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

      // optional JZYQ_BetType Result = 2;
      case 2: {
        message.Result = decodeJZYQ_BetType[readVarint32(bb)];
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface JZYQ_GameResultWin {
  Win?: Long;
  WinUserInfo?: JZYQ_UserInfo[];
  StageUserInfo?: JZYQ_UserInfo[];
}

export function encodeJZYQ_GameResultWin(message: JZYQ_GameResultWin): Uint8Array {
  let bb = popByteBuffer();
  _encodeJZYQ_GameResultWin(message, bb);
  return toUint8Array(bb);
}

function _encodeJZYQ_GameResultWin(message: JZYQ_GameResultWin, bb: ByteBuffer): void {
  // optional int64 Win = 1;
  let $Win = message.Win;
  if ($Win !== undefined) {
    writeVarint32(bb, 8);
    writeVarint64(bb, $Win);
  }

  // repeated JZYQ_UserInfo WinUserInfo = 2;
  let array$WinUserInfo = message.WinUserInfo;
  if (array$WinUserInfo !== undefined) {
    for (let value of array$WinUserInfo) {
      writeVarint32(bb, 18);
      let nested = popByteBuffer();
      _encodeJZYQ_UserInfo(value, nested);
      writeVarint32(bb, nested.limit);
      writeByteBuffer(bb, nested);
      pushByteBuffer(nested);
    }
  }

  // repeated JZYQ_UserInfo StageUserInfo = 3;
  let array$StageUserInfo = message.StageUserInfo;
  if (array$StageUserInfo !== undefined) {
    for (let value of array$StageUserInfo) {
      writeVarint32(bb, 26);
      let nested = popByteBuffer();
      _encodeJZYQ_UserInfo(value, nested);
      writeVarint32(bb, nested.limit);
      writeByteBuffer(bb, nested);
      pushByteBuffer(nested);
    }
  }
}

export function decodeJZYQ_GameResultWin(binary: Uint8Array): JZYQ_GameResultWin {
  return _decodeJZYQ_GameResultWin(wrapByteBuffer(binary));
}

function _decodeJZYQ_GameResultWin(bb: ByteBuffer): JZYQ_GameResultWin {
  let message: JZYQ_GameResultWin = {} as any;

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

      // repeated JZYQ_UserInfo WinUserInfo = 2;
      case 2: {
        let limit = pushTemporaryLength(bb);
        let values = message.WinUserInfo || (message.WinUserInfo = []);
        values.push(_decodeJZYQ_UserInfo(bb));
        bb.limit = limit;
        break;
      }

      // repeated JZYQ_UserInfo StageUserInfo = 3;
      case 3: {
        let limit = pushTemporaryLength(bb);
        let values = message.StageUserInfo || (message.StageUserInfo = []);
        values.push(_decodeJZYQ_UserInfo(bb));
        bb.limit = limit;
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface JZYQ_GameRecords {
  Results?: JZYQ_GameResult[];
}

export function encodeJZYQ_GameRecords(message: JZYQ_GameRecords): Uint8Array {
  let bb = popByteBuffer();
  _encodeJZYQ_GameRecords(message, bb);
  return toUint8Array(bb);
}

function _encodeJZYQ_GameRecords(message: JZYQ_GameRecords, bb: ByteBuffer): void {
  // repeated JZYQ_GameResult Results = 1;
  let array$Results = message.Results;
  if (array$Results !== undefined) {
    for (let value of array$Results) {
      writeVarint32(bb, 10);
      let nested = popByteBuffer();
      _encodeJZYQ_GameResult(value, nested);
      writeVarint32(bb, nested.limit);
      writeByteBuffer(bb, nested);
      pushByteBuffer(nested);
    }
  }
}

export function decodeJZYQ_GameRecords(binary: Uint8Array): JZYQ_GameRecords {
  return _decodeJZYQ_GameRecords(wrapByteBuffer(binary));
}

function _decodeJZYQ_GameRecords(bb: ByteBuffer): JZYQ_GameRecords {
  let message: JZYQ_GameRecords = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // repeated JZYQ_GameResult Results = 1;
      case 1: {
        let limit = pushTemporaryLength(bb);
        let values = message.Results || (message.Results = []);
        values.push(_decodeJZYQ_GameResult(bb));
        bb.limit = limit;
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface JZYQ_RichestList {
  Users?: JZYQ_UserInfo[];
}

export function encodeJZYQ_RichestList(message: JZYQ_RichestList): Uint8Array {
  let bb = popByteBuffer();
  _encodeJZYQ_RichestList(message, bb);
  return toUint8Array(bb);
}

function _encodeJZYQ_RichestList(message: JZYQ_RichestList, bb: ByteBuffer): void {
  // repeated JZYQ_UserInfo Users = 1;
  let array$Users = message.Users;
  if (array$Users !== undefined) {
    for (let value of array$Users) {
      writeVarint32(bb, 10);
      let nested = popByteBuffer();
      _encodeJZYQ_UserInfo(value, nested);
      writeVarint32(bb, nested.limit);
      writeByteBuffer(bb, nested);
      pushByteBuffer(nested);
    }
  }
}

export function decodeJZYQ_RichestList(binary: Uint8Array): JZYQ_RichestList {
  return _decodeJZYQ_RichestList(wrapByteBuffer(binary));
}

function _decodeJZYQ_RichestList(bb: ByteBuffer): JZYQ_RichestList {
  let message: JZYQ_RichestList = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // repeated JZYQ_UserInfo Users = 1;
      case 1: {
        let limit = pushTemporaryLength(bb);
        let values = message.Users || (message.Users = []);
        values.push(_decodeJZYQ_UserInfo(bb));
        bb.limit = limit;
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface JZYQ_LuckyStarList {
  Users?: JZYQ_UserInfo[];
}

export function encodeJZYQ_LuckyStarList(message: JZYQ_LuckyStarList): Uint8Array {
  let bb = popByteBuffer();
  _encodeJZYQ_LuckyStarList(message, bb);
  return toUint8Array(bb);
}

function _encodeJZYQ_LuckyStarList(message: JZYQ_LuckyStarList, bb: ByteBuffer): void {
  // repeated JZYQ_UserInfo Users = 1;
  let array$Users = message.Users;
  if (array$Users !== undefined) {
    for (let value of array$Users) {
      writeVarint32(bb, 10);
      let nested = popByteBuffer();
      _encodeJZYQ_UserInfo(value, nested);
      writeVarint32(bb, nested.limit);
      writeByteBuffer(bb, nested);
      pushByteBuffer(nested);
    }
  }
}

export function decodeJZYQ_LuckyStarList(binary: Uint8Array): JZYQ_LuckyStarList {
  return _decodeJZYQ_LuckyStarList(wrapByteBuffer(binary));
}

function _decodeJZYQ_LuckyStarList(bb: ByteBuffer): JZYQ_LuckyStarList {
  let message: JZYQ_LuckyStarList = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // repeated JZYQ_UserInfo Users = 1;
      case 1: {
        let limit = pushTemporaryLength(bb);
        let values = message.Users || (message.Users = []);
        values.push(_decodeJZYQ_UserInfo(bb));
        bb.limit = limit;
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface JZYQ_BetRequest {
  Bet?: JZYQ_Bet;
}

export function encodeJZYQ_BetRequest(message: JZYQ_BetRequest): Uint8Array {
  let bb = popByteBuffer();
  _encodeJZYQ_BetRequest(message, bb);
  return toUint8Array(bb);
}

function _encodeJZYQ_BetRequest(message: JZYQ_BetRequest, bb: ByteBuffer): void {
  // optional JZYQ_Bet Bet = 1;
  let $Bet = message.Bet;
  if ($Bet !== undefined) {
    writeVarint32(bb, 10);
    let nested = popByteBuffer();
    _encodeJZYQ_Bet($Bet, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }
}

export function decodeJZYQ_BetRequest(binary: Uint8Array): JZYQ_BetRequest {
  return _decodeJZYQ_BetRequest(wrapByteBuffer(binary));
}

function _decodeJZYQ_BetRequest(bb: ByteBuffer): JZYQ_BetRequest {
  let message: JZYQ_BetRequest = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional JZYQ_Bet Bet = 1;
      case 1: {
        let limit = pushTemporaryLength(bb);
        message.Bet = _decodeJZYQ_Bet(bb);
        bb.limit = limit;
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface JZYQ_BetResponse {
  Code?: JZYQ_ResultCode;
  Money?: Long;
  Bets?: JZYQ_Bet[];
}

export function encodeJZYQ_BetResponse(message: JZYQ_BetResponse): Uint8Array {
  let bb = popByteBuffer();
  _encodeJZYQ_BetResponse(message, bb);
  return toUint8Array(bb);
}

function _encodeJZYQ_BetResponse(message: JZYQ_BetResponse, bb: ByteBuffer): void {
  // optional JZYQ_ResultCode Code = 1;
  let $Code = message.Code;
  if ($Code !== undefined) {
    writeVarint32(bb, 8);
    writeVarint32(bb, encodeJZYQ_ResultCode[$Code]);
  }

  // optional int64 Money = 2;
  let $Money = message.Money;
  if ($Money !== undefined) {
    writeVarint32(bb, 16);
    writeVarint64(bb, $Money);
  }

  // repeated JZYQ_Bet Bets = 3;
  let array$Bets = message.Bets;
  if (array$Bets !== undefined) {
    for (let value of array$Bets) {
      writeVarint32(bb, 26);
      let nested = popByteBuffer();
      _encodeJZYQ_Bet(value, nested);
      writeVarint32(bb, nested.limit);
      writeByteBuffer(bb, nested);
      pushByteBuffer(nested);
    }
  }
}

export function decodeJZYQ_BetResponse(binary: Uint8Array): JZYQ_BetResponse {
  return _decodeJZYQ_BetResponse(wrapByteBuffer(binary));
}

function _decodeJZYQ_BetResponse(bb: ByteBuffer): JZYQ_BetResponse {
  let message: JZYQ_BetResponse = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional JZYQ_ResultCode Code = 1;
      case 1: {
        message.Code = decodeJZYQ_ResultCode[readVarint32(bb)];
        break;
      }

      // optional int64 Money = 2;
      case 2: {
        message.Money = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // repeated JZYQ_Bet Bets = 3;
      case 3: {
        let limit = pushTemporaryLength(bb);
        let values = message.Bets || (message.Bets = []);
        values.push(_decodeJZYQ_Bet(bb));
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
