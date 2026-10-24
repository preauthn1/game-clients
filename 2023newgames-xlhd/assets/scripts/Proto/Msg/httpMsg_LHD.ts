
export interface Http_LHD_GameInfo {
  TableList?: Http_LHD_TableList[];
}

export function encodeHttp_LHD_GameInfo(message: Http_LHD_GameInfo): Uint8Array {
  let bb = popByteBuffer();
  _encodeHttp_LHD_GameInfo(message, bb);
  return toUint8Array(bb);
}

function _encodeHttp_LHD_GameInfo(message: Http_LHD_GameInfo, bb: ByteBuffer): void {
  // repeated Http_LHD_TableList TableList = 1;
  let array$TableList = message.TableList;
  if (array$TableList !== undefined) {
    for (let value of array$TableList) {
      writeVarint32(bb, 10);
      let nested = popByteBuffer();
      _encodeHttp_LHD_TableList(value, nested);
      writeVarint32(bb, nested.limit);
      writeByteBuffer(bb, nested);
      pushByteBuffer(nested);
    }
  }
}

export function decodeHttp_LHD_GameInfo(binary: Uint8Array): Http_LHD_GameInfo {
  return _decodeHttp_LHD_GameInfo(wrapByteBuffer(binary));
}

function _decodeHttp_LHD_GameInfo(bb: ByteBuffer): Http_LHD_GameInfo {
  let message: Http_LHD_GameInfo = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // repeated Http_LHD_TableList TableList = 1;
      case 1: {
        let limit = pushTemporaryLength(bb);
        let values = message.TableList || (message.TableList = []);
        values.push(_decodeHttp_LHD_TableList(bb));
        bb.limit = limit;
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface Http_LHD_TableList {
  TableNo: number;
  Status: number;
  GameUserCount: number;
  RobotCount: number;
  SumEarnAmount: Long;
  LastEarnAmount: number;
  PoolCurrentAmount: Long;
  SysTaxIncome: Long;
}

export function encodeHttp_LHD_TableList(message: Http_LHD_TableList): Uint8Array {
  let bb = popByteBuffer();
  _encodeHttp_LHD_TableList(message, bb);
  return toUint8Array(bb);
}

function _encodeHttp_LHD_TableList(message: Http_LHD_TableList, bb: ByteBuffer): void {
  // required int32 TableNo = 1;
  let $TableNo = message.TableNo;
  if ($TableNo !== undefined) {
    writeVarint32(bb, 8);
    writeVarint64(bb, intToLong($TableNo));
  }

  // required int32 Status = 2;
  let $Status = message.Status;
  if ($Status !== undefined) {
    writeVarint32(bb, 16);
    writeVarint64(bb, intToLong($Status));
  }

  // required int32 GameUserCount = 3;
  let $GameUserCount = message.GameUserCount;
  if ($GameUserCount !== undefined) {
    writeVarint32(bb, 24);
    writeVarint64(bb, intToLong($GameUserCount));
  }

  // required int32 RobotCount = 4;
  let $RobotCount = message.RobotCount;
  if ($RobotCount !== undefined) {
    writeVarint32(bb, 32);
    writeVarint64(bb, intToLong($RobotCount));
  }

  // required int64 SumEarnAmount = 5;
  let $SumEarnAmount = message.SumEarnAmount;
  if ($SumEarnAmount !== undefined) {
    writeVarint32(bb, 40);
    writeVarint64(bb, $SumEarnAmount);
  }

  // required int32 LastEarnAmount = 6;
  let $LastEarnAmount = message.LastEarnAmount;
  if ($LastEarnAmount !== undefined) {
    writeVarint32(bb, 48);
    writeVarint64(bb, intToLong($LastEarnAmount));
  }

  // required int64 PoolCurrentAmount = 7;
  let $PoolCurrentAmount = message.PoolCurrentAmount;
  if ($PoolCurrentAmount !== undefined) {
    writeVarint32(bb, 56);
    writeVarint64(bb, $PoolCurrentAmount);
  }

  // required int64 SysTaxIncome = 8;
  let $SysTaxIncome = message.SysTaxIncome;
  if ($SysTaxIncome !== undefined) {
    writeVarint32(bb, 64);
    writeVarint64(bb, $SysTaxIncome);
  }
}

export function decodeHttp_LHD_TableList(binary: Uint8Array): Http_LHD_TableList {
  return _decodeHttp_LHD_TableList(wrapByteBuffer(binary));
}

function _decodeHttp_LHD_TableList(bb: ByteBuffer): Http_LHD_TableList {
  let message: Http_LHD_TableList = {} as any;

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

      // required int32 Status = 2;
      case 2: {
        message.Status = readVarint32(bb);
        break;
      }

      // required int32 GameUserCount = 3;
      case 3: {
        message.GameUserCount = readVarint32(bb);
        break;
      }

      // required int32 RobotCount = 4;
      case 4: {
        message.RobotCount = readVarint32(bb);
        break;
      }

      // required int64 SumEarnAmount = 5;
      case 5: {
        message.SumEarnAmount = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // required int32 LastEarnAmount = 6;
      case 6: {
        message.LastEarnAmount = readVarint32(bb);
        break;
      }

      // required int64 PoolCurrentAmount = 7;
      case 7: {
        message.PoolCurrentAmount = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // required int64 SysTaxIncome = 8;
      case 8: {
        message.SysTaxIncome = readVarint64(bb, /* unsigned */ false);
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  if (message.TableNo === undefined)
    throw new Error("Missing required field: TableNo");

  if (message.Status === undefined)
    throw new Error("Missing required field: Status");

  if (message.GameUserCount === undefined)
    throw new Error("Missing required field: GameUserCount");

  if (message.RobotCount === undefined)
    throw new Error("Missing required field: RobotCount");

  if (message.SumEarnAmount === undefined)
    throw new Error("Missing required field: SumEarnAmount");

  if (message.LastEarnAmount === undefined)
    throw new Error("Missing required field: LastEarnAmount");

  if (message.PoolCurrentAmount === undefined)
    throw new Error("Missing required field: PoolCurrentAmount");

  if (message.SysTaxIncome === undefined)
    throw new Error("Missing required field: SysTaxIncome");

  return message;
}

export interface Http_LHD_TableDetail {
  TableNo: number;
  Status: number;
  SumEarnAmount: Long;
  LastEarnAmount: number;
  PoolCurrentAmount: Long;
  GameUserCount: number;
  RobotCount: number;
  PopWaterRate: number;
  ZhuangType: number;
  ZhuangNickName: string;
  ZhuangUserID: number;
  ZhuangSurplusTotal: number;
  ZhuangCurrentMoneyAmount: Long;
  ZhuangInitMoneyAmount: Long;
  OpenResultDragon: Long;
  OpenResultTiger: Long;
  OpenResultDraw: Long;
  CurentOpenResult: string;
  CurentOpenResultEarn: Long;
  UserInfo?: Http_LHD_UserInfo[];
  SysTaxIncome: Long;
  BetTime: number;
  WinLine: Long;
  RobotBetAmount: Long;
  LastGameUserBet?: Http_LHD_UserInfo[];
  DragonWinRate: number;
  DrawWinRate: number;
  TigerWinRate: number;
  FanFengTarget: Long;
  FanFengComplete: Long;
}

export function encodeHttp_LHD_TableDetail(message: Http_LHD_TableDetail): Uint8Array {
  let bb = popByteBuffer();
  _encodeHttp_LHD_TableDetail(message, bb);
  return toUint8Array(bb);
}

function _encodeHttp_LHD_TableDetail(message: Http_LHD_TableDetail, bb: ByteBuffer): void {
  // required int32 TableNo = 1;
  let $TableNo = message.TableNo;
  if ($TableNo !== undefined) {
    writeVarint32(bb, 8);
    writeVarint64(bb, intToLong($TableNo));
  }

  // required int32 Status = 2;
  let $Status = message.Status;
  if ($Status !== undefined) {
    writeVarint32(bb, 16);
    writeVarint64(bb, intToLong($Status));
  }

  // required int64 SumEarnAmount = 3;
  let $SumEarnAmount = message.SumEarnAmount;
  if ($SumEarnAmount !== undefined) {
    writeVarint32(bb, 24);
    writeVarint64(bb, $SumEarnAmount);
  }

  // required int32 LastEarnAmount = 4;
  let $LastEarnAmount = message.LastEarnAmount;
  if ($LastEarnAmount !== undefined) {
    writeVarint32(bb, 32);
    writeVarint64(bb, intToLong($LastEarnAmount));
  }

  // required int64 PoolCurrentAmount = 5;
  let $PoolCurrentAmount = message.PoolCurrentAmount;
  if ($PoolCurrentAmount !== undefined) {
    writeVarint32(bb, 40);
    writeVarint64(bb, $PoolCurrentAmount);
  }

  // required int32 GameUserCount = 6;
  let $GameUserCount = message.GameUserCount;
  if ($GameUserCount !== undefined) {
    writeVarint32(bb, 48);
    writeVarint64(bb, intToLong($GameUserCount));
  }

  // required int32 RobotCount = 7;
  let $RobotCount = message.RobotCount;
  if ($RobotCount !== undefined) {
    writeVarint32(bb, 56);
    writeVarint64(bb, intToLong($RobotCount));
  }

  // required int32 PopWaterRate = 8;
  let $PopWaterRate = message.PopWaterRate;
  if ($PopWaterRate !== undefined) {
    writeVarint32(bb, 64);
    writeVarint64(bb, intToLong($PopWaterRate));
  }

  // required int32 ZhuangType = 9;
  let $ZhuangType = message.ZhuangType;
  if ($ZhuangType !== undefined) {
    writeVarint32(bb, 72);
    writeVarint64(bb, intToLong($ZhuangType));
  }

  // required string ZhuangNickName = 10;
  let $ZhuangNickName = message.ZhuangNickName;
  if ($ZhuangNickName !== undefined) {
    writeVarint32(bb, 82);
    writeString(bb, $ZhuangNickName);
  }

  // required int32 ZhuangUserID = 11;
  let $ZhuangUserID = message.ZhuangUserID;
  if ($ZhuangUserID !== undefined) {
    writeVarint32(bb, 88);
    writeVarint64(bb, intToLong($ZhuangUserID));
  }

  // required int32 ZhuangSurplusTotal = 12;
  let $ZhuangSurplusTotal = message.ZhuangSurplusTotal;
  if ($ZhuangSurplusTotal !== undefined) {
    writeVarint32(bb, 96);
    writeVarint64(bb, intToLong($ZhuangSurplusTotal));
  }

  // required int64 ZhuangCurrentMoneyAmount = 13;
  let $ZhuangCurrentMoneyAmount = message.ZhuangCurrentMoneyAmount;
  if ($ZhuangCurrentMoneyAmount !== undefined) {
    writeVarint32(bb, 104);
    writeVarint64(bb, $ZhuangCurrentMoneyAmount);
  }

  // required int64 ZhuangInitMoneyAmount = 14;
  let $ZhuangInitMoneyAmount = message.ZhuangInitMoneyAmount;
  if ($ZhuangInitMoneyAmount !== undefined) {
    writeVarint32(bb, 112);
    writeVarint64(bb, $ZhuangInitMoneyAmount);
  }

  // required int64 OpenResultDragon = 15;
  let $OpenResultDragon = message.OpenResultDragon;
  if ($OpenResultDragon !== undefined) {
    writeVarint32(bb, 120);
    writeVarint64(bb, $OpenResultDragon);
  }

  // required int64 OpenResultTiger = 16;
  let $OpenResultTiger = message.OpenResultTiger;
  if ($OpenResultTiger !== undefined) {
    writeVarint32(bb, 128);
    writeVarint64(bb, $OpenResultTiger);
  }

  // required int64 OpenResultDraw = 17;
  let $OpenResultDraw = message.OpenResultDraw;
  if ($OpenResultDraw !== undefined) {
    writeVarint32(bb, 136);
    writeVarint64(bb, $OpenResultDraw);
  }

  // required string CurentOpenResult = 18;
  let $CurentOpenResult = message.CurentOpenResult;
  if ($CurentOpenResult !== undefined) {
    writeVarint32(bb, 146);
    writeString(bb, $CurentOpenResult);
  }

  // required int64 CurentOpenResultEarn = 19;
  let $CurentOpenResultEarn = message.CurentOpenResultEarn;
  if ($CurentOpenResultEarn !== undefined) {
    writeVarint32(bb, 152);
    writeVarint64(bb, $CurentOpenResultEarn);
  }

  // repeated Http_LHD_UserInfo UserInfo = 20;
  let array$UserInfo = message.UserInfo;
  if (array$UserInfo !== undefined) {
    for (let value of array$UserInfo) {
      writeVarint32(bb, 162);
      let nested = popByteBuffer();
      _encodeHttp_LHD_UserInfo(value, nested);
      writeVarint32(bb, nested.limit);
      writeByteBuffer(bb, nested);
      pushByteBuffer(nested);
    }
  }

  // required int64 SysTaxIncome = 21;
  let $SysTaxIncome = message.SysTaxIncome;
  if ($SysTaxIncome !== undefined) {
    writeVarint32(bb, 168);
    writeVarint64(bb, $SysTaxIncome);
  }

  // required int32 BetTime = 22;
  let $BetTime = message.BetTime;
  if ($BetTime !== undefined) {
    writeVarint32(bb, 176);
    writeVarint64(bb, intToLong($BetTime));
  }

  // required int64 WinLine = 23;
  let $WinLine = message.WinLine;
  if ($WinLine !== undefined) {
    writeVarint32(bb, 184);
    writeVarint64(bb, $WinLine);
  }

  // required int64 RobotBetAmount = 24;
  let $RobotBetAmount = message.RobotBetAmount;
  if ($RobotBetAmount !== undefined) {
    writeVarint32(bb, 192);
    writeVarint64(bb, $RobotBetAmount);
  }

  // repeated Http_LHD_UserInfo LastGameUserBet = 25;
  let array$LastGameUserBet = message.LastGameUserBet;
  if (array$LastGameUserBet !== undefined) {
    for (let value of array$LastGameUserBet) {
      writeVarint32(bb, 202);
      let nested = popByteBuffer();
      _encodeHttp_LHD_UserInfo(value, nested);
      writeVarint32(bb, nested.limit);
      writeByteBuffer(bb, nested);
      pushByteBuffer(nested);
    }
  }

  // required int32 DragonWinRate = 26;
  let $DragonWinRate = message.DragonWinRate;
  if ($DragonWinRate !== undefined) {
    writeVarint32(bb, 208);
    writeVarint64(bb, intToLong($DragonWinRate));
  }

  // required int32 DrawWinRate = 27;
  let $DrawWinRate = message.DrawWinRate;
  if ($DrawWinRate !== undefined) {
    writeVarint32(bb, 216);
    writeVarint64(bb, intToLong($DrawWinRate));
  }

  // required int32 TigerWinRate = 28;
  let $TigerWinRate = message.TigerWinRate;
  if ($TigerWinRate !== undefined) {
    writeVarint32(bb, 224);
    writeVarint64(bb, intToLong($TigerWinRate));
  }

  // required int64 FanFengTarget = 29;
  let $FanFengTarget = message.FanFengTarget;
  if ($FanFengTarget !== undefined) {
    writeVarint32(bb, 232);
    writeVarint64(bb, $FanFengTarget);
  }

  // required int64 FanFengComplete = 30;
  let $FanFengComplete = message.FanFengComplete;
  if ($FanFengComplete !== undefined) {
    writeVarint32(bb, 240);
    writeVarint64(bb, $FanFengComplete);
  }
}

export function decodeHttp_LHD_TableDetail(binary: Uint8Array): Http_LHD_TableDetail {
  return _decodeHttp_LHD_TableDetail(wrapByteBuffer(binary));
}

function _decodeHttp_LHD_TableDetail(bb: ByteBuffer): Http_LHD_TableDetail {
  let message: Http_LHD_TableDetail = {} as any;

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

      // required int32 Status = 2;
      case 2: {
        message.Status = readVarint32(bb);
        break;
      }

      // required int64 SumEarnAmount = 3;
      case 3: {
        message.SumEarnAmount = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // required int32 LastEarnAmount = 4;
      case 4: {
        message.LastEarnAmount = readVarint32(bb);
        break;
      }

      // required int64 PoolCurrentAmount = 5;
      case 5: {
        message.PoolCurrentAmount = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // required int32 GameUserCount = 6;
      case 6: {
        message.GameUserCount = readVarint32(bb);
        break;
      }

      // required int32 RobotCount = 7;
      case 7: {
        message.RobotCount = readVarint32(bb);
        break;
      }

      // required int32 PopWaterRate = 8;
      case 8: {
        message.PopWaterRate = readVarint32(bb);
        break;
      }

      // required int32 ZhuangType = 9;
      case 9: {
        message.ZhuangType = readVarint32(bb);
        break;
      }

      // required string ZhuangNickName = 10;
      case 10: {
        message.ZhuangNickName = readString(bb, readVarint32(bb));
        break;
      }

      // required int32 ZhuangUserID = 11;
      case 11: {
        message.ZhuangUserID = readVarint32(bb);
        break;
      }

      // required int32 ZhuangSurplusTotal = 12;
      case 12: {
        message.ZhuangSurplusTotal = readVarint32(bb);
        break;
      }

      // required int64 ZhuangCurrentMoneyAmount = 13;
      case 13: {
        message.ZhuangCurrentMoneyAmount = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // required int64 ZhuangInitMoneyAmount = 14;
      case 14: {
        message.ZhuangInitMoneyAmount = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // required int64 OpenResultDragon = 15;
      case 15: {
        message.OpenResultDragon = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // required int64 OpenResultTiger = 16;
      case 16: {
        message.OpenResultTiger = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // required int64 OpenResultDraw = 17;
      case 17: {
        message.OpenResultDraw = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // required string CurentOpenResult = 18;
      case 18: {
        message.CurentOpenResult = readString(bb, readVarint32(bb));
        break;
      }

      // required int64 CurentOpenResultEarn = 19;
      case 19: {
        message.CurentOpenResultEarn = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // repeated Http_LHD_UserInfo UserInfo = 20;
      case 20: {
        let limit = pushTemporaryLength(bb);
        let values = message.UserInfo || (message.UserInfo = []);
        values.push(_decodeHttp_LHD_UserInfo(bb));
        bb.limit = limit;
        break;
      }

      // required int64 SysTaxIncome = 21;
      case 21: {
        message.SysTaxIncome = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // required int32 BetTime = 22;
      case 22: {
        message.BetTime = readVarint32(bb);
        break;
      }

      // required int64 WinLine = 23;
      case 23: {
        message.WinLine = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // required int64 RobotBetAmount = 24;
      case 24: {
        message.RobotBetAmount = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // repeated Http_LHD_UserInfo LastGameUserBet = 25;
      case 25: {
        let limit = pushTemporaryLength(bb);
        let values = message.LastGameUserBet || (message.LastGameUserBet = []);
        values.push(_decodeHttp_LHD_UserInfo(bb));
        bb.limit = limit;
        break;
      }

      // required int32 DragonWinRate = 26;
      case 26: {
        message.DragonWinRate = readVarint32(bb);
        break;
      }

      // required int32 DrawWinRate = 27;
      case 27: {
        message.DrawWinRate = readVarint32(bb);
        break;
      }

      // required int32 TigerWinRate = 28;
      case 28: {
        message.TigerWinRate = readVarint32(bb);
        break;
      }

      // required int64 FanFengTarget = 29;
      case 29: {
        message.FanFengTarget = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // required int64 FanFengComplete = 30;
      case 30: {
        message.FanFengComplete = readVarint64(bb, /* unsigned */ false);
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  if (message.TableNo === undefined)
    throw new Error("Missing required field: TableNo");

  if (message.Status === undefined)
    throw new Error("Missing required field: Status");

  if (message.SumEarnAmount === undefined)
    throw new Error("Missing required field: SumEarnAmount");

  if (message.LastEarnAmount === undefined)
    throw new Error("Missing required field: LastEarnAmount");

  if (message.PoolCurrentAmount === undefined)
    throw new Error("Missing required field: PoolCurrentAmount");

  if (message.GameUserCount === undefined)
    throw new Error("Missing required field: GameUserCount");

  if (message.RobotCount === undefined)
    throw new Error("Missing required field: RobotCount");

  if (message.PopWaterRate === undefined)
    throw new Error("Missing required field: PopWaterRate");

  if (message.ZhuangType === undefined)
    throw new Error("Missing required field: ZhuangType");

  if (message.ZhuangNickName === undefined)
    throw new Error("Missing required field: ZhuangNickName");

  if (message.ZhuangUserID === undefined)
    throw new Error("Missing required field: ZhuangUserID");

  if (message.ZhuangSurplusTotal === undefined)
    throw new Error("Missing required field: ZhuangSurplusTotal");

  if (message.ZhuangCurrentMoneyAmount === undefined)
    throw new Error("Missing required field: ZhuangCurrentMoneyAmount");

  if (message.ZhuangInitMoneyAmount === undefined)
    throw new Error("Missing required field: ZhuangInitMoneyAmount");

  if (message.OpenResultDragon === undefined)
    throw new Error("Missing required field: OpenResultDragon");

  if (message.OpenResultTiger === undefined)
    throw new Error("Missing required field: OpenResultTiger");

  if (message.OpenResultDraw === undefined)
    throw new Error("Missing required field: OpenResultDraw");

  if (message.CurentOpenResult === undefined)
    throw new Error("Missing required field: CurentOpenResult");

  if (message.CurentOpenResultEarn === undefined)
    throw new Error("Missing required field: CurentOpenResultEarn");

  if (message.SysTaxIncome === undefined)
    throw new Error("Missing required field: SysTaxIncome");

  if (message.BetTime === undefined)
    throw new Error("Missing required field: BetTime");

  if (message.WinLine === undefined)
    throw new Error("Missing required field: WinLine");

  if (message.RobotBetAmount === undefined)
    throw new Error("Missing required field: RobotBetAmount");

  if (message.DragonWinRate === undefined)
    throw new Error("Missing required field: DragonWinRate");

  if (message.DrawWinRate === undefined)
    throw new Error("Missing required field: DrawWinRate");

  if (message.TigerWinRate === undefined)
    throw new Error("Missing required field: TigerWinRate");

  if (message.FanFengTarget === undefined)
    throw new Error("Missing required field: FanFengTarget");

  if (message.FanFengComplete === undefined)
    throw new Error("Missing required field: FanFengComplete");

  return message;
}

export interface Http_LHD_UserInfo {
  UserID: number;
  UserType: number;
  NickName: string;
  GameScore: Long;
  InitMoney: Long;
  CurrentMoney: Long;
  BetInfoDragon: Long;
  BetInfoTiger: Long;
  BetInfoDraw: Long;
  SumCharge: Long;
  SumConvert: Long;
  WinRate: Long;
  BetTotal: Long;
  IsVIP: boolean;
}

export function encodeHttp_LHD_UserInfo(message: Http_LHD_UserInfo): Uint8Array {
  let bb = popByteBuffer();
  _encodeHttp_LHD_UserInfo(message, bb);
  return toUint8Array(bb);
}

function _encodeHttp_LHD_UserInfo(message: Http_LHD_UserInfo, bb: ByteBuffer): void {
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

  // required int64 GameScore = 4;
  let $GameScore = message.GameScore;
  if ($GameScore !== undefined) {
    writeVarint32(bb, 32);
    writeVarint64(bb, $GameScore);
  }

  // required int64 InitMoney = 5;
  let $InitMoney = message.InitMoney;
  if ($InitMoney !== undefined) {
    writeVarint32(bb, 40);
    writeVarint64(bb, $InitMoney);
  }

  // required int64 CurrentMoney = 6;
  let $CurrentMoney = message.CurrentMoney;
  if ($CurrentMoney !== undefined) {
    writeVarint32(bb, 48);
    writeVarint64(bb, $CurrentMoney);
  }

  // required int64 BetInfoDragon = 7;
  let $BetInfoDragon = message.BetInfoDragon;
  if ($BetInfoDragon !== undefined) {
    writeVarint32(bb, 56);
    writeVarint64(bb, $BetInfoDragon);
  }

  // required int64 BetInfoTiger = 8;
  let $BetInfoTiger = message.BetInfoTiger;
  if ($BetInfoTiger !== undefined) {
    writeVarint32(bb, 64);
    writeVarint64(bb, $BetInfoTiger);
  }

  // required int64 BetInfoDraw = 9;
  let $BetInfoDraw = message.BetInfoDraw;
  if ($BetInfoDraw !== undefined) {
    writeVarint32(bb, 72);
    writeVarint64(bb, $BetInfoDraw);
  }

  // required int64 SumCharge = 10;
  let $SumCharge = message.SumCharge;
  if ($SumCharge !== undefined) {
    writeVarint32(bb, 80);
    writeVarint64(bb, $SumCharge);
  }

  // required int64 SumConvert = 11;
  let $SumConvert = message.SumConvert;
  if ($SumConvert !== undefined) {
    writeVarint32(bb, 88);
    writeVarint64(bb, $SumConvert);
  }

  // required int64 WinRate = 13;
  let $WinRate = message.WinRate;
  if ($WinRate !== undefined) {
    writeVarint32(bb, 104);
    writeVarint64(bb, $WinRate);
  }

  // required int64 BetTotal = 14;
  let $BetTotal = message.BetTotal;
  if ($BetTotal !== undefined) {
    writeVarint32(bb, 112);
    writeVarint64(bb, $BetTotal);
  }

  // required bool IsVIP = 15;
  let $IsVIP = message.IsVIP;
  if ($IsVIP !== undefined) {
    writeVarint32(bb, 120);
    writeByte(bb, $IsVIP ? 1 : 0);
  }
}

export function decodeHttp_LHD_UserInfo(binary: Uint8Array): Http_LHD_UserInfo {
  return _decodeHttp_LHD_UserInfo(wrapByteBuffer(binary));
}

function _decodeHttp_LHD_UserInfo(bb: ByteBuffer): Http_LHD_UserInfo {
  let message: Http_LHD_UserInfo = {} as any;

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

      // required int64 GameScore = 4;
      case 4: {
        message.GameScore = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // required int64 InitMoney = 5;
      case 5: {
        message.InitMoney = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // required int64 CurrentMoney = 6;
      case 6: {
        message.CurrentMoney = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // required int64 BetInfoDragon = 7;
      case 7: {
        message.BetInfoDragon = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // required int64 BetInfoTiger = 8;
      case 8: {
        message.BetInfoTiger = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // required int64 BetInfoDraw = 9;
      case 9: {
        message.BetInfoDraw = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // required int64 SumCharge = 10;
      case 10: {
        message.SumCharge = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // required int64 SumConvert = 11;
      case 11: {
        message.SumConvert = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // required int64 WinRate = 13;
      case 13: {
        message.WinRate = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // required int64 BetTotal = 14;
      case 14: {
        message.BetTotal = readVarint64(bb, /* unsigned */ false);
        break;
      }

      // required bool IsVIP = 15;
      case 15: {
        message.IsVIP = !!readByte(bb);
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

  if (message.GameScore === undefined)
    throw new Error("Missing required field: GameScore");

  if (message.InitMoney === undefined)
    throw new Error("Missing required field: InitMoney");

  if (message.CurrentMoney === undefined)
    throw new Error("Missing required field: CurrentMoney");

  if (message.BetInfoDragon === undefined)
    throw new Error("Missing required field: BetInfoDragon");

  if (message.BetInfoTiger === undefined)
    throw new Error("Missing required field: BetInfoTiger");

  if (message.BetInfoDraw === undefined)
    throw new Error("Missing required field: BetInfoDraw");

  if (message.SumCharge === undefined)
    throw new Error("Missing required field: SumCharge");

  if (message.SumConvert === undefined)
    throw new Error("Missing required field: SumConvert");

  if (message.WinRate === undefined)
    throw new Error("Missing required field: WinRate");

  if (message.BetTotal === undefined)
    throw new Error("Missing required field: BetTotal");

  if (message.IsVIP === undefined)
    throw new Error("Missing required field: IsVIP");

  return message;
}

export interface LHD_ResultCardList {
  CardList?: LHD_Cards[];
}

export function encodeLHD_ResultCardList(message: LHD_ResultCardList): Uint8Array {
  let bb = popByteBuffer();
  _encodeLHD_ResultCardList(message, bb);
  return toUint8Array(bb);
}

function _encodeLHD_ResultCardList(message: LHD_ResultCardList, bb: ByteBuffer): void {
  // repeated LHD_Cards CardList = 1;
  let array$CardList = message.CardList;
  if (array$CardList !== undefined) {
    for (let value of array$CardList) {
      writeVarint32(bb, 10);
      let nested = popByteBuffer();
      _encodeLHD_Cards(value, nested);
      writeVarint32(bb, nested.limit);
      writeByteBuffer(bb, nested);
      pushByteBuffer(nested);
    }
  }
}

export function decodeLHD_ResultCardList(binary: Uint8Array): LHD_ResultCardList {
  return _decodeLHD_ResultCardList(wrapByteBuffer(binary));
}

function _decodeLHD_ResultCardList(bb: ByteBuffer): LHD_ResultCardList {
  let message: LHD_ResultCardList = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // repeated LHD_Cards CardList = 1;
      case 1: {
        let limit = pushTemporaryLength(bb);
        let values = message.CardList || (message.CardList = []);
        values.push(_decodeLHD_Cards(bb));
        bb.limit = limit;
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface LHD_Poker {
  Color: number;
  Number: number;
}

export function encodeLHD_Poker(message: LHD_Poker): Uint8Array {
  let bb = popByteBuffer();
  _encodeLHD_Poker(message, bb);
  return toUint8Array(bb);
}

export function _encodeLHD_Poker(message: LHD_Poker, bb: ByteBuffer): void {
  // required int32 Color = 1;
  let $Color = message.Color;
  if ($Color !== undefined) {
    writeVarint32(bb, 8);
    writeVarint64(bb, intToLong($Color));
  }

  // required int32 Number = 2;
  let $Number = message.Number;
  if ($Number !== undefined) {
    writeVarint32(bb, 16);
    writeVarint64(bb, intToLong($Number));
  }
}

export function decodeLHD_Poker(binary: Uint8Array): LHD_Poker {
  return _decodeLHD_Poker(wrapByteBuffer(binary));
}

export function _decodeLHD_Poker(bb: ByteBuffer): LHD_Poker {
  let message: LHD_Poker = {} as any;

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

      // required int32 Number = 2;
      case 2: {
        message.Number = readVarint32(bb);
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  if (message.Color === undefined)
    throw new Error("Missing required field: Color");

  if (message.Number === undefined)
    throw new Error("Missing required field: Number");

  return message;
}

export interface LHD_Cards {
  Cards?: LHD_Poker[];
  RoundID: number;
}

export function encodeLHD_Cards(message: LHD_Cards): Uint8Array {
  let bb = popByteBuffer();
  _encodeLHD_Cards(message, bb);
  return toUint8Array(bb);
}

function _encodeLHD_Cards(message: LHD_Cards, bb: ByteBuffer): void {
  // repeated LHD_Poker Cards = 1;
  let array$Cards = message.Cards;
  if (array$Cards !== undefined) {
    for (let value of array$Cards) {
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

export function decodeLHD_Cards(binary: Uint8Array): LHD_Cards {
  return _decodeLHD_Cards(wrapByteBuffer(binary));
}

function _decodeLHD_Cards(bb: ByteBuffer): LHD_Cards {
  let message: LHD_Cards = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // repeated LHD_Poker Cards = 1;
      case 1: {
        let limit = pushTemporaryLength(bb);
        let values = message.Cards || (message.Cards = []);
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
