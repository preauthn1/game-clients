/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

//var $protobuf = require("protobufjs/minimal");
var $protobuf = protobuf;

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.hbsl = (function() {

    /**
     * Namespace hbsl.
     * @exports hbsl
     * @namespace
     */
    var hbsl = {};

    hbsl.HBSL_Msg_GameInfo = (function() {

        /**
         * Properties of a HBSL_Msg_GameInfo.
         * @memberof hbsl
         * @interface IHBSL_Msg_GameInfo
         * @property {number|null} [HBCount] HBSL_Msg_GameInfo HBCount
         * @property {number|null} [LandmineRate] HBSL_Msg_GameInfo LandmineRate
         * @property {number|Long|null} [HBValue] HBSL_Msg_GameInfo HBValue
         * @property {hbsl.IHBSL_Msg_UserInfo|null} [AllUserInfo] HBSL_Msg_GameInfo AllUserInfo
         * @property {hbsl.IHBSL_Msg_UserInfo|null} [SelfUserInfo] HBSL_Msg_GameInfo SelfUserInfo
         * @property {string|null} [PokerManual] HBSL_Msg_GameInfo PokerManual
         */

        /**
         * Constructs a new HBSL_Msg_GameInfo.
         * @memberof hbsl
         * @classdesc Represents a HBSL_Msg_GameInfo.
         * @implements IHBSL_Msg_GameInfo
         * @constructor
         * @param {hbsl.IHBSL_Msg_GameInfo=} [properties] Properties to set
         */
        function HBSL_Msg_GameInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * HBSL_Msg_GameInfo HBCount.
         * @member {number} HBCount
         * @memberof hbsl.HBSL_Msg_GameInfo
         * @instance
         */
        HBSL_Msg_GameInfo.prototype.HBCount = 0;

        /**
         * HBSL_Msg_GameInfo LandmineRate.
         * @member {number} LandmineRate
         * @memberof hbsl.HBSL_Msg_GameInfo
         * @instance
         */
        HBSL_Msg_GameInfo.prototype.LandmineRate = 0;

        /**
         * HBSL_Msg_GameInfo HBValue.
         * @member {number|Long} HBValue
         * @memberof hbsl.HBSL_Msg_GameInfo
         * @instance
         */
        HBSL_Msg_GameInfo.prototype.HBValue = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * HBSL_Msg_GameInfo AllUserInfo.
         * @member {hbsl.IHBSL_Msg_UserInfo|null|undefined} AllUserInfo
         * @memberof hbsl.HBSL_Msg_GameInfo
         * @instance
         */
        HBSL_Msg_GameInfo.prototype.AllUserInfo = null;

        /**
         * HBSL_Msg_GameInfo SelfUserInfo.
         * @member {hbsl.IHBSL_Msg_UserInfo|null|undefined} SelfUserInfo
         * @memberof hbsl.HBSL_Msg_GameInfo
         * @instance
         */
        HBSL_Msg_GameInfo.prototype.SelfUserInfo = null;

        /**
         * HBSL_Msg_GameInfo PokerManual.
         * @member {string} PokerManual
         * @memberof hbsl.HBSL_Msg_GameInfo
         * @instance
         */
        HBSL_Msg_GameInfo.prototype.PokerManual = "";

        /**
         * Creates a new HBSL_Msg_GameInfo instance using the specified properties.
         * @function create
         * @memberof hbsl.HBSL_Msg_GameInfo
         * @static
         * @param {hbsl.IHBSL_Msg_GameInfo=} [properties] Properties to set
         * @returns {hbsl.HBSL_Msg_GameInfo} HBSL_Msg_GameInfo instance
         */
        HBSL_Msg_GameInfo.create = function create(properties) {
            return new HBSL_Msg_GameInfo(properties);
        };

        /**
         * Encodes the specified HBSL_Msg_GameInfo message. Does not implicitly {@link hbsl.HBSL_Msg_GameInfo.verify|verify} messages.
         * @function encode
         * @memberof hbsl.HBSL_Msg_GameInfo
         * @static
         * @param {hbsl.IHBSL_Msg_GameInfo} message HBSL_Msg_GameInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HBSL_Msg_GameInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.HBCount != null && message.hasOwnProperty("HBCount"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.HBCount);
            if (message.LandmineRate != null && message.hasOwnProperty("LandmineRate"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.LandmineRate);
            if (message.HBValue != null && message.hasOwnProperty("HBValue"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.HBValue);
            if (message.AllUserInfo != null && message.hasOwnProperty("AllUserInfo"))
                $root.hbsl.HBSL_Msg_UserInfo.encode(message.AllUserInfo, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.SelfUserInfo != null && message.hasOwnProperty("SelfUserInfo"))
                $root.hbsl.HBSL_Msg_UserInfo.encode(message.SelfUserInfo, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            if (message.PokerManual != null && message.hasOwnProperty("PokerManual"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.PokerManual);
            return writer;
        };

        /**
         * Encodes the specified HBSL_Msg_GameInfo message, length delimited. Does not implicitly {@link hbsl.HBSL_Msg_GameInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof hbsl.HBSL_Msg_GameInfo
         * @static
         * @param {hbsl.IHBSL_Msg_GameInfo} message HBSL_Msg_GameInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HBSL_Msg_GameInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a HBSL_Msg_GameInfo message from the specified reader or buffer.
         * @function decode
         * @memberof hbsl.HBSL_Msg_GameInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {hbsl.HBSL_Msg_GameInfo} HBSL_Msg_GameInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HBSL_Msg_GameInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.hbsl.HBSL_Msg_GameInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.HBCount = reader.int32();
                    break;
                case 2:
                    message.LandmineRate = reader.int32();
                    break;
                case 3:
                    message.HBValue = reader.int64();
                    break;
                case 4:
                    message.AllUserInfo = $root.hbsl.HBSL_Msg_UserInfo.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.SelfUserInfo = $root.hbsl.HBSL_Msg_UserInfo.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.PokerManual = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a HBSL_Msg_GameInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof hbsl.HBSL_Msg_GameInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {hbsl.HBSL_Msg_GameInfo} HBSL_Msg_GameInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HBSL_Msg_GameInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a HBSL_Msg_GameInfo message.
         * @function verify
         * @memberof hbsl.HBSL_Msg_GameInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        HBSL_Msg_GameInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.HBCount != null && message.hasOwnProperty("HBCount"))
                if (!$util.isInteger(message.HBCount))
                    return "HBCount: integer expected";
            if (message.LandmineRate != null && message.hasOwnProperty("LandmineRate"))
                if (!$util.isInteger(message.LandmineRate))
                    return "LandmineRate: integer expected";
            if (message.HBValue != null && message.hasOwnProperty("HBValue"))
                if (!$util.isInteger(message.HBValue) && !(message.HBValue && $util.isInteger(message.HBValue.low) && $util.isInteger(message.HBValue.high)))
                    return "HBValue: integer|Long expected";
            if (message.AllUserInfo != null && message.hasOwnProperty("AllUserInfo")) {
                var error = $root.hbsl.HBSL_Msg_UserInfo.verify(message.AllUserInfo);
                if (error)
                    return "AllUserInfo." + error;
            }
            if (message.SelfUserInfo != null && message.hasOwnProperty("SelfUserInfo")) {
                var error = $root.hbsl.HBSL_Msg_UserInfo.verify(message.SelfUserInfo);
                if (error)
                    return "SelfUserInfo." + error;
            }
            if (message.PokerManual != null && message.hasOwnProperty("PokerManual"))
                if (!$util.isString(message.PokerManual))
                    return "PokerManual: string expected";
            return null;
        };

        /**
         * Creates a HBSL_Msg_GameInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof hbsl.HBSL_Msg_GameInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {hbsl.HBSL_Msg_GameInfo} HBSL_Msg_GameInfo
         */
        HBSL_Msg_GameInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.hbsl.HBSL_Msg_GameInfo)
                return object;
            var message = new $root.hbsl.HBSL_Msg_GameInfo();
            if (object.HBCount != null)
                message.HBCount = object.HBCount | 0;
            if (object.LandmineRate != null)
                message.LandmineRate = object.LandmineRate | 0;
            if (object.HBValue != null)
                if ($util.Long)
                    (message.HBValue = $util.Long.fromValue(object.HBValue)).unsigned = false;
                else if (typeof object.HBValue === "string")
                    message.HBValue = parseInt(object.HBValue, 10);
                else if (typeof object.HBValue === "number")
                    message.HBValue = object.HBValue;
                else if (typeof object.HBValue === "object")
                    message.HBValue = new $util.LongBits(object.HBValue.low >>> 0, object.HBValue.high >>> 0).toNumber();
            if (object.AllUserInfo != null) {
                if (typeof object.AllUserInfo !== "object")
                    throw TypeError(".hbsl.HBSL_Msg_GameInfo.AllUserInfo: object expected");
                message.AllUserInfo = $root.hbsl.HBSL_Msg_UserInfo.fromObject(object.AllUserInfo);
            }
            if (object.SelfUserInfo != null) {
                if (typeof object.SelfUserInfo !== "object")
                    throw TypeError(".hbsl.HBSL_Msg_GameInfo.SelfUserInfo: object expected");
                message.SelfUserInfo = $root.hbsl.HBSL_Msg_UserInfo.fromObject(object.SelfUserInfo);
            }
            if (object.PokerManual != null)
                message.PokerManual = String(object.PokerManual);
            return message;
        };

        /**
         * Creates a plain object from a HBSL_Msg_GameInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof hbsl.HBSL_Msg_GameInfo
         * @static
         * @param {hbsl.HBSL_Msg_GameInfo} message HBSL_Msg_GameInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        HBSL_Msg_GameInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.HBCount = 0;
                object.LandmineRate = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.HBValue = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.HBValue = options.longs === String ? "0" : 0;
                object.AllUserInfo = null;
                object.SelfUserInfo = null;
                object.PokerManual = "";
            }
            if (message.HBCount != null && message.hasOwnProperty("HBCount"))
                object.HBCount = message.HBCount;
            if (message.LandmineRate != null && message.hasOwnProperty("LandmineRate"))
                object.LandmineRate = message.LandmineRate;
            if (message.HBValue != null && message.hasOwnProperty("HBValue"))
                if (typeof message.HBValue === "number")
                    object.HBValue = options.longs === String ? String(message.HBValue) : message.HBValue;
                else
                    object.HBValue = options.longs === String ? $util.Long.prototype.toString.call(message.HBValue) : options.longs === Number ? new $util.LongBits(message.HBValue.low >>> 0, message.HBValue.high >>> 0).toNumber() : message.HBValue;
            if (message.AllUserInfo != null && message.hasOwnProperty("AllUserInfo"))
                object.AllUserInfo = $root.hbsl.HBSL_Msg_UserInfo.toObject(message.AllUserInfo, options);
            if (message.SelfUserInfo != null && message.hasOwnProperty("SelfUserInfo"))
                object.SelfUserInfo = $root.hbsl.HBSL_Msg_UserInfo.toObject(message.SelfUserInfo, options);
            if (message.PokerManual != null && message.hasOwnProperty("PokerManual"))
                object.PokerManual = message.PokerManual;
            return object;
        };

        /**
         * Converts this HBSL_Msg_GameInfo to JSON.
         * @function toJSON
         * @memberof hbsl.HBSL_Msg_GameInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        HBSL_Msg_GameInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return HBSL_Msg_GameInfo;
    })();

    hbsl.HBSL_Msg_UserInfo = (function() {

        /**
         * Properties of a HBSL_Msg_UserInfo.
         * @memberof hbsl
         * @interface IHBSL_Msg_UserInfo
         * @property {number|null} [UserID] HBSL_Msg_UserInfo UserID
         * @property {number|Long|null} [Money] HBSL_Msg_UserInfo Money
         * @property {number|null} [FaceID] HBSL_Msg_UserInfo FaceID
         * @property {number|null} [Rounds] HBSL_Msg_UserInfo Rounds
         * @property {number|null} [WinRounds] HBSL_Msg_UserInfo WinRounds
         * @property {number|Long|null} [WinMoney] HBSL_Msg_UserInfo WinMoney
         * @property {number|Long|null} [HBMoney] HBSL_Msg_UserInfo HBMoney
         * @property {number|Long|null} [LoseMoney] HBSL_Msg_UserInfo LoseMoney
         */

        /**
         * Constructs a new HBSL_Msg_UserInfo.
         * @memberof hbsl
         * @classdesc Represents a HBSL_Msg_UserInfo.
         * @implements IHBSL_Msg_UserInfo
         * @constructor
         * @param {hbsl.IHBSL_Msg_UserInfo=} [properties] Properties to set
         */
        function HBSL_Msg_UserInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * HBSL_Msg_UserInfo UserID.
         * @member {number} UserID
         * @memberof hbsl.HBSL_Msg_UserInfo
         * @instance
         */
        HBSL_Msg_UserInfo.prototype.UserID = 0;

        /**
         * HBSL_Msg_UserInfo Money.
         * @member {number|Long} Money
         * @memberof hbsl.HBSL_Msg_UserInfo
         * @instance
         */
        HBSL_Msg_UserInfo.prototype.Money = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * HBSL_Msg_UserInfo FaceID.
         * @member {number} FaceID
         * @memberof hbsl.HBSL_Msg_UserInfo
         * @instance
         */
        HBSL_Msg_UserInfo.prototype.FaceID = 0;

        /**
         * HBSL_Msg_UserInfo Rounds.
         * @member {number} Rounds
         * @memberof hbsl.HBSL_Msg_UserInfo
         * @instance
         */
        HBSL_Msg_UserInfo.prototype.Rounds = 0;

        /**
         * HBSL_Msg_UserInfo WinRounds.
         * @member {number} WinRounds
         * @memberof hbsl.HBSL_Msg_UserInfo
         * @instance
         */
        HBSL_Msg_UserInfo.prototype.WinRounds = 0;

        /**
         * HBSL_Msg_UserInfo WinMoney.
         * @member {number|Long} WinMoney
         * @memberof hbsl.HBSL_Msg_UserInfo
         * @instance
         */
        HBSL_Msg_UserInfo.prototype.WinMoney = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * HBSL_Msg_UserInfo HBMoney.
         * @member {number|Long} HBMoney
         * @memberof hbsl.HBSL_Msg_UserInfo
         * @instance
         */
        HBSL_Msg_UserInfo.prototype.HBMoney = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * HBSL_Msg_UserInfo LoseMoney.
         * @member {number|Long} LoseMoney
         * @memberof hbsl.HBSL_Msg_UserInfo
         * @instance
         */
        HBSL_Msg_UserInfo.prototype.LoseMoney = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new HBSL_Msg_UserInfo instance using the specified properties.
         * @function create
         * @memberof hbsl.HBSL_Msg_UserInfo
         * @static
         * @param {hbsl.IHBSL_Msg_UserInfo=} [properties] Properties to set
         * @returns {hbsl.HBSL_Msg_UserInfo} HBSL_Msg_UserInfo instance
         */
        HBSL_Msg_UserInfo.create = function create(properties) {
            return new HBSL_Msg_UserInfo(properties);
        };

        /**
         * Encodes the specified HBSL_Msg_UserInfo message. Does not implicitly {@link hbsl.HBSL_Msg_UserInfo.verify|verify} messages.
         * @function encode
         * @memberof hbsl.HBSL_Msg_UserInfo
         * @static
         * @param {hbsl.IHBSL_Msg_UserInfo} message HBSL_Msg_UserInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HBSL_Msg_UserInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.UserID);
            if (message.Money != null && message.hasOwnProperty("Money"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.Money);
            if (message.FaceID != null && message.hasOwnProperty("FaceID"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.FaceID);
            if (message.Rounds != null && message.hasOwnProperty("Rounds"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.Rounds);
            if (message.WinRounds != null && message.hasOwnProperty("WinRounds"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.WinRounds);
            if (message.WinMoney != null && message.hasOwnProperty("WinMoney"))
                writer.uint32(/* id 6, wireType 0 =*/48).int64(message.WinMoney);
            if (message.HBMoney != null && message.hasOwnProperty("HBMoney"))
                writer.uint32(/* id 7, wireType 0 =*/56).int64(message.HBMoney);
            if (message.LoseMoney != null && message.hasOwnProperty("LoseMoney"))
                writer.uint32(/* id 8, wireType 0 =*/64).int64(message.LoseMoney);
            return writer;
        };

        /**
         * Encodes the specified HBSL_Msg_UserInfo message, length delimited. Does not implicitly {@link hbsl.HBSL_Msg_UserInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof hbsl.HBSL_Msg_UserInfo
         * @static
         * @param {hbsl.IHBSL_Msg_UserInfo} message HBSL_Msg_UserInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HBSL_Msg_UserInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a HBSL_Msg_UserInfo message from the specified reader or buffer.
         * @function decode
         * @memberof hbsl.HBSL_Msg_UserInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {hbsl.HBSL_Msg_UserInfo} HBSL_Msg_UserInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HBSL_Msg_UserInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.hbsl.HBSL_Msg_UserInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.UserID = reader.int32();
                    break;
                case 2:
                    message.Money = reader.int64();
                    break;
                case 3:
                    message.FaceID = reader.int32();
                    break;
                case 4:
                    message.Rounds = reader.int32();
                    break;
                case 5:
                    message.WinRounds = reader.int32();
                    break;
                case 6:
                    message.WinMoney = reader.int64();
                    break;
                case 7:
                    message.HBMoney = reader.int64();
                    break;
                case 8:
                    message.LoseMoney = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a HBSL_Msg_UserInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof hbsl.HBSL_Msg_UserInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {hbsl.HBSL_Msg_UserInfo} HBSL_Msg_UserInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HBSL_Msg_UserInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a HBSL_Msg_UserInfo message.
         * @function verify
         * @memberof hbsl.HBSL_Msg_UserInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        HBSL_Msg_UserInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                if (!$util.isInteger(message.UserID))
                    return "UserID: integer expected";
            if (message.Money != null && message.hasOwnProperty("Money"))
                if (!$util.isInteger(message.Money) && !(message.Money && $util.isInteger(message.Money.low) && $util.isInteger(message.Money.high)))
                    return "Money: integer|Long expected";
            if (message.FaceID != null && message.hasOwnProperty("FaceID"))
                if (!$util.isInteger(message.FaceID))
                    return "FaceID: integer expected";
            if (message.Rounds != null && message.hasOwnProperty("Rounds"))
                if (!$util.isInteger(message.Rounds))
                    return "Rounds: integer expected";
            if (message.WinRounds != null && message.hasOwnProperty("WinRounds"))
                if (!$util.isInteger(message.WinRounds))
                    return "WinRounds: integer expected";
            if (message.WinMoney != null && message.hasOwnProperty("WinMoney"))
                if (!$util.isInteger(message.WinMoney) && !(message.WinMoney && $util.isInteger(message.WinMoney.low) && $util.isInteger(message.WinMoney.high)))
                    return "WinMoney: integer|Long expected";
            if (message.HBMoney != null && message.hasOwnProperty("HBMoney"))
                if (!$util.isInteger(message.HBMoney) && !(message.HBMoney && $util.isInteger(message.HBMoney.low) && $util.isInteger(message.HBMoney.high)))
                    return "HBMoney: integer|Long expected";
            if (message.LoseMoney != null && message.hasOwnProperty("LoseMoney"))
                if (!$util.isInteger(message.LoseMoney) && !(message.LoseMoney && $util.isInteger(message.LoseMoney.low) && $util.isInteger(message.LoseMoney.high)))
                    return "LoseMoney: integer|Long expected";
            return null;
        };

        /**
         * Creates a HBSL_Msg_UserInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof hbsl.HBSL_Msg_UserInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {hbsl.HBSL_Msg_UserInfo} HBSL_Msg_UserInfo
         */
        HBSL_Msg_UserInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.hbsl.HBSL_Msg_UserInfo)
                return object;
            var message = new $root.hbsl.HBSL_Msg_UserInfo();
            if (object.UserID != null)
                message.UserID = object.UserID | 0;
            if (object.Money != null)
                if ($util.Long)
                    (message.Money = $util.Long.fromValue(object.Money)).unsigned = false;
                else if (typeof object.Money === "string")
                    message.Money = parseInt(object.Money, 10);
                else if (typeof object.Money === "number")
                    message.Money = object.Money;
                else if (typeof object.Money === "object")
                    message.Money = new $util.LongBits(object.Money.low >>> 0, object.Money.high >>> 0).toNumber();
            if (object.FaceID != null)
                message.FaceID = object.FaceID | 0;
            if (object.Rounds != null)
                message.Rounds = object.Rounds | 0;
            if (object.WinRounds != null)
                message.WinRounds = object.WinRounds | 0;
            if (object.WinMoney != null)
                if ($util.Long)
                    (message.WinMoney = $util.Long.fromValue(object.WinMoney)).unsigned = false;
                else if (typeof object.WinMoney === "string")
                    message.WinMoney = parseInt(object.WinMoney, 10);
                else if (typeof object.WinMoney === "number")
                    message.WinMoney = object.WinMoney;
                else if (typeof object.WinMoney === "object")
                    message.WinMoney = new $util.LongBits(object.WinMoney.low >>> 0, object.WinMoney.high >>> 0).toNumber();
            if (object.HBMoney != null)
                if ($util.Long)
                    (message.HBMoney = $util.Long.fromValue(object.HBMoney)).unsigned = false;
                else if (typeof object.HBMoney === "string")
                    message.HBMoney = parseInt(object.HBMoney, 10);
                else if (typeof object.HBMoney === "number")
                    message.HBMoney = object.HBMoney;
                else if (typeof object.HBMoney === "object")
                    message.HBMoney = new $util.LongBits(object.HBMoney.low >>> 0, object.HBMoney.high >>> 0).toNumber();
            if (object.LoseMoney != null)
                if ($util.Long)
                    (message.LoseMoney = $util.Long.fromValue(object.LoseMoney)).unsigned = false;
                else if (typeof object.LoseMoney === "string")
                    message.LoseMoney = parseInt(object.LoseMoney, 10);
                else if (typeof object.LoseMoney === "number")
                    message.LoseMoney = object.LoseMoney;
                else if (typeof object.LoseMoney === "object")
                    message.LoseMoney = new $util.LongBits(object.LoseMoney.low >>> 0, object.LoseMoney.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a HBSL_Msg_UserInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof hbsl.HBSL_Msg_UserInfo
         * @static
         * @param {hbsl.HBSL_Msg_UserInfo} message HBSL_Msg_UserInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        HBSL_Msg_UserInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.UserID = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.Money = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.Money = options.longs === String ? "0" : 0;
                object.FaceID = 0;
                object.Rounds = 0;
                object.WinRounds = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.WinMoney = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.WinMoney = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.HBMoney = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.HBMoney = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.LoseMoney = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.LoseMoney = options.longs === String ? "0" : 0;
            }
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                object.UserID = message.UserID;
            if (message.Money != null && message.hasOwnProperty("Money"))
                if (typeof message.Money === "number")
                    object.Money = options.longs === String ? String(message.Money) : message.Money;
                else
                    object.Money = options.longs === String ? $util.Long.prototype.toString.call(message.Money) : options.longs === Number ? new $util.LongBits(message.Money.low >>> 0, message.Money.high >>> 0).toNumber() : message.Money;
            if (message.FaceID != null && message.hasOwnProperty("FaceID"))
                object.FaceID = message.FaceID;
            if (message.Rounds != null && message.hasOwnProperty("Rounds"))
                object.Rounds = message.Rounds;
            if (message.WinRounds != null && message.hasOwnProperty("WinRounds"))
                object.WinRounds = message.WinRounds;
            if (message.WinMoney != null && message.hasOwnProperty("WinMoney"))
                if (typeof message.WinMoney === "number")
                    object.WinMoney = options.longs === String ? String(message.WinMoney) : message.WinMoney;
                else
                    object.WinMoney = options.longs === String ? $util.Long.prototype.toString.call(message.WinMoney) : options.longs === Number ? new $util.LongBits(message.WinMoney.low >>> 0, message.WinMoney.high >>> 0).toNumber() : message.WinMoney;
            if (message.HBMoney != null && message.hasOwnProperty("HBMoney"))
                if (typeof message.HBMoney === "number")
                    object.HBMoney = options.longs === String ? String(message.HBMoney) : message.HBMoney;
                else
                    object.HBMoney = options.longs === String ? $util.Long.prototype.toString.call(message.HBMoney) : options.longs === Number ? new $util.LongBits(message.HBMoney.low >>> 0, message.HBMoney.high >>> 0).toNumber() : message.HBMoney;
            if (message.LoseMoney != null && message.hasOwnProperty("LoseMoney"))
                if (typeof message.LoseMoney === "number")
                    object.LoseMoney = options.longs === String ? String(message.LoseMoney) : message.LoseMoney;
                else
                    object.LoseMoney = options.longs === String ? $util.Long.prototype.toString.call(message.LoseMoney) : options.longs === Number ? new $util.LongBits(message.LoseMoney.low >>> 0, message.LoseMoney.high >>> 0).toNumber() : message.LoseMoney;
            return object;
        };

        /**
         * Converts this HBSL_Msg_UserInfo to JSON.
         * @function toJSON
         * @memberof hbsl.HBSL_Msg_UserInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        HBSL_Msg_UserInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return HBSL_Msg_UserInfo;
    })();

    hbsl.HBSL_Msg_AllUserInfoResult = (function() {

        /**
         * Properties of a HBSL_Msg_AllUserInfoResult.
         * @memberof hbsl
         * @interface IHBSL_Msg_AllUserInfoResult
         * @property {hbsl.IHBSL_Msg_UserInfo|null} [AllUserInfo] HBSL_Msg_AllUserInfoResult AllUserInfo
         */

        /**
         * Constructs a new HBSL_Msg_AllUserInfoResult.
         * @memberof hbsl
         * @classdesc Represents a HBSL_Msg_AllUserInfoResult.
         * @implements IHBSL_Msg_AllUserInfoResult
         * @constructor
         * @param {hbsl.IHBSL_Msg_AllUserInfoResult=} [properties] Properties to set
         */
        function HBSL_Msg_AllUserInfoResult(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * HBSL_Msg_AllUserInfoResult AllUserInfo.
         * @member {hbsl.IHBSL_Msg_UserInfo|null|undefined} AllUserInfo
         * @memberof hbsl.HBSL_Msg_AllUserInfoResult
         * @instance
         */
        HBSL_Msg_AllUserInfoResult.prototype.AllUserInfo = null;

        /**
         * Creates a new HBSL_Msg_AllUserInfoResult instance using the specified properties.
         * @function create
         * @memberof hbsl.HBSL_Msg_AllUserInfoResult
         * @static
         * @param {hbsl.IHBSL_Msg_AllUserInfoResult=} [properties] Properties to set
         * @returns {hbsl.HBSL_Msg_AllUserInfoResult} HBSL_Msg_AllUserInfoResult instance
         */
        HBSL_Msg_AllUserInfoResult.create = function create(properties) {
            return new HBSL_Msg_AllUserInfoResult(properties);
        };

        /**
         * Encodes the specified HBSL_Msg_AllUserInfoResult message. Does not implicitly {@link hbsl.HBSL_Msg_AllUserInfoResult.verify|verify} messages.
         * @function encode
         * @memberof hbsl.HBSL_Msg_AllUserInfoResult
         * @static
         * @param {hbsl.IHBSL_Msg_AllUserInfoResult} message HBSL_Msg_AllUserInfoResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HBSL_Msg_AllUserInfoResult.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.AllUserInfo != null && message.hasOwnProperty("AllUserInfo"))
                $root.hbsl.HBSL_Msg_UserInfo.encode(message.AllUserInfo, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified HBSL_Msg_AllUserInfoResult message, length delimited. Does not implicitly {@link hbsl.HBSL_Msg_AllUserInfoResult.verify|verify} messages.
         * @function encodeDelimited
         * @memberof hbsl.HBSL_Msg_AllUserInfoResult
         * @static
         * @param {hbsl.IHBSL_Msg_AllUserInfoResult} message HBSL_Msg_AllUserInfoResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HBSL_Msg_AllUserInfoResult.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a HBSL_Msg_AllUserInfoResult message from the specified reader or buffer.
         * @function decode
         * @memberof hbsl.HBSL_Msg_AllUserInfoResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {hbsl.HBSL_Msg_AllUserInfoResult} HBSL_Msg_AllUserInfoResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HBSL_Msg_AllUserInfoResult.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.hbsl.HBSL_Msg_AllUserInfoResult();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.AllUserInfo = $root.hbsl.HBSL_Msg_UserInfo.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a HBSL_Msg_AllUserInfoResult message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof hbsl.HBSL_Msg_AllUserInfoResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {hbsl.HBSL_Msg_AllUserInfoResult} HBSL_Msg_AllUserInfoResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HBSL_Msg_AllUserInfoResult.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a HBSL_Msg_AllUserInfoResult message.
         * @function verify
         * @memberof hbsl.HBSL_Msg_AllUserInfoResult
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        HBSL_Msg_AllUserInfoResult.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.AllUserInfo != null && message.hasOwnProperty("AllUserInfo")) {
                var error = $root.hbsl.HBSL_Msg_UserInfo.verify(message.AllUserInfo);
                if (error)
                    return "AllUserInfo." + error;
            }
            return null;
        };

        /**
         * Creates a HBSL_Msg_AllUserInfoResult message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof hbsl.HBSL_Msg_AllUserInfoResult
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {hbsl.HBSL_Msg_AllUserInfoResult} HBSL_Msg_AllUserInfoResult
         */
        HBSL_Msg_AllUserInfoResult.fromObject = function fromObject(object) {
            if (object instanceof $root.hbsl.HBSL_Msg_AllUserInfoResult)
                return object;
            var message = new $root.hbsl.HBSL_Msg_AllUserInfoResult();
            if (object.AllUserInfo != null) {
                if (typeof object.AllUserInfo !== "object")
                    throw TypeError(".hbsl.HBSL_Msg_AllUserInfoResult.AllUserInfo: object expected");
                message.AllUserInfo = $root.hbsl.HBSL_Msg_UserInfo.fromObject(object.AllUserInfo);
            }
            return message;
        };

        /**
         * Creates a plain object from a HBSL_Msg_AllUserInfoResult message. Also converts values to other types if specified.
         * @function toObject
         * @memberof hbsl.HBSL_Msg_AllUserInfoResult
         * @static
         * @param {hbsl.HBSL_Msg_AllUserInfoResult} message HBSL_Msg_AllUserInfoResult
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        HBSL_Msg_AllUserInfoResult.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.AllUserInfo = null;
            if (message.AllUserInfo != null && message.hasOwnProperty("AllUserInfo"))
                object.AllUserInfo = $root.hbsl.HBSL_Msg_UserInfo.toObject(message.AllUserInfo, options);
            return object;
        };

        /**
         * Converts this HBSL_Msg_AllUserInfoResult to JSON.
         * @function toJSON
         * @memberof hbsl.HBSL_Msg_AllUserInfoResult
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        HBSL_Msg_AllUserInfoResult.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return HBSL_Msg_AllUserInfoResult;
    })();

    hbsl.HBSL_Msg_StartGrab = (function() {

        /**
         * Properties of a HBSL_Msg_StartGrab.
         * @memberof hbsl
         * @interface IHBSL_Msg_StartGrab
         * @property {number|null} [TimeRemain] HBSL_Msg_StartGrab TimeRemain
         * @property {number|null} [FaceID] HBSL_Msg_StartGrab FaceID
         * @property {number|null} [ZhuangID] HBSL_Msg_StartGrab ZhuangID
         * @property {number|Long|null} [HBMoney] HBSL_Msg_StartGrab HBMoney
         * @property {boolean|null} [IsReconnect] HBSL_Msg_StartGrab IsReconnect
         */

        /**
         * Constructs a new HBSL_Msg_StartGrab.
         * @memberof hbsl
         * @classdesc Represents a HBSL_Msg_StartGrab.
         * @implements IHBSL_Msg_StartGrab
         * @constructor
         * @param {hbsl.IHBSL_Msg_StartGrab=} [properties] Properties to set
         */
        function HBSL_Msg_StartGrab(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * HBSL_Msg_StartGrab TimeRemain.
         * @member {number} TimeRemain
         * @memberof hbsl.HBSL_Msg_StartGrab
         * @instance
         */
        HBSL_Msg_StartGrab.prototype.TimeRemain = 0;

        /**
         * HBSL_Msg_StartGrab FaceID.
         * @member {number} FaceID
         * @memberof hbsl.HBSL_Msg_StartGrab
         * @instance
         */
        HBSL_Msg_StartGrab.prototype.FaceID = 0;

        /**
         * HBSL_Msg_StartGrab ZhuangID.
         * @member {number} ZhuangID
         * @memberof hbsl.HBSL_Msg_StartGrab
         * @instance
         */
        HBSL_Msg_StartGrab.prototype.ZhuangID = 0;

        /**
         * HBSL_Msg_StartGrab HBMoney.
         * @member {number|Long} HBMoney
         * @memberof hbsl.HBSL_Msg_StartGrab
         * @instance
         */
        HBSL_Msg_StartGrab.prototype.HBMoney = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * HBSL_Msg_StartGrab IsReconnect.
         * @member {boolean} IsReconnect
         * @memberof hbsl.HBSL_Msg_StartGrab
         * @instance
         */
        HBSL_Msg_StartGrab.prototype.IsReconnect = false;

        /**
         * Creates a new HBSL_Msg_StartGrab instance using the specified properties.
         * @function create
         * @memberof hbsl.HBSL_Msg_StartGrab
         * @static
         * @param {hbsl.IHBSL_Msg_StartGrab=} [properties] Properties to set
         * @returns {hbsl.HBSL_Msg_StartGrab} HBSL_Msg_StartGrab instance
         */
        HBSL_Msg_StartGrab.create = function create(properties) {
            return new HBSL_Msg_StartGrab(properties);
        };

        /**
         * Encodes the specified HBSL_Msg_StartGrab message. Does not implicitly {@link hbsl.HBSL_Msg_StartGrab.verify|verify} messages.
         * @function encode
         * @memberof hbsl.HBSL_Msg_StartGrab
         * @static
         * @param {hbsl.IHBSL_Msg_StartGrab} message HBSL_Msg_StartGrab message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HBSL_Msg_StartGrab.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.TimeRemain != null && message.hasOwnProperty("TimeRemain"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.TimeRemain);
            if (message.FaceID != null && message.hasOwnProperty("FaceID"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.FaceID);
            if (message.ZhuangID != null && message.hasOwnProperty("ZhuangID"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.ZhuangID);
            if (message.HBMoney != null && message.hasOwnProperty("HBMoney"))
                writer.uint32(/* id 4, wireType 0 =*/32).int64(message.HBMoney);
            if (message.IsReconnect != null && message.hasOwnProperty("IsReconnect"))
                writer.uint32(/* id 5, wireType 0 =*/40).bool(message.IsReconnect);
            return writer;
        };

        /**
         * Encodes the specified HBSL_Msg_StartGrab message, length delimited. Does not implicitly {@link hbsl.HBSL_Msg_StartGrab.verify|verify} messages.
         * @function encodeDelimited
         * @memberof hbsl.HBSL_Msg_StartGrab
         * @static
         * @param {hbsl.IHBSL_Msg_StartGrab} message HBSL_Msg_StartGrab message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HBSL_Msg_StartGrab.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a HBSL_Msg_StartGrab message from the specified reader or buffer.
         * @function decode
         * @memberof hbsl.HBSL_Msg_StartGrab
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {hbsl.HBSL_Msg_StartGrab} HBSL_Msg_StartGrab
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HBSL_Msg_StartGrab.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.hbsl.HBSL_Msg_StartGrab();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.TimeRemain = reader.int32();
                    break;
                case 2:
                    message.FaceID = reader.int32();
                    break;
                case 3:
                    message.ZhuangID = reader.int32();
                    break;
                case 4:
                    message.HBMoney = reader.int64();
                    break;
                case 5:
                    message.IsReconnect = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a HBSL_Msg_StartGrab message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof hbsl.HBSL_Msg_StartGrab
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {hbsl.HBSL_Msg_StartGrab} HBSL_Msg_StartGrab
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HBSL_Msg_StartGrab.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a HBSL_Msg_StartGrab message.
         * @function verify
         * @memberof hbsl.HBSL_Msg_StartGrab
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        HBSL_Msg_StartGrab.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.TimeRemain != null && message.hasOwnProperty("TimeRemain"))
                if (!$util.isInteger(message.TimeRemain))
                    return "TimeRemain: integer expected";
            if (message.FaceID != null && message.hasOwnProperty("FaceID"))
                if (!$util.isInteger(message.FaceID))
                    return "FaceID: integer expected";
            if (message.ZhuangID != null && message.hasOwnProperty("ZhuangID"))
                if (!$util.isInteger(message.ZhuangID))
                    return "ZhuangID: integer expected";
            if (message.HBMoney != null && message.hasOwnProperty("HBMoney"))
                if (!$util.isInteger(message.HBMoney) && !(message.HBMoney && $util.isInteger(message.HBMoney.low) && $util.isInteger(message.HBMoney.high)))
                    return "HBMoney: integer|Long expected";
            if (message.IsReconnect != null && message.hasOwnProperty("IsReconnect"))
                if (typeof message.IsReconnect !== "boolean")
                    return "IsReconnect: boolean expected";
            return null;
        };

        /**
         * Creates a HBSL_Msg_StartGrab message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof hbsl.HBSL_Msg_StartGrab
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {hbsl.HBSL_Msg_StartGrab} HBSL_Msg_StartGrab
         */
        HBSL_Msg_StartGrab.fromObject = function fromObject(object) {
            if (object instanceof $root.hbsl.HBSL_Msg_StartGrab)
                return object;
            var message = new $root.hbsl.HBSL_Msg_StartGrab();
            if (object.TimeRemain != null)
                message.TimeRemain = object.TimeRemain | 0;
            if (object.FaceID != null)
                message.FaceID = object.FaceID | 0;
            if (object.ZhuangID != null)
                message.ZhuangID = object.ZhuangID | 0;
            if (object.HBMoney != null)
                if ($util.Long)
                    (message.HBMoney = $util.Long.fromValue(object.HBMoney)).unsigned = false;
                else if (typeof object.HBMoney === "string")
                    message.HBMoney = parseInt(object.HBMoney, 10);
                else if (typeof object.HBMoney === "number")
                    message.HBMoney = object.HBMoney;
                else if (typeof object.HBMoney === "object")
                    message.HBMoney = new $util.LongBits(object.HBMoney.low >>> 0, object.HBMoney.high >>> 0).toNumber();
            if (object.IsReconnect != null)
                message.IsReconnect = Boolean(object.IsReconnect);
            return message;
        };

        /**
         * Creates a plain object from a HBSL_Msg_StartGrab message. Also converts values to other types if specified.
         * @function toObject
         * @memberof hbsl.HBSL_Msg_StartGrab
         * @static
         * @param {hbsl.HBSL_Msg_StartGrab} message HBSL_Msg_StartGrab
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        HBSL_Msg_StartGrab.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.TimeRemain = 0;
                object.FaceID = 0;
                object.ZhuangID = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.HBMoney = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.HBMoney = options.longs === String ? "0" : 0;
                object.IsReconnect = false;
            }
            if (message.TimeRemain != null && message.hasOwnProperty("TimeRemain"))
                object.TimeRemain = message.TimeRemain;
            if (message.FaceID != null && message.hasOwnProperty("FaceID"))
                object.FaceID = message.FaceID;
            if (message.ZhuangID != null && message.hasOwnProperty("ZhuangID"))
                object.ZhuangID = message.ZhuangID;
            if (message.HBMoney != null && message.hasOwnProperty("HBMoney"))
                if (typeof message.HBMoney === "number")
                    object.HBMoney = options.longs === String ? String(message.HBMoney) : message.HBMoney;
                else
                    object.HBMoney = options.longs === String ? $util.Long.prototype.toString.call(message.HBMoney) : options.longs === Number ? new $util.LongBits(message.HBMoney.low >>> 0, message.HBMoney.high >>> 0).toNumber() : message.HBMoney;
            if (message.IsReconnect != null && message.hasOwnProperty("IsReconnect"))
                object.IsReconnect = message.IsReconnect;
            return object;
        };

        /**
         * Converts this HBSL_Msg_StartGrab to JSON.
         * @function toJSON
         * @memberof hbsl.HBSL_Msg_StartGrab
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        HBSL_Msg_StartGrab.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return HBSL_Msg_StartGrab;
    })();

    hbsl.HBSL_Msg_GrabResult = (function() {

        /**
         * Properties of a HBSL_Msg_GrabResult.
         * @memberof hbsl
         * @interface IHBSL_Msg_GrabResult
         * @property {number|null} [Result] HBSL_Msg_GrabResult Result
         * @property {number|null} [HBRemain] HBSL_Msg_GrabResult HBRemain
         * @property {hbsl.IHBSL_Msg_UserInfo|null} [UserInfo] HBSL_Msg_GrabResult UserInfo
         */

        /**
         * Constructs a new HBSL_Msg_GrabResult.
         * @memberof hbsl
         * @classdesc Represents a HBSL_Msg_GrabResult.
         * @implements IHBSL_Msg_GrabResult
         * @constructor
         * @param {hbsl.IHBSL_Msg_GrabResult=} [properties] Properties to set
         */
        function HBSL_Msg_GrabResult(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * HBSL_Msg_GrabResult Result.
         * @member {number} Result
         * @memberof hbsl.HBSL_Msg_GrabResult
         * @instance
         */
        HBSL_Msg_GrabResult.prototype.Result = 0;

        /**
         * HBSL_Msg_GrabResult HBRemain.
         * @member {number} HBRemain
         * @memberof hbsl.HBSL_Msg_GrabResult
         * @instance
         */
        HBSL_Msg_GrabResult.prototype.HBRemain = 0;

        /**
         * HBSL_Msg_GrabResult UserInfo.
         * @member {hbsl.IHBSL_Msg_UserInfo|null|undefined} UserInfo
         * @memberof hbsl.HBSL_Msg_GrabResult
         * @instance
         */
        HBSL_Msg_GrabResult.prototype.UserInfo = null;

        /**
         * Creates a new HBSL_Msg_GrabResult instance using the specified properties.
         * @function create
         * @memberof hbsl.HBSL_Msg_GrabResult
         * @static
         * @param {hbsl.IHBSL_Msg_GrabResult=} [properties] Properties to set
         * @returns {hbsl.HBSL_Msg_GrabResult} HBSL_Msg_GrabResult instance
         */
        HBSL_Msg_GrabResult.create = function create(properties) {
            return new HBSL_Msg_GrabResult(properties);
        };

        /**
         * Encodes the specified HBSL_Msg_GrabResult message. Does not implicitly {@link hbsl.HBSL_Msg_GrabResult.verify|verify} messages.
         * @function encode
         * @memberof hbsl.HBSL_Msg_GrabResult
         * @static
         * @param {hbsl.IHBSL_Msg_GrabResult} message HBSL_Msg_GrabResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HBSL_Msg_GrabResult.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Result != null && message.hasOwnProperty("Result"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.Result);
            if (message.HBRemain != null && message.hasOwnProperty("HBRemain"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.HBRemain);
            if (message.UserInfo != null && message.hasOwnProperty("UserInfo"))
                $root.hbsl.HBSL_Msg_UserInfo.encode(message.UserInfo, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified HBSL_Msg_GrabResult message, length delimited. Does not implicitly {@link hbsl.HBSL_Msg_GrabResult.verify|verify} messages.
         * @function encodeDelimited
         * @memberof hbsl.HBSL_Msg_GrabResult
         * @static
         * @param {hbsl.IHBSL_Msg_GrabResult} message HBSL_Msg_GrabResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HBSL_Msg_GrabResult.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a HBSL_Msg_GrabResult message from the specified reader or buffer.
         * @function decode
         * @memberof hbsl.HBSL_Msg_GrabResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {hbsl.HBSL_Msg_GrabResult} HBSL_Msg_GrabResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HBSL_Msg_GrabResult.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.hbsl.HBSL_Msg_GrabResult();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Result = reader.int32();
                    break;
                case 2:
                    message.HBRemain = reader.int32();
                    break;
                case 3:
                    message.UserInfo = $root.hbsl.HBSL_Msg_UserInfo.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a HBSL_Msg_GrabResult message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof hbsl.HBSL_Msg_GrabResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {hbsl.HBSL_Msg_GrabResult} HBSL_Msg_GrabResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HBSL_Msg_GrabResult.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a HBSL_Msg_GrabResult message.
         * @function verify
         * @memberof hbsl.HBSL_Msg_GrabResult
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        HBSL_Msg_GrabResult.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Result != null && message.hasOwnProperty("Result"))
                if (!$util.isInteger(message.Result))
                    return "Result: integer expected";
            if (message.HBRemain != null && message.hasOwnProperty("HBRemain"))
                if (!$util.isInteger(message.HBRemain))
                    return "HBRemain: integer expected";
            if (message.UserInfo != null && message.hasOwnProperty("UserInfo")) {
                var error = $root.hbsl.HBSL_Msg_UserInfo.verify(message.UserInfo);
                if (error)
                    return "UserInfo." + error;
            }
            return null;
        };

        /**
         * Creates a HBSL_Msg_GrabResult message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof hbsl.HBSL_Msg_GrabResult
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {hbsl.HBSL_Msg_GrabResult} HBSL_Msg_GrabResult
         */
        HBSL_Msg_GrabResult.fromObject = function fromObject(object) {
            if (object instanceof $root.hbsl.HBSL_Msg_GrabResult)
                return object;
            var message = new $root.hbsl.HBSL_Msg_GrabResult();
            if (object.Result != null)
                message.Result = object.Result | 0;
            if (object.HBRemain != null)
                message.HBRemain = object.HBRemain | 0;
            if (object.UserInfo != null) {
                if (typeof object.UserInfo !== "object")
                    throw TypeError(".hbsl.HBSL_Msg_GrabResult.UserInfo: object expected");
                message.UserInfo = $root.hbsl.HBSL_Msg_UserInfo.fromObject(object.UserInfo);
            }
            return message;
        };

        /**
         * Creates a plain object from a HBSL_Msg_GrabResult message. Also converts values to other types if specified.
         * @function toObject
         * @memberof hbsl.HBSL_Msg_GrabResult
         * @static
         * @param {hbsl.HBSL_Msg_GrabResult} message HBSL_Msg_GrabResult
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        HBSL_Msg_GrabResult.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.Result = 0;
                object.HBRemain = 0;
                object.UserInfo = null;
            }
            if (message.Result != null && message.hasOwnProperty("Result"))
                object.Result = message.Result;
            if (message.HBRemain != null && message.hasOwnProperty("HBRemain"))
                object.HBRemain = message.HBRemain;
            if (message.UserInfo != null && message.hasOwnProperty("UserInfo"))
                object.UserInfo = $root.hbsl.HBSL_Msg_UserInfo.toObject(message.UserInfo, options);
            return object;
        };

        /**
         * Converts this HBSL_Msg_GrabResult to JSON.
         * @function toJSON
         * @memberof hbsl.HBSL_Msg_GrabResult
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        HBSL_Msg_GrabResult.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return HBSL_Msg_GrabResult;
    })();

    hbsl.HBSL_Msg_FaHB = (function() {

        /**
         * Properties of a HBSL_Msg_FaHB.
         * @memberof hbsl
         * @interface IHBSL_Msg_FaHB
         * @property {number|Long|null} [HBMoney] HBSL_Msg_FaHB HBMoney
         * @property {number|null} [LandmineNumber] HBSL_Msg_FaHB LandmineNumber
         */

        /**
         * Constructs a new HBSL_Msg_FaHB.
         * @memberof hbsl
         * @classdesc Represents a HBSL_Msg_FaHB.
         * @implements IHBSL_Msg_FaHB
         * @constructor
         * @param {hbsl.IHBSL_Msg_FaHB=} [properties] Properties to set
         */
        function HBSL_Msg_FaHB(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * HBSL_Msg_FaHB HBMoney.
         * @member {number|Long} HBMoney
         * @memberof hbsl.HBSL_Msg_FaHB
         * @instance
         */
        HBSL_Msg_FaHB.prototype.HBMoney = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * HBSL_Msg_FaHB LandmineNumber.
         * @member {number} LandmineNumber
         * @memberof hbsl.HBSL_Msg_FaHB
         * @instance
         */
        HBSL_Msg_FaHB.prototype.LandmineNumber = 0;

        /**
         * Creates a new HBSL_Msg_FaHB instance using the specified properties.
         * @function create
         * @memberof hbsl.HBSL_Msg_FaHB
         * @static
         * @param {hbsl.IHBSL_Msg_FaHB=} [properties] Properties to set
         * @returns {hbsl.HBSL_Msg_FaHB} HBSL_Msg_FaHB instance
         */
        HBSL_Msg_FaHB.create = function create(properties) {
            return new HBSL_Msg_FaHB(properties);
        };

        /**
         * Encodes the specified HBSL_Msg_FaHB message. Does not implicitly {@link hbsl.HBSL_Msg_FaHB.verify|verify} messages.
         * @function encode
         * @memberof hbsl.HBSL_Msg_FaHB
         * @static
         * @param {hbsl.IHBSL_Msg_FaHB} message HBSL_Msg_FaHB message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HBSL_Msg_FaHB.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.HBMoney != null && message.hasOwnProperty("HBMoney"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.HBMoney);
            if (message.LandmineNumber != null && message.hasOwnProperty("LandmineNumber"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.LandmineNumber);
            return writer;
        };

        /**
         * Encodes the specified HBSL_Msg_FaHB message, length delimited. Does not implicitly {@link hbsl.HBSL_Msg_FaHB.verify|verify} messages.
         * @function encodeDelimited
         * @memberof hbsl.HBSL_Msg_FaHB
         * @static
         * @param {hbsl.IHBSL_Msg_FaHB} message HBSL_Msg_FaHB message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HBSL_Msg_FaHB.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a HBSL_Msg_FaHB message from the specified reader or buffer.
         * @function decode
         * @memberof hbsl.HBSL_Msg_FaHB
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {hbsl.HBSL_Msg_FaHB} HBSL_Msg_FaHB
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HBSL_Msg_FaHB.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.hbsl.HBSL_Msg_FaHB();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.HBMoney = reader.int64();
                    break;
                case 2:
                    message.LandmineNumber = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a HBSL_Msg_FaHB message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof hbsl.HBSL_Msg_FaHB
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {hbsl.HBSL_Msg_FaHB} HBSL_Msg_FaHB
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HBSL_Msg_FaHB.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a HBSL_Msg_FaHB message.
         * @function verify
         * @memberof hbsl.HBSL_Msg_FaHB
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        HBSL_Msg_FaHB.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.HBMoney != null && message.hasOwnProperty("HBMoney"))
                if (!$util.isInteger(message.HBMoney) && !(message.HBMoney && $util.isInteger(message.HBMoney.low) && $util.isInteger(message.HBMoney.high)))
                    return "HBMoney: integer|Long expected";
            if (message.LandmineNumber != null && message.hasOwnProperty("LandmineNumber"))
                if (!$util.isInteger(message.LandmineNumber))
                    return "LandmineNumber: integer expected";
            return null;
        };

        /**
         * Creates a HBSL_Msg_FaHB message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof hbsl.HBSL_Msg_FaHB
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {hbsl.HBSL_Msg_FaHB} HBSL_Msg_FaHB
         */
        HBSL_Msg_FaHB.fromObject = function fromObject(object) {
            if (object instanceof $root.hbsl.HBSL_Msg_FaHB)
                return object;
            var message = new $root.hbsl.HBSL_Msg_FaHB();
            if (object.HBMoney != null)
                if ($util.Long)
                    (message.HBMoney = $util.Long.fromValue(object.HBMoney)).unsigned = false;
                else if (typeof object.HBMoney === "string")
                    message.HBMoney = parseInt(object.HBMoney, 10);
                else if (typeof object.HBMoney === "number")
                    message.HBMoney = object.HBMoney;
                else if (typeof object.HBMoney === "object")
                    message.HBMoney = new $util.LongBits(object.HBMoney.low >>> 0, object.HBMoney.high >>> 0).toNumber();
            if (object.LandmineNumber != null)
                message.LandmineNumber = object.LandmineNumber | 0;
            return message;
        };

        /**
         * Creates a plain object from a HBSL_Msg_FaHB message. Also converts values to other types if specified.
         * @function toObject
         * @memberof hbsl.HBSL_Msg_FaHB
         * @static
         * @param {hbsl.HBSL_Msg_FaHB} message HBSL_Msg_FaHB
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        HBSL_Msg_FaHB.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.HBMoney = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.HBMoney = options.longs === String ? "0" : 0;
                object.LandmineNumber = 0;
            }
            if (message.HBMoney != null && message.hasOwnProperty("HBMoney"))
                if (typeof message.HBMoney === "number")
                    object.HBMoney = options.longs === String ? String(message.HBMoney) : message.HBMoney;
                else
                    object.HBMoney = options.longs === String ? $util.Long.prototype.toString.call(message.HBMoney) : options.longs === Number ? new $util.LongBits(message.HBMoney.low >>> 0, message.HBMoney.high >>> 0).toNumber() : message.HBMoney;
            if (message.LandmineNumber != null && message.hasOwnProperty("LandmineNumber"))
                object.LandmineNumber = message.LandmineNumber;
            return object;
        };

        /**
         * Converts this HBSL_Msg_FaHB to JSON.
         * @function toJSON
         * @memberof hbsl.HBSL_Msg_FaHB
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        HBSL_Msg_FaHB.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return HBSL_Msg_FaHB;
    })();

    hbsl.HBSL_Msg_FaHBResult = (function() {

        /**
         * Properties of a HBSL_Msg_FaHBResult.
         * @memberof hbsl
         * @interface IHBSL_Msg_FaHBResult
         * @property {number|null} [Result] HBSL_Msg_FaHBResult Result
         * @property {number|Long|null} [RemainMoney] HBSL_Msg_FaHBResult RemainMoney
         */

        /**
         * Constructs a new HBSL_Msg_FaHBResult.
         * @memberof hbsl
         * @classdesc Represents a HBSL_Msg_FaHBResult.
         * @implements IHBSL_Msg_FaHBResult
         * @constructor
         * @param {hbsl.IHBSL_Msg_FaHBResult=} [properties] Properties to set
         */
        function HBSL_Msg_FaHBResult(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * HBSL_Msg_FaHBResult Result.
         * @member {number} Result
         * @memberof hbsl.HBSL_Msg_FaHBResult
         * @instance
         */
        HBSL_Msg_FaHBResult.prototype.Result = 0;

        /**
         * HBSL_Msg_FaHBResult RemainMoney.
         * @member {number|Long} RemainMoney
         * @memberof hbsl.HBSL_Msg_FaHBResult
         * @instance
         */
        HBSL_Msg_FaHBResult.prototype.RemainMoney = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new HBSL_Msg_FaHBResult instance using the specified properties.
         * @function create
         * @memberof hbsl.HBSL_Msg_FaHBResult
         * @static
         * @param {hbsl.IHBSL_Msg_FaHBResult=} [properties] Properties to set
         * @returns {hbsl.HBSL_Msg_FaHBResult} HBSL_Msg_FaHBResult instance
         */
        HBSL_Msg_FaHBResult.create = function create(properties) {
            return new HBSL_Msg_FaHBResult(properties);
        };

        /**
         * Encodes the specified HBSL_Msg_FaHBResult message. Does not implicitly {@link hbsl.HBSL_Msg_FaHBResult.verify|verify} messages.
         * @function encode
         * @memberof hbsl.HBSL_Msg_FaHBResult
         * @static
         * @param {hbsl.IHBSL_Msg_FaHBResult} message HBSL_Msg_FaHBResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HBSL_Msg_FaHBResult.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Result != null && message.hasOwnProperty("Result"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.Result);
            if (message.RemainMoney != null && message.hasOwnProperty("RemainMoney"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.RemainMoney);
            return writer;
        };

        /**
         * Encodes the specified HBSL_Msg_FaHBResult message, length delimited. Does not implicitly {@link hbsl.HBSL_Msg_FaHBResult.verify|verify} messages.
         * @function encodeDelimited
         * @memberof hbsl.HBSL_Msg_FaHBResult
         * @static
         * @param {hbsl.IHBSL_Msg_FaHBResult} message HBSL_Msg_FaHBResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HBSL_Msg_FaHBResult.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a HBSL_Msg_FaHBResult message from the specified reader or buffer.
         * @function decode
         * @memberof hbsl.HBSL_Msg_FaHBResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {hbsl.HBSL_Msg_FaHBResult} HBSL_Msg_FaHBResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HBSL_Msg_FaHBResult.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.hbsl.HBSL_Msg_FaHBResult();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Result = reader.int32();
                    break;
                case 2:
                    message.RemainMoney = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a HBSL_Msg_FaHBResult message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof hbsl.HBSL_Msg_FaHBResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {hbsl.HBSL_Msg_FaHBResult} HBSL_Msg_FaHBResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HBSL_Msg_FaHBResult.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a HBSL_Msg_FaHBResult message.
         * @function verify
         * @memberof hbsl.HBSL_Msg_FaHBResult
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        HBSL_Msg_FaHBResult.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Result != null && message.hasOwnProperty("Result"))
                if (!$util.isInteger(message.Result))
                    return "Result: integer expected";
            if (message.RemainMoney != null && message.hasOwnProperty("RemainMoney"))
                if (!$util.isInteger(message.RemainMoney) && !(message.RemainMoney && $util.isInteger(message.RemainMoney.low) && $util.isInteger(message.RemainMoney.high)))
                    return "RemainMoney: integer|Long expected";
            return null;
        };

        /**
         * Creates a HBSL_Msg_FaHBResult message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof hbsl.HBSL_Msg_FaHBResult
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {hbsl.HBSL_Msg_FaHBResult} HBSL_Msg_FaHBResult
         */
        HBSL_Msg_FaHBResult.fromObject = function fromObject(object) {
            if (object instanceof $root.hbsl.HBSL_Msg_FaHBResult)
                return object;
            var message = new $root.hbsl.HBSL_Msg_FaHBResult();
            if (object.Result != null)
                message.Result = object.Result | 0;
            if (object.RemainMoney != null)
                if ($util.Long)
                    (message.RemainMoney = $util.Long.fromValue(object.RemainMoney)).unsigned = false;
                else if (typeof object.RemainMoney === "string")
                    message.RemainMoney = parseInt(object.RemainMoney, 10);
                else if (typeof object.RemainMoney === "number")
                    message.RemainMoney = object.RemainMoney;
                else if (typeof object.RemainMoney === "object")
                    message.RemainMoney = new $util.LongBits(object.RemainMoney.low >>> 0, object.RemainMoney.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a HBSL_Msg_FaHBResult message. Also converts values to other types if specified.
         * @function toObject
         * @memberof hbsl.HBSL_Msg_FaHBResult
         * @static
         * @param {hbsl.HBSL_Msg_FaHBResult} message HBSL_Msg_FaHBResult
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        HBSL_Msg_FaHBResult.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.Result = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.RemainMoney = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.RemainMoney = options.longs === String ? "0" : 0;
            }
            if (message.Result != null && message.hasOwnProperty("Result"))
                object.Result = message.Result;
            if (message.RemainMoney != null && message.hasOwnProperty("RemainMoney"))
                if (typeof message.RemainMoney === "number")
                    object.RemainMoney = options.longs === String ? String(message.RemainMoney) : message.RemainMoney;
                else
                    object.RemainMoney = options.longs === String ? $util.Long.prototype.toString.call(message.RemainMoney) : options.longs === Number ? new $util.LongBits(message.RemainMoney.low >>> 0, message.RemainMoney.high >>> 0).toNumber() : message.RemainMoney;
            return object;
        };

        /**
         * Converts this HBSL_Msg_FaHBResult to JSON.
         * @function toJSON
         * @memberof hbsl.HBSL_Msg_FaHBResult
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        HBSL_Msg_FaHBResult.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return HBSL_Msg_FaHBResult;
    })();

    hbsl.HBSL_Msg_HBInfo = (function() {

        /**
         * Properties of a HBSL_Msg_HBInfo.
         * @memberof hbsl
         * @interface IHBSL_Msg_HBInfo
         * @property {number|null} [UserID] HBSL_Msg_HBInfo UserID
         * @property {number|Long|null} [HBMoney] HBSL_Msg_HBInfo HBMoney
         * @property {number|null} [FaceID] HBSL_Msg_HBInfo FaceID
         */

        /**
         * Constructs a new HBSL_Msg_HBInfo.
         * @memberof hbsl
         * @classdesc Represents a HBSL_Msg_HBInfo.
         * @implements IHBSL_Msg_HBInfo
         * @constructor
         * @param {hbsl.IHBSL_Msg_HBInfo=} [properties] Properties to set
         */
        function HBSL_Msg_HBInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * HBSL_Msg_HBInfo UserID.
         * @member {number} UserID
         * @memberof hbsl.HBSL_Msg_HBInfo
         * @instance
         */
        HBSL_Msg_HBInfo.prototype.UserID = 0;

        /**
         * HBSL_Msg_HBInfo HBMoney.
         * @member {number|Long} HBMoney
         * @memberof hbsl.HBSL_Msg_HBInfo
         * @instance
         */
        HBSL_Msg_HBInfo.prototype.HBMoney = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * HBSL_Msg_HBInfo FaceID.
         * @member {number} FaceID
         * @memberof hbsl.HBSL_Msg_HBInfo
         * @instance
         */
        HBSL_Msg_HBInfo.prototype.FaceID = 0;

        /**
         * Creates a new HBSL_Msg_HBInfo instance using the specified properties.
         * @function create
         * @memberof hbsl.HBSL_Msg_HBInfo
         * @static
         * @param {hbsl.IHBSL_Msg_HBInfo=} [properties] Properties to set
         * @returns {hbsl.HBSL_Msg_HBInfo} HBSL_Msg_HBInfo instance
         */
        HBSL_Msg_HBInfo.create = function create(properties) {
            return new HBSL_Msg_HBInfo(properties);
        };

        /**
         * Encodes the specified HBSL_Msg_HBInfo message. Does not implicitly {@link hbsl.HBSL_Msg_HBInfo.verify|verify} messages.
         * @function encode
         * @memberof hbsl.HBSL_Msg_HBInfo
         * @static
         * @param {hbsl.IHBSL_Msg_HBInfo} message HBSL_Msg_HBInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HBSL_Msg_HBInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.UserID);
            if (message.HBMoney != null && message.hasOwnProperty("HBMoney"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.HBMoney);
            if (message.FaceID != null && message.hasOwnProperty("FaceID"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.FaceID);
            return writer;
        };

        /**
         * Encodes the specified HBSL_Msg_HBInfo message, length delimited. Does not implicitly {@link hbsl.HBSL_Msg_HBInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof hbsl.HBSL_Msg_HBInfo
         * @static
         * @param {hbsl.IHBSL_Msg_HBInfo} message HBSL_Msg_HBInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HBSL_Msg_HBInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a HBSL_Msg_HBInfo message from the specified reader or buffer.
         * @function decode
         * @memberof hbsl.HBSL_Msg_HBInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {hbsl.HBSL_Msg_HBInfo} HBSL_Msg_HBInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HBSL_Msg_HBInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.hbsl.HBSL_Msg_HBInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.UserID = reader.int32();
                    break;
                case 2:
                    message.HBMoney = reader.int64();
                    break;
                case 3:
                    message.FaceID = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a HBSL_Msg_HBInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof hbsl.HBSL_Msg_HBInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {hbsl.HBSL_Msg_HBInfo} HBSL_Msg_HBInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HBSL_Msg_HBInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a HBSL_Msg_HBInfo message.
         * @function verify
         * @memberof hbsl.HBSL_Msg_HBInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        HBSL_Msg_HBInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                if (!$util.isInteger(message.UserID))
                    return "UserID: integer expected";
            if (message.HBMoney != null && message.hasOwnProperty("HBMoney"))
                if (!$util.isInteger(message.HBMoney) && !(message.HBMoney && $util.isInteger(message.HBMoney.low) && $util.isInteger(message.HBMoney.high)))
                    return "HBMoney: integer|Long expected";
            if (message.FaceID != null && message.hasOwnProperty("FaceID"))
                if (!$util.isInteger(message.FaceID))
                    return "FaceID: integer expected";
            return null;
        };

        /**
         * Creates a HBSL_Msg_HBInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof hbsl.HBSL_Msg_HBInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {hbsl.HBSL_Msg_HBInfo} HBSL_Msg_HBInfo
         */
        HBSL_Msg_HBInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.hbsl.HBSL_Msg_HBInfo)
                return object;
            var message = new $root.hbsl.HBSL_Msg_HBInfo();
            if (object.UserID != null)
                message.UserID = object.UserID | 0;
            if (object.HBMoney != null)
                if ($util.Long)
                    (message.HBMoney = $util.Long.fromValue(object.HBMoney)).unsigned = false;
                else if (typeof object.HBMoney === "string")
                    message.HBMoney = parseInt(object.HBMoney, 10);
                else if (typeof object.HBMoney === "number")
                    message.HBMoney = object.HBMoney;
                else if (typeof object.HBMoney === "object")
                    message.HBMoney = new $util.LongBits(object.HBMoney.low >>> 0, object.HBMoney.high >>> 0).toNumber();
            if (object.FaceID != null)
                message.FaceID = object.FaceID | 0;
            return message;
        };

        /**
         * Creates a plain object from a HBSL_Msg_HBInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof hbsl.HBSL_Msg_HBInfo
         * @static
         * @param {hbsl.HBSL_Msg_HBInfo} message HBSL_Msg_HBInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        HBSL_Msg_HBInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.UserID = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.HBMoney = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.HBMoney = options.longs === String ? "0" : 0;
                object.FaceID = 0;
            }
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                object.UserID = message.UserID;
            if (message.HBMoney != null && message.hasOwnProperty("HBMoney"))
                if (typeof message.HBMoney === "number")
                    object.HBMoney = options.longs === String ? String(message.HBMoney) : message.HBMoney;
                else
                    object.HBMoney = options.longs === String ? $util.Long.prototype.toString.call(message.HBMoney) : options.longs === Number ? new $util.LongBits(message.HBMoney.low >>> 0, message.HBMoney.high >>> 0).toNumber() : message.HBMoney;
            if (message.FaceID != null && message.hasOwnProperty("FaceID"))
                object.FaceID = message.FaceID;
            return object;
        };

        /**
         * Converts this HBSL_Msg_HBInfo to JSON.
         * @function toJSON
         * @memberof hbsl.HBSL_Msg_HBInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        HBSL_Msg_HBInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return HBSL_Msg_HBInfo;
    })();

    hbsl.HBSL_Msg_AllHBInfoResult = (function() {

        /**
         * Properties of a HBSL_Msg_AllHBInfoResult.
         * @memberof hbsl
         * @interface IHBSL_Msg_AllHBInfoResult
         * @property {hbsl.IHBSL_Msg_HBInfo|null} [AllHBInfo] HBSL_Msg_AllHBInfoResult AllHBInfo
         */

        /**
         * Constructs a new HBSL_Msg_AllHBInfoResult.
         * @memberof hbsl
         * @classdesc Represents a HBSL_Msg_AllHBInfoResult.
         * @implements IHBSL_Msg_AllHBInfoResult
         * @constructor
         * @param {hbsl.IHBSL_Msg_AllHBInfoResult=} [properties] Properties to set
         */
        function HBSL_Msg_AllHBInfoResult(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * HBSL_Msg_AllHBInfoResult AllHBInfo.
         * @member {hbsl.IHBSL_Msg_HBInfo|null|undefined} AllHBInfo
         * @memberof hbsl.HBSL_Msg_AllHBInfoResult
         * @instance
         */
        HBSL_Msg_AllHBInfoResult.prototype.AllHBInfo = null;

        /**
         * Creates a new HBSL_Msg_AllHBInfoResult instance using the specified properties.
         * @function create
         * @memberof hbsl.HBSL_Msg_AllHBInfoResult
         * @static
         * @param {hbsl.IHBSL_Msg_AllHBInfoResult=} [properties] Properties to set
         * @returns {hbsl.HBSL_Msg_AllHBInfoResult} HBSL_Msg_AllHBInfoResult instance
         */
        HBSL_Msg_AllHBInfoResult.create = function create(properties) {
            return new HBSL_Msg_AllHBInfoResult(properties);
        };

        /**
         * Encodes the specified HBSL_Msg_AllHBInfoResult message. Does not implicitly {@link hbsl.HBSL_Msg_AllHBInfoResult.verify|verify} messages.
         * @function encode
         * @memberof hbsl.HBSL_Msg_AllHBInfoResult
         * @static
         * @param {hbsl.IHBSL_Msg_AllHBInfoResult} message HBSL_Msg_AllHBInfoResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HBSL_Msg_AllHBInfoResult.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.AllHBInfo != null && message.hasOwnProperty("AllHBInfo"))
                $root.hbsl.HBSL_Msg_HBInfo.encode(message.AllHBInfo, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified HBSL_Msg_AllHBInfoResult message, length delimited. Does not implicitly {@link hbsl.HBSL_Msg_AllHBInfoResult.verify|verify} messages.
         * @function encodeDelimited
         * @memberof hbsl.HBSL_Msg_AllHBInfoResult
         * @static
         * @param {hbsl.IHBSL_Msg_AllHBInfoResult} message HBSL_Msg_AllHBInfoResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HBSL_Msg_AllHBInfoResult.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a HBSL_Msg_AllHBInfoResult message from the specified reader or buffer.
         * @function decode
         * @memberof hbsl.HBSL_Msg_AllHBInfoResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {hbsl.HBSL_Msg_AllHBInfoResult} HBSL_Msg_AllHBInfoResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HBSL_Msg_AllHBInfoResult.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.hbsl.HBSL_Msg_AllHBInfoResult();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.AllHBInfo = $root.hbsl.HBSL_Msg_HBInfo.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a HBSL_Msg_AllHBInfoResult message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof hbsl.HBSL_Msg_AllHBInfoResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {hbsl.HBSL_Msg_AllHBInfoResult} HBSL_Msg_AllHBInfoResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HBSL_Msg_AllHBInfoResult.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a HBSL_Msg_AllHBInfoResult message.
         * @function verify
         * @memberof hbsl.HBSL_Msg_AllHBInfoResult
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        HBSL_Msg_AllHBInfoResult.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.AllHBInfo != null && message.hasOwnProperty("AllHBInfo")) {
                var error = $root.hbsl.HBSL_Msg_HBInfo.verify(message.AllHBInfo);
                if (error)
                    return "AllHBInfo." + error;
            }
            return null;
        };

        /**
         * Creates a HBSL_Msg_AllHBInfoResult message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof hbsl.HBSL_Msg_AllHBInfoResult
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {hbsl.HBSL_Msg_AllHBInfoResult} HBSL_Msg_AllHBInfoResult
         */
        HBSL_Msg_AllHBInfoResult.fromObject = function fromObject(object) {
            if (object instanceof $root.hbsl.HBSL_Msg_AllHBInfoResult)
                return object;
            var message = new $root.hbsl.HBSL_Msg_AllHBInfoResult();
            if (object.AllHBInfo != null) {
                if (typeof object.AllHBInfo !== "object")
                    throw TypeError(".hbsl.HBSL_Msg_AllHBInfoResult.AllHBInfo: object expected");
                message.AllHBInfo = $root.hbsl.HBSL_Msg_HBInfo.fromObject(object.AllHBInfo);
            }
            return message;
        };

        /**
         * Creates a plain object from a HBSL_Msg_AllHBInfoResult message. Also converts values to other types if specified.
         * @function toObject
         * @memberof hbsl.HBSL_Msg_AllHBInfoResult
         * @static
         * @param {hbsl.HBSL_Msg_AllHBInfoResult} message HBSL_Msg_AllHBInfoResult
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        HBSL_Msg_AllHBInfoResult.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.AllHBInfo = null;
            if (message.AllHBInfo != null && message.hasOwnProperty("AllHBInfo"))
                object.AllHBInfo = $root.hbsl.HBSL_Msg_HBInfo.toObject(message.AllHBInfo, options);
            return object;
        };

        /**
         * Converts this HBSL_Msg_AllHBInfoResult to JSON.
         * @function toJSON
         * @memberof hbsl.HBSL_Msg_AllHBInfoResult
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        HBSL_Msg_AllHBInfoResult.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return HBSL_Msg_AllHBInfoResult;
    })();

    hbsl.HBSL_Msg_Settlement = (function() {

        /**
         * Properties of a HBSL_Msg_Settlement.
         * @memberof hbsl
         * @interface IHBSL_Msg_Settlement
         * @property {number|null} [FaceID] HBSL_Msg_Settlement FaceID
         * @property {number|null} [ZhuangID] HBSL_Msg_Settlement ZhuangID
         * @property {number|Long|null} [ZhuangWinLose] HBSL_Msg_Settlement ZhuangWinLose
         * @property {number|Long|null} [ZhuangRemainMoney] HBSL_Msg_Settlement ZhuangRemainMoney
         * @property {number|null} [LandmineNumber] HBSL_Msg_Settlement LandmineNumber
         * @property {hbsl.IHBSL_Msg_UserInfo|null} [AllUserInfo] HBSL_Msg_Settlement AllUserInfo
         * @property {number|Long|null} [HBMoney] HBSL_Msg_Settlement HBMoney
         */

        /**
         * Constructs a new HBSL_Msg_Settlement.
         * @memberof hbsl
         * @classdesc Represents a HBSL_Msg_Settlement.
         * @implements IHBSL_Msg_Settlement
         * @constructor
         * @param {hbsl.IHBSL_Msg_Settlement=} [properties] Properties to set
         */
        function HBSL_Msg_Settlement(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * HBSL_Msg_Settlement FaceID.
         * @member {number} FaceID
         * @memberof hbsl.HBSL_Msg_Settlement
         * @instance
         */
        HBSL_Msg_Settlement.prototype.FaceID = 0;

        /**
         * HBSL_Msg_Settlement ZhuangID.
         * @member {number} ZhuangID
         * @memberof hbsl.HBSL_Msg_Settlement
         * @instance
         */
        HBSL_Msg_Settlement.prototype.ZhuangID = 0;

        /**
         * HBSL_Msg_Settlement ZhuangWinLose.
         * @member {number|Long} ZhuangWinLose
         * @memberof hbsl.HBSL_Msg_Settlement
         * @instance
         */
        HBSL_Msg_Settlement.prototype.ZhuangWinLose = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * HBSL_Msg_Settlement ZhuangRemainMoney.
         * @member {number|Long} ZhuangRemainMoney
         * @memberof hbsl.HBSL_Msg_Settlement
         * @instance
         */
        HBSL_Msg_Settlement.prototype.ZhuangRemainMoney = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * HBSL_Msg_Settlement LandmineNumber.
         * @member {number} LandmineNumber
         * @memberof hbsl.HBSL_Msg_Settlement
         * @instance
         */
        HBSL_Msg_Settlement.prototype.LandmineNumber = 0;

        /**
         * HBSL_Msg_Settlement AllUserInfo.
         * @member {hbsl.IHBSL_Msg_UserInfo|null|undefined} AllUserInfo
         * @memberof hbsl.HBSL_Msg_Settlement
         * @instance
         */
        HBSL_Msg_Settlement.prototype.AllUserInfo = null;

        /**
         * HBSL_Msg_Settlement HBMoney.
         * @member {number|Long} HBMoney
         * @memberof hbsl.HBSL_Msg_Settlement
         * @instance
         */
        HBSL_Msg_Settlement.prototype.HBMoney = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new HBSL_Msg_Settlement instance using the specified properties.
         * @function create
         * @memberof hbsl.HBSL_Msg_Settlement
         * @static
         * @param {hbsl.IHBSL_Msg_Settlement=} [properties] Properties to set
         * @returns {hbsl.HBSL_Msg_Settlement} HBSL_Msg_Settlement instance
         */
        HBSL_Msg_Settlement.create = function create(properties) {
            return new HBSL_Msg_Settlement(properties);
        };

        /**
         * Encodes the specified HBSL_Msg_Settlement message. Does not implicitly {@link hbsl.HBSL_Msg_Settlement.verify|verify} messages.
         * @function encode
         * @memberof hbsl.HBSL_Msg_Settlement
         * @static
         * @param {hbsl.IHBSL_Msg_Settlement} message HBSL_Msg_Settlement message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HBSL_Msg_Settlement.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.FaceID != null && message.hasOwnProperty("FaceID"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.FaceID);
            if (message.ZhuangID != null && message.hasOwnProperty("ZhuangID"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.ZhuangID);
            if (message.ZhuangWinLose != null && message.hasOwnProperty("ZhuangWinLose"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.ZhuangWinLose);
            if (message.ZhuangRemainMoney != null && message.hasOwnProperty("ZhuangRemainMoney"))
                writer.uint32(/* id 4, wireType 0 =*/32).int64(message.ZhuangRemainMoney);
            if (message.LandmineNumber != null && message.hasOwnProperty("LandmineNumber"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.LandmineNumber);
            if (message.AllUserInfo != null && message.hasOwnProperty("AllUserInfo"))
                $root.hbsl.HBSL_Msg_UserInfo.encode(message.AllUserInfo, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            if (message.HBMoney != null && message.hasOwnProperty("HBMoney"))
                writer.uint32(/* id 7, wireType 0 =*/56).int64(message.HBMoney);
            return writer;
        };

        /**
         * Encodes the specified HBSL_Msg_Settlement message, length delimited. Does not implicitly {@link hbsl.HBSL_Msg_Settlement.verify|verify} messages.
         * @function encodeDelimited
         * @memberof hbsl.HBSL_Msg_Settlement
         * @static
         * @param {hbsl.IHBSL_Msg_Settlement} message HBSL_Msg_Settlement message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HBSL_Msg_Settlement.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a HBSL_Msg_Settlement message from the specified reader or buffer.
         * @function decode
         * @memberof hbsl.HBSL_Msg_Settlement
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {hbsl.HBSL_Msg_Settlement} HBSL_Msg_Settlement
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HBSL_Msg_Settlement.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.hbsl.HBSL_Msg_Settlement();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.FaceID = reader.int32();
                    break;
                case 2:
                    message.ZhuangID = reader.int32();
                    break;
                case 3:
                    message.ZhuangWinLose = reader.int64();
                    break;
                case 4:
                    message.ZhuangRemainMoney = reader.int64();
                    break;
                case 5:
                    message.LandmineNumber = reader.int32();
                    break;
                case 6:
                    message.AllUserInfo = $root.hbsl.HBSL_Msg_UserInfo.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.HBMoney = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a HBSL_Msg_Settlement message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof hbsl.HBSL_Msg_Settlement
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {hbsl.HBSL_Msg_Settlement} HBSL_Msg_Settlement
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HBSL_Msg_Settlement.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a HBSL_Msg_Settlement message.
         * @function verify
         * @memberof hbsl.HBSL_Msg_Settlement
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        HBSL_Msg_Settlement.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.FaceID != null && message.hasOwnProperty("FaceID"))
                if (!$util.isInteger(message.FaceID))
                    return "FaceID: integer expected";
            if (message.ZhuangID != null && message.hasOwnProperty("ZhuangID"))
                if (!$util.isInteger(message.ZhuangID))
                    return "ZhuangID: integer expected";
            if (message.ZhuangWinLose != null && message.hasOwnProperty("ZhuangWinLose"))
                if (!$util.isInteger(message.ZhuangWinLose) && !(message.ZhuangWinLose && $util.isInteger(message.ZhuangWinLose.low) && $util.isInteger(message.ZhuangWinLose.high)))
                    return "ZhuangWinLose: integer|Long expected";
            if (message.ZhuangRemainMoney != null && message.hasOwnProperty("ZhuangRemainMoney"))
                if (!$util.isInteger(message.ZhuangRemainMoney) && !(message.ZhuangRemainMoney && $util.isInteger(message.ZhuangRemainMoney.low) && $util.isInteger(message.ZhuangRemainMoney.high)))
                    return "ZhuangRemainMoney: integer|Long expected";
            if (message.LandmineNumber != null && message.hasOwnProperty("LandmineNumber"))
                if (!$util.isInteger(message.LandmineNumber))
                    return "LandmineNumber: integer expected";
            if (message.AllUserInfo != null && message.hasOwnProperty("AllUserInfo")) {
                var error = $root.hbsl.HBSL_Msg_UserInfo.verify(message.AllUserInfo);
                if (error)
                    return "AllUserInfo." + error;
            }
            if (message.HBMoney != null && message.hasOwnProperty("HBMoney"))
                if (!$util.isInteger(message.HBMoney) && !(message.HBMoney && $util.isInteger(message.HBMoney.low) && $util.isInteger(message.HBMoney.high)))
                    return "HBMoney: integer|Long expected";
            return null;
        };

        /**
         * Creates a HBSL_Msg_Settlement message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof hbsl.HBSL_Msg_Settlement
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {hbsl.HBSL_Msg_Settlement} HBSL_Msg_Settlement
         */
        HBSL_Msg_Settlement.fromObject = function fromObject(object) {
            if (object instanceof $root.hbsl.HBSL_Msg_Settlement)
                return object;
            var message = new $root.hbsl.HBSL_Msg_Settlement();
            if (object.FaceID != null)
                message.FaceID = object.FaceID | 0;
            if (object.ZhuangID != null)
                message.ZhuangID = object.ZhuangID | 0;
            if (object.ZhuangWinLose != null)
                if ($util.Long)
                    (message.ZhuangWinLose = $util.Long.fromValue(object.ZhuangWinLose)).unsigned = false;
                else if (typeof object.ZhuangWinLose === "string")
                    message.ZhuangWinLose = parseInt(object.ZhuangWinLose, 10);
                else if (typeof object.ZhuangWinLose === "number")
                    message.ZhuangWinLose = object.ZhuangWinLose;
                else if (typeof object.ZhuangWinLose === "object")
                    message.ZhuangWinLose = new $util.LongBits(object.ZhuangWinLose.low >>> 0, object.ZhuangWinLose.high >>> 0).toNumber();
            if (object.ZhuangRemainMoney != null)
                if ($util.Long)
                    (message.ZhuangRemainMoney = $util.Long.fromValue(object.ZhuangRemainMoney)).unsigned = false;
                else if (typeof object.ZhuangRemainMoney === "string")
                    message.ZhuangRemainMoney = parseInt(object.ZhuangRemainMoney, 10);
                else if (typeof object.ZhuangRemainMoney === "number")
                    message.ZhuangRemainMoney = object.ZhuangRemainMoney;
                else if (typeof object.ZhuangRemainMoney === "object")
                    message.ZhuangRemainMoney = new $util.LongBits(object.ZhuangRemainMoney.low >>> 0, object.ZhuangRemainMoney.high >>> 0).toNumber();
            if (object.LandmineNumber != null)
                message.LandmineNumber = object.LandmineNumber | 0;
            if (object.AllUserInfo != null) {
                if (typeof object.AllUserInfo !== "object")
                    throw TypeError(".hbsl.HBSL_Msg_Settlement.AllUserInfo: object expected");
                message.AllUserInfo = $root.hbsl.HBSL_Msg_UserInfo.fromObject(object.AllUserInfo);
            }
            if (object.HBMoney != null)
                if ($util.Long)
                    (message.HBMoney = $util.Long.fromValue(object.HBMoney)).unsigned = false;
                else if (typeof object.HBMoney === "string")
                    message.HBMoney = parseInt(object.HBMoney, 10);
                else if (typeof object.HBMoney === "number")
                    message.HBMoney = object.HBMoney;
                else if (typeof object.HBMoney === "object")
                    message.HBMoney = new $util.LongBits(object.HBMoney.low >>> 0, object.HBMoney.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a HBSL_Msg_Settlement message. Also converts values to other types if specified.
         * @function toObject
         * @memberof hbsl.HBSL_Msg_Settlement
         * @static
         * @param {hbsl.HBSL_Msg_Settlement} message HBSL_Msg_Settlement
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        HBSL_Msg_Settlement.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.FaceID = 0;
                object.ZhuangID = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.ZhuangWinLose = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.ZhuangWinLose = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.ZhuangRemainMoney = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.ZhuangRemainMoney = options.longs === String ? "0" : 0;
                object.LandmineNumber = 0;
                object.AllUserInfo = null;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.HBMoney = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.HBMoney = options.longs === String ? "0" : 0;
            }
            if (message.FaceID != null && message.hasOwnProperty("FaceID"))
                object.FaceID = message.FaceID;
            if (message.ZhuangID != null && message.hasOwnProperty("ZhuangID"))
                object.ZhuangID = message.ZhuangID;
            if (message.ZhuangWinLose != null && message.hasOwnProperty("ZhuangWinLose"))
                if (typeof message.ZhuangWinLose === "number")
                    object.ZhuangWinLose = options.longs === String ? String(message.ZhuangWinLose) : message.ZhuangWinLose;
                else
                    object.ZhuangWinLose = options.longs === String ? $util.Long.prototype.toString.call(message.ZhuangWinLose) : options.longs === Number ? new $util.LongBits(message.ZhuangWinLose.low >>> 0, message.ZhuangWinLose.high >>> 0).toNumber() : message.ZhuangWinLose;
            if (message.ZhuangRemainMoney != null && message.hasOwnProperty("ZhuangRemainMoney"))
                if (typeof message.ZhuangRemainMoney === "number")
                    object.ZhuangRemainMoney = options.longs === String ? String(message.ZhuangRemainMoney) : message.ZhuangRemainMoney;
                else
                    object.ZhuangRemainMoney = options.longs === String ? $util.Long.prototype.toString.call(message.ZhuangRemainMoney) : options.longs === Number ? new $util.LongBits(message.ZhuangRemainMoney.low >>> 0, message.ZhuangRemainMoney.high >>> 0).toNumber() : message.ZhuangRemainMoney;
            if (message.LandmineNumber != null && message.hasOwnProperty("LandmineNumber"))
                object.LandmineNumber = message.LandmineNumber;
            if (message.AllUserInfo != null && message.hasOwnProperty("AllUserInfo"))
                object.AllUserInfo = $root.hbsl.HBSL_Msg_UserInfo.toObject(message.AllUserInfo, options);
            if (message.HBMoney != null && message.hasOwnProperty("HBMoney"))
                if (typeof message.HBMoney === "number")
                    object.HBMoney = options.longs === String ? String(message.HBMoney) : message.HBMoney;
                else
                    object.HBMoney = options.longs === String ? $util.Long.prototype.toString.call(message.HBMoney) : options.longs === Number ? new $util.LongBits(message.HBMoney.low >>> 0, message.HBMoney.high >>> 0).toNumber() : message.HBMoney;
            return object;
        };

        /**
         * Converts this HBSL_Msg_Settlement to JSON.
         * @function toJSON
         * @memberof hbsl.HBSL_Msg_Settlement
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        HBSL_Msg_Settlement.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return HBSL_Msg_Settlement;
    })();

    return hbsl;
})();

module.exports = $root;
