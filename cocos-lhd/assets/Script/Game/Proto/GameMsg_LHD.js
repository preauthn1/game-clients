/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

//var $protobuf = require("protobufjs/minimal");
var $protobuf = protobuf;

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.GameMsg_LHD = (function() {

    /**
     * Namespace GameMsg_LHD.
     * @exports GameMsg_LHD
     * @namespace
     */
    var GameMsg_LHD = {};

    GameMsg_LHD.LHD_Setting = (function() {

        /**
         * Properties of a LHD_Setting.
         * @memberof GameMsg_LHD
         * @interface ILHD_Setting
         * @property {Array.<number>|null} [BetCount] LHD_Setting BetCount
         * @property {number} BetMoney LHD_Setting BetMoney
         * @property {number|Long} ZhuangLimit LHD_Setting ZhuangLimit
         * @property {number|Long|null} [betlimitmoney] LHD_Setting betlimitmoney
         */

        /**
         * Constructs a new LHD_Setting.
         * @memberof GameMsg_LHD
         * @classdesc Represents a LHD_Setting.
         * @implements ILHD_Setting
         * @constructor
         * @param {GameMsg_LHD.ILHD_Setting=} [properties] Properties to set
         */
        function LHD_Setting(properties) {
            this.BetCount = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LHD_Setting BetCount.
         * @member {Array.<number>} BetCount
         * @memberof GameMsg_LHD.LHD_Setting
         * @instance
         */
        LHD_Setting.prototype.BetCount = $util.emptyArray;

        /**
         * LHD_Setting BetMoney.
         * @member {number} BetMoney
         * @memberof GameMsg_LHD.LHD_Setting
         * @instance
         */
        LHD_Setting.prototype.BetMoney = 0;

        /**
         * LHD_Setting ZhuangLimit.
         * @member {number|Long} ZhuangLimit
         * @memberof GameMsg_LHD.LHD_Setting
         * @instance
         */
        LHD_Setting.prototype.ZhuangLimit = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * LHD_Setting betlimitmoney.
         * @member {number|Long} betlimitmoney
         * @memberof GameMsg_LHD.LHD_Setting
         * @instance
         */
        LHD_Setting.prototype.betlimitmoney = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new LHD_Setting instance using the specified properties.
         * @function create
         * @memberof GameMsg_LHD.LHD_Setting
         * @static
         * @param {GameMsg_LHD.ILHD_Setting=} [properties] Properties to set
         * @returns {GameMsg_LHD.LHD_Setting} LHD_Setting instance
         */
        LHD_Setting.create = function create(properties) {
            return new LHD_Setting(properties);
        };

        /**
         * Encodes the specified LHD_Setting message. Does not implicitly {@link GameMsg_LHD.LHD_Setting.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_LHD.LHD_Setting
         * @static
         * @param {GameMsg_LHD.ILHD_Setting} message LHD_Setting message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LHD_Setting.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.BetCount != null && message.BetCount.length) {
                writer.uint32(/* id 1, wireType 2 =*/10).fork();
                for (var i = 0; i < message.BetCount.length; ++i)
                    writer.int32(message.BetCount[i]);
                writer.ldelim();
            }
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.BetMoney);
            writer.uint32(/* id 3, wireType 0 =*/24).int64(message.ZhuangLimit);
            if (message.betlimitmoney != null && message.hasOwnProperty("betlimitmoney"))
                writer.uint32(/* id 4, wireType 0 =*/32).int64(message.betlimitmoney);
            return writer;
        };

        /**
         * Encodes the specified LHD_Setting message, length delimited. Does not implicitly {@link GameMsg_LHD.LHD_Setting.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_LHD.LHD_Setting
         * @static
         * @param {GameMsg_LHD.ILHD_Setting} message LHD_Setting message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LHD_Setting.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LHD_Setting message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_LHD.LHD_Setting
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_LHD.LHD_Setting} LHD_Setting
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LHD_Setting.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_LHD.LHD_Setting();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.BetCount && message.BetCount.length))
                        message.BetCount = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.BetCount.push(reader.int32());
                    } else
                        message.BetCount.push(reader.int32());
                    break;
                case 2:
                    message.BetMoney = reader.int32();
                    break;
                case 3:
                    message.ZhuangLimit = reader.int64();
                    break;
                case 4:
                    message.betlimitmoney = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("BetMoney"))
                throw $util.ProtocolError("missing required 'BetMoney'", { instance: message });
            if (!message.hasOwnProperty("ZhuangLimit"))
                throw $util.ProtocolError("missing required 'ZhuangLimit'", { instance: message });
            return message;
        };

        /**
         * Decodes a LHD_Setting message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_LHD.LHD_Setting
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_LHD.LHD_Setting} LHD_Setting
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LHD_Setting.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LHD_Setting message.
         * @function verify
         * @memberof GameMsg_LHD.LHD_Setting
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LHD_Setting.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.BetCount != null && message.hasOwnProperty("BetCount")) {
                if (!Array.isArray(message.BetCount))
                    return "BetCount: array expected";
                for (var i = 0; i < message.BetCount.length; ++i)
                    if (!$util.isInteger(message.BetCount[i]))
                        return "BetCount: integer[] expected";
            }
            if (!$util.isInteger(message.BetMoney))
                return "BetMoney: integer expected";
            if (!$util.isInteger(message.ZhuangLimit) && !(message.ZhuangLimit && $util.isInteger(message.ZhuangLimit.low) && $util.isInteger(message.ZhuangLimit.high)))
                return "ZhuangLimit: integer|Long expected";
            if (message.betlimitmoney != null && message.hasOwnProperty("betlimitmoney"))
                if (!$util.isInteger(message.betlimitmoney) && !(message.betlimitmoney && $util.isInteger(message.betlimitmoney.low) && $util.isInteger(message.betlimitmoney.high)))
                    return "betlimitmoney: integer|Long expected";
            return null;
        };

        /**
         * Creates a LHD_Setting message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_LHD.LHD_Setting
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_LHD.LHD_Setting} LHD_Setting
         */
        LHD_Setting.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_LHD.LHD_Setting)
                return object;
            var message = new $root.GameMsg_LHD.LHD_Setting();
            if (object.BetCount) {
                if (!Array.isArray(object.BetCount))
                    throw TypeError(".GameMsg_LHD.LHD_Setting.BetCount: array expected");
                message.BetCount = [];
                for (var i = 0; i < object.BetCount.length; ++i)
                    message.BetCount[i] = object.BetCount[i] | 0;
            }
            if (object.BetMoney != null)
                message.BetMoney = object.BetMoney | 0;
            if (object.ZhuangLimit != null)
                if ($util.Long)
                    (message.ZhuangLimit = $util.Long.fromValue(object.ZhuangLimit)).unsigned = false;
                else if (typeof object.ZhuangLimit === "string")
                    message.ZhuangLimit = parseInt(object.ZhuangLimit, 10);
                else if (typeof object.ZhuangLimit === "number")
                    message.ZhuangLimit = object.ZhuangLimit;
                else if (typeof object.ZhuangLimit === "object")
                    message.ZhuangLimit = new $util.LongBits(object.ZhuangLimit.low >>> 0, object.ZhuangLimit.high >>> 0).toNumber();
            if (object.betlimitmoney != null)
                if ($util.Long)
                    (message.betlimitmoney = $util.Long.fromValue(object.betlimitmoney)).unsigned = false;
                else if (typeof object.betlimitmoney === "string")
                    message.betlimitmoney = parseInt(object.betlimitmoney, 10);
                else if (typeof object.betlimitmoney === "number")
                    message.betlimitmoney = object.betlimitmoney;
                else if (typeof object.betlimitmoney === "object")
                    message.betlimitmoney = new $util.LongBits(object.betlimitmoney.low >>> 0, object.betlimitmoney.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a LHD_Setting message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_LHD.LHD_Setting
         * @static
         * @param {GameMsg_LHD.LHD_Setting} message LHD_Setting
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LHD_Setting.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.BetCount = [];
            if (options.defaults) {
                object.BetMoney = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.ZhuangLimit = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.ZhuangLimit = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.betlimitmoney = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.betlimitmoney = options.longs === String ? "0" : 0;
            }
            if (message.BetCount && message.BetCount.length) {
                object.BetCount = [];
                for (var j = 0; j < message.BetCount.length; ++j)
                    object.BetCount[j] = message.BetCount[j];
            }
            if (message.BetMoney != null && message.hasOwnProperty("BetMoney"))
                object.BetMoney = message.BetMoney;
            if (message.ZhuangLimit != null && message.hasOwnProperty("ZhuangLimit"))
                if (typeof message.ZhuangLimit === "number")
                    object.ZhuangLimit = options.longs === String ? String(message.ZhuangLimit) : message.ZhuangLimit;
                else
                    object.ZhuangLimit = options.longs === String ? $util.Long.prototype.toString.call(message.ZhuangLimit) : options.longs === Number ? new $util.LongBits(message.ZhuangLimit.low >>> 0, message.ZhuangLimit.high >>> 0).toNumber() : message.ZhuangLimit;
            if (message.betlimitmoney != null && message.hasOwnProperty("betlimitmoney"))
                if (typeof message.betlimitmoney === "number")
                    object.betlimitmoney = options.longs === String ? String(message.betlimitmoney) : message.betlimitmoney;
                else
                    object.betlimitmoney = options.longs === String ? $util.Long.prototype.toString.call(message.betlimitmoney) : options.longs === Number ? new $util.LongBits(message.betlimitmoney.low >>> 0, message.betlimitmoney.high >>> 0).toNumber() : message.betlimitmoney;
            return object;
        };

        /**
         * Converts this LHD_Setting to JSON.
         * @function toJSON
         * @memberof GameMsg_LHD.LHD_Setting
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LHD_Setting.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return LHD_Setting;
    })();

    GameMsg_LHD.LHD_Sate = (function() {

        /**
         * Properties of a LHD_Sate.
         * @memberof GameMsg_LHD
         * @interface ILHD_Sate
         * @property {number} State LHD_Sate State
         * @property {number} Time LHD_Sate Time
         */

        /**
         * Constructs a new LHD_Sate.
         * @memberof GameMsg_LHD
         * @classdesc Represents a LHD_Sate.
         * @implements ILHD_Sate
         * @constructor
         * @param {GameMsg_LHD.ILHD_Sate=} [properties] Properties to set
         */
        function LHD_Sate(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LHD_Sate State.
         * @member {number} State
         * @memberof GameMsg_LHD.LHD_Sate
         * @instance
         */
        LHD_Sate.prototype.State = 0;

        /**
         * LHD_Sate Time.
         * @member {number} Time
         * @memberof GameMsg_LHD.LHD_Sate
         * @instance
         */
        LHD_Sate.prototype.Time = 0;

        /**
         * Creates a new LHD_Sate instance using the specified properties.
         * @function create
         * @memberof GameMsg_LHD.LHD_Sate
         * @static
         * @param {GameMsg_LHD.ILHD_Sate=} [properties] Properties to set
         * @returns {GameMsg_LHD.LHD_Sate} LHD_Sate instance
         */
        LHD_Sate.create = function create(properties) {
            return new LHD_Sate(properties);
        };

        /**
         * Encodes the specified LHD_Sate message. Does not implicitly {@link GameMsg_LHD.LHD_Sate.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_LHD.LHD_Sate
         * @static
         * @param {GameMsg_LHD.ILHD_Sate} message LHD_Sate message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LHD_Sate.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.State);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.Time);
            return writer;
        };

        /**
         * Encodes the specified LHD_Sate message, length delimited. Does not implicitly {@link GameMsg_LHD.LHD_Sate.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_LHD.LHD_Sate
         * @static
         * @param {GameMsg_LHD.ILHD_Sate} message LHD_Sate message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LHD_Sate.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LHD_Sate message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_LHD.LHD_Sate
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_LHD.LHD_Sate} LHD_Sate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LHD_Sate.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_LHD.LHD_Sate();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.State = reader.int32();
                    break;
                case 2:
                    message.Time = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("State"))
                throw $util.ProtocolError("missing required 'State'", { instance: message });
            if (!message.hasOwnProperty("Time"))
                throw $util.ProtocolError("missing required 'Time'", { instance: message });
            return message;
        };

        /**
         * Decodes a LHD_Sate message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_LHD.LHD_Sate
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_LHD.LHD_Sate} LHD_Sate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LHD_Sate.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LHD_Sate message.
         * @function verify
         * @memberof GameMsg_LHD.LHD_Sate
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LHD_Sate.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.State))
                return "State: integer expected";
            if (!$util.isInteger(message.Time))
                return "Time: integer expected";
            return null;
        };

        /**
         * Creates a LHD_Sate message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_LHD.LHD_Sate
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_LHD.LHD_Sate} LHD_Sate
         */
        LHD_Sate.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_LHD.LHD_Sate)
                return object;
            var message = new $root.GameMsg_LHD.LHD_Sate();
            if (object.State != null)
                message.State = object.State | 0;
            if (object.Time != null)
                message.Time = object.Time | 0;
            return message;
        };

        /**
         * Creates a plain object from a LHD_Sate message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_LHD.LHD_Sate
         * @static
         * @param {GameMsg_LHD.LHD_Sate} message LHD_Sate
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LHD_Sate.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.State = 0;
                object.Time = 0;
            }
            if (message.State != null && message.hasOwnProperty("State"))
                object.State = message.State;
            if (message.Time != null && message.hasOwnProperty("Time"))
                object.Time = message.Time;
            return object;
        };

        /**
         * Converts this LHD_Sate to JSON.
         * @function toJSON
         * @memberof GameMsg_LHD.LHD_Sate
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LHD_Sate.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return LHD_Sate;
    })();

    GameMsg_LHD.LHD_UserBetInfo = (function() {

        /**
         * Properties of a LHD_UserBetInfo.
         * @memberof GameMsg_LHD
         * @interface ILHD_UserBetInfo
         * @property {number|Long} UserMoney LHD_UserBetInfo UserMoney
         * @property {Array.<GameMsg_LHD.ILHD_BroadCastBet>|null} [BetInfo] LHD_UserBetInfo BetInfo
         */

        /**
         * Constructs a new LHD_UserBetInfo.
         * @memberof GameMsg_LHD
         * @classdesc Represents a LHD_UserBetInfo.
         * @implements ILHD_UserBetInfo
         * @constructor
         * @param {GameMsg_LHD.ILHD_UserBetInfo=} [properties] Properties to set
         */
        function LHD_UserBetInfo(properties) {
            this.BetInfo = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LHD_UserBetInfo UserMoney.
         * @member {number|Long} UserMoney
         * @memberof GameMsg_LHD.LHD_UserBetInfo
         * @instance
         */
        LHD_UserBetInfo.prototype.UserMoney = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * LHD_UserBetInfo BetInfo.
         * @member {Array.<GameMsg_LHD.ILHD_BroadCastBet>} BetInfo
         * @memberof GameMsg_LHD.LHD_UserBetInfo
         * @instance
         */
        LHD_UserBetInfo.prototype.BetInfo = $util.emptyArray;

        /**
         * Creates a new LHD_UserBetInfo instance using the specified properties.
         * @function create
         * @memberof GameMsg_LHD.LHD_UserBetInfo
         * @static
         * @param {GameMsg_LHD.ILHD_UserBetInfo=} [properties] Properties to set
         * @returns {GameMsg_LHD.LHD_UserBetInfo} LHD_UserBetInfo instance
         */
        LHD_UserBetInfo.create = function create(properties) {
            return new LHD_UserBetInfo(properties);
        };

        /**
         * Encodes the specified LHD_UserBetInfo message. Does not implicitly {@link GameMsg_LHD.LHD_UserBetInfo.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_LHD.LHD_UserBetInfo
         * @static
         * @param {GameMsg_LHD.ILHD_UserBetInfo} message LHD_UserBetInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LHD_UserBetInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int64(message.UserMoney);
            if (message.BetInfo != null && message.BetInfo.length)
                for (var i = 0; i < message.BetInfo.length; ++i)
                    $root.GameMsg_LHD.LHD_BroadCastBet.encode(message.BetInfo[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified LHD_UserBetInfo message, length delimited. Does not implicitly {@link GameMsg_LHD.LHD_UserBetInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_LHD.LHD_UserBetInfo
         * @static
         * @param {GameMsg_LHD.ILHD_UserBetInfo} message LHD_UserBetInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LHD_UserBetInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LHD_UserBetInfo message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_LHD.LHD_UserBetInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_LHD.LHD_UserBetInfo} LHD_UserBetInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LHD_UserBetInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_LHD.LHD_UserBetInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.UserMoney = reader.int64();
                    break;
                case 2:
                    if (!(message.BetInfo && message.BetInfo.length))
                        message.BetInfo = [];
                    message.BetInfo.push($root.GameMsg_LHD.LHD_BroadCastBet.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("UserMoney"))
                throw $util.ProtocolError("missing required 'UserMoney'", { instance: message });
            return message;
        };

        /**
         * Decodes a LHD_UserBetInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_LHD.LHD_UserBetInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_LHD.LHD_UserBetInfo} LHD_UserBetInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LHD_UserBetInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LHD_UserBetInfo message.
         * @function verify
         * @memberof GameMsg_LHD.LHD_UserBetInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LHD_UserBetInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.UserMoney) && !(message.UserMoney && $util.isInteger(message.UserMoney.low) && $util.isInteger(message.UserMoney.high)))
                return "UserMoney: integer|Long expected";
            if (message.BetInfo != null && message.hasOwnProperty("BetInfo")) {
                if (!Array.isArray(message.BetInfo))
                    return "BetInfo: array expected";
                for (var i = 0; i < message.BetInfo.length; ++i) {
                    var error = $root.GameMsg_LHD.LHD_BroadCastBet.verify(message.BetInfo[i]);
                    if (error)
                        return "BetInfo." + error;
                }
            }
            return null;
        };

        /**
         * Creates a LHD_UserBetInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_LHD.LHD_UserBetInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_LHD.LHD_UserBetInfo} LHD_UserBetInfo
         */
        LHD_UserBetInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_LHD.LHD_UserBetInfo)
                return object;
            var message = new $root.GameMsg_LHD.LHD_UserBetInfo();
            if (object.UserMoney != null)
                if ($util.Long)
                    (message.UserMoney = $util.Long.fromValue(object.UserMoney)).unsigned = false;
                else if (typeof object.UserMoney === "string")
                    message.UserMoney = parseInt(object.UserMoney, 10);
                else if (typeof object.UserMoney === "number")
                    message.UserMoney = object.UserMoney;
                else if (typeof object.UserMoney === "object")
                    message.UserMoney = new $util.LongBits(object.UserMoney.low >>> 0, object.UserMoney.high >>> 0).toNumber();
            if (object.BetInfo) {
                if (!Array.isArray(object.BetInfo))
                    throw TypeError(".GameMsg_LHD.LHD_UserBetInfo.BetInfo: array expected");
                message.BetInfo = [];
                for (var i = 0; i < object.BetInfo.length; ++i) {
                    if (typeof object.BetInfo[i] !== "object")
                        throw TypeError(".GameMsg_LHD.LHD_UserBetInfo.BetInfo: object expected");
                    message.BetInfo[i] = $root.GameMsg_LHD.LHD_BroadCastBet.fromObject(object.BetInfo[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a LHD_UserBetInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_LHD.LHD_UserBetInfo
         * @static
         * @param {GameMsg_LHD.LHD_UserBetInfo} message LHD_UserBetInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LHD_UserBetInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.BetInfo = [];
            if (options.defaults)
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.UserMoney = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.UserMoney = options.longs === String ? "0" : 0;
            if (message.UserMoney != null && message.hasOwnProperty("UserMoney"))
                if (typeof message.UserMoney === "number")
                    object.UserMoney = options.longs === String ? String(message.UserMoney) : message.UserMoney;
                else
                    object.UserMoney = options.longs === String ? $util.Long.prototype.toString.call(message.UserMoney) : options.longs === Number ? new $util.LongBits(message.UserMoney.low >>> 0, message.UserMoney.high >>> 0).toNumber() : message.UserMoney;
            if (message.BetInfo && message.BetInfo.length) {
                object.BetInfo = [];
                for (var j = 0; j < message.BetInfo.length; ++j)
                    object.BetInfo[j] = $root.GameMsg_LHD.LHD_BroadCastBet.toObject(message.BetInfo[j], options);
            }
            return object;
        };

        /**
         * Converts this LHD_UserBetInfo to JSON.
         * @function toJSON
         * @memberof GameMsg_LHD.LHD_UserBetInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LHD_UserBetInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return LHD_UserBetInfo;
    })();

    GameMsg_LHD.LHD_BroadCastBetArr = (function() {

        /**
         * Properties of a LHD_BroadCastBetArr.
         * @memberof GameMsg_LHD
         * @interface ILHD_BroadCastBetArr
         * @property {number} UserID LHD_BroadCastBetArr UserID
         * @property {Array.<GameMsg_LHD.ILHD_BroadCastBet>|null} [BroadCastBetArr] LHD_BroadCastBetArr BroadCastBetArr
         */

        /**
         * Constructs a new LHD_BroadCastBetArr.
         * @memberof GameMsg_LHD
         * @classdesc Represents a LHD_BroadCastBetArr.
         * @implements ILHD_BroadCastBetArr
         * @constructor
         * @param {GameMsg_LHD.ILHD_BroadCastBetArr=} [properties] Properties to set
         */
        function LHD_BroadCastBetArr(properties) {
            this.BroadCastBetArr = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LHD_BroadCastBetArr UserID.
         * @member {number} UserID
         * @memberof GameMsg_LHD.LHD_BroadCastBetArr
         * @instance
         */
        LHD_BroadCastBetArr.prototype.UserID = 0;

        /**
         * LHD_BroadCastBetArr BroadCastBetArr.
         * @member {Array.<GameMsg_LHD.ILHD_BroadCastBet>} BroadCastBetArr
         * @memberof GameMsg_LHD.LHD_BroadCastBetArr
         * @instance
         */
        LHD_BroadCastBetArr.prototype.BroadCastBetArr = $util.emptyArray;

        /**
         * Creates a new LHD_BroadCastBetArr instance using the specified properties.
         * @function create
         * @memberof GameMsg_LHD.LHD_BroadCastBetArr
         * @static
         * @param {GameMsg_LHD.ILHD_BroadCastBetArr=} [properties] Properties to set
         * @returns {GameMsg_LHD.LHD_BroadCastBetArr} LHD_BroadCastBetArr instance
         */
        LHD_BroadCastBetArr.create = function create(properties) {
            return new LHD_BroadCastBetArr(properties);
        };

        /**
         * Encodes the specified LHD_BroadCastBetArr message. Does not implicitly {@link GameMsg_LHD.LHD_BroadCastBetArr.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_LHD.LHD_BroadCastBetArr
         * @static
         * @param {GameMsg_LHD.ILHD_BroadCastBetArr} message LHD_BroadCastBetArr message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LHD_BroadCastBetArr.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.UserID);
            if (message.BroadCastBetArr != null && message.BroadCastBetArr.length)
                for (var i = 0; i < message.BroadCastBetArr.length; ++i)
                    $root.GameMsg_LHD.LHD_BroadCastBet.encode(message.BroadCastBetArr[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified LHD_BroadCastBetArr message, length delimited. Does not implicitly {@link GameMsg_LHD.LHD_BroadCastBetArr.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_LHD.LHD_BroadCastBetArr
         * @static
         * @param {GameMsg_LHD.ILHD_BroadCastBetArr} message LHD_BroadCastBetArr message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LHD_BroadCastBetArr.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LHD_BroadCastBetArr message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_LHD.LHD_BroadCastBetArr
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_LHD.LHD_BroadCastBetArr} LHD_BroadCastBetArr
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LHD_BroadCastBetArr.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_LHD.LHD_BroadCastBetArr();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.UserID = reader.int32();
                    break;
                case 2:
                    if (!(message.BroadCastBetArr && message.BroadCastBetArr.length))
                        message.BroadCastBetArr = [];
                    message.BroadCastBetArr.push($root.GameMsg_LHD.LHD_BroadCastBet.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("UserID"))
                throw $util.ProtocolError("missing required 'UserID'", { instance: message });
            return message;
        };

        /**
         * Decodes a LHD_BroadCastBetArr message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_LHD.LHD_BroadCastBetArr
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_LHD.LHD_BroadCastBetArr} LHD_BroadCastBetArr
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LHD_BroadCastBetArr.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LHD_BroadCastBetArr message.
         * @function verify
         * @memberof GameMsg_LHD.LHD_BroadCastBetArr
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LHD_BroadCastBetArr.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.UserID))
                return "UserID: integer expected";
            if (message.BroadCastBetArr != null && message.hasOwnProperty("BroadCastBetArr")) {
                if (!Array.isArray(message.BroadCastBetArr))
                    return "BroadCastBetArr: array expected";
                for (var i = 0; i < message.BroadCastBetArr.length; ++i) {
                    var error = $root.GameMsg_LHD.LHD_BroadCastBet.verify(message.BroadCastBetArr[i]);
                    if (error)
                        return "BroadCastBetArr." + error;
                }
            }
            return null;
        };

        /**
         * Creates a LHD_BroadCastBetArr message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_LHD.LHD_BroadCastBetArr
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_LHD.LHD_BroadCastBetArr} LHD_BroadCastBetArr
         */
        LHD_BroadCastBetArr.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_LHD.LHD_BroadCastBetArr)
                return object;
            var message = new $root.GameMsg_LHD.LHD_BroadCastBetArr();
            if (object.UserID != null)
                message.UserID = object.UserID | 0;
            if (object.BroadCastBetArr) {
                if (!Array.isArray(object.BroadCastBetArr))
                    throw TypeError(".GameMsg_LHD.LHD_BroadCastBetArr.BroadCastBetArr: array expected");
                message.BroadCastBetArr = [];
                for (var i = 0; i < object.BroadCastBetArr.length; ++i) {
                    if (typeof object.BroadCastBetArr[i] !== "object")
                        throw TypeError(".GameMsg_LHD.LHD_BroadCastBetArr.BroadCastBetArr: object expected");
                    message.BroadCastBetArr[i] = $root.GameMsg_LHD.LHD_BroadCastBet.fromObject(object.BroadCastBetArr[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a LHD_BroadCastBetArr message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_LHD.LHD_BroadCastBetArr
         * @static
         * @param {GameMsg_LHD.LHD_BroadCastBetArr} message LHD_BroadCastBetArr
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LHD_BroadCastBetArr.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.BroadCastBetArr = [];
            if (options.defaults)
                object.UserID = 0;
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                object.UserID = message.UserID;
            if (message.BroadCastBetArr && message.BroadCastBetArr.length) {
                object.BroadCastBetArr = [];
                for (var j = 0; j < message.BroadCastBetArr.length; ++j)
                    object.BroadCastBetArr[j] = $root.GameMsg_LHD.LHD_BroadCastBet.toObject(message.BroadCastBetArr[j], options);
            }
            return object;
        };

        /**
         * Converts this LHD_BroadCastBetArr to JSON.
         * @function toJSON
         * @memberof GameMsg_LHD.LHD_BroadCastBetArr
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LHD_BroadCastBetArr.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return LHD_BroadCastBetArr;
    })();

    GameMsg_LHD.LHD_BroadCastBet = (function() {

        /**
         * Properties of a LHD_BroadCastBet.
         * @memberof GameMsg_LHD
         * @interface ILHD_BroadCastBet
         * @property {number} Type LHD_BroadCastBet Type
         * @property {number|Long} Money LHD_BroadCastBet Money
         * @property {boolean} LuckyStar LHD_BroadCastBet LuckyStar
         */

        /**
         * Constructs a new LHD_BroadCastBet.
         * @memberof GameMsg_LHD
         * @classdesc Represents a LHD_BroadCastBet.
         * @implements ILHD_BroadCastBet
         * @constructor
         * @param {GameMsg_LHD.ILHD_BroadCastBet=} [properties] Properties to set
         */
        function LHD_BroadCastBet(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LHD_BroadCastBet Type.
         * @member {number} Type
         * @memberof GameMsg_LHD.LHD_BroadCastBet
         * @instance
         */
        LHD_BroadCastBet.prototype.Type = 0;

        /**
         * LHD_BroadCastBet Money.
         * @member {number|Long} Money
         * @memberof GameMsg_LHD.LHD_BroadCastBet
         * @instance
         */
        LHD_BroadCastBet.prototype.Money = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * LHD_BroadCastBet LuckyStar.
         * @member {boolean} LuckyStar
         * @memberof GameMsg_LHD.LHD_BroadCastBet
         * @instance
         */
        LHD_BroadCastBet.prototype.LuckyStar = false;

        /**
         * Creates a new LHD_BroadCastBet instance using the specified properties.
         * @function create
         * @memberof GameMsg_LHD.LHD_BroadCastBet
         * @static
         * @param {GameMsg_LHD.ILHD_BroadCastBet=} [properties] Properties to set
         * @returns {GameMsg_LHD.LHD_BroadCastBet} LHD_BroadCastBet instance
         */
        LHD_BroadCastBet.create = function create(properties) {
            return new LHD_BroadCastBet(properties);
        };

        /**
         * Encodes the specified LHD_BroadCastBet message. Does not implicitly {@link GameMsg_LHD.LHD_BroadCastBet.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_LHD.LHD_BroadCastBet
         * @static
         * @param {GameMsg_LHD.ILHD_BroadCastBet} message LHD_BroadCastBet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LHD_BroadCastBet.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.Type);
            writer.uint32(/* id 2, wireType 0 =*/16).int64(message.Money);
            writer.uint32(/* id 3, wireType 0 =*/24).bool(message.LuckyStar);
            return writer;
        };

        /**
         * Encodes the specified LHD_BroadCastBet message, length delimited. Does not implicitly {@link GameMsg_LHD.LHD_BroadCastBet.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_LHD.LHD_BroadCastBet
         * @static
         * @param {GameMsg_LHD.ILHD_BroadCastBet} message LHD_BroadCastBet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LHD_BroadCastBet.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LHD_BroadCastBet message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_LHD.LHD_BroadCastBet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_LHD.LHD_BroadCastBet} LHD_BroadCastBet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LHD_BroadCastBet.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_LHD.LHD_BroadCastBet();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Type = reader.int32();
                    break;
                case 2:
                    message.Money = reader.int64();
                    break;
                case 3:
                    message.LuckyStar = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("Type"))
                throw $util.ProtocolError("missing required 'Type'", { instance: message });
            if (!message.hasOwnProperty("Money"))
                throw $util.ProtocolError("missing required 'Money'", { instance: message });
            if (!message.hasOwnProperty("LuckyStar"))
                throw $util.ProtocolError("missing required 'LuckyStar'", { instance: message });
            return message;
        };

        /**
         * Decodes a LHD_BroadCastBet message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_LHD.LHD_BroadCastBet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_LHD.LHD_BroadCastBet} LHD_BroadCastBet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LHD_BroadCastBet.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LHD_BroadCastBet message.
         * @function verify
         * @memberof GameMsg_LHD.LHD_BroadCastBet
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LHD_BroadCastBet.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.Type))
                return "Type: integer expected";
            if (!$util.isInteger(message.Money) && !(message.Money && $util.isInteger(message.Money.low) && $util.isInteger(message.Money.high)))
                return "Money: integer|Long expected";
            if (typeof message.LuckyStar !== "boolean")
                return "LuckyStar: boolean expected";
            return null;
        };

        /**
         * Creates a LHD_BroadCastBet message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_LHD.LHD_BroadCastBet
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_LHD.LHD_BroadCastBet} LHD_BroadCastBet
         */
        LHD_BroadCastBet.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_LHD.LHD_BroadCastBet)
                return object;
            var message = new $root.GameMsg_LHD.LHD_BroadCastBet();
            if (object.Type != null)
                message.Type = object.Type | 0;
            if (object.Money != null)
                if ($util.Long)
                    (message.Money = $util.Long.fromValue(object.Money)).unsigned = false;
                else if (typeof object.Money === "string")
                    message.Money = parseInt(object.Money, 10);
                else if (typeof object.Money === "number")
                    message.Money = object.Money;
                else if (typeof object.Money === "object")
                    message.Money = new $util.LongBits(object.Money.low >>> 0, object.Money.high >>> 0).toNumber();
            if (object.LuckyStar != null)
                message.LuckyStar = Boolean(object.LuckyStar);
            return message;
        };

        /**
         * Creates a plain object from a LHD_BroadCastBet message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_LHD.LHD_BroadCastBet
         * @static
         * @param {GameMsg_LHD.LHD_BroadCastBet} message LHD_BroadCastBet
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LHD_BroadCastBet.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.Type = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.Money = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.Money = options.longs === String ? "0" : 0;
                object.LuckyStar = false;
            }
            if (message.Type != null && message.hasOwnProperty("Type"))
                object.Type = message.Type;
            if (message.Money != null && message.hasOwnProperty("Money"))
                if (typeof message.Money === "number")
                    object.Money = options.longs === String ? String(message.Money) : message.Money;
                else
                    object.Money = options.longs === String ? $util.Long.prototype.toString.call(message.Money) : options.longs === Number ? new $util.LongBits(message.Money.low >>> 0, message.Money.high >>> 0).toNumber() : message.Money;
            if (message.LuckyStar != null && message.hasOwnProperty("LuckyStar"))
                object.LuckyStar = message.LuckyStar;
            return object;
        };

        /**
         * Converts this LHD_BroadCastBet to JSON.
         * @function toJSON
         * @memberof GameMsg_LHD.LHD_BroadCastBet
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LHD_BroadCastBet.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return LHD_BroadCastBet;
    })();

    GameMsg_LHD.LHD_BetArr = (function() {

        /**
         * Properties of a LHD_BetArr.
         * @memberof GameMsg_LHD
         * @interface ILHD_BetArr
         * @property {Array.<GameMsg_LHD.ILHD_Bet>|null} [BetArr] LHD_BetArr BetArr
         */

        /**
         * Constructs a new LHD_BetArr.
         * @memberof GameMsg_LHD
         * @classdesc Represents a LHD_BetArr.
         * @implements ILHD_BetArr
         * @constructor
         * @param {GameMsg_LHD.ILHD_BetArr=} [properties] Properties to set
         */
        function LHD_BetArr(properties) {
            this.BetArr = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LHD_BetArr BetArr.
         * @member {Array.<GameMsg_LHD.ILHD_Bet>} BetArr
         * @memberof GameMsg_LHD.LHD_BetArr
         * @instance
         */
        LHD_BetArr.prototype.BetArr = $util.emptyArray;

        /**
         * Creates a new LHD_BetArr instance using the specified properties.
         * @function create
         * @memberof GameMsg_LHD.LHD_BetArr
         * @static
         * @param {GameMsg_LHD.ILHD_BetArr=} [properties] Properties to set
         * @returns {GameMsg_LHD.LHD_BetArr} LHD_BetArr instance
         */
        LHD_BetArr.create = function create(properties) {
            return new LHD_BetArr(properties);
        };

        /**
         * Encodes the specified LHD_BetArr message. Does not implicitly {@link GameMsg_LHD.LHD_BetArr.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_LHD.LHD_BetArr
         * @static
         * @param {GameMsg_LHD.ILHD_BetArr} message LHD_BetArr message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LHD_BetArr.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.BetArr != null && message.BetArr.length)
                for (var i = 0; i < message.BetArr.length; ++i)
                    $root.GameMsg_LHD.LHD_Bet.encode(message.BetArr[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified LHD_BetArr message, length delimited. Does not implicitly {@link GameMsg_LHD.LHD_BetArr.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_LHD.LHD_BetArr
         * @static
         * @param {GameMsg_LHD.ILHD_BetArr} message LHD_BetArr message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LHD_BetArr.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LHD_BetArr message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_LHD.LHD_BetArr
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_LHD.LHD_BetArr} LHD_BetArr
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LHD_BetArr.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_LHD.LHD_BetArr();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.BetArr && message.BetArr.length))
                        message.BetArr = [];
                    message.BetArr.push($root.GameMsg_LHD.LHD_Bet.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a LHD_BetArr message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_LHD.LHD_BetArr
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_LHD.LHD_BetArr} LHD_BetArr
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LHD_BetArr.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LHD_BetArr message.
         * @function verify
         * @memberof GameMsg_LHD.LHD_BetArr
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LHD_BetArr.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.BetArr != null && message.hasOwnProperty("BetArr")) {
                if (!Array.isArray(message.BetArr))
                    return "BetArr: array expected";
                for (var i = 0; i < message.BetArr.length; ++i) {
                    var error = $root.GameMsg_LHD.LHD_Bet.verify(message.BetArr[i]);
                    if (error)
                        return "BetArr." + error;
                }
            }
            return null;
        };

        /**
         * Creates a LHD_BetArr message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_LHD.LHD_BetArr
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_LHD.LHD_BetArr} LHD_BetArr
         */
        LHD_BetArr.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_LHD.LHD_BetArr)
                return object;
            var message = new $root.GameMsg_LHD.LHD_BetArr();
            if (object.BetArr) {
                if (!Array.isArray(object.BetArr))
                    throw TypeError(".GameMsg_LHD.LHD_BetArr.BetArr: array expected");
                message.BetArr = [];
                for (var i = 0; i < object.BetArr.length; ++i) {
                    if (typeof object.BetArr[i] !== "object")
                        throw TypeError(".GameMsg_LHD.LHD_BetArr.BetArr: object expected");
                    message.BetArr[i] = $root.GameMsg_LHD.LHD_Bet.fromObject(object.BetArr[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a LHD_BetArr message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_LHD.LHD_BetArr
         * @static
         * @param {GameMsg_LHD.LHD_BetArr} message LHD_BetArr
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LHD_BetArr.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.BetArr = [];
            if (message.BetArr && message.BetArr.length) {
                object.BetArr = [];
                for (var j = 0; j < message.BetArr.length; ++j)
                    object.BetArr[j] = $root.GameMsg_LHD.LHD_Bet.toObject(message.BetArr[j], options);
            }
            return object;
        };

        /**
         * Converts this LHD_BetArr to JSON.
         * @function toJSON
         * @memberof GameMsg_LHD.LHD_BetArr
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LHD_BetArr.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return LHD_BetArr;
    })();

    GameMsg_LHD.LHD_Bet = (function() {

        /**
         * Properties of a LHD_Bet.
         * @memberof GameMsg_LHD
         * @interface ILHD_Bet
         * @property {number} BetType LHD_Bet BetType
         * @property {number} Count LHD_Bet Count
         */

        /**
         * Constructs a new LHD_Bet.
         * @memberof GameMsg_LHD
         * @classdesc Represents a LHD_Bet.
         * @implements ILHD_Bet
         * @constructor
         * @param {GameMsg_LHD.ILHD_Bet=} [properties] Properties to set
         */
        function LHD_Bet(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LHD_Bet BetType.
         * @member {number} BetType
         * @memberof GameMsg_LHD.LHD_Bet
         * @instance
         */
        LHD_Bet.prototype.BetType = 0;

        /**
         * LHD_Bet Count.
         * @member {number} Count
         * @memberof GameMsg_LHD.LHD_Bet
         * @instance
         */
        LHD_Bet.prototype.Count = 0;

        /**
         * Creates a new LHD_Bet instance using the specified properties.
         * @function create
         * @memberof GameMsg_LHD.LHD_Bet
         * @static
         * @param {GameMsg_LHD.ILHD_Bet=} [properties] Properties to set
         * @returns {GameMsg_LHD.LHD_Bet} LHD_Bet instance
         */
        LHD_Bet.create = function create(properties) {
            return new LHD_Bet(properties);
        };

        /**
         * Encodes the specified LHD_Bet message. Does not implicitly {@link GameMsg_LHD.LHD_Bet.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_LHD.LHD_Bet
         * @static
         * @param {GameMsg_LHD.ILHD_Bet} message LHD_Bet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LHD_Bet.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.BetType);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.Count);
            return writer;
        };

        /**
         * Encodes the specified LHD_Bet message, length delimited. Does not implicitly {@link GameMsg_LHD.LHD_Bet.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_LHD.LHD_Bet
         * @static
         * @param {GameMsg_LHD.ILHD_Bet} message LHD_Bet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LHD_Bet.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LHD_Bet message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_LHD.LHD_Bet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_LHD.LHD_Bet} LHD_Bet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LHD_Bet.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_LHD.LHD_Bet();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.BetType = reader.int32();
                    break;
                case 2:
                    message.Count = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("BetType"))
                throw $util.ProtocolError("missing required 'BetType'", { instance: message });
            if (!message.hasOwnProperty("Count"))
                throw $util.ProtocolError("missing required 'Count'", { instance: message });
            return message;
        };

        /**
         * Decodes a LHD_Bet message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_LHD.LHD_Bet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_LHD.LHD_Bet} LHD_Bet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LHD_Bet.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LHD_Bet message.
         * @function verify
         * @memberof GameMsg_LHD.LHD_Bet
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LHD_Bet.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.BetType))
                return "BetType: integer expected";
            if (!$util.isInteger(message.Count))
                return "Count: integer expected";
            return null;
        };

        /**
         * Creates a LHD_Bet message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_LHD.LHD_Bet
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_LHD.LHD_Bet} LHD_Bet
         */
        LHD_Bet.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_LHD.LHD_Bet)
                return object;
            var message = new $root.GameMsg_LHD.LHD_Bet();
            if (object.BetType != null)
                message.BetType = object.BetType | 0;
            if (object.Count != null)
                message.Count = object.Count | 0;
            return message;
        };

        /**
         * Creates a plain object from a LHD_Bet message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_LHD.LHD_Bet
         * @static
         * @param {GameMsg_LHD.LHD_Bet} message LHD_Bet
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LHD_Bet.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.BetType = 0;
                object.Count = 0;
            }
            if (message.BetType != null && message.hasOwnProperty("BetType"))
                object.BetType = message.BetType;
            if (message.Count != null && message.hasOwnProperty("Count"))
                object.Count = message.Count;
            return object;
        };

        /**
         * Converts this LHD_Bet to JSON.
         * @function toJSON
         * @memberof GameMsg_LHD.LHD_Bet
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LHD_Bet.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return LHD_Bet;
    })();

    GameMsg_LHD.LHD_BetRet = (function() {

        /**
         * Properties of a LHD_BetRet.
         * @memberof GameMsg_LHD
         * @interface ILHD_BetRet
         * @property {number} Ret LHD_BetRet Ret
         * @property {number|Long} Money LHD_BetRet Money
         * @property {number|null} [Type] LHD_BetRet Type
         * @property {Array.<GameMsg_LHD.ILHD_Bet>|null} [BetArr] LHD_BetRet BetArr
         */

        /**
         * Constructs a new LHD_BetRet.
         * @memberof GameMsg_LHD
         * @classdesc Represents a LHD_BetRet.
         * @implements ILHD_BetRet
         * @constructor
         * @param {GameMsg_LHD.ILHD_BetRet=} [properties] Properties to set
         */
        function LHD_BetRet(properties) {
            this.BetArr = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LHD_BetRet Ret.
         * @member {number} Ret
         * @memberof GameMsg_LHD.LHD_BetRet
         * @instance
         */
        LHD_BetRet.prototype.Ret = 0;

        /**
         * LHD_BetRet Money.
         * @member {number|Long} Money
         * @memberof GameMsg_LHD.LHD_BetRet
         * @instance
         */
        LHD_BetRet.prototype.Money = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * LHD_BetRet Type.
         * @member {number} Type
         * @memberof GameMsg_LHD.LHD_BetRet
         * @instance
         */
        LHD_BetRet.prototype.Type = 0;

        /**
         * LHD_BetRet BetArr.
         * @member {Array.<GameMsg_LHD.ILHD_Bet>} BetArr
         * @memberof GameMsg_LHD.LHD_BetRet
         * @instance
         */
        LHD_BetRet.prototype.BetArr = $util.emptyArray;

        /**
         * Creates a new LHD_BetRet instance using the specified properties.
         * @function create
         * @memberof GameMsg_LHD.LHD_BetRet
         * @static
         * @param {GameMsg_LHD.ILHD_BetRet=} [properties] Properties to set
         * @returns {GameMsg_LHD.LHD_BetRet} LHD_BetRet instance
         */
        LHD_BetRet.create = function create(properties) {
            return new LHD_BetRet(properties);
        };

        /**
         * Encodes the specified LHD_BetRet message. Does not implicitly {@link GameMsg_LHD.LHD_BetRet.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_LHD.LHD_BetRet
         * @static
         * @param {GameMsg_LHD.ILHD_BetRet} message LHD_BetRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LHD_BetRet.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.Ret);
            writer.uint32(/* id 2, wireType 0 =*/16).int64(message.Money);
            if (message.Type != null && message.hasOwnProperty("Type"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.Type);
            if (message.BetArr != null && message.BetArr.length)
                for (var i = 0; i < message.BetArr.length; ++i)
                    $root.GameMsg_LHD.LHD_Bet.encode(message.BetArr[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified LHD_BetRet message, length delimited. Does not implicitly {@link GameMsg_LHD.LHD_BetRet.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_LHD.LHD_BetRet
         * @static
         * @param {GameMsg_LHD.ILHD_BetRet} message LHD_BetRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LHD_BetRet.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LHD_BetRet message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_LHD.LHD_BetRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_LHD.LHD_BetRet} LHD_BetRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LHD_BetRet.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_LHD.LHD_BetRet();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Ret = reader.int32();
                    break;
                case 2:
                    message.Money = reader.int64();
                    break;
                case 3:
                    message.Type = reader.int32();
                    break;
                case 4:
                    if (!(message.BetArr && message.BetArr.length))
                        message.BetArr = [];
                    message.BetArr.push($root.GameMsg_LHD.LHD_Bet.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("Ret"))
                throw $util.ProtocolError("missing required 'Ret'", { instance: message });
            if (!message.hasOwnProperty("Money"))
                throw $util.ProtocolError("missing required 'Money'", { instance: message });
            return message;
        };

        /**
         * Decodes a LHD_BetRet message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_LHD.LHD_BetRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_LHD.LHD_BetRet} LHD_BetRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LHD_BetRet.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LHD_BetRet message.
         * @function verify
         * @memberof GameMsg_LHD.LHD_BetRet
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LHD_BetRet.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.Ret))
                return "Ret: integer expected";
            if (!$util.isInteger(message.Money) && !(message.Money && $util.isInteger(message.Money.low) && $util.isInteger(message.Money.high)))
                return "Money: integer|Long expected";
            if (message.Type != null && message.hasOwnProperty("Type"))
                if (!$util.isInteger(message.Type))
                    return "Type: integer expected";
            if (message.BetArr != null && message.hasOwnProperty("BetArr")) {
                if (!Array.isArray(message.BetArr))
                    return "BetArr: array expected";
                for (var i = 0; i < message.BetArr.length; ++i) {
                    var error = $root.GameMsg_LHD.LHD_Bet.verify(message.BetArr[i]);
                    if (error)
                        return "BetArr." + error;
                }
            }
            return null;
        };

        /**
         * Creates a LHD_BetRet message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_LHD.LHD_BetRet
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_LHD.LHD_BetRet} LHD_BetRet
         */
        LHD_BetRet.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_LHD.LHD_BetRet)
                return object;
            var message = new $root.GameMsg_LHD.LHD_BetRet();
            if (object.Ret != null)
                message.Ret = object.Ret | 0;
            if (object.Money != null)
                if ($util.Long)
                    (message.Money = $util.Long.fromValue(object.Money)).unsigned = false;
                else if (typeof object.Money === "string")
                    message.Money = parseInt(object.Money, 10);
                else if (typeof object.Money === "number")
                    message.Money = object.Money;
                else if (typeof object.Money === "object")
                    message.Money = new $util.LongBits(object.Money.low >>> 0, object.Money.high >>> 0).toNumber();
            if (object.Type != null)
                message.Type = object.Type | 0;
            if (object.BetArr) {
                if (!Array.isArray(object.BetArr))
                    throw TypeError(".GameMsg_LHD.LHD_BetRet.BetArr: array expected");
                message.BetArr = [];
                for (var i = 0; i < object.BetArr.length; ++i) {
                    if (typeof object.BetArr[i] !== "object")
                        throw TypeError(".GameMsg_LHD.LHD_BetRet.BetArr: object expected");
                    message.BetArr[i] = $root.GameMsg_LHD.LHD_Bet.fromObject(object.BetArr[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a LHD_BetRet message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_LHD.LHD_BetRet
         * @static
         * @param {GameMsg_LHD.LHD_BetRet} message LHD_BetRet
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LHD_BetRet.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.BetArr = [];
            if (options.defaults) {
                object.Ret = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.Money = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.Money = options.longs === String ? "0" : 0;
                object.Type = 0;
            }
            if (message.Ret != null && message.hasOwnProperty("Ret"))
                object.Ret = message.Ret;
            if (message.Money != null && message.hasOwnProperty("Money"))
                if (typeof message.Money === "number")
                    object.Money = options.longs === String ? String(message.Money) : message.Money;
                else
                    object.Money = options.longs === String ? $util.Long.prototype.toString.call(message.Money) : options.longs === Number ? new $util.LongBits(message.Money.low >>> 0, message.Money.high >>> 0).toNumber() : message.Money;
            if (message.Type != null && message.hasOwnProperty("Type"))
                object.Type = message.Type;
            if (message.BetArr && message.BetArr.length) {
                object.BetArr = [];
                for (var j = 0; j < message.BetArr.length; ++j)
                    object.BetArr[j] = $root.GameMsg_LHD.LHD_Bet.toObject(message.BetArr[j], options);
            }
            return object;
        };

        /**
         * Converts this LHD_BetRet to JSON.
         * @function toJSON
         * @memberof GameMsg_LHD.LHD_BetRet
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LHD_BetRet.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return LHD_BetRet;
    })();

    GameMsg_LHD.LHD_GameResultPoker = (function() {

        /**
         * Properties of a LHD_GameResultPoker.
         * @memberof GameMsg_LHD
         * @interface ILHD_GameResultPoker
         * @property {Array.<GameMsg_LHD.ILHD_Poker>|null} [Poker] LHD_GameResultPoker Poker
         * @property {number} RoundID LHD_GameResultPoker RoundID
         */

        /**
         * Constructs a new LHD_GameResultPoker.
         * @memberof GameMsg_LHD
         * @classdesc Represents a LHD_GameResultPoker.
         * @implements ILHD_GameResultPoker
         * @constructor
         * @param {GameMsg_LHD.ILHD_GameResultPoker=} [properties] Properties to set
         */
        function LHD_GameResultPoker(properties) {
            this.Poker = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LHD_GameResultPoker Poker.
         * @member {Array.<GameMsg_LHD.ILHD_Poker>} Poker
         * @memberof GameMsg_LHD.LHD_GameResultPoker
         * @instance
         */
        LHD_GameResultPoker.prototype.Poker = $util.emptyArray;

        /**
         * LHD_GameResultPoker RoundID.
         * @member {number} RoundID
         * @memberof GameMsg_LHD.LHD_GameResultPoker
         * @instance
         */
        LHD_GameResultPoker.prototype.RoundID = 0;

        /**
         * Creates a new LHD_GameResultPoker instance using the specified properties.
         * @function create
         * @memberof GameMsg_LHD.LHD_GameResultPoker
         * @static
         * @param {GameMsg_LHD.ILHD_GameResultPoker=} [properties] Properties to set
         * @returns {GameMsg_LHD.LHD_GameResultPoker} LHD_GameResultPoker instance
         */
        LHD_GameResultPoker.create = function create(properties) {
            return new LHD_GameResultPoker(properties);
        };

        /**
         * Encodes the specified LHD_GameResultPoker message. Does not implicitly {@link GameMsg_LHD.LHD_GameResultPoker.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_LHD.LHD_GameResultPoker
         * @static
         * @param {GameMsg_LHD.ILHD_GameResultPoker} message LHD_GameResultPoker message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LHD_GameResultPoker.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Poker != null && message.Poker.length)
                for (var i = 0; i < message.Poker.length; ++i)
                    $root.GameMsg_LHD.LHD_Poker.encode(message.Poker[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.RoundID);
            return writer;
        };

        /**
         * Encodes the specified LHD_GameResultPoker message, length delimited. Does not implicitly {@link GameMsg_LHD.LHD_GameResultPoker.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_LHD.LHD_GameResultPoker
         * @static
         * @param {GameMsg_LHD.ILHD_GameResultPoker} message LHD_GameResultPoker message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LHD_GameResultPoker.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LHD_GameResultPoker message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_LHD.LHD_GameResultPoker
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_LHD.LHD_GameResultPoker} LHD_GameResultPoker
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LHD_GameResultPoker.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_LHD.LHD_GameResultPoker();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.Poker && message.Poker.length))
                        message.Poker = [];
                    message.Poker.push($root.GameMsg_LHD.LHD_Poker.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.RoundID = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("RoundID"))
                throw $util.ProtocolError("missing required 'RoundID'", { instance: message });
            return message;
        };

        /**
         * Decodes a LHD_GameResultPoker message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_LHD.LHD_GameResultPoker
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_LHD.LHD_GameResultPoker} LHD_GameResultPoker
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LHD_GameResultPoker.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LHD_GameResultPoker message.
         * @function verify
         * @memberof GameMsg_LHD.LHD_GameResultPoker
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LHD_GameResultPoker.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Poker != null && message.hasOwnProperty("Poker")) {
                if (!Array.isArray(message.Poker))
                    return "Poker: array expected";
                for (var i = 0; i < message.Poker.length; ++i) {
                    var error = $root.GameMsg_LHD.LHD_Poker.verify(message.Poker[i]);
                    if (error)
                        return "Poker." + error;
                }
            }
            if (!$util.isInteger(message.RoundID))
                return "RoundID: integer expected";
            return null;
        };

        /**
         * Creates a LHD_GameResultPoker message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_LHD.LHD_GameResultPoker
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_LHD.LHD_GameResultPoker} LHD_GameResultPoker
         */
        LHD_GameResultPoker.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_LHD.LHD_GameResultPoker)
                return object;
            var message = new $root.GameMsg_LHD.LHD_GameResultPoker();
            if (object.Poker) {
                if (!Array.isArray(object.Poker))
                    throw TypeError(".GameMsg_LHD.LHD_GameResultPoker.Poker: array expected");
                message.Poker = [];
                for (var i = 0; i < object.Poker.length; ++i) {
                    if (typeof object.Poker[i] !== "object")
                        throw TypeError(".GameMsg_LHD.LHD_GameResultPoker.Poker: object expected");
                    message.Poker[i] = $root.GameMsg_LHD.LHD_Poker.fromObject(object.Poker[i]);
                }
            }
            if (object.RoundID != null)
                message.RoundID = object.RoundID | 0;
            return message;
        };

        /**
         * Creates a plain object from a LHD_GameResultPoker message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_LHD.LHD_GameResultPoker
         * @static
         * @param {GameMsg_LHD.LHD_GameResultPoker} message LHD_GameResultPoker
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LHD_GameResultPoker.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.Poker = [];
            if (options.defaults)
                object.RoundID = 0;
            if (message.Poker && message.Poker.length) {
                object.Poker = [];
                for (var j = 0; j < message.Poker.length; ++j)
                    object.Poker[j] = $root.GameMsg_LHD.LHD_Poker.toObject(message.Poker[j], options);
            }
            if (message.RoundID != null && message.hasOwnProperty("RoundID"))
                object.RoundID = message.RoundID;
            return object;
        };

        /**
         * Converts this LHD_GameResultPoker to JSON.
         * @function toJSON
         * @memberof GameMsg_LHD.LHD_GameResultPoker
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LHD_GameResultPoker.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return LHD_GameResultPoker;
    })();

    GameMsg_LHD.LHD_GameResultUserMoney = (function() {

        /**
         * Properties of a LHD_GameResultUserMoney.
         * @memberof GameMsg_LHD
         * @interface ILHD_GameResultUserMoney
         * @property {number|Long} ZhuangWin LHD_GameResultUserMoney ZhuangWin
         * @property {number|Long} SelfWin LHD_GameResultUserMoney SelfWin
         * @property {Array.<GameMsg_LHD.ILHD_WinUerInfo>|null} [WinUserInfo] LHD_GameResultUserMoney WinUserInfo
         * @property {Array.<GameMsg_LHD.ILHD_StageUerInfo>|null} [StageUerInfo] LHD_GameResultUserMoney StageUerInfo
         */

        /**
         * Constructs a new LHD_GameResultUserMoney.
         * @memberof GameMsg_LHD
         * @classdesc Represents a LHD_GameResultUserMoney.
         * @implements ILHD_GameResultUserMoney
         * @constructor
         * @param {GameMsg_LHD.ILHD_GameResultUserMoney=} [properties] Properties to set
         */
        function LHD_GameResultUserMoney(properties) {
            this.WinUserInfo = [];
            this.StageUerInfo = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LHD_GameResultUserMoney ZhuangWin.
         * @member {number|Long} ZhuangWin
         * @memberof GameMsg_LHD.LHD_GameResultUserMoney
         * @instance
         */
        LHD_GameResultUserMoney.prototype.ZhuangWin = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * LHD_GameResultUserMoney SelfWin.
         * @member {number|Long} SelfWin
         * @memberof GameMsg_LHD.LHD_GameResultUserMoney
         * @instance
         */
        LHD_GameResultUserMoney.prototype.SelfWin = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * LHD_GameResultUserMoney WinUserInfo.
         * @member {Array.<GameMsg_LHD.ILHD_WinUerInfo>} WinUserInfo
         * @memberof GameMsg_LHD.LHD_GameResultUserMoney
         * @instance
         */
        LHD_GameResultUserMoney.prototype.WinUserInfo = $util.emptyArray;

        /**
         * LHD_GameResultUserMoney StageUerInfo.
         * @member {Array.<GameMsg_LHD.ILHD_StageUerInfo>} StageUerInfo
         * @memberof GameMsg_LHD.LHD_GameResultUserMoney
         * @instance
         */
        LHD_GameResultUserMoney.prototype.StageUerInfo = $util.emptyArray;

        /**
         * Creates a new LHD_GameResultUserMoney instance using the specified properties.
         * @function create
         * @memberof GameMsg_LHD.LHD_GameResultUserMoney
         * @static
         * @param {GameMsg_LHD.ILHD_GameResultUserMoney=} [properties] Properties to set
         * @returns {GameMsg_LHD.LHD_GameResultUserMoney} LHD_GameResultUserMoney instance
         */
        LHD_GameResultUserMoney.create = function create(properties) {
            return new LHD_GameResultUserMoney(properties);
        };

        /**
         * Encodes the specified LHD_GameResultUserMoney message. Does not implicitly {@link GameMsg_LHD.LHD_GameResultUserMoney.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_LHD.LHD_GameResultUserMoney
         * @static
         * @param {GameMsg_LHD.ILHD_GameResultUserMoney} message LHD_GameResultUserMoney message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LHD_GameResultUserMoney.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int64(message.ZhuangWin);
            writer.uint32(/* id 2, wireType 0 =*/16).int64(message.SelfWin);
            if (message.WinUserInfo != null && message.WinUserInfo.length)
                for (var i = 0; i < message.WinUserInfo.length; ++i)
                    $root.GameMsg_LHD.LHD_WinUerInfo.encode(message.WinUserInfo[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.StageUerInfo != null && message.StageUerInfo.length)
                for (var i = 0; i < message.StageUerInfo.length; ++i)
                    $root.GameMsg_LHD.LHD_StageUerInfo.encode(message.StageUerInfo[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified LHD_GameResultUserMoney message, length delimited. Does not implicitly {@link GameMsg_LHD.LHD_GameResultUserMoney.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_LHD.LHD_GameResultUserMoney
         * @static
         * @param {GameMsg_LHD.ILHD_GameResultUserMoney} message LHD_GameResultUserMoney message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LHD_GameResultUserMoney.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LHD_GameResultUserMoney message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_LHD.LHD_GameResultUserMoney
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_LHD.LHD_GameResultUserMoney} LHD_GameResultUserMoney
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LHD_GameResultUserMoney.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_LHD.LHD_GameResultUserMoney();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.ZhuangWin = reader.int64();
                    break;
                case 2:
                    message.SelfWin = reader.int64();
                    break;
                case 3:
                    if (!(message.WinUserInfo && message.WinUserInfo.length))
                        message.WinUserInfo = [];
                    message.WinUserInfo.push($root.GameMsg_LHD.LHD_WinUerInfo.decode(reader, reader.uint32()));
                    break;
                case 4:
                    if (!(message.StageUerInfo && message.StageUerInfo.length))
                        message.StageUerInfo = [];
                    message.StageUerInfo.push($root.GameMsg_LHD.LHD_StageUerInfo.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("ZhuangWin"))
                throw $util.ProtocolError("missing required 'ZhuangWin'", { instance: message });
            if (!message.hasOwnProperty("SelfWin"))
                throw $util.ProtocolError("missing required 'SelfWin'", { instance: message });
            return message;
        };

        /**
         * Decodes a LHD_GameResultUserMoney message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_LHD.LHD_GameResultUserMoney
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_LHD.LHD_GameResultUserMoney} LHD_GameResultUserMoney
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LHD_GameResultUserMoney.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LHD_GameResultUserMoney message.
         * @function verify
         * @memberof GameMsg_LHD.LHD_GameResultUserMoney
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LHD_GameResultUserMoney.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.ZhuangWin) && !(message.ZhuangWin && $util.isInteger(message.ZhuangWin.low) && $util.isInteger(message.ZhuangWin.high)))
                return "ZhuangWin: integer|Long expected";
            if (!$util.isInteger(message.SelfWin) && !(message.SelfWin && $util.isInteger(message.SelfWin.low) && $util.isInteger(message.SelfWin.high)))
                return "SelfWin: integer|Long expected";
            if (message.WinUserInfo != null && message.hasOwnProperty("WinUserInfo")) {
                if (!Array.isArray(message.WinUserInfo))
                    return "WinUserInfo: array expected";
                for (var i = 0; i < message.WinUserInfo.length; ++i) {
                    var error = $root.GameMsg_LHD.LHD_WinUerInfo.verify(message.WinUserInfo[i]);
                    if (error)
                        return "WinUserInfo." + error;
                }
            }
            if (message.StageUerInfo != null && message.hasOwnProperty("StageUerInfo")) {
                if (!Array.isArray(message.StageUerInfo))
                    return "StageUerInfo: array expected";
                for (var i = 0; i < message.StageUerInfo.length; ++i) {
                    var error = $root.GameMsg_LHD.LHD_StageUerInfo.verify(message.StageUerInfo[i]);
                    if (error)
                        return "StageUerInfo." + error;
                }
            }
            return null;
        };

        /**
         * Creates a LHD_GameResultUserMoney message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_LHD.LHD_GameResultUserMoney
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_LHD.LHD_GameResultUserMoney} LHD_GameResultUserMoney
         */
        LHD_GameResultUserMoney.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_LHD.LHD_GameResultUserMoney)
                return object;
            var message = new $root.GameMsg_LHD.LHD_GameResultUserMoney();
            if (object.ZhuangWin != null)
                if ($util.Long)
                    (message.ZhuangWin = $util.Long.fromValue(object.ZhuangWin)).unsigned = false;
                else if (typeof object.ZhuangWin === "string")
                    message.ZhuangWin = parseInt(object.ZhuangWin, 10);
                else if (typeof object.ZhuangWin === "number")
                    message.ZhuangWin = object.ZhuangWin;
                else if (typeof object.ZhuangWin === "object")
                    message.ZhuangWin = new $util.LongBits(object.ZhuangWin.low >>> 0, object.ZhuangWin.high >>> 0).toNumber();
            if (object.SelfWin != null)
                if ($util.Long)
                    (message.SelfWin = $util.Long.fromValue(object.SelfWin)).unsigned = false;
                else if (typeof object.SelfWin === "string")
                    message.SelfWin = parseInt(object.SelfWin, 10);
                else if (typeof object.SelfWin === "number")
                    message.SelfWin = object.SelfWin;
                else if (typeof object.SelfWin === "object")
                    message.SelfWin = new $util.LongBits(object.SelfWin.low >>> 0, object.SelfWin.high >>> 0).toNumber();
            if (object.WinUserInfo) {
                if (!Array.isArray(object.WinUserInfo))
                    throw TypeError(".GameMsg_LHD.LHD_GameResultUserMoney.WinUserInfo: array expected");
                message.WinUserInfo = [];
                for (var i = 0; i < object.WinUserInfo.length; ++i) {
                    if (typeof object.WinUserInfo[i] !== "object")
                        throw TypeError(".GameMsg_LHD.LHD_GameResultUserMoney.WinUserInfo: object expected");
                    message.WinUserInfo[i] = $root.GameMsg_LHD.LHD_WinUerInfo.fromObject(object.WinUserInfo[i]);
                }
            }
            if (object.StageUerInfo) {
                if (!Array.isArray(object.StageUerInfo))
                    throw TypeError(".GameMsg_LHD.LHD_GameResultUserMoney.StageUerInfo: array expected");
                message.StageUerInfo = [];
                for (var i = 0; i < object.StageUerInfo.length; ++i) {
                    if (typeof object.StageUerInfo[i] !== "object")
                        throw TypeError(".GameMsg_LHD.LHD_GameResultUserMoney.StageUerInfo: object expected");
                    message.StageUerInfo[i] = $root.GameMsg_LHD.LHD_StageUerInfo.fromObject(object.StageUerInfo[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a LHD_GameResultUserMoney message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_LHD.LHD_GameResultUserMoney
         * @static
         * @param {GameMsg_LHD.LHD_GameResultUserMoney} message LHD_GameResultUserMoney
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LHD_GameResultUserMoney.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.WinUserInfo = [];
                object.StageUerInfo = [];
            }
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.ZhuangWin = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.ZhuangWin = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.SelfWin = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.SelfWin = options.longs === String ? "0" : 0;
            }
            if (message.ZhuangWin != null && message.hasOwnProperty("ZhuangWin"))
                if (typeof message.ZhuangWin === "number")
                    object.ZhuangWin = options.longs === String ? String(message.ZhuangWin) : message.ZhuangWin;
                else
                    object.ZhuangWin = options.longs === String ? $util.Long.prototype.toString.call(message.ZhuangWin) : options.longs === Number ? new $util.LongBits(message.ZhuangWin.low >>> 0, message.ZhuangWin.high >>> 0).toNumber() : message.ZhuangWin;
            if (message.SelfWin != null && message.hasOwnProperty("SelfWin"))
                if (typeof message.SelfWin === "number")
                    object.SelfWin = options.longs === String ? String(message.SelfWin) : message.SelfWin;
                else
                    object.SelfWin = options.longs === String ? $util.Long.prototype.toString.call(message.SelfWin) : options.longs === Number ? new $util.LongBits(message.SelfWin.low >>> 0, message.SelfWin.high >>> 0).toNumber() : message.SelfWin;
            if (message.WinUserInfo && message.WinUserInfo.length) {
                object.WinUserInfo = [];
                for (var j = 0; j < message.WinUserInfo.length; ++j)
                    object.WinUserInfo[j] = $root.GameMsg_LHD.LHD_WinUerInfo.toObject(message.WinUserInfo[j], options);
            }
            if (message.StageUerInfo && message.StageUerInfo.length) {
                object.StageUerInfo = [];
                for (var j = 0; j < message.StageUerInfo.length; ++j)
                    object.StageUerInfo[j] = $root.GameMsg_LHD.LHD_StageUerInfo.toObject(message.StageUerInfo[j], options);
            }
            return object;
        };

        /**
         * Converts this LHD_GameResultUserMoney to JSON.
         * @function toJSON
         * @memberof GameMsg_LHD.LHD_GameResultUserMoney
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LHD_GameResultUserMoney.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return LHD_GameResultUserMoney;
    })();

    GameMsg_LHD.LHD_WinUerInfo = (function() {

        /**
         * Properties of a LHD_WinUerInfo.
         * @memberof GameMsg_LHD
         * @interface ILHD_WinUerInfo
         * @property {string} UserName LHD_WinUerInfo UserName
         * @property {number|Long} Win LHD_WinUerInfo Win
         */

        /**
         * Constructs a new LHD_WinUerInfo.
         * @memberof GameMsg_LHD
         * @classdesc Represents a LHD_WinUerInfo.
         * @implements ILHD_WinUerInfo
         * @constructor
         * @param {GameMsg_LHD.ILHD_WinUerInfo=} [properties] Properties to set
         */
        function LHD_WinUerInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LHD_WinUerInfo UserName.
         * @member {string} UserName
         * @memberof GameMsg_LHD.LHD_WinUerInfo
         * @instance
         */
        LHD_WinUerInfo.prototype.UserName = "";

        /**
         * LHD_WinUerInfo Win.
         * @member {number|Long} Win
         * @memberof GameMsg_LHD.LHD_WinUerInfo
         * @instance
         */
        LHD_WinUerInfo.prototype.Win = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new LHD_WinUerInfo instance using the specified properties.
         * @function create
         * @memberof GameMsg_LHD.LHD_WinUerInfo
         * @static
         * @param {GameMsg_LHD.ILHD_WinUerInfo=} [properties] Properties to set
         * @returns {GameMsg_LHD.LHD_WinUerInfo} LHD_WinUerInfo instance
         */
        LHD_WinUerInfo.create = function create(properties) {
            return new LHD_WinUerInfo(properties);
        };

        /**
         * Encodes the specified LHD_WinUerInfo message. Does not implicitly {@link GameMsg_LHD.LHD_WinUerInfo.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_LHD.LHD_WinUerInfo
         * @static
         * @param {GameMsg_LHD.ILHD_WinUerInfo} message LHD_WinUerInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LHD_WinUerInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.UserName);
            writer.uint32(/* id 2, wireType 0 =*/16).int64(message.Win);
            return writer;
        };

        /**
         * Encodes the specified LHD_WinUerInfo message, length delimited. Does not implicitly {@link GameMsg_LHD.LHD_WinUerInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_LHD.LHD_WinUerInfo
         * @static
         * @param {GameMsg_LHD.ILHD_WinUerInfo} message LHD_WinUerInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LHD_WinUerInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LHD_WinUerInfo message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_LHD.LHD_WinUerInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_LHD.LHD_WinUerInfo} LHD_WinUerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LHD_WinUerInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_LHD.LHD_WinUerInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.UserName = reader.string();
                    break;
                case 2:
                    message.Win = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("UserName"))
                throw $util.ProtocolError("missing required 'UserName'", { instance: message });
            if (!message.hasOwnProperty("Win"))
                throw $util.ProtocolError("missing required 'Win'", { instance: message });
            return message;
        };

        /**
         * Decodes a LHD_WinUerInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_LHD.LHD_WinUerInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_LHD.LHD_WinUerInfo} LHD_WinUerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LHD_WinUerInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LHD_WinUerInfo message.
         * @function verify
         * @memberof GameMsg_LHD.LHD_WinUerInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LHD_WinUerInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.UserName))
                return "UserName: string expected";
            if (!$util.isInteger(message.Win) && !(message.Win && $util.isInteger(message.Win.low) && $util.isInteger(message.Win.high)))
                return "Win: integer|Long expected";
            return null;
        };

        /**
         * Creates a LHD_WinUerInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_LHD.LHD_WinUerInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_LHD.LHD_WinUerInfo} LHD_WinUerInfo
         */
        LHD_WinUerInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_LHD.LHD_WinUerInfo)
                return object;
            var message = new $root.GameMsg_LHD.LHD_WinUerInfo();
            if (object.UserName != null)
                message.UserName = String(object.UserName);
            if (object.Win != null)
                if ($util.Long)
                    (message.Win = $util.Long.fromValue(object.Win)).unsigned = false;
                else if (typeof object.Win === "string")
                    message.Win = parseInt(object.Win, 10);
                else if (typeof object.Win === "number")
                    message.Win = object.Win;
                else if (typeof object.Win === "object")
                    message.Win = new $util.LongBits(object.Win.low >>> 0, object.Win.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a LHD_WinUerInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_LHD.LHD_WinUerInfo
         * @static
         * @param {GameMsg_LHD.LHD_WinUerInfo} message LHD_WinUerInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LHD_WinUerInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.UserName = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.Win = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.Win = options.longs === String ? "0" : 0;
            }
            if (message.UserName != null && message.hasOwnProperty("UserName"))
                object.UserName = message.UserName;
            if (message.Win != null && message.hasOwnProperty("Win"))
                if (typeof message.Win === "number")
                    object.Win = options.longs === String ? String(message.Win) : message.Win;
                else
                    object.Win = options.longs === String ? $util.Long.prototype.toString.call(message.Win) : options.longs === Number ? new $util.LongBits(message.Win.low >>> 0, message.Win.high >>> 0).toNumber() : message.Win;
            return object;
        };

        /**
         * Converts this LHD_WinUerInfo to JSON.
         * @function toJSON
         * @memberof GameMsg_LHD.LHD_WinUerInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LHD_WinUerInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return LHD_WinUerInfo;
    })();

    GameMsg_LHD.LHD_StageUerInfo = (function() {

        /**
         * Properties of a LHD_StageUerInfo.
         * @memberof GameMsg_LHD
         * @interface ILHD_StageUerInfo
         * @property {number} UserID LHD_StageUerInfo UserID
         * @property {number|Long} Win LHD_StageUerInfo Win
         */

        /**
         * Constructs a new LHD_StageUerInfo.
         * @memberof GameMsg_LHD
         * @classdesc Represents a LHD_StageUerInfo.
         * @implements ILHD_StageUerInfo
         * @constructor
         * @param {GameMsg_LHD.ILHD_StageUerInfo=} [properties] Properties to set
         */
        function LHD_StageUerInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LHD_StageUerInfo UserID.
         * @member {number} UserID
         * @memberof GameMsg_LHD.LHD_StageUerInfo
         * @instance
         */
        LHD_StageUerInfo.prototype.UserID = 0;

        /**
         * LHD_StageUerInfo Win.
         * @member {number|Long} Win
         * @memberof GameMsg_LHD.LHD_StageUerInfo
         * @instance
         */
        LHD_StageUerInfo.prototype.Win = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new LHD_StageUerInfo instance using the specified properties.
         * @function create
         * @memberof GameMsg_LHD.LHD_StageUerInfo
         * @static
         * @param {GameMsg_LHD.ILHD_StageUerInfo=} [properties] Properties to set
         * @returns {GameMsg_LHD.LHD_StageUerInfo} LHD_StageUerInfo instance
         */
        LHD_StageUerInfo.create = function create(properties) {
            return new LHD_StageUerInfo(properties);
        };

        /**
         * Encodes the specified LHD_StageUerInfo message. Does not implicitly {@link GameMsg_LHD.LHD_StageUerInfo.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_LHD.LHD_StageUerInfo
         * @static
         * @param {GameMsg_LHD.ILHD_StageUerInfo} message LHD_StageUerInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LHD_StageUerInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.UserID);
            writer.uint32(/* id 2, wireType 0 =*/16).int64(message.Win);
            return writer;
        };

        /**
         * Encodes the specified LHD_StageUerInfo message, length delimited. Does not implicitly {@link GameMsg_LHD.LHD_StageUerInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_LHD.LHD_StageUerInfo
         * @static
         * @param {GameMsg_LHD.ILHD_StageUerInfo} message LHD_StageUerInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LHD_StageUerInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LHD_StageUerInfo message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_LHD.LHD_StageUerInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_LHD.LHD_StageUerInfo} LHD_StageUerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LHD_StageUerInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_LHD.LHD_StageUerInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.UserID = reader.int32();
                    break;
                case 2:
                    message.Win = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("UserID"))
                throw $util.ProtocolError("missing required 'UserID'", { instance: message });
            if (!message.hasOwnProperty("Win"))
                throw $util.ProtocolError("missing required 'Win'", { instance: message });
            return message;
        };

        /**
         * Decodes a LHD_StageUerInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_LHD.LHD_StageUerInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_LHD.LHD_StageUerInfo} LHD_StageUerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LHD_StageUerInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LHD_StageUerInfo message.
         * @function verify
         * @memberof GameMsg_LHD.LHD_StageUerInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LHD_StageUerInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.UserID))
                return "UserID: integer expected";
            if (!$util.isInteger(message.Win) && !(message.Win && $util.isInteger(message.Win.low) && $util.isInteger(message.Win.high)))
                return "Win: integer|Long expected";
            return null;
        };

        /**
         * Creates a LHD_StageUerInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_LHD.LHD_StageUerInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_LHD.LHD_StageUerInfo} LHD_StageUerInfo
         */
        LHD_StageUerInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_LHD.LHD_StageUerInfo)
                return object;
            var message = new $root.GameMsg_LHD.LHD_StageUerInfo();
            if (object.UserID != null)
                message.UserID = object.UserID | 0;
            if (object.Win != null)
                if ($util.Long)
                    (message.Win = $util.Long.fromValue(object.Win)).unsigned = false;
                else if (typeof object.Win === "string")
                    message.Win = parseInt(object.Win, 10);
                else if (typeof object.Win === "number")
                    message.Win = object.Win;
                else if (typeof object.Win === "object")
                    message.Win = new $util.LongBits(object.Win.low >>> 0, object.Win.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a LHD_StageUerInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_LHD.LHD_StageUerInfo
         * @static
         * @param {GameMsg_LHD.LHD_StageUerInfo} message LHD_StageUerInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LHD_StageUerInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.UserID = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.Win = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.Win = options.longs === String ? "0" : 0;
            }
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                object.UserID = message.UserID;
            if (message.Win != null && message.hasOwnProperty("Win"))
                if (typeof message.Win === "number")
                    object.Win = options.longs === String ? String(message.Win) : message.Win;
                else
                    object.Win = options.longs === String ? $util.Long.prototype.toString.call(message.Win) : options.longs === Number ? new $util.LongBits(message.Win.low >>> 0, message.Win.high >>> 0).toNumber() : message.Win;
            return object;
        };

        /**
         * Converts this LHD_StageUerInfo to JSON.
         * @function toJSON
         * @memberof GameMsg_LHD.LHD_StageUerInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LHD_StageUerInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return LHD_StageUerInfo;
    })();

    GameMsg_LHD.LHD_ShangzhuangRet = (function() {

        /**
         * Properties of a LHD_ShangzhuangRet.
         * @memberof GameMsg_LHD
         * @interface ILHD_ShangzhuangRet
         * @property {number} ret LHD_ShangzhuangRet ret
         */

        /**
         * Constructs a new LHD_ShangzhuangRet.
         * @memberof GameMsg_LHD
         * @classdesc Represents a LHD_ShangzhuangRet.
         * @implements ILHD_ShangzhuangRet
         * @constructor
         * @param {GameMsg_LHD.ILHD_ShangzhuangRet=} [properties] Properties to set
         */
        function LHD_ShangzhuangRet(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LHD_ShangzhuangRet ret.
         * @member {number} ret
         * @memberof GameMsg_LHD.LHD_ShangzhuangRet
         * @instance
         */
        LHD_ShangzhuangRet.prototype.ret = 0;

        /**
         * Creates a new LHD_ShangzhuangRet instance using the specified properties.
         * @function create
         * @memberof GameMsg_LHD.LHD_ShangzhuangRet
         * @static
         * @param {GameMsg_LHD.ILHD_ShangzhuangRet=} [properties] Properties to set
         * @returns {GameMsg_LHD.LHD_ShangzhuangRet} LHD_ShangzhuangRet instance
         */
        LHD_ShangzhuangRet.create = function create(properties) {
            return new LHD_ShangzhuangRet(properties);
        };

        /**
         * Encodes the specified LHD_ShangzhuangRet message. Does not implicitly {@link GameMsg_LHD.LHD_ShangzhuangRet.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_LHD.LHD_ShangzhuangRet
         * @static
         * @param {GameMsg_LHD.ILHD_ShangzhuangRet} message LHD_ShangzhuangRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LHD_ShangzhuangRet.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.ret);
            return writer;
        };

        /**
         * Encodes the specified LHD_ShangzhuangRet message, length delimited. Does not implicitly {@link GameMsg_LHD.LHD_ShangzhuangRet.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_LHD.LHD_ShangzhuangRet
         * @static
         * @param {GameMsg_LHD.ILHD_ShangzhuangRet} message LHD_ShangzhuangRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LHD_ShangzhuangRet.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LHD_ShangzhuangRet message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_LHD.LHD_ShangzhuangRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_LHD.LHD_ShangzhuangRet} LHD_ShangzhuangRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LHD_ShangzhuangRet.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_LHD.LHD_ShangzhuangRet();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.ret = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("ret"))
                throw $util.ProtocolError("missing required 'ret'", { instance: message });
            return message;
        };

        /**
         * Decodes a LHD_ShangzhuangRet message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_LHD.LHD_ShangzhuangRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_LHD.LHD_ShangzhuangRet} LHD_ShangzhuangRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LHD_ShangzhuangRet.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LHD_ShangzhuangRet message.
         * @function verify
         * @memberof GameMsg_LHD.LHD_ShangzhuangRet
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LHD_ShangzhuangRet.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.ret))
                return "ret: integer expected";
            return null;
        };

        /**
         * Creates a LHD_ShangzhuangRet message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_LHD.LHD_ShangzhuangRet
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_LHD.LHD_ShangzhuangRet} LHD_ShangzhuangRet
         */
        LHD_ShangzhuangRet.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_LHD.LHD_ShangzhuangRet)
                return object;
            var message = new $root.GameMsg_LHD.LHD_ShangzhuangRet();
            if (object.ret != null)
                message.ret = object.ret | 0;
            return message;
        };

        /**
         * Creates a plain object from a LHD_ShangzhuangRet message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_LHD.LHD_ShangzhuangRet
         * @static
         * @param {GameMsg_LHD.LHD_ShangzhuangRet} message LHD_ShangzhuangRet
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LHD_ShangzhuangRet.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.ret = 0;
            if (message.ret != null && message.hasOwnProperty("ret"))
                object.ret = message.ret;
            return object;
        };

        /**
         * Converts this LHD_ShangzhuangRet to JSON.
         * @function toJSON
         * @memberof GameMsg_LHD.LHD_ShangzhuangRet
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LHD_ShangzhuangRet.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return LHD_ShangzhuangRet;
    })();

    GameMsg_LHD.LHD_ShangZhuang = (function() {

        /**
         * Properties of a LHD_ShangZhuang.
         * @memberof GameMsg_LHD
         * @interface ILHD_ShangZhuang
         * @property {boolean} IsShangZhuang LHD_ShangZhuang IsShangZhuang
         */

        /**
         * Constructs a new LHD_ShangZhuang.
         * @memberof GameMsg_LHD
         * @classdesc Represents a LHD_ShangZhuang.
         * @implements ILHD_ShangZhuang
         * @constructor
         * @param {GameMsg_LHD.ILHD_ShangZhuang=} [properties] Properties to set
         */
        function LHD_ShangZhuang(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LHD_ShangZhuang IsShangZhuang.
         * @member {boolean} IsShangZhuang
         * @memberof GameMsg_LHD.LHD_ShangZhuang
         * @instance
         */
        LHD_ShangZhuang.prototype.IsShangZhuang = false;

        /**
         * Creates a new LHD_ShangZhuang instance using the specified properties.
         * @function create
         * @memberof GameMsg_LHD.LHD_ShangZhuang
         * @static
         * @param {GameMsg_LHD.ILHD_ShangZhuang=} [properties] Properties to set
         * @returns {GameMsg_LHD.LHD_ShangZhuang} LHD_ShangZhuang instance
         */
        LHD_ShangZhuang.create = function create(properties) {
            return new LHD_ShangZhuang(properties);
        };

        /**
         * Encodes the specified LHD_ShangZhuang message. Does not implicitly {@link GameMsg_LHD.LHD_ShangZhuang.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_LHD.LHD_ShangZhuang
         * @static
         * @param {GameMsg_LHD.ILHD_ShangZhuang} message LHD_ShangZhuang message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LHD_ShangZhuang.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).bool(message.IsShangZhuang);
            return writer;
        };

        /**
         * Encodes the specified LHD_ShangZhuang message, length delimited. Does not implicitly {@link GameMsg_LHD.LHD_ShangZhuang.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_LHD.LHD_ShangZhuang
         * @static
         * @param {GameMsg_LHD.ILHD_ShangZhuang} message LHD_ShangZhuang message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LHD_ShangZhuang.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LHD_ShangZhuang message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_LHD.LHD_ShangZhuang
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_LHD.LHD_ShangZhuang} LHD_ShangZhuang
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LHD_ShangZhuang.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_LHD.LHD_ShangZhuang();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.IsShangZhuang = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("IsShangZhuang"))
                throw $util.ProtocolError("missing required 'IsShangZhuang'", { instance: message });
            return message;
        };

        /**
         * Decodes a LHD_ShangZhuang message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_LHD.LHD_ShangZhuang
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_LHD.LHD_ShangZhuang} LHD_ShangZhuang
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LHD_ShangZhuang.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LHD_ShangZhuang message.
         * @function verify
         * @memberof GameMsg_LHD.LHD_ShangZhuang
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LHD_ShangZhuang.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (typeof message.IsShangZhuang !== "boolean")
                return "IsShangZhuang: boolean expected";
            return null;
        };

        /**
         * Creates a LHD_ShangZhuang message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_LHD.LHD_ShangZhuang
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_LHD.LHD_ShangZhuang} LHD_ShangZhuang
         */
        LHD_ShangZhuang.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_LHD.LHD_ShangZhuang)
                return object;
            var message = new $root.GameMsg_LHD.LHD_ShangZhuang();
            if (object.IsShangZhuang != null)
                message.IsShangZhuang = Boolean(object.IsShangZhuang);
            return message;
        };

        /**
         * Creates a plain object from a LHD_ShangZhuang message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_LHD.LHD_ShangZhuang
         * @static
         * @param {GameMsg_LHD.LHD_ShangZhuang} message LHD_ShangZhuang
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LHD_ShangZhuang.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.IsShangZhuang = false;
            if (message.IsShangZhuang != null && message.hasOwnProperty("IsShangZhuang"))
                object.IsShangZhuang = message.IsShangZhuang;
            return object;
        };

        /**
         * Converts this LHD_ShangZhuang to JSON.
         * @function toJSON
         * @memberof GameMsg_LHD.LHD_ShangZhuang
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LHD_ShangZhuang.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return LHD_ShangZhuang;
    })();

    GameMsg_LHD.LHD_ZhuangInfo = (function() {

        /**
         * Properties of a LHD_ZhuangInfo.
         * @memberof GameMsg_LHD
         * @interface ILHD_ZhuangInfo
         * @property {number} UserID LHD_ZhuangInfo UserID
         * @property {number} LastTurn LHD_ZhuangInfo LastTurn
         * @property {Array.<GameMsg_LHD.IGameUser>|null} [UserInfo] LHD_ZhuangInfo UserInfo
         */

        /**
         * Constructs a new LHD_ZhuangInfo.
         * @memberof GameMsg_LHD
         * @classdesc Represents a LHD_ZhuangInfo.
         * @implements ILHD_ZhuangInfo
         * @constructor
         * @param {GameMsg_LHD.ILHD_ZhuangInfo=} [properties] Properties to set
         */
        function LHD_ZhuangInfo(properties) {
            this.UserInfo = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LHD_ZhuangInfo UserID.
         * @member {number} UserID
         * @memberof GameMsg_LHD.LHD_ZhuangInfo
         * @instance
         */
        LHD_ZhuangInfo.prototype.UserID = 0;

        /**
         * LHD_ZhuangInfo LastTurn.
         * @member {number} LastTurn
         * @memberof GameMsg_LHD.LHD_ZhuangInfo
         * @instance
         */
        LHD_ZhuangInfo.prototype.LastTurn = 0;

        /**
         * LHD_ZhuangInfo UserInfo.
         * @member {Array.<GameMsg_LHD.IGameUser>} UserInfo
         * @memberof GameMsg_LHD.LHD_ZhuangInfo
         * @instance
         */
        LHD_ZhuangInfo.prototype.UserInfo = $util.emptyArray;

        /**
         * Creates a new LHD_ZhuangInfo instance using the specified properties.
         * @function create
         * @memberof GameMsg_LHD.LHD_ZhuangInfo
         * @static
         * @param {GameMsg_LHD.ILHD_ZhuangInfo=} [properties] Properties to set
         * @returns {GameMsg_LHD.LHD_ZhuangInfo} LHD_ZhuangInfo instance
         */
        LHD_ZhuangInfo.create = function create(properties) {
            return new LHD_ZhuangInfo(properties);
        };

        /**
         * Encodes the specified LHD_ZhuangInfo message. Does not implicitly {@link GameMsg_LHD.LHD_ZhuangInfo.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_LHD.LHD_ZhuangInfo
         * @static
         * @param {GameMsg_LHD.ILHD_ZhuangInfo} message LHD_ZhuangInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LHD_ZhuangInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.UserID);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.LastTurn);
            if (message.UserInfo != null && message.UserInfo.length)
                for (var i = 0; i < message.UserInfo.length; ++i)
                    $root.GameMsg_LHD.GameUser.encode(message.UserInfo[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified LHD_ZhuangInfo message, length delimited. Does not implicitly {@link GameMsg_LHD.LHD_ZhuangInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_LHD.LHD_ZhuangInfo
         * @static
         * @param {GameMsg_LHD.ILHD_ZhuangInfo} message LHD_ZhuangInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LHD_ZhuangInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LHD_ZhuangInfo message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_LHD.LHD_ZhuangInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_LHD.LHD_ZhuangInfo} LHD_ZhuangInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LHD_ZhuangInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_LHD.LHD_ZhuangInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.UserID = reader.int32();
                    break;
                case 2:
                    message.LastTurn = reader.int32();
                    break;
                case 3:
                    if (!(message.UserInfo && message.UserInfo.length))
                        message.UserInfo = [];
                    message.UserInfo.push($root.GameMsg_LHD.GameUser.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("UserID"))
                throw $util.ProtocolError("missing required 'UserID'", { instance: message });
            if (!message.hasOwnProperty("LastTurn"))
                throw $util.ProtocolError("missing required 'LastTurn'", { instance: message });
            return message;
        };

        /**
         * Decodes a LHD_ZhuangInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_LHD.LHD_ZhuangInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_LHD.LHD_ZhuangInfo} LHD_ZhuangInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LHD_ZhuangInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LHD_ZhuangInfo message.
         * @function verify
         * @memberof GameMsg_LHD.LHD_ZhuangInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LHD_ZhuangInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.UserID))
                return "UserID: integer expected";
            if (!$util.isInteger(message.LastTurn))
                return "LastTurn: integer expected";
            if (message.UserInfo != null && message.hasOwnProperty("UserInfo")) {
                if (!Array.isArray(message.UserInfo))
                    return "UserInfo: array expected";
                for (var i = 0; i < message.UserInfo.length; ++i) {
                    var error = $root.GameMsg_LHD.GameUser.verify(message.UserInfo[i]);
                    if (error)
                        return "UserInfo." + error;
                }
            }
            return null;
        };

        /**
         * Creates a LHD_ZhuangInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_LHD.LHD_ZhuangInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_LHD.LHD_ZhuangInfo} LHD_ZhuangInfo
         */
        LHD_ZhuangInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_LHD.LHD_ZhuangInfo)
                return object;
            var message = new $root.GameMsg_LHD.LHD_ZhuangInfo();
            if (object.UserID != null)
                message.UserID = object.UserID | 0;
            if (object.LastTurn != null)
                message.LastTurn = object.LastTurn | 0;
            if (object.UserInfo) {
                if (!Array.isArray(object.UserInfo))
                    throw TypeError(".GameMsg_LHD.LHD_ZhuangInfo.UserInfo: array expected");
                message.UserInfo = [];
                for (var i = 0; i < object.UserInfo.length; ++i) {
                    if (typeof object.UserInfo[i] !== "object")
                        throw TypeError(".GameMsg_LHD.LHD_ZhuangInfo.UserInfo: object expected");
                    message.UserInfo[i] = $root.GameMsg_LHD.GameUser.fromObject(object.UserInfo[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a LHD_ZhuangInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_LHD.LHD_ZhuangInfo
         * @static
         * @param {GameMsg_LHD.LHD_ZhuangInfo} message LHD_ZhuangInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LHD_ZhuangInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.UserInfo = [];
            if (options.defaults) {
                object.UserID = 0;
                object.LastTurn = 0;
            }
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                object.UserID = message.UserID;
            if (message.LastTurn != null && message.hasOwnProperty("LastTurn"))
                object.LastTurn = message.LastTurn;
            if (message.UserInfo && message.UserInfo.length) {
                object.UserInfo = [];
                for (var j = 0; j < message.UserInfo.length; ++j)
                    object.UserInfo[j] = $root.GameMsg_LHD.GameUser.toObject(message.UserInfo[j], options);
            }
            return object;
        };

        /**
         * Converts this LHD_ZhuangInfo to JSON.
         * @function toJSON
         * @memberof GameMsg_LHD.LHD_ZhuangInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LHD_ZhuangInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return LHD_ZhuangInfo;
    })();

    GameMsg_LHD.LHD_ZhuangList = (function() {

        /**
         * Properties of a LHD_ZhuangList.
         * @memberof GameMsg_LHD
         * @interface ILHD_ZhuangList
         * @property {Array.<GameMsg_LHD.IGameUser>|null} [UserInfo] LHD_ZhuangList UserInfo
         */

        /**
         * Constructs a new LHD_ZhuangList.
         * @memberof GameMsg_LHD
         * @classdesc Represents a LHD_ZhuangList.
         * @implements ILHD_ZhuangList
         * @constructor
         * @param {GameMsg_LHD.ILHD_ZhuangList=} [properties] Properties to set
         */
        function LHD_ZhuangList(properties) {
            this.UserInfo = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LHD_ZhuangList UserInfo.
         * @member {Array.<GameMsg_LHD.IGameUser>} UserInfo
         * @memberof GameMsg_LHD.LHD_ZhuangList
         * @instance
         */
        LHD_ZhuangList.prototype.UserInfo = $util.emptyArray;

        /**
         * Creates a new LHD_ZhuangList instance using the specified properties.
         * @function create
         * @memberof GameMsg_LHD.LHD_ZhuangList
         * @static
         * @param {GameMsg_LHD.ILHD_ZhuangList=} [properties] Properties to set
         * @returns {GameMsg_LHD.LHD_ZhuangList} LHD_ZhuangList instance
         */
        LHD_ZhuangList.create = function create(properties) {
            return new LHD_ZhuangList(properties);
        };

        /**
         * Encodes the specified LHD_ZhuangList message. Does not implicitly {@link GameMsg_LHD.LHD_ZhuangList.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_LHD.LHD_ZhuangList
         * @static
         * @param {GameMsg_LHD.ILHD_ZhuangList} message LHD_ZhuangList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LHD_ZhuangList.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.UserInfo != null && message.UserInfo.length)
                for (var i = 0; i < message.UserInfo.length; ++i)
                    $root.GameMsg_LHD.GameUser.encode(message.UserInfo[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified LHD_ZhuangList message, length delimited. Does not implicitly {@link GameMsg_LHD.LHD_ZhuangList.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_LHD.LHD_ZhuangList
         * @static
         * @param {GameMsg_LHD.ILHD_ZhuangList} message LHD_ZhuangList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LHD_ZhuangList.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LHD_ZhuangList message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_LHD.LHD_ZhuangList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_LHD.LHD_ZhuangList} LHD_ZhuangList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LHD_ZhuangList.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_LHD.LHD_ZhuangList();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.UserInfo && message.UserInfo.length))
                        message.UserInfo = [];
                    message.UserInfo.push($root.GameMsg_LHD.GameUser.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a LHD_ZhuangList message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_LHD.LHD_ZhuangList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_LHD.LHD_ZhuangList} LHD_ZhuangList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LHD_ZhuangList.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LHD_ZhuangList message.
         * @function verify
         * @memberof GameMsg_LHD.LHD_ZhuangList
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LHD_ZhuangList.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.UserInfo != null && message.hasOwnProperty("UserInfo")) {
                if (!Array.isArray(message.UserInfo))
                    return "UserInfo: array expected";
                for (var i = 0; i < message.UserInfo.length; ++i) {
                    var error = $root.GameMsg_LHD.GameUser.verify(message.UserInfo[i]);
                    if (error)
                        return "UserInfo." + error;
                }
            }
            return null;
        };

        /**
         * Creates a LHD_ZhuangList message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_LHD.LHD_ZhuangList
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_LHD.LHD_ZhuangList} LHD_ZhuangList
         */
        LHD_ZhuangList.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_LHD.LHD_ZhuangList)
                return object;
            var message = new $root.GameMsg_LHD.LHD_ZhuangList();
            if (object.UserInfo) {
                if (!Array.isArray(object.UserInfo))
                    throw TypeError(".GameMsg_LHD.LHD_ZhuangList.UserInfo: array expected");
                message.UserInfo = [];
                for (var i = 0; i < object.UserInfo.length; ++i) {
                    if (typeof object.UserInfo[i] !== "object")
                        throw TypeError(".GameMsg_LHD.LHD_ZhuangList.UserInfo: object expected");
                    message.UserInfo[i] = $root.GameMsg_LHD.GameUser.fromObject(object.UserInfo[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a LHD_ZhuangList message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_LHD.LHD_ZhuangList
         * @static
         * @param {GameMsg_LHD.LHD_ZhuangList} message LHD_ZhuangList
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LHD_ZhuangList.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.UserInfo = [];
            if (message.UserInfo && message.UserInfo.length) {
                object.UserInfo = [];
                for (var j = 0; j < message.UserInfo.length; ++j)
                    object.UserInfo[j] = $root.GameMsg_LHD.GameUser.toObject(message.UserInfo[j], options);
            }
            return object;
        };

        /**
         * Converts this LHD_ZhuangList to JSON.
         * @function toJSON
         * @memberof GameMsg_LHD.LHD_ZhuangList
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LHD_ZhuangList.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return LHD_ZhuangList;
    })();

    GameMsg_LHD.LHD_BetClearRet = (function() {

        /**
         * Properties of a LHD_BetClearRet.
         * @memberof GameMsg_LHD
         * @interface ILHD_BetClearRet
         * @property {number|Long} Money LHD_BetClearRet Money
         * @property {number} Ret LHD_BetClearRet Ret
         */

        /**
         * Constructs a new LHD_BetClearRet.
         * @memberof GameMsg_LHD
         * @classdesc Represents a LHD_BetClearRet.
         * @implements ILHD_BetClearRet
         * @constructor
         * @param {GameMsg_LHD.ILHD_BetClearRet=} [properties] Properties to set
         */
        function LHD_BetClearRet(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LHD_BetClearRet Money.
         * @member {number|Long} Money
         * @memberof GameMsg_LHD.LHD_BetClearRet
         * @instance
         */
        LHD_BetClearRet.prototype.Money = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * LHD_BetClearRet Ret.
         * @member {number} Ret
         * @memberof GameMsg_LHD.LHD_BetClearRet
         * @instance
         */
        LHD_BetClearRet.prototype.Ret = 0;

        /**
         * Creates a new LHD_BetClearRet instance using the specified properties.
         * @function create
         * @memberof GameMsg_LHD.LHD_BetClearRet
         * @static
         * @param {GameMsg_LHD.ILHD_BetClearRet=} [properties] Properties to set
         * @returns {GameMsg_LHD.LHD_BetClearRet} LHD_BetClearRet instance
         */
        LHD_BetClearRet.create = function create(properties) {
            return new LHD_BetClearRet(properties);
        };

        /**
         * Encodes the specified LHD_BetClearRet message. Does not implicitly {@link GameMsg_LHD.LHD_BetClearRet.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_LHD.LHD_BetClearRet
         * @static
         * @param {GameMsg_LHD.ILHD_BetClearRet} message LHD_BetClearRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LHD_BetClearRet.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int64(message.Money);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.Ret);
            return writer;
        };

        /**
         * Encodes the specified LHD_BetClearRet message, length delimited. Does not implicitly {@link GameMsg_LHD.LHD_BetClearRet.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_LHD.LHD_BetClearRet
         * @static
         * @param {GameMsg_LHD.ILHD_BetClearRet} message LHD_BetClearRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LHD_BetClearRet.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LHD_BetClearRet message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_LHD.LHD_BetClearRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_LHD.LHD_BetClearRet} LHD_BetClearRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LHD_BetClearRet.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_LHD.LHD_BetClearRet();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Money = reader.int64();
                    break;
                case 2:
                    message.Ret = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("Money"))
                throw $util.ProtocolError("missing required 'Money'", { instance: message });
            if (!message.hasOwnProperty("Ret"))
                throw $util.ProtocolError("missing required 'Ret'", { instance: message });
            return message;
        };

        /**
         * Decodes a LHD_BetClearRet message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_LHD.LHD_BetClearRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_LHD.LHD_BetClearRet} LHD_BetClearRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LHD_BetClearRet.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LHD_BetClearRet message.
         * @function verify
         * @memberof GameMsg_LHD.LHD_BetClearRet
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LHD_BetClearRet.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.Money) && !(message.Money && $util.isInteger(message.Money.low) && $util.isInteger(message.Money.high)))
                return "Money: integer|Long expected";
            if (!$util.isInteger(message.Ret))
                return "Ret: integer expected";
            return null;
        };

        /**
         * Creates a LHD_BetClearRet message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_LHD.LHD_BetClearRet
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_LHD.LHD_BetClearRet} LHD_BetClearRet
         */
        LHD_BetClearRet.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_LHD.LHD_BetClearRet)
                return object;
            var message = new $root.GameMsg_LHD.LHD_BetClearRet();
            if (object.Money != null)
                if ($util.Long)
                    (message.Money = $util.Long.fromValue(object.Money)).unsigned = false;
                else if (typeof object.Money === "string")
                    message.Money = parseInt(object.Money, 10);
                else if (typeof object.Money === "number")
                    message.Money = object.Money;
                else if (typeof object.Money === "object")
                    message.Money = new $util.LongBits(object.Money.low >>> 0, object.Money.high >>> 0).toNumber();
            if (object.Ret != null)
                message.Ret = object.Ret | 0;
            return message;
        };

        /**
         * Creates a plain object from a LHD_BetClearRet message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_LHD.LHD_BetClearRet
         * @static
         * @param {GameMsg_LHD.LHD_BetClearRet} message LHD_BetClearRet
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LHD_BetClearRet.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.Money = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.Money = options.longs === String ? "0" : 0;
                object.Ret = 0;
            }
            if (message.Money != null && message.hasOwnProperty("Money"))
                if (typeof message.Money === "number")
                    object.Money = options.longs === String ? String(message.Money) : message.Money;
                else
                    object.Money = options.longs === String ? $util.Long.prototype.toString.call(message.Money) : options.longs === Number ? new $util.LongBits(message.Money.low >>> 0, message.Money.high >>> 0).toNumber() : message.Money;
            if (message.Ret != null && message.hasOwnProperty("Ret"))
                object.Ret = message.Ret;
            return object;
        };

        /**
         * Converts this LHD_BetClearRet to JSON.
         * @function toJSON
         * @memberof GameMsg_LHD.LHD_BetClearRet
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LHD_BetClearRet.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return LHD_BetClearRet;
    })();

    GameMsg_LHD.LHD_RichestList = (function() {

        /**
         * Properties of a LHD_RichestList.
         * @memberof GameMsg_LHD
         * @interface ILHD_RichestList
         * @property {Array.<GameMsg_LHD.ILHD_Richest>|null} [RichestList] LHD_RichestList RichestList
         */

        /**
         * Constructs a new LHD_RichestList.
         * @memberof GameMsg_LHD
         * @classdesc Represents a LHD_RichestList.
         * @implements ILHD_RichestList
         * @constructor
         * @param {GameMsg_LHD.ILHD_RichestList=} [properties] Properties to set
         */
        function LHD_RichestList(properties) {
            this.RichestList = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LHD_RichestList RichestList.
         * @member {Array.<GameMsg_LHD.ILHD_Richest>} RichestList
         * @memberof GameMsg_LHD.LHD_RichestList
         * @instance
         */
        LHD_RichestList.prototype.RichestList = $util.emptyArray;

        /**
         * Creates a new LHD_RichestList instance using the specified properties.
         * @function create
         * @memberof GameMsg_LHD.LHD_RichestList
         * @static
         * @param {GameMsg_LHD.ILHD_RichestList=} [properties] Properties to set
         * @returns {GameMsg_LHD.LHD_RichestList} LHD_RichestList instance
         */
        LHD_RichestList.create = function create(properties) {
            return new LHD_RichestList(properties);
        };

        /**
         * Encodes the specified LHD_RichestList message. Does not implicitly {@link GameMsg_LHD.LHD_RichestList.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_LHD.LHD_RichestList
         * @static
         * @param {GameMsg_LHD.ILHD_RichestList} message LHD_RichestList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LHD_RichestList.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.RichestList != null && message.RichestList.length)
                for (var i = 0; i < message.RichestList.length; ++i)
                    $root.GameMsg_LHD.LHD_Richest.encode(message.RichestList[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified LHD_RichestList message, length delimited. Does not implicitly {@link GameMsg_LHD.LHD_RichestList.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_LHD.LHD_RichestList
         * @static
         * @param {GameMsg_LHD.ILHD_RichestList} message LHD_RichestList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LHD_RichestList.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LHD_RichestList message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_LHD.LHD_RichestList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_LHD.LHD_RichestList} LHD_RichestList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LHD_RichestList.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_LHD.LHD_RichestList();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.RichestList && message.RichestList.length))
                        message.RichestList = [];
                    message.RichestList.push($root.GameMsg_LHD.LHD_Richest.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a LHD_RichestList message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_LHD.LHD_RichestList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_LHD.LHD_RichestList} LHD_RichestList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LHD_RichestList.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LHD_RichestList message.
         * @function verify
         * @memberof GameMsg_LHD.LHD_RichestList
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LHD_RichestList.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.RichestList != null && message.hasOwnProperty("RichestList")) {
                if (!Array.isArray(message.RichestList))
                    return "RichestList: array expected";
                for (var i = 0; i < message.RichestList.length; ++i) {
                    var error = $root.GameMsg_LHD.LHD_Richest.verify(message.RichestList[i]);
                    if (error)
                        return "RichestList." + error;
                }
            }
            return null;
        };

        /**
         * Creates a LHD_RichestList message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_LHD.LHD_RichestList
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_LHD.LHD_RichestList} LHD_RichestList
         */
        LHD_RichestList.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_LHD.LHD_RichestList)
                return object;
            var message = new $root.GameMsg_LHD.LHD_RichestList();
            if (object.RichestList) {
                if (!Array.isArray(object.RichestList))
                    throw TypeError(".GameMsg_LHD.LHD_RichestList.RichestList: array expected");
                message.RichestList = [];
                for (var i = 0; i < object.RichestList.length; ++i) {
                    if (typeof object.RichestList[i] !== "object")
                        throw TypeError(".GameMsg_LHD.LHD_RichestList.RichestList: object expected");
                    message.RichestList[i] = $root.GameMsg_LHD.LHD_Richest.fromObject(object.RichestList[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a LHD_RichestList message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_LHD.LHD_RichestList
         * @static
         * @param {GameMsg_LHD.LHD_RichestList} message LHD_RichestList
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LHD_RichestList.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.RichestList = [];
            if (message.RichestList && message.RichestList.length) {
                object.RichestList = [];
                for (var j = 0; j < message.RichestList.length; ++j)
                    object.RichestList[j] = $root.GameMsg_LHD.LHD_Richest.toObject(message.RichestList[j], options);
            }
            return object;
        };

        /**
         * Converts this LHD_RichestList to JSON.
         * @function toJSON
         * @memberof GameMsg_LHD.LHD_RichestList
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LHD_RichestList.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return LHD_RichestList;
    })();

    GameMsg_LHD.LHD_Richest = (function() {

        /**
         * Properties of a LHD_Richest.
         * @memberof GameMsg_LHD
         * @interface ILHD_Richest
         * @property {number} Ranking LHD_Richest Ranking
         * @property {number} UserID LHD_Richest UserID
         * @property {number} UserFaceID LHD_Richest UserFaceID
         * @property {number|Long} Money LHD_Richest Money
         * @property {number|null} [AvatarFrameID] LHD_Richest AvatarFrameID
         */

        /**
         * Constructs a new LHD_Richest.
         * @memberof GameMsg_LHD
         * @classdesc Represents a LHD_Richest.
         * @implements ILHD_Richest
         * @constructor
         * @param {GameMsg_LHD.ILHD_Richest=} [properties] Properties to set
         */
        function LHD_Richest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LHD_Richest Ranking.
         * @member {number} Ranking
         * @memberof GameMsg_LHD.LHD_Richest
         * @instance
         */
        LHD_Richest.prototype.Ranking = 0;

        /**
         * LHD_Richest UserID.
         * @member {number} UserID
         * @memberof GameMsg_LHD.LHD_Richest
         * @instance
         */
        LHD_Richest.prototype.UserID = 0;

        /**
         * LHD_Richest UserFaceID.
         * @member {number} UserFaceID
         * @memberof GameMsg_LHD.LHD_Richest
         * @instance
         */
        LHD_Richest.prototype.UserFaceID = 0;

        /**
         * LHD_Richest Money.
         * @member {number|Long} Money
         * @memberof GameMsg_LHD.LHD_Richest
         * @instance
         */
        LHD_Richest.prototype.Money = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * LHD_Richest AvatarFrameID.
         * @member {number} AvatarFrameID
         * @memberof GameMsg_LHD.LHD_Richest
         * @instance
         */
        LHD_Richest.prototype.AvatarFrameID = 0;

        /**
         * Creates a new LHD_Richest instance using the specified properties.
         * @function create
         * @memberof GameMsg_LHD.LHD_Richest
         * @static
         * @param {GameMsg_LHD.ILHD_Richest=} [properties] Properties to set
         * @returns {GameMsg_LHD.LHD_Richest} LHD_Richest instance
         */
        LHD_Richest.create = function create(properties) {
            return new LHD_Richest(properties);
        };

        /**
         * Encodes the specified LHD_Richest message. Does not implicitly {@link GameMsg_LHD.LHD_Richest.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_LHD.LHD_Richest
         * @static
         * @param {GameMsg_LHD.ILHD_Richest} message LHD_Richest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LHD_Richest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.Ranking);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.UserID);
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.UserFaceID);
            writer.uint32(/* id 4, wireType 0 =*/32).int64(message.Money);
            if (message.AvatarFrameID != null && message.hasOwnProperty("AvatarFrameID"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.AvatarFrameID);
            return writer;
        };

        /**
         * Encodes the specified LHD_Richest message, length delimited. Does not implicitly {@link GameMsg_LHD.LHD_Richest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_LHD.LHD_Richest
         * @static
         * @param {GameMsg_LHD.ILHD_Richest} message LHD_Richest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LHD_Richest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LHD_Richest message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_LHD.LHD_Richest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_LHD.LHD_Richest} LHD_Richest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LHD_Richest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_LHD.LHD_Richest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Ranking = reader.int32();
                    break;
                case 2:
                    message.UserID = reader.int32();
                    break;
                case 3:
                    message.UserFaceID = reader.int32();
                    break;
                case 4:
                    message.Money = reader.int64();
                    break;
                case 5:
                    message.AvatarFrameID = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("Ranking"))
                throw $util.ProtocolError("missing required 'Ranking'", { instance: message });
            if (!message.hasOwnProperty("UserID"))
                throw $util.ProtocolError("missing required 'UserID'", { instance: message });
            if (!message.hasOwnProperty("UserFaceID"))
                throw $util.ProtocolError("missing required 'UserFaceID'", { instance: message });
            if (!message.hasOwnProperty("Money"))
                throw $util.ProtocolError("missing required 'Money'", { instance: message });
            return message;
        };

        /**
         * Decodes a LHD_Richest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_LHD.LHD_Richest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_LHD.LHD_Richest} LHD_Richest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LHD_Richest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LHD_Richest message.
         * @function verify
         * @memberof GameMsg_LHD.LHD_Richest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LHD_Richest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.Ranking))
                return "Ranking: integer expected";
            if (!$util.isInteger(message.UserID))
                return "UserID: integer expected";
            if (!$util.isInteger(message.UserFaceID))
                return "UserFaceID: integer expected";
            if (!$util.isInteger(message.Money) && !(message.Money && $util.isInteger(message.Money.low) && $util.isInteger(message.Money.high)))
                return "Money: integer|Long expected";
            if (message.AvatarFrameID != null && message.hasOwnProperty("AvatarFrameID"))
                if (!$util.isInteger(message.AvatarFrameID))
                    return "AvatarFrameID: integer expected";
            return null;
        };

        /**
         * Creates a LHD_Richest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_LHD.LHD_Richest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_LHD.LHD_Richest} LHD_Richest
         */
        LHD_Richest.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_LHD.LHD_Richest)
                return object;
            var message = new $root.GameMsg_LHD.LHD_Richest();
            if (object.Ranking != null)
                message.Ranking = object.Ranking | 0;
            if (object.UserID != null)
                message.UserID = object.UserID | 0;
            if (object.UserFaceID != null)
                message.UserFaceID = object.UserFaceID | 0;
            if (object.Money != null)
                if ($util.Long)
                    (message.Money = $util.Long.fromValue(object.Money)).unsigned = false;
                else if (typeof object.Money === "string")
                    message.Money = parseInt(object.Money, 10);
                else if (typeof object.Money === "number")
                    message.Money = object.Money;
                else if (typeof object.Money === "object")
                    message.Money = new $util.LongBits(object.Money.low >>> 0, object.Money.high >>> 0).toNumber();
            if (object.AvatarFrameID != null)
                message.AvatarFrameID = object.AvatarFrameID | 0;
            return message;
        };

        /**
         * Creates a plain object from a LHD_Richest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_LHD.LHD_Richest
         * @static
         * @param {GameMsg_LHD.LHD_Richest} message LHD_Richest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LHD_Richest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.Ranking = 0;
                object.UserID = 0;
                object.UserFaceID = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.Money = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.Money = options.longs === String ? "0" : 0;
                object.AvatarFrameID = 0;
            }
            if (message.Ranking != null && message.hasOwnProperty("Ranking"))
                object.Ranking = message.Ranking;
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                object.UserID = message.UserID;
            if (message.UserFaceID != null && message.hasOwnProperty("UserFaceID"))
                object.UserFaceID = message.UserFaceID;
            if (message.Money != null && message.hasOwnProperty("Money"))
                if (typeof message.Money === "number")
                    object.Money = options.longs === String ? String(message.Money) : message.Money;
                else
                    object.Money = options.longs === String ? $util.Long.prototype.toString.call(message.Money) : options.longs === Number ? new $util.LongBits(message.Money.low >>> 0, message.Money.high >>> 0).toNumber() : message.Money;
            if (message.AvatarFrameID != null && message.hasOwnProperty("AvatarFrameID"))
                object.AvatarFrameID = message.AvatarFrameID;
            return object;
        };

        /**
         * Converts this LHD_Richest to JSON.
         * @function toJSON
         * @memberof GameMsg_LHD.LHD_Richest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LHD_Richest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return LHD_Richest;
    })();

    GameMsg_LHD.LHD_LuckyStarList = (function() {

        /**
         * Properties of a LHD_LuckyStarList.
         * @memberof GameMsg_LHD
         * @interface ILHD_LuckyStarList
         * @property {Array.<GameMsg_LHD.ILHD_LuckyStar>|null} [LuckyStarList] LHD_LuckyStarList LuckyStarList
         */

        /**
         * Constructs a new LHD_LuckyStarList.
         * @memberof GameMsg_LHD
         * @classdesc Represents a LHD_LuckyStarList.
         * @implements ILHD_LuckyStarList
         * @constructor
         * @param {GameMsg_LHD.ILHD_LuckyStarList=} [properties] Properties to set
         */
        function LHD_LuckyStarList(properties) {
            this.LuckyStarList = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LHD_LuckyStarList LuckyStarList.
         * @member {Array.<GameMsg_LHD.ILHD_LuckyStar>} LuckyStarList
         * @memberof GameMsg_LHD.LHD_LuckyStarList
         * @instance
         */
        LHD_LuckyStarList.prototype.LuckyStarList = $util.emptyArray;

        /**
         * Creates a new LHD_LuckyStarList instance using the specified properties.
         * @function create
         * @memberof GameMsg_LHD.LHD_LuckyStarList
         * @static
         * @param {GameMsg_LHD.ILHD_LuckyStarList=} [properties] Properties to set
         * @returns {GameMsg_LHD.LHD_LuckyStarList} LHD_LuckyStarList instance
         */
        LHD_LuckyStarList.create = function create(properties) {
            return new LHD_LuckyStarList(properties);
        };

        /**
         * Encodes the specified LHD_LuckyStarList message. Does not implicitly {@link GameMsg_LHD.LHD_LuckyStarList.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_LHD.LHD_LuckyStarList
         * @static
         * @param {GameMsg_LHD.ILHD_LuckyStarList} message LHD_LuckyStarList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LHD_LuckyStarList.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.LuckyStarList != null && message.LuckyStarList.length)
                for (var i = 0; i < message.LuckyStarList.length; ++i)
                    $root.GameMsg_LHD.LHD_LuckyStar.encode(message.LuckyStarList[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified LHD_LuckyStarList message, length delimited. Does not implicitly {@link GameMsg_LHD.LHD_LuckyStarList.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_LHD.LHD_LuckyStarList
         * @static
         * @param {GameMsg_LHD.ILHD_LuckyStarList} message LHD_LuckyStarList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LHD_LuckyStarList.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LHD_LuckyStarList message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_LHD.LHD_LuckyStarList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_LHD.LHD_LuckyStarList} LHD_LuckyStarList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LHD_LuckyStarList.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_LHD.LHD_LuckyStarList();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.LuckyStarList && message.LuckyStarList.length))
                        message.LuckyStarList = [];
                    message.LuckyStarList.push($root.GameMsg_LHD.LHD_LuckyStar.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a LHD_LuckyStarList message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_LHD.LHD_LuckyStarList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_LHD.LHD_LuckyStarList} LHD_LuckyStarList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LHD_LuckyStarList.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LHD_LuckyStarList message.
         * @function verify
         * @memberof GameMsg_LHD.LHD_LuckyStarList
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LHD_LuckyStarList.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.LuckyStarList != null && message.hasOwnProperty("LuckyStarList")) {
                if (!Array.isArray(message.LuckyStarList))
                    return "LuckyStarList: array expected";
                for (var i = 0; i < message.LuckyStarList.length; ++i) {
                    var error = $root.GameMsg_LHD.LHD_LuckyStar.verify(message.LuckyStarList[i]);
                    if (error)
                        return "LuckyStarList." + error;
                }
            }
            return null;
        };

        /**
         * Creates a LHD_LuckyStarList message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_LHD.LHD_LuckyStarList
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_LHD.LHD_LuckyStarList} LHD_LuckyStarList
         */
        LHD_LuckyStarList.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_LHD.LHD_LuckyStarList)
                return object;
            var message = new $root.GameMsg_LHD.LHD_LuckyStarList();
            if (object.LuckyStarList) {
                if (!Array.isArray(object.LuckyStarList))
                    throw TypeError(".GameMsg_LHD.LHD_LuckyStarList.LuckyStarList: array expected");
                message.LuckyStarList = [];
                for (var i = 0; i < object.LuckyStarList.length; ++i) {
                    if (typeof object.LuckyStarList[i] !== "object")
                        throw TypeError(".GameMsg_LHD.LHD_LuckyStarList.LuckyStarList: object expected");
                    message.LuckyStarList[i] = $root.GameMsg_LHD.LHD_LuckyStar.fromObject(object.LuckyStarList[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a LHD_LuckyStarList message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_LHD.LHD_LuckyStarList
         * @static
         * @param {GameMsg_LHD.LHD_LuckyStarList} message LHD_LuckyStarList
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LHD_LuckyStarList.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.LuckyStarList = [];
            if (message.LuckyStarList && message.LuckyStarList.length) {
                object.LuckyStarList = [];
                for (var j = 0; j < message.LuckyStarList.length; ++j)
                    object.LuckyStarList[j] = $root.GameMsg_LHD.LHD_LuckyStar.toObject(message.LuckyStarList[j], options);
            }
            return object;
        };

        /**
         * Converts this LHD_LuckyStarList to JSON.
         * @function toJSON
         * @memberof GameMsg_LHD.LHD_LuckyStarList
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LHD_LuckyStarList.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return LHD_LuckyStarList;
    })();

    GameMsg_LHD.LHD_LuckyStar = (function() {

        /**
         * Properties of a LHD_LuckyStar.
         * @memberof GameMsg_LHD
         * @interface ILHD_LuckyStar
         * @property {number} UserID LHD_LuckyStar UserID
         * @property {number} UserFaceID LHD_LuckyStar UserFaceID
         * @property {number|null} [AvatarFrameID] LHD_LuckyStar AvatarFrameID
         */

        /**
         * Constructs a new LHD_LuckyStar.
         * @memberof GameMsg_LHD
         * @classdesc Represents a LHD_LuckyStar.
         * @implements ILHD_LuckyStar
         * @constructor
         * @param {GameMsg_LHD.ILHD_LuckyStar=} [properties] Properties to set
         */
        function LHD_LuckyStar(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LHD_LuckyStar UserID.
         * @member {number} UserID
         * @memberof GameMsg_LHD.LHD_LuckyStar
         * @instance
         */
        LHD_LuckyStar.prototype.UserID = 0;

        /**
         * LHD_LuckyStar UserFaceID.
         * @member {number} UserFaceID
         * @memberof GameMsg_LHD.LHD_LuckyStar
         * @instance
         */
        LHD_LuckyStar.prototype.UserFaceID = 0;

        /**
         * LHD_LuckyStar AvatarFrameID.
         * @member {number} AvatarFrameID
         * @memberof GameMsg_LHD.LHD_LuckyStar
         * @instance
         */
        LHD_LuckyStar.prototype.AvatarFrameID = 0;

        /**
         * Creates a new LHD_LuckyStar instance using the specified properties.
         * @function create
         * @memberof GameMsg_LHD.LHD_LuckyStar
         * @static
         * @param {GameMsg_LHD.ILHD_LuckyStar=} [properties] Properties to set
         * @returns {GameMsg_LHD.LHD_LuckyStar} LHD_LuckyStar instance
         */
        LHD_LuckyStar.create = function create(properties) {
            return new LHD_LuckyStar(properties);
        };

        /**
         * Encodes the specified LHD_LuckyStar message. Does not implicitly {@link GameMsg_LHD.LHD_LuckyStar.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_LHD.LHD_LuckyStar
         * @static
         * @param {GameMsg_LHD.ILHD_LuckyStar} message LHD_LuckyStar message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LHD_LuckyStar.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.UserID);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.UserFaceID);
            if (message.AvatarFrameID != null && message.hasOwnProperty("AvatarFrameID"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.AvatarFrameID);
            return writer;
        };

        /**
         * Encodes the specified LHD_LuckyStar message, length delimited. Does not implicitly {@link GameMsg_LHD.LHD_LuckyStar.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_LHD.LHD_LuckyStar
         * @static
         * @param {GameMsg_LHD.ILHD_LuckyStar} message LHD_LuckyStar message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LHD_LuckyStar.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LHD_LuckyStar message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_LHD.LHD_LuckyStar
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_LHD.LHD_LuckyStar} LHD_LuckyStar
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LHD_LuckyStar.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_LHD.LHD_LuckyStar();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.UserID = reader.int32();
                    break;
                case 2:
                    message.UserFaceID = reader.int32();
                    break;
                case 3:
                    message.AvatarFrameID = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("UserID"))
                throw $util.ProtocolError("missing required 'UserID'", { instance: message });
            if (!message.hasOwnProperty("UserFaceID"))
                throw $util.ProtocolError("missing required 'UserFaceID'", { instance: message });
            return message;
        };

        /**
         * Decodes a LHD_LuckyStar message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_LHD.LHD_LuckyStar
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_LHD.LHD_LuckyStar} LHD_LuckyStar
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LHD_LuckyStar.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LHD_LuckyStar message.
         * @function verify
         * @memberof GameMsg_LHD.LHD_LuckyStar
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LHD_LuckyStar.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.UserID))
                return "UserID: integer expected";
            if (!$util.isInteger(message.UserFaceID))
                return "UserFaceID: integer expected";
            if (message.AvatarFrameID != null && message.hasOwnProperty("AvatarFrameID"))
                if (!$util.isInteger(message.AvatarFrameID))
                    return "AvatarFrameID: integer expected";
            return null;
        };

        /**
         * Creates a LHD_LuckyStar message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_LHD.LHD_LuckyStar
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_LHD.LHD_LuckyStar} LHD_LuckyStar
         */
        LHD_LuckyStar.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_LHD.LHD_LuckyStar)
                return object;
            var message = new $root.GameMsg_LHD.LHD_LuckyStar();
            if (object.UserID != null)
                message.UserID = object.UserID | 0;
            if (object.UserFaceID != null)
                message.UserFaceID = object.UserFaceID | 0;
            if (object.AvatarFrameID != null)
                message.AvatarFrameID = object.AvatarFrameID | 0;
            return message;
        };

        /**
         * Creates a plain object from a LHD_LuckyStar message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_LHD.LHD_LuckyStar
         * @static
         * @param {GameMsg_LHD.LHD_LuckyStar} message LHD_LuckyStar
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LHD_LuckyStar.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.UserID = 0;
                object.UserFaceID = 0;
                object.AvatarFrameID = 0;
            }
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                object.UserID = message.UserID;
            if (message.UserFaceID != null && message.hasOwnProperty("UserFaceID"))
                object.UserFaceID = message.UserFaceID;
            if (message.AvatarFrameID != null && message.hasOwnProperty("AvatarFrameID"))
                object.AvatarFrameID = message.AvatarFrameID;
            return object;
        };

        /**
         * Converts this LHD_LuckyStar to JSON.
         * @function toJSON
         * @memberof GameMsg_LHD.LHD_LuckyStar
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LHD_LuckyStar.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return LHD_LuckyStar;
    })();

    GameMsg_LHD.LHD_RoundID = (function() {

        /**
         * Properties of a LHD_RoundID.
         * @memberof GameMsg_LHD
         * @interface ILHD_RoundID
         * @property {number} LongWin LHD_RoundID LongWin
         * @property {number} HeWin LHD_RoundID HeWin
         * @property {number} HuWin LHD_RoundID HuWin
         * @property {number} RoundID LHD_RoundID RoundID
         */

        /**
         * Constructs a new LHD_RoundID.
         * @memberof GameMsg_LHD
         * @classdesc Represents a LHD_RoundID.
         * @implements ILHD_RoundID
         * @constructor
         * @param {GameMsg_LHD.ILHD_RoundID=} [properties] Properties to set
         */
        function LHD_RoundID(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LHD_RoundID LongWin.
         * @member {number} LongWin
         * @memberof GameMsg_LHD.LHD_RoundID
         * @instance
         */
        LHD_RoundID.prototype.LongWin = 0;

        /**
         * LHD_RoundID HeWin.
         * @member {number} HeWin
         * @memberof GameMsg_LHD.LHD_RoundID
         * @instance
         */
        LHD_RoundID.prototype.HeWin = 0;

        /**
         * LHD_RoundID HuWin.
         * @member {number} HuWin
         * @memberof GameMsg_LHD.LHD_RoundID
         * @instance
         */
        LHD_RoundID.prototype.HuWin = 0;

        /**
         * LHD_RoundID RoundID.
         * @member {number} RoundID
         * @memberof GameMsg_LHD.LHD_RoundID
         * @instance
         */
        LHD_RoundID.prototype.RoundID = 0;

        /**
         * Creates a new LHD_RoundID instance using the specified properties.
         * @function create
         * @memberof GameMsg_LHD.LHD_RoundID
         * @static
         * @param {GameMsg_LHD.ILHD_RoundID=} [properties] Properties to set
         * @returns {GameMsg_LHD.LHD_RoundID} LHD_RoundID instance
         */
        LHD_RoundID.create = function create(properties) {
            return new LHD_RoundID(properties);
        };

        /**
         * Encodes the specified LHD_RoundID message. Does not implicitly {@link GameMsg_LHD.LHD_RoundID.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_LHD.LHD_RoundID
         * @static
         * @param {GameMsg_LHD.ILHD_RoundID} message LHD_RoundID message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LHD_RoundID.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.LongWin);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.HeWin);
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.HuWin);
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.RoundID);
            return writer;
        };

        /**
         * Encodes the specified LHD_RoundID message, length delimited. Does not implicitly {@link GameMsg_LHD.LHD_RoundID.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_LHD.LHD_RoundID
         * @static
         * @param {GameMsg_LHD.ILHD_RoundID} message LHD_RoundID message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LHD_RoundID.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LHD_RoundID message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_LHD.LHD_RoundID
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_LHD.LHD_RoundID} LHD_RoundID
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LHD_RoundID.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_LHD.LHD_RoundID();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.LongWin = reader.int32();
                    break;
                case 2:
                    message.HeWin = reader.int32();
                    break;
                case 3:
                    message.HuWin = reader.int32();
                    break;
                case 4:
                    message.RoundID = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("LongWin"))
                throw $util.ProtocolError("missing required 'LongWin'", { instance: message });
            if (!message.hasOwnProperty("HeWin"))
                throw $util.ProtocolError("missing required 'HeWin'", { instance: message });
            if (!message.hasOwnProperty("HuWin"))
                throw $util.ProtocolError("missing required 'HuWin'", { instance: message });
            if (!message.hasOwnProperty("RoundID"))
                throw $util.ProtocolError("missing required 'RoundID'", { instance: message });
            return message;
        };

        /**
         * Decodes a LHD_RoundID message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_LHD.LHD_RoundID
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_LHD.LHD_RoundID} LHD_RoundID
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LHD_RoundID.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LHD_RoundID message.
         * @function verify
         * @memberof GameMsg_LHD.LHD_RoundID
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LHD_RoundID.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.LongWin))
                return "LongWin: integer expected";
            if (!$util.isInteger(message.HeWin))
                return "HeWin: integer expected";
            if (!$util.isInteger(message.HuWin))
                return "HuWin: integer expected";
            if (!$util.isInteger(message.RoundID))
                return "RoundID: integer expected";
            return null;
        };

        /**
         * Creates a LHD_RoundID message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_LHD.LHD_RoundID
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_LHD.LHD_RoundID} LHD_RoundID
         */
        LHD_RoundID.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_LHD.LHD_RoundID)
                return object;
            var message = new $root.GameMsg_LHD.LHD_RoundID();
            if (object.LongWin != null)
                message.LongWin = object.LongWin | 0;
            if (object.HeWin != null)
                message.HeWin = object.HeWin | 0;
            if (object.HuWin != null)
                message.HuWin = object.HuWin | 0;
            if (object.RoundID != null)
                message.RoundID = object.RoundID | 0;
            return message;
        };

        /**
         * Creates a plain object from a LHD_RoundID message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_LHD.LHD_RoundID
         * @static
         * @param {GameMsg_LHD.LHD_RoundID} message LHD_RoundID
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LHD_RoundID.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.LongWin = 0;
                object.HeWin = 0;
                object.HuWin = 0;
                object.RoundID = 0;
            }
            if (message.LongWin != null && message.hasOwnProperty("LongWin"))
                object.LongWin = message.LongWin;
            if (message.HeWin != null && message.hasOwnProperty("HeWin"))
                object.HeWin = message.HeWin;
            if (message.HuWin != null && message.hasOwnProperty("HuWin"))
                object.HuWin = message.HuWin;
            if (message.RoundID != null && message.hasOwnProperty("RoundID"))
                object.RoundID = message.RoundID;
            return object;
        };

        /**
         * Converts this LHD_RoundID to JSON.
         * @function toJSON
         * @memberof GameMsg_LHD.LHD_RoundID
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LHD_RoundID.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return LHD_RoundID;
    })();

    GameMsg_LHD.Http_LHD_GameInfo = (function() {

        /**
         * Properties of a Http_LHD_GameInfo.
         * @memberof GameMsg_LHD
         * @interface IHttp_LHD_GameInfo
         * @property {Array.<GameMsg_LHD.IHttp_LHD_TableList>|null} [TableList] Http_LHD_GameInfo TableList
         */

        /**
         * Constructs a new Http_LHD_GameInfo.
         * @memberof GameMsg_LHD
         * @classdesc Represents a Http_LHD_GameInfo.
         * @implements IHttp_LHD_GameInfo
         * @constructor
         * @param {GameMsg_LHD.IHttp_LHD_GameInfo=} [properties] Properties to set
         */
        function Http_LHD_GameInfo(properties) {
            this.TableList = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Http_LHD_GameInfo TableList.
         * @member {Array.<GameMsg_LHD.IHttp_LHD_TableList>} TableList
         * @memberof GameMsg_LHD.Http_LHD_GameInfo
         * @instance
         */
        Http_LHD_GameInfo.prototype.TableList = $util.emptyArray;

        /**
         * Creates a new Http_LHD_GameInfo instance using the specified properties.
         * @function create
         * @memberof GameMsg_LHD.Http_LHD_GameInfo
         * @static
         * @param {GameMsg_LHD.IHttp_LHD_GameInfo=} [properties] Properties to set
         * @returns {GameMsg_LHD.Http_LHD_GameInfo} Http_LHD_GameInfo instance
         */
        Http_LHD_GameInfo.create = function create(properties) {
            return new Http_LHD_GameInfo(properties);
        };

        /**
         * Encodes the specified Http_LHD_GameInfo message. Does not implicitly {@link GameMsg_LHD.Http_LHD_GameInfo.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_LHD.Http_LHD_GameInfo
         * @static
         * @param {GameMsg_LHD.IHttp_LHD_GameInfo} message Http_LHD_GameInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Http_LHD_GameInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.TableList != null && message.TableList.length)
                for (var i = 0; i < message.TableList.length; ++i)
                    $root.GameMsg_LHD.Http_LHD_TableList.encode(message.TableList[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Http_LHD_GameInfo message, length delimited. Does not implicitly {@link GameMsg_LHD.Http_LHD_GameInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_LHD.Http_LHD_GameInfo
         * @static
         * @param {GameMsg_LHD.IHttp_LHD_GameInfo} message Http_LHD_GameInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Http_LHD_GameInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Http_LHD_GameInfo message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_LHD.Http_LHD_GameInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_LHD.Http_LHD_GameInfo} Http_LHD_GameInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Http_LHD_GameInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_LHD.Http_LHD_GameInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.TableList && message.TableList.length))
                        message.TableList = [];
                    message.TableList.push($root.GameMsg_LHD.Http_LHD_TableList.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Http_LHD_GameInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_LHD.Http_LHD_GameInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_LHD.Http_LHD_GameInfo} Http_LHD_GameInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Http_LHD_GameInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Http_LHD_GameInfo message.
         * @function verify
         * @memberof GameMsg_LHD.Http_LHD_GameInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Http_LHD_GameInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.TableList != null && message.hasOwnProperty("TableList")) {
                if (!Array.isArray(message.TableList))
                    return "TableList: array expected";
                for (var i = 0; i < message.TableList.length; ++i) {
                    var error = $root.GameMsg_LHD.Http_LHD_TableList.verify(message.TableList[i]);
                    if (error)
                        return "TableList." + error;
                }
            }
            return null;
        };

        /**
         * Creates a Http_LHD_GameInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_LHD.Http_LHD_GameInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_LHD.Http_LHD_GameInfo} Http_LHD_GameInfo
         */
        Http_LHD_GameInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_LHD.Http_LHD_GameInfo)
                return object;
            var message = new $root.GameMsg_LHD.Http_LHD_GameInfo();
            if (object.TableList) {
                if (!Array.isArray(object.TableList))
                    throw TypeError(".GameMsg_LHD.Http_LHD_GameInfo.TableList: array expected");
                message.TableList = [];
                for (var i = 0; i < object.TableList.length; ++i) {
                    if (typeof object.TableList[i] !== "object")
                        throw TypeError(".GameMsg_LHD.Http_LHD_GameInfo.TableList: object expected");
                    message.TableList[i] = $root.GameMsg_LHD.Http_LHD_TableList.fromObject(object.TableList[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a Http_LHD_GameInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_LHD.Http_LHD_GameInfo
         * @static
         * @param {GameMsg_LHD.Http_LHD_GameInfo} message Http_LHD_GameInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Http_LHD_GameInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.TableList = [];
            if (message.TableList && message.TableList.length) {
                object.TableList = [];
                for (var j = 0; j < message.TableList.length; ++j)
                    object.TableList[j] = $root.GameMsg_LHD.Http_LHD_TableList.toObject(message.TableList[j], options);
            }
            return object;
        };

        /**
         * Converts this Http_LHD_GameInfo to JSON.
         * @function toJSON
         * @memberof GameMsg_LHD.Http_LHD_GameInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Http_LHD_GameInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Http_LHD_GameInfo;
    })();

    GameMsg_LHD.Http_LHD_TableList = (function() {

        /**
         * Properties of a Http_LHD_TableList.
         * @memberof GameMsg_LHD
         * @interface IHttp_LHD_TableList
         * @property {number} TableNo Http_LHD_TableList TableNo
         * @property {number} Status Http_LHD_TableList Status
         * @property {number} GameUserCount Http_LHD_TableList GameUserCount
         * @property {number} RobotCount Http_LHD_TableList RobotCount
         * @property {number|Long} SumEarnAmount Http_LHD_TableList SumEarnAmount
         * @property {number} LastEarnAmount Http_LHD_TableList LastEarnAmount
         * @property {number|Long} PoolCurrentAmount Http_LHD_TableList PoolCurrentAmount
         * @property {number|Long} SysTaxIncome Http_LHD_TableList SysTaxIncome
         */

        /**
         * Constructs a new Http_LHD_TableList.
         * @memberof GameMsg_LHD
         * @classdesc Represents a Http_LHD_TableList.
         * @implements IHttp_LHD_TableList
         * @constructor
         * @param {GameMsg_LHD.IHttp_LHD_TableList=} [properties] Properties to set
         */
        function Http_LHD_TableList(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Http_LHD_TableList TableNo.
         * @member {number} TableNo
         * @memberof GameMsg_LHD.Http_LHD_TableList
         * @instance
         */
        Http_LHD_TableList.prototype.TableNo = 0;

        /**
         * Http_LHD_TableList Status.
         * @member {number} Status
         * @memberof GameMsg_LHD.Http_LHD_TableList
         * @instance
         */
        Http_LHD_TableList.prototype.Status = 0;

        /**
         * Http_LHD_TableList GameUserCount.
         * @member {number} GameUserCount
         * @memberof GameMsg_LHD.Http_LHD_TableList
         * @instance
         */
        Http_LHD_TableList.prototype.GameUserCount = 0;

        /**
         * Http_LHD_TableList RobotCount.
         * @member {number} RobotCount
         * @memberof GameMsg_LHD.Http_LHD_TableList
         * @instance
         */
        Http_LHD_TableList.prototype.RobotCount = 0;

        /**
         * Http_LHD_TableList SumEarnAmount.
         * @member {number|Long} SumEarnAmount
         * @memberof GameMsg_LHD.Http_LHD_TableList
         * @instance
         */
        Http_LHD_TableList.prototype.SumEarnAmount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Http_LHD_TableList LastEarnAmount.
         * @member {number} LastEarnAmount
         * @memberof GameMsg_LHD.Http_LHD_TableList
         * @instance
         */
        Http_LHD_TableList.prototype.LastEarnAmount = 0;

        /**
         * Http_LHD_TableList PoolCurrentAmount.
         * @member {number|Long} PoolCurrentAmount
         * @memberof GameMsg_LHD.Http_LHD_TableList
         * @instance
         */
        Http_LHD_TableList.prototype.PoolCurrentAmount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Http_LHD_TableList SysTaxIncome.
         * @member {number|Long} SysTaxIncome
         * @memberof GameMsg_LHD.Http_LHD_TableList
         * @instance
         */
        Http_LHD_TableList.prototype.SysTaxIncome = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new Http_LHD_TableList instance using the specified properties.
         * @function create
         * @memberof GameMsg_LHD.Http_LHD_TableList
         * @static
         * @param {GameMsg_LHD.IHttp_LHD_TableList=} [properties] Properties to set
         * @returns {GameMsg_LHD.Http_LHD_TableList} Http_LHD_TableList instance
         */
        Http_LHD_TableList.create = function create(properties) {
            return new Http_LHD_TableList(properties);
        };

        /**
         * Encodes the specified Http_LHD_TableList message. Does not implicitly {@link GameMsg_LHD.Http_LHD_TableList.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_LHD.Http_LHD_TableList
         * @static
         * @param {GameMsg_LHD.IHttp_LHD_TableList} message Http_LHD_TableList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Http_LHD_TableList.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.TableNo);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.Status);
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.GameUserCount);
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.RobotCount);
            writer.uint32(/* id 5, wireType 0 =*/40).int64(message.SumEarnAmount);
            writer.uint32(/* id 6, wireType 0 =*/48).int32(message.LastEarnAmount);
            writer.uint32(/* id 7, wireType 0 =*/56).int64(message.PoolCurrentAmount);
            writer.uint32(/* id 8, wireType 0 =*/64).int64(message.SysTaxIncome);
            return writer;
        };

        /**
         * Encodes the specified Http_LHD_TableList message, length delimited. Does not implicitly {@link GameMsg_LHD.Http_LHD_TableList.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_LHD.Http_LHD_TableList
         * @static
         * @param {GameMsg_LHD.IHttp_LHD_TableList} message Http_LHD_TableList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Http_LHD_TableList.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Http_LHD_TableList message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_LHD.Http_LHD_TableList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_LHD.Http_LHD_TableList} Http_LHD_TableList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Http_LHD_TableList.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_LHD.Http_LHD_TableList();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.TableNo = reader.int32();
                    break;
                case 2:
                    message.Status = reader.int32();
                    break;
                case 3:
                    message.GameUserCount = reader.int32();
                    break;
                case 4:
                    message.RobotCount = reader.int32();
                    break;
                case 5:
                    message.SumEarnAmount = reader.int64();
                    break;
                case 6:
                    message.LastEarnAmount = reader.int32();
                    break;
                case 7:
                    message.PoolCurrentAmount = reader.int64();
                    break;
                case 8:
                    message.SysTaxIncome = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("TableNo"))
                throw $util.ProtocolError("missing required 'TableNo'", { instance: message });
            if (!message.hasOwnProperty("Status"))
                throw $util.ProtocolError("missing required 'Status'", { instance: message });
            if (!message.hasOwnProperty("GameUserCount"))
                throw $util.ProtocolError("missing required 'GameUserCount'", { instance: message });
            if (!message.hasOwnProperty("RobotCount"))
                throw $util.ProtocolError("missing required 'RobotCount'", { instance: message });
            if (!message.hasOwnProperty("SumEarnAmount"))
                throw $util.ProtocolError("missing required 'SumEarnAmount'", { instance: message });
            if (!message.hasOwnProperty("LastEarnAmount"))
                throw $util.ProtocolError("missing required 'LastEarnAmount'", { instance: message });
            if (!message.hasOwnProperty("PoolCurrentAmount"))
                throw $util.ProtocolError("missing required 'PoolCurrentAmount'", { instance: message });
            if (!message.hasOwnProperty("SysTaxIncome"))
                throw $util.ProtocolError("missing required 'SysTaxIncome'", { instance: message });
            return message;
        };

        /**
         * Decodes a Http_LHD_TableList message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_LHD.Http_LHD_TableList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_LHD.Http_LHD_TableList} Http_LHD_TableList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Http_LHD_TableList.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Http_LHD_TableList message.
         * @function verify
         * @memberof GameMsg_LHD.Http_LHD_TableList
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Http_LHD_TableList.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.TableNo))
                return "TableNo: integer expected";
            if (!$util.isInteger(message.Status))
                return "Status: integer expected";
            if (!$util.isInteger(message.GameUserCount))
                return "GameUserCount: integer expected";
            if (!$util.isInteger(message.RobotCount))
                return "RobotCount: integer expected";
            if (!$util.isInteger(message.SumEarnAmount) && !(message.SumEarnAmount && $util.isInteger(message.SumEarnAmount.low) && $util.isInteger(message.SumEarnAmount.high)))
                return "SumEarnAmount: integer|Long expected";
            if (!$util.isInteger(message.LastEarnAmount))
                return "LastEarnAmount: integer expected";
            if (!$util.isInteger(message.PoolCurrentAmount) && !(message.PoolCurrentAmount && $util.isInteger(message.PoolCurrentAmount.low) && $util.isInteger(message.PoolCurrentAmount.high)))
                return "PoolCurrentAmount: integer|Long expected";
            if (!$util.isInteger(message.SysTaxIncome) && !(message.SysTaxIncome && $util.isInteger(message.SysTaxIncome.low) && $util.isInteger(message.SysTaxIncome.high)))
                return "SysTaxIncome: integer|Long expected";
            return null;
        };

        /**
         * Creates a Http_LHD_TableList message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_LHD.Http_LHD_TableList
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_LHD.Http_LHD_TableList} Http_LHD_TableList
         */
        Http_LHD_TableList.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_LHD.Http_LHD_TableList)
                return object;
            var message = new $root.GameMsg_LHD.Http_LHD_TableList();
            if (object.TableNo != null)
                message.TableNo = object.TableNo | 0;
            if (object.Status != null)
                message.Status = object.Status | 0;
            if (object.GameUserCount != null)
                message.GameUserCount = object.GameUserCount | 0;
            if (object.RobotCount != null)
                message.RobotCount = object.RobotCount | 0;
            if (object.SumEarnAmount != null)
                if ($util.Long)
                    (message.SumEarnAmount = $util.Long.fromValue(object.SumEarnAmount)).unsigned = false;
                else if (typeof object.SumEarnAmount === "string")
                    message.SumEarnAmount = parseInt(object.SumEarnAmount, 10);
                else if (typeof object.SumEarnAmount === "number")
                    message.SumEarnAmount = object.SumEarnAmount;
                else if (typeof object.SumEarnAmount === "object")
                    message.SumEarnAmount = new $util.LongBits(object.SumEarnAmount.low >>> 0, object.SumEarnAmount.high >>> 0).toNumber();
            if (object.LastEarnAmount != null)
                message.LastEarnAmount = object.LastEarnAmount | 0;
            if (object.PoolCurrentAmount != null)
                if ($util.Long)
                    (message.PoolCurrentAmount = $util.Long.fromValue(object.PoolCurrentAmount)).unsigned = false;
                else if (typeof object.PoolCurrentAmount === "string")
                    message.PoolCurrentAmount = parseInt(object.PoolCurrentAmount, 10);
                else if (typeof object.PoolCurrentAmount === "number")
                    message.PoolCurrentAmount = object.PoolCurrentAmount;
                else if (typeof object.PoolCurrentAmount === "object")
                    message.PoolCurrentAmount = new $util.LongBits(object.PoolCurrentAmount.low >>> 0, object.PoolCurrentAmount.high >>> 0).toNumber();
            if (object.SysTaxIncome != null)
                if ($util.Long)
                    (message.SysTaxIncome = $util.Long.fromValue(object.SysTaxIncome)).unsigned = false;
                else if (typeof object.SysTaxIncome === "string")
                    message.SysTaxIncome = parseInt(object.SysTaxIncome, 10);
                else if (typeof object.SysTaxIncome === "number")
                    message.SysTaxIncome = object.SysTaxIncome;
                else if (typeof object.SysTaxIncome === "object")
                    message.SysTaxIncome = new $util.LongBits(object.SysTaxIncome.low >>> 0, object.SysTaxIncome.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a Http_LHD_TableList message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_LHD.Http_LHD_TableList
         * @static
         * @param {GameMsg_LHD.Http_LHD_TableList} message Http_LHD_TableList
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Http_LHD_TableList.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.TableNo = 0;
                object.Status = 0;
                object.GameUserCount = 0;
                object.RobotCount = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.SumEarnAmount = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.SumEarnAmount = options.longs === String ? "0" : 0;
                object.LastEarnAmount = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.PoolCurrentAmount = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.PoolCurrentAmount = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.SysTaxIncome = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.SysTaxIncome = options.longs === String ? "0" : 0;
            }
            if (message.TableNo != null && message.hasOwnProperty("TableNo"))
                object.TableNo = message.TableNo;
            if (message.Status != null && message.hasOwnProperty("Status"))
                object.Status = message.Status;
            if (message.GameUserCount != null && message.hasOwnProperty("GameUserCount"))
                object.GameUserCount = message.GameUserCount;
            if (message.RobotCount != null && message.hasOwnProperty("RobotCount"))
                object.RobotCount = message.RobotCount;
            if (message.SumEarnAmount != null && message.hasOwnProperty("SumEarnAmount"))
                if (typeof message.SumEarnAmount === "number")
                    object.SumEarnAmount = options.longs === String ? String(message.SumEarnAmount) : message.SumEarnAmount;
                else
                    object.SumEarnAmount = options.longs === String ? $util.Long.prototype.toString.call(message.SumEarnAmount) : options.longs === Number ? new $util.LongBits(message.SumEarnAmount.low >>> 0, message.SumEarnAmount.high >>> 0).toNumber() : message.SumEarnAmount;
            if (message.LastEarnAmount != null && message.hasOwnProperty("LastEarnAmount"))
                object.LastEarnAmount = message.LastEarnAmount;
            if (message.PoolCurrentAmount != null && message.hasOwnProperty("PoolCurrentAmount"))
                if (typeof message.PoolCurrentAmount === "number")
                    object.PoolCurrentAmount = options.longs === String ? String(message.PoolCurrentAmount) : message.PoolCurrentAmount;
                else
                    object.PoolCurrentAmount = options.longs === String ? $util.Long.prototype.toString.call(message.PoolCurrentAmount) : options.longs === Number ? new $util.LongBits(message.PoolCurrentAmount.low >>> 0, message.PoolCurrentAmount.high >>> 0).toNumber() : message.PoolCurrentAmount;
            if (message.SysTaxIncome != null && message.hasOwnProperty("SysTaxIncome"))
                if (typeof message.SysTaxIncome === "number")
                    object.SysTaxIncome = options.longs === String ? String(message.SysTaxIncome) : message.SysTaxIncome;
                else
                    object.SysTaxIncome = options.longs === String ? $util.Long.prototype.toString.call(message.SysTaxIncome) : options.longs === Number ? new $util.LongBits(message.SysTaxIncome.low >>> 0, message.SysTaxIncome.high >>> 0).toNumber() : message.SysTaxIncome;
            return object;
        };

        /**
         * Converts this Http_LHD_TableList to JSON.
         * @function toJSON
         * @memberof GameMsg_LHD.Http_LHD_TableList
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Http_LHD_TableList.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Http_LHD_TableList;
    })();

    GameMsg_LHD.Http_LHD_TableDetail = (function() {

        /**
         * Properties of a Http_LHD_TableDetail.
         * @memberof GameMsg_LHD
         * @interface IHttp_LHD_TableDetail
         * @property {number} TableNo Http_LHD_TableDetail TableNo
         * @property {number} Status Http_LHD_TableDetail Status
         * @property {number|Long} SumEarnAmount Http_LHD_TableDetail SumEarnAmount
         * @property {number} LastEarnAmount Http_LHD_TableDetail LastEarnAmount
         * @property {number|Long} PoolCurrentAmount Http_LHD_TableDetail PoolCurrentAmount
         * @property {number} GameUserCount Http_LHD_TableDetail GameUserCount
         * @property {number} RobotCount Http_LHD_TableDetail RobotCount
         * @property {number} PopWaterRate Http_LHD_TableDetail PopWaterRate
         * @property {number} ZhuangType Http_LHD_TableDetail ZhuangType
         * @property {string} ZhuangNickName Http_LHD_TableDetail ZhuangNickName
         * @property {number} ZhuangUserID Http_LHD_TableDetail ZhuangUserID
         * @property {number} ZhuangSurplusTotal Http_LHD_TableDetail ZhuangSurplusTotal
         * @property {number|Long} ZhuangCurrentMoneyAmount Http_LHD_TableDetail ZhuangCurrentMoneyAmount
         * @property {number|Long} ZhuangInitMoneyAmount Http_LHD_TableDetail ZhuangInitMoneyAmount
         * @property {number|Long} OpenResultDragon Http_LHD_TableDetail OpenResultDragon
         * @property {number|Long} OpenResultTiger Http_LHD_TableDetail OpenResultTiger
         * @property {number|Long} OpenResultDraw Http_LHD_TableDetail OpenResultDraw
         * @property {string} CurentOpenResult Http_LHD_TableDetail CurentOpenResult
         * @property {number|Long} CurentOpenResultEarn Http_LHD_TableDetail CurentOpenResultEarn
         * @property {Array.<GameMsg_LHD.IHttp_LHD_UserInfo>|null} [UserInfo] Http_LHD_TableDetail UserInfo
         * @property {number|Long} SysTaxIncome Http_LHD_TableDetail SysTaxIncome
         * @property {number} BetTime Http_LHD_TableDetail BetTime
         * @property {number|Long} WinLine Http_LHD_TableDetail WinLine
         * @property {number|Long} RobotBetAmount Http_LHD_TableDetail RobotBetAmount
         * @property {Array.<GameMsg_LHD.IHttp_LHD_UserInfo>|null} [LastGameUserBet] Http_LHD_TableDetail LastGameUserBet
         * @property {number} DragonWinRate Http_LHD_TableDetail DragonWinRate
         * @property {number} DrawWinRate Http_LHD_TableDetail DrawWinRate
         * @property {number} TigerWinRate Http_LHD_TableDetail TigerWinRate
         * @property {number|Long} FanFengTarget Http_LHD_TableDetail FanFengTarget
         * @property {number|Long} FanFengComplete Http_LHD_TableDetail FanFengComplete
         */

        /**
         * Constructs a new Http_LHD_TableDetail.
         * @memberof GameMsg_LHD
         * @classdesc Represents a Http_LHD_TableDetail.
         * @implements IHttp_LHD_TableDetail
         * @constructor
         * @param {GameMsg_LHD.IHttp_LHD_TableDetail=} [properties] Properties to set
         */
        function Http_LHD_TableDetail(properties) {
            this.UserInfo = [];
            this.LastGameUserBet = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Http_LHD_TableDetail TableNo.
         * @member {number} TableNo
         * @memberof GameMsg_LHD.Http_LHD_TableDetail
         * @instance
         */
        Http_LHD_TableDetail.prototype.TableNo = 0;

        /**
         * Http_LHD_TableDetail Status.
         * @member {number} Status
         * @memberof GameMsg_LHD.Http_LHD_TableDetail
         * @instance
         */
        Http_LHD_TableDetail.prototype.Status = 0;

        /**
         * Http_LHD_TableDetail SumEarnAmount.
         * @member {number|Long} SumEarnAmount
         * @memberof GameMsg_LHD.Http_LHD_TableDetail
         * @instance
         */
        Http_LHD_TableDetail.prototype.SumEarnAmount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Http_LHD_TableDetail LastEarnAmount.
         * @member {number} LastEarnAmount
         * @memberof GameMsg_LHD.Http_LHD_TableDetail
         * @instance
         */
        Http_LHD_TableDetail.prototype.LastEarnAmount = 0;

        /**
         * Http_LHD_TableDetail PoolCurrentAmount.
         * @member {number|Long} PoolCurrentAmount
         * @memberof GameMsg_LHD.Http_LHD_TableDetail
         * @instance
         */
        Http_LHD_TableDetail.prototype.PoolCurrentAmount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Http_LHD_TableDetail GameUserCount.
         * @member {number} GameUserCount
         * @memberof GameMsg_LHD.Http_LHD_TableDetail
         * @instance
         */
        Http_LHD_TableDetail.prototype.GameUserCount = 0;

        /**
         * Http_LHD_TableDetail RobotCount.
         * @member {number} RobotCount
         * @memberof GameMsg_LHD.Http_LHD_TableDetail
         * @instance
         */
        Http_LHD_TableDetail.prototype.RobotCount = 0;

        /**
         * Http_LHD_TableDetail PopWaterRate.
         * @member {number} PopWaterRate
         * @memberof GameMsg_LHD.Http_LHD_TableDetail
         * @instance
         */
        Http_LHD_TableDetail.prototype.PopWaterRate = 0;

        /**
         * Http_LHD_TableDetail ZhuangType.
         * @member {number} ZhuangType
         * @memberof GameMsg_LHD.Http_LHD_TableDetail
         * @instance
         */
        Http_LHD_TableDetail.prototype.ZhuangType = 0;

        /**
         * Http_LHD_TableDetail ZhuangNickName.
         * @member {string} ZhuangNickName
         * @memberof GameMsg_LHD.Http_LHD_TableDetail
         * @instance
         */
        Http_LHD_TableDetail.prototype.ZhuangNickName = "";

        /**
         * Http_LHD_TableDetail ZhuangUserID.
         * @member {number} ZhuangUserID
         * @memberof GameMsg_LHD.Http_LHD_TableDetail
         * @instance
         */
        Http_LHD_TableDetail.prototype.ZhuangUserID = 0;

        /**
         * Http_LHD_TableDetail ZhuangSurplusTotal.
         * @member {number} ZhuangSurplusTotal
         * @memberof GameMsg_LHD.Http_LHD_TableDetail
         * @instance
         */
        Http_LHD_TableDetail.prototype.ZhuangSurplusTotal = 0;

        /**
         * Http_LHD_TableDetail ZhuangCurrentMoneyAmount.
         * @member {number|Long} ZhuangCurrentMoneyAmount
         * @memberof GameMsg_LHD.Http_LHD_TableDetail
         * @instance
         */
        Http_LHD_TableDetail.prototype.ZhuangCurrentMoneyAmount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Http_LHD_TableDetail ZhuangInitMoneyAmount.
         * @member {number|Long} ZhuangInitMoneyAmount
         * @memberof GameMsg_LHD.Http_LHD_TableDetail
         * @instance
         */
        Http_LHD_TableDetail.prototype.ZhuangInitMoneyAmount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Http_LHD_TableDetail OpenResultDragon.
         * @member {number|Long} OpenResultDragon
         * @memberof GameMsg_LHD.Http_LHD_TableDetail
         * @instance
         */
        Http_LHD_TableDetail.prototype.OpenResultDragon = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Http_LHD_TableDetail OpenResultTiger.
         * @member {number|Long} OpenResultTiger
         * @memberof GameMsg_LHD.Http_LHD_TableDetail
         * @instance
         */
        Http_LHD_TableDetail.prototype.OpenResultTiger = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Http_LHD_TableDetail OpenResultDraw.
         * @member {number|Long} OpenResultDraw
         * @memberof GameMsg_LHD.Http_LHD_TableDetail
         * @instance
         */
        Http_LHD_TableDetail.prototype.OpenResultDraw = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Http_LHD_TableDetail CurentOpenResult.
         * @member {string} CurentOpenResult
         * @memberof GameMsg_LHD.Http_LHD_TableDetail
         * @instance
         */
        Http_LHD_TableDetail.prototype.CurentOpenResult = "";

        /**
         * Http_LHD_TableDetail CurentOpenResultEarn.
         * @member {number|Long} CurentOpenResultEarn
         * @memberof GameMsg_LHD.Http_LHD_TableDetail
         * @instance
         */
        Http_LHD_TableDetail.prototype.CurentOpenResultEarn = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Http_LHD_TableDetail UserInfo.
         * @member {Array.<GameMsg_LHD.IHttp_LHD_UserInfo>} UserInfo
         * @memberof GameMsg_LHD.Http_LHD_TableDetail
         * @instance
         */
        Http_LHD_TableDetail.prototype.UserInfo = $util.emptyArray;

        /**
         * Http_LHD_TableDetail SysTaxIncome.
         * @member {number|Long} SysTaxIncome
         * @memberof GameMsg_LHD.Http_LHD_TableDetail
         * @instance
         */
        Http_LHD_TableDetail.prototype.SysTaxIncome = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Http_LHD_TableDetail BetTime.
         * @member {number} BetTime
         * @memberof GameMsg_LHD.Http_LHD_TableDetail
         * @instance
         */
        Http_LHD_TableDetail.prototype.BetTime = 0;

        /**
         * Http_LHD_TableDetail WinLine.
         * @member {number|Long} WinLine
         * @memberof GameMsg_LHD.Http_LHD_TableDetail
         * @instance
         */
        Http_LHD_TableDetail.prototype.WinLine = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Http_LHD_TableDetail RobotBetAmount.
         * @member {number|Long} RobotBetAmount
         * @memberof GameMsg_LHD.Http_LHD_TableDetail
         * @instance
         */
        Http_LHD_TableDetail.prototype.RobotBetAmount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Http_LHD_TableDetail LastGameUserBet.
         * @member {Array.<GameMsg_LHD.IHttp_LHD_UserInfo>} LastGameUserBet
         * @memberof GameMsg_LHD.Http_LHD_TableDetail
         * @instance
         */
        Http_LHD_TableDetail.prototype.LastGameUserBet = $util.emptyArray;

        /**
         * Http_LHD_TableDetail DragonWinRate.
         * @member {number} DragonWinRate
         * @memberof GameMsg_LHD.Http_LHD_TableDetail
         * @instance
         */
        Http_LHD_TableDetail.prototype.DragonWinRate = 0;

        /**
         * Http_LHD_TableDetail DrawWinRate.
         * @member {number} DrawWinRate
         * @memberof GameMsg_LHD.Http_LHD_TableDetail
         * @instance
         */
        Http_LHD_TableDetail.prototype.DrawWinRate = 0;

        /**
         * Http_LHD_TableDetail TigerWinRate.
         * @member {number} TigerWinRate
         * @memberof GameMsg_LHD.Http_LHD_TableDetail
         * @instance
         */
        Http_LHD_TableDetail.prototype.TigerWinRate = 0;

        /**
         * Http_LHD_TableDetail FanFengTarget.
         * @member {number|Long} FanFengTarget
         * @memberof GameMsg_LHD.Http_LHD_TableDetail
         * @instance
         */
        Http_LHD_TableDetail.prototype.FanFengTarget = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Http_LHD_TableDetail FanFengComplete.
         * @member {number|Long} FanFengComplete
         * @memberof GameMsg_LHD.Http_LHD_TableDetail
         * @instance
         */
        Http_LHD_TableDetail.prototype.FanFengComplete = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new Http_LHD_TableDetail instance using the specified properties.
         * @function create
         * @memberof GameMsg_LHD.Http_LHD_TableDetail
         * @static
         * @param {GameMsg_LHD.IHttp_LHD_TableDetail=} [properties] Properties to set
         * @returns {GameMsg_LHD.Http_LHD_TableDetail} Http_LHD_TableDetail instance
         */
        Http_LHD_TableDetail.create = function create(properties) {
            return new Http_LHD_TableDetail(properties);
        };

        /**
         * Encodes the specified Http_LHD_TableDetail message. Does not implicitly {@link GameMsg_LHD.Http_LHD_TableDetail.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_LHD.Http_LHD_TableDetail
         * @static
         * @param {GameMsg_LHD.IHttp_LHD_TableDetail} message Http_LHD_TableDetail message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Http_LHD_TableDetail.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.TableNo);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.Status);
            writer.uint32(/* id 3, wireType 0 =*/24).int64(message.SumEarnAmount);
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.LastEarnAmount);
            writer.uint32(/* id 5, wireType 0 =*/40).int64(message.PoolCurrentAmount);
            writer.uint32(/* id 6, wireType 0 =*/48).int32(message.GameUserCount);
            writer.uint32(/* id 7, wireType 0 =*/56).int32(message.RobotCount);
            writer.uint32(/* id 8, wireType 0 =*/64).int32(message.PopWaterRate);
            writer.uint32(/* id 9, wireType 0 =*/72).int32(message.ZhuangType);
            writer.uint32(/* id 10, wireType 2 =*/82).string(message.ZhuangNickName);
            writer.uint32(/* id 11, wireType 0 =*/88).int32(message.ZhuangUserID);
            writer.uint32(/* id 12, wireType 0 =*/96).int32(message.ZhuangSurplusTotal);
            writer.uint32(/* id 13, wireType 0 =*/104).int64(message.ZhuangCurrentMoneyAmount);
            writer.uint32(/* id 14, wireType 0 =*/112).int64(message.ZhuangInitMoneyAmount);
            writer.uint32(/* id 15, wireType 0 =*/120).int64(message.OpenResultDragon);
            writer.uint32(/* id 16, wireType 0 =*/128).int64(message.OpenResultTiger);
            writer.uint32(/* id 17, wireType 0 =*/136).int64(message.OpenResultDraw);
            writer.uint32(/* id 18, wireType 2 =*/146).string(message.CurentOpenResult);
            writer.uint32(/* id 19, wireType 0 =*/152).int64(message.CurentOpenResultEarn);
            if (message.UserInfo != null && message.UserInfo.length)
                for (var i = 0; i < message.UserInfo.length; ++i)
                    $root.GameMsg_LHD.Http_LHD_UserInfo.encode(message.UserInfo[i], writer.uint32(/* id 20, wireType 2 =*/162).fork()).ldelim();
            writer.uint32(/* id 21, wireType 0 =*/168).int64(message.SysTaxIncome);
            writer.uint32(/* id 22, wireType 0 =*/176).int32(message.BetTime);
            writer.uint32(/* id 23, wireType 0 =*/184).int64(message.WinLine);
            writer.uint32(/* id 24, wireType 0 =*/192).int64(message.RobotBetAmount);
            if (message.LastGameUserBet != null && message.LastGameUserBet.length)
                for (var i = 0; i < message.LastGameUserBet.length; ++i)
                    $root.GameMsg_LHD.Http_LHD_UserInfo.encode(message.LastGameUserBet[i], writer.uint32(/* id 25, wireType 2 =*/202).fork()).ldelim();
            writer.uint32(/* id 26, wireType 0 =*/208).int32(message.DragonWinRate);
            writer.uint32(/* id 27, wireType 0 =*/216).int32(message.DrawWinRate);
            writer.uint32(/* id 28, wireType 0 =*/224).int32(message.TigerWinRate);
            writer.uint32(/* id 29, wireType 0 =*/232).int64(message.FanFengTarget);
            writer.uint32(/* id 30, wireType 0 =*/240).int64(message.FanFengComplete);
            return writer;
        };

        /**
         * Encodes the specified Http_LHD_TableDetail message, length delimited. Does not implicitly {@link GameMsg_LHD.Http_LHD_TableDetail.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_LHD.Http_LHD_TableDetail
         * @static
         * @param {GameMsg_LHD.IHttp_LHD_TableDetail} message Http_LHD_TableDetail message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Http_LHD_TableDetail.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Http_LHD_TableDetail message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_LHD.Http_LHD_TableDetail
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_LHD.Http_LHD_TableDetail} Http_LHD_TableDetail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Http_LHD_TableDetail.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_LHD.Http_LHD_TableDetail();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.TableNo = reader.int32();
                    break;
                case 2:
                    message.Status = reader.int32();
                    break;
                case 3:
                    message.SumEarnAmount = reader.int64();
                    break;
                case 4:
                    message.LastEarnAmount = reader.int32();
                    break;
                case 5:
                    message.PoolCurrentAmount = reader.int64();
                    break;
                case 6:
                    message.GameUserCount = reader.int32();
                    break;
                case 7:
                    message.RobotCount = reader.int32();
                    break;
                case 8:
                    message.PopWaterRate = reader.int32();
                    break;
                case 9:
                    message.ZhuangType = reader.int32();
                    break;
                case 10:
                    message.ZhuangNickName = reader.string();
                    break;
                case 11:
                    message.ZhuangUserID = reader.int32();
                    break;
                case 12:
                    message.ZhuangSurplusTotal = reader.int32();
                    break;
                case 13:
                    message.ZhuangCurrentMoneyAmount = reader.int64();
                    break;
                case 14:
                    message.ZhuangInitMoneyAmount = reader.int64();
                    break;
                case 15:
                    message.OpenResultDragon = reader.int64();
                    break;
                case 16:
                    message.OpenResultTiger = reader.int64();
                    break;
                case 17:
                    message.OpenResultDraw = reader.int64();
                    break;
                case 18:
                    message.CurentOpenResult = reader.string();
                    break;
                case 19:
                    message.CurentOpenResultEarn = reader.int64();
                    break;
                case 20:
                    if (!(message.UserInfo && message.UserInfo.length))
                        message.UserInfo = [];
                    message.UserInfo.push($root.GameMsg_LHD.Http_LHD_UserInfo.decode(reader, reader.uint32()));
                    break;
                case 21:
                    message.SysTaxIncome = reader.int64();
                    break;
                case 22:
                    message.BetTime = reader.int32();
                    break;
                case 23:
                    message.WinLine = reader.int64();
                    break;
                case 24:
                    message.RobotBetAmount = reader.int64();
                    break;
                case 25:
                    if (!(message.LastGameUserBet && message.LastGameUserBet.length))
                        message.LastGameUserBet = [];
                    message.LastGameUserBet.push($root.GameMsg_LHD.Http_LHD_UserInfo.decode(reader, reader.uint32()));
                    break;
                case 26:
                    message.DragonWinRate = reader.int32();
                    break;
                case 27:
                    message.DrawWinRate = reader.int32();
                    break;
                case 28:
                    message.TigerWinRate = reader.int32();
                    break;
                case 29:
                    message.FanFengTarget = reader.int64();
                    break;
                case 30:
                    message.FanFengComplete = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("TableNo"))
                throw $util.ProtocolError("missing required 'TableNo'", { instance: message });
            if (!message.hasOwnProperty("Status"))
                throw $util.ProtocolError("missing required 'Status'", { instance: message });
            if (!message.hasOwnProperty("SumEarnAmount"))
                throw $util.ProtocolError("missing required 'SumEarnAmount'", { instance: message });
            if (!message.hasOwnProperty("LastEarnAmount"))
                throw $util.ProtocolError("missing required 'LastEarnAmount'", { instance: message });
            if (!message.hasOwnProperty("PoolCurrentAmount"))
                throw $util.ProtocolError("missing required 'PoolCurrentAmount'", { instance: message });
            if (!message.hasOwnProperty("GameUserCount"))
                throw $util.ProtocolError("missing required 'GameUserCount'", { instance: message });
            if (!message.hasOwnProperty("RobotCount"))
                throw $util.ProtocolError("missing required 'RobotCount'", { instance: message });
            if (!message.hasOwnProperty("PopWaterRate"))
                throw $util.ProtocolError("missing required 'PopWaterRate'", { instance: message });
            if (!message.hasOwnProperty("ZhuangType"))
                throw $util.ProtocolError("missing required 'ZhuangType'", { instance: message });
            if (!message.hasOwnProperty("ZhuangNickName"))
                throw $util.ProtocolError("missing required 'ZhuangNickName'", { instance: message });
            if (!message.hasOwnProperty("ZhuangUserID"))
                throw $util.ProtocolError("missing required 'ZhuangUserID'", { instance: message });
            if (!message.hasOwnProperty("ZhuangSurplusTotal"))
                throw $util.ProtocolError("missing required 'ZhuangSurplusTotal'", { instance: message });
            if (!message.hasOwnProperty("ZhuangCurrentMoneyAmount"))
                throw $util.ProtocolError("missing required 'ZhuangCurrentMoneyAmount'", { instance: message });
            if (!message.hasOwnProperty("ZhuangInitMoneyAmount"))
                throw $util.ProtocolError("missing required 'ZhuangInitMoneyAmount'", { instance: message });
            if (!message.hasOwnProperty("OpenResultDragon"))
                throw $util.ProtocolError("missing required 'OpenResultDragon'", { instance: message });
            if (!message.hasOwnProperty("OpenResultTiger"))
                throw $util.ProtocolError("missing required 'OpenResultTiger'", { instance: message });
            if (!message.hasOwnProperty("OpenResultDraw"))
                throw $util.ProtocolError("missing required 'OpenResultDraw'", { instance: message });
            if (!message.hasOwnProperty("CurentOpenResult"))
                throw $util.ProtocolError("missing required 'CurentOpenResult'", { instance: message });
            if (!message.hasOwnProperty("CurentOpenResultEarn"))
                throw $util.ProtocolError("missing required 'CurentOpenResultEarn'", { instance: message });
            if (!message.hasOwnProperty("SysTaxIncome"))
                throw $util.ProtocolError("missing required 'SysTaxIncome'", { instance: message });
            if (!message.hasOwnProperty("BetTime"))
                throw $util.ProtocolError("missing required 'BetTime'", { instance: message });
            if (!message.hasOwnProperty("WinLine"))
                throw $util.ProtocolError("missing required 'WinLine'", { instance: message });
            if (!message.hasOwnProperty("RobotBetAmount"))
                throw $util.ProtocolError("missing required 'RobotBetAmount'", { instance: message });
            if (!message.hasOwnProperty("DragonWinRate"))
                throw $util.ProtocolError("missing required 'DragonWinRate'", { instance: message });
            if (!message.hasOwnProperty("DrawWinRate"))
                throw $util.ProtocolError("missing required 'DrawWinRate'", { instance: message });
            if (!message.hasOwnProperty("TigerWinRate"))
                throw $util.ProtocolError("missing required 'TigerWinRate'", { instance: message });
            if (!message.hasOwnProperty("FanFengTarget"))
                throw $util.ProtocolError("missing required 'FanFengTarget'", { instance: message });
            if (!message.hasOwnProperty("FanFengComplete"))
                throw $util.ProtocolError("missing required 'FanFengComplete'", { instance: message });
            return message;
        };

        /**
         * Decodes a Http_LHD_TableDetail message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_LHD.Http_LHD_TableDetail
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_LHD.Http_LHD_TableDetail} Http_LHD_TableDetail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Http_LHD_TableDetail.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Http_LHD_TableDetail message.
         * @function verify
         * @memberof GameMsg_LHD.Http_LHD_TableDetail
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Http_LHD_TableDetail.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.TableNo))
                return "TableNo: integer expected";
            if (!$util.isInteger(message.Status))
                return "Status: integer expected";
            if (!$util.isInteger(message.SumEarnAmount) && !(message.SumEarnAmount && $util.isInteger(message.SumEarnAmount.low) && $util.isInteger(message.SumEarnAmount.high)))
                return "SumEarnAmount: integer|Long expected";
            if (!$util.isInteger(message.LastEarnAmount))
                return "LastEarnAmount: integer expected";
            if (!$util.isInteger(message.PoolCurrentAmount) && !(message.PoolCurrentAmount && $util.isInteger(message.PoolCurrentAmount.low) && $util.isInteger(message.PoolCurrentAmount.high)))
                return "PoolCurrentAmount: integer|Long expected";
            if (!$util.isInteger(message.GameUserCount))
                return "GameUserCount: integer expected";
            if (!$util.isInteger(message.RobotCount))
                return "RobotCount: integer expected";
            if (!$util.isInteger(message.PopWaterRate))
                return "PopWaterRate: integer expected";
            if (!$util.isInteger(message.ZhuangType))
                return "ZhuangType: integer expected";
            if (!$util.isString(message.ZhuangNickName))
                return "ZhuangNickName: string expected";
            if (!$util.isInteger(message.ZhuangUserID))
                return "ZhuangUserID: integer expected";
            if (!$util.isInteger(message.ZhuangSurplusTotal))
                return "ZhuangSurplusTotal: integer expected";
            if (!$util.isInteger(message.ZhuangCurrentMoneyAmount) && !(message.ZhuangCurrentMoneyAmount && $util.isInteger(message.ZhuangCurrentMoneyAmount.low) && $util.isInteger(message.ZhuangCurrentMoneyAmount.high)))
                return "ZhuangCurrentMoneyAmount: integer|Long expected";
            if (!$util.isInteger(message.ZhuangInitMoneyAmount) && !(message.ZhuangInitMoneyAmount && $util.isInteger(message.ZhuangInitMoneyAmount.low) && $util.isInteger(message.ZhuangInitMoneyAmount.high)))
                return "ZhuangInitMoneyAmount: integer|Long expected";
            if (!$util.isInteger(message.OpenResultDragon) && !(message.OpenResultDragon && $util.isInteger(message.OpenResultDragon.low) && $util.isInteger(message.OpenResultDragon.high)))
                return "OpenResultDragon: integer|Long expected";
            if (!$util.isInteger(message.OpenResultTiger) && !(message.OpenResultTiger && $util.isInteger(message.OpenResultTiger.low) && $util.isInteger(message.OpenResultTiger.high)))
                return "OpenResultTiger: integer|Long expected";
            if (!$util.isInteger(message.OpenResultDraw) && !(message.OpenResultDraw && $util.isInteger(message.OpenResultDraw.low) && $util.isInteger(message.OpenResultDraw.high)))
                return "OpenResultDraw: integer|Long expected";
            if (!$util.isString(message.CurentOpenResult))
                return "CurentOpenResult: string expected";
            if (!$util.isInteger(message.CurentOpenResultEarn) && !(message.CurentOpenResultEarn && $util.isInteger(message.CurentOpenResultEarn.low) && $util.isInteger(message.CurentOpenResultEarn.high)))
                return "CurentOpenResultEarn: integer|Long expected";
            if (message.UserInfo != null && message.hasOwnProperty("UserInfo")) {
                if (!Array.isArray(message.UserInfo))
                    return "UserInfo: array expected";
                for (var i = 0; i < message.UserInfo.length; ++i) {
                    var error = $root.GameMsg_LHD.Http_LHD_UserInfo.verify(message.UserInfo[i]);
                    if (error)
                        return "UserInfo." + error;
                }
            }
            if (!$util.isInteger(message.SysTaxIncome) && !(message.SysTaxIncome && $util.isInteger(message.SysTaxIncome.low) && $util.isInteger(message.SysTaxIncome.high)))
                return "SysTaxIncome: integer|Long expected";
            if (!$util.isInteger(message.BetTime))
                return "BetTime: integer expected";
            if (!$util.isInteger(message.WinLine) && !(message.WinLine && $util.isInteger(message.WinLine.low) && $util.isInteger(message.WinLine.high)))
                return "WinLine: integer|Long expected";
            if (!$util.isInteger(message.RobotBetAmount) && !(message.RobotBetAmount && $util.isInteger(message.RobotBetAmount.low) && $util.isInteger(message.RobotBetAmount.high)))
                return "RobotBetAmount: integer|Long expected";
            if (message.LastGameUserBet != null && message.hasOwnProperty("LastGameUserBet")) {
                if (!Array.isArray(message.LastGameUserBet))
                    return "LastGameUserBet: array expected";
                for (var i = 0; i < message.LastGameUserBet.length; ++i) {
                    var error = $root.GameMsg_LHD.Http_LHD_UserInfo.verify(message.LastGameUserBet[i]);
                    if (error)
                        return "LastGameUserBet." + error;
                }
            }
            if (!$util.isInteger(message.DragonWinRate))
                return "DragonWinRate: integer expected";
            if (!$util.isInteger(message.DrawWinRate))
                return "DrawWinRate: integer expected";
            if (!$util.isInteger(message.TigerWinRate))
                return "TigerWinRate: integer expected";
            if (!$util.isInteger(message.FanFengTarget) && !(message.FanFengTarget && $util.isInteger(message.FanFengTarget.low) && $util.isInteger(message.FanFengTarget.high)))
                return "FanFengTarget: integer|Long expected";
            if (!$util.isInteger(message.FanFengComplete) && !(message.FanFengComplete && $util.isInteger(message.FanFengComplete.low) && $util.isInteger(message.FanFengComplete.high)))
                return "FanFengComplete: integer|Long expected";
            return null;
        };

        /**
         * Creates a Http_LHD_TableDetail message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_LHD.Http_LHD_TableDetail
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_LHD.Http_LHD_TableDetail} Http_LHD_TableDetail
         */
        Http_LHD_TableDetail.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_LHD.Http_LHD_TableDetail)
                return object;
            var message = new $root.GameMsg_LHD.Http_LHD_TableDetail();
            if (object.TableNo != null)
                message.TableNo = object.TableNo | 0;
            if (object.Status != null)
                message.Status = object.Status | 0;
            if (object.SumEarnAmount != null)
                if ($util.Long)
                    (message.SumEarnAmount = $util.Long.fromValue(object.SumEarnAmount)).unsigned = false;
                else if (typeof object.SumEarnAmount === "string")
                    message.SumEarnAmount = parseInt(object.SumEarnAmount, 10);
                else if (typeof object.SumEarnAmount === "number")
                    message.SumEarnAmount = object.SumEarnAmount;
                else if (typeof object.SumEarnAmount === "object")
                    message.SumEarnAmount = new $util.LongBits(object.SumEarnAmount.low >>> 0, object.SumEarnAmount.high >>> 0).toNumber();
            if (object.LastEarnAmount != null)
                message.LastEarnAmount = object.LastEarnAmount | 0;
            if (object.PoolCurrentAmount != null)
                if ($util.Long)
                    (message.PoolCurrentAmount = $util.Long.fromValue(object.PoolCurrentAmount)).unsigned = false;
                else if (typeof object.PoolCurrentAmount === "string")
                    message.PoolCurrentAmount = parseInt(object.PoolCurrentAmount, 10);
                else if (typeof object.PoolCurrentAmount === "number")
                    message.PoolCurrentAmount = object.PoolCurrentAmount;
                else if (typeof object.PoolCurrentAmount === "object")
                    message.PoolCurrentAmount = new $util.LongBits(object.PoolCurrentAmount.low >>> 0, object.PoolCurrentAmount.high >>> 0).toNumber();
            if (object.GameUserCount != null)
                message.GameUserCount = object.GameUserCount | 0;
            if (object.RobotCount != null)
                message.RobotCount = object.RobotCount | 0;
            if (object.PopWaterRate != null)
                message.PopWaterRate = object.PopWaterRate | 0;
            if (object.ZhuangType != null)
                message.ZhuangType = object.ZhuangType | 0;
            if (object.ZhuangNickName != null)
                message.ZhuangNickName = String(object.ZhuangNickName);
            if (object.ZhuangUserID != null)
                message.ZhuangUserID = object.ZhuangUserID | 0;
            if (object.ZhuangSurplusTotal != null)
                message.ZhuangSurplusTotal = object.ZhuangSurplusTotal | 0;
            if (object.ZhuangCurrentMoneyAmount != null)
                if ($util.Long)
                    (message.ZhuangCurrentMoneyAmount = $util.Long.fromValue(object.ZhuangCurrentMoneyAmount)).unsigned = false;
                else if (typeof object.ZhuangCurrentMoneyAmount === "string")
                    message.ZhuangCurrentMoneyAmount = parseInt(object.ZhuangCurrentMoneyAmount, 10);
                else if (typeof object.ZhuangCurrentMoneyAmount === "number")
                    message.ZhuangCurrentMoneyAmount = object.ZhuangCurrentMoneyAmount;
                else if (typeof object.ZhuangCurrentMoneyAmount === "object")
                    message.ZhuangCurrentMoneyAmount = new $util.LongBits(object.ZhuangCurrentMoneyAmount.low >>> 0, object.ZhuangCurrentMoneyAmount.high >>> 0).toNumber();
            if (object.ZhuangInitMoneyAmount != null)
                if ($util.Long)
                    (message.ZhuangInitMoneyAmount = $util.Long.fromValue(object.ZhuangInitMoneyAmount)).unsigned = false;
                else if (typeof object.ZhuangInitMoneyAmount === "string")
                    message.ZhuangInitMoneyAmount = parseInt(object.ZhuangInitMoneyAmount, 10);
                else if (typeof object.ZhuangInitMoneyAmount === "number")
                    message.ZhuangInitMoneyAmount = object.ZhuangInitMoneyAmount;
                else if (typeof object.ZhuangInitMoneyAmount === "object")
                    message.ZhuangInitMoneyAmount = new $util.LongBits(object.ZhuangInitMoneyAmount.low >>> 0, object.ZhuangInitMoneyAmount.high >>> 0).toNumber();
            if (object.OpenResultDragon != null)
                if ($util.Long)
                    (message.OpenResultDragon = $util.Long.fromValue(object.OpenResultDragon)).unsigned = false;
                else if (typeof object.OpenResultDragon === "string")
                    message.OpenResultDragon = parseInt(object.OpenResultDragon, 10);
                else if (typeof object.OpenResultDragon === "number")
                    message.OpenResultDragon = object.OpenResultDragon;
                else if (typeof object.OpenResultDragon === "object")
                    message.OpenResultDragon = new $util.LongBits(object.OpenResultDragon.low >>> 0, object.OpenResultDragon.high >>> 0).toNumber();
            if (object.OpenResultTiger != null)
                if ($util.Long)
                    (message.OpenResultTiger = $util.Long.fromValue(object.OpenResultTiger)).unsigned = false;
                else if (typeof object.OpenResultTiger === "string")
                    message.OpenResultTiger = parseInt(object.OpenResultTiger, 10);
                else if (typeof object.OpenResultTiger === "number")
                    message.OpenResultTiger = object.OpenResultTiger;
                else if (typeof object.OpenResultTiger === "object")
                    message.OpenResultTiger = new $util.LongBits(object.OpenResultTiger.low >>> 0, object.OpenResultTiger.high >>> 0).toNumber();
            if (object.OpenResultDraw != null)
                if ($util.Long)
                    (message.OpenResultDraw = $util.Long.fromValue(object.OpenResultDraw)).unsigned = false;
                else if (typeof object.OpenResultDraw === "string")
                    message.OpenResultDraw = parseInt(object.OpenResultDraw, 10);
                else if (typeof object.OpenResultDraw === "number")
                    message.OpenResultDraw = object.OpenResultDraw;
                else if (typeof object.OpenResultDraw === "object")
                    message.OpenResultDraw = new $util.LongBits(object.OpenResultDraw.low >>> 0, object.OpenResultDraw.high >>> 0).toNumber();
            if (object.CurentOpenResult != null)
                message.CurentOpenResult = String(object.CurentOpenResult);
            if (object.CurentOpenResultEarn != null)
                if ($util.Long)
                    (message.CurentOpenResultEarn = $util.Long.fromValue(object.CurentOpenResultEarn)).unsigned = false;
                else if (typeof object.CurentOpenResultEarn === "string")
                    message.CurentOpenResultEarn = parseInt(object.CurentOpenResultEarn, 10);
                else if (typeof object.CurentOpenResultEarn === "number")
                    message.CurentOpenResultEarn = object.CurentOpenResultEarn;
                else if (typeof object.CurentOpenResultEarn === "object")
                    message.CurentOpenResultEarn = new $util.LongBits(object.CurentOpenResultEarn.low >>> 0, object.CurentOpenResultEarn.high >>> 0).toNumber();
            if (object.UserInfo) {
                if (!Array.isArray(object.UserInfo))
                    throw TypeError(".GameMsg_LHD.Http_LHD_TableDetail.UserInfo: array expected");
                message.UserInfo = [];
                for (var i = 0; i < object.UserInfo.length; ++i) {
                    if (typeof object.UserInfo[i] !== "object")
                        throw TypeError(".GameMsg_LHD.Http_LHD_TableDetail.UserInfo: object expected");
                    message.UserInfo[i] = $root.GameMsg_LHD.Http_LHD_UserInfo.fromObject(object.UserInfo[i]);
                }
            }
            if (object.SysTaxIncome != null)
                if ($util.Long)
                    (message.SysTaxIncome = $util.Long.fromValue(object.SysTaxIncome)).unsigned = false;
                else if (typeof object.SysTaxIncome === "string")
                    message.SysTaxIncome = parseInt(object.SysTaxIncome, 10);
                else if (typeof object.SysTaxIncome === "number")
                    message.SysTaxIncome = object.SysTaxIncome;
                else if (typeof object.SysTaxIncome === "object")
                    message.SysTaxIncome = new $util.LongBits(object.SysTaxIncome.low >>> 0, object.SysTaxIncome.high >>> 0).toNumber();
            if (object.BetTime != null)
                message.BetTime = object.BetTime | 0;
            if (object.WinLine != null)
                if ($util.Long)
                    (message.WinLine = $util.Long.fromValue(object.WinLine)).unsigned = false;
                else if (typeof object.WinLine === "string")
                    message.WinLine = parseInt(object.WinLine, 10);
                else if (typeof object.WinLine === "number")
                    message.WinLine = object.WinLine;
                else if (typeof object.WinLine === "object")
                    message.WinLine = new $util.LongBits(object.WinLine.low >>> 0, object.WinLine.high >>> 0).toNumber();
            if (object.RobotBetAmount != null)
                if ($util.Long)
                    (message.RobotBetAmount = $util.Long.fromValue(object.RobotBetAmount)).unsigned = false;
                else if (typeof object.RobotBetAmount === "string")
                    message.RobotBetAmount = parseInt(object.RobotBetAmount, 10);
                else if (typeof object.RobotBetAmount === "number")
                    message.RobotBetAmount = object.RobotBetAmount;
                else if (typeof object.RobotBetAmount === "object")
                    message.RobotBetAmount = new $util.LongBits(object.RobotBetAmount.low >>> 0, object.RobotBetAmount.high >>> 0).toNumber();
            if (object.LastGameUserBet) {
                if (!Array.isArray(object.LastGameUserBet))
                    throw TypeError(".GameMsg_LHD.Http_LHD_TableDetail.LastGameUserBet: array expected");
                message.LastGameUserBet = [];
                for (var i = 0; i < object.LastGameUserBet.length; ++i) {
                    if (typeof object.LastGameUserBet[i] !== "object")
                        throw TypeError(".GameMsg_LHD.Http_LHD_TableDetail.LastGameUserBet: object expected");
                    message.LastGameUserBet[i] = $root.GameMsg_LHD.Http_LHD_UserInfo.fromObject(object.LastGameUserBet[i]);
                }
            }
            if (object.DragonWinRate != null)
                message.DragonWinRate = object.DragonWinRate | 0;
            if (object.DrawWinRate != null)
                message.DrawWinRate = object.DrawWinRate | 0;
            if (object.TigerWinRate != null)
                message.TigerWinRate = object.TigerWinRate | 0;
            if (object.FanFengTarget != null)
                if ($util.Long)
                    (message.FanFengTarget = $util.Long.fromValue(object.FanFengTarget)).unsigned = false;
                else if (typeof object.FanFengTarget === "string")
                    message.FanFengTarget = parseInt(object.FanFengTarget, 10);
                else if (typeof object.FanFengTarget === "number")
                    message.FanFengTarget = object.FanFengTarget;
                else if (typeof object.FanFengTarget === "object")
                    message.FanFengTarget = new $util.LongBits(object.FanFengTarget.low >>> 0, object.FanFengTarget.high >>> 0).toNumber();
            if (object.FanFengComplete != null)
                if ($util.Long)
                    (message.FanFengComplete = $util.Long.fromValue(object.FanFengComplete)).unsigned = false;
                else if (typeof object.FanFengComplete === "string")
                    message.FanFengComplete = parseInt(object.FanFengComplete, 10);
                else if (typeof object.FanFengComplete === "number")
                    message.FanFengComplete = object.FanFengComplete;
                else if (typeof object.FanFengComplete === "object")
                    message.FanFengComplete = new $util.LongBits(object.FanFengComplete.low >>> 0, object.FanFengComplete.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a Http_LHD_TableDetail message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_LHD.Http_LHD_TableDetail
         * @static
         * @param {GameMsg_LHD.Http_LHD_TableDetail} message Http_LHD_TableDetail
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Http_LHD_TableDetail.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.UserInfo = [];
                object.LastGameUserBet = [];
            }
            if (options.defaults) {
                object.TableNo = 0;
                object.Status = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.SumEarnAmount = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.SumEarnAmount = options.longs === String ? "0" : 0;
                object.LastEarnAmount = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.PoolCurrentAmount = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.PoolCurrentAmount = options.longs === String ? "0" : 0;
                object.GameUserCount = 0;
                object.RobotCount = 0;
                object.PopWaterRate = 0;
                object.ZhuangType = 0;
                object.ZhuangNickName = "";
                object.ZhuangUserID = 0;
                object.ZhuangSurplusTotal = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.ZhuangCurrentMoneyAmount = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.ZhuangCurrentMoneyAmount = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.ZhuangInitMoneyAmount = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.ZhuangInitMoneyAmount = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.OpenResultDragon = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.OpenResultDragon = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.OpenResultTiger = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.OpenResultTiger = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.OpenResultDraw = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.OpenResultDraw = options.longs === String ? "0" : 0;
                object.CurentOpenResult = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.CurentOpenResultEarn = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.CurentOpenResultEarn = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.SysTaxIncome = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.SysTaxIncome = options.longs === String ? "0" : 0;
                object.BetTime = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.WinLine = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.WinLine = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.RobotBetAmount = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.RobotBetAmount = options.longs === String ? "0" : 0;
                object.DragonWinRate = 0;
                object.DrawWinRate = 0;
                object.TigerWinRate = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.FanFengTarget = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.FanFengTarget = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.FanFengComplete = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.FanFengComplete = options.longs === String ? "0" : 0;
            }
            if (message.TableNo != null && message.hasOwnProperty("TableNo"))
                object.TableNo = message.TableNo;
            if (message.Status != null && message.hasOwnProperty("Status"))
                object.Status = message.Status;
            if (message.SumEarnAmount != null && message.hasOwnProperty("SumEarnAmount"))
                if (typeof message.SumEarnAmount === "number")
                    object.SumEarnAmount = options.longs === String ? String(message.SumEarnAmount) : message.SumEarnAmount;
                else
                    object.SumEarnAmount = options.longs === String ? $util.Long.prototype.toString.call(message.SumEarnAmount) : options.longs === Number ? new $util.LongBits(message.SumEarnAmount.low >>> 0, message.SumEarnAmount.high >>> 0).toNumber() : message.SumEarnAmount;
            if (message.LastEarnAmount != null && message.hasOwnProperty("LastEarnAmount"))
                object.LastEarnAmount = message.LastEarnAmount;
            if (message.PoolCurrentAmount != null && message.hasOwnProperty("PoolCurrentAmount"))
                if (typeof message.PoolCurrentAmount === "number")
                    object.PoolCurrentAmount = options.longs === String ? String(message.PoolCurrentAmount) : message.PoolCurrentAmount;
                else
                    object.PoolCurrentAmount = options.longs === String ? $util.Long.prototype.toString.call(message.PoolCurrentAmount) : options.longs === Number ? new $util.LongBits(message.PoolCurrentAmount.low >>> 0, message.PoolCurrentAmount.high >>> 0).toNumber() : message.PoolCurrentAmount;
            if (message.GameUserCount != null && message.hasOwnProperty("GameUserCount"))
                object.GameUserCount = message.GameUserCount;
            if (message.RobotCount != null && message.hasOwnProperty("RobotCount"))
                object.RobotCount = message.RobotCount;
            if (message.PopWaterRate != null && message.hasOwnProperty("PopWaterRate"))
                object.PopWaterRate = message.PopWaterRate;
            if (message.ZhuangType != null && message.hasOwnProperty("ZhuangType"))
                object.ZhuangType = message.ZhuangType;
            if (message.ZhuangNickName != null && message.hasOwnProperty("ZhuangNickName"))
                object.ZhuangNickName = message.ZhuangNickName;
            if (message.ZhuangUserID != null && message.hasOwnProperty("ZhuangUserID"))
                object.ZhuangUserID = message.ZhuangUserID;
            if (message.ZhuangSurplusTotal != null && message.hasOwnProperty("ZhuangSurplusTotal"))
                object.ZhuangSurplusTotal = message.ZhuangSurplusTotal;
            if (message.ZhuangCurrentMoneyAmount != null && message.hasOwnProperty("ZhuangCurrentMoneyAmount"))
                if (typeof message.ZhuangCurrentMoneyAmount === "number")
                    object.ZhuangCurrentMoneyAmount = options.longs === String ? String(message.ZhuangCurrentMoneyAmount) : message.ZhuangCurrentMoneyAmount;
                else
                    object.ZhuangCurrentMoneyAmount = options.longs === String ? $util.Long.prototype.toString.call(message.ZhuangCurrentMoneyAmount) : options.longs === Number ? new $util.LongBits(message.ZhuangCurrentMoneyAmount.low >>> 0, message.ZhuangCurrentMoneyAmount.high >>> 0).toNumber() : message.ZhuangCurrentMoneyAmount;
            if (message.ZhuangInitMoneyAmount != null && message.hasOwnProperty("ZhuangInitMoneyAmount"))
                if (typeof message.ZhuangInitMoneyAmount === "number")
                    object.ZhuangInitMoneyAmount = options.longs === String ? String(message.ZhuangInitMoneyAmount) : message.ZhuangInitMoneyAmount;
                else
                    object.ZhuangInitMoneyAmount = options.longs === String ? $util.Long.prototype.toString.call(message.ZhuangInitMoneyAmount) : options.longs === Number ? new $util.LongBits(message.ZhuangInitMoneyAmount.low >>> 0, message.ZhuangInitMoneyAmount.high >>> 0).toNumber() : message.ZhuangInitMoneyAmount;
            if (message.OpenResultDragon != null && message.hasOwnProperty("OpenResultDragon"))
                if (typeof message.OpenResultDragon === "number")
                    object.OpenResultDragon = options.longs === String ? String(message.OpenResultDragon) : message.OpenResultDragon;
                else
                    object.OpenResultDragon = options.longs === String ? $util.Long.prototype.toString.call(message.OpenResultDragon) : options.longs === Number ? new $util.LongBits(message.OpenResultDragon.low >>> 0, message.OpenResultDragon.high >>> 0).toNumber() : message.OpenResultDragon;
            if (message.OpenResultTiger != null && message.hasOwnProperty("OpenResultTiger"))
                if (typeof message.OpenResultTiger === "number")
                    object.OpenResultTiger = options.longs === String ? String(message.OpenResultTiger) : message.OpenResultTiger;
                else
                    object.OpenResultTiger = options.longs === String ? $util.Long.prototype.toString.call(message.OpenResultTiger) : options.longs === Number ? new $util.LongBits(message.OpenResultTiger.low >>> 0, message.OpenResultTiger.high >>> 0).toNumber() : message.OpenResultTiger;
            if (message.OpenResultDraw != null && message.hasOwnProperty("OpenResultDraw"))
                if (typeof message.OpenResultDraw === "number")
                    object.OpenResultDraw = options.longs === String ? String(message.OpenResultDraw) : message.OpenResultDraw;
                else
                    object.OpenResultDraw = options.longs === String ? $util.Long.prototype.toString.call(message.OpenResultDraw) : options.longs === Number ? new $util.LongBits(message.OpenResultDraw.low >>> 0, message.OpenResultDraw.high >>> 0).toNumber() : message.OpenResultDraw;
            if (message.CurentOpenResult != null && message.hasOwnProperty("CurentOpenResult"))
                object.CurentOpenResult = message.CurentOpenResult;
            if (message.CurentOpenResultEarn != null && message.hasOwnProperty("CurentOpenResultEarn"))
                if (typeof message.CurentOpenResultEarn === "number")
                    object.CurentOpenResultEarn = options.longs === String ? String(message.CurentOpenResultEarn) : message.CurentOpenResultEarn;
                else
                    object.CurentOpenResultEarn = options.longs === String ? $util.Long.prototype.toString.call(message.CurentOpenResultEarn) : options.longs === Number ? new $util.LongBits(message.CurentOpenResultEarn.low >>> 0, message.CurentOpenResultEarn.high >>> 0).toNumber() : message.CurentOpenResultEarn;
            if (message.UserInfo && message.UserInfo.length) {
                object.UserInfo = [];
                for (var j = 0; j < message.UserInfo.length; ++j)
                    object.UserInfo[j] = $root.GameMsg_LHD.Http_LHD_UserInfo.toObject(message.UserInfo[j], options);
            }
            if (message.SysTaxIncome != null && message.hasOwnProperty("SysTaxIncome"))
                if (typeof message.SysTaxIncome === "number")
                    object.SysTaxIncome = options.longs === String ? String(message.SysTaxIncome) : message.SysTaxIncome;
                else
                    object.SysTaxIncome = options.longs === String ? $util.Long.prototype.toString.call(message.SysTaxIncome) : options.longs === Number ? new $util.LongBits(message.SysTaxIncome.low >>> 0, message.SysTaxIncome.high >>> 0).toNumber() : message.SysTaxIncome;
            if (message.BetTime != null && message.hasOwnProperty("BetTime"))
                object.BetTime = message.BetTime;
            if (message.WinLine != null && message.hasOwnProperty("WinLine"))
                if (typeof message.WinLine === "number")
                    object.WinLine = options.longs === String ? String(message.WinLine) : message.WinLine;
                else
                    object.WinLine = options.longs === String ? $util.Long.prototype.toString.call(message.WinLine) : options.longs === Number ? new $util.LongBits(message.WinLine.low >>> 0, message.WinLine.high >>> 0).toNumber() : message.WinLine;
            if (message.RobotBetAmount != null && message.hasOwnProperty("RobotBetAmount"))
                if (typeof message.RobotBetAmount === "number")
                    object.RobotBetAmount = options.longs === String ? String(message.RobotBetAmount) : message.RobotBetAmount;
                else
                    object.RobotBetAmount = options.longs === String ? $util.Long.prototype.toString.call(message.RobotBetAmount) : options.longs === Number ? new $util.LongBits(message.RobotBetAmount.low >>> 0, message.RobotBetAmount.high >>> 0).toNumber() : message.RobotBetAmount;
            if (message.LastGameUserBet && message.LastGameUserBet.length) {
                object.LastGameUserBet = [];
                for (var j = 0; j < message.LastGameUserBet.length; ++j)
                    object.LastGameUserBet[j] = $root.GameMsg_LHD.Http_LHD_UserInfo.toObject(message.LastGameUserBet[j], options);
            }
            if (message.DragonWinRate != null && message.hasOwnProperty("DragonWinRate"))
                object.DragonWinRate = message.DragonWinRate;
            if (message.DrawWinRate != null && message.hasOwnProperty("DrawWinRate"))
                object.DrawWinRate = message.DrawWinRate;
            if (message.TigerWinRate != null && message.hasOwnProperty("TigerWinRate"))
                object.TigerWinRate = message.TigerWinRate;
            if (message.FanFengTarget != null && message.hasOwnProperty("FanFengTarget"))
                if (typeof message.FanFengTarget === "number")
                    object.FanFengTarget = options.longs === String ? String(message.FanFengTarget) : message.FanFengTarget;
                else
                    object.FanFengTarget = options.longs === String ? $util.Long.prototype.toString.call(message.FanFengTarget) : options.longs === Number ? new $util.LongBits(message.FanFengTarget.low >>> 0, message.FanFengTarget.high >>> 0).toNumber() : message.FanFengTarget;
            if (message.FanFengComplete != null && message.hasOwnProperty("FanFengComplete"))
                if (typeof message.FanFengComplete === "number")
                    object.FanFengComplete = options.longs === String ? String(message.FanFengComplete) : message.FanFengComplete;
                else
                    object.FanFengComplete = options.longs === String ? $util.Long.prototype.toString.call(message.FanFengComplete) : options.longs === Number ? new $util.LongBits(message.FanFengComplete.low >>> 0, message.FanFengComplete.high >>> 0).toNumber() : message.FanFengComplete;
            return object;
        };

        /**
         * Converts this Http_LHD_TableDetail to JSON.
         * @function toJSON
         * @memberof GameMsg_LHD.Http_LHD_TableDetail
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Http_LHD_TableDetail.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Http_LHD_TableDetail;
    })();

    GameMsg_LHD.Http_LHD_UserInfo = (function() {

        /**
         * Properties of a Http_LHD_UserInfo.
         * @memberof GameMsg_LHD
         * @interface IHttp_LHD_UserInfo
         * @property {number} UserID Http_LHD_UserInfo UserID
         * @property {number} UserType Http_LHD_UserInfo UserType
         * @property {string} NickName Http_LHD_UserInfo NickName
         * @property {number|Long} GameScore Http_LHD_UserInfo GameScore
         * @property {number|Long} InitMoney Http_LHD_UserInfo InitMoney
         * @property {number|Long} CurrentMoney Http_LHD_UserInfo CurrentMoney
         * @property {number|Long} BetInfoDragon Http_LHD_UserInfo BetInfoDragon
         * @property {number|Long} BetInfoTiger Http_LHD_UserInfo BetInfoTiger
         * @property {number|Long} BetInfoDraw Http_LHD_UserInfo BetInfoDraw
         * @property {number|Long} SumCharge Http_LHD_UserInfo SumCharge
         * @property {number|Long} SumConvert Http_LHD_UserInfo SumConvert
         * @property {number|Long} WinRate Http_LHD_UserInfo WinRate
         * @property {number|Long} BetTotal Http_LHD_UserInfo BetTotal
         * @property {boolean} IsVIP Http_LHD_UserInfo IsVIP
         */

        /**
         * Constructs a new Http_LHD_UserInfo.
         * @memberof GameMsg_LHD
         * @classdesc Represents a Http_LHD_UserInfo.
         * @implements IHttp_LHD_UserInfo
         * @constructor
         * @param {GameMsg_LHD.IHttp_LHD_UserInfo=} [properties] Properties to set
         */
        function Http_LHD_UserInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Http_LHD_UserInfo UserID.
         * @member {number} UserID
         * @memberof GameMsg_LHD.Http_LHD_UserInfo
         * @instance
         */
        Http_LHD_UserInfo.prototype.UserID = 0;

        /**
         * Http_LHD_UserInfo UserType.
         * @member {number} UserType
         * @memberof GameMsg_LHD.Http_LHD_UserInfo
         * @instance
         */
        Http_LHD_UserInfo.prototype.UserType = 0;

        /**
         * Http_LHD_UserInfo NickName.
         * @member {string} NickName
         * @memberof GameMsg_LHD.Http_LHD_UserInfo
         * @instance
         */
        Http_LHD_UserInfo.prototype.NickName = "";

        /**
         * Http_LHD_UserInfo GameScore.
         * @member {number|Long} GameScore
         * @memberof GameMsg_LHD.Http_LHD_UserInfo
         * @instance
         */
        Http_LHD_UserInfo.prototype.GameScore = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Http_LHD_UserInfo InitMoney.
         * @member {number|Long} InitMoney
         * @memberof GameMsg_LHD.Http_LHD_UserInfo
         * @instance
         */
        Http_LHD_UserInfo.prototype.InitMoney = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Http_LHD_UserInfo CurrentMoney.
         * @member {number|Long} CurrentMoney
         * @memberof GameMsg_LHD.Http_LHD_UserInfo
         * @instance
         */
        Http_LHD_UserInfo.prototype.CurrentMoney = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Http_LHD_UserInfo BetInfoDragon.
         * @member {number|Long} BetInfoDragon
         * @memberof GameMsg_LHD.Http_LHD_UserInfo
         * @instance
         */
        Http_LHD_UserInfo.prototype.BetInfoDragon = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Http_LHD_UserInfo BetInfoTiger.
         * @member {number|Long} BetInfoTiger
         * @memberof GameMsg_LHD.Http_LHD_UserInfo
         * @instance
         */
        Http_LHD_UserInfo.prototype.BetInfoTiger = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Http_LHD_UserInfo BetInfoDraw.
         * @member {number|Long} BetInfoDraw
         * @memberof GameMsg_LHD.Http_LHD_UserInfo
         * @instance
         */
        Http_LHD_UserInfo.prototype.BetInfoDraw = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Http_LHD_UserInfo SumCharge.
         * @member {number|Long} SumCharge
         * @memberof GameMsg_LHD.Http_LHD_UserInfo
         * @instance
         */
        Http_LHD_UserInfo.prototype.SumCharge = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Http_LHD_UserInfo SumConvert.
         * @member {number|Long} SumConvert
         * @memberof GameMsg_LHD.Http_LHD_UserInfo
         * @instance
         */
        Http_LHD_UserInfo.prototype.SumConvert = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Http_LHD_UserInfo WinRate.
         * @member {number|Long} WinRate
         * @memberof GameMsg_LHD.Http_LHD_UserInfo
         * @instance
         */
        Http_LHD_UserInfo.prototype.WinRate = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Http_LHD_UserInfo BetTotal.
         * @member {number|Long} BetTotal
         * @memberof GameMsg_LHD.Http_LHD_UserInfo
         * @instance
         */
        Http_LHD_UserInfo.prototype.BetTotal = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Http_LHD_UserInfo IsVIP.
         * @member {boolean} IsVIP
         * @memberof GameMsg_LHD.Http_LHD_UserInfo
         * @instance
         */
        Http_LHD_UserInfo.prototype.IsVIP = false;

        /**
         * Creates a new Http_LHD_UserInfo instance using the specified properties.
         * @function create
         * @memberof GameMsg_LHD.Http_LHD_UserInfo
         * @static
         * @param {GameMsg_LHD.IHttp_LHD_UserInfo=} [properties] Properties to set
         * @returns {GameMsg_LHD.Http_LHD_UserInfo} Http_LHD_UserInfo instance
         */
        Http_LHD_UserInfo.create = function create(properties) {
            return new Http_LHD_UserInfo(properties);
        };

        /**
         * Encodes the specified Http_LHD_UserInfo message. Does not implicitly {@link GameMsg_LHD.Http_LHD_UserInfo.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_LHD.Http_LHD_UserInfo
         * @static
         * @param {GameMsg_LHD.IHttp_LHD_UserInfo} message Http_LHD_UserInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Http_LHD_UserInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.UserID);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.UserType);
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.NickName);
            writer.uint32(/* id 4, wireType 0 =*/32).int64(message.GameScore);
            writer.uint32(/* id 5, wireType 0 =*/40).int64(message.InitMoney);
            writer.uint32(/* id 6, wireType 0 =*/48).int64(message.CurrentMoney);
            writer.uint32(/* id 7, wireType 0 =*/56).int64(message.BetInfoDragon);
            writer.uint32(/* id 8, wireType 0 =*/64).int64(message.BetInfoTiger);
            writer.uint32(/* id 9, wireType 0 =*/72).int64(message.BetInfoDraw);
            writer.uint32(/* id 10, wireType 0 =*/80).int64(message.SumCharge);
            writer.uint32(/* id 11, wireType 0 =*/88).int64(message.SumConvert);
            writer.uint32(/* id 13, wireType 0 =*/104).int64(message.WinRate);
            writer.uint32(/* id 14, wireType 0 =*/112).int64(message.BetTotal);
            writer.uint32(/* id 15, wireType 0 =*/120).bool(message.IsVIP);
            return writer;
        };

        /**
         * Encodes the specified Http_LHD_UserInfo message, length delimited. Does not implicitly {@link GameMsg_LHD.Http_LHD_UserInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_LHD.Http_LHD_UserInfo
         * @static
         * @param {GameMsg_LHD.IHttp_LHD_UserInfo} message Http_LHD_UserInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Http_LHD_UserInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Http_LHD_UserInfo message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_LHD.Http_LHD_UserInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_LHD.Http_LHD_UserInfo} Http_LHD_UserInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Http_LHD_UserInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_LHD.Http_LHD_UserInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.UserID = reader.int32();
                    break;
                case 2:
                    message.UserType = reader.int32();
                    break;
                case 3:
                    message.NickName = reader.string();
                    break;
                case 4:
                    message.GameScore = reader.int64();
                    break;
                case 5:
                    message.InitMoney = reader.int64();
                    break;
                case 6:
                    message.CurrentMoney = reader.int64();
                    break;
                case 7:
                    message.BetInfoDragon = reader.int64();
                    break;
                case 8:
                    message.BetInfoTiger = reader.int64();
                    break;
                case 9:
                    message.BetInfoDraw = reader.int64();
                    break;
                case 10:
                    message.SumCharge = reader.int64();
                    break;
                case 11:
                    message.SumConvert = reader.int64();
                    break;
                case 13:
                    message.WinRate = reader.int64();
                    break;
                case 14:
                    message.BetTotal = reader.int64();
                    break;
                case 15:
                    message.IsVIP = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("UserID"))
                throw $util.ProtocolError("missing required 'UserID'", { instance: message });
            if (!message.hasOwnProperty("UserType"))
                throw $util.ProtocolError("missing required 'UserType'", { instance: message });
            if (!message.hasOwnProperty("NickName"))
                throw $util.ProtocolError("missing required 'NickName'", { instance: message });
            if (!message.hasOwnProperty("GameScore"))
                throw $util.ProtocolError("missing required 'GameScore'", { instance: message });
            if (!message.hasOwnProperty("InitMoney"))
                throw $util.ProtocolError("missing required 'InitMoney'", { instance: message });
            if (!message.hasOwnProperty("CurrentMoney"))
                throw $util.ProtocolError("missing required 'CurrentMoney'", { instance: message });
            if (!message.hasOwnProperty("BetInfoDragon"))
                throw $util.ProtocolError("missing required 'BetInfoDragon'", { instance: message });
            if (!message.hasOwnProperty("BetInfoTiger"))
                throw $util.ProtocolError("missing required 'BetInfoTiger'", { instance: message });
            if (!message.hasOwnProperty("BetInfoDraw"))
                throw $util.ProtocolError("missing required 'BetInfoDraw'", { instance: message });
            if (!message.hasOwnProperty("SumCharge"))
                throw $util.ProtocolError("missing required 'SumCharge'", { instance: message });
            if (!message.hasOwnProperty("SumConvert"))
                throw $util.ProtocolError("missing required 'SumConvert'", { instance: message });
            if (!message.hasOwnProperty("WinRate"))
                throw $util.ProtocolError("missing required 'WinRate'", { instance: message });
            if (!message.hasOwnProperty("BetTotal"))
                throw $util.ProtocolError("missing required 'BetTotal'", { instance: message });
            if (!message.hasOwnProperty("IsVIP"))
                throw $util.ProtocolError("missing required 'IsVIP'", { instance: message });
            return message;
        };

        /**
         * Decodes a Http_LHD_UserInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_LHD.Http_LHD_UserInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_LHD.Http_LHD_UserInfo} Http_LHD_UserInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Http_LHD_UserInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Http_LHD_UserInfo message.
         * @function verify
         * @memberof GameMsg_LHD.Http_LHD_UserInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Http_LHD_UserInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.UserID))
                return "UserID: integer expected";
            if (!$util.isInteger(message.UserType))
                return "UserType: integer expected";
            if (!$util.isString(message.NickName))
                return "NickName: string expected";
            if (!$util.isInteger(message.GameScore) && !(message.GameScore && $util.isInteger(message.GameScore.low) && $util.isInteger(message.GameScore.high)))
                return "GameScore: integer|Long expected";
            if (!$util.isInteger(message.InitMoney) && !(message.InitMoney && $util.isInteger(message.InitMoney.low) && $util.isInteger(message.InitMoney.high)))
                return "InitMoney: integer|Long expected";
            if (!$util.isInteger(message.CurrentMoney) && !(message.CurrentMoney && $util.isInteger(message.CurrentMoney.low) && $util.isInteger(message.CurrentMoney.high)))
                return "CurrentMoney: integer|Long expected";
            if (!$util.isInteger(message.BetInfoDragon) && !(message.BetInfoDragon && $util.isInteger(message.BetInfoDragon.low) && $util.isInteger(message.BetInfoDragon.high)))
                return "BetInfoDragon: integer|Long expected";
            if (!$util.isInteger(message.BetInfoTiger) && !(message.BetInfoTiger && $util.isInteger(message.BetInfoTiger.low) && $util.isInteger(message.BetInfoTiger.high)))
                return "BetInfoTiger: integer|Long expected";
            if (!$util.isInteger(message.BetInfoDraw) && !(message.BetInfoDraw && $util.isInteger(message.BetInfoDraw.low) && $util.isInteger(message.BetInfoDraw.high)))
                return "BetInfoDraw: integer|Long expected";
            if (!$util.isInteger(message.SumCharge) && !(message.SumCharge && $util.isInteger(message.SumCharge.low) && $util.isInteger(message.SumCharge.high)))
                return "SumCharge: integer|Long expected";
            if (!$util.isInteger(message.SumConvert) && !(message.SumConvert && $util.isInteger(message.SumConvert.low) && $util.isInteger(message.SumConvert.high)))
                return "SumConvert: integer|Long expected";
            if (!$util.isInteger(message.WinRate) && !(message.WinRate && $util.isInteger(message.WinRate.low) && $util.isInteger(message.WinRate.high)))
                return "WinRate: integer|Long expected";
            if (!$util.isInteger(message.BetTotal) && !(message.BetTotal && $util.isInteger(message.BetTotal.low) && $util.isInteger(message.BetTotal.high)))
                return "BetTotal: integer|Long expected";
            if (typeof message.IsVIP !== "boolean")
                return "IsVIP: boolean expected";
            return null;
        };

        /**
         * Creates a Http_LHD_UserInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_LHD.Http_LHD_UserInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_LHD.Http_LHD_UserInfo} Http_LHD_UserInfo
         */
        Http_LHD_UserInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_LHD.Http_LHD_UserInfo)
                return object;
            var message = new $root.GameMsg_LHD.Http_LHD_UserInfo();
            if (object.UserID != null)
                message.UserID = object.UserID | 0;
            if (object.UserType != null)
                message.UserType = object.UserType | 0;
            if (object.NickName != null)
                message.NickName = String(object.NickName);
            if (object.GameScore != null)
                if ($util.Long)
                    (message.GameScore = $util.Long.fromValue(object.GameScore)).unsigned = false;
                else if (typeof object.GameScore === "string")
                    message.GameScore = parseInt(object.GameScore, 10);
                else if (typeof object.GameScore === "number")
                    message.GameScore = object.GameScore;
                else if (typeof object.GameScore === "object")
                    message.GameScore = new $util.LongBits(object.GameScore.low >>> 0, object.GameScore.high >>> 0).toNumber();
            if (object.InitMoney != null)
                if ($util.Long)
                    (message.InitMoney = $util.Long.fromValue(object.InitMoney)).unsigned = false;
                else if (typeof object.InitMoney === "string")
                    message.InitMoney = parseInt(object.InitMoney, 10);
                else if (typeof object.InitMoney === "number")
                    message.InitMoney = object.InitMoney;
                else if (typeof object.InitMoney === "object")
                    message.InitMoney = new $util.LongBits(object.InitMoney.low >>> 0, object.InitMoney.high >>> 0).toNumber();
            if (object.CurrentMoney != null)
                if ($util.Long)
                    (message.CurrentMoney = $util.Long.fromValue(object.CurrentMoney)).unsigned = false;
                else if (typeof object.CurrentMoney === "string")
                    message.CurrentMoney = parseInt(object.CurrentMoney, 10);
                else if (typeof object.CurrentMoney === "number")
                    message.CurrentMoney = object.CurrentMoney;
                else if (typeof object.CurrentMoney === "object")
                    message.CurrentMoney = new $util.LongBits(object.CurrentMoney.low >>> 0, object.CurrentMoney.high >>> 0).toNumber();
            if (object.BetInfoDragon != null)
                if ($util.Long)
                    (message.BetInfoDragon = $util.Long.fromValue(object.BetInfoDragon)).unsigned = false;
                else if (typeof object.BetInfoDragon === "string")
                    message.BetInfoDragon = parseInt(object.BetInfoDragon, 10);
                else if (typeof object.BetInfoDragon === "number")
                    message.BetInfoDragon = object.BetInfoDragon;
                else if (typeof object.BetInfoDragon === "object")
                    message.BetInfoDragon = new $util.LongBits(object.BetInfoDragon.low >>> 0, object.BetInfoDragon.high >>> 0).toNumber();
            if (object.BetInfoTiger != null)
                if ($util.Long)
                    (message.BetInfoTiger = $util.Long.fromValue(object.BetInfoTiger)).unsigned = false;
                else if (typeof object.BetInfoTiger === "string")
                    message.BetInfoTiger = parseInt(object.BetInfoTiger, 10);
                else if (typeof object.BetInfoTiger === "number")
                    message.BetInfoTiger = object.BetInfoTiger;
                else if (typeof object.BetInfoTiger === "object")
                    message.BetInfoTiger = new $util.LongBits(object.BetInfoTiger.low >>> 0, object.BetInfoTiger.high >>> 0).toNumber();
            if (object.BetInfoDraw != null)
                if ($util.Long)
                    (message.BetInfoDraw = $util.Long.fromValue(object.BetInfoDraw)).unsigned = false;
                else if (typeof object.BetInfoDraw === "string")
                    message.BetInfoDraw = parseInt(object.BetInfoDraw, 10);
                else if (typeof object.BetInfoDraw === "number")
                    message.BetInfoDraw = object.BetInfoDraw;
                else if (typeof object.BetInfoDraw === "object")
                    message.BetInfoDraw = new $util.LongBits(object.BetInfoDraw.low >>> 0, object.BetInfoDraw.high >>> 0).toNumber();
            if (object.SumCharge != null)
                if ($util.Long)
                    (message.SumCharge = $util.Long.fromValue(object.SumCharge)).unsigned = false;
                else if (typeof object.SumCharge === "string")
                    message.SumCharge = parseInt(object.SumCharge, 10);
                else if (typeof object.SumCharge === "number")
                    message.SumCharge = object.SumCharge;
                else if (typeof object.SumCharge === "object")
                    message.SumCharge = new $util.LongBits(object.SumCharge.low >>> 0, object.SumCharge.high >>> 0).toNumber();
            if (object.SumConvert != null)
                if ($util.Long)
                    (message.SumConvert = $util.Long.fromValue(object.SumConvert)).unsigned = false;
                else if (typeof object.SumConvert === "string")
                    message.SumConvert = parseInt(object.SumConvert, 10);
                else if (typeof object.SumConvert === "number")
                    message.SumConvert = object.SumConvert;
                else if (typeof object.SumConvert === "object")
                    message.SumConvert = new $util.LongBits(object.SumConvert.low >>> 0, object.SumConvert.high >>> 0).toNumber();
            if (object.WinRate != null)
                if ($util.Long)
                    (message.WinRate = $util.Long.fromValue(object.WinRate)).unsigned = false;
                else if (typeof object.WinRate === "string")
                    message.WinRate = parseInt(object.WinRate, 10);
                else if (typeof object.WinRate === "number")
                    message.WinRate = object.WinRate;
                else if (typeof object.WinRate === "object")
                    message.WinRate = new $util.LongBits(object.WinRate.low >>> 0, object.WinRate.high >>> 0).toNumber();
            if (object.BetTotal != null)
                if ($util.Long)
                    (message.BetTotal = $util.Long.fromValue(object.BetTotal)).unsigned = false;
                else if (typeof object.BetTotal === "string")
                    message.BetTotal = parseInt(object.BetTotal, 10);
                else if (typeof object.BetTotal === "number")
                    message.BetTotal = object.BetTotal;
                else if (typeof object.BetTotal === "object")
                    message.BetTotal = new $util.LongBits(object.BetTotal.low >>> 0, object.BetTotal.high >>> 0).toNumber();
            if (object.IsVIP != null)
                message.IsVIP = Boolean(object.IsVIP);
            return message;
        };

        /**
         * Creates a plain object from a Http_LHD_UserInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_LHD.Http_LHD_UserInfo
         * @static
         * @param {GameMsg_LHD.Http_LHD_UserInfo} message Http_LHD_UserInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Http_LHD_UserInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.UserID = 0;
                object.UserType = 0;
                object.NickName = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.GameScore = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.GameScore = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.InitMoney = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.InitMoney = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.CurrentMoney = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.CurrentMoney = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.BetInfoDragon = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.BetInfoDragon = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.BetInfoTiger = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.BetInfoTiger = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.BetInfoDraw = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.BetInfoDraw = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.SumCharge = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.SumCharge = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.SumConvert = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.SumConvert = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.WinRate = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.WinRate = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.BetTotal = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.BetTotal = options.longs === String ? "0" : 0;
                object.IsVIP = false;
            }
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                object.UserID = message.UserID;
            if (message.UserType != null && message.hasOwnProperty("UserType"))
                object.UserType = message.UserType;
            if (message.NickName != null && message.hasOwnProperty("NickName"))
                object.NickName = message.NickName;
            if (message.GameScore != null && message.hasOwnProperty("GameScore"))
                if (typeof message.GameScore === "number")
                    object.GameScore = options.longs === String ? String(message.GameScore) : message.GameScore;
                else
                    object.GameScore = options.longs === String ? $util.Long.prototype.toString.call(message.GameScore) : options.longs === Number ? new $util.LongBits(message.GameScore.low >>> 0, message.GameScore.high >>> 0).toNumber() : message.GameScore;
            if (message.InitMoney != null && message.hasOwnProperty("InitMoney"))
                if (typeof message.InitMoney === "number")
                    object.InitMoney = options.longs === String ? String(message.InitMoney) : message.InitMoney;
                else
                    object.InitMoney = options.longs === String ? $util.Long.prototype.toString.call(message.InitMoney) : options.longs === Number ? new $util.LongBits(message.InitMoney.low >>> 0, message.InitMoney.high >>> 0).toNumber() : message.InitMoney;
            if (message.CurrentMoney != null && message.hasOwnProperty("CurrentMoney"))
                if (typeof message.CurrentMoney === "number")
                    object.CurrentMoney = options.longs === String ? String(message.CurrentMoney) : message.CurrentMoney;
                else
                    object.CurrentMoney = options.longs === String ? $util.Long.prototype.toString.call(message.CurrentMoney) : options.longs === Number ? new $util.LongBits(message.CurrentMoney.low >>> 0, message.CurrentMoney.high >>> 0).toNumber() : message.CurrentMoney;
            if (message.BetInfoDragon != null && message.hasOwnProperty("BetInfoDragon"))
                if (typeof message.BetInfoDragon === "number")
                    object.BetInfoDragon = options.longs === String ? String(message.BetInfoDragon) : message.BetInfoDragon;
                else
                    object.BetInfoDragon = options.longs === String ? $util.Long.prototype.toString.call(message.BetInfoDragon) : options.longs === Number ? new $util.LongBits(message.BetInfoDragon.low >>> 0, message.BetInfoDragon.high >>> 0).toNumber() : message.BetInfoDragon;
            if (message.BetInfoTiger != null && message.hasOwnProperty("BetInfoTiger"))
                if (typeof message.BetInfoTiger === "number")
                    object.BetInfoTiger = options.longs === String ? String(message.BetInfoTiger) : message.BetInfoTiger;
                else
                    object.BetInfoTiger = options.longs === String ? $util.Long.prototype.toString.call(message.BetInfoTiger) : options.longs === Number ? new $util.LongBits(message.BetInfoTiger.low >>> 0, message.BetInfoTiger.high >>> 0).toNumber() : message.BetInfoTiger;
            if (message.BetInfoDraw != null && message.hasOwnProperty("BetInfoDraw"))
                if (typeof message.BetInfoDraw === "number")
                    object.BetInfoDraw = options.longs === String ? String(message.BetInfoDraw) : message.BetInfoDraw;
                else
                    object.BetInfoDraw = options.longs === String ? $util.Long.prototype.toString.call(message.BetInfoDraw) : options.longs === Number ? new $util.LongBits(message.BetInfoDraw.low >>> 0, message.BetInfoDraw.high >>> 0).toNumber() : message.BetInfoDraw;
            if (message.SumCharge != null && message.hasOwnProperty("SumCharge"))
                if (typeof message.SumCharge === "number")
                    object.SumCharge = options.longs === String ? String(message.SumCharge) : message.SumCharge;
                else
                    object.SumCharge = options.longs === String ? $util.Long.prototype.toString.call(message.SumCharge) : options.longs === Number ? new $util.LongBits(message.SumCharge.low >>> 0, message.SumCharge.high >>> 0).toNumber() : message.SumCharge;
            if (message.SumConvert != null && message.hasOwnProperty("SumConvert"))
                if (typeof message.SumConvert === "number")
                    object.SumConvert = options.longs === String ? String(message.SumConvert) : message.SumConvert;
                else
                    object.SumConvert = options.longs === String ? $util.Long.prototype.toString.call(message.SumConvert) : options.longs === Number ? new $util.LongBits(message.SumConvert.low >>> 0, message.SumConvert.high >>> 0).toNumber() : message.SumConvert;
            if (message.WinRate != null && message.hasOwnProperty("WinRate"))
                if (typeof message.WinRate === "number")
                    object.WinRate = options.longs === String ? String(message.WinRate) : message.WinRate;
                else
                    object.WinRate = options.longs === String ? $util.Long.prototype.toString.call(message.WinRate) : options.longs === Number ? new $util.LongBits(message.WinRate.low >>> 0, message.WinRate.high >>> 0).toNumber() : message.WinRate;
            if (message.BetTotal != null && message.hasOwnProperty("BetTotal"))
                if (typeof message.BetTotal === "number")
                    object.BetTotal = options.longs === String ? String(message.BetTotal) : message.BetTotal;
                else
                    object.BetTotal = options.longs === String ? $util.Long.prototype.toString.call(message.BetTotal) : options.longs === Number ? new $util.LongBits(message.BetTotal.low >>> 0, message.BetTotal.high >>> 0).toNumber() : message.BetTotal;
            if (message.IsVIP != null && message.hasOwnProperty("IsVIP"))
                object.IsVIP = message.IsVIP;
            return object;
        };

        /**
         * Converts this Http_LHD_UserInfo to JSON.
         * @function toJSON
         * @memberof GameMsg_LHD.Http_LHD_UserInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Http_LHD_UserInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Http_LHD_UserInfo;
    })();

    GameMsg_LHD.LHD_ResultCardList = (function() {

        /**
         * Properties of a LHD_ResultCardList.
         * @memberof GameMsg_LHD
         * @interface ILHD_ResultCardList
         * @property {Array.<GameMsg_LHD.ILHD_Cards>|null} [CardList] LHD_ResultCardList CardList
         */

        /**
         * Constructs a new LHD_ResultCardList.
         * @memberof GameMsg_LHD
         * @classdesc Represents a LHD_ResultCardList.
         * @implements ILHD_ResultCardList
         * @constructor
         * @param {GameMsg_LHD.ILHD_ResultCardList=} [properties] Properties to set
         */
        function LHD_ResultCardList(properties) {
            this.CardList = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LHD_ResultCardList CardList.
         * @member {Array.<GameMsg_LHD.ILHD_Cards>} CardList
         * @memberof GameMsg_LHD.LHD_ResultCardList
         * @instance
         */
        LHD_ResultCardList.prototype.CardList = $util.emptyArray;

        /**
         * Creates a new LHD_ResultCardList instance using the specified properties.
         * @function create
         * @memberof GameMsg_LHD.LHD_ResultCardList
         * @static
         * @param {GameMsg_LHD.ILHD_ResultCardList=} [properties] Properties to set
         * @returns {GameMsg_LHD.LHD_ResultCardList} LHD_ResultCardList instance
         */
        LHD_ResultCardList.create = function create(properties) {
            return new LHD_ResultCardList(properties);
        };

        /**
         * Encodes the specified LHD_ResultCardList message. Does not implicitly {@link GameMsg_LHD.LHD_ResultCardList.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_LHD.LHD_ResultCardList
         * @static
         * @param {GameMsg_LHD.ILHD_ResultCardList} message LHD_ResultCardList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LHD_ResultCardList.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.CardList != null && message.CardList.length)
                for (var i = 0; i < message.CardList.length; ++i)
                    $root.GameMsg_LHD.LHD_Cards.encode(message.CardList[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified LHD_ResultCardList message, length delimited. Does not implicitly {@link GameMsg_LHD.LHD_ResultCardList.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_LHD.LHD_ResultCardList
         * @static
         * @param {GameMsg_LHD.ILHD_ResultCardList} message LHD_ResultCardList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LHD_ResultCardList.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LHD_ResultCardList message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_LHD.LHD_ResultCardList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_LHD.LHD_ResultCardList} LHD_ResultCardList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LHD_ResultCardList.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_LHD.LHD_ResultCardList();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.CardList && message.CardList.length))
                        message.CardList = [];
                    message.CardList.push($root.GameMsg_LHD.LHD_Cards.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a LHD_ResultCardList message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_LHD.LHD_ResultCardList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_LHD.LHD_ResultCardList} LHD_ResultCardList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LHD_ResultCardList.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LHD_ResultCardList message.
         * @function verify
         * @memberof GameMsg_LHD.LHD_ResultCardList
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LHD_ResultCardList.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.CardList != null && message.hasOwnProperty("CardList")) {
                if (!Array.isArray(message.CardList))
                    return "CardList: array expected";
                for (var i = 0; i < message.CardList.length; ++i) {
                    var error = $root.GameMsg_LHD.LHD_Cards.verify(message.CardList[i]);
                    if (error)
                        return "CardList." + error;
                }
            }
            return null;
        };

        /**
         * Creates a LHD_ResultCardList message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_LHD.LHD_ResultCardList
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_LHD.LHD_ResultCardList} LHD_ResultCardList
         */
        LHD_ResultCardList.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_LHD.LHD_ResultCardList)
                return object;
            var message = new $root.GameMsg_LHD.LHD_ResultCardList();
            if (object.CardList) {
                if (!Array.isArray(object.CardList))
                    throw TypeError(".GameMsg_LHD.LHD_ResultCardList.CardList: array expected");
                message.CardList = [];
                for (var i = 0; i < object.CardList.length; ++i) {
                    if (typeof object.CardList[i] !== "object")
                        throw TypeError(".GameMsg_LHD.LHD_ResultCardList.CardList: object expected");
                    message.CardList[i] = $root.GameMsg_LHD.LHD_Cards.fromObject(object.CardList[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a LHD_ResultCardList message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_LHD.LHD_ResultCardList
         * @static
         * @param {GameMsg_LHD.LHD_ResultCardList} message LHD_ResultCardList
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LHD_ResultCardList.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.CardList = [];
            if (message.CardList && message.CardList.length) {
                object.CardList = [];
                for (var j = 0; j < message.CardList.length; ++j)
                    object.CardList[j] = $root.GameMsg_LHD.LHD_Cards.toObject(message.CardList[j], options);
            }
            return object;
        };

        /**
         * Converts this LHD_ResultCardList to JSON.
         * @function toJSON
         * @memberof GameMsg_LHD.LHD_ResultCardList
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LHD_ResultCardList.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return LHD_ResultCardList;
    })();

    GameMsg_LHD.LHD_Poker = (function() {

        /**
         * Properties of a LHD_Poker.
         * @memberof GameMsg_LHD
         * @interface ILHD_Poker
         * @property {number} Color LHD_Poker Color
         * @property {number} Number LHD_Poker Number
         */

        /**
         * Constructs a new LHD_Poker.
         * @memberof GameMsg_LHD
         * @classdesc Represents a LHD_Poker.
         * @implements ILHD_Poker
         * @constructor
         * @param {GameMsg_LHD.ILHD_Poker=} [properties] Properties to set
         */
        function LHD_Poker(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LHD_Poker Color.
         * @member {number} Color
         * @memberof GameMsg_LHD.LHD_Poker
         * @instance
         */
        LHD_Poker.prototype.Color = 0;

        /**
         * LHD_Poker Number.
         * @member {number} Number
         * @memberof GameMsg_LHD.LHD_Poker
         * @instance
         */
        LHD_Poker.prototype.Number = 0;

        /**
         * Creates a new LHD_Poker instance using the specified properties.
         * @function create
         * @memberof GameMsg_LHD.LHD_Poker
         * @static
         * @param {GameMsg_LHD.ILHD_Poker=} [properties] Properties to set
         * @returns {GameMsg_LHD.LHD_Poker} LHD_Poker instance
         */
        LHD_Poker.create = function create(properties) {
            return new LHD_Poker(properties);
        };

        /**
         * Encodes the specified LHD_Poker message. Does not implicitly {@link GameMsg_LHD.LHD_Poker.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_LHD.LHD_Poker
         * @static
         * @param {GameMsg_LHD.ILHD_Poker} message LHD_Poker message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LHD_Poker.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.Color);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.Number);
            return writer;
        };

        /**
         * Encodes the specified LHD_Poker message, length delimited. Does not implicitly {@link GameMsg_LHD.LHD_Poker.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_LHD.LHD_Poker
         * @static
         * @param {GameMsg_LHD.ILHD_Poker} message LHD_Poker message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LHD_Poker.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LHD_Poker message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_LHD.LHD_Poker
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_LHD.LHD_Poker} LHD_Poker
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LHD_Poker.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_LHD.LHD_Poker();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Color = reader.int32();
                    break;
                case 2:
                    message.Number = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("Color"))
                throw $util.ProtocolError("missing required 'Color'", { instance: message });
            if (!message.hasOwnProperty("Number"))
                throw $util.ProtocolError("missing required 'Number'", { instance: message });
            return message;
        };

        /**
         * Decodes a LHD_Poker message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_LHD.LHD_Poker
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_LHD.LHD_Poker} LHD_Poker
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LHD_Poker.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LHD_Poker message.
         * @function verify
         * @memberof GameMsg_LHD.LHD_Poker
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LHD_Poker.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.Color))
                return "Color: integer expected";
            if (!$util.isInteger(message.Number))
                return "Number: integer expected";
            return null;
        };

        /**
         * Creates a LHD_Poker message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_LHD.LHD_Poker
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_LHD.LHD_Poker} LHD_Poker
         */
        LHD_Poker.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_LHD.LHD_Poker)
                return object;
            var message = new $root.GameMsg_LHD.LHD_Poker();
            if (object.Color != null)
                message.Color = object.Color | 0;
            if (object.Number != null)
                message.Number = object.Number | 0;
            return message;
        };

        /**
         * Creates a plain object from a LHD_Poker message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_LHD.LHD_Poker
         * @static
         * @param {GameMsg_LHD.LHD_Poker} message LHD_Poker
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LHD_Poker.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.Color = 0;
                object.Number = 0;
            }
            if (message.Color != null && message.hasOwnProperty("Color"))
                object.Color = message.Color;
            if (message.Number != null && message.hasOwnProperty("Number"))
                object.Number = message.Number;
            return object;
        };

        /**
         * Converts this LHD_Poker to JSON.
         * @function toJSON
         * @memberof GameMsg_LHD.LHD_Poker
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LHD_Poker.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return LHD_Poker;
    })();

    GameMsg_LHD.LHD_Cards = (function() {

        /**
         * Properties of a LHD_Cards.
         * @memberof GameMsg_LHD
         * @interface ILHD_Cards
         * @property {Array.<GameMsg_LHD.ILHD_Poker>|null} [Cards] LHD_Cards Cards
         * @property {number} RoundID LHD_Cards RoundID
         */

        /**
         * Constructs a new LHD_Cards.
         * @memberof GameMsg_LHD
         * @classdesc Represents a LHD_Cards.
         * @implements ILHD_Cards
         * @constructor
         * @param {GameMsg_LHD.ILHD_Cards=} [properties] Properties to set
         */
        function LHD_Cards(properties) {
            this.Cards = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LHD_Cards Cards.
         * @member {Array.<GameMsg_LHD.ILHD_Poker>} Cards
         * @memberof GameMsg_LHD.LHD_Cards
         * @instance
         */
        LHD_Cards.prototype.Cards = $util.emptyArray;

        /**
         * LHD_Cards RoundID.
         * @member {number} RoundID
         * @memberof GameMsg_LHD.LHD_Cards
         * @instance
         */
        LHD_Cards.prototype.RoundID = 0;

        /**
         * Creates a new LHD_Cards instance using the specified properties.
         * @function create
         * @memberof GameMsg_LHD.LHD_Cards
         * @static
         * @param {GameMsg_LHD.ILHD_Cards=} [properties] Properties to set
         * @returns {GameMsg_LHD.LHD_Cards} LHD_Cards instance
         */
        LHD_Cards.create = function create(properties) {
            return new LHD_Cards(properties);
        };

        /**
         * Encodes the specified LHD_Cards message. Does not implicitly {@link GameMsg_LHD.LHD_Cards.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_LHD.LHD_Cards
         * @static
         * @param {GameMsg_LHD.ILHD_Cards} message LHD_Cards message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LHD_Cards.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Cards != null && message.Cards.length)
                for (var i = 0; i < message.Cards.length; ++i)
                    $root.GameMsg_LHD.LHD_Poker.encode(message.Cards[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.RoundID);
            return writer;
        };

        /**
         * Encodes the specified LHD_Cards message, length delimited. Does not implicitly {@link GameMsg_LHD.LHD_Cards.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_LHD.LHD_Cards
         * @static
         * @param {GameMsg_LHD.ILHD_Cards} message LHD_Cards message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LHD_Cards.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LHD_Cards message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_LHD.LHD_Cards
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_LHD.LHD_Cards} LHD_Cards
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LHD_Cards.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_LHD.LHD_Cards();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.Cards && message.Cards.length))
                        message.Cards = [];
                    message.Cards.push($root.GameMsg_LHD.LHD_Poker.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.RoundID = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("RoundID"))
                throw $util.ProtocolError("missing required 'RoundID'", { instance: message });
            return message;
        };

        /**
         * Decodes a LHD_Cards message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_LHD.LHD_Cards
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_LHD.LHD_Cards} LHD_Cards
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LHD_Cards.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LHD_Cards message.
         * @function verify
         * @memberof GameMsg_LHD.LHD_Cards
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LHD_Cards.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Cards != null && message.hasOwnProperty("Cards")) {
                if (!Array.isArray(message.Cards))
                    return "Cards: array expected";
                for (var i = 0; i < message.Cards.length; ++i) {
                    var error = $root.GameMsg_LHD.LHD_Poker.verify(message.Cards[i]);
                    if (error)
                        return "Cards." + error;
                }
            }
            if (!$util.isInteger(message.RoundID))
                return "RoundID: integer expected";
            return null;
        };

        /**
         * Creates a LHD_Cards message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_LHD.LHD_Cards
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_LHD.LHD_Cards} LHD_Cards
         */
        LHD_Cards.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_LHD.LHD_Cards)
                return object;
            var message = new $root.GameMsg_LHD.LHD_Cards();
            if (object.Cards) {
                if (!Array.isArray(object.Cards))
                    throw TypeError(".GameMsg_LHD.LHD_Cards.Cards: array expected");
                message.Cards = [];
                for (var i = 0; i < object.Cards.length; ++i) {
                    if (typeof object.Cards[i] !== "object")
                        throw TypeError(".GameMsg_LHD.LHD_Cards.Cards: object expected");
                    message.Cards[i] = $root.GameMsg_LHD.LHD_Poker.fromObject(object.Cards[i]);
                }
            }
            if (object.RoundID != null)
                message.RoundID = object.RoundID | 0;
            return message;
        };

        /**
         * Creates a plain object from a LHD_Cards message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_LHD.LHD_Cards
         * @static
         * @param {GameMsg_LHD.LHD_Cards} message LHD_Cards
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LHD_Cards.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.Cards = [];
            if (options.defaults)
                object.RoundID = 0;
            if (message.Cards && message.Cards.length) {
                object.Cards = [];
                for (var j = 0; j < message.Cards.length; ++j)
                    object.Cards[j] = $root.GameMsg_LHD.LHD_Poker.toObject(message.Cards[j], options);
            }
            if (message.RoundID != null && message.hasOwnProperty("RoundID"))
                object.RoundID = message.RoundID;
            return object;
        };

        /**
         * Converts this LHD_Cards to JSON.
         * @function toJSON
         * @memberof GameMsg_LHD.LHD_Cards
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LHD_Cards.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return LHD_Cards;
    })();

    GameMsg_LHD.TestGameChat = (function() {

        /**
         * Properties of a TestGameChat.
         * @memberof GameMsg_LHD
         * @interface ITestGameChat
         * @property {string} Message TestGameChat Message
         */

        /**
         * Constructs a new TestGameChat.
         * @memberof GameMsg_LHD
         * @classdesc Represents a TestGameChat.
         * @implements ITestGameChat
         * @constructor
         * @param {GameMsg_LHD.ITestGameChat=} [properties] Properties to set
         */
        function TestGameChat(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TestGameChat Message.
         * @member {string} Message
         * @memberof GameMsg_LHD.TestGameChat
         * @instance
         */
        TestGameChat.prototype.Message = "";

        /**
         * Creates a new TestGameChat instance using the specified properties.
         * @function create
         * @memberof GameMsg_LHD.TestGameChat
         * @static
         * @param {GameMsg_LHD.ITestGameChat=} [properties] Properties to set
         * @returns {GameMsg_LHD.TestGameChat} TestGameChat instance
         */
        TestGameChat.create = function create(properties) {
            return new TestGameChat(properties);
        };

        /**
         * Encodes the specified TestGameChat message. Does not implicitly {@link GameMsg_LHD.TestGameChat.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_LHD.TestGameChat
         * @static
         * @param {GameMsg_LHD.ITestGameChat} message TestGameChat message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TestGameChat.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.Message);
            return writer;
        };

        /**
         * Encodes the specified TestGameChat message, length delimited. Does not implicitly {@link GameMsg_LHD.TestGameChat.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_LHD.TestGameChat
         * @static
         * @param {GameMsg_LHD.ITestGameChat} message TestGameChat message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TestGameChat.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TestGameChat message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_LHD.TestGameChat
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_LHD.TestGameChat} TestGameChat
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TestGameChat.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_LHD.TestGameChat();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Message = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("Message"))
                throw $util.ProtocolError("missing required 'Message'", { instance: message });
            return message;
        };

        /**
         * Decodes a TestGameChat message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_LHD.TestGameChat
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_LHD.TestGameChat} TestGameChat
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TestGameChat.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TestGameChat message.
         * @function verify
         * @memberof GameMsg_LHD.TestGameChat
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TestGameChat.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.Message))
                return "Message: string expected";
            return null;
        };

        /**
         * Creates a TestGameChat message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_LHD.TestGameChat
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_LHD.TestGameChat} TestGameChat
         */
        TestGameChat.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_LHD.TestGameChat)
                return object;
            var message = new $root.GameMsg_LHD.TestGameChat();
            if (object.Message != null)
                message.Message = String(object.Message);
            return message;
        };

        /**
         * Creates a plain object from a TestGameChat message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_LHD.TestGameChat
         * @static
         * @param {GameMsg_LHD.TestGameChat} message TestGameChat
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TestGameChat.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.Message = "";
            if (message.Message != null && message.hasOwnProperty("Message"))
                object.Message = message.Message;
            return object;
        };

        /**
         * Converts this TestGameChat to JSON.
         * @function toJSON
         * @memberof GameMsg_LHD.TestGameChat
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TestGameChat.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return TestGameChat;
    })();

    GameMsg_LHD.TestGameScore = (function() {

        /**
         * Properties of a TestGameScore.
         * @memberof GameMsg_LHD
         * @interface ITestGameScore
         * @property {number} Score TestGameScore Score
         */

        /**
         * Constructs a new TestGameScore.
         * @memberof GameMsg_LHD
         * @classdesc Represents a TestGameScore.
         * @implements ITestGameScore
         * @constructor
         * @param {GameMsg_LHD.ITestGameScore=} [properties] Properties to set
         */
        function TestGameScore(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TestGameScore Score.
         * @member {number} Score
         * @memberof GameMsg_LHD.TestGameScore
         * @instance
         */
        TestGameScore.prototype.Score = 0;

        /**
         * Creates a new TestGameScore instance using the specified properties.
         * @function create
         * @memberof GameMsg_LHD.TestGameScore
         * @static
         * @param {GameMsg_LHD.ITestGameScore=} [properties] Properties to set
         * @returns {GameMsg_LHD.TestGameScore} TestGameScore instance
         */
        TestGameScore.create = function create(properties) {
            return new TestGameScore(properties);
        };

        /**
         * Encodes the specified TestGameScore message. Does not implicitly {@link GameMsg_LHD.TestGameScore.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_LHD.TestGameScore
         * @static
         * @param {GameMsg_LHD.ITestGameScore} message TestGameScore message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TestGameScore.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.Score);
            return writer;
        };

        /**
         * Encodes the specified TestGameScore message, length delimited. Does not implicitly {@link GameMsg_LHD.TestGameScore.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_LHD.TestGameScore
         * @static
         * @param {GameMsg_LHD.ITestGameScore} message TestGameScore message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TestGameScore.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TestGameScore message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_LHD.TestGameScore
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_LHD.TestGameScore} TestGameScore
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TestGameScore.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_LHD.TestGameScore();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Score = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("Score"))
                throw $util.ProtocolError("missing required 'Score'", { instance: message });
            return message;
        };

        /**
         * Decodes a TestGameScore message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_LHD.TestGameScore
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_LHD.TestGameScore} TestGameScore
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TestGameScore.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TestGameScore message.
         * @function verify
         * @memberof GameMsg_LHD.TestGameScore
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TestGameScore.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.Score))
                return "Score: integer expected";
            return null;
        };

        /**
         * Creates a TestGameScore message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_LHD.TestGameScore
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_LHD.TestGameScore} TestGameScore
         */
        TestGameScore.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_LHD.TestGameScore)
                return object;
            var message = new $root.GameMsg_LHD.TestGameScore();
            if (object.Score != null)
                message.Score = object.Score | 0;
            return message;
        };

        /**
         * Creates a plain object from a TestGameScore message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_LHD.TestGameScore
         * @static
         * @param {GameMsg_LHD.TestGameScore} message TestGameScore
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TestGameScore.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.Score = 0;
            if (message.Score != null && message.hasOwnProperty("Score"))
                object.Score = message.Score;
            return object;
        };

        /**
         * Converts this TestGameScore to JSON.
         * @function toJSON
         * @memberof GameMsg_LHD.TestGameScore
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TestGameScore.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return TestGameScore;
    })();

    GameMsg_LHD.TestGameEnd = (function() {

        /**
         * Properties of a TestGameEnd.
         * @memberof GameMsg_LHD
         * @interface ITestGameEnd
         */

        /**
         * Constructs a new TestGameEnd.
         * @memberof GameMsg_LHD
         * @classdesc Represents a TestGameEnd.
         * @implements ITestGameEnd
         * @constructor
         * @param {GameMsg_LHD.ITestGameEnd=} [properties] Properties to set
         */
        function TestGameEnd(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new TestGameEnd instance using the specified properties.
         * @function create
         * @memberof GameMsg_LHD.TestGameEnd
         * @static
         * @param {GameMsg_LHD.ITestGameEnd=} [properties] Properties to set
         * @returns {GameMsg_LHD.TestGameEnd} TestGameEnd instance
         */
        TestGameEnd.create = function create(properties) {
            return new TestGameEnd(properties);
        };

        /**
         * Encodes the specified TestGameEnd message. Does not implicitly {@link GameMsg_LHD.TestGameEnd.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_LHD.TestGameEnd
         * @static
         * @param {GameMsg_LHD.ITestGameEnd} message TestGameEnd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TestGameEnd.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified TestGameEnd message, length delimited. Does not implicitly {@link GameMsg_LHD.TestGameEnd.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_LHD.TestGameEnd
         * @static
         * @param {GameMsg_LHD.ITestGameEnd} message TestGameEnd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TestGameEnd.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TestGameEnd message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_LHD.TestGameEnd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_LHD.TestGameEnd} TestGameEnd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TestGameEnd.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_LHD.TestGameEnd();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a TestGameEnd message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_LHD.TestGameEnd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_LHD.TestGameEnd} TestGameEnd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TestGameEnd.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TestGameEnd message.
         * @function verify
         * @memberof GameMsg_LHD.TestGameEnd
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TestGameEnd.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a TestGameEnd message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_LHD.TestGameEnd
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_LHD.TestGameEnd} TestGameEnd
         */
        TestGameEnd.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_LHD.TestGameEnd)
                return object;
            return new $root.GameMsg_LHD.TestGameEnd();
        };

        /**
         * Creates a plain object from a TestGameEnd message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_LHD.TestGameEnd
         * @static
         * @param {GameMsg_LHD.TestGameEnd} message TestGameEnd
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TestGameEnd.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this TestGameEnd to JSON.
         * @function toJSON
         * @memberof GameMsg_LHD.TestGameEnd
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TestGameEnd.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return TestGameEnd;
    })();

    GameMsg_LHD.UserEnter = (function() {

        /**
         * Properties of a UserEnter.
         * @memberof GameMsg_LHD
         * @interface IUserEnter
         * @property {GameMsg_LHD.IGameUser} User UserEnter User
         */

        /**
         * Constructs a new UserEnter.
         * @memberof GameMsg_LHD
         * @classdesc Represents a UserEnter.
         * @implements IUserEnter
         * @constructor
         * @param {GameMsg_LHD.IUserEnter=} [properties] Properties to set
         */
        function UserEnter(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UserEnter User.
         * @member {GameMsg_LHD.IGameUser} User
         * @memberof GameMsg_LHD.UserEnter
         * @instance
         */
        UserEnter.prototype.User = null;

        /**
         * Creates a new UserEnter instance using the specified properties.
         * @function create
         * @memberof GameMsg_LHD.UserEnter
         * @static
         * @param {GameMsg_LHD.IUserEnter=} [properties] Properties to set
         * @returns {GameMsg_LHD.UserEnter} UserEnter instance
         */
        UserEnter.create = function create(properties) {
            return new UserEnter(properties);
        };

        /**
         * Encodes the specified UserEnter message. Does not implicitly {@link GameMsg_LHD.UserEnter.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_LHD.UserEnter
         * @static
         * @param {GameMsg_LHD.IUserEnter} message UserEnter message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserEnter.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            $root.GameMsg_LHD.GameUser.encode(message.User, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified UserEnter message, length delimited. Does not implicitly {@link GameMsg_LHD.UserEnter.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_LHD.UserEnter
         * @static
         * @param {GameMsg_LHD.IUserEnter} message UserEnter message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserEnter.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UserEnter message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_LHD.UserEnter
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_LHD.UserEnter} UserEnter
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserEnter.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_LHD.UserEnter();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.User = $root.GameMsg_LHD.GameUser.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("User"))
                throw $util.ProtocolError("missing required 'User'", { instance: message });
            return message;
        };

        /**
         * Decodes a UserEnter message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_LHD.UserEnter
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_LHD.UserEnter} UserEnter
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserEnter.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a UserEnter message.
         * @function verify
         * @memberof GameMsg_LHD.UserEnter
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UserEnter.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            {
                var error = $root.GameMsg_LHD.GameUser.verify(message.User);
                if (error)
                    return "User." + error;
            }
            return null;
        };

        /**
         * Creates a UserEnter message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_LHD.UserEnter
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_LHD.UserEnter} UserEnter
         */
        UserEnter.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_LHD.UserEnter)
                return object;
            var message = new $root.GameMsg_LHD.UserEnter();
            if (object.User != null) {
                if (typeof object.User !== "object")
                    throw TypeError(".GameMsg_LHD.UserEnter.User: object expected");
                message.User = $root.GameMsg_LHD.GameUser.fromObject(object.User);
            }
            return message;
        };

        /**
         * Creates a plain object from a UserEnter message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_LHD.UserEnter
         * @static
         * @param {GameMsg_LHD.UserEnter} message UserEnter
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UserEnter.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.User = null;
            if (message.User != null && message.hasOwnProperty("User"))
                object.User = $root.GameMsg_LHD.GameUser.toObject(message.User, options);
            return object;
        };

        /**
         * Converts this UserEnter to JSON.
         * @function toJSON
         * @memberof GameMsg_LHD.UserEnter
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserEnter.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UserEnter;
    })();

    GameMsg_LHD.UserLeave = (function() {

        /**
         * Properties of a UserLeave.
         * @memberof GameMsg_LHD
         * @interface IUserLeave
         * @property {GameMsg_LHD.IGameUser} User UserLeave User
         */

        /**
         * Constructs a new UserLeave.
         * @memberof GameMsg_LHD
         * @classdesc Represents a UserLeave.
         * @implements IUserLeave
         * @constructor
         * @param {GameMsg_LHD.IUserLeave=} [properties] Properties to set
         */
        function UserLeave(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UserLeave User.
         * @member {GameMsg_LHD.IGameUser} User
         * @memberof GameMsg_LHD.UserLeave
         * @instance
         */
        UserLeave.prototype.User = null;

        /**
         * Creates a new UserLeave instance using the specified properties.
         * @function create
         * @memberof GameMsg_LHD.UserLeave
         * @static
         * @param {GameMsg_LHD.IUserLeave=} [properties] Properties to set
         * @returns {GameMsg_LHD.UserLeave} UserLeave instance
         */
        UserLeave.create = function create(properties) {
            return new UserLeave(properties);
        };

        /**
         * Encodes the specified UserLeave message. Does not implicitly {@link GameMsg_LHD.UserLeave.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_LHD.UserLeave
         * @static
         * @param {GameMsg_LHD.IUserLeave} message UserLeave message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserLeave.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            $root.GameMsg_LHD.GameUser.encode(message.User, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified UserLeave message, length delimited. Does not implicitly {@link GameMsg_LHD.UserLeave.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_LHD.UserLeave
         * @static
         * @param {GameMsg_LHD.IUserLeave} message UserLeave message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserLeave.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UserLeave message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_LHD.UserLeave
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_LHD.UserLeave} UserLeave
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserLeave.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_LHD.UserLeave();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.User = $root.GameMsg_LHD.GameUser.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("User"))
                throw $util.ProtocolError("missing required 'User'", { instance: message });
            return message;
        };

        /**
         * Decodes a UserLeave message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_LHD.UserLeave
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_LHD.UserLeave} UserLeave
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserLeave.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a UserLeave message.
         * @function verify
         * @memberof GameMsg_LHD.UserLeave
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UserLeave.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            {
                var error = $root.GameMsg_LHD.GameUser.verify(message.User);
                if (error)
                    return "User." + error;
            }
            return null;
        };

        /**
         * Creates a UserLeave message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_LHD.UserLeave
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_LHD.UserLeave} UserLeave
         */
        UserLeave.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_LHD.UserLeave)
                return object;
            var message = new $root.GameMsg_LHD.UserLeave();
            if (object.User != null) {
                if (typeof object.User !== "object")
                    throw TypeError(".GameMsg_LHD.UserLeave.User: object expected");
                message.User = $root.GameMsg_LHD.GameUser.fromObject(object.User);
            }
            return message;
        };

        /**
         * Creates a plain object from a UserLeave message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_LHD.UserLeave
         * @static
         * @param {GameMsg_LHD.UserLeave} message UserLeave
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UserLeave.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.User = null;
            if (message.User != null && message.hasOwnProperty("User"))
                object.User = $root.GameMsg_LHD.GameUser.toObject(message.User, options);
            return object;
        };

        /**
         * Converts this UserLeave to JSON.
         * @function toJSON
         * @memberof GameMsg_LHD.UserLeave
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserLeave.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UserLeave;
    })();

    GameMsg_LHD.UserStateChange = (function() {

        /**
         * Properties of a UserStateChange.
         * @memberof GameMsg_LHD
         * @interface IUserStateChange
         * @property {GameMsg_LHD.IGameUser} User UserStateChange User
         */

        /**
         * Constructs a new UserStateChange.
         * @memberof GameMsg_LHD
         * @classdesc Represents a UserStateChange.
         * @implements IUserStateChange
         * @constructor
         * @param {GameMsg_LHD.IUserStateChange=} [properties] Properties to set
         */
        function UserStateChange(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UserStateChange User.
         * @member {GameMsg_LHD.IGameUser} User
         * @memberof GameMsg_LHD.UserStateChange
         * @instance
         */
        UserStateChange.prototype.User = null;

        /**
         * Creates a new UserStateChange instance using the specified properties.
         * @function create
         * @memberof GameMsg_LHD.UserStateChange
         * @static
         * @param {GameMsg_LHD.IUserStateChange=} [properties] Properties to set
         * @returns {GameMsg_LHD.UserStateChange} UserStateChange instance
         */
        UserStateChange.create = function create(properties) {
            return new UserStateChange(properties);
        };

        /**
         * Encodes the specified UserStateChange message. Does not implicitly {@link GameMsg_LHD.UserStateChange.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_LHD.UserStateChange
         * @static
         * @param {GameMsg_LHD.IUserStateChange} message UserStateChange message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserStateChange.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            $root.GameMsg_LHD.GameUser.encode(message.User, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified UserStateChange message, length delimited. Does not implicitly {@link GameMsg_LHD.UserStateChange.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_LHD.UserStateChange
         * @static
         * @param {GameMsg_LHD.IUserStateChange} message UserStateChange message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserStateChange.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UserStateChange message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_LHD.UserStateChange
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_LHD.UserStateChange} UserStateChange
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserStateChange.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_LHD.UserStateChange();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.User = $root.GameMsg_LHD.GameUser.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("User"))
                throw $util.ProtocolError("missing required 'User'", { instance: message });
            return message;
        };

        /**
         * Decodes a UserStateChange message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_LHD.UserStateChange
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_LHD.UserStateChange} UserStateChange
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserStateChange.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a UserStateChange message.
         * @function verify
         * @memberof GameMsg_LHD.UserStateChange
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UserStateChange.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            {
                var error = $root.GameMsg_LHD.GameUser.verify(message.User);
                if (error)
                    return "User." + error;
            }
            return null;
        };

        /**
         * Creates a UserStateChange message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_LHD.UserStateChange
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_LHD.UserStateChange} UserStateChange
         */
        UserStateChange.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_LHD.UserStateChange)
                return object;
            var message = new $root.GameMsg_LHD.UserStateChange();
            if (object.User != null) {
                if (typeof object.User !== "object")
                    throw TypeError(".GameMsg_LHD.UserStateChange.User: object expected");
                message.User = $root.GameMsg_LHD.GameUser.fromObject(object.User);
            }
            return message;
        };

        /**
         * Creates a plain object from a UserStateChange message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_LHD.UserStateChange
         * @static
         * @param {GameMsg_LHD.UserStateChange} message UserStateChange
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UserStateChange.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.User = null;
            if (message.User != null && message.hasOwnProperty("User"))
                object.User = $root.GameMsg_LHD.GameUser.toObject(message.User, options);
            return object;
        };

        /**
         * Converts this UserStateChange to JSON.
         * @function toJSON
         * @memberof GameMsg_LHD.UserStateChange
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserStateChange.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UserStateChange;
    })();

    GameMsg_LHD.GameUser = (function() {

        /**
         * Properties of a GameUser.
         * @memberof GameMsg_LHD
         * @interface IGameUser
         * @property {number} UserID GameUser UserID
         * @property {string} NickName GameUser NickName
         * @property {number} Sex GameUser Sex
         * @property {number} FaceID GameUser FaceID
         * @property {number|Long} Score GameUser Score
         * @property {number} WinCount GameUser WinCount
         * @property {number} LoseCount GameUser LoseCount
         * @property {number} DrawCount GameUser DrawCount
         * @property {number} StateValue GameUser StateValue
         * @property {number} TableNo GameUser TableNo
         * @property {number} SeatNo GameUser SeatNo
         * @property {number|null} [LastWinLose] GameUser LastWinLose
         */

        /**
         * Constructs a new GameUser.
         * @memberof GameMsg_LHD
         * @classdesc Represents a GameUser.
         * @implements IGameUser
         * @constructor
         * @param {GameMsg_LHD.IGameUser=} [properties] Properties to set
         */
        function GameUser(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GameUser UserID.
         * @member {number} UserID
         * @memberof GameMsg_LHD.GameUser
         * @instance
         */
        GameUser.prototype.UserID = 0;

        /**
         * GameUser NickName.
         * @member {string} NickName
         * @memberof GameMsg_LHD.GameUser
         * @instance
         */
        GameUser.prototype.NickName = "";

        /**
         * GameUser Sex.
         * @member {number} Sex
         * @memberof GameMsg_LHD.GameUser
         * @instance
         */
        GameUser.prototype.Sex = 0;

        /**
         * GameUser FaceID.
         * @member {number} FaceID
         * @memberof GameMsg_LHD.GameUser
         * @instance
         */
        GameUser.prototype.FaceID = 0;

        /**
         * GameUser Score.
         * @member {number|Long} Score
         * @memberof GameMsg_LHD.GameUser
         * @instance
         */
        GameUser.prototype.Score = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * GameUser WinCount.
         * @member {number} WinCount
         * @memberof GameMsg_LHD.GameUser
         * @instance
         */
        GameUser.prototype.WinCount = 0;

        /**
         * GameUser LoseCount.
         * @member {number} LoseCount
         * @memberof GameMsg_LHD.GameUser
         * @instance
         */
        GameUser.prototype.LoseCount = 0;

        /**
         * GameUser DrawCount.
         * @member {number} DrawCount
         * @memberof GameMsg_LHD.GameUser
         * @instance
         */
        GameUser.prototype.DrawCount = 0;

        /**
         * GameUser StateValue.
         * @member {number} StateValue
         * @memberof GameMsg_LHD.GameUser
         * @instance
         */
        GameUser.prototype.StateValue = 0;

        /**
         * GameUser TableNo.
         * @member {number} TableNo
         * @memberof GameMsg_LHD.GameUser
         * @instance
         */
        GameUser.prototype.TableNo = 0;

        /**
         * GameUser SeatNo.
         * @member {number} SeatNo
         * @memberof GameMsg_LHD.GameUser
         * @instance
         */
        GameUser.prototype.SeatNo = 0;

        /**
         * GameUser LastWinLose.
         * @member {number} LastWinLose
         * @memberof GameMsg_LHD.GameUser
         * @instance
         */
        GameUser.prototype.LastWinLose = 0;

        /**
         * Creates a new GameUser instance using the specified properties.
         * @function create
         * @memberof GameMsg_LHD.GameUser
         * @static
         * @param {GameMsg_LHD.IGameUser=} [properties] Properties to set
         * @returns {GameMsg_LHD.GameUser} GameUser instance
         */
        GameUser.create = function create(properties) {
            return new GameUser(properties);
        };

        /**
         * Encodes the specified GameUser message. Does not implicitly {@link GameMsg_LHD.GameUser.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_LHD.GameUser
         * @static
         * @param {GameMsg_LHD.IGameUser} message GameUser message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameUser.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.UserID);
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.NickName);
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.Sex);
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.FaceID);
            writer.uint32(/* id 5, wireType 0 =*/40).int64(message.Score);
            writer.uint32(/* id 6, wireType 0 =*/48).int32(message.WinCount);
            writer.uint32(/* id 7, wireType 0 =*/56).int32(message.LoseCount);
            writer.uint32(/* id 8, wireType 0 =*/64).int32(message.DrawCount);
            writer.uint32(/* id 9, wireType 0 =*/72).int32(message.StateValue);
            writer.uint32(/* id 10, wireType 0 =*/80).int32(message.TableNo);
            writer.uint32(/* id 11, wireType 0 =*/88).int32(message.SeatNo);
            if (message.LastWinLose != null && message.hasOwnProperty("LastWinLose"))
                writer.uint32(/* id 12, wireType 0 =*/96).int32(message.LastWinLose);
            return writer;
        };

        /**
         * Encodes the specified GameUser message, length delimited. Does not implicitly {@link GameMsg_LHD.GameUser.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_LHD.GameUser
         * @static
         * @param {GameMsg_LHD.IGameUser} message GameUser message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameUser.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GameUser message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_LHD.GameUser
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_LHD.GameUser} GameUser
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameUser.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_LHD.GameUser();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.UserID = reader.int32();
                    break;
                case 2:
                    message.NickName = reader.string();
                    break;
                case 3:
                    message.Sex = reader.int32();
                    break;
                case 4:
                    message.FaceID = reader.int32();
                    break;
                case 5:
                    message.Score = reader.int64();
                    break;
                case 6:
                    message.WinCount = reader.int32();
                    break;
                case 7:
                    message.LoseCount = reader.int32();
                    break;
                case 8:
                    message.DrawCount = reader.int32();
                    break;
                case 9:
                    message.StateValue = reader.int32();
                    break;
                case 10:
                    message.TableNo = reader.int32();
                    break;
                case 11:
                    message.SeatNo = reader.int32();
                    break;
                case 12:
                    message.LastWinLose = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("UserID"))
                throw $util.ProtocolError("missing required 'UserID'", { instance: message });
            if (!message.hasOwnProperty("NickName"))
                throw $util.ProtocolError("missing required 'NickName'", { instance: message });
            if (!message.hasOwnProperty("Sex"))
                throw $util.ProtocolError("missing required 'Sex'", { instance: message });
            if (!message.hasOwnProperty("FaceID"))
                throw $util.ProtocolError("missing required 'FaceID'", { instance: message });
            if (!message.hasOwnProperty("Score"))
                throw $util.ProtocolError("missing required 'Score'", { instance: message });
            if (!message.hasOwnProperty("WinCount"))
                throw $util.ProtocolError("missing required 'WinCount'", { instance: message });
            if (!message.hasOwnProperty("LoseCount"))
                throw $util.ProtocolError("missing required 'LoseCount'", { instance: message });
            if (!message.hasOwnProperty("DrawCount"))
                throw $util.ProtocolError("missing required 'DrawCount'", { instance: message });
            if (!message.hasOwnProperty("StateValue"))
                throw $util.ProtocolError("missing required 'StateValue'", { instance: message });
            if (!message.hasOwnProperty("TableNo"))
                throw $util.ProtocolError("missing required 'TableNo'", { instance: message });
            if (!message.hasOwnProperty("SeatNo"))
                throw $util.ProtocolError("missing required 'SeatNo'", { instance: message });
            return message;
        };

        /**
         * Decodes a GameUser message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_LHD.GameUser
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_LHD.GameUser} GameUser
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameUser.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GameUser message.
         * @function verify
         * @memberof GameMsg_LHD.GameUser
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GameUser.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.UserID))
                return "UserID: integer expected";
            if (!$util.isString(message.NickName))
                return "NickName: string expected";
            if (!$util.isInteger(message.Sex))
                return "Sex: integer expected";
            if (!$util.isInteger(message.FaceID))
                return "FaceID: integer expected";
            if (!$util.isInteger(message.Score) && !(message.Score && $util.isInteger(message.Score.low) && $util.isInteger(message.Score.high)))
                return "Score: integer|Long expected";
            if (!$util.isInteger(message.WinCount))
                return "WinCount: integer expected";
            if (!$util.isInteger(message.LoseCount))
                return "LoseCount: integer expected";
            if (!$util.isInteger(message.DrawCount))
                return "DrawCount: integer expected";
            if (!$util.isInteger(message.StateValue))
                return "StateValue: integer expected";
            if (!$util.isInteger(message.TableNo))
                return "TableNo: integer expected";
            if (!$util.isInteger(message.SeatNo))
                return "SeatNo: integer expected";
            if (message.LastWinLose != null && message.hasOwnProperty("LastWinLose"))
                if (!$util.isInteger(message.LastWinLose))
                    return "LastWinLose: integer expected";
            return null;
        };

        /**
         * Creates a GameUser message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_LHD.GameUser
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_LHD.GameUser} GameUser
         */
        GameUser.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_LHD.GameUser)
                return object;
            var message = new $root.GameMsg_LHD.GameUser();
            if (object.UserID != null)
                message.UserID = object.UserID | 0;
            if (object.NickName != null)
                message.NickName = String(object.NickName);
            if (object.Sex != null)
                message.Sex = object.Sex | 0;
            if (object.FaceID != null)
                message.FaceID = object.FaceID | 0;
            if (object.Score != null)
                if ($util.Long)
                    (message.Score = $util.Long.fromValue(object.Score)).unsigned = false;
                else if (typeof object.Score === "string")
                    message.Score = parseInt(object.Score, 10);
                else if (typeof object.Score === "number")
                    message.Score = object.Score;
                else if (typeof object.Score === "object")
                    message.Score = new $util.LongBits(object.Score.low >>> 0, object.Score.high >>> 0).toNumber();
            if (object.WinCount != null)
                message.WinCount = object.WinCount | 0;
            if (object.LoseCount != null)
                message.LoseCount = object.LoseCount | 0;
            if (object.DrawCount != null)
                message.DrawCount = object.DrawCount | 0;
            if (object.StateValue != null)
                message.StateValue = object.StateValue | 0;
            if (object.TableNo != null)
                message.TableNo = object.TableNo | 0;
            if (object.SeatNo != null)
                message.SeatNo = object.SeatNo | 0;
            if (object.LastWinLose != null)
                message.LastWinLose = object.LastWinLose | 0;
            return message;
        };

        /**
         * Creates a plain object from a GameUser message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_LHD.GameUser
         * @static
         * @param {GameMsg_LHD.GameUser} message GameUser
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GameUser.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.UserID = 0;
                object.NickName = "";
                object.Sex = 0;
                object.FaceID = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.Score = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.Score = options.longs === String ? "0" : 0;
                object.WinCount = 0;
                object.LoseCount = 0;
                object.DrawCount = 0;
                object.StateValue = 0;
                object.TableNo = 0;
                object.SeatNo = 0;
                object.LastWinLose = 0;
            }
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                object.UserID = message.UserID;
            if (message.NickName != null && message.hasOwnProperty("NickName"))
                object.NickName = message.NickName;
            if (message.Sex != null && message.hasOwnProperty("Sex"))
                object.Sex = message.Sex;
            if (message.FaceID != null && message.hasOwnProperty("FaceID"))
                object.FaceID = message.FaceID;
            if (message.Score != null && message.hasOwnProperty("Score"))
                if (typeof message.Score === "number")
                    object.Score = options.longs === String ? String(message.Score) : message.Score;
                else
                    object.Score = options.longs === String ? $util.Long.prototype.toString.call(message.Score) : options.longs === Number ? new $util.LongBits(message.Score.low >>> 0, message.Score.high >>> 0).toNumber() : message.Score;
            if (message.WinCount != null && message.hasOwnProperty("WinCount"))
                object.WinCount = message.WinCount;
            if (message.LoseCount != null && message.hasOwnProperty("LoseCount"))
                object.LoseCount = message.LoseCount;
            if (message.DrawCount != null && message.hasOwnProperty("DrawCount"))
                object.DrawCount = message.DrawCount;
            if (message.StateValue != null && message.hasOwnProperty("StateValue"))
                object.StateValue = message.StateValue;
            if (message.TableNo != null && message.hasOwnProperty("TableNo"))
                object.TableNo = message.TableNo;
            if (message.SeatNo != null && message.hasOwnProperty("SeatNo"))
                object.SeatNo = message.SeatNo;
            if (message.LastWinLose != null && message.hasOwnProperty("LastWinLose"))
                object.LastWinLose = message.LastWinLose;
            return object;
        };

        /**
         * Converts this GameUser to JSON.
         * @function toJSON
         * @memberof GameMsg_LHD.GameUser
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GameUser.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GameUser;
    })();

    GameMsg_LHD.GamePoker = (function() {

        /**
         * Properties of a GamePoker.
         * @memberof GameMsg_LHD
         * @interface IGamePoker
         * @property {Array.<GameMsg_LHD.IUserPoker>|null} [Poker] GamePoker Poker
         */

        /**
         * Constructs a new GamePoker.
         * @memberof GameMsg_LHD
         * @classdesc Represents a GamePoker.
         * @implements IGamePoker
         * @constructor
         * @param {GameMsg_LHD.IGamePoker=} [properties] Properties to set
         */
        function GamePoker(properties) {
            this.Poker = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GamePoker Poker.
         * @member {Array.<GameMsg_LHD.IUserPoker>} Poker
         * @memberof GameMsg_LHD.GamePoker
         * @instance
         */
        GamePoker.prototype.Poker = $util.emptyArray;

        /**
         * Creates a new GamePoker instance using the specified properties.
         * @function create
         * @memberof GameMsg_LHD.GamePoker
         * @static
         * @param {GameMsg_LHD.IGamePoker=} [properties] Properties to set
         * @returns {GameMsg_LHD.GamePoker} GamePoker instance
         */
        GamePoker.create = function create(properties) {
            return new GamePoker(properties);
        };

        /**
         * Encodes the specified GamePoker message. Does not implicitly {@link GameMsg_LHD.GamePoker.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_LHD.GamePoker
         * @static
         * @param {GameMsg_LHD.IGamePoker} message GamePoker message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GamePoker.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Poker != null && message.Poker.length)
                for (var i = 0; i < message.Poker.length; ++i)
                    $root.GameMsg_LHD.UserPoker.encode(message.Poker[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified GamePoker message, length delimited. Does not implicitly {@link GameMsg_LHD.GamePoker.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_LHD.GamePoker
         * @static
         * @param {GameMsg_LHD.IGamePoker} message GamePoker message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GamePoker.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GamePoker message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_LHD.GamePoker
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_LHD.GamePoker} GamePoker
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GamePoker.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_LHD.GamePoker();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.Poker && message.Poker.length))
                        message.Poker = [];
                    message.Poker.push($root.GameMsg_LHD.UserPoker.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GamePoker message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_LHD.GamePoker
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_LHD.GamePoker} GamePoker
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GamePoker.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GamePoker message.
         * @function verify
         * @memberof GameMsg_LHD.GamePoker
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GamePoker.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Poker != null && message.hasOwnProperty("Poker")) {
                if (!Array.isArray(message.Poker))
                    return "Poker: array expected";
                for (var i = 0; i < message.Poker.length; ++i) {
                    var error = $root.GameMsg_LHD.UserPoker.verify(message.Poker[i]);
                    if (error)
                        return "Poker." + error;
                }
            }
            return null;
        };

        /**
         * Creates a GamePoker message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_LHD.GamePoker
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_LHD.GamePoker} GamePoker
         */
        GamePoker.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_LHD.GamePoker)
                return object;
            var message = new $root.GameMsg_LHD.GamePoker();
            if (object.Poker) {
                if (!Array.isArray(object.Poker))
                    throw TypeError(".GameMsg_LHD.GamePoker.Poker: array expected");
                message.Poker = [];
                for (var i = 0; i < object.Poker.length; ++i) {
                    if (typeof object.Poker[i] !== "object")
                        throw TypeError(".GameMsg_LHD.GamePoker.Poker: object expected");
                    message.Poker[i] = $root.GameMsg_LHD.UserPoker.fromObject(object.Poker[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a GamePoker message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_LHD.GamePoker
         * @static
         * @param {GameMsg_LHD.GamePoker} message GamePoker
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GamePoker.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.Poker = [];
            if (message.Poker && message.Poker.length) {
                object.Poker = [];
                for (var j = 0; j < message.Poker.length; ++j)
                    object.Poker[j] = $root.GameMsg_LHD.UserPoker.toObject(message.Poker[j], options);
            }
            return object;
        };

        /**
         * Converts this GamePoker to JSON.
         * @function toJSON
         * @memberof GameMsg_LHD.GamePoker
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GamePoker.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GamePoker;
    })();

    GameMsg_LHD.UserPoker = (function() {

        /**
         * Properties of a UserPoker.
         * @memberof GameMsg_LHD
         * @interface IUserPoker
         * @property {number} UserID UserPoker UserID
         * @property {number} SeatNo UserPoker SeatNo
         * @property {Array.<GameMsg_LHD.IPokerCard>|null} [Cards] UserPoker Cards
         */

        /**
         * Constructs a new UserPoker.
         * @memberof GameMsg_LHD
         * @classdesc Represents a UserPoker.
         * @implements IUserPoker
         * @constructor
         * @param {GameMsg_LHD.IUserPoker=} [properties] Properties to set
         */
        function UserPoker(properties) {
            this.Cards = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UserPoker UserID.
         * @member {number} UserID
         * @memberof GameMsg_LHD.UserPoker
         * @instance
         */
        UserPoker.prototype.UserID = 0;

        /**
         * UserPoker SeatNo.
         * @member {number} SeatNo
         * @memberof GameMsg_LHD.UserPoker
         * @instance
         */
        UserPoker.prototype.SeatNo = 0;

        /**
         * UserPoker Cards.
         * @member {Array.<GameMsg_LHD.IPokerCard>} Cards
         * @memberof GameMsg_LHD.UserPoker
         * @instance
         */
        UserPoker.prototype.Cards = $util.emptyArray;

        /**
         * Creates a new UserPoker instance using the specified properties.
         * @function create
         * @memberof GameMsg_LHD.UserPoker
         * @static
         * @param {GameMsg_LHD.IUserPoker=} [properties] Properties to set
         * @returns {GameMsg_LHD.UserPoker} UserPoker instance
         */
        UserPoker.create = function create(properties) {
            return new UserPoker(properties);
        };

        /**
         * Encodes the specified UserPoker message. Does not implicitly {@link GameMsg_LHD.UserPoker.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_LHD.UserPoker
         * @static
         * @param {GameMsg_LHD.IUserPoker} message UserPoker message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserPoker.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.UserID);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.SeatNo);
            if (message.Cards != null && message.Cards.length)
                for (var i = 0; i < message.Cards.length; ++i)
                    $root.GameMsg_LHD.PokerCard.encode(message.Cards[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified UserPoker message, length delimited. Does not implicitly {@link GameMsg_LHD.UserPoker.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_LHD.UserPoker
         * @static
         * @param {GameMsg_LHD.IUserPoker} message UserPoker message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserPoker.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UserPoker message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_LHD.UserPoker
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_LHD.UserPoker} UserPoker
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserPoker.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_LHD.UserPoker();
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
                    if (!(message.Cards && message.Cards.length))
                        message.Cards = [];
                    message.Cards.push($root.GameMsg_LHD.PokerCard.decode(reader, reader.uint32()));
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
            return message;
        };

        /**
         * Decodes a UserPoker message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_LHD.UserPoker
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_LHD.UserPoker} UserPoker
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserPoker.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a UserPoker message.
         * @function verify
         * @memberof GameMsg_LHD.UserPoker
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UserPoker.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.UserID))
                return "UserID: integer expected";
            if (!$util.isInteger(message.SeatNo))
                return "SeatNo: integer expected";
            if (message.Cards != null && message.hasOwnProperty("Cards")) {
                if (!Array.isArray(message.Cards))
                    return "Cards: array expected";
                for (var i = 0; i < message.Cards.length; ++i) {
                    var error = $root.GameMsg_LHD.PokerCard.verify(message.Cards[i]);
                    if (error)
                        return "Cards." + error;
                }
            }
            return null;
        };

        /**
         * Creates a UserPoker message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_LHD.UserPoker
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_LHD.UserPoker} UserPoker
         */
        UserPoker.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_LHD.UserPoker)
                return object;
            var message = new $root.GameMsg_LHD.UserPoker();
            if (object.UserID != null)
                message.UserID = object.UserID | 0;
            if (object.SeatNo != null)
                message.SeatNo = object.SeatNo | 0;
            if (object.Cards) {
                if (!Array.isArray(object.Cards))
                    throw TypeError(".GameMsg_LHD.UserPoker.Cards: array expected");
                message.Cards = [];
                for (var i = 0; i < object.Cards.length; ++i) {
                    if (typeof object.Cards[i] !== "object")
                        throw TypeError(".GameMsg_LHD.UserPoker.Cards: object expected");
                    message.Cards[i] = $root.GameMsg_LHD.PokerCard.fromObject(object.Cards[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a UserPoker message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_LHD.UserPoker
         * @static
         * @param {GameMsg_LHD.UserPoker} message UserPoker
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UserPoker.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.Cards = [];
            if (options.defaults) {
                object.UserID = 0;
                object.SeatNo = 0;
            }
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                object.UserID = message.UserID;
            if (message.SeatNo != null && message.hasOwnProperty("SeatNo"))
                object.SeatNo = message.SeatNo;
            if (message.Cards && message.Cards.length) {
                object.Cards = [];
                for (var j = 0; j < message.Cards.length; ++j)
                    object.Cards[j] = $root.GameMsg_LHD.PokerCard.toObject(message.Cards[j], options);
            }
            return object;
        };

        /**
         * Converts this UserPoker to JSON.
         * @function toJSON
         * @memberof GameMsg_LHD.UserPoker
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserPoker.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UserPoker;
    })();

    GameMsg_LHD.PokerCard = (function() {

        /**
         * Properties of a PokerCard.
         * @memberof GameMsg_LHD
         * @interface IPokerCard
         * @property {number} Color PokerCard Color
         * @property {number} CardNumber PokerCard CardNumber
         */

        /**
         * Constructs a new PokerCard.
         * @memberof GameMsg_LHD
         * @classdesc Represents a PokerCard.
         * @implements IPokerCard
         * @constructor
         * @param {GameMsg_LHD.IPokerCard=} [properties] Properties to set
         */
        function PokerCard(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PokerCard Color.
         * @member {number} Color
         * @memberof GameMsg_LHD.PokerCard
         * @instance
         */
        PokerCard.prototype.Color = 0;

        /**
         * PokerCard CardNumber.
         * @member {number} CardNumber
         * @memberof GameMsg_LHD.PokerCard
         * @instance
         */
        PokerCard.prototype.CardNumber = 0;

        /**
         * Creates a new PokerCard instance using the specified properties.
         * @function create
         * @memberof GameMsg_LHD.PokerCard
         * @static
         * @param {GameMsg_LHD.IPokerCard=} [properties] Properties to set
         * @returns {GameMsg_LHD.PokerCard} PokerCard instance
         */
        PokerCard.create = function create(properties) {
            return new PokerCard(properties);
        };

        /**
         * Encodes the specified PokerCard message. Does not implicitly {@link GameMsg_LHD.PokerCard.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_LHD.PokerCard
         * @static
         * @param {GameMsg_LHD.IPokerCard} message PokerCard message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PokerCard.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.Color);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.CardNumber);
            return writer;
        };

        /**
         * Encodes the specified PokerCard message, length delimited. Does not implicitly {@link GameMsg_LHD.PokerCard.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_LHD.PokerCard
         * @static
         * @param {GameMsg_LHD.IPokerCard} message PokerCard message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PokerCard.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PokerCard message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_LHD.PokerCard
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_LHD.PokerCard} PokerCard
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PokerCard.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_LHD.PokerCard();
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
         * Decodes a PokerCard message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_LHD.PokerCard
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_LHD.PokerCard} PokerCard
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PokerCard.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PokerCard message.
         * @function verify
         * @memberof GameMsg_LHD.PokerCard
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PokerCard.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.Color))
                return "Color: integer expected";
            if (!$util.isInteger(message.CardNumber))
                return "CardNumber: integer expected";
            return null;
        };

        /**
         * Creates a PokerCard message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_LHD.PokerCard
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_LHD.PokerCard} PokerCard
         */
        PokerCard.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_LHD.PokerCard)
                return object;
            var message = new $root.GameMsg_LHD.PokerCard();
            if (object.Color != null)
                message.Color = object.Color | 0;
            if (object.CardNumber != null)
                message.CardNumber = object.CardNumber | 0;
            return message;
        };

        /**
         * Creates a plain object from a PokerCard message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_LHD.PokerCard
         * @static
         * @param {GameMsg_LHD.PokerCard} message PokerCard
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PokerCard.toObject = function toObject(message, options) {
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
         * Converts this PokerCard to JSON.
         * @function toJSON
         * @memberof GameMsg_LHD.PokerCard
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PokerCard.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return PokerCard;
    })();

    GameMsg_LHD.UserActionCommited = (function() {

        /**
         * Properties of a UserActionCommited.
         * @memberof GameMsg_LHD
         * @interface IUserActionCommited
         * @property {string} ActionName UserActionCommited ActionName
         */

        /**
         * Constructs a new UserActionCommited.
         * @memberof GameMsg_LHD
         * @classdesc Represents a UserActionCommited.
         * @implements IUserActionCommited
         * @constructor
         * @param {GameMsg_LHD.IUserActionCommited=} [properties] Properties to set
         */
        function UserActionCommited(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UserActionCommited ActionName.
         * @member {string} ActionName
         * @memberof GameMsg_LHD.UserActionCommited
         * @instance
         */
        UserActionCommited.prototype.ActionName = "";

        /**
         * Creates a new UserActionCommited instance using the specified properties.
         * @function create
         * @memberof GameMsg_LHD.UserActionCommited
         * @static
         * @param {GameMsg_LHD.IUserActionCommited=} [properties] Properties to set
         * @returns {GameMsg_LHD.UserActionCommited} UserActionCommited instance
         */
        UserActionCommited.create = function create(properties) {
            return new UserActionCommited(properties);
        };

        /**
         * Encodes the specified UserActionCommited message. Does not implicitly {@link GameMsg_LHD.UserActionCommited.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_LHD.UserActionCommited
         * @static
         * @param {GameMsg_LHD.IUserActionCommited} message UserActionCommited message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserActionCommited.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.ActionName);
            return writer;
        };

        /**
         * Encodes the specified UserActionCommited message, length delimited. Does not implicitly {@link GameMsg_LHD.UserActionCommited.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_LHD.UserActionCommited
         * @static
         * @param {GameMsg_LHD.IUserActionCommited} message UserActionCommited message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserActionCommited.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UserActionCommited message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_LHD.UserActionCommited
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_LHD.UserActionCommited} UserActionCommited
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserActionCommited.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_LHD.UserActionCommited();
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
         * Decodes a UserActionCommited message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_LHD.UserActionCommited
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_LHD.UserActionCommited} UserActionCommited
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserActionCommited.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a UserActionCommited message.
         * @function verify
         * @memberof GameMsg_LHD.UserActionCommited
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UserActionCommited.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.ActionName))
                return "ActionName: string expected";
            return null;
        };

        /**
         * Creates a UserActionCommited message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_LHD.UserActionCommited
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_LHD.UserActionCommited} UserActionCommited
         */
        UserActionCommited.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_LHD.UserActionCommited)
                return object;
            var message = new $root.GameMsg_LHD.UserActionCommited();
            if (object.ActionName != null)
                message.ActionName = String(object.ActionName);
            return message;
        };

        /**
         * Creates a plain object from a UserActionCommited message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_LHD.UserActionCommited
         * @static
         * @param {GameMsg_LHD.UserActionCommited} message UserActionCommited
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UserActionCommited.toObject = function toObject(message, options) {
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
         * Converts this UserActionCommited to JSON.
         * @function toJSON
         * @memberof GameMsg_LHD.UserActionCommited
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserActionCommited.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UserActionCommited;
    })();

    GameMsg_LHD.AllUserActionCommited = (function() {

        /**
         * Properties of an AllUserActionCommited.
         * @memberof GameMsg_LHD
         * @interface IAllUserActionCommited
         * @property {string} ActionName AllUserActionCommited ActionName
         */

        /**
         * Constructs a new AllUserActionCommited.
         * @memberof GameMsg_LHD
         * @classdesc Represents an AllUserActionCommited.
         * @implements IAllUserActionCommited
         * @constructor
         * @param {GameMsg_LHD.IAllUserActionCommited=} [properties] Properties to set
         */
        function AllUserActionCommited(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AllUserActionCommited ActionName.
         * @member {string} ActionName
         * @memberof GameMsg_LHD.AllUserActionCommited
         * @instance
         */
        AllUserActionCommited.prototype.ActionName = "";

        /**
         * Creates a new AllUserActionCommited instance using the specified properties.
         * @function create
         * @memberof GameMsg_LHD.AllUserActionCommited
         * @static
         * @param {GameMsg_LHD.IAllUserActionCommited=} [properties] Properties to set
         * @returns {GameMsg_LHD.AllUserActionCommited} AllUserActionCommited instance
         */
        AllUserActionCommited.create = function create(properties) {
            return new AllUserActionCommited(properties);
        };

        /**
         * Encodes the specified AllUserActionCommited message. Does not implicitly {@link GameMsg_LHD.AllUserActionCommited.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_LHD.AllUserActionCommited
         * @static
         * @param {GameMsg_LHD.IAllUserActionCommited} message AllUserActionCommited message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AllUserActionCommited.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.ActionName);
            return writer;
        };

        /**
         * Encodes the specified AllUserActionCommited message, length delimited. Does not implicitly {@link GameMsg_LHD.AllUserActionCommited.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_LHD.AllUserActionCommited
         * @static
         * @param {GameMsg_LHD.IAllUserActionCommited} message AllUserActionCommited message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AllUserActionCommited.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AllUserActionCommited message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_LHD.AllUserActionCommited
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_LHD.AllUserActionCommited} AllUserActionCommited
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AllUserActionCommited.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_LHD.AllUserActionCommited();
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
         * Decodes an AllUserActionCommited message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_LHD.AllUserActionCommited
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_LHD.AllUserActionCommited} AllUserActionCommited
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AllUserActionCommited.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AllUserActionCommited message.
         * @function verify
         * @memberof GameMsg_LHD.AllUserActionCommited
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AllUserActionCommited.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.ActionName))
                return "ActionName: string expected";
            return null;
        };

        /**
         * Creates an AllUserActionCommited message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_LHD.AllUserActionCommited
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_LHD.AllUserActionCommited} AllUserActionCommited
         */
        AllUserActionCommited.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_LHD.AllUserActionCommited)
                return object;
            var message = new $root.GameMsg_LHD.AllUserActionCommited();
            if (object.ActionName != null)
                message.ActionName = String(object.ActionName);
            return message;
        };

        /**
         * Creates a plain object from an AllUserActionCommited message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_LHD.AllUserActionCommited
         * @static
         * @param {GameMsg_LHD.AllUserActionCommited} message AllUserActionCommited
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AllUserActionCommited.toObject = function toObject(message, options) {
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
         * Converts this AllUserActionCommited to JSON.
         * @function toJSON
         * @memberof GameMsg_LHD.AllUserActionCommited
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AllUserActionCommited.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return AllUserActionCommited;
    })();

    GameMsg_LHD.LookOnUserNotify = (function() {

        /**
         * Properties of a LookOnUserNotify.
         * @memberof GameMsg_LHD
         * @interface ILookOnUserNotify
         * @property {Array.<number>|null} [UserID] LookOnUserNotify UserID
         */

        /**
         * Constructs a new LookOnUserNotify.
         * @memberof GameMsg_LHD
         * @classdesc Represents a LookOnUserNotify.
         * @implements ILookOnUserNotify
         * @constructor
         * @param {GameMsg_LHD.ILookOnUserNotify=} [properties] Properties to set
         */
        function LookOnUserNotify(properties) {
            this.UserID = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LookOnUserNotify UserID.
         * @member {Array.<number>} UserID
         * @memberof GameMsg_LHD.LookOnUserNotify
         * @instance
         */
        LookOnUserNotify.prototype.UserID = $util.emptyArray;

        /**
         * Creates a new LookOnUserNotify instance using the specified properties.
         * @function create
         * @memberof GameMsg_LHD.LookOnUserNotify
         * @static
         * @param {GameMsg_LHD.ILookOnUserNotify=} [properties] Properties to set
         * @returns {GameMsg_LHD.LookOnUserNotify} LookOnUserNotify instance
         */
        LookOnUserNotify.create = function create(properties) {
            return new LookOnUserNotify(properties);
        };

        /**
         * Encodes the specified LookOnUserNotify message. Does not implicitly {@link GameMsg_LHD.LookOnUserNotify.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_LHD.LookOnUserNotify
         * @static
         * @param {GameMsg_LHD.ILookOnUserNotify} message LookOnUserNotify message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LookOnUserNotify.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.UserID != null && message.UserID.length) {
                writer.uint32(/* id 1, wireType 2 =*/10).fork();
                for (var i = 0; i < message.UserID.length; ++i)
                    writer.int32(message.UserID[i]);
                writer.ldelim();
            }
            return writer;
        };

        /**
         * Encodes the specified LookOnUserNotify message, length delimited. Does not implicitly {@link GameMsg_LHD.LookOnUserNotify.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_LHD.LookOnUserNotify
         * @static
         * @param {GameMsg_LHD.ILookOnUserNotify} message LookOnUserNotify message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LookOnUserNotify.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LookOnUserNotify message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_LHD.LookOnUserNotify
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_LHD.LookOnUserNotify} LookOnUserNotify
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LookOnUserNotify.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_LHD.LookOnUserNotify();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.UserID && message.UserID.length))
                        message.UserID = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.UserID.push(reader.int32());
                    } else
                        message.UserID.push(reader.int32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a LookOnUserNotify message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_LHD.LookOnUserNotify
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_LHD.LookOnUserNotify} LookOnUserNotify
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LookOnUserNotify.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LookOnUserNotify message.
         * @function verify
         * @memberof GameMsg_LHD.LookOnUserNotify
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LookOnUserNotify.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.UserID != null && message.hasOwnProperty("UserID")) {
                if (!Array.isArray(message.UserID))
                    return "UserID: array expected";
                for (var i = 0; i < message.UserID.length; ++i)
                    if (!$util.isInteger(message.UserID[i]))
                        return "UserID: integer[] expected";
            }
            return null;
        };

        /**
         * Creates a LookOnUserNotify message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_LHD.LookOnUserNotify
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_LHD.LookOnUserNotify} LookOnUserNotify
         */
        LookOnUserNotify.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_LHD.LookOnUserNotify)
                return object;
            var message = new $root.GameMsg_LHD.LookOnUserNotify();
            if (object.UserID) {
                if (!Array.isArray(object.UserID))
                    throw TypeError(".GameMsg_LHD.LookOnUserNotify.UserID: array expected");
                message.UserID = [];
                for (var i = 0; i < object.UserID.length; ++i)
                    message.UserID[i] = object.UserID[i] | 0;
            }
            return message;
        };

        /**
         * Creates a plain object from a LookOnUserNotify message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_LHD.LookOnUserNotify
         * @static
         * @param {GameMsg_LHD.LookOnUserNotify} message LookOnUserNotify
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LookOnUserNotify.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.UserID = [];
            if (message.UserID && message.UserID.length) {
                object.UserID = [];
                for (var j = 0; j < message.UserID.length; ++j)
                    object.UserID[j] = message.UserID[j];
            }
            return object;
        };

        /**
         * Converts this LookOnUserNotify to JSON.
         * @function toJSON
         * @memberof GameMsg_LHD.LookOnUserNotify
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LookOnUserNotify.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return LookOnUserNotify;
    })();

    GameMsg_LHD.UserLuckScore = (function() {

        /**
         * Properties of a UserLuckScore.
         * @memberof GameMsg_LHD
         * @interface IUserLuckScore
         * @property {number} UserID UserLuckScore UserID
         * @property {number|Long} Score UserLuckScore Score
         */

        /**
         * Constructs a new UserLuckScore.
         * @memberof GameMsg_LHD
         * @classdesc Represents a UserLuckScore.
         * @implements IUserLuckScore
         * @constructor
         * @param {GameMsg_LHD.IUserLuckScore=} [properties] Properties to set
         */
        function UserLuckScore(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UserLuckScore UserID.
         * @member {number} UserID
         * @memberof GameMsg_LHD.UserLuckScore
         * @instance
         */
        UserLuckScore.prototype.UserID = 0;

        /**
         * UserLuckScore Score.
         * @member {number|Long} Score
         * @memberof GameMsg_LHD.UserLuckScore
         * @instance
         */
        UserLuckScore.prototype.Score = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new UserLuckScore instance using the specified properties.
         * @function create
         * @memberof GameMsg_LHD.UserLuckScore
         * @static
         * @param {GameMsg_LHD.IUserLuckScore=} [properties] Properties to set
         * @returns {GameMsg_LHD.UserLuckScore} UserLuckScore instance
         */
        UserLuckScore.create = function create(properties) {
            return new UserLuckScore(properties);
        };

        /**
         * Encodes the specified UserLuckScore message. Does not implicitly {@link GameMsg_LHD.UserLuckScore.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_LHD.UserLuckScore
         * @static
         * @param {GameMsg_LHD.IUserLuckScore} message UserLuckScore message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserLuckScore.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.UserID);
            writer.uint32(/* id 2, wireType 0 =*/16).int64(message.Score);
            return writer;
        };

        /**
         * Encodes the specified UserLuckScore message, length delimited. Does not implicitly {@link GameMsg_LHD.UserLuckScore.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_LHD.UserLuckScore
         * @static
         * @param {GameMsg_LHD.IUserLuckScore} message UserLuckScore message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserLuckScore.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UserLuckScore message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_LHD.UserLuckScore
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_LHD.UserLuckScore} UserLuckScore
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserLuckScore.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_LHD.UserLuckScore();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.UserID = reader.int32();
                    break;
                case 2:
                    message.Score = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("UserID"))
                throw $util.ProtocolError("missing required 'UserID'", { instance: message });
            if (!message.hasOwnProperty("Score"))
                throw $util.ProtocolError("missing required 'Score'", { instance: message });
            return message;
        };

        /**
         * Decodes a UserLuckScore message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_LHD.UserLuckScore
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_LHD.UserLuckScore} UserLuckScore
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserLuckScore.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a UserLuckScore message.
         * @function verify
         * @memberof GameMsg_LHD.UserLuckScore
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UserLuckScore.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.UserID))
                return "UserID: integer expected";
            if (!$util.isInteger(message.Score) && !(message.Score && $util.isInteger(message.Score.low) && $util.isInteger(message.Score.high)))
                return "Score: integer|Long expected";
            return null;
        };

        /**
         * Creates a UserLuckScore message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_LHD.UserLuckScore
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_LHD.UserLuckScore} UserLuckScore
         */
        UserLuckScore.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_LHD.UserLuckScore)
                return object;
            var message = new $root.GameMsg_LHD.UserLuckScore();
            if (object.UserID != null)
                message.UserID = object.UserID | 0;
            if (object.Score != null)
                if ($util.Long)
                    (message.Score = $util.Long.fromValue(object.Score)).unsigned = false;
                else if (typeof object.Score === "string")
                    message.Score = parseInt(object.Score, 10);
                else if (typeof object.Score === "number")
                    message.Score = object.Score;
                else if (typeof object.Score === "object")
                    message.Score = new $util.LongBits(object.Score.low >>> 0, object.Score.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a UserLuckScore message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_LHD.UserLuckScore
         * @static
         * @param {GameMsg_LHD.UserLuckScore} message UserLuckScore
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UserLuckScore.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.UserID = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.Score = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.Score = options.longs === String ? "0" : 0;
            }
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                object.UserID = message.UserID;
            if (message.Score != null && message.hasOwnProperty("Score"))
                if (typeof message.Score === "number")
                    object.Score = options.longs === String ? String(message.Score) : message.Score;
                else
                    object.Score = options.longs === String ? $util.Long.prototype.toString.call(message.Score) : options.longs === Number ? new $util.LongBits(message.Score.low >>> 0, message.Score.high >>> 0).toNumber() : message.Score;
            return object;
        };

        /**
         * Converts this UserLuckScore to JSON.
         * @function toJSON
         * @memberof GameMsg_LHD.UserLuckScore
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserLuckScore.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UserLuckScore;
    })();

    GameMsg_LHD.UserLuckScoreRet = (function() {

        /**
         * Properties of a UserLuckScoreRet.
         * @memberof GameMsg_LHD
         * @interface IUserLuckScoreRet
         * @property {number} UserID UserLuckScoreRet UserID
         * @property {string} Value UserLuckScoreRet Value
         */

        /**
         * Constructs a new UserLuckScoreRet.
         * @memberof GameMsg_LHD
         * @classdesc Represents a UserLuckScoreRet.
         * @implements IUserLuckScoreRet
         * @constructor
         * @param {GameMsg_LHD.IUserLuckScoreRet=} [properties] Properties to set
         */
        function UserLuckScoreRet(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UserLuckScoreRet UserID.
         * @member {number} UserID
         * @memberof GameMsg_LHD.UserLuckScoreRet
         * @instance
         */
        UserLuckScoreRet.prototype.UserID = 0;

        /**
         * UserLuckScoreRet Value.
         * @member {string} Value
         * @memberof GameMsg_LHD.UserLuckScoreRet
         * @instance
         */
        UserLuckScoreRet.prototype.Value = "";

        /**
         * Creates a new UserLuckScoreRet instance using the specified properties.
         * @function create
         * @memberof GameMsg_LHD.UserLuckScoreRet
         * @static
         * @param {GameMsg_LHD.IUserLuckScoreRet=} [properties] Properties to set
         * @returns {GameMsg_LHD.UserLuckScoreRet} UserLuckScoreRet instance
         */
        UserLuckScoreRet.create = function create(properties) {
            return new UserLuckScoreRet(properties);
        };

        /**
         * Encodes the specified UserLuckScoreRet message. Does not implicitly {@link GameMsg_LHD.UserLuckScoreRet.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_LHD.UserLuckScoreRet
         * @static
         * @param {GameMsg_LHD.IUserLuckScoreRet} message UserLuckScoreRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserLuckScoreRet.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.UserID);
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.Value);
            return writer;
        };

        /**
         * Encodes the specified UserLuckScoreRet message, length delimited. Does not implicitly {@link GameMsg_LHD.UserLuckScoreRet.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_LHD.UserLuckScoreRet
         * @static
         * @param {GameMsg_LHD.IUserLuckScoreRet} message UserLuckScoreRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserLuckScoreRet.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UserLuckScoreRet message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_LHD.UserLuckScoreRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_LHD.UserLuckScoreRet} UserLuckScoreRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserLuckScoreRet.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_LHD.UserLuckScoreRet();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.UserID = reader.int32();
                    break;
                case 2:
                    message.Value = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("UserID"))
                throw $util.ProtocolError("missing required 'UserID'", { instance: message });
            if (!message.hasOwnProperty("Value"))
                throw $util.ProtocolError("missing required 'Value'", { instance: message });
            return message;
        };

        /**
         * Decodes a UserLuckScoreRet message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_LHD.UserLuckScoreRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_LHD.UserLuckScoreRet} UserLuckScoreRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserLuckScoreRet.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a UserLuckScoreRet message.
         * @function verify
         * @memberof GameMsg_LHD.UserLuckScoreRet
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UserLuckScoreRet.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.UserID))
                return "UserID: integer expected";
            if (!$util.isString(message.Value))
                return "Value: string expected";
            return null;
        };

        /**
         * Creates a UserLuckScoreRet message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_LHD.UserLuckScoreRet
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_LHD.UserLuckScoreRet} UserLuckScoreRet
         */
        UserLuckScoreRet.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_LHD.UserLuckScoreRet)
                return object;
            var message = new $root.GameMsg_LHD.UserLuckScoreRet();
            if (object.UserID != null)
                message.UserID = object.UserID | 0;
            if (object.Value != null)
                message.Value = String(object.Value);
            return message;
        };

        /**
         * Creates a plain object from a UserLuckScoreRet message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_LHD.UserLuckScoreRet
         * @static
         * @param {GameMsg_LHD.UserLuckScoreRet} message UserLuckScoreRet
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UserLuckScoreRet.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.UserID = 0;
                object.Value = "";
            }
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                object.UserID = message.UserID;
            if (message.Value != null && message.hasOwnProperty("Value"))
                object.Value = message.Value;
            return object;
        };

        /**
         * Converts this UserLuckScoreRet to JSON.
         * @function toJSON
         * @memberof GameMsg_LHD.UserLuckScoreRet
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserLuckScoreRet.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UserLuckScoreRet;
    })();

    GameMsg_LHD.GameBeginCountDown = (function() {

        /**
         * Properties of a GameBeginCountDown.
         * @memberof GameMsg_LHD
         * @interface IGameBeginCountDown
         * @property {number} Time GameBeginCountDown Time
         */

        /**
         * Constructs a new GameBeginCountDown.
         * @memberof GameMsg_LHD
         * @classdesc Represents a GameBeginCountDown.
         * @implements IGameBeginCountDown
         * @constructor
         * @param {GameMsg_LHD.IGameBeginCountDown=} [properties] Properties to set
         */
        function GameBeginCountDown(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GameBeginCountDown Time.
         * @member {number} Time
         * @memberof GameMsg_LHD.GameBeginCountDown
         * @instance
         */
        GameBeginCountDown.prototype.Time = 0;

        /**
         * Creates a new GameBeginCountDown instance using the specified properties.
         * @function create
         * @memberof GameMsg_LHD.GameBeginCountDown
         * @static
         * @param {GameMsg_LHD.IGameBeginCountDown=} [properties] Properties to set
         * @returns {GameMsg_LHD.GameBeginCountDown} GameBeginCountDown instance
         */
        GameBeginCountDown.create = function create(properties) {
            return new GameBeginCountDown(properties);
        };

        /**
         * Encodes the specified GameBeginCountDown message. Does not implicitly {@link GameMsg_LHD.GameBeginCountDown.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_LHD.GameBeginCountDown
         * @static
         * @param {GameMsg_LHD.IGameBeginCountDown} message GameBeginCountDown message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameBeginCountDown.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.Time);
            return writer;
        };

        /**
         * Encodes the specified GameBeginCountDown message, length delimited. Does not implicitly {@link GameMsg_LHD.GameBeginCountDown.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_LHD.GameBeginCountDown
         * @static
         * @param {GameMsg_LHD.IGameBeginCountDown} message GameBeginCountDown message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameBeginCountDown.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GameBeginCountDown message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_LHD.GameBeginCountDown
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_LHD.GameBeginCountDown} GameBeginCountDown
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameBeginCountDown.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_LHD.GameBeginCountDown();
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
         * Decodes a GameBeginCountDown message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_LHD.GameBeginCountDown
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_LHD.GameBeginCountDown} GameBeginCountDown
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameBeginCountDown.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GameBeginCountDown message.
         * @function verify
         * @memberof GameMsg_LHD.GameBeginCountDown
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GameBeginCountDown.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.Time))
                return "Time: integer expected";
            return null;
        };

        /**
         * Creates a GameBeginCountDown message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_LHD.GameBeginCountDown
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_LHD.GameBeginCountDown} GameBeginCountDown
         */
        GameBeginCountDown.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_LHD.GameBeginCountDown)
                return object;
            var message = new $root.GameMsg_LHD.GameBeginCountDown();
            if (object.Time != null)
                message.Time = object.Time | 0;
            return message;
        };

        /**
         * Creates a plain object from a GameBeginCountDown message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_LHD.GameBeginCountDown
         * @static
         * @param {GameMsg_LHD.GameBeginCountDown} message GameBeginCountDown
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GameBeginCountDown.toObject = function toObject(message, options) {
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
         * Converts this GameBeginCountDown to JSON.
         * @function toJSON
         * @memberof GameMsg_LHD.GameBeginCountDown
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GameBeginCountDown.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GameBeginCountDown;
    })();

    GameMsg_LHD.SuperToolAddChangeLog = (function() {

        /**
         * Properties of a SuperToolAddChangeLog.
         * @memberof GameMsg_LHD
         * @interface ISuperToolAddChangeLog
         * @property {number} GameID SuperToolAddChangeLog GameID
         * @property {number} TableNo SuperToolAddChangeLog TableNo
         * @property {number} Type SuperToolAddChangeLog Type
         * @property {string} Result SuperToolAddChangeLog Result
         * @property {string} Operator SuperToolAddChangeLog Operator
         */

        /**
         * Constructs a new SuperToolAddChangeLog.
         * @memberof GameMsg_LHD
         * @classdesc Represents a SuperToolAddChangeLog.
         * @implements ISuperToolAddChangeLog
         * @constructor
         * @param {GameMsg_LHD.ISuperToolAddChangeLog=} [properties] Properties to set
         */
        function SuperToolAddChangeLog(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SuperToolAddChangeLog GameID.
         * @member {number} GameID
         * @memberof GameMsg_LHD.SuperToolAddChangeLog
         * @instance
         */
        SuperToolAddChangeLog.prototype.GameID = 0;

        /**
         * SuperToolAddChangeLog TableNo.
         * @member {number} TableNo
         * @memberof GameMsg_LHD.SuperToolAddChangeLog
         * @instance
         */
        SuperToolAddChangeLog.prototype.TableNo = 0;

        /**
         * SuperToolAddChangeLog Type.
         * @member {number} Type
         * @memberof GameMsg_LHD.SuperToolAddChangeLog
         * @instance
         */
        SuperToolAddChangeLog.prototype.Type = 0;

        /**
         * SuperToolAddChangeLog Result.
         * @member {string} Result
         * @memberof GameMsg_LHD.SuperToolAddChangeLog
         * @instance
         */
        SuperToolAddChangeLog.prototype.Result = "";

        /**
         * SuperToolAddChangeLog Operator.
         * @member {string} Operator
         * @memberof GameMsg_LHD.SuperToolAddChangeLog
         * @instance
         */
        SuperToolAddChangeLog.prototype.Operator = "";

        /**
         * Creates a new SuperToolAddChangeLog instance using the specified properties.
         * @function create
         * @memberof GameMsg_LHD.SuperToolAddChangeLog
         * @static
         * @param {GameMsg_LHD.ISuperToolAddChangeLog=} [properties] Properties to set
         * @returns {GameMsg_LHD.SuperToolAddChangeLog} SuperToolAddChangeLog instance
         */
        SuperToolAddChangeLog.create = function create(properties) {
            return new SuperToolAddChangeLog(properties);
        };

        /**
         * Encodes the specified SuperToolAddChangeLog message. Does not implicitly {@link GameMsg_LHD.SuperToolAddChangeLog.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_LHD.SuperToolAddChangeLog
         * @static
         * @param {GameMsg_LHD.ISuperToolAddChangeLog} message SuperToolAddChangeLog message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SuperToolAddChangeLog.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.GameID);
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.TableNo);
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.Type);
            writer.uint32(/* id 5, wireType 2 =*/42).string(message.Result);
            writer.uint32(/* id 6, wireType 2 =*/50).string(message.Operator);
            return writer;
        };

        /**
         * Encodes the specified SuperToolAddChangeLog message, length delimited. Does not implicitly {@link GameMsg_LHD.SuperToolAddChangeLog.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_LHD.SuperToolAddChangeLog
         * @static
         * @param {GameMsg_LHD.ISuperToolAddChangeLog} message SuperToolAddChangeLog message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SuperToolAddChangeLog.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SuperToolAddChangeLog message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_LHD.SuperToolAddChangeLog
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_LHD.SuperToolAddChangeLog} SuperToolAddChangeLog
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SuperToolAddChangeLog.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_LHD.SuperToolAddChangeLog();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.GameID = reader.int32();
                    break;
                case 3:
                    message.TableNo = reader.int32();
                    break;
                case 4:
                    message.Type = reader.int32();
                    break;
                case 5:
                    message.Result = reader.string();
                    break;
                case 6:
                    message.Operator = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("GameID"))
                throw $util.ProtocolError("missing required 'GameID'", { instance: message });
            if (!message.hasOwnProperty("TableNo"))
                throw $util.ProtocolError("missing required 'TableNo'", { instance: message });
            if (!message.hasOwnProperty("Type"))
                throw $util.ProtocolError("missing required 'Type'", { instance: message });
            if (!message.hasOwnProperty("Result"))
                throw $util.ProtocolError("missing required 'Result'", { instance: message });
            if (!message.hasOwnProperty("Operator"))
                throw $util.ProtocolError("missing required 'Operator'", { instance: message });
            return message;
        };

        /**
         * Decodes a SuperToolAddChangeLog message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_LHD.SuperToolAddChangeLog
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_LHD.SuperToolAddChangeLog} SuperToolAddChangeLog
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SuperToolAddChangeLog.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SuperToolAddChangeLog message.
         * @function verify
         * @memberof GameMsg_LHD.SuperToolAddChangeLog
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SuperToolAddChangeLog.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.GameID))
                return "GameID: integer expected";
            if (!$util.isInteger(message.TableNo))
                return "TableNo: integer expected";
            if (!$util.isInteger(message.Type))
                return "Type: integer expected";
            if (!$util.isString(message.Result))
                return "Result: string expected";
            if (!$util.isString(message.Operator))
                return "Operator: string expected";
            return null;
        };

        /**
         * Creates a SuperToolAddChangeLog message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_LHD.SuperToolAddChangeLog
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_LHD.SuperToolAddChangeLog} SuperToolAddChangeLog
         */
        SuperToolAddChangeLog.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_LHD.SuperToolAddChangeLog)
                return object;
            var message = new $root.GameMsg_LHD.SuperToolAddChangeLog();
            if (object.GameID != null)
                message.GameID = object.GameID | 0;
            if (object.TableNo != null)
                message.TableNo = object.TableNo | 0;
            if (object.Type != null)
                message.Type = object.Type | 0;
            if (object.Result != null)
                message.Result = String(object.Result);
            if (object.Operator != null)
                message.Operator = String(object.Operator);
            return message;
        };

        /**
         * Creates a plain object from a SuperToolAddChangeLog message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_LHD.SuperToolAddChangeLog
         * @static
         * @param {GameMsg_LHD.SuperToolAddChangeLog} message SuperToolAddChangeLog
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SuperToolAddChangeLog.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.GameID = 0;
                object.TableNo = 0;
                object.Type = 0;
                object.Result = "";
                object.Operator = "";
            }
            if (message.GameID != null && message.hasOwnProperty("GameID"))
                object.GameID = message.GameID;
            if (message.TableNo != null && message.hasOwnProperty("TableNo"))
                object.TableNo = message.TableNo;
            if (message.Type != null && message.hasOwnProperty("Type"))
                object.Type = message.Type;
            if (message.Result != null && message.hasOwnProperty("Result"))
                object.Result = message.Result;
            if (message.Operator != null && message.hasOwnProperty("Operator"))
                object.Operator = message.Operator;
            return object;
        };

        /**
         * Converts this SuperToolAddChangeLog to JSON.
         * @function toJSON
         * @memberof GameMsg_LHD.SuperToolAddChangeLog
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SuperToolAddChangeLog.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SuperToolAddChangeLog;
    })();

    GameMsg_LHD.SuperToolAddAssignReward = (function() {

        /**
         * Properties of a SuperToolAddAssignReward.
         * @memberof GameMsg_LHD
         * @interface ISuperToolAddAssignReward
         * @property {number} GameID SuperToolAddAssignReward GameID
         * @property {number} FlagID SuperToolAddAssignReward FlagID
         * @property {number} TableNo SuperToolAddAssignReward TableNo
         * @property {string} Result SuperToolAddAssignReward Result
         * @property {string} Operator SuperToolAddAssignReward Operator
         * @property {Array.<GameMsg_LHD.ISuperToolAddAssignRewardDetail>|null} [DetailList] SuperToolAddAssignReward DetailList
         */

        /**
         * Constructs a new SuperToolAddAssignReward.
         * @memberof GameMsg_LHD
         * @classdesc Represents a SuperToolAddAssignReward.
         * @implements ISuperToolAddAssignReward
         * @constructor
         * @param {GameMsg_LHD.ISuperToolAddAssignReward=} [properties] Properties to set
         */
        function SuperToolAddAssignReward(properties) {
            this.DetailList = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SuperToolAddAssignReward GameID.
         * @member {number} GameID
         * @memberof GameMsg_LHD.SuperToolAddAssignReward
         * @instance
         */
        SuperToolAddAssignReward.prototype.GameID = 0;

        /**
         * SuperToolAddAssignReward FlagID.
         * @member {number} FlagID
         * @memberof GameMsg_LHD.SuperToolAddAssignReward
         * @instance
         */
        SuperToolAddAssignReward.prototype.FlagID = 0;

        /**
         * SuperToolAddAssignReward TableNo.
         * @member {number} TableNo
         * @memberof GameMsg_LHD.SuperToolAddAssignReward
         * @instance
         */
        SuperToolAddAssignReward.prototype.TableNo = 0;

        /**
         * SuperToolAddAssignReward Result.
         * @member {string} Result
         * @memberof GameMsg_LHD.SuperToolAddAssignReward
         * @instance
         */
        SuperToolAddAssignReward.prototype.Result = "";

        /**
         * SuperToolAddAssignReward Operator.
         * @member {string} Operator
         * @memberof GameMsg_LHD.SuperToolAddAssignReward
         * @instance
         */
        SuperToolAddAssignReward.prototype.Operator = "";

        /**
         * SuperToolAddAssignReward DetailList.
         * @member {Array.<GameMsg_LHD.ISuperToolAddAssignRewardDetail>} DetailList
         * @memberof GameMsg_LHD.SuperToolAddAssignReward
         * @instance
         */
        SuperToolAddAssignReward.prototype.DetailList = $util.emptyArray;

        /**
         * Creates a new SuperToolAddAssignReward instance using the specified properties.
         * @function create
         * @memberof GameMsg_LHD.SuperToolAddAssignReward
         * @static
         * @param {GameMsg_LHD.ISuperToolAddAssignReward=} [properties] Properties to set
         * @returns {GameMsg_LHD.SuperToolAddAssignReward} SuperToolAddAssignReward instance
         */
        SuperToolAddAssignReward.create = function create(properties) {
            return new SuperToolAddAssignReward(properties);
        };

        /**
         * Encodes the specified SuperToolAddAssignReward message. Does not implicitly {@link GameMsg_LHD.SuperToolAddAssignReward.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_LHD.SuperToolAddAssignReward
         * @static
         * @param {GameMsg_LHD.ISuperToolAddAssignReward} message SuperToolAddAssignReward message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SuperToolAddAssignReward.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.GameID);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.FlagID);
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.TableNo);
            writer.uint32(/* id 4, wireType 2 =*/34).string(message.Result);
            writer.uint32(/* id 5, wireType 2 =*/42).string(message.Operator);
            if (message.DetailList != null && message.DetailList.length)
                for (var i = 0; i < message.DetailList.length; ++i)
                    $root.GameMsg_LHD.SuperToolAddAssignRewardDetail.encode(message.DetailList[i], writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified SuperToolAddAssignReward message, length delimited. Does not implicitly {@link GameMsg_LHD.SuperToolAddAssignReward.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_LHD.SuperToolAddAssignReward
         * @static
         * @param {GameMsg_LHD.ISuperToolAddAssignReward} message SuperToolAddAssignReward message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SuperToolAddAssignReward.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SuperToolAddAssignReward message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_LHD.SuperToolAddAssignReward
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_LHD.SuperToolAddAssignReward} SuperToolAddAssignReward
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SuperToolAddAssignReward.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_LHD.SuperToolAddAssignReward();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.GameID = reader.int32();
                    break;
                case 2:
                    message.FlagID = reader.int32();
                    break;
                case 3:
                    message.TableNo = reader.int32();
                    break;
                case 4:
                    message.Result = reader.string();
                    break;
                case 5:
                    message.Operator = reader.string();
                    break;
                case 6:
                    if (!(message.DetailList && message.DetailList.length))
                        message.DetailList = [];
                    message.DetailList.push($root.GameMsg_LHD.SuperToolAddAssignRewardDetail.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("GameID"))
                throw $util.ProtocolError("missing required 'GameID'", { instance: message });
            if (!message.hasOwnProperty("FlagID"))
                throw $util.ProtocolError("missing required 'FlagID'", { instance: message });
            if (!message.hasOwnProperty("TableNo"))
                throw $util.ProtocolError("missing required 'TableNo'", { instance: message });
            if (!message.hasOwnProperty("Result"))
                throw $util.ProtocolError("missing required 'Result'", { instance: message });
            if (!message.hasOwnProperty("Operator"))
                throw $util.ProtocolError("missing required 'Operator'", { instance: message });
            return message;
        };

        /**
         * Decodes a SuperToolAddAssignReward message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_LHD.SuperToolAddAssignReward
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_LHD.SuperToolAddAssignReward} SuperToolAddAssignReward
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SuperToolAddAssignReward.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SuperToolAddAssignReward message.
         * @function verify
         * @memberof GameMsg_LHD.SuperToolAddAssignReward
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SuperToolAddAssignReward.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.GameID))
                return "GameID: integer expected";
            if (!$util.isInteger(message.FlagID))
                return "FlagID: integer expected";
            if (!$util.isInteger(message.TableNo))
                return "TableNo: integer expected";
            if (!$util.isString(message.Result))
                return "Result: string expected";
            if (!$util.isString(message.Operator))
                return "Operator: string expected";
            if (message.DetailList != null && message.hasOwnProperty("DetailList")) {
                if (!Array.isArray(message.DetailList))
                    return "DetailList: array expected";
                for (var i = 0; i < message.DetailList.length; ++i) {
                    var error = $root.GameMsg_LHD.SuperToolAddAssignRewardDetail.verify(message.DetailList[i]);
                    if (error)
                        return "DetailList." + error;
                }
            }
            return null;
        };

        /**
         * Creates a SuperToolAddAssignReward message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_LHD.SuperToolAddAssignReward
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_LHD.SuperToolAddAssignReward} SuperToolAddAssignReward
         */
        SuperToolAddAssignReward.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_LHD.SuperToolAddAssignReward)
                return object;
            var message = new $root.GameMsg_LHD.SuperToolAddAssignReward();
            if (object.GameID != null)
                message.GameID = object.GameID | 0;
            if (object.FlagID != null)
                message.FlagID = object.FlagID | 0;
            if (object.TableNo != null)
                message.TableNo = object.TableNo | 0;
            if (object.Result != null)
                message.Result = String(object.Result);
            if (object.Operator != null)
                message.Operator = String(object.Operator);
            if (object.DetailList) {
                if (!Array.isArray(object.DetailList))
                    throw TypeError(".GameMsg_LHD.SuperToolAddAssignReward.DetailList: array expected");
                message.DetailList = [];
                for (var i = 0; i < object.DetailList.length; ++i) {
                    if (typeof object.DetailList[i] !== "object")
                        throw TypeError(".GameMsg_LHD.SuperToolAddAssignReward.DetailList: object expected");
                    message.DetailList[i] = $root.GameMsg_LHD.SuperToolAddAssignRewardDetail.fromObject(object.DetailList[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a SuperToolAddAssignReward message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_LHD.SuperToolAddAssignReward
         * @static
         * @param {GameMsg_LHD.SuperToolAddAssignReward} message SuperToolAddAssignReward
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SuperToolAddAssignReward.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.DetailList = [];
            if (options.defaults) {
                object.GameID = 0;
                object.FlagID = 0;
                object.TableNo = 0;
                object.Result = "";
                object.Operator = "";
            }
            if (message.GameID != null && message.hasOwnProperty("GameID"))
                object.GameID = message.GameID;
            if (message.FlagID != null && message.hasOwnProperty("FlagID"))
                object.FlagID = message.FlagID;
            if (message.TableNo != null && message.hasOwnProperty("TableNo"))
                object.TableNo = message.TableNo;
            if (message.Result != null && message.hasOwnProperty("Result"))
                object.Result = message.Result;
            if (message.Operator != null && message.hasOwnProperty("Operator"))
                object.Operator = message.Operator;
            if (message.DetailList && message.DetailList.length) {
                object.DetailList = [];
                for (var j = 0; j < message.DetailList.length; ++j)
                    object.DetailList[j] = $root.GameMsg_LHD.SuperToolAddAssignRewardDetail.toObject(message.DetailList[j], options);
            }
            return object;
        };

        /**
         * Converts this SuperToolAddAssignReward to JSON.
         * @function toJSON
         * @memberof GameMsg_LHD.SuperToolAddAssignReward
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SuperToolAddAssignReward.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SuperToolAddAssignReward;
    })();

    GameMsg_LHD.SuperToolGetAssignRewardDetail = (function() {

        /**
         * Properties of a SuperToolGetAssignRewardDetail.
         * @memberof GameMsg_LHD
         * @interface ISuperToolGetAssignRewardDetail
         * @property {number} GameID SuperToolGetAssignRewardDetail GameID
         * @property {number} FlagID SuperToolGetAssignRewardDetail FlagID
         * @property {number} TableNo SuperToolGetAssignRewardDetail TableNo
         */

        /**
         * Constructs a new SuperToolGetAssignRewardDetail.
         * @memberof GameMsg_LHD
         * @classdesc Represents a SuperToolGetAssignRewardDetail.
         * @implements ISuperToolGetAssignRewardDetail
         * @constructor
         * @param {GameMsg_LHD.ISuperToolGetAssignRewardDetail=} [properties] Properties to set
         */
        function SuperToolGetAssignRewardDetail(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SuperToolGetAssignRewardDetail GameID.
         * @member {number} GameID
         * @memberof GameMsg_LHD.SuperToolGetAssignRewardDetail
         * @instance
         */
        SuperToolGetAssignRewardDetail.prototype.GameID = 0;

        /**
         * SuperToolGetAssignRewardDetail FlagID.
         * @member {number} FlagID
         * @memberof GameMsg_LHD.SuperToolGetAssignRewardDetail
         * @instance
         */
        SuperToolGetAssignRewardDetail.prototype.FlagID = 0;

        /**
         * SuperToolGetAssignRewardDetail TableNo.
         * @member {number} TableNo
         * @memberof GameMsg_LHD.SuperToolGetAssignRewardDetail
         * @instance
         */
        SuperToolGetAssignRewardDetail.prototype.TableNo = 0;

        /**
         * Creates a new SuperToolGetAssignRewardDetail instance using the specified properties.
         * @function create
         * @memberof GameMsg_LHD.SuperToolGetAssignRewardDetail
         * @static
         * @param {GameMsg_LHD.ISuperToolGetAssignRewardDetail=} [properties] Properties to set
         * @returns {GameMsg_LHD.SuperToolGetAssignRewardDetail} SuperToolGetAssignRewardDetail instance
         */
        SuperToolGetAssignRewardDetail.create = function create(properties) {
            return new SuperToolGetAssignRewardDetail(properties);
        };

        /**
         * Encodes the specified SuperToolGetAssignRewardDetail message. Does not implicitly {@link GameMsg_LHD.SuperToolGetAssignRewardDetail.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_LHD.SuperToolGetAssignRewardDetail
         * @static
         * @param {GameMsg_LHD.ISuperToolGetAssignRewardDetail} message SuperToolGetAssignRewardDetail message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SuperToolGetAssignRewardDetail.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.GameID);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.FlagID);
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.TableNo);
            return writer;
        };

        /**
         * Encodes the specified SuperToolGetAssignRewardDetail message, length delimited. Does not implicitly {@link GameMsg_LHD.SuperToolGetAssignRewardDetail.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_LHD.SuperToolGetAssignRewardDetail
         * @static
         * @param {GameMsg_LHD.ISuperToolGetAssignRewardDetail} message SuperToolGetAssignRewardDetail message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SuperToolGetAssignRewardDetail.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SuperToolGetAssignRewardDetail message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_LHD.SuperToolGetAssignRewardDetail
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_LHD.SuperToolGetAssignRewardDetail} SuperToolGetAssignRewardDetail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SuperToolGetAssignRewardDetail.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_LHD.SuperToolGetAssignRewardDetail();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.GameID = reader.int32();
                    break;
                case 2:
                    message.FlagID = reader.int32();
                    break;
                case 3:
                    message.TableNo = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("GameID"))
                throw $util.ProtocolError("missing required 'GameID'", { instance: message });
            if (!message.hasOwnProperty("FlagID"))
                throw $util.ProtocolError("missing required 'FlagID'", { instance: message });
            if (!message.hasOwnProperty("TableNo"))
                throw $util.ProtocolError("missing required 'TableNo'", { instance: message });
            return message;
        };

        /**
         * Decodes a SuperToolGetAssignRewardDetail message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_LHD.SuperToolGetAssignRewardDetail
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_LHD.SuperToolGetAssignRewardDetail} SuperToolGetAssignRewardDetail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SuperToolGetAssignRewardDetail.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SuperToolGetAssignRewardDetail message.
         * @function verify
         * @memberof GameMsg_LHD.SuperToolGetAssignRewardDetail
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SuperToolGetAssignRewardDetail.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.GameID))
                return "GameID: integer expected";
            if (!$util.isInteger(message.FlagID))
                return "FlagID: integer expected";
            if (!$util.isInteger(message.TableNo))
                return "TableNo: integer expected";
            return null;
        };

        /**
         * Creates a SuperToolGetAssignRewardDetail message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_LHD.SuperToolGetAssignRewardDetail
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_LHD.SuperToolGetAssignRewardDetail} SuperToolGetAssignRewardDetail
         */
        SuperToolGetAssignRewardDetail.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_LHD.SuperToolGetAssignRewardDetail)
                return object;
            var message = new $root.GameMsg_LHD.SuperToolGetAssignRewardDetail();
            if (object.GameID != null)
                message.GameID = object.GameID | 0;
            if (object.FlagID != null)
                message.FlagID = object.FlagID | 0;
            if (object.TableNo != null)
                message.TableNo = object.TableNo | 0;
            return message;
        };

        /**
         * Creates a plain object from a SuperToolGetAssignRewardDetail message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_LHD.SuperToolGetAssignRewardDetail
         * @static
         * @param {GameMsg_LHD.SuperToolGetAssignRewardDetail} message SuperToolGetAssignRewardDetail
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SuperToolGetAssignRewardDetail.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.GameID = 0;
                object.FlagID = 0;
                object.TableNo = 0;
            }
            if (message.GameID != null && message.hasOwnProperty("GameID"))
                object.GameID = message.GameID;
            if (message.FlagID != null && message.hasOwnProperty("FlagID"))
                object.FlagID = message.FlagID;
            if (message.TableNo != null && message.hasOwnProperty("TableNo"))
                object.TableNo = message.TableNo;
            return object;
        };

        /**
         * Converts this SuperToolGetAssignRewardDetail to JSON.
         * @function toJSON
         * @memberof GameMsg_LHD.SuperToolGetAssignRewardDetail
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SuperToolGetAssignRewardDetail.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SuperToolGetAssignRewardDetail;
    })();

    GameMsg_LHD.SuperToolAddAssignRewardDetail = (function() {

        /**
         * Properties of a SuperToolAddAssignRewardDetail.
         * @memberof GameMsg_LHD
         * @interface ISuperToolAddAssignRewardDetail
         * @property {number} Idx SuperToolAddAssignRewardDetail Idx
         * @property {string} Description SuperToolAddAssignRewardDetail Description
         * @property {string} Reward SuperToolAddAssignRewardDetail Reward
         * @property {number} Status SuperToolAddAssignRewardDetail Status
         */

        /**
         * Constructs a new SuperToolAddAssignRewardDetail.
         * @memberof GameMsg_LHD
         * @classdesc Represents a SuperToolAddAssignRewardDetail.
         * @implements ISuperToolAddAssignRewardDetail
         * @constructor
         * @param {GameMsg_LHD.ISuperToolAddAssignRewardDetail=} [properties] Properties to set
         */
        function SuperToolAddAssignRewardDetail(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SuperToolAddAssignRewardDetail Idx.
         * @member {number} Idx
         * @memberof GameMsg_LHD.SuperToolAddAssignRewardDetail
         * @instance
         */
        SuperToolAddAssignRewardDetail.prototype.Idx = 0;

        /**
         * SuperToolAddAssignRewardDetail Description.
         * @member {string} Description
         * @memberof GameMsg_LHD.SuperToolAddAssignRewardDetail
         * @instance
         */
        SuperToolAddAssignRewardDetail.prototype.Description = "";

        /**
         * SuperToolAddAssignRewardDetail Reward.
         * @member {string} Reward
         * @memberof GameMsg_LHD.SuperToolAddAssignRewardDetail
         * @instance
         */
        SuperToolAddAssignRewardDetail.prototype.Reward = "";

        /**
         * SuperToolAddAssignRewardDetail Status.
         * @member {number} Status
         * @memberof GameMsg_LHD.SuperToolAddAssignRewardDetail
         * @instance
         */
        SuperToolAddAssignRewardDetail.prototype.Status = 0;

        /**
         * Creates a new SuperToolAddAssignRewardDetail instance using the specified properties.
         * @function create
         * @memberof GameMsg_LHD.SuperToolAddAssignRewardDetail
         * @static
         * @param {GameMsg_LHD.ISuperToolAddAssignRewardDetail=} [properties] Properties to set
         * @returns {GameMsg_LHD.SuperToolAddAssignRewardDetail} SuperToolAddAssignRewardDetail instance
         */
        SuperToolAddAssignRewardDetail.create = function create(properties) {
            return new SuperToolAddAssignRewardDetail(properties);
        };

        /**
         * Encodes the specified SuperToolAddAssignRewardDetail message. Does not implicitly {@link GameMsg_LHD.SuperToolAddAssignRewardDetail.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_LHD.SuperToolAddAssignRewardDetail
         * @static
         * @param {GameMsg_LHD.ISuperToolAddAssignRewardDetail} message SuperToolAddAssignRewardDetail message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SuperToolAddAssignRewardDetail.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.Idx);
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.Description);
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.Reward);
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.Status);
            return writer;
        };

        /**
         * Encodes the specified SuperToolAddAssignRewardDetail message, length delimited. Does not implicitly {@link GameMsg_LHD.SuperToolAddAssignRewardDetail.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_LHD.SuperToolAddAssignRewardDetail
         * @static
         * @param {GameMsg_LHD.ISuperToolAddAssignRewardDetail} message SuperToolAddAssignRewardDetail message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SuperToolAddAssignRewardDetail.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SuperToolAddAssignRewardDetail message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_LHD.SuperToolAddAssignRewardDetail
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_LHD.SuperToolAddAssignRewardDetail} SuperToolAddAssignRewardDetail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SuperToolAddAssignRewardDetail.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_LHD.SuperToolAddAssignRewardDetail();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Idx = reader.int32();
                    break;
                case 2:
                    message.Description = reader.string();
                    break;
                case 3:
                    message.Reward = reader.string();
                    break;
                case 4:
                    message.Status = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("Idx"))
                throw $util.ProtocolError("missing required 'Idx'", { instance: message });
            if (!message.hasOwnProperty("Description"))
                throw $util.ProtocolError("missing required 'Description'", { instance: message });
            if (!message.hasOwnProperty("Reward"))
                throw $util.ProtocolError("missing required 'Reward'", { instance: message });
            if (!message.hasOwnProperty("Status"))
                throw $util.ProtocolError("missing required 'Status'", { instance: message });
            return message;
        };

        /**
         * Decodes a SuperToolAddAssignRewardDetail message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_LHD.SuperToolAddAssignRewardDetail
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_LHD.SuperToolAddAssignRewardDetail} SuperToolAddAssignRewardDetail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SuperToolAddAssignRewardDetail.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SuperToolAddAssignRewardDetail message.
         * @function verify
         * @memberof GameMsg_LHD.SuperToolAddAssignRewardDetail
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SuperToolAddAssignRewardDetail.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.Idx))
                return "Idx: integer expected";
            if (!$util.isString(message.Description))
                return "Description: string expected";
            if (!$util.isString(message.Reward))
                return "Reward: string expected";
            if (!$util.isInteger(message.Status))
                return "Status: integer expected";
            return null;
        };

        /**
         * Creates a SuperToolAddAssignRewardDetail message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_LHD.SuperToolAddAssignRewardDetail
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_LHD.SuperToolAddAssignRewardDetail} SuperToolAddAssignRewardDetail
         */
        SuperToolAddAssignRewardDetail.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_LHD.SuperToolAddAssignRewardDetail)
                return object;
            var message = new $root.GameMsg_LHD.SuperToolAddAssignRewardDetail();
            if (object.Idx != null)
                message.Idx = object.Idx | 0;
            if (object.Description != null)
                message.Description = String(object.Description);
            if (object.Reward != null)
                message.Reward = String(object.Reward);
            if (object.Status != null)
                message.Status = object.Status | 0;
            return message;
        };

        /**
         * Creates a plain object from a SuperToolAddAssignRewardDetail message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_LHD.SuperToolAddAssignRewardDetail
         * @static
         * @param {GameMsg_LHD.SuperToolAddAssignRewardDetail} message SuperToolAddAssignRewardDetail
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SuperToolAddAssignRewardDetail.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.Idx = 0;
                object.Description = "";
                object.Reward = "";
                object.Status = 0;
            }
            if (message.Idx != null && message.hasOwnProperty("Idx"))
                object.Idx = message.Idx;
            if (message.Description != null && message.hasOwnProperty("Description"))
                object.Description = message.Description;
            if (message.Reward != null && message.hasOwnProperty("Reward"))
                object.Reward = message.Reward;
            if (message.Status != null && message.hasOwnProperty("Status"))
                object.Status = message.Status;
            return object;
        };

        /**
         * Converts this SuperToolAddAssignRewardDetail to JSON.
         * @function toJSON
         * @memberof GameMsg_LHD.SuperToolAddAssignRewardDetail
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SuperToolAddAssignRewardDetail.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SuperToolAddAssignRewardDetail;
    })();

    GameMsg_LHD.SuperToolAssignRewardDetail = (function() {

        /**
         * Properties of a SuperToolAssignRewardDetail.
         * @memberof GameMsg_LHD
         * @interface ISuperToolAssignRewardDetail
         * @property {number} LogID SuperToolAssignRewardDetail LogID
         * @property {number} Idx SuperToolAssignRewardDetail Idx
         * @property {string} Description SuperToolAssignRewardDetail Description
         * @property {string} Reward SuperToolAssignRewardDetail Reward
         * @property {number} Status SuperToolAssignRewardDetail Status
         */

        /**
         * Constructs a new SuperToolAssignRewardDetail.
         * @memberof GameMsg_LHD
         * @classdesc Represents a SuperToolAssignRewardDetail.
         * @implements ISuperToolAssignRewardDetail
         * @constructor
         * @param {GameMsg_LHD.ISuperToolAssignRewardDetail=} [properties] Properties to set
         */
        function SuperToolAssignRewardDetail(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SuperToolAssignRewardDetail LogID.
         * @member {number} LogID
         * @memberof GameMsg_LHD.SuperToolAssignRewardDetail
         * @instance
         */
        SuperToolAssignRewardDetail.prototype.LogID = 0;

        /**
         * SuperToolAssignRewardDetail Idx.
         * @member {number} Idx
         * @memberof GameMsg_LHD.SuperToolAssignRewardDetail
         * @instance
         */
        SuperToolAssignRewardDetail.prototype.Idx = 0;

        /**
         * SuperToolAssignRewardDetail Description.
         * @member {string} Description
         * @memberof GameMsg_LHD.SuperToolAssignRewardDetail
         * @instance
         */
        SuperToolAssignRewardDetail.prototype.Description = "";

        /**
         * SuperToolAssignRewardDetail Reward.
         * @member {string} Reward
         * @memberof GameMsg_LHD.SuperToolAssignRewardDetail
         * @instance
         */
        SuperToolAssignRewardDetail.prototype.Reward = "";

        /**
         * SuperToolAssignRewardDetail Status.
         * @member {number} Status
         * @memberof GameMsg_LHD.SuperToolAssignRewardDetail
         * @instance
         */
        SuperToolAssignRewardDetail.prototype.Status = 0;

        /**
         * Creates a new SuperToolAssignRewardDetail instance using the specified properties.
         * @function create
         * @memberof GameMsg_LHD.SuperToolAssignRewardDetail
         * @static
         * @param {GameMsg_LHD.ISuperToolAssignRewardDetail=} [properties] Properties to set
         * @returns {GameMsg_LHD.SuperToolAssignRewardDetail} SuperToolAssignRewardDetail instance
         */
        SuperToolAssignRewardDetail.create = function create(properties) {
            return new SuperToolAssignRewardDetail(properties);
        };

        /**
         * Encodes the specified SuperToolAssignRewardDetail message. Does not implicitly {@link GameMsg_LHD.SuperToolAssignRewardDetail.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_LHD.SuperToolAssignRewardDetail
         * @static
         * @param {GameMsg_LHD.ISuperToolAssignRewardDetail} message SuperToolAssignRewardDetail message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SuperToolAssignRewardDetail.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.LogID);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.Idx);
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.Description);
            writer.uint32(/* id 4, wireType 2 =*/34).string(message.Reward);
            writer.uint32(/* id 5, wireType 0 =*/40).int32(message.Status);
            return writer;
        };

        /**
         * Encodes the specified SuperToolAssignRewardDetail message, length delimited. Does not implicitly {@link GameMsg_LHD.SuperToolAssignRewardDetail.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_LHD.SuperToolAssignRewardDetail
         * @static
         * @param {GameMsg_LHD.ISuperToolAssignRewardDetail} message SuperToolAssignRewardDetail message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SuperToolAssignRewardDetail.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SuperToolAssignRewardDetail message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_LHD.SuperToolAssignRewardDetail
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_LHD.SuperToolAssignRewardDetail} SuperToolAssignRewardDetail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SuperToolAssignRewardDetail.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_LHD.SuperToolAssignRewardDetail();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.LogID = reader.int32();
                    break;
                case 2:
                    message.Idx = reader.int32();
                    break;
                case 3:
                    message.Description = reader.string();
                    break;
                case 4:
                    message.Reward = reader.string();
                    break;
                case 5:
                    message.Status = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("LogID"))
                throw $util.ProtocolError("missing required 'LogID'", { instance: message });
            if (!message.hasOwnProperty("Idx"))
                throw $util.ProtocolError("missing required 'Idx'", { instance: message });
            if (!message.hasOwnProperty("Description"))
                throw $util.ProtocolError("missing required 'Description'", { instance: message });
            if (!message.hasOwnProperty("Reward"))
                throw $util.ProtocolError("missing required 'Reward'", { instance: message });
            if (!message.hasOwnProperty("Status"))
                throw $util.ProtocolError("missing required 'Status'", { instance: message });
            return message;
        };

        /**
         * Decodes a SuperToolAssignRewardDetail message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_LHD.SuperToolAssignRewardDetail
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_LHD.SuperToolAssignRewardDetail} SuperToolAssignRewardDetail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SuperToolAssignRewardDetail.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SuperToolAssignRewardDetail message.
         * @function verify
         * @memberof GameMsg_LHD.SuperToolAssignRewardDetail
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SuperToolAssignRewardDetail.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.LogID))
                return "LogID: integer expected";
            if (!$util.isInteger(message.Idx))
                return "Idx: integer expected";
            if (!$util.isString(message.Description))
                return "Description: string expected";
            if (!$util.isString(message.Reward))
                return "Reward: string expected";
            if (!$util.isInteger(message.Status))
                return "Status: integer expected";
            return null;
        };

        /**
         * Creates a SuperToolAssignRewardDetail message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_LHD.SuperToolAssignRewardDetail
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_LHD.SuperToolAssignRewardDetail} SuperToolAssignRewardDetail
         */
        SuperToolAssignRewardDetail.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_LHD.SuperToolAssignRewardDetail)
                return object;
            var message = new $root.GameMsg_LHD.SuperToolAssignRewardDetail();
            if (object.LogID != null)
                message.LogID = object.LogID | 0;
            if (object.Idx != null)
                message.Idx = object.Idx | 0;
            if (object.Description != null)
                message.Description = String(object.Description);
            if (object.Reward != null)
                message.Reward = String(object.Reward);
            if (object.Status != null)
                message.Status = object.Status | 0;
            return message;
        };

        /**
         * Creates a plain object from a SuperToolAssignRewardDetail message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_LHD.SuperToolAssignRewardDetail
         * @static
         * @param {GameMsg_LHD.SuperToolAssignRewardDetail} message SuperToolAssignRewardDetail
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SuperToolAssignRewardDetail.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.LogID = 0;
                object.Idx = 0;
                object.Description = "";
                object.Reward = "";
                object.Status = 0;
            }
            if (message.LogID != null && message.hasOwnProperty("LogID"))
                object.LogID = message.LogID;
            if (message.Idx != null && message.hasOwnProperty("Idx"))
                object.Idx = message.Idx;
            if (message.Description != null && message.hasOwnProperty("Description"))
                object.Description = message.Description;
            if (message.Reward != null && message.hasOwnProperty("Reward"))
                object.Reward = message.Reward;
            if (message.Status != null && message.hasOwnProperty("Status"))
                object.Status = message.Status;
            return object;
        };

        /**
         * Converts this SuperToolAssignRewardDetail to JSON.
         * @function toJSON
         * @memberof GameMsg_LHD.SuperToolAssignRewardDetail
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SuperToolAssignRewardDetail.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SuperToolAssignRewardDetail;
    })();

    GameMsg_LHD.SuperToolGetVipUserRequest = (function() {

        /**
         * Properties of a SuperToolGetVipUserRequest.
         * @memberof GameMsg_LHD
         * @interface ISuperToolGetVipUserRequest
         * @property {number} GameID SuperToolGetVipUserRequest GameID
         */

        /**
         * Constructs a new SuperToolGetVipUserRequest.
         * @memberof GameMsg_LHD
         * @classdesc Represents a SuperToolGetVipUserRequest.
         * @implements ISuperToolGetVipUserRequest
         * @constructor
         * @param {GameMsg_LHD.ISuperToolGetVipUserRequest=} [properties] Properties to set
         */
        function SuperToolGetVipUserRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SuperToolGetVipUserRequest GameID.
         * @member {number} GameID
         * @memberof GameMsg_LHD.SuperToolGetVipUserRequest
         * @instance
         */
        SuperToolGetVipUserRequest.prototype.GameID = 0;

        /**
         * Creates a new SuperToolGetVipUserRequest instance using the specified properties.
         * @function create
         * @memberof GameMsg_LHD.SuperToolGetVipUserRequest
         * @static
         * @param {GameMsg_LHD.ISuperToolGetVipUserRequest=} [properties] Properties to set
         * @returns {GameMsg_LHD.SuperToolGetVipUserRequest} SuperToolGetVipUserRequest instance
         */
        SuperToolGetVipUserRequest.create = function create(properties) {
            return new SuperToolGetVipUserRequest(properties);
        };

        /**
         * Encodes the specified SuperToolGetVipUserRequest message. Does not implicitly {@link GameMsg_LHD.SuperToolGetVipUserRequest.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_LHD.SuperToolGetVipUserRequest
         * @static
         * @param {GameMsg_LHD.ISuperToolGetVipUserRequest} message SuperToolGetVipUserRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SuperToolGetVipUserRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.GameID);
            return writer;
        };

        /**
         * Encodes the specified SuperToolGetVipUserRequest message, length delimited. Does not implicitly {@link GameMsg_LHD.SuperToolGetVipUserRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_LHD.SuperToolGetVipUserRequest
         * @static
         * @param {GameMsg_LHD.ISuperToolGetVipUserRequest} message SuperToolGetVipUserRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SuperToolGetVipUserRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SuperToolGetVipUserRequest message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_LHD.SuperToolGetVipUserRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_LHD.SuperToolGetVipUserRequest} SuperToolGetVipUserRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SuperToolGetVipUserRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_LHD.SuperToolGetVipUserRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.GameID = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("GameID"))
                throw $util.ProtocolError("missing required 'GameID'", { instance: message });
            return message;
        };

        /**
         * Decodes a SuperToolGetVipUserRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_LHD.SuperToolGetVipUserRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_LHD.SuperToolGetVipUserRequest} SuperToolGetVipUserRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SuperToolGetVipUserRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SuperToolGetVipUserRequest message.
         * @function verify
         * @memberof GameMsg_LHD.SuperToolGetVipUserRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SuperToolGetVipUserRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.GameID))
                return "GameID: integer expected";
            return null;
        };

        /**
         * Creates a SuperToolGetVipUserRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_LHD.SuperToolGetVipUserRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_LHD.SuperToolGetVipUserRequest} SuperToolGetVipUserRequest
         */
        SuperToolGetVipUserRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_LHD.SuperToolGetVipUserRequest)
                return object;
            var message = new $root.GameMsg_LHD.SuperToolGetVipUserRequest();
            if (object.GameID != null)
                message.GameID = object.GameID | 0;
            return message;
        };

        /**
         * Creates a plain object from a SuperToolGetVipUserRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_LHD.SuperToolGetVipUserRequest
         * @static
         * @param {GameMsg_LHD.SuperToolGetVipUserRequest} message SuperToolGetVipUserRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SuperToolGetVipUserRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.GameID = 0;
            if (message.GameID != null && message.hasOwnProperty("GameID"))
                object.GameID = message.GameID;
            return object;
        };

        /**
         * Converts this SuperToolGetVipUserRequest to JSON.
         * @function toJSON
         * @memberof GameMsg_LHD.SuperToolGetVipUserRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SuperToolGetVipUserRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SuperToolGetVipUserRequest;
    })();

    GameMsg_LHD.SuperToolVipUserDataList = (function() {

        /**
         * Properties of a SuperToolVipUserDataList.
         * @memberof GameMsg_LHD
         * @interface ISuperToolVipUserDataList
         * @property {Array.<GameMsg_LHD.ISuperToolVipUserData>|null} [DataList] SuperToolVipUserDataList DataList
         */

        /**
         * Constructs a new SuperToolVipUserDataList.
         * @memberof GameMsg_LHD
         * @classdesc Represents a SuperToolVipUserDataList.
         * @implements ISuperToolVipUserDataList
         * @constructor
         * @param {GameMsg_LHD.ISuperToolVipUserDataList=} [properties] Properties to set
         */
        function SuperToolVipUserDataList(properties) {
            this.DataList = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SuperToolVipUserDataList DataList.
         * @member {Array.<GameMsg_LHD.ISuperToolVipUserData>} DataList
         * @memberof GameMsg_LHD.SuperToolVipUserDataList
         * @instance
         */
        SuperToolVipUserDataList.prototype.DataList = $util.emptyArray;

        /**
         * Creates a new SuperToolVipUserDataList instance using the specified properties.
         * @function create
         * @memberof GameMsg_LHD.SuperToolVipUserDataList
         * @static
         * @param {GameMsg_LHD.ISuperToolVipUserDataList=} [properties] Properties to set
         * @returns {GameMsg_LHD.SuperToolVipUserDataList} SuperToolVipUserDataList instance
         */
        SuperToolVipUserDataList.create = function create(properties) {
            return new SuperToolVipUserDataList(properties);
        };

        /**
         * Encodes the specified SuperToolVipUserDataList message. Does not implicitly {@link GameMsg_LHD.SuperToolVipUserDataList.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_LHD.SuperToolVipUserDataList
         * @static
         * @param {GameMsg_LHD.ISuperToolVipUserDataList} message SuperToolVipUserDataList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SuperToolVipUserDataList.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.DataList != null && message.DataList.length)
                for (var i = 0; i < message.DataList.length; ++i)
                    $root.GameMsg_LHD.SuperToolVipUserData.encode(message.DataList[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified SuperToolVipUserDataList message, length delimited. Does not implicitly {@link GameMsg_LHD.SuperToolVipUserDataList.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_LHD.SuperToolVipUserDataList
         * @static
         * @param {GameMsg_LHD.ISuperToolVipUserDataList} message SuperToolVipUserDataList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SuperToolVipUserDataList.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SuperToolVipUserDataList message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_LHD.SuperToolVipUserDataList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_LHD.SuperToolVipUserDataList} SuperToolVipUserDataList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SuperToolVipUserDataList.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_LHD.SuperToolVipUserDataList();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.DataList && message.DataList.length))
                        message.DataList = [];
                    message.DataList.push($root.GameMsg_LHD.SuperToolVipUserData.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SuperToolVipUserDataList message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_LHD.SuperToolVipUserDataList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_LHD.SuperToolVipUserDataList} SuperToolVipUserDataList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SuperToolVipUserDataList.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SuperToolVipUserDataList message.
         * @function verify
         * @memberof GameMsg_LHD.SuperToolVipUserDataList
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SuperToolVipUserDataList.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.DataList != null && message.hasOwnProperty("DataList")) {
                if (!Array.isArray(message.DataList))
                    return "DataList: array expected";
                for (var i = 0; i < message.DataList.length; ++i) {
                    var error = $root.GameMsg_LHD.SuperToolVipUserData.verify(message.DataList[i]);
                    if (error)
                        return "DataList." + error;
                }
            }
            return null;
        };

        /**
         * Creates a SuperToolVipUserDataList message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_LHD.SuperToolVipUserDataList
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_LHD.SuperToolVipUserDataList} SuperToolVipUserDataList
         */
        SuperToolVipUserDataList.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_LHD.SuperToolVipUserDataList)
                return object;
            var message = new $root.GameMsg_LHD.SuperToolVipUserDataList();
            if (object.DataList) {
                if (!Array.isArray(object.DataList))
                    throw TypeError(".GameMsg_LHD.SuperToolVipUserDataList.DataList: array expected");
                message.DataList = [];
                for (var i = 0; i < object.DataList.length; ++i) {
                    if (typeof object.DataList[i] !== "object")
                        throw TypeError(".GameMsg_LHD.SuperToolVipUserDataList.DataList: object expected");
                    message.DataList[i] = $root.GameMsg_LHD.SuperToolVipUserData.fromObject(object.DataList[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a SuperToolVipUserDataList message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_LHD.SuperToolVipUserDataList
         * @static
         * @param {GameMsg_LHD.SuperToolVipUserDataList} message SuperToolVipUserDataList
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SuperToolVipUserDataList.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.DataList = [];
            if (message.DataList && message.DataList.length) {
                object.DataList = [];
                for (var j = 0; j < message.DataList.length; ++j)
                    object.DataList[j] = $root.GameMsg_LHD.SuperToolVipUserData.toObject(message.DataList[j], options);
            }
            return object;
        };

        /**
         * Converts this SuperToolVipUserDataList to JSON.
         * @function toJSON
         * @memberof GameMsg_LHD.SuperToolVipUserDataList
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SuperToolVipUserDataList.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SuperToolVipUserDataList;
    })();

    GameMsg_LHD.SuperToolVipUserData = (function() {

        /**
         * Properties of a SuperToolVipUserData.
         * @memberof GameMsg_LHD
         * @interface ISuperToolVipUserData
         * @property {number} UserID SuperToolVipUserData UserID
         * @property {number|Long} AssignAmount SuperToolVipUserData AssignAmount
         * @property {number} AssignRate SuperToolVipUserData AssignRate
         * @property {number|Long} CompleteAmount SuperToolVipUserData CompleteAmount
         * @property {number} Complete SuperToolVipUserData Complete
         * @property {number} Status SuperToolVipUserData Status
         * @property {number} TotalAll SuperToolVipUserData TotalAll
         * @property {number} TotalUserWinLose SuperToolVipUserData TotalUserWinLose
         * @property {number} TodayUserWinLose SuperToolVipUserData TodayUserWinLose
         */

        /**
         * Constructs a new SuperToolVipUserData.
         * @memberof GameMsg_LHD
         * @classdesc Represents a SuperToolVipUserData.
         * @implements ISuperToolVipUserData
         * @constructor
         * @param {GameMsg_LHD.ISuperToolVipUserData=} [properties] Properties to set
         */
        function SuperToolVipUserData(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SuperToolVipUserData UserID.
         * @member {number} UserID
         * @memberof GameMsg_LHD.SuperToolVipUserData
         * @instance
         */
        SuperToolVipUserData.prototype.UserID = 0;

        /**
         * SuperToolVipUserData AssignAmount.
         * @member {number|Long} AssignAmount
         * @memberof GameMsg_LHD.SuperToolVipUserData
         * @instance
         */
        SuperToolVipUserData.prototype.AssignAmount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * SuperToolVipUserData AssignRate.
         * @member {number} AssignRate
         * @memberof GameMsg_LHD.SuperToolVipUserData
         * @instance
         */
        SuperToolVipUserData.prototype.AssignRate = 0;

        /**
         * SuperToolVipUserData CompleteAmount.
         * @member {number|Long} CompleteAmount
         * @memberof GameMsg_LHD.SuperToolVipUserData
         * @instance
         */
        SuperToolVipUserData.prototype.CompleteAmount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * SuperToolVipUserData Complete.
         * @member {number} Complete
         * @memberof GameMsg_LHD.SuperToolVipUserData
         * @instance
         */
        SuperToolVipUserData.prototype.Complete = 0;

        /**
         * SuperToolVipUserData Status.
         * @member {number} Status
         * @memberof GameMsg_LHD.SuperToolVipUserData
         * @instance
         */
        SuperToolVipUserData.prototype.Status = 0;

        /**
         * SuperToolVipUserData TotalAll.
         * @member {number} TotalAll
         * @memberof GameMsg_LHD.SuperToolVipUserData
         * @instance
         */
        SuperToolVipUserData.prototype.TotalAll = 0;

        /**
         * SuperToolVipUserData TotalUserWinLose.
         * @member {number} TotalUserWinLose
         * @memberof GameMsg_LHD.SuperToolVipUserData
         * @instance
         */
        SuperToolVipUserData.prototype.TotalUserWinLose = 0;

        /**
         * SuperToolVipUserData TodayUserWinLose.
         * @member {number} TodayUserWinLose
         * @memberof GameMsg_LHD.SuperToolVipUserData
         * @instance
         */
        SuperToolVipUserData.prototype.TodayUserWinLose = 0;

        /**
         * Creates a new SuperToolVipUserData instance using the specified properties.
         * @function create
         * @memberof GameMsg_LHD.SuperToolVipUserData
         * @static
         * @param {GameMsg_LHD.ISuperToolVipUserData=} [properties] Properties to set
         * @returns {GameMsg_LHD.SuperToolVipUserData} SuperToolVipUserData instance
         */
        SuperToolVipUserData.create = function create(properties) {
            return new SuperToolVipUserData(properties);
        };

        /**
         * Encodes the specified SuperToolVipUserData message. Does not implicitly {@link GameMsg_LHD.SuperToolVipUserData.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_LHD.SuperToolVipUserData
         * @static
         * @param {GameMsg_LHD.ISuperToolVipUserData} message SuperToolVipUserData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SuperToolVipUserData.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.UserID);
            writer.uint32(/* id 2, wireType 0 =*/16).int64(message.AssignAmount);
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.AssignRate);
            writer.uint32(/* id 4, wireType 0 =*/32).int64(message.CompleteAmount);
            writer.uint32(/* id 5, wireType 0 =*/40).int32(message.Complete);
            writer.uint32(/* id 6, wireType 0 =*/48).int32(message.Status);
            writer.uint32(/* id 7, wireType 0 =*/56).int32(message.TotalAll);
            writer.uint32(/* id 8, wireType 0 =*/64).int32(message.TotalUserWinLose);
            writer.uint32(/* id 9, wireType 0 =*/72).int32(message.TodayUserWinLose);
            return writer;
        };

        /**
         * Encodes the specified SuperToolVipUserData message, length delimited. Does not implicitly {@link GameMsg_LHD.SuperToolVipUserData.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_LHD.SuperToolVipUserData
         * @static
         * @param {GameMsg_LHD.ISuperToolVipUserData} message SuperToolVipUserData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SuperToolVipUserData.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SuperToolVipUserData message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_LHD.SuperToolVipUserData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_LHD.SuperToolVipUserData} SuperToolVipUserData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SuperToolVipUserData.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_LHD.SuperToolVipUserData();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.UserID = reader.int32();
                    break;
                case 2:
                    message.AssignAmount = reader.int64();
                    break;
                case 3:
                    message.AssignRate = reader.int32();
                    break;
                case 4:
                    message.CompleteAmount = reader.int64();
                    break;
                case 5:
                    message.Complete = reader.int32();
                    break;
                case 6:
                    message.Status = reader.int32();
                    break;
                case 7:
                    message.TotalAll = reader.int32();
                    break;
                case 8:
                    message.TotalUserWinLose = reader.int32();
                    break;
                case 9:
                    message.TodayUserWinLose = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("UserID"))
                throw $util.ProtocolError("missing required 'UserID'", { instance: message });
            if (!message.hasOwnProperty("AssignAmount"))
                throw $util.ProtocolError("missing required 'AssignAmount'", { instance: message });
            if (!message.hasOwnProperty("AssignRate"))
                throw $util.ProtocolError("missing required 'AssignRate'", { instance: message });
            if (!message.hasOwnProperty("CompleteAmount"))
                throw $util.ProtocolError("missing required 'CompleteAmount'", { instance: message });
            if (!message.hasOwnProperty("Complete"))
                throw $util.ProtocolError("missing required 'Complete'", { instance: message });
            if (!message.hasOwnProperty("Status"))
                throw $util.ProtocolError("missing required 'Status'", { instance: message });
            if (!message.hasOwnProperty("TotalAll"))
                throw $util.ProtocolError("missing required 'TotalAll'", { instance: message });
            if (!message.hasOwnProperty("TotalUserWinLose"))
                throw $util.ProtocolError("missing required 'TotalUserWinLose'", { instance: message });
            if (!message.hasOwnProperty("TodayUserWinLose"))
                throw $util.ProtocolError("missing required 'TodayUserWinLose'", { instance: message });
            return message;
        };

        /**
         * Decodes a SuperToolVipUserData message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_LHD.SuperToolVipUserData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_LHD.SuperToolVipUserData} SuperToolVipUserData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SuperToolVipUserData.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SuperToolVipUserData message.
         * @function verify
         * @memberof GameMsg_LHD.SuperToolVipUserData
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SuperToolVipUserData.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.UserID))
                return "UserID: integer expected";
            if (!$util.isInteger(message.AssignAmount) && !(message.AssignAmount && $util.isInteger(message.AssignAmount.low) && $util.isInteger(message.AssignAmount.high)))
                return "AssignAmount: integer|Long expected";
            if (!$util.isInteger(message.AssignRate))
                return "AssignRate: integer expected";
            if (!$util.isInteger(message.CompleteAmount) && !(message.CompleteAmount && $util.isInteger(message.CompleteAmount.low) && $util.isInteger(message.CompleteAmount.high)))
                return "CompleteAmount: integer|Long expected";
            if (!$util.isInteger(message.Complete))
                return "Complete: integer expected";
            if (!$util.isInteger(message.Status))
                return "Status: integer expected";
            if (!$util.isInteger(message.TotalAll))
                return "TotalAll: integer expected";
            if (!$util.isInteger(message.TotalUserWinLose))
                return "TotalUserWinLose: integer expected";
            if (!$util.isInteger(message.TodayUserWinLose))
                return "TodayUserWinLose: integer expected";
            return null;
        };

        /**
         * Creates a SuperToolVipUserData message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_LHD.SuperToolVipUserData
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_LHD.SuperToolVipUserData} SuperToolVipUserData
         */
        SuperToolVipUserData.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_LHD.SuperToolVipUserData)
                return object;
            var message = new $root.GameMsg_LHD.SuperToolVipUserData();
            if (object.UserID != null)
                message.UserID = object.UserID | 0;
            if (object.AssignAmount != null)
                if ($util.Long)
                    (message.AssignAmount = $util.Long.fromValue(object.AssignAmount)).unsigned = false;
                else if (typeof object.AssignAmount === "string")
                    message.AssignAmount = parseInt(object.AssignAmount, 10);
                else if (typeof object.AssignAmount === "number")
                    message.AssignAmount = object.AssignAmount;
                else if (typeof object.AssignAmount === "object")
                    message.AssignAmount = new $util.LongBits(object.AssignAmount.low >>> 0, object.AssignAmount.high >>> 0).toNumber();
            if (object.AssignRate != null)
                message.AssignRate = object.AssignRate | 0;
            if (object.CompleteAmount != null)
                if ($util.Long)
                    (message.CompleteAmount = $util.Long.fromValue(object.CompleteAmount)).unsigned = false;
                else if (typeof object.CompleteAmount === "string")
                    message.CompleteAmount = parseInt(object.CompleteAmount, 10);
                else if (typeof object.CompleteAmount === "number")
                    message.CompleteAmount = object.CompleteAmount;
                else if (typeof object.CompleteAmount === "object")
                    message.CompleteAmount = new $util.LongBits(object.CompleteAmount.low >>> 0, object.CompleteAmount.high >>> 0).toNumber();
            if (object.Complete != null)
                message.Complete = object.Complete | 0;
            if (object.Status != null)
                message.Status = object.Status | 0;
            if (object.TotalAll != null)
                message.TotalAll = object.TotalAll | 0;
            if (object.TotalUserWinLose != null)
                message.TotalUserWinLose = object.TotalUserWinLose | 0;
            if (object.TodayUserWinLose != null)
                message.TodayUserWinLose = object.TodayUserWinLose | 0;
            return message;
        };

        /**
         * Creates a plain object from a SuperToolVipUserData message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_LHD.SuperToolVipUserData
         * @static
         * @param {GameMsg_LHD.SuperToolVipUserData} message SuperToolVipUserData
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SuperToolVipUserData.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.UserID = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.AssignAmount = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.AssignAmount = options.longs === String ? "0" : 0;
                object.AssignRate = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.CompleteAmount = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.CompleteAmount = options.longs === String ? "0" : 0;
                object.Complete = 0;
                object.Status = 0;
                object.TotalAll = 0;
                object.TotalUserWinLose = 0;
                object.TodayUserWinLose = 0;
            }
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                object.UserID = message.UserID;
            if (message.AssignAmount != null && message.hasOwnProperty("AssignAmount"))
                if (typeof message.AssignAmount === "number")
                    object.AssignAmount = options.longs === String ? String(message.AssignAmount) : message.AssignAmount;
                else
                    object.AssignAmount = options.longs === String ? $util.Long.prototype.toString.call(message.AssignAmount) : options.longs === Number ? new $util.LongBits(message.AssignAmount.low >>> 0, message.AssignAmount.high >>> 0).toNumber() : message.AssignAmount;
            if (message.AssignRate != null && message.hasOwnProperty("AssignRate"))
                object.AssignRate = message.AssignRate;
            if (message.CompleteAmount != null && message.hasOwnProperty("CompleteAmount"))
                if (typeof message.CompleteAmount === "number")
                    object.CompleteAmount = options.longs === String ? String(message.CompleteAmount) : message.CompleteAmount;
                else
                    object.CompleteAmount = options.longs === String ? $util.Long.prototype.toString.call(message.CompleteAmount) : options.longs === Number ? new $util.LongBits(message.CompleteAmount.low >>> 0, message.CompleteAmount.high >>> 0).toNumber() : message.CompleteAmount;
            if (message.Complete != null && message.hasOwnProperty("Complete"))
                object.Complete = message.Complete;
            if (message.Status != null && message.hasOwnProperty("Status"))
                object.Status = message.Status;
            if (message.TotalAll != null && message.hasOwnProperty("TotalAll"))
                object.TotalAll = message.TotalAll;
            if (message.TotalUserWinLose != null && message.hasOwnProperty("TotalUserWinLose"))
                object.TotalUserWinLose = message.TotalUserWinLose;
            if (message.TodayUserWinLose != null && message.hasOwnProperty("TodayUserWinLose"))
                object.TodayUserWinLose = message.TodayUserWinLose;
            return object;
        };

        /**
         * Converts this SuperToolVipUserData to JSON.
         * @function toJSON
         * @memberof GameMsg_LHD.SuperToolVipUserData
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SuperToolVipUserData.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SuperToolVipUserData;
    })();

    GameMsg_LHD.SuperToolFishGetSystemRewardDetail = (function() {

        /**
         * Properties of a SuperToolFishGetSystemRewardDetail.
         * @memberof GameMsg_LHD
         * @interface ISuperToolFishGetSystemRewardDetail
         * @property {Array.<GameMsg_LHD.IFishSystemRewardDataList>|null} [FishRewardList] SuperToolFishGetSystemRewardDetail FishRewardList
         */

        /**
         * Constructs a new SuperToolFishGetSystemRewardDetail.
         * @memberof GameMsg_LHD
         * @classdesc Represents a SuperToolFishGetSystemRewardDetail.
         * @implements ISuperToolFishGetSystemRewardDetail
         * @constructor
         * @param {GameMsg_LHD.ISuperToolFishGetSystemRewardDetail=} [properties] Properties to set
         */
        function SuperToolFishGetSystemRewardDetail(properties) {
            this.FishRewardList = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SuperToolFishGetSystemRewardDetail FishRewardList.
         * @member {Array.<GameMsg_LHD.IFishSystemRewardDataList>} FishRewardList
         * @memberof GameMsg_LHD.SuperToolFishGetSystemRewardDetail
         * @instance
         */
        SuperToolFishGetSystemRewardDetail.prototype.FishRewardList = $util.emptyArray;

        /**
         * Creates a new SuperToolFishGetSystemRewardDetail instance using the specified properties.
         * @function create
         * @memberof GameMsg_LHD.SuperToolFishGetSystemRewardDetail
         * @static
         * @param {GameMsg_LHD.ISuperToolFishGetSystemRewardDetail=} [properties] Properties to set
         * @returns {GameMsg_LHD.SuperToolFishGetSystemRewardDetail} SuperToolFishGetSystemRewardDetail instance
         */
        SuperToolFishGetSystemRewardDetail.create = function create(properties) {
            return new SuperToolFishGetSystemRewardDetail(properties);
        };

        /**
         * Encodes the specified SuperToolFishGetSystemRewardDetail message. Does not implicitly {@link GameMsg_LHD.SuperToolFishGetSystemRewardDetail.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_LHD.SuperToolFishGetSystemRewardDetail
         * @static
         * @param {GameMsg_LHD.ISuperToolFishGetSystemRewardDetail} message SuperToolFishGetSystemRewardDetail message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SuperToolFishGetSystemRewardDetail.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.FishRewardList != null && message.FishRewardList.length)
                for (var i = 0; i < message.FishRewardList.length; ++i)
                    $root.GameMsg_LHD.FishSystemRewardDataList.encode(message.FishRewardList[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified SuperToolFishGetSystemRewardDetail message, length delimited. Does not implicitly {@link GameMsg_LHD.SuperToolFishGetSystemRewardDetail.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_LHD.SuperToolFishGetSystemRewardDetail
         * @static
         * @param {GameMsg_LHD.ISuperToolFishGetSystemRewardDetail} message SuperToolFishGetSystemRewardDetail message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SuperToolFishGetSystemRewardDetail.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SuperToolFishGetSystemRewardDetail message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_LHD.SuperToolFishGetSystemRewardDetail
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_LHD.SuperToolFishGetSystemRewardDetail} SuperToolFishGetSystemRewardDetail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SuperToolFishGetSystemRewardDetail.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_LHD.SuperToolFishGetSystemRewardDetail();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.FishRewardList && message.FishRewardList.length))
                        message.FishRewardList = [];
                    message.FishRewardList.push($root.GameMsg_LHD.FishSystemRewardDataList.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SuperToolFishGetSystemRewardDetail message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_LHD.SuperToolFishGetSystemRewardDetail
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_LHD.SuperToolFishGetSystemRewardDetail} SuperToolFishGetSystemRewardDetail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SuperToolFishGetSystemRewardDetail.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SuperToolFishGetSystemRewardDetail message.
         * @function verify
         * @memberof GameMsg_LHD.SuperToolFishGetSystemRewardDetail
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SuperToolFishGetSystemRewardDetail.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.FishRewardList != null && message.hasOwnProperty("FishRewardList")) {
                if (!Array.isArray(message.FishRewardList))
                    return "FishRewardList: array expected";
                for (var i = 0; i < message.FishRewardList.length; ++i) {
                    var error = $root.GameMsg_LHD.FishSystemRewardDataList.verify(message.FishRewardList[i]);
                    if (error)
                        return "FishRewardList." + error;
                }
            }
            return null;
        };

        /**
         * Creates a SuperToolFishGetSystemRewardDetail message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_LHD.SuperToolFishGetSystemRewardDetail
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_LHD.SuperToolFishGetSystemRewardDetail} SuperToolFishGetSystemRewardDetail
         */
        SuperToolFishGetSystemRewardDetail.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_LHD.SuperToolFishGetSystemRewardDetail)
                return object;
            var message = new $root.GameMsg_LHD.SuperToolFishGetSystemRewardDetail();
            if (object.FishRewardList) {
                if (!Array.isArray(object.FishRewardList))
                    throw TypeError(".GameMsg_LHD.SuperToolFishGetSystemRewardDetail.FishRewardList: array expected");
                message.FishRewardList = [];
                for (var i = 0; i < object.FishRewardList.length; ++i) {
                    if (typeof object.FishRewardList[i] !== "object")
                        throw TypeError(".GameMsg_LHD.SuperToolFishGetSystemRewardDetail.FishRewardList: object expected");
                    message.FishRewardList[i] = $root.GameMsg_LHD.FishSystemRewardDataList.fromObject(object.FishRewardList[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a SuperToolFishGetSystemRewardDetail message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_LHD.SuperToolFishGetSystemRewardDetail
         * @static
         * @param {GameMsg_LHD.SuperToolFishGetSystemRewardDetail} message SuperToolFishGetSystemRewardDetail
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SuperToolFishGetSystemRewardDetail.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.FishRewardList = [];
            if (message.FishRewardList && message.FishRewardList.length) {
                object.FishRewardList = [];
                for (var j = 0; j < message.FishRewardList.length; ++j)
                    object.FishRewardList[j] = $root.GameMsg_LHD.FishSystemRewardDataList.toObject(message.FishRewardList[j], options);
            }
            return object;
        };

        /**
         * Converts this SuperToolFishGetSystemRewardDetail to JSON.
         * @function toJSON
         * @memberof GameMsg_LHD.SuperToolFishGetSystemRewardDetail
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SuperToolFishGetSystemRewardDetail.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SuperToolFishGetSystemRewardDetail;
    })();

    GameMsg_LHD.FishSystemRewardDataList = (function() {

        /**
         * Properties of a FishSystemRewardDataList.
         * @memberof GameMsg_LHD
         * @interface IFishSystemRewardDataList
         * @property {number} FishID FishSystemRewardDataList FishID
         * @property {number|Long} Amount FishSystemRewardDataList Amount
         * @property {number|Long} FinishAmount FishSystemRewardDataList FinishAmount
         * @property {number} Rate FishSystemRewardDataList Rate
         * @property {number} Status FishSystemRewardDataList Status
         */

        /**
         * Constructs a new FishSystemRewardDataList.
         * @memberof GameMsg_LHD
         * @classdesc Represents a FishSystemRewardDataList.
         * @implements IFishSystemRewardDataList
         * @constructor
         * @param {GameMsg_LHD.IFishSystemRewardDataList=} [properties] Properties to set
         */
        function FishSystemRewardDataList(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * FishSystemRewardDataList FishID.
         * @member {number} FishID
         * @memberof GameMsg_LHD.FishSystemRewardDataList
         * @instance
         */
        FishSystemRewardDataList.prototype.FishID = 0;

        /**
         * FishSystemRewardDataList Amount.
         * @member {number|Long} Amount
         * @memberof GameMsg_LHD.FishSystemRewardDataList
         * @instance
         */
        FishSystemRewardDataList.prototype.Amount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * FishSystemRewardDataList FinishAmount.
         * @member {number|Long} FinishAmount
         * @memberof GameMsg_LHD.FishSystemRewardDataList
         * @instance
         */
        FishSystemRewardDataList.prototype.FinishAmount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * FishSystemRewardDataList Rate.
         * @member {number} Rate
         * @memberof GameMsg_LHD.FishSystemRewardDataList
         * @instance
         */
        FishSystemRewardDataList.prototype.Rate = 0;

        /**
         * FishSystemRewardDataList Status.
         * @member {number} Status
         * @memberof GameMsg_LHD.FishSystemRewardDataList
         * @instance
         */
        FishSystemRewardDataList.prototype.Status = 0;

        /**
         * Creates a new FishSystemRewardDataList instance using the specified properties.
         * @function create
         * @memberof GameMsg_LHD.FishSystemRewardDataList
         * @static
         * @param {GameMsg_LHD.IFishSystemRewardDataList=} [properties] Properties to set
         * @returns {GameMsg_LHD.FishSystemRewardDataList} FishSystemRewardDataList instance
         */
        FishSystemRewardDataList.create = function create(properties) {
            return new FishSystemRewardDataList(properties);
        };

        /**
         * Encodes the specified FishSystemRewardDataList message. Does not implicitly {@link GameMsg_LHD.FishSystemRewardDataList.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_LHD.FishSystemRewardDataList
         * @static
         * @param {GameMsg_LHD.IFishSystemRewardDataList} message FishSystemRewardDataList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FishSystemRewardDataList.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.FishID);
            writer.uint32(/* id 2, wireType 0 =*/16).int64(message.Amount);
            writer.uint32(/* id 3, wireType 0 =*/24).int64(message.FinishAmount);
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.Rate);
            writer.uint32(/* id 5, wireType 0 =*/40).int32(message.Status);
            return writer;
        };

        /**
         * Encodes the specified FishSystemRewardDataList message, length delimited. Does not implicitly {@link GameMsg_LHD.FishSystemRewardDataList.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_LHD.FishSystemRewardDataList
         * @static
         * @param {GameMsg_LHD.IFishSystemRewardDataList} message FishSystemRewardDataList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FishSystemRewardDataList.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FishSystemRewardDataList message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_LHD.FishSystemRewardDataList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_LHD.FishSystemRewardDataList} FishSystemRewardDataList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FishSystemRewardDataList.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_LHD.FishSystemRewardDataList();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.FishID = reader.int32();
                    break;
                case 2:
                    message.Amount = reader.int64();
                    break;
                case 3:
                    message.FinishAmount = reader.int64();
                    break;
                case 4:
                    message.Rate = reader.int32();
                    break;
                case 5:
                    message.Status = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("FishID"))
                throw $util.ProtocolError("missing required 'FishID'", { instance: message });
            if (!message.hasOwnProperty("Amount"))
                throw $util.ProtocolError("missing required 'Amount'", { instance: message });
            if (!message.hasOwnProperty("FinishAmount"))
                throw $util.ProtocolError("missing required 'FinishAmount'", { instance: message });
            if (!message.hasOwnProperty("Rate"))
                throw $util.ProtocolError("missing required 'Rate'", { instance: message });
            if (!message.hasOwnProperty("Status"))
                throw $util.ProtocolError("missing required 'Status'", { instance: message });
            return message;
        };

        /**
         * Decodes a FishSystemRewardDataList message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_LHD.FishSystemRewardDataList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_LHD.FishSystemRewardDataList} FishSystemRewardDataList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FishSystemRewardDataList.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a FishSystemRewardDataList message.
         * @function verify
         * @memberof GameMsg_LHD.FishSystemRewardDataList
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FishSystemRewardDataList.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.FishID))
                return "FishID: integer expected";
            if (!$util.isInteger(message.Amount) && !(message.Amount && $util.isInteger(message.Amount.low) && $util.isInteger(message.Amount.high)))
                return "Amount: integer|Long expected";
            if (!$util.isInteger(message.FinishAmount) && !(message.FinishAmount && $util.isInteger(message.FinishAmount.low) && $util.isInteger(message.FinishAmount.high)))
                return "FinishAmount: integer|Long expected";
            if (!$util.isInteger(message.Rate))
                return "Rate: integer expected";
            if (!$util.isInteger(message.Status))
                return "Status: integer expected";
            return null;
        };

        /**
         * Creates a FishSystemRewardDataList message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_LHD.FishSystemRewardDataList
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_LHD.FishSystemRewardDataList} FishSystemRewardDataList
         */
        FishSystemRewardDataList.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_LHD.FishSystemRewardDataList)
                return object;
            var message = new $root.GameMsg_LHD.FishSystemRewardDataList();
            if (object.FishID != null)
                message.FishID = object.FishID | 0;
            if (object.Amount != null)
                if ($util.Long)
                    (message.Amount = $util.Long.fromValue(object.Amount)).unsigned = false;
                else if (typeof object.Amount === "string")
                    message.Amount = parseInt(object.Amount, 10);
                else if (typeof object.Amount === "number")
                    message.Amount = object.Amount;
                else if (typeof object.Amount === "object")
                    message.Amount = new $util.LongBits(object.Amount.low >>> 0, object.Amount.high >>> 0).toNumber();
            if (object.FinishAmount != null)
                if ($util.Long)
                    (message.FinishAmount = $util.Long.fromValue(object.FinishAmount)).unsigned = false;
                else if (typeof object.FinishAmount === "string")
                    message.FinishAmount = parseInt(object.FinishAmount, 10);
                else if (typeof object.FinishAmount === "number")
                    message.FinishAmount = object.FinishAmount;
                else if (typeof object.FinishAmount === "object")
                    message.FinishAmount = new $util.LongBits(object.FinishAmount.low >>> 0, object.FinishAmount.high >>> 0).toNumber();
            if (object.Rate != null)
                message.Rate = object.Rate | 0;
            if (object.Status != null)
                message.Status = object.Status | 0;
            return message;
        };

        /**
         * Creates a plain object from a FishSystemRewardDataList message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_LHD.FishSystemRewardDataList
         * @static
         * @param {GameMsg_LHD.FishSystemRewardDataList} message FishSystemRewardDataList
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FishSystemRewardDataList.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.FishID = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.Amount = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.Amount = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.FinishAmount = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.FinishAmount = options.longs === String ? "0" : 0;
                object.Rate = 0;
                object.Status = 0;
            }
            if (message.FishID != null && message.hasOwnProperty("FishID"))
                object.FishID = message.FishID;
            if (message.Amount != null && message.hasOwnProperty("Amount"))
                if (typeof message.Amount === "number")
                    object.Amount = options.longs === String ? String(message.Amount) : message.Amount;
                else
                    object.Amount = options.longs === String ? $util.Long.prototype.toString.call(message.Amount) : options.longs === Number ? new $util.LongBits(message.Amount.low >>> 0, message.Amount.high >>> 0).toNumber() : message.Amount;
            if (message.FinishAmount != null && message.hasOwnProperty("FinishAmount"))
                if (typeof message.FinishAmount === "number")
                    object.FinishAmount = options.longs === String ? String(message.FinishAmount) : message.FinishAmount;
                else
                    object.FinishAmount = options.longs === String ? $util.Long.prototype.toString.call(message.FinishAmount) : options.longs === Number ? new $util.LongBits(message.FinishAmount.low >>> 0, message.FinishAmount.high >>> 0).toNumber() : message.FinishAmount;
            if (message.Rate != null && message.hasOwnProperty("Rate"))
                object.Rate = message.Rate;
            if (message.Status != null && message.hasOwnProperty("Status"))
                object.Status = message.Status;
            return object;
        };

        /**
         * Converts this FishSystemRewardDataList to JSON.
         * @function toJSON
         * @memberof GameMsg_LHD.FishSystemRewardDataList
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FishSystemRewardDataList.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return FishSystemRewardDataList;
    })();

    GameMsg_LHD.SuperToolFishGetVIPUserRewardDetail = (function() {

        /**
         * Properties of a SuperToolFishGetVIPUserRewardDetail.
         * @memberof GameMsg_LHD
         * @interface ISuperToolFishGetVIPUserRewardDetail
         * @property {Array.<GameMsg_LHD.IFishVIPUserRewardDataList>|null} [FishVIPUserList] SuperToolFishGetVIPUserRewardDetail FishVIPUserList
         */

        /**
         * Constructs a new SuperToolFishGetVIPUserRewardDetail.
         * @memberof GameMsg_LHD
         * @classdesc Represents a SuperToolFishGetVIPUserRewardDetail.
         * @implements ISuperToolFishGetVIPUserRewardDetail
         * @constructor
         * @param {GameMsg_LHD.ISuperToolFishGetVIPUserRewardDetail=} [properties] Properties to set
         */
        function SuperToolFishGetVIPUserRewardDetail(properties) {
            this.FishVIPUserList = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SuperToolFishGetVIPUserRewardDetail FishVIPUserList.
         * @member {Array.<GameMsg_LHD.IFishVIPUserRewardDataList>} FishVIPUserList
         * @memberof GameMsg_LHD.SuperToolFishGetVIPUserRewardDetail
         * @instance
         */
        SuperToolFishGetVIPUserRewardDetail.prototype.FishVIPUserList = $util.emptyArray;

        /**
         * Creates a new SuperToolFishGetVIPUserRewardDetail instance using the specified properties.
         * @function create
         * @memberof GameMsg_LHD.SuperToolFishGetVIPUserRewardDetail
         * @static
         * @param {GameMsg_LHD.ISuperToolFishGetVIPUserRewardDetail=} [properties] Properties to set
         * @returns {GameMsg_LHD.SuperToolFishGetVIPUserRewardDetail} SuperToolFishGetVIPUserRewardDetail instance
         */
        SuperToolFishGetVIPUserRewardDetail.create = function create(properties) {
            return new SuperToolFishGetVIPUserRewardDetail(properties);
        };

        /**
         * Encodes the specified SuperToolFishGetVIPUserRewardDetail message. Does not implicitly {@link GameMsg_LHD.SuperToolFishGetVIPUserRewardDetail.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_LHD.SuperToolFishGetVIPUserRewardDetail
         * @static
         * @param {GameMsg_LHD.ISuperToolFishGetVIPUserRewardDetail} message SuperToolFishGetVIPUserRewardDetail message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SuperToolFishGetVIPUserRewardDetail.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.FishVIPUserList != null && message.FishVIPUserList.length)
                for (var i = 0; i < message.FishVIPUserList.length; ++i)
                    $root.GameMsg_LHD.FishVIPUserRewardDataList.encode(message.FishVIPUserList[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified SuperToolFishGetVIPUserRewardDetail message, length delimited. Does not implicitly {@link GameMsg_LHD.SuperToolFishGetVIPUserRewardDetail.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_LHD.SuperToolFishGetVIPUserRewardDetail
         * @static
         * @param {GameMsg_LHD.ISuperToolFishGetVIPUserRewardDetail} message SuperToolFishGetVIPUserRewardDetail message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SuperToolFishGetVIPUserRewardDetail.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SuperToolFishGetVIPUserRewardDetail message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_LHD.SuperToolFishGetVIPUserRewardDetail
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_LHD.SuperToolFishGetVIPUserRewardDetail} SuperToolFishGetVIPUserRewardDetail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SuperToolFishGetVIPUserRewardDetail.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_LHD.SuperToolFishGetVIPUserRewardDetail();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.FishVIPUserList && message.FishVIPUserList.length))
                        message.FishVIPUserList = [];
                    message.FishVIPUserList.push($root.GameMsg_LHD.FishVIPUserRewardDataList.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SuperToolFishGetVIPUserRewardDetail message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_LHD.SuperToolFishGetVIPUserRewardDetail
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_LHD.SuperToolFishGetVIPUserRewardDetail} SuperToolFishGetVIPUserRewardDetail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SuperToolFishGetVIPUserRewardDetail.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SuperToolFishGetVIPUserRewardDetail message.
         * @function verify
         * @memberof GameMsg_LHD.SuperToolFishGetVIPUserRewardDetail
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SuperToolFishGetVIPUserRewardDetail.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.FishVIPUserList != null && message.hasOwnProperty("FishVIPUserList")) {
                if (!Array.isArray(message.FishVIPUserList))
                    return "FishVIPUserList: array expected";
                for (var i = 0; i < message.FishVIPUserList.length; ++i) {
                    var error = $root.GameMsg_LHD.FishVIPUserRewardDataList.verify(message.FishVIPUserList[i]);
                    if (error)
                        return "FishVIPUserList." + error;
                }
            }
            return null;
        };

        /**
         * Creates a SuperToolFishGetVIPUserRewardDetail message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_LHD.SuperToolFishGetVIPUserRewardDetail
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_LHD.SuperToolFishGetVIPUserRewardDetail} SuperToolFishGetVIPUserRewardDetail
         */
        SuperToolFishGetVIPUserRewardDetail.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_LHD.SuperToolFishGetVIPUserRewardDetail)
                return object;
            var message = new $root.GameMsg_LHD.SuperToolFishGetVIPUserRewardDetail();
            if (object.FishVIPUserList) {
                if (!Array.isArray(object.FishVIPUserList))
                    throw TypeError(".GameMsg_LHD.SuperToolFishGetVIPUserRewardDetail.FishVIPUserList: array expected");
                message.FishVIPUserList = [];
                for (var i = 0; i < object.FishVIPUserList.length; ++i) {
                    if (typeof object.FishVIPUserList[i] !== "object")
                        throw TypeError(".GameMsg_LHD.SuperToolFishGetVIPUserRewardDetail.FishVIPUserList: object expected");
                    message.FishVIPUserList[i] = $root.GameMsg_LHD.FishVIPUserRewardDataList.fromObject(object.FishVIPUserList[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a SuperToolFishGetVIPUserRewardDetail message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_LHD.SuperToolFishGetVIPUserRewardDetail
         * @static
         * @param {GameMsg_LHD.SuperToolFishGetVIPUserRewardDetail} message SuperToolFishGetVIPUserRewardDetail
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SuperToolFishGetVIPUserRewardDetail.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.FishVIPUserList = [];
            if (message.FishVIPUserList && message.FishVIPUserList.length) {
                object.FishVIPUserList = [];
                for (var j = 0; j < message.FishVIPUserList.length; ++j)
                    object.FishVIPUserList[j] = $root.GameMsg_LHD.FishVIPUserRewardDataList.toObject(message.FishVIPUserList[j], options);
            }
            return object;
        };

        /**
         * Converts this SuperToolFishGetVIPUserRewardDetail to JSON.
         * @function toJSON
         * @memberof GameMsg_LHD.SuperToolFishGetVIPUserRewardDetail
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SuperToolFishGetVIPUserRewardDetail.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SuperToolFishGetVIPUserRewardDetail;
    })();

    GameMsg_LHD.FishVIPUserRewardDataList = (function() {

        /**
         * Properties of a FishVIPUserRewardDataList.
         * @memberof GameMsg_LHD
         * @interface IFishVIPUserRewardDataList
         * @property {number} UserID FishVIPUserRewardDataList UserID
         * @property {number|Long} AssignAmount FishVIPUserRewardDataList AssignAmount
         * @property {number} Rate FishVIPUserRewardDataList Rate
         * @property {number|Long} FinishAmount FishVIPUserRewardDataList FinishAmount
         * @property {number} Status FishVIPUserRewardDataList Status
         * @property {number|Long} SumAssignAmount FishVIPUserRewardDataList SumAssignAmount
         */

        /**
         * Constructs a new FishVIPUserRewardDataList.
         * @memberof GameMsg_LHD
         * @classdesc Represents a FishVIPUserRewardDataList.
         * @implements IFishVIPUserRewardDataList
         * @constructor
         * @param {GameMsg_LHD.IFishVIPUserRewardDataList=} [properties] Properties to set
         */
        function FishVIPUserRewardDataList(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * FishVIPUserRewardDataList UserID.
         * @member {number} UserID
         * @memberof GameMsg_LHD.FishVIPUserRewardDataList
         * @instance
         */
        FishVIPUserRewardDataList.prototype.UserID = 0;

        /**
         * FishVIPUserRewardDataList AssignAmount.
         * @member {number|Long} AssignAmount
         * @memberof GameMsg_LHD.FishVIPUserRewardDataList
         * @instance
         */
        FishVIPUserRewardDataList.prototype.AssignAmount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * FishVIPUserRewardDataList Rate.
         * @member {number} Rate
         * @memberof GameMsg_LHD.FishVIPUserRewardDataList
         * @instance
         */
        FishVIPUserRewardDataList.prototype.Rate = 0;

        /**
         * FishVIPUserRewardDataList FinishAmount.
         * @member {number|Long} FinishAmount
         * @memberof GameMsg_LHD.FishVIPUserRewardDataList
         * @instance
         */
        FishVIPUserRewardDataList.prototype.FinishAmount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * FishVIPUserRewardDataList Status.
         * @member {number} Status
         * @memberof GameMsg_LHD.FishVIPUserRewardDataList
         * @instance
         */
        FishVIPUserRewardDataList.prototype.Status = 0;

        /**
         * FishVIPUserRewardDataList SumAssignAmount.
         * @member {number|Long} SumAssignAmount
         * @memberof GameMsg_LHD.FishVIPUserRewardDataList
         * @instance
         */
        FishVIPUserRewardDataList.prototype.SumAssignAmount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new FishVIPUserRewardDataList instance using the specified properties.
         * @function create
         * @memberof GameMsg_LHD.FishVIPUserRewardDataList
         * @static
         * @param {GameMsg_LHD.IFishVIPUserRewardDataList=} [properties] Properties to set
         * @returns {GameMsg_LHD.FishVIPUserRewardDataList} FishVIPUserRewardDataList instance
         */
        FishVIPUserRewardDataList.create = function create(properties) {
            return new FishVIPUserRewardDataList(properties);
        };

        /**
         * Encodes the specified FishVIPUserRewardDataList message. Does not implicitly {@link GameMsg_LHD.FishVIPUserRewardDataList.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_LHD.FishVIPUserRewardDataList
         * @static
         * @param {GameMsg_LHD.IFishVIPUserRewardDataList} message FishVIPUserRewardDataList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FishVIPUserRewardDataList.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.UserID);
            writer.uint32(/* id 2, wireType 0 =*/16).int64(message.AssignAmount);
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.Rate);
            writer.uint32(/* id 4, wireType 0 =*/32).int64(message.FinishAmount);
            writer.uint32(/* id 5, wireType 0 =*/40).int32(message.Status);
            writer.uint32(/* id 6, wireType 0 =*/48).int64(message.SumAssignAmount);
            return writer;
        };

        /**
         * Encodes the specified FishVIPUserRewardDataList message, length delimited. Does not implicitly {@link GameMsg_LHD.FishVIPUserRewardDataList.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_LHD.FishVIPUserRewardDataList
         * @static
         * @param {GameMsg_LHD.IFishVIPUserRewardDataList} message FishVIPUserRewardDataList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FishVIPUserRewardDataList.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FishVIPUserRewardDataList message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_LHD.FishVIPUserRewardDataList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_LHD.FishVIPUserRewardDataList} FishVIPUserRewardDataList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FishVIPUserRewardDataList.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_LHD.FishVIPUserRewardDataList();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.UserID = reader.int32();
                    break;
                case 2:
                    message.AssignAmount = reader.int64();
                    break;
                case 3:
                    message.Rate = reader.int32();
                    break;
                case 4:
                    message.FinishAmount = reader.int64();
                    break;
                case 5:
                    message.Status = reader.int32();
                    break;
                case 6:
                    message.SumAssignAmount = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("UserID"))
                throw $util.ProtocolError("missing required 'UserID'", { instance: message });
            if (!message.hasOwnProperty("AssignAmount"))
                throw $util.ProtocolError("missing required 'AssignAmount'", { instance: message });
            if (!message.hasOwnProperty("Rate"))
                throw $util.ProtocolError("missing required 'Rate'", { instance: message });
            if (!message.hasOwnProperty("FinishAmount"))
                throw $util.ProtocolError("missing required 'FinishAmount'", { instance: message });
            if (!message.hasOwnProperty("Status"))
                throw $util.ProtocolError("missing required 'Status'", { instance: message });
            if (!message.hasOwnProperty("SumAssignAmount"))
                throw $util.ProtocolError("missing required 'SumAssignAmount'", { instance: message });
            return message;
        };

        /**
         * Decodes a FishVIPUserRewardDataList message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_LHD.FishVIPUserRewardDataList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_LHD.FishVIPUserRewardDataList} FishVIPUserRewardDataList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FishVIPUserRewardDataList.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a FishVIPUserRewardDataList message.
         * @function verify
         * @memberof GameMsg_LHD.FishVIPUserRewardDataList
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FishVIPUserRewardDataList.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.UserID))
                return "UserID: integer expected";
            if (!$util.isInteger(message.AssignAmount) && !(message.AssignAmount && $util.isInteger(message.AssignAmount.low) && $util.isInteger(message.AssignAmount.high)))
                return "AssignAmount: integer|Long expected";
            if (!$util.isInteger(message.Rate))
                return "Rate: integer expected";
            if (!$util.isInteger(message.FinishAmount) && !(message.FinishAmount && $util.isInteger(message.FinishAmount.low) && $util.isInteger(message.FinishAmount.high)))
                return "FinishAmount: integer|Long expected";
            if (!$util.isInteger(message.Status))
                return "Status: integer expected";
            if (!$util.isInteger(message.SumAssignAmount) && !(message.SumAssignAmount && $util.isInteger(message.SumAssignAmount.low) && $util.isInteger(message.SumAssignAmount.high)))
                return "SumAssignAmount: integer|Long expected";
            return null;
        };

        /**
         * Creates a FishVIPUserRewardDataList message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_LHD.FishVIPUserRewardDataList
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_LHD.FishVIPUserRewardDataList} FishVIPUserRewardDataList
         */
        FishVIPUserRewardDataList.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_LHD.FishVIPUserRewardDataList)
                return object;
            var message = new $root.GameMsg_LHD.FishVIPUserRewardDataList();
            if (object.UserID != null)
                message.UserID = object.UserID | 0;
            if (object.AssignAmount != null)
                if ($util.Long)
                    (message.AssignAmount = $util.Long.fromValue(object.AssignAmount)).unsigned = false;
                else if (typeof object.AssignAmount === "string")
                    message.AssignAmount = parseInt(object.AssignAmount, 10);
                else if (typeof object.AssignAmount === "number")
                    message.AssignAmount = object.AssignAmount;
                else if (typeof object.AssignAmount === "object")
                    message.AssignAmount = new $util.LongBits(object.AssignAmount.low >>> 0, object.AssignAmount.high >>> 0).toNumber();
            if (object.Rate != null)
                message.Rate = object.Rate | 0;
            if (object.FinishAmount != null)
                if ($util.Long)
                    (message.FinishAmount = $util.Long.fromValue(object.FinishAmount)).unsigned = false;
                else if (typeof object.FinishAmount === "string")
                    message.FinishAmount = parseInt(object.FinishAmount, 10);
                else if (typeof object.FinishAmount === "number")
                    message.FinishAmount = object.FinishAmount;
                else if (typeof object.FinishAmount === "object")
                    message.FinishAmount = new $util.LongBits(object.FinishAmount.low >>> 0, object.FinishAmount.high >>> 0).toNumber();
            if (object.Status != null)
                message.Status = object.Status | 0;
            if (object.SumAssignAmount != null)
                if ($util.Long)
                    (message.SumAssignAmount = $util.Long.fromValue(object.SumAssignAmount)).unsigned = false;
                else if (typeof object.SumAssignAmount === "string")
                    message.SumAssignAmount = parseInt(object.SumAssignAmount, 10);
                else if (typeof object.SumAssignAmount === "number")
                    message.SumAssignAmount = object.SumAssignAmount;
                else if (typeof object.SumAssignAmount === "object")
                    message.SumAssignAmount = new $util.LongBits(object.SumAssignAmount.low >>> 0, object.SumAssignAmount.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a FishVIPUserRewardDataList message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_LHD.FishVIPUserRewardDataList
         * @static
         * @param {GameMsg_LHD.FishVIPUserRewardDataList} message FishVIPUserRewardDataList
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FishVIPUserRewardDataList.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.UserID = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.AssignAmount = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.AssignAmount = options.longs === String ? "0" : 0;
                object.Rate = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.FinishAmount = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.FinishAmount = options.longs === String ? "0" : 0;
                object.Status = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.SumAssignAmount = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.SumAssignAmount = options.longs === String ? "0" : 0;
            }
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                object.UserID = message.UserID;
            if (message.AssignAmount != null && message.hasOwnProperty("AssignAmount"))
                if (typeof message.AssignAmount === "number")
                    object.AssignAmount = options.longs === String ? String(message.AssignAmount) : message.AssignAmount;
                else
                    object.AssignAmount = options.longs === String ? $util.Long.prototype.toString.call(message.AssignAmount) : options.longs === Number ? new $util.LongBits(message.AssignAmount.low >>> 0, message.AssignAmount.high >>> 0).toNumber() : message.AssignAmount;
            if (message.Rate != null && message.hasOwnProperty("Rate"))
                object.Rate = message.Rate;
            if (message.FinishAmount != null && message.hasOwnProperty("FinishAmount"))
                if (typeof message.FinishAmount === "number")
                    object.FinishAmount = options.longs === String ? String(message.FinishAmount) : message.FinishAmount;
                else
                    object.FinishAmount = options.longs === String ? $util.Long.prototype.toString.call(message.FinishAmount) : options.longs === Number ? new $util.LongBits(message.FinishAmount.low >>> 0, message.FinishAmount.high >>> 0).toNumber() : message.FinishAmount;
            if (message.Status != null && message.hasOwnProperty("Status"))
                object.Status = message.Status;
            if (message.SumAssignAmount != null && message.hasOwnProperty("SumAssignAmount"))
                if (typeof message.SumAssignAmount === "number")
                    object.SumAssignAmount = options.longs === String ? String(message.SumAssignAmount) : message.SumAssignAmount;
                else
                    object.SumAssignAmount = options.longs === String ? $util.Long.prototype.toString.call(message.SumAssignAmount) : options.longs === Number ? new $util.LongBits(message.SumAssignAmount.low >>> 0, message.SumAssignAmount.high >>> 0).toNumber() : message.SumAssignAmount;
            return object;
        };

        /**
         * Converts this FishVIPUserRewardDataList to JSON.
         * @function toJSON
         * @memberof GameMsg_LHD.FishVIPUserRewardDataList
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FishVIPUserRewardDataList.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return FishVIPUserRewardDataList;
    })();

    GameMsg_LHD.SuperToolFishUpdSystemRewardDetail = (function() {

        /**
         * Properties of a SuperToolFishUpdSystemRewardDetail.
         * @memberof GameMsg_LHD
         * @interface ISuperToolFishUpdSystemRewardDetail
         * @property {number} FlagID SuperToolFishUpdSystemRewardDetail FlagID
         * @property {Array.<GameMsg_LHD.ISuperToolFishUpdSystemRewardDataList>|null} [FishRewardList] SuperToolFishUpdSystemRewardDetail FishRewardList
         */

        /**
         * Constructs a new SuperToolFishUpdSystemRewardDetail.
         * @memberof GameMsg_LHD
         * @classdesc Represents a SuperToolFishUpdSystemRewardDetail.
         * @implements ISuperToolFishUpdSystemRewardDetail
         * @constructor
         * @param {GameMsg_LHD.ISuperToolFishUpdSystemRewardDetail=} [properties] Properties to set
         */
        function SuperToolFishUpdSystemRewardDetail(properties) {
            this.FishRewardList = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SuperToolFishUpdSystemRewardDetail FlagID.
         * @member {number} FlagID
         * @memberof GameMsg_LHD.SuperToolFishUpdSystemRewardDetail
         * @instance
         */
        SuperToolFishUpdSystemRewardDetail.prototype.FlagID = 0;

        /**
         * SuperToolFishUpdSystemRewardDetail FishRewardList.
         * @member {Array.<GameMsg_LHD.ISuperToolFishUpdSystemRewardDataList>} FishRewardList
         * @memberof GameMsg_LHD.SuperToolFishUpdSystemRewardDetail
         * @instance
         */
        SuperToolFishUpdSystemRewardDetail.prototype.FishRewardList = $util.emptyArray;

        /**
         * Creates a new SuperToolFishUpdSystemRewardDetail instance using the specified properties.
         * @function create
         * @memberof GameMsg_LHD.SuperToolFishUpdSystemRewardDetail
         * @static
         * @param {GameMsg_LHD.ISuperToolFishUpdSystemRewardDetail=} [properties] Properties to set
         * @returns {GameMsg_LHD.SuperToolFishUpdSystemRewardDetail} SuperToolFishUpdSystemRewardDetail instance
         */
        SuperToolFishUpdSystemRewardDetail.create = function create(properties) {
            return new SuperToolFishUpdSystemRewardDetail(properties);
        };

        /**
         * Encodes the specified SuperToolFishUpdSystemRewardDetail message. Does not implicitly {@link GameMsg_LHD.SuperToolFishUpdSystemRewardDetail.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_LHD.SuperToolFishUpdSystemRewardDetail
         * @static
         * @param {GameMsg_LHD.ISuperToolFishUpdSystemRewardDetail} message SuperToolFishUpdSystemRewardDetail message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SuperToolFishUpdSystemRewardDetail.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.FlagID);
            if (message.FishRewardList != null && message.FishRewardList.length)
                for (var i = 0; i < message.FishRewardList.length; ++i)
                    $root.GameMsg_LHD.SuperToolFishUpdSystemRewardDataList.encode(message.FishRewardList[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified SuperToolFishUpdSystemRewardDetail message, length delimited. Does not implicitly {@link GameMsg_LHD.SuperToolFishUpdSystemRewardDetail.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_LHD.SuperToolFishUpdSystemRewardDetail
         * @static
         * @param {GameMsg_LHD.ISuperToolFishUpdSystemRewardDetail} message SuperToolFishUpdSystemRewardDetail message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SuperToolFishUpdSystemRewardDetail.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SuperToolFishUpdSystemRewardDetail message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_LHD.SuperToolFishUpdSystemRewardDetail
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_LHD.SuperToolFishUpdSystemRewardDetail} SuperToolFishUpdSystemRewardDetail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SuperToolFishUpdSystemRewardDetail.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_LHD.SuperToolFishUpdSystemRewardDetail();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.FlagID = reader.int32();
                    break;
                case 2:
                    if (!(message.FishRewardList && message.FishRewardList.length))
                        message.FishRewardList = [];
                    message.FishRewardList.push($root.GameMsg_LHD.SuperToolFishUpdSystemRewardDataList.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("FlagID"))
                throw $util.ProtocolError("missing required 'FlagID'", { instance: message });
            return message;
        };

        /**
         * Decodes a SuperToolFishUpdSystemRewardDetail message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_LHD.SuperToolFishUpdSystemRewardDetail
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_LHD.SuperToolFishUpdSystemRewardDetail} SuperToolFishUpdSystemRewardDetail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SuperToolFishUpdSystemRewardDetail.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SuperToolFishUpdSystemRewardDetail message.
         * @function verify
         * @memberof GameMsg_LHD.SuperToolFishUpdSystemRewardDetail
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SuperToolFishUpdSystemRewardDetail.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.FlagID))
                return "FlagID: integer expected";
            if (message.FishRewardList != null && message.hasOwnProperty("FishRewardList")) {
                if (!Array.isArray(message.FishRewardList))
                    return "FishRewardList: array expected";
                for (var i = 0; i < message.FishRewardList.length; ++i) {
                    var error = $root.GameMsg_LHD.SuperToolFishUpdSystemRewardDataList.verify(message.FishRewardList[i]);
                    if (error)
                        return "FishRewardList." + error;
                }
            }
            return null;
        };

        /**
         * Creates a SuperToolFishUpdSystemRewardDetail message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_LHD.SuperToolFishUpdSystemRewardDetail
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_LHD.SuperToolFishUpdSystemRewardDetail} SuperToolFishUpdSystemRewardDetail
         */
        SuperToolFishUpdSystemRewardDetail.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_LHD.SuperToolFishUpdSystemRewardDetail)
                return object;
            var message = new $root.GameMsg_LHD.SuperToolFishUpdSystemRewardDetail();
            if (object.FlagID != null)
                message.FlagID = object.FlagID | 0;
            if (object.FishRewardList) {
                if (!Array.isArray(object.FishRewardList))
                    throw TypeError(".GameMsg_LHD.SuperToolFishUpdSystemRewardDetail.FishRewardList: array expected");
                message.FishRewardList = [];
                for (var i = 0; i < object.FishRewardList.length; ++i) {
                    if (typeof object.FishRewardList[i] !== "object")
                        throw TypeError(".GameMsg_LHD.SuperToolFishUpdSystemRewardDetail.FishRewardList: object expected");
                    message.FishRewardList[i] = $root.GameMsg_LHD.SuperToolFishUpdSystemRewardDataList.fromObject(object.FishRewardList[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a SuperToolFishUpdSystemRewardDetail message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_LHD.SuperToolFishUpdSystemRewardDetail
         * @static
         * @param {GameMsg_LHD.SuperToolFishUpdSystemRewardDetail} message SuperToolFishUpdSystemRewardDetail
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SuperToolFishUpdSystemRewardDetail.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.FishRewardList = [];
            if (options.defaults)
                object.FlagID = 0;
            if (message.FlagID != null && message.hasOwnProperty("FlagID"))
                object.FlagID = message.FlagID;
            if (message.FishRewardList && message.FishRewardList.length) {
                object.FishRewardList = [];
                for (var j = 0; j < message.FishRewardList.length; ++j)
                    object.FishRewardList[j] = $root.GameMsg_LHD.SuperToolFishUpdSystemRewardDataList.toObject(message.FishRewardList[j], options);
            }
            return object;
        };

        /**
         * Converts this SuperToolFishUpdSystemRewardDetail to JSON.
         * @function toJSON
         * @memberof GameMsg_LHD.SuperToolFishUpdSystemRewardDetail
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SuperToolFishUpdSystemRewardDetail.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SuperToolFishUpdSystemRewardDetail;
    })();

    GameMsg_LHD.SuperToolFishUpdSystemRewardDataList = (function() {

        /**
         * Properties of a SuperToolFishUpdSystemRewardDataList.
         * @memberof GameMsg_LHD
         * @interface ISuperToolFishUpdSystemRewardDataList
         * @property {number} FishID SuperToolFishUpdSystemRewardDataList FishID
         * @property {number|Long} FinishAmount SuperToolFishUpdSystemRewardDataList FinishAmount
         */

        /**
         * Constructs a new SuperToolFishUpdSystemRewardDataList.
         * @memberof GameMsg_LHD
         * @classdesc Represents a SuperToolFishUpdSystemRewardDataList.
         * @implements ISuperToolFishUpdSystemRewardDataList
         * @constructor
         * @param {GameMsg_LHD.ISuperToolFishUpdSystemRewardDataList=} [properties] Properties to set
         */
        function SuperToolFishUpdSystemRewardDataList(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SuperToolFishUpdSystemRewardDataList FishID.
         * @member {number} FishID
         * @memberof GameMsg_LHD.SuperToolFishUpdSystemRewardDataList
         * @instance
         */
        SuperToolFishUpdSystemRewardDataList.prototype.FishID = 0;

        /**
         * SuperToolFishUpdSystemRewardDataList FinishAmount.
         * @member {number|Long} FinishAmount
         * @memberof GameMsg_LHD.SuperToolFishUpdSystemRewardDataList
         * @instance
         */
        SuperToolFishUpdSystemRewardDataList.prototype.FinishAmount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new SuperToolFishUpdSystemRewardDataList instance using the specified properties.
         * @function create
         * @memberof GameMsg_LHD.SuperToolFishUpdSystemRewardDataList
         * @static
         * @param {GameMsg_LHD.ISuperToolFishUpdSystemRewardDataList=} [properties] Properties to set
         * @returns {GameMsg_LHD.SuperToolFishUpdSystemRewardDataList} SuperToolFishUpdSystemRewardDataList instance
         */
        SuperToolFishUpdSystemRewardDataList.create = function create(properties) {
            return new SuperToolFishUpdSystemRewardDataList(properties);
        };

        /**
         * Encodes the specified SuperToolFishUpdSystemRewardDataList message. Does not implicitly {@link GameMsg_LHD.SuperToolFishUpdSystemRewardDataList.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_LHD.SuperToolFishUpdSystemRewardDataList
         * @static
         * @param {GameMsg_LHD.ISuperToolFishUpdSystemRewardDataList} message SuperToolFishUpdSystemRewardDataList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SuperToolFishUpdSystemRewardDataList.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.FishID);
            writer.uint32(/* id 2, wireType 0 =*/16).int64(message.FinishAmount);
            return writer;
        };

        /**
         * Encodes the specified SuperToolFishUpdSystemRewardDataList message, length delimited. Does not implicitly {@link GameMsg_LHD.SuperToolFishUpdSystemRewardDataList.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_LHD.SuperToolFishUpdSystemRewardDataList
         * @static
         * @param {GameMsg_LHD.ISuperToolFishUpdSystemRewardDataList} message SuperToolFishUpdSystemRewardDataList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SuperToolFishUpdSystemRewardDataList.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SuperToolFishUpdSystemRewardDataList message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_LHD.SuperToolFishUpdSystemRewardDataList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_LHD.SuperToolFishUpdSystemRewardDataList} SuperToolFishUpdSystemRewardDataList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SuperToolFishUpdSystemRewardDataList.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_LHD.SuperToolFishUpdSystemRewardDataList();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.FishID = reader.int32();
                    break;
                case 2:
                    message.FinishAmount = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("FishID"))
                throw $util.ProtocolError("missing required 'FishID'", { instance: message });
            if (!message.hasOwnProperty("FinishAmount"))
                throw $util.ProtocolError("missing required 'FinishAmount'", { instance: message });
            return message;
        };

        /**
         * Decodes a SuperToolFishUpdSystemRewardDataList message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_LHD.SuperToolFishUpdSystemRewardDataList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_LHD.SuperToolFishUpdSystemRewardDataList} SuperToolFishUpdSystemRewardDataList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SuperToolFishUpdSystemRewardDataList.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SuperToolFishUpdSystemRewardDataList message.
         * @function verify
         * @memberof GameMsg_LHD.SuperToolFishUpdSystemRewardDataList
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SuperToolFishUpdSystemRewardDataList.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.FishID))
                return "FishID: integer expected";
            if (!$util.isInteger(message.FinishAmount) && !(message.FinishAmount && $util.isInteger(message.FinishAmount.low) && $util.isInteger(message.FinishAmount.high)))
                return "FinishAmount: integer|Long expected";
            return null;
        };

        /**
         * Creates a SuperToolFishUpdSystemRewardDataList message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_LHD.SuperToolFishUpdSystemRewardDataList
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_LHD.SuperToolFishUpdSystemRewardDataList} SuperToolFishUpdSystemRewardDataList
         */
        SuperToolFishUpdSystemRewardDataList.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_LHD.SuperToolFishUpdSystemRewardDataList)
                return object;
            var message = new $root.GameMsg_LHD.SuperToolFishUpdSystemRewardDataList();
            if (object.FishID != null)
                message.FishID = object.FishID | 0;
            if (object.FinishAmount != null)
                if ($util.Long)
                    (message.FinishAmount = $util.Long.fromValue(object.FinishAmount)).unsigned = false;
                else if (typeof object.FinishAmount === "string")
                    message.FinishAmount = parseInt(object.FinishAmount, 10);
                else if (typeof object.FinishAmount === "number")
                    message.FinishAmount = object.FinishAmount;
                else if (typeof object.FinishAmount === "object")
                    message.FinishAmount = new $util.LongBits(object.FinishAmount.low >>> 0, object.FinishAmount.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a SuperToolFishUpdSystemRewardDataList message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_LHD.SuperToolFishUpdSystemRewardDataList
         * @static
         * @param {GameMsg_LHD.SuperToolFishUpdSystemRewardDataList} message SuperToolFishUpdSystemRewardDataList
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SuperToolFishUpdSystemRewardDataList.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.FishID = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.FinishAmount = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.FinishAmount = options.longs === String ? "0" : 0;
            }
            if (message.FishID != null && message.hasOwnProperty("FishID"))
                object.FishID = message.FishID;
            if (message.FinishAmount != null && message.hasOwnProperty("FinishAmount"))
                if (typeof message.FinishAmount === "number")
                    object.FinishAmount = options.longs === String ? String(message.FinishAmount) : message.FinishAmount;
                else
                    object.FinishAmount = options.longs === String ? $util.Long.prototype.toString.call(message.FinishAmount) : options.longs === Number ? new $util.LongBits(message.FinishAmount.low >>> 0, message.FinishAmount.high >>> 0).toNumber() : message.FinishAmount;
            return object;
        };

        /**
         * Converts this SuperToolFishUpdSystemRewardDataList to JSON.
         * @function toJSON
         * @memberof GameMsg_LHD.SuperToolFishUpdSystemRewardDataList
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SuperToolFishUpdSystemRewardDataList.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SuperToolFishUpdSystemRewardDataList;
    })();

    GameMsg_LHD.SuperToolfishUpdVIPUserRewardDetail = (function() {

        /**
         * Properties of a SuperToolfishUpdVIPUserRewardDetail.
         * @memberof GameMsg_LHD
         * @interface ISuperToolfishUpdVIPUserRewardDetail
         * @property {number} GameID SuperToolfishUpdVIPUserRewardDetail GameID
         * @property {Array.<GameMsg_LHD.ISuperToolFishUpdVIPUserRewardDataList>|null} [FishUserRewardList] SuperToolfishUpdVIPUserRewardDetail FishUserRewardList
         */

        /**
         * Constructs a new SuperToolfishUpdVIPUserRewardDetail.
         * @memberof GameMsg_LHD
         * @classdesc Represents a SuperToolfishUpdVIPUserRewardDetail.
         * @implements ISuperToolfishUpdVIPUserRewardDetail
         * @constructor
         * @param {GameMsg_LHD.ISuperToolfishUpdVIPUserRewardDetail=} [properties] Properties to set
         */
        function SuperToolfishUpdVIPUserRewardDetail(properties) {
            this.FishUserRewardList = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SuperToolfishUpdVIPUserRewardDetail GameID.
         * @member {number} GameID
         * @memberof GameMsg_LHD.SuperToolfishUpdVIPUserRewardDetail
         * @instance
         */
        SuperToolfishUpdVIPUserRewardDetail.prototype.GameID = 0;

        /**
         * SuperToolfishUpdVIPUserRewardDetail FishUserRewardList.
         * @member {Array.<GameMsg_LHD.ISuperToolFishUpdVIPUserRewardDataList>} FishUserRewardList
         * @memberof GameMsg_LHD.SuperToolfishUpdVIPUserRewardDetail
         * @instance
         */
        SuperToolfishUpdVIPUserRewardDetail.prototype.FishUserRewardList = $util.emptyArray;

        /**
         * Creates a new SuperToolfishUpdVIPUserRewardDetail instance using the specified properties.
         * @function create
         * @memberof GameMsg_LHD.SuperToolfishUpdVIPUserRewardDetail
         * @static
         * @param {GameMsg_LHD.ISuperToolfishUpdVIPUserRewardDetail=} [properties] Properties to set
         * @returns {GameMsg_LHD.SuperToolfishUpdVIPUserRewardDetail} SuperToolfishUpdVIPUserRewardDetail instance
         */
        SuperToolfishUpdVIPUserRewardDetail.create = function create(properties) {
            return new SuperToolfishUpdVIPUserRewardDetail(properties);
        };

        /**
         * Encodes the specified SuperToolfishUpdVIPUserRewardDetail message. Does not implicitly {@link GameMsg_LHD.SuperToolfishUpdVIPUserRewardDetail.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_LHD.SuperToolfishUpdVIPUserRewardDetail
         * @static
         * @param {GameMsg_LHD.ISuperToolfishUpdVIPUserRewardDetail} message SuperToolfishUpdVIPUserRewardDetail message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SuperToolfishUpdVIPUserRewardDetail.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.GameID);
            if (message.FishUserRewardList != null && message.FishUserRewardList.length)
                for (var i = 0; i < message.FishUserRewardList.length; ++i)
                    $root.GameMsg_LHD.SuperToolFishUpdVIPUserRewardDataList.encode(message.FishUserRewardList[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified SuperToolfishUpdVIPUserRewardDetail message, length delimited. Does not implicitly {@link GameMsg_LHD.SuperToolfishUpdVIPUserRewardDetail.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_LHD.SuperToolfishUpdVIPUserRewardDetail
         * @static
         * @param {GameMsg_LHD.ISuperToolfishUpdVIPUserRewardDetail} message SuperToolfishUpdVIPUserRewardDetail message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SuperToolfishUpdVIPUserRewardDetail.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SuperToolfishUpdVIPUserRewardDetail message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_LHD.SuperToolfishUpdVIPUserRewardDetail
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_LHD.SuperToolfishUpdVIPUserRewardDetail} SuperToolfishUpdVIPUserRewardDetail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SuperToolfishUpdVIPUserRewardDetail.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_LHD.SuperToolfishUpdVIPUserRewardDetail();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.GameID = reader.int32();
                    break;
                case 2:
                    if (!(message.FishUserRewardList && message.FishUserRewardList.length))
                        message.FishUserRewardList = [];
                    message.FishUserRewardList.push($root.GameMsg_LHD.SuperToolFishUpdVIPUserRewardDataList.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("GameID"))
                throw $util.ProtocolError("missing required 'GameID'", { instance: message });
            return message;
        };

        /**
         * Decodes a SuperToolfishUpdVIPUserRewardDetail message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_LHD.SuperToolfishUpdVIPUserRewardDetail
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_LHD.SuperToolfishUpdVIPUserRewardDetail} SuperToolfishUpdVIPUserRewardDetail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SuperToolfishUpdVIPUserRewardDetail.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SuperToolfishUpdVIPUserRewardDetail message.
         * @function verify
         * @memberof GameMsg_LHD.SuperToolfishUpdVIPUserRewardDetail
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SuperToolfishUpdVIPUserRewardDetail.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.GameID))
                return "GameID: integer expected";
            if (message.FishUserRewardList != null && message.hasOwnProperty("FishUserRewardList")) {
                if (!Array.isArray(message.FishUserRewardList))
                    return "FishUserRewardList: array expected";
                for (var i = 0; i < message.FishUserRewardList.length; ++i) {
                    var error = $root.GameMsg_LHD.SuperToolFishUpdVIPUserRewardDataList.verify(message.FishUserRewardList[i]);
                    if (error)
                        return "FishUserRewardList." + error;
                }
            }
            return null;
        };

        /**
         * Creates a SuperToolfishUpdVIPUserRewardDetail message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_LHD.SuperToolfishUpdVIPUserRewardDetail
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_LHD.SuperToolfishUpdVIPUserRewardDetail} SuperToolfishUpdVIPUserRewardDetail
         */
        SuperToolfishUpdVIPUserRewardDetail.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_LHD.SuperToolfishUpdVIPUserRewardDetail)
                return object;
            var message = new $root.GameMsg_LHD.SuperToolfishUpdVIPUserRewardDetail();
            if (object.GameID != null)
                message.GameID = object.GameID | 0;
            if (object.FishUserRewardList) {
                if (!Array.isArray(object.FishUserRewardList))
                    throw TypeError(".GameMsg_LHD.SuperToolfishUpdVIPUserRewardDetail.FishUserRewardList: array expected");
                message.FishUserRewardList = [];
                for (var i = 0; i < object.FishUserRewardList.length; ++i) {
                    if (typeof object.FishUserRewardList[i] !== "object")
                        throw TypeError(".GameMsg_LHD.SuperToolfishUpdVIPUserRewardDetail.FishUserRewardList: object expected");
                    message.FishUserRewardList[i] = $root.GameMsg_LHD.SuperToolFishUpdVIPUserRewardDataList.fromObject(object.FishUserRewardList[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a SuperToolfishUpdVIPUserRewardDetail message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_LHD.SuperToolfishUpdVIPUserRewardDetail
         * @static
         * @param {GameMsg_LHD.SuperToolfishUpdVIPUserRewardDetail} message SuperToolfishUpdVIPUserRewardDetail
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SuperToolfishUpdVIPUserRewardDetail.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.FishUserRewardList = [];
            if (options.defaults)
                object.GameID = 0;
            if (message.GameID != null && message.hasOwnProperty("GameID"))
                object.GameID = message.GameID;
            if (message.FishUserRewardList && message.FishUserRewardList.length) {
                object.FishUserRewardList = [];
                for (var j = 0; j < message.FishUserRewardList.length; ++j)
                    object.FishUserRewardList[j] = $root.GameMsg_LHD.SuperToolFishUpdVIPUserRewardDataList.toObject(message.FishUserRewardList[j], options);
            }
            return object;
        };

        /**
         * Converts this SuperToolfishUpdVIPUserRewardDetail to JSON.
         * @function toJSON
         * @memberof GameMsg_LHD.SuperToolfishUpdVIPUserRewardDetail
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SuperToolfishUpdVIPUserRewardDetail.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SuperToolfishUpdVIPUserRewardDetail;
    })();

    GameMsg_LHD.SuperToolFishUpdVIPUserRewardDataList = (function() {

        /**
         * Properties of a SuperToolFishUpdVIPUserRewardDataList.
         * @memberof GameMsg_LHD
         * @interface ISuperToolFishUpdVIPUserRewardDataList
         * @property {number} UserID SuperToolFishUpdVIPUserRewardDataList UserID
         * @property {number|Long} FinishAmount SuperToolFishUpdVIPUserRewardDataList FinishAmount
         */

        /**
         * Constructs a new SuperToolFishUpdVIPUserRewardDataList.
         * @memberof GameMsg_LHD
         * @classdesc Represents a SuperToolFishUpdVIPUserRewardDataList.
         * @implements ISuperToolFishUpdVIPUserRewardDataList
         * @constructor
         * @param {GameMsg_LHD.ISuperToolFishUpdVIPUserRewardDataList=} [properties] Properties to set
         */
        function SuperToolFishUpdVIPUserRewardDataList(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SuperToolFishUpdVIPUserRewardDataList UserID.
         * @member {number} UserID
         * @memberof GameMsg_LHD.SuperToolFishUpdVIPUserRewardDataList
         * @instance
         */
        SuperToolFishUpdVIPUserRewardDataList.prototype.UserID = 0;

        /**
         * SuperToolFishUpdVIPUserRewardDataList FinishAmount.
         * @member {number|Long} FinishAmount
         * @memberof GameMsg_LHD.SuperToolFishUpdVIPUserRewardDataList
         * @instance
         */
        SuperToolFishUpdVIPUserRewardDataList.prototype.FinishAmount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new SuperToolFishUpdVIPUserRewardDataList instance using the specified properties.
         * @function create
         * @memberof GameMsg_LHD.SuperToolFishUpdVIPUserRewardDataList
         * @static
         * @param {GameMsg_LHD.ISuperToolFishUpdVIPUserRewardDataList=} [properties] Properties to set
         * @returns {GameMsg_LHD.SuperToolFishUpdVIPUserRewardDataList} SuperToolFishUpdVIPUserRewardDataList instance
         */
        SuperToolFishUpdVIPUserRewardDataList.create = function create(properties) {
            return new SuperToolFishUpdVIPUserRewardDataList(properties);
        };

        /**
         * Encodes the specified SuperToolFishUpdVIPUserRewardDataList message. Does not implicitly {@link GameMsg_LHD.SuperToolFishUpdVIPUserRewardDataList.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_LHD.SuperToolFishUpdVIPUserRewardDataList
         * @static
         * @param {GameMsg_LHD.ISuperToolFishUpdVIPUserRewardDataList} message SuperToolFishUpdVIPUserRewardDataList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SuperToolFishUpdVIPUserRewardDataList.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.UserID);
            writer.uint32(/* id 2, wireType 0 =*/16).int64(message.FinishAmount);
            return writer;
        };

        /**
         * Encodes the specified SuperToolFishUpdVIPUserRewardDataList message, length delimited. Does not implicitly {@link GameMsg_LHD.SuperToolFishUpdVIPUserRewardDataList.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_LHD.SuperToolFishUpdVIPUserRewardDataList
         * @static
         * @param {GameMsg_LHD.ISuperToolFishUpdVIPUserRewardDataList} message SuperToolFishUpdVIPUserRewardDataList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SuperToolFishUpdVIPUserRewardDataList.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SuperToolFishUpdVIPUserRewardDataList message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_LHD.SuperToolFishUpdVIPUserRewardDataList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_LHD.SuperToolFishUpdVIPUserRewardDataList} SuperToolFishUpdVIPUserRewardDataList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SuperToolFishUpdVIPUserRewardDataList.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_LHD.SuperToolFishUpdVIPUserRewardDataList();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.UserID = reader.int32();
                    break;
                case 2:
                    message.FinishAmount = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("UserID"))
                throw $util.ProtocolError("missing required 'UserID'", { instance: message });
            if (!message.hasOwnProperty("FinishAmount"))
                throw $util.ProtocolError("missing required 'FinishAmount'", { instance: message });
            return message;
        };

        /**
         * Decodes a SuperToolFishUpdVIPUserRewardDataList message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_LHD.SuperToolFishUpdVIPUserRewardDataList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_LHD.SuperToolFishUpdVIPUserRewardDataList} SuperToolFishUpdVIPUserRewardDataList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SuperToolFishUpdVIPUserRewardDataList.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SuperToolFishUpdVIPUserRewardDataList message.
         * @function verify
         * @memberof GameMsg_LHD.SuperToolFishUpdVIPUserRewardDataList
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SuperToolFishUpdVIPUserRewardDataList.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.UserID))
                return "UserID: integer expected";
            if (!$util.isInteger(message.FinishAmount) && !(message.FinishAmount && $util.isInteger(message.FinishAmount.low) && $util.isInteger(message.FinishAmount.high)))
                return "FinishAmount: integer|Long expected";
            return null;
        };

        /**
         * Creates a SuperToolFishUpdVIPUserRewardDataList message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_LHD.SuperToolFishUpdVIPUserRewardDataList
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_LHD.SuperToolFishUpdVIPUserRewardDataList} SuperToolFishUpdVIPUserRewardDataList
         */
        SuperToolFishUpdVIPUserRewardDataList.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_LHD.SuperToolFishUpdVIPUserRewardDataList)
                return object;
            var message = new $root.GameMsg_LHD.SuperToolFishUpdVIPUserRewardDataList();
            if (object.UserID != null)
                message.UserID = object.UserID | 0;
            if (object.FinishAmount != null)
                if ($util.Long)
                    (message.FinishAmount = $util.Long.fromValue(object.FinishAmount)).unsigned = false;
                else if (typeof object.FinishAmount === "string")
                    message.FinishAmount = parseInt(object.FinishAmount, 10);
                else if (typeof object.FinishAmount === "number")
                    message.FinishAmount = object.FinishAmount;
                else if (typeof object.FinishAmount === "object")
                    message.FinishAmount = new $util.LongBits(object.FinishAmount.low >>> 0, object.FinishAmount.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a SuperToolFishUpdVIPUserRewardDataList message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_LHD.SuperToolFishUpdVIPUserRewardDataList
         * @static
         * @param {GameMsg_LHD.SuperToolFishUpdVIPUserRewardDataList} message SuperToolFishUpdVIPUserRewardDataList
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SuperToolFishUpdVIPUserRewardDataList.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.UserID = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.FinishAmount = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.FinishAmount = options.longs === String ? "0" : 0;
            }
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                object.UserID = message.UserID;
            if (message.FinishAmount != null && message.hasOwnProperty("FinishAmount"))
                if (typeof message.FinishAmount === "number")
                    object.FinishAmount = options.longs === String ? String(message.FinishAmount) : message.FinishAmount;
                else
                    object.FinishAmount = options.longs === String ? $util.Long.prototype.toString.call(message.FinishAmount) : options.longs === Number ? new $util.LongBits(message.FinishAmount.low >>> 0, message.FinishAmount.high >>> 0).toNumber() : message.FinishAmount;
            return object;
        };

        /**
         * Converts this SuperToolFishUpdVIPUserRewardDataList to JSON.
         * @function toJSON
         * @memberof GameMsg_LHD.SuperToolFishUpdVIPUserRewardDataList
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SuperToolFishUpdVIPUserRewardDataList.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SuperToolFishUpdVIPUserRewardDataList;
    })();

    GameMsg_LHD.SuperToolZjhVipUserDataList = (function() {

        /**
         * Properties of a SuperToolZjhVipUserDataList.
         * @memberof GameMsg_LHD
         * @interface ISuperToolZjhVipUserDataList
         * @property {Array.<GameMsg_LHD.ISuperToolZjhVipUserData>|null} [DataList] SuperToolZjhVipUserDataList DataList
         */

        /**
         * Constructs a new SuperToolZjhVipUserDataList.
         * @memberof GameMsg_LHD
         * @classdesc Represents a SuperToolZjhVipUserDataList.
         * @implements ISuperToolZjhVipUserDataList
         * @constructor
         * @param {GameMsg_LHD.ISuperToolZjhVipUserDataList=} [properties] Properties to set
         */
        function SuperToolZjhVipUserDataList(properties) {
            this.DataList = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SuperToolZjhVipUserDataList DataList.
         * @member {Array.<GameMsg_LHD.ISuperToolZjhVipUserData>} DataList
         * @memberof GameMsg_LHD.SuperToolZjhVipUserDataList
         * @instance
         */
        SuperToolZjhVipUserDataList.prototype.DataList = $util.emptyArray;

        /**
         * Creates a new SuperToolZjhVipUserDataList instance using the specified properties.
         * @function create
         * @memberof GameMsg_LHD.SuperToolZjhVipUserDataList
         * @static
         * @param {GameMsg_LHD.ISuperToolZjhVipUserDataList=} [properties] Properties to set
         * @returns {GameMsg_LHD.SuperToolZjhVipUserDataList} SuperToolZjhVipUserDataList instance
         */
        SuperToolZjhVipUserDataList.create = function create(properties) {
            return new SuperToolZjhVipUserDataList(properties);
        };

        /**
         * Encodes the specified SuperToolZjhVipUserDataList message. Does not implicitly {@link GameMsg_LHD.SuperToolZjhVipUserDataList.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_LHD.SuperToolZjhVipUserDataList
         * @static
         * @param {GameMsg_LHD.ISuperToolZjhVipUserDataList} message SuperToolZjhVipUserDataList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SuperToolZjhVipUserDataList.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.DataList != null && message.DataList.length)
                for (var i = 0; i < message.DataList.length; ++i)
                    $root.GameMsg_LHD.SuperToolZjhVipUserData.encode(message.DataList[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified SuperToolZjhVipUserDataList message, length delimited. Does not implicitly {@link GameMsg_LHD.SuperToolZjhVipUserDataList.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_LHD.SuperToolZjhVipUserDataList
         * @static
         * @param {GameMsg_LHD.ISuperToolZjhVipUserDataList} message SuperToolZjhVipUserDataList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SuperToolZjhVipUserDataList.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SuperToolZjhVipUserDataList message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_LHD.SuperToolZjhVipUserDataList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_LHD.SuperToolZjhVipUserDataList} SuperToolZjhVipUserDataList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SuperToolZjhVipUserDataList.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_LHD.SuperToolZjhVipUserDataList();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.DataList && message.DataList.length))
                        message.DataList = [];
                    message.DataList.push($root.GameMsg_LHD.SuperToolZjhVipUserData.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SuperToolZjhVipUserDataList message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_LHD.SuperToolZjhVipUserDataList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_LHD.SuperToolZjhVipUserDataList} SuperToolZjhVipUserDataList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SuperToolZjhVipUserDataList.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SuperToolZjhVipUserDataList message.
         * @function verify
         * @memberof GameMsg_LHD.SuperToolZjhVipUserDataList
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SuperToolZjhVipUserDataList.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.DataList != null && message.hasOwnProperty("DataList")) {
                if (!Array.isArray(message.DataList))
                    return "DataList: array expected";
                for (var i = 0; i < message.DataList.length; ++i) {
                    var error = $root.GameMsg_LHD.SuperToolZjhVipUserData.verify(message.DataList[i]);
                    if (error)
                        return "DataList." + error;
                }
            }
            return null;
        };

        /**
         * Creates a SuperToolZjhVipUserDataList message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_LHD.SuperToolZjhVipUserDataList
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_LHD.SuperToolZjhVipUserDataList} SuperToolZjhVipUserDataList
         */
        SuperToolZjhVipUserDataList.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_LHD.SuperToolZjhVipUserDataList)
                return object;
            var message = new $root.GameMsg_LHD.SuperToolZjhVipUserDataList();
            if (object.DataList) {
                if (!Array.isArray(object.DataList))
                    throw TypeError(".GameMsg_LHD.SuperToolZjhVipUserDataList.DataList: array expected");
                message.DataList = [];
                for (var i = 0; i < object.DataList.length; ++i) {
                    if (typeof object.DataList[i] !== "object")
                        throw TypeError(".GameMsg_LHD.SuperToolZjhVipUserDataList.DataList: object expected");
                    message.DataList[i] = $root.GameMsg_LHD.SuperToolZjhVipUserData.fromObject(object.DataList[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a SuperToolZjhVipUserDataList message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_LHD.SuperToolZjhVipUserDataList
         * @static
         * @param {GameMsg_LHD.SuperToolZjhVipUserDataList} message SuperToolZjhVipUserDataList
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SuperToolZjhVipUserDataList.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.DataList = [];
            if (message.DataList && message.DataList.length) {
                object.DataList = [];
                for (var j = 0; j < message.DataList.length; ++j)
                    object.DataList[j] = $root.GameMsg_LHD.SuperToolZjhVipUserData.toObject(message.DataList[j], options);
            }
            return object;
        };

        /**
         * Converts this SuperToolZjhVipUserDataList to JSON.
         * @function toJSON
         * @memberof GameMsg_LHD.SuperToolZjhVipUserDataList
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SuperToolZjhVipUserDataList.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SuperToolZjhVipUserDataList;
    })();

    GameMsg_LHD.SuperToolZjhVipUserData = (function() {

        /**
         * Properties of a SuperToolZjhVipUserData.
         * @memberof GameMsg_LHD
         * @interface ISuperToolZjhVipUserData
         * @property {number} UserID SuperToolZjhVipUserData UserID
         * @property {number|Long} NextType SuperToolZjhVipUserData NextType
         * @property {number|Long} NextWinLose SuperToolZjhVipUserData NextWinLose
         * @property {number|Long} NextWinLoseNum SuperToolZjhVipUserData NextWinLoseNum
         * @property {number|Long} Finish SuperToolZjhVipUserData Finish
         * @property {number|Long} FinishNextWinLoseNum SuperToolZjhVipUserData FinishNextWinLoseNum
         * @property {number} NextTable SuperToolZjhVipUserData NextTable
         * @property {number} Status SuperToolZjhVipUserData Status
         * @property {number|Long} TodaySumcharge SuperToolZjhVipUserData TodaySumcharge
         * @property {number|Long} TodaySumConvert SuperToolZjhVipUserData TodaySumConvert
         * @property {number|Long} TodayUserWinLose SuperToolZjhVipUserData TodayUserWinLose
         */

        /**
         * Constructs a new SuperToolZjhVipUserData.
         * @memberof GameMsg_LHD
         * @classdesc Represents a SuperToolZjhVipUserData.
         * @implements ISuperToolZjhVipUserData
         * @constructor
         * @param {GameMsg_LHD.ISuperToolZjhVipUserData=} [properties] Properties to set
         */
        function SuperToolZjhVipUserData(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SuperToolZjhVipUserData UserID.
         * @member {number} UserID
         * @memberof GameMsg_LHD.SuperToolZjhVipUserData
         * @instance
         */
        SuperToolZjhVipUserData.prototype.UserID = 0;

        /**
         * SuperToolZjhVipUserData NextType.
         * @member {number|Long} NextType
         * @memberof GameMsg_LHD.SuperToolZjhVipUserData
         * @instance
         */
        SuperToolZjhVipUserData.prototype.NextType = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * SuperToolZjhVipUserData NextWinLose.
         * @member {number|Long} NextWinLose
         * @memberof GameMsg_LHD.SuperToolZjhVipUserData
         * @instance
         */
        SuperToolZjhVipUserData.prototype.NextWinLose = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * SuperToolZjhVipUserData NextWinLoseNum.
         * @member {number|Long} NextWinLoseNum
         * @memberof GameMsg_LHD.SuperToolZjhVipUserData
         * @instance
         */
        SuperToolZjhVipUserData.prototype.NextWinLoseNum = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * SuperToolZjhVipUserData Finish.
         * @member {number|Long} Finish
         * @memberof GameMsg_LHD.SuperToolZjhVipUserData
         * @instance
         */
        SuperToolZjhVipUserData.prototype.Finish = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * SuperToolZjhVipUserData FinishNextWinLoseNum.
         * @member {number|Long} FinishNextWinLoseNum
         * @memberof GameMsg_LHD.SuperToolZjhVipUserData
         * @instance
         */
        SuperToolZjhVipUserData.prototype.FinishNextWinLoseNum = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * SuperToolZjhVipUserData NextTable.
         * @member {number} NextTable
         * @memberof GameMsg_LHD.SuperToolZjhVipUserData
         * @instance
         */
        SuperToolZjhVipUserData.prototype.NextTable = 0;

        /**
         * SuperToolZjhVipUserData Status.
         * @member {number} Status
         * @memberof GameMsg_LHD.SuperToolZjhVipUserData
         * @instance
         */
        SuperToolZjhVipUserData.prototype.Status = 0;

        /**
         * SuperToolZjhVipUserData TodaySumcharge.
         * @member {number|Long} TodaySumcharge
         * @memberof GameMsg_LHD.SuperToolZjhVipUserData
         * @instance
         */
        SuperToolZjhVipUserData.prototype.TodaySumcharge = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * SuperToolZjhVipUserData TodaySumConvert.
         * @member {number|Long} TodaySumConvert
         * @memberof GameMsg_LHD.SuperToolZjhVipUserData
         * @instance
         */
        SuperToolZjhVipUserData.prototype.TodaySumConvert = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * SuperToolZjhVipUserData TodayUserWinLose.
         * @member {number|Long} TodayUserWinLose
         * @memberof GameMsg_LHD.SuperToolZjhVipUserData
         * @instance
         */
        SuperToolZjhVipUserData.prototype.TodayUserWinLose = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new SuperToolZjhVipUserData instance using the specified properties.
         * @function create
         * @memberof GameMsg_LHD.SuperToolZjhVipUserData
         * @static
         * @param {GameMsg_LHD.ISuperToolZjhVipUserData=} [properties] Properties to set
         * @returns {GameMsg_LHD.SuperToolZjhVipUserData} SuperToolZjhVipUserData instance
         */
        SuperToolZjhVipUserData.create = function create(properties) {
            return new SuperToolZjhVipUserData(properties);
        };

        /**
         * Encodes the specified SuperToolZjhVipUserData message. Does not implicitly {@link GameMsg_LHD.SuperToolZjhVipUserData.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_LHD.SuperToolZjhVipUserData
         * @static
         * @param {GameMsg_LHD.ISuperToolZjhVipUserData} message SuperToolZjhVipUserData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SuperToolZjhVipUserData.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.UserID);
            writer.uint32(/* id 2, wireType 0 =*/16).int64(message.NextType);
            writer.uint32(/* id 3, wireType 0 =*/24).int64(message.NextWinLose);
            writer.uint32(/* id 4, wireType 0 =*/32).int64(message.NextWinLoseNum);
            writer.uint32(/* id 5, wireType 0 =*/40).int64(message.Finish);
            writer.uint32(/* id 6, wireType 0 =*/48).int64(message.FinishNextWinLoseNum);
            writer.uint32(/* id 7, wireType 0 =*/56).int32(message.NextTable);
            writer.uint32(/* id 8, wireType 0 =*/64).int32(message.Status);
            writer.uint32(/* id 9, wireType 0 =*/72).int64(message.TodaySumcharge);
            writer.uint32(/* id 10, wireType 0 =*/80).int64(message.TodaySumConvert);
            writer.uint32(/* id 11, wireType 0 =*/88).int64(message.TodayUserWinLose);
            return writer;
        };

        /**
         * Encodes the specified SuperToolZjhVipUserData message, length delimited. Does not implicitly {@link GameMsg_LHD.SuperToolZjhVipUserData.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_LHD.SuperToolZjhVipUserData
         * @static
         * @param {GameMsg_LHD.ISuperToolZjhVipUserData} message SuperToolZjhVipUserData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SuperToolZjhVipUserData.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SuperToolZjhVipUserData message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_LHD.SuperToolZjhVipUserData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_LHD.SuperToolZjhVipUserData} SuperToolZjhVipUserData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SuperToolZjhVipUserData.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_LHD.SuperToolZjhVipUserData();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.UserID = reader.int32();
                    break;
                case 2:
                    message.NextType = reader.int64();
                    break;
                case 3:
                    message.NextWinLose = reader.int64();
                    break;
                case 4:
                    message.NextWinLoseNum = reader.int64();
                    break;
                case 5:
                    message.Finish = reader.int64();
                    break;
                case 6:
                    message.FinishNextWinLoseNum = reader.int64();
                    break;
                case 7:
                    message.NextTable = reader.int32();
                    break;
                case 8:
                    message.Status = reader.int32();
                    break;
                case 9:
                    message.TodaySumcharge = reader.int64();
                    break;
                case 10:
                    message.TodaySumConvert = reader.int64();
                    break;
                case 11:
                    message.TodayUserWinLose = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("UserID"))
                throw $util.ProtocolError("missing required 'UserID'", { instance: message });
            if (!message.hasOwnProperty("NextType"))
                throw $util.ProtocolError("missing required 'NextType'", { instance: message });
            if (!message.hasOwnProperty("NextWinLose"))
                throw $util.ProtocolError("missing required 'NextWinLose'", { instance: message });
            if (!message.hasOwnProperty("NextWinLoseNum"))
                throw $util.ProtocolError("missing required 'NextWinLoseNum'", { instance: message });
            if (!message.hasOwnProperty("Finish"))
                throw $util.ProtocolError("missing required 'Finish'", { instance: message });
            if (!message.hasOwnProperty("FinishNextWinLoseNum"))
                throw $util.ProtocolError("missing required 'FinishNextWinLoseNum'", { instance: message });
            if (!message.hasOwnProperty("NextTable"))
                throw $util.ProtocolError("missing required 'NextTable'", { instance: message });
            if (!message.hasOwnProperty("Status"))
                throw $util.ProtocolError("missing required 'Status'", { instance: message });
            if (!message.hasOwnProperty("TodaySumcharge"))
                throw $util.ProtocolError("missing required 'TodaySumcharge'", { instance: message });
            if (!message.hasOwnProperty("TodaySumConvert"))
                throw $util.ProtocolError("missing required 'TodaySumConvert'", { instance: message });
            if (!message.hasOwnProperty("TodayUserWinLose"))
                throw $util.ProtocolError("missing required 'TodayUserWinLose'", { instance: message });
            return message;
        };

        /**
         * Decodes a SuperToolZjhVipUserData message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_LHD.SuperToolZjhVipUserData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_LHD.SuperToolZjhVipUserData} SuperToolZjhVipUserData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SuperToolZjhVipUserData.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SuperToolZjhVipUserData message.
         * @function verify
         * @memberof GameMsg_LHD.SuperToolZjhVipUserData
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SuperToolZjhVipUserData.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.UserID))
                return "UserID: integer expected";
            if (!$util.isInteger(message.NextType) && !(message.NextType && $util.isInteger(message.NextType.low) && $util.isInteger(message.NextType.high)))
                return "NextType: integer|Long expected";
            if (!$util.isInteger(message.NextWinLose) && !(message.NextWinLose && $util.isInteger(message.NextWinLose.low) && $util.isInteger(message.NextWinLose.high)))
                return "NextWinLose: integer|Long expected";
            if (!$util.isInteger(message.NextWinLoseNum) && !(message.NextWinLoseNum && $util.isInteger(message.NextWinLoseNum.low) && $util.isInteger(message.NextWinLoseNum.high)))
                return "NextWinLoseNum: integer|Long expected";
            if (!$util.isInteger(message.Finish) && !(message.Finish && $util.isInteger(message.Finish.low) && $util.isInteger(message.Finish.high)))
                return "Finish: integer|Long expected";
            if (!$util.isInteger(message.FinishNextWinLoseNum) && !(message.FinishNextWinLoseNum && $util.isInteger(message.FinishNextWinLoseNum.low) && $util.isInteger(message.FinishNextWinLoseNum.high)))
                return "FinishNextWinLoseNum: integer|Long expected";
            if (!$util.isInteger(message.NextTable))
                return "NextTable: integer expected";
            if (!$util.isInteger(message.Status))
                return "Status: integer expected";
            if (!$util.isInteger(message.TodaySumcharge) && !(message.TodaySumcharge && $util.isInteger(message.TodaySumcharge.low) && $util.isInteger(message.TodaySumcharge.high)))
                return "TodaySumcharge: integer|Long expected";
            if (!$util.isInteger(message.TodaySumConvert) && !(message.TodaySumConvert && $util.isInteger(message.TodaySumConvert.low) && $util.isInteger(message.TodaySumConvert.high)))
                return "TodaySumConvert: integer|Long expected";
            if (!$util.isInteger(message.TodayUserWinLose) && !(message.TodayUserWinLose && $util.isInteger(message.TodayUserWinLose.low) && $util.isInteger(message.TodayUserWinLose.high)))
                return "TodayUserWinLose: integer|Long expected";
            return null;
        };

        /**
         * Creates a SuperToolZjhVipUserData message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_LHD.SuperToolZjhVipUserData
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_LHD.SuperToolZjhVipUserData} SuperToolZjhVipUserData
         */
        SuperToolZjhVipUserData.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_LHD.SuperToolZjhVipUserData)
                return object;
            var message = new $root.GameMsg_LHD.SuperToolZjhVipUserData();
            if (object.UserID != null)
                message.UserID = object.UserID | 0;
            if (object.NextType != null)
                if ($util.Long)
                    (message.NextType = $util.Long.fromValue(object.NextType)).unsigned = false;
                else if (typeof object.NextType === "string")
                    message.NextType = parseInt(object.NextType, 10);
                else if (typeof object.NextType === "number")
                    message.NextType = object.NextType;
                else if (typeof object.NextType === "object")
                    message.NextType = new $util.LongBits(object.NextType.low >>> 0, object.NextType.high >>> 0).toNumber();
            if (object.NextWinLose != null)
                if ($util.Long)
                    (message.NextWinLose = $util.Long.fromValue(object.NextWinLose)).unsigned = false;
                else if (typeof object.NextWinLose === "string")
                    message.NextWinLose = parseInt(object.NextWinLose, 10);
                else if (typeof object.NextWinLose === "number")
                    message.NextWinLose = object.NextWinLose;
                else if (typeof object.NextWinLose === "object")
                    message.NextWinLose = new $util.LongBits(object.NextWinLose.low >>> 0, object.NextWinLose.high >>> 0).toNumber();
            if (object.NextWinLoseNum != null)
                if ($util.Long)
                    (message.NextWinLoseNum = $util.Long.fromValue(object.NextWinLoseNum)).unsigned = false;
                else if (typeof object.NextWinLoseNum === "string")
                    message.NextWinLoseNum = parseInt(object.NextWinLoseNum, 10);
                else if (typeof object.NextWinLoseNum === "number")
                    message.NextWinLoseNum = object.NextWinLoseNum;
                else if (typeof object.NextWinLoseNum === "object")
                    message.NextWinLoseNum = new $util.LongBits(object.NextWinLoseNum.low >>> 0, object.NextWinLoseNum.high >>> 0).toNumber();
            if (object.Finish != null)
                if ($util.Long)
                    (message.Finish = $util.Long.fromValue(object.Finish)).unsigned = false;
                else if (typeof object.Finish === "string")
                    message.Finish = parseInt(object.Finish, 10);
                else if (typeof object.Finish === "number")
                    message.Finish = object.Finish;
                else if (typeof object.Finish === "object")
                    message.Finish = new $util.LongBits(object.Finish.low >>> 0, object.Finish.high >>> 0).toNumber();
            if (object.FinishNextWinLoseNum != null)
                if ($util.Long)
                    (message.FinishNextWinLoseNum = $util.Long.fromValue(object.FinishNextWinLoseNum)).unsigned = false;
                else if (typeof object.FinishNextWinLoseNum === "string")
                    message.FinishNextWinLoseNum = parseInt(object.FinishNextWinLoseNum, 10);
                else if (typeof object.FinishNextWinLoseNum === "number")
                    message.FinishNextWinLoseNum = object.FinishNextWinLoseNum;
                else if (typeof object.FinishNextWinLoseNum === "object")
                    message.FinishNextWinLoseNum = new $util.LongBits(object.FinishNextWinLoseNum.low >>> 0, object.FinishNextWinLoseNum.high >>> 0).toNumber();
            if (object.NextTable != null)
                message.NextTable = object.NextTable | 0;
            if (object.Status != null)
                message.Status = object.Status | 0;
            if (object.TodaySumcharge != null)
                if ($util.Long)
                    (message.TodaySumcharge = $util.Long.fromValue(object.TodaySumcharge)).unsigned = false;
                else if (typeof object.TodaySumcharge === "string")
                    message.TodaySumcharge = parseInt(object.TodaySumcharge, 10);
                else if (typeof object.TodaySumcharge === "number")
                    message.TodaySumcharge = object.TodaySumcharge;
                else if (typeof object.TodaySumcharge === "object")
                    message.TodaySumcharge = new $util.LongBits(object.TodaySumcharge.low >>> 0, object.TodaySumcharge.high >>> 0).toNumber();
            if (object.TodaySumConvert != null)
                if ($util.Long)
                    (message.TodaySumConvert = $util.Long.fromValue(object.TodaySumConvert)).unsigned = false;
                else if (typeof object.TodaySumConvert === "string")
                    message.TodaySumConvert = parseInt(object.TodaySumConvert, 10);
                else if (typeof object.TodaySumConvert === "number")
                    message.TodaySumConvert = object.TodaySumConvert;
                else if (typeof object.TodaySumConvert === "object")
                    message.TodaySumConvert = new $util.LongBits(object.TodaySumConvert.low >>> 0, object.TodaySumConvert.high >>> 0).toNumber();
            if (object.TodayUserWinLose != null)
                if ($util.Long)
                    (message.TodayUserWinLose = $util.Long.fromValue(object.TodayUserWinLose)).unsigned = false;
                else if (typeof object.TodayUserWinLose === "string")
                    message.TodayUserWinLose = parseInt(object.TodayUserWinLose, 10);
                else if (typeof object.TodayUserWinLose === "number")
                    message.TodayUserWinLose = object.TodayUserWinLose;
                else if (typeof object.TodayUserWinLose === "object")
                    message.TodayUserWinLose = new $util.LongBits(object.TodayUserWinLose.low >>> 0, object.TodayUserWinLose.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a SuperToolZjhVipUserData message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_LHD.SuperToolZjhVipUserData
         * @static
         * @param {GameMsg_LHD.SuperToolZjhVipUserData} message SuperToolZjhVipUserData
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SuperToolZjhVipUserData.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.UserID = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.NextType = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.NextType = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.NextWinLose = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.NextWinLose = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.NextWinLoseNum = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.NextWinLoseNum = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.Finish = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.Finish = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.FinishNextWinLoseNum = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.FinishNextWinLoseNum = options.longs === String ? "0" : 0;
                object.NextTable = 0;
                object.Status = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.TodaySumcharge = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.TodaySumcharge = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.TodaySumConvert = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.TodaySumConvert = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.TodayUserWinLose = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.TodayUserWinLose = options.longs === String ? "0" : 0;
            }
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                object.UserID = message.UserID;
            if (message.NextType != null && message.hasOwnProperty("NextType"))
                if (typeof message.NextType === "number")
                    object.NextType = options.longs === String ? String(message.NextType) : message.NextType;
                else
                    object.NextType = options.longs === String ? $util.Long.prototype.toString.call(message.NextType) : options.longs === Number ? new $util.LongBits(message.NextType.low >>> 0, message.NextType.high >>> 0).toNumber() : message.NextType;
            if (message.NextWinLose != null && message.hasOwnProperty("NextWinLose"))
                if (typeof message.NextWinLose === "number")
                    object.NextWinLose = options.longs === String ? String(message.NextWinLose) : message.NextWinLose;
                else
                    object.NextWinLose = options.longs === String ? $util.Long.prototype.toString.call(message.NextWinLose) : options.longs === Number ? new $util.LongBits(message.NextWinLose.low >>> 0, message.NextWinLose.high >>> 0).toNumber() : message.NextWinLose;
            if (message.NextWinLoseNum != null && message.hasOwnProperty("NextWinLoseNum"))
                if (typeof message.NextWinLoseNum === "number")
                    object.NextWinLoseNum = options.longs === String ? String(message.NextWinLoseNum) : message.NextWinLoseNum;
                else
                    object.NextWinLoseNum = options.longs === String ? $util.Long.prototype.toString.call(message.NextWinLoseNum) : options.longs === Number ? new $util.LongBits(message.NextWinLoseNum.low >>> 0, message.NextWinLoseNum.high >>> 0).toNumber() : message.NextWinLoseNum;
            if (message.Finish != null && message.hasOwnProperty("Finish"))
                if (typeof message.Finish === "number")
                    object.Finish = options.longs === String ? String(message.Finish) : message.Finish;
                else
                    object.Finish = options.longs === String ? $util.Long.prototype.toString.call(message.Finish) : options.longs === Number ? new $util.LongBits(message.Finish.low >>> 0, message.Finish.high >>> 0).toNumber() : message.Finish;
            if (message.FinishNextWinLoseNum != null && message.hasOwnProperty("FinishNextWinLoseNum"))
                if (typeof message.FinishNextWinLoseNum === "number")
                    object.FinishNextWinLoseNum = options.longs === String ? String(message.FinishNextWinLoseNum) : message.FinishNextWinLoseNum;
                else
                    object.FinishNextWinLoseNum = options.longs === String ? $util.Long.prototype.toString.call(message.FinishNextWinLoseNum) : options.longs === Number ? new $util.LongBits(message.FinishNextWinLoseNum.low >>> 0, message.FinishNextWinLoseNum.high >>> 0).toNumber() : message.FinishNextWinLoseNum;
            if (message.NextTable != null && message.hasOwnProperty("NextTable"))
                object.NextTable = message.NextTable;
            if (message.Status != null && message.hasOwnProperty("Status"))
                object.Status = message.Status;
            if (message.TodaySumcharge != null && message.hasOwnProperty("TodaySumcharge"))
                if (typeof message.TodaySumcharge === "number")
                    object.TodaySumcharge = options.longs === String ? String(message.TodaySumcharge) : message.TodaySumcharge;
                else
                    object.TodaySumcharge = options.longs === String ? $util.Long.prototype.toString.call(message.TodaySumcharge) : options.longs === Number ? new $util.LongBits(message.TodaySumcharge.low >>> 0, message.TodaySumcharge.high >>> 0).toNumber() : message.TodaySumcharge;
            if (message.TodaySumConvert != null && message.hasOwnProperty("TodaySumConvert"))
                if (typeof message.TodaySumConvert === "number")
                    object.TodaySumConvert = options.longs === String ? String(message.TodaySumConvert) : message.TodaySumConvert;
                else
                    object.TodaySumConvert = options.longs === String ? $util.Long.prototype.toString.call(message.TodaySumConvert) : options.longs === Number ? new $util.LongBits(message.TodaySumConvert.low >>> 0, message.TodaySumConvert.high >>> 0).toNumber() : message.TodaySumConvert;
            if (message.TodayUserWinLose != null && message.hasOwnProperty("TodayUserWinLose"))
                if (typeof message.TodayUserWinLose === "number")
                    object.TodayUserWinLose = options.longs === String ? String(message.TodayUserWinLose) : message.TodayUserWinLose;
                else
                    object.TodayUserWinLose = options.longs === String ? $util.Long.prototype.toString.call(message.TodayUserWinLose) : options.longs === Number ? new $util.LongBits(message.TodayUserWinLose.low >>> 0, message.TodayUserWinLose.high >>> 0).toNumber() : message.TodayUserWinLose;
            return object;
        };

        /**
         * Converts this SuperToolZjhVipUserData to JSON.
         * @function toJSON
         * @memberof GameMsg_LHD.SuperToolZjhVipUserData
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SuperToolZjhVipUserData.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SuperToolZjhVipUserData;
    })();

    GameMsg_LHD.SuperToolZjhUpdVipUserData = (function() {

        /**
         * Properties of a SuperToolZjhUpdVipUserData.
         * @memberof GameMsg_LHD
         * @interface ISuperToolZjhUpdVipUserData
         * @property {number} UserID SuperToolZjhUpdVipUserData UserID
         * @property {number|Long|null} [Finish] SuperToolZjhUpdVipUserData Finish
         * @property {number|Long|null} [FinishNextWinLoseNum] SuperToolZjhUpdVipUserData FinishNextWinLoseNum
         * @property {number|null} [NextTable] SuperToolZjhUpdVipUserData NextTable
         * @property {number|Long|null} [NextType] SuperToolZjhUpdVipUserData NextType
         */

        /**
         * Constructs a new SuperToolZjhUpdVipUserData.
         * @memberof GameMsg_LHD
         * @classdesc Represents a SuperToolZjhUpdVipUserData.
         * @implements ISuperToolZjhUpdVipUserData
         * @constructor
         * @param {GameMsg_LHD.ISuperToolZjhUpdVipUserData=} [properties] Properties to set
         */
        function SuperToolZjhUpdVipUserData(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SuperToolZjhUpdVipUserData UserID.
         * @member {number} UserID
         * @memberof GameMsg_LHD.SuperToolZjhUpdVipUserData
         * @instance
         */
        SuperToolZjhUpdVipUserData.prototype.UserID = 0;

        /**
         * SuperToolZjhUpdVipUserData Finish.
         * @member {number|Long} Finish
         * @memberof GameMsg_LHD.SuperToolZjhUpdVipUserData
         * @instance
         */
        SuperToolZjhUpdVipUserData.prototype.Finish = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * SuperToolZjhUpdVipUserData FinishNextWinLoseNum.
         * @member {number|Long} FinishNextWinLoseNum
         * @memberof GameMsg_LHD.SuperToolZjhUpdVipUserData
         * @instance
         */
        SuperToolZjhUpdVipUserData.prototype.FinishNextWinLoseNum = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * SuperToolZjhUpdVipUserData NextTable.
         * @member {number} NextTable
         * @memberof GameMsg_LHD.SuperToolZjhUpdVipUserData
         * @instance
         */
        SuperToolZjhUpdVipUserData.prototype.NextTable = 0;

        /**
         * SuperToolZjhUpdVipUserData NextType.
         * @member {number|Long} NextType
         * @memberof GameMsg_LHD.SuperToolZjhUpdVipUserData
         * @instance
         */
        SuperToolZjhUpdVipUserData.prototype.NextType = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new SuperToolZjhUpdVipUserData instance using the specified properties.
         * @function create
         * @memberof GameMsg_LHD.SuperToolZjhUpdVipUserData
         * @static
         * @param {GameMsg_LHD.ISuperToolZjhUpdVipUserData=} [properties] Properties to set
         * @returns {GameMsg_LHD.SuperToolZjhUpdVipUserData} SuperToolZjhUpdVipUserData instance
         */
        SuperToolZjhUpdVipUserData.create = function create(properties) {
            return new SuperToolZjhUpdVipUserData(properties);
        };

        /**
         * Encodes the specified SuperToolZjhUpdVipUserData message. Does not implicitly {@link GameMsg_LHD.SuperToolZjhUpdVipUserData.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_LHD.SuperToolZjhUpdVipUserData
         * @static
         * @param {GameMsg_LHD.ISuperToolZjhUpdVipUserData} message SuperToolZjhUpdVipUserData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SuperToolZjhUpdVipUserData.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.UserID);
            if (message.Finish != null && message.hasOwnProperty("Finish"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.Finish);
            if (message.FinishNextWinLoseNum != null && message.hasOwnProperty("FinishNextWinLoseNum"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.FinishNextWinLoseNum);
            if (message.NextTable != null && message.hasOwnProperty("NextTable"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.NextTable);
            if (message.NextType != null && message.hasOwnProperty("NextType"))
                writer.uint32(/* id 5, wireType 0 =*/40).int64(message.NextType);
            return writer;
        };

        /**
         * Encodes the specified SuperToolZjhUpdVipUserData message, length delimited. Does not implicitly {@link GameMsg_LHD.SuperToolZjhUpdVipUserData.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_LHD.SuperToolZjhUpdVipUserData
         * @static
         * @param {GameMsg_LHD.ISuperToolZjhUpdVipUserData} message SuperToolZjhUpdVipUserData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SuperToolZjhUpdVipUserData.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SuperToolZjhUpdVipUserData message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_LHD.SuperToolZjhUpdVipUserData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_LHD.SuperToolZjhUpdVipUserData} SuperToolZjhUpdVipUserData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SuperToolZjhUpdVipUserData.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_LHD.SuperToolZjhUpdVipUserData();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.UserID = reader.int32();
                    break;
                case 2:
                    message.Finish = reader.int64();
                    break;
                case 3:
                    message.FinishNextWinLoseNum = reader.int64();
                    break;
                case 4:
                    message.NextTable = reader.int32();
                    break;
                case 5:
                    message.NextType = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("UserID"))
                throw $util.ProtocolError("missing required 'UserID'", { instance: message });
            return message;
        };

        /**
         * Decodes a SuperToolZjhUpdVipUserData message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_LHD.SuperToolZjhUpdVipUserData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_LHD.SuperToolZjhUpdVipUserData} SuperToolZjhUpdVipUserData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SuperToolZjhUpdVipUserData.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SuperToolZjhUpdVipUserData message.
         * @function verify
         * @memberof GameMsg_LHD.SuperToolZjhUpdVipUserData
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SuperToolZjhUpdVipUserData.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.UserID))
                return "UserID: integer expected";
            if (message.Finish != null && message.hasOwnProperty("Finish"))
                if (!$util.isInteger(message.Finish) && !(message.Finish && $util.isInteger(message.Finish.low) && $util.isInteger(message.Finish.high)))
                    return "Finish: integer|Long expected";
            if (message.FinishNextWinLoseNum != null && message.hasOwnProperty("FinishNextWinLoseNum"))
                if (!$util.isInteger(message.FinishNextWinLoseNum) && !(message.FinishNextWinLoseNum && $util.isInteger(message.FinishNextWinLoseNum.low) && $util.isInteger(message.FinishNextWinLoseNum.high)))
                    return "FinishNextWinLoseNum: integer|Long expected";
            if (message.NextTable != null && message.hasOwnProperty("NextTable"))
                if (!$util.isInteger(message.NextTable))
                    return "NextTable: integer expected";
            if (message.NextType != null && message.hasOwnProperty("NextType"))
                if (!$util.isInteger(message.NextType) && !(message.NextType && $util.isInteger(message.NextType.low) && $util.isInteger(message.NextType.high)))
                    return "NextType: integer|Long expected";
            return null;
        };

        /**
         * Creates a SuperToolZjhUpdVipUserData message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_LHD.SuperToolZjhUpdVipUserData
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_LHD.SuperToolZjhUpdVipUserData} SuperToolZjhUpdVipUserData
         */
        SuperToolZjhUpdVipUserData.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_LHD.SuperToolZjhUpdVipUserData)
                return object;
            var message = new $root.GameMsg_LHD.SuperToolZjhUpdVipUserData();
            if (object.UserID != null)
                message.UserID = object.UserID | 0;
            if (object.Finish != null)
                if ($util.Long)
                    (message.Finish = $util.Long.fromValue(object.Finish)).unsigned = false;
                else if (typeof object.Finish === "string")
                    message.Finish = parseInt(object.Finish, 10);
                else if (typeof object.Finish === "number")
                    message.Finish = object.Finish;
                else if (typeof object.Finish === "object")
                    message.Finish = new $util.LongBits(object.Finish.low >>> 0, object.Finish.high >>> 0).toNumber();
            if (object.FinishNextWinLoseNum != null)
                if ($util.Long)
                    (message.FinishNextWinLoseNum = $util.Long.fromValue(object.FinishNextWinLoseNum)).unsigned = false;
                else if (typeof object.FinishNextWinLoseNum === "string")
                    message.FinishNextWinLoseNum = parseInt(object.FinishNextWinLoseNum, 10);
                else if (typeof object.FinishNextWinLoseNum === "number")
                    message.FinishNextWinLoseNum = object.FinishNextWinLoseNum;
                else if (typeof object.FinishNextWinLoseNum === "object")
                    message.FinishNextWinLoseNum = new $util.LongBits(object.FinishNextWinLoseNum.low >>> 0, object.FinishNextWinLoseNum.high >>> 0).toNumber();
            if (object.NextTable != null)
                message.NextTable = object.NextTable | 0;
            if (object.NextType != null)
                if ($util.Long)
                    (message.NextType = $util.Long.fromValue(object.NextType)).unsigned = false;
                else if (typeof object.NextType === "string")
                    message.NextType = parseInt(object.NextType, 10);
                else if (typeof object.NextType === "number")
                    message.NextType = object.NextType;
                else if (typeof object.NextType === "object")
                    message.NextType = new $util.LongBits(object.NextType.low >>> 0, object.NextType.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a SuperToolZjhUpdVipUserData message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_LHD.SuperToolZjhUpdVipUserData
         * @static
         * @param {GameMsg_LHD.SuperToolZjhUpdVipUserData} message SuperToolZjhUpdVipUserData
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SuperToolZjhUpdVipUserData.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.UserID = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.Finish = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.Finish = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.FinishNextWinLoseNum = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.FinishNextWinLoseNum = options.longs === String ? "0" : 0;
                object.NextTable = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.NextType = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.NextType = options.longs === String ? "0" : 0;
            }
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                object.UserID = message.UserID;
            if (message.Finish != null && message.hasOwnProperty("Finish"))
                if (typeof message.Finish === "number")
                    object.Finish = options.longs === String ? String(message.Finish) : message.Finish;
                else
                    object.Finish = options.longs === String ? $util.Long.prototype.toString.call(message.Finish) : options.longs === Number ? new $util.LongBits(message.Finish.low >>> 0, message.Finish.high >>> 0).toNumber() : message.Finish;
            if (message.FinishNextWinLoseNum != null && message.hasOwnProperty("FinishNextWinLoseNum"))
                if (typeof message.FinishNextWinLoseNum === "number")
                    object.FinishNextWinLoseNum = options.longs === String ? String(message.FinishNextWinLoseNum) : message.FinishNextWinLoseNum;
                else
                    object.FinishNextWinLoseNum = options.longs === String ? $util.Long.prototype.toString.call(message.FinishNextWinLoseNum) : options.longs === Number ? new $util.LongBits(message.FinishNextWinLoseNum.low >>> 0, message.FinishNextWinLoseNum.high >>> 0).toNumber() : message.FinishNextWinLoseNum;
            if (message.NextTable != null && message.hasOwnProperty("NextTable"))
                object.NextTable = message.NextTable;
            if (message.NextType != null && message.hasOwnProperty("NextType"))
                if (typeof message.NextType === "number")
                    object.NextType = options.longs === String ? String(message.NextType) : message.NextType;
                else
                    object.NextType = options.longs === String ? $util.Long.prototype.toString.call(message.NextType) : options.longs === Number ? new $util.LongBits(message.NextType.low >>> 0, message.NextType.high >>> 0).toNumber() : message.NextType;
            return object;
        };

        /**
         * Converts this SuperToolZjhUpdVipUserData to JSON.
         * @function toJSON
         * @memberof GameMsg_LHD.SuperToolZjhUpdVipUserData
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SuperToolZjhUpdVipUserData.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SuperToolZjhUpdVipUserData;
    })();

    GameMsg_LHD.FishSysPoolData = (function() {

        /**
         * Properties of a FishSysPoolData.
         * @memberof GameMsg_LHD
         * @interface IFishSysPoolData
         * @property {number} FlagID FishSysPoolData FlagID
         * @property {number|Long} SumBetMoney FishSysPoolData SumBetMoney
         * @property {number|Long} SumBullet FishSysPoolData SumBullet
         * @property {number|Long} SysSumWinLoss FishSysPoolData SysSumWinLoss
         * @property {number|Long|null} [AfterAdjustSyspoolWinLoss] FishSysPoolData AfterAdjustSyspoolWinLoss
         * @property {number|Long|null} [PoolAmount] FishSysPoolData PoolAmount
         */

        /**
         * Constructs a new FishSysPoolData.
         * @memberof GameMsg_LHD
         * @classdesc Represents a FishSysPoolData.
         * @implements IFishSysPoolData
         * @constructor
         * @param {GameMsg_LHD.IFishSysPoolData=} [properties] Properties to set
         */
        function FishSysPoolData(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * FishSysPoolData FlagID.
         * @member {number} FlagID
         * @memberof GameMsg_LHD.FishSysPoolData
         * @instance
         */
        FishSysPoolData.prototype.FlagID = 0;

        /**
         * FishSysPoolData SumBetMoney.
         * @member {number|Long} SumBetMoney
         * @memberof GameMsg_LHD.FishSysPoolData
         * @instance
         */
        FishSysPoolData.prototype.SumBetMoney = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * FishSysPoolData SumBullet.
         * @member {number|Long} SumBullet
         * @memberof GameMsg_LHD.FishSysPoolData
         * @instance
         */
        FishSysPoolData.prototype.SumBullet = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * FishSysPoolData SysSumWinLoss.
         * @member {number|Long} SysSumWinLoss
         * @memberof GameMsg_LHD.FishSysPoolData
         * @instance
         */
        FishSysPoolData.prototype.SysSumWinLoss = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * FishSysPoolData AfterAdjustSyspoolWinLoss.
         * @member {number|Long} AfterAdjustSyspoolWinLoss
         * @memberof GameMsg_LHD.FishSysPoolData
         * @instance
         */
        FishSysPoolData.prototype.AfterAdjustSyspoolWinLoss = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * FishSysPoolData PoolAmount.
         * @member {number|Long} PoolAmount
         * @memberof GameMsg_LHD.FishSysPoolData
         * @instance
         */
        FishSysPoolData.prototype.PoolAmount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new FishSysPoolData instance using the specified properties.
         * @function create
         * @memberof GameMsg_LHD.FishSysPoolData
         * @static
         * @param {GameMsg_LHD.IFishSysPoolData=} [properties] Properties to set
         * @returns {GameMsg_LHD.FishSysPoolData} FishSysPoolData instance
         */
        FishSysPoolData.create = function create(properties) {
            return new FishSysPoolData(properties);
        };

        /**
         * Encodes the specified FishSysPoolData message. Does not implicitly {@link GameMsg_LHD.FishSysPoolData.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_LHD.FishSysPoolData
         * @static
         * @param {GameMsg_LHD.IFishSysPoolData} message FishSysPoolData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FishSysPoolData.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.FlagID);
            writer.uint32(/* id 2, wireType 0 =*/16).int64(message.SumBetMoney);
            writer.uint32(/* id 3, wireType 0 =*/24).int64(message.SumBullet);
            writer.uint32(/* id 4, wireType 0 =*/32).int64(message.SysSumWinLoss);
            if (message.AfterAdjustSyspoolWinLoss != null && message.hasOwnProperty("AfterAdjustSyspoolWinLoss"))
                writer.uint32(/* id 5, wireType 0 =*/40).int64(message.AfterAdjustSyspoolWinLoss);
            if (message.PoolAmount != null && message.hasOwnProperty("PoolAmount"))
                writer.uint32(/* id 6, wireType 0 =*/48).int64(message.PoolAmount);
            return writer;
        };

        /**
         * Encodes the specified FishSysPoolData message, length delimited. Does not implicitly {@link GameMsg_LHD.FishSysPoolData.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_LHD.FishSysPoolData
         * @static
         * @param {GameMsg_LHD.IFishSysPoolData} message FishSysPoolData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FishSysPoolData.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FishSysPoolData message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_LHD.FishSysPoolData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_LHD.FishSysPoolData} FishSysPoolData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FishSysPoolData.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_LHD.FishSysPoolData();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.FlagID = reader.int32();
                    break;
                case 2:
                    message.SumBetMoney = reader.int64();
                    break;
                case 3:
                    message.SumBullet = reader.int64();
                    break;
                case 4:
                    message.SysSumWinLoss = reader.int64();
                    break;
                case 5:
                    message.AfterAdjustSyspoolWinLoss = reader.int64();
                    break;
                case 6:
                    message.PoolAmount = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("FlagID"))
                throw $util.ProtocolError("missing required 'FlagID'", { instance: message });
            if (!message.hasOwnProperty("SumBetMoney"))
                throw $util.ProtocolError("missing required 'SumBetMoney'", { instance: message });
            if (!message.hasOwnProperty("SumBullet"))
                throw $util.ProtocolError("missing required 'SumBullet'", { instance: message });
            if (!message.hasOwnProperty("SysSumWinLoss"))
                throw $util.ProtocolError("missing required 'SysSumWinLoss'", { instance: message });
            return message;
        };

        /**
         * Decodes a FishSysPoolData message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_LHD.FishSysPoolData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_LHD.FishSysPoolData} FishSysPoolData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FishSysPoolData.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a FishSysPoolData message.
         * @function verify
         * @memberof GameMsg_LHD.FishSysPoolData
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FishSysPoolData.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.FlagID))
                return "FlagID: integer expected";
            if (!$util.isInteger(message.SumBetMoney) && !(message.SumBetMoney && $util.isInteger(message.SumBetMoney.low) && $util.isInteger(message.SumBetMoney.high)))
                return "SumBetMoney: integer|Long expected";
            if (!$util.isInteger(message.SumBullet) && !(message.SumBullet && $util.isInteger(message.SumBullet.low) && $util.isInteger(message.SumBullet.high)))
                return "SumBullet: integer|Long expected";
            if (!$util.isInteger(message.SysSumWinLoss) && !(message.SysSumWinLoss && $util.isInteger(message.SysSumWinLoss.low) && $util.isInteger(message.SysSumWinLoss.high)))
                return "SysSumWinLoss: integer|Long expected";
            if (message.AfterAdjustSyspoolWinLoss != null && message.hasOwnProperty("AfterAdjustSyspoolWinLoss"))
                if (!$util.isInteger(message.AfterAdjustSyspoolWinLoss) && !(message.AfterAdjustSyspoolWinLoss && $util.isInteger(message.AfterAdjustSyspoolWinLoss.low) && $util.isInteger(message.AfterAdjustSyspoolWinLoss.high)))
                    return "AfterAdjustSyspoolWinLoss: integer|Long expected";
            if (message.PoolAmount != null && message.hasOwnProperty("PoolAmount"))
                if (!$util.isInteger(message.PoolAmount) && !(message.PoolAmount && $util.isInteger(message.PoolAmount.low) && $util.isInteger(message.PoolAmount.high)))
                    return "PoolAmount: integer|Long expected";
            return null;
        };

        /**
         * Creates a FishSysPoolData message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_LHD.FishSysPoolData
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_LHD.FishSysPoolData} FishSysPoolData
         */
        FishSysPoolData.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_LHD.FishSysPoolData)
                return object;
            var message = new $root.GameMsg_LHD.FishSysPoolData();
            if (object.FlagID != null)
                message.FlagID = object.FlagID | 0;
            if (object.SumBetMoney != null)
                if ($util.Long)
                    (message.SumBetMoney = $util.Long.fromValue(object.SumBetMoney)).unsigned = false;
                else if (typeof object.SumBetMoney === "string")
                    message.SumBetMoney = parseInt(object.SumBetMoney, 10);
                else if (typeof object.SumBetMoney === "number")
                    message.SumBetMoney = object.SumBetMoney;
                else if (typeof object.SumBetMoney === "object")
                    message.SumBetMoney = new $util.LongBits(object.SumBetMoney.low >>> 0, object.SumBetMoney.high >>> 0).toNumber();
            if (object.SumBullet != null)
                if ($util.Long)
                    (message.SumBullet = $util.Long.fromValue(object.SumBullet)).unsigned = false;
                else if (typeof object.SumBullet === "string")
                    message.SumBullet = parseInt(object.SumBullet, 10);
                else if (typeof object.SumBullet === "number")
                    message.SumBullet = object.SumBullet;
                else if (typeof object.SumBullet === "object")
                    message.SumBullet = new $util.LongBits(object.SumBullet.low >>> 0, object.SumBullet.high >>> 0).toNumber();
            if (object.SysSumWinLoss != null)
                if ($util.Long)
                    (message.SysSumWinLoss = $util.Long.fromValue(object.SysSumWinLoss)).unsigned = false;
                else if (typeof object.SysSumWinLoss === "string")
                    message.SysSumWinLoss = parseInt(object.SysSumWinLoss, 10);
                else if (typeof object.SysSumWinLoss === "number")
                    message.SysSumWinLoss = object.SysSumWinLoss;
                else if (typeof object.SysSumWinLoss === "object")
                    message.SysSumWinLoss = new $util.LongBits(object.SysSumWinLoss.low >>> 0, object.SysSumWinLoss.high >>> 0).toNumber();
            if (object.AfterAdjustSyspoolWinLoss != null)
                if ($util.Long)
                    (message.AfterAdjustSyspoolWinLoss = $util.Long.fromValue(object.AfterAdjustSyspoolWinLoss)).unsigned = false;
                else if (typeof object.AfterAdjustSyspoolWinLoss === "string")
                    message.AfterAdjustSyspoolWinLoss = parseInt(object.AfterAdjustSyspoolWinLoss, 10);
                else if (typeof object.AfterAdjustSyspoolWinLoss === "number")
                    message.AfterAdjustSyspoolWinLoss = object.AfterAdjustSyspoolWinLoss;
                else if (typeof object.AfterAdjustSyspoolWinLoss === "object")
                    message.AfterAdjustSyspoolWinLoss = new $util.LongBits(object.AfterAdjustSyspoolWinLoss.low >>> 0, object.AfterAdjustSyspoolWinLoss.high >>> 0).toNumber();
            if (object.PoolAmount != null)
                if ($util.Long)
                    (message.PoolAmount = $util.Long.fromValue(object.PoolAmount)).unsigned = false;
                else if (typeof object.PoolAmount === "string")
                    message.PoolAmount = parseInt(object.PoolAmount, 10);
                else if (typeof object.PoolAmount === "number")
                    message.PoolAmount = object.PoolAmount;
                else if (typeof object.PoolAmount === "object")
                    message.PoolAmount = new $util.LongBits(object.PoolAmount.low >>> 0, object.PoolAmount.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a FishSysPoolData message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_LHD.FishSysPoolData
         * @static
         * @param {GameMsg_LHD.FishSysPoolData} message FishSysPoolData
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FishSysPoolData.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.FlagID = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.SumBetMoney = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.SumBetMoney = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.SumBullet = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.SumBullet = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.SysSumWinLoss = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.SysSumWinLoss = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.AfterAdjustSyspoolWinLoss = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.AfterAdjustSyspoolWinLoss = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.PoolAmount = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.PoolAmount = options.longs === String ? "0" : 0;
            }
            if (message.FlagID != null && message.hasOwnProperty("FlagID"))
                object.FlagID = message.FlagID;
            if (message.SumBetMoney != null && message.hasOwnProperty("SumBetMoney"))
                if (typeof message.SumBetMoney === "number")
                    object.SumBetMoney = options.longs === String ? String(message.SumBetMoney) : message.SumBetMoney;
                else
                    object.SumBetMoney = options.longs === String ? $util.Long.prototype.toString.call(message.SumBetMoney) : options.longs === Number ? new $util.LongBits(message.SumBetMoney.low >>> 0, message.SumBetMoney.high >>> 0).toNumber() : message.SumBetMoney;
            if (message.SumBullet != null && message.hasOwnProperty("SumBullet"))
                if (typeof message.SumBullet === "number")
                    object.SumBullet = options.longs === String ? String(message.SumBullet) : message.SumBullet;
                else
                    object.SumBullet = options.longs === String ? $util.Long.prototype.toString.call(message.SumBullet) : options.longs === Number ? new $util.LongBits(message.SumBullet.low >>> 0, message.SumBullet.high >>> 0).toNumber() : message.SumBullet;
            if (message.SysSumWinLoss != null && message.hasOwnProperty("SysSumWinLoss"))
                if (typeof message.SysSumWinLoss === "number")
                    object.SysSumWinLoss = options.longs === String ? String(message.SysSumWinLoss) : message.SysSumWinLoss;
                else
                    object.SysSumWinLoss = options.longs === String ? $util.Long.prototype.toString.call(message.SysSumWinLoss) : options.longs === Number ? new $util.LongBits(message.SysSumWinLoss.low >>> 0, message.SysSumWinLoss.high >>> 0).toNumber() : message.SysSumWinLoss;
            if (message.AfterAdjustSyspoolWinLoss != null && message.hasOwnProperty("AfterAdjustSyspoolWinLoss"))
                if (typeof message.AfterAdjustSyspoolWinLoss === "number")
                    object.AfterAdjustSyspoolWinLoss = options.longs === String ? String(message.AfterAdjustSyspoolWinLoss) : message.AfterAdjustSyspoolWinLoss;
                else
                    object.AfterAdjustSyspoolWinLoss = options.longs === String ? $util.Long.prototype.toString.call(message.AfterAdjustSyspoolWinLoss) : options.longs === Number ? new $util.LongBits(message.AfterAdjustSyspoolWinLoss.low >>> 0, message.AfterAdjustSyspoolWinLoss.high >>> 0).toNumber() : message.AfterAdjustSyspoolWinLoss;
            if (message.PoolAmount != null && message.hasOwnProperty("PoolAmount"))
                if (typeof message.PoolAmount === "number")
                    object.PoolAmount = options.longs === String ? String(message.PoolAmount) : message.PoolAmount;
                else
                    object.PoolAmount = options.longs === String ? $util.Long.prototype.toString.call(message.PoolAmount) : options.longs === Number ? new $util.LongBits(message.PoolAmount.low >>> 0, message.PoolAmount.high >>> 0).toNumber() : message.PoolAmount;
            return object;
        };

        /**
         * Converts this FishSysPoolData to JSON.
         * @function toJSON
         * @memberof GameMsg_LHD.FishSysPoolData
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FishSysPoolData.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return FishSysPoolData;
    })();

    GameMsg_LHD.FishPlayerPoolDetail = (function() {

        /**
         * Properties of a FishPlayerPoolDetail.
         * @memberof GameMsg_LHD
         * @interface IFishPlayerPoolDetail
         * @property {number|null} [FlagID] FishPlayerPoolDetail FlagID
         * @property {Array.<GameMsg_LHD.IFishPlayerPoolDetailList>|null} [FishRewardList] FishPlayerPoolDetail FishRewardList
         */

        /**
         * Constructs a new FishPlayerPoolDetail.
         * @memberof GameMsg_LHD
         * @classdesc Represents a FishPlayerPoolDetail.
         * @implements IFishPlayerPoolDetail
         * @constructor
         * @param {GameMsg_LHD.IFishPlayerPoolDetail=} [properties] Properties to set
         */
        function FishPlayerPoolDetail(properties) {
            this.FishRewardList = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * FishPlayerPoolDetail FlagID.
         * @member {number} FlagID
         * @memberof GameMsg_LHD.FishPlayerPoolDetail
         * @instance
         */
        FishPlayerPoolDetail.prototype.FlagID = 0;

        /**
         * FishPlayerPoolDetail FishRewardList.
         * @member {Array.<GameMsg_LHD.IFishPlayerPoolDetailList>} FishRewardList
         * @memberof GameMsg_LHD.FishPlayerPoolDetail
         * @instance
         */
        FishPlayerPoolDetail.prototype.FishRewardList = $util.emptyArray;

        /**
         * Creates a new FishPlayerPoolDetail instance using the specified properties.
         * @function create
         * @memberof GameMsg_LHD.FishPlayerPoolDetail
         * @static
         * @param {GameMsg_LHD.IFishPlayerPoolDetail=} [properties] Properties to set
         * @returns {GameMsg_LHD.FishPlayerPoolDetail} FishPlayerPoolDetail instance
         */
        FishPlayerPoolDetail.create = function create(properties) {
            return new FishPlayerPoolDetail(properties);
        };

        /**
         * Encodes the specified FishPlayerPoolDetail message. Does not implicitly {@link GameMsg_LHD.FishPlayerPoolDetail.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_LHD.FishPlayerPoolDetail
         * @static
         * @param {GameMsg_LHD.IFishPlayerPoolDetail} message FishPlayerPoolDetail message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FishPlayerPoolDetail.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.FlagID != null && message.hasOwnProperty("FlagID"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.FlagID);
            if (message.FishRewardList != null && message.FishRewardList.length)
                for (var i = 0; i < message.FishRewardList.length; ++i)
                    $root.GameMsg_LHD.FishPlayerPoolDetailList.encode(message.FishRewardList[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified FishPlayerPoolDetail message, length delimited. Does not implicitly {@link GameMsg_LHD.FishPlayerPoolDetail.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_LHD.FishPlayerPoolDetail
         * @static
         * @param {GameMsg_LHD.IFishPlayerPoolDetail} message FishPlayerPoolDetail message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FishPlayerPoolDetail.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FishPlayerPoolDetail message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_LHD.FishPlayerPoolDetail
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_LHD.FishPlayerPoolDetail} FishPlayerPoolDetail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FishPlayerPoolDetail.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_LHD.FishPlayerPoolDetail();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.FlagID = reader.int32();
                    break;
                case 2:
                    if (!(message.FishRewardList && message.FishRewardList.length))
                        message.FishRewardList = [];
                    message.FishRewardList.push($root.GameMsg_LHD.FishPlayerPoolDetailList.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a FishPlayerPoolDetail message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_LHD.FishPlayerPoolDetail
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_LHD.FishPlayerPoolDetail} FishPlayerPoolDetail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FishPlayerPoolDetail.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a FishPlayerPoolDetail message.
         * @function verify
         * @memberof GameMsg_LHD.FishPlayerPoolDetail
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FishPlayerPoolDetail.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.FlagID != null && message.hasOwnProperty("FlagID"))
                if (!$util.isInteger(message.FlagID))
                    return "FlagID: integer expected";
            if (message.FishRewardList != null && message.hasOwnProperty("FishRewardList")) {
                if (!Array.isArray(message.FishRewardList))
                    return "FishRewardList: array expected";
                for (var i = 0; i < message.FishRewardList.length; ++i) {
                    var error = $root.GameMsg_LHD.FishPlayerPoolDetailList.verify(message.FishRewardList[i]);
                    if (error)
                        return "FishRewardList." + error;
                }
            }
            return null;
        };

        /**
         * Creates a FishPlayerPoolDetail message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_LHD.FishPlayerPoolDetail
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_LHD.FishPlayerPoolDetail} FishPlayerPoolDetail
         */
        FishPlayerPoolDetail.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_LHD.FishPlayerPoolDetail)
                return object;
            var message = new $root.GameMsg_LHD.FishPlayerPoolDetail();
            if (object.FlagID != null)
                message.FlagID = object.FlagID | 0;
            if (object.FishRewardList) {
                if (!Array.isArray(object.FishRewardList))
                    throw TypeError(".GameMsg_LHD.FishPlayerPoolDetail.FishRewardList: array expected");
                message.FishRewardList = [];
                for (var i = 0; i < object.FishRewardList.length; ++i) {
                    if (typeof object.FishRewardList[i] !== "object")
                        throw TypeError(".GameMsg_LHD.FishPlayerPoolDetail.FishRewardList: object expected");
                    message.FishRewardList[i] = $root.GameMsg_LHD.FishPlayerPoolDetailList.fromObject(object.FishRewardList[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a FishPlayerPoolDetail message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_LHD.FishPlayerPoolDetail
         * @static
         * @param {GameMsg_LHD.FishPlayerPoolDetail} message FishPlayerPoolDetail
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FishPlayerPoolDetail.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.FishRewardList = [];
            if (options.defaults)
                object.FlagID = 0;
            if (message.FlagID != null && message.hasOwnProperty("FlagID"))
                object.FlagID = message.FlagID;
            if (message.FishRewardList && message.FishRewardList.length) {
                object.FishRewardList = [];
                for (var j = 0; j < message.FishRewardList.length; ++j)
                    object.FishRewardList[j] = $root.GameMsg_LHD.FishPlayerPoolDetailList.toObject(message.FishRewardList[j], options);
            }
            return object;
        };

        /**
         * Converts this FishPlayerPoolDetail to JSON.
         * @function toJSON
         * @memberof GameMsg_LHD.FishPlayerPoolDetail
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FishPlayerPoolDetail.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return FishPlayerPoolDetail;
    })();

    GameMsg_LHD.FishPlayerPoolDetailList = (function() {

        /**
         * Properties of a FishPlayerPoolDetailList.
         * @memberof GameMsg_LHD
         * @interface IFishPlayerPoolDetailList
         * @property {number} UserID FishPlayerPoolDetailList UserID
         * @property {number|Long} HitMoney FishPlayerPoolDetailList HitMoney
         * @property {number|Long} SpendMoney FishPlayerPoolDetailList SpendMoney
         */

        /**
         * Constructs a new FishPlayerPoolDetailList.
         * @memberof GameMsg_LHD
         * @classdesc Represents a FishPlayerPoolDetailList.
         * @implements IFishPlayerPoolDetailList
         * @constructor
         * @param {GameMsg_LHD.IFishPlayerPoolDetailList=} [properties] Properties to set
         */
        function FishPlayerPoolDetailList(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * FishPlayerPoolDetailList UserID.
         * @member {number} UserID
         * @memberof GameMsg_LHD.FishPlayerPoolDetailList
         * @instance
         */
        FishPlayerPoolDetailList.prototype.UserID = 0;

        /**
         * FishPlayerPoolDetailList HitMoney.
         * @member {number|Long} HitMoney
         * @memberof GameMsg_LHD.FishPlayerPoolDetailList
         * @instance
         */
        FishPlayerPoolDetailList.prototype.HitMoney = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * FishPlayerPoolDetailList SpendMoney.
         * @member {number|Long} SpendMoney
         * @memberof GameMsg_LHD.FishPlayerPoolDetailList
         * @instance
         */
        FishPlayerPoolDetailList.prototype.SpendMoney = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new FishPlayerPoolDetailList instance using the specified properties.
         * @function create
         * @memberof GameMsg_LHD.FishPlayerPoolDetailList
         * @static
         * @param {GameMsg_LHD.IFishPlayerPoolDetailList=} [properties] Properties to set
         * @returns {GameMsg_LHD.FishPlayerPoolDetailList} FishPlayerPoolDetailList instance
         */
        FishPlayerPoolDetailList.create = function create(properties) {
            return new FishPlayerPoolDetailList(properties);
        };

        /**
         * Encodes the specified FishPlayerPoolDetailList message. Does not implicitly {@link GameMsg_LHD.FishPlayerPoolDetailList.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_LHD.FishPlayerPoolDetailList
         * @static
         * @param {GameMsg_LHD.IFishPlayerPoolDetailList} message FishPlayerPoolDetailList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FishPlayerPoolDetailList.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.UserID);
            writer.uint32(/* id 2, wireType 0 =*/16).int64(message.HitMoney);
            writer.uint32(/* id 3, wireType 0 =*/24).int64(message.SpendMoney);
            return writer;
        };

        /**
         * Encodes the specified FishPlayerPoolDetailList message, length delimited. Does not implicitly {@link GameMsg_LHD.FishPlayerPoolDetailList.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_LHD.FishPlayerPoolDetailList
         * @static
         * @param {GameMsg_LHD.IFishPlayerPoolDetailList} message FishPlayerPoolDetailList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FishPlayerPoolDetailList.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FishPlayerPoolDetailList message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_LHD.FishPlayerPoolDetailList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_LHD.FishPlayerPoolDetailList} FishPlayerPoolDetailList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FishPlayerPoolDetailList.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_LHD.FishPlayerPoolDetailList();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.UserID = reader.int32();
                    break;
                case 2:
                    message.HitMoney = reader.int64();
                    break;
                case 3:
                    message.SpendMoney = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("UserID"))
                throw $util.ProtocolError("missing required 'UserID'", { instance: message });
            if (!message.hasOwnProperty("HitMoney"))
                throw $util.ProtocolError("missing required 'HitMoney'", { instance: message });
            if (!message.hasOwnProperty("SpendMoney"))
                throw $util.ProtocolError("missing required 'SpendMoney'", { instance: message });
            return message;
        };

        /**
         * Decodes a FishPlayerPoolDetailList message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_LHD.FishPlayerPoolDetailList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_LHD.FishPlayerPoolDetailList} FishPlayerPoolDetailList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FishPlayerPoolDetailList.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a FishPlayerPoolDetailList message.
         * @function verify
         * @memberof GameMsg_LHD.FishPlayerPoolDetailList
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FishPlayerPoolDetailList.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.UserID))
                return "UserID: integer expected";
            if (!$util.isInteger(message.HitMoney) && !(message.HitMoney && $util.isInteger(message.HitMoney.low) && $util.isInteger(message.HitMoney.high)))
                return "HitMoney: integer|Long expected";
            if (!$util.isInteger(message.SpendMoney) && !(message.SpendMoney && $util.isInteger(message.SpendMoney.low) && $util.isInteger(message.SpendMoney.high)))
                return "SpendMoney: integer|Long expected";
            return null;
        };

        /**
         * Creates a FishPlayerPoolDetailList message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_LHD.FishPlayerPoolDetailList
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_LHD.FishPlayerPoolDetailList} FishPlayerPoolDetailList
         */
        FishPlayerPoolDetailList.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_LHD.FishPlayerPoolDetailList)
                return object;
            var message = new $root.GameMsg_LHD.FishPlayerPoolDetailList();
            if (object.UserID != null)
                message.UserID = object.UserID | 0;
            if (object.HitMoney != null)
                if ($util.Long)
                    (message.HitMoney = $util.Long.fromValue(object.HitMoney)).unsigned = false;
                else if (typeof object.HitMoney === "string")
                    message.HitMoney = parseInt(object.HitMoney, 10);
                else if (typeof object.HitMoney === "number")
                    message.HitMoney = object.HitMoney;
                else if (typeof object.HitMoney === "object")
                    message.HitMoney = new $util.LongBits(object.HitMoney.low >>> 0, object.HitMoney.high >>> 0).toNumber();
            if (object.SpendMoney != null)
                if ($util.Long)
                    (message.SpendMoney = $util.Long.fromValue(object.SpendMoney)).unsigned = false;
                else if (typeof object.SpendMoney === "string")
                    message.SpendMoney = parseInt(object.SpendMoney, 10);
                else if (typeof object.SpendMoney === "number")
                    message.SpendMoney = object.SpendMoney;
                else if (typeof object.SpendMoney === "object")
                    message.SpendMoney = new $util.LongBits(object.SpendMoney.low >>> 0, object.SpendMoney.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a FishPlayerPoolDetailList message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_LHD.FishPlayerPoolDetailList
         * @static
         * @param {GameMsg_LHD.FishPlayerPoolDetailList} message FishPlayerPoolDetailList
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FishPlayerPoolDetailList.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.UserID = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.HitMoney = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.HitMoney = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.SpendMoney = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.SpendMoney = options.longs === String ? "0" : 0;
            }
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                object.UserID = message.UserID;
            if (message.HitMoney != null && message.hasOwnProperty("HitMoney"))
                if (typeof message.HitMoney === "number")
                    object.HitMoney = options.longs === String ? String(message.HitMoney) : message.HitMoney;
                else
                    object.HitMoney = options.longs === String ? $util.Long.prototype.toString.call(message.HitMoney) : options.longs === Number ? new $util.LongBits(message.HitMoney.low >>> 0, message.HitMoney.high >>> 0).toNumber() : message.HitMoney;
            if (message.SpendMoney != null && message.hasOwnProperty("SpendMoney"))
                if (typeof message.SpendMoney === "number")
                    object.SpendMoney = options.longs === String ? String(message.SpendMoney) : message.SpendMoney;
                else
                    object.SpendMoney = options.longs === String ? $util.Long.prototype.toString.call(message.SpendMoney) : options.longs === Number ? new $util.LongBits(message.SpendMoney.low >>> 0, message.SpendMoney.high >>> 0).toNumber() : message.SpendMoney;
            return object;
        };

        /**
         * Converts this FishPlayerPoolDetailList to JSON.
         * @function toJSON
         * @memberof GameMsg_LHD.FishPlayerPoolDetailList
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FishPlayerPoolDetailList.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return FishPlayerPoolDetailList;
    })();

    GameMsg_LHD.FindFishBeginnerOfferByUserID = (function() {

        /**
         * Properties of a FindFishBeginnerOfferByUserID.
         * @memberof GameMsg_LHD
         * @interface IFindFishBeginnerOfferByUserID
         * @property {number} UserID FindFishBeginnerOfferByUserID UserID
         * @property {number|null} [NewPlayerAdjustSyspool] FindFishBeginnerOfferByUserID NewPlayerAdjustSyspool
         */

        /**
         * Constructs a new FindFishBeginnerOfferByUserID.
         * @memberof GameMsg_LHD
         * @classdesc Represents a FindFishBeginnerOfferByUserID.
         * @implements IFindFishBeginnerOfferByUserID
         * @constructor
         * @param {GameMsg_LHD.IFindFishBeginnerOfferByUserID=} [properties] Properties to set
         */
        function FindFishBeginnerOfferByUserID(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * FindFishBeginnerOfferByUserID UserID.
         * @member {number} UserID
         * @memberof GameMsg_LHD.FindFishBeginnerOfferByUserID
         * @instance
         */
        FindFishBeginnerOfferByUserID.prototype.UserID = 0;

        /**
         * FindFishBeginnerOfferByUserID NewPlayerAdjustSyspool.
         * @member {number} NewPlayerAdjustSyspool
         * @memberof GameMsg_LHD.FindFishBeginnerOfferByUserID
         * @instance
         */
        FindFishBeginnerOfferByUserID.prototype.NewPlayerAdjustSyspool = 0;

        /**
         * Creates a new FindFishBeginnerOfferByUserID instance using the specified properties.
         * @function create
         * @memberof GameMsg_LHD.FindFishBeginnerOfferByUserID
         * @static
         * @param {GameMsg_LHD.IFindFishBeginnerOfferByUserID=} [properties] Properties to set
         * @returns {GameMsg_LHD.FindFishBeginnerOfferByUserID} FindFishBeginnerOfferByUserID instance
         */
        FindFishBeginnerOfferByUserID.create = function create(properties) {
            return new FindFishBeginnerOfferByUserID(properties);
        };

        /**
         * Encodes the specified FindFishBeginnerOfferByUserID message. Does not implicitly {@link GameMsg_LHD.FindFishBeginnerOfferByUserID.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_LHD.FindFishBeginnerOfferByUserID
         * @static
         * @param {GameMsg_LHD.IFindFishBeginnerOfferByUserID} message FindFishBeginnerOfferByUserID message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FindFishBeginnerOfferByUserID.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.UserID);
            if (message.NewPlayerAdjustSyspool != null && message.hasOwnProperty("NewPlayerAdjustSyspool"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.NewPlayerAdjustSyspool);
            return writer;
        };

        /**
         * Encodes the specified FindFishBeginnerOfferByUserID message, length delimited. Does not implicitly {@link GameMsg_LHD.FindFishBeginnerOfferByUserID.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_LHD.FindFishBeginnerOfferByUserID
         * @static
         * @param {GameMsg_LHD.IFindFishBeginnerOfferByUserID} message FindFishBeginnerOfferByUserID message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FindFishBeginnerOfferByUserID.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FindFishBeginnerOfferByUserID message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_LHD.FindFishBeginnerOfferByUserID
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_LHD.FindFishBeginnerOfferByUserID} FindFishBeginnerOfferByUserID
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FindFishBeginnerOfferByUserID.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_LHD.FindFishBeginnerOfferByUserID();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.UserID = reader.int32();
                    break;
                case 2:
                    message.NewPlayerAdjustSyspool = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("UserID"))
                throw $util.ProtocolError("missing required 'UserID'", { instance: message });
            return message;
        };

        /**
         * Decodes a FindFishBeginnerOfferByUserID message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_LHD.FindFishBeginnerOfferByUserID
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_LHD.FindFishBeginnerOfferByUserID} FindFishBeginnerOfferByUserID
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FindFishBeginnerOfferByUserID.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a FindFishBeginnerOfferByUserID message.
         * @function verify
         * @memberof GameMsg_LHD.FindFishBeginnerOfferByUserID
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FindFishBeginnerOfferByUserID.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.UserID))
                return "UserID: integer expected";
            if (message.NewPlayerAdjustSyspool != null && message.hasOwnProperty("NewPlayerAdjustSyspool"))
                if (!$util.isInteger(message.NewPlayerAdjustSyspool))
                    return "NewPlayerAdjustSyspool: integer expected";
            return null;
        };

        /**
         * Creates a FindFishBeginnerOfferByUserID message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_LHD.FindFishBeginnerOfferByUserID
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_LHD.FindFishBeginnerOfferByUserID} FindFishBeginnerOfferByUserID
         */
        FindFishBeginnerOfferByUserID.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_LHD.FindFishBeginnerOfferByUserID)
                return object;
            var message = new $root.GameMsg_LHD.FindFishBeginnerOfferByUserID();
            if (object.UserID != null)
                message.UserID = object.UserID | 0;
            if (object.NewPlayerAdjustSyspool != null)
                message.NewPlayerAdjustSyspool = object.NewPlayerAdjustSyspool | 0;
            return message;
        };

        /**
         * Creates a plain object from a FindFishBeginnerOfferByUserID message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_LHD.FindFishBeginnerOfferByUserID
         * @static
         * @param {GameMsg_LHD.FindFishBeginnerOfferByUserID} message FindFishBeginnerOfferByUserID
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FindFishBeginnerOfferByUserID.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.UserID = 0;
                object.NewPlayerAdjustSyspool = 0;
            }
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                object.UserID = message.UserID;
            if (message.NewPlayerAdjustSyspool != null && message.hasOwnProperty("NewPlayerAdjustSyspool"))
                object.NewPlayerAdjustSyspool = message.NewPlayerAdjustSyspool;
            return object;
        };

        /**
         * Converts this FindFishBeginnerOfferByUserID to JSON.
         * @function toJSON
         * @memberof GameMsg_LHD.FindFishBeginnerOfferByUserID
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FindFishBeginnerOfferByUserID.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return FindFishBeginnerOfferByUserID;
    })();

    GameMsg_LHD.FishBeginnerOfferDetail = (function() {

        /**
         * Properties of a FishBeginnerOfferDetail.
         * @memberof GameMsg_LHD
         * @interface IFishBeginnerOfferDetail
         * @property {Array.<GameMsg_LHD.IFishBeginnerOffer>|null} [NewPlayerList] FishBeginnerOfferDetail NewPlayerList
         * @property {number|null} [NewPlayerAdjustSyspool] FishBeginnerOfferDetail NewPlayerAdjustSyspool
         */

        /**
         * Constructs a new FishBeginnerOfferDetail.
         * @memberof GameMsg_LHD
         * @classdesc Represents a FishBeginnerOfferDetail.
         * @implements IFishBeginnerOfferDetail
         * @constructor
         * @param {GameMsg_LHD.IFishBeginnerOfferDetail=} [properties] Properties to set
         */
        function FishBeginnerOfferDetail(properties) {
            this.NewPlayerList = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * FishBeginnerOfferDetail NewPlayerList.
         * @member {Array.<GameMsg_LHD.IFishBeginnerOffer>} NewPlayerList
         * @memberof GameMsg_LHD.FishBeginnerOfferDetail
         * @instance
         */
        FishBeginnerOfferDetail.prototype.NewPlayerList = $util.emptyArray;

        /**
         * FishBeginnerOfferDetail NewPlayerAdjustSyspool.
         * @member {number} NewPlayerAdjustSyspool
         * @memberof GameMsg_LHD.FishBeginnerOfferDetail
         * @instance
         */
        FishBeginnerOfferDetail.prototype.NewPlayerAdjustSyspool = 0;

        /**
         * Creates a new FishBeginnerOfferDetail instance using the specified properties.
         * @function create
         * @memberof GameMsg_LHD.FishBeginnerOfferDetail
         * @static
         * @param {GameMsg_LHD.IFishBeginnerOfferDetail=} [properties] Properties to set
         * @returns {GameMsg_LHD.FishBeginnerOfferDetail} FishBeginnerOfferDetail instance
         */
        FishBeginnerOfferDetail.create = function create(properties) {
            return new FishBeginnerOfferDetail(properties);
        };

        /**
         * Encodes the specified FishBeginnerOfferDetail message. Does not implicitly {@link GameMsg_LHD.FishBeginnerOfferDetail.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_LHD.FishBeginnerOfferDetail
         * @static
         * @param {GameMsg_LHD.IFishBeginnerOfferDetail} message FishBeginnerOfferDetail message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FishBeginnerOfferDetail.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.NewPlayerList != null && message.NewPlayerList.length)
                for (var i = 0; i < message.NewPlayerList.length; ++i)
                    $root.GameMsg_LHD.FishBeginnerOffer.encode(message.NewPlayerList[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.NewPlayerAdjustSyspool != null && message.hasOwnProperty("NewPlayerAdjustSyspool"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.NewPlayerAdjustSyspool);
            return writer;
        };

        /**
         * Encodes the specified FishBeginnerOfferDetail message, length delimited. Does not implicitly {@link GameMsg_LHD.FishBeginnerOfferDetail.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_LHD.FishBeginnerOfferDetail
         * @static
         * @param {GameMsg_LHD.IFishBeginnerOfferDetail} message FishBeginnerOfferDetail message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FishBeginnerOfferDetail.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FishBeginnerOfferDetail message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_LHD.FishBeginnerOfferDetail
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_LHD.FishBeginnerOfferDetail} FishBeginnerOfferDetail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FishBeginnerOfferDetail.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_LHD.FishBeginnerOfferDetail();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.NewPlayerList && message.NewPlayerList.length))
                        message.NewPlayerList = [];
                    message.NewPlayerList.push($root.GameMsg_LHD.FishBeginnerOffer.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.NewPlayerAdjustSyspool = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a FishBeginnerOfferDetail message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_LHD.FishBeginnerOfferDetail
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_LHD.FishBeginnerOfferDetail} FishBeginnerOfferDetail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FishBeginnerOfferDetail.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a FishBeginnerOfferDetail message.
         * @function verify
         * @memberof GameMsg_LHD.FishBeginnerOfferDetail
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FishBeginnerOfferDetail.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.NewPlayerList != null && message.hasOwnProperty("NewPlayerList")) {
                if (!Array.isArray(message.NewPlayerList))
                    return "NewPlayerList: array expected";
                for (var i = 0; i < message.NewPlayerList.length; ++i) {
                    var error = $root.GameMsg_LHD.FishBeginnerOffer.verify(message.NewPlayerList[i]);
                    if (error)
                        return "NewPlayerList." + error;
                }
            }
            if (message.NewPlayerAdjustSyspool != null && message.hasOwnProperty("NewPlayerAdjustSyspool"))
                if (!$util.isInteger(message.NewPlayerAdjustSyspool))
                    return "NewPlayerAdjustSyspool: integer expected";
            return null;
        };

        /**
         * Creates a FishBeginnerOfferDetail message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_LHD.FishBeginnerOfferDetail
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_LHD.FishBeginnerOfferDetail} FishBeginnerOfferDetail
         */
        FishBeginnerOfferDetail.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_LHD.FishBeginnerOfferDetail)
                return object;
            var message = new $root.GameMsg_LHD.FishBeginnerOfferDetail();
            if (object.NewPlayerList) {
                if (!Array.isArray(object.NewPlayerList))
                    throw TypeError(".GameMsg_LHD.FishBeginnerOfferDetail.NewPlayerList: array expected");
                message.NewPlayerList = [];
                for (var i = 0; i < object.NewPlayerList.length; ++i) {
                    if (typeof object.NewPlayerList[i] !== "object")
                        throw TypeError(".GameMsg_LHD.FishBeginnerOfferDetail.NewPlayerList: object expected");
                    message.NewPlayerList[i] = $root.GameMsg_LHD.FishBeginnerOffer.fromObject(object.NewPlayerList[i]);
                }
            }
            if (object.NewPlayerAdjustSyspool != null)
                message.NewPlayerAdjustSyspool = object.NewPlayerAdjustSyspool | 0;
            return message;
        };

        /**
         * Creates a plain object from a FishBeginnerOfferDetail message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_LHD.FishBeginnerOfferDetail
         * @static
         * @param {GameMsg_LHD.FishBeginnerOfferDetail} message FishBeginnerOfferDetail
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FishBeginnerOfferDetail.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.NewPlayerList = [];
            if (options.defaults)
                object.NewPlayerAdjustSyspool = 0;
            if (message.NewPlayerList && message.NewPlayerList.length) {
                object.NewPlayerList = [];
                for (var j = 0; j < message.NewPlayerList.length; ++j)
                    object.NewPlayerList[j] = $root.GameMsg_LHD.FishBeginnerOffer.toObject(message.NewPlayerList[j], options);
            }
            if (message.NewPlayerAdjustSyspool != null && message.hasOwnProperty("NewPlayerAdjustSyspool"))
                object.NewPlayerAdjustSyspool = message.NewPlayerAdjustSyspool;
            return object;
        };

        /**
         * Converts this FishBeginnerOfferDetail to JSON.
         * @function toJSON
         * @memberof GameMsg_LHD.FishBeginnerOfferDetail
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FishBeginnerOfferDetail.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return FishBeginnerOfferDetail;
    })();

    GameMsg_LHD.FishBeginnerOffer = (function() {

        /**
         * Properties of a FishBeginnerOffer.
         * @memberof GameMsg_LHD
         * @interface IFishBeginnerOffer
         * @property {number} UserID FishBeginnerOffer UserID
         * @property {number} Bullet FishBeginnerOffer Bullet
         * @property {number} Score FishBeginnerOffer Score
         * @property {number} Status FishBeginnerOffer Status
         */

        /**
         * Constructs a new FishBeginnerOffer.
         * @memberof GameMsg_LHD
         * @classdesc Represents a FishBeginnerOffer.
         * @implements IFishBeginnerOffer
         * @constructor
         * @param {GameMsg_LHD.IFishBeginnerOffer=} [properties] Properties to set
         */
        function FishBeginnerOffer(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * FishBeginnerOffer UserID.
         * @member {number} UserID
         * @memberof GameMsg_LHD.FishBeginnerOffer
         * @instance
         */
        FishBeginnerOffer.prototype.UserID = 0;

        /**
         * FishBeginnerOffer Bullet.
         * @member {number} Bullet
         * @memberof GameMsg_LHD.FishBeginnerOffer
         * @instance
         */
        FishBeginnerOffer.prototype.Bullet = 0;

        /**
         * FishBeginnerOffer Score.
         * @member {number} Score
         * @memberof GameMsg_LHD.FishBeginnerOffer
         * @instance
         */
        FishBeginnerOffer.prototype.Score = 0;

        /**
         * FishBeginnerOffer Status.
         * @member {number} Status
         * @memberof GameMsg_LHD.FishBeginnerOffer
         * @instance
         */
        FishBeginnerOffer.prototype.Status = 0;

        /**
         * Creates a new FishBeginnerOffer instance using the specified properties.
         * @function create
         * @memberof GameMsg_LHD.FishBeginnerOffer
         * @static
         * @param {GameMsg_LHD.IFishBeginnerOffer=} [properties] Properties to set
         * @returns {GameMsg_LHD.FishBeginnerOffer} FishBeginnerOffer instance
         */
        FishBeginnerOffer.create = function create(properties) {
            return new FishBeginnerOffer(properties);
        };

        /**
         * Encodes the specified FishBeginnerOffer message. Does not implicitly {@link GameMsg_LHD.FishBeginnerOffer.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_LHD.FishBeginnerOffer
         * @static
         * @param {GameMsg_LHD.IFishBeginnerOffer} message FishBeginnerOffer message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FishBeginnerOffer.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.UserID);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.Bullet);
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.Score);
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.Status);
            return writer;
        };

        /**
         * Encodes the specified FishBeginnerOffer message, length delimited. Does not implicitly {@link GameMsg_LHD.FishBeginnerOffer.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_LHD.FishBeginnerOffer
         * @static
         * @param {GameMsg_LHD.IFishBeginnerOffer} message FishBeginnerOffer message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FishBeginnerOffer.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FishBeginnerOffer message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_LHD.FishBeginnerOffer
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_LHD.FishBeginnerOffer} FishBeginnerOffer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FishBeginnerOffer.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_LHD.FishBeginnerOffer();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.UserID = reader.int32();
                    break;
                case 2:
                    message.Bullet = reader.int32();
                    break;
                case 3:
                    message.Score = reader.int32();
                    break;
                case 4:
                    message.Status = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("UserID"))
                throw $util.ProtocolError("missing required 'UserID'", { instance: message });
            if (!message.hasOwnProperty("Bullet"))
                throw $util.ProtocolError("missing required 'Bullet'", { instance: message });
            if (!message.hasOwnProperty("Score"))
                throw $util.ProtocolError("missing required 'Score'", { instance: message });
            if (!message.hasOwnProperty("Status"))
                throw $util.ProtocolError("missing required 'Status'", { instance: message });
            return message;
        };

        /**
         * Decodes a FishBeginnerOffer message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_LHD.FishBeginnerOffer
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_LHD.FishBeginnerOffer} FishBeginnerOffer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FishBeginnerOffer.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a FishBeginnerOffer message.
         * @function verify
         * @memberof GameMsg_LHD.FishBeginnerOffer
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FishBeginnerOffer.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.UserID))
                return "UserID: integer expected";
            if (!$util.isInteger(message.Bullet))
                return "Bullet: integer expected";
            if (!$util.isInteger(message.Score))
                return "Score: integer expected";
            if (!$util.isInteger(message.Status))
                return "Status: integer expected";
            return null;
        };

        /**
         * Creates a FishBeginnerOffer message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_LHD.FishBeginnerOffer
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_LHD.FishBeginnerOffer} FishBeginnerOffer
         */
        FishBeginnerOffer.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_LHD.FishBeginnerOffer)
                return object;
            var message = new $root.GameMsg_LHD.FishBeginnerOffer();
            if (object.UserID != null)
                message.UserID = object.UserID | 0;
            if (object.Bullet != null)
                message.Bullet = object.Bullet | 0;
            if (object.Score != null)
                message.Score = object.Score | 0;
            if (object.Status != null)
                message.Status = object.Status | 0;
            return message;
        };

        /**
         * Creates a plain object from a FishBeginnerOffer message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_LHD.FishBeginnerOffer
         * @static
         * @param {GameMsg_LHD.FishBeginnerOffer} message FishBeginnerOffer
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FishBeginnerOffer.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.UserID = 0;
                object.Bullet = 0;
                object.Score = 0;
                object.Status = 0;
            }
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                object.UserID = message.UserID;
            if (message.Bullet != null && message.hasOwnProperty("Bullet"))
                object.Bullet = message.Bullet;
            if (message.Score != null && message.hasOwnProperty("Score"))
                object.Score = message.Score;
            if (message.Status != null && message.hasOwnProperty("Status"))
                object.Status = message.Status;
            return object;
        };

        /**
         * Converts this FishBeginnerOffer to JSON.
         * @function toJSON
         * @memberof GameMsg_LHD.FishBeginnerOffer
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FishBeginnerOffer.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return FishBeginnerOffer;
    })();

    GameMsg_LHD.Cd21SysPoolData = (function() {

        /**
         * Properties of a Cd21SysPoolData.
         * @memberof GameMsg_LHD
         * @interface ICd21SysPoolData
         * @property {number} FlagID Cd21SysPoolData FlagID
         * @property {number|Long} SumBetMoney Cd21SysPoolData SumBetMoney
         * @property {number|Long} SumBetCount Cd21SysPoolData SumBetCount
         * @property {number|Long} PoolAmount Cd21SysPoolData PoolAmount
         */

        /**
         * Constructs a new Cd21SysPoolData.
         * @memberof GameMsg_LHD
         * @classdesc Represents a Cd21SysPoolData.
         * @implements ICd21SysPoolData
         * @constructor
         * @param {GameMsg_LHD.ICd21SysPoolData=} [properties] Properties to set
         */
        function Cd21SysPoolData(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Cd21SysPoolData FlagID.
         * @member {number} FlagID
         * @memberof GameMsg_LHD.Cd21SysPoolData
         * @instance
         */
        Cd21SysPoolData.prototype.FlagID = 0;

        /**
         * Cd21SysPoolData SumBetMoney.
         * @member {number|Long} SumBetMoney
         * @memberof GameMsg_LHD.Cd21SysPoolData
         * @instance
         */
        Cd21SysPoolData.prototype.SumBetMoney = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Cd21SysPoolData SumBetCount.
         * @member {number|Long} SumBetCount
         * @memberof GameMsg_LHD.Cd21SysPoolData
         * @instance
         */
        Cd21SysPoolData.prototype.SumBetCount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Cd21SysPoolData PoolAmount.
         * @member {number|Long} PoolAmount
         * @memberof GameMsg_LHD.Cd21SysPoolData
         * @instance
         */
        Cd21SysPoolData.prototype.PoolAmount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new Cd21SysPoolData instance using the specified properties.
         * @function create
         * @memberof GameMsg_LHD.Cd21SysPoolData
         * @static
         * @param {GameMsg_LHD.ICd21SysPoolData=} [properties] Properties to set
         * @returns {GameMsg_LHD.Cd21SysPoolData} Cd21SysPoolData instance
         */
        Cd21SysPoolData.create = function create(properties) {
            return new Cd21SysPoolData(properties);
        };

        /**
         * Encodes the specified Cd21SysPoolData message. Does not implicitly {@link GameMsg_LHD.Cd21SysPoolData.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_LHD.Cd21SysPoolData
         * @static
         * @param {GameMsg_LHD.ICd21SysPoolData} message Cd21SysPoolData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Cd21SysPoolData.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.FlagID);
            writer.uint32(/* id 2, wireType 0 =*/16).int64(message.SumBetMoney);
            writer.uint32(/* id 3, wireType 0 =*/24).int64(message.SumBetCount);
            writer.uint32(/* id 4, wireType 0 =*/32).int64(message.PoolAmount);
            return writer;
        };

        /**
         * Encodes the specified Cd21SysPoolData message, length delimited. Does not implicitly {@link GameMsg_LHD.Cd21SysPoolData.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_LHD.Cd21SysPoolData
         * @static
         * @param {GameMsg_LHD.ICd21SysPoolData} message Cd21SysPoolData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Cd21SysPoolData.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Cd21SysPoolData message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_LHD.Cd21SysPoolData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_LHD.Cd21SysPoolData} Cd21SysPoolData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Cd21SysPoolData.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_LHD.Cd21SysPoolData();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.FlagID = reader.int32();
                    break;
                case 2:
                    message.SumBetMoney = reader.int64();
                    break;
                case 3:
                    message.SumBetCount = reader.int64();
                    break;
                case 4:
                    message.PoolAmount = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("FlagID"))
                throw $util.ProtocolError("missing required 'FlagID'", { instance: message });
            if (!message.hasOwnProperty("SumBetMoney"))
                throw $util.ProtocolError("missing required 'SumBetMoney'", { instance: message });
            if (!message.hasOwnProperty("SumBetCount"))
                throw $util.ProtocolError("missing required 'SumBetCount'", { instance: message });
            if (!message.hasOwnProperty("PoolAmount"))
                throw $util.ProtocolError("missing required 'PoolAmount'", { instance: message });
            return message;
        };

        /**
         * Decodes a Cd21SysPoolData message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_LHD.Cd21SysPoolData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_LHD.Cd21SysPoolData} Cd21SysPoolData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Cd21SysPoolData.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Cd21SysPoolData message.
         * @function verify
         * @memberof GameMsg_LHD.Cd21SysPoolData
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Cd21SysPoolData.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.FlagID))
                return "FlagID: integer expected";
            if (!$util.isInteger(message.SumBetMoney) && !(message.SumBetMoney && $util.isInteger(message.SumBetMoney.low) && $util.isInteger(message.SumBetMoney.high)))
                return "SumBetMoney: integer|Long expected";
            if (!$util.isInteger(message.SumBetCount) && !(message.SumBetCount && $util.isInteger(message.SumBetCount.low) && $util.isInteger(message.SumBetCount.high)))
                return "SumBetCount: integer|Long expected";
            if (!$util.isInteger(message.PoolAmount) && !(message.PoolAmount && $util.isInteger(message.PoolAmount.low) && $util.isInteger(message.PoolAmount.high)))
                return "PoolAmount: integer|Long expected";
            return null;
        };

        /**
         * Creates a Cd21SysPoolData message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_LHD.Cd21SysPoolData
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_LHD.Cd21SysPoolData} Cd21SysPoolData
         */
        Cd21SysPoolData.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_LHD.Cd21SysPoolData)
                return object;
            var message = new $root.GameMsg_LHD.Cd21SysPoolData();
            if (object.FlagID != null)
                message.FlagID = object.FlagID | 0;
            if (object.SumBetMoney != null)
                if ($util.Long)
                    (message.SumBetMoney = $util.Long.fromValue(object.SumBetMoney)).unsigned = false;
                else if (typeof object.SumBetMoney === "string")
                    message.SumBetMoney = parseInt(object.SumBetMoney, 10);
                else if (typeof object.SumBetMoney === "number")
                    message.SumBetMoney = object.SumBetMoney;
                else if (typeof object.SumBetMoney === "object")
                    message.SumBetMoney = new $util.LongBits(object.SumBetMoney.low >>> 0, object.SumBetMoney.high >>> 0).toNumber();
            if (object.SumBetCount != null)
                if ($util.Long)
                    (message.SumBetCount = $util.Long.fromValue(object.SumBetCount)).unsigned = false;
                else if (typeof object.SumBetCount === "string")
                    message.SumBetCount = parseInt(object.SumBetCount, 10);
                else if (typeof object.SumBetCount === "number")
                    message.SumBetCount = object.SumBetCount;
                else if (typeof object.SumBetCount === "object")
                    message.SumBetCount = new $util.LongBits(object.SumBetCount.low >>> 0, object.SumBetCount.high >>> 0).toNumber();
            if (object.PoolAmount != null)
                if ($util.Long)
                    (message.PoolAmount = $util.Long.fromValue(object.PoolAmount)).unsigned = false;
                else if (typeof object.PoolAmount === "string")
                    message.PoolAmount = parseInt(object.PoolAmount, 10);
                else if (typeof object.PoolAmount === "number")
                    message.PoolAmount = object.PoolAmount;
                else if (typeof object.PoolAmount === "object")
                    message.PoolAmount = new $util.LongBits(object.PoolAmount.low >>> 0, object.PoolAmount.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a Cd21SysPoolData message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_LHD.Cd21SysPoolData
         * @static
         * @param {GameMsg_LHD.Cd21SysPoolData} message Cd21SysPoolData
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Cd21SysPoolData.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.FlagID = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.SumBetMoney = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.SumBetMoney = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.SumBetCount = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.SumBetCount = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.PoolAmount = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.PoolAmount = options.longs === String ? "0" : 0;
            }
            if (message.FlagID != null && message.hasOwnProperty("FlagID"))
                object.FlagID = message.FlagID;
            if (message.SumBetMoney != null && message.hasOwnProperty("SumBetMoney"))
                if (typeof message.SumBetMoney === "number")
                    object.SumBetMoney = options.longs === String ? String(message.SumBetMoney) : message.SumBetMoney;
                else
                    object.SumBetMoney = options.longs === String ? $util.Long.prototype.toString.call(message.SumBetMoney) : options.longs === Number ? new $util.LongBits(message.SumBetMoney.low >>> 0, message.SumBetMoney.high >>> 0).toNumber() : message.SumBetMoney;
            if (message.SumBetCount != null && message.hasOwnProperty("SumBetCount"))
                if (typeof message.SumBetCount === "number")
                    object.SumBetCount = options.longs === String ? String(message.SumBetCount) : message.SumBetCount;
                else
                    object.SumBetCount = options.longs === String ? $util.Long.prototype.toString.call(message.SumBetCount) : options.longs === Number ? new $util.LongBits(message.SumBetCount.low >>> 0, message.SumBetCount.high >>> 0).toNumber() : message.SumBetCount;
            if (message.PoolAmount != null && message.hasOwnProperty("PoolAmount"))
                if (typeof message.PoolAmount === "number")
                    object.PoolAmount = options.longs === String ? String(message.PoolAmount) : message.PoolAmount;
                else
                    object.PoolAmount = options.longs === String ? $util.Long.prototype.toString.call(message.PoolAmount) : options.longs === Number ? new $util.LongBits(message.PoolAmount.low >>> 0, message.PoolAmount.high >>> 0).toNumber() : message.PoolAmount;
            return object;
        };

        /**
         * Converts this Cd21SysPoolData to JSON.
         * @function toJSON
         * @memberof GameMsg_LHD.Cd21SysPoolData
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Cd21SysPoolData.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Cd21SysPoolData;
    })();

    GameMsg_LHD.UserJackpotToBox = (function() {

        /**
         * Properties of a UserJackpotToBox.
         * @memberof GameMsg_LHD
         * @interface IUserJackpotToBox
         * @property {number} UserID UserJackpotToBox UserID
         * @property {number|Long} UpdateAmount UserJackpotToBox UpdateAmount
         */

        /**
         * Constructs a new UserJackpotToBox.
         * @memberof GameMsg_LHD
         * @classdesc Represents a UserJackpotToBox.
         * @implements IUserJackpotToBox
         * @constructor
         * @param {GameMsg_LHD.IUserJackpotToBox=} [properties] Properties to set
         */
        function UserJackpotToBox(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UserJackpotToBox UserID.
         * @member {number} UserID
         * @memberof GameMsg_LHD.UserJackpotToBox
         * @instance
         */
        UserJackpotToBox.prototype.UserID = 0;

        /**
         * UserJackpotToBox UpdateAmount.
         * @member {number|Long} UpdateAmount
         * @memberof GameMsg_LHD.UserJackpotToBox
         * @instance
         */
        UserJackpotToBox.prototype.UpdateAmount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new UserJackpotToBox instance using the specified properties.
         * @function create
         * @memberof GameMsg_LHD.UserJackpotToBox
         * @static
         * @param {GameMsg_LHD.IUserJackpotToBox=} [properties] Properties to set
         * @returns {GameMsg_LHD.UserJackpotToBox} UserJackpotToBox instance
         */
        UserJackpotToBox.create = function create(properties) {
            return new UserJackpotToBox(properties);
        };

        /**
         * Encodes the specified UserJackpotToBox message. Does not implicitly {@link GameMsg_LHD.UserJackpotToBox.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_LHD.UserJackpotToBox
         * @static
         * @param {GameMsg_LHD.IUserJackpotToBox} message UserJackpotToBox message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserJackpotToBox.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.UserID);
            writer.uint32(/* id 2, wireType 0 =*/16).int64(message.UpdateAmount);
            return writer;
        };

        /**
         * Encodes the specified UserJackpotToBox message, length delimited. Does not implicitly {@link GameMsg_LHD.UserJackpotToBox.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_LHD.UserJackpotToBox
         * @static
         * @param {GameMsg_LHD.IUserJackpotToBox} message UserJackpotToBox message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserJackpotToBox.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UserJackpotToBox message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_LHD.UserJackpotToBox
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_LHD.UserJackpotToBox} UserJackpotToBox
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserJackpotToBox.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_LHD.UserJackpotToBox();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.UserID = reader.int32();
                    break;
                case 2:
                    message.UpdateAmount = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("UserID"))
                throw $util.ProtocolError("missing required 'UserID'", { instance: message });
            if (!message.hasOwnProperty("UpdateAmount"))
                throw $util.ProtocolError("missing required 'UpdateAmount'", { instance: message });
            return message;
        };

        /**
         * Decodes a UserJackpotToBox message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_LHD.UserJackpotToBox
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_LHD.UserJackpotToBox} UserJackpotToBox
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserJackpotToBox.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a UserJackpotToBox message.
         * @function verify
         * @memberof GameMsg_LHD.UserJackpotToBox
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UserJackpotToBox.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.UserID))
                return "UserID: integer expected";
            if (!$util.isInteger(message.UpdateAmount) && !(message.UpdateAmount && $util.isInteger(message.UpdateAmount.low) && $util.isInteger(message.UpdateAmount.high)))
                return "UpdateAmount: integer|Long expected";
            return null;
        };

        /**
         * Creates a UserJackpotToBox message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_LHD.UserJackpotToBox
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_LHD.UserJackpotToBox} UserJackpotToBox
         */
        UserJackpotToBox.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_LHD.UserJackpotToBox)
                return object;
            var message = new $root.GameMsg_LHD.UserJackpotToBox();
            if (object.UserID != null)
                message.UserID = object.UserID | 0;
            if (object.UpdateAmount != null)
                if ($util.Long)
                    (message.UpdateAmount = $util.Long.fromValue(object.UpdateAmount)).unsigned = false;
                else if (typeof object.UpdateAmount === "string")
                    message.UpdateAmount = parseInt(object.UpdateAmount, 10);
                else if (typeof object.UpdateAmount === "number")
                    message.UpdateAmount = object.UpdateAmount;
                else if (typeof object.UpdateAmount === "object")
                    message.UpdateAmount = new $util.LongBits(object.UpdateAmount.low >>> 0, object.UpdateAmount.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a UserJackpotToBox message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_LHD.UserJackpotToBox
         * @static
         * @param {GameMsg_LHD.UserJackpotToBox} message UserJackpotToBox
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UserJackpotToBox.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.UserID = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.UpdateAmount = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.UpdateAmount = options.longs === String ? "0" : 0;
            }
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                object.UserID = message.UserID;
            if (message.UpdateAmount != null && message.hasOwnProperty("UpdateAmount"))
                if (typeof message.UpdateAmount === "number")
                    object.UpdateAmount = options.longs === String ? String(message.UpdateAmount) : message.UpdateAmount;
                else
                    object.UpdateAmount = options.longs === String ? $util.Long.prototype.toString.call(message.UpdateAmount) : options.longs === Number ? new $util.LongBits(message.UpdateAmount.low >>> 0, message.UpdateAmount.high >>> 0).toNumber() : message.UpdateAmount;
            return object;
        };

        /**
         * Converts this UserJackpotToBox to JSON.
         * @function toJSON
         * @memberof GameMsg_LHD.UserJackpotToBox
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserJackpotToBox.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UserJackpotToBox;
    })();

    GameMsg_LHD.JackpotData = (function() {

        /**
         * Properties of a JackpotData.
         * @memberof GameMsg_LHD
         * @interface IJackpotData
         * @property {number} GameID JackpotData GameID
         * @property {number} FlagID JackpotData FlagID
         * @property {number} TableNo JackpotData TableNo
         * @property {number|Long} Contribution JackpotData Contribution
         * @property {number|Long} TotalContribution JackpotData TotalContribution
         * @property {number|Long} AwardTotal JackpotData AwardTotal
         * @property {number} Level JackpotData Level
         * @property {number|Long} JackpotPool JackpotData JackpotPool
         */

        /**
         * Constructs a new JackpotData.
         * @memberof GameMsg_LHD
         * @classdesc Represents a JackpotData.
         * @implements IJackpotData
         * @constructor
         * @param {GameMsg_LHD.IJackpotData=} [properties] Properties to set
         */
        function JackpotData(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * JackpotData GameID.
         * @member {number} GameID
         * @memberof GameMsg_LHD.JackpotData
         * @instance
         */
        JackpotData.prototype.GameID = 0;

        /**
         * JackpotData FlagID.
         * @member {number} FlagID
         * @memberof GameMsg_LHD.JackpotData
         * @instance
         */
        JackpotData.prototype.FlagID = 0;

        /**
         * JackpotData TableNo.
         * @member {number} TableNo
         * @memberof GameMsg_LHD.JackpotData
         * @instance
         */
        JackpotData.prototype.TableNo = 0;

        /**
         * JackpotData Contribution.
         * @member {number|Long} Contribution
         * @memberof GameMsg_LHD.JackpotData
         * @instance
         */
        JackpotData.prototype.Contribution = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * JackpotData TotalContribution.
         * @member {number|Long} TotalContribution
         * @memberof GameMsg_LHD.JackpotData
         * @instance
         */
        JackpotData.prototype.TotalContribution = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * JackpotData AwardTotal.
         * @member {number|Long} AwardTotal
         * @memberof GameMsg_LHD.JackpotData
         * @instance
         */
        JackpotData.prototype.AwardTotal = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * JackpotData Level.
         * @member {number} Level
         * @memberof GameMsg_LHD.JackpotData
         * @instance
         */
        JackpotData.prototype.Level = 0;

        /**
         * JackpotData JackpotPool.
         * @member {number|Long} JackpotPool
         * @memberof GameMsg_LHD.JackpotData
         * @instance
         */
        JackpotData.prototype.JackpotPool = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new JackpotData instance using the specified properties.
         * @function create
         * @memberof GameMsg_LHD.JackpotData
         * @static
         * @param {GameMsg_LHD.IJackpotData=} [properties] Properties to set
         * @returns {GameMsg_LHD.JackpotData} JackpotData instance
         */
        JackpotData.create = function create(properties) {
            return new JackpotData(properties);
        };

        /**
         * Encodes the specified JackpotData message. Does not implicitly {@link GameMsg_LHD.JackpotData.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_LHD.JackpotData
         * @static
         * @param {GameMsg_LHD.IJackpotData} message JackpotData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JackpotData.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.GameID);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.FlagID);
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.TableNo);
            writer.uint32(/* id 4, wireType 0 =*/32).int64(message.Contribution);
            writer.uint32(/* id 5, wireType 0 =*/40).int64(message.TotalContribution);
            writer.uint32(/* id 6, wireType 0 =*/48).int64(message.AwardTotal);
            writer.uint32(/* id 7, wireType 0 =*/56).int32(message.Level);
            writer.uint32(/* id 8, wireType 0 =*/64).int64(message.JackpotPool);
            return writer;
        };

        /**
         * Encodes the specified JackpotData message, length delimited. Does not implicitly {@link GameMsg_LHD.JackpotData.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_LHD.JackpotData
         * @static
         * @param {GameMsg_LHD.IJackpotData} message JackpotData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JackpotData.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a JackpotData message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_LHD.JackpotData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_LHD.JackpotData} JackpotData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JackpotData.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_LHD.JackpotData();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.GameID = reader.int32();
                    break;
                case 2:
                    message.FlagID = reader.int32();
                    break;
                case 3:
                    message.TableNo = reader.int32();
                    break;
                case 4:
                    message.Contribution = reader.int64();
                    break;
                case 5:
                    message.TotalContribution = reader.int64();
                    break;
                case 6:
                    message.AwardTotal = reader.int64();
                    break;
                case 7:
                    message.Level = reader.int32();
                    break;
                case 8:
                    message.JackpotPool = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("GameID"))
                throw $util.ProtocolError("missing required 'GameID'", { instance: message });
            if (!message.hasOwnProperty("FlagID"))
                throw $util.ProtocolError("missing required 'FlagID'", { instance: message });
            if (!message.hasOwnProperty("TableNo"))
                throw $util.ProtocolError("missing required 'TableNo'", { instance: message });
            if (!message.hasOwnProperty("Contribution"))
                throw $util.ProtocolError("missing required 'Contribution'", { instance: message });
            if (!message.hasOwnProperty("TotalContribution"))
                throw $util.ProtocolError("missing required 'TotalContribution'", { instance: message });
            if (!message.hasOwnProperty("AwardTotal"))
                throw $util.ProtocolError("missing required 'AwardTotal'", { instance: message });
            if (!message.hasOwnProperty("Level"))
                throw $util.ProtocolError("missing required 'Level'", { instance: message });
            if (!message.hasOwnProperty("JackpotPool"))
                throw $util.ProtocolError("missing required 'JackpotPool'", { instance: message });
            return message;
        };

        /**
         * Decodes a JackpotData message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_LHD.JackpotData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_LHD.JackpotData} JackpotData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JackpotData.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a JackpotData message.
         * @function verify
         * @memberof GameMsg_LHD.JackpotData
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        JackpotData.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.GameID))
                return "GameID: integer expected";
            if (!$util.isInteger(message.FlagID))
                return "FlagID: integer expected";
            if (!$util.isInteger(message.TableNo))
                return "TableNo: integer expected";
            if (!$util.isInteger(message.Contribution) && !(message.Contribution && $util.isInteger(message.Contribution.low) && $util.isInteger(message.Contribution.high)))
                return "Contribution: integer|Long expected";
            if (!$util.isInteger(message.TotalContribution) && !(message.TotalContribution && $util.isInteger(message.TotalContribution.low) && $util.isInteger(message.TotalContribution.high)))
                return "TotalContribution: integer|Long expected";
            if (!$util.isInteger(message.AwardTotal) && !(message.AwardTotal && $util.isInteger(message.AwardTotal.low) && $util.isInteger(message.AwardTotal.high)))
                return "AwardTotal: integer|Long expected";
            if (!$util.isInteger(message.Level))
                return "Level: integer expected";
            if (!$util.isInteger(message.JackpotPool) && !(message.JackpotPool && $util.isInteger(message.JackpotPool.low) && $util.isInteger(message.JackpotPool.high)))
                return "JackpotPool: integer|Long expected";
            return null;
        };

        /**
         * Creates a JackpotData message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_LHD.JackpotData
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_LHD.JackpotData} JackpotData
         */
        JackpotData.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_LHD.JackpotData)
                return object;
            var message = new $root.GameMsg_LHD.JackpotData();
            if (object.GameID != null)
                message.GameID = object.GameID | 0;
            if (object.FlagID != null)
                message.FlagID = object.FlagID | 0;
            if (object.TableNo != null)
                message.TableNo = object.TableNo | 0;
            if (object.Contribution != null)
                if ($util.Long)
                    (message.Contribution = $util.Long.fromValue(object.Contribution)).unsigned = false;
                else if (typeof object.Contribution === "string")
                    message.Contribution = parseInt(object.Contribution, 10);
                else if (typeof object.Contribution === "number")
                    message.Contribution = object.Contribution;
                else if (typeof object.Contribution === "object")
                    message.Contribution = new $util.LongBits(object.Contribution.low >>> 0, object.Contribution.high >>> 0).toNumber();
            if (object.TotalContribution != null)
                if ($util.Long)
                    (message.TotalContribution = $util.Long.fromValue(object.TotalContribution)).unsigned = false;
                else if (typeof object.TotalContribution === "string")
                    message.TotalContribution = parseInt(object.TotalContribution, 10);
                else if (typeof object.TotalContribution === "number")
                    message.TotalContribution = object.TotalContribution;
                else if (typeof object.TotalContribution === "object")
                    message.TotalContribution = new $util.LongBits(object.TotalContribution.low >>> 0, object.TotalContribution.high >>> 0).toNumber();
            if (object.AwardTotal != null)
                if ($util.Long)
                    (message.AwardTotal = $util.Long.fromValue(object.AwardTotal)).unsigned = false;
                else if (typeof object.AwardTotal === "string")
                    message.AwardTotal = parseInt(object.AwardTotal, 10);
                else if (typeof object.AwardTotal === "number")
                    message.AwardTotal = object.AwardTotal;
                else if (typeof object.AwardTotal === "object")
                    message.AwardTotal = new $util.LongBits(object.AwardTotal.low >>> 0, object.AwardTotal.high >>> 0).toNumber();
            if (object.Level != null)
                message.Level = object.Level | 0;
            if (object.JackpotPool != null)
                if ($util.Long)
                    (message.JackpotPool = $util.Long.fromValue(object.JackpotPool)).unsigned = false;
                else if (typeof object.JackpotPool === "string")
                    message.JackpotPool = parseInt(object.JackpotPool, 10);
                else if (typeof object.JackpotPool === "number")
                    message.JackpotPool = object.JackpotPool;
                else if (typeof object.JackpotPool === "object")
                    message.JackpotPool = new $util.LongBits(object.JackpotPool.low >>> 0, object.JackpotPool.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a JackpotData message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_LHD.JackpotData
         * @static
         * @param {GameMsg_LHD.JackpotData} message JackpotData
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        JackpotData.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.GameID = 0;
                object.FlagID = 0;
                object.TableNo = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.Contribution = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.Contribution = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.TotalContribution = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.TotalContribution = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.AwardTotal = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.AwardTotal = options.longs === String ? "0" : 0;
                object.Level = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.JackpotPool = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.JackpotPool = options.longs === String ? "0" : 0;
            }
            if (message.GameID != null && message.hasOwnProperty("GameID"))
                object.GameID = message.GameID;
            if (message.FlagID != null && message.hasOwnProperty("FlagID"))
                object.FlagID = message.FlagID;
            if (message.TableNo != null && message.hasOwnProperty("TableNo"))
                object.TableNo = message.TableNo;
            if (message.Contribution != null && message.hasOwnProperty("Contribution"))
                if (typeof message.Contribution === "number")
                    object.Contribution = options.longs === String ? String(message.Contribution) : message.Contribution;
                else
                    object.Contribution = options.longs === String ? $util.Long.prototype.toString.call(message.Contribution) : options.longs === Number ? new $util.LongBits(message.Contribution.low >>> 0, message.Contribution.high >>> 0).toNumber() : message.Contribution;
            if (message.TotalContribution != null && message.hasOwnProperty("TotalContribution"))
                if (typeof message.TotalContribution === "number")
                    object.TotalContribution = options.longs === String ? String(message.TotalContribution) : message.TotalContribution;
                else
                    object.TotalContribution = options.longs === String ? $util.Long.prototype.toString.call(message.TotalContribution) : options.longs === Number ? new $util.LongBits(message.TotalContribution.low >>> 0, message.TotalContribution.high >>> 0).toNumber() : message.TotalContribution;
            if (message.AwardTotal != null && message.hasOwnProperty("AwardTotal"))
                if (typeof message.AwardTotal === "number")
                    object.AwardTotal = options.longs === String ? String(message.AwardTotal) : message.AwardTotal;
                else
                    object.AwardTotal = options.longs === String ? $util.Long.prototype.toString.call(message.AwardTotal) : options.longs === Number ? new $util.LongBits(message.AwardTotal.low >>> 0, message.AwardTotal.high >>> 0).toNumber() : message.AwardTotal;
            if (message.Level != null && message.hasOwnProperty("Level"))
                object.Level = message.Level;
            if (message.JackpotPool != null && message.hasOwnProperty("JackpotPool"))
                if (typeof message.JackpotPool === "number")
                    object.JackpotPool = options.longs === String ? String(message.JackpotPool) : message.JackpotPool;
                else
                    object.JackpotPool = options.longs === String ? $util.Long.prototype.toString.call(message.JackpotPool) : options.longs === Number ? new $util.LongBits(message.JackpotPool.low >>> 0, message.JackpotPool.high >>> 0).toNumber() : message.JackpotPool;
            return object;
        };

        /**
         * Converts this JackpotData to JSON.
         * @function toJSON
         * @memberof GameMsg_LHD.JackpotData
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        JackpotData.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return JackpotData;
    })();

    GameMsg_LHD.JackpotAllData = (function() {

        /**
         * Properties of a JackpotAllData.
         * @memberof GameMsg_LHD
         * @interface IJackpotAllData
         * @property {Array.<GameMsg_LHD.IJackpotData>|null} [AllData] JackpotAllData AllData
         */

        /**
         * Constructs a new JackpotAllData.
         * @memberof GameMsg_LHD
         * @classdesc Represents a JackpotAllData.
         * @implements IJackpotAllData
         * @constructor
         * @param {GameMsg_LHD.IJackpotAllData=} [properties] Properties to set
         */
        function JackpotAllData(properties) {
            this.AllData = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * JackpotAllData AllData.
         * @member {Array.<GameMsg_LHD.IJackpotData>} AllData
         * @memberof GameMsg_LHD.JackpotAllData
         * @instance
         */
        JackpotAllData.prototype.AllData = $util.emptyArray;

        /**
         * Creates a new JackpotAllData instance using the specified properties.
         * @function create
         * @memberof GameMsg_LHD.JackpotAllData
         * @static
         * @param {GameMsg_LHD.IJackpotAllData=} [properties] Properties to set
         * @returns {GameMsg_LHD.JackpotAllData} JackpotAllData instance
         */
        JackpotAllData.create = function create(properties) {
            return new JackpotAllData(properties);
        };

        /**
         * Encodes the specified JackpotAllData message. Does not implicitly {@link GameMsg_LHD.JackpotAllData.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_LHD.JackpotAllData
         * @static
         * @param {GameMsg_LHD.IJackpotAllData} message JackpotAllData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JackpotAllData.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.AllData != null && message.AllData.length)
                for (var i = 0; i < message.AllData.length; ++i)
                    $root.GameMsg_LHD.JackpotData.encode(message.AllData[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified JackpotAllData message, length delimited. Does not implicitly {@link GameMsg_LHD.JackpotAllData.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_LHD.JackpotAllData
         * @static
         * @param {GameMsg_LHD.IJackpotAllData} message JackpotAllData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JackpotAllData.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a JackpotAllData message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_LHD.JackpotAllData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_LHD.JackpotAllData} JackpotAllData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JackpotAllData.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_LHD.JackpotAllData();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.AllData && message.AllData.length))
                        message.AllData = [];
                    message.AllData.push($root.GameMsg_LHD.JackpotData.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a JackpotAllData message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_LHD.JackpotAllData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_LHD.JackpotAllData} JackpotAllData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JackpotAllData.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a JackpotAllData message.
         * @function verify
         * @memberof GameMsg_LHD.JackpotAllData
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        JackpotAllData.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.AllData != null && message.hasOwnProperty("AllData")) {
                if (!Array.isArray(message.AllData))
                    return "AllData: array expected";
                for (var i = 0; i < message.AllData.length; ++i) {
                    var error = $root.GameMsg_LHD.JackpotData.verify(message.AllData[i]);
                    if (error)
                        return "AllData." + error;
                }
            }
            return null;
        };

        /**
         * Creates a JackpotAllData message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_LHD.JackpotAllData
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_LHD.JackpotAllData} JackpotAllData
         */
        JackpotAllData.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_LHD.JackpotAllData)
                return object;
            var message = new $root.GameMsg_LHD.JackpotAllData();
            if (object.AllData) {
                if (!Array.isArray(object.AllData))
                    throw TypeError(".GameMsg_LHD.JackpotAllData.AllData: array expected");
                message.AllData = [];
                for (var i = 0; i < object.AllData.length; ++i) {
                    if (typeof object.AllData[i] !== "object")
                        throw TypeError(".GameMsg_LHD.JackpotAllData.AllData: object expected");
                    message.AllData[i] = $root.GameMsg_LHD.JackpotData.fromObject(object.AllData[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a JackpotAllData message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_LHD.JackpotAllData
         * @static
         * @param {GameMsg_LHD.JackpotAllData} message JackpotAllData
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        JackpotAllData.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.AllData = [];
            if (message.AllData && message.AllData.length) {
                object.AllData = [];
                for (var j = 0; j < message.AllData.length; ++j)
                    object.AllData[j] = $root.GameMsg_LHD.JackpotData.toObject(message.AllData[j], options);
            }
            return object;
        };

        /**
         * Converts this JackpotAllData to JSON.
         * @function toJSON
         * @memberof GameMsg_LHD.JackpotAllData
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        JackpotAllData.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return JackpotAllData;
    })();

    return GameMsg_LHD;
})();

module.exports = $root;
