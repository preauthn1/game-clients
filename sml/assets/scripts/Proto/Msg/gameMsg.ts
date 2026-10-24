export interface TestGameChat {
  Message: string;
}

export function encodeTestGameChat(message: TestGameChat): Uint8Array {
  let bb = popByteBuffer();
  _encodeTestGameChat(message, bb);
  return toUint8Array(bb);
}

function _encodeTestGameChat(message: TestGameChat, bb: ByteBuffer): void {
  // required string Message = 1;
  let $Message = message.Message;
  if ($Message !== undefined) {
    writeVarint32(bb, 10);
    writeString(bb, $Message);
  }
}

export function decodeTestGameChat(binary: Uint8Array): TestGameChat {
  return _decodeTestGameChat(wrapByteBuffer(binary));
}

function _decodeTestGameChat(bb: ByteBuffer): TestGameChat {
  let message: TestGameChat = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // required string Message = 1;
      case 1: {
        message.Message = readString(bb, readVarint32(bb));
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  if (message.Message === undefined)
    throw new Error("Missing required field: Message");

  return message;
}

export interface TestGameScore {
  Score: number;
}

export function encodeTestGameScore(message: TestGameScore): Uint8Array {
  let bb = popByteBuffer();
  _encodeTestGameScore(message, bb);
  return toUint8Array(bb);
}

function _encodeTestGameScore(message: TestGameScore, bb: ByteBuffer): void {
  // required int32 Score = 1;
  let $Score = message.Score;
  if ($Score !== undefined) {
    writeVarint32(bb, 8);
    writeVarint64(bb, intToLong($Score));
  }
}

export function decodeTestGameScore(binary: Uint8Array): TestGameScore {
  return _decodeTestGameScore(wrapByteBuffer(binary));
}

function _decodeTestGameScore(bb: ByteBuffer): TestGameScore {
  let message: TestGameScore = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // required int32 Score = 1;
      case 1: {
        message.Score = readVarint32(bb);
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  if (message.Score === undefined)
    throw new Error("Missing required field: Score");

  return message;
}

export interface TestGameEnd {
}

export function encodeTestGameEnd(message: TestGameEnd): Uint8Array {
  let bb = popByteBuffer();
  _encodeTestGameEnd(message, bb);
  return toUint8Array(bb);
}

function _encodeTestGameEnd(message: TestGameEnd, bb: ByteBuffer): void {
}

export function decodeTestGameEnd(binary: Uint8Array): TestGameEnd {
  return _decodeTestGameEnd(wrapByteBuffer(binary));
}

function _decodeTestGameEnd(bb: ByteBuffer): TestGameEnd {
  let message: TestGameEnd = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface UserEnter {
  User: GameUser;
}

export function encodeUserEnter(message: UserEnter): Uint8Array {
  let bb = popByteBuffer();
  _encodeUserEnter(message, bb);
  return toUint8Array(bb);
}

function _encodeUserEnter(message: UserEnter, bb: ByteBuffer): void {
  // required GameUser User = 1;
  let $User = message.User;
  if ($User !== undefined) {
    writeVarint32(bb, 10);
    let nested = popByteBuffer();
    _encodeGameUser($User, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }
}

export function decodeUserEnter(binary: Uint8Array): UserEnter {
  return _decodeUserEnter(wrapByteBuffer(binary));
}

function _decodeUserEnter(bb: ByteBuffer): UserEnter {
  let message: UserEnter = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // required GameUser User = 1;
      case 1: {
        let limit = pushTemporaryLength(bb);
        message.User = _decodeGameUser(bb);
        bb.limit = limit;
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  if (message.User === undefined)
    throw new Error("Missing required field: User");

  return message;
}

export interface UserLeave {
  User: GameUser;
}

export function encodeUserLeave(message: UserLeave): Uint8Array {
  let bb = popByteBuffer();
  _encodeUserLeave(message, bb);
  return toUint8Array(bb);
}

function _encodeUserLeave(message: UserLeave, bb: ByteBuffer): void {
  // required GameUser User = 1;
  let $User = message.User;
  if ($User !== undefined) {
    writeVarint32(bb, 10);
    let nested = popByteBuffer();
    _encodeGameUser($User, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }
}

export function decodeUserLeave(binary: Uint8Array): UserLeave {
  return _decodeUserLeave(wrapByteBuffer(binary));
}

function _decodeUserLeave(bb: ByteBuffer): UserLeave {
  let message: UserLeave = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // required GameUser User = 1;
      case 1: {
        let limit = pushTemporaryLength(bb);
        message.User = _decodeGameUser(bb);
        bb.limit = limit;
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  if (message.User === undefined)
    throw new Error("Missing required field: User");

  return message;
}

export interface UserStateChange {
  User: GameUser;
}

export function encodeUserStateChange(message: UserStateChange): Uint8Array {
  let bb = popByteBuffer();
  _encodeUserStateChange(message, bb);
  return toUint8Array(bb);
}

function _encodeUserStateChange(message: UserStateChange, bb: ByteBuffer): void {
  // required GameUser User = 1;
  let $User = message.User;
  if ($User !== undefined) {
    writeVarint32(bb, 10);
    let nested = popByteBuffer();
    _encodeGameUser($User, nested);
    writeVarint32(bb, nested.limit);
    writeByteBuffer(bb, nested);
    pushByteBuffer(nested);
  }
}

export function decodeUserStateChange(binary: Uint8Array): UserStateChange {
  return _decodeUserStateChange(wrapByteBuffer(binary));
}

function _decodeUserStateChange(bb: ByteBuffer): UserStateChange {
  let message: UserStateChange = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // required GameUser User = 1;
      case 1: {
        let limit = pushTemporaryLength(bb);
        message.User = _decodeGameUser(bb);
        bb.limit = limit;
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  if (message.User === undefined)
    throw new Error("Missing required field: User");

  return message;
}

export interface GameUser {
  UserID: number;
  NickName: string;
  Sex: number;
  FaceID: number;
  Score: Long;
  WinCount: number;
  LoseCount: number;
  DrawCount: number;
  StateValue: number;
  TableNo: number;
  SeatNo: number;
  LastWinLose?: number;
}

export function encodeGameUser(message: GameUser): Uint8Array {
  let bb = popByteBuffer();
  _encodeGameUser(message, bb);
  return toUint8Array(bb);
}

export function _encodeGameUser(message: GameUser, bb: ByteBuffer): void {
  // required int32 UserID = 1;
  let $UserID = message.UserID;
  if ($UserID !== undefined) {
    writeVarint32(bb, 8);
    writeVarint64(bb, intToLong($UserID));
  }

  // required string NickName = 2;
  let $NickName = message.NickName;
  if ($NickName !== undefined) {
    writeVarint32(bb, 18);
    writeString(bb, $NickName);
  }

  // required int32 Sex = 3;
  let $Sex = message.Sex;
  if ($Sex !== undefined) {
    writeVarint32(bb, 24);
    writeVarint64(bb, intToLong($Sex));
  }

  // required int32 FaceID = 4;
  let $FaceID = message.FaceID;
  if ($FaceID !== undefined) {
    writeVarint32(bb, 32);
    writeVarint64(bb, intToLong($FaceID));
  }

  // required int64 Score = 5;
  let $Score = message.Score;
  if ($Score !== undefined) {
    writeVarint32(bb, 40);
    writeVarint64(bb, $Score);
  }

  // required int32 WinCount = 6;
  let $WinCount = message.WinCount;
  if ($WinCount !== undefined) {
    writeVarint32(bb, 48);
    writeVarint64(bb, intToLong($WinCount));
  }

  // required int32 LoseCount = 7;
  let $LoseCount = message.LoseCount;
  if ($LoseCount !== undefined) {
    writeVarint32(bb, 56);
    writeVarint64(bb, intToLong($LoseCount));
  }

  // required int32 DrawCount = 8;
  let $DrawCount = message.DrawCount;
  if ($DrawCount !== undefined) {
    writeVarint32(bb, 64);
    writeVarint64(bb, intToLong($DrawCount));
  }

  // required int32 StateValue = 9;
  let $StateValue = message.StateValue;
  if ($StateValue !== undefined) {
    writeVarint32(bb, 72);
    writeVarint64(bb, intToLong($StateValue));
  }

  // required int32 TableNo = 10;
  let $TableNo = message.TableNo;
  if ($TableNo !== undefined) {
    writeVarint32(bb, 80);
    writeVarint64(bb, intToLong($TableNo));
  }

  // required int32 SeatNo = 11;
  let $SeatNo = message.SeatNo;
  if ($SeatNo !== undefined) {
    writeVarint32(bb, 88);
    writeVarint64(bb, intToLong($SeatNo));
  }

  // optional int32 LastWinLose = 12;
  let $LastWinLose = message.LastWinLose;
  if ($LastWinLose !== undefined) {
    writeVarint32(bb, 96);
    writeVarint64(bb, intToLong($LastWinLose));
  }
}

export function decodeGameUser(binary: Uint8Array): GameUser {
  return _decodeGameUser(wrapByteBuffer(binary));
}

export function _decodeGameUser(bb: ByteBuffer): GameUser {
  let message: GameUser = {} as any;

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

      // required string NickName = 2;
      case 2: {
        message.NickName = readString(bb, readVarint32(bb));
        break;
      }

      // required int32 Sex = 3;
      case 3: {
        message.Sex = readVarint32(bb);
        break;
      }

      // required int32 FaceID = 4;
      case 4: {
        message.FaceID = readVarint32(bb);
        break;
      }

      // required int64 Score = 5;
      case 5: {
        message.Score = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // required int32 WinCount = 6;
      case 6: {
        message.WinCount = readVarint32(bb);
        break;
      }

      // required int32 LoseCount = 7;
      case 7: {
        message.LoseCount = readVarint32(bb);
        break;
      }

      // required int32 DrawCount = 8;
      case 8: {
        message.DrawCount = readVarint32(bb);
        break;
      }

      // required int32 StateValue = 9;
      case 9: {
        message.StateValue = readVarint32(bb);
        break;
      }

      // required int32 TableNo = 10;
      case 10: {
        message.TableNo = readVarint32(bb);
        break;
      }

      // required int32 SeatNo = 11;
      case 11: {
        message.SeatNo = readVarint32(bb);
        break;
      }

      // optional int32 LastWinLose = 12;
      case 12: {
        message.LastWinLose = readVarint32(bb);
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  if (message.UserID === undefined)
    throw new Error("Missing required field: UserID");

  if (message.NickName === undefined)
    throw new Error("Missing required field: NickName");

  if (message.Sex === undefined)
    throw new Error("Missing required field: Sex");

  if (message.FaceID === undefined)
    throw new Error("Missing required field: FaceID");

  if (message.Score === undefined)
    throw new Error("Missing required field: Score");

  if (message.WinCount === undefined)
    throw new Error("Missing required field: WinCount");

  if (message.LoseCount === undefined)
    throw new Error("Missing required field: LoseCount");

  if (message.DrawCount === undefined)
    throw new Error("Missing required field: DrawCount");

  if (message.StateValue === undefined)
    throw new Error("Missing required field: StateValue");

  if (message.TableNo === undefined)
    throw new Error("Missing required field: TableNo");

  if (message.SeatNo === undefined)
    throw new Error("Missing required field: SeatNo");

  return message;
}

export interface GamePoker {
  Poker?: UserPoker[];
}

export function encodeGamePoker(message: GamePoker): Uint8Array {
  let bb = popByteBuffer();
  _encodeGamePoker(message, bb);
  return toUint8Array(bb);
}

function _encodeGamePoker(message: GamePoker, bb: ByteBuffer): void {
  // repeated UserPoker Poker = 1;
  let array$Poker = message.Poker;
  if (array$Poker !== undefined) {
    for (let value of array$Poker) {
      writeVarint32(bb, 10);
      let nested = popByteBuffer();
      _encodeUserPoker(value, nested);
      writeVarint32(bb, nested.limit);
      writeByteBuffer(bb, nested);
      pushByteBuffer(nested);
    }
  }
}

export function decodeGamePoker(binary: Uint8Array): GamePoker {
  return _decodeGamePoker(wrapByteBuffer(binary));
}

function _decodeGamePoker(bb: ByteBuffer): GamePoker {
  let message: GamePoker = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // repeated UserPoker Poker = 1;
      case 1: {
        let limit = pushTemporaryLength(bb);
        let values = message.Poker || (message.Poker = []);
        values.push(_decodeUserPoker(bb));
        bb.limit = limit;
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface UserPoker {
  UserID: number;
  SeatNo: number;
  Cards?: PokerCard[];
}

export function encodeUserPoker(message: UserPoker): Uint8Array {
  let bb = popByteBuffer();
  _encodeUserPoker(message, bb);
  return toUint8Array(bb);
}

function _encodeUserPoker(message: UserPoker, bb: ByteBuffer): void {
  // required int32 UserID = 1;
  let $UserID = message.UserID;
  if ($UserID !== undefined) {
    writeVarint32(bb, 8);
    writeVarint64(bb, intToLong($UserID));
  }

  // required int32 SeatNo = 2;
  let $SeatNo = message.SeatNo;
  if ($SeatNo !== undefined) {
    writeVarint32(bb, 16);
    writeVarint64(bb, intToLong($SeatNo));
  }

  // repeated PokerCard Cards = 3;
  let array$Cards = message.Cards;
  if (array$Cards !== undefined) {
    for (let value of array$Cards) {
      writeVarint32(bb, 26);
      let nested = popByteBuffer();
      _encodePokerCard(value, nested);
      writeVarint32(bb, nested.limit);
      writeByteBuffer(bb, nested);
      pushByteBuffer(nested);
    }
  }
}

export function decodeUserPoker(binary: Uint8Array): UserPoker {
  return _decodeUserPoker(wrapByteBuffer(binary));
}

function _decodeUserPoker(bb: ByteBuffer): UserPoker {
  let message: UserPoker = {} as any;

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

      // required int32 SeatNo = 2;
      case 2: {
        message.SeatNo = readVarint32(bb);
        break;
      }

      // repeated PokerCard Cards = 3;
      case 3: {
        let limit = pushTemporaryLength(bb);
        let values = message.Cards || (message.Cards = []);
        values.push(_decodePokerCard(bb));
        bb.limit = limit;
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  if (message.UserID === undefined)
    throw new Error("Missing required field: UserID");

  if (message.SeatNo === undefined)
    throw new Error("Missing required field: SeatNo");

  return message;
}

export interface PokerCard {
  Color: number;
  CardNumber: number;
}

export function encodePokerCard(message: PokerCard): Uint8Array {
  let bb = popByteBuffer();
  _encodePokerCard(message, bb);
  return toUint8Array(bb);
}

function _encodePokerCard(message: PokerCard, bb: ByteBuffer): void {
  // required int32 Color = 1;
  let $Color = message.Color;
  if ($Color !== undefined) {
    writeVarint32(bb, 8);
    writeVarint64(bb, intToLong($Color));
  }

  // required int32 CardNumber = 2;
  let $CardNumber = message.CardNumber;
  if ($CardNumber !== undefined) {
    writeVarint32(bb, 16);
    writeVarint64(bb, intToLong($CardNumber));
  }
}

export function decodePokerCard(binary: Uint8Array): PokerCard {
  return _decodePokerCard(wrapByteBuffer(binary));
}

function _decodePokerCard(bb: ByteBuffer): PokerCard {
  let message: PokerCard = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // required int32 Color = 1;
      case 1: {
        message.Color = readVarint32(bb);
        break;
      }

      // required int32 CardNumber = 2;
      case 2: {
        message.CardNumber = readVarint32(bb);
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  if (message.Color === undefined)
    throw new Error("Missing required field: Color");

  if (message.CardNumber === undefined)
    throw new Error("Missing required field: CardNumber");

  return message;
}

export interface UserActionCommited {
  ActionName: string;
}

export function encodeUserActionCommited(message: UserActionCommited): Uint8Array {
  let bb = popByteBuffer();
  _encodeUserActionCommited(message, bb);
  return toUint8Array(bb);
}

function _encodeUserActionCommited(message: UserActionCommited, bb: ByteBuffer): void {
  // required string ActionName = 1;
  let $ActionName = message.ActionName;
  if ($ActionName !== undefined) {
    writeVarint32(bb, 10);
    writeString(bb, $ActionName);
  }
}

export function decodeUserActionCommited(binary: Uint8Array): UserActionCommited {
  return _decodeUserActionCommited(wrapByteBuffer(binary));
}

function _decodeUserActionCommited(bb: ByteBuffer): UserActionCommited {
  let message: UserActionCommited = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // required string ActionName = 1;
      case 1: {
        message.ActionName = readString(bb, readVarint32(bb));
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  if (message.ActionName === undefined)
    throw new Error("Missing required field: ActionName");

  return message;
}

export interface AllUserActionCommited {
  ActionName: string;
}

export function encodeAllUserActionCommited(message: AllUserActionCommited): Uint8Array {
  let bb = popByteBuffer();
  _encodeAllUserActionCommited(message, bb);
  return toUint8Array(bb);
}

function _encodeAllUserActionCommited(message: AllUserActionCommited, bb: ByteBuffer): void {
  // required string ActionName = 1;
  let $ActionName = message.ActionName;
  if ($ActionName !== undefined) {
    writeVarint32(bb, 10);
    writeString(bb, $ActionName);
  }
}

export function decodeAllUserActionCommited(binary: Uint8Array): AllUserActionCommited {
  return _decodeAllUserActionCommited(wrapByteBuffer(binary));
}

function _decodeAllUserActionCommited(bb: ByteBuffer): AllUserActionCommited {
  let message: AllUserActionCommited = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // required string ActionName = 1;
      case 1: {
        message.ActionName = readString(bb, readVarint32(bb));
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  if (message.ActionName === undefined)
    throw new Error("Missing required field: ActionName");

  return message;
}

export interface LookOnUserNotify {
  UserID?: number[];
}

export function encodeLookOnUserNotify(message: LookOnUserNotify): Uint8Array {
  let bb = popByteBuffer();
  _encodeLookOnUserNotify(message, bb);
  return toUint8Array(bb);
}

function _encodeLookOnUserNotify(message: LookOnUserNotify, bb: ByteBuffer): void {
  // repeated int32 UserID = 1;
  let array$UserID = message.UserID;
  if (array$UserID !== undefined) {
    let packed = popByteBuffer();
    for (let value of array$UserID) {
      writeVarint64(packed, intToLong(value));
    }
    writeVarint32(bb, 10);
    writeVarint32(bb, packed.offset);
    writeByteBuffer(bb, packed);
    pushByteBuffer(packed);
  }
}

export function decodeLookOnUserNotify(binary: Uint8Array): LookOnUserNotify {
  return _decodeLookOnUserNotify(wrapByteBuffer(binary));
}

function _decodeLookOnUserNotify(bb: ByteBuffer): LookOnUserNotify {
  let message: LookOnUserNotify = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // repeated int32 UserID = 1;
      case 1: {
        let values = message.UserID || (message.UserID = []);
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

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface UserLuckScore {
  UserID: number;
  Score: Long;
}

export function encodeUserLuckScore(message: UserLuckScore): Uint8Array {
  let bb = popByteBuffer();
  _encodeUserLuckScore(message, bb);
  return toUint8Array(bb);
}

function _encodeUserLuckScore(message: UserLuckScore, bb: ByteBuffer): void {
  // required int32 UserID = 1;
  let $UserID = message.UserID;
  if ($UserID !== undefined) {
    writeVarint32(bb, 8);
    writeVarint64(bb, intToLong($UserID));
  }

  // required int64 Score = 2;
  let $Score = message.Score;
  if ($Score !== undefined) {
    writeVarint32(bb, 16);
    writeVarint64(bb, $Score);
  }
}

export function decodeUserLuckScore(binary: Uint8Array): UserLuckScore {
  return _decodeUserLuckScore(wrapByteBuffer(binary));
}

function _decodeUserLuckScore(bb: ByteBuffer): UserLuckScore {
  let message: UserLuckScore = {} as any;

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

      // required int64 Score = 2;
      case 2: {
        message.Score = readVarint64(bb, /* unsigned */ false);
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  if (message.UserID === undefined)
    throw new Error("Missing required field: UserID");

  if (message.Score === undefined)
    throw new Error("Missing required field: Score");

  return message;
}

export interface UserLuckScoreRet {
  UserID: number;
  Value: string;
}

export function encodeUserLuckScoreRet(message: UserLuckScoreRet): Uint8Array {
  let bb = popByteBuffer();
  _encodeUserLuckScoreRet(message, bb);
  return toUint8Array(bb);
}

function _encodeUserLuckScoreRet(message: UserLuckScoreRet, bb: ByteBuffer): void {
  // required int32 UserID = 1;
  let $UserID = message.UserID;
  if ($UserID !== undefined) {
    writeVarint32(bb, 8);
    writeVarint64(bb, intToLong($UserID));
  }

  // required string Value = 2;
  let $Value = message.Value;
  if ($Value !== undefined) {
    writeVarint32(bb, 18);
    writeString(bb, $Value);
  }
}

export function decodeUserLuckScoreRet(binary: Uint8Array): UserLuckScoreRet {
  return _decodeUserLuckScoreRet(wrapByteBuffer(binary));
}

function _decodeUserLuckScoreRet(bb: ByteBuffer): UserLuckScoreRet {
  let message: UserLuckScoreRet = {} as any;

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

      // required string Value = 2;
      case 2: {
        message.Value = readString(bb, readVarint32(bb));
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  if (message.UserID === undefined)
    throw new Error("Missing required field: UserID");

  if (message.Value === undefined)
    throw new Error("Missing required field: Value");

  return message;
}

export interface GameBeginCountDown {
  Time: number;
}

export function encodeGameBeginCountDown(message: GameBeginCountDown): Uint8Array {
  let bb = popByteBuffer();
  _encodeGameBeginCountDown(message, bb);
  return toUint8Array(bb);
}

function _encodeGameBeginCountDown(message: GameBeginCountDown, bb: ByteBuffer): void {
  // required int32 Time = 1;
  let $Time = message.Time;
  if ($Time !== undefined) {
    writeVarint32(bb, 8);
    writeVarint64(bb, intToLong($Time));
  }
}

export function decodeGameBeginCountDown(binary: Uint8Array): GameBeginCountDown {
  return _decodeGameBeginCountDown(wrapByteBuffer(binary));
}

function _decodeGameBeginCountDown(bb: ByteBuffer): GameBeginCountDown {
  let message: GameBeginCountDown = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // required int32 Time = 1;
      case 1: {
        message.Time = readVarint32(bb);
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  if (message.Time === undefined)
    throw new Error("Missing required field: Time");

  return message;
}

export interface SuperToolAddChangeLog {
  GameID: number;
  TableNo: number;
  Type: number;
  Result: string;
  Operator: string;
}

export function encodeSuperToolAddChangeLog(message: SuperToolAddChangeLog): Uint8Array {
  let bb = popByteBuffer();
  _encodeSuperToolAddChangeLog(message, bb);
  return toUint8Array(bb);
}

function _encodeSuperToolAddChangeLog(message: SuperToolAddChangeLog, bb: ByteBuffer): void {
  // required int32 GameID = 1;
  let $GameID = message.GameID;
  if ($GameID !== undefined) {
    writeVarint32(bb, 8);
    writeVarint64(bb, intToLong($GameID));
  }

  // required int32 TableNo = 3;
  let $TableNo = message.TableNo;
  if ($TableNo !== undefined) {
    writeVarint32(bb, 24);
    writeVarint64(bb, intToLong($TableNo));
  }

  // required int32 Type = 4;
  let $Type = message.Type;
  if ($Type !== undefined) {
    writeVarint32(bb, 32);
    writeVarint64(bb, intToLong($Type));
  }

  // required string Result = 5;
  let $Result = message.Result;
  if ($Result !== undefined) {
    writeVarint32(bb, 42);
    writeString(bb, $Result);
  }

  // required string Operator = 6;
  let $Operator = message.Operator;
  if ($Operator !== undefined) {
    writeVarint32(bb, 50);
    writeString(bb, $Operator);
  }
}

export function decodeSuperToolAddChangeLog(binary: Uint8Array): SuperToolAddChangeLog {
  return _decodeSuperToolAddChangeLog(wrapByteBuffer(binary));
}

function _decodeSuperToolAddChangeLog(bb: ByteBuffer): SuperToolAddChangeLog {
  let message: SuperToolAddChangeLog = {} as any;

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

      // required int32 TableNo = 3;
      case 3: {
        message.TableNo = readVarint32(bb);
        break;
      }

      // required int32 Type = 4;
      case 4: {
        message.Type = readVarint32(bb);
        break;
      }

      // required string Result = 5;
      case 5: {
        message.Result = readString(bb, readVarint32(bb));
        break;
      }

      // required string Operator = 6;
      case 6: {
        message.Operator = readString(bb, readVarint32(bb));
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  if (message.GameID === undefined)
    throw new Error("Missing required field: GameID");

  if (message.TableNo === undefined)
    throw new Error("Missing required field: TableNo");

  if (message.Type === undefined)
    throw new Error("Missing required field: Type");

  if (message.Result === undefined)
    throw new Error("Missing required field: Result");

  if (message.Operator === undefined)
    throw new Error("Missing required field: Operator");

  return message;
}

export interface SuperToolAddAssignReward {
  GameID: number;
  FlagID: number;
  TableNo: number;
  Result: string;
  Operator: string;
  DetailList?: SuperToolAddAssignRewardDetail[];
}

export function encodeSuperToolAddAssignReward(message: SuperToolAddAssignReward): Uint8Array {
  let bb = popByteBuffer();
  _encodeSuperToolAddAssignReward(message, bb);
  return toUint8Array(bb);
}

function _encodeSuperToolAddAssignReward(message: SuperToolAddAssignReward, bb: ByteBuffer): void {
  // required int32 GameID = 1;
  let $GameID = message.GameID;
  if ($GameID !== undefined) {
    writeVarint32(bb, 8);
    writeVarint64(bb, intToLong($GameID));
  }

  // required int32 FlagID = 2;
  let $FlagID = message.FlagID;
  if ($FlagID !== undefined) {
    writeVarint32(bb, 16);
    writeVarint64(bb, intToLong($FlagID));
  }

  // required int32 TableNo = 3;
  let $TableNo = message.TableNo;
  if ($TableNo !== undefined) {
    writeVarint32(bb, 24);
    writeVarint64(bb, intToLong($TableNo));
  }

  // required string Result = 4;
  let $Result = message.Result;
  if ($Result !== undefined) {
    writeVarint32(bb, 34);
    writeString(bb, $Result);
  }

  // required string Operator = 5;
  let $Operator = message.Operator;
  if ($Operator !== undefined) {
    writeVarint32(bb, 42);
    writeString(bb, $Operator);
  }

  // repeated SuperToolAddAssignRewardDetail DetailList = 6;
  let array$DetailList = message.DetailList;
  if (array$DetailList !== undefined) {
    for (let value of array$DetailList) {
      writeVarint32(bb, 50);
      let nested = popByteBuffer();
      _encodeSuperToolAddAssignRewardDetail(value, nested);
      writeVarint32(bb, nested.limit);
      writeByteBuffer(bb, nested);
      pushByteBuffer(nested);
    }
  }
}

export function decodeSuperToolAddAssignReward(binary: Uint8Array): SuperToolAddAssignReward {
  return _decodeSuperToolAddAssignReward(wrapByteBuffer(binary));
}

function _decodeSuperToolAddAssignReward(bb: ByteBuffer): SuperToolAddAssignReward {
  let message: SuperToolAddAssignReward = {} as any;

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

      // required int32 FlagID = 2;
      case 2: {
        message.FlagID = readVarint32(bb);
        break;
      }

      // required int32 TableNo = 3;
      case 3: {
        message.TableNo = readVarint32(bb);
        break;
      }

      // required string Result = 4;
      case 4: {
        message.Result = readString(bb, readVarint32(bb));
        break;
      }

      // required string Operator = 5;
      case 5: {
        message.Operator = readString(bb, readVarint32(bb));
        break;
      }

      // repeated SuperToolAddAssignRewardDetail DetailList = 6;
      case 6: {
        let limit = pushTemporaryLength(bb);
        let values = message.DetailList || (message.DetailList = []);
        values.push(_decodeSuperToolAddAssignRewardDetail(bb));
        bb.limit = limit;
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  if (message.GameID === undefined)
    throw new Error("Missing required field: GameID");

  if (message.FlagID === undefined)
    throw new Error("Missing required field: FlagID");

  if (message.TableNo === undefined)
    throw new Error("Missing required field: TableNo");

  if (message.Result === undefined)
    throw new Error("Missing required field: Result");

  if (message.Operator === undefined)
    throw new Error("Missing required field: Operator");

  return message;
}

export interface SuperToolGetAssignRewardDetail {
  GameID: number;
  FlagID: number;
  TableNo: number;
}

export function encodeSuperToolGetAssignRewardDetail(message: SuperToolGetAssignRewardDetail): Uint8Array {
  let bb = popByteBuffer();
  _encodeSuperToolGetAssignRewardDetail(message, bb);
  return toUint8Array(bb);
}

function _encodeSuperToolGetAssignRewardDetail(message: SuperToolGetAssignRewardDetail, bb: ByteBuffer): void {
  // required int32 GameID = 1;
  let $GameID = message.GameID;
  if ($GameID !== undefined) {
    writeVarint32(bb, 8);
    writeVarint64(bb, intToLong($GameID));
  }

  // required int32 FlagID = 2;
  let $FlagID = message.FlagID;
  if ($FlagID !== undefined) {
    writeVarint32(bb, 16);
    writeVarint64(bb, intToLong($FlagID));
  }

  // required int32 TableNo = 3;
  let $TableNo = message.TableNo;
  if ($TableNo !== undefined) {
    writeVarint32(bb, 24);
    writeVarint64(bb, intToLong($TableNo));
  }
}

export function decodeSuperToolGetAssignRewardDetail(binary: Uint8Array): SuperToolGetAssignRewardDetail {
  return _decodeSuperToolGetAssignRewardDetail(wrapByteBuffer(binary));
}

function _decodeSuperToolGetAssignRewardDetail(bb: ByteBuffer): SuperToolGetAssignRewardDetail {
  let message: SuperToolGetAssignRewardDetail = {} as any;

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

      // required int32 FlagID = 2;
      case 2: {
        message.FlagID = readVarint32(bb);
        break;
      }

      // required int32 TableNo = 3;
      case 3: {
        message.TableNo = readVarint32(bb);
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  if (message.GameID === undefined)
    throw new Error("Missing required field: GameID");

  if (message.FlagID === undefined)
    throw new Error("Missing required field: FlagID");

  if (message.TableNo === undefined)
    throw new Error("Missing required field: TableNo");

  return message;
}

export interface SuperToolAddAssignRewardDetail {
  Idx: number;
  Description: string;
  Reward: string;
  Status: number;
}

export function encodeSuperToolAddAssignRewardDetail(message: SuperToolAddAssignRewardDetail): Uint8Array {
  let bb = popByteBuffer();
  _encodeSuperToolAddAssignRewardDetail(message, bb);
  return toUint8Array(bb);
}

function _encodeSuperToolAddAssignRewardDetail(message: SuperToolAddAssignRewardDetail, bb: ByteBuffer): void {
  // required int32 Idx = 1;
  let $Idx = message.Idx;
  if ($Idx !== undefined) {
    writeVarint32(bb, 8);
    writeVarint64(bb, intToLong($Idx));
  }

  // required string Description = 2;
  let $Description = message.Description;
  if ($Description !== undefined) {
    writeVarint32(bb, 18);
    writeString(bb, $Description);
  }

  // required string Reward = 3;
  let $Reward = message.Reward;
  if ($Reward !== undefined) {
    writeVarint32(bb, 26);
    writeString(bb, $Reward);
  }

  // required int32 Status = 4;
  let $Status = message.Status;
  if ($Status !== undefined) {
    writeVarint32(bb, 32);
    writeVarint64(bb, intToLong($Status));
  }
}

export function decodeSuperToolAddAssignRewardDetail(binary: Uint8Array): SuperToolAddAssignRewardDetail {
  return _decodeSuperToolAddAssignRewardDetail(wrapByteBuffer(binary));
}

function _decodeSuperToolAddAssignRewardDetail(bb: ByteBuffer): SuperToolAddAssignRewardDetail {
  let message: SuperToolAddAssignRewardDetail = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // required int32 Idx = 1;
      case 1: {
        message.Idx = readVarint32(bb);
        break;
      }

      // required string Description = 2;
      case 2: {
        message.Description = readString(bb, readVarint32(bb));
        break;
      }

      // required string Reward = 3;
      case 3: {
        message.Reward = readString(bb, readVarint32(bb));
        break;
      }

      // required int32 Status = 4;
      case 4: {
        message.Status = readVarint32(bb);
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  if (message.Idx === undefined)
    throw new Error("Missing required field: Idx");

  if (message.Description === undefined)
    throw new Error("Missing required field: Description");

  if (message.Reward === undefined)
    throw new Error("Missing required field: Reward");

  if (message.Status === undefined)
    throw new Error("Missing required field: Status");

  return message;
}

export interface SuperToolAssignRewardDetail {
  LogID: number;
  Idx: number;
  Description: string;
  Reward: string;
  Status: number;
}

export function encodeSuperToolAssignRewardDetail(message: SuperToolAssignRewardDetail): Uint8Array {
  let bb = popByteBuffer();
  _encodeSuperToolAssignRewardDetail(message, bb);
  return toUint8Array(bb);
}

function _encodeSuperToolAssignRewardDetail(message: SuperToolAssignRewardDetail, bb: ByteBuffer): void {
  // required int32 LogID = 1;
  let $LogID = message.LogID;
  if ($LogID !== undefined) {
    writeVarint32(bb, 8);
    writeVarint64(bb, intToLong($LogID));
  }

  // required int32 Idx = 2;
  let $Idx = message.Idx;
  if ($Idx !== undefined) {
    writeVarint32(bb, 16);
    writeVarint64(bb, intToLong($Idx));
  }

  // required string Description = 3;
  let $Description = message.Description;
  if ($Description !== undefined) {
    writeVarint32(bb, 26);
    writeString(bb, $Description);
  }

  // required string Reward = 4;
  let $Reward = message.Reward;
  if ($Reward !== undefined) {
    writeVarint32(bb, 34);
    writeString(bb, $Reward);
  }

  // required int32 Status = 5;
  let $Status = message.Status;
  if ($Status !== undefined) {
    writeVarint32(bb, 40);
    writeVarint64(bb, intToLong($Status));
  }
}

export function decodeSuperToolAssignRewardDetail(binary: Uint8Array): SuperToolAssignRewardDetail {
  return _decodeSuperToolAssignRewardDetail(wrapByteBuffer(binary));
}

function _decodeSuperToolAssignRewardDetail(bb: ByteBuffer): SuperToolAssignRewardDetail {
  let message: SuperToolAssignRewardDetail = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // required int32 LogID = 1;
      case 1: {
        message.LogID = readVarint32(bb);
        break;
      }

      // required int32 Idx = 2;
      case 2: {
        message.Idx = readVarint32(bb);
        break;
      }

      // required string Description = 3;
      case 3: {
        message.Description = readString(bb, readVarint32(bb));
        break;
      }

      // required string Reward = 4;
      case 4: {
        message.Reward = readString(bb, readVarint32(bb));
        break;
      }

      // required int32 Status = 5;
      case 5: {
        message.Status = readVarint32(bb);
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  if (message.LogID === undefined)
    throw new Error("Missing required field: LogID");

  if (message.Idx === undefined)
    throw new Error("Missing required field: Idx");

  if (message.Description === undefined)
    throw new Error("Missing required field: Description");

  if (message.Reward === undefined)
    throw new Error("Missing required field: Reward");

  if (message.Status === undefined)
    throw new Error("Missing required field: Status");

  return message;
}

export interface SuperToolGetVipUserRequest {
  GameID: number;
}

export function encodeSuperToolGetVipUserRequest(message: SuperToolGetVipUserRequest): Uint8Array {
  let bb = popByteBuffer();
  _encodeSuperToolGetVipUserRequest(message, bb);
  return toUint8Array(bb);
}

function _encodeSuperToolGetVipUserRequest(message: SuperToolGetVipUserRequest, bb: ByteBuffer): void {
  // required int32 GameID = 1;
  let $GameID = message.GameID;
  if ($GameID !== undefined) {
    writeVarint32(bb, 8);
    writeVarint64(bb, intToLong($GameID));
  }
}

export function decodeSuperToolGetVipUserRequest(binary: Uint8Array): SuperToolGetVipUserRequest {
  return _decodeSuperToolGetVipUserRequest(wrapByteBuffer(binary));
}

function _decodeSuperToolGetVipUserRequest(bb: ByteBuffer): SuperToolGetVipUserRequest {
  let message: SuperToolGetVipUserRequest = {} as any;

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

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  if (message.GameID === undefined)
    throw new Error("Missing required field: GameID");

  return message;
}

export interface SuperToolVipUserDataList {
  DataList?: SuperToolVipUserData[];
}

export function encodeSuperToolVipUserDataList(message: SuperToolVipUserDataList): Uint8Array {
  let bb = popByteBuffer();
  _encodeSuperToolVipUserDataList(message, bb);
  return toUint8Array(bb);
}

function _encodeSuperToolVipUserDataList(message: SuperToolVipUserDataList, bb: ByteBuffer): void {
  // repeated SuperToolVipUserData DataList = 1;
  let array$DataList = message.DataList;
  if (array$DataList !== undefined) {
    for (let value of array$DataList) {
      writeVarint32(bb, 10);
      let nested = popByteBuffer();
      _encodeSuperToolVipUserData(value, nested);
      writeVarint32(bb, nested.limit);
      writeByteBuffer(bb, nested);
      pushByteBuffer(nested);
    }
  }
}

export function decodeSuperToolVipUserDataList(binary: Uint8Array): SuperToolVipUserDataList {
  return _decodeSuperToolVipUserDataList(wrapByteBuffer(binary));
}

function _decodeSuperToolVipUserDataList(bb: ByteBuffer): SuperToolVipUserDataList {
  let message: SuperToolVipUserDataList = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // repeated SuperToolVipUserData DataList = 1;
      case 1: {
        let limit = pushTemporaryLength(bb);
        let values = message.DataList || (message.DataList = []);
        values.push(_decodeSuperToolVipUserData(bb));
        bb.limit = limit;
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface SuperToolVipUserData {
  UserID: number;
  AssignAmount: Long;
  AssignRate: number;
  CompleteAmount: Long;
  Complete: number;
  Status: number;
  TotalAll: number;
  TotalUserWinLose: number;
  TodayUserWinLose: number;
}

export function encodeSuperToolVipUserData(message: SuperToolVipUserData): Uint8Array {
  let bb = popByteBuffer();
  _encodeSuperToolVipUserData(message, bb);
  return toUint8Array(bb);
}

function _encodeSuperToolVipUserData(message: SuperToolVipUserData, bb: ByteBuffer): void {
  // required int32 UserID = 1;
  let $UserID = message.UserID;
  if ($UserID !== undefined) {
    writeVarint32(bb, 8);
    writeVarint64(bb, intToLong($UserID));
  }

  // required int64 AssignAmount = 2;
  let $AssignAmount = message.AssignAmount;
  if ($AssignAmount !== undefined) {
    writeVarint32(bb, 16);
    writeVarint64(bb, $AssignAmount);
  }

  // required int32 AssignRate = 3;
  let $AssignRate = message.AssignRate;
  if ($AssignRate !== undefined) {
    writeVarint32(bb, 24);
    writeVarint64(bb, intToLong($AssignRate));
  }

  // required int64 CompleteAmount = 4;
  let $CompleteAmount = message.CompleteAmount;
  if ($CompleteAmount !== undefined) {
    writeVarint32(bb, 32);
    writeVarint64(bb, $CompleteAmount);
  }

  // required int32 Complete = 5;
  let $Complete = message.Complete;
  if ($Complete !== undefined) {
    writeVarint32(bb, 40);
    writeVarint64(bb, intToLong($Complete));
  }

  // required int32 Status = 6;
  let $Status = message.Status;
  if ($Status !== undefined) {
    writeVarint32(bb, 48);
    writeVarint64(bb, intToLong($Status));
  }

  // required int32 TotalAll = 7;
  let $TotalAll = message.TotalAll;
  if ($TotalAll !== undefined) {
    writeVarint32(bb, 56);
    writeVarint64(bb, intToLong($TotalAll));
  }

  // required int32 TotalUserWinLose = 8;
  let $TotalUserWinLose = message.TotalUserWinLose;
  if ($TotalUserWinLose !== undefined) {
    writeVarint32(bb, 64);
    writeVarint64(bb, intToLong($TotalUserWinLose));
  }

  // required int32 TodayUserWinLose = 9;
  let $TodayUserWinLose = message.TodayUserWinLose;
  if ($TodayUserWinLose !== undefined) {
    writeVarint32(bb, 72);
    writeVarint64(bb, intToLong($TodayUserWinLose));
  }
}

export function decodeSuperToolVipUserData(binary: Uint8Array): SuperToolVipUserData {
  return _decodeSuperToolVipUserData(wrapByteBuffer(binary));
}

function _decodeSuperToolVipUserData(bb: ByteBuffer): SuperToolVipUserData {
  let message: SuperToolVipUserData = {} as any;

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

      // required int64 AssignAmount = 2;
      case 2: {
        message.AssignAmount = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // required int32 AssignRate = 3;
      case 3: {
        message.AssignRate = readVarint32(bb);
        break;
      }

      // required int64 CompleteAmount = 4;
      case 4: {
        message.CompleteAmount = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // required int32 Complete = 5;
      case 5: {
        message.Complete = readVarint32(bb);
        break;
      }

      // required int32 Status = 6;
      case 6: {
        message.Status = readVarint32(bb);
        break;
      }

      // required int32 TotalAll = 7;
      case 7: {
        message.TotalAll = readVarint32(bb);
        break;
      }

      // required int32 TotalUserWinLose = 8;
      case 8: {
        message.TotalUserWinLose = readVarint32(bb);
        break;
      }

      // required int32 TodayUserWinLose = 9;
      case 9: {
        message.TodayUserWinLose = readVarint32(bb);
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  if (message.UserID === undefined)
    throw new Error("Missing required field: UserID");

  if (message.AssignAmount === undefined)
    throw new Error("Missing required field: AssignAmount");

  if (message.AssignRate === undefined)
    throw new Error("Missing required field: AssignRate");

  if (message.CompleteAmount === undefined)
    throw new Error("Missing required field: CompleteAmount");

  if (message.Complete === undefined)
    throw new Error("Missing required field: Complete");

  if (message.Status === undefined)
    throw new Error("Missing required field: Status");

  if (message.TotalAll === undefined)
    throw new Error("Missing required field: TotalAll");

  if (message.TotalUserWinLose === undefined)
    throw new Error("Missing required field: TotalUserWinLose");

  if (message.TodayUserWinLose === undefined)
    throw new Error("Missing required field: TodayUserWinLose");

  return message;
}

export interface SuperToolFishGetSystemRewardDetail {
  FishRewardList?: FishSystemRewardDataList[];
}

export function encodeSuperToolFishGetSystemRewardDetail(message: SuperToolFishGetSystemRewardDetail): Uint8Array {
  let bb = popByteBuffer();
  _encodeSuperToolFishGetSystemRewardDetail(message, bb);
  return toUint8Array(bb);
}

function _encodeSuperToolFishGetSystemRewardDetail(message: SuperToolFishGetSystemRewardDetail, bb: ByteBuffer): void {
  // repeated FishSystemRewardDataList FishRewardList = 1;
  let array$FishRewardList = message.FishRewardList;
  if (array$FishRewardList !== undefined) {
    for (let value of array$FishRewardList) {
      writeVarint32(bb, 10);
      let nested = popByteBuffer();
      _encodeFishSystemRewardDataList(value, nested);
      writeVarint32(bb, nested.limit);
      writeByteBuffer(bb, nested);
      pushByteBuffer(nested);
    }
  }
}

export function decodeSuperToolFishGetSystemRewardDetail(binary: Uint8Array): SuperToolFishGetSystemRewardDetail {
  return _decodeSuperToolFishGetSystemRewardDetail(wrapByteBuffer(binary));
}

function _decodeSuperToolFishGetSystemRewardDetail(bb: ByteBuffer): SuperToolFishGetSystemRewardDetail {
  let message: SuperToolFishGetSystemRewardDetail = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // repeated FishSystemRewardDataList FishRewardList = 1;
      case 1: {
        let limit = pushTemporaryLength(bb);
        let values = message.FishRewardList || (message.FishRewardList = []);
        values.push(_decodeFishSystemRewardDataList(bb));
        bb.limit = limit;
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface FishSystemRewardDataList {
  FishID: number;
  Amount: Long;
  FinishAmount: Long;
  Rate: number;
  Status: number;
}

export function encodeFishSystemRewardDataList(message: FishSystemRewardDataList): Uint8Array {
  let bb = popByteBuffer();
  _encodeFishSystemRewardDataList(message, bb);
  return toUint8Array(bb);
}

function _encodeFishSystemRewardDataList(message: FishSystemRewardDataList, bb: ByteBuffer): void {
  // required int32 FishID = 1;
  let $FishID = message.FishID;
  if ($FishID !== undefined) {
    writeVarint32(bb, 8);
    writeVarint64(bb, intToLong($FishID));
  }

  // required int64 Amount = 2;
  let $Amount = message.Amount;
  if ($Amount !== undefined) {
    writeVarint32(bb, 16);
    writeVarint64(bb, $Amount);
  }

  // required int64 FinishAmount = 3;
  let $FinishAmount = message.FinishAmount;
  if ($FinishAmount !== undefined) {
    writeVarint32(bb, 24);
    writeVarint64(bb, $FinishAmount);
  }

  // required int32 Rate = 4;
  let $Rate = message.Rate;
  if ($Rate !== undefined) {
    writeVarint32(bb, 32);
    writeVarint64(bb, intToLong($Rate));
  }

  // required int32 Status = 5;
  let $Status = message.Status;
  if ($Status !== undefined) {
    writeVarint32(bb, 40);
    writeVarint64(bb, intToLong($Status));
  }
}

export function decodeFishSystemRewardDataList(binary: Uint8Array): FishSystemRewardDataList {
  return _decodeFishSystemRewardDataList(wrapByteBuffer(binary));
}

function _decodeFishSystemRewardDataList(bb: ByteBuffer): FishSystemRewardDataList {
  let message: FishSystemRewardDataList = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // required int32 FishID = 1;
      case 1: {
        message.FishID = readVarint32(bb);
        break;
      }

      // required int64 Amount = 2;
      case 2: {
        message.Amount = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // required int64 FinishAmount = 3;
      case 3: {
        message.FinishAmount = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // required int32 Rate = 4;
      case 4: {
        message.Rate = readVarint32(bb);
        break;
      }

      // required int32 Status = 5;
      case 5: {
        message.Status = readVarint32(bb);
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  if (message.FishID === undefined)
    throw new Error("Missing required field: FishID");

  if (message.Amount === undefined)
    throw new Error("Missing required field: Amount");

  if (message.FinishAmount === undefined)
    throw new Error("Missing required field: FinishAmount");

  if (message.Rate === undefined)
    throw new Error("Missing required field: Rate");

  if (message.Status === undefined)
    throw new Error("Missing required field: Status");

  return message;
}

export interface SuperToolFishGetVIPUserRewardDetail {
  FishVIPUserList?: FishVIPUserRewardDataList[];
}

export function encodeSuperToolFishGetVIPUserRewardDetail(message: SuperToolFishGetVIPUserRewardDetail): Uint8Array {
  let bb = popByteBuffer();
  _encodeSuperToolFishGetVIPUserRewardDetail(message, bb);
  return toUint8Array(bb);
}

function _encodeSuperToolFishGetVIPUserRewardDetail(message: SuperToolFishGetVIPUserRewardDetail, bb: ByteBuffer): void {
  // repeated FishVIPUserRewardDataList FishVIPUserList = 1;
  let array$FishVIPUserList = message.FishVIPUserList;
  if (array$FishVIPUserList !== undefined) {
    for (let value of array$FishVIPUserList) {
      writeVarint32(bb, 10);
      let nested = popByteBuffer();
      _encodeFishVIPUserRewardDataList(value, nested);
      writeVarint32(bb, nested.limit);
      writeByteBuffer(bb, nested);
      pushByteBuffer(nested);
    }
  }
}

export function decodeSuperToolFishGetVIPUserRewardDetail(binary: Uint8Array): SuperToolFishGetVIPUserRewardDetail {
  return _decodeSuperToolFishGetVIPUserRewardDetail(wrapByteBuffer(binary));
}

function _decodeSuperToolFishGetVIPUserRewardDetail(bb: ByteBuffer): SuperToolFishGetVIPUserRewardDetail {
  let message: SuperToolFishGetVIPUserRewardDetail = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // repeated FishVIPUserRewardDataList FishVIPUserList = 1;
      case 1: {
        let limit = pushTemporaryLength(bb);
        let values = message.FishVIPUserList || (message.FishVIPUserList = []);
        values.push(_decodeFishVIPUserRewardDataList(bb));
        bb.limit = limit;
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface FishVIPUserRewardDataList {
  UserID: number;
  AssignAmount: Long;
  Rate: number;
  FinishAmount: Long;
  Status: number;
  SumAssignAmount: Long;
}

export function encodeFishVIPUserRewardDataList(message: FishVIPUserRewardDataList): Uint8Array {
  let bb = popByteBuffer();
  _encodeFishVIPUserRewardDataList(message, bb);
  return toUint8Array(bb);
}

function _encodeFishVIPUserRewardDataList(message: FishVIPUserRewardDataList, bb: ByteBuffer): void {
  // required int32 UserID = 1;
  let $UserID = message.UserID;
  if ($UserID !== undefined) {
    writeVarint32(bb, 8);
    writeVarint64(bb, intToLong($UserID));
  }

  // required int64 AssignAmount = 2;
  let $AssignAmount = message.AssignAmount;
  if ($AssignAmount !== undefined) {
    writeVarint32(bb, 16);
    writeVarint64(bb, $AssignAmount);
  }

  // required int32 Rate = 3;
  let $Rate = message.Rate;
  if ($Rate !== undefined) {
    writeVarint32(bb, 24);
    writeVarint64(bb, intToLong($Rate));
  }

  // required int64 FinishAmount = 4;
  let $FinishAmount = message.FinishAmount;
  if ($FinishAmount !== undefined) {
    writeVarint32(bb, 32);
    writeVarint64(bb, $FinishAmount);
  }

  // required int32 Status = 5;
  let $Status = message.Status;
  if ($Status !== undefined) {
    writeVarint32(bb, 40);
    writeVarint64(bb, intToLong($Status));
  }

  // required int64 SumAssignAmount = 6;
  let $SumAssignAmount = message.SumAssignAmount;
  if ($SumAssignAmount !== undefined) {
    writeVarint32(bb, 48);
    writeVarint64(bb, $SumAssignAmount);
  }
}

export function decodeFishVIPUserRewardDataList(binary: Uint8Array): FishVIPUserRewardDataList {
  return _decodeFishVIPUserRewardDataList(wrapByteBuffer(binary));
}

function _decodeFishVIPUserRewardDataList(bb: ByteBuffer): FishVIPUserRewardDataList {
  let message: FishVIPUserRewardDataList = {} as any;

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

      // required int64 AssignAmount = 2;
      case 2: {
        message.AssignAmount = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // required int32 Rate = 3;
      case 3: {
        message.Rate = readVarint32(bb);
        break;
      }

      // required int64 FinishAmount = 4;
      case 4: {
        message.FinishAmount = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // required int32 Status = 5;
      case 5: {
        message.Status = readVarint32(bb);
        break;
      }

      // required int64 SumAssignAmount = 6;
      case 6: {
        message.SumAssignAmount = readVarint64(bb, /* unsigned */ false);
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  if (message.UserID === undefined)
    throw new Error("Missing required field: UserID");

  if (message.AssignAmount === undefined)
    throw new Error("Missing required field: AssignAmount");

  if (message.Rate === undefined)
    throw new Error("Missing required field: Rate");

  if (message.FinishAmount === undefined)
    throw new Error("Missing required field: FinishAmount");

  if (message.Status === undefined)
    throw new Error("Missing required field: Status");

  if (message.SumAssignAmount === undefined)
    throw new Error("Missing required field: SumAssignAmount");

  return message;
}

export interface SuperToolFishUpdSystemRewardDetail {
  FlagID: number;
  FishRewardList?: SuperToolFishUpdSystemRewardDataList[];
}

export function encodeSuperToolFishUpdSystemRewardDetail(message: SuperToolFishUpdSystemRewardDetail): Uint8Array {
  let bb = popByteBuffer();
  _encodeSuperToolFishUpdSystemRewardDetail(message, bb);
  return toUint8Array(bb);
}

function _encodeSuperToolFishUpdSystemRewardDetail(message: SuperToolFishUpdSystemRewardDetail, bb: ByteBuffer): void {
  // required int32 FlagID = 1;
  let $FlagID = message.FlagID;
  if ($FlagID !== undefined) {
    writeVarint32(bb, 8);
    writeVarint64(bb, intToLong($FlagID));
  }

  // repeated SuperToolFishUpdSystemRewardDataList FishRewardList = 2;
  let array$FishRewardList = message.FishRewardList;
  if (array$FishRewardList !== undefined) {
    for (let value of array$FishRewardList) {
      writeVarint32(bb, 18);
      let nested = popByteBuffer();
      _encodeSuperToolFishUpdSystemRewardDataList(value, nested);
      writeVarint32(bb, nested.limit);
      writeByteBuffer(bb, nested);
      pushByteBuffer(nested);
    }
  }
}

export function decodeSuperToolFishUpdSystemRewardDetail(binary: Uint8Array): SuperToolFishUpdSystemRewardDetail {
  return _decodeSuperToolFishUpdSystemRewardDetail(wrapByteBuffer(binary));
}

function _decodeSuperToolFishUpdSystemRewardDetail(bb: ByteBuffer): SuperToolFishUpdSystemRewardDetail {
  let message: SuperToolFishUpdSystemRewardDetail = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // required int32 FlagID = 1;
      case 1: {
        message.FlagID = readVarint32(bb);
        break;
      }

      // repeated SuperToolFishUpdSystemRewardDataList FishRewardList = 2;
      case 2: {
        let limit = pushTemporaryLength(bb);
        let values = message.FishRewardList || (message.FishRewardList = []);
        values.push(_decodeSuperToolFishUpdSystemRewardDataList(bb));
        bb.limit = limit;
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  if (message.FlagID === undefined)
    throw new Error("Missing required field: FlagID");

  return message;
}

export interface SuperToolFishUpdSystemRewardDataList {
  FishID: number;
  FinishAmount: Long;
}

export function encodeSuperToolFishUpdSystemRewardDataList(message: SuperToolFishUpdSystemRewardDataList): Uint8Array {
  let bb = popByteBuffer();
  _encodeSuperToolFishUpdSystemRewardDataList(message, bb);
  return toUint8Array(bb);
}

function _encodeSuperToolFishUpdSystemRewardDataList(message: SuperToolFishUpdSystemRewardDataList, bb: ByteBuffer): void {
  // required int32 FishID = 1;
  let $FishID = message.FishID;
  if ($FishID !== undefined) {
    writeVarint32(bb, 8);
    writeVarint64(bb, intToLong($FishID));
  }

  // required int64 FinishAmount = 2;
  let $FinishAmount = message.FinishAmount;
  if ($FinishAmount !== undefined) {
    writeVarint32(bb, 16);
    writeVarint64(bb, $FinishAmount);
  }
}

export function decodeSuperToolFishUpdSystemRewardDataList(binary: Uint8Array): SuperToolFishUpdSystemRewardDataList {
  return _decodeSuperToolFishUpdSystemRewardDataList(wrapByteBuffer(binary));
}

function _decodeSuperToolFishUpdSystemRewardDataList(bb: ByteBuffer): SuperToolFishUpdSystemRewardDataList {
  let message: SuperToolFishUpdSystemRewardDataList = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // required int32 FishID = 1;
      case 1: {
        message.FishID = readVarint32(bb);
        break;
      }

      // required int64 FinishAmount = 2;
      case 2: {
        message.FinishAmount = readVarint64(bb, /* unsigned */ false);
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  if (message.FishID === undefined)
    throw new Error("Missing required field: FishID");

  if (message.FinishAmount === undefined)
    throw new Error("Missing required field: FinishAmount");

  return message;
}

export interface SuperToolfishUpdVIPUserRewardDetail {
  GameID: number;
  FishUserRewardList?: SuperToolFishUpdVIPUserRewardDataList[];
}

export function encodeSuperToolfishUpdVIPUserRewardDetail(message: SuperToolfishUpdVIPUserRewardDetail): Uint8Array {
  let bb = popByteBuffer();
  _encodeSuperToolfishUpdVIPUserRewardDetail(message, bb);
  return toUint8Array(bb);
}

function _encodeSuperToolfishUpdVIPUserRewardDetail(message: SuperToolfishUpdVIPUserRewardDetail, bb: ByteBuffer): void {
  // required int32 GameID = 1;
  let $GameID = message.GameID;
  if ($GameID !== undefined) {
    writeVarint32(bb, 8);
    writeVarint64(bb, intToLong($GameID));
  }

  // repeated SuperToolFishUpdVIPUserRewardDataList FishUserRewardList = 2;
  let array$FishUserRewardList = message.FishUserRewardList;
  if (array$FishUserRewardList !== undefined) {
    for (let value of array$FishUserRewardList) {
      writeVarint32(bb, 18);
      let nested = popByteBuffer();
      _encodeSuperToolFishUpdVIPUserRewardDataList(value, nested);
      writeVarint32(bb, nested.limit);
      writeByteBuffer(bb, nested);
      pushByteBuffer(nested);
    }
  }
}

export function decodeSuperToolfishUpdVIPUserRewardDetail(binary: Uint8Array): SuperToolfishUpdVIPUserRewardDetail {
  return _decodeSuperToolfishUpdVIPUserRewardDetail(wrapByteBuffer(binary));
}

function _decodeSuperToolfishUpdVIPUserRewardDetail(bb: ByteBuffer): SuperToolfishUpdVIPUserRewardDetail {
  let message: SuperToolfishUpdVIPUserRewardDetail = {} as any;

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

      // repeated SuperToolFishUpdVIPUserRewardDataList FishUserRewardList = 2;
      case 2: {
        let limit = pushTemporaryLength(bb);
        let values = message.FishUserRewardList || (message.FishUserRewardList = []);
        values.push(_decodeSuperToolFishUpdVIPUserRewardDataList(bb));
        bb.limit = limit;
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  if (message.GameID === undefined)
    throw new Error("Missing required field: GameID");

  return message;
}

export interface SuperToolFishUpdVIPUserRewardDataList {
  UserID: number;
  FinishAmount: Long;
}

export function encodeSuperToolFishUpdVIPUserRewardDataList(message: SuperToolFishUpdVIPUserRewardDataList): Uint8Array {
  let bb = popByteBuffer();
  _encodeSuperToolFishUpdVIPUserRewardDataList(message, bb);
  return toUint8Array(bb);
}

function _encodeSuperToolFishUpdVIPUserRewardDataList(message: SuperToolFishUpdVIPUserRewardDataList, bb: ByteBuffer): void {
  // required int32 UserID = 1;
  let $UserID = message.UserID;
  if ($UserID !== undefined) {
    writeVarint32(bb, 8);
    writeVarint64(bb, intToLong($UserID));
  }

  // required int64 FinishAmount = 2;
  let $FinishAmount = message.FinishAmount;
  if ($FinishAmount !== undefined) {
    writeVarint32(bb, 16);
    writeVarint64(bb, $FinishAmount);
  }
}

export function decodeSuperToolFishUpdVIPUserRewardDataList(binary: Uint8Array): SuperToolFishUpdVIPUserRewardDataList {
  return _decodeSuperToolFishUpdVIPUserRewardDataList(wrapByteBuffer(binary));
}

function _decodeSuperToolFishUpdVIPUserRewardDataList(bb: ByteBuffer): SuperToolFishUpdVIPUserRewardDataList {
  let message: SuperToolFishUpdVIPUserRewardDataList = {} as any;

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

      // required int64 FinishAmount = 2;
      case 2: {
        message.FinishAmount = readVarint64(bb, /* unsigned */ false);
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  if (message.UserID === undefined)
    throw new Error("Missing required field: UserID");

  if (message.FinishAmount === undefined)
    throw new Error("Missing required field: FinishAmount");

  return message;
}

export interface SuperToolZjhVipUserDataList {
  DataList?: SuperToolZjhVipUserData[];
}

export function encodeSuperToolZjhVipUserDataList(message: SuperToolZjhVipUserDataList): Uint8Array {
  let bb = popByteBuffer();
  _encodeSuperToolZjhVipUserDataList(message, bb);
  return toUint8Array(bb);
}

function _encodeSuperToolZjhVipUserDataList(message: SuperToolZjhVipUserDataList, bb: ByteBuffer): void {
  // repeated SuperToolZjhVipUserData DataList = 1;
  let array$DataList = message.DataList;
  if (array$DataList !== undefined) {
    for (let value of array$DataList) {
      writeVarint32(bb, 10);
      let nested = popByteBuffer();
      _encodeSuperToolZjhVipUserData(value, nested);
      writeVarint32(bb, nested.limit);
      writeByteBuffer(bb, nested);
      pushByteBuffer(nested);
    }
  }
}

export function decodeSuperToolZjhVipUserDataList(binary: Uint8Array): SuperToolZjhVipUserDataList {
  return _decodeSuperToolZjhVipUserDataList(wrapByteBuffer(binary));
}

function _decodeSuperToolZjhVipUserDataList(bb: ByteBuffer): SuperToolZjhVipUserDataList {
  let message: SuperToolZjhVipUserDataList = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // repeated SuperToolZjhVipUserData DataList = 1;
      case 1: {
        let limit = pushTemporaryLength(bb);
        let values = message.DataList || (message.DataList = []);
        values.push(_decodeSuperToolZjhVipUserData(bb));
        bb.limit = limit;
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface SuperToolZjhVipUserData {
  UserID: number;
  NextType: Long;
  NextWinLose: Long;
  NextWinLoseNum: Long;
  Finish: Long;
  FinishNextWinLoseNum: Long;
  NextTable: number;
  Status: number;
  TodaySumcharge: Long;
  TodaySumConvert: Long;
  TodayUserWinLose: Long;
}

export function encodeSuperToolZjhVipUserData(message: SuperToolZjhVipUserData): Uint8Array {
  let bb = popByteBuffer();
  _encodeSuperToolZjhVipUserData(message, bb);
  return toUint8Array(bb);
}

function _encodeSuperToolZjhVipUserData(message: SuperToolZjhVipUserData, bb: ByteBuffer): void {
  // required int32 UserID = 1;
  let $UserID = message.UserID;
  if ($UserID !== undefined) {
    writeVarint32(bb, 8);
    writeVarint64(bb, intToLong($UserID));
  }

  // required int64 NextType = 2;
  let $NextType = message.NextType;
  if ($NextType !== undefined) {
    writeVarint32(bb, 16);
    writeVarint64(bb, $NextType);
  }

  // required int64 NextWinLose = 3;
  let $NextWinLose = message.NextWinLose;
  if ($NextWinLose !== undefined) {
    writeVarint32(bb, 24);
    writeVarint64(bb, $NextWinLose);
  }

  // required int64 NextWinLoseNum = 4;
  let $NextWinLoseNum = message.NextWinLoseNum;
  if ($NextWinLoseNum !== undefined) {
    writeVarint32(bb, 32);
    writeVarint64(bb, $NextWinLoseNum);
  }

  // required int64 Finish = 5;
  let $Finish = message.Finish;
  if ($Finish !== undefined) {
    writeVarint32(bb, 40);
    writeVarint64(bb, $Finish);
  }

  // required int64 FinishNextWinLoseNum = 6;
  let $FinishNextWinLoseNum = message.FinishNextWinLoseNum;
  if ($FinishNextWinLoseNum !== undefined) {
    writeVarint32(bb, 48);
    writeVarint64(bb, $FinishNextWinLoseNum);
  }

  // required int32 NextTable = 7;
  let $NextTable = message.NextTable;
  if ($NextTable !== undefined) {
    writeVarint32(bb, 56);
    writeVarint64(bb, intToLong($NextTable));
  }

  // required int32 Status = 8;
  let $Status = message.Status;
  if ($Status !== undefined) {
    writeVarint32(bb, 64);
    writeVarint64(bb, intToLong($Status));
  }

  // required int64 TodaySumcharge = 9;
  let $TodaySumcharge = message.TodaySumcharge;
  if ($TodaySumcharge !== undefined) {
    writeVarint32(bb, 72);
    writeVarint64(bb, $TodaySumcharge);
  }

  // required int64 TodaySumConvert = 10;
  let $TodaySumConvert = message.TodaySumConvert;
  if ($TodaySumConvert !== undefined) {
    writeVarint32(bb, 80);
    writeVarint64(bb, $TodaySumConvert);
  }

  // required int64 TodayUserWinLose = 11;
  let $TodayUserWinLose = message.TodayUserWinLose;
  if ($TodayUserWinLose !== undefined) {
    writeVarint32(bb, 88);
    writeVarint64(bb, $TodayUserWinLose);
  }
}

export function decodeSuperToolZjhVipUserData(binary: Uint8Array): SuperToolZjhVipUserData {
  return _decodeSuperToolZjhVipUserData(wrapByteBuffer(binary));
}

function _decodeSuperToolZjhVipUserData(bb: ByteBuffer): SuperToolZjhVipUserData {
  let message: SuperToolZjhVipUserData = {} as any;

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

      // required int64 NextType = 2;
      case 2: {
        message.NextType = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // required int64 NextWinLose = 3;
      case 3: {
        message.NextWinLose = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // required int64 NextWinLoseNum = 4;
      case 4: {
        message.NextWinLoseNum = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // required int64 Finish = 5;
      case 5: {
        message.Finish = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // required int64 FinishNextWinLoseNum = 6;
      case 6: {
        message.FinishNextWinLoseNum = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // required int32 NextTable = 7;
      case 7: {
        message.NextTable = readVarint32(bb);
        break;
      }

      // required int32 Status = 8;
      case 8: {
        message.Status = readVarint32(bb);
        break;
      }

      // required int64 TodaySumcharge = 9;
      case 9: {
        message.TodaySumcharge = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // required int64 TodaySumConvert = 10;
      case 10: {
        message.TodaySumConvert = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // required int64 TodayUserWinLose = 11;
      case 11: {
        message.TodayUserWinLose = readVarint64(bb, /* unsigned */ false);
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  if (message.UserID === undefined)
    throw new Error("Missing required field: UserID");

  if (message.NextType === undefined)
    throw new Error("Missing required field: NextType");

  if (message.NextWinLose === undefined)
    throw new Error("Missing required field: NextWinLose");

  if (message.NextWinLoseNum === undefined)
    throw new Error("Missing required field: NextWinLoseNum");

  if (message.Finish === undefined)
    throw new Error("Missing required field: Finish");

  if (message.FinishNextWinLoseNum === undefined)
    throw new Error("Missing required field: FinishNextWinLoseNum");

  if (message.NextTable === undefined)
    throw new Error("Missing required field: NextTable");

  if (message.Status === undefined)
    throw new Error("Missing required field: Status");

  if (message.TodaySumcharge === undefined)
    throw new Error("Missing required field: TodaySumcharge");

  if (message.TodaySumConvert === undefined)
    throw new Error("Missing required field: TodaySumConvert");

  if (message.TodayUserWinLose === undefined)
    throw new Error("Missing required field: TodayUserWinLose");

  return message;
}

export interface SuperToolZjhUpdVipUserData {
  UserID: number;
  Finish?: Long;
  FinishNextWinLoseNum?: Long;
  NextTable?: number;
  NextType?: Long;
}

export function encodeSuperToolZjhUpdVipUserData(message: SuperToolZjhUpdVipUserData): Uint8Array {
  let bb = popByteBuffer();
  _encodeSuperToolZjhUpdVipUserData(message, bb);
  return toUint8Array(bb);
}

function _encodeSuperToolZjhUpdVipUserData(message: SuperToolZjhUpdVipUserData, bb: ByteBuffer): void {
  // required int32 UserID = 1;
  let $UserID = message.UserID;
  if ($UserID !== undefined) {
    writeVarint32(bb, 8);
    writeVarint64(bb, intToLong($UserID));
  }

  // optional int64 Finish = 2;
  let $Finish = message.Finish;
  if ($Finish !== undefined) {
    writeVarint32(bb, 16);
    writeVarint64(bb, $Finish);
  }

  // optional int64 FinishNextWinLoseNum = 3;
  let $FinishNextWinLoseNum = message.FinishNextWinLoseNum;
  if ($FinishNextWinLoseNum !== undefined) {
    writeVarint32(bb, 24);
    writeVarint64(bb, $FinishNextWinLoseNum);
  }

  // optional int32 NextTable = 4;
  let $NextTable = message.NextTable;
  if ($NextTable !== undefined) {
    writeVarint32(bb, 32);
    writeVarint64(bb, intToLong($NextTable));
  }

  // optional int64 NextType = 5;
  let $NextType = message.NextType;
  if ($NextType !== undefined) {
    writeVarint32(bb, 40);
    writeVarint64(bb, $NextType);
  }
}

export function decodeSuperToolZjhUpdVipUserData(binary: Uint8Array): SuperToolZjhUpdVipUserData {
  return _decodeSuperToolZjhUpdVipUserData(wrapByteBuffer(binary));
}

function _decodeSuperToolZjhUpdVipUserData(bb: ByteBuffer): SuperToolZjhUpdVipUserData {
  let message: SuperToolZjhUpdVipUserData = {} as any;

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

      // optional int64 Finish = 2;
      case 2: {
        message.Finish = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // optional int64 FinishNextWinLoseNum = 3;
      case 3: {
        message.FinishNextWinLoseNum = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // optional int32 NextTable = 4;
      case 4: {
        message.NextTable = readVarint32(bb);
        break;
      }

      // optional int64 NextType = 5;
      case 5: {
        message.NextType = readVarint64(bb, /* unsigned */ false);
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

export interface FishSysPoolData {
  FlagID: number;
  SumBetMoney: Long;
  SumBullet: Long;
  SysSumWinLoss: Long;
  AfterAdjustSyspoolWinLoss?: Long;
  PoolAmount?: Long;
}

export function encodeFishSysPoolData(message: FishSysPoolData): Uint8Array {
  let bb = popByteBuffer();
  _encodeFishSysPoolData(message, bb);
  return toUint8Array(bb);
}

function _encodeFishSysPoolData(message: FishSysPoolData, bb: ByteBuffer): void {
  // required int32 FlagID = 1;
  let $FlagID = message.FlagID;
  if ($FlagID !== undefined) {
    writeVarint32(bb, 8);
    writeVarint64(bb, intToLong($FlagID));
  }

  // required int64 SumBetMoney = 2;
  let $SumBetMoney = message.SumBetMoney;
  if ($SumBetMoney !== undefined) {
    writeVarint32(bb, 16);
    writeVarint64(bb, $SumBetMoney);
  }

  // required int64 SumBullet = 3;
  let $SumBullet = message.SumBullet;
  if ($SumBullet !== undefined) {
    writeVarint32(bb, 24);
    writeVarint64(bb, $SumBullet);
  }

  // required int64 SysSumWinLoss = 4;
  let $SysSumWinLoss = message.SysSumWinLoss;
  if ($SysSumWinLoss !== undefined) {
    writeVarint32(bb, 32);
    writeVarint64(bb, $SysSumWinLoss);
  }

  // optional int64 AfterAdjustSyspoolWinLoss = 5;
  let $AfterAdjustSyspoolWinLoss = message.AfterAdjustSyspoolWinLoss;
  if ($AfterAdjustSyspoolWinLoss !== undefined) {
    writeVarint32(bb, 40);
    writeVarint64(bb, $AfterAdjustSyspoolWinLoss);
  }

  // optional int64 PoolAmount = 6;
  let $PoolAmount = message.PoolAmount;
  if ($PoolAmount !== undefined) {
    writeVarint32(bb, 48);
    writeVarint64(bb, $PoolAmount);
  }
}

export function decodeFishSysPoolData(binary: Uint8Array): FishSysPoolData {
  return _decodeFishSysPoolData(wrapByteBuffer(binary));
}

function _decodeFishSysPoolData(bb: ByteBuffer): FishSysPoolData {
  let message: FishSysPoolData = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // required int32 FlagID = 1;
      case 1: {
        message.FlagID = readVarint32(bb);
        break;
      }

      // required int64 SumBetMoney = 2;
      case 2: {
        message.SumBetMoney = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // required int64 SumBullet = 3;
      case 3: {
        message.SumBullet = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // required int64 SysSumWinLoss = 4;
      case 4: {
        message.SysSumWinLoss = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // optional int64 AfterAdjustSyspoolWinLoss = 5;
      case 5: {
        message.AfterAdjustSyspoolWinLoss = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // optional int64 PoolAmount = 6;
      case 6: {
        message.PoolAmount = readVarint64(bb, /* unsigned */ false);
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  if (message.FlagID === undefined)
    throw new Error("Missing required field: FlagID");

  if (message.SumBetMoney === undefined)
    throw new Error("Missing required field: SumBetMoney");

  if (message.SumBullet === undefined)
    throw new Error("Missing required field: SumBullet");

  if (message.SysSumWinLoss === undefined)
    throw new Error("Missing required field: SysSumWinLoss");

  return message;
}

export interface FishPlayerPoolDetail {
  FlagID?: number;
  FishRewardList?: FishPlayerPoolDetailList[];
}

export function encodeFishPlayerPoolDetail(message: FishPlayerPoolDetail): Uint8Array {
  let bb = popByteBuffer();
  _encodeFishPlayerPoolDetail(message, bb);
  return toUint8Array(bb);
}

function _encodeFishPlayerPoolDetail(message: FishPlayerPoolDetail, bb: ByteBuffer): void {
  // optional int32 FlagID = 1;
  let $FlagID = message.FlagID;
  if ($FlagID !== undefined) {
    writeVarint32(bb, 8);
    writeVarint64(bb, intToLong($FlagID));
  }

  // repeated FishPlayerPoolDetailList FishRewardList = 2;
  let array$FishRewardList = message.FishRewardList;
  if (array$FishRewardList !== undefined) {
    for (let value of array$FishRewardList) {
      writeVarint32(bb, 18);
      let nested = popByteBuffer();
      _encodeFishPlayerPoolDetailList(value, nested);
      writeVarint32(bb, nested.limit);
      writeByteBuffer(bb, nested);
      pushByteBuffer(nested);
    }
  }
}

export function decodeFishPlayerPoolDetail(binary: Uint8Array): FishPlayerPoolDetail {
  return _decodeFishPlayerPoolDetail(wrapByteBuffer(binary));
}

function _decodeFishPlayerPoolDetail(bb: ByteBuffer): FishPlayerPoolDetail {
  let message: FishPlayerPoolDetail = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional int32 FlagID = 1;
      case 1: {
        message.FlagID = readVarint32(bb);
        break;
      }

      // repeated FishPlayerPoolDetailList FishRewardList = 2;
      case 2: {
        let limit = pushTemporaryLength(bb);
        let values = message.FishRewardList || (message.FishRewardList = []);
        values.push(_decodeFishPlayerPoolDetailList(bb));
        bb.limit = limit;
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface FishPlayerPoolDetailList {
  UserID: number;
  HitMoney: Long;
  SpendMoney: Long;
}

export function encodeFishPlayerPoolDetailList(message: FishPlayerPoolDetailList): Uint8Array {
  let bb = popByteBuffer();
  _encodeFishPlayerPoolDetailList(message, bb);
  return toUint8Array(bb);
}

function _encodeFishPlayerPoolDetailList(message: FishPlayerPoolDetailList, bb: ByteBuffer): void {
  // required int32 UserID = 1;
  let $UserID = message.UserID;
  if ($UserID !== undefined) {
    writeVarint32(bb, 8);
    writeVarint64(bb, intToLong($UserID));
  }

  // required int64 HitMoney = 2;
  let $HitMoney = message.HitMoney;
  if ($HitMoney !== undefined) {
    writeVarint32(bb, 16);
    writeVarint64(bb, $HitMoney);
  }

  // required int64 SpendMoney = 3;
  let $SpendMoney = message.SpendMoney;
  if ($SpendMoney !== undefined) {
    writeVarint32(bb, 24);
    writeVarint64(bb, $SpendMoney);
  }
}

export function decodeFishPlayerPoolDetailList(binary: Uint8Array): FishPlayerPoolDetailList {
  return _decodeFishPlayerPoolDetailList(wrapByteBuffer(binary));
}

function _decodeFishPlayerPoolDetailList(bb: ByteBuffer): FishPlayerPoolDetailList {
  let message: FishPlayerPoolDetailList = {} as any;

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

      // required int64 HitMoney = 2;
      case 2: {
        message.HitMoney = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // required int64 SpendMoney = 3;
      case 3: {
        message.SpendMoney = readVarint64(bb, /* unsigned */ false);
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  if (message.UserID === undefined)
    throw new Error("Missing required field: UserID");

  if (message.HitMoney === undefined)
    throw new Error("Missing required field: HitMoney");

  if (message.SpendMoney === undefined)
    throw new Error("Missing required field: SpendMoney");

  return message;
}

export interface FindFishBeginnerOfferByUserID {
  UserID: number;
  NewPlayerAdjustSyspool?: number;
}

export function encodeFindFishBeginnerOfferByUserID(message: FindFishBeginnerOfferByUserID): Uint8Array {
  let bb = popByteBuffer();
  _encodeFindFishBeginnerOfferByUserID(message, bb);
  return toUint8Array(bb);
}

function _encodeFindFishBeginnerOfferByUserID(message: FindFishBeginnerOfferByUserID, bb: ByteBuffer): void {
  // required int32 UserID = 1;
  let $UserID = message.UserID;
  if ($UserID !== undefined) {
    writeVarint32(bb, 8);
    writeVarint64(bb, intToLong($UserID));
  }

  // optional int32 NewPlayerAdjustSyspool = 2;
  let $NewPlayerAdjustSyspool = message.NewPlayerAdjustSyspool;
  if ($NewPlayerAdjustSyspool !== undefined) {
    writeVarint32(bb, 16);
    writeVarint64(bb, intToLong($NewPlayerAdjustSyspool));
  }
}

export function decodeFindFishBeginnerOfferByUserID(binary: Uint8Array): FindFishBeginnerOfferByUserID {
  return _decodeFindFishBeginnerOfferByUserID(wrapByteBuffer(binary));
}

function _decodeFindFishBeginnerOfferByUserID(bb: ByteBuffer): FindFishBeginnerOfferByUserID {
  let message: FindFishBeginnerOfferByUserID = {} as any;

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

      // optional int32 NewPlayerAdjustSyspool = 2;
      case 2: {
        message.NewPlayerAdjustSyspool = readVarint32(bb);
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

export interface FishBeginnerOfferDetail {
  NewPlayerList?: FishBeginnerOffer[];
  NewPlayerAdjustSyspool?: number;
}

export function encodeFishBeginnerOfferDetail(message: FishBeginnerOfferDetail): Uint8Array {
  let bb = popByteBuffer();
  _encodeFishBeginnerOfferDetail(message, bb);
  return toUint8Array(bb);
}

function _encodeFishBeginnerOfferDetail(message: FishBeginnerOfferDetail, bb: ByteBuffer): void {
  // repeated FishBeginnerOffer NewPlayerList = 1;
  let array$NewPlayerList = message.NewPlayerList;
  if (array$NewPlayerList !== undefined) {
    for (let value of array$NewPlayerList) {
      writeVarint32(bb, 10);
      let nested = popByteBuffer();
      _encodeFishBeginnerOffer(value, nested);
      writeVarint32(bb, nested.limit);
      writeByteBuffer(bb, nested);
      pushByteBuffer(nested);
    }
  }

  // optional int32 NewPlayerAdjustSyspool = 2;
  let $NewPlayerAdjustSyspool = message.NewPlayerAdjustSyspool;
  if ($NewPlayerAdjustSyspool !== undefined) {
    writeVarint32(bb, 16);
    writeVarint64(bb, intToLong($NewPlayerAdjustSyspool));
  }
}

export function decodeFishBeginnerOfferDetail(binary: Uint8Array): FishBeginnerOfferDetail {
  return _decodeFishBeginnerOfferDetail(wrapByteBuffer(binary));
}

function _decodeFishBeginnerOfferDetail(bb: ByteBuffer): FishBeginnerOfferDetail {
  let message: FishBeginnerOfferDetail = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // repeated FishBeginnerOffer NewPlayerList = 1;
      case 1: {
        let limit = pushTemporaryLength(bb);
        let values = message.NewPlayerList || (message.NewPlayerList = []);
        values.push(_decodeFishBeginnerOffer(bb));
        bb.limit = limit;
        break;
      }

      // optional int32 NewPlayerAdjustSyspool = 2;
      case 2: {
        message.NewPlayerAdjustSyspool = readVarint32(bb);
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface FishBeginnerOffer {
  UserID: number;
  Bullet: number;
  Score: number;
  Status: number;
}

export function encodeFishBeginnerOffer(message: FishBeginnerOffer): Uint8Array {
  let bb = popByteBuffer();
  _encodeFishBeginnerOffer(message, bb);
  return toUint8Array(bb);
}

function _encodeFishBeginnerOffer(message: FishBeginnerOffer, bb: ByteBuffer): void {
  // required int32 UserID = 1;
  let $UserID = message.UserID;
  if ($UserID !== undefined) {
    writeVarint32(bb, 8);
    writeVarint64(bb, intToLong($UserID));
  }

  // required int32 Bullet = 2;
  let $Bullet = message.Bullet;
  if ($Bullet !== undefined) {
    writeVarint32(bb, 16);
    writeVarint64(bb, intToLong($Bullet));
  }

  // required int32 Score = 3;
  let $Score = message.Score;
  if ($Score !== undefined) {
    writeVarint32(bb, 24);
    writeVarint64(bb, intToLong($Score));
  }

  // required int32 Status = 4;
  let $Status = message.Status;
  if ($Status !== undefined) {
    writeVarint32(bb, 32);
    writeVarint64(bb, intToLong($Status));
  }
}

export function decodeFishBeginnerOffer(binary: Uint8Array): FishBeginnerOffer {
  return _decodeFishBeginnerOffer(wrapByteBuffer(binary));
}

function _decodeFishBeginnerOffer(bb: ByteBuffer): FishBeginnerOffer {
  let message: FishBeginnerOffer = {} as any;

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

      // required int32 Bullet = 2;
      case 2: {
        message.Bullet = readVarint32(bb);
        break;
      }

      // required int32 Score = 3;
      case 3: {
        message.Score = readVarint32(bb);
        break;
      }

      // required int32 Status = 4;
      case 4: {
        message.Status = readVarint32(bb);
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  if (message.UserID === undefined)
    throw new Error("Missing required field: UserID");

  if (message.Bullet === undefined)
    throw new Error("Missing required field: Bullet");

  if (message.Score === undefined)
    throw new Error("Missing required field: Score");

  if (message.Status === undefined)
    throw new Error("Missing required field: Status");

  return message;
}

export interface Cd21SysPoolData {
  FlagID: number;
  SumBetMoney: Long;
  SumBetCount: Long;
  PoolAmount: Long;
}

export function encodeCd21SysPoolData(message: Cd21SysPoolData): Uint8Array {
  let bb = popByteBuffer();
  _encodeCd21SysPoolData(message, bb);
  return toUint8Array(bb);
}

function _encodeCd21SysPoolData(message: Cd21SysPoolData, bb: ByteBuffer): void {
  // required int32 FlagID = 1;
  let $FlagID = message.FlagID;
  if ($FlagID !== undefined) {
    writeVarint32(bb, 8);
    writeVarint64(bb, intToLong($FlagID));
  }

  // required int64 SumBetMoney = 2;
  let $SumBetMoney = message.SumBetMoney;
  if ($SumBetMoney !== undefined) {
    writeVarint32(bb, 16);
    writeVarint64(bb, $SumBetMoney);
  }

  // required int64 SumBetCount = 3;
  let $SumBetCount = message.SumBetCount;
  if ($SumBetCount !== undefined) {
    writeVarint32(bb, 24);
    writeVarint64(bb, $SumBetCount);
  }

  // required int64 PoolAmount = 4;
  let $PoolAmount = message.PoolAmount;
  if ($PoolAmount !== undefined) {
    writeVarint32(bb, 32);
    writeVarint64(bb, $PoolAmount);
  }
}

export function decodeCd21SysPoolData(binary: Uint8Array): Cd21SysPoolData {
  return _decodeCd21SysPoolData(wrapByteBuffer(binary));
}

function _decodeCd21SysPoolData(bb: ByteBuffer): Cd21SysPoolData {
  let message: Cd21SysPoolData = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // required int32 FlagID = 1;
      case 1: {
        message.FlagID = readVarint32(bb);
        break;
      }

      // required int64 SumBetMoney = 2;
      case 2: {
        message.SumBetMoney = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // required int64 SumBetCount = 3;
      case 3: {
        message.SumBetCount = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // required int64 PoolAmount = 4;
      case 4: {
        message.PoolAmount = readVarint64(bb, /* unsigned */ false);
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  if (message.FlagID === undefined)
    throw new Error("Missing required field: FlagID");

  if (message.SumBetMoney === undefined)
    throw new Error("Missing required field: SumBetMoney");

  if (message.SumBetCount === undefined)
    throw new Error("Missing required field: SumBetCount");

  if (message.PoolAmount === undefined)
    throw new Error("Missing required field: PoolAmount");

  return message;
}

export interface UserJackpotToBox {
  UserID: number;
  UpdateAmount: Long;
}

export function encodeUserJackpotToBox(message: UserJackpotToBox): Uint8Array {
  let bb = popByteBuffer();
  _encodeUserJackpotToBox(message, bb);
  return toUint8Array(bb);
}

function _encodeUserJackpotToBox(message: UserJackpotToBox, bb: ByteBuffer): void {
  // required int32 UserID = 1;
  let $UserID = message.UserID;
  if ($UserID !== undefined) {
    writeVarint32(bb, 8);
    writeVarint64(bb, intToLong($UserID));
  }

  // required int64 UpdateAmount = 2;
  let $UpdateAmount = message.UpdateAmount;
  if ($UpdateAmount !== undefined) {
    writeVarint32(bb, 16);
    writeVarint64(bb, $UpdateAmount);
  }
}

export function decodeUserJackpotToBox(binary: Uint8Array): UserJackpotToBox {
  return _decodeUserJackpotToBox(wrapByteBuffer(binary));
}

function _decodeUserJackpotToBox(bb: ByteBuffer): UserJackpotToBox {
  let message: UserJackpotToBox = {} as any;

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

      // required int64 UpdateAmount = 2;
      case 2: {
        message.UpdateAmount = readVarint64(bb, /* unsigned */ false);
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  if (message.UserID === undefined)
    throw new Error("Missing required field: UserID");

  if (message.UpdateAmount === undefined)
    throw new Error("Missing required field: UpdateAmount");

  return message;
}

export interface JackpotData {
  GameID: number;
  FlagID: number;
  TableNo: number;
  Contribution: Long;
  TotalContribution: Long;
  AwardTotal: Long;
  Level: number;
  JackpotPool: Long;
}

export function encodeJackpotData(message: JackpotData): Uint8Array {
  let bb = popByteBuffer();
  _encodeJackpotData(message, bb);
  return toUint8Array(bb);
}

function _encodeJackpotData(message: JackpotData, bb: ByteBuffer): void {
  // required int32 GameID = 1;
  let $GameID = message.GameID;
  if ($GameID !== undefined) {
    writeVarint32(bb, 8);
    writeVarint64(bb, intToLong($GameID));
  }

  // required int32 FlagID = 2;
  let $FlagID = message.FlagID;
  if ($FlagID !== undefined) {
    writeVarint32(bb, 16);
    writeVarint64(bb, intToLong($FlagID));
  }

  // required int32 TableNo = 3;
  let $TableNo = message.TableNo;
  if ($TableNo !== undefined) {
    writeVarint32(bb, 24);
    writeVarint64(bb, intToLong($TableNo));
  }

  // required int64 Contribution = 4;
  let $Contribution = message.Contribution;
  if ($Contribution !== undefined) {
    writeVarint32(bb, 32);
    writeVarint64(bb, $Contribution);
  }

  // required int64 TotalContribution = 5;
  let $TotalContribution = message.TotalContribution;
  if ($TotalContribution !== undefined) {
    writeVarint32(bb, 40);
    writeVarint64(bb, $TotalContribution);
  }

  // required int64 AwardTotal = 6;
  let $AwardTotal = message.AwardTotal;
  if ($AwardTotal !== undefined) {
    writeVarint32(bb, 48);
    writeVarint64(bb, $AwardTotal);
  }

  // required int32 Level = 7;
  let $Level = message.Level;
  if ($Level !== undefined) {
    writeVarint32(bb, 56);
    writeVarint64(bb, intToLong($Level));
  }

  // required int64 JackpotPool = 8;
  let $JackpotPool = message.JackpotPool;
  if ($JackpotPool !== undefined) {
    writeVarint32(bb, 64);
    writeVarint64(bb, $JackpotPool);
  }
}

export function decodeJackpotData(binary: Uint8Array): JackpotData {
  return _decodeJackpotData(wrapByteBuffer(binary));
}

function _decodeJackpotData(bb: ByteBuffer): JackpotData {
  let message: JackpotData = {} as any;

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

      // required int32 FlagID = 2;
      case 2: {
        message.FlagID = readVarint32(bb);
        break;
      }

      // required int32 TableNo = 3;
      case 3: {
        message.TableNo = readVarint32(bb);
        break;
      }

      // required int64 Contribution = 4;
      case 4: {
        message.Contribution = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // required int64 TotalContribution = 5;
      case 5: {
        message.TotalContribution = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // required int64 AwardTotal = 6;
      case 6: {
        message.AwardTotal = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // required int32 Level = 7;
      case 7: {
        message.Level = readVarint32(bb);
        break;
      }

      // required int64 JackpotPool = 8;
      case 8: {
        message.JackpotPool = readVarint64(bb, /* unsigned */ false);
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  if (message.GameID === undefined)
    throw new Error("Missing required field: GameID");

  if (message.FlagID === undefined)
    throw new Error("Missing required field: FlagID");

  if (message.TableNo === undefined)
    throw new Error("Missing required field: TableNo");

  if (message.Contribution === undefined)
    throw new Error("Missing required field: Contribution");

  if (message.TotalContribution === undefined)
    throw new Error("Missing required field: TotalContribution");

  if (message.AwardTotal === undefined)
    throw new Error("Missing required field: AwardTotal");

  if (message.Level === undefined)
    throw new Error("Missing required field: Level");

  if (message.JackpotPool === undefined)
    throw new Error("Missing required field: JackpotPool");

  return message;
}

export interface JackpotAllData {
  AllData?: JackpotData[];
}

export function encodeJackpotAllData(message: JackpotAllData): Uint8Array {
  let bb = popByteBuffer();
  _encodeJackpotAllData(message, bb);
  return toUint8Array(bb);
}

function _encodeJackpotAllData(message: JackpotAllData, bb: ByteBuffer): void {
  // repeated JackpotData AllData = 1;
  let array$AllData = message.AllData;
  if (array$AllData !== undefined) {
    for (let value of array$AllData) {
      writeVarint32(bb, 10);
      let nested = popByteBuffer();
      _encodeJackpotData(value, nested);
      writeVarint32(bb, nested.limit);
      writeByteBuffer(bb, nested);
      pushByteBuffer(nested);
    }
  }
}

export function decodeJackpotAllData(binary: Uint8Array): JackpotAllData {
  return _decodeJackpotAllData(wrapByteBuffer(binary));
}

function _decodeJackpotAllData(bb: ByteBuffer): JackpotAllData {
  let message: JackpotAllData = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // repeated JackpotData AllData = 1;
      case 1: {
        let limit = pushTemporaryLength(bb);
        let values = message.AllData || (message.AllData = []);
        values.push(_decodeJackpotData(bb));
        bb.limit = limit;
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface SuperTool_Msg_GetSysPoolWinLose {
  GameID: number;
  FlagID: number;
}

export function encodeSuperTool_Msg_GetSysPoolWinLose(message: SuperTool_Msg_GetSysPoolWinLose): Uint8Array {
  let bb = popByteBuffer();
  _encodeSuperTool_Msg_GetSysPoolWinLose(message, bb);
  return toUint8Array(bb);
}

function _encodeSuperTool_Msg_GetSysPoolWinLose(message: SuperTool_Msg_GetSysPoolWinLose, bb: ByteBuffer): void {
  // required int32 GameID = 1;
  let $GameID = message.GameID;
  if ($GameID !== undefined) {
    writeVarint32(bb, 8);
    writeVarint64(bb, intToLong($GameID));
  }

  // required int32 FlagID = 2;
  let $FlagID = message.FlagID;
  if ($FlagID !== undefined) {
    writeVarint32(bb, 16);
    writeVarint64(bb, intToLong($FlagID));
  }
}

export function decodeSuperTool_Msg_GetSysPoolWinLose(binary: Uint8Array): SuperTool_Msg_GetSysPoolWinLose {
  return _decodeSuperTool_Msg_GetSysPoolWinLose(wrapByteBuffer(binary));
}

function _decodeSuperTool_Msg_GetSysPoolWinLose(bb: ByteBuffer): SuperTool_Msg_GetSysPoolWinLose {
  let message: SuperTool_Msg_GetSysPoolWinLose = {} as any;

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

      // required int32 FlagID = 2;
      case 2: {
        message.FlagID = readVarint32(bb);
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  if (message.GameID === undefined)
    throw new Error("Missing required field: GameID");

  if (message.FlagID === undefined)
    throw new Error("Missing required field: FlagID");

  return message;
}

export interface SuperTool_Msg_GetSysPoolWinLoseRet {
  GameID: number;
  FlagID: number;
  PoolAmount: Long;
  WinLine: Long;
  WinLoseData: string;
}

export function encodeSuperTool_Msg_GetSysPoolWinLoseRet(message: SuperTool_Msg_GetSysPoolWinLoseRet): Uint8Array {
  let bb = popByteBuffer();
  _encodeSuperTool_Msg_GetSysPoolWinLoseRet(message, bb);
  return toUint8Array(bb);
}

function _encodeSuperTool_Msg_GetSysPoolWinLoseRet(message: SuperTool_Msg_GetSysPoolWinLoseRet, bb: ByteBuffer): void {
  // required int32 GameID = 1;
  let $GameID = message.GameID;
  if ($GameID !== undefined) {
    writeVarint32(bb, 8);
    writeVarint64(bb, intToLong($GameID));
  }

  // required int32 FlagID = 2;
  let $FlagID = message.FlagID;
  if ($FlagID !== undefined) {
    writeVarint32(bb, 16);
    writeVarint64(bb, intToLong($FlagID));
  }

  // required int64 PoolAmount = 3;
  let $PoolAmount = message.PoolAmount;
  if ($PoolAmount !== undefined) {
    writeVarint32(bb, 24);
    writeVarint64(bb, $PoolAmount);
  }

  // required int64 WinLine = 4;
  let $WinLine = message.WinLine;
  if ($WinLine !== undefined) {
    writeVarint32(bb, 32);
    writeVarint64(bb, $WinLine);
  }

  // required string WinLoseData = 5;
  let $WinLoseData = message.WinLoseData;
  if ($WinLoseData !== undefined) {
    writeVarint32(bb, 42);
    writeString(bb, $WinLoseData);
  }
}

export function decodeSuperTool_Msg_GetSysPoolWinLoseRet(binary: Uint8Array): SuperTool_Msg_GetSysPoolWinLoseRet {
  return _decodeSuperTool_Msg_GetSysPoolWinLoseRet(wrapByteBuffer(binary));
}

function _decodeSuperTool_Msg_GetSysPoolWinLoseRet(bb: ByteBuffer): SuperTool_Msg_GetSysPoolWinLoseRet {
  let message: SuperTool_Msg_GetSysPoolWinLoseRet = {} as any;

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

      // required int32 FlagID = 2;
      case 2: {
        message.FlagID = readVarint32(bb);
        break;
      }

      // required int64 PoolAmount = 3;
      case 3: {
        message.PoolAmount = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // required int64 WinLine = 4;
      case 4: {
        message.WinLine = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // required string WinLoseData = 5;
      case 5: {
        message.WinLoseData = readString(bb, readVarint32(bb));
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  if (message.GameID === undefined)
    throw new Error("Missing required field: GameID");

  if (message.FlagID === undefined)
    throw new Error("Missing required field: FlagID");

  if (message.PoolAmount === undefined)
    throw new Error("Missing required field: PoolAmount");

  if (message.WinLine === undefined)
    throw new Error("Missing required field: WinLine");

  if (message.WinLoseData === undefined)
    throw new Error("Missing required field: WinLoseData");

  return message;
}

export interface SuperTool_Msg_UpdateSysPoolWinLose {
  GameID: number;
  FlagID: number;
  PoolAmount: Long;
  WinLine: Long;
  WinLoseData: string;
  UpdatePoolAmount: Long;
}

export function encodeSuperTool_Msg_UpdateSysPoolWinLose(message: SuperTool_Msg_UpdateSysPoolWinLose): Uint8Array {
  let bb = popByteBuffer();
  _encodeSuperTool_Msg_UpdateSysPoolWinLose(message, bb);
  return toUint8Array(bb);
}

function _encodeSuperTool_Msg_UpdateSysPoolWinLose(message: SuperTool_Msg_UpdateSysPoolWinLose, bb: ByteBuffer): void {
  // required int32 GameID = 1;
  let $GameID = message.GameID;
  if ($GameID !== undefined) {
    writeVarint32(bb, 8);
    writeVarint64(bb, intToLong($GameID));
  }

  // required int32 FlagID = 2;
  let $FlagID = message.FlagID;
  if ($FlagID !== undefined) {
    writeVarint32(bb, 16);
    writeVarint64(bb, intToLong($FlagID));
  }

  // required int64 PoolAmount = 3;
  let $PoolAmount = message.PoolAmount;
  if ($PoolAmount !== undefined) {
    writeVarint32(bb, 24);
    writeVarint64(bb, $PoolAmount);
  }

  // required int64 WinLine = 4;
  let $WinLine = message.WinLine;
  if ($WinLine !== undefined) {
    writeVarint32(bb, 32);
    writeVarint64(bb, $WinLine);
  }

  // required string WinLoseData = 5;
  let $WinLoseData = message.WinLoseData;
  if ($WinLoseData !== undefined) {
    writeVarint32(bb, 42);
    writeString(bb, $WinLoseData);
  }

  // required int64 UpdatePoolAmount = 6;
  let $UpdatePoolAmount = message.UpdatePoolAmount;
  if ($UpdatePoolAmount !== undefined) {
    writeVarint32(bb, 48);
    writeVarint64(bb, $UpdatePoolAmount);
  }
}

export function decodeSuperTool_Msg_UpdateSysPoolWinLose(binary: Uint8Array): SuperTool_Msg_UpdateSysPoolWinLose {
  return _decodeSuperTool_Msg_UpdateSysPoolWinLose(wrapByteBuffer(binary));
}

function _decodeSuperTool_Msg_UpdateSysPoolWinLose(bb: ByteBuffer): SuperTool_Msg_UpdateSysPoolWinLose {
  let message: SuperTool_Msg_UpdateSysPoolWinLose = {} as any;

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

      // required int32 FlagID = 2;
      case 2: {
        message.FlagID = readVarint32(bb);
        break;
      }

      // required int64 PoolAmount = 3;
      case 3: {
        message.PoolAmount = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // required int64 WinLine = 4;
      case 4: {
        message.WinLine = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // required string WinLoseData = 5;
      case 5: {
        message.WinLoseData = readString(bb, readVarint32(bb));
        break;
      }

      // required int64 UpdatePoolAmount = 6;
      case 6: {
        message.UpdatePoolAmount = readVarint64(bb, /* unsigned */ false);
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  if (message.GameID === undefined)
    throw new Error("Missing required field: GameID");

  if (message.FlagID === undefined)
    throw new Error("Missing required field: FlagID");

  if (message.PoolAmount === undefined)
    throw new Error("Missing required field: PoolAmount");

  if (message.WinLine === undefined)
    throw new Error("Missing required field: WinLine");

  if (message.WinLoseData === undefined)
    throw new Error("Missing required field: WinLoseData");

  if (message.UpdatePoolAmount === undefined)
    throw new Error("Missing required field: UpdatePoolAmount");

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
