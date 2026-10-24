/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

//var $protobuf = require("protobufjs/minimal");
var $protobuf = protobuf;

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.GameMsg_JLBPK = (function() {

    /**
     * Namespace GameMsg_JLBPK.
     * @exports GameMsg_JLBPK
     * @namespace
     */
    var GameMsg_JLBPK = {};

    GameMsg_JLBPK.JLBPK_GameInfo = (function() {

        /**
         * Properties of a JLBPK_GameInfo.
         * @memberof GameMsg_JLBPK
         * @interface IJLBPK_GameInfo
         * @property {number} GameState JLBPK_GameInfo GameState
         * @property {Array.<string>|null} [JPSheet] JLBPK_GameInfo JPSheet
         * @property {Array.<string>|null} [SpecialSheet] JLBPK_GameInfo SpecialSheet
         * @property {Array.<string>|null} [PokerManual] JLBPK_GameInfo PokerManual
         * @property {number|Long} JPMoney JLBPK_GameInfo JPMoney
         * @property {number} TimeRemain JLBPK_GameInfo TimeRemain
         * @property {Array.<GameMsg_JLBPK.IJLBPK_UserInfo>|null} [UserInfo] JLBPK_GameInfo UserInfo
         * @property {Array.<number>|null} [ChipValue] JLBPK_GameInfo ChipValue
         * @property {number|Long} Bet_Side JLBPK_GameInfo Bet_Side
         * @property {GameMsg_JLBPK.IJLBPK_UserCards} BankerCards JLBPK_GameInfo BankerCards
         */

        /**
         * Constructs a new JLBPK_GameInfo.
         * @memberof GameMsg_JLBPK
         * @classdesc Represents a JLBPK_GameInfo.
         * @implements IJLBPK_GameInfo
         * @constructor
         * @param {GameMsg_JLBPK.IJLBPK_GameInfo=} [properties] Properties to set
         */
        function JLBPK_GameInfo(properties) {
            this.JPSheet = [];
            this.SpecialSheet = [];
            this.PokerManual = [];
            this.UserInfo = [];
            this.ChipValue = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * JLBPK_GameInfo GameState.
         * @member {number} GameState
         * @memberof GameMsg_JLBPK.JLBPK_GameInfo
         * @instance
         */
        JLBPK_GameInfo.prototype.GameState = 0;

        /**
         * JLBPK_GameInfo JPSheet.
         * @member {Array.<string>} JPSheet
         * @memberof GameMsg_JLBPK.JLBPK_GameInfo
         * @instance
         */
        JLBPK_GameInfo.prototype.JPSheet = $util.emptyArray;

        /**
         * JLBPK_GameInfo SpecialSheet.
         * @member {Array.<string>} SpecialSheet
         * @memberof GameMsg_JLBPK.JLBPK_GameInfo
         * @instance
         */
        JLBPK_GameInfo.prototype.SpecialSheet = $util.emptyArray;

        /**
         * JLBPK_GameInfo PokerManual.
         * @member {Array.<string>} PokerManual
         * @memberof GameMsg_JLBPK.JLBPK_GameInfo
         * @instance
         */
        JLBPK_GameInfo.prototype.PokerManual = $util.emptyArray;

        /**
         * JLBPK_GameInfo JPMoney.
         * @member {number|Long} JPMoney
         * @memberof GameMsg_JLBPK.JLBPK_GameInfo
         * @instance
         */
        JLBPK_GameInfo.prototype.JPMoney = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * JLBPK_GameInfo TimeRemain.
         * @member {number} TimeRemain
         * @memberof GameMsg_JLBPK.JLBPK_GameInfo
         * @instance
         */
        JLBPK_GameInfo.prototype.TimeRemain = 0;

        /**
         * JLBPK_GameInfo UserInfo.
         * @member {Array.<GameMsg_JLBPK.IJLBPK_UserInfo>} UserInfo
         * @memberof GameMsg_JLBPK.JLBPK_GameInfo
         * @instance
         */
        JLBPK_GameInfo.prototype.UserInfo = $util.emptyArray;

        /**
         * JLBPK_GameInfo ChipValue.
         * @member {Array.<number>} ChipValue
         * @memberof GameMsg_JLBPK.JLBPK_GameInfo
         * @instance
         */
        JLBPK_GameInfo.prototype.ChipValue = $util.emptyArray;

        /**
         * JLBPK_GameInfo Bet_Side.
         * @member {number|Long} Bet_Side
         * @memberof GameMsg_JLBPK.JLBPK_GameInfo
         * @instance
         */
        JLBPK_GameInfo.prototype.Bet_Side = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * JLBPK_GameInfo BankerCards.
         * @member {GameMsg_JLBPK.IJLBPK_UserCards} BankerCards
         * @memberof GameMsg_JLBPK.JLBPK_GameInfo
         * @instance
         */
        JLBPK_GameInfo.prototype.BankerCards = null;

        /**
         * Creates a new JLBPK_GameInfo instance using the specified properties.
         * @function create
         * @memberof GameMsg_JLBPK.JLBPK_GameInfo
         * @static
         * @param {GameMsg_JLBPK.IJLBPK_GameInfo=} [properties] Properties to set
         * @returns {GameMsg_JLBPK.JLBPK_GameInfo} JLBPK_GameInfo instance
         */
        JLBPK_GameInfo.create = function create(properties) {
            return new JLBPK_GameInfo(properties);
        };

        /**
         * Encodes the specified JLBPK_GameInfo message. Does not implicitly {@link GameMsg_JLBPK.JLBPK_GameInfo.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_JLBPK.JLBPK_GameInfo
         * @static
         * @param {GameMsg_JLBPK.IJLBPK_GameInfo} message JLBPK_GameInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JLBPK_GameInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.GameState);
            if (message.JPSheet != null && message.JPSheet.length)
                for (var i = 0; i < message.JPSheet.length; ++i)
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.JPSheet[i]);
            if (message.SpecialSheet != null && message.SpecialSheet.length)
                for (var i = 0; i < message.SpecialSheet.length; ++i)
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.SpecialSheet[i]);
            if (message.PokerManual != null && message.PokerManual.length)
                for (var i = 0; i < message.PokerManual.length; ++i)
                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.PokerManual[i]);
            writer.uint32(/* id 5, wireType 0 =*/40).int64(message.JPMoney);
            writer.uint32(/* id 6, wireType 0 =*/48).int32(message.TimeRemain);
            if (message.UserInfo != null && message.UserInfo.length)
                for (var i = 0; i < message.UserInfo.length; ++i)
                    $root.GameMsg_JLBPK.JLBPK_UserInfo.encode(message.UserInfo[i], writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
            if (message.ChipValue != null && message.ChipValue.length)
                for (var i = 0; i < message.ChipValue.length; ++i)
                    writer.uint32(/* id 8, wireType 0 =*/64).int32(message.ChipValue[i]);
            writer.uint32(/* id 9, wireType 0 =*/72).int64(message.Bet_Side);
            $root.GameMsg_JLBPK.JLBPK_UserCards.encode(message.BankerCards, writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified JLBPK_GameInfo message, length delimited. Does not implicitly {@link GameMsg_JLBPK.JLBPK_GameInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_JLBPK.JLBPK_GameInfo
         * @static
         * @param {GameMsg_JLBPK.IJLBPK_GameInfo} message JLBPK_GameInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JLBPK_GameInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a JLBPK_GameInfo message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_JLBPK.JLBPK_GameInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_JLBPK.JLBPK_GameInfo} JLBPK_GameInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JLBPK_GameInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_JLBPK.JLBPK_GameInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.GameState = reader.int32();
                    break;
                case 2:
                    if (!(message.JPSheet && message.JPSheet.length))
                        message.JPSheet = [];
                    message.JPSheet.push(reader.string());
                    break;
                case 3:
                    if (!(message.SpecialSheet && message.SpecialSheet.length))
                        message.SpecialSheet = [];
                    message.SpecialSheet.push(reader.string());
                    break;
                case 4:
                    if (!(message.PokerManual && message.PokerManual.length))
                        message.PokerManual = [];
                    message.PokerManual.push(reader.string());
                    break;
                case 5:
                    message.JPMoney = reader.int64();
                    break;
                case 6:
                    message.TimeRemain = reader.int32();
                    break;
                case 7:
                    if (!(message.UserInfo && message.UserInfo.length))
                        message.UserInfo = [];
                    message.UserInfo.push($root.GameMsg_JLBPK.JLBPK_UserInfo.decode(reader, reader.uint32()));
                    break;
                case 8:
                    if (!(message.ChipValue && message.ChipValue.length))
                        message.ChipValue = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.ChipValue.push(reader.int32());
                    } else
                        message.ChipValue.push(reader.int32());
                    break;
                case 9:
                    message.Bet_Side = reader.int64();
                    break;
                case 10:
                    message.BankerCards = $root.GameMsg_JLBPK.JLBPK_UserCards.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("GameState"))
                throw $util.ProtocolError("missing required 'GameState'", { instance: message });
            if (!message.hasOwnProperty("JPMoney"))
                throw $util.ProtocolError("missing required 'JPMoney'", { instance: message });
            if (!message.hasOwnProperty("TimeRemain"))
                throw $util.ProtocolError("missing required 'TimeRemain'", { instance: message });
            if (!message.hasOwnProperty("Bet_Side"))
                throw $util.ProtocolError("missing required 'Bet_Side'", { instance: message });
            if (!message.hasOwnProperty("BankerCards"))
                throw $util.ProtocolError("missing required 'BankerCards'", { instance: message });
            return message;
        };

        /**
         * Decodes a JLBPK_GameInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_JLBPK.JLBPK_GameInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_JLBPK.JLBPK_GameInfo} JLBPK_GameInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JLBPK_GameInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a JLBPK_GameInfo message.
         * @function verify
         * @memberof GameMsg_JLBPK.JLBPK_GameInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        JLBPK_GameInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.GameState))
                return "GameState: integer expected";
            if (message.JPSheet != null && message.hasOwnProperty("JPSheet")) {
                if (!Array.isArray(message.JPSheet))
                    return "JPSheet: array expected";
                for (var i = 0; i < message.JPSheet.length; ++i)
                    if (!$util.isString(message.JPSheet[i]))
                        return "JPSheet: string[] expected";
            }
            if (message.SpecialSheet != null && message.hasOwnProperty("SpecialSheet")) {
                if (!Array.isArray(message.SpecialSheet))
                    return "SpecialSheet: array expected";
                for (var i = 0; i < message.SpecialSheet.length; ++i)
                    if (!$util.isString(message.SpecialSheet[i]))
                        return "SpecialSheet: string[] expected";
            }
            if (message.PokerManual != null && message.hasOwnProperty("PokerManual")) {
                if (!Array.isArray(message.PokerManual))
                    return "PokerManual: array expected";
                for (var i = 0; i < message.PokerManual.length; ++i)
                    if (!$util.isString(message.PokerManual[i]))
                        return "PokerManual: string[] expected";
            }
            if (!$util.isInteger(message.JPMoney) && !(message.JPMoney && $util.isInteger(message.JPMoney.low) && $util.isInteger(message.JPMoney.high)))
                return "JPMoney: integer|Long expected";
            if (!$util.isInteger(message.TimeRemain))
                return "TimeRemain: integer expected";
            if (message.UserInfo != null && message.hasOwnProperty("UserInfo")) {
                if (!Array.isArray(message.UserInfo))
                    return "UserInfo: array expected";
                for (var i = 0; i < message.UserInfo.length; ++i) {
                    var error = $root.GameMsg_JLBPK.JLBPK_UserInfo.verify(message.UserInfo[i]);
                    if (error)
                        return "UserInfo." + error;
                }
            }
            if (message.ChipValue != null && message.hasOwnProperty("ChipValue")) {
                if (!Array.isArray(message.ChipValue))
                    return "ChipValue: array expected";
                for (var i = 0; i < message.ChipValue.length; ++i)
                    if (!$util.isInteger(message.ChipValue[i]))
                        return "ChipValue: integer[] expected";
            }
            if (!$util.isInteger(message.Bet_Side) && !(message.Bet_Side && $util.isInteger(message.Bet_Side.low) && $util.isInteger(message.Bet_Side.high)))
                return "Bet_Side: integer|Long expected";
            {
                var error = $root.GameMsg_JLBPK.JLBPK_UserCards.verify(message.BankerCards);
                if (error)
                    return "BankerCards." + error;
            }
            return null;
        };

        /**
         * Creates a JLBPK_GameInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_JLBPK.JLBPK_GameInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_JLBPK.JLBPK_GameInfo} JLBPK_GameInfo
         */
        JLBPK_GameInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_JLBPK.JLBPK_GameInfo)
                return object;
            var message = new $root.GameMsg_JLBPK.JLBPK_GameInfo();
            if (object.GameState != null)
                message.GameState = object.GameState | 0;
            if (object.JPSheet) {
                if (!Array.isArray(object.JPSheet))
                    throw TypeError(".GameMsg_JLBPK.JLBPK_GameInfo.JPSheet: array expected");
                message.JPSheet = [];
                for (var i = 0; i < object.JPSheet.length; ++i)
                    message.JPSheet[i] = String(object.JPSheet[i]);
            }
            if (object.SpecialSheet) {
                if (!Array.isArray(object.SpecialSheet))
                    throw TypeError(".GameMsg_JLBPK.JLBPK_GameInfo.SpecialSheet: array expected");
                message.SpecialSheet = [];
                for (var i = 0; i < object.SpecialSheet.length; ++i)
                    message.SpecialSheet[i] = String(object.SpecialSheet[i]);
            }
            if (object.PokerManual) {
                if (!Array.isArray(object.PokerManual))
                    throw TypeError(".GameMsg_JLBPK.JLBPK_GameInfo.PokerManual: array expected");
                message.PokerManual = [];
                for (var i = 0; i < object.PokerManual.length; ++i)
                    message.PokerManual[i] = String(object.PokerManual[i]);
            }
            if (object.JPMoney != null)
                if ($util.Long)
                    (message.JPMoney = $util.Long.fromValue(object.JPMoney)).unsigned = false;
                else if (typeof object.JPMoney === "string")
                    message.JPMoney = parseInt(object.JPMoney, 10);
                else if (typeof object.JPMoney === "number")
                    message.JPMoney = object.JPMoney;
                else if (typeof object.JPMoney === "object")
                    message.JPMoney = new $util.LongBits(object.JPMoney.low >>> 0, object.JPMoney.high >>> 0).toNumber();
            if (object.TimeRemain != null)
                message.TimeRemain = object.TimeRemain | 0;
            if (object.UserInfo) {
                if (!Array.isArray(object.UserInfo))
                    throw TypeError(".GameMsg_JLBPK.JLBPK_GameInfo.UserInfo: array expected");
                message.UserInfo = [];
                for (var i = 0; i < object.UserInfo.length; ++i) {
                    if (typeof object.UserInfo[i] !== "object")
                        throw TypeError(".GameMsg_JLBPK.JLBPK_GameInfo.UserInfo: object expected");
                    message.UserInfo[i] = $root.GameMsg_JLBPK.JLBPK_UserInfo.fromObject(object.UserInfo[i]);
                }
            }
            if (object.ChipValue) {
                if (!Array.isArray(object.ChipValue))
                    throw TypeError(".GameMsg_JLBPK.JLBPK_GameInfo.ChipValue: array expected");
                message.ChipValue = [];
                for (var i = 0; i < object.ChipValue.length; ++i)
                    message.ChipValue[i] = object.ChipValue[i] | 0;
            }
            if (object.Bet_Side != null)
                if ($util.Long)
                    (message.Bet_Side = $util.Long.fromValue(object.Bet_Side)).unsigned = false;
                else if (typeof object.Bet_Side === "string")
                    message.Bet_Side = parseInt(object.Bet_Side, 10);
                else if (typeof object.Bet_Side === "number")
                    message.Bet_Side = object.Bet_Side;
                else if (typeof object.Bet_Side === "object")
                    message.Bet_Side = new $util.LongBits(object.Bet_Side.low >>> 0, object.Bet_Side.high >>> 0).toNumber();
            if (object.BankerCards != null) {
                if (typeof object.BankerCards !== "object")
                    throw TypeError(".GameMsg_JLBPK.JLBPK_GameInfo.BankerCards: object expected");
                message.BankerCards = $root.GameMsg_JLBPK.JLBPK_UserCards.fromObject(object.BankerCards);
            }
            return message;
        };

        /**
         * Creates a plain object from a JLBPK_GameInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_JLBPK.JLBPK_GameInfo
         * @static
         * @param {GameMsg_JLBPK.JLBPK_GameInfo} message JLBPK_GameInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        JLBPK_GameInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.JPSheet = [];
                object.SpecialSheet = [];
                object.PokerManual = [];
                object.UserInfo = [];
                object.ChipValue = [];
            }
            if (options.defaults) {
                object.GameState = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.JPMoney = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.JPMoney = options.longs === String ? "0" : 0;
                object.TimeRemain = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.Bet_Side = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.Bet_Side = options.longs === String ? "0" : 0;
                object.BankerCards = null;
            }
            if (message.GameState != null && message.hasOwnProperty("GameState"))
                object.GameState = message.GameState;
            if (message.JPSheet && message.JPSheet.length) {
                object.JPSheet = [];
                for (var j = 0; j < message.JPSheet.length; ++j)
                    object.JPSheet[j] = message.JPSheet[j];
            }
            if (message.SpecialSheet && message.SpecialSheet.length) {
                object.SpecialSheet = [];
                for (var j = 0; j < message.SpecialSheet.length; ++j)
                    object.SpecialSheet[j] = message.SpecialSheet[j];
            }
            if (message.PokerManual && message.PokerManual.length) {
                object.PokerManual = [];
                for (var j = 0; j < message.PokerManual.length; ++j)
                    object.PokerManual[j] = message.PokerManual[j];
            }
            if (message.JPMoney != null && message.hasOwnProperty("JPMoney"))
                if (typeof message.JPMoney === "number")
                    object.JPMoney = options.longs === String ? String(message.JPMoney) : message.JPMoney;
                else
                    object.JPMoney = options.longs === String ? $util.Long.prototype.toString.call(message.JPMoney) : options.longs === Number ? new $util.LongBits(message.JPMoney.low >>> 0, message.JPMoney.high >>> 0).toNumber() : message.JPMoney;
            if (message.TimeRemain != null && message.hasOwnProperty("TimeRemain"))
                object.TimeRemain = message.TimeRemain;
            if (message.UserInfo && message.UserInfo.length) {
                object.UserInfo = [];
                for (var j = 0; j < message.UserInfo.length; ++j)
                    object.UserInfo[j] = $root.GameMsg_JLBPK.JLBPK_UserInfo.toObject(message.UserInfo[j], options);
            }
            if (message.ChipValue && message.ChipValue.length) {
                object.ChipValue = [];
                for (var j = 0; j < message.ChipValue.length; ++j)
                    object.ChipValue[j] = message.ChipValue[j];
            }
            if (message.Bet_Side != null && message.hasOwnProperty("Bet_Side"))
                if (typeof message.Bet_Side === "number")
                    object.Bet_Side = options.longs === String ? String(message.Bet_Side) : message.Bet_Side;
                else
                    object.Bet_Side = options.longs === String ? $util.Long.prototype.toString.call(message.Bet_Side) : options.longs === Number ? new $util.LongBits(message.Bet_Side.low >>> 0, message.Bet_Side.high >>> 0).toNumber() : message.Bet_Side;
            if (message.BankerCards != null && message.hasOwnProperty("BankerCards"))
                object.BankerCards = $root.GameMsg_JLBPK.JLBPK_UserCards.toObject(message.BankerCards, options);
            return object;
        };

        /**
         * Converts this JLBPK_GameInfo to JSON.
         * @function toJSON
         * @memberof GameMsg_JLBPK.JLBPK_GameInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        JLBPK_GameInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return JLBPK_GameInfo;
    })();

    GameMsg_JLBPK.JLBPK_AllUserInfo = (function() {

        /**
         * Properties of a JLBPK_AllUserInfo.
         * @memberof GameMsg_JLBPK
         * @interface IJLBPK_AllUserInfo
         * @property {Array.<GameMsg_JLBPK.IJLBPK_UserInfo>|null} [UserInfo] JLBPK_AllUserInfo UserInfo
         */

        /**
         * Constructs a new JLBPK_AllUserInfo.
         * @memberof GameMsg_JLBPK
         * @classdesc Represents a JLBPK_AllUserInfo.
         * @implements IJLBPK_AllUserInfo
         * @constructor
         * @param {GameMsg_JLBPK.IJLBPK_AllUserInfo=} [properties] Properties to set
         */
        function JLBPK_AllUserInfo(properties) {
            this.UserInfo = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * JLBPK_AllUserInfo UserInfo.
         * @member {Array.<GameMsg_JLBPK.IJLBPK_UserInfo>} UserInfo
         * @memberof GameMsg_JLBPK.JLBPK_AllUserInfo
         * @instance
         */
        JLBPK_AllUserInfo.prototype.UserInfo = $util.emptyArray;

        /**
         * Creates a new JLBPK_AllUserInfo instance using the specified properties.
         * @function create
         * @memberof GameMsg_JLBPK.JLBPK_AllUserInfo
         * @static
         * @param {GameMsg_JLBPK.IJLBPK_AllUserInfo=} [properties] Properties to set
         * @returns {GameMsg_JLBPK.JLBPK_AllUserInfo} JLBPK_AllUserInfo instance
         */
        JLBPK_AllUserInfo.create = function create(properties) {
            return new JLBPK_AllUserInfo(properties);
        };

        /**
         * Encodes the specified JLBPK_AllUserInfo message. Does not implicitly {@link GameMsg_JLBPK.JLBPK_AllUserInfo.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_JLBPK.JLBPK_AllUserInfo
         * @static
         * @param {GameMsg_JLBPK.IJLBPK_AllUserInfo} message JLBPK_AllUserInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JLBPK_AllUserInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.UserInfo != null && message.UserInfo.length)
                for (var i = 0; i < message.UserInfo.length; ++i)
                    $root.GameMsg_JLBPK.JLBPK_UserInfo.encode(message.UserInfo[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified JLBPK_AllUserInfo message, length delimited. Does not implicitly {@link GameMsg_JLBPK.JLBPK_AllUserInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_JLBPK.JLBPK_AllUserInfo
         * @static
         * @param {GameMsg_JLBPK.IJLBPK_AllUserInfo} message JLBPK_AllUserInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JLBPK_AllUserInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a JLBPK_AllUserInfo message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_JLBPK.JLBPK_AllUserInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_JLBPK.JLBPK_AllUserInfo} JLBPK_AllUserInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JLBPK_AllUserInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_JLBPK.JLBPK_AllUserInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.UserInfo && message.UserInfo.length))
                        message.UserInfo = [];
                    message.UserInfo.push($root.GameMsg_JLBPK.JLBPK_UserInfo.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a JLBPK_AllUserInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_JLBPK.JLBPK_AllUserInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_JLBPK.JLBPK_AllUserInfo} JLBPK_AllUserInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JLBPK_AllUserInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a JLBPK_AllUserInfo message.
         * @function verify
         * @memberof GameMsg_JLBPK.JLBPK_AllUserInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        JLBPK_AllUserInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.UserInfo != null && message.hasOwnProperty("UserInfo")) {
                if (!Array.isArray(message.UserInfo))
                    return "UserInfo: array expected";
                for (var i = 0; i < message.UserInfo.length; ++i) {
                    var error = $root.GameMsg_JLBPK.JLBPK_UserInfo.verify(message.UserInfo[i]);
                    if (error)
                        return "UserInfo." + error;
                }
            }
            return null;
        };

        /**
         * Creates a JLBPK_AllUserInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_JLBPK.JLBPK_AllUserInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_JLBPK.JLBPK_AllUserInfo} JLBPK_AllUserInfo
         */
        JLBPK_AllUserInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_JLBPK.JLBPK_AllUserInfo)
                return object;
            var message = new $root.GameMsg_JLBPK.JLBPK_AllUserInfo();
            if (object.UserInfo) {
                if (!Array.isArray(object.UserInfo))
                    throw TypeError(".GameMsg_JLBPK.JLBPK_AllUserInfo.UserInfo: array expected");
                message.UserInfo = [];
                for (var i = 0; i < object.UserInfo.length; ++i) {
                    if (typeof object.UserInfo[i] !== "object")
                        throw TypeError(".GameMsg_JLBPK.JLBPK_AllUserInfo.UserInfo: object expected");
                    message.UserInfo[i] = $root.GameMsg_JLBPK.JLBPK_UserInfo.fromObject(object.UserInfo[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a JLBPK_AllUserInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_JLBPK.JLBPK_AllUserInfo
         * @static
         * @param {GameMsg_JLBPK.JLBPK_AllUserInfo} message JLBPK_AllUserInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        JLBPK_AllUserInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.UserInfo = [];
            if (message.UserInfo && message.UserInfo.length) {
                object.UserInfo = [];
                for (var j = 0; j < message.UserInfo.length; ++j)
                    object.UserInfo[j] = $root.GameMsg_JLBPK.JLBPK_UserInfo.toObject(message.UserInfo[j], options);
            }
            return object;
        };

        /**
         * Converts this JLBPK_AllUserInfo to JSON.
         * @function toJSON
         * @memberof GameMsg_JLBPK.JLBPK_AllUserInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        JLBPK_AllUserInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return JLBPK_AllUserInfo;
    })();

    GameMsg_JLBPK.JLBPK_UserInfo = (function() {

        /**
         * Properties of a JLBPK_UserInfo.
         * @memberof GameMsg_JLBPK
         * @interface IJLBPK_UserInfo
         * @property {number} UserID JLBPK_UserInfo UserID
         * @property {number} SeatNo JLBPK_UserInfo SeatNo
         * @property {number} State JLBPK_UserInfo State
         * @property {number|Long} Money JLBPK_UserInfo Money
         * @property {number|Long} Bet_Base JLBPK_UserInfo Bet_Base
         * @property {number|Long} Bet_Side JLBPK_UserInfo Bet_Side
         * @property {number|Long} Bet_Double JLBPK_UserInfo Bet_Double
         * @property {boolean} GetJackpot JLBPK_UserInfo GetJackpot
         * @property {number|Long} JPMoney JLBPK_UserInfo JPMoney
         * @property {number|Long} WinLoseMoney JLBPK_UserInfo WinLoseMoney
         * @property {GameMsg_JLBPK.IJLBPK_UserCards} UserCards JLBPK_UserInfo UserCards
         * @property {number|Long} TotalWinLose JLBPK_UserInfo TotalWinLose
         * @property {number} Winner JLBPK_UserInfo Winner
         * @property {number|Long} MaxBetBase JLBPK_UserInfo MaxBetBase
         * @property {number|Long|null} [ZhuangBet_Side] JLBPK_UserInfo ZhuangBet_Side
         * @property {boolean|null} [ZhuangGetJackpot] JLBPK_UserInfo ZhuangGetJackpot
         * @property {number|Long|null} [ZhuangJPMoney] JLBPK_UserInfo ZhuangJPMoney
         * @property {number|null} [FaceID] JLBPK_UserInfo FaceID
         * @property {number|Long|null} [BetBaseWinLoseMoney] JLBPK_UserInfo BetBaseWinLoseMoney
         * @property {number|Long|null} [BetDoubleWinLoseMoney] JLBPK_UserInfo BetDoubleWinLoseMoney
         */

        /**
         * Constructs a new JLBPK_UserInfo.
         * @memberof GameMsg_JLBPK
         * @classdesc Represents a JLBPK_UserInfo.
         * @implements IJLBPK_UserInfo
         * @constructor
         * @param {GameMsg_JLBPK.IJLBPK_UserInfo=} [properties] Properties to set
         */
        function JLBPK_UserInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * JLBPK_UserInfo UserID.
         * @member {number} UserID
         * @memberof GameMsg_JLBPK.JLBPK_UserInfo
         * @instance
         */
        JLBPK_UserInfo.prototype.UserID = 0;

        /**
         * JLBPK_UserInfo SeatNo.
         * @member {number} SeatNo
         * @memberof GameMsg_JLBPK.JLBPK_UserInfo
         * @instance
         */
        JLBPK_UserInfo.prototype.SeatNo = 0;

        /**
         * JLBPK_UserInfo State.
         * @member {number} State
         * @memberof GameMsg_JLBPK.JLBPK_UserInfo
         * @instance
         */
        JLBPK_UserInfo.prototype.State = 0;

        /**
         * JLBPK_UserInfo Money.
         * @member {number|Long} Money
         * @memberof GameMsg_JLBPK.JLBPK_UserInfo
         * @instance
         */
        JLBPK_UserInfo.prototype.Money = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * JLBPK_UserInfo Bet_Base.
         * @member {number|Long} Bet_Base
         * @memberof GameMsg_JLBPK.JLBPK_UserInfo
         * @instance
         */
        JLBPK_UserInfo.prototype.Bet_Base = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * JLBPK_UserInfo Bet_Side.
         * @member {number|Long} Bet_Side
         * @memberof GameMsg_JLBPK.JLBPK_UserInfo
         * @instance
         */
        JLBPK_UserInfo.prototype.Bet_Side = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * JLBPK_UserInfo Bet_Double.
         * @member {number|Long} Bet_Double
         * @memberof GameMsg_JLBPK.JLBPK_UserInfo
         * @instance
         */
        JLBPK_UserInfo.prototype.Bet_Double = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * JLBPK_UserInfo GetJackpot.
         * @member {boolean} GetJackpot
         * @memberof GameMsg_JLBPK.JLBPK_UserInfo
         * @instance
         */
        JLBPK_UserInfo.prototype.GetJackpot = false;

        /**
         * JLBPK_UserInfo JPMoney.
         * @member {number|Long} JPMoney
         * @memberof GameMsg_JLBPK.JLBPK_UserInfo
         * @instance
         */
        JLBPK_UserInfo.prototype.JPMoney = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * JLBPK_UserInfo WinLoseMoney.
         * @member {number|Long} WinLoseMoney
         * @memberof GameMsg_JLBPK.JLBPK_UserInfo
         * @instance
         */
        JLBPK_UserInfo.prototype.WinLoseMoney = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * JLBPK_UserInfo UserCards.
         * @member {GameMsg_JLBPK.IJLBPK_UserCards} UserCards
         * @memberof GameMsg_JLBPK.JLBPK_UserInfo
         * @instance
         */
        JLBPK_UserInfo.prototype.UserCards = null;

        /**
         * JLBPK_UserInfo TotalWinLose.
         * @member {number|Long} TotalWinLose
         * @memberof GameMsg_JLBPK.JLBPK_UserInfo
         * @instance
         */
        JLBPK_UserInfo.prototype.TotalWinLose = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * JLBPK_UserInfo Winner.
         * @member {number} Winner
         * @memberof GameMsg_JLBPK.JLBPK_UserInfo
         * @instance
         */
        JLBPK_UserInfo.prototype.Winner = 0;

        /**
         * JLBPK_UserInfo MaxBetBase.
         * @member {number|Long} MaxBetBase
         * @memberof GameMsg_JLBPK.JLBPK_UserInfo
         * @instance
         */
        JLBPK_UserInfo.prototype.MaxBetBase = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * JLBPK_UserInfo ZhuangBet_Side.
         * @member {number|Long} ZhuangBet_Side
         * @memberof GameMsg_JLBPK.JLBPK_UserInfo
         * @instance
         */
        JLBPK_UserInfo.prototype.ZhuangBet_Side = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * JLBPK_UserInfo ZhuangGetJackpot.
         * @member {boolean} ZhuangGetJackpot
         * @memberof GameMsg_JLBPK.JLBPK_UserInfo
         * @instance
         */
        JLBPK_UserInfo.prototype.ZhuangGetJackpot = false;

        /**
         * JLBPK_UserInfo ZhuangJPMoney.
         * @member {number|Long} ZhuangJPMoney
         * @memberof GameMsg_JLBPK.JLBPK_UserInfo
         * @instance
         */
        JLBPK_UserInfo.prototype.ZhuangJPMoney = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * JLBPK_UserInfo FaceID.
         * @member {number} FaceID
         * @memberof GameMsg_JLBPK.JLBPK_UserInfo
         * @instance
         */
        JLBPK_UserInfo.prototype.FaceID = 0;

        /**
         * JLBPK_UserInfo BetBaseWinLoseMoney.
         * @member {number|Long} BetBaseWinLoseMoney
         * @memberof GameMsg_JLBPK.JLBPK_UserInfo
         * @instance
         */
        JLBPK_UserInfo.prototype.BetBaseWinLoseMoney = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * JLBPK_UserInfo BetDoubleWinLoseMoney.
         * @member {number|Long} BetDoubleWinLoseMoney
         * @memberof GameMsg_JLBPK.JLBPK_UserInfo
         * @instance
         */
        JLBPK_UserInfo.prototype.BetDoubleWinLoseMoney = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new JLBPK_UserInfo instance using the specified properties.
         * @function create
         * @memberof GameMsg_JLBPK.JLBPK_UserInfo
         * @static
         * @param {GameMsg_JLBPK.IJLBPK_UserInfo=} [properties] Properties to set
         * @returns {GameMsg_JLBPK.JLBPK_UserInfo} JLBPK_UserInfo instance
         */
        JLBPK_UserInfo.create = function create(properties) {
            return new JLBPK_UserInfo(properties);
        };

        /**
         * Encodes the specified JLBPK_UserInfo message. Does not implicitly {@link GameMsg_JLBPK.JLBPK_UserInfo.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_JLBPK.JLBPK_UserInfo
         * @static
         * @param {GameMsg_JLBPK.IJLBPK_UserInfo} message JLBPK_UserInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JLBPK_UserInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.UserID);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.SeatNo);
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.State);
            writer.uint32(/* id 4, wireType 0 =*/32).int64(message.Money);
            writer.uint32(/* id 5, wireType 0 =*/40).int64(message.Bet_Base);
            writer.uint32(/* id 6, wireType 0 =*/48).int64(message.Bet_Side);
            writer.uint32(/* id 7, wireType 0 =*/56).int64(message.Bet_Double);
            writer.uint32(/* id 8, wireType 0 =*/64).bool(message.GetJackpot);
            writer.uint32(/* id 9, wireType 0 =*/72).int64(message.JPMoney);
            writer.uint32(/* id 10, wireType 0 =*/80).int64(message.WinLoseMoney);
            $root.GameMsg_JLBPK.JLBPK_UserCards.encode(message.UserCards, writer.uint32(/* id 11, wireType 2 =*/90).fork()).ldelim();
            writer.uint32(/* id 12, wireType 0 =*/96).int64(message.TotalWinLose);
            writer.uint32(/* id 13, wireType 0 =*/104).int32(message.Winner);
            writer.uint32(/* id 14, wireType 0 =*/112).int64(message.MaxBetBase);
            if (message.ZhuangBet_Side != null && message.hasOwnProperty("ZhuangBet_Side"))
                writer.uint32(/* id 15, wireType 0 =*/120).int64(message.ZhuangBet_Side);
            if (message.ZhuangGetJackpot != null && message.hasOwnProperty("ZhuangGetJackpot"))
                writer.uint32(/* id 16, wireType 0 =*/128).bool(message.ZhuangGetJackpot);
            if (message.ZhuangJPMoney != null && message.hasOwnProperty("ZhuangJPMoney"))
                writer.uint32(/* id 17, wireType 0 =*/136).int64(message.ZhuangJPMoney);
            if (message.FaceID != null && message.hasOwnProperty("FaceID"))
                writer.uint32(/* id 18, wireType 0 =*/144).int32(message.FaceID);
            if (message.BetBaseWinLoseMoney != null && message.hasOwnProperty("BetBaseWinLoseMoney"))
                writer.uint32(/* id 19, wireType 0 =*/152).int64(message.BetBaseWinLoseMoney);
            if (message.BetDoubleWinLoseMoney != null && message.hasOwnProperty("BetDoubleWinLoseMoney"))
                writer.uint32(/* id 20, wireType 0 =*/160).int64(message.BetDoubleWinLoseMoney);
            return writer;
        };

        /**
         * Encodes the specified JLBPK_UserInfo message, length delimited. Does not implicitly {@link GameMsg_JLBPK.JLBPK_UserInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_JLBPK.JLBPK_UserInfo
         * @static
         * @param {GameMsg_JLBPK.IJLBPK_UserInfo} message JLBPK_UserInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JLBPK_UserInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a JLBPK_UserInfo message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_JLBPK.JLBPK_UserInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_JLBPK.JLBPK_UserInfo} JLBPK_UserInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JLBPK_UserInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_JLBPK.JLBPK_UserInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.UserID = reader.int32();
                    break;
                case 2:
                    message.SeatNo = reader.int32();
                    break;
                case 3:
                    message.State = reader.int32();
                    break;
                case 4:
                    message.Money = reader.int64();
                    break;
                case 5:
                    message.Bet_Base = reader.int64();
                    break;
                case 6:
                    message.Bet_Side = reader.int64();
                    break;
                case 7:
                    message.Bet_Double = reader.int64();
                    break;
                case 8:
                    message.GetJackpot = reader.bool();
                    break;
                case 9:
                    message.JPMoney = reader.int64();
                    break;
                case 10:
                    message.WinLoseMoney = reader.int64();
                    break;
                case 11:
                    message.UserCards = $root.GameMsg_JLBPK.JLBPK_UserCards.decode(reader, reader.uint32());
                    break;
                case 12:
                    message.TotalWinLose = reader.int64();
                    break;
                case 13:
                    message.Winner = reader.int32();
                    break;
                case 14:
                    message.MaxBetBase = reader.int64();
                    break;
                case 15:
                    message.ZhuangBet_Side = reader.int64();
                    break;
                case 16:
                    message.ZhuangGetJackpot = reader.bool();
                    break;
                case 17:
                    message.ZhuangJPMoney = reader.int64();
                    break;
                case 18:
                    message.FaceID = reader.int32();
                    break;
                case 19:
                    message.BetBaseWinLoseMoney = reader.int64();
                    break;
                case 20:
                    message.BetDoubleWinLoseMoney = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("UserID"))
                throw $util.ProtocolError("missing required 'UserID'", { instance: message });
            if (!message.hasOwnProperty("SeatNo"))
                throw $util.ProtocolError("missing required 'SeatNo'", { instance: message });
            if (!message.hasOwnProperty("State"))
                throw $util.ProtocolError("missing required 'State'", { instance: message });
            if (!message.hasOwnProperty("Money"))
                throw $util.ProtocolError("missing required 'Money'", { instance: message });
            if (!message.hasOwnProperty("Bet_Base"))
                throw $util.ProtocolError("missing required 'Bet_Base'", { instance: message });
            if (!message.hasOwnProperty("Bet_Side"))
                throw $util.ProtocolError("missing required 'Bet_Side'", { instance: message });
            if (!message.hasOwnProperty("Bet_Double"))
                throw $util.ProtocolError("missing required 'Bet_Double'", { instance: message });
            if (!message.hasOwnProperty("GetJackpot"))
                throw $util.ProtocolError("missing required 'GetJackpot'", { instance: message });
            if (!message.hasOwnProperty("JPMoney"))
                throw $util.ProtocolError("missing required 'JPMoney'", { instance: message });
            if (!message.hasOwnProperty("WinLoseMoney"))
                throw $util.ProtocolError("missing required 'WinLoseMoney'", { instance: message });
            if (!message.hasOwnProperty("UserCards"))
                throw $util.ProtocolError("missing required 'UserCards'", { instance: message });
            if (!message.hasOwnProperty("TotalWinLose"))
                throw $util.ProtocolError("missing required 'TotalWinLose'", { instance: message });
            if (!message.hasOwnProperty("Winner"))
                throw $util.ProtocolError("missing required 'Winner'", { instance: message });
            if (!message.hasOwnProperty("MaxBetBase"))
                throw $util.ProtocolError("missing required 'MaxBetBase'", { instance: message });
            return message;
        };

        /**
         * Decodes a JLBPK_UserInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_JLBPK.JLBPK_UserInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_JLBPK.JLBPK_UserInfo} JLBPK_UserInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JLBPK_UserInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a JLBPK_UserInfo message.
         * @function verify
         * @memberof GameMsg_JLBPK.JLBPK_UserInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        JLBPK_UserInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.UserID))
                return "UserID: integer expected";
            if (!$util.isInteger(message.SeatNo))
                return "SeatNo: integer expected";
            if (!$util.isInteger(message.State))
                return "State: integer expected";
            if (!$util.isInteger(message.Money) && !(message.Money && $util.isInteger(message.Money.low) && $util.isInteger(message.Money.high)))
                return "Money: integer|Long expected";
            if (!$util.isInteger(message.Bet_Base) && !(message.Bet_Base && $util.isInteger(message.Bet_Base.low) && $util.isInteger(message.Bet_Base.high)))
                return "Bet_Base: integer|Long expected";
            if (!$util.isInteger(message.Bet_Side) && !(message.Bet_Side && $util.isInteger(message.Bet_Side.low) && $util.isInteger(message.Bet_Side.high)))
                return "Bet_Side: integer|Long expected";
            if (!$util.isInteger(message.Bet_Double) && !(message.Bet_Double && $util.isInteger(message.Bet_Double.low) && $util.isInteger(message.Bet_Double.high)))
                return "Bet_Double: integer|Long expected";
            if (typeof message.GetJackpot !== "boolean")
                return "GetJackpot: boolean expected";
            if (!$util.isInteger(message.JPMoney) && !(message.JPMoney && $util.isInteger(message.JPMoney.low) && $util.isInteger(message.JPMoney.high)))
                return "JPMoney: integer|Long expected";
            if (!$util.isInteger(message.WinLoseMoney) && !(message.WinLoseMoney && $util.isInteger(message.WinLoseMoney.low) && $util.isInteger(message.WinLoseMoney.high)))
                return "WinLoseMoney: integer|Long expected";
            {
                var error = $root.GameMsg_JLBPK.JLBPK_UserCards.verify(message.UserCards);
                if (error)
                    return "UserCards." + error;
            }
            if (!$util.isInteger(message.TotalWinLose) && !(message.TotalWinLose && $util.isInteger(message.TotalWinLose.low) && $util.isInteger(message.TotalWinLose.high)))
                return "TotalWinLose: integer|Long expected";
            if (!$util.isInteger(message.Winner))
                return "Winner: integer expected";
            if (!$util.isInteger(message.MaxBetBase) && !(message.MaxBetBase && $util.isInteger(message.MaxBetBase.low) && $util.isInteger(message.MaxBetBase.high)))
                return "MaxBetBase: integer|Long expected";
            if (message.ZhuangBet_Side != null && message.hasOwnProperty("ZhuangBet_Side"))
                if (!$util.isInteger(message.ZhuangBet_Side) && !(message.ZhuangBet_Side && $util.isInteger(message.ZhuangBet_Side.low) && $util.isInteger(message.ZhuangBet_Side.high)))
                    return "ZhuangBet_Side: integer|Long expected";
            if (message.ZhuangGetJackpot != null && message.hasOwnProperty("ZhuangGetJackpot"))
                if (typeof message.ZhuangGetJackpot !== "boolean")
                    return "ZhuangGetJackpot: boolean expected";
            if (message.ZhuangJPMoney != null && message.hasOwnProperty("ZhuangJPMoney"))
                if (!$util.isInteger(message.ZhuangJPMoney) && !(message.ZhuangJPMoney && $util.isInteger(message.ZhuangJPMoney.low) && $util.isInteger(message.ZhuangJPMoney.high)))
                    return "ZhuangJPMoney: integer|Long expected";
            if (message.FaceID != null && message.hasOwnProperty("FaceID"))
                if (!$util.isInteger(message.FaceID))
                    return "FaceID: integer expected";
            if (message.BetBaseWinLoseMoney != null && message.hasOwnProperty("BetBaseWinLoseMoney"))
                if (!$util.isInteger(message.BetBaseWinLoseMoney) && !(message.BetBaseWinLoseMoney && $util.isInteger(message.BetBaseWinLoseMoney.low) && $util.isInteger(message.BetBaseWinLoseMoney.high)))
                    return "BetBaseWinLoseMoney: integer|Long expected";
            if (message.BetDoubleWinLoseMoney != null && message.hasOwnProperty("BetDoubleWinLoseMoney"))
                if (!$util.isInteger(message.BetDoubleWinLoseMoney) && !(message.BetDoubleWinLoseMoney && $util.isInteger(message.BetDoubleWinLoseMoney.low) && $util.isInteger(message.BetDoubleWinLoseMoney.high)))
                    return "BetDoubleWinLoseMoney: integer|Long expected";
            return null;
        };

        /**
         * Creates a JLBPK_UserInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_JLBPK.JLBPK_UserInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_JLBPK.JLBPK_UserInfo} JLBPK_UserInfo
         */
        JLBPK_UserInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_JLBPK.JLBPK_UserInfo)
                return object;
            var message = new $root.GameMsg_JLBPK.JLBPK_UserInfo();
            if (object.UserID != null)
                message.UserID = object.UserID | 0;
            if (object.SeatNo != null)
                message.SeatNo = object.SeatNo | 0;
            if (object.State != null)
                message.State = object.State | 0;
            if (object.Money != null)
                if ($util.Long)
                    (message.Money = $util.Long.fromValue(object.Money)).unsigned = false;
                else if (typeof object.Money === "string")
                    message.Money = parseInt(object.Money, 10);
                else if (typeof object.Money === "number")
                    message.Money = object.Money;
                else if (typeof object.Money === "object")
                    message.Money = new $util.LongBits(object.Money.low >>> 0, object.Money.high >>> 0).toNumber();
            if (object.Bet_Base != null)
                if ($util.Long)
                    (message.Bet_Base = $util.Long.fromValue(object.Bet_Base)).unsigned = false;
                else if (typeof object.Bet_Base === "string")
                    message.Bet_Base = parseInt(object.Bet_Base, 10);
                else if (typeof object.Bet_Base === "number")
                    message.Bet_Base = object.Bet_Base;
                else if (typeof object.Bet_Base === "object")
                    message.Bet_Base = new $util.LongBits(object.Bet_Base.low >>> 0, object.Bet_Base.high >>> 0).toNumber();
            if (object.Bet_Side != null)
                if ($util.Long)
                    (message.Bet_Side = $util.Long.fromValue(object.Bet_Side)).unsigned = false;
                else if (typeof object.Bet_Side === "string")
                    message.Bet_Side = parseInt(object.Bet_Side, 10);
                else if (typeof object.Bet_Side === "number")
                    message.Bet_Side = object.Bet_Side;
                else if (typeof object.Bet_Side === "object")
                    message.Bet_Side = new $util.LongBits(object.Bet_Side.low >>> 0, object.Bet_Side.high >>> 0).toNumber();
            if (object.Bet_Double != null)
                if ($util.Long)
                    (message.Bet_Double = $util.Long.fromValue(object.Bet_Double)).unsigned = false;
                else if (typeof object.Bet_Double === "string")
                    message.Bet_Double = parseInt(object.Bet_Double, 10);
                else if (typeof object.Bet_Double === "number")
                    message.Bet_Double = object.Bet_Double;
                else if (typeof object.Bet_Double === "object")
                    message.Bet_Double = new $util.LongBits(object.Bet_Double.low >>> 0, object.Bet_Double.high >>> 0).toNumber();
            if (object.GetJackpot != null)
                message.GetJackpot = Boolean(object.GetJackpot);
            if (object.JPMoney != null)
                if ($util.Long)
                    (message.JPMoney = $util.Long.fromValue(object.JPMoney)).unsigned = false;
                else if (typeof object.JPMoney === "string")
                    message.JPMoney = parseInt(object.JPMoney, 10);
                else if (typeof object.JPMoney === "number")
                    message.JPMoney = object.JPMoney;
                else if (typeof object.JPMoney === "object")
                    message.JPMoney = new $util.LongBits(object.JPMoney.low >>> 0, object.JPMoney.high >>> 0).toNumber();
            if (object.WinLoseMoney != null)
                if ($util.Long)
                    (message.WinLoseMoney = $util.Long.fromValue(object.WinLoseMoney)).unsigned = false;
                else if (typeof object.WinLoseMoney === "string")
                    message.WinLoseMoney = parseInt(object.WinLoseMoney, 10);
                else if (typeof object.WinLoseMoney === "number")
                    message.WinLoseMoney = object.WinLoseMoney;
                else if (typeof object.WinLoseMoney === "object")
                    message.WinLoseMoney = new $util.LongBits(object.WinLoseMoney.low >>> 0, object.WinLoseMoney.high >>> 0).toNumber();
            if (object.UserCards != null) {
                if (typeof object.UserCards !== "object")
                    throw TypeError(".GameMsg_JLBPK.JLBPK_UserInfo.UserCards: object expected");
                message.UserCards = $root.GameMsg_JLBPK.JLBPK_UserCards.fromObject(object.UserCards);
            }
            if (object.TotalWinLose != null)
                if ($util.Long)
                    (message.TotalWinLose = $util.Long.fromValue(object.TotalWinLose)).unsigned = false;
                else if (typeof object.TotalWinLose === "string")
                    message.TotalWinLose = parseInt(object.TotalWinLose, 10);
                else if (typeof object.TotalWinLose === "number")
                    message.TotalWinLose = object.TotalWinLose;
                else if (typeof object.TotalWinLose === "object")
                    message.TotalWinLose = new $util.LongBits(object.TotalWinLose.low >>> 0, object.TotalWinLose.high >>> 0).toNumber();
            if (object.Winner != null)
                message.Winner = object.Winner | 0;
            if (object.MaxBetBase != null)
                if ($util.Long)
                    (message.MaxBetBase = $util.Long.fromValue(object.MaxBetBase)).unsigned = false;
                else if (typeof object.MaxBetBase === "string")
                    message.MaxBetBase = parseInt(object.MaxBetBase, 10);
                else if (typeof object.MaxBetBase === "number")
                    message.MaxBetBase = object.MaxBetBase;
                else if (typeof object.MaxBetBase === "object")
                    message.MaxBetBase = new $util.LongBits(object.MaxBetBase.low >>> 0, object.MaxBetBase.high >>> 0).toNumber();
            if (object.ZhuangBet_Side != null)
                if ($util.Long)
                    (message.ZhuangBet_Side = $util.Long.fromValue(object.ZhuangBet_Side)).unsigned = false;
                else if (typeof object.ZhuangBet_Side === "string")
                    message.ZhuangBet_Side = parseInt(object.ZhuangBet_Side, 10);
                else if (typeof object.ZhuangBet_Side === "number")
                    message.ZhuangBet_Side = object.ZhuangBet_Side;
                else if (typeof object.ZhuangBet_Side === "object")
                    message.ZhuangBet_Side = new $util.LongBits(object.ZhuangBet_Side.low >>> 0, object.ZhuangBet_Side.high >>> 0).toNumber();
            if (object.ZhuangGetJackpot != null)
                message.ZhuangGetJackpot = Boolean(object.ZhuangGetJackpot);
            if (object.ZhuangJPMoney != null)
                if ($util.Long)
                    (message.ZhuangJPMoney = $util.Long.fromValue(object.ZhuangJPMoney)).unsigned = false;
                else if (typeof object.ZhuangJPMoney === "string")
                    message.ZhuangJPMoney = parseInt(object.ZhuangJPMoney, 10);
                else if (typeof object.ZhuangJPMoney === "number")
                    message.ZhuangJPMoney = object.ZhuangJPMoney;
                else if (typeof object.ZhuangJPMoney === "object")
                    message.ZhuangJPMoney = new $util.LongBits(object.ZhuangJPMoney.low >>> 0, object.ZhuangJPMoney.high >>> 0).toNumber();
            if (object.FaceID != null)
                message.FaceID = object.FaceID | 0;
            if (object.BetBaseWinLoseMoney != null)
                if ($util.Long)
                    (message.BetBaseWinLoseMoney = $util.Long.fromValue(object.BetBaseWinLoseMoney)).unsigned = false;
                else if (typeof object.BetBaseWinLoseMoney === "string")
                    message.BetBaseWinLoseMoney = parseInt(object.BetBaseWinLoseMoney, 10);
                else if (typeof object.BetBaseWinLoseMoney === "number")
                    message.BetBaseWinLoseMoney = object.BetBaseWinLoseMoney;
                else if (typeof object.BetBaseWinLoseMoney === "object")
                    message.BetBaseWinLoseMoney = new $util.LongBits(object.BetBaseWinLoseMoney.low >>> 0, object.BetBaseWinLoseMoney.high >>> 0).toNumber();
            if (object.BetDoubleWinLoseMoney != null)
                if ($util.Long)
                    (message.BetDoubleWinLoseMoney = $util.Long.fromValue(object.BetDoubleWinLoseMoney)).unsigned = false;
                else if (typeof object.BetDoubleWinLoseMoney === "string")
                    message.BetDoubleWinLoseMoney = parseInt(object.BetDoubleWinLoseMoney, 10);
                else if (typeof object.BetDoubleWinLoseMoney === "number")
                    message.BetDoubleWinLoseMoney = object.BetDoubleWinLoseMoney;
                else if (typeof object.BetDoubleWinLoseMoney === "object")
                    message.BetDoubleWinLoseMoney = new $util.LongBits(object.BetDoubleWinLoseMoney.low >>> 0, object.BetDoubleWinLoseMoney.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a JLBPK_UserInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_JLBPK.JLBPK_UserInfo
         * @static
         * @param {GameMsg_JLBPK.JLBPK_UserInfo} message JLBPK_UserInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        JLBPK_UserInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.UserID = 0;
                object.SeatNo = 0;
                object.State = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.Money = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.Money = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.Bet_Base = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.Bet_Base = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.Bet_Side = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.Bet_Side = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.Bet_Double = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.Bet_Double = options.longs === String ? "0" : 0;
                object.GetJackpot = false;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.JPMoney = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.JPMoney = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.WinLoseMoney = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.WinLoseMoney = options.longs === String ? "0" : 0;
                object.UserCards = null;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.TotalWinLose = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.TotalWinLose = options.longs === String ? "0" : 0;
                object.Winner = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.MaxBetBase = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.MaxBetBase = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.ZhuangBet_Side = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.ZhuangBet_Side = options.longs === String ? "0" : 0;
                object.ZhuangGetJackpot = false;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.ZhuangJPMoney = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.ZhuangJPMoney = options.longs === String ? "0" : 0;
                object.FaceID = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.BetBaseWinLoseMoney = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.BetBaseWinLoseMoney = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.BetDoubleWinLoseMoney = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.BetDoubleWinLoseMoney = options.longs === String ? "0" : 0;
            }
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                object.UserID = message.UserID;
            if (message.SeatNo != null && message.hasOwnProperty("SeatNo"))
                object.SeatNo = message.SeatNo;
            if (message.State != null && message.hasOwnProperty("State"))
                object.State = message.State;
            if (message.Money != null && message.hasOwnProperty("Money"))
                if (typeof message.Money === "number")
                    object.Money = options.longs === String ? String(message.Money) : message.Money;
                else
                    object.Money = options.longs === String ? $util.Long.prototype.toString.call(message.Money) : options.longs === Number ? new $util.LongBits(message.Money.low >>> 0, message.Money.high >>> 0).toNumber() : message.Money;
            if (message.Bet_Base != null && message.hasOwnProperty("Bet_Base"))
                if (typeof message.Bet_Base === "number")
                    object.Bet_Base = options.longs === String ? String(message.Bet_Base) : message.Bet_Base;
                else
                    object.Bet_Base = options.longs === String ? $util.Long.prototype.toString.call(message.Bet_Base) : options.longs === Number ? new $util.LongBits(message.Bet_Base.low >>> 0, message.Bet_Base.high >>> 0).toNumber() : message.Bet_Base;
            if (message.Bet_Side != null && message.hasOwnProperty("Bet_Side"))
                if (typeof message.Bet_Side === "number")
                    object.Bet_Side = options.longs === String ? String(message.Bet_Side) : message.Bet_Side;
                else
                    object.Bet_Side = options.longs === String ? $util.Long.prototype.toString.call(message.Bet_Side) : options.longs === Number ? new $util.LongBits(message.Bet_Side.low >>> 0, message.Bet_Side.high >>> 0).toNumber() : message.Bet_Side;
            if (message.Bet_Double != null && message.hasOwnProperty("Bet_Double"))
                if (typeof message.Bet_Double === "number")
                    object.Bet_Double = options.longs === String ? String(message.Bet_Double) : message.Bet_Double;
                else
                    object.Bet_Double = options.longs === String ? $util.Long.prototype.toString.call(message.Bet_Double) : options.longs === Number ? new $util.LongBits(message.Bet_Double.low >>> 0, message.Bet_Double.high >>> 0).toNumber() : message.Bet_Double;
            if (message.GetJackpot != null && message.hasOwnProperty("GetJackpot"))
                object.GetJackpot = message.GetJackpot;
            if (message.JPMoney != null && message.hasOwnProperty("JPMoney"))
                if (typeof message.JPMoney === "number")
                    object.JPMoney = options.longs === String ? String(message.JPMoney) : message.JPMoney;
                else
                    object.JPMoney = options.longs === String ? $util.Long.prototype.toString.call(message.JPMoney) : options.longs === Number ? new $util.LongBits(message.JPMoney.low >>> 0, message.JPMoney.high >>> 0).toNumber() : message.JPMoney;
            if (message.WinLoseMoney != null && message.hasOwnProperty("WinLoseMoney"))
                if (typeof message.WinLoseMoney === "number")
                    object.WinLoseMoney = options.longs === String ? String(message.WinLoseMoney) : message.WinLoseMoney;
                else
                    object.WinLoseMoney = options.longs === String ? $util.Long.prototype.toString.call(message.WinLoseMoney) : options.longs === Number ? new $util.LongBits(message.WinLoseMoney.low >>> 0, message.WinLoseMoney.high >>> 0).toNumber() : message.WinLoseMoney;
            if (message.UserCards != null && message.hasOwnProperty("UserCards"))
                object.UserCards = $root.GameMsg_JLBPK.JLBPK_UserCards.toObject(message.UserCards, options);
            if (message.TotalWinLose != null && message.hasOwnProperty("TotalWinLose"))
                if (typeof message.TotalWinLose === "number")
                    object.TotalWinLose = options.longs === String ? String(message.TotalWinLose) : message.TotalWinLose;
                else
                    object.TotalWinLose = options.longs === String ? $util.Long.prototype.toString.call(message.TotalWinLose) : options.longs === Number ? new $util.LongBits(message.TotalWinLose.low >>> 0, message.TotalWinLose.high >>> 0).toNumber() : message.TotalWinLose;
            if (message.Winner != null && message.hasOwnProperty("Winner"))
                object.Winner = message.Winner;
            if (message.MaxBetBase != null && message.hasOwnProperty("MaxBetBase"))
                if (typeof message.MaxBetBase === "number")
                    object.MaxBetBase = options.longs === String ? String(message.MaxBetBase) : message.MaxBetBase;
                else
                    object.MaxBetBase = options.longs === String ? $util.Long.prototype.toString.call(message.MaxBetBase) : options.longs === Number ? new $util.LongBits(message.MaxBetBase.low >>> 0, message.MaxBetBase.high >>> 0).toNumber() : message.MaxBetBase;
            if (message.ZhuangBet_Side != null && message.hasOwnProperty("ZhuangBet_Side"))
                if (typeof message.ZhuangBet_Side === "number")
                    object.ZhuangBet_Side = options.longs === String ? String(message.ZhuangBet_Side) : message.ZhuangBet_Side;
                else
                    object.ZhuangBet_Side = options.longs === String ? $util.Long.prototype.toString.call(message.ZhuangBet_Side) : options.longs === Number ? new $util.LongBits(message.ZhuangBet_Side.low >>> 0, message.ZhuangBet_Side.high >>> 0).toNumber() : message.ZhuangBet_Side;
            if (message.ZhuangGetJackpot != null && message.hasOwnProperty("ZhuangGetJackpot"))
                object.ZhuangGetJackpot = message.ZhuangGetJackpot;
            if (message.ZhuangJPMoney != null && message.hasOwnProperty("ZhuangJPMoney"))
                if (typeof message.ZhuangJPMoney === "number")
                    object.ZhuangJPMoney = options.longs === String ? String(message.ZhuangJPMoney) : message.ZhuangJPMoney;
                else
                    object.ZhuangJPMoney = options.longs === String ? $util.Long.prototype.toString.call(message.ZhuangJPMoney) : options.longs === Number ? new $util.LongBits(message.ZhuangJPMoney.low >>> 0, message.ZhuangJPMoney.high >>> 0).toNumber() : message.ZhuangJPMoney;
            if (message.FaceID != null && message.hasOwnProperty("FaceID"))
                object.FaceID = message.FaceID;
            if (message.BetBaseWinLoseMoney != null && message.hasOwnProperty("BetBaseWinLoseMoney"))
                if (typeof message.BetBaseWinLoseMoney === "number")
                    object.BetBaseWinLoseMoney = options.longs === String ? String(message.BetBaseWinLoseMoney) : message.BetBaseWinLoseMoney;
                else
                    object.BetBaseWinLoseMoney = options.longs === String ? $util.Long.prototype.toString.call(message.BetBaseWinLoseMoney) : options.longs === Number ? new $util.LongBits(message.BetBaseWinLoseMoney.low >>> 0, message.BetBaseWinLoseMoney.high >>> 0).toNumber() : message.BetBaseWinLoseMoney;
            if (message.BetDoubleWinLoseMoney != null && message.hasOwnProperty("BetDoubleWinLoseMoney"))
                if (typeof message.BetDoubleWinLoseMoney === "number")
                    object.BetDoubleWinLoseMoney = options.longs === String ? String(message.BetDoubleWinLoseMoney) : message.BetDoubleWinLoseMoney;
                else
                    object.BetDoubleWinLoseMoney = options.longs === String ? $util.Long.prototype.toString.call(message.BetDoubleWinLoseMoney) : options.longs === Number ? new $util.LongBits(message.BetDoubleWinLoseMoney.low >>> 0, message.BetDoubleWinLoseMoney.high >>> 0).toNumber() : message.BetDoubleWinLoseMoney;
            return object;
        };

        /**
         * Converts this JLBPK_UserInfo to JSON.
         * @function toJSON
         * @memberof GameMsg_JLBPK.JLBPK_UserInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        JLBPK_UserInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return JLBPK_UserInfo;
    })();

    GameMsg_JLBPK.JLBPK_PokerCard = (function() {

        /**
         * Properties of a JLBPK_PokerCard.
         * @memberof GameMsg_JLBPK
         * @interface IJLBPK_PokerCard
         * @property {number} Color JLBPK_PokerCard Color
         * @property {number} CardNumber JLBPK_PokerCard CardNumber
         */

        /**
         * Constructs a new JLBPK_PokerCard.
         * @memberof GameMsg_JLBPK
         * @classdesc Represents a JLBPK_PokerCard.
         * @implements IJLBPK_PokerCard
         * @constructor
         * @param {GameMsg_JLBPK.IJLBPK_PokerCard=} [properties] Properties to set
         */
        function JLBPK_PokerCard(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * JLBPK_PokerCard Color.
         * @member {number} Color
         * @memberof GameMsg_JLBPK.JLBPK_PokerCard
         * @instance
         */
        JLBPK_PokerCard.prototype.Color = 0;

        /**
         * JLBPK_PokerCard CardNumber.
         * @member {number} CardNumber
         * @memberof GameMsg_JLBPK.JLBPK_PokerCard
         * @instance
         */
        JLBPK_PokerCard.prototype.CardNumber = 0;

        /**
         * Creates a new JLBPK_PokerCard instance using the specified properties.
         * @function create
         * @memberof GameMsg_JLBPK.JLBPK_PokerCard
         * @static
         * @param {GameMsg_JLBPK.IJLBPK_PokerCard=} [properties] Properties to set
         * @returns {GameMsg_JLBPK.JLBPK_PokerCard} JLBPK_PokerCard instance
         */
        JLBPK_PokerCard.create = function create(properties) {
            return new JLBPK_PokerCard(properties);
        };

        /**
         * Encodes the specified JLBPK_PokerCard message. Does not implicitly {@link GameMsg_JLBPK.JLBPK_PokerCard.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_JLBPK.JLBPK_PokerCard
         * @static
         * @param {GameMsg_JLBPK.IJLBPK_PokerCard} message JLBPK_PokerCard message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JLBPK_PokerCard.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.Color);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.CardNumber);
            return writer;
        };

        /**
         * Encodes the specified JLBPK_PokerCard message, length delimited. Does not implicitly {@link GameMsg_JLBPK.JLBPK_PokerCard.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_JLBPK.JLBPK_PokerCard
         * @static
         * @param {GameMsg_JLBPK.IJLBPK_PokerCard} message JLBPK_PokerCard message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JLBPK_PokerCard.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a JLBPK_PokerCard message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_JLBPK.JLBPK_PokerCard
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_JLBPK.JLBPK_PokerCard} JLBPK_PokerCard
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JLBPK_PokerCard.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_JLBPK.JLBPK_PokerCard();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Color = reader.int32();
                    break;
                case 2:
                    message.CardNumber = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("Color"))
                throw $util.ProtocolError("missing required 'Color'", { instance: message });
            if (!message.hasOwnProperty("CardNumber"))
                throw $util.ProtocolError("missing required 'CardNumber'", { instance: message });
            return message;
        };

        /**
         * Decodes a JLBPK_PokerCard message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_JLBPK.JLBPK_PokerCard
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_JLBPK.JLBPK_PokerCard} JLBPK_PokerCard
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JLBPK_PokerCard.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a JLBPK_PokerCard message.
         * @function verify
         * @memberof GameMsg_JLBPK.JLBPK_PokerCard
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        JLBPK_PokerCard.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.Color))
                return "Color: integer expected";
            if (!$util.isInteger(message.CardNumber))
                return "CardNumber: integer expected";
            return null;
        };

        /**
         * Creates a JLBPK_PokerCard message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_JLBPK.JLBPK_PokerCard
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_JLBPK.JLBPK_PokerCard} JLBPK_PokerCard
         */
        JLBPK_PokerCard.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_JLBPK.JLBPK_PokerCard)
                return object;
            var message = new $root.GameMsg_JLBPK.JLBPK_PokerCard();
            if (object.Color != null)
                message.Color = object.Color | 0;
            if (object.CardNumber != null)
                message.CardNumber = object.CardNumber | 0;
            return message;
        };

        /**
         * Creates a plain object from a JLBPK_PokerCard message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_JLBPK.JLBPK_PokerCard
         * @static
         * @param {GameMsg_JLBPK.JLBPK_PokerCard} message JLBPK_PokerCard
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        JLBPK_PokerCard.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.Color = 0;
                object.CardNumber = 0;
            }
            if (message.Color != null && message.hasOwnProperty("Color"))
                object.Color = message.Color;
            if (message.CardNumber != null && message.hasOwnProperty("CardNumber"))
                object.CardNumber = message.CardNumber;
            return object;
        };

        /**
         * Converts this JLBPK_PokerCard to JSON.
         * @function toJSON
         * @memberof GameMsg_JLBPK.JLBPK_PokerCard
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        JLBPK_PokerCard.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return JLBPK_PokerCard;
    })();

    GameMsg_JLBPK.JLBPK_UserCards = (function() {

        /**
         * Properties of a JLBPK_UserCards.
         * @memberof GameMsg_JLBPK
         * @interface IJLBPK_UserCards
         * @property {Array.<GameMsg_JLBPK.IJLBPK_PokerCard>|null} [Cards] JLBPK_UserCards Cards
         * @property {number} Pattern JLBPK_UserCards Pattern
         */

        /**
         * Constructs a new JLBPK_UserCards.
         * @memberof GameMsg_JLBPK
         * @classdesc Represents a JLBPK_UserCards.
         * @implements IJLBPK_UserCards
         * @constructor
         * @param {GameMsg_JLBPK.IJLBPK_UserCards=} [properties] Properties to set
         */
        function JLBPK_UserCards(properties) {
            this.Cards = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * JLBPK_UserCards Cards.
         * @member {Array.<GameMsg_JLBPK.IJLBPK_PokerCard>} Cards
         * @memberof GameMsg_JLBPK.JLBPK_UserCards
         * @instance
         */
        JLBPK_UserCards.prototype.Cards = $util.emptyArray;

        /**
         * JLBPK_UserCards Pattern.
         * @member {number} Pattern
         * @memberof GameMsg_JLBPK.JLBPK_UserCards
         * @instance
         */
        JLBPK_UserCards.prototype.Pattern = 0;

        /**
         * Creates a new JLBPK_UserCards instance using the specified properties.
         * @function create
         * @memberof GameMsg_JLBPK.JLBPK_UserCards
         * @static
         * @param {GameMsg_JLBPK.IJLBPK_UserCards=} [properties] Properties to set
         * @returns {GameMsg_JLBPK.JLBPK_UserCards} JLBPK_UserCards instance
         */
        JLBPK_UserCards.create = function create(properties) {
            return new JLBPK_UserCards(properties);
        };

        /**
         * Encodes the specified JLBPK_UserCards message. Does not implicitly {@link GameMsg_JLBPK.JLBPK_UserCards.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_JLBPK.JLBPK_UserCards
         * @static
         * @param {GameMsg_JLBPK.IJLBPK_UserCards} message JLBPK_UserCards message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JLBPK_UserCards.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Cards != null && message.Cards.length)
                for (var i = 0; i < message.Cards.length; ++i)
                    $root.GameMsg_JLBPK.JLBPK_PokerCard.encode(message.Cards[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.Pattern);
            return writer;
        };

        /**
         * Encodes the specified JLBPK_UserCards message, length delimited. Does not implicitly {@link GameMsg_JLBPK.JLBPK_UserCards.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_JLBPK.JLBPK_UserCards
         * @static
         * @param {GameMsg_JLBPK.IJLBPK_UserCards} message JLBPK_UserCards message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JLBPK_UserCards.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a JLBPK_UserCards message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_JLBPK.JLBPK_UserCards
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_JLBPK.JLBPK_UserCards} JLBPK_UserCards
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JLBPK_UserCards.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_JLBPK.JLBPK_UserCards();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.Cards && message.Cards.length))
                        message.Cards = [];
                    message.Cards.push($root.GameMsg_JLBPK.JLBPK_PokerCard.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.Pattern = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("Pattern"))
                throw $util.ProtocolError("missing required 'Pattern'", { instance: message });
            return message;
        };

        /**
         * Decodes a JLBPK_UserCards message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_JLBPK.JLBPK_UserCards
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_JLBPK.JLBPK_UserCards} JLBPK_UserCards
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JLBPK_UserCards.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a JLBPK_UserCards message.
         * @function verify
         * @memberof GameMsg_JLBPK.JLBPK_UserCards
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        JLBPK_UserCards.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Cards != null && message.hasOwnProperty("Cards")) {
                if (!Array.isArray(message.Cards))
                    return "Cards: array expected";
                for (var i = 0; i < message.Cards.length; ++i) {
                    var error = $root.GameMsg_JLBPK.JLBPK_PokerCard.verify(message.Cards[i]);
                    if (error)
                        return "Cards." + error;
                }
            }
            if (!$util.isInteger(message.Pattern))
                return "Pattern: integer expected";
            return null;
        };

        /**
         * Creates a JLBPK_UserCards message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_JLBPK.JLBPK_UserCards
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_JLBPK.JLBPK_UserCards} JLBPK_UserCards
         */
        JLBPK_UserCards.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_JLBPK.JLBPK_UserCards)
                return object;
            var message = new $root.GameMsg_JLBPK.JLBPK_UserCards();
            if (object.Cards) {
                if (!Array.isArray(object.Cards))
                    throw TypeError(".GameMsg_JLBPK.JLBPK_UserCards.Cards: array expected");
                message.Cards = [];
                for (var i = 0; i < object.Cards.length; ++i) {
                    if (typeof object.Cards[i] !== "object")
                        throw TypeError(".GameMsg_JLBPK.JLBPK_UserCards.Cards: object expected");
                    message.Cards[i] = $root.GameMsg_JLBPK.JLBPK_PokerCard.fromObject(object.Cards[i]);
                }
            }
            if (object.Pattern != null)
                message.Pattern = object.Pattern | 0;
            return message;
        };

        /**
         * Creates a plain object from a JLBPK_UserCards message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_JLBPK.JLBPK_UserCards
         * @static
         * @param {GameMsg_JLBPK.JLBPK_UserCards} message JLBPK_UserCards
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        JLBPK_UserCards.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.Cards = [];
            if (options.defaults)
                object.Pattern = 0;
            if (message.Cards && message.Cards.length) {
                object.Cards = [];
                for (var j = 0; j < message.Cards.length; ++j)
                    object.Cards[j] = $root.GameMsg_JLBPK.JLBPK_PokerCard.toObject(message.Cards[j], options);
            }
            if (message.Pattern != null && message.hasOwnProperty("Pattern"))
                object.Pattern = message.Pattern;
            return object;
        };

        /**
         * Converts this JLBPK_UserCards to JSON.
         * @function toJSON
         * @memberof GameMsg_JLBPK.JLBPK_UserCards
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        JLBPK_UserCards.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return JLBPK_UserCards;
    })();

    GameMsg_JLBPK.JLBPK_WaitingStart = (function() {

        /**
         * Properties of a JLBPK_WaitingStart.
         * @memberof GameMsg_JLBPK
         * @interface IJLBPK_WaitingStart
         * @property {number} TimeRemain JLBPK_WaitingStart TimeRemain
         */

        /**
         * Constructs a new JLBPK_WaitingStart.
         * @memberof GameMsg_JLBPK
         * @classdesc Represents a JLBPK_WaitingStart.
         * @implements IJLBPK_WaitingStart
         * @constructor
         * @param {GameMsg_JLBPK.IJLBPK_WaitingStart=} [properties] Properties to set
         */
        function JLBPK_WaitingStart(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * JLBPK_WaitingStart TimeRemain.
         * @member {number} TimeRemain
         * @memberof GameMsg_JLBPK.JLBPK_WaitingStart
         * @instance
         */
        JLBPK_WaitingStart.prototype.TimeRemain = 0;

        /**
         * Creates a new JLBPK_WaitingStart instance using the specified properties.
         * @function create
         * @memberof GameMsg_JLBPK.JLBPK_WaitingStart
         * @static
         * @param {GameMsg_JLBPK.IJLBPK_WaitingStart=} [properties] Properties to set
         * @returns {GameMsg_JLBPK.JLBPK_WaitingStart} JLBPK_WaitingStart instance
         */
        JLBPK_WaitingStart.create = function create(properties) {
            return new JLBPK_WaitingStart(properties);
        };

        /**
         * Encodes the specified JLBPK_WaitingStart message. Does not implicitly {@link GameMsg_JLBPK.JLBPK_WaitingStart.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_JLBPK.JLBPK_WaitingStart
         * @static
         * @param {GameMsg_JLBPK.IJLBPK_WaitingStart} message JLBPK_WaitingStart message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JLBPK_WaitingStart.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.TimeRemain);
            return writer;
        };

        /**
         * Encodes the specified JLBPK_WaitingStart message, length delimited. Does not implicitly {@link GameMsg_JLBPK.JLBPK_WaitingStart.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_JLBPK.JLBPK_WaitingStart
         * @static
         * @param {GameMsg_JLBPK.IJLBPK_WaitingStart} message JLBPK_WaitingStart message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JLBPK_WaitingStart.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a JLBPK_WaitingStart message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_JLBPK.JLBPK_WaitingStart
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_JLBPK.JLBPK_WaitingStart} JLBPK_WaitingStart
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JLBPK_WaitingStart.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_JLBPK.JLBPK_WaitingStart();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.TimeRemain = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("TimeRemain"))
                throw $util.ProtocolError("missing required 'TimeRemain'", { instance: message });
            return message;
        };

        /**
         * Decodes a JLBPK_WaitingStart message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_JLBPK.JLBPK_WaitingStart
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_JLBPK.JLBPK_WaitingStart} JLBPK_WaitingStart
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JLBPK_WaitingStart.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a JLBPK_WaitingStart message.
         * @function verify
         * @memberof GameMsg_JLBPK.JLBPK_WaitingStart
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        JLBPK_WaitingStart.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.TimeRemain))
                return "TimeRemain: integer expected";
            return null;
        };

        /**
         * Creates a JLBPK_WaitingStart message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_JLBPK.JLBPK_WaitingStart
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_JLBPK.JLBPK_WaitingStart} JLBPK_WaitingStart
         */
        JLBPK_WaitingStart.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_JLBPK.JLBPK_WaitingStart)
                return object;
            var message = new $root.GameMsg_JLBPK.JLBPK_WaitingStart();
            if (object.TimeRemain != null)
                message.TimeRemain = object.TimeRemain | 0;
            return message;
        };

        /**
         * Creates a plain object from a JLBPK_WaitingStart message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_JLBPK.JLBPK_WaitingStart
         * @static
         * @param {GameMsg_JLBPK.JLBPK_WaitingStart} message JLBPK_WaitingStart
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        JLBPK_WaitingStart.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.TimeRemain = 0;
            if (message.TimeRemain != null && message.hasOwnProperty("TimeRemain"))
                object.TimeRemain = message.TimeRemain;
            return object;
        };

        /**
         * Converts this JLBPK_WaitingStart to JSON.
         * @function toJSON
         * @memberof GameMsg_JLBPK.JLBPK_WaitingStart
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        JLBPK_WaitingStart.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return JLBPK_WaitingStart;
    })();

    GameMsg_JLBPK.JLBPK_UserBettingStart = (function() {

        /**
         * Properties of a JLBPK_UserBettingStart.
         * @memberof GameMsg_JLBPK
         * @interface IJLBPK_UserBettingStart
         * @property {number} TimeRemain JLBPK_UserBettingStart TimeRemain
         */

        /**
         * Constructs a new JLBPK_UserBettingStart.
         * @memberof GameMsg_JLBPK
         * @classdesc Represents a JLBPK_UserBettingStart.
         * @implements IJLBPK_UserBettingStart
         * @constructor
         * @param {GameMsg_JLBPK.IJLBPK_UserBettingStart=} [properties] Properties to set
         */
        function JLBPK_UserBettingStart(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * JLBPK_UserBettingStart TimeRemain.
         * @member {number} TimeRemain
         * @memberof GameMsg_JLBPK.JLBPK_UserBettingStart
         * @instance
         */
        JLBPK_UserBettingStart.prototype.TimeRemain = 0;

        /**
         * Creates a new JLBPK_UserBettingStart instance using the specified properties.
         * @function create
         * @memberof GameMsg_JLBPK.JLBPK_UserBettingStart
         * @static
         * @param {GameMsg_JLBPK.IJLBPK_UserBettingStart=} [properties] Properties to set
         * @returns {GameMsg_JLBPK.JLBPK_UserBettingStart} JLBPK_UserBettingStart instance
         */
        JLBPK_UserBettingStart.create = function create(properties) {
            return new JLBPK_UserBettingStart(properties);
        };

        /**
         * Encodes the specified JLBPK_UserBettingStart message. Does not implicitly {@link GameMsg_JLBPK.JLBPK_UserBettingStart.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_JLBPK.JLBPK_UserBettingStart
         * @static
         * @param {GameMsg_JLBPK.IJLBPK_UserBettingStart} message JLBPK_UserBettingStart message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JLBPK_UserBettingStart.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.TimeRemain);
            return writer;
        };

        /**
         * Encodes the specified JLBPK_UserBettingStart message, length delimited. Does not implicitly {@link GameMsg_JLBPK.JLBPK_UserBettingStart.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_JLBPK.JLBPK_UserBettingStart
         * @static
         * @param {GameMsg_JLBPK.IJLBPK_UserBettingStart} message JLBPK_UserBettingStart message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JLBPK_UserBettingStart.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a JLBPK_UserBettingStart message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_JLBPK.JLBPK_UserBettingStart
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_JLBPK.JLBPK_UserBettingStart} JLBPK_UserBettingStart
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JLBPK_UserBettingStart.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_JLBPK.JLBPK_UserBettingStart();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.TimeRemain = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("TimeRemain"))
                throw $util.ProtocolError("missing required 'TimeRemain'", { instance: message });
            return message;
        };

        /**
         * Decodes a JLBPK_UserBettingStart message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_JLBPK.JLBPK_UserBettingStart
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_JLBPK.JLBPK_UserBettingStart} JLBPK_UserBettingStart
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JLBPK_UserBettingStart.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a JLBPK_UserBettingStart message.
         * @function verify
         * @memberof GameMsg_JLBPK.JLBPK_UserBettingStart
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        JLBPK_UserBettingStart.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.TimeRemain))
                return "TimeRemain: integer expected";
            return null;
        };

        /**
         * Creates a JLBPK_UserBettingStart message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_JLBPK.JLBPK_UserBettingStart
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_JLBPK.JLBPK_UserBettingStart} JLBPK_UserBettingStart
         */
        JLBPK_UserBettingStart.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_JLBPK.JLBPK_UserBettingStart)
                return object;
            var message = new $root.GameMsg_JLBPK.JLBPK_UserBettingStart();
            if (object.TimeRemain != null)
                message.TimeRemain = object.TimeRemain | 0;
            return message;
        };

        /**
         * Creates a plain object from a JLBPK_UserBettingStart message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_JLBPK.JLBPK_UserBettingStart
         * @static
         * @param {GameMsg_JLBPK.JLBPK_UserBettingStart} message JLBPK_UserBettingStart
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        JLBPK_UserBettingStart.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.TimeRemain = 0;
            if (message.TimeRemain != null && message.hasOwnProperty("TimeRemain"))
                object.TimeRemain = message.TimeRemain;
            return object;
        };

        /**
         * Converts this JLBPK_UserBettingStart to JSON.
         * @function toJSON
         * @memberof GameMsg_JLBPK.JLBPK_UserBettingStart
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        JLBPK_UserBettingStart.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return JLBPK_UserBettingStart;
    })();

    GameMsg_JLBPK.JLBPK_Bet = (function() {

        /**
         * Properties of a JLBPK_Bet.
         * @memberof GameMsg_JLBPK
         * @interface IJLBPK_Bet
         * @property {number} BetType JLBPK_Bet BetType
         * @property {number|Long} Bet JLBPK_Bet Bet
         */

        /**
         * Constructs a new JLBPK_Bet.
         * @memberof GameMsg_JLBPK
         * @classdesc Represents a JLBPK_Bet.
         * @implements IJLBPK_Bet
         * @constructor
         * @param {GameMsg_JLBPK.IJLBPK_Bet=} [properties] Properties to set
         */
        function JLBPK_Bet(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * JLBPK_Bet BetType.
         * @member {number} BetType
         * @memberof GameMsg_JLBPK.JLBPK_Bet
         * @instance
         */
        JLBPK_Bet.prototype.BetType = 0;

        /**
         * JLBPK_Bet Bet.
         * @member {number|Long} Bet
         * @memberof GameMsg_JLBPK.JLBPK_Bet
         * @instance
         */
        JLBPK_Bet.prototype.Bet = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new JLBPK_Bet instance using the specified properties.
         * @function create
         * @memberof GameMsg_JLBPK.JLBPK_Bet
         * @static
         * @param {GameMsg_JLBPK.IJLBPK_Bet=} [properties] Properties to set
         * @returns {GameMsg_JLBPK.JLBPK_Bet} JLBPK_Bet instance
         */
        JLBPK_Bet.create = function create(properties) {
            return new JLBPK_Bet(properties);
        };

        /**
         * Encodes the specified JLBPK_Bet message. Does not implicitly {@link GameMsg_JLBPK.JLBPK_Bet.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_JLBPK.JLBPK_Bet
         * @static
         * @param {GameMsg_JLBPK.IJLBPK_Bet} message JLBPK_Bet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JLBPK_Bet.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.BetType);
            writer.uint32(/* id 2, wireType 0 =*/16).int64(message.Bet);
            return writer;
        };

        /**
         * Encodes the specified JLBPK_Bet message, length delimited. Does not implicitly {@link GameMsg_JLBPK.JLBPK_Bet.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_JLBPK.JLBPK_Bet
         * @static
         * @param {GameMsg_JLBPK.IJLBPK_Bet} message JLBPK_Bet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JLBPK_Bet.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a JLBPK_Bet message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_JLBPK.JLBPK_Bet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_JLBPK.JLBPK_Bet} JLBPK_Bet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JLBPK_Bet.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_JLBPK.JLBPK_Bet();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.BetType = reader.int32();
                    break;
                case 2:
                    message.Bet = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("BetType"))
                throw $util.ProtocolError("missing required 'BetType'", { instance: message });
            if (!message.hasOwnProperty("Bet"))
                throw $util.ProtocolError("missing required 'Bet'", { instance: message });
            return message;
        };

        /**
         * Decodes a JLBPK_Bet message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_JLBPK.JLBPK_Bet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_JLBPK.JLBPK_Bet} JLBPK_Bet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JLBPK_Bet.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a JLBPK_Bet message.
         * @function verify
         * @memberof GameMsg_JLBPK.JLBPK_Bet
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        JLBPK_Bet.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.BetType))
                return "BetType: integer expected";
            if (!$util.isInteger(message.Bet) && !(message.Bet && $util.isInteger(message.Bet.low) && $util.isInteger(message.Bet.high)))
                return "Bet: integer|Long expected";
            return null;
        };

        /**
         * Creates a JLBPK_Bet message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_JLBPK.JLBPK_Bet
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_JLBPK.JLBPK_Bet} JLBPK_Bet
         */
        JLBPK_Bet.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_JLBPK.JLBPK_Bet)
                return object;
            var message = new $root.GameMsg_JLBPK.JLBPK_Bet();
            if (object.BetType != null)
                message.BetType = object.BetType | 0;
            if (object.Bet != null)
                if ($util.Long)
                    (message.Bet = $util.Long.fromValue(object.Bet)).unsigned = false;
                else if (typeof object.Bet === "string")
                    message.Bet = parseInt(object.Bet, 10);
                else if (typeof object.Bet === "number")
                    message.Bet = object.Bet;
                else if (typeof object.Bet === "object")
                    message.Bet = new $util.LongBits(object.Bet.low >>> 0, object.Bet.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a JLBPK_Bet message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_JLBPK.JLBPK_Bet
         * @static
         * @param {GameMsg_JLBPK.JLBPK_Bet} message JLBPK_Bet
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        JLBPK_Bet.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.BetType = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.Bet = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.Bet = options.longs === String ? "0" : 0;
            }
            if (message.BetType != null && message.hasOwnProperty("BetType"))
                object.BetType = message.BetType;
            if (message.Bet != null && message.hasOwnProperty("Bet"))
                if (typeof message.Bet === "number")
                    object.Bet = options.longs === String ? String(message.Bet) : message.Bet;
                else
                    object.Bet = options.longs === String ? $util.Long.prototype.toString.call(message.Bet) : options.longs === Number ? new $util.LongBits(message.Bet.low >>> 0, message.Bet.high >>> 0).toNumber() : message.Bet;
            return object;
        };

        /**
         * Converts this JLBPK_Bet to JSON.
         * @function toJSON
         * @memberof GameMsg_JLBPK.JLBPK_Bet
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        JLBPK_Bet.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return JLBPK_Bet;
    })();

    GameMsg_JLBPK.JLBPK_BetResult = (function() {

        /**
         * Properties of a JLBPK_BetResult.
         * @memberof GameMsg_JLBPK
         * @interface IJLBPK_BetResult
         * @property {number} SeatNo JLBPK_BetResult SeatNo
         * @property {number} BetType JLBPK_BetResult BetType
         * @property {number|Long} Bet JLBPK_BetResult Bet
         * @property {number|Long} MoneyRemain JLBPK_BetResult MoneyRemain
         * @property {number} Result JLBPK_BetResult Result
         */

        /**
         * Constructs a new JLBPK_BetResult.
         * @memberof GameMsg_JLBPK
         * @classdesc Represents a JLBPK_BetResult.
         * @implements IJLBPK_BetResult
         * @constructor
         * @param {GameMsg_JLBPK.IJLBPK_BetResult=} [properties] Properties to set
         */
        function JLBPK_BetResult(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * JLBPK_BetResult SeatNo.
         * @member {number} SeatNo
         * @memberof GameMsg_JLBPK.JLBPK_BetResult
         * @instance
         */
        JLBPK_BetResult.prototype.SeatNo = 0;

        /**
         * JLBPK_BetResult BetType.
         * @member {number} BetType
         * @memberof GameMsg_JLBPK.JLBPK_BetResult
         * @instance
         */
        JLBPK_BetResult.prototype.BetType = 0;

        /**
         * JLBPK_BetResult Bet.
         * @member {number|Long} Bet
         * @memberof GameMsg_JLBPK.JLBPK_BetResult
         * @instance
         */
        JLBPK_BetResult.prototype.Bet = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * JLBPK_BetResult MoneyRemain.
         * @member {number|Long} MoneyRemain
         * @memberof GameMsg_JLBPK.JLBPK_BetResult
         * @instance
         */
        JLBPK_BetResult.prototype.MoneyRemain = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * JLBPK_BetResult Result.
         * @member {number} Result
         * @memberof GameMsg_JLBPK.JLBPK_BetResult
         * @instance
         */
        JLBPK_BetResult.prototype.Result = 0;

        /**
         * Creates a new JLBPK_BetResult instance using the specified properties.
         * @function create
         * @memberof GameMsg_JLBPK.JLBPK_BetResult
         * @static
         * @param {GameMsg_JLBPK.IJLBPK_BetResult=} [properties] Properties to set
         * @returns {GameMsg_JLBPK.JLBPK_BetResult} JLBPK_BetResult instance
         */
        JLBPK_BetResult.create = function create(properties) {
            return new JLBPK_BetResult(properties);
        };

        /**
         * Encodes the specified JLBPK_BetResult message. Does not implicitly {@link GameMsg_JLBPK.JLBPK_BetResult.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_JLBPK.JLBPK_BetResult
         * @static
         * @param {GameMsg_JLBPK.IJLBPK_BetResult} message JLBPK_BetResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JLBPK_BetResult.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.SeatNo);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.BetType);
            writer.uint32(/* id 3, wireType 0 =*/24).int64(message.Bet);
            writer.uint32(/* id 4, wireType 0 =*/32).int64(message.MoneyRemain);
            writer.uint32(/* id 5, wireType 0 =*/40).int32(message.Result);
            return writer;
        };

        /**
         * Encodes the specified JLBPK_BetResult message, length delimited. Does not implicitly {@link GameMsg_JLBPK.JLBPK_BetResult.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_JLBPK.JLBPK_BetResult
         * @static
         * @param {GameMsg_JLBPK.IJLBPK_BetResult} message JLBPK_BetResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JLBPK_BetResult.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a JLBPK_BetResult message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_JLBPK.JLBPK_BetResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_JLBPK.JLBPK_BetResult} JLBPK_BetResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JLBPK_BetResult.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_JLBPK.JLBPK_BetResult();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.SeatNo = reader.int32();
                    break;
                case 2:
                    message.BetType = reader.int32();
                    break;
                case 3:
                    message.Bet = reader.int64();
                    break;
                case 4:
                    message.MoneyRemain = reader.int64();
                    break;
                case 5:
                    message.Result = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("SeatNo"))
                throw $util.ProtocolError("missing required 'SeatNo'", { instance: message });
            if (!message.hasOwnProperty("BetType"))
                throw $util.ProtocolError("missing required 'BetType'", { instance: message });
            if (!message.hasOwnProperty("Bet"))
                throw $util.ProtocolError("missing required 'Bet'", { instance: message });
            if (!message.hasOwnProperty("MoneyRemain"))
                throw $util.ProtocolError("missing required 'MoneyRemain'", { instance: message });
            if (!message.hasOwnProperty("Result"))
                throw $util.ProtocolError("missing required 'Result'", { instance: message });
            return message;
        };

        /**
         * Decodes a JLBPK_BetResult message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_JLBPK.JLBPK_BetResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_JLBPK.JLBPK_BetResult} JLBPK_BetResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JLBPK_BetResult.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a JLBPK_BetResult message.
         * @function verify
         * @memberof GameMsg_JLBPK.JLBPK_BetResult
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        JLBPK_BetResult.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.SeatNo))
                return "SeatNo: integer expected";
            if (!$util.isInteger(message.BetType))
                return "BetType: integer expected";
            if (!$util.isInteger(message.Bet) && !(message.Bet && $util.isInteger(message.Bet.low) && $util.isInteger(message.Bet.high)))
                return "Bet: integer|Long expected";
            if (!$util.isInteger(message.MoneyRemain) && !(message.MoneyRemain && $util.isInteger(message.MoneyRemain.low) && $util.isInteger(message.MoneyRemain.high)))
                return "MoneyRemain: integer|Long expected";
            if (!$util.isInteger(message.Result))
                return "Result: integer expected";
            return null;
        };

        /**
         * Creates a JLBPK_BetResult message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_JLBPK.JLBPK_BetResult
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_JLBPK.JLBPK_BetResult} JLBPK_BetResult
         */
        JLBPK_BetResult.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_JLBPK.JLBPK_BetResult)
                return object;
            var message = new $root.GameMsg_JLBPK.JLBPK_BetResult();
            if (object.SeatNo != null)
                message.SeatNo = object.SeatNo | 0;
            if (object.BetType != null)
                message.BetType = object.BetType | 0;
            if (object.Bet != null)
                if ($util.Long)
                    (message.Bet = $util.Long.fromValue(object.Bet)).unsigned = false;
                else if (typeof object.Bet === "string")
                    message.Bet = parseInt(object.Bet, 10);
                else if (typeof object.Bet === "number")
                    message.Bet = object.Bet;
                else if (typeof object.Bet === "object")
                    message.Bet = new $util.LongBits(object.Bet.low >>> 0, object.Bet.high >>> 0).toNumber();
            if (object.MoneyRemain != null)
                if ($util.Long)
                    (message.MoneyRemain = $util.Long.fromValue(object.MoneyRemain)).unsigned = false;
                else if (typeof object.MoneyRemain === "string")
                    message.MoneyRemain = parseInt(object.MoneyRemain, 10);
                else if (typeof object.MoneyRemain === "number")
                    message.MoneyRemain = object.MoneyRemain;
                else if (typeof object.MoneyRemain === "object")
                    message.MoneyRemain = new $util.LongBits(object.MoneyRemain.low >>> 0, object.MoneyRemain.high >>> 0).toNumber();
            if (object.Result != null)
                message.Result = object.Result | 0;
            return message;
        };

        /**
         * Creates a plain object from a JLBPK_BetResult message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_JLBPK.JLBPK_BetResult
         * @static
         * @param {GameMsg_JLBPK.JLBPK_BetResult} message JLBPK_BetResult
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        JLBPK_BetResult.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.SeatNo = 0;
                object.BetType = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.Bet = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.Bet = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.MoneyRemain = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.MoneyRemain = options.longs === String ? "0" : 0;
                object.Result = 0;
            }
            if (message.SeatNo != null && message.hasOwnProperty("SeatNo"))
                object.SeatNo = message.SeatNo;
            if (message.BetType != null && message.hasOwnProperty("BetType"))
                object.BetType = message.BetType;
            if (message.Bet != null && message.hasOwnProperty("Bet"))
                if (typeof message.Bet === "number")
                    object.Bet = options.longs === String ? String(message.Bet) : message.Bet;
                else
                    object.Bet = options.longs === String ? $util.Long.prototype.toString.call(message.Bet) : options.longs === Number ? new $util.LongBits(message.Bet.low >>> 0, message.Bet.high >>> 0).toNumber() : message.Bet;
            if (message.MoneyRemain != null && message.hasOwnProperty("MoneyRemain"))
                if (typeof message.MoneyRemain === "number")
                    object.MoneyRemain = options.longs === String ? String(message.MoneyRemain) : message.MoneyRemain;
                else
                    object.MoneyRemain = options.longs === String ? $util.Long.prototype.toString.call(message.MoneyRemain) : options.longs === Number ? new $util.LongBits(message.MoneyRemain.low >>> 0, message.MoneyRemain.high >>> 0).toNumber() : message.MoneyRemain;
            if (message.Result != null && message.hasOwnProperty("Result"))
                object.Result = message.Result;
            return object;
        };

        /**
         * Converts this JLBPK_BetResult to JSON.
         * @function toJSON
         * @memberof GameMsg_JLBPK.JLBPK_BetResult
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        JLBPK_BetResult.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return JLBPK_BetResult;
    })();

    GameMsg_JLBPK.JLBPK_Deal = (function() {

        /**
         * Properties of a JLBPK_Deal.
         * @memberof GameMsg_JLBPK
         * @interface IJLBPK_Deal
         * @property {GameMsg_JLBPK.IJLBPK_UserCards} BankerCards JLBPK_Deal BankerCards
         * @property {Array.<GameMsg_JLBPK.IJLBPK_UserInfo>|null} [UserInfo] JLBPK_Deal UserInfo
         */

        /**
         * Constructs a new JLBPK_Deal.
         * @memberof GameMsg_JLBPK
         * @classdesc Represents a JLBPK_Deal.
         * @implements IJLBPK_Deal
         * @constructor
         * @param {GameMsg_JLBPK.IJLBPK_Deal=} [properties] Properties to set
         */
        function JLBPK_Deal(properties) {
            this.UserInfo = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * JLBPK_Deal BankerCards.
         * @member {GameMsg_JLBPK.IJLBPK_UserCards} BankerCards
         * @memberof GameMsg_JLBPK.JLBPK_Deal
         * @instance
         */
        JLBPK_Deal.prototype.BankerCards = null;

        /**
         * JLBPK_Deal UserInfo.
         * @member {Array.<GameMsg_JLBPK.IJLBPK_UserInfo>} UserInfo
         * @memberof GameMsg_JLBPK.JLBPK_Deal
         * @instance
         */
        JLBPK_Deal.prototype.UserInfo = $util.emptyArray;

        /**
         * Creates a new JLBPK_Deal instance using the specified properties.
         * @function create
         * @memberof GameMsg_JLBPK.JLBPK_Deal
         * @static
         * @param {GameMsg_JLBPK.IJLBPK_Deal=} [properties] Properties to set
         * @returns {GameMsg_JLBPK.JLBPK_Deal} JLBPK_Deal instance
         */
        JLBPK_Deal.create = function create(properties) {
            return new JLBPK_Deal(properties);
        };

        /**
         * Encodes the specified JLBPK_Deal message. Does not implicitly {@link GameMsg_JLBPK.JLBPK_Deal.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_JLBPK.JLBPK_Deal
         * @static
         * @param {GameMsg_JLBPK.IJLBPK_Deal} message JLBPK_Deal message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JLBPK_Deal.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            $root.GameMsg_JLBPK.JLBPK_UserCards.encode(message.BankerCards, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.UserInfo != null && message.UserInfo.length)
                for (var i = 0; i < message.UserInfo.length; ++i)
                    $root.GameMsg_JLBPK.JLBPK_UserInfo.encode(message.UserInfo[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified JLBPK_Deal message, length delimited. Does not implicitly {@link GameMsg_JLBPK.JLBPK_Deal.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_JLBPK.JLBPK_Deal
         * @static
         * @param {GameMsg_JLBPK.IJLBPK_Deal} message JLBPK_Deal message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JLBPK_Deal.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a JLBPK_Deal message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_JLBPK.JLBPK_Deal
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_JLBPK.JLBPK_Deal} JLBPK_Deal
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JLBPK_Deal.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_JLBPK.JLBPK_Deal();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.BankerCards = $root.GameMsg_JLBPK.JLBPK_UserCards.decode(reader, reader.uint32());
                    break;
                case 2:
                    if (!(message.UserInfo && message.UserInfo.length))
                        message.UserInfo = [];
                    message.UserInfo.push($root.GameMsg_JLBPK.JLBPK_UserInfo.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("BankerCards"))
                throw $util.ProtocolError("missing required 'BankerCards'", { instance: message });
            return message;
        };

        /**
         * Decodes a JLBPK_Deal message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_JLBPK.JLBPK_Deal
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_JLBPK.JLBPK_Deal} JLBPK_Deal
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JLBPK_Deal.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a JLBPK_Deal message.
         * @function verify
         * @memberof GameMsg_JLBPK.JLBPK_Deal
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        JLBPK_Deal.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            {
                var error = $root.GameMsg_JLBPK.JLBPK_UserCards.verify(message.BankerCards);
                if (error)
                    return "BankerCards." + error;
            }
            if (message.UserInfo != null && message.hasOwnProperty("UserInfo")) {
                if (!Array.isArray(message.UserInfo))
                    return "UserInfo: array expected";
                for (var i = 0; i < message.UserInfo.length; ++i) {
                    var error = $root.GameMsg_JLBPK.JLBPK_UserInfo.verify(message.UserInfo[i]);
                    if (error)
                        return "UserInfo." + error;
                }
            }
            return null;
        };

        /**
         * Creates a JLBPK_Deal message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_JLBPK.JLBPK_Deal
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_JLBPK.JLBPK_Deal} JLBPK_Deal
         */
        JLBPK_Deal.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_JLBPK.JLBPK_Deal)
                return object;
            var message = new $root.GameMsg_JLBPK.JLBPK_Deal();
            if (object.BankerCards != null) {
                if (typeof object.BankerCards !== "object")
                    throw TypeError(".GameMsg_JLBPK.JLBPK_Deal.BankerCards: object expected");
                message.BankerCards = $root.GameMsg_JLBPK.JLBPK_UserCards.fromObject(object.BankerCards);
            }
            if (object.UserInfo) {
                if (!Array.isArray(object.UserInfo))
                    throw TypeError(".GameMsg_JLBPK.JLBPK_Deal.UserInfo: array expected");
                message.UserInfo = [];
                for (var i = 0; i < object.UserInfo.length; ++i) {
                    if (typeof object.UserInfo[i] !== "object")
                        throw TypeError(".GameMsg_JLBPK.JLBPK_Deal.UserInfo: object expected");
                    message.UserInfo[i] = $root.GameMsg_JLBPK.JLBPK_UserInfo.fromObject(object.UserInfo[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a JLBPK_Deal message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_JLBPK.JLBPK_Deal
         * @static
         * @param {GameMsg_JLBPK.JLBPK_Deal} message JLBPK_Deal
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        JLBPK_Deal.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.UserInfo = [];
            if (options.defaults)
                object.BankerCards = null;
            if (message.BankerCards != null && message.hasOwnProperty("BankerCards"))
                object.BankerCards = $root.GameMsg_JLBPK.JLBPK_UserCards.toObject(message.BankerCards, options);
            if (message.UserInfo && message.UserInfo.length) {
                object.UserInfo = [];
                for (var j = 0; j < message.UserInfo.length; ++j)
                    object.UserInfo[j] = $root.GameMsg_JLBPK.JLBPK_UserInfo.toObject(message.UserInfo[j], options);
            }
            return object;
        };

        /**
         * Converts this JLBPK_Deal to JSON.
         * @function toJSON
         * @memberof GameMsg_JLBPK.JLBPK_Deal
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        JLBPK_Deal.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return JLBPK_Deal;
    })();

    GameMsg_JLBPK.JLBPK_DoubleBetStart = (function() {

        /**
         * Properties of a JLBPK_DoubleBetStart.
         * @memberof GameMsg_JLBPK
         * @interface IJLBPK_DoubleBetStart
         * @property {number} TimeRemain JLBPK_DoubleBetStart TimeRemain
         */

        /**
         * Constructs a new JLBPK_DoubleBetStart.
         * @memberof GameMsg_JLBPK
         * @classdesc Represents a JLBPK_DoubleBetStart.
         * @implements IJLBPK_DoubleBetStart
         * @constructor
         * @param {GameMsg_JLBPK.IJLBPK_DoubleBetStart=} [properties] Properties to set
         */
        function JLBPK_DoubleBetStart(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * JLBPK_DoubleBetStart TimeRemain.
         * @member {number} TimeRemain
         * @memberof GameMsg_JLBPK.JLBPK_DoubleBetStart
         * @instance
         */
        JLBPK_DoubleBetStart.prototype.TimeRemain = 0;

        /**
         * Creates a new JLBPK_DoubleBetStart instance using the specified properties.
         * @function create
         * @memberof GameMsg_JLBPK.JLBPK_DoubleBetStart
         * @static
         * @param {GameMsg_JLBPK.IJLBPK_DoubleBetStart=} [properties] Properties to set
         * @returns {GameMsg_JLBPK.JLBPK_DoubleBetStart} JLBPK_DoubleBetStart instance
         */
        JLBPK_DoubleBetStart.create = function create(properties) {
            return new JLBPK_DoubleBetStart(properties);
        };

        /**
         * Encodes the specified JLBPK_DoubleBetStart message. Does not implicitly {@link GameMsg_JLBPK.JLBPK_DoubleBetStart.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_JLBPK.JLBPK_DoubleBetStart
         * @static
         * @param {GameMsg_JLBPK.IJLBPK_DoubleBetStart} message JLBPK_DoubleBetStart message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JLBPK_DoubleBetStart.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.TimeRemain);
            return writer;
        };

        /**
         * Encodes the specified JLBPK_DoubleBetStart message, length delimited. Does not implicitly {@link GameMsg_JLBPK.JLBPK_DoubleBetStart.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_JLBPK.JLBPK_DoubleBetStart
         * @static
         * @param {GameMsg_JLBPK.IJLBPK_DoubleBetStart} message JLBPK_DoubleBetStart message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JLBPK_DoubleBetStart.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a JLBPK_DoubleBetStart message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_JLBPK.JLBPK_DoubleBetStart
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_JLBPK.JLBPK_DoubleBetStart} JLBPK_DoubleBetStart
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JLBPK_DoubleBetStart.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_JLBPK.JLBPK_DoubleBetStart();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.TimeRemain = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("TimeRemain"))
                throw $util.ProtocolError("missing required 'TimeRemain'", { instance: message });
            return message;
        };

        /**
         * Decodes a JLBPK_DoubleBetStart message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_JLBPK.JLBPK_DoubleBetStart
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_JLBPK.JLBPK_DoubleBetStart} JLBPK_DoubleBetStart
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JLBPK_DoubleBetStart.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a JLBPK_DoubleBetStart message.
         * @function verify
         * @memberof GameMsg_JLBPK.JLBPK_DoubleBetStart
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        JLBPK_DoubleBetStart.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.TimeRemain))
                return "TimeRemain: integer expected";
            return null;
        };

        /**
         * Creates a JLBPK_DoubleBetStart message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_JLBPK.JLBPK_DoubleBetStart
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_JLBPK.JLBPK_DoubleBetStart} JLBPK_DoubleBetStart
         */
        JLBPK_DoubleBetStart.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_JLBPK.JLBPK_DoubleBetStart)
                return object;
            var message = new $root.GameMsg_JLBPK.JLBPK_DoubleBetStart();
            if (object.TimeRemain != null)
                message.TimeRemain = object.TimeRemain | 0;
            return message;
        };

        /**
         * Creates a plain object from a JLBPK_DoubleBetStart message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_JLBPK.JLBPK_DoubleBetStart
         * @static
         * @param {GameMsg_JLBPK.JLBPK_DoubleBetStart} message JLBPK_DoubleBetStart
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        JLBPK_DoubleBetStart.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.TimeRemain = 0;
            if (message.TimeRemain != null && message.hasOwnProperty("TimeRemain"))
                object.TimeRemain = message.TimeRemain;
            return object;
        };

        /**
         * Converts this JLBPK_DoubleBetStart to JSON.
         * @function toJSON
         * @memberof GameMsg_JLBPK.JLBPK_DoubleBetStart
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        JLBPK_DoubleBetStart.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return JLBPK_DoubleBetStart;
    })();

    GameMsg_JLBPK.JLBPK_DoubleBetResult = (function() {

        /**
         * Properties of a JLBPK_DoubleBetResult.
         * @memberof GameMsg_JLBPK
         * @interface IJLBPK_DoubleBetResult
         * @property {number} SeatNo JLBPK_DoubleBetResult SeatNo
         * @property {number|Long} MoneyRemain JLBPK_DoubleBetResult MoneyRemain
         * @property {number} Result JLBPK_DoubleBetResult Result
         * @property {number|Long} Bet JLBPK_DoubleBetResult Bet
         */

        /**
         * Constructs a new JLBPK_DoubleBetResult.
         * @memberof GameMsg_JLBPK
         * @classdesc Represents a JLBPK_DoubleBetResult.
         * @implements IJLBPK_DoubleBetResult
         * @constructor
         * @param {GameMsg_JLBPK.IJLBPK_DoubleBetResult=} [properties] Properties to set
         */
        function JLBPK_DoubleBetResult(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * JLBPK_DoubleBetResult SeatNo.
         * @member {number} SeatNo
         * @memberof GameMsg_JLBPK.JLBPK_DoubleBetResult
         * @instance
         */
        JLBPK_DoubleBetResult.prototype.SeatNo = 0;

        /**
         * JLBPK_DoubleBetResult MoneyRemain.
         * @member {number|Long} MoneyRemain
         * @memberof GameMsg_JLBPK.JLBPK_DoubleBetResult
         * @instance
         */
        JLBPK_DoubleBetResult.prototype.MoneyRemain = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * JLBPK_DoubleBetResult Result.
         * @member {number} Result
         * @memberof GameMsg_JLBPK.JLBPK_DoubleBetResult
         * @instance
         */
        JLBPK_DoubleBetResult.prototype.Result = 0;

        /**
         * JLBPK_DoubleBetResult Bet.
         * @member {number|Long} Bet
         * @memberof GameMsg_JLBPK.JLBPK_DoubleBetResult
         * @instance
         */
        JLBPK_DoubleBetResult.prototype.Bet = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new JLBPK_DoubleBetResult instance using the specified properties.
         * @function create
         * @memberof GameMsg_JLBPK.JLBPK_DoubleBetResult
         * @static
         * @param {GameMsg_JLBPK.IJLBPK_DoubleBetResult=} [properties] Properties to set
         * @returns {GameMsg_JLBPK.JLBPK_DoubleBetResult} JLBPK_DoubleBetResult instance
         */
        JLBPK_DoubleBetResult.create = function create(properties) {
            return new JLBPK_DoubleBetResult(properties);
        };

        /**
         * Encodes the specified JLBPK_DoubleBetResult message. Does not implicitly {@link GameMsg_JLBPK.JLBPK_DoubleBetResult.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_JLBPK.JLBPK_DoubleBetResult
         * @static
         * @param {GameMsg_JLBPK.IJLBPK_DoubleBetResult} message JLBPK_DoubleBetResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JLBPK_DoubleBetResult.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.SeatNo);
            writer.uint32(/* id 2, wireType 0 =*/16).int64(message.MoneyRemain);
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.Result);
            writer.uint32(/* id 4, wireType 0 =*/32).int64(message.Bet);
            return writer;
        };

        /**
         * Encodes the specified JLBPK_DoubleBetResult message, length delimited. Does not implicitly {@link GameMsg_JLBPK.JLBPK_DoubleBetResult.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_JLBPK.JLBPK_DoubleBetResult
         * @static
         * @param {GameMsg_JLBPK.IJLBPK_DoubleBetResult} message JLBPK_DoubleBetResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JLBPK_DoubleBetResult.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a JLBPK_DoubleBetResult message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_JLBPK.JLBPK_DoubleBetResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_JLBPK.JLBPK_DoubleBetResult} JLBPK_DoubleBetResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JLBPK_DoubleBetResult.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_JLBPK.JLBPK_DoubleBetResult();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.SeatNo = reader.int32();
                    break;
                case 2:
                    message.MoneyRemain = reader.int64();
                    break;
                case 3:
                    message.Result = reader.int32();
                    break;
                case 4:
                    message.Bet = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("SeatNo"))
                throw $util.ProtocolError("missing required 'SeatNo'", { instance: message });
            if (!message.hasOwnProperty("MoneyRemain"))
                throw $util.ProtocolError("missing required 'MoneyRemain'", { instance: message });
            if (!message.hasOwnProperty("Result"))
                throw $util.ProtocolError("missing required 'Result'", { instance: message });
            if (!message.hasOwnProperty("Bet"))
                throw $util.ProtocolError("missing required 'Bet'", { instance: message });
            return message;
        };

        /**
         * Decodes a JLBPK_DoubleBetResult message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_JLBPK.JLBPK_DoubleBetResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_JLBPK.JLBPK_DoubleBetResult} JLBPK_DoubleBetResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JLBPK_DoubleBetResult.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a JLBPK_DoubleBetResult message.
         * @function verify
         * @memberof GameMsg_JLBPK.JLBPK_DoubleBetResult
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        JLBPK_DoubleBetResult.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.SeatNo))
                return "SeatNo: integer expected";
            if (!$util.isInteger(message.MoneyRemain) && !(message.MoneyRemain && $util.isInteger(message.MoneyRemain.low) && $util.isInteger(message.MoneyRemain.high)))
                return "MoneyRemain: integer|Long expected";
            if (!$util.isInteger(message.Result))
                return "Result: integer expected";
            if (!$util.isInteger(message.Bet) && !(message.Bet && $util.isInteger(message.Bet.low) && $util.isInteger(message.Bet.high)))
                return "Bet: integer|Long expected";
            return null;
        };

        /**
         * Creates a JLBPK_DoubleBetResult message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_JLBPK.JLBPK_DoubleBetResult
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_JLBPK.JLBPK_DoubleBetResult} JLBPK_DoubleBetResult
         */
        JLBPK_DoubleBetResult.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_JLBPK.JLBPK_DoubleBetResult)
                return object;
            var message = new $root.GameMsg_JLBPK.JLBPK_DoubleBetResult();
            if (object.SeatNo != null)
                message.SeatNo = object.SeatNo | 0;
            if (object.MoneyRemain != null)
                if ($util.Long)
                    (message.MoneyRemain = $util.Long.fromValue(object.MoneyRemain)).unsigned = false;
                else if (typeof object.MoneyRemain === "string")
                    message.MoneyRemain = parseInt(object.MoneyRemain, 10);
                else if (typeof object.MoneyRemain === "number")
                    message.MoneyRemain = object.MoneyRemain;
                else if (typeof object.MoneyRemain === "object")
                    message.MoneyRemain = new $util.LongBits(object.MoneyRemain.low >>> 0, object.MoneyRemain.high >>> 0).toNumber();
            if (object.Result != null)
                message.Result = object.Result | 0;
            if (object.Bet != null)
                if ($util.Long)
                    (message.Bet = $util.Long.fromValue(object.Bet)).unsigned = false;
                else if (typeof object.Bet === "string")
                    message.Bet = parseInt(object.Bet, 10);
                else if (typeof object.Bet === "number")
                    message.Bet = object.Bet;
                else if (typeof object.Bet === "object")
                    message.Bet = new $util.LongBits(object.Bet.low >>> 0, object.Bet.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a JLBPK_DoubleBetResult message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_JLBPK.JLBPK_DoubleBetResult
         * @static
         * @param {GameMsg_JLBPK.JLBPK_DoubleBetResult} message JLBPK_DoubleBetResult
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        JLBPK_DoubleBetResult.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.SeatNo = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.MoneyRemain = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.MoneyRemain = options.longs === String ? "0" : 0;
                object.Result = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.Bet = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.Bet = options.longs === String ? "0" : 0;
            }
            if (message.SeatNo != null && message.hasOwnProperty("SeatNo"))
                object.SeatNo = message.SeatNo;
            if (message.MoneyRemain != null && message.hasOwnProperty("MoneyRemain"))
                if (typeof message.MoneyRemain === "number")
                    object.MoneyRemain = options.longs === String ? String(message.MoneyRemain) : message.MoneyRemain;
                else
                    object.MoneyRemain = options.longs === String ? $util.Long.prototype.toString.call(message.MoneyRemain) : options.longs === Number ? new $util.LongBits(message.MoneyRemain.low >>> 0, message.MoneyRemain.high >>> 0).toNumber() : message.MoneyRemain;
            if (message.Result != null && message.hasOwnProperty("Result"))
                object.Result = message.Result;
            if (message.Bet != null && message.hasOwnProperty("Bet"))
                if (typeof message.Bet === "number")
                    object.Bet = options.longs === String ? String(message.Bet) : message.Bet;
                else
                    object.Bet = options.longs === String ? $util.Long.prototype.toString.call(message.Bet) : options.longs === Number ? new $util.LongBits(message.Bet.low >>> 0, message.Bet.high >>> 0).toNumber() : message.Bet;
            return object;
        };

        /**
         * Converts this JLBPK_DoubleBetResult to JSON.
         * @function toJSON
         * @memberof GameMsg_JLBPK.JLBPK_DoubleBetResult
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        JLBPK_DoubleBetResult.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return JLBPK_DoubleBetResult;
    })();

    GameMsg_JLBPK.JLBPK_UserFoldCard = (function() {

        /**
         * Properties of a JLBPK_UserFoldCard.
         * @memberof GameMsg_JLBPK
         * @interface IJLBPK_UserFoldCard
         * @property {number} SeatNo JLBPK_UserFoldCard SeatNo
         */

        /**
         * Constructs a new JLBPK_UserFoldCard.
         * @memberof GameMsg_JLBPK
         * @classdesc Represents a JLBPK_UserFoldCard.
         * @implements IJLBPK_UserFoldCard
         * @constructor
         * @param {GameMsg_JLBPK.IJLBPK_UserFoldCard=} [properties] Properties to set
         */
        function JLBPK_UserFoldCard(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * JLBPK_UserFoldCard SeatNo.
         * @member {number} SeatNo
         * @memberof GameMsg_JLBPK.JLBPK_UserFoldCard
         * @instance
         */
        JLBPK_UserFoldCard.prototype.SeatNo = 0;

        /**
         * Creates a new JLBPK_UserFoldCard instance using the specified properties.
         * @function create
         * @memberof GameMsg_JLBPK.JLBPK_UserFoldCard
         * @static
         * @param {GameMsg_JLBPK.IJLBPK_UserFoldCard=} [properties] Properties to set
         * @returns {GameMsg_JLBPK.JLBPK_UserFoldCard} JLBPK_UserFoldCard instance
         */
        JLBPK_UserFoldCard.create = function create(properties) {
            return new JLBPK_UserFoldCard(properties);
        };

        /**
         * Encodes the specified JLBPK_UserFoldCard message. Does not implicitly {@link GameMsg_JLBPK.JLBPK_UserFoldCard.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_JLBPK.JLBPK_UserFoldCard
         * @static
         * @param {GameMsg_JLBPK.IJLBPK_UserFoldCard} message JLBPK_UserFoldCard message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JLBPK_UserFoldCard.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.SeatNo);
            return writer;
        };

        /**
         * Encodes the specified JLBPK_UserFoldCard message, length delimited. Does not implicitly {@link GameMsg_JLBPK.JLBPK_UserFoldCard.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_JLBPK.JLBPK_UserFoldCard
         * @static
         * @param {GameMsg_JLBPK.IJLBPK_UserFoldCard} message JLBPK_UserFoldCard message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JLBPK_UserFoldCard.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a JLBPK_UserFoldCard message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_JLBPK.JLBPK_UserFoldCard
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_JLBPK.JLBPK_UserFoldCard} JLBPK_UserFoldCard
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JLBPK_UserFoldCard.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_JLBPK.JLBPK_UserFoldCard();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.SeatNo = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("SeatNo"))
                throw $util.ProtocolError("missing required 'SeatNo'", { instance: message });
            return message;
        };

        /**
         * Decodes a JLBPK_UserFoldCard message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_JLBPK.JLBPK_UserFoldCard
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_JLBPK.JLBPK_UserFoldCard} JLBPK_UserFoldCard
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JLBPK_UserFoldCard.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a JLBPK_UserFoldCard message.
         * @function verify
         * @memberof GameMsg_JLBPK.JLBPK_UserFoldCard
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        JLBPK_UserFoldCard.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.SeatNo))
                return "SeatNo: integer expected";
            return null;
        };

        /**
         * Creates a JLBPK_UserFoldCard message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_JLBPK.JLBPK_UserFoldCard
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_JLBPK.JLBPK_UserFoldCard} JLBPK_UserFoldCard
         */
        JLBPK_UserFoldCard.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_JLBPK.JLBPK_UserFoldCard)
                return object;
            var message = new $root.GameMsg_JLBPK.JLBPK_UserFoldCard();
            if (object.SeatNo != null)
                message.SeatNo = object.SeatNo | 0;
            return message;
        };

        /**
         * Creates a plain object from a JLBPK_UserFoldCard message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_JLBPK.JLBPK_UserFoldCard
         * @static
         * @param {GameMsg_JLBPK.JLBPK_UserFoldCard} message JLBPK_UserFoldCard
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        JLBPK_UserFoldCard.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.SeatNo = 0;
            if (message.SeatNo != null && message.hasOwnProperty("SeatNo"))
                object.SeatNo = message.SeatNo;
            return object;
        };

        /**
         * Converts this JLBPK_UserFoldCard to JSON.
         * @function toJSON
         * @memberof GameMsg_JLBPK.JLBPK_UserFoldCard
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        JLBPK_UserFoldCard.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return JLBPK_UserFoldCard;
    })();

    GameMsg_JLBPK.JLBPK_ShowCards = (function() {

        /**
         * Properties of a JLBPK_ShowCards.
         * @memberof GameMsg_JLBPK
         * @interface IJLBPK_ShowCards
         * @property {GameMsg_JLBPK.IJLBPK_UserCards} BankerCards JLBPK_ShowCards BankerCards
         * @property {Array.<GameMsg_JLBPK.IJLBPK_UserInfo>|null} [UserInfo] JLBPK_ShowCards UserInfo
         */

        /**
         * Constructs a new JLBPK_ShowCards.
         * @memberof GameMsg_JLBPK
         * @classdesc Represents a JLBPK_ShowCards.
         * @implements IJLBPK_ShowCards
         * @constructor
         * @param {GameMsg_JLBPK.IJLBPK_ShowCards=} [properties] Properties to set
         */
        function JLBPK_ShowCards(properties) {
            this.UserInfo = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * JLBPK_ShowCards BankerCards.
         * @member {GameMsg_JLBPK.IJLBPK_UserCards} BankerCards
         * @memberof GameMsg_JLBPK.JLBPK_ShowCards
         * @instance
         */
        JLBPK_ShowCards.prototype.BankerCards = null;

        /**
         * JLBPK_ShowCards UserInfo.
         * @member {Array.<GameMsg_JLBPK.IJLBPK_UserInfo>} UserInfo
         * @memberof GameMsg_JLBPK.JLBPK_ShowCards
         * @instance
         */
        JLBPK_ShowCards.prototype.UserInfo = $util.emptyArray;

        /**
         * Creates a new JLBPK_ShowCards instance using the specified properties.
         * @function create
         * @memberof GameMsg_JLBPK.JLBPK_ShowCards
         * @static
         * @param {GameMsg_JLBPK.IJLBPK_ShowCards=} [properties] Properties to set
         * @returns {GameMsg_JLBPK.JLBPK_ShowCards} JLBPK_ShowCards instance
         */
        JLBPK_ShowCards.create = function create(properties) {
            return new JLBPK_ShowCards(properties);
        };

        /**
         * Encodes the specified JLBPK_ShowCards message. Does not implicitly {@link GameMsg_JLBPK.JLBPK_ShowCards.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_JLBPK.JLBPK_ShowCards
         * @static
         * @param {GameMsg_JLBPK.IJLBPK_ShowCards} message JLBPK_ShowCards message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JLBPK_ShowCards.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            $root.GameMsg_JLBPK.JLBPK_UserCards.encode(message.BankerCards, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.UserInfo != null && message.UserInfo.length)
                for (var i = 0; i < message.UserInfo.length; ++i)
                    $root.GameMsg_JLBPK.JLBPK_UserInfo.encode(message.UserInfo[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified JLBPK_ShowCards message, length delimited. Does not implicitly {@link GameMsg_JLBPK.JLBPK_ShowCards.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_JLBPK.JLBPK_ShowCards
         * @static
         * @param {GameMsg_JLBPK.IJLBPK_ShowCards} message JLBPK_ShowCards message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JLBPK_ShowCards.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a JLBPK_ShowCards message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_JLBPK.JLBPK_ShowCards
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_JLBPK.JLBPK_ShowCards} JLBPK_ShowCards
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JLBPK_ShowCards.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_JLBPK.JLBPK_ShowCards();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.BankerCards = $root.GameMsg_JLBPK.JLBPK_UserCards.decode(reader, reader.uint32());
                    break;
                case 2:
                    if (!(message.UserInfo && message.UserInfo.length))
                        message.UserInfo = [];
                    message.UserInfo.push($root.GameMsg_JLBPK.JLBPK_UserInfo.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("BankerCards"))
                throw $util.ProtocolError("missing required 'BankerCards'", { instance: message });
            return message;
        };

        /**
         * Decodes a JLBPK_ShowCards message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_JLBPK.JLBPK_ShowCards
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_JLBPK.JLBPK_ShowCards} JLBPK_ShowCards
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JLBPK_ShowCards.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a JLBPK_ShowCards message.
         * @function verify
         * @memberof GameMsg_JLBPK.JLBPK_ShowCards
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        JLBPK_ShowCards.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            {
                var error = $root.GameMsg_JLBPK.JLBPK_UserCards.verify(message.BankerCards);
                if (error)
                    return "BankerCards." + error;
            }
            if (message.UserInfo != null && message.hasOwnProperty("UserInfo")) {
                if (!Array.isArray(message.UserInfo))
                    return "UserInfo: array expected";
                for (var i = 0; i < message.UserInfo.length; ++i) {
                    var error = $root.GameMsg_JLBPK.JLBPK_UserInfo.verify(message.UserInfo[i]);
                    if (error)
                        return "UserInfo." + error;
                }
            }
            return null;
        };

        /**
         * Creates a JLBPK_ShowCards message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_JLBPK.JLBPK_ShowCards
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_JLBPK.JLBPK_ShowCards} JLBPK_ShowCards
         */
        JLBPK_ShowCards.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_JLBPK.JLBPK_ShowCards)
                return object;
            var message = new $root.GameMsg_JLBPK.JLBPK_ShowCards();
            if (object.BankerCards != null) {
                if (typeof object.BankerCards !== "object")
                    throw TypeError(".GameMsg_JLBPK.JLBPK_ShowCards.BankerCards: object expected");
                message.BankerCards = $root.GameMsg_JLBPK.JLBPK_UserCards.fromObject(object.BankerCards);
            }
            if (object.UserInfo) {
                if (!Array.isArray(object.UserInfo))
                    throw TypeError(".GameMsg_JLBPK.JLBPK_ShowCards.UserInfo: array expected");
                message.UserInfo = [];
                for (var i = 0; i < object.UserInfo.length; ++i) {
                    if (typeof object.UserInfo[i] !== "object")
                        throw TypeError(".GameMsg_JLBPK.JLBPK_ShowCards.UserInfo: object expected");
                    message.UserInfo[i] = $root.GameMsg_JLBPK.JLBPK_UserInfo.fromObject(object.UserInfo[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a JLBPK_ShowCards message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_JLBPK.JLBPK_ShowCards
         * @static
         * @param {GameMsg_JLBPK.JLBPK_ShowCards} message JLBPK_ShowCards
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        JLBPK_ShowCards.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.UserInfo = [];
            if (options.defaults)
                object.BankerCards = null;
            if (message.BankerCards != null && message.hasOwnProperty("BankerCards"))
                object.BankerCards = $root.GameMsg_JLBPK.JLBPK_UserCards.toObject(message.BankerCards, options);
            if (message.UserInfo && message.UserInfo.length) {
                object.UserInfo = [];
                for (var j = 0; j < message.UserInfo.length; ++j)
                    object.UserInfo[j] = $root.GameMsg_JLBPK.JLBPK_UserInfo.toObject(message.UserInfo[j], options);
            }
            return object;
        };

        /**
         * Converts this JLBPK_ShowCards to JSON.
         * @function toJSON
         * @memberof GameMsg_JLBPK.JLBPK_ShowCards
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        JLBPK_ShowCards.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return JLBPK_ShowCards;
    })();

    GameMsg_JLBPK.JLBPK_Compensate_BetBase = (function() {

        /**
         * Properties of a JLBPK_Compensate_BetBase.
         * @memberof GameMsg_JLBPK
         * @interface IJLBPK_Compensate_BetBase
         * @property {Array.<GameMsg_JLBPK.IJLBPK_UserInfo>|null} [UserInfo] JLBPK_Compensate_BetBase UserInfo
         */

        /**
         * Constructs a new JLBPK_Compensate_BetBase.
         * @memberof GameMsg_JLBPK
         * @classdesc Represents a JLBPK_Compensate_BetBase.
         * @implements IJLBPK_Compensate_BetBase
         * @constructor
         * @param {GameMsg_JLBPK.IJLBPK_Compensate_BetBase=} [properties] Properties to set
         */
        function JLBPK_Compensate_BetBase(properties) {
            this.UserInfo = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * JLBPK_Compensate_BetBase UserInfo.
         * @member {Array.<GameMsg_JLBPK.IJLBPK_UserInfo>} UserInfo
         * @memberof GameMsg_JLBPK.JLBPK_Compensate_BetBase
         * @instance
         */
        JLBPK_Compensate_BetBase.prototype.UserInfo = $util.emptyArray;

        /**
         * Creates a new JLBPK_Compensate_BetBase instance using the specified properties.
         * @function create
         * @memberof GameMsg_JLBPK.JLBPK_Compensate_BetBase
         * @static
         * @param {GameMsg_JLBPK.IJLBPK_Compensate_BetBase=} [properties] Properties to set
         * @returns {GameMsg_JLBPK.JLBPK_Compensate_BetBase} JLBPK_Compensate_BetBase instance
         */
        JLBPK_Compensate_BetBase.create = function create(properties) {
            return new JLBPK_Compensate_BetBase(properties);
        };

        /**
         * Encodes the specified JLBPK_Compensate_BetBase message. Does not implicitly {@link GameMsg_JLBPK.JLBPK_Compensate_BetBase.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_JLBPK.JLBPK_Compensate_BetBase
         * @static
         * @param {GameMsg_JLBPK.IJLBPK_Compensate_BetBase} message JLBPK_Compensate_BetBase message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JLBPK_Compensate_BetBase.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.UserInfo != null && message.UserInfo.length)
                for (var i = 0; i < message.UserInfo.length; ++i)
                    $root.GameMsg_JLBPK.JLBPK_UserInfo.encode(message.UserInfo[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified JLBPK_Compensate_BetBase message, length delimited. Does not implicitly {@link GameMsg_JLBPK.JLBPK_Compensate_BetBase.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_JLBPK.JLBPK_Compensate_BetBase
         * @static
         * @param {GameMsg_JLBPK.IJLBPK_Compensate_BetBase} message JLBPK_Compensate_BetBase message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JLBPK_Compensate_BetBase.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a JLBPK_Compensate_BetBase message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_JLBPK.JLBPK_Compensate_BetBase
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_JLBPK.JLBPK_Compensate_BetBase} JLBPK_Compensate_BetBase
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JLBPK_Compensate_BetBase.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_JLBPK.JLBPK_Compensate_BetBase();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.UserInfo && message.UserInfo.length))
                        message.UserInfo = [];
                    message.UserInfo.push($root.GameMsg_JLBPK.JLBPK_UserInfo.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a JLBPK_Compensate_BetBase message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_JLBPK.JLBPK_Compensate_BetBase
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_JLBPK.JLBPK_Compensate_BetBase} JLBPK_Compensate_BetBase
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JLBPK_Compensate_BetBase.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a JLBPK_Compensate_BetBase message.
         * @function verify
         * @memberof GameMsg_JLBPK.JLBPK_Compensate_BetBase
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        JLBPK_Compensate_BetBase.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.UserInfo != null && message.hasOwnProperty("UserInfo")) {
                if (!Array.isArray(message.UserInfo))
                    return "UserInfo: array expected";
                for (var i = 0; i < message.UserInfo.length; ++i) {
                    var error = $root.GameMsg_JLBPK.JLBPK_UserInfo.verify(message.UserInfo[i]);
                    if (error)
                        return "UserInfo." + error;
                }
            }
            return null;
        };

        /**
         * Creates a JLBPK_Compensate_BetBase message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_JLBPK.JLBPK_Compensate_BetBase
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_JLBPK.JLBPK_Compensate_BetBase} JLBPK_Compensate_BetBase
         */
        JLBPK_Compensate_BetBase.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_JLBPK.JLBPK_Compensate_BetBase)
                return object;
            var message = new $root.GameMsg_JLBPK.JLBPK_Compensate_BetBase();
            if (object.UserInfo) {
                if (!Array.isArray(object.UserInfo))
                    throw TypeError(".GameMsg_JLBPK.JLBPK_Compensate_BetBase.UserInfo: array expected");
                message.UserInfo = [];
                for (var i = 0; i < object.UserInfo.length; ++i) {
                    if (typeof object.UserInfo[i] !== "object")
                        throw TypeError(".GameMsg_JLBPK.JLBPK_Compensate_BetBase.UserInfo: object expected");
                    message.UserInfo[i] = $root.GameMsg_JLBPK.JLBPK_UserInfo.fromObject(object.UserInfo[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a JLBPK_Compensate_BetBase message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_JLBPK.JLBPK_Compensate_BetBase
         * @static
         * @param {GameMsg_JLBPK.JLBPK_Compensate_BetBase} message JLBPK_Compensate_BetBase
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        JLBPK_Compensate_BetBase.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.UserInfo = [];
            if (message.UserInfo && message.UserInfo.length) {
                object.UserInfo = [];
                for (var j = 0; j < message.UserInfo.length; ++j)
                    object.UserInfo[j] = $root.GameMsg_JLBPK.JLBPK_UserInfo.toObject(message.UserInfo[j], options);
            }
            return object;
        };

        /**
         * Converts this JLBPK_Compensate_BetBase to JSON.
         * @function toJSON
         * @memberof GameMsg_JLBPK.JLBPK_Compensate_BetBase
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        JLBPK_Compensate_BetBase.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return JLBPK_Compensate_BetBase;
    })();

    GameMsg_JLBPK.JLBPK_Compensate_DoubleBet = (function() {

        /**
         * Properties of a JLBPK_Compensate_DoubleBet.
         * @memberof GameMsg_JLBPK
         * @interface IJLBPK_Compensate_DoubleBet
         * @property {Array.<GameMsg_JLBPK.IJLBPK_UserInfo>|null} [UserInfo] JLBPK_Compensate_DoubleBet UserInfo
         */

        /**
         * Constructs a new JLBPK_Compensate_DoubleBet.
         * @memberof GameMsg_JLBPK
         * @classdesc Represents a JLBPK_Compensate_DoubleBet.
         * @implements IJLBPK_Compensate_DoubleBet
         * @constructor
         * @param {GameMsg_JLBPK.IJLBPK_Compensate_DoubleBet=} [properties] Properties to set
         */
        function JLBPK_Compensate_DoubleBet(properties) {
            this.UserInfo = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * JLBPK_Compensate_DoubleBet UserInfo.
         * @member {Array.<GameMsg_JLBPK.IJLBPK_UserInfo>} UserInfo
         * @memberof GameMsg_JLBPK.JLBPK_Compensate_DoubleBet
         * @instance
         */
        JLBPK_Compensate_DoubleBet.prototype.UserInfo = $util.emptyArray;

        /**
         * Creates a new JLBPK_Compensate_DoubleBet instance using the specified properties.
         * @function create
         * @memberof GameMsg_JLBPK.JLBPK_Compensate_DoubleBet
         * @static
         * @param {GameMsg_JLBPK.IJLBPK_Compensate_DoubleBet=} [properties] Properties to set
         * @returns {GameMsg_JLBPK.JLBPK_Compensate_DoubleBet} JLBPK_Compensate_DoubleBet instance
         */
        JLBPK_Compensate_DoubleBet.create = function create(properties) {
            return new JLBPK_Compensate_DoubleBet(properties);
        };

        /**
         * Encodes the specified JLBPK_Compensate_DoubleBet message. Does not implicitly {@link GameMsg_JLBPK.JLBPK_Compensate_DoubleBet.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_JLBPK.JLBPK_Compensate_DoubleBet
         * @static
         * @param {GameMsg_JLBPK.IJLBPK_Compensate_DoubleBet} message JLBPK_Compensate_DoubleBet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JLBPK_Compensate_DoubleBet.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.UserInfo != null && message.UserInfo.length)
                for (var i = 0; i < message.UserInfo.length; ++i)
                    $root.GameMsg_JLBPK.JLBPK_UserInfo.encode(message.UserInfo[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified JLBPK_Compensate_DoubleBet message, length delimited. Does not implicitly {@link GameMsg_JLBPK.JLBPK_Compensate_DoubleBet.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_JLBPK.JLBPK_Compensate_DoubleBet
         * @static
         * @param {GameMsg_JLBPK.IJLBPK_Compensate_DoubleBet} message JLBPK_Compensate_DoubleBet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JLBPK_Compensate_DoubleBet.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a JLBPK_Compensate_DoubleBet message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_JLBPK.JLBPK_Compensate_DoubleBet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_JLBPK.JLBPK_Compensate_DoubleBet} JLBPK_Compensate_DoubleBet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JLBPK_Compensate_DoubleBet.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_JLBPK.JLBPK_Compensate_DoubleBet();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.UserInfo && message.UserInfo.length))
                        message.UserInfo = [];
                    message.UserInfo.push($root.GameMsg_JLBPK.JLBPK_UserInfo.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a JLBPK_Compensate_DoubleBet message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_JLBPK.JLBPK_Compensate_DoubleBet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_JLBPK.JLBPK_Compensate_DoubleBet} JLBPK_Compensate_DoubleBet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JLBPK_Compensate_DoubleBet.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a JLBPK_Compensate_DoubleBet message.
         * @function verify
         * @memberof GameMsg_JLBPK.JLBPK_Compensate_DoubleBet
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        JLBPK_Compensate_DoubleBet.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.UserInfo != null && message.hasOwnProperty("UserInfo")) {
                if (!Array.isArray(message.UserInfo))
                    return "UserInfo: array expected";
                for (var i = 0; i < message.UserInfo.length; ++i) {
                    var error = $root.GameMsg_JLBPK.JLBPK_UserInfo.verify(message.UserInfo[i]);
                    if (error)
                        return "UserInfo." + error;
                }
            }
            return null;
        };

        /**
         * Creates a JLBPK_Compensate_DoubleBet message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_JLBPK.JLBPK_Compensate_DoubleBet
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_JLBPK.JLBPK_Compensate_DoubleBet} JLBPK_Compensate_DoubleBet
         */
        JLBPK_Compensate_DoubleBet.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_JLBPK.JLBPK_Compensate_DoubleBet)
                return object;
            var message = new $root.GameMsg_JLBPK.JLBPK_Compensate_DoubleBet();
            if (object.UserInfo) {
                if (!Array.isArray(object.UserInfo))
                    throw TypeError(".GameMsg_JLBPK.JLBPK_Compensate_DoubleBet.UserInfo: array expected");
                message.UserInfo = [];
                for (var i = 0; i < object.UserInfo.length; ++i) {
                    if (typeof object.UserInfo[i] !== "object")
                        throw TypeError(".GameMsg_JLBPK.JLBPK_Compensate_DoubleBet.UserInfo: object expected");
                    message.UserInfo[i] = $root.GameMsg_JLBPK.JLBPK_UserInfo.fromObject(object.UserInfo[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a JLBPK_Compensate_DoubleBet message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_JLBPK.JLBPK_Compensate_DoubleBet
         * @static
         * @param {GameMsg_JLBPK.JLBPK_Compensate_DoubleBet} message JLBPK_Compensate_DoubleBet
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        JLBPK_Compensate_DoubleBet.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.UserInfo = [];
            if (message.UserInfo && message.UserInfo.length) {
                object.UserInfo = [];
                for (var j = 0; j < message.UserInfo.length; ++j)
                    object.UserInfo[j] = $root.GameMsg_JLBPK.JLBPK_UserInfo.toObject(message.UserInfo[j], options);
            }
            return object;
        };

        /**
         * Converts this JLBPK_Compensate_DoubleBet to JSON.
         * @function toJSON
         * @memberof GameMsg_JLBPK.JLBPK_Compensate_DoubleBet
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        JLBPK_Compensate_DoubleBet.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return JLBPK_Compensate_DoubleBet;
    })();

    GameMsg_JLBPK.JLBPK_UpdateJackpot = (function() {

        /**
         * Properties of a JLBPK_UpdateJackpot.
         * @memberof GameMsg_JLBPK
         * @interface IJLBPK_UpdateJackpot
         * @property {number|Long} JPMoney JLBPK_UpdateJackpot JPMoney
         */

        /**
         * Constructs a new JLBPK_UpdateJackpot.
         * @memberof GameMsg_JLBPK
         * @classdesc Represents a JLBPK_UpdateJackpot.
         * @implements IJLBPK_UpdateJackpot
         * @constructor
         * @param {GameMsg_JLBPK.IJLBPK_UpdateJackpot=} [properties] Properties to set
         */
        function JLBPK_UpdateJackpot(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * JLBPK_UpdateJackpot JPMoney.
         * @member {number|Long} JPMoney
         * @memberof GameMsg_JLBPK.JLBPK_UpdateJackpot
         * @instance
         */
        JLBPK_UpdateJackpot.prototype.JPMoney = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new JLBPK_UpdateJackpot instance using the specified properties.
         * @function create
         * @memberof GameMsg_JLBPK.JLBPK_UpdateJackpot
         * @static
         * @param {GameMsg_JLBPK.IJLBPK_UpdateJackpot=} [properties] Properties to set
         * @returns {GameMsg_JLBPK.JLBPK_UpdateJackpot} JLBPK_UpdateJackpot instance
         */
        JLBPK_UpdateJackpot.create = function create(properties) {
            return new JLBPK_UpdateJackpot(properties);
        };

        /**
         * Encodes the specified JLBPK_UpdateJackpot message. Does not implicitly {@link GameMsg_JLBPK.JLBPK_UpdateJackpot.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_JLBPK.JLBPK_UpdateJackpot
         * @static
         * @param {GameMsg_JLBPK.IJLBPK_UpdateJackpot} message JLBPK_UpdateJackpot message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JLBPK_UpdateJackpot.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int64(message.JPMoney);
            return writer;
        };

        /**
         * Encodes the specified JLBPK_UpdateJackpot message, length delimited. Does not implicitly {@link GameMsg_JLBPK.JLBPK_UpdateJackpot.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_JLBPK.JLBPK_UpdateJackpot
         * @static
         * @param {GameMsg_JLBPK.IJLBPK_UpdateJackpot} message JLBPK_UpdateJackpot message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JLBPK_UpdateJackpot.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a JLBPK_UpdateJackpot message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_JLBPK.JLBPK_UpdateJackpot
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_JLBPK.JLBPK_UpdateJackpot} JLBPK_UpdateJackpot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JLBPK_UpdateJackpot.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_JLBPK.JLBPK_UpdateJackpot();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.JPMoney = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("JPMoney"))
                throw $util.ProtocolError("missing required 'JPMoney'", { instance: message });
            return message;
        };

        /**
         * Decodes a JLBPK_UpdateJackpot message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_JLBPK.JLBPK_UpdateJackpot
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_JLBPK.JLBPK_UpdateJackpot} JLBPK_UpdateJackpot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JLBPK_UpdateJackpot.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a JLBPK_UpdateJackpot message.
         * @function verify
         * @memberof GameMsg_JLBPK.JLBPK_UpdateJackpot
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        JLBPK_UpdateJackpot.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.JPMoney) && !(message.JPMoney && $util.isInteger(message.JPMoney.low) && $util.isInteger(message.JPMoney.high)))
                return "JPMoney: integer|Long expected";
            return null;
        };

        /**
         * Creates a JLBPK_UpdateJackpot message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_JLBPK.JLBPK_UpdateJackpot
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_JLBPK.JLBPK_UpdateJackpot} JLBPK_UpdateJackpot
         */
        JLBPK_UpdateJackpot.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_JLBPK.JLBPK_UpdateJackpot)
                return object;
            var message = new $root.GameMsg_JLBPK.JLBPK_UpdateJackpot();
            if (object.JPMoney != null)
                if ($util.Long)
                    (message.JPMoney = $util.Long.fromValue(object.JPMoney)).unsigned = false;
                else if (typeof object.JPMoney === "string")
                    message.JPMoney = parseInt(object.JPMoney, 10);
                else if (typeof object.JPMoney === "number")
                    message.JPMoney = object.JPMoney;
                else if (typeof object.JPMoney === "object")
                    message.JPMoney = new $util.LongBits(object.JPMoney.low >>> 0, object.JPMoney.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a JLBPK_UpdateJackpot message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_JLBPK.JLBPK_UpdateJackpot
         * @static
         * @param {GameMsg_JLBPK.JLBPK_UpdateJackpot} message JLBPK_UpdateJackpot
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        JLBPK_UpdateJackpot.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.JPMoney = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.JPMoney = options.longs === String ? "0" : 0;
            if (message.JPMoney != null && message.hasOwnProperty("JPMoney"))
                if (typeof message.JPMoney === "number")
                    object.JPMoney = options.longs === String ? String(message.JPMoney) : message.JPMoney;
                else
                    object.JPMoney = options.longs === String ? $util.Long.prototype.toString.call(message.JPMoney) : options.longs === Number ? new $util.LongBits(message.JPMoney.low >>> 0, message.JPMoney.high >>> 0).toNumber() : message.JPMoney;
            return object;
        };

        /**
         * Converts this JLBPK_UpdateJackpot to JSON.
         * @function toJSON
         * @memberof GameMsg_JLBPK.JLBPK_UpdateJackpot
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        JLBPK_UpdateJackpot.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return JLBPK_UpdateJackpot;
    })();

    GameMsg_JLBPK.JLBPK_Settlement = (function() {

        /**
         * Properties of a JLBPK_Settlement.
         * @memberof GameMsg_JLBPK
         * @interface IJLBPK_Settlement
         * @property {GameMsg_JLBPK.IJLBPK_UserCards} BankerCards JLBPK_Settlement BankerCards
         * @property {Array.<GameMsg_JLBPK.IJLBPK_UserInfo>|null} [UserInfo] JLBPK_Settlement UserInfo
         */

        /**
         * Constructs a new JLBPK_Settlement.
         * @memberof GameMsg_JLBPK
         * @classdesc Represents a JLBPK_Settlement.
         * @implements IJLBPK_Settlement
         * @constructor
         * @param {GameMsg_JLBPK.IJLBPK_Settlement=} [properties] Properties to set
         */
        function JLBPK_Settlement(properties) {
            this.UserInfo = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * JLBPK_Settlement BankerCards.
         * @member {GameMsg_JLBPK.IJLBPK_UserCards} BankerCards
         * @memberof GameMsg_JLBPK.JLBPK_Settlement
         * @instance
         */
        JLBPK_Settlement.prototype.BankerCards = null;

        /**
         * JLBPK_Settlement UserInfo.
         * @member {Array.<GameMsg_JLBPK.IJLBPK_UserInfo>} UserInfo
         * @memberof GameMsg_JLBPK.JLBPK_Settlement
         * @instance
         */
        JLBPK_Settlement.prototype.UserInfo = $util.emptyArray;

        /**
         * Creates a new JLBPK_Settlement instance using the specified properties.
         * @function create
         * @memberof GameMsg_JLBPK.JLBPK_Settlement
         * @static
         * @param {GameMsg_JLBPK.IJLBPK_Settlement=} [properties] Properties to set
         * @returns {GameMsg_JLBPK.JLBPK_Settlement} JLBPK_Settlement instance
         */
        JLBPK_Settlement.create = function create(properties) {
            return new JLBPK_Settlement(properties);
        };

        /**
         * Encodes the specified JLBPK_Settlement message. Does not implicitly {@link GameMsg_JLBPK.JLBPK_Settlement.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_JLBPK.JLBPK_Settlement
         * @static
         * @param {GameMsg_JLBPK.IJLBPK_Settlement} message JLBPK_Settlement message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JLBPK_Settlement.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            $root.GameMsg_JLBPK.JLBPK_UserCards.encode(message.BankerCards, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.UserInfo != null && message.UserInfo.length)
                for (var i = 0; i < message.UserInfo.length; ++i)
                    $root.GameMsg_JLBPK.JLBPK_UserInfo.encode(message.UserInfo[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified JLBPK_Settlement message, length delimited. Does not implicitly {@link GameMsg_JLBPK.JLBPK_Settlement.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_JLBPK.JLBPK_Settlement
         * @static
         * @param {GameMsg_JLBPK.IJLBPK_Settlement} message JLBPK_Settlement message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JLBPK_Settlement.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a JLBPK_Settlement message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_JLBPK.JLBPK_Settlement
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_JLBPK.JLBPK_Settlement} JLBPK_Settlement
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JLBPK_Settlement.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_JLBPK.JLBPK_Settlement();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.BankerCards = $root.GameMsg_JLBPK.JLBPK_UserCards.decode(reader, reader.uint32());
                    break;
                case 2:
                    if (!(message.UserInfo && message.UserInfo.length))
                        message.UserInfo = [];
                    message.UserInfo.push($root.GameMsg_JLBPK.JLBPK_UserInfo.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("BankerCards"))
                throw $util.ProtocolError("missing required 'BankerCards'", { instance: message });
            return message;
        };

        /**
         * Decodes a JLBPK_Settlement message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_JLBPK.JLBPK_Settlement
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_JLBPK.JLBPK_Settlement} JLBPK_Settlement
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JLBPK_Settlement.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a JLBPK_Settlement message.
         * @function verify
         * @memberof GameMsg_JLBPK.JLBPK_Settlement
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        JLBPK_Settlement.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            {
                var error = $root.GameMsg_JLBPK.JLBPK_UserCards.verify(message.BankerCards);
                if (error)
                    return "BankerCards." + error;
            }
            if (message.UserInfo != null && message.hasOwnProperty("UserInfo")) {
                if (!Array.isArray(message.UserInfo))
                    return "UserInfo: array expected";
                for (var i = 0; i < message.UserInfo.length; ++i) {
                    var error = $root.GameMsg_JLBPK.JLBPK_UserInfo.verify(message.UserInfo[i]);
                    if (error)
                        return "UserInfo." + error;
                }
            }
            return null;
        };

        /**
         * Creates a JLBPK_Settlement message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_JLBPK.JLBPK_Settlement
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_JLBPK.JLBPK_Settlement} JLBPK_Settlement
         */
        JLBPK_Settlement.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_JLBPK.JLBPK_Settlement)
                return object;
            var message = new $root.GameMsg_JLBPK.JLBPK_Settlement();
            if (object.BankerCards != null) {
                if (typeof object.BankerCards !== "object")
                    throw TypeError(".GameMsg_JLBPK.JLBPK_Settlement.BankerCards: object expected");
                message.BankerCards = $root.GameMsg_JLBPK.JLBPK_UserCards.fromObject(object.BankerCards);
            }
            if (object.UserInfo) {
                if (!Array.isArray(object.UserInfo))
                    throw TypeError(".GameMsg_JLBPK.JLBPK_Settlement.UserInfo: array expected");
                message.UserInfo = [];
                for (var i = 0; i < object.UserInfo.length; ++i) {
                    if (typeof object.UserInfo[i] !== "object")
                        throw TypeError(".GameMsg_JLBPK.JLBPK_Settlement.UserInfo: object expected");
                    message.UserInfo[i] = $root.GameMsg_JLBPK.JLBPK_UserInfo.fromObject(object.UserInfo[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a JLBPK_Settlement message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_JLBPK.JLBPK_Settlement
         * @static
         * @param {GameMsg_JLBPK.JLBPK_Settlement} message JLBPK_Settlement
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        JLBPK_Settlement.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.UserInfo = [];
            if (options.defaults)
                object.BankerCards = null;
            if (message.BankerCards != null && message.hasOwnProperty("BankerCards"))
                object.BankerCards = $root.GameMsg_JLBPK.JLBPK_UserCards.toObject(message.BankerCards, options);
            if (message.UserInfo && message.UserInfo.length) {
                object.UserInfo = [];
                for (var j = 0; j < message.UserInfo.length; ++j)
                    object.UserInfo[j] = $root.GameMsg_JLBPK.JLBPK_UserInfo.toObject(message.UserInfo[j], options);
            }
            return object;
        };

        /**
         * Converts this JLBPK_Settlement to JSON.
         * @function toJSON
         * @memberof GameMsg_JLBPK.JLBPK_Settlement
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        JLBPK_Settlement.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return JLBPK_Settlement;
    })();

    GameMsg_JLBPK.JLBPK_GameBeginCountDown = (function() {

        /**
         * Properties of a JLBPK_GameBeginCountDown.
         * @memberof GameMsg_JLBPK
         * @interface IJLBPK_GameBeginCountDown
         * @property {number} Time JLBPK_GameBeginCountDown Time
         */

        /**
         * Constructs a new JLBPK_GameBeginCountDown.
         * @memberof GameMsg_JLBPK
         * @classdesc Represents a JLBPK_GameBeginCountDown.
         * @implements IJLBPK_GameBeginCountDown
         * @constructor
         * @param {GameMsg_JLBPK.IJLBPK_GameBeginCountDown=} [properties] Properties to set
         */
        function JLBPK_GameBeginCountDown(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * JLBPK_GameBeginCountDown Time.
         * @member {number} Time
         * @memberof GameMsg_JLBPK.JLBPK_GameBeginCountDown
         * @instance
         */
        JLBPK_GameBeginCountDown.prototype.Time = 0;

        /**
         * Creates a new JLBPK_GameBeginCountDown instance using the specified properties.
         * @function create
         * @memberof GameMsg_JLBPK.JLBPK_GameBeginCountDown
         * @static
         * @param {GameMsg_JLBPK.IJLBPK_GameBeginCountDown=} [properties] Properties to set
         * @returns {GameMsg_JLBPK.JLBPK_GameBeginCountDown} JLBPK_GameBeginCountDown instance
         */
        JLBPK_GameBeginCountDown.create = function create(properties) {
            return new JLBPK_GameBeginCountDown(properties);
        };

        /**
         * Encodes the specified JLBPK_GameBeginCountDown message. Does not implicitly {@link GameMsg_JLBPK.JLBPK_GameBeginCountDown.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_JLBPK.JLBPK_GameBeginCountDown
         * @static
         * @param {GameMsg_JLBPK.IJLBPK_GameBeginCountDown} message JLBPK_GameBeginCountDown message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JLBPK_GameBeginCountDown.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.Time);
            return writer;
        };

        /**
         * Encodes the specified JLBPK_GameBeginCountDown message, length delimited. Does not implicitly {@link GameMsg_JLBPK.JLBPK_GameBeginCountDown.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_JLBPK.JLBPK_GameBeginCountDown
         * @static
         * @param {GameMsg_JLBPK.IJLBPK_GameBeginCountDown} message JLBPK_GameBeginCountDown message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JLBPK_GameBeginCountDown.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a JLBPK_GameBeginCountDown message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_JLBPK.JLBPK_GameBeginCountDown
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_JLBPK.JLBPK_GameBeginCountDown} JLBPK_GameBeginCountDown
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JLBPK_GameBeginCountDown.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_JLBPK.JLBPK_GameBeginCountDown();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Time = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("Time"))
                throw $util.ProtocolError("missing required 'Time'", { instance: message });
            return message;
        };

        /**
         * Decodes a JLBPK_GameBeginCountDown message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_JLBPK.JLBPK_GameBeginCountDown
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_JLBPK.JLBPK_GameBeginCountDown} JLBPK_GameBeginCountDown
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JLBPK_GameBeginCountDown.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a JLBPK_GameBeginCountDown message.
         * @function verify
         * @memberof GameMsg_JLBPK.JLBPK_GameBeginCountDown
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        JLBPK_GameBeginCountDown.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.Time))
                return "Time: integer expected";
            return null;
        };

        /**
         * Creates a JLBPK_GameBeginCountDown message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_JLBPK.JLBPK_GameBeginCountDown
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_JLBPK.JLBPK_GameBeginCountDown} JLBPK_GameBeginCountDown
         */
        JLBPK_GameBeginCountDown.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_JLBPK.JLBPK_GameBeginCountDown)
                return object;
            var message = new $root.GameMsg_JLBPK.JLBPK_GameBeginCountDown();
            if (object.Time != null)
                message.Time = object.Time | 0;
            return message;
        };

        /**
         * Creates a plain object from a JLBPK_GameBeginCountDown message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_JLBPK.JLBPK_GameBeginCountDown
         * @static
         * @param {GameMsg_JLBPK.JLBPK_GameBeginCountDown} message JLBPK_GameBeginCountDown
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        JLBPK_GameBeginCountDown.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.Time = 0;
            if (message.Time != null && message.hasOwnProperty("Time"))
                object.Time = message.Time;
            return object;
        };

        /**
         * Converts this JLBPK_GameBeginCountDown to JSON.
         * @function toJSON
         * @memberof GameMsg_JLBPK.JLBPK_GameBeginCountDown
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        JLBPK_GameBeginCountDown.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return JLBPK_GameBeginCountDown;
    })();

    GameMsg_JLBPK.JLBPK_SuperTool_Msg_GetVIPUserListRet = (function() {

        /**
         * Properties of a JLBPK_SuperTool_Msg_GetVIPUserListRet.
         * @memberof GameMsg_JLBPK
         * @interface IJLBPK_SuperTool_Msg_GetVIPUserListRet
         * @property {Array.<GameMsg_JLBPK.IJLBPK_SuperTool_Msg_VIPUserData>|null} [UserList] JLBPK_SuperTool_Msg_GetVIPUserListRet UserList
         */

        /**
         * Constructs a new JLBPK_SuperTool_Msg_GetVIPUserListRet.
         * @memberof GameMsg_JLBPK
         * @classdesc Represents a JLBPK_SuperTool_Msg_GetVIPUserListRet.
         * @implements IJLBPK_SuperTool_Msg_GetVIPUserListRet
         * @constructor
         * @param {GameMsg_JLBPK.IJLBPK_SuperTool_Msg_GetVIPUserListRet=} [properties] Properties to set
         */
        function JLBPK_SuperTool_Msg_GetVIPUserListRet(properties) {
            this.UserList = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * JLBPK_SuperTool_Msg_GetVIPUserListRet UserList.
         * @member {Array.<GameMsg_JLBPK.IJLBPK_SuperTool_Msg_VIPUserData>} UserList
         * @memberof GameMsg_JLBPK.JLBPK_SuperTool_Msg_GetVIPUserListRet
         * @instance
         */
        JLBPK_SuperTool_Msg_GetVIPUserListRet.prototype.UserList = $util.emptyArray;

        /**
         * Creates a new JLBPK_SuperTool_Msg_GetVIPUserListRet instance using the specified properties.
         * @function create
         * @memberof GameMsg_JLBPK.JLBPK_SuperTool_Msg_GetVIPUserListRet
         * @static
         * @param {GameMsg_JLBPK.IJLBPK_SuperTool_Msg_GetVIPUserListRet=} [properties] Properties to set
         * @returns {GameMsg_JLBPK.JLBPK_SuperTool_Msg_GetVIPUserListRet} JLBPK_SuperTool_Msg_GetVIPUserListRet instance
         */
        JLBPK_SuperTool_Msg_GetVIPUserListRet.create = function create(properties) {
            return new JLBPK_SuperTool_Msg_GetVIPUserListRet(properties);
        };

        /**
         * Encodes the specified JLBPK_SuperTool_Msg_GetVIPUserListRet message. Does not implicitly {@link GameMsg_JLBPK.JLBPK_SuperTool_Msg_GetVIPUserListRet.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_JLBPK.JLBPK_SuperTool_Msg_GetVIPUserListRet
         * @static
         * @param {GameMsg_JLBPK.IJLBPK_SuperTool_Msg_GetVIPUserListRet} message JLBPK_SuperTool_Msg_GetVIPUserListRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JLBPK_SuperTool_Msg_GetVIPUserListRet.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.UserList != null && message.UserList.length)
                for (var i = 0; i < message.UserList.length; ++i)
                    $root.GameMsg_JLBPK.JLBPK_SuperTool_Msg_VIPUserData.encode(message.UserList[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified JLBPK_SuperTool_Msg_GetVIPUserListRet message, length delimited. Does not implicitly {@link GameMsg_JLBPK.JLBPK_SuperTool_Msg_GetVIPUserListRet.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_JLBPK.JLBPK_SuperTool_Msg_GetVIPUserListRet
         * @static
         * @param {GameMsg_JLBPK.IJLBPK_SuperTool_Msg_GetVIPUserListRet} message JLBPK_SuperTool_Msg_GetVIPUserListRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JLBPK_SuperTool_Msg_GetVIPUserListRet.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a JLBPK_SuperTool_Msg_GetVIPUserListRet message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_JLBPK.JLBPK_SuperTool_Msg_GetVIPUserListRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_JLBPK.JLBPK_SuperTool_Msg_GetVIPUserListRet} JLBPK_SuperTool_Msg_GetVIPUserListRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JLBPK_SuperTool_Msg_GetVIPUserListRet.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_JLBPK.JLBPK_SuperTool_Msg_GetVIPUserListRet();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.UserList && message.UserList.length))
                        message.UserList = [];
                    message.UserList.push($root.GameMsg_JLBPK.JLBPK_SuperTool_Msg_VIPUserData.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a JLBPK_SuperTool_Msg_GetVIPUserListRet message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_JLBPK.JLBPK_SuperTool_Msg_GetVIPUserListRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_JLBPK.JLBPK_SuperTool_Msg_GetVIPUserListRet} JLBPK_SuperTool_Msg_GetVIPUserListRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JLBPK_SuperTool_Msg_GetVIPUserListRet.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a JLBPK_SuperTool_Msg_GetVIPUserListRet message.
         * @function verify
         * @memberof GameMsg_JLBPK.JLBPK_SuperTool_Msg_GetVIPUserListRet
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        JLBPK_SuperTool_Msg_GetVIPUserListRet.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.UserList != null && message.hasOwnProperty("UserList")) {
                if (!Array.isArray(message.UserList))
                    return "UserList: array expected";
                for (var i = 0; i < message.UserList.length; ++i) {
                    var error = $root.GameMsg_JLBPK.JLBPK_SuperTool_Msg_VIPUserData.verify(message.UserList[i]);
                    if (error)
                        return "UserList." + error;
                }
            }
            return null;
        };

        /**
         * Creates a JLBPK_SuperTool_Msg_GetVIPUserListRet message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_JLBPK.JLBPK_SuperTool_Msg_GetVIPUserListRet
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_JLBPK.JLBPK_SuperTool_Msg_GetVIPUserListRet} JLBPK_SuperTool_Msg_GetVIPUserListRet
         */
        JLBPK_SuperTool_Msg_GetVIPUserListRet.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_JLBPK.JLBPK_SuperTool_Msg_GetVIPUserListRet)
                return object;
            var message = new $root.GameMsg_JLBPK.JLBPK_SuperTool_Msg_GetVIPUserListRet();
            if (object.UserList) {
                if (!Array.isArray(object.UserList))
                    throw TypeError(".GameMsg_JLBPK.JLBPK_SuperTool_Msg_GetVIPUserListRet.UserList: array expected");
                message.UserList = [];
                for (var i = 0; i < object.UserList.length; ++i) {
                    if (typeof object.UserList[i] !== "object")
                        throw TypeError(".GameMsg_JLBPK.JLBPK_SuperTool_Msg_GetVIPUserListRet.UserList: object expected");
                    message.UserList[i] = $root.GameMsg_JLBPK.JLBPK_SuperTool_Msg_VIPUserData.fromObject(object.UserList[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a JLBPK_SuperTool_Msg_GetVIPUserListRet message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_JLBPK.JLBPK_SuperTool_Msg_GetVIPUserListRet
         * @static
         * @param {GameMsg_JLBPK.JLBPK_SuperTool_Msg_GetVIPUserListRet} message JLBPK_SuperTool_Msg_GetVIPUserListRet
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        JLBPK_SuperTool_Msg_GetVIPUserListRet.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.UserList = [];
            if (message.UserList && message.UserList.length) {
                object.UserList = [];
                for (var j = 0; j < message.UserList.length; ++j)
                    object.UserList[j] = $root.GameMsg_JLBPK.JLBPK_SuperTool_Msg_VIPUserData.toObject(message.UserList[j], options);
            }
            return object;
        };

        /**
         * Converts this JLBPK_SuperTool_Msg_GetVIPUserListRet to JSON.
         * @function toJSON
         * @memberof GameMsg_JLBPK.JLBPK_SuperTool_Msg_GetVIPUserListRet
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        JLBPK_SuperTool_Msg_GetVIPUserListRet.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return JLBPK_SuperTool_Msg_GetVIPUserListRet;
    })();

    GameMsg_JLBPK.JLBPK_SuperTool_Msg_VIPUserData = (function() {

        /**
         * Properties of a JLBPK_SuperTool_Msg_VIPUserData.
         * @memberof GameMsg_JLBPK
         * @interface IJLBPK_SuperTool_Msg_VIPUserData
         * @property {number} UserID JLBPK_SuperTool_Msg_VIPUserData UserID
         * @property {number} Finished JLBPK_SuperTool_Msg_VIPUserData Finished
         * @property {number} Weight JLBPK_SuperTool_Msg_VIPUserData Weight
         * @property {number|Long} TargetMoney JLBPK_SuperTool_Msg_VIPUserData TargetMoney
         * @property {number|Long} AccumulatedMoney JLBPK_SuperTool_Msg_VIPUserData AccumulatedMoney
         * @property {number} Status JLBPK_SuperTool_Msg_VIPUserData Status
         */

        /**
         * Constructs a new JLBPK_SuperTool_Msg_VIPUserData.
         * @memberof GameMsg_JLBPK
         * @classdesc Represents a JLBPK_SuperTool_Msg_VIPUserData.
         * @implements IJLBPK_SuperTool_Msg_VIPUserData
         * @constructor
         * @param {GameMsg_JLBPK.IJLBPK_SuperTool_Msg_VIPUserData=} [properties] Properties to set
         */
        function JLBPK_SuperTool_Msg_VIPUserData(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * JLBPK_SuperTool_Msg_VIPUserData UserID.
         * @member {number} UserID
         * @memberof GameMsg_JLBPK.JLBPK_SuperTool_Msg_VIPUserData
         * @instance
         */
        JLBPK_SuperTool_Msg_VIPUserData.prototype.UserID = 0;

        /**
         * JLBPK_SuperTool_Msg_VIPUserData Finished.
         * @member {number} Finished
         * @memberof GameMsg_JLBPK.JLBPK_SuperTool_Msg_VIPUserData
         * @instance
         */
        JLBPK_SuperTool_Msg_VIPUserData.prototype.Finished = 0;

        /**
         * JLBPK_SuperTool_Msg_VIPUserData Weight.
         * @member {number} Weight
         * @memberof GameMsg_JLBPK.JLBPK_SuperTool_Msg_VIPUserData
         * @instance
         */
        JLBPK_SuperTool_Msg_VIPUserData.prototype.Weight = 0;

        /**
         * JLBPK_SuperTool_Msg_VIPUserData TargetMoney.
         * @member {number|Long} TargetMoney
         * @memberof GameMsg_JLBPK.JLBPK_SuperTool_Msg_VIPUserData
         * @instance
         */
        JLBPK_SuperTool_Msg_VIPUserData.prototype.TargetMoney = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * JLBPK_SuperTool_Msg_VIPUserData AccumulatedMoney.
         * @member {number|Long} AccumulatedMoney
         * @memberof GameMsg_JLBPK.JLBPK_SuperTool_Msg_VIPUserData
         * @instance
         */
        JLBPK_SuperTool_Msg_VIPUserData.prototype.AccumulatedMoney = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * JLBPK_SuperTool_Msg_VIPUserData Status.
         * @member {number} Status
         * @memberof GameMsg_JLBPK.JLBPK_SuperTool_Msg_VIPUserData
         * @instance
         */
        JLBPK_SuperTool_Msg_VIPUserData.prototype.Status = 0;

        /**
         * Creates a new JLBPK_SuperTool_Msg_VIPUserData instance using the specified properties.
         * @function create
         * @memberof GameMsg_JLBPK.JLBPK_SuperTool_Msg_VIPUserData
         * @static
         * @param {GameMsg_JLBPK.IJLBPK_SuperTool_Msg_VIPUserData=} [properties] Properties to set
         * @returns {GameMsg_JLBPK.JLBPK_SuperTool_Msg_VIPUserData} JLBPK_SuperTool_Msg_VIPUserData instance
         */
        JLBPK_SuperTool_Msg_VIPUserData.create = function create(properties) {
            return new JLBPK_SuperTool_Msg_VIPUserData(properties);
        };

        /**
         * Encodes the specified JLBPK_SuperTool_Msg_VIPUserData message. Does not implicitly {@link GameMsg_JLBPK.JLBPK_SuperTool_Msg_VIPUserData.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_JLBPK.JLBPK_SuperTool_Msg_VIPUserData
         * @static
         * @param {GameMsg_JLBPK.IJLBPK_SuperTool_Msg_VIPUserData} message JLBPK_SuperTool_Msg_VIPUserData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JLBPK_SuperTool_Msg_VIPUserData.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.UserID);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.Finished);
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.Weight);
            writer.uint32(/* id 4, wireType 0 =*/32).int64(message.TargetMoney);
            writer.uint32(/* id 5, wireType 0 =*/40).int64(message.AccumulatedMoney);
            writer.uint32(/* id 6, wireType 0 =*/48).int32(message.Status);
            return writer;
        };

        /**
         * Encodes the specified JLBPK_SuperTool_Msg_VIPUserData message, length delimited. Does not implicitly {@link GameMsg_JLBPK.JLBPK_SuperTool_Msg_VIPUserData.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_JLBPK.JLBPK_SuperTool_Msg_VIPUserData
         * @static
         * @param {GameMsg_JLBPK.IJLBPK_SuperTool_Msg_VIPUserData} message JLBPK_SuperTool_Msg_VIPUserData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JLBPK_SuperTool_Msg_VIPUserData.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a JLBPK_SuperTool_Msg_VIPUserData message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_JLBPK.JLBPK_SuperTool_Msg_VIPUserData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_JLBPK.JLBPK_SuperTool_Msg_VIPUserData} JLBPK_SuperTool_Msg_VIPUserData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JLBPK_SuperTool_Msg_VIPUserData.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_JLBPK.JLBPK_SuperTool_Msg_VIPUserData();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.UserID = reader.int32();
                    break;
                case 2:
                    message.Finished = reader.int32();
                    break;
                case 3:
                    message.Weight = reader.int32();
                    break;
                case 4:
                    message.TargetMoney = reader.int64();
                    break;
                case 5:
                    message.AccumulatedMoney = reader.int64();
                    break;
                case 6:
                    message.Status = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("UserID"))
                throw $util.ProtocolError("missing required 'UserID'", { instance: message });
            if (!message.hasOwnProperty("Finished"))
                throw $util.ProtocolError("missing required 'Finished'", { instance: message });
            if (!message.hasOwnProperty("Weight"))
                throw $util.ProtocolError("missing required 'Weight'", { instance: message });
            if (!message.hasOwnProperty("TargetMoney"))
                throw $util.ProtocolError("missing required 'TargetMoney'", { instance: message });
            if (!message.hasOwnProperty("AccumulatedMoney"))
                throw $util.ProtocolError("missing required 'AccumulatedMoney'", { instance: message });
            if (!message.hasOwnProperty("Status"))
                throw $util.ProtocolError("missing required 'Status'", { instance: message });
            return message;
        };

        /**
         * Decodes a JLBPK_SuperTool_Msg_VIPUserData message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_JLBPK.JLBPK_SuperTool_Msg_VIPUserData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_JLBPK.JLBPK_SuperTool_Msg_VIPUserData} JLBPK_SuperTool_Msg_VIPUserData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JLBPK_SuperTool_Msg_VIPUserData.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a JLBPK_SuperTool_Msg_VIPUserData message.
         * @function verify
         * @memberof GameMsg_JLBPK.JLBPK_SuperTool_Msg_VIPUserData
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        JLBPK_SuperTool_Msg_VIPUserData.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.UserID))
                return "UserID: integer expected";
            if (!$util.isInteger(message.Finished))
                return "Finished: integer expected";
            if (!$util.isInteger(message.Weight))
                return "Weight: integer expected";
            if (!$util.isInteger(message.TargetMoney) && !(message.TargetMoney && $util.isInteger(message.TargetMoney.low) && $util.isInteger(message.TargetMoney.high)))
                return "TargetMoney: integer|Long expected";
            if (!$util.isInteger(message.AccumulatedMoney) && !(message.AccumulatedMoney && $util.isInteger(message.AccumulatedMoney.low) && $util.isInteger(message.AccumulatedMoney.high)))
                return "AccumulatedMoney: integer|Long expected";
            if (!$util.isInteger(message.Status))
                return "Status: integer expected";
            return null;
        };

        /**
         * Creates a JLBPK_SuperTool_Msg_VIPUserData message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_JLBPK.JLBPK_SuperTool_Msg_VIPUserData
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_JLBPK.JLBPK_SuperTool_Msg_VIPUserData} JLBPK_SuperTool_Msg_VIPUserData
         */
        JLBPK_SuperTool_Msg_VIPUserData.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_JLBPK.JLBPK_SuperTool_Msg_VIPUserData)
                return object;
            var message = new $root.GameMsg_JLBPK.JLBPK_SuperTool_Msg_VIPUserData();
            if (object.UserID != null)
                message.UserID = object.UserID | 0;
            if (object.Finished != null)
                message.Finished = object.Finished | 0;
            if (object.Weight != null)
                message.Weight = object.Weight | 0;
            if (object.TargetMoney != null)
                if ($util.Long)
                    (message.TargetMoney = $util.Long.fromValue(object.TargetMoney)).unsigned = false;
                else if (typeof object.TargetMoney === "string")
                    message.TargetMoney = parseInt(object.TargetMoney, 10);
                else if (typeof object.TargetMoney === "number")
                    message.TargetMoney = object.TargetMoney;
                else if (typeof object.TargetMoney === "object")
                    message.TargetMoney = new $util.LongBits(object.TargetMoney.low >>> 0, object.TargetMoney.high >>> 0).toNumber();
            if (object.AccumulatedMoney != null)
                if ($util.Long)
                    (message.AccumulatedMoney = $util.Long.fromValue(object.AccumulatedMoney)).unsigned = false;
                else if (typeof object.AccumulatedMoney === "string")
                    message.AccumulatedMoney = parseInt(object.AccumulatedMoney, 10);
                else if (typeof object.AccumulatedMoney === "number")
                    message.AccumulatedMoney = object.AccumulatedMoney;
                else if (typeof object.AccumulatedMoney === "object")
                    message.AccumulatedMoney = new $util.LongBits(object.AccumulatedMoney.low >>> 0, object.AccumulatedMoney.high >>> 0).toNumber();
            if (object.Status != null)
                message.Status = object.Status | 0;
            return message;
        };

        /**
         * Creates a plain object from a JLBPK_SuperTool_Msg_VIPUserData message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_JLBPK.JLBPK_SuperTool_Msg_VIPUserData
         * @static
         * @param {GameMsg_JLBPK.JLBPK_SuperTool_Msg_VIPUserData} message JLBPK_SuperTool_Msg_VIPUserData
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        JLBPK_SuperTool_Msg_VIPUserData.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.UserID = 0;
                object.Finished = 0;
                object.Weight = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.TargetMoney = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.TargetMoney = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.AccumulatedMoney = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.AccumulatedMoney = options.longs === String ? "0" : 0;
                object.Status = 0;
            }
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                object.UserID = message.UserID;
            if (message.Finished != null && message.hasOwnProperty("Finished"))
                object.Finished = message.Finished;
            if (message.Weight != null && message.hasOwnProperty("Weight"))
                object.Weight = message.Weight;
            if (message.TargetMoney != null && message.hasOwnProperty("TargetMoney"))
                if (typeof message.TargetMoney === "number")
                    object.TargetMoney = options.longs === String ? String(message.TargetMoney) : message.TargetMoney;
                else
                    object.TargetMoney = options.longs === String ? $util.Long.prototype.toString.call(message.TargetMoney) : options.longs === Number ? new $util.LongBits(message.TargetMoney.low >>> 0, message.TargetMoney.high >>> 0).toNumber() : message.TargetMoney;
            if (message.AccumulatedMoney != null && message.hasOwnProperty("AccumulatedMoney"))
                if (typeof message.AccumulatedMoney === "number")
                    object.AccumulatedMoney = options.longs === String ? String(message.AccumulatedMoney) : message.AccumulatedMoney;
                else
                    object.AccumulatedMoney = options.longs === String ? $util.Long.prototype.toString.call(message.AccumulatedMoney) : options.longs === Number ? new $util.LongBits(message.AccumulatedMoney.low >>> 0, message.AccumulatedMoney.high >>> 0).toNumber() : message.AccumulatedMoney;
            if (message.Status != null && message.hasOwnProperty("Status"))
                object.Status = message.Status;
            return object;
        };

        /**
         * Converts this JLBPK_SuperTool_Msg_VIPUserData to JSON.
         * @function toJSON
         * @memberof GameMsg_JLBPK.JLBPK_SuperTool_Msg_VIPUserData
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        JLBPK_SuperTool_Msg_VIPUserData.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return JLBPK_SuperTool_Msg_VIPUserData;
    })();

    return GameMsg_JLBPK;
})();

module.exports = $root;
