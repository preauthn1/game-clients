
export interface RetMessage {
  Code: number;
  Message: string;
}

export function encodeRetMessage(message: RetMessage): Uint8Array {
  let bb = popByteBuffer();
  _encodeRetMessage(message, bb);
  return toUint8Array(bb);
}

function _encodeRetMessage(message: RetMessage, bb: ByteBuffer): void {
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
}

export function decodeRetMessage(binary: Uint8Array): RetMessage {
  return _decodeRetMessage(wrapByteBuffer(binary));
}

function _decodeRetMessage(bb: ByteBuffer): RetMessage {
  let message: RetMessage = {} as any;

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

export interface RPCInfo {
  ConnID: string;
  QueueID: number;
  IPAddress: string;
  UserID?: number;
  Cer?: string;
  RouteServerID: number;
  ExtendInfo?: string;
  ConnToken?: string;
}

export function encodeRPCInfo(message: RPCInfo): Uint8Array {
  let bb = popByteBuffer();
  _encodeRPCInfo(message, bb);
  return toUint8Array(bb);
}

function _encodeRPCInfo(message: RPCInfo, bb: ByteBuffer): void {
  // required string ConnID = 1;
  let $ConnID = message.ConnID;
  if ($ConnID !== undefined) {
    writeVarint32(bb, 10);
    writeString(bb, $ConnID);
  }

  // required int32 QueueID = 2;
  let $QueueID = message.QueueID;
  if ($QueueID !== undefined) {
    writeVarint32(bb, 16);
    writeVarint64(bb, intToLong($QueueID));
  }

  // required string IPAddress = 3;
  let $IPAddress = message.IPAddress;
  if ($IPAddress !== undefined) {
    writeVarint32(bb, 26);
    writeString(bb, $IPAddress);
  }

  // optional int32 UserID = 4;
  let $UserID = message.UserID;
  if ($UserID !== undefined) {
    writeVarint32(bb, 32);
    writeVarint64(bb, intToLong($UserID));
  }

  // optional string Cer = 5;
  let $Cer = message.Cer;
  if ($Cer !== undefined) {
    writeVarint32(bb, 42);
    writeString(bb, $Cer);
  }

  // required int32 RouteServerID = 6;
  let $RouteServerID = message.RouteServerID;
  if ($RouteServerID !== undefined) {
    writeVarint32(bb, 48);
    writeVarint64(bb, intToLong($RouteServerID));
  }

  // optional string ExtendInfo = 7;
  let $ExtendInfo = message.ExtendInfo;
  if ($ExtendInfo !== undefined) {
    writeVarint32(bb, 58);
    writeString(bb, $ExtendInfo);
  }

  // optional string ConnToken = 8;
  let $ConnToken = [REDACTED];
  if ($ConnToken !== undefined) {
    writeVarint32(bb, 66);
    writeString(bb, $ConnToken);
  }
}

export function decodeRPCInfo(binary: Uint8Array): RPCInfo {
  return _decodeRPCInfo(wrapByteBuffer(binary));
}

function _decodeRPCInfo(bb: ByteBuffer): RPCInfo {
  let message: RPCInfo = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // required string ConnID = 1;
      case 1: {
        message.ConnID = readString(bb, readVarint32(bb));
        break;
      }

      // required int32 QueueID = 2;
      case 2: {
        message.QueueID = readVarint32(bb);
        break;
      }

      // required string IPAddress = 3;
      case 3: {
        message.IPAddress = readString(bb, readVarint32(bb));
        break;
      }

      // optional int32 UserID = 4;
      case 4: {
        message.UserID = readVarint32(bb);
        break;
      }

      // optional string Cer = 5;
      case 5: {
        message.Cer = readString(bb, readVarint32(bb));
        break;
      }

      // required int32 RouteServerID = 6;
      case 6: {
        message.RouteServerID = readVarint32(bb);
        break;
      }

      // optional string ExtendInfo = 7;
      case 7: {
        message.ExtendInfo = readString(bb, readVarint32(bb));
        break;
      }

      // optional string ConnToken = 8;
      case 8: {
        message.ConnToken = [REDACTED], readVarint32(bb));
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  if (message.ConnID === undefined)
    throw new Error("Missing required field: ConnID");

  if (message.QueueID === undefined)
    throw new Error("Missing required field: QueueID");

  if (message.IPAddress === undefined)
    throw new Error("Missing required field: IPAddress");

  if (message.RouteServerID === undefined)
    throw new Error("Missing required field: RouteServerID");

  return message;
}

export interface TipMessage {
  Message: string;
  MsgType: number;
  Param?: number;
}

export function encodeTipMessage(message: TipMessage): Uint8Array {
  let bb = popByteBuffer();
  _encodeTipMessage(message, bb);
  return toUint8Array(bb);
}

function _encodeTipMessage(message: TipMessage, bb: ByteBuffer): void {
  // required string Message = 1;
  let $Message = message.Message;
  if ($Message !== undefined) {
    writeVarint32(bb, 10);
    writeString(bb, $Message);
  }

  // required int32 MsgType = 2;
  let $MsgType = message.MsgType;
  if ($MsgType !== undefined) {
    writeVarint32(bb, 16);
    writeVarint64(bb, intToLong($MsgType));
  }

  // optional int32 Param = 3;
  let $Param = message.Param;
  if ($Param !== undefined) {
    writeVarint32(bb, 24);
    writeVarint64(bb, intToLong($Param));
  }
}

export function decodeTipMessage(binary: Uint8Array): TipMessage {
  return _decodeTipMessage(wrapByteBuffer(binary));
}

function _decodeTipMessage(bb: ByteBuffer): TipMessage {
  let message: TipMessage = {} as any;

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

      // required int32 MsgType = 2;
      case 2: {
        message.MsgType = readVarint32(bb);
        break;
      }

      // optional int32 Param = 3;
      case 3: {
        message.Param = readVarint32(bb);
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  if (message.Message === undefined)
    throw new Error("Missing required field: Message");

  if (message.MsgType === undefined)
    throw new Error("Missing required field: MsgType");

  return message;
}

export interface HeartBeatConfig {
  BeatInterval: number;
  ConnLoseTimeSpan: number;
}

export function encodeHeartBeatConfig(message: HeartBeatConfig): Uint8Array {
  let bb = popByteBuffer();
  _encodeHeartBeatConfig(message, bb);
  return toUint8Array(bb);
}

function _encodeHeartBeatConfig(message: HeartBeatConfig, bb: ByteBuffer): void {
  // required int32 BeatInterval = 1;
  let $BeatInterval = message.BeatInterval;
  if ($BeatInterval !== undefined) {
    writeVarint32(bb, 8);
    writeVarint64(bb, intToLong($BeatInterval));
  }

  // required int32 ConnLoseTimeSpan = 2;
  let $ConnLoseTimeSpan = message.ConnLoseTimeSpan;
  if ($ConnLoseTimeSpan !== undefined) {
    writeVarint32(bb, 16);
    writeVarint64(bb, intToLong($ConnLoseTimeSpan));
  }
}

export function decodeHeartBeatConfig(binary: Uint8Array): HeartBeatConfig {
  return _decodeHeartBeatConfig(wrapByteBuffer(binary));
}

function _decodeHeartBeatConfig(bb: ByteBuffer): HeartBeatConfig {
  let message: HeartBeatConfig = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // required int32 BeatInterval = 1;
      case 1: {
        message.BeatInterval = readVarint32(bb);
        break;
      }

      // required int32 ConnLoseTimeSpan = 2;
      case 2: {
        message.ConnLoseTimeSpan = readVarint32(bb);
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  if (message.BeatInterval === undefined)
    throw new Error("Missing required field: BeatInterval");

  if (message.ConnLoseTimeSpan === undefined)
    throw new Error("Missing required field: ConnLoseTimeSpan");

  return message;
}

export interface IPReport {
  IPAddress: string;
}

export function encodeIPReport(message: IPReport): Uint8Array {
  let bb = popByteBuffer();
  _encodeIPReport(message, bb);
  return toUint8Array(bb);
}

function _encodeIPReport(message: IPReport, bb: ByteBuffer): void {
  // required string IPAddress = 1;
  let $IPAddress = message.IPAddress;
  if ($IPAddress !== undefined) {
    writeVarint32(bb, 10);
    writeString(bb, $IPAddress);
  }
}

export function decodeIPReport(binary: Uint8Array): IPReport {
  return _decodeIPReport(wrapByteBuffer(binary));
}

function _decodeIPReport(bb: ByteBuffer): IPReport {
  let message: IPReport = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // required string IPAddress = 1;
      case 1: {
        message.IPAddress = readString(bb, readVarint32(bb));
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  if (message.IPAddress === undefined)
    throw new Error("Missing required field: IPAddress");

  return message;
}

export interface ConnTokenMessage {
  token: [REDACTED];
}

export function encodeConnTokenMessage(message: ConnTokenMessage): Uint8Array {
  let bb = popByteBuffer();
  _encodeConnTokenMessage(message, bb);
  return toUint8Array(bb);
}

function _encodeConnTokenMessage(message: ConnTokenMessage, bb: ByteBuffer): void {
  // required string token = 1;
  let $token = [REDACTED];
  if ($token !== undefined) {
    writeVarint32(bb, 10);
    writeString(bb, $token);
  }
}

export function decodeConnTokenMessage(binary: Uint8Array): ConnTokenMessage {
  return _decodeConnTokenMessage(wrapByteBuffer(binary));
}

function _decodeConnTokenMessage(bb: ByteBuffer): ConnTokenMessage {
  let message: ConnTokenMessage = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // required string token = 1;
      case 1: {
        message.token = [REDACTED], readVarint32(bb));
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  if (message.token === undefined)
    throw new Error("Missing required field: token");

  return message;
}

export interface ServerInfo {
  Version?: string;
  TimeZone?: string;
  TimeOffset?: Long;
}

export function encodeServerInfo(message: ServerInfo): Uint8Array {
  let bb = popByteBuffer();
  _encodeServerInfo(message, bb);
  return toUint8Array(bb);
}

function _encodeServerInfo(message: ServerInfo, bb: ByteBuffer): void {
  // optional string Version = 1;
  let $Version = message.Version;
  if ($Version !== undefined) {
    writeVarint32(bb, 10);
    writeString(bb, $Version);
  }

  // optional string TimeZone = 2;
  let $TimeZone = message.TimeZone;
  if ($TimeZone !== undefined) {
    writeVarint32(bb, 18);
    writeString(bb, $TimeZone);
  }

  // optional int64 TimeOffset = 3;
  let $TimeOffset = message.TimeOffset;
  if ($TimeOffset !== undefined) {
    writeVarint32(bb, 24);
    writeVarint64(bb, $TimeOffset);
  }
}

export function decodeServerInfo(binary: Uint8Array): ServerInfo {
  return _decodeServerInfo(wrapByteBuffer(binary));
}

function _decodeServerInfo(bb: ByteBuffer): ServerInfo {
  let message: ServerInfo = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional string Version = 1;
      case 1: {
        message.Version = readString(bb, readVarint32(bb));
        break;
      }

      // optional string TimeZone = 2;
      case 2: {
        message.TimeZone = readString(bb, readVarint32(bb));
        break;
      }

      // optional int64 TimeOffset = 3;
      case 3: {
        message.TimeOffset = readVarint64(bb, /* unsigned */ false);
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
