/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

//var $protobuf = require("protobufjs/minimal");
var $protobuf = protobuf;
// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.GameMsg_HLJBP = (function() {

    /**
     * Namespace GameMsg_HLJBP.
     * @exports GameMsg_HLJBP
     * @namespace
     */
    var GameMsg_HLJBP = {};

    GameMsg_HLJBP.HLJBP_Msg_GameInfo = (function() {

        /**
         * Properties of a HLJBP_Msg_GameInfo.
         * @memberof GameMsg_HLJBP
         * @interface IHLJBP_Msg_GameInfo
         * @property {Array.<string>|null} [Manual] HLJBP_Msg_GameInfo Manual
         * @property {Array.<number|Long>|null} [ChipValue] HLJBP_Msg_GameInfo ChipValue
         * @property {number|Long} Bet_Limit HLJBP_Msg_GameInfo Bet_Limit
         * @property {number} GameState HLJBP_Msg_GameInfo GameState
         * @property {number} TimeRemain HLJBP_Msg_GameInfo TimeRemain
         * @property {Array.<GameMsg_HLJBP.IHLJBP_Msg_UserInfo>|null} [UserInfo] HLJBP_Msg_GameInfo UserInfo
         * @property {number} LuckyNumber HLJBP_Msg_GameInfo LuckyNumber
         */

        /**
         * Constructs a new HLJBP_Msg_GameInfo.
         * @memberof GameMsg_HLJBP
         * @classdesc Represents a HLJBP_Msg_GameInfo.
         * @implements IHLJBP_Msg_GameInfo
         * @constructor
         * @param {GameMsg_HLJBP.IHLJBP_Msg_GameInfo=} [properties] Properties to set
         */
        function HLJBP_Msg_GameInfo(properties) {
            this.Manual = [];
            this.ChipValue = [];
            this.UserInfo = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * HLJBP_Msg_GameInfo Manual.
         * @member {Array.<string>} Manual
         * @memberof GameMsg_HLJBP.HLJBP_Msg_GameInfo
         * @instance
         */
        HLJBP_Msg_GameInfo.prototype.Manual = $util.emptyArray;

        /**
         * HLJBP_Msg_GameInfo ChipValue.
         * @member {Array.<number|Long>} ChipValue
         * @memberof GameMsg_HLJBP.HLJBP_Msg_GameInfo
         * @instance
         */
        HLJBP_Msg_GameInfo.prototype.ChipValue = $util.emptyArray;

        /**
         * HLJBP_Msg_GameInfo Bet_Limit.
         * @member {number|Long} Bet_Limit
         * @memberof GameMsg_HLJBP.HLJBP_Msg_GameInfo
         * @instance
         */
        HLJBP_Msg_GameInfo.prototype.Bet_Limit = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * HLJBP_Msg_GameInfo GameState.
         * @member {number} GameState
         * @memberof GameMsg_HLJBP.HLJBP_Msg_GameInfo
         * @instance
         */
        HLJBP_Msg_GameInfo.prototype.GameState = 0;

        /**
         * HLJBP_Msg_GameInfo TimeRemain.
         * @member {number} TimeRemain
         * @memberof GameMsg_HLJBP.HLJBP_Msg_GameInfo
         * @instance
         */
        HLJBP_Msg_GameInfo.prototype.TimeRemain = 0;

        /**
         * HLJBP_Msg_GameInfo UserInfo.
         * @member {Array.<GameMsg_HLJBP.IHLJBP_Msg_UserInfo>} UserInfo
         * @memberof GameMsg_HLJBP.HLJBP_Msg_GameInfo
         * @instance
         */
        HLJBP_Msg_GameInfo.prototype.UserInfo = $util.emptyArray;

        /**
         * HLJBP_Msg_GameInfo LuckyNumber.
         * @member {number} LuckyNumber
         * @memberof GameMsg_HLJBP.HLJBP_Msg_GameInfo
         * @instance
         */
        HLJBP_Msg_GameInfo.prototype.LuckyNumber = 0;

        /**
         * Creates a new HLJBP_Msg_GameInfo instance using the specified properties.
         * @function create
         * @memberof GameMsg_HLJBP.HLJBP_Msg_GameInfo
         * @static
         * @param {GameMsg_HLJBP.IHLJBP_Msg_GameInfo=} [properties] Properties to set
         * @returns {GameMsg_HLJBP.HLJBP_Msg_GameInfo} HLJBP_Msg_GameInfo instance
         */
        HLJBP_Msg_GameInfo.create = function create(properties) {
            return new HLJBP_Msg_GameInfo(properties);
        };

        /**
         * Encodes the specified HLJBP_Msg_GameInfo message. Does not implicitly {@link GameMsg_HLJBP.HLJBP_Msg_GameInfo.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_HLJBP.HLJBP_Msg_GameInfo
         * @static
         * @param {GameMsg_HLJBP.IHLJBP_Msg_GameInfo} message HLJBP_Msg_GameInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HLJBP_Msg_GameInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Manual != null && message.Manual.length)
                for (var i = 0; i < message.Manual.length; ++i)
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.Manual[i]);
            if (message.ChipValue != null && message.ChipValue.length) {
                writer.uint32(/* id 2, wireType 2 =*/18).fork();
                for (var i = 0; i < message.ChipValue.length; ++i)
                    writer.int64(message.ChipValue[i]);
                writer.ldelim();
            }
            writer.uint32(/* id 3, wireType 0 =*/24).int64(message.Bet_Limit);
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.GameState);
            writer.uint32(/* id 5, wireType 0 =*/40).int32(message.TimeRemain);
            if (message.UserInfo != null && message.UserInfo.length)
                for (var i = 0; i < message.UserInfo.length; ++i)
                    $root.GameMsg_HLJBP.HLJBP_Msg_UserInfo.encode(message.UserInfo[i], writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            writer.uint32(/* id 7, wireType 0 =*/56).int32(message.LuckyNumber);
            return writer;
        };

        /**
         * Encodes the specified HLJBP_Msg_GameInfo message, length delimited. Does not implicitly {@link GameMsg_HLJBP.HLJBP_Msg_GameInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_HLJBP.HLJBP_Msg_GameInfo
         * @static
         * @param {GameMsg_HLJBP.IHLJBP_Msg_GameInfo} message HLJBP_Msg_GameInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HLJBP_Msg_GameInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a HLJBP_Msg_GameInfo message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_HLJBP.HLJBP_Msg_GameInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_HLJBP.HLJBP_Msg_GameInfo} HLJBP_Msg_GameInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HLJBP_Msg_GameInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_HLJBP.HLJBP_Msg_GameInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.Manual && message.Manual.length))
                        message.Manual = [];
                    message.Manual.push(reader.string());
                    break;
                case 2:
                    if (!(message.ChipValue && message.ChipValue.length))
                        message.ChipValue = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.ChipValue.push(reader.int64());
                    } else
                        message.ChipValue.push(reader.int64());
                    break;
                case 3:
                    message.Bet_Limit = reader.int64();
                    break;
                case 4:
                    message.GameState = reader.int32();
                    break;
                case 5:
                    message.TimeRemain = reader.int32();
                    break;
                case 6:
                    if (!(message.UserInfo && message.UserInfo.length))
                        message.UserInfo = [];
                    message.UserInfo.push($root.GameMsg_HLJBP.HLJBP_Msg_UserInfo.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.LuckyNumber = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("Bet_Limit"))
                throw $util.ProtocolError("missing required 'Bet_Limit'", { instance: message });
            if (!message.hasOwnProperty("GameState"))
                throw $util.ProtocolError("missing required 'GameState'", { instance: message });
            if (!message.hasOwnProperty("TimeRemain"))
                throw $util.ProtocolError("missing required 'TimeRemain'", { instance: message });
            if (!message.hasOwnProperty("LuckyNumber"))
                throw $util.ProtocolError("missing required 'LuckyNumber'", { instance: message });
            return message;
        };

        /**
         * Decodes a HLJBP_Msg_GameInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_HLJBP.HLJBP_Msg_GameInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_HLJBP.HLJBP_Msg_GameInfo} HLJBP_Msg_GameInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HLJBP_Msg_GameInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a HLJBP_Msg_GameInfo message.
         * @function verify
         * @memberof GameMsg_HLJBP.HLJBP_Msg_GameInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        HLJBP_Msg_GameInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Manual != null && message.hasOwnProperty("Manual")) {
                if (!Array.isArray(message.Manual))
                    return "Manual: array expected";
                for (var i = 0; i < message.Manual.length; ++i)
                    if (!$util.isString(message.Manual[i]))
                        return "Manual: string[] expected";
            }
            if (message.ChipValue != null && message.hasOwnProperty("ChipValue")) {
                if (!Array.isArray(message.ChipValue))
                    return "ChipValue: array expected";
                for (var i = 0; i < message.ChipValue.length; ++i)
                    if (!$util.isInteger(message.ChipValue[i]) && !(message.ChipValue[i] && $util.isInteger(message.ChipValue[i].low) && $util.isInteger(message.ChipValue[i].high)))
                        return "ChipValue: integer|Long[] expected";
            }
            if (!$util.isInteger(message.Bet_Limit) && !(message.Bet_Limit && $util.isInteger(message.Bet_Limit.low) && $util.isInteger(message.Bet_Limit.high)))
                return "Bet_Limit: integer|Long expected";
            if (!$util.isInteger(message.GameState))
                return "GameState: integer expected";
            if (!$util.isInteger(message.TimeRemain))
                return "TimeRemain: integer expected";
            if (message.UserInfo != null && message.hasOwnProperty("UserInfo")) {
                if (!Array.isArray(message.UserInfo))
                    return "UserInfo: array expected";
                for (var i = 0; i < message.UserInfo.length; ++i) {
                    var error = $root.GameMsg_HLJBP.HLJBP_Msg_UserInfo.verify(message.UserInfo[i]);
                    if (error)
                        return "UserInfo." + error;
                }
            }
            if (!$util.isInteger(message.LuckyNumber))
                return "LuckyNumber: integer expected";
            return null;
        };

        /**
         * Creates a HLJBP_Msg_GameInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_HLJBP.HLJBP_Msg_GameInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_HLJBP.HLJBP_Msg_GameInfo} HLJBP_Msg_GameInfo
         */
        HLJBP_Msg_GameInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_HLJBP.HLJBP_Msg_GameInfo)
                return object;
            var message = new $root.GameMsg_HLJBP.HLJBP_Msg_GameInfo();
            if (object.Manual) {
                if (!Array.isArray(object.Manual))
                    throw TypeError(".GameMsg_HLJBP.HLJBP_Msg_GameInfo.Manual: array expected");
                message.Manual = [];
                for (var i = 0; i < object.Manual.length; ++i)
                    message.Manual[i] = String(object.Manual[i]);
            }
            if (object.ChipValue) {
                if (!Array.isArray(object.ChipValue))
                    throw TypeError(".GameMsg_HLJBP.HLJBP_Msg_GameInfo.ChipValue: array expected");
                message.ChipValue = [];
                for (var i = 0; i < object.ChipValue.length; ++i)
                    if ($util.Long)
                        (message.ChipValue[i] = $util.Long.fromValue(object.ChipValue[i])).unsigned = false;
                    else if (typeof object.ChipValue[i] === "string")
                        message.ChipValue[i] = parseInt(object.ChipValue[i], 10);
                    else if (typeof object.ChipValue[i] === "number")
                        message.ChipValue[i] = object.ChipValue[i];
                    else if (typeof object.ChipValue[i] === "object")
                        message.ChipValue[i] = new $util.LongBits(object.ChipValue[i].low >>> 0, object.ChipValue[i].high >>> 0).toNumber();
            }
            if (object.Bet_Limit != null)
                if ($util.Long)
                    (message.Bet_Limit = $util.Long.fromValue(object.Bet_Limit)).unsigned = false;
                else if (typeof object.Bet_Limit === "string")
                    message.Bet_Limit = parseInt(object.Bet_Limit, 10);
                else if (typeof object.Bet_Limit === "number")
                    message.Bet_Limit = object.Bet_Limit;
                else if (typeof object.Bet_Limit === "object")
                    message.Bet_Limit = new $util.LongBits(object.Bet_Limit.low >>> 0, object.Bet_Limit.high >>> 0).toNumber();
            if (object.GameState != null)
                message.GameState = object.GameState | 0;
            if (object.TimeRemain != null)
                message.TimeRemain = object.TimeRemain | 0;
            if (object.UserInfo) {
                if (!Array.isArray(object.UserInfo))
                    throw TypeError(".GameMsg_HLJBP.HLJBP_Msg_GameInfo.UserInfo: array expected");
                message.UserInfo = [];
                for (var i = 0; i < object.UserInfo.length; ++i) {
                    if (typeof object.UserInfo[i] !== "object")
                        throw TypeError(".GameMsg_HLJBP.HLJBP_Msg_GameInfo.UserInfo: object expected");
                    message.UserInfo[i] = $root.GameMsg_HLJBP.HLJBP_Msg_UserInfo.fromObject(object.UserInfo[i]);
                }
            }
            if (object.LuckyNumber != null)
                message.LuckyNumber = object.LuckyNumber | 0;
            return message;
        };

        /**
         * Creates a plain object from a HLJBP_Msg_GameInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_HLJBP.HLJBP_Msg_GameInfo
         * @static
         * @param {GameMsg_HLJBP.HLJBP_Msg_GameInfo} message HLJBP_Msg_GameInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        HLJBP_Msg_GameInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.Manual = [];
                object.ChipValue = [];
                object.UserInfo = [];
            }
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.Bet_Limit = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.Bet_Limit = options.longs === String ? "0" : 0;
                object.GameState = 0;
                object.TimeRemain = 0;
                object.LuckyNumber = 0;
            }
            if (message.Manual && message.Manual.length) {
                object.Manual = [];
                for (var j = 0; j < message.Manual.length; ++j)
                    object.Manual[j] = message.Manual[j];
            }
            if (message.ChipValue && message.ChipValue.length) {
                object.ChipValue = [];
                for (var j = 0; j < message.ChipValue.length; ++j)
                    if (typeof message.ChipValue[j] === "number")
                        object.ChipValue[j] = options.longs === String ? String(message.ChipValue[j]) : message.ChipValue[j];
                    else
                        object.ChipValue[j] = options.longs === String ? $util.Long.prototype.toString.call(message.ChipValue[j]) : options.longs === Number ? new $util.LongBits(message.ChipValue[j].low >>> 0, message.ChipValue[j].high >>> 0).toNumber() : message.ChipValue[j];
            }
            if (message.Bet_Limit != null && message.hasOwnProperty("Bet_Limit"))
                if (typeof message.Bet_Limit === "number")
                    object.Bet_Limit = options.longs === String ? String(message.Bet_Limit) : message.Bet_Limit;
                else
                    object.Bet_Limit = options.longs === String ? $util.Long.prototype.toString.call(message.Bet_Limit) : options.longs === Number ? new $util.LongBits(message.Bet_Limit.low >>> 0, message.Bet_Limit.high >>> 0).toNumber() : message.Bet_Limit;
            if (message.GameState != null && message.hasOwnProperty("GameState"))
                object.GameState = message.GameState;
            if (message.TimeRemain != null && message.hasOwnProperty("TimeRemain"))
                object.TimeRemain = message.TimeRemain;
            if (message.UserInfo && message.UserInfo.length) {
                object.UserInfo = [];
                for (var j = 0; j < message.UserInfo.length; ++j)
                    object.UserInfo[j] = $root.GameMsg_HLJBP.HLJBP_Msg_UserInfo.toObject(message.UserInfo[j], options);
            }
            if (message.LuckyNumber != null && message.hasOwnProperty("LuckyNumber"))
                object.LuckyNumber = message.LuckyNumber;
            return object;
        };

        /**
         * Converts this HLJBP_Msg_GameInfo to JSON.
         * @function toJSON
         * @memberof GameMsg_HLJBP.HLJBP_Msg_GameInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        HLJBP_Msg_GameInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return HLJBP_Msg_GameInfo;
    })();

    GameMsg_HLJBP.HLJBP_Msg_AllUserInfo = (function() {

        /**
         * Properties of a HLJBP_Msg_AllUserInfo.
         * @memberof GameMsg_HLJBP
         * @interface IHLJBP_Msg_AllUserInfo
         * @property {Array.<GameMsg_HLJBP.IHLJBP_Msg_UserInfo>|null} [UserInfo] HLJBP_Msg_AllUserInfo UserInfo
         */

        /**
         * Constructs a new HLJBP_Msg_AllUserInfo.
         * @memberof GameMsg_HLJBP
         * @classdesc Represents a HLJBP_Msg_AllUserInfo.
         * @implements IHLJBP_Msg_AllUserInfo
         * @constructor
         * @param {GameMsg_HLJBP.IHLJBP_Msg_AllUserInfo=} [properties] Properties to set
         */
        function HLJBP_Msg_AllUserInfo(properties) {
            this.UserInfo = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * HLJBP_Msg_AllUserInfo UserInfo.
         * @member {Array.<GameMsg_HLJBP.IHLJBP_Msg_UserInfo>} UserInfo
         * @memberof GameMsg_HLJBP.HLJBP_Msg_AllUserInfo
         * @instance
         */
        HLJBP_Msg_AllUserInfo.prototype.UserInfo = $util.emptyArray;

        /**
         * Creates a new HLJBP_Msg_AllUserInfo instance using the specified properties.
         * @function create
         * @memberof GameMsg_HLJBP.HLJBP_Msg_AllUserInfo
         * @static
         * @param {GameMsg_HLJBP.IHLJBP_Msg_AllUserInfo=} [properties] Properties to set
         * @returns {GameMsg_HLJBP.HLJBP_Msg_AllUserInfo} HLJBP_Msg_AllUserInfo instance
         */
        HLJBP_Msg_AllUserInfo.create = function create(properties) {
            return new HLJBP_Msg_AllUserInfo(properties);
        };

        /**
         * Encodes the specified HLJBP_Msg_AllUserInfo message. Does not implicitly {@link GameMsg_HLJBP.HLJBP_Msg_AllUserInfo.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_HLJBP.HLJBP_Msg_AllUserInfo
         * @static
         * @param {GameMsg_HLJBP.IHLJBP_Msg_AllUserInfo} message HLJBP_Msg_AllUserInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HLJBP_Msg_AllUserInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.UserInfo != null && message.UserInfo.length)
                for (var i = 0; i < message.UserInfo.length; ++i)
                    $root.GameMsg_HLJBP.HLJBP_Msg_UserInfo.encode(message.UserInfo[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified HLJBP_Msg_AllUserInfo message, length delimited. Does not implicitly {@link GameMsg_HLJBP.HLJBP_Msg_AllUserInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_HLJBP.HLJBP_Msg_AllUserInfo
         * @static
         * @param {GameMsg_HLJBP.IHLJBP_Msg_AllUserInfo} message HLJBP_Msg_AllUserInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HLJBP_Msg_AllUserInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a HLJBP_Msg_AllUserInfo message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_HLJBP.HLJBP_Msg_AllUserInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_HLJBP.HLJBP_Msg_AllUserInfo} HLJBP_Msg_AllUserInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HLJBP_Msg_AllUserInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_HLJBP.HLJBP_Msg_AllUserInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.UserInfo && message.UserInfo.length))
                        message.UserInfo = [];
                    message.UserInfo.push($root.GameMsg_HLJBP.HLJBP_Msg_UserInfo.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a HLJBP_Msg_AllUserInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_HLJBP.HLJBP_Msg_AllUserInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_HLJBP.HLJBP_Msg_AllUserInfo} HLJBP_Msg_AllUserInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HLJBP_Msg_AllUserInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a HLJBP_Msg_AllUserInfo message.
         * @function verify
         * @memberof GameMsg_HLJBP.HLJBP_Msg_AllUserInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        HLJBP_Msg_AllUserInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.UserInfo != null && message.hasOwnProperty("UserInfo")) {
                if (!Array.isArray(message.UserInfo))
                    return "UserInfo: array expected";
                for (var i = 0; i < message.UserInfo.length; ++i) {
                    var error = $root.GameMsg_HLJBP.HLJBP_Msg_UserInfo.verify(message.UserInfo[i]);
                    if (error)
                        return "UserInfo." + error;
                }
            }
            return null;
        };

        /**
         * Creates a HLJBP_Msg_AllUserInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_HLJBP.HLJBP_Msg_AllUserInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_HLJBP.HLJBP_Msg_AllUserInfo} HLJBP_Msg_AllUserInfo
         */
        HLJBP_Msg_AllUserInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_HLJBP.HLJBP_Msg_AllUserInfo)
                return object;
            var message = new $root.GameMsg_HLJBP.HLJBP_Msg_AllUserInfo();
            if (object.UserInfo) {
                if (!Array.isArray(object.UserInfo))
                    throw TypeError(".GameMsg_HLJBP.HLJBP_Msg_AllUserInfo.UserInfo: array expected");
                message.UserInfo = [];
                for (var i = 0; i < object.UserInfo.length; ++i) {
                    if (typeof object.UserInfo[i] !== "object")
                        throw TypeError(".GameMsg_HLJBP.HLJBP_Msg_AllUserInfo.UserInfo: object expected");
                    message.UserInfo[i] = $root.GameMsg_HLJBP.HLJBP_Msg_UserInfo.fromObject(object.UserInfo[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a HLJBP_Msg_AllUserInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_HLJBP.HLJBP_Msg_AllUserInfo
         * @static
         * @param {GameMsg_HLJBP.HLJBP_Msg_AllUserInfo} message HLJBP_Msg_AllUserInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        HLJBP_Msg_AllUserInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.UserInfo = [];
            if (message.UserInfo && message.UserInfo.length) {
                object.UserInfo = [];
                for (var j = 0; j < message.UserInfo.length; ++j)
                    object.UserInfo[j] = $root.GameMsg_HLJBP.HLJBP_Msg_UserInfo.toObject(message.UserInfo[j], options);
            }
            return object;
        };

        /**
         * Converts this HLJBP_Msg_AllUserInfo to JSON.
         * @function toJSON
         * @memberof GameMsg_HLJBP.HLJBP_Msg_AllUserInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        HLJBP_Msg_AllUserInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return HLJBP_Msg_AllUserInfo;
    })();

    GameMsg_HLJBP.HLJBP_Msg_UserInfo = (function() {

        /**
         * Properties of a HLJBP_Msg_UserInfo.
         * @memberof GameMsg_HLJBP
         * @interface IHLJBP_Msg_UserInfo
         * @property {number} UserID HLJBP_Msg_UserInfo UserID
         * @property {number} State HLJBP_Msg_UserInfo State
         * @property {number} SeatNo HLJBP_Msg_UserInfo SeatNo
         * @property {number|null} [FaceID] HLJBP_Msg_UserInfo FaceID
         * @property {number|Long} Money HLJBP_Msg_UserInfo Money
         * @property {number|Long} Bet HLJBP_Msg_UserInfo Bet
         * @property {number} Winner HLJBP_Msg_UserInfo Winner
         * @property {number|Long} WinLoseMoney HLJBP_Msg_UserInfo WinLoseMoney
         * @property {number|Long} TotalWinLose HLJBP_Msg_UserInfo TotalWinLose
         */

        /**
         * Constructs a new HLJBP_Msg_UserInfo.
         * @memberof GameMsg_HLJBP
         * @classdesc Represents a HLJBP_Msg_UserInfo.
         * @implements IHLJBP_Msg_UserInfo
         * @constructor
         * @param {GameMsg_HLJBP.IHLJBP_Msg_UserInfo=} [properties] Properties to set
         */
        function HLJBP_Msg_UserInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * HLJBP_Msg_UserInfo UserID.
         * @member {number} UserID
         * @memberof GameMsg_HLJBP.HLJBP_Msg_UserInfo
         * @instance
         */
        HLJBP_Msg_UserInfo.prototype.UserID = 0;

        /**
         * HLJBP_Msg_UserInfo State.
         * @member {number} State
         * @memberof GameMsg_HLJBP.HLJBP_Msg_UserInfo
         * @instance
         */
        HLJBP_Msg_UserInfo.prototype.State = 0;

        /**
         * HLJBP_Msg_UserInfo SeatNo.
         * @member {number} SeatNo
         * @memberof GameMsg_HLJBP.HLJBP_Msg_UserInfo
         * @instance
         */
        HLJBP_Msg_UserInfo.prototype.SeatNo = 0;

        /**
         * HLJBP_Msg_UserInfo FaceID.
         * @member {number} FaceID
         * @memberof GameMsg_HLJBP.HLJBP_Msg_UserInfo
         * @instance
         */
        HLJBP_Msg_UserInfo.prototype.FaceID = 0;

        /**
         * HLJBP_Msg_UserInfo Money.
         * @member {number|Long} Money
         * @memberof GameMsg_HLJBP.HLJBP_Msg_UserInfo
         * @instance
         */
        HLJBP_Msg_UserInfo.prototype.Money = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * HLJBP_Msg_UserInfo Bet.
         * @member {number|Long} Bet
         * @memberof GameMsg_HLJBP.HLJBP_Msg_UserInfo
         * @instance
         */
        HLJBP_Msg_UserInfo.prototype.Bet = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * HLJBP_Msg_UserInfo Winner.
         * @member {number} Winner
         * @memberof GameMsg_HLJBP.HLJBP_Msg_UserInfo
         * @instance
         */
        HLJBP_Msg_UserInfo.prototype.Winner = 0;

        /**
         * HLJBP_Msg_UserInfo WinLoseMoney.
         * @member {number|Long} WinLoseMoney
         * @memberof GameMsg_HLJBP.HLJBP_Msg_UserInfo
         * @instance
         */
        HLJBP_Msg_UserInfo.prototype.WinLoseMoney = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * HLJBP_Msg_UserInfo TotalWinLose.
         * @member {number|Long} TotalWinLose
         * @memberof GameMsg_HLJBP.HLJBP_Msg_UserInfo
         * @instance
         */
        HLJBP_Msg_UserInfo.prototype.TotalWinLose = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new HLJBP_Msg_UserInfo instance using the specified properties.
         * @function create
         * @memberof GameMsg_HLJBP.HLJBP_Msg_UserInfo
         * @static
         * @param {GameMsg_HLJBP.IHLJBP_Msg_UserInfo=} [properties] Properties to set
         * @returns {GameMsg_HLJBP.HLJBP_Msg_UserInfo} HLJBP_Msg_UserInfo instance
         */
        HLJBP_Msg_UserInfo.create = function create(properties) {
            return new HLJBP_Msg_UserInfo(properties);
        };

        /**
         * Encodes the specified HLJBP_Msg_UserInfo message. Does not implicitly {@link GameMsg_HLJBP.HLJBP_Msg_UserInfo.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_HLJBP.HLJBP_Msg_UserInfo
         * @static
         * @param {GameMsg_HLJBP.IHLJBP_Msg_UserInfo} message HLJBP_Msg_UserInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HLJBP_Msg_UserInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.UserID);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.State);
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.SeatNo);
            if (message.FaceID != null && message.hasOwnProperty("FaceID"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.FaceID);
            writer.uint32(/* id 5, wireType 0 =*/40).int64(message.Money);
            writer.uint32(/* id 6, wireType 0 =*/48).int64(message.Bet);
            writer.uint32(/* id 7, wireType 0 =*/56).int32(message.Winner);
            writer.uint32(/* id 8, wireType 0 =*/64).int64(message.WinLoseMoney);
            writer.uint32(/* id 9, wireType 0 =*/72).int64(message.TotalWinLose);
            return writer;
        };

        /**
         * Encodes the specified HLJBP_Msg_UserInfo message, length delimited. Does not implicitly {@link GameMsg_HLJBP.HLJBP_Msg_UserInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_HLJBP.HLJBP_Msg_UserInfo
         * @static
         * @param {GameMsg_HLJBP.IHLJBP_Msg_UserInfo} message HLJBP_Msg_UserInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HLJBP_Msg_UserInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a HLJBP_Msg_UserInfo message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_HLJBP.HLJBP_Msg_UserInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_HLJBP.HLJBP_Msg_UserInfo} HLJBP_Msg_UserInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HLJBP_Msg_UserInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_HLJBP.HLJBP_Msg_UserInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.UserID = reader.int32();
                    break;
                case 2:
                    message.State = reader.int32();
                    break;
                case 3:
                    message.SeatNo = reader.int32();
                    break;
                case 4:
                    message.FaceID = reader.int32();
                    break;
                case 5:
                    message.Money = reader.int64();
                    break;
                case 6:
                    message.Bet = reader.int64();
                    break;
                case 7:
                    message.Winner = reader.int32();
                    break;
                case 8:
                    message.WinLoseMoney = reader.int64();
                    break;
                case 9:
                    message.TotalWinLose = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("UserID"))
                throw $util.ProtocolError("missing required 'UserID'", { instance: message });
            if (!message.hasOwnProperty("State"))
                throw $util.ProtocolError("missing required 'State'", { instance: message });
            if (!message.hasOwnProperty("SeatNo"))
                throw $util.ProtocolError("missing required 'SeatNo'", { instance: message });
            if (!message.hasOwnProperty("Money"))
                throw $util.ProtocolError("missing required 'Money'", { instance: message });
            if (!message.hasOwnProperty("Bet"))
                throw $util.ProtocolError("missing required 'Bet'", { instance: message });
            if (!message.hasOwnProperty("Winner"))
                throw $util.ProtocolError("missing required 'Winner'", { instance: message });
            if (!message.hasOwnProperty("WinLoseMoney"))
                throw $util.ProtocolError("missing required 'WinLoseMoney'", { instance: message });
            if (!message.hasOwnProperty("TotalWinLose"))
                throw $util.ProtocolError("missing required 'TotalWinLose'", { instance: message });
            return message;
        };

        /**
         * Decodes a HLJBP_Msg_UserInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_HLJBP.HLJBP_Msg_UserInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_HLJBP.HLJBP_Msg_UserInfo} HLJBP_Msg_UserInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HLJBP_Msg_UserInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a HLJBP_Msg_UserInfo message.
         * @function verify
         * @memberof GameMsg_HLJBP.HLJBP_Msg_UserInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        HLJBP_Msg_UserInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.UserID))
                return "UserID: integer expected";
            if (!$util.isInteger(message.State))
                return "State: integer expected";
            if (!$util.isInteger(message.SeatNo))
                return "SeatNo: integer expected";
            if (message.FaceID != null && message.hasOwnProperty("FaceID"))
                if (!$util.isInteger(message.FaceID))
                    return "FaceID: integer expected";
            if (!$util.isInteger(message.Money) && !(message.Money && $util.isInteger(message.Money.low) && $util.isInteger(message.Money.high)))
                return "Money: integer|Long expected";
            if (!$util.isInteger(message.Bet) && !(message.Bet && $util.isInteger(message.Bet.low) && $util.isInteger(message.Bet.high)))
                return "Bet: integer|Long expected";
            if (!$util.isInteger(message.Winner))
                return "Winner: integer expected";
            if (!$util.isInteger(message.WinLoseMoney) && !(message.WinLoseMoney && $util.isInteger(message.WinLoseMoney.low) && $util.isInteger(message.WinLoseMoney.high)))
                return "WinLoseMoney: integer|Long expected";
            if (!$util.isInteger(message.TotalWinLose) && !(message.TotalWinLose && $util.isInteger(message.TotalWinLose.low) && $util.isInteger(message.TotalWinLose.high)))
                return "TotalWinLose: integer|Long expected";
            return null;
        };

        /**
         * Creates a HLJBP_Msg_UserInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_HLJBP.HLJBP_Msg_UserInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_HLJBP.HLJBP_Msg_UserInfo} HLJBP_Msg_UserInfo
         */
        HLJBP_Msg_UserInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_HLJBP.HLJBP_Msg_UserInfo)
                return object;
            var message = new $root.GameMsg_HLJBP.HLJBP_Msg_UserInfo();
            if (object.UserID != null)
                message.UserID = object.UserID | 0;
            if (object.State != null)
                message.State = object.State | 0;
            if (object.SeatNo != null)
                message.SeatNo = object.SeatNo | 0;
            if (object.FaceID != null)
                message.FaceID = object.FaceID | 0;
            if (object.Money != null)
                if ($util.Long)
                    (message.Money = $util.Long.fromValue(object.Money)).unsigned = false;
                else if (typeof object.Money === "string")
                    message.Money = parseInt(object.Money, 10);
                else if (typeof object.Money === "number")
                    message.Money = object.Money;
                else if (typeof object.Money === "object")
                    message.Money = new $util.LongBits(object.Money.low >>> 0, object.Money.high >>> 0).toNumber();
            if (object.Bet != null)
                if ($util.Long)
                    (message.Bet = $util.Long.fromValue(object.Bet)).unsigned = false;
                else if (typeof object.Bet === "string")
                    message.Bet = parseInt(object.Bet, 10);
                else if (typeof object.Bet === "number")
                    message.Bet = object.Bet;
                else if (typeof object.Bet === "object")
                    message.Bet = new $util.LongBits(object.Bet.low >>> 0, object.Bet.high >>> 0).toNumber();
            if (object.Winner != null)
                message.Winner = object.Winner | 0;
            if (object.WinLoseMoney != null)
                if ($util.Long)
                    (message.WinLoseMoney = $util.Long.fromValue(object.WinLoseMoney)).unsigned = false;
                else if (typeof object.WinLoseMoney === "string")
                    message.WinLoseMoney = parseInt(object.WinLoseMoney, 10);
                else if (typeof object.WinLoseMoney === "number")
                    message.WinLoseMoney = object.WinLoseMoney;
                else if (typeof object.WinLoseMoney === "object")
                    message.WinLoseMoney = new $util.LongBits(object.WinLoseMoney.low >>> 0, object.WinLoseMoney.high >>> 0).toNumber();
            if (object.TotalWinLose != null)
                if ($util.Long)
                    (message.TotalWinLose = $util.Long.fromValue(object.TotalWinLose)).unsigned = false;
                else if (typeof object.TotalWinLose === "string")
                    message.TotalWinLose = parseInt(object.TotalWinLose, 10);
                else if (typeof object.TotalWinLose === "number")
                    message.TotalWinLose = object.TotalWinLose;
                else if (typeof object.TotalWinLose === "object")
                    message.TotalWinLose = new $util.LongBits(object.TotalWinLose.low >>> 0, object.TotalWinLose.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a HLJBP_Msg_UserInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_HLJBP.HLJBP_Msg_UserInfo
         * @static
         * @param {GameMsg_HLJBP.HLJBP_Msg_UserInfo} message HLJBP_Msg_UserInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        HLJBP_Msg_UserInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.UserID = 0;
                object.State = 0;
                object.SeatNo = 0;
                object.FaceID = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.Money = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.Money = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.Bet = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.Bet = options.longs === String ? "0" : 0;
                object.Winner = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.WinLoseMoney = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.WinLoseMoney = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.TotalWinLose = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.TotalWinLose = options.longs === String ? "0" : 0;
            }
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                object.UserID = message.UserID;
            if (message.State != null && message.hasOwnProperty("State"))
                object.State = message.State;
            if (message.SeatNo != null && message.hasOwnProperty("SeatNo"))
                object.SeatNo = message.SeatNo;
            if (message.FaceID != null && message.hasOwnProperty("FaceID"))
                object.FaceID = message.FaceID;
            if (message.Money != null && message.hasOwnProperty("Money"))
                if (typeof message.Money === "number")
                    object.Money = options.longs === String ? String(message.Money) : message.Money;
                else
                    object.Money = options.longs === String ? $util.Long.prototype.toString.call(message.Money) : options.longs === Number ? new $util.LongBits(message.Money.low >>> 0, message.Money.high >>> 0).toNumber() : message.Money;
            if (message.Bet != null && message.hasOwnProperty("Bet"))
                if (typeof message.Bet === "number")
                    object.Bet = options.longs === String ? String(message.Bet) : message.Bet;
                else
                    object.Bet = options.longs === String ? $util.Long.prototype.toString.call(message.Bet) : options.longs === Number ? new $util.LongBits(message.Bet.low >>> 0, message.Bet.high >>> 0).toNumber() : message.Bet;
            if (message.Winner != null && message.hasOwnProperty("Winner"))
                object.Winner = message.Winner;
            if (message.WinLoseMoney != null && message.hasOwnProperty("WinLoseMoney"))
                if (typeof message.WinLoseMoney === "number")
                    object.WinLoseMoney = options.longs === String ? String(message.WinLoseMoney) : message.WinLoseMoney;
                else
                    object.WinLoseMoney = options.longs === String ? $util.Long.prototype.toString.call(message.WinLoseMoney) : options.longs === Number ? new $util.LongBits(message.WinLoseMoney.low >>> 0, message.WinLoseMoney.high >>> 0).toNumber() : message.WinLoseMoney;
            if (message.TotalWinLose != null && message.hasOwnProperty("TotalWinLose"))
                if (typeof message.TotalWinLose === "number")
                    object.TotalWinLose = options.longs === String ? String(message.TotalWinLose) : message.TotalWinLose;
                else
                    object.TotalWinLose = options.longs === String ? $util.Long.prototype.toString.call(message.TotalWinLose) : options.longs === Number ? new $util.LongBits(message.TotalWinLose.low >>> 0, message.TotalWinLose.high >>> 0).toNumber() : message.TotalWinLose;
            return object;
        };

        /**
         * Converts this HLJBP_Msg_UserInfo to JSON.
         * @function toJSON
         * @memberof GameMsg_HLJBP.HLJBP_Msg_UserInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        HLJBP_Msg_UserInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return HLJBP_Msg_UserInfo;
    })();

    GameMsg_HLJBP.HLJBP_Msg_UserBettingStart = (function() {

        /**
         * Properties of a HLJBP_Msg_UserBettingStart.
         * @memberof GameMsg_HLJBP
         * @interface IHLJBP_Msg_UserBettingStart
         * @property {number} TimeRemain HLJBP_Msg_UserBettingStart TimeRemain
         */

        /**
         * Constructs a new HLJBP_Msg_UserBettingStart.
         * @memberof GameMsg_HLJBP
         * @classdesc Represents a HLJBP_Msg_UserBettingStart.
         * @implements IHLJBP_Msg_UserBettingStart
         * @constructor
         * @param {GameMsg_HLJBP.IHLJBP_Msg_UserBettingStart=} [properties] Properties to set
         */
        function HLJBP_Msg_UserBettingStart(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * HLJBP_Msg_UserBettingStart TimeRemain.
         * @member {number} TimeRemain
         * @memberof GameMsg_HLJBP.HLJBP_Msg_UserBettingStart
         * @instance
         */
        HLJBP_Msg_UserBettingStart.prototype.TimeRemain = 0;

        /**
         * Creates a new HLJBP_Msg_UserBettingStart instance using the specified properties.
         * @function create
         * @memberof GameMsg_HLJBP.HLJBP_Msg_UserBettingStart
         * @static
         * @param {GameMsg_HLJBP.IHLJBP_Msg_UserBettingStart=} [properties] Properties to set
         * @returns {GameMsg_HLJBP.HLJBP_Msg_UserBettingStart} HLJBP_Msg_UserBettingStart instance
         */
        HLJBP_Msg_UserBettingStart.create = function create(properties) {
            return new HLJBP_Msg_UserBettingStart(properties);
        };

        /**
         * Encodes the specified HLJBP_Msg_UserBettingStart message. Does not implicitly {@link GameMsg_HLJBP.HLJBP_Msg_UserBettingStart.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_HLJBP.HLJBP_Msg_UserBettingStart
         * @static
         * @param {GameMsg_HLJBP.IHLJBP_Msg_UserBettingStart} message HLJBP_Msg_UserBettingStart message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HLJBP_Msg_UserBettingStart.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.TimeRemain);
            return writer;
        };

        /**
         * Encodes the specified HLJBP_Msg_UserBettingStart message, length delimited. Does not implicitly {@link GameMsg_HLJBP.HLJBP_Msg_UserBettingStart.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_HLJBP.HLJBP_Msg_UserBettingStart
         * @static
         * @param {GameMsg_HLJBP.IHLJBP_Msg_UserBettingStart} message HLJBP_Msg_UserBettingStart message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HLJBP_Msg_UserBettingStart.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a HLJBP_Msg_UserBettingStart message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_HLJBP.HLJBP_Msg_UserBettingStart
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_HLJBP.HLJBP_Msg_UserBettingStart} HLJBP_Msg_UserBettingStart
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HLJBP_Msg_UserBettingStart.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_HLJBP.HLJBP_Msg_UserBettingStart();
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
         * Decodes a HLJBP_Msg_UserBettingStart message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_HLJBP.HLJBP_Msg_UserBettingStart
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_HLJBP.HLJBP_Msg_UserBettingStart} HLJBP_Msg_UserBettingStart
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HLJBP_Msg_UserBettingStart.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a HLJBP_Msg_UserBettingStart message.
         * @function verify
         * @memberof GameMsg_HLJBP.HLJBP_Msg_UserBettingStart
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        HLJBP_Msg_UserBettingStart.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.TimeRemain))
                return "TimeRemain: integer expected";
            return null;
        };

        /**
         * Creates a HLJBP_Msg_UserBettingStart message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_HLJBP.HLJBP_Msg_UserBettingStart
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_HLJBP.HLJBP_Msg_UserBettingStart} HLJBP_Msg_UserBettingStart
         */
        HLJBP_Msg_UserBettingStart.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_HLJBP.HLJBP_Msg_UserBettingStart)
                return object;
            var message = new $root.GameMsg_HLJBP.HLJBP_Msg_UserBettingStart();
            if (object.TimeRemain != null)
                message.TimeRemain = object.TimeRemain | 0;
            return message;
        };

        /**
         * Creates a plain object from a HLJBP_Msg_UserBettingStart message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_HLJBP.HLJBP_Msg_UserBettingStart
         * @static
         * @param {GameMsg_HLJBP.HLJBP_Msg_UserBettingStart} message HLJBP_Msg_UserBettingStart
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        HLJBP_Msg_UserBettingStart.toObject = function toObject(message, options) {
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
         * Converts this HLJBP_Msg_UserBettingStart to JSON.
         * @function toJSON
         * @memberof GameMsg_HLJBP.HLJBP_Msg_UserBettingStart
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        HLJBP_Msg_UserBettingStart.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return HLJBP_Msg_UserBettingStart;
    })();

    GameMsg_HLJBP.HLJBP_Msg_Bet = (function() {

        /**
         * Properties of a HLJBP_Msg_Bet.
         * @memberof GameMsg_HLJBP
         * @interface IHLJBP_Msg_Bet
         * @property {number|Long} Bet HLJBP_Msg_Bet Bet
         */

        /**
         * Constructs a new HLJBP_Msg_Bet.
         * @memberof GameMsg_HLJBP
         * @classdesc Represents a HLJBP_Msg_Bet.
         * @implements IHLJBP_Msg_Bet
         * @constructor
         * @param {GameMsg_HLJBP.IHLJBP_Msg_Bet=} [properties] Properties to set
         */
        function HLJBP_Msg_Bet(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * HLJBP_Msg_Bet Bet.
         * @member {number|Long} Bet
         * @memberof GameMsg_HLJBP.HLJBP_Msg_Bet
         * @instance
         */
        HLJBP_Msg_Bet.prototype.Bet = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new HLJBP_Msg_Bet instance using the specified properties.
         * @function create
         * @memberof GameMsg_HLJBP.HLJBP_Msg_Bet
         * @static
         * @param {GameMsg_HLJBP.IHLJBP_Msg_Bet=} [properties] Properties to set
         * @returns {GameMsg_HLJBP.HLJBP_Msg_Bet} HLJBP_Msg_Bet instance
         */
        HLJBP_Msg_Bet.create = function create(properties) {
            return new HLJBP_Msg_Bet(properties);
        };

        /**
         * Encodes the specified HLJBP_Msg_Bet message. Does not implicitly {@link GameMsg_HLJBP.HLJBP_Msg_Bet.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_HLJBP.HLJBP_Msg_Bet
         * @static
         * @param {GameMsg_HLJBP.IHLJBP_Msg_Bet} message HLJBP_Msg_Bet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HLJBP_Msg_Bet.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int64(message.Bet);
            return writer;
        };

        /**
         * Encodes the specified HLJBP_Msg_Bet message, length delimited. Does not implicitly {@link GameMsg_HLJBP.HLJBP_Msg_Bet.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_HLJBP.HLJBP_Msg_Bet
         * @static
         * @param {GameMsg_HLJBP.IHLJBP_Msg_Bet} message HLJBP_Msg_Bet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HLJBP_Msg_Bet.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a HLJBP_Msg_Bet message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_HLJBP.HLJBP_Msg_Bet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_HLJBP.HLJBP_Msg_Bet} HLJBP_Msg_Bet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HLJBP_Msg_Bet.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_HLJBP.HLJBP_Msg_Bet();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Bet = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("Bet"))
                throw $util.ProtocolError("missing required 'Bet'", { instance: message });
            return message;
        };

        /**
         * Decodes a HLJBP_Msg_Bet message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_HLJBP.HLJBP_Msg_Bet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_HLJBP.HLJBP_Msg_Bet} HLJBP_Msg_Bet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HLJBP_Msg_Bet.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a HLJBP_Msg_Bet message.
         * @function verify
         * @memberof GameMsg_HLJBP.HLJBP_Msg_Bet
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        HLJBP_Msg_Bet.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.Bet) && !(message.Bet && $util.isInteger(message.Bet.low) && $util.isInteger(message.Bet.high)))
                return "Bet: integer|Long expected";
            return null;
        };

        /**
         * Creates a HLJBP_Msg_Bet message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_HLJBP.HLJBP_Msg_Bet
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_HLJBP.HLJBP_Msg_Bet} HLJBP_Msg_Bet
         */
        HLJBP_Msg_Bet.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_HLJBP.HLJBP_Msg_Bet)
                return object;
            var message = new $root.GameMsg_HLJBP.HLJBP_Msg_Bet();
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
         * Creates a plain object from a HLJBP_Msg_Bet message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_HLJBP.HLJBP_Msg_Bet
         * @static
         * @param {GameMsg_HLJBP.HLJBP_Msg_Bet} message HLJBP_Msg_Bet
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        HLJBP_Msg_Bet.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.Bet = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.Bet = options.longs === String ? "0" : 0;
            if (message.Bet != null && message.hasOwnProperty("Bet"))
                if (typeof message.Bet === "number")
                    object.Bet = options.longs === String ? String(message.Bet) : message.Bet;
                else
                    object.Bet = options.longs === String ? $util.Long.prototype.toString.call(message.Bet) : options.longs === Number ? new $util.LongBits(message.Bet.low >>> 0, message.Bet.high >>> 0).toNumber() : message.Bet;
            return object;
        };

        /**
         * Converts this HLJBP_Msg_Bet to JSON.
         * @function toJSON
         * @memberof GameMsg_HLJBP.HLJBP_Msg_Bet
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        HLJBP_Msg_Bet.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return HLJBP_Msg_Bet;
    })();

    GameMsg_HLJBP.HLJBP_Msg_BetResult = (function() {

        /**
         * Properties of a HLJBP_Msg_BetResult.
         * @memberof GameMsg_HLJBP
         * @interface IHLJBP_Msg_BetResult
         * @property {number} SeatNo HLJBP_Msg_BetResult SeatNo
         * @property {number|Long} Bet HLJBP_Msg_BetResult Bet
         * @property {number|Long} MoneyRemain HLJBP_Msg_BetResult MoneyRemain
         * @property {number} Result HLJBP_Msg_BetResult Result
         */

        /**
         * Constructs a new HLJBP_Msg_BetResult.
         * @memberof GameMsg_HLJBP
         * @classdesc Represents a HLJBP_Msg_BetResult.
         * @implements IHLJBP_Msg_BetResult
         * @constructor
         * @param {GameMsg_HLJBP.IHLJBP_Msg_BetResult=} [properties] Properties to set
         */
        function HLJBP_Msg_BetResult(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * HLJBP_Msg_BetResult SeatNo.
         * @member {number} SeatNo
         * @memberof GameMsg_HLJBP.HLJBP_Msg_BetResult
         * @instance
         */
        HLJBP_Msg_BetResult.prototype.SeatNo = 0;

        /**
         * HLJBP_Msg_BetResult Bet.
         * @member {number|Long} Bet
         * @memberof GameMsg_HLJBP.HLJBP_Msg_BetResult
         * @instance
         */
        HLJBP_Msg_BetResult.prototype.Bet = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * HLJBP_Msg_BetResult MoneyRemain.
         * @member {number|Long} MoneyRemain
         * @memberof GameMsg_HLJBP.HLJBP_Msg_BetResult
         * @instance
         */
        HLJBP_Msg_BetResult.prototype.MoneyRemain = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * HLJBP_Msg_BetResult Result.
         * @member {number} Result
         * @memberof GameMsg_HLJBP.HLJBP_Msg_BetResult
         * @instance
         */
        HLJBP_Msg_BetResult.prototype.Result = 0;

        /**
         * Creates a new HLJBP_Msg_BetResult instance using the specified properties.
         * @function create
         * @memberof GameMsg_HLJBP.HLJBP_Msg_BetResult
         * @static
         * @param {GameMsg_HLJBP.IHLJBP_Msg_BetResult=} [properties] Properties to set
         * @returns {GameMsg_HLJBP.HLJBP_Msg_BetResult} HLJBP_Msg_BetResult instance
         */
        HLJBP_Msg_BetResult.create = function create(properties) {
            return new HLJBP_Msg_BetResult(properties);
        };

        /**
         * Encodes the specified HLJBP_Msg_BetResult message. Does not implicitly {@link GameMsg_HLJBP.HLJBP_Msg_BetResult.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_HLJBP.HLJBP_Msg_BetResult
         * @static
         * @param {GameMsg_HLJBP.IHLJBP_Msg_BetResult} message HLJBP_Msg_BetResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HLJBP_Msg_BetResult.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.SeatNo);
            writer.uint32(/* id 2, wireType 0 =*/16).int64(message.Bet);
            writer.uint32(/* id 3, wireType 0 =*/24).int64(message.MoneyRemain);
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.Result);
            return writer;
        };

        /**
         * Encodes the specified HLJBP_Msg_BetResult message, length delimited. Does not implicitly {@link GameMsg_HLJBP.HLJBP_Msg_BetResult.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_HLJBP.HLJBP_Msg_BetResult
         * @static
         * @param {GameMsg_HLJBP.IHLJBP_Msg_BetResult} message HLJBP_Msg_BetResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HLJBP_Msg_BetResult.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a HLJBP_Msg_BetResult message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_HLJBP.HLJBP_Msg_BetResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_HLJBP.HLJBP_Msg_BetResult} HLJBP_Msg_BetResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HLJBP_Msg_BetResult.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_HLJBP.HLJBP_Msg_BetResult();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.SeatNo = reader.int32();
                    break;
                case 2:
                    message.Bet = reader.int64();
                    break;
                case 3:
                    message.MoneyRemain = reader.int64();
                    break;
                case 4:
                    message.Result = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("SeatNo"))
                throw $util.ProtocolError("missing required 'SeatNo'", { instance: message });
            if (!message.hasOwnProperty("Bet"))
                throw $util.ProtocolError("missing required 'Bet'", { instance: message });
            if (!message.hasOwnProperty("MoneyRemain"))
                throw $util.ProtocolError("missing required 'MoneyRemain'", { instance: message });
            if (!message.hasOwnProperty("Result"))
                throw $util.ProtocolError("missing required 'Result'", { instance: message });
            return message;
        };

        /**
         * Decodes a HLJBP_Msg_BetResult message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_HLJBP.HLJBP_Msg_BetResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_HLJBP.HLJBP_Msg_BetResult} HLJBP_Msg_BetResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HLJBP_Msg_BetResult.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a HLJBP_Msg_BetResult message.
         * @function verify
         * @memberof GameMsg_HLJBP.HLJBP_Msg_BetResult
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        HLJBP_Msg_BetResult.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.SeatNo))
                return "SeatNo: integer expected";
            if (!$util.isInteger(message.Bet) && !(message.Bet && $util.isInteger(message.Bet.low) && $util.isInteger(message.Bet.high)))
                return "Bet: integer|Long expected";
            if (!$util.isInteger(message.MoneyRemain) && !(message.MoneyRemain && $util.isInteger(message.MoneyRemain.low) && $util.isInteger(message.MoneyRemain.high)))
                return "MoneyRemain: integer|Long expected";
            if (!$util.isInteger(message.Result))
                return "Result: integer expected";
            return null;
        };

        /**
         * Creates a HLJBP_Msg_BetResult message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_HLJBP.HLJBP_Msg_BetResult
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_HLJBP.HLJBP_Msg_BetResult} HLJBP_Msg_BetResult
         */
        HLJBP_Msg_BetResult.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_HLJBP.HLJBP_Msg_BetResult)
                return object;
            var message = new $root.GameMsg_HLJBP.HLJBP_Msg_BetResult();
            if (object.SeatNo != null)
                message.SeatNo = object.SeatNo | 0;
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
         * Creates a plain object from a HLJBP_Msg_BetResult message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_HLJBP.HLJBP_Msg_BetResult
         * @static
         * @param {GameMsg_HLJBP.HLJBP_Msg_BetResult} message HLJBP_Msg_BetResult
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        HLJBP_Msg_BetResult.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.SeatNo = 0;
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
         * Converts this HLJBP_Msg_BetResult to JSON.
         * @function toJSON
         * @memberof GameMsg_HLJBP.HLJBP_Msg_BetResult
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        HLJBP_Msg_BetResult.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return HLJBP_Msg_BetResult;
    })();

    GameMsg_HLJBP.HLJBP_Msg_Settlement = (function() {

        /**
         * Properties of a HLJBP_Msg_Settlement.
         * @memberof GameMsg_HLJBP
         * @interface IHLJBP_Msg_Settlement
         * @property {boolean} IsSettlement HLJBP_Msg_Settlement IsSettlement
         * @property {number} LuckyNumber HLJBP_Msg_Settlement LuckyNumber
         * @property {Array.<GameMsg_HLJBP.IHLJBP_Msg_UserInfo>|null} [UserInfo] HLJBP_Msg_Settlement UserInfo
         * @property {string} ActionName HLJBP_Msg_Settlement ActionName
         */

        /**
         * Constructs a new HLJBP_Msg_Settlement.
         * @memberof GameMsg_HLJBP
         * @classdesc Represents a HLJBP_Msg_Settlement.
         * @implements IHLJBP_Msg_Settlement
         * @constructor
         * @param {GameMsg_HLJBP.IHLJBP_Msg_Settlement=} [properties] Properties to set
         */
        function HLJBP_Msg_Settlement(properties) {
            this.UserInfo = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * HLJBP_Msg_Settlement IsSettlement.
         * @member {boolean} IsSettlement
         * @memberof GameMsg_HLJBP.HLJBP_Msg_Settlement
         * @instance
         */
        HLJBP_Msg_Settlement.prototype.IsSettlement = false;

        /**
         * HLJBP_Msg_Settlement LuckyNumber.
         * @member {number} LuckyNumber
         * @memberof GameMsg_HLJBP.HLJBP_Msg_Settlement
         * @instance
         */
        HLJBP_Msg_Settlement.prototype.LuckyNumber = 0;

        /**
         * HLJBP_Msg_Settlement UserInfo.
         * @member {Array.<GameMsg_HLJBP.IHLJBP_Msg_UserInfo>} UserInfo
         * @memberof GameMsg_HLJBP.HLJBP_Msg_Settlement
         * @instance
         */
        HLJBP_Msg_Settlement.prototype.UserInfo = $util.emptyArray;

        /**
         * HLJBP_Msg_Settlement ActionName.
         * @member {string} ActionName
         * @memberof GameMsg_HLJBP.HLJBP_Msg_Settlement
         * @instance
         */
        HLJBP_Msg_Settlement.prototype.ActionName = "";

        /**
         * Creates a new HLJBP_Msg_Settlement instance using the specified properties.
         * @function create
         * @memberof GameMsg_HLJBP.HLJBP_Msg_Settlement
         * @static
         * @param {GameMsg_HLJBP.IHLJBP_Msg_Settlement=} [properties] Properties to set
         * @returns {GameMsg_HLJBP.HLJBP_Msg_Settlement} HLJBP_Msg_Settlement instance
         */
        HLJBP_Msg_Settlement.create = function create(properties) {
            return new HLJBP_Msg_Settlement(properties);
        };

        /**
         * Encodes the specified HLJBP_Msg_Settlement message. Does not implicitly {@link GameMsg_HLJBP.HLJBP_Msg_Settlement.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_HLJBP.HLJBP_Msg_Settlement
         * @static
         * @param {GameMsg_HLJBP.IHLJBP_Msg_Settlement} message HLJBP_Msg_Settlement message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HLJBP_Msg_Settlement.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).bool(message.IsSettlement);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.LuckyNumber);
            if (message.UserInfo != null && message.UserInfo.length)
                for (var i = 0; i < message.UserInfo.length; ++i)
                    $root.GameMsg_HLJBP.HLJBP_Msg_UserInfo.encode(message.UserInfo[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            writer.uint32(/* id 4, wireType 2 =*/34).string(message.ActionName);
            return writer;
        };

        /**
         * Encodes the specified HLJBP_Msg_Settlement message, length delimited. Does not implicitly {@link GameMsg_HLJBP.HLJBP_Msg_Settlement.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_HLJBP.HLJBP_Msg_Settlement
         * @static
         * @param {GameMsg_HLJBP.IHLJBP_Msg_Settlement} message HLJBP_Msg_Settlement message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HLJBP_Msg_Settlement.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a HLJBP_Msg_Settlement message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_HLJBP.HLJBP_Msg_Settlement
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_HLJBP.HLJBP_Msg_Settlement} HLJBP_Msg_Settlement
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HLJBP_Msg_Settlement.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_HLJBP.HLJBP_Msg_Settlement();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.IsSettlement = reader.bool();
                    break;
                case 2:
                    message.LuckyNumber = reader.int32();
                    break;
                case 3:
                    if (!(message.UserInfo && message.UserInfo.length))
                        message.UserInfo = [];
                    message.UserInfo.push($root.GameMsg_HLJBP.HLJBP_Msg_UserInfo.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.ActionName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("IsSettlement"))
                throw $util.ProtocolError("missing required 'IsSettlement'", { instance: message });
            if (!message.hasOwnProperty("LuckyNumber"))
                throw $util.ProtocolError("missing required 'LuckyNumber'", { instance: message });
            if (!message.hasOwnProperty("ActionName"))
                throw $util.ProtocolError("missing required 'ActionName'", { instance: message });
            return message;
        };

        /**
         * Decodes a HLJBP_Msg_Settlement message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_HLJBP.HLJBP_Msg_Settlement
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_HLJBP.HLJBP_Msg_Settlement} HLJBP_Msg_Settlement
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HLJBP_Msg_Settlement.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a HLJBP_Msg_Settlement message.
         * @function verify
         * @memberof GameMsg_HLJBP.HLJBP_Msg_Settlement
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        HLJBP_Msg_Settlement.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (typeof message.IsSettlement !== "boolean")
                return "IsSettlement: boolean expected";
            if (!$util.isInteger(message.LuckyNumber))
                return "LuckyNumber: integer expected";
            if (message.UserInfo != null && message.hasOwnProperty("UserInfo")) {
                if (!Array.isArray(message.UserInfo))
                    return "UserInfo: array expected";
                for (var i = 0; i < message.UserInfo.length; ++i) {
                    var error = $root.GameMsg_HLJBP.HLJBP_Msg_UserInfo.verify(message.UserInfo[i]);
                    if (error)
                        return "UserInfo." + error;
                }
            }
            if (!$util.isString(message.ActionName))
                return "ActionName: string expected";
            return null;
        };

        /**
         * Creates a HLJBP_Msg_Settlement message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_HLJBP.HLJBP_Msg_Settlement
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_HLJBP.HLJBP_Msg_Settlement} HLJBP_Msg_Settlement
         */
        HLJBP_Msg_Settlement.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_HLJBP.HLJBP_Msg_Settlement)
                return object;
            var message = new $root.GameMsg_HLJBP.HLJBP_Msg_Settlement();
            if (object.IsSettlement != null)
                message.IsSettlement = Boolean(object.IsSettlement);
            if (object.LuckyNumber != null)
                message.LuckyNumber = object.LuckyNumber | 0;
            if (object.UserInfo) {
                if (!Array.isArray(object.UserInfo))
                    throw TypeError(".GameMsg_HLJBP.HLJBP_Msg_Settlement.UserInfo: array expected");
                message.UserInfo = [];
                for (var i = 0; i < object.UserInfo.length; ++i) {
                    if (typeof object.UserInfo[i] !== "object")
                        throw TypeError(".GameMsg_HLJBP.HLJBP_Msg_Settlement.UserInfo: object expected");
                    message.UserInfo[i] = $root.GameMsg_HLJBP.HLJBP_Msg_UserInfo.fromObject(object.UserInfo[i]);
                }
            }
            if (object.ActionName != null)
                message.ActionName = String(object.ActionName);
            return message;
        };

        /**
         * Creates a plain object from a HLJBP_Msg_Settlement message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_HLJBP.HLJBP_Msg_Settlement
         * @static
         * @param {GameMsg_HLJBP.HLJBP_Msg_Settlement} message HLJBP_Msg_Settlement
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        HLJBP_Msg_Settlement.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.UserInfo = [];
            if (options.defaults) {
                object.IsSettlement = false;
                object.LuckyNumber = 0;
                object.ActionName = "";
            }
            if (message.IsSettlement != null && message.hasOwnProperty("IsSettlement"))
                object.IsSettlement = message.IsSettlement;
            if (message.LuckyNumber != null && message.hasOwnProperty("LuckyNumber"))
                object.LuckyNumber = message.LuckyNumber;
            if (message.UserInfo && message.UserInfo.length) {
                object.UserInfo = [];
                for (var j = 0; j < message.UserInfo.length; ++j)
                    object.UserInfo[j] = $root.GameMsg_HLJBP.HLJBP_Msg_UserInfo.toObject(message.UserInfo[j], options);
            }
            if (message.ActionName != null && message.hasOwnProperty("ActionName"))
                object.ActionName = message.ActionName;
            return object;
        };

        /**
         * Converts this HLJBP_Msg_Settlement to JSON.
         * @function toJSON
         * @memberof GameMsg_HLJBP.HLJBP_Msg_Settlement
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        HLJBP_Msg_Settlement.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return HLJBP_Msg_Settlement;
    })();

    GameMsg_HLJBP.HLJBP_Msg_KickTip = (function() {

        /**
         * Properties of a HLJBP_Msg_KickTip.
         * @memberof GameMsg_HLJBP
         * @interface IHLJBP_Msg_KickTip
         * @property {number} Round HLJBP_Msg_KickTip Round
         */

        /**
         * Constructs a new HLJBP_Msg_KickTip.
         * @memberof GameMsg_HLJBP
         * @classdesc Represents a HLJBP_Msg_KickTip.
         * @implements IHLJBP_Msg_KickTip
         * @constructor
         * @param {GameMsg_HLJBP.IHLJBP_Msg_KickTip=} [properties] Properties to set
         */
        function HLJBP_Msg_KickTip(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * HLJBP_Msg_KickTip Round.
         * @member {number} Round
         * @memberof GameMsg_HLJBP.HLJBP_Msg_KickTip
         * @instance
         */
        HLJBP_Msg_KickTip.prototype.Round = 0;

        /**
         * Creates a new HLJBP_Msg_KickTip instance using the specified properties.
         * @function create
         * @memberof GameMsg_HLJBP.HLJBP_Msg_KickTip
         * @static
         * @param {GameMsg_HLJBP.IHLJBP_Msg_KickTip=} [properties] Properties to set
         * @returns {GameMsg_HLJBP.HLJBP_Msg_KickTip} HLJBP_Msg_KickTip instance
         */
        HLJBP_Msg_KickTip.create = function create(properties) {
            return new HLJBP_Msg_KickTip(properties);
        };

        /**
         * Encodes the specified HLJBP_Msg_KickTip message. Does not implicitly {@link GameMsg_HLJBP.HLJBP_Msg_KickTip.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_HLJBP.HLJBP_Msg_KickTip
         * @static
         * @param {GameMsg_HLJBP.IHLJBP_Msg_KickTip} message HLJBP_Msg_KickTip message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HLJBP_Msg_KickTip.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.Round);
            return writer;
        };

        /**
         * Encodes the specified HLJBP_Msg_KickTip message, length delimited. Does not implicitly {@link GameMsg_HLJBP.HLJBP_Msg_KickTip.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_HLJBP.HLJBP_Msg_KickTip
         * @static
         * @param {GameMsg_HLJBP.IHLJBP_Msg_KickTip} message HLJBP_Msg_KickTip message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HLJBP_Msg_KickTip.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a HLJBP_Msg_KickTip message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_HLJBP.HLJBP_Msg_KickTip
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_HLJBP.HLJBP_Msg_KickTip} HLJBP_Msg_KickTip
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HLJBP_Msg_KickTip.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_HLJBP.HLJBP_Msg_KickTip();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Round = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("Round"))
                throw $util.ProtocolError("missing required 'Round'", { instance: message });
            return message;
        };

        /**
         * Decodes a HLJBP_Msg_KickTip message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_HLJBP.HLJBP_Msg_KickTip
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_HLJBP.HLJBP_Msg_KickTip} HLJBP_Msg_KickTip
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HLJBP_Msg_KickTip.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a HLJBP_Msg_KickTip message.
         * @function verify
         * @memberof GameMsg_HLJBP.HLJBP_Msg_KickTip
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        HLJBP_Msg_KickTip.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.Round))
                return "Round: integer expected";
            return null;
        };

        /**
         * Creates a HLJBP_Msg_KickTip message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_HLJBP.HLJBP_Msg_KickTip
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_HLJBP.HLJBP_Msg_KickTip} HLJBP_Msg_KickTip
         */
        HLJBP_Msg_KickTip.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_HLJBP.HLJBP_Msg_KickTip)
                return object;
            var message = new $root.GameMsg_HLJBP.HLJBP_Msg_KickTip();
            if (object.Round != null)
                message.Round = object.Round | 0;
            return message;
        };

        /**
         * Creates a plain object from a HLJBP_Msg_KickTip message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_HLJBP.HLJBP_Msg_KickTip
         * @static
         * @param {GameMsg_HLJBP.HLJBP_Msg_KickTip} message HLJBP_Msg_KickTip
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        HLJBP_Msg_KickTip.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.Round = 0;
            if (message.Round != null && message.hasOwnProperty("Round"))
                object.Round = message.Round;
            return object;
        };

        /**
         * Converts this HLJBP_Msg_KickTip to JSON.
         * @function toJSON
         * @memberof GameMsg_HLJBP.HLJBP_Msg_KickTip
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        HLJBP_Msg_KickTip.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return HLJBP_Msg_KickTip;
    })();

    GameMsg_HLJBP.HLJBP_Msg_UserActionCommited = (function() {

        /**
         * Properties of a HLJBP_Msg_UserActionCommited.
         * @memberof GameMsg_HLJBP
         * @interface IHLJBP_Msg_UserActionCommited
         * @property {string} ActionName HLJBP_Msg_UserActionCommited ActionName
         */

        /**
         * Constructs a new HLJBP_Msg_UserActionCommited.
         * @memberof GameMsg_HLJBP
         * @classdesc Represents a HLJBP_Msg_UserActionCommited.
         * @implements IHLJBP_Msg_UserActionCommited
         * @constructor
         * @param {GameMsg_HLJBP.IHLJBP_Msg_UserActionCommited=} [properties] Properties to set
         */
        function HLJBP_Msg_UserActionCommited(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * HLJBP_Msg_UserActionCommited ActionName.
         * @member {string} ActionName
         * @memberof GameMsg_HLJBP.HLJBP_Msg_UserActionCommited
         * @instance
         */
        HLJBP_Msg_UserActionCommited.prototype.ActionName = "";

        /**
         * Creates a new HLJBP_Msg_UserActionCommited instance using the specified properties.
         * @function create
         * @memberof GameMsg_HLJBP.HLJBP_Msg_UserActionCommited
         * @static
         * @param {GameMsg_HLJBP.IHLJBP_Msg_UserActionCommited=} [properties] Properties to set
         * @returns {GameMsg_HLJBP.HLJBP_Msg_UserActionCommited} HLJBP_Msg_UserActionCommited instance
         */
        HLJBP_Msg_UserActionCommited.create = function create(properties) {
            return new HLJBP_Msg_UserActionCommited(properties);
        };

        /**
         * Encodes the specified HLJBP_Msg_UserActionCommited message. Does not implicitly {@link GameMsg_HLJBP.HLJBP_Msg_UserActionCommited.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_HLJBP.HLJBP_Msg_UserActionCommited
         * @static
         * @param {GameMsg_HLJBP.IHLJBP_Msg_UserActionCommited} message HLJBP_Msg_UserActionCommited message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HLJBP_Msg_UserActionCommited.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.ActionName);
            return writer;
        };

        /**
         * Encodes the specified HLJBP_Msg_UserActionCommited message, length delimited. Does not implicitly {@link GameMsg_HLJBP.HLJBP_Msg_UserActionCommited.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_HLJBP.HLJBP_Msg_UserActionCommited
         * @static
         * @param {GameMsg_HLJBP.IHLJBP_Msg_UserActionCommited} message HLJBP_Msg_UserActionCommited message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HLJBP_Msg_UserActionCommited.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a HLJBP_Msg_UserActionCommited message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_HLJBP.HLJBP_Msg_UserActionCommited
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_HLJBP.HLJBP_Msg_UserActionCommited} HLJBP_Msg_UserActionCommited
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HLJBP_Msg_UserActionCommited.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_HLJBP.HLJBP_Msg_UserActionCommited();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.ActionName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("ActionName"))
                throw $util.ProtocolError("missing required 'ActionName'", { instance: message });
            return message;
        };

        /**
         * Decodes a HLJBP_Msg_UserActionCommited message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_HLJBP.HLJBP_Msg_UserActionCommited
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_HLJBP.HLJBP_Msg_UserActionCommited} HLJBP_Msg_UserActionCommited
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HLJBP_Msg_UserActionCommited.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a HLJBP_Msg_UserActionCommited message.
         * @function verify
         * @memberof GameMsg_HLJBP.HLJBP_Msg_UserActionCommited
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        HLJBP_Msg_UserActionCommited.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.ActionName))
                return "ActionName: string expected";
            return null;
        };

        /**
         * Creates a HLJBP_Msg_UserActionCommited message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_HLJBP.HLJBP_Msg_UserActionCommited
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_HLJBP.HLJBP_Msg_UserActionCommited} HLJBP_Msg_UserActionCommited
         */
        HLJBP_Msg_UserActionCommited.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_HLJBP.HLJBP_Msg_UserActionCommited)
                return object;
            var message = new $root.GameMsg_HLJBP.HLJBP_Msg_UserActionCommited();
            if (object.ActionName != null)
                message.ActionName = String(object.ActionName);
            return message;
        };

        /**
         * Creates a plain object from a HLJBP_Msg_UserActionCommited message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_HLJBP.HLJBP_Msg_UserActionCommited
         * @static
         * @param {GameMsg_HLJBP.HLJBP_Msg_UserActionCommited} message HLJBP_Msg_UserActionCommited
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        HLJBP_Msg_UserActionCommited.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.ActionName = "";
            if (message.ActionName != null && message.hasOwnProperty("ActionName"))
                object.ActionName = message.ActionName;
            return object;
        };

        /**
         * Converts this HLJBP_Msg_UserActionCommited to JSON.
         * @function toJSON
         * @memberof GameMsg_HLJBP.HLJBP_Msg_UserActionCommited
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        HLJBP_Msg_UserActionCommited.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return HLJBP_Msg_UserActionCommited;
    })();

    return GameMsg_HLJBP;
})();

module.exports = $root;
