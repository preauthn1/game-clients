/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

//var $protobuf = require("protobufjs/minimal");
var $protobuf = protobuf;

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.GameMsg_DFDC = (function() {

    /**
     * Namespace GameMsg_DFDC.
     * @exports GameMsg_DFDC
     * @namespace
     */
    var GameMsg_DFDC = {};

    GameMsg_DFDC.DFDC_Setting = (function() {

        /**
         * Properties of a DFDC_Setting.
         * @memberof GameMsg_DFDC
         * @interface IDFDC_Setting
         * @property {Array.<number>|null} [BetCount] DFDC_Setting BetCount
         * @property {Array.<GameMsg_DFDC.IDFDC_ReelSetting>|null} [ReelSetting] DFDC_Setting ReelSetting
         * @property {number|null} [RowCounts] DFDC_Setting RowCounts
         * @property {number} TotalPayLine DFDC_Setting TotalPayLine
         * @property {Array.<number>|null} [BigWinStep] DFDC_Setting BigWinStep
         * @property {number} PayLineMode DFDC_Setting PayLineMode
         * @property {Array.<GameMsg_DFDC.IDFDC_SymbolPayTable>|null} [SymbolPayTable] DFDC_Setting SymbolPayTable
         * @property {Array.<GameMsg_DFDC.IDFDC_UnitPrefix>|null} [UnitPrefix] DFDC_Setting UnitPrefix
         */

        /**
         * Constructs a new DFDC_Setting.
         * @memberof GameMsg_DFDC
         * @classdesc Represents a DFDC_Setting.
         * @implements IDFDC_Setting
         * @constructor
         * @param {GameMsg_DFDC.IDFDC_Setting=} [properties] Properties to set
         */
        function DFDC_Setting(properties) {
            this.BetCount = [];
            this.ReelSetting = [];
            this.BigWinStep = [];
            this.SymbolPayTable = [];
            this.UnitPrefix = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DFDC_Setting BetCount.
         * @member {Array.<number>} BetCount
         * @memberof GameMsg_DFDC.DFDC_Setting
         * @instance
         */
        DFDC_Setting.prototype.BetCount = $util.emptyArray;

        /**
         * DFDC_Setting ReelSetting.
         * @member {Array.<GameMsg_DFDC.IDFDC_ReelSetting>} ReelSetting
         * @memberof GameMsg_DFDC.DFDC_Setting
         * @instance
         */
        DFDC_Setting.prototype.ReelSetting = $util.emptyArray;

        /**
         * DFDC_Setting RowCounts.
         * @member {number} RowCounts
         * @memberof GameMsg_DFDC.DFDC_Setting
         * @instance
         */
        DFDC_Setting.prototype.RowCounts = 0;

        /**
         * DFDC_Setting TotalPayLine.
         * @member {number} TotalPayLine
         * @memberof GameMsg_DFDC.DFDC_Setting
         * @instance
         */
        DFDC_Setting.prototype.TotalPayLine = 0;

        /**
         * DFDC_Setting BigWinStep.
         * @member {Array.<number>} BigWinStep
         * @memberof GameMsg_DFDC.DFDC_Setting
         * @instance
         */
        DFDC_Setting.prototype.BigWinStep = $util.emptyArray;

        /**
         * DFDC_Setting PayLineMode.
         * @member {number} PayLineMode
         * @memberof GameMsg_DFDC.DFDC_Setting
         * @instance
         */
        DFDC_Setting.prototype.PayLineMode = 0;

        /**
         * DFDC_Setting SymbolPayTable.
         * @member {Array.<GameMsg_DFDC.IDFDC_SymbolPayTable>} SymbolPayTable
         * @memberof GameMsg_DFDC.DFDC_Setting
         * @instance
         */
        DFDC_Setting.prototype.SymbolPayTable = $util.emptyArray;

        /**
         * DFDC_Setting UnitPrefix.
         * @member {Array.<GameMsg_DFDC.IDFDC_UnitPrefix>} UnitPrefix
         * @memberof GameMsg_DFDC.DFDC_Setting
         * @instance
         */
        DFDC_Setting.prototype.UnitPrefix = $util.emptyArray;

        /**
         * Creates a new DFDC_Setting instance using the specified properties.
         * @function create
         * @memberof GameMsg_DFDC.DFDC_Setting
         * @static
         * @param {GameMsg_DFDC.IDFDC_Setting=} [properties] Properties to set
         * @returns {GameMsg_DFDC.DFDC_Setting} DFDC_Setting instance
         */
        DFDC_Setting.create = function create(properties) {
            return new DFDC_Setting(properties);
        };

        /**
         * Encodes the specified DFDC_Setting message. Does not implicitly {@link GameMsg_DFDC.DFDC_Setting.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_DFDC.DFDC_Setting
         * @static
         * @param {GameMsg_DFDC.IDFDC_Setting} message DFDC_Setting message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DFDC_Setting.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.BetCount != null && message.BetCount.length) {
                writer.uint32(/* id 1, wireType 2 =*/10).fork();
                for (var i = 0; i < message.BetCount.length; ++i)
                    writer.int32(message.BetCount[i]);
                writer.ldelim();
            }
            if (message.ReelSetting != null && message.ReelSetting.length)
                for (var i = 0; i < message.ReelSetting.length; ++i)
                    $root.GameMsg_DFDC.DFDC_ReelSetting.encode(message.ReelSetting[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.RowCounts != null && message.hasOwnProperty("RowCounts"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.RowCounts);
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.TotalPayLine);
            if (message.BigWinStep != null && message.BigWinStep.length) {
                writer.uint32(/* id 5, wireType 2 =*/42).fork();
                for (var i = 0; i < message.BigWinStep.length; ++i)
                    writer.int32(message.BigWinStep[i]);
                writer.ldelim();
            }
            writer.uint32(/* id 6, wireType 0 =*/48).int32(message.PayLineMode);
            if (message.SymbolPayTable != null && message.SymbolPayTable.length)
                for (var i = 0; i < message.SymbolPayTable.length; ++i)
                    $root.GameMsg_DFDC.DFDC_SymbolPayTable.encode(message.SymbolPayTable[i], writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
            if (message.UnitPrefix != null && message.UnitPrefix.length)
                for (var i = 0; i < message.UnitPrefix.length; ++i)
                    $root.GameMsg_DFDC.DFDC_UnitPrefix.encode(message.UnitPrefix[i], writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified DFDC_Setting message, length delimited. Does not implicitly {@link GameMsg_DFDC.DFDC_Setting.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_DFDC.DFDC_Setting
         * @static
         * @param {GameMsg_DFDC.IDFDC_Setting} message DFDC_Setting message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DFDC_Setting.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DFDC_Setting message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_DFDC.DFDC_Setting
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_DFDC.DFDC_Setting} DFDC_Setting
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DFDC_Setting.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_DFDC.DFDC_Setting();
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
                    if (!(message.ReelSetting && message.ReelSetting.length))
                        message.ReelSetting = [];
                    message.ReelSetting.push($root.GameMsg_DFDC.DFDC_ReelSetting.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.RowCounts = reader.int32();
                    break;
                case 4:
                    message.TotalPayLine = reader.int32();
                    break;
                case 5:
                    if (!(message.BigWinStep && message.BigWinStep.length))
                        message.BigWinStep = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.BigWinStep.push(reader.int32());
                    } else
                        message.BigWinStep.push(reader.int32());
                    break;
                case 6:
                    message.PayLineMode = reader.int32();
                    break;
                case 7:
                    if (!(message.SymbolPayTable && message.SymbolPayTable.length))
                        message.SymbolPayTable = [];
                    message.SymbolPayTable.push($root.GameMsg_DFDC.DFDC_SymbolPayTable.decode(reader, reader.uint32()));
                    break;
                case 8:
                    if (!(message.UnitPrefix && message.UnitPrefix.length))
                        message.UnitPrefix = [];
                    message.UnitPrefix.push($root.GameMsg_DFDC.DFDC_UnitPrefix.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("TotalPayLine"))
                throw $util.ProtocolError("missing required 'TotalPayLine'", { instance: message });
            if (!message.hasOwnProperty("PayLineMode"))
                throw $util.ProtocolError("missing required 'PayLineMode'", { instance: message });
            return message;
        };

        /**
         * Decodes a DFDC_Setting message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_DFDC.DFDC_Setting
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_DFDC.DFDC_Setting} DFDC_Setting
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DFDC_Setting.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DFDC_Setting message.
         * @function verify
         * @memberof GameMsg_DFDC.DFDC_Setting
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DFDC_Setting.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.BetCount != null && message.hasOwnProperty("BetCount")) {
                if (!Array.isArray(message.BetCount))
                    return "BetCount: array expected";
                for (var i = 0; i < message.BetCount.length; ++i)
                    if (!$util.isInteger(message.BetCount[i]))
                        return "BetCount: integer[] expected";
            }
            if (message.ReelSetting != null && message.hasOwnProperty("ReelSetting")) {
                if (!Array.isArray(message.ReelSetting))
                    return "ReelSetting: array expected";
                for (var i = 0; i < message.ReelSetting.length; ++i) {
                    var error = $root.GameMsg_DFDC.DFDC_ReelSetting.verify(message.ReelSetting[i]);
                    if (error)
                        return "ReelSetting." + error;
                }
            }
            if (message.RowCounts != null && message.hasOwnProperty("RowCounts"))
                if (!$util.isInteger(message.RowCounts))
                    return "RowCounts: integer expected";
            if (!$util.isInteger(message.TotalPayLine))
                return "TotalPayLine: integer expected";
            if (message.BigWinStep != null && message.hasOwnProperty("BigWinStep")) {
                if (!Array.isArray(message.BigWinStep))
                    return "BigWinStep: array expected";
                for (var i = 0; i < message.BigWinStep.length; ++i)
                    if (!$util.isInteger(message.BigWinStep[i]))
                        return "BigWinStep: integer[] expected";
            }
            if (!$util.isInteger(message.PayLineMode))
                return "PayLineMode: integer expected";
            if (message.SymbolPayTable != null && message.hasOwnProperty("SymbolPayTable")) {
                if (!Array.isArray(message.SymbolPayTable))
                    return "SymbolPayTable: array expected";
                for (var i = 0; i < message.SymbolPayTable.length; ++i) {
                    var error = $root.GameMsg_DFDC.DFDC_SymbolPayTable.verify(message.SymbolPayTable[i]);
                    if (error)
                        return "SymbolPayTable." + error;
                }
            }
            if (message.UnitPrefix != null && message.hasOwnProperty("UnitPrefix")) {
                if (!Array.isArray(message.UnitPrefix))
                    return "UnitPrefix: array expected";
                for (var i = 0; i < message.UnitPrefix.length; ++i) {
                    var error = $root.GameMsg_DFDC.DFDC_UnitPrefix.verify(message.UnitPrefix[i]);
                    if (error)
                        return "UnitPrefix." + error;
                }
            }
            return null;
        };

        /**
         * Creates a DFDC_Setting message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_DFDC.DFDC_Setting
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_DFDC.DFDC_Setting} DFDC_Setting
         */
        DFDC_Setting.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_DFDC.DFDC_Setting)
                return object;
            var message = new $root.GameMsg_DFDC.DFDC_Setting();
            if (object.BetCount) {
                if (!Array.isArray(object.BetCount))
                    throw TypeError(".GameMsg_DFDC.DFDC_Setting.BetCount: array expected");
                message.BetCount = [];
                for (var i = 0; i < object.BetCount.length; ++i)
                    message.BetCount[i] = object.BetCount[i] | 0;
            }
            if (object.ReelSetting) {
                if (!Array.isArray(object.ReelSetting))
                    throw TypeError(".GameMsg_DFDC.DFDC_Setting.ReelSetting: array expected");
                message.ReelSetting = [];
                for (var i = 0; i < object.ReelSetting.length; ++i) {
                    if (typeof object.ReelSetting[i] !== "object")
                        throw TypeError(".GameMsg_DFDC.DFDC_Setting.ReelSetting: object expected");
                    message.ReelSetting[i] = $root.GameMsg_DFDC.DFDC_ReelSetting.fromObject(object.ReelSetting[i]);
                }
            }
            if (object.RowCounts != null)
                message.RowCounts = object.RowCounts | 0;
            if (object.TotalPayLine != null)
                message.TotalPayLine = object.TotalPayLine | 0;
            if (object.BigWinStep) {
                if (!Array.isArray(object.BigWinStep))
                    throw TypeError(".GameMsg_DFDC.DFDC_Setting.BigWinStep: array expected");
                message.BigWinStep = [];
                for (var i = 0; i < object.BigWinStep.length; ++i)
                    message.BigWinStep[i] = object.BigWinStep[i] | 0;
            }
            if (object.PayLineMode != null)
                message.PayLineMode = object.PayLineMode | 0;
            if (object.SymbolPayTable) {
                if (!Array.isArray(object.SymbolPayTable))
                    throw TypeError(".GameMsg_DFDC.DFDC_Setting.SymbolPayTable: array expected");
                message.SymbolPayTable = [];
                for (var i = 0; i < object.SymbolPayTable.length; ++i) {
                    if (typeof object.SymbolPayTable[i] !== "object")
                        throw TypeError(".GameMsg_DFDC.DFDC_Setting.SymbolPayTable: object expected");
                    message.SymbolPayTable[i] = $root.GameMsg_DFDC.DFDC_SymbolPayTable.fromObject(object.SymbolPayTable[i]);
                }
            }
            if (object.UnitPrefix) {
                if (!Array.isArray(object.UnitPrefix))
                    throw TypeError(".GameMsg_DFDC.DFDC_Setting.UnitPrefix: array expected");
                message.UnitPrefix = [];
                for (var i = 0; i < object.UnitPrefix.length; ++i) {
                    if (typeof object.UnitPrefix[i] !== "object")
                        throw TypeError(".GameMsg_DFDC.DFDC_Setting.UnitPrefix: object expected");
                    message.UnitPrefix[i] = $root.GameMsg_DFDC.DFDC_UnitPrefix.fromObject(object.UnitPrefix[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a DFDC_Setting message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_DFDC.DFDC_Setting
         * @static
         * @param {GameMsg_DFDC.DFDC_Setting} message DFDC_Setting
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DFDC_Setting.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.BetCount = [];
                object.ReelSetting = [];
                object.BigWinStep = [];
                object.SymbolPayTable = [];
                object.UnitPrefix = [];
            }
            if (options.defaults) {
                object.RowCounts = 0;
                object.TotalPayLine = 0;
                object.PayLineMode = 0;
            }
            if (message.BetCount && message.BetCount.length) {
                object.BetCount = [];
                for (var j = 0; j < message.BetCount.length; ++j)
                    object.BetCount[j] = message.BetCount[j];
            }
            if (message.ReelSetting && message.ReelSetting.length) {
                object.ReelSetting = [];
                for (var j = 0; j < message.ReelSetting.length; ++j)
                    object.ReelSetting[j] = $root.GameMsg_DFDC.DFDC_ReelSetting.toObject(message.ReelSetting[j], options);
            }
            if (message.RowCounts != null && message.hasOwnProperty("RowCounts"))
                object.RowCounts = message.RowCounts;
            if (message.TotalPayLine != null && message.hasOwnProperty("TotalPayLine"))
                object.TotalPayLine = message.TotalPayLine;
            if (message.BigWinStep && message.BigWinStep.length) {
                object.BigWinStep = [];
                for (var j = 0; j < message.BigWinStep.length; ++j)
                    object.BigWinStep[j] = message.BigWinStep[j];
            }
            if (message.PayLineMode != null && message.hasOwnProperty("PayLineMode"))
                object.PayLineMode = message.PayLineMode;
            if (message.SymbolPayTable && message.SymbolPayTable.length) {
                object.SymbolPayTable = [];
                for (var j = 0; j < message.SymbolPayTable.length; ++j)
                    object.SymbolPayTable[j] = $root.GameMsg_DFDC.DFDC_SymbolPayTable.toObject(message.SymbolPayTable[j], options);
            }
            if (message.UnitPrefix && message.UnitPrefix.length) {
                object.UnitPrefix = [];
                for (var j = 0; j < message.UnitPrefix.length; ++j)
                    object.UnitPrefix[j] = $root.GameMsg_DFDC.DFDC_UnitPrefix.toObject(message.UnitPrefix[j], options);
            }
            return object;
        };

        /**
         * Converts this DFDC_Setting to JSON.
         * @function toJSON
         * @memberof GameMsg_DFDC.DFDC_Setting
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DFDC_Setting.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return DFDC_Setting;
    })();

    GameMsg_DFDC.DFDC_FreeOrPayMsg = (function() {

        /**
         * Properties of a DFDC_FreeOrPayMsg.
         * @memberof GameMsg_DFDC
         * @interface IDFDC_FreeOrPayMsg
         * @property {number} FreeCount DFDC_FreeOrPayMsg FreeCount
         * @property {Array.<GameMsg_DFDC.IDFDC_ReelSetting>|null} [ReelSetting] DFDC_FreeOrPayMsg ReelSetting
         */

        /**
         * Constructs a new DFDC_FreeOrPayMsg.
         * @memberof GameMsg_DFDC
         * @classdesc Represents a DFDC_FreeOrPayMsg.
         * @implements IDFDC_FreeOrPayMsg
         * @constructor
         * @param {GameMsg_DFDC.IDFDC_FreeOrPayMsg=} [properties] Properties to set
         */
        function DFDC_FreeOrPayMsg(properties) {
            this.ReelSetting = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DFDC_FreeOrPayMsg FreeCount.
         * @member {number} FreeCount
         * @memberof GameMsg_DFDC.DFDC_FreeOrPayMsg
         * @instance
         */
        DFDC_FreeOrPayMsg.prototype.FreeCount = 0;

        /**
         * DFDC_FreeOrPayMsg ReelSetting.
         * @member {Array.<GameMsg_DFDC.IDFDC_ReelSetting>} ReelSetting
         * @memberof GameMsg_DFDC.DFDC_FreeOrPayMsg
         * @instance
         */
        DFDC_FreeOrPayMsg.prototype.ReelSetting = $util.emptyArray;

        /**
         * Creates a new DFDC_FreeOrPayMsg instance using the specified properties.
         * @function create
         * @memberof GameMsg_DFDC.DFDC_FreeOrPayMsg
         * @static
         * @param {GameMsg_DFDC.IDFDC_FreeOrPayMsg=} [properties] Properties to set
         * @returns {GameMsg_DFDC.DFDC_FreeOrPayMsg} DFDC_FreeOrPayMsg instance
         */
        DFDC_FreeOrPayMsg.create = function create(properties) {
            return new DFDC_FreeOrPayMsg(properties);
        };

        /**
         * Encodes the specified DFDC_FreeOrPayMsg message. Does not implicitly {@link GameMsg_DFDC.DFDC_FreeOrPayMsg.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_DFDC.DFDC_FreeOrPayMsg
         * @static
         * @param {GameMsg_DFDC.IDFDC_FreeOrPayMsg} message DFDC_FreeOrPayMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DFDC_FreeOrPayMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.FreeCount);
            if (message.ReelSetting != null && message.ReelSetting.length)
                for (var i = 0; i < message.ReelSetting.length; ++i)
                    $root.GameMsg_DFDC.DFDC_ReelSetting.encode(message.ReelSetting[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified DFDC_FreeOrPayMsg message, length delimited. Does not implicitly {@link GameMsg_DFDC.DFDC_FreeOrPayMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_DFDC.DFDC_FreeOrPayMsg
         * @static
         * @param {GameMsg_DFDC.IDFDC_FreeOrPayMsg} message DFDC_FreeOrPayMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DFDC_FreeOrPayMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DFDC_FreeOrPayMsg message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_DFDC.DFDC_FreeOrPayMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_DFDC.DFDC_FreeOrPayMsg} DFDC_FreeOrPayMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DFDC_FreeOrPayMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_DFDC.DFDC_FreeOrPayMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.FreeCount = reader.int32();
                    break;
                case 2:
                    if (!(message.ReelSetting && message.ReelSetting.length))
                        message.ReelSetting = [];
                    message.ReelSetting.push($root.GameMsg_DFDC.DFDC_ReelSetting.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("FreeCount"))
                throw $util.ProtocolError("missing required 'FreeCount'", { instance: message });
            return message;
        };

        /**
         * Decodes a DFDC_FreeOrPayMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_DFDC.DFDC_FreeOrPayMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_DFDC.DFDC_FreeOrPayMsg} DFDC_FreeOrPayMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DFDC_FreeOrPayMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DFDC_FreeOrPayMsg message.
         * @function verify
         * @memberof GameMsg_DFDC.DFDC_FreeOrPayMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DFDC_FreeOrPayMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.FreeCount))
                return "FreeCount: integer expected";
            if (message.ReelSetting != null && message.hasOwnProperty("ReelSetting")) {
                if (!Array.isArray(message.ReelSetting))
                    return "ReelSetting: array expected";
                for (var i = 0; i < message.ReelSetting.length; ++i) {
                    var error = $root.GameMsg_DFDC.DFDC_ReelSetting.verify(message.ReelSetting[i]);
                    if (error)
                        return "ReelSetting." + error;
                }
            }
            return null;
        };

        /**
         * Creates a DFDC_FreeOrPayMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_DFDC.DFDC_FreeOrPayMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_DFDC.DFDC_FreeOrPayMsg} DFDC_FreeOrPayMsg
         */
        DFDC_FreeOrPayMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_DFDC.DFDC_FreeOrPayMsg)
                return object;
            var message = new $root.GameMsg_DFDC.DFDC_FreeOrPayMsg();
            if (object.FreeCount != null)
                message.FreeCount = object.FreeCount | 0;
            if (object.ReelSetting) {
                if (!Array.isArray(object.ReelSetting))
                    throw TypeError(".GameMsg_DFDC.DFDC_FreeOrPayMsg.ReelSetting: array expected");
                message.ReelSetting = [];
                for (var i = 0; i < object.ReelSetting.length; ++i) {
                    if (typeof object.ReelSetting[i] !== "object")
                        throw TypeError(".GameMsg_DFDC.DFDC_FreeOrPayMsg.ReelSetting: object expected");
                    message.ReelSetting[i] = $root.GameMsg_DFDC.DFDC_ReelSetting.fromObject(object.ReelSetting[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a DFDC_FreeOrPayMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_DFDC.DFDC_FreeOrPayMsg
         * @static
         * @param {GameMsg_DFDC.DFDC_FreeOrPayMsg} message DFDC_FreeOrPayMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DFDC_FreeOrPayMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.ReelSetting = [];
            if (options.defaults)
                object.FreeCount = 0;
            if (message.FreeCount != null && message.hasOwnProperty("FreeCount"))
                object.FreeCount = message.FreeCount;
            if (message.ReelSetting && message.ReelSetting.length) {
                object.ReelSetting = [];
                for (var j = 0; j < message.ReelSetting.length; ++j)
                    object.ReelSetting[j] = $root.GameMsg_DFDC.DFDC_ReelSetting.toObject(message.ReelSetting[j], options);
            }
            return object;
        };

        /**
         * Converts this DFDC_FreeOrPayMsg to JSON.
         * @function toJSON
         * @memberof GameMsg_DFDC.DFDC_FreeOrPayMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DFDC_FreeOrPayMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return DFDC_FreeOrPayMsg;
    })();

    GameMsg_DFDC.DFDC_ReelSetting = (function() {

        /**
         * Properties of a DFDC_ReelSetting.
         * @memberof GameMsg_DFDC
         * @interface IDFDC_ReelSetting
         * @property {number} RealID DFDC_ReelSetting RealID
         * @property {number|null} [RowIndex] DFDC_ReelSetting RowIndex
         * @property {Array.<GameMsg_DFDC.IDFDC_SymbolGroup>|null} [SymbolGroup] DFDC_ReelSetting SymbolGroup
         */

        /**
         * Constructs a new DFDC_ReelSetting.
         * @memberof GameMsg_DFDC
         * @classdesc Represents a DFDC_ReelSetting.
         * @implements IDFDC_ReelSetting
         * @constructor
         * @param {GameMsg_DFDC.IDFDC_ReelSetting=} [properties] Properties to set
         */
        function DFDC_ReelSetting(properties) {
            this.SymbolGroup = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DFDC_ReelSetting RealID.
         * @member {number} RealID
         * @memberof GameMsg_DFDC.DFDC_ReelSetting
         * @instance
         */
        DFDC_ReelSetting.prototype.RealID = 0;

        /**
         * DFDC_ReelSetting RowIndex.
         * @member {number} RowIndex
         * @memberof GameMsg_DFDC.DFDC_ReelSetting
         * @instance
         */
        DFDC_ReelSetting.prototype.RowIndex = 0;

        /**
         * DFDC_ReelSetting SymbolGroup.
         * @member {Array.<GameMsg_DFDC.IDFDC_SymbolGroup>} SymbolGroup
         * @memberof GameMsg_DFDC.DFDC_ReelSetting
         * @instance
         */
        DFDC_ReelSetting.prototype.SymbolGroup = $util.emptyArray;

        /**
         * Creates a new DFDC_ReelSetting instance using the specified properties.
         * @function create
         * @memberof GameMsg_DFDC.DFDC_ReelSetting
         * @static
         * @param {GameMsg_DFDC.IDFDC_ReelSetting=} [properties] Properties to set
         * @returns {GameMsg_DFDC.DFDC_ReelSetting} DFDC_ReelSetting instance
         */
        DFDC_ReelSetting.create = function create(properties) {
            return new DFDC_ReelSetting(properties);
        };

        /**
         * Encodes the specified DFDC_ReelSetting message. Does not implicitly {@link GameMsg_DFDC.DFDC_ReelSetting.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_DFDC.DFDC_ReelSetting
         * @static
         * @param {GameMsg_DFDC.IDFDC_ReelSetting} message DFDC_ReelSetting message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DFDC_ReelSetting.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.RealID);
            if (message.RowIndex != null && message.hasOwnProperty("RowIndex"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.RowIndex);
            if (message.SymbolGroup != null && message.SymbolGroup.length)
                for (var i = 0; i < message.SymbolGroup.length; ++i)
                    $root.GameMsg_DFDC.DFDC_SymbolGroup.encode(message.SymbolGroup[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified DFDC_ReelSetting message, length delimited. Does not implicitly {@link GameMsg_DFDC.DFDC_ReelSetting.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_DFDC.DFDC_ReelSetting
         * @static
         * @param {GameMsg_DFDC.IDFDC_ReelSetting} message DFDC_ReelSetting message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DFDC_ReelSetting.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DFDC_ReelSetting message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_DFDC.DFDC_ReelSetting
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_DFDC.DFDC_ReelSetting} DFDC_ReelSetting
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DFDC_ReelSetting.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_DFDC.DFDC_ReelSetting();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.RealID = reader.int32();
                    break;
                case 2:
                    message.RowIndex = reader.int32();
                    break;
                case 3:
                    if (!(message.SymbolGroup && message.SymbolGroup.length))
                        message.SymbolGroup = [];
                    message.SymbolGroup.push($root.GameMsg_DFDC.DFDC_SymbolGroup.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("RealID"))
                throw $util.ProtocolError("missing required 'RealID'", { instance: message });
            return message;
        };

        /**
         * Decodes a DFDC_ReelSetting message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_DFDC.DFDC_ReelSetting
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_DFDC.DFDC_ReelSetting} DFDC_ReelSetting
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DFDC_ReelSetting.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DFDC_ReelSetting message.
         * @function verify
         * @memberof GameMsg_DFDC.DFDC_ReelSetting
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DFDC_ReelSetting.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.RealID))
                return "RealID: integer expected";
            if (message.RowIndex != null && message.hasOwnProperty("RowIndex"))
                if (!$util.isInteger(message.RowIndex))
                    return "RowIndex: integer expected";
            if (message.SymbolGroup != null && message.hasOwnProperty("SymbolGroup")) {
                if (!Array.isArray(message.SymbolGroup))
                    return "SymbolGroup: array expected";
                for (var i = 0; i < message.SymbolGroup.length; ++i) {
                    var error = $root.GameMsg_DFDC.DFDC_SymbolGroup.verify(message.SymbolGroup[i]);
                    if (error)
                        return "SymbolGroup." + error;
                }
            }
            return null;
        };

        /**
         * Creates a DFDC_ReelSetting message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_DFDC.DFDC_ReelSetting
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_DFDC.DFDC_ReelSetting} DFDC_ReelSetting
         */
        DFDC_ReelSetting.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_DFDC.DFDC_ReelSetting)
                return object;
            var message = new $root.GameMsg_DFDC.DFDC_ReelSetting();
            if (object.RealID != null)
                message.RealID = object.RealID | 0;
            if (object.RowIndex != null)
                message.RowIndex = object.RowIndex | 0;
            if (object.SymbolGroup) {
                if (!Array.isArray(object.SymbolGroup))
                    throw TypeError(".GameMsg_DFDC.DFDC_ReelSetting.SymbolGroup: array expected");
                message.SymbolGroup = [];
                for (var i = 0; i < object.SymbolGroup.length; ++i) {
                    if (typeof object.SymbolGroup[i] !== "object")
                        throw TypeError(".GameMsg_DFDC.DFDC_ReelSetting.SymbolGroup: object expected");
                    message.SymbolGroup[i] = $root.GameMsg_DFDC.DFDC_SymbolGroup.fromObject(object.SymbolGroup[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a DFDC_ReelSetting message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_DFDC.DFDC_ReelSetting
         * @static
         * @param {GameMsg_DFDC.DFDC_ReelSetting} message DFDC_ReelSetting
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DFDC_ReelSetting.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.SymbolGroup = [];
            if (options.defaults) {
                object.RealID = 0;
                object.RowIndex = 0;
            }
            if (message.RealID != null && message.hasOwnProperty("RealID"))
                object.RealID = message.RealID;
            if (message.RowIndex != null && message.hasOwnProperty("RowIndex"))
                object.RowIndex = message.RowIndex;
            if (message.SymbolGroup && message.SymbolGroup.length) {
                object.SymbolGroup = [];
                for (var j = 0; j < message.SymbolGroup.length; ++j)
                    object.SymbolGroup[j] = $root.GameMsg_DFDC.DFDC_SymbolGroup.toObject(message.SymbolGroup[j], options);
            }
            return object;
        };

        /**
         * Converts this DFDC_ReelSetting to JSON.
         * @function toJSON
         * @memberof GameMsg_DFDC.DFDC_ReelSetting
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DFDC_ReelSetting.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return DFDC_ReelSetting;
    })();

    GameMsg_DFDC.DFDC_SymbolGroup = (function() {

        /**
         * Properties of a DFDC_SymbolGroup.
         * @memberof GameMsg_DFDC
         * @interface IDFDC_SymbolGroup
         * @property {number} SymbolID DFDC_SymbolGroup SymbolID
         * @property {string} SymbolName DFDC_SymbolGroup SymbolName
         */

        /**
         * Constructs a new DFDC_SymbolGroup.
         * @memberof GameMsg_DFDC
         * @classdesc Represents a DFDC_SymbolGroup.
         * @implements IDFDC_SymbolGroup
         * @constructor
         * @param {GameMsg_DFDC.IDFDC_SymbolGroup=} [properties] Properties to set
         */
        function DFDC_SymbolGroup(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DFDC_SymbolGroup SymbolID.
         * @member {number} SymbolID
         * @memberof GameMsg_DFDC.DFDC_SymbolGroup
         * @instance
         */
        DFDC_SymbolGroup.prototype.SymbolID = 0;

        /**
         * DFDC_SymbolGroup SymbolName.
         * @member {string} SymbolName
         * @memberof GameMsg_DFDC.DFDC_SymbolGroup
         * @instance
         */
        DFDC_SymbolGroup.prototype.SymbolName = "";

        /**
         * Creates a new DFDC_SymbolGroup instance using the specified properties.
         * @function create
         * @memberof GameMsg_DFDC.DFDC_SymbolGroup
         * @static
         * @param {GameMsg_DFDC.IDFDC_SymbolGroup=} [properties] Properties to set
         * @returns {GameMsg_DFDC.DFDC_SymbolGroup} DFDC_SymbolGroup instance
         */
        DFDC_SymbolGroup.create = function create(properties) {
            return new DFDC_SymbolGroup(properties);
        };

        /**
         * Encodes the specified DFDC_SymbolGroup message. Does not implicitly {@link GameMsg_DFDC.DFDC_SymbolGroup.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_DFDC.DFDC_SymbolGroup
         * @static
         * @param {GameMsg_DFDC.IDFDC_SymbolGroup} message DFDC_SymbolGroup message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DFDC_SymbolGroup.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.SymbolID);
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.SymbolName);
            return writer;
        };

        /**
         * Encodes the specified DFDC_SymbolGroup message, length delimited. Does not implicitly {@link GameMsg_DFDC.DFDC_SymbolGroup.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_DFDC.DFDC_SymbolGroup
         * @static
         * @param {GameMsg_DFDC.IDFDC_SymbolGroup} message DFDC_SymbolGroup message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DFDC_SymbolGroup.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DFDC_SymbolGroup message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_DFDC.DFDC_SymbolGroup
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_DFDC.DFDC_SymbolGroup} DFDC_SymbolGroup
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DFDC_SymbolGroup.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_DFDC.DFDC_SymbolGroup();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.SymbolID = reader.int32();
                    break;
                case 2:
                    message.SymbolName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("SymbolID"))
                throw $util.ProtocolError("missing required 'SymbolID'", { instance: message });
            if (!message.hasOwnProperty("SymbolName"))
                throw $util.ProtocolError("missing required 'SymbolName'", { instance: message });
            return message;
        };

        /**
         * Decodes a DFDC_SymbolGroup message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_DFDC.DFDC_SymbolGroup
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_DFDC.DFDC_SymbolGroup} DFDC_SymbolGroup
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DFDC_SymbolGroup.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DFDC_SymbolGroup message.
         * @function verify
         * @memberof GameMsg_DFDC.DFDC_SymbolGroup
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DFDC_SymbolGroup.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.SymbolID))
                return "SymbolID: integer expected";
            if (!$util.isString(message.SymbolName))
                return "SymbolName: string expected";
            return null;
        };

        /**
         * Creates a DFDC_SymbolGroup message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_DFDC.DFDC_SymbolGroup
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_DFDC.DFDC_SymbolGroup} DFDC_SymbolGroup
         */
        DFDC_SymbolGroup.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_DFDC.DFDC_SymbolGroup)
                return object;
            var message = new $root.GameMsg_DFDC.DFDC_SymbolGroup();
            if (object.SymbolID != null)
                message.SymbolID = object.SymbolID | 0;
            if (object.SymbolName != null)
                message.SymbolName = String(object.SymbolName);
            return message;
        };

        /**
         * Creates a plain object from a DFDC_SymbolGroup message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_DFDC.DFDC_SymbolGroup
         * @static
         * @param {GameMsg_DFDC.DFDC_SymbolGroup} message DFDC_SymbolGroup
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DFDC_SymbolGroup.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.SymbolID = 0;
                object.SymbolName = "";
            }
            if (message.SymbolID != null && message.hasOwnProperty("SymbolID"))
                object.SymbolID = message.SymbolID;
            if (message.SymbolName != null && message.hasOwnProperty("SymbolName"))
                object.SymbolName = message.SymbolName;
            return object;
        };

        /**
         * Converts this DFDC_SymbolGroup to JSON.
         * @function toJSON
         * @memberof GameMsg_DFDC.DFDC_SymbolGroup
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DFDC_SymbolGroup.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return DFDC_SymbolGroup;
    })();

    GameMsg_DFDC.DFDC_GameResultReel = (function() {

        /**
         * Properties of a DFDC_GameResultReel.
         * @memberof GameMsg_DFDC
         * @interface IDFDC_GameResultReel
         * @property {Array.<number>|null} [SymbolID] DFDC_GameResultReel SymbolID
         * @property {Array.<GameMsg_DFDC.IDFDC_ReelSetting>|null} [ReelSetting] DFDC_GameResultReel ReelSetting
         * @property {Array.<GameMsg_DFDC.IDFDC_PayLineGroup>|null} [PayLineGroup] DFDC_GameResultReel PayLineGroup
         * @property {Array.<GameMsg_DFDC.IDFDC_PayAllGroup>|null} [PayAllGroup] DFDC_GameResultReel PayAllGroup
         * @property {number|Long|null} [WinMoney] DFDC_GameResultReel WinMoney
         * @property {number|Long|null} [FreeGameWinMoney] DFDC_GameResultReel FreeGameWinMoney
         */

        /**
         * Constructs a new DFDC_GameResultReel.
         * @memberof GameMsg_DFDC
         * @classdesc Represents a DFDC_GameResultReel.
         * @implements IDFDC_GameResultReel
         * @constructor
         * @param {GameMsg_DFDC.IDFDC_GameResultReel=} [properties] Properties to set
         */
        function DFDC_GameResultReel(properties) {
            this.SymbolID = [];
            this.ReelSetting = [];
            this.PayLineGroup = [];
            this.PayAllGroup = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DFDC_GameResultReel SymbolID.
         * @member {Array.<number>} SymbolID
         * @memberof GameMsg_DFDC.DFDC_GameResultReel
         * @instance
         */
        DFDC_GameResultReel.prototype.SymbolID = $util.emptyArray;

        /**
         * DFDC_GameResultReel ReelSetting.
         * @member {Array.<GameMsg_DFDC.IDFDC_ReelSetting>} ReelSetting
         * @memberof GameMsg_DFDC.DFDC_GameResultReel
         * @instance
         */
        DFDC_GameResultReel.prototype.ReelSetting = $util.emptyArray;

        /**
         * DFDC_GameResultReel PayLineGroup.
         * @member {Array.<GameMsg_DFDC.IDFDC_PayLineGroup>} PayLineGroup
         * @memberof GameMsg_DFDC.DFDC_GameResultReel
         * @instance
         */
        DFDC_GameResultReel.prototype.PayLineGroup = $util.emptyArray;

        /**
         * DFDC_GameResultReel PayAllGroup.
         * @member {Array.<GameMsg_DFDC.IDFDC_PayAllGroup>} PayAllGroup
         * @memberof GameMsg_DFDC.DFDC_GameResultReel
         * @instance
         */
        DFDC_GameResultReel.prototype.PayAllGroup = $util.emptyArray;

        /**
         * DFDC_GameResultReel WinMoney.
         * @member {number|Long} WinMoney
         * @memberof GameMsg_DFDC.DFDC_GameResultReel
         * @instance
         */
        DFDC_GameResultReel.prototype.WinMoney = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * DFDC_GameResultReel FreeGameWinMoney.
         * @member {number|Long} FreeGameWinMoney
         * @memberof GameMsg_DFDC.DFDC_GameResultReel
         * @instance
         */
        DFDC_GameResultReel.prototype.FreeGameWinMoney = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new DFDC_GameResultReel instance using the specified properties.
         * @function create
         * @memberof GameMsg_DFDC.DFDC_GameResultReel
         * @static
         * @param {GameMsg_DFDC.IDFDC_GameResultReel=} [properties] Properties to set
         * @returns {GameMsg_DFDC.DFDC_GameResultReel} DFDC_GameResultReel instance
         */
        DFDC_GameResultReel.create = function create(properties) {
            return new DFDC_GameResultReel(properties);
        };

        /**
         * Encodes the specified DFDC_GameResultReel message. Does not implicitly {@link GameMsg_DFDC.DFDC_GameResultReel.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_DFDC.DFDC_GameResultReel
         * @static
         * @param {GameMsg_DFDC.IDFDC_GameResultReel} message DFDC_GameResultReel message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DFDC_GameResultReel.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.SymbolID != null && message.SymbolID.length) {
                writer.uint32(/* id 1, wireType 2 =*/10).fork();
                for (var i = 0; i < message.SymbolID.length; ++i)
                    writer.int32(message.SymbolID[i]);
                writer.ldelim();
            }
            if (message.ReelSetting != null && message.ReelSetting.length)
                for (var i = 0; i < message.ReelSetting.length; ++i)
                    $root.GameMsg_DFDC.DFDC_ReelSetting.encode(message.ReelSetting[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.PayLineGroup != null && message.PayLineGroup.length)
                for (var i = 0; i < message.PayLineGroup.length; ++i)
                    $root.GameMsg_DFDC.DFDC_PayLineGroup.encode(message.PayLineGroup[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.PayAllGroup != null && message.PayAllGroup.length)
                for (var i = 0; i < message.PayAllGroup.length; ++i)
                    $root.GameMsg_DFDC.DFDC_PayAllGroup.encode(message.PayAllGroup[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.WinMoney != null && message.hasOwnProperty("WinMoney"))
                writer.uint32(/* id 5, wireType 0 =*/40).int64(message.WinMoney);
            if (message.FreeGameWinMoney != null && message.hasOwnProperty("FreeGameWinMoney"))
                writer.uint32(/* id 6, wireType 0 =*/48).int64(message.FreeGameWinMoney);
            return writer;
        };

        /**
         * Encodes the specified DFDC_GameResultReel message, length delimited. Does not implicitly {@link GameMsg_DFDC.DFDC_GameResultReel.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_DFDC.DFDC_GameResultReel
         * @static
         * @param {GameMsg_DFDC.IDFDC_GameResultReel} message DFDC_GameResultReel message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DFDC_GameResultReel.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DFDC_GameResultReel message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_DFDC.DFDC_GameResultReel
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_DFDC.DFDC_GameResultReel} DFDC_GameResultReel
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DFDC_GameResultReel.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_DFDC.DFDC_GameResultReel();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.SymbolID && message.SymbolID.length))
                        message.SymbolID = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.SymbolID.push(reader.int32());
                    } else
                        message.SymbolID.push(reader.int32());
                    break;
                case 2:
                    if (!(message.ReelSetting && message.ReelSetting.length))
                        message.ReelSetting = [];
                    message.ReelSetting.push($root.GameMsg_DFDC.DFDC_ReelSetting.decode(reader, reader.uint32()));
                    break;
                case 3:
                    if (!(message.PayLineGroup && message.PayLineGroup.length))
                        message.PayLineGroup = [];
                    message.PayLineGroup.push($root.GameMsg_DFDC.DFDC_PayLineGroup.decode(reader, reader.uint32()));
                    break;
                case 4:
                    if (!(message.PayAllGroup && message.PayAllGroup.length))
                        message.PayAllGroup = [];
                    message.PayAllGroup.push($root.GameMsg_DFDC.DFDC_PayAllGroup.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.WinMoney = reader.int64();
                    break;
                case 6:
                    message.FreeGameWinMoney = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a DFDC_GameResultReel message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_DFDC.DFDC_GameResultReel
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_DFDC.DFDC_GameResultReel} DFDC_GameResultReel
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DFDC_GameResultReel.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DFDC_GameResultReel message.
         * @function verify
         * @memberof GameMsg_DFDC.DFDC_GameResultReel
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DFDC_GameResultReel.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.SymbolID != null && message.hasOwnProperty("SymbolID")) {
                if (!Array.isArray(message.SymbolID))
                    return "SymbolID: array expected";
                for (var i = 0; i < message.SymbolID.length; ++i)
                    if (!$util.isInteger(message.SymbolID[i]))
                        return "SymbolID: integer[] expected";
            }
            if (message.ReelSetting != null && message.hasOwnProperty("ReelSetting")) {
                if (!Array.isArray(message.ReelSetting))
                    return "ReelSetting: array expected";
                for (var i = 0; i < message.ReelSetting.length; ++i) {
                    var error = $root.GameMsg_DFDC.DFDC_ReelSetting.verify(message.ReelSetting[i]);
                    if (error)
                        return "ReelSetting." + error;
                }
            }
            if (message.PayLineGroup != null && message.hasOwnProperty("PayLineGroup")) {
                if (!Array.isArray(message.PayLineGroup))
                    return "PayLineGroup: array expected";
                for (var i = 0; i < message.PayLineGroup.length; ++i) {
                    var error = $root.GameMsg_DFDC.DFDC_PayLineGroup.verify(message.PayLineGroup[i]);
                    if (error)
                        return "PayLineGroup." + error;
                }
            }
            if (message.PayAllGroup != null && message.hasOwnProperty("PayAllGroup")) {
                if (!Array.isArray(message.PayAllGroup))
                    return "PayAllGroup: array expected";
                for (var i = 0; i < message.PayAllGroup.length; ++i) {
                    var error = $root.GameMsg_DFDC.DFDC_PayAllGroup.verify(message.PayAllGroup[i]);
                    if (error)
                        return "PayAllGroup." + error;
                }
            }
            if (message.WinMoney != null && message.hasOwnProperty("WinMoney"))
                if (!$util.isInteger(message.WinMoney) && !(message.WinMoney && $util.isInteger(message.WinMoney.low) && $util.isInteger(message.WinMoney.high)))
                    return "WinMoney: integer|Long expected";
            if (message.FreeGameWinMoney != null && message.hasOwnProperty("FreeGameWinMoney"))
                if (!$util.isInteger(message.FreeGameWinMoney) && !(message.FreeGameWinMoney && $util.isInteger(message.FreeGameWinMoney.low) && $util.isInteger(message.FreeGameWinMoney.high)))
                    return "FreeGameWinMoney: integer|Long expected";
            return null;
        };

        /**
         * Creates a DFDC_GameResultReel message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_DFDC.DFDC_GameResultReel
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_DFDC.DFDC_GameResultReel} DFDC_GameResultReel
         */
        DFDC_GameResultReel.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_DFDC.DFDC_GameResultReel)
                return object;
            var message = new $root.GameMsg_DFDC.DFDC_GameResultReel();
            if (object.SymbolID) {
                if (!Array.isArray(object.SymbolID))
                    throw TypeError(".GameMsg_DFDC.DFDC_GameResultReel.SymbolID: array expected");
                message.SymbolID = [];
                for (var i = 0; i < object.SymbolID.length; ++i)
                    message.SymbolID[i] = object.SymbolID[i] | 0;
            }
            if (object.ReelSetting) {
                if (!Array.isArray(object.ReelSetting))
                    throw TypeError(".GameMsg_DFDC.DFDC_GameResultReel.ReelSetting: array expected");
                message.ReelSetting = [];
                for (var i = 0; i < object.ReelSetting.length; ++i) {
                    if (typeof object.ReelSetting[i] !== "object")
                        throw TypeError(".GameMsg_DFDC.DFDC_GameResultReel.ReelSetting: object expected");
                    message.ReelSetting[i] = $root.GameMsg_DFDC.DFDC_ReelSetting.fromObject(object.ReelSetting[i]);
                }
            }
            if (object.PayLineGroup) {
                if (!Array.isArray(object.PayLineGroup))
                    throw TypeError(".GameMsg_DFDC.DFDC_GameResultReel.PayLineGroup: array expected");
                message.PayLineGroup = [];
                for (var i = 0; i < object.PayLineGroup.length; ++i) {
                    if (typeof object.PayLineGroup[i] !== "object")
                        throw TypeError(".GameMsg_DFDC.DFDC_GameResultReel.PayLineGroup: object expected");
                    message.PayLineGroup[i] = $root.GameMsg_DFDC.DFDC_PayLineGroup.fromObject(object.PayLineGroup[i]);
                }
            }
            if (object.PayAllGroup) {
                if (!Array.isArray(object.PayAllGroup))
                    throw TypeError(".GameMsg_DFDC.DFDC_GameResultReel.PayAllGroup: array expected");
                message.PayAllGroup = [];
                for (var i = 0; i < object.PayAllGroup.length; ++i) {
                    if (typeof object.PayAllGroup[i] !== "object")
                        throw TypeError(".GameMsg_DFDC.DFDC_GameResultReel.PayAllGroup: object expected");
                    message.PayAllGroup[i] = $root.GameMsg_DFDC.DFDC_PayAllGroup.fromObject(object.PayAllGroup[i]);
                }
            }
            if (object.WinMoney != null)
                if ($util.Long)
                    (message.WinMoney = $util.Long.fromValue(object.WinMoney)).unsigned = false;
                else if (typeof object.WinMoney === "string")
                    message.WinMoney = parseInt(object.WinMoney, 10);
                else if (typeof object.WinMoney === "number")
                    message.WinMoney = object.WinMoney;
                else if (typeof object.WinMoney === "object")
                    message.WinMoney = new $util.LongBits(object.WinMoney.low >>> 0, object.WinMoney.high >>> 0).toNumber();
            if (object.FreeGameWinMoney != null)
                if ($util.Long)
                    (message.FreeGameWinMoney = $util.Long.fromValue(object.FreeGameWinMoney)).unsigned = false;
                else if (typeof object.FreeGameWinMoney === "string")
                    message.FreeGameWinMoney = parseInt(object.FreeGameWinMoney, 10);
                else if (typeof object.FreeGameWinMoney === "number")
                    message.FreeGameWinMoney = object.FreeGameWinMoney;
                else if (typeof object.FreeGameWinMoney === "object")
                    message.FreeGameWinMoney = new $util.LongBits(object.FreeGameWinMoney.low >>> 0, object.FreeGameWinMoney.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a DFDC_GameResultReel message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_DFDC.DFDC_GameResultReel
         * @static
         * @param {GameMsg_DFDC.DFDC_GameResultReel} message DFDC_GameResultReel
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DFDC_GameResultReel.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.SymbolID = [];
                object.ReelSetting = [];
                object.PayLineGroup = [];
                object.PayAllGroup = [];
            }
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.WinMoney = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.WinMoney = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.FreeGameWinMoney = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.FreeGameWinMoney = options.longs === String ? "0" : 0;
            }
            if (message.SymbolID && message.SymbolID.length) {
                object.SymbolID = [];
                for (var j = 0; j < message.SymbolID.length; ++j)
                    object.SymbolID[j] = message.SymbolID[j];
            }
            if (message.ReelSetting && message.ReelSetting.length) {
                object.ReelSetting = [];
                for (var j = 0; j < message.ReelSetting.length; ++j)
                    object.ReelSetting[j] = $root.GameMsg_DFDC.DFDC_ReelSetting.toObject(message.ReelSetting[j], options);
            }
            if (message.PayLineGroup && message.PayLineGroup.length) {
                object.PayLineGroup = [];
                for (var j = 0; j < message.PayLineGroup.length; ++j)
                    object.PayLineGroup[j] = $root.GameMsg_DFDC.DFDC_PayLineGroup.toObject(message.PayLineGroup[j], options);
            }
            if (message.PayAllGroup && message.PayAllGroup.length) {
                object.PayAllGroup = [];
                for (var j = 0; j < message.PayAllGroup.length; ++j)
                    object.PayAllGroup[j] = $root.GameMsg_DFDC.DFDC_PayAllGroup.toObject(message.PayAllGroup[j], options);
            }
            if (message.WinMoney != null && message.hasOwnProperty("WinMoney"))
                if (typeof message.WinMoney === "number")
                    object.WinMoney = options.longs === String ? String(message.WinMoney) : message.WinMoney;
                else
                    object.WinMoney = options.longs === String ? $util.Long.prototype.toString.call(message.WinMoney) : options.longs === Number ? new $util.LongBits(message.WinMoney.low >>> 0, message.WinMoney.high >>> 0).toNumber() : message.WinMoney;
            if (message.FreeGameWinMoney != null && message.hasOwnProperty("FreeGameWinMoney"))
                if (typeof message.FreeGameWinMoney === "number")
                    object.FreeGameWinMoney = options.longs === String ? String(message.FreeGameWinMoney) : message.FreeGameWinMoney;
                else
                    object.FreeGameWinMoney = options.longs === String ? $util.Long.prototype.toString.call(message.FreeGameWinMoney) : options.longs === Number ? new $util.LongBits(message.FreeGameWinMoney.low >>> 0, message.FreeGameWinMoney.high >>> 0).toNumber() : message.FreeGameWinMoney;
            return object;
        };

        /**
         * Converts this DFDC_GameResultReel to JSON.
         * @function toJSON
         * @memberof GameMsg_DFDC.DFDC_GameResultReel
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DFDC_GameResultReel.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return DFDC_GameResultReel;
    })();

    GameMsg_DFDC.DFDC_PayAllGroup = (function() {

        /**
         * Properties of a DFDC_PayAllGroup.
         * @memberof GameMsg_DFDC
         * @interface IDFDC_PayAllGroup
         * @property {Array.<GameMsg_DFDC.IDFDC_PayLineDetail>|null} [PayLineDetail] DFDC_PayAllGroup PayLineDetail
         * @property {Array.<GameMsg_DFDC.IDFDC_PayAllDetail>|null} [PayAllDetail] DFDC_PayAllGroup PayAllDetail
         */

        /**
         * Constructs a new DFDC_PayAllGroup.
         * @memberof GameMsg_DFDC
         * @classdesc Represents a DFDC_PayAllGroup.
         * @implements IDFDC_PayAllGroup
         * @constructor
         * @param {GameMsg_DFDC.IDFDC_PayAllGroup=} [properties] Properties to set
         */
        function DFDC_PayAllGroup(properties) {
            this.PayLineDetail = [];
            this.PayAllDetail = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DFDC_PayAllGroup PayLineDetail.
         * @member {Array.<GameMsg_DFDC.IDFDC_PayLineDetail>} PayLineDetail
         * @memberof GameMsg_DFDC.DFDC_PayAllGroup
         * @instance
         */
        DFDC_PayAllGroup.prototype.PayLineDetail = $util.emptyArray;

        /**
         * DFDC_PayAllGroup PayAllDetail.
         * @member {Array.<GameMsg_DFDC.IDFDC_PayAllDetail>} PayAllDetail
         * @memberof GameMsg_DFDC.DFDC_PayAllGroup
         * @instance
         */
        DFDC_PayAllGroup.prototype.PayAllDetail = $util.emptyArray;

        /**
         * Creates a new DFDC_PayAllGroup instance using the specified properties.
         * @function create
         * @memberof GameMsg_DFDC.DFDC_PayAllGroup
         * @static
         * @param {GameMsg_DFDC.IDFDC_PayAllGroup=} [properties] Properties to set
         * @returns {GameMsg_DFDC.DFDC_PayAllGroup} DFDC_PayAllGroup instance
         */
        DFDC_PayAllGroup.create = function create(properties) {
            return new DFDC_PayAllGroup(properties);
        };

        /**
         * Encodes the specified DFDC_PayAllGroup message. Does not implicitly {@link GameMsg_DFDC.DFDC_PayAllGroup.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_DFDC.DFDC_PayAllGroup
         * @static
         * @param {GameMsg_DFDC.IDFDC_PayAllGroup} message DFDC_PayAllGroup message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DFDC_PayAllGroup.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.PayLineDetail != null && message.PayLineDetail.length)
                for (var i = 0; i < message.PayLineDetail.length; ++i)
                    $root.GameMsg_DFDC.DFDC_PayLineDetail.encode(message.PayLineDetail[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.PayAllDetail != null && message.PayAllDetail.length)
                for (var i = 0; i < message.PayAllDetail.length; ++i)
                    $root.GameMsg_DFDC.DFDC_PayAllDetail.encode(message.PayAllDetail[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified DFDC_PayAllGroup message, length delimited. Does not implicitly {@link GameMsg_DFDC.DFDC_PayAllGroup.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_DFDC.DFDC_PayAllGroup
         * @static
         * @param {GameMsg_DFDC.IDFDC_PayAllGroup} message DFDC_PayAllGroup message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DFDC_PayAllGroup.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DFDC_PayAllGroup message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_DFDC.DFDC_PayAllGroup
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_DFDC.DFDC_PayAllGroup} DFDC_PayAllGroup
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DFDC_PayAllGroup.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_DFDC.DFDC_PayAllGroup();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.PayLineDetail && message.PayLineDetail.length))
                        message.PayLineDetail = [];
                    message.PayLineDetail.push($root.GameMsg_DFDC.DFDC_PayLineDetail.decode(reader, reader.uint32()));
                    break;
                case 2:
                    if (!(message.PayAllDetail && message.PayAllDetail.length))
                        message.PayAllDetail = [];
                    message.PayAllDetail.push($root.GameMsg_DFDC.DFDC_PayAllDetail.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a DFDC_PayAllGroup message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_DFDC.DFDC_PayAllGroup
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_DFDC.DFDC_PayAllGroup} DFDC_PayAllGroup
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DFDC_PayAllGroup.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DFDC_PayAllGroup message.
         * @function verify
         * @memberof GameMsg_DFDC.DFDC_PayAllGroup
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DFDC_PayAllGroup.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.PayLineDetail != null && message.hasOwnProperty("PayLineDetail")) {
                if (!Array.isArray(message.PayLineDetail))
                    return "PayLineDetail: array expected";
                for (var i = 0; i < message.PayLineDetail.length; ++i) {
                    var error = $root.GameMsg_DFDC.DFDC_PayLineDetail.verify(message.PayLineDetail[i]);
                    if (error)
                        return "PayLineDetail." + error;
                }
            }
            if (message.PayAllDetail != null && message.hasOwnProperty("PayAllDetail")) {
                if (!Array.isArray(message.PayAllDetail))
                    return "PayAllDetail: array expected";
                for (var i = 0; i < message.PayAllDetail.length; ++i) {
                    var error = $root.GameMsg_DFDC.DFDC_PayAllDetail.verify(message.PayAllDetail[i]);
                    if (error)
                        return "PayAllDetail." + error;
                }
            }
            return null;
        };

        /**
         * Creates a DFDC_PayAllGroup message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_DFDC.DFDC_PayAllGroup
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_DFDC.DFDC_PayAllGroup} DFDC_PayAllGroup
         */
        DFDC_PayAllGroup.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_DFDC.DFDC_PayAllGroup)
                return object;
            var message = new $root.GameMsg_DFDC.DFDC_PayAllGroup();
            if (object.PayLineDetail) {
                if (!Array.isArray(object.PayLineDetail))
                    throw TypeError(".GameMsg_DFDC.DFDC_PayAllGroup.PayLineDetail: array expected");
                message.PayLineDetail = [];
                for (var i = 0; i < object.PayLineDetail.length; ++i) {
                    if (typeof object.PayLineDetail[i] !== "object")
                        throw TypeError(".GameMsg_DFDC.DFDC_PayAllGroup.PayLineDetail: object expected");
                    message.PayLineDetail[i] = $root.GameMsg_DFDC.DFDC_PayLineDetail.fromObject(object.PayLineDetail[i]);
                }
            }
            if (object.PayAllDetail) {
                if (!Array.isArray(object.PayAllDetail))
                    throw TypeError(".GameMsg_DFDC.DFDC_PayAllGroup.PayAllDetail: array expected");
                message.PayAllDetail = [];
                for (var i = 0; i < object.PayAllDetail.length; ++i) {
                    if (typeof object.PayAllDetail[i] !== "object")
                        throw TypeError(".GameMsg_DFDC.DFDC_PayAllGroup.PayAllDetail: object expected");
                    message.PayAllDetail[i] = $root.GameMsg_DFDC.DFDC_PayAllDetail.fromObject(object.PayAllDetail[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a DFDC_PayAllGroup message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_DFDC.DFDC_PayAllGroup
         * @static
         * @param {GameMsg_DFDC.DFDC_PayAllGroup} message DFDC_PayAllGroup
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DFDC_PayAllGroup.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.PayLineDetail = [];
                object.PayAllDetail = [];
            }
            if (message.PayLineDetail && message.PayLineDetail.length) {
                object.PayLineDetail = [];
                for (var j = 0; j < message.PayLineDetail.length; ++j)
                    object.PayLineDetail[j] = $root.GameMsg_DFDC.DFDC_PayLineDetail.toObject(message.PayLineDetail[j], options);
            }
            if (message.PayAllDetail && message.PayAllDetail.length) {
                object.PayAllDetail = [];
                for (var j = 0; j < message.PayAllDetail.length; ++j)
                    object.PayAllDetail[j] = $root.GameMsg_DFDC.DFDC_PayAllDetail.toObject(message.PayAllDetail[j], options);
            }
            return object;
        };

        /**
         * Converts this DFDC_PayAllGroup to JSON.
         * @function toJSON
         * @memberof GameMsg_DFDC.DFDC_PayAllGroup
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DFDC_PayAllGroup.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return DFDC_PayAllGroup;
    })();

    GameMsg_DFDC.DFDC_PayAllDetail = (function() {

        /**
         * Properties of a DFDC_PayAllDetail.
         * @memberof GameMsg_DFDC
         * @interface IDFDC_PayAllDetail
         * @property {string} SymbolName DFDC_PayAllDetail SymbolName
         * @property {number} PayRate DFDC_PayAllDetail PayRate
         * @property {number} PayCount DFDC_PayAllDetail PayCount
         * @property {number} WayCount DFDC_PayAllDetail WayCount
         * @property {Array.<number>|null} [SymbolIDList] DFDC_PayAllDetail SymbolIDList
         * @property {boolean} FeaturePays DFDC_PayAllDetail FeaturePays
         */

        /**
         * Constructs a new DFDC_PayAllDetail.
         * @memberof GameMsg_DFDC
         * @classdesc Represents a DFDC_PayAllDetail.
         * @implements IDFDC_PayAllDetail
         * @constructor
         * @param {GameMsg_DFDC.IDFDC_PayAllDetail=} [properties] Properties to set
         */
        function DFDC_PayAllDetail(properties) {
            this.SymbolIDList = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DFDC_PayAllDetail SymbolName.
         * @member {string} SymbolName
         * @memberof GameMsg_DFDC.DFDC_PayAllDetail
         * @instance
         */
        DFDC_PayAllDetail.prototype.SymbolName = "";

        /**
         * DFDC_PayAllDetail PayRate.
         * @member {number} PayRate
         * @memberof GameMsg_DFDC.DFDC_PayAllDetail
         * @instance
         */
        DFDC_PayAllDetail.prototype.PayRate = 0;

        /**
         * DFDC_PayAllDetail PayCount.
         * @member {number} PayCount
         * @memberof GameMsg_DFDC.DFDC_PayAllDetail
         * @instance
         */
        DFDC_PayAllDetail.prototype.PayCount = 0;

        /**
         * DFDC_PayAllDetail WayCount.
         * @member {number} WayCount
         * @memberof GameMsg_DFDC.DFDC_PayAllDetail
         * @instance
         */
        DFDC_PayAllDetail.prototype.WayCount = 0;

        /**
         * DFDC_PayAllDetail SymbolIDList.
         * @member {Array.<number>} SymbolIDList
         * @memberof GameMsg_DFDC.DFDC_PayAllDetail
         * @instance
         */
        DFDC_PayAllDetail.prototype.SymbolIDList = $util.emptyArray;

        /**
         * DFDC_PayAllDetail FeaturePays.
         * @member {boolean} FeaturePays
         * @memberof GameMsg_DFDC.DFDC_PayAllDetail
         * @instance
         */
        DFDC_PayAllDetail.prototype.FeaturePays = false;

        /**
         * Creates a new DFDC_PayAllDetail instance using the specified properties.
         * @function create
         * @memberof GameMsg_DFDC.DFDC_PayAllDetail
         * @static
         * @param {GameMsg_DFDC.IDFDC_PayAllDetail=} [properties] Properties to set
         * @returns {GameMsg_DFDC.DFDC_PayAllDetail} DFDC_PayAllDetail instance
         */
        DFDC_PayAllDetail.create = function create(properties) {
            return new DFDC_PayAllDetail(properties);
        };

        /**
         * Encodes the specified DFDC_PayAllDetail message. Does not implicitly {@link GameMsg_DFDC.DFDC_PayAllDetail.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_DFDC.DFDC_PayAllDetail
         * @static
         * @param {GameMsg_DFDC.IDFDC_PayAllDetail} message DFDC_PayAllDetail message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DFDC_PayAllDetail.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.SymbolName);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.PayRate);
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.PayCount);
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.WayCount);
            if (message.SymbolIDList != null && message.SymbolIDList.length) {
                writer.uint32(/* id 5, wireType 2 =*/42).fork();
                for (var i = 0; i < message.SymbolIDList.length; ++i)
                    writer.int32(message.SymbolIDList[i]);
                writer.ldelim();
            }
            writer.uint32(/* id 6, wireType 0 =*/48).bool(message.FeaturePays);
            return writer;
        };

        /**
         * Encodes the specified DFDC_PayAllDetail message, length delimited. Does not implicitly {@link GameMsg_DFDC.DFDC_PayAllDetail.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_DFDC.DFDC_PayAllDetail
         * @static
         * @param {GameMsg_DFDC.IDFDC_PayAllDetail} message DFDC_PayAllDetail message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DFDC_PayAllDetail.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DFDC_PayAllDetail message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_DFDC.DFDC_PayAllDetail
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_DFDC.DFDC_PayAllDetail} DFDC_PayAllDetail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DFDC_PayAllDetail.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_DFDC.DFDC_PayAllDetail();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.SymbolName = reader.string();
                    break;
                case 2:
                    message.PayRate = reader.int32();
                    break;
                case 3:
                    message.PayCount = reader.int32();
                    break;
                case 4:
                    message.WayCount = reader.int32();
                    break;
                case 5:
                    if (!(message.SymbolIDList && message.SymbolIDList.length))
                        message.SymbolIDList = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.SymbolIDList.push(reader.int32());
                    } else
                        message.SymbolIDList.push(reader.int32());
                    break;
                case 6:
                    message.FeaturePays = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("SymbolName"))
                throw $util.ProtocolError("missing required 'SymbolName'", { instance: message });
            if (!message.hasOwnProperty("PayRate"))
                throw $util.ProtocolError("missing required 'PayRate'", { instance: message });
            if (!message.hasOwnProperty("PayCount"))
                throw $util.ProtocolError("missing required 'PayCount'", { instance: message });
            if (!message.hasOwnProperty("WayCount"))
                throw $util.ProtocolError("missing required 'WayCount'", { instance: message });
            if (!message.hasOwnProperty("FeaturePays"))
                throw $util.ProtocolError("missing required 'FeaturePays'", { instance: message });
            return message;
        };

        /**
         * Decodes a DFDC_PayAllDetail message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_DFDC.DFDC_PayAllDetail
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_DFDC.DFDC_PayAllDetail} DFDC_PayAllDetail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DFDC_PayAllDetail.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DFDC_PayAllDetail message.
         * @function verify
         * @memberof GameMsg_DFDC.DFDC_PayAllDetail
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DFDC_PayAllDetail.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.SymbolName))
                return "SymbolName: string expected";
            if (!$util.isInteger(message.PayRate))
                return "PayRate: integer expected";
            if (!$util.isInteger(message.PayCount))
                return "PayCount: integer expected";
            if (!$util.isInteger(message.WayCount))
                return "WayCount: integer expected";
            if (message.SymbolIDList != null && message.hasOwnProperty("SymbolIDList")) {
                if (!Array.isArray(message.SymbolIDList))
                    return "SymbolIDList: array expected";
                for (var i = 0; i < message.SymbolIDList.length; ++i)
                    if (!$util.isInteger(message.SymbolIDList[i]))
                        return "SymbolIDList: integer[] expected";
            }
            if (typeof message.FeaturePays !== "boolean")
                return "FeaturePays: boolean expected";
            return null;
        };

        /**
         * Creates a DFDC_PayAllDetail message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_DFDC.DFDC_PayAllDetail
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_DFDC.DFDC_PayAllDetail} DFDC_PayAllDetail
         */
        DFDC_PayAllDetail.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_DFDC.DFDC_PayAllDetail)
                return object;
            var message = new $root.GameMsg_DFDC.DFDC_PayAllDetail();
            if (object.SymbolName != null)
                message.SymbolName = String(object.SymbolName);
            if (object.PayRate != null)
                message.PayRate = object.PayRate | 0;
            if (object.PayCount != null)
                message.PayCount = object.PayCount | 0;
            if (object.WayCount != null)
                message.WayCount = object.WayCount | 0;
            if (object.SymbolIDList) {
                if (!Array.isArray(object.SymbolIDList))
                    throw TypeError(".GameMsg_DFDC.DFDC_PayAllDetail.SymbolIDList: array expected");
                message.SymbolIDList = [];
                for (var i = 0; i < object.SymbolIDList.length; ++i)
                    message.SymbolIDList[i] = object.SymbolIDList[i] | 0;
            }
            if (object.FeaturePays != null)
                message.FeaturePays = Boolean(object.FeaturePays);
            return message;
        };

        /**
         * Creates a plain object from a DFDC_PayAllDetail message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_DFDC.DFDC_PayAllDetail
         * @static
         * @param {GameMsg_DFDC.DFDC_PayAllDetail} message DFDC_PayAllDetail
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DFDC_PayAllDetail.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.SymbolIDList = [];
            if (options.defaults) {
                object.SymbolName = "";
                object.PayRate = 0;
                object.PayCount = 0;
                object.WayCount = 0;
                object.FeaturePays = false;
            }
            if (message.SymbolName != null && message.hasOwnProperty("SymbolName"))
                object.SymbolName = message.SymbolName;
            if (message.PayRate != null && message.hasOwnProperty("PayRate"))
                object.PayRate = message.PayRate;
            if (message.PayCount != null && message.hasOwnProperty("PayCount"))
                object.PayCount = message.PayCount;
            if (message.WayCount != null && message.hasOwnProperty("WayCount"))
                object.WayCount = message.WayCount;
            if (message.SymbolIDList && message.SymbolIDList.length) {
                object.SymbolIDList = [];
                for (var j = 0; j < message.SymbolIDList.length; ++j)
                    object.SymbolIDList[j] = message.SymbolIDList[j];
            }
            if (message.FeaturePays != null && message.hasOwnProperty("FeaturePays"))
                object.FeaturePays = message.FeaturePays;
            return object;
        };

        /**
         * Converts this DFDC_PayAllDetail to JSON.
         * @function toJSON
         * @memberof GameMsg_DFDC.DFDC_PayAllDetail
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DFDC_PayAllDetail.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return DFDC_PayAllDetail;
    })();

    GameMsg_DFDC.DFDC_PayLineGroup = (function() {

        /**
         * Properties of a DFDC_PayLineGroup.
         * @memberof GameMsg_DFDC
         * @interface IDFDC_PayLineGroup
         * @property {number} PayLineID DFDC_PayLineGroup PayLineID
         * @property {Array.<GameMsg_DFDC.IDFDC_PayLineDetail>|null} [PayLineDetail] DFDC_PayLineGroup PayLineDetail
         * @property {number|null} [WinMoney] DFDC_PayLineGroup WinMoney
         */

        /**
         * Constructs a new DFDC_PayLineGroup.
         * @memberof GameMsg_DFDC
         * @classdesc Represents a DFDC_PayLineGroup.
         * @implements IDFDC_PayLineGroup
         * @constructor
         * @param {GameMsg_DFDC.IDFDC_PayLineGroup=} [properties] Properties to set
         */
        function DFDC_PayLineGroup(properties) {
            this.PayLineDetail = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DFDC_PayLineGroup PayLineID.
         * @member {number} PayLineID
         * @memberof GameMsg_DFDC.DFDC_PayLineGroup
         * @instance
         */
        DFDC_PayLineGroup.prototype.PayLineID = 0;

        /**
         * DFDC_PayLineGroup PayLineDetail.
         * @member {Array.<GameMsg_DFDC.IDFDC_PayLineDetail>} PayLineDetail
         * @memberof GameMsg_DFDC.DFDC_PayLineGroup
         * @instance
         */
        DFDC_PayLineGroup.prototype.PayLineDetail = $util.emptyArray;

        /**
         * DFDC_PayLineGroup WinMoney.
         * @member {number} WinMoney
         * @memberof GameMsg_DFDC.DFDC_PayLineGroup
         * @instance
         */
        DFDC_PayLineGroup.prototype.WinMoney = 0;

        /**
         * Creates a new DFDC_PayLineGroup instance using the specified properties.
         * @function create
         * @memberof GameMsg_DFDC.DFDC_PayLineGroup
         * @static
         * @param {GameMsg_DFDC.IDFDC_PayLineGroup=} [properties] Properties to set
         * @returns {GameMsg_DFDC.DFDC_PayLineGroup} DFDC_PayLineGroup instance
         */
        DFDC_PayLineGroup.create = function create(properties) {
            return new DFDC_PayLineGroup(properties);
        };

        /**
         * Encodes the specified DFDC_PayLineGroup message. Does not implicitly {@link GameMsg_DFDC.DFDC_PayLineGroup.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_DFDC.DFDC_PayLineGroup
         * @static
         * @param {GameMsg_DFDC.IDFDC_PayLineGroup} message DFDC_PayLineGroup message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DFDC_PayLineGroup.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.PayLineID);
            if (message.PayLineDetail != null && message.PayLineDetail.length)
                for (var i = 0; i < message.PayLineDetail.length; ++i)
                    $root.GameMsg_DFDC.DFDC_PayLineDetail.encode(message.PayLineDetail[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.WinMoney != null && message.hasOwnProperty("WinMoney"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.WinMoney);
            return writer;
        };

        /**
         * Encodes the specified DFDC_PayLineGroup message, length delimited. Does not implicitly {@link GameMsg_DFDC.DFDC_PayLineGroup.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_DFDC.DFDC_PayLineGroup
         * @static
         * @param {GameMsg_DFDC.IDFDC_PayLineGroup} message DFDC_PayLineGroup message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DFDC_PayLineGroup.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DFDC_PayLineGroup message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_DFDC.DFDC_PayLineGroup
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_DFDC.DFDC_PayLineGroup} DFDC_PayLineGroup
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DFDC_PayLineGroup.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_DFDC.DFDC_PayLineGroup();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.PayLineID = reader.int32();
                    break;
                case 2:
                    if (!(message.PayLineDetail && message.PayLineDetail.length))
                        message.PayLineDetail = [];
                    message.PayLineDetail.push($root.GameMsg_DFDC.DFDC_PayLineDetail.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.WinMoney = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("PayLineID"))
                throw $util.ProtocolError("missing required 'PayLineID'", { instance: message });
            return message;
        };

        /**
         * Decodes a DFDC_PayLineGroup message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_DFDC.DFDC_PayLineGroup
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_DFDC.DFDC_PayLineGroup} DFDC_PayLineGroup
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DFDC_PayLineGroup.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DFDC_PayLineGroup message.
         * @function verify
         * @memberof GameMsg_DFDC.DFDC_PayLineGroup
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DFDC_PayLineGroup.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.PayLineID))
                return "PayLineID: integer expected";
            if (message.PayLineDetail != null && message.hasOwnProperty("PayLineDetail")) {
                if (!Array.isArray(message.PayLineDetail))
                    return "PayLineDetail: array expected";
                for (var i = 0; i < message.PayLineDetail.length; ++i) {
                    var error = $root.GameMsg_DFDC.DFDC_PayLineDetail.verify(message.PayLineDetail[i]);
                    if (error)
                        return "PayLineDetail." + error;
                }
            }
            if (message.WinMoney != null && message.hasOwnProperty("WinMoney"))
                if (!$util.isInteger(message.WinMoney))
                    return "WinMoney: integer expected";
            return null;
        };

        /**
         * Creates a DFDC_PayLineGroup message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_DFDC.DFDC_PayLineGroup
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_DFDC.DFDC_PayLineGroup} DFDC_PayLineGroup
         */
        DFDC_PayLineGroup.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_DFDC.DFDC_PayLineGroup)
                return object;
            var message = new $root.GameMsg_DFDC.DFDC_PayLineGroup();
            if (object.PayLineID != null)
                message.PayLineID = object.PayLineID | 0;
            if (object.PayLineDetail) {
                if (!Array.isArray(object.PayLineDetail))
                    throw TypeError(".GameMsg_DFDC.DFDC_PayLineGroup.PayLineDetail: array expected");
                message.PayLineDetail = [];
                for (var i = 0; i < object.PayLineDetail.length; ++i) {
                    if (typeof object.PayLineDetail[i] !== "object")
                        throw TypeError(".GameMsg_DFDC.DFDC_PayLineGroup.PayLineDetail: object expected");
                    message.PayLineDetail[i] = $root.GameMsg_DFDC.DFDC_PayLineDetail.fromObject(object.PayLineDetail[i]);
                }
            }
            if (object.WinMoney != null)
                message.WinMoney = object.WinMoney | 0;
            return message;
        };

        /**
         * Creates a plain object from a DFDC_PayLineGroup message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_DFDC.DFDC_PayLineGroup
         * @static
         * @param {GameMsg_DFDC.DFDC_PayLineGroup} message DFDC_PayLineGroup
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DFDC_PayLineGroup.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.PayLineDetail = [];
            if (options.defaults) {
                object.PayLineID = 0;
                object.WinMoney = 0;
            }
            if (message.PayLineID != null && message.hasOwnProperty("PayLineID"))
                object.PayLineID = message.PayLineID;
            if (message.PayLineDetail && message.PayLineDetail.length) {
                object.PayLineDetail = [];
                for (var j = 0; j < message.PayLineDetail.length; ++j)
                    object.PayLineDetail[j] = $root.GameMsg_DFDC.DFDC_PayLineDetail.toObject(message.PayLineDetail[j], options);
            }
            if (message.WinMoney != null && message.hasOwnProperty("WinMoney"))
                object.WinMoney = message.WinMoney;
            return object;
        };

        /**
         * Converts this DFDC_PayLineGroup to JSON.
         * @function toJSON
         * @memberof GameMsg_DFDC.DFDC_PayLineGroup
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DFDC_PayLineGroup.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return DFDC_PayLineGroup;
    })();

    GameMsg_DFDC.DFDC_PayLineDetail = (function() {

        /**
         * Properties of a DFDC_PayLineDetail.
         * @memberof GameMsg_DFDC
         * @interface IDFDC_PayLineDetail
         * @property {number} ReelID DFDC_PayLineDetail ReelID
         * @property {number} SymbolID DFDC_PayLineDetail SymbolID
         * @property {boolean} Blink DFDC_PayLineDetail Blink
         * @property {boolean} Line DFDC_PayLineDetail Line
         * @property {number|null} [BetNumber] DFDC_PayLineDetail BetNumber
         * @property {number|Long|null} [BetMoney] DFDC_PayLineDetail BetMoney
         */

        /**
         * Constructs a new DFDC_PayLineDetail.
         * @memberof GameMsg_DFDC
         * @classdesc Represents a DFDC_PayLineDetail.
         * @implements IDFDC_PayLineDetail
         * @constructor
         * @param {GameMsg_DFDC.IDFDC_PayLineDetail=} [properties] Properties to set
         */
        function DFDC_PayLineDetail(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DFDC_PayLineDetail ReelID.
         * @member {number} ReelID
         * @memberof GameMsg_DFDC.DFDC_PayLineDetail
         * @instance
         */
        DFDC_PayLineDetail.prototype.ReelID = 0;

        /**
         * DFDC_PayLineDetail SymbolID.
         * @member {number} SymbolID
         * @memberof GameMsg_DFDC.DFDC_PayLineDetail
         * @instance
         */
        DFDC_PayLineDetail.prototype.SymbolID = 0;

        /**
         * DFDC_PayLineDetail Blink.
         * @member {boolean} Blink
         * @memberof GameMsg_DFDC.DFDC_PayLineDetail
         * @instance
         */
        DFDC_PayLineDetail.prototype.Blink = false;

        /**
         * DFDC_PayLineDetail Line.
         * @member {boolean} Line
         * @memberof GameMsg_DFDC.DFDC_PayLineDetail
         * @instance
         */
        DFDC_PayLineDetail.prototype.Line = false;

        /**
         * DFDC_PayLineDetail BetNumber.
         * @member {number} BetNumber
         * @memberof GameMsg_DFDC.DFDC_PayLineDetail
         * @instance
         */
        DFDC_PayLineDetail.prototype.BetNumber = 0;

        /**
         * DFDC_PayLineDetail BetMoney.
         * @member {number|Long} BetMoney
         * @memberof GameMsg_DFDC.DFDC_PayLineDetail
         * @instance
         */
        DFDC_PayLineDetail.prototype.BetMoney = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new DFDC_PayLineDetail instance using the specified properties.
         * @function create
         * @memberof GameMsg_DFDC.DFDC_PayLineDetail
         * @static
         * @param {GameMsg_DFDC.IDFDC_PayLineDetail=} [properties] Properties to set
         * @returns {GameMsg_DFDC.DFDC_PayLineDetail} DFDC_PayLineDetail instance
         */
        DFDC_PayLineDetail.create = function create(properties) {
            return new DFDC_PayLineDetail(properties);
        };

        /**
         * Encodes the specified DFDC_PayLineDetail message. Does not implicitly {@link GameMsg_DFDC.DFDC_PayLineDetail.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_DFDC.DFDC_PayLineDetail
         * @static
         * @param {GameMsg_DFDC.IDFDC_PayLineDetail} message DFDC_PayLineDetail message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DFDC_PayLineDetail.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.ReelID);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.SymbolID);
            writer.uint32(/* id 3, wireType 0 =*/24).bool(message.Blink);
            writer.uint32(/* id 4, wireType 0 =*/32).bool(message.Line);
            if (message.BetNumber != null && message.hasOwnProperty("BetNumber"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.BetNumber);
            if (message.BetMoney != null && message.hasOwnProperty("BetMoney"))
                writer.uint32(/* id 6, wireType 0 =*/48).int64(message.BetMoney);
            return writer;
        };

        /**
         * Encodes the specified DFDC_PayLineDetail message, length delimited. Does not implicitly {@link GameMsg_DFDC.DFDC_PayLineDetail.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_DFDC.DFDC_PayLineDetail
         * @static
         * @param {GameMsg_DFDC.IDFDC_PayLineDetail} message DFDC_PayLineDetail message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DFDC_PayLineDetail.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DFDC_PayLineDetail message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_DFDC.DFDC_PayLineDetail
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_DFDC.DFDC_PayLineDetail} DFDC_PayLineDetail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DFDC_PayLineDetail.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_DFDC.DFDC_PayLineDetail();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.ReelID = reader.int32();
                    break;
                case 2:
                    message.SymbolID = reader.int32();
                    break;
                case 3:
                    message.Blink = reader.bool();
                    break;
                case 4:
                    message.Line = reader.bool();
                    break;
                case 5:
                    message.BetNumber = reader.int32();
                    break;
                case 6:
                    message.BetMoney = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("ReelID"))
                throw $util.ProtocolError("missing required 'ReelID'", { instance: message });
            if (!message.hasOwnProperty("SymbolID"))
                throw $util.ProtocolError("missing required 'SymbolID'", { instance: message });
            if (!message.hasOwnProperty("Blink"))
                throw $util.ProtocolError("missing required 'Blink'", { instance: message });
            if (!message.hasOwnProperty("Line"))
                throw $util.ProtocolError("missing required 'Line'", { instance: message });
            return message;
        };

        /**
         * Decodes a DFDC_PayLineDetail message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_DFDC.DFDC_PayLineDetail
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_DFDC.DFDC_PayLineDetail} DFDC_PayLineDetail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DFDC_PayLineDetail.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DFDC_PayLineDetail message.
         * @function verify
         * @memberof GameMsg_DFDC.DFDC_PayLineDetail
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DFDC_PayLineDetail.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.ReelID))
                return "ReelID: integer expected";
            if (!$util.isInteger(message.SymbolID))
                return "SymbolID: integer expected";
            if (typeof message.Blink !== "boolean")
                return "Blink: boolean expected";
            if (typeof message.Line !== "boolean")
                return "Line: boolean expected";
            if (message.BetNumber != null && message.hasOwnProperty("BetNumber"))
                if (!$util.isInteger(message.BetNumber))
                    return "BetNumber: integer expected";
            if (message.BetMoney != null && message.hasOwnProperty("BetMoney"))
                if (!$util.isInteger(message.BetMoney) && !(message.BetMoney && $util.isInteger(message.BetMoney.low) && $util.isInteger(message.BetMoney.high)))
                    return "BetMoney: integer|Long expected";
            return null;
        };

        /**
         * Creates a DFDC_PayLineDetail message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_DFDC.DFDC_PayLineDetail
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_DFDC.DFDC_PayLineDetail} DFDC_PayLineDetail
         */
        DFDC_PayLineDetail.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_DFDC.DFDC_PayLineDetail)
                return object;
            var message = new $root.GameMsg_DFDC.DFDC_PayLineDetail();
            if (object.ReelID != null)
                message.ReelID = object.ReelID | 0;
            if (object.SymbolID != null)
                message.SymbolID = object.SymbolID | 0;
            if (object.Blink != null)
                message.Blink = Boolean(object.Blink);
            if (object.Line != null)
                message.Line = Boolean(object.Line);
            if (object.BetNumber != null)
                message.BetNumber = object.BetNumber | 0;
            if (object.BetMoney != null)
                if ($util.Long)
                    (message.BetMoney = $util.Long.fromValue(object.BetMoney)).unsigned = false;
                else if (typeof object.BetMoney === "string")
                    message.BetMoney = parseInt(object.BetMoney, 10);
                else if (typeof object.BetMoney === "number")
                    message.BetMoney = object.BetMoney;
                else if (typeof object.BetMoney === "object")
                    message.BetMoney = new $util.LongBits(object.BetMoney.low >>> 0, object.BetMoney.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a DFDC_PayLineDetail message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_DFDC.DFDC_PayLineDetail
         * @static
         * @param {GameMsg_DFDC.DFDC_PayLineDetail} message DFDC_PayLineDetail
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DFDC_PayLineDetail.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.ReelID = 0;
                object.SymbolID = 0;
                object.Blink = false;
                object.Line = false;
                object.BetNumber = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.BetMoney = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.BetMoney = options.longs === String ? "0" : 0;
            }
            if (message.ReelID != null && message.hasOwnProperty("ReelID"))
                object.ReelID = message.ReelID;
            if (message.SymbolID != null && message.hasOwnProperty("SymbolID"))
                object.SymbolID = message.SymbolID;
            if (message.Blink != null && message.hasOwnProperty("Blink"))
                object.Blink = message.Blink;
            if (message.Line != null && message.hasOwnProperty("Line"))
                object.Line = message.Line;
            if (message.BetNumber != null && message.hasOwnProperty("BetNumber"))
                object.BetNumber = message.BetNumber;
            if (message.BetMoney != null && message.hasOwnProperty("BetMoney"))
                if (typeof message.BetMoney === "number")
                    object.BetMoney = options.longs === String ? String(message.BetMoney) : message.BetMoney;
                else
                    object.BetMoney = options.longs === String ? $util.Long.prototype.toString.call(message.BetMoney) : options.longs === Number ? new $util.LongBits(message.BetMoney.low >>> 0, message.BetMoney.high >>> 0).toNumber() : message.BetMoney;
            return object;
        };

        /**
         * Converts this DFDC_PayLineDetail to JSON.
         * @function toJSON
         * @memberof GameMsg_DFDC.DFDC_PayLineDetail
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DFDC_PayLineDetail.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return DFDC_PayLineDetail;
    })();

    GameMsg_DFDC.DFDC_GameStatus = (function() {

        /**
         * Properties of a DFDC_GameStatus.
         * @memberof GameMsg_DFDC
         * @interface IDFDC_GameStatus
         * @property {number} State DFDC_GameStatus State
         */

        /**
         * Constructs a new DFDC_GameStatus.
         * @memberof GameMsg_DFDC
         * @classdesc Represents a DFDC_GameStatus.
         * @implements IDFDC_GameStatus
         * @constructor
         * @param {GameMsg_DFDC.IDFDC_GameStatus=} [properties] Properties to set
         */
        function DFDC_GameStatus(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DFDC_GameStatus State.
         * @member {number} State
         * @memberof GameMsg_DFDC.DFDC_GameStatus
         * @instance
         */
        DFDC_GameStatus.prototype.State = 0;

        /**
         * Creates a new DFDC_GameStatus instance using the specified properties.
         * @function create
         * @memberof GameMsg_DFDC.DFDC_GameStatus
         * @static
         * @param {GameMsg_DFDC.IDFDC_GameStatus=} [properties] Properties to set
         * @returns {GameMsg_DFDC.DFDC_GameStatus} DFDC_GameStatus instance
         */
        DFDC_GameStatus.create = function create(properties) {
            return new DFDC_GameStatus(properties);
        };

        /**
         * Encodes the specified DFDC_GameStatus message. Does not implicitly {@link GameMsg_DFDC.DFDC_GameStatus.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_DFDC.DFDC_GameStatus
         * @static
         * @param {GameMsg_DFDC.IDFDC_GameStatus} message DFDC_GameStatus message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DFDC_GameStatus.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.State);
            return writer;
        };

        /**
         * Encodes the specified DFDC_GameStatus message, length delimited. Does not implicitly {@link GameMsg_DFDC.DFDC_GameStatus.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_DFDC.DFDC_GameStatus
         * @static
         * @param {GameMsg_DFDC.IDFDC_GameStatus} message DFDC_GameStatus message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DFDC_GameStatus.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DFDC_GameStatus message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_DFDC.DFDC_GameStatus
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_DFDC.DFDC_GameStatus} DFDC_GameStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DFDC_GameStatus.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_DFDC.DFDC_GameStatus();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.State = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("State"))
                throw $util.ProtocolError("missing required 'State'", { instance: message });
            return message;
        };

        /**
         * Decodes a DFDC_GameStatus message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_DFDC.DFDC_GameStatus
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_DFDC.DFDC_GameStatus} DFDC_GameStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DFDC_GameStatus.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DFDC_GameStatus message.
         * @function verify
         * @memberof GameMsg_DFDC.DFDC_GameStatus
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DFDC_GameStatus.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.State))
                return "State: integer expected";
            return null;
        };

        /**
         * Creates a DFDC_GameStatus message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_DFDC.DFDC_GameStatus
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_DFDC.DFDC_GameStatus} DFDC_GameStatus
         */
        DFDC_GameStatus.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_DFDC.DFDC_GameStatus)
                return object;
            var message = new $root.GameMsg_DFDC.DFDC_GameStatus();
            if (object.State != null)
                message.State = object.State | 0;
            return message;
        };

        /**
         * Creates a plain object from a DFDC_GameStatus message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_DFDC.DFDC_GameStatus
         * @static
         * @param {GameMsg_DFDC.DFDC_GameStatus} message DFDC_GameStatus
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DFDC_GameStatus.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.State = 0;
            if (message.State != null && message.hasOwnProperty("State"))
                object.State = message.State;
            return object;
        };

        /**
         * Converts this DFDC_GameStatus to JSON.
         * @function toJSON
         * @memberof GameMsg_DFDC.DFDC_GameStatus
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DFDC_GameStatus.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return DFDC_GameStatus;
    })();

    GameMsg_DFDC.DFDC_StartBet = (function() {

        /**
         * Properties of a DFDC_StartBet.
         * @memberof GameMsg_DFDC
         * @interface IDFDC_StartBet
         * @property {number|Long} Money DFDC_StartBet Money
         * @property {number} GoldenSymbol DFDC_StartBet GoldenSymbol
         */

        /**
         * Constructs a new DFDC_StartBet.
         * @memberof GameMsg_DFDC
         * @classdesc Represents a DFDC_StartBet.
         * @implements IDFDC_StartBet
         * @constructor
         * @param {GameMsg_DFDC.IDFDC_StartBet=} [properties] Properties to set
         */
        function DFDC_StartBet(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DFDC_StartBet Money.
         * @member {number|Long} Money
         * @memberof GameMsg_DFDC.DFDC_StartBet
         * @instance
         */
        DFDC_StartBet.prototype.Money = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * DFDC_StartBet GoldenSymbol.
         * @member {number} GoldenSymbol
         * @memberof GameMsg_DFDC.DFDC_StartBet
         * @instance
         */
        DFDC_StartBet.prototype.GoldenSymbol = 0;

        /**
         * Creates a new DFDC_StartBet instance using the specified properties.
         * @function create
         * @memberof GameMsg_DFDC.DFDC_StartBet
         * @static
         * @param {GameMsg_DFDC.IDFDC_StartBet=} [properties] Properties to set
         * @returns {GameMsg_DFDC.DFDC_StartBet} DFDC_StartBet instance
         */
        DFDC_StartBet.create = function create(properties) {
            return new DFDC_StartBet(properties);
        };

        /**
         * Encodes the specified DFDC_StartBet message. Does not implicitly {@link GameMsg_DFDC.DFDC_StartBet.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_DFDC.DFDC_StartBet
         * @static
         * @param {GameMsg_DFDC.IDFDC_StartBet} message DFDC_StartBet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DFDC_StartBet.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int64(message.Money);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.GoldenSymbol);
            return writer;
        };

        /**
         * Encodes the specified DFDC_StartBet message, length delimited. Does not implicitly {@link GameMsg_DFDC.DFDC_StartBet.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_DFDC.DFDC_StartBet
         * @static
         * @param {GameMsg_DFDC.IDFDC_StartBet} message DFDC_StartBet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DFDC_StartBet.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DFDC_StartBet message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_DFDC.DFDC_StartBet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_DFDC.DFDC_StartBet} DFDC_StartBet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DFDC_StartBet.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_DFDC.DFDC_StartBet();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Money = reader.int64();
                    break;
                case 2:
                    message.GoldenSymbol = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("Money"))
                throw $util.ProtocolError("missing required 'Money'", { instance: message });
            if (!message.hasOwnProperty("GoldenSymbol"))
                throw $util.ProtocolError("missing required 'GoldenSymbol'", { instance: message });
            return message;
        };

        /**
         * Decodes a DFDC_StartBet message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_DFDC.DFDC_StartBet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_DFDC.DFDC_StartBet} DFDC_StartBet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DFDC_StartBet.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DFDC_StartBet message.
         * @function verify
         * @memberof GameMsg_DFDC.DFDC_StartBet
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DFDC_StartBet.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.Money) && !(message.Money && $util.isInteger(message.Money.low) && $util.isInteger(message.Money.high)))
                return "Money: integer|Long expected";
            if (!$util.isInteger(message.GoldenSymbol))
                return "GoldenSymbol: integer expected";
            return null;
        };

        /**
         * Creates a DFDC_StartBet message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_DFDC.DFDC_StartBet
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_DFDC.DFDC_StartBet} DFDC_StartBet
         */
        DFDC_StartBet.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_DFDC.DFDC_StartBet)
                return object;
            var message = new $root.GameMsg_DFDC.DFDC_StartBet();
            if (object.Money != null)
                if ($util.Long)
                    (message.Money = $util.Long.fromValue(object.Money)).unsigned = false;
                else if (typeof object.Money === "string")
                    message.Money = parseInt(object.Money, 10);
                else if (typeof object.Money === "number")
                    message.Money = object.Money;
                else if (typeof object.Money === "object")
                    message.Money = new $util.LongBits(object.Money.low >>> 0, object.Money.high >>> 0).toNumber();
            if (object.GoldenSymbol != null)
                message.GoldenSymbol = object.GoldenSymbol | 0;
            return message;
        };

        /**
         * Creates a plain object from a DFDC_StartBet message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_DFDC.DFDC_StartBet
         * @static
         * @param {GameMsg_DFDC.DFDC_StartBet} message DFDC_StartBet
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DFDC_StartBet.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.Money = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.Money = options.longs === String ? "0" : 0;
                object.GoldenSymbol = 0;
            }
            if (message.Money != null && message.hasOwnProperty("Money"))
                if (typeof message.Money === "number")
                    object.Money = options.longs === String ? String(message.Money) : message.Money;
                else
                    object.Money = options.longs === String ? $util.Long.prototype.toString.call(message.Money) : options.longs === Number ? new $util.LongBits(message.Money.low >>> 0, message.Money.high >>> 0).toNumber() : message.Money;
            if (message.GoldenSymbol != null && message.hasOwnProperty("GoldenSymbol"))
                object.GoldenSymbol = message.GoldenSymbol;
            return object;
        };

        /**
         * Converts this DFDC_StartBet to JSON.
         * @function toJSON
         * @memberof GameMsg_DFDC.DFDC_StartBet
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DFDC_StartBet.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return DFDC_StartBet;
    })();

    GameMsg_DFDC.DFDC_BetRet = (function() {

        /**
         * Properties of a DFDC_BetRet.
         * @memberof GameMsg_DFDC
         * @interface IDFDC_BetRet
         * @property {number} Ret DFDC_BetRet Ret
         * @property {number|Long} Money DFDC_BetRet Money
         */

        /**
         * Constructs a new DFDC_BetRet.
         * @memberof GameMsg_DFDC
         * @classdesc Represents a DFDC_BetRet.
         * @implements IDFDC_BetRet
         * @constructor
         * @param {GameMsg_DFDC.IDFDC_BetRet=} [properties] Properties to set
         */
        function DFDC_BetRet(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DFDC_BetRet Ret.
         * @member {number} Ret
         * @memberof GameMsg_DFDC.DFDC_BetRet
         * @instance
         */
        DFDC_BetRet.prototype.Ret = 0;

        /**
         * DFDC_BetRet Money.
         * @member {number|Long} Money
         * @memberof GameMsg_DFDC.DFDC_BetRet
         * @instance
         */
        DFDC_BetRet.prototype.Money = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new DFDC_BetRet instance using the specified properties.
         * @function create
         * @memberof GameMsg_DFDC.DFDC_BetRet
         * @static
         * @param {GameMsg_DFDC.IDFDC_BetRet=} [properties] Properties to set
         * @returns {GameMsg_DFDC.DFDC_BetRet} DFDC_BetRet instance
         */
        DFDC_BetRet.create = function create(properties) {
            return new DFDC_BetRet(properties);
        };

        /**
         * Encodes the specified DFDC_BetRet message. Does not implicitly {@link GameMsg_DFDC.DFDC_BetRet.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_DFDC.DFDC_BetRet
         * @static
         * @param {GameMsg_DFDC.IDFDC_BetRet} message DFDC_BetRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DFDC_BetRet.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.Ret);
            writer.uint32(/* id 2, wireType 0 =*/16).int64(message.Money);
            return writer;
        };

        /**
         * Encodes the specified DFDC_BetRet message, length delimited. Does not implicitly {@link GameMsg_DFDC.DFDC_BetRet.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_DFDC.DFDC_BetRet
         * @static
         * @param {GameMsg_DFDC.IDFDC_BetRet} message DFDC_BetRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DFDC_BetRet.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DFDC_BetRet message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_DFDC.DFDC_BetRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_DFDC.DFDC_BetRet} DFDC_BetRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DFDC_BetRet.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_DFDC.DFDC_BetRet();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Ret = reader.int32();
                    break;
                case 2:
                    message.Money = reader.int64();
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
         * Decodes a DFDC_BetRet message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_DFDC.DFDC_BetRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_DFDC.DFDC_BetRet} DFDC_BetRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DFDC_BetRet.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DFDC_BetRet message.
         * @function verify
         * @memberof GameMsg_DFDC.DFDC_BetRet
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DFDC_BetRet.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.Ret))
                return "Ret: integer expected";
            if (!$util.isInteger(message.Money) && !(message.Money && $util.isInteger(message.Money.low) && $util.isInteger(message.Money.high)))
                return "Money: integer|Long expected";
            return null;
        };

        /**
         * Creates a DFDC_BetRet message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_DFDC.DFDC_BetRet
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_DFDC.DFDC_BetRet} DFDC_BetRet
         */
        DFDC_BetRet.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_DFDC.DFDC_BetRet)
                return object;
            var message = new $root.GameMsg_DFDC.DFDC_BetRet();
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
            return message;
        };

        /**
         * Creates a plain object from a DFDC_BetRet message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_DFDC.DFDC_BetRet
         * @static
         * @param {GameMsg_DFDC.DFDC_BetRet} message DFDC_BetRet
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DFDC_BetRet.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.Ret = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.Money = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.Money = options.longs === String ? "0" : 0;
            }
            if (message.Ret != null && message.hasOwnProperty("Ret"))
                object.Ret = message.Ret;
            if (message.Money != null && message.hasOwnProperty("Money"))
                if (typeof message.Money === "number")
                    object.Money = options.longs === String ? String(message.Money) : message.Money;
                else
                    object.Money = options.longs === String ? $util.Long.prototype.toString.call(message.Money) : options.longs === Number ? new $util.LongBits(message.Money.low >>> 0, message.Money.high >>> 0).toNumber() : message.Money;
            return object;
        };

        /**
         * Converts this DFDC_BetRet to JSON.
         * @function toJSON
         * @memberof GameMsg_DFDC.DFDC_BetRet
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DFDC_BetRet.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return DFDC_BetRet;
    })();

    GameMsg_DFDC.DFDC_GetJackpotMsg = (function() {

        /**
         * Properties of a DFDC_GetJackpotMsg.
         * @memberof GameMsg_DFDC
         * @interface IDFDC_GetJackpotMsg
         * @property {number} ServerID DFDC_GetJackpotMsg ServerID
         * @property {number} FlagID DFDC_GetJackpotMsg FlagID
         * @property {number} TableNo DFDC_GetJackpotMsg TableNo
         * @property {number} JackpotID DFDC_GetJackpotMsg JackpotID
         */

        /**
         * Constructs a new DFDC_GetJackpotMsg.
         * @memberof GameMsg_DFDC
         * @classdesc Represents a DFDC_GetJackpotMsg.
         * @implements IDFDC_GetJackpotMsg
         * @constructor
         * @param {GameMsg_DFDC.IDFDC_GetJackpotMsg=} [properties] Properties to set
         */
        function DFDC_GetJackpotMsg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DFDC_GetJackpotMsg ServerID.
         * @member {number} ServerID
         * @memberof GameMsg_DFDC.DFDC_GetJackpotMsg
         * @instance
         */
        DFDC_GetJackpotMsg.prototype.ServerID = 0;

        /**
         * DFDC_GetJackpotMsg FlagID.
         * @member {number} FlagID
         * @memberof GameMsg_DFDC.DFDC_GetJackpotMsg
         * @instance
         */
        DFDC_GetJackpotMsg.prototype.FlagID = 0;

        /**
         * DFDC_GetJackpotMsg TableNo.
         * @member {number} TableNo
         * @memberof GameMsg_DFDC.DFDC_GetJackpotMsg
         * @instance
         */
        DFDC_GetJackpotMsg.prototype.TableNo = 0;

        /**
         * DFDC_GetJackpotMsg JackpotID.
         * @member {number} JackpotID
         * @memberof GameMsg_DFDC.DFDC_GetJackpotMsg
         * @instance
         */
        DFDC_GetJackpotMsg.prototype.JackpotID = 0;

        /**
         * Creates a new DFDC_GetJackpotMsg instance using the specified properties.
         * @function create
         * @memberof GameMsg_DFDC.DFDC_GetJackpotMsg
         * @static
         * @param {GameMsg_DFDC.IDFDC_GetJackpotMsg=} [properties] Properties to set
         * @returns {GameMsg_DFDC.DFDC_GetJackpotMsg} DFDC_GetJackpotMsg instance
         */
        DFDC_GetJackpotMsg.create = function create(properties) {
            return new DFDC_GetJackpotMsg(properties);
        };

        /**
         * Encodes the specified DFDC_GetJackpotMsg message. Does not implicitly {@link GameMsg_DFDC.DFDC_GetJackpotMsg.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_DFDC.DFDC_GetJackpotMsg
         * @static
         * @param {GameMsg_DFDC.IDFDC_GetJackpotMsg} message DFDC_GetJackpotMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DFDC_GetJackpotMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.ServerID);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.FlagID);
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.TableNo);
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.JackpotID);
            return writer;
        };

        /**
         * Encodes the specified DFDC_GetJackpotMsg message, length delimited. Does not implicitly {@link GameMsg_DFDC.DFDC_GetJackpotMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_DFDC.DFDC_GetJackpotMsg
         * @static
         * @param {GameMsg_DFDC.IDFDC_GetJackpotMsg} message DFDC_GetJackpotMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DFDC_GetJackpotMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DFDC_GetJackpotMsg message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_DFDC.DFDC_GetJackpotMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_DFDC.DFDC_GetJackpotMsg} DFDC_GetJackpotMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DFDC_GetJackpotMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_DFDC.DFDC_GetJackpotMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.ServerID = reader.int32();
                    break;
                case 2:
                    message.FlagID = reader.int32();
                    break;
                case 3:
                    message.TableNo = reader.int32();
                    break;
                case 4:
                    message.JackpotID = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("ServerID"))
                throw $util.ProtocolError("missing required 'ServerID'", { instance: message });
            if (!message.hasOwnProperty("FlagID"))
                throw $util.ProtocolError("missing required 'FlagID'", { instance: message });
            if (!message.hasOwnProperty("TableNo"))
                throw $util.ProtocolError("missing required 'TableNo'", { instance: message });
            if (!message.hasOwnProperty("JackpotID"))
                throw $util.ProtocolError("missing required 'JackpotID'", { instance: message });
            return message;
        };

        /**
         * Decodes a DFDC_GetJackpotMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_DFDC.DFDC_GetJackpotMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_DFDC.DFDC_GetJackpotMsg} DFDC_GetJackpotMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DFDC_GetJackpotMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DFDC_GetJackpotMsg message.
         * @function verify
         * @memberof GameMsg_DFDC.DFDC_GetJackpotMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DFDC_GetJackpotMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.ServerID))
                return "ServerID: integer expected";
            if (!$util.isInteger(message.FlagID))
                return "FlagID: integer expected";
            if (!$util.isInteger(message.TableNo))
                return "TableNo: integer expected";
            if (!$util.isInteger(message.JackpotID))
                return "JackpotID: integer expected";
            return null;
        };

        /**
         * Creates a DFDC_GetJackpotMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_DFDC.DFDC_GetJackpotMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_DFDC.DFDC_GetJackpotMsg} DFDC_GetJackpotMsg
         */
        DFDC_GetJackpotMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_DFDC.DFDC_GetJackpotMsg)
                return object;
            var message = new $root.GameMsg_DFDC.DFDC_GetJackpotMsg();
            if (object.ServerID != null)
                message.ServerID = object.ServerID | 0;
            if (object.FlagID != null)
                message.FlagID = object.FlagID | 0;
            if (object.TableNo != null)
                message.TableNo = object.TableNo | 0;
            if (object.JackpotID != null)
                message.JackpotID = object.JackpotID | 0;
            return message;
        };

        /**
         * Creates a plain object from a DFDC_GetJackpotMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_DFDC.DFDC_GetJackpotMsg
         * @static
         * @param {GameMsg_DFDC.DFDC_GetJackpotMsg} message DFDC_GetJackpotMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DFDC_GetJackpotMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.ServerID = 0;
                object.FlagID = 0;
                object.TableNo = 0;
                object.JackpotID = 0;
            }
            if (message.ServerID != null && message.hasOwnProperty("ServerID"))
                object.ServerID = message.ServerID;
            if (message.FlagID != null && message.hasOwnProperty("FlagID"))
                object.FlagID = message.FlagID;
            if (message.TableNo != null && message.hasOwnProperty("TableNo"))
                object.TableNo = message.TableNo;
            if (message.JackpotID != null && message.hasOwnProperty("JackpotID"))
                object.JackpotID = message.JackpotID;
            return object;
        };

        /**
         * Converts this DFDC_GetJackpotMsg to JSON.
         * @function toJSON
         * @memberof GameMsg_DFDC.DFDC_GetJackpotMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DFDC_GetJackpotMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return DFDC_GetJackpotMsg;
    })();

    GameMsg_DFDC.DFDC_GetJackpotRet = (function() {

        /**
         * Properties of a DFDC_GetJackpotRet.
         * @memberof GameMsg_DFDC
         * @interface IDFDC_GetJackpotRet
         * @property {number} ServerID DFDC_GetJackpotRet ServerID
         * @property {number} FlagID DFDC_GetJackpotRet FlagID
         * @property {number} TableNo DFDC_GetJackpotRet TableNo
         * @property {number} JackpotID DFDC_GetJackpotRet JackpotID
         * @property {number|Long} SpinStack DFDC_GetJackpotRet SpinStack
         * @property {number|Long} PoolAmount DFDC_GetJackpotRet PoolAmount
         * @property {number|Long} JPAmountOut DFDC_GetJackpotRet JPAmountOut
         */

        /**
         * Constructs a new DFDC_GetJackpotRet.
         * @memberof GameMsg_DFDC
         * @classdesc Represents a DFDC_GetJackpotRet.
         * @implements IDFDC_GetJackpotRet
         * @constructor
         * @param {GameMsg_DFDC.IDFDC_GetJackpotRet=} [properties] Properties to set
         */
        function DFDC_GetJackpotRet(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DFDC_GetJackpotRet ServerID.
         * @member {number} ServerID
         * @memberof GameMsg_DFDC.DFDC_GetJackpotRet
         * @instance
         */
        DFDC_GetJackpotRet.prototype.ServerID = 0;

        /**
         * DFDC_GetJackpotRet FlagID.
         * @member {number} FlagID
         * @memberof GameMsg_DFDC.DFDC_GetJackpotRet
         * @instance
         */
        DFDC_GetJackpotRet.prototype.FlagID = 0;

        /**
         * DFDC_GetJackpotRet TableNo.
         * @member {number} TableNo
         * @memberof GameMsg_DFDC.DFDC_GetJackpotRet
         * @instance
         */
        DFDC_GetJackpotRet.prototype.TableNo = 0;

        /**
         * DFDC_GetJackpotRet JackpotID.
         * @member {number} JackpotID
         * @memberof GameMsg_DFDC.DFDC_GetJackpotRet
         * @instance
         */
        DFDC_GetJackpotRet.prototype.JackpotID = 0;

        /**
         * DFDC_GetJackpotRet SpinStack.
         * @member {number|Long} SpinStack
         * @memberof GameMsg_DFDC.DFDC_GetJackpotRet
         * @instance
         */
        DFDC_GetJackpotRet.prototype.SpinStack = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * DFDC_GetJackpotRet PoolAmount.
         * @member {number|Long} PoolAmount
         * @memberof GameMsg_DFDC.DFDC_GetJackpotRet
         * @instance
         */
        DFDC_GetJackpotRet.prototype.PoolAmount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * DFDC_GetJackpotRet JPAmountOut.
         * @member {number|Long} JPAmountOut
         * @memberof GameMsg_DFDC.DFDC_GetJackpotRet
         * @instance
         */
        DFDC_GetJackpotRet.prototype.JPAmountOut = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new DFDC_GetJackpotRet instance using the specified properties.
         * @function create
         * @memberof GameMsg_DFDC.DFDC_GetJackpotRet
         * @static
         * @param {GameMsg_DFDC.IDFDC_GetJackpotRet=} [properties] Properties to set
         * @returns {GameMsg_DFDC.DFDC_GetJackpotRet} DFDC_GetJackpotRet instance
         */
        DFDC_GetJackpotRet.create = function create(properties) {
            return new DFDC_GetJackpotRet(properties);
        };

        /**
         * Encodes the specified DFDC_GetJackpotRet message. Does not implicitly {@link GameMsg_DFDC.DFDC_GetJackpotRet.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_DFDC.DFDC_GetJackpotRet
         * @static
         * @param {GameMsg_DFDC.IDFDC_GetJackpotRet} message DFDC_GetJackpotRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DFDC_GetJackpotRet.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.ServerID);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.FlagID);
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.TableNo);
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.JackpotID);
            writer.uint32(/* id 5, wireType 0 =*/40).int64(message.SpinStack);
            writer.uint32(/* id 6, wireType 0 =*/48).int64(message.PoolAmount);
            writer.uint32(/* id 7, wireType 0 =*/56).int64(message.JPAmountOut);
            return writer;
        };

        /**
         * Encodes the specified DFDC_GetJackpotRet message, length delimited. Does not implicitly {@link GameMsg_DFDC.DFDC_GetJackpotRet.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_DFDC.DFDC_GetJackpotRet
         * @static
         * @param {GameMsg_DFDC.IDFDC_GetJackpotRet} message DFDC_GetJackpotRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DFDC_GetJackpotRet.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DFDC_GetJackpotRet message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_DFDC.DFDC_GetJackpotRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_DFDC.DFDC_GetJackpotRet} DFDC_GetJackpotRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DFDC_GetJackpotRet.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_DFDC.DFDC_GetJackpotRet();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.ServerID = reader.int32();
                    break;
                case 2:
                    message.FlagID = reader.int32();
                    break;
                case 3:
                    message.TableNo = reader.int32();
                    break;
                case 4:
                    message.JackpotID = reader.int32();
                    break;
                case 5:
                    message.SpinStack = reader.int64();
                    break;
                case 6:
                    message.PoolAmount = reader.int64();
                    break;
                case 7:
                    message.JPAmountOut = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("ServerID"))
                throw $util.ProtocolError("missing required 'ServerID'", { instance: message });
            if (!message.hasOwnProperty("FlagID"))
                throw $util.ProtocolError("missing required 'FlagID'", { instance: message });
            if (!message.hasOwnProperty("TableNo"))
                throw $util.ProtocolError("missing required 'TableNo'", { instance: message });
            if (!message.hasOwnProperty("JackpotID"))
                throw $util.ProtocolError("missing required 'JackpotID'", { instance: message });
            if (!message.hasOwnProperty("SpinStack"))
                throw $util.ProtocolError("missing required 'SpinStack'", { instance: message });
            if (!message.hasOwnProperty("PoolAmount"))
                throw $util.ProtocolError("missing required 'PoolAmount'", { instance: message });
            if (!message.hasOwnProperty("JPAmountOut"))
                throw $util.ProtocolError("missing required 'JPAmountOut'", { instance: message });
            return message;
        };

        /**
         * Decodes a DFDC_GetJackpotRet message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_DFDC.DFDC_GetJackpotRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_DFDC.DFDC_GetJackpotRet} DFDC_GetJackpotRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DFDC_GetJackpotRet.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DFDC_GetJackpotRet message.
         * @function verify
         * @memberof GameMsg_DFDC.DFDC_GetJackpotRet
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DFDC_GetJackpotRet.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.ServerID))
                return "ServerID: integer expected";
            if (!$util.isInteger(message.FlagID))
                return "FlagID: integer expected";
            if (!$util.isInteger(message.TableNo))
                return "TableNo: integer expected";
            if (!$util.isInteger(message.JackpotID))
                return "JackpotID: integer expected";
            if (!$util.isInteger(message.SpinStack) && !(message.SpinStack && $util.isInteger(message.SpinStack.low) && $util.isInteger(message.SpinStack.high)))
                return "SpinStack: integer|Long expected";
            if (!$util.isInteger(message.PoolAmount) && !(message.PoolAmount && $util.isInteger(message.PoolAmount.low) && $util.isInteger(message.PoolAmount.high)))
                return "PoolAmount: integer|Long expected";
            if (!$util.isInteger(message.JPAmountOut) && !(message.JPAmountOut && $util.isInteger(message.JPAmountOut.low) && $util.isInteger(message.JPAmountOut.high)))
                return "JPAmountOut: integer|Long expected";
            return null;
        };

        /**
         * Creates a DFDC_GetJackpotRet message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_DFDC.DFDC_GetJackpotRet
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_DFDC.DFDC_GetJackpotRet} DFDC_GetJackpotRet
         */
        DFDC_GetJackpotRet.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_DFDC.DFDC_GetJackpotRet)
                return object;
            var message = new $root.GameMsg_DFDC.DFDC_GetJackpotRet();
            if (object.ServerID != null)
                message.ServerID = object.ServerID | 0;
            if (object.FlagID != null)
                message.FlagID = object.FlagID | 0;
            if (object.TableNo != null)
                message.TableNo = object.TableNo | 0;
            if (object.JackpotID != null)
                message.JackpotID = object.JackpotID | 0;
            if (object.SpinStack != null)
                if ($util.Long)
                    (message.SpinStack = $util.Long.fromValue(object.SpinStack)).unsigned = false;
                else if (typeof object.SpinStack === "string")
                    message.SpinStack = parseInt(object.SpinStack, 10);
                else if (typeof object.SpinStack === "number")
                    message.SpinStack = object.SpinStack;
                else if (typeof object.SpinStack === "object")
                    message.SpinStack = new $util.LongBits(object.SpinStack.low >>> 0, object.SpinStack.high >>> 0).toNumber();
            if (object.PoolAmount != null)
                if ($util.Long)
                    (message.PoolAmount = $util.Long.fromValue(object.PoolAmount)).unsigned = false;
                else if (typeof object.PoolAmount === "string")
                    message.PoolAmount = parseInt(object.PoolAmount, 10);
                else if (typeof object.PoolAmount === "number")
                    message.PoolAmount = object.PoolAmount;
                else if (typeof object.PoolAmount === "object")
                    message.PoolAmount = new $util.LongBits(object.PoolAmount.low >>> 0, object.PoolAmount.high >>> 0).toNumber();
            if (object.JPAmountOut != null)
                if ($util.Long)
                    (message.JPAmountOut = $util.Long.fromValue(object.JPAmountOut)).unsigned = false;
                else if (typeof object.JPAmountOut === "string")
                    message.JPAmountOut = parseInt(object.JPAmountOut, 10);
                else if (typeof object.JPAmountOut === "number")
                    message.JPAmountOut = object.JPAmountOut;
                else if (typeof object.JPAmountOut === "object")
                    message.JPAmountOut = new $util.LongBits(object.JPAmountOut.low >>> 0, object.JPAmountOut.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a DFDC_GetJackpotRet message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_DFDC.DFDC_GetJackpotRet
         * @static
         * @param {GameMsg_DFDC.DFDC_GetJackpotRet} message DFDC_GetJackpotRet
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DFDC_GetJackpotRet.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.ServerID = 0;
                object.FlagID = 0;
                object.TableNo = 0;
                object.JackpotID = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.SpinStack = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.SpinStack = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.PoolAmount = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.PoolAmount = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.JPAmountOut = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.JPAmountOut = options.longs === String ? "0" : 0;
            }
            if (message.ServerID != null && message.hasOwnProperty("ServerID"))
                object.ServerID = message.ServerID;
            if (message.FlagID != null && message.hasOwnProperty("FlagID"))
                object.FlagID = message.FlagID;
            if (message.TableNo != null && message.hasOwnProperty("TableNo"))
                object.TableNo = message.TableNo;
            if (message.JackpotID != null && message.hasOwnProperty("JackpotID"))
                object.JackpotID = message.JackpotID;
            if (message.SpinStack != null && message.hasOwnProperty("SpinStack"))
                if (typeof message.SpinStack === "number")
                    object.SpinStack = options.longs === String ? String(message.SpinStack) : message.SpinStack;
                else
                    object.SpinStack = options.longs === String ? $util.Long.prototype.toString.call(message.SpinStack) : options.longs === Number ? new $util.LongBits(message.SpinStack.low >>> 0, message.SpinStack.high >>> 0).toNumber() : message.SpinStack;
            if (message.PoolAmount != null && message.hasOwnProperty("PoolAmount"))
                if (typeof message.PoolAmount === "number")
                    object.PoolAmount = options.longs === String ? String(message.PoolAmount) : message.PoolAmount;
                else
                    object.PoolAmount = options.longs === String ? $util.Long.prototype.toString.call(message.PoolAmount) : options.longs === Number ? new $util.LongBits(message.PoolAmount.low >>> 0, message.PoolAmount.high >>> 0).toNumber() : message.PoolAmount;
            if (message.JPAmountOut != null && message.hasOwnProperty("JPAmountOut"))
                if (typeof message.JPAmountOut === "number")
                    object.JPAmountOut = options.longs === String ? String(message.JPAmountOut) : message.JPAmountOut;
                else
                    object.JPAmountOut = options.longs === String ? $util.Long.prototype.toString.call(message.JPAmountOut) : options.longs === Number ? new $util.LongBits(message.JPAmountOut.low >>> 0, message.JPAmountOut.high >>> 0).toNumber() : message.JPAmountOut;
            return object;
        };

        /**
         * Converts this DFDC_GetJackpotRet to JSON.
         * @function toJSON
         * @memberof GameMsg_DFDC.DFDC_GetJackpotRet
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DFDC_GetJackpotRet.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return DFDC_GetJackpotRet;
    })();

    GameMsg_DFDC.DFDC_JackpotPoolS2CMsg = (function() {

        /**
         * Properties of a DFDC_JackpotPoolS2CMsg.
         * @memberof GameMsg_DFDC
         * @interface IDFDC_JackpotPoolS2CMsg
         * @property {Array.<GameMsg_DFDC.IDFDC_JackpotPoolDetail>|null} [JackpotPoolID] DFDC_JackpotPoolS2CMsg JackpotPoolID
         */

        /**
         * Constructs a new DFDC_JackpotPoolS2CMsg.
         * @memberof GameMsg_DFDC
         * @classdesc Represents a DFDC_JackpotPoolS2CMsg.
         * @implements IDFDC_JackpotPoolS2CMsg
         * @constructor
         * @param {GameMsg_DFDC.IDFDC_JackpotPoolS2CMsg=} [properties] Properties to set
         */
        function DFDC_JackpotPoolS2CMsg(properties) {
            this.JackpotPoolID = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DFDC_JackpotPoolS2CMsg JackpotPoolID.
         * @member {Array.<GameMsg_DFDC.IDFDC_JackpotPoolDetail>} JackpotPoolID
         * @memberof GameMsg_DFDC.DFDC_JackpotPoolS2CMsg
         * @instance
         */
        DFDC_JackpotPoolS2CMsg.prototype.JackpotPoolID = $util.emptyArray;

        /**
         * Creates a new DFDC_JackpotPoolS2CMsg instance using the specified properties.
         * @function create
         * @memberof GameMsg_DFDC.DFDC_JackpotPoolS2CMsg
         * @static
         * @param {GameMsg_DFDC.IDFDC_JackpotPoolS2CMsg=} [properties] Properties to set
         * @returns {GameMsg_DFDC.DFDC_JackpotPoolS2CMsg} DFDC_JackpotPoolS2CMsg instance
         */
        DFDC_JackpotPoolS2CMsg.create = function create(properties) {
            return new DFDC_JackpotPoolS2CMsg(properties);
        };

        /**
         * Encodes the specified DFDC_JackpotPoolS2CMsg message. Does not implicitly {@link GameMsg_DFDC.DFDC_JackpotPoolS2CMsg.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_DFDC.DFDC_JackpotPoolS2CMsg
         * @static
         * @param {GameMsg_DFDC.IDFDC_JackpotPoolS2CMsg} message DFDC_JackpotPoolS2CMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DFDC_JackpotPoolS2CMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.JackpotPoolID != null && message.JackpotPoolID.length)
                for (var i = 0; i < message.JackpotPoolID.length; ++i)
                    $root.GameMsg_DFDC.DFDC_JackpotPoolDetail.encode(message.JackpotPoolID[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified DFDC_JackpotPoolS2CMsg message, length delimited. Does not implicitly {@link GameMsg_DFDC.DFDC_JackpotPoolS2CMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_DFDC.DFDC_JackpotPoolS2CMsg
         * @static
         * @param {GameMsg_DFDC.IDFDC_JackpotPoolS2CMsg} message DFDC_JackpotPoolS2CMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DFDC_JackpotPoolS2CMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DFDC_JackpotPoolS2CMsg message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_DFDC.DFDC_JackpotPoolS2CMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_DFDC.DFDC_JackpotPoolS2CMsg} DFDC_JackpotPoolS2CMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DFDC_JackpotPoolS2CMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_DFDC.DFDC_JackpotPoolS2CMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.JackpotPoolID && message.JackpotPoolID.length))
                        message.JackpotPoolID = [];
                    message.JackpotPoolID.push($root.GameMsg_DFDC.DFDC_JackpotPoolDetail.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a DFDC_JackpotPoolS2CMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_DFDC.DFDC_JackpotPoolS2CMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_DFDC.DFDC_JackpotPoolS2CMsg} DFDC_JackpotPoolS2CMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DFDC_JackpotPoolS2CMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DFDC_JackpotPoolS2CMsg message.
         * @function verify
         * @memberof GameMsg_DFDC.DFDC_JackpotPoolS2CMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DFDC_JackpotPoolS2CMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.JackpotPoolID != null && message.hasOwnProperty("JackpotPoolID")) {
                if (!Array.isArray(message.JackpotPoolID))
                    return "JackpotPoolID: array expected";
                for (var i = 0; i < message.JackpotPoolID.length; ++i) {
                    var error = $root.GameMsg_DFDC.DFDC_JackpotPoolDetail.verify(message.JackpotPoolID[i]);
                    if (error)
                        return "JackpotPoolID." + error;
                }
            }
            return null;
        };

        /**
         * Creates a DFDC_JackpotPoolS2CMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_DFDC.DFDC_JackpotPoolS2CMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_DFDC.DFDC_JackpotPoolS2CMsg} DFDC_JackpotPoolS2CMsg
         */
        DFDC_JackpotPoolS2CMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_DFDC.DFDC_JackpotPoolS2CMsg)
                return object;
            var message = new $root.GameMsg_DFDC.DFDC_JackpotPoolS2CMsg();
            if (object.JackpotPoolID) {
                if (!Array.isArray(object.JackpotPoolID))
                    throw TypeError(".GameMsg_DFDC.DFDC_JackpotPoolS2CMsg.JackpotPoolID: array expected");
                message.JackpotPoolID = [];
                for (var i = 0; i < object.JackpotPoolID.length; ++i) {
                    if (typeof object.JackpotPoolID[i] !== "object")
                        throw TypeError(".GameMsg_DFDC.DFDC_JackpotPoolS2CMsg.JackpotPoolID: object expected");
                    message.JackpotPoolID[i] = $root.GameMsg_DFDC.DFDC_JackpotPoolDetail.fromObject(object.JackpotPoolID[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a DFDC_JackpotPoolS2CMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_DFDC.DFDC_JackpotPoolS2CMsg
         * @static
         * @param {GameMsg_DFDC.DFDC_JackpotPoolS2CMsg} message DFDC_JackpotPoolS2CMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DFDC_JackpotPoolS2CMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.JackpotPoolID = [];
            if (message.JackpotPoolID && message.JackpotPoolID.length) {
                object.JackpotPoolID = [];
                for (var j = 0; j < message.JackpotPoolID.length; ++j)
                    object.JackpotPoolID[j] = $root.GameMsg_DFDC.DFDC_JackpotPoolDetail.toObject(message.JackpotPoolID[j], options);
            }
            return object;
        };

        /**
         * Converts this DFDC_JackpotPoolS2CMsg to JSON.
         * @function toJSON
         * @memberof GameMsg_DFDC.DFDC_JackpotPoolS2CMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DFDC_JackpotPoolS2CMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return DFDC_JackpotPoolS2CMsg;
    })();

    GameMsg_DFDC.DFDC_JackpotPoolDetail = (function() {

        /**
         * Properties of a DFDC_JackpotPoolDetail.
         * @memberof GameMsg_DFDC
         * @interface IDFDC_JackpotPoolDetail
         * @property {number} JackpotID DFDC_JackpotPoolDetail JackpotID
         * @property {number|Long} Syspool DFDC_JackpotPoolDetail Syspool
         * @property {string|null} [Level] DFDC_JackpotPoolDetail Level
         */

        /**
         * Constructs a new DFDC_JackpotPoolDetail.
         * @memberof GameMsg_DFDC
         * @classdesc Represents a DFDC_JackpotPoolDetail.
         * @implements IDFDC_JackpotPoolDetail
         * @constructor
         * @param {GameMsg_DFDC.IDFDC_JackpotPoolDetail=} [properties] Properties to set
         */
        function DFDC_JackpotPoolDetail(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DFDC_JackpotPoolDetail JackpotID.
         * @member {number} JackpotID
         * @memberof GameMsg_DFDC.DFDC_JackpotPoolDetail
         * @instance
         */
        DFDC_JackpotPoolDetail.prototype.JackpotID = 0;

        /**
         * DFDC_JackpotPoolDetail Syspool.
         * @member {number|Long} Syspool
         * @memberof GameMsg_DFDC.DFDC_JackpotPoolDetail
         * @instance
         */
        DFDC_JackpotPoolDetail.prototype.Syspool = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * DFDC_JackpotPoolDetail Level.
         * @member {string} Level
         * @memberof GameMsg_DFDC.DFDC_JackpotPoolDetail
         * @instance
         */
        DFDC_JackpotPoolDetail.prototype.Level = "";

        /**
         * Creates a new DFDC_JackpotPoolDetail instance using the specified properties.
         * @function create
         * @memberof GameMsg_DFDC.DFDC_JackpotPoolDetail
         * @static
         * @param {GameMsg_DFDC.IDFDC_JackpotPoolDetail=} [properties] Properties to set
         * @returns {GameMsg_DFDC.DFDC_JackpotPoolDetail} DFDC_JackpotPoolDetail instance
         */
        DFDC_JackpotPoolDetail.create = function create(properties) {
            return new DFDC_JackpotPoolDetail(properties);
        };

        /**
         * Encodes the specified DFDC_JackpotPoolDetail message. Does not implicitly {@link GameMsg_DFDC.DFDC_JackpotPoolDetail.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_DFDC.DFDC_JackpotPoolDetail
         * @static
         * @param {GameMsg_DFDC.IDFDC_JackpotPoolDetail} message DFDC_JackpotPoolDetail message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DFDC_JackpotPoolDetail.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.JackpotID);
            writer.uint32(/* id 2, wireType 0 =*/16).int64(message.Syspool);
            if (message.Level != null && message.hasOwnProperty("Level"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.Level);
            return writer;
        };

        /**
         * Encodes the specified DFDC_JackpotPoolDetail message, length delimited. Does not implicitly {@link GameMsg_DFDC.DFDC_JackpotPoolDetail.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_DFDC.DFDC_JackpotPoolDetail
         * @static
         * @param {GameMsg_DFDC.IDFDC_JackpotPoolDetail} message DFDC_JackpotPoolDetail message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DFDC_JackpotPoolDetail.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DFDC_JackpotPoolDetail message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_DFDC.DFDC_JackpotPoolDetail
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_DFDC.DFDC_JackpotPoolDetail} DFDC_JackpotPoolDetail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DFDC_JackpotPoolDetail.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_DFDC.DFDC_JackpotPoolDetail();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.JackpotID = reader.int32();
                    break;
                case 2:
                    message.Syspool = reader.int64();
                    break;
                case 3:
                    message.Level = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("JackpotID"))
                throw $util.ProtocolError("missing required 'JackpotID'", { instance: message });
            if (!message.hasOwnProperty("Syspool"))
                throw $util.ProtocolError("missing required 'Syspool'", { instance: message });
            return message;
        };

        /**
         * Decodes a DFDC_JackpotPoolDetail message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_DFDC.DFDC_JackpotPoolDetail
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_DFDC.DFDC_JackpotPoolDetail} DFDC_JackpotPoolDetail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DFDC_JackpotPoolDetail.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DFDC_JackpotPoolDetail message.
         * @function verify
         * @memberof GameMsg_DFDC.DFDC_JackpotPoolDetail
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DFDC_JackpotPoolDetail.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.JackpotID))
                return "JackpotID: integer expected";
            if (!$util.isInteger(message.Syspool) && !(message.Syspool && $util.isInteger(message.Syspool.low) && $util.isInteger(message.Syspool.high)))
                return "Syspool: integer|Long expected";
            if (message.Level != null && message.hasOwnProperty("Level"))
                if (!$util.isString(message.Level))
                    return "Level: string expected";
            return null;
        };

        /**
         * Creates a DFDC_JackpotPoolDetail message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_DFDC.DFDC_JackpotPoolDetail
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_DFDC.DFDC_JackpotPoolDetail} DFDC_JackpotPoolDetail
         */
        DFDC_JackpotPoolDetail.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_DFDC.DFDC_JackpotPoolDetail)
                return object;
            var message = new $root.GameMsg_DFDC.DFDC_JackpotPoolDetail();
            if (object.JackpotID != null)
                message.JackpotID = object.JackpotID | 0;
            if (object.Syspool != null)
                if ($util.Long)
                    (message.Syspool = $util.Long.fromValue(object.Syspool)).unsigned = false;
                else if (typeof object.Syspool === "string")
                    message.Syspool = parseInt(object.Syspool, 10);
                else if (typeof object.Syspool === "number")
                    message.Syspool = object.Syspool;
                else if (typeof object.Syspool === "object")
                    message.Syspool = new $util.LongBits(object.Syspool.low >>> 0, object.Syspool.high >>> 0).toNumber();
            if (object.Level != null)
                message.Level = String(object.Level);
            return message;
        };

        /**
         * Creates a plain object from a DFDC_JackpotPoolDetail message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_DFDC.DFDC_JackpotPoolDetail
         * @static
         * @param {GameMsg_DFDC.DFDC_JackpotPoolDetail} message DFDC_JackpotPoolDetail
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DFDC_JackpotPoolDetail.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.JackpotID = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.Syspool = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.Syspool = options.longs === String ? "0" : 0;
                object.Level = "";
            }
            if (message.JackpotID != null && message.hasOwnProperty("JackpotID"))
                object.JackpotID = message.JackpotID;
            if (message.Syspool != null && message.hasOwnProperty("Syspool"))
                if (typeof message.Syspool === "number")
                    object.Syspool = options.longs === String ? String(message.Syspool) : message.Syspool;
                else
                    object.Syspool = options.longs === String ? $util.Long.prototype.toString.call(message.Syspool) : options.longs === Number ? new $util.LongBits(message.Syspool.low >>> 0, message.Syspool.high >>> 0).toNumber() : message.Syspool;
            if (message.Level != null && message.hasOwnProperty("Level"))
                object.Level = message.Level;
            return object;
        };

        /**
         * Converts this DFDC_JackpotPoolDetail to JSON.
         * @function toJSON
         * @memberof GameMsg_DFDC.DFDC_JackpotPoolDetail
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DFDC_JackpotPoolDetail.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return DFDC_JackpotPoolDetail;
    })();

    GameMsg_DFDC.DFDC_GoldenSymbolList = (function() {

        /**
         * Properties of a DFDC_GoldenSymbolList.
         * @memberof GameMsg_DFDC
         * @interface IDFDC_GoldenSymbolList
         * @property {Array.<GameMsg_DFDC.IDFDC_GoldenSymbolDetail>|null} [GoldenDetail] DFDC_GoldenSymbolList GoldenDetail
         */

        /**
         * Constructs a new DFDC_GoldenSymbolList.
         * @memberof GameMsg_DFDC
         * @classdesc Represents a DFDC_GoldenSymbolList.
         * @implements IDFDC_GoldenSymbolList
         * @constructor
         * @param {GameMsg_DFDC.IDFDC_GoldenSymbolList=} [properties] Properties to set
         */
        function DFDC_GoldenSymbolList(properties) {
            this.GoldenDetail = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DFDC_GoldenSymbolList GoldenDetail.
         * @member {Array.<GameMsg_DFDC.IDFDC_GoldenSymbolDetail>} GoldenDetail
         * @memberof GameMsg_DFDC.DFDC_GoldenSymbolList
         * @instance
         */
        DFDC_GoldenSymbolList.prototype.GoldenDetail = $util.emptyArray;

        /**
         * Creates a new DFDC_GoldenSymbolList instance using the specified properties.
         * @function create
         * @memberof GameMsg_DFDC.DFDC_GoldenSymbolList
         * @static
         * @param {GameMsg_DFDC.IDFDC_GoldenSymbolList=} [properties] Properties to set
         * @returns {GameMsg_DFDC.DFDC_GoldenSymbolList} DFDC_GoldenSymbolList instance
         */
        DFDC_GoldenSymbolList.create = function create(properties) {
            return new DFDC_GoldenSymbolList(properties);
        };

        /**
         * Encodes the specified DFDC_GoldenSymbolList message. Does not implicitly {@link GameMsg_DFDC.DFDC_GoldenSymbolList.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_DFDC.DFDC_GoldenSymbolList
         * @static
         * @param {GameMsg_DFDC.IDFDC_GoldenSymbolList} message DFDC_GoldenSymbolList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DFDC_GoldenSymbolList.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.GoldenDetail != null && message.GoldenDetail.length)
                for (var i = 0; i < message.GoldenDetail.length; ++i)
                    $root.GameMsg_DFDC.DFDC_GoldenSymbolDetail.encode(message.GoldenDetail[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified DFDC_GoldenSymbolList message, length delimited. Does not implicitly {@link GameMsg_DFDC.DFDC_GoldenSymbolList.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_DFDC.DFDC_GoldenSymbolList
         * @static
         * @param {GameMsg_DFDC.IDFDC_GoldenSymbolList} message DFDC_GoldenSymbolList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DFDC_GoldenSymbolList.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DFDC_GoldenSymbolList message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_DFDC.DFDC_GoldenSymbolList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_DFDC.DFDC_GoldenSymbolList} DFDC_GoldenSymbolList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DFDC_GoldenSymbolList.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_DFDC.DFDC_GoldenSymbolList();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.GoldenDetail && message.GoldenDetail.length))
                        message.GoldenDetail = [];
                    message.GoldenDetail.push($root.GameMsg_DFDC.DFDC_GoldenSymbolDetail.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a DFDC_GoldenSymbolList message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_DFDC.DFDC_GoldenSymbolList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_DFDC.DFDC_GoldenSymbolList} DFDC_GoldenSymbolList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DFDC_GoldenSymbolList.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DFDC_GoldenSymbolList message.
         * @function verify
         * @memberof GameMsg_DFDC.DFDC_GoldenSymbolList
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DFDC_GoldenSymbolList.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.GoldenDetail != null && message.hasOwnProperty("GoldenDetail")) {
                if (!Array.isArray(message.GoldenDetail))
                    return "GoldenDetail: array expected";
                for (var i = 0; i < message.GoldenDetail.length; ++i) {
                    var error = $root.GameMsg_DFDC.DFDC_GoldenSymbolDetail.verify(message.GoldenDetail[i]);
                    if (error)
                        return "GoldenDetail." + error;
                }
            }
            return null;
        };

        /**
         * Creates a DFDC_GoldenSymbolList message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_DFDC.DFDC_GoldenSymbolList
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_DFDC.DFDC_GoldenSymbolList} DFDC_GoldenSymbolList
         */
        DFDC_GoldenSymbolList.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_DFDC.DFDC_GoldenSymbolList)
                return object;
            var message = new $root.GameMsg_DFDC.DFDC_GoldenSymbolList();
            if (object.GoldenDetail) {
                if (!Array.isArray(object.GoldenDetail))
                    throw TypeError(".GameMsg_DFDC.DFDC_GoldenSymbolList.GoldenDetail: array expected");
                message.GoldenDetail = [];
                for (var i = 0; i < object.GoldenDetail.length; ++i) {
                    if (typeof object.GoldenDetail[i] !== "object")
                        throw TypeError(".GameMsg_DFDC.DFDC_GoldenSymbolList.GoldenDetail: object expected");
                    message.GoldenDetail[i] = $root.GameMsg_DFDC.DFDC_GoldenSymbolDetail.fromObject(object.GoldenDetail[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a DFDC_GoldenSymbolList message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_DFDC.DFDC_GoldenSymbolList
         * @static
         * @param {GameMsg_DFDC.DFDC_GoldenSymbolList} message DFDC_GoldenSymbolList
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DFDC_GoldenSymbolList.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.GoldenDetail = [];
            if (message.GoldenDetail && message.GoldenDetail.length) {
                object.GoldenDetail = [];
                for (var j = 0; j < message.GoldenDetail.length; ++j)
                    object.GoldenDetail[j] = $root.GameMsg_DFDC.DFDC_GoldenSymbolDetail.toObject(message.GoldenDetail[j], options);
            }
            return object;
        };

        /**
         * Converts this DFDC_GoldenSymbolList to JSON.
         * @function toJSON
         * @memberof GameMsg_DFDC.DFDC_GoldenSymbolList
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DFDC_GoldenSymbolList.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return DFDC_GoldenSymbolList;
    })();

    GameMsg_DFDC.DFDC_GoldenSymbolDetail = (function() {

        /**
         * Properties of a DFDC_GoldenSymbolDetail.
         * @memberof GameMsg_DFDC
         * @interface IDFDC_GoldenSymbolDetail
         * @property {number} Symbols DFDC_GoldenSymbolDetail Symbols
         * @property {number} Credits DFDC_GoldenSymbolDetail Credits
         */

        /**
         * Constructs a new DFDC_GoldenSymbolDetail.
         * @memberof GameMsg_DFDC
         * @classdesc Represents a DFDC_GoldenSymbolDetail.
         * @implements IDFDC_GoldenSymbolDetail
         * @constructor
         * @param {GameMsg_DFDC.IDFDC_GoldenSymbolDetail=} [properties] Properties to set
         */
        function DFDC_GoldenSymbolDetail(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DFDC_GoldenSymbolDetail Symbols.
         * @member {number} Symbols
         * @memberof GameMsg_DFDC.DFDC_GoldenSymbolDetail
         * @instance
         */
        DFDC_GoldenSymbolDetail.prototype.Symbols = 0;

        /**
         * DFDC_GoldenSymbolDetail Credits.
         * @member {number} Credits
         * @memberof GameMsg_DFDC.DFDC_GoldenSymbolDetail
         * @instance
         */
        DFDC_GoldenSymbolDetail.prototype.Credits = 0;

        /**
         * Creates a new DFDC_GoldenSymbolDetail instance using the specified properties.
         * @function create
         * @memberof GameMsg_DFDC.DFDC_GoldenSymbolDetail
         * @static
         * @param {GameMsg_DFDC.IDFDC_GoldenSymbolDetail=} [properties] Properties to set
         * @returns {GameMsg_DFDC.DFDC_GoldenSymbolDetail} DFDC_GoldenSymbolDetail instance
         */
        DFDC_GoldenSymbolDetail.create = function create(properties) {
            return new DFDC_GoldenSymbolDetail(properties);
        };

        /**
         * Encodes the specified DFDC_GoldenSymbolDetail message. Does not implicitly {@link GameMsg_DFDC.DFDC_GoldenSymbolDetail.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_DFDC.DFDC_GoldenSymbolDetail
         * @static
         * @param {GameMsg_DFDC.IDFDC_GoldenSymbolDetail} message DFDC_GoldenSymbolDetail message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DFDC_GoldenSymbolDetail.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.Symbols);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.Credits);
            return writer;
        };

        /**
         * Encodes the specified DFDC_GoldenSymbolDetail message, length delimited. Does not implicitly {@link GameMsg_DFDC.DFDC_GoldenSymbolDetail.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_DFDC.DFDC_GoldenSymbolDetail
         * @static
         * @param {GameMsg_DFDC.IDFDC_GoldenSymbolDetail} message DFDC_GoldenSymbolDetail message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DFDC_GoldenSymbolDetail.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DFDC_GoldenSymbolDetail message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_DFDC.DFDC_GoldenSymbolDetail
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_DFDC.DFDC_GoldenSymbolDetail} DFDC_GoldenSymbolDetail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DFDC_GoldenSymbolDetail.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_DFDC.DFDC_GoldenSymbolDetail();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Symbols = reader.int32();
                    break;
                case 2:
                    message.Credits = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("Symbols"))
                throw $util.ProtocolError("missing required 'Symbols'", { instance: message });
            if (!message.hasOwnProperty("Credits"))
                throw $util.ProtocolError("missing required 'Credits'", { instance: message });
            return message;
        };

        /**
         * Decodes a DFDC_GoldenSymbolDetail message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_DFDC.DFDC_GoldenSymbolDetail
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_DFDC.DFDC_GoldenSymbolDetail} DFDC_GoldenSymbolDetail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DFDC_GoldenSymbolDetail.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DFDC_GoldenSymbolDetail message.
         * @function verify
         * @memberof GameMsg_DFDC.DFDC_GoldenSymbolDetail
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DFDC_GoldenSymbolDetail.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.Symbols))
                return "Symbols: integer expected";
            if (!$util.isInteger(message.Credits))
                return "Credits: integer expected";
            return null;
        };

        /**
         * Creates a DFDC_GoldenSymbolDetail message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_DFDC.DFDC_GoldenSymbolDetail
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_DFDC.DFDC_GoldenSymbolDetail} DFDC_GoldenSymbolDetail
         */
        DFDC_GoldenSymbolDetail.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_DFDC.DFDC_GoldenSymbolDetail)
                return object;
            var message = new $root.GameMsg_DFDC.DFDC_GoldenSymbolDetail();
            if (object.Symbols != null)
                message.Symbols = object.Symbols | 0;
            if (object.Credits != null)
                message.Credits = object.Credits | 0;
            return message;
        };

        /**
         * Creates a plain object from a DFDC_GoldenSymbolDetail message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_DFDC.DFDC_GoldenSymbolDetail
         * @static
         * @param {GameMsg_DFDC.DFDC_GoldenSymbolDetail} message DFDC_GoldenSymbolDetail
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DFDC_GoldenSymbolDetail.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.Symbols = 0;
                object.Credits = 0;
            }
            if (message.Symbols != null && message.hasOwnProperty("Symbols"))
                object.Symbols = message.Symbols;
            if (message.Credits != null && message.hasOwnProperty("Credits"))
                object.Credits = message.Credits;
            return object;
        };

        /**
         * Converts this DFDC_GoldenSymbolDetail to JSON.
         * @function toJSON
         * @memberof GameMsg_DFDC.DFDC_GoldenSymbolDetail
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DFDC_GoldenSymbolDetail.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return DFDC_GoldenSymbolDetail;
    })();

    GameMsg_DFDC.DFDC_BonusGame = (function() {

        /**
         * Properties of a DFDC_BonusGame.
         * @memberof GameMsg_DFDC
         * @interface IDFDC_BonusGame
         * @property {Array.<GameMsg_DFDC.IDFDC_BonusGameDetail>|null} [BonusDetail] DFDC_BonusGame BonusDetail
         * @property {number|Long} Money DFDC_BonusGame Money
         */

        /**
         * Constructs a new DFDC_BonusGame.
         * @memberof GameMsg_DFDC
         * @classdesc Represents a DFDC_BonusGame.
         * @implements IDFDC_BonusGame
         * @constructor
         * @param {GameMsg_DFDC.IDFDC_BonusGame=} [properties] Properties to set
         */
        function DFDC_BonusGame(properties) {
            this.BonusDetail = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DFDC_BonusGame BonusDetail.
         * @member {Array.<GameMsg_DFDC.IDFDC_BonusGameDetail>} BonusDetail
         * @memberof GameMsg_DFDC.DFDC_BonusGame
         * @instance
         */
        DFDC_BonusGame.prototype.BonusDetail = $util.emptyArray;

        /**
         * DFDC_BonusGame Money.
         * @member {number|Long} Money
         * @memberof GameMsg_DFDC.DFDC_BonusGame
         * @instance
         */
        DFDC_BonusGame.prototype.Money = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new DFDC_BonusGame instance using the specified properties.
         * @function create
         * @memberof GameMsg_DFDC.DFDC_BonusGame
         * @static
         * @param {GameMsg_DFDC.IDFDC_BonusGame=} [properties] Properties to set
         * @returns {GameMsg_DFDC.DFDC_BonusGame} DFDC_BonusGame instance
         */
        DFDC_BonusGame.create = function create(properties) {
            return new DFDC_BonusGame(properties);
        };

        /**
         * Encodes the specified DFDC_BonusGame message. Does not implicitly {@link GameMsg_DFDC.DFDC_BonusGame.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_DFDC.DFDC_BonusGame
         * @static
         * @param {GameMsg_DFDC.IDFDC_BonusGame} message DFDC_BonusGame message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DFDC_BonusGame.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.BonusDetail != null && message.BonusDetail.length)
                for (var i = 0; i < message.BonusDetail.length; ++i)
                    $root.GameMsg_DFDC.DFDC_BonusGameDetail.encode(message.BonusDetail[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            writer.uint32(/* id 2, wireType 0 =*/16).int64(message.Money);
            return writer;
        };

        /**
         * Encodes the specified DFDC_BonusGame message, length delimited. Does not implicitly {@link GameMsg_DFDC.DFDC_BonusGame.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_DFDC.DFDC_BonusGame
         * @static
         * @param {GameMsg_DFDC.IDFDC_BonusGame} message DFDC_BonusGame message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DFDC_BonusGame.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DFDC_BonusGame message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_DFDC.DFDC_BonusGame
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_DFDC.DFDC_BonusGame} DFDC_BonusGame
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DFDC_BonusGame.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_DFDC.DFDC_BonusGame();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.BonusDetail && message.BonusDetail.length))
                        message.BonusDetail = [];
                    message.BonusDetail.push($root.GameMsg_DFDC.DFDC_BonusGameDetail.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.Money = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("Money"))
                throw $util.ProtocolError("missing required 'Money'", { instance: message });
            return message;
        };

        /**
         * Decodes a DFDC_BonusGame message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_DFDC.DFDC_BonusGame
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_DFDC.DFDC_BonusGame} DFDC_BonusGame
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DFDC_BonusGame.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DFDC_BonusGame message.
         * @function verify
         * @memberof GameMsg_DFDC.DFDC_BonusGame
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DFDC_BonusGame.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.BonusDetail != null && message.hasOwnProperty("BonusDetail")) {
                if (!Array.isArray(message.BonusDetail))
                    return "BonusDetail: array expected";
                for (var i = 0; i < message.BonusDetail.length; ++i) {
                    var error = $root.GameMsg_DFDC.DFDC_BonusGameDetail.verify(message.BonusDetail[i]);
                    if (error)
                        return "BonusDetail." + error;
                }
            }
            if (!$util.isInteger(message.Money) && !(message.Money && $util.isInteger(message.Money.low) && $util.isInteger(message.Money.high)))
                return "Money: integer|Long expected";
            return null;
        };

        /**
         * Creates a DFDC_BonusGame message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_DFDC.DFDC_BonusGame
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_DFDC.DFDC_BonusGame} DFDC_BonusGame
         */
        DFDC_BonusGame.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_DFDC.DFDC_BonusGame)
                return object;
            var message = new $root.GameMsg_DFDC.DFDC_BonusGame();
            if (object.BonusDetail) {
                if (!Array.isArray(object.BonusDetail))
                    throw TypeError(".GameMsg_DFDC.DFDC_BonusGame.BonusDetail: array expected");
                message.BonusDetail = [];
                for (var i = 0; i < object.BonusDetail.length; ++i) {
                    if (typeof object.BonusDetail[i] !== "object")
                        throw TypeError(".GameMsg_DFDC.DFDC_BonusGame.BonusDetail: object expected");
                    message.BonusDetail[i] = $root.GameMsg_DFDC.DFDC_BonusGameDetail.fromObject(object.BonusDetail[i]);
                }
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
            return message;
        };

        /**
         * Creates a plain object from a DFDC_BonusGame message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_DFDC.DFDC_BonusGame
         * @static
         * @param {GameMsg_DFDC.DFDC_BonusGame} message DFDC_BonusGame
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DFDC_BonusGame.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.BonusDetail = [];
            if (options.defaults)
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.Money = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.Money = options.longs === String ? "0" : 0;
            if (message.BonusDetail && message.BonusDetail.length) {
                object.BonusDetail = [];
                for (var j = 0; j < message.BonusDetail.length; ++j)
                    object.BonusDetail[j] = $root.GameMsg_DFDC.DFDC_BonusGameDetail.toObject(message.BonusDetail[j], options);
            }
            if (message.Money != null && message.hasOwnProperty("Money"))
                if (typeof message.Money === "number")
                    object.Money = options.longs === String ? String(message.Money) : message.Money;
                else
                    object.Money = options.longs === String ? $util.Long.prototype.toString.call(message.Money) : options.longs === Number ? new $util.LongBits(message.Money.low >>> 0, message.Money.high >>> 0).toNumber() : message.Money;
            return object;
        };

        /**
         * Converts this DFDC_BonusGame to JSON.
         * @function toJSON
         * @memberof GameMsg_DFDC.DFDC_BonusGame
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DFDC_BonusGame.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return DFDC_BonusGame;
    })();

    GameMsg_DFDC.DFDC_BonusGameDetail = (function() {

        /**
         * Properties of a DFDC_BonusGameDetail.
         * @memberof GameMsg_DFDC
         * @interface IDFDC_BonusGameDetail
         * @property {number} Id DFDC_BonusGameDetail Id
         * @property {number} Place DFDC_BonusGameDetail Place
         * @property {number} Icon DFDC_BonusGameDetail Icon
         */

        /**
         * Constructs a new DFDC_BonusGameDetail.
         * @memberof GameMsg_DFDC
         * @classdesc Represents a DFDC_BonusGameDetail.
         * @implements IDFDC_BonusGameDetail
         * @constructor
         * @param {GameMsg_DFDC.IDFDC_BonusGameDetail=} [properties] Properties to set
         */
        function DFDC_BonusGameDetail(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DFDC_BonusGameDetail Id.
         * @member {number} Id
         * @memberof GameMsg_DFDC.DFDC_BonusGameDetail
         * @instance
         */
        DFDC_BonusGameDetail.prototype.Id = 0;

        /**
         * DFDC_BonusGameDetail Place.
         * @member {number} Place
         * @memberof GameMsg_DFDC.DFDC_BonusGameDetail
         * @instance
         */
        DFDC_BonusGameDetail.prototype.Place = 0;

        /**
         * DFDC_BonusGameDetail Icon.
         * @member {number} Icon
         * @memberof GameMsg_DFDC.DFDC_BonusGameDetail
         * @instance
         */
        DFDC_BonusGameDetail.prototype.Icon = 0;

        /**
         * Creates a new DFDC_BonusGameDetail instance using the specified properties.
         * @function create
         * @memberof GameMsg_DFDC.DFDC_BonusGameDetail
         * @static
         * @param {GameMsg_DFDC.IDFDC_BonusGameDetail=} [properties] Properties to set
         * @returns {GameMsg_DFDC.DFDC_BonusGameDetail} DFDC_BonusGameDetail instance
         */
        DFDC_BonusGameDetail.create = function create(properties) {
            return new DFDC_BonusGameDetail(properties);
        };

        /**
         * Encodes the specified DFDC_BonusGameDetail message. Does not implicitly {@link GameMsg_DFDC.DFDC_BonusGameDetail.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_DFDC.DFDC_BonusGameDetail
         * @static
         * @param {GameMsg_DFDC.IDFDC_BonusGameDetail} message DFDC_BonusGameDetail message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DFDC_BonusGameDetail.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.Id);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.Place);
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.Icon);
            return writer;
        };

        /**
         * Encodes the specified DFDC_BonusGameDetail message, length delimited. Does not implicitly {@link GameMsg_DFDC.DFDC_BonusGameDetail.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_DFDC.DFDC_BonusGameDetail
         * @static
         * @param {GameMsg_DFDC.IDFDC_BonusGameDetail} message DFDC_BonusGameDetail message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DFDC_BonusGameDetail.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DFDC_BonusGameDetail message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_DFDC.DFDC_BonusGameDetail
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_DFDC.DFDC_BonusGameDetail} DFDC_BonusGameDetail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DFDC_BonusGameDetail.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_DFDC.DFDC_BonusGameDetail();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Id = reader.int32();
                    break;
                case 2:
                    message.Place = reader.int32();
                    break;
                case 3:
                    message.Icon = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("Id"))
                throw $util.ProtocolError("missing required 'Id'", { instance: message });
            if (!message.hasOwnProperty("Place"))
                throw $util.ProtocolError("missing required 'Place'", { instance: message });
            if (!message.hasOwnProperty("Icon"))
                throw $util.ProtocolError("missing required 'Icon'", { instance: message });
            return message;
        };

        /**
         * Decodes a DFDC_BonusGameDetail message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_DFDC.DFDC_BonusGameDetail
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_DFDC.DFDC_BonusGameDetail} DFDC_BonusGameDetail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DFDC_BonusGameDetail.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DFDC_BonusGameDetail message.
         * @function verify
         * @memberof GameMsg_DFDC.DFDC_BonusGameDetail
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DFDC_BonusGameDetail.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.Id))
                return "Id: integer expected";
            if (!$util.isInteger(message.Place))
                return "Place: integer expected";
            if (!$util.isInteger(message.Icon))
                return "Icon: integer expected";
            return null;
        };

        /**
         * Creates a DFDC_BonusGameDetail message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_DFDC.DFDC_BonusGameDetail
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_DFDC.DFDC_BonusGameDetail} DFDC_BonusGameDetail
         */
        DFDC_BonusGameDetail.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_DFDC.DFDC_BonusGameDetail)
                return object;
            var message = new $root.GameMsg_DFDC.DFDC_BonusGameDetail();
            if (object.Id != null)
                message.Id = object.Id | 0;
            if (object.Place != null)
                message.Place = object.Place | 0;
            if (object.Icon != null)
                message.Icon = object.Icon | 0;
            return message;
        };

        /**
         * Creates a plain object from a DFDC_BonusGameDetail message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_DFDC.DFDC_BonusGameDetail
         * @static
         * @param {GameMsg_DFDC.DFDC_BonusGameDetail} message DFDC_BonusGameDetail
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DFDC_BonusGameDetail.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.Id = 0;
                object.Place = 0;
                object.Icon = 0;
            }
            if (message.Id != null && message.hasOwnProperty("Id"))
                object.Id = message.Id;
            if (message.Place != null && message.hasOwnProperty("Place"))
                object.Place = message.Place;
            if (message.Icon != null && message.hasOwnProperty("Icon"))
                object.Icon = message.Icon;
            return object;
        };

        /**
         * Converts this DFDC_BonusGameDetail to JSON.
         * @function toJSON
         * @memberof GameMsg_DFDC.DFDC_BonusGameDetail
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DFDC_BonusGameDetail.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return DFDC_BonusGameDetail;
    })();

    GameMsg_DFDC.DFDC_SymbolPayTable = (function() {

        /**
         * Properties of a DFDC_SymbolPayTable.
         * @memberof GameMsg_DFDC
         * @interface IDFDC_SymbolPayTable
         * @property {string} SymbolName DFDC_SymbolPayTable SymbolName
         * @property {number} Count DFDC_SymbolPayTable Count
         * @property {number} Rate DFDC_SymbolPayTable Rate
         */

        /**
         * Constructs a new DFDC_SymbolPayTable.
         * @memberof GameMsg_DFDC
         * @classdesc Represents a DFDC_SymbolPayTable.
         * @implements IDFDC_SymbolPayTable
         * @constructor
         * @param {GameMsg_DFDC.IDFDC_SymbolPayTable=} [properties] Properties to set
         */
        function DFDC_SymbolPayTable(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DFDC_SymbolPayTable SymbolName.
         * @member {string} SymbolName
         * @memberof GameMsg_DFDC.DFDC_SymbolPayTable
         * @instance
         */
        DFDC_SymbolPayTable.prototype.SymbolName = "";

        /**
         * DFDC_SymbolPayTable Count.
         * @member {number} Count
         * @memberof GameMsg_DFDC.DFDC_SymbolPayTable
         * @instance
         */
        DFDC_SymbolPayTable.prototype.Count = 0;

        /**
         * DFDC_SymbolPayTable Rate.
         * @member {number} Rate
         * @memberof GameMsg_DFDC.DFDC_SymbolPayTable
         * @instance
         */
        DFDC_SymbolPayTable.prototype.Rate = 0;

        /**
         * Creates a new DFDC_SymbolPayTable instance using the specified properties.
         * @function create
         * @memberof GameMsg_DFDC.DFDC_SymbolPayTable
         * @static
         * @param {GameMsg_DFDC.IDFDC_SymbolPayTable=} [properties] Properties to set
         * @returns {GameMsg_DFDC.DFDC_SymbolPayTable} DFDC_SymbolPayTable instance
         */
        DFDC_SymbolPayTable.create = function create(properties) {
            return new DFDC_SymbolPayTable(properties);
        };

        /**
         * Encodes the specified DFDC_SymbolPayTable message. Does not implicitly {@link GameMsg_DFDC.DFDC_SymbolPayTable.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_DFDC.DFDC_SymbolPayTable
         * @static
         * @param {GameMsg_DFDC.IDFDC_SymbolPayTable} message DFDC_SymbolPayTable message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DFDC_SymbolPayTable.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.SymbolName);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.Count);
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.Rate);
            return writer;
        };

        /**
         * Encodes the specified DFDC_SymbolPayTable message, length delimited. Does not implicitly {@link GameMsg_DFDC.DFDC_SymbolPayTable.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_DFDC.DFDC_SymbolPayTable
         * @static
         * @param {GameMsg_DFDC.IDFDC_SymbolPayTable} message DFDC_SymbolPayTable message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DFDC_SymbolPayTable.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DFDC_SymbolPayTable message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_DFDC.DFDC_SymbolPayTable
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_DFDC.DFDC_SymbolPayTable} DFDC_SymbolPayTable
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DFDC_SymbolPayTable.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_DFDC.DFDC_SymbolPayTable();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.SymbolName = reader.string();
                    break;
                case 2:
                    message.Count = reader.int32();
                    break;
                case 3:
                    message.Rate = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("SymbolName"))
                throw $util.ProtocolError("missing required 'SymbolName'", { instance: message });
            if (!message.hasOwnProperty("Count"))
                throw $util.ProtocolError("missing required 'Count'", { instance: message });
            if (!message.hasOwnProperty("Rate"))
                throw $util.ProtocolError("missing required 'Rate'", { instance: message });
            return message;
        };

        /**
         * Decodes a DFDC_SymbolPayTable message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_DFDC.DFDC_SymbolPayTable
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_DFDC.DFDC_SymbolPayTable} DFDC_SymbolPayTable
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DFDC_SymbolPayTable.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DFDC_SymbolPayTable message.
         * @function verify
         * @memberof GameMsg_DFDC.DFDC_SymbolPayTable
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DFDC_SymbolPayTable.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.SymbolName))
                return "SymbolName: string expected";
            if (!$util.isInteger(message.Count))
                return "Count: integer expected";
            if (!$util.isInteger(message.Rate))
                return "Rate: integer expected";
            return null;
        };

        /**
         * Creates a DFDC_SymbolPayTable message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_DFDC.DFDC_SymbolPayTable
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_DFDC.DFDC_SymbolPayTable} DFDC_SymbolPayTable
         */
        DFDC_SymbolPayTable.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_DFDC.DFDC_SymbolPayTable)
                return object;
            var message = new $root.GameMsg_DFDC.DFDC_SymbolPayTable();
            if (object.SymbolName != null)
                message.SymbolName = String(object.SymbolName);
            if (object.Count != null)
                message.Count = object.Count | 0;
            if (object.Rate != null)
                message.Rate = object.Rate | 0;
            return message;
        };

        /**
         * Creates a plain object from a DFDC_SymbolPayTable message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_DFDC.DFDC_SymbolPayTable
         * @static
         * @param {GameMsg_DFDC.DFDC_SymbolPayTable} message DFDC_SymbolPayTable
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DFDC_SymbolPayTable.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.SymbolName = "";
                object.Count = 0;
                object.Rate = 0;
            }
            if (message.SymbolName != null && message.hasOwnProperty("SymbolName"))
                object.SymbolName = message.SymbolName;
            if (message.Count != null && message.hasOwnProperty("Count"))
                object.Count = message.Count;
            if (message.Rate != null && message.hasOwnProperty("Rate"))
                object.Rate = message.Rate;
            return object;
        };

        /**
         * Converts this DFDC_SymbolPayTable to JSON.
         * @function toJSON
         * @memberof GameMsg_DFDC.DFDC_SymbolPayTable
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DFDC_SymbolPayTable.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return DFDC_SymbolPayTable;
    })();

    GameMsg_DFDC.DFDC_JackpotBonusGameDetail = (function() {

        /**
         * Properties of a DFDC_JackpotBonusGameDetail.
         * @memberof GameMsg_DFDC
         * @interface IDFDC_JackpotBonusGameDetail
         * @property {number} UserID DFDC_JackpotBonusGameDetail UserID
         * @property {number} TurnID DFDC_JackpotBonusGameDetail TurnID
         * @property {number} Place DFDC_JackpotBonusGameDetail Place
         * @property {number} Icon DFDC_JackpotBonusGameDetail Icon
         */

        /**
         * Constructs a new DFDC_JackpotBonusGameDetail.
         * @memberof GameMsg_DFDC
         * @classdesc Represents a DFDC_JackpotBonusGameDetail.
         * @implements IDFDC_JackpotBonusGameDetail
         * @constructor
         * @param {GameMsg_DFDC.IDFDC_JackpotBonusGameDetail=} [properties] Properties to set
         */
        function DFDC_JackpotBonusGameDetail(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DFDC_JackpotBonusGameDetail UserID.
         * @member {number} UserID
         * @memberof GameMsg_DFDC.DFDC_JackpotBonusGameDetail
         * @instance
         */
        DFDC_JackpotBonusGameDetail.prototype.UserID = 0;

        /**
         * DFDC_JackpotBonusGameDetail TurnID.
         * @member {number} TurnID
         * @memberof GameMsg_DFDC.DFDC_JackpotBonusGameDetail
         * @instance
         */
        DFDC_JackpotBonusGameDetail.prototype.TurnID = 0;

        /**
         * DFDC_JackpotBonusGameDetail Place.
         * @member {number} Place
         * @memberof GameMsg_DFDC.DFDC_JackpotBonusGameDetail
         * @instance
         */
        DFDC_JackpotBonusGameDetail.prototype.Place = 0;

        /**
         * DFDC_JackpotBonusGameDetail Icon.
         * @member {number} Icon
         * @memberof GameMsg_DFDC.DFDC_JackpotBonusGameDetail
         * @instance
         */
        DFDC_JackpotBonusGameDetail.prototype.Icon = 0;

        /**
         * Creates a new DFDC_JackpotBonusGameDetail instance using the specified properties.
         * @function create
         * @memberof GameMsg_DFDC.DFDC_JackpotBonusGameDetail
         * @static
         * @param {GameMsg_DFDC.IDFDC_JackpotBonusGameDetail=} [properties] Properties to set
         * @returns {GameMsg_DFDC.DFDC_JackpotBonusGameDetail} DFDC_JackpotBonusGameDetail instance
         */
        DFDC_JackpotBonusGameDetail.create = function create(properties) {
            return new DFDC_JackpotBonusGameDetail(properties);
        };

        /**
         * Encodes the specified DFDC_JackpotBonusGameDetail message. Does not implicitly {@link GameMsg_DFDC.DFDC_JackpotBonusGameDetail.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_DFDC.DFDC_JackpotBonusGameDetail
         * @static
         * @param {GameMsg_DFDC.IDFDC_JackpotBonusGameDetail} message DFDC_JackpotBonusGameDetail message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DFDC_JackpotBonusGameDetail.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.UserID);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.TurnID);
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.Place);
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.Icon);
            return writer;
        };

        /**
         * Encodes the specified DFDC_JackpotBonusGameDetail message, length delimited. Does not implicitly {@link GameMsg_DFDC.DFDC_JackpotBonusGameDetail.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_DFDC.DFDC_JackpotBonusGameDetail
         * @static
         * @param {GameMsg_DFDC.IDFDC_JackpotBonusGameDetail} message DFDC_JackpotBonusGameDetail message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DFDC_JackpotBonusGameDetail.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DFDC_JackpotBonusGameDetail message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_DFDC.DFDC_JackpotBonusGameDetail
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_DFDC.DFDC_JackpotBonusGameDetail} DFDC_JackpotBonusGameDetail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DFDC_JackpotBonusGameDetail.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_DFDC.DFDC_JackpotBonusGameDetail();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.UserID = reader.int32();
                    break;
                case 2:
                    message.TurnID = reader.int32();
                    break;
                case 3:
                    message.Place = reader.int32();
                    break;
                case 4:
                    message.Icon = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("UserID"))
                throw $util.ProtocolError("missing required 'UserID'", { instance: message });
            if (!message.hasOwnProperty("TurnID"))
                throw $util.ProtocolError("missing required 'TurnID'", { instance: message });
            if (!message.hasOwnProperty("Place"))
                throw $util.ProtocolError("missing required 'Place'", { instance: message });
            if (!message.hasOwnProperty("Icon"))
                throw $util.ProtocolError("missing required 'Icon'", { instance: message });
            return message;
        };

        /**
         * Decodes a DFDC_JackpotBonusGameDetail message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_DFDC.DFDC_JackpotBonusGameDetail
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_DFDC.DFDC_JackpotBonusGameDetail} DFDC_JackpotBonusGameDetail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DFDC_JackpotBonusGameDetail.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DFDC_JackpotBonusGameDetail message.
         * @function verify
         * @memberof GameMsg_DFDC.DFDC_JackpotBonusGameDetail
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DFDC_JackpotBonusGameDetail.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.UserID))
                return "UserID: integer expected";
            if (!$util.isInteger(message.TurnID))
                return "TurnID: integer expected";
            if (!$util.isInteger(message.Place))
                return "Place: integer expected";
            if (!$util.isInteger(message.Icon))
                return "Icon: integer expected";
            return null;
        };

        /**
         * Creates a DFDC_JackpotBonusGameDetail message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_DFDC.DFDC_JackpotBonusGameDetail
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_DFDC.DFDC_JackpotBonusGameDetail} DFDC_JackpotBonusGameDetail
         */
        DFDC_JackpotBonusGameDetail.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_DFDC.DFDC_JackpotBonusGameDetail)
                return object;
            var message = new $root.GameMsg_DFDC.DFDC_JackpotBonusGameDetail();
            if (object.UserID != null)
                message.UserID = object.UserID | 0;
            if (object.TurnID != null)
                message.TurnID = object.TurnID | 0;
            if (object.Place != null)
                message.Place = object.Place | 0;
            if (object.Icon != null)
                message.Icon = object.Icon | 0;
            return message;
        };

        /**
         * Creates a plain object from a DFDC_JackpotBonusGameDetail message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_DFDC.DFDC_JackpotBonusGameDetail
         * @static
         * @param {GameMsg_DFDC.DFDC_JackpotBonusGameDetail} message DFDC_JackpotBonusGameDetail
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DFDC_JackpotBonusGameDetail.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.UserID = 0;
                object.TurnID = 0;
                object.Place = 0;
                object.Icon = 0;
            }
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                object.UserID = message.UserID;
            if (message.TurnID != null && message.hasOwnProperty("TurnID"))
                object.TurnID = message.TurnID;
            if (message.Place != null && message.hasOwnProperty("Place"))
                object.Place = message.Place;
            if (message.Icon != null && message.hasOwnProperty("Icon"))
                object.Icon = message.Icon;
            return object;
        };

        /**
         * Converts this DFDC_JackpotBonusGameDetail to JSON.
         * @function toJSON
         * @memberof GameMsg_DFDC.DFDC_JackpotBonusGameDetail
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DFDC_JackpotBonusGameDetail.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return DFDC_JackpotBonusGameDetail;
    })();

    GameMsg_DFDC.DFDC_JackpotBonusGameRecord = (function() {

        /**
         * Properties of a DFDC_JackpotBonusGameRecord.
         * @memberof GameMsg_DFDC
         * @interface IDFDC_JackpotBonusGameRecord
         * @property {number} UserID DFDC_JackpotBonusGameRecord UserID
         * @property {string} chvRecordStr DFDC_JackpotBonusGameRecord chvRecordStr
         * @property {number|Long} winmoney DFDC_JackpotBonusGameRecord winmoney
         */

        /**
         * Constructs a new DFDC_JackpotBonusGameRecord.
         * @memberof GameMsg_DFDC
         * @classdesc Represents a DFDC_JackpotBonusGameRecord.
         * @implements IDFDC_JackpotBonusGameRecord
         * @constructor
         * @param {GameMsg_DFDC.IDFDC_JackpotBonusGameRecord=} [properties] Properties to set
         */
        function DFDC_JackpotBonusGameRecord(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DFDC_JackpotBonusGameRecord UserID.
         * @member {number} UserID
         * @memberof GameMsg_DFDC.DFDC_JackpotBonusGameRecord
         * @instance
         */
        DFDC_JackpotBonusGameRecord.prototype.UserID = 0;

        /**
         * DFDC_JackpotBonusGameRecord chvRecordStr.
         * @member {string} chvRecordStr
         * @memberof GameMsg_DFDC.DFDC_JackpotBonusGameRecord
         * @instance
         */
        DFDC_JackpotBonusGameRecord.prototype.chvRecordStr = "";

        /**
         * DFDC_JackpotBonusGameRecord winmoney.
         * @member {number|Long} winmoney
         * @memberof GameMsg_DFDC.DFDC_JackpotBonusGameRecord
         * @instance
         */
        DFDC_JackpotBonusGameRecord.prototype.winmoney = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new DFDC_JackpotBonusGameRecord instance using the specified properties.
         * @function create
         * @memberof GameMsg_DFDC.DFDC_JackpotBonusGameRecord
         * @static
         * @param {GameMsg_DFDC.IDFDC_JackpotBonusGameRecord=} [properties] Properties to set
         * @returns {GameMsg_DFDC.DFDC_JackpotBonusGameRecord} DFDC_JackpotBonusGameRecord instance
         */
        DFDC_JackpotBonusGameRecord.create = function create(properties) {
            return new DFDC_JackpotBonusGameRecord(properties);
        };

        /**
         * Encodes the specified DFDC_JackpotBonusGameRecord message. Does not implicitly {@link GameMsg_DFDC.DFDC_JackpotBonusGameRecord.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_DFDC.DFDC_JackpotBonusGameRecord
         * @static
         * @param {GameMsg_DFDC.IDFDC_JackpotBonusGameRecord} message DFDC_JackpotBonusGameRecord message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DFDC_JackpotBonusGameRecord.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.UserID);
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.chvRecordStr);
            writer.uint32(/* id 3, wireType 0 =*/24).int64(message.winmoney);
            return writer;
        };

        /**
         * Encodes the specified DFDC_JackpotBonusGameRecord message, length delimited. Does not implicitly {@link GameMsg_DFDC.DFDC_JackpotBonusGameRecord.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_DFDC.DFDC_JackpotBonusGameRecord
         * @static
         * @param {GameMsg_DFDC.IDFDC_JackpotBonusGameRecord} message DFDC_JackpotBonusGameRecord message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DFDC_JackpotBonusGameRecord.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DFDC_JackpotBonusGameRecord message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_DFDC.DFDC_JackpotBonusGameRecord
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_DFDC.DFDC_JackpotBonusGameRecord} DFDC_JackpotBonusGameRecord
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DFDC_JackpotBonusGameRecord.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_DFDC.DFDC_JackpotBonusGameRecord();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.UserID = reader.int32();
                    break;
                case 2:
                    message.chvRecordStr = reader.string();
                    break;
                case 3:
                    message.winmoney = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("UserID"))
                throw $util.ProtocolError("missing required 'UserID'", { instance: message });
            if (!message.hasOwnProperty("chvRecordStr"))
                throw $util.ProtocolError("missing required 'chvRecordStr'", { instance: message });
            if (!message.hasOwnProperty("winmoney"))
                throw $util.ProtocolError("missing required 'winmoney'", { instance: message });
            return message;
        };

        /**
         * Decodes a DFDC_JackpotBonusGameRecord message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_DFDC.DFDC_JackpotBonusGameRecord
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_DFDC.DFDC_JackpotBonusGameRecord} DFDC_JackpotBonusGameRecord
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DFDC_JackpotBonusGameRecord.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DFDC_JackpotBonusGameRecord message.
         * @function verify
         * @memberof GameMsg_DFDC.DFDC_JackpotBonusGameRecord
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DFDC_JackpotBonusGameRecord.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.UserID))
                return "UserID: integer expected";
            if (!$util.isString(message.chvRecordStr))
                return "chvRecordStr: string expected";
            if (!$util.isInteger(message.winmoney) && !(message.winmoney && $util.isInteger(message.winmoney.low) && $util.isInteger(message.winmoney.high)))
                return "winmoney: integer|Long expected";
            return null;
        };

        /**
         * Creates a DFDC_JackpotBonusGameRecord message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_DFDC.DFDC_JackpotBonusGameRecord
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_DFDC.DFDC_JackpotBonusGameRecord} DFDC_JackpotBonusGameRecord
         */
        DFDC_JackpotBonusGameRecord.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_DFDC.DFDC_JackpotBonusGameRecord)
                return object;
            var message = new $root.GameMsg_DFDC.DFDC_JackpotBonusGameRecord();
            if (object.UserID != null)
                message.UserID = object.UserID | 0;
            if (object.chvRecordStr != null)
                message.chvRecordStr = String(object.chvRecordStr);
            if (object.winmoney != null)
                if ($util.Long)
                    (message.winmoney = $util.Long.fromValue(object.winmoney)).unsigned = false;
                else if (typeof object.winmoney === "string")
                    message.winmoney = parseInt(object.winmoney, 10);
                else if (typeof object.winmoney === "number")
                    message.winmoney = object.winmoney;
                else if (typeof object.winmoney === "object")
                    message.winmoney = new $util.LongBits(object.winmoney.low >>> 0, object.winmoney.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a DFDC_JackpotBonusGameRecord message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_DFDC.DFDC_JackpotBonusGameRecord
         * @static
         * @param {GameMsg_DFDC.DFDC_JackpotBonusGameRecord} message DFDC_JackpotBonusGameRecord
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DFDC_JackpotBonusGameRecord.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.UserID = 0;
                object.chvRecordStr = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.winmoney = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.winmoney = options.longs === String ? "0" : 0;
            }
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                object.UserID = message.UserID;
            if (message.chvRecordStr != null && message.hasOwnProperty("chvRecordStr"))
                object.chvRecordStr = message.chvRecordStr;
            if (message.winmoney != null && message.hasOwnProperty("winmoney"))
                if (typeof message.winmoney === "number")
                    object.winmoney = options.longs === String ? String(message.winmoney) : message.winmoney;
                else
                    object.winmoney = options.longs === String ? $util.Long.prototype.toString.call(message.winmoney) : options.longs === Number ? new $util.LongBits(message.winmoney.low >>> 0, message.winmoney.high >>> 0).toNumber() : message.winmoney;
            return object;
        };

        /**
         * Converts this DFDC_JackpotBonusGameRecord to JSON.
         * @function toJSON
         * @memberof GameMsg_DFDC.DFDC_JackpotBonusGameRecord
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DFDC_JackpotBonusGameRecord.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return DFDC_JackpotBonusGameRecord;
    })();

    GameMsg_DFDC.DFDC_JackpotBonusGame = (function() {

        /**
         * Properties of a DFDC_JackpotBonusGame.
         * @memberof GameMsg_DFDC
         * @interface IDFDC_JackpotBonusGame
         * @property {Array.<GameMsg_DFDC.IDFDC_JackpotBonusGameDetail>|null} [BonusDetail] DFDC_JackpotBonusGame BonusDetail
         * @property {number|Long} Money DFDC_JackpotBonusGame Money
         */

        /**
         * Constructs a new DFDC_JackpotBonusGame.
         * @memberof GameMsg_DFDC
         * @classdesc Represents a DFDC_JackpotBonusGame.
         * @implements IDFDC_JackpotBonusGame
         * @constructor
         * @param {GameMsg_DFDC.IDFDC_JackpotBonusGame=} [properties] Properties to set
         */
        function DFDC_JackpotBonusGame(properties) {
            this.BonusDetail = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DFDC_JackpotBonusGame BonusDetail.
         * @member {Array.<GameMsg_DFDC.IDFDC_JackpotBonusGameDetail>} BonusDetail
         * @memberof GameMsg_DFDC.DFDC_JackpotBonusGame
         * @instance
         */
        DFDC_JackpotBonusGame.prototype.BonusDetail = $util.emptyArray;

        /**
         * DFDC_JackpotBonusGame Money.
         * @member {number|Long} Money
         * @memberof GameMsg_DFDC.DFDC_JackpotBonusGame
         * @instance
         */
        DFDC_JackpotBonusGame.prototype.Money = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new DFDC_JackpotBonusGame instance using the specified properties.
         * @function create
         * @memberof GameMsg_DFDC.DFDC_JackpotBonusGame
         * @static
         * @param {GameMsg_DFDC.IDFDC_JackpotBonusGame=} [properties] Properties to set
         * @returns {GameMsg_DFDC.DFDC_JackpotBonusGame} DFDC_JackpotBonusGame instance
         */
        DFDC_JackpotBonusGame.create = function create(properties) {
            return new DFDC_JackpotBonusGame(properties);
        };

        /**
         * Encodes the specified DFDC_JackpotBonusGame message. Does not implicitly {@link GameMsg_DFDC.DFDC_JackpotBonusGame.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_DFDC.DFDC_JackpotBonusGame
         * @static
         * @param {GameMsg_DFDC.IDFDC_JackpotBonusGame} message DFDC_JackpotBonusGame message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DFDC_JackpotBonusGame.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.BonusDetail != null && message.BonusDetail.length)
                for (var i = 0; i < message.BonusDetail.length; ++i)
                    $root.GameMsg_DFDC.DFDC_JackpotBonusGameDetail.encode(message.BonusDetail[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            writer.uint32(/* id 2, wireType 0 =*/16).int64(message.Money);
            return writer;
        };

        /**
         * Encodes the specified DFDC_JackpotBonusGame message, length delimited. Does not implicitly {@link GameMsg_DFDC.DFDC_JackpotBonusGame.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_DFDC.DFDC_JackpotBonusGame
         * @static
         * @param {GameMsg_DFDC.IDFDC_JackpotBonusGame} message DFDC_JackpotBonusGame message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DFDC_JackpotBonusGame.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DFDC_JackpotBonusGame message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_DFDC.DFDC_JackpotBonusGame
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_DFDC.DFDC_JackpotBonusGame} DFDC_JackpotBonusGame
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DFDC_JackpotBonusGame.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_DFDC.DFDC_JackpotBonusGame();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.BonusDetail && message.BonusDetail.length))
                        message.BonusDetail = [];
                    message.BonusDetail.push($root.GameMsg_DFDC.DFDC_JackpotBonusGameDetail.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.Money = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("Money"))
                throw $util.ProtocolError("missing required 'Money'", { instance: message });
            return message;
        };

        /**
         * Decodes a DFDC_JackpotBonusGame message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_DFDC.DFDC_JackpotBonusGame
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_DFDC.DFDC_JackpotBonusGame} DFDC_JackpotBonusGame
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DFDC_JackpotBonusGame.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DFDC_JackpotBonusGame message.
         * @function verify
         * @memberof GameMsg_DFDC.DFDC_JackpotBonusGame
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DFDC_JackpotBonusGame.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.BonusDetail != null && message.hasOwnProperty("BonusDetail")) {
                if (!Array.isArray(message.BonusDetail))
                    return "BonusDetail: array expected";
                for (var i = 0; i < message.BonusDetail.length; ++i) {
                    var error = $root.GameMsg_DFDC.DFDC_JackpotBonusGameDetail.verify(message.BonusDetail[i]);
                    if (error)
                        return "BonusDetail." + error;
                }
            }
            if (!$util.isInteger(message.Money) && !(message.Money && $util.isInteger(message.Money.low) && $util.isInteger(message.Money.high)))
                return "Money: integer|Long expected";
            return null;
        };

        /**
         * Creates a DFDC_JackpotBonusGame message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_DFDC.DFDC_JackpotBonusGame
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_DFDC.DFDC_JackpotBonusGame} DFDC_JackpotBonusGame
         */
        DFDC_JackpotBonusGame.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_DFDC.DFDC_JackpotBonusGame)
                return object;
            var message = new $root.GameMsg_DFDC.DFDC_JackpotBonusGame();
            if (object.BonusDetail) {
                if (!Array.isArray(object.BonusDetail))
                    throw TypeError(".GameMsg_DFDC.DFDC_JackpotBonusGame.BonusDetail: array expected");
                message.BonusDetail = [];
                for (var i = 0; i < object.BonusDetail.length; ++i) {
                    if (typeof object.BonusDetail[i] !== "object")
                        throw TypeError(".GameMsg_DFDC.DFDC_JackpotBonusGame.BonusDetail: object expected");
                    message.BonusDetail[i] = $root.GameMsg_DFDC.DFDC_JackpotBonusGameDetail.fromObject(object.BonusDetail[i]);
                }
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
            return message;
        };

        /**
         * Creates a plain object from a DFDC_JackpotBonusGame message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_DFDC.DFDC_JackpotBonusGame
         * @static
         * @param {GameMsg_DFDC.DFDC_JackpotBonusGame} message DFDC_JackpotBonusGame
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DFDC_JackpotBonusGame.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.BonusDetail = [];
            if (options.defaults)
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.Money = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.Money = options.longs === String ? "0" : 0;
            if (message.BonusDetail && message.BonusDetail.length) {
                object.BonusDetail = [];
                for (var j = 0; j < message.BonusDetail.length; ++j)
                    object.BonusDetail[j] = $root.GameMsg_DFDC.DFDC_JackpotBonusGameDetail.toObject(message.BonusDetail[j], options);
            }
            if (message.Money != null && message.hasOwnProperty("Money"))
                if (typeof message.Money === "number")
                    object.Money = options.longs === String ? String(message.Money) : message.Money;
                else
                    object.Money = options.longs === String ? $util.Long.prototype.toString.call(message.Money) : options.longs === Number ? new $util.LongBits(message.Money.low >>> 0, message.Money.high >>> 0).toNumber() : message.Money;
            return object;
        };

        /**
         * Converts this DFDC_JackpotBonusGame to JSON.
         * @function toJSON
         * @memberof GameMsg_DFDC.DFDC_JackpotBonusGame
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DFDC_JackpotBonusGame.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return DFDC_JackpotBonusGame;
    })();

    GameMsg_DFDC.DFDC_JackpotBonusGameRet = (function() {

        /**
         * Properties of a DFDC_JackpotBonusGameRet.
         * @memberof GameMsg_DFDC
         * @interface IDFDC_JackpotBonusGameRet
         * @property {number} UserID DFDC_JackpotBonusGameRet UserID
         */

        /**
         * Constructs a new DFDC_JackpotBonusGameRet.
         * @memberof GameMsg_DFDC
         * @classdesc Represents a DFDC_JackpotBonusGameRet.
         * @implements IDFDC_JackpotBonusGameRet
         * @constructor
         * @param {GameMsg_DFDC.IDFDC_JackpotBonusGameRet=} [properties] Properties to set
         */
        function DFDC_JackpotBonusGameRet(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DFDC_JackpotBonusGameRet UserID.
         * @member {number} UserID
         * @memberof GameMsg_DFDC.DFDC_JackpotBonusGameRet
         * @instance
         */
        DFDC_JackpotBonusGameRet.prototype.UserID = 0;

        /**
         * Creates a new DFDC_JackpotBonusGameRet instance using the specified properties.
         * @function create
         * @memberof GameMsg_DFDC.DFDC_JackpotBonusGameRet
         * @static
         * @param {GameMsg_DFDC.IDFDC_JackpotBonusGameRet=} [properties] Properties to set
         * @returns {GameMsg_DFDC.DFDC_JackpotBonusGameRet} DFDC_JackpotBonusGameRet instance
         */
        DFDC_JackpotBonusGameRet.create = function create(properties) {
            return new DFDC_JackpotBonusGameRet(properties);
        };

        /**
         * Encodes the specified DFDC_JackpotBonusGameRet message. Does not implicitly {@link GameMsg_DFDC.DFDC_JackpotBonusGameRet.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_DFDC.DFDC_JackpotBonusGameRet
         * @static
         * @param {GameMsg_DFDC.IDFDC_JackpotBonusGameRet} message DFDC_JackpotBonusGameRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DFDC_JackpotBonusGameRet.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.UserID);
            return writer;
        };

        /**
         * Encodes the specified DFDC_JackpotBonusGameRet message, length delimited. Does not implicitly {@link GameMsg_DFDC.DFDC_JackpotBonusGameRet.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_DFDC.DFDC_JackpotBonusGameRet
         * @static
         * @param {GameMsg_DFDC.IDFDC_JackpotBonusGameRet} message DFDC_JackpotBonusGameRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DFDC_JackpotBonusGameRet.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DFDC_JackpotBonusGameRet message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_DFDC.DFDC_JackpotBonusGameRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_DFDC.DFDC_JackpotBonusGameRet} DFDC_JackpotBonusGameRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DFDC_JackpotBonusGameRet.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_DFDC.DFDC_JackpotBonusGameRet();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.UserID = reader.int32();
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
         * Decodes a DFDC_JackpotBonusGameRet message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_DFDC.DFDC_JackpotBonusGameRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_DFDC.DFDC_JackpotBonusGameRet} DFDC_JackpotBonusGameRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DFDC_JackpotBonusGameRet.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DFDC_JackpotBonusGameRet message.
         * @function verify
         * @memberof GameMsg_DFDC.DFDC_JackpotBonusGameRet
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DFDC_JackpotBonusGameRet.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.UserID))
                return "UserID: integer expected";
            return null;
        };

        /**
         * Creates a DFDC_JackpotBonusGameRet message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_DFDC.DFDC_JackpotBonusGameRet
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_DFDC.DFDC_JackpotBonusGameRet} DFDC_JackpotBonusGameRet
         */
        DFDC_JackpotBonusGameRet.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_DFDC.DFDC_JackpotBonusGameRet)
                return object;
            var message = new $root.GameMsg_DFDC.DFDC_JackpotBonusGameRet();
            if (object.UserID != null)
                message.UserID = object.UserID | 0;
            return message;
        };

        /**
         * Creates a plain object from a DFDC_JackpotBonusGameRet message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_DFDC.DFDC_JackpotBonusGameRet
         * @static
         * @param {GameMsg_DFDC.DFDC_JackpotBonusGameRet} message DFDC_JackpotBonusGameRet
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DFDC_JackpotBonusGameRet.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.UserID = 0;
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                object.UserID = message.UserID;
            return object;
        };

        /**
         * Converts this DFDC_JackpotBonusGameRet to JSON.
         * @function toJSON
         * @memberof GameMsg_DFDC.DFDC_JackpotBonusGameRet
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DFDC_JackpotBonusGameRet.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return DFDC_JackpotBonusGameRet;
    })();

    GameMsg_DFDC.DFDC_UserRecover = (function() {

        /**
         * Properties of a DFDC_UserRecover.
         * @memberof GameMsg_DFDC
         * @interface IDFDC_UserRecover
         * @property {number|Long} WinMoey DFDC_UserRecover WinMoey
         * @property {number|Long} BetMoney DFDC_UserRecover BetMoney
         * @property {number} GoldenSymbol DFDC_UserRecover GoldenSymbol
         */

        /**
         * Constructs a new DFDC_UserRecover.
         * @memberof GameMsg_DFDC
         * @classdesc Represents a DFDC_UserRecover.
         * @implements IDFDC_UserRecover
         * @constructor
         * @param {GameMsg_DFDC.IDFDC_UserRecover=} [properties] Properties to set
         */
        function DFDC_UserRecover(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DFDC_UserRecover WinMoey.
         * @member {number|Long} WinMoey
         * @memberof GameMsg_DFDC.DFDC_UserRecover
         * @instance
         */
        DFDC_UserRecover.prototype.WinMoey = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * DFDC_UserRecover BetMoney.
         * @member {number|Long} BetMoney
         * @memberof GameMsg_DFDC.DFDC_UserRecover
         * @instance
         */
        DFDC_UserRecover.prototype.BetMoney = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * DFDC_UserRecover GoldenSymbol.
         * @member {number} GoldenSymbol
         * @memberof GameMsg_DFDC.DFDC_UserRecover
         * @instance
         */
        DFDC_UserRecover.prototype.GoldenSymbol = 0;

        /**
         * Creates a new DFDC_UserRecover instance using the specified properties.
         * @function create
         * @memberof GameMsg_DFDC.DFDC_UserRecover
         * @static
         * @param {GameMsg_DFDC.IDFDC_UserRecover=} [properties] Properties to set
         * @returns {GameMsg_DFDC.DFDC_UserRecover} DFDC_UserRecover instance
         */
        DFDC_UserRecover.create = function create(properties) {
            return new DFDC_UserRecover(properties);
        };

        /**
         * Encodes the specified DFDC_UserRecover message. Does not implicitly {@link GameMsg_DFDC.DFDC_UserRecover.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_DFDC.DFDC_UserRecover
         * @static
         * @param {GameMsg_DFDC.IDFDC_UserRecover} message DFDC_UserRecover message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DFDC_UserRecover.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int64(message.WinMoey);
            writer.uint32(/* id 2, wireType 0 =*/16).int64(message.BetMoney);
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.GoldenSymbol);
            return writer;
        };

        /**
         * Encodes the specified DFDC_UserRecover message, length delimited. Does not implicitly {@link GameMsg_DFDC.DFDC_UserRecover.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_DFDC.DFDC_UserRecover
         * @static
         * @param {GameMsg_DFDC.IDFDC_UserRecover} message DFDC_UserRecover message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DFDC_UserRecover.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DFDC_UserRecover message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_DFDC.DFDC_UserRecover
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_DFDC.DFDC_UserRecover} DFDC_UserRecover
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DFDC_UserRecover.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_DFDC.DFDC_UserRecover();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.WinMoey = reader.int64();
                    break;
                case 2:
                    message.BetMoney = reader.int64();
                    break;
                case 3:
                    message.GoldenSymbol = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("WinMoey"))
                throw $util.ProtocolError("missing required 'WinMoey'", { instance: message });
            if (!message.hasOwnProperty("BetMoney"))
                throw $util.ProtocolError("missing required 'BetMoney'", { instance: message });
            if (!message.hasOwnProperty("GoldenSymbol"))
                throw $util.ProtocolError("missing required 'GoldenSymbol'", { instance: message });
            return message;
        };

        /**
         * Decodes a DFDC_UserRecover message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_DFDC.DFDC_UserRecover
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_DFDC.DFDC_UserRecover} DFDC_UserRecover
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DFDC_UserRecover.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DFDC_UserRecover message.
         * @function verify
         * @memberof GameMsg_DFDC.DFDC_UserRecover
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DFDC_UserRecover.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.WinMoey) && !(message.WinMoey && $util.isInteger(message.WinMoey.low) && $util.isInteger(message.WinMoey.high)))
                return "WinMoey: integer|Long expected";
            if (!$util.isInteger(message.BetMoney) && !(message.BetMoney && $util.isInteger(message.BetMoney.low) && $util.isInteger(message.BetMoney.high)))
                return "BetMoney: integer|Long expected";
            if (!$util.isInteger(message.GoldenSymbol))
                return "GoldenSymbol: integer expected";
            return null;
        };

        /**
         * Creates a DFDC_UserRecover message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_DFDC.DFDC_UserRecover
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_DFDC.DFDC_UserRecover} DFDC_UserRecover
         */
        DFDC_UserRecover.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_DFDC.DFDC_UserRecover)
                return object;
            var message = new $root.GameMsg_DFDC.DFDC_UserRecover();
            if (object.WinMoey != null)
                if ($util.Long)
                    (message.WinMoey = $util.Long.fromValue(object.WinMoey)).unsigned = false;
                else if (typeof object.WinMoey === "string")
                    message.WinMoey = parseInt(object.WinMoey, 10);
                else if (typeof object.WinMoey === "number")
                    message.WinMoey = object.WinMoey;
                else if (typeof object.WinMoey === "object")
                    message.WinMoey = new $util.LongBits(object.WinMoey.low >>> 0, object.WinMoey.high >>> 0).toNumber();
            if (object.BetMoney != null)
                if ($util.Long)
                    (message.BetMoney = $util.Long.fromValue(object.BetMoney)).unsigned = false;
                else if (typeof object.BetMoney === "string")
                    message.BetMoney = parseInt(object.BetMoney, 10);
                else if (typeof object.BetMoney === "number")
                    message.BetMoney = object.BetMoney;
                else if (typeof object.BetMoney === "object")
                    message.BetMoney = new $util.LongBits(object.BetMoney.low >>> 0, object.BetMoney.high >>> 0).toNumber();
            if (object.GoldenSymbol != null)
                message.GoldenSymbol = object.GoldenSymbol | 0;
            return message;
        };

        /**
         * Creates a plain object from a DFDC_UserRecover message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_DFDC.DFDC_UserRecover
         * @static
         * @param {GameMsg_DFDC.DFDC_UserRecover} message DFDC_UserRecover
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DFDC_UserRecover.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.WinMoey = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.WinMoey = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.BetMoney = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.BetMoney = options.longs === String ? "0" : 0;
                object.GoldenSymbol = 0;
            }
            if (message.WinMoey != null && message.hasOwnProperty("WinMoey"))
                if (typeof message.WinMoey === "number")
                    object.WinMoey = options.longs === String ? String(message.WinMoey) : message.WinMoey;
                else
                    object.WinMoey = options.longs === String ? $util.Long.prototype.toString.call(message.WinMoey) : options.longs === Number ? new $util.LongBits(message.WinMoey.low >>> 0, message.WinMoey.high >>> 0).toNumber() : message.WinMoey;
            if (message.BetMoney != null && message.hasOwnProperty("BetMoney"))
                if (typeof message.BetMoney === "number")
                    object.BetMoney = options.longs === String ? String(message.BetMoney) : message.BetMoney;
                else
                    object.BetMoney = options.longs === String ? $util.Long.prototype.toString.call(message.BetMoney) : options.longs === Number ? new $util.LongBits(message.BetMoney.low >>> 0, message.BetMoney.high >>> 0).toNumber() : message.BetMoney;
            if (message.GoldenSymbol != null && message.hasOwnProperty("GoldenSymbol"))
                object.GoldenSymbol = message.GoldenSymbol;
            return object;
        };

        /**
         * Converts this DFDC_UserRecover to JSON.
         * @function toJSON
         * @memberof GameMsg_DFDC.DFDC_UserRecover
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DFDC_UserRecover.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return DFDC_UserRecover;
    })();

    GameMsg_DFDC.DFDC_GetGameLog = (function() {

        /**
         * Properties of a DFDC_GetGameLog.
         * @memberof GameMsg_DFDC
         * @interface IDFDC_GetGameLog
         * @property {string} StartTime DFDC_GetGameLog StartTime
         * @property {string} EndTime DFDC_GetGameLog EndTime
         * @property {number} PageIndex DFDC_GetGameLog PageIndex
         * @property {number} PageSize DFDC_GetGameLog PageSize
         */

        /**
         * Constructs a new DFDC_GetGameLog.
         * @memberof GameMsg_DFDC
         * @classdesc Represents a DFDC_GetGameLog.
         * @implements IDFDC_GetGameLog
         * @constructor
         * @param {GameMsg_DFDC.IDFDC_GetGameLog=} [properties] Properties to set
         */
        function DFDC_GetGameLog(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DFDC_GetGameLog StartTime.
         * @member {string} StartTime
         * @memberof GameMsg_DFDC.DFDC_GetGameLog
         * @instance
         */
        DFDC_GetGameLog.prototype.StartTime = "";

        /**
         * DFDC_GetGameLog EndTime.
         * @member {string} EndTime
         * @memberof GameMsg_DFDC.DFDC_GetGameLog
         * @instance
         */
        DFDC_GetGameLog.prototype.EndTime = "";

        /**
         * DFDC_GetGameLog PageIndex.
         * @member {number} PageIndex
         * @memberof GameMsg_DFDC.DFDC_GetGameLog
         * @instance
         */
        DFDC_GetGameLog.prototype.PageIndex = 0;

        /**
         * DFDC_GetGameLog PageSize.
         * @member {number} PageSize
         * @memberof GameMsg_DFDC.DFDC_GetGameLog
         * @instance
         */
        DFDC_GetGameLog.prototype.PageSize = 0;

        /**
         * Creates a new DFDC_GetGameLog instance using the specified properties.
         * @function create
         * @memberof GameMsg_DFDC.DFDC_GetGameLog
         * @static
         * @param {GameMsg_DFDC.IDFDC_GetGameLog=} [properties] Properties to set
         * @returns {GameMsg_DFDC.DFDC_GetGameLog} DFDC_GetGameLog instance
         */
        DFDC_GetGameLog.create = function create(properties) {
            return new DFDC_GetGameLog(properties);
        };

        /**
         * Encodes the specified DFDC_GetGameLog message. Does not implicitly {@link GameMsg_DFDC.DFDC_GetGameLog.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_DFDC.DFDC_GetGameLog
         * @static
         * @param {GameMsg_DFDC.IDFDC_GetGameLog} message DFDC_GetGameLog message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DFDC_GetGameLog.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.StartTime);
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.EndTime);
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.PageIndex);
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.PageSize);
            return writer;
        };

        /**
         * Encodes the specified DFDC_GetGameLog message, length delimited. Does not implicitly {@link GameMsg_DFDC.DFDC_GetGameLog.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_DFDC.DFDC_GetGameLog
         * @static
         * @param {GameMsg_DFDC.IDFDC_GetGameLog} message DFDC_GetGameLog message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DFDC_GetGameLog.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DFDC_GetGameLog message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_DFDC.DFDC_GetGameLog
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_DFDC.DFDC_GetGameLog} DFDC_GetGameLog
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DFDC_GetGameLog.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_DFDC.DFDC_GetGameLog();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.StartTime = reader.string();
                    break;
                case 2:
                    message.EndTime = reader.string();
                    break;
                case 3:
                    message.PageIndex = reader.int32();
                    break;
                case 4:
                    message.PageSize = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("StartTime"))
                throw $util.ProtocolError("missing required 'StartTime'", { instance: message });
            if (!message.hasOwnProperty("EndTime"))
                throw $util.ProtocolError("missing required 'EndTime'", { instance: message });
            if (!message.hasOwnProperty("PageIndex"))
                throw $util.ProtocolError("missing required 'PageIndex'", { instance: message });
            if (!message.hasOwnProperty("PageSize"))
                throw $util.ProtocolError("missing required 'PageSize'", { instance: message });
            return message;
        };

        /**
         * Decodes a DFDC_GetGameLog message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_DFDC.DFDC_GetGameLog
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_DFDC.DFDC_GetGameLog} DFDC_GetGameLog
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DFDC_GetGameLog.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DFDC_GetGameLog message.
         * @function verify
         * @memberof GameMsg_DFDC.DFDC_GetGameLog
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DFDC_GetGameLog.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.StartTime))
                return "StartTime: string expected";
            if (!$util.isString(message.EndTime))
                return "EndTime: string expected";
            if (!$util.isInteger(message.PageIndex))
                return "PageIndex: integer expected";
            if (!$util.isInteger(message.PageSize))
                return "PageSize: integer expected";
            return null;
        };

        /**
         * Creates a DFDC_GetGameLog message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_DFDC.DFDC_GetGameLog
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_DFDC.DFDC_GetGameLog} DFDC_GetGameLog
         */
        DFDC_GetGameLog.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_DFDC.DFDC_GetGameLog)
                return object;
            var message = new $root.GameMsg_DFDC.DFDC_GetGameLog();
            if (object.StartTime != null)
                message.StartTime = String(object.StartTime);
            if (object.EndTime != null)
                message.EndTime = String(object.EndTime);
            if (object.PageIndex != null)
                message.PageIndex = object.PageIndex | 0;
            if (object.PageSize != null)
                message.PageSize = object.PageSize | 0;
            return message;
        };

        /**
         * Creates a plain object from a DFDC_GetGameLog message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_DFDC.DFDC_GetGameLog
         * @static
         * @param {GameMsg_DFDC.DFDC_GetGameLog} message DFDC_GetGameLog
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DFDC_GetGameLog.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.StartTime = "";
                object.EndTime = "";
                object.PageIndex = 0;
                object.PageSize = 0;
            }
            if (message.StartTime != null && message.hasOwnProperty("StartTime"))
                object.StartTime = message.StartTime;
            if (message.EndTime != null && message.hasOwnProperty("EndTime"))
                object.EndTime = message.EndTime;
            if (message.PageIndex != null && message.hasOwnProperty("PageIndex"))
                object.PageIndex = message.PageIndex;
            if (message.PageSize != null && message.hasOwnProperty("PageSize"))
                object.PageSize = message.PageSize;
            return object;
        };

        /**
         * Converts this DFDC_GetGameLog to JSON.
         * @function toJSON
         * @memberof GameMsg_DFDC.DFDC_GetGameLog
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DFDC_GetGameLog.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return DFDC_GetGameLog;
    })();

    GameMsg_DFDC.DFDC_UnitPrefix = (function() {

        /**
         * Properties of a DFDC_UnitPrefix.
         * @memberof GameMsg_DFDC
         * @interface IDFDC_UnitPrefix
         * @property {string|null} [Name] DFDC_UnitPrefix Name
         * @property {number|Long|null} [Multiple] DFDC_UnitPrefix Multiple
         */

        /**
         * Constructs a new DFDC_UnitPrefix.
         * @memberof GameMsg_DFDC
         * @classdesc Represents a DFDC_UnitPrefix.
         * @implements IDFDC_UnitPrefix
         * @constructor
         * @param {GameMsg_DFDC.IDFDC_UnitPrefix=} [properties] Properties to set
         */
        function DFDC_UnitPrefix(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DFDC_UnitPrefix Name.
         * @member {string} Name
         * @memberof GameMsg_DFDC.DFDC_UnitPrefix
         * @instance
         */
        DFDC_UnitPrefix.prototype.Name = "";

        /**
         * DFDC_UnitPrefix Multiple.
         * @member {number|Long} Multiple
         * @memberof GameMsg_DFDC.DFDC_UnitPrefix
         * @instance
         */
        DFDC_UnitPrefix.prototype.Multiple = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new DFDC_UnitPrefix instance using the specified properties.
         * @function create
         * @memberof GameMsg_DFDC.DFDC_UnitPrefix
         * @static
         * @param {GameMsg_DFDC.IDFDC_UnitPrefix=} [properties] Properties to set
         * @returns {GameMsg_DFDC.DFDC_UnitPrefix} DFDC_UnitPrefix instance
         */
        DFDC_UnitPrefix.create = function create(properties) {
            return new DFDC_UnitPrefix(properties);
        };

        /**
         * Encodes the specified DFDC_UnitPrefix message. Does not implicitly {@link GameMsg_DFDC.DFDC_UnitPrefix.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_DFDC.DFDC_UnitPrefix
         * @static
         * @param {GameMsg_DFDC.IDFDC_UnitPrefix} message DFDC_UnitPrefix message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DFDC_UnitPrefix.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Name != null && message.hasOwnProperty("Name"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.Name);
            if (message.Multiple != null && message.hasOwnProperty("Multiple"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.Multiple);
            return writer;
        };

        /**
         * Encodes the specified DFDC_UnitPrefix message, length delimited. Does not implicitly {@link GameMsg_DFDC.DFDC_UnitPrefix.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_DFDC.DFDC_UnitPrefix
         * @static
         * @param {GameMsg_DFDC.IDFDC_UnitPrefix} message DFDC_UnitPrefix message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DFDC_UnitPrefix.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DFDC_UnitPrefix message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_DFDC.DFDC_UnitPrefix
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_DFDC.DFDC_UnitPrefix} DFDC_UnitPrefix
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DFDC_UnitPrefix.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_DFDC.DFDC_UnitPrefix();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Name = reader.string();
                    break;
                case 2:
                    message.Multiple = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a DFDC_UnitPrefix message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_DFDC.DFDC_UnitPrefix
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_DFDC.DFDC_UnitPrefix} DFDC_UnitPrefix
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DFDC_UnitPrefix.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DFDC_UnitPrefix message.
         * @function verify
         * @memberof GameMsg_DFDC.DFDC_UnitPrefix
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DFDC_UnitPrefix.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Name != null && message.hasOwnProperty("Name"))
                if (!$util.isString(message.Name))
                    return "Name: string expected";
            if (message.Multiple != null && message.hasOwnProperty("Multiple"))
                if (!$util.isInteger(message.Multiple) && !(message.Multiple && $util.isInteger(message.Multiple.low) && $util.isInteger(message.Multiple.high)))
                    return "Multiple: integer|Long expected";
            return null;
        };

        /**
         * Creates a DFDC_UnitPrefix message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_DFDC.DFDC_UnitPrefix
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_DFDC.DFDC_UnitPrefix} DFDC_UnitPrefix
         */
        DFDC_UnitPrefix.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_DFDC.DFDC_UnitPrefix)
                return object;
            var message = new $root.GameMsg_DFDC.DFDC_UnitPrefix();
            if (object.Name != null)
                message.Name = String(object.Name);
            if (object.Multiple != null)
                if ($util.Long)
                    (message.Multiple = $util.Long.fromValue(object.Multiple)).unsigned = false;
                else if (typeof object.Multiple === "string")
                    message.Multiple = parseInt(object.Multiple, 10);
                else if (typeof object.Multiple === "number")
                    message.Multiple = object.Multiple;
                else if (typeof object.Multiple === "object")
                    message.Multiple = new $util.LongBits(object.Multiple.low >>> 0, object.Multiple.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a DFDC_UnitPrefix message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_DFDC.DFDC_UnitPrefix
         * @static
         * @param {GameMsg_DFDC.DFDC_UnitPrefix} message DFDC_UnitPrefix
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DFDC_UnitPrefix.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.Name = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.Multiple = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.Multiple = options.longs === String ? "0" : 0;
            }
            if (message.Name != null && message.hasOwnProperty("Name"))
                object.Name = message.Name;
            if (message.Multiple != null && message.hasOwnProperty("Multiple"))
                if (typeof message.Multiple === "number")
                    object.Multiple = options.longs === String ? String(message.Multiple) : message.Multiple;
                else
                    object.Multiple = options.longs === String ? $util.Long.prototype.toString.call(message.Multiple) : options.longs === Number ? new $util.LongBits(message.Multiple.low >>> 0, message.Multiple.high >>> 0).toNumber() : message.Multiple;
            return object;
        };

        /**
         * Converts this DFDC_UnitPrefix to JSON.
         * @function toJSON
         * @memberof GameMsg_DFDC.DFDC_UnitPrefix
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DFDC_UnitPrefix.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return DFDC_UnitPrefix;
    })();

    GameMsg_DFDC.DFDC_MSG_GameLogRead = (function() {

        /**
         * Properties of a DFDC_MSG_GameLogRead.
         * @memberof GameMsg_DFDC
         * @interface IDFDC_MSG_GameLogRead
         * @property {number|null} [UserID] DFDC_MSG_GameLogRead UserID
         * @property {number|null} [GameID] DFDC_MSG_GameLogRead GameID
         * @property {string|null} [StartTime] DFDC_MSG_GameLogRead StartTime
         * @property {string|null} [EndTime] DFDC_MSG_GameLogRead EndTime
         * @property {number|null} [PageIndex] DFDC_MSG_GameLogRead PageIndex
         * @property {number|null} [PageSize] DFDC_MSG_GameLogRead PageSize
         */

        /**
         * Constructs a new DFDC_MSG_GameLogRead.
         * @memberof GameMsg_DFDC
         * @classdesc Represents a DFDC_MSG_GameLogRead.
         * @implements IDFDC_MSG_GameLogRead
         * @constructor
         * @param {GameMsg_DFDC.IDFDC_MSG_GameLogRead=} [properties] Properties to set
         */
        function DFDC_MSG_GameLogRead(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DFDC_MSG_GameLogRead UserID.
         * @member {number} UserID
         * @memberof GameMsg_DFDC.DFDC_MSG_GameLogRead
         * @instance
         */
        DFDC_MSG_GameLogRead.prototype.UserID = 0;

        /**
         * DFDC_MSG_GameLogRead GameID.
         * @member {number} GameID
         * @memberof GameMsg_DFDC.DFDC_MSG_GameLogRead
         * @instance
         */
        DFDC_MSG_GameLogRead.prototype.GameID = 0;

        /**
         * DFDC_MSG_GameLogRead StartTime.
         * @member {string} StartTime
         * @memberof GameMsg_DFDC.DFDC_MSG_GameLogRead
         * @instance
         */
        DFDC_MSG_GameLogRead.prototype.StartTime = "";

        /**
         * DFDC_MSG_GameLogRead EndTime.
         * @member {string} EndTime
         * @memberof GameMsg_DFDC.DFDC_MSG_GameLogRead
         * @instance
         */
        DFDC_MSG_GameLogRead.prototype.EndTime = "";

        /**
         * DFDC_MSG_GameLogRead PageIndex.
         * @member {number} PageIndex
         * @memberof GameMsg_DFDC.DFDC_MSG_GameLogRead
         * @instance
         */
        DFDC_MSG_GameLogRead.prototype.PageIndex = 0;

        /**
         * DFDC_MSG_GameLogRead PageSize.
         * @member {number} PageSize
         * @memberof GameMsg_DFDC.DFDC_MSG_GameLogRead
         * @instance
         */
        DFDC_MSG_GameLogRead.prototype.PageSize = 0;

        /**
         * Creates a new DFDC_MSG_GameLogRead instance using the specified properties.
         * @function create
         * @memberof GameMsg_DFDC.DFDC_MSG_GameLogRead
         * @static
         * @param {GameMsg_DFDC.IDFDC_MSG_GameLogRead=} [properties] Properties to set
         * @returns {GameMsg_DFDC.DFDC_MSG_GameLogRead} DFDC_MSG_GameLogRead instance
         */
        DFDC_MSG_GameLogRead.create = function create(properties) {
            return new DFDC_MSG_GameLogRead(properties);
        };

        /**
         * Encodes the specified DFDC_MSG_GameLogRead message. Does not implicitly {@link GameMsg_DFDC.DFDC_MSG_GameLogRead.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_DFDC.DFDC_MSG_GameLogRead
         * @static
         * @param {GameMsg_DFDC.IDFDC_MSG_GameLogRead} message DFDC_MSG_GameLogRead message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DFDC_MSG_GameLogRead.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.UserID);
            if (message.GameID != null && message.hasOwnProperty("GameID"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.GameID);
            if (message.StartTime != null && message.hasOwnProperty("StartTime"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.StartTime);
            if (message.EndTime != null && message.hasOwnProperty("EndTime"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.EndTime);
            if (message.PageIndex != null && message.hasOwnProperty("PageIndex"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.PageIndex);
            if (message.PageSize != null && message.hasOwnProperty("PageSize"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.PageSize);
            return writer;
        };

        /**
         * Encodes the specified DFDC_MSG_GameLogRead message, length delimited. Does not implicitly {@link GameMsg_DFDC.DFDC_MSG_GameLogRead.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_DFDC.DFDC_MSG_GameLogRead
         * @static
         * @param {GameMsg_DFDC.IDFDC_MSG_GameLogRead} message DFDC_MSG_GameLogRead message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DFDC_MSG_GameLogRead.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DFDC_MSG_GameLogRead message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_DFDC.DFDC_MSG_GameLogRead
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_DFDC.DFDC_MSG_GameLogRead} DFDC_MSG_GameLogRead
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DFDC_MSG_GameLogRead.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_DFDC.DFDC_MSG_GameLogRead();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.UserID = reader.int32();
                    break;
                case 2:
                    message.GameID = reader.int32();
                    break;
                case 3:
                    message.StartTime = reader.string();
                    break;
                case 4:
                    message.EndTime = reader.string();
                    break;
                case 5:
                    message.PageIndex = reader.int32();
                    break;
                case 6:
                    message.PageSize = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a DFDC_MSG_GameLogRead message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_DFDC.DFDC_MSG_GameLogRead
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_DFDC.DFDC_MSG_GameLogRead} DFDC_MSG_GameLogRead
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DFDC_MSG_GameLogRead.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DFDC_MSG_GameLogRead message.
         * @function verify
         * @memberof GameMsg_DFDC.DFDC_MSG_GameLogRead
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DFDC_MSG_GameLogRead.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                if (!$util.isInteger(message.UserID))
                    return "UserID: integer expected";
            if (message.GameID != null && message.hasOwnProperty("GameID"))
                if (!$util.isInteger(message.GameID))
                    return "GameID: integer expected";
            if (message.StartTime != null && message.hasOwnProperty("StartTime"))
                if (!$util.isString(message.StartTime))
                    return "StartTime: string expected";
            if (message.EndTime != null && message.hasOwnProperty("EndTime"))
                if (!$util.isString(message.EndTime))
                    return "EndTime: string expected";
            if (message.PageIndex != null && message.hasOwnProperty("PageIndex"))
                if (!$util.isInteger(message.PageIndex))
                    return "PageIndex: integer expected";
            if (message.PageSize != null && message.hasOwnProperty("PageSize"))
                if (!$util.isInteger(message.PageSize))
                    return "PageSize: integer expected";
            return null;
        };

        /**
         * Creates a DFDC_MSG_GameLogRead message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_DFDC.DFDC_MSG_GameLogRead
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_DFDC.DFDC_MSG_GameLogRead} DFDC_MSG_GameLogRead
         */
        DFDC_MSG_GameLogRead.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_DFDC.DFDC_MSG_GameLogRead)
                return object;
            var message = new $root.GameMsg_DFDC.DFDC_MSG_GameLogRead();
            if (object.UserID != null)
                message.UserID = object.UserID | 0;
            if (object.GameID != null)
                message.GameID = object.GameID | 0;
            if (object.StartTime != null)
                message.StartTime = String(object.StartTime);
            if (object.EndTime != null)
                message.EndTime = String(object.EndTime);
            if (object.PageIndex != null)
                message.PageIndex = object.PageIndex | 0;
            if (object.PageSize != null)
                message.PageSize = object.PageSize | 0;
            return message;
        };

        /**
         * Creates a plain object from a DFDC_MSG_GameLogRead message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_DFDC.DFDC_MSG_GameLogRead
         * @static
         * @param {GameMsg_DFDC.DFDC_MSG_GameLogRead} message DFDC_MSG_GameLogRead
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DFDC_MSG_GameLogRead.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.UserID = 0;
                object.GameID = 0;
                object.StartTime = "";
                object.EndTime = "";
                object.PageIndex = 0;
                object.PageSize = 0;
            }
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                object.UserID = message.UserID;
            if (message.GameID != null && message.hasOwnProperty("GameID"))
                object.GameID = message.GameID;
            if (message.StartTime != null && message.hasOwnProperty("StartTime"))
                object.StartTime = message.StartTime;
            if (message.EndTime != null && message.hasOwnProperty("EndTime"))
                object.EndTime = message.EndTime;
            if (message.PageIndex != null && message.hasOwnProperty("PageIndex"))
                object.PageIndex = message.PageIndex;
            if (message.PageSize != null && message.hasOwnProperty("PageSize"))
                object.PageSize = message.PageSize;
            return object;
        };

        /**
         * Converts this DFDC_MSG_GameLogRead to JSON.
         * @function toJSON
         * @memberof GameMsg_DFDC.DFDC_MSG_GameLogRead
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DFDC_MSG_GameLogRead.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return DFDC_MSG_GameLogRead;
    })();

    GameMsg_DFDC.DFDC_MSG_GameLogRecord = (function() {

        /**
         * Properties of a DFDC_MSG_GameLogRecord.
         * @memberof GameMsg_DFDC
         * @interface IDFDC_MSG_GameLogRecord
         * @property {number|null} [UserID] DFDC_MSG_GameLogRecord UserID
         * @property {number|null} [GameID] DFDC_MSG_GameLogRecord GameID
         * @property {number|null} [PageCount] DFDC_MSG_GameLogRecord PageCount
         * @property {Array.<GameMsg_DFDC.IDFDC_GameLog>|null} [Logs] DFDC_MSG_GameLogRecord Logs
         */

        /**
         * Constructs a new DFDC_MSG_GameLogRecord.
         * @memberof GameMsg_DFDC
         * @classdesc Represents a DFDC_MSG_GameLogRecord.
         * @implements IDFDC_MSG_GameLogRecord
         * @constructor
         * @param {GameMsg_DFDC.IDFDC_MSG_GameLogRecord=} [properties] Properties to set
         */
        function DFDC_MSG_GameLogRecord(properties) {
            this.Logs = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DFDC_MSG_GameLogRecord UserID.
         * @member {number} UserID
         * @memberof GameMsg_DFDC.DFDC_MSG_GameLogRecord
         * @instance
         */
        DFDC_MSG_GameLogRecord.prototype.UserID = 0;

        /**
         * DFDC_MSG_GameLogRecord GameID.
         * @member {number} GameID
         * @memberof GameMsg_DFDC.DFDC_MSG_GameLogRecord
         * @instance
         */
        DFDC_MSG_GameLogRecord.prototype.GameID = 0;

        /**
         * DFDC_MSG_GameLogRecord PageCount.
         * @member {number} PageCount
         * @memberof GameMsg_DFDC.DFDC_MSG_GameLogRecord
         * @instance
         */
        DFDC_MSG_GameLogRecord.prototype.PageCount = 0;

        /**
         * DFDC_MSG_GameLogRecord Logs.
         * @member {Array.<GameMsg_DFDC.IDFDC_GameLog>} Logs
         * @memberof GameMsg_DFDC.DFDC_MSG_GameLogRecord
         * @instance
         */
        DFDC_MSG_GameLogRecord.prototype.Logs = $util.emptyArray;

        /**
         * Creates a new DFDC_MSG_GameLogRecord instance using the specified properties.
         * @function create
         * @memberof GameMsg_DFDC.DFDC_MSG_GameLogRecord
         * @static
         * @param {GameMsg_DFDC.IDFDC_MSG_GameLogRecord=} [properties] Properties to set
         * @returns {GameMsg_DFDC.DFDC_MSG_GameLogRecord} DFDC_MSG_GameLogRecord instance
         */
        DFDC_MSG_GameLogRecord.create = function create(properties) {
            return new DFDC_MSG_GameLogRecord(properties);
        };

        /**
         * Encodes the specified DFDC_MSG_GameLogRecord message. Does not implicitly {@link GameMsg_DFDC.DFDC_MSG_GameLogRecord.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_DFDC.DFDC_MSG_GameLogRecord
         * @static
         * @param {GameMsg_DFDC.IDFDC_MSG_GameLogRecord} message DFDC_MSG_GameLogRecord message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DFDC_MSG_GameLogRecord.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.UserID);
            if (message.GameID != null && message.hasOwnProperty("GameID"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.GameID);
            if (message.PageCount != null && message.hasOwnProperty("PageCount"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.PageCount);
            if (message.Logs != null && message.Logs.length)
                for (var i = 0; i < message.Logs.length; ++i)
                    $root.GameMsg_DFDC.DFDC_GameLog.encode(message.Logs[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified DFDC_MSG_GameLogRecord message, length delimited. Does not implicitly {@link GameMsg_DFDC.DFDC_MSG_GameLogRecord.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_DFDC.DFDC_MSG_GameLogRecord
         * @static
         * @param {GameMsg_DFDC.IDFDC_MSG_GameLogRecord} message DFDC_MSG_GameLogRecord message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DFDC_MSG_GameLogRecord.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DFDC_MSG_GameLogRecord message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_DFDC.DFDC_MSG_GameLogRecord
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_DFDC.DFDC_MSG_GameLogRecord} DFDC_MSG_GameLogRecord
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DFDC_MSG_GameLogRecord.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_DFDC.DFDC_MSG_GameLogRecord();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.UserID = reader.int32();
                    break;
                case 2:
                    message.GameID = reader.int32();
                    break;
                case 3:
                    message.PageCount = reader.int32();
                    break;
                case 4:
                    if (!(message.Logs && message.Logs.length))
                        message.Logs = [];
                    message.Logs.push($root.GameMsg_DFDC.DFDC_GameLog.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a DFDC_MSG_GameLogRecord message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_DFDC.DFDC_MSG_GameLogRecord
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_DFDC.DFDC_MSG_GameLogRecord} DFDC_MSG_GameLogRecord
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DFDC_MSG_GameLogRecord.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DFDC_MSG_GameLogRecord message.
         * @function verify
         * @memberof GameMsg_DFDC.DFDC_MSG_GameLogRecord
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DFDC_MSG_GameLogRecord.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                if (!$util.isInteger(message.UserID))
                    return "UserID: integer expected";
            if (message.GameID != null && message.hasOwnProperty("GameID"))
                if (!$util.isInteger(message.GameID))
                    return "GameID: integer expected";
            if (message.PageCount != null && message.hasOwnProperty("PageCount"))
                if (!$util.isInteger(message.PageCount))
                    return "PageCount: integer expected";
            if (message.Logs != null && message.hasOwnProperty("Logs")) {
                if (!Array.isArray(message.Logs))
                    return "Logs: array expected";
                for (var i = 0; i < message.Logs.length; ++i) {
                    var error = $root.GameMsg_DFDC.DFDC_GameLog.verify(message.Logs[i]);
                    if (error)
                        return "Logs." + error;
                }
            }
            return null;
        };

        /**
         * Creates a DFDC_MSG_GameLogRecord message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_DFDC.DFDC_MSG_GameLogRecord
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_DFDC.DFDC_MSG_GameLogRecord} DFDC_MSG_GameLogRecord
         */
        DFDC_MSG_GameLogRecord.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_DFDC.DFDC_MSG_GameLogRecord)
                return object;
            var message = new $root.GameMsg_DFDC.DFDC_MSG_GameLogRecord();
            if (object.UserID != null)
                message.UserID = object.UserID | 0;
            if (object.GameID != null)
                message.GameID = object.GameID | 0;
            if (object.PageCount != null)
                message.PageCount = object.PageCount | 0;
            if (object.Logs) {
                if (!Array.isArray(object.Logs))
                    throw TypeError(".GameMsg_DFDC.DFDC_MSG_GameLogRecord.Logs: array expected");
                message.Logs = [];
                for (var i = 0; i < object.Logs.length; ++i) {
                    if (typeof object.Logs[i] !== "object")
                        throw TypeError(".GameMsg_DFDC.DFDC_MSG_GameLogRecord.Logs: object expected");
                    message.Logs[i] = $root.GameMsg_DFDC.DFDC_GameLog.fromObject(object.Logs[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a DFDC_MSG_GameLogRecord message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_DFDC.DFDC_MSG_GameLogRecord
         * @static
         * @param {GameMsg_DFDC.DFDC_MSG_GameLogRecord} message DFDC_MSG_GameLogRecord
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DFDC_MSG_GameLogRecord.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.Logs = [];
            if (options.defaults) {
                object.UserID = 0;
                object.GameID = 0;
                object.PageCount = 0;
            }
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                object.UserID = message.UserID;
            if (message.GameID != null && message.hasOwnProperty("GameID"))
                object.GameID = message.GameID;
            if (message.PageCount != null && message.hasOwnProperty("PageCount"))
                object.PageCount = message.PageCount;
            if (message.Logs && message.Logs.length) {
                object.Logs = [];
                for (var j = 0; j < message.Logs.length; ++j)
                    object.Logs[j] = $root.GameMsg_DFDC.DFDC_GameLog.toObject(message.Logs[j], options);
            }
            return object;
        };

        /**
         * Converts this DFDC_MSG_GameLogRecord to JSON.
         * @function toJSON
         * @memberof GameMsg_DFDC.DFDC_MSG_GameLogRecord
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DFDC_MSG_GameLogRecord.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return DFDC_MSG_GameLogRecord;
    })();

    GameMsg_DFDC.DFDC_GameLog = (function() {

        /**
         * Properties of a DFDC_GameLog.
         * @memberof GameMsg_DFDC
         * @interface IDFDC_GameLog
         * @property {number|null} [RowNum] DFDC_GameLog RowNum
         * @property {string|null} [CreateTime] DFDC_GameLog CreateTime
         * @property {number|Long|null} [OrderID] DFDC_GameLog OrderID
         * @property {number|Long|null} [BetMoney] DFDC_GameLog BetMoney
         * @property {number|Long|null} [Profit] DFDC_GameLog Profit
         */

        /**
         * Constructs a new DFDC_GameLog.
         * @memberof GameMsg_DFDC
         * @classdesc Represents a DFDC_GameLog.
         * @implements IDFDC_GameLog
         * @constructor
         * @param {GameMsg_DFDC.IDFDC_GameLog=} [properties] Properties to set
         */
        function DFDC_GameLog(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DFDC_GameLog RowNum.
         * @member {number} RowNum
         * @memberof GameMsg_DFDC.DFDC_GameLog
         * @instance
         */
        DFDC_GameLog.prototype.RowNum = 0;

        /**
         * DFDC_GameLog CreateTime.
         * @member {string} CreateTime
         * @memberof GameMsg_DFDC.DFDC_GameLog
         * @instance
         */
        DFDC_GameLog.prototype.CreateTime = "";

        /**
         * DFDC_GameLog OrderID.
         * @member {number|Long} OrderID
         * @memberof GameMsg_DFDC.DFDC_GameLog
         * @instance
         */
        DFDC_GameLog.prototype.OrderID = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * DFDC_GameLog BetMoney.
         * @member {number|Long} BetMoney
         * @memberof GameMsg_DFDC.DFDC_GameLog
         * @instance
         */
        DFDC_GameLog.prototype.BetMoney = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * DFDC_GameLog Profit.
         * @member {number|Long} Profit
         * @memberof GameMsg_DFDC.DFDC_GameLog
         * @instance
         */
        DFDC_GameLog.prototype.Profit = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new DFDC_GameLog instance using the specified properties.
         * @function create
         * @memberof GameMsg_DFDC.DFDC_GameLog
         * @static
         * @param {GameMsg_DFDC.IDFDC_GameLog=} [properties] Properties to set
         * @returns {GameMsg_DFDC.DFDC_GameLog} DFDC_GameLog instance
         */
        DFDC_GameLog.create = function create(properties) {
            return new DFDC_GameLog(properties);
        };

        /**
         * Encodes the specified DFDC_GameLog message. Does not implicitly {@link GameMsg_DFDC.DFDC_GameLog.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_DFDC.DFDC_GameLog
         * @static
         * @param {GameMsg_DFDC.IDFDC_GameLog} message DFDC_GameLog message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DFDC_GameLog.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.RowNum != null && message.hasOwnProperty("RowNum"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.RowNum);
            if (message.CreateTime != null && message.hasOwnProperty("CreateTime"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.CreateTime);
            if (message.OrderID != null && message.hasOwnProperty("OrderID"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.OrderID);
            if (message.BetMoney != null && message.hasOwnProperty("BetMoney"))
                writer.uint32(/* id 4, wireType 0 =*/32).int64(message.BetMoney);
            if (message.Profit != null && message.hasOwnProperty("Profit"))
                writer.uint32(/* id 5, wireType 0 =*/40).int64(message.Profit);
            return writer;
        };

        /**
         * Encodes the specified DFDC_GameLog message, length delimited. Does not implicitly {@link GameMsg_DFDC.DFDC_GameLog.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_DFDC.DFDC_GameLog
         * @static
         * @param {GameMsg_DFDC.IDFDC_GameLog} message DFDC_GameLog message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DFDC_GameLog.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DFDC_GameLog message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_DFDC.DFDC_GameLog
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_DFDC.DFDC_GameLog} DFDC_GameLog
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DFDC_GameLog.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_DFDC.DFDC_GameLog();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.RowNum = reader.int32();
                    break;
                case 2:
                    message.CreateTime = reader.string();
                    break;
                case 3:
                    message.OrderID = reader.int64();
                    break;
                case 4:
                    message.BetMoney = reader.int64();
                    break;
                case 5:
                    message.Profit = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a DFDC_GameLog message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_DFDC.DFDC_GameLog
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_DFDC.DFDC_GameLog} DFDC_GameLog
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DFDC_GameLog.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DFDC_GameLog message.
         * @function verify
         * @memberof GameMsg_DFDC.DFDC_GameLog
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DFDC_GameLog.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.RowNum != null && message.hasOwnProperty("RowNum"))
                if (!$util.isInteger(message.RowNum))
                    return "RowNum: integer expected";
            if (message.CreateTime != null && message.hasOwnProperty("CreateTime"))
                if (!$util.isString(message.CreateTime))
                    return "CreateTime: string expected";
            if (message.OrderID != null && message.hasOwnProperty("OrderID"))
                if (!$util.isInteger(message.OrderID) && !(message.OrderID && $util.isInteger(message.OrderID.low) && $util.isInteger(message.OrderID.high)))
                    return "OrderID: integer|Long expected";
            if (message.BetMoney != null && message.hasOwnProperty("BetMoney"))
                if (!$util.isInteger(message.BetMoney) && !(message.BetMoney && $util.isInteger(message.BetMoney.low) && $util.isInteger(message.BetMoney.high)))
                    return "BetMoney: integer|Long expected";
            if (message.Profit != null && message.hasOwnProperty("Profit"))
                if (!$util.isInteger(message.Profit) && !(message.Profit && $util.isInteger(message.Profit.low) && $util.isInteger(message.Profit.high)))
                    return "Profit: integer|Long expected";
            return null;
        };

        /**
         * Creates a DFDC_GameLog message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_DFDC.DFDC_GameLog
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_DFDC.DFDC_GameLog} DFDC_GameLog
         */
        DFDC_GameLog.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_DFDC.DFDC_GameLog)
                return object;
            var message = new $root.GameMsg_DFDC.DFDC_GameLog();
            if (object.RowNum != null)
                message.RowNum = object.RowNum | 0;
            if (object.CreateTime != null)
                message.CreateTime = String(object.CreateTime);
            if (object.OrderID != null)
                if ($util.Long)
                    (message.OrderID = $util.Long.fromValue(object.OrderID)).unsigned = false;
                else if (typeof object.OrderID === "string")
                    message.OrderID = parseInt(object.OrderID, 10);
                else if (typeof object.OrderID === "number")
                    message.OrderID = object.OrderID;
                else if (typeof object.OrderID === "object")
                    message.OrderID = new $util.LongBits(object.OrderID.low >>> 0, object.OrderID.high >>> 0).toNumber();
            if (object.BetMoney != null)
                if ($util.Long)
                    (message.BetMoney = $util.Long.fromValue(object.BetMoney)).unsigned = false;
                else if (typeof object.BetMoney === "string")
                    message.BetMoney = parseInt(object.BetMoney, 10);
                else if (typeof object.BetMoney === "number")
                    message.BetMoney = object.BetMoney;
                else if (typeof object.BetMoney === "object")
                    message.BetMoney = new $util.LongBits(object.BetMoney.low >>> 0, object.BetMoney.high >>> 0).toNumber();
            if (object.Profit != null)
                if ($util.Long)
                    (message.Profit = $util.Long.fromValue(object.Profit)).unsigned = false;
                else if (typeof object.Profit === "string")
                    message.Profit = parseInt(object.Profit, 10);
                else if (typeof object.Profit === "number")
                    message.Profit = object.Profit;
                else if (typeof object.Profit === "object")
                    message.Profit = new $util.LongBits(object.Profit.low >>> 0, object.Profit.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a DFDC_GameLog message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_DFDC.DFDC_GameLog
         * @static
         * @param {GameMsg_DFDC.DFDC_GameLog} message DFDC_GameLog
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DFDC_GameLog.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.RowNum = 0;
                object.CreateTime = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.OrderID = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.OrderID = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.BetMoney = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.BetMoney = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.Profit = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.Profit = options.longs === String ? "0" : 0;
            }
            if (message.RowNum != null && message.hasOwnProperty("RowNum"))
                object.RowNum = message.RowNum;
            if (message.CreateTime != null && message.hasOwnProperty("CreateTime"))
                object.CreateTime = message.CreateTime;
            if (message.OrderID != null && message.hasOwnProperty("OrderID"))
                if (typeof message.OrderID === "number")
                    object.OrderID = options.longs === String ? String(message.OrderID) : message.OrderID;
                else
                    object.OrderID = options.longs === String ? $util.Long.prototype.toString.call(message.OrderID) : options.longs === Number ? new $util.LongBits(message.OrderID.low >>> 0, message.OrderID.high >>> 0).toNumber() : message.OrderID;
            if (message.BetMoney != null && message.hasOwnProperty("BetMoney"))
                if (typeof message.BetMoney === "number")
                    object.BetMoney = options.longs === String ? String(message.BetMoney) : message.BetMoney;
                else
                    object.BetMoney = options.longs === String ? $util.Long.prototype.toString.call(message.BetMoney) : options.longs === Number ? new $util.LongBits(message.BetMoney.low >>> 0, message.BetMoney.high >>> 0).toNumber() : message.BetMoney;
            if (message.Profit != null && message.hasOwnProperty("Profit"))
                if (typeof message.Profit === "number")
                    object.Profit = options.longs === String ? String(message.Profit) : message.Profit;
                else
                    object.Profit = options.longs === String ? $util.Long.prototype.toString.call(message.Profit) : options.longs === Number ? new $util.LongBits(message.Profit.low >>> 0, message.Profit.high >>> 0).toNumber() : message.Profit;
            return object;
        };

        /**
         * Converts this DFDC_GameLog to JSON.
         * @function toJSON
         * @memberof GameMsg_DFDC.DFDC_GameLog
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DFDC_GameLog.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return DFDC_GameLog;
    })();

    return GameMsg_DFDC;
})();

module.exports = $root;
