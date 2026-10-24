
export interface LoginGameRoomInfo {
  UserID: number;
  Cer: string;
  HDCode: string;
  HDType: number;
}

export function encodeLoginGameRoomInfo(message: LoginGameRoomInfo): Uint8Array {
  let bb = popByteBuffer();
  _encodeLoginGameRoomInfo(message, bb);
  return toUint8Array(bb);
}

function _encodeLoginGameRoomInfo(message: LoginGameRoomInfo, bb: ByteBuffer): void {
  // required int32 UserID = 1;
  let $UserID = message.UserID;
  if ($UserID !== undefined) {
    writeVarint32(bb, 8);
    writeVarint64(bb, intToLong($UserID));
  }

  // required string Cer = 2;
  let $Cer = message.Cer;
  if ($Cer !== undefined) {
    writeVarint32(bb, 18);
    writeString(bb, $Cer);
  }

  // required string HDCode = 3;
  let $HDCode = message.HDCode;
  if ($HDCode !== undefined) {
    writeVarint32(bb, 26);
    writeString(bb, $HDCode);
  }

  // required int32 HDType = 4;
  let $HDType = message.HDType;
  if ($HDType !== undefined) {
    writeVarint32(bb, 32);
    writeVarint64(bb, intToLong($HDType));
  }
}

export function decodeLoginGameRoomInfo(binary: Uint8Array): LoginGameRoomInfo {
  return _decodeLoginGameRoomInfo(wrapByteBuffer(binary));
}

