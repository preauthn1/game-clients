/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

//var $protobuf = require("protobufjs/minimal");
var $protobuf = protobuf;

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.GameMsg_BJL = (function() {

    /**
     * Namespace GameMsg_BJL.
     * @exports GameMsg_BJL
     * @namespace
     */
    var GameMsg_BJL = {};

    GameMsg_BJL.BJL_Setting = (function() {

        /**
         * Properties of a BJL_Setting.
         * @memberof GameMsg_BJL
         * @interface IBJL_Setting
         * @property {Array.<number>|null} [BetCount] BJL_Setting BetCount
         * @property {number} BetMoney BJL_Setting BetMoney
         * @property {number|Long} BetMoneyLimit BJL_Setting BetMoneyLimit
         * @property {number|Long} ZhuangLimit BJL_Setting ZhuangLimit
         * @property {number} MaxZhuang BJL_Setting MaxZhuang
         * @property {GameMsg_BJL.IBJL_BetRangeList} BetRange BJL_Setting BetRange
         * @property {number|Long|null} [betlimitmoney] BJL_Setting betlimitmoney
         */

        /**
         * Constructs a new BJL_Setting.
         * @memberof GameMsg_BJL
         * @classdesc Represents a BJL_Setting.
         * @implements IBJL_Setting
         * @constructor
         * @param {GameMsg_BJL.IBJL_Setting=} [properties] Properties to set
         */
        function BJL_Setting(properties) {
            this.BetCount = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BJL_Setting BetCount.
         * @member {Array.<number>} BetCount
         * @memberof GameMsg_BJL.BJL_Setting
         * @instance
         */
        BJL_Setting.prototype.BetCount = $util.emptyArray;

        /**
         * BJL_Setting BetMoney.
         * @member {number} BetMoney
         * @memberof GameMsg_BJL.BJL_Setting
         * @instance
         */
        BJL_Setting.prototype.BetMoney = 0;

        /**
         * BJL_Setting BetMoneyLimit.
         * @member {number|Long} BetMoneyLimit
         * @memberof GameMsg_BJL.BJL_Setting
         * @instance
         */
        BJL_Setting.prototype.BetMoneyLimit = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * BJL_Setting ZhuangLimit.
         * @member {number|Long} ZhuangLimit
         * @memberof GameMsg_BJL.BJL_Setting
         * @instance
         */
        BJL_Setting.prototype.ZhuangLimit = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * BJL_Setting MaxZhuang.
         * @member {number} MaxZhuang
         * @memberof GameMsg_BJL.BJL_Setting
         * @instance
         */
        BJL_Setting.prototype.MaxZhuang = 0;

        /**
         * BJL_Setting BetRange.
         * @member {GameMsg_BJL.IBJL_BetRangeList} BetRange
         * @memberof GameMsg_BJL.BJL_Setting
         * @instance
         */
        BJL_Setting.prototype.BetRange = null;

        /**
         * BJL_Setting betlimitmoney.
         * @member {number|Long} betlimitmoney
         * @memberof GameMsg_BJL.BJL_Setting
         * @instance
         */
        BJL_Setting.prototype.betlimitmoney = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new BJL_Setting instance using the specified properties.
         * @function create
         * @memberof GameMsg_BJL.BJL_Setting
         * @static
         * @param {GameMsg_BJL.IBJL_Setting=} [properties] Properties to set
         * @returns {GameMsg_BJL.BJL_Setting} BJL_Setting instance
         */
        BJL_Setting.create = function create(properties) {
            return new BJL_Setting(properties);
        };

        /**
         * Encodes the specified BJL_Setting message. Does not implicitly {@link GameMsg_BJL.BJL_Setting.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_BJL.BJL_Setting
         * @static
         * @param {GameMsg_BJL.IBJL_Setting} message BJL_Setting message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BJL_Setting.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.BetCount != null && message.BetCount.length) {
                writer.uint32(/* id 1, wireType 2 =*/10).fork();
                for (var i = 0; i < message.BetCount.length; ++i)
                    writer.int32(message.BetCount[i]);
                writer.ldelim();
            }
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.BetMoney);
            writer.uint32(/* id 3, wireType 0 =*/24).int64(message.BetMoneyLimit);
            writer.uint32(/* id 4, wireType 0 =*/32).int64(message.ZhuangLimit);
            writer.uint32(/* id 5, wireType 0 =*/40).int32(message.MaxZhuang);
            $root.GameMsg_BJL.BJL_BetRangeList.encode(message.BetRange, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            if (message.betlimitmoney != null && message.hasOwnProperty("betlimitmoney"))
                writer.uint32(/* id 7, wireType 0 =*/56).int64(message.betlimitmoney);
            return writer;
        };

        /**
         * Encodes the specified BJL_Setting message, length delimited. Does not implicitly {@link GameMsg_BJL.BJL_Setting.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_BJL.BJL_Setting
         * @static
         * @param {GameMsg_BJL.IBJL_Setting} message BJL_Setting message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BJL_Setting.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BJL_Setting message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_BJL.BJL_Setting
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_BJL.BJL_Setting} BJL_Setting
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BJL_Setting.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_BJL.BJL_Setting();
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
                    message.BetMoneyLimit = reader.int64();
                    break;
                case 4:
                    message.ZhuangLimit = reader.int64();
                    break;
                case 5:
                    message.MaxZhuang = reader.int32();
                    break;
                case 6:
                    message.BetRange = $root.GameMsg_BJL.BJL_BetRangeList.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.betlimitmoney = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("BetMoney"))
                throw $util.ProtocolError("missing required 'BetMoney'", { instance: message });
            if (!message.hasOwnProperty("BetMoneyLimit"))
                throw $util.ProtocolError("missing required 'BetMoneyLimit'", { instance: message });
            if (!message.hasOwnProperty("ZhuangLimit"))
                throw $util.ProtocolError("missing required 'ZhuangLimit'", { instance: message });
            if (!message.hasOwnProperty("MaxZhuang"))
                throw $util.ProtocolError("missing required 'MaxZhuang'", { instance: message });
            if (!message.hasOwnProperty("BetRange"))
                throw $util.ProtocolError("missing required 'BetRange'", { instance: message });
            return message;
        };

        /**
         * Decodes a BJL_Setting message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_BJL.BJL_Setting
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_BJL.BJL_Setting} BJL_Setting
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BJL_Setting.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BJL_Setting message.
         * @function verify
         * @memberof GameMsg_BJL.BJL_Setting
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BJL_Setting.verify = function verify(message) {
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
            if (!$util.isInteger(message.BetMoneyLimit) && !(message.BetMoneyLimit && $util.isInteger(message.BetMoneyLimit.low) && $util.isInteger(message.BetMoneyLimit.high)))
                return "BetMoneyLimit: integer|Long expected";
            if (!$util.isInteger(message.ZhuangLimit) && !(message.ZhuangLimit && $util.isInteger(message.ZhuangLimit.low) && $util.isInteger(message.ZhuangLimit.high)))
                return "ZhuangLimit: integer|Long expected";
            if (!$util.isInteger(message.MaxZhuang))
                return "MaxZhuang: integer expected";
            {
                var error = $root.GameMsg_BJL.BJL_BetRangeList.verify(message.BetRange);
                if (error)
                    return "BetRange." + error;
            }
            if (message.betlimitmoney != null && message.hasOwnProperty("betlimitmoney"))
                if (!$util.isInteger(message.betlimitmoney) && !(message.betlimitmoney && $util.isInteger(message.betlimitmoney.low) && $util.isInteger(message.betlimitmoney.high)))
                    return "betlimitmoney: integer|Long expected";
            return null;
        };

        /**
         * Creates a BJL_Setting message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_BJL.BJL_Setting
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_BJL.BJL_Setting} BJL_Setting
         */
        BJL_Setting.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_BJL.BJL_Setting)
                return object;
            var message = new $root.GameMsg_BJL.BJL_Setting();
            if (object.BetCount) {
                if (!Array.isArray(object.BetCount))
                    throw TypeError(".GameMsg_BJL.BJL_Setting.BetCount: array expected");
                message.BetCount = [];
                for (var i = 0; i < object.BetCount.length; ++i)
                    message.BetCount[i] = object.BetCount[i] | 0;
            }
            if (object.BetMoney != null)
                message.BetMoney = object.BetMoney | 0;
            if (object.BetMoneyLimit != null)
                if ($util.Long)
                    (message.BetMoneyLimit = $util.Long.fromValue(object.BetMoneyLimit)).unsigned = false;
                else if (typeof object.BetMoneyLimit === "string")
                    message.BetMoneyLimit = parseInt(object.BetMoneyLimit, 10);
                else if (typeof object.BetMoneyLimit === "number")
                    message.BetMoneyLimit = object.BetMoneyLimit;
                else if (typeof object.BetMoneyLimit === "object")
                    message.BetMoneyLimit = new $util.LongBits(object.BetMoneyLimit.low >>> 0, object.BetMoneyLimit.high >>> 0).toNumber();
            if (object.ZhuangLimit != null)
                if ($util.Long)
                    (message.ZhuangLimit = $util.Long.fromValue(object.ZhuangLimit)).unsigned = false;
                else if (typeof object.ZhuangLimit === "string")
                    message.ZhuangLimit = parseInt(object.ZhuangLimit, 10);
                else if (typeof object.ZhuangLimit === "number")
                    message.ZhuangLimit = object.ZhuangLimit;
                else if (typeof object.ZhuangLimit === "object")
                    message.ZhuangLimit = new $util.LongBits(object.ZhuangLimit.low >>> 0, object.ZhuangLimit.high >>> 0).toNumber();
            if (object.MaxZhuang != null)
                message.MaxZhuang = object.MaxZhuang | 0;
            if (object.BetRange != null) {
                if (typeof object.BetRange !== "object")
                    throw TypeError(".GameMsg_BJL.BJL_Setting.BetRange: object expected");
                message.BetRange = $root.GameMsg_BJL.BJL_BetRangeList.fromObject(object.BetRange);
            }
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
         * Creates a plain object from a BJL_Setting message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_BJL.BJL_Setting
         * @static
         * @param {GameMsg_BJL.BJL_Setting} message BJL_Setting
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BJL_Setting.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.BetCount = [];
            if (options.defaults) {
                object.BetMoney = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.BetMoneyLimit = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.BetMoneyLimit = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.ZhuangLimit = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.ZhuangLimit = options.longs === String ? "0" : 0;
                object.MaxZhuang = 0;
                object.BetRange = null;
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
            if (message.BetMoneyLimit != null && message.hasOwnProperty("BetMoneyLimit"))
                if (typeof message.BetMoneyLimit === "number")
                    object.BetMoneyLimit = options.longs === String ? String(message.BetMoneyLimit) : message.BetMoneyLimit;
                else
                    object.BetMoneyLimit = options.longs === String ? $util.Long.prototype.toString.call(message.BetMoneyLimit) : options.longs === Number ? new $util.LongBits(message.BetMoneyLimit.low >>> 0, message.BetMoneyLimit.high >>> 0).toNumber() : message.BetMoneyLimit;
            if (message.ZhuangLimit != null && message.hasOwnProperty("ZhuangLimit"))
                if (typeof message.ZhuangLimit === "number")
                    object.ZhuangLimit = options.longs === String ? String(message.ZhuangLimit) : message.ZhuangLimit;
                else
                    object.ZhuangLimit = options.longs === String ? $util.Long.prototype.toString.call(message.ZhuangLimit) : options.longs === Number ? new $util.LongBits(message.ZhuangLimit.low >>> 0, message.ZhuangLimit.high >>> 0).toNumber() : message.ZhuangLimit;
            if (message.MaxZhuang != null && message.hasOwnProperty("MaxZhuang"))
                object.MaxZhuang = message.MaxZhuang;
            if (message.BetRange != null && message.hasOwnProperty("BetRange"))
                object.BetRange = $root.GameMsg_BJL.BJL_BetRangeList.toObject(message.BetRange, options);
            if (message.betlimitmoney != null && message.hasOwnProperty("betlimitmoney"))
                if (typeof message.betlimitmoney === "number")
                    object.betlimitmoney = options.longs === String ? String(message.betlimitmoney) : message.betlimitmoney;
                else
                    object.betlimitmoney = options.longs === String ? $util.Long.prototype.toString.call(message.betlimitmoney) : options.longs === Number ? new $util.LongBits(message.betlimitmoney.low >>> 0, message.betlimitmoney.high >>> 0).toNumber() : message.betlimitmoney;
            return object;
        };

        /**
         * Converts this BJL_Setting to JSON.
         * @function toJSON
         * @memberof GameMsg_BJL.BJL_Setting
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BJL_Setting.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BJL_Setting;
    })();

    GameMsg_BJL.BJL_Sate = (function() {

        /**
         * Properties of a BJL_Sate.
         * @memberof GameMsg_BJL
         * @interface IBJL_Sate
         * @property {number} State BJL_Sate State
         * @property {number} Time BJL_Sate Time
         */

        /**
         * Constructs a new BJL_Sate.
         * @memberof GameMsg_BJL
         * @classdesc Represents a BJL_Sate.
         * @implements IBJL_Sate
         * @constructor
         * @param {GameMsg_BJL.IBJL_Sate=} [properties] Properties to set
         */
        function BJL_Sate(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BJL_Sate State.
         * @member {number} State
         * @memberof GameMsg_BJL.BJL_Sate
         * @instance
         */
        BJL_Sate.prototype.State = 0;

        /**
         * BJL_Sate Time.
         * @member {number} Time
         * @memberof GameMsg_BJL.BJL_Sate
         * @instance
         */
        BJL_Sate.prototype.Time = 0;

        /**
         * Creates a new BJL_Sate instance using the specified properties.
         * @function create
         * @memberof GameMsg_BJL.BJL_Sate
         * @static
         * @param {GameMsg_BJL.IBJL_Sate=} [properties] Properties to set
         * @returns {GameMsg_BJL.BJL_Sate} BJL_Sate instance
         */
        BJL_Sate.create = function create(properties) {
            return new BJL_Sate(properties);
        };

        /**
         * Encodes the specified BJL_Sate message. Does not implicitly {@link GameMsg_BJL.BJL_Sate.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_BJL.BJL_Sate
         * @static
         * @param {GameMsg_BJL.IBJL_Sate} message BJL_Sate message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BJL_Sate.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.State);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.Time);
            return writer;
        };

        /**
         * Encodes the specified BJL_Sate message, length delimited. Does not implicitly {@link GameMsg_BJL.BJL_Sate.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_BJL.BJL_Sate
         * @static
         * @param {GameMsg_BJL.IBJL_Sate} message BJL_Sate message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BJL_Sate.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BJL_Sate message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_BJL.BJL_Sate
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_BJL.BJL_Sate} BJL_Sate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BJL_Sate.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_BJL.BJL_Sate();
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
         * Decodes a BJL_Sate message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_BJL.BJL_Sate
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_BJL.BJL_Sate} BJL_Sate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BJL_Sate.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BJL_Sate message.
         * @function verify
         * @memberof GameMsg_BJL.BJL_Sate
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BJL_Sate.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.State))
                return "State: integer expected";
            if (!$util.isInteger(message.Time))
                return "Time: integer expected";
            return null;
        };

        /**
         * Creates a BJL_Sate message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_BJL.BJL_Sate
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_BJL.BJL_Sate} BJL_Sate
         */
        BJL_Sate.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_BJL.BJL_Sate)
                return object;
            var message = new $root.GameMsg_BJL.BJL_Sate();
            if (object.State != null)
                message.State = object.State | 0;
            if (object.Time != null)
                message.Time = object.Time | 0;
            return message;
        };

        /**
         * Creates a plain object from a BJL_Sate message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_BJL.BJL_Sate
         * @static
         * @param {GameMsg_BJL.BJL_Sate} message BJL_Sate
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BJL_Sate.toObject = function toObject(message, options) {
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
         * Converts this BJL_Sate to JSON.
         * @function toJSON
         * @memberof GameMsg_BJL.BJL_Sate
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BJL_Sate.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BJL_Sate;
    })();

    GameMsg_BJL.BJL_UserBetInfo = (function() {

        /**
         * Properties of a BJL_UserBetInfo.
         * @memberof GameMsg_BJL
         * @interface IBJL_UserBetInfo
         * @property {number|Long} UserMoney BJL_UserBetInfo UserMoney
         * @property {Array.<GameMsg_BJL.IBJL_BroadCastBet>|null} [BetInfo] BJL_UserBetInfo BetInfo
         */

        /**
         * Constructs a new BJL_UserBetInfo.
         * @memberof GameMsg_BJL
         * @classdesc Represents a BJL_UserBetInfo.
         * @implements IBJL_UserBetInfo
         * @constructor
         * @param {GameMsg_BJL.IBJL_UserBetInfo=} [properties] Properties to set
         */
        function BJL_UserBetInfo(properties) {
            this.BetInfo = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BJL_UserBetInfo UserMoney.
         * @member {number|Long} UserMoney
         * @memberof GameMsg_BJL.BJL_UserBetInfo
         * @instance
         */
        BJL_UserBetInfo.prototype.UserMoney = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * BJL_UserBetInfo BetInfo.
         * @member {Array.<GameMsg_BJL.IBJL_BroadCastBet>} BetInfo
         * @memberof GameMsg_BJL.BJL_UserBetInfo
         * @instance
         */
        BJL_UserBetInfo.prototype.BetInfo = $util.emptyArray;

        /**
         * Creates a new BJL_UserBetInfo instance using the specified properties.
         * @function create
         * @memberof GameMsg_BJL.BJL_UserBetInfo
         * @static
         * @param {GameMsg_BJL.IBJL_UserBetInfo=} [properties] Properties to set
         * @returns {GameMsg_BJL.BJL_UserBetInfo} BJL_UserBetInfo instance
         */
        BJL_UserBetInfo.create = function create(properties) {
            return new BJL_UserBetInfo(properties);
        };

        /**
         * Encodes the specified BJL_UserBetInfo message. Does not implicitly {@link GameMsg_BJL.BJL_UserBetInfo.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_BJL.BJL_UserBetInfo
         * @static
         * @param {GameMsg_BJL.IBJL_UserBetInfo} message BJL_UserBetInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BJL_UserBetInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int64(message.UserMoney);
            if (message.BetInfo != null && message.BetInfo.length)
                for (var i = 0; i < message.BetInfo.length; ++i)
                    $root.GameMsg_BJL.BJL_BroadCastBet.encode(message.BetInfo[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified BJL_UserBetInfo message, length delimited. Does not implicitly {@link GameMsg_BJL.BJL_UserBetInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_BJL.BJL_UserBetInfo
         * @static
         * @param {GameMsg_BJL.IBJL_UserBetInfo} message BJL_UserBetInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BJL_UserBetInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BJL_UserBetInfo message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_BJL.BJL_UserBetInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_BJL.BJL_UserBetInfo} BJL_UserBetInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BJL_UserBetInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_BJL.BJL_UserBetInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.UserMoney = reader.int64();
                    break;
                case 2:
                    if (!(message.BetInfo && message.BetInfo.length))
                        message.BetInfo = [];
                    message.BetInfo.push($root.GameMsg_BJL.BJL_BroadCastBet.decode(reader, reader.uint32()));
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
         * Decodes a BJL_UserBetInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_BJL.BJL_UserBetInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_BJL.BJL_UserBetInfo} BJL_UserBetInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BJL_UserBetInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BJL_UserBetInfo message.
         * @function verify
         * @memberof GameMsg_BJL.BJL_UserBetInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BJL_UserBetInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.UserMoney) && !(message.UserMoney && $util.isInteger(message.UserMoney.low) && $util.isInteger(message.UserMoney.high)))
                return "UserMoney: integer|Long expected";
            if (message.BetInfo != null && message.hasOwnProperty("BetInfo")) {
                if (!Array.isArray(message.BetInfo))
                    return "BetInfo: array expected";
                for (var i = 0; i < message.BetInfo.length; ++i) {
                    var error = $root.GameMsg_BJL.BJL_BroadCastBet.verify(message.BetInfo[i]);
                    if (error)
                        return "BetInfo." + error;
                }
            }
            return null;
        };

        /**
         * Creates a BJL_UserBetInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_BJL.BJL_UserBetInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_BJL.BJL_UserBetInfo} BJL_UserBetInfo
         */
        BJL_UserBetInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_BJL.BJL_UserBetInfo)
                return object;
            var message = new $root.GameMsg_BJL.BJL_UserBetInfo();
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
                    throw TypeError(".GameMsg_BJL.BJL_UserBetInfo.BetInfo: array expected");
                message.BetInfo = [];
                for (var i = 0; i < object.BetInfo.length; ++i) {
                    if (typeof object.BetInfo[i] !== "object")
                        throw TypeError(".GameMsg_BJL.BJL_UserBetInfo.BetInfo: object expected");
                    message.BetInfo[i] = $root.GameMsg_BJL.BJL_BroadCastBet.fromObject(object.BetInfo[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a BJL_UserBetInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_BJL.BJL_UserBetInfo
         * @static
         * @param {GameMsg_BJL.BJL_UserBetInfo} message BJL_UserBetInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BJL_UserBetInfo.toObject = function toObject(message, options) {
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
                    object.BetInfo[j] = $root.GameMsg_BJL.BJL_BroadCastBet.toObject(message.BetInfo[j], options);
            }
            return object;
        };

        /**
         * Converts this BJL_UserBetInfo to JSON.
         * @function toJSON
         * @memberof GameMsg_BJL.BJL_UserBetInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BJL_UserBetInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BJL_UserBetInfo;
    })();

    GameMsg_BJL.BJL_BroadCastBetArr = (function() {

        /**
         * Properties of a BJL_BroadCastBetArr.
         * @memberof GameMsg_BJL
         * @interface IBJL_BroadCastBetArr
         * @property {number} UserID BJL_BroadCastBetArr UserID
         * @property {Array.<GameMsg_BJL.IBJL_BroadCastBet>|null} [BroadCastBetArr] BJL_BroadCastBetArr BroadCastBetArr
         */

        /**
         * Constructs a new BJL_BroadCastBetArr.
         * @memberof GameMsg_BJL
         * @classdesc Represents a BJL_BroadCastBetArr.
         * @implements IBJL_BroadCastBetArr
         * @constructor
         * @param {GameMsg_BJL.IBJL_BroadCastBetArr=} [properties] Properties to set
         */
        function BJL_BroadCastBetArr(properties) {
            this.BroadCastBetArr = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BJL_BroadCastBetArr UserID.
         * @member {number} UserID
         * @memberof GameMsg_BJL.BJL_BroadCastBetArr
         * @instance
         */
        BJL_BroadCastBetArr.prototype.UserID = 0;

        /**
         * BJL_BroadCastBetArr BroadCastBetArr.
         * @member {Array.<GameMsg_BJL.IBJL_BroadCastBet>} BroadCastBetArr
         * @memberof GameMsg_BJL.BJL_BroadCastBetArr
         * @instance
         */
        BJL_BroadCastBetArr.prototype.BroadCastBetArr = $util.emptyArray;

        /**
         * Creates a new BJL_BroadCastBetArr instance using the specified properties.
         * @function create
         * @memberof GameMsg_BJL.BJL_BroadCastBetArr
         * @static
         * @param {GameMsg_BJL.IBJL_BroadCastBetArr=} [properties] Properties to set
         * @returns {GameMsg_BJL.BJL_BroadCastBetArr} BJL_BroadCastBetArr instance
         */
        BJL_BroadCastBetArr.create = function create(properties) {
            return new BJL_BroadCastBetArr(properties);
        };

        /**
         * Encodes the specified BJL_BroadCastBetArr message. Does not implicitly {@link GameMsg_BJL.BJL_BroadCastBetArr.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_BJL.BJL_BroadCastBetArr
         * @static
         * @param {GameMsg_BJL.IBJL_BroadCastBetArr} message BJL_BroadCastBetArr message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BJL_BroadCastBetArr.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.UserID);
            if (message.BroadCastBetArr != null && message.BroadCastBetArr.length)
                for (var i = 0; i < message.BroadCastBetArr.length; ++i)
                    $root.GameMsg_BJL.BJL_BroadCastBet.encode(message.BroadCastBetArr[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified BJL_BroadCastBetArr message, length delimited. Does not implicitly {@link GameMsg_BJL.BJL_BroadCastBetArr.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_BJL.BJL_BroadCastBetArr
         * @static
         * @param {GameMsg_BJL.IBJL_BroadCastBetArr} message BJL_BroadCastBetArr message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BJL_BroadCastBetArr.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BJL_BroadCastBetArr message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_BJL.BJL_BroadCastBetArr
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_BJL.BJL_BroadCastBetArr} BJL_BroadCastBetArr
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BJL_BroadCastBetArr.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_BJL.BJL_BroadCastBetArr();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.UserID = reader.int32();
                    break;
                case 2:
                    if (!(message.BroadCastBetArr && message.BroadCastBetArr.length))
                        message.BroadCastBetArr = [];
                    message.BroadCastBetArr.push($root.GameMsg_BJL.BJL_BroadCastBet.decode(reader, reader.uint32()));
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
         * Decodes a BJL_BroadCastBetArr message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_BJL.BJL_BroadCastBetArr
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_BJL.BJL_BroadCastBetArr} BJL_BroadCastBetArr
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BJL_BroadCastBetArr.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BJL_BroadCastBetArr message.
         * @function verify
         * @memberof GameMsg_BJL.BJL_BroadCastBetArr
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BJL_BroadCastBetArr.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.UserID))
                return "UserID: integer expected";
            if (message.BroadCastBetArr != null && message.hasOwnProperty("BroadCastBetArr")) {
                if (!Array.isArray(message.BroadCastBetArr))
                    return "BroadCastBetArr: array expected";
                for (var i = 0; i < message.BroadCastBetArr.length; ++i) {
                    var error = $root.GameMsg_BJL.BJL_BroadCastBet.verify(message.BroadCastBetArr[i]);
                    if (error)
                        return "BroadCastBetArr." + error;
                }
            }
            return null;
        };

        /**
         * Creates a BJL_BroadCastBetArr message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_BJL.BJL_BroadCastBetArr
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_BJL.BJL_BroadCastBetArr} BJL_BroadCastBetArr
         */
        BJL_BroadCastBetArr.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_BJL.BJL_BroadCastBetArr)
                return object;
            var message = new $root.GameMsg_BJL.BJL_BroadCastBetArr();
            if (object.UserID != null)
                message.UserID = object.UserID | 0;
            if (object.BroadCastBetArr) {
                if (!Array.isArray(object.BroadCastBetArr))
                    throw TypeError(".GameMsg_BJL.BJL_BroadCastBetArr.BroadCastBetArr: array expected");
                message.BroadCastBetArr = [];
                for (var i = 0; i < object.BroadCastBetArr.length; ++i) {
                    if (typeof object.BroadCastBetArr[i] !== "object")
                        throw TypeError(".GameMsg_BJL.BJL_BroadCastBetArr.BroadCastBetArr: object expected");
                    message.BroadCastBetArr[i] = $root.GameMsg_BJL.BJL_BroadCastBet.fromObject(object.BroadCastBetArr[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a BJL_BroadCastBetArr message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_BJL.BJL_BroadCastBetArr
         * @static
         * @param {GameMsg_BJL.BJL_BroadCastBetArr} message BJL_BroadCastBetArr
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BJL_BroadCastBetArr.toObject = function toObject(message, options) {
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
                    object.BroadCastBetArr[j] = $root.GameMsg_BJL.BJL_BroadCastBet.toObject(message.BroadCastBetArr[j], options);
            }
            return object;
        };

        /**
         * Converts this BJL_BroadCastBetArr to JSON.
         * @function toJSON
         * @memberof GameMsg_BJL.BJL_BroadCastBetArr
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BJL_BroadCastBetArr.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BJL_BroadCastBetArr;
    })();

    GameMsg_BJL.BJL_BroadCastBet = (function() {

        /**
         * Properties of a BJL_BroadCastBet.
         * @memberof GameMsg_BJL
         * @interface IBJL_BroadCastBet
         * @property {number} Type BJL_BroadCastBet Type
         * @property {number|Long} Money BJL_BroadCastBet Money
         * @property {boolean} LuckyStar BJL_BroadCastBet LuckyStar
         */

        /**
         * Constructs a new BJL_BroadCastBet.
         * @memberof GameMsg_BJL
         * @classdesc Represents a BJL_BroadCastBet.
         * @implements IBJL_BroadCastBet
         * @constructor
         * @param {GameMsg_BJL.IBJL_BroadCastBet=} [properties] Properties to set
         */
        function BJL_BroadCastBet(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BJL_BroadCastBet Type.
         * @member {number} Type
         * @memberof GameMsg_BJL.BJL_BroadCastBet
         * @instance
         */
        BJL_BroadCastBet.prototype.Type = 0;

        /**
         * BJL_BroadCastBet Money.
         * @member {number|Long} Money
         * @memberof GameMsg_BJL.BJL_BroadCastBet
         * @instance
         */
        BJL_BroadCastBet.prototype.Money = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * BJL_BroadCastBet LuckyStar.
         * @member {boolean} LuckyStar
         * @memberof GameMsg_BJL.BJL_BroadCastBet
         * @instance
         */
        BJL_BroadCastBet.prototype.LuckyStar = false;

        /**
         * Creates a new BJL_BroadCastBet instance using the specified properties.
         * @function create
         * @memberof GameMsg_BJL.BJL_BroadCastBet
         * @static
         * @param {GameMsg_BJL.IBJL_BroadCastBet=} [properties] Properties to set
         * @returns {GameMsg_BJL.BJL_BroadCastBet} BJL_BroadCastBet instance
         */
        BJL_BroadCastBet.create = function create(properties) {
            return new BJL_BroadCastBet(properties);
        };

        /**
         * Encodes the specified BJL_BroadCastBet message. Does not implicitly {@link GameMsg_BJL.BJL_BroadCastBet.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_BJL.BJL_BroadCastBet
         * @static
         * @param {GameMsg_BJL.IBJL_BroadCastBet} message BJL_BroadCastBet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BJL_BroadCastBet.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.Type);
            writer.uint32(/* id 2, wireType 0 =*/16).int64(message.Money);
            writer.uint32(/* id 3, wireType 0 =*/24).bool(message.LuckyStar);
            return writer;
        };

        /**
         * Encodes the specified BJL_BroadCastBet message, length delimited. Does not implicitly {@link GameMsg_BJL.BJL_BroadCastBet.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_BJL.BJL_BroadCastBet
         * @static
         * @param {GameMsg_BJL.IBJL_BroadCastBet} message BJL_BroadCastBet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BJL_BroadCastBet.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BJL_BroadCastBet message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_BJL.BJL_BroadCastBet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_BJL.BJL_BroadCastBet} BJL_BroadCastBet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BJL_BroadCastBet.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_BJL.BJL_BroadCastBet();
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
         * Decodes a BJL_BroadCastBet message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_BJL.BJL_BroadCastBet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_BJL.BJL_BroadCastBet} BJL_BroadCastBet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BJL_BroadCastBet.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BJL_BroadCastBet message.
         * @function verify
         * @memberof GameMsg_BJL.BJL_BroadCastBet
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BJL_BroadCastBet.verify = function verify(message) {
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
         * Creates a BJL_BroadCastBet message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_BJL.BJL_BroadCastBet
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_BJL.BJL_BroadCastBet} BJL_BroadCastBet
         */
        BJL_BroadCastBet.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_BJL.BJL_BroadCastBet)
                return object;
            var message = new $root.GameMsg_BJL.BJL_BroadCastBet();
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
         * Creates a plain object from a BJL_BroadCastBet message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_BJL.BJL_BroadCastBet
         * @static
         * @param {GameMsg_BJL.BJL_BroadCastBet} message BJL_BroadCastBet
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BJL_BroadCastBet.toObject = function toObject(message, options) {
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
         * Converts this BJL_BroadCastBet to JSON.
         * @function toJSON
         * @memberof GameMsg_BJL.BJL_BroadCastBet
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BJL_BroadCastBet.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BJL_BroadCastBet;
    })();

    GameMsg_BJL.BJL_BetArr = (function() {

        /**
         * Properties of a BJL_BetArr.
         * @memberof GameMsg_BJL
         * @interface IBJL_BetArr
         * @property {Array.<GameMsg_BJL.IBJL_Bet>|null} [BetArr] BJL_BetArr BetArr
         */

        /**
         * Constructs a new BJL_BetArr.
         * @memberof GameMsg_BJL
         * @classdesc Represents a BJL_BetArr.
         * @implements IBJL_BetArr
         * @constructor
         * @param {GameMsg_BJL.IBJL_BetArr=} [properties] Properties to set
         */
        function BJL_BetArr(properties) {
            this.BetArr = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BJL_BetArr BetArr.
         * @member {Array.<GameMsg_BJL.IBJL_Bet>} BetArr
         * @memberof GameMsg_BJL.BJL_BetArr
         * @instance
         */
        BJL_BetArr.prototype.BetArr = $util.emptyArray;

        /**
         * Creates a new BJL_BetArr instance using the specified properties.
         * @function create
         * @memberof GameMsg_BJL.BJL_BetArr
         * @static
         * @param {GameMsg_BJL.IBJL_BetArr=} [properties] Properties to set
         * @returns {GameMsg_BJL.BJL_BetArr} BJL_BetArr instance
         */
        BJL_BetArr.create = function create(properties) {
            return new BJL_BetArr(properties);
        };

        /**
         * Encodes the specified BJL_BetArr message. Does not implicitly {@link GameMsg_BJL.BJL_BetArr.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_BJL.BJL_BetArr
         * @static
         * @param {GameMsg_BJL.IBJL_BetArr} message BJL_BetArr message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BJL_BetArr.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.BetArr != null && message.BetArr.length)
                for (var i = 0; i < message.BetArr.length; ++i)
                    $root.GameMsg_BJL.BJL_Bet.encode(message.BetArr[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified BJL_BetArr message, length delimited. Does not implicitly {@link GameMsg_BJL.BJL_BetArr.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_BJL.BJL_BetArr
         * @static
         * @param {GameMsg_BJL.IBJL_BetArr} message BJL_BetArr message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BJL_BetArr.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BJL_BetArr message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_BJL.BJL_BetArr
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_BJL.BJL_BetArr} BJL_BetArr
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BJL_BetArr.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_BJL.BJL_BetArr();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.BetArr && message.BetArr.length))
                        message.BetArr = [];
                    message.BetArr.push($root.GameMsg_BJL.BJL_Bet.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a BJL_BetArr message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_BJL.BJL_BetArr
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_BJL.BJL_BetArr} BJL_BetArr
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BJL_BetArr.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BJL_BetArr message.
         * @function verify
         * @memberof GameMsg_BJL.BJL_BetArr
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BJL_BetArr.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.BetArr != null && message.hasOwnProperty("BetArr")) {
                if (!Array.isArray(message.BetArr))
                    return "BetArr: array expected";
                for (var i = 0; i < message.BetArr.length; ++i) {
                    var error = $root.GameMsg_BJL.BJL_Bet.verify(message.BetArr[i]);
                    if (error)
                        return "BetArr." + error;
                }
            }
            return null;
        };

        /**
         * Creates a BJL_BetArr message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_BJL.BJL_BetArr
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_BJL.BJL_BetArr} BJL_BetArr
         */
        BJL_BetArr.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_BJL.BJL_BetArr)
                return object;
            var message = new $root.GameMsg_BJL.BJL_BetArr();
            if (object.BetArr) {
                if (!Array.isArray(object.BetArr))
                    throw TypeError(".GameMsg_BJL.BJL_BetArr.BetArr: array expected");
                message.BetArr = [];
                for (var i = 0; i < object.BetArr.length; ++i) {
                    if (typeof object.BetArr[i] !== "object")
                        throw TypeError(".GameMsg_BJL.BJL_BetArr.BetArr: object expected");
                    message.BetArr[i] = $root.GameMsg_BJL.BJL_Bet.fromObject(object.BetArr[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a BJL_BetArr message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_BJL.BJL_BetArr
         * @static
         * @param {GameMsg_BJL.BJL_BetArr} message BJL_BetArr
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BJL_BetArr.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.BetArr = [];
            if (message.BetArr && message.BetArr.length) {
                object.BetArr = [];
                for (var j = 0; j < message.BetArr.length; ++j)
                    object.BetArr[j] = $root.GameMsg_BJL.BJL_Bet.toObject(message.BetArr[j], options);
            }
            return object;
        };

        /**
         * Converts this BJL_BetArr to JSON.
         * @function toJSON
         * @memberof GameMsg_BJL.BJL_BetArr
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BJL_BetArr.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BJL_BetArr;
    })();

    GameMsg_BJL.BJL_Bet = (function() {

        /**
         * Properties of a BJL_Bet.
         * @memberof GameMsg_BJL
         * @interface IBJL_Bet
         * @property {number} BetType BJL_Bet BetType
         * @property {number} Count BJL_Bet Count
         */

        /**
         * Constructs a new BJL_Bet.
         * @memberof GameMsg_BJL
         * @classdesc Represents a BJL_Bet.
         * @implements IBJL_Bet
         * @constructor
         * @param {GameMsg_BJL.IBJL_Bet=} [properties] Properties to set
         */
        function BJL_Bet(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BJL_Bet BetType.
         * @member {number} BetType
         * @memberof GameMsg_BJL.BJL_Bet
         * @instance
         */
        BJL_Bet.prototype.BetType = 0;

        /**
         * BJL_Bet Count.
         * @member {number} Count
         * @memberof GameMsg_BJL.BJL_Bet
         * @instance
         */
        BJL_Bet.prototype.Count = 0;

        /**
         * Creates a new BJL_Bet instance using the specified properties.
         * @function create
         * @memberof GameMsg_BJL.BJL_Bet
         * @static
         * @param {GameMsg_BJL.IBJL_Bet=} [properties] Properties to set
         * @returns {GameMsg_BJL.BJL_Bet} BJL_Bet instance
         */
        BJL_Bet.create = function create(properties) {
            return new BJL_Bet(properties);
        };

        /**
         * Encodes the specified BJL_Bet message. Does not implicitly {@link GameMsg_BJL.BJL_Bet.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_BJL.BJL_Bet
         * @static
         * @param {GameMsg_BJL.IBJL_Bet} message BJL_Bet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BJL_Bet.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.BetType);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.Count);
            return writer;
        };

        /**
         * Encodes the specified BJL_Bet message, length delimited. Does not implicitly {@link GameMsg_BJL.BJL_Bet.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_BJL.BJL_Bet
         * @static
         * @param {GameMsg_BJL.IBJL_Bet} message BJL_Bet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BJL_Bet.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BJL_Bet message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_BJL.BJL_Bet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_BJL.BJL_Bet} BJL_Bet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BJL_Bet.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_BJL.BJL_Bet();
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
         * Decodes a BJL_Bet message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_BJL.BJL_Bet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_BJL.BJL_Bet} BJL_Bet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BJL_Bet.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BJL_Bet message.
         * @function verify
         * @memberof GameMsg_BJL.BJL_Bet
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BJL_Bet.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.BetType))
                return "BetType: integer expected";
            if (!$util.isInteger(message.Count))
                return "Count: integer expected";
            return null;
        };

        /**
         * Creates a BJL_Bet message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_BJL.BJL_Bet
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_BJL.BJL_Bet} BJL_Bet
         */
        BJL_Bet.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_BJL.BJL_Bet)
                return object;
            var message = new $root.GameMsg_BJL.BJL_Bet();
            if (object.BetType != null)
                message.BetType = object.BetType | 0;
            if (object.Count != null)
                message.Count = object.Count | 0;
            return message;
        };

        /**
         * Creates a plain object from a BJL_Bet message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_BJL.BJL_Bet
         * @static
         * @param {GameMsg_BJL.BJL_Bet} message BJL_Bet
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BJL_Bet.toObject = function toObject(message, options) {
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
         * Converts this BJL_Bet to JSON.
         * @function toJSON
         * @memberof GameMsg_BJL.BJL_Bet
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BJL_Bet.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BJL_Bet;
    })();

    GameMsg_BJL.BJL_BetRet = (function() {

        /**
         * Properties of a BJL_BetRet.
         * @memberof GameMsg_BJL
         * @interface IBJL_BetRet
         * @property {number} Ret BJL_BetRet Ret
         * @property {number|Long} Money BJL_BetRet Money
         * @property {number|null} [Type] BJL_BetRet Type
         * @property {Array.<GameMsg_BJL.IBJL_Bet>|null} [BetArr] BJL_BetRet BetArr
         */

        /**
         * Constructs a new BJL_BetRet.
         * @memberof GameMsg_BJL
         * @classdesc Represents a BJL_BetRet.
         * @implements IBJL_BetRet
         * @constructor
         * @param {GameMsg_BJL.IBJL_BetRet=} [properties] Properties to set
         */
        function BJL_BetRet(properties) {
            this.BetArr = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BJL_BetRet Ret.
         * @member {number} Ret
         * @memberof GameMsg_BJL.BJL_BetRet
         * @instance
         */
        BJL_BetRet.prototype.Ret = 0;

        /**
         * BJL_BetRet Money.
         * @member {number|Long} Money
         * @memberof GameMsg_BJL.BJL_BetRet
         * @instance
         */
        BJL_BetRet.prototype.Money = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * BJL_BetRet Type.
         * @member {number} Type
         * @memberof GameMsg_BJL.BJL_BetRet
         * @instance
         */
        BJL_BetRet.prototype.Type = 0;

        /**
         * BJL_BetRet BetArr.
         * @member {Array.<GameMsg_BJL.IBJL_Bet>} BetArr
         * @memberof GameMsg_BJL.BJL_BetRet
         * @instance
         */
        BJL_BetRet.prototype.BetArr = $util.emptyArray;

        /**
         * Creates a new BJL_BetRet instance using the specified properties.
         * @function create
         * @memberof GameMsg_BJL.BJL_BetRet
         * @static
         * @param {GameMsg_BJL.IBJL_BetRet=} [properties] Properties to set
         * @returns {GameMsg_BJL.BJL_BetRet} BJL_BetRet instance
         */
        BJL_BetRet.create = function create(properties) {
            return new BJL_BetRet(properties);
        };

        /**
         * Encodes the specified BJL_BetRet message. Does not implicitly {@link GameMsg_BJL.BJL_BetRet.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_BJL.BJL_BetRet
         * @static
         * @param {GameMsg_BJL.IBJL_BetRet} message BJL_BetRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BJL_BetRet.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.Ret);
            writer.uint32(/* id 2, wireType 0 =*/16).int64(message.Money);
            if (message.Type != null && message.hasOwnProperty("Type"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.Type);
            if (message.BetArr != null && message.BetArr.length)
                for (var i = 0; i < message.BetArr.length; ++i)
                    $root.GameMsg_BJL.BJL_Bet.encode(message.BetArr[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified BJL_BetRet message, length delimited. Does not implicitly {@link GameMsg_BJL.BJL_BetRet.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_BJL.BJL_BetRet
         * @static
         * @param {GameMsg_BJL.IBJL_BetRet} message BJL_BetRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BJL_BetRet.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BJL_BetRet message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_BJL.BJL_BetRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_BJL.BJL_BetRet} BJL_BetRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BJL_BetRet.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_BJL.BJL_BetRet();
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
                    message.BetArr.push($root.GameMsg_BJL.BJL_Bet.decode(reader, reader.uint32()));
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
         * Decodes a BJL_BetRet message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_BJL.BJL_BetRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_BJL.BJL_BetRet} BJL_BetRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BJL_BetRet.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BJL_BetRet message.
         * @function verify
         * @memberof GameMsg_BJL.BJL_BetRet
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BJL_BetRet.verify = function verify(message) {
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
                    var error = $root.GameMsg_BJL.BJL_Bet.verify(message.BetArr[i]);
                    if (error)
                        return "BetArr." + error;
                }
            }
            return null;
        };

        /**
         * Creates a BJL_BetRet message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_BJL.BJL_BetRet
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_BJL.BJL_BetRet} BJL_BetRet
         */
        BJL_BetRet.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_BJL.BJL_BetRet)
                return object;
            var message = new $root.GameMsg_BJL.BJL_BetRet();
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
                    throw TypeError(".GameMsg_BJL.BJL_BetRet.BetArr: array expected");
                message.BetArr = [];
                for (var i = 0; i < object.BetArr.length; ++i) {
                    if (typeof object.BetArr[i] !== "object")
                        throw TypeError(".GameMsg_BJL.BJL_BetRet.BetArr: object expected");
                    message.BetArr[i] = $root.GameMsg_BJL.BJL_Bet.fromObject(object.BetArr[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a BJL_BetRet message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_BJL.BJL_BetRet
         * @static
         * @param {GameMsg_BJL.BJL_BetRet} message BJL_BetRet
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BJL_BetRet.toObject = function toObject(message, options) {
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
                    object.BetArr[j] = $root.GameMsg_BJL.BJL_Bet.toObject(message.BetArr[j], options);
            }
            return object;
        };

        /**
         * Converts this BJL_BetRet to JSON.
         * @function toJSON
         * @memberof GameMsg_BJL.BJL_BetRet
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BJL_BetRet.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BJL_BetRet;
    })();

    GameMsg_BJL.BJL_GameResultUserMoney = (function() {

        /**
         * Properties of a BJL_GameResultUserMoney.
         * @memberof GameMsg_BJL
         * @interface IBJL_GameResultUserMoney
         * @property {number|Long} ZhuangWin BJL_GameResultUserMoney ZhuangWin
         * @property {number|Long} SelfWin BJL_GameResultUserMoney SelfWin
         * @property {Array.<GameMsg_BJL.IBJL_WinUerInfo>|null} [WinUserInfo] BJL_GameResultUserMoney WinUserInfo
         * @property {Array.<GameMsg_BJL.IBJL_StageUerInfo>|null} [StageUerInfo] BJL_GameResultUserMoney StageUerInfo
         */

        /**
         * Constructs a new BJL_GameResultUserMoney.
         * @memberof GameMsg_BJL
         * @classdesc Represents a BJL_GameResultUserMoney.
         * @implements IBJL_GameResultUserMoney
         * @constructor
         * @param {GameMsg_BJL.IBJL_GameResultUserMoney=} [properties] Properties to set
         */
        function BJL_GameResultUserMoney(properties) {
            this.WinUserInfo = [];
            this.StageUerInfo = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BJL_GameResultUserMoney ZhuangWin.
         * @member {number|Long} ZhuangWin
         * @memberof GameMsg_BJL.BJL_GameResultUserMoney
         * @instance
         */
        BJL_GameResultUserMoney.prototype.ZhuangWin = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * BJL_GameResultUserMoney SelfWin.
         * @member {number|Long} SelfWin
         * @memberof GameMsg_BJL.BJL_GameResultUserMoney
         * @instance
         */
        BJL_GameResultUserMoney.prototype.SelfWin = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * BJL_GameResultUserMoney WinUserInfo.
         * @member {Array.<GameMsg_BJL.IBJL_WinUerInfo>} WinUserInfo
         * @memberof GameMsg_BJL.BJL_GameResultUserMoney
         * @instance
         */
        BJL_GameResultUserMoney.prototype.WinUserInfo = $util.emptyArray;

        /**
         * BJL_GameResultUserMoney StageUerInfo.
         * @member {Array.<GameMsg_BJL.IBJL_StageUerInfo>} StageUerInfo
         * @memberof GameMsg_BJL.BJL_GameResultUserMoney
         * @instance
         */
        BJL_GameResultUserMoney.prototype.StageUerInfo = $util.emptyArray;

        /**
         * Creates a new BJL_GameResultUserMoney instance using the specified properties.
         * @function create
         * @memberof GameMsg_BJL.BJL_GameResultUserMoney
         * @static
         * @param {GameMsg_BJL.IBJL_GameResultUserMoney=} [properties] Properties to set
         * @returns {GameMsg_BJL.BJL_GameResultUserMoney} BJL_GameResultUserMoney instance
         */
        BJL_GameResultUserMoney.create = function create(properties) {
            return new BJL_GameResultUserMoney(properties);
        };

        /**
         * Encodes the specified BJL_GameResultUserMoney message. Does not implicitly {@link GameMsg_BJL.BJL_GameResultUserMoney.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_BJL.BJL_GameResultUserMoney
         * @static
         * @param {GameMsg_BJL.IBJL_GameResultUserMoney} message BJL_GameResultUserMoney message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BJL_GameResultUserMoney.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int64(message.ZhuangWin);
            writer.uint32(/* id 2, wireType 0 =*/16).int64(message.SelfWin);
            if (message.WinUserInfo != null && message.WinUserInfo.length)
                for (var i = 0; i < message.WinUserInfo.length; ++i)
                    $root.GameMsg_BJL.BJL_WinUerInfo.encode(message.WinUserInfo[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.StageUerInfo != null && message.StageUerInfo.length)
                for (var i = 0; i < message.StageUerInfo.length; ++i)
                    $root.GameMsg_BJL.BJL_StageUerInfo.encode(message.StageUerInfo[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified BJL_GameResultUserMoney message, length delimited. Does not implicitly {@link GameMsg_BJL.BJL_GameResultUserMoney.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_BJL.BJL_GameResultUserMoney
         * @static
         * @param {GameMsg_BJL.IBJL_GameResultUserMoney} message BJL_GameResultUserMoney message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BJL_GameResultUserMoney.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BJL_GameResultUserMoney message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_BJL.BJL_GameResultUserMoney
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_BJL.BJL_GameResultUserMoney} BJL_GameResultUserMoney
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BJL_GameResultUserMoney.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_BJL.BJL_GameResultUserMoney();
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
                    message.WinUserInfo.push($root.GameMsg_BJL.BJL_WinUerInfo.decode(reader, reader.uint32()));
                    break;
                case 4:
                    if (!(message.StageUerInfo && message.StageUerInfo.length))
                        message.StageUerInfo = [];
                    message.StageUerInfo.push($root.GameMsg_BJL.BJL_StageUerInfo.decode(reader, reader.uint32()));
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
         * Decodes a BJL_GameResultUserMoney message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_BJL.BJL_GameResultUserMoney
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_BJL.BJL_GameResultUserMoney} BJL_GameResultUserMoney
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BJL_GameResultUserMoney.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BJL_GameResultUserMoney message.
         * @function verify
         * @memberof GameMsg_BJL.BJL_GameResultUserMoney
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BJL_GameResultUserMoney.verify = function verify(message) {
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
                    var error = $root.GameMsg_BJL.BJL_WinUerInfo.verify(message.WinUserInfo[i]);
                    if (error)
                        return "WinUserInfo." + error;
                }
            }
            if (message.StageUerInfo != null && message.hasOwnProperty("StageUerInfo")) {
                if (!Array.isArray(message.StageUerInfo))
                    return "StageUerInfo: array expected";
                for (var i = 0; i < message.StageUerInfo.length; ++i) {
                    var error = $root.GameMsg_BJL.BJL_StageUerInfo.verify(message.StageUerInfo[i]);
                    if (error)
                        return "StageUerInfo." + error;
                }
            }
            return null;
        };

        /**
         * Creates a BJL_GameResultUserMoney message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_BJL.BJL_GameResultUserMoney
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_BJL.BJL_GameResultUserMoney} BJL_GameResultUserMoney
         */
        BJL_GameResultUserMoney.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_BJL.BJL_GameResultUserMoney)
                return object;
            var message = new $root.GameMsg_BJL.BJL_GameResultUserMoney();
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
                    throw TypeError(".GameMsg_BJL.BJL_GameResultUserMoney.WinUserInfo: array expected");
                message.WinUserInfo = [];
                for (var i = 0; i < object.WinUserInfo.length; ++i) {
                    if (typeof object.WinUserInfo[i] !== "object")
                        throw TypeError(".GameMsg_BJL.BJL_GameResultUserMoney.WinUserInfo: object expected");
                    message.WinUserInfo[i] = $root.GameMsg_BJL.BJL_WinUerInfo.fromObject(object.WinUserInfo[i]);
                }
            }
            if (object.StageUerInfo) {
                if (!Array.isArray(object.StageUerInfo))
                    throw TypeError(".GameMsg_BJL.BJL_GameResultUserMoney.StageUerInfo: array expected");
                message.StageUerInfo = [];
                for (var i = 0; i < object.StageUerInfo.length; ++i) {
                    if (typeof object.StageUerInfo[i] !== "object")
                        throw TypeError(".GameMsg_BJL.BJL_GameResultUserMoney.StageUerInfo: object expected");
                    message.StageUerInfo[i] = $root.GameMsg_BJL.BJL_StageUerInfo.fromObject(object.StageUerInfo[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a BJL_GameResultUserMoney message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_BJL.BJL_GameResultUserMoney
         * @static
         * @param {GameMsg_BJL.BJL_GameResultUserMoney} message BJL_GameResultUserMoney
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BJL_GameResultUserMoney.toObject = function toObject(message, options) {
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
                    object.WinUserInfo[j] = $root.GameMsg_BJL.BJL_WinUerInfo.toObject(message.WinUserInfo[j], options);
            }
            if (message.StageUerInfo && message.StageUerInfo.length) {
                object.StageUerInfo = [];
                for (var j = 0; j < message.StageUerInfo.length; ++j)
                    object.StageUerInfo[j] = $root.GameMsg_BJL.BJL_StageUerInfo.toObject(message.StageUerInfo[j], options);
            }
            return object;
        };

        /**
         * Converts this BJL_GameResultUserMoney to JSON.
         * @function toJSON
         * @memberof GameMsg_BJL.BJL_GameResultUserMoney
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BJL_GameResultUserMoney.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BJL_GameResultUserMoney;
    })();

    GameMsg_BJL.BJL_WinUerInfo = (function() {

        /**
         * Properties of a BJL_WinUerInfo.
         * @memberof GameMsg_BJL
         * @interface IBJL_WinUerInfo
         * @property {string} UserName BJL_WinUerInfo UserName
         * @property {number|Long} Win BJL_WinUerInfo Win
         */

        /**
         * Constructs a new BJL_WinUerInfo.
         * @memberof GameMsg_BJL
         * @classdesc Represents a BJL_WinUerInfo.
         * @implements IBJL_WinUerInfo
         * @constructor
         * @param {GameMsg_BJL.IBJL_WinUerInfo=} [properties] Properties to set
         */
        function BJL_WinUerInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BJL_WinUerInfo UserName.
         * @member {string} UserName
         * @memberof GameMsg_BJL.BJL_WinUerInfo
         * @instance
         */
        BJL_WinUerInfo.prototype.UserName = "";

        /**
         * BJL_WinUerInfo Win.
         * @member {number|Long} Win
         * @memberof GameMsg_BJL.BJL_WinUerInfo
         * @instance
         */
        BJL_WinUerInfo.prototype.Win = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new BJL_WinUerInfo instance using the specified properties.
         * @function create
         * @memberof GameMsg_BJL.BJL_WinUerInfo
         * @static
         * @param {GameMsg_BJL.IBJL_WinUerInfo=} [properties] Properties to set
         * @returns {GameMsg_BJL.BJL_WinUerInfo} BJL_WinUerInfo instance
         */
        BJL_WinUerInfo.create = function create(properties) {
            return new BJL_WinUerInfo(properties);
        };

        /**
         * Encodes the specified BJL_WinUerInfo message. Does not implicitly {@link GameMsg_BJL.BJL_WinUerInfo.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_BJL.BJL_WinUerInfo
         * @static
         * @param {GameMsg_BJL.IBJL_WinUerInfo} message BJL_WinUerInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BJL_WinUerInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.UserName);
            writer.uint32(/* id 2, wireType 0 =*/16).int64(message.Win);
            return writer;
        };

        /**
         * Encodes the specified BJL_WinUerInfo message, length delimited. Does not implicitly {@link GameMsg_BJL.BJL_WinUerInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_BJL.BJL_WinUerInfo
         * @static
         * @param {GameMsg_BJL.IBJL_WinUerInfo} message BJL_WinUerInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BJL_WinUerInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BJL_WinUerInfo message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_BJL.BJL_WinUerInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_BJL.BJL_WinUerInfo} BJL_WinUerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BJL_WinUerInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_BJL.BJL_WinUerInfo();
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
         * Decodes a BJL_WinUerInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_BJL.BJL_WinUerInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_BJL.BJL_WinUerInfo} BJL_WinUerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BJL_WinUerInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BJL_WinUerInfo message.
         * @function verify
         * @memberof GameMsg_BJL.BJL_WinUerInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BJL_WinUerInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.UserName))
                return "UserName: string expected";
            if (!$util.isInteger(message.Win) && !(message.Win && $util.isInteger(message.Win.low) && $util.isInteger(message.Win.high)))
                return "Win: integer|Long expected";
            return null;
        };

        /**
         * Creates a BJL_WinUerInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_BJL.BJL_WinUerInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_BJL.BJL_WinUerInfo} BJL_WinUerInfo
         */
        BJL_WinUerInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_BJL.BJL_WinUerInfo)
                return object;
            var message = new $root.GameMsg_BJL.BJL_WinUerInfo();
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
         * Creates a plain object from a BJL_WinUerInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_BJL.BJL_WinUerInfo
         * @static
         * @param {GameMsg_BJL.BJL_WinUerInfo} message BJL_WinUerInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BJL_WinUerInfo.toObject = function toObject(message, options) {
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
         * Converts this BJL_WinUerInfo to JSON.
         * @function toJSON
         * @memberof GameMsg_BJL.BJL_WinUerInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BJL_WinUerInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BJL_WinUerInfo;
    })();

    GameMsg_BJL.BJL_StageUerInfo = (function() {

        /**
         * Properties of a BJL_StageUerInfo.
         * @memberof GameMsg_BJL
         * @interface IBJL_StageUerInfo
         * @property {number} UserID BJL_StageUerInfo UserID
         * @property {number|Long} Win BJL_StageUerInfo Win
         */

        /**
         * Constructs a new BJL_StageUerInfo.
         * @memberof GameMsg_BJL
         * @classdesc Represents a BJL_StageUerInfo.
         * @implements IBJL_StageUerInfo
         * @constructor
         * @param {GameMsg_BJL.IBJL_StageUerInfo=} [properties] Properties to set
         */
        function BJL_StageUerInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BJL_StageUerInfo UserID.
         * @member {number} UserID
         * @memberof GameMsg_BJL.BJL_StageUerInfo
         * @instance
         */
        BJL_StageUerInfo.prototype.UserID = 0;

        /**
         * BJL_StageUerInfo Win.
         * @member {number|Long} Win
         * @memberof GameMsg_BJL.BJL_StageUerInfo
         * @instance
         */
        BJL_StageUerInfo.prototype.Win = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new BJL_StageUerInfo instance using the specified properties.
         * @function create
         * @memberof GameMsg_BJL.BJL_StageUerInfo
         * @static
         * @param {GameMsg_BJL.IBJL_StageUerInfo=} [properties] Properties to set
         * @returns {GameMsg_BJL.BJL_StageUerInfo} BJL_StageUerInfo instance
         */
        BJL_StageUerInfo.create = function create(properties) {
            return new BJL_StageUerInfo(properties);
        };

        /**
         * Encodes the specified BJL_StageUerInfo message. Does not implicitly {@link GameMsg_BJL.BJL_StageUerInfo.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_BJL.BJL_StageUerInfo
         * @static
         * @param {GameMsg_BJL.IBJL_StageUerInfo} message BJL_StageUerInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BJL_StageUerInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.UserID);
            writer.uint32(/* id 2, wireType 0 =*/16).int64(message.Win);
            return writer;
        };

        /**
         * Encodes the specified BJL_StageUerInfo message, length delimited. Does not implicitly {@link GameMsg_BJL.BJL_StageUerInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_BJL.BJL_StageUerInfo
         * @static
         * @param {GameMsg_BJL.IBJL_StageUerInfo} message BJL_StageUerInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BJL_StageUerInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BJL_StageUerInfo message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_BJL.BJL_StageUerInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_BJL.BJL_StageUerInfo} BJL_StageUerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BJL_StageUerInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_BJL.BJL_StageUerInfo();
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
         * Decodes a BJL_StageUerInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_BJL.BJL_StageUerInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_BJL.BJL_StageUerInfo} BJL_StageUerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BJL_StageUerInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BJL_StageUerInfo message.
         * @function verify
         * @memberof GameMsg_BJL.BJL_StageUerInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BJL_StageUerInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.UserID))
                return "UserID: integer expected";
            if (!$util.isInteger(message.Win) && !(message.Win && $util.isInteger(message.Win.low) && $util.isInteger(message.Win.high)))
                return "Win: integer|Long expected";
            return null;
        };

        /**
         * Creates a BJL_StageUerInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_BJL.BJL_StageUerInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_BJL.BJL_StageUerInfo} BJL_StageUerInfo
         */
        BJL_StageUerInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_BJL.BJL_StageUerInfo)
                return object;
            var message = new $root.GameMsg_BJL.BJL_StageUerInfo();
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
         * Creates a plain object from a BJL_StageUerInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_BJL.BJL_StageUerInfo
         * @static
         * @param {GameMsg_BJL.BJL_StageUerInfo} message BJL_StageUerInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BJL_StageUerInfo.toObject = function toObject(message, options) {
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
         * Converts this BJL_StageUerInfo to JSON.
         * @function toJSON
         * @memberof GameMsg_BJL.BJL_StageUerInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BJL_StageUerInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BJL_StageUerInfo;
    })();

    GameMsg_BJL.BJL_Cards = (function() {

        /**
         * Properties of a BJL_Cards.
         * @memberof GameMsg_BJL
         * @interface IBJL_Cards
         * @property {Array.<GameMsg_BJL.IBJL_GameResultPoker>|null} [Cards] BJL_Cards Cards
         */

        /**
         * Constructs a new BJL_Cards.
         * @memberof GameMsg_BJL
         * @classdesc Represents a BJL_Cards.
         * @implements IBJL_Cards
         * @constructor
         * @param {GameMsg_BJL.IBJL_Cards=} [properties] Properties to set
         */
        function BJL_Cards(properties) {
            this.Cards = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BJL_Cards Cards.
         * @member {Array.<GameMsg_BJL.IBJL_GameResultPoker>} Cards
         * @memberof GameMsg_BJL.BJL_Cards
         * @instance
         */
        BJL_Cards.prototype.Cards = $util.emptyArray;

        /**
         * Creates a new BJL_Cards instance using the specified properties.
         * @function create
         * @memberof GameMsg_BJL.BJL_Cards
         * @static
         * @param {GameMsg_BJL.IBJL_Cards=} [properties] Properties to set
         * @returns {GameMsg_BJL.BJL_Cards} BJL_Cards instance
         */
        BJL_Cards.create = function create(properties) {
            return new BJL_Cards(properties);
        };

        /**
         * Encodes the specified BJL_Cards message. Does not implicitly {@link GameMsg_BJL.BJL_Cards.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_BJL.BJL_Cards
         * @static
         * @param {GameMsg_BJL.IBJL_Cards} message BJL_Cards message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BJL_Cards.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Cards != null && message.Cards.length)
                for (var i = 0; i < message.Cards.length; ++i)
                    $root.GameMsg_BJL.BJL_GameResultPoker.encode(message.Cards[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified BJL_Cards message, length delimited. Does not implicitly {@link GameMsg_BJL.BJL_Cards.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_BJL.BJL_Cards
         * @static
         * @param {GameMsg_BJL.IBJL_Cards} message BJL_Cards message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BJL_Cards.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BJL_Cards message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_BJL.BJL_Cards
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_BJL.BJL_Cards} BJL_Cards
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BJL_Cards.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_BJL.BJL_Cards();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.Cards && message.Cards.length))
                        message.Cards = [];
                    message.Cards.push($root.GameMsg_BJL.BJL_GameResultPoker.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a BJL_Cards message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_BJL.BJL_Cards
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_BJL.BJL_Cards} BJL_Cards
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BJL_Cards.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BJL_Cards message.
         * @function verify
         * @memberof GameMsg_BJL.BJL_Cards
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BJL_Cards.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Cards != null && message.hasOwnProperty("Cards")) {
                if (!Array.isArray(message.Cards))
                    return "Cards: array expected";
                for (var i = 0; i < message.Cards.length; ++i) {
                    var error = $root.GameMsg_BJL.BJL_GameResultPoker.verify(message.Cards[i]);
                    if (error)
                        return "Cards." + error;
                }
            }
            return null;
        };

        /**
         * Creates a BJL_Cards message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_BJL.BJL_Cards
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_BJL.BJL_Cards} BJL_Cards
         */
        BJL_Cards.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_BJL.BJL_Cards)
                return object;
            var message = new $root.GameMsg_BJL.BJL_Cards();
            if (object.Cards) {
                if (!Array.isArray(object.Cards))
                    throw TypeError(".GameMsg_BJL.BJL_Cards.Cards: array expected");
                message.Cards = [];
                for (var i = 0; i < object.Cards.length; ++i) {
                    if (typeof object.Cards[i] !== "object")
                        throw TypeError(".GameMsg_BJL.BJL_Cards.Cards: object expected");
                    message.Cards[i] = $root.GameMsg_BJL.BJL_GameResultPoker.fromObject(object.Cards[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a BJL_Cards message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_BJL.BJL_Cards
         * @static
         * @param {GameMsg_BJL.BJL_Cards} message BJL_Cards
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BJL_Cards.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.Cards = [];
            if (message.Cards && message.Cards.length) {
                object.Cards = [];
                for (var j = 0; j < message.Cards.length; ++j)
                    object.Cards[j] = $root.GameMsg_BJL.BJL_GameResultPoker.toObject(message.Cards[j], options);
            }
            return object;
        };

        /**
         * Converts this BJL_Cards to JSON.
         * @function toJSON
         * @memberof GameMsg_BJL.BJL_Cards
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BJL_Cards.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BJL_Cards;
    })();

    GameMsg_BJL.BJL_ShangzhuangRet = (function() {

        /**
         * Properties of a BJL_ShangzhuangRet.
         * @memberof GameMsg_BJL
         * @interface IBJL_ShangzhuangRet
         * @property {number} ret BJL_ShangzhuangRet ret
         */

        /**
         * Constructs a new BJL_ShangzhuangRet.
         * @memberof GameMsg_BJL
         * @classdesc Represents a BJL_ShangzhuangRet.
         * @implements IBJL_ShangzhuangRet
         * @constructor
         * @param {GameMsg_BJL.IBJL_ShangzhuangRet=} [properties] Properties to set
         */
        function BJL_ShangzhuangRet(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BJL_ShangzhuangRet ret.
         * @member {number} ret
         * @memberof GameMsg_BJL.BJL_ShangzhuangRet
         * @instance
         */
        BJL_ShangzhuangRet.prototype.ret = 0;

        /**
         * Creates a new BJL_ShangzhuangRet instance using the specified properties.
         * @function create
         * @memberof GameMsg_BJL.BJL_ShangzhuangRet
         * @static
         * @param {GameMsg_BJL.IBJL_ShangzhuangRet=} [properties] Properties to set
         * @returns {GameMsg_BJL.BJL_ShangzhuangRet} BJL_ShangzhuangRet instance
         */
        BJL_ShangzhuangRet.create = function create(properties) {
            return new BJL_ShangzhuangRet(properties);
        };

        /**
         * Encodes the specified BJL_ShangzhuangRet message. Does not implicitly {@link GameMsg_BJL.BJL_ShangzhuangRet.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_BJL.BJL_ShangzhuangRet
         * @static
         * @param {GameMsg_BJL.IBJL_ShangzhuangRet} message BJL_ShangzhuangRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BJL_ShangzhuangRet.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.ret);
            return writer;
        };

        /**
         * Encodes the specified BJL_ShangzhuangRet message, length delimited. Does not implicitly {@link GameMsg_BJL.BJL_ShangzhuangRet.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_BJL.BJL_ShangzhuangRet
         * @static
         * @param {GameMsg_BJL.IBJL_ShangzhuangRet} message BJL_ShangzhuangRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BJL_ShangzhuangRet.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BJL_ShangzhuangRet message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_BJL.BJL_ShangzhuangRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_BJL.BJL_ShangzhuangRet} BJL_ShangzhuangRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BJL_ShangzhuangRet.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_BJL.BJL_ShangzhuangRet();
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
         * Decodes a BJL_ShangzhuangRet message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_BJL.BJL_ShangzhuangRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_BJL.BJL_ShangzhuangRet} BJL_ShangzhuangRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BJL_ShangzhuangRet.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BJL_ShangzhuangRet message.
         * @function verify
         * @memberof GameMsg_BJL.BJL_ShangzhuangRet
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BJL_ShangzhuangRet.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.ret))
                return "ret: integer expected";
            return null;
        };

        /**
         * Creates a BJL_ShangzhuangRet message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_BJL.BJL_ShangzhuangRet
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_BJL.BJL_ShangzhuangRet} BJL_ShangzhuangRet
         */
        BJL_ShangzhuangRet.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_BJL.BJL_ShangzhuangRet)
                return object;
            var message = new $root.GameMsg_BJL.BJL_ShangzhuangRet();
            if (object.ret != null)
                message.ret = object.ret | 0;
            return message;
        };

        /**
         * Creates a plain object from a BJL_ShangzhuangRet message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_BJL.BJL_ShangzhuangRet
         * @static
         * @param {GameMsg_BJL.BJL_ShangzhuangRet} message BJL_ShangzhuangRet
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BJL_ShangzhuangRet.toObject = function toObject(message, options) {
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
         * Converts this BJL_ShangzhuangRet to JSON.
         * @function toJSON
         * @memberof GameMsg_BJL.BJL_ShangzhuangRet
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BJL_ShangzhuangRet.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BJL_ShangzhuangRet;
    })();

    GameMsg_BJL.BJL_ShangZhuang = (function() {

        /**
         * Properties of a BJL_ShangZhuang.
         * @memberof GameMsg_BJL
         * @interface IBJL_ShangZhuang
         * @property {boolean} IsShangZhuang BJL_ShangZhuang IsShangZhuang
         */

        /**
         * Constructs a new BJL_ShangZhuang.
         * @memberof GameMsg_BJL
         * @classdesc Represents a BJL_ShangZhuang.
         * @implements IBJL_ShangZhuang
         * @constructor
         * @param {GameMsg_BJL.IBJL_ShangZhuang=} [properties] Properties to set
         */
        function BJL_ShangZhuang(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BJL_ShangZhuang IsShangZhuang.
         * @member {boolean} IsShangZhuang
         * @memberof GameMsg_BJL.BJL_ShangZhuang
         * @instance
         */
        BJL_ShangZhuang.prototype.IsShangZhuang = false;

        /**
         * Creates a new BJL_ShangZhuang instance using the specified properties.
         * @function create
         * @memberof GameMsg_BJL.BJL_ShangZhuang
         * @static
         * @param {GameMsg_BJL.IBJL_ShangZhuang=} [properties] Properties to set
         * @returns {GameMsg_BJL.BJL_ShangZhuang} BJL_ShangZhuang instance
         */
        BJL_ShangZhuang.create = function create(properties) {
            return new BJL_ShangZhuang(properties);
        };

        /**
         * Encodes the specified BJL_ShangZhuang message. Does not implicitly {@link GameMsg_BJL.BJL_ShangZhuang.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_BJL.BJL_ShangZhuang
         * @static
         * @param {GameMsg_BJL.IBJL_ShangZhuang} message BJL_ShangZhuang message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BJL_ShangZhuang.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).bool(message.IsShangZhuang);
            return writer;
        };

        /**
         * Encodes the specified BJL_ShangZhuang message, length delimited. Does not implicitly {@link GameMsg_BJL.BJL_ShangZhuang.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_BJL.BJL_ShangZhuang
         * @static
         * @param {GameMsg_BJL.IBJL_ShangZhuang} message BJL_ShangZhuang message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BJL_ShangZhuang.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BJL_ShangZhuang message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_BJL.BJL_ShangZhuang
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_BJL.BJL_ShangZhuang} BJL_ShangZhuang
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BJL_ShangZhuang.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_BJL.BJL_ShangZhuang();
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
         * Decodes a BJL_ShangZhuang message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_BJL.BJL_ShangZhuang
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_BJL.BJL_ShangZhuang} BJL_ShangZhuang
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BJL_ShangZhuang.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BJL_ShangZhuang message.
         * @function verify
         * @memberof GameMsg_BJL.BJL_ShangZhuang
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BJL_ShangZhuang.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (typeof message.IsShangZhuang !== "boolean")
                return "IsShangZhuang: boolean expected";
            return null;
        };

        /**
         * Creates a BJL_ShangZhuang message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_BJL.BJL_ShangZhuang
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_BJL.BJL_ShangZhuang} BJL_ShangZhuang
         */
        BJL_ShangZhuang.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_BJL.BJL_ShangZhuang)
                return object;
            var message = new $root.GameMsg_BJL.BJL_ShangZhuang();
            if (object.IsShangZhuang != null)
                message.IsShangZhuang = Boolean(object.IsShangZhuang);
            return message;
        };

        /**
         * Creates a plain object from a BJL_ShangZhuang message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_BJL.BJL_ShangZhuang
         * @static
         * @param {GameMsg_BJL.BJL_ShangZhuang} message BJL_ShangZhuang
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BJL_ShangZhuang.toObject = function toObject(message, options) {
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
         * Converts this BJL_ShangZhuang to JSON.
         * @function toJSON
         * @memberof GameMsg_BJL.BJL_ShangZhuang
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BJL_ShangZhuang.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BJL_ShangZhuang;
    })();

    GameMsg_BJL.BJL_ZhuangInfo = (function() {

        /**
         * Properties of a BJL_ZhuangInfo.
         * @memberof GameMsg_BJL
         * @interface IBJL_ZhuangInfo
         * @property {number} UserID BJL_ZhuangInfo UserID
         * @property {number} LastTurn BJL_ZhuangInfo LastTurn
         * @property {Array.<GameMsg_BJL.IGameUser>|null} [UserInfo] BJL_ZhuangInfo UserInfo
         */

        /**
         * Constructs a new BJL_ZhuangInfo.
         * @memberof GameMsg_BJL
         * @classdesc Represents a BJL_ZhuangInfo.
         * @implements IBJL_ZhuangInfo
         * @constructor
         * @param {GameMsg_BJL.IBJL_ZhuangInfo=} [properties] Properties to set
         */
        function BJL_ZhuangInfo(properties) {
            this.UserInfo = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BJL_ZhuangInfo UserID.
         * @member {number} UserID
         * @memberof GameMsg_BJL.BJL_ZhuangInfo
         * @instance
         */
        BJL_ZhuangInfo.prototype.UserID = 0;

        /**
         * BJL_ZhuangInfo LastTurn.
         * @member {number} LastTurn
         * @memberof GameMsg_BJL.BJL_ZhuangInfo
         * @instance
         */
        BJL_ZhuangInfo.prototype.LastTurn = 0;

        /**
         * BJL_ZhuangInfo UserInfo.
         * @member {Array.<GameMsg_BJL.IGameUser>} UserInfo
         * @memberof GameMsg_BJL.BJL_ZhuangInfo
         * @instance
         */
        BJL_ZhuangInfo.prototype.UserInfo = $util.emptyArray;

        /**
         * Creates a new BJL_ZhuangInfo instance using the specified properties.
         * @function create
         * @memberof GameMsg_BJL.BJL_ZhuangInfo
         * @static
         * @param {GameMsg_BJL.IBJL_ZhuangInfo=} [properties] Properties to set
         * @returns {GameMsg_BJL.BJL_ZhuangInfo} BJL_ZhuangInfo instance
         */
        BJL_ZhuangInfo.create = function create(properties) {
            return new BJL_ZhuangInfo(properties);
        };

        /**
         * Encodes the specified BJL_ZhuangInfo message. Does not implicitly {@link GameMsg_BJL.BJL_ZhuangInfo.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_BJL.BJL_ZhuangInfo
         * @static
         * @param {GameMsg_BJL.IBJL_ZhuangInfo} message BJL_ZhuangInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BJL_ZhuangInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.UserID);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.LastTurn);
            if (message.UserInfo != null && message.UserInfo.length)
                for (var i = 0; i < message.UserInfo.length; ++i)
                    $root.GameMsg_BJL.GameUser.encode(message.UserInfo[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified BJL_ZhuangInfo message, length delimited. Does not implicitly {@link GameMsg_BJL.BJL_ZhuangInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_BJL.BJL_ZhuangInfo
         * @static
         * @param {GameMsg_BJL.IBJL_ZhuangInfo} message BJL_ZhuangInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BJL_ZhuangInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BJL_ZhuangInfo message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_BJL.BJL_ZhuangInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_BJL.BJL_ZhuangInfo} BJL_ZhuangInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BJL_ZhuangInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_BJL.BJL_ZhuangInfo();
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
                    message.UserInfo.push($root.GameMsg_BJL.GameUser.decode(reader, reader.uint32()));
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
         * Decodes a BJL_ZhuangInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_BJL.BJL_ZhuangInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_BJL.BJL_ZhuangInfo} BJL_ZhuangInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BJL_ZhuangInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BJL_ZhuangInfo message.
         * @function verify
         * @memberof GameMsg_BJL.BJL_ZhuangInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BJL_ZhuangInfo.verify = function verify(message) {
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
                    var error = $root.GameMsg_BJL.GameUser.verify(message.UserInfo[i]);
                    if (error)
                        return "UserInfo." + error;
                }
            }
            return null;
        };

        /**
         * Creates a BJL_ZhuangInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_BJL.BJL_ZhuangInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_BJL.BJL_ZhuangInfo} BJL_ZhuangInfo
         */
        BJL_ZhuangInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_BJL.BJL_ZhuangInfo)
                return object;
            var message = new $root.GameMsg_BJL.BJL_ZhuangInfo();
            if (object.UserID != null)
                message.UserID = object.UserID | 0;
            if (object.LastTurn != null)
                message.LastTurn = object.LastTurn | 0;
            if (object.UserInfo) {
                if (!Array.isArray(object.UserInfo))
                    throw TypeError(".GameMsg_BJL.BJL_ZhuangInfo.UserInfo: array expected");
                message.UserInfo = [];
                for (var i = 0; i < object.UserInfo.length; ++i) {
                    if (typeof object.UserInfo[i] !== "object")
                        throw TypeError(".GameMsg_BJL.BJL_ZhuangInfo.UserInfo: object expected");
                    message.UserInfo[i] = $root.GameMsg_BJL.GameUser.fromObject(object.UserInfo[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a BJL_ZhuangInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_BJL.BJL_ZhuangInfo
         * @static
         * @param {GameMsg_BJL.BJL_ZhuangInfo} message BJL_ZhuangInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BJL_ZhuangInfo.toObject = function toObject(message, options) {
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
                    object.UserInfo[j] = $root.GameMsg_BJL.GameUser.toObject(message.UserInfo[j], options);
            }
            return object;
        };

        /**
         * Converts this BJL_ZhuangInfo to JSON.
         * @function toJSON
         * @memberof GameMsg_BJL.BJL_ZhuangInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BJL_ZhuangInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BJL_ZhuangInfo;
    })();

    GameMsg_BJL.BJL_ZhuangList = (function() {

        /**
         * Properties of a BJL_ZhuangList.
         * @memberof GameMsg_BJL
         * @interface IBJL_ZhuangList
         * @property {Array.<GameMsg_BJL.IGameUser>|null} [UserInfo] BJL_ZhuangList UserInfo
         */

        /**
         * Constructs a new BJL_ZhuangList.
         * @memberof GameMsg_BJL
         * @classdesc Represents a BJL_ZhuangList.
         * @implements IBJL_ZhuangList
         * @constructor
         * @param {GameMsg_BJL.IBJL_ZhuangList=} [properties] Properties to set
         */
        function BJL_ZhuangList(properties) {
            this.UserInfo = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BJL_ZhuangList UserInfo.
         * @member {Array.<GameMsg_BJL.IGameUser>} UserInfo
         * @memberof GameMsg_BJL.BJL_ZhuangList
         * @instance
         */
        BJL_ZhuangList.prototype.UserInfo = $util.emptyArray;

        /**
         * Creates a new BJL_ZhuangList instance using the specified properties.
         * @function create
         * @memberof GameMsg_BJL.BJL_ZhuangList
         * @static
         * @param {GameMsg_BJL.IBJL_ZhuangList=} [properties] Properties to set
         * @returns {GameMsg_BJL.BJL_ZhuangList} BJL_ZhuangList instance
         */
        BJL_ZhuangList.create = function create(properties) {
            return new BJL_ZhuangList(properties);
        };

        /**
         * Encodes the specified BJL_ZhuangList message. Does not implicitly {@link GameMsg_BJL.BJL_ZhuangList.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_BJL.BJL_ZhuangList
         * @static
         * @param {GameMsg_BJL.IBJL_ZhuangList} message BJL_ZhuangList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BJL_ZhuangList.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.UserInfo != null && message.UserInfo.length)
                for (var i = 0; i < message.UserInfo.length; ++i)
                    $root.GameMsg_BJL.GameUser.encode(message.UserInfo[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified BJL_ZhuangList message, length delimited. Does not implicitly {@link GameMsg_BJL.BJL_ZhuangList.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_BJL.BJL_ZhuangList
         * @static
         * @param {GameMsg_BJL.IBJL_ZhuangList} message BJL_ZhuangList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BJL_ZhuangList.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BJL_ZhuangList message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_BJL.BJL_ZhuangList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_BJL.BJL_ZhuangList} BJL_ZhuangList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BJL_ZhuangList.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_BJL.BJL_ZhuangList();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.UserInfo && message.UserInfo.length))
                        message.UserInfo = [];
                    message.UserInfo.push($root.GameMsg_BJL.GameUser.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a BJL_ZhuangList message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_BJL.BJL_ZhuangList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_BJL.BJL_ZhuangList} BJL_ZhuangList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BJL_ZhuangList.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BJL_ZhuangList message.
         * @function verify
         * @memberof GameMsg_BJL.BJL_ZhuangList
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BJL_ZhuangList.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.UserInfo != null && message.hasOwnProperty("UserInfo")) {
                if (!Array.isArray(message.UserInfo))
                    return "UserInfo: array expected";
                for (var i = 0; i < message.UserInfo.length; ++i) {
                    var error = $root.GameMsg_BJL.GameUser.verify(message.UserInfo[i]);
                    if (error)
                        return "UserInfo." + error;
                }
            }
            return null;
        };

        /**
         * Creates a BJL_ZhuangList message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_BJL.BJL_ZhuangList
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_BJL.BJL_ZhuangList} BJL_ZhuangList
         */
        BJL_ZhuangList.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_BJL.BJL_ZhuangList)
                return object;
            var message = new $root.GameMsg_BJL.BJL_ZhuangList();
            if (object.UserInfo) {
                if (!Array.isArray(object.UserInfo))
                    throw TypeError(".GameMsg_BJL.BJL_ZhuangList.UserInfo: array expected");
                message.UserInfo = [];
                for (var i = 0; i < object.UserInfo.length; ++i) {
                    if (typeof object.UserInfo[i] !== "object")
                        throw TypeError(".GameMsg_BJL.BJL_ZhuangList.UserInfo: object expected");
                    message.UserInfo[i] = $root.GameMsg_BJL.GameUser.fromObject(object.UserInfo[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a BJL_ZhuangList message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_BJL.BJL_ZhuangList
         * @static
         * @param {GameMsg_BJL.BJL_ZhuangList} message BJL_ZhuangList
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BJL_ZhuangList.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.UserInfo = [];
            if (message.UserInfo && message.UserInfo.length) {
                object.UserInfo = [];
                for (var j = 0; j < message.UserInfo.length; ++j)
                    object.UserInfo[j] = $root.GameMsg_BJL.GameUser.toObject(message.UserInfo[j], options);
            }
            return object;
        };

        /**
         * Converts this BJL_ZhuangList to JSON.
         * @function toJSON
         * @memberof GameMsg_BJL.BJL_ZhuangList
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BJL_ZhuangList.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BJL_ZhuangList;
    })();

    GameMsg_BJL.BJL_BetClearRet = (function() {

        /**
         * Properties of a BJL_BetClearRet.
         * @memberof GameMsg_BJL
         * @interface IBJL_BetClearRet
         * @property {number|Long} Money BJL_BetClearRet Money
         * @property {number} Ret BJL_BetClearRet Ret
         */

        /**
         * Constructs a new BJL_BetClearRet.
         * @memberof GameMsg_BJL
         * @classdesc Represents a BJL_BetClearRet.
         * @implements IBJL_BetClearRet
         * @constructor
         * @param {GameMsg_BJL.IBJL_BetClearRet=} [properties] Properties to set
         */
        function BJL_BetClearRet(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BJL_BetClearRet Money.
         * @member {number|Long} Money
         * @memberof GameMsg_BJL.BJL_BetClearRet
         * @instance
         */
        BJL_BetClearRet.prototype.Money = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * BJL_BetClearRet Ret.
         * @member {number} Ret
         * @memberof GameMsg_BJL.BJL_BetClearRet
         * @instance
         */
        BJL_BetClearRet.prototype.Ret = 0;

        /**
         * Creates a new BJL_BetClearRet instance using the specified properties.
         * @function create
         * @memberof GameMsg_BJL.BJL_BetClearRet
         * @static
         * @param {GameMsg_BJL.IBJL_BetClearRet=} [properties] Properties to set
         * @returns {GameMsg_BJL.BJL_BetClearRet} BJL_BetClearRet instance
         */
        BJL_BetClearRet.create = function create(properties) {
            return new BJL_BetClearRet(properties);
        };

        /**
         * Encodes the specified BJL_BetClearRet message. Does not implicitly {@link GameMsg_BJL.BJL_BetClearRet.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_BJL.BJL_BetClearRet
         * @static
         * @param {GameMsg_BJL.IBJL_BetClearRet} message BJL_BetClearRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BJL_BetClearRet.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int64(message.Money);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.Ret);
            return writer;
        };

        /**
         * Encodes the specified BJL_BetClearRet message, length delimited. Does not implicitly {@link GameMsg_BJL.BJL_BetClearRet.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_BJL.BJL_BetClearRet
         * @static
         * @param {GameMsg_BJL.IBJL_BetClearRet} message BJL_BetClearRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BJL_BetClearRet.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BJL_BetClearRet message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_BJL.BJL_BetClearRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_BJL.BJL_BetClearRet} BJL_BetClearRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BJL_BetClearRet.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_BJL.BJL_BetClearRet();
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
         * Decodes a BJL_BetClearRet message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_BJL.BJL_BetClearRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_BJL.BJL_BetClearRet} BJL_BetClearRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BJL_BetClearRet.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BJL_BetClearRet message.
         * @function verify
         * @memberof GameMsg_BJL.BJL_BetClearRet
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BJL_BetClearRet.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.Money) && !(message.Money && $util.isInteger(message.Money.low) && $util.isInteger(message.Money.high)))
                return "Money: integer|Long expected";
            if (!$util.isInteger(message.Ret))
                return "Ret: integer expected";
            return null;
        };

        /**
         * Creates a BJL_BetClearRet message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_BJL.BJL_BetClearRet
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_BJL.BJL_BetClearRet} BJL_BetClearRet
         */
        BJL_BetClearRet.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_BJL.BJL_BetClearRet)
                return object;
            var message = new $root.GameMsg_BJL.BJL_BetClearRet();
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
         * Creates a plain object from a BJL_BetClearRet message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_BJL.BJL_BetClearRet
         * @static
         * @param {GameMsg_BJL.BJL_BetClearRet} message BJL_BetClearRet
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BJL_BetClearRet.toObject = function toObject(message, options) {
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
         * Converts this BJL_BetClearRet to JSON.
         * @function toJSON
         * @memberof GameMsg_BJL.BJL_BetClearRet
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BJL_BetClearRet.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BJL_BetClearRet;
    })();

    GameMsg_BJL.BJL_RichestList = (function() {

        /**
         * Properties of a BJL_RichestList.
         * @memberof GameMsg_BJL
         * @interface IBJL_RichestList
         * @property {Array.<GameMsg_BJL.IBJL_Richest>|null} [RichestList] BJL_RichestList RichestList
         */

        /**
         * Constructs a new BJL_RichestList.
         * @memberof GameMsg_BJL
         * @classdesc Represents a BJL_RichestList.
         * @implements IBJL_RichestList
         * @constructor
         * @param {GameMsg_BJL.IBJL_RichestList=} [properties] Properties to set
         */
        function BJL_RichestList(properties) {
            this.RichestList = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BJL_RichestList RichestList.
         * @member {Array.<GameMsg_BJL.IBJL_Richest>} RichestList
         * @memberof GameMsg_BJL.BJL_RichestList
         * @instance
         */
        BJL_RichestList.prototype.RichestList = $util.emptyArray;

        /**
         * Creates a new BJL_RichestList instance using the specified properties.
         * @function create
         * @memberof GameMsg_BJL.BJL_RichestList
         * @static
         * @param {GameMsg_BJL.IBJL_RichestList=} [properties] Properties to set
         * @returns {GameMsg_BJL.BJL_RichestList} BJL_RichestList instance
         */
        BJL_RichestList.create = function create(properties) {
            return new BJL_RichestList(properties);
        };

        /**
         * Encodes the specified BJL_RichestList message. Does not implicitly {@link GameMsg_BJL.BJL_RichestList.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_BJL.BJL_RichestList
         * @static
         * @param {GameMsg_BJL.IBJL_RichestList} message BJL_RichestList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BJL_RichestList.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.RichestList != null && message.RichestList.length)
                for (var i = 0; i < message.RichestList.length; ++i)
                    $root.GameMsg_BJL.BJL_Richest.encode(message.RichestList[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified BJL_RichestList message, length delimited. Does not implicitly {@link GameMsg_BJL.BJL_RichestList.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_BJL.BJL_RichestList
         * @static
         * @param {GameMsg_BJL.IBJL_RichestList} message BJL_RichestList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BJL_RichestList.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BJL_RichestList message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_BJL.BJL_RichestList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_BJL.BJL_RichestList} BJL_RichestList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BJL_RichestList.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_BJL.BJL_RichestList();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.RichestList && message.RichestList.length))
                        message.RichestList = [];
                    message.RichestList.push($root.GameMsg_BJL.BJL_Richest.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a BJL_RichestList message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_BJL.BJL_RichestList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_BJL.BJL_RichestList} BJL_RichestList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BJL_RichestList.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BJL_RichestList message.
         * @function verify
         * @memberof GameMsg_BJL.BJL_RichestList
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BJL_RichestList.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.RichestList != null && message.hasOwnProperty("RichestList")) {
                if (!Array.isArray(message.RichestList))
                    return "RichestList: array expected";
                for (var i = 0; i < message.RichestList.length; ++i) {
                    var error = $root.GameMsg_BJL.BJL_Richest.verify(message.RichestList[i]);
                    if (error)
                        return "RichestList." + error;
                }
            }
            return null;
        };

        /**
         * Creates a BJL_RichestList message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_BJL.BJL_RichestList
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_BJL.BJL_RichestList} BJL_RichestList
         */
        BJL_RichestList.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_BJL.BJL_RichestList)
                return object;
            var message = new $root.GameMsg_BJL.BJL_RichestList();
            if (object.RichestList) {
                if (!Array.isArray(object.RichestList))
                    throw TypeError(".GameMsg_BJL.BJL_RichestList.RichestList: array expected");
                message.RichestList = [];
                for (var i = 0; i < object.RichestList.length; ++i) {
                    if (typeof object.RichestList[i] !== "object")
                        throw TypeError(".GameMsg_BJL.BJL_RichestList.RichestList: object expected");
                    message.RichestList[i] = $root.GameMsg_BJL.BJL_Richest.fromObject(object.RichestList[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a BJL_RichestList message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_BJL.BJL_RichestList
         * @static
         * @param {GameMsg_BJL.BJL_RichestList} message BJL_RichestList
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BJL_RichestList.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.RichestList = [];
            if (message.RichestList && message.RichestList.length) {
                object.RichestList = [];
                for (var j = 0; j < message.RichestList.length; ++j)
                    object.RichestList[j] = $root.GameMsg_BJL.BJL_Richest.toObject(message.RichestList[j], options);
            }
            return object;
        };

        /**
         * Converts this BJL_RichestList to JSON.
         * @function toJSON
         * @memberof GameMsg_BJL.BJL_RichestList
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BJL_RichestList.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BJL_RichestList;
    })();

    GameMsg_BJL.BJL_Richest = (function() {

        /**
         * Properties of a BJL_Richest.
         * @memberof GameMsg_BJL
         * @interface IBJL_Richest
         * @property {number} Ranking BJL_Richest Ranking
         * @property {number} UserID BJL_Richest UserID
         * @property {number} UserFaceID BJL_Richest UserFaceID
         * @property {number|Long} Money BJL_Richest Money
         * @property {number|null} [AvatarFrameID] BJL_Richest AvatarFrameID
         */

        /**
         * Constructs a new BJL_Richest.
         * @memberof GameMsg_BJL
         * @classdesc Represents a BJL_Richest.
         * @implements IBJL_Richest
         * @constructor
         * @param {GameMsg_BJL.IBJL_Richest=} [properties] Properties to set
         */
        function BJL_Richest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BJL_Richest Ranking.
         * @member {number} Ranking
         * @memberof GameMsg_BJL.BJL_Richest
         * @instance
         */
        BJL_Richest.prototype.Ranking = 0;

        /**
         * BJL_Richest UserID.
         * @member {number} UserID
         * @memberof GameMsg_BJL.BJL_Richest
         * @instance
         */
        BJL_Richest.prototype.UserID = 0;

        /**
         * BJL_Richest UserFaceID.
         * @member {number} UserFaceID
         * @memberof GameMsg_BJL.BJL_Richest
         * @instance
         */
        BJL_Richest.prototype.UserFaceID = 0;

        /**
         * BJL_Richest Money.
         * @member {number|Long} Money
         * @memberof GameMsg_BJL.BJL_Richest
         * @instance
         */
        BJL_Richest.prototype.Money = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * BJL_Richest AvatarFrameID.
         * @member {number} AvatarFrameID
         * @memberof GameMsg_BJL.BJL_Richest
         * @instance
         */
        BJL_Richest.prototype.AvatarFrameID = 0;

        /**
         * Creates a new BJL_Richest instance using the specified properties.
         * @function create
         * @memberof GameMsg_BJL.BJL_Richest
         * @static
         * @param {GameMsg_BJL.IBJL_Richest=} [properties] Properties to set
         * @returns {GameMsg_BJL.BJL_Richest} BJL_Richest instance
         */
        BJL_Richest.create = function create(properties) {
            return new BJL_Richest(properties);
        };

        /**
         * Encodes the specified BJL_Richest message. Does not implicitly {@link GameMsg_BJL.BJL_Richest.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_BJL.BJL_Richest
         * @static
         * @param {GameMsg_BJL.IBJL_Richest} message BJL_Richest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BJL_Richest.encode = function encode(message, writer) {
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
         * Encodes the specified BJL_Richest message, length delimited. Does not implicitly {@link GameMsg_BJL.BJL_Richest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_BJL.BJL_Richest
         * @static
         * @param {GameMsg_BJL.IBJL_Richest} message BJL_Richest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BJL_Richest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BJL_Richest message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_BJL.BJL_Richest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_BJL.BJL_Richest} BJL_Richest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BJL_Richest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_BJL.BJL_Richest();
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
         * Decodes a BJL_Richest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_BJL.BJL_Richest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_BJL.BJL_Richest} BJL_Richest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BJL_Richest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BJL_Richest message.
         * @function verify
         * @memberof GameMsg_BJL.BJL_Richest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BJL_Richest.verify = function verify(message) {
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
         * Creates a BJL_Richest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_BJL.BJL_Richest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_BJL.BJL_Richest} BJL_Richest
         */
        BJL_Richest.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_BJL.BJL_Richest)
                return object;
            var message = new $root.GameMsg_BJL.BJL_Richest();
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
         * Creates a plain object from a BJL_Richest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_BJL.BJL_Richest
         * @static
         * @param {GameMsg_BJL.BJL_Richest} message BJL_Richest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BJL_Richest.toObject = function toObject(message, options) {
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
         * Converts this BJL_Richest to JSON.
         * @function toJSON
         * @memberof GameMsg_BJL.BJL_Richest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BJL_Richest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BJL_Richest;
    })();

    GameMsg_BJL.BJL_LuckyStar = (function() {

        /**
         * Properties of a BJL_LuckyStar.
         * @memberof GameMsg_BJL
         * @interface IBJL_LuckyStar
         * @property {number} UserID BJL_LuckyStar UserID
         * @property {number} UserFaceID BJL_LuckyStar UserFaceID
         * @property {number|null} [AvatarFrameID] BJL_LuckyStar AvatarFrameID
         */

        /**
         * Constructs a new BJL_LuckyStar.
         * @memberof GameMsg_BJL
         * @classdesc Represents a BJL_LuckyStar.
         * @implements IBJL_LuckyStar
         * @constructor
         * @param {GameMsg_BJL.IBJL_LuckyStar=} [properties] Properties to set
         */
        function BJL_LuckyStar(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BJL_LuckyStar UserID.
         * @member {number} UserID
         * @memberof GameMsg_BJL.BJL_LuckyStar
         * @instance
         */
        BJL_LuckyStar.prototype.UserID = 0;

        /**
         * BJL_LuckyStar UserFaceID.
         * @member {number} UserFaceID
         * @memberof GameMsg_BJL.BJL_LuckyStar
         * @instance
         */
        BJL_LuckyStar.prototype.UserFaceID = 0;

        /**
         * BJL_LuckyStar AvatarFrameID.
         * @member {number} AvatarFrameID
         * @memberof GameMsg_BJL.BJL_LuckyStar
         * @instance
         */
        BJL_LuckyStar.prototype.AvatarFrameID = 0;

        /**
         * Creates a new BJL_LuckyStar instance using the specified properties.
         * @function create
         * @memberof GameMsg_BJL.BJL_LuckyStar
         * @static
         * @param {GameMsg_BJL.IBJL_LuckyStar=} [properties] Properties to set
         * @returns {GameMsg_BJL.BJL_LuckyStar} BJL_LuckyStar instance
         */
        BJL_LuckyStar.create = function create(properties) {
            return new BJL_LuckyStar(properties);
        };

        /**
         * Encodes the specified BJL_LuckyStar message. Does not implicitly {@link GameMsg_BJL.BJL_LuckyStar.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_BJL.BJL_LuckyStar
         * @static
         * @param {GameMsg_BJL.IBJL_LuckyStar} message BJL_LuckyStar message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BJL_LuckyStar.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.UserID);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.UserFaceID);
            if (message.AvatarFrameID != null && message.hasOwnProperty("AvatarFrameID"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.AvatarFrameID);
            return writer;
        };

        /**
         * Encodes the specified BJL_LuckyStar message, length delimited. Does not implicitly {@link GameMsg_BJL.BJL_LuckyStar.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_BJL.BJL_LuckyStar
         * @static
         * @param {GameMsg_BJL.IBJL_LuckyStar} message BJL_LuckyStar message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BJL_LuckyStar.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BJL_LuckyStar message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_BJL.BJL_LuckyStar
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_BJL.BJL_LuckyStar} BJL_LuckyStar
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BJL_LuckyStar.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_BJL.BJL_LuckyStar();
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
         * Decodes a BJL_LuckyStar message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_BJL.BJL_LuckyStar
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_BJL.BJL_LuckyStar} BJL_LuckyStar
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BJL_LuckyStar.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BJL_LuckyStar message.
         * @function verify
         * @memberof GameMsg_BJL.BJL_LuckyStar
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BJL_LuckyStar.verify = function verify(message) {
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
         * Creates a BJL_LuckyStar message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_BJL.BJL_LuckyStar
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_BJL.BJL_LuckyStar} BJL_LuckyStar
         */
        BJL_LuckyStar.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_BJL.BJL_LuckyStar)
                return object;
            var message = new $root.GameMsg_BJL.BJL_LuckyStar();
            if (object.UserID != null)
                message.UserID = object.UserID | 0;
            if (object.UserFaceID != null)
                message.UserFaceID = object.UserFaceID | 0;
            if (object.AvatarFrameID != null)
                message.AvatarFrameID = object.AvatarFrameID | 0;
            return message;
        };

        /**
         * Creates a plain object from a BJL_LuckyStar message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_BJL.BJL_LuckyStar
         * @static
         * @param {GameMsg_BJL.BJL_LuckyStar} message BJL_LuckyStar
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BJL_LuckyStar.toObject = function toObject(message, options) {
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
         * Converts this BJL_LuckyStar to JSON.
         * @function toJSON
         * @memberof GameMsg_BJL.BJL_LuckyStar
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BJL_LuckyStar.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BJL_LuckyStar;
    })();

    GameMsg_BJL.BJL_RoundID = (function() {

        /**
         * Properties of a BJL_RoundID.
         * @memberof GameMsg_BJL
         * @interface IBJL_RoundID
         * @property {number} ZhuangWin BJL_RoundID ZhuangWin
         * @property {number} XianWin BJL_RoundID XianWin
         * @property {number} HeWin BJL_RoundID HeWin
         * @property {number} RoundID BJL_RoundID RoundID
         */

        /**
         * Constructs a new BJL_RoundID.
         * @memberof GameMsg_BJL
         * @classdesc Represents a BJL_RoundID.
         * @implements IBJL_RoundID
         * @constructor
         * @param {GameMsg_BJL.IBJL_RoundID=} [properties] Properties to set
         */
        function BJL_RoundID(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BJL_RoundID ZhuangWin.
         * @member {number} ZhuangWin
         * @memberof GameMsg_BJL.BJL_RoundID
         * @instance
         */
        BJL_RoundID.prototype.ZhuangWin = 0;

        /**
         * BJL_RoundID XianWin.
         * @member {number} XianWin
         * @memberof GameMsg_BJL.BJL_RoundID
         * @instance
         */
        BJL_RoundID.prototype.XianWin = 0;

        /**
         * BJL_RoundID HeWin.
         * @member {number} HeWin
         * @memberof GameMsg_BJL.BJL_RoundID
         * @instance
         */
        BJL_RoundID.prototype.HeWin = 0;

        /**
         * BJL_RoundID RoundID.
         * @member {number} RoundID
         * @memberof GameMsg_BJL.BJL_RoundID
         * @instance
         */
        BJL_RoundID.prototype.RoundID = 0;

        /**
         * Creates a new BJL_RoundID instance using the specified properties.
         * @function create
         * @memberof GameMsg_BJL.BJL_RoundID
         * @static
         * @param {GameMsg_BJL.IBJL_RoundID=} [properties] Properties to set
         * @returns {GameMsg_BJL.BJL_RoundID} BJL_RoundID instance
         */
        BJL_RoundID.create = function create(properties) {
            return new BJL_RoundID(properties);
        };

        /**
         * Encodes the specified BJL_RoundID message. Does not implicitly {@link GameMsg_BJL.BJL_RoundID.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_BJL.BJL_RoundID
         * @static
         * @param {GameMsg_BJL.IBJL_RoundID} message BJL_RoundID message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BJL_RoundID.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.ZhuangWin);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.XianWin);
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.HeWin);
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.RoundID);
            return writer;
        };

        /**
         * Encodes the specified BJL_RoundID message, length delimited. Does not implicitly {@link GameMsg_BJL.BJL_RoundID.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_BJL.BJL_RoundID
         * @static
         * @param {GameMsg_BJL.IBJL_RoundID} message BJL_RoundID message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BJL_RoundID.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BJL_RoundID message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_BJL.BJL_RoundID
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_BJL.BJL_RoundID} BJL_RoundID
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BJL_RoundID.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_BJL.BJL_RoundID();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.ZhuangWin = reader.int32();
                    break;
                case 2:
                    message.XianWin = reader.int32();
                    break;
                case 3:
                    message.HeWin = reader.int32();
                    break;
                case 4:
                    message.RoundID = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("ZhuangWin"))
                throw $util.ProtocolError("missing required 'ZhuangWin'", { instance: message });
            if (!message.hasOwnProperty("XianWin"))
                throw $util.ProtocolError("missing required 'XianWin'", { instance: message });
            if (!message.hasOwnProperty("HeWin"))
                throw $util.ProtocolError("missing required 'HeWin'", { instance: message });
            if (!message.hasOwnProperty("RoundID"))
                throw $util.ProtocolError("missing required 'RoundID'", { instance: message });
            return message;
        };

        /**
         * Decodes a BJL_RoundID message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_BJL.BJL_RoundID
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_BJL.BJL_RoundID} BJL_RoundID
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BJL_RoundID.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BJL_RoundID message.
         * @function verify
         * @memberof GameMsg_BJL.BJL_RoundID
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BJL_RoundID.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.ZhuangWin))
                return "ZhuangWin: integer expected";
            if (!$util.isInteger(message.XianWin))
                return "XianWin: integer expected";
            if (!$util.isInteger(message.HeWin))
                return "HeWin: integer expected";
            if (!$util.isInteger(message.RoundID))
                return "RoundID: integer expected";
            return null;
        };

        /**
         * Creates a BJL_RoundID message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_BJL.BJL_RoundID
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_BJL.BJL_RoundID} BJL_RoundID
         */
        BJL_RoundID.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_BJL.BJL_RoundID)
                return object;
            var message = new $root.GameMsg_BJL.BJL_RoundID();
            if (object.ZhuangWin != null)
                message.ZhuangWin = object.ZhuangWin | 0;
            if (object.XianWin != null)
                message.XianWin = object.XianWin | 0;
            if (object.HeWin != null)
                message.HeWin = object.HeWin | 0;
            if (object.RoundID != null)
                message.RoundID = object.RoundID | 0;
            return message;
        };

        /**
         * Creates a plain object from a BJL_RoundID message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_BJL.BJL_RoundID
         * @static
         * @param {GameMsg_BJL.BJL_RoundID} message BJL_RoundID
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BJL_RoundID.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.ZhuangWin = 0;
                object.XianWin = 0;
                object.HeWin = 0;
                object.RoundID = 0;
            }
            if (message.ZhuangWin != null && message.hasOwnProperty("ZhuangWin"))
                object.ZhuangWin = message.ZhuangWin;
            if (message.XianWin != null && message.hasOwnProperty("XianWin"))
                object.XianWin = message.XianWin;
            if (message.HeWin != null && message.hasOwnProperty("HeWin"))
                object.HeWin = message.HeWin;
            if (message.RoundID != null && message.hasOwnProperty("RoundID"))
                object.RoundID = message.RoundID;
            return object;
        };

        /**
         * Converts this BJL_RoundID to JSON.
         * @function toJSON
         * @memberof GameMsg_BJL.BJL_RoundID
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BJL_RoundID.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BJL_RoundID;
    })();

    GameMsg_BJL.BJL_BetRangeList = (function() {

        /**
         * Properties of a BJL_BetRangeList.
         * @memberof GameMsg_BJL
         * @interface IBJL_BetRangeList
         * @property {GameMsg_BJL.IBJL_Range} ZhuangXian BJL_BetRangeList ZhuangXian
         * @property {GameMsg_BJL.IBJL_Range} HeRange BJL_BetRangeList HeRange
         * @property {GameMsg_BJL.IBJL_Range} DuiZi BJL_BetRangeList DuiZi
         */

        /**
         * Constructs a new BJL_BetRangeList.
         * @memberof GameMsg_BJL
         * @classdesc Represents a BJL_BetRangeList.
         * @implements IBJL_BetRangeList
         * @constructor
         * @param {GameMsg_BJL.IBJL_BetRangeList=} [properties] Properties to set
         */
        function BJL_BetRangeList(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BJL_BetRangeList ZhuangXian.
         * @member {GameMsg_BJL.IBJL_Range} ZhuangXian
         * @memberof GameMsg_BJL.BJL_BetRangeList
         * @instance
         */
        BJL_BetRangeList.prototype.ZhuangXian = null;

        /**
         * BJL_BetRangeList HeRange.
         * @member {GameMsg_BJL.IBJL_Range} HeRange
         * @memberof GameMsg_BJL.BJL_BetRangeList
         * @instance
         */
        BJL_BetRangeList.prototype.HeRange = null;

        /**
         * BJL_BetRangeList DuiZi.
         * @member {GameMsg_BJL.IBJL_Range} DuiZi
         * @memberof GameMsg_BJL.BJL_BetRangeList
         * @instance
         */
        BJL_BetRangeList.prototype.DuiZi = null;

        /**
         * Creates a new BJL_BetRangeList instance using the specified properties.
         * @function create
         * @memberof GameMsg_BJL.BJL_BetRangeList
         * @static
         * @param {GameMsg_BJL.IBJL_BetRangeList=} [properties] Properties to set
         * @returns {GameMsg_BJL.BJL_BetRangeList} BJL_BetRangeList instance
         */
        BJL_BetRangeList.create = function create(properties) {
            return new BJL_BetRangeList(properties);
        };

        /**
         * Encodes the specified BJL_BetRangeList message. Does not implicitly {@link GameMsg_BJL.BJL_BetRangeList.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_BJL.BJL_BetRangeList
         * @static
         * @param {GameMsg_BJL.IBJL_BetRangeList} message BJL_BetRangeList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BJL_BetRangeList.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            $root.GameMsg_BJL.BJL_Range.encode(message.ZhuangXian, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            $root.GameMsg_BJL.BJL_Range.encode(message.HeRange, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            $root.GameMsg_BJL.BJL_Range.encode(message.DuiZi, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified BJL_BetRangeList message, length delimited. Does not implicitly {@link GameMsg_BJL.BJL_BetRangeList.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_BJL.BJL_BetRangeList
         * @static
         * @param {GameMsg_BJL.IBJL_BetRangeList} message BJL_BetRangeList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BJL_BetRangeList.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BJL_BetRangeList message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_BJL.BJL_BetRangeList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_BJL.BJL_BetRangeList} BJL_BetRangeList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BJL_BetRangeList.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_BJL.BJL_BetRangeList();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.ZhuangXian = $root.GameMsg_BJL.BJL_Range.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.HeRange = $root.GameMsg_BJL.BJL_Range.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.DuiZi = $root.GameMsg_BJL.BJL_Range.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("ZhuangXian"))
                throw $util.ProtocolError("missing required 'ZhuangXian'", { instance: message });
            if (!message.hasOwnProperty("HeRange"))
                throw $util.ProtocolError("missing required 'HeRange'", { instance: message });
            if (!message.hasOwnProperty("DuiZi"))
                throw $util.ProtocolError("missing required 'DuiZi'", { instance: message });
            return message;
        };

        /**
         * Decodes a BJL_BetRangeList message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_BJL.BJL_BetRangeList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_BJL.BJL_BetRangeList} BJL_BetRangeList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BJL_BetRangeList.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BJL_BetRangeList message.
         * @function verify
         * @memberof GameMsg_BJL.BJL_BetRangeList
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BJL_BetRangeList.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            {
                var error = $root.GameMsg_BJL.BJL_Range.verify(message.ZhuangXian);
                if (error)
                    return "ZhuangXian." + error;
            }
            {
                var error = $root.GameMsg_BJL.BJL_Range.verify(message.HeRange);
                if (error)
                    return "HeRange." + error;
            }
            {
                var error = $root.GameMsg_BJL.BJL_Range.verify(message.DuiZi);
                if (error)
                    return "DuiZi." + error;
            }
            return null;
        };

        /**
         * Creates a BJL_BetRangeList message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_BJL.BJL_BetRangeList
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_BJL.BJL_BetRangeList} BJL_BetRangeList
         */
        BJL_BetRangeList.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_BJL.BJL_BetRangeList)
                return object;
            var message = new $root.GameMsg_BJL.BJL_BetRangeList();
            if (object.ZhuangXian != null) {
                if (typeof object.ZhuangXian !== "object")
                    throw TypeError(".GameMsg_BJL.BJL_BetRangeList.ZhuangXian: object expected");
                message.ZhuangXian = $root.GameMsg_BJL.BJL_Range.fromObject(object.ZhuangXian);
            }
            if (object.HeRange != null) {
                if (typeof object.HeRange !== "object")
                    throw TypeError(".GameMsg_BJL.BJL_BetRangeList.HeRange: object expected");
                message.HeRange = $root.GameMsg_BJL.BJL_Range.fromObject(object.HeRange);
            }
            if (object.DuiZi != null) {
                if (typeof object.DuiZi !== "object")
                    throw TypeError(".GameMsg_BJL.BJL_BetRangeList.DuiZi: object expected");
                message.DuiZi = $root.GameMsg_BJL.BJL_Range.fromObject(object.DuiZi);
            }
            return message;
        };

        /**
         * Creates a plain object from a BJL_BetRangeList message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_BJL.BJL_BetRangeList
         * @static
         * @param {GameMsg_BJL.BJL_BetRangeList} message BJL_BetRangeList
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BJL_BetRangeList.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.ZhuangXian = null;
                object.HeRange = null;
                object.DuiZi = null;
            }
            if (message.ZhuangXian != null && message.hasOwnProperty("ZhuangXian"))
                object.ZhuangXian = $root.GameMsg_BJL.BJL_Range.toObject(message.ZhuangXian, options);
            if (message.HeRange != null && message.hasOwnProperty("HeRange"))
                object.HeRange = $root.GameMsg_BJL.BJL_Range.toObject(message.HeRange, options);
            if (message.DuiZi != null && message.hasOwnProperty("DuiZi"))
                object.DuiZi = $root.GameMsg_BJL.BJL_Range.toObject(message.DuiZi, options);
            return object;
        };

        /**
         * Converts this BJL_BetRangeList to JSON.
         * @function toJSON
         * @memberof GameMsg_BJL.BJL_BetRangeList
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BJL_BetRangeList.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BJL_BetRangeList;
    })();

    GameMsg_BJL.BJL_Range = (function() {

        /**
         * Properties of a BJL_Range.
         * @memberof GameMsg_BJL
         * @interface IBJL_Range
         * @property {number} Max BJL_Range Max
         * @property {number} Min BJL_Range Min
         */

        /**
         * Constructs a new BJL_Range.
         * @memberof GameMsg_BJL
         * @classdesc Represents a BJL_Range.
         * @implements IBJL_Range
         * @constructor
         * @param {GameMsg_BJL.IBJL_Range=} [properties] Properties to set
         */
        function BJL_Range(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BJL_Range Max.
         * @member {number} Max
         * @memberof GameMsg_BJL.BJL_Range
         * @instance
         */
        BJL_Range.prototype.Max = 0;

        /**
         * BJL_Range Min.
         * @member {number} Min
         * @memberof GameMsg_BJL.BJL_Range
         * @instance
         */
        BJL_Range.prototype.Min = 0;

        /**
         * Creates a new BJL_Range instance using the specified properties.
         * @function create
         * @memberof GameMsg_BJL.BJL_Range
         * @static
         * @param {GameMsg_BJL.IBJL_Range=} [properties] Properties to set
         * @returns {GameMsg_BJL.BJL_Range} BJL_Range instance
         */
        BJL_Range.create = function create(properties) {
            return new BJL_Range(properties);
        };

        /**
         * Encodes the specified BJL_Range message. Does not implicitly {@link GameMsg_BJL.BJL_Range.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_BJL.BJL_Range
         * @static
         * @param {GameMsg_BJL.IBJL_Range} message BJL_Range message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BJL_Range.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.Max);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.Min);
            return writer;
        };

        /**
         * Encodes the specified BJL_Range message, length delimited. Does not implicitly {@link GameMsg_BJL.BJL_Range.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_BJL.BJL_Range
         * @static
         * @param {GameMsg_BJL.IBJL_Range} message BJL_Range message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BJL_Range.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BJL_Range message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_BJL.BJL_Range
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_BJL.BJL_Range} BJL_Range
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BJL_Range.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_BJL.BJL_Range();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Max = reader.int32();
                    break;
                case 2:
                    message.Min = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("Max"))
                throw $util.ProtocolError("missing required 'Max'", { instance: message });
            if (!message.hasOwnProperty("Min"))
                throw $util.ProtocolError("missing required 'Min'", { instance: message });
            return message;
        };

        /**
         * Decodes a BJL_Range message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_BJL.BJL_Range
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_BJL.BJL_Range} BJL_Range
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BJL_Range.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BJL_Range message.
         * @function verify
         * @memberof GameMsg_BJL.BJL_Range
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BJL_Range.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.Max))
                return "Max: integer expected";
            if (!$util.isInteger(message.Min))
                return "Min: integer expected";
            return null;
        };

        /**
         * Creates a BJL_Range message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_BJL.BJL_Range
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_BJL.BJL_Range} BJL_Range
         */
        BJL_Range.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_BJL.BJL_Range)
                return object;
            var message = new $root.GameMsg_BJL.BJL_Range();
            if (object.Max != null)
                message.Max = object.Max | 0;
            if (object.Min != null)
                message.Min = object.Min | 0;
            return message;
        };

        /**
         * Creates a plain object from a BJL_Range message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_BJL.BJL_Range
         * @static
         * @param {GameMsg_BJL.BJL_Range} message BJL_Range
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BJL_Range.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.Max = 0;
                object.Min = 0;
            }
            if (message.Max != null && message.hasOwnProperty("Max"))
                object.Max = message.Max;
            if (message.Min != null && message.hasOwnProperty("Min"))
                object.Min = message.Min;
            return object;
        };

        /**
         * Converts this BJL_Range to JSON.
         * @function toJSON
         * @memberof GameMsg_BJL.BJL_Range
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BJL_Range.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BJL_Range;
    })();

    GameMsg_BJL.Http_BJL_GameInfo = (function() {

        /**
         * Properties of a Http_BJL_GameInfo.
         * @memberof GameMsg_BJL
         * @interface IHttp_BJL_GameInfo
         * @property {Array.<GameMsg_BJL.IHttp_BJL_TableList>|null} [TableList] Http_BJL_GameInfo TableList
         */

        /**
         * Constructs a new Http_BJL_GameInfo.
         * @memberof GameMsg_BJL
         * @classdesc Represents a Http_BJL_GameInfo.
         * @implements IHttp_BJL_GameInfo
         * @constructor
         * @param {GameMsg_BJL.IHttp_BJL_GameInfo=} [properties] Properties to set
         */
        function Http_BJL_GameInfo(properties) {
            this.TableList = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Http_BJL_GameInfo TableList.
         * @member {Array.<GameMsg_BJL.IHttp_BJL_TableList>} TableList
         * @memberof GameMsg_BJL.Http_BJL_GameInfo
         * @instance
         */
        Http_BJL_GameInfo.prototype.TableList = $util.emptyArray;

        /**
         * Creates a new Http_BJL_GameInfo instance using the specified properties.
         * @function create
         * @memberof GameMsg_BJL.Http_BJL_GameInfo
         * @static
         * @param {GameMsg_BJL.IHttp_BJL_GameInfo=} [properties] Properties to set
         * @returns {GameMsg_BJL.Http_BJL_GameInfo} Http_BJL_GameInfo instance
         */
        Http_BJL_GameInfo.create = function create(properties) {
            return new Http_BJL_GameInfo(properties);
        };

        /**
         * Encodes the specified Http_BJL_GameInfo message. Does not implicitly {@link GameMsg_BJL.Http_BJL_GameInfo.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_BJL.Http_BJL_GameInfo
         * @static
         * @param {GameMsg_BJL.IHttp_BJL_GameInfo} message Http_BJL_GameInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Http_BJL_GameInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.TableList != null && message.TableList.length)
                for (var i = 0; i < message.TableList.length; ++i)
                    $root.GameMsg_BJL.Http_BJL_TableList.encode(message.TableList[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Http_BJL_GameInfo message, length delimited. Does not implicitly {@link GameMsg_BJL.Http_BJL_GameInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_BJL.Http_BJL_GameInfo
         * @static
         * @param {GameMsg_BJL.IHttp_BJL_GameInfo} message Http_BJL_GameInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Http_BJL_GameInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Http_BJL_GameInfo message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_BJL.Http_BJL_GameInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_BJL.Http_BJL_GameInfo} Http_BJL_GameInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Http_BJL_GameInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_BJL.Http_BJL_GameInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.TableList && message.TableList.length))
                        message.TableList = [];
                    message.TableList.push($root.GameMsg_BJL.Http_BJL_TableList.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Http_BJL_GameInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_BJL.Http_BJL_GameInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_BJL.Http_BJL_GameInfo} Http_BJL_GameInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Http_BJL_GameInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Http_BJL_GameInfo message.
         * @function verify
         * @memberof GameMsg_BJL.Http_BJL_GameInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Http_BJL_GameInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.TableList != null && message.hasOwnProperty("TableList")) {
                if (!Array.isArray(message.TableList))
                    return "TableList: array expected";
                for (var i = 0; i < message.TableList.length; ++i) {
                    var error = $root.GameMsg_BJL.Http_BJL_TableList.verify(message.TableList[i]);
                    if (error)
                        return "TableList." + error;
                }
            }
            return null;
        };

        /**
         * Creates a Http_BJL_GameInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_BJL.Http_BJL_GameInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_BJL.Http_BJL_GameInfo} Http_BJL_GameInfo
         */
        Http_BJL_GameInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_BJL.Http_BJL_GameInfo)
                return object;
            var message = new $root.GameMsg_BJL.Http_BJL_GameInfo();
            if (object.TableList) {
                if (!Array.isArray(object.TableList))
                    throw TypeError(".GameMsg_BJL.Http_BJL_GameInfo.TableList: array expected");
                message.TableList = [];
                for (var i = 0; i < object.TableList.length; ++i) {
                    if (typeof object.TableList[i] !== "object")
                        throw TypeError(".GameMsg_BJL.Http_BJL_GameInfo.TableList: object expected");
                    message.TableList[i] = $root.GameMsg_BJL.Http_BJL_TableList.fromObject(object.TableList[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a Http_BJL_GameInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_BJL.Http_BJL_GameInfo
         * @static
         * @param {GameMsg_BJL.Http_BJL_GameInfo} message Http_BJL_GameInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Http_BJL_GameInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.TableList = [];
            if (message.TableList && message.TableList.length) {
                object.TableList = [];
                for (var j = 0; j < message.TableList.length; ++j)
                    object.TableList[j] = $root.GameMsg_BJL.Http_BJL_TableList.toObject(message.TableList[j], options);
            }
            return object;
        };

        /**
         * Converts this Http_BJL_GameInfo to JSON.
         * @function toJSON
         * @memberof GameMsg_BJL.Http_BJL_GameInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Http_BJL_GameInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Http_BJL_GameInfo;
    })();

    GameMsg_BJL.Http_BJL_TableList = (function() {

        /**
         * Properties of a Http_BJL_TableList.
         * @memberof GameMsg_BJL
         * @interface IHttp_BJL_TableList
         * @property {number} TableNo Http_BJL_TableList TableNo
         * @property {number} Status Http_BJL_TableList Status
         * @property {number} GameUserCount Http_BJL_TableList GameUserCount
         * @property {number} RobotCount Http_BJL_TableList RobotCount
         * @property {number|Long} SumEarnAmount Http_BJL_TableList SumEarnAmount
         * @property {number} LastEarnAmount Http_BJL_TableList LastEarnAmount
         * @property {number|Long} PoolCurrentAmount Http_BJL_TableList PoolCurrentAmount
         * @property {number|Long} SysTaxIncome Http_BJL_TableList SysTaxIncome
         * @property {number} BetTime Http_BJL_TableList BetTime
         */

        /**
         * Constructs a new Http_BJL_TableList.
         * @memberof GameMsg_BJL
         * @classdesc Represents a Http_BJL_TableList.
         * @implements IHttp_BJL_TableList
         * @constructor
         * @param {GameMsg_BJL.IHttp_BJL_TableList=} [properties] Properties to set
         */
        function Http_BJL_TableList(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Http_BJL_TableList TableNo.
         * @member {number} TableNo
         * @memberof GameMsg_BJL.Http_BJL_TableList
         * @instance
         */
        Http_BJL_TableList.prototype.TableNo = 0;

        /**
         * Http_BJL_TableList Status.
         * @member {number} Status
         * @memberof GameMsg_BJL.Http_BJL_TableList
         * @instance
         */
        Http_BJL_TableList.prototype.Status = 0;

        /**
         * Http_BJL_TableList GameUserCount.
         * @member {number} GameUserCount
         * @memberof GameMsg_BJL.Http_BJL_TableList
         * @instance
         */
        Http_BJL_TableList.prototype.GameUserCount = 0;

        /**
         * Http_BJL_TableList RobotCount.
         * @member {number} RobotCount
         * @memberof GameMsg_BJL.Http_BJL_TableList
         * @instance
         */
        Http_BJL_TableList.prototype.RobotCount = 0;

        /**
         * Http_BJL_TableList SumEarnAmount.
         * @member {number|Long} SumEarnAmount
         * @memberof GameMsg_BJL.Http_BJL_TableList
         * @instance
         */
        Http_BJL_TableList.prototype.SumEarnAmount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Http_BJL_TableList LastEarnAmount.
         * @member {number} LastEarnAmount
         * @memberof GameMsg_BJL.Http_BJL_TableList
         * @instance
         */
        Http_BJL_TableList.prototype.LastEarnAmount = 0;

        /**
         * Http_BJL_TableList PoolCurrentAmount.
         * @member {number|Long} PoolCurrentAmount
         * @memberof GameMsg_BJL.Http_BJL_TableList
         * @instance
         */
        Http_BJL_TableList.prototype.PoolCurrentAmount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Http_BJL_TableList SysTaxIncome.
         * @member {number|Long} SysTaxIncome
         * @memberof GameMsg_BJL.Http_BJL_TableList
         * @instance
         */
        Http_BJL_TableList.prototype.SysTaxIncome = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Http_BJL_TableList BetTime.
         * @member {number} BetTime
         * @memberof GameMsg_BJL.Http_BJL_TableList
         * @instance
         */
        Http_BJL_TableList.prototype.BetTime = 0;

        /**
         * Creates a new Http_BJL_TableList instance using the specified properties.
         * @function create
         * @memberof GameMsg_BJL.Http_BJL_TableList
         * @static
         * @param {GameMsg_BJL.IHttp_BJL_TableList=} [properties] Properties to set
         * @returns {GameMsg_BJL.Http_BJL_TableList} Http_BJL_TableList instance
         */
        Http_BJL_TableList.create = function create(properties) {
            return new Http_BJL_TableList(properties);
        };

        /**
         * Encodes the specified Http_BJL_TableList message. Does not implicitly {@link GameMsg_BJL.Http_BJL_TableList.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_BJL.Http_BJL_TableList
         * @static
         * @param {GameMsg_BJL.IHttp_BJL_TableList} message Http_BJL_TableList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Http_BJL_TableList.encode = function encode(message, writer) {
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
            writer.uint32(/* id 9, wireType 0 =*/72).int32(message.BetTime);
            return writer;
        };

        /**
         * Encodes the specified Http_BJL_TableList message, length delimited. Does not implicitly {@link GameMsg_BJL.Http_BJL_TableList.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_BJL.Http_BJL_TableList
         * @static
         * @param {GameMsg_BJL.IHttp_BJL_TableList} message Http_BJL_TableList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Http_BJL_TableList.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Http_BJL_TableList message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_BJL.Http_BJL_TableList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_BJL.Http_BJL_TableList} Http_BJL_TableList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Http_BJL_TableList.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_BJL.Http_BJL_TableList();
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
                case 9:
                    message.BetTime = reader.int32();
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
            if (!message.hasOwnProperty("BetTime"))
                throw $util.ProtocolError("missing required 'BetTime'", { instance: message });
            return message;
        };

        /**
         * Decodes a Http_BJL_TableList message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_BJL.Http_BJL_TableList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_BJL.Http_BJL_TableList} Http_BJL_TableList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Http_BJL_TableList.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Http_BJL_TableList message.
         * @function verify
         * @memberof GameMsg_BJL.Http_BJL_TableList
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Http_BJL_TableList.verify = function verify(message) {
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
            if (!$util.isInteger(message.BetTime))
                return "BetTime: integer expected";
            return null;
        };

        /**
         * Creates a Http_BJL_TableList message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_BJL.Http_BJL_TableList
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_BJL.Http_BJL_TableList} Http_BJL_TableList
         */
        Http_BJL_TableList.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_BJL.Http_BJL_TableList)
                return object;
            var message = new $root.GameMsg_BJL.Http_BJL_TableList();
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
            if (object.BetTime != null)
                message.BetTime = object.BetTime | 0;
            return message;
        };

        /**
         * Creates a plain object from a Http_BJL_TableList message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_BJL.Http_BJL_TableList
         * @static
         * @param {GameMsg_BJL.Http_BJL_TableList} message Http_BJL_TableList
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Http_BJL_TableList.toObject = function toObject(message, options) {
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
                object.BetTime = 0;
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
            if (message.BetTime != null && message.hasOwnProperty("BetTime"))
                object.BetTime = message.BetTime;
            return object;
        };

        /**
         * Converts this Http_BJL_TableList to JSON.
         * @function toJSON
         * @memberof GameMsg_BJL.Http_BJL_TableList
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Http_BJL_TableList.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Http_BJL_TableList;
    })();

    GameMsg_BJL.Http_BJL_BetBlackDetail = (function() {

        /**
         * Properties of a Http_BJL_BetBlackDetail.
         * @memberof GameMsg_BJL
         * @interface IHttp_BJL_BetBlackDetail
         * @property {string} BlackUserList Http_BJL_BetBlackDetail BlackUserList
         */

        /**
         * Constructs a new Http_BJL_BetBlackDetail.
         * @memberof GameMsg_BJL
         * @classdesc Represents a Http_BJL_BetBlackDetail.
         * @implements IHttp_BJL_BetBlackDetail
         * @constructor
         * @param {GameMsg_BJL.IHttp_BJL_BetBlackDetail=} [properties] Properties to set
         */
        function Http_BJL_BetBlackDetail(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Http_BJL_BetBlackDetail BlackUserList.
         * @member {string} BlackUserList
         * @memberof GameMsg_BJL.Http_BJL_BetBlackDetail
         * @instance
         */
        Http_BJL_BetBlackDetail.prototype.BlackUserList = "";

        /**
         * Creates a new Http_BJL_BetBlackDetail instance using the specified properties.
         * @function create
         * @memberof GameMsg_BJL.Http_BJL_BetBlackDetail
         * @static
         * @param {GameMsg_BJL.IHttp_BJL_BetBlackDetail=} [properties] Properties to set
         * @returns {GameMsg_BJL.Http_BJL_BetBlackDetail} Http_BJL_BetBlackDetail instance
         */
        Http_BJL_BetBlackDetail.create = function create(properties) {
            return new Http_BJL_BetBlackDetail(properties);
        };

        /**
         * Encodes the specified Http_BJL_BetBlackDetail message. Does not implicitly {@link GameMsg_BJL.Http_BJL_BetBlackDetail.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_BJL.Http_BJL_BetBlackDetail
         * @static
         * @param {GameMsg_BJL.IHttp_BJL_BetBlackDetail} message Http_BJL_BetBlackDetail message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Http_BJL_BetBlackDetail.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.BlackUserList);
            return writer;
        };

        /**
         * Encodes the specified Http_BJL_BetBlackDetail message, length delimited. Does not implicitly {@link GameMsg_BJL.Http_BJL_BetBlackDetail.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_BJL.Http_BJL_BetBlackDetail
         * @static
         * @param {GameMsg_BJL.IHttp_BJL_BetBlackDetail} message Http_BJL_BetBlackDetail message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Http_BJL_BetBlackDetail.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Http_BJL_BetBlackDetail message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_BJL.Http_BJL_BetBlackDetail
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_BJL.Http_BJL_BetBlackDetail} Http_BJL_BetBlackDetail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Http_BJL_BetBlackDetail.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_BJL.Http_BJL_BetBlackDetail();
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
            if (!message.hasOwnProperty("BlackUserList"))
                throw $util.ProtocolError("missing required 'BlackUserList'", { instance: message });
            return message;
        };

        /**
         * Decodes a Http_BJL_BetBlackDetail message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_BJL.Http_BJL_BetBlackDetail
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_BJL.Http_BJL_BetBlackDetail} Http_BJL_BetBlackDetail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Http_BJL_BetBlackDetail.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Http_BJL_BetBlackDetail message.
         * @function verify
         * @memberof GameMsg_BJL.Http_BJL_BetBlackDetail
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Http_BJL_BetBlackDetail.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.BlackUserList))
                return "BlackUserList: string expected";
            return null;
        };

        /**
         * Creates a Http_BJL_BetBlackDetail message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_BJL.Http_BJL_BetBlackDetail
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_BJL.Http_BJL_BetBlackDetail} Http_BJL_BetBlackDetail
         */
        Http_BJL_BetBlackDetail.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_BJL.Http_BJL_BetBlackDetail)
                return object;
            var message = new $root.GameMsg_BJL.Http_BJL_BetBlackDetail();
            if (object.BlackUserList != null)
                message.BlackUserList = String(object.BlackUserList);
            return message;
        };

        /**
         * Creates a plain object from a Http_BJL_BetBlackDetail message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_BJL.Http_BJL_BetBlackDetail
         * @static
         * @param {GameMsg_BJL.Http_BJL_BetBlackDetail} message Http_BJL_BetBlackDetail
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Http_BJL_BetBlackDetail.toObject = function toObject(message, options) {
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
         * Converts this Http_BJL_BetBlackDetail to JSON.
         * @function toJSON
         * @memberof GameMsg_BJL.Http_BJL_BetBlackDetail
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Http_BJL_BetBlackDetail.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Http_BJL_BetBlackDetail;
    })();

    GameMsg_BJL.Http_BJL_TableDetail = (function() {

        /**
         * Properties of a Http_BJL_TableDetail.
         * @memberof GameMsg_BJL
         * @interface IHttp_BJL_TableDetail
         * @property {number} TableNo Http_BJL_TableDetail TableNo
         * @property {number} Status Http_BJL_TableDetail Status
         * @property {number|Long} SumEarnAmount Http_BJL_TableDetail SumEarnAmount
         * @property {number} LastEarnAmount Http_BJL_TableDetail LastEarnAmount
         * @property {number|Long} PoolCurrentAmount Http_BJL_TableDetail PoolCurrentAmount
         * @property {number} GameUserCount Http_BJL_TableDetail GameUserCount
         * @property {number} RobotCount Http_BJL_TableDetail RobotCount
         * @property {number} PopWaterRate Http_BJL_TableDetail PopWaterRate
         * @property {number} ZhuangType Http_BJL_TableDetail ZhuangType
         * @property {string} ZhuangNickName Http_BJL_TableDetail ZhuangNickName
         * @property {number} ZhuangUserID Http_BJL_TableDetail ZhuangUserID
         * @property {number} ZhuangSurplusTotal Http_BJL_TableDetail ZhuangSurplusTotal
         * @property {number|Long} ZhuangCurrentMoneyAmount Http_BJL_TableDetail ZhuangCurrentMoneyAmount
         * @property {number|Long} ZhuangInitMoneyAmount Http_BJL_TableDetail ZhuangInitMoneyAmount
         * @property {number|Long} OpenResultZhuang Http_BJL_TableDetail OpenResultZhuang
         * @property {number|Long} OpenResultXian Http_BJL_TableDetail OpenResultXian
         * @property {number|Long} OpenResultHe Http_BJL_TableDetail OpenResultHe
         * @property {string} CurentOpenResult Http_BJL_TableDetail CurentOpenResult
         * @property {number|Long} CurentOpenResultEarn Http_BJL_TableDetail CurentOpenResultEarn
         * @property {Array.<GameMsg_BJL.IHttp_BJL_UserInfo>|null} [UserInfo] Http_BJL_TableDetail UserInfo
         * @property {number|Long} SysTaxIncome Http_BJL_TableDetail SysTaxIncome
         * @property {number} BetTime Http_BJL_TableDetail BetTime
         * @property {number|Long} WinLine Http_BJL_TableDetail WinLine
         * @property {number|Long} RobotBetAmount Http_BJL_TableDetail RobotBetAmount
         * @property {Array.<GameMsg_BJL.IHttp_BJL_UserInfo>|null} [LastGameUserBet] Http_BJL_TableDetail LastGameUserBet
         * @property {number} ZhuangWinRate Http_BJL_TableDetail ZhuangWinRate
         * @property {number} HeWinRate Http_BJL_TableDetail HeWinRate
         * @property {number} XianWinRate Http_BJL_TableDetail XianWinRate
         * @property {number} ZhuangDZWinRate Http_BJL_TableDetail ZhuangDZWinRate
         * @property {number} XianDZWinRate Http_BJL_TableDetail XianDZWinRate
         * @property {number|Long} FanFengTarget Http_BJL_TableDetail FanFengTarget
         * @property {number|Long} FanFengComplete Http_BJL_TableDetail FanFengComplete
         */

        /**
         * Constructs a new Http_BJL_TableDetail.
         * @memberof GameMsg_BJL
         * @classdesc Represents a Http_BJL_TableDetail.
         * @implements IHttp_BJL_TableDetail
         * @constructor
         * @param {GameMsg_BJL.IHttp_BJL_TableDetail=} [properties] Properties to set
         */
        function Http_BJL_TableDetail(properties) {
            this.UserInfo = [];
            this.LastGameUserBet = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Http_BJL_TableDetail TableNo.
         * @member {number} TableNo
         * @memberof GameMsg_BJL.Http_BJL_TableDetail
         * @instance
         */
        Http_BJL_TableDetail.prototype.TableNo = 0;

        /**
         * Http_BJL_TableDetail Status.
         * @member {number} Status
         * @memberof GameMsg_BJL.Http_BJL_TableDetail
         * @instance
         */
        Http_BJL_TableDetail.prototype.Status = 0;

        /**
         * Http_BJL_TableDetail SumEarnAmount.
         * @member {number|Long} SumEarnAmount
         * @memberof GameMsg_BJL.Http_BJL_TableDetail
         * @instance
         */
        Http_BJL_TableDetail.prototype.SumEarnAmount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Http_BJL_TableDetail LastEarnAmount.
         * @member {number} LastEarnAmount
         * @memberof GameMsg_BJL.Http_BJL_TableDetail
         * @instance
         */
        Http_BJL_TableDetail.prototype.LastEarnAmount = 0;

        /**
         * Http_BJL_TableDetail PoolCurrentAmount.
         * @member {number|Long} PoolCurrentAmount
         * @memberof GameMsg_BJL.Http_BJL_TableDetail
         * @instance
         */
        Http_BJL_TableDetail.prototype.PoolCurrentAmount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Http_BJL_TableDetail GameUserCount.
         * @member {number} GameUserCount
         * @memberof GameMsg_BJL.Http_BJL_TableDetail
         * @instance
         */
        Http_BJL_TableDetail.prototype.GameUserCount = 0;

        /**
         * Http_BJL_TableDetail RobotCount.
         * @member {number} RobotCount
         * @memberof GameMsg_BJL.Http_BJL_TableDetail
         * @instance
         */
        Http_BJL_TableDetail.prototype.RobotCount = 0;

        /**
         * Http_BJL_TableDetail PopWaterRate.
         * @member {number} PopWaterRate
         * @memberof GameMsg_BJL.Http_BJL_TableDetail
         * @instance
         */
        Http_BJL_TableDetail.prototype.PopWaterRate = 0;

        /**
         * Http_BJL_TableDetail ZhuangType.
         * @member {number} ZhuangType
         * @memberof GameMsg_BJL.Http_BJL_TableDetail
         * @instance
         */
        Http_BJL_TableDetail.prototype.ZhuangType = 0;

        /**
         * Http_BJL_TableDetail ZhuangNickName.
         * @member {string} ZhuangNickName
         * @memberof GameMsg_BJL.Http_BJL_TableDetail
         * @instance
         */
        Http_BJL_TableDetail.prototype.ZhuangNickName = "";

        /**
         * Http_BJL_TableDetail ZhuangUserID.
         * @member {number} ZhuangUserID
         * @memberof GameMsg_BJL.Http_BJL_TableDetail
         * @instance
         */
        Http_BJL_TableDetail.prototype.ZhuangUserID = 0;

        /**
         * Http_BJL_TableDetail ZhuangSurplusTotal.
         * @member {number} ZhuangSurplusTotal
         * @memberof GameMsg_BJL.Http_BJL_TableDetail
         * @instance
         */
        Http_BJL_TableDetail.prototype.ZhuangSurplusTotal = 0;

        /**
         * Http_BJL_TableDetail ZhuangCurrentMoneyAmount.
         * @member {number|Long} ZhuangCurrentMoneyAmount
         * @memberof GameMsg_BJL.Http_BJL_TableDetail
         * @instance
         */
        Http_BJL_TableDetail.prototype.ZhuangCurrentMoneyAmount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Http_BJL_TableDetail ZhuangInitMoneyAmount.
         * @member {number|Long} ZhuangInitMoneyAmount
         * @memberof GameMsg_BJL.Http_BJL_TableDetail
         * @instance
         */
        Http_BJL_TableDetail.prototype.ZhuangInitMoneyAmount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Http_BJL_TableDetail OpenResultZhuang.
         * @member {number|Long} OpenResultZhuang
         * @memberof GameMsg_BJL.Http_BJL_TableDetail
         * @instance
         */
        Http_BJL_TableDetail.prototype.OpenResultZhuang = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Http_BJL_TableDetail OpenResultXian.
         * @member {number|Long} OpenResultXian
         * @memberof GameMsg_BJL.Http_BJL_TableDetail
         * @instance
         */
        Http_BJL_TableDetail.prototype.OpenResultXian = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Http_BJL_TableDetail OpenResultHe.
         * @member {number|Long} OpenResultHe
         * @memberof GameMsg_BJL.Http_BJL_TableDetail
         * @instance
         */
        Http_BJL_TableDetail.prototype.OpenResultHe = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Http_BJL_TableDetail CurentOpenResult.
         * @member {string} CurentOpenResult
         * @memberof GameMsg_BJL.Http_BJL_TableDetail
         * @instance
         */
        Http_BJL_TableDetail.prototype.CurentOpenResult = "";

        /**
         * Http_BJL_TableDetail CurentOpenResultEarn.
         * @member {number|Long} CurentOpenResultEarn
         * @memberof GameMsg_BJL.Http_BJL_TableDetail
         * @instance
         */
        Http_BJL_TableDetail.prototype.CurentOpenResultEarn = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Http_BJL_TableDetail UserInfo.
         * @member {Array.<GameMsg_BJL.IHttp_BJL_UserInfo>} UserInfo
         * @memberof GameMsg_BJL.Http_BJL_TableDetail
         * @instance
         */
        Http_BJL_TableDetail.prototype.UserInfo = $util.emptyArray;

        /**
         * Http_BJL_TableDetail SysTaxIncome.
         * @member {number|Long} SysTaxIncome
         * @memberof GameMsg_BJL.Http_BJL_TableDetail
         * @instance
         */
        Http_BJL_TableDetail.prototype.SysTaxIncome = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Http_BJL_TableDetail BetTime.
         * @member {number} BetTime
         * @memberof GameMsg_BJL.Http_BJL_TableDetail
         * @instance
         */
        Http_BJL_TableDetail.prototype.BetTime = 0;

        /**
         * Http_BJL_TableDetail WinLine.
         * @member {number|Long} WinLine
         * @memberof GameMsg_BJL.Http_BJL_TableDetail
         * @instance
         */
        Http_BJL_TableDetail.prototype.WinLine = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Http_BJL_TableDetail RobotBetAmount.
         * @member {number|Long} RobotBetAmount
         * @memberof GameMsg_BJL.Http_BJL_TableDetail
         * @instance
         */
        Http_BJL_TableDetail.prototype.RobotBetAmount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Http_BJL_TableDetail LastGameUserBet.
         * @member {Array.<GameMsg_BJL.IHttp_BJL_UserInfo>} LastGameUserBet
         * @memberof GameMsg_BJL.Http_BJL_TableDetail
         * @instance
         */
        Http_BJL_TableDetail.prototype.LastGameUserBet = $util.emptyArray;

        /**
         * Http_BJL_TableDetail ZhuangWinRate.
         * @member {number} ZhuangWinRate
         * @memberof GameMsg_BJL.Http_BJL_TableDetail
         * @instance
         */
        Http_BJL_TableDetail.prototype.ZhuangWinRate = 0;

        /**
         * Http_BJL_TableDetail HeWinRate.
         * @member {number} HeWinRate
         * @memberof GameMsg_BJL.Http_BJL_TableDetail
         * @instance
         */
        Http_BJL_TableDetail.prototype.HeWinRate = 0;

        /**
         * Http_BJL_TableDetail XianWinRate.
         * @member {number} XianWinRate
         * @memberof GameMsg_BJL.Http_BJL_TableDetail
         * @instance
         */
        Http_BJL_TableDetail.prototype.XianWinRate = 0;

        /**
         * Http_BJL_TableDetail ZhuangDZWinRate.
         * @member {number} ZhuangDZWinRate
         * @memberof GameMsg_BJL.Http_BJL_TableDetail
         * @instance
         */
        Http_BJL_TableDetail.prototype.ZhuangDZWinRate = 0;

        /**
         * Http_BJL_TableDetail XianDZWinRate.
         * @member {number} XianDZWinRate
         * @memberof GameMsg_BJL.Http_BJL_TableDetail
         * @instance
         */
        Http_BJL_TableDetail.prototype.XianDZWinRate = 0;

        /**
         * Http_BJL_TableDetail FanFengTarget.
         * @member {number|Long} FanFengTarget
         * @memberof GameMsg_BJL.Http_BJL_TableDetail
         * @instance
         */
        Http_BJL_TableDetail.prototype.FanFengTarget = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Http_BJL_TableDetail FanFengComplete.
         * @member {number|Long} FanFengComplete
         * @memberof GameMsg_BJL.Http_BJL_TableDetail
         * @instance
         */
        Http_BJL_TableDetail.prototype.FanFengComplete = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new Http_BJL_TableDetail instance using the specified properties.
         * @function create
         * @memberof GameMsg_BJL.Http_BJL_TableDetail
         * @static
         * @param {GameMsg_BJL.IHttp_BJL_TableDetail=} [properties] Properties to set
         * @returns {GameMsg_BJL.Http_BJL_TableDetail} Http_BJL_TableDetail instance
         */
        Http_BJL_TableDetail.create = function create(properties) {
            return new Http_BJL_TableDetail(properties);
        };

        /**
         * Encodes the specified Http_BJL_TableDetail message. Does not implicitly {@link GameMsg_BJL.Http_BJL_TableDetail.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_BJL.Http_BJL_TableDetail
         * @static
         * @param {GameMsg_BJL.IHttp_BJL_TableDetail} message Http_BJL_TableDetail message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Http_BJL_TableDetail.encode = function encode(message, writer) {
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
            writer.uint32(/* id 15, wireType 0 =*/120).int64(message.OpenResultZhuang);
            writer.uint32(/* id 16, wireType 0 =*/128).int64(message.OpenResultXian);
            writer.uint32(/* id 17, wireType 0 =*/136).int64(message.OpenResultHe);
            writer.uint32(/* id 18, wireType 2 =*/146).string(message.CurentOpenResult);
            writer.uint32(/* id 19, wireType 0 =*/152).int64(message.CurentOpenResultEarn);
            if (message.UserInfo != null && message.UserInfo.length)
                for (var i = 0; i < message.UserInfo.length; ++i)
                    $root.GameMsg_BJL.Http_BJL_UserInfo.encode(message.UserInfo[i], writer.uint32(/* id 20, wireType 2 =*/162).fork()).ldelim();
            writer.uint32(/* id 21, wireType 0 =*/168).int64(message.SysTaxIncome);
            writer.uint32(/* id 22, wireType 0 =*/176).int32(message.BetTime);
            writer.uint32(/* id 23, wireType 0 =*/184).int64(message.WinLine);
            writer.uint32(/* id 24, wireType 0 =*/192).int64(message.RobotBetAmount);
            if (message.LastGameUserBet != null && message.LastGameUserBet.length)
                for (var i = 0; i < message.LastGameUserBet.length; ++i)
                    $root.GameMsg_BJL.Http_BJL_UserInfo.encode(message.LastGameUserBet[i], writer.uint32(/* id 25, wireType 2 =*/202).fork()).ldelim();
            writer.uint32(/* id 26, wireType 0 =*/208).int32(message.ZhuangWinRate);
            writer.uint32(/* id 27, wireType 0 =*/216).int32(message.HeWinRate);
            writer.uint32(/* id 28, wireType 0 =*/224).int32(message.XianWinRate);
            writer.uint32(/* id 29, wireType 0 =*/232).int32(message.ZhuangDZWinRate);
            writer.uint32(/* id 30, wireType 0 =*/240).int32(message.XianDZWinRate);
            writer.uint32(/* id 31, wireType 0 =*/248).int64(message.FanFengTarget);
            writer.uint32(/* id 32, wireType 0 =*/256).int64(message.FanFengComplete);
            return writer;
        };

        /**
         * Encodes the specified Http_BJL_TableDetail message, length delimited. Does not implicitly {@link GameMsg_BJL.Http_BJL_TableDetail.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_BJL.Http_BJL_TableDetail
         * @static
         * @param {GameMsg_BJL.IHttp_BJL_TableDetail} message Http_BJL_TableDetail message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Http_BJL_TableDetail.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Http_BJL_TableDetail message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_BJL.Http_BJL_TableDetail
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_BJL.Http_BJL_TableDetail} Http_BJL_TableDetail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Http_BJL_TableDetail.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_BJL.Http_BJL_TableDetail();
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
                    message.OpenResultZhuang = reader.int64();
                    break;
                case 16:
                    message.OpenResultXian = reader.int64();
                    break;
                case 17:
                    message.OpenResultHe = reader.int64();
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
                    message.UserInfo.push($root.GameMsg_BJL.Http_BJL_UserInfo.decode(reader, reader.uint32()));
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
                    message.LastGameUserBet.push($root.GameMsg_BJL.Http_BJL_UserInfo.decode(reader, reader.uint32()));
                    break;
                case 26:
                    message.ZhuangWinRate = reader.int32();
                    break;
                case 27:
                    message.HeWinRate = reader.int32();
                    break;
                case 28:
                    message.XianWinRate = reader.int32();
                    break;
                case 29:
                    message.ZhuangDZWinRate = reader.int32();
                    break;
                case 30:
                    message.XianDZWinRate = reader.int32();
                    break;
                case 31:
                    message.FanFengTarget = reader.int64();
                    break;
                case 32:
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
            if (!message.hasOwnProperty("OpenResultZhuang"))
                throw $util.ProtocolError("missing required 'OpenResultZhuang'", { instance: message });
            if (!message.hasOwnProperty("OpenResultXian"))
                throw $util.ProtocolError("missing required 'OpenResultXian'", { instance: message });
            if (!message.hasOwnProperty("OpenResultHe"))
                throw $util.ProtocolError("missing required 'OpenResultHe'", { instance: message });
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
            if (!message.hasOwnProperty("ZhuangWinRate"))
                throw $util.ProtocolError("missing required 'ZhuangWinRate'", { instance: message });
            if (!message.hasOwnProperty("HeWinRate"))
                throw $util.ProtocolError("missing required 'HeWinRate'", { instance: message });
            if (!message.hasOwnProperty("XianWinRate"))
                throw $util.ProtocolError("missing required 'XianWinRate'", { instance: message });
            if (!message.hasOwnProperty("ZhuangDZWinRate"))
                throw $util.ProtocolError("missing required 'ZhuangDZWinRate'", { instance: message });
            if (!message.hasOwnProperty("XianDZWinRate"))
                throw $util.ProtocolError("missing required 'XianDZWinRate'", { instance: message });
            if (!message.hasOwnProperty("FanFengTarget"))
                throw $util.ProtocolError("missing required 'FanFengTarget'", { instance: message });
            if (!message.hasOwnProperty("FanFengComplete"))
                throw $util.ProtocolError("missing required 'FanFengComplete'", { instance: message });
            return message;
        };

        /**
         * Decodes a Http_BJL_TableDetail message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_BJL.Http_BJL_TableDetail
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_BJL.Http_BJL_TableDetail} Http_BJL_TableDetail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Http_BJL_TableDetail.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Http_BJL_TableDetail message.
         * @function verify
         * @memberof GameMsg_BJL.Http_BJL_TableDetail
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Http_BJL_TableDetail.verify = function verify(message) {
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
            if (!$util.isInteger(message.OpenResultZhuang) && !(message.OpenResultZhuang && $util.isInteger(message.OpenResultZhuang.low) && $util.isInteger(message.OpenResultZhuang.high)))
                return "OpenResultZhuang: integer|Long expected";
            if (!$util.isInteger(message.OpenResultXian) && !(message.OpenResultXian && $util.isInteger(message.OpenResultXian.low) && $util.isInteger(message.OpenResultXian.high)))
                return "OpenResultXian: integer|Long expected";
            if (!$util.isInteger(message.OpenResultHe) && !(message.OpenResultHe && $util.isInteger(message.OpenResultHe.low) && $util.isInteger(message.OpenResultHe.high)))
                return "OpenResultHe: integer|Long expected";
            if (!$util.isString(message.CurentOpenResult))
                return "CurentOpenResult: string expected";
            if (!$util.isInteger(message.CurentOpenResultEarn) && !(message.CurentOpenResultEarn && $util.isInteger(message.CurentOpenResultEarn.low) && $util.isInteger(message.CurentOpenResultEarn.high)))
                return "CurentOpenResultEarn: integer|Long expected";
            if (message.UserInfo != null && message.hasOwnProperty("UserInfo")) {
                if (!Array.isArray(message.UserInfo))
                    return "UserInfo: array expected";
                for (var i = 0; i < message.UserInfo.length; ++i) {
                    var error = $root.GameMsg_BJL.Http_BJL_UserInfo.verify(message.UserInfo[i]);
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
                    var error = $root.GameMsg_BJL.Http_BJL_UserInfo.verify(message.LastGameUserBet[i]);
                    if (error)
                        return "LastGameUserBet." + error;
                }
            }
            if (!$util.isInteger(message.ZhuangWinRate))
                return "ZhuangWinRate: integer expected";
            if (!$util.isInteger(message.HeWinRate))
                return "HeWinRate: integer expected";
            if (!$util.isInteger(message.XianWinRate))
                return "XianWinRate: integer expected";
            if (!$util.isInteger(message.ZhuangDZWinRate))
                return "ZhuangDZWinRate: integer expected";
            if (!$util.isInteger(message.XianDZWinRate))
                return "XianDZWinRate: integer expected";
            if (!$util.isInteger(message.FanFengTarget) && !(message.FanFengTarget && $util.isInteger(message.FanFengTarget.low) && $util.isInteger(message.FanFengTarget.high)))
                return "FanFengTarget: integer|Long expected";
            if (!$util.isInteger(message.FanFengComplete) && !(message.FanFengComplete && $util.isInteger(message.FanFengComplete.low) && $util.isInteger(message.FanFengComplete.high)))
                return "FanFengComplete: integer|Long expected";
            return null;
        };

        /**
         * Creates a Http_BJL_TableDetail message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_BJL.Http_BJL_TableDetail
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_BJL.Http_BJL_TableDetail} Http_BJL_TableDetail
         */
        Http_BJL_TableDetail.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_BJL.Http_BJL_TableDetail)
                return object;
            var message = new $root.GameMsg_BJL.Http_BJL_TableDetail();
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
            if (object.OpenResultZhuang != null)
                if ($util.Long)
                    (message.OpenResultZhuang = $util.Long.fromValue(object.OpenResultZhuang)).unsigned = false;
                else if (typeof object.OpenResultZhuang === "string")
                    message.OpenResultZhuang = parseInt(object.OpenResultZhuang, 10);
                else if (typeof object.OpenResultZhuang === "number")
                    message.OpenResultZhuang = object.OpenResultZhuang;
                else if (typeof object.OpenResultZhuang === "object")
                    message.OpenResultZhuang = new $util.LongBits(object.OpenResultZhuang.low >>> 0, object.OpenResultZhuang.high >>> 0).toNumber();
            if (object.OpenResultXian != null)
                if ($util.Long)
                    (message.OpenResultXian = $util.Long.fromValue(object.OpenResultXian)).unsigned = false;
                else if (typeof object.OpenResultXian === "string")
                    message.OpenResultXian = parseInt(object.OpenResultXian, 10);
                else if (typeof object.OpenResultXian === "number")
                    message.OpenResultXian = object.OpenResultXian;
                else if (typeof object.OpenResultXian === "object")
                    message.OpenResultXian = new $util.LongBits(object.OpenResultXian.low >>> 0, object.OpenResultXian.high >>> 0).toNumber();
            if (object.OpenResultHe != null)
                if ($util.Long)
                    (message.OpenResultHe = $util.Long.fromValue(object.OpenResultHe)).unsigned = false;
                else if (typeof object.OpenResultHe === "string")
                    message.OpenResultHe = parseInt(object.OpenResultHe, 10);
                else if (typeof object.OpenResultHe === "number")
                    message.OpenResultHe = object.OpenResultHe;
                else if (typeof object.OpenResultHe === "object")
                    message.OpenResultHe = new $util.LongBits(object.OpenResultHe.low >>> 0, object.OpenResultHe.high >>> 0).toNumber();
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
                    throw TypeError(".GameMsg_BJL.Http_BJL_TableDetail.UserInfo: array expected");
                message.UserInfo = [];
                for (var i = 0; i < object.UserInfo.length; ++i) {
                    if (typeof object.UserInfo[i] !== "object")
                        throw TypeError(".GameMsg_BJL.Http_BJL_TableDetail.UserInfo: object expected");
                    message.UserInfo[i] = $root.GameMsg_BJL.Http_BJL_UserInfo.fromObject(object.UserInfo[i]);
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
                    throw TypeError(".GameMsg_BJL.Http_BJL_TableDetail.LastGameUserBet: array expected");
                message.LastGameUserBet = [];
                for (var i = 0; i < object.LastGameUserBet.length; ++i) {
                    if (typeof object.LastGameUserBet[i] !== "object")
                        throw TypeError(".GameMsg_BJL.Http_BJL_TableDetail.LastGameUserBet: object expected");
                    message.LastGameUserBet[i] = $root.GameMsg_BJL.Http_BJL_UserInfo.fromObject(object.LastGameUserBet[i]);
                }
            }
            if (object.ZhuangWinRate != null)
                message.ZhuangWinRate = object.ZhuangWinRate | 0;
            if (object.HeWinRate != null)
                message.HeWinRate = object.HeWinRate | 0;
            if (object.XianWinRate != null)
                message.XianWinRate = object.XianWinRate | 0;
            if (object.ZhuangDZWinRate != null)
                message.ZhuangDZWinRate = object.ZhuangDZWinRate | 0;
            if (object.XianDZWinRate != null)
                message.XianDZWinRate = object.XianDZWinRate | 0;
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
         * Creates a plain object from a Http_BJL_TableDetail message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_BJL.Http_BJL_TableDetail
         * @static
         * @param {GameMsg_BJL.Http_BJL_TableDetail} message Http_BJL_TableDetail
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Http_BJL_TableDetail.toObject = function toObject(message, options) {
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
                    object.OpenResultZhuang = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.OpenResultZhuang = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.OpenResultXian = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.OpenResultXian = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.OpenResultHe = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.OpenResultHe = options.longs === String ? "0" : 0;
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
                object.ZhuangWinRate = 0;
                object.HeWinRate = 0;
                object.XianWinRate = 0;
                object.ZhuangDZWinRate = 0;
                object.XianDZWinRate = 0;
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
            if (message.OpenResultZhuang != null && message.hasOwnProperty("OpenResultZhuang"))
                if (typeof message.OpenResultZhuang === "number")
                    object.OpenResultZhuang = options.longs === String ? String(message.OpenResultZhuang) : message.OpenResultZhuang;
                else
                    object.OpenResultZhuang = options.longs === String ? $util.Long.prototype.toString.call(message.OpenResultZhuang) : options.longs === Number ? new $util.LongBits(message.OpenResultZhuang.low >>> 0, message.OpenResultZhuang.high >>> 0).toNumber() : message.OpenResultZhuang;
            if (message.OpenResultXian != null && message.hasOwnProperty("OpenResultXian"))
                if (typeof message.OpenResultXian === "number")
                    object.OpenResultXian = options.longs === String ? String(message.OpenResultXian) : message.OpenResultXian;
                else
                    object.OpenResultXian = options.longs === String ? $util.Long.prototype.toString.call(message.OpenResultXian) : options.longs === Number ? new $util.LongBits(message.OpenResultXian.low >>> 0, message.OpenResultXian.high >>> 0).toNumber() : message.OpenResultXian;
            if (message.OpenResultHe != null && message.hasOwnProperty("OpenResultHe"))
                if (typeof message.OpenResultHe === "number")
                    object.OpenResultHe = options.longs === String ? String(message.OpenResultHe) : message.OpenResultHe;
                else
                    object.OpenResultHe = options.longs === String ? $util.Long.prototype.toString.call(message.OpenResultHe) : options.longs === Number ? new $util.LongBits(message.OpenResultHe.low >>> 0, message.OpenResultHe.high >>> 0).toNumber() : message.OpenResultHe;
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
                    object.UserInfo[j] = $root.GameMsg_BJL.Http_BJL_UserInfo.toObject(message.UserInfo[j], options);
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
                    object.LastGameUserBet[j] = $root.GameMsg_BJL.Http_BJL_UserInfo.toObject(message.LastGameUserBet[j], options);
            }
            if (message.ZhuangWinRate != null && message.hasOwnProperty("ZhuangWinRate"))
                object.ZhuangWinRate = message.ZhuangWinRate;
            if (message.HeWinRate != null && message.hasOwnProperty("HeWinRate"))
                object.HeWinRate = message.HeWinRate;
            if (message.XianWinRate != null && message.hasOwnProperty("XianWinRate"))
                object.XianWinRate = message.XianWinRate;
            if (message.ZhuangDZWinRate != null && message.hasOwnProperty("ZhuangDZWinRate"))
                object.ZhuangDZWinRate = message.ZhuangDZWinRate;
            if (message.XianDZWinRate != null && message.hasOwnProperty("XianDZWinRate"))
                object.XianDZWinRate = message.XianDZWinRate;
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
         * Converts this Http_BJL_TableDetail to JSON.
         * @function toJSON
         * @memberof GameMsg_BJL.Http_BJL_TableDetail
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Http_BJL_TableDetail.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Http_BJL_TableDetail;
    })();

    GameMsg_BJL.Http_BJL_UserInfo = (function() {

        /**
         * Properties of a Http_BJL_UserInfo.
         * @memberof GameMsg_BJL
         * @interface IHttp_BJL_UserInfo
         * @property {number} UserID Http_BJL_UserInfo UserID
         * @property {number} UserType Http_BJL_UserInfo UserType
         * @property {string} NickName Http_BJL_UserInfo NickName
         * @property {number|Long} GameScore Http_BJL_UserInfo GameScore
         * @property {number|Long} InitMoney Http_BJL_UserInfo InitMoney
         * @property {number|Long} CurrentMoney Http_BJL_UserInfo CurrentMoney
         * @property {number|Long} BetInfoZhuang Http_BJL_UserInfo BetInfoZhuang
         * @property {number|Long} BetInfoZhuangDZ Http_BJL_UserInfo BetInfoZhuangDZ
         * @property {number|Long} BetInfoZhuangTW Http_BJL_UserInfo BetInfoZhuangTW
         * @property {number|Long} BetInfoZhuangSZ Http_BJL_UserInfo BetInfoZhuangSZ
         * @property {number|Long} BetInfoXian Http_BJL_UserInfo BetInfoXian
         * @property {number|Long} BetInfoXianDZ Http_BJL_UserInfo BetInfoXianDZ
         * @property {number|Long} BetInfoXianTW Http_BJL_UserInfo BetInfoXianTW
         * @property {number|Long} BetInfoXianSZ Http_BJL_UserInfo BetInfoXianSZ
         * @property {number|Long} BetInfoHe Http_BJL_UserInfo BetInfoHe
         * @property {number|Long} BetInfoHeTD Http_BJL_UserInfo BetInfoHeTD
         * @property {number|Long} SumCharge Http_BJL_UserInfo SumCharge
         * @property {number|Long} SumConvert Http_BJL_UserInfo SumConvert
         * @property {number|Long} WinRate Http_BJL_UserInfo WinRate
         * @property {number|Long} BetTotal Http_BJL_UserInfo BetTotal
         * @property {boolean} IsVIP Http_BJL_UserInfo IsVIP
         */

        /**
         * Constructs a new Http_BJL_UserInfo.
         * @memberof GameMsg_BJL
         * @classdesc Represents a Http_BJL_UserInfo.
         * @implements IHttp_BJL_UserInfo
         * @constructor
         * @param {GameMsg_BJL.IHttp_BJL_UserInfo=} [properties] Properties to set
         */
        function Http_BJL_UserInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Http_BJL_UserInfo UserID.
         * @member {number} UserID
         * @memberof GameMsg_BJL.Http_BJL_UserInfo
         * @instance
         */
        Http_BJL_UserInfo.prototype.UserID = 0;

        /**
         * Http_BJL_UserInfo UserType.
         * @member {number} UserType
         * @memberof GameMsg_BJL.Http_BJL_UserInfo
         * @instance
         */
        Http_BJL_UserInfo.prototype.UserType = 0;

        /**
         * Http_BJL_UserInfo NickName.
         * @member {string} NickName
         * @memberof GameMsg_BJL.Http_BJL_UserInfo
         * @instance
         */
        Http_BJL_UserInfo.prototype.NickName = "";

        /**
         * Http_BJL_UserInfo GameScore.
         * @member {number|Long} GameScore
         * @memberof GameMsg_BJL.Http_BJL_UserInfo
         * @instance
         */
        Http_BJL_UserInfo.prototype.GameScore = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Http_BJL_UserInfo InitMoney.
         * @member {number|Long} InitMoney
         * @memberof GameMsg_BJL.Http_BJL_UserInfo
         * @instance
         */
        Http_BJL_UserInfo.prototype.InitMoney = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Http_BJL_UserInfo CurrentMoney.
         * @member {number|Long} CurrentMoney
         * @memberof GameMsg_BJL.Http_BJL_UserInfo
         * @instance
         */
        Http_BJL_UserInfo.prototype.CurrentMoney = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Http_BJL_UserInfo BetInfoZhuang.
         * @member {number|Long} BetInfoZhuang
         * @memberof GameMsg_BJL.Http_BJL_UserInfo
         * @instance
         */
        Http_BJL_UserInfo.prototype.BetInfoZhuang = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Http_BJL_UserInfo BetInfoZhuangDZ.
         * @member {number|Long} BetInfoZhuangDZ
         * @memberof GameMsg_BJL.Http_BJL_UserInfo
         * @instance
         */
        Http_BJL_UserInfo.prototype.BetInfoZhuangDZ = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Http_BJL_UserInfo BetInfoZhuangTW.
         * @member {number|Long} BetInfoZhuangTW
         * @memberof GameMsg_BJL.Http_BJL_UserInfo
         * @instance
         */
        Http_BJL_UserInfo.prototype.BetInfoZhuangTW = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Http_BJL_UserInfo BetInfoZhuangSZ.
         * @member {number|Long} BetInfoZhuangSZ
         * @memberof GameMsg_BJL.Http_BJL_UserInfo
         * @instance
         */
        Http_BJL_UserInfo.prototype.BetInfoZhuangSZ = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Http_BJL_UserInfo BetInfoXian.
         * @member {number|Long} BetInfoXian
         * @memberof GameMsg_BJL.Http_BJL_UserInfo
         * @instance
         */
        Http_BJL_UserInfo.prototype.BetInfoXian = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Http_BJL_UserInfo BetInfoXianDZ.
         * @member {number|Long} BetInfoXianDZ
         * @memberof GameMsg_BJL.Http_BJL_UserInfo
         * @instance
         */
        Http_BJL_UserInfo.prototype.BetInfoXianDZ = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Http_BJL_UserInfo BetInfoXianTW.
         * @member {number|Long} BetInfoXianTW
         * @memberof GameMsg_BJL.Http_BJL_UserInfo
         * @instance
         */
        Http_BJL_UserInfo.prototype.BetInfoXianTW = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Http_BJL_UserInfo BetInfoXianSZ.
         * @member {number|Long} BetInfoXianSZ
         * @memberof GameMsg_BJL.Http_BJL_UserInfo
         * @instance
         */
        Http_BJL_UserInfo.prototype.BetInfoXianSZ = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Http_BJL_UserInfo BetInfoHe.
         * @member {number|Long} BetInfoHe
         * @memberof GameMsg_BJL.Http_BJL_UserInfo
         * @instance
         */
        Http_BJL_UserInfo.prototype.BetInfoHe = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Http_BJL_UserInfo BetInfoHeTD.
         * @member {number|Long} BetInfoHeTD
         * @memberof GameMsg_BJL.Http_BJL_UserInfo
         * @instance
         */
        Http_BJL_UserInfo.prototype.BetInfoHeTD = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Http_BJL_UserInfo SumCharge.
         * @member {number|Long} SumCharge
         * @memberof GameMsg_BJL.Http_BJL_UserInfo
         * @instance
         */
        Http_BJL_UserInfo.prototype.SumCharge = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Http_BJL_UserInfo SumConvert.
         * @member {number|Long} SumConvert
         * @memberof GameMsg_BJL.Http_BJL_UserInfo
         * @instance
         */
        Http_BJL_UserInfo.prototype.SumConvert = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Http_BJL_UserInfo WinRate.
         * @member {number|Long} WinRate
         * @memberof GameMsg_BJL.Http_BJL_UserInfo
         * @instance
         */
        Http_BJL_UserInfo.prototype.WinRate = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Http_BJL_UserInfo BetTotal.
         * @member {number|Long} BetTotal
         * @memberof GameMsg_BJL.Http_BJL_UserInfo
         * @instance
         */
        Http_BJL_UserInfo.prototype.BetTotal = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Http_BJL_UserInfo IsVIP.
         * @member {boolean} IsVIP
         * @memberof GameMsg_BJL.Http_BJL_UserInfo
         * @instance
         */
        Http_BJL_UserInfo.prototype.IsVIP = false;

        /**
         * Creates a new Http_BJL_UserInfo instance using the specified properties.
         * @function create
         * @memberof GameMsg_BJL.Http_BJL_UserInfo
         * @static
         * @param {GameMsg_BJL.IHttp_BJL_UserInfo=} [properties] Properties to set
         * @returns {GameMsg_BJL.Http_BJL_UserInfo} Http_BJL_UserInfo instance
         */
        Http_BJL_UserInfo.create = function create(properties) {
            return new Http_BJL_UserInfo(properties);
        };

        /**
         * Encodes the specified Http_BJL_UserInfo message. Does not implicitly {@link GameMsg_BJL.Http_BJL_UserInfo.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_BJL.Http_BJL_UserInfo
         * @static
         * @param {GameMsg_BJL.IHttp_BJL_UserInfo} message Http_BJL_UserInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Http_BJL_UserInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.UserID);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.UserType);
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.NickName);
            writer.uint32(/* id 4, wireType 0 =*/32).int64(message.GameScore);
            writer.uint32(/* id 5, wireType 0 =*/40).int64(message.InitMoney);
            writer.uint32(/* id 6, wireType 0 =*/48).int64(message.CurrentMoney);
            writer.uint32(/* id 7, wireType 0 =*/56).int64(message.BetInfoZhuang);
            writer.uint32(/* id 8, wireType 0 =*/64).int64(message.BetInfoZhuangDZ);
            writer.uint32(/* id 9, wireType 0 =*/72).int64(message.BetInfoZhuangTW);
            writer.uint32(/* id 10, wireType 0 =*/80).int64(message.BetInfoZhuangSZ);
            writer.uint32(/* id 11, wireType 0 =*/88).int64(message.BetInfoXian);
            writer.uint32(/* id 12, wireType 0 =*/96).int64(message.BetInfoXianDZ);
            writer.uint32(/* id 13, wireType 0 =*/104).int64(message.BetInfoXianTW);
            writer.uint32(/* id 14, wireType 0 =*/112).int64(message.BetInfoXianSZ);
            writer.uint32(/* id 15, wireType 0 =*/120).int64(message.BetInfoHe);
            writer.uint32(/* id 16, wireType 0 =*/128).int64(message.BetInfoHeTD);
            writer.uint32(/* id 17, wireType 0 =*/136).int64(message.SumCharge);
            writer.uint32(/* id 18, wireType 0 =*/144).int64(message.SumConvert);
            writer.uint32(/* id 19, wireType 0 =*/152).int64(message.WinRate);
            writer.uint32(/* id 20, wireType 0 =*/160).int64(message.BetTotal);
            writer.uint32(/* id 21, wireType 0 =*/168).bool(message.IsVIP);
            return writer;
        };

        /**
         * Encodes the specified Http_BJL_UserInfo message, length delimited. Does not implicitly {@link GameMsg_BJL.Http_BJL_UserInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_BJL.Http_BJL_UserInfo
         * @static
         * @param {GameMsg_BJL.IHttp_BJL_UserInfo} message Http_BJL_UserInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Http_BJL_UserInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Http_BJL_UserInfo message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_BJL.Http_BJL_UserInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_BJL.Http_BJL_UserInfo} Http_BJL_UserInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Http_BJL_UserInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_BJL.Http_BJL_UserInfo();
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
                    message.BetInfoZhuang = reader.int64();
                    break;
                case 8:
                    message.BetInfoZhuangDZ = reader.int64();
                    break;
                case 9:
                    message.BetInfoZhuangTW = reader.int64();
                    break;
                case 10:
                    message.BetInfoZhuangSZ = reader.int64();
                    break;
                case 11:
                    message.BetInfoXian = reader.int64();
                    break;
                case 12:
                    message.BetInfoXianDZ = reader.int64();
                    break;
                case 13:
                    message.BetInfoXianTW = reader.int64();
                    break;
                case 14:
                    message.BetInfoXianSZ = reader.int64();
                    break;
                case 15:
                    message.BetInfoHe = reader.int64();
                    break;
                case 16:
                    message.BetInfoHeTD = reader.int64();
                    break;
                case 17:
                    message.SumCharge = reader.int64();
                    break;
                case 18:
                    message.SumConvert = reader.int64();
                    break;
                case 19:
                    message.WinRate = reader.int64();
                    break;
                case 20:
                    message.BetTotal = reader.int64();
                    break;
                case 21:
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
            if (!message.hasOwnProperty("BetInfoZhuang"))
                throw $util.ProtocolError("missing required 'BetInfoZhuang'", { instance: message });
            if (!message.hasOwnProperty("BetInfoZhuangDZ"))
                throw $util.ProtocolError("missing required 'BetInfoZhuangDZ'", { instance: message });
            if (!message.hasOwnProperty("BetInfoZhuangTW"))
                throw $util.ProtocolError("missing required 'BetInfoZhuangTW'", { instance: message });
            if (!message.hasOwnProperty("BetInfoZhuangSZ"))
                throw $util.ProtocolError("missing required 'BetInfoZhuangSZ'", { instance: message });
            if (!message.hasOwnProperty("BetInfoXian"))
                throw $util.ProtocolError("missing required 'BetInfoXian'", { instance: message });
            if (!message.hasOwnProperty("BetInfoXianDZ"))
                throw $util.ProtocolError("missing required 'BetInfoXianDZ'", { instance: message });
            if (!message.hasOwnProperty("BetInfoXianTW"))
                throw $util.ProtocolError("missing required 'BetInfoXianTW'", { instance: message });
            if (!message.hasOwnProperty("BetInfoXianSZ"))
                throw $util.ProtocolError("missing required 'BetInfoXianSZ'", { instance: message });
            if (!message.hasOwnProperty("BetInfoHe"))
                throw $util.ProtocolError("missing required 'BetInfoHe'", { instance: message });
            if (!message.hasOwnProperty("BetInfoHeTD"))
                throw $util.ProtocolError("missing required 'BetInfoHeTD'", { instance: message });
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
         * Decodes a Http_BJL_UserInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_BJL.Http_BJL_UserInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_BJL.Http_BJL_UserInfo} Http_BJL_UserInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Http_BJL_UserInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Http_BJL_UserInfo message.
         * @function verify
         * @memberof GameMsg_BJL.Http_BJL_UserInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Http_BJL_UserInfo.verify = function verify(message) {
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
            if (!$util.isInteger(message.BetInfoZhuang) && !(message.BetInfoZhuang && $util.isInteger(message.BetInfoZhuang.low) && $util.isInteger(message.BetInfoZhuang.high)))
                return "BetInfoZhuang: integer|Long expected";
            if (!$util.isInteger(message.BetInfoZhuangDZ) && !(message.BetInfoZhuangDZ && $util.isInteger(message.BetInfoZhuangDZ.low) && $util.isInteger(message.BetInfoZhuangDZ.high)))
                return "BetInfoZhuangDZ: integer|Long expected";
            if (!$util.isInteger(message.BetInfoZhuangTW) && !(message.BetInfoZhuangTW && $util.isInteger(message.BetInfoZhuangTW.low) && $util.isInteger(message.BetInfoZhuangTW.high)))
                return "BetInfoZhuangTW: integer|Long expected";
            if (!$util.isInteger(message.BetInfoZhuangSZ) && !(message.BetInfoZhuangSZ && $util.isInteger(message.BetInfoZhuangSZ.low) && $util.isInteger(message.BetInfoZhuangSZ.high)))
                return "BetInfoZhuangSZ: integer|Long expected";
            if (!$util.isInteger(message.BetInfoXian) && !(message.BetInfoXian && $util.isInteger(message.BetInfoXian.low) && $util.isInteger(message.BetInfoXian.high)))
                return "BetInfoXian: integer|Long expected";
            if (!$util.isInteger(message.BetInfoXianDZ) && !(message.BetInfoXianDZ && $util.isInteger(message.BetInfoXianDZ.low) && $util.isInteger(message.BetInfoXianDZ.high)))
                return "BetInfoXianDZ: integer|Long expected";
            if (!$util.isInteger(message.BetInfoXianTW) && !(message.BetInfoXianTW && $util.isInteger(message.BetInfoXianTW.low) && $util.isInteger(message.BetInfoXianTW.high)))
                return "BetInfoXianTW: integer|Long expected";
            if (!$util.isInteger(message.BetInfoXianSZ) && !(message.BetInfoXianSZ && $util.isInteger(message.BetInfoXianSZ.low) && $util.isInteger(message.BetInfoXianSZ.high)))
                return "BetInfoXianSZ: integer|Long expected";
            if (!$util.isInteger(message.BetInfoHe) && !(message.BetInfoHe && $util.isInteger(message.BetInfoHe.low) && $util.isInteger(message.BetInfoHe.high)))
                return "BetInfoHe: integer|Long expected";
            if (!$util.isInteger(message.BetInfoHeTD) && !(message.BetInfoHeTD && $util.isInteger(message.BetInfoHeTD.low) && $util.isInteger(message.BetInfoHeTD.high)))
                return "BetInfoHeTD: integer|Long expected";
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
         * Creates a Http_BJL_UserInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_BJL.Http_BJL_UserInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_BJL.Http_BJL_UserInfo} Http_BJL_UserInfo
         */
        Http_BJL_UserInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_BJL.Http_BJL_UserInfo)
                return object;
            var message = new $root.GameMsg_BJL.Http_BJL_UserInfo();
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
            if (object.BetInfoZhuang != null)
                if ($util.Long)
                    (message.BetInfoZhuang = $util.Long.fromValue(object.BetInfoZhuang)).unsigned = false;
                else if (typeof object.BetInfoZhuang === "string")
                    message.BetInfoZhuang = parseInt(object.BetInfoZhuang, 10);
                else if (typeof object.BetInfoZhuang === "number")
                    message.BetInfoZhuang = object.BetInfoZhuang;
                else if (typeof object.BetInfoZhuang === "object")
                    message.BetInfoZhuang = new $util.LongBits(object.BetInfoZhuang.low >>> 0, object.BetInfoZhuang.high >>> 0).toNumber();
            if (object.BetInfoZhuangDZ != null)
                if ($util.Long)
                    (message.BetInfoZhuangDZ = $util.Long.fromValue(object.BetInfoZhuangDZ)).unsigned = false;
                else if (typeof object.BetInfoZhuangDZ === "string")
                    message.BetInfoZhuangDZ = parseInt(object.BetInfoZhuangDZ, 10);
                else if (typeof object.BetInfoZhuangDZ === "number")
                    message.BetInfoZhuangDZ = object.BetInfoZhuangDZ;
                else if (typeof object.BetInfoZhuangDZ === "object")
                    message.BetInfoZhuangDZ = new $util.LongBits(object.BetInfoZhuangDZ.low >>> 0, object.BetInfoZhuangDZ.high >>> 0).toNumber();
            if (object.BetInfoZhuangTW != null)
                if ($util.Long)
                    (message.BetInfoZhuangTW = $util.Long.fromValue(object.BetInfoZhuangTW)).unsigned = false;
                else if (typeof object.BetInfoZhuangTW === "string")
                    message.BetInfoZhuangTW = parseInt(object.BetInfoZhuangTW, 10);
                else if (typeof object.BetInfoZhuangTW === "number")
                    message.BetInfoZhuangTW = object.BetInfoZhuangTW;
                else if (typeof object.BetInfoZhuangTW === "object")
                    message.BetInfoZhuangTW = new $util.LongBits(object.BetInfoZhuangTW.low >>> 0, object.BetInfoZhuangTW.high >>> 0).toNumber();
            if (object.BetInfoZhuangSZ != null)
                if ($util.Long)
                    (message.BetInfoZhuangSZ = $util.Long.fromValue(object.BetInfoZhuangSZ)).unsigned = false;
                else if (typeof object.BetInfoZhuangSZ === "string")
                    message.BetInfoZhuangSZ = parseInt(object.BetInfoZhuangSZ, 10);
                else if (typeof object.BetInfoZhuangSZ === "number")
                    message.BetInfoZhuangSZ = object.BetInfoZhuangSZ;
                else if (typeof object.BetInfoZhuangSZ === "object")
                    message.BetInfoZhuangSZ = new $util.LongBits(object.BetInfoZhuangSZ.low >>> 0, object.BetInfoZhuangSZ.high >>> 0).toNumber();
            if (object.BetInfoXian != null)
                if ($util.Long)
                    (message.BetInfoXian = $util.Long.fromValue(object.BetInfoXian)).unsigned = false;
                else if (typeof object.BetInfoXian === "string")
                    message.BetInfoXian = parseInt(object.BetInfoXian, 10);
                else if (typeof object.BetInfoXian === "number")
                    message.BetInfoXian = object.BetInfoXian;
                else if (typeof object.BetInfoXian === "object")
                    message.BetInfoXian = new $util.LongBits(object.BetInfoXian.low >>> 0, object.BetInfoXian.high >>> 0).toNumber();
            if (object.BetInfoXianDZ != null)
                if ($util.Long)
                    (message.BetInfoXianDZ = $util.Long.fromValue(object.BetInfoXianDZ)).unsigned = false;
                else if (typeof object.BetInfoXianDZ === "string")
                    message.BetInfoXianDZ = parseInt(object.BetInfoXianDZ, 10);
                else if (typeof object.BetInfoXianDZ === "number")
                    message.BetInfoXianDZ = object.BetInfoXianDZ;
                else if (typeof object.BetInfoXianDZ === "object")
                    message.BetInfoXianDZ = new $util.LongBits(object.BetInfoXianDZ.low >>> 0, object.BetInfoXianDZ.high >>> 0).toNumber();
            if (object.BetInfoXianTW != null)
                if ($util.Long)
                    (message.BetInfoXianTW = $util.Long.fromValue(object.BetInfoXianTW)).unsigned = false;
                else if (typeof object.BetInfoXianTW === "string")
                    message.BetInfoXianTW = parseInt(object.BetInfoXianTW, 10);
                else if (typeof object.BetInfoXianTW === "number")
                    message.BetInfoXianTW = object.BetInfoXianTW;
                else if (typeof object.BetInfoXianTW === "object")
                    message.BetInfoXianTW = new $util.LongBits(object.BetInfoXianTW.low >>> 0, object.BetInfoXianTW.high >>> 0).toNumber();
            if (object.BetInfoXianSZ != null)
                if ($util.Long)
                    (message.BetInfoXianSZ = $util.Long.fromValue(object.BetInfoXianSZ)).unsigned = false;
                else if (typeof object.BetInfoXianSZ === "string")
                    message.BetInfoXianSZ = parseInt(object.BetInfoXianSZ, 10);
                else if (typeof object.BetInfoXianSZ === "number")
                    message.BetInfoXianSZ = object.BetInfoXianSZ;
                else if (typeof object.BetInfoXianSZ === "object")
                    message.BetInfoXianSZ = new $util.LongBits(object.BetInfoXianSZ.low >>> 0, object.BetInfoXianSZ.high >>> 0).toNumber();
            if (object.BetInfoHe != null)
                if ($util.Long)
                    (message.BetInfoHe = $util.Long.fromValue(object.BetInfoHe)).unsigned = false;
                else if (typeof object.BetInfoHe === "string")
                    message.BetInfoHe = parseInt(object.BetInfoHe, 10);
                else if (typeof object.BetInfoHe === "number")
                    message.BetInfoHe = object.BetInfoHe;
                else if (typeof object.BetInfoHe === "object")
                    message.BetInfoHe = new $util.LongBits(object.BetInfoHe.low >>> 0, object.BetInfoHe.high >>> 0).toNumber();
            if (object.BetInfoHeTD != null)
                if ($util.Long)
                    (message.BetInfoHeTD = $util.Long.fromValue(object.BetInfoHeTD)).unsigned = false;
                else if (typeof object.BetInfoHeTD === "string")
                    message.BetInfoHeTD = parseInt(object.BetInfoHeTD, 10);
                else if (typeof object.BetInfoHeTD === "number")
                    message.BetInfoHeTD = object.BetInfoHeTD;
                else if (typeof object.BetInfoHeTD === "object")
                    message.BetInfoHeTD = new $util.LongBits(object.BetInfoHeTD.low >>> 0, object.BetInfoHeTD.high >>> 0).toNumber();
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
         * Creates a plain object from a Http_BJL_UserInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_BJL.Http_BJL_UserInfo
         * @static
         * @param {GameMsg_BJL.Http_BJL_UserInfo} message Http_BJL_UserInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Http_BJL_UserInfo.toObject = function toObject(message, options) {
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
                    object.BetInfoZhuang = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.BetInfoZhuang = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.BetInfoZhuangDZ = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.BetInfoZhuangDZ = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.BetInfoZhuangTW = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.BetInfoZhuangTW = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.BetInfoZhuangSZ = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.BetInfoZhuangSZ = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.BetInfoXian = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.BetInfoXian = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.BetInfoXianDZ = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.BetInfoXianDZ = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.BetInfoXianTW = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.BetInfoXianTW = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.BetInfoXianSZ = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.BetInfoXianSZ = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.BetInfoHe = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.BetInfoHe = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.BetInfoHeTD = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.BetInfoHeTD = options.longs === String ? "0" : 0;
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
            if (message.BetInfoZhuang != null && message.hasOwnProperty("BetInfoZhuang"))
                if (typeof message.BetInfoZhuang === "number")
                    object.BetInfoZhuang = options.longs === String ? String(message.BetInfoZhuang) : message.BetInfoZhuang;
                else
                    object.BetInfoZhuang = options.longs === String ? $util.Long.prototype.toString.call(message.BetInfoZhuang) : options.longs === Number ? new $util.LongBits(message.BetInfoZhuang.low >>> 0, message.BetInfoZhuang.high >>> 0).toNumber() : message.BetInfoZhuang;
            if (message.BetInfoZhuangDZ != null && message.hasOwnProperty("BetInfoZhuangDZ"))
                if (typeof message.BetInfoZhuangDZ === "number")
                    object.BetInfoZhuangDZ = options.longs === String ? String(message.BetInfoZhuangDZ) : message.BetInfoZhuangDZ;
                else
                    object.BetInfoZhuangDZ = options.longs === String ? $util.Long.prototype.toString.call(message.BetInfoZhuangDZ) : options.longs === Number ? new $util.LongBits(message.BetInfoZhuangDZ.low >>> 0, message.BetInfoZhuangDZ.high >>> 0).toNumber() : message.BetInfoZhuangDZ;
            if (message.BetInfoZhuangTW != null && message.hasOwnProperty("BetInfoZhuangTW"))
                if (typeof message.BetInfoZhuangTW === "number")
                    object.BetInfoZhuangTW = options.longs === String ? String(message.BetInfoZhuangTW) : message.BetInfoZhuangTW;
                else
                    object.BetInfoZhuangTW = options.longs === String ? $util.Long.prototype.toString.call(message.BetInfoZhuangTW) : options.longs === Number ? new $util.LongBits(message.BetInfoZhuangTW.low >>> 0, message.BetInfoZhuangTW.high >>> 0).toNumber() : message.BetInfoZhuangTW;
            if (message.BetInfoZhuangSZ != null && message.hasOwnProperty("BetInfoZhuangSZ"))
                if (typeof message.BetInfoZhuangSZ === "number")
                    object.BetInfoZhuangSZ = options.longs === String ? String(message.BetInfoZhuangSZ) : message.BetInfoZhuangSZ;
                else
                    object.BetInfoZhuangSZ = options.longs === String ? $util.Long.prototype.toString.call(message.BetInfoZhuangSZ) : options.longs === Number ? new $util.LongBits(message.BetInfoZhuangSZ.low >>> 0, message.BetInfoZhuangSZ.high >>> 0).toNumber() : message.BetInfoZhuangSZ;
            if (message.BetInfoXian != null && message.hasOwnProperty("BetInfoXian"))
                if (typeof message.BetInfoXian === "number")
                    object.BetInfoXian = options.longs === String ? String(message.BetInfoXian) : message.BetInfoXian;
                else
                    object.BetInfoXian = options.longs === String ? $util.Long.prototype.toString.call(message.BetInfoXian) : options.longs === Number ? new $util.LongBits(message.BetInfoXian.low >>> 0, message.BetInfoXian.high >>> 0).toNumber() : message.BetInfoXian;
            if (message.BetInfoXianDZ != null && message.hasOwnProperty("BetInfoXianDZ"))
                if (typeof message.BetInfoXianDZ === "number")
                    object.BetInfoXianDZ = options.longs === String ? String(message.BetInfoXianDZ) : message.BetInfoXianDZ;
                else
                    object.BetInfoXianDZ = options.longs === String ? $util.Long.prototype.toString.call(message.BetInfoXianDZ) : options.longs === Number ? new $util.LongBits(message.BetInfoXianDZ.low >>> 0, message.BetInfoXianDZ.high >>> 0).toNumber() : message.BetInfoXianDZ;
            if (message.BetInfoXianTW != null && message.hasOwnProperty("BetInfoXianTW"))
                if (typeof message.BetInfoXianTW === "number")
                    object.BetInfoXianTW = options.longs === String ? String(message.BetInfoXianTW) : message.BetInfoXianTW;
                else
                    object.BetInfoXianTW = options.longs === String ? $util.Long.prototype.toString.call(message.BetInfoXianTW) : options.longs === Number ? new $util.LongBits(message.BetInfoXianTW.low >>> 0, message.BetInfoXianTW.high >>> 0).toNumber() : message.BetInfoXianTW;
            if (message.BetInfoXianSZ != null && message.hasOwnProperty("BetInfoXianSZ"))
                if (typeof message.BetInfoXianSZ === "number")
                    object.BetInfoXianSZ = options.longs === String ? String(message.BetInfoXianSZ) : message.BetInfoXianSZ;
                else
                    object.BetInfoXianSZ = options.longs === String ? $util.Long.prototype.toString.call(message.BetInfoXianSZ) : options.longs === Number ? new $util.LongBits(message.BetInfoXianSZ.low >>> 0, message.BetInfoXianSZ.high >>> 0).toNumber() : message.BetInfoXianSZ;
            if (message.BetInfoHe != null && message.hasOwnProperty("BetInfoHe"))
                if (typeof message.BetInfoHe === "number")
                    object.BetInfoHe = options.longs === String ? String(message.BetInfoHe) : message.BetInfoHe;
                else
                    object.BetInfoHe = options.longs === String ? $util.Long.prototype.toString.call(message.BetInfoHe) : options.longs === Number ? new $util.LongBits(message.BetInfoHe.low >>> 0, message.BetInfoHe.high >>> 0).toNumber() : message.BetInfoHe;
            if (message.BetInfoHeTD != null && message.hasOwnProperty("BetInfoHeTD"))
                if (typeof message.BetInfoHeTD === "number")
                    object.BetInfoHeTD = options.longs === String ? String(message.BetInfoHeTD) : message.BetInfoHeTD;
                else
                    object.BetInfoHeTD = options.longs === String ? $util.Long.prototype.toString.call(message.BetInfoHeTD) : options.longs === Number ? new $util.LongBits(message.BetInfoHeTD.low >>> 0, message.BetInfoHeTD.high >>> 0).toNumber() : message.BetInfoHeTD;
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
         * Converts this Http_BJL_UserInfo to JSON.
         * @function toJSON
         * @memberof GameMsg_BJL.Http_BJL_UserInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Http_BJL_UserInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Http_BJL_UserInfo;
    })();

    GameMsg_BJL.BJL_ResultCardList = (function() {

        /**
         * Properties of a BJL_ResultCardList.
         * @memberof GameMsg_BJL
         * @interface IBJL_ResultCardList
         * @property {Array.<GameMsg_BJL.IBJL_GameResultPoker>|null} [CardList] BJL_ResultCardList CardList
         */

        /**
         * Constructs a new BJL_ResultCardList.
         * @memberof GameMsg_BJL
         * @classdesc Represents a BJL_ResultCardList.
         * @implements IBJL_ResultCardList
         * @constructor
         * @param {GameMsg_BJL.IBJL_ResultCardList=} [properties] Properties to set
         */
        function BJL_ResultCardList(properties) {
            this.CardList = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BJL_ResultCardList CardList.
         * @member {Array.<GameMsg_BJL.IBJL_GameResultPoker>} CardList
         * @memberof GameMsg_BJL.BJL_ResultCardList
         * @instance
         */
        BJL_ResultCardList.prototype.CardList = $util.emptyArray;

        /**
         * Creates a new BJL_ResultCardList instance using the specified properties.
         * @function create
         * @memberof GameMsg_BJL.BJL_ResultCardList
         * @static
         * @param {GameMsg_BJL.IBJL_ResultCardList=} [properties] Properties to set
         * @returns {GameMsg_BJL.BJL_ResultCardList} BJL_ResultCardList instance
         */
        BJL_ResultCardList.create = function create(properties) {
            return new BJL_ResultCardList(properties);
        };

        /**
         * Encodes the specified BJL_ResultCardList message. Does not implicitly {@link GameMsg_BJL.BJL_ResultCardList.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_BJL.BJL_ResultCardList
         * @static
         * @param {GameMsg_BJL.IBJL_ResultCardList} message BJL_ResultCardList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BJL_ResultCardList.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.CardList != null && message.CardList.length)
                for (var i = 0; i < message.CardList.length; ++i)
                    $root.GameMsg_BJL.BJL_GameResultPoker.encode(message.CardList[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified BJL_ResultCardList message, length delimited. Does not implicitly {@link GameMsg_BJL.BJL_ResultCardList.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_BJL.BJL_ResultCardList
         * @static
         * @param {GameMsg_BJL.IBJL_ResultCardList} message BJL_ResultCardList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BJL_ResultCardList.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BJL_ResultCardList message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_BJL.BJL_ResultCardList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_BJL.BJL_ResultCardList} BJL_ResultCardList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BJL_ResultCardList.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_BJL.BJL_ResultCardList();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.CardList && message.CardList.length))
                        message.CardList = [];
                    message.CardList.push($root.GameMsg_BJL.BJL_GameResultPoker.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a BJL_ResultCardList message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_BJL.BJL_ResultCardList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_BJL.BJL_ResultCardList} BJL_ResultCardList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BJL_ResultCardList.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BJL_ResultCardList message.
         * @function verify
         * @memberof GameMsg_BJL.BJL_ResultCardList
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BJL_ResultCardList.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.CardList != null && message.hasOwnProperty("CardList")) {
                if (!Array.isArray(message.CardList))
                    return "CardList: array expected";
                for (var i = 0; i < message.CardList.length; ++i) {
                    var error = $root.GameMsg_BJL.BJL_GameResultPoker.verify(message.CardList[i]);
                    if (error)
                        return "CardList." + error;
                }
            }
            return null;
        };

        /**
         * Creates a BJL_ResultCardList message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_BJL.BJL_ResultCardList
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_BJL.BJL_ResultCardList} BJL_ResultCardList
         */
        BJL_ResultCardList.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_BJL.BJL_ResultCardList)
                return object;
            var message = new $root.GameMsg_BJL.BJL_ResultCardList();
            if (object.CardList) {
                if (!Array.isArray(object.CardList))
                    throw TypeError(".GameMsg_BJL.BJL_ResultCardList.CardList: array expected");
                message.CardList = [];
                for (var i = 0; i < object.CardList.length; ++i) {
                    if (typeof object.CardList[i] !== "object")
                        throw TypeError(".GameMsg_BJL.BJL_ResultCardList.CardList: object expected");
                    message.CardList[i] = $root.GameMsg_BJL.BJL_GameResultPoker.fromObject(object.CardList[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a BJL_ResultCardList message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_BJL.BJL_ResultCardList
         * @static
         * @param {GameMsg_BJL.BJL_ResultCardList} message BJL_ResultCardList
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BJL_ResultCardList.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.CardList = [];
            if (message.CardList && message.CardList.length) {
                object.CardList = [];
                for (var j = 0; j < message.CardList.length; ++j)
                    object.CardList[j] = $root.GameMsg_BJL.BJL_GameResultPoker.toObject(message.CardList[j], options);
            }
            return object;
        };

        /**
         * Converts this BJL_ResultCardList to JSON.
         * @function toJSON
         * @memberof GameMsg_BJL.BJL_ResultCardList
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BJL_ResultCardList.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BJL_ResultCardList;
    })();

    GameMsg_BJL.BJL_GameResultPoker = (function() {

        /**
         * Properties of a BJL_GameResultPoker.
         * @memberof GameMsg_BJL
         * @interface IBJL_GameResultPoker
         * @property {Array.<GameMsg_BJL.IBJL_Poker>|null} [ZhuangPoker] BJL_GameResultPoker ZhuangPoker
         * @property {Array.<GameMsg_BJL.IBJL_Poker>|null} [XianPoker] BJL_GameResultPoker XianPoker
         * @property {number} ZuHe BJL_GameResultPoker ZuHe
         * @property {number} RoundID BJL_GameResultPoker RoundID
         */

        /**
         * Constructs a new BJL_GameResultPoker.
         * @memberof GameMsg_BJL
         * @classdesc Represents a BJL_GameResultPoker.
         * @implements IBJL_GameResultPoker
         * @constructor
         * @param {GameMsg_BJL.IBJL_GameResultPoker=} [properties] Properties to set
         */
        function BJL_GameResultPoker(properties) {
            this.ZhuangPoker = [];
            this.XianPoker = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BJL_GameResultPoker ZhuangPoker.
         * @member {Array.<GameMsg_BJL.IBJL_Poker>} ZhuangPoker
         * @memberof GameMsg_BJL.BJL_GameResultPoker
         * @instance
         */
        BJL_GameResultPoker.prototype.ZhuangPoker = $util.emptyArray;

        /**
         * BJL_GameResultPoker XianPoker.
         * @member {Array.<GameMsg_BJL.IBJL_Poker>} XianPoker
         * @memberof GameMsg_BJL.BJL_GameResultPoker
         * @instance
         */
        BJL_GameResultPoker.prototype.XianPoker = $util.emptyArray;

        /**
         * BJL_GameResultPoker ZuHe.
         * @member {number} ZuHe
         * @memberof GameMsg_BJL.BJL_GameResultPoker
         * @instance
         */
        BJL_GameResultPoker.prototype.ZuHe = 0;

        /**
         * BJL_GameResultPoker RoundID.
         * @member {number} RoundID
         * @memberof GameMsg_BJL.BJL_GameResultPoker
         * @instance
         */
        BJL_GameResultPoker.prototype.RoundID = 0;

        /**
         * Creates a new BJL_GameResultPoker instance using the specified properties.
         * @function create
         * @memberof GameMsg_BJL.BJL_GameResultPoker
         * @static
         * @param {GameMsg_BJL.IBJL_GameResultPoker=} [properties] Properties to set
         * @returns {GameMsg_BJL.BJL_GameResultPoker} BJL_GameResultPoker instance
         */
        BJL_GameResultPoker.create = function create(properties) {
            return new BJL_GameResultPoker(properties);
        };

        /**
         * Encodes the specified BJL_GameResultPoker message. Does not implicitly {@link GameMsg_BJL.BJL_GameResultPoker.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_BJL.BJL_GameResultPoker
         * @static
         * @param {GameMsg_BJL.IBJL_GameResultPoker} message BJL_GameResultPoker message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BJL_GameResultPoker.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.ZhuangPoker != null && message.ZhuangPoker.length)
                for (var i = 0; i < message.ZhuangPoker.length; ++i)
                    $root.GameMsg_BJL.BJL_Poker.encode(message.ZhuangPoker[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.XianPoker != null && message.XianPoker.length)
                for (var i = 0; i < message.XianPoker.length; ++i)
                    $root.GameMsg_BJL.BJL_Poker.encode(message.XianPoker[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.ZuHe);
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.RoundID);
            return writer;
        };

        /**
         * Encodes the specified BJL_GameResultPoker message, length delimited. Does not implicitly {@link GameMsg_BJL.BJL_GameResultPoker.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_BJL.BJL_GameResultPoker
         * @static
         * @param {GameMsg_BJL.IBJL_GameResultPoker} message BJL_GameResultPoker message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BJL_GameResultPoker.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BJL_GameResultPoker message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_BJL.BJL_GameResultPoker
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_BJL.BJL_GameResultPoker} BJL_GameResultPoker
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BJL_GameResultPoker.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_BJL.BJL_GameResultPoker();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.ZhuangPoker && message.ZhuangPoker.length))
                        message.ZhuangPoker = [];
                    message.ZhuangPoker.push($root.GameMsg_BJL.BJL_Poker.decode(reader, reader.uint32()));
                    break;
                case 2:
                    if (!(message.XianPoker && message.XianPoker.length))
                        message.XianPoker = [];
                    message.XianPoker.push($root.GameMsg_BJL.BJL_Poker.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.ZuHe = reader.uint32();
                    break;
                case 4:
                    message.RoundID = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("ZuHe"))
                throw $util.ProtocolError("missing required 'ZuHe'", { instance: message });
            if (!message.hasOwnProperty("RoundID"))
                throw $util.ProtocolError("missing required 'RoundID'", { instance: message });
            return message;
        };

        /**
         * Decodes a BJL_GameResultPoker message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_BJL.BJL_GameResultPoker
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_BJL.BJL_GameResultPoker} BJL_GameResultPoker
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BJL_GameResultPoker.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BJL_GameResultPoker message.
         * @function verify
         * @memberof GameMsg_BJL.BJL_GameResultPoker
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BJL_GameResultPoker.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.ZhuangPoker != null && message.hasOwnProperty("ZhuangPoker")) {
                if (!Array.isArray(message.ZhuangPoker))
                    return "ZhuangPoker: array expected";
                for (var i = 0; i < message.ZhuangPoker.length; ++i) {
                    var error = $root.GameMsg_BJL.BJL_Poker.verify(message.ZhuangPoker[i]);
                    if (error)
                        return "ZhuangPoker." + error;
                }
            }
            if (message.XianPoker != null && message.hasOwnProperty("XianPoker")) {
                if (!Array.isArray(message.XianPoker))
                    return "XianPoker: array expected";
                for (var i = 0; i < message.XianPoker.length; ++i) {
                    var error = $root.GameMsg_BJL.BJL_Poker.verify(message.XianPoker[i]);
                    if (error)
                        return "XianPoker." + error;
                }
            }
            if (!$util.isInteger(message.ZuHe))
                return "ZuHe: integer expected";
            if (!$util.isInteger(message.RoundID))
                return "RoundID: integer expected";
            return null;
        };

        /**
         * Creates a BJL_GameResultPoker message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_BJL.BJL_GameResultPoker
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_BJL.BJL_GameResultPoker} BJL_GameResultPoker
         */
        BJL_GameResultPoker.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_BJL.BJL_GameResultPoker)
                return object;
            var message = new $root.GameMsg_BJL.BJL_GameResultPoker();
            if (object.ZhuangPoker) {
                if (!Array.isArray(object.ZhuangPoker))
                    throw TypeError(".GameMsg_BJL.BJL_GameResultPoker.ZhuangPoker: array expected");
                message.ZhuangPoker = [];
                for (var i = 0; i < object.ZhuangPoker.length; ++i) {
                    if (typeof object.ZhuangPoker[i] !== "object")
                        throw TypeError(".GameMsg_BJL.BJL_GameResultPoker.ZhuangPoker: object expected");
                    message.ZhuangPoker[i] = $root.GameMsg_BJL.BJL_Poker.fromObject(object.ZhuangPoker[i]);
                }
            }
            if (object.XianPoker) {
                if (!Array.isArray(object.XianPoker))
                    throw TypeError(".GameMsg_BJL.BJL_GameResultPoker.XianPoker: array expected");
                message.XianPoker = [];
                for (var i = 0; i < object.XianPoker.length; ++i) {
                    if (typeof object.XianPoker[i] !== "object")
                        throw TypeError(".GameMsg_BJL.BJL_GameResultPoker.XianPoker: object expected");
                    message.XianPoker[i] = $root.GameMsg_BJL.BJL_Poker.fromObject(object.XianPoker[i]);
                }
            }
            if (object.ZuHe != null)
                message.ZuHe = object.ZuHe >>> 0;
            if (object.RoundID != null)
                message.RoundID = object.RoundID | 0;
            return message;
        };

        /**
         * Creates a plain object from a BJL_GameResultPoker message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_BJL.BJL_GameResultPoker
         * @static
         * @param {GameMsg_BJL.BJL_GameResultPoker} message BJL_GameResultPoker
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BJL_GameResultPoker.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.ZhuangPoker = [];
                object.XianPoker = [];
            }
            if (options.defaults) {
                object.ZuHe = 0;
                object.RoundID = 0;
            }
            if (message.ZhuangPoker && message.ZhuangPoker.length) {
                object.ZhuangPoker = [];
                for (var j = 0; j < message.ZhuangPoker.length; ++j)
                    object.ZhuangPoker[j] = $root.GameMsg_BJL.BJL_Poker.toObject(message.ZhuangPoker[j], options);
            }
            if (message.XianPoker && message.XianPoker.length) {
                object.XianPoker = [];
                for (var j = 0; j < message.XianPoker.length; ++j)
                    object.XianPoker[j] = $root.GameMsg_BJL.BJL_Poker.toObject(message.XianPoker[j], options);
            }
            if (message.ZuHe != null && message.hasOwnProperty("ZuHe"))
                object.ZuHe = message.ZuHe;
            if (message.RoundID != null && message.hasOwnProperty("RoundID"))
                object.RoundID = message.RoundID;
            return object;
        };

        /**
         * Converts this BJL_GameResultPoker to JSON.
         * @function toJSON
         * @memberof GameMsg_BJL.BJL_GameResultPoker
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BJL_GameResultPoker.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BJL_GameResultPoker;
    })();

    GameMsg_BJL.BJL_Poker = (function() {

        /**
         * Properties of a BJL_Poker.
         * @memberof GameMsg_BJL
         * @interface IBJL_Poker
         * @property {number} Color BJL_Poker Color
         * @property {number} Number BJL_Poker Number
         */

        /**
         * Constructs a new BJL_Poker.
         * @memberof GameMsg_BJL
         * @classdesc Represents a BJL_Poker.
         * @implements IBJL_Poker
         * @constructor
         * @param {GameMsg_BJL.IBJL_Poker=} [properties] Properties to set
         */
        function BJL_Poker(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BJL_Poker Color.
         * @member {number} Color
         * @memberof GameMsg_BJL.BJL_Poker
         * @instance
         */
        BJL_Poker.prototype.Color = 0;

        /**
         * BJL_Poker Number.
         * @member {number} Number
         * @memberof GameMsg_BJL.BJL_Poker
         * @instance
         */
        BJL_Poker.prototype.Number = 0;

        /**
         * Creates a new BJL_Poker instance using the specified properties.
         * @function create
         * @memberof GameMsg_BJL.BJL_Poker
         * @static
         * @param {GameMsg_BJL.IBJL_Poker=} [properties] Properties to set
         * @returns {GameMsg_BJL.BJL_Poker} BJL_Poker instance
         */
        BJL_Poker.create = function create(properties) {
            return new BJL_Poker(properties);
        };

        /**
         * Encodes the specified BJL_Poker message. Does not implicitly {@link GameMsg_BJL.BJL_Poker.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_BJL.BJL_Poker
         * @static
         * @param {GameMsg_BJL.IBJL_Poker} message BJL_Poker message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BJL_Poker.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.Color);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.Number);
            return writer;
        };

        /**
         * Encodes the specified BJL_Poker message, length delimited. Does not implicitly {@link GameMsg_BJL.BJL_Poker.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_BJL.BJL_Poker
         * @static
         * @param {GameMsg_BJL.IBJL_Poker} message BJL_Poker message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BJL_Poker.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BJL_Poker message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_BJL.BJL_Poker
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_BJL.BJL_Poker} BJL_Poker
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BJL_Poker.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_BJL.BJL_Poker();
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
         * Decodes a BJL_Poker message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_BJL.BJL_Poker
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_BJL.BJL_Poker} BJL_Poker
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BJL_Poker.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BJL_Poker message.
         * @function verify
         * @memberof GameMsg_BJL.BJL_Poker
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BJL_Poker.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.Color))
                return "Color: integer expected";
            if (!$util.isInteger(message.Number))
                return "Number: integer expected";
            return null;
        };

        /**
         * Creates a BJL_Poker message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_BJL.BJL_Poker
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_BJL.BJL_Poker} BJL_Poker
         */
        BJL_Poker.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_BJL.BJL_Poker)
                return object;
            var message = new $root.GameMsg_BJL.BJL_Poker();
            if (object.Color != null)
                message.Color = object.Color | 0;
            if (object.Number != null)
                message.Number = object.Number | 0;
            return message;
        };

        /**
         * Creates a plain object from a BJL_Poker message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_BJL.BJL_Poker
         * @static
         * @param {GameMsg_BJL.BJL_Poker} message BJL_Poker
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BJL_Poker.toObject = function toObject(message, options) {
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
         * Converts this BJL_Poker to JSON.
         * @function toJSON
         * @memberof GameMsg_BJL.BJL_Poker
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BJL_Poker.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BJL_Poker;
    })();

    GameMsg_BJL.TestGameChat = (function() {

        /**
         * Properties of a TestGameChat.
         * @memberof GameMsg_BJL
         * @interface ITestGameChat
         * @property {string} Message TestGameChat Message
         */

        /**
         * Constructs a new TestGameChat.
         * @memberof GameMsg_BJL
         * @classdesc Represents a TestGameChat.
         * @implements ITestGameChat
         * @constructor
         * @param {GameMsg_BJL.ITestGameChat=} [properties] Properties to set
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
         * @memberof GameMsg_BJL.TestGameChat
         * @instance
         */
        TestGameChat.prototype.Message = "";

        /**
         * Creates a new TestGameChat instance using the specified properties.
         * @function create
         * @memberof GameMsg_BJL.TestGameChat
         * @static
         * @param {GameMsg_BJL.ITestGameChat=} [properties] Properties to set
         * @returns {GameMsg_BJL.TestGameChat} TestGameChat instance
         */
        TestGameChat.create = function create(properties) {
            return new TestGameChat(properties);
        };

        /**
         * Encodes the specified TestGameChat message. Does not implicitly {@link GameMsg_BJL.TestGameChat.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_BJL.TestGameChat
         * @static
         * @param {GameMsg_BJL.ITestGameChat} message TestGameChat message or plain object to encode
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
         * Encodes the specified TestGameChat message, length delimited. Does not implicitly {@link GameMsg_BJL.TestGameChat.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_BJL.TestGameChat
         * @static
         * @param {GameMsg_BJL.ITestGameChat} message TestGameChat message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TestGameChat.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TestGameChat message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_BJL.TestGameChat
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_BJL.TestGameChat} TestGameChat
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TestGameChat.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_BJL.TestGameChat();
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
         * @memberof GameMsg_BJL.TestGameChat
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_BJL.TestGameChat} TestGameChat
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
         * @memberof GameMsg_BJL.TestGameChat
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
         * @memberof GameMsg_BJL.TestGameChat
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_BJL.TestGameChat} TestGameChat
         */
        TestGameChat.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_BJL.TestGameChat)
                return object;
            var message = new $root.GameMsg_BJL.TestGameChat();
            if (object.Message != null)
                message.Message = String(object.Message);
            return message;
        };

        /**
         * Creates a plain object from a TestGameChat message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_BJL.TestGameChat
         * @static
         * @param {GameMsg_BJL.TestGameChat} message TestGameChat
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
         * @memberof GameMsg_BJL.TestGameChat
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TestGameChat.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return TestGameChat;
    })();

    GameMsg_BJL.TestGameScore = (function() {

        /**
         * Properties of a TestGameScore.
         * @memberof GameMsg_BJL
         * @interface ITestGameScore
         * @property {number} Score TestGameScore Score
         */

        /**
         * Constructs a new TestGameScore.
         * @memberof GameMsg_BJL
         * @classdesc Represents a TestGameScore.
         * @implements ITestGameScore
         * @constructor
         * @param {GameMsg_BJL.ITestGameScore=} [properties] Properties to set
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
         * @memberof GameMsg_BJL.TestGameScore
         * @instance
         */
        TestGameScore.prototype.Score = 0;

        /**
         * Creates a new TestGameScore instance using the specified properties.
         * @function create
         * @memberof GameMsg_BJL.TestGameScore
         * @static
         * @param {GameMsg_BJL.ITestGameScore=} [properties] Properties to set
         * @returns {GameMsg_BJL.TestGameScore} TestGameScore instance
         */
        TestGameScore.create = function create(properties) {
            return new TestGameScore(properties);
        };

        /**
         * Encodes the specified TestGameScore message. Does not implicitly {@link GameMsg_BJL.TestGameScore.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_BJL.TestGameScore
         * @static
         * @param {GameMsg_BJL.ITestGameScore} message TestGameScore message or plain object to encode
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
         * Encodes the specified TestGameScore message, length delimited. Does not implicitly {@link GameMsg_BJL.TestGameScore.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_BJL.TestGameScore
         * @static
         * @param {GameMsg_BJL.ITestGameScore} message TestGameScore message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TestGameScore.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TestGameScore message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_BJL.TestGameScore
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_BJL.TestGameScore} TestGameScore
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TestGameScore.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_BJL.TestGameScore();
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
         * @memberof GameMsg_BJL.TestGameScore
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_BJL.TestGameScore} TestGameScore
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
         * @memberof GameMsg_BJL.TestGameScore
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
         * @memberof GameMsg_BJL.TestGameScore
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_BJL.TestGameScore} TestGameScore
         */
        TestGameScore.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_BJL.TestGameScore)
                return object;
            var message = new $root.GameMsg_BJL.TestGameScore();
            if (object.Score != null)
                message.Score = object.Score | 0;
            return message;
        };

        /**
         * Creates a plain object from a TestGameScore message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_BJL.TestGameScore
         * @static
         * @param {GameMsg_BJL.TestGameScore} message TestGameScore
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
         * @memberof GameMsg_BJL.TestGameScore
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TestGameScore.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return TestGameScore;
    })();

    GameMsg_BJL.TestGameEnd = (function() {

        /**
         * Properties of a TestGameEnd.
         * @memberof GameMsg_BJL
         * @interface ITestGameEnd
         */

        /**
         * Constructs a new TestGameEnd.
         * @memberof GameMsg_BJL
         * @classdesc Represents a TestGameEnd.
         * @implements ITestGameEnd
         * @constructor
         * @param {GameMsg_BJL.ITestGameEnd=} [properties] Properties to set
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
         * @memberof GameMsg_BJL.TestGameEnd
         * @static
         * @param {GameMsg_BJL.ITestGameEnd=} [properties] Properties to set
         * @returns {GameMsg_BJL.TestGameEnd} TestGameEnd instance
         */
        TestGameEnd.create = function create(properties) {
            return new TestGameEnd(properties);
        };

        /**
         * Encodes the specified TestGameEnd message. Does not implicitly {@link GameMsg_BJL.TestGameEnd.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_BJL.TestGameEnd
         * @static
         * @param {GameMsg_BJL.ITestGameEnd} message TestGameEnd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TestGameEnd.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified TestGameEnd message, length delimited. Does not implicitly {@link GameMsg_BJL.TestGameEnd.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_BJL.TestGameEnd
         * @static
         * @param {GameMsg_BJL.ITestGameEnd} message TestGameEnd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TestGameEnd.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TestGameEnd message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_BJL.TestGameEnd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_BJL.TestGameEnd} TestGameEnd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TestGameEnd.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_BJL.TestGameEnd();
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
         * @memberof GameMsg_BJL.TestGameEnd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_BJL.TestGameEnd} TestGameEnd
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
         * @memberof GameMsg_BJL.TestGameEnd
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
         * @memberof GameMsg_BJL.TestGameEnd
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_BJL.TestGameEnd} TestGameEnd
         */
        TestGameEnd.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_BJL.TestGameEnd)
                return object;
            return new $root.GameMsg_BJL.TestGameEnd();
        };

        /**
         * Creates a plain object from a TestGameEnd message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_BJL.TestGameEnd
         * @static
         * @param {GameMsg_BJL.TestGameEnd} message TestGameEnd
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TestGameEnd.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this TestGameEnd to JSON.
         * @function toJSON
         * @memberof GameMsg_BJL.TestGameEnd
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TestGameEnd.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return TestGameEnd;
    })();

    GameMsg_BJL.UserEnter = (function() {

        /**
         * Properties of a UserEnter.
         * @memberof GameMsg_BJL
         * @interface IUserEnter
         * @property {GameMsg_BJL.IGameUser} User UserEnter User
         */

        /**
         * Constructs a new UserEnter.
         * @memberof GameMsg_BJL
         * @classdesc Represents a UserEnter.
         * @implements IUserEnter
         * @constructor
         * @param {GameMsg_BJL.IUserEnter=} [properties] Properties to set
         */
        function UserEnter(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UserEnter User.
         * @member {GameMsg_BJL.IGameUser} User
         * @memberof GameMsg_BJL.UserEnter
         * @instance
         */
        UserEnter.prototype.User = null;

        /**
         * Creates a new UserEnter instance using the specified properties.
         * @function create
         * @memberof GameMsg_BJL.UserEnter
         * @static
         * @param {GameMsg_BJL.IUserEnter=} [properties] Properties to set
         * @returns {GameMsg_BJL.UserEnter} UserEnter instance
         */
        UserEnter.create = function create(properties) {
            return new UserEnter(properties);
        };

        /**
         * Encodes the specified UserEnter message. Does not implicitly {@link GameMsg_BJL.UserEnter.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_BJL.UserEnter
         * @static
         * @param {GameMsg_BJL.IUserEnter} message UserEnter message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserEnter.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            $root.GameMsg_BJL.GameUser.encode(message.User, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified UserEnter message, length delimited. Does not implicitly {@link GameMsg_BJL.UserEnter.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_BJL.UserEnter
         * @static
         * @param {GameMsg_BJL.IUserEnter} message UserEnter message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserEnter.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UserEnter message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_BJL.UserEnter
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_BJL.UserEnter} UserEnter
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserEnter.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_BJL.UserEnter();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.User = $root.GameMsg_BJL.GameUser.decode(reader, reader.uint32());
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
         * @memberof GameMsg_BJL.UserEnter
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_BJL.UserEnter} UserEnter
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
         * @memberof GameMsg_BJL.UserEnter
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UserEnter.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            {
                var error = $root.GameMsg_BJL.GameUser.verify(message.User);
                if (error)
                    return "User." + error;
            }
            return null;
        };

        /**
         * Creates a UserEnter message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_BJL.UserEnter
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_BJL.UserEnter} UserEnter
         */
        UserEnter.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_BJL.UserEnter)
                return object;
            var message = new $root.GameMsg_BJL.UserEnter();
            if (object.User != null) {
                if (typeof object.User !== "object")
                    throw TypeError(".GameMsg_BJL.UserEnter.User: object expected");
                message.User = $root.GameMsg_BJL.GameUser.fromObject(object.User);
            }
            return message;
        };

        /**
         * Creates a plain object from a UserEnter message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_BJL.UserEnter
         * @static
         * @param {GameMsg_BJL.UserEnter} message UserEnter
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
                object.User = $root.GameMsg_BJL.GameUser.toObject(message.User, options);
            return object;
        };

        /**
         * Converts this UserEnter to JSON.
         * @function toJSON
         * @memberof GameMsg_BJL.UserEnter
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserEnter.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UserEnter;
    })();

    GameMsg_BJL.UserLeave = (function() {

        /**
         * Properties of a UserLeave.
         * @memberof GameMsg_BJL
         * @interface IUserLeave
         * @property {GameMsg_BJL.IGameUser} User UserLeave User
         */

        /**
         * Constructs a new UserLeave.
         * @memberof GameMsg_BJL
         * @classdesc Represents a UserLeave.
         * @implements IUserLeave
         * @constructor
         * @param {GameMsg_BJL.IUserLeave=} [properties] Properties to set
         */
        function UserLeave(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UserLeave User.
         * @member {GameMsg_BJL.IGameUser} User
         * @memberof GameMsg_BJL.UserLeave
         * @instance
         */
        UserLeave.prototype.User = null;

        /**
         * Creates a new UserLeave instance using the specified properties.
         * @function create
         * @memberof GameMsg_BJL.UserLeave
         * @static
         * @param {GameMsg_BJL.IUserLeave=} [properties] Properties to set
         * @returns {GameMsg_BJL.UserLeave} UserLeave instance
         */
        UserLeave.create = function create(properties) {
            return new UserLeave(properties);
        };

        /**
         * Encodes the specified UserLeave message. Does not implicitly {@link GameMsg_BJL.UserLeave.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_BJL.UserLeave
         * @static
         * @param {GameMsg_BJL.IUserLeave} message UserLeave message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserLeave.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            $root.GameMsg_BJL.GameUser.encode(message.User, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified UserLeave message, length delimited. Does not implicitly {@link GameMsg_BJL.UserLeave.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_BJL.UserLeave
         * @static
         * @param {GameMsg_BJL.IUserLeave} message UserLeave message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserLeave.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UserLeave message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_BJL.UserLeave
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_BJL.UserLeave} UserLeave
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserLeave.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_BJL.UserLeave();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.User = $root.GameMsg_BJL.GameUser.decode(reader, reader.uint32());
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
         * @memberof GameMsg_BJL.UserLeave
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_BJL.UserLeave} UserLeave
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
         * @memberof GameMsg_BJL.UserLeave
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UserLeave.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            {
                var error = $root.GameMsg_BJL.GameUser.verify(message.User);
                if (error)
                    return "User." + error;
            }
            return null;
        };

        /**
         * Creates a UserLeave message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_BJL.UserLeave
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_BJL.UserLeave} UserLeave
         */
        UserLeave.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_BJL.UserLeave)
                return object;
            var message = new $root.GameMsg_BJL.UserLeave();
            if (object.User != null) {
                if (typeof object.User !== "object")
                    throw TypeError(".GameMsg_BJL.UserLeave.User: object expected");
                message.User = $root.GameMsg_BJL.GameUser.fromObject(object.User);
            }
            return message;
        };

        /**
         * Creates a plain object from a UserLeave message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_BJL.UserLeave
         * @static
         * @param {GameMsg_BJL.UserLeave} message UserLeave
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
                object.User = $root.GameMsg_BJL.GameUser.toObject(message.User, options);
            return object;
        };

        /**
         * Converts this UserLeave to JSON.
         * @function toJSON
         * @memberof GameMsg_BJL.UserLeave
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserLeave.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UserLeave;
    })();

    GameMsg_BJL.UserStateChange = (function() {

        /**
         * Properties of a UserStateChange.
         * @memberof GameMsg_BJL
         * @interface IUserStateChange
         * @property {GameMsg_BJL.IGameUser} User UserStateChange User
         */

        /**
         * Constructs a new UserStateChange.
         * @memberof GameMsg_BJL
         * @classdesc Represents a UserStateChange.
         * @implements IUserStateChange
         * @constructor
         * @param {GameMsg_BJL.IUserStateChange=} [properties] Properties to set
         */
        function UserStateChange(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UserStateChange User.
         * @member {GameMsg_BJL.IGameUser} User
         * @memberof GameMsg_BJL.UserStateChange
         * @instance
         */
        UserStateChange.prototype.User = null;

        /**
         * Creates a new UserStateChange instance using the specified properties.
         * @function create
         * @memberof GameMsg_BJL.UserStateChange
         * @static
         * @param {GameMsg_BJL.IUserStateChange=} [properties] Properties to set
         * @returns {GameMsg_BJL.UserStateChange} UserStateChange instance
         */
        UserStateChange.create = function create(properties) {
            return new UserStateChange(properties);
        };

        /**
         * Encodes the specified UserStateChange message. Does not implicitly {@link GameMsg_BJL.UserStateChange.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_BJL.UserStateChange
         * @static
         * @param {GameMsg_BJL.IUserStateChange} message UserStateChange message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserStateChange.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            $root.GameMsg_BJL.GameUser.encode(message.User, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified UserStateChange message, length delimited. Does not implicitly {@link GameMsg_BJL.UserStateChange.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_BJL.UserStateChange
         * @static
         * @param {GameMsg_BJL.IUserStateChange} message UserStateChange message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserStateChange.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UserStateChange message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_BJL.UserStateChange
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_BJL.UserStateChange} UserStateChange
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserStateChange.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_BJL.UserStateChange();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.User = $root.GameMsg_BJL.GameUser.decode(reader, reader.uint32());
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
         * @memberof GameMsg_BJL.UserStateChange
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_BJL.UserStateChange} UserStateChange
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
         * @memberof GameMsg_BJL.UserStateChange
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UserStateChange.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            {
                var error = $root.GameMsg_BJL.GameUser.verify(message.User);
                if (error)
                    return "User." + error;
            }
            return null;
        };

        /**
         * Creates a UserStateChange message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_BJL.UserStateChange
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_BJL.UserStateChange} UserStateChange
         */
        UserStateChange.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_BJL.UserStateChange)
                return object;
            var message = new $root.GameMsg_BJL.UserStateChange();
            if (object.User != null) {
                if (typeof object.User !== "object")
                    throw TypeError(".GameMsg_BJL.UserStateChange.User: object expected");
                message.User = $root.GameMsg_BJL.GameUser.fromObject(object.User);
            }
            return message;
        };

        /**
         * Creates a plain object from a UserStateChange message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_BJL.UserStateChange
         * @static
         * @param {GameMsg_BJL.UserStateChange} message UserStateChange
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
                object.User = $root.GameMsg_BJL.GameUser.toObject(message.User, options);
            return object;
        };

        /**
         * Converts this UserStateChange to JSON.
         * @function toJSON
         * @memberof GameMsg_BJL.UserStateChange
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserStateChange.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UserStateChange;
    })();

    GameMsg_BJL.GameUser = (function() {

        /**
         * Properties of a GameUser.
         * @memberof GameMsg_BJL
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
         * @memberof GameMsg_BJL
         * @classdesc Represents a GameUser.
         * @implements IGameUser
         * @constructor
         * @param {GameMsg_BJL.IGameUser=} [properties] Properties to set
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
         * @memberof GameMsg_BJL.GameUser
         * @instance
         */
        GameUser.prototype.UserID = 0;

        /**
         * GameUser NickName.
         * @member {string} NickName
         * @memberof GameMsg_BJL.GameUser
         * @instance
         */
        GameUser.prototype.NickName = "";

        /**
         * GameUser Sex.
         * @member {number} Sex
         * @memberof GameMsg_BJL.GameUser
         * @instance
         */
        GameUser.prototype.Sex = 0;

        /**
         * GameUser FaceID.
         * @member {number} FaceID
         * @memberof GameMsg_BJL.GameUser
         * @instance
         */
        GameUser.prototype.FaceID = 0;

        /**
         * GameUser Score.
         * @member {number|Long} Score
         * @memberof GameMsg_BJL.GameUser
         * @instance
         */
        GameUser.prototype.Score = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * GameUser WinCount.
         * @member {number} WinCount
         * @memberof GameMsg_BJL.GameUser
         * @instance
         */
        GameUser.prototype.WinCount = 0;

        /**
         * GameUser LoseCount.
         * @member {number} LoseCount
         * @memberof GameMsg_BJL.GameUser
         * @instance
         */
        GameUser.prototype.LoseCount = 0;

        /**
         * GameUser DrawCount.
         * @member {number} DrawCount
         * @memberof GameMsg_BJL.GameUser
         * @instance
         */
        GameUser.prototype.DrawCount = 0;

        /**
         * GameUser StateValue.
         * @member {number} StateValue
         * @memberof GameMsg_BJL.GameUser
         * @instance
         */
        GameUser.prototype.StateValue = 0;

        /**
         * GameUser TableNo.
         * @member {number} TableNo
         * @memberof GameMsg_BJL.GameUser
         * @instance
         */
        GameUser.prototype.TableNo = 0;

        /**
         * GameUser SeatNo.
         * @member {number} SeatNo
         * @memberof GameMsg_BJL.GameUser
         * @instance
         */
        GameUser.prototype.SeatNo = 0;

        /**
         * GameUser LastWinLose.
         * @member {number} LastWinLose
         * @memberof GameMsg_BJL.GameUser
         * @instance
         */
        GameUser.prototype.LastWinLose = 0;

        /**
         * Creates a new GameUser instance using the specified properties.
         * @function create
         * @memberof GameMsg_BJL.GameUser
         * @static
         * @param {GameMsg_BJL.IGameUser=} [properties] Properties to set
         * @returns {GameMsg_BJL.GameUser} GameUser instance
         */
        GameUser.create = function create(properties) {
            return new GameUser(properties);
        };

        /**
         * Encodes the specified GameUser message. Does not implicitly {@link GameMsg_BJL.GameUser.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_BJL.GameUser
         * @static
         * @param {GameMsg_BJL.IGameUser} message GameUser message or plain object to encode
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
         * Encodes the specified GameUser message, length delimited. Does not implicitly {@link GameMsg_BJL.GameUser.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_BJL.GameUser
         * @static
         * @param {GameMsg_BJL.IGameUser} message GameUser message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameUser.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GameUser message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_BJL.GameUser
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_BJL.GameUser} GameUser
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameUser.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_BJL.GameUser();
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
         * @memberof GameMsg_BJL.GameUser
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_BJL.GameUser} GameUser
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
         * @memberof GameMsg_BJL.GameUser
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
         * @memberof GameMsg_BJL.GameUser
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_BJL.GameUser} GameUser
         */
        GameUser.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_BJL.GameUser)
                return object;
            var message = new $root.GameMsg_BJL.GameUser();
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
         * @memberof GameMsg_BJL.GameUser
         * @static
         * @param {GameMsg_BJL.GameUser} message GameUser
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
         * @memberof GameMsg_BJL.GameUser
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GameUser.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GameUser;
    })();

    GameMsg_BJL.GamePoker = (function() {

        /**
         * Properties of a GamePoker.
         * @memberof GameMsg_BJL
         * @interface IGamePoker
         * @property {Array.<GameMsg_BJL.IUserPoker>|null} [Poker] GamePoker Poker
         */

        /**
         * Constructs a new GamePoker.
         * @memberof GameMsg_BJL
         * @classdesc Represents a GamePoker.
         * @implements IGamePoker
         * @constructor
         * @param {GameMsg_BJL.IGamePoker=} [properties] Properties to set
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
         * @member {Array.<GameMsg_BJL.IUserPoker>} Poker
         * @memberof GameMsg_BJL.GamePoker
         * @instance
         */
        GamePoker.prototype.Poker = $util.emptyArray;

        /**
         * Creates a new GamePoker instance using the specified properties.
         * @function create
         * @memberof GameMsg_BJL.GamePoker
         * @static
         * @param {GameMsg_BJL.IGamePoker=} [properties] Properties to set
         * @returns {GameMsg_BJL.GamePoker} GamePoker instance
         */
        GamePoker.create = function create(properties) {
            return new GamePoker(properties);
        };

        /**
         * Encodes the specified GamePoker message. Does not implicitly {@link GameMsg_BJL.GamePoker.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_BJL.GamePoker
         * @static
         * @param {GameMsg_BJL.IGamePoker} message GamePoker message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GamePoker.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Poker != null && message.Poker.length)
                for (var i = 0; i < message.Poker.length; ++i)
                    $root.GameMsg_BJL.UserPoker.encode(message.Poker[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified GamePoker message, length delimited. Does not implicitly {@link GameMsg_BJL.GamePoker.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_BJL.GamePoker
         * @static
         * @param {GameMsg_BJL.IGamePoker} message GamePoker message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GamePoker.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GamePoker message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_BJL.GamePoker
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_BJL.GamePoker} GamePoker
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GamePoker.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_BJL.GamePoker();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.Poker && message.Poker.length))
                        message.Poker = [];
                    message.Poker.push($root.GameMsg_BJL.UserPoker.decode(reader, reader.uint32()));
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
         * @memberof GameMsg_BJL.GamePoker
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_BJL.GamePoker} GamePoker
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
         * @memberof GameMsg_BJL.GamePoker
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
                    var error = $root.GameMsg_BJL.UserPoker.verify(message.Poker[i]);
                    if (error)
                        return "Poker." + error;
                }
            }
            return null;
        };

        /**
         * Creates a GamePoker message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_BJL.GamePoker
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_BJL.GamePoker} GamePoker
         */
        GamePoker.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_BJL.GamePoker)
                return object;
            var message = new $root.GameMsg_BJL.GamePoker();
            if (object.Poker) {
                if (!Array.isArray(object.Poker))
                    throw TypeError(".GameMsg_BJL.GamePoker.Poker: array expected");
                message.Poker = [];
                for (var i = 0; i < object.Poker.length; ++i) {
                    if (typeof object.Poker[i] !== "object")
                        throw TypeError(".GameMsg_BJL.GamePoker.Poker: object expected");
                    message.Poker[i] = $root.GameMsg_BJL.UserPoker.fromObject(object.Poker[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a GamePoker message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_BJL.GamePoker
         * @static
         * @param {GameMsg_BJL.GamePoker} message GamePoker
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
                    object.Poker[j] = $root.GameMsg_BJL.UserPoker.toObject(message.Poker[j], options);
            }
            return object;
        };

        /**
         * Converts this GamePoker to JSON.
         * @function toJSON
         * @memberof GameMsg_BJL.GamePoker
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GamePoker.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GamePoker;
    })();

    GameMsg_BJL.UserPoker = (function() {

        /**
         * Properties of a UserPoker.
         * @memberof GameMsg_BJL
         * @interface IUserPoker
         * @property {number} UserID UserPoker UserID
         * @property {number} SeatNo UserPoker SeatNo
         * @property {Array.<GameMsg_BJL.IPokerCard>|null} [Cards] UserPoker Cards
         */

        /**
         * Constructs a new UserPoker.
         * @memberof GameMsg_BJL
         * @classdesc Represents a UserPoker.
         * @implements IUserPoker
         * @constructor
         * @param {GameMsg_BJL.IUserPoker=} [properties] Properties to set
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
         * @memberof GameMsg_BJL.UserPoker
         * @instance
         */
        UserPoker.prototype.UserID = 0;

        /**
         * UserPoker SeatNo.
         * @member {number} SeatNo
         * @memberof GameMsg_BJL.UserPoker
         * @instance
         */
        UserPoker.prototype.SeatNo = 0;

        /**
         * UserPoker Cards.
         * @member {Array.<GameMsg_BJL.IPokerCard>} Cards
         * @memberof GameMsg_BJL.UserPoker
         * @instance
         */
        UserPoker.prototype.Cards = $util.emptyArray;

        /**
         * Creates a new UserPoker instance using the specified properties.
         * @function create
         * @memberof GameMsg_BJL.UserPoker
         * @static
         * @param {GameMsg_BJL.IUserPoker=} [properties] Properties to set
         * @returns {GameMsg_BJL.UserPoker} UserPoker instance
         */
        UserPoker.create = function create(properties) {
            return new UserPoker(properties);
        };

        /**
         * Encodes the specified UserPoker message. Does not implicitly {@link GameMsg_BJL.UserPoker.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_BJL.UserPoker
         * @static
         * @param {GameMsg_BJL.IUserPoker} message UserPoker message or plain object to encode
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
                    $root.GameMsg_BJL.PokerCard.encode(message.Cards[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified UserPoker message, length delimited. Does not implicitly {@link GameMsg_BJL.UserPoker.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_BJL.UserPoker
         * @static
         * @param {GameMsg_BJL.IUserPoker} message UserPoker message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserPoker.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UserPoker message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_BJL.UserPoker
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_BJL.UserPoker} UserPoker
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserPoker.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_BJL.UserPoker();
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
                    message.Cards.push($root.GameMsg_BJL.PokerCard.decode(reader, reader.uint32()));
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
         * @memberof GameMsg_BJL.UserPoker
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_BJL.UserPoker} UserPoker
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
         * @memberof GameMsg_BJL.UserPoker
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
                    var error = $root.GameMsg_BJL.PokerCard.verify(message.Cards[i]);
                    if (error)
                        return "Cards." + error;
                }
            }
            return null;
        };

        /**
         * Creates a UserPoker message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_BJL.UserPoker
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_BJL.UserPoker} UserPoker
         */
        UserPoker.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_BJL.UserPoker)
                return object;
            var message = new $root.GameMsg_BJL.UserPoker();
            if (object.UserID != null)
                message.UserID = object.UserID | 0;
            if (object.SeatNo != null)
                message.SeatNo = object.SeatNo | 0;
            if (object.Cards) {
                if (!Array.isArray(object.Cards))
                    throw TypeError(".GameMsg_BJL.UserPoker.Cards: array expected");
                message.Cards = [];
                for (var i = 0; i < object.Cards.length; ++i) {
                    if (typeof object.Cards[i] !== "object")
                        throw TypeError(".GameMsg_BJL.UserPoker.Cards: object expected");
                    message.Cards[i] = $root.GameMsg_BJL.PokerCard.fromObject(object.Cards[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a UserPoker message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_BJL.UserPoker
         * @static
         * @param {GameMsg_BJL.UserPoker} message UserPoker
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
                    object.Cards[j] = $root.GameMsg_BJL.PokerCard.toObject(message.Cards[j], options);
            }
            return object;
        };

        /**
         * Converts this UserPoker to JSON.
         * @function toJSON
         * @memberof GameMsg_BJL.UserPoker
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserPoker.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UserPoker;
    })();

    GameMsg_BJL.PokerCard = (function() {

        /**
         * Properties of a PokerCard.
         * @memberof GameMsg_BJL
         * @interface IPokerCard
         * @property {number} Color PokerCard Color
         * @property {number} CardNumber PokerCard CardNumber
         */

        /**
         * Constructs a new PokerCard.
         * @memberof GameMsg_BJL
         * @classdesc Represents a PokerCard.
         * @implements IPokerCard
         * @constructor
         * @param {GameMsg_BJL.IPokerCard=} [properties] Properties to set
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
         * @memberof GameMsg_BJL.PokerCard
         * @instance
         */
        PokerCard.prototype.Color = 0;

        /**
         * PokerCard CardNumber.
         * @member {number} CardNumber
         * @memberof GameMsg_BJL.PokerCard
         * @instance
         */
        PokerCard.prototype.CardNumber = 0;

        /**
         * Creates a new PokerCard instance using the specified properties.
         * @function create
         * @memberof GameMsg_BJL.PokerCard
         * @static
         * @param {GameMsg_BJL.IPokerCard=} [properties] Properties to set
         * @returns {GameMsg_BJL.PokerCard} PokerCard instance
         */
        PokerCard.create = function create(properties) {
            return new PokerCard(properties);
        };

        /**
         * Encodes the specified PokerCard message. Does not implicitly {@link GameMsg_BJL.PokerCard.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_BJL.PokerCard
         * @static
         * @param {GameMsg_BJL.IPokerCard} message PokerCard message or plain object to encode
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
         * Encodes the specified PokerCard message, length delimited. Does not implicitly {@link GameMsg_BJL.PokerCard.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_BJL.PokerCard
         * @static
         * @param {GameMsg_BJL.IPokerCard} message PokerCard message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PokerCard.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PokerCard message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_BJL.PokerCard
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_BJL.PokerCard} PokerCard
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PokerCard.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_BJL.PokerCard();
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
         * @memberof GameMsg_BJL.PokerCard
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_BJL.PokerCard} PokerCard
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
         * @memberof GameMsg_BJL.PokerCard
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
         * @memberof GameMsg_BJL.PokerCard
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_BJL.PokerCard} PokerCard
         */
        PokerCard.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_BJL.PokerCard)
                return object;
            var message = new $root.GameMsg_BJL.PokerCard();
            if (object.Color != null)
                message.Color = object.Color | 0;
            if (object.CardNumber != null)
                message.CardNumber = object.CardNumber | 0;
            return message;
        };

        /**
         * Creates a plain object from a PokerCard message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_BJL.PokerCard
         * @static
         * @param {GameMsg_BJL.PokerCard} message PokerCard
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
         * @memberof GameMsg_BJL.PokerCard
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PokerCard.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return PokerCard;
    })();

    GameMsg_BJL.UserActionCommited = (function() {

        /**
         * Properties of a UserActionCommited.
         * @memberof GameMsg_BJL
         * @interface IUserActionCommited
         * @property {string} ActionName UserActionCommited ActionName
         */

        /**
         * Constructs a new UserActionCommited.
         * @memberof GameMsg_BJL
         * @classdesc Represents a UserActionCommited.
         * @implements IUserActionCommited
         * @constructor
         * @param {GameMsg_BJL.IUserActionCommited=} [properties] Properties to set
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
         * @memberof GameMsg_BJL.UserActionCommited
         * @instance
         */
        UserActionCommited.prototype.ActionName = "";

        /**
         * Creates a new UserActionCommited instance using the specified properties.
         * @function create
         * @memberof GameMsg_BJL.UserActionCommited
         * @static
         * @param {GameMsg_BJL.IUserActionCommited=} [properties] Properties to set
         * @returns {GameMsg_BJL.UserActionCommited} UserActionCommited instance
         */
        UserActionCommited.create = function create(properties) {
            return new UserActionCommited(properties);
        };

        /**
         * Encodes the specified UserActionCommited message. Does not implicitly {@link GameMsg_BJL.UserActionCommited.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_BJL.UserActionCommited
         * @static
         * @param {GameMsg_BJL.IUserActionCommited} message UserActionCommited message or plain object to encode
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
         * Encodes the specified UserActionCommited message, length delimited. Does not implicitly {@link GameMsg_BJL.UserActionCommited.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_BJL.UserActionCommited
         * @static
         * @param {GameMsg_BJL.IUserActionCommited} message UserActionCommited message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserActionCommited.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UserActionCommited message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_BJL.UserActionCommited
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_BJL.UserActionCommited} UserActionCommited
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserActionCommited.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_BJL.UserActionCommited();
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
         * @memberof GameMsg_BJL.UserActionCommited
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_BJL.UserActionCommited} UserActionCommited
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
         * @memberof GameMsg_BJL.UserActionCommited
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
         * @memberof GameMsg_BJL.UserActionCommited
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_BJL.UserActionCommited} UserActionCommited
         */
        UserActionCommited.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_BJL.UserActionCommited)
                return object;
            var message = new $root.GameMsg_BJL.UserActionCommited();
            if (object.ActionName != null)
                message.ActionName = String(object.ActionName);
            return message;
        };

        /**
         * Creates a plain object from a UserActionCommited message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_BJL.UserActionCommited
         * @static
         * @param {GameMsg_BJL.UserActionCommited} message UserActionCommited
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
         * @memberof GameMsg_BJL.UserActionCommited
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserActionCommited.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UserActionCommited;
    })();

    GameMsg_BJL.AllUserActionCommited = (function() {

        /**
         * Properties of an AllUserActionCommited.
         * @memberof GameMsg_BJL
         * @interface IAllUserActionCommited
         * @property {string} ActionName AllUserActionCommited ActionName
         */

        /**
         * Constructs a new AllUserActionCommited.
         * @memberof GameMsg_BJL
         * @classdesc Represents an AllUserActionCommited.
         * @implements IAllUserActionCommited
         * @constructor
         * @param {GameMsg_BJL.IAllUserActionCommited=} [properties] Properties to set
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
         * @memberof GameMsg_BJL.AllUserActionCommited
         * @instance
         */
        AllUserActionCommited.prototype.ActionName = "";

        /**
         * Creates a new AllUserActionCommited instance using the specified properties.
         * @function create
         * @memberof GameMsg_BJL.AllUserActionCommited
         * @static
         * @param {GameMsg_BJL.IAllUserActionCommited=} [properties] Properties to set
         * @returns {GameMsg_BJL.AllUserActionCommited} AllUserActionCommited instance
         */
        AllUserActionCommited.create = function create(properties) {
            return new AllUserActionCommited(properties);
        };

        /**
         * Encodes the specified AllUserActionCommited message. Does not implicitly {@link GameMsg_BJL.AllUserActionCommited.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_BJL.AllUserActionCommited
         * @static
         * @param {GameMsg_BJL.IAllUserActionCommited} message AllUserActionCommited message or plain object to encode
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
         * Encodes the specified AllUserActionCommited message, length delimited. Does not implicitly {@link GameMsg_BJL.AllUserActionCommited.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_BJL.AllUserActionCommited
         * @static
         * @param {GameMsg_BJL.IAllUserActionCommited} message AllUserActionCommited message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AllUserActionCommited.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AllUserActionCommited message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_BJL.AllUserActionCommited
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_BJL.AllUserActionCommited} AllUserActionCommited
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AllUserActionCommited.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_BJL.AllUserActionCommited();
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
         * @memberof GameMsg_BJL.AllUserActionCommited
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_BJL.AllUserActionCommited} AllUserActionCommited
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
         * @memberof GameMsg_BJL.AllUserActionCommited
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
         * @memberof GameMsg_BJL.AllUserActionCommited
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_BJL.AllUserActionCommited} AllUserActionCommited
         */
        AllUserActionCommited.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_BJL.AllUserActionCommited)
                return object;
            var message = new $root.GameMsg_BJL.AllUserActionCommited();
            if (object.ActionName != null)
                message.ActionName = String(object.ActionName);
            return message;
        };

        /**
         * Creates a plain object from an AllUserActionCommited message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_BJL.AllUserActionCommited
         * @static
         * @param {GameMsg_BJL.AllUserActionCommited} message AllUserActionCommited
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
         * @memberof GameMsg_BJL.AllUserActionCommited
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AllUserActionCommited.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return AllUserActionCommited;
    })();

    GameMsg_BJL.LookOnUserNotify = (function() {

        /**
         * Properties of a LookOnUserNotify.
         * @memberof GameMsg_BJL
         * @interface ILookOnUserNotify
         * @property {Array.<number>|null} [UserID] LookOnUserNotify UserID
         */

        /**
         * Constructs a new LookOnUserNotify.
         * @memberof GameMsg_BJL
         * @classdesc Represents a LookOnUserNotify.
         * @implements ILookOnUserNotify
         * @constructor
         * @param {GameMsg_BJL.ILookOnUserNotify=} [properties] Properties to set
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
         * @memberof GameMsg_BJL.LookOnUserNotify
         * @instance
         */
        LookOnUserNotify.prototype.UserID = $util.emptyArray;

        /**
         * Creates a new LookOnUserNotify instance using the specified properties.
         * @function create
         * @memberof GameMsg_BJL.LookOnUserNotify
         * @static
         * @param {GameMsg_BJL.ILookOnUserNotify=} [properties] Properties to set
         * @returns {GameMsg_BJL.LookOnUserNotify} LookOnUserNotify instance
         */
        LookOnUserNotify.create = function create(properties) {
            return new LookOnUserNotify(properties);
        };

        /**
         * Encodes the specified LookOnUserNotify message. Does not implicitly {@link GameMsg_BJL.LookOnUserNotify.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_BJL.LookOnUserNotify
         * @static
         * @param {GameMsg_BJL.ILookOnUserNotify} message LookOnUserNotify message or plain object to encode
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
         * Encodes the specified LookOnUserNotify message, length delimited. Does not implicitly {@link GameMsg_BJL.LookOnUserNotify.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_BJL.LookOnUserNotify
         * @static
         * @param {GameMsg_BJL.ILookOnUserNotify} message LookOnUserNotify message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LookOnUserNotify.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LookOnUserNotify message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_BJL.LookOnUserNotify
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_BJL.LookOnUserNotify} LookOnUserNotify
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LookOnUserNotify.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_BJL.LookOnUserNotify();
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
         * @memberof GameMsg_BJL.LookOnUserNotify
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_BJL.LookOnUserNotify} LookOnUserNotify
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
         * @memberof GameMsg_BJL.LookOnUserNotify
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
         * @memberof GameMsg_BJL.LookOnUserNotify
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_BJL.LookOnUserNotify} LookOnUserNotify
         */
        LookOnUserNotify.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_BJL.LookOnUserNotify)
                return object;
            var message = new $root.GameMsg_BJL.LookOnUserNotify();
            if (object.UserID) {
                if (!Array.isArray(object.UserID))
                    throw TypeError(".GameMsg_BJL.LookOnUserNotify.UserID: array expected");
                message.UserID = [];
                for (var i = 0; i < object.UserID.length; ++i)
                    message.UserID[i] = object.UserID[i] | 0;
            }
            return message;
        };

        /**
         * Creates a plain object from a LookOnUserNotify message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_BJL.LookOnUserNotify
         * @static
         * @param {GameMsg_BJL.LookOnUserNotify} message LookOnUserNotify
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
         * @memberof GameMsg_BJL.LookOnUserNotify
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LookOnUserNotify.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return LookOnUserNotify;
    })();

    GameMsg_BJL.UserLuckScore = (function() {

        /**
         * Properties of a UserLuckScore.
         * @memberof GameMsg_BJL
         * @interface IUserLuckScore
         * @property {number} UserID UserLuckScore UserID
         * @property {number|Long} Score UserLuckScore Score
         */

        /**
         * Constructs a new UserLuckScore.
         * @memberof GameMsg_BJL
         * @classdesc Represents a UserLuckScore.
         * @implements IUserLuckScore
         * @constructor
         * @param {GameMsg_BJL.IUserLuckScore=} [properties] Properties to set
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
         * @memberof GameMsg_BJL.UserLuckScore
         * @instance
         */
        UserLuckScore.prototype.UserID = 0;

        /**
         * UserLuckScore Score.
         * @member {number|Long} Score
         * @memberof GameMsg_BJL.UserLuckScore
         * @instance
         */
        UserLuckScore.prototype.Score = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new UserLuckScore instance using the specified properties.
         * @function create
         * @memberof GameMsg_BJL.UserLuckScore
         * @static
         * @param {GameMsg_BJL.IUserLuckScore=} [properties] Properties to set
         * @returns {GameMsg_BJL.UserLuckScore} UserLuckScore instance
         */
        UserLuckScore.create = function create(properties) {
            return new UserLuckScore(properties);
        };

        /**
         * Encodes the specified UserLuckScore message. Does not implicitly {@link GameMsg_BJL.UserLuckScore.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_BJL.UserLuckScore
         * @static
         * @param {GameMsg_BJL.IUserLuckScore} message UserLuckScore message or plain object to encode
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
         * Encodes the specified UserLuckScore message, length delimited. Does not implicitly {@link GameMsg_BJL.UserLuckScore.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_BJL.UserLuckScore
         * @static
         * @param {GameMsg_BJL.IUserLuckScore} message UserLuckScore message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserLuckScore.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UserLuckScore message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_BJL.UserLuckScore
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_BJL.UserLuckScore} UserLuckScore
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserLuckScore.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_BJL.UserLuckScore();
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
         * @memberof GameMsg_BJL.UserLuckScore
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_BJL.UserLuckScore} UserLuckScore
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
         * @memberof GameMsg_BJL.UserLuckScore
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
         * @memberof GameMsg_BJL.UserLuckScore
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_BJL.UserLuckScore} UserLuckScore
         */
        UserLuckScore.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_BJL.UserLuckScore)
                return object;
            var message = new $root.GameMsg_BJL.UserLuckScore();
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
         * @memberof GameMsg_BJL.UserLuckScore
         * @static
         * @param {GameMsg_BJL.UserLuckScore} message UserLuckScore
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
         * @memberof GameMsg_BJL.UserLuckScore
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserLuckScore.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UserLuckScore;
    })();

    GameMsg_BJL.UserLuckScoreRet = (function() {

        /**
         * Properties of a UserLuckScoreRet.
         * @memberof GameMsg_BJL
         * @interface IUserLuckScoreRet
         * @property {number} UserID UserLuckScoreRet UserID
         * @property {string} Value UserLuckScoreRet Value
         */

        /**
         * Constructs a new UserLuckScoreRet.
         * @memberof GameMsg_BJL
         * @classdesc Represents a UserLuckScoreRet.
         * @implements IUserLuckScoreRet
         * @constructor
         * @param {GameMsg_BJL.IUserLuckScoreRet=} [properties] Properties to set
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
         * @memberof GameMsg_BJL.UserLuckScoreRet
         * @instance
         */
        UserLuckScoreRet.prototype.UserID = 0;

        /**
         * UserLuckScoreRet Value.
         * @member {string} Value
         * @memberof GameMsg_BJL.UserLuckScoreRet
         * @instance
         */
        UserLuckScoreRet.prototype.Value = "";

        /**
         * Creates a new UserLuckScoreRet instance using the specified properties.
         * @function create
         * @memberof GameMsg_BJL.UserLuckScoreRet
         * @static
         * @param {GameMsg_BJL.IUserLuckScoreRet=} [properties] Properties to set
         * @returns {GameMsg_BJL.UserLuckScoreRet} UserLuckScoreRet instance
         */
        UserLuckScoreRet.create = function create(properties) {
            return new UserLuckScoreRet(properties);
        };

        /**
         * Encodes the specified UserLuckScoreRet message. Does not implicitly {@link GameMsg_BJL.UserLuckScoreRet.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_BJL.UserLuckScoreRet
         * @static
         * @param {GameMsg_BJL.IUserLuckScoreRet} message UserLuckScoreRet message or plain object to encode
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
         * Encodes the specified UserLuckScoreRet message, length delimited. Does not implicitly {@link GameMsg_BJL.UserLuckScoreRet.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_BJL.UserLuckScoreRet
         * @static
         * @param {GameMsg_BJL.IUserLuckScoreRet} message UserLuckScoreRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserLuckScoreRet.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UserLuckScoreRet message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_BJL.UserLuckScoreRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_BJL.UserLuckScoreRet} UserLuckScoreRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserLuckScoreRet.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_BJL.UserLuckScoreRet();
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
         * @memberof GameMsg_BJL.UserLuckScoreRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_BJL.UserLuckScoreRet} UserLuckScoreRet
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
         * @memberof GameMsg_BJL.UserLuckScoreRet
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
         * @memberof GameMsg_BJL.UserLuckScoreRet
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_BJL.UserLuckScoreRet} UserLuckScoreRet
         */
        UserLuckScoreRet.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_BJL.UserLuckScoreRet)
                return object;
            var message = new $root.GameMsg_BJL.UserLuckScoreRet();
            if (object.UserID != null)
                message.UserID = object.UserID | 0;
            if (object.Value != null)
                message.Value = String(object.Value);
            return message;
        };

        /**
         * Creates a plain object from a UserLuckScoreRet message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_BJL.UserLuckScoreRet
         * @static
         * @param {GameMsg_BJL.UserLuckScoreRet} message UserLuckScoreRet
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
         * @memberof GameMsg_BJL.UserLuckScoreRet
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserLuckScoreRet.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UserLuckScoreRet;
    })();

    GameMsg_BJL.GameBeginCountDown = (function() {

        /**
         * Properties of a GameBeginCountDown.
         * @memberof GameMsg_BJL
         * @interface IGameBeginCountDown
         * @property {number} Time GameBeginCountDown Time
         */

        /**
         * Constructs a new GameBeginCountDown.
         * @memberof GameMsg_BJL
         * @classdesc Represents a GameBeginCountDown.
         * @implements IGameBeginCountDown
         * @constructor
         * @param {GameMsg_BJL.IGameBeginCountDown=} [properties] Properties to set
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
         * @memberof GameMsg_BJL.GameBeginCountDown
         * @instance
         */
        GameBeginCountDown.prototype.Time = 0;

        /**
         * Creates a new GameBeginCountDown instance using the specified properties.
         * @function create
         * @memberof GameMsg_BJL.GameBeginCountDown
         * @static
         * @param {GameMsg_BJL.IGameBeginCountDown=} [properties] Properties to set
         * @returns {GameMsg_BJL.GameBeginCountDown} GameBeginCountDown instance
         */
        GameBeginCountDown.create = function create(properties) {
            return new GameBeginCountDown(properties);
        };

        /**
         * Encodes the specified GameBeginCountDown message. Does not implicitly {@link GameMsg_BJL.GameBeginCountDown.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_BJL.GameBeginCountDown
         * @static
         * @param {GameMsg_BJL.IGameBeginCountDown} message GameBeginCountDown message or plain object to encode
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
         * Encodes the specified GameBeginCountDown message, length delimited. Does not implicitly {@link GameMsg_BJL.GameBeginCountDown.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_BJL.GameBeginCountDown
         * @static
         * @param {GameMsg_BJL.IGameBeginCountDown} message GameBeginCountDown message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameBeginCountDown.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GameBeginCountDown message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_BJL.GameBeginCountDown
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_BJL.GameBeginCountDown} GameBeginCountDown
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameBeginCountDown.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_BJL.GameBeginCountDown();
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
         * @memberof GameMsg_BJL.GameBeginCountDown
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_BJL.GameBeginCountDown} GameBeginCountDown
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
         * @memberof GameMsg_BJL.GameBeginCountDown
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
         * @memberof GameMsg_BJL.GameBeginCountDown
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_BJL.GameBeginCountDown} GameBeginCountDown
         */
        GameBeginCountDown.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_BJL.GameBeginCountDown)
                return object;
            var message = new $root.GameMsg_BJL.GameBeginCountDown();
            if (object.Time != null)
                message.Time = object.Time | 0;
            return message;
        };

        /**
         * Creates a plain object from a GameBeginCountDown message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_BJL.GameBeginCountDown
         * @static
         * @param {GameMsg_BJL.GameBeginCountDown} message GameBeginCountDown
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
         * @memberof GameMsg_BJL.GameBeginCountDown
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GameBeginCountDown.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GameBeginCountDown;
    })();

    GameMsg_BJL.SuperToolAddChangeLog = (function() {

        /**
         * Properties of a SuperToolAddChangeLog.
         * @memberof GameMsg_BJL
         * @interface ISuperToolAddChangeLog
         * @property {number} GameID SuperToolAddChangeLog GameID
         * @property {number} TableNo SuperToolAddChangeLog TableNo
         * @property {number} Type SuperToolAddChangeLog Type
         * @property {string} Result SuperToolAddChangeLog Result
         * @property {string} Operator SuperToolAddChangeLog Operator
         */

        /**
         * Constructs a new SuperToolAddChangeLog.
         * @memberof GameMsg_BJL
         * @classdesc Represents a SuperToolAddChangeLog.
         * @implements ISuperToolAddChangeLog
         * @constructor
         * @param {GameMsg_BJL.ISuperToolAddChangeLog=} [properties] Properties to set
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
         * @memberof GameMsg_BJL.SuperToolAddChangeLog
         * @instance
         */
        SuperToolAddChangeLog.prototype.GameID = 0;

        /**
         * SuperToolAddChangeLog TableNo.
         * @member {number} TableNo
         * @memberof GameMsg_BJL.SuperToolAddChangeLog
         * @instance
         */
        SuperToolAddChangeLog.prototype.TableNo = 0;

        /**
         * SuperToolAddChangeLog Type.
         * @member {number} Type
         * @memberof GameMsg_BJL.SuperToolAddChangeLog
         * @instance
         */
        SuperToolAddChangeLog.prototype.Type = 0;

        /**
         * SuperToolAddChangeLog Result.
         * @member {string} Result
         * @memberof GameMsg_BJL.SuperToolAddChangeLog
         * @instance
         */
        SuperToolAddChangeLog.prototype.Result = "";

        /**
         * SuperToolAddChangeLog Operator.
         * @member {string} Operator
         * @memberof GameMsg_BJL.SuperToolAddChangeLog
         * @instance
         */
        SuperToolAddChangeLog.prototype.Operator = "";

        /**
         * Creates a new SuperToolAddChangeLog instance using the specified properties.
         * @function create
         * @memberof GameMsg_BJL.SuperToolAddChangeLog
         * @static
         * @param {GameMsg_BJL.ISuperToolAddChangeLog=} [properties] Properties to set
         * @returns {GameMsg_BJL.SuperToolAddChangeLog} SuperToolAddChangeLog instance
         */
        SuperToolAddChangeLog.create = function create(properties) {
            return new SuperToolAddChangeLog(properties);
        };

        /**
         * Encodes the specified SuperToolAddChangeLog message. Does not implicitly {@link GameMsg_BJL.SuperToolAddChangeLog.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_BJL.SuperToolAddChangeLog
         * @static
         * @param {GameMsg_BJL.ISuperToolAddChangeLog} message SuperToolAddChangeLog message or plain object to encode
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
         * Encodes the specified SuperToolAddChangeLog message, length delimited. Does not implicitly {@link GameMsg_BJL.SuperToolAddChangeLog.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_BJL.SuperToolAddChangeLog
         * @static
         * @param {GameMsg_BJL.ISuperToolAddChangeLog} message SuperToolAddChangeLog message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SuperToolAddChangeLog.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SuperToolAddChangeLog message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_BJL.SuperToolAddChangeLog
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_BJL.SuperToolAddChangeLog} SuperToolAddChangeLog
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SuperToolAddChangeLog.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_BJL.SuperToolAddChangeLog();
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
         * @memberof GameMsg_BJL.SuperToolAddChangeLog
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_BJL.SuperToolAddChangeLog} SuperToolAddChangeLog
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
         * @memberof GameMsg_BJL.SuperToolAddChangeLog
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
         * @memberof GameMsg_BJL.SuperToolAddChangeLog
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_BJL.SuperToolAddChangeLog} SuperToolAddChangeLog
         */
        SuperToolAddChangeLog.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_BJL.SuperToolAddChangeLog)
                return object;
            var message = new $root.GameMsg_BJL.SuperToolAddChangeLog();
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
         * @memberof GameMsg_BJL.SuperToolAddChangeLog
         * @static
         * @param {GameMsg_BJL.SuperToolAddChangeLog} message SuperToolAddChangeLog
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
         * @memberof GameMsg_BJL.SuperToolAddChangeLog
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SuperToolAddChangeLog.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SuperToolAddChangeLog;
    })();

    GameMsg_BJL.SuperToolAddAssignReward = (function() {

        /**
         * Properties of a SuperToolAddAssignReward.
         * @memberof GameMsg_BJL
         * @interface ISuperToolAddAssignReward
         * @property {number} GameID SuperToolAddAssignReward GameID
         * @property {number} FlagID SuperToolAddAssignReward FlagID
         * @property {number} TableNo SuperToolAddAssignReward TableNo
         * @property {string} Result SuperToolAddAssignReward Result
         * @property {string} Operator SuperToolAddAssignReward Operator
         * @property {Array.<GameMsg_BJL.ISuperToolAddAssignRewardDetail>|null} [DetailList] SuperToolAddAssignReward DetailList
         */

        /**
         * Constructs a new SuperToolAddAssignReward.
         * @memberof GameMsg_BJL
         * @classdesc Represents a SuperToolAddAssignReward.
         * @implements ISuperToolAddAssignReward
         * @constructor
         * @param {GameMsg_BJL.ISuperToolAddAssignReward=} [properties] Properties to set
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
         * @memberof GameMsg_BJL.SuperToolAddAssignReward
         * @instance
         */
        SuperToolAddAssignReward.prototype.GameID = 0;

        /**
         * SuperToolAddAssignReward FlagID.
         * @member {number} FlagID
         * @memberof GameMsg_BJL.SuperToolAddAssignReward
         * @instance
         */
        SuperToolAddAssignReward.prototype.FlagID = 0;

        /**
         * SuperToolAddAssignReward TableNo.
         * @member {number} TableNo
         * @memberof GameMsg_BJL.SuperToolAddAssignReward
         * @instance
         */
        SuperToolAddAssignReward.prototype.TableNo = 0;

        /**
         * SuperToolAddAssignReward Result.
         * @member {string} Result
         * @memberof GameMsg_BJL.SuperToolAddAssignReward
         * @instance
         */
        SuperToolAddAssignReward.prototype.Result = "";

        /**
         * SuperToolAddAssignReward Operator.
         * @member {string} Operator
         * @memberof GameMsg_BJL.SuperToolAddAssignReward
         * @instance
         */
        SuperToolAddAssignReward.prototype.Operator = "";

        /**
         * SuperToolAddAssignReward DetailList.
         * @member {Array.<GameMsg_BJL.ISuperToolAddAssignRewardDetail>} DetailList
         * @memberof GameMsg_BJL.SuperToolAddAssignReward
         * @instance
         */
        SuperToolAddAssignReward.prototype.DetailList = $util.emptyArray;

        /**
         * Creates a new SuperToolAddAssignReward instance using the specified properties.
         * @function create
         * @memberof GameMsg_BJL.SuperToolAddAssignReward
         * @static
         * @param {GameMsg_BJL.ISuperToolAddAssignReward=} [properties] Properties to set
         * @returns {GameMsg_BJL.SuperToolAddAssignReward} SuperToolAddAssignReward instance
         */
        SuperToolAddAssignReward.create = function create(properties) {
            return new SuperToolAddAssignReward(properties);
        };

        /**
         * Encodes the specified SuperToolAddAssignReward message. Does not implicitly {@link GameMsg_BJL.SuperToolAddAssignReward.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_BJL.SuperToolAddAssignReward
         * @static
         * @param {GameMsg_BJL.ISuperToolAddAssignReward} message SuperToolAddAssignReward message or plain object to encode
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
                    $root.GameMsg_BJL.SuperToolAddAssignRewardDetail.encode(message.DetailList[i], writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified SuperToolAddAssignReward message, length delimited. Does not implicitly {@link GameMsg_BJL.SuperToolAddAssignReward.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_BJL.SuperToolAddAssignReward
         * @static
         * @param {GameMsg_BJL.ISuperToolAddAssignReward} message SuperToolAddAssignReward message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SuperToolAddAssignReward.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SuperToolAddAssignReward message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_BJL.SuperToolAddAssignReward
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_BJL.SuperToolAddAssignReward} SuperToolAddAssignReward
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SuperToolAddAssignReward.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_BJL.SuperToolAddAssignReward();
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
                    message.DetailList.push($root.GameMsg_BJL.SuperToolAddAssignRewardDetail.decode(reader, reader.uint32()));
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
         * @memberof GameMsg_BJL.SuperToolAddAssignReward
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_BJL.SuperToolAddAssignReward} SuperToolAddAssignReward
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
         * @memberof GameMsg_BJL.SuperToolAddAssignReward
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
                    var error = $root.GameMsg_BJL.SuperToolAddAssignRewardDetail.verify(message.DetailList[i]);
                    if (error)
                        return "DetailList." + error;
                }
            }
            return null;
        };

        /**
         * Creates a SuperToolAddAssignReward message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_BJL.SuperToolAddAssignReward
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_BJL.SuperToolAddAssignReward} SuperToolAddAssignReward
         */
        SuperToolAddAssignReward.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_BJL.SuperToolAddAssignReward)
                return object;
            var message = new $root.GameMsg_BJL.SuperToolAddAssignReward();
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
                    throw TypeError(".GameMsg_BJL.SuperToolAddAssignReward.DetailList: array expected");
                message.DetailList = [];
                for (var i = 0; i < object.DetailList.length; ++i) {
                    if (typeof object.DetailList[i] !== "object")
                        throw TypeError(".GameMsg_BJL.SuperToolAddAssignReward.DetailList: object expected");
                    message.DetailList[i] = $root.GameMsg_BJL.SuperToolAddAssignRewardDetail.fromObject(object.DetailList[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a SuperToolAddAssignReward message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_BJL.SuperToolAddAssignReward
         * @static
         * @param {GameMsg_BJL.SuperToolAddAssignReward} message SuperToolAddAssignReward
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
                    object.DetailList[j] = $root.GameMsg_BJL.SuperToolAddAssignRewardDetail.toObject(message.DetailList[j], options);
            }
            return object;
        };

        /**
         * Converts this SuperToolAddAssignReward to JSON.
         * @function toJSON
         * @memberof GameMsg_BJL.SuperToolAddAssignReward
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SuperToolAddAssignReward.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SuperToolAddAssignReward;
    })();

    GameMsg_BJL.SuperToolGetAssignRewardDetail = (function() {

        /**
         * Properties of a SuperToolGetAssignRewardDetail.
         * @memberof GameMsg_BJL
         * @interface ISuperToolGetAssignRewardDetail
         * @property {number} GameID SuperToolGetAssignRewardDetail GameID
         * @property {number} FlagID SuperToolGetAssignRewardDetail FlagID
         * @property {number} TableNo SuperToolGetAssignRewardDetail TableNo
         */

        /**
         * Constructs a new SuperToolGetAssignRewardDetail.
         * @memberof GameMsg_BJL
         * @classdesc Represents a SuperToolGetAssignRewardDetail.
         * @implements ISuperToolGetAssignRewardDetail
         * @constructor
         * @param {GameMsg_BJL.ISuperToolGetAssignRewardDetail=} [properties] Properties to set
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
         * @memberof GameMsg_BJL.SuperToolGetAssignRewardDetail
         * @instance
         */
        SuperToolGetAssignRewardDetail.prototype.GameID = 0;

        /**
         * SuperToolGetAssignRewardDetail FlagID.
         * @member {number} FlagID
         * @memberof GameMsg_BJL.SuperToolGetAssignRewardDetail
         * @instance
         */
        SuperToolGetAssignRewardDetail.prototype.FlagID = 0;

        /**
         * SuperToolGetAssignRewardDetail TableNo.
         * @member {number} TableNo
         * @memberof GameMsg_BJL.SuperToolGetAssignRewardDetail
         * @instance
         */
        SuperToolGetAssignRewardDetail.prototype.TableNo = 0;

        /**
         * Creates a new SuperToolGetAssignRewardDetail instance using the specified properties.
         * @function create
         * @memberof GameMsg_BJL.SuperToolGetAssignRewardDetail
         * @static
         * @param {GameMsg_BJL.ISuperToolGetAssignRewardDetail=} [properties] Properties to set
         * @returns {GameMsg_BJL.SuperToolGetAssignRewardDetail} SuperToolGetAssignRewardDetail instance
         */
        SuperToolGetAssignRewardDetail.create = function create(properties) {
            return new SuperToolGetAssignRewardDetail(properties);
        };

        /**
         * Encodes the specified SuperToolGetAssignRewardDetail message. Does not implicitly {@link GameMsg_BJL.SuperToolGetAssignRewardDetail.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_BJL.SuperToolGetAssignRewardDetail
         * @static
         * @param {GameMsg_BJL.ISuperToolGetAssignRewardDetail} message SuperToolGetAssignRewardDetail message or plain object to encode
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
         * Encodes the specified SuperToolGetAssignRewardDetail message, length delimited. Does not implicitly {@link GameMsg_BJL.SuperToolGetAssignRewardDetail.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_BJL.SuperToolGetAssignRewardDetail
         * @static
         * @param {GameMsg_BJL.ISuperToolGetAssignRewardDetail} message SuperToolGetAssignRewardDetail message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SuperToolGetAssignRewardDetail.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SuperToolGetAssignRewardDetail message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_BJL.SuperToolGetAssignRewardDetail
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_BJL.SuperToolGetAssignRewardDetail} SuperToolGetAssignRewardDetail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SuperToolGetAssignRewardDetail.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_BJL.SuperToolGetAssignRewardDetail();
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
         * @memberof GameMsg_BJL.SuperToolGetAssignRewardDetail
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_BJL.SuperToolGetAssignRewardDetail} SuperToolGetAssignRewardDetail
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
         * @memberof GameMsg_BJL.SuperToolGetAssignRewardDetail
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
         * @memberof GameMsg_BJL.SuperToolGetAssignRewardDetail
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_BJL.SuperToolGetAssignRewardDetail} SuperToolGetAssignRewardDetail
         */
        SuperToolGetAssignRewardDetail.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_BJL.SuperToolGetAssignRewardDetail)
                return object;
            var message = new $root.GameMsg_BJL.SuperToolGetAssignRewardDetail();
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
         * @memberof GameMsg_BJL.SuperToolGetAssignRewardDetail
         * @static
         * @param {GameMsg_BJL.SuperToolGetAssignRewardDetail} message SuperToolGetAssignRewardDetail
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
         * @memberof GameMsg_BJL.SuperToolGetAssignRewardDetail
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SuperToolGetAssignRewardDetail.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SuperToolGetAssignRewardDetail;
    })();

    GameMsg_BJL.SuperToolAddAssignRewardDetail = (function() {

        /**
         * Properties of a SuperToolAddAssignRewardDetail.
         * @memberof GameMsg_BJL
         * @interface ISuperToolAddAssignRewardDetail
         * @property {number} Idx SuperToolAddAssignRewardDetail Idx
         * @property {string} Description SuperToolAddAssignRewardDetail Description
         * @property {string} Reward SuperToolAddAssignRewardDetail Reward
         * @property {number} Status SuperToolAddAssignRewardDetail Status
         */

        /**
         * Constructs a new SuperToolAddAssignRewardDetail.
         * @memberof GameMsg_BJL
         * @classdesc Represents a SuperToolAddAssignRewardDetail.
         * @implements ISuperToolAddAssignRewardDetail
         * @constructor
         * @param {GameMsg_BJL.ISuperToolAddAssignRewardDetail=} [properties] Properties to set
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
         * @memberof GameMsg_BJL.SuperToolAddAssignRewardDetail
         * @instance
         */
        SuperToolAddAssignRewardDetail.prototype.Idx = 0;

        /**
         * SuperToolAddAssignRewardDetail Description.
         * @member {string} Description
         * @memberof GameMsg_BJL.SuperToolAddAssignRewardDetail
         * @instance
         */
        SuperToolAddAssignRewardDetail.prototype.Description = "";

        /**
         * SuperToolAddAssignRewardDetail Reward.
         * @member {string} Reward
         * @memberof GameMsg_BJL.SuperToolAddAssignRewardDetail
         * @instance
         */
        SuperToolAddAssignRewardDetail.prototype.Reward = "";

        /**
         * SuperToolAddAssignRewardDetail Status.
         * @member {number} Status
         * @memberof GameMsg_BJL.SuperToolAddAssignRewardDetail
         * @instance
         */
        SuperToolAddAssignRewardDetail.prototype.Status = 0;

        /**
         * Creates a new SuperToolAddAssignRewardDetail instance using the specified properties.
         * @function create
         * @memberof GameMsg_BJL.SuperToolAddAssignRewardDetail
         * @static
         * @param {GameMsg_BJL.ISuperToolAddAssignRewardDetail=} [properties] Properties to set
         * @returns {GameMsg_BJL.SuperToolAddAssignRewardDetail} SuperToolAddAssignRewardDetail instance
         */
        SuperToolAddAssignRewardDetail.create = function create(properties) {
            return new SuperToolAddAssignRewardDetail(properties);
        };

        /**
         * Encodes the specified SuperToolAddAssignRewardDetail message. Does not implicitly {@link GameMsg_BJL.SuperToolAddAssignRewardDetail.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_BJL.SuperToolAddAssignRewardDetail
         * @static
         * @param {GameMsg_BJL.ISuperToolAddAssignRewardDetail} message SuperToolAddAssignRewardDetail message or plain object to encode
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
         * Encodes the specified SuperToolAddAssignRewardDetail message, length delimited. Does not implicitly {@link GameMsg_BJL.SuperToolAddAssignRewardDetail.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_BJL.SuperToolAddAssignRewardDetail
         * @static
         * @param {GameMsg_BJL.ISuperToolAddAssignRewardDetail} message SuperToolAddAssignRewardDetail message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SuperToolAddAssignRewardDetail.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SuperToolAddAssignRewardDetail message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_BJL.SuperToolAddAssignRewardDetail
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_BJL.SuperToolAddAssignRewardDetail} SuperToolAddAssignRewardDetail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SuperToolAddAssignRewardDetail.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_BJL.SuperToolAddAssignRewardDetail();
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
         * @memberof GameMsg_BJL.SuperToolAddAssignRewardDetail
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_BJL.SuperToolAddAssignRewardDetail} SuperToolAddAssignRewardDetail
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
         * @memberof GameMsg_BJL.SuperToolAddAssignRewardDetail
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
         * @memberof GameMsg_BJL.SuperToolAddAssignRewardDetail
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_BJL.SuperToolAddAssignRewardDetail} SuperToolAddAssignRewardDetail
         */
        SuperToolAddAssignRewardDetail.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_BJL.SuperToolAddAssignRewardDetail)
                return object;
            var message = new $root.GameMsg_BJL.SuperToolAddAssignRewardDetail();
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
         * @memberof GameMsg_BJL.SuperToolAddAssignRewardDetail
         * @static
         * @param {GameMsg_BJL.SuperToolAddAssignRewardDetail} message SuperToolAddAssignRewardDetail
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
         * @memberof GameMsg_BJL.SuperToolAddAssignRewardDetail
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SuperToolAddAssignRewardDetail.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SuperToolAddAssignRewardDetail;
    })();

    GameMsg_BJL.SuperToolAssignRewardDetail = (function() {

        /**
         * Properties of a SuperToolAssignRewardDetail.
         * @memberof GameMsg_BJL
         * @interface ISuperToolAssignRewardDetail
         * @property {number} LogID SuperToolAssignRewardDetail LogID
         * @property {number} Idx SuperToolAssignRewardDetail Idx
         * @property {string} Description SuperToolAssignRewardDetail Description
         * @property {string} Reward SuperToolAssignRewardDetail Reward
         * @property {number} Status SuperToolAssignRewardDetail Status
         */

        /**
         * Constructs a new SuperToolAssignRewardDetail.
         * @memberof GameMsg_BJL
         * @classdesc Represents a SuperToolAssignRewardDetail.
         * @implements ISuperToolAssignRewardDetail
         * @constructor
         * @param {GameMsg_BJL.ISuperToolAssignRewardDetail=} [properties] Properties to set
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
         * @memberof GameMsg_BJL.SuperToolAssignRewardDetail
         * @instance
         */
        SuperToolAssignRewardDetail.prototype.LogID = 0;

        /**
         * SuperToolAssignRewardDetail Idx.
         * @member {number} Idx
         * @memberof GameMsg_BJL.SuperToolAssignRewardDetail
         * @instance
         */
        SuperToolAssignRewardDetail.prototype.Idx = 0;

        /**
         * SuperToolAssignRewardDetail Description.
         * @member {string} Description
         * @memberof GameMsg_BJL.SuperToolAssignRewardDetail
         * @instance
         */
        SuperToolAssignRewardDetail.prototype.Description = "";

        /**
         * SuperToolAssignRewardDetail Reward.
         * @member {string} Reward
         * @memberof GameMsg_BJL.SuperToolAssignRewardDetail
         * @instance
         */
        SuperToolAssignRewardDetail.prototype.Reward = "";

        /**
         * SuperToolAssignRewardDetail Status.
         * @member {number} Status
         * @memberof GameMsg_BJL.SuperToolAssignRewardDetail
         * @instance
         */
        SuperToolAssignRewardDetail.prototype.Status = 0;

        /**
         * Creates a new SuperToolAssignRewardDetail instance using the specified properties.
         * @function create
         * @memberof GameMsg_BJL.SuperToolAssignRewardDetail
         * @static
         * @param {GameMsg_BJL.ISuperToolAssignRewardDetail=} [properties] Properties to set
         * @returns {GameMsg_BJL.SuperToolAssignRewardDetail} SuperToolAssignRewardDetail instance
         */
        SuperToolAssignRewardDetail.create = function create(properties) {
            return new SuperToolAssignRewardDetail(properties);
        };

        /**
         * Encodes the specified SuperToolAssignRewardDetail message. Does not implicitly {@link GameMsg_BJL.SuperToolAssignRewardDetail.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_BJL.SuperToolAssignRewardDetail
         * @static
         * @param {GameMsg_BJL.ISuperToolAssignRewardDetail} message SuperToolAssignRewardDetail message or plain object to encode
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
         * Encodes the specified SuperToolAssignRewardDetail message, length delimited. Does not implicitly {@link GameMsg_BJL.SuperToolAssignRewardDetail.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_BJL.SuperToolAssignRewardDetail
         * @static
         * @param {GameMsg_BJL.ISuperToolAssignRewardDetail} message SuperToolAssignRewardDetail message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SuperToolAssignRewardDetail.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SuperToolAssignRewardDetail message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_BJL.SuperToolAssignRewardDetail
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_BJL.SuperToolAssignRewardDetail} SuperToolAssignRewardDetail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SuperToolAssignRewardDetail.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_BJL.SuperToolAssignRewardDetail();
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
         * @memberof GameMsg_BJL.SuperToolAssignRewardDetail
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_BJL.SuperToolAssignRewardDetail} SuperToolAssignRewardDetail
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
         * @memberof GameMsg_BJL.SuperToolAssignRewardDetail
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
         * @memberof GameMsg_BJL.SuperToolAssignRewardDetail
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_BJL.SuperToolAssignRewardDetail} SuperToolAssignRewardDetail
         */
        SuperToolAssignRewardDetail.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_BJL.SuperToolAssignRewardDetail)
                return object;
            var message = new $root.GameMsg_BJL.SuperToolAssignRewardDetail();
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
         * @memberof GameMsg_BJL.SuperToolAssignRewardDetail
         * @static
         * @param {GameMsg_BJL.SuperToolAssignRewardDetail} message SuperToolAssignRewardDetail
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
         * @memberof GameMsg_BJL.SuperToolAssignRewardDetail
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SuperToolAssignRewardDetail.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SuperToolAssignRewardDetail;
    })();

    GameMsg_BJL.SuperToolGetVipUserRequest = (function() {

        /**
         * Properties of a SuperToolGetVipUserRequest.
         * @memberof GameMsg_BJL
         * @interface ISuperToolGetVipUserRequest
         * @property {number} GameID SuperToolGetVipUserRequest GameID
         */

        /**
         * Constructs a new SuperToolGetVipUserRequest.
         * @memberof GameMsg_BJL
         * @classdesc Represents a SuperToolGetVipUserRequest.
         * @implements ISuperToolGetVipUserRequest
         * @constructor
         * @param {GameMsg_BJL.ISuperToolGetVipUserRequest=} [properties] Properties to set
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
         * @memberof GameMsg_BJL.SuperToolGetVipUserRequest
         * @instance
         */
        SuperToolGetVipUserRequest.prototype.GameID = 0;

        /**
         * Creates a new SuperToolGetVipUserRequest instance using the specified properties.
         * @function create
         * @memberof GameMsg_BJL.SuperToolGetVipUserRequest
         * @static
         * @param {GameMsg_BJL.ISuperToolGetVipUserRequest=} [properties] Properties to set
         * @returns {GameMsg_BJL.SuperToolGetVipUserRequest} SuperToolGetVipUserRequest instance
         */
        SuperToolGetVipUserRequest.create = function create(properties) {
            return new SuperToolGetVipUserRequest(properties);
        };

        /**
         * Encodes the specified SuperToolGetVipUserRequest message. Does not implicitly {@link GameMsg_BJL.SuperToolGetVipUserRequest.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_BJL.SuperToolGetVipUserRequest
         * @static
         * @param {GameMsg_BJL.ISuperToolGetVipUserRequest} message SuperToolGetVipUserRequest message or plain object to encode
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
         * Encodes the specified SuperToolGetVipUserRequest message, length delimited. Does not implicitly {@link GameMsg_BJL.SuperToolGetVipUserRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_BJL.SuperToolGetVipUserRequest
         * @static
         * @param {GameMsg_BJL.ISuperToolGetVipUserRequest} message SuperToolGetVipUserRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SuperToolGetVipUserRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SuperToolGetVipUserRequest message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_BJL.SuperToolGetVipUserRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_BJL.SuperToolGetVipUserRequest} SuperToolGetVipUserRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SuperToolGetVipUserRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_BJL.SuperToolGetVipUserRequest();
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
         * @memberof GameMsg_BJL.SuperToolGetVipUserRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_BJL.SuperToolGetVipUserRequest} SuperToolGetVipUserRequest
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
         * @memberof GameMsg_BJL.SuperToolGetVipUserRequest
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
         * @memberof GameMsg_BJL.SuperToolGetVipUserRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_BJL.SuperToolGetVipUserRequest} SuperToolGetVipUserRequest
         */
        SuperToolGetVipUserRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_BJL.SuperToolGetVipUserRequest)
                return object;
            var message = new $root.GameMsg_BJL.SuperToolGetVipUserRequest();
            if (object.GameID != null)
                message.GameID = object.GameID | 0;
            return message;
        };

        /**
         * Creates a plain object from a SuperToolGetVipUserRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_BJL.SuperToolGetVipUserRequest
         * @static
         * @param {GameMsg_BJL.SuperToolGetVipUserRequest} message SuperToolGetVipUserRequest
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
         * @memberof GameMsg_BJL.SuperToolGetVipUserRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SuperToolGetVipUserRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SuperToolGetVipUserRequest;
    })();

    GameMsg_BJL.SuperToolVipUserDataList = (function() {

        /**
         * Properties of a SuperToolVipUserDataList.
         * @memberof GameMsg_BJL
         * @interface ISuperToolVipUserDataList
         * @property {Array.<GameMsg_BJL.ISuperToolVipUserData>|null} [DataList] SuperToolVipUserDataList DataList
         */

        /**
         * Constructs a new SuperToolVipUserDataList.
         * @memberof GameMsg_BJL
         * @classdesc Represents a SuperToolVipUserDataList.
         * @implements ISuperToolVipUserDataList
         * @constructor
         * @param {GameMsg_BJL.ISuperToolVipUserDataList=} [properties] Properties to set
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
         * @member {Array.<GameMsg_BJL.ISuperToolVipUserData>} DataList
         * @memberof GameMsg_BJL.SuperToolVipUserDataList
         * @instance
         */
        SuperToolVipUserDataList.prototype.DataList = $util.emptyArray;

        /**
         * Creates a new SuperToolVipUserDataList instance using the specified properties.
         * @function create
         * @memberof GameMsg_BJL.SuperToolVipUserDataList
         * @static
         * @param {GameMsg_BJL.ISuperToolVipUserDataList=} [properties] Properties to set
         * @returns {GameMsg_BJL.SuperToolVipUserDataList} SuperToolVipUserDataList instance
         */
        SuperToolVipUserDataList.create = function create(properties) {
            return new SuperToolVipUserDataList(properties);
        };

        /**
         * Encodes the specified SuperToolVipUserDataList message. Does not implicitly {@link GameMsg_BJL.SuperToolVipUserDataList.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_BJL.SuperToolVipUserDataList
         * @static
         * @param {GameMsg_BJL.ISuperToolVipUserDataList} message SuperToolVipUserDataList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SuperToolVipUserDataList.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.DataList != null && message.DataList.length)
                for (var i = 0; i < message.DataList.length; ++i)
                    $root.GameMsg_BJL.SuperToolVipUserData.encode(message.DataList[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified SuperToolVipUserDataList message, length delimited. Does not implicitly {@link GameMsg_BJL.SuperToolVipUserDataList.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_BJL.SuperToolVipUserDataList
         * @static
         * @param {GameMsg_BJL.ISuperToolVipUserDataList} message SuperToolVipUserDataList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SuperToolVipUserDataList.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SuperToolVipUserDataList message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_BJL.SuperToolVipUserDataList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_BJL.SuperToolVipUserDataList} SuperToolVipUserDataList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SuperToolVipUserDataList.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_BJL.SuperToolVipUserDataList();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.DataList && message.DataList.length))
                        message.DataList = [];
                    message.DataList.push($root.GameMsg_BJL.SuperToolVipUserData.decode(reader, reader.uint32()));
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
         * @memberof GameMsg_BJL.SuperToolVipUserDataList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_BJL.SuperToolVipUserDataList} SuperToolVipUserDataList
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
         * @memberof GameMsg_BJL.SuperToolVipUserDataList
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
                    var error = $root.GameMsg_BJL.SuperToolVipUserData.verify(message.DataList[i]);
                    if (error)
                        return "DataList." + error;
                }
            }
            return null;
        };

        /**
         * Creates a SuperToolVipUserDataList message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_BJL.SuperToolVipUserDataList
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_BJL.SuperToolVipUserDataList} SuperToolVipUserDataList
         */
        SuperToolVipUserDataList.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_BJL.SuperToolVipUserDataList)
                return object;
            var message = new $root.GameMsg_BJL.SuperToolVipUserDataList();
            if (object.DataList) {
                if (!Array.isArray(object.DataList))
                    throw TypeError(".GameMsg_BJL.SuperToolVipUserDataList.DataList: array expected");
                message.DataList = [];
                for (var i = 0; i < object.DataList.length; ++i) {
                    if (typeof object.DataList[i] !== "object")
                        throw TypeError(".GameMsg_BJL.SuperToolVipUserDataList.DataList: object expected");
                    message.DataList[i] = $root.GameMsg_BJL.SuperToolVipUserData.fromObject(object.DataList[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a SuperToolVipUserDataList message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_BJL.SuperToolVipUserDataList
         * @static
         * @param {GameMsg_BJL.SuperToolVipUserDataList} message SuperToolVipUserDataList
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
                    object.DataList[j] = $root.GameMsg_BJL.SuperToolVipUserData.toObject(message.DataList[j], options);
            }
            return object;
        };

        /**
         * Converts this SuperToolVipUserDataList to JSON.
         * @function toJSON
         * @memberof GameMsg_BJL.SuperToolVipUserDataList
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SuperToolVipUserDataList.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SuperToolVipUserDataList;
    })();

    GameMsg_BJL.SuperToolVipUserData = (function() {

        /**
         * Properties of a SuperToolVipUserData.
         * @memberof GameMsg_BJL
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
         * @memberof GameMsg_BJL
         * @classdesc Represents a SuperToolVipUserData.
         * @implements ISuperToolVipUserData
         * @constructor
         * @param {GameMsg_BJL.ISuperToolVipUserData=} [properties] Properties to set
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
         * @memberof GameMsg_BJL.SuperToolVipUserData
         * @instance
         */
        SuperToolVipUserData.prototype.UserID = 0;

        /**
         * SuperToolVipUserData AssignAmount.
         * @member {number|Long} AssignAmount
         * @memberof GameMsg_BJL.SuperToolVipUserData
         * @instance
         */
        SuperToolVipUserData.prototype.AssignAmount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * SuperToolVipUserData AssignRate.
         * @member {number} AssignRate
         * @memberof GameMsg_BJL.SuperToolVipUserData
         * @instance
         */
        SuperToolVipUserData.prototype.AssignRate = 0;

        /**
         * SuperToolVipUserData CompleteAmount.
         * @member {number|Long} CompleteAmount
         * @memberof GameMsg_BJL.SuperToolVipUserData
         * @instance
         */
        SuperToolVipUserData.prototype.CompleteAmount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * SuperToolVipUserData Complete.
         * @member {number} Complete
         * @memberof GameMsg_BJL.SuperToolVipUserData
         * @instance
         */
        SuperToolVipUserData.prototype.Complete = 0;

        /**
         * SuperToolVipUserData Status.
         * @member {number} Status
         * @memberof GameMsg_BJL.SuperToolVipUserData
         * @instance
         */
        SuperToolVipUserData.prototype.Status = 0;

        /**
         * SuperToolVipUserData TotalAll.
         * @member {number} TotalAll
         * @memberof GameMsg_BJL.SuperToolVipUserData
         * @instance
         */
        SuperToolVipUserData.prototype.TotalAll = 0;

        /**
         * SuperToolVipUserData TotalUserWinLose.
         * @member {number} TotalUserWinLose
         * @memberof GameMsg_BJL.SuperToolVipUserData
         * @instance
         */
        SuperToolVipUserData.prototype.TotalUserWinLose = 0;

        /**
         * SuperToolVipUserData TodayUserWinLose.
         * @member {number} TodayUserWinLose
         * @memberof GameMsg_BJL.SuperToolVipUserData
         * @instance
         */
        SuperToolVipUserData.prototype.TodayUserWinLose = 0;

        /**
         * Creates a new SuperToolVipUserData instance using the specified properties.
         * @function create
         * @memberof GameMsg_BJL.SuperToolVipUserData
         * @static
         * @param {GameMsg_BJL.ISuperToolVipUserData=} [properties] Properties to set
         * @returns {GameMsg_BJL.SuperToolVipUserData} SuperToolVipUserData instance
         */
        SuperToolVipUserData.create = function create(properties) {
            return new SuperToolVipUserData(properties);
        };

        /**
         * Encodes the specified SuperToolVipUserData message. Does not implicitly {@link GameMsg_BJL.SuperToolVipUserData.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_BJL.SuperToolVipUserData
         * @static
         * @param {GameMsg_BJL.ISuperToolVipUserData} message SuperToolVipUserData message or plain object to encode
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
         * Encodes the specified SuperToolVipUserData message, length delimited. Does not implicitly {@link GameMsg_BJL.SuperToolVipUserData.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_BJL.SuperToolVipUserData
         * @static
         * @param {GameMsg_BJL.ISuperToolVipUserData} message SuperToolVipUserData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SuperToolVipUserData.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SuperToolVipUserData message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_BJL.SuperToolVipUserData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_BJL.SuperToolVipUserData} SuperToolVipUserData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SuperToolVipUserData.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_BJL.SuperToolVipUserData();
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
         * @memberof GameMsg_BJL.SuperToolVipUserData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_BJL.SuperToolVipUserData} SuperToolVipUserData
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
         * @memberof GameMsg_BJL.SuperToolVipUserData
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
         * @memberof GameMsg_BJL.SuperToolVipUserData
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_BJL.SuperToolVipUserData} SuperToolVipUserData
         */
        SuperToolVipUserData.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_BJL.SuperToolVipUserData)
                return object;
            var message = new $root.GameMsg_BJL.SuperToolVipUserData();
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
         * @memberof GameMsg_BJL.SuperToolVipUserData
         * @static
         * @param {GameMsg_BJL.SuperToolVipUserData} message SuperToolVipUserData
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
         * @memberof GameMsg_BJL.SuperToolVipUserData
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SuperToolVipUserData.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SuperToolVipUserData;
    })();

    GameMsg_BJL.SuperToolFishGetSystemRewardDetail = (function() {

        /**
         * Properties of a SuperToolFishGetSystemRewardDetail.
         * @memberof GameMsg_BJL
         * @interface ISuperToolFishGetSystemRewardDetail
         * @property {Array.<GameMsg_BJL.IFishSystemRewardDataList>|null} [FishRewardList] SuperToolFishGetSystemRewardDetail FishRewardList
         */

        /**
         * Constructs a new SuperToolFishGetSystemRewardDetail.
         * @memberof GameMsg_BJL
         * @classdesc Represents a SuperToolFishGetSystemRewardDetail.
         * @implements ISuperToolFishGetSystemRewardDetail
         * @constructor
         * @param {GameMsg_BJL.ISuperToolFishGetSystemRewardDetail=} [properties] Properties to set
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
         * @member {Array.<GameMsg_BJL.IFishSystemRewardDataList>} FishRewardList
         * @memberof GameMsg_BJL.SuperToolFishGetSystemRewardDetail
         * @instance
         */
        SuperToolFishGetSystemRewardDetail.prototype.FishRewardList = $util.emptyArray;

        /**
         * Creates a new SuperToolFishGetSystemRewardDetail instance using the specified properties.
         * @function create
         * @memberof GameMsg_BJL.SuperToolFishGetSystemRewardDetail
         * @static
         * @param {GameMsg_BJL.ISuperToolFishGetSystemRewardDetail=} [properties] Properties to set
         * @returns {GameMsg_BJL.SuperToolFishGetSystemRewardDetail} SuperToolFishGetSystemRewardDetail instance
         */
        SuperToolFishGetSystemRewardDetail.create = function create(properties) {
            return new SuperToolFishGetSystemRewardDetail(properties);
        };

        /**
         * Encodes the specified SuperToolFishGetSystemRewardDetail message. Does not implicitly {@link GameMsg_BJL.SuperToolFishGetSystemRewardDetail.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_BJL.SuperToolFishGetSystemRewardDetail
         * @static
         * @param {GameMsg_BJL.ISuperToolFishGetSystemRewardDetail} message SuperToolFishGetSystemRewardDetail message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SuperToolFishGetSystemRewardDetail.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.FishRewardList != null && message.FishRewardList.length)
                for (var i = 0; i < message.FishRewardList.length; ++i)
                    $root.GameMsg_BJL.FishSystemRewardDataList.encode(message.FishRewardList[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified SuperToolFishGetSystemRewardDetail message, length delimited. Does not implicitly {@link GameMsg_BJL.SuperToolFishGetSystemRewardDetail.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_BJL.SuperToolFishGetSystemRewardDetail
         * @static
         * @param {GameMsg_BJL.ISuperToolFishGetSystemRewardDetail} message SuperToolFishGetSystemRewardDetail message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SuperToolFishGetSystemRewardDetail.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SuperToolFishGetSystemRewardDetail message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_BJL.SuperToolFishGetSystemRewardDetail
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_BJL.SuperToolFishGetSystemRewardDetail} SuperToolFishGetSystemRewardDetail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SuperToolFishGetSystemRewardDetail.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_BJL.SuperToolFishGetSystemRewardDetail();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.FishRewardList && message.FishRewardList.length))
                        message.FishRewardList = [];
                    message.FishRewardList.push($root.GameMsg_BJL.FishSystemRewardDataList.decode(reader, reader.uint32()));
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
         * @memberof GameMsg_BJL.SuperToolFishGetSystemRewardDetail
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_BJL.SuperToolFishGetSystemRewardDetail} SuperToolFishGetSystemRewardDetail
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
         * @memberof GameMsg_BJL.SuperToolFishGetSystemRewardDetail
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
                    var error = $root.GameMsg_BJL.FishSystemRewardDataList.verify(message.FishRewardList[i]);
                    if (error)
                        return "FishRewardList." + error;
                }
            }
            return null;
        };

        /**
         * Creates a SuperToolFishGetSystemRewardDetail message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_BJL.SuperToolFishGetSystemRewardDetail
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_BJL.SuperToolFishGetSystemRewardDetail} SuperToolFishGetSystemRewardDetail
         */
        SuperToolFishGetSystemRewardDetail.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_BJL.SuperToolFishGetSystemRewardDetail)
                return object;
            var message = new $root.GameMsg_BJL.SuperToolFishGetSystemRewardDetail();
            if (object.FishRewardList) {
                if (!Array.isArray(object.FishRewardList))
                    throw TypeError(".GameMsg_BJL.SuperToolFishGetSystemRewardDetail.FishRewardList: array expected");
                message.FishRewardList = [];
                for (var i = 0; i < object.FishRewardList.length; ++i) {
                    if (typeof object.FishRewardList[i] !== "object")
                        throw TypeError(".GameMsg_BJL.SuperToolFishGetSystemRewardDetail.FishRewardList: object expected");
                    message.FishRewardList[i] = $root.GameMsg_BJL.FishSystemRewardDataList.fromObject(object.FishRewardList[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a SuperToolFishGetSystemRewardDetail message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_BJL.SuperToolFishGetSystemRewardDetail
         * @static
         * @param {GameMsg_BJL.SuperToolFishGetSystemRewardDetail} message SuperToolFishGetSystemRewardDetail
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
                    object.FishRewardList[j] = $root.GameMsg_BJL.FishSystemRewardDataList.toObject(message.FishRewardList[j], options);
            }
            return object;
        };

        /**
         * Converts this SuperToolFishGetSystemRewardDetail to JSON.
         * @function toJSON
         * @memberof GameMsg_BJL.SuperToolFishGetSystemRewardDetail
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SuperToolFishGetSystemRewardDetail.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SuperToolFishGetSystemRewardDetail;
    })();

    GameMsg_BJL.FishSystemRewardDataList = (function() {

        /**
         * Properties of a FishSystemRewardDataList.
         * @memberof GameMsg_BJL
         * @interface IFishSystemRewardDataList
         * @property {number} FishID FishSystemRewardDataList FishID
         * @property {number|Long} Amount FishSystemRewardDataList Amount
         * @property {number|Long} FinishAmount FishSystemRewardDataList FinishAmount
         * @property {number} Rate FishSystemRewardDataList Rate
         * @property {number} Status FishSystemRewardDataList Status
         */

        /**
         * Constructs a new FishSystemRewardDataList.
         * @memberof GameMsg_BJL
         * @classdesc Represents a FishSystemRewardDataList.
         * @implements IFishSystemRewardDataList
         * @constructor
         * @param {GameMsg_BJL.IFishSystemRewardDataList=} [properties] Properties to set
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
         * @memberof GameMsg_BJL.FishSystemRewardDataList
         * @instance
         */
        FishSystemRewardDataList.prototype.FishID = 0;

        /**
         * FishSystemRewardDataList Amount.
         * @member {number|Long} Amount
         * @memberof GameMsg_BJL.FishSystemRewardDataList
         * @instance
         */
        FishSystemRewardDataList.prototype.Amount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * FishSystemRewardDataList FinishAmount.
         * @member {number|Long} FinishAmount
         * @memberof GameMsg_BJL.FishSystemRewardDataList
         * @instance
         */
        FishSystemRewardDataList.prototype.FinishAmount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * FishSystemRewardDataList Rate.
         * @member {number} Rate
         * @memberof GameMsg_BJL.FishSystemRewardDataList
         * @instance
         */
        FishSystemRewardDataList.prototype.Rate = 0;

        /**
         * FishSystemRewardDataList Status.
         * @member {number} Status
         * @memberof GameMsg_BJL.FishSystemRewardDataList
         * @instance
         */
        FishSystemRewardDataList.prototype.Status = 0;

        /**
         * Creates a new FishSystemRewardDataList instance using the specified properties.
         * @function create
         * @memberof GameMsg_BJL.FishSystemRewardDataList
         * @static
         * @param {GameMsg_BJL.IFishSystemRewardDataList=} [properties] Properties to set
         * @returns {GameMsg_BJL.FishSystemRewardDataList} FishSystemRewardDataList instance
         */
        FishSystemRewardDataList.create = function create(properties) {
            return new FishSystemRewardDataList(properties);
        };

        /**
         * Encodes the specified FishSystemRewardDataList message. Does not implicitly {@link GameMsg_BJL.FishSystemRewardDataList.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_BJL.FishSystemRewardDataList
         * @static
         * @param {GameMsg_BJL.IFishSystemRewardDataList} message FishSystemRewardDataList message or plain object to encode
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
         * Encodes the specified FishSystemRewardDataList message, length delimited. Does not implicitly {@link GameMsg_BJL.FishSystemRewardDataList.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_BJL.FishSystemRewardDataList
         * @static
         * @param {GameMsg_BJL.IFishSystemRewardDataList} message FishSystemRewardDataList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FishSystemRewardDataList.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FishSystemRewardDataList message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_BJL.FishSystemRewardDataList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_BJL.FishSystemRewardDataList} FishSystemRewardDataList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FishSystemRewardDataList.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_BJL.FishSystemRewardDataList();
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
         * @memberof GameMsg_BJL.FishSystemRewardDataList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_BJL.FishSystemRewardDataList} FishSystemRewardDataList
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
         * @memberof GameMsg_BJL.FishSystemRewardDataList
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
         * @memberof GameMsg_BJL.FishSystemRewardDataList
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_BJL.FishSystemRewardDataList} FishSystemRewardDataList
         */
        FishSystemRewardDataList.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_BJL.FishSystemRewardDataList)
                return object;
            var message = new $root.GameMsg_BJL.FishSystemRewardDataList();
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
         * @memberof GameMsg_BJL.FishSystemRewardDataList
         * @static
         * @param {GameMsg_BJL.FishSystemRewardDataList} message FishSystemRewardDataList
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
         * @memberof GameMsg_BJL.FishSystemRewardDataList
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FishSystemRewardDataList.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return FishSystemRewardDataList;
    })();

    GameMsg_BJL.SuperToolFishGetVIPUserRewardDetail = (function() {

        /**
         * Properties of a SuperToolFishGetVIPUserRewardDetail.
         * @memberof GameMsg_BJL
         * @interface ISuperToolFishGetVIPUserRewardDetail
         * @property {Array.<GameMsg_BJL.IFishVIPUserRewardDataList>|null} [FishVIPUserList] SuperToolFishGetVIPUserRewardDetail FishVIPUserList
         */

        /**
         * Constructs a new SuperToolFishGetVIPUserRewardDetail.
         * @memberof GameMsg_BJL
         * @classdesc Represents a SuperToolFishGetVIPUserRewardDetail.
         * @implements ISuperToolFishGetVIPUserRewardDetail
         * @constructor
         * @param {GameMsg_BJL.ISuperToolFishGetVIPUserRewardDetail=} [properties] Properties to set
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
         * @member {Array.<GameMsg_BJL.IFishVIPUserRewardDataList>} FishVIPUserList
         * @memberof GameMsg_BJL.SuperToolFishGetVIPUserRewardDetail
         * @instance
         */
        SuperToolFishGetVIPUserRewardDetail.prototype.FishVIPUserList = $util.emptyArray;

        /**
         * Creates a new SuperToolFishGetVIPUserRewardDetail instance using the specified properties.
         * @function create
         * @memberof GameMsg_BJL.SuperToolFishGetVIPUserRewardDetail
         * @static
         * @param {GameMsg_BJL.ISuperToolFishGetVIPUserRewardDetail=} [properties] Properties to set
         * @returns {GameMsg_BJL.SuperToolFishGetVIPUserRewardDetail} SuperToolFishGetVIPUserRewardDetail instance
         */
        SuperToolFishGetVIPUserRewardDetail.create = function create(properties) {
            return new SuperToolFishGetVIPUserRewardDetail(properties);
        };

        /**
         * Encodes the specified SuperToolFishGetVIPUserRewardDetail message. Does not implicitly {@link GameMsg_BJL.SuperToolFishGetVIPUserRewardDetail.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_BJL.SuperToolFishGetVIPUserRewardDetail
         * @static
         * @param {GameMsg_BJL.ISuperToolFishGetVIPUserRewardDetail} message SuperToolFishGetVIPUserRewardDetail message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SuperToolFishGetVIPUserRewardDetail.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.FishVIPUserList != null && message.FishVIPUserList.length)
                for (var i = 0; i < message.FishVIPUserList.length; ++i)
                    $root.GameMsg_BJL.FishVIPUserRewardDataList.encode(message.FishVIPUserList[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified SuperToolFishGetVIPUserRewardDetail message, length delimited. Does not implicitly {@link GameMsg_BJL.SuperToolFishGetVIPUserRewardDetail.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_BJL.SuperToolFishGetVIPUserRewardDetail
         * @static
         * @param {GameMsg_BJL.ISuperToolFishGetVIPUserRewardDetail} message SuperToolFishGetVIPUserRewardDetail message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SuperToolFishGetVIPUserRewardDetail.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SuperToolFishGetVIPUserRewardDetail message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_BJL.SuperToolFishGetVIPUserRewardDetail
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_BJL.SuperToolFishGetVIPUserRewardDetail} SuperToolFishGetVIPUserRewardDetail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SuperToolFishGetVIPUserRewardDetail.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_BJL.SuperToolFishGetVIPUserRewardDetail();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.FishVIPUserList && message.FishVIPUserList.length))
                        message.FishVIPUserList = [];
                    message.FishVIPUserList.push($root.GameMsg_BJL.FishVIPUserRewardDataList.decode(reader, reader.uint32()));
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
         * @memberof GameMsg_BJL.SuperToolFishGetVIPUserRewardDetail
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_BJL.SuperToolFishGetVIPUserRewardDetail} SuperToolFishGetVIPUserRewardDetail
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
         * @memberof GameMsg_BJL.SuperToolFishGetVIPUserRewardDetail
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
                    var error = $root.GameMsg_BJL.FishVIPUserRewardDataList.verify(message.FishVIPUserList[i]);
                    if (error)
                        return "FishVIPUserList." + error;
                }
            }
            return null;
        };

        /**
         * Creates a SuperToolFishGetVIPUserRewardDetail message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_BJL.SuperToolFishGetVIPUserRewardDetail
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_BJL.SuperToolFishGetVIPUserRewardDetail} SuperToolFishGetVIPUserRewardDetail
         */
        SuperToolFishGetVIPUserRewardDetail.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_BJL.SuperToolFishGetVIPUserRewardDetail)
                return object;
            var message = new $root.GameMsg_BJL.SuperToolFishGetVIPUserRewardDetail();
            if (object.FishVIPUserList) {
                if (!Array.isArray(object.FishVIPUserList))
                    throw TypeError(".GameMsg_BJL.SuperToolFishGetVIPUserRewardDetail.FishVIPUserList: array expected");
                message.FishVIPUserList = [];
                for (var i = 0; i < object.FishVIPUserList.length; ++i) {
                    if (typeof object.FishVIPUserList[i] !== "object")
                        throw TypeError(".GameMsg_BJL.SuperToolFishGetVIPUserRewardDetail.FishVIPUserList: object expected");
                    message.FishVIPUserList[i] = $root.GameMsg_BJL.FishVIPUserRewardDataList.fromObject(object.FishVIPUserList[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a SuperToolFishGetVIPUserRewardDetail message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_BJL.SuperToolFishGetVIPUserRewardDetail
         * @static
         * @param {GameMsg_BJL.SuperToolFishGetVIPUserRewardDetail} message SuperToolFishGetVIPUserRewardDetail
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
                    object.FishVIPUserList[j] = $root.GameMsg_BJL.FishVIPUserRewardDataList.toObject(message.FishVIPUserList[j], options);
            }
            return object;
        };

        /**
         * Converts this SuperToolFishGetVIPUserRewardDetail to JSON.
         * @function toJSON
         * @memberof GameMsg_BJL.SuperToolFishGetVIPUserRewardDetail
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SuperToolFishGetVIPUserRewardDetail.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SuperToolFishGetVIPUserRewardDetail;
    })();

    GameMsg_BJL.FishVIPUserRewardDataList = (function() {

        /**
         * Properties of a FishVIPUserRewardDataList.
         * @memberof GameMsg_BJL
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
         * @memberof GameMsg_BJL
         * @classdesc Represents a FishVIPUserRewardDataList.
         * @implements IFishVIPUserRewardDataList
         * @constructor
         * @param {GameMsg_BJL.IFishVIPUserRewardDataList=} [properties] Properties to set
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
         * @memberof GameMsg_BJL.FishVIPUserRewardDataList
         * @instance
         */
        FishVIPUserRewardDataList.prototype.UserID = 0;

        /**
         * FishVIPUserRewardDataList AssignAmount.
         * @member {number|Long} AssignAmount
         * @memberof GameMsg_BJL.FishVIPUserRewardDataList
         * @instance
         */
        FishVIPUserRewardDataList.prototype.AssignAmount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * FishVIPUserRewardDataList Rate.
         * @member {number} Rate
         * @memberof GameMsg_BJL.FishVIPUserRewardDataList
         * @instance
         */
        FishVIPUserRewardDataList.prototype.Rate = 0;

        /**
         * FishVIPUserRewardDataList FinishAmount.
         * @member {number|Long} FinishAmount
         * @memberof GameMsg_BJL.FishVIPUserRewardDataList
         * @instance
         */
        FishVIPUserRewardDataList.prototype.FinishAmount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * FishVIPUserRewardDataList Status.
         * @member {number} Status
         * @memberof GameMsg_BJL.FishVIPUserRewardDataList
         * @instance
         */
        FishVIPUserRewardDataList.prototype.Status = 0;

        /**
         * FishVIPUserRewardDataList SumAssignAmount.
         * @member {number|Long} SumAssignAmount
         * @memberof GameMsg_BJL.FishVIPUserRewardDataList
         * @instance
         */
        FishVIPUserRewardDataList.prototype.SumAssignAmount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new FishVIPUserRewardDataList instance using the specified properties.
         * @function create
         * @memberof GameMsg_BJL.FishVIPUserRewardDataList
         * @static
         * @param {GameMsg_BJL.IFishVIPUserRewardDataList=} [properties] Properties to set
         * @returns {GameMsg_BJL.FishVIPUserRewardDataList} FishVIPUserRewardDataList instance
         */
        FishVIPUserRewardDataList.create = function create(properties) {
            return new FishVIPUserRewardDataList(properties);
        };

        /**
         * Encodes the specified FishVIPUserRewardDataList message. Does not implicitly {@link GameMsg_BJL.FishVIPUserRewardDataList.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_BJL.FishVIPUserRewardDataList
         * @static
         * @param {GameMsg_BJL.IFishVIPUserRewardDataList} message FishVIPUserRewardDataList message or plain object to encode
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
         * Encodes the specified FishVIPUserRewardDataList message, length delimited. Does not implicitly {@link GameMsg_BJL.FishVIPUserRewardDataList.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_BJL.FishVIPUserRewardDataList
         * @static
         * @param {GameMsg_BJL.IFishVIPUserRewardDataList} message FishVIPUserRewardDataList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FishVIPUserRewardDataList.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FishVIPUserRewardDataList message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_BJL.FishVIPUserRewardDataList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_BJL.FishVIPUserRewardDataList} FishVIPUserRewardDataList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FishVIPUserRewardDataList.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_BJL.FishVIPUserRewardDataList();
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
         * @memberof GameMsg_BJL.FishVIPUserRewardDataList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_BJL.FishVIPUserRewardDataList} FishVIPUserRewardDataList
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
         * @memberof GameMsg_BJL.FishVIPUserRewardDataList
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
         * @memberof GameMsg_BJL.FishVIPUserRewardDataList
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_BJL.FishVIPUserRewardDataList} FishVIPUserRewardDataList
         */
        FishVIPUserRewardDataList.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_BJL.FishVIPUserRewardDataList)
                return object;
            var message = new $root.GameMsg_BJL.FishVIPUserRewardDataList();
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
         * @memberof GameMsg_BJL.FishVIPUserRewardDataList
         * @static
         * @param {GameMsg_BJL.FishVIPUserRewardDataList} message FishVIPUserRewardDataList
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
         * @memberof GameMsg_BJL.FishVIPUserRewardDataList
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FishVIPUserRewardDataList.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return FishVIPUserRewardDataList;
    })();

    GameMsg_BJL.SuperToolFishUpdSystemRewardDetail = (function() {

        /**
         * Properties of a SuperToolFishUpdSystemRewardDetail.
         * @memberof GameMsg_BJL
         * @interface ISuperToolFishUpdSystemRewardDetail
         * @property {number} FlagID SuperToolFishUpdSystemRewardDetail FlagID
         * @property {Array.<GameMsg_BJL.ISuperToolFishUpdSystemRewardDataList>|null} [FishRewardList] SuperToolFishUpdSystemRewardDetail FishRewardList
         */

        /**
         * Constructs a new SuperToolFishUpdSystemRewardDetail.
         * @memberof GameMsg_BJL
         * @classdesc Represents a SuperToolFishUpdSystemRewardDetail.
         * @implements ISuperToolFishUpdSystemRewardDetail
         * @constructor
         * @param {GameMsg_BJL.ISuperToolFishUpdSystemRewardDetail=} [properties] Properties to set
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
         * @memberof GameMsg_BJL.SuperToolFishUpdSystemRewardDetail
         * @instance
         */
        SuperToolFishUpdSystemRewardDetail.prototype.FlagID = 0;

        /**
         * SuperToolFishUpdSystemRewardDetail FishRewardList.
         * @member {Array.<GameMsg_BJL.ISuperToolFishUpdSystemRewardDataList>} FishRewardList
         * @memberof GameMsg_BJL.SuperToolFishUpdSystemRewardDetail
         * @instance
         */
        SuperToolFishUpdSystemRewardDetail.prototype.FishRewardList = $util.emptyArray;

        /**
         * Creates a new SuperToolFishUpdSystemRewardDetail instance using the specified properties.
         * @function create
         * @memberof GameMsg_BJL.SuperToolFishUpdSystemRewardDetail
         * @static
         * @param {GameMsg_BJL.ISuperToolFishUpdSystemRewardDetail=} [properties] Properties to set
         * @returns {GameMsg_BJL.SuperToolFishUpdSystemRewardDetail} SuperToolFishUpdSystemRewardDetail instance
         */
        SuperToolFishUpdSystemRewardDetail.create = function create(properties) {
            return new SuperToolFishUpdSystemRewardDetail(properties);
        };

        /**
         * Encodes the specified SuperToolFishUpdSystemRewardDetail message. Does not implicitly {@link GameMsg_BJL.SuperToolFishUpdSystemRewardDetail.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_BJL.SuperToolFishUpdSystemRewardDetail
         * @static
         * @param {GameMsg_BJL.ISuperToolFishUpdSystemRewardDetail} message SuperToolFishUpdSystemRewardDetail message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SuperToolFishUpdSystemRewardDetail.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.FlagID);
            if (message.FishRewardList != null && message.FishRewardList.length)
                for (var i = 0; i < message.FishRewardList.length; ++i)
                    $root.GameMsg_BJL.SuperToolFishUpdSystemRewardDataList.encode(message.FishRewardList[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified SuperToolFishUpdSystemRewardDetail message, length delimited. Does not implicitly {@link GameMsg_BJL.SuperToolFishUpdSystemRewardDetail.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_BJL.SuperToolFishUpdSystemRewardDetail
         * @static
         * @param {GameMsg_BJL.ISuperToolFishUpdSystemRewardDetail} message SuperToolFishUpdSystemRewardDetail message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SuperToolFishUpdSystemRewardDetail.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SuperToolFishUpdSystemRewardDetail message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_BJL.SuperToolFishUpdSystemRewardDetail
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_BJL.SuperToolFishUpdSystemRewardDetail} SuperToolFishUpdSystemRewardDetail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SuperToolFishUpdSystemRewardDetail.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_BJL.SuperToolFishUpdSystemRewardDetail();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.FlagID = reader.int32();
                    break;
                case 2:
                    if (!(message.FishRewardList && message.FishRewardList.length))
                        message.FishRewardList = [];
                    message.FishRewardList.push($root.GameMsg_BJL.SuperToolFishUpdSystemRewardDataList.decode(reader, reader.uint32()));
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
         * @memberof GameMsg_BJL.SuperToolFishUpdSystemRewardDetail
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_BJL.SuperToolFishUpdSystemRewardDetail} SuperToolFishUpdSystemRewardDetail
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
         * @memberof GameMsg_BJL.SuperToolFishUpdSystemRewardDetail
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
                    var error = $root.GameMsg_BJL.SuperToolFishUpdSystemRewardDataList.verify(message.FishRewardList[i]);
                    if (error)
                        return "FishRewardList." + error;
                }
            }
            return null;
        };

        /**
         * Creates a SuperToolFishUpdSystemRewardDetail message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_BJL.SuperToolFishUpdSystemRewardDetail
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_BJL.SuperToolFishUpdSystemRewardDetail} SuperToolFishUpdSystemRewardDetail
         */
        SuperToolFishUpdSystemRewardDetail.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_BJL.SuperToolFishUpdSystemRewardDetail)
                return object;
            var message = new $root.GameMsg_BJL.SuperToolFishUpdSystemRewardDetail();
            if (object.FlagID != null)
                message.FlagID = object.FlagID | 0;
            if (object.FishRewardList) {
                if (!Array.isArray(object.FishRewardList))
                    throw TypeError(".GameMsg_BJL.SuperToolFishUpdSystemRewardDetail.FishRewardList: array expected");
                message.FishRewardList = [];
                for (var i = 0; i < object.FishRewardList.length; ++i) {
                    if (typeof object.FishRewardList[i] !== "object")
                        throw TypeError(".GameMsg_BJL.SuperToolFishUpdSystemRewardDetail.FishRewardList: object expected");
                    message.FishRewardList[i] = $root.GameMsg_BJL.SuperToolFishUpdSystemRewardDataList.fromObject(object.FishRewardList[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a SuperToolFishUpdSystemRewardDetail message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_BJL.SuperToolFishUpdSystemRewardDetail
         * @static
         * @param {GameMsg_BJL.SuperToolFishUpdSystemRewardDetail} message SuperToolFishUpdSystemRewardDetail
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
                    object.FishRewardList[j] = $root.GameMsg_BJL.SuperToolFishUpdSystemRewardDataList.toObject(message.FishRewardList[j], options);
            }
            return object;
        };

        /**
         * Converts this SuperToolFishUpdSystemRewardDetail to JSON.
         * @function toJSON
         * @memberof GameMsg_BJL.SuperToolFishUpdSystemRewardDetail
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SuperToolFishUpdSystemRewardDetail.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SuperToolFishUpdSystemRewardDetail;
    })();

    GameMsg_BJL.SuperToolFishUpdSystemRewardDataList = (function() {

        /**
         * Properties of a SuperToolFishUpdSystemRewardDataList.
         * @memberof GameMsg_BJL
         * @interface ISuperToolFishUpdSystemRewardDataList
         * @property {number} FishID SuperToolFishUpdSystemRewardDataList FishID
         * @property {number|Long} FinishAmount SuperToolFishUpdSystemRewardDataList FinishAmount
         */

        /**
         * Constructs a new SuperToolFishUpdSystemRewardDataList.
         * @memberof GameMsg_BJL
         * @classdesc Represents a SuperToolFishUpdSystemRewardDataList.
         * @implements ISuperToolFishUpdSystemRewardDataList
         * @constructor
         * @param {GameMsg_BJL.ISuperToolFishUpdSystemRewardDataList=} [properties] Properties to set
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
         * @memberof GameMsg_BJL.SuperToolFishUpdSystemRewardDataList
         * @instance
         */
        SuperToolFishUpdSystemRewardDataList.prototype.FishID = 0;

        /**
         * SuperToolFishUpdSystemRewardDataList FinishAmount.
         * @member {number|Long} FinishAmount
         * @memberof GameMsg_BJL.SuperToolFishUpdSystemRewardDataList
         * @instance
         */
        SuperToolFishUpdSystemRewardDataList.prototype.FinishAmount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new SuperToolFishUpdSystemRewardDataList instance using the specified properties.
         * @function create
         * @memberof GameMsg_BJL.SuperToolFishUpdSystemRewardDataList
         * @static
         * @param {GameMsg_BJL.ISuperToolFishUpdSystemRewardDataList=} [properties] Properties to set
         * @returns {GameMsg_BJL.SuperToolFishUpdSystemRewardDataList} SuperToolFishUpdSystemRewardDataList instance
         */
        SuperToolFishUpdSystemRewardDataList.create = function create(properties) {
            return new SuperToolFishUpdSystemRewardDataList(properties);
        };

        /**
         * Encodes the specified SuperToolFishUpdSystemRewardDataList message. Does not implicitly {@link GameMsg_BJL.SuperToolFishUpdSystemRewardDataList.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_BJL.SuperToolFishUpdSystemRewardDataList
         * @static
         * @param {GameMsg_BJL.ISuperToolFishUpdSystemRewardDataList} message SuperToolFishUpdSystemRewardDataList message or plain object to encode
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
         * Encodes the specified SuperToolFishUpdSystemRewardDataList message, length delimited. Does not implicitly {@link GameMsg_BJL.SuperToolFishUpdSystemRewardDataList.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_BJL.SuperToolFishUpdSystemRewardDataList
         * @static
         * @param {GameMsg_BJL.ISuperToolFishUpdSystemRewardDataList} message SuperToolFishUpdSystemRewardDataList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SuperToolFishUpdSystemRewardDataList.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SuperToolFishUpdSystemRewardDataList message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_BJL.SuperToolFishUpdSystemRewardDataList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_BJL.SuperToolFishUpdSystemRewardDataList} SuperToolFishUpdSystemRewardDataList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SuperToolFishUpdSystemRewardDataList.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_BJL.SuperToolFishUpdSystemRewardDataList();
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
         * @memberof GameMsg_BJL.SuperToolFishUpdSystemRewardDataList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_BJL.SuperToolFishUpdSystemRewardDataList} SuperToolFishUpdSystemRewardDataList
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
         * @memberof GameMsg_BJL.SuperToolFishUpdSystemRewardDataList
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
         * @memberof GameMsg_BJL.SuperToolFishUpdSystemRewardDataList
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_BJL.SuperToolFishUpdSystemRewardDataList} SuperToolFishUpdSystemRewardDataList
         */
        SuperToolFishUpdSystemRewardDataList.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_BJL.SuperToolFishUpdSystemRewardDataList)
                return object;
            var message = new $root.GameMsg_BJL.SuperToolFishUpdSystemRewardDataList();
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
         * @memberof GameMsg_BJL.SuperToolFishUpdSystemRewardDataList
         * @static
         * @param {GameMsg_BJL.SuperToolFishUpdSystemRewardDataList} message SuperToolFishUpdSystemRewardDataList
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
         * @memberof GameMsg_BJL.SuperToolFishUpdSystemRewardDataList
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SuperToolFishUpdSystemRewardDataList.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SuperToolFishUpdSystemRewardDataList;
    })();

    GameMsg_BJL.SuperToolfishUpdVIPUserRewardDetail = (function() {

        /**
         * Properties of a SuperToolfishUpdVIPUserRewardDetail.
         * @memberof GameMsg_BJL
         * @interface ISuperToolfishUpdVIPUserRewardDetail
         * @property {number} GameID SuperToolfishUpdVIPUserRewardDetail GameID
         * @property {Array.<GameMsg_BJL.ISuperToolFishUpdVIPUserRewardDataList>|null} [FishUserRewardList] SuperToolfishUpdVIPUserRewardDetail FishUserRewardList
         */

        /**
         * Constructs a new SuperToolfishUpdVIPUserRewardDetail.
         * @memberof GameMsg_BJL
         * @classdesc Represents a SuperToolfishUpdVIPUserRewardDetail.
         * @implements ISuperToolfishUpdVIPUserRewardDetail
         * @constructor
         * @param {GameMsg_BJL.ISuperToolfishUpdVIPUserRewardDetail=} [properties] Properties to set
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
         * @memberof GameMsg_BJL.SuperToolfishUpdVIPUserRewardDetail
         * @instance
         */
        SuperToolfishUpdVIPUserRewardDetail.prototype.GameID = 0;

        /**
         * SuperToolfishUpdVIPUserRewardDetail FishUserRewardList.
         * @member {Array.<GameMsg_BJL.ISuperToolFishUpdVIPUserRewardDataList>} FishUserRewardList
         * @memberof GameMsg_BJL.SuperToolfishUpdVIPUserRewardDetail
         * @instance
         */
        SuperToolfishUpdVIPUserRewardDetail.prototype.FishUserRewardList = $util.emptyArray;

        /**
         * Creates a new SuperToolfishUpdVIPUserRewardDetail instance using the specified properties.
         * @function create
         * @memberof GameMsg_BJL.SuperToolfishUpdVIPUserRewardDetail
         * @static
         * @param {GameMsg_BJL.ISuperToolfishUpdVIPUserRewardDetail=} [properties] Properties to set
         * @returns {GameMsg_BJL.SuperToolfishUpdVIPUserRewardDetail} SuperToolfishUpdVIPUserRewardDetail instance
         */
        SuperToolfishUpdVIPUserRewardDetail.create = function create(properties) {
            return new SuperToolfishUpdVIPUserRewardDetail(properties);
        };

        /**
         * Encodes the specified SuperToolfishUpdVIPUserRewardDetail message. Does not implicitly {@link GameMsg_BJL.SuperToolfishUpdVIPUserRewardDetail.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_BJL.SuperToolfishUpdVIPUserRewardDetail
         * @static
         * @param {GameMsg_BJL.ISuperToolfishUpdVIPUserRewardDetail} message SuperToolfishUpdVIPUserRewardDetail message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SuperToolfishUpdVIPUserRewardDetail.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.GameID);
            if (message.FishUserRewardList != null && message.FishUserRewardList.length)
                for (var i = 0; i < message.FishUserRewardList.length; ++i)
                    $root.GameMsg_BJL.SuperToolFishUpdVIPUserRewardDataList.encode(message.FishUserRewardList[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified SuperToolfishUpdVIPUserRewardDetail message, length delimited. Does not implicitly {@link GameMsg_BJL.SuperToolfishUpdVIPUserRewardDetail.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_BJL.SuperToolfishUpdVIPUserRewardDetail
         * @static
         * @param {GameMsg_BJL.ISuperToolfishUpdVIPUserRewardDetail} message SuperToolfishUpdVIPUserRewardDetail message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SuperToolfishUpdVIPUserRewardDetail.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SuperToolfishUpdVIPUserRewardDetail message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_BJL.SuperToolfishUpdVIPUserRewardDetail
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_BJL.SuperToolfishUpdVIPUserRewardDetail} SuperToolfishUpdVIPUserRewardDetail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SuperToolfishUpdVIPUserRewardDetail.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_BJL.SuperToolfishUpdVIPUserRewardDetail();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.GameID = reader.int32();
                    break;
                case 2:
                    if (!(message.FishUserRewardList && message.FishUserRewardList.length))
                        message.FishUserRewardList = [];
                    message.FishUserRewardList.push($root.GameMsg_BJL.SuperToolFishUpdVIPUserRewardDataList.decode(reader, reader.uint32()));
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
         * @memberof GameMsg_BJL.SuperToolfishUpdVIPUserRewardDetail
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_BJL.SuperToolfishUpdVIPUserRewardDetail} SuperToolfishUpdVIPUserRewardDetail
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
         * @memberof GameMsg_BJL.SuperToolfishUpdVIPUserRewardDetail
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
                    var error = $root.GameMsg_BJL.SuperToolFishUpdVIPUserRewardDataList.verify(message.FishUserRewardList[i]);
                    if (error)
                        return "FishUserRewardList." + error;
                }
            }
            return null;
        };

        /**
         * Creates a SuperToolfishUpdVIPUserRewardDetail message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_BJL.SuperToolfishUpdVIPUserRewardDetail
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_BJL.SuperToolfishUpdVIPUserRewardDetail} SuperToolfishUpdVIPUserRewardDetail
         */
        SuperToolfishUpdVIPUserRewardDetail.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_BJL.SuperToolfishUpdVIPUserRewardDetail)
                return object;
            var message = new $root.GameMsg_BJL.SuperToolfishUpdVIPUserRewardDetail();
            if (object.GameID != null)
                message.GameID = object.GameID | 0;
            if (object.FishUserRewardList) {
                if (!Array.isArray(object.FishUserRewardList))
                    throw TypeError(".GameMsg_BJL.SuperToolfishUpdVIPUserRewardDetail.FishUserRewardList: array expected");
                message.FishUserRewardList = [];
                for (var i = 0; i < object.FishUserRewardList.length; ++i) {
                    if (typeof object.FishUserRewardList[i] !== "object")
                        throw TypeError(".GameMsg_BJL.SuperToolfishUpdVIPUserRewardDetail.FishUserRewardList: object expected");
                    message.FishUserRewardList[i] = $root.GameMsg_BJL.SuperToolFishUpdVIPUserRewardDataList.fromObject(object.FishUserRewardList[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a SuperToolfishUpdVIPUserRewardDetail message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_BJL.SuperToolfishUpdVIPUserRewardDetail
         * @static
         * @param {GameMsg_BJL.SuperToolfishUpdVIPUserRewardDetail} message SuperToolfishUpdVIPUserRewardDetail
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
                    object.FishUserRewardList[j] = $root.GameMsg_BJL.SuperToolFishUpdVIPUserRewardDataList.toObject(message.FishUserRewardList[j], options);
            }
            return object;
        };

        /**
         * Converts this SuperToolfishUpdVIPUserRewardDetail to JSON.
         * @function toJSON
         * @memberof GameMsg_BJL.SuperToolfishUpdVIPUserRewardDetail
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SuperToolfishUpdVIPUserRewardDetail.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SuperToolfishUpdVIPUserRewardDetail;
    })();

    GameMsg_BJL.SuperToolFishUpdVIPUserRewardDataList = (function() {

        /**
         * Properties of a SuperToolFishUpdVIPUserRewardDataList.
         * @memberof GameMsg_BJL
         * @interface ISuperToolFishUpdVIPUserRewardDataList
         * @property {number} UserID SuperToolFishUpdVIPUserRewardDataList UserID
         * @property {number|Long} FinishAmount SuperToolFishUpdVIPUserRewardDataList FinishAmount
         */

        /**
         * Constructs a new SuperToolFishUpdVIPUserRewardDataList.
         * @memberof GameMsg_BJL
         * @classdesc Represents a SuperToolFishUpdVIPUserRewardDataList.
         * @implements ISuperToolFishUpdVIPUserRewardDataList
         * @constructor
         * @param {GameMsg_BJL.ISuperToolFishUpdVIPUserRewardDataList=} [properties] Properties to set
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
         * @memberof GameMsg_BJL.SuperToolFishUpdVIPUserRewardDataList
         * @instance
         */
        SuperToolFishUpdVIPUserRewardDataList.prototype.UserID = 0;

        /**
         * SuperToolFishUpdVIPUserRewardDataList FinishAmount.
         * @member {number|Long} FinishAmount
         * @memberof GameMsg_BJL.SuperToolFishUpdVIPUserRewardDataList
         * @instance
         */
        SuperToolFishUpdVIPUserRewardDataList.prototype.FinishAmount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new SuperToolFishUpdVIPUserRewardDataList instance using the specified properties.
         * @function create
         * @memberof GameMsg_BJL.SuperToolFishUpdVIPUserRewardDataList
         * @static
         * @param {GameMsg_BJL.ISuperToolFishUpdVIPUserRewardDataList=} [properties] Properties to set
         * @returns {GameMsg_BJL.SuperToolFishUpdVIPUserRewardDataList} SuperToolFishUpdVIPUserRewardDataList instance
         */
        SuperToolFishUpdVIPUserRewardDataList.create = function create(properties) {
            return new SuperToolFishUpdVIPUserRewardDataList(properties);
        };

        /**
         * Encodes the specified SuperToolFishUpdVIPUserRewardDataList message. Does not implicitly {@link GameMsg_BJL.SuperToolFishUpdVIPUserRewardDataList.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_BJL.SuperToolFishUpdVIPUserRewardDataList
         * @static
         * @param {GameMsg_BJL.ISuperToolFishUpdVIPUserRewardDataList} message SuperToolFishUpdVIPUserRewardDataList message or plain object to encode
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
         * Encodes the specified SuperToolFishUpdVIPUserRewardDataList message, length delimited. Does not implicitly {@link GameMsg_BJL.SuperToolFishUpdVIPUserRewardDataList.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_BJL.SuperToolFishUpdVIPUserRewardDataList
         * @static
         * @param {GameMsg_BJL.ISuperToolFishUpdVIPUserRewardDataList} message SuperToolFishUpdVIPUserRewardDataList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SuperToolFishUpdVIPUserRewardDataList.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SuperToolFishUpdVIPUserRewardDataList message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_BJL.SuperToolFishUpdVIPUserRewardDataList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_BJL.SuperToolFishUpdVIPUserRewardDataList} SuperToolFishUpdVIPUserRewardDataList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SuperToolFishUpdVIPUserRewardDataList.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_BJL.SuperToolFishUpdVIPUserRewardDataList();
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
         * @memberof GameMsg_BJL.SuperToolFishUpdVIPUserRewardDataList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_BJL.SuperToolFishUpdVIPUserRewardDataList} SuperToolFishUpdVIPUserRewardDataList
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
         * @memberof GameMsg_BJL.SuperToolFishUpdVIPUserRewardDataList
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
         * @memberof GameMsg_BJL.SuperToolFishUpdVIPUserRewardDataList
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_BJL.SuperToolFishUpdVIPUserRewardDataList} SuperToolFishUpdVIPUserRewardDataList
         */
        SuperToolFishUpdVIPUserRewardDataList.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_BJL.SuperToolFishUpdVIPUserRewardDataList)
                return object;
            var message = new $root.GameMsg_BJL.SuperToolFishUpdVIPUserRewardDataList();
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
         * @memberof GameMsg_BJL.SuperToolFishUpdVIPUserRewardDataList
         * @static
         * @param {GameMsg_BJL.SuperToolFishUpdVIPUserRewardDataList} message SuperToolFishUpdVIPUserRewardDataList
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
         * @memberof GameMsg_BJL.SuperToolFishUpdVIPUserRewardDataList
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SuperToolFishUpdVIPUserRewardDataList.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SuperToolFishUpdVIPUserRewardDataList;
    })();

    GameMsg_BJL.SuperToolZjhVipUserDataList = (function() {

        /**
         * Properties of a SuperToolZjhVipUserDataList.
         * @memberof GameMsg_BJL
         * @interface ISuperToolZjhVipUserDataList
         * @property {Array.<GameMsg_BJL.ISuperToolZjhVipUserData>|null} [DataList] SuperToolZjhVipUserDataList DataList
         */

        /**
         * Constructs a new SuperToolZjhVipUserDataList.
         * @memberof GameMsg_BJL
         * @classdesc Represents a SuperToolZjhVipUserDataList.
         * @implements ISuperToolZjhVipUserDataList
         * @constructor
         * @param {GameMsg_BJL.ISuperToolZjhVipUserDataList=} [properties] Properties to set
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
         * @member {Array.<GameMsg_BJL.ISuperToolZjhVipUserData>} DataList
         * @memberof GameMsg_BJL.SuperToolZjhVipUserDataList
         * @instance
         */
        SuperToolZjhVipUserDataList.prototype.DataList = $util.emptyArray;

        /**
         * Creates a new SuperToolZjhVipUserDataList instance using the specified properties.
         * @function create
         * @memberof GameMsg_BJL.SuperToolZjhVipUserDataList
         * @static
         * @param {GameMsg_BJL.ISuperToolZjhVipUserDataList=} [properties] Properties to set
         * @returns {GameMsg_BJL.SuperToolZjhVipUserDataList} SuperToolZjhVipUserDataList instance
         */
        SuperToolZjhVipUserDataList.create = function create(properties) {
            return new SuperToolZjhVipUserDataList(properties);
        };

        /**
         * Encodes the specified SuperToolZjhVipUserDataList message. Does not implicitly {@link GameMsg_BJL.SuperToolZjhVipUserDataList.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_BJL.SuperToolZjhVipUserDataList
         * @static
         * @param {GameMsg_BJL.ISuperToolZjhVipUserDataList} message SuperToolZjhVipUserDataList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SuperToolZjhVipUserDataList.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.DataList != null && message.DataList.length)
                for (var i = 0; i < message.DataList.length; ++i)
                    $root.GameMsg_BJL.SuperToolZjhVipUserData.encode(message.DataList[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified SuperToolZjhVipUserDataList message, length delimited. Does not implicitly {@link GameMsg_BJL.SuperToolZjhVipUserDataList.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_BJL.SuperToolZjhVipUserDataList
         * @static
         * @param {GameMsg_BJL.ISuperToolZjhVipUserDataList} message SuperToolZjhVipUserDataList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SuperToolZjhVipUserDataList.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SuperToolZjhVipUserDataList message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_BJL.SuperToolZjhVipUserDataList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_BJL.SuperToolZjhVipUserDataList} SuperToolZjhVipUserDataList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SuperToolZjhVipUserDataList.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_BJL.SuperToolZjhVipUserDataList();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.DataList && message.DataList.length))
                        message.DataList = [];
                    message.DataList.push($root.GameMsg_BJL.SuperToolZjhVipUserData.decode(reader, reader.uint32()));
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
         * @memberof GameMsg_BJL.SuperToolZjhVipUserDataList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_BJL.SuperToolZjhVipUserDataList} SuperToolZjhVipUserDataList
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
         * @memberof GameMsg_BJL.SuperToolZjhVipUserDataList
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
                    var error = $root.GameMsg_BJL.SuperToolZjhVipUserData.verify(message.DataList[i]);
                    if (error)
                        return "DataList." + error;
                }
            }
            return null;
        };

        /**
         * Creates a SuperToolZjhVipUserDataList message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_BJL.SuperToolZjhVipUserDataList
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_BJL.SuperToolZjhVipUserDataList} SuperToolZjhVipUserDataList
         */
        SuperToolZjhVipUserDataList.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_BJL.SuperToolZjhVipUserDataList)
                return object;
            var message = new $root.GameMsg_BJL.SuperToolZjhVipUserDataList();
            if (object.DataList) {
                if (!Array.isArray(object.DataList))
                    throw TypeError(".GameMsg_BJL.SuperToolZjhVipUserDataList.DataList: array expected");
                message.DataList = [];
                for (var i = 0; i < object.DataList.length; ++i) {
                    if (typeof object.DataList[i] !== "object")
                        throw TypeError(".GameMsg_BJL.SuperToolZjhVipUserDataList.DataList: object expected");
                    message.DataList[i] = $root.GameMsg_BJL.SuperToolZjhVipUserData.fromObject(object.DataList[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a SuperToolZjhVipUserDataList message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_BJL.SuperToolZjhVipUserDataList
         * @static
         * @param {GameMsg_BJL.SuperToolZjhVipUserDataList} message SuperToolZjhVipUserDataList
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
                    object.DataList[j] = $root.GameMsg_BJL.SuperToolZjhVipUserData.toObject(message.DataList[j], options);
            }
            return object;
        };

        /**
         * Converts this SuperToolZjhVipUserDataList to JSON.
         * @function toJSON
         * @memberof GameMsg_BJL.SuperToolZjhVipUserDataList
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SuperToolZjhVipUserDataList.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SuperToolZjhVipUserDataList;
    })();

    GameMsg_BJL.SuperToolZjhVipUserData = (function() {

        /**
         * Properties of a SuperToolZjhVipUserData.
         * @memberof GameMsg_BJL
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
         * @memberof GameMsg_BJL
         * @classdesc Represents a SuperToolZjhVipUserData.
         * @implements ISuperToolZjhVipUserData
         * @constructor
         * @param {GameMsg_BJL.ISuperToolZjhVipUserData=} [properties] Properties to set
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
         * @memberof GameMsg_BJL.SuperToolZjhVipUserData
         * @instance
         */
        SuperToolZjhVipUserData.prototype.UserID = 0;

        /**
         * SuperToolZjhVipUserData NextType.
         * @member {number|Long} NextType
         * @memberof GameMsg_BJL.SuperToolZjhVipUserData
         * @instance
         */
        SuperToolZjhVipUserData.prototype.NextType = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * SuperToolZjhVipUserData NextWinLose.
         * @member {number|Long} NextWinLose
         * @memberof GameMsg_BJL.SuperToolZjhVipUserData
         * @instance
         */
        SuperToolZjhVipUserData.prototype.NextWinLose = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * SuperToolZjhVipUserData NextWinLoseNum.
         * @member {number|Long} NextWinLoseNum
         * @memberof GameMsg_BJL.SuperToolZjhVipUserData
         * @instance
         */
        SuperToolZjhVipUserData.prototype.NextWinLoseNum = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * SuperToolZjhVipUserData Finish.
         * @member {number|Long} Finish
         * @memberof GameMsg_BJL.SuperToolZjhVipUserData
         * @instance
         */
        SuperToolZjhVipUserData.prototype.Finish = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * SuperToolZjhVipUserData FinishNextWinLoseNum.
         * @member {number|Long} FinishNextWinLoseNum
         * @memberof GameMsg_BJL.SuperToolZjhVipUserData
         * @instance
         */
        SuperToolZjhVipUserData.prototype.FinishNextWinLoseNum = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * SuperToolZjhVipUserData NextTable.
         * @member {number} NextTable
         * @memberof GameMsg_BJL.SuperToolZjhVipUserData
         * @instance
         */
        SuperToolZjhVipUserData.prototype.NextTable = 0;

        /**
         * SuperToolZjhVipUserData Status.
         * @member {number} Status
         * @memberof GameMsg_BJL.SuperToolZjhVipUserData
         * @instance
         */
        SuperToolZjhVipUserData.prototype.Status = 0;

        /**
         * SuperToolZjhVipUserData TodaySumcharge.
         * @member {number|Long} TodaySumcharge
         * @memberof GameMsg_BJL.SuperToolZjhVipUserData
         * @instance
         */
        SuperToolZjhVipUserData.prototype.TodaySumcharge = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * SuperToolZjhVipUserData TodaySumConvert.
         * @member {number|Long} TodaySumConvert
         * @memberof GameMsg_BJL.SuperToolZjhVipUserData
         * @instance
         */
        SuperToolZjhVipUserData.prototype.TodaySumConvert = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * SuperToolZjhVipUserData TodayUserWinLose.
         * @member {number|Long} TodayUserWinLose
         * @memberof GameMsg_BJL.SuperToolZjhVipUserData
         * @instance
         */
        SuperToolZjhVipUserData.prototype.TodayUserWinLose = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new SuperToolZjhVipUserData instance using the specified properties.
         * @function create
         * @memberof GameMsg_BJL.SuperToolZjhVipUserData
         * @static
         * @param {GameMsg_BJL.ISuperToolZjhVipUserData=} [properties] Properties to set
         * @returns {GameMsg_BJL.SuperToolZjhVipUserData} SuperToolZjhVipUserData instance
         */
        SuperToolZjhVipUserData.create = function create(properties) {
            return new SuperToolZjhVipUserData(properties);
        };

        /**
         * Encodes the specified SuperToolZjhVipUserData message. Does not implicitly {@link GameMsg_BJL.SuperToolZjhVipUserData.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_BJL.SuperToolZjhVipUserData
         * @static
         * @param {GameMsg_BJL.ISuperToolZjhVipUserData} message SuperToolZjhVipUserData message or plain object to encode
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
         * Encodes the specified SuperToolZjhVipUserData message, length delimited. Does not implicitly {@link GameMsg_BJL.SuperToolZjhVipUserData.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_BJL.SuperToolZjhVipUserData
         * @static
         * @param {GameMsg_BJL.ISuperToolZjhVipUserData} message SuperToolZjhVipUserData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SuperToolZjhVipUserData.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SuperToolZjhVipUserData message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_BJL.SuperToolZjhVipUserData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_BJL.SuperToolZjhVipUserData} SuperToolZjhVipUserData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SuperToolZjhVipUserData.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_BJL.SuperToolZjhVipUserData();
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
         * @memberof GameMsg_BJL.SuperToolZjhVipUserData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_BJL.SuperToolZjhVipUserData} SuperToolZjhVipUserData
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
         * @memberof GameMsg_BJL.SuperToolZjhVipUserData
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
         * @memberof GameMsg_BJL.SuperToolZjhVipUserData
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_BJL.SuperToolZjhVipUserData} SuperToolZjhVipUserData
         */
        SuperToolZjhVipUserData.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_BJL.SuperToolZjhVipUserData)
                return object;
            var message = new $root.GameMsg_BJL.SuperToolZjhVipUserData();
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
         * @memberof GameMsg_BJL.SuperToolZjhVipUserData
         * @static
         * @param {GameMsg_BJL.SuperToolZjhVipUserData} message SuperToolZjhVipUserData
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
         * @memberof GameMsg_BJL.SuperToolZjhVipUserData
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SuperToolZjhVipUserData.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SuperToolZjhVipUserData;
    })();

    GameMsg_BJL.SuperToolZjhUpdVipUserData = (function() {

        /**
         * Properties of a SuperToolZjhUpdVipUserData.
         * @memberof GameMsg_BJL
         * @interface ISuperToolZjhUpdVipUserData
         * @property {number} UserID SuperToolZjhUpdVipUserData UserID
         * @property {number|Long|null} [Finish] SuperToolZjhUpdVipUserData Finish
         * @property {number|Long|null} [FinishNextWinLoseNum] SuperToolZjhUpdVipUserData FinishNextWinLoseNum
         * @property {number|null} [NextTable] SuperToolZjhUpdVipUserData NextTable
         * @property {number|Long|null} [NextType] SuperToolZjhUpdVipUserData NextType
         */

        /**
         * Constructs a new SuperToolZjhUpdVipUserData.
         * @memberof GameMsg_BJL
         * @classdesc Represents a SuperToolZjhUpdVipUserData.
         * @implements ISuperToolZjhUpdVipUserData
         * @constructor
         * @param {GameMsg_BJL.ISuperToolZjhUpdVipUserData=} [properties] Properties to set
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
         * @memberof GameMsg_BJL.SuperToolZjhUpdVipUserData
         * @instance
         */
        SuperToolZjhUpdVipUserData.prototype.UserID = 0;

        /**
         * SuperToolZjhUpdVipUserData Finish.
         * @member {number|Long} Finish
         * @memberof GameMsg_BJL.SuperToolZjhUpdVipUserData
         * @instance
         */
        SuperToolZjhUpdVipUserData.prototype.Finish = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * SuperToolZjhUpdVipUserData FinishNextWinLoseNum.
         * @member {number|Long} FinishNextWinLoseNum
         * @memberof GameMsg_BJL.SuperToolZjhUpdVipUserData
         * @instance
         */
        SuperToolZjhUpdVipUserData.prototype.FinishNextWinLoseNum = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * SuperToolZjhUpdVipUserData NextTable.
         * @member {number} NextTable
         * @memberof GameMsg_BJL.SuperToolZjhUpdVipUserData
         * @instance
         */
        SuperToolZjhUpdVipUserData.prototype.NextTable = 0;

        /**
         * SuperToolZjhUpdVipUserData NextType.
         * @member {number|Long} NextType
         * @memberof GameMsg_BJL.SuperToolZjhUpdVipUserData
         * @instance
         */
        SuperToolZjhUpdVipUserData.prototype.NextType = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new SuperToolZjhUpdVipUserData instance using the specified properties.
         * @function create
         * @memberof GameMsg_BJL.SuperToolZjhUpdVipUserData
         * @static
         * @param {GameMsg_BJL.ISuperToolZjhUpdVipUserData=} [properties] Properties to set
         * @returns {GameMsg_BJL.SuperToolZjhUpdVipUserData} SuperToolZjhUpdVipUserData instance
         */
        SuperToolZjhUpdVipUserData.create = function create(properties) {
            return new SuperToolZjhUpdVipUserData(properties);
        };

        /**
         * Encodes the specified SuperToolZjhUpdVipUserData message. Does not implicitly {@link GameMsg_BJL.SuperToolZjhUpdVipUserData.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_BJL.SuperToolZjhUpdVipUserData
         * @static
         * @param {GameMsg_BJL.ISuperToolZjhUpdVipUserData} message SuperToolZjhUpdVipUserData message or plain object to encode
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
         * Encodes the specified SuperToolZjhUpdVipUserData message, length delimited. Does not implicitly {@link GameMsg_BJL.SuperToolZjhUpdVipUserData.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_BJL.SuperToolZjhUpdVipUserData
         * @static
         * @param {GameMsg_BJL.ISuperToolZjhUpdVipUserData} message SuperToolZjhUpdVipUserData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SuperToolZjhUpdVipUserData.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SuperToolZjhUpdVipUserData message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_BJL.SuperToolZjhUpdVipUserData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_BJL.SuperToolZjhUpdVipUserData} SuperToolZjhUpdVipUserData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SuperToolZjhUpdVipUserData.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_BJL.SuperToolZjhUpdVipUserData();
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
         * @memberof GameMsg_BJL.SuperToolZjhUpdVipUserData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_BJL.SuperToolZjhUpdVipUserData} SuperToolZjhUpdVipUserData
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
         * @memberof GameMsg_BJL.SuperToolZjhUpdVipUserData
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
         * @memberof GameMsg_BJL.SuperToolZjhUpdVipUserData
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_BJL.SuperToolZjhUpdVipUserData} SuperToolZjhUpdVipUserData
         */
        SuperToolZjhUpdVipUserData.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_BJL.SuperToolZjhUpdVipUserData)
                return object;
            var message = new $root.GameMsg_BJL.SuperToolZjhUpdVipUserData();
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
         * @memberof GameMsg_BJL.SuperToolZjhUpdVipUserData
         * @static
         * @param {GameMsg_BJL.SuperToolZjhUpdVipUserData} message SuperToolZjhUpdVipUserData
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
         * @memberof GameMsg_BJL.SuperToolZjhUpdVipUserData
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SuperToolZjhUpdVipUserData.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SuperToolZjhUpdVipUserData;
    })();

    GameMsg_BJL.FishSysPoolData = (function() {

        /**
         * Properties of a FishSysPoolData.
         * @memberof GameMsg_BJL
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
         * @memberof GameMsg_BJL
         * @classdesc Represents a FishSysPoolData.
         * @implements IFishSysPoolData
         * @constructor
         * @param {GameMsg_BJL.IFishSysPoolData=} [properties] Properties to set
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
         * @memberof GameMsg_BJL.FishSysPoolData
         * @instance
         */
        FishSysPoolData.prototype.FlagID = 0;

        /**
         * FishSysPoolData SumBetMoney.
         * @member {number|Long} SumBetMoney
         * @memberof GameMsg_BJL.FishSysPoolData
         * @instance
         */
        FishSysPoolData.prototype.SumBetMoney = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * FishSysPoolData SumBullet.
         * @member {number|Long} SumBullet
         * @memberof GameMsg_BJL.FishSysPoolData
         * @instance
         */
        FishSysPoolData.prototype.SumBullet = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * FishSysPoolData SysSumWinLoss.
         * @member {number|Long} SysSumWinLoss
         * @memberof GameMsg_BJL.FishSysPoolData
         * @instance
         */
        FishSysPoolData.prototype.SysSumWinLoss = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * FishSysPoolData AfterAdjustSyspoolWinLoss.
         * @member {number|Long} AfterAdjustSyspoolWinLoss
         * @memberof GameMsg_BJL.FishSysPoolData
         * @instance
         */
        FishSysPoolData.prototype.AfterAdjustSyspoolWinLoss = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * FishSysPoolData PoolAmount.
         * @member {number|Long} PoolAmount
         * @memberof GameMsg_BJL.FishSysPoolData
         * @instance
         */
        FishSysPoolData.prototype.PoolAmount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new FishSysPoolData instance using the specified properties.
         * @function create
         * @memberof GameMsg_BJL.FishSysPoolData
         * @static
         * @param {GameMsg_BJL.IFishSysPoolData=} [properties] Properties to set
         * @returns {GameMsg_BJL.FishSysPoolData} FishSysPoolData instance
         */
        FishSysPoolData.create = function create(properties) {
            return new FishSysPoolData(properties);
        };

        /**
         * Encodes the specified FishSysPoolData message. Does not implicitly {@link GameMsg_BJL.FishSysPoolData.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_BJL.FishSysPoolData
         * @static
         * @param {GameMsg_BJL.IFishSysPoolData} message FishSysPoolData message or plain object to encode
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
         * Encodes the specified FishSysPoolData message, length delimited. Does not implicitly {@link GameMsg_BJL.FishSysPoolData.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_BJL.FishSysPoolData
         * @static
         * @param {GameMsg_BJL.IFishSysPoolData} message FishSysPoolData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FishSysPoolData.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FishSysPoolData message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_BJL.FishSysPoolData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_BJL.FishSysPoolData} FishSysPoolData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FishSysPoolData.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_BJL.FishSysPoolData();
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
         * @memberof GameMsg_BJL.FishSysPoolData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_BJL.FishSysPoolData} FishSysPoolData
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
         * @memberof GameMsg_BJL.FishSysPoolData
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
         * @memberof GameMsg_BJL.FishSysPoolData
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_BJL.FishSysPoolData} FishSysPoolData
         */
        FishSysPoolData.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_BJL.FishSysPoolData)
                return object;
            var message = new $root.GameMsg_BJL.FishSysPoolData();
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
         * @memberof GameMsg_BJL.FishSysPoolData
         * @static
         * @param {GameMsg_BJL.FishSysPoolData} message FishSysPoolData
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
         * @memberof GameMsg_BJL.FishSysPoolData
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FishSysPoolData.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return FishSysPoolData;
    })();

    GameMsg_BJL.FishPlayerPoolDetail = (function() {

        /**
         * Properties of a FishPlayerPoolDetail.
         * @memberof GameMsg_BJL
         * @interface IFishPlayerPoolDetail
         * @property {number|null} [FlagID] FishPlayerPoolDetail FlagID
         * @property {Array.<GameMsg_BJL.IFishPlayerPoolDetailList>|null} [FishRewardList] FishPlayerPoolDetail FishRewardList
         */

        /**
         * Constructs a new FishPlayerPoolDetail.
         * @memberof GameMsg_BJL
         * @classdesc Represents a FishPlayerPoolDetail.
         * @implements IFishPlayerPoolDetail
         * @constructor
         * @param {GameMsg_BJL.IFishPlayerPoolDetail=} [properties] Properties to set
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
         * @memberof GameMsg_BJL.FishPlayerPoolDetail
         * @instance
         */
        FishPlayerPoolDetail.prototype.FlagID = 0;

        /**
         * FishPlayerPoolDetail FishRewardList.
         * @member {Array.<GameMsg_BJL.IFishPlayerPoolDetailList>} FishRewardList
         * @memberof GameMsg_BJL.FishPlayerPoolDetail
         * @instance
         */
        FishPlayerPoolDetail.prototype.FishRewardList = $util.emptyArray;

        /**
         * Creates a new FishPlayerPoolDetail instance using the specified properties.
         * @function create
         * @memberof GameMsg_BJL.FishPlayerPoolDetail
         * @static
         * @param {GameMsg_BJL.IFishPlayerPoolDetail=} [properties] Properties to set
         * @returns {GameMsg_BJL.FishPlayerPoolDetail} FishPlayerPoolDetail instance
         */
        FishPlayerPoolDetail.create = function create(properties) {
            return new FishPlayerPoolDetail(properties);
        };

        /**
         * Encodes the specified FishPlayerPoolDetail message. Does not implicitly {@link GameMsg_BJL.FishPlayerPoolDetail.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_BJL.FishPlayerPoolDetail
         * @static
         * @param {GameMsg_BJL.IFishPlayerPoolDetail} message FishPlayerPoolDetail message or plain object to encode
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
                    $root.GameMsg_BJL.FishPlayerPoolDetailList.encode(message.FishRewardList[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified FishPlayerPoolDetail message, length delimited. Does not implicitly {@link GameMsg_BJL.FishPlayerPoolDetail.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_BJL.FishPlayerPoolDetail
         * @static
         * @param {GameMsg_BJL.IFishPlayerPoolDetail} message FishPlayerPoolDetail message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FishPlayerPoolDetail.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FishPlayerPoolDetail message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_BJL.FishPlayerPoolDetail
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_BJL.FishPlayerPoolDetail} FishPlayerPoolDetail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FishPlayerPoolDetail.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_BJL.FishPlayerPoolDetail();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.FlagID = reader.int32();
                    break;
                case 2:
                    if (!(message.FishRewardList && message.FishRewardList.length))
                        message.FishRewardList = [];
                    message.FishRewardList.push($root.GameMsg_BJL.FishPlayerPoolDetailList.decode(reader, reader.uint32()));
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
         * @memberof GameMsg_BJL.FishPlayerPoolDetail
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_BJL.FishPlayerPoolDetail} FishPlayerPoolDetail
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
         * @memberof GameMsg_BJL.FishPlayerPoolDetail
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
                    var error = $root.GameMsg_BJL.FishPlayerPoolDetailList.verify(message.FishRewardList[i]);
                    if (error)
                        return "FishRewardList." + error;
                }
            }
            return null;
        };

        /**
         * Creates a FishPlayerPoolDetail message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_BJL.FishPlayerPoolDetail
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_BJL.FishPlayerPoolDetail} FishPlayerPoolDetail
         */
        FishPlayerPoolDetail.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_BJL.FishPlayerPoolDetail)
                return object;
            var message = new $root.GameMsg_BJL.FishPlayerPoolDetail();
            if (object.FlagID != null)
                message.FlagID = object.FlagID | 0;
            if (object.FishRewardList) {
                if (!Array.isArray(object.FishRewardList))
                    throw TypeError(".GameMsg_BJL.FishPlayerPoolDetail.FishRewardList: array expected");
                message.FishRewardList = [];
                for (var i = 0; i < object.FishRewardList.length; ++i) {
                    if (typeof object.FishRewardList[i] !== "object")
                        throw TypeError(".GameMsg_BJL.FishPlayerPoolDetail.FishRewardList: object expected");
                    message.FishRewardList[i] = $root.GameMsg_BJL.FishPlayerPoolDetailList.fromObject(object.FishRewardList[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a FishPlayerPoolDetail message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_BJL.FishPlayerPoolDetail
         * @static
         * @param {GameMsg_BJL.FishPlayerPoolDetail} message FishPlayerPoolDetail
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
                    object.FishRewardList[j] = $root.GameMsg_BJL.FishPlayerPoolDetailList.toObject(message.FishRewardList[j], options);
            }
            return object;
        };

        /**
         * Converts this FishPlayerPoolDetail to JSON.
         * @function toJSON
         * @memberof GameMsg_BJL.FishPlayerPoolDetail
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FishPlayerPoolDetail.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return FishPlayerPoolDetail;
    })();

    GameMsg_BJL.FishPlayerPoolDetailList = (function() {

        /**
         * Properties of a FishPlayerPoolDetailList.
         * @memberof GameMsg_BJL
         * @interface IFishPlayerPoolDetailList
         * @property {number} UserID FishPlayerPoolDetailList UserID
         * @property {number|Long} HitMoney FishPlayerPoolDetailList HitMoney
         * @property {number|Long} SpendMoney FishPlayerPoolDetailList SpendMoney
         */

        /**
         * Constructs a new FishPlayerPoolDetailList.
         * @memberof GameMsg_BJL
         * @classdesc Represents a FishPlayerPoolDetailList.
         * @implements IFishPlayerPoolDetailList
         * @constructor
         * @param {GameMsg_BJL.IFishPlayerPoolDetailList=} [properties] Properties to set
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
         * @memberof GameMsg_BJL.FishPlayerPoolDetailList
         * @instance
         */
        FishPlayerPoolDetailList.prototype.UserID = 0;

        /**
         * FishPlayerPoolDetailList HitMoney.
         * @member {number|Long} HitMoney
         * @memberof GameMsg_BJL.FishPlayerPoolDetailList
         * @instance
         */
        FishPlayerPoolDetailList.prototype.HitMoney = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * FishPlayerPoolDetailList SpendMoney.
         * @member {number|Long} SpendMoney
         * @memberof GameMsg_BJL.FishPlayerPoolDetailList
         * @instance
         */
        FishPlayerPoolDetailList.prototype.SpendMoney = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new FishPlayerPoolDetailList instance using the specified properties.
         * @function create
         * @memberof GameMsg_BJL.FishPlayerPoolDetailList
         * @static
         * @param {GameMsg_BJL.IFishPlayerPoolDetailList=} [properties] Properties to set
         * @returns {GameMsg_BJL.FishPlayerPoolDetailList} FishPlayerPoolDetailList instance
         */
        FishPlayerPoolDetailList.create = function create(properties) {
            return new FishPlayerPoolDetailList(properties);
        };

        /**
         * Encodes the specified FishPlayerPoolDetailList message. Does not implicitly {@link GameMsg_BJL.FishPlayerPoolDetailList.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_BJL.FishPlayerPoolDetailList
         * @static
         * @param {GameMsg_BJL.IFishPlayerPoolDetailList} message FishPlayerPoolDetailList message or plain object to encode
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
         * Encodes the specified FishPlayerPoolDetailList message, length delimited. Does not implicitly {@link GameMsg_BJL.FishPlayerPoolDetailList.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_BJL.FishPlayerPoolDetailList
         * @static
         * @param {GameMsg_BJL.IFishPlayerPoolDetailList} message FishPlayerPoolDetailList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FishPlayerPoolDetailList.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FishPlayerPoolDetailList message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_BJL.FishPlayerPoolDetailList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_BJL.FishPlayerPoolDetailList} FishPlayerPoolDetailList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FishPlayerPoolDetailList.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_BJL.FishPlayerPoolDetailList();
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
         * @memberof GameMsg_BJL.FishPlayerPoolDetailList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_BJL.FishPlayerPoolDetailList} FishPlayerPoolDetailList
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
         * @memberof GameMsg_BJL.FishPlayerPoolDetailList
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
         * @memberof GameMsg_BJL.FishPlayerPoolDetailList
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_BJL.FishPlayerPoolDetailList} FishPlayerPoolDetailList
         */
        FishPlayerPoolDetailList.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_BJL.FishPlayerPoolDetailList)
                return object;
            var message = new $root.GameMsg_BJL.FishPlayerPoolDetailList();
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
         * @memberof GameMsg_BJL.FishPlayerPoolDetailList
         * @static
         * @param {GameMsg_BJL.FishPlayerPoolDetailList} message FishPlayerPoolDetailList
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
         * @memberof GameMsg_BJL.FishPlayerPoolDetailList
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FishPlayerPoolDetailList.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return FishPlayerPoolDetailList;
    })();

    GameMsg_BJL.FindFishBeginnerOfferByUserID = (function() {

        /**
         * Properties of a FindFishBeginnerOfferByUserID.
         * @memberof GameMsg_BJL
         * @interface IFindFishBeginnerOfferByUserID
         * @property {number} UserID FindFishBeginnerOfferByUserID UserID
         * @property {number|null} [NewPlayerAdjustSyspool] FindFishBeginnerOfferByUserID NewPlayerAdjustSyspool
         */

        /**
         * Constructs a new FindFishBeginnerOfferByUserID.
         * @memberof GameMsg_BJL
         * @classdesc Represents a FindFishBeginnerOfferByUserID.
         * @implements IFindFishBeginnerOfferByUserID
         * @constructor
         * @param {GameMsg_BJL.IFindFishBeginnerOfferByUserID=} [properties] Properties to set
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
         * @memberof GameMsg_BJL.FindFishBeginnerOfferByUserID
         * @instance
         */
        FindFishBeginnerOfferByUserID.prototype.UserID = 0;

        /**
         * FindFishBeginnerOfferByUserID NewPlayerAdjustSyspool.
         * @member {number} NewPlayerAdjustSyspool
         * @memberof GameMsg_BJL.FindFishBeginnerOfferByUserID
         * @instance
         */
        FindFishBeginnerOfferByUserID.prototype.NewPlayerAdjustSyspool = 0;

        /**
         * Creates a new FindFishBeginnerOfferByUserID instance using the specified properties.
         * @function create
         * @memberof GameMsg_BJL.FindFishBeginnerOfferByUserID
         * @static
         * @param {GameMsg_BJL.IFindFishBeginnerOfferByUserID=} [properties] Properties to set
         * @returns {GameMsg_BJL.FindFishBeginnerOfferByUserID} FindFishBeginnerOfferByUserID instance
         */
        FindFishBeginnerOfferByUserID.create = function create(properties) {
            return new FindFishBeginnerOfferByUserID(properties);
        };

        /**
         * Encodes the specified FindFishBeginnerOfferByUserID message. Does not implicitly {@link GameMsg_BJL.FindFishBeginnerOfferByUserID.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_BJL.FindFishBeginnerOfferByUserID
         * @static
         * @param {GameMsg_BJL.IFindFishBeginnerOfferByUserID} message FindFishBeginnerOfferByUserID message or plain object to encode
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
         * Encodes the specified FindFishBeginnerOfferByUserID message, length delimited. Does not implicitly {@link GameMsg_BJL.FindFishBeginnerOfferByUserID.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_BJL.FindFishBeginnerOfferByUserID
         * @static
         * @param {GameMsg_BJL.IFindFishBeginnerOfferByUserID} message FindFishBeginnerOfferByUserID message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FindFishBeginnerOfferByUserID.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FindFishBeginnerOfferByUserID message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_BJL.FindFishBeginnerOfferByUserID
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_BJL.FindFishBeginnerOfferByUserID} FindFishBeginnerOfferByUserID
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FindFishBeginnerOfferByUserID.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_BJL.FindFishBeginnerOfferByUserID();
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
         * @memberof GameMsg_BJL.FindFishBeginnerOfferByUserID
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_BJL.FindFishBeginnerOfferByUserID} FindFishBeginnerOfferByUserID
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
         * @memberof GameMsg_BJL.FindFishBeginnerOfferByUserID
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
         * @memberof GameMsg_BJL.FindFishBeginnerOfferByUserID
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_BJL.FindFishBeginnerOfferByUserID} FindFishBeginnerOfferByUserID
         */
        FindFishBeginnerOfferByUserID.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_BJL.FindFishBeginnerOfferByUserID)
                return object;
            var message = new $root.GameMsg_BJL.FindFishBeginnerOfferByUserID();
            if (object.UserID != null)
                message.UserID = object.UserID | 0;
            if (object.NewPlayerAdjustSyspool != null)
                message.NewPlayerAdjustSyspool = object.NewPlayerAdjustSyspool | 0;
            return message;
        };

        /**
         * Creates a plain object from a FindFishBeginnerOfferByUserID message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_BJL.FindFishBeginnerOfferByUserID
         * @static
         * @param {GameMsg_BJL.FindFishBeginnerOfferByUserID} message FindFishBeginnerOfferByUserID
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
         * @memberof GameMsg_BJL.FindFishBeginnerOfferByUserID
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FindFishBeginnerOfferByUserID.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return FindFishBeginnerOfferByUserID;
    })();

    GameMsg_BJL.FishBeginnerOfferDetail = (function() {

        /**
         * Properties of a FishBeginnerOfferDetail.
         * @memberof GameMsg_BJL
         * @interface IFishBeginnerOfferDetail
         * @property {Array.<GameMsg_BJL.IFishBeginnerOffer>|null} [NewPlayerList] FishBeginnerOfferDetail NewPlayerList
         * @property {number|null} [NewPlayerAdjustSyspool] FishBeginnerOfferDetail NewPlayerAdjustSyspool
         */

        /**
         * Constructs a new FishBeginnerOfferDetail.
         * @memberof GameMsg_BJL
         * @classdesc Represents a FishBeginnerOfferDetail.
         * @implements IFishBeginnerOfferDetail
         * @constructor
         * @param {GameMsg_BJL.IFishBeginnerOfferDetail=} [properties] Properties to set
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
         * @member {Array.<GameMsg_BJL.IFishBeginnerOffer>} NewPlayerList
         * @memberof GameMsg_BJL.FishBeginnerOfferDetail
         * @instance
         */
        FishBeginnerOfferDetail.prototype.NewPlayerList = $util.emptyArray;

        /**
         * FishBeginnerOfferDetail NewPlayerAdjustSyspool.
         * @member {number} NewPlayerAdjustSyspool
         * @memberof GameMsg_BJL.FishBeginnerOfferDetail
         * @instance
         */
        FishBeginnerOfferDetail.prototype.NewPlayerAdjustSyspool = 0;

        /**
         * Creates a new FishBeginnerOfferDetail instance using the specified properties.
         * @function create
         * @memberof GameMsg_BJL.FishBeginnerOfferDetail
         * @static
         * @param {GameMsg_BJL.IFishBeginnerOfferDetail=} [properties] Properties to set
         * @returns {GameMsg_BJL.FishBeginnerOfferDetail} FishBeginnerOfferDetail instance
         */
        FishBeginnerOfferDetail.create = function create(properties) {
            return new FishBeginnerOfferDetail(properties);
        };

        /**
         * Encodes the specified FishBeginnerOfferDetail message. Does not implicitly {@link GameMsg_BJL.FishBeginnerOfferDetail.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_BJL.FishBeginnerOfferDetail
         * @static
         * @param {GameMsg_BJL.IFishBeginnerOfferDetail} message FishBeginnerOfferDetail message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FishBeginnerOfferDetail.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.NewPlayerList != null && message.NewPlayerList.length)
                for (var i = 0; i < message.NewPlayerList.length; ++i)
                    $root.GameMsg_BJL.FishBeginnerOffer.encode(message.NewPlayerList[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.NewPlayerAdjustSyspool != null && message.hasOwnProperty("NewPlayerAdjustSyspool"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.NewPlayerAdjustSyspool);
            return writer;
        };

        /**
         * Encodes the specified FishBeginnerOfferDetail message, length delimited. Does not implicitly {@link GameMsg_BJL.FishBeginnerOfferDetail.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_BJL.FishBeginnerOfferDetail
         * @static
         * @param {GameMsg_BJL.IFishBeginnerOfferDetail} message FishBeginnerOfferDetail message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FishBeginnerOfferDetail.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FishBeginnerOfferDetail message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_BJL.FishBeginnerOfferDetail
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_BJL.FishBeginnerOfferDetail} FishBeginnerOfferDetail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FishBeginnerOfferDetail.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_BJL.FishBeginnerOfferDetail();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.NewPlayerList && message.NewPlayerList.length))
                        message.NewPlayerList = [];
                    message.NewPlayerList.push($root.GameMsg_BJL.FishBeginnerOffer.decode(reader, reader.uint32()));
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
         * @memberof GameMsg_BJL.FishBeginnerOfferDetail
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_BJL.FishBeginnerOfferDetail} FishBeginnerOfferDetail
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
         * @memberof GameMsg_BJL.FishBeginnerOfferDetail
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
                    var error = $root.GameMsg_BJL.FishBeginnerOffer.verify(message.NewPlayerList[i]);
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
         * @memberof GameMsg_BJL.FishBeginnerOfferDetail
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_BJL.FishBeginnerOfferDetail} FishBeginnerOfferDetail
         */
        FishBeginnerOfferDetail.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_BJL.FishBeginnerOfferDetail)
                return object;
            var message = new $root.GameMsg_BJL.FishBeginnerOfferDetail();
            if (object.NewPlayerList) {
                if (!Array.isArray(object.NewPlayerList))
                    throw TypeError(".GameMsg_BJL.FishBeginnerOfferDetail.NewPlayerList: array expected");
                message.NewPlayerList = [];
                for (var i = 0; i < object.NewPlayerList.length; ++i) {
                    if (typeof object.NewPlayerList[i] !== "object")
                        throw TypeError(".GameMsg_BJL.FishBeginnerOfferDetail.NewPlayerList: object expected");
                    message.NewPlayerList[i] = $root.GameMsg_BJL.FishBeginnerOffer.fromObject(object.NewPlayerList[i]);
                }
            }
            if (object.NewPlayerAdjustSyspool != null)
                message.NewPlayerAdjustSyspool = object.NewPlayerAdjustSyspool | 0;
            return message;
        };

        /**
         * Creates a plain object from a FishBeginnerOfferDetail message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_BJL.FishBeginnerOfferDetail
         * @static
         * @param {GameMsg_BJL.FishBeginnerOfferDetail} message FishBeginnerOfferDetail
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
                    object.NewPlayerList[j] = $root.GameMsg_BJL.FishBeginnerOffer.toObject(message.NewPlayerList[j], options);
            }
            if (message.NewPlayerAdjustSyspool != null && message.hasOwnProperty("NewPlayerAdjustSyspool"))
                object.NewPlayerAdjustSyspool = message.NewPlayerAdjustSyspool;
            return object;
        };

        /**
         * Converts this FishBeginnerOfferDetail to JSON.
         * @function toJSON
         * @memberof GameMsg_BJL.FishBeginnerOfferDetail
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FishBeginnerOfferDetail.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return FishBeginnerOfferDetail;
    })();

    GameMsg_BJL.FishBeginnerOffer = (function() {

        /**
         * Properties of a FishBeginnerOffer.
         * @memberof GameMsg_BJL
         * @interface IFishBeginnerOffer
         * @property {number} UserID FishBeginnerOffer UserID
         * @property {number} Bullet FishBeginnerOffer Bullet
         * @property {number} Score FishBeginnerOffer Score
         * @property {number} Status FishBeginnerOffer Status
         */

        /**
         * Constructs a new FishBeginnerOffer.
         * @memberof GameMsg_BJL
         * @classdesc Represents a FishBeginnerOffer.
         * @implements IFishBeginnerOffer
         * @constructor
         * @param {GameMsg_BJL.IFishBeginnerOffer=} [properties] Properties to set
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
         * @memberof GameMsg_BJL.FishBeginnerOffer
         * @instance
         */
        FishBeginnerOffer.prototype.UserID = 0;

        /**
         * FishBeginnerOffer Bullet.
         * @member {number} Bullet
         * @memberof GameMsg_BJL.FishBeginnerOffer
         * @instance
         */
        FishBeginnerOffer.prototype.Bullet = 0;

        /**
         * FishBeginnerOffer Score.
         * @member {number} Score
         * @memberof GameMsg_BJL.FishBeginnerOffer
         * @instance
         */
        FishBeginnerOffer.prototype.Score = 0;

        /**
         * FishBeginnerOffer Status.
         * @member {number} Status
         * @memberof GameMsg_BJL.FishBeginnerOffer
         * @instance
         */
        FishBeginnerOffer.prototype.Status = 0;

        /**
         * Creates a new FishBeginnerOffer instance using the specified properties.
         * @function create
         * @memberof GameMsg_BJL.FishBeginnerOffer
         * @static
         * @param {GameMsg_BJL.IFishBeginnerOffer=} [properties] Properties to set
         * @returns {GameMsg_BJL.FishBeginnerOffer} FishBeginnerOffer instance
         */
        FishBeginnerOffer.create = function create(properties) {
            return new FishBeginnerOffer(properties);
        };

        /**
         * Encodes the specified FishBeginnerOffer message. Does not implicitly {@link GameMsg_BJL.FishBeginnerOffer.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_BJL.FishBeginnerOffer
         * @static
         * @param {GameMsg_BJL.IFishBeginnerOffer} message FishBeginnerOffer message or plain object to encode
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
         * Encodes the specified FishBeginnerOffer message, length delimited. Does not implicitly {@link GameMsg_BJL.FishBeginnerOffer.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_BJL.FishBeginnerOffer
         * @static
         * @param {GameMsg_BJL.IFishBeginnerOffer} message FishBeginnerOffer message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FishBeginnerOffer.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FishBeginnerOffer message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_BJL.FishBeginnerOffer
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_BJL.FishBeginnerOffer} FishBeginnerOffer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FishBeginnerOffer.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_BJL.FishBeginnerOffer();
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
         * @memberof GameMsg_BJL.FishBeginnerOffer
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_BJL.FishBeginnerOffer} FishBeginnerOffer
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
         * @memberof GameMsg_BJL.FishBeginnerOffer
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
         * @memberof GameMsg_BJL.FishBeginnerOffer
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_BJL.FishBeginnerOffer} FishBeginnerOffer
         */
        FishBeginnerOffer.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_BJL.FishBeginnerOffer)
                return object;
            var message = new $root.GameMsg_BJL.FishBeginnerOffer();
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
         * @memberof GameMsg_BJL.FishBeginnerOffer
         * @static
         * @param {GameMsg_BJL.FishBeginnerOffer} message FishBeginnerOffer
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
         * @memberof GameMsg_BJL.FishBeginnerOffer
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FishBeginnerOffer.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return FishBeginnerOffer;
    })();

    GameMsg_BJL.Cd21SysPoolData = (function() {

        /**
         * Properties of a Cd21SysPoolData.
         * @memberof GameMsg_BJL
         * @interface ICd21SysPoolData
         * @property {number} FlagID Cd21SysPoolData FlagID
         * @property {number|Long} SumBetMoney Cd21SysPoolData SumBetMoney
         * @property {number|Long} SumBetCount Cd21SysPoolData SumBetCount
         * @property {number|Long} PoolAmount Cd21SysPoolData PoolAmount
         */

        /**
         * Constructs a new Cd21SysPoolData.
         * @memberof GameMsg_BJL
         * @classdesc Represents a Cd21SysPoolData.
         * @implements ICd21SysPoolData
         * @constructor
         * @param {GameMsg_BJL.ICd21SysPoolData=} [properties] Properties to set
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
         * @memberof GameMsg_BJL.Cd21SysPoolData
         * @instance
         */
        Cd21SysPoolData.prototype.FlagID = 0;

        /**
         * Cd21SysPoolData SumBetMoney.
         * @member {number|Long} SumBetMoney
         * @memberof GameMsg_BJL.Cd21SysPoolData
         * @instance
         */
        Cd21SysPoolData.prototype.SumBetMoney = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Cd21SysPoolData SumBetCount.
         * @member {number|Long} SumBetCount
         * @memberof GameMsg_BJL.Cd21SysPoolData
         * @instance
         */
        Cd21SysPoolData.prototype.SumBetCount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Cd21SysPoolData PoolAmount.
         * @member {number|Long} PoolAmount
         * @memberof GameMsg_BJL.Cd21SysPoolData
         * @instance
         */
        Cd21SysPoolData.prototype.PoolAmount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new Cd21SysPoolData instance using the specified properties.
         * @function create
         * @memberof GameMsg_BJL.Cd21SysPoolData
         * @static
         * @param {GameMsg_BJL.ICd21SysPoolData=} [properties] Properties to set
         * @returns {GameMsg_BJL.Cd21SysPoolData} Cd21SysPoolData instance
         */
        Cd21SysPoolData.create = function create(properties) {
            return new Cd21SysPoolData(properties);
        };

        /**
         * Encodes the specified Cd21SysPoolData message. Does not implicitly {@link GameMsg_BJL.Cd21SysPoolData.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_BJL.Cd21SysPoolData
         * @static
         * @param {GameMsg_BJL.ICd21SysPoolData} message Cd21SysPoolData message or plain object to encode
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
         * Encodes the specified Cd21SysPoolData message, length delimited. Does not implicitly {@link GameMsg_BJL.Cd21SysPoolData.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_BJL.Cd21SysPoolData
         * @static
         * @param {GameMsg_BJL.ICd21SysPoolData} message Cd21SysPoolData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Cd21SysPoolData.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Cd21SysPoolData message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_BJL.Cd21SysPoolData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_BJL.Cd21SysPoolData} Cd21SysPoolData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Cd21SysPoolData.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_BJL.Cd21SysPoolData();
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
         * @memberof GameMsg_BJL.Cd21SysPoolData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_BJL.Cd21SysPoolData} Cd21SysPoolData
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
         * @memberof GameMsg_BJL.Cd21SysPoolData
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
         * @memberof GameMsg_BJL.Cd21SysPoolData
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_BJL.Cd21SysPoolData} Cd21SysPoolData
         */
        Cd21SysPoolData.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_BJL.Cd21SysPoolData)
                return object;
            var message = new $root.GameMsg_BJL.Cd21SysPoolData();
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
         * @memberof GameMsg_BJL.Cd21SysPoolData
         * @static
         * @param {GameMsg_BJL.Cd21SysPoolData} message Cd21SysPoolData
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
         * @memberof GameMsg_BJL.Cd21SysPoolData
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Cd21SysPoolData.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Cd21SysPoolData;
    })();

    GameMsg_BJL.UserJackpotToBox = (function() {

        /**
         * Properties of a UserJackpotToBox.
         * @memberof GameMsg_BJL
         * @interface IUserJackpotToBox
         * @property {number} UserID UserJackpotToBox UserID
         * @property {number|Long} UpdateAmount UserJackpotToBox UpdateAmount
         */

        /**
         * Constructs a new UserJackpotToBox.
         * @memberof GameMsg_BJL
         * @classdesc Represents a UserJackpotToBox.
         * @implements IUserJackpotToBox
         * @constructor
         * @param {GameMsg_BJL.IUserJackpotToBox=} [properties] Properties to set
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
         * @memberof GameMsg_BJL.UserJackpotToBox
         * @instance
         */
        UserJackpotToBox.prototype.UserID = 0;

        /**
         * UserJackpotToBox UpdateAmount.
         * @member {number|Long} UpdateAmount
         * @memberof GameMsg_BJL.UserJackpotToBox
         * @instance
         */
        UserJackpotToBox.prototype.UpdateAmount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new UserJackpotToBox instance using the specified properties.
         * @function create
         * @memberof GameMsg_BJL.UserJackpotToBox
         * @static
         * @param {GameMsg_BJL.IUserJackpotToBox=} [properties] Properties to set
         * @returns {GameMsg_BJL.UserJackpotToBox} UserJackpotToBox instance
         */
        UserJackpotToBox.create = function create(properties) {
            return new UserJackpotToBox(properties);
        };

        /**
         * Encodes the specified UserJackpotToBox message. Does not implicitly {@link GameMsg_BJL.UserJackpotToBox.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_BJL.UserJackpotToBox
         * @static
         * @param {GameMsg_BJL.IUserJackpotToBox} message UserJackpotToBox message or plain object to encode
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
         * Encodes the specified UserJackpotToBox message, length delimited. Does not implicitly {@link GameMsg_BJL.UserJackpotToBox.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_BJL.UserJackpotToBox
         * @static
         * @param {GameMsg_BJL.IUserJackpotToBox} message UserJackpotToBox message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserJackpotToBox.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UserJackpotToBox message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_BJL.UserJackpotToBox
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_BJL.UserJackpotToBox} UserJackpotToBox
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserJackpotToBox.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_BJL.UserJackpotToBox();
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
         * @memberof GameMsg_BJL.UserJackpotToBox
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_BJL.UserJackpotToBox} UserJackpotToBox
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
         * @memberof GameMsg_BJL.UserJackpotToBox
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
         * @memberof GameMsg_BJL.UserJackpotToBox
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_BJL.UserJackpotToBox} UserJackpotToBox
         */
        UserJackpotToBox.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_BJL.UserJackpotToBox)
                return object;
            var message = new $root.GameMsg_BJL.UserJackpotToBox();
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
         * @memberof GameMsg_BJL.UserJackpotToBox
         * @static
         * @param {GameMsg_BJL.UserJackpotToBox} message UserJackpotToBox
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
         * @memberof GameMsg_BJL.UserJackpotToBox
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserJackpotToBox.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UserJackpotToBox;
    })();

    GameMsg_BJL.JackpotData = (function() {

        /**
         * Properties of a JackpotData.
         * @memberof GameMsg_BJL
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
         * @memberof GameMsg_BJL
         * @classdesc Represents a JackpotData.
         * @implements IJackpotData
         * @constructor
         * @param {GameMsg_BJL.IJackpotData=} [properties] Properties to set
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
         * @memberof GameMsg_BJL.JackpotData
         * @instance
         */
        JackpotData.prototype.GameID = 0;

        /**
         * JackpotData FlagID.
         * @member {number} FlagID
         * @memberof GameMsg_BJL.JackpotData
         * @instance
         */
        JackpotData.prototype.FlagID = 0;

        /**
         * JackpotData TableNo.
         * @member {number} TableNo
         * @memberof GameMsg_BJL.JackpotData
         * @instance
         */
        JackpotData.prototype.TableNo = 0;

        /**
         * JackpotData Contribution.
         * @member {number|Long} Contribution
         * @memberof GameMsg_BJL.JackpotData
         * @instance
         */
        JackpotData.prototype.Contribution = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * JackpotData TotalContribution.
         * @member {number|Long} TotalContribution
         * @memberof GameMsg_BJL.JackpotData
         * @instance
         */
        JackpotData.prototype.TotalContribution = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * JackpotData AwardTotal.
         * @member {number|Long} AwardTotal
         * @memberof GameMsg_BJL.JackpotData
         * @instance
         */
        JackpotData.prototype.AwardTotal = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * JackpotData Level.
         * @member {number} Level
         * @memberof GameMsg_BJL.JackpotData
         * @instance
         */
        JackpotData.prototype.Level = 0;

        /**
         * JackpotData JackpotPool.
         * @member {number|Long} JackpotPool
         * @memberof GameMsg_BJL.JackpotData
         * @instance
         */
        JackpotData.prototype.JackpotPool = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new JackpotData instance using the specified properties.
         * @function create
         * @memberof GameMsg_BJL.JackpotData
         * @static
         * @param {GameMsg_BJL.IJackpotData=} [properties] Properties to set
         * @returns {GameMsg_BJL.JackpotData} JackpotData instance
         */
        JackpotData.create = function create(properties) {
            return new JackpotData(properties);
        };

        /**
         * Encodes the specified JackpotData message. Does not implicitly {@link GameMsg_BJL.JackpotData.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_BJL.JackpotData
         * @static
         * @param {GameMsg_BJL.IJackpotData} message JackpotData message or plain object to encode
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
         * Encodes the specified JackpotData message, length delimited. Does not implicitly {@link GameMsg_BJL.JackpotData.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_BJL.JackpotData
         * @static
         * @param {GameMsg_BJL.IJackpotData} message JackpotData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JackpotData.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a JackpotData message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_BJL.JackpotData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_BJL.JackpotData} JackpotData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JackpotData.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_BJL.JackpotData();
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
         * @memberof GameMsg_BJL.JackpotData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_BJL.JackpotData} JackpotData
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
         * @memberof GameMsg_BJL.JackpotData
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
         * @memberof GameMsg_BJL.JackpotData
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_BJL.JackpotData} JackpotData
         */
        JackpotData.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_BJL.JackpotData)
                return object;
            var message = new $root.GameMsg_BJL.JackpotData();
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
         * @memberof GameMsg_BJL.JackpotData
         * @static
         * @param {GameMsg_BJL.JackpotData} message JackpotData
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
         * @memberof GameMsg_BJL.JackpotData
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        JackpotData.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return JackpotData;
    })();

    GameMsg_BJL.JackpotAllData = (function() {

        /**
         * Properties of a JackpotAllData.
         * @memberof GameMsg_BJL
         * @interface IJackpotAllData
         * @property {Array.<GameMsg_BJL.IJackpotData>|null} [AllData] JackpotAllData AllData
         */

        /**
         * Constructs a new JackpotAllData.
         * @memberof GameMsg_BJL
         * @classdesc Represents a JackpotAllData.
         * @implements IJackpotAllData
         * @constructor
         * @param {GameMsg_BJL.IJackpotAllData=} [properties] Properties to set
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
         * @member {Array.<GameMsg_BJL.IJackpotData>} AllData
         * @memberof GameMsg_BJL.JackpotAllData
         * @instance
         */
        JackpotAllData.prototype.AllData = $util.emptyArray;

        /**
         * Creates a new JackpotAllData instance using the specified properties.
         * @function create
         * @memberof GameMsg_BJL.JackpotAllData
         * @static
         * @param {GameMsg_BJL.IJackpotAllData=} [properties] Properties to set
         * @returns {GameMsg_BJL.JackpotAllData} JackpotAllData instance
         */
        JackpotAllData.create = function create(properties) {
            return new JackpotAllData(properties);
        };

        /**
         * Encodes the specified JackpotAllData message. Does not implicitly {@link GameMsg_BJL.JackpotAllData.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_BJL.JackpotAllData
         * @static
         * @param {GameMsg_BJL.IJackpotAllData} message JackpotAllData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JackpotAllData.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.AllData != null && message.AllData.length)
                for (var i = 0; i < message.AllData.length; ++i)
                    $root.GameMsg_BJL.JackpotData.encode(message.AllData[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified JackpotAllData message, length delimited. Does not implicitly {@link GameMsg_BJL.JackpotAllData.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_BJL.JackpotAllData
         * @static
         * @param {GameMsg_BJL.IJackpotAllData} message JackpotAllData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JackpotAllData.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a JackpotAllData message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_BJL.JackpotAllData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_BJL.JackpotAllData} JackpotAllData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JackpotAllData.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_BJL.JackpotAllData();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.AllData && message.AllData.length))
                        message.AllData = [];
                    message.AllData.push($root.GameMsg_BJL.JackpotData.decode(reader, reader.uint32()));
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
         * @memberof GameMsg_BJL.JackpotAllData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_BJL.JackpotAllData} JackpotAllData
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
         * @memberof GameMsg_BJL.JackpotAllData
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
                    var error = $root.GameMsg_BJL.JackpotData.verify(message.AllData[i]);
                    if (error)
                        return "AllData." + error;
                }
            }
            return null;
        };

        /**
         * Creates a JackpotAllData message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_BJL.JackpotAllData
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_BJL.JackpotAllData} JackpotAllData
         */
        JackpotAllData.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_BJL.JackpotAllData)
                return object;
            var message = new $root.GameMsg_BJL.JackpotAllData();
            if (object.AllData) {
                if (!Array.isArray(object.AllData))
                    throw TypeError(".GameMsg_BJL.JackpotAllData.AllData: array expected");
                message.AllData = [];
                for (var i = 0; i < object.AllData.length; ++i) {
                    if (typeof object.AllData[i] !== "object")
                        throw TypeError(".GameMsg_BJL.JackpotAllData.AllData: object expected");
                    message.AllData[i] = $root.GameMsg_BJL.JackpotData.fromObject(object.AllData[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a JackpotAllData message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_BJL.JackpotAllData
         * @static
         * @param {GameMsg_BJL.JackpotAllData} message JackpotAllData
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
                    object.AllData[j] = $root.GameMsg_BJL.JackpotData.toObject(message.AllData[j], options);
            }
            return object;
        };

        /**
         * Converts this JackpotAllData to JSON.
         * @function toJSON
         * @memberof GameMsg_BJL.JackpotAllData
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        JackpotAllData.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return JackpotAllData;
    })();

    return GameMsg_BJL;
})();

module.exports = $root;
