/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

//var $protobuf = require("protobufjs/minimal");
var $protobuf = protobuf;

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.GameMsg_TGW = (function() {

    /**
     * Namespace GameMsg_TGW.
     * @exports GameMsg_TGW
     * @namespace
     */
    var GameMsg_TGW = {};

    GameMsg_TGW.TGW_MSG_Setting = (function() {

        /**
         * Properties of a TGW_MSG_Setting.
         * @memberof GameMsg_TGW
         * @interface ITGW_MSG_Setting
         * @property {number|null} [PayLineMode] TGW_MSG_Setting PayLineMode
         * @property {number|null} [TotalPayLine] TGW_MSG_Setting TotalPayLine
         * @property {Array.<number>|null} [BetCount] TGW_MSG_Setting BetCount
         * @property {Array.<number>|null} [BigWinStep] TGW_MSG_Setting BigWinStep
         * @property {number|null} [RowCounts] TGW_MSG_Setting RowCounts
         * @property {Array.<GameMsg_TGW.ITGW_ReelSetting>|null} [ReelSetting] TGW_MSG_Setting ReelSetting
         * @property {Array.<GameMsg_TGW.ITGW_SymbolPayTable>|null} [SymbolPayTable] TGW_MSG_Setting SymbolPayTable
         * @property {Array.<GameMsg_TGW.ITGW_PayLine>|null} [PayLines] TGW_MSG_Setting PayLines
         * @property {number|Long|null} [MinCarryMoney] TGW_MSG_Setting MinCarryMoney
         * @property {string|null} [PayLineDesc] TGW_MSG_Setting PayLineDesc
         * @property {string|null} [PickGameDesc] TGW_MSG_Setting PickGameDesc
         * @property {Array.<GameMsg_TGW.ITGW_UnitPrefix>|null} [UnitPrefix] TGW_MSG_Setting UnitPrefix
         */

        /**
         * Constructs a new TGW_MSG_Setting.
         * @memberof GameMsg_TGW
         * @classdesc Represents a TGW_MSG_Setting.
         * @implements ITGW_MSG_Setting
         * @constructor
         * @param {GameMsg_TGW.ITGW_MSG_Setting=} [properties] Properties to set
         */
        function TGW_MSG_Setting(properties) {
            this.BetCount = [];
            this.BigWinStep = [];
            this.ReelSetting = [];
            this.SymbolPayTable = [];
            this.PayLines = [];
            this.UnitPrefix = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TGW_MSG_Setting PayLineMode.
         * @member {number} PayLineMode
         * @memberof GameMsg_TGW.TGW_MSG_Setting
         * @instance
         */
        TGW_MSG_Setting.prototype.PayLineMode = 0;

        /**
         * TGW_MSG_Setting TotalPayLine.
         * @member {number} TotalPayLine
         * @memberof GameMsg_TGW.TGW_MSG_Setting
         * @instance
         */
        TGW_MSG_Setting.prototype.TotalPayLine = 0;

        /**
         * TGW_MSG_Setting BetCount.
         * @member {Array.<number>} BetCount
         * @memberof GameMsg_TGW.TGW_MSG_Setting
         * @instance
         */
        TGW_MSG_Setting.prototype.BetCount = $util.emptyArray;

        /**
         * TGW_MSG_Setting BigWinStep.
         * @member {Array.<number>} BigWinStep
         * @memberof GameMsg_TGW.TGW_MSG_Setting
         * @instance
         */
        TGW_MSG_Setting.prototype.BigWinStep = $util.emptyArray;

        /**
         * TGW_MSG_Setting RowCounts.
         * @member {number} RowCounts
         * @memberof GameMsg_TGW.TGW_MSG_Setting
         * @instance
         */
        TGW_MSG_Setting.prototype.RowCounts = 0;

        /**
         * TGW_MSG_Setting ReelSetting.
         * @member {Array.<GameMsg_TGW.ITGW_ReelSetting>} ReelSetting
         * @memberof GameMsg_TGW.TGW_MSG_Setting
         * @instance
         */
        TGW_MSG_Setting.prototype.ReelSetting = $util.emptyArray;

        /**
         * TGW_MSG_Setting SymbolPayTable.
         * @member {Array.<GameMsg_TGW.ITGW_SymbolPayTable>} SymbolPayTable
         * @memberof GameMsg_TGW.TGW_MSG_Setting
         * @instance
         */
        TGW_MSG_Setting.prototype.SymbolPayTable = $util.emptyArray;

        /**
         * TGW_MSG_Setting PayLines.
         * @member {Array.<GameMsg_TGW.ITGW_PayLine>} PayLines
         * @memberof GameMsg_TGW.TGW_MSG_Setting
         * @instance
         */
        TGW_MSG_Setting.prototype.PayLines = $util.emptyArray;

        /**
         * TGW_MSG_Setting MinCarryMoney.
         * @member {number|Long} MinCarryMoney
         * @memberof GameMsg_TGW.TGW_MSG_Setting
         * @instance
         */
        TGW_MSG_Setting.prototype.MinCarryMoney = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * TGW_MSG_Setting PayLineDesc.
         * @member {string} PayLineDesc
         * @memberof GameMsg_TGW.TGW_MSG_Setting
         * @instance
         */
        TGW_MSG_Setting.prototype.PayLineDesc = "";

        /**
         * TGW_MSG_Setting PickGameDesc.
         * @member {string} PickGameDesc
         * @memberof GameMsg_TGW.TGW_MSG_Setting
         * @instance
         */
        TGW_MSG_Setting.prototype.PickGameDesc = "";

        /**
         * TGW_MSG_Setting UnitPrefix.
         * @member {Array.<GameMsg_TGW.ITGW_UnitPrefix>} UnitPrefix
         * @memberof GameMsg_TGW.TGW_MSG_Setting
         * @instance
         */
        TGW_MSG_Setting.prototype.UnitPrefix = $util.emptyArray;

        /**
         * Creates a new TGW_MSG_Setting instance using the specified properties.
         * @function create
         * @memberof GameMsg_TGW.TGW_MSG_Setting
         * @static
         * @param {GameMsg_TGW.ITGW_MSG_Setting=} [properties] Properties to set
         * @returns {GameMsg_TGW.TGW_MSG_Setting} TGW_MSG_Setting instance
         */
        TGW_MSG_Setting.create = function create(properties) {
            return new TGW_MSG_Setting(properties);
        };

        /**
         * Encodes the specified TGW_MSG_Setting message. Does not implicitly {@link GameMsg_TGW.TGW_MSG_Setting.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_TGW.TGW_MSG_Setting
         * @static
         * @param {GameMsg_TGW.ITGW_MSG_Setting} message TGW_MSG_Setting message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TGW_MSG_Setting.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.PayLineMode != null && message.hasOwnProperty("PayLineMode"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.PayLineMode);
            if (message.TotalPayLine != null && message.hasOwnProperty("TotalPayLine"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.TotalPayLine);
            if (message.BetCount != null && message.BetCount.length) {
                writer.uint32(/* id 3, wireType 2 =*/26).fork();
                for (var i = 0; i < message.BetCount.length; ++i)
                    writer.int32(message.BetCount[i]);
                writer.ldelim();
            }
            if (message.BigWinStep != null && message.BigWinStep.length) {
                writer.uint32(/* id 4, wireType 2 =*/34).fork();
                for (var i = 0; i < message.BigWinStep.length; ++i)
                    writer.int32(message.BigWinStep[i]);
                writer.ldelim();
            }
            if (message.RowCounts != null && message.hasOwnProperty("RowCounts"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.RowCounts);
            if (message.ReelSetting != null && message.ReelSetting.length)
                for (var i = 0; i < message.ReelSetting.length; ++i)
                    $root.GameMsg_TGW.TGW_ReelSetting.encode(message.ReelSetting[i], writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            if (message.SymbolPayTable != null && message.SymbolPayTable.length)
                for (var i = 0; i < message.SymbolPayTable.length; ++i)
                    $root.GameMsg_TGW.TGW_SymbolPayTable.encode(message.SymbolPayTable[i], writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
            if (message.PayLines != null && message.PayLines.length)
                for (var i = 0; i < message.PayLines.length; ++i)
                    $root.GameMsg_TGW.TGW_PayLine.encode(message.PayLines[i], writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
            if (message.MinCarryMoney != null && message.hasOwnProperty("MinCarryMoney"))
                writer.uint32(/* id 9, wireType 0 =*/72).int64(message.MinCarryMoney);
            if (message.PayLineDesc != null && message.hasOwnProperty("PayLineDesc"))
                writer.uint32(/* id 10, wireType 2 =*/82).string(message.PayLineDesc);
            if (message.PickGameDesc != null && message.hasOwnProperty("PickGameDesc"))
                writer.uint32(/* id 11, wireType 2 =*/90).string(message.PickGameDesc);
            if (message.UnitPrefix != null && message.UnitPrefix.length)
                for (var i = 0; i < message.UnitPrefix.length; ++i)
                    $root.GameMsg_TGW.TGW_UnitPrefix.encode(message.UnitPrefix[i], writer.uint32(/* id 12, wireType 2 =*/98).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified TGW_MSG_Setting message, length delimited. Does not implicitly {@link GameMsg_TGW.TGW_MSG_Setting.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_TGW.TGW_MSG_Setting
         * @static
         * @param {GameMsg_TGW.ITGW_MSG_Setting} message TGW_MSG_Setting message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TGW_MSG_Setting.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TGW_MSG_Setting message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_TGW.TGW_MSG_Setting
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_TGW.TGW_MSG_Setting} TGW_MSG_Setting
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TGW_MSG_Setting.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_TGW.TGW_MSG_Setting();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.PayLineMode = reader.int32();
                    break;
                case 2:
                    message.TotalPayLine = reader.int32();
                    break;
                case 3:
                    if (!(message.BetCount && message.BetCount.length))
                        message.BetCount = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.BetCount.push(reader.int32());
                    } else
                        message.BetCount.push(reader.int32());
                    break;
                case 4:
                    if (!(message.BigWinStep && message.BigWinStep.length))
                        message.BigWinStep = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.BigWinStep.push(reader.int32());
                    } else
                        message.BigWinStep.push(reader.int32());
                    break;
                case 5:
                    message.RowCounts = reader.int32();
                    break;
                case 6:
                    if (!(message.ReelSetting && message.ReelSetting.length))
                        message.ReelSetting = [];
                    message.ReelSetting.push($root.GameMsg_TGW.TGW_ReelSetting.decode(reader, reader.uint32()));
                    break;
                case 7:
                    if (!(message.SymbolPayTable && message.SymbolPayTable.length))
                        message.SymbolPayTable = [];
                    message.SymbolPayTable.push($root.GameMsg_TGW.TGW_SymbolPayTable.decode(reader, reader.uint32()));
                    break;
                case 8:
                    if (!(message.PayLines && message.PayLines.length))
                        message.PayLines = [];
                    message.PayLines.push($root.GameMsg_TGW.TGW_PayLine.decode(reader, reader.uint32()));
                    break;
                case 9:
                    message.MinCarryMoney = reader.int64();
                    break;
                case 10:
                    message.PayLineDesc = reader.string();
                    break;
                case 11:
                    message.PickGameDesc = reader.string();
                    break;
                case 12:
                    if (!(message.UnitPrefix && message.UnitPrefix.length))
                        message.UnitPrefix = [];
                    message.UnitPrefix.push($root.GameMsg_TGW.TGW_UnitPrefix.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a TGW_MSG_Setting message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_TGW.TGW_MSG_Setting
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_TGW.TGW_MSG_Setting} TGW_MSG_Setting
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TGW_MSG_Setting.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TGW_MSG_Setting message.
         * @function verify
         * @memberof GameMsg_TGW.TGW_MSG_Setting
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TGW_MSG_Setting.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.PayLineMode != null && message.hasOwnProperty("PayLineMode"))
                if (!$util.isInteger(message.PayLineMode))
                    return "PayLineMode: integer expected";
            if (message.TotalPayLine != null && message.hasOwnProperty("TotalPayLine"))
                if (!$util.isInteger(message.TotalPayLine))
                    return "TotalPayLine: integer expected";
            if (message.BetCount != null && message.hasOwnProperty("BetCount")) {
                if (!Array.isArray(message.BetCount))
                    return "BetCount: array expected";
                for (var i = 0; i < message.BetCount.length; ++i)
                    if (!$util.isInteger(message.BetCount[i]))
                        return "BetCount: integer[] expected";
            }
            if (message.BigWinStep != null && message.hasOwnProperty("BigWinStep")) {
                if (!Array.isArray(message.BigWinStep))
                    return "BigWinStep: array expected";
                for (var i = 0; i < message.BigWinStep.length; ++i)
                    if (!$util.isInteger(message.BigWinStep[i]))
                        return "BigWinStep: integer[] expected";
            }
            if (message.RowCounts != null && message.hasOwnProperty("RowCounts"))
                if (!$util.isInteger(message.RowCounts))
                    return "RowCounts: integer expected";
            if (message.ReelSetting != null && message.hasOwnProperty("ReelSetting")) {
                if (!Array.isArray(message.ReelSetting))
                    return "ReelSetting: array expected";
                for (var i = 0; i < message.ReelSetting.length; ++i) {
                    var error = $root.GameMsg_TGW.TGW_ReelSetting.verify(message.ReelSetting[i]);
                    if (error)
                        return "ReelSetting." + error;
                }
            }
            if (message.SymbolPayTable != null && message.hasOwnProperty("SymbolPayTable")) {
                if (!Array.isArray(message.SymbolPayTable))
                    return "SymbolPayTable: array expected";
                for (var i = 0; i < message.SymbolPayTable.length; ++i) {
                    var error = $root.GameMsg_TGW.TGW_SymbolPayTable.verify(message.SymbolPayTable[i]);
                    if (error)
                        return "SymbolPayTable." + error;
                }
            }
            if (message.PayLines != null && message.hasOwnProperty("PayLines")) {
                if (!Array.isArray(message.PayLines))
                    return "PayLines: array expected";
                for (var i = 0; i < message.PayLines.length; ++i) {
                    var error = $root.GameMsg_TGW.TGW_PayLine.verify(message.PayLines[i]);
                    if (error)
                        return "PayLines." + error;
                }
            }
            if (message.MinCarryMoney != null && message.hasOwnProperty("MinCarryMoney"))
                if (!$util.isInteger(message.MinCarryMoney) && !(message.MinCarryMoney && $util.isInteger(message.MinCarryMoney.low) && $util.isInteger(message.MinCarryMoney.high)))
                    return "MinCarryMoney: integer|Long expected";
            if (message.PayLineDesc != null && message.hasOwnProperty("PayLineDesc"))
                if (!$util.isString(message.PayLineDesc))
                    return "PayLineDesc: string expected";
            if (message.PickGameDesc != null && message.hasOwnProperty("PickGameDesc"))
                if (!$util.isString(message.PickGameDesc))
                    return "PickGameDesc: string expected";
            if (message.UnitPrefix != null && message.hasOwnProperty("UnitPrefix")) {
                if (!Array.isArray(message.UnitPrefix))
                    return "UnitPrefix: array expected";
                for (var i = 0; i < message.UnitPrefix.length; ++i) {
                    var error = $root.GameMsg_TGW.TGW_UnitPrefix.verify(message.UnitPrefix[i]);
                    if (error)
                        return "UnitPrefix." + error;
                }
            }
            return null;
        };

        /**
         * Creates a TGW_MSG_Setting message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_TGW.TGW_MSG_Setting
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_TGW.TGW_MSG_Setting} TGW_MSG_Setting
         */
        TGW_MSG_Setting.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_TGW.TGW_MSG_Setting)
                return object;
            var message = new $root.GameMsg_TGW.TGW_MSG_Setting();
            if (object.PayLineMode != null)
                message.PayLineMode = object.PayLineMode | 0;
            if (object.TotalPayLine != null)
                message.TotalPayLine = object.TotalPayLine | 0;
            if (object.BetCount) {
                if (!Array.isArray(object.BetCount))
                    throw TypeError(".GameMsg_TGW.TGW_MSG_Setting.BetCount: array expected");
                message.BetCount = [];
                for (var i = 0; i < object.BetCount.length; ++i)
                    message.BetCount[i] = object.BetCount[i] | 0;
            }
            if (object.BigWinStep) {
                if (!Array.isArray(object.BigWinStep))
                    throw TypeError(".GameMsg_TGW.TGW_MSG_Setting.BigWinStep: array expected");
                message.BigWinStep = [];
                for (var i = 0; i < object.BigWinStep.length; ++i)
                    message.BigWinStep[i] = object.BigWinStep[i] | 0;
            }
            if (object.RowCounts != null)
                message.RowCounts = object.RowCounts | 0;
            if (object.ReelSetting) {
                if (!Array.isArray(object.ReelSetting))
                    throw TypeError(".GameMsg_TGW.TGW_MSG_Setting.ReelSetting: array expected");
                message.ReelSetting = [];
                for (var i = 0; i < object.ReelSetting.length; ++i) {
                    if (typeof object.ReelSetting[i] !== "object")
                        throw TypeError(".GameMsg_TGW.TGW_MSG_Setting.ReelSetting: object expected");
                    message.ReelSetting[i] = $root.GameMsg_TGW.TGW_ReelSetting.fromObject(object.ReelSetting[i]);
                }
            }
            if (object.SymbolPayTable) {
                if (!Array.isArray(object.SymbolPayTable))
                    throw TypeError(".GameMsg_TGW.TGW_MSG_Setting.SymbolPayTable: array expected");
                message.SymbolPayTable = [];
                for (var i = 0; i < object.SymbolPayTable.length; ++i) {
                    if (typeof object.SymbolPayTable[i] !== "object")
                        throw TypeError(".GameMsg_TGW.TGW_MSG_Setting.SymbolPayTable: object expected");
                    message.SymbolPayTable[i] = $root.GameMsg_TGW.TGW_SymbolPayTable.fromObject(object.SymbolPayTable[i]);
                }
            }
            if (object.PayLines) {
                if (!Array.isArray(object.PayLines))
                    throw TypeError(".GameMsg_TGW.TGW_MSG_Setting.PayLines: array expected");
                message.PayLines = [];
                for (var i = 0; i < object.PayLines.length; ++i) {
                    if (typeof object.PayLines[i] !== "object")
                        throw TypeError(".GameMsg_TGW.TGW_MSG_Setting.PayLines: object expected");
                    message.PayLines[i] = $root.GameMsg_TGW.TGW_PayLine.fromObject(object.PayLines[i]);
                }
            }
            if (object.MinCarryMoney != null)
                if ($util.Long)
                    (message.MinCarryMoney = $util.Long.fromValue(object.MinCarryMoney)).unsigned = false;
                else if (typeof object.MinCarryMoney === "string")
                    message.MinCarryMoney = parseInt(object.MinCarryMoney, 10);
                else if (typeof object.MinCarryMoney === "number")
                    message.MinCarryMoney = object.MinCarryMoney;
                else if (typeof object.MinCarryMoney === "object")
                    message.MinCarryMoney = new $util.LongBits(object.MinCarryMoney.low >>> 0, object.MinCarryMoney.high >>> 0).toNumber();
            if (object.PayLineDesc != null)
                message.PayLineDesc = String(object.PayLineDesc);
            if (object.PickGameDesc != null)
                message.PickGameDesc = String(object.PickGameDesc);
            if (object.UnitPrefix) {
                if (!Array.isArray(object.UnitPrefix))
                    throw TypeError(".GameMsg_TGW.TGW_MSG_Setting.UnitPrefix: array expected");
                message.UnitPrefix = [];
                for (var i = 0; i < object.UnitPrefix.length; ++i) {
                    if (typeof object.UnitPrefix[i] !== "object")
                        throw TypeError(".GameMsg_TGW.TGW_MSG_Setting.UnitPrefix: object expected");
                    message.UnitPrefix[i] = $root.GameMsg_TGW.TGW_UnitPrefix.fromObject(object.UnitPrefix[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a TGW_MSG_Setting message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_TGW.TGW_MSG_Setting
         * @static
         * @param {GameMsg_TGW.TGW_MSG_Setting} message TGW_MSG_Setting
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TGW_MSG_Setting.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.BetCount = [];
                object.BigWinStep = [];
                object.ReelSetting = [];
                object.SymbolPayTable = [];
                object.PayLines = [];
                object.UnitPrefix = [];
            }
            if (options.defaults) {
                object.PayLineMode = 0;
                object.TotalPayLine = 0;
                object.RowCounts = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.MinCarryMoney = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.MinCarryMoney = options.longs === String ? "0" : 0;
                object.PayLineDesc = "";
                object.PickGameDesc = "";
            }
            if (message.PayLineMode != null && message.hasOwnProperty("PayLineMode"))
                object.PayLineMode = message.PayLineMode;
            if (message.TotalPayLine != null && message.hasOwnProperty("TotalPayLine"))
                object.TotalPayLine = message.TotalPayLine;
            if (message.BetCount && message.BetCount.length) {
                object.BetCount = [];
                for (var j = 0; j < message.BetCount.length; ++j)
                    object.BetCount[j] = message.BetCount[j];
            }
            if (message.BigWinStep && message.BigWinStep.length) {
                object.BigWinStep = [];
                for (var j = 0; j < message.BigWinStep.length; ++j)
                    object.BigWinStep[j] = message.BigWinStep[j];
            }
            if (message.RowCounts != null && message.hasOwnProperty("RowCounts"))
                object.RowCounts = message.RowCounts;
            if (message.ReelSetting && message.ReelSetting.length) {
                object.ReelSetting = [];
                for (var j = 0; j < message.ReelSetting.length; ++j)
                    object.ReelSetting[j] = $root.GameMsg_TGW.TGW_ReelSetting.toObject(message.ReelSetting[j], options);
            }
            if (message.SymbolPayTable && message.SymbolPayTable.length) {
                object.SymbolPayTable = [];
                for (var j = 0; j < message.SymbolPayTable.length; ++j)
                    object.SymbolPayTable[j] = $root.GameMsg_TGW.TGW_SymbolPayTable.toObject(message.SymbolPayTable[j], options);
            }
            if (message.PayLines && message.PayLines.length) {
                object.PayLines = [];
                for (var j = 0; j < message.PayLines.length; ++j)
                    object.PayLines[j] = $root.GameMsg_TGW.TGW_PayLine.toObject(message.PayLines[j], options);
            }
            if (message.MinCarryMoney != null && message.hasOwnProperty("MinCarryMoney"))
                if (typeof message.MinCarryMoney === "number")
                    object.MinCarryMoney = options.longs === String ? String(message.MinCarryMoney) : message.MinCarryMoney;
                else
                    object.MinCarryMoney = options.longs === String ? $util.Long.prototype.toString.call(message.MinCarryMoney) : options.longs === Number ? new $util.LongBits(message.MinCarryMoney.low >>> 0, message.MinCarryMoney.high >>> 0).toNumber() : message.MinCarryMoney;
            if (message.PayLineDesc != null && message.hasOwnProperty("PayLineDesc"))
                object.PayLineDesc = message.PayLineDesc;
            if (message.PickGameDesc != null && message.hasOwnProperty("PickGameDesc"))
                object.PickGameDesc = message.PickGameDesc;
            if (message.UnitPrefix && message.UnitPrefix.length) {
                object.UnitPrefix = [];
                for (var j = 0; j < message.UnitPrefix.length; ++j)
                    object.UnitPrefix[j] = $root.GameMsg_TGW.TGW_UnitPrefix.toObject(message.UnitPrefix[j], options);
            }
            return object;
        };

        /**
         * Converts this TGW_MSG_Setting to JSON.
         * @function toJSON
         * @memberof GameMsg_TGW.TGW_MSG_Setting
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TGW_MSG_Setting.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return TGW_MSG_Setting;
    })();

    GameMsg_TGW.TGW_MSG_Status = (function() {

        /**
         * Properties of a TGW_MSG_Status.
         * @memberof GameMsg_TGW
         * @interface ITGW_MSG_Status
         * @property {number|null} [State] TGW_MSG_Status State
         */

        /**
         * Constructs a new TGW_MSG_Status.
         * @memberof GameMsg_TGW
         * @classdesc Represents a TGW_MSG_Status.
         * @implements ITGW_MSG_Status
         * @constructor
         * @param {GameMsg_TGW.ITGW_MSG_Status=} [properties] Properties to set
         */
        function TGW_MSG_Status(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TGW_MSG_Status State.
         * @member {number} State
         * @memberof GameMsg_TGW.TGW_MSG_Status
         * @instance
         */
        TGW_MSG_Status.prototype.State = 0;

        /**
         * Creates a new TGW_MSG_Status instance using the specified properties.
         * @function create
         * @memberof GameMsg_TGW.TGW_MSG_Status
         * @static
         * @param {GameMsg_TGW.ITGW_MSG_Status=} [properties] Properties to set
         * @returns {GameMsg_TGW.TGW_MSG_Status} TGW_MSG_Status instance
         */
        TGW_MSG_Status.create = function create(properties) {
            return new TGW_MSG_Status(properties);
        };

        /**
         * Encodes the specified TGW_MSG_Status message. Does not implicitly {@link GameMsg_TGW.TGW_MSG_Status.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_TGW.TGW_MSG_Status
         * @static
         * @param {GameMsg_TGW.ITGW_MSG_Status} message TGW_MSG_Status message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TGW_MSG_Status.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.State != null && message.hasOwnProperty("State"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.State);
            return writer;
        };

        /**
         * Encodes the specified TGW_MSG_Status message, length delimited. Does not implicitly {@link GameMsg_TGW.TGW_MSG_Status.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_TGW.TGW_MSG_Status
         * @static
         * @param {GameMsg_TGW.ITGW_MSG_Status} message TGW_MSG_Status message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TGW_MSG_Status.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TGW_MSG_Status message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_TGW.TGW_MSG_Status
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_TGW.TGW_MSG_Status} TGW_MSG_Status
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TGW_MSG_Status.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_TGW.TGW_MSG_Status();
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
            return message;
        };

        /**
         * Decodes a TGW_MSG_Status message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_TGW.TGW_MSG_Status
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_TGW.TGW_MSG_Status} TGW_MSG_Status
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TGW_MSG_Status.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TGW_MSG_Status message.
         * @function verify
         * @memberof GameMsg_TGW.TGW_MSG_Status
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TGW_MSG_Status.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.State != null && message.hasOwnProperty("State"))
                if (!$util.isInteger(message.State))
                    return "State: integer expected";
            return null;
        };

        /**
         * Creates a TGW_MSG_Status message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_TGW.TGW_MSG_Status
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_TGW.TGW_MSG_Status} TGW_MSG_Status
         */
        TGW_MSG_Status.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_TGW.TGW_MSG_Status)
                return object;
            var message = new $root.GameMsg_TGW.TGW_MSG_Status();
            if (object.State != null)
                message.State = object.State | 0;
            return message;
        };

        /**
         * Creates a plain object from a TGW_MSG_Status message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_TGW.TGW_MSG_Status
         * @static
         * @param {GameMsg_TGW.TGW_MSG_Status} message TGW_MSG_Status
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TGW_MSG_Status.toObject = function toObject(message, options) {
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
         * Converts this TGW_MSG_Status to JSON.
         * @function toJSON
         * @memberof GameMsg_TGW.TGW_MSG_Status
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TGW_MSG_Status.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return TGW_MSG_Status;
    })();

    GameMsg_TGW.TGW_MSG_JackpotPool = (function() {

        /**
         * Properties of a TGW_MSG_JackpotPool.
         * @memberof GameMsg_TGW
         * @interface ITGW_MSG_JackpotPool
         * @property {Array.<number|Long>|null} [Money] TGW_MSG_JackpotPool Money
         */

        /**
         * Constructs a new TGW_MSG_JackpotPool.
         * @memberof GameMsg_TGW
         * @classdesc Represents a TGW_MSG_JackpotPool.
         * @implements ITGW_MSG_JackpotPool
         * @constructor
         * @param {GameMsg_TGW.ITGW_MSG_JackpotPool=} [properties] Properties to set
         */
        function TGW_MSG_JackpotPool(properties) {
            this.Money = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TGW_MSG_JackpotPool Money.
         * @member {Array.<number|Long>} Money
         * @memberof GameMsg_TGW.TGW_MSG_JackpotPool
         * @instance
         */
        TGW_MSG_JackpotPool.prototype.Money = $util.emptyArray;

        /**
         * Creates a new TGW_MSG_JackpotPool instance using the specified properties.
         * @function create
         * @memberof GameMsg_TGW.TGW_MSG_JackpotPool
         * @static
         * @param {GameMsg_TGW.ITGW_MSG_JackpotPool=} [properties] Properties to set
         * @returns {GameMsg_TGW.TGW_MSG_JackpotPool} TGW_MSG_JackpotPool instance
         */
        TGW_MSG_JackpotPool.create = function create(properties) {
            return new TGW_MSG_JackpotPool(properties);
        };

        /**
         * Encodes the specified TGW_MSG_JackpotPool message. Does not implicitly {@link GameMsg_TGW.TGW_MSG_JackpotPool.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_TGW.TGW_MSG_JackpotPool
         * @static
         * @param {GameMsg_TGW.ITGW_MSG_JackpotPool} message TGW_MSG_JackpotPool message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TGW_MSG_JackpotPool.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Money != null && message.Money.length) {
                writer.uint32(/* id 1, wireType 2 =*/10).fork();
                for (var i = 0; i < message.Money.length; ++i)
                    writer.int64(message.Money[i]);
                writer.ldelim();
            }
            return writer;
        };

        /**
         * Encodes the specified TGW_MSG_JackpotPool message, length delimited. Does not implicitly {@link GameMsg_TGW.TGW_MSG_JackpotPool.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_TGW.TGW_MSG_JackpotPool
         * @static
         * @param {GameMsg_TGW.ITGW_MSG_JackpotPool} message TGW_MSG_JackpotPool message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TGW_MSG_JackpotPool.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TGW_MSG_JackpotPool message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_TGW.TGW_MSG_JackpotPool
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_TGW.TGW_MSG_JackpotPool} TGW_MSG_JackpotPool
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TGW_MSG_JackpotPool.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_TGW.TGW_MSG_JackpotPool();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.Money && message.Money.length))
                        message.Money = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.Money.push(reader.int64());
                    } else
                        message.Money.push(reader.int64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a TGW_MSG_JackpotPool message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_TGW.TGW_MSG_JackpotPool
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_TGW.TGW_MSG_JackpotPool} TGW_MSG_JackpotPool
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TGW_MSG_JackpotPool.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TGW_MSG_JackpotPool message.
         * @function verify
         * @memberof GameMsg_TGW.TGW_MSG_JackpotPool
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TGW_MSG_JackpotPool.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Money != null && message.hasOwnProperty("Money")) {
                if (!Array.isArray(message.Money))
                    return "Money: array expected";
                for (var i = 0; i < message.Money.length; ++i)
                    if (!$util.isInteger(message.Money[i]) && !(message.Money[i] && $util.isInteger(message.Money[i].low) && $util.isInteger(message.Money[i].high)))
                        return "Money: integer|Long[] expected";
            }
            return null;
        };

        /**
         * Creates a TGW_MSG_JackpotPool message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_TGW.TGW_MSG_JackpotPool
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_TGW.TGW_MSG_JackpotPool} TGW_MSG_JackpotPool
         */
        TGW_MSG_JackpotPool.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_TGW.TGW_MSG_JackpotPool)
                return object;
            var message = new $root.GameMsg_TGW.TGW_MSG_JackpotPool();
            if (object.Money) {
                if (!Array.isArray(object.Money))
                    throw TypeError(".GameMsg_TGW.TGW_MSG_JackpotPool.Money: array expected");
                message.Money = [];
                for (var i = 0; i < object.Money.length; ++i)
                    if ($util.Long)
                        (message.Money[i] = $util.Long.fromValue(object.Money[i])).unsigned = false;
                    else if (typeof object.Money[i] === "string")
                        message.Money[i] = parseInt(object.Money[i], 10);
                    else if (typeof object.Money[i] === "number")
                        message.Money[i] = object.Money[i];
                    else if (typeof object.Money[i] === "object")
                        message.Money[i] = new $util.LongBits(object.Money[i].low >>> 0, object.Money[i].high >>> 0).toNumber();
            }
            return message;
        };

        /**
         * Creates a plain object from a TGW_MSG_JackpotPool message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_TGW.TGW_MSG_JackpotPool
         * @static
         * @param {GameMsg_TGW.TGW_MSG_JackpotPool} message TGW_MSG_JackpotPool
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TGW_MSG_JackpotPool.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.Money = [];
            if (message.Money && message.Money.length) {
                object.Money = [];
                for (var j = 0; j < message.Money.length; ++j)
                    if (typeof message.Money[j] === "number")
                        object.Money[j] = options.longs === String ? String(message.Money[j]) : message.Money[j];
                    else
                        object.Money[j] = options.longs === String ? $util.Long.prototype.toString.call(message.Money[j]) : options.longs === Number ? new $util.LongBits(message.Money[j].low >>> 0, message.Money[j].high >>> 0).toNumber() : message.Money[j];
            }
            return object;
        };

        /**
         * Converts this TGW_MSG_JackpotPool to JSON.
         * @function toJSON
         * @memberof GameMsg_TGW.TGW_MSG_JackpotPool
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TGW_MSG_JackpotPool.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return TGW_MSG_JackpotPool;
    })();

    GameMsg_TGW.TGW_MSG_BetStatus = (function() {

        /**
         * Properties of a TGW_MSG_BetStatus.
         * @memberof GameMsg_TGW
         * @interface ITGW_MSG_BetStatus
         * @property {number|null} [Ret] TGW_MSG_BetStatus Ret
         * @property {number|Long|null} [Money] TGW_MSG_BetStatus Money
         */

        /**
         * Constructs a new TGW_MSG_BetStatus.
         * @memberof GameMsg_TGW
         * @classdesc Represents a TGW_MSG_BetStatus.
         * @implements ITGW_MSG_BetStatus
         * @constructor
         * @param {GameMsg_TGW.ITGW_MSG_BetStatus=} [properties] Properties to set
         */
        function TGW_MSG_BetStatus(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TGW_MSG_BetStatus Ret.
         * @member {number} Ret
         * @memberof GameMsg_TGW.TGW_MSG_BetStatus
         * @instance
         */
        TGW_MSG_BetStatus.prototype.Ret = 0;

        /**
         * TGW_MSG_BetStatus Money.
         * @member {number|Long} Money
         * @memberof GameMsg_TGW.TGW_MSG_BetStatus
         * @instance
         */
        TGW_MSG_BetStatus.prototype.Money = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new TGW_MSG_BetStatus instance using the specified properties.
         * @function create
         * @memberof GameMsg_TGW.TGW_MSG_BetStatus
         * @static
         * @param {GameMsg_TGW.ITGW_MSG_BetStatus=} [properties] Properties to set
         * @returns {GameMsg_TGW.TGW_MSG_BetStatus} TGW_MSG_BetStatus instance
         */
        TGW_MSG_BetStatus.create = function create(properties) {
            return new TGW_MSG_BetStatus(properties);
        };

        /**
         * Encodes the specified TGW_MSG_BetStatus message. Does not implicitly {@link GameMsg_TGW.TGW_MSG_BetStatus.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_TGW.TGW_MSG_BetStatus
         * @static
         * @param {GameMsg_TGW.ITGW_MSG_BetStatus} message TGW_MSG_BetStatus message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TGW_MSG_BetStatus.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Ret != null && message.hasOwnProperty("Ret"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.Ret);
            if (message.Money != null && message.hasOwnProperty("Money"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.Money);
            return writer;
        };

        /**
         * Encodes the specified TGW_MSG_BetStatus message, length delimited. Does not implicitly {@link GameMsg_TGW.TGW_MSG_BetStatus.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_TGW.TGW_MSG_BetStatus
         * @static
         * @param {GameMsg_TGW.ITGW_MSG_BetStatus} message TGW_MSG_BetStatus message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TGW_MSG_BetStatus.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TGW_MSG_BetStatus message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_TGW.TGW_MSG_BetStatus
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_TGW.TGW_MSG_BetStatus} TGW_MSG_BetStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TGW_MSG_BetStatus.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_TGW.TGW_MSG_BetStatus();
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
            return message;
        };

        /**
         * Decodes a TGW_MSG_BetStatus message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_TGW.TGW_MSG_BetStatus
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_TGW.TGW_MSG_BetStatus} TGW_MSG_BetStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TGW_MSG_BetStatus.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TGW_MSG_BetStatus message.
         * @function verify
         * @memberof GameMsg_TGW.TGW_MSG_BetStatus
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TGW_MSG_BetStatus.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Ret != null && message.hasOwnProperty("Ret"))
                if (!$util.isInteger(message.Ret))
                    return "Ret: integer expected";
            if (message.Money != null && message.hasOwnProperty("Money"))
                if (!$util.isInteger(message.Money) && !(message.Money && $util.isInteger(message.Money.low) && $util.isInteger(message.Money.high)))
                    return "Money: integer|Long expected";
            return null;
        };

        /**
         * Creates a TGW_MSG_BetStatus message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_TGW.TGW_MSG_BetStatus
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_TGW.TGW_MSG_BetStatus} TGW_MSG_BetStatus
         */
        TGW_MSG_BetStatus.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_TGW.TGW_MSG_BetStatus)
                return object;
            var message = new $root.GameMsg_TGW.TGW_MSG_BetStatus();
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
         * Creates a plain object from a TGW_MSG_BetStatus message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_TGW.TGW_MSG_BetStatus
         * @static
         * @param {GameMsg_TGW.TGW_MSG_BetStatus} message TGW_MSG_BetStatus
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TGW_MSG_BetStatus.toObject = function toObject(message, options) {
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
         * Converts this TGW_MSG_BetStatus to JSON.
         * @function toJSON
         * @memberof GameMsg_TGW.TGW_MSG_BetStatus
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TGW_MSG_BetStatus.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return TGW_MSG_BetStatus;
    })();

    GameMsg_TGW.TGW_MSG_GameResult = (function() {

        /**
         * Properties of a TGW_MSG_GameResult.
         * @memberof GameMsg_TGW
         * @interface ITGW_MSG_GameResult
         * @property {number|Long|null} [BetMoney] TGW_MSG_GameResult BetMoney
         * @property {number|Long|null} [WinMoney] TGW_MSG_GameResult WinMoney
         * @property {number|Long|null} [FinalMoney] TGW_MSG_GameResult FinalMoney
         * @property {number|Long|null} [JackpotMoney] TGW_MSG_GameResult JackpotMoney
         * @property {Array.<GameMsg_TGW.ITGW_ReelResult>|null} [ReelResult] TGW_MSG_GameResult ReelResult
         * @property {Array.<GameMsg_TGW.ITGW_PayGroup>|null} [PayGroups] TGW_MSG_GameResult PayGroups
         */

        /**
         * Constructs a new TGW_MSG_GameResult.
         * @memberof GameMsg_TGW
         * @classdesc Represents a TGW_MSG_GameResult.
         * @implements ITGW_MSG_GameResult
         * @constructor
         * @param {GameMsg_TGW.ITGW_MSG_GameResult=} [properties] Properties to set
         */
        function TGW_MSG_GameResult(properties) {
            this.ReelResult = [];
            this.PayGroups = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TGW_MSG_GameResult BetMoney.
         * @member {number|Long} BetMoney
         * @memberof GameMsg_TGW.TGW_MSG_GameResult
         * @instance
         */
        TGW_MSG_GameResult.prototype.BetMoney = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * TGW_MSG_GameResult WinMoney.
         * @member {number|Long} WinMoney
         * @memberof GameMsg_TGW.TGW_MSG_GameResult
         * @instance
         */
        TGW_MSG_GameResult.prototype.WinMoney = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * TGW_MSG_GameResult FinalMoney.
         * @member {number|Long} FinalMoney
         * @memberof GameMsg_TGW.TGW_MSG_GameResult
         * @instance
         */
        TGW_MSG_GameResult.prototype.FinalMoney = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * TGW_MSG_GameResult JackpotMoney.
         * @member {number|Long} JackpotMoney
         * @memberof GameMsg_TGW.TGW_MSG_GameResult
         * @instance
         */
        TGW_MSG_GameResult.prototype.JackpotMoney = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * TGW_MSG_GameResult ReelResult.
         * @member {Array.<GameMsg_TGW.ITGW_ReelResult>} ReelResult
         * @memberof GameMsg_TGW.TGW_MSG_GameResult
         * @instance
         */
        TGW_MSG_GameResult.prototype.ReelResult = $util.emptyArray;

        /**
         * TGW_MSG_GameResult PayGroups.
         * @member {Array.<GameMsg_TGW.ITGW_PayGroup>} PayGroups
         * @memberof GameMsg_TGW.TGW_MSG_GameResult
         * @instance
         */
        TGW_MSG_GameResult.prototype.PayGroups = $util.emptyArray;

        /**
         * Creates a new TGW_MSG_GameResult instance using the specified properties.
         * @function create
         * @memberof GameMsg_TGW.TGW_MSG_GameResult
         * @static
         * @param {GameMsg_TGW.ITGW_MSG_GameResult=} [properties] Properties to set
         * @returns {GameMsg_TGW.TGW_MSG_GameResult} TGW_MSG_GameResult instance
         */
        TGW_MSG_GameResult.create = function create(properties) {
            return new TGW_MSG_GameResult(properties);
        };

        /**
         * Encodes the specified TGW_MSG_GameResult message. Does not implicitly {@link GameMsg_TGW.TGW_MSG_GameResult.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_TGW.TGW_MSG_GameResult
         * @static
         * @param {GameMsg_TGW.ITGW_MSG_GameResult} message TGW_MSG_GameResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TGW_MSG_GameResult.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.BetMoney != null && message.hasOwnProperty("BetMoney"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.BetMoney);
            if (message.WinMoney != null && message.hasOwnProperty("WinMoney"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.WinMoney);
            if (message.FinalMoney != null && message.hasOwnProperty("FinalMoney"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.FinalMoney);
            if (message.JackpotMoney != null && message.hasOwnProperty("JackpotMoney"))
                writer.uint32(/* id 4, wireType 0 =*/32).int64(message.JackpotMoney);
            if (message.ReelResult != null && message.ReelResult.length)
                for (var i = 0; i < message.ReelResult.length; ++i)
                    $root.GameMsg_TGW.TGW_ReelResult.encode(message.ReelResult[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            if (message.PayGroups != null && message.PayGroups.length)
                for (var i = 0; i < message.PayGroups.length; ++i)
                    $root.GameMsg_TGW.TGW_PayGroup.encode(message.PayGroups[i], writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified TGW_MSG_GameResult message, length delimited. Does not implicitly {@link GameMsg_TGW.TGW_MSG_GameResult.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_TGW.TGW_MSG_GameResult
         * @static
         * @param {GameMsg_TGW.ITGW_MSG_GameResult} message TGW_MSG_GameResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TGW_MSG_GameResult.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TGW_MSG_GameResult message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_TGW.TGW_MSG_GameResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_TGW.TGW_MSG_GameResult} TGW_MSG_GameResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TGW_MSG_GameResult.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_TGW.TGW_MSG_GameResult();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.BetMoney = reader.int64();
                    break;
                case 2:
                    message.WinMoney = reader.int64();
                    break;
                case 3:
                    message.FinalMoney = reader.int64();
                    break;
                case 4:
                    message.JackpotMoney = reader.int64();
                    break;
                case 5:
                    if (!(message.ReelResult && message.ReelResult.length))
                        message.ReelResult = [];
                    message.ReelResult.push($root.GameMsg_TGW.TGW_ReelResult.decode(reader, reader.uint32()));
                    break;
                case 6:
                    if (!(message.PayGroups && message.PayGroups.length))
                        message.PayGroups = [];
                    message.PayGroups.push($root.GameMsg_TGW.TGW_PayGroup.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a TGW_MSG_GameResult message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_TGW.TGW_MSG_GameResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_TGW.TGW_MSG_GameResult} TGW_MSG_GameResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TGW_MSG_GameResult.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TGW_MSG_GameResult message.
         * @function verify
         * @memberof GameMsg_TGW.TGW_MSG_GameResult
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TGW_MSG_GameResult.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.BetMoney != null && message.hasOwnProperty("BetMoney"))
                if (!$util.isInteger(message.BetMoney) && !(message.BetMoney && $util.isInteger(message.BetMoney.low) && $util.isInteger(message.BetMoney.high)))
                    return "BetMoney: integer|Long expected";
            if (message.WinMoney != null && message.hasOwnProperty("WinMoney"))
                if (!$util.isInteger(message.WinMoney) && !(message.WinMoney && $util.isInteger(message.WinMoney.low) && $util.isInteger(message.WinMoney.high)))
                    return "WinMoney: integer|Long expected";
            if (message.FinalMoney != null && message.hasOwnProperty("FinalMoney"))
                if (!$util.isInteger(message.FinalMoney) && !(message.FinalMoney && $util.isInteger(message.FinalMoney.low) && $util.isInteger(message.FinalMoney.high)))
                    return "FinalMoney: integer|Long expected";
            if (message.JackpotMoney != null && message.hasOwnProperty("JackpotMoney"))
                if (!$util.isInteger(message.JackpotMoney) && !(message.JackpotMoney && $util.isInteger(message.JackpotMoney.low) && $util.isInteger(message.JackpotMoney.high)))
                    return "JackpotMoney: integer|Long expected";
            if (message.ReelResult != null && message.hasOwnProperty("ReelResult")) {
                if (!Array.isArray(message.ReelResult))
                    return "ReelResult: array expected";
                for (var i = 0; i < message.ReelResult.length; ++i) {
                    var error = $root.GameMsg_TGW.TGW_ReelResult.verify(message.ReelResult[i]);
                    if (error)
                        return "ReelResult." + error;
                }
            }
            if (message.PayGroups != null && message.hasOwnProperty("PayGroups")) {
                if (!Array.isArray(message.PayGroups))
                    return "PayGroups: array expected";
                for (var i = 0; i < message.PayGroups.length; ++i) {
                    var error = $root.GameMsg_TGW.TGW_PayGroup.verify(message.PayGroups[i]);
                    if (error)
                        return "PayGroups." + error;
                }
            }
            return null;
        };

        /**
         * Creates a TGW_MSG_GameResult message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_TGW.TGW_MSG_GameResult
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_TGW.TGW_MSG_GameResult} TGW_MSG_GameResult
         */
        TGW_MSG_GameResult.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_TGW.TGW_MSG_GameResult)
                return object;
            var message = new $root.GameMsg_TGW.TGW_MSG_GameResult();
            if (object.BetMoney != null)
                if ($util.Long)
                    (message.BetMoney = $util.Long.fromValue(object.BetMoney)).unsigned = false;
                else if (typeof object.BetMoney === "string")
                    message.BetMoney = parseInt(object.BetMoney, 10);
                else if (typeof object.BetMoney === "number")
                    message.BetMoney = object.BetMoney;
                else if (typeof object.BetMoney === "object")
                    message.BetMoney = new $util.LongBits(object.BetMoney.low >>> 0, object.BetMoney.high >>> 0).toNumber();
            if (object.WinMoney != null)
                if ($util.Long)
                    (message.WinMoney = $util.Long.fromValue(object.WinMoney)).unsigned = false;
                else if (typeof object.WinMoney === "string")
                    message.WinMoney = parseInt(object.WinMoney, 10);
                else if (typeof object.WinMoney === "number")
                    message.WinMoney = object.WinMoney;
                else if (typeof object.WinMoney === "object")
                    message.WinMoney = new $util.LongBits(object.WinMoney.low >>> 0, object.WinMoney.high >>> 0).toNumber();
            if (object.FinalMoney != null)
                if ($util.Long)
                    (message.FinalMoney = $util.Long.fromValue(object.FinalMoney)).unsigned = false;
                else if (typeof object.FinalMoney === "string")
                    message.FinalMoney = parseInt(object.FinalMoney, 10);
                else if (typeof object.FinalMoney === "number")
                    message.FinalMoney = object.FinalMoney;
                else if (typeof object.FinalMoney === "object")
                    message.FinalMoney = new $util.LongBits(object.FinalMoney.low >>> 0, object.FinalMoney.high >>> 0).toNumber();
            if (object.JackpotMoney != null)
                if ($util.Long)
                    (message.JackpotMoney = $util.Long.fromValue(object.JackpotMoney)).unsigned = false;
                else if (typeof object.JackpotMoney === "string")
                    message.JackpotMoney = parseInt(object.JackpotMoney, 10);
                else if (typeof object.JackpotMoney === "number")
                    message.JackpotMoney = object.JackpotMoney;
                else if (typeof object.JackpotMoney === "object")
                    message.JackpotMoney = new $util.LongBits(object.JackpotMoney.low >>> 0, object.JackpotMoney.high >>> 0).toNumber();
            if (object.ReelResult) {
                if (!Array.isArray(object.ReelResult))
                    throw TypeError(".GameMsg_TGW.TGW_MSG_GameResult.ReelResult: array expected");
                message.ReelResult = [];
                for (var i = 0; i < object.ReelResult.length; ++i) {
                    if (typeof object.ReelResult[i] !== "object")
                        throw TypeError(".GameMsg_TGW.TGW_MSG_GameResult.ReelResult: object expected");
                    message.ReelResult[i] = $root.GameMsg_TGW.TGW_ReelResult.fromObject(object.ReelResult[i]);
                }
            }
            if (object.PayGroups) {
                if (!Array.isArray(object.PayGroups))
                    throw TypeError(".GameMsg_TGW.TGW_MSG_GameResult.PayGroups: array expected");
                message.PayGroups = [];
                for (var i = 0; i < object.PayGroups.length; ++i) {
                    if (typeof object.PayGroups[i] !== "object")
                        throw TypeError(".GameMsg_TGW.TGW_MSG_GameResult.PayGroups: object expected");
                    message.PayGroups[i] = $root.GameMsg_TGW.TGW_PayGroup.fromObject(object.PayGroups[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a TGW_MSG_GameResult message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_TGW.TGW_MSG_GameResult
         * @static
         * @param {GameMsg_TGW.TGW_MSG_GameResult} message TGW_MSG_GameResult
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TGW_MSG_GameResult.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.ReelResult = [];
                object.PayGroups = [];
            }
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.BetMoney = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.BetMoney = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.WinMoney = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.WinMoney = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.FinalMoney = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.FinalMoney = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.JackpotMoney = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.JackpotMoney = options.longs === String ? "0" : 0;
            }
            if (message.BetMoney != null && message.hasOwnProperty("BetMoney"))
                if (typeof message.BetMoney === "number")
                    object.BetMoney = options.longs === String ? String(message.BetMoney) : message.BetMoney;
                else
                    object.BetMoney = options.longs === String ? $util.Long.prototype.toString.call(message.BetMoney) : options.longs === Number ? new $util.LongBits(message.BetMoney.low >>> 0, message.BetMoney.high >>> 0).toNumber() : message.BetMoney;
            if (message.WinMoney != null && message.hasOwnProperty("WinMoney"))
                if (typeof message.WinMoney === "number")
                    object.WinMoney = options.longs === String ? String(message.WinMoney) : message.WinMoney;
                else
                    object.WinMoney = options.longs === String ? $util.Long.prototype.toString.call(message.WinMoney) : options.longs === Number ? new $util.LongBits(message.WinMoney.low >>> 0, message.WinMoney.high >>> 0).toNumber() : message.WinMoney;
            if (message.FinalMoney != null && message.hasOwnProperty("FinalMoney"))
                if (typeof message.FinalMoney === "number")
                    object.FinalMoney = options.longs === String ? String(message.FinalMoney) : message.FinalMoney;
                else
                    object.FinalMoney = options.longs === String ? $util.Long.prototype.toString.call(message.FinalMoney) : options.longs === Number ? new $util.LongBits(message.FinalMoney.low >>> 0, message.FinalMoney.high >>> 0).toNumber() : message.FinalMoney;
            if (message.JackpotMoney != null && message.hasOwnProperty("JackpotMoney"))
                if (typeof message.JackpotMoney === "number")
                    object.JackpotMoney = options.longs === String ? String(message.JackpotMoney) : message.JackpotMoney;
                else
                    object.JackpotMoney = options.longs === String ? $util.Long.prototype.toString.call(message.JackpotMoney) : options.longs === Number ? new $util.LongBits(message.JackpotMoney.low >>> 0, message.JackpotMoney.high >>> 0).toNumber() : message.JackpotMoney;
            if (message.ReelResult && message.ReelResult.length) {
                object.ReelResult = [];
                for (var j = 0; j < message.ReelResult.length; ++j)
                    object.ReelResult[j] = $root.GameMsg_TGW.TGW_ReelResult.toObject(message.ReelResult[j], options);
            }
            if (message.PayGroups && message.PayGroups.length) {
                object.PayGroups = [];
                for (var j = 0; j < message.PayGroups.length; ++j)
                    object.PayGroups[j] = $root.GameMsg_TGW.TGW_PayGroup.toObject(message.PayGroups[j], options);
            }
            return object;
        };

        /**
         * Converts this TGW_MSG_GameResult to JSON.
         * @function toJSON
         * @memberof GameMsg_TGW.TGW_MSG_GameResult
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TGW_MSG_GameResult.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return TGW_MSG_GameResult;
    })();

    GameMsg_TGW.TGW_MSG_BonusGame = (function() {

        /**
         * Properties of a TGW_MSG_BonusGame.
         * @memberof GameMsg_TGW
         * @interface ITGW_MSG_BonusGame
         * @property {Array.<GameMsg_TGW.ITGW_BonusGameRecord>|null} [Records] TGW_MSG_BonusGame Records
         * @property {number|null} [Count] TGW_MSG_BonusGame Count
         * @property {number|Long|null} [WinMoney] TGW_MSG_BonusGame WinMoney
         * @property {Array.<number>|null} [All] TGW_MSG_BonusGame All
         */

        /**
         * Constructs a new TGW_MSG_BonusGame.
         * @memberof GameMsg_TGW
         * @classdesc Represents a TGW_MSG_BonusGame.
         * @implements ITGW_MSG_BonusGame
         * @constructor
         * @param {GameMsg_TGW.ITGW_MSG_BonusGame=} [properties] Properties to set
         */
        function TGW_MSG_BonusGame(properties) {
            this.Records = [];
            this.All = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TGW_MSG_BonusGame Records.
         * @member {Array.<GameMsg_TGW.ITGW_BonusGameRecord>} Records
         * @memberof GameMsg_TGW.TGW_MSG_BonusGame
         * @instance
         */
        TGW_MSG_BonusGame.prototype.Records = $util.emptyArray;

        /**
         * TGW_MSG_BonusGame Count.
         * @member {number} Count
         * @memberof GameMsg_TGW.TGW_MSG_BonusGame
         * @instance
         */
        TGW_MSG_BonusGame.prototype.Count = 0;

        /**
         * TGW_MSG_BonusGame WinMoney.
         * @member {number|Long} WinMoney
         * @memberof GameMsg_TGW.TGW_MSG_BonusGame
         * @instance
         */
        TGW_MSG_BonusGame.prototype.WinMoney = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * TGW_MSG_BonusGame All.
         * @member {Array.<number>} All
         * @memberof GameMsg_TGW.TGW_MSG_BonusGame
         * @instance
         */
        TGW_MSG_BonusGame.prototype.All = $util.emptyArray;

        /**
         * Creates a new TGW_MSG_BonusGame instance using the specified properties.
         * @function create
         * @memberof GameMsg_TGW.TGW_MSG_BonusGame
         * @static
         * @param {GameMsg_TGW.ITGW_MSG_BonusGame=} [properties] Properties to set
         * @returns {GameMsg_TGW.TGW_MSG_BonusGame} TGW_MSG_BonusGame instance
         */
        TGW_MSG_BonusGame.create = function create(properties) {
            return new TGW_MSG_BonusGame(properties);
        };

        /**
         * Encodes the specified TGW_MSG_BonusGame message. Does not implicitly {@link GameMsg_TGW.TGW_MSG_BonusGame.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_TGW.TGW_MSG_BonusGame
         * @static
         * @param {GameMsg_TGW.ITGW_MSG_BonusGame} message TGW_MSG_BonusGame message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TGW_MSG_BonusGame.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Records != null && message.Records.length)
                for (var i = 0; i < message.Records.length; ++i)
                    $root.GameMsg_TGW.TGW_BonusGameRecord.encode(message.Records[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.Count != null && message.hasOwnProperty("Count"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.Count);
            if (message.WinMoney != null && message.hasOwnProperty("WinMoney"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.WinMoney);
            if (message.All != null && message.All.length) {
                writer.uint32(/* id 4, wireType 2 =*/34).fork();
                for (var i = 0; i < message.All.length; ++i)
                    writer.int32(message.All[i]);
                writer.ldelim();
            }
            return writer;
        };

        /**
         * Encodes the specified TGW_MSG_BonusGame message, length delimited. Does not implicitly {@link GameMsg_TGW.TGW_MSG_BonusGame.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_TGW.TGW_MSG_BonusGame
         * @static
         * @param {GameMsg_TGW.ITGW_MSG_BonusGame} message TGW_MSG_BonusGame message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TGW_MSG_BonusGame.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TGW_MSG_BonusGame message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_TGW.TGW_MSG_BonusGame
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_TGW.TGW_MSG_BonusGame} TGW_MSG_BonusGame
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TGW_MSG_BonusGame.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_TGW.TGW_MSG_BonusGame();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.Records && message.Records.length))
                        message.Records = [];
                    message.Records.push($root.GameMsg_TGW.TGW_BonusGameRecord.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.Count = reader.int32();
                    break;
                case 3:
                    message.WinMoney = reader.int64();
                    break;
                case 4:
                    if (!(message.All && message.All.length))
                        message.All = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.All.push(reader.int32());
                    } else
                        message.All.push(reader.int32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a TGW_MSG_BonusGame message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_TGW.TGW_MSG_BonusGame
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_TGW.TGW_MSG_BonusGame} TGW_MSG_BonusGame
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TGW_MSG_BonusGame.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TGW_MSG_BonusGame message.
         * @function verify
         * @memberof GameMsg_TGW.TGW_MSG_BonusGame
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TGW_MSG_BonusGame.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Records != null && message.hasOwnProperty("Records")) {
                if (!Array.isArray(message.Records))
                    return "Records: array expected";
                for (var i = 0; i < message.Records.length; ++i) {
                    var error = $root.GameMsg_TGW.TGW_BonusGameRecord.verify(message.Records[i]);
                    if (error)
                        return "Records." + error;
                }
            }
            if (message.Count != null && message.hasOwnProperty("Count"))
                if (!$util.isInteger(message.Count))
                    return "Count: integer expected";
            if (message.WinMoney != null && message.hasOwnProperty("WinMoney"))
                if (!$util.isInteger(message.WinMoney) && !(message.WinMoney && $util.isInteger(message.WinMoney.low) && $util.isInteger(message.WinMoney.high)))
                    return "WinMoney: integer|Long expected";
            if (message.All != null && message.hasOwnProperty("All")) {
                if (!Array.isArray(message.All))
                    return "All: array expected";
                for (var i = 0; i < message.All.length; ++i)
                    if (!$util.isInteger(message.All[i]))
                        return "All: integer[] expected";
            }
            return null;
        };

        /**
         * Creates a TGW_MSG_BonusGame message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_TGW.TGW_MSG_BonusGame
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_TGW.TGW_MSG_BonusGame} TGW_MSG_BonusGame
         */
        TGW_MSG_BonusGame.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_TGW.TGW_MSG_BonusGame)
                return object;
            var message = new $root.GameMsg_TGW.TGW_MSG_BonusGame();
            if (object.Records) {
                if (!Array.isArray(object.Records))
                    throw TypeError(".GameMsg_TGW.TGW_MSG_BonusGame.Records: array expected");
                message.Records = [];
                for (var i = 0; i < object.Records.length; ++i) {
                    if (typeof object.Records[i] !== "object")
                        throw TypeError(".GameMsg_TGW.TGW_MSG_BonusGame.Records: object expected");
                    message.Records[i] = $root.GameMsg_TGW.TGW_BonusGameRecord.fromObject(object.Records[i]);
                }
            }
            if (object.Count != null)
                message.Count = object.Count | 0;
            if (object.WinMoney != null)
                if ($util.Long)
                    (message.WinMoney = $util.Long.fromValue(object.WinMoney)).unsigned = false;
                else if (typeof object.WinMoney === "string")
                    message.WinMoney = parseInt(object.WinMoney, 10);
                else if (typeof object.WinMoney === "number")
                    message.WinMoney = object.WinMoney;
                else if (typeof object.WinMoney === "object")
                    message.WinMoney = new $util.LongBits(object.WinMoney.low >>> 0, object.WinMoney.high >>> 0).toNumber();
            if (object.All) {
                if (!Array.isArray(object.All))
                    throw TypeError(".GameMsg_TGW.TGW_MSG_BonusGame.All: array expected");
                message.All = [];
                for (var i = 0; i < object.All.length; ++i)
                    message.All[i] = object.All[i] | 0;
            }
            return message;
        };

        /**
         * Creates a plain object from a TGW_MSG_BonusGame message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_TGW.TGW_MSG_BonusGame
         * @static
         * @param {GameMsg_TGW.TGW_MSG_BonusGame} message TGW_MSG_BonusGame
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TGW_MSG_BonusGame.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.Records = [];
                object.All = [];
            }
            if (options.defaults) {
                object.Count = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.WinMoney = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.WinMoney = options.longs === String ? "0" : 0;
            }
            if (message.Records && message.Records.length) {
                object.Records = [];
                for (var j = 0; j < message.Records.length; ++j)
                    object.Records[j] = $root.GameMsg_TGW.TGW_BonusGameRecord.toObject(message.Records[j], options);
            }
            if (message.Count != null && message.hasOwnProperty("Count"))
                object.Count = message.Count;
            if (message.WinMoney != null && message.hasOwnProperty("WinMoney"))
                if (typeof message.WinMoney === "number")
                    object.WinMoney = options.longs === String ? String(message.WinMoney) : message.WinMoney;
                else
                    object.WinMoney = options.longs === String ? $util.Long.prototype.toString.call(message.WinMoney) : options.longs === Number ? new $util.LongBits(message.WinMoney.low >>> 0, message.WinMoney.high >>> 0).toNumber() : message.WinMoney;
            if (message.All && message.All.length) {
                object.All = [];
                for (var j = 0; j < message.All.length; ++j)
                    object.All[j] = message.All[j];
            }
            return object;
        };

        /**
         * Converts this TGW_MSG_BonusGame to JSON.
         * @function toJSON
         * @memberof GameMsg_TGW.TGW_MSG_BonusGame
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TGW_MSG_BonusGame.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return TGW_MSG_BonusGame;
    })();

    GameMsg_TGW.TGW_MSG_Spin = (function() {

        /**
         * Properties of a TGW_MSG_Spin.
         * @memberof GameMsg_TGW
         * @interface ITGW_MSG_Spin
         * @property {number|Long|null} [Money] TGW_MSG_Spin Money
         */

        /**
         * Constructs a new TGW_MSG_Spin.
         * @memberof GameMsg_TGW
         * @classdesc Represents a TGW_MSG_Spin.
         * @implements ITGW_MSG_Spin
         * @constructor
         * @param {GameMsg_TGW.ITGW_MSG_Spin=} [properties] Properties to set
         */
        function TGW_MSG_Spin(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TGW_MSG_Spin Money.
         * @member {number|Long} Money
         * @memberof GameMsg_TGW.TGW_MSG_Spin
         * @instance
         */
        TGW_MSG_Spin.prototype.Money = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new TGW_MSG_Spin instance using the specified properties.
         * @function create
         * @memberof GameMsg_TGW.TGW_MSG_Spin
         * @static
         * @param {GameMsg_TGW.ITGW_MSG_Spin=} [properties] Properties to set
         * @returns {GameMsg_TGW.TGW_MSG_Spin} TGW_MSG_Spin instance
         */
        TGW_MSG_Spin.create = function create(properties) {
            return new TGW_MSG_Spin(properties);
        };

        /**
         * Encodes the specified TGW_MSG_Spin message. Does not implicitly {@link GameMsg_TGW.TGW_MSG_Spin.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_TGW.TGW_MSG_Spin
         * @static
         * @param {GameMsg_TGW.ITGW_MSG_Spin} message TGW_MSG_Spin message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TGW_MSG_Spin.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Money != null && message.hasOwnProperty("Money"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.Money);
            return writer;
        };

        /**
         * Encodes the specified TGW_MSG_Spin message, length delimited. Does not implicitly {@link GameMsg_TGW.TGW_MSG_Spin.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_TGW.TGW_MSG_Spin
         * @static
         * @param {GameMsg_TGW.ITGW_MSG_Spin} message TGW_MSG_Spin message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TGW_MSG_Spin.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TGW_MSG_Spin message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_TGW.TGW_MSG_Spin
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_TGW.TGW_MSG_Spin} TGW_MSG_Spin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TGW_MSG_Spin.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_TGW.TGW_MSG_Spin();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Money = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a TGW_MSG_Spin message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_TGW.TGW_MSG_Spin
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_TGW.TGW_MSG_Spin} TGW_MSG_Spin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TGW_MSG_Spin.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TGW_MSG_Spin message.
         * @function verify
         * @memberof GameMsg_TGW.TGW_MSG_Spin
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TGW_MSG_Spin.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Money != null && message.hasOwnProperty("Money"))
                if (!$util.isInteger(message.Money) && !(message.Money && $util.isInteger(message.Money.low) && $util.isInteger(message.Money.high)))
                    return "Money: integer|Long expected";
            return null;
        };

        /**
         * Creates a TGW_MSG_Spin message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_TGW.TGW_MSG_Spin
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_TGW.TGW_MSG_Spin} TGW_MSG_Spin
         */
        TGW_MSG_Spin.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_TGW.TGW_MSG_Spin)
                return object;
            var message = new $root.GameMsg_TGW.TGW_MSG_Spin();
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
         * Creates a plain object from a TGW_MSG_Spin message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_TGW.TGW_MSG_Spin
         * @static
         * @param {GameMsg_TGW.TGW_MSG_Spin} message TGW_MSG_Spin
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TGW_MSG_Spin.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.Money = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.Money = options.longs === String ? "0" : 0;
            if (message.Money != null && message.hasOwnProperty("Money"))
                if (typeof message.Money === "number")
                    object.Money = options.longs === String ? String(message.Money) : message.Money;
                else
                    object.Money = options.longs === String ? $util.Long.prototype.toString.call(message.Money) : options.longs === Number ? new $util.LongBits(message.Money.low >>> 0, message.Money.high >>> 0).toNumber() : message.Money;
            return object;
        };

        /**
         * Converts this TGW_MSG_Spin to JSON.
         * @function toJSON
         * @memberof GameMsg_TGW.TGW_MSG_Spin
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TGW_MSG_Spin.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return TGW_MSG_Spin;
    })();

    GameMsg_TGW.TGW_MSG_Pick = (function() {

        /**
         * Properties of a TGW_MSG_Pick.
         * @memberof GameMsg_TGW
         * @interface ITGW_MSG_Pick
         * @property {GameMsg_TGW.ITGW_BonusGameRecord|null} [Record] TGW_MSG_Pick Record
         */

        /**
         * Constructs a new TGW_MSG_Pick.
         * @memberof GameMsg_TGW
         * @classdesc Represents a TGW_MSG_Pick.
         * @implements ITGW_MSG_Pick
         * @constructor
         * @param {GameMsg_TGW.ITGW_MSG_Pick=} [properties] Properties to set
         */
        function TGW_MSG_Pick(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TGW_MSG_Pick Record.
         * @member {GameMsg_TGW.ITGW_BonusGameRecord|null|undefined} Record
         * @memberof GameMsg_TGW.TGW_MSG_Pick
         * @instance
         */
        TGW_MSG_Pick.prototype.Record = null;

        /**
         * Creates a new TGW_MSG_Pick instance using the specified properties.
         * @function create
         * @memberof GameMsg_TGW.TGW_MSG_Pick
         * @static
         * @param {GameMsg_TGW.ITGW_MSG_Pick=} [properties] Properties to set
         * @returns {GameMsg_TGW.TGW_MSG_Pick} TGW_MSG_Pick instance
         */
        TGW_MSG_Pick.create = function create(properties) {
            return new TGW_MSG_Pick(properties);
        };

        /**
         * Encodes the specified TGW_MSG_Pick message. Does not implicitly {@link GameMsg_TGW.TGW_MSG_Pick.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_TGW.TGW_MSG_Pick
         * @static
         * @param {GameMsg_TGW.ITGW_MSG_Pick} message TGW_MSG_Pick message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TGW_MSG_Pick.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Record != null && message.hasOwnProperty("Record"))
                $root.GameMsg_TGW.TGW_BonusGameRecord.encode(message.Record, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified TGW_MSG_Pick message, length delimited. Does not implicitly {@link GameMsg_TGW.TGW_MSG_Pick.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_TGW.TGW_MSG_Pick
         * @static
         * @param {GameMsg_TGW.ITGW_MSG_Pick} message TGW_MSG_Pick message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TGW_MSG_Pick.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TGW_MSG_Pick message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_TGW.TGW_MSG_Pick
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_TGW.TGW_MSG_Pick} TGW_MSG_Pick
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TGW_MSG_Pick.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_TGW.TGW_MSG_Pick();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Record = $root.GameMsg_TGW.TGW_BonusGameRecord.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a TGW_MSG_Pick message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_TGW.TGW_MSG_Pick
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_TGW.TGW_MSG_Pick} TGW_MSG_Pick
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TGW_MSG_Pick.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TGW_MSG_Pick message.
         * @function verify
         * @memberof GameMsg_TGW.TGW_MSG_Pick
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TGW_MSG_Pick.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Record != null && message.hasOwnProperty("Record")) {
                var error = $root.GameMsg_TGW.TGW_BonusGameRecord.verify(message.Record);
                if (error)
                    return "Record." + error;
            }
            return null;
        };

        /**
         * Creates a TGW_MSG_Pick message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_TGW.TGW_MSG_Pick
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_TGW.TGW_MSG_Pick} TGW_MSG_Pick
         */
        TGW_MSG_Pick.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_TGW.TGW_MSG_Pick)
                return object;
            var message = new $root.GameMsg_TGW.TGW_MSG_Pick();
            if (object.Record != null) {
                if (typeof object.Record !== "object")
                    throw TypeError(".GameMsg_TGW.TGW_MSG_Pick.Record: object expected");
                message.Record = $root.GameMsg_TGW.TGW_BonusGameRecord.fromObject(object.Record);
            }
            return message;
        };

        /**
         * Creates a plain object from a TGW_MSG_Pick message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_TGW.TGW_MSG_Pick
         * @static
         * @param {GameMsg_TGW.TGW_MSG_Pick} message TGW_MSG_Pick
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TGW_MSG_Pick.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.Record = null;
            if (message.Record != null && message.hasOwnProperty("Record"))
                object.Record = $root.GameMsg_TGW.TGW_BonusGameRecord.toObject(message.Record, options);
            return object;
        };

        /**
         * Converts this TGW_MSG_Pick to JSON.
         * @function toJSON
         * @memberof GameMsg_TGW.TGW_MSG_Pick
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TGW_MSG_Pick.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return TGW_MSG_Pick;
    })();

    GameMsg_TGW.TGW_MSG_PickRet = (function() {

        /**
         * Properties of a TGW_MSG_PickRet.
         * @memberof GameMsg_TGW
         * @interface ITGW_MSG_PickRet
         * @property {GameMsg_TGW.ITGW_BonusGameRecord|null} [Record] TGW_MSG_PickRet Record
         */

        /**
         * Constructs a new TGW_MSG_PickRet.
         * @memberof GameMsg_TGW
         * @classdesc Represents a TGW_MSG_PickRet.
         * @implements ITGW_MSG_PickRet
         * @constructor
         * @param {GameMsg_TGW.ITGW_MSG_PickRet=} [properties] Properties to set
         */
        function TGW_MSG_PickRet(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TGW_MSG_PickRet Record.
         * @member {GameMsg_TGW.ITGW_BonusGameRecord|null|undefined} Record
         * @memberof GameMsg_TGW.TGW_MSG_PickRet
         * @instance
         */
        TGW_MSG_PickRet.prototype.Record = null;

        /**
         * Creates a new TGW_MSG_PickRet instance using the specified properties.
         * @function create
         * @memberof GameMsg_TGW.TGW_MSG_PickRet
         * @static
         * @param {GameMsg_TGW.ITGW_MSG_PickRet=} [properties] Properties to set
         * @returns {GameMsg_TGW.TGW_MSG_PickRet} TGW_MSG_PickRet instance
         */
        TGW_MSG_PickRet.create = function create(properties) {
            return new TGW_MSG_PickRet(properties);
        };

        /**
         * Encodes the specified TGW_MSG_PickRet message. Does not implicitly {@link GameMsg_TGW.TGW_MSG_PickRet.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_TGW.TGW_MSG_PickRet
         * @static
         * @param {GameMsg_TGW.ITGW_MSG_PickRet} message TGW_MSG_PickRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TGW_MSG_PickRet.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Record != null && message.hasOwnProperty("Record"))
                $root.GameMsg_TGW.TGW_BonusGameRecord.encode(message.Record, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified TGW_MSG_PickRet message, length delimited. Does not implicitly {@link GameMsg_TGW.TGW_MSG_PickRet.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_TGW.TGW_MSG_PickRet
         * @static
         * @param {GameMsg_TGW.ITGW_MSG_PickRet} message TGW_MSG_PickRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TGW_MSG_PickRet.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TGW_MSG_PickRet message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_TGW.TGW_MSG_PickRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_TGW.TGW_MSG_PickRet} TGW_MSG_PickRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TGW_MSG_PickRet.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_TGW.TGW_MSG_PickRet();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Record = $root.GameMsg_TGW.TGW_BonusGameRecord.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a TGW_MSG_PickRet message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_TGW.TGW_MSG_PickRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_TGW.TGW_MSG_PickRet} TGW_MSG_PickRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TGW_MSG_PickRet.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TGW_MSG_PickRet message.
         * @function verify
         * @memberof GameMsg_TGW.TGW_MSG_PickRet
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TGW_MSG_PickRet.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Record != null && message.hasOwnProperty("Record")) {
                var error = $root.GameMsg_TGW.TGW_BonusGameRecord.verify(message.Record);
                if (error)
                    return "Record." + error;
            }
            return null;
        };

        /**
         * Creates a TGW_MSG_PickRet message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_TGW.TGW_MSG_PickRet
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_TGW.TGW_MSG_PickRet} TGW_MSG_PickRet
         */
        TGW_MSG_PickRet.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_TGW.TGW_MSG_PickRet)
                return object;
            var message = new $root.GameMsg_TGW.TGW_MSG_PickRet();
            if (object.Record != null) {
                if (typeof object.Record !== "object")
                    throw TypeError(".GameMsg_TGW.TGW_MSG_PickRet.Record: object expected");
                message.Record = $root.GameMsg_TGW.TGW_BonusGameRecord.fromObject(object.Record);
            }
            return message;
        };

        /**
         * Creates a plain object from a TGW_MSG_PickRet message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_TGW.TGW_MSG_PickRet
         * @static
         * @param {GameMsg_TGW.TGW_MSG_PickRet} message TGW_MSG_PickRet
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TGW_MSG_PickRet.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.Record = null;
            if (message.Record != null && message.hasOwnProperty("Record"))
                object.Record = $root.GameMsg_TGW.TGW_BonusGameRecord.toObject(message.Record, options);
            return object;
        };

        /**
         * Converts this TGW_MSG_PickRet to JSON.
         * @function toJSON
         * @memberof GameMsg_TGW.TGW_MSG_PickRet
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TGW_MSG_PickRet.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return TGW_MSG_PickRet;
    })();

    GameMsg_TGW.TGW_MSG_ReadBonusGame = (function() {

        /**
         * Properties of a TGW_MSG_ReadBonusGame.
         * @memberof GameMsg_TGW
         * @interface ITGW_MSG_ReadBonusGame
         * @property {number|null} [UserID] TGW_MSG_ReadBonusGame UserID
         */

        /**
         * Constructs a new TGW_MSG_ReadBonusGame.
         * @memberof GameMsg_TGW
         * @classdesc Represents a TGW_MSG_ReadBonusGame.
         * @implements ITGW_MSG_ReadBonusGame
         * @constructor
         * @param {GameMsg_TGW.ITGW_MSG_ReadBonusGame=} [properties] Properties to set
         */
        function TGW_MSG_ReadBonusGame(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TGW_MSG_ReadBonusGame UserID.
         * @member {number} UserID
         * @memberof GameMsg_TGW.TGW_MSG_ReadBonusGame
         * @instance
         */
        TGW_MSG_ReadBonusGame.prototype.UserID = 0;

        /**
         * Creates a new TGW_MSG_ReadBonusGame instance using the specified properties.
         * @function create
         * @memberof GameMsg_TGW.TGW_MSG_ReadBonusGame
         * @static
         * @param {GameMsg_TGW.ITGW_MSG_ReadBonusGame=} [properties] Properties to set
         * @returns {GameMsg_TGW.TGW_MSG_ReadBonusGame} TGW_MSG_ReadBonusGame instance
         */
        TGW_MSG_ReadBonusGame.create = function create(properties) {
            return new TGW_MSG_ReadBonusGame(properties);
        };

        /**
         * Encodes the specified TGW_MSG_ReadBonusGame message. Does not implicitly {@link GameMsg_TGW.TGW_MSG_ReadBonusGame.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_TGW.TGW_MSG_ReadBonusGame
         * @static
         * @param {GameMsg_TGW.ITGW_MSG_ReadBonusGame} message TGW_MSG_ReadBonusGame message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TGW_MSG_ReadBonusGame.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.UserID);
            return writer;
        };

        /**
         * Encodes the specified TGW_MSG_ReadBonusGame message, length delimited. Does not implicitly {@link GameMsg_TGW.TGW_MSG_ReadBonusGame.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_TGW.TGW_MSG_ReadBonusGame
         * @static
         * @param {GameMsg_TGW.ITGW_MSG_ReadBonusGame} message TGW_MSG_ReadBonusGame message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TGW_MSG_ReadBonusGame.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TGW_MSG_ReadBonusGame message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_TGW.TGW_MSG_ReadBonusGame
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_TGW.TGW_MSG_ReadBonusGame} TGW_MSG_ReadBonusGame
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TGW_MSG_ReadBonusGame.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_TGW.TGW_MSG_ReadBonusGame();
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
            return message;
        };

        /**
         * Decodes a TGW_MSG_ReadBonusGame message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_TGW.TGW_MSG_ReadBonusGame
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_TGW.TGW_MSG_ReadBonusGame} TGW_MSG_ReadBonusGame
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TGW_MSG_ReadBonusGame.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TGW_MSG_ReadBonusGame message.
         * @function verify
         * @memberof GameMsg_TGW.TGW_MSG_ReadBonusGame
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TGW_MSG_ReadBonusGame.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                if (!$util.isInteger(message.UserID))
                    return "UserID: integer expected";
            return null;
        };

        /**
         * Creates a TGW_MSG_ReadBonusGame message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_TGW.TGW_MSG_ReadBonusGame
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_TGW.TGW_MSG_ReadBonusGame} TGW_MSG_ReadBonusGame
         */
        TGW_MSG_ReadBonusGame.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_TGW.TGW_MSG_ReadBonusGame)
                return object;
            var message = new $root.GameMsg_TGW.TGW_MSG_ReadBonusGame();
            if (object.UserID != null)
                message.UserID = object.UserID | 0;
            return message;
        };

        /**
         * Creates a plain object from a TGW_MSG_ReadBonusGame message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_TGW.TGW_MSG_ReadBonusGame
         * @static
         * @param {GameMsg_TGW.TGW_MSG_ReadBonusGame} message TGW_MSG_ReadBonusGame
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TGW_MSG_ReadBonusGame.toObject = function toObject(message, options) {
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
         * Converts this TGW_MSG_ReadBonusGame to JSON.
         * @function toJSON
         * @memberof GameMsg_TGW.TGW_MSG_ReadBonusGame
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TGW_MSG_ReadBonusGame.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return TGW_MSG_ReadBonusGame;
    })();

    GameMsg_TGW.TGW_MSG_BonusGameRecord = (function() {

        /**
         * Properties of a TGW_MSG_BonusGameRecord.
         * @memberof GameMsg_TGW
         * @interface ITGW_MSG_BonusGameRecord
         * @property {number|null} [UserID] TGW_MSG_BonusGameRecord UserID
         * @property {Array.<GameMsg_TGW.ITGW_BonusGameRecord>|null} [Records] TGW_MSG_BonusGameRecord Records
         */

        /**
         * Constructs a new TGW_MSG_BonusGameRecord.
         * @memberof GameMsg_TGW
         * @classdesc Represents a TGW_MSG_BonusGameRecord.
         * @implements ITGW_MSG_BonusGameRecord
         * @constructor
         * @param {GameMsg_TGW.ITGW_MSG_BonusGameRecord=} [properties] Properties to set
         */
        function TGW_MSG_BonusGameRecord(properties) {
            this.Records = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TGW_MSG_BonusGameRecord UserID.
         * @member {number} UserID
         * @memberof GameMsg_TGW.TGW_MSG_BonusGameRecord
         * @instance
         */
        TGW_MSG_BonusGameRecord.prototype.UserID = 0;

        /**
         * TGW_MSG_BonusGameRecord Records.
         * @member {Array.<GameMsg_TGW.ITGW_BonusGameRecord>} Records
         * @memberof GameMsg_TGW.TGW_MSG_BonusGameRecord
         * @instance
         */
        TGW_MSG_BonusGameRecord.prototype.Records = $util.emptyArray;

        /**
         * Creates a new TGW_MSG_BonusGameRecord instance using the specified properties.
         * @function create
         * @memberof GameMsg_TGW.TGW_MSG_BonusGameRecord
         * @static
         * @param {GameMsg_TGW.ITGW_MSG_BonusGameRecord=} [properties] Properties to set
         * @returns {GameMsg_TGW.TGW_MSG_BonusGameRecord} TGW_MSG_BonusGameRecord instance
         */
        TGW_MSG_BonusGameRecord.create = function create(properties) {
            return new TGW_MSG_BonusGameRecord(properties);
        };

        /**
         * Encodes the specified TGW_MSG_BonusGameRecord message. Does not implicitly {@link GameMsg_TGW.TGW_MSG_BonusGameRecord.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_TGW.TGW_MSG_BonusGameRecord
         * @static
         * @param {GameMsg_TGW.ITGW_MSG_BonusGameRecord} message TGW_MSG_BonusGameRecord message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TGW_MSG_BonusGameRecord.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.UserID);
            if (message.Records != null && message.Records.length)
                for (var i = 0; i < message.Records.length; ++i)
                    $root.GameMsg_TGW.TGW_BonusGameRecord.encode(message.Records[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified TGW_MSG_BonusGameRecord message, length delimited. Does not implicitly {@link GameMsg_TGW.TGW_MSG_BonusGameRecord.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_TGW.TGW_MSG_BonusGameRecord
         * @static
         * @param {GameMsg_TGW.ITGW_MSG_BonusGameRecord} message TGW_MSG_BonusGameRecord message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TGW_MSG_BonusGameRecord.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TGW_MSG_BonusGameRecord message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_TGW.TGW_MSG_BonusGameRecord
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_TGW.TGW_MSG_BonusGameRecord} TGW_MSG_BonusGameRecord
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TGW_MSG_BonusGameRecord.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_TGW.TGW_MSG_BonusGameRecord();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.UserID = reader.int32();
                    break;
                case 2:
                    if (!(message.Records && message.Records.length))
                        message.Records = [];
                    message.Records.push($root.GameMsg_TGW.TGW_BonusGameRecord.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a TGW_MSG_BonusGameRecord message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_TGW.TGW_MSG_BonusGameRecord
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_TGW.TGW_MSG_BonusGameRecord} TGW_MSG_BonusGameRecord
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TGW_MSG_BonusGameRecord.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TGW_MSG_BonusGameRecord message.
         * @function verify
         * @memberof GameMsg_TGW.TGW_MSG_BonusGameRecord
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TGW_MSG_BonusGameRecord.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                if (!$util.isInteger(message.UserID))
                    return "UserID: integer expected";
            if (message.Records != null && message.hasOwnProperty("Records")) {
                if (!Array.isArray(message.Records))
                    return "Records: array expected";
                for (var i = 0; i < message.Records.length; ++i) {
                    var error = $root.GameMsg_TGW.TGW_BonusGameRecord.verify(message.Records[i]);
                    if (error)
                        return "Records." + error;
                }
            }
            return null;
        };

        /**
         * Creates a TGW_MSG_BonusGameRecord message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_TGW.TGW_MSG_BonusGameRecord
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_TGW.TGW_MSG_BonusGameRecord} TGW_MSG_BonusGameRecord
         */
        TGW_MSG_BonusGameRecord.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_TGW.TGW_MSG_BonusGameRecord)
                return object;
            var message = new $root.GameMsg_TGW.TGW_MSG_BonusGameRecord();
            if (object.UserID != null)
                message.UserID = object.UserID | 0;
            if (object.Records) {
                if (!Array.isArray(object.Records))
                    throw TypeError(".GameMsg_TGW.TGW_MSG_BonusGameRecord.Records: array expected");
                message.Records = [];
                for (var i = 0; i < object.Records.length; ++i) {
                    if (typeof object.Records[i] !== "object")
                        throw TypeError(".GameMsg_TGW.TGW_MSG_BonusGameRecord.Records: object expected");
                    message.Records[i] = $root.GameMsg_TGW.TGW_BonusGameRecord.fromObject(object.Records[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a TGW_MSG_BonusGameRecord message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_TGW.TGW_MSG_BonusGameRecord
         * @static
         * @param {GameMsg_TGW.TGW_MSG_BonusGameRecord} message TGW_MSG_BonusGameRecord
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TGW_MSG_BonusGameRecord.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.Records = [];
            if (options.defaults)
                object.UserID = 0;
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                object.UserID = message.UserID;
            if (message.Records && message.Records.length) {
                object.Records = [];
                for (var j = 0; j < message.Records.length; ++j)
                    object.Records[j] = $root.GameMsg_TGW.TGW_BonusGameRecord.toObject(message.Records[j], options);
            }
            return object;
        };

        /**
         * Converts this TGW_MSG_BonusGameRecord to JSON.
         * @function toJSON
         * @memberof GameMsg_TGW.TGW_MSG_BonusGameRecord
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TGW_MSG_BonusGameRecord.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return TGW_MSG_BonusGameRecord;
    })();

    GameMsg_TGW.TGW_MSG_ResetBonusGame = (function() {

        /**
         * Properties of a TGW_MSG_ResetBonusGame.
         * @memberof GameMsg_TGW
         * @interface ITGW_MSG_ResetBonusGame
         * @property {number|null} [UserID] TGW_MSG_ResetBonusGame UserID
         */

        /**
         * Constructs a new TGW_MSG_ResetBonusGame.
         * @memberof GameMsg_TGW
         * @classdesc Represents a TGW_MSG_ResetBonusGame.
         * @implements ITGW_MSG_ResetBonusGame
         * @constructor
         * @param {GameMsg_TGW.ITGW_MSG_ResetBonusGame=} [properties] Properties to set
         */
        function TGW_MSG_ResetBonusGame(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TGW_MSG_ResetBonusGame UserID.
         * @member {number} UserID
         * @memberof GameMsg_TGW.TGW_MSG_ResetBonusGame
         * @instance
         */
        TGW_MSG_ResetBonusGame.prototype.UserID = 0;

        /**
         * Creates a new TGW_MSG_ResetBonusGame instance using the specified properties.
         * @function create
         * @memberof GameMsg_TGW.TGW_MSG_ResetBonusGame
         * @static
         * @param {GameMsg_TGW.ITGW_MSG_ResetBonusGame=} [properties] Properties to set
         * @returns {GameMsg_TGW.TGW_MSG_ResetBonusGame} TGW_MSG_ResetBonusGame instance
         */
        TGW_MSG_ResetBonusGame.create = function create(properties) {
            return new TGW_MSG_ResetBonusGame(properties);
        };

        /**
         * Encodes the specified TGW_MSG_ResetBonusGame message. Does not implicitly {@link GameMsg_TGW.TGW_MSG_ResetBonusGame.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_TGW.TGW_MSG_ResetBonusGame
         * @static
         * @param {GameMsg_TGW.ITGW_MSG_ResetBonusGame} message TGW_MSG_ResetBonusGame message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TGW_MSG_ResetBonusGame.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.UserID);
            return writer;
        };

        /**
         * Encodes the specified TGW_MSG_ResetBonusGame message, length delimited. Does not implicitly {@link GameMsg_TGW.TGW_MSG_ResetBonusGame.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_TGW.TGW_MSG_ResetBonusGame
         * @static
         * @param {GameMsg_TGW.ITGW_MSG_ResetBonusGame} message TGW_MSG_ResetBonusGame message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TGW_MSG_ResetBonusGame.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TGW_MSG_ResetBonusGame message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_TGW.TGW_MSG_ResetBonusGame
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_TGW.TGW_MSG_ResetBonusGame} TGW_MSG_ResetBonusGame
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TGW_MSG_ResetBonusGame.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_TGW.TGW_MSG_ResetBonusGame();
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
            return message;
        };

        /**
         * Decodes a TGW_MSG_ResetBonusGame message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_TGW.TGW_MSG_ResetBonusGame
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_TGW.TGW_MSG_ResetBonusGame} TGW_MSG_ResetBonusGame
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TGW_MSG_ResetBonusGame.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TGW_MSG_ResetBonusGame message.
         * @function verify
         * @memberof GameMsg_TGW.TGW_MSG_ResetBonusGame
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TGW_MSG_ResetBonusGame.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                if (!$util.isInteger(message.UserID))
                    return "UserID: integer expected";
            return null;
        };

        /**
         * Creates a TGW_MSG_ResetBonusGame message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_TGW.TGW_MSG_ResetBonusGame
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_TGW.TGW_MSG_ResetBonusGame} TGW_MSG_ResetBonusGame
         */
        TGW_MSG_ResetBonusGame.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_TGW.TGW_MSG_ResetBonusGame)
                return object;
            var message = new $root.GameMsg_TGW.TGW_MSG_ResetBonusGame();
            if (object.UserID != null)
                message.UserID = object.UserID | 0;
            return message;
        };

        /**
         * Creates a plain object from a TGW_MSG_ResetBonusGame message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_TGW.TGW_MSG_ResetBonusGame
         * @static
         * @param {GameMsg_TGW.TGW_MSG_ResetBonusGame} message TGW_MSG_ResetBonusGame
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TGW_MSG_ResetBonusGame.toObject = function toObject(message, options) {
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
         * Converts this TGW_MSG_ResetBonusGame to JSON.
         * @function toJSON
         * @memberof GameMsg_TGW.TGW_MSG_ResetBonusGame
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TGW_MSG_ResetBonusGame.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return TGW_MSG_ResetBonusGame;
    })();

    GameMsg_TGW.TGW_MSG_RecordBonusGame = (function() {

        /**
         * Properties of a TGW_MSG_RecordBonusGame.
         * @memberof GameMsg_TGW
         * @interface ITGW_MSG_RecordBonusGame
         * @property {number|null} [UserID] TGW_MSG_RecordBonusGame UserID
         * @property {GameMsg_TGW.ITGW_BonusGameRecord|null} [Records] TGW_MSG_RecordBonusGame Records
         */

        /**
         * Constructs a new TGW_MSG_RecordBonusGame.
         * @memberof GameMsg_TGW
         * @classdesc Represents a TGW_MSG_RecordBonusGame.
         * @implements ITGW_MSG_RecordBonusGame
         * @constructor
         * @param {GameMsg_TGW.ITGW_MSG_RecordBonusGame=} [properties] Properties to set
         */
        function TGW_MSG_RecordBonusGame(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TGW_MSG_RecordBonusGame UserID.
         * @member {number} UserID
         * @memberof GameMsg_TGW.TGW_MSG_RecordBonusGame
         * @instance
         */
        TGW_MSG_RecordBonusGame.prototype.UserID = 0;

        /**
         * TGW_MSG_RecordBonusGame Records.
         * @member {GameMsg_TGW.ITGW_BonusGameRecord|null|undefined} Records
         * @memberof GameMsg_TGW.TGW_MSG_RecordBonusGame
         * @instance
         */
        TGW_MSG_RecordBonusGame.prototype.Records = null;

        /**
         * Creates a new TGW_MSG_RecordBonusGame instance using the specified properties.
         * @function create
         * @memberof GameMsg_TGW.TGW_MSG_RecordBonusGame
         * @static
         * @param {GameMsg_TGW.ITGW_MSG_RecordBonusGame=} [properties] Properties to set
         * @returns {GameMsg_TGW.TGW_MSG_RecordBonusGame} TGW_MSG_RecordBonusGame instance
         */
        TGW_MSG_RecordBonusGame.create = function create(properties) {
            return new TGW_MSG_RecordBonusGame(properties);
        };

        /**
         * Encodes the specified TGW_MSG_RecordBonusGame message. Does not implicitly {@link GameMsg_TGW.TGW_MSG_RecordBonusGame.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_TGW.TGW_MSG_RecordBonusGame
         * @static
         * @param {GameMsg_TGW.ITGW_MSG_RecordBonusGame} message TGW_MSG_RecordBonusGame message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TGW_MSG_RecordBonusGame.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.UserID);
            if (message.Records != null && message.hasOwnProperty("Records"))
                $root.GameMsg_TGW.TGW_BonusGameRecord.encode(message.Records, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified TGW_MSG_RecordBonusGame message, length delimited. Does not implicitly {@link GameMsg_TGW.TGW_MSG_RecordBonusGame.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_TGW.TGW_MSG_RecordBonusGame
         * @static
         * @param {GameMsg_TGW.ITGW_MSG_RecordBonusGame} message TGW_MSG_RecordBonusGame message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TGW_MSG_RecordBonusGame.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TGW_MSG_RecordBonusGame message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_TGW.TGW_MSG_RecordBonusGame
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_TGW.TGW_MSG_RecordBonusGame} TGW_MSG_RecordBonusGame
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TGW_MSG_RecordBonusGame.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_TGW.TGW_MSG_RecordBonusGame();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.UserID = reader.int32();
                    break;
                case 2:
                    message.Records = $root.GameMsg_TGW.TGW_BonusGameRecord.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a TGW_MSG_RecordBonusGame message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_TGW.TGW_MSG_RecordBonusGame
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_TGW.TGW_MSG_RecordBonusGame} TGW_MSG_RecordBonusGame
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TGW_MSG_RecordBonusGame.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TGW_MSG_RecordBonusGame message.
         * @function verify
         * @memberof GameMsg_TGW.TGW_MSG_RecordBonusGame
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TGW_MSG_RecordBonusGame.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                if (!$util.isInteger(message.UserID))
                    return "UserID: integer expected";
            if (message.Records != null && message.hasOwnProperty("Records")) {
                var error = $root.GameMsg_TGW.TGW_BonusGameRecord.verify(message.Records);
                if (error)
                    return "Records." + error;
            }
            return null;
        };

        /**
         * Creates a TGW_MSG_RecordBonusGame message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_TGW.TGW_MSG_RecordBonusGame
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_TGW.TGW_MSG_RecordBonusGame} TGW_MSG_RecordBonusGame
         */
        TGW_MSG_RecordBonusGame.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_TGW.TGW_MSG_RecordBonusGame)
                return object;
            var message = new $root.GameMsg_TGW.TGW_MSG_RecordBonusGame();
            if (object.UserID != null)
                message.UserID = object.UserID | 0;
            if (object.Records != null) {
                if (typeof object.Records !== "object")
                    throw TypeError(".GameMsg_TGW.TGW_MSG_RecordBonusGame.Records: object expected");
                message.Records = $root.GameMsg_TGW.TGW_BonusGameRecord.fromObject(object.Records);
            }
            return message;
        };

        /**
         * Creates a plain object from a TGW_MSG_RecordBonusGame message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_TGW.TGW_MSG_RecordBonusGame
         * @static
         * @param {GameMsg_TGW.TGW_MSG_RecordBonusGame} message TGW_MSG_RecordBonusGame
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TGW_MSG_RecordBonusGame.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.UserID = 0;
                object.Records = null;
            }
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                object.UserID = message.UserID;
            if (message.Records != null && message.hasOwnProperty("Records"))
                object.Records = $root.GameMsg_TGW.TGW_BonusGameRecord.toObject(message.Records, options);
            return object;
        };

        /**
         * Converts this TGW_MSG_RecordBonusGame to JSON.
         * @function toJSON
         * @memberof GameMsg_TGW.TGW_MSG_RecordBonusGame
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TGW_MSG_RecordBonusGame.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return TGW_MSG_RecordBonusGame;
    })();

    GameMsg_TGW.TGW_ReelSetting = (function() {

        /**
         * Properties of a TGW_ReelSetting.
         * @memberof GameMsg_TGW
         * @interface ITGW_ReelSetting
         * @property {number|null} [RealID] TGW_ReelSetting RealID
         * @property {Array.<GameMsg_TGW.ITGW_Symbol>|null} [Symbols] TGW_ReelSetting Symbols
         */

        /**
         * Constructs a new TGW_ReelSetting.
         * @memberof GameMsg_TGW
         * @classdesc Represents a TGW_ReelSetting.
         * @implements ITGW_ReelSetting
         * @constructor
         * @param {GameMsg_TGW.ITGW_ReelSetting=} [properties] Properties to set
         */
        function TGW_ReelSetting(properties) {
            this.Symbols = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TGW_ReelSetting RealID.
         * @member {number} RealID
         * @memberof GameMsg_TGW.TGW_ReelSetting
         * @instance
         */
        TGW_ReelSetting.prototype.RealID = 0;

        /**
         * TGW_ReelSetting Symbols.
         * @member {Array.<GameMsg_TGW.ITGW_Symbol>} Symbols
         * @memberof GameMsg_TGW.TGW_ReelSetting
         * @instance
         */
        TGW_ReelSetting.prototype.Symbols = $util.emptyArray;

        /**
         * Creates a new TGW_ReelSetting instance using the specified properties.
         * @function create
         * @memberof GameMsg_TGW.TGW_ReelSetting
         * @static
         * @param {GameMsg_TGW.ITGW_ReelSetting=} [properties] Properties to set
         * @returns {GameMsg_TGW.TGW_ReelSetting} TGW_ReelSetting instance
         */
        TGW_ReelSetting.create = function create(properties) {
            return new TGW_ReelSetting(properties);
        };

        /**
         * Encodes the specified TGW_ReelSetting message. Does not implicitly {@link GameMsg_TGW.TGW_ReelSetting.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_TGW.TGW_ReelSetting
         * @static
         * @param {GameMsg_TGW.ITGW_ReelSetting} message TGW_ReelSetting message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TGW_ReelSetting.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.RealID != null && message.hasOwnProperty("RealID"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.RealID);
            if (message.Symbols != null && message.Symbols.length)
                for (var i = 0; i < message.Symbols.length; ++i)
                    $root.GameMsg_TGW.TGW_Symbol.encode(message.Symbols[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified TGW_ReelSetting message, length delimited. Does not implicitly {@link GameMsg_TGW.TGW_ReelSetting.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_TGW.TGW_ReelSetting
         * @static
         * @param {GameMsg_TGW.ITGW_ReelSetting} message TGW_ReelSetting message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TGW_ReelSetting.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TGW_ReelSetting message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_TGW.TGW_ReelSetting
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_TGW.TGW_ReelSetting} TGW_ReelSetting
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TGW_ReelSetting.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_TGW.TGW_ReelSetting();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.RealID = reader.int32();
                    break;
                case 2:
                    if (!(message.Symbols && message.Symbols.length))
                        message.Symbols = [];
                    message.Symbols.push($root.GameMsg_TGW.TGW_Symbol.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a TGW_ReelSetting message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_TGW.TGW_ReelSetting
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_TGW.TGW_ReelSetting} TGW_ReelSetting
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TGW_ReelSetting.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TGW_ReelSetting message.
         * @function verify
         * @memberof GameMsg_TGW.TGW_ReelSetting
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TGW_ReelSetting.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.RealID != null && message.hasOwnProperty("RealID"))
                if (!$util.isInteger(message.RealID))
                    return "RealID: integer expected";
            if (message.Symbols != null && message.hasOwnProperty("Symbols")) {
                if (!Array.isArray(message.Symbols))
                    return "Symbols: array expected";
                for (var i = 0; i < message.Symbols.length; ++i) {
                    var error = $root.GameMsg_TGW.TGW_Symbol.verify(message.Symbols[i]);
                    if (error)
                        return "Symbols." + error;
                }
            }
            return null;
        };

        /**
         * Creates a TGW_ReelSetting message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_TGW.TGW_ReelSetting
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_TGW.TGW_ReelSetting} TGW_ReelSetting
         */
        TGW_ReelSetting.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_TGW.TGW_ReelSetting)
                return object;
            var message = new $root.GameMsg_TGW.TGW_ReelSetting();
            if (object.RealID != null)
                message.RealID = object.RealID | 0;
            if (object.Symbols) {
                if (!Array.isArray(object.Symbols))
                    throw TypeError(".GameMsg_TGW.TGW_ReelSetting.Symbols: array expected");
                message.Symbols = [];
                for (var i = 0; i < object.Symbols.length; ++i) {
                    if (typeof object.Symbols[i] !== "object")
                        throw TypeError(".GameMsg_TGW.TGW_ReelSetting.Symbols: object expected");
                    message.Symbols[i] = $root.GameMsg_TGW.TGW_Symbol.fromObject(object.Symbols[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a TGW_ReelSetting message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_TGW.TGW_ReelSetting
         * @static
         * @param {GameMsg_TGW.TGW_ReelSetting} message TGW_ReelSetting
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TGW_ReelSetting.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.Symbols = [];
            if (options.defaults)
                object.RealID = 0;
            if (message.RealID != null && message.hasOwnProperty("RealID"))
                object.RealID = message.RealID;
            if (message.Symbols && message.Symbols.length) {
                object.Symbols = [];
                for (var j = 0; j < message.Symbols.length; ++j)
                    object.Symbols[j] = $root.GameMsg_TGW.TGW_Symbol.toObject(message.Symbols[j], options);
            }
            return object;
        };

        /**
         * Converts this TGW_ReelSetting to JSON.
         * @function toJSON
         * @memberof GameMsg_TGW.TGW_ReelSetting
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TGW_ReelSetting.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return TGW_ReelSetting;
    })();

    GameMsg_TGW.TGW_ReelResult = (function() {

        /**
         * Properties of a TGW_ReelResult.
         * @memberof GameMsg_TGW
         * @interface ITGW_ReelResult
         * @property {GameMsg_TGW.ITGW_ReelPosition|null} [Position] TGW_ReelResult Position
         * @property {GameMsg_TGW.ITGW_Symbol|null} [Symbol] TGW_ReelResult Symbol
         * @property {boolean|null} [Blink] TGW_ReelResult Blink
         */

        /**
         * Constructs a new TGW_ReelResult.
         * @memberof GameMsg_TGW
         * @classdesc Represents a TGW_ReelResult.
         * @implements ITGW_ReelResult
         * @constructor
         * @param {GameMsg_TGW.ITGW_ReelResult=} [properties] Properties to set
         */
        function TGW_ReelResult(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TGW_ReelResult Position.
         * @member {GameMsg_TGW.ITGW_ReelPosition|null|undefined} Position
         * @memberof GameMsg_TGW.TGW_ReelResult
         * @instance
         */
        TGW_ReelResult.prototype.Position = null;

        /**
         * TGW_ReelResult Symbol.
         * @member {GameMsg_TGW.ITGW_Symbol|null|undefined} Symbol
         * @memberof GameMsg_TGW.TGW_ReelResult
         * @instance
         */
        TGW_ReelResult.prototype.Symbol = null;

        /**
         * TGW_ReelResult Blink.
         * @member {boolean} Blink
         * @memberof GameMsg_TGW.TGW_ReelResult
         * @instance
         */
        TGW_ReelResult.prototype.Blink = false;

        /**
         * Creates a new TGW_ReelResult instance using the specified properties.
         * @function create
         * @memberof GameMsg_TGW.TGW_ReelResult
         * @static
         * @param {GameMsg_TGW.ITGW_ReelResult=} [properties] Properties to set
         * @returns {GameMsg_TGW.TGW_ReelResult} TGW_ReelResult instance
         */
        TGW_ReelResult.create = function create(properties) {
            return new TGW_ReelResult(properties);
        };

        /**
         * Encodes the specified TGW_ReelResult message. Does not implicitly {@link GameMsg_TGW.TGW_ReelResult.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_TGW.TGW_ReelResult
         * @static
         * @param {GameMsg_TGW.ITGW_ReelResult} message TGW_ReelResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TGW_ReelResult.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Position != null && message.hasOwnProperty("Position"))
                $root.GameMsg_TGW.TGW_ReelPosition.encode(message.Position, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.Symbol != null && message.hasOwnProperty("Symbol"))
                $root.GameMsg_TGW.TGW_Symbol.encode(message.Symbol, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.Blink != null && message.hasOwnProperty("Blink"))
                writer.uint32(/* id 3, wireType 0 =*/24).bool(message.Blink);
            return writer;
        };

        /**
         * Encodes the specified TGW_ReelResult message, length delimited. Does not implicitly {@link GameMsg_TGW.TGW_ReelResult.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_TGW.TGW_ReelResult
         * @static
         * @param {GameMsg_TGW.ITGW_ReelResult} message TGW_ReelResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TGW_ReelResult.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TGW_ReelResult message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_TGW.TGW_ReelResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_TGW.TGW_ReelResult} TGW_ReelResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TGW_ReelResult.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_TGW.TGW_ReelResult();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Position = $root.GameMsg_TGW.TGW_ReelPosition.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.Symbol = $root.GameMsg_TGW.TGW_Symbol.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.Blink = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a TGW_ReelResult message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_TGW.TGW_ReelResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_TGW.TGW_ReelResult} TGW_ReelResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TGW_ReelResult.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TGW_ReelResult message.
         * @function verify
         * @memberof GameMsg_TGW.TGW_ReelResult
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TGW_ReelResult.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Position != null && message.hasOwnProperty("Position")) {
                var error = $root.GameMsg_TGW.TGW_ReelPosition.verify(message.Position);
                if (error)
                    return "Position." + error;
            }
            if (message.Symbol != null && message.hasOwnProperty("Symbol")) {
                var error = $root.GameMsg_TGW.TGW_Symbol.verify(message.Symbol);
                if (error)
                    return "Symbol." + error;
            }
            if (message.Blink != null && message.hasOwnProperty("Blink"))
                if (typeof message.Blink !== "boolean")
                    return "Blink: boolean expected";
            return null;
        };

        /**
         * Creates a TGW_ReelResult message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_TGW.TGW_ReelResult
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_TGW.TGW_ReelResult} TGW_ReelResult
         */
        TGW_ReelResult.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_TGW.TGW_ReelResult)
                return object;
            var message = new $root.GameMsg_TGW.TGW_ReelResult();
            if (object.Position != null) {
                if (typeof object.Position !== "object")
                    throw TypeError(".GameMsg_TGW.TGW_ReelResult.Position: object expected");
                message.Position = $root.GameMsg_TGW.TGW_ReelPosition.fromObject(object.Position);
            }
            if (object.Symbol != null) {
                if (typeof object.Symbol !== "object")
                    throw TypeError(".GameMsg_TGW.TGW_ReelResult.Symbol: object expected");
                message.Symbol = $root.GameMsg_TGW.TGW_Symbol.fromObject(object.Symbol);
            }
            if (object.Blink != null)
                message.Blink = Boolean(object.Blink);
            return message;
        };

        /**
         * Creates a plain object from a TGW_ReelResult message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_TGW.TGW_ReelResult
         * @static
         * @param {GameMsg_TGW.TGW_ReelResult} message TGW_ReelResult
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TGW_ReelResult.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.Position = null;
                object.Symbol = null;
                object.Blink = false;
            }
            if (message.Position != null && message.hasOwnProperty("Position"))
                object.Position = $root.GameMsg_TGW.TGW_ReelPosition.toObject(message.Position, options);
            if (message.Symbol != null && message.hasOwnProperty("Symbol"))
                object.Symbol = $root.GameMsg_TGW.TGW_Symbol.toObject(message.Symbol, options);
            if (message.Blink != null && message.hasOwnProperty("Blink"))
                object.Blink = message.Blink;
            return object;
        };

        /**
         * Converts this TGW_ReelResult to JSON.
         * @function toJSON
         * @memberof GameMsg_TGW.TGW_ReelResult
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TGW_ReelResult.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return TGW_ReelResult;
    })();

    GameMsg_TGW.TGW_Symbol = (function() {

        /**
         * Properties of a TGW_Symbol.
         * @memberof GameMsg_TGW
         * @interface ITGW_Symbol
         * @property {number|null} [SymbolID] TGW_Symbol SymbolID
         * @property {string|null} [SymbolName] TGW_Symbol SymbolName
         */

        /**
         * Constructs a new TGW_Symbol.
         * @memberof GameMsg_TGW
         * @classdesc Represents a TGW_Symbol.
         * @implements ITGW_Symbol
         * @constructor
         * @param {GameMsg_TGW.ITGW_Symbol=} [properties] Properties to set
         */
        function TGW_Symbol(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TGW_Symbol SymbolID.
         * @member {number} SymbolID
         * @memberof GameMsg_TGW.TGW_Symbol
         * @instance
         */
        TGW_Symbol.prototype.SymbolID = 0;

        /**
         * TGW_Symbol SymbolName.
         * @member {string} SymbolName
         * @memberof GameMsg_TGW.TGW_Symbol
         * @instance
         */
        TGW_Symbol.prototype.SymbolName = "";

        /**
         * Creates a new TGW_Symbol instance using the specified properties.
         * @function create
         * @memberof GameMsg_TGW.TGW_Symbol
         * @static
         * @param {GameMsg_TGW.ITGW_Symbol=} [properties] Properties to set
         * @returns {GameMsg_TGW.TGW_Symbol} TGW_Symbol instance
         */
        TGW_Symbol.create = function create(properties) {
            return new TGW_Symbol(properties);
        };

        /**
         * Encodes the specified TGW_Symbol message. Does not implicitly {@link GameMsg_TGW.TGW_Symbol.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_TGW.TGW_Symbol
         * @static
         * @param {GameMsg_TGW.ITGW_Symbol} message TGW_Symbol message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TGW_Symbol.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.SymbolID != null && message.hasOwnProperty("SymbolID"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.SymbolID);
            if (message.SymbolName != null && message.hasOwnProperty("SymbolName"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.SymbolName);
            return writer;
        };

        /**
         * Encodes the specified TGW_Symbol message, length delimited. Does not implicitly {@link GameMsg_TGW.TGW_Symbol.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_TGW.TGW_Symbol
         * @static
         * @param {GameMsg_TGW.ITGW_Symbol} message TGW_Symbol message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TGW_Symbol.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TGW_Symbol message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_TGW.TGW_Symbol
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_TGW.TGW_Symbol} TGW_Symbol
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TGW_Symbol.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_TGW.TGW_Symbol();
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
            return message;
        };

        /**
         * Decodes a TGW_Symbol message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_TGW.TGW_Symbol
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_TGW.TGW_Symbol} TGW_Symbol
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TGW_Symbol.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TGW_Symbol message.
         * @function verify
         * @memberof GameMsg_TGW.TGW_Symbol
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TGW_Symbol.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.SymbolID != null && message.hasOwnProperty("SymbolID"))
                if (!$util.isInteger(message.SymbolID))
                    return "SymbolID: integer expected";
            if (message.SymbolName != null && message.hasOwnProperty("SymbolName"))
                if (!$util.isString(message.SymbolName))
                    return "SymbolName: string expected";
            return null;
        };

        /**
         * Creates a TGW_Symbol message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_TGW.TGW_Symbol
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_TGW.TGW_Symbol} TGW_Symbol
         */
        TGW_Symbol.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_TGW.TGW_Symbol)
                return object;
            var message = new $root.GameMsg_TGW.TGW_Symbol();
            if (object.SymbolID != null)
                message.SymbolID = object.SymbolID | 0;
            if (object.SymbolName != null)
                message.SymbolName = String(object.SymbolName);
            return message;
        };

        /**
         * Creates a plain object from a TGW_Symbol message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_TGW.TGW_Symbol
         * @static
         * @param {GameMsg_TGW.TGW_Symbol} message TGW_Symbol
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TGW_Symbol.toObject = function toObject(message, options) {
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
         * Converts this TGW_Symbol to JSON.
         * @function toJSON
         * @memberof GameMsg_TGW.TGW_Symbol
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TGW_Symbol.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return TGW_Symbol;
    })();

    GameMsg_TGW.TGW_SymbolPayTable = (function() {

        /**
         * Properties of a TGW_SymbolPayTable.
         * @memberof GameMsg_TGW
         * @interface ITGW_SymbolPayTable
         * @property {GameMsg_TGW.ITGW_Symbol|null} [Symbol] TGW_SymbolPayTable Symbol
         * @property {number|null} [Count] TGW_SymbolPayTable Count
         * @property {string|null} [Type] TGW_SymbolPayTable Type
         * @property {number|null} [Payout] TGW_SymbolPayTable Payout
         * @property {string|null} [Title] TGW_SymbolPayTable Title
         * @property {string|null} [Desc] TGW_SymbolPayTable Desc
         */

        /**
         * Constructs a new TGW_SymbolPayTable.
         * @memberof GameMsg_TGW
         * @classdesc Represents a TGW_SymbolPayTable.
         * @implements ITGW_SymbolPayTable
         * @constructor
         * @param {GameMsg_TGW.ITGW_SymbolPayTable=} [properties] Properties to set
         */
        function TGW_SymbolPayTable(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TGW_SymbolPayTable Symbol.
         * @member {GameMsg_TGW.ITGW_Symbol|null|undefined} Symbol
         * @memberof GameMsg_TGW.TGW_SymbolPayTable
         * @instance
         */
        TGW_SymbolPayTable.prototype.Symbol = null;

        /**
         * TGW_SymbolPayTable Count.
         * @member {number} Count
         * @memberof GameMsg_TGW.TGW_SymbolPayTable
         * @instance
         */
        TGW_SymbolPayTable.prototype.Count = 0;

        /**
         * TGW_SymbolPayTable Type.
         * @member {string} Type
         * @memberof GameMsg_TGW.TGW_SymbolPayTable
         * @instance
         */
        TGW_SymbolPayTable.prototype.Type = "";

        /**
         * TGW_SymbolPayTable Payout.
         * @member {number} Payout
         * @memberof GameMsg_TGW.TGW_SymbolPayTable
         * @instance
         */
        TGW_SymbolPayTable.prototype.Payout = 0;

        /**
         * TGW_SymbolPayTable Title.
         * @member {string} Title
         * @memberof GameMsg_TGW.TGW_SymbolPayTable
         * @instance
         */
        TGW_SymbolPayTable.prototype.Title = "";

        /**
         * TGW_SymbolPayTable Desc.
         * @member {string} Desc
         * @memberof GameMsg_TGW.TGW_SymbolPayTable
         * @instance
         */
        TGW_SymbolPayTable.prototype.Desc = "";

        /**
         * Creates a new TGW_SymbolPayTable instance using the specified properties.
         * @function create
         * @memberof GameMsg_TGW.TGW_SymbolPayTable
         * @static
         * @param {GameMsg_TGW.ITGW_SymbolPayTable=} [properties] Properties to set
         * @returns {GameMsg_TGW.TGW_SymbolPayTable} TGW_SymbolPayTable instance
         */
        TGW_SymbolPayTable.create = function create(properties) {
            return new TGW_SymbolPayTable(properties);
        };

        /**
         * Encodes the specified TGW_SymbolPayTable message. Does not implicitly {@link GameMsg_TGW.TGW_SymbolPayTable.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_TGW.TGW_SymbolPayTable
         * @static
         * @param {GameMsg_TGW.ITGW_SymbolPayTable} message TGW_SymbolPayTable message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TGW_SymbolPayTable.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Symbol != null && message.hasOwnProperty("Symbol"))
                $root.GameMsg_TGW.TGW_Symbol.encode(message.Symbol, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.Count != null && message.hasOwnProperty("Count"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.Count);
            if (message.Type != null && message.hasOwnProperty("Type"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.Type);
            if (message.Payout != null && message.hasOwnProperty("Payout"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.Payout);
            if (message.Title != null && message.hasOwnProperty("Title"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.Title);
            if (message.Desc != null && message.hasOwnProperty("Desc"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.Desc);
            return writer;
        };

        /**
         * Encodes the specified TGW_SymbolPayTable message, length delimited. Does not implicitly {@link GameMsg_TGW.TGW_SymbolPayTable.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_TGW.TGW_SymbolPayTable
         * @static
         * @param {GameMsg_TGW.ITGW_SymbolPayTable} message TGW_SymbolPayTable message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TGW_SymbolPayTable.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TGW_SymbolPayTable message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_TGW.TGW_SymbolPayTable
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_TGW.TGW_SymbolPayTable} TGW_SymbolPayTable
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TGW_SymbolPayTable.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_TGW.TGW_SymbolPayTable();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Symbol = $root.GameMsg_TGW.TGW_Symbol.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.Count = reader.int32();
                    break;
                case 3:
                    message.Type = reader.string();
                    break;
                case 4:
                    message.Payout = reader.int32();
                    break;
                case 5:
                    message.Title = reader.string();
                    break;
                case 6:
                    message.Desc = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a TGW_SymbolPayTable message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_TGW.TGW_SymbolPayTable
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_TGW.TGW_SymbolPayTable} TGW_SymbolPayTable
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TGW_SymbolPayTable.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TGW_SymbolPayTable message.
         * @function verify
         * @memberof GameMsg_TGW.TGW_SymbolPayTable
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TGW_SymbolPayTable.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Symbol != null && message.hasOwnProperty("Symbol")) {
                var error = $root.GameMsg_TGW.TGW_Symbol.verify(message.Symbol);
                if (error)
                    return "Symbol." + error;
            }
            if (message.Count != null && message.hasOwnProperty("Count"))
                if (!$util.isInteger(message.Count))
                    return "Count: integer expected";
            if (message.Type != null && message.hasOwnProperty("Type"))
                if (!$util.isString(message.Type))
                    return "Type: string expected";
            if (message.Payout != null && message.hasOwnProperty("Payout"))
                if (!$util.isInteger(message.Payout))
                    return "Payout: integer expected";
            if (message.Title != null && message.hasOwnProperty("Title"))
                if (!$util.isString(message.Title))
                    return "Title: string expected";
            if (message.Desc != null && message.hasOwnProperty("Desc"))
                if (!$util.isString(message.Desc))
                    return "Desc: string expected";
            return null;
        };

        /**
         * Creates a TGW_SymbolPayTable message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_TGW.TGW_SymbolPayTable
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_TGW.TGW_SymbolPayTable} TGW_SymbolPayTable
         */
        TGW_SymbolPayTable.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_TGW.TGW_SymbolPayTable)
                return object;
            var message = new $root.GameMsg_TGW.TGW_SymbolPayTable();
            if (object.Symbol != null) {
                if (typeof object.Symbol !== "object")
                    throw TypeError(".GameMsg_TGW.TGW_SymbolPayTable.Symbol: object expected");
                message.Symbol = $root.GameMsg_TGW.TGW_Symbol.fromObject(object.Symbol);
            }
            if (object.Count != null)
                message.Count = object.Count | 0;
            if (object.Type != null)
                message.Type = String(object.Type);
            if (object.Payout != null)
                message.Payout = object.Payout | 0;
            if (object.Title != null)
                message.Title = String(object.Title);
            if (object.Desc != null)
                message.Desc = String(object.Desc);
            return message;
        };

        /**
         * Creates a plain object from a TGW_SymbolPayTable message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_TGW.TGW_SymbolPayTable
         * @static
         * @param {GameMsg_TGW.TGW_SymbolPayTable} message TGW_SymbolPayTable
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TGW_SymbolPayTable.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.Symbol = null;
                object.Count = 0;
                object.Type = "";
                object.Payout = 0;
                object.Title = "";
                object.Desc = "";
            }
            if (message.Symbol != null && message.hasOwnProperty("Symbol"))
                object.Symbol = $root.GameMsg_TGW.TGW_Symbol.toObject(message.Symbol, options);
            if (message.Count != null && message.hasOwnProperty("Count"))
                object.Count = message.Count;
            if (message.Type != null && message.hasOwnProperty("Type"))
                object.Type = message.Type;
            if (message.Payout != null && message.hasOwnProperty("Payout"))
                object.Payout = message.Payout;
            if (message.Title != null && message.hasOwnProperty("Title"))
                object.Title = message.Title;
            if (message.Desc != null && message.hasOwnProperty("Desc"))
                object.Desc = message.Desc;
            return object;
        };

        /**
         * Converts this TGW_SymbolPayTable to JSON.
         * @function toJSON
         * @memberof GameMsg_TGW.TGW_SymbolPayTable
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TGW_SymbolPayTable.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return TGW_SymbolPayTable;
    })();

    GameMsg_TGW.TGW_PayLine = (function() {

        /**
         * Properties of a TGW_PayLine.
         * @memberof GameMsg_TGW
         * @interface ITGW_PayLine
         * @property {number|null} [PayLineID] TGW_PayLine PayLineID
         * @property {Array.<GameMsg_TGW.ITGW_ReelPosition>|null} [Positions] TGW_PayLine Positions
         */

        /**
         * Constructs a new TGW_PayLine.
         * @memberof GameMsg_TGW
         * @classdesc Represents a TGW_PayLine.
         * @implements ITGW_PayLine
         * @constructor
         * @param {GameMsg_TGW.ITGW_PayLine=} [properties] Properties to set
         */
        function TGW_PayLine(properties) {
            this.Positions = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TGW_PayLine PayLineID.
         * @member {number} PayLineID
         * @memberof GameMsg_TGW.TGW_PayLine
         * @instance
         */
        TGW_PayLine.prototype.PayLineID = 0;

        /**
         * TGW_PayLine Positions.
         * @member {Array.<GameMsg_TGW.ITGW_ReelPosition>} Positions
         * @memberof GameMsg_TGW.TGW_PayLine
         * @instance
         */
        TGW_PayLine.prototype.Positions = $util.emptyArray;

        /**
         * Creates a new TGW_PayLine instance using the specified properties.
         * @function create
         * @memberof GameMsg_TGW.TGW_PayLine
         * @static
         * @param {GameMsg_TGW.ITGW_PayLine=} [properties] Properties to set
         * @returns {GameMsg_TGW.TGW_PayLine} TGW_PayLine instance
         */
        TGW_PayLine.create = function create(properties) {
            return new TGW_PayLine(properties);
        };

        /**
         * Encodes the specified TGW_PayLine message. Does not implicitly {@link GameMsg_TGW.TGW_PayLine.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_TGW.TGW_PayLine
         * @static
         * @param {GameMsg_TGW.ITGW_PayLine} message TGW_PayLine message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TGW_PayLine.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.PayLineID != null && message.hasOwnProperty("PayLineID"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.PayLineID);
            if (message.Positions != null && message.Positions.length)
                for (var i = 0; i < message.Positions.length; ++i)
                    $root.GameMsg_TGW.TGW_ReelPosition.encode(message.Positions[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified TGW_PayLine message, length delimited. Does not implicitly {@link GameMsg_TGW.TGW_PayLine.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_TGW.TGW_PayLine
         * @static
         * @param {GameMsg_TGW.ITGW_PayLine} message TGW_PayLine message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TGW_PayLine.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TGW_PayLine message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_TGW.TGW_PayLine
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_TGW.TGW_PayLine} TGW_PayLine
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TGW_PayLine.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_TGW.TGW_PayLine();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.PayLineID = reader.int32();
                    break;
                case 2:
                    if (!(message.Positions && message.Positions.length))
                        message.Positions = [];
                    message.Positions.push($root.GameMsg_TGW.TGW_ReelPosition.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a TGW_PayLine message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_TGW.TGW_PayLine
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_TGW.TGW_PayLine} TGW_PayLine
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TGW_PayLine.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TGW_PayLine message.
         * @function verify
         * @memberof GameMsg_TGW.TGW_PayLine
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TGW_PayLine.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.PayLineID != null && message.hasOwnProperty("PayLineID"))
                if (!$util.isInteger(message.PayLineID))
                    return "PayLineID: integer expected";
            if (message.Positions != null && message.hasOwnProperty("Positions")) {
                if (!Array.isArray(message.Positions))
                    return "Positions: array expected";
                for (var i = 0; i < message.Positions.length; ++i) {
                    var error = $root.GameMsg_TGW.TGW_ReelPosition.verify(message.Positions[i]);
                    if (error)
                        return "Positions." + error;
                }
            }
            return null;
        };

        /**
         * Creates a TGW_PayLine message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_TGW.TGW_PayLine
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_TGW.TGW_PayLine} TGW_PayLine
         */
        TGW_PayLine.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_TGW.TGW_PayLine)
                return object;
            var message = new $root.GameMsg_TGW.TGW_PayLine();
            if (object.PayLineID != null)
                message.PayLineID = object.PayLineID | 0;
            if (object.Positions) {
                if (!Array.isArray(object.Positions))
                    throw TypeError(".GameMsg_TGW.TGW_PayLine.Positions: array expected");
                message.Positions = [];
                for (var i = 0; i < object.Positions.length; ++i) {
                    if (typeof object.Positions[i] !== "object")
                        throw TypeError(".GameMsg_TGW.TGW_PayLine.Positions: object expected");
                    message.Positions[i] = $root.GameMsg_TGW.TGW_ReelPosition.fromObject(object.Positions[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a TGW_PayLine message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_TGW.TGW_PayLine
         * @static
         * @param {GameMsg_TGW.TGW_PayLine} message TGW_PayLine
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TGW_PayLine.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.Positions = [];
            if (options.defaults)
                object.PayLineID = 0;
            if (message.PayLineID != null && message.hasOwnProperty("PayLineID"))
                object.PayLineID = message.PayLineID;
            if (message.Positions && message.Positions.length) {
                object.Positions = [];
                for (var j = 0; j < message.Positions.length; ++j)
                    object.Positions[j] = $root.GameMsg_TGW.TGW_ReelPosition.toObject(message.Positions[j], options);
            }
            return object;
        };

        /**
         * Converts this TGW_PayLine to JSON.
         * @function toJSON
         * @memberof GameMsg_TGW.TGW_PayLine
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TGW_PayLine.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return TGW_PayLine;
    })();

    GameMsg_TGW.TGW_ReelPosition = (function() {

        /**
         * Properties of a TGW_ReelPosition.
         * @memberof GameMsg_TGW
         * @interface ITGW_ReelPosition
         * @property {number|null} [Reel] TGW_ReelPosition Reel
         * @property {number|null} [Row] TGW_ReelPosition Row
         */

        /**
         * Constructs a new TGW_ReelPosition.
         * @memberof GameMsg_TGW
         * @classdesc Represents a TGW_ReelPosition.
         * @implements ITGW_ReelPosition
         * @constructor
         * @param {GameMsg_TGW.ITGW_ReelPosition=} [properties] Properties to set
         */
        function TGW_ReelPosition(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TGW_ReelPosition Reel.
         * @member {number} Reel
         * @memberof GameMsg_TGW.TGW_ReelPosition
         * @instance
         */
        TGW_ReelPosition.prototype.Reel = 0;

        /**
         * TGW_ReelPosition Row.
         * @member {number} Row
         * @memberof GameMsg_TGW.TGW_ReelPosition
         * @instance
         */
        TGW_ReelPosition.prototype.Row = 0;

        /**
         * Creates a new TGW_ReelPosition instance using the specified properties.
         * @function create
         * @memberof GameMsg_TGW.TGW_ReelPosition
         * @static
         * @param {GameMsg_TGW.ITGW_ReelPosition=} [properties] Properties to set
         * @returns {GameMsg_TGW.TGW_ReelPosition} TGW_ReelPosition instance
         */
        TGW_ReelPosition.create = function create(properties) {
            return new TGW_ReelPosition(properties);
        };

        /**
         * Encodes the specified TGW_ReelPosition message. Does not implicitly {@link GameMsg_TGW.TGW_ReelPosition.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_TGW.TGW_ReelPosition
         * @static
         * @param {GameMsg_TGW.ITGW_ReelPosition} message TGW_ReelPosition message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TGW_ReelPosition.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Reel != null && message.hasOwnProperty("Reel"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.Reel);
            if (message.Row != null && message.hasOwnProperty("Row"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.Row);
            return writer;
        };

        /**
         * Encodes the specified TGW_ReelPosition message, length delimited. Does not implicitly {@link GameMsg_TGW.TGW_ReelPosition.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_TGW.TGW_ReelPosition
         * @static
         * @param {GameMsg_TGW.ITGW_ReelPosition} message TGW_ReelPosition message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TGW_ReelPosition.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TGW_ReelPosition message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_TGW.TGW_ReelPosition
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_TGW.TGW_ReelPosition} TGW_ReelPosition
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TGW_ReelPosition.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_TGW.TGW_ReelPosition();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Reel = reader.int32();
                    break;
                case 2:
                    message.Row = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a TGW_ReelPosition message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_TGW.TGW_ReelPosition
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_TGW.TGW_ReelPosition} TGW_ReelPosition
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TGW_ReelPosition.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TGW_ReelPosition message.
         * @function verify
         * @memberof GameMsg_TGW.TGW_ReelPosition
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TGW_ReelPosition.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Reel != null && message.hasOwnProperty("Reel"))
                if (!$util.isInteger(message.Reel))
                    return "Reel: integer expected";
            if (message.Row != null && message.hasOwnProperty("Row"))
                if (!$util.isInteger(message.Row))
                    return "Row: integer expected";
            return null;
        };

        /**
         * Creates a TGW_ReelPosition message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_TGW.TGW_ReelPosition
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_TGW.TGW_ReelPosition} TGW_ReelPosition
         */
        TGW_ReelPosition.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_TGW.TGW_ReelPosition)
                return object;
            var message = new $root.GameMsg_TGW.TGW_ReelPosition();
            if (object.Reel != null)
                message.Reel = object.Reel | 0;
            if (object.Row != null)
                message.Row = object.Row | 0;
            return message;
        };

        /**
         * Creates a plain object from a TGW_ReelPosition message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_TGW.TGW_ReelPosition
         * @static
         * @param {GameMsg_TGW.TGW_ReelPosition} message TGW_ReelPosition
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TGW_ReelPosition.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.Reel = 0;
                object.Row = 0;
            }
            if (message.Reel != null && message.hasOwnProperty("Reel"))
                object.Reel = message.Reel;
            if (message.Row != null && message.hasOwnProperty("Row"))
                object.Row = message.Row;
            return object;
        };

        /**
         * Converts this TGW_ReelPosition to JSON.
         * @function toJSON
         * @memberof GameMsg_TGW.TGW_ReelPosition
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TGW_ReelPosition.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return TGW_ReelPosition;
    })();

    GameMsg_TGW.TGW_PayGroup = (function() {

        /**
         * Properties of a TGW_PayGroup.
         * @memberof GameMsg_TGW
         * @interface ITGW_PayGroup
         * @property {GameMsg_TGW.ITGW_PayLine|null} [PayLines] TGW_PayGroup PayLines
         * @property {number|Long|null} [WinMoney] TGW_PayGroup WinMoney
         */

        /**
         * Constructs a new TGW_PayGroup.
         * @memberof GameMsg_TGW
         * @classdesc Represents a TGW_PayGroup.
         * @implements ITGW_PayGroup
         * @constructor
         * @param {GameMsg_TGW.ITGW_PayGroup=} [properties] Properties to set
         */
        function TGW_PayGroup(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TGW_PayGroup PayLines.
         * @member {GameMsg_TGW.ITGW_PayLine|null|undefined} PayLines
         * @memberof GameMsg_TGW.TGW_PayGroup
         * @instance
         */
        TGW_PayGroup.prototype.PayLines = null;

        /**
         * TGW_PayGroup WinMoney.
         * @member {number|Long} WinMoney
         * @memberof GameMsg_TGW.TGW_PayGroup
         * @instance
         */
        TGW_PayGroup.prototype.WinMoney = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new TGW_PayGroup instance using the specified properties.
         * @function create
         * @memberof GameMsg_TGW.TGW_PayGroup
         * @static
         * @param {GameMsg_TGW.ITGW_PayGroup=} [properties] Properties to set
         * @returns {GameMsg_TGW.TGW_PayGroup} TGW_PayGroup instance
         */
        TGW_PayGroup.create = function create(properties) {
            return new TGW_PayGroup(properties);
        };

        /**
         * Encodes the specified TGW_PayGroup message. Does not implicitly {@link GameMsg_TGW.TGW_PayGroup.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_TGW.TGW_PayGroup
         * @static
         * @param {GameMsg_TGW.ITGW_PayGroup} message TGW_PayGroup message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TGW_PayGroup.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.PayLines != null && message.hasOwnProperty("PayLines"))
                $root.GameMsg_TGW.TGW_PayLine.encode(message.PayLines, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.WinMoney != null && message.hasOwnProperty("WinMoney"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.WinMoney);
            return writer;
        };

        /**
         * Encodes the specified TGW_PayGroup message, length delimited. Does not implicitly {@link GameMsg_TGW.TGW_PayGroup.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_TGW.TGW_PayGroup
         * @static
         * @param {GameMsg_TGW.ITGW_PayGroup} message TGW_PayGroup message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TGW_PayGroup.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TGW_PayGroup message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_TGW.TGW_PayGroup
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_TGW.TGW_PayGroup} TGW_PayGroup
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TGW_PayGroup.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_TGW.TGW_PayGroup();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.PayLines = $root.GameMsg_TGW.TGW_PayLine.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.WinMoney = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a TGW_PayGroup message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_TGW.TGW_PayGroup
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_TGW.TGW_PayGroup} TGW_PayGroup
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TGW_PayGroup.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TGW_PayGroup message.
         * @function verify
         * @memberof GameMsg_TGW.TGW_PayGroup
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TGW_PayGroup.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.PayLines != null && message.hasOwnProperty("PayLines")) {
                var error = $root.GameMsg_TGW.TGW_PayLine.verify(message.PayLines);
                if (error)
                    return "PayLines." + error;
            }
            if (message.WinMoney != null && message.hasOwnProperty("WinMoney"))
                if (!$util.isInteger(message.WinMoney) && !(message.WinMoney && $util.isInteger(message.WinMoney.low) && $util.isInteger(message.WinMoney.high)))
                    return "WinMoney: integer|Long expected";
            return null;
        };

        /**
         * Creates a TGW_PayGroup message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_TGW.TGW_PayGroup
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_TGW.TGW_PayGroup} TGW_PayGroup
         */
        TGW_PayGroup.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_TGW.TGW_PayGroup)
                return object;
            var message = new $root.GameMsg_TGW.TGW_PayGroup();
            if (object.PayLines != null) {
                if (typeof object.PayLines !== "object")
                    throw TypeError(".GameMsg_TGW.TGW_PayGroup.PayLines: object expected");
                message.PayLines = $root.GameMsg_TGW.TGW_PayLine.fromObject(object.PayLines);
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
            return message;
        };

        /**
         * Creates a plain object from a TGW_PayGroup message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_TGW.TGW_PayGroup
         * @static
         * @param {GameMsg_TGW.TGW_PayGroup} message TGW_PayGroup
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TGW_PayGroup.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.PayLines = null;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.WinMoney = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.WinMoney = options.longs === String ? "0" : 0;
            }
            if (message.PayLines != null && message.hasOwnProperty("PayLines"))
                object.PayLines = $root.GameMsg_TGW.TGW_PayLine.toObject(message.PayLines, options);
            if (message.WinMoney != null && message.hasOwnProperty("WinMoney"))
                if (typeof message.WinMoney === "number")
                    object.WinMoney = options.longs === String ? String(message.WinMoney) : message.WinMoney;
                else
                    object.WinMoney = options.longs === String ? $util.Long.prototype.toString.call(message.WinMoney) : options.longs === Number ? new $util.LongBits(message.WinMoney.low >>> 0, message.WinMoney.high >>> 0).toNumber() : message.WinMoney;
            return object;
        };

        /**
         * Converts this TGW_PayGroup to JSON.
         * @function toJSON
         * @memberof GameMsg_TGW.TGW_PayGroup
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TGW_PayGroup.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return TGW_PayGroup;
    })();

    GameMsg_TGW.TGW_BonusGameRecord = (function() {

        /**
         * Properties of a TGW_BonusGameRecord.
         * @memberof GameMsg_TGW
         * @interface ITGW_BonusGameRecord
         * @property {number|null} [ID] TGW_BonusGameRecord ID
         * @property {number|null} [Location] TGW_BonusGameRecord Location
         * @property {number|Long|null} [RewareValue] TGW_BonusGameRecord RewareValue
         * @property {number|null} [BonusID] TGW_BonusGameRecord BonusID
         */

        /**
         * Constructs a new TGW_BonusGameRecord.
         * @memberof GameMsg_TGW
         * @classdesc Represents a TGW_BonusGameRecord.
         * @implements ITGW_BonusGameRecord
         * @constructor
         * @param {GameMsg_TGW.ITGW_BonusGameRecord=} [properties] Properties to set
         */
        function TGW_BonusGameRecord(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TGW_BonusGameRecord ID.
         * @member {number} ID
         * @memberof GameMsg_TGW.TGW_BonusGameRecord
         * @instance
         */
        TGW_BonusGameRecord.prototype.ID = 0;

        /**
         * TGW_BonusGameRecord Location.
         * @member {number} Location
         * @memberof GameMsg_TGW.TGW_BonusGameRecord
         * @instance
         */
        TGW_BonusGameRecord.prototype.Location = 0;

        /**
         * TGW_BonusGameRecord RewareValue.
         * @member {number|Long} RewareValue
         * @memberof GameMsg_TGW.TGW_BonusGameRecord
         * @instance
         */
        TGW_BonusGameRecord.prototype.RewareValue = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * TGW_BonusGameRecord BonusID.
         * @member {number} BonusID
         * @memberof GameMsg_TGW.TGW_BonusGameRecord
         * @instance
         */
        TGW_BonusGameRecord.prototype.BonusID = 0;

        /**
         * Creates a new TGW_BonusGameRecord instance using the specified properties.
         * @function create
         * @memberof GameMsg_TGW.TGW_BonusGameRecord
         * @static
         * @param {GameMsg_TGW.ITGW_BonusGameRecord=} [properties] Properties to set
         * @returns {GameMsg_TGW.TGW_BonusGameRecord} TGW_BonusGameRecord instance
         */
        TGW_BonusGameRecord.create = function create(properties) {
            return new TGW_BonusGameRecord(properties);
        };

        /**
         * Encodes the specified TGW_BonusGameRecord message. Does not implicitly {@link GameMsg_TGW.TGW_BonusGameRecord.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_TGW.TGW_BonusGameRecord
         * @static
         * @param {GameMsg_TGW.ITGW_BonusGameRecord} message TGW_BonusGameRecord message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TGW_BonusGameRecord.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.ID != null && message.hasOwnProperty("ID"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.ID);
            if (message.Location != null && message.hasOwnProperty("Location"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.Location);
            if (message.RewareValue != null && message.hasOwnProperty("RewareValue"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.RewareValue);
            if (message.BonusID != null && message.hasOwnProperty("BonusID"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.BonusID);
            return writer;
        };

        /**
         * Encodes the specified TGW_BonusGameRecord message, length delimited. Does not implicitly {@link GameMsg_TGW.TGW_BonusGameRecord.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_TGW.TGW_BonusGameRecord
         * @static
         * @param {GameMsg_TGW.ITGW_BonusGameRecord} message TGW_BonusGameRecord message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TGW_BonusGameRecord.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TGW_BonusGameRecord message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_TGW.TGW_BonusGameRecord
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_TGW.TGW_BonusGameRecord} TGW_BonusGameRecord
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TGW_BonusGameRecord.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_TGW.TGW_BonusGameRecord();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.ID = reader.int32();
                    break;
                case 2:
                    message.Location = reader.int32();
                    break;
                case 3:
                    message.RewareValue = reader.int64();
                    break;
                case 4:
                    message.BonusID = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a TGW_BonusGameRecord message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_TGW.TGW_BonusGameRecord
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_TGW.TGW_BonusGameRecord} TGW_BonusGameRecord
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TGW_BonusGameRecord.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TGW_BonusGameRecord message.
         * @function verify
         * @memberof GameMsg_TGW.TGW_BonusGameRecord
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TGW_BonusGameRecord.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.ID != null && message.hasOwnProperty("ID"))
                if (!$util.isInteger(message.ID))
                    return "ID: integer expected";
            if (message.Location != null && message.hasOwnProperty("Location"))
                if (!$util.isInteger(message.Location))
                    return "Location: integer expected";
            if (message.RewareValue != null && message.hasOwnProperty("RewareValue"))
                if (!$util.isInteger(message.RewareValue) && !(message.RewareValue && $util.isInteger(message.RewareValue.low) && $util.isInteger(message.RewareValue.high)))
                    return "RewareValue: integer|Long expected";
            if (message.BonusID != null && message.hasOwnProperty("BonusID"))
                if (!$util.isInteger(message.BonusID))
                    return "BonusID: integer expected";
            return null;
        };

        /**
         * Creates a TGW_BonusGameRecord message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_TGW.TGW_BonusGameRecord
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_TGW.TGW_BonusGameRecord} TGW_BonusGameRecord
         */
        TGW_BonusGameRecord.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_TGW.TGW_BonusGameRecord)
                return object;
            var message = new $root.GameMsg_TGW.TGW_BonusGameRecord();
            if (object.ID != null)
                message.ID = object.ID | 0;
            if (object.Location != null)
                message.Location = object.Location | 0;
            if (object.RewareValue != null)
                if ($util.Long)
                    (message.RewareValue = $util.Long.fromValue(object.RewareValue)).unsigned = false;
                else if (typeof object.RewareValue === "string")
                    message.RewareValue = parseInt(object.RewareValue, 10);
                else if (typeof object.RewareValue === "number")
                    message.RewareValue = object.RewareValue;
                else if (typeof object.RewareValue === "object")
                    message.RewareValue = new $util.LongBits(object.RewareValue.low >>> 0, object.RewareValue.high >>> 0).toNumber();
            if (object.BonusID != null)
                message.BonusID = object.BonusID | 0;
            return message;
        };

        /**
         * Creates a plain object from a TGW_BonusGameRecord message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_TGW.TGW_BonusGameRecord
         * @static
         * @param {GameMsg_TGW.TGW_BonusGameRecord} message TGW_BonusGameRecord
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TGW_BonusGameRecord.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.ID = 0;
                object.Location = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.RewareValue = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.RewareValue = options.longs === String ? "0" : 0;
                object.BonusID = 0;
            }
            if (message.ID != null && message.hasOwnProperty("ID"))
                object.ID = message.ID;
            if (message.Location != null && message.hasOwnProperty("Location"))
                object.Location = message.Location;
            if (message.RewareValue != null && message.hasOwnProperty("RewareValue"))
                if (typeof message.RewareValue === "number")
                    object.RewareValue = options.longs === String ? String(message.RewareValue) : message.RewareValue;
                else
                    object.RewareValue = options.longs === String ? $util.Long.prototype.toString.call(message.RewareValue) : options.longs === Number ? new $util.LongBits(message.RewareValue.low >>> 0, message.RewareValue.high >>> 0).toNumber() : message.RewareValue;
            if (message.BonusID != null && message.hasOwnProperty("BonusID"))
                object.BonusID = message.BonusID;
            return object;
        };

        /**
         * Converts this TGW_BonusGameRecord to JSON.
         * @function toJSON
         * @memberof GameMsg_TGW.TGW_BonusGameRecord
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TGW_BonusGameRecord.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return TGW_BonusGameRecord;
    })();

    GameMsg_TGW.TGW_UnitPrefix = (function() {

        /**
         * Properties of a TGW_UnitPrefix.
         * @memberof GameMsg_TGW
         * @interface ITGW_UnitPrefix
         * @property {string|null} [Name] TGW_UnitPrefix Name
         * @property {number|Long|null} [Multiple] TGW_UnitPrefix Multiple
         */

        /**
         * Constructs a new TGW_UnitPrefix.
         * @memberof GameMsg_TGW
         * @classdesc Represents a TGW_UnitPrefix.
         * @implements ITGW_UnitPrefix
         * @constructor
         * @param {GameMsg_TGW.ITGW_UnitPrefix=} [properties] Properties to set
         */
        function TGW_UnitPrefix(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TGW_UnitPrefix Name.
         * @member {string} Name
         * @memberof GameMsg_TGW.TGW_UnitPrefix
         * @instance
         */
        TGW_UnitPrefix.prototype.Name = "";

        /**
         * TGW_UnitPrefix Multiple.
         * @member {number|Long} Multiple
         * @memberof GameMsg_TGW.TGW_UnitPrefix
         * @instance
         */
        TGW_UnitPrefix.prototype.Multiple = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new TGW_UnitPrefix instance using the specified properties.
         * @function create
         * @memberof GameMsg_TGW.TGW_UnitPrefix
         * @static
         * @param {GameMsg_TGW.ITGW_UnitPrefix=} [properties] Properties to set
         * @returns {GameMsg_TGW.TGW_UnitPrefix} TGW_UnitPrefix instance
         */
        TGW_UnitPrefix.create = function create(properties) {
            return new TGW_UnitPrefix(properties);
        };

        /**
         * Encodes the specified TGW_UnitPrefix message. Does not implicitly {@link GameMsg_TGW.TGW_UnitPrefix.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_TGW.TGW_UnitPrefix
         * @static
         * @param {GameMsg_TGW.ITGW_UnitPrefix} message TGW_UnitPrefix message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TGW_UnitPrefix.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Name != null && message.hasOwnProperty("Name"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.Name);
            if (message.Multiple != null && message.hasOwnProperty("Multiple"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.Multiple);
            return writer;
        };

        /**
         * Encodes the specified TGW_UnitPrefix message, length delimited. Does not implicitly {@link GameMsg_TGW.TGW_UnitPrefix.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_TGW.TGW_UnitPrefix
         * @static
         * @param {GameMsg_TGW.ITGW_UnitPrefix} message TGW_UnitPrefix message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TGW_UnitPrefix.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TGW_UnitPrefix message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_TGW.TGW_UnitPrefix
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_TGW.TGW_UnitPrefix} TGW_UnitPrefix
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TGW_UnitPrefix.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_TGW.TGW_UnitPrefix();
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
         * Decodes a TGW_UnitPrefix message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_TGW.TGW_UnitPrefix
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_TGW.TGW_UnitPrefix} TGW_UnitPrefix
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TGW_UnitPrefix.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TGW_UnitPrefix message.
         * @function verify
         * @memberof GameMsg_TGW.TGW_UnitPrefix
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TGW_UnitPrefix.verify = function verify(message) {
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
         * Creates a TGW_UnitPrefix message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_TGW.TGW_UnitPrefix
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_TGW.TGW_UnitPrefix} TGW_UnitPrefix
         */
        TGW_UnitPrefix.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_TGW.TGW_UnitPrefix)
                return object;
            var message = new $root.GameMsg_TGW.TGW_UnitPrefix();
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
         * Creates a plain object from a TGW_UnitPrefix message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_TGW.TGW_UnitPrefix
         * @static
         * @param {GameMsg_TGW.TGW_UnitPrefix} message TGW_UnitPrefix
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TGW_UnitPrefix.toObject = function toObject(message, options) {
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
         * Converts this TGW_UnitPrefix to JSON.
         * @function toJSON
         * @memberof GameMsg_TGW.TGW_UnitPrefix
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TGW_UnitPrefix.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return TGW_UnitPrefix;
    })();

    GameMsg_TGW.TGW_LoadHistoryData = (function() {

        /**
         * Properties of a TGW_LoadHistoryData.
         * @memberof GameMsg_TGW
         * @interface ITGW_LoadHistoryData
         * @property {number|null} [UserID] TGW_LoadHistoryData UserID
         * @property {number|null} [GameID] TGW_LoadHistoryData GameID
         * @property {string|null} [StartTime] TGW_LoadHistoryData StartTime
         * @property {string|null} [EndTime] TGW_LoadHistoryData EndTime
         * @property {number|null} [PageIndex] TGW_LoadHistoryData PageIndex
         * @property {number|null} [PageSize] TGW_LoadHistoryData PageSize
         */

        /**
         * Constructs a new TGW_LoadHistoryData.
         * @memberof GameMsg_TGW
         * @classdesc Represents a TGW_LoadHistoryData.
         * @implements ITGW_LoadHistoryData
         * @constructor
         * @param {GameMsg_TGW.ITGW_LoadHistoryData=} [properties] Properties to set
         */
        function TGW_LoadHistoryData(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TGW_LoadHistoryData UserID.
         * @member {number} UserID
         * @memberof GameMsg_TGW.TGW_LoadHistoryData
         * @instance
         */
        TGW_LoadHistoryData.prototype.UserID = 0;

        /**
         * TGW_LoadHistoryData GameID.
         * @member {number} GameID
         * @memberof GameMsg_TGW.TGW_LoadHistoryData
         * @instance
         */
        TGW_LoadHistoryData.prototype.GameID = 0;

        /**
         * TGW_LoadHistoryData StartTime.
         * @member {string} StartTime
         * @memberof GameMsg_TGW.TGW_LoadHistoryData
         * @instance
         */
        TGW_LoadHistoryData.prototype.StartTime = "";

        /**
         * TGW_LoadHistoryData EndTime.
         * @member {string} EndTime
         * @memberof GameMsg_TGW.TGW_LoadHistoryData
         * @instance
         */
        TGW_LoadHistoryData.prototype.EndTime = "";

        /**
         * TGW_LoadHistoryData PageIndex.
         * @member {number} PageIndex
         * @memberof GameMsg_TGW.TGW_LoadHistoryData
         * @instance
         */
        TGW_LoadHistoryData.prototype.PageIndex = 0;

        /**
         * TGW_LoadHistoryData PageSize.
         * @member {number} PageSize
         * @memberof GameMsg_TGW.TGW_LoadHistoryData
         * @instance
         */
        TGW_LoadHistoryData.prototype.PageSize = 0;

        /**
         * Creates a new TGW_LoadHistoryData instance using the specified properties.
         * @function create
         * @memberof GameMsg_TGW.TGW_LoadHistoryData
         * @static
         * @param {GameMsg_TGW.ITGW_LoadHistoryData=} [properties] Properties to set
         * @returns {GameMsg_TGW.TGW_LoadHistoryData} TGW_LoadHistoryData instance
         */
        TGW_LoadHistoryData.create = function create(properties) {
            return new TGW_LoadHistoryData(properties);
        };

        /**
         * Encodes the specified TGW_LoadHistoryData message. Does not implicitly {@link GameMsg_TGW.TGW_LoadHistoryData.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_TGW.TGW_LoadHistoryData
         * @static
         * @param {GameMsg_TGW.ITGW_LoadHistoryData} message TGW_LoadHistoryData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TGW_LoadHistoryData.encode = function encode(message, writer) {
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
         * Encodes the specified TGW_LoadHistoryData message, length delimited. Does not implicitly {@link GameMsg_TGW.TGW_LoadHistoryData.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_TGW.TGW_LoadHistoryData
         * @static
         * @param {GameMsg_TGW.ITGW_LoadHistoryData} message TGW_LoadHistoryData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TGW_LoadHistoryData.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TGW_LoadHistoryData message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_TGW.TGW_LoadHistoryData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_TGW.TGW_LoadHistoryData} TGW_LoadHistoryData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TGW_LoadHistoryData.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_TGW.TGW_LoadHistoryData();
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
         * Decodes a TGW_LoadHistoryData message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_TGW.TGW_LoadHistoryData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_TGW.TGW_LoadHistoryData} TGW_LoadHistoryData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TGW_LoadHistoryData.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TGW_LoadHistoryData message.
         * @function verify
         * @memberof GameMsg_TGW.TGW_LoadHistoryData
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TGW_LoadHistoryData.verify = function verify(message) {
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
         * Creates a TGW_LoadHistoryData message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_TGW.TGW_LoadHistoryData
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_TGW.TGW_LoadHistoryData} TGW_LoadHistoryData
         */
        TGW_LoadHistoryData.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_TGW.TGW_LoadHistoryData)
                return object;
            var message = new $root.GameMsg_TGW.TGW_LoadHistoryData();
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
         * Creates a plain object from a TGW_LoadHistoryData message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_TGW.TGW_LoadHistoryData
         * @static
         * @param {GameMsg_TGW.TGW_LoadHistoryData} message TGW_LoadHistoryData
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TGW_LoadHistoryData.toObject = function toObject(message, options) {
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
         * Converts this TGW_LoadHistoryData to JSON.
         * @function toJSON
         * @memberof GameMsg_TGW.TGW_LoadHistoryData
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TGW_LoadHistoryData.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return TGW_LoadHistoryData;
    })();

    GameMsg_TGW.TGW_SendHistoryData = (function() {

        /**
         * Properties of a TGW_SendHistoryData.
         * @memberof GameMsg_TGW
         * @interface ITGW_SendHistoryData
         * @property {number|null} [UserID] TGW_SendHistoryData UserID
         * @property {number|null} [GameID] TGW_SendHistoryData GameID
         * @property {number|null} [PageCount] TGW_SendHistoryData PageCount
         * @property {Array.<GameMsg_TGW.ITGW_SendHistoryLog>|null} [SendHistoryLog] TGW_SendHistoryData SendHistoryLog
         */

        /**
         * Constructs a new TGW_SendHistoryData.
         * @memberof GameMsg_TGW
         * @classdesc Represents a TGW_SendHistoryData.
         * @implements ITGW_SendHistoryData
         * @constructor
         * @param {GameMsg_TGW.ITGW_SendHistoryData=} [properties] Properties to set
         */
        function TGW_SendHistoryData(properties) {
            this.SendHistoryLog = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TGW_SendHistoryData UserID.
         * @member {number} UserID
         * @memberof GameMsg_TGW.TGW_SendHistoryData
         * @instance
         */
        TGW_SendHistoryData.prototype.UserID = 0;

        /**
         * TGW_SendHistoryData GameID.
         * @member {number} GameID
         * @memberof GameMsg_TGW.TGW_SendHistoryData
         * @instance
         */
        TGW_SendHistoryData.prototype.GameID = 0;

        /**
         * TGW_SendHistoryData PageCount.
         * @member {number} PageCount
         * @memberof GameMsg_TGW.TGW_SendHistoryData
         * @instance
         */
        TGW_SendHistoryData.prototype.PageCount = 0;

        /**
         * TGW_SendHistoryData SendHistoryLog.
         * @member {Array.<GameMsg_TGW.ITGW_SendHistoryLog>} SendHistoryLog
         * @memberof GameMsg_TGW.TGW_SendHistoryData
         * @instance
         */
        TGW_SendHistoryData.prototype.SendHistoryLog = $util.emptyArray;

        /**
         * Creates a new TGW_SendHistoryData instance using the specified properties.
         * @function create
         * @memberof GameMsg_TGW.TGW_SendHistoryData
         * @static
         * @param {GameMsg_TGW.ITGW_SendHistoryData=} [properties] Properties to set
         * @returns {GameMsg_TGW.TGW_SendHistoryData} TGW_SendHistoryData instance
         */
        TGW_SendHistoryData.create = function create(properties) {
            return new TGW_SendHistoryData(properties);
        };

        /**
         * Encodes the specified TGW_SendHistoryData message. Does not implicitly {@link GameMsg_TGW.TGW_SendHistoryData.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_TGW.TGW_SendHistoryData
         * @static
         * @param {GameMsg_TGW.ITGW_SendHistoryData} message TGW_SendHistoryData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TGW_SendHistoryData.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.UserID);
            if (message.GameID != null && message.hasOwnProperty("GameID"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.GameID);
            if (message.PageCount != null && message.hasOwnProperty("PageCount"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.PageCount);
            if (message.SendHistoryLog != null && message.SendHistoryLog.length)
                for (var i = 0; i < message.SendHistoryLog.length; ++i)
                    $root.GameMsg_TGW.TGW_SendHistoryLog.encode(message.SendHistoryLog[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified TGW_SendHistoryData message, length delimited. Does not implicitly {@link GameMsg_TGW.TGW_SendHistoryData.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_TGW.TGW_SendHistoryData
         * @static
         * @param {GameMsg_TGW.ITGW_SendHistoryData} message TGW_SendHistoryData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TGW_SendHistoryData.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TGW_SendHistoryData message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_TGW.TGW_SendHistoryData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_TGW.TGW_SendHistoryData} TGW_SendHistoryData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TGW_SendHistoryData.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_TGW.TGW_SendHistoryData();
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
                    if (!(message.SendHistoryLog && message.SendHistoryLog.length))
                        message.SendHistoryLog = [];
                    message.SendHistoryLog.push($root.GameMsg_TGW.TGW_SendHistoryLog.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a TGW_SendHistoryData message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_TGW.TGW_SendHistoryData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_TGW.TGW_SendHistoryData} TGW_SendHistoryData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TGW_SendHistoryData.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TGW_SendHistoryData message.
         * @function verify
         * @memberof GameMsg_TGW.TGW_SendHistoryData
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TGW_SendHistoryData.verify = function verify(message) {
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
            if (message.SendHistoryLog != null && message.hasOwnProperty("SendHistoryLog")) {
                if (!Array.isArray(message.SendHistoryLog))
                    return "SendHistoryLog: array expected";
                for (var i = 0; i < message.SendHistoryLog.length; ++i) {
                    var error = $root.GameMsg_TGW.TGW_SendHistoryLog.verify(message.SendHistoryLog[i]);
                    if (error)
                        return "SendHistoryLog." + error;
                }
            }
            return null;
        };

        /**
         * Creates a TGW_SendHistoryData message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_TGW.TGW_SendHistoryData
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_TGW.TGW_SendHistoryData} TGW_SendHistoryData
         */
        TGW_SendHistoryData.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_TGW.TGW_SendHistoryData)
                return object;
            var message = new $root.GameMsg_TGW.TGW_SendHistoryData();
            if (object.UserID != null)
                message.UserID = object.UserID | 0;
            if (object.GameID != null)
                message.GameID = object.GameID | 0;
            if (object.PageCount != null)
                message.PageCount = object.PageCount | 0;
            if (object.SendHistoryLog) {
                if (!Array.isArray(object.SendHistoryLog))
                    throw TypeError(".GameMsg_TGW.TGW_SendHistoryData.SendHistoryLog: array expected");
                message.SendHistoryLog = [];
                for (var i = 0; i < object.SendHistoryLog.length; ++i) {
                    if (typeof object.SendHistoryLog[i] !== "object")
                        throw TypeError(".GameMsg_TGW.TGW_SendHistoryData.SendHistoryLog: object expected");
                    message.SendHistoryLog[i] = $root.GameMsg_TGW.TGW_SendHistoryLog.fromObject(object.SendHistoryLog[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a TGW_SendHistoryData message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_TGW.TGW_SendHistoryData
         * @static
         * @param {GameMsg_TGW.TGW_SendHistoryData} message TGW_SendHistoryData
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TGW_SendHistoryData.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.SendHistoryLog = [];
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
            if (message.SendHistoryLog && message.SendHistoryLog.length) {
                object.SendHistoryLog = [];
                for (var j = 0; j < message.SendHistoryLog.length; ++j)
                    object.SendHistoryLog[j] = $root.GameMsg_TGW.TGW_SendHistoryLog.toObject(message.SendHistoryLog[j], options);
            }
            return object;
        };

        /**
         * Converts this TGW_SendHistoryData to JSON.
         * @function toJSON
         * @memberof GameMsg_TGW.TGW_SendHistoryData
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TGW_SendHistoryData.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return TGW_SendHistoryData;
    })();

    GameMsg_TGW.TGW_SendHistoryLog = (function() {

        /**
         * Properties of a TGW_SendHistoryLog.
         * @memberof GameMsg_TGW
         * @interface ITGW_SendHistoryLog
         * @property {number|null} [RowNum] TGW_SendHistoryLog RowNum
         * @property {string|null} [CreateTime] TGW_SendHistoryLog CreateTime
         * @property {number|Long|null} [OrderID] TGW_SendHistoryLog OrderID
         * @property {number|Long|null} [BetMoney] TGW_SendHistoryLog BetMoney
         * @property {number|Long|null} [Profit] TGW_SendHistoryLog Profit
         */

        /**
         * Constructs a new TGW_SendHistoryLog.
         * @memberof GameMsg_TGW
         * @classdesc Represents a TGW_SendHistoryLog.
         * @implements ITGW_SendHistoryLog
         * @constructor
         * @param {GameMsg_TGW.ITGW_SendHistoryLog=} [properties] Properties to set
         */
        function TGW_SendHistoryLog(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TGW_SendHistoryLog RowNum.
         * @member {number} RowNum
         * @memberof GameMsg_TGW.TGW_SendHistoryLog
         * @instance
         */
        TGW_SendHistoryLog.prototype.RowNum = 0;

        /**
         * TGW_SendHistoryLog CreateTime.
         * @member {string} CreateTime
         * @memberof GameMsg_TGW.TGW_SendHistoryLog
         * @instance
         */
        TGW_SendHistoryLog.prototype.CreateTime = "";

        /**
         * TGW_SendHistoryLog OrderID.
         * @member {number|Long} OrderID
         * @memberof GameMsg_TGW.TGW_SendHistoryLog
         * @instance
         */
        TGW_SendHistoryLog.prototype.OrderID = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * TGW_SendHistoryLog BetMoney.
         * @member {number|Long} BetMoney
         * @memberof GameMsg_TGW.TGW_SendHistoryLog
         * @instance
         */
        TGW_SendHistoryLog.prototype.BetMoney = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * TGW_SendHistoryLog Profit.
         * @member {number|Long} Profit
         * @memberof GameMsg_TGW.TGW_SendHistoryLog
         * @instance
         */
        TGW_SendHistoryLog.prototype.Profit = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new TGW_SendHistoryLog instance using the specified properties.
         * @function create
         * @memberof GameMsg_TGW.TGW_SendHistoryLog
         * @static
         * @param {GameMsg_TGW.ITGW_SendHistoryLog=} [properties] Properties to set
         * @returns {GameMsg_TGW.TGW_SendHistoryLog} TGW_SendHistoryLog instance
         */
        TGW_SendHistoryLog.create = function create(properties) {
            return new TGW_SendHistoryLog(properties);
        };

        /**
         * Encodes the specified TGW_SendHistoryLog message. Does not implicitly {@link GameMsg_TGW.TGW_SendHistoryLog.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_TGW.TGW_SendHistoryLog
         * @static
         * @param {GameMsg_TGW.ITGW_SendHistoryLog} message TGW_SendHistoryLog message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TGW_SendHistoryLog.encode = function encode(message, writer) {
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
         * Encodes the specified TGW_SendHistoryLog message, length delimited. Does not implicitly {@link GameMsg_TGW.TGW_SendHistoryLog.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_TGW.TGW_SendHistoryLog
         * @static
         * @param {GameMsg_TGW.ITGW_SendHistoryLog} message TGW_SendHistoryLog message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TGW_SendHistoryLog.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TGW_SendHistoryLog message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_TGW.TGW_SendHistoryLog
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_TGW.TGW_SendHistoryLog} TGW_SendHistoryLog
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TGW_SendHistoryLog.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_TGW.TGW_SendHistoryLog();
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
         * Decodes a TGW_SendHistoryLog message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_TGW.TGW_SendHistoryLog
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_TGW.TGW_SendHistoryLog} TGW_SendHistoryLog
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TGW_SendHistoryLog.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TGW_SendHistoryLog message.
         * @function verify
         * @memberof GameMsg_TGW.TGW_SendHistoryLog
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TGW_SendHistoryLog.verify = function verify(message) {
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
         * Creates a TGW_SendHistoryLog message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_TGW.TGW_SendHistoryLog
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_TGW.TGW_SendHistoryLog} TGW_SendHistoryLog
         */
        TGW_SendHistoryLog.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_TGW.TGW_SendHistoryLog)
                return object;
            var message = new $root.GameMsg_TGW.TGW_SendHistoryLog();
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
         * Creates a plain object from a TGW_SendHistoryLog message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_TGW.TGW_SendHistoryLog
         * @static
         * @param {GameMsg_TGW.TGW_SendHistoryLog} message TGW_SendHistoryLog
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TGW_SendHistoryLog.toObject = function toObject(message, options) {
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
         * Converts this TGW_SendHistoryLog to JSON.
         * @function toJSON
         * @memberof GameMsg_TGW.TGW_SendHistoryLog
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TGW_SendHistoryLog.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return TGW_SendHistoryLog;
    })();

    return GameMsg_TGW;
})();

module.exports = $root;
