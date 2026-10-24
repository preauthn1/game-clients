/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

//var $protobuf = require("protobufjs/minimal");
var $protobuf = protobuf;

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.GameMsg_HHDZ = (function() {

    /**
     * Namespace GameMsg_HHDZ.
     * @exports GameMsg_HHDZ
     * @namespace
     */
    var GameMsg_HHDZ = {};

    GameMsg_HHDZ.HHDZ_Setting = (function() {

        /**
         * Properties of a HHDZ_Setting.
         * @memberof GameMsg_HHDZ
         * @interface IHHDZ_Setting
         * @property {Array.<number>|null} [BetCount] HHDZ_Setting BetCount
         * @property {number|null} [BetMoney] HHDZ_Setting BetMoney
         * @property {number|Long|null} [ZhuangLimit] HHDZ_Setting ZhuangLimit
         * @property {number|Long|null} [betlimitmoney] HHDZ_Setting betlimitmoney
         * @property {Array.<number|Long>|null} [BetMax] HHDZ_Setting BetMax
         */

        /**
         * Constructs a new HHDZ_Setting.
         * @memberof GameMsg_HHDZ
         * @classdesc Represents a HHDZ_Setting.
         * @implements IHHDZ_Setting
         * @constructor
         * @param {GameMsg_HHDZ.IHHDZ_Setting=} [properties] Properties to set
         */
        function HHDZ_Setting(properties) {
            this.BetCount = [];
            this.BetMax = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * HHDZ_Setting BetCount.
         * @member {Array.<number>} BetCount
         * @memberof GameMsg_HHDZ.HHDZ_Setting
         * @instance
         */
        HHDZ_Setting.prototype.BetCount = $util.emptyArray;

        /**
         * HHDZ_Setting BetMoney.
         * @member {number} BetMoney
         * @memberof GameMsg_HHDZ.HHDZ_Setting
         * @instance
         */
        HHDZ_Setting.prototype.BetMoney = 0;

        /**
         * HHDZ_Setting ZhuangLimit.
         * @member {number|Long} ZhuangLimit
         * @memberof GameMsg_HHDZ.HHDZ_Setting
         * @instance
         */
        HHDZ_Setting.prototype.ZhuangLimit = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * HHDZ_Setting betlimitmoney.
         * @member {number|Long} betlimitmoney
         * @memberof GameMsg_HHDZ.HHDZ_Setting
         * @instance
         */
        HHDZ_Setting.prototype.betlimitmoney = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * HHDZ_Setting BetMax.
         * @member {Array.<number|Long>} BetMax
         * @memberof GameMsg_HHDZ.HHDZ_Setting
         * @instance
         */
        HHDZ_Setting.prototype.BetMax = $util.emptyArray;

        /**
         * Creates a new HHDZ_Setting instance using the specified properties.
         * @function create
         * @memberof GameMsg_HHDZ.HHDZ_Setting
         * @static
         * @param {GameMsg_HHDZ.IHHDZ_Setting=} [properties] Properties to set
         * @returns {GameMsg_HHDZ.HHDZ_Setting} HHDZ_Setting instance
         */
        HHDZ_Setting.create = function create(properties) {
            return new HHDZ_Setting(properties);
        };

        /**
         * Encodes the specified HHDZ_Setting message. Does not implicitly {@link GameMsg_HHDZ.HHDZ_Setting.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_HHDZ.HHDZ_Setting
         * @static
         * @param {GameMsg_HHDZ.IHHDZ_Setting} message HHDZ_Setting message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HHDZ_Setting.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.BetCount != null && message.BetCount.length) {
                writer.uint32(/* id 1, wireType 2 =*/10).fork();
                for (var i = 0; i < message.BetCount.length; ++i)
                    writer.int32(message.BetCount[i]);
                writer.ldelim();
            }
            if (message.BetMoney != null && message.hasOwnProperty("BetMoney"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.BetMoney);
            if (message.ZhuangLimit != null && message.hasOwnProperty("ZhuangLimit"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.ZhuangLimit);
            if (message.betlimitmoney != null && message.hasOwnProperty("betlimitmoney"))
                writer.uint32(/* id 4, wireType 0 =*/32).int64(message.betlimitmoney);
            if (message.BetMax != null && message.BetMax.length) {
                writer.uint32(/* id 5, wireType 2 =*/42).fork();
                for (var i = 0; i < message.BetMax.length; ++i)
                    writer.int64(message.BetMax[i]);
                writer.ldelim();
            }
            return writer;
        };

        /**
         * Encodes the specified HHDZ_Setting message, length delimited. Does not implicitly {@link GameMsg_HHDZ.HHDZ_Setting.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_HHDZ.HHDZ_Setting
         * @static
         * @param {GameMsg_HHDZ.IHHDZ_Setting} message HHDZ_Setting message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HHDZ_Setting.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a HHDZ_Setting message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_HHDZ.HHDZ_Setting
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_HHDZ.HHDZ_Setting} HHDZ_Setting
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HHDZ_Setting.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_HHDZ.HHDZ_Setting();
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
                case 5:
                    if (!(message.BetMax && message.BetMax.length))
                        message.BetMax = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.BetMax.push(reader.int64());
                    } else
                        message.BetMax.push(reader.int64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a HHDZ_Setting message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_HHDZ.HHDZ_Setting
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_HHDZ.HHDZ_Setting} HHDZ_Setting
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HHDZ_Setting.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a HHDZ_Setting message.
         * @function verify
         * @memberof GameMsg_HHDZ.HHDZ_Setting
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        HHDZ_Setting.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.BetCount != null && message.hasOwnProperty("BetCount")) {
                if (!Array.isArray(message.BetCount))
                    return "BetCount: array expected";
                for (var i = 0; i < message.BetCount.length; ++i)
                    if (!$util.isInteger(message.BetCount[i]))
                        return "BetCount: integer[] expected";
            }
            if (message.BetMoney != null && message.hasOwnProperty("BetMoney"))
                if (!$util.isInteger(message.BetMoney))
                    return "BetMoney: integer expected";
            if (message.ZhuangLimit != null && message.hasOwnProperty("ZhuangLimit"))
                if (!$util.isInteger(message.ZhuangLimit) && !(message.ZhuangLimit && $util.isInteger(message.ZhuangLimit.low) && $util.isInteger(message.ZhuangLimit.high)))
                    return "ZhuangLimit: integer|Long expected";
            if (message.betlimitmoney != null && message.hasOwnProperty("betlimitmoney"))
                if (!$util.isInteger(message.betlimitmoney) && !(message.betlimitmoney && $util.isInteger(message.betlimitmoney.low) && $util.isInteger(message.betlimitmoney.high)))
                    return "betlimitmoney: integer|Long expected";
            if (message.BetMax != null && message.hasOwnProperty("BetMax")) {
                if (!Array.isArray(message.BetMax))
                    return "BetMax: array expected";
                for (var i = 0; i < message.BetMax.length; ++i)
                    if (!$util.isInteger(message.BetMax[i]) && !(message.BetMax[i] && $util.isInteger(message.BetMax[i].low) && $util.isInteger(message.BetMax[i].high)))
                        return "BetMax: integer|Long[] expected";
            }
            return null;
        };

        /**
         * Creates a HHDZ_Setting message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_HHDZ.HHDZ_Setting
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_HHDZ.HHDZ_Setting} HHDZ_Setting
         */
        HHDZ_Setting.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_HHDZ.HHDZ_Setting)
                return object;
            var message = new $root.GameMsg_HHDZ.HHDZ_Setting();
            if (object.BetCount) {
                if (!Array.isArray(object.BetCount))
                    throw TypeError(".GameMsg_HHDZ.HHDZ_Setting.BetCount: array expected");
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
            if (object.BetMax) {
                if (!Array.isArray(object.BetMax))
                    throw TypeError(".GameMsg_HHDZ.HHDZ_Setting.BetMax: array expected");
                message.BetMax = [];
                for (var i = 0; i < object.BetMax.length; ++i)
                    if ($util.Long)
                        (message.BetMax[i] = $util.Long.fromValue(object.BetMax[i])).unsigned = false;
                    else if (typeof object.BetMax[i] === "string")
                        message.BetMax[i] = parseInt(object.BetMax[i], 10);
                    else if (typeof object.BetMax[i] === "number")
                        message.BetMax[i] = object.BetMax[i];
                    else if (typeof object.BetMax[i] === "object")
                        message.BetMax[i] = new $util.LongBits(object.BetMax[i].low >>> 0, object.BetMax[i].high >>> 0).toNumber();
            }
            return message;
        };

        /**
         * Creates a plain object from a HHDZ_Setting message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_HHDZ.HHDZ_Setting
         * @static
         * @param {GameMsg_HHDZ.HHDZ_Setting} message HHDZ_Setting
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        HHDZ_Setting.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.BetCount = [];
                object.BetMax = [];
            }
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
            if (message.BetMax && message.BetMax.length) {
                object.BetMax = [];
                for (var j = 0; j < message.BetMax.length; ++j)
                    if (typeof message.BetMax[j] === "number")
                        object.BetMax[j] = options.longs === String ? String(message.BetMax[j]) : message.BetMax[j];
                    else
                        object.BetMax[j] = options.longs === String ? $util.Long.prototype.toString.call(message.BetMax[j]) : options.longs === Number ? new $util.LongBits(message.BetMax[j].low >>> 0, message.BetMax[j].high >>> 0).toNumber() : message.BetMax[j];
            }
            return object;
        };

        /**
         * Converts this HHDZ_Setting to JSON.
         * @function toJSON
         * @memberof GameMsg_HHDZ.HHDZ_Setting
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        HHDZ_Setting.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return HHDZ_Setting;
    })();

    GameMsg_HHDZ.HHDZ_Sate = (function() {

        /**
         * Properties of a HHDZ_Sate.
         * @memberof GameMsg_HHDZ
         * @interface IHHDZ_Sate
         * @property {number|null} [State] HHDZ_Sate State
         * @property {number|null} [Time] HHDZ_Sate Time
         */

        /**
         * Constructs a new HHDZ_Sate.
         * @memberof GameMsg_HHDZ
         * @classdesc Represents a HHDZ_Sate.
         * @implements IHHDZ_Sate
         * @constructor
         * @param {GameMsg_HHDZ.IHHDZ_Sate=} [properties] Properties to set
         */
        function HHDZ_Sate(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * HHDZ_Sate State.
         * @member {number} State
         * @memberof GameMsg_HHDZ.HHDZ_Sate
         * @instance
         */
        HHDZ_Sate.prototype.State = 0;

        /**
         * HHDZ_Sate Time.
         * @member {number} Time
         * @memberof GameMsg_HHDZ.HHDZ_Sate
         * @instance
         */
        HHDZ_Sate.prototype.Time = 0;

        /**
         * Creates a new HHDZ_Sate instance using the specified properties.
         * @function create
         * @memberof GameMsg_HHDZ.HHDZ_Sate
         * @static
         * @param {GameMsg_HHDZ.IHHDZ_Sate=} [properties] Properties to set
         * @returns {GameMsg_HHDZ.HHDZ_Sate} HHDZ_Sate instance
         */
        HHDZ_Sate.create = function create(properties) {
            return new HHDZ_Sate(properties);
        };

        /**
         * Encodes the specified HHDZ_Sate message. Does not implicitly {@link GameMsg_HHDZ.HHDZ_Sate.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_HHDZ.HHDZ_Sate
         * @static
         * @param {GameMsg_HHDZ.IHHDZ_Sate} message HHDZ_Sate message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HHDZ_Sate.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.State != null && message.hasOwnProperty("State"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.State);
            if (message.Time != null && message.hasOwnProperty("Time"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.Time);
            return writer;
        };

        /**
         * Encodes the specified HHDZ_Sate message, length delimited. Does not implicitly {@link GameMsg_HHDZ.HHDZ_Sate.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_HHDZ.HHDZ_Sate
         * @static
         * @param {GameMsg_HHDZ.IHHDZ_Sate} message HHDZ_Sate message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HHDZ_Sate.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a HHDZ_Sate message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_HHDZ.HHDZ_Sate
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_HHDZ.HHDZ_Sate} HHDZ_Sate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HHDZ_Sate.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_HHDZ.HHDZ_Sate();
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
            return message;
        };

        /**
         * Decodes a HHDZ_Sate message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_HHDZ.HHDZ_Sate
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_HHDZ.HHDZ_Sate} HHDZ_Sate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HHDZ_Sate.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a HHDZ_Sate message.
         * @function verify
         * @memberof GameMsg_HHDZ.HHDZ_Sate
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        HHDZ_Sate.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.State != null && message.hasOwnProperty("State"))
                if (!$util.isInteger(message.State))
                    return "State: integer expected";
            if (message.Time != null && message.hasOwnProperty("Time"))
                if (!$util.isInteger(message.Time))
                    return "Time: integer expected";
            return null;
        };

        /**
         * Creates a HHDZ_Sate message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_HHDZ.HHDZ_Sate
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_HHDZ.HHDZ_Sate} HHDZ_Sate
         */
        HHDZ_Sate.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_HHDZ.HHDZ_Sate)
                return object;
            var message = new $root.GameMsg_HHDZ.HHDZ_Sate();
            if (object.State != null)
                message.State = object.State | 0;
            if (object.Time != null)
                message.Time = object.Time | 0;
            return message;
        };

        /**
         * Creates a plain object from a HHDZ_Sate message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_HHDZ.HHDZ_Sate
         * @static
         * @param {GameMsg_HHDZ.HHDZ_Sate} message HHDZ_Sate
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        HHDZ_Sate.toObject = function toObject(message, options) {
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
         * Converts this HHDZ_Sate to JSON.
         * @function toJSON
         * @memberof GameMsg_HHDZ.HHDZ_Sate
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        HHDZ_Sate.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return HHDZ_Sate;
    })();

    GameMsg_HHDZ.HHDZ_UserBetInfo = (function() {

        /**
         * Properties of a HHDZ_UserBetInfo.
         * @memberof GameMsg_HHDZ
         * @interface IHHDZ_UserBetInfo
         * @property {number|Long|null} [UserMoney] HHDZ_UserBetInfo UserMoney
         * @property {Array.<GameMsg_HHDZ.IHHDZ_BroadCastBet>|null} [BetInfo] HHDZ_UserBetInfo BetInfo
         */

        /**
         * Constructs a new HHDZ_UserBetInfo.
         * @memberof GameMsg_HHDZ
         * @classdesc Represents a HHDZ_UserBetInfo.
         * @implements IHHDZ_UserBetInfo
         * @constructor
         * @param {GameMsg_HHDZ.IHHDZ_UserBetInfo=} [properties] Properties to set
         */
        function HHDZ_UserBetInfo(properties) {
            this.BetInfo = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * HHDZ_UserBetInfo UserMoney.
         * @member {number|Long} UserMoney
         * @memberof GameMsg_HHDZ.HHDZ_UserBetInfo
         * @instance
         */
        HHDZ_UserBetInfo.prototype.UserMoney = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * HHDZ_UserBetInfo BetInfo.
         * @member {Array.<GameMsg_HHDZ.IHHDZ_BroadCastBet>} BetInfo
         * @memberof GameMsg_HHDZ.HHDZ_UserBetInfo
         * @instance
         */
        HHDZ_UserBetInfo.prototype.BetInfo = $util.emptyArray;

        /**
         * Creates a new HHDZ_UserBetInfo instance using the specified properties.
         * @function create
         * @memberof GameMsg_HHDZ.HHDZ_UserBetInfo
         * @static
         * @param {GameMsg_HHDZ.IHHDZ_UserBetInfo=} [properties] Properties to set
         * @returns {GameMsg_HHDZ.HHDZ_UserBetInfo} HHDZ_UserBetInfo instance
         */
        HHDZ_UserBetInfo.create = function create(properties) {
            return new HHDZ_UserBetInfo(properties);
        };

        /**
         * Encodes the specified HHDZ_UserBetInfo message. Does not implicitly {@link GameMsg_HHDZ.HHDZ_UserBetInfo.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_HHDZ.HHDZ_UserBetInfo
         * @static
         * @param {GameMsg_HHDZ.IHHDZ_UserBetInfo} message HHDZ_UserBetInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HHDZ_UserBetInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.UserMoney != null && message.hasOwnProperty("UserMoney"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.UserMoney);
            if (message.BetInfo != null && message.BetInfo.length)
                for (var i = 0; i < message.BetInfo.length; ++i)
                    $root.GameMsg_HHDZ.HHDZ_BroadCastBet.encode(message.BetInfo[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified HHDZ_UserBetInfo message, length delimited. Does not implicitly {@link GameMsg_HHDZ.HHDZ_UserBetInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_HHDZ.HHDZ_UserBetInfo
         * @static
         * @param {GameMsg_HHDZ.IHHDZ_UserBetInfo} message HHDZ_UserBetInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HHDZ_UserBetInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a HHDZ_UserBetInfo message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_HHDZ.HHDZ_UserBetInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_HHDZ.HHDZ_UserBetInfo} HHDZ_UserBetInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HHDZ_UserBetInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_HHDZ.HHDZ_UserBetInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.UserMoney = reader.int64();
                    break;
                case 2:
                    if (!(message.BetInfo && message.BetInfo.length))
                        message.BetInfo = [];
                    message.BetInfo.push($root.GameMsg_HHDZ.HHDZ_BroadCastBet.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a HHDZ_UserBetInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_HHDZ.HHDZ_UserBetInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_HHDZ.HHDZ_UserBetInfo} HHDZ_UserBetInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HHDZ_UserBetInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a HHDZ_UserBetInfo message.
         * @function verify
         * @memberof GameMsg_HHDZ.HHDZ_UserBetInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        HHDZ_UserBetInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.UserMoney != null && message.hasOwnProperty("UserMoney"))
                if (!$util.isInteger(message.UserMoney) && !(message.UserMoney && $util.isInteger(message.UserMoney.low) && $util.isInteger(message.UserMoney.high)))
                    return "UserMoney: integer|Long expected";
            if (message.BetInfo != null && message.hasOwnProperty("BetInfo")) {
                if (!Array.isArray(message.BetInfo))
                    return "BetInfo: array expected";
                for (var i = 0; i < message.BetInfo.length; ++i) {
                    var error = $root.GameMsg_HHDZ.HHDZ_BroadCastBet.verify(message.BetInfo[i]);
                    if (error)
                        return "BetInfo." + error;
                }
            }
            return null;
        };

        /**
         * Creates a HHDZ_UserBetInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_HHDZ.HHDZ_UserBetInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_HHDZ.HHDZ_UserBetInfo} HHDZ_UserBetInfo
         */
        HHDZ_UserBetInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_HHDZ.HHDZ_UserBetInfo)
                return object;
            var message = new $root.GameMsg_HHDZ.HHDZ_UserBetInfo();
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
                    throw TypeError(".GameMsg_HHDZ.HHDZ_UserBetInfo.BetInfo: array expected");
                message.BetInfo = [];
                for (var i = 0; i < object.BetInfo.length; ++i) {
                    if (typeof object.BetInfo[i] !== "object")
                        throw TypeError(".GameMsg_HHDZ.HHDZ_UserBetInfo.BetInfo: object expected");
                    message.BetInfo[i] = $root.GameMsg_HHDZ.HHDZ_BroadCastBet.fromObject(object.BetInfo[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a HHDZ_UserBetInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_HHDZ.HHDZ_UserBetInfo
         * @static
         * @param {GameMsg_HHDZ.HHDZ_UserBetInfo} message HHDZ_UserBetInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        HHDZ_UserBetInfo.toObject = function toObject(message, options) {
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
                    object.BetInfo[j] = $root.GameMsg_HHDZ.HHDZ_BroadCastBet.toObject(message.BetInfo[j], options);
            }
            return object;
        };

        /**
         * Converts this HHDZ_UserBetInfo to JSON.
         * @function toJSON
         * @memberof GameMsg_HHDZ.HHDZ_UserBetInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        HHDZ_UserBetInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return HHDZ_UserBetInfo;
    })();

    GameMsg_HHDZ.HHDZ_BroadCastBetArr = (function() {

        /**
         * Properties of a HHDZ_BroadCastBetArr.
         * @memberof GameMsg_HHDZ
         * @interface IHHDZ_BroadCastBetArr
         * @property {number|null} [UserID] HHDZ_BroadCastBetArr UserID
         * @property {Array.<GameMsg_HHDZ.IHHDZ_BroadCastBet>|null} [BroadCastBetArr] HHDZ_BroadCastBetArr BroadCastBetArr
         */

        /**
         * Constructs a new HHDZ_BroadCastBetArr.
         * @memberof GameMsg_HHDZ
         * @classdesc Represents a HHDZ_BroadCastBetArr.
         * @implements IHHDZ_BroadCastBetArr
         * @constructor
         * @param {GameMsg_HHDZ.IHHDZ_BroadCastBetArr=} [properties] Properties to set
         */
        function HHDZ_BroadCastBetArr(properties) {
            this.BroadCastBetArr = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * HHDZ_BroadCastBetArr UserID.
         * @member {number} UserID
         * @memberof GameMsg_HHDZ.HHDZ_BroadCastBetArr
         * @instance
         */
        HHDZ_BroadCastBetArr.prototype.UserID = 0;

        /**
         * HHDZ_BroadCastBetArr BroadCastBetArr.
         * @member {Array.<GameMsg_HHDZ.IHHDZ_BroadCastBet>} BroadCastBetArr
         * @memberof GameMsg_HHDZ.HHDZ_BroadCastBetArr
         * @instance
         */
        HHDZ_BroadCastBetArr.prototype.BroadCastBetArr = $util.emptyArray;

        /**
         * Creates a new HHDZ_BroadCastBetArr instance using the specified properties.
         * @function create
         * @memberof GameMsg_HHDZ.HHDZ_BroadCastBetArr
         * @static
         * @param {GameMsg_HHDZ.IHHDZ_BroadCastBetArr=} [properties] Properties to set
         * @returns {GameMsg_HHDZ.HHDZ_BroadCastBetArr} HHDZ_BroadCastBetArr instance
         */
        HHDZ_BroadCastBetArr.create = function create(properties) {
            return new HHDZ_BroadCastBetArr(properties);
        };

        /**
         * Encodes the specified HHDZ_BroadCastBetArr message. Does not implicitly {@link GameMsg_HHDZ.HHDZ_BroadCastBetArr.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_HHDZ.HHDZ_BroadCastBetArr
         * @static
         * @param {GameMsg_HHDZ.IHHDZ_BroadCastBetArr} message HHDZ_BroadCastBetArr message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HHDZ_BroadCastBetArr.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.UserID);
            if (message.BroadCastBetArr != null && message.BroadCastBetArr.length)
                for (var i = 0; i < message.BroadCastBetArr.length; ++i)
                    $root.GameMsg_HHDZ.HHDZ_BroadCastBet.encode(message.BroadCastBetArr[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified HHDZ_BroadCastBetArr message, length delimited. Does not implicitly {@link GameMsg_HHDZ.HHDZ_BroadCastBetArr.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_HHDZ.HHDZ_BroadCastBetArr
         * @static
         * @param {GameMsg_HHDZ.IHHDZ_BroadCastBetArr} message HHDZ_BroadCastBetArr message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HHDZ_BroadCastBetArr.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a HHDZ_BroadCastBetArr message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_HHDZ.HHDZ_BroadCastBetArr
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_HHDZ.HHDZ_BroadCastBetArr} HHDZ_BroadCastBetArr
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HHDZ_BroadCastBetArr.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_HHDZ.HHDZ_BroadCastBetArr();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.UserID = reader.int32();
                    break;
                case 2:
                    if (!(message.BroadCastBetArr && message.BroadCastBetArr.length))
                        message.BroadCastBetArr = [];
                    message.BroadCastBetArr.push($root.GameMsg_HHDZ.HHDZ_BroadCastBet.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a HHDZ_BroadCastBetArr message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_HHDZ.HHDZ_BroadCastBetArr
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_HHDZ.HHDZ_BroadCastBetArr} HHDZ_BroadCastBetArr
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HHDZ_BroadCastBetArr.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a HHDZ_BroadCastBetArr message.
         * @function verify
         * @memberof GameMsg_HHDZ.HHDZ_BroadCastBetArr
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        HHDZ_BroadCastBetArr.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                if (!$util.isInteger(message.UserID))
                    return "UserID: integer expected";
            if (message.BroadCastBetArr != null && message.hasOwnProperty("BroadCastBetArr")) {
                if (!Array.isArray(message.BroadCastBetArr))
                    return "BroadCastBetArr: array expected";
                for (var i = 0; i < message.BroadCastBetArr.length; ++i) {
                    var error = $root.GameMsg_HHDZ.HHDZ_BroadCastBet.verify(message.BroadCastBetArr[i]);
                    if (error)
                        return "BroadCastBetArr." + error;
                }
            }
            return null;
        };

        /**
         * Creates a HHDZ_BroadCastBetArr message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_HHDZ.HHDZ_BroadCastBetArr
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_HHDZ.HHDZ_BroadCastBetArr} HHDZ_BroadCastBetArr
         */
        HHDZ_BroadCastBetArr.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_HHDZ.HHDZ_BroadCastBetArr)
                return object;
            var message = new $root.GameMsg_HHDZ.HHDZ_BroadCastBetArr();
            if (object.UserID != null)
                message.UserID = object.UserID | 0;
            if (object.BroadCastBetArr) {
                if (!Array.isArray(object.BroadCastBetArr))
                    throw TypeError(".GameMsg_HHDZ.HHDZ_BroadCastBetArr.BroadCastBetArr: array expected");
                message.BroadCastBetArr = [];
                for (var i = 0; i < object.BroadCastBetArr.length; ++i) {
                    if (typeof object.BroadCastBetArr[i] !== "object")
                        throw TypeError(".GameMsg_HHDZ.HHDZ_BroadCastBetArr.BroadCastBetArr: object expected");
                    message.BroadCastBetArr[i] = $root.GameMsg_HHDZ.HHDZ_BroadCastBet.fromObject(object.BroadCastBetArr[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a HHDZ_BroadCastBetArr message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_HHDZ.HHDZ_BroadCastBetArr
         * @static
         * @param {GameMsg_HHDZ.HHDZ_BroadCastBetArr} message HHDZ_BroadCastBetArr
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        HHDZ_BroadCastBetArr.toObject = function toObject(message, options) {
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
                    object.BroadCastBetArr[j] = $root.GameMsg_HHDZ.HHDZ_BroadCastBet.toObject(message.BroadCastBetArr[j], options);
            }
            return object;
        };

        /**
         * Converts this HHDZ_BroadCastBetArr to JSON.
         * @function toJSON
         * @memberof GameMsg_HHDZ.HHDZ_BroadCastBetArr
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        HHDZ_BroadCastBetArr.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return HHDZ_BroadCastBetArr;
    })();

    GameMsg_HHDZ.HHDZ_BroadCastBet = (function() {

        /**
         * Properties of a HHDZ_BroadCastBet.
         * @memberof GameMsg_HHDZ
         * @interface IHHDZ_BroadCastBet
         * @property {number|null} [Type] HHDZ_BroadCastBet Type
         * @property {number|Long|null} [Money] HHDZ_BroadCastBet Money
         * @property {boolean|null} [LuckyStar] HHDZ_BroadCastBet LuckyStar
         */

        /**
         * Constructs a new HHDZ_BroadCastBet.
         * @memberof GameMsg_HHDZ
         * @classdesc Represents a HHDZ_BroadCastBet.
         * @implements IHHDZ_BroadCastBet
         * @constructor
         * @param {GameMsg_HHDZ.IHHDZ_BroadCastBet=} [properties] Properties to set
         */
        function HHDZ_BroadCastBet(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * HHDZ_BroadCastBet Type.
         * @member {number} Type
         * @memberof GameMsg_HHDZ.HHDZ_BroadCastBet
         * @instance
         */
        HHDZ_BroadCastBet.prototype.Type = 0;

        /**
         * HHDZ_BroadCastBet Money.
         * @member {number|Long} Money
         * @memberof GameMsg_HHDZ.HHDZ_BroadCastBet
         * @instance
         */
        HHDZ_BroadCastBet.prototype.Money = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * HHDZ_BroadCastBet LuckyStar.
         * @member {boolean} LuckyStar
         * @memberof GameMsg_HHDZ.HHDZ_BroadCastBet
         * @instance
         */
        HHDZ_BroadCastBet.prototype.LuckyStar = false;

        /**
         * Creates a new HHDZ_BroadCastBet instance using the specified properties.
         * @function create
         * @memberof GameMsg_HHDZ.HHDZ_BroadCastBet
         * @static
         * @param {GameMsg_HHDZ.IHHDZ_BroadCastBet=} [properties] Properties to set
         * @returns {GameMsg_HHDZ.HHDZ_BroadCastBet} HHDZ_BroadCastBet instance
         */
        HHDZ_BroadCastBet.create = function create(properties) {
            return new HHDZ_BroadCastBet(properties);
        };

        /**
         * Encodes the specified HHDZ_BroadCastBet message. Does not implicitly {@link GameMsg_HHDZ.HHDZ_BroadCastBet.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_HHDZ.HHDZ_BroadCastBet
         * @static
         * @param {GameMsg_HHDZ.IHHDZ_BroadCastBet} message HHDZ_BroadCastBet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HHDZ_BroadCastBet.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Type != null && message.hasOwnProperty("Type"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.Type);
            if (message.Money != null && message.hasOwnProperty("Money"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.Money);
            if (message.LuckyStar != null && message.hasOwnProperty("LuckyStar"))
                writer.uint32(/* id 3, wireType 0 =*/24).bool(message.LuckyStar);
            return writer;
        };

        /**
         * Encodes the specified HHDZ_BroadCastBet message, length delimited. Does not implicitly {@link GameMsg_HHDZ.HHDZ_BroadCastBet.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_HHDZ.HHDZ_BroadCastBet
         * @static
         * @param {GameMsg_HHDZ.IHHDZ_BroadCastBet} message HHDZ_BroadCastBet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HHDZ_BroadCastBet.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a HHDZ_BroadCastBet message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_HHDZ.HHDZ_BroadCastBet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_HHDZ.HHDZ_BroadCastBet} HHDZ_BroadCastBet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HHDZ_BroadCastBet.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_HHDZ.HHDZ_BroadCastBet();
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
            return message;
        };

        /**
         * Decodes a HHDZ_BroadCastBet message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_HHDZ.HHDZ_BroadCastBet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_HHDZ.HHDZ_BroadCastBet} HHDZ_BroadCastBet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HHDZ_BroadCastBet.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a HHDZ_BroadCastBet message.
         * @function verify
         * @memberof GameMsg_HHDZ.HHDZ_BroadCastBet
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        HHDZ_BroadCastBet.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Type != null && message.hasOwnProperty("Type"))
                if (!$util.isInteger(message.Type))
                    return "Type: integer expected";
            if (message.Money != null && message.hasOwnProperty("Money"))
                if (!$util.isInteger(message.Money) && !(message.Money && $util.isInteger(message.Money.low) && $util.isInteger(message.Money.high)))
                    return "Money: integer|Long expected";
            if (message.LuckyStar != null && message.hasOwnProperty("LuckyStar"))
                if (typeof message.LuckyStar !== "boolean")
                    return "LuckyStar: boolean expected";
            return null;
        };

        /**
         * Creates a HHDZ_BroadCastBet message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_HHDZ.HHDZ_BroadCastBet
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_HHDZ.HHDZ_BroadCastBet} HHDZ_BroadCastBet
         */
        HHDZ_BroadCastBet.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_HHDZ.HHDZ_BroadCastBet)
                return object;
            var message = new $root.GameMsg_HHDZ.HHDZ_BroadCastBet();
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
         * Creates a plain object from a HHDZ_BroadCastBet message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_HHDZ.HHDZ_BroadCastBet
         * @static
         * @param {GameMsg_HHDZ.HHDZ_BroadCastBet} message HHDZ_BroadCastBet
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        HHDZ_BroadCastBet.toObject = function toObject(message, options) {
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
         * Converts this HHDZ_BroadCastBet to JSON.
         * @function toJSON
         * @memberof GameMsg_HHDZ.HHDZ_BroadCastBet
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        HHDZ_BroadCastBet.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return HHDZ_BroadCastBet;
    })();

    GameMsg_HHDZ.HHDZ_BetArr = (function() {

        /**
         * Properties of a HHDZ_BetArr.
         * @memberof GameMsg_HHDZ
         * @interface IHHDZ_BetArr
         * @property {Array.<GameMsg_HHDZ.IHHDZ_Bet>|null} [BetArr] HHDZ_BetArr BetArr
         */

        /**
         * Constructs a new HHDZ_BetArr.
         * @memberof GameMsg_HHDZ
         * @classdesc Represents a HHDZ_BetArr.
         * @implements IHHDZ_BetArr
         * @constructor
         * @param {GameMsg_HHDZ.IHHDZ_BetArr=} [properties] Properties to set
         */
        function HHDZ_BetArr(properties) {
            this.BetArr = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * HHDZ_BetArr BetArr.
         * @member {Array.<GameMsg_HHDZ.IHHDZ_Bet>} BetArr
         * @memberof GameMsg_HHDZ.HHDZ_BetArr
         * @instance
         */
        HHDZ_BetArr.prototype.BetArr = $util.emptyArray;

        /**
         * Creates a new HHDZ_BetArr instance using the specified properties.
         * @function create
         * @memberof GameMsg_HHDZ.HHDZ_BetArr
         * @static
         * @param {GameMsg_HHDZ.IHHDZ_BetArr=} [properties] Properties to set
         * @returns {GameMsg_HHDZ.HHDZ_BetArr} HHDZ_BetArr instance
         */
        HHDZ_BetArr.create = function create(properties) {
            return new HHDZ_BetArr(properties);
        };

        /**
         * Encodes the specified HHDZ_BetArr message. Does not implicitly {@link GameMsg_HHDZ.HHDZ_BetArr.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_HHDZ.HHDZ_BetArr
         * @static
         * @param {GameMsg_HHDZ.IHHDZ_BetArr} message HHDZ_BetArr message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HHDZ_BetArr.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.BetArr != null && message.BetArr.length)
                for (var i = 0; i < message.BetArr.length; ++i)
                    $root.GameMsg_HHDZ.HHDZ_Bet.encode(message.BetArr[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified HHDZ_BetArr message, length delimited. Does not implicitly {@link GameMsg_HHDZ.HHDZ_BetArr.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_HHDZ.HHDZ_BetArr
         * @static
         * @param {GameMsg_HHDZ.IHHDZ_BetArr} message HHDZ_BetArr message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HHDZ_BetArr.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a HHDZ_BetArr message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_HHDZ.HHDZ_BetArr
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_HHDZ.HHDZ_BetArr} HHDZ_BetArr
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HHDZ_BetArr.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_HHDZ.HHDZ_BetArr();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.BetArr && message.BetArr.length))
                        message.BetArr = [];
                    message.BetArr.push($root.GameMsg_HHDZ.HHDZ_Bet.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a HHDZ_BetArr message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_HHDZ.HHDZ_BetArr
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_HHDZ.HHDZ_BetArr} HHDZ_BetArr
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HHDZ_BetArr.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a HHDZ_BetArr message.
         * @function verify
         * @memberof GameMsg_HHDZ.HHDZ_BetArr
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        HHDZ_BetArr.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.BetArr != null && message.hasOwnProperty("BetArr")) {
                if (!Array.isArray(message.BetArr))
                    return "BetArr: array expected";
                for (var i = 0; i < message.BetArr.length; ++i) {
                    var error = $root.GameMsg_HHDZ.HHDZ_Bet.verify(message.BetArr[i]);
                    if (error)
                        return "BetArr." + error;
                }
            }
            return null;
        };

        /**
         * Creates a HHDZ_BetArr message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_HHDZ.HHDZ_BetArr
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_HHDZ.HHDZ_BetArr} HHDZ_BetArr
         */
        HHDZ_BetArr.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_HHDZ.HHDZ_BetArr)
                return object;
            var message = new $root.GameMsg_HHDZ.HHDZ_BetArr();
            if (object.BetArr) {
                if (!Array.isArray(object.BetArr))
                    throw TypeError(".GameMsg_HHDZ.HHDZ_BetArr.BetArr: array expected");
                message.BetArr = [];
                for (var i = 0; i < object.BetArr.length; ++i) {
                    if (typeof object.BetArr[i] !== "object")
                        throw TypeError(".GameMsg_HHDZ.HHDZ_BetArr.BetArr: object expected");
                    message.BetArr[i] = $root.GameMsg_HHDZ.HHDZ_Bet.fromObject(object.BetArr[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a HHDZ_BetArr message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_HHDZ.HHDZ_BetArr
         * @static
         * @param {GameMsg_HHDZ.HHDZ_BetArr} message HHDZ_BetArr
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        HHDZ_BetArr.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.BetArr = [];
            if (message.BetArr && message.BetArr.length) {
                object.BetArr = [];
                for (var j = 0; j < message.BetArr.length; ++j)
                    object.BetArr[j] = $root.GameMsg_HHDZ.HHDZ_Bet.toObject(message.BetArr[j], options);
            }
            return object;
        };

        /**
         * Converts this HHDZ_BetArr to JSON.
         * @function toJSON
         * @memberof GameMsg_HHDZ.HHDZ_BetArr
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        HHDZ_BetArr.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return HHDZ_BetArr;
    })();

    GameMsg_HHDZ.HHDZ_Bet = (function() {

        /**
         * Properties of a HHDZ_Bet.
         * @memberof GameMsg_HHDZ
         * @interface IHHDZ_Bet
         * @property {number|null} [BetType] HHDZ_Bet BetType
         * @property {number|null} [Count] HHDZ_Bet Count
         */

        /**
         * Constructs a new HHDZ_Bet.
         * @memberof GameMsg_HHDZ
         * @classdesc Represents a HHDZ_Bet.
         * @implements IHHDZ_Bet
         * @constructor
         * @param {GameMsg_HHDZ.IHHDZ_Bet=} [properties] Properties to set
         */
        function HHDZ_Bet(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * HHDZ_Bet BetType.
         * @member {number} BetType
         * @memberof GameMsg_HHDZ.HHDZ_Bet
         * @instance
         */
        HHDZ_Bet.prototype.BetType = 0;

        /**
         * HHDZ_Bet Count.
         * @member {number} Count
         * @memberof GameMsg_HHDZ.HHDZ_Bet
         * @instance
         */
        HHDZ_Bet.prototype.Count = 0;

        /**
         * Creates a new HHDZ_Bet instance using the specified properties.
         * @function create
         * @memberof GameMsg_HHDZ.HHDZ_Bet
         * @static
         * @param {GameMsg_HHDZ.IHHDZ_Bet=} [properties] Properties to set
         * @returns {GameMsg_HHDZ.HHDZ_Bet} HHDZ_Bet instance
         */
        HHDZ_Bet.create = function create(properties) {
            return new HHDZ_Bet(properties);
        };

        /**
         * Encodes the specified HHDZ_Bet message. Does not implicitly {@link GameMsg_HHDZ.HHDZ_Bet.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_HHDZ.HHDZ_Bet
         * @static
         * @param {GameMsg_HHDZ.IHHDZ_Bet} message HHDZ_Bet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HHDZ_Bet.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.BetType != null && message.hasOwnProperty("BetType"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.BetType);
            if (message.Count != null && message.hasOwnProperty("Count"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.Count);
            return writer;
        };

        /**
         * Encodes the specified HHDZ_Bet message, length delimited. Does not implicitly {@link GameMsg_HHDZ.HHDZ_Bet.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_HHDZ.HHDZ_Bet
         * @static
         * @param {GameMsg_HHDZ.IHHDZ_Bet} message HHDZ_Bet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HHDZ_Bet.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a HHDZ_Bet message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_HHDZ.HHDZ_Bet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_HHDZ.HHDZ_Bet} HHDZ_Bet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HHDZ_Bet.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_HHDZ.HHDZ_Bet();
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
            return message;
        };

        /**
         * Decodes a HHDZ_Bet message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_HHDZ.HHDZ_Bet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_HHDZ.HHDZ_Bet} HHDZ_Bet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HHDZ_Bet.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a HHDZ_Bet message.
         * @function verify
         * @memberof GameMsg_HHDZ.HHDZ_Bet
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        HHDZ_Bet.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.BetType != null && message.hasOwnProperty("BetType"))
                if (!$util.isInteger(message.BetType))
                    return "BetType: integer expected";
            if (message.Count != null && message.hasOwnProperty("Count"))
                if (!$util.isInteger(message.Count))
                    return "Count: integer expected";
            return null;
        };

        /**
         * Creates a HHDZ_Bet message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_HHDZ.HHDZ_Bet
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_HHDZ.HHDZ_Bet} HHDZ_Bet
         */
        HHDZ_Bet.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_HHDZ.HHDZ_Bet)
                return object;
            var message = new $root.GameMsg_HHDZ.HHDZ_Bet();
            if (object.BetType != null)
                message.BetType = object.BetType | 0;
            if (object.Count != null)
                message.Count = object.Count | 0;
            return message;
        };

        /**
         * Creates a plain object from a HHDZ_Bet message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_HHDZ.HHDZ_Bet
         * @static
         * @param {GameMsg_HHDZ.HHDZ_Bet} message HHDZ_Bet
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        HHDZ_Bet.toObject = function toObject(message, options) {
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
         * Converts this HHDZ_Bet to JSON.
         * @function toJSON
         * @memberof GameMsg_HHDZ.HHDZ_Bet
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        HHDZ_Bet.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return HHDZ_Bet;
    })();

    GameMsg_HHDZ.HHDZ_BetRet = (function() {

        /**
         * Properties of a HHDZ_BetRet.
         * @memberof GameMsg_HHDZ
         * @interface IHHDZ_BetRet
         * @property {number|null} [Ret] HHDZ_BetRet Ret
         * @property {number|Long|null} [Money] HHDZ_BetRet Money
         * @property {number|null} [Type] HHDZ_BetRet Type
         * @property {Array.<GameMsg_HHDZ.IHHDZ_Bet>|null} [BetArr] HHDZ_BetRet BetArr
         */

        /**
         * Constructs a new HHDZ_BetRet.
         * @memberof GameMsg_HHDZ
         * @classdesc Represents a HHDZ_BetRet.
         * @implements IHHDZ_BetRet
         * @constructor
         * @param {GameMsg_HHDZ.IHHDZ_BetRet=} [properties] Properties to set
         */
        function HHDZ_BetRet(properties) {
            this.BetArr = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * HHDZ_BetRet Ret.
         * @member {number} Ret
         * @memberof GameMsg_HHDZ.HHDZ_BetRet
         * @instance
         */
        HHDZ_BetRet.prototype.Ret = 0;

        /**
         * HHDZ_BetRet Money.
         * @member {number|Long} Money
         * @memberof GameMsg_HHDZ.HHDZ_BetRet
         * @instance
         */
        HHDZ_BetRet.prototype.Money = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * HHDZ_BetRet Type.
         * @member {number} Type
         * @memberof GameMsg_HHDZ.HHDZ_BetRet
         * @instance
         */
        HHDZ_BetRet.prototype.Type = 0;

        /**
         * HHDZ_BetRet BetArr.
         * @member {Array.<GameMsg_HHDZ.IHHDZ_Bet>} BetArr
         * @memberof GameMsg_HHDZ.HHDZ_BetRet
         * @instance
         */
        HHDZ_BetRet.prototype.BetArr = $util.emptyArray;

        /**
         * Creates a new HHDZ_BetRet instance using the specified properties.
         * @function create
         * @memberof GameMsg_HHDZ.HHDZ_BetRet
         * @static
         * @param {GameMsg_HHDZ.IHHDZ_BetRet=} [properties] Properties to set
         * @returns {GameMsg_HHDZ.HHDZ_BetRet} HHDZ_BetRet instance
         */
        HHDZ_BetRet.create = function create(properties) {
            return new HHDZ_BetRet(properties);
        };

        /**
         * Encodes the specified HHDZ_BetRet message. Does not implicitly {@link GameMsg_HHDZ.HHDZ_BetRet.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_HHDZ.HHDZ_BetRet
         * @static
         * @param {GameMsg_HHDZ.IHHDZ_BetRet} message HHDZ_BetRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HHDZ_BetRet.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Ret != null && message.hasOwnProperty("Ret"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.Ret);
            if (message.Money != null && message.hasOwnProperty("Money"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.Money);
            if (message.Type != null && message.hasOwnProperty("Type"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.Type);
            if (message.BetArr != null && message.BetArr.length)
                for (var i = 0; i < message.BetArr.length; ++i)
                    $root.GameMsg_HHDZ.HHDZ_Bet.encode(message.BetArr[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified HHDZ_BetRet message, length delimited. Does not implicitly {@link GameMsg_HHDZ.HHDZ_BetRet.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_HHDZ.HHDZ_BetRet
         * @static
         * @param {GameMsg_HHDZ.IHHDZ_BetRet} message HHDZ_BetRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HHDZ_BetRet.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a HHDZ_BetRet message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_HHDZ.HHDZ_BetRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_HHDZ.HHDZ_BetRet} HHDZ_BetRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HHDZ_BetRet.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_HHDZ.HHDZ_BetRet();
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
                    message.BetArr.push($root.GameMsg_HHDZ.HHDZ_Bet.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a HHDZ_BetRet message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_HHDZ.HHDZ_BetRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_HHDZ.HHDZ_BetRet} HHDZ_BetRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HHDZ_BetRet.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a HHDZ_BetRet message.
         * @function verify
         * @memberof GameMsg_HHDZ.HHDZ_BetRet
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        HHDZ_BetRet.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Ret != null && message.hasOwnProperty("Ret"))
                if (!$util.isInteger(message.Ret))
                    return "Ret: integer expected";
            if (message.Money != null && message.hasOwnProperty("Money"))
                if (!$util.isInteger(message.Money) && !(message.Money && $util.isInteger(message.Money.low) && $util.isInteger(message.Money.high)))
                    return "Money: integer|Long expected";
            if (message.Type != null && message.hasOwnProperty("Type"))
                if (!$util.isInteger(message.Type))
                    return "Type: integer expected";
            if (message.BetArr != null && message.hasOwnProperty("BetArr")) {
                if (!Array.isArray(message.BetArr))
                    return "BetArr: array expected";
                for (var i = 0; i < message.BetArr.length; ++i) {
                    var error = $root.GameMsg_HHDZ.HHDZ_Bet.verify(message.BetArr[i]);
                    if (error)
                        return "BetArr." + error;
                }
            }
            return null;
        };

        /**
         * Creates a HHDZ_BetRet message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_HHDZ.HHDZ_BetRet
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_HHDZ.HHDZ_BetRet} HHDZ_BetRet
         */
        HHDZ_BetRet.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_HHDZ.HHDZ_BetRet)
                return object;
            var message = new $root.GameMsg_HHDZ.HHDZ_BetRet();
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
                    throw TypeError(".GameMsg_HHDZ.HHDZ_BetRet.BetArr: array expected");
                message.BetArr = [];
                for (var i = 0; i < object.BetArr.length; ++i) {
                    if (typeof object.BetArr[i] !== "object")
                        throw TypeError(".GameMsg_HHDZ.HHDZ_BetRet.BetArr: object expected");
                    message.BetArr[i] = $root.GameMsg_HHDZ.HHDZ_Bet.fromObject(object.BetArr[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a HHDZ_BetRet message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_HHDZ.HHDZ_BetRet
         * @static
         * @param {GameMsg_HHDZ.HHDZ_BetRet} message HHDZ_BetRet
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        HHDZ_BetRet.toObject = function toObject(message, options) {
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
                    object.BetArr[j] = $root.GameMsg_HHDZ.HHDZ_Bet.toObject(message.BetArr[j], options);
            }
            return object;
        };

        /**
         * Converts this HHDZ_BetRet to JSON.
         * @function toJSON
         * @memberof GameMsg_HHDZ.HHDZ_BetRet
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        HHDZ_BetRet.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return HHDZ_BetRet;
    })();

    GameMsg_HHDZ.HHDZ_GameResultUserMoney = (function() {

        /**
         * Properties of a HHDZ_GameResultUserMoney.
         * @memberof GameMsg_HHDZ
         * @interface IHHDZ_GameResultUserMoney
         * @property {number|Long|null} [ZhuangWin] HHDZ_GameResultUserMoney ZhuangWin
         * @property {number|Long|null} [SelfWin] HHDZ_GameResultUserMoney SelfWin
         * @property {Array.<GameMsg_HHDZ.IHHDZ_WinUerInfo>|null} [WinUserInfo] HHDZ_GameResultUserMoney WinUserInfo
         * @property {Array.<GameMsg_HHDZ.IHHDZ_StageUerInfo>|null} [StageUerInfo] HHDZ_GameResultUserMoney StageUerInfo
         */

        /**
         * Constructs a new HHDZ_GameResultUserMoney.
         * @memberof GameMsg_HHDZ
         * @classdesc Represents a HHDZ_GameResultUserMoney.
         * @implements IHHDZ_GameResultUserMoney
         * @constructor
         * @param {GameMsg_HHDZ.IHHDZ_GameResultUserMoney=} [properties] Properties to set
         */
        function HHDZ_GameResultUserMoney(properties) {
            this.WinUserInfo = [];
            this.StageUerInfo = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * HHDZ_GameResultUserMoney ZhuangWin.
         * @member {number|Long} ZhuangWin
         * @memberof GameMsg_HHDZ.HHDZ_GameResultUserMoney
         * @instance
         */
        HHDZ_GameResultUserMoney.prototype.ZhuangWin = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * HHDZ_GameResultUserMoney SelfWin.
         * @member {number|Long} SelfWin
         * @memberof GameMsg_HHDZ.HHDZ_GameResultUserMoney
         * @instance
         */
        HHDZ_GameResultUserMoney.prototype.SelfWin = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * HHDZ_GameResultUserMoney WinUserInfo.
         * @member {Array.<GameMsg_HHDZ.IHHDZ_WinUerInfo>} WinUserInfo
         * @memberof GameMsg_HHDZ.HHDZ_GameResultUserMoney
         * @instance
         */
        HHDZ_GameResultUserMoney.prototype.WinUserInfo = $util.emptyArray;

        /**
         * HHDZ_GameResultUserMoney StageUerInfo.
         * @member {Array.<GameMsg_HHDZ.IHHDZ_StageUerInfo>} StageUerInfo
         * @memberof GameMsg_HHDZ.HHDZ_GameResultUserMoney
         * @instance
         */
        HHDZ_GameResultUserMoney.prototype.StageUerInfo = $util.emptyArray;

        /**
         * Creates a new HHDZ_GameResultUserMoney instance using the specified properties.
         * @function create
         * @memberof GameMsg_HHDZ.HHDZ_GameResultUserMoney
         * @static
         * @param {GameMsg_HHDZ.IHHDZ_GameResultUserMoney=} [properties] Properties to set
         * @returns {GameMsg_HHDZ.HHDZ_GameResultUserMoney} HHDZ_GameResultUserMoney instance
         */
        HHDZ_GameResultUserMoney.create = function create(properties) {
            return new HHDZ_GameResultUserMoney(properties);
        };

        /**
         * Encodes the specified HHDZ_GameResultUserMoney message. Does not implicitly {@link GameMsg_HHDZ.HHDZ_GameResultUserMoney.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_HHDZ.HHDZ_GameResultUserMoney
         * @static
         * @param {GameMsg_HHDZ.IHHDZ_GameResultUserMoney} message HHDZ_GameResultUserMoney message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HHDZ_GameResultUserMoney.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.ZhuangWin != null && message.hasOwnProperty("ZhuangWin"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.ZhuangWin);
            if (message.SelfWin != null && message.hasOwnProperty("SelfWin"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.SelfWin);
            if (message.WinUserInfo != null && message.WinUserInfo.length)
                for (var i = 0; i < message.WinUserInfo.length; ++i)
                    $root.GameMsg_HHDZ.HHDZ_WinUerInfo.encode(message.WinUserInfo[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.StageUerInfo != null && message.StageUerInfo.length)
                for (var i = 0; i < message.StageUerInfo.length; ++i)
                    $root.GameMsg_HHDZ.HHDZ_StageUerInfo.encode(message.StageUerInfo[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified HHDZ_GameResultUserMoney message, length delimited. Does not implicitly {@link GameMsg_HHDZ.HHDZ_GameResultUserMoney.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_HHDZ.HHDZ_GameResultUserMoney
         * @static
         * @param {GameMsg_HHDZ.IHHDZ_GameResultUserMoney} message HHDZ_GameResultUserMoney message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HHDZ_GameResultUserMoney.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a HHDZ_GameResultUserMoney message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_HHDZ.HHDZ_GameResultUserMoney
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_HHDZ.HHDZ_GameResultUserMoney} HHDZ_GameResultUserMoney
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HHDZ_GameResultUserMoney.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_HHDZ.HHDZ_GameResultUserMoney();
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
                    message.WinUserInfo.push($root.GameMsg_HHDZ.HHDZ_WinUerInfo.decode(reader, reader.uint32()));
                    break;
                case 4:
                    if (!(message.StageUerInfo && message.StageUerInfo.length))
                        message.StageUerInfo = [];
                    message.StageUerInfo.push($root.GameMsg_HHDZ.HHDZ_StageUerInfo.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a HHDZ_GameResultUserMoney message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_HHDZ.HHDZ_GameResultUserMoney
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_HHDZ.HHDZ_GameResultUserMoney} HHDZ_GameResultUserMoney
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HHDZ_GameResultUserMoney.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a HHDZ_GameResultUserMoney message.
         * @function verify
         * @memberof GameMsg_HHDZ.HHDZ_GameResultUserMoney
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        HHDZ_GameResultUserMoney.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.ZhuangWin != null && message.hasOwnProperty("ZhuangWin"))
                if (!$util.isInteger(message.ZhuangWin) && !(message.ZhuangWin && $util.isInteger(message.ZhuangWin.low) && $util.isInteger(message.ZhuangWin.high)))
                    return "ZhuangWin: integer|Long expected";
            if (message.SelfWin != null && message.hasOwnProperty("SelfWin"))
                if (!$util.isInteger(message.SelfWin) && !(message.SelfWin && $util.isInteger(message.SelfWin.low) && $util.isInteger(message.SelfWin.high)))
                    return "SelfWin: integer|Long expected";
            if (message.WinUserInfo != null && message.hasOwnProperty("WinUserInfo")) {
                if (!Array.isArray(message.WinUserInfo))
                    return "WinUserInfo: array expected";
                for (var i = 0; i < message.WinUserInfo.length; ++i) {
                    var error = $root.GameMsg_HHDZ.HHDZ_WinUerInfo.verify(message.WinUserInfo[i]);
                    if (error)
                        return "WinUserInfo." + error;
                }
            }
            if (message.StageUerInfo != null && message.hasOwnProperty("StageUerInfo")) {
                if (!Array.isArray(message.StageUerInfo))
                    return "StageUerInfo: array expected";
                for (var i = 0; i < message.StageUerInfo.length; ++i) {
                    var error = $root.GameMsg_HHDZ.HHDZ_StageUerInfo.verify(message.StageUerInfo[i]);
                    if (error)
                        return "StageUerInfo." + error;
                }
            }
            return null;
        };

        /**
         * Creates a HHDZ_GameResultUserMoney message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_HHDZ.HHDZ_GameResultUserMoney
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_HHDZ.HHDZ_GameResultUserMoney} HHDZ_GameResultUserMoney
         */
        HHDZ_GameResultUserMoney.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_HHDZ.HHDZ_GameResultUserMoney)
                return object;
            var message = new $root.GameMsg_HHDZ.HHDZ_GameResultUserMoney();
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
                    throw TypeError(".GameMsg_HHDZ.HHDZ_GameResultUserMoney.WinUserInfo: array expected");
                message.WinUserInfo = [];
                for (var i = 0; i < object.WinUserInfo.length; ++i) {
                    if (typeof object.WinUserInfo[i] !== "object")
                        throw TypeError(".GameMsg_HHDZ.HHDZ_GameResultUserMoney.WinUserInfo: object expected");
                    message.WinUserInfo[i] = $root.GameMsg_HHDZ.HHDZ_WinUerInfo.fromObject(object.WinUserInfo[i]);
                }
            }
            if (object.StageUerInfo) {
                if (!Array.isArray(object.StageUerInfo))
                    throw TypeError(".GameMsg_HHDZ.HHDZ_GameResultUserMoney.StageUerInfo: array expected");
                message.StageUerInfo = [];
                for (var i = 0; i < object.StageUerInfo.length; ++i) {
                    if (typeof object.StageUerInfo[i] !== "object")
                        throw TypeError(".GameMsg_HHDZ.HHDZ_GameResultUserMoney.StageUerInfo: object expected");
                    message.StageUerInfo[i] = $root.GameMsg_HHDZ.HHDZ_StageUerInfo.fromObject(object.StageUerInfo[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a HHDZ_GameResultUserMoney message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_HHDZ.HHDZ_GameResultUserMoney
         * @static
         * @param {GameMsg_HHDZ.HHDZ_GameResultUserMoney} message HHDZ_GameResultUserMoney
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        HHDZ_GameResultUserMoney.toObject = function toObject(message, options) {
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
                    object.WinUserInfo[j] = $root.GameMsg_HHDZ.HHDZ_WinUerInfo.toObject(message.WinUserInfo[j], options);
            }
            if (message.StageUerInfo && message.StageUerInfo.length) {
                object.StageUerInfo = [];
                for (var j = 0; j < message.StageUerInfo.length; ++j)
                    object.StageUerInfo[j] = $root.GameMsg_HHDZ.HHDZ_StageUerInfo.toObject(message.StageUerInfo[j], options);
            }
            return object;
        };

        /**
         * Converts this HHDZ_GameResultUserMoney to JSON.
         * @function toJSON
         * @memberof GameMsg_HHDZ.HHDZ_GameResultUserMoney
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        HHDZ_GameResultUserMoney.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return HHDZ_GameResultUserMoney;
    })();

    GameMsg_HHDZ.HHDZ_WinUerInfo = (function() {

        /**
         * Properties of a HHDZ_WinUerInfo.
         * @memberof GameMsg_HHDZ
         * @interface IHHDZ_WinUerInfo
         * @property {string|null} [UserName] HHDZ_WinUerInfo UserName
         * @property {number|Long|null} [Win] HHDZ_WinUerInfo Win
         */

        /**
         * Constructs a new HHDZ_WinUerInfo.
         * @memberof GameMsg_HHDZ
         * @classdesc Represents a HHDZ_WinUerInfo.
         * @implements IHHDZ_WinUerInfo
         * @constructor
         * @param {GameMsg_HHDZ.IHHDZ_WinUerInfo=} [properties] Properties to set
         */
        function HHDZ_WinUerInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * HHDZ_WinUerInfo UserName.
         * @member {string} UserName
         * @memberof GameMsg_HHDZ.HHDZ_WinUerInfo
         * @instance
         */
        HHDZ_WinUerInfo.prototype.UserName = "";

        /**
         * HHDZ_WinUerInfo Win.
         * @member {number|Long} Win
         * @memberof GameMsg_HHDZ.HHDZ_WinUerInfo
         * @instance
         */
        HHDZ_WinUerInfo.prototype.Win = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new HHDZ_WinUerInfo instance using the specified properties.
         * @function create
         * @memberof GameMsg_HHDZ.HHDZ_WinUerInfo
         * @static
         * @param {GameMsg_HHDZ.IHHDZ_WinUerInfo=} [properties] Properties to set
         * @returns {GameMsg_HHDZ.HHDZ_WinUerInfo} HHDZ_WinUerInfo instance
         */
        HHDZ_WinUerInfo.create = function create(properties) {
            return new HHDZ_WinUerInfo(properties);
        };

        /**
         * Encodes the specified HHDZ_WinUerInfo message. Does not implicitly {@link GameMsg_HHDZ.HHDZ_WinUerInfo.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_HHDZ.HHDZ_WinUerInfo
         * @static
         * @param {GameMsg_HHDZ.IHHDZ_WinUerInfo} message HHDZ_WinUerInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HHDZ_WinUerInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.UserName != null && message.hasOwnProperty("UserName"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.UserName);
            if (message.Win != null && message.hasOwnProperty("Win"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.Win);
            return writer;
        };

        /**
         * Encodes the specified HHDZ_WinUerInfo message, length delimited. Does not implicitly {@link GameMsg_HHDZ.HHDZ_WinUerInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_HHDZ.HHDZ_WinUerInfo
         * @static
         * @param {GameMsg_HHDZ.IHHDZ_WinUerInfo} message HHDZ_WinUerInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HHDZ_WinUerInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a HHDZ_WinUerInfo message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_HHDZ.HHDZ_WinUerInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_HHDZ.HHDZ_WinUerInfo} HHDZ_WinUerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HHDZ_WinUerInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_HHDZ.HHDZ_WinUerInfo();
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
            return message;
        };

        /**
         * Decodes a HHDZ_WinUerInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_HHDZ.HHDZ_WinUerInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_HHDZ.HHDZ_WinUerInfo} HHDZ_WinUerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HHDZ_WinUerInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a HHDZ_WinUerInfo message.
         * @function verify
         * @memberof GameMsg_HHDZ.HHDZ_WinUerInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        HHDZ_WinUerInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.UserName != null && message.hasOwnProperty("UserName"))
                if (!$util.isString(message.UserName))
                    return "UserName: string expected";
            if (message.Win != null && message.hasOwnProperty("Win"))
                if (!$util.isInteger(message.Win) && !(message.Win && $util.isInteger(message.Win.low) && $util.isInteger(message.Win.high)))
                    return "Win: integer|Long expected";
            return null;
        };

        /**
         * Creates a HHDZ_WinUerInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_HHDZ.HHDZ_WinUerInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_HHDZ.HHDZ_WinUerInfo} HHDZ_WinUerInfo
         */
        HHDZ_WinUerInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_HHDZ.HHDZ_WinUerInfo)
                return object;
            var message = new $root.GameMsg_HHDZ.HHDZ_WinUerInfo();
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
         * Creates a plain object from a HHDZ_WinUerInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_HHDZ.HHDZ_WinUerInfo
         * @static
         * @param {GameMsg_HHDZ.HHDZ_WinUerInfo} message HHDZ_WinUerInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        HHDZ_WinUerInfo.toObject = function toObject(message, options) {
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
         * Converts this HHDZ_WinUerInfo to JSON.
         * @function toJSON
         * @memberof GameMsg_HHDZ.HHDZ_WinUerInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        HHDZ_WinUerInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return HHDZ_WinUerInfo;
    })();

    GameMsg_HHDZ.HHDZ_StageUerInfo = (function() {

        /**
         * Properties of a HHDZ_StageUerInfo.
         * @memberof GameMsg_HHDZ
         * @interface IHHDZ_StageUerInfo
         * @property {number|null} [UserID] HHDZ_StageUerInfo UserID
         * @property {number|Long|null} [Win] HHDZ_StageUerInfo Win
         */

        /**
         * Constructs a new HHDZ_StageUerInfo.
         * @memberof GameMsg_HHDZ
         * @classdesc Represents a HHDZ_StageUerInfo.
         * @implements IHHDZ_StageUerInfo
         * @constructor
         * @param {GameMsg_HHDZ.IHHDZ_StageUerInfo=} [properties] Properties to set
         */
        function HHDZ_StageUerInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * HHDZ_StageUerInfo UserID.
         * @member {number} UserID
         * @memberof GameMsg_HHDZ.HHDZ_StageUerInfo
         * @instance
         */
        HHDZ_StageUerInfo.prototype.UserID = 0;

        /**
         * HHDZ_StageUerInfo Win.
         * @member {number|Long} Win
         * @memberof GameMsg_HHDZ.HHDZ_StageUerInfo
         * @instance
         */
        HHDZ_StageUerInfo.prototype.Win = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new HHDZ_StageUerInfo instance using the specified properties.
         * @function create
         * @memberof GameMsg_HHDZ.HHDZ_StageUerInfo
         * @static
         * @param {GameMsg_HHDZ.IHHDZ_StageUerInfo=} [properties] Properties to set
         * @returns {GameMsg_HHDZ.HHDZ_StageUerInfo} HHDZ_StageUerInfo instance
         */
        HHDZ_StageUerInfo.create = function create(properties) {
            return new HHDZ_StageUerInfo(properties);
        };

        /**
         * Encodes the specified HHDZ_StageUerInfo message. Does not implicitly {@link GameMsg_HHDZ.HHDZ_StageUerInfo.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_HHDZ.HHDZ_StageUerInfo
         * @static
         * @param {GameMsg_HHDZ.IHHDZ_StageUerInfo} message HHDZ_StageUerInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HHDZ_StageUerInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.UserID);
            if (message.Win != null && message.hasOwnProperty("Win"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.Win);
            return writer;
        };

        /**
         * Encodes the specified HHDZ_StageUerInfo message, length delimited. Does not implicitly {@link GameMsg_HHDZ.HHDZ_StageUerInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_HHDZ.HHDZ_StageUerInfo
         * @static
         * @param {GameMsg_HHDZ.IHHDZ_StageUerInfo} message HHDZ_StageUerInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HHDZ_StageUerInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a HHDZ_StageUerInfo message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_HHDZ.HHDZ_StageUerInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_HHDZ.HHDZ_StageUerInfo} HHDZ_StageUerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HHDZ_StageUerInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_HHDZ.HHDZ_StageUerInfo();
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
            return message;
        };

        /**
         * Decodes a HHDZ_StageUerInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_HHDZ.HHDZ_StageUerInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_HHDZ.HHDZ_StageUerInfo} HHDZ_StageUerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HHDZ_StageUerInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a HHDZ_StageUerInfo message.
         * @function verify
         * @memberof GameMsg_HHDZ.HHDZ_StageUerInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        HHDZ_StageUerInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                if (!$util.isInteger(message.UserID))
                    return "UserID: integer expected";
            if (message.Win != null && message.hasOwnProperty("Win"))
                if (!$util.isInteger(message.Win) && !(message.Win && $util.isInteger(message.Win.low) && $util.isInteger(message.Win.high)))
                    return "Win: integer|Long expected";
            return null;
        };

        /**
         * Creates a HHDZ_StageUerInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_HHDZ.HHDZ_StageUerInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_HHDZ.HHDZ_StageUerInfo} HHDZ_StageUerInfo
         */
        HHDZ_StageUerInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_HHDZ.HHDZ_StageUerInfo)
                return object;
            var message = new $root.GameMsg_HHDZ.HHDZ_StageUerInfo();
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
         * Creates a plain object from a HHDZ_StageUerInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_HHDZ.HHDZ_StageUerInfo
         * @static
         * @param {GameMsg_HHDZ.HHDZ_StageUerInfo} message HHDZ_StageUerInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        HHDZ_StageUerInfo.toObject = function toObject(message, options) {
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
         * Converts this HHDZ_StageUerInfo to JSON.
         * @function toJSON
         * @memberof GameMsg_HHDZ.HHDZ_StageUerInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        HHDZ_StageUerInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return HHDZ_StageUerInfo;
    })();

    GameMsg_HHDZ.HHDZ_Cards = (function() {

        /**
         * Properties of a HHDZ_Cards.
         * @memberof GameMsg_HHDZ
         * @interface IHHDZ_Cards
         * @property {Array.<GameMsg_HHDZ.IHHDZ_Poker>|null} [Cards] HHDZ_Cards Cards
         * @property {number|null} [RoundID] HHDZ_Cards RoundID
         */

        /**
         * Constructs a new HHDZ_Cards.
         * @memberof GameMsg_HHDZ
         * @classdesc Represents a HHDZ_Cards.
         * @implements IHHDZ_Cards
         * @constructor
         * @param {GameMsg_HHDZ.IHHDZ_Cards=} [properties] Properties to set
         */
        function HHDZ_Cards(properties) {
            this.Cards = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * HHDZ_Cards Cards.
         * @member {Array.<GameMsg_HHDZ.IHHDZ_Poker>} Cards
         * @memberof GameMsg_HHDZ.HHDZ_Cards
         * @instance
         */
        HHDZ_Cards.prototype.Cards = $util.emptyArray;

        /**
         * HHDZ_Cards RoundID.
         * @member {number} RoundID
         * @memberof GameMsg_HHDZ.HHDZ_Cards
         * @instance
         */
        HHDZ_Cards.prototype.RoundID = 0;

        /**
         * Creates a new HHDZ_Cards instance using the specified properties.
         * @function create
         * @memberof GameMsg_HHDZ.HHDZ_Cards
         * @static
         * @param {GameMsg_HHDZ.IHHDZ_Cards=} [properties] Properties to set
         * @returns {GameMsg_HHDZ.HHDZ_Cards} HHDZ_Cards instance
         */
        HHDZ_Cards.create = function create(properties) {
            return new HHDZ_Cards(properties);
        };

        /**
         * Encodes the specified HHDZ_Cards message. Does not implicitly {@link GameMsg_HHDZ.HHDZ_Cards.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_HHDZ.HHDZ_Cards
         * @static
         * @param {GameMsg_HHDZ.IHHDZ_Cards} message HHDZ_Cards message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HHDZ_Cards.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Cards != null && message.Cards.length)
                for (var i = 0; i < message.Cards.length; ++i)
                    $root.GameMsg_HHDZ.HHDZ_Poker.encode(message.Cards[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.RoundID != null && message.hasOwnProperty("RoundID"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.RoundID);
            return writer;
        };

        /**
         * Encodes the specified HHDZ_Cards message, length delimited. Does not implicitly {@link GameMsg_HHDZ.HHDZ_Cards.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_HHDZ.HHDZ_Cards
         * @static
         * @param {GameMsg_HHDZ.IHHDZ_Cards} message HHDZ_Cards message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HHDZ_Cards.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a HHDZ_Cards message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_HHDZ.HHDZ_Cards
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_HHDZ.HHDZ_Cards} HHDZ_Cards
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HHDZ_Cards.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_HHDZ.HHDZ_Cards();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.Cards && message.Cards.length))
                        message.Cards = [];
                    message.Cards.push($root.GameMsg_HHDZ.HHDZ_Poker.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.RoundID = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a HHDZ_Cards message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_HHDZ.HHDZ_Cards
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_HHDZ.HHDZ_Cards} HHDZ_Cards
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HHDZ_Cards.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a HHDZ_Cards message.
         * @function verify
         * @memberof GameMsg_HHDZ.HHDZ_Cards
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        HHDZ_Cards.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Cards != null && message.hasOwnProperty("Cards")) {
                if (!Array.isArray(message.Cards))
                    return "Cards: array expected";
                for (var i = 0; i < message.Cards.length; ++i) {
                    var error = $root.GameMsg_HHDZ.HHDZ_Poker.verify(message.Cards[i]);
                    if (error)
                        return "Cards." + error;
                }
            }
            if (message.RoundID != null && message.hasOwnProperty("RoundID"))
                if (!$util.isInteger(message.RoundID))
                    return "RoundID: integer expected";
            return null;
        };

        /**
         * Creates a HHDZ_Cards message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_HHDZ.HHDZ_Cards
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_HHDZ.HHDZ_Cards} HHDZ_Cards
         */
        HHDZ_Cards.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_HHDZ.HHDZ_Cards)
                return object;
            var message = new $root.GameMsg_HHDZ.HHDZ_Cards();
            if (object.Cards) {
                if (!Array.isArray(object.Cards))
                    throw TypeError(".GameMsg_HHDZ.HHDZ_Cards.Cards: array expected");
                message.Cards = [];
                for (var i = 0; i < object.Cards.length; ++i) {
                    if (typeof object.Cards[i] !== "object")
                        throw TypeError(".GameMsg_HHDZ.HHDZ_Cards.Cards: object expected");
                    message.Cards[i] = $root.GameMsg_HHDZ.HHDZ_Poker.fromObject(object.Cards[i]);
                }
            }
            if (object.RoundID != null)
                message.RoundID = object.RoundID | 0;
            return message;
        };

        /**
         * Creates a plain object from a HHDZ_Cards message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_HHDZ.HHDZ_Cards
         * @static
         * @param {GameMsg_HHDZ.HHDZ_Cards} message HHDZ_Cards
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        HHDZ_Cards.toObject = function toObject(message, options) {
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
                    object.Cards[j] = $root.GameMsg_HHDZ.HHDZ_Poker.toObject(message.Cards[j], options);
            }
            if (message.RoundID != null && message.hasOwnProperty("RoundID"))
                object.RoundID = message.RoundID;
            return object;
        };

        /**
         * Converts this HHDZ_Cards to JSON.
         * @function toJSON
         * @memberof GameMsg_HHDZ.HHDZ_Cards
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        HHDZ_Cards.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return HHDZ_Cards;
    })();

    GameMsg_HHDZ.HHDZ_ShangzhuangRet = (function() {

        /**
         * Properties of a HHDZ_ShangzhuangRet.
         * @memberof GameMsg_HHDZ
         * @interface IHHDZ_ShangzhuangRet
         * @property {number|null} [ret] HHDZ_ShangzhuangRet ret
         */

        /**
         * Constructs a new HHDZ_ShangzhuangRet.
         * @memberof GameMsg_HHDZ
         * @classdesc Represents a HHDZ_ShangzhuangRet.
         * @implements IHHDZ_ShangzhuangRet
         * @constructor
         * @param {GameMsg_HHDZ.IHHDZ_ShangzhuangRet=} [properties] Properties to set
         */
        function HHDZ_ShangzhuangRet(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * HHDZ_ShangzhuangRet ret.
         * @member {number} ret
         * @memberof GameMsg_HHDZ.HHDZ_ShangzhuangRet
         * @instance
         */
        HHDZ_ShangzhuangRet.prototype.ret = 0;

        /**
         * Creates a new HHDZ_ShangzhuangRet instance using the specified properties.
         * @function create
         * @memberof GameMsg_HHDZ.HHDZ_ShangzhuangRet
         * @static
         * @param {GameMsg_HHDZ.IHHDZ_ShangzhuangRet=} [properties] Properties to set
         * @returns {GameMsg_HHDZ.HHDZ_ShangzhuangRet} HHDZ_ShangzhuangRet instance
         */
        HHDZ_ShangzhuangRet.create = function create(properties) {
            return new HHDZ_ShangzhuangRet(properties);
        };

        /**
         * Encodes the specified HHDZ_ShangzhuangRet message. Does not implicitly {@link GameMsg_HHDZ.HHDZ_ShangzhuangRet.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_HHDZ.HHDZ_ShangzhuangRet
         * @static
         * @param {GameMsg_HHDZ.IHHDZ_ShangzhuangRet} message HHDZ_ShangzhuangRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HHDZ_ShangzhuangRet.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.ret != null && message.hasOwnProperty("ret"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.ret);
            return writer;
        };

        /**
         * Encodes the specified HHDZ_ShangzhuangRet message, length delimited. Does not implicitly {@link GameMsg_HHDZ.HHDZ_ShangzhuangRet.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_HHDZ.HHDZ_ShangzhuangRet
         * @static
         * @param {GameMsg_HHDZ.IHHDZ_ShangzhuangRet} message HHDZ_ShangzhuangRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HHDZ_ShangzhuangRet.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a HHDZ_ShangzhuangRet message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_HHDZ.HHDZ_ShangzhuangRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_HHDZ.HHDZ_ShangzhuangRet} HHDZ_ShangzhuangRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HHDZ_ShangzhuangRet.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_HHDZ.HHDZ_ShangzhuangRet();
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
            return message;
        };

        /**
         * Decodes a HHDZ_ShangzhuangRet message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_HHDZ.HHDZ_ShangzhuangRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_HHDZ.HHDZ_ShangzhuangRet} HHDZ_ShangzhuangRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HHDZ_ShangzhuangRet.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a HHDZ_ShangzhuangRet message.
         * @function verify
         * @memberof GameMsg_HHDZ.HHDZ_ShangzhuangRet
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        HHDZ_ShangzhuangRet.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.ret != null && message.hasOwnProperty("ret"))
                if (!$util.isInteger(message.ret))
                    return "ret: integer expected";
            return null;
        };

        /**
         * Creates a HHDZ_ShangzhuangRet message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_HHDZ.HHDZ_ShangzhuangRet
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_HHDZ.HHDZ_ShangzhuangRet} HHDZ_ShangzhuangRet
         */
        HHDZ_ShangzhuangRet.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_HHDZ.HHDZ_ShangzhuangRet)
                return object;
            var message = new $root.GameMsg_HHDZ.HHDZ_ShangzhuangRet();
            if (object.ret != null)
                message.ret = object.ret | 0;
            return message;
        };

        /**
         * Creates a plain object from a HHDZ_ShangzhuangRet message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_HHDZ.HHDZ_ShangzhuangRet
         * @static
         * @param {GameMsg_HHDZ.HHDZ_ShangzhuangRet} message HHDZ_ShangzhuangRet
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        HHDZ_ShangzhuangRet.toObject = function toObject(message, options) {
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
         * Converts this HHDZ_ShangzhuangRet to JSON.
         * @function toJSON
         * @memberof GameMsg_HHDZ.HHDZ_ShangzhuangRet
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        HHDZ_ShangzhuangRet.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return HHDZ_ShangzhuangRet;
    })();

    GameMsg_HHDZ.HHDZ_ShangZhuang = (function() {

        /**
         * Properties of a HHDZ_ShangZhuang.
         * @memberof GameMsg_HHDZ
         * @interface IHHDZ_ShangZhuang
         * @property {boolean|null} [IsShangZhuang] HHDZ_ShangZhuang IsShangZhuang
         */

        /**
         * Constructs a new HHDZ_ShangZhuang.
         * @memberof GameMsg_HHDZ
         * @classdesc Represents a HHDZ_ShangZhuang.
         * @implements IHHDZ_ShangZhuang
         * @constructor
         * @param {GameMsg_HHDZ.IHHDZ_ShangZhuang=} [properties] Properties to set
         */
        function HHDZ_ShangZhuang(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * HHDZ_ShangZhuang IsShangZhuang.
         * @member {boolean} IsShangZhuang
         * @memberof GameMsg_HHDZ.HHDZ_ShangZhuang
         * @instance
         */
        HHDZ_ShangZhuang.prototype.IsShangZhuang = false;

        /**
         * Creates a new HHDZ_ShangZhuang instance using the specified properties.
         * @function create
         * @memberof GameMsg_HHDZ.HHDZ_ShangZhuang
         * @static
         * @param {GameMsg_HHDZ.IHHDZ_ShangZhuang=} [properties] Properties to set
         * @returns {GameMsg_HHDZ.HHDZ_ShangZhuang} HHDZ_ShangZhuang instance
         */
        HHDZ_ShangZhuang.create = function create(properties) {
            return new HHDZ_ShangZhuang(properties);
        };

        /**
         * Encodes the specified HHDZ_ShangZhuang message. Does not implicitly {@link GameMsg_HHDZ.HHDZ_ShangZhuang.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_HHDZ.HHDZ_ShangZhuang
         * @static
         * @param {GameMsg_HHDZ.IHHDZ_ShangZhuang} message HHDZ_ShangZhuang message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HHDZ_ShangZhuang.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.IsShangZhuang != null && message.hasOwnProperty("IsShangZhuang"))
                writer.uint32(/* id 1, wireType 0 =*/8).bool(message.IsShangZhuang);
            return writer;
        };

        /**
         * Encodes the specified HHDZ_ShangZhuang message, length delimited. Does not implicitly {@link GameMsg_HHDZ.HHDZ_ShangZhuang.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_HHDZ.HHDZ_ShangZhuang
         * @static
         * @param {GameMsg_HHDZ.IHHDZ_ShangZhuang} message HHDZ_ShangZhuang message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HHDZ_ShangZhuang.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a HHDZ_ShangZhuang message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_HHDZ.HHDZ_ShangZhuang
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_HHDZ.HHDZ_ShangZhuang} HHDZ_ShangZhuang
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HHDZ_ShangZhuang.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_HHDZ.HHDZ_ShangZhuang();
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
            return message;
        };

        /**
         * Decodes a HHDZ_ShangZhuang message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_HHDZ.HHDZ_ShangZhuang
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_HHDZ.HHDZ_ShangZhuang} HHDZ_ShangZhuang
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HHDZ_ShangZhuang.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a HHDZ_ShangZhuang message.
         * @function verify
         * @memberof GameMsg_HHDZ.HHDZ_ShangZhuang
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        HHDZ_ShangZhuang.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.IsShangZhuang != null && message.hasOwnProperty("IsShangZhuang"))
                if (typeof message.IsShangZhuang !== "boolean")
                    return "IsShangZhuang: boolean expected";
            return null;
        };

        /**
         * Creates a HHDZ_ShangZhuang message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_HHDZ.HHDZ_ShangZhuang
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_HHDZ.HHDZ_ShangZhuang} HHDZ_ShangZhuang
         */
        HHDZ_ShangZhuang.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_HHDZ.HHDZ_ShangZhuang)
                return object;
            var message = new $root.GameMsg_HHDZ.HHDZ_ShangZhuang();
            if (object.IsShangZhuang != null)
                message.IsShangZhuang = Boolean(object.IsShangZhuang);
            return message;
        };

        /**
         * Creates a plain object from a HHDZ_ShangZhuang message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_HHDZ.HHDZ_ShangZhuang
         * @static
         * @param {GameMsg_HHDZ.HHDZ_ShangZhuang} message HHDZ_ShangZhuang
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        HHDZ_ShangZhuang.toObject = function toObject(message, options) {
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
         * Converts this HHDZ_ShangZhuang to JSON.
         * @function toJSON
         * @memberof GameMsg_HHDZ.HHDZ_ShangZhuang
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        HHDZ_ShangZhuang.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return HHDZ_ShangZhuang;
    })();

    GameMsg_HHDZ.HHDZ_ZhuangInfo = (function() {

        /**
         * Properties of a HHDZ_ZhuangInfo.
         * @memberof GameMsg_HHDZ
         * @interface IHHDZ_ZhuangInfo
         * @property {number|null} [UserID] HHDZ_ZhuangInfo UserID
         * @property {number|null} [LastTurn] HHDZ_ZhuangInfo LastTurn
         * @property {Array.<GameMsg_HHDZ.IGameUser>|null} [UserInfo] HHDZ_ZhuangInfo UserInfo
         */

        /**
         * Constructs a new HHDZ_ZhuangInfo.
         * @memberof GameMsg_HHDZ
         * @classdesc Represents a HHDZ_ZhuangInfo.
         * @implements IHHDZ_ZhuangInfo
         * @constructor
         * @param {GameMsg_HHDZ.IHHDZ_ZhuangInfo=} [properties] Properties to set
         */
        function HHDZ_ZhuangInfo(properties) {
            this.UserInfo = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * HHDZ_ZhuangInfo UserID.
         * @member {number} UserID
         * @memberof GameMsg_HHDZ.HHDZ_ZhuangInfo
         * @instance
         */
        HHDZ_ZhuangInfo.prototype.UserID = 0;

        /**
         * HHDZ_ZhuangInfo LastTurn.
         * @member {number} LastTurn
         * @memberof GameMsg_HHDZ.HHDZ_ZhuangInfo
         * @instance
         */
        HHDZ_ZhuangInfo.prototype.LastTurn = 0;

        /**
         * HHDZ_ZhuangInfo UserInfo.
         * @member {Array.<GameMsg_HHDZ.IGameUser>} UserInfo
         * @memberof GameMsg_HHDZ.HHDZ_ZhuangInfo
         * @instance
         */
        HHDZ_ZhuangInfo.prototype.UserInfo = $util.emptyArray;

        /**
         * Creates a new HHDZ_ZhuangInfo instance using the specified properties.
         * @function create
         * @memberof GameMsg_HHDZ.HHDZ_ZhuangInfo
         * @static
         * @param {GameMsg_HHDZ.IHHDZ_ZhuangInfo=} [properties] Properties to set
         * @returns {GameMsg_HHDZ.HHDZ_ZhuangInfo} HHDZ_ZhuangInfo instance
         */
        HHDZ_ZhuangInfo.create = function create(properties) {
            return new HHDZ_ZhuangInfo(properties);
        };

        /**
         * Encodes the specified HHDZ_ZhuangInfo message. Does not implicitly {@link GameMsg_HHDZ.HHDZ_ZhuangInfo.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_HHDZ.HHDZ_ZhuangInfo
         * @static
         * @param {GameMsg_HHDZ.IHHDZ_ZhuangInfo} message HHDZ_ZhuangInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HHDZ_ZhuangInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.UserID);
            if (message.LastTurn != null && message.hasOwnProperty("LastTurn"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.LastTurn);
            if (message.UserInfo != null && message.UserInfo.length)
                for (var i = 0; i < message.UserInfo.length; ++i)
                    $root.GameMsg_HHDZ.GameUser.encode(message.UserInfo[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified HHDZ_ZhuangInfo message, length delimited. Does not implicitly {@link GameMsg_HHDZ.HHDZ_ZhuangInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_HHDZ.HHDZ_ZhuangInfo
         * @static
         * @param {GameMsg_HHDZ.IHHDZ_ZhuangInfo} message HHDZ_ZhuangInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HHDZ_ZhuangInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a HHDZ_ZhuangInfo message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_HHDZ.HHDZ_ZhuangInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_HHDZ.HHDZ_ZhuangInfo} HHDZ_ZhuangInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HHDZ_ZhuangInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_HHDZ.HHDZ_ZhuangInfo();
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
                    message.UserInfo.push($root.GameMsg_HHDZ.GameUser.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a HHDZ_ZhuangInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_HHDZ.HHDZ_ZhuangInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_HHDZ.HHDZ_ZhuangInfo} HHDZ_ZhuangInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HHDZ_ZhuangInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a HHDZ_ZhuangInfo message.
         * @function verify
         * @memberof GameMsg_HHDZ.HHDZ_ZhuangInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        HHDZ_ZhuangInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                if (!$util.isInteger(message.UserID))
                    return "UserID: integer expected";
            if (message.LastTurn != null && message.hasOwnProperty("LastTurn"))
                if (!$util.isInteger(message.LastTurn))
                    return "LastTurn: integer expected";
            if (message.UserInfo != null && message.hasOwnProperty("UserInfo")) {
                if (!Array.isArray(message.UserInfo))
                    return "UserInfo: array expected";
                for (var i = 0; i < message.UserInfo.length; ++i) {
                    var error = $root.GameMsg_HHDZ.GameUser.verify(message.UserInfo[i]);
                    if (error)
                        return "UserInfo." + error;
                }
            }
            return null;
        };

        /**
         * Creates a HHDZ_ZhuangInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_HHDZ.HHDZ_ZhuangInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_HHDZ.HHDZ_ZhuangInfo} HHDZ_ZhuangInfo
         */
        HHDZ_ZhuangInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_HHDZ.HHDZ_ZhuangInfo)
                return object;
            var message = new $root.GameMsg_HHDZ.HHDZ_ZhuangInfo();
            if (object.UserID != null)
                message.UserID = object.UserID | 0;
            if (object.LastTurn != null)
                message.LastTurn = object.LastTurn | 0;
            if (object.UserInfo) {
                if (!Array.isArray(object.UserInfo))
                    throw TypeError(".GameMsg_HHDZ.HHDZ_ZhuangInfo.UserInfo: array expected");
                message.UserInfo = [];
                for (var i = 0; i < object.UserInfo.length; ++i) {
                    if (typeof object.UserInfo[i] !== "object")
                        throw TypeError(".GameMsg_HHDZ.HHDZ_ZhuangInfo.UserInfo: object expected");
                    message.UserInfo[i] = $root.GameMsg_HHDZ.GameUser.fromObject(object.UserInfo[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a HHDZ_ZhuangInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_HHDZ.HHDZ_ZhuangInfo
         * @static
         * @param {GameMsg_HHDZ.HHDZ_ZhuangInfo} message HHDZ_ZhuangInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        HHDZ_ZhuangInfo.toObject = function toObject(message, options) {
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
                    object.UserInfo[j] = $root.GameMsg_HHDZ.GameUser.toObject(message.UserInfo[j], options);
            }
            return object;
        };

        /**
         * Converts this HHDZ_ZhuangInfo to JSON.
         * @function toJSON
         * @memberof GameMsg_HHDZ.HHDZ_ZhuangInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        HHDZ_ZhuangInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return HHDZ_ZhuangInfo;
    })();

    GameMsg_HHDZ.HHDZ_ZhuangList = (function() {

        /**
         * Properties of a HHDZ_ZhuangList.
         * @memberof GameMsg_HHDZ
         * @interface IHHDZ_ZhuangList
         * @property {Array.<GameMsg_HHDZ.IGameUser>|null} [UserInfo] HHDZ_ZhuangList UserInfo
         */

        /**
         * Constructs a new HHDZ_ZhuangList.
         * @memberof GameMsg_HHDZ
         * @classdesc Represents a HHDZ_ZhuangList.
         * @implements IHHDZ_ZhuangList
         * @constructor
         * @param {GameMsg_HHDZ.IHHDZ_ZhuangList=} [properties] Properties to set
         */
        function HHDZ_ZhuangList(properties) {
            this.UserInfo = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * HHDZ_ZhuangList UserInfo.
         * @member {Array.<GameMsg_HHDZ.IGameUser>} UserInfo
         * @memberof GameMsg_HHDZ.HHDZ_ZhuangList
         * @instance
         */
        HHDZ_ZhuangList.prototype.UserInfo = $util.emptyArray;

        /**
         * Creates a new HHDZ_ZhuangList instance using the specified properties.
         * @function create
         * @memberof GameMsg_HHDZ.HHDZ_ZhuangList
         * @static
         * @param {GameMsg_HHDZ.IHHDZ_ZhuangList=} [properties] Properties to set
         * @returns {GameMsg_HHDZ.HHDZ_ZhuangList} HHDZ_ZhuangList instance
         */
        HHDZ_ZhuangList.create = function create(properties) {
            return new HHDZ_ZhuangList(properties);
        };

        /**
         * Encodes the specified HHDZ_ZhuangList message. Does not implicitly {@link GameMsg_HHDZ.HHDZ_ZhuangList.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_HHDZ.HHDZ_ZhuangList
         * @static
         * @param {GameMsg_HHDZ.IHHDZ_ZhuangList} message HHDZ_ZhuangList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HHDZ_ZhuangList.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.UserInfo != null && message.UserInfo.length)
                for (var i = 0; i < message.UserInfo.length; ++i)
                    $root.GameMsg_HHDZ.GameUser.encode(message.UserInfo[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified HHDZ_ZhuangList message, length delimited. Does not implicitly {@link GameMsg_HHDZ.HHDZ_ZhuangList.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_HHDZ.HHDZ_ZhuangList
         * @static
         * @param {GameMsg_HHDZ.IHHDZ_ZhuangList} message HHDZ_ZhuangList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HHDZ_ZhuangList.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a HHDZ_ZhuangList message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_HHDZ.HHDZ_ZhuangList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_HHDZ.HHDZ_ZhuangList} HHDZ_ZhuangList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HHDZ_ZhuangList.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_HHDZ.HHDZ_ZhuangList();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.UserInfo && message.UserInfo.length))
                        message.UserInfo = [];
                    message.UserInfo.push($root.GameMsg_HHDZ.GameUser.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a HHDZ_ZhuangList message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_HHDZ.HHDZ_ZhuangList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_HHDZ.HHDZ_ZhuangList} HHDZ_ZhuangList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HHDZ_ZhuangList.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a HHDZ_ZhuangList message.
         * @function verify
         * @memberof GameMsg_HHDZ.HHDZ_ZhuangList
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        HHDZ_ZhuangList.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.UserInfo != null && message.hasOwnProperty("UserInfo")) {
                if (!Array.isArray(message.UserInfo))
                    return "UserInfo: array expected";
                for (var i = 0; i < message.UserInfo.length; ++i) {
                    var error = $root.GameMsg_HHDZ.GameUser.verify(message.UserInfo[i]);
                    if (error)
                        return "UserInfo." + error;
                }
            }
            return null;
        };

        /**
         * Creates a HHDZ_ZhuangList message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_HHDZ.HHDZ_ZhuangList
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_HHDZ.HHDZ_ZhuangList} HHDZ_ZhuangList
         */
        HHDZ_ZhuangList.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_HHDZ.HHDZ_ZhuangList)
                return object;
            var message = new $root.GameMsg_HHDZ.HHDZ_ZhuangList();
            if (object.UserInfo) {
                if (!Array.isArray(object.UserInfo))
                    throw TypeError(".GameMsg_HHDZ.HHDZ_ZhuangList.UserInfo: array expected");
                message.UserInfo = [];
                for (var i = 0; i < object.UserInfo.length; ++i) {
                    if (typeof object.UserInfo[i] !== "object")
                        throw TypeError(".GameMsg_HHDZ.HHDZ_ZhuangList.UserInfo: object expected");
                    message.UserInfo[i] = $root.GameMsg_HHDZ.GameUser.fromObject(object.UserInfo[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a HHDZ_ZhuangList message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_HHDZ.HHDZ_ZhuangList
         * @static
         * @param {GameMsg_HHDZ.HHDZ_ZhuangList} message HHDZ_ZhuangList
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        HHDZ_ZhuangList.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.UserInfo = [];
            if (message.UserInfo && message.UserInfo.length) {
                object.UserInfo = [];
                for (var j = 0; j < message.UserInfo.length; ++j)
                    object.UserInfo[j] = $root.GameMsg_HHDZ.GameUser.toObject(message.UserInfo[j], options);
            }
            return object;
        };

        /**
         * Converts this HHDZ_ZhuangList to JSON.
         * @function toJSON
         * @memberof GameMsg_HHDZ.HHDZ_ZhuangList
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        HHDZ_ZhuangList.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return HHDZ_ZhuangList;
    })();

    GameMsg_HHDZ.HHDZ_BetClearRet = (function() {

        /**
         * Properties of a HHDZ_BetClearRet.
         * @memberof GameMsg_HHDZ
         * @interface IHHDZ_BetClearRet
         * @property {number|Long|null} [Money] HHDZ_BetClearRet Money
         * @property {number|null} [Ret] HHDZ_BetClearRet Ret
         */

        /**
         * Constructs a new HHDZ_BetClearRet.
         * @memberof GameMsg_HHDZ
         * @classdesc Represents a HHDZ_BetClearRet.
         * @implements IHHDZ_BetClearRet
         * @constructor
         * @param {GameMsg_HHDZ.IHHDZ_BetClearRet=} [properties] Properties to set
         */
        function HHDZ_BetClearRet(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * HHDZ_BetClearRet Money.
         * @member {number|Long} Money
         * @memberof GameMsg_HHDZ.HHDZ_BetClearRet
         * @instance
         */
        HHDZ_BetClearRet.prototype.Money = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * HHDZ_BetClearRet Ret.
         * @member {number} Ret
         * @memberof GameMsg_HHDZ.HHDZ_BetClearRet
         * @instance
         */
        HHDZ_BetClearRet.prototype.Ret = 0;

        /**
         * Creates a new HHDZ_BetClearRet instance using the specified properties.
         * @function create
         * @memberof GameMsg_HHDZ.HHDZ_BetClearRet
         * @static
         * @param {GameMsg_HHDZ.IHHDZ_BetClearRet=} [properties] Properties to set
         * @returns {GameMsg_HHDZ.HHDZ_BetClearRet} HHDZ_BetClearRet instance
         */
        HHDZ_BetClearRet.create = function create(properties) {
            return new HHDZ_BetClearRet(properties);
        };

        /**
         * Encodes the specified HHDZ_BetClearRet message. Does not implicitly {@link GameMsg_HHDZ.HHDZ_BetClearRet.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_HHDZ.HHDZ_BetClearRet
         * @static
         * @param {GameMsg_HHDZ.IHHDZ_BetClearRet} message HHDZ_BetClearRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HHDZ_BetClearRet.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Money != null && message.hasOwnProperty("Money"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.Money);
            if (message.Ret != null && message.hasOwnProperty("Ret"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.Ret);
            return writer;
        };

        /**
         * Encodes the specified HHDZ_BetClearRet message, length delimited. Does not implicitly {@link GameMsg_HHDZ.HHDZ_BetClearRet.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_HHDZ.HHDZ_BetClearRet
         * @static
         * @param {GameMsg_HHDZ.IHHDZ_BetClearRet} message HHDZ_BetClearRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HHDZ_BetClearRet.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a HHDZ_BetClearRet message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_HHDZ.HHDZ_BetClearRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_HHDZ.HHDZ_BetClearRet} HHDZ_BetClearRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HHDZ_BetClearRet.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_HHDZ.HHDZ_BetClearRet();
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
            return message;
        };

        /**
         * Decodes a HHDZ_BetClearRet message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_HHDZ.HHDZ_BetClearRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_HHDZ.HHDZ_BetClearRet} HHDZ_BetClearRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HHDZ_BetClearRet.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a HHDZ_BetClearRet message.
         * @function verify
         * @memberof GameMsg_HHDZ.HHDZ_BetClearRet
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        HHDZ_BetClearRet.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Money != null && message.hasOwnProperty("Money"))
                if (!$util.isInteger(message.Money) && !(message.Money && $util.isInteger(message.Money.low) && $util.isInteger(message.Money.high)))
                    return "Money: integer|Long expected";
            if (message.Ret != null && message.hasOwnProperty("Ret"))
                if (!$util.isInteger(message.Ret))
                    return "Ret: integer expected";
            return null;
        };

        /**
         * Creates a HHDZ_BetClearRet message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_HHDZ.HHDZ_BetClearRet
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_HHDZ.HHDZ_BetClearRet} HHDZ_BetClearRet
         */
        HHDZ_BetClearRet.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_HHDZ.HHDZ_BetClearRet)
                return object;
            var message = new $root.GameMsg_HHDZ.HHDZ_BetClearRet();
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
         * Creates a plain object from a HHDZ_BetClearRet message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_HHDZ.HHDZ_BetClearRet
         * @static
         * @param {GameMsg_HHDZ.HHDZ_BetClearRet} message HHDZ_BetClearRet
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        HHDZ_BetClearRet.toObject = function toObject(message, options) {
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
         * Converts this HHDZ_BetClearRet to JSON.
         * @function toJSON
         * @memberof GameMsg_HHDZ.HHDZ_BetClearRet
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        HHDZ_BetClearRet.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return HHDZ_BetClearRet;
    })();

    GameMsg_HHDZ.HHDZ_RichestList = (function() {

        /**
         * Properties of a HHDZ_RichestList.
         * @memberof GameMsg_HHDZ
         * @interface IHHDZ_RichestList
         * @property {Array.<GameMsg_HHDZ.IHHDZ_Richest>|null} [RichestList] HHDZ_RichestList RichestList
         */

        /**
         * Constructs a new HHDZ_RichestList.
         * @memberof GameMsg_HHDZ
         * @classdesc Represents a HHDZ_RichestList.
         * @implements IHHDZ_RichestList
         * @constructor
         * @param {GameMsg_HHDZ.IHHDZ_RichestList=} [properties] Properties to set
         */
        function HHDZ_RichestList(properties) {
            this.RichestList = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * HHDZ_RichestList RichestList.
         * @member {Array.<GameMsg_HHDZ.IHHDZ_Richest>} RichestList
         * @memberof GameMsg_HHDZ.HHDZ_RichestList
         * @instance
         */
        HHDZ_RichestList.prototype.RichestList = $util.emptyArray;

        /**
         * Creates a new HHDZ_RichestList instance using the specified properties.
         * @function create
         * @memberof GameMsg_HHDZ.HHDZ_RichestList
         * @static
         * @param {GameMsg_HHDZ.IHHDZ_RichestList=} [properties] Properties to set
         * @returns {GameMsg_HHDZ.HHDZ_RichestList} HHDZ_RichestList instance
         */
        HHDZ_RichestList.create = function create(properties) {
            return new HHDZ_RichestList(properties);
        };

        /**
         * Encodes the specified HHDZ_RichestList message. Does not implicitly {@link GameMsg_HHDZ.HHDZ_RichestList.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_HHDZ.HHDZ_RichestList
         * @static
         * @param {GameMsg_HHDZ.IHHDZ_RichestList} message HHDZ_RichestList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HHDZ_RichestList.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.RichestList != null && message.RichestList.length)
                for (var i = 0; i < message.RichestList.length; ++i)
                    $root.GameMsg_HHDZ.HHDZ_Richest.encode(message.RichestList[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified HHDZ_RichestList message, length delimited. Does not implicitly {@link GameMsg_HHDZ.HHDZ_RichestList.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_HHDZ.HHDZ_RichestList
         * @static
         * @param {GameMsg_HHDZ.IHHDZ_RichestList} message HHDZ_RichestList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HHDZ_RichestList.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a HHDZ_RichestList message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_HHDZ.HHDZ_RichestList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_HHDZ.HHDZ_RichestList} HHDZ_RichestList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HHDZ_RichestList.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_HHDZ.HHDZ_RichestList();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.RichestList && message.RichestList.length))
                        message.RichestList = [];
                    message.RichestList.push($root.GameMsg_HHDZ.HHDZ_Richest.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a HHDZ_RichestList message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_HHDZ.HHDZ_RichestList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_HHDZ.HHDZ_RichestList} HHDZ_RichestList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HHDZ_RichestList.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a HHDZ_RichestList message.
         * @function verify
         * @memberof GameMsg_HHDZ.HHDZ_RichestList
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        HHDZ_RichestList.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.RichestList != null && message.hasOwnProperty("RichestList")) {
                if (!Array.isArray(message.RichestList))
                    return "RichestList: array expected";
                for (var i = 0; i < message.RichestList.length; ++i) {
                    var error = $root.GameMsg_HHDZ.HHDZ_Richest.verify(message.RichestList[i]);
                    if (error)
                        return "RichestList." + error;
                }
            }
            return null;
        };

        /**
         * Creates a HHDZ_RichestList message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_HHDZ.HHDZ_RichestList
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_HHDZ.HHDZ_RichestList} HHDZ_RichestList
         */
        HHDZ_RichestList.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_HHDZ.HHDZ_RichestList)
                return object;
            var message = new $root.GameMsg_HHDZ.HHDZ_RichestList();
            if (object.RichestList) {
                if (!Array.isArray(object.RichestList))
                    throw TypeError(".GameMsg_HHDZ.HHDZ_RichestList.RichestList: array expected");
                message.RichestList = [];
                for (var i = 0; i < object.RichestList.length; ++i) {
                    if (typeof object.RichestList[i] !== "object")
                        throw TypeError(".GameMsg_HHDZ.HHDZ_RichestList.RichestList: object expected");
                    message.RichestList[i] = $root.GameMsg_HHDZ.HHDZ_Richest.fromObject(object.RichestList[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a HHDZ_RichestList message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_HHDZ.HHDZ_RichestList
         * @static
         * @param {GameMsg_HHDZ.HHDZ_RichestList} message HHDZ_RichestList
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        HHDZ_RichestList.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.RichestList = [];
            if (message.RichestList && message.RichestList.length) {
                object.RichestList = [];
                for (var j = 0; j < message.RichestList.length; ++j)
                    object.RichestList[j] = $root.GameMsg_HHDZ.HHDZ_Richest.toObject(message.RichestList[j], options);
            }
            return object;
        };

        /**
         * Converts this HHDZ_RichestList to JSON.
         * @function toJSON
         * @memberof GameMsg_HHDZ.HHDZ_RichestList
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        HHDZ_RichestList.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return HHDZ_RichestList;
    })();

    GameMsg_HHDZ.HHDZ_Richest = (function() {

        /**
         * Properties of a HHDZ_Richest.
         * @memberof GameMsg_HHDZ
         * @interface IHHDZ_Richest
         * @property {number|null} [Ranking] HHDZ_Richest Ranking
         * @property {number|null} [UserID] HHDZ_Richest UserID
         * @property {number|null} [UserFaceID] HHDZ_Richest UserFaceID
         * @property {number|Long|null} [Money] HHDZ_Richest Money
         * @property {number|null} [AvatarFrameID] HHDZ_Richest AvatarFrameID
         */

        /**
         * Constructs a new HHDZ_Richest.
         * @memberof GameMsg_HHDZ
         * @classdesc Represents a HHDZ_Richest.
         * @implements IHHDZ_Richest
         * @constructor
         * @param {GameMsg_HHDZ.IHHDZ_Richest=} [properties] Properties to set
         */
        function HHDZ_Richest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * HHDZ_Richest Ranking.
         * @member {number} Ranking
         * @memberof GameMsg_HHDZ.HHDZ_Richest
         * @instance
         */
        HHDZ_Richest.prototype.Ranking = 0;

        /**
         * HHDZ_Richest UserID.
         * @member {number} UserID
         * @memberof GameMsg_HHDZ.HHDZ_Richest
         * @instance
         */
        HHDZ_Richest.prototype.UserID = 0;

        /**
         * HHDZ_Richest UserFaceID.
         * @member {number} UserFaceID
         * @memberof GameMsg_HHDZ.HHDZ_Richest
         * @instance
         */
        HHDZ_Richest.prototype.UserFaceID = 0;

        /**
         * HHDZ_Richest Money.
         * @member {number|Long} Money
         * @memberof GameMsg_HHDZ.HHDZ_Richest
         * @instance
         */
        HHDZ_Richest.prototype.Money = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * HHDZ_Richest AvatarFrameID.
         * @member {number} AvatarFrameID
         * @memberof GameMsg_HHDZ.HHDZ_Richest
         * @instance
         */
        HHDZ_Richest.prototype.AvatarFrameID = 0;

        /**
         * Creates a new HHDZ_Richest instance using the specified properties.
         * @function create
         * @memberof GameMsg_HHDZ.HHDZ_Richest
         * @static
         * @param {GameMsg_HHDZ.IHHDZ_Richest=} [properties] Properties to set
         * @returns {GameMsg_HHDZ.HHDZ_Richest} HHDZ_Richest instance
         */
        HHDZ_Richest.create = function create(properties) {
            return new HHDZ_Richest(properties);
        };

        /**
         * Encodes the specified HHDZ_Richest message. Does not implicitly {@link GameMsg_HHDZ.HHDZ_Richest.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_HHDZ.HHDZ_Richest
         * @static
         * @param {GameMsg_HHDZ.IHHDZ_Richest} message HHDZ_Richest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HHDZ_Richest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Ranking != null && message.hasOwnProperty("Ranking"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.Ranking);
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.UserID);
            if (message.UserFaceID != null && message.hasOwnProperty("UserFaceID"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.UserFaceID);
            if (message.Money != null && message.hasOwnProperty("Money"))
                writer.uint32(/* id 4, wireType 0 =*/32).int64(message.Money);
            if (message.AvatarFrameID != null && message.hasOwnProperty("AvatarFrameID"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.AvatarFrameID);
            return writer;
        };

        /**
         * Encodes the specified HHDZ_Richest message, length delimited. Does not implicitly {@link GameMsg_HHDZ.HHDZ_Richest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_HHDZ.HHDZ_Richest
         * @static
         * @param {GameMsg_HHDZ.IHHDZ_Richest} message HHDZ_Richest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HHDZ_Richest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a HHDZ_Richest message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_HHDZ.HHDZ_Richest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_HHDZ.HHDZ_Richest} HHDZ_Richest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HHDZ_Richest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_HHDZ.HHDZ_Richest();
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
            return message;
        };

        /**
         * Decodes a HHDZ_Richest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_HHDZ.HHDZ_Richest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_HHDZ.HHDZ_Richest} HHDZ_Richest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HHDZ_Richest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a HHDZ_Richest message.
         * @function verify
         * @memberof GameMsg_HHDZ.HHDZ_Richest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        HHDZ_Richest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Ranking != null && message.hasOwnProperty("Ranking"))
                if (!$util.isInteger(message.Ranking))
                    return "Ranking: integer expected";
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                if (!$util.isInteger(message.UserID))
                    return "UserID: integer expected";
            if (message.UserFaceID != null && message.hasOwnProperty("UserFaceID"))
                if (!$util.isInteger(message.UserFaceID))
                    return "UserFaceID: integer expected";
            if (message.Money != null && message.hasOwnProperty("Money"))
                if (!$util.isInteger(message.Money) && !(message.Money && $util.isInteger(message.Money.low) && $util.isInteger(message.Money.high)))
                    return "Money: integer|Long expected";
            if (message.AvatarFrameID != null && message.hasOwnProperty("AvatarFrameID"))
                if (!$util.isInteger(message.AvatarFrameID))
                    return "AvatarFrameID: integer expected";
            return null;
        };

        /**
         * Creates a HHDZ_Richest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_HHDZ.HHDZ_Richest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_HHDZ.HHDZ_Richest} HHDZ_Richest
         */
        HHDZ_Richest.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_HHDZ.HHDZ_Richest)
                return object;
            var message = new $root.GameMsg_HHDZ.HHDZ_Richest();
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
         * Creates a plain object from a HHDZ_Richest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_HHDZ.HHDZ_Richest
         * @static
         * @param {GameMsg_HHDZ.HHDZ_Richest} message HHDZ_Richest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        HHDZ_Richest.toObject = function toObject(message, options) {
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
         * Converts this HHDZ_Richest to JSON.
         * @function toJSON
         * @memberof GameMsg_HHDZ.HHDZ_Richest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        HHDZ_Richest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return HHDZ_Richest;
    })();

    GameMsg_HHDZ.HHDZ_LuckyStarList = (function() {

        /**
         * Properties of a HHDZ_LuckyStarList.
         * @memberof GameMsg_HHDZ
         * @interface IHHDZ_LuckyStarList
         * @property {Array.<GameMsg_HHDZ.IHHDZ_LuckyStar>|null} [LuckyStarList] HHDZ_LuckyStarList LuckyStarList
         */

        /**
         * Constructs a new HHDZ_LuckyStarList.
         * @memberof GameMsg_HHDZ
         * @classdesc Represents a HHDZ_LuckyStarList.
         * @implements IHHDZ_LuckyStarList
         * @constructor
         * @param {GameMsg_HHDZ.IHHDZ_LuckyStarList=} [properties] Properties to set
         */
        function HHDZ_LuckyStarList(properties) {
            this.LuckyStarList = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * HHDZ_LuckyStarList LuckyStarList.
         * @member {Array.<GameMsg_HHDZ.IHHDZ_LuckyStar>} LuckyStarList
         * @memberof GameMsg_HHDZ.HHDZ_LuckyStarList
         * @instance
         */
        HHDZ_LuckyStarList.prototype.LuckyStarList = $util.emptyArray;

        /**
         * Creates a new HHDZ_LuckyStarList instance using the specified properties.
         * @function create
         * @memberof GameMsg_HHDZ.HHDZ_LuckyStarList
         * @static
         * @param {GameMsg_HHDZ.IHHDZ_LuckyStarList=} [properties] Properties to set
         * @returns {GameMsg_HHDZ.HHDZ_LuckyStarList} HHDZ_LuckyStarList instance
         */
        HHDZ_LuckyStarList.create = function create(properties) {
            return new HHDZ_LuckyStarList(properties);
        };

        /**
         * Encodes the specified HHDZ_LuckyStarList message. Does not implicitly {@link GameMsg_HHDZ.HHDZ_LuckyStarList.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_HHDZ.HHDZ_LuckyStarList
         * @static
         * @param {GameMsg_HHDZ.IHHDZ_LuckyStarList} message HHDZ_LuckyStarList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HHDZ_LuckyStarList.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.LuckyStarList != null && message.LuckyStarList.length)
                for (var i = 0; i < message.LuckyStarList.length; ++i)
                    $root.GameMsg_HHDZ.HHDZ_LuckyStar.encode(message.LuckyStarList[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified HHDZ_LuckyStarList message, length delimited. Does not implicitly {@link GameMsg_HHDZ.HHDZ_LuckyStarList.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_HHDZ.HHDZ_LuckyStarList
         * @static
         * @param {GameMsg_HHDZ.IHHDZ_LuckyStarList} message HHDZ_LuckyStarList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HHDZ_LuckyStarList.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a HHDZ_LuckyStarList message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_HHDZ.HHDZ_LuckyStarList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_HHDZ.HHDZ_LuckyStarList} HHDZ_LuckyStarList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HHDZ_LuckyStarList.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_HHDZ.HHDZ_LuckyStarList();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.LuckyStarList && message.LuckyStarList.length))
                        message.LuckyStarList = [];
                    message.LuckyStarList.push($root.GameMsg_HHDZ.HHDZ_LuckyStar.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a HHDZ_LuckyStarList message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_HHDZ.HHDZ_LuckyStarList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_HHDZ.HHDZ_LuckyStarList} HHDZ_LuckyStarList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HHDZ_LuckyStarList.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a HHDZ_LuckyStarList message.
         * @function verify
         * @memberof GameMsg_HHDZ.HHDZ_LuckyStarList
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        HHDZ_LuckyStarList.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.LuckyStarList != null && message.hasOwnProperty("LuckyStarList")) {
                if (!Array.isArray(message.LuckyStarList))
                    return "LuckyStarList: array expected";
                for (var i = 0; i < message.LuckyStarList.length; ++i) {
                    var error = $root.GameMsg_HHDZ.HHDZ_LuckyStar.verify(message.LuckyStarList[i]);
                    if (error)
                        return "LuckyStarList." + error;
                }
            }
            return null;
        };

        /**
         * Creates a HHDZ_LuckyStarList message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_HHDZ.HHDZ_LuckyStarList
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_HHDZ.HHDZ_LuckyStarList} HHDZ_LuckyStarList
         */
        HHDZ_LuckyStarList.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_HHDZ.HHDZ_LuckyStarList)
                return object;
            var message = new $root.GameMsg_HHDZ.HHDZ_LuckyStarList();
            if (object.LuckyStarList) {
                if (!Array.isArray(object.LuckyStarList))
                    throw TypeError(".GameMsg_HHDZ.HHDZ_LuckyStarList.LuckyStarList: array expected");
                message.LuckyStarList = [];
                for (var i = 0; i < object.LuckyStarList.length; ++i) {
                    if (typeof object.LuckyStarList[i] !== "object")
                        throw TypeError(".GameMsg_HHDZ.HHDZ_LuckyStarList.LuckyStarList: object expected");
                    message.LuckyStarList[i] = $root.GameMsg_HHDZ.HHDZ_LuckyStar.fromObject(object.LuckyStarList[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a HHDZ_LuckyStarList message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_HHDZ.HHDZ_LuckyStarList
         * @static
         * @param {GameMsg_HHDZ.HHDZ_LuckyStarList} message HHDZ_LuckyStarList
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        HHDZ_LuckyStarList.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.LuckyStarList = [];
            if (message.LuckyStarList && message.LuckyStarList.length) {
                object.LuckyStarList = [];
                for (var j = 0; j < message.LuckyStarList.length; ++j)
                    object.LuckyStarList[j] = $root.GameMsg_HHDZ.HHDZ_LuckyStar.toObject(message.LuckyStarList[j], options);
            }
            return object;
        };

        /**
         * Converts this HHDZ_LuckyStarList to JSON.
         * @function toJSON
         * @memberof GameMsg_HHDZ.HHDZ_LuckyStarList
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        HHDZ_LuckyStarList.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return HHDZ_LuckyStarList;
    })();

    GameMsg_HHDZ.HHDZ_LuckyStar = (function() {

        /**
         * Properties of a HHDZ_LuckyStar.
         * @memberof GameMsg_HHDZ
         * @interface IHHDZ_LuckyStar
         * @property {number|null} [UserID] HHDZ_LuckyStar UserID
         * @property {number|null} [UserFaceID] HHDZ_LuckyStar UserFaceID
         * @property {number|null} [AvatarFrameID] HHDZ_LuckyStar AvatarFrameID
         */

        /**
         * Constructs a new HHDZ_LuckyStar.
         * @memberof GameMsg_HHDZ
         * @classdesc Represents a HHDZ_LuckyStar.
         * @implements IHHDZ_LuckyStar
         * @constructor
         * @param {GameMsg_HHDZ.IHHDZ_LuckyStar=} [properties] Properties to set
         */
        function HHDZ_LuckyStar(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * HHDZ_LuckyStar UserID.
         * @member {number} UserID
         * @memberof GameMsg_HHDZ.HHDZ_LuckyStar
         * @instance
         */
        HHDZ_LuckyStar.prototype.UserID = 0;

        /**
         * HHDZ_LuckyStar UserFaceID.
         * @member {number} UserFaceID
         * @memberof GameMsg_HHDZ.HHDZ_LuckyStar
         * @instance
         */
        HHDZ_LuckyStar.prototype.UserFaceID = 0;

        /**
         * HHDZ_LuckyStar AvatarFrameID.
         * @member {number} AvatarFrameID
         * @memberof GameMsg_HHDZ.HHDZ_LuckyStar
         * @instance
         */
        HHDZ_LuckyStar.prototype.AvatarFrameID = 0;

        /**
         * Creates a new HHDZ_LuckyStar instance using the specified properties.
         * @function create
         * @memberof GameMsg_HHDZ.HHDZ_LuckyStar
         * @static
         * @param {GameMsg_HHDZ.IHHDZ_LuckyStar=} [properties] Properties to set
         * @returns {GameMsg_HHDZ.HHDZ_LuckyStar} HHDZ_LuckyStar instance
         */
        HHDZ_LuckyStar.create = function create(properties) {
            return new HHDZ_LuckyStar(properties);
        };

        /**
         * Encodes the specified HHDZ_LuckyStar message. Does not implicitly {@link GameMsg_HHDZ.HHDZ_LuckyStar.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_HHDZ.HHDZ_LuckyStar
         * @static
         * @param {GameMsg_HHDZ.IHHDZ_LuckyStar} message HHDZ_LuckyStar message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HHDZ_LuckyStar.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.UserID);
            if (message.UserFaceID != null && message.hasOwnProperty("UserFaceID"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.UserFaceID);
            if (message.AvatarFrameID != null && message.hasOwnProperty("AvatarFrameID"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.AvatarFrameID);
            return writer;
        };

        /**
         * Encodes the specified HHDZ_LuckyStar message, length delimited. Does not implicitly {@link GameMsg_HHDZ.HHDZ_LuckyStar.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_HHDZ.HHDZ_LuckyStar
         * @static
         * @param {GameMsg_HHDZ.IHHDZ_LuckyStar} message HHDZ_LuckyStar message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HHDZ_LuckyStar.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a HHDZ_LuckyStar message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_HHDZ.HHDZ_LuckyStar
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_HHDZ.HHDZ_LuckyStar} HHDZ_LuckyStar
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HHDZ_LuckyStar.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_HHDZ.HHDZ_LuckyStar();
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
            return message;
        };

        /**
         * Decodes a HHDZ_LuckyStar message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_HHDZ.HHDZ_LuckyStar
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_HHDZ.HHDZ_LuckyStar} HHDZ_LuckyStar
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HHDZ_LuckyStar.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a HHDZ_LuckyStar message.
         * @function verify
         * @memberof GameMsg_HHDZ.HHDZ_LuckyStar
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        HHDZ_LuckyStar.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                if (!$util.isInteger(message.UserID))
                    return "UserID: integer expected";
            if (message.UserFaceID != null && message.hasOwnProperty("UserFaceID"))
                if (!$util.isInteger(message.UserFaceID))
                    return "UserFaceID: integer expected";
            if (message.AvatarFrameID != null && message.hasOwnProperty("AvatarFrameID"))
                if (!$util.isInteger(message.AvatarFrameID))
                    return "AvatarFrameID: integer expected";
            return null;
        };

        /**
         * Creates a HHDZ_LuckyStar message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_HHDZ.HHDZ_LuckyStar
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_HHDZ.HHDZ_LuckyStar} HHDZ_LuckyStar
         */
        HHDZ_LuckyStar.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_HHDZ.HHDZ_LuckyStar)
                return object;
            var message = new $root.GameMsg_HHDZ.HHDZ_LuckyStar();
            if (object.UserID != null)
                message.UserID = object.UserID | 0;
            if (object.UserFaceID != null)
                message.UserFaceID = object.UserFaceID | 0;
            if (object.AvatarFrameID != null)
                message.AvatarFrameID = object.AvatarFrameID | 0;
            return message;
        };

        /**
         * Creates a plain object from a HHDZ_LuckyStar message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_HHDZ.HHDZ_LuckyStar
         * @static
         * @param {GameMsg_HHDZ.HHDZ_LuckyStar} message HHDZ_LuckyStar
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        HHDZ_LuckyStar.toObject = function toObject(message, options) {
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
         * Converts this HHDZ_LuckyStar to JSON.
         * @function toJSON
         * @memberof GameMsg_HHDZ.HHDZ_LuckyStar
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        HHDZ_LuckyStar.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return HHDZ_LuckyStar;
    })();

    GameMsg_HHDZ.HHDZ_RoundID = (function() {

        /**
         * Properties of a HHDZ_RoundID.
         * @memberof GameMsg_HHDZ
         * @interface IHHDZ_RoundID
         * @property {number|null} [HungWin] HHDZ_RoundID HungWin
         * @property {number|null} [HeiWin] HHDZ_RoundID HeiWin
         * @property {number|null} [RoundID] HHDZ_RoundID RoundID
         */

        /**
         * Constructs a new HHDZ_RoundID.
         * @memberof GameMsg_HHDZ
         * @classdesc Represents a HHDZ_RoundID.
         * @implements IHHDZ_RoundID
         * @constructor
         * @param {GameMsg_HHDZ.IHHDZ_RoundID=} [properties] Properties to set
         */
        function HHDZ_RoundID(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * HHDZ_RoundID HungWin.
         * @member {number} HungWin
         * @memberof GameMsg_HHDZ.HHDZ_RoundID
         * @instance
         */
        HHDZ_RoundID.prototype.HungWin = 0;

        /**
         * HHDZ_RoundID HeiWin.
         * @member {number} HeiWin
         * @memberof GameMsg_HHDZ.HHDZ_RoundID
         * @instance
         */
        HHDZ_RoundID.prototype.HeiWin = 0;

        /**
         * HHDZ_RoundID RoundID.
         * @member {number} RoundID
         * @memberof GameMsg_HHDZ.HHDZ_RoundID
         * @instance
         */
        HHDZ_RoundID.prototype.RoundID = 0;

        /**
         * Creates a new HHDZ_RoundID instance using the specified properties.
         * @function create
         * @memberof GameMsg_HHDZ.HHDZ_RoundID
         * @static
         * @param {GameMsg_HHDZ.IHHDZ_RoundID=} [properties] Properties to set
         * @returns {GameMsg_HHDZ.HHDZ_RoundID} HHDZ_RoundID instance
         */
        HHDZ_RoundID.create = function create(properties) {
            return new HHDZ_RoundID(properties);
        };

        /**
         * Encodes the specified HHDZ_RoundID message. Does not implicitly {@link GameMsg_HHDZ.HHDZ_RoundID.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_HHDZ.HHDZ_RoundID
         * @static
         * @param {GameMsg_HHDZ.IHHDZ_RoundID} message HHDZ_RoundID message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HHDZ_RoundID.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.HungWin != null && message.hasOwnProperty("HungWin"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.HungWin);
            if (message.HeiWin != null && message.hasOwnProperty("HeiWin"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.HeiWin);
            if (message.RoundID != null && message.hasOwnProperty("RoundID"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.RoundID);
            return writer;
        };

        /**
         * Encodes the specified HHDZ_RoundID message, length delimited. Does not implicitly {@link GameMsg_HHDZ.HHDZ_RoundID.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_HHDZ.HHDZ_RoundID
         * @static
         * @param {GameMsg_HHDZ.IHHDZ_RoundID} message HHDZ_RoundID message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HHDZ_RoundID.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a HHDZ_RoundID message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_HHDZ.HHDZ_RoundID
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_HHDZ.HHDZ_RoundID} HHDZ_RoundID
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HHDZ_RoundID.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_HHDZ.HHDZ_RoundID();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.HungWin = reader.int32();
                    break;
                case 2:
                    message.HeiWin = reader.int32();
                    break;
                case 3:
                    message.RoundID = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a HHDZ_RoundID message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_HHDZ.HHDZ_RoundID
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_HHDZ.HHDZ_RoundID} HHDZ_RoundID
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HHDZ_RoundID.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a HHDZ_RoundID message.
         * @function verify
         * @memberof GameMsg_HHDZ.HHDZ_RoundID
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        HHDZ_RoundID.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.HungWin != null && message.hasOwnProperty("HungWin"))
                if (!$util.isInteger(message.HungWin))
                    return "HungWin: integer expected";
            if (message.HeiWin != null && message.hasOwnProperty("HeiWin"))
                if (!$util.isInteger(message.HeiWin))
                    return "HeiWin: integer expected";
            if (message.RoundID != null && message.hasOwnProperty("RoundID"))
                if (!$util.isInteger(message.RoundID))
                    return "RoundID: integer expected";
            return null;
        };

        /**
         * Creates a HHDZ_RoundID message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_HHDZ.HHDZ_RoundID
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_HHDZ.HHDZ_RoundID} HHDZ_RoundID
         */
        HHDZ_RoundID.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_HHDZ.HHDZ_RoundID)
                return object;
            var message = new $root.GameMsg_HHDZ.HHDZ_RoundID();
            if (object.HungWin != null)
                message.HungWin = object.HungWin | 0;
            if (object.HeiWin != null)
                message.HeiWin = object.HeiWin | 0;
            if (object.RoundID != null)
                message.RoundID = object.RoundID | 0;
            return message;
        };

        /**
         * Creates a plain object from a HHDZ_RoundID message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_HHDZ.HHDZ_RoundID
         * @static
         * @param {GameMsg_HHDZ.HHDZ_RoundID} message HHDZ_RoundID
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        HHDZ_RoundID.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.HungWin = 0;
                object.HeiWin = 0;
                object.RoundID = 0;
            }
            if (message.HungWin != null && message.hasOwnProperty("HungWin"))
                object.HungWin = message.HungWin;
            if (message.HeiWin != null && message.hasOwnProperty("HeiWin"))
                object.HeiWin = message.HeiWin;
            if (message.RoundID != null && message.hasOwnProperty("RoundID"))
                object.RoundID = message.RoundID;
            return object;
        };

        /**
         * Converts this HHDZ_RoundID to JSON.
         * @function toJSON
         * @memberof GameMsg_HHDZ.HHDZ_RoundID
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        HHDZ_RoundID.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return HHDZ_RoundID;
    })();

    GameMsg_HHDZ.HHDZ_FapaiFirstCards = (function() {

        /**
         * Properties of a HHDZ_FapaiFirstCards.
         * @memberof GameMsg_HHDZ
         * @interface IHHDZ_FapaiFirstCards
         * @property {Array.<GameMsg_HHDZ.IHHDZ_Poker>|null} [HungPoker] HHDZ_FapaiFirstCards HungPoker
         * @property {Array.<GameMsg_HHDZ.IHHDZ_Poker>|null} [HeiPoker] HHDZ_FapaiFirstCards HeiPoker
         */

        /**
         * Constructs a new HHDZ_FapaiFirstCards.
         * @memberof GameMsg_HHDZ
         * @classdesc Represents a HHDZ_FapaiFirstCards.
         * @implements IHHDZ_FapaiFirstCards
         * @constructor
         * @param {GameMsg_HHDZ.IHHDZ_FapaiFirstCards=} [properties] Properties to set
         */
        function HHDZ_FapaiFirstCards(properties) {
            this.HungPoker = [];
            this.HeiPoker = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * HHDZ_FapaiFirstCards HungPoker.
         * @member {Array.<GameMsg_HHDZ.IHHDZ_Poker>} HungPoker
         * @memberof GameMsg_HHDZ.HHDZ_FapaiFirstCards
         * @instance
         */
        HHDZ_FapaiFirstCards.prototype.HungPoker = $util.emptyArray;

        /**
         * HHDZ_FapaiFirstCards HeiPoker.
         * @member {Array.<GameMsg_HHDZ.IHHDZ_Poker>} HeiPoker
         * @memberof GameMsg_HHDZ.HHDZ_FapaiFirstCards
         * @instance
         */
        HHDZ_FapaiFirstCards.prototype.HeiPoker = $util.emptyArray;

        /**
         * Creates a new HHDZ_FapaiFirstCards instance using the specified properties.
         * @function create
         * @memberof GameMsg_HHDZ.HHDZ_FapaiFirstCards
         * @static
         * @param {GameMsg_HHDZ.IHHDZ_FapaiFirstCards=} [properties] Properties to set
         * @returns {GameMsg_HHDZ.HHDZ_FapaiFirstCards} HHDZ_FapaiFirstCards instance
         */
        HHDZ_FapaiFirstCards.create = function create(properties) {
            return new HHDZ_FapaiFirstCards(properties);
        };

        /**
         * Encodes the specified HHDZ_FapaiFirstCards message. Does not implicitly {@link GameMsg_HHDZ.HHDZ_FapaiFirstCards.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_HHDZ.HHDZ_FapaiFirstCards
         * @static
         * @param {GameMsg_HHDZ.IHHDZ_FapaiFirstCards} message HHDZ_FapaiFirstCards message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HHDZ_FapaiFirstCards.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.HungPoker != null && message.HungPoker.length)
                for (var i = 0; i < message.HungPoker.length; ++i)
                    $root.GameMsg_HHDZ.HHDZ_Poker.encode(message.HungPoker[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.HeiPoker != null && message.HeiPoker.length)
                for (var i = 0; i < message.HeiPoker.length; ++i)
                    $root.GameMsg_HHDZ.HHDZ_Poker.encode(message.HeiPoker[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified HHDZ_FapaiFirstCards message, length delimited. Does not implicitly {@link GameMsg_HHDZ.HHDZ_FapaiFirstCards.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_HHDZ.HHDZ_FapaiFirstCards
         * @static
         * @param {GameMsg_HHDZ.IHHDZ_FapaiFirstCards} message HHDZ_FapaiFirstCards message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HHDZ_FapaiFirstCards.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a HHDZ_FapaiFirstCards message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_HHDZ.HHDZ_FapaiFirstCards
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_HHDZ.HHDZ_FapaiFirstCards} HHDZ_FapaiFirstCards
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HHDZ_FapaiFirstCards.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_HHDZ.HHDZ_FapaiFirstCards();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.HungPoker && message.HungPoker.length))
                        message.HungPoker = [];
                    message.HungPoker.push($root.GameMsg_HHDZ.HHDZ_Poker.decode(reader, reader.uint32()));
                    break;
                case 2:
                    if (!(message.HeiPoker && message.HeiPoker.length))
                        message.HeiPoker = [];
                    message.HeiPoker.push($root.GameMsg_HHDZ.HHDZ_Poker.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a HHDZ_FapaiFirstCards message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_HHDZ.HHDZ_FapaiFirstCards
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_HHDZ.HHDZ_FapaiFirstCards} HHDZ_FapaiFirstCards
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HHDZ_FapaiFirstCards.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a HHDZ_FapaiFirstCards message.
         * @function verify
         * @memberof GameMsg_HHDZ.HHDZ_FapaiFirstCards
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        HHDZ_FapaiFirstCards.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.HungPoker != null && message.hasOwnProperty("HungPoker")) {
                if (!Array.isArray(message.HungPoker))
                    return "HungPoker: array expected";
                for (var i = 0; i < message.HungPoker.length; ++i) {
                    var error = $root.GameMsg_HHDZ.HHDZ_Poker.verify(message.HungPoker[i]);
                    if (error)
                        return "HungPoker." + error;
                }
            }
            if (message.HeiPoker != null && message.hasOwnProperty("HeiPoker")) {
                if (!Array.isArray(message.HeiPoker))
                    return "HeiPoker: array expected";
                for (var i = 0; i < message.HeiPoker.length; ++i) {
                    var error = $root.GameMsg_HHDZ.HHDZ_Poker.verify(message.HeiPoker[i]);
                    if (error)
                        return "HeiPoker." + error;
                }
            }
            return null;
        };

        /**
         * Creates a HHDZ_FapaiFirstCards message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_HHDZ.HHDZ_FapaiFirstCards
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_HHDZ.HHDZ_FapaiFirstCards} HHDZ_FapaiFirstCards
         */
        HHDZ_FapaiFirstCards.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_HHDZ.HHDZ_FapaiFirstCards)
                return object;
            var message = new $root.GameMsg_HHDZ.HHDZ_FapaiFirstCards();
            if (object.HungPoker) {
                if (!Array.isArray(object.HungPoker))
                    throw TypeError(".GameMsg_HHDZ.HHDZ_FapaiFirstCards.HungPoker: array expected");
                message.HungPoker = [];
                for (var i = 0; i < object.HungPoker.length; ++i) {
                    if (typeof object.HungPoker[i] !== "object")
                        throw TypeError(".GameMsg_HHDZ.HHDZ_FapaiFirstCards.HungPoker: object expected");
                    message.HungPoker[i] = $root.GameMsg_HHDZ.HHDZ_Poker.fromObject(object.HungPoker[i]);
                }
            }
            if (object.HeiPoker) {
                if (!Array.isArray(object.HeiPoker))
                    throw TypeError(".GameMsg_HHDZ.HHDZ_FapaiFirstCards.HeiPoker: array expected");
                message.HeiPoker = [];
                for (var i = 0; i < object.HeiPoker.length; ++i) {
                    if (typeof object.HeiPoker[i] !== "object")
                        throw TypeError(".GameMsg_HHDZ.HHDZ_FapaiFirstCards.HeiPoker: object expected");
                    message.HeiPoker[i] = $root.GameMsg_HHDZ.HHDZ_Poker.fromObject(object.HeiPoker[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a HHDZ_FapaiFirstCards message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_HHDZ.HHDZ_FapaiFirstCards
         * @static
         * @param {GameMsg_HHDZ.HHDZ_FapaiFirstCards} message HHDZ_FapaiFirstCards
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        HHDZ_FapaiFirstCards.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.HungPoker = [];
                object.HeiPoker = [];
            }
            if (message.HungPoker && message.HungPoker.length) {
                object.HungPoker = [];
                for (var j = 0; j < message.HungPoker.length; ++j)
                    object.HungPoker[j] = $root.GameMsg_HHDZ.HHDZ_Poker.toObject(message.HungPoker[j], options);
            }
            if (message.HeiPoker && message.HeiPoker.length) {
                object.HeiPoker = [];
                for (var j = 0; j < message.HeiPoker.length; ++j)
                    object.HeiPoker[j] = $root.GameMsg_HHDZ.HHDZ_Poker.toObject(message.HeiPoker[j], options);
            }
            return object;
        };

        /**
         * Converts this HHDZ_FapaiFirstCards to JSON.
         * @function toJSON
         * @memberof GameMsg_HHDZ.HHDZ_FapaiFirstCards
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        HHDZ_FapaiFirstCards.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return HHDZ_FapaiFirstCards;
    })();

    GameMsg_HHDZ.Http_HHDZ_GameInfo = (function() {

        /**
         * Properties of a Http_HHDZ_GameInfo.
         * @memberof GameMsg_HHDZ
         * @interface IHttp_HHDZ_GameInfo
         * @property {Array.<GameMsg_HHDZ.IHttp_HHDZ_TableList>|null} [TableList] Http_HHDZ_GameInfo TableList
         */

        /**
         * Constructs a new Http_HHDZ_GameInfo.
         * @memberof GameMsg_HHDZ
         * @classdesc Represents a Http_HHDZ_GameInfo.
         * @implements IHttp_HHDZ_GameInfo
         * @constructor
         * @param {GameMsg_HHDZ.IHttp_HHDZ_GameInfo=} [properties] Properties to set
         */
        function Http_HHDZ_GameInfo(properties) {
            this.TableList = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Http_HHDZ_GameInfo TableList.
         * @member {Array.<GameMsg_HHDZ.IHttp_HHDZ_TableList>} TableList
         * @memberof GameMsg_HHDZ.Http_HHDZ_GameInfo
         * @instance
         */
        Http_HHDZ_GameInfo.prototype.TableList = $util.emptyArray;

        /**
         * Creates a new Http_HHDZ_GameInfo instance using the specified properties.
         * @function create
         * @memberof GameMsg_HHDZ.Http_HHDZ_GameInfo
         * @static
         * @param {GameMsg_HHDZ.IHttp_HHDZ_GameInfo=} [properties] Properties to set
         * @returns {GameMsg_HHDZ.Http_HHDZ_GameInfo} Http_HHDZ_GameInfo instance
         */
        Http_HHDZ_GameInfo.create = function create(properties) {
            return new Http_HHDZ_GameInfo(properties);
        };

        /**
         * Encodes the specified Http_HHDZ_GameInfo message. Does not implicitly {@link GameMsg_HHDZ.Http_HHDZ_GameInfo.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_HHDZ.Http_HHDZ_GameInfo
         * @static
         * @param {GameMsg_HHDZ.IHttp_HHDZ_GameInfo} message Http_HHDZ_GameInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Http_HHDZ_GameInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.TableList != null && message.TableList.length)
                for (var i = 0; i < message.TableList.length; ++i)
                    $root.GameMsg_HHDZ.Http_HHDZ_TableList.encode(message.TableList[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Http_HHDZ_GameInfo message, length delimited. Does not implicitly {@link GameMsg_HHDZ.Http_HHDZ_GameInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_HHDZ.Http_HHDZ_GameInfo
         * @static
         * @param {GameMsg_HHDZ.IHttp_HHDZ_GameInfo} message Http_HHDZ_GameInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Http_HHDZ_GameInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Http_HHDZ_GameInfo message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_HHDZ.Http_HHDZ_GameInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_HHDZ.Http_HHDZ_GameInfo} Http_HHDZ_GameInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Http_HHDZ_GameInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_HHDZ.Http_HHDZ_GameInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.TableList && message.TableList.length))
                        message.TableList = [];
                    message.TableList.push($root.GameMsg_HHDZ.Http_HHDZ_TableList.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Http_HHDZ_GameInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_HHDZ.Http_HHDZ_GameInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_HHDZ.Http_HHDZ_GameInfo} Http_HHDZ_GameInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Http_HHDZ_GameInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Http_HHDZ_GameInfo message.
         * @function verify
         * @memberof GameMsg_HHDZ.Http_HHDZ_GameInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Http_HHDZ_GameInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.TableList != null && message.hasOwnProperty("TableList")) {
                if (!Array.isArray(message.TableList))
                    return "TableList: array expected";
                for (var i = 0; i < message.TableList.length; ++i) {
                    var error = $root.GameMsg_HHDZ.Http_HHDZ_TableList.verify(message.TableList[i]);
                    if (error)
                        return "TableList." + error;
                }
            }
            return null;
        };

        /**
         * Creates a Http_HHDZ_GameInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_HHDZ.Http_HHDZ_GameInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_HHDZ.Http_HHDZ_GameInfo} Http_HHDZ_GameInfo
         */
        Http_HHDZ_GameInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_HHDZ.Http_HHDZ_GameInfo)
                return object;
            var message = new $root.GameMsg_HHDZ.Http_HHDZ_GameInfo();
            if (object.TableList) {
                if (!Array.isArray(object.TableList))
                    throw TypeError(".GameMsg_HHDZ.Http_HHDZ_GameInfo.TableList: array expected");
                message.TableList = [];
                for (var i = 0; i < object.TableList.length; ++i) {
                    if (typeof object.TableList[i] !== "object")
                        throw TypeError(".GameMsg_HHDZ.Http_HHDZ_GameInfo.TableList: object expected");
                    message.TableList[i] = $root.GameMsg_HHDZ.Http_HHDZ_TableList.fromObject(object.TableList[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a Http_HHDZ_GameInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_HHDZ.Http_HHDZ_GameInfo
         * @static
         * @param {GameMsg_HHDZ.Http_HHDZ_GameInfo} message Http_HHDZ_GameInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Http_HHDZ_GameInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.TableList = [];
            if (message.TableList && message.TableList.length) {
                object.TableList = [];
                for (var j = 0; j < message.TableList.length; ++j)
                    object.TableList[j] = $root.GameMsg_HHDZ.Http_HHDZ_TableList.toObject(message.TableList[j], options);
            }
            return object;
        };

        /**
         * Converts this Http_HHDZ_GameInfo to JSON.
         * @function toJSON
         * @memberof GameMsg_HHDZ.Http_HHDZ_GameInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Http_HHDZ_GameInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Http_HHDZ_GameInfo;
    })();

    GameMsg_HHDZ.Http_HHDZ_TableList = (function() {

        /**
         * Properties of a Http_HHDZ_TableList.
         * @memberof GameMsg_HHDZ
         * @interface IHttp_HHDZ_TableList
         * @property {number|null} [TableNo] Http_HHDZ_TableList TableNo
         * @property {number|null} [Status] Http_HHDZ_TableList Status
         * @property {number|null} [GameUserCount] Http_HHDZ_TableList GameUserCount
         * @property {number|null} [RobotCount] Http_HHDZ_TableList RobotCount
         * @property {number|Long|null} [SumEarnAmount] Http_HHDZ_TableList SumEarnAmount
         * @property {number|null} [LastEarnAmount] Http_HHDZ_TableList LastEarnAmount
         * @property {number|Long|null} [PoolCurrentAmount] Http_HHDZ_TableList PoolCurrentAmount
         * @property {number|Long|null} [SysTaxIncome] Http_HHDZ_TableList SysTaxIncome
         */

        /**
         * Constructs a new Http_HHDZ_TableList.
         * @memberof GameMsg_HHDZ
         * @classdesc Represents a Http_HHDZ_TableList.
         * @implements IHttp_HHDZ_TableList
         * @constructor
         * @param {GameMsg_HHDZ.IHttp_HHDZ_TableList=} [properties] Properties to set
         */
        function Http_HHDZ_TableList(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Http_HHDZ_TableList TableNo.
         * @member {number} TableNo
         * @memberof GameMsg_HHDZ.Http_HHDZ_TableList
         * @instance
         */
        Http_HHDZ_TableList.prototype.TableNo = 0;

        /**
         * Http_HHDZ_TableList Status.
         * @member {number} Status
         * @memberof GameMsg_HHDZ.Http_HHDZ_TableList
         * @instance
         */
        Http_HHDZ_TableList.prototype.Status = 0;

        /**
         * Http_HHDZ_TableList GameUserCount.
         * @member {number} GameUserCount
         * @memberof GameMsg_HHDZ.Http_HHDZ_TableList
         * @instance
         */
        Http_HHDZ_TableList.prototype.GameUserCount = 0;

        /**
         * Http_HHDZ_TableList RobotCount.
         * @member {number} RobotCount
         * @memberof GameMsg_HHDZ.Http_HHDZ_TableList
         * @instance
         */
        Http_HHDZ_TableList.prototype.RobotCount = 0;

        /**
         * Http_HHDZ_TableList SumEarnAmount.
         * @member {number|Long} SumEarnAmount
         * @memberof GameMsg_HHDZ.Http_HHDZ_TableList
         * @instance
         */
        Http_HHDZ_TableList.prototype.SumEarnAmount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Http_HHDZ_TableList LastEarnAmount.
         * @member {number} LastEarnAmount
         * @memberof GameMsg_HHDZ.Http_HHDZ_TableList
         * @instance
         */
        Http_HHDZ_TableList.prototype.LastEarnAmount = 0;

        /**
         * Http_HHDZ_TableList PoolCurrentAmount.
         * @member {number|Long} PoolCurrentAmount
         * @memberof GameMsg_HHDZ.Http_HHDZ_TableList
         * @instance
         */
        Http_HHDZ_TableList.prototype.PoolCurrentAmount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Http_HHDZ_TableList SysTaxIncome.
         * @member {number|Long} SysTaxIncome
         * @memberof GameMsg_HHDZ.Http_HHDZ_TableList
         * @instance
         */
        Http_HHDZ_TableList.prototype.SysTaxIncome = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new Http_HHDZ_TableList instance using the specified properties.
         * @function create
         * @memberof GameMsg_HHDZ.Http_HHDZ_TableList
         * @static
         * @param {GameMsg_HHDZ.IHttp_HHDZ_TableList=} [properties] Properties to set
         * @returns {GameMsg_HHDZ.Http_HHDZ_TableList} Http_HHDZ_TableList instance
         */
        Http_HHDZ_TableList.create = function create(properties) {
            return new Http_HHDZ_TableList(properties);
        };

        /**
         * Encodes the specified Http_HHDZ_TableList message. Does not implicitly {@link GameMsg_HHDZ.Http_HHDZ_TableList.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_HHDZ.Http_HHDZ_TableList
         * @static
         * @param {GameMsg_HHDZ.IHttp_HHDZ_TableList} message Http_HHDZ_TableList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Http_HHDZ_TableList.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.TableNo != null && message.hasOwnProperty("TableNo"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.TableNo);
            if (message.Status != null && message.hasOwnProperty("Status"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.Status);
            if (message.GameUserCount != null && message.hasOwnProperty("GameUserCount"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.GameUserCount);
            if (message.RobotCount != null && message.hasOwnProperty("RobotCount"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.RobotCount);
            if (message.SumEarnAmount != null && message.hasOwnProperty("SumEarnAmount"))
                writer.uint32(/* id 5, wireType 0 =*/40).int64(message.SumEarnAmount);
            if (message.LastEarnAmount != null && message.hasOwnProperty("LastEarnAmount"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.LastEarnAmount);
            if (message.PoolCurrentAmount != null && message.hasOwnProperty("PoolCurrentAmount"))
                writer.uint32(/* id 7, wireType 0 =*/56).int64(message.PoolCurrentAmount);
            if (message.SysTaxIncome != null && message.hasOwnProperty("SysTaxIncome"))
                writer.uint32(/* id 8, wireType 0 =*/64).int64(message.SysTaxIncome);
            return writer;
        };

        /**
         * Encodes the specified Http_HHDZ_TableList message, length delimited. Does not implicitly {@link GameMsg_HHDZ.Http_HHDZ_TableList.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_HHDZ.Http_HHDZ_TableList
         * @static
         * @param {GameMsg_HHDZ.IHttp_HHDZ_TableList} message Http_HHDZ_TableList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Http_HHDZ_TableList.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Http_HHDZ_TableList message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_HHDZ.Http_HHDZ_TableList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_HHDZ.Http_HHDZ_TableList} Http_HHDZ_TableList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Http_HHDZ_TableList.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_HHDZ.Http_HHDZ_TableList();
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
            return message;
        };

        /**
         * Decodes a Http_HHDZ_TableList message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_HHDZ.Http_HHDZ_TableList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_HHDZ.Http_HHDZ_TableList} Http_HHDZ_TableList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Http_HHDZ_TableList.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Http_HHDZ_TableList message.
         * @function verify
         * @memberof GameMsg_HHDZ.Http_HHDZ_TableList
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Http_HHDZ_TableList.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.TableNo != null && message.hasOwnProperty("TableNo"))
                if (!$util.isInteger(message.TableNo))
                    return "TableNo: integer expected";
            if (message.Status != null && message.hasOwnProperty("Status"))
                if (!$util.isInteger(message.Status))
                    return "Status: integer expected";
            if (message.GameUserCount != null && message.hasOwnProperty("GameUserCount"))
                if (!$util.isInteger(message.GameUserCount))
                    return "GameUserCount: integer expected";
            if (message.RobotCount != null && message.hasOwnProperty("RobotCount"))
                if (!$util.isInteger(message.RobotCount))
                    return "RobotCount: integer expected";
            if (message.SumEarnAmount != null && message.hasOwnProperty("SumEarnAmount"))
                if (!$util.isInteger(message.SumEarnAmount) && !(message.SumEarnAmount && $util.isInteger(message.SumEarnAmount.low) && $util.isInteger(message.SumEarnAmount.high)))
                    return "SumEarnAmount: integer|Long expected";
            if (message.LastEarnAmount != null && message.hasOwnProperty("LastEarnAmount"))
                if (!$util.isInteger(message.LastEarnAmount))
                    return "LastEarnAmount: integer expected";
            if (message.PoolCurrentAmount != null && message.hasOwnProperty("PoolCurrentAmount"))
                if (!$util.isInteger(message.PoolCurrentAmount) && !(message.PoolCurrentAmount && $util.isInteger(message.PoolCurrentAmount.low) && $util.isInteger(message.PoolCurrentAmount.high)))
                    return "PoolCurrentAmount: integer|Long expected";
            if (message.SysTaxIncome != null && message.hasOwnProperty("SysTaxIncome"))
                if (!$util.isInteger(message.SysTaxIncome) && !(message.SysTaxIncome && $util.isInteger(message.SysTaxIncome.low) && $util.isInteger(message.SysTaxIncome.high)))
                    return "SysTaxIncome: integer|Long expected";
            return null;
        };

        /**
         * Creates a Http_HHDZ_TableList message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_HHDZ.Http_HHDZ_TableList
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_HHDZ.Http_HHDZ_TableList} Http_HHDZ_TableList
         */
        Http_HHDZ_TableList.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_HHDZ.Http_HHDZ_TableList)
                return object;
            var message = new $root.GameMsg_HHDZ.Http_HHDZ_TableList();
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
         * Creates a plain object from a Http_HHDZ_TableList message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_HHDZ.Http_HHDZ_TableList
         * @static
         * @param {GameMsg_HHDZ.Http_HHDZ_TableList} message Http_HHDZ_TableList
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Http_HHDZ_TableList.toObject = function toObject(message, options) {
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
         * Converts this Http_HHDZ_TableList to JSON.
         * @function toJSON
         * @memberof GameMsg_HHDZ.Http_HHDZ_TableList
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Http_HHDZ_TableList.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Http_HHDZ_TableList;
    })();

    GameMsg_HHDZ.Http_HHDZ_BetBlackDetail = (function() {

        /**
         * Properties of a Http_HHDZ_BetBlackDetail.
         * @memberof GameMsg_HHDZ
         * @interface IHttp_HHDZ_BetBlackDetail
         * @property {string|null} [BlackUserList] Http_HHDZ_BetBlackDetail BlackUserList
         */

        /**
         * Constructs a new Http_HHDZ_BetBlackDetail.
         * @memberof GameMsg_HHDZ
         * @classdesc Represents a Http_HHDZ_BetBlackDetail.
         * @implements IHttp_HHDZ_BetBlackDetail
         * @constructor
         * @param {GameMsg_HHDZ.IHttp_HHDZ_BetBlackDetail=} [properties] Properties to set
         */
        function Http_HHDZ_BetBlackDetail(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Http_HHDZ_BetBlackDetail BlackUserList.
         * @member {string} BlackUserList
         * @memberof GameMsg_HHDZ.Http_HHDZ_BetBlackDetail
         * @instance
         */
        Http_HHDZ_BetBlackDetail.prototype.BlackUserList = "";

        /**
         * Creates a new Http_HHDZ_BetBlackDetail instance using the specified properties.
         * @function create
         * @memberof GameMsg_HHDZ.Http_HHDZ_BetBlackDetail
         * @static
         * @param {GameMsg_HHDZ.IHttp_HHDZ_BetBlackDetail=} [properties] Properties to set
         * @returns {GameMsg_HHDZ.Http_HHDZ_BetBlackDetail} Http_HHDZ_BetBlackDetail instance
         */
        Http_HHDZ_BetBlackDetail.create = function create(properties) {
            return new Http_HHDZ_BetBlackDetail(properties);
        };

        /**
         * Encodes the specified Http_HHDZ_BetBlackDetail message. Does not implicitly {@link GameMsg_HHDZ.Http_HHDZ_BetBlackDetail.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_HHDZ.Http_HHDZ_BetBlackDetail
         * @static
         * @param {GameMsg_HHDZ.IHttp_HHDZ_BetBlackDetail} message Http_HHDZ_BetBlackDetail message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Http_HHDZ_BetBlackDetail.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.BlackUserList != null && message.hasOwnProperty("BlackUserList"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.BlackUserList);
            return writer;
        };

        /**
         * Encodes the specified Http_HHDZ_BetBlackDetail message, length delimited. Does not implicitly {@link GameMsg_HHDZ.Http_HHDZ_BetBlackDetail.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_HHDZ.Http_HHDZ_BetBlackDetail
         * @static
         * @param {GameMsg_HHDZ.IHttp_HHDZ_BetBlackDetail} message Http_HHDZ_BetBlackDetail message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Http_HHDZ_BetBlackDetail.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Http_HHDZ_BetBlackDetail message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_HHDZ.Http_HHDZ_BetBlackDetail
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_HHDZ.Http_HHDZ_BetBlackDetail} Http_HHDZ_BetBlackDetail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Http_HHDZ_BetBlackDetail.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_HHDZ.Http_HHDZ_BetBlackDetail();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.BlackUserList = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Http_HHDZ_BetBlackDetail message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_HHDZ.Http_HHDZ_BetBlackDetail
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_HHDZ.Http_HHDZ_BetBlackDetail} Http_HHDZ_BetBlackDetail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Http_HHDZ_BetBlackDetail.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Http_HHDZ_BetBlackDetail message.
         * @function verify
         * @memberof GameMsg_HHDZ.Http_HHDZ_BetBlackDetail
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Http_HHDZ_BetBlackDetail.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.BlackUserList != null && message.hasOwnProperty("BlackUserList"))
                if (!$util.isString(message.BlackUserList))
                    return "BlackUserList: string expected";
            return null;
        };

        /**
         * Creates a Http_HHDZ_BetBlackDetail message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_HHDZ.Http_HHDZ_BetBlackDetail
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_HHDZ.Http_HHDZ_BetBlackDetail} Http_HHDZ_BetBlackDetail
         */
        Http_HHDZ_BetBlackDetail.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_HHDZ.Http_HHDZ_BetBlackDetail)
                return object;
            var message = new $root.GameMsg_HHDZ.Http_HHDZ_BetBlackDetail();
            if (object.BlackUserList != null)
                message.BlackUserList = String(object.BlackUserList);
            return message;
        };

        /**
         * Creates a plain object from a Http_HHDZ_BetBlackDetail message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_HHDZ.Http_HHDZ_BetBlackDetail
         * @static
         * @param {GameMsg_HHDZ.Http_HHDZ_BetBlackDetail} message Http_HHDZ_BetBlackDetail
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Http_HHDZ_BetBlackDetail.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.BlackUserList = "";
            if (message.BlackUserList != null && message.hasOwnProperty("BlackUserList"))
                object.BlackUserList = message.BlackUserList;
            return object;
        };

        /**
         * Converts this Http_HHDZ_BetBlackDetail to JSON.
         * @function toJSON
         * @memberof GameMsg_HHDZ.Http_HHDZ_BetBlackDetail
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Http_HHDZ_BetBlackDetail.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Http_HHDZ_BetBlackDetail;
    })();

    GameMsg_HHDZ.Http_HHDZ_TableDetail = (function() {

        /**
         * Properties of a Http_HHDZ_TableDetail.
         * @memberof GameMsg_HHDZ
         * @interface IHttp_HHDZ_TableDetail
         * @property {number|null} [TableNo] Http_HHDZ_TableDetail TableNo
         * @property {number|null} [Status] Http_HHDZ_TableDetail Status
         * @property {number|Long|null} [SumEarnAmount] Http_HHDZ_TableDetail SumEarnAmount
         * @property {number|null} [LastEarnAmount] Http_HHDZ_TableDetail LastEarnAmount
         * @property {number|Long|null} [PoolCurrentAmount] Http_HHDZ_TableDetail PoolCurrentAmount
         * @property {number|null} [GameUserCount] Http_HHDZ_TableDetail GameUserCount
         * @property {number|null} [RobotCount] Http_HHDZ_TableDetail RobotCount
         * @property {number|null} [PopWaterRate] Http_HHDZ_TableDetail PopWaterRate
         * @property {number|null} [ZhuangType] Http_HHDZ_TableDetail ZhuangType
         * @property {string|null} [ZhuangNickName] Http_HHDZ_TableDetail ZhuangNickName
         * @property {number|null} [ZhuangUserID] Http_HHDZ_TableDetail ZhuangUserID
         * @property {number|null} [ZhuangSurplusTotal] Http_HHDZ_TableDetail ZhuangSurplusTotal
         * @property {number|Long|null} [ZhuangCurrentMoneyAmount] Http_HHDZ_TableDetail ZhuangCurrentMoneyAmount
         * @property {number|Long|null} [ZhuangInitMoneyAmount] Http_HHDZ_TableDetail ZhuangInitMoneyAmount
         * @property {number|Long|null} [OpenResultHung] Http_HHDZ_TableDetail OpenResultHung
         * @property {number|Long|null} [OpenResultHei] Http_HHDZ_TableDetail OpenResultHei
         * @property {string|null} [CurentOpenResult] Http_HHDZ_TableDetail CurentOpenResult
         * @property {number|Long|null} [CurentOpenResultEarn] Http_HHDZ_TableDetail CurentOpenResultEarn
         * @property {Array.<GameMsg_HHDZ.IHttp_HHDZ_UserInfo>|null} [UserInfo] Http_HHDZ_TableDetail UserInfo
         * @property {number|Long|null} [SysTaxIncome] Http_HHDZ_TableDetail SysTaxIncome
         * @property {number|null} [BetTime] Http_HHDZ_TableDetail BetTime
         * @property {number|Long|null} [WinLine] Http_HHDZ_TableDetail WinLine
         * @property {number|Long|null} [RobotBetAmount] Http_HHDZ_TableDetail RobotBetAmount
         * @property {Array.<GameMsg_HHDZ.IHttp_HHDZ_UserInfo>|null} [LastGameUserBet] Http_HHDZ_TableDetail LastGameUserBet
         * @property {number|null} [HungWinRate] Http_HHDZ_TableDetail HungWinRate
         * @property {number|null} [PowerWinRate] Http_HHDZ_TableDetail PowerWinRate
         * @property {number|null} [HeiWinRate] Http_HHDZ_TableDetail HeiWinRate
         * @property {number|Long|null} [FanFengTarget] Http_HHDZ_TableDetail FanFengTarget
         * @property {number|Long|null} [FanFengComplete] Http_HHDZ_TableDetail FanFengComplete
         */

        /**
         * Constructs a new Http_HHDZ_TableDetail.
         * @memberof GameMsg_HHDZ
         * @classdesc Represents a Http_HHDZ_TableDetail.
         * @implements IHttp_HHDZ_TableDetail
         * @constructor
         * @param {GameMsg_HHDZ.IHttp_HHDZ_TableDetail=} [properties] Properties to set
         */
        function Http_HHDZ_TableDetail(properties) {
            this.UserInfo = [];
            this.LastGameUserBet = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Http_HHDZ_TableDetail TableNo.
         * @member {number} TableNo
         * @memberof GameMsg_HHDZ.Http_HHDZ_TableDetail
         * @instance
         */
        Http_HHDZ_TableDetail.prototype.TableNo = 0;

        /**
         * Http_HHDZ_TableDetail Status.
         * @member {number} Status
         * @memberof GameMsg_HHDZ.Http_HHDZ_TableDetail
         * @instance
         */
        Http_HHDZ_TableDetail.prototype.Status = 0;

        /**
         * Http_HHDZ_TableDetail SumEarnAmount.
         * @member {number|Long} SumEarnAmount
         * @memberof GameMsg_HHDZ.Http_HHDZ_TableDetail
         * @instance
         */
        Http_HHDZ_TableDetail.prototype.SumEarnAmount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Http_HHDZ_TableDetail LastEarnAmount.
         * @member {number} LastEarnAmount
         * @memberof GameMsg_HHDZ.Http_HHDZ_TableDetail
         * @instance
         */
        Http_HHDZ_TableDetail.prototype.LastEarnAmount = 0;

        /**
         * Http_HHDZ_TableDetail PoolCurrentAmount.
         * @member {number|Long} PoolCurrentAmount
         * @memberof GameMsg_HHDZ.Http_HHDZ_TableDetail
         * @instance
         */
        Http_HHDZ_TableDetail.prototype.PoolCurrentAmount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Http_HHDZ_TableDetail GameUserCount.
         * @member {number} GameUserCount
         * @memberof GameMsg_HHDZ.Http_HHDZ_TableDetail
         * @instance
         */
        Http_HHDZ_TableDetail.prototype.GameUserCount = 0;

        /**
         * Http_HHDZ_TableDetail RobotCount.
         * @member {number} RobotCount
         * @memberof GameMsg_HHDZ.Http_HHDZ_TableDetail
         * @instance
         */
        Http_HHDZ_TableDetail.prototype.RobotCount = 0;

        /**
         * Http_HHDZ_TableDetail PopWaterRate.
         * @member {number} PopWaterRate
         * @memberof GameMsg_HHDZ.Http_HHDZ_TableDetail
         * @instance
         */
        Http_HHDZ_TableDetail.prototype.PopWaterRate = 0;

        /**
         * Http_HHDZ_TableDetail ZhuangType.
         * @member {number} ZhuangType
         * @memberof GameMsg_HHDZ.Http_HHDZ_TableDetail
         * @instance
         */
        Http_HHDZ_TableDetail.prototype.ZhuangType = 0;

        /**
         * Http_HHDZ_TableDetail ZhuangNickName.
         * @member {string} ZhuangNickName
         * @memberof GameMsg_HHDZ.Http_HHDZ_TableDetail
         * @instance
         */
        Http_HHDZ_TableDetail.prototype.ZhuangNickName = "";

        /**
         * Http_HHDZ_TableDetail ZhuangUserID.
         * @member {number} ZhuangUserID
         * @memberof GameMsg_HHDZ.Http_HHDZ_TableDetail
         * @instance
         */
        Http_HHDZ_TableDetail.prototype.ZhuangUserID = 0;

        /**
         * Http_HHDZ_TableDetail ZhuangSurplusTotal.
         * @member {number} ZhuangSurplusTotal
         * @memberof GameMsg_HHDZ.Http_HHDZ_TableDetail
         * @instance
         */
        Http_HHDZ_TableDetail.prototype.ZhuangSurplusTotal = 0;

        /**
         * Http_HHDZ_TableDetail ZhuangCurrentMoneyAmount.
         * @member {number|Long} ZhuangCurrentMoneyAmount
         * @memberof GameMsg_HHDZ.Http_HHDZ_TableDetail
         * @instance
         */
        Http_HHDZ_TableDetail.prototype.ZhuangCurrentMoneyAmount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Http_HHDZ_TableDetail ZhuangInitMoneyAmount.
         * @member {number|Long} ZhuangInitMoneyAmount
         * @memberof GameMsg_HHDZ.Http_HHDZ_TableDetail
         * @instance
         */
        Http_HHDZ_TableDetail.prototype.ZhuangInitMoneyAmount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Http_HHDZ_TableDetail OpenResultHung.
         * @member {number|Long} OpenResultHung
         * @memberof GameMsg_HHDZ.Http_HHDZ_TableDetail
         * @instance
         */
        Http_HHDZ_TableDetail.prototype.OpenResultHung = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Http_HHDZ_TableDetail OpenResultHei.
         * @member {number|Long} OpenResultHei
         * @memberof GameMsg_HHDZ.Http_HHDZ_TableDetail
         * @instance
         */
        Http_HHDZ_TableDetail.prototype.OpenResultHei = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Http_HHDZ_TableDetail CurentOpenResult.
         * @member {string} CurentOpenResult
         * @memberof GameMsg_HHDZ.Http_HHDZ_TableDetail
         * @instance
         */
        Http_HHDZ_TableDetail.prototype.CurentOpenResult = "";

        /**
         * Http_HHDZ_TableDetail CurentOpenResultEarn.
         * @member {number|Long} CurentOpenResultEarn
         * @memberof GameMsg_HHDZ.Http_HHDZ_TableDetail
         * @instance
         */
        Http_HHDZ_TableDetail.prototype.CurentOpenResultEarn = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Http_HHDZ_TableDetail UserInfo.
         * @member {Array.<GameMsg_HHDZ.IHttp_HHDZ_UserInfo>} UserInfo
         * @memberof GameMsg_HHDZ.Http_HHDZ_TableDetail
         * @instance
         */
        Http_HHDZ_TableDetail.prototype.UserInfo = $util.emptyArray;

        /**
         * Http_HHDZ_TableDetail SysTaxIncome.
         * @member {number|Long} SysTaxIncome
         * @memberof GameMsg_HHDZ.Http_HHDZ_TableDetail
         * @instance
         */
        Http_HHDZ_TableDetail.prototype.SysTaxIncome = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Http_HHDZ_TableDetail BetTime.
         * @member {number} BetTime
         * @memberof GameMsg_HHDZ.Http_HHDZ_TableDetail
         * @instance
         */
        Http_HHDZ_TableDetail.prototype.BetTime = 0;

        /**
         * Http_HHDZ_TableDetail WinLine.
         * @member {number|Long} WinLine
         * @memberof GameMsg_HHDZ.Http_HHDZ_TableDetail
         * @instance
         */
        Http_HHDZ_TableDetail.prototype.WinLine = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Http_HHDZ_TableDetail RobotBetAmount.
         * @member {number|Long} RobotBetAmount
         * @memberof GameMsg_HHDZ.Http_HHDZ_TableDetail
         * @instance
         */
        Http_HHDZ_TableDetail.prototype.RobotBetAmount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Http_HHDZ_TableDetail LastGameUserBet.
         * @member {Array.<GameMsg_HHDZ.IHttp_HHDZ_UserInfo>} LastGameUserBet
         * @memberof GameMsg_HHDZ.Http_HHDZ_TableDetail
         * @instance
         */
        Http_HHDZ_TableDetail.prototype.LastGameUserBet = $util.emptyArray;

        /**
         * Http_HHDZ_TableDetail HungWinRate.
         * @member {number} HungWinRate
         * @memberof GameMsg_HHDZ.Http_HHDZ_TableDetail
         * @instance
         */
        Http_HHDZ_TableDetail.prototype.HungWinRate = 0;

        /**
         * Http_HHDZ_TableDetail PowerWinRate.
         * @member {number} PowerWinRate
         * @memberof GameMsg_HHDZ.Http_HHDZ_TableDetail
         * @instance
         */
        Http_HHDZ_TableDetail.prototype.PowerWinRate = 0;

        /**
         * Http_HHDZ_TableDetail HeiWinRate.
         * @member {number} HeiWinRate
         * @memberof GameMsg_HHDZ.Http_HHDZ_TableDetail
         * @instance
         */
        Http_HHDZ_TableDetail.prototype.HeiWinRate = 0;

        /**
         * Http_HHDZ_TableDetail FanFengTarget.
         * @member {number|Long} FanFengTarget
         * @memberof GameMsg_HHDZ.Http_HHDZ_TableDetail
         * @instance
         */
        Http_HHDZ_TableDetail.prototype.FanFengTarget = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Http_HHDZ_TableDetail FanFengComplete.
         * @member {number|Long} FanFengComplete
         * @memberof GameMsg_HHDZ.Http_HHDZ_TableDetail
         * @instance
         */
        Http_HHDZ_TableDetail.prototype.FanFengComplete = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new Http_HHDZ_TableDetail instance using the specified properties.
         * @function create
         * @memberof GameMsg_HHDZ.Http_HHDZ_TableDetail
         * @static
         * @param {GameMsg_HHDZ.IHttp_HHDZ_TableDetail=} [properties] Properties to set
         * @returns {GameMsg_HHDZ.Http_HHDZ_TableDetail} Http_HHDZ_TableDetail instance
         */
        Http_HHDZ_TableDetail.create = function create(properties) {
            return new Http_HHDZ_TableDetail(properties);
        };

        /**
         * Encodes the specified Http_HHDZ_TableDetail message. Does not implicitly {@link GameMsg_HHDZ.Http_HHDZ_TableDetail.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_HHDZ.Http_HHDZ_TableDetail
         * @static
         * @param {GameMsg_HHDZ.IHttp_HHDZ_TableDetail} message Http_HHDZ_TableDetail message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Http_HHDZ_TableDetail.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.TableNo != null && message.hasOwnProperty("TableNo"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.TableNo);
            if (message.Status != null && message.hasOwnProperty("Status"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.Status);
            if (message.SumEarnAmount != null && message.hasOwnProperty("SumEarnAmount"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.SumEarnAmount);
            if (message.LastEarnAmount != null && message.hasOwnProperty("LastEarnAmount"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.LastEarnAmount);
            if (message.PoolCurrentAmount != null && message.hasOwnProperty("PoolCurrentAmount"))
                writer.uint32(/* id 5, wireType 0 =*/40).int64(message.PoolCurrentAmount);
            if (message.GameUserCount != null && message.hasOwnProperty("GameUserCount"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.GameUserCount);
            if (message.RobotCount != null && message.hasOwnProperty("RobotCount"))
                writer.uint32(/* id 7, wireType 0 =*/56).int32(message.RobotCount);
            if (message.PopWaterRate != null && message.hasOwnProperty("PopWaterRate"))
                writer.uint32(/* id 8, wireType 0 =*/64).int32(message.PopWaterRate);
            if (message.ZhuangType != null && message.hasOwnProperty("ZhuangType"))
                writer.uint32(/* id 9, wireType 0 =*/72).int32(message.ZhuangType);
            if (message.ZhuangNickName != null && message.hasOwnProperty("ZhuangNickName"))
                writer.uint32(/* id 10, wireType 2 =*/82).string(message.ZhuangNickName);
            if (message.ZhuangUserID != null && message.hasOwnProperty("ZhuangUserID"))
                writer.uint32(/* id 11, wireType 0 =*/88).int32(message.ZhuangUserID);
            if (message.ZhuangSurplusTotal != null && message.hasOwnProperty("ZhuangSurplusTotal"))
                writer.uint32(/* id 12, wireType 0 =*/96).int32(message.ZhuangSurplusTotal);
            if (message.ZhuangCurrentMoneyAmount != null && message.hasOwnProperty("ZhuangCurrentMoneyAmount"))
                writer.uint32(/* id 13, wireType 0 =*/104).int64(message.ZhuangCurrentMoneyAmount);
            if (message.ZhuangInitMoneyAmount != null && message.hasOwnProperty("ZhuangInitMoneyAmount"))
                writer.uint32(/* id 14, wireType 0 =*/112).int64(message.ZhuangInitMoneyAmount);
            if (message.OpenResultHung != null && message.hasOwnProperty("OpenResultHung"))
                writer.uint32(/* id 15, wireType 0 =*/120).int64(message.OpenResultHung);
            if (message.OpenResultHei != null && message.hasOwnProperty("OpenResultHei"))
                writer.uint32(/* id 16, wireType 0 =*/128).int64(message.OpenResultHei);
            if (message.CurentOpenResult != null && message.hasOwnProperty("CurentOpenResult"))
                writer.uint32(/* id 17, wireType 2 =*/138).string(message.CurentOpenResult);
            if (message.CurentOpenResultEarn != null && message.hasOwnProperty("CurentOpenResultEarn"))
                writer.uint32(/* id 18, wireType 0 =*/144).int64(message.CurentOpenResultEarn);
            if (message.UserInfo != null && message.UserInfo.length)
                for (var i = 0; i < message.UserInfo.length; ++i)
                    $root.GameMsg_HHDZ.Http_HHDZ_UserInfo.encode(message.UserInfo[i], writer.uint32(/* id 19, wireType 2 =*/154).fork()).ldelim();
            if (message.SysTaxIncome != null && message.hasOwnProperty("SysTaxIncome"))
                writer.uint32(/* id 20, wireType 0 =*/160).int64(message.SysTaxIncome);
            if (message.BetTime != null && message.hasOwnProperty("BetTime"))
                writer.uint32(/* id 21, wireType 0 =*/168).int32(message.BetTime);
            if (message.WinLine != null && message.hasOwnProperty("WinLine"))
                writer.uint32(/* id 22, wireType 0 =*/176).int64(message.WinLine);
            if (message.RobotBetAmount != null && message.hasOwnProperty("RobotBetAmount"))
                writer.uint32(/* id 23, wireType 0 =*/184).int64(message.RobotBetAmount);
            if (message.LastGameUserBet != null && message.LastGameUserBet.length)
                for (var i = 0; i < message.LastGameUserBet.length; ++i)
                    $root.GameMsg_HHDZ.Http_HHDZ_UserInfo.encode(message.LastGameUserBet[i], writer.uint32(/* id 24, wireType 2 =*/194).fork()).ldelim();
            if (message.HungWinRate != null && message.hasOwnProperty("HungWinRate"))
                writer.uint32(/* id 25, wireType 0 =*/200).int32(message.HungWinRate);
            if (message.PowerWinRate != null && message.hasOwnProperty("PowerWinRate"))
                writer.uint32(/* id 26, wireType 0 =*/208).int32(message.PowerWinRate);
            if (message.HeiWinRate != null && message.hasOwnProperty("HeiWinRate"))
                writer.uint32(/* id 27, wireType 0 =*/216).int32(message.HeiWinRate);
            if (message.FanFengTarget != null && message.hasOwnProperty("FanFengTarget"))
                writer.uint32(/* id 28, wireType 0 =*/224).int64(message.FanFengTarget);
            if (message.FanFengComplete != null && message.hasOwnProperty("FanFengComplete"))
                writer.uint32(/* id 29, wireType 0 =*/232).int64(message.FanFengComplete);
            return writer;
        };

        /**
         * Encodes the specified Http_HHDZ_TableDetail message, length delimited. Does not implicitly {@link GameMsg_HHDZ.Http_HHDZ_TableDetail.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_HHDZ.Http_HHDZ_TableDetail
         * @static
         * @param {GameMsg_HHDZ.IHttp_HHDZ_TableDetail} message Http_HHDZ_TableDetail message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Http_HHDZ_TableDetail.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Http_HHDZ_TableDetail message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_HHDZ.Http_HHDZ_TableDetail
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_HHDZ.Http_HHDZ_TableDetail} Http_HHDZ_TableDetail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Http_HHDZ_TableDetail.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_HHDZ.Http_HHDZ_TableDetail();
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
                    message.OpenResultHung = reader.int64();
                    break;
                case 16:
                    message.OpenResultHei = reader.int64();
                    break;
                case 17:
                    message.CurentOpenResult = reader.string();
                    break;
                case 18:
                    message.CurentOpenResultEarn = reader.int64();
                    break;
                case 19:
                    if (!(message.UserInfo && message.UserInfo.length))
                        message.UserInfo = [];
                    message.UserInfo.push($root.GameMsg_HHDZ.Http_HHDZ_UserInfo.decode(reader, reader.uint32()));
                    break;
                case 20:
                    message.SysTaxIncome = reader.int64();
                    break;
                case 21:
                    message.BetTime = reader.int32();
                    break;
                case 22:
                    message.WinLine = reader.int64();
                    break;
                case 23:
                    message.RobotBetAmount = reader.int64();
                    break;
                case 24:
                    if (!(message.LastGameUserBet && message.LastGameUserBet.length))
                        message.LastGameUserBet = [];
                    message.LastGameUserBet.push($root.GameMsg_HHDZ.Http_HHDZ_UserInfo.decode(reader, reader.uint32()));
                    break;
                case 25:
                    message.HungWinRate = reader.int32();
                    break;
                case 26:
                    message.PowerWinRate = reader.int32();
                    break;
                case 27:
                    message.HeiWinRate = reader.int32();
                    break;
                case 28:
                    message.FanFengTarget = reader.int64();
                    break;
                case 29:
                    message.FanFengComplete = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Http_HHDZ_TableDetail message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_HHDZ.Http_HHDZ_TableDetail
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_HHDZ.Http_HHDZ_TableDetail} Http_HHDZ_TableDetail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Http_HHDZ_TableDetail.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Http_HHDZ_TableDetail message.
         * @function verify
         * @memberof GameMsg_HHDZ.Http_HHDZ_TableDetail
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Http_HHDZ_TableDetail.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.TableNo != null && message.hasOwnProperty("TableNo"))
                if (!$util.isInteger(message.TableNo))
                    return "TableNo: integer expected";
            if (message.Status != null && message.hasOwnProperty("Status"))
                if (!$util.isInteger(message.Status))
                    return "Status: integer expected";
            if (message.SumEarnAmount != null && message.hasOwnProperty("SumEarnAmount"))
                if (!$util.isInteger(message.SumEarnAmount) && !(message.SumEarnAmount && $util.isInteger(message.SumEarnAmount.low) && $util.isInteger(message.SumEarnAmount.high)))
                    return "SumEarnAmount: integer|Long expected";
            if (message.LastEarnAmount != null && message.hasOwnProperty("LastEarnAmount"))
                if (!$util.isInteger(message.LastEarnAmount))
                    return "LastEarnAmount: integer expected";
            if (message.PoolCurrentAmount != null && message.hasOwnProperty("PoolCurrentAmount"))
                if (!$util.isInteger(message.PoolCurrentAmount) && !(message.PoolCurrentAmount && $util.isInteger(message.PoolCurrentAmount.low) && $util.isInteger(message.PoolCurrentAmount.high)))
                    return "PoolCurrentAmount: integer|Long expected";
            if (message.GameUserCount != null && message.hasOwnProperty("GameUserCount"))
                if (!$util.isInteger(message.GameUserCount))
                    return "GameUserCount: integer expected";
            if (message.RobotCount != null && message.hasOwnProperty("RobotCount"))
                if (!$util.isInteger(message.RobotCount))
                    return "RobotCount: integer expected";
            if (message.PopWaterRate != null && message.hasOwnProperty("PopWaterRate"))
                if (!$util.isInteger(message.PopWaterRate))
                    return "PopWaterRate: integer expected";
            if (message.ZhuangType != null && message.hasOwnProperty("ZhuangType"))
                if (!$util.isInteger(message.ZhuangType))
                    return "ZhuangType: integer expected";
            if (message.ZhuangNickName != null && message.hasOwnProperty("ZhuangNickName"))
                if (!$util.isString(message.ZhuangNickName))
                    return "ZhuangNickName: string expected";
            if (message.ZhuangUserID != null && message.hasOwnProperty("ZhuangUserID"))
                if (!$util.isInteger(message.ZhuangUserID))
                    return "ZhuangUserID: integer expected";
            if (message.ZhuangSurplusTotal != null && message.hasOwnProperty("ZhuangSurplusTotal"))
                if (!$util.isInteger(message.ZhuangSurplusTotal))
                    return "ZhuangSurplusTotal: integer expected";
            if (message.ZhuangCurrentMoneyAmount != null && message.hasOwnProperty("ZhuangCurrentMoneyAmount"))
                if (!$util.isInteger(message.ZhuangCurrentMoneyAmount) && !(message.ZhuangCurrentMoneyAmount && $util.isInteger(message.ZhuangCurrentMoneyAmount.low) && $util.isInteger(message.ZhuangCurrentMoneyAmount.high)))
                    return "ZhuangCurrentMoneyAmount: integer|Long expected";
            if (message.ZhuangInitMoneyAmount != null && message.hasOwnProperty("ZhuangInitMoneyAmount"))
                if (!$util.isInteger(message.ZhuangInitMoneyAmount) && !(message.ZhuangInitMoneyAmount && $util.isInteger(message.ZhuangInitMoneyAmount.low) && $util.isInteger(message.ZhuangInitMoneyAmount.high)))
                    return "ZhuangInitMoneyAmount: integer|Long expected";
            if (message.OpenResultHung != null && message.hasOwnProperty("OpenResultHung"))
                if (!$util.isInteger(message.OpenResultHung) && !(message.OpenResultHung && $util.isInteger(message.OpenResultHung.low) && $util.isInteger(message.OpenResultHung.high)))
                    return "OpenResultHung: integer|Long expected";
            if (message.OpenResultHei != null && message.hasOwnProperty("OpenResultHei"))
                if (!$util.isInteger(message.OpenResultHei) && !(message.OpenResultHei && $util.isInteger(message.OpenResultHei.low) && $util.isInteger(message.OpenResultHei.high)))
                    return "OpenResultHei: integer|Long expected";
            if (message.CurentOpenResult != null && message.hasOwnProperty("CurentOpenResult"))
                if (!$util.isString(message.CurentOpenResult))
                    return "CurentOpenResult: string expected";
            if (message.CurentOpenResultEarn != null && message.hasOwnProperty("CurentOpenResultEarn"))
                if (!$util.isInteger(message.CurentOpenResultEarn) && !(message.CurentOpenResultEarn && $util.isInteger(message.CurentOpenResultEarn.low) && $util.isInteger(message.CurentOpenResultEarn.high)))
                    return "CurentOpenResultEarn: integer|Long expected";
            if (message.UserInfo != null && message.hasOwnProperty("UserInfo")) {
                if (!Array.isArray(message.UserInfo))
                    return "UserInfo: array expected";
                for (var i = 0; i < message.UserInfo.length; ++i) {
                    var error = $root.GameMsg_HHDZ.Http_HHDZ_UserInfo.verify(message.UserInfo[i]);
                    if (error)
                        return "UserInfo." + error;
                }
            }
            if (message.SysTaxIncome != null && message.hasOwnProperty("SysTaxIncome"))
                if (!$util.isInteger(message.SysTaxIncome) && !(message.SysTaxIncome && $util.isInteger(message.SysTaxIncome.low) && $util.isInteger(message.SysTaxIncome.high)))
                    return "SysTaxIncome: integer|Long expected";
            if (message.BetTime != null && message.hasOwnProperty("BetTime"))
                if (!$util.isInteger(message.BetTime))
                    return "BetTime: integer expected";
            if (message.WinLine != null && message.hasOwnProperty("WinLine"))
                if (!$util.isInteger(message.WinLine) && !(message.WinLine && $util.isInteger(message.WinLine.low) && $util.isInteger(message.WinLine.high)))
                    return "WinLine: integer|Long expected";
            if (message.RobotBetAmount != null && message.hasOwnProperty("RobotBetAmount"))
                if (!$util.isInteger(message.RobotBetAmount) && !(message.RobotBetAmount && $util.isInteger(message.RobotBetAmount.low) && $util.isInteger(message.RobotBetAmount.high)))
                    return "RobotBetAmount: integer|Long expected";
            if (message.LastGameUserBet != null && message.hasOwnProperty("LastGameUserBet")) {
                if (!Array.isArray(message.LastGameUserBet))
                    return "LastGameUserBet: array expected";
                for (var i = 0; i < message.LastGameUserBet.length; ++i) {
                    var error = $root.GameMsg_HHDZ.Http_HHDZ_UserInfo.verify(message.LastGameUserBet[i]);
                    if (error)
                        return "LastGameUserBet." + error;
                }
            }
            if (message.HungWinRate != null && message.hasOwnProperty("HungWinRate"))
                if (!$util.isInteger(message.HungWinRate))
                    return "HungWinRate: integer expected";
            if (message.PowerWinRate != null && message.hasOwnProperty("PowerWinRate"))
                if (!$util.isInteger(message.PowerWinRate))
                    return "PowerWinRate: integer expected";
            if (message.HeiWinRate != null && message.hasOwnProperty("HeiWinRate"))
                if (!$util.isInteger(message.HeiWinRate))
                    return "HeiWinRate: integer expected";
            if (message.FanFengTarget != null && message.hasOwnProperty("FanFengTarget"))
                if (!$util.isInteger(message.FanFengTarget) && !(message.FanFengTarget && $util.isInteger(message.FanFengTarget.low) && $util.isInteger(message.FanFengTarget.high)))
                    return "FanFengTarget: integer|Long expected";
            if (message.FanFengComplete != null && message.hasOwnProperty("FanFengComplete"))
                if (!$util.isInteger(message.FanFengComplete) && !(message.FanFengComplete && $util.isInteger(message.FanFengComplete.low) && $util.isInteger(message.FanFengComplete.high)))
                    return "FanFengComplete: integer|Long expected";
            return null;
        };

        /**
         * Creates a Http_HHDZ_TableDetail message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_HHDZ.Http_HHDZ_TableDetail
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_HHDZ.Http_HHDZ_TableDetail} Http_HHDZ_TableDetail
         */
        Http_HHDZ_TableDetail.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_HHDZ.Http_HHDZ_TableDetail)
                return object;
            var message = new $root.GameMsg_HHDZ.Http_HHDZ_TableDetail();
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
            if (object.OpenResultHung != null)
                if ($util.Long)
                    (message.OpenResultHung = $util.Long.fromValue(object.OpenResultHung)).unsigned = false;
                else if (typeof object.OpenResultHung === "string")
                    message.OpenResultHung = parseInt(object.OpenResultHung, 10);
                else if (typeof object.OpenResultHung === "number")
                    message.OpenResultHung = object.OpenResultHung;
                else if (typeof object.OpenResultHung === "object")
                    message.OpenResultHung = new $util.LongBits(object.OpenResultHung.low >>> 0, object.OpenResultHung.high >>> 0).toNumber();
            if (object.OpenResultHei != null)
                if ($util.Long)
                    (message.OpenResultHei = $util.Long.fromValue(object.OpenResultHei)).unsigned = false;
                else if (typeof object.OpenResultHei === "string")
                    message.OpenResultHei = parseInt(object.OpenResultHei, 10);
                else if (typeof object.OpenResultHei === "number")
                    message.OpenResultHei = object.OpenResultHei;
                else if (typeof object.OpenResultHei === "object")
                    message.OpenResultHei = new $util.LongBits(object.OpenResultHei.low >>> 0, object.OpenResultHei.high >>> 0).toNumber();
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
                    throw TypeError(".GameMsg_HHDZ.Http_HHDZ_TableDetail.UserInfo: array expected");
                message.UserInfo = [];
                for (var i = 0; i < object.UserInfo.length; ++i) {
                    if (typeof object.UserInfo[i] !== "object")
                        throw TypeError(".GameMsg_HHDZ.Http_HHDZ_TableDetail.UserInfo: object expected");
                    message.UserInfo[i] = $root.GameMsg_HHDZ.Http_HHDZ_UserInfo.fromObject(object.UserInfo[i]);
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
                    throw TypeError(".GameMsg_HHDZ.Http_HHDZ_TableDetail.LastGameUserBet: array expected");
                message.LastGameUserBet = [];
                for (var i = 0; i < object.LastGameUserBet.length; ++i) {
                    if (typeof object.LastGameUserBet[i] !== "object")
                        throw TypeError(".GameMsg_HHDZ.Http_HHDZ_TableDetail.LastGameUserBet: object expected");
                    message.LastGameUserBet[i] = $root.GameMsg_HHDZ.Http_HHDZ_UserInfo.fromObject(object.LastGameUserBet[i]);
                }
            }
            if (object.HungWinRate != null)
                message.HungWinRate = object.HungWinRate | 0;
            if (object.PowerWinRate != null)
                message.PowerWinRate = object.PowerWinRate | 0;
            if (object.HeiWinRate != null)
                message.HeiWinRate = object.HeiWinRate | 0;
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
         * Creates a plain object from a Http_HHDZ_TableDetail message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_HHDZ.Http_HHDZ_TableDetail
         * @static
         * @param {GameMsg_HHDZ.Http_HHDZ_TableDetail} message Http_HHDZ_TableDetail
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Http_HHDZ_TableDetail.toObject = function toObject(message, options) {
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
                    object.OpenResultHung = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.OpenResultHung = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.OpenResultHei = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.OpenResultHei = options.longs === String ? "0" : 0;
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
                object.HungWinRate = 0;
                object.PowerWinRate = 0;
                object.HeiWinRate = 0;
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
            if (message.OpenResultHung != null && message.hasOwnProperty("OpenResultHung"))
                if (typeof message.OpenResultHung === "number")
                    object.OpenResultHung = options.longs === String ? String(message.OpenResultHung) : message.OpenResultHung;
                else
                    object.OpenResultHung = options.longs === String ? $util.Long.prototype.toString.call(message.OpenResultHung) : options.longs === Number ? new $util.LongBits(message.OpenResultHung.low >>> 0, message.OpenResultHung.high >>> 0).toNumber() : message.OpenResultHung;
            if (message.OpenResultHei != null && message.hasOwnProperty("OpenResultHei"))
                if (typeof message.OpenResultHei === "number")
                    object.OpenResultHei = options.longs === String ? String(message.OpenResultHei) : message.OpenResultHei;
                else
                    object.OpenResultHei = options.longs === String ? $util.Long.prototype.toString.call(message.OpenResultHei) : options.longs === Number ? new $util.LongBits(message.OpenResultHei.low >>> 0, message.OpenResultHei.high >>> 0).toNumber() : message.OpenResultHei;
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
                    object.UserInfo[j] = $root.GameMsg_HHDZ.Http_HHDZ_UserInfo.toObject(message.UserInfo[j], options);
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
                    object.LastGameUserBet[j] = $root.GameMsg_HHDZ.Http_HHDZ_UserInfo.toObject(message.LastGameUserBet[j], options);
            }
            if (message.HungWinRate != null && message.hasOwnProperty("HungWinRate"))
                object.HungWinRate = message.HungWinRate;
            if (message.PowerWinRate != null && message.hasOwnProperty("PowerWinRate"))
                object.PowerWinRate = message.PowerWinRate;
            if (message.HeiWinRate != null && message.hasOwnProperty("HeiWinRate"))
                object.HeiWinRate = message.HeiWinRate;
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
         * Converts this Http_HHDZ_TableDetail to JSON.
         * @function toJSON
         * @memberof GameMsg_HHDZ.Http_HHDZ_TableDetail
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Http_HHDZ_TableDetail.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Http_HHDZ_TableDetail;
    })();

    GameMsg_HHDZ.Http_HHDZ_UserInfo = (function() {

        /**
         * Properties of a Http_HHDZ_UserInfo.
         * @memberof GameMsg_HHDZ
         * @interface IHttp_HHDZ_UserInfo
         * @property {number|null} [UserID] Http_HHDZ_UserInfo UserID
         * @property {number|null} [UserType] Http_HHDZ_UserInfo UserType
         * @property {string|null} [NickName] Http_HHDZ_UserInfo NickName
         * @property {number|Long|null} [GameScore] Http_HHDZ_UserInfo GameScore
         * @property {number|Long|null} [InitMoney] Http_HHDZ_UserInfo InitMoney
         * @property {number|Long|null} [CurrentMoney] Http_HHDZ_UserInfo CurrentMoney
         * @property {number|Long|null} [BetInfoHung] Http_HHDZ_UserInfo BetInfoHung
         * @property {number|Long|null} [BetInfoHei] Http_HHDZ_UserInfo BetInfoHei
         * @property {number|Long|null} [BetInfoPower] Http_HHDZ_UserInfo BetInfoPower
         * @property {number|Long|null} [SumCharge] Http_HHDZ_UserInfo SumCharge
         * @property {number|Long|null} [SumConvert] Http_HHDZ_UserInfo SumConvert
         * @property {number|Long|null} [WinRate] Http_HHDZ_UserInfo WinRate
         * @property {number|Long|null} [BetTotal] Http_HHDZ_UserInfo BetTotal
         * @property {boolean|null} [IsVIP] Http_HHDZ_UserInfo IsVIP
         */

        /**
         * Constructs a new Http_HHDZ_UserInfo.
         * @memberof GameMsg_HHDZ
         * @classdesc Represents a Http_HHDZ_UserInfo.
         * @implements IHttp_HHDZ_UserInfo
         * @constructor
         * @param {GameMsg_HHDZ.IHttp_HHDZ_UserInfo=} [properties] Properties to set
         */
        function Http_HHDZ_UserInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Http_HHDZ_UserInfo UserID.
         * @member {number} UserID
         * @memberof GameMsg_HHDZ.Http_HHDZ_UserInfo
         * @instance
         */
        Http_HHDZ_UserInfo.prototype.UserID = 0;

        /**
         * Http_HHDZ_UserInfo UserType.
         * @member {number} UserType
         * @memberof GameMsg_HHDZ.Http_HHDZ_UserInfo
         * @instance
         */
        Http_HHDZ_UserInfo.prototype.UserType = 0;

        /**
         * Http_HHDZ_UserInfo NickName.
         * @member {string} NickName
         * @memberof GameMsg_HHDZ.Http_HHDZ_UserInfo
         * @instance
         */
        Http_HHDZ_UserInfo.prototype.NickName = "";

        /**
         * Http_HHDZ_UserInfo GameScore.
         * @member {number|Long} GameScore
         * @memberof GameMsg_HHDZ.Http_HHDZ_UserInfo
         * @instance
         */
        Http_HHDZ_UserInfo.prototype.GameScore = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Http_HHDZ_UserInfo InitMoney.
         * @member {number|Long} InitMoney
         * @memberof GameMsg_HHDZ.Http_HHDZ_UserInfo
         * @instance
         */
        Http_HHDZ_UserInfo.prototype.InitMoney = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Http_HHDZ_UserInfo CurrentMoney.
         * @member {number|Long} CurrentMoney
         * @memberof GameMsg_HHDZ.Http_HHDZ_UserInfo
         * @instance
         */
        Http_HHDZ_UserInfo.prototype.CurrentMoney = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Http_HHDZ_UserInfo BetInfoHung.
         * @member {number|Long} BetInfoHung
         * @memberof GameMsg_HHDZ.Http_HHDZ_UserInfo
         * @instance
         */
        Http_HHDZ_UserInfo.prototype.BetInfoHung = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Http_HHDZ_UserInfo BetInfoHei.
         * @member {number|Long} BetInfoHei
         * @memberof GameMsg_HHDZ.Http_HHDZ_UserInfo
         * @instance
         */
        Http_HHDZ_UserInfo.prototype.BetInfoHei = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Http_HHDZ_UserInfo BetInfoPower.
         * @member {number|Long} BetInfoPower
         * @memberof GameMsg_HHDZ.Http_HHDZ_UserInfo
         * @instance
         */
        Http_HHDZ_UserInfo.prototype.BetInfoPower = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Http_HHDZ_UserInfo SumCharge.
         * @member {number|Long} SumCharge
         * @memberof GameMsg_HHDZ.Http_HHDZ_UserInfo
         * @instance
         */
        Http_HHDZ_UserInfo.prototype.SumCharge = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Http_HHDZ_UserInfo SumConvert.
         * @member {number|Long} SumConvert
         * @memberof GameMsg_HHDZ.Http_HHDZ_UserInfo
         * @instance
         */
        Http_HHDZ_UserInfo.prototype.SumConvert = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Http_HHDZ_UserInfo WinRate.
         * @member {number|Long} WinRate
         * @memberof GameMsg_HHDZ.Http_HHDZ_UserInfo
         * @instance
         */
        Http_HHDZ_UserInfo.prototype.WinRate = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Http_HHDZ_UserInfo BetTotal.
         * @member {number|Long} BetTotal
         * @memberof GameMsg_HHDZ.Http_HHDZ_UserInfo
         * @instance
         */
        Http_HHDZ_UserInfo.prototype.BetTotal = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Http_HHDZ_UserInfo IsVIP.
         * @member {boolean} IsVIP
         * @memberof GameMsg_HHDZ.Http_HHDZ_UserInfo
         * @instance
         */
        Http_HHDZ_UserInfo.prototype.IsVIP = false;

        /**
         * Creates a new Http_HHDZ_UserInfo instance using the specified properties.
         * @function create
         * @memberof GameMsg_HHDZ.Http_HHDZ_UserInfo
         * @static
         * @param {GameMsg_HHDZ.IHttp_HHDZ_UserInfo=} [properties] Properties to set
         * @returns {GameMsg_HHDZ.Http_HHDZ_UserInfo} Http_HHDZ_UserInfo instance
         */
        Http_HHDZ_UserInfo.create = function create(properties) {
            return new Http_HHDZ_UserInfo(properties);
        };

        /**
         * Encodes the specified Http_HHDZ_UserInfo message. Does not implicitly {@link GameMsg_HHDZ.Http_HHDZ_UserInfo.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_HHDZ.Http_HHDZ_UserInfo
         * @static
         * @param {GameMsg_HHDZ.IHttp_HHDZ_UserInfo} message Http_HHDZ_UserInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Http_HHDZ_UserInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.UserID);
            if (message.UserType != null && message.hasOwnProperty("UserType"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.UserType);
            if (message.NickName != null && message.hasOwnProperty("NickName"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.NickName);
            if (message.GameScore != null && message.hasOwnProperty("GameScore"))
                writer.uint32(/* id 4, wireType 0 =*/32).int64(message.GameScore);
            if (message.InitMoney != null && message.hasOwnProperty("InitMoney"))
                writer.uint32(/* id 5, wireType 0 =*/40).int64(message.InitMoney);
            if (message.CurrentMoney != null && message.hasOwnProperty("CurrentMoney"))
                writer.uint32(/* id 6, wireType 0 =*/48).int64(message.CurrentMoney);
            if (message.BetInfoHung != null && message.hasOwnProperty("BetInfoHung"))
                writer.uint32(/* id 7, wireType 0 =*/56).int64(message.BetInfoHung);
            if (message.BetInfoHei != null && message.hasOwnProperty("BetInfoHei"))
                writer.uint32(/* id 8, wireType 0 =*/64).int64(message.BetInfoHei);
            if (message.BetInfoPower != null && message.hasOwnProperty("BetInfoPower"))
                writer.uint32(/* id 9, wireType 0 =*/72).int64(message.BetInfoPower);
            if (message.SumCharge != null && message.hasOwnProperty("SumCharge"))
                writer.uint32(/* id 10, wireType 0 =*/80).int64(message.SumCharge);
            if (message.SumConvert != null && message.hasOwnProperty("SumConvert"))
                writer.uint32(/* id 11, wireType 0 =*/88).int64(message.SumConvert);
            if (message.WinRate != null && message.hasOwnProperty("WinRate"))
                writer.uint32(/* id 13, wireType 0 =*/104).int64(message.WinRate);
            if (message.BetTotal != null && message.hasOwnProperty("BetTotal"))
                writer.uint32(/* id 14, wireType 0 =*/112).int64(message.BetTotal);
            if (message.IsVIP != null && message.hasOwnProperty("IsVIP"))
                writer.uint32(/* id 15, wireType 0 =*/120).bool(message.IsVIP);
            return writer;
        };

        /**
         * Encodes the specified Http_HHDZ_UserInfo message, length delimited. Does not implicitly {@link GameMsg_HHDZ.Http_HHDZ_UserInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_HHDZ.Http_HHDZ_UserInfo
         * @static
         * @param {GameMsg_HHDZ.IHttp_HHDZ_UserInfo} message Http_HHDZ_UserInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Http_HHDZ_UserInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Http_HHDZ_UserInfo message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_HHDZ.Http_HHDZ_UserInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_HHDZ.Http_HHDZ_UserInfo} Http_HHDZ_UserInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Http_HHDZ_UserInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_HHDZ.Http_HHDZ_UserInfo();
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
                    message.BetInfoHung = reader.int64();
                    break;
                case 8:
                    message.BetInfoHei = reader.int64();
                    break;
                case 9:
                    message.BetInfoPower = reader.int64();
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
            return message;
        };

        /**
         * Decodes a Http_HHDZ_UserInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_HHDZ.Http_HHDZ_UserInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_HHDZ.Http_HHDZ_UserInfo} Http_HHDZ_UserInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Http_HHDZ_UserInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Http_HHDZ_UserInfo message.
         * @function verify
         * @memberof GameMsg_HHDZ.Http_HHDZ_UserInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Http_HHDZ_UserInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                if (!$util.isInteger(message.UserID))
                    return "UserID: integer expected";
            if (message.UserType != null && message.hasOwnProperty("UserType"))
                if (!$util.isInteger(message.UserType))
                    return "UserType: integer expected";
            if (message.NickName != null && message.hasOwnProperty("NickName"))
                if (!$util.isString(message.NickName))
                    return "NickName: string expected";
            if (message.GameScore != null && message.hasOwnProperty("GameScore"))
                if (!$util.isInteger(message.GameScore) && !(message.GameScore && $util.isInteger(message.GameScore.low) && $util.isInteger(message.GameScore.high)))
                    return "GameScore: integer|Long expected";
            if (message.InitMoney != null && message.hasOwnProperty("InitMoney"))
                if (!$util.isInteger(message.InitMoney) && !(message.InitMoney && $util.isInteger(message.InitMoney.low) && $util.isInteger(message.InitMoney.high)))
                    return "InitMoney: integer|Long expected";
            if (message.CurrentMoney != null && message.hasOwnProperty("CurrentMoney"))
                if (!$util.isInteger(message.CurrentMoney) && !(message.CurrentMoney && $util.isInteger(message.CurrentMoney.low) && $util.isInteger(message.CurrentMoney.high)))
                    return "CurrentMoney: integer|Long expected";
            if (message.BetInfoHung != null && message.hasOwnProperty("BetInfoHung"))
                if (!$util.isInteger(message.BetInfoHung) && !(message.BetInfoHung && $util.isInteger(message.BetInfoHung.low) && $util.isInteger(message.BetInfoHung.high)))
                    return "BetInfoHung: integer|Long expected";
            if (message.BetInfoHei != null && message.hasOwnProperty("BetInfoHei"))
                if (!$util.isInteger(message.BetInfoHei) && !(message.BetInfoHei && $util.isInteger(message.BetInfoHei.low) && $util.isInteger(message.BetInfoHei.high)))
                    return "BetInfoHei: integer|Long expected";
            if (message.BetInfoPower != null && message.hasOwnProperty("BetInfoPower"))
                if (!$util.isInteger(message.BetInfoPower) && !(message.BetInfoPower && $util.isInteger(message.BetInfoPower.low) && $util.isInteger(message.BetInfoPower.high)))
                    return "BetInfoPower: integer|Long expected";
            if (message.SumCharge != null && message.hasOwnProperty("SumCharge"))
                if (!$util.isInteger(message.SumCharge) && !(message.SumCharge && $util.isInteger(message.SumCharge.low) && $util.isInteger(message.SumCharge.high)))
                    return "SumCharge: integer|Long expected";
            if (message.SumConvert != null && message.hasOwnProperty("SumConvert"))
                if (!$util.isInteger(message.SumConvert) && !(message.SumConvert && $util.isInteger(message.SumConvert.low) && $util.isInteger(message.SumConvert.high)))
                    return "SumConvert: integer|Long expected";
            if (message.WinRate != null && message.hasOwnProperty("WinRate"))
                if (!$util.isInteger(message.WinRate) && !(message.WinRate && $util.isInteger(message.WinRate.low) && $util.isInteger(message.WinRate.high)))
                    return "WinRate: integer|Long expected";
            if (message.BetTotal != null && message.hasOwnProperty("BetTotal"))
                if (!$util.isInteger(message.BetTotal) && !(message.BetTotal && $util.isInteger(message.BetTotal.low) && $util.isInteger(message.BetTotal.high)))
                    return "BetTotal: integer|Long expected";
            if (message.IsVIP != null && message.hasOwnProperty("IsVIP"))
                if (typeof message.IsVIP !== "boolean")
                    return "IsVIP: boolean expected";
            return null;
        };

        /**
         * Creates a Http_HHDZ_UserInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_HHDZ.Http_HHDZ_UserInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_HHDZ.Http_HHDZ_UserInfo} Http_HHDZ_UserInfo
         */
        Http_HHDZ_UserInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_HHDZ.Http_HHDZ_UserInfo)
                return object;
            var message = new $root.GameMsg_HHDZ.Http_HHDZ_UserInfo();
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
            if (object.BetInfoHung != null)
                if ($util.Long)
                    (message.BetInfoHung = $util.Long.fromValue(object.BetInfoHung)).unsigned = false;
                else if (typeof object.BetInfoHung === "string")
                    message.BetInfoHung = parseInt(object.BetInfoHung, 10);
                else if (typeof object.BetInfoHung === "number")
                    message.BetInfoHung = object.BetInfoHung;
                else if (typeof object.BetInfoHung === "object")
                    message.BetInfoHung = new $util.LongBits(object.BetInfoHung.low >>> 0, object.BetInfoHung.high >>> 0).toNumber();
            if (object.BetInfoHei != null)
                if ($util.Long)
                    (message.BetInfoHei = $util.Long.fromValue(object.BetInfoHei)).unsigned = false;
                else if (typeof object.BetInfoHei === "string")
                    message.BetInfoHei = parseInt(object.BetInfoHei, 10);
                else if (typeof object.BetInfoHei === "number")
                    message.BetInfoHei = object.BetInfoHei;
                else if (typeof object.BetInfoHei === "object")
                    message.BetInfoHei = new $util.LongBits(object.BetInfoHei.low >>> 0, object.BetInfoHei.high >>> 0).toNumber();
            if (object.BetInfoPower != null)
                if ($util.Long)
                    (message.BetInfoPower = $util.Long.fromValue(object.BetInfoPower)).unsigned = false;
                else if (typeof object.BetInfoPower === "string")
                    message.BetInfoPower = parseInt(object.BetInfoPower, 10);
                else if (typeof object.BetInfoPower === "number")
                    message.BetInfoPower = object.BetInfoPower;
                else if (typeof object.BetInfoPower === "object")
                    message.BetInfoPower = new $util.LongBits(object.BetInfoPower.low >>> 0, object.BetInfoPower.high >>> 0).toNumber();
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
         * Creates a plain object from a Http_HHDZ_UserInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_HHDZ.Http_HHDZ_UserInfo
         * @static
         * @param {GameMsg_HHDZ.Http_HHDZ_UserInfo} message Http_HHDZ_UserInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Http_HHDZ_UserInfo.toObject = function toObject(message, options) {
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
                    object.BetInfoHung = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.BetInfoHung = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.BetInfoHei = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.BetInfoHei = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.BetInfoPower = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.BetInfoPower = options.longs === String ? "0" : 0;
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
            if (message.BetInfoHung != null && message.hasOwnProperty("BetInfoHung"))
                if (typeof message.BetInfoHung === "number")
                    object.BetInfoHung = options.longs === String ? String(message.BetInfoHung) : message.BetInfoHung;
                else
                    object.BetInfoHung = options.longs === String ? $util.Long.prototype.toString.call(message.BetInfoHung) : options.longs === Number ? new $util.LongBits(message.BetInfoHung.low >>> 0, message.BetInfoHung.high >>> 0).toNumber() : message.BetInfoHung;
            if (message.BetInfoHei != null && message.hasOwnProperty("BetInfoHei"))
                if (typeof message.BetInfoHei === "number")
                    object.BetInfoHei = options.longs === String ? String(message.BetInfoHei) : message.BetInfoHei;
                else
                    object.BetInfoHei = options.longs === String ? $util.Long.prototype.toString.call(message.BetInfoHei) : options.longs === Number ? new $util.LongBits(message.BetInfoHei.low >>> 0, message.BetInfoHei.high >>> 0).toNumber() : message.BetInfoHei;
            if (message.BetInfoPower != null && message.hasOwnProperty("BetInfoPower"))
                if (typeof message.BetInfoPower === "number")
                    object.BetInfoPower = options.longs === String ? String(message.BetInfoPower) : message.BetInfoPower;
                else
                    object.BetInfoPower = options.longs === String ? $util.Long.prototype.toString.call(message.BetInfoPower) : options.longs === Number ? new $util.LongBits(message.BetInfoPower.low >>> 0, message.BetInfoPower.high >>> 0).toNumber() : message.BetInfoPower;
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
         * Converts this Http_HHDZ_UserInfo to JSON.
         * @function toJSON
         * @memberof GameMsg_HHDZ.Http_HHDZ_UserInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Http_HHDZ_UserInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Http_HHDZ_UserInfo;
    })();

    GameMsg_HHDZ.HHDZ_ResultCardList = (function() {

        /**
         * Properties of a HHDZ_ResultCardList.
         * @memberof GameMsg_HHDZ
         * @interface IHHDZ_ResultCardList
         * @property {Array.<GameMsg_HHDZ.IHHDZ_GameResultPoker>|null} [CardList] HHDZ_ResultCardList CardList
         */

        /**
         * Constructs a new HHDZ_ResultCardList.
         * @memberof GameMsg_HHDZ
         * @classdesc Represents a HHDZ_ResultCardList.
         * @implements IHHDZ_ResultCardList
         * @constructor
         * @param {GameMsg_HHDZ.IHHDZ_ResultCardList=} [properties] Properties to set
         */
        function HHDZ_ResultCardList(properties) {
            this.CardList = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * HHDZ_ResultCardList CardList.
         * @member {Array.<GameMsg_HHDZ.IHHDZ_GameResultPoker>} CardList
         * @memberof GameMsg_HHDZ.HHDZ_ResultCardList
         * @instance
         */
        HHDZ_ResultCardList.prototype.CardList = $util.emptyArray;

        /**
         * Creates a new HHDZ_ResultCardList instance using the specified properties.
         * @function create
         * @memberof GameMsg_HHDZ.HHDZ_ResultCardList
         * @static
         * @param {GameMsg_HHDZ.IHHDZ_ResultCardList=} [properties] Properties to set
         * @returns {GameMsg_HHDZ.HHDZ_ResultCardList} HHDZ_ResultCardList instance
         */
        HHDZ_ResultCardList.create = function create(properties) {
            return new HHDZ_ResultCardList(properties);
        };

        /**
         * Encodes the specified HHDZ_ResultCardList message. Does not implicitly {@link GameMsg_HHDZ.HHDZ_ResultCardList.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_HHDZ.HHDZ_ResultCardList
         * @static
         * @param {GameMsg_HHDZ.IHHDZ_ResultCardList} message HHDZ_ResultCardList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HHDZ_ResultCardList.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.CardList != null && message.CardList.length)
                for (var i = 0; i < message.CardList.length; ++i)
                    $root.GameMsg_HHDZ.HHDZ_GameResultPoker.encode(message.CardList[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified HHDZ_ResultCardList message, length delimited. Does not implicitly {@link GameMsg_HHDZ.HHDZ_ResultCardList.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_HHDZ.HHDZ_ResultCardList
         * @static
         * @param {GameMsg_HHDZ.IHHDZ_ResultCardList} message HHDZ_ResultCardList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HHDZ_ResultCardList.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a HHDZ_ResultCardList message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_HHDZ.HHDZ_ResultCardList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_HHDZ.HHDZ_ResultCardList} HHDZ_ResultCardList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HHDZ_ResultCardList.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_HHDZ.HHDZ_ResultCardList();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.CardList && message.CardList.length))
                        message.CardList = [];
                    message.CardList.push($root.GameMsg_HHDZ.HHDZ_GameResultPoker.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a HHDZ_ResultCardList message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_HHDZ.HHDZ_ResultCardList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_HHDZ.HHDZ_ResultCardList} HHDZ_ResultCardList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HHDZ_ResultCardList.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a HHDZ_ResultCardList message.
         * @function verify
         * @memberof GameMsg_HHDZ.HHDZ_ResultCardList
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        HHDZ_ResultCardList.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.CardList != null && message.hasOwnProperty("CardList")) {
                if (!Array.isArray(message.CardList))
                    return "CardList: array expected";
                for (var i = 0; i < message.CardList.length; ++i) {
                    var error = $root.GameMsg_HHDZ.HHDZ_GameResultPoker.verify(message.CardList[i]);
                    if (error)
                        return "CardList." + error;
                }
            }
            return null;
        };

        /**
         * Creates a HHDZ_ResultCardList message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_HHDZ.HHDZ_ResultCardList
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_HHDZ.HHDZ_ResultCardList} HHDZ_ResultCardList
         */
        HHDZ_ResultCardList.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_HHDZ.HHDZ_ResultCardList)
                return object;
            var message = new $root.GameMsg_HHDZ.HHDZ_ResultCardList();
            if (object.CardList) {
                if (!Array.isArray(object.CardList))
                    throw TypeError(".GameMsg_HHDZ.HHDZ_ResultCardList.CardList: array expected");
                message.CardList = [];
                for (var i = 0; i < object.CardList.length; ++i) {
                    if (typeof object.CardList[i] !== "object")
                        throw TypeError(".GameMsg_HHDZ.HHDZ_ResultCardList.CardList: object expected");
                    message.CardList[i] = $root.GameMsg_HHDZ.HHDZ_GameResultPoker.fromObject(object.CardList[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a HHDZ_ResultCardList message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_HHDZ.HHDZ_ResultCardList
         * @static
         * @param {GameMsg_HHDZ.HHDZ_ResultCardList} message HHDZ_ResultCardList
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        HHDZ_ResultCardList.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.CardList = [];
            if (message.CardList && message.CardList.length) {
                object.CardList = [];
                for (var j = 0; j < message.CardList.length; ++j)
                    object.CardList[j] = $root.GameMsg_HHDZ.HHDZ_GameResultPoker.toObject(message.CardList[j], options);
            }
            return object;
        };

        /**
         * Converts this HHDZ_ResultCardList to JSON.
         * @function toJSON
         * @memberof GameMsg_HHDZ.HHDZ_ResultCardList
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        HHDZ_ResultCardList.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return HHDZ_ResultCardList;
    })();

    GameMsg_HHDZ.HHDZ_GameResultPoker = (function() {

        /**
         * Properties of a HHDZ_GameResultPoker.
         * @memberof GameMsg_HHDZ
         * @interface IHHDZ_GameResultPoker
         * @property {Array.<GameMsg_HHDZ.IHHDZ_Poker>|null} [HungPoker] HHDZ_GameResultPoker HungPoker
         * @property {Array.<GameMsg_HHDZ.IHHDZ_Poker>|null} [HeiPoker] HHDZ_GameResultPoker HeiPoker
         * @property {number|null} [HungZuHe] HHDZ_GameResultPoker HungZuHe
         * @property {number|null} [HeiZuHe] HHDZ_GameResultPoker HeiZuHe
         * @property {number|null} [Win] HHDZ_GameResultPoker Win
         * @property {number|null} [RoundID] HHDZ_GameResultPoker RoundID
         */

        /**
         * Constructs a new HHDZ_GameResultPoker.
         * @memberof GameMsg_HHDZ
         * @classdesc Represents a HHDZ_GameResultPoker.
         * @implements IHHDZ_GameResultPoker
         * @constructor
         * @param {GameMsg_HHDZ.IHHDZ_GameResultPoker=} [properties] Properties to set
         */
        function HHDZ_GameResultPoker(properties) {
            this.HungPoker = [];
            this.HeiPoker = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * HHDZ_GameResultPoker HungPoker.
         * @member {Array.<GameMsg_HHDZ.IHHDZ_Poker>} HungPoker
         * @memberof GameMsg_HHDZ.HHDZ_GameResultPoker
         * @instance
         */
        HHDZ_GameResultPoker.prototype.HungPoker = $util.emptyArray;

        /**
         * HHDZ_GameResultPoker HeiPoker.
         * @member {Array.<GameMsg_HHDZ.IHHDZ_Poker>} HeiPoker
         * @memberof GameMsg_HHDZ.HHDZ_GameResultPoker
         * @instance
         */
        HHDZ_GameResultPoker.prototype.HeiPoker = $util.emptyArray;

        /**
         * HHDZ_GameResultPoker HungZuHe.
         * @member {number} HungZuHe
         * @memberof GameMsg_HHDZ.HHDZ_GameResultPoker
         * @instance
         */
        HHDZ_GameResultPoker.prototype.HungZuHe = 0;

        /**
         * HHDZ_GameResultPoker HeiZuHe.
         * @member {number} HeiZuHe
         * @memberof GameMsg_HHDZ.HHDZ_GameResultPoker
         * @instance
         */
        HHDZ_GameResultPoker.prototype.HeiZuHe = 0;

        /**
         * HHDZ_GameResultPoker Win.
         * @member {number} Win
         * @memberof GameMsg_HHDZ.HHDZ_GameResultPoker
         * @instance
         */
        HHDZ_GameResultPoker.prototype.Win = 0;

        /**
         * HHDZ_GameResultPoker RoundID.
         * @member {number} RoundID
         * @memberof GameMsg_HHDZ.HHDZ_GameResultPoker
         * @instance
         */
        HHDZ_GameResultPoker.prototype.RoundID = 0;

        /**
         * Creates a new HHDZ_GameResultPoker instance using the specified properties.
         * @function create
         * @memberof GameMsg_HHDZ.HHDZ_GameResultPoker
         * @static
         * @param {GameMsg_HHDZ.IHHDZ_GameResultPoker=} [properties] Properties to set
         * @returns {GameMsg_HHDZ.HHDZ_GameResultPoker} HHDZ_GameResultPoker instance
         */
        HHDZ_GameResultPoker.create = function create(properties) {
            return new HHDZ_GameResultPoker(properties);
        };

        /**
         * Encodes the specified HHDZ_GameResultPoker message. Does not implicitly {@link GameMsg_HHDZ.HHDZ_GameResultPoker.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_HHDZ.HHDZ_GameResultPoker
         * @static
         * @param {GameMsg_HHDZ.IHHDZ_GameResultPoker} message HHDZ_GameResultPoker message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HHDZ_GameResultPoker.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.HungPoker != null && message.HungPoker.length)
                for (var i = 0; i < message.HungPoker.length; ++i)
                    $root.GameMsg_HHDZ.HHDZ_Poker.encode(message.HungPoker[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.HeiPoker != null && message.HeiPoker.length)
                for (var i = 0; i < message.HeiPoker.length; ++i)
                    $root.GameMsg_HHDZ.HHDZ_Poker.encode(message.HeiPoker[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.HungZuHe != null && message.hasOwnProperty("HungZuHe"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.HungZuHe);
            if (message.HeiZuHe != null && message.hasOwnProperty("HeiZuHe"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.HeiZuHe);
            if (message.Win != null && message.hasOwnProperty("Win"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.Win);
            if (message.RoundID != null && message.hasOwnProperty("RoundID"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.RoundID);
            return writer;
        };

        /**
         * Encodes the specified HHDZ_GameResultPoker message, length delimited. Does not implicitly {@link GameMsg_HHDZ.HHDZ_GameResultPoker.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_HHDZ.HHDZ_GameResultPoker
         * @static
         * @param {GameMsg_HHDZ.IHHDZ_GameResultPoker} message HHDZ_GameResultPoker message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HHDZ_GameResultPoker.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a HHDZ_GameResultPoker message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_HHDZ.HHDZ_GameResultPoker
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_HHDZ.HHDZ_GameResultPoker} HHDZ_GameResultPoker
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HHDZ_GameResultPoker.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_HHDZ.HHDZ_GameResultPoker();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.HungPoker && message.HungPoker.length))
                        message.HungPoker = [];
                    message.HungPoker.push($root.GameMsg_HHDZ.HHDZ_Poker.decode(reader, reader.uint32()));
                    break;
                case 2:
                    if (!(message.HeiPoker && message.HeiPoker.length))
                        message.HeiPoker = [];
                    message.HeiPoker.push($root.GameMsg_HHDZ.HHDZ_Poker.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.HungZuHe = reader.int32();
                    break;
                case 4:
                    message.HeiZuHe = reader.int32();
                    break;
                case 5:
                    message.Win = reader.int32();
                    break;
                case 6:
                    message.RoundID = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a HHDZ_GameResultPoker message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_HHDZ.HHDZ_GameResultPoker
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_HHDZ.HHDZ_GameResultPoker} HHDZ_GameResultPoker
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HHDZ_GameResultPoker.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a HHDZ_GameResultPoker message.
         * @function verify
         * @memberof GameMsg_HHDZ.HHDZ_GameResultPoker
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        HHDZ_GameResultPoker.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.HungPoker != null && message.hasOwnProperty("HungPoker")) {
                if (!Array.isArray(message.HungPoker))
                    return "HungPoker: array expected";
                for (var i = 0; i < message.HungPoker.length; ++i) {
                    var error = $root.GameMsg_HHDZ.HHDZ_Poker.verify(message.HungPoker[i]);
                    if (error)
                        return "HungPoker." + error;
                }
            }
            if (message.HeiPoker != null && message.hasOwnProperty("HeiPoker")) {
                if (!Array.isArray(message.HeiPoker))
                    return "HeiPoker: array expected";
                for (var i = 0; i < message.HeiPoker.length; ++i) {
                    var error = $root.GameMsg_HHDZ.HHDZ_Poker.verify(message.HeiPoker[i]);
                    if (error)
                        return "HeiPoker." + error;
                }
            }
            if (message.HungZuHe != null && message.hasOwnProperty("HungZuHe"))
                if (!$util.isInteger(message.HungZuHe))
                    return "HungZuHe: integer expected";
            if (message.HeiZuHe != null && message.hasOwnProperty("HeiZuHe"))
                if (!$util.isInteger(message.HeiZuHe))
                    return "HeiZuHe: integer expected";
            if (message.Win != null && message.hasOwnProperty("Win"))
                if (!$util.isInteger(message.Win))
                    return "Win: integer expected";
            if (message.RoundID != null && message.hasOwnProperty("RoundID"))
                if (!$util.isInteger(message.RoundID))
                    return "RoundID: integer expected";
            return null;
        };

        /**
         * Creates a HHDZ_GameResultPoker message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_HHDZ.HHDZ_GameResultPoker
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_HHDZ.HHDZ_GameResultPoker} HHDZ_GameResultPoker
         */
        HHDZ_GameResultPoker.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_HHDZ.HHDZ_GameResultPoker)
                return object;
            var message = new $root.GameMsg_HHDZ.HHDZ_GameResultPoker();
            if (object.HungPoker) {
                if (!Array.isArray(object.HungPoker))
                    throw TypeError(".GameMsg_HHDZ.HHDZ_GameResultPoker.HungPoker: array expected");
                message.HungPoker = [];
                for (var i = 0; i < object.HungPoker.length; ++i) {
                    if (typeof object.HungPoker[i] !== "object")
                        throw TypeError(".GameMsg_HHDZ.HHDZ_GameResultPoker.HungPoker: object expected");
                    message.HungPoker[i] = $root.GameMsg_HHDZ.HHDZ_Poker.fromObject(object.HungPoker[i]);
                }
            }
            if (object.HeiPoker) {
                if (!Array.isArray(object.HeiPoker))
                    throw TypeError(".GameMsg_HHDZ.HHDZ_GameResultPoker.HeiPoker: array expected");
                message.HeiPoker = [];
                for (var i = 0; i < object.HeiPoker.length; ++i) {
                    if (typeof object.HeiPoker[i] !== "object")
                        throw TypeError(".GameMsg_HHDZ.HHDZ_GameResultPoker.HeiPoker: object expected");
                    message.HeiPoker[i] = $root.GameMsg_HHDZ.HHDZ_Poker.fromObject(object.HeiPoker[i]);
                }
            }
            if (object.HungZuHe != null)
                message.HungZuHe = object.HungZuHe | 0;
            if (object.HeiZuHe != null)
                message.HeiZuHe = object.HeiZuHe | 0;
            if (object.Win != null)
                message.Win = object.Win | 0;
            if (object.RoundID != null)
                message.RoundID = object.RoundID | 0;
            return message;
        };

        /**
         * Creates a plain object from a HHDZ_GameResultPoker message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_HHDZ.HHDZ_GameResultPoker
         * @static
         * @param {GameMsg_HHDZ.HHDZ_GameResultPoker} message HHDZ_GameResultPoker
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        HHDZ_GameResultPoker.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.HungPoker = [];
                object.HeiPoker = [];
            }
            if (options.defaults) {
                object.HungZuHe = 0;
                object.HeiZuHe = 0;
                object.Win = 0;
                object.RoundID = 0;
            }
            if (message.HungPoker && message.HungPoker.length) {
                object.HungPoker = [];
                for (var j = 0; j < message.HungPoker.length; ++j)
                    object.HungPoker[j] = $root.GameMsg_HHDZ.HHDZ_Poker.toObject(message.HungPoker[j], options);
            }
            if (message.HeiPoker && message.HeiPoker.length) {
                object.HeiPoker = [];
                for (var j = 0; j < message.HeiPoker.length; ++j)
                    object.HeiPoker[j] = $root.GameMsg_HHDZ.HHDZ_Poker.toObject(message.HeiPoker[j], options);
            }
            if (message.HungZuHe != null && message.hasOwnProperty("HungZuHe"))
                object.HungZuHe = message.HungZuHe;
            if (message.HeiZuHe != null && message.hasOwnProperty("HeiZuHe"))
                object.HeiZuHe = message.HeiZuHe;
            if (message.Win != null && message.hasOwnProperty("Win"))
                object.Win = message.Win;
            if (message.RoundID != null && message.hasOwnProperty("RoundID"))
                object.RoundID = message.RoundID;
            return object;
        };

        /**
         * Converts this HHDZ_GameResultPoker to JSON.
         * @function toJSON
         * @memberof GameMsg_HHDZ.HHDZ_GameResultPoker
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        HHDZ_GameResultPoker.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return HHDZ_GameResultPoker;
    })();

    GameMsg_HHDZ.HHDZ_Poker = (function() {

        /**
         * Properties of a HHDZ_Poker.
         * @memberof GameMsg_HHDZ
         * @interface IHHDZ_Poker
         * @property {number|null} [Color] HHDZ_Poker Color
         * @property {number|null} [Number] HHDZ_Poker Number
         */

        /**
         * Constructs a new HHDZ_Poker.
         * @memberof GameMsg_HHDZ
         * @classdesc Represents a HHDZ_Poker.
         * @implements IHHDZ_Poker
         * @constructor
         * @param {GameMsg_HHDZ.IHHDZ_Poker=} [properties] Properties to set
         */
        function HHDZ_Poker(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * HHDZ_Poker Color.
         * @member {number} Color
         * @memberof GameMsg_HHDZ.HHDZ_Poker
         * @instance
         */
        HHDZ_Poker.prototype.Color = 0;

        /**
         * HHDZ_Poker Number.
         * @member {number} Number
         * @memberof GameMsg_HHDZ.HHDZ_Poker
         * @instance
         */
        HHDZ_Poker.prototype.Number = 0;

        /**
         * Creates a new HHDZ_Poker instance using the specified properties.
         * @function create
         * @memberof GameMsg_HHDZ.HHDZ_Poker
         * @static
         * @param {GameMsg_HHDZ.IHHDZ_Poker=} [properties] Properties to set
         * @returns {GameMsg_HHDZ.HHDZ_Poker} HHDZ_Poker instance
         */
        HHDZ_Poker.create = function create(properties) {
            return new HHDZ_Poker(properties);
        };

        /**
         * Encodes the specified HHDZ_Poker message. Does not implicitly {@link GameMsg_HHDZ.HHDZ_Poker.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_HHDZ.HHDZ_Poker
         * @static
         * @param {GameMsg_HHDZ.IHHDZ_Poker} message HHDZ_Poker message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HHDZ_Poker.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Color != null && message.hasOwnProperty("Color"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.Color);
            if (message.Number != null && message.hasOwnProperty("Number"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.Number);
            return writer;
        };

        /**
         * Encodes the specified HHDZ_Poker message, length delimited. Does not implicitly {@link GameMsg_HHDZ.HHDZ_Poker.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_HHDZ.HHDZ_Poker
         * @static
         * @param {GameMsg_HHDZ.IHHDZ_Poker} message HHDZ_Poker message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HHDZ_Poker.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a HHDZ_Poker message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_HHDZ.HHDZ_Poker
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_HHDZ.HHDZ_Poker} HHDZ_Poker
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HHDZ_Poker.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_HHDZ.HHDZ_Poker();
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
            return message;
        };

        /**
         * Decodes a HHDZ_Poker message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_HHDZ.HHDZ_Poker
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_HHDZ.HHDZ_Poker} HHDZ_Poker
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HHDZ_Poker.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a HHDZ_Poker message.
         * @function verify
         * @memberof GameMsg_HHDZ.HHDZ_Poker
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        HHDZ_Poker.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Color != null && message.hasOwnProperty("Color"))
                if (!$util.isInteger(message.Color))
                    return "Color: integer expected";
            if (message.Number != null && message.hasOwnProperty("Number"))
                if (!$util.isInteger(message.Number))
                    return "Number: integer expected";
            return null;
        };

        /**
         * Creates a HHDZ_Poker message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_HHDZ.HHDZ_Poker
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_HHDZ.HHDZ_Poker} HHDZ_Poker
         */
        HHDZ_Poker.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_HHDZ.HHDZ_Poker)
                return object;
            var message = new $root.GameMsg_HHDZ.HHDZ_Poker();
            if (object.Color != null)
                message.Color = object.Color | 0;
            if (object.Number != null)
                message.Number = object.Number | 0;
            return message;
        };

        /**
         * Creates a plain object from a HHDZ_Poker message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_HHDZ.HHDZ_Poker
         * @static
         * @param {GameMsg_HHDZ.HHDZ_Poker} message HHDZ_Poker
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        HHDZ_Poker.toObject = function toObject(message, options) {
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
         * Converts this HHDZ_Poker to JSON.
         * @function toJSON
         * @memberof GameMsg_HHDZ.HHDZ_Poker
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        HHDZ_Poker.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return HHDZ_Poker;
    })();

    GameMsg_HHDZ.GameUser = (function() {

        /**
         * Properties of a GameUser.
         * @memberof GameMsg_HHDZ
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
         * @memberof GameMsg_HHDZ
         * @classdesc Represents a GameUser.
         * @implements IGameUser
         * @constructor
         * @param {GameMsg_HHDZ.IGameUser=} [properties] Properties to set
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
         * @memberof GameMsg_HHDZ.GameUser
         * @instance
         */
        GameUser.prototype.UserID = 0;

        /**
         * GameUser NickName.
         * @member {string} NickName
         * @memberof GameMsg_HHDZ.GameUser
         * @instance
         */
        GameUser.prototype.NickName = "";

        /**
         * GameUser Sex.
         * @member {number} Sex
         * @memberof GameMsg_HHDZ.GameUser
         * @instance
         */
        GameUser.prototype.Sex = 0;

        /**
         * GameUser FaceID.
         * @member {number} FaceID
         * @memberof GameMsg_HHDZ.GameUser
         * @instance
         */
        GameUser.prototype.FaceID = 0;

        /**
         * GameUser Score.
         * @member {number|Long} Score
         * @memberof GameMsg_HHDZ.GameUser
         * @instance
         */
        GameUser.prototype.Score = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * GameUser WinCount.
         * @member {number} WinCount
         * @memberof GameMsg_HHDZ.GameUser
         * @instance
         */
        GameUser.prototype.WinCount = 0;

        /**
         * GameUser LoseCount.
         * @member {number} LoseCount
         * @memberof GameMsg_HHDZ.GameUser
         * @instance
         */
        GameUser.prototype.LoseCount = 0;

        /**
         * GameUser DrawCount.
         * @member {number} DrawCount
         * @memberof GameMsg_HHDZ.GameUser
         * @instance
         */
        GameUser.prototype.DrawCount = 0;

        /**
         * GameUser StateValue.
         * @member {number} StateValue
         * @memberof GameMsg_HHDZ.GameUser
         * @instance
         */
        GameUser.prototype.StateValue = 0;

        /**
         * GameUser TableNo.
         * @member {number} TableNo
         * @memberof GameMsg_HHDZ.GameUser
         * @instance
         */
        GameUser.prototype.TableNo = 0;

        /**
         * GameUser SeatNo.
         * @member {number} SeatNo
         * @memberof GameMsg_HHDZ.GameUser
         * @instance
         */
        GameUser.prototype.SeatNo = 0;

        /**
         * GameUser LastWinLose.
         * @member {number} LastWinLose
         * @memberof GameMsg_HHDZ.GameUser
         * @instance
         */
        GameUser.prototype.LastWinLose = 0;

        /**
         * Creates a new GameUser instance using the specified properties.
         * @function create
         * @memberof GameMsg_HHDZ.GameUser
         * @static
         * @param {GameMsg_HHDZ.IGameUser=} [properties] Properties to set
         * @returns {GameMsg_HHDZ.GameUser} GameUser instance
         */
        GameUser.create = function create(properties) {
            return new GameUser(properties);
        };

        /**
         * Encodes the specified GameUser message. Does not implicitly {@link GameMsg_HHDZ.GameUser.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_HHDZ.GameUser
         * @static
         * @param {GameMsg_HHDZ.IGameUser} message GameUser message or plain object to encode
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
         * Encodes the specified GameUser message, length delimited. Does not implicitly {@link GameMsg_HHDZ.GameUser.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_HHDZ.GameUser
         * @static
         * @param {GameMsg_HHDZ.IGameUser} message GameUser message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameUser.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GameUser message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_HHDZ.GameUser
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_HHDZ.GameUser} GameUser
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameUser.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_HHDZ.GameUser();
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
         * @memberof GameMsg_HHDZ.GameUser
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_HHDZ.GameUser} GameUser
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
         * @memberof GameMsg_HHDZ.GameUser
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
         * @memberof GameMsg_HHDZ.GameUser
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_HHDZ.GameUser} GameUser
         */
        GameUser.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_HHDZ.GameUser)
                return object;
            var message = new $root.GameMsg_HHDZ.GameUser();
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
         * @memberof GameMsg_HHDZ.GameUser
         * @static
         * @param {GameMsg_HHDZ.GameUser} message GameUser
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
         * @memberof GameMsg_HHDZ.GameUser
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GameUser.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GameUser;
    })();

    return GameMsg_HHDZ;
})();

module.exports = $root;