function _decodeLoginGameRoomInfo(bb: ByteBuffer): LoginGameRoomInfo {
  let message: LoginGameRoomInfo = {} as any;

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

      // required string Cer = 2;
      case 2: {
        message.Cer = readString(bb, readVarint32(bb));
        break;
      }

      // required string HDCode = 3;
      case 3: {
        message.HDCode = readString(bb, readVarint32(bb));
        break;
      }

      // required int32 HDType = 4;
      case 4: {
        message.HDType = readVarint32(bb);
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  if (message.UserID === undefined)
    throw new Error("Missing required field: UserID");

  if (message.Cer === undefined)
    throw new Error("Missing required field: Cer");

  if (message.HDCode === undefined)
    throw new Error("Missing required field: HDCode");

  if (message.HDType === undefined)
    throw new Error("Missing required field: HDType");

  return message;
}

export interface LoginGameRoomRet {
  Code: number;
  Message: string;
  LoginRequestData?: LoginGameRoomInfo;
  UserData?: UserRoomLogonData;
  RoomInfo?: RoomInfo;
  UserRTPData?: UserRTPData;
}

export function encodeLoginGameRoomRet(message: LoginGameRoomRet): Uint8Array {
  let bb = popByteBuffer();
  _encodeLoginGameRoomRet(message, bb);
  return toUint8Array(bb);
}

function _encodeLoginGameRoomRet(message: LoginGameRoomRet, bb: ByteBuffer): void {
  // required int32 Code = 1;
  let $Code = message.Code;
  if ($Code !== undefined) {
    writeVarint32(bb, 8);
    writeVarint64(bb, intToLong($Code));
  }

  // required string Message = 2;
  let $Message = message.Message;
  if ($Message !== undefined) {
    writeVarint32(bb, 18);
    writeString(bb, $Message);
  }

  // optional LoginGameRoomInfo LoginRequestData = 3;
  let $LoginRequestData = message.LoginRequestData;
  if ($LoginRequestData !== undefined) {
    writeVarint32(bb, 26);
    let nested = popByteBuffer();
    _encodeLoginGameRoomInfo($LoginRequestData, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional UserRoomLogonData UserData = 4;
  let $UserData = message.UserData;
  if ($UserData !== undefined) {
    writeVarint32(bb, 34);
    let nested = popByteBuffer();
    _encodeUserRoomLogonData($UserData, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional RoomInfo RoomInfo = 5;
  let $RoomInfo = message.RoomInfo;
  if ($RoomInfo !== undefined) {
    writeVarint32(bb, 42);
    let nested = popByteBuffer();
    _encodeRoomInfo($RoomInfo, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // optional UserRTPData UserRTPData = 6;
  let $UserRTPData = message.UserRTPData;
  if ($UserRTPData !== undefined) {
    writeVarint32(bb, 50);
    let nested = popByteBuffer();
    _encodeUserRTPData($UserRTPData, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }
}

export function decodeLoginGameRoomRet(binary: Uint8Array): LoginGameRoomRet {
  return _decodeLoginGameRoomRet(wrapByteBuffer(binary));
}

function _decodeLoginGameRoomRet(bb: ByteBuffer): LoginGameRoomRet {
  let message: LoginGameRoomRet = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // required int32 Code = 1;
      case 1: {
        message.Code = readVarint32(bb);
        break;
      }

      // required string Message = 2;
      case 2: {
        message.Message = readString(bb, readVarint32(bb));
        break;
      }

      // optional LoginGameRoomInfo LoginRequestData = 3;
      case 3: {
        let limit = pushTemporaryLength(bb);
        message.LoginRequestData = _decodeLoginGameRoomInfo(bb);
        bb.limit = limit;
        break;
      }

      // optional UserRoomLogonData UserData = 4;
      case 4: {
        let limit = pushTemporaryLength(bb);
        message.UserData = _decodeUserRoomLogonData(bb);
        bb.limit = limit;
        break;
      }

      // optional RoomInfo RoomInfo = 5;
      case 5: {
        let limit = pushTemporaryLength(bb);
        message.RoomInfo = _decodeRoomInfo(bb);
        bb.limit = limit;
        break;
      }

      // optional UserRTPData UserRTPData = 6;
      case 6: {
        let limit = pushTemporaryLength(bb);
        message.UserRTPData = _decodeUserRTPData(bb);
        bb.limit = limit;
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  if (message.Code === undefined)
    throw new Error("Missing required field: Code");

  if (message.Message === undefined)
    throw new Error("Missing required field: Message");

  return message;
}

export interface UserRoomLogonData {
  UserID: number;
  UserType: number;
  NickName: string;
  FaceID: number;
  Sex: number;
  CashAmount: Long;
  WinCount: number;
  LoseCount: number;
  DrawCount: number;
  ServerAddr?: string;
  GameBuff?: string;
  TradeId: Long;
  LastWinLose?: number;
  SumCharge: Long;
  HasBindPay: boolean;
  SumConvert: Long;
  ExperienceCash?: Long;
  LoginName?: string;
  AlipayAccount?: string;
  TimeSeq?: Long;
}

export function encodeUserRoomLogonData(message: UserRoomLogonData): Uint8Array {
  let bb = popByteBuffer();
  _encodeUserRoomLogonData(message, bb);
  return toUint8Array(bb);
}

function _encodeUserRoomLogonData(message: UserRoomLogonData, bb: ByteBuffer): void {
  // required int32 UserID = 1;
  let $UserID = message.UserID;
  if ($UserID !== undefined) {
    writeVarint32(bb, 8);
    writeVarint64(bb, intToLong($UserID));
  }

  // required int32 UserType = 2;
  let $UserType = message.UserType;
  if ($UserType !== undefined) {
    writeVarint32(bb, 16);
    writeVarint64(bb, intToLong($UserType));
  }

  // required string NickName = 3;
  let $NickName = message.NickName;
  if ($NickName !== undefined) {
    writeVarint32(bb, 26);
    writeString(bb, $NickName);
  }

  // required int32 FaceID = 4;
  let $FaceID = message.FaceID;
  if ($FaceID !== undefined) {
    writeVarint32(bb, 32);
    writeVarint64(bb, intToLong($FaceID));
  }

  // required int32 Sex = 5;
  let $Sex = message.Sex;
  if ($Sex !== undefined) {
    writeVarint32(bb, 40);
    writeVarint64(bb, intToLong($Sex));
  }

  // required int64 CashAmount = 6;
  let $CashAmount = message.CashAmount;
  if ($CashAmount !== undefined) {
    writeVarint32(bb, 48);
    writeVarint64(bb, $CashAmount);
  }

  // required int32 WinCount = 7;
  let $WinCount = message.WinCount;
  if ($WinCount !== undefined) {
    writeVarint32(bb, 56);
    writeVarint64(bb, intToLong($WinCount));
  }

  // required int32 LoseCount = 8;
  let $LoseCount = message.LoseCount;
  if ($LoseCount !== undefined) {
    writeVarint32(bb, 64);
    writeVarint64(bb, intToLong($LoseCount));
  }

  // required int32 DrawCount = 9;
  let $DrawCount = message.DrawCount;
  if ($DrawCount !== undefined) {
    writeVarint32(bb, 72);
    writeVarint64(bb, intToLong($DrawCount));
  }

  // optional string ServerAddr = 10;
  let $ServerAddr = message.ServerAddr;
  if ($ServerAddr !== undefined) {
    writeVarint32(bb, 82);
    writeString(bb, $ServerAddr);
  }

  // optional string GameBuff = 11;
  let $GameBuff = message.GameBuff;
  if ($GameBuff !== undefined) {
    writeVarint32(bb, 90);
    writeString(bb, $GameBuff);
  }

  // required int64 TradeId = 12;
  let $TradeId = message.TradeId;
  if ($TradeId !== undefined) {
    writeVarint32(bb, 96);
    writeVarint64(bb, $TradeId);
  }

  // optional int32 LastWinLose = 13;
  let $LastWinLose = message.LastWinLose;
  if ($LastWinLose !== undefined) {
    writeVarint32(bb, 104);
    writeVarint64(bb, intToLong($LastWinLose));
  }

  // required int64 SumCharge = 14;
  let $SumCharge = message.SumCharge;
  if ($SumCharge !== undefined) {
    writeVarint32(bb, 112);
    writeVarint64(bb, $SumCharge);
  }

  // required bool HasBindPay = 15;
  let $HasBindPay = message.HasBindPay;
  if ($HasBindPay !== undefined) {
    writeVarint32(bb, 120);
    writeByte(bb, $HasBindPay ? 1 : 0);
  }

  // required int64 SumConvert = 16;
  let $SumConvert = message.SumConvert;
  if ($SumConvert !== undefined) {
    writeVarint32(bb, 128);
    writeVarint64(bb, $SumConvert);
  }

  // optional int64 ExperienceCash = 17;
  let $ExperienceCash = message.ExperienceCash;
  if ($ExperienceCash !== undefined) {
    writeVarint32(bb, 136);
    writeVarint64(bb, $ExperienceCash);
  }

  // optional string LoginName = 18;
  let $LoginName = message.LoginName;
  if ($LoginName !== undefined) {
    writeVarint32(bb, 146);
    writeString(bb, $LoginName);
  }

  // optional string AlipayAccount = 19;
  let $AlipayAccount = message.AlipayAccount;
  if ($AlipayAccount !== undefined) {
    writeVarint32(bb, 154);
    writeString(bb, $AlipayAccount);
  }

  // optional int64 TimeSeq = 20;
  let $TimeSeq = message.TimeSeq;
  if ($TimeSeq !== undefined) {
    writeVarint32(bb, 160);
    writeVarint64(bb, $TimeSeq);
  }
}

export function decodeUserRoomLogonData(binary: Uint8Array): UserRoomLogonData {
  return _decodeUserRoomLogonData(wrapByteBuffer(binary));
}

function _decodeUserRoomLogonData(bb: ByteBuffer): UserRoomLogonData {
  let message: UserRoomLogonData = {} as any;

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

      // required int32 UserType = 2;
      case 2: {
        message.UserType = readVarint32(bb);
        break;
      }

      // required string NickName = 3;
      case 3: {
        message.NickName = readString(bb, readVarint32(bb));
        break;
      }

      // required int32 FaceID = 4;
      case 4: {
        message.FaceID = readVarint32(bb);
        break;
      }

      // required int32 Sex = 5;
      case 5: {
        message.Sex = readVarint32(bb);
        break;
      }

      // required int64 CashAmount = 6;
      case 6: {
        message.CashAmount = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // required int32 WinCount = 7;
      case 7: {
        message.WinCount = readVarint32(bb);
        break;
      }

      // required int32 LoseCount = 8;
      case 8: {
        message.LoseCount = readVarint32(bb);
        break;
      }

      // required int32 DrawCount = 9;
      case 9: {
        message.DrawCount = readVarint32(bb);
        break;
      }

      // optional string ServerAddr = 10;
      case 10: {
        message.ServerAddr = readString(bb, readVarint32(bb));
        break;
      }

      // optional string GameBuff = 11;
      case 11: {
        message.GameBuff = readString(bb, readVarint32(bb));
        break;
      }

      // required int64 TradeId = 12;
      case 12: {
        message.TradeId = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // optional int32 LastWinLose = 13;
      case 13: {
        message.LastWinLose = readVarint32(bb);
        break;
      }

      // required int64 SumCharge = 14;
      case 14: {
        message.SumCharge = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // required bool HasBindPay = 15;
      case 15: {
        message.HasBindPay = !!readByte(bb);
        break;
      }

      // required int64 SumConvert = 16;
      case 16: {
        message.SumConvert = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // optional int64 ExperienceCash = 17;
      case 17: {
        message.ExperienceCash = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // optional string LoginName = 18;
      case 18: {
        message.LoginName = readString(bb, readVarint32(bb));
        break;
      }

      // optional string AlipayAccount = 19;
      case 19: {
        message.AlipayAccount = readString(bb, readVarint32(bb));
        break;
      }

      // optional int64 TimeSeq = 20;
      case 20: {
        message.TimeSeq = readVarint64(bb, /* unsigned */ false);
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  if (message.UserID === undefined)
    throw new Error("Missing required field: UserID");

  if (message.UserType === undefined)
    throw new Error("Missing required field: UserType");

  if (message.NickName === undefined)
    throw new Error("Missing required field: NickName");

  if (message.FaceID === undefined)
    throw new Error("Missing required field: FaceID");

  if (message.Sex === undefined)
    throw new Error("Missing required field: Sex");

  if (message.CashAmount === undefined)
    throw new Error("Missing required field: CashAmount");

  if (message.WinCount === undefined)
    throw new Error("Missing required field: WinCount");

  if (message.LoseCount === undefined)
    throw new Error("Missing required field: LoseCount");

  if (message.DrawCount === undefined)
    throw new Error("Missing required field: DrawCount");

  if (message.TradeId === undefined)
    throw new Error("Missing required field: TradeId");

  if (message.SumCharge === undefined)
    throw new Error("Missing required field: SumCharge");

  if (message.HasBindPay === undefined)
    throw new Error("Missing required field: HasBindPay");

  if (message.SumConvert === undefined)
    throw new Error("Missing required field: SumConvert");

  return message;
}

export interface UserSit {
  TableNo: number;
  SeatNo: number;
}

export function encodeUserSit(message: UserSit): Uint8Array {
  let bb = popByteBuffer();
  _encodeUserSit(message, bb);
  return toUint8Array(bb);
}

function _encodeUserSit(message: UserSit, bb: ByteBuffer): void {
  // required int32 TableNo = 1;
  let $TableNo = message.TableNo;
  if ($TableNo !== undefined) {
    writeVarint32(bb, 8);
    writeVarint64(bb, intToLong($TableNo));
  }

  // required int32 SeatNo = 2;
  let $SeatNo = message.SeatNo;
  if ($SeatNo !== undefined) {
    writeVarint32(bb, 16);
    writeVarint64(bb, intToLong($SeatNo));
  }
}

export function decodeUserSit(binary: Uint8Array): UserSit {
  return _decodeUserSit(wrapByteBuffer(binary));
}

function _decodeUserSit(bb: ByteBuffer): UserSit {
  let message: UserSit = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // required int32 TableNo = 1;
      case 1: {
        message.TableNo = readVarint32(bb);
        break;
      }

      // required int32 SeatNo = 2;
      case 2: {
        message.SeatNo = readVarint32(bb);
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  if (message.TableNo === undefined)
    throw new Error("Missing required field: TableNo");

  if (message.SeatNo === undefined)
    throw new Error("Missing required field: SeatNo");

  return message;
}

export interface GameVerInfo {
  AndroidVersion: string;
  IOSVersion: string;
}

export function encodeGameVerInfo(message: GameVerInfo): Uint8Array {
  let bb = popByteBuffer();
  _encodeGameVerInfo(message, bb);
  return toUint8Array(bb);
}

function _encodeGameVerInfo(message: GameVerInfo, bb: ByteBuffer): void {
  // required string AndroidVersion = 1;
  let $AndroidVersion = message.AndroidVersion;
  if ($AndroidVersion !== undefined) {
    writeVarint32(bb, 10);
    writeString(bb, $AndroidVersion);
  }

  // required string IOSVersion = 2;
  let $IOSVersion = message.IOSVersion;
  if ($IOSVersion !== undefined) {
    writeVarint32(bb, 18);
    writeString(bb, $IOSVersion);
  }
}

export function decodeGameVerInfo(binary: Uint8Array): GameVerInfo {
  return _decodeGameVerInfo(wrapByteBuffer(binary));
}

function _decodeGameVerInfo(bb: ByteBuffer): GameVerInfo {
  let message: GameVerInfo = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // required string AndroidVersion = 1;
      case 1: {
        message.AndroidVersion = readString(bb, readVarint32(bb));
        break;
      }

      // required string IOSVersion = 2;
      case 2: {
        message.IOSVersion = readString(bb, readVarint32(bb));
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  if (message.AndroidVersion === undefined)
    throw new Error("Missing required field: AndroidVersion");

  if (message.IOSVersion === undefined)
    throw new Error("Missing required field: IOSVersion");

  return message;
}

export interface RoomInfo {
  GameID: number;
  GameName: string;
  Flag: string;
  BaseScore: number;
}

export function encodeRoomInfo(message: RoomInfo): Uint8Array {
  let bb = popByteBuffer();
  _encodeRoomInfo(message, bb);
  return toUint8Array(bb);
}

function _encodeRoomInfo(message: RoomInfo, bb: ByteBuffer): void {
  // required int32 GameID = 1;
  let $GameID = message.GameID;
  if ($GameID !== undefined) {
    writeVarint32(bb, 8);
    writeVarint64(bb, intToLong($GameID));
  }

  // required string GameName = 2;
  let $GameName = message.GameName;
  if ($GameName !== undefined) {
    writeVarint32(bb, 18);
    writeString(bb, $GameName);
  }

  // required string Flag = 3;
  let $Flag = message.Flag;
  if ($Flag !== undefined) {
    writeVarint32(bb, 26);
    writeString(bb, $Flag);
  }

  // required int32 BaseScore = 4;
  let $BaseScore = message.BaseScore;
  if ($BaseScore !== undefined) {
    writeVarint32(bb, 32);
    writeVarint64(bb, intToLong($BaseScore));
  }
}

export function decodeRoomInfo(binary: Uint8Array): RoomInfo {
  return _decodeRoomInfo(wrapByteBuffer(binary));
}

function _decodeRoomInfo(bb: ByteBuffer): RoomInfo {
  let message: RoomInfo = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // required int32 GameID = 1;
      case 1: {
        message.GameID = readVarint32(bb);
        break;
      }

      // required string GameName = 2;
      case 2: {
        message.GameName = readString(bb, readVarint32(bb));
        break;
      }

      // required string Flag = 3;
      case 3: {
        message.Flag = readString(bb, readVarint32(bb));
        break;
      }

      // required int32 BaseScore = 4;
      case 4: {
        message.BaseScore = readVarint32(bb);
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  if (message.GameID === undefined)
    throw new Error("Missing required field: GameID");

  if (message.GameName === undefined)
    throw new Error("Missing required field: GameName");

  if (message.Flag === undefined)
    throw new Error("Missing required field: Flag");

  if (message.BaseScore === undefined)
    throw new Error("Missing required field: BaseScore");

  return message;
}

export interface GameStartMsg {
  GameID: number;
  UserID: number;
  LoginRequestData?: LoginGameRoomInfo;
}

export function encodeGameStartMsg(message: GameStartMsg): Uint8Array {
  let bb = popByteBuffer();
  _encodeGameStartMsg(message, bb);
  return toUint8Array(bb);
}

function _encodeGameStartMsg(message: GameStartMsg, bb: ByteBuffer): void {
  // required int32 GameID = 1;
  let $GameID = message.GameID;
  if ($GameID !== undefined) {
    writeVarint32(bb, 8);
    writeVarint64(bb, intToLong($GameID));
  }

  // required int32 UserID = 2;
  let $UserID = message.UserID;
  if ($UserID !== undefined) {
    writeVarint32(bb, 16);
    writeVarint64(bb, intToLong($UserID));
  }

  // optional LoginGameRoomInfo LoginRequestData = 3;
  let $LoginRequestData = message.LoginRequestData;
  if ($LoginRequestData !== undefined) {
    writeVarint32(bb, 26);
    let nested = popByteBuffer();
    _encodeLoginGameRoomInfo($LoginRequestData, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }
}

export function decodeGameStartMsg(binary: Uint8Array): GameStartMsg {
  return _decodeGameStartMsg(wrapByteBuffer(binary));
}

function _decodeGameStartMsg(bb: ByteBuffer): GameStartMsg {
  let message: GameStartMsg = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // required int32 GameID = 1;
      case 1: {
        message.GameID = readVarint32(bb);
        break;
      }

      // required int32 UserID = 2;
      case 2: {
        message.UserID = readVarint32(bb);
        break;
      }

      // optional LoginGameRoomInfo LoginRequestData = 3;
      case 3: {
        let limit = pushTemporaryLength(bb);
        message.LoginRequestData = _decodeLoginGameRoomInfo(bb);
        bb.limit = limit;
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  if (message.GameID === undefined)
    throw new Error("Missing required field: GameID");

  if (message.UserID === undefined)
    throw new Error("Missing required field: UserID");

  return message;
}

export interface GameStartRetMsg {
  ErrMsg: string;
  RtnCode: number;
  LoginRequestData?: LoginGameRoomInfo;
}

export function encodeGameStartRetMsg(message: GameStartRetMsg): Uint8Array {
  let bb = popByteBuffer();
  _encodeGameStartRetMsg(message, bb);
  return toUint8Array(bb);
}

function _encodeGameStartRetMsg(message: GameStartRetMsg, bb: ByteBuffer): void {
  // required string ErrMsg = 1;
  let $ErrMsg = message.ErrMsg;
  if ($ErrMsg !== undefined) {
    writeVarint32(bb, 10);
    writeString(bb, $ErrMsg);
  }

  // required int32 RtnCode = 2;
  let $RtnCode = message.RtnCode;
  if ($RtnCode !== undefined) {
    writeVarint32(bb, 16);
    writeVarint64(bb, intToLong($RtnCode));
  }

  // optional LoginGameRoomInfo LoginRequestData = 3;
  let $LoginRequestData = message.LoginRequestData;
  if ($LoginRequestData !== undefined) {
    writeVarint32(bb, 26);
    let nested = popByteBuffer();
    _encodeLoginGameRoomInfo($LoginRequestData, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }
}

export function decodeGameStartRetMsg(binary: Uint8Array): GameStartRetMsg {
  return _decodeGameStartRetMsg(wrapByteBuffer(binary));
}

function _decodeGameStartRetMsg(bb: ByteBuffer): GameStartRetMsg {
  let message: GameStartRetMsg = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // required string ErrMsg = 1;
      case 1: {
        message.ErrMsg = readString(bb, readVarint32(bb));
        break;
      }

      // required int32 RtnCode = 2;
      case 2: {
        message.RtnCode = readVarint32(bb);
        break;
      }

      // optional LoginGameRoomInfo LoginRequestData = 3;
      case 3: {
        let limit = pushTemporaryLength(bb);
        message.LoginRequestData = _decodeLoginGameRoomInfo(bb);
        bb.limit = limit;
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  if (message.ErrMsg === undefined)
    throw new Error("Missing required field: ErrMsg");

  if (message.RtnCode === undefined)
    throw new Error("Missing required field: RtnCode");

  return message;
}

export interface UserRTPData {
  AllGame: RTPDataPackage;
  Game: RTPDataPackage;
}

export function encodeUserRTPData(message: UserRTPData): Uint8Array {
  let bb = popByteBuffer();
  _encodeUserRTPData(message, bb);
  return toUint8Array(bb);
}

function _encodeUserRTPData(message: UserRTPData, bb: ByteBuffer): void {
  // required RTPDataPackage AllGame = 1;
  let $AllGame = message.AllGame;
  if ($AllGame !== undefined) {
    writeVarint32(bb, 10);
    let nested = popByteBuffer();
    _encodeRTPDataPackage($AllGame, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // required RTPDataPackage Game = 2;
  let $Game = message.Game;
  if ($Game !== undefined) {
    writeVarint32(bb, 18);
    let nested = popByteBuffer();
    _encodeRTPDataPackage($Game, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }
}

export function decodeUserRTPData(binary: Uint8Array): UserRTPData {
  return _decodeUserRTPData(wrapByteBuffer(binary));
}

function _decodeUserRTPData(bb: ByteBuffer): UserRTPData {
  let message: UserRTPData = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // required RTPDataPackage AllGame = 1;
      case 1: {
        let limit = pushTemporaryLength(bb);
        message.AllGame = _decodeRTPDataPackage(bb);
        bb.limit = limit;
        break;
      }

      // required RTPDataPackage Game = 2;
      case 2: {
        let limit = pushTemporaryLength(bb);
        message.Game = _decodeRTPDataPackage(bb);
        bb.limit = limit;
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  if (message.AllGame === undefined)
    throw new Error("Missing required field: AllGame");

  if (message.Game === undefined)
    throw new Error("Missing required field: Game");

  return message;
}

export interface RTPDataPackage {
  Total: RTPDataPackageDetail;
  LastThirty: RTPDataPackageDetail;
  LastSeven: RTPDataPackageDetail;
  Today: RTPDataPackageDetail;
}

export function encodeRTPDataPackage(message: RTPDataPackage): Uint8Array {
  let bb = popByteBuffer();
  _encodeRTPDataPackage(message, bb);
  return toUint8Array(bb);
}

function _encodeRTPDataPackage(message: RTPDataPackage, bb: ByteBuffer): void {
  // required RTPDataPackageDetail Total = 1;
  let $Total = message.Total;
  if ($Total !== undefined) {
    writeVarint32(bb, 10);
    let nested = popByteBuffer();
    _encodeRTPDataPackageDetail($Total, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // required RTPDataPackageDetail LastThirty = 2;
  let $LastThirty = message.LastThirty;
  if ($LastThirty !== undefined) {
    writeVarint32(bb, 18);
    let nested = popByteBuffer();
    _encodeRTPDataPackageDetail($LastThirty, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // required RTPDataPackageDetail LastSeven = 3;
  let $LastSeven = message.LastSeven;
  if ($LastSeven !== undefined) {
    writeVarint32(bb, 26);
    let nested = popByteBuffer();
    _encodeRTPDataPackageDetail($LastSeven, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }

  // required RTPDataPackageDetail Today = 4;
  let $Today = message.Today;
  if ($Today !== undefined) {
    writeVarint32(bb, 34);
    let nested = popByteBuffer();
    _encodeRTPDataPackageDetail($Today, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }
}

export function decodeRTPDataPackage(binary: Uint8Array): RTPDataPackage {
  return _decodeRTPDataPackage(wrapByteBuffer(binary));
}

function _decodeRTPDataPackage(bb: ByteBuffer): RTPDataPackage {
  let message: RTPDataPackage = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // required RTPDataPackageDetail Total = 1;
      case 1: {
        let limit = pushTemporaryLength(bb);
        message.Total = _decodeRTPDataPackageDetail(bb);
        bb.limit = limit;
        break;
      }

      // required RTPDataPackageDetail LastThirty = 2;
      case 2: {
        let limit = pushTemporaryLength(bb);
        message.LastThirty = _decodeRTPDataPackageDetail(bb);
        bb.limit = limit;
        break;
      }

      // required RTPDataPackageDetail LastSeven = 3;
      case 3: {
        let limit = pushTemporaryLength(bb);
        message.LastSeven = _decodeRTPDataPackageDetail(bb);
        bb.limit = limit;
        break;
      }

      // required RTPDataPackageDetail Today = 4;
      case 4: {
        let limit = pushTemporaryLength(bb);
        message.Today = _decodeRTPDataPackageDetail(bb);
        bb.limit = limit;
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  if (message.Total === undefined)
    throw new Error("Missing required field: Total");

  if (message.LastThirty === undefined)
    throw new Error("Missing required field: LastThirty");

  if (message.LastSeven === undefined)
    throw new Error("Missing required field: LastSeven");

  if (message.Today === undefined)
    throw new Error("Missing required field: Today");

  return message;
}

export interface RTPDataPackageDetail {
  BetAmount: Long;
  PayAmount: Long;
}

export function encodeRTPDataPackageDetail(message: RTPDataPackageDetail): Uint8Array {
  let bb = popByteBuffer();
  _encodeRTPDataPackageDetail(message, bb);
  return toUint8Array(bb);
}

function _encodeRTPDataPackageDetail(message: RTPDataPackageDetail, bb: ByteBuffer): void {
  // required int64 BetAmount = 1;
  let $BetAmount = message.BetAmount;
  if ($BetAmount !== undefined) {
    writeVarint32(bb, 8);
    writeVarint64(bb, $BetAmount);
  }

  // required int64 PayAmount = 2;
  let $PayAmount = message.PayAmount;
  if ($PayAmount !== undefined) {
    writeVarint32(bb, 16);
    writeVarint64(bb, $PayAmount);
  }
}

export function decodeRTPDataPackageDetail(binary: Uint8Array): RTPDataPackageDetail {
  return _decodeRTPDataPackageDetail(wrapByteBuffer(binary));
}

function _decodeRTPDataPackageDetail(bb: ByteBuffer): RTPDataPackageDetail {
  let message: RTPDataPackageDetail = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // required int64 BetAmount = 1;
      case 1: {
        message.BetAmount = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // required int64 PayAmount = 2;
      case 2: {
        message.PayAmount = readVarint64(bb, /* unsigned */ false);
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  if (message.BetAmount === undefined)
    throw new Error("Missing required field: BetAmount");

  if (message.PayAmount === undefined)
    throw new Error("Missing required field: PayAmount");

  return message;
}

export interface UserChooseTable {
  TableNo: number;
  SeatNo: number;
}

export function encodeUserChooseTable(message: UserChooseTable): Uint8Array {
  let bb = popByteBuffer();
  _encodeUserChooseTable(message, bb);
  return toUint8Array(bb);
}

function _encodeUserChooseTable(message: UserChooseTable, bb: ByteBuffer): void {
  // required int32 TableNo = 1;
  let $TableNo = message.TableNo;
  if ($TableNo !== undefined) {
    writeVarint32(bb, 8);
    writeVarint64(bb, intToLong($TableNo));
  }

  // required int32 SeatNo = 2;
  let $SeatNo = message.SeatNo;
  if ($SeatNo !== undefined) {
    writeVarint32(bb, 16);
    writeVarint64(bb, intToLong($SeatNo));
  }
}

export function decodeUserChooseTable(binary: Uint8Array): UserChooseTable {
  return _decodeUserChooseTable(wrapByteBuffer(binary));
}

function _decodeUserChooseTable(bb: ByteBuffer): UserChooseTable {
  let message: UserChooseTable = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // required int32 TableNo = 1;
      case 1: {
        message.TableNo = readVarint32(bb);
        break;
      }

      // required int32 SeatNo = 2;
      case 2: {
        message.SeatNo = readVarint32(bb);
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  if (message.TableNo === undefined)
    throw new Error("Missing required field: TableNo");

  if (message.SeatNo === undefined)
    throw new Error("Missing required field: SeatNo");

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
