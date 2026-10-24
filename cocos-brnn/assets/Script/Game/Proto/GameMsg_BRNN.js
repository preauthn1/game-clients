/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

//var $protobuf = require("protobufjs/minimal");
var $protobuf = protobuf;

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.brnn = (function() {

    /**
     * Namespace brnn.
     * @exports brnn
     * @namespace
     */
    var brnn = {};

    brnn.BRNN_Setting = (function() {

        /**
         * Properties of a BRNN_Setting.
         * @memberof brnn
         * @interface IBRNN_Setting
         * @property {Array.<number>|null} [BetCount] BRNN_Setting BetCount
         * @property {number} BetMoney BRNN_Setting BetMoney
         * @property {number|Long} ZhuangLimit BRNN_Setting ZhuangLimit
         * @property {number} MaxZhuang BRNN_Setting MaxZhuang
         * @property {number} OnceFapei BRNN_Setting OnceFapei
         * @property {number|Long|null} [betlimitmoney] BRNN_Setting betlimitmoney
         */

        /**
         * Constructs a new BRNN_Setting.
         * @memberof brnn
         * @classdesc Represents a BRNN_Setting.
         * @implements IBRNN_Setting
         * @constructor
         * @param {brnn.IBRNN_Setting=} [properties] Properties to set
         */
        function BRNN_Setting(properties) {
            this.BetCount = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BRNN_Setting BetCount.
         * @member {Array.<number>} BetCount
         * @memberof brnn.BRNN_Setting
         * @instance
         */
        BRNN_Setting.prototype.BetCount = $util.emptyArray;

        /**
         * BRNN_Setting BetMoney.
         * @member {number} BetMoney
         * @memberof brnn.BRNN_Setting
         * @instance
         */
        BRNN_Setting.prototype.BetMoney = 0;

        /**
         * BRNN_Setting ZhuangLimit.
         * @member {number|Long} ZhuangLimit
         * @memberof brnn.BRNN_Setting
         * @instance
         */
        BRNN_Setting.prototype.ZhuangLimit = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * BRNN_Setting MaxZhuang.
         * @member {number} MaxZhuang
         * @memberof brnn.BRNN_Setting
         * @instance
         */
        BRNN_Setting.prototype.MaxZhuang = 0;

        /**
         * BRNN_Setting OnceFapei.
         * @member {number} OnceFapei
         * @memberof brnn.BRNN_Setting
         * @instance
         */
        BRNN_Setting.prototype.OnceFapei = 0;

        /**
         * BRNN_Setting betlimitmoney.
         * @member {number|Long} betlimitmoney
         * @memberof brnn.BRNN_Setting
         * @instance
         */
        BRNN_Setting.prototype.betlimitmoney = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new BRNN_Setting instance using the specified properties.
         * @function create
         * @memberof brnn.BRNN_Setting
         * @static
         * @param {brnn.IBRNN_Setting=} [properties] Properties to set
         * @returns {brnn.BRNN_Setting} BRNN_Setting instance
         */
        BRNN_Setting.create = function create(properties) {
            return new BRNN_Setting(properties);
        };

        /**
         * Encodes the specified BRNN_Setting message. Does not implicitly {@link brnn.BRNN_Setting.verify|verify} messages.
         * @function encode
         * @memberof brnn.BRNN_Setting
         * @static
         * @param {brnn.IBRNN_Setting} message BRNN_Setting message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BRNN_Setting.encode = function encode(message, writer) {
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
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.MaxZhuang);
            writer.uint32(/* id 5, wireType 0 =*/40).int32(message.OnceFapei);
            if (message.betlimitmoney != null && message.hasOwnProperty("betlimitmoney"))
                writer.uint32(/* id 6, wireType 0 =*/48).int64(message.betlimitmoney);
            return writer;
        };

        /**
         * Encodes the specified BRNN_Setting message, length delimited. Does not implicitly {@link brnn.BRNN_Setting.verify|verify} messages.
         * @function encodeDelimited
         * @memberof brnn.BRNN_Setting
         * @static
         * @param {brnn.IBRNN_Setting} message BRNN_Setting message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BRNN_Setting.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BRNN_Setting message from the specified reader or buffer.
         * @function decode
         * @memberof brnn.BRNN_Setting
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {brnn.BRNN_Setting} BRNN_Setting
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BRNN_Setting.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.brnn.BRNN_Setting();
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
                    message.MaxZhuang = reader.int32();
                    break;
                case 5:
                    message.OnceFapei = reader.int32();
                    break;
                case 6:
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
            if (!message.hasOwnProperty("MaxZhuang"))
                throw $util.ProtocolError("missing required 'MaxZhuang'", { instance: message });
            if (!message.hasOwnProperty("OnceFapei"))
                throw $util.ProtocolError("missing required 'OnceFapei'", { instance: message });
            return message;
        };

        /**
         * Decodes a BRNN_Setting message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof brnn.BRNN_Setting
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {brnn.BRNN_Setting} BRNN_Setting
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BRNN_Setting.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BRNN_Setting message.
         * @function verify
         * @memberof brnn.BRNN_Setting
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BRNN_Setting.verify = function verify(message) {
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
            if (!$util.isInteger(message.MaxZhuang))
                return "MaxZhuang: integer expected";
            if (!$util.isInteger(message.OnceFapei))
                return "OnceFapei: integer expected";
            if (message.betlimitmoney != null && message.hasOwnProperty("betlimitmoney"))
                if (!$util.isInteger(message.betlimitmoney) && !(message.betlimitmoney && $util.isInteger(message.betlimitmoney.low) && $util.isInteger(message.betlimitmoney.high)))
                    return "betlimitmoney: integer|Long expected";
            return null;
        };

        /**
         * Creates a BRNN_Setting message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof brnn.BRNN_Setting
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {brnn.BRNN_Setting} BRNN_Setting
         */
        BRNN_Setting.fromObject = function fromObject(object) {
            if (object instanceof $root.brnn.BRNN_Setting)
                return object;
            var message = new $root.brnn.BRNN_Setting();
            if (object.BetCount) {
                if (!Array.isArray(object.BetCount))
                    throw TypeError(".brnn.BRNN_Setting.BetCount: array expected");
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
            if (object.MaxZhuang != null)
                message.MaxZhuang = object.MaxZhuang | 0;
            if (object.OnceFapei != null)
                message.OnceFapei = object.OnceFapei | 0;
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
         * Creates a plain object from a BRNN_Setting message. Also converts values to other types if specified.
         * @function toObject
         * @memberof brnn.BRNN_Setting
         * @static
         * @param {brnn.BRNN_Setting} message BRNN_Setting
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BRNN_Setting.toObject = function toObject(message, options) {
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
                object.MaxZhuang = 0;
                object.OnceFapei = 0;
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
            if (message.MaxZhuang != null && message.hasOwnProperty("MaxZhuang"))
                object.MaxZhuang = message.MaxZhuang;
            if (message.OnceFapei != null && message.hasOwnProperty("OnceFapei"))
                object.OnceFapei = message.OnceFapei;
            if (message.betlimitmoney != null && message.hasOwnProperty("betlimitmoney"))
                if (typeof message.betlimitmoney === "number")
                    object.betlimitmoney = options.longs === String ? String(message.betlimitmoney) : message.betlimitmoney;
                else
                    object.betlimitmoney = options.longs === String ? $util.Long.prototype.toString.call(message.betlimitmoney) : options.longs === Number ? new $util.LongBits(message.betlimitmoney.low >>> 0, message.betlimitmoney.high >>> 0).toNumber() : message.betlimitmoney;
            return object;
        };

        /**
         * Converts this BRNN_Setting to JSON.
         * @function toJSON
         * @memberof brnn.BRNN_Setting
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BRNN_Setting.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BRNN_Setting;
    })();

    brnn.BRNN_Sate = (function() {

        /**
         * Properties of a BRNN_Sate.
         * @memberof brnn
         * @interface IBRNN_Sate
         * @property {number} State BRNN_Sate State
         * @property {number} Time BRNN_Sate Time
         * @property {boolean} IsScene BRNN_Sate IsScene
         */

        /**
         * Constructs a new BRNN_Sate.
         * @memberof brnn
         * @classdesc Represents a BRNN_Sate.
         * @implements IBRNN_Sate
         * @constructor
         * @param {brnn.IBRNN_Sate=} [properties] Properties to set
         */
        function BRNN_Sate(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BRNN_Sate State.
         * @member {number} State
         * @memberof brnn.BRNN_Sate
         * @instance
         */
        BRNN_Sate.prototype.State = 0;

        /**
         * BRNN_Sate Time.
         * @member {number} Time
         * @memberof brnn.BRNN_Sate
         * @instance
         */
        BRNN_Sate.prototype.Time = 0;

        /**
         * BRNN_Sate IsScene.
         * @member {boolean} IsScene
         * @memberof brnn.BRNN_Sate
         * @instance
         */
        BRNN_Sate.prototype.IsScene = false;

        /**
         * Creates a new BRNN_Sate instance using the specified properties.
         * @function create
         * @memberof brnn.BRNN_Sate
         * @static
         * @param {brnn.IBRNN_Sate=} [properties] Properties to set
         * @returns {brnn.BRNN_Sate} BRNN_Sate instance
         */
        BRNN_Sate.create = function create(properties) {
            return new BRNN_Sate(properties);
        };

        /**
         * Encodes the specified BRNN_Sate message. Does not implicitly {@link brnn.BRNN_Sate.verify|verify} messages.
         * @function encode
         * @memberof brnn.BRNN_Sate
         * @static
         * @param {brnn.IBRNN_Sate} message BRNN_Sate message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BRNN_Sate.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.State);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.Time);
            writer.uint32(/* id 3, wireType 0 =*/24).bool(message.IsScene);
            return writer;
        };

        /**
         * Encodes the specified BRNN_Sate message, length delimited. Does not implicitly {@link brnn.BRNN_Sate.verify|verify} messages.
         * @function encodeDelimited
         * @memberof brnn.BRNN_Sate
         * @static
         * @param {brnn.IBRNN_Sate} message BRNN_Sate message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BRNN_Sate.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BRNN_Sate message from the specified reader or buffer.
         * @function decode
         * @memberof brnn.BRNN_Sate
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {brnn.BRNN_Sate} BRNN_Sate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BRNN_Sate.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.brnn.BRNN_Sate();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.State = reader.int32();
                    break;
                case 2:
                    message.Time = reader.int32();
                    break;
                case 3:
                    message.IsScene = reader.bool();
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
            if (!message.hasOwnProperty("IsScene"))
                throw $util.ProtocolError("missing required 'IsScene'", { instance: message });
            return message;
        };

        /**
         * Decodes a BRNN_Sate message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof brnn.BRNN_Sate
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {brnn.BRNN_Sate} BRNN_Sate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BRNN_Sate.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BRNN_Sate message.
         * @function verify
         * @memberof brnn.BRNN_Sate
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BRNN_Sate.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.State))
                return "State: integer expected";
            if (!$util.isInteger(message.Time))
                return "Time: integer expected";
            if (typeof message.IsScene !== "boolean")
                return "IsScene: boolean expected";
            return null;
        };

        /**
         * Creates a BRNN_Sate message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof brnn.BRNN_Sate
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {brnn.BRNN_Sate} BRNN_Sate
         */
        BRNN_Sate.fromObject = function fromObject(object) {
            if (object instanceof $root.brnn.BRNN_Sate)
                return object;
            var message = new $root.brnn.BRNN_Sate();
            if (object.State != null)
                message.State = object.State | 0;
            if (object.Time != null)
                message.Time = object.Time | 0;
            if (object.IsScene != null)
                message.IsScene = Boolean(object.IsScene);
            return message;
        };

        /**
         * Creates a plain object from a BRNN_Sate message. Also converts values to other types if specified.
         * @function toObject
         * @memberof brnn.BRNN_Sate
         * @static
         * @param {brnn.BRNN_Sate} message BRNN_Sate
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BRNN_Sate.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.State = 0;
                object.Time = 0;
                object.IsScene = false;
            }
            if (message.State != null && message.hasOwnProperty("State"))
                object.State = message.State;
            if (message.Time != null && message.hasOwnProperty("Time"))
                object.Time = message.Time;
            if (message.IsScene != null && message.hasOwnProperty("IsScene"))
                object.IsScene = message.IsScene;
            return object;
        };

        /**
         * Converts this BRNN_Sate to JSON.
         * @function toJSON
         * @memberof brnn.BRNN_Sate
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BRNN_Sate.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BRNN_Sate;
    })();

    brnn.BRNN_UserBetInfo = (function() {

        /**
         * Properties of a BRNN_UserBetInfo.
         * @memberof brnn
         * @interface IBRNN_UserBetInfo
         * @property {number|Long} UserMoney BRNN_UserBetInfo UserMoney
         * @property {Array.<brnn.IBRNN_BroadCastBet>|null} [BetInfo] BRNN_UserBetInfo BetInfo
         */

        /**
         * Constructs a new BRNN_UserBetInfo.
         * @memberof brnn
         * @classdesc Represents a BRNN_UserBetInfo.
         * @implements IBRNN_UserBetInfo
         * @constructor
         * @param {brnn.IBRNN_UserBetInfo=} [properties] Properties to set
         */
        function BRNN_UserBetInfo(properties) {
            this.BetInfo = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BRNN_UserBetInfo UserMoney.
         * @member {number|Long} UserMoney
         * @memberof brnn.BRNN_UserBetInfo
         * @instance
         */
        BRNN_UserBetInfo.prototype.UserMoney = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * BRNN_UserBetInfo BetInfo.
         * @member {Array.<brnn.IBRNN_BroadCastBet>} BetInfo
         * @memberof brnn.BRNN_UserBetInfo
         * @instance
         */
        BRNN_UserBetInfo.prototype.BetInfo = $util.emptyArray;

        /**
         * Creates a new BRNN_UserBetInfo instance using the specified properties.
         * @function create
         * @memberof brnn.BRNN_UserBetInfo
         * @static
         * @param {brnn.IBRNN_UserBetInfo=} [properties] Properties to set
         * @returns {brnn.BRNN_UserBetInfo} BRNN_UserBetInfo instance
         */
        BRNN_UserBetInfo.create = function create(properties) {
            return new BRNN_UserBetInfo(properties);
        };

        /**
         * Encodes the specified BRNN_UserBetInfo message. Does not implicitly {@link brnn.BRNN_UserBetInfo.verify|verify} messages.
         * @function encode
         * @memberof brnn.BRNN_UserBetInfo
         * @static
         * @param {brnn.IBRNN_UserBetInfo} message BRNN_UserBetInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BRNN_UserBetInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int64(message.UserMoney);
            if (message.BetInfo != null && message.BetInfo.length)
                for (var i = 0; i < message.BetInfo.length; ++i)
                    $root.brnn.BRNN_BroadCastBet.encode(message.BetInfo[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified BRNN_UserBetInfo message, length delimited. Does not implicitly {@link brnn.BRNN_UserBetInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof brnn.BRNN_UserBetInfo
         * @static
         * @param {brnn.IBRNN_UserBetInfo} message BRNN_UserBetInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BRNN_UserBetInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BRNN_UserBetInfo message from the specified reader or buffer.
         * @function decode
         * @memberof brnn.BRNN_UserBetInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {brnn.BRNN_UserBetInfo} BRNN_UserBetInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BRNN_UserBetInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.brnn.BRNN_UserBetInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.UserMoney = reader.int64();
                    break;
                case 2:
                    if (!(message.BetInfo && message.BetInfo.length))
                        message.BetInfo = [];
                    message.BetInfo.push($root.brnn.BRNN_BroadCastBet.decode(reader, reader.uint32()));
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
         * Decodes a BRNN_UserBetInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof brnn.BRNN_UserBetInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {brnn.BRNN_UserBetInfo} BRNN_UserBetInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BRNN_UserBetInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BRNN_UserBetInfo message.
         * @function verify
         * @memberof brnn.BRNN_UserBetInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BRNN_UserBetInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.UserMoney) && !(message.UserMoney && $util.isInteger(message.UserMoney.low) && $util.isInteger(message.UserMoney.high)))
                return "UserMoney: integer|Long expected";
            if (message.BetInfo != null && message.hasOwnProperty("BetInfo")) {
                if (!Array.isArray(message.BetInfo))
                    return "BetInfo: array expected";
                for (var i = 0; i < message.BetInfo.length; ++i) {
                    var error = $root.brnn.BRNN_BroadCastBet.verify(message.BetInfo[i]);
                    if (error)
                        return "BetInfo." + error;
                }
            }
            return null;
        };

        /**
         * Creates a BRNN_UserBetInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof brnn.BRNN_UserBetInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {brnn.BRNN_UserBetInfo} BRNN_UserBetInfo
         */
        BRNN_UserBetInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.brnn.BRNN_UserBetInfo)
                return object;
            var message = new $root.brnn.BRNN_UserBetInfo();
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
                    throw TypeError(".brnn.BRNN_UserBetInfo.BetInfo: array expected");
                message.BetInfo = [];
                for (var i = 0; i < object.BetInfo.length; ++i) {
                    if (typeof object.BetInfo[i] !== "object")
                        throw TypeError(".brnn.BRNN_UserBetInfo.BetInfo: object expected");
                    message.BetInfo[i] = $root.brnn.BRNN_BroadCastBet.fromObject(object.BetInfo[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a BRNN_UserBetInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof brnn.BRNN_UserBetInfo
         * @static
         * @param {brnn.BRNN_UserBetInfo} message BRNN_UserBetInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BRNN_UserBetInfo.toObject = function toObject(message, options) {
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
                    object.BetInfo[j] = $root.brnn.BRNN_BroadCastBet.toObject(message.BetInfo[j], options);
            }
            return object;
        };

        /**
         * Converts this BRNN_UserBetInfo to JSON.
         * @function toJSON
         * @memberof brnn.BRNN_UserBetInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BRNN_UserBetInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BRNN_UserBetInfo;
    })();

    brnn.BRNN_BrodcastPokerCard = (function() {

        /**
         * Properties of a BRNN_BrodcastPokerCard.
         * @memberof brnn
         * @interface IBRNN_BrodcastPokerCard
         * @property {Array.<brnn.IBRNN_BrodcastUserPokerCard>|null} [UserPokerCard] BRNN_BrodcastPokerCard UserPokerCard
         */

        /**
         * Constructs a new BRNN_BrodcastPokerCard.
         * @memberof brnn
         * @classdesc Represents a BRNN_BrodcastPokerCard.
         * @implements IBRNN_BrodcastPokerCard
         * @constructor
         * @param {brnn.IBRNN_BrodcastPokerCard=} [properties] Properties to set
         */
        function BRNN_BrodcastPokerCard(properties) {
            this.UserPokerCard = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BRNN_BrodcastPokerCard UserPokerCard.
         * @member {Array.<brnn.IBRNN_BrodcastUserPokerCard>} UserPokerCard
         * @memberof brnn.BRNN_BrodcastPokerCard
         * @instance
         */
        BRNN_BrodcastPokerCard.prototype.UserPokerCard = $util.emptyArray;

        /**
         * Creates a new BRNN_BrodcastPokerCard instance using the specified properties.
         * @function create
         * @memberof brnn.BRNN_BrodcastPokerCard
         * @static
         * @param {brnn.IBRNN_BrodcastPokerCard=} [properties] Properties to set
         * @returns {brnn.BRNN_BrodcastPokerCard} BRNN_BrodcastPokerCard instance
         */
        BRNN_BrodcastPokerCard.create = function create(properties) {
            return new BRNN_BrodcastPokerCard(properties);
        };

        /**
         * Encodes the specified BRNN_BrodcastPokerCard message. Does not implicitly {@link brnn.BRNN_BrodcastPokerCard.verify|verify} messages.
         * @function encode
         * @memberof brnn.BRNN_BrodcastPokerCard
         * @static
         * @param {brnn.IBRNN_BrodcastPokerCard} message BRNN_BrodcastPokerCard message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BRNN_BrodcastPokerCard.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.UserPokerCard != null && message.UserPokerCard.length)
                for (var i = 0; i < message.UserPokerCard.length; ++i)
                    $root.brnn.BRNN_BrodcastUserPokerCard.encode(message.UserPokerCard[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified BRNN_BrodcastPokerCard message, length delimited. Does not implicitly {@link brnn.BRNN_BrodcastPokerCard.verify|verify} messages.
         * @function encodeDelimited
         * @memberof brnn.BRNN_BrodcastPokerCard
         * @static
         * @param {brnn.IBRNN_BrodcastPokerCard} message BRNN_BrodcastPokerCard message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BRNN_BrodcastPokerCard.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BRNN_BrodcastPokerCard message from the specified reader or buffer.
         * @function decode
         * @memberof brnn.BRNN_BrodcastPokerCard
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {brnn.BRNN_BrodcastPokerCard} BRNN_BrodcastPokerCard
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BRNN_BrodcastPokerCard.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.brnn.BRNN_BrodcastPokerCard();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.UserPokerCard && message.UserPokerCard.length))
                        message.UserPokerCard = [];
                    message.UserPokerCard.push($root.brnn.BRNN_BrodcastUserPokerCard.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a BRNN_BrodcastPokerCard message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof brnn.BRNN_BrodcastPokerCard
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {brnn.BRNN_BrodcastPokerCard} BRNN_BrodcastPokerCard
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BRNN_BrodcastPokerCard.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BRNN_BrodcastPokerCard message.
         * @function verify
         * @memberof brnn.BRNN_BrodcastPokerCard
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BRNN_BrodcastPokerCard.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.UserPokerCard != null && message.hasOwnProperty("UserPokerCard")) {
                if (!Array.isArray(message.UserPokerCard))
                    return "UserPokerCard: array expected";
                for (var i = 0; i < message.UserPokerCard.length; ++i) {
                    var error = $root.brnn.BRNN_BrodcastUserPokerCard.verify(message.UserPokerCard[i]);
                    if (error)
                        return "UserPokerCard." + error;
                }
            }
            return null;
        };

        /**
         * Creates a BRNN_BrodcastPokerCard message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof brnn.BRNN_BrodcastPokerCard
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {brnn.BRNN_BrodcastPokerCard} BRNN_BrodcastPokerCard
         */
        BRNN_BrodcastPokerCard.fromObject = function fromObject(object) {
            if (object instanceof $root.brnn.BRNN_BrodcastPokerCard)
                return object;
            var message = new $root.brnn.BRNN_BrodcastPokerCard();
            if (object.UserPokerCard) {
                if (!Array.isArray(object.UserPokerCard))
                    throw TypeError(".brnn.BRNN_BrodcastPokerCard.UserPokerCard: array expected");
                message.UserPokerCard = [];
                for (var i = 0; i < object.UserPokerCard.length; ++i) {
                    if (typeof object.UserPokerCard[i] !== "object")
                        throw TypeError(".brnn.BRNN_BrodcastPokerCard.UserPokerCard: object expected");
                    message.UserPokerCard[i] = $root.brnn.BRNN_BrodcastUserPokerCard.fromObject(object.UserPokerCard[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a BRNN_BrodcastPokerCard message. Also converts values to other types if specified.
         * @function toObject
         * @memberof brnn.BRNN_BrodcastPokerCard
         * @static
         * @param {brnn.BRNN_BrodcastPokerCard} message BRNN_BrodcastPokerCard
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BRNN_BrodcastPokerCard.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.UserPokerCard = [];
            if (message.UserPokerCard && message.UserPokerCard.length) {
                object.UserPokerCard = [];
                for (var j = 0; j < message.UserPokerCard.length; ++j)
                    object.UserPokerCard[j] = $root.brnn.BRNN_BrodcastUserPokerCard.toObject(message.UserPokerCard[j], options);
            }
            return object;
        };

        /**
         * Converts this BRNN_BrodcastPokerCard to JSON.
         * @function toJSON
         * @memberof brnn.BRNN_BrodcastPokerCard
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BRNN_BrodcastPokerCard.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BRNN_BrodcastPokerCard;
    })();

    brnn.BRNN_BrodcastUserPokerCard = (function() {

        /**
         * Properties of a BRNN_BrodcastUserPokerCard.
         * @memberof brnn
         * @interface IBRNN_BrodcastUserPokerCard
         * @property {number} SitNo BRNN_BrodcastUserPokerCard SitNo
         * @property {Array.<brnn.IPokerCard>|null} [CardGroup] BRNN_BrodcastUserPokerCard CardGroup
         */

        /**
         * Constructs a new BRNN_BrodcastUserPokerCard.
         * @memberof brnn
         * @classdesc Represents a BRNN_BrodcastUserPokerCard.
         * @implements IBRNN_BrodcastUserPokerCard
         * @constructor
         * @param {brnn.IBRNN_BrodcastUserPokerCard=} [properties] Properties to set
         */
        function BRNN_BrodcastUserPokerCard(properties) {
            this.CardGroup = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BRNN_BrodcastUserPokerCard SitNo.
         * @member {number} SitNo
         * @memberof brnn.BRNN_BrodcastUserPokerCard
         * @instance
         */
        BRNN_BrodcastUserPokerCard.prototype.SitNo = 0;

        /**
         * BRNN_BrodcastUserPokerCard CardGroup.
         * @member {Array.<brnn.IPokerCard>} CardGroup
         * @memberof brnn.BRNN_BrodcastUserPokerCard
         * @instance
         */
        BRNN_BrodcastUserPokerCard.prototype.CardGroup = $util.emptyArray;

        /**
         * Creates a new BRNN_BrodcastUserPokerCard instance using the specified properties.
         * @function create
         * @memberof brnn.BRNN_BrodcastUserPokerCard
         * @static
         * @param {brnn.IBRNN_BrodcastUserPokerCard=} [properties] Properties to set
         * @returns {brnn.BRNN_BrodcastUserPokerCard} BRNN_BrodcastUserPokerCard instance
         */
        BRNN_BrodcastUserPokerCard.create = function create(properties) {
            return new BRNN_BrodcastUserPokerCard(properties);
        };

        /**
         * Encodes the specified BRNN_BrodcastUserPokerCard message. Does not implicitly {@link brnn.BRNN_BrodcastUserPokerCard.verify|verify} messages.
         * @function encode
         * @memberof brnn.BRNN_BrodcastUserPokerCard
         * @static
         * @param {brnn.IBRNN_BrodcastUserPokerCard} message BRNN_BrodcastUserPokerCard message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BRNN_BrodcastUserPokerCard.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.SitNo);
            if (message.CardGroup != null && message.CardGroup.length)
                for (var i = 0; i < message.CardGroup.length; ++i)
                    $root.brnn.PokerCard.encode(message.CardGroup[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified BRNN_BrodcastUserPokerCard message, length delimited. Does not implicitly {@link brnn.BRNN_BrodcastUserPokerCard.verify|verify} messages.
         * @function encodeDelimited
         * @memberof brnn.BRNN_BrodcastUserPokerCard
         * @static
         * @param {brnn.IBRNN_BrodcastUserPokerCard} message BRNN_BrodcastUserPokerCard message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BRNN_BrodcastUserPokerCard.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BRNN_BrodcastUserPokerCard message from the specified reader or buffer.
         * @function decode
         * @memberof brnn.BRNN_BrodcastUserPokerCard
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {brnn.BRNN_BrodcastUserPokerCard} BRNN_BrodcastUserPokerCard
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BRNN_BrodcastUserPokerCard.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.brnn.BRNN_BrodcastUserPokerCard();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.SitNo = reader.int32();
                    break;
                case 2:
                    if (!(message.CardGroup && message.CardGroup.length))
                        message.CardGroup = [];
                    message.CardGroup.push($root.brnn.PokerCard.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("SitNo"))
                throw $util.ProtocolError("missing required 'SitNo'", { instance: message });
            return message;
        };

        /**
         * Decodes a BRNN_BrodcastUserPokerCard message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof brnn.BRNN_BrodcastUserPokerCard
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {brnn.BRNN_BrodcastUserPokerCard} BRNN_BrodcastUserPokerCard
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BRNN_BrodcastUserPokerCard.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BRNN_BrodcastUserPokerCard message.
         * @function verify
         * @memberof brnn.BRNN_BrodcastUserPokerCard
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BRNN_BrodcastUserPokerCard.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.SitNo))
                return "SitNo: integer expected";
            if (message.CardGroup != null && message.hasOwnProperty("CardGroup")) {
                if (!Array.isArray(message.CardGroup))
                    return "CardGroup: array expected";
                for (var i = 0; i < message.CardGroup.length; ++i) {
                    var error = $root.brnn.PokerCard.verify(message.CardGroup[i]);
                    if (error)
                        return "CardGroup." + error;
                }
            }
            return null;
        };

        /**
         * Creates a BRNN_BrodcastUserPokerCard message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof brnn.BRNN_BrodcastUserPokerCard
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {brnn.BRNN_BrodcastUserPokerCard} BRNN_BrodcastUserPokerCard
         */
        BRNN_BrodcastUserPokerCard.fromObject = function fromObject(object) {
            if (object instanceof $root.brnn.BRNN_BrodcastUserPokerCard)
                return object;
            var message = new $root.brnn.BRNN_BrodcastUserPokerCard();
            if (object.SitNo != null)
                message.SitNo = object.SitNo | 0;
            if (object.CardGroup) {
                if (!Array.isArray(object.CardGroup))
                    throw TypeError(".brnn.BRNN_BrodcastUserPokerCard.CardGroup: array expected");
                message.CardGroup = [];
                for (var i = 0; i < object.CardGroup.length; ++i) {
                    if (typeof object.CardGroup[i] !== "object")
                        throw TypeError(".brnn.BRNN_BrodcastUserPokerCard.CardGroup: object expected");
                    message.CardGroup[i] = $root.brnn.PokerCard.fromObject(object.CardGroup[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a BRNN_BrodcastUserPokerCard message. Also converts values to other types if specified.
         * @function toObject
         * @memberof brnn.BRNN_BrodcastUserPokerCard
         * @static
         * @param {brnn.BRNN_BrodcastUserPokerCard} message BRNN_BrodcastUserPokerCard
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BRNN_BrodcastUserPokerCard.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.CardGroup = [];
            if (options.defaults)
                object.SitNo = 0;
            if (message.SitNo != null && message.hasOwnProperty("SitNo"))
                object.SitNo = message.SitNo;
            if (message.CardGroup && message.CardGroup.length) {
                object.CardGroup = [];
                for (var j = 0; j < message.CardGroup.length; ++j)
                    object.CardGroup[j] = $root.brnn.PokerCard.toObject(message.CardGroup[j], options);
            }
            return object;
        };

        /**
         * Converts this BRNN_BrodcastUserPokerCard to JSON.
         * @function toJSON
         * @memberof brnn.BRNN_BrodcastUserPokerCard
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BRNN_BrodcastUserPokerCard.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BRNN_BrodcastUserPokerCard;
    })();

    brnn.BRNN_BroadCastBetArr = (function() {

        /**
         * Properties of a BRNN_BroadCastBetArr.
         * @memberof brnn
         * @interface IBRNN_BroadCastBetArr
         * @property {number} UserID BRNN_BroadCastBetArr UserID
         * @property {Array.<brnn.IBRNN_BroadCastBet>|null} [BroadCastBetArr] BRNN_BroadCastBetArr BroadCastBetArr
         */

        /**
         * Constructs a new BRNN_BroadCastBetArr.
         * @memberof brnn
         * @classdesc Represents a BRNN_BroadCastBetArr.
         * @implements IBRNN_BroadCastBetArr
         * @constructor
         * @param {brnn.IBRNN_BroadCastBetArr=} [properties] Properties to set
         */
        function BRNN_BroadCastBetArr(properties) {
            this.BroadCastBetArr = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BRNN_BroadCastBetArr UserID.
         * @member {number} UserID
         * @memberof brnn.BRNN_BroadCastBetArr
         * @instance
         */
        BRNN_BroadCastBetArr.prototype.UserID = 0;

        /**
         * BRNN_BroadCastBetArr BroadCastBetArr.
         * @member {Array.<brnn.IBRNN_BroadCastBet>} BroadCastBetArr
         * @memberof brnn.BRNN_BroadCastBetArr
         * @instance
         */
        BRNN_BroadCastBetArr.prototype.BroadCastBetArr = $util.emptyArray;

        /**
         * Creates a new BRNN_BroadCastBetArr instance using the specified properties.
         * @function create
         * @memberof brnn.BRNN_BroadCastBetArr
         * @static
         * @param {brnn.IBRNN_BroadCastBetArr=} [properties] Properties to set
         * @returns {brnn.BRNN_BroadCastBetArr} BRNN_BroadCastBetArr instance
         */
        BRNN_BroadCastBetArr.create = function create(properties) {
            return new BRNN_BroadCastBetArr(properties);
        };

        /**
         * Encodes the specified BRNN_BroadCastBetArr message. Does not implicitly {@link brnn.BRNN_BroadCastBetArr.verify|verify} messages.
         * @function encode
         * @memberof brnn.BRNN_BroadCastBetArr
         * @static
         * @param {brnn.IBRNN_BroadCastBetArr} message BRNN_BroadCastBetArr message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BRNN_BroadCastBetArr.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.UserID);
            if (message.BroadCastBetArr != null && message.BroadCastBetArr.length)
                for (var i = 0; i < message.BroadCastBetArr.length; ++i)
                    $root.brnn.BRNN_BroadCastBet.encode(message.BroadCastBetArr[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified BRNN_BroadCastBetArr message, length delimited. Does not implicitly {@link brnn.BRNN_BroadCastBetArr.verify|verify} messages.
         * @function encodeDelimited
         * @memberof brnn.BRNN_BroadCastBetArr
         * @static
         * @param {brnn.IBRNN_BroadCastBetArr} message BRNN_BroadCastBetArr message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BRNN_BroadCastBetArr.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BRNN_BroadCastBetArr message from the specified reader or buffer.
         * @function decode
         * @memberof brnn.BRNN_BroadCastBetArr
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {brnn.BRNN_BroadCastBetArr} BRNN_BroadCastBetArr
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BRNN_BroadCastBetArr.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.brnn.BRNN_BroadCastBetArr();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.UserID = reader.int32();
                    break;
                case 2:
                    if (!(message.BroadCastBetArr && message.BroadCastBetArr.length))
                        message.BroadCastBetArr = [];
                    message.BroadCastBetArr.push($root.brnn.BRNN_BroadCastBet.decode(reader, reader.uint32()));
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
         * Decodes a BRNN_BroadCastBetArr message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof brnn.BRNN_BroadCastBetArr
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {brnn.BRNN_BroadCastBetArr} BRNN_BroadCastBetArr
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BRNN_BroadCastBetArr.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BRNN_BroadCastBetArr message.
         * @function verify
         * @memberof brnn.BRNN_BroadCastBetArr
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BRNN_BroadCastBetArr.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.UserID))
                return "UserID: integer expected";
            if (message.BroadCastBetArr != null && message.hasOwnProperty("BroadCastBetArr")) {
                if (!Array.isArray(message.BroadCastBetArr))
                    return "BroadCastBetArr: array expected";
                for (var i = 0; i < message.BroadCastBetArr.length; ++i) {
                    var error = $root.brnn.BRNN_BroadCastBet.verify(message.BroadCastBetArr[i]);
                    if (error)
                        return "BroadCastBetArr." + error;
                }
            }
            return null;
        };

        /**
         * Creates a BRNN_BroadCastBetArr message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof brnn.BRNN_BroadCastBetArr
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {brnn.BRNN_BroadCastBetArr} BRNN_BroadCastBetArr
         */
        BRNN_BroadCastBetArr.fromObject = function fromObject(object) {
            if (object instanceof $root.brnn.BRNN_BroadCastBetArr)
                return object;
            var message = new $root.brnn.BRNN_BroadCastBetArr();
            if (object.UserID != null)
                message.UserID = object.UserID | 0;
            if (object.BroadCastBetArr) {
                if (!Array.isArray(object.BroadCastBetArr))
                    throw TypeError(".brnn.BRNN_BroadCastBetArr.BroadCastBetArr: array expected");
                message.BroadCastBetArr = [];
                for (var i = 0; i < object.BroadCastBetArr.length; ++i) {
                    if (typeof object.BroadCastBetArr[i] !== "object")
                        throw TypeError(".brnn.BRNN_BroadCastBetArr.BroadCastBetArr: object expected");
                    message.BroadCastBetArr[i] = $root.brnn.BRNN_BroadCastBet.fromObject(object.BroadCastBetArr[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a BRNN_BroadCastBetArr message. Also converts values to other types if specified.
         * @function toObject
         * @memberof brnn.BRNN_BroadCastBetArr
         * @static
         * @param {brnn.BRNN_BroadCastBetArr} message BRNN_BroadCastBetArr
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BRNN_BroadCastBetArr.toObject = function toObject(message, options) {
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
                    object.BroadCastBetArr[j] = $root.brnn.BRNN_BroadCastBet.toObject(message.BroadCastBetArr[j], options);
            }
            return object;
        };

        /**
         * Converts this BRNN_BroadCastBetArr to JSON.
         * @function toJSON
         * @memberof brnn.BRNN_BroadCastBetArr
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BRNN_BroadCastBetArr.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BRNN_BroadCastBetArr;
    })();

    brnn.BRNN_BroadCastBet = (function() {

        /**
         * Properties of a BRNN_BroadCastBet.
         * @memberof brnn
         * @interface IBRNN_BroadCastBet
         * @property {number} Type BRNN_BroadCastBet Type
         * @property {number|Long} Money BRNN_BroadCastBet Money
         * @property {number|null} [UserID] BRNN_BroadCastBet UserID
         * @property {boolean} LuckyStar BRNN_BroadCastBet LuckyStar
         */

        /**
         * Constructs a new BRNN_BroadCastBet.
         * @memberof brnn
         * @classdesc Represents a BRNN_BroadCastBet.
         * @implements IBRNN_BroadCastBet
         * @constructor
         * @param {brnn.IBRNN_BroadCastBet=} [properties] Properties to set
         */
        function BRNN_BroadCastBet(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BRNN_BroadCastBet Type.
         * @member {number} Type
         * @memberof brnn.BRNN_BroadCastBet
         * @instance
         */
        BRNN_BroadCastBet.prototype.Type = 0;

        /**
         * BRNN_BroadCastBet Money.
         * @member {number|Long} Money
         * @memberof brnn.BRNN_BroadCastBet
         * @instance
         */
        BRNN_BroadCastBet.prototype.Money = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * BRNN_BroadCastBet UserID.
         * @member {number} UserID
         * @memberof brnn.BRNN_BroadCastBet
         * @instance
         */
        BRNN_BroadCastBet.prototype.UserID = 0;

        /**
         * BRNN_BroadCastBet LuckyStar.
         * @member {boolean} LuckyStar
         * @memberof brnn.BRNN_BroadCastBet
         * @instance
         */
        BRNN_BroadCastBet.prototype.LuckyStar = false;

        /**
         * Creates a new BRNN_BroadCastBet instance using the specified properties.
         * @function create
         * @memberof brnn.BRNN_BroadCastBet
         * @static
         * @param {brnn.IBRNN_BroadCastBet=} [properties] Properties to set
         * @returns {brnn.BRNN_BroadCastBet} BRNN_BroadCastBet instance
         */
        BRNN_BroadCastBet.create = function create(properties) {
            return new BRNN_BroadCastBet(properties);
        };

        /**
         * Encodes the specified BRNN_BroadCastBet message. Does not implicitly {@link brnn.BRNN_BroadCastBet.verify|verify} messages.
         * @function encode
         * @memberof brnn.BRNN_BroadCastBet
         * @static
         * @param {brnn.IBRNN_BroadCastBet} message BRNN_BroadCastBet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BRNN_BroadCastBet.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.Type);
            writer.uint32(/* id 2, wireType 0 =*/16).int64(message.Money);
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.UserID);
            writer.uint32(/* id 4, wireType 0 =*/32).bool(message.LuckyStar);
            return writer;
        };

        /**
         * Encodes the specified BRNN_BroadCastBet message, length delimited. Does not implicitly {@link brnn.BRNN_BroadCastBet.verify|verify} messages.
         * @function encodeDelimited
         * @memberof brnn.BRNN_BroadCastBet
         * @static
         * @param {brnn.IBRNN_BroadCastBet} message BRNN_BroadCastBet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BRNN_BroadCastBet.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BRNN_BroadCastBet message from the specified reader or buffer.
         * @function decode
         * @memberof brnn.BRNN_BroadCastBet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {brnn.BRNN_BroadCastBet} BRNN_BroadCastBet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BRNN_BroadCastBet.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.brnn.BRNN_BroadCastBet();
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
                    message.UserID = reader.int32();
                    break;
                case 4:
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
         * Decodes a BRNN_BroadCastBet message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof brnn.BRNN_BroadCastBet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {brnn.BRNN_BroadCastBet} BRNN_BroadCastBet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BRNN_BroadCastBet.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BRNN_BroadCastBet message.
         * @function verify
         * @memberof brnn.BRNN_BroadCastBet
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BRNN_BroadCastBet.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.Type))
                return "Type: integer expected";
            if (!$util.isInteger(message.Money) && !(message.Money && $util.isInteger(message.Money.low) && $util.isInteger(message.Money.high)))
                return "Money: integer|Long expected";
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                if (!$util.isInteger(message.UserID))
                    return "UserID: integer expected";
            if (typeof message.LuckyStar !== "boolean")
                return "LuckyStar: boolean expected";
            return null;
        };

        /**
         * Creates a BRNN_BroadCastBet message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof brnn.BRNN_BroadCastBet
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {brnn.BRNN_BroadCastBet} BRNN_BroadCastBet
         */
        BRNN_BroadCastBet.fromObject = function fromObject(object) {
            if (object instanceof $root.brnn.BRNN_BroadCastBet)
                return object;
            var message = new $root.brnn.BRNN_BroadCastBet();
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
            if (object.UserID != null)
                message.UserID = object.UserID | 0;
            if (object.LuckyStar != null)
                message.LuckyStar = Boolean(object.LuckyStar);
            return message;
        };

        /**
         * Creates a plain object from a BRNN_BroadCastBet message. Also converts values to other types if specified.
         * @function toObject
         * @memberof brnn.BRNN_BroadCastBet
         * @static
         * @param {brnn.BRNN_BroadCastBet} message BRNN_BroadCastBet
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BRNN_BroadCastBet.toObject = function toObject(message, options) {
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
                object.UserID = 0;
                object.LuckyStar = false;
            }
            if (message.Type != null && message.hasOwnProperty("Type"))
                object.Type = message.Type;
            if (message.Money != null && message.hasOwnProperty("Money"))
                if (typeof message.Money === "number")
                    object.Money = options.longs === String ? String(message.Money) : message.Money;
                else
                    object.Money = options.longs === String ? $util.Long.prototype.toString.call(message.Money) : options.longs === Number ? new $util.LongBits(message.Money.low >>> 0, message.Money.high >>> 0).toNumber() : message.Money;
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                object.UserID = message.UserID;
            if (message.LuckyStar != null && message.hasOwnProperty("LuckyStar"))
                object.LuckyStar = message.LuckyStar;
            return object;
        };

        /**
         * Converts this BRNN_BroadCastBet to JSON.
         * @function toJSON
         * @memberof brnn.BRNN_BroadCastBet
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BRNN_BroadCastBet.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BRNN_BroadCastBet;
    })();

    brnn.BRNN_BroadCastTotal = (function() {

        /**
         * Properties of a BRNN_BroadCastTotal.
         * @memberof brnn
         * @interface IBRNN_BroadCastTotal
         * @property {number|Long} AlreadyTotalBet BRNN_BroadCastTotal AlreadyTotalBet
         * @property {number|Long} AbleTotalBet BRNN_BroadCastTotal AbleTotalBet
         */

        /**
         * Constructs a new BRNN_BroadCastTotal.
         * @memberof brnn
         * @classdesc Represents a BRNN_BroadCastTotal.
         * @implements IBRNN_BroadCastTotal
         * @constructor
         * @param {brnn.IBRNN_BroadCastTotal=} [properties] Properties to set
         */
        function BRNN_BroadCastTotal(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BRNN_BroadCastTotal AlreadyTotalBet.
         * @member {number|Long} AlreadyTotalBet
         * @memberof brnn.BRNN_BroadCastTotal
         * @instance
         */
        BRNN_BroadCastTotal.prototype.AlreadyTotalBet = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * BRNN_BroadCastTotal AbleTotalBet.
         * @member {number|Long} AbleTotalBet
         * @memberof brnn.BRNN_BroadCastTotal
         * @instance
         */
        BRNN_BroadCastTotal.prototype.AbleTotalBet = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new BRNN_BroadCastTotal instance using the specified properties.
         * @function create
         * @memberof brnn.BRNN_BroadCastTotal
         * @static
         * @param {brnn.IBRNN_BroadCastTotal=} [properties] Properties to set
         * @returns {brnn.BRNN_BroadCastTotal} BRNN_BroadCastTotal instance
         */
        BRNN_BroadCastTotal.create = function create(properties) {
            return new BRNN_BroadCastTotal(properties);
        };

        /**
         * Encodes the specified BRNN_BroadCastTotal message. Does not implicitly {@link brnn.BRNN_BroadCastTotal.verify|verify} messages.
         * @function encode
         * @memberof brnn.BRNN_BroadCastTotal
         * @static
         * @param {brnn.IBRNN_BroadCastTotal} message BRNN_BroadCastTotal message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BRNN_BroadCastTotal.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int64(message.AlreadyTotalBet);
            writer.uint32(/* id 2, wireType 0 =*/16).int64(message.AbleTotalBet);
            return writer;
        };

        /**
         * Encodes the specified BRNN_BroadCastTotal message, length delimited. Does not implicitly {@link brnn.BRNN_BroadCastTotal.verify|verify} messages.
         * @function encodeDelimited
         * @memberof brnn.BRNN_BroadCastTotal
         * @static
         * @param {brnn.IBRNN_BroadCastTotal} message BRNN_BroadCastTotal message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BRNN_BroadCastTotal.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BRNN_BroadCastTotal message from the specified reader or buffer.
         * @function decode
         * @memberof brnn.BRNN_BroadCastTotal
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {brnn.BRNN_BroadCastTotal} BRNN_BroadCastTotal
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BRNN_BroadCastTotal.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.brnn.BRNN_BroadCastTotal();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.AlreadyTotalBet = reader.int64();
                    break;
                case 2:
                    message.AbleTotalBet = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("AlreadyTotalBet"))
                throw $util.ProtocolError("missing required 'AlreadyTotalBet'", { instance: message });
            if (!message.hasOwnProperty("AbleTotalBet"))
                throw $util.ProtocolError("missing required 'AbleTotalBet'", { instance: message });
            return message;
        };

        /**
         * Decodes a BRNN_BroadCastTotal message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof brnn.BRNN_BroadCastTotal
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {brnn.BRNN_BroadCastTotal} BRNN_BroadCastTotal
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BRNN_BroadCastTotal.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BRNN_BroadCastTotal message.
         * @function verify
         * @memberof brnn.BRNN_BroadCastTotal
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BRNN_BroadCastTotal.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.AlreadyTotalBet) && !(message.AlreadyTotalBet && $util.isInteger(message.AlreadyTotalBet.low) && $util.isInteger(message.AlreadyTotalBet.high)))
                return "AlreadyTotalBet: integer|Long expected";
            if (!$util.isInteger(message.AbleTotalBet) && !(message.AbleTotalBet && $util.isInteger(message.AbleTotalBet.low) && $util.isInteger(message.AbleTotalBet.high)))
                return "AbleTotalBet: integer|Long expected";
            return null;
        };

        /**
         * Creates a BRNN_BroadCastTotal message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof brnn.BRNN_BroadCastTotal
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {brnn.BRNN_BroadCastTotal} BRNN_BroadCastTotal
         */
        BRNN_BroadCastTotal.fromObject = function fromObject(object) {
            if (object instanceof $root.brnn.BRNN_BroadCastTotal)
                return object;
            var message = new $root.brnn.BRNN_BroadCastTotal();
            if (object.AlreadyTotalBet != null)
                if ($util.Long)
                    (message.AlreadyTotalBet = $util.Long.fromValue(object.AlreadyTotalBet)).unsigned = false;
                else if (typeof object.AlreadyTotalBet === "string")
                    message.AlreadyTotalBet = parseInt(object.AlreadyTotalBet, 10);
                else if (typeof object.AlreadyTotalBet === "number")
                    message.AlreadyTotalBet = object.AlreadyTotalBet;
                else if (typeof object.AlreadyTotalBet === "object")
                    message.AlreadyTotalBet = new $util.LongBits(object.AlreadyTotalBet.low >>> 0, object.AlreadyTotalBet.high >>> 0).toNumber();
            if (object.AbleTotalBet != null)
                if ($util.Long)
                    (message.AbleTotalBet = $util.Long.fromValue(object.AbleTotalBet)).unsigned = false;
                else if (typeof object.AbleTotalBet === "string")
                    message.AbleTotalBet = parseInt(object.AbleTotalBet, 10);
                else if (typeof object.AbleTotalBet === "number")
                    message.AbleTotalBet = object.AbleTotalBet;
                else if (typeof object.AbleTotalBet === "object")
                    message.AbleTotalBet = new $util.LongBits(object.AbleTotalBet.low >>> 0, object.AbleTotalBet.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a BRNN_BroadCastTotal message. Also converts values to other types if specified.
         * @function toObject
         * @memberof brnn.BRNN_BroadCastTotal
         * @static
         * @param {brnn.BRNN_BroadCastTotal} message BRNN_BroadCastTotal
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BRNN_BroadCastTotal.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.AlreadyTotalBet = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.AlreadyTotalBet = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.AbleTotalBet = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.AbleTotalBet = options.longs === String ? "0" : 0;
            }
            if (message.AlreadyTotalBet != null && message.hasOwnProperty("AlreadyTotalBet"))
                if (typeof message.AlreadyTotalBet === "number")
                    object.AlreadyTotalBet = options.longs === String ? String(message.AlreadyTotalBet) : message.AlreadyTotalBet;
                else
                    object.AlreadyTotalBet = options.longs === String ? $util.Long.prototype.toString.call(message.AlreadyTotalBet) : options.longs === Number ? new $util.LongBits(message.AlreadyTotalBet.low >>> 0, message.AlreadyTotalBet.high >>> 0).toNumber() : message.AlreadyTotalBet;
            if (message.AbleTotalBet != null && message.hasOwnProperty("AbleTotalBet"))
                if (typeof message.AbleTotalBet === "number")
                    object.AbleTotalBet = options.longs === String ? String(message.AbleTotalBet) : message.AbleTotalBet;
                else
                    object.AbleTotalBet = options.longs === String ? $util.Long.prototype.toString.call(message.AbleTotalBet) : options.longs === Number ? new $util.LongBits(message.AbleTotalBet.low >>> 0, message.AbleTotalBet.high >>> 0).toNumber() : message.AbleTotalBet;
            return object;
        };

        /**
         * Converts this BRNN_BroadCastTotal to JSON.
         * @function toJSON
         * @memberof brnn.BRNN_BroadCastTotal
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BRNN_BroadCastTotal.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BRNN_BroadCastTotal;
    })();

    brnn.BRNN_BetArr = (function() {

        /**
         * Properties of a BRNN_BetArr.
         * @memberof brnn
         * @interface IBRNN_BetArr
         * @property {Array.<brnn.IBRNN_Bet>|null} [BetArr] BRNN_BetArr BetArr
         */

        /**
         * Constructs a new BRNN_BetArr.
         * @memberof brnn
         * @classdesc Represents a BRNN_BetArr.
         * @implements IBRNN_BetArr
         * @constructor
         * @param {brnn.IBRNN_BetArr=} [properties] Properties to set
         */
        function BRNN_BetArr(properties) {
            this.BetArr = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BRNN_BetArr BetArr.
         * @member {Array.<brnn.IBRNN_Bet>} BetArr
         * @memberof brnn.BRNN_BetArr
         * @instance
         */
        BRNN_BetArr.prototype.BetArr = $util.emptyArray;

        /**
         * Creates a new BRNN_BetArr instance using the specified properties.
         * @function create
         * @memberof brnn.BRNN_BetArr
         * @static
         * @param {brnn.IBRNN_BetArr=} [properties] Properties to set
         * @returns {brnn.BRNN_BetArr} BRNN_BetArr instance
         */
        BRNN_BetArr.create = function create(properties) {
            return new BRNN_BetArr(properties);
        };

        /**
         * Encodes the specified BRNN_BetArr message. Does not implicitly {@link brnn.BRNN_BetArr.verify|verify} messages.
         * @function encode
         * @memberof brnn.BRNN_BetArr
         * @static
         * @param {brnn.IBRNN_BetArr} message BRNN_BetArr message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BRNN_BetArr.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.BetArr != null && message.BetArr.length)
                for (var i = 0; i < message.BetArr.length; ++i)
                    $root.brnn.BRNN_Bet.encode(message.BetArr[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified BRNN_BetArr message, length delimited. Does not implicitly {@link brnn.BRNN_BetArr.verify|verify} messages.
         * @function encodeDelimited
         * @memberof brnn.BRNN_BetArr
         * @static
         * @param {brnn.IBRNN_BetArr} message BRNN_BetArr message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BRNN_BetArr.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BRNN_BetArr message from the specified reader or buffer.
         * @function decode
         * @memberof brnn.BRNN_BetArr
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {brnn.BRNN_BetArr} BRNN_BetArr
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BRNN_BetArr.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.brnn.BRNN_BetArr();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.BetArr && message.BetArr.length))
                        message.BetArr = [];
                    message.BetArr.push($root.brnn.BRNN_Bet.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a BRNN_BetArr message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof brnn.BRNN_BetArr
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {brnn.BRNN_BetArr} BRNN_BetArr
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BRNN_BetArr.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BRNN_BetArr message.
         * @function verify
         * @memberof brnn.BRNN_BetArr
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BRNN_BetArr.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.BetArr != null && message.hasOwnProperty("BetArr")) {
                if (!Array.isArray(message.BetArr))
                    return "BetArr: array expected";
                for (var i = 0; i < message.BetArr.length; ++i) {
                    var error = $root.brnn.BRNN_Bet.verify(message.BetArr[i]);
                    if (error)
                        return "BetArr." + error;
                }
            }
            return null;
        };

        /**
         * Creates a BRNN_BetArr message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof brnn.BRNN_BetArr
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {brnn.BRNN_BetArr} BRNN_BetArr
         */
        BRNN_BetArr.fromObject = function fromObject(object) {
            if (object instanceof $root.brnn.BRNN_BetArr)
                return object;
            var message = new $root.brnn.BRNN_BetArr();
            if (object.BetArr) {
                if (!Array.isArray(object.BetArr))
                    throw TypeError(".brnn.BRNN_BetArr.BetArr: array expected");
                message.BetArr = [];
                for (var i = 0; i < object.BetArr.length; ++i) {
                    if (typeof object.BetArr[i] !== "object")
                        throw TypeError(".brnn.BRNN_BetArr.BetArr: object expected");
                    message.BetArr[i] = $root.brnn.BRNN_Bet.fromObject(object.BetArr[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a BRNN_BetArr message. Also converts values to other types if specified.
         * @function toObject
         * @memberof brnn.BRNN_BetArr
         * @static
         * @param {brnn.BRNN_BetArr} message BRNN_BetArr
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BRNN_BetArr.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.BetArr = [];
            if (message.BetArr && message.BetArr.length) {
                object.BetArr = [];
                for (var j = 0; j < message.BetArr.length; ++j)
                    object.BetArr[j] = $root.brnn.BRNN_Bet.toObject(message.BetArr[j], options);
            }
            return object;
        };

        /**
         * Converts this BRNN_BetArr to JSON.
         * @function toJSON
         * @memberof brnn.BRNN_BetArr
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BRNN_BetArr.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BRNN_BetArr;
    })();

    brnn.BRNN_Bet = (function() {

        /**
         * Properties of a BRNN_Bet.
         * @memberof brnn
         * @interface IBRNN_Bet
         * @property {number} BetType BRNN_Bet BetType
         * @property {number} Count BRNN_Bet Count
         */

        /**
         * Constructs a new BRNN_Bet.
         * @memberof brnn
         * @classdesc Represents a BRNN_Bet.
         * @implements IBRNN_Bet
         * @constructor
         * @param {brnn.IBRNN_Bet=} [properties] Properties to set
         */
        function BRNN_Bet(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BRNN_Bet BetType.
         * @member {number} BetType
         * @memberof brnn.BRNN_Bet
         * @instance
         */
        BRNN_Bet.prototype.BetType = 0;

        /**
         * BRNN_Bet Count.
         * @member {number} Count
         * @memberof brnn.BRNN_Bet
         * @instance
         */
        BRNN_Bet.prototype.Count = 0;

        /**
         * Creates a new BRNN_Bet instance using the specified properties.
         * @function create
         * @memberof brnn.BRNN_Bet
         * @static
         * @param {brnn.IBRNN_Bet=} [properties] Properties to set
         * @returns {brnn.BRNN_Bet} BRNN_Bet instance
         */
        BRNN_Bet.create = function create(properties) {
            return new BRNN_Bet(properties);
        };

        /**
         * Encodes the specified BRNN_Bet message. Does not implicitly {@link brnn.BRNN_Bet.verify|verify} messages.
         * @function encode
         * @memberof brnn.BRNN_Bet
         * @static
         * @param {brnn.IBRNN_Bet} message BRNN_Bet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BRNN_Bet.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.BetType);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.Count);
            return writer;
        };

        /**
         * Encodes the specified BRNN_Bet message, length delimited. Does not implicitly {@link brnn.BRNN_Bet.verify|verify} messages.
         * @function encodeDelimited
         * @memberof brnn.BRNN_Bet
         * @static
         * @param {brnn.IBRNN_Bet} message BRNN_Bet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BRNN_Bet.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BRNN_Bet message from the specified reader or buffer.
         * @function decode
         * @memberof brnn.BRNN_Bet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {brnn.BRNN_Bet} BRNN_Bet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BRNN_Bet.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.brnn.BRNN_Bet();
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
         * Decodes a BRNN_Bet message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof brnn.BRNN_Bet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {brnn.BRNN_Bet} BRNN_Bet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BRNN_Bet.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BRNN_Bet message.
         * @function verify
         * @memberof brnn.BRNN_Bet
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BRNN_Bet.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.BetType))
                return "BetType: integer expected";
            if (!$util.isInteger(message.Count))
                return "Count: integer expected";
            return null;
        };

        /**
         * Creates a BRNN_Bet message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof brnn.BRNN_Bet
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {brnn.BRNN_Bet} BRNN_Bet
         */
        BRNN_Bet.fromObject = function fromObject(object) {
            if (object instanceof $root.brnn.BRNN_Bet)
                return object;
            var message = new $root.brnn.BRNN_Bet();
            if (object.BetType != null)
                message.BetType = object.BetType | 0;
            if (object.Count != null)
                message.Count = object.Count | 0;
            return message;
        };

        /**
         * Creates a plain object from a BRNN_Bet message. Also converts values to other types if specified.
         * @function toObject
         * @memberof brnn.BRNN_Bet
         * @static
         * @param {brnn.BRNN_Bet} message BRNN_Bet
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BRNN_Bet.toObject = function toObject(message, options) {
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
         * Converts this BRNN_Bet to JSON.
         * @function toJSON
         * @memberof brnn.BRNN_Bet
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BRNN_Bet.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BRNN_Bet;
    })();

    brnn.BRNN_BetRet = (function() {

        /**
         * Properties of a BRNN_BetRet.
         * @memberof brnn
         * @interface IBRNN_BetRet
         * @property {brnn.RetType} Ret BRNN_BetRet Ret
         * @property {number|Long} Money BRNN_BetRet Money
         * @property {number|null} [Type] BRNN_BetRet Type
         * @property {Array.<brnn.IBRNN_Bet>|null} [BetArr] BRNN_BetRet BetArr
         */

        /**
         * Constructs a new BRNN_BetRet.
         * @memberof brnn
         * @classdesc Represents a BRNN_BetRet.
         * @implements IBRNN_BetRet
         * @constructor
         * @param {brnn.IBRNN_BetRet=} [properties] Properties to set
         */
        function BRNN_BetRet(properties) {
            this.BetArr = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BRNN_BetRet Ret.
         * @member {brnn.RetType} Ret
         * @memberof brnn.BRNN_BetRet
         * @instance
         */
        BRNN_BetRet.prototype.Ret = 0;

        /**
         * BRNN_BetRet Money.
         * @member {number|Long} Money
         * @memberof brnn.BRNN_BetRet
         * @instance
         */
        BRNN_BetRet.prototype.Money = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * BRNN_BetRet Type.
         * @member {number} Type
         * @memberof brnn.BRNN_BetRet
         * @instance
         */
        BRNN_BetRet.prototype.Type = 0;

        /**
         * BRNN_BetRet BetArr.
         * @member {Array.<brnn.IBRNN_Bet>} BetArr
         * @memberof brnn.BRNN_BetRet
         * @instance
         */
        BRNN_BetRet.prototype.BetArr = $util.emptyArray;

        /**
         * Creates a new BRNN_BetRet instance using the specified properties.
         * @function create
         * @memberof brnn.BRNN_BetRet
         * @static
         * @param {brnn.IBRNN_BetRet=} [properties] Properties to set
         * @returns {brnn.BRNN_BetRet} BRNN_BetRet instance
         */
        BRNN_BetRet.create = function create(properties) {
            return new BRNN_BetRet(properties);
        };

        /**
         * Encodes the specified BRNN_BetRet message. Does not implicitly {@link brnn.BRNN_BetRet.verify|verify} messages.
         * @function encode
         * @memberof brnn.BRNN_BetRet
         * @static
         * @param {brnn.IBRNN_BetRet} message BRNN_BetRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BRNN_BetRet.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.Ret);
            writer.uint32(/* id 2, wireType 0 =*/16).int64(message.Money);
            if (message.Type != null && message.hasOwnProperty("Type"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.Type);
            if (message.BetArr != null && message.BetArr.length)
                for (var i = 0; i < message.BetArr.length; ++i)
                    $root.brnn.BRNN_Bet.encode(message.BetArr[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified BRNN_BetRet message, length delimited. Does not implicitly {@link brnn.BRNN_BetRet.verify|verify} messages.
         * @function encodeDelimited
         * @memberof brnn.BRNN_BetRet
         * @static
         * @param {brnn.IBRNN_BetRet} message BRNN_BetRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BRNN_BetRet.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BRNN_BetRet message from the specified reader or buffer.
         * @function decode
         * @memberof brnn.BRNN_BetRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {brnn.BRNN_BetRet} BRNN_BetRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BRNN_BetRet.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.brnn.BRNN_BetRet();
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
                    message.BetArr.push($root.brnn.BRNN_Bet.decode(reader, reader.uint32()));
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
         * Decodes a BRNN_BetRet message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof brnn.BRNN_BetRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {brnn.BRNN_BetRet} BRNN_BetRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BRNN_BetRet.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BRNN_BetRet message.
         * @function verify
         * @memberof brnn.BRNN_BetRet
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BRNN_BetRet.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            switch (message.Ret) {
            default:
                return "Ret: enum value expected";
            case 0:
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
                break;
            }
            if (!$util.isInteger(message.Money) && !(message.Money && $util.isInteger(message.Money.low) && $util.isInteger(message.Money.high)))
                return "Money: integer|Long expected";
            if (message.Type != null && message.hasOwnProperty("Type"))
                if (!$util.isInteger(message.Type))
                    return "Type: integer expected";
            if (message.BetArr != null && message.hasOwnProperty("BetArr")) {
                if (!Array.isArray(message.BetArr))
                    return "BetArr: array expected";
                for (var i = 0; i < message.BetArr.length; ++i) {
                    var error = $root.brnn.BRNN_Bet.verify(message.BetArr[i]);
                    if (error)
                        return "BetArr." + error;
                }
            }
            return null;
        };

        /**
         * Creates a BRNN_BetRet message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof brnn.BRNN_BetRet
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {brnn.BRNN_BetRet} BRNN_BetRet
         */
        BRNN_BetRet.fromObject = function fromObject(object) {
            if (object instanceof $root.brnn.BRNN_BetRet)
                return object;
            var message = new $root.brnn.BRNN_BetRet();
            switch (object.Ret) {
            case "UNKNOWN":
            case 0:
                message.Ret = 0;
                break;
            case "SUCCESS":
            case 1:
                message.Ret = 1;
                break;
            case "NOMONEY":
            case 2:
                message.Ret = 2;
                break;
            case "NONTYPE":
            case 3:
                message.Ret = 3;
                break;
            case "ISZHUANG":
            case 4:
                message.Ret = 4;
                break;
            case "BETOUTOFRANGE":
            case 5:
                message.Ret = 5;
                break;
            case "MONEYLESSLIMIT":
            case 6:
                message.Ret = 6;
                break;
            }
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
                    throw TypeError(".brnn.BRNN_BetRet.BetArr: array expected");
                message.BetArr = [];
                for (var i = 0; i < object.BetArr.length; ++i) {
                    if (typeof object.BetArr[i] !== "object")
                        throw TypeError(".brnn.BRNN_BetRet.BetArr: object expected");
                    message.BetArr[i] = $root.brnn.BRNN_Bet.fromObject(object.BetArr[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a BRNN_BetRet message. Also converts values to other types if specified.
         * @function toObject
         * @memberof brnn.BRNN_BetRet
         * @static
         * @param {brnn.BRNN_BetRet} message BRNN_BetRet
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BRNN_BetRet.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.BetArr = [];
            if (options.defaults) {
                object.Ret = options.enums === String ? "UNKNOWN" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.Money = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.Money = options.longs === String ? "0" : 0;
                object.Type = 0;
            }
            if (message.Ret != null && message.hasOwnProperty("Ret"))
                object.Ret = options.enums === String ? $root.brnn.RetType[message.Ret] : message.Ret;
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
                    object.BetArr[j] = $root.brnn.BRNN_Bet.toObject(message.BetArr[j], options);
            }
            return object;
        };

        /**
         * Converts this BRNN_BetRet to JSON.
         * @function toJSON
         * @memberof brnn.BRNN_BetRet
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BRNN_BetRet.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BRNN_BetRet;
    })();

    /**
     * RetType enum.
     * @name brnn.RetType
     * @enum {string}
     * @property {number} UNKNOWN=0 UNKNOWN value
     * @property {number} SUCCESS=1 SUCCESS value
     * @property {number} NOMONEY=2 NOMONEY value
     * @property {number} NONTYPE=3 NONTYPE value
     * @property {number} ISZHUANG=4 ISZHUANG value
     * @property {number} BETOUTOFRANGE=5 BETOUTOFRANGE value
     * @property {number} MONEYLESSLIMIT=6 MONEYLESSLIMIT value
     */
    brnn.RetType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "UNKNOWN"] = 0;
        values[valuesById[1] = "SUCCESS"] = 1;
        values[valuesById[2] = "NOMONEY"] = 2;
        values[valuesById[3] = "NONTYPE"] = 3;
        values[valuesById[4] = "ISZHUANG"] = 4;
        values[valuesById[5] = "BETOUTOFRANGE"] = 5;
        values[valuesById[6] = "MONEYLESSLIMIT"] = 6;
        return values;
    })();

    brnn.BRNN_GameResultPoker = (function() {

        /**
         * Properties of a BRNN_GameResultPoker.
         * @memberof brnn
         * @interface IBRNN_GameResultPoker
         * @property {number} SitNo BRNN_GameResultPoker SitNo
         * @property {Array.<brnn.IPokerCard>|null} [SitPoker] BRNN_GameResultPoker SitPoker
         * @property {number} NiuNiuRet BRNN_GameResultPoker NiuNiuRet
         * @property {number} NiuNiuNumber BRNN_GameResultPoker NiuNiuNumber
         * @property {number} WinLoss BRNN_GameResultPoker WinLoss
         */

        /**
         * Constructs a new BRNN_GameResultPoker.
         * @memberof brnn
         * @classdesc Represents a BRNN_GameResultPoker.
         * @implements IBRNN_GameResultPoker
         * @constructor
         * @param {brnn.IBRNN_GameResultPoker=} [properties] Properties to set
         */
        function BRNN_GameResultPoker(properties) {
            this.SitPoker = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BRNN_GameResultPoker SitNo.
         * @member {number} SitNo
         * @memberof brnn.BRNN_GameResultPoker
         * @instance
         */
        BRNN_GameResultPoker.prototype.SitNo = 0;

        /**
         * BRNN_GameResultPoker SitPoker.
         * @member {Array.<brnn.IPokerCard>} SitPoker
         * @memberof brnn.BRNN_GameResultPoker
         * @instance
         */
        BRNN_GameResultPoker.prototype.SitPoker = $util.emptyArray;

        /**
         * BRNN_GameResultPoker NiuNiuRet.
         * @member {number} NiuNiuRet
         * @memberof brnn.BRNN_GameResultPoker
         * @instance
         */
        BRNN_GameResultPoker.prototype.NiuNiuRet = 0;

        /**
         * BRNN_GameResultPoker NiuNiuNumber.
         * @member {number} NiuNiuNumber
         * @memberof brnn.BRNN_GameResultPoker
         * @instance
         */
        BRNN_GameResultPoker.prototype.NiuNiuNumber = 0;

        /**
         * BRNN_GameResultPoker WinLoss.
         * @member {number} WinLoss
         * @memberof brnn.BRNN_GameResultPoker
         * @instance
         */
        BRNN_GameResultPoker.prototype.WinLoss = 0;

        /**
         * Creates a new BRNN_GameResultPoker instance using the specified properties.
         * @function create
         * @memberof brnn.BRNN_GameResultPoker
         * @static
         * @param {brnn.IBRNN_GameResultPoker=} [properties] Properties to set
         * @returns {brnn.BRNN_GameResultPoker} BRNN_GameResultPoker instance
         */
        BRNN_GameResultPoker.create = function create(properties) {
            return new BRNN_GameResultPoker(properties);
        };

        /**
         * Encodes the specified BRNN_GameResultPoker message. Does not implicitly {@link brnn.BRNN_GameResultPoker.verify|verify} messages.
         * @function encode
         * @memberof brnn.BRNN_GameResultPoker
         * @static
         * @param {brnn.IBRNN_GameResultPoker} message BRNN_GameResultPoker message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BRNN_GameResultPoker.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.SitNo);
            if (message.SitPoker != null && message.SitPoker.length)
                for (var i = 0; i < message.SitPoker.length; ++i)
                    $root.brnn.PokerCard.encode(message.SitPoker[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.NiuNiuRet);
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.NiuNiuNumber);
            writer.uint32(/* id 5, wireType 0 =*/40).int32(message.WinLoss);
            return writer;
        };

        /**
         * Encodes the specified BRNN_GameResultPoker message, length delimited. Does not implicitly {@link brnn.BRNN_GameResultPoker.verify|verify} messages.
         * @function encodeDelimited
         * @memberof brnn.BRNN_GameResultPoker
         * @static
         * @param {brnn.IBRNN_GameResultPoker} message BRNN_GameResultPoker message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BRNN_GameResultPoker.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BRNN_GameResultPoker message from the specified reader or buffer.
         * @function decode
         * @memberof brnn.BRNN_GameResultPoker
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {brnn.BRNN_GameResultPoker} BRNN_GameResultPoker
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BRNN_GameResultPoker.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.brnn.BRNN_GameResultPoker();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.SitNo = reader.int32();
                    break;
                case 2:
                    if (!(message.SitPoker && message.SitPoker.length))
                        message.SitPoker = [];
                    message.SitPoker.push($root.brnn.PokerCard.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.NiuNiuRet = reader.int32();
                    break;
                case 4:
                    message.NiuNiuNumber = reader.int32();
                    break;
                case 5:
                    message.WinLoss = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("SitNo"))
                throw $util.ProtocolError("missing required 'SitNo'", { instance: message });
            if (!message.hasOwnProperty("NiuNiuRet"))
                throw $util.ProtocolError("missing required 'NiuNiuRet'", { instance: message });
            if (!message.hasOwnProperty("NiuNiuNumber"))
                throw $util.ProtocolError("missing required 'NiuNiuNumber'", { instance: message });
            if (!message.hasOwnProperty("WinLoss"))
                throw $util.ProtocolError("missing required 'WinLoss'", { instance: message });
            return message;
        };

        /**
         * Decodes a BRNN_GameResultPoker message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof brnn.BRNN_GameResultPoker
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {brnn.BRNN_GameResultPoker} BRNN_GameResultPoker
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BRNN_GameResultPoker.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BRNN_GameResultPoker message.
         * @function verify
         * @memberof brnn.BRNN_GameResultPoker
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BRNN_GameResultPoker.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.SitNo))
                return "SitNo: integer expected";
            if (message.SitPoker != null && message.hasOwnProperty("SitPoker")) {
                if (!Array.isArray(message.SitPoker))
                    return "SitPoker: array expected";
                for (var i = 0; i < message.SitPoker.length; ++i) {
                    var error = $root.brnn.PokerCard.verify(message.SitPoker[i]);
                    if (error)
                        return "SitPoker." + error;
                }
            }
            if (!$util.isInteger(message.NiuNiuRet))
                return "NiuNiuRet: integer expected";
            if (!$util.isInteger(message.NiuNiuNumber))
                return "NiuNiuNumber: integer expected";
            if (!$util.isInteger(message.WinLoss))
                return "WinLoss: integer expected";
            return null;
        };

        /**
         * Creates a BRNN_GameResultPoker message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof brnn.BRNN_GameResultPoker
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {brnn.BRNN_GameResultPoker} BRNN_GameResultPoker
         */
        BRNN_GameResultPoker.fromObject = function fromObject(object) {
            if (object instanceof $root.brnn.BRNN_GameResultPoker)
                return object;
            var message = new $root.brnn.BRNN_GameResultPoker();
            if (object.SitNo != null)
                message.SitNo = object.SitNo | 0;
            if (object.SitPoker) {
                if (!Array.isArray(object.SitPoker))
                    throw TypeError(".brnn.BRNN_GameResultPoker.SitPoker: array expected");
                message.SitPoker = [];
                for (var i = 0; i < object.SitPoker.length; ++i) {
                    if (typeof object.SitPoker[i] !== "object")
                        throw TypeError(".brnn.BRNN_GameResultPoker.SitPoker: object expected");
                    message.SitPoker[i] = $root.brnn.PokerCard.fromObject(object.SitPoker[i]);
                }
            }
            if (object.NiuNiuRet != null)
                message.NiuNiuRet = object.NiuNiuRet | 0;
            if (object.NiuNiuNumber != null)
                message.NiuNiuNumber = object.NiuNiuNumber | 0;
            if (object.WinLoss != null)
                message.WinLoss = object.WinLoss | 0;
            return message;
        };

        /**
         * Creates a plain object from a BRNN_GameResultPoker message. Also converts values to other types if specified.
         * @function toObject
         * @memberof brnn.BRNN_GameResultPoker
         * @static
         * @param {brnn.BRNN_GameResultPoker} message BRNN_GameResultPoker
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BRNN_GameResultPoker.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.SitPoker = [];
            if (options.defaults) {
                object.SitNo = 0;
                object.NiuNiuRet = 0;
                object.NiuNiuNumber = 0;
                object.WinLoss = 0;
            }
            if (message.SitNo != null && message.hasOwnProperty("SitNo"))
                object.SitNo = message.SitNo;
            if (message.SitPoker && message.SitPoker.length) {
                object.SitPoker = [];
                for (var j = 0; j < message.SitPoker.length; ++j)
                    object.SitPoker[j] = $root.brnn.PokerCard.toObject(message.SitPoker[j], options);
            }
            if (message.NiuNiuRet != null && message.hasOwnProperty("NiuNiuRet"))
                object.NiuNiuRet = message.NiuNiuRet;
            if (message.NiuNiuNumber != null && message.hasOwnProperty("NiuNiuNumber"))
                object.NiuNiuNumber = message.NiuNiuNumber;
            if (message.WinLoss != null && message.hasOwnProperty("WinLoss"))
                object.WinLoss = message.WinLoss;
            return object;
        };

        /**
         * Converts this BRNN_GameResultPoker to JSON.
         * @function toJSON
         * @memberof brnn.BRNN_GameResultPoker
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BRNN_GameResultPoker.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BRNN_GameResultPoker;
    })();

    brnn.BRNN_GameResultUserMoney = (function() {

        /**
         * Properties of a BRNN_GameResultUserMoney.
         * @memberof brnn
         * @interface IBRNN_GameResultUserMoney
         * @property {number|Long} ZhuangWin BRNN_GameResultUserMoney ZhuangWin
         * @property {number|Long} SelfWin BRNN_GameResultUserMoney SelfWin
         * @property {Array.<brnn.IBRNN_WinUerInfo>|null} [WinUserInfo] BRNN_GameResultUserMoney WinUserInfo
         * @property {Array.<brnn.IBRNN_StageUerInfo>|null} [StageUerInfo] BRNN_GameResultUserMoney StageUerInfo
         */

        /**
         * Constructs a new BRNN_GameResultUserMoney.
         * @memberof brnn
         * @classdesc Represents a BRNN_GameResultUserMoney.
         * @implements IBRNN_GameResultUserMoney
         * @constructor
         * @param {brnn.IBRNN_GameResultUserMoney=} [properties] Properties to set
         */
        function BRNN_GameResultUserMoney(properties) {
            this.WinUserInfo = [];
            this.StageUerInfo = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BRNN_GameResultUserMoney ZhuangWin.
         * @member {number|Long} ZhuangWin
         * @memberof brnn.BRNN_GameResultUserMoney
         * @instance
         */
        BRNN_GameResultUserMoney.prototype.ZhuangWin = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * BRNN_GameResultUserMoney SelfWin.
         * @member {number|Long} SelfWin
         * @memberof brnn.BRNN_GameResultUserMoney
         * @instance
         */
        BRNN_GameResultUserMoney.prototype.SelfWin = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * BRNN_GameResultUserMoney WinUserInfo.
         * @member {Array.<brnn.IBRNN_WinUerInfo>} WinUserInfo
         * @memberof brnn.BRNN_GameResultUserMoney
         * @instance
         */
        BRNN_GameResultUserMoney.prototype.WinUserInfo = $util.emptyArray;

        /**
         * BRNN_GameResultUserMoney StageUerInfo.
         * @member {Array.<brnn.IBRNN_StageUerInfo>} StageUerInfo
         * @memberof brnn.BRNN_GameResultUserMoney
         * @instance
         */
        BRNN_GameResultUserMoney.prototype.StageUerInfo = $util.emptyArray;

        /**
         * Creates a new BRNN_GameResultUserMoney instance using the specified properties.
         * @function create
         * @memberof brnn.BRNN_GameResultUserMoney
         * @static
         * @param {brnn.IBRNN_GameResultUserMoney=} [properties] Properties to set
         * @returns {brnn.BRNN_GameResultUserMoney} BRNN_GameResultUserMoney instance
         */
        BRNN_GameResultUserMoney.create = function create(properties) {
            return new BRNN_GameResultUserMoney(properties);
        };

        /**
         * Encodes the specified BRNN_GameResultUserMoney message. Does not implicitly {@link brnn.BRNN_GameResultUserMoney.verify|verify} messages.
         * @function encode
         * @memberof brnn.BRNN_GameResultUserMoney
         * @static
         * @param {brnn.IBRNN_GameResultUserMoney} message BRNN_GameResultUserMoney message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BRNN_GameResultUserMoney.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int64(message.ZhuangWin);
            writer.uint32(/* id 2, wireType 0 =*/16).int64(message.SelfWin);
            if (message.WinUserInfo != null && message.WinUserInfo.length)
                for (var i = 0; i < message.WinUserInfo.length; ++i)
                    $root.brnn.BRNN_WinUerInfo.encode(message.WinUserInfo[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.StageUerInfo != null && message.StageUerInfo.length)
                for (var i = 0; i < message.StageUerInfo.length; ++i)
                    $root.brnn.BRNN_StageUerInfo.encode(message.StageUerInfo[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified BRNN_GameResultUserMoney message, length delimited. Does not implicitly {@link brnn.BRNN_GameResultUserMoney.verify|verify} messages.
         * @function encodeDelimited
         * @memberof brnn.BRNN_GameResultUserMoney
         * @static
         * @param {brnn.IBRNN_GameResultUserMoney} message BRNN_GameResultUserMoney message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BRNN_GameResultUserMoney.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BRNN_GameResultUserMoney message from the specified reader or buffer.
         * @function decode
         * @memberof brnn.BRNN_GameResultUserMoney
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {brnn.BRNN_GameResultUserMoney} BRNN_GameResultUserMoney
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BRNN_GameResultUserMoney.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.brnn.BRNN_GameResultUserMoney();
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
                    message.WinUserInfo.push($root.brnn.BRNN_WinUerInfo.decode(reader, reader.uint32()));
                    break;
                case 4:
                    if (!(message.StageUerInfo && message.StageUerInfo.length))
                        message.StageUerInfo = [];
                    message.StageUerInfo.push($root.brnn.BRNN_StageUerInfo.decode(reader, reader.uint32()));
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
         * Decodes a BRNN_GameResultUserMoney message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof brnn.BRNN_GameResultUserMoney
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {brnn.BRNN_GameResultUserMoney} BRNN_GameResultUserMoney
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BRNN_GameResultUserMoney.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BRNN_GameResultUserMoney message.
         * @function verify
         * @memberof brnn.BRNN_GameResultUserMoney
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BRNN_GameResultUserMoney.verify = function verify(message) {
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
                    var error = $root.brnn.BRNN_WinUerInfo.verify(message.WinUserInfo[i]);
                    if (error)
                        return "WinUserInfo." + error;
                }
            }
            if (message.StageUerInfo != null && message.hasOwnProperty("StageUerInfo")) {
                if (!Array.isArray(message.StageUerInfo))
                    return "StageUerInfo: array expected";
                for (var i = 0; i < message.StageUerInfo.length; ++i) {
                    var error = $root.brnn.BRNN_StageUerInfo.verify(message.StageUerInfo[i]);
                    if (error)
                        return "StageUerInfo." + error;
                }
            }
            return null;
        };

        /**
         * Creates a BRNN_GameResultUserMoney message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof brnn.BRNN_GameResultUserMoney
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {brnn.BRNN_GameResultUserMoney} BRNN_GameResultUserMoney
         */
        BRNN_GameResultUserMoney.fromObject = function fromObject(object) {
            if (object instanceof $root.brnn.BRNN_GameResultUserMoney)
                return object;
            var message = new $root.brnn.BRNN_GameResultUserMoney();
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
                    throw TypeError(".brnn.BRNN_GameResultUserMoney.WinUserInfo: array expected");
                message.WinUserInfo = [];
                for (var i = 0; i < object.WinUserInfo.length; ++i) {
                    if (typeof object.WinUserInfo[i] !== "object")
                        throw TypeError(".brnn.BRNN_GameResultUserMoney.WinUserInfo: object expected");
                    message.WinUserInfo[i] = $root.brnn.BRNN_WinUerInfo.fromObject(object.WinUserInfo[i]);
                }
            }
            if (object.StageUerInfo) {
                if (!Array.isArray(object.StageUerInfo))
                    throw TypeError(".brnn.BRNN_GameResultUserMoney.StageUerInfo: array expected");
                message.StageUerInfo = [];
                for (var i = 0; i < object.StageUerInfo.length; ++i) {
                    if (typeof object.StageUerInfo[i] !== "object")
                        throw TypeError(".brnn.BRNN_GameResultUserMoney.StageUerInfo: object expected");
                    message.StageUerInfo[i] = $root.brnn.BRNN_StageUerInfo.fromObject(object.StageUerInfo[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a BRNN_GameResultUserMoney message. Also converts values to other types if specified.
         * @function toObject
         * @memberof brnn.BRNN_GameResultUserMoney
         * @static
         * @param {brnn.BRNN_GameResultUserMoney} message BRNN_GameResultUserMoney
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BRNN_GameResultUserMoney.toObject = function toObject(message, options) {
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
                    object.WinUserInfo[j] = $root.brnn.BRNN_WinUerInfo.toObject(message.WinUserInfo[j], options);
            }
            if (message.StageUerInfo && message.StageUerInfo.length) {
                object.StageUerInfo = [];
                for (var j = 0; j < message.StageUerInfo.length; ++j)
                    object.StageUerInfo[j] = $root.brnn.BRNN_StageUerInfo.toObject(message.StageUerInfo[j], options);
            }
            return object;
        };

        /**
         * Converts this BRNN_GameResultUserMoney to JSON.
         * @function toJSON
         * @memberof brnn.BRNN_GameResultUserMoney
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BRNN_GameResultUserMoney.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BRNN_GameResultUserMoney;
    })();

    brnn.BRNN_WinUerInfo = (function() {

        /**
         * Properties of a BRNN_WinUerInfo.
         * @memberof brnn
         * @interface IBRNN_WinUerInfo
         * @property {string} UserName BRNN_WinUerInfo UserName
         * @property {number|Long} Win BRNN_WinUerInfo Win
         */

        /**
         * Constructs a new BRNN_WinUerInfo.
         * @memberof brnn
         * @classdesc Represents a BRNN_WinUerInfo.
         * @implements IBRNN_WinUerInfo
         * @constructor
         * @param {brnn.IBRNN_WinUerInfo=} [properties] Properties to set
         */
        function BRNN_WinUerInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BRNN_WinUerInfo UserName.
         * @member {string} UserName
         * @memberof brnn.BRNN_WinUerInfo
         * @instance
         */
        BRNN_WinUerInfo.prototype.UserName = "";

        /**
         * BRNN_WinUerInfo Win.
         * @member {number|Long} Win
         * @memberof brnn.BRNN_WinUerInfo
         * @instance
         */
        BRNN_WinUerInfo.prototype.Win = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new BRNN_WinUerInfo instance using the specified properties.
         * @function create
         * @memberof brnn.BRNN_WinUerInfo
         * @static
         * @param {brnn.IBRNN_WinUerInfo=} [properties] Properties to set
         * @returns {brnn.BRNN_WinUerInfo} BRNN_WinUerInfo instance
         */
        BRNN_WinUerInfo.create = function create(properties) {
            return new BRNN_WinUerInfo(properties);
        };

        /**
         * Encodes the specified BRNN_WinUerInfo message. Does not implicitly {@link brnn.BRNN_WinUerInfo.verify|verify} messages.
         * @function encode
         * @memberof brnn.BRNN_WinUerInfo
         * @static
         * @param {brnn.IBRNN_WinUerInfo} message BRNN_WinUerInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BRNN_WinUerInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.UserName);
            writer.uint32(/* id 2, wireType 0 =*/16).int64(message.Win);
            return writer;
        };

        /**
         * Encodes the specified BRNN_WinUerInfo message, length delimited. Does not implicitly {@link brnn.BRNN_WinUerInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof brnn.BRNN_WinUerInfo
         * @static
         * @param {brnn.IBRNN_WinUerInfo} message BRNN_WinUerInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BRNN_WinUerInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BRNN_WinUerInfo message from the specified reader or buffer.
         * @function decode
         * @memberof brnn.BRNN_WinUerInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {brnn.BRNN_WinUerInfo} BRNN_WinUerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BRNN_WinUerInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.brnn.BRNN_WinUerInfo();
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
         * Decodes a BRNN_WinUerInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof brnn.BRNN_WinUerInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {brnn.BRNN_WinUerInfo} BRNN_WinUerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BRNN_WinUerInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BRNN_WinUerInfo message.
         * @function verify
         * @memberof brnn.BRNN_WinUerInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BRNN_WinUerInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.UserName))
                return "UserName: string expected";
            if (!$util.isInteger(message.Win) && !(message.Win && $util.isInteger(message.Win.low) && $util.isInteger(message.Win.high)))
                return "Win: integer|Long expected";
            return null;
        };

        /**
         * Creates a BRNN_WinUerInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof brnn.BRNN_WinUerInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {brnn.BRNN_WinUerInfo} BRNN_WinUerInfo
         */
        BRNN_WinUerInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.brnn.BRNN_WinUerInfo)
                return object;
            var message = new $root.brnn.BRNN_WinUerInfo();
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
         * Creates a plain object from a BRNN_WinUerInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof brnn.BRNN_WinUerInfo
         * @static
         * @param {brnn.BRNN_WinUerInfo} message BRNN_WinUerInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BRNN_WinUerInfo.toObject = function toObject(message, options) {
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
         * Converts this BRNN_WinUerInfo to JSON.
         * @function toJSON
         * @memberof brnn.BRNN_WinUerInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BRNN_WinUerInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BRNN_WinUerInfo;
    })();

    brnn.BRNN_ShangzhuangRet = (function() {

        /**
         * Properties of a BRNN_ShangzhuangRet.
         * @memberof brnn
         * @interface IBRNN_ShangzhuangRet
         * @property {number} ret BRNN_ShangzhuangRet ret
         */

        /**
         * Constructs a new BRNN_ShangzhuangRet.
         * @memberof brnn
         * @classdesc Represents a BRNN_ShangzhuangRet.
         * @implements IBRNN_ShangzhuangRet
         * @constructor
         * @param {brnn.IBRNN_ShangzhuangRet=} [properties] Properties to set
         */
        function BRNN_ShangzhuangRet(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BRNN_ShangzhuangRet ret.
         * @member {number} ret
         * @memberof brnn.BRNN_ShangzhuangRet
         * @instance
         */
        BRNN_ShangzhuangRet.prototype.ret = 0;

        /**
         * Creates a new BRNN_ShangzhuangRet instance using the specified properties.
         * @function create
         * @memberof brnn.BRNN_ShangzhuangRet
         * @static
         * @param {brnn.IBRNN_ShangzhuangRet=} [properties] Properties to set
         * @returns {brnn.BRNN_ShangzhuangRet} BRNN_ShangzhuangRet instance
         */
        BRNN_ShangzhuangRet.create = function create(properties) {
            return new BRNN_ShangzhuangRet(properties);
        };

        /**
         * Encodes the specified BRNN_ShangzhuangRet message. Does not implicitly {@link brnn.BRNN_ShangzhuangRet.verify|verify} messages.
         * @function encode
         * @memberof brnn.BRNN_ShangzhuangRet
         * @static
         * @param {brnn.IBRNN_ShangzhuangRet} message BRNN_ShangzhuangRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BRNN_ShangzhuangRet.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.ret);
            return writer;
        };

        /**
         * Encodes the specified BRNN_ShangzhuangRet message, length delimited. Does not implicitly {@link brnn.BRNN_ShangzhuangRet.verify|verify} messages.
         * @function encodeDelimited
         * @memberof brnn.BRNN_ShangzhuangRet
         * @static
         * @param {brnn.IBRNN_ShangzhuangRet} message BRNN_ShangzhuangRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BRNN_ShangzhuangRet.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BRNN_ShangzhuangRet message from the specified reader or buffer.
         * @function decode
         * @memberof brnn.BRNN_ShangzhuangRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {brnn.BRNN_ShangzhuangRet} BRNN_ShangzhuangRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BRNN_ShangzhuangRet.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.brnn.BRNN_ShangzhuangRet();
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
         * Decodes a BRNN_ShangzhuangRet message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof brnn.BRNN_ShangzhuangRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {brnn.BRNN_ShangzhuangRet} BRNN_ShangzhuangRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BRNN_ShangzhuangRet.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BRNN_ShangzhuangRet message.
         * @function verify
         * @memberof brnn.BRNN_ShangzhuangRet
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BRNN_ShangzhuangRet.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.ret))
                return "ret: integer expected";
            return null;
        };

        /**
         * Creates a BRNN_ShangzhuangRet message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof brnn.BRNN_ShangzhuangRet
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {brnn.BRNN_ShangzhuangRet} BRNN_ShangzhuangRet
         */
        BRNN_ShangzhuangRet.fromObject = function fromObject(object) {
            if (object instanceof $root.brnn.BRNN_ShangzhuangRet)
                return object;
            var message = new $root.brnn.BRNN_ShangzhuangRet();
            if (object.ret != null)
                message.ret = object.ret | 0;
            return message;
        };

        /**
         * Creates a plain object from a BRNN_ShangzhuangRet message. Also converts values to other types if specified.
         * @function toObject
         * @memberof brnn.BRNN_ShangzhuangRet
         * @static
         * @param {brnn.BRNN_ShangzhuangRet} message BRNN_ShangzhuangRet
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BRNN_ShangzhuangRet.toObject = function toObject(message, options) {
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
         * Converts this BRNN_ShangzhuangRet to JSON.
         * @function toJSON
         * @memberof brnn.BRNN_ShangzhuangRet
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BRNN_ShangzhuangRet.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BRNN_ShangzhuangRet;
    })();

    brnn.BRNN_ShangZhuang = (function() {

        /**
         * Properties of a BRNN_ShangZhuang.
         * @memberof brnn
         * @interface IBRNN_ShangZhuang
         * @property {boolean} IsShangZhuang BRNN_ShangZhuang IsShangZhuang
         */

        /**
         * Constructs a new BRNN_ShangZhuang.
         * @memberof brnn
         * @classdesc Represents a BRNN_ShangZhuang.
         * @implements IBRNN_ShangZhuang
         * @constructor
         * @param {brnn.IBRNN_ShangZhuang=} [properties] Properties to set
         */
        function BRNN_ShangZhuang(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BRNN_ShangZhuang IsShangZhuang.
         * @member {boolean} IsShangZhuang
         * @memberof brnn.BRNN_ShangZhuang
         * @instance
         */
        BRNN_ShangZhuang.prototype.IsShangZhuang = false;

        /**
         * Creates a new BRNN_ShangZhuang instance using the specified properties.
         * @function create
         * @memberof brnn.BRNN_ShangZhuang
         * @static
         * @param {brnn.IBRNN_ShangZhuang=} [properties] Properties to set
         * @returns {brnn.BRNN_ShangZhuang} BRNN_ShangZhuang instance
         */
        BRNN_ShangZhuang.create = function create(properties) {
            return new BRNN_ShangZhuang(properties);
        };

        /**
         * Encodes the specified BRNN_ShangZhuang message. Does not implicitly {@link brnn.BRNN_ShangZhuang.verify|verify} messages.
         * @function encode
         * @memberof brnn.BRNN_ShangZhuang
         * @static
         * @param {brnn.IBRNN_ShangZhuang} message BRNN_ShangZhuang message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BRNN_ShangZhuang.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).bool(message.IsShangZhuang);
            return writer;
        };

        /**
         * Encodes the specified BRNN_ShangZhuang message, length delimited. Does not implicitly {@link brnn.BRNN_ShangZhuang.verify|verify} messages.
         * @function encodeDelimited
         * @memberof brnn.BRNN_ShangZhuang
         * @static
         * @param {brnn.IBRNN_ShangZhuang} message BRNN_ShangZhuang message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BRNN_ShangZhuang.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BRNN_ShangZhuang message from the specified reader or buffer.
         * @function decode
         * @memberof brnn.BRNN_ShangZhuang
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {brnn.BRNN_ShangZhuang} BRNN_ShangZhuang
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BRNN_ShangZhuang.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.brnn.BRNN_ShangZhuang();
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
         * Decodes a BRNN_ShangZhuang message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof brnn.BRNN_ShangZhuang
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {brnn.BRNN_ShangZhuang} BRNN_ShangZhuang
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BRNN_ShangZhuang.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BRNN_ShangZhuang message.
         * @function verify
         * @memberof brnn.BRNN_ShangZhuang
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BRNN_ShangZhuang.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (typeof message.IsShangZhuang !== "boolean")
                return "IsShangZhuang: boolean expected";
            return null;
        };

        /**
         * Creates a BRNN_ShangZhuang message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof brnn.BRNN_ShangZhuang
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {brnn.BRNN_ShangZhuang} BRNN_ShangZhuang
         */
        BRNN_ShangZhuang.fromObject = function fromObject(object) {
            if (object instanceof $root.brnn.BRNN_ShangZhuang)
                return object;
            var message = new $root.brnn.BRNN_ShangZhuang();
            if (object.IsShangZhuang != null)
                message.IsShangZhuang = Boolean(object.IsShangZhuang);
            return message;
        };

        /**
         * Creates a plain object from a BRNN_ShangZhuang message. Also converts values to other types if specified.
         * @function toObject
         * @memberof brnn.BRNN_ShangZhuang
         * @static
         * @param {brnn.BRNN_ShangZhuang} message BRNN_ShangZhuang
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BRNN_ShangZhuang.toObject = function toObject(message, options) {
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
         * Converts this BRNN_ShangZhuang to JSON.
         * @function toJSON
         * @memberof brnn.BRNN_ShangZhuang
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BRNN_ShangZhuang.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BRNN_ShangZhuang;
    })();

    brnn.BRNN_ZhuangInfo = (function() {

        /**
         * Properties of a BRNN_ZhuangInfo.
         * @memberof brnn
         * @interface IBRNN_ZhuangInfo
         * @property {number} UserID BRNN_ZhuangInfo UserID
         * @property {number} LastTurn BRNN_ZhuangInfo LastTurn
         * @property {Array.<brnn.IGameUser>|null} [UserInfo] BRNN_ZhuangInfo UserInfo
         */

        /**
         * Constructs a new BRNN_ZhuangInfo.
         * @memberof brnn
         * @classdesc Represents a BRNN_ZhuangInfo.
         * @implements IBRNN_ZhuangInfo
         * @constructor
         * @param {brnn.IBRNN_ZhuangInfo=} [properties] Properties to set
         */
        function BRNN_ZhuangInfo(properties) {
            this.UserInfo = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BRNN_ZhuangInfo UserID.
         * @member {number} UserID
         * @memberof brnn.BRNN_ZhuangInfo
         * @instance
         */
        BRNN_ZhuangInfo.prototype.UserID = 0;

        /**
         * BRNN_ZhuangInfo LastTurn.
         * @member {number} LastTurn
         * @memberof brnn.BRNN_ZhuangInfo
         * @instance
         */
        BRNN_ZhuangInfo.prototype.LastTurn = 0;

        /**
         * BRNN_ZhuangInfo UserInfo.
         * @member {Array.<brnn.IGameUser>} UserInfo
         * @memberof brnn.BRNN_ZhuangInfo
         * @instance
         */
        BRNN_ZhuangInfo.prototype.UserInfo = $util.emptyArray;

        /**
         * Creates a new BRNN_ZhuangInfo instance using the specified properties.
         * @function create
         * @memberof brnn.BRNN_ZhuangInfo
         * @static
         * @param {brnn.IBRNN_ZhuangInfo=} [properties] Properties to set
         * @returns {brnn.BRNN_ZhuangInfo} BRNN_ZhuangInfo instance
         */
        BRNN_ZhuangInfo.create = function create(properties) {
            return new BRNN_ZhuangInfo(properties);
        };

        /**
         * Encodes the specified BRNN_ZhuangInfo message. Does not implicitly {@link brnn.BRNN_ZhuangInfo.verify|verify} messages.
         * @function encode
         * @memberof brnn.BRNN_ZhuangInfo
         * @static
         * @param {brnn.IBRNN_ZhuangInfo} message BRNN_ZhuangInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BRNN_ZhuangInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.UserID);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.LastTurn);
            if (message.UserInfo != null && message.UserInfo.length)
                for (var i = 0; i < message.UserInfo.length; ++i)
                    $root.brnn.GameUser.encode(message.UserInfo[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified BRNN_ZhuangInfo message, length delimited. Does not implicitly {@link brnn.BRNN_ZhuangInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof brnn.BRNN_ZhuangInfo
         * @static
         * @param {brnn.IBRNN_ZhuangInfo} message BRNN_ZhuangInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BRNN_ZhuangInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BRNN_ZhuangInfo message from the specified reader or buffer.
         * @function decode
         * @memberof brnn.BRNN_ZhuangInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {brnn.BRNN_ZhuangInfo} BRNN_ZhuangInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BRNN_ZhuangInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.brnn.BRNN_ZhuangInfo();
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
                    message.UserInfo.push($root.brnn.GameUser.decode(reader, reader.uint32()));
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
         * Decodes a BRNN_ZhuangInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof brnn.BRNN_ZhuangInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {brnn.BRNN_ZhuangInfo} BRNN_ZhuangInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BRNN_ZhuangInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BRNN_ZhuangInfo message.
         * @function verify
         * @memberof brnn.BRNN_ZhuangInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BRNN_ZhuangInfo.verify = function verify(message) {
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
                    var error = $root.brnn.GameUser.verify(message.UserInfo[i]);
                    if (error)
                        return "UserInfo." + error;
                }
            }
            return null;
        };

        /**
         * Creates a BRNN_ZhuangInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof brnn.BRNN_ZhuangInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {brnn.BRNN_ZhuangInfo} BRNN_ZhuangInfo
         */
        BRNN_ZhuangInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.brnn.BRNN_ZhuangInfo)
                return object;
            var message = new $root.brnn.BRNN_ZhuangInfo();
            if (object.UserID != null)
                message.UserID = object.UserID | 0;
            if (object.LastTurn != null)
                message.LastTurn = object.LastTurn | 0;
            if (object.UserInfo) {
                if (!Array.isArray(object.UserInfo))
                    throw TypeError(".brnn.BRNN_ZhuangInfo.UserInfo: array expected");
                message.UserInfo = [];
                for (var i = 0; i < object.UserInfo.length; ++i) {
                    if (typeof object.UserInfo[i] !== "object")
                        throw TypeError(".brnn.BRNN_ZhuangInfo.UserInfo: object expected");
                    message.UserInfo[i] = $root.brnn.GameUser.fromObject(object.UserInfo[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a BRNN_ZhuangInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof brnn.BRNN_ZhuangInfo
         * @static
         * @param {brnn.BRNN_ZhuangInfo} message BRNN_ZhuangInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BRNN_ZhuangInfo.toObject = function toObject(message, options) {
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
                    object.UserInfo[j] = $root.brnn.GameUser.toObject(message.UserInfo[j], options);
            }
            return object;
        };

        /**
         * Converts this BRNN_ZhuangInfo to JSON.
         * @function toJSON
         * @memberof brnn.BRNN_ZhuangInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BRNN_ZhuangInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BRNN_ZhuangInfo;
    })();

    brnn.BRNN_ZhuangList = (function() {

        /**
         * Properties of a BRNN_ZhuangList.
         * @memberof brnn
         * @interface IBRNN_ZhuangList
         * @property {Array.<brnn.IGameUser>|null} [UserInfo] BRNN_ZhuangList UserInfo
         */

        /**
         * Constructs a new BRNN_ZhuangList.
         * @memberof brnn
         * @classdesc Represents a BRNN_ZhuangList.
         * @implements IBRNN_ZhuangList
         * @constructor
         * @param {brnn.IBRNN_ZhuangList=} [properties] Properties to set
         */
        function BRNN_ZhuangList(properties) {
            this.UserInfo = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BRNN_ZhuangList UserInfo.
         * @member {Array.<brnn.IGameUser>} UserInfo
         * @memberof brnn.BRNN_ZhuangList
         * @instance
         */
        BRNN_ZhuangList.prototype.UserInfo = $util.emptyArray;

        /**
         * Creates a new BRNN_ZhuangList instance using the specified properties.
         * @function create
         * @memberof brnn.BRNN_ZhuangList
         * @static
         * @param {brnn.IBRNN_ZhuangList=} [properties] Properties to set
         * @returns {brnn.BRNN_ZhuangList} BRNN_ZhuangList instance
         */
        BRNN_ZhuangList.create = function create(properties) {
            return new BRNN_ZhuangList(properties);
        };

        /**
         * Encodes the specified BRNN_ZhuangList message. Does not implicitly {@link brnn.BRNN_ZhuangList.verify|verify} messages.
         * @function encode
         * @memberof brnn.BRNN_ZhuangList
         * @static
         * @param {brnn.IBRNN_ZhuangList} message BRNN_ZhuangList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BRNN_ZhuangList.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.UserInfo != null && message.UserInfo.length)
                for (var i = 0; i < message.UserInfo.length; ++i)
                    $root.brnn.GameUser.encode(message.UserInfo[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified BRNN_ZhuangList message, length delimited. Does not implicitly {@link brnn.BRNN_ZhuangList.verify|verify} messages.
         * @function encodeDelimited
         * @memberof brnn.BRNN_ZhuangList
         * @static
         * @param {brnn.IBRNN_ZhuangList} message BRNN_ZhuangList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BRNN_ZhuangList.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BRNN_ZhuangList message from the specified reader or buffer.
         * @function decode
         * @memberof brnn.BRNN_ZhuangList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {brnn.BRNN_ZhuangList} BRNN_ZhuangList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BRNN_ZhuangList.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.brnn.BRNN_ZhuangList();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.UserInfo && message.UserInfo.length))
                        message.UserInfo = [];
                    message.UserInfo.push($root.brnn.GameUser.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a BRNN_ZhuangList message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof brnn.BRNN_ZhuangList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {brnn.BRNN_ZhuangList} BRNN_ZhuangList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BRNN_ZhuangList.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BRNN_ZhuangList message.
         * @function verify
         * @memberof brnn.BRNN_ZhuangList
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BRNN_ZhuangList.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.UserInfo != null && message.hasOwnProperty("UserInfo")) {
                if (!Array.isArray(message.UserInfo))
                    return "UserInfo: array expected";
                for (var i = 0; i < message.UserInfo.length; ++i) {
                    var error = $root.brnn.GameUser.verify(message.UserInfo[i]);
                    if (error)
                        return "UserInfo." + error;
                }
            }
            return null;
        };

        /**
         * Creates a BRNN_ZhuangList message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof brnn.BRNN_ZhuangList
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {brnn.BRNN_ZhuangList} BRNN_ZhuangList
         */
        BRNN_ZhuangList.fromObject = function fromObject(object) {
            if (object instanceof $root.brnn.BRNN_ZhuangList)
                return object;
            var message = new $root.brnn.BRNN_ZhuangList();
            if (object.UserInfo) {
                if (!Array.isArray(object.UserInfo))
                    throw TypeError(".brnn.BRNN_ZhuangList.UserInfo: array expected");
                message.UserInfo = [];
                for (var i = 0; i < object.UserInfo.length; ++i) {
                    if (typeof object.UserInfo[i] !== "object")
                        throw TypeError(".brnn.BRNN_ZhuangList.UserInfo: object expected");
                    message.UserInfo[i] = $root.brnn.GameUser.fromObject(object.UserInfo[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a BRNN_ZhuangList message. Also converts values to other types if specified.
         * @function toObject
         * @memberof brnn.BRNN_ZhuangList
         * @static
         * @param {brnn.BRNN_ZhuangList} message BRNN_ZhuangList
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BRNN_ZhuangList.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.UserInfo = [];
            if (message.UserInfo && message.UserInfo.length) {
                object.UserInfo = [];
                for (var j = 0; j < message.UserInfo.length; ++j)
                    object.UserInfo[j] = $root.brnn.GameUser.toObject(message.UserInfo[j], options);
            }
            return object;
        };

        /**
         * Converts this BRNN_ZhuangList to JSON.
         * @function toJSON
         * @memberof brnn.BRNN_ZhuangList
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BRNN_ZhuangList.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BRNN_ZhuangList;
    })();

    brnn.BRNN_BetClearRet = (function() {

        /**
         * Properties of a BRNN_BetClearRet.
         * @memberof brnn
         * @interface IBRNN_BetClearRet
         * @property {number|Long} Money BRNN_BetClearRet Money
         * @property {number} Ret BRNN_BetClearRet Ret
         */

        /**
         * Constructs a new BRNN_BetClearRet.
         * @memberof brnn
         * @classdesc Represents a BRNN_BetClearRet.
         * @implements IBRNN_BetClearRet
         * @constructor
         * @param {brnn.IBRNN_BetClearRet=} [properties] Properties to set
         */
        function BRNN_BetClearRet(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BRNN_BetClearRet Money.
         * @member {number|Long} Money
         * @memberof brnn.BRNN_BetClearRet
         * @instance
         */
        BRNN_BetClearRet.prototype.Money = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * BRNN_BetClearRet Ret.
         * @member {number} Ret
         * @memberof brnn.BRNN_BetClearRet
         * @instance
         */
        BRNN_BetClearRet.prototype.Ret = 0;

        /**
         * Creates a new BRNN_BetClearRet instance using the specified properties.
         * @function create
         * @memberof brnn.BRNN_BetClearRet
         * @static
         * @param {brnn.IBRNN_BetClearRet=} [properties] Properties to set
         * @returns {brnn.BRNN_BetClearRet} BRNN_BetClearRet instance
         */
        BRNN_BetClearRet.create = function create(properties) {
            return new BRNN_BetClearRet(properties);
        };

        /**
         * Encodes the specified BRNN_BetClearRet message. Does not implicitly {@link brnn.BRNN_BetClearRet.verify|verify} messages.
         * @function encode
         * @memberof brnn.BRNN_BetClearRet
         * @static
         * @param {brnn.IBRNN_BetClearRet} message BRNN_BetClearRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BRNN_BetClearRet.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int64(message.Money);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.Ret);
            return writer;
        };

        /**
         * Encodes the specified BRNN_BetClearRet message, length delimited. Does not implicitly {@link brnn.BRNN_BetClearRet.verify|verify} messages.
         * @function encodeDelimited
         * @memberof brnn.BRNN_BetClearRet
         * @static
         * @param {brnn.IBRNN_BetClearRet} message BRNN_BetClearRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BRNN_BetClearRet.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BRNN_BetClearRet message from the specified reader or buffer.
         * @function decode
         * @memberof brnn.BRNN_BetClearRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {brnn.BRNN_BetClearRet} BRNN_BetClearRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BRNN_BetClearRet.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.brnn.BRNN_BetClearRet();
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
         * Decodes a BRNN_BetClearRet message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof brnn.BRNN_BetClearRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {brnn.BRNN_BetClearRet} BRNN_BetClearRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BRNN_BetClearRet.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BRNN_BetClearRet message.
         * @function verify
         * @memberof brnn.BRNN_BetClearRet
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BRNN_BetClearRet.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.Money) && !(message.Money && $util.isInteger(message.Money.low) && $util.isInteger(message.Money.high)))
                return "Money: integer|Long expected";
            if (!$util.isInteger(message.Ret))
                return "Ret: integer expected";
            return null;
        };

        /**
         * Creates a BRNN_BetClearRet message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof brnn.BRNN_BetClearRet
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {brnn.BRNN_BetClearRet} BRNN_BetClearRet
         */
        BRNN_BetClearRet.fromObject = function fromObject(object) {
            if (object instanceof $root.brnn.BRNN_BetClearRet)
                return object;
            var message = new $root.brnn.BRNN_BetClearRet();
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
         * Creates a plain object from a BRNN_BetClearRet message. Also converts values to other types if specified.
         * @function toObject
         * @memberof brnn.BRNN_BetClearRet
         * @static
         * @param {brnn.BRNN_BetClearRet} message BRNN_BetClearRet
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BRNN_BetClearRet.toObject = function toObject(message, options) {
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
         * Converts this BRNN_BetClearRet to JSON.
         * @function toJSON
         * @memberof brnn.BRNN_BetClearRet
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BRNN_BetClearRet.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BRNN_BetClearRet;
    })();

    brnn.BRNN_RichestList = (function() {

        /**
         * Properties of a BRNN_RichestList.
         * @memberof brnn
         * @interface IBRNN_RichestList
         * @property {Array.<brnn.IBRNN_Richest>|null} [RichestList] BRNN_RichestList RichestList
         */

        /**
         * Constructs a new BRNN_RichestList.
         * @memberof brnn
         * @classdesc Represents a BRNN_RichestList.
         * @implements IBRNN_RichestList
         * @constructor
         * @param {brnn.IBRNN_RichestList=} [properties] Properties to set
         */
        function BRNN_RichestList(properties) {
            this.RichestList = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BRNN_RichestList RichestList.
         * @member {Array.<brnn.IBRNN_Richest>} RichestList
         * @memberof brnn.BRNN_RichestList
         * @instance
         */
        BRNN_RichestList.prototype.RichestList = $util.emptyArray;

        /**
         * Creates a new BRNN_RichestList instance using the specified properties.
         * @function create
         * @memberof brnn.BRNN_RichestList
         * @static
         * @param {brnn.IBRNN_RichestList=} [properties] Properties to set
         * @returns {brnn.BRNN_RichestList} BRNN_RichestList instance
         */
        BRNN_RichestList.create = function create(properties) {
            return new BRNN_RichestList(properties);
        };

        /**
         * Encodes the specified BRNN_RichestList message. Does not implicitly {@link brnn.BRNN_RichestList.verify|verify} messages.
         * @function encode
         * @memberof brnn.BRNN_RichestList
         * @static
         * @param {brnn.IBRNN_RichestList} message BRNN_RichestList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BRNN_RichestList.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.RichestList != null && message.RichestList.length)
                for (var i = 0; i < message.RichestList.length; ++i)
                    $root.brnn.BRNN_Richest.encode(message.RichestList[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified BRNN_RichestList message, length delimited. Does not implicitly {@link brnn.BRNN_RichestList.verify|verify} messages.
         * @function encodeDelimited
         * @memberof brnn.BRNN_RichestList
         * @static
         * @param {brnn.IBRNN_RichestList} message BRNN_RichestList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BRNN_RichestList.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BRNN_RichestList message from the specified reader or buffer.
         * @function decode
         * @memberof brnn.BRNN_RichestList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {brnn.BRNN_RichestList} BRNN_RichestList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BRNN_RichestList.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.brnn.BRNN_RichestList();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.RichestList && message.RichestList.length))
                        message.RichestList = [];
                    message.RichestList.push($root.brnn.BRNN_Richest.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a BRNN_RichestList message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof brnn.BRNN_RichestList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {brnn.BRNN_RichestList} BRNN_RichestList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BRNN_RichestList.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BRNN_RichestList message.
         * @function verify
         * @memberof brnn.BRNN_RichestList
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BRNN_RichestList.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.RichestList != null && message.hasOwnProperty("RichestList")) {
                if (!Array.isArray(message.RichestList))
                    return "RichestList: array expected";
                for (var i = 0; i < message.RichestList.length; ++i) {
                    var error = $root.brnn.BRNN_Richest.verify(message.RichestList[i]);
                    if (error)
                        return "RichestList." + error;
                }
            }
            return null;
        };

        /**
         * Creates a BRNN_RichestList message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof brnn.BRNN_RichestList
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {brnn.BRNN_RichestList} BRNN_RichestList
         */
        BRNN_RichestList.fromObject = function fromObject(object) {
            if (object instanceof $root.brnn.BRNN_RichestList)
                return object;
            var message = new $root.brnn.BRNN_RichestList();
            if (object.RichestList) {
                if (!Array.isArray(object.RichestList))
                    throw TypeError(".brnn.BRNN_RichestList.RichestList: array expected");
                message.RichestList = [];
                for (var i = 0; i < object.RichestList.length; ++i) {
                    if (typeof object.RichestList[i] !== "object")
                        throw TypeError(".brnn.BRNN_RichestList.RichestList: object expected");
                    message.RichestList[i] = $root.brnn.BRNN_Richest.fromObject(object.RichestList[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a BRNN_RichestList message. Also converts values to other types if specified.
         * @function toObject
         * @memberof brnn.BRNN_RichestList
         * @static
         * @param {brnn.BRNN_RichestList} message BRNN_RichestList
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BRNN_RichestList.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.RichestList = [];
            if (message.RichestList && message.RichestList.length) {
                object.RichestList = [];
                for (var j = 0; j < message.RichestList.length; ++j)
                    object.RichestList[j] = $root.brnn.BRNN_Richest.toObject(message.RichestList[j], options);
            }
            return object;
        };

        /**
         * Converts this BRNN_RichestList to JSON.
         * @function toJSON
         * @memberof brnn.BRNN_RichestList
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BRNN_RichestList.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BRNN_RichestList;
    })();

    brnn.BRNN_Richest = (function() {

        /**
         * Properties of a BRNN_Richest.
         * @memberof brnn
         * @interface IBRNN_Richest
         * @property {number} Ranking BRNN_Richest Ranking
         * @property {number} UserID BRNN_Richest UserID
         * @property {number} UserFaceID BRNN_Richest UserFaceID
         * @property {number|Long} Money BRNN_Richest Money
         * @property {number|null} [AvatarFrameID] BRNN_Richest AvatarFrameID
         */

        /**
         * Constructs a new BRNN_Richest.
         * @memberof brnn
         * @classdesc Represents a BRNN_Richest.
         * @implements IBRNN_Richest
         * @constructor
         * @param {brnn.IBRNN_Richest=} [properties] Properties to set
         */
        function BRNN_Richest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BRNN_Richest Ranking.
         * @member {number} Ranking
         * @memberof brnn.BRNN_Richest
         * @instance
         */
        BRNN_Richest.prototype.Ranking = 0;

        /**
         * BRNN_Richest UserID.
         * @member {number} UserID
         * @memberof brnn.BRNN_Richest
         * @instance
         */
        BRNN_Richest.prototype.UserID = 0;

        /**
         * BRNN_Richest UserFaceID.
         * @member {number} UserFaceID
         * @memberof brnn.BRNN_Richest
         * @instance
         */
        BRNN_Richest.prototype.UserFaceID = 0;

        /**
         * BRNN_Richest Money.
         * @member {number|Long} Money
         * @memberof brnn.BRNN_Richest
         * @instance
         */
        BRNN_Richest.prototype.Money = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * BRNN_Richest AvatarFrameID.
         * @member {number} AvatarFrameID
         * @memberof brnn.BRNN_Richest
         * @instance
         */
        BRNN_Richest.prototype.AvatarFrameID = 0;

        /**
         * Creates a new BRNN_Richest instance using the specified properties.
         * @function create
         * @memberof brnn.BRNN_Richest
         * @static
         * @param {brnn.IBRNN_Richest=} [properties] Properties to set
         * @returns {brnn.BRNN_Richest} BRNN_Richest instance
         */
        BRNN_Richest.create = function create(properties) {
            return new BRNN_Richest(properties);
        };

        /**
         * Encodes the specified BRNN_Richest message. Does not implicitly {@link brnn.BRNN_Richest.verify|verify} messages.
         * @function encode
         * @memberof brnn.BRNN_Richest
         * @static
         * @param {brnn.IBRNN_Richest} message BRNN_Richest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BRNN_Richest.encode = function encode(message, writer) {
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
         * Encodes the specified BRNN_Richest message, length delimited. Does not implicitly {@link brnn.BRNN_Richest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof brnn.BRNN_Richest
         * @static
         * @param {brnn.IBRNN_Richest} message BRNN_Richest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BRNN_Richest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BRNN_Richest message from the specified reader or buffer.
         * @function decode
         * @memberof brnn.BRNN_Richest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {brnn.BRNN_Richest} BRNN_Richest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BRNN_Richest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.brnn.BRNN_Richest();
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
         * Decodes a BRNN_Richest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof brnn.BRNN_Richest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {brnn.BRNN_Richest} BRNN_Richest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BRNN_Richest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BRNN_Richest message.
         * @function verify
         * @memberof brnn.BRNN_Richest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BRNN_Richest.verify = function verify(message) {
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
         * Creates a BRNN_Richest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof brnn.BRNN_Richest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {brnn.BRNN_Richest} BRNN_Richest
         */
        BRNN_Richest.fromObject = function fromObject(object) {
            if (object instanceof $root.brnn.BRNN_Richest)
                return object;
            var message = new $root.brnn.BRNN_Richest();
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
         * Creates a plain object from a BRNN_Richest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof brnn.BRNN_Richest
         * @static
         * @param {brnn.BRNN_Richest} message BRNN_Richest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BRNN_Richest.toObject = function toObject(message, options) {
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
         * Converts this BRNN_Richest to JSON.
         * @function toJSON
         * @memberof brnn.BRNN_Richest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BRNN_Richest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BRNN_Richest;
    })();

    brnn.BRNN_LuckyStar = (function() {

        /**
         * Properties of a BRNN_LuckyStar.
         * @memberof brnn
         * @interface IBRNN_LuckyStar
         * @property {number} UserID BRNN_LuckyStar UserID
         * @property {number} UserFaceID BRNN_LuckyStar UserFaceID
         * @property {number|null} [AvatarFrameID] BRNN_LuckyStar AvatarFrameID
         */

        /**
         * Constructs a new BRNN_LuckyStar.
         * @memberof brnn
         * @classdesc Represents a BRNN_LuckyStar.
         * @implements IBRNN_LuckyStar
         * @constructor
         * @param {brnn.IBRNN_LuckyStar=} [properties] Properties to set
         */
        function BRNN_LuckyStar(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BRNN_LuckyStar UserID.
         * @member {number} UserID
         * @memberof brnn.BRNN_LuckyStar
         * @instance
         */
        BRNN_LuckyStar.prototype.UserID = 0;

        /**
         * BRNN_LuckyStar UserFaceID.
         * @member {number} UserFaceID
         * @memberof brnn.BRNN_LuckyStar
         * @instance
         */
        BRNN_LuckyStar.prototype.UserFaceID = 0;

        /**
         * BRNN_LuckyStar AvatarFrameID.
         * @member {number} AvatarFrameID
         * @memberof brnn.BRNN_LuckyStar
         * @instance
         */
        BRNN_LuckyStar.prototype.AvatarFrameID = 0;

        /**
         * Creates a new BRNN_LuckyStar instance using the specified properties.
         * @function create
         * @memberof brnn.BRNN_LuckyStar
         * @static
         * @param {brnn.IBRNN_LuckyStar=} [properties] Properties to set
         * @returns {brnn.BRNN_LuckyStar} BRNN_LuckyStar instance
         */
        BRNN_LuckyStar.create = function create(properties) {
            return new BRNN_LuckyStar(properties);
        };

        /**
         * Encodes the specified BRNN_LuckyStar message. Does not implicitly {@link brnn.BRNN_LuckyStar.verify|verify} messages.
         * @function encode
         * @memberof brnn.BRNN_LuckyStar
         * @static
         * @param {brnn.IBRNN_LuckyStar} message BRNN_LuckyStar message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BRNN_LuckyStar.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.UserID);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.UserFaceID);
            if (message.AvatarFrameID != null && message.hasOwnProperty("AvatarFrameID"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.AvatarFrameID);
            return writer;
        };

        /**
         * Encodes the specified BRNN_LuckyStar message, length delimited. Does not implicitly {@link brnn.BRNN_LuckyStar.verify|verify} messages.
         * @function encodeDelimited
         * @memberof brnn.BRNN_LuckyStar
         * @static
         * @param {brnn.IBRNN_LuckyStar} message BRNN_LuckyStar message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BRNN_LuckyStar.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BRNN_LuckyStar message from the specified reader or buffer.
         * @function decode
         * @memberof brnn.BRNN_LuckyStar
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {brnn.BRNN_LuckyStar} BRNN_LuckyStar
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BRNN_LuckyStar.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.brnn.BRNN_LuckyStar();
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
         * Decodes a BRNN_LuckyStar message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof brnn.BRNN_LuckyStar
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {brnn.BRNN_LuckyStar} BRNN_LuckyStar
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BRNN_LuckyStar.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BRNN_LuckyStar message.
         * @function verify
         * @memberof brnn.BRNN_LuckyStar
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BRNN_LuckyStar.verify = function verify(message) {
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
         * Creates a BRNN_LuckyStar message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof brnn.BRNN_LuckyStar
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {brnn.BRNN_LuckyStar} BRNN_LuckyStar
         */
        BRNN_LuckyStar.fromObject = function fromObject(object) {
            if (object instanceof $root.brnn.BRNN_LuckyStar)
                return object;
            var message = new $root.brnn.BRNN_LuckyStar();
            if (object.UserID != null)
                message.UserID = object.UserID | 0;
            if (object.UserFaceID != null)
                message.UserFaceID = object.UserFaceID | 0;
            if (object.AvatarFrameID != null)
                message.AvatarFrameID = object.AvatarFrameID | 0;
            return message;
        };

        /**
         * Creates a plain object from a BRNN_LuckyStar message. Also converts values to other types if specified.
         * @function toObject
         * @memberof brnn.BRNN_LuckyStar
         * @static
         * @param {brnn.BRNN_LuckyStar} message BRNN_LuckyStar
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BRNN_LuckyStar.toObject = function toObject(message, options) {
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
         * Converts this BRNN_LuckyStar to JSON.
         * @function toJSON
         * @memberof brnn.BRNN_LuckyStar
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BRNN_LuckyStar.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BRNN_LuckyStar;
    })();

    brnn.BRNN_StageUerInfo = (function() {

        /**
         * Properties of a BRNN_StageUerInfo.
         * @memberof brnn
         * @interface IBRNN_StageUerInfo
         * @property {number} UserID BRNN_StageUerInfo UserID
         * @property {number|Long} Win BRNN_StageUerInfo Win
         */

        /**
         * Constructs a new BRNN_StageUerInfo.
         * @memberof brnn
         * @classdesc Represents a BRNN_StageUerInfo.
         * @implements IBRNN_StageUerInfo
         * @constructor
         * @param {brnn.IBRNN_StageUerInfo=} [properties] Properties to set
         */
        function BRNN_StageUerInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BRNN_StageUerInfo UserID.
         * @member {number} UserID
         * @memberof brnn.BRNN_StageUerInfo
         * @instance
         */
        BRNN_StageUerInfo.prototype.UserID = 0;

        /**
         * BRNN_StageUerInfo Win.
         * @member {number|Long} Win
         * @memberof brnn.BRNN_StageUerInfo
         * @instance
         */
        BRNN_StageUerInfo.prototype.Win = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new BRNN_StageUerInfo instance using the specified properties.
         * @function create
         * @memberof brnn.BRNN_StageUerInfo
         * @static
         * @param {brnn.IBRNN_StageUerInfo=} [properties] Properties to set
         * @returns {brnn.BRNN_StageUerInfo} BRNN_StageUerInfo instance
         */
        BRNN_StageUerInfo.create = function create(properties) {
            return new BRNN_StageUerInfo(properties);
        };

        /**
         * Encodes the specified BRNN_StageUerInfo message. Does not implicitly {@link brnn.BRNN_StageUerInfo.verify|verify} messages.
         * @function encode
         * @memberof brnn.BRNN_StageUerInfo
         * @static
         * @param {brnn.IBRNN_StageUerInfo} message BRNN_StageUerInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BRNN_StageUerInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.UserID);
            writer.uint32(/* id 2, wireType 0 =*/16).int64(message.Win);
            return writer;
        };

        /**
         * Encodes the specified BRNN_StageUerInfo message, length delimited. Does not implicitly {@link brnn.BRNN_StageUerInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof brnn.BRNN_StageUerInfo
         * @static
         * @param {brnn.IBRNN_StageUerInfo} message BRNN_StageUerInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BRNN_StageUerInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BRNN_StageUerInfo message from the specified reader or buffer.
         * @function decode
         * @memberof brnn.BRNN_StageUerInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {brnn.BRNN_StageUerInfo} BRNN_StageUerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BRNN_StageUerInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.brnn.BRNN_StageUerInfo();
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
         * Decodes a BRNN_StageUerInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof brnn.BRNN_StageUerInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {brnn.BRNN_StageUerInfo} BRNN_StageUerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BRNN_StageUerInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BRNN_StageUerInfo message.
         * @function verify
         * @memberof brnn.BRNN_StageUerInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BRNN_StageUerInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.UserID))
                return "UserID: integer expected";
            if (!$util.isInteger(message.Win) && !(message.Win && $util.isInteger(message.Win.low) && $util.isInteger(message.Win.high)))
                return "Win: integer|Long expected";
            return null;
        };

        /**
         * Creates a BRNN_StageUerInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof brnn.BRNN_StageUerInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {brnn.BRNN_StageUerInfo} BRNN_StageUerInfo
         */
        BRNN_StageUerInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.brnn.BRNN_StageUerInfo)
                return object;
            var message = new $root.brnn.BRNN_StageUerInfo();
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
         * Creates a plain object from a BRNN_StageUerInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof brnn.BRNN_StageUerInfo
         * @static
         * @param {brnn.BRNN_StageUerInfo} message BRNN_StageUerInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BRNN_StageUerInfo.toObject = function toObject(message, options) {
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
         * Converts this BRNN_StageUerInfo to JSON.
         * @function toJSON
         * @memberof brnn.BRNN_StageUerInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BRNN_StageUerInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BRNN_StageUerInfo;
    })();

    brnn.TestGameChat = (function() {

        /**
         * Properties of a TestGameChat.
         * @memberof brnn
         * @interface ITestGameChat
         * @property {string} Message TestGameChat Message
         */

        /**
         * Constructs a new TestGameChat.
         * @memberof brnn
         * @classdesc Represents a TestGameChat.
         * @implements ITestGameChat
         * @constructor
         * @param {brnn.ITestGameChat=} [properties] Properties to set
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
         * @memberof brnn.TestGameChat
         * @instance
         */
        TestGameChat.prototype.Message = "";

        /**
         * Creates a new TestGameChat instance using the specified properties.
         * @function create
         * @memberof brnn.TestGameChat
         * @static
         * @param {brnn.ITestGameChat=} [properties] Properties to set
         * @returns {brnn.TestGameChat} TestGameChat instance
         */
        TestGameChat.create = function create(properties) {
            return new TestGameChat(properties);
        };

        /**
         * Encodes the specified TestGameChat message. Does not implicitly {@link brnn.TestGameChat.verify|verify} messages.
         * @function encode
         * @memberof brnn.TestGameChat
         * @static
         * @param {brnn.ITestGameChat} message TestGameChat message or plain object to encode
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
         * Encodes the specified TestGameChat message, length delimited. Does not implicitly {@link brnn.TestGameChat.verify|verify} messages.
         * @function encodeDelimited
         * @memberof brnn.TestGameChat
         * @static
         * @param {brnn.ITestGameChat} message TestGameChat message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TestGameChat.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TestGameChat message from the specified reader or buffer.
         * @function decode
         * @memberof brnn.TestGameChat
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {brnn.TestGameChat} TestGameChat
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TestGameChat.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.brnn.TestGameChat();
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
         * @memberof brnn.TestGameChat
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {brnn.TestGameChat} TestGameChat
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
         * @memberof brnn.TestGameChat
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
         * @memberof brnn.TestGameChat
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {brnn.TestGameChat} TestGameChat
         */
        TestGameChat.fromObject = function fromObject(object) {
            if (object instanceof $root.brnn.TestGameChat)
                return object;
            var message = new $root.brnn.TestGameChat();
            if (object.Message != null)
                message.Message = String(object.Message);
            return message;
        };

        /**
         * Creates a plain object from a TestGameChat message. Also converts values to other types if specified.
         * @function toObject
         * @memberof brnn.TestGameChat
         * @static
         * @param {brnn.TestGameChat} message TestGameChat
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
         * @memberof brnn.TestGameChat
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TestGameChat.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return TestGameChat;
    })();

    brnn.TestGameScore = (function() {

        /**
         * Properties of a TestGameScore.
         * @memberof brnn
         * @interface ITestGameScore
         * @property {number} Score TestGameScore Score
         */

        /**
         * Constructs a new TestGameScore.
         * @memberof brnn
         * @classdesc Represents a TestGameScore.
         * @implements ITestGameScore
         * @constructor
         * @param {brnn.ITestGameScore=} [properties] Properties to set
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
         * @memberof brnn.TestGameScore
         * @instance
         */
        TestGameScore.prototype.Score = 0;

        /**
         * Creates a new TestGameScore instance using the specified properties.
         * @function create
         * @memberof brnn.TestGameScore
         * @static
         * @param {brnn.ITestGameScore=} [properties] Properties to set
         * @returns {brnn.TestGameScore} TestGameScore instance
         */
        TestGameScore.create = function create(properties) {
            return new TestGameScore(properties);
        };

        /**
         * Encodes the specified TestGameScore message. Does not implicitly {@link brnn.TestGameScore.verify|verify} messages.
         * @function encode
         * @memberof brnn.TestGameScore
         * @static
         * @param {brnn.ITestGameScore} message TestGameScore message or plain object to encode
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
         * Encodes the specified TestGameScore message, length delimited. Does not implicitly {@link brnn.TestGameScore.verify|verify} messages.
         * @function encodeDelimited
         * @memberof brnn.TestGameScore
         * @static
         * @param {brnn.ITestGameScore} message TestGameScore message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TestGameScore.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TestGameScore message from the specified reader or buffer.
         * @function decode
         * @memberof brnn.TestGameScore
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {brnn.TestGameScore} TestGameScore
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TestGameScore.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.brnn.TestGameScore();
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
         * @memberof brnn.TestGameScore
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {brnn.TestGameScore} TestGameScore
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
         * @memberof brnn.TestGameScore
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
         * @memberof brnn.TestGameScore
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {brnn.TestGameScore} TestGameScore
         */
        TestGameScore.fromObject = function fromObject(object) {
            if (object instanceof $root.brnn.TestGameScore)
                return object;
            var message = new $root.brnn.TestGameScore();
            if (object.Score != null)
                message.Score = object.Score | 0;
            return message;
        };

        /**
         * Creates a plain object from a TestGameScore message. Also converts values to other types if specified.
         * @function toObject
         * @memberof brnn.TestGameScore
         * @static
         * @param {brnn.TestGameScore} message TestGameScore
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
         * @memberof brnn.TestGameScore
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TestGameScore.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return TestGameScore;
    })();

    brnn.TestGameEnd = (function() {

        /**
         * Properties of a TestGameEnd.
         * @memberof brnn
         * @interface ITestGameEnd
         */

        /**
         * Constructs a new TestGameEnd.
         * @memberof brnn
         * @classdesc Represents a TestGameEnd.
         * @implements ITestGameEnd
         * @constructor
         * @param {brnn.ITestGameEnd=} [properties] Properties to set
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
         * @memberof brnn.TestGameEnd
         * @static
         * @param {brnn.ITestGameEnd=} [properties] Properties to set
         * @returns {brnn.TestGameEnd} TestGameEnd instance
         */
        TestGameEnd.create = function create(properties) {
            return new TestGameEnd(properties);
        };

        /**
         * Encodes the specified TestGameEnd message. Does not implicitly {@link brnn.TestGameEnd.verify|verify} messages.
         * @function encode
         * @memberof brnn.TestGameEnd
         * @static
         * @param {brnn.ITestGameEnd} message TestGameEnd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TestGameEnd.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified TestGameEnd message, length delimited. Does not implicitly {@link brnn.TestGameEnd.verify|verify} messages.
         * @function encodeDelimited
         * @memberof brnn.TestGameEnd
         * @static
         * @param {brnn.ITestGameEnd} message TestGameEnd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TestGameEnd.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TestGameEnd message from the specified reader or buffer.
         * @function decode
         * @memberof brnn.TestGameEnd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {brnn.TestGameEnd} TestGameEnd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TestGameEnd.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.brnn.TestGameEnd();
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
         * @memberof brnn.TestGameEnd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {brnn.TestGameEnd} TestGameEnd
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
         * @memberof brnn.TestGameEnd
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
         * @memberof brnn.TestGameEnd
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {brnn.TestGameEnd} TestGameEnd
         */
        TestGameEnd.fromObject = function fromObject(object) {
            if (object instanceof $root.brnn.TestGameEnd)
                return object;
            return new $root.brnn.TestGameEnd();
        };

        /**
         * Creates a plain object from a TestGameEnd message. Also converts values to other types if specified.
         * @function toObject
         * @memberof brnn.TestGameEnd
         * @static
         * @param {brnn.TestGameEnd} message TestGameEnd
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TestGameEnd.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this TestGameEnd to JSON.
         * @function toJSON
         * @memberof brnn.TestGameEnd
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TestGameEnd.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return TestGameEnd;
    })();

    brnn.UserEnter = (function() {

        /**
         * Properties of a UserEnter.
         * @memberof brnn
         * @interface IUserEnter
         * @property {brnn.IGameUser} User UserEnter User
         */

        /**
         * Constructs a new UserEnter.
         * @memberof brnn
         * @classdesc Represents a UserEnter.
         * @implements IUserEnter
         * @constructor
         * @param {brnn.IUserEnter=} [properties] Properties to set
         */
        function UserEnter(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UserEnter User.
         * @member {brnn.IGameUser} User
         * @memberof brnn.UserEnter
         * @instance
         */
        UserEnter.prototype.User = null;

        /**
         * Creates a new UserEnter instance using the specified properties.
         * @function create
         * @memberof brnn.UserEnter
         * @static
         * @param {brnn.IUserEnter=} [properties] Properties to set
         * @returns {brnn.UserEnter} UserEnter instance
         */
        UserEnter.create = function create(properties) {
            return new UserEnter(properties);
        };

        /**
         * Encodes the specified UserEnter message. Does not implicitly {@link brnn.UserEnter.verify|verify} messages.
         * @function encode
         * @memberof brnn.UserEnter
         * @static
         * @param {brnn.IUserEnter} message UserEnter message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserEnter.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            $root.brnn.GameUser.encode(message.User, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified UserEnter message, length delimited. Does not implicitly {@link brnn.UserEnter.verify|verify} messages.
         * @function encodeDelimited
         * @memberof brnn.UserEnter
         * @static
         * @param {brnn.IUserEnter} message UserEnter message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserEnter.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UserEnter message from the specified reader or buffer.
         * @function decode
         * @memberof brnn.UserEnter
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {brnn.UserEnter} UserEnter
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserEnter.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.brnn.UserEnter();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.User = $root.brnn.GameUser.decode(reader, reader.uint32());
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
         * @memberof brnn.UserEnter
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {brnn.UserEnter} UserEnter
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
         * @memberof brnn.UserEnter
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UserEnter.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            {
                var error = $root.brnn.GameUser.verify(message.User);
                if (error)
                    return "User." + error;
            }
            return null;
        };

        /**
         * Creates a UserEnter message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof brnn.UserEnter
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {brnn.UserEnter} UserEnter
         */
        UserEnter.fromObject = function fromObject(object) {
            if (object instanceof $root.brnn.UserEnter)
                return object;
            var message = new $root.brnn.UserEnter();
            if (object.User != null) {
                if (typeof object.User !== "object")
                    throw TypeError(".brnn.UserEnter.User: object expected");
                message.User = $root.brnn.GameUser.fromObject(object.User);
            }
            return message;
        };

        /**
         * Creates a plain object from a UserEnter message. Also converts values to other types if specified.
         * @function toObject
         * @memberof brnn.UserEnter
         * @static
         * @param {brnn.UserEnter} message UserEnter
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
                object.User = $root.brnn.GameUser.toObject(message.User, options);
            return object;
        };

        /**
         * Converts this UserEnter to JSON.
         * @function toJSON
         * @memberof brnn.UserEnter
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserEnter.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UserEnter;
    })();

    brnn.UserLeave = (function() {

        /**
         * Properties of a UserLeave.
         * @memberof brnn
         * @interface IUserLeave
         * @property {brnn.IGameUser} User UserLeave User
         */

        /**
         * Constructs a new UserLeave.
         * @memberof brnn
         * @classdesc Represents a UserLeave.
         * @implements IUserLeave
         * @constructor
         * @param {brnn.IUserLeave=} [properties] Properties to set
         */
        function UserLeave(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UserLeave User.
         * @member {brnn.IGameUser} User
         * @memberof brnn.UserLeave
         * @instance
         */
        UserLeave.prototype.User = null;

        /**
         * Creates a new UserLeave instance using the specified properties.
         * @function create
         * @memberof brnn.UserLeave
         * @static
         * @param {brnn.IUserLeave=} [properties] Properties to set
         * @returns {brnn.UserLeave} UserLeave instance
         */
        UserLeave.create = function create(properties) {
            return new UserLeave(properties);
        };

        /**
         * Encodes the specified UserLeave message. Does not implicitly {@link brnn.UserLeave.verify|verify} messages.
         * @function encode
         * @memberof brnn.UserLeave
         * @static
         * @param {brnn.IUserLeave} message UserLeave message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserLeave.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            $root.brnn.GameUser.encode(message.User, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified UserLeave message, length delimited. Does not implicitly {@link brnn.UserLeave.verify|verify} messages.
         * @function encodeDelimited
         * @memberof brnn.UserLeave
         * @static
         * @param {brnn.IUserLeave} message UserLeave message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserLeave.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UserLeave message from the specified reader or buffer.
         * @function decode
         * @memberof brnn.UserLeave
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {brnn.UserLeave} UserLeave
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserLeave.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.brnn.UserLeave();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.User = $root.brnn.GameUser.decode(reader, reader.uint32());
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
         * @memberof brnn.UserLeave
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {brnn.UserLeave} UserLeave
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
         * @memberof brnn.UserLeave
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UserLeave.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            {
                var error = $root.brnn.GameUser.verify(message.User);
                if (error)
                    return "User." + error;
            }
            return null;
        };

        /**
         * Creates a UserLeave message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof brnn.UserLeave
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {brnn.UserLeave} UserLeave
         */
        UserLeave.fromObject = function fromObject(object) {
            if (object instanceof $root.brnn.UserLeave)
                return object;
            var message = new $root.brnn.UserLeave();
            if (object.User != null) {
                if (typeof object.User !== "object")
                    throw TypeError(".brnn.UserLeave.User: object expected");
                message.User = $root.brnn.GameUser.fromObject(object.User);
            }
            return message;
        };

        /**
         * Creates a plain object from a UserLeave message. Also converts values to other types if specified.
         * @function toObject
         * @memberof brnn.UserLeave
         * @static
         * @param {brnn.UserLeave} message UserLeave
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
                object.User = $root.brnn.GameUser.toObject(message.User, options);
            return object;
        };

        /**
         * Converts this UserLeave to JSON.
         * @function toJSON
         * @memberof brnn.UserLeave
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserLeave.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UserLeave;
    })();

    brnn.UserStateChange = (function() {

        /**
         * Properties of a UserStateChange.
         * @memberof brnn
         * @interface IUserStateChange
         * @property {brnn.IGameUser} User UserStateChange User
         */

        /**
         * Constructs a new UserStateChange.
         * @memberof brnn
         * @classdesc Represents a UserStateChange.
         * @implements IUserStateChange
         * @constructor
         * @param {brnn.IUserStateChange=} [properties] Properties to set
         */
        function UserStateChange(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UserStateChange User.
         * @member {brnn.IGameUser} User
         * @memberof brnn.UserStateChange
         * @instance
         */
        UserStateChange.prototype.User = null;

        /**
         * Creates a new UserStateChange instance using the specified properties.
         * @function create
         * @memberof brnn.UserStateChange
         * @static
         * @param {brnn.IUserStateChange=} [properties] Properties to set
         * @returns {brnn.UserStateChange} UserStateChange instance
         */
        UserStateChange.create = function create(properties) {
            return new UserStateChange(properties);
        };

        /**
         * Encodes the specified UserStateChange message. Does not implicitly {@link brnn.UserStateChange.verify|verify} messages.
         * @function encode
         * @memberof brnn.UserStateChange
         * @static
         * @param {brnn.IUserStateChange} message UserStateChange message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserStateChange.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            $root.brnn.GameUser.encode(message.User, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified UserStateChange message, length delimited. Does not implicitly {@link brnn.UserStateChange.verify|verify} messages.
         * @function encodeDelimited
         * @memberof brnn.UserStateChange
         * @static
         * @param {brnn.IUserStateChange} message UserStateChange message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserStateChange.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UserStateChange message from the specified reader or buffer.
         * @function decode
         * @memberof brnn.UserStateChange
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {brnn.UserStateChange} UserStateChange
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserStateChange.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.brnn.UserStateChange();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.User = $root.brnn.GameUser.decode(reader, reader.uint32());
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
         * @memberof brnn.UserStateChange
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {brnn.UserStateChange} UserStateChange
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
         * @memberof brnn.UserStateChange
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UserStateChange.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            {
                var error = $root.brnn.GameUser.verify(message.User);
                if (error)
                    return "User." + error;
            }
            return null;
        };

        /**
         * Creates a UserStateChange message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof brnn.UserStateChange
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {brnn.UserStateChange} UserStateChange
         */
        UserStateChange.fromObject = function fromObject(object) {
            if (object instanceof $root.brnn.UserStateChange)
                return object;
            var message = new $root.brnn.UserStateChange();
            if (object.User != null) {
                if (typeof object.User !== "object")
                    throw TypeError(".brnn.UserStateChange.User: object expected");
                message.User = $root.brnn.GameUser.fromObject(object.User);
            }
            return message;
        };

        /**
         * Creates a plain object from a UserStateChange message. Also converts values to other types if specified.
         * @function toObject
         * @memberof brnn.UserStateChange
         * @static
         * @param {brnn.UserStateChange} message UserStateChange
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
                object.User = $root.brnn.GameUser.toObject(message.User, options);
            return object;
        };

        /**
         * Converts this UserStateChange to JSON.
         * @function toJSON
         * @memberof brnn.UserStateChange
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserStateChange.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UserStateChange;
    })();

    brnn.GameUser = (function() {

        /**
         * Properties of a GameUser.
         * @memberof brnn
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
         * @memberof brnn
         * @classdesc Represents a GameUser.
         * @implements IGameUser
         * @constructor
         * @param {brnn.IGameUser=} [properties] Properties to set
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
         * @memberof brnn.GameUser
         * @instance
         */
        GameUser.prototype.UserID = 0;

        /**
         * GameUser NickName.
         * @member {string} NickName
         * @memberof brnn.GameUser
         * @instance
         */
        GameUser.prototype.NickName = "";

        /**
         * GameUser Sex.
         * @member {number} Sex
         * @memberof brnn.GameUser
         * @instance
         */
        GameUser.prototype.Sex = 0;

        /**
         * GameUser FaceID.
         * @member {number} FaceID
         * @memberof brnn.GameUser
         * @instance
         */
        GameUser.prototype.FaceID = 0;

        /**
         * GameUser Score.
         * @member {number|Long} Score
         * @memberof brnn.GameUser
         * @instance
         */
        GameUser.prototype.Score = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * GameUser WinCount.
         * @member {number} WinCount
         * @memberof brnn.GameUser
         * @instance
         */
        GameUser.prototype.WinCount = 0;

        /**
         * GameUser LoseCount.
         * @member {number} LoseCount
         * @memberof brnn.GameUser
         * @instance
         */
        GameUser.prototype.LoseCount = 0;

        /**
         * GameUser DrawCount.
         * @member {number} DrawCount
         * @memberof brnn.GameUser
         * @instance
         */
        GameUser.prototype.DrawCount = 0;

        /**
         * GameUser StateValue.
         * @member {number} StateValue
         * @memberof brnn.GameUser
         * @instance
         */
        GameUser.prototype.StateValue = 0;

        /**
         * GameUser TableNo.
         * @member {number} TableNo
         * @memberof brnn.GameUser
         * @instance
         */
        GameUser.prototype.TableNo = 0;

        /**
         * GameUser SeatNo.
         * @member {number} SeatNo
         * @memberof brnn.GameUser
         * @instance
         */
        GameUser.prototype.SeatNo = 0;

        /**
         * GameUser LastWinLose.
         * @member {number} LastWinLose
         * @memberof brnn.GameUser
         * @instance
         */
        GameUser.prototype.LastWinLose = 0;

        /**
         * Creates a new GameUser instance using the specified properties.
         * @function create
         * @memberof brnn.GameUser
         * @static
         * @param {brnn.IGameUser=} [properties] Properties to set
         * @returns {brnn.GameUser} GameUser instance
         */
        GameUser.create = function create(properties) {
            return new GameUser(properties);
        };

        /**
         * Encodes the specified GameUser message. Does not implicitly {@link brnn.GameUser.verify|verify} messages.
         * @function encode
         * @memberof brnn.GameUser
         * @static
         * @param {brnn.IGameUser} message GameUser message or plain object to encode
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
         * Encodes the specified GameUser message, length delimited. Does not implicitly {@link brnn.GameUser.verify|verify} messages.
         * @function encodeDelimited
         * @memberof brnn.GameUser
         * @static
         * @param {brnn.IGameUser} message GameUser message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameUser.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GameUser message from the specified reader or buffer.
         * @function decode
         * @memberof brnn.GameUser
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {brnn.GameUser} GameUser
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameUser.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.brnn.GameUser();
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
         * @memberof brnn.GameUser
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {brnn.GameUser} GameUser
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
         * @memberof brnn.GameUser
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
         * @memberof brnn.GameUser
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {brnn.GameUser} GameUser
         */
        GameUser.fromObject = function fromObject(object) {
            if (object instanceof $root.brnn.GameUser)
                return object;
            var message = new $root.brnn.GameUser();
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
         * @memberof brnn.GameUser
         * @static
         * @param {brnn.GameUser} message GameUser
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
         * @memberof brnn.GameUser
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GameUser.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GameUser;
    })();

    brnn.GamePoker = (function() {

        /**
         * Properties of a GamePoker.
         * @memberof brnn
         * @interface IGamePoker
         * @property {Array.<brnn.IUserPoker>|null} [Poker] GamePoker Poker
         */

        /**
         * Constructs a new GamePoker.
         * @memberof brnn
         * @classdesc Represents a GamePoker.
         * @implements IGamePoker
         * @constructor
         * @param {brnn.IGamePoker=} [properties] Properties to set
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
         * @member {Array.<brnn.IUserPoker>} Poker
         * @memberof brnn.GamePoker
         * @instance
         */
        GamePoker.prototype.Poker = $util.emptyArray;

        /**
         * Creates a new GamePoker instance using the specified properties.
         * @function create
         * @memberof brnn.GamePoker
         * @static
         * @param {brnn.IGamePoker=} [properties] Properties to set
         * @returns {brnn.GamePoker} GamePoker instance
         */
        GamePoker.create = function create(properties) {
            return new GamePoker(properties);
        };

        /**
         * Encodes the specified GamePoker message. Does not implicitly {@link brnn.GamePoker.verify|verify} messages.
         * @function encode
         * @memberof brnn.GamePoker
         * @static
         * @param {brnn.IGamePoker} message GamePoker message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GamePoker.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Poker != null && message.Poker.length)
                for (var i = 0; i < message.Poker.length; ++i)
                    $root.brnn.UserPoker.encode(message.Poker[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified GamePoker message, length delimited. Does not implicitly {@link brnn.GamePoker.verify|verify} messages.
         * @function encodeDelimited
         * @memberof brnn.GamePoker
         * @static
         * @param {brnn.IGamePoker} message GamePoker message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GamePoker.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GamePoker message from the specified reader or buffer.
         * @function decode
         * @memberof brnn.GamePoker
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {brnn.GamePoker} GamePoker
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GamePoker.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.brnn.GamePoker();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.Poker && message.Poker.length))
                        message.Poker = [];
                    message.Poker.push($root.brnn.UserPoker.decode(reader, reader.uint32()));
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
         * @memberof brnn.GamePoker
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {brnn.GamePoker} GamePoker
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
         * @memberof brnn.GamePoker
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
                    var error = $root.brnn.UserPoker.verify(message.Poker[i]);
                    if (error)
                        return "Poker." + error;
                }
            }
            return null;
        };

        /**
         * Creates a GamePoker message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof brnn.GamePoker
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {brnn.GamePoker} GamePoker
         */
        GamePoker.fromObject = function fromObject(object) {
            if (object instanceof $root.brnn.GamePoker)
                return object;
            var message = new $root.brnn.GamePoker();
            if (object.Poker) {
                if (!Array.isArray(object.Poker))
                    throw TypeError(".brnn.GamePoker.Poker: array expected");
                message.Poker = [];
                for (var i = 0; i < object.Poker.length; ++i) {
                    if (typeof object.Poker[i] !== "object")
                        throw TypeError(".brnn.GamePoker.Poker: object expected");
                    message.Poker[i] = $root.brnn.UserPoker.fromObject(object.Poker[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a GamePoker message. Also converts values to other types if specified.
         * @function toObject
         * @memberof brnn.GamePoker
         * @static
         * @param {brnn.GamePoker} message GamePoker
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
                    object.Poker[j] = $root.brnn.UserPoker.toObject(message.Poker[j], options);
            }
            return object;
        };

        /**
         * Converts this GamePoker to JSON.
         * @function toJSON
         * @memberof brnn.GamePoker
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GamePoker.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GamePoker;
    })();

    brnn.UserPoker = (function() {

        /**
         * Properties of a UserPoker.
         * @memberof brnn
         * @interface IUserPoker
         * @property {number} UserID UserPoker UserID
         * @property {number} SeatNo UserPoker SeatNo
         * @property {Array.<brnn.IPokerCard>|null} [Cards] UserPoker Cards
         */

        /**
         * Constructs a new UserPoker.
         * @memberof brnn
         * @classdesc Represents a UserPoker.
         * @implements IUserPoker
         * @constructor
         * @param {brnn.IUserPoker=} [properties] Properties to set
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
         * @memberof brnn.UserPoker
         * @instance
         */
        UserPoker.prototype.UserID = 0;

        /**
         * UserPoker SeatNo.
         * @member {number} SeatNo
         * @memberof brnn.UserPoker
         * @instance
         */
        UserPoker.prototype.SeatNo = 0;

        /**
         * UserPoker Cards.
         * @member {Array.<brnn.IPokerCard>} Cards
         * @memberof brnn.UserPoker
         * @instance
         */
        UserPoker.prototype.Cards = $util.emptyArray;

        /**
         * Creates a new UserPoker instance using the specified properties.
         * @function create
         * @memberof brnn.UserPoker
         * @static
         * @param {brnn.IUserPoker=} [properties] Properties to set
         * @returns {brnn.UserPoker} UserPoker instance
         */
        UserPoker.create = function create(properties) {
            return new UserPoker(properties);
        };

        /**
         * Encodes the specified UserPoker message. Does not implicitly {@link brnn.UserPoker.verify|verify} messages.
         * @function encode
         * @memberof brnn.UserPoker
         * @static
         * @param {brnn.IUserPoker} message UserPoker message or plain object to encode
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
                    $root.brnn.PokerCard.encode(message.Cards[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified UserPoker message, length delimited. Does not implicitly {@link brnn.UserPoker.verify|verify} messages.
         * @function encodeDelimited
         * @memberof brnn.UserPoker
         * @static
         * @param {brnn.IUserPoker} message UserPoker message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserPoker.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UserPoker message from the specified reader or buffer.
         * @function decode
         * @memberof brnn.UserPoker
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {brnn.UserPoker} UserPoker
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserPoker.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.brnn.UserPoker();
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
                    message.Cards.push($root.brnn.PokerCard.decode(reader, reader.uint32()));
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
         * @memberof brnn.UserPoker
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {brnn.UserPoker} UserPoker
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
         * @memberof brnn.UserPoker
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
                    var error = $root.brnn.PokerCard.verify(message.Cards[i]);
                    if (error)
                        return "Cards." + error;
                }
            }
            return null;
        };

        /**
         * Creates a UserPoker message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof brnn.UserPoker
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {brnn.UserPoker} UserPoker
         */
        UserPoker.fromObject = function fromObject(object) {
            if (object instanceof $root.brnn.UserPoker)
                return object;
            var message = new $root.brnn.UserPoker();
            if (object.UserID != null)
                message.UserID = object.UserID | 0;
            if (object.SeatNo != null)
                message.SeatNo = object.SeatNo | 0;
            if (object.Cards) {
                if (!Array.isArray(object.Cards))
                    throw TypeError(".brnn.UserPoker.Cards: array expected");
                message.Cards = [];
                for (var i = 0; i < object.Cards.length; ++i) {
                    if (typeof object.Cards[i] !== "object")
                        throw TypeError(".brnn.UserPoker.Cards: object expected");
                    message.Cards[i] = $root.brnn.PokerCard.fromObject(object.Cards[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a UserPoker message. Also converts values to other types if specified.
         * @function toObject
         * @memberof brnn.UserPoker
         * @static
         * @param {brnn.UserPoker} message UserPoker
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
                    object.Cards[j] = $root.brnn.PokerCard.toObject(message.Cards[j], options);
            }
            return object;
        };

        /**
         * Converts this UserPoker to JSON.
         * @function toJSON
         * @memberof brnn.UserPoker
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserPoker.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UserPoker;
    })();

    brnn.PokerCard = (function() {

        /**
         * Properties of a PokerCard.
         * @memberof brnn
         * @interface IPokerCard
         * @property {number} Color PokerCard Color
         * @property {number} CardNumber PokerCard CardNumber
         */

        /**
         * Constructs a new PokerCard.
         * @memberof brnn
         * @classdesc Represents a PokerCard.
         * @implements IPokerCard
         * @constructor
         * @param {brnn.IPokerCard=} [properties] Properties to set
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
         * @memberof brnn.PokerCard
         * @instance
         */
        PokerCard.prototype.Color = 0;

        /**
         * PokerCard CardNumber.
         * @member {number} CardNumber
         * @memberof brnn.PokerCard
         * @instance
         */
        PokerCard.prototype.CardNumber = 0;

        /**
         * Creates a new PokerCard instance using the specified properties.
         * @function create
         * @memberof brnn.PokerCard
         * @static
         * @param {brnn.IPokerCard=} [properties] Properties to set
         * @returns {brnn.PokerCard} PokerCard instance
         */
        PokerCard.create = function create(properties) {
            return new PokerCard(properties);
        };

        /**
         * Encodes the specified PokerCard message. Does not implicitly {@link brnn.PokerCard.verify|verify} messages.
         * @function encode
         * @memberof brnn.PokerCard
         * @static
         * @param {brnn.IPokerCard} message PokerCard message or plain object to encode
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
         * Encodes the specified PokerCard message, length delimited. Does not implicitly {@link brnn.PokerCard.verify|verify} messages.
         * @function encodeDelimited
         * @memberof brnn.PokerCard
         * @static
         * @param {brnn.IPokerCard} message PokerCard message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PokerCard.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PokerCard message from the specified reader or buffer.
         * @function decode
         * @memberof brnn.PokerCard
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {brnn.PokerCard} PokerCard
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PokerCard.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.brnn.PokerCard();
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
         * @memberof brnn.PokerCard
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {brnn.PokerCard} PokerCard
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
         * @memberof brnn.PokerCard
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
         * @memberof brnn.PokerCard
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {brnn.PokerCard} PokerCard
         */
        PokerCard.fromObject = function fromObject(object) {
            if (object instanceof $root.brnn.PokerCard)
                return object;
            var message = new $root.brnn.PokerCard();
            if (object.Color != null)
                message.Color = object.Color | 0;
            if (object.CardNumber != null)
                message.CardNumber = object.CardNumber | 0;
            return message;
        };

        /**
         * Creates a plain object from a PokerCard message. Also converts values to other types if specified.
         * @function toObject
         * @memberof brnn.PokerCard
         * @static
         * @param {brnn.PokerCard} message PokerCard
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
         * @memberof brnn.PokerCard
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PokerCard.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return PokerCard;
    })();

    brnn.UserActionCommited = (function() {

        /**
         * Properties of a UserActionCommited.
         * @memberof brnn
         * @interface IUserActionCommited
         * @property {string} ActionName UserActionCommited ActionName
         */

        /**
         * Constructs a new UserActionCommited.
         * @memberof brnn
         * @classdesc Represents a UserActionCommited.
         * @implements IUserActionCommited
         * @constructor
         * @param {brnn.IUserActionCommited=} [properties] Properties to set
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
         * @memberof brnn.UserActionCommited
         * @instance
         */
        UserActionCommited.prototype.ActionName = "";

        /**
         * Creates a new UserActionCommited instance using the specified properties.
         * @function create
         * @memberof brnn.UserActionCommited
         * @static
         * @param {brnn.IUserActionCommited=} [properties] Properties to set
         * @returns {brnn.UserActionCommited} UserActionCommited instance
         */
        UserActionCommited.create = function create(properties) {
            return new UserActionCommited(properties);
        };

        /**
         * Encodes the specified UserActionCommited message. Does not implicitly {@link brnn.UserActionCommited.verify|verify} messages.
         * @function encode
         * @memberof brnn.UserActionCommited
         * @static
         * @param {brnn.IUserActionCommited} message UserActionCommited message or plain object to encode
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
         * Encodes the specified UserActionCommited message, length delimited. Does not implicitly {@link brnn.UserActionCommited.verify|verify} messages.
         * @function encodeDelimited
         * @memberof brnn.UserActionCommited
         * @static
         * @param {brnn.IUserActionCommited} message UserActionCommited message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserActionCommited.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UserActionCommited message from the specified reader or buffer.
         * @function decode
         * @memberof brnn.UserActionCommited
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {brnn.UserActionCommited} UserActionCommited
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserActionCommited.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.brnn.UserActionCommited();
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
         * @memberof brnn.UserActionCommited
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {brnn.UserActionCommited} UserActionCommited
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
         * @memberof brnn.UserActionCommited
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
         * @memberof brnn.UserActionCommited
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {brnn.UserActionCommited} UserActionCommited
         */
        UserActionCommited.fromObject = function fromObject(object) {
            if (object instanceof $root.brnn.UserActionCommited)
                return object;
            var message = new $root.brnn.UserActionCommited();
            if (object.ActionName != null)
                message.ActionName = String(object.ActionName);
            return message;
        };

        /**
         * Creates a plain object from a UserActionCommited message. Also converts values to other types if specified.
         * @function toObject
         * @memberof brnn.UserActionCommited
         * @static
         * @param {brnn.UserActionCommited} message UserActionCommited
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
         * @memberof brnn.UserActionCommited
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserActionCommited.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UserActionCommited;
    })();

    brnn.AllUserActionCommited = (function() {

        /**
         * Properties of an AllUserActionCommited.
         * @memberof brnn
         * @interface IAllUserActionCommited
         * @property {string} ActionName AllUserActionCommited ActionName
         */

        /**
         * Constructs a new AllUserActionCommited.
         * @memberof brnn
         * @classdesc Represents an AllUserActionCommited.
         * @implements IAllUserActionCommited
         * @constructor
         * @param {brnn.IAllUserActionCommited=} [properties] Properties to set
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
         * @memberof brnn.AllUserActionCommited
         * @instance
         */
        AllUserActionCommited.prototype.ActionName = "";

        /**
         * Creates a new AllUserActionCommited instance using the specified properties.
         * @function create
         * @memberof brnn.AllUserActionCommited
         * @static
         * @param {brnn.IAllUserActionCommited=} [properties] Properties to set
         * @returns {brnn.AllUserActionCommited} AllUserActionCommited instance
         */
        AllUserActionCommited.create = function create(properties) {
            return new AllUserActionCommited(properties);
        };

        /**
         * Encodes the specified AllUserActionCommited message. Does not implicitly {@link brnn.AllUserActionCommited.verify|verify} messages.
         * @function encode
         * @memberof brnn.AllUserActionCommited
         * @static
         * @param {brnn.IAllUserActionCommited} message AllUserActionCommited message or plain object to encode
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
         * Encodes the specified AllUserActionCommited message, length delimited. Does not implicitly {@link brnn.AllUserActionCommited.verify|verify} messages.
         * @function encodeDelimited
         * @memberof brnn.AllUserActionCommited
         * @static
         * @param {brnn.IAllUserActionCommited} message AllUserActionCommited message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AllUserActionCommited.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AllUserActionCommited message from the specified reader or buffer.
         * @function decode
         * @memberof brnn.AllUserActionCommited
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {brnn.AllUserActionCommited} AllUserActionCommited
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AllUserActionCommited.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.brnn.AllUserActionCommited();
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
         * @memberof brnn.AllUserActionCommited
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {brnn.AllUserActionCommited} AllUserActionCommited
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
         * @memberof brnn.AllUserActionCommited
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
         * @memberof brnn.AllUserActionCommited
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {brnn.AllUserActionCommited} AllUserActionCommited
         */
        AllUserActionCommited.fromObject = function fromObject(object) {
            if (object instanceof $root.brnn.AllUserActionCommited)
                return object;
            var message = new $root.brnn.AllUserActionCommited();
            if (object.ActionName != null)
                message.ActionName = String(object.ActionName);
            return message;
        };

        /**
         * Creates a plain object from an AllUserActionCommited message. Also converts values to other types if specified.
         * @function toObject
         * @memberof brnn.AllUserActionCommited
         * @static
         * @param {brnn.AllUserActionCommited} message AllUserActionCommited
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
         * @memberof brnn.AllUserActionCommited
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AllUserActionCommited.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return AllUserActionCommited;
    })();

    brnn.LookOnUserNotify = (function() {

        /**
         * Properties of a LookOnUserNotify.
         * @memberof brnn
         * @interface ILookOnUserNotify
         * @property {Array.<number>|null} [UserID] LookOnUserNotify UserID
         */

        /**
         * Constructs a new LookOnUserNotify.
         * @memberof brnn
         * @classdesc Represents a LookOnUserNotify.
         * @implements ILookOnUserNotify
         * @constructor
         * @param {brnn.ILookOnUserNotify=} [properties] Properties to set
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
         * @memberof brnn.LookOnUserNotify
         * @instance
         */
        LookOnUserNotify.prototype.UserID = $util.emptyArray;

        /**
         * Creates a new LookOnUserNotify instance using the specified properties.
         * @function create
         * @memberof brnn.LookOnUserNotify
         * @static
         * @param {brnn.ILookOnUserNotify=} [properties] Properties to set
         * @returns {brnn.LookOnUserNotify} LookOnUserNotify instance
         */
        LookOnUserNotify.create = function create(properties) {
            return new LookOnUserNotify(properties);
        };

        /**
         * Encodes the specified LookOnUserNotify message. Does not implicitly {@link brnn.LookOnUserNotify.verify|verify} messages.
         * @function encode
         * @memberof brnn.LookOnUserNotify
         * @static
         * @param {brnn.ILookOnUserNotify} message LookOnUserNotify message or plain object to encode
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
         * Encodes the specified LookOnUserNotify message, length delimited. Does not implicitly {@link brnn.LookOnUserNotify.verify|verify} messages.
         * @function encodeDelimited
         * @memberof brnn.LookOnUserNotify
         * @static
         * @param {brnn.ILookOnUserNotify} message LookOnUserNotify message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LookOnUserNotify.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LookOnUserNotify message from the specified reader or buffer.
         * @function decode
         * @memberof brnn.LookOnUserNotify
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {brnn.LookOnUserNotify} LookOnUserNotify
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LookOnUserNotify.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.brnn.LookOnUserNotify();
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
         * @memberof brnn.LookOnUserNotify
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {brnn.LookOnUserNotify} LookOnUserNotify
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
         * @memberof brnn.LookOnUserNotify
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
         * @memberof brnn.LookOnUserNotify
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {brnn.LookOnUserNotify} LookOnUserNotify
         */
        LookOnUserNotify.fromObject = function fromObject(object) {
            if (object instanceof $root.brnn.LookOnUserNotify)
                return object;
            var message = new $root.brnn.LookOnUserNotify();
            if (object.UserID) {
                if (!Array.isArray(object.UserID))
                    throw TypeError(".brnn.LookOnUserNotify.UserID: array expected");
                message.UserID = [];
                for (var i = 0; i < object.UserID.length; ++i)
                    message.UserID[i] = object.UserID[i] | 0;
            }
            return message;
        };

        /**
         * Creates a plain object from a LookOnUserNotify message. Also converts values to other types if specified.
         * @function toObject
         * @memberof brnn.LookOnUserNotify
         * @static
         * @param {brnn.LookOnUserNotify} message LookOnUserNotify
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
         * @memberof brnn.LookOnUserNotify
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LookOnUserNotify.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return LookOnUserNotify;
    })();

    brnn.UserLuckScore = (function() {

        /**
         * Properties of a UserLuckScore.
         * @memberof brnn
         * @interface IUserLuckScore
         * @property {number} UserID UserLuckScore UserID
         * @property {number|Long} Score UserLuckScore Score
         */

        /**
         * Constructs a new UserLuckScore.
         * @memberof brnn
         * @classdesc Represents a UserLuckScore.
         * @implements IUserLuckScore
         * @constructor
         * @param {brnn.IUserLuckScore=} [properties] Properties to set
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
         * @memberof brnn.UserLuckScore
         * @instance
         */
        UserLuckScore.prototype.UserID = 0;

        /**
         * UserLuckScore Score.
         * @member {number|Long} Score
         * @memberof brnn.UserLuckScore
         * @instance
         */
        UserLuckScore.prototype.Score = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new UserLuckScore instance using the specified properties.
         * @function create
         * @memberof brnn.UserLuckScore
         * @static
         * @param {brnn.IUserLuckScore=} [properties] Properties to set
         * @returns {brnn.UserLuckScore} UserLuckScore instance
         */
        UserLuckScore.create = function create(properties) {
            return new UserLuckScore(properties);
        };

        /**
         * Encodes the specified UserLuckScore message. Does not implicitly {@link brnn.UserLuckScore.verify|verify} messages.
         * @function encode
         * @memberof brnn.UserLuckScore
         * @static
         * @param {brnn.IUserLuckScore} message UserLuckScore message or plain object to encode
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
         * Encodes the specified UserLuckScore message, length delimited. Does not implicitly {@link brnn.UserLuckScore.verify|verify} messages.
         * @function encodeDelimited
         * @memberof brnn.UserLuckScore
         * @static
         * @param {brnn.IUserLuckScore} message UserLuckScore message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserLuckScore.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UserLuckScore message from the specified reader or buffer.
         * @function decode
         * @memberof brnn.UserLuckScore
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {brnn.UserLuckScore} UserLuckScore
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserLuckScore.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.brnn.UserLuckScore();
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
         * @memberof brnn.UserLuckScore
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {brnn.UserLuckScore} UserLuckScore
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
         * @memberof brnn.UserLuckScore
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
         * @memberof brnn.UserLuckScore
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {brnn.UserLuckScore} UserLuckScore
         */
        UserLuckScore.fromObject = function fromObject(object) {
            if (object instanceof $root.brnn.UserLuckScore)
                return object;
            var message = new $root.brnn.UserLuckScore();
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
         * @memberof brnn.UserLuckScore
         * @static
         * @param {brnn.UserLuckScore} message UserLuckScore
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
         * @memberof brnn.UserLuckScore
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserLuckScore.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UserLuckScore;
    })();

    brnn.UserLuckScoreRet = (function() {

        /**
         * Properties of a UserLuckScoreRet.
         * @memberof brnn
         * @interface IUserLuckScoreRet
         * @property {number} UserID UserLuckScoreRet UserID
         * @property {string} Value UserLuckScoreRet Value
         */

        /**
         * Constructs a new UserLuckScoreRet.
         * @memberof brnn
         * @classdesc Represents a UserLuckScoreRet.
         * @implements IUserLuckScoreRet
         * @constructor
         * @param {brnn.IUserLuckScoreRet=} [properties] Properties to set
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
         * @memberof brnn.UserLuckScoreRet
         * @instance
         */
        UserLuckScoreRet.prototype.UserID = 0;

        /**
         * UserLuckScoreRet Value.
         * @member {string} Value
         * @memberof brnn.UserLuckScoreRet
         * @instance
         */
        UserLuckScoreRet.prototype.Value = "";

        /**
         * Creates a new UserLuckScoreRet instance using the specified properties.
         * @function create
         * @memberof brnn.UserLuckScoreRet
         * @static
         * @param {brnn.IUserLuckScoreRet=} [properties] Properties to set
         * @returns {brnn.UserLuckScoreRet} UserLuckScoreRet instance
         */
        UserLuckScoreRet.create = function create(properties) {
            return new UserLuckScoreRet(properties);
        };

        /**
         * Encodes the specified UserLuckScoreRet message. Does not implicitly {@link brnn.UserLuckScoreRet.verify|verify} messages.
         * @function encode
         * @memberof brnn.UserLuckScoreRet
         * @static
         * @param {brnn.IUserLuckScoreRet} message UserLuckScoreRet message or plain object to encode
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
         * Encodes the specified UserLuckScoreRet message, length delimited. Does not implicitly {@link brnn.UserLuckScoreRet.verify|verify} messages.
         * @function encodeDelimited
         * @memberof brnn.UserLuckScoreRet
         * @static
         * @param {brnn.IUserLuckScoreRet} message UserLuckScoreRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserLuckScoreRet.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UserLuckScoreRet message from the specified reader or buffer.
         * @function decode
         * @memberof brnn.UserLuckScoreRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {brnn.UserLuckScoreRet} UserLuckScoreRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserLuckScoreRet.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.brnn.UserLuckScoreRet();
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
         * @memberof brnn.UserLuckScoreRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {brnn.UserLuckScoreRet} UserLuckScoreRet
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
         * @memberof brnn.UserLuckScoreRet
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
         * @memberof brnn.UserLuckScoreRet
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {brnn.UserLuckScoreRet} UserLuckScoreRet
         */
        UserLuckScoreRet.fromObject = function fromObject(object) {
            if (object instanceof $root.brnn.UserLuckScoreRet)
                return object;
            var message = new $root.brnn.UserLuckScoreRet();
            if (object.UserID != null)
                message.UserID = object.UserID | 0;
            if (object.Value != null)
                message.Value = String(object.Value);
            return message;
        };

        /**
         * Creates a plain object from a UserLuckScoreRet message. Also converts values to other types if specified.
         * @function toObject
         * @memberof brnn.UserLuckScoreRet
         * @static
         * @param {brnn.UserLuckScoreRet} message UserLuckScoreRet
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
         * @memberof brnn.UserLuckScoreRet
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserLuckScoreRet.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UserLuckScoreRet;
    })();

    brnn.GameBeginCountDown = (function() {

        /**
         * Properties of a GameBeginCountDown.
         * @memberof brnn
         * @interface IGameBeginCountDown
         * @property {number} Time GameBeginCountDown Time
         */

        /**
         * Constructs a new GameBeginCountDown.
         * @memberof brnn
         * @classdesc Represents a GameBeginCountDown.
         * @implements IGameBeginCountDown
         * @constructor
         * @param {brnn.IGameBeginCountDown=} [properties] Properties to set
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
         * @memberof brnn.GameBeginCountDown
         * @instance
         */
        GameBeginCountDown.prototype.Time = 0;

        /**
         * Creates a new GameBeginCountDown instance using the specified properties.
         * @function create
         * @memberof brnn.GameBeginCountDown
         * @static
         * @param {brnn.IGameBeginCountDown=} [properties] Properties to set
         * @returns {brnn.GameBeginCountDown} GameBeginCountDown instance
         */
        GameBeginCountDown.create = function create(properties) {
            return new GameBeginCountDown(properties);
        };

        /**
         * Encodes the specified GameBeginCountDown message. Does not implicitly {@link brnn.GameBeginCountDown.verify|verify} messages.
         * @function encode
         * @memberof brnn.GameBeginCountDown
         * @static
         * @param {brnn.IGameBeginCountDown} message GameBeginCountDown message or plain object to encode
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
         * Encodes the specified GameBeginCountDown message, length delimited. Does not implicitly {@link brnn.GameBeginCountDown.verify|verify} messages.
         * @function encodeDelimited
         * @memberof brnn.GameBeginCountDown
         * @static
         * @param {brnn.IGameBeginCountDown} message GameBeginCountDown message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameBeginCountDown.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GameBeginCountDown message from the specified reader or buffer.
         * @function decode
         * @memberof brnn.GameBeginCountDown
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {brnn.GameBeginCountDown} GameBeginCountDown
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameBeginCountDown.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.brnn.GameBeginCountDown();
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
         * @memberof brnn.GameBeginCountDown
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {brnn.GameBeginCountDown} GameBeginCountDown
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
         * @memberof brnn.GameBeginCountDown
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
         * @memberof brnn.GameBeginCountDown
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {brnn.GameBeginCountDown} GameBeginCountDown
         */
        GameBeginCountDown.fromObject = function fromObject(object) {
            if (object instanceof $root.brnn.GameBeginCountDown)
                return object;
            var message = new $root.brnn.GameBeginCountDown();
            if (object.Time != null)
                message.Time = object.Time | 0;
            return message;
        };

        /**
         * Creates a plain object from a GameBeginCountDown message. Also converts values to other types if specified.
         * @function toObject
         * @memberof brnn.GameBeginCountDown
         * @static
         * @param {brnn.GameBeginCountDown} message GameBeginCountDown
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
         * @memberof brnn.GameBeginCountDown
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GameBeginCountDown.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GameBeginCountDown;
    })();

    brnn.SuperToolAddChangeLog = (function() {

        /**
         * Properties of a SuperToolAddChangeLog.
         * @memberof brnn
         * @interface ISuperToolAddChangeLog
         * @property {number} GameID SuperToolAddChangeLog GameID
         * @property {number} TableNo SuperToolAddChangeLog TableNo
         * @property {number} Type SuperToolAddChangeLog Type
         * @property {string} Result SuperToolAddChangeLog Result
         * @property {string} Operator SuperToolAddChangeLog Operator
         */

        /**
         * Constructs a new SuperToolAddChangeLog.
         * @memberof brnn
         * @classdesc Represents a SuperToolAddChangeLog.
         * @implements ISuperToolAddChangeLog
         * @constructor
         * @param {brnn.ISuperToolAddChangeLog=} [properties] Properties to set
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
         * @memberof brnn.SuperToolAddChangeLog
         * @instance
         */
        SuperToolAddChangeLog.prototype.GameID = 0;

        /**
         * SuperToolAddChangeLog TableNo.
         * @member {number} TableNo
         * @memberof brnn.SuperToolAddChangeLog
         * @instance
         */
        SuperToolAddChangeLog.prototype.TableNo = 0;

        /**
         * SuperToolAddChangeLog Type.
         * @member {number} Type
         * @memberof brnn.SuperToolAddChangeLog
         * @instance
         */
        SuperToolAddChangeLog.prototype.Type = 0;

        /**
         * SuperToolAddChangeLog Result.
         * @member {string} Result
         * @memberof brnn.SuperToolAddChangeLog
         * @instance
         */
        SuperToolAddChangeLog.prototype.Result = "";

        /**
         * SuperToolAddChangeLog Operator.
         * @member {string} Operator
         * @memberof brnn.SuperToolAddChangeLog
         * @instance
         */
        SuperToolAddChangeLog.prototype.Operator = "";

        /**
         * Creates a new SuperToolAddChangeLog instance using the specified properties.
         * @function create
         * @memberof brnn.SuperToolAddChangeLog
         * @static
         * @param {brnn.ISuperToolAddChangeLog=} [properties] Properties to set
         * @returns {brnn.SuperToolAddChangeLog} SuperToolAddChangeLog instance
         */
        SuperToolAddChangeLog.create = function create(properties) {
            return new SuperToolAddChangeLog(properties);
        };

        /**
         * Encodes the specified SuperToolAddChangeLog message. Does not implicitly {@link brnn.SuperToolAddChangeLog.verify|verify} messages.
         * @function encode
         * @memberof brnn.SuperToolAddChangeLog
         * @static
         * @param {brnn.ISuperToolAddChangeLog} message SuperToolAddChangeLog message or plain object to encode
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
         * Encodes the specified SuperToolAddChangeLog message, length delimited. Does not implicitly {@link brnn.SuperToolAddChangeLog.verify|verify} messages.
         * @function encodeDelimited
         * @memberof brnn.SuperToolAddChangeLog
         * @static
         * @param {brnn.ISuperToolAddChangeLog} message SuperToolAddChangeLog message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SuperToolAddChangeLog.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SuperToolAddChangeLog message from the specified reader or buffer.
         * @function decode
         * @memberof brnn.SuperToolAddChangeLog
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {brnn.SuperToolAddChangeLog} SuperToolAddChangeLog
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SuperToolAddChangeLog.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.brnn.SuperToolAddChangeLog();
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
         * @memberof brnn.SuperToolAddChangeLog
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {brnn.SuperToolAddChangeLog} SuperToolAddChangeLog
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
         * @memberof brnn.SuperToolAddChangeLog
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
         * @memberof brnn.SuperToolAddChangeLog
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {brnn.SuperToolAddChangeLog} SuperToolAddChangeLog
         */
        SuperToolAddChangeLog.fromObject = function fromObject(object) {
            if (object instanceof $root.brnn.SuperToolAddChangeLog)
                return object;
            var message = new $root.brnn.SuperToolAddChangeLog();
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
         * @memberof brnn.SuperToolAddChangeLog
         * @static
         * @param {brnn.SuperToolAddChangeLog} message SuperToolAddChangeLog
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
         * @memberof brnn.SuperToolAddChangeLog
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SuperToolAddChangeLog.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SuperToolAddChangeLog;
    })();

    brnn.SuperToolAddAssignReward = (function() {

        /**
         * Properties of a SuperToolAddAssignReward.
         * @memberof brnn
         * @interface ISuperToolAddAssignReward
         * @property {number} GameID SuperToolAddAssignReward GameID
         * @property {number} FlagID SuperToolAddAssignReward FlagID
         * @property {number} TableNo SuperToolAddAssignReward TableNo
         * @property {string} Result SuperToolAddAssignReward Result
         * @property {string} Operator SuperToolAddAssignReward Operator
         * @property {Array.<brnn.ISuperToolAddAssignRewardDetail>|null} [DetailList] SuperToolAddAssignReward DetailList
         */

        /**
         * Constructs a new SuperToolAddAssignReward.
         * @memberof brnn
         * @classdesc Represents a SuperToolAddAssignReward.
         * @implements ISuperToolAddAssignReward
         * @constructor
         * @param {brnn.ISuperToolAddAssignReward=} [properties] Properties to set
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
         * @memberof brnn.SuperToolAddAssignReward
         * @instance
         */
        SuperToolAddAssignReward.prototype.GameID = 0;

        /**
         * SuperToolAddAssignReward FlagID.
         * @member {number} FlagID
         * @memberof brnn.SuperToolAddAssignReward
         * @instance
         */
        SuperToolAddAssignReward.prototype.FlagID = 0;

        /**
         * SuperToolAddAssignReward TableNo.
         * @member {number} TableNo
         * @memberof brnn.SuperToolAddAssignReward
         * @instance
         */
        SuperToolAddAssignReward.prototype.TableNo = 0;

        /**
         * SuperToolAddAssignReward Result.
         * @member {string} Result
         * @memberof brnn.SuperToolAddAssignReward
         * @instance
         */
        SuperToolAddAssignReward.prototype.Result = "";

        /**
         * SuperToolAddAssignReward Operator.
         * @member {string} Operator
         * @memberof brnn.SuperToolAddAssignReward
         * @instance
         */
        SuperToolAddAssignReward.prototype.Operator = "";

        /**
         * SuperToolAddAssignReward DetailList.
         * @member {Array.<brnn.ISuperToolAddAssignRewardDetail>} DetailList
         * @memberof brnn.SuperToolAddAssignReward
         * @instance
         */
        SuperToolAddAssignReward.prototype.DetailList = $util.emptyArray;

        /**
         * Creates a new SuperToolAddAssignReward instance using the specified properties.
         * @function create
         * @memberof brnn.SuperToolAddAssignReward
         * @static
         * @param {brnn.ISuperToolAddAssignReward=} [properties] Properties to set
         * @returns {brnn.SuperToolAddAssignReward} SuperToolAddAssignReward instance
         */
        SuperToolAddAssignReward.create = function create(properties) {
            return new SuperToolAddAssignReward(properties);
        };

        /**
         * Encodes the specified SuperToolAddAssignReward message. Does not implicitly {@link brnn.SuperToolAddAssignReward.verify|verify} messages.
         * @function encode
         * @memberof brnn.SuperToolAddAssignReward
         * @static
         * @param {brnn.ISuperToolAddAssignReward} message SuperToolAddAssignReward message or plain object to encode
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
                    $root.brnn.SuperToolAddAssignRewardDetail.encode(message.DetailList[i], writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified SuperToolAddAssignReward message, length delimited. Does not implicitly {@link brnn.SuperToolAddAssignReward.verify|verify} messages.
         * @function encodeDelimited
         * @memberof brnn.SuperToolAddAssignReward
         * @static
         * @param {brnn.ISuperToolAddAssignReward} message SuperToolAddAssignReward message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SuperToolAddAssignReward.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SuperToolAddAssignReward message from the specified reader or buffer.
         * @function decode
         * @memberof brnn.SuperToolAddAssignReward
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {brnn.SuperToolAddAssignReward} SuperToolAddAssignReward
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SuperToolAddAssignReward.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.brnn.SuperToolAddAssignReward();
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
                    message.DetailList.push($root.brnn.SuperToolAddAssignRewardDetail.decode(reader, reader.uint32()));
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
         * @memberof brnn.SuperToolAddAssignReward
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {brnn.SuperToolAddAssignReward} SuperToolAddAssignReward
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
         * @memberof brnn.SuperToolAddAssignReward
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
                    var error = $root.brnn.SuperToolAddAssignRewardDetail.verify(message.DetailList[i]);
                    if (error)
                        return "DetailList." + error;
                }
            }
            return null;
        };

        /**
         * Creates a SuperToolAddAssignReward message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof brnn.SuperToolAddAssignReward
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {brnn.SuperToolAddAssignReward} SuperToolAddAssignReward
         */
        SuperToolAddAssignReward.fromObject = function fromObject(object) {
            if (object instanceof $root.brnn.SuperToolAddAssignReward)
                return object;
            var message = new $root.brnn.SuperToolAddAssignReward();
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
                    throw TypeError(".brnn.SuperToolAddAssignReward.DetailList: array expected");
                message.DetailList = [];
                for (var i = 0; i < object.DetailList.length; ++i) {
                    if (typeof object.DetailList[i] !== "object")
                        throw TypeError(".brnn.SuperToolAddAssignReward.DetailList: object expected");
                    message.DetailList[i] = $root.brnn.SuperToolAddAssignRewardDetail.fromObject(object.DetailList[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a SuperToolAddAssignReward message. Also converts values to other types if specified.
         * @function toObject
         * @memberof brnn.SuperToolAddAssignReward
         * @static
         * @param {brnn.SuperToolAddAssignReward} message SuperToolAddAssignReward
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
                    object.DetailList[j] = $root.brnn.SuperToolAddAssignRewardDetail.toObject(message.DetailList[j], options);
            }
            return object;
        };

        /**
         * Converts this SuperToolAddAssignReward to JSON.
         * @function toJSON
         * @memberof brnn.SuperToolAddAssignReward
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SuperToolAddAssignReward.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SuperToolAddAssignReward;
    })();

    brnn.SuperToolGetAssignRewardDetail = (function() {

        /**
         * Properties of a SuperToolGetAssignRewardDetail.
         * @memberof brnn
         * @interface ISuperToolGetAssignRewardDetail
         * @property {number} GameID SuperToolGetAssignRewardDetail GameID
         * @property {number} FlagID SuperToolGetAssignRewardDetail FlagID
         * @property {number} TableNo SuperToolGetAssignRewardDetail TableNo
         */

        /**
         * Constructs a new SuperToolGetAssignRewardDetail.
         * @memberof brnn
         * @classdesc Represents a SuperToolGetAssignRewardDetail.
         * @implements ISuperToolGetAssignRewardDetail
         * @constructor
         * @param {brnn.ISuperToolGetAssignRewardDetail=} [properties] Properties to set
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
         * @memberof brnn.SuperToolGetAssignRewardDetail
         * @instance
         */
        SuperToolGetAssignRewardDetail.prototype.GameID = 0;

        /**
         * SuperToolGetAssignRewardDetail FlagID.
         * @member {number} FlagID
         * @memberof brnn.SuperToolGetAssignRewardDetail
         * @instance
         */
        SuperToolGetAssignRewardDetail.prototype.FlagID = 0;

        /**
         * SuperToolGetAssignRewardDetail TableNo.
         * @member {number} TableNo
         * @memberof brnn.SuperToolGetAssignRewardDetail
         * @instance
         */
        SuperToolGetAssignRewardDetail.prototype.TableNo = 0;

        /**
         * Creates a new SuperToolGetAssignRewardDetail instance using the specified properties.
         * @function create
         * @memberof brnn.SuperToolGetAssignRewardDetail
         * @static
         * @param {brnn.ISuperToolGetAssignRewardDetail=} [properties] Properties to set
         * @returns {brnn.SuperToolGetAssignRewardDetail} SuperToolGetAssignRewardDetail instance
         */
        SuperToolGetAssignRewardDetail.create = function create(properties) {
            return new SuperToolGetAssignRewardDetail(properties);
        };

        /**
         * Encodes the specified SuperToolGetAssignRewardDetail message. Does not implicitly {@link brnn.SuperToolGetAssignRewardDetail.verify|verify} messages.
         * @function encode
         * @memberof brnn.SuperToolGetAssignRewardDetail
         * @static
         * @param {brnn.ISuperToolGetAssignRewardDetail} message SuperToolGetAssignRewardDetail message or plain object to encode
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
         * Encodes the specified SuperToolGetAssignRewardDetail message, length delimited. Does not implicitly {@link brnn.SuperToolGetAssignRewardDetail.verify|verify} messages.
         * @function encodeDelimited
         * @memberof brnn.SuperToolGetAssignRewardDetail
         * @static
         * @param {brnn.ISuperToolGetAssignRewardDetail} message SuperToolGetAssignRewardDetail message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SuperToolGetAssignRewardDetail.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SuperToolGetAssignRewardDetail message from the specified reader or buffer.
         * @function decode
         * @memberof brnn.SuperToolGetAssignRewardDetail
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {brnn.SuperToolGetAssignRewardDetail} SuperToolGetAssignRewardDetail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SuperToolGetAssignRewardDetail.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.brnn.SuperToolGetAssignRewardDetail();
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
         * @memberof brnn.SuperToolGetAssignRewardDetail
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {brnn.SuperToolGetAssignRewardDetail} SuperToolGetAssignRewardDetail
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
         * @memberof brnn.SuperToolGetAssignRewardDetail
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
         * @memberof brnn.SuperToolGetAssignRewardDetail
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {brnn.SuperToolGetAssignRewardDetail} SuperToolGetAssignRewardDetail
         */
        SuperToolGetAssignRewardDetail.fromObject = function fromObject(object) {
            if (object instanceof $root.brnn.SuperToolGetAssignRewardDetail)
                return object;
            var message = new $root.brnn.SuperToolGetAssignRewardDetail();
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
         * @memberof brnn.SuperToolGetAssignRewardDetail
         * @static
         * @param {brnn.SuperToolGetAssignRewardDetail} message SuperToolGetAssignRewardDetail
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
         * @memberof brnn.SuperToolGetAssignRewardDetail
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SuperToolGetAssignRewardDetail.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SuperToolGetAssignRewardDetail;
    })();

    brnn.SuperToolAddAssignRewardDetail = (function() {

        /**
         * Properties of a SuperToolAddAssignRewardDetail.
         * @memberof brnn
         * @interface ISuperToolAddAssignRewardDetail
         * @property {number} Idx SuperToolAddAssignRewardDetail Idx
         * @property {string} Description SuperToolAddAssignRewardDetail Description
         * @property {string} Reward SuperToolAddAssignRewardDetail Reward
         * @property {number} Status SuperToolAddAssignRewardDetail Status
         */

        /**
         * Constructs a new SuperToolAddAssignRewardDetail.
         * @memberof brnn
         * @classdesc Represents a SuperToolAddAssignRewardDetail.
         * @implements ISuperToolAddAssignRewardDetail
         * @constructor
         * @param {brnn.ISuperToolAddAssignRewardDetail=} [properties] Properties to set
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
         * @memberof brnn.SuperToolAddAssignRewardDetail
         * @instance
         */
        SuperToolAddAssignRewardDetail.prototype.Idx = 0;

        /**
         * SuperToolAddAssignRewardDetail Description.
         * @member {string} Description
         * @memberof brnn.SuperToolAddAssignRewardDetail
         * @instance
         */
        SuperToolAddAssignRewardDetail.prototype.Description = "";

        /**
         * SuperToolAddAssignRewardDetail Reward.
         * @member {string} Reward
         * @memberof brnn.SuperToolAddAssignRewardDetail
         * @instance
         */
        SuperToolAddAssignRewardDetail.prototype.Reward = "";

        /**
         * SuperToolAddAssignRewardDetail Status.
         * @member {number} Status
         * @memberof brnn.SuperToolAddAssignRewardDetail
         * @instance
         */
        SuperToolAddAssignRewardDetail.prototype.Status = 0;

        /**
         * Creates a new SuperToolAddAssignRewardDetail instance using the specified properties.
         * @function create
         * @memberof brnn.SuperToolAddAssignRewardDetail
         * @static
         * @param {brnn.ISuperToolAddAssignRewardDetail=} [properties] Properties to set
         * @returns {brnn.SuperToolAddAssignRewardDetail} SuperToolAddAssignRewardDetail instance
         */
        SuperToolAddAssignRewardDetail.create = function create(properties) {
            return new SuperToolAddAssignRewardDetail(properties);
        };

        /**
         * Encodes the specified SuperToolAddAssignRewardDetail message. Does not implicitly {@link brnn.SuperToolAddAssignRewardDetail.verify|verify} messages.
         * @function encode
         * @memberof brnn.SuperToolAddAssignRewardDetail
         * @static
         * @param {brnn.ISuperToolAddAssignRewardDetail} message SuperToolAddAssignRewardDetail message or plain object to encode
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
         * Encodes the specified SuperToolAddAssignRewardDetail message, length delimited. Does not implicitly {@link brnn.SuperToolAddAssignRewardDetail.verify|verify} messages.
         * @function encodeDelimited
         * @memberof brnn.SuperToolAddAssignRewardDetail
         * @static
         * @param {brnn.ISuperToolAddAssignRewardDetail} message SuperToolAddAssignRewardDetail message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SuperToolAddAssignRewardDetail.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SuperToolAddAssignRewardDetail message from the specified reader or buffer.
         * @function decode
         * @memberof brnn.SuperToolAddAssignRewardDetail
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {brnn.SuperToolAddAssignRewardDetail} SuperToolAddAssignRewardDetail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SuperToolAddAssignRewardDetail.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.brnn.SuperToolAddAssignRewardDetail();
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
         * @memberof brnn.SuperToolAddAssignRewardDetail
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {brnn.SuperToolAddAssignRewardDetail} SuperToolAddAssignRewardDetail
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
         * @memberof brnn.SuperToolAddAssignRewardDetail
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
         * @memberof brnn.SuperToolAddAssignRewardDetail
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {brnn.SuperToolAddAssignRewardDetail} SuperToolAddAssignRewardDetail
         */
        SuperToolAddAssignRewardDetail.fromObject = function fromObject(object) {
            if (object instanceof $root.brnn.SuperToolAddAssignRewardDetail)
                return object;
            var message = new $root.brnn.SuperToolAddAssignRewardDetail();
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
         * @memberof brnn.SuperToolAddAssignRewardDetail
         * @static
         * @param {brnn.SuperToolAddAssignRewardDetail} message SuperToolAddAssignRewardDetail
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
         * @memberof brnn.SuperToolAddAssignRewardDetail
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SuperToolAddAssignRewardDetail.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SuperToolAddAssignRewardDetail;
    })();

    brnn.SuperToolAssignRewardDetail = (function() {

        /**
         * Properties of a SuperToolAssignRewardDetail.
         * @memberof brnn
         * @interface ISuperToolAssignRewardDetail
         * @property {number} LogID SuperToolAssignRewardDetail LogID
         * @property {number} Idx SuperToolAssignRewardDetail Idx
         * @property {string} Description SuperToolAssignRewardDetail Description
         * @property {string} Reward SuperToolAssignRewardDetail Reward
         * @property {number} Status SuperToolAssignRewardDetail Status
         */

        /**
         * Constructs a new SuperToolAssignRewardDetail.
         * @memberof brnn
         * @classdesc Represents a SuperToolAssignRewardDetail.
         * @implements ISuperToolAssignRewardDetail
         * @constructor
         * @param {brnn.ISuperToolAssignRewardDetail=} [properties] Properties to set
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
         * @memberof brnn.SuperToolAssignRewardDetail
         * @instance
         */
        SuperToolAssignRewardDetail.prototype.LogID = 0;

        /**
         * SuperToolAssignRewardDetail Idx.
         * @member {number} Idx
         * @memberof brnn.SuperToolAssignRewardDetail
         * @instance
         */
        SuperToolAssignRewardDetail.prototype.Idx = 0;

        /**
         * SuperToolAssignRewardDetail Description.
         * @member {string} Description
         * @memberof brnn.SuperToolAssignRewardDetail
         * @instance
         */
        SuperToolAssignRewardDetail.prototype.Description = "";

        /**
         * SuperToolAssignRewardDetail Reward.
         * @member {string} Reward
         * @memberof brnn.SuperToolAssignRewardDetail
         * @instance
         */
        SuperToolAssignRewardDetail.prototype.Reward = "";

        /**
         * SuperToolAssignRewardDetail Status.
         * @member {number} Status
         * @memberof brnn.SuperToolAssignRewardDetail
         * @instance
         */
        SuperToolAssignRewardDetail.prototype.Status = 0;

        /**
         * Creates a new SuperToolAssignRewardDetail instance using the specified properties.
         * @function create
         * @memberof brnn.SuperToolAssignRewardDetail
         * @static
         * @param {brnn.ISuperToolAssignRewardDetail=} [properties] Properties to set
         * @returns {brnn.SuperToolAssignRewardDetail} SuperToolAssignRewardDetail instance
         */
        SuperToolAssignRewardDetail.create = function create(properties) {
            return new SuperToolAssignRewardDetail(properties);
        };

        /**
         * Encodes the specified SuperToolAssignRewardDetail message. Does not implicitly {@link brnn.SuperToolAssignRewardDetail.verify|verify} messages.
         * @function encode
         * @memberof brnn.SuperToolAssignRewardDetail
         * @static
         * @param {brnn.ISuperToolAssignRewardDetail} message SuperToolAssignRewardDetail message or plain object to encode
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
         * Encodes the specified SuperToolAssignRewardDetail message, length delimited. Does not implicitly {@link brnn.SuperToolAssignRewardDetail.verify|verify} messages.
         * @function encodeDelimited
         * @memberof brnn.SuperToolAssignRewardDetail
         * @static
         * @param {brnn.ISuperToolAssignRewardDetail} message SuperToolAssignRewardDetail message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SuperToolAssignRewardDetail.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SuperToolAssignRewardDetail message from the specified reader or buffer.
         * @function decode
         * @memberof brnn.SuperToolAssignRewardDetail
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {brnn.SuperToolAssignRewardDetail} SuperToolAssignRewardDetail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SuperToolAssignRewardDetail.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.brnn.SuperToolAssignRewardDetail();
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
         * @memberof brnn.SuperToolAssignRewardDetail
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {brnn.SuperToolAssignRewardDetail} SuperToolAssignRewardDetail
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
         * @memberof brnn.SuperToolAssignRewardDetail
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
         * @memberof brnn.SuperToolAssignRewardDetail
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {brnn.SuperToolAssignRewardDetail} SuperToolAssignRewardDetail
         */
        SuperToolAssignRewardDetail.fromObject = function fromObject(object) {
            if (object instanceof $root.brnn.SuperToolAssignRewardDetail)
                return object;
            var message = new $root.brnn.SuperToolAssignRewardDetail();
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
         * @memberof brnn.SuperToolAssignRewardDetail
         * @static
         * @param {brnn.SuperToolAssignRewardDetail} message SuperToolAssignRewardDetail
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
         * @memberof brnn.SuperToolAssignRewardDetail
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SuperToolAssignRewardDetail.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SuperToolAssignRewardDetail;
    })();

    brnn.SuperToolGetVipUserRequest = (function() {

        /**
         * Properties of a SuperToolGetVipUserRequest.
         * @memberof brnn
         * @interface ISuperToolGetVipUserRequest
         * @property {number} GameID SuperToolGetVipUserRequest GameID
         */

        /**
         * Constructs a new SuperToolGetVipUserRequest.
         * @memberof brnn
         * @classdesc Represents a SuperToolGetVipUserRequest.
         * @implements ISuperToolGetVipUserRequest
         * @constructor
         * @param {brnn.ISuperToolGetVipUserRequest=} [properties] Properties to set
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
         * @memberof brnn.SuperToolGetVipUserRequest
         * @instance
         */
        SuperToolGetVipUserRequest.prototype.GameID = 0;

        /**
         * Creates a new SuperToolGetVipUserRequest instance using the specified properties.
         * @function create
         * @memberof brnn.SuperToolGetVipUserRequest
         * @static
         * @param {brnn.ISuperToolGetVipUserRequest=} [properties] Properties to set
         * @returns {brnn.SuperToolGetVipUserRequest} SuperToolGetVipUserRequest instance
         */
        SuperToolGetVipUserRequest.create = function create(properties) {
            return new SuperToolGetVipUserRequest(properties);
        };

        /**
         * Encodes the specified SuperToolGetVipUserRequest message. Does not implicitly {@link brnn.SuperToolGetVipUserRequest.verify|verify} messages.
         * @function encode
         * @memberof brnn.SuperToolGetVipUserRequest
         * @static
         * @param {brnn.ISuperToolGetVipUserRequest} message SuperToolGetVipUserRequest message or plain object to encode
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
         * Encodes the specified SuperToolGetVipUserRequest message, length delimited. Does not implicitly {@link brnn.SuperToolGetVipUserRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof brnn.SuperToolGetVipUserRequest
         * @static
         * @param {brnn.ISuperToolGetVipUserRequest} message SuperToolGetVipUserRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SuperToolGetVipUserRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SuperToolGetVipUserRequest message from the specified reader or buffer.
         * @function decode
         * @memberof brnn.SuperToolGetVipUserRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {brnn.SuperToolGetVipUserRequest} SuperToolGetVipUserRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SuperToolGetVipUserRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.brnn.SuperToolGetVipUserRequest();
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
         * @memberof brnn.SuperToolGetVipUserRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {brnn.SuperToolGetVipUserRequest} SuperToolGetVipUserRequest
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
         * @memberof brnn.SuperToolGetVipUserRequest
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
         * @memberof brnn.SuperToolGetVipUserRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {brnn.SuperToolGetVipUserRequest} SuperToolGetVipUserRequest
         */
        SuperToolGetVipUserRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.brnn.SuperToolGetVipUserRequest)
                return object;
            var message = new $root.brnn.SuperToolGetVipUserRequest();
            if (object.GameID != null)
                message.GameID = object.GameID | 0;
            return message;
        };

        /**
         * Creates a plain object from a SuperToolGetVipUserRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof brnn.SuperToolGetVipUserRequest
         * @static
         * @param {brnn.SuperToolGetVipUserRequest} message SuperToolGetVipUserRequest
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
         * @memberof brnn.SuperToolGetVipUserRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SuperToolGetVipUserRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SuperToolGetVipUserRequest;
    })();

    brnn.SuperToolVipUserDataList = (function() {

        /**
         * Properties of a SuperToolVipUserDataList.
         * @memberof brnn
         * @interface ISuperToolVipUserDataList
         * @property {Array.<brnn.ISuperToolVipUserData>|null} [DataList] SuperToolVipUserDataList DataList
         */

        /**
         * Constructs a new SuperToolVipUserDataList.
         * @memberof brnn
         * @classdesc Represents a SuperToolVipUserDataList.
         * @implements ISuperToolVipUserDataList
         * @constructor
         * @param {brnn.ISuperToolVipUserDataList=} [properties] Properties to set
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
         * @member {Array.<brnn.ISuperToolVipUserData>} DataList
         * @memberof brnn.SuperToolVipUserDataList
         * @instance
         */
        SuperToolVipUserDataList.prototype.DataList = $util.emptyArray;

        /**
         * Creates a new SuperToolVipUserDataList instance using the specified properties.
         * @function create
         * @memberof brnn.SuperToolVipUserDataList
         * @static
         * @param {brnn.ISuperToolVipUserDataList=} [properties] Properties to set
         * @returns {brnn.SuperToolVipUserDataList} SuperToolVipUserDataList instance
         */
        SuperToolVipUserDataList.create = function create(properties) {
            return new SuperToolVipUserDataList(properties);
        };

        /**
         * Encodes the specified SuperToolVipUserDataList message. Does not implicitly {@link brnn.SuperToolVipUserDataList.verify|verify} messages.
         * @function encode
         * @memberof brnn.SuperToolVipUserDataList
         * @static
         * @param {brnn.ISuperToolVipUserDataList} message SuperToolVipUserDataList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SuperToolVipUserDataList.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.DataList != null && message.DataList.length)
                for (var i = 0; i < message.DataList.length; ++i)
                    $root.brnn.SuperToolVipUserData.encode(message.DataList[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified SuperToolVipUserDataList message, length delimited. Does not implicitly {@link brnn.SuperToolVipUserDataList.verify|verify} messages.
         * @function encodeDelimited
         * @memberof brnn.SuperToolVipUserDataList
         * @static
         * @param {brnn.ISuperToolVipUserDataList} message SuperToolVipUserDataList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SuperToolVipUserDataList.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SuperToolVipUserDataList message from the specified reader or buffer.
         * @function decode
         * @memberof brnn.SuperToolVipUserDataList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {brnn.SuperToolVipUserDataList} SuperToolVipUserDataList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SuperToolVipUserDataList.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.brnn.SuperToolVipUserDataList();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.DataList && message.DataList.length))
                        message.DataList = [];
                    message.DataList.push($root.brnn.SuperToolVipUserData.decode(reader, reader.uint32()));
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
         * @memberof brnn.SuperToolVipUserDataList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {brnn.SuperToolVipUserDataList} SuperToolVipUserDataList
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
         * @memberof brnn.SuperToolVipUserDataList
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
                    var error = $root.brnn.SuperToolVipUserData.verify(message.DataList[i]);
                    if (error)
                        return "DataList." + error;
                }
            }
            return null;
        };

        /**
         * Creates a SuperToolVipUserDataList message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof brnn.SuperToolVipUserDataList
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {brnn.SuperToolVipUserDataList} SuperToolVipUserDataList
         */
        SuperToolVipUserDataList.fromObject = function fromObject(object) {
            if (object instanceof $root.brnn.SuperToolVipUserDataList)
                return object;
            var message = new $root.brnn.SuperToolVipUserDataList();
            if (object.DataList) {
                if (!Array.isArray(object.DataList))
                    throw TypeError(".brnn.SuperToolVipUserDataList.DataList: array expected");
                message.DataList = [];
                for (var i = 0; i < object.DataList.length; ++i) {
                    if (typeof object.DataList[i] !== "object")
                        throw TypeError(".brnn.SuperToolVipUserDataList.DataList: object expected");
                    message.DataList[i] = $root.brnn.SuperToolVipUserData.fromObject(object.DataList[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a SuperToolVipUserDataList message. Also converts values to other types if specified.
         * @function toObject
         * @memberof brnn.SuperToolVipUserDataList
         * @static
         * @param {brnn.SuperToolVipUserDataList} message SuperToolVipUserDataList
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
                    object.DataList[j] = $root.brnn.SuperToolVipUserData.toObject(message.DataList[j], options);
            }
            return object;
        };

        /**
         * Converts this SuperToolVipUserDataList to JSON.
         * @function toJSON
         * @memberof brnn.SuperToolVipUserDataList
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SuperToolVipUserDataList.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SuperToolVipUserDataList;
    })();

    brnn.SuperToolVipUserData = (function() {

        /**
         * Properties of a SuperToolVipUserData.
         * @memberof brnn
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
         * @memberof brnn
         * @classdesc Represents a SuperToolVipUserData.
         * @implements ISuperToolVipUserData
         * @constructor
         * @param {brnn.ISuperToolVipUserData=} [properties] Properties to set
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
         * @memberof brnn.SuperToolVipUserData
         * @instance
         */
        SuperToolVipUserData.prototype.UserID = 0;

        /**
         * SuperToolVipUserData AssignAmount.
         * @member {number|Long} AssignAmount
         * @memberof brnn.SuperToolVipUserData
         * @instance
         */
        SuperToolVipUserData.prototype.AssignAmount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * SuperToolVipUserData AssignRate.
         * @member {number} AssignRate
         * @memberof brnn.SuperToolVipUserData
         * @instance
         */
        SuperToolVipUserData.prototype.AssignRate = 0;

        /**
         * SuperToolVipUserData CompleteAmount.
         * @member {number|Long} CompleteAmount
         * @memberof brnn.SuperToolVipUserData
         * @instance
         */
        SuperToolVipUserData.prototype.CompleteAmount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * SuperToolVipUserData Complete.
         * @member {number} Complete
         * @memberof brnn.SuperToolVipUserData
         * @instance
         */
        SuperToolVipUserData.prototype.Complete = 0;

        /**
         * SuperToolVipUserData Status.
         * @member {number} Status
         * @memberof brnn.SuperToolVipUserData
         * @instance
         */
        SuperToolVipUserData.prototype.Status = 0;

        /**
         * SuperToolVipUserData TotalAll.
         * @member {number} TotalAll
         * @memberof brnn.SuperToolVipUserData
         * @instance
         */
        SuperToolVipUserData.prototype.TotalAll = 0;

        /**
         * SuperToolVipUserData TotalUserWinLose.
         * @member {number} TotalUserWinLose
         * @memberof brnn.SuperToolVipUserData
         * @instance
         */
        SuperToolVipUserData.prototype.TotalUserWinLose = 0;

        /**
         * SuperToolVipUserData TodayUserWinLose.
         * @member {number} TodayUserWinLose
         * @memberof brnn.SuperToolVipUserData
         * @instance
         */
        SuperToolVipUserData.prototype.TodayUserWinLose = 0;

        /**
         * Creates a new SuperToolVipUserData instance using the specified properties.
         * @function create
         * @memberof brnn.SuperToolVipUserData
         * @static
         * @param {brnn.ISuperToolVipUserData=} [properties] Properties to set
         * @returns {brnn.SuperToolVipUserData} SuperToolVipUserData instance
         */
        SuperToolVipUserData.create = function create(properties) {
            return new SuperToolVipUserData(properties);
        };

        /**
         * Encodes the specified SuperToolVipUserData message. Does not implicitly {@link brnn.SuperToolVipUserData.verify|verify} messages.
         * @function encode
         * @memberof brnn.SuperToolVipUserData
         * @static
         * @param {brnn.ISuperToolVipUserData} message SuperToolVipUserData message or plain object to encode
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
         * Encodes the specified SuperToolVipUserData message, length delimited. Does not implicitly {@link brnn.SuperToolVipUserData.verify|verify} messages.
         * @function encodeDelimited
         * @memberof brnn.SuperToolVipUserData
         * @static
         * @param {brnn.ISuperToolVipUserData} message SuperToolVipUserData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SuperToolVipUserData.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SuperToolVipUserData message from the specified reader or buffer.
         * @function decode
         * @memberof brnn.SuperToolVipUserData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {brnn.SuperToolVipUserData} SuperToolVipUserData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SuperToolVipUserData.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.brnn.SuperToolVipUserData();
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
         * @memberof brnn.SuperToolVipUserData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {brnn.SuperToolVipUserData} SuperToolVipUserData
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
         * @memberof brnn.SuperToolVipUserData
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
         * @memberof brnn.SuperToolVipUserData
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {brnn.SuperToolVipUserData} SuperToolVipUserData
         */
        SuperToolVipUserData.fromObject = function fromObject(object) {
            if (object instanceof $root.brnn.SuperToolVipUserData)
                return object;
            var message = new $root.brnn.SuperToolVipUserData();
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
         * @memberof brnn.SuperToolVipUserData
         * @static
         * @param {brnn.SuperToolVipUserData} message SuperToolVipUserData
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
         * @memberof brnn.SuperToolVipUserData
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SuperToolVipUserData.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SuperToolVipUserData;
    })();

    brnn.SuperToolFishGetSystemRewardDetail = (function() {

        /**
         * Properties of a SuperToolFishGetSystemRewardDetail.
         * @memberof brnn
         * @interface ISuperToolFishGetSystemRewardDetail
         * @property {Array.<brnn.IFishSystemRewardDataList>|null} [FishRewardList] SuperToolFishGetSystemRewardDetail FishRewardList
         */

        /**
         * Constructs a new SuperToolFishGetSystemRewardDetail.
         * @memberof brnn
         * @classdesc Represents a SuperToolFishGetSystemRewardDetail.
         * @implements ISuperToolFishGetSystemRewardDetail
         * @constructor
         * @param {brnn.ISuperToolFishGetSystemRewardDetail=} [properties] Properties to set
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
         * @member {Array.<brnn.IFishSystemRewardDataList>} FishRewardList
         * @memberof brnn.SuperToolFishGetSystemRewardDetail
         * @instance
         */
        SuperToolFishGetSystemRewardDetail.prototype.FishRewardList = $util.emptyArray;

        /**
         * Creates a new SuperToolFishGetSystemRewardDetail instance using the specified properties.
         * @function create
         * @memberof brnn.SuperToolFishGetSystemRewardDetail
         * @static
         * @param {brnn.ISuperToolFishGetSystemRewardDetail=} [properties] Properties to set
         * @returns {brnn.SuperToolFishGetSystemRewardDetail} SuperToolFishGetSystemRewardDetail instance
         */
        SuperToolFishGetSystemRewardDetail.create = function create(properties) {
            return new SuperToolFishGetSystemRewardDetail(properties);
        };

        /**
         * Encodes the specified SuperToolFishGetSystemRewardDetail message. Does not implicitly {@link brnn.SuperToolFishGetSystemRewardDetail.verify|verify} messages.
         * @function encode
         * @memberof brnn.SuperToolFishGetSystemRewardDetail
         * @static
         * @param {brnn.ISuperToolFishGetSystemRewardDetail} message SuperToolFishGetSystemRewardDetail message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SuperToolFishGetSystemRewardDetail.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.FishRewardList != null && message.FishRewardList.length)
                for (var i = 0; i < message.FishRewardList.length; ++i)
                    $root.brnn.FishSystemRewardDataList.encode(message.FishRewardList[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified SuperToolFishGetSystemRewardDetail message, length delimited. Does not implicitly {@link brnn.SuperToolFishGetSystemRewardDetail.verify|verify} messages.
         * @function encodeDelimited
         * @memberof brnn.SuperToolFishGetSystemRewardDetail
         * @static
         * @param {brnn.ISuperToolFishGetSystemRewardDetail} message SuperToolFishGetSystemRewardDetail message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SuperToolFishGetSystemRewardDetail.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SuperToolFishGetSystemRewardDetail message from the specified reader or buffer.
         * @function decode
         * @memberof brnn.SuperToolFishGetSystemRewardDetail
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {brnn.SuperToolFishGetSystemRewardDetail} SuperToolFishGetSystemRewardDetail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SuperToolFishGetSystemRewardDetail.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.brnn.SuperToolFishGetSystemRewardDetail();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.FishRewardList && message.FishRewardList.length))
                        message.FishRewardList = [];
                    message.FishRewardList.push($root.brnn.FishSystemRewardDataList.decode(reader, reader.uint32()));
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
         * @memberof brnn.SuperToolFishGetSystemRewardDetail
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {brnn.SuperToolFishGetSystemRewardDetail} SuperToolFishGetSystemRewardDetail
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
         * @memberof brnn.SuperToolFishGetSystemRewardDetail
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
                    var error = $root.brnn.FishSystemRewardDataList.verify(message.FishRewardList[i]);
                    if (error)
                        return "FishRewardList." + error;
                }
            }
            return null;
        };

        /**
         * Creates a SuperToolFishGetSystemRewardDetail message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof brnn.SuperToolFishGetSystemRewardDetail
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {brnn.SuperToolFishGetSystemRewardDetail} SuperToolFishGetSystemRewardDetail
         */
        SuperToolFishGetSystemRewardDetail.fromObject = function fromObject(object) {
            if (object instanceof $root.brnn.SuperToolFishGetSystemRewardDetail)
                return object;
            var message = new $root.brnn.SuperToolFishGetSystemRewardDetail();
            if (object.FishRewardList) {
                if (!Array.isArray(object.FishRewardList))
                    throw TypeError(".brnn.SuperToolFishGetSystemRewardDetail.FishRewardList: array expected");
                message.FishRewardList = [];
                for (var i = 0; i < object.FishRewardList.length; ++i) {
                    if (typeof object.FishRewardList[i] !== "object")
                        throw TypeError(".brnn.SuperToolFishGetSystemRewardDetail.FishRewardList: object expected");
                    message.FishRewardList[i] = $root.brnn.FishSystemRewardDataList.fromObject(object.FishRewardList[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a SuperToolFishGetSystemRewardDetail message. Also converts values to other types if specified.
         * @function toObject
         * @memberof brnn.SuperToolFishGetSystemRewardDetail
         * @static
         * @param {brnn.SuperToolFishGetSystemRewardDetail} message SuperToolFishGetSystemRewardDetail
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
                    object.FishRewardList[j] = $root.brnn.FishSystemRewardDataList.toObject(message.FishRewardList[j], options);
            }
            return object;
        };

        /**
         * Converts this SuperToolFishGetSystemRewardDetail to JSON.
         * @function toJSON
         * @memberof brnn.SuperToolFishGetSystemRewardDetail
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SuperToolFishGetSystemRewardDetail.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SuperToolFishGetSystemRewardDetail;
    })();

    brnn.FishSystemRewardDataList = (function() {

        /**
         * Properties of a FishSystemRewardDataList.
         * @memberof brnn
         * @interface IFishSystemRewardDataList
         * @property {number} FishID FishSystemRewardDataList FishID
         * @property {number|Long} Amount FishSystemRewardDataList Amount
         * @property {number|Long} FinishAmount FishSystemRewardDataList FinishAmount
         * @property {number} Rate FishSystemRewardDataList Rate
         * @property {number} Status FishSystemRewardDataList Status
         */

        /**
         * Constructs a new FishSystemRewardDataList.
         * @memberof brnn
         * @classdesc Represents a FishSystemRewardDataList.
         * @implements IFishSystemRewardDataList
         * @constructor
         * @param {brnn.IFishSystemRewardDataList=} [properties] Properties to set
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
         * @memberof brnn.FishSystemRewardDataList
         * @instance
         */
        FishSystemRewardDataList.prototype.FishID = 0;

        /**
         * FishSystemRewardDataList Amount.
         * @member {number|Long} Amount
         * @memberof brnn.FishSystemRewardDataList
         * @instance
         */
        FishSystemRewardDataList.prototype.Amount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * FishSystemRewardDataList FinishAmount.
         * @member {number|Long} FinishAmount
         * @memberof brnn.FishSystemRewardDataList
         * @instance
         */
        FishSystemRewardDataList.prototype.FinishAmount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * FishSystemRewardDataList Rate.
         * @member {number} Rate
         * @memberof brnn.FishSystemRewardDataList
         * @instance
         */
        FishSystemRewardDataList.prototype.Rate = 0;

        /**
         * FishSystemRewardDataList Status.
         * @member {number} Status
         * @memberof brnn.FishSystemRewardDataList
         * @instance
         */
        FishSystemRewardDataList.prototype.Status = 0;

        /**
         * Creates a new FishSystemRewardDataList instance using the specified properties.
         * @function create
         * @memberof brnn.FishSystemRewardDataList
         * @static
         * @param {brnn.IFishSystemRewardDataList=} [properties] Properties to set
         * @returns {brnn.FishSystemRewardDataList} FishSystemRewardDataList instance
         */
        FishSystemRewardDataList.create = function create(properties) {
            return new FishSystemRewardDataList(properties);
        };

        /**
         * Encodes the specified FishSystemRewardDataList message. Does not implicitly {@link brnn.FishSystemRewardDataList.verify|verify} messages.
         * @function encode
         * @memberof brnn.FishSystemRewardDataList
         * @static
         * @param {brnn.IFishSystemRewardDataList} message FishSystemRewardDataList message or plain object to encode
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
         * Encodes the specified FishSystemRewardDataList message, length delimited. Does not implicitly {@link brnn.FishSystemRewardDataList.verify|verify} messages.
         * @function encodeDelimited
         * @memberof brnn.FishSystemRewardDataList
         * @static
         * @param {brnn.IFishSystemRewardDataList} message FishSystemRewardDataList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FishSystemRewardDataList.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FishSystemRewardDataList message from the specified reader or buffer.
         * @function decode
         * @memberof brnn.FishSystemRewardDataList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {brnn.FishSystemRewardDataList} FishSystemRewardDataList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FishSystemRewardDataList.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.brnn.FishSystemRewardDataList();
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
         * @memberof brnn.FishSystemRewardDataList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {brnn.FishSystemRewardDataList} FishSystemRewardDataList
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
         * @memberof brnn.FishSystemRewardDataList
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
         * @memberof brnn.FishSystemRewardDataList
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {brnn.FishSystemRewardDataList} FishSystemRewardDataList
         */
        FishSystemRewardDataList.fromObject = function fromObject(object) {
            if (object instanceof $root.brnn.FishSystemRewardDataList)
                return object;
            var message = new $root.brnn.FishSystemRewardDataList();
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
         * @memberof brnn.FishSystemRewardDataList
         * @static
         * @param {brnn.FishSystemRewardDataList} message FishSystemRewardDataList
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
         * @memberof brnn.FishSystemRewardDataList
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FishSystemRewardDataList.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return FishSystemRewardDataList;
    })();

    brnn.SuperToolFishGetVIPUserRewardDetail = (function() {

        /**
         * Properties of a SuperToolFishGetVIPUserRewardDetail.
         * @memberof brnn
         * @interface ISuperToolFishGetVIPUserRewardDetail
         * @property {Array.<brnn.IFishVIPUserRewardDataList>|null} [FishVIPUserList] SuperToolFishGetVIPUserRewardDetail FishVIPUserList
         */

        /**
         * Constructs a new SuperToolFishGetVIPUserRewardDetail.
         * @memberof brnn
         * @classdesc Represents a SuperToolFishGetVIPUserRewardDetail.
         * @implements ISuperToolFishGetVIPUserRewardDetail
         * @constructor
         * @param {brnn.ISuperToolFishGetVIPUserRewardDetail=} [properties] Properties to set
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
         * @member {Array.<brnn.IFishVIPUserRewardDataList>} FishVIPUserList
         * @memberof brnn.SuperToolFishGetVIPUserRewardDetail
         * @instance
         */
        SuperToolFishGetVIPUserRewardDetail.prototype.FishVIPUserList = $util.emptyArray;

        /**
         * Creates a new SuperToolFishGetVIPUserRewardDetail instance using the specified properties.
         * @function create
         * @memberof brnn.SuperToolFishGetVIPUserRewardDetail
         * @static
         * @param {brnn.ISuperToolFishGetVIPUserRewardDetail=} [properties] Properties to set
         * @returns {brnn.SuperToolFishGetVIPUserRewardDetail} SuperToolFishGetVIPUserRewardDetail instance
         */
        SuperToolFishGetVIPUserRewardDetail.create = function create(properties) {
            return new SuperToolFishGetVIPUserRewardDetail(properties);
        };

        /**
         * Encodes the specified SuperToolFishGetVIPUserRewardDetail message. Does not implicitly {@link brnn.SuperToolFishGetVIPUserRewardDetail.verify|verify} messages.
         * @function encode
         * @memberof brnn.SuperToolFishGetVIPUserRewardDetail
         * @static
         * @param {brnn.ISuperToolFishGetVIPUserRewardDetail} message SuperToolFishGetVIPUserRewardDetail message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SuperToolFishGetVIPUserRewardDetail.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.FishVIPUserList != null && message.FishVIPUserList.length)
                for (var i = 0; i < message.FishVIPUserList.length; ++i)
                    $root.brnn.FishVIPUserRewardDataList.encode(message.FishVIPUserList[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified SuperToolFishGetVIPUserRewardDetail message, length delimited. Does not implicitly {@link brnn.SuperToolFishGetVIPUserRewardDetail.verify|verify} messages.
         * @function encodeDelimited
         * @memberof brnn.SuperToolFishGetVIPUserRewardDetail
         * @static
         * @param {brnn.ISuperToolFishGetVIPUserRewardDetail} message SuperToolFishGetVIPUserRewardDetail message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SuperToolFishGetVIPUserRewardDetail.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SuperToolFishGetVIPUserRewardDetail message from the specified reader or buffer.
         * @function decode
         * @memberof brnn.SuperToolFishGetVIPUserRewardDetail
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {brnn.SuperToolFishGetVIPUserRewardDetail} SuperToolFishGetVIPUserRewardDetail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SuperToolFishGetVIPUserRewardDetail.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.brnn.SuperToolFishGetVIPUserRewardDetail();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.FishVIPUserList && message.FishVIPUserList.length))
                        message.FishVIPUserList = [];
                    message.FishVIPUserList.push($root.brnn.FishVIPUserRewardDataList.decode(reader, reader.uint32()));
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
         * @memberof brnn.SuperToolFishGetVIPUserRewardDetail
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {brnn.SuperToolFishGetVIPUserRewardDetail} SuperToolFishGetVIPUserRewardDetail
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
         * @memberof brnn.SuperToolFishGetVIPUserRewardDetail
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
                    var error = $root.brnn.FishVIPUserRewardDataList.verify(message.FishVIPUserList[i]);
                    if (error)
                        return "FishVIPUserList." + error;
                }
            }
            return null;
        };

        /**
         * Creates a SuperToolFishGetVIPUserRewardDetail message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof brnn.SuperToolFishGetVIPUserRewardDetail
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {brnn.SuperToolFishGetVIPUserRewardDetail} SuperToolFishGetVIPUserRewardDetail
         */
        SuperToolFishGetVIPUserRewardDetail.fromObject = function fromObject(object) {
            if (object instanceof $root.brnn.SuperToolFishGetVIPUserRewardDetail)
                return object;
            var message = new $root.brnn.SuperToolFishGetVIPUserRewardDetail();
            if (object.FishVIPUserList) {
                if (!Array.isArray(object.FishVIPUserList))
                    throw TypeError(".brnn.SuperToolFishGetVIPUserRewardDetail.FishVIPUserList: array expected");
                message.FishVIPUserList = [];
                for (var i = 0; i < object.FishVIPUserList.length; ++i) {
                    if (typeof object.FishVIPUserList[i] !== "object")
                        throw TypeError(".brnn.SuperToolFishGetVIPUserRewardDetail.FishVIPUserList: object expected");
                    message.FishVIPUserList[i] = $root.brnn.FishVIPUserRewardDataList.fromObject(object.FishVIPUserList[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a SuperToolFishGetVIPUserRewardDetail message. Also converts values to other types if specified.
         * @function toObject
         * @memberof brnn.SuperToolFishGetVIPUserRewardDetail
         * @static
         * @param {brnn.SuperToolFishGetVIPUserRewardDetail} message SuperToolFishGetVIPUserRewardDetail
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
                    object.FishVIPUserList[j] = $root.brnn.FishVIPUserRewardDataList.toObject(message.FishVIPUserList[j], options);
            }
            return object;
        };

        /**
         * Converts this SuperToolFishGetVIPUserRewardDetail to JSON.
         * @function toJSON
         * @memberof brnn.SuperToolFishGetVIPUserRewardDetail
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SuperToolFishGetVIPUserRewardDetail.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SuperToolFishGetVIPUserRewardDetail;
    })();

    brnn.FishVIPUserRewardDataList = (function() {

        /**
         * Properties of a FishVIPUserRewardDataList.
         * @memberof brnn
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
         * @memberof brnn
         * @classdesc Represents a FishVIPUserRewardDataList.
         * @implements IFishVIPUserRewardDataList
         * @constructor
         * @param {brnn.IFishVIPUserRewardDataList=} [properties] Properties to set
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
         * @memberof brnn.FishVIPUserRewardDataList
         * @instance
         */
        FishVIPUserRewardDataList.prototype.UserID = 0;

        /**
         * FishVIPUserRewardDataList AssignAmount.
         * @member {number|Long} AssignAmount
         * @memberof brnn.FishVIPUserRewardDataList
         * @instance
         */
        FishVIPUserRewardDataList.prototype.AssignAmount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * FishVIPUserRewardDataList Rate.
         * @member {number} Rate
         * @memberof brnn.FishVIPUserRewardDataList
         * @instance
         */
        FishVIPUserRewardDataList.prototype.Rate = 0;

        /**
         * FishVIPUserRewardDataList FinishAmount.
         * @member {number|Long} FinishAmount
         * @memberof brnn.FishVIPUserRewardDataList
         * @instance
         */
        FishVIPUserRewardDataList.prototype.FinishAmount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * FishVIPUserRewardDataList Status.
         * @member {number} Status
         * @memberof brnn.FishVIPUserRewardDataList
         * @instance
         */
        FishVIPUserRewardDataList.prototype.Status = 0;

        /**
         * FishVIPUserRewardDataList SumAssignAmount.
         * @member {number|Long} SumAssignAmount
         * @memberof brnn.FishVIPUserRewardDataList
         * @instance
         */
        FishVIPUserRewardDataList.prototype.SumAssignAmount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new FishVIPUserRewardDataList instance using the specified properties.
         * @function create
         * @memberof brnn.FishVIPUserRewardDataList
         * @static
         * @param {brnn.IFishVIPUserRewardDataList=} [properties] Properties to set
         * @returns {brnn.FishVIPUserRewardDataList} FishVIPUserRewardDataList instance
         */
        FishVIPUserRewardDataList.create = function create(properties) {
            return new FishVIPUserRewardDataList(properties);
        };

        /**
         * Encodes the specified FishVIPUserRewardDataList message. Does not implicitly {@link brnn.FishVIPUserRewardDataList.verify|verify} messages.
         * @function encode
         * @memberof brnn.FishVIPUserRewardDataList
         * @static
         * @param {brnn.IFishVIPUserRewardDataList} message FishVIPUserRewardDataList message or plain object to encode
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
         * Encodes the specified FishVIPUserRewardDataList message, length delimited. Does not implicitly {@link brnn.FishVIPUserRewardDataList.verify|verify} messages.
         * @function encodeDelimited
         * @memberof brnn.FishVIPUserRewardDataList
         * @static
         * @param {brnn.IFishVIPUserRewardDataList} message FishVIPUserRewardDataList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FishVIPUserRewardDataList.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FishVIPUserRewardDataList message from the specified reader or buffer.
         * @function decode
         * @memberof brnn.FishVIPUserRewardDataList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {brnn.FishVIPUserRewardDataList} FishVIPUserRewardDataList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FishVIPUserRewardDataList.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.brnn.FishVIPUserRewardDataList();
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
         * @memberof brnn.FishVIPUserRewardDataList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {brnn.FishVIPUserRewardDataList} FishVIPUserRewardDataList
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
         * @memberof brnn.FishVIPUserRewardDataList
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
         * @memberof brnn.FishVIPUserRewardDataList
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {brnn.FishVIPUserRewardDataList} FishVIPUserRewardDataList
         */
        FishVIPUserRewardDataList.fromObject = function fromObject(object) {
            if (object instanceof $root.brnn.FishVIPUserRewardDataList)
                return object;
            var message = new $root.brnn.FishVIPUserRewardDataList();
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
         * @memberof brnn.FishVIPUserRewardDataList
         * @static
         * @param {brnn.FishVIPUserRewardDataList} message FishVIPUserRewardDataList
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
         * @memberof brnn.FishVIPUserRewardDataList
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FishVIPUserRewardDataList.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return FishVIPUserRewardDataList;
    })();

    brnn.SuperToolFishUpdSystemRewardDetail = (function() {

        /**
         * Properties of a SuperToolFishUpdSystemRewardDetail.
         * @memberof brnn
         * @interface ISuperToolFishUpdSystemRewardDetail
         * @property {number} FlagID SuperToolFishUpdSystemRewardDetail FlagID
         * @property {Array.<brnn.ISuperToolFishUpdSystemRewardDataList>|null} [FishRewardList] SuperToolFishUpdSystemRewardDetail FishRewardList
         */

        /**
         * Constructs a new SuperToolFishUpdSystemRewardDetail.
         * @memberof brnn
         * @classdesc Represents a SuperToolFishUpdSystemRewardDetail.
         * @implements ISuperToolFishUpdSystemRewardDetail
         * @constructor
         * @param {brnn.ISuperToolFishUpdSystemRewardDetail=} [properties] Properties to set
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
         * @memberof brnn.SuperToolFishUpdSystemRewardDetail
         * @instance
         */
        SuperToolFishUpdSystemRewardDetail.prototype.FlagID = 0;

        /**
         * SuperToolFishUpdSystemRewardDetail FishRewardList.
         * @member {Array.<brnn.ISuperToolFishUpdSystemRewardDataList>} FishRewardList
         * @memberof brnn.SuperToolFishUpdSystemRewardDetail
         * @instance
         */
        SuperToolFishUpdSystemRewardDetail.prototype.FishRewardList = $util.emptyArray;

        /**
         * Creates a new SuperToolFishUpdSystemRewardDetail instance using the specified properties.
         * @function create
         * @memberof brnn.SuperToolFishUpdSystemRewardDetail
         * @static
         * @param {brnn.ISuperToolFishUpdSystemRewardDetail=} [properties] Properties to set
         * @returns {brnn.SuperToolFishUpdSystemRewardDetail} SuperToolFishUpdSystemRewardDetail instance
         */
        SuperToolFishUpdSystemRewardDetail.create = function create(properties) {
            return new SuperToolFishUpdSystemRewardDetail(properties);
        };

        /**
         * Encodes the specified SuperToolFishUpdSystemRewardDetail message. Does not implicitly {@link brnn.SuperToolFishUpdSystemRewardDetail.verify|verify} messages.
         * @function encode
         * @memberof brnn.SuperToolFishUpdSystemRewardDetail
         * @static
         * @param {brnn.ISuperToolFishUpdSystemRewardDetail} message SuperToolFishUpdSystemRewardDetail message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SuperToolFishUpdSystemRewardDetail.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.FlagID);
            if (message.FishRewardList != null && message.FishRewardList.length)
                for (var i = 0; i < message.FishRewardList.length; ++i)
                    $root.brnn.SuperToolFishUpdSystemRewardDataList.encode(message.FishRewardList[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified SuperToolFishUpdSystemRewardDetail message, length delimited. Does not implicitly {@link brnn.SuperToolFishUpdSystemRewardDetail.verify|verify} messages.
         * @function encodeDelimited
         * @memberof brnn.SuperToolFishUpdSystemRewardDetail
         * @static
         * @param {brnn.ISuperToolFishUpdSystemRewardDetail} message SuperToolFishUpdSystemRewardDetail message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SuperToolFishUpdSystemRewardDetail.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SuperToolFishUpdSystemRewardDetail message from the specified reader or buffer.
         * @function decode
         * @memberof brnn.SuperToolFishUpdSystemRewardDetail
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {brnn.SuperToolFishUpdSystemRewardDetail} SuperToolFishUpdSystemRewardDetail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SuperToolFishUpdSystemRewardDetail.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.brnn.SuperToolFishUpdSystemRewardDetail();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.FlagID = reader.int32();
                    break;
                case 2:
                    if (!(message.FishRewardList && message.FishRewardList.length))
                        message.FishRewardList = [];
                    message.FishRewardList.push($root.brnn.SuperToolFishUpdSystemRewardDataList.decode(reader, reader.uint32()));
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
         * @memberof brnn.SuperToolFishUpdSystemRewardDetail
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {brnn.SuperToolFishUpdSystemRewardDetail} SuperToolFishUpdSystemRewardDetail
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
         * @memberof brnn.SuperToolFishUpdSystemRewardDetail
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
                    var error = $root.brnn.SuperToolFishUpdSystemRewardDataList.verify(message.FishRewardList[i]);
                    if (error)
                        return "FishRewardList." + error;
                }
            }
            return null;
        };

        /**
         * Creates a SuperToolFishUpdSystemRewardDetail message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof brnn.SuperToolFishUpdSystemRewardDetail
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {brnn.SuperToolFishUpdSystemRewardDetail} SuperToolFishUpdSystemRewardDetail
         */
        SuperToolFishUpdSystemRewardDetail.fromObject = function fromObject(object) {
            if (object instanceof $root.brnn.SuperToolFishUpdSystemRewardDetail)
                return object;
            var message = new $root.brnn.SuperToolFishUpdSystemRewardDetail();
            if (object.FlagID != null)
                message.FlagID = object.FlagID | 0;
            if (object.FishRewardList) {
                if (!Array.isArray(object.FishRewardList))
                    throw TypeError(".brnn.SuperToolFishUpdSystemRewardDetail.FishRewardList: array expected");
                message.FishRewardList = [];
                for (var i = 0; i < object.FishRewardList.length; ++i) {
                    if (typeof object.FishRewardList[i] !== "object")
                        throw TypeError(".brnn.SuperToolFishUpdSystemRewardDetail.FishRewardList: object expected");
                    message.FishRewardList[i] = $root.brnn.SuperToolFishUpdSystemRewardDataList.fromObject(object.FishRewardList[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a SuperToolFishUpdSystemRewardDetail message. Also converts values to other types if specified.
         * @function toObject
         * @memberof brnn.SuperToolFishUpdSystemRewardDetail
         * @static
         * @param {brnn.SuperToolFishUpdSystemRewardDetail} message SuperToolFishUpdSystemRewardDetail
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
                    object.FishRewardList[j] = $root.brnn.SuperToolFishUpdSystemRewardDataList.toObject(message.FishRewardList[j], options);
            }
            return object;
        };

        /**
         * Converts this SuperToolFishUpdSystemRewardDetail to JSON.
         * @function toJSON
         * @memberof brnn.SuperToolFishUpdSystemRewardDetail
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SuperToolFishUpdSystemRewardDetail.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SuperToolFishUpdSystemRewardDetail;
    })();

    brnn.SuperToolFishUpdSystemRewardDataList = (function() {

        /**
         * Properties of a SuperToolFishUpdSystemRewardDataList.
         * @memberof brnn
         * @interface ISuperToolFishUpdSystemRewardDataList
         * @property {number} FishID SuperToolFishUpdSystemRewardDataList FishID
         * @property {number|Long} FinishAmount SuperToolFishUpdSystemRewardDataList FinishAmount
         */

        /**
         * Constructs a new SuperToolFishUpdSystemRewardDataList.
         * @memberof brnn
         * @classdesc Represents a SuperToolFishUpdSystemRewardDataList.
         * @implements ISuperToolFishUpdSystemRewardDataList
         * @constructor
         * @param {brnn.ISuperToolFishUpdSystemRewardDataList=} [properties] Properties to set
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
         * @memberof brnn.SuperToolFishUpdSystemRewardDataList
         * @instance
         */
        SuperToolFishUpdSystemRewardDataList.prototype.FishID = 0;

        /**
         * SuperToolFishUpdSystemRewardDataList FinishAmount.
         * @member {number|Long} FinishAmount
         * @memberof brnn.SuperToolFishUpdSystemRewardDataList
         * @instance
         */
        SuperToolFishUpdSystemRewardDataList.prototype.FinishAmount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new SuperToolFishUpdSystemRewardDataList instance using the specified properties.
         * @function create
         * @memberof brnn.SuperToolFishUpdSystemRewardDataList
         * @static
         * @param {brnn.ISuperToolFishUpdSystemRewardDataList=} [properties] Properties to set
         * @returns {brnn.SuperToolFishUpdSystemRewardDataList} SuperToolFishUpdSystemRewardDataList instance
         */
        SuperToolFishUpdSystemRewardDataList.create = function create(properties) {
            return new SuperToolFishUpdSystemRewardDataList(properties);
        };

        /**
         * Encodes the specified SuperToolFishUpdSystemRewardDataList message. Does not implicitly {@link brnn.SuperToolFishUpdSystemRewardDataList.verify|verify} messages.
         * @function encode
         * @memberof brnn.SuperToolFishUpdSystemRewardDataList
         * @static
         * @param {brnn.ISuperToolFishUpdSystemRewardDataList} message SuperToolFishUpdSystemRewardDataList message or plain object to encode
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
         * Encodes the specified SuperToolFishUpdSystemRewardDataList message, length delimited. Does not implicitly {@link brnn.SuperToolFishUpdSystemRewardDataList.verify|verify} messages.
         * @function encodeDelimited
         * @memberof brnn.SuperToolFishUpdSystemRewardDataList
         * @static
         * @param {brnn.ISuperToolFishUpdSystemRewardDataList} message SuperToolFishUpdSystemRewardDataList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SuperToolFishUpdSystemRewardDataList.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SuperToolFishUpdSystemRewardDataList message from the specified reader or buffer.
         * @function decode
         * @memberof brnn.SuperToolFishUpdSystemRewardDataList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {brnn.SuperToolFishUpdSystemRewardDataList} SuperToolFishUpdSystemRewardDataList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SuperToolFishUpdSystemRewardDataList.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.brnn.SuperToolFishUpdSystemRewardDataList();
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
         * @memberof brnn.SuperToolFishUpdSystemRewardDataList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {brnn.SuperToolFishUpdSystemRewardDataList} SuperToolFishUpdSystemRewardDataList
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
         * @memberof brnn.SuperToolFishUpdSystemRewardDataList
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
         * @memberof brnn.SuperToolFishUpdSystemRewardDataList
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {brnn.SuperToolFishUpdSystemRewardDataList} SuperToolFishUpdSystemRewardDataList
         */
        SuperToolFishUpdSystemRewardDataList.fromObject = function fromObject(object) {
            if (object instanceof $root.brnn.SuperToolFishUpdSystemRewardDataList)
                return object;
            var message = new $root.brnn.SuperToolFishUpdSystemRewardDataList();
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
         * @memberof brnn.SuperToolFishUpdSystemRewardDataList
         * @static
         * @param {brnn.SuperToolFishUpdSystemRewardDataList} message SuperToolFishUpdSystemRewardDataList
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
         * @memberof brnn.SuperToolFishUpdSystemRewardDataList
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SuperToolFishUpdSystemRewardDataList.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SuperToolFishUpdSystemRewardDataList;
    })();

    brnn.SuperToolfishUpdVIPUserRewardDetail = (function() {

        /**
         * Properties of a SuperToolfishUpdVIPUserRewardDetail.
         * @memberof brnn
         * @interface ISuperToolfishUpdVIPUserRewardDetail
         * @property {number} GameID SuperToolfishUpdVIPUserRewardDetail GameID
         * @property {Array.<brnn.ISuperToolFishUpdVIPUserRewardDataList>|null} [FishUserRewardList] SuperToolfishUpdVIPUserRewardDetail FishUserRewardList
         */

        /**
         * Constructs a new SuperToolfishUpdVIPUserRewardDetail.
         * @memberof brnn
         * @classdesc Represents a SuperToolfishUpdVIPUserRewardDetail.
         * @implements ISuperToolfishUpdVIPUserRewardDetail
         * @constructor
         * @param {brnn.ISuperToolfishUpdVIPUserRewardDetail=} [properties] Properties to set
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
         * @memberof brnn.SuperToolfishUpdVIPUserRewardDetail
         * @instance
         */
        SuperToolfishUpdVIPUserRewardDetail.prototype.GameID = 0;

        /**
         * SuperToolfishUpdVIPUserRewardDetail FishUserRewardList.
         * @member {Array.<brnn.ISuperToolFishUpdVIPUserRewardDataList>} FishUserRewardList
         * @memberof brnn.SuperToolfishUpdVIPUserRewardDetail
         * @instance
         */
        SuperToolfishUpdVIPUserRewardDetail.prototype.FishUserRewardList = $util.emptyArray;

        /**
         * Creates a new SuperToolfishUpdVIPUserRewardDetail instance using the specified properties.
         * @function create
         * @memberof brnn.SuperToolfishUpdVIPUserRewardDetail
         * @static
         * @param {brnn.ISuperToolfishUpdVIPUserRewardDetail=} [properties] Properties to set
         * @returns {brnn.SuperToolfishUpdVIPUserRewardDetail} SuperToolfishUpdVIPUserRewardDetail instance
         */
        SuperToolfishUpdVIPUserRewardDetail.create = function create(properties) {
            return new SuperToolfishUpdVIPUserRewardDetail(properties);
        };

        /**
         * Encodes the specified SuperToolfishUpdVIPUserRewardDetail message. Does not implicitly {@link brnn.SuperToolfishUpdVIPUserRewardDetail.verify|verify} messages.
         * @function encode
         * @memberof brnn.SuperToolfishUpdVIPUserRewardDetail
         * @static
         * @param {brnn.ISuperToolfishUpdVIPUserRewardDetail} message SuperToolfishUpdVIPUserRewardDetail message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SuperToolfishUpdVIPUserRewardDetail.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.GameID);
            if (message.FishUserRewardList != null && message.FishUserRewardList.length)
                for (var i = 0; i < message.FishUserRewardList.length; ++i)
                    $root.brnn.SuperToolFishUpdVIPUserRewardDataList.encode(message.FishUserRewardList[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified SuperToolfishUpdVIPUserRewardDetail message, length delimited. Does not implicitly {@link brnn.SuperToolfishUpdVIPUserRewardDetail.verify|verify} messages.
         * @function encodeDelimited
         * @memberof brnn.SuperToolfishUpdVIPUserRewardDetail
         * @static
         * @param {brnn.ISuperToolfishUpdVIPUserRewardDetail} message SuperToolfishUpdVIPUserRewardDetail message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SuperToolfishUpdVIPUserRewardDetail.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SuperToolfishUpdVIPUserRewardDetail message from the specified reader or buffer.
         * @function decode
         * @memberof brnn.SuperToolfishUpdVIPUserRewardDetail
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {brnn.SuperToolfishUpdVIPUserRewardDetail} SuperToolfishUpdVIPUserRewardDetail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SuperToolfishUpdVIPUserRewardDetail.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.brnn.SuperToolfishUpdVIPUserRewardDetail();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.GameID = reader.int32();
                    break;
                case 2:
                    if (!(message.FishUserRewardList && message.FishUserRewardList.length))
                        message.FishUserRewardList = [];
                    message.FishUserRewardList.push($root.brnn.SuperToolFishUpdVIPUserRewardDataList.decode(reader, reader.uint32()));
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
         * @memberof brnn.SuperToolfishUpdVIPUserRewardDetail
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {brnn.SuperToolfishUpdVIPUserRewardDetail} SuperToolfishUpdVIPUserRewardDetail
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
         * @memberof brnn.SuperToolfishUpdVIPUserRewardDetail
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
                    var error = $root.brnn.SuperToolFishUpdVIPUserRewardDataList.verify(message.FishUserRewardList[i]);
                    if (error)
                        return "FishUserRewardList." + error;
                }
            }
            return null;
        };

        /**
         * Creates a SuperToolfishUpdVIPUserRewardDetail message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof brnn.SuperToolfishUpdVIPUserRewardDetail
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {brnn.SuperToolfishUpdVIPUserRewardDetail} SuperToolfishUpdVIPUserRewardDetail
         */
        SuperToolfishUpdVIPUserRewardDetail.fromObject = function fromObject(object) {
            if (object instanceof $root.brnn.SuperToolfishUpdVIPUserRewardDetail)
                return object;
            var message = new $root.brnn.SuperToolfishUpdVIPUserRewardDetail();
            if (object.GameID != null)
                message.GameID = object.GameID | 0;
            if (object.FishUserRewardList) {
                if (!Array.isArray(object.FishUserRewardList))
                    throw TypeError(".brnn.SuperToolfishUpdVIPUserRewardDetail.FishUserRewardList: array expected");
                message.FishUserRewardList = [];
                for (var i = 0; i < object.FishUserRewardList.length; ++i) {
                    if (typeof object.FishUserRewardList[i] !== "object")
                        throw TypeError(".brnn.SuperToolfishUpdVIPUserRewardDetail.FishUserRewardList: object expected");
                    message.FishUserRewardList[i] = $root.brnn.SuperToolFishUpdVIPUserRewardDataList.fromObject(object.FishUserRewardList[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a SuperToolfishUpdVIPUserRewardDetail message. Also converts values to other types if specified.
         * @function toObject
         * @memberof brnn.SuperToolfishUpdVIPUserRewardDetail
         * @static
         * @param {brnn.SuperToolfishUpdVIPUserRewardDetail} message SuperToolfishUpdVIPUserRewardDetail
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
                    object.FishUserRewardList[j] = $root.brnn.SuperToolFishUpdVIPUserRewardDataList.toObject(message.FishUserRewardList[j], options);
            }
            return object;
        };

        /**
         * Converts this SuperToolfishUpdVIPUserRewardDetail to JSON.
         * @function toJSON
         * @memberof brnn.SuperToolfishUpdVIPUserRewardDetail
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SuperToolfishUpdVIPUserRewardDetail.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SuperToolfishUpdVIPUserRewardDetail;
    })();

    brnn.SuperToolFishUpdVIPUserRewardDataList = (function() {

        /**
         * Properties of a SuperToolFishUpdVIPUserRewardDataList.
         * @memberof brnn
         * @interface ISuperToolFishUpdVIPUserRewardDataList
         * @property {number} UserID SuperToolFishUpdVIPUserRewardDataList UserID
         * @property {number|Long} FinishAmount SuperToolFishUpdVIPUserRewardDataList FinishAmount
         */

        /**
         * Constructs a new SuperToolFishUpdVIPUserRewardDataList.
         * @memberof brnn
         * @classdesc Represents a SuperToolFishUpdVIPUserRewardDataList.
         * @implements ISuperToolFishUpdVIPUserRewardDataList
         * @constructor
         * @param {brnn.ISuperToolFishUpdVIPUserRewardDataList=} [properties] Properties to set
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
         * @memberof brnn.SuperToolFishUpdVIPUserRewardDataList
         * @instance
         */
        SuperToolFishUpdVIPUserRewardDataList.prototype.UserID = 0;

        /**
         * SuperToolFishUpdVIPUserRewardDataList FinishAmount.
         * @member {number|Long} FinishAmount
         * @memberof brnn.SuperToolFishUpdVIPUserRewardDataList
         * @instance
         */
        SuperToolFishUpdVIPUserRewardDataList.prototype.FinishAmount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new SuperToolFishUpdVIPUserRewardDataList instance using the specified properties.
         * @function create
         * @memberof brnn.SuperToolFishUpdVIPUserRewardDataList
         * @static
         * @param {brnn.ISuperToolFishUpdVIPUserRewardDataList=} [properties] Properties to set
         * @returns {brnn.SuperToolFishUpdVIPUserRewardDataList} SuperToolFishUpdVIPUserRewardDataList instance
         */
        SuperToolFishUpdVIPUserRewardDataList.create = function create(properties) {
            return new SuperToolFishUpdVIPUserRewardDataList(properties);
        };

        /**
         * Encodes the specified SuperToolFishUpdVIPUserRewardDataList message. Does not implicitly {@link brnn.SuperToolFishUpdVIPUserRewardDataList.verify|verify} messages.
         * @function encode
         * @memberof brnn.SuperToolFishUpdVIPUserRewardDataList
         * @static
         * @param {brnn.ISuperToolFishUpdVIPUserRewardDataList} message SuperToolFishUpdVIPUserRewardDataList message or plain object to encode
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
         * Encodes the specified SuperToolFishUpdVIPUserRewardDataList message, length delimited. Does not implicitly {@link brnn.SuperToolFishUpdVIPUserRewardDataList.verify|verify} messages.
         * @function encodeDelimited
         * @memberof brnn.SuperToolFishUpdVIPUserRewardDataList
         * @static
         * @param {brnn.ISuperToolFishUpdVIPUserRewardDataList} message SuperToolFishUpdVIPUserRewardDataList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SuperToolFishUpdVIPUserRewardDataList.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SuperToolFishUpdVIPUserRewardDataList message from the specified reader or buffer.
         * @function decode
         * @memberof brnn.SuperToolFishUpdVIPUserRewardDataList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {brnn.SuperToolFishUpdVIPUserRewardDataList} SuperToolFishUpdVIPUserRewardDataList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SuperToolFishUpdVIPUserRewardDataList.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.brnn.SuperToolFishUpdVIPUserRewardDataList();
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
         * @memberof brnn.SuperToolFishUpdVIPUserRewardDataList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {brnn.SuperToolFishUpdVIPUserRewardDataList} SuperToolFishUpdVIPUserRewardDataList
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
         * @memberof brnn.SuperToolFishUpdVIPUserRewardDataList
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
         * @memberof brnn.SuperToolFishUpdVIPUserRewardDataList
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {brnn.SuperToolFishUpdVIPUserRewardDataList} SuperToolFishUpdVIPUserRewardDataList
         */
        SuperToolFishUpdVIPUserRewardDataList.fromObject = function fromObject(object) {
            if (object instanceof $root.brnn.SuperToolFishUpdVIPUserRewardDataList)
                return object;
            var message = new $root.brnn.SuperToolFishUpdVIPUserRewardDataList();
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
         * @memberof brnn.SuperToolFishUpdVIPUserRewardDataList
         * @static
         * @param {brnn.SuperToolFishUpdVIPUserRewardDataList} message SuperToolFishUpdVIPUserRewardDataList
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
         * @memberof brnn.SuperToolFishUpdVIPUserRewardDataList
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SuperToolFishUpdVIPUserRewardDataList.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SuperToolFishUpdVIPUserRewardDataList;
    })();

    brnn.SuperToolZjhVipUserDataList = (function() {

        /**
         * Properties of a SuperToolZjhVipUserDataList.
         * @memberof brnn
         * @interface ISuperToolZjhVipUserDataList
         * @property {Array.<brnn.ISuperToolZjhVipUserData>|null} [DataList] SuperToolZjhVipUserDataList DataList
         */

        /**
         * Constructs a new SuperToolZjhVipUserDataList.
         * @memberof brnn
         * @classdesc Represents a SuperToolZjhVipUserDataList.
         * @implements ISuperToolZjhVipUserDataList
         * @constructor
         * @param {brnn.ISuperToolZjhVipUserDataList=} [properties] Properties to set
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
         * @member {Array.<brnn.ISuperToolZjhVipUserData>} DataList
         * @memberof brnn.SuperToolZjhVipUserDataList
         * @instance
         */
        SuperToolZjhVipUserDataList.prototype.DataList = $util.emptyArray;

        /**
         * Creates a new SuperToolZjhVipUserDataList instance using the specified properties.
         * @function create
         * @memberof brnn.SuperToolZjhVipUserDataList
         * @static
         * @param {brnn.ISuperToolZjhVipUserDataList=} [properties] Properties to set
         * @returns {brnn.SuperToolZjhVipUserDataList} SuperToolZjhVipUserDataList instance
         */
        SuperToolZjhVipUserDataList.create = function create(properties) {
            return new SuperToolZjhVipUserDataList(properties);
        };

        /**
         * Encodes the specified SuperToolZjhVipUserDataList message. Does not implicitly {@link brnn.SuperToolZjhVipUserDataList.verify|verify} messages.
         * @function encode
         * @memberof brnn.SuperToolZjhVipUserDataList
         * @static
         * @param {brnn.ISuperToolZjhVipUserDataList} message SuperToolZjhVipUserDataList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SuperToolZjhVipUserDataList.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.DataList != null && message.DataList.length)
                for (var i = 0; i < message.DataList.length; ++i)
                    $root.brnn.SuperToolZjhVipUserData.encode(message.DataList[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified SuperToolZjhVipUserDataList message, length delimited. Does not implicitly {@link brnn.SuperToolZjhVipUserDataList.verify|verify} messages.
         * @function encodeDelimited
         * @memberof brnn.SuperToolZjhVipUserDataList
         * @static
         * @param {brnn.ISuperToolZjhVipUserDataList} message SuperToolZjhVipUserDataList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SuperToolZjhVipUserDataList.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SuperToolZjhVipUserDataList message from the specified reader or buffer.
         * @function decode
         * @memberof brnn.SuperToolZjhVipUserDataList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {brnn.SuperToolZjhVipUserDataList} SuperToolZjhVipUserDataList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SuperToolZjhVipUserDataList.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.brnn.SuperToolZjhVipUserDataList();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.DataList && message.DataList.length))
                        message.DataList = [];
                    message.DataList.push($root.brnn.SuperToolZjhVipUserData.decode(reader, reader.uint32()));
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
         * @memberof brnn.SuperToolZjhVipUserDataList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {brnn.SuperToolZjhVipUserDataList} SuperToolZjhVipUserDataList
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
         * @memberof brnn.SuperToolZjhVipUserDataList
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
                    var error = $root.brnn.SuperToolZjhVipUserData.verify(message.DataList[i]);
                    if (error)
                        return "DataList." + error;
                }
            }
            return null;
        };

        /**
         * Creates a SuperToolZjhVipUserDataList message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof brnn.SuperToolZjhVipUserDataList
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {brnn.SuperToolZjhVipUserDataList} SuperToolZjhVipUserDataList
         */
        SuperToolZjhVipUserDataList.fromObject = function fromObject(object) {
            if (object instanceof $root.brnn.SuperToolZjhVipUserDataList)
                return object;
            var message = new $root.brnn.SuperToolZjhVipUserDataList();
            if (object.DataList) {
                if (!Array.isArray(object.DataList))
                    throw TypeError(".brnn.SuperToolZjhVipUserDataList.DataList: array expected");
                message.DataList = [];
                for (var i = 0; i < object.DataList.length; ++i) {
                    if (typeof object.DataList[i] !== "object")
                        throw TypeError(".brnn.SuperToolZjhVipUserDataList.DataList: object expected");
                    message.DataList[i] = $root.brnn.SuperToolZjhVipUserData.fromObject(object.DataList[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a SuperToolZjhVipUserDataList message. Also converts values to other types if specified.
         * @function toObject
         * @memberof brnn.SuperToolZjhVipUserDataList
         * @static
         * @param {brnn.SuperToolZjhVipUserDataList} message SuperToolZjhVipUserDataList
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
                    object.DataList[j] = $root.brnn.SuperToolZjhVipUserData.toObject(message.DataList[j], options);
            }
            return object;
        };

        /**
         * Converts this SuperToolZjhVipUserDataList to JSON.
         * @function toJSON
         * @memberof brnn.SuperToolZjhVipUserDataList
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SuperToolZjhVipUserDataList.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SuperToolZjhVipUserDataList;
    })();

    brnn.SuperToolZjhVipUserData = (function() {

        /**
         * Properties of a SuperToolZjhVipUserData.
         * @memberof brnn
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
         * @memberof brnn
         * @classdesc Represents a SuperToolZjhVipUserData.
         * @implements ISuperToolZjhVipUserData
         * @constructor
         * @param {brnn.ISuperToolZjhVipUserData=} [properties] Properties to set
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
         * @memberof brnn.SuperToolZjhVipUserData
         * @instance
         */
        SuperToolZjhVipUserData.prototype.UserID = 0;

        /**
         * SuperToolZjhVipUserData NextType.
         * @member {number|Long} NextType
         * @memberof brnn.SuperToolZjhVipUserData
         * @instance
         */
        SuperToolZjhVipUserData.prototype.NextType = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * SuperToolZjhVipUserData NextWinLose.
         * @member {number|Long} NextWinLose
         * @memberof brnn.SuperToolZjhVipUserData
         * @instance
         */
        SuperToolZjhVipUserData.prototype.NextWinLose = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * SuperToolZjhVipUserData NextWinLoseNum.
         * @member {number|Long} NextWinLoseNum
         * @memberof brnn.SuperToolZjhVipUserData
         * @instance
         */
        SuperToolZjhVipUserData.prototype.NextWinLoseNum = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * SuperToolZjhVipUserData Finish.
         * @member {number|Long} Finish
         * @memberof brnn.SuperToolZjhVipUserData
         * @instance
         */
        SuperToolZjhVipUserData.prototype.Finish = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * SuperToolZjhVipUserData FinishNextWinLoseNum.
         * @member {number|Long} FinishNextWinLoseNum
         * @memberof brnn.SuperToolZjhVipUserData
         * @instance
         */
        SuperToolZjhVipUserData.prototype.FinishNextWinLoseNum = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * SuperToolZjhVipUserData NextTable.
         * @member {number} NextTable
         * @memberof brnn.SuperToolZjhVipUserData
         * @instance
         */
        SuperToolZjhVipUserData.prototype.NextTable = 0;

        /**
         * SuperToolZjhVipUserData Status.
         * @member {number} Status
         * @memberof brnn.SuperToolZjhVipUserData
         * @instance
         */
        SuperToolZjhVipUserData.prototype.Status = 0;

        /**
         * SuperToolZjhVipUserData TodaySumcharge.
         * @member {number|Long} TodaySumcharge
         * @memberof brnn.SuperToolZjhVipUserData
         * @instance
         */
        SuperToolZjhVipUserData.prototype.TodaySumcharge = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * SuperToolZjhVipUserData TodaySumConvert.
         * @member {number|Long} TodaySumConvert
         * @memberof brnn.SuperToolZjhVipUserData
         * @instance
         */
        SuperToolZjhVipUserData.prototype.TodaySumConvert = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * SuperToolZjhVipUserData TodayUserWinLose.
         * @member {number|Long} TodayUserWinLose
         * @memberof brnn.SuperToolZjhVipUserData
         * @instance
         */
        SuperToolZjhVipUserData.prototype.TodayUserWinLose = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new SuperToolZjhVipUserData instance using the specified properties.
         * @function create
         * @memberof brnn.SuperToolZjhVipUserData
         * @static
         * @param {brnn.ISuperToolZjhVipUserData=} [properties] Properties to set
         * @returns {brnn.SuperToolZjhVipUserData} SuperToolZjhVipUserData instance
         */
        SuperToolZjhVipUserData.create = function create(properties) {
            return new SuperToolZjhVipUserData(properties);
        };

        /**
         * Encodes the specified SuperToolZjhVipUserData message. Does not implicitly {@link brnn.SuperToolZjhVipUserData.verify|verify} messages.
         * @function encode
         * @memberof brnn.SuperToolZjhVipUserData
         * @static
         * @param {brnn.ISuperToolZjhVipUserData} message SuperToolZjhVipUserData message or plain object to encode
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
         * Encodes the specified SuperToolZjhVipUserData message, length delimited. Does not implicitly {@link brnn.SuperToolZjhVipUserData.verify|verify} messages.
         * @function encodeDelimited
         * @memberof brnn.SuperToolZjhVipUserData
         * @static
         * @param {brnn.ISuperToolZjhVipUserData} message SuperToolZjhVipUserData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SuperToolZjhVipUserData.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SuperToolZjhVipUserData message from the specified reader or buffer.
         * @function decode
         * @memberof brnn.SuperToolZjhVipUserData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {brnn.SuperToolZjhVipUserData} SuperToolZjhVipUserData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SuperToolZjhVipUserData.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.brnn.SuperToolZjhVipUserData();
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
         * @memberof brnn.SuperToolZjhVipUserData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {brnn.SuperToolZjhVipUserData} SuperToolZjhVipUserData
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
         * @memberof brnn.SuperToolZjhVipUserData
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
         * @memberof brnn.SuperToolZjhVipUserData
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {brnn.SuperToolZjhVipUserData} SuperToolZjhVipUserData
         */
        SuperToolZjhVipUserData.fromObject = function fromObject(object) {
            if (object instanceof $root.brnn.SuperToolZjhVipUserData)
                return object;
            var message = new $root.brnn.SuperToolZjhVipUserData();
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
         * @memberof brnn.SuperToolZjhVipUserData
         * @static
         * @param {brnn.SuperToolZjhVipUserData} message SuperToolZjhVipUserData
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
         * @memberof brnn.SuperToolZjhVipUserData
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SuperToolZjhVipUserData.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SuperToolZjhVipUserData;
    })();

    brnn.SuperToolZjhUpdVipUserData = (function() {

        /**
         * Properties of a SuperToolZjhUpdVipUserData.
         * @memberof brnn
         * @interface ISuperToolZjhUpdVipUserData
         * @property {number} UserID SuperToolZjhUpdVipUserData UserID
         * @property {number|Long|null} [Finish] SuperToolZjhUpdVipUserData Finish
         * @property {number|Long|null} [FinishNextWinLoseNum] SuperToolZjhUpdVipUserData FinishNextWinLoseNum
         * @property {number|null} [NextTable] SuperToolZjhUpdVipUserData NextTable
         * @property {number|Long|null} [NextType] SuperToolZjhUpdVipUserData NextType
         */

        /**
         * Constructs a new SuperToolZjhUpdVipUserData.
         * @memberof brnn
         * @classdesc Represents a SuperToolZjhUpdVipUserData.
         * @implements ISuperToolZjhUpdVipUserData
         * @constructor
         * @param {brnn.ISuperToolZjhUpdVipUserData=} [properties] Properties to set
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
         * @memberof brnn.SuperToolZjhUpdVipUserData
         * @instance
         */
        SuperToolZjhUpdVipUserData.prototype.UserID = 0;

        /**
         * SuperToolZjhUpdVipUserData Finish.
         * @member {number|Long} Finish
         * @memberof brnn.SuperToolZjhUpdVipUserData
         * @instance
         */
        SuperToolZjhUpdVipUserData.prototype.Finish = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * SuperToolZjhUpdVipUserData FinishNextWinLoseNum.
         * @member {number|Long} FinishNextWinLoseNum
         * @memberof brnn.SuperToolZjhUpdVipUserData
         * @instance
         */
        SuperToolZjhUpdVipUserData.prototype.FinishNextWinLoseNum = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * SuperToolZjhUpdVipUserData NextTable.
         * @member {number} NextTable
         * @memberof brnn.SuperToolZjhUpdVipUserData
         * @instance
         */
        SuperToolZjhUpdVipUserData.prototype.NextTable = 0;

        /**
         * SuperToolZjhUpdVipUserData NextType.
         * @member {number|Long} NextType
         * @memberof brnn.SuperToolZjhUpdVipUserData
         * @instance
         */
        SuperToolZjhUpdVipUserData.prototype.NextType = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new SuperToolZjhUpdVipUserData instance using the specified properties.
         * @function create
         * @memberof brnn.SuperToolZjhUpdVipUserData
         * @static
         * @param {brnn.ISuperToolZjhUpdVipUserData=} [properties] Properties to set
         * @returns {brnn.SuperToolZjhUpdVipUserData} SuperToolZjhUpdVipUserData instance
         */
        SuperToolZjhUpdVipUserData.create = function create(properties) {
            return new SuperToolZjhUpdVipUserData(properties);
        };

        /**
         * Encodes the specified SuperToolZjhUpdVipUserData message. Does not implicitly {@link brnn.SuperToolZjhUpdVipUserData.verify|verify} messages.
         * @function encode
         * @memberof brnn.SuperToolZjhUpdVipUserData
         * @static
         * @param {brnn.ISuperToolZjhUpdVipUserData} message SuperToolZjhUpdVipUserData message or plain object to encode
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
         * Encodes the specified SuperToolZjhUpdVipUserData message, length delimited. Does not implicitly {@link brnn.SuperToolZjhUpdVipUserData.verify|verify} messages.
         * @function encodeDelimited
         * @memberof brnn.SuperToolZjhUpdVipUserData
         * @static
         * @param {brnn.ISuperToolZjhUpdVipUserData} message SuperToolZjhUpdVipUserData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SuperToolZjhUpdVipUserData.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SuperToolZjhUpdVipUserData message from the specified reader or buffer.
         * @function decode
         * @memberof brnn.SuperToolZjhUpdVipUserData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {brnn.SuperToolZjhUpdVipUserData} SuperToolZjhUpdVipUserData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SuperToolZjhUpdVipUserData.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.brnn.SuperToolZjhUpdVipUserData();
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
         * @memberof brnn.SuperToolZjhUpdVipUserData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {brnn.SuperToolZjhUpdVipUserData} SuperToolZjhUpdVipUserData
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
         * @memberof brnn.SuperToolZjhUpdVipUserData
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
         * @memberof brnn.SuperToolZjhUpdVipUserData
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {brnn.SuperToolZjhUpdVipUserData} SuperToolZjhUpdVipUserData
         */
        SuperToolZjhUpdVipUserData.fromObject = function fromObject(object) {
            if (object instanceof $root.brnn.SuperToolZjhUpdVipUserData)
                return object;
            var message = new $root.brnn.SuperToolZjhUpdVipUserData();
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
         * @memberof brnn.SuperToolZjhUpdVipUserData
         * @static
         * @param {brnn.SuperToolZjhUpdVipUserData} message SuperToolZjhUpdVipUserData
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
         * @memberof brnn.SuperToolZjhUpdVipUserData
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SuperToolZjhUpdVipUserData.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SuperToolZjhUpdVipUserData;
    })();

    brnn.FishSysPoolData = (function() {

        /**
         * Properties of a FishSysPoolData.
         * @memberof brnn
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
         * @memberof brnn
         * @classdesc Represents a FishSysPoolData.
         * @implements IFishSysPoolData
         * @constructor
         * @param {brnn.IFishSysPoolData=} [properties] Properties to set
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
         * @memberof brnn.FishSysPoolData
         * @instance
         */
        FishSysPoolData.prototype.FlagID = 0;

        /**
         * FishSysPoolData SumBetMoney.
         * @member {number|Long} SumBetMoney
         * @memberof brnn.FishSysPoolData
         * @instance
         */
        FishSysPoolData.prototype.SumBetMoney = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * FishSysPoolData SumBullet.
         * @member {number|Long} SumBullet
         * @memberof brnn.FishSysPoolData
         * @instance
         */
        FishSysPoolData.prototype.SumBullet = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * FishSysPoolData SysSumWinLoss.
         * @member {number|Long} SysSumWinLoss
         * @memberof brnn.FishSysPoolData
         * @instance
         */
        FishSysPoolData.prototype.SysSumWinLoss = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * FishSysPoolData AfterAdjustSyspoolWinLoss.
         * @member {number|Long} AfterAdjustSyspoolWinLoss
         * @memberof brnn.FishSysPoolData
         * @instance
         */
        FishSysPoolData.prototype.AfterAdjustSyspoolWinLoss = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * FishSysPoolData PoolAmount.
         * @member {number|Long} PoolAmount
         * @memberof brnn.FishSysPoolData
         * @instance
         */
        FishSysPoolData.prototype.PoolAmount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new FishSysPoolData instance using the specified properties.
         * @function create
         * @memberof brnn.FishSysPoolData
         * @static
         * @param {brnn.IFishSysPoolData=} [properties] Properties to set
         * @returns {brnn.FishSysPoolData} FishSysPoolData instance
         */
        FishSysPoolData.create = function create(properties) {
            return new FishSysPoolData(properties);
        };

        /**
         * Encodes the specified FishSysPoolData message. Does not implicitly {@link brnn.FishSysPoolData.verify|verify} messages.
         * @function encode
         * @memberof brnn.FishSysPoolData
         * @static
         * @param {brnn.IFishSysPoolData} message FishSysPoolData message or plain object to encode
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
         * Encodes the specified FishSysPoolData message, length delimited. Does not implicitly {@link brnn.FishSysPoolData.verify|verify} messages.
         * @function encodeDelimited
         * @memberof brnn.FishSysPoolData
         * @static
         * @param {brnn.IFishSysPoolData} message FishSysPoolData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FishSysPoolData.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FishSysPoolData message from the specified reader or buffer.
         * @function decode
         * @memberof brnn.FishSysPoolData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {brnn.FishSysPoolData} FishSysPoolData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FishSysPoolData.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.brnn.FishSysPoolData();
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
         * @memberof brnn.FishSysPoolData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {brnn.FishSysPoolData} FishSysPoolData
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
         * @memberof brnn.FishSysPoolData
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
         * @memberof brnn.FishSysPoolData
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {brnn.FishSysPoolData} FishSysPoolData
         */
        FishSysPoolData.fromObject = function fromObject(object) {
            if (object instanceof $root.brnn.FishSysPoolData)
                return object;
            var message = new $root.brnn.FishSysPoolData();
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
         * @memberof brnn.FishSysPoolData
         * @static
         * @param {brnn.FishSysPoolData} message FishSysPoolData
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
         * @memberof brnn.FishSysPoolData
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FishSysPoolData.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return FishSysPoolData;
    })();

    brnn.FishPlayerPoolDetail = (function() {

        /**
         * Properties of a FishPlayerPoolDetail.
         * @memberof brnn
         * @interface IFishPlayerPoolDetail
         * @property {number|null} [FlagID] FishPlayerPoolDetail FlagID
         * @property {Array.<brnn.IFishPlayerPoolDetailList>|null} [FishRewardList] FishPlayerPoolDetail FishRewardList
         */

        /**
         * Constructs a new FishPlayerPoolDetail.
         * @memberof brnn
         * @classdesc Represents a FishPlayerPoolDetail.
         * @implements IFishPlayerPoolDetail
         * @constructor
         * @param {brnn.IFishPlayerPoolDetail=} [properties] Properties to set
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
         * @memberof brnn.FishPlayerPoolDetail
         * @instance
         */
        FishPlayerPoolDetail.prototype.FlagID = 0;

        /**
         * FishPlayerPoolDetail FishRewardList.
         * @member {Array.<brnn.IFishPlayerPoolDetailList>} FishRewardList
         * @memberof brnn.FishPlayerPoolDetail
         * @instance
         */
        FishPlayerPoolDetail.prototype.FishRewardList = $util.emptyArray;

        /**
         * Creates a new FishPlayerPoolDetail instance using the specified properties.
         * @function create
         * @memberof brnn.FishPlayerPoolDetail
         * @static
         * @param {brnn.IFishPlayerPoolDetail=} [properties] Properties to set
         * @returns {brnn.FishPlayerPoolDetail} FishPlayerPoolDetail instance
         */
        FishPlayerPoolDetail.create = function create(properties) {
            return new FishPlayerPoolDetail(properties);
        };

        /**
         * Encodes the specified FishPlayerPoolDetail message. Does not implicitly {@link brnn.FishPlayerPoolDetail.verify|verify} messages.
         * @function encode
         * @memberof brnn.FishPlayerPoolDetail
         * @static
         * @param {brnn.IFishPlayerPoolDetail} message FishPlayerPoolDetail message or plain object to encode
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
                    $root.brnn.FishPlayerPoolDetailList.encode(message.FishRewardList[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified FishPlayerPoolDetail message, length delimited. Does not implicitly {@link brnn.FishPlayerPoolDetail.verify|verify} messages.
         * @function encodeDelimited
         * @memberof brnn.FishPlayerPoolDetail
         * @static
         * @param {brnn.IFishPlayerPoolDetail} message FishPlayerPoolDetail message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FishPlayerPoolDetail.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FishPlayerPoolDetail message from the specified reader or buffer.
         * @function decode
         * @memberof brnn.FishPlayerPoolDetail
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {brnn.FishPlayerPoolDetail} FishPlayerPoolDetail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FishPlayerPoolDetail.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.brnn.FishPlayerPoolDetail();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.FlagID = reader.int32();
                    break;
                case 2:
                    if (!(message.FishRewardList && message.FishRewardList.length))
                        message.FishRewardList = [];
                    message.FishRewardList.push($root.brnn.FishPlayerPoolDetailList.decode(reader, reader.uint32()));
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
         * @memberof brnn.FishPlayerPoolDetail
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {brnn.FishPlayerPoolDetail} FishPlayerPoolDetail
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
         * @memberof brnn.FishPlayerPoolDetail
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
                    var error = $root.brnn.FishPlayerPoolDetailList.verify(message.FishRewardList[i]);
                    if (error)
                        return "FishRewardList." + error;
                }
            }
            return null;
        };

        /**
         * Creates a FishPlayerPoolDetail message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof brnn.FishPlayerPoolDetail
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {brnn.FishPlayerPoolDetail} FishPlayerPoolDetail
         */
        FishPlayerPoolDetail.fromObject = function fromObject(object) {
            if (object instanceof $root.brnn.FishPlayerPoolDetail)
                return object;
            var message = new $root.brnn.FishPlayerPoolDetail();
            if (object.FlagID != null)
                message.FlagID = object.FlagID | 0;
            if (object.FishRewardList) {
                if (!Array.isArray(object.FishRewardList))
                    throw TypeError(".brnn.FishPlayerPoolDetail.FishRewardList: array expected");
                message.FishRewardList = [];
                for (var i = 0; i < object.FishRewardList.length; ++i) {
                    if (typeof object.FishRewardList[i] !== "object")
                        throw TypeError(".brnn.FishPlayerPoolDetail.FishRewardList: object expected");
                    message.FishRewardList[i] = $root.brnn.FishPlayerPoolDetailList.fromObject(object.FishRewardList[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a FishPlayerPoolDetail message. Also converts values to other types if specified.
         * @function toObject
         * @memberof brnn.FishPlayerPoolDetail
         * @static
         * @param {brnn.FishPlayerPoolDetail} message FishPlayerPoolDetail
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
                    object.FishRewardList[j] = $root.brnn.FishPlayerPoolDetailList.toObject(message.FishRewardList[j], options);
            }
            return object;
        };

        /**
         * Converts this FishPlayerPoolDetail to JSON.
         * @function toJSON
         * @memberof brnn.FishPlayerPoolDetail
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FishPlayerPoolDetail.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return FishPlayerPoolDetail;
    })();

    brnn.FishPlayerPoolDetailList = (function() {

        /**
         * Properties of a FishPlayerPoolDetailList.
         * @memberof brnn
         * @interface IFishPlayerPoolDetailList
         * @property {number} UserID FishPlayerPoolDetailList UserID
         * @property {number|Long} HitMoney FishPlayerPoolDetailList HitMoney
         * @property {number|Long} SpendMoney FishPlayerPoolDetailList SpendMoney
         */

        /**
         * Constructs a new FishPlayerPoolDetailList.
         * @memberof brnn
         * @classdesc Represents a FishPlayerPoolDetailList.
         * @implements IFishPlayerPoolDetailList
         * @constructor
         * @param {brnn.IFishPlayerPoolDetailList=} [properties] Properties to set
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
         * @memberof brnn.FishPlayerPoolDetailList
         * @instance
         */
        FishPlayerPoolDetailList.prototype.UserID = 0;

        /**
         * FishPlayerPoolDetailList HitMoney.
         * @member {number|Long} HitMoney
         * @memberof brnn.FishPlayerPoolDetailList
         * @instance
         */
        FishPlayerPoolDetailList.prototype.HitMoney = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * FishPlayerPoolDetailList SpendMoney.
         * @member {number|Long} SpendMoney
         * @memberof brnn.FishPlayerPoolDetailList
         * @instance
         */
        FishPlayerPoolDetailList.prototype.SpendMoney = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new FishPlayerPoolDetailList instance using the specified properties.
         * @function create
         * @memberof brnn.FishPlayerPoolDetailList
         * @static
         * @param {brnn.IFishPlayerPoolDetailList=} [properties] Properties to set
         * @returns {brnn.FishPlayerPoolDetailList} FishPlayerPoolDetailList instance
         */
        FishPlayerPoolDetailList.create = function create(properties) {
            return new FishPlayerPoolDetailList(properties);
        };

        /**
         * Encodes the specified FishPlayerPoolDetailList message. Does not implicitly {@link brnn.FishPlayerPoolDetailList.verify|verify} messages.
         * @function encode
         * @memberof brnn.FishPlayerPoolDetailList
         * @static
         * @param {brnn.IFishPlayerPoolDetailList} message FishPlayerPoolDetailList message or plain object to encode
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
         * Encodes the specified FishPlayerPoolDetailList message, length delimited. Does not implicitly {@link brnn.FishPlayerPoolDetailList.verify|verify} messages.
         * @function encodeDelimited
         * @memberof brnn.FishPlayerPoolDetailList
         * @static
         * @param {brnn.IFishPlayerPoolDetailList} message FishPlayerPoolDetailList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FishPlayerPoolDetailList.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FishPlayerPoolDetailList message from the specified reader or buffer.
         * @function decode
         * @memberof brnn.FishPlayerPoolDetailList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {brnn.FishPlayerPoolDetailList} FishPlayerPoolDetailList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FishPlayerPoolDetailList.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.brnn.FishPlayerPoolDetailList();
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
         * @memberof brnn.FishPlayerPoolDetailList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {brnn.FishPlayerPoolDetailList} FishPlayerPoolDetailList
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
         * @memberof brnn.FishPlayerPoolDetailList
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
         * @memberof brnn.FishPlayerPoolDetailList
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {brnn.FishPlayerPoolDetailList} FishPlayerPoolDetailList
         */
        FishPlayerPoolDetailList.fromObject = function fromObject(object) {
            if (object instanceof $root.brnn.FishPlayerPoolDetailList)
                return object;
            var message = new $root.brnn.FishPlayerPoolDetailList();
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
         * @memberof brnn.FishPlayerPoolDetailList
         * @static
         * @param {brnn.FishPlayerPoolDetailList} message FishPlayerPoolDetailList
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
         * @memberof brnn.FishPlayerPoolDetailList
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FishPlayerPoolDetailList.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return FishPlayerPoolDetailList;
    })();

    brnn.FindFishBeginnerOfferByUserID = (function() {

        /**
         * Properties of a FindFishBeginnerOfferByUserID.
         * @memberof brnn
         * @interface IFindFishBeginnerOfferByUserID
         * @property {number} UserID FindFishBeginnerOfferByUserID UserID
         * @property {number|null} [NewPlayerAdjustSyspool] FindFishBeginnerOfferByUserID NewPlayerAdjustSyspool
         */

        /**
         * Constructs a new FindFishBeginnerOfferByUserID.
         * @memberof brnn
         * @classdesc Represents a FindFishBeginnerOfferByUserID.
         * @implements IFindFishBeginnerOfferByUserID
         * @constructor
         * @param {brnn.IFindFishBeginnerOfferByUserID=} [properties] Properties to set
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
         * @memberof brnn.FindFishBeginnerOfferByUserID
         * @instance
         */
        FindFishBeginnerOfferByUserID.prototype.UserID = 0;

        /**
         * FindFishBeginnerOfferByUserID NewPlayerAdjustSyspool.
         * @member {number} NewPlayerAdjustSyspool
         * @memberof brnn.FindFishBeginnerOfferByUserID
         * @instance
         */
        FindFishBeginnerOfferByUserID.prototype.NewPlayerAdjustSyspool = 0;

        /**
         * Creates a new FindFishBeginnerOfferByUserID instance using the specified properties.
         * @function create
         * @memberof brnn.FindFishBeginnerOfferByUserID
         * @static
         * @param {brnn.IFindFishBeginnerOfferByUserID=} [properties] Properties to set
         * @returns {brnn.FindFishBeginnerOfferByUserID} FindFishBeginnerOfferByUserID instance
         */
        FindFishBeginnerOfferByUserID.create = function create(properties) {
            return new FindFishBeginnerOfferByUserID(properties);
        };

        /**
         * Encodes the specified FindFishBeginnerOfferByUserID message. Does not implicitly {@link brnn.FindFishBeginnerOfferByUserID.verify|verify} messages.
         * @function encode
         * @memberof brnn.FindFishBeginnerOfferByUserID
         * @static
         * @param {brnn.IFindFishBeginnerOfferByUserID} message FindFishBeginnerOfferByUserID message or plain object to encode
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
         * Encodes the specified FindFishBeginnerOfferByUserID message, length delimited. Does not implicitly {@link brnn.FindFishBeginnerOfferByUserID.verify|verify} messages.
         * @function encodeDelimited
         * @memberof brnn.FindFishBeginnerOfferByUserID
         * @static
         * @param {brnn.IFindFishBeginnerOfferByUserID} message FindFishBeginnerOfferByUserID message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FindFishBeginnerOfferByUserID.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FindFishBeginnerOfferByUserID message from the specified reader or buffer.
         * @function decode
         * @memberof brnn.FindFishBeginnerOfferByUserID
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {brnn.FindFishBeginnerOfferByUserID} FindFishBeginnerOfferByUserID
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FindFishBeginnerOfferByUserID.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.brnn.FindFishBeginnerOfferByUserID();
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
         * @memberof brnn.FindFishBeginnerOfferByUserID
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {brnn.FindFishBeginnerOfferByUserID} FindFishBeginnerOfferByUserID
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
         * @memberof brnn.FindFishBeginnerOfferByUserID
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
         * @memberof brnn.FindFishBeginnerOfferByUserID
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {brnn.FindFishBeginnerOfferByUserID} FindFishBeginnerOfferByUserID
         */
        FindFishBeginnerOfferByUserID.fromObject = function fromObject(object) {
            if (object instanceof $root.brnn.FindFishBeginnerOfferByUserID)
                return object;
            var message = new $root.brnn.FindFishBeginnerOfferByUserID();
            if (object.UserID != null)
                message.UserID = object.UserID | 0;
            if (object.NewPlayerAdjustSyspool != null)
                message.NewPlayerAdjustSyspool = object.NewPlayerAdjustSyspool | 0;
            return message;
        };

        /**
         * Creates a plain object from a FindFishBeginnerOfferByUserID message. Also converts values to other types if specified.
         * @function toObject
         * @memberof brnn.FindFishBeginnerOfferByUserID
         * @static
         * @param {brnn.FindFishBeginnerOfferByUserID} message FindFishBeginnerOfferByUserID
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
         * @memberof brnn.FindFishBeginnerOfferByUserID
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FindFishBeginnerOfferByUserID.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return FindFishBeginnerOfferByUserID;
    })();

    brnn.FishBeginnerOfferDetail = (function() {

        /**
         * Properties of a FishBeginnerOfferDetail.
         * @memberof brnn
         * @interface IFishBeginnerOfferDetail
         * @property {Array.<brnn.IFishBeginnerOffer>|null} [NewPlayerList] FishBeginnerOfferDetail NewPlayerList
         * @property {number|null} [NewPlayerAdjustSyspool] FishBeginnerOfferDetail NewPlayerAdjustSyspool
         */

        /**
         * Constructs a new FishBeginnerOfferDetail.
         * @memberof brnn
         * @classdesc Represents a FishBeginnerOfferDetail.
         * @implements IFishBeginnerOfferDetail
         * @constructor
         * @param {brnn.IFishBeginnerOfferDetail=} [properties] Properties to set
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
         * @member {Array.<brnn.IFishBeginnerOffer>} NewPlayerList
         * @memberof brnn.FishBeginnerOfferDetail
         * @instance
         */
        FishBeginnerOfferDetail.prototype.NewPlayerList = $util.emptyArray;

        /**
         * FishBeginnerOfferDetail NewPlayerAdjustSyspool.
         * @member {number} NewPlayerAdjustSyspool
         * @memberof brnn.FishBeginnerOfferDetail
         * @instance
         */
        FishBeginnerOfferDetail.prototype.NewPlayerAdjustSyspool = 0;

        /**
         * Creates a new FishBeginnerOfferDetail instance using the specified properties.
         * @function create
         * @memberof brnn.FishBeginnerOfferDetail
         * @static
         * @param {brnn.IFishBeginnerOfferDetail=} [properties] Properties to set
         * @returns {brnn.FishBeginnerOfferDetail} FishBeginnerOfferDetail instance
         */
        FishBeginnerOfferDetail.create = function create(properties) {
            return new FishBeginnerOfferDetail(properties);
        };

        /**
         * Encodes the specified FishBeginnerOfferDetail message. Does not implicitly {@link brnn.FishBeginnerOfferDetail.verify|verify} messages.
         * @function encode
         * @memberof brnn.FishBeginnerOfferDetail
         * @static
         * @param {brnn.IFishBeginnerOfferDetail} message FishBeginnerOfferDetail message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FishBeginnerOfferDetail.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.NewPlayerList != null && message.NewPlayerList.length)
                for (var i = 0; i < message.NewPlayerList.length; ++i)
                    $root.brnn.FishBeginnerOffer.encode(message.NewPlayerList[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.NewPlayerAdjustSyspool != null && message.hasOwnProperty("NewPlayerAdjustSyspool"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.NewPlayerAdjustSyspool);
            return writer;
        };

        /**
         * Encodes the specified FishBeginnerOfferDetail message, length delimited. Does not implicitly {@link brnn.FishBeginnerOfferDetail.verify|verify} messages.
         * @function encodeDelimited
         * @memberof brnn.FishBeginnerOfferDetail
         * @static
         * @param {brnn.IFishBeginnerOfferDetail} message FishBeginnerOfferDetail message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FishBeginnerOfferDetail.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FishBeginnerOfferDetail message from the specified reader or buffer.
         * @function decode
         * @memberof brnn.FishBeginnerOfferDetail
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {brnn.FishBeginnerOfferDetail} FishBeginnerOfferDetail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FishBeginnerOfferDetail.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.brnn.FishBeginnerOfferDetail();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.NewPlayerList && message.NewPlayerList.length))
                        message.NewPlayerList = [];
                    message.NewPlayerList.push($root.brnn.FishBeginnerOffer.decode(reader, reader.uint32()));
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
         * @memberof brnn.FishBeginnerOfferDetail
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {brnn.FishBeginnerOfferDetail} FishBeginnerOfferDetail
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
         * @memberof brnn.FishBeginnerOfferDetail
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
                    var error = $root.brnn.FishBeginnerOffer.verify(message.NewPlayerList[i]);
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
         * @memberof brnn.FishBeginnerOfferDetail
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {brnn.FishBeginnerOfferDetail} FishBeginnerOfferDetail
         */
        FishBeginnerOfferDetail.fromObject = function fromObject(object) {
            if (object instanceof $root.brnn.FishBeginnerOfferDetail)
                return object;
            var message = new $root.brnn.FishBeginnerOfferDetail();
            if (object.NewPlayerList) {
                if (!Array.isArray(object.NewPlayerList))
                    throw TypeError(".brnn.FishBeginnerOfferDetail.NewPlayerList: array expected");
                message.NewPlayerList = [];
                for (var i = 0; i < object.NewPlayerList.length; ++i) {
                    if (typeof object.NewPlayerList[i] !== "object")
                        throw TypeError(".brnn.FishBeginnerOfferDetail.NewPlayerList: object expected");
                    message.NewPlayerList[i] = $root.brnn.FishBeginnerOffer.fromObject(object.NewPlayerList[i]);
                }
            }
            if (object.NewPlayerAdjustSyspool != null)
                message.NewPlayerAdjustSyspool = object.NewPlayerAdjustSyspool | 0;
            return message;
        };

        /**
         * Creates a plain object from a FishBeginnerOfferDetail message. Also converts values to other types if specified.
         * @function toObject
         * @memberof brnn.FishBeginnerOfferDetail
         * @static
         * @param {brnn.FishBeginnerOfferDetail} message FishBeginnerOfferDetail
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
                    object.NewPlayerList[j] = $root.brnn.FishBeginnerOffer.toObject(message.NewPlayerList[j], options);
            }
            if (message.NewPlayerAdjustSyspool != null && message.hasOwnProperty("NewPlayerAdjustSyspool"))
                object.NewPlayerAdjustSyspool = message.NewPlayerAdjustSyspool;
            return object;
        };

        /**
         * Converts this FishBeginnerOfferDetail to JSON.
         * @function toJSON
         * @memberof brnn.FishBeginnerOfferDetail
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FishBeginnerOfferDetail.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return FishBeginnerOfferDetail;
    })();

    brnn.FishBeginnerOffer = (function() {

        /**
         * Properties of a FishBeginnerOffer.
         * @memberof brnn
         * @interface IFishBeginnerOffer
         * @property {number} UserID FishBeginnerOffer UserID
         * @property {number} Bullet FishBeginnerOffer Bullet
         * @property {number} Score FishBeginnerOffer Score
         * @property {number} Status FishBeginnerOffer Status
         */

        /**
         * Constructs a new FishBeginnerOffer.
         * @memberof brnn
         * @classdesc Represents a FishBeginnerOffer.
         * @implements IFishBeginnerOffer
         * @constructor
         * @param {brnn.IFishBeginnerOffer=} [properties] Properties to set
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
         * @memberof brnn.FishBeginnerOffer
         * @instance
         */
        FishBeginnerOffer.prototype.UserID = 0;

        /**
         * FishBeginnerOffer Bullet.
         * @member {number} Bullet
         * @memberof brnn.FishBeginnerOffer
         * @instance
         */
        FishBeginnerOffer.prototype.Bullet = 0;

        /**
         * FishBeginnerOffer Score.
         * @member {number} Score
         * @memberof brnn.FishBeginnerOffer
         * @instance
         */
        FishBeginnerOffer.prototype.Score = 0;

        /**
         * FishBeginnerOffer Status.
         * @member {number} Status
         * @memberof brnn.FishBeginnerOffer
         * @instance
         */
        FishBeginnerOffer.prototype.Status = 0;

        /**
         * Creates a new FishBeginnerOffer instance using the specified properties.
         * @function create
         * @memberof brnn.FishBeginnerOffer
         * @static
         * @param {brnn.IFishBeginnerOffer=} [properties] Properties to set
         * @returns {brnn.FishBeginnerOffer} FishBeginnerOffer instance
         */
        FishBeginnerOffer.create = function create(properties) {
            return new FishBeginnerOffer(properties);
        };

        /**
         * Encodes the specified FishBeginnerOffer message. Does not implicitly {@link brnn.FishBeginnerOffer.verify|verify} messages.
         * @function encode
         * @memberof brnn.FishBeginnerOffer
         * @static
         * @param {brnn.IFishBeginnerOffer} message FishBeginnerOffer message or plain object to encode
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
         * Encodes the specified FishBeginnerOffer message, length delimited. Does not implicitly {@link brnn.FishBeginnerOffer.verify|verify} messages.
         * @function encodeDelimited
         * @memberof brnn.FishBeginnerOffer
         * @static
         * @param {brnn.IFishBeginnerOffer} message FishBeginnerOffer message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FishBeginnerOffer.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FishBeginnerOffer message from the specified reader or buffer.
         * @function decode
         * @memberof brnn.FishBeginnerOffer
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {brnn.FishBeginnerOffer} FishBeginnerOffer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FishBeginnerOffer.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.brnn.FishBeginnerOffer();
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
         * @memberof brnn.FishBeginnerOffer
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {brnn.FishBeginnerOffer} FishBeginnerOffer
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
         * @memberof brnn.FishBeginnerOffer
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
         * @memberof brnn.FishBeginnerOffer
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {brnn.FishBeginnerOffer} FishBeginnerOffer
         */
        FishBeginnerOffer.fromObject = function fromObject(object) {
            if (object instanceof $root.brnn.FishBeginnerOffer)
                return object;
            var message = new $root.brnn.FishBeginnerOffer();
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
         * @memberof brnn.FishBeginnerOffer
         * @static
         * @param {brnn.FishBeginnerOffer} message FishBeginnerOffer
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
         * @memberof brnn.FishBeginnerOffer
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FishBeginnerOffer.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return FishBeginnerOffer;
    })();

    brnn.Cd21SysPoolData = (function() {

        /**
         * Properties of a Cd21SysPoolData.
         * @memberof brnn
         * @interface ICd21SysPoolData
         * @property {number} FlagID Cd21SysPoolData FlagID
         * @property {number|Long} SumBetMoney Cd21SysPoolData SumBetMoney
         * @property {number|Long} SumBetCount Cd21SysPoolData SumBetCount
         * @property {number|Long} PoolAmount Cd21SysPoolData PoolAmount
         */

        /**
         * Constructs a new Cd21SysPoolData.
         * @memberof brnn
         * @classdesc Represents a Cd21SysPoolData.
         * @implements ICd21SysPoolData
         * @constructor
         * @param {brnn.ICd21SysPoolData=} [properties] Properties to set
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
         * @memberof brnn.Cd21SysPoolData
         * @instance
         */
        Cd21SysPoolData.prototype.FlagID = 0;

        /**
         * Cd21SysPoolData SumBetMoney.
         * @member {number|Long} SumBetMoney
         * @memberof brnn.Cd21SysPoolData
         * @instance
         */
        Cd21SysPoolData.prototype.SumBetMoney = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Cd21SysPoolData SumBetCount.
         * @member {number|Long} SumBetCount
         * @memberof brnn.Cd21SysPoolData
         * @instance
         */
        Cd21SysPoolData.prototype.SumBetCount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Cd21SysPoolData PoolAmount.
         * @member {number|Long} PoolAmount
         * @memberof brnn.Cd21SysPoolData
         * @instance
         */
        Cd21SysPoolData.prototype.PoolAmount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new Cd21SysPoolData instance using the specified properties.
         * @function create
         * @memberof brnn.Cd21SysPoolData
         * @static
         * @param {brnn.ICd21SysPoolData=} [properties] Properties to set
         * @returns {brnn.Cd21SysPoolData} Cd21SysPoolData instance
         */
        Cd21SysPoolData.create = function create(properties) {
            return new Cd21SysPoolData(properties);
        };

        /**
         * Encodes the specified Cd21SysPoolData message. Does not implicitly {@link brnn.Cd21SysPoolData.verify|verify} messages.
         * @function encode
         * @memberof brnn.Cd21SysPoolData
         * @static
         * @param {brnn.ICd21SysPoolData} message Cd21SysPoolData message or plain object to encode
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
         * Encodes the specified Cd21SysPoolData message, length delimited. Does not implicitly {@link brnn.Cd21SysPoolData.verify|verify} messages.
         * @function encodeDelimited
         * @memberof brnn.Cd21SysPoolData
         * @static
         * @param {brnn.ICd21SysPoolData} message Cd21SysPoolData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Cd21SysPoolData.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Cd21SysPoolData message from the specified reader or buffer.
         * @function decode
         * @memberof brnn.Cd21SysPoolData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {brnn.Cd21SysPoolData} Cd21SysPoolData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Cd21SysPoolData.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.brnn.Cd21SysPoolData();
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
         * @memberof brnn.Cd21SysPoolData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {brnn.Cd21SysPoolData} Cd21SysPoolData
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
         * @memberof brnn.Cd21SysPoolData
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
         * @memberof brnn.Cd21SysPoolData
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {brnn.Cd21SysPoolData} Cd21SysPoolData
         */
        Cd21SysPoolData.fromObject = function fromObject(object) {
            if (object instanceof $root.brnn.Cd21SysPoolData)
                return object;
            var message = new $root.brnn.Cd21SysPoolData();
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
         * @memberof brnn.Cd21SysPoolData
         * @static
         * @param {brnn.Cd21SysPoolData} message Cd21SysPoolData
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
         * @memberof brnn.Cd21SysPoolData
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Cd21SysPoolData.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Cd21SysPoolData;
    })();

    brnn.UserJackpotToBox = (function() {

        /**
         * Properties of a UserJackpotToBox.
         * @memberof brnn
         * @interface IUserJackpotToBox
         * @property {number} UserID UserJackpotToBox UserID
         * @property {number|Long} UpdateAmount UserJackpotToBox UpdateAmount
         */

        /**
         * Constructs a new UserJackpotToBox.
         * @memberof brnn
         * @classdesc Represents a UserJackpotToBox.
         * @implements IUserJackpotToBox
         * @constructor
         * @param {brnn.IUserJackpotToBox=} [properties] Properties to set
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
         * @memberof brnn.UserJackpotToBox
         * @instance
         */
        UserJackpotToBox.prototype.UserID = 0;

        /**
         * UserJackpotToBox UpdateAmount.
         * @member {number|Long} UpdateAmount
         * @memberof brnn.UserJackpotToBox
         * @instance
         */
        UserJackpotToBox.prototype.UpdateAmount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new UserJackpotToBox instance using the specified properties.
         * @function create
         * @memberof brnn.UserJackpotToBox
         * @static
         * @param {brnn.IUserJackpotToBox=} [properties] Properties to set
         * @returns {brnn.UserJackpotToBox} UserJackpotToBox instance
         */
        UserJackpotToBox.create = function create(properties) {
            return new UserJackpotToBox(properties);
        };

        /**
         * Encodes the specified UserJackpotToBox message. Does not implicitly {@link brnn.UserJackpotToBox.verify|verify} messages.
         * @function encode
         * @memberof brnn.UserJackpotToBox
         * @static
         * @param {brnn.IUserJackpotToBox} message UserJackpotToBox message or plain object to encode
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
         * Encodes the specified UserJackpotToBox message, length delimited. Does not implicitly {@link brnn.UserJackpotToBox.verify|verify} messages.
         * @function encodeDelimited
         * @memberof brnn.UserJackpotToBox
         * @static
         * @param {brnn.IUserJackpotToBox} message UserJackpotToBox message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserJackpotToBox.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UserJackpotToBox message from the specified reader or buffer.
         * @function decode
         * @memberof brnn.UserJackpotToBox
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {brnn.UserJackpotToBox} UserJackpotToBox
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserJackpotToBox.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.brnn.UserJackpotToBox();
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
         * @memberof brnn.UserJackpotToBox
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {brnn.UserJackpotToBox} UserJackpotToBox
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
         * @memberof brnn.UserJackpotToBox
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
         * @memberof brnn.UserJackpotToBox
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {brnn.UserJackpotToBox} UserJackpotToBox
         */
        UserJackpotToBox.fromObject = function fromObject(object) {
            if (object instanceof $root.brnn.UserJackpotToBox)
                return object;
            var message = new $root.brnn.UserJackpotToBox();
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
         * @memberof brnn.UserJackpotToBox
         * @static
         * @param {brnn.UserJackpotToBox} message UserJackpotToBox
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
         * @memberof brnn.UserJackpotToBox
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserJackpotToBox.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UserJackpotToBox;
    })();

    brnn.JackpotData = (function() {

        /**
         * Properties of a JackpotData.
         * @memberof brnn
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
         * @memberof brnn
         * @classdesc Represents a JackpotData.
         * @implements IJackpotData
         * @constructor
         * @param {brnn.IJackpotData=} [properties] Properties to set
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
         * @memberof brnn.JackpotData
         * @instance
         */
        JackpotData.prototype.GameID = 0;

        /**
         * JackpotData FlagID.
         * @member {number} FlagID
         * @memberof brnn.JackpotData
         * @instance
         */
        JackpotData.prototype.FlagID = 0;

        /**
         * JackpotData TableNo.
         * @member {number} TableNo
         * @memberof brnn.JackpotData
         * @instance
         */
        JackpotData.prototype.TableNo = 0;

        /**
         * JackpotData Contribution.
         * @member {number|Long} Contribution
         * @memberof brnn.JackpotData
         * @instance
         */
        JackpotData.prototype.Contribution = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * JackpotData TotalContribution.
         * @member {number|Long} TotalContribution
         * @memberof brnn.JackpotData
         * @instance
         */
        JackpotData.prototype.TotalContribution = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * JackpotData AwardTotal.
         * @member {number|Long} AwardTotal
         * @memberof brnn.JackpotData
         * @instance
         */
        JackpotData.prototype.AwardTotal = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * JackpotData Level.
         * @member {number} Level
         * @memberof brnn.JackpotData
         * @instance
         */
        JackpotData.prototype.Level = 0;

        /**
         * JackpotData JackpotPool.
         * @member {number|Long} JackpotPool
         * @memberof brnn.JackpotData
         * @instance
         */
        JackpotData.prototype.JackpotPool = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new JackpotData instance using the specified properties.
         * @function create
         * @memberof brnn.JackpotData
         * @static
         * @param {brnn.IJackpotData=} [properties] Properties to set
         * @returns {brnn.JackpotData} JackpotData instance
         */
        JackpotData.create = function create(properties) {
            return new JackpotData(properties);
        };

        /**
         * Encodes the specified JackpotData message. Does not implicitly {@link brnn.JackpotData.verify|verify} messages.
         * @function encode
         * @memberof brnn.JackpotData
         * @static
         * @param {brnn.IJackpotData} message JackpotData message or plain object to encode
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
         * Encodes the specified JackpotData message, length delimited. Does not implicitly {@link brnn.JackpotData.verify|verify} messages.
         * @function encodeDelimited
         * @memberof brnn.JackpotData
         * @static
         * @param {brnn.IJackpotData} message JackpotData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JackpotData.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a JackpotData message from the specified reader or buffer.
         * @function decode
         * @memberof brnn.JackpotData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {brnn.JackpotData} JackpotData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JackpotData.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.brnn.JackpotData();
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
         * @memberof brnn.JackpotData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {brnn.JackpotData} JackpotData
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
         * @memberof brnn.JackpotData
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
         * @memberof brnn.JackpotData
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {brnn.JackpotData} JackpotData
         */
        JackpotData.fromObject = function fromObject(object) {
            if (object instanceof $root.brnn.JackpotData)
                return object;
            var message = new $root.brnn.JackpotData();
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
         * @memberof brnn.JackpotData
         * @static
         * @param {brnn.JackpotData} message JackpotData
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
         * @memberof brnn.JackpotData
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        JackpotData.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return JackpotData;
    })();

    brnn.JackpotAllData = (function() {

        /**
         * Properties of a JackpotAllData.
         * @memberof brnn
         * @interface IJackpotAllData
         * @property {Array.<brnn.IJackpotData>|null} [AllData] JackpotAllData AllData
         */

        /**
         * Constructs a new JackpotAllData.
         * @memberof brnn
         * @classdesc Represents a JackpotAllData.
         * @implements IJackpotAllData
         * @constructor
         * @param {brnn.IJackpotAllData=} [properties] Properties to set
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
         * @member {Array.<brnn.IJackpotData>} AllData
         * @memberof brnn.JackpotAllData
         * @instance
         */
        JackpotAllData.prototype.AllData = $util.emptyArray;

        /**
         * Creates a new JackpotAllData instance using the specified properties.
         * @function create
         * @memberof brnn.JackpotAllData
         * @static
         * @param {brnn.IJackpotAllData=} [properties] Properties to set
         * @returns {brnn.JackpotAllData} JackpotAllData instance
         */
        JackpotAllData.create = function create(properties) {
            return new JackpotAllData(properties);
        };

        /**
         * Encodes the specified JackpotAllData message. Does not implicitly {@link brnn.JackpotAllData.verify|verify} messages.
         * @function encode
         * @memberof brnn.JackpotAllData
         * @static
         * @param {brnn.IJackpotAllData} message JackpotAllData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JackpotAllData.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.AllData != null && message.AllData.length)
                for (var i = 0; i < message.AllData.length; ++i)
                    $root.brnn.JackpotData.encode(message.AllData[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified JackpotAllData message, length delimited. Does not implicitly {@link brnn.JackpotAllData.verify|verify} messages.
         * @function encodeDelimited
         * @memberof brnn.JackpotAllData
         * @static
         * @param {brnn.IJackpotAllData} message JackpotAllData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JackpotAllData.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a JackpotAllData message from the specified reader or buffer.
         * @function decode
         * @memberof brnn.JackpotAllData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {brnn.JackpotAllData} JackpotAllData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JackpotAllData.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.brnn.JackpotAllData();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.AllData && message.AllData.length))
                        message.AllData = [];
                    message.AllData.push($root.brnn.JackpotData.decode(reader, reader.uint32()));
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
         * @memberof brnn.JackpotAllData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {brnn.JackpotAllData} JackpotAllData
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
         * @memberof brnn.JackpotAllData
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
                    var error = $root.brnn.JackpotData.verify(message.AllData[i]);
                    if (error)
                        return "AllData." + error;
                }
            }
            return null;
        };

        /**
         * Creates a JackpotAllData message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof brnn.JackpotAllData
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {brnn.JackpotAllData} JackpotAllData
         */
        JackpotAllData.fromObject = function fromObject(object) {
            if (object instanceof $root.brnn.JackpotAllData)
                return object;
            var message = new $root.brnn.JackpotAllData();
            if (object.AllData) {
                if (!Array.isArray(object.AllData))
                    throw TypeError(".brnn.JackpotAllData.AllData: array expected");
                message.AllData = [];
                for (var i = 0; i < object.AllData.length; ++i) {
                    if (typeof object.AllData[i] !== "object")
                        throw TypeError(".brnn.JackpotAllData.AllData: object expected");
                    message.AllData[i] = $root.brnn.JackpotData.fromObject(object.AllData[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a JackpotAllData message. Also converts values to other types if specified.
         * @function toObject
         * @memberof brnn.JackpotAllData
         * @static
         * @param {brnn.JackpotAllData} message JackpotAllData
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
                    object.AllData[j] = $root.brnn.JackpotData.toObject(message.AllData[j], options);
            }
            return object;
        };

        /**
         * Converts this JackpotAllData to JSON.
         * @function toJSON
         * @memberof brnn.JackpotAllData
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        JackpotAllData.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return JackpotAllData;
    })();

    brnn.SuperTool_Msg_GetSysPoolWinLose = (function() {

        /**
         * Properties of a SuperTool_Msg_GetSysPoolWinLose.
         * @memberof brnn
         * @interface ISuperTool_Msg_GetSysPoolWinLose
         * @property {number} GameID SuperTool_Msg_GetSysPoolWinLose GameID
         * @property {number} FlagID SuperTool_Msg_GetSysPoolWinLose FlagID
         */

        /**
         * Constructs a new SuperTool_Msg_GetSysPoolWinLose.
         * @memberof brnn
         * @classdesc Represents a SuperTool_Msg_GetSysPoolWinLose.
         * @implements ISuperTool_Msg_GetSysPoolWinLose
         * @constructor
         * @param {brnn.ISuperTool_Msg_GetSysPoolWinLose=} [properties] Properties to set
         */
        function SuperTool_Msg_GetSysPoolWinLose(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SuperTool_Msg_GetSysPoolWinLose GameID.
         * @member {number} GameID
         * @memberof brnn.SuperTool_Msg_GetSysPoolWinLose
         * @instance
         */
        SuperTool_Msg_GetSysPoolWinLose.prototype.GameID = 0;

        /**
         * SuperTool_Msg_GetSysPoolWinLose FlagID.
         * @member {number} FlagID
         * @memberof brnn.SuperTool_Msg_GetSysPoolWinLose
         * @instance
         */
        SuperTool_Msg_GetSysPoolWinLose.prototype.FlagID = 0;

        /**
         * Creates a new SuperTool_Msg_GetSysPoolWinLose instance using the specified properties.
         * @function create
         * @memberof brnn.SuperTool_Msg_GetSysPoolWinLose
         * @static
         * @param {brnn.ISuperTool_Msg_GetSysPoolWinLose=} [properties] Properties to set
         * @returns {brnn.SuperTool_Msg_GetSysPoolWinLose} SuperTool_Msg_GetSysPoolWinLose instance
         */
        SuperTool_Msg_GetSysPoolWinLose.create = function create(properties) {
            return new SuperTool_Msg_GetSysPoolWinLose(properties);
        };

        /**
         * Encodes the specified SuperTool_Msg_GetSysPoolWinLose message. Does not implicitly {@link brnn.SuperTool_Msg_GetSysPoolWinLose.verify|verify} messages.
         * @function encode
         * @memberof brnn.SuperTool_Msg_GetSysPoolWinLose
         * @static
         * @param {brnn.ISuperTool_Msg_GetSysPoolWinLose} message SuperTool_Msg_GetSysPoolWinLose message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SuperTool_Msg_GetSysPoolWinLose.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.GameID);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.FlagID);
            return writer;
        };

        /**
         * Encodes the specified SuperTool_Msg_GetSysPoolWinLose message, length delimited. Does not implicitly {@link brnn.SuperTool_Msg_GetSysPoolWinLose.verify|verify} messages.
         * @function encodeDelimited
         * @memberof brnn.SuperTool_Msg_GetSysPoolWinLose
         * @static
         * @param {brnn.ISuperTool_Msg_GetSysPoolWinLose} message SuperTool_Msg_GetSysPoolWinLose message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SuperTool_Msg_GetSysPoolWinLose.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SuperTool_Msg_GetSysPoolWinLose message from the specified reader or buffer.
         * @function decode
         * @memberof brnn.SuperTool_Msg_GetSysPoolWinLose
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {brnn.SuperTool_Msg_GetSysPoolWinLose} SuperTool_Msg_GetSysPoolWinLose
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SuperTool_Msg_GetSysPoolWinLose.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.brnn.SuperTool_Msg_GetSysPoolWinLose();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.GameID = reader.int32();
                    break;
                case 2:
                    message.FlagID = reader.int32();
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
            return message;
        };

        /**
         * Decodes a SuperTool_Msg_GetSysPoolWinLose message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof brnn.SuperTool_Msg_GetSysPoolWinLose
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {brnn.SuperTool_Msg_GetSysPoolWinLose} SuperTool_Msg_GetSysPoolWinLose
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SuperTool_Msg_GetSysPoolWinLose.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SuperTool_Msg_GetSysPoolWinLose message.
         * @function verify
         * @memberof brnn.SuperTool_Msg_GetSysPoolWinLose
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SuperTool_Msg_GetSysPoolWinLose.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.GameID))
                return "GameID: integer expected";
            if (!$util.isInteger(message.FlagID))
                return "FlagID: integer expected";
            return null;
        };

        /**
         * Creates a SuperTool_Msg_GetSysPoolWinLose message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof brnn.SuperTool_Msg_GetSysPoolWinLose
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {brnn.SuperTool_Msg_GetSysPoolWinLose} SuperTool_Msg_GetSysPoolWinLose
         */
        SuperTool_Msg_GetSysPoolWinLose.fromObject = function fromObject(object) {
            if (object instanceof $root.brnn.SuperTool_Msg_GetSysPoolWinLose)
                return object;
            var message = new $root.brnn.SuperTool_Msg_GetSysPoolWinLose();
            if (object.GameID != null)
                message.GameID = object.GameID | 0;
            if (object.FlagID != null)
                message.FlagID = object.FlagID | 0;
            return message;
        };

        /**
         * Creates a plain object from a SuperTool_Msg_GetSysPoolWinLose message. Also converts values to other types if specified.
         * @function toObject
         * @memberof brnn.SuperTool_Msg_GetSysPoolWinLose
         * @static
         * @param {brnn.SuperTool_Msg_GetSysPoolWinLose} message SuperTool_Msg_GetSysPoolWinLose
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SuperTool_Msg_GetSysPoolWinLose.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.GameID = 0;
                object.FlagID = 0;
            }
            if (message.GameID != null && message.hasOwnProperty("GameID"))
                object.GameID = message.GameID;
            if (message.FlagID != null && message.hasOwnProperty("FlagID"))
                object.FlagID = message.FlagID;
            return object;
        };

        /**
         * Converts this SuperTool_Msg_GetSysPoolWinLose to JSON.
         * @function toJSON
         * @memberof brnn.SuperTool_Msg_GetSysPoolWinLose
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SuperTool_Msg_GetSysPoolWinLose.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SuperTool_Msg_GetSysPoolWinLose;
    })();

    brnn.SuperTool_Msg_GetSysPoolWinLoseRet = (function() {

        /**
         * Properties of a SuperTool_Msg_GetSysPoolWinLoseRet.
         * @memberof brnn
         * @interface ISuperTool_Msg_GetSysPoolWinLoseRet
         * @property {number} GameID SuperTool_Msg_GetSysPoolWinLoseRet GameID
         * @property {number} FlagID SuperTool_Msg_GetSysPoolWinLoseRet FlagID
         * @property {number|Long} PoolAmount SuperTool_Msg_GetSysPoolWinLoseRet PoolAmount
         * @property {number|Long} WinLine SuperTool_Msg_GetSysPoolWinLoseRet WinLine
         * @property {string} WinLoseData SuperTool_Msg_GetSysPoolWinLoseRet WinLoseData
         */

        /**
         * Constructs a new SuperTool_Msg_GetSysPoolWinLoseRet.
         * @memberof brnn
         * @classdesc Represents a SuperTool_Msg_GetSysPoolWinLoseRet.
         * @implements ISuperTool_Msg_GetSysPoolWinLoseRet
         * @constructor
         * @param {brnn.ISuperTool_Msg_GetSysPoolWinLoseRet=} [properties] Properties to set
         */
        function SuperTool_Msg_GetSysPoolWinLoseRet(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SuperTool_Msg_GetSysPoolWinLoseRet GameID.
         * @member {number} GameID
         * @memberof brnn.SuperTool_Msg_GetSysPoolWinLoseRet
         * @instance
         */
        SuperTool_Msg_GetSysPoolWinLoseRet.prototype.GameID = 0;

        /**
         * SuperTool_Msg_GetSysPoolWinLoseRet FlagID.
         * @member {number} FlagID
         * @memberof brnn.SuperTool_Msg_GetSysPoolWinLoseRet
         * @instance
         */
        SuperTool_Msg_GetSysPoolWinLoseRet.prototype.FlagID = 0;

        /**
         * SuperTool_Msg_GetSysPoolWinLoseRet PoolAmount.
         * @member {number|Long} PoolAmount
         * @memberof brnn.SuperTool_Msg_GetSysPoolWinLoseRet
         * @instance
         */
        SuperTool_Msg_GetSysPoolWinLoseRet.prototype.PoolAmount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * SuperTool_Msg_GetSysPoolWinLoseRet WinLine.
         * @member {number|Long} WinLine
         * @memberof brnn.SuperTool_Msg_GetSysPoolWinLoseRet
         * @instance
         */
        SuperTool_Msg_GetSysPoolWinLoseRet.prototype.WinLine = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * SuperTool_Msg_GetSysPoolWinLoseRet WinLoseData.
         * @member {string} WinLoseData
         * @memberof brnn.SuperTool_Msg_GetSysPoolWinLoseRet
         * @instance
         */
        SuperTool_Msg_GetSysPoolWinLoseRet.prototype.WinLoseData = "";

        /**
         * Creates a new SuperTool_Msg_GetSysPoolWinLoseRet instance using the specified properties.
         * @function create
         * @memberof brnn.SuperTool_Msg_GetSysPoolWinLoseRet
         * @static
         * @param {brnn.ISuperTool_Msg_GetSysPoolWinLoseRet=} [properties] Properties to set
         * @returns {brnn.SuperTool_Msg_GetSysPoolWinLoseRet} SuperTool_Msg_GetSysPoolWinLoseRet instance
         */
        SuperTool_Msg_GetSysPoolWinLoseRet.create = function create(properties) {
            return new SuperTool_Msg_GetSysPoolWinLoseRet(properties);
        };

        /**
         * Encodes the specified SuperTool_Msg_GetSysPoolWinLoseRet message. Does not implicitly {@link brnn.SuperTool_Msg_GetSysPoolWinLoseRet.verify|verify} messages.
         * @function encode
         * @memberof brnn.SuperTool_Msg_GetSysPoolWinLoseRet
         * @static
         * @param {brnn.ISuperTool_Msg_GetSysPoolWinLoseRet} message SuperTool_Msg_GetSysPoolWinLoseRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SuperTool_Msg_GetSysPoolWinLoseRet.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.GameID);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.FlagID);
            writer.uint32(/* id 3, wireType 0 =*/24).int64(message.PoolAmount);
            writer.uint32(/* id 4, wireType 0 =*/32).int64(message.WinLine);
            writer.uint32(/* id 5, wireType 2 =*/42).string(message.WinLoseData);
            return writer;
        };

        /**
         * Encodes the specified SuperTool_Msg_GetSysPoolWinLoseRet message, length delimited. Does not implicitly {@link brnn.SuperTool_Msg_GetSysPoolWinLoseRet.verify|verify} messages.
         * @function encodeDelimited
         * @memberof brnn.SuperTool_Msg_GetSysPoolWinLoseRet
         * @static
         * @param {brnn.ISuperTool_Msg_GetSysPoolWinLoseRet} message SuperTool_Msg_GetSysPoolWinLoseRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SuperTool_Msg_GetSysPoolWinLoseRet.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SuperTool_Msg_GetSysPoolWinLoseRet message from the specified reader or buffer.
         * @function decode
         * @memberof brnn.SuperTool_Msg_GetSysPoolWinLoseRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {brnn.SuperTool_Msg_GetSysPoolWinLoseRet} SuperTool_Msg_GetSysPoolWinLoseRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SuperTool_Msg_GetSysPoolWinLoseRet.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.brnn.SuperTool_Msg_GetSysPoolWinLoseRet();
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
                    message.PoolAmount = reader.int64();
                    break;
                case 4:
                    message.WinLine = reader.int64();
                    break;
                case 5:
                    message.WinLoseData = reader.string();
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
            if (!message.hasOwnProperty("PoolAmount"))
                throw $util.ProtocolError("missing required 'PoolAmount'", { instance: message });
            if (!message.hasOwnProperty("WinLine"))
                throw $util.ProtocolError("missing required 'WinLine'", { instance: message });
            if (!message.hasOwnProperty("WinLoseData"))
                throw $util.ProtocolError("missing required 'WinLoseData'", { instance: message });
            return message;
        };

        /**
         * Decodes a SuperTool_Msg_GetSysPoolWinLoseRet message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof brnn.SuperTool_Msg_GetSysPoolWinLoseRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {brnn.SuperTool_Msg_GetSysPoolWinLoseRet} SuperTool_Msg_GetSysPoolWinLoseRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SuperTool_Msg_GetSysPoolWinLoseRet.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SuperTool_Msg_GetSysPoolWinLoseRet message.
         * @function verify
         * @memberof brnn.SuperTool_Msg_GetSysPoolWinLoseRet
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SuperTool_Msg_GetSysPoolWinLoseRet.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.GameID))
                return "GameID: integer expected";
            if (!$util.isInteger(message.FlagID))
                return "FlagID: integer expected";
            if (!$util.isInteger(message.PoolAmount) && !(message.PoolAmount && $util.isInteger(message.PoolAmount.low) && $util.isInteger(message.PoolAmount.high)))
                return "PoolAmount: integer|Long expected";
            if (!$util.isInteger(message.WinLine) && !(message.WinLine && $util.isInteger(message.WinLine.low) && $util.isInteger(message.WinLine.high)))
                return "WinLine: integer|Long expected";
            if (!$util.isString(message.WinLoseData))
                return "WinLoseData: string expected";
            return null;
        };

        /**
         * Creates a SuperTool_Msg_GetSysPoolWinLoseRet message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof brnn.SuperTool_Msg_GetSysPoolWinLoseRet
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {brnn.SuperTool_Msg_GetSysPoolWinLoseRet} SuperTool_Msg_GetSysPoolWinLoseRet
         */
        SuperTool_Msg_GetSysPoolWinLoseRet.fromObject = function fromObject(object) {
            if (object instanceof $root.brnn.SuperTool_Msg_GetSysPoolWinLoseRet)
                return object;
            var message = new $root.brnn.SuperTool_Msg_GetSysPoolWinLoseRet();
            if (object.GameID != null)
                message.GameID = object.GameID | 0;
            if (object.FlagID != null)
                message.FlagID = object.FlagID | 0;
            if (object.PoolAmount != null)
                if ($util.Long)
                    (message.PoolAmount = $util.Long.fromValue(object.PoolAmount)).unsigned = false;
                else if (typeof object.PoolAmount === "string")
                    message.PoolAmount = parseInt(object.PoolAmount, 10);
                else if (typeof object.PoolAmount === "number")
                    message.PoolAmount = object.PoolAmount;
                else if (typeof object.PoolAmount === "object")
                    message.PoolAmount = new $util.LongBits(object.PoolAmount.low >>> 0, object.PoolAmount.high >>> 0).toNumber();
            if (object.WinLine != null)
                if ($util.Long)
                    (message.WinLine = $util.Long.fromValue(object.WinLine)).unsigned = false;
                else if (typeof object.WinLine === "string")
                    message.WinLine = parseInt(object.WinLine, 10);
                else if (typeof object.WinLine === "number")
                    message.WinLine = object.WinLine;
                else if (typeof object.WinLine === "object")
                    message.WinLine = new $util.LongBits(object.WinLine.low >>> 0, object.WinLine.high >>> 0).toNumber();
            if (object.WinLoseData != null)
                message.WinLoseData = String(object.WinLoseData);
            return message;
        };

        /**
         * Creates a plain object from a SuperTool_Msg_GetSysPoolWinLoseRet message. Also converts values to other types if specified.
         * @function toObject
         * @memberof brnn.SuperTool_Msg_GetSysPoolWinLoseRet
         * @static
         * @param {brnn.SuperTool_Msg_GetSysPoolWinLoseRet} message SuperTool_Msg_GetSysPoolWinLoseRet
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SuperTool_Msg_GetSysPoolWinLoseRet.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.GameID = 0;
                object.FlagID = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.PoolAmount = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.PoolAmount = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.WinLine = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.WinLine = options.longs === String ? "0" : 0;
                object.WinLoseData = "";
            }
            if (message.GameID != null && message.hasOwnProperty("GameID"))
                object.GameID = message.GameID;
            if (message.FlagID != null && message.hasOwnProperty("FlagID"))
                object.FlagID = message.FlagID;
            if (message.PoolAmount != null && message.hasOwnProperty("PoolAmount"))
                if (typeof message.PoolAmount === "number")
                    object.PoolAmount = options.longs === String ? String(message.PoolAmount) : message.PoolAmount;
                else
                    object.PoolAmount = options.longs === String ? $util.Long.prototype.toString.call(message.PoolAmount) : options.longs === Number ? new $util.LongBits(message.PoolAmount.low >>> 0, message.PoolAmount.high >>> 0).toNumber() : message.PoolAmount;
            if (message.WinLine != null && message.hasOwnProperty("WinLine"))
                if (typeof message.WinLine === "number")
                    object.WinLine = options.longs === String ? String(message.WinLine) : message.WinLine;
                else
                    object.WinLine = options.longs === String ? $util.Long.prototype.toString.call(message.WinLine) : options.longs === Number ? new $util.LongBits(message.WinLine.low >>> 0, message.WinLine.high >>> 0).toNumber() : message.WinLine;
            if (message.WinLoseData != null && message.hasOwnProperty("WinLoseData"))
                object.WinLoseData = message.WinLoseData;
            return object;
        };

        /**
         * Converts this SuperTool_Msg_GetSysPoolWinLoseRet to JSON.
         * @function toJSON
         * @memberof brnn.SuperTool_Msg_GetSysPoolWinLoseRet
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SuperTool_Msg_GetSysPoolWinLoseRet.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SuperTool_Msg_GetSysPoolWinLoseRet;
    })();

    brnn.SuperTool_Msg_UpdateSysPoolWinLose = (function() {

        /**
         * Properties of a SuperTool_Msg_UpdateSysPoolWinLose.
         * @memberof brnn
         * @interface ISuperTool_Msg_UpdateSysPoolWinLose
         * @property {number} GameID SuperTool_Msg_UpdateSysPoolWinLose GameID
         * @property {number} FlagID SuperTool_Msg_UpdateSysPoolWinLose FlagID
         * @property {number|Long} PoolAmount SuperTool_Msg_UpdateSysPoolWinLose PoolAmount
         * @property {number|Long} WinLine SuperTool_Msg_UpdateSysPoolWinLose WinLine
         * @property {string} WinLoseData SuperTool_Msg_UpdateSysPoolWinLose WinLoseData
         */

        /**
         * Constructs a new SuperTool_Msg_UpdateSysPoolWinLose.
         * @memberof brnn
         * @classdesc Represents a SuperTool_Msg_UpdateSysPoolWinLose.
         * @implements ISuperTool_Msg_UpdateSysPoolWinLose
         * @constructor
         * @param {brnn.ISuperTool_Msg_UpdateSysPoolWinLose=} [properties] Properties to set
         */
        function SuperTool_Msg_UpdateSysPoolWinLose(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SuperTool_Msg_UpdateSysPoolWinLose GameID.
         * @member {number} GameID
         * @memberof brnn.SuperTool_Msg_UpdateSysPoolWinLose
         * @instance
         */
        SuperTool_Msg_UpdateSysPoolWinLose.prototype.GameID = 0;

        /**
         * SuperTool_Msg_UpdateSysPoolWinLose FlagID.
         * @member {number} FlagID
         * @memberof brnn.SuperTool_Msg_UpdateSysPoolWinLose
         * @instance
         */
        SuperTool_Msg_UpdateSysPoolWinLose.prototype.FlagID = 0;

        /**
         * SuperTool_Msg_UpdateSysPoolWinLose PoolAmount.
         * @member {number|Long} PoolAmount
         * @memberof brnn.SuperTool_Msg_UpdateSysPoolWinLose
         * @instance
         */
        SuperTool_Msg_UpdateSysPoolWinLose.prototype.PoolAmount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * SuperTool_Msg_UpdateSysPoolWinLose WinLine.
         * @member {number|Long} WinLine
         * @memberof brnn.SuperTool_Msg_UpdateSysPoolWinLose
         * @instance
         */
        SuperTool_Msg_UpdateSysPoolWinLose.prototype.WinLine = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * SuperTool_Msg_UpdateSysPoolWinLose WinLoseData.
         * @member {string} WinLoseData
         * @memberof brnn.SuperTool_Msg_UpdateSysPoolWinLose
         * @instance
         */
        SuperTool_Msg_UpdateSysPoolWinLose.prototype.WinLoseData = "";

        /**
         * Creates a new SuperTool_Msg_UpdateSysPoolWinLose instance using the specified properties.
         * @function create
         * @memberof brnn.SuperTool_Msg_UpdateSysPoolWinLose
         * @static
         * @param {brnn.ISuperTool_Msg_UpdateSysPoolWinLose=} [properties] Properties to set
         * @returns {brnn.SuperTool_Msg_UpdateSysPoolWinLose} SuperTool_Msg_UpdateSysPoolWinLose instance
         */
        SuperTool_Msg_UpdateSysPoolWinLose.create = function create(properties) {
            return new SuperTool_Msg_UpdateSysPoolWinLose(properties);
        };

        /**
         * Encodes the specified SuperTool_Msg_UpdateSysPoolWinLose message. Does not implicitly {@link brnn.SuperTool_Msg_UpdateSysPoolWinLose.verify|verify} messages.
         * @function encode
         * @memberof brnn.SuperTool_Msg_UpdateSysPoolWinLose
         * @static
         * @param {brnn.ISuperTool_Msg_UpdateSysPoolWinLose} message SuperTool_Msg_UpdateSysPoolWinLose message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SuperTool_Msg_UpdateSysPoolWinLose.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.GameID);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.FlagID);
            writer.uint32(/* id 3, wireType 0 =*/24).int64(message.PoolAmount);
            writer.uint32(/* id 4, wireType 0 =*/32).int64(message.WinLine);
            writer.uint32(/* id 5, wireType 2 =*/42).string(message.WinLoseData);
            return writer;
        };

        /**
         * Encodes the specified SuperTool_Msg_UpdateSysPoolWinLose message, length delimited. Does not implicitly {@link brnn.SuperTool_Msg_UpdateSysPoolWinLose.verify|verify} messages.
         * @function encodeDelimited
         * @memberof brnn.SuperTool_Msg_UpdateSysPoolWinLose
         * @static
         * @param {brnn.ISuperTool_Msg_UpdateSysPoolWinLose} message SuperTool_Msg_UpdateSysPoolWinLose message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SuperTool_Msg_UpdateSysPoolWinLose.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SuperTool_Msg_UpdateSysPoolWinLose message from the specified reader or buffer.
         * @function decode
         * @memberof brnn.SuperTool_Msg_UpdateSysPoolWinLose
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {brnn.SuperTool_Msg_UpdateSysPoolWinLose} SuperTool_Msg_UpdateSysPoolWinLose
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SuperTool_Msg_UpdateSysPoolWinLose.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.brnn.SuperTool_Msg_UpdateSysPoolWinLose();
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
                    message.PoolAmount = reader.int64();
                    break;
                case 4:
                    message.WinLine = reader.int64();
                    break;
                case 5:
                    message.WinLoseData = reader.string();
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
            if (!message.hasOwnProperty("PoolAmount"))
                throw $util.ProtocolError("missing required 'PoolAmount'", { instance: message });
            if (!message.hasOwnProperty("WinLine"))
                throw $util.ProtocolError("missing required 'WinLine'", { instance: message });
            if (!message.hasOwnProperty("WinLoseData"))
                throw $util.ProtocolError("missing required 'WinLoseData'", { instance: message });
            return message;
        };

        /**
         * Decodes a SuperTool_Msg_UpdateSysPoolWinLose message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof brnn.SuperTool_Msg_UpdateSysPoolWinLose
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {brnn.SuperTool_Msg_UpdateSysPoolWinLose} SuperTool_Msg_UpdateSysPoolWinLose
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SuperTool_Msg_UpdateSysPoolWinLose.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SuperTool_Msg_UpdateSysPoolWinLose message.
         * @function verify
         * @memberof brnn.SuperTool_Msg_UpdateSysPoolWinLose
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SuperTool_Msg_UpdateSysPoolWinLose.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.GameID))
                return "GameID: integer expected";
            if (!$util.isInteger(message.FlagID))
                return "FlagID: integer expected";
            if (!$util.isInteger(message.PoolAmount) && !(message.PoolAmount && $util.isInteger(message.PoolAmount.low) && $util.isInteger(message.PoolAmount.high)))
                return "PoolAmount: integer|Long expected";
            if (!$util.isInteger(message.WinLine) && !(message.WinLine && $util.isInteger(message.WinLine.low) && $util.isInteger(message.WinLine.high)))
                return "WinLine: integer|Long expected";
            if (!$util.isString(message.WinLoseData))
                return "WinLoseData: string expected";
            return null;
        };

        /**
         * Creates a SuperTool_Msg_UpdateSysPoolWinLose message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof brnn.SuperTool_Msg_UpdateSysPoolWinLose
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {brnn.SuperTool_Msg_UpdateSysPoolWinLose} SuperTool_Msg_UpdateSysPoolWinLose
         */
        SuperTool_Msg_UpdateSysPoolWinLose.fromObject = function fromObject(object) {
            if (object instanceof $root.brnn.SuperTool_Msg_UpdateSysPoolWinLose)
                return object;
            var message = new $root.brnn.SuperTool_Msg_UpdateSysPoolWinLose();
            if (object.GameID != null)
                message.GameID = object.GameID | 0;
            if (object.FlagID != null)
                message.FlagID = object.FlagID | 0;
            if (object.PoolAmount != null)
                if ($util.Long)
                    (message.PoolAmount = $util.Long.fromValue(object.PoolAmount)).unsigned = false;
                else if (typeof object.PoolAmount === "string")
                    message.PoolAmount = parseInt(object.PoolAmount, 10);
                else if (typeof object.PoolAmount === "number")
                    message.PoolAmount = object.PoolAmount;
                else if (typeof object.PoolAmount === "object")
                    message.PoolAmount = new $util.LongBits(object.PoolAmount.low >>> 0, object.PoolAmount.high >>> 0).toNumber();
            if (object.WinLine != null)
                if ($util.Long)
                    (message.WinLine = $util.Long.fromValue(object.WinLine)).unsigned = false;
                else if (typeof object.WinLine === "string")
                    message.WinLine = parseInt(object.WinLine, 10);
                else if (typeof object.WinLine === "number")
                    message.WinLine = object.WinLine;
                else if (typeof object.WinLine === "object")
                    message.WinLine = new $util.LongBits(object.WinLine.low >>> 0, object.WinLine.high >>> 0).toNumber();
            if (object.WinLoseData != null)
                message.WinLoseData = String(object.WinLoseData);
            return message;
        };

        /**
         * Creates a plain object from a SuperTool_Msg_UpdateSysPoolWinLose message. Also converts values to other types if specified.
         * @function toObject
         * @memberof brnn.SuperTool_Msg_UpdateSysPoolWinLose
         * @static
         * @param {brnn.SuperTool_Msg_UpdateSysPoolWinLose} message SuperTool_Msg_UpdateSysPoolWinLose
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SuperTool_Msg_UpdateSysPoolWinLose.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.GameID = 0;
                object.FlagID = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.PoolAmount = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.PoolAmount = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.WinLine = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.WinLine = options.longs === String ? "0" : 0;
                object.WinLoseData = "";
            }
            if (message.GameID != null && message.hasOwnProperty("GameID"))
                object.GameID = message.GameID;
            if (message.FlagID != null && message.hasOwnProperty("FlagID"))
                object.FlagID = message.FlagID;
            if (message.PoolAmount != null && message.hasOwnProperty("PoolAmount"))
                if (typeof message.PoolAmount === "number")
                    object.PoolAmount = options.longs === String ? String(message.PoolAmount) : message.PoolAmount;
                else
                    object.PoolAmount = options.longs === String ? $util.Long.prototype.toString.call(message.PoolAmount) : options.longs === Number ? new $util.LongBits(message.PoolAmount.low >>> 0, message.PoolAmount.high >>> 0).toNumber() : message.PoolAmount;
            if (message.WinLine != null && message.hasOwnProperty("WinLine"))
                if (typeof message.WinLine === "number")
                    object.WinLine = options.longs === String ? String(message.WinLine) : message.WinLine;
                else
                    object.WinLine = options.longs === String ? $util.Long.prototype.toString.call(message.WinLine) : options.longs === Number ? new $util.LongBits(message.WinLine.low >>> 0, message.WinLine.high >>> 0).toNumber() : message.WinLine;
            if (message.WinLoseData != null && message.hasOwnProperty("WinLoseData"))
                object.WinLoseData = message.WinLoseData;
            return object;
        };

        /**
         * Converts this SuperTool_Msg_UpdateSysPoolWinLose to JSON.
         * @function toJSON
         * @memberof brnn.SuperTool_Msg_UpdateSysPoolWinLose
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SuperTool_Msg_UpdateSysPoolWinLose.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SuperTool_Msg_UpdateSysPoolWinLose;
    })();

    brnn.Http_BRNN_GameInfo = (function() {

        /**
         * Properties of a Http_BRNN_GameInfo.
         * @memberof brnn
         * @interface IHttp_BRNN_GameInfo
         * @property {Array.<brnn.IHttp_BRNN_TableList>|null} [TableList] Http_BRNN_GameInfo TableList
         */

        /**
         * Constructs a new Http_BRNN_GameInfo.
         * @memberof brnn
         * @classdesc Represents a Http_BRNN_GameInfo.
         * @implements IHttp_BRNN_GameInfo
         * @constructor
         * @param {brnn.IHttp_BRNN_GameInfo=} [properties] Properties to set
         */
        function Http_BRNN_GameInfo(properties) {
            this.TableList = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Http_BRNN_GameInfo TableList.
         * @member {Array.<brnn.IHttp_BRNN_TableList>} TableList
         * @memberof brnn.Http_BRNN_GameInfo
         * @instance
         */
        Http_BRNN_GameInfo.prototype.TableList = $util.emptyArray;

        /**
         * Creates a new Http_BRNN_GameInfo instance using the specified properties.
         * @function create
         * @memberof brnn.Http_BRNN_GameInfo
         * @static
         * @param {brnn.IHttp_BRNN_GameInfo=} [properties] Properties to set
         * @returns {brnn.Http_BRNN_GameInfo} Http_BRNN_GameInfo instance
         */
        Http_BRNN_GameInfo.create = function create(properties) {
            return new Http_BRNN_GameInfo(properties);
        };

        /**
         * Encodes the specified Http_BRNN_GameInfo message. Does not implicitly {@link brnn.Http_BRNN_GameInfo.verify|verify} messages.
         * @function encode
         * @memberof brnn.Http_BRNN_GameInfo
         * @static
         * @param {brnn.IHttp_BRNN_GameInfo} message Http_BRNN_GameInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Http_BRNN_GameInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.TableList != null && message.TableList.length)
                for (var i = 0; i < message.TableList.length; ++i)
                    $root.brnn.Http_BRNN_TableList.encode(message.TableList[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Http_BRNN_GameInfo message, length delimited. Does not implicitly {@link brnn.Http_BRNN_GameInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof brnn.Http_BRNN_GameInfo
         * @static
         * @param {brnn.IHttp_BRNN_GameInfo} message Http_BRNN_GameInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Http_BRNN_GameInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Http_BRNN_GameInfo message from the specified reader or buffer.
         * @function decode
         * @memberof brnn.Http_BRNN_GameInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {brnn.Http_BRNN_GameInfo} Http_BRNN_GameInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Http_BRNN_GameInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.brnn.Http_BRNN_GameInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.TableList && message.TableList.length))
                        message.TableList = [];
                    message.TableList.push($root.brnn.Http_BRNN_TableList.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Http_BRNN_GameInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof brnn.Http_BRNN_GameInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {brnn.Http_BRNN_GameInfo} Http_BRNN_GameInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Http_BRNN_GameInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Http_BRNN_GameInfo message.
         * @function verify
         * @memberof brnn.Http_BRNN_GameInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Http_BRNN_GameInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.TableList != null && message.hasOwnProperty("TableList")) {
                if (!Array.isArray(message.TableList))
                    return "TableList: array expected";
                for (var i = 0; i < message.TableList.length; ++i) {
                    var error = $root.brnn.Http_BRNN_TableList.verify(message.TableList[i]);
                    if (error)
                        return "TableList." + error;
                }
            }
            return null;
        };

        /**
         * Creates a Http_BRNN_GameInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof brnn.Http_BRNN_GameInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {brnn.Http_BRNN_GameInfo} Http_BRNN_GameInfo
         */
        Http_BRNN_GameInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.brnn.Http_BRNN_GameInfo)
                return object;
            var message = new $root.brnn.Http_BRNN_GameInfo();
            if (object.TableList) {
                if (!Array.isArray(object.TableList))
                    throw TypeError(".brnn.Http_BRNN_GameInfo.TableList: array expected");
                message.TableList = [];
                for (var i = 0; i < object.TableList.length; ++i) {
                    if (typeof object.TableList[i] !== "object")
                        throw TypeError(".brnn.Http_BRNN_GameInfo.TableList: object expected");
                    message.TableList[i] = $root.brnn.Http_BRNN_TableList.fromObject(object.TableList[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a Http_BRNN_GameInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof brnn.Http_BRNN_GameInfo
         * @static
         * @param {brnn.Http_BRNN_GameInfo} message Http_BRNN_GameInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Http_BRNN_GameInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.TableList = [];
            if (message.TableList && message.TableList.length) {
                object.TableList = [];
                for (var j = 0; j < message.TableList.length; ++j)
                    object.TableList[j] = $root.brnn.Http_BRNN_TableList.toObject(message.TableList[j], options);
            }
            return object;
        };

        /**
         * Converts this Http_BRNN_GameInfo to JSON.
         * @function toJSON
         * @memberof brnn.Http_BRNN_GameInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Http_BRNN_GameInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Http_BRNN_GameInfo;
    })();

    brnn.Http_BRNN_TableList = (function() {

        /**
         * Properties of a Http_BRNN_TableList.
         * @memberof brnn
         * @interface IHttp_BRNN_TableList
         * @property {number} TableNo Http_BRNN_TableList TableNo
         * @property {number} Status Http_BRNN_TableList Status
         * @property {number} GameUserCount Http_BRNN_TableList GameUserCount
         * @property {number} RobotCount Http_BRNN_TableList RobotCount
         * @property {number|Long} SumEarnAmount Http_BRNN_TableList SumEarnAmount
         * @property {number} LastEarnAmount Http_BRNN_TableList LastEarnAmount
         * @property {number|Long} PoolCurrentAmount Http_BRNN_TableList PoolCurrentAmount
         */

        /**
         * Constructs a new Http_BRNN_TableList.
         * @memberof brnn
         * @classdesc Represents a Http_BRNN_TableList.
         * @implements IHttp_BRNN_TableList
         * @constructor
         * @param {brnn.IHttp_BRNN_TableList=} [properties] Properties to set
         */
        function Http_BRNN_TableList(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Http_BRNN_TableList TableNo.
         * @member {number} TableNo
         * @memberof brnn.Http_BRNN_TableList
         * @instance
         */
        Http_BRNN_TableList.prototype.TableNo = 0;

        /**
         * Http_BRNN_TableList Status.
         * @member {number} Status
         * @memberof brnn.Http_BRNN_TableList
         * @instance
         */
        Http_BRNN_TableList.prototype.Status = 0;

        /**
         * Http_BRNN_TableList GameUserCount.
         * @member {number} GameUserCount
         * @memberof brnn.Http_BRNN_TableList
         * @instance
         */
        Http_BRNN_TableList.prototype.GameUserCount = 0;

        /**
         * Http_BRNN_TableList RobotCount.
         * @member {number} RobotCount
         * @memberof brnn.Http_BRNN_TableList
         * @instance
         */
        Http_BRNN_TableList.prototype.RobotCount = 0;

        /**
         * Http_BRNN_TableList SumEarnAmount.
         * @member {number|Long} SumEarnAmount
         * @memberof brnn.Http_BRNN_TableList
         * @instance
         */
        Http_BRNN_TableList.prototype.SumEarnAmount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Http_BRNN_TableList LastEarnAmount.
         * @member {number} LastEarnAmount
         * @memberof brnn.Http_BRNN_TableList
         * @instance
         */
        Http_BRNN_TableList.prototype.LastEarnAmount = 0;

        /**
         * Http_BRNN_TableList PoolCurrentAmount.
         * @member {number|Long} PoolCurrentAmount
         * @memberof brnn.Http_BRNN_TableList
         * @instance
         */
        Http_BRNN_TableList.prototype.PoolCurrentAmount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new Http_BRNN_TableList instance using the specified properties.
         * @function create
         * @memberof brnn.Http_BRNN_TableList
         * @static
         * @param {brnn.IHttp_BRNN_TableList=} [properties] Properties to set
         * @returns {brnn.Http_BRNN_TableList} Http_BRNN_TableList instance
         */
        Http_BRNN_TableList.create = function create(properties) {
            return new Http_BRNN_TableList(properties);
        };

        /**
         * Encodes the specified Http_BRNN_TableList message. Does not implicitly {@link brnn.Http_BRNN_TableList.verify|verify} messages.
         * @function encode
         * @memberof brnn.Http_BRNN_TableList
         * @static
         * @param {brnn.IHttp_BRNN_TableList} message Http_BRNN_TableList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Http_BRNN_TableList.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.TableNo);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.Status);
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.GameUserCount);
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.RobotCount);
            writer.uint32(/* id 5, wireType 0 =*/40).int64(message.SumEarnAmount);
            writer.uint32(/* id 6, wireType 0 =*/48).int32(message.LastEarnAmount);
            writer.uint32(/* id 7, wireType 0 =*/56).int64(message.PoolCurrentAmount);
            return writer;
        };

        /**
         * Encodes the specified Http_BRNN_TableList message, length delimited. Does not implicitly {@link brnn.Http_BRNN_TableList.verify|verify} messages.
         * @function encodeDelimited
         * @memberof brnn.Http_BRNN_TableList
         * @static
         * @param {brnn.IHttp_BRNN_TableList} message Http_BRNN_TableList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Http_BRNN_TableList.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Http_BRNN_TableList message from the specified reader or buffer.
         * @function decode
         * @memberof brnn.Http_BRNN_TableList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {brnn.Http_BRNN_TableList} Http_BRNN_TableList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Http_BRNN_TableList.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.brnn.Http_BRNN_TableList();
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
            return message;
        };

        /**
         * Decodes a Http_BRNN_TableList message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof brnn.Http_BRNN_TableList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {brnn.Http_BRNN_TableList} Http_BRNN_TableList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Http_BRNN_TableList.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Http_BRNN_TableList message.
         * @function verify
         * @memberof brnn.Http_BRNN_TableList
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Http_BRNN_TableList.verify = function verify(message) {
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
            return null;
        };

        /**
         * Creates a Http_BRNN_TableList message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof brnn.Http_BRNN_TableList
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {brnn.Http_BRNN_TableList} Http_BRNN_TableList
         */
        Http_BRNN_TableList.fromObject = function fromObject(object) {
            if (object instanceof $root.brnn.Http_BRNN_TableList)
                return object;
            var message = new $root.brnn.Http_BRNN_TableList();
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
            return message;
        };

        /**
         * Creates a plain object from a Http_BRNN_TableList message. Also converts values to other types if specified.
         * @function toObject
         * @memberof brnn.Http_BRNN_TableList
         * @static
         * @param {brnn.Http_BRNN_TableList} message Http_BRNN_TableList
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Http_BRNN_TableList.toObject = function toObject(message, options) {
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
            return object;
        };

        /**
         * Converts this Http_BRNN_TableList to JSON.
         * @function toJSON
         * @memberof brnn.Http_BRNN_TableList
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Http_BRNN_TableList.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Http_BRNN_TableList;
    })();

    brnn.Http_BRNN_BetBlackDetail = (function() {

        /**
         * Properties of a Http_BRNN_BetBlackDetail.
         * @memberof brnn
         * @interface IHttp_BRNN_BetBlackDetail
         * @property {string} BlackUserList Http_BRNN_BetBlackDetail BlackUserList
         */

        /**
         * Constructs a new Http_BRNN_BetBlackDetail.
         * @memberof brnn
         * @classdesc Represents a Http_BRNN_BetBlackDetail.
         * @implements IHttp_BRNN_BetBlackDetail
         * @constructor
         * @param {brnn.IHttp_BRNN_BetBlackDetail=} [properties] Properties to set
         */
        function Http_BRNN_BetBlackDetail(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Http_BRNN_BetBlackDetail BlackUserList.
         * @member {string} BlackUserList
         * @memberof brnn.Http_BRNN_BetBlackDetail
         * @instance
         */
        Http_BRNN_BetBlackDetail.prototype.BlackUserList = "";

        /**
         * Creates a new Http_BRNN_BetBlackDetail instance using the specified properties.
         * @function create
         * @memberof brnn.Http_BRNN_BetBlackDetail
         * @static
         * @param {brnn.IHttp_BRNN_BetBlackDetail=} [properties] Properties to set
         * @returns {brnn.Http_BRNN_BetBlackDetail} Http_BRNN_BetBlackDetail instance
         */
        Http_BRNN_BetBlackDetail.create = function create(properties) {
            return new Http_BRNN_BetBlackDetail(properties);
        };

        /**
         * Encodes the specified Http_BRNN_BetBlackDetail message. Does not implicitly {@link brnn.Http_BRNN_BetBlackDetail.verify|verify} messages.
         * @function encode
         * @memberof brnn.Http_BRNN_BetBlackDetail
         * @static
         * @param {brnn.IHttp_BRNN_BetBlackDetail} message Http_BRNN_BetBlackDetail message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Http_BRNN_BetBlackDetail.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.BlackUserList);
            return writer;
        };

        /**
         * Encodes the specified Http_BRNN_BetBlackDetail message, length delimited. Does not implicitly {@link brnn.Http_BRNN_BetBlackDetail.verify|verify} messages.
         * @function encodeDelimited
         * @memberof brnn.Http_BRNN_BetBlackDetail
         * @static
         * @param {brnn.IHttp_BRNN_BetBlackDetail} message Http_BRNN_BetBlackDetail message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Http_BRNN_BetBlackDetail.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Http_BRNN_BetBlackDetail message from the specified reader or buffer.
         * @function decode
         * @memberof brnn.Http_BRNN_BetBlackDetail
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {brnn.Http_BRNN_BetBlackDetail} Http_BRNN_BetBlackDetail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Http_BRNN_BetBlackDetail.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.brnn.Http_BRNN_BetBlackDetail();
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
         * Decodes a Http_BRNN_BetBlackDetail message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof brnn.Http_BRNN_BetBlackDetail
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {brnn.Http_BRNN_BetBlackDetail} Http_BRNN_BetBlackDetail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Http_BRNN_BetBlackDetail.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Http_BRNN_BetBlackDetail message.
         * @function verify
         * @memberof brnn.Http_BRNN_BetBlackDetail
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Http_BRNN_BetBlackDetail.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.BlackUserList))
                return "BlackUserList: string expected";
            return null;
        };

        /**
         * Creates a Http_BRNN_BetBlackDetail message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof brnn.Http_BRNN_BetBlackDetail
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {brnn.Http_BRNN_BetBlackDetail} Http_BRNN_BetBlackDetail
         */
        Http_BRNN_BetBlackDetail.fromObject = function fromObject(object) {
            if (object instanceof $root.brnn.Http_BRNN_BetBlackDetail)
                return object;
            var message = new $root.brnn.Http_BRNN_BetBlackDetail();
            if (object.BlackUserList != null)
                message.BlackUserList = String(object.BlackUserList);
            return message;
        };

        /**
         * Creates a plain object from a Http_BRNN_BetBlackDetail message. Also converts values to other types if specified.
         * @function toObject
         * @memberof brnn.Http_BRNN_BetBlackDetail
         * @static
         * @param {brnn.Http_BRNN_BetBlackDetail} message Http_BRNN_BetBlackDetail
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Http_BRNN_BetBlackDetail.toObject = function toObject(message, options) {
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
         * Converts this Http_BRNN_BetBlackDetail to JSON.
         * @function toJSON
         * @memberof brnn.Http_BRNN_BetBlackDetail
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Http_BRNN_BetBlackDetail.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Http_BRNN_BetBlackDetail;
    })();

    brnn.Http_BRNN_TableDetail = (function() {

        /**
         * Properties of a Http_BRNN_TableDetail.
         * @memberof brnn
         * @interface IHttp_BRNN_TableDetail
         * @property {number} TableNo Http_BRNN_TableDetail TableNo
         * @property {number} Status Http_BRNN_TableDetail Status
         * @property {number|Long} SumEarnAmount Http_BRNN_TableDetail SumEarnAmount
         * @property {number} LastEarnAmount Http_BRNN_TableDetail LastEarnAmount
         * @property {number|Long} PoolCurrentAmount Http_BRNN_TableDetail PoolCurrentAmount
         * @property {number} GameUserCount Http_BRNN_TableDetail GameUserCount
         * @property {number} RobotCount Http_BRNN_TableDetail RobotCount
         * @property {number} PopWaterRate Http_BRNN_TableDetail PopWaterRate
         * @property {number} ZhuangType Http_BRNN_TableDetail ZhuangType
         * @property {string} ZhuangNickName Http_BRNN_TableDetail ZhuangNickName
         * @property {number} ZhuangUserID Http_BRNN_TableDetail ZhuangUserID
         * @property {number} ZhuangSurplusTotal Http_BRNN_TableDetail ZhuangSurplusTotal
         * @property {number|Long} ZhuangCurrentMoneyAmount Http_BRNN_TableDetail ZhuangCurrentMoneyAmount
         * @property {number|Long} ZhuangInitMoneyAmount Http_BRNN_TableDetail ZhuangInitMoneyAmount
         * @property {number|Long} OpenResultZhuang Http_BRNN_TableDetail OpenResultZhuang
         * @property {number|Long} OpenResultChingLong Http_BRNN_TableDetail OpenResultChingLong
         * @property {number|Long} OpenResultBaiHu Http_BRNN_TableDetail OpenResultBaiHu
         * @property {number|Long} OpenResultChuChueh Http_BRNN_TableDetail OpenResultChuChueh
         * @property {number|Long} OpenResultHsuanWu Http_BRNN_TableDetail OpenResultHsuanWu
         * @property {number|Long} SysTaxIncome Http_BRNN_TableDetail SysTaxIncome
         * @property {string} CurentOpenResult Http_BRNN_TableDetail CurentOpenResult
         * @property {number|Long} CurentOpenResultEarn Http_BRNN_TableDetail CurentOpenResultEarn
         * @property {Array.<brnn.IHttp_BRNN_UserInfo>|null} [UserInfo] Http_BRNN_TableDetail UserInfo
         * @property {number} BetTime Http_BRNN_TableDetail BetTime
         * @property {number|Long} WinLine Http_BRNN_TableDetail WinLine
         * @property {number|Long} RobotBetAmount Http_BRNN_TableDetail RobotBetAmount
         * @property {Array.<brnn.IHttp_BRNN_UserInfo>|null} [LastGameUserBet] Http_BRNN_TableDetail LastGameUserBet
         * @property {number} ChingLongWinRate Http_BRNN_TableDetail ChingLongWinRate
         * @property {number} BaiHuWinRate Http_BRNN_TableDetail BaiHuWinRate
         * @property {number} ChuChuehWinRate Http_BRNN_TableDetail ChuChuehWinRate
         * @property {number} HsuanWuWinRate Http_BRNN_TableDetail HsuanWuWinRate
         * @property {number|Long} FanFengTarget Http_BRNN_TableDetail FanFengTarget
         * @property {number|Long} FanFengComplete Http_BRNN_TableDetail FanFengComplete
         */

        /**
         * Constructs a new Http_BRNN_TableDetail.
         * @memberof brnn
         * @classdesc Represents a Http_BRNN_TableDetail.
         * @implements IHttp_BRNN_TableDetail
         * @constructor
         * @param {brnn.IHttp_BRNN_TableDetail=} [properties] Properties to set
         */
        function Http_BRNN_TableDetail(properties) {
            this.UserInfo = [];
            this.LastGameUserBet = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Http_BRNN_TableDetail TableNo.
         * @member {number} TableNo
         * @memberof brnn.Http_BRNN_TableDetail
         * @instance
         */
        Http_BRNN_TableDetail.prototype.TableNo = 0;

        /**
         * Http_BRNN_TableDetail Status.
         * @member {number} Status
         * @memberof brnn.Http_BRNN_TableDetail
         * @instance
         */
        Http_BRNN_TableDetail.prototype.Status = 0;

        /**
         * Http_BRNN_TableDetail SumEarnAmount.
         * @member {number|Long} SumEarnAmount
         * @memberof brnn.Http_BRNN_TableDetail
         * @instance
         */
        Http_BRNN_TableDetail.prototype.SumEarnAmount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Http_BRNN_TableDetail LastEarnAmount.
         * @member {number} LastEarnAmount
         * @memberof brnn.Http_BRNN_TableDetail
         * @instance
         */
        Http_BRNN_TableDetail.prototype.LastEarnAmount = 0;

        /**
         * Http_BRNN_TableDetail PoolCurrentAmount.
         * @member {number|Long} PoolCurrentAmount
         * @memberof brnn.Http_BRNN_TableDetail
         * @instance
         */
        Http_BRNN_TableDetail.prototype.PoolCurrentAmount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Http_BRNN_TableDetail GameUserCount.
         * @member {number} GameUserCount
         * @memberof brnn.Http_BRNN_TableDetail
         * @instance
         */
        Http_BRNN_TableDetail.prototype.GameUserCount = 0;

        /**
         * Http_BRNN_TableDetail RobotCount.
         * @member {number} RobotCount
         * @memberof brnn.Http_BRNN_TableDetail
         * @instance
         */
        Http_BRNN_TableDetail.prototype.RobotCount = 0;

        /**
         * Http_BRNN_TableDetail PopWaterRate.
         * @member {number} PopWaterRate
         * @memberof brnn.Http_BRNN_TableDetail
         * @instance
         */
        Http_BRNN_TableDetail.prototype.PopWaterRate = 0;

        /**
         * Http_BRNN_TableDetail ZhuangType.
         * @member {number} ZhuangType
         * @memberof brnn.Http_BRNN_TableDetail
         * @instance
         */
        Http_BRNN_TableDetail.prototype.ZhuangType = 0;

        /**
         * Http_BRNN_TableDetail ZhuangNickName.
         * @member {string} ZhuangNickName
         * @memberof brnn.Http_BRNN_TableDetail
         * @instance
         */
        Http_BRNN_TableDetail.prototype.ZhuangNickName = "";

        /**
         * Http_BRNN_TableDetail ZhuangUserID.
         * @member {number} ZhuangUserID
         * @memberof brnn.Http_BRNN_TableDetail
         * @instance
         */
        Http_BRNN_TableDetail.prototype.ZhuangUserID = 0;

        /**
         * Http_BRNN_TableDetail ZhuangSurplusTotal.
         * @member {number} ZhuangSurplusTotal
         * @memberof brnn.Http_BRNN_TableDetail
         * @instance
         */
        Http_BRNN_TableDetail.prototype.ZhuangSurplusTotal = 0;

        /**
         * Http_BRNN_TableDetail ZhuangCurrentMoneyAmount.
         * @member {number|Long} ZhuangCurrentMoneyAmount
         * @memberof brnn.Http_BRNN_TableDetail
         * @instance
         */
        Http_BRNN_TableDetail.prototype.ZhuangCurrentMoneyAmount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Http_BRNN_TableDetail ZhuangInitMoneyAmount.
         * @member {number|Long} ZhuangInitMoneyAmount
         * @memberof brnn.Http_BRNN_TableDetail
         * @instance
         */
        Http_BRNN_TableDetail.prototype.ZhuangInitMoneyAmount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Http_BRNN_TableDetail OpenResultZhuang.
         * @member {number|Long} OpenResultZhuang
         * @memberof brnn.Http_BRNN_TableDetail
         * @instance
         */
        Http_BRNN_TableDetail.prototype.OpenResultZhuang = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Http_BRNN_TableDetail OpenResultChingLong.
         * @member {number|Long} OpenResultChingLong
         * @memberof brnn.Http_BRNN_TableDetail
         * @instance
         */
        Http_BRNN_TableDetail.prototype.OpenResultChingLong = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Http_BRNN_TableDetail OpenResultBaiHu.
         * @member {number|Long} OpenResultBaiHu
         * @memberof brnn.Http_BRNN_TableDetail
         * @instance
         */
        Http_BRNN_TableDetail.prototype.OpenResultBaiHu = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Http_BRNN_TableDetail OpenResultChuChueh.
         * @member {number|Long} OpenResultChuChueh
         * @memberof brnn.Http_BRNN_TableDetail
         * @instance
         */
        Http_BRNN_TableDetail.prototype.OpenResultChuChueh = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Http_BRNN_TableDetail OpenResultHsuanWu.
         * @member {number|Long} OpenResultHsuanWu
         * @memberof brnn.Http_BRNN_TableDetail
         * @instance
         */
        Http_BRNN_TableDetail.prototype.OpenResultHsuanWu = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Http_BRNN_TableDetail SysTaxIncome.
         * @member {number|Long} SysTaxIncome
         * @memberof brnn.Http_BRNN_TableDetail
         * @instance
         */
        Http_BRNN_TableDetail.prototype.SysTaxIncome = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Http_BRNN_TableDetail CurentOpenResult.
         * @member {string} CurentOpenResult
         * @memberof brnn.Http_BRNN_TableDetail
         * @instance
         */
        Http_BRNN_TableDetail.prototype.CurentOpenResult = "";

        /**
         * Http_BRNN_TableDetail CurentOpenResultEarn.
         * @member {number|Long} CurentOpenResultEarn
         * @memberof brnn.Http_BRNN_TableDetail
         * @instance
         */
        Http_BRNN_TableDetail.prototype.CurentOpenResultEarn = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Http_BRNN_TableDetail UserInfo.
         * @member {Array.<brnn.IHttp_BRNN_UserInfo>} UserInfo
         * @memberof brnn.Http_BRNN_TableDetail
         * @instance
         */
        Http_BRNN_TableDetail.prototype.UserInfo = $util.emptyArray;

        /**
         * Http_BRNN_TableDetail BetTime.
         * @member {number} BetTime
         * @memberof brnn.Http_BRNN_TableDetail
         * @instance
         */
        Http_BRNN_TableDetail.prototype.BetTime = 0;

        /**
         * Http_BRNN_TableDetail WinLine.
         * @member {number|Long} WinLine
         * @memberof brnn.Http_BRNN_TableDetail
         * @instance
         */
        Http_BRNN_TableDetail.prototype.WinLine = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Http_BRNN_TableDetail RobotBetAmount.
         * @member {number|Long} RobotBetAmount
         * @memberof brnn.Http_BRNN_TableDetail
         * @instance
         */
        Http_BRNN_TableDetail.prototype.RobotBetAmount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Http_BRNN_TableDetail LastGameUserBet.
         * @member {Array.<brnn.IHttp_BRNN_UserInfo>} LastGameUserBet
         * @memberof brnn.Http_BRNN_TableDetail
         * @instance
         */
        Http_BRNN_TableDetail.prototype.LastGameUserBet = $util.emptyArray;

        /**
         * Http_BRNN_TableDetail ChingLongWinRate.
         * @member {number} ChingLongWinRate
         * @memberof brnn.Http_BRNN_TableDetail
         * @instance
         */
        Http_BRNN_TableDetail.prototype.ChingLongWinRate = 0;

        /**
         * Http_BRNN_TableDetail BaiHuWinRate.
         * @member {number} BaiHuWinRate
         * @memberof brnn.Http_BRNN_TableDetail
         * @instance
         */
        Http_BRNN_TableDetail.prototype.BaiHuWinRate = 0;

        /**
         * Http_BRNN_TableDetail ChuChuehWinRate.
         * @member {number} ChuChuehWinRate
         * @memberof brnn.Http_BRNN_TableDetail
         * @instance
         */
        Http_BRNN_TableDetail.prototype.ChuChuehWinRate = 0;

        /**
         * Http_BRNN_TableDetail HsuanWuWinRate.
         * @member {number} HsuanWuWinRate
         * @memberof brnn.Http_BRNN_TableDetail
         * @instance
         */
        Http_BRNN_TableDetail.prototype.HsuanWuWinRate = 0;

        /**
         * Http_BRNN_TableDetail FanFengTarget.
         * @member {number|Long} FanFengTarget
         * @memberof brnn.Http_BRNN_TableDetail
         * @instance
         */
        Http_BRNN_TableDetail.prototype.FanFengTarget = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Http_BRNN_TableDetail FanFengComplete.
         * @member {number|Long} FanFengComplete
         * @memberof brnn.Http_BRNN_TableDetail
         * @instance
         */
        Http_BRNN_TableDetail.prototype.FanFengComplete = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new Http_BRNN_TableDetail instance using the specified properties.
         * @function create
         * @memberof brnn.Http_BRNN_TableDetail
         * @static
         * @param {brnn.IHttp_BRNN_TableDetail=} [properties] Properties to set
         * @returns {brnn.Http_BRNN_TableDetail} Http_BRNN_TableDetail instance
         */
        Http_BRNN_TableDetail.create = function create(properties) {
            return new Http_BRNN_TableDetail(properties);
        };

        /**
         * Encodes the specified Http_BRNN_TableDetail message. Does not implicitly {@link brnn.Http_BRNN_TableDetail.verify|verify} messages.
         * @function encode
         * @memberof brnn.Http_BRNN_TableDetail
         * @static
         * @param {brnn.IHttp_BRNN_TableDetail} message Http_BRNN_TableDetail message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Http_BRNN_TableDetail.encode = function encode(message, writer) {
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
            writer.uint32(/* id 16, wireType 0 =*/128).int64(message.OpenResultChingLong);
            writer.uint32(/* id 17, wireType 0 =*/136).int64(message.OpenResultBaiHu);
            writer.uint32(/* id 18, wireType 0 =*/144).int64(message.OpenResultChuChueh);
            writer.uint32(/* id 19, wireType 0 =*/152).int64(message.OpenResultHsuanWu);
            writer.uint32(/* id 21, wireType 0 =*/168).int64(message.SysTaxIncome);
            writer.uint32(/* id 23, wireType 2 =*/186).string(message.CurentOpenResult);
            writer.uint32(/* id 24, wireType 0 =*/192).int64(message.CurentOpenResultEarn);
            if (message.UserInfo != null && message.UserInfo.length)
                for (var i = 0; i < message.UserInfo.length; ++i)
                    $root.brnn.Http_BRNN_UserInfo.encode(message.UserInfo[i], writer.uint32(/* id 25, wireType 2 =*/202).fork()).ldelim();
            writer.uint32(/* id 26, wireType 0 =*/208).int32(message.BetTime);
            writer.uint32(/* id 27, wireType 0 =*/216).int64(message.WinLine);
            writer.uint32(/* id 28, wireType 0 =*/224).int64(message.RobotBetAmount);
            if (message.LastGameUserBet != null && message.LastGameUserBet.length)
                for (var i = 0; i < message.LastGameUserBet.length; ++i)
                    $root.brnn.Http_BRNN_UserInfo.encode(message.LastGameUserBet[i], writer.uint32(/* id 29, wireType 2 =*/234).fork()).ldelim();
            writer.uint32(/* id 30, wireType 0 =*/240).int32(message.ChingLongWinRate);
            writer.uint32(/* id 31, wireType 0 =*/248).int32(message.BaiHuWinRate);
            writer.uint32(/* id 32, wireType 0 =*/256).int32(message.ChuChuehWinRate);
            writer.uint32(/* id 33, wireType 0 =*/264).int32(message.HsuanWuWinRate);
            writer.uint32(/* id 34, wireType 0 =*/272).int64(message.FanFengTarget);
            writer.uint32(/* id 35, wireType 0 =*/280).int64(message.FanFengComplete);
            return writer;
        };

        /**
         * Encodes the specified Http_BRNN_TableDetail message, length delimited. Does not implicitly {@link brnn.Http_BRNN_TableDetail.verify|verify} messages.
         * @function encodeDelimited
         * @memberof brnn.Http_BRNN_TableDetail
         * @static
         * @param {brnn.IHttp_BRNN_TableDetail} message Http_BRNN_TableDetail message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Http_BRNN_TableDetail.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Http_BRNN_TableDetail message from the specified reader or buffer.
         * @function decode
         * @memberof brnn.Http_BRNN_TableDetail
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {brnn.Http_BRNN_TableDetail} Http_BRNN_TableDetail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Http_BRNN_TableDetail.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.brnn.Http_BRNN_TableDetail();
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
                    message.OpenResultChingLong = reader.int64();
                    break;
                case 17:
                    message.OpenResultBaiHu = reader.int64();
                    break;
                case 18:
                    message.OpenResultChuChueh = reader.int64();
                    break;
                case 19:
                    message.OpenResultHsuanWu = reader.int64();
                    break;
                case 21:
                    message.SysTaxIncome = reader.int64();
                    break;
                case 23:
                    message.CurentOpenResult = reader.string();
                    break;
                case 24:
                    message.CurentOpenResultEarn = reader.int64();
                    break;
                case 25:
                    if (!(message.UserInfo && message.UserInfo.length))
                        message.UserInfo = [];
                    message.UserInfo.push($root.brnn.Http_BRNN_UserInfo.decode(reader, reader.uint32()));
                    break;
                case 26:
                    message.BetTime = reader.int32();
                    break;
                case 27:
                    message.WinLine = reader.int64();
                    break;
                case 28:
                    message.RobotBetAmount = reader.int64();
                    break;
                case 29:
                    if (!(message.LastGameUserBet && message.LastGameUserBet.length))
                        message.LastGameUserBet = [];
                    message.LastGameUserBet.push($root.brnn.Http_BRNN_UserInfo.decode(reader, reader.uint32()));
                    break;
                case 30:
                    message.ChingLongWinRate = reader.int32();
                    break;
                case 31:
                    message.BaiHuWinRate = reader.int32();
                    break;
                case 32:
                    message.ChuChuehWinRate = reader.int32();
                    break;
                case 33:
                    message.HsuanWuWinRate = reader.int32();
                    break;
                case 34:
                    message.FanFengTarget = reader.int64();
                    break;
                case 35:
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
            if (!message.hasOwnProperty("OpenResultChingLong"))
                throw $util.ProtocolError("missing required 'OpenResultChingLong'", { instance: message });
            if (!message.hasOwnProperty("OpenResultBaiHu"))
                throw $util.ProtocolError("missing required 'OpenResultBaiHu'", { instance: message });
            if (!message.hasOwnProperty("OpenResultChuChueh"))
                throw $util.ProtocolError("missing required 'OpenResultChuChueh'", { instance: message });
            if (!message.hasOwnProperty("OpenResultHsuanWu"))
                throw $util.ProtocolError("missing required 'OpenResultHsuanWu'", { instance: message });
            if (!message.hasOwnProperty("SysTaxIncome"))
                throw $util.ProtocolError("missing required 'SysTaxIncome'", { instance: message });
            if (!message.hasOwnProperty("CurentOpenResult"))
                throw $util.ProtocolError("missing required 'CurentOpenResult'", { instance: message });
            if (!message.hasOwnProperty("CurentOpenResultEarn"))
                throw $util.ProtocolError("missing required 'CurentOpenResultEarn'", { instance: message });
            if (!message.hasOwnProperty("BetTime"))
                throw $util.ProtocolError("missing required 'BetTime'", { instance: message });
            if (!message.hasOwnProperty("WinLine"))
                throw $util.ProtocolError("missing required 'WinLine'", { instance: message });
            if (!message.hasOwnProperty("RobotBetAmount"))
                throw $util.ProtocolError("missing required 'RobotBetAmount'", { instance: message });
            if (!message.hasOwnProperty("ChingLongWinRate"))
                throw $util.ProtocolError("missing required 'ChingLongWinRate'", { instance: message });
            if (!message.hasOwnProperty("BaiHuWinRate"))
                throw $util.ProtocolError("missing required 'BaiHuWinRate'", { instance: message });
            if (!message.hasOwnProperty("ChuChuehWinRate"))
                throw $util.ProtocolError("missing required 'ChuChuehWinRate'", { instance: message });
            if (!message.hasOwnProperty("HsuanWuWinRate"))
                throw $util.ProtocolError("missing required 'HsuanWuWinRate'", { instance: message });
            if (!message.hasOwnProperty("FanFengTarget"))
                throw $util.ProtocolError("missing required 'FanFengTarget'", { instance: message });
            if (!message.hasOwnProperty("FanFengComplete"))
                throw $util.ProtocolError("missing required 'FanFengComplete'", { instance: message });
            return message;
        };

        /**
         * Decodes a Http_BRNN_TableDetail message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof brnn.Http_BRNN_TableDetail
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {brnn.Http_BRNN_TableDetail} Http_BRNN_TableDetail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Http_BRNN_TableDetail.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Http_BRNN_TableDetail message.
         * @function verify
         * @memberof brnn.Http_BRNN_TableDetail
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Http_BRNN_TableDetail.verify = function verify(message) {
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
            if (!$util.isInteger(message.OpenResultChingLong) && !(message.OpenResultChingLong && $util.isInteger(message.OpenResultChingLong.low) && $util.isInteger(message.OpenResultChingLong.high)))
                return "OpenResultChingLong: integer|Long expected";
            if (!$util.isInteger(message.OpenResultBaiHu) && !(message.OpenResultBaiHu && $util.isInteger(message.OpenResultBaiHu.low) && $util.isInteger(message.OpenResultBaiHu.high)))
                return "OpenResultBaiHu: integer|Long expected";
            if (!$util.isInteger(message.OpenResultChuChueh) && !(message.OpenResultChuChueh && $util.isInteger(message.OpenResultChuChueh.low) && $util.isInteger(message.OpenResultChuChueh.high)))
                return "OpenResultChuChueh: integer|Long expected";
            if (!$util.isInteger(message.OpenResultHsuanWu) && !(message.OpenResultHsuanWu && $util.isInteger(message.OpenResultHsuanWu.low) && $util.isInteger(message.OpenResultHsuanWu.high)))
                return "OpenResultHsuanWu: integer|Long expected";
            if (!$util.isInteger(message.SysTaxIncome) && !(message.SysTaxIncome && $util.isInteger(message.SysTaxIncome.low) && $util.isInteger(message.SysTaxIncome.high)))
                return "SysTaxIncome: integer|Long expected";
            if (!$util.isString(message.CurentOpenResult))
                return "CurentOpenResult: string expected";
            if (!$util.isInteger(message.CurentOpenResultEarn) && !(message.CurentOpenResultEarn && $util.isInteger(message.CurentOpenResultEarn.low) && $util.isInteger(message.CurentOpenResultEarn.high)))
                return "CurentOpenResultEarn: integer|Long expected";
            if (message.UserInfo != null && message.hasOwnProperty("UserInfo")) {
                if (!Array.isArray(message.UserInfo))
                    return "UserInfo: array expected";
                for (var i = 0; i < message.UserInfo.length; ++i) {
                    var error = $root.brnn.Http_BRNN_UserInfo.verify(message.UserInfo[i]);
                    if (error)
                        return "UserInfo." + error;
                }
            }
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
                    var error = $root.brnn.Http_BRNN_UserInfo.verify(message.LastGameUserBet[i]);
                    if (error)
                        return "LastGameUserBet." + error;
                }
            }
            if (!$util.isInteger(message.ChingLongWinRate))
                return "ChingLongWinRate: integer expected";
            if (!$util.isInteger(message.BaiHuWinRate))
                return "BaiHuWinRate: integer expected";
            if (!$util.isInteger(message.ChuChuehWinRate))
                return "ChuChuehWinRate: integer expected";
            if (!$util.isInteger(message.HsuanWuWinRate))
                return "HsuanWuWinRate: integer expected";
            if (!$util.isInteger(message.FanFengTarget) && !(message.FanFengTarget && $util.isInteger(message.FanFengTarget.low) && $util.isInteger(message.FanFengTarget.high)))
                return "FanFengTarget: integer|Long expected";
            if (!$util.isInteger(message.FanFengComplete) && !(message.FanFengComplete && $util.isInteger(message.FanFengComplete.low) && $util.isInteger(message.FanFengComplete.high)))
                return "FanFengComplete: integer|Long expected";
            return null;
        };

        /**
         * Creates a Http_BRNN_TableDetail message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof brnn.Http_BRNN_TableDetail
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {brnn.Http_BRNN_TableDetail} Http_BRNN_TableDetail
         */
        Http_BRNN_TableDetail.fromObject = function fromObject(object) {
            if (object instanceof $root.brnn.Http_BRNN_TableDetail)
                return object;
            var message = new $root.brnn.Http_BRNN_TableDetail();
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
            if (object.OpenResultChingLong != null)
                if ($util.Long)
                    (message.OpenResultChingLong = $util.Long.fromValue(object.OpenResultChingLong)).unsigned = false;
                else if (typeof object.OpenResultChingLong === "string")
                    message.OpenResultChingLong = parseInt(object.OpenResultChingLong, 10);
                else if (typeof object.OpenResultChingLong === "number")
                    message.OpenResultChingLong = object.OpenResultChingLong;
                else if (typeof object.OpenResultChingLong === "object")
                    message.OpenResultChingLong = new $util.LongBits(object.OpenResultChingLong.low >>> 0, object.OpenResultChingLong.high >>> 0).toNumber();
            if (object.OpenResultBaiHu != null)
                if ($util.Long)
                    (message.OpenResultBaiHu = $util.Long.fromValue(object.OpenResultBaiHu)).unsigned = false;
                else if (typeof object.OpenResultBaiHu === "string")
                    message.OpenResultBaiHu = parseInt(object.OpenResultBaiHu, 10);
                else if (typeof object.OpenResultBaiHu === "number")
                    message.OpenResultBaiHu = object.OpenResultBaiHu;
                else if (typeof object.OpenResultBaiHu === "object")
                    message.OpenResultBaiHu = new $util.LongBits(object.OpenResultBaiHu.low >>> 0, object.OpenResultBaiHu.high >>> 0).toNumber();
            if (object.OpenResultChuChueh != null)
                if ($util.Long)
                    (message.OpenResultChuChueh = $util.Long.fromValue(object.OpenResultChuChueh)).unsigned = false;
                else if (typeof object.OpenResultChuChueh === "string")
                    message.OpenResultChuChueh = parseInt(object.OpenResultChuChueh, 10);
                else if (typeof object.OpenResultChuChueh === "number")
                    message.OpenResultChuChueh = object.OpenResultChuChueh;
                else if (typeof object.OpenResultChuChueh === "object")
                    message.OpenResultChuChueh = new $util.LongBits(object.OpenResultChuChueh.low >>> 0, object.OpenResultChuChueh.high >>> 0).toNumber();
            if (object.OpenResultHsuanWu != null)
                if ($util.Long)
                    (message.OpenResultHsuanWu = $util.Long.fromValue(object.OpenResultHsuanWu)).unsigned = false;
                else if (typeof object.OpenResultHsuanWu === "string")
                    message.OpenResultHsuanWu = parseInt(object.OpenResultHsuanWu, 10);
                else if (typeof object.OpenResultHsuanWu === "number")
                    message.OpenResultHsuanWu = object.OpenResultHsuanWu;
                else if (typeof object.OpenResultHsuanWu === "object")
                    message.OpenResultHsuanWu = new $util.LongBits(object.OpenResultHsuanWu.low >>> 0, object.OpenResultHsuanWu.high >>> 0).toNumber();
            if (object.SysTaxIncome != null)
                if ($util.Long)
                    (message.SysTaxIncome = $util.Long.fromValue(object.SysTaxIncome)).unsigned = false;
                else if (typeof object.SysTaxIncome === "string")
                    message.SysTaxIncome = parseInt(object.SysTaxIncome, 10);
                else if (typeof object.SysTaxIncome === "number")
                    message.SysTaxIncome = object.SysTaxIncome;
                else if (typeof object.SysTaxIncome === "object")
                    message.SysTaxIncome = new $util.LongBits(object.SysTaxIncome.low >>> 0, object.SysTaxIncome.high >>> 0).toNumber();
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
                    throw TypeError(".brnn.Http_BRNN_TableDetail.UserInfo: array expected");
                message.UserInfo = [];
                for (var i = 0; i < object.UserInfo.length; ++i) {
                    if (typeof object.UserInfo[i] !== "object")
                        throw TypeError(".brnn.Http_BRNN_TableDetail.UserInfo: object expected");
                    message.UserInfo[i] = $root.brnn.Http_BRNN_UserInfo.fromObject(object.UserInfo[i]);
                }
            }
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
                    throw TypeError(".brnn.Http_BRNN_TableDetail.LastGameUserBet: array expected");
                message.LastGameUserBet = [];
                for (var i = 0; i < object.LastGameUserBet.length; ++i) {
                    if (typeof object.LastGameUserBet[i] !== "object")
                        throw TypeError(".brnn.Http_BRNN_TableDetail.LastGameUserBet: object expected");
                    message.LastGameUserBet[i] = $root.brnn.Http_BRNN_UserInfo.fromObject(object.LastGameUserBet[i]);
                }
            }
            if (object.ChingLongWinRate != null)
                message.ChingLongWinRate = object.ChingLongWinRate | 0;
            if (object.BaiHuWinRate != null)
                message.BaiHuWinRate = object.BaiHuWinRate | 0;
            if (object.ChuChuehWinRate != null)
                message.ChuChuehWinRate = object.ChuChuehWinRate | 0;
            if (object.HsuanWuWinRate != null)
                message.HsuanWuWinRate = object.HsuanWuWinRate | 0;
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
         * Creates a plain object from a Http_BRNN_TableDetail message. Also converts values to other types if specified.
         * @function toObject
         * @memberof brnn.Http_BRNN_TableDetail
         * @static
         * @param {brnn.Http_BRNN_TableDetail} message Http_BRNN_TableDetail
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Http_BRNN_TableDetail.toObject = function toObject(message, options) {
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
                    object.OpenResultChingLong = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.OpenResultChingLong = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.OpenResultBaiHu = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.OpenResultBaiHu = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.OpenResultChuChueh = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.OpenResultChuChueh = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.OpenResultHsuanWu = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.OpenResultHsuanWu = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.SysTaxIncome = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.SysTaxIncome = options.longs === String ? "0" : 0;
                object.CurentOpenResult = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.CurentOpenResultEarn = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.CurentOpenResultEarn = options.longs === String ? "0" : 0;
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
                object.ChingLongWinRate = 0;
                object.BaiHuWinRate = 0;
                object.ChuChuehWinRate = 0;
                object.HsuanWuWinRate = 0;
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
            if (message.OpenResultChingLong != null && message.hasOwnProperty("OpenResultChingLong"))
                if (typeof message.OpenResultChingLong === "number")
                    object.OpenResultChingLong = options.longs === String ? String(message.OpenResultChingLong) : message.OpenResultChingLong;
                else
                    object.OpenResultChingLong = options.longs === String ? $util.Long.prototype.toString.call(message.OpenResultChingLong) : options.longs === Number ? new $util.LongBits(message.OpenResultChingLong.low >>> 0, message.OpenResultChingLong.high >>> 0).toNumber() : message.OpenResultChingLong;
            if (message.OpenResultBaiHu != null && message.hasOwnProperty("OpenResultBaiHu"))
                if (typeof message.OpenResultBaiHu === "number")
                    object.OpenResultBaiHu = options.longs === String ? String(message.OpenResultBaiHu) : message.OpenResultBaiHu;
                else
                    object.OpenResultBaiHu = options.longs === String ? $util.Long.prototype.toString.call(message.OpenResultBaiHu) : options.longs === Number ? new $util.LongBits(message.OpenResultBaiHu.low >>> 0, message.OpenResultBaiHu.high >>> 0).toNumber() : message.OpenResultBaiHu;
            if (message.OpenResultChuChueh != null && message.hasOwnProperty("OpenResultChuChueh"))
                if (typeof message.OpenResultChuChueh === "number")
                    object.OpenResultChuChueh = options.longs === String ? String(message.OpenResultChuChueh) : message.OpenResultChuChueh;
                else
                    object.OpenResultChuChueh = options.longs === String ? $util.Long.prototype.toString.call(message.OpenResultChuChueh) : options.longs === Number ? new $util.LongBits(message.OpenResultChuChueh.low >>> 0, message.OpenResultChuChueh.high >>> 0).toNumber() : message.OpenResultChuChueh;
            if (message.OpenResultHsuanWu != null && message.hasOwnProperty("OpenResultHsuanWu"))
                if (typeof message.OpenResultHsuanWu === "number")
                    object.OpenResultHsuanWu = options.longs === String ? String(message.OpenResultHsuanWu) : message.OpenResultHsuanWu;
                else
                    object.OpenResultHsuanWu = options.longs === String ? $util.Long.prototype.toString.call(message.OpenResultHsuanWu) : options.longs === Number ? new $util.LongBits(message.OpenResultHsuanWu.low >>> 0, message.OpenResultHsuanWu.high >>> 0).toNumber() : message.OpenResultHsuanWu;
            if (message.SysTaxIncome != null && message.hasOwnProperty("SysTaxIncome"))
                if (typeof message.SysTaxIncome === "number")
                    object.SysTaxIncome = options.longs === String ? String(message.SysTaxIncome) : message.SysTaxIncome;
                else
                    object.SysTaxIncome = options.longs === String ? $util.Long.prototype.toString.call(message.SysTaxIncome) : options.longs === Number ? new $util.LongBits(message.SysTaxIncome.low >>> 0, message.SysTaxIncome.high >>> 0).toNumber() : message.SysTaxIncome;
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
                    object.UserInfo[j] = $root.brnn.Http_BRNN_UserInfo.toObject(message.UserInfo[j], options);
            }
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
                    object.LastGameUserBet[j] = $root.brnn.Http_BRNN_UserInfo.toObject(message.LastGameUserBet[j], options);
            }
            if (message.ChingLongWinRate != null && message.hasOwnProperty("ChingLongWinRate"))
                object.ChingLongWinRate = message.ChingLongWinRate;
            if (message.BaiHuWinRate != null && message.hasOwnProperty("BaiHuWinRate"))
                object.BaiHuWinRate = message.BaiHuWinRate;
            if (message.ChuChuehWinRate != null && message.hasOwnProperty("ChuChuehWinRate"))
                object.ChuChuehWinRate = message.ChuChuehWinRate;
            if (message.HsuanWuWinRate != null && message.hasOwnProperty("HsuanWuWinRate"))
                object.HsuanWuWinRate = message.HsuanWuWinRate;
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
         * Converts this Http_BRNN_TableDetail to JSON.
         * @function toJSON
         * @memberof brnn.Http_BRNN_TableDetail
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Http_BRNN_TableDetail.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Http_BRNN_TableDetail;
    })();

    brnn.Http_BRNN_UserInfo = (function() {

        /**
         * Properties of a Http_BRNN_UserInfo.
         * @memberof brnn
         * @interface IHttp_BRNN_UserInfo
         * @property {number} UserID Http_BRNN_UserInfo UserID
         * @property {number} UserType Http_BRNN_UserInfo UserType
         * @property {string} NickName Http_BRNN_UserInfo NickName
         * @property {number|Long} GameScore Http_BRNN_UserInfo GameScore
         * @property {number|Long} InitMoney Http_BRNN_UserInfo InitMoney
         * @property {number|Long} CurrentMoney Http_BRNN_UserInfo CurrentMoney
         * @property {number|Long} BetInfoChingLong Http_BRNN_UserInfo BetInfoChingLong
         * @property {number|Long} BetInfoBaiHu Http_BRNN_UserInfo BetInfoBaiHu
         * @property {number|Long} BetInfoChuChueh Http_BRNN_UserInfo BetInfoChuChueh
         * @property {number|Long} BetInfoHsuanWu Http_BRNN_UserInfo BetInfoHsuanWu
         * @property {number|Long} SumCharge Http_BRNN_UserInfo SumCharge
         * @property {number|Long} SumConvert Http_BRNN_UserInfo SumConvert
         * @property {number|Long} WinRate Http_BRNN_UserInfo WinRate
         * @property {number|Long} BetTotal Http_BRNN_UserInfo BetTotal
         * @property {boolean} IsVIP Http_BRNN_UserInfo IsVIP
         */

        /**
         * Constructs a new Http_BRNN_UserInfo.
         * @memberof brnn
         * @classdesc Represents a Http_BRNN_UserInfo.
         * @implements IHttp_BRNN_UserInfo
         * @constructor
         * @param {brnn.IHttp_BRNN_UserInfo=} [properties] Properties to set
         */
        function Http_BRNN_UserInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Http_BRNN_UserInfo UserID.
         * @member {number} UserID
         * @memberof brnn.Http_BRNN_UserInfo
         * @instance
         */
        Http_BRNN_UserInfo.prototype.UserID = 0;

        /**
         * Http_BRNN_UserInfo UserType.
         * @member {number} UserType
         * @memberof brnn.Http_BRNN_UserInfo
         * @instance
         */
        Http_BRNN_UserInfo.prototype.UserType = 0;

        /**
         * Http_BRNN_UserInfo NickName.
         * @member {string} NickName
         * @memberof brnn.Http_BRNN_UserInfo
         * @instance
         */
        Http_BRNN_UserInfo.prototype.NickName = "";

        /**
         * Http_BRNN_UserInfo GameScore.
         * @member {number|Long} GameScore
         * @memberof brnn.Http_BRNN_UserInfo
         * @instance
         */
        Http_BRNN_UserInfo.prototype.GameScore = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Http_BRNN_UserInfo InitMoney.
         * @member {number|Long} InitMoney
         * @memberof brnn.Http_BRNN_UserInfo
         * @instance
         */
        Http_BRNN_UserInfo.prototype.InitMoney = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Http_BRNN_UserInfo CurrentMoney.
         * @member {number|Long} CurrentMoney
         * @memberof brnn.Http_BRNN_UserInfo
         * @instance
         */
        Http_BRNN_UserInfo.prototype.CurrentMoney = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Http_BRNN_UserInfo BetInfoChingLong.
         * @member {number|Long} BetInfoChingLong
         * @memberof brnn.Http_BRNN_UserInfo
         * @instance
         */
        Http_BRNN_UserInfo.prototype.BetInfoChingLong = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Http_BRNN_UserInfo BetInfoBaiHu.
         * @member {number|Long} BetInfoBaiHu
         * @memberof brnn.Http_BRNN_UserInfo
         * @instance
         */
        Http_BRNN_UserInfo.prototype.BetInfoBaiHu = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Http_BRNN_UserInfo BetInfoChuChueh.
         * @member {number|Long} BetInfoChuChueh
         * @memberof brnn.Http_BRNN_UserInfo
         * @instance
         */
        Http_BRNN_UserInfo.prototype.BetInfoChuChueh = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Http_BRNN_UserInfo BetInfoHsuanWu.
         * @member {number|Long} BetInfoHsuanWu
         * @memberof brnn.Http_BRNN_UserInfo
         * @instance
         */
        Http_BRNN_UserInfo.prototype.BetInfoHsuanWu = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Http_BRNN_UserInfo SumCharge.
         * @member {number|Long} SumCharge
         * @memberof brnn.Http_BRNN_UserInfo
         * @instance
         */
        Http_BRNN_UserInfo.prototype.SumCharge = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Http_BRNN_UserInfo SumConvert.
         * @member {number|Long} SumConvert
         * @memberof brnn.Http_BRNN_UserInfo
         * @instance
         */
        Http_BRNN_UserInfo.prototype.SumConvert = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Http_BRNN_UserInfo WinRate.
         * @member {number|Long} WinRate
         * @memberof brnn.Http_BRNN_UserInfo
         * @instance
         */
        Http_BRNN_UserInfo.prototype.WinRate = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Http_BRNN_UserInfo BetTotal.
         * @member {number|Long} BetTotal
         * @memberof brnn.Http_BRNN_UserInfo
         * @instance
         */
        Http_BRNN_UserInfo.prototype.BetTotal = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Http_BRNN_UserInfo IsVIP.
         * @member {boolean} IsVIP
         * @memberof brnn.Http_BRNN_UserInfo
         * @instance
         */
        Http_BRNN_UserInfo.prototype.IsVIP = false;

        /**
         * Creates a new Http_BRNN_UserInfo instance using the specified properties.
         * @function create
         * @memberof brnn.Http_BRNN_UserInfo
         * @static
         * @param {brnn.IHttp_BRNN_UserInfo=} [properties] Properties to set
         * @returns {brnn.Http_BRNN_UserInfo} Http_BRNN_UserInfo instance
         */
        Http_BRNN_UserInfo.create = function create(properties) {
            return new Http_BRNN_UserInfo(properties);
        };

        /**
         * Encodes the specified Http_BRNN_UserInfo message. Does not implicitly {@link brnn.Http_BRNN_UserInfo.verify|verify} messages.
         * @function encode
         * @memberof brnn.Http_BRNN_UserInfo
         * @static
         * @param {brnn.IHttp_BRNN_UserInfo} message Http_BRNN_UserInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Http_BRNN_UserInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.UserID);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.UserType);
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.NickName);
            writer.uint32(/* id 4, wireType 0 =*/32).int64(message.GameScore);
            writer.uint32(/* id 5, wireType 0 =*/40).int64(message.InitMoney);
            writer.uint32(/* id 6, wireType 0 =*/48).int64(message.CurrentMoney);
            writer.uint32(/* id 7, wireType 0 =*/56).int64(message.BetInfoChingLong);
            writer.uint32(/* id 8, wireType 0 =*/64).int64(message.BetInfoBaiHu);
            writer.uint32(/* id 9, wireType 0 =*/72).int64(message.BetInfoChuChueh);
            writer.uint32(/* id 10, wireType 0 =*/80).int64(message.BetInfoHsuanWu);
            writer.uint32(/* id 11, wireType 0 =*/88).int64(message.SumCharge);
            writer.uint32(/* id 12, wireType 0 =*/96).int64(message.SumConvert);
            writer.uint32(/* id 13, wireType 0 =*/104).int64(message.WinRate);
            writer.uint32(/* id 14, wireType 0 =*/112).int64(message.BetTotal);
            writer.uint32(/* id 15, wireType 0 =*/120).bool(message.IsVIP);
            return writer;
        };

        /**
         * Encodes the specified Http_BRNN_UserInfo message, length delimited. Does not implicitly {@link brnn.Http_BRNN_UserInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof brnn.Http_BRNN_UserInfo
         * @static
         * @param {brnn.IHttp_BRNN_UserInfo} message Http_BRNN_UserInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Http_BRNN_UserInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Http_BRNN_UserInfo message from the specified reader or buffer.
         * @function decode
         * @memberof brnn.Http_BRNN_UserInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {brnn.Http_BRNN_UserInfo} Http_BRNN_UserInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Http_BRNN_UserInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.brnn.Http_BRNN_UserInfo();
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
                    message.BetInfoChingLong = reader.int64();
                    break;
                case 8:
                    message.BetInfoBaiHu = reader.int64();
                    break;
                case 9:
                    message.BetInfoChuChueh = reader.int64();
                    break;
                case 10:
                    message.BetInfoHsuanWu = reader.int64();
                    break;
                case 11:
                    message.SumCharge = reader.int64();
                    break;
                case 12:
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
            if (!message.hasOwnProperty("BetInfoChingLong"))
                throw $util.ProtocolError("missing required 'BetInfoChingLong'", { instance: message });
            if (!message.hasOwnProperty("BetInfoBaiHu"))
                throw $util.ProtocolError("missing required 'BetInfoBaiHu'", { instance: message });
            if (!message.hasOwnProperty("BetInfoChuChueh"))
                throw $util.ProtocolError("missing required 'BetInfoChuChueh'", { instance: message });
            if (!message.hasOwnProperty("BetInfoHsuanWu"))
                throw $util.ProtocolError("missing required 'BetInfoHsuanWu'", { instance: message });
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
         * Decodes a Http_BRNN_UserInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof brnn.Http_BRNN_UserInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {brnn.Http_BRNN_UserInfo} Http_BRNN_UserInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Http_BRNN_UserInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Http_BRNN_UserInfo message.
         * @function verify
         * @memberof brnn.Http_BRNN_UserInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Http_BRNN_UserInfo.verify = function verify(message) {
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
            if (!$util.isInteger(message.BetInfoChingLong) && !(message.BetInfoChingLong && $util.isInteger(message.BetInfoChingLong.low) && $util.isInteger(message.BetInfoChingLong.high)))
                return "BetInfoChingLong: integer|Long expected";
            if (!$util.isInteger(message.BetInfoBaiHu) && !(message.BetInfoBaiHu && $util.isInteger(message.BetInfoBaiHu.low) && $util.isInteger(message.BetInfoBaiHu.high)))
                return "BetInfoBaiHu: integer|Long expected";
            if (!$util.isInteger(message.BetInfoChuChueh) && !(message.BetInfoChuChueh && $util.isInteger(message.BetInfoChuChueh.low) && $util.isInteger(message.BetInfoChuChueh.high)))
                return "BetInfoChuChueh: integer|Long expected";
            if (!$util.isInteger(message.BetInfoHsuanWu) && !(message.BetInfoHsuanWu && $util.isInteger(message.BetInfoHsuanWu.low) && $util.isInteger(message.BetInfoHsuanWu.high)))
                return "BetInfoHsuanWu: integer|Long expected";
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
         * Creates a Http_BRNN_UserInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof brnn.Http_BRNN_UserInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {brnn.Http_BRNN_UserInfo} Http_BRNN_UserInfo
         */
        Http_BRNN_UserInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.brnn.Http_BRNN_UserInfo)
                return object;
            var message = new $root.brnn.Http_BRNN_UserInfo();
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
            if (object.BetInfoChingLong != null)
                if ($util.Long)
                    (message.BetInfoChingLong = $util.Long.fromValue(object.BetInfoChingLong)).unsigned = false;
                else if (typeof object.BetInfoChingLong === "string")
                    message.BetInfoChingLong = parseInt(object.BetInfoChingLong, 10);
                else if (typeof object.BetInfoChingLong === "number")
                    message.BetInfoChingLong = object.BetInfoChingLong;
                else if (typeof object.BetInfoChingLong === "object")
                    message.BetInfoChingLong = new $util.LongBits(object.BetInfoChingLong.low >>> 0, object.BetInfoChingLong.high >>> 0).toNumber();
            if (object.BetInfoBaiHu != null)
                if ($util.Long)
                    (message.BetInfoBaiHu = $util.Long.fromValue(object.BetInfoBaiHu)).unsigned = false;
                else if (typeof object.BetInfoBaiHu === "string")
                    message.BetInfoBaiHu = parseInt(object.BetInfoBaiHu, 10);
                else if (typeof object.BetInfoBaiHu === "number")
                    message.BetInfoBaiHu = object.BetInfoBaiHu;
                else if (typeof object.BetInfoBaiHu === "object")
                    message.BetInfoBaiHu = new $util.LongBits(object.BetInfoBaiHu.low >>> 0, object.BetInfoBaiHu.high >>> 0).toNumber();
            if (object.BetInfoChuChueh != null)
                if ($util.Long)
                    (message.BetInfoChuChueh = $util.Long.fromValue(object.BetInfoChuChueh)).unsigned = false;
                else if (typeof object.BetInfoChuChueh === "string")
                    message.BetInfoChuChueh = parseInt(object.BetInfoChuChueh, 10);
                else if (typeof object.BetInfoChuChueh === "number")
                    message.BetInfoChuChueh = object.BetInfoChuChueh;
                else if (typeof object.BetInfoChuChueh === "object")
                    message.BetInfoChuChueh = new $util.LongBits(object.BetInfoChuChueh.low >>> 0, object.BetInfoChuChueh.high >>> 0).toNumber();
            if (object.BetInfoHsuanWu != null)
                if ($util.Long)
                    (message.BetInfoHsuanWu = $util.Long.fromValue(object.BetInfoHsuanWu)).unsigned = false;
                else if (typeof object.BetInfoHsuanWu === "string")
                    message.BetInfoHsuanWu = parseInt(object.BetInfoHsuanWu, 10);
                else if (typeof object.BetInfoHsuanWu === "number")
                    message.BetInfoHsuanWu = object.BetInfoHsuanWu;
                else if (typeof object.BetInfoHsuanWu === "object")
                    message.BetInfoHsuanWu = new $util.LongBits(object.BetInfoHsuanWu.low >>> 0, object.BetInfoHsuanWu.high >>> 0).toNumber();
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
         * Creates a plain object from a Http_BRNN_UserInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof brnn.Http_BRNN_UserInfo
         * @static
         * @param {brnn.Http_BRNN_UserInfo} message Http_BRNN_UserInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Http_BRNN_UserInfo.toObject = function toObject(message, options) {
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
                    object.BetInfoChingLong = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.BetInfoChingLong = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.BetInfoBaiHu = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.BetInfoBaiHu = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.BetInfoChuChueh = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.BetInfoChuChueh = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.BetInfoHsuanWu = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.BetInfoHsuanWu = options.longs === String ? "0" : 0;
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
            if (message.BetInfoChingLong != null && message.hasOwnProperty("BetInfoChingLong"))
                if (typeof message.BetInfoChingLong === "number")
                    object.BetInfoChingLong = options.longs === String ? String(message.BetInfoChingLong) : message.BetInfoChingLong;
                else
                    object.BetInfoChingLong = options.longs === String ? $util.Long.prototype.toString.call(message.BetInfoChingLong) : options.longs === Number ? new $util.LongBits(message.BetInfoChingLong.low >>> 0, message.BetInfoChingLong.high >>> 0).toNumber() : message.BetInfoChingLong;
            if (message.BetInfoBaiHu != null && message.hasOwnProperty("BetInfoBaiHu"))
                if (typeof message.BetInfoBaiHu === "number")
                    object.BetInfoBaiHu = options.longs === String ? String(message.BetInfoBaiHu) : message.BetInfoBaiHu;
                else
                    object.BetInfoBaiHu = options.longs === String ? $util.Long.prototype.toString.call(message.BetInfoBaiHu) : options.longs === Number ? new $util.LongBits(message.BetInfoBaiHu.low >>> 0, message.BetInfoBaiHu.high >>> 0).toNumber() : message.BetInfoBaiHu;
            if (message.BetInfoChuChueh != null && message.hasOwnProperty("BetInfoChuChueh"))
                if (typeof message.BetInfoChuChueh === "number")
                    object.BetInfoChuChueh = options.longs === String ? String(message.BetInfoChuChueh) : message.BetInfoChuChueh;
                else
                    object.BetInfoChuChueh = options.longs === String ? $util.Long.prototype.toString.call(message.BetInfoChuChueh) : options.longs === Number ? new $util.LongBits(message.BetInfoChuChueh.low >>> 0, message.BetInfoChuChueh.high >>> 0).toNumber() : message.BetInfoChuChueh;
            if (message.BetInfoHsuanWu != null && message.hasOwnProperty("BetInfoHsuanWu"))
                if (typeof message.BetInfoHsuanWu === "number")
                    object.BetInfoHsuanWu = options.longs === String ? String(message.BetInfoHsuanWu) : message.BetInfoHsuanWu;
                else
                    object.BetInfoHsuanWu = options.longs === String ? $util.Long.prototype.toString.call(message.BetInfoHsuanWu) : options.longs === Number ? new $util.LongBits(message.BetInfoHsuanWu.low >>> 0, message.BetInfoHsuanWu.high >>> 0).toNumber() : message.BetInfoHsuanWu;
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
         * Converts this Http_BRNN_UserInfo to JSON.
         * @function toJSON
         * @memberof brnn.Http_BRNN_UserInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Http_BRNN_UserInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Http_BRNN_UserInfo;
    })();

    brnn.BRNN_ResultCardList = (function() {

        /**
         * Properties of a BRNN_ResultCardList.
         * @memberof brnn
         * @interface IBRNN_ResultCardList
         * @property {Array.<brnn.IBRNN_Poker>|null} [PokerList] BRNN_ResultCardList PokerList
         */

        /**
         * Constructs a new BRNN_ResultCardList.
         * @memberof brnn
         * @classdesc Represents a BRNN_ResultCardList.
         * @implements IBRNN_ResultCardList
         * @constructor
         * @param {brnn.IBRNN_ResultCardList=} [properties] Properties to set
         */
        function BRNN_ResultCardList(properties) {
            this.PokerList = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BRNN_ResultCardList PokerList.
         * @member {Array.<brnn.IBRNN_Poker>} PokerList
         * @memberof brnn.BRNN_ResultCardList
         * @instance
         */
        BRNN_ResultCardList.prototype.PokerList = $util.emptyArray;

        /**
         * Creates a new BRNN_ResultCardList instance using the specified properties.
         * @function create
         * @memberof brnn.BRNN_ResultCardList
         * @static
         * @param {brnn.IBRNN_ResultCardList=} [properties] Properties to set
         * @returns {brnn.BRNN_ResultCardList} BRNN_ResultCardList instance
         */
        BRNN_ResultCardList.create = function create(properties) {
            return new BRNN_ResultCardList(properties);
        };

        /**
         * Encodes the specified BRNN_ResultCardList message. Does not implicitly {@link brnn.BRNN_ResultCardList.verify|verify} messages.
         * @function encode
         * @memberof brnn.BRNN_ResultCardList
         * @static
         * @param {brnn.IBRNN_ResultCardList} message BRNN_ResultCardList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BRNN_ResultCardList.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.PokerList != null && message.PokerList.length)
                for (var i = 0; i < message.PokerList.length; ++i)
                    $root.brnn.BRNN_Poker.encode(message.PokerList[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified BRNN_ResultCardList message, length delimited. Does not implicitly {@link brnn.BRNN_ResultCardList.verify|verify} messages.
         * @function encodeDelimited
         * @memberof brnn.BRNN_ResultCardList
         * @static
         * @param {brnn.IBRNN_ResultCardList} message BRNN_ResultCardList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BRNN_ResultCardList.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BRNN_ResultCardList message from the specified reader or buffer.
         * @function decode
         * @memberof brnn.BRNN_ResultCardList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {brnn.BRNN_ResultCardList} BRNN_ResultCardList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BRNN_ResultCardList.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.brnn.BRNN_ResultCardList();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.PokerList && message.PokerList.length))
                        message.PokerList = [];
                    message.PokerList.push($root.brnn.BRNN_Poker.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a BRNN_ResultCardList message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof brnn.BRNN_ResultCardList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {brnn.BRNN_ResultCardList} BRNN_ResultCardList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BRNN_ResultCardList.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BRNN_ResultCardList message.
         * @function verify
         * @memberof brnn.BRNN_ResultCardList
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BRNN_ResultCardList.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.PokerList != null && message.hasOwnProperty("PokerList")) {
                if (!Array.isArray(message.PokerList))
                    return "PokerList: array expected";
                for (var i = 0; i < message.PokerList.length; ++i) {
                    var error = $root.brnn.BRNN_Poker.verify(message.PokerList[i]);
                    if (error)
                        return "PokerList." + error;
                }
            }
            return null;
        };

        /**
         * Creates a BRNN_ResultCardList message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof brnn.BRNN_ResultCardList
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {brnn.BRNN_ResultCardList} BRNN_ResultCardList
         */
        BRNN_ResultCardList.fromObject = function fromObject(object) {
            if (object instanceof $root.brnn.BRNN_ResultCardList)
                return object;
            var message = new $root.brnn.BRNN_ResultCardList();
            if (object.PokerList) {
                if (!Array.isArray(object.PokerList))
                    throw TypeError(".brnn.BRNN_ResultCardList.PokerList: array expected");
                message.PokerList = [];
                for (var i = 0; i < object.PokerList.length; ++i) {
                    if (typeof object.PokerList[i] !== "object")
                        throw TypeError(".brnn.BRNN_ResultCardList.PokerList: object expected");
                    message.PokerList[i] = $root.brnn.BRNN_Poker.fromObject(object.PokerList[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a BRNN_ResultCardList message. Also converts values to other types if specified.
         * @function toObject
         * @memberof brnn.BRNN_ResultCardList
         * @static
         * @param {brnn.BRNN_ResultCardList} message BRNN_ResultCardList
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BRNN_ResultCardList.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.PokerList = [];
            if (message.PokerList && message.PokerList.length) {
                object.PokerList = [];
                for (var j = 0; j < message.PokerList.length; ++j)
                    object.PokerList[j] = $root.brnn.BRNN_Poker.toObject(message.PokerList[j], options);
            }
            return object;
        };

        /**
         * Converts this BRNN_ResultCardList to JSON.
         * @function toJSON
         * @memberof brnn.BRNN_ResultCardList
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BRNN_ResultCardList.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BRNN_ResultCardList;
    })();

    brnn.BRNN_Poker = (function() {

        /**
         * Properties of a BRNN_Poker.
         * @memberof brnn
         * @interface IBRNN_Poker
         * @property {Array.<number>|null} [RetType] BRNN_Poker RetType
         */

        /**
         * Constructs a new BRNN_Poker.
         * @memberof brnn
         * @classdesc Represents a BRNN_Poker.
         * @implements IBRNN_Poker
         * @constructor
         * @param {brnn.IBRNN_Poker=} [properties] Properties to set
         */
        function BRNN_Poker(properties) {
            this.RetType = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BRNN_Poker RetType.
         * @member {Array.<number>} RetType
         * @memberof brnn.BRNN_Poker
         * @instance
         */
        BRNN_Poker.prototype.RetType = $util.emptyArray;

        /**
         * Creates a new BRNN_Poker instance using the specified properties.
         * @function create
         * @memberof brnn.BRNN_Poker
         * @static
         * @param {brnn.IBRNN_Poker=} [properties] Properties to set
         * @returns {brnn.BRNN_Poker} BRNN_Poker instance
         */
        BRNN_Poker.create = function create(properties) {
            return new BRNN_Poker(properties);
        };

        /**
         * Encodes the specified BRNN_Poker message. Does not implicitly {@link brnn.BRNN_Poker.verify|verify} messages.
         * @function encode
         * @memberof brnn.BRNN_Poker
         * @static
         * @param {brnn.IBRNN_Poker} message BRNN_Poker message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BRNN_Poker.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.RetType != null && message.RetType.length) {
                writer.uint32(/* id 1, wireType 2 =*/10).fork();
                for (var i = 0; i < message.RetType.length; ++i)
                    writer.int32(message.RetType[i]);
                writer.ldelim();
            }
            return writer;
        };

        /**
         * Encodes the specified BRNN_Poker message, length delimited. Does not implicitly {@link brnn.BRNN_Poker.verify|verify} messages.
         * @function encodeDelimited
         * @memberof brnn.BRNN_Poker
         * @static
         * @param {brnn.IBRNN_Poker} message BRNN_Poker message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BRNN_Poker.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BRNN_Poker message from the specified reader or buffer.
         * @function decode
         * @memberof brnn.BRNN_Poker
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {brnn.BRNN_Poker} BRNN_Poker
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BRNN_Poker.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.brnn.BRNN_Poker();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.RetType && message.RetType.length))
                        message.RetType = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.RetType.push(reader.int32());
                    } else
                        message.RetType.push(reader.int32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a BRNN_Poker message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof brnn.BRNN_Poker
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {brnn.BRNN_Poker} BRNN_Poker
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BRNN_Poker.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BRNN_Poker message.
         * @function verify
         * @memberof brnn.BRNN_Poker
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BRNN_Poker.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.RetType != null && message.hasOwnProperty("RetType")) {
                if (!Array.isArray(message.RetType))
                    return "RetType: array expected";
                for (var i = 0; i < message.RetType.length; ++i)
                    if (!$util.isInteger(message.RetType[i]))
                        return "RetType: integer[] expected";
            }
            return null;
        };

        /**
         * Creates a BRNN_Poker message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof brnn.BRNN_Poker
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {brnn.BRNN_Poker} BRNN_Poker
         */
        BRNN_Poker.fromObject = function fromObject(object) {
            if (object instanceof $root.brnn.BRNN_Poker)
                return object;
            var message = new $root.brnn.BRNN_Poker();
            if (object.RetType) {
                if (!Array.isArray(object.RetType))
                    throw TypeError(".brnn.BRNN_Poker.RetType: array expected");
                message.RetType = [];
                for (var i = 0; i < object.RetType.length; ++i)
                    message.RetType[i] = object.RetType[i] | 0;
            }
            return message;
        };

        /**
         * Creates a plain object from a BRNN_Poker message. Also converts values to other types if specified.
         * @function toObject
         * @memberof brnn.BRNN_Poker
         * @static
         * @param {brnn.BRNN_Poker} message BRNN_Poker
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BRNN_Poker.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.RetType = [];
            if (message.RetType && message.RetType.length) {
                object.RetType = [];
                for (var j = 0; j < message.RetType.length; ++j)
                    object.RetType[j] = message.RetType[j];
            }
            return object;
        };

        /**
         * Converts this BRNN_Poker to JSON.
         * @function toJSON
         * @memberof brnn.BRNN_Poker
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BRNN_Poker.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BRNN_Poker;
    })();

    return brnn;
})();

module.exports = $root;
