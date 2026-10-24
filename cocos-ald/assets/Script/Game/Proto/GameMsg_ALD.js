/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

//var $protobuf = require("protobufjs/minimal");
var $protobuf = protobuf;

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.netproto = (function() {

    /**
     * Namespace netproto.
     * @exports netproto
     * @namespace
     */
    var netproto = {};

    netproto.ALD_MSG_Setting = (function() {

        /**
         * Properties of a ALD_MSG_Setting.
         * @memberof netproto
         * @interface IALD_MSG_Setting
         * @property {number|null} [PayLineMode] ALD_MSG_Setting PayLineMode
         * @property {number|null} [TotalPayLine] ALD_MSG_Setting TotalPayLine
         * @property {number|Long|null} [MinCarryMoney] ALD_MSG_Setting MinCarryMoney
         * @property {number|null} [RowCounts] ALD_MSG_Setting RowCounts
         * @property {Array.<number>|null} [BetMoneys] ALD_MSG_Setting BetMoneys
         * @property {Array.<number>|null} [BetRates] ALD_MSG_Setting BetRates
         * @property {Array.<number>|null} [BigWinStep] ALD_MSG_Setting BigWinStep
         * @property {Array.<netproto.IALD_SymbolPayTable>|null} [SymbolPayTable] ALD_MSG_Setting SymbolPayTable
         * @property {Array.<netproto.IALD_ReelSetting>|null} [ReelSetting] ALD_MSG_Setting ReelSetting
         * @property {Array.<netproto.IALD_FreeGameInfo>|null} [FreeGames] ALD_MSG_Setting FreeGames
         * @property {Array.<netproto.IALD_PayLine>|null} [PayLines] ALD_MSG_Setting PayLines
         * @property {Array.<netproto.IALD_UnitPrefix>|null} [UnitPrefix] ALD_MSG_Setting UnitPrefix
         * @property {Array.<netproto.IALD_Description>|null} [Descriptions] ALD_MSG_Setting Descriptions
         * @property {Array.<netproto.IALD_GoldBallInfo>|null} [GoldBallSetting] ALD_MSG_Setting GoldBallSetting
         * @property {Array.<netproto.IALD_JackpotInfo>|null} [Jackpots] ALD_MSG_Setting Jackpots
         */

        /**
         * Constructs a new ALD_MSG_Setting.
         * @memberof netproto
         * @classdesc Represents a ALD_MSG_Setting.
         * @implements IALD_MSG_Setting
         * @constructor
         * @param {netproto.IALD_MSG_Setting=} [properties] Properties to set
         */
        function ALD_MSG_Setting(properties) {
            this.BetMoneys = [];
            this.BetRates = [];
            this.BigWinStep = [];
            this.SymbolPayTable = [];
            this.ReelSetting = [];
            this.FreeGames = [];
            this.PayLines = [];
            this.UnitPrefix = [];
            this.Descriptions = [];
            this.GoldBallSetting = [];
            this.Jackpots = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ALD_MSG_Setting PayLineMode.
         * @member {number} PayLineMode
         * @memberof netproto.ALD_MSG_Setting
         * @instance
         */
        ALD_MSG_Setting.prototype.PayLineMode = 0;

        /**
         * ALD_MSG_Setting TotalPayLine.
         * @member {number} TotalPayLine
         * @memberof netproto.ALD_MSG_Setting
         * @instance
         */
        ALD_MSG_Setting.prototype.TotalPayLine = 0;

        /**
         * ALD_MSG_Setting MinCarryMoney.
         * @member {number|Long} MinCarryMoney
         * @memberof netproto.ALD_MSG_Setting
         * @instance
         */
        ALD_MSG_Setting.prototype.MinCarryMoney = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ALD_MSG_Setting RowCounts.
         * @member {number} RowCounts
         * @memberof netproto.ALD_MSG_Setting
         * @instance
         */
        ALD_MSG_Setting.prototype.RowCounts = 0;

        /**
         * ALD_MSG_Setting BetMoneys.
         * @member {Array.<number>} BetMoneys
         * @memberof netproto.ALD_MSG_Setting
         * @instance
         */
        ALD_MSG_Setting.prototype.BetMoneys = $util.emptyArray;

        /**
         * ALD_MSG_Setting BetRates.
         * @member {Array.<number>} BetRates
         * @memberof netproto.ALD_MSG_Setting
         * @instance
         */
        ALD_MSG_Setting.prototype.BetRates = $util.emptyArray;

        /**
         * ALD_MSG_Setting BigWinStep.
         * @member {Array.<number>} BigWinStep
         * @memberof netproto.ALD_MSG_Setting
         * @instance
         */
        ALD_MSG_Setting.prototype.BigWinStep = $util.emptyArray;

        /**
         * ALD_MSG_Setting SymbolPayTable.
         * @member {Array.<netproto.IALD_SymbolPayTable>} SymbolPayTable
         * @memberof netproto.ALD_MSG_Setting
         * @instance
         */
        ALD_MSG_Setting.prototype.SymbolPayTable = $util.emptyArray;

        /**
         * ALD_MSG_Setting ReelSetting.
         * @member {Array.<netproto.IALD_ReelSetting>} ReelSetting
         * @memberof netproto.ALD_MSG_Setting
         * @instance
         */
        ALD_MSG_Setting.prototype.ReelSetting = $util.emptyArray;

        /**
         * ALD_MSG_Setting FreeGames.
         * @member {Array.<netproto.IALD_FreeGameInfo>} FreeGames
         * @memberof netproto.ALD_MSG_Setting
         * @instance
         */
        ALD_MSG_Setting.prototype.FreeGames = $util.emptyArray;

        /**
         * ALD_MSG_Setting PayLines.
         * @member {Array.<netproto.IALD_PayLine>} PayLines
         * @memberof netproto.ALD_MSG_Setting
         * @instance
         */
        ALD_MSG_Setting.prototype.PayLines = $util.emptyArray;

        /**
         * ALD_MSG_Setting UnitPrefix.
         * @member {Array.<netproto.IALD_UnitPrefix>} UnitPrefix
         * @memberof netproto.ALD_MSG_Setting
         * @instance
         */
        ALD_MSG_Setting.prototype.UnitPrefix = $util.emptyArray;

        /**
         * ALD_MSG_Setting Descriptions.
         * @member {Array.<netproto.IALD_Description>} Descriptions
         * @memberof netproto.ALD_MSG_Setting
         * @instance
         */
        ALD_MSG_Setting.prototype.Descriptions = $util.emptyArray;

        /**
         * ALD_MSG_Setting GoldBallSetting.
         * @member {Array.<netproto.IALD_GoldBallInfo>} GoldBallSetting
         * @memberof netproto.ALD_MSG_Setting
         * @instance
         */
        ALD_MSG_Setting.prototype.GoldBallSetting = $util.emptyArray;

        /**
         * ALD_MSG_Setting Jackpots.
         * @member {Array.<netproto.IALD_JackpotInfo>} Jackpots
         * @memberof netproto.ALD_MSG_Setting
         * @instance
         */
        ALD_MSG_Setting.prototype.Jackpots = $util.emptyArray;

        /**
         * Creates a new ALD_MSG_Setting instance using the specified properties.
         * @function create
         * @memberof netproto.ALD_MSG_Setting
         * @static
         * @param {netproto.IALD_MSG_Setting=} [properties] Properties to set
         * @returns {netproto.ALD_MSG_Setting} ALD_MSG_Setting instance
         */
        ALD_MSG_Setting.create = function create(properties) {
            return new ALD_MSG_Setting(properties);
        };

        /**
         * Encodes the specified ALD_MSG_Setting message. Does not implicitly {@link netproto.ALD_MSG_Setting.verify|verify} messages.
         * @function encode
         * @memberof netproto.ALD_MSG_Setting
         * @static
         * @param {netproto.IALD_MSG_Setting} message ALD_MSG_Setting message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ALD_MSG_Setting.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.PayLineMode != null && message.hasOwnProperty("PayLineMode"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.PayLineMode);
            if (message.TotalPayLine != null && message.hasOwnProperty("TotalPayLine"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.TotalPayLine);
            if (message.MinCarryMoney != null && message.hasOwnProperty("MinCarryMoney"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.MinCarryMoney);
            if (message.RowCounts != null && message.hasOwnProperty("RowCounts"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.RowCounts);
            if (message.BetMoneys != null && message.BetMoneys.length) {
                writer.uint32(/* id 5, wireType 2 =*/42).fork();
                for (var i = 0; i < message.BetMoneys.length; ++i)
                    writer.int32(message.BetMoneys[i]);
                writer.ldelim();
            }
            if (message.BetRates != null && message.BetRates.length) {
                writer.uint32(/* id 6, wireType 2 =*/50).fork();
                for (var i = 0; i < message.BetRates.length; ++i)
                    writer.int32(message.BetRates[i]);
                writer.ldelim();
            }
            if (message.BigWinStep != null && message.BigWinStep.length) {
                writer.uint32(/* id 7, wireType 2 =*/58).fork();
                for (var i = 0; i < message.BigWinStep.length; ++i)
                    writer.int32(message.BigWinStep[i]);
                writer.ldelim();
            }
            if (message.SymbolPayTable != null && message.SymbolPayTable.length)
                for (var i = 0; i < message.SymbolPayTable.length; ++i)
                    $root.netproto.ALD_SymbolPayTable.encode(message.SymbolPayTable[i], writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
            if (message.ReelSetting != null && message.ReelSetting.length)
                for (var i = 0; i < message.ReelSetting.length; ++i)
                    $root.netproto.ALD_ReelSetting.encode(message.ReelSetting[i], writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
            if (message.FreeGames != null && message.FreeGames.length)
                for (var i = 0; i < message.FreeGames.length; ++i)
                    $root.netproto.ALD_FreeGameInfo.encode(message.FreeGames[i], writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
            if (message.PayLines != null && message.PayLines.length)
                for (var i = 0; i < message.PayLines.length; ++i)
                    $root.netproto.ALD_PayLine.encode(message.PayLines[i], writer.uint32(/* id 11, wireType 2 =*/90).fork()).ldelim();
            if (message.UnitPrefix != null && message.UnitPrefix.length)
                for (var i = 0; i < message.UnitPrefix.length; ++i)
                    $root.netproto.ALD_UnitPrefix.encode(message.UnitPrefix[i], writer.uint32(/* id 12, wireType 2 =*/98).fork()).ldelim();
            if (message.Descriptions != null && message.Descriptions.length)
                for (var i = 0; i < message.Descriptions.length; ++i)
                    $root.netproto.ALD_Description.encode(message.Descriptions[i], writer.uint32(/* id 13, wireType 2 =*/106).fork()).ldelim();
            if (message.GoldBallSetting != null && message.GoldBallSetting.length)
                for (var i = 0; i < message.GoldBallSetting.length; ++i)
                    $root.netproto.ALD_GoldBallInfo.encode(message.GoldBallSetting[i], writer.uint32(/* id 14, wireType 2 =*/114).fork()).ldelim();
            if (message.Jackpots != null && message.Jackpots.length)
                for (var i = 0; i < message.Jackpots.length; ++i)
                    $root.netproto.ALD_JackpotInfo.encode(message.Jackpots[i], writer.uint32(/* id 15, wireType 2 =*/122).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified ALD_MSG_Setting message, length delimited. Does not implicitly {@link netproto.ALD_MSG_Setting.verify|verify} messages.
         * @function encodeDelimited
         * @memberof netproto.ALD_MSG_Setting
         * @static
         * @param {netproto.IALD_MSG_Setting} message ALD_MSG_Setting message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ALD_MSG_Setting.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ALD_MSG_Setting message from the specified reader or buffer.
         * @function decode
         * @memberof netproto.ALD_MSG_Setting
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {netproto.ALD_MSG_Setting} ALD_MSG_Setting
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ALD_MSG_Setting.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.netproto.ALD_MSG_Setting();
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
                    message.MinCarryMoney = reader.int64();
                    break;
                case 4:
                    message.RowCounts = reader.int32();
                    break;
                case 5:
                    if (!(message.BetMoneys && message.BetMoneys.length))
                        message.BetMoneys = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.BetMoneys.push(reader.int32());
                    } else
                        message.BetMoneys.push(reader.int32());
                    break;
                case 6:
                    if (!(message.BetRates && message.BetRates.length))
                        message.BetRates = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.BetRates.push(reader.int32());
                    } else
                        message.BetRates.push(reader.int32());
                    break;
                case 7:
                    if (!(message.BigWinStep && message.BigWinStep.length))
                        message.BigWinStep = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.BigWinStep.push(reader.int32());
                    } else
                        message.BigWinStep.push(reader.int32());
                    break;
                case 8:
                    if (!(message.SymbolPayTable && message.SymbolPayTable.length))
                        message.SymbolPayTable = [];
                    message.SymbolPayTable.push($root.netproto.ALD_SymbolPayTable.decode(reader, reader.uint32()));
                    break;
                case 9:
                    if (!(message.ReelSetting && message.ReelSetting.length))
                        message.ReelSetting = [];
                    message.ReelSetting.push($root.netproto.ALD_ReelSetting.decode(reader, reader.uint32()));
                    break;
                case 10:
                    if (!(message.FreeGames && message.FreeGames.length))
                        message.FreeGames = [];
                    message.FreeGames.push($root.netproto.ALD_FreeGameInfo.decode(reader, reader.uint32()));
                    break;
                case 11:
                    if (!(message.PayLines && message.PayLines.length))
                        message.PayLines = [];
                    message.PayLines.push($root.netproto.ALD_PayLine.decode(reader, reader.uint32()));
                    break;
                case 12:
                    if (!(message.UnitPrefix && message.UnitPrefix.length))
                        message.UnitPrefix = [];
                    message.UnitPrefix.push($root.netproto.ALD_UnitPrefix.decode(reader, reader.uint32()));
                    break;
                case 13:
                    if (!(message.Descriptions && message.Descriptions.length))
                        message.Descriptions = [];
                    message.Descriptions.push($root.netproto.ALD_Description.decode(reader, reader.uint32()));
                    break;
                case 14:
                    if (!(message.GoldBallSetting && message.GoldBallSetting.length))
                        message.GoldBallSetting = [];
                    message.GoldBallSetting.push($root.netproto.ALD_GoldBallInfo.decode(reader, reader.uint32()));
                    break;
                case 15:
                    if (!(message.Jackpots && message.Jackpots.length))
                        message.Jackpots = [];
                    message.Jackpots.push($root.netproto.ALD_JackpotInfo.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ALD_MSG_Setting message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof netproto.ALD_MSG_Setting
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {netproto.ALD_MSG_Setting} ALD_MSG_Setting
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ALD_MSG_Setting.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ALD_MSG_Setting message.
         * @function verify
         * @memberof netproto.ALD_MSG_Setting
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ALD_MSG_Setting.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.PayLineMode != null && message.hasOwnProperty("PayLineMode"))
                if (!$util.isInteger(message.PayLineMode))
                    return "PayLineMode: integer expected";
            if (message.TotalPayLine != null && message.hasOwnProperty("TotalPayLine"))
                if (!$util.isInteger(message.TotalPayLine))
                    return "TotalPayLine: integer expected";
            if (message.MinCarryMoney != null && message.hasOwnProperty("MinCarryMoney"))
                if (!$util.isInteger(message.MinCarryMoney) && !(message.MinCarryMoney && $util.isInteger(message.MinCarryMoney.low) && $util.isInteger(message.MinCarryMoney.high)))
                    return "MinCarryMoney: integer|Long expected";
            if (message.RowCounts != null && message.hasOwnProperty("RowCounts"))
                if (!$util.isInteger(message.RowCounts))
                    return "RowCounts: integer expected";
            if (message.BetMoneys != null && message.hasOwnProperty("BetMoneys")) {
                if (!Array.isArray(message.BetMoneys))
                    return "BetMoneys: array expected";
                for (var i = 0; i < message.BetMoneys.length; ++i)
                    if (!$util.isInteger(message.BetMoneys[i]))
                        return "BetMoneys: integer[] expected";
            }
            if (message.BetRates != null && message.hasOwnProperty("BetRates")) {
                if (!Array.isArray(message.BetRates))
                    return "BetRates: array expected";
                for (var i = 0; i < message.BetRates.length; ++i)
                    if (!$util.isInteger(message.BetRates[i]))
                        return "BetRates: integer[] expected";
            }
            if (message.BigWinStep != null && message.hasOwnProperty("BigWinStep")) {
                if (!Array.isArray(message.BigWinStep))
                    return "BigWinStep: array expected";
                for (var i = 0; i < message.BigWinStep.length; ++i)
                    if (!$util.isInteger(message.BigWinStep[i]))
                        return "BigWinStep: integer[] expected";
            }
            if (message.SymbolPayTable != null && message.hasOwnProperty("SymbolPayTable")) {
                if (!Array.isArray(message.SymbolPayTable))
                    return "SymbolPayTable: array expected";
                for (var i = 0; i < message.SymbolPayTable.length; ++i) {
                    var error = $root.netproto.ALD_SymbolPayTable.verify(message.SymbolPayTable[i]);
                    if (error)
                        return "SymbolPayTable." + error;
                }
            }
            if (message.ReelSetting != null && message.hasOwnProperty("ReelSetting")) {
                if (!Array.isArray(message.ReelSetting))
                    return "ReelSetting: array expected";
                for (var i = 0; i < message.ReelSetting.length; ++i) {
                    var error = $root.netproto.ALD_ReelSetting.verify(message.ReelSetting[i]);
                    if (error)
                        return "ReelSetting." + error;
                }
            }
            if (message.FreeGames != null && message.hasOwnProperty("FreeGames")) {
                if (!Array.isArray(message.FreeGames))
                    return "FreeGames: array expected";
                for (var i = 0; i < message.FreeGames.length; ++i) {
                    var error = $root.netproto.ALD_FreeGameInfo.verify(message.FreeGames[i]);
                    if (error)
                        return "FreeGames." + error;
                }
            }
            if (message.PayLines != null && message.hasOwnProperty("PayLines")) {
                if (!Array.isArray(message.PayLines))
                    return "PayLines: array expected";
                for (var i = 0; i < message.PayLines.length; ++i) {
                    var error = $root.netproto.ALD_PayLine.verify(message.PayLines[i]);
                    if (error)
                        return "PayLines." + error;
                }
            }
            if (message.UnitPrefix != null && message.hasOwnProperty("UnitPrefix")) {
                if (!Array.isArray(message.UnitPrefix))
                    return "UnitPrefix: array expected";
                for (var i = 0; i < message.UnitPrefix.length; ++i) {
                    var error = $root.netproto.ALD_UnitPrefix.verify(message.UnitPrefix[i]);
                    if (error)
                        return "UnitPrefix." + error;
                }
            }
            if (message.Descriptions != null && message.hasOwnProperty("Descriptions")) {
                if (!Array.isArray(message.Descriptions))
                    return "Descriptions: array expected";
                for (var i = 0; i < message.Descriptions.length; ++i) {
                    var error = $root.netproto.ALD_Description.verify(message.Descriptions[i]);
                    if (error)
                        return "Descriptions." + error;
                }
            }
            if (message.GoldBallSetting != null && message.hasOwnProperty("GoldBallSetting")) {
                if (!Array.isArray(message.GoldBallSetting))
                    return "GoldBallSetting: array expected";
                for (var i = 0; i < message.GoldBallSetting.length; ++i) {
                    var error = $root.netproto.ALD_GoldBallInfo.verify(message.GoldBallSetting[i]);
                    if (error)
                        return "GoldBallSetting." + error;
                }
            }
            if (message.Jackpots != null && message.hasOwnProperty("Jackpots")) {
                if (!Array.isArray(message.Jackpots))
                    return "Jackpots: array expected";
                for (var i = 0; i < message.Jackpots.length; ++i) {
                    var error = $root.netproto.ALD_JackpotInfo.verify(message.Jackpots[i]);
                    if (error)
                        return "Jackpots." + error;
                }
            }
            return null;
        };

        /**
         * Creates a ALD_MSG_Setting message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof netproto.ALD_MSG_Setting
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {netproto.ALD_MSG_Setting} ALD_MSG_Setting
         */
        ALD_MSG_Setting.fromObject = function fromObject(object) {
            if (object instanceof $root.netproto.ALD_MSG_Setting)
                return object;
            var message = new $root.netproto.ALD_MSG_Setting();
            if (object.PayLineMode != null)
                message.PayLineMode = object.PayLineMode | 0;
            if (object.TotalPayLine != null)
                message.TotalPayLine = object.TotalPayLine | 0;
            if (object.MinCarryMoney != null)
                if ($util.Long)
                    (message.MinCarryMoney = $util.Long.fromValue(object.MinCarryMoney)).unsigned = false;
                else if (typeof object.MinCarryMoney === "string")
                    message.MinCarryMoney = parseInt(object.MinCarryMoney, 10);
                else if (typeof object.MinCarryMoney === "number")
                    message.MinCarryMoney = object.MinCarryMoney;
                else if (typeof object.MinCarryMoney === "object")
                    message.MinCarryMoney = new $util.LongBits(object.MinCarryMoney.low >>> 0, object.MinCarryMoney.high >>> 0).toNumber();
            if (object.RowCounts != null)
                message.RowCounts = object.RowCounts | 0;
            if (object.BetMoneys) {
                if (!Array.isArray(object.BetMoneys))
                    throw TypeError(".netproto.ALD_MSG_Setting.BetMoneys: array expected");
                message.BetMoneys = [];
                for (var i = 0; i < object.BetMoneys.length; ++i)
                    message.BetMoneys[i] = object.BetMoneys[i] | 0;
            }
            if (object.BetRates) {
                if (!Array.isArray(object.BetRates))
                    throw TypeError(".netproto.ALD_MSG_Setting.BetRates: array expected");
                message.BetRates = [];
                for (var i = 0; i < object.BetRates.length; ++i)
                    message.BetRates[i] = object.BetRates[i] | 0;
            }
            if (object.BigWinStep) {
                if (!Array.isArray(object.BigWinStep))
                    throw TypeError(".netproto.ALD_MSG_Setting.BigWinStep: array expected");
                message.BigWinStep = [];
                for (var i = 0; i < object.BigWinStep.length; ++i)
                    message.BigWinStep[i] = object.BigWinStep[i] | 0;
            }
            if (object.SymbolPayTable) {
                if (!Array.isArray(object.SymbolPayTable))
                    throw TypeError(".netproto.ALD_MSG_Setting.SymbolPayTable: array expected");
                message.SymbolPayTable = [];
                for (var i = 0; i < object.SymbolPayTable.length; ++i) {
                    if (typeof object.SymbolPayTable[i] !== "object")
                        throw TypeError(".netproto.ALD_MSG_Setting.SymbolPayTable: object expected");
                    message.SymbolPayTable[i] = $root.netproto.ALD_SymbolPayTable.fromObject(object.SymbolPayTable[i]);
                }
            }
            if (object.ReelSetting) {
                if (!Array.isArray(object.ReelSetting))
                    throw TypeError(".netproto.ALD_MSG_Setting.ReelSetting: array expected");
                message.ReelSetting = [];
                for (var i = 0; i < object.ReelSetting.length; ++i) {
                    if (typeof object.ReelSetting[i] !== "object")
                        throw TypeError(".netproto.ALD_MSG_Setting.ReelSetting: object expected");
                    message.ReelSetting[i] = $root.netproto.ALD_ReelSetting.fromObject(object.ReelSetting[i]);
                }
            }
            if (object.FreeGames) {
                if (!Array.isArray(object.FreeGames))
                    throw TypeError(".netproto.ALD_MSG_Setting.FreeGames: array expected");
                message.FreeGames = [];
                for (var i = 0; i < object.FreeGames.length; ++i) {
                    if (typeof object.FreeGames[i] !== "object")
                        throw TypeError(".netproto.ALD_MSG_Setting.FreeGames: object expected");
                    message.FreeGames[i] = $root.netproto.ALD_FreeGameInfo.fromObject(object.FreeGames[i]);
                }
            }
            if (object.PayLines) {
                if (!Array.isArray(object.PayLines))
                    throw TypeError(".netproto.ALD_MSG_Setting.PayLines: array expected");
                message.PayLines = [];
                for (var i = 0; i < object.PayLines.length; ++i) {
                    if (typeof object.PayLines[i] !== "object")
                        throw TypeError(".netproto.ALD_MSG_Setting.PayLines: object expected");
                    message.PayLines[i] = $root.netproto.ALD_PayLine.fromObject(object.PayLines[i]);
                }
            }
            if (object.UnitPrefix) {
                if (!Array.isArray(object.UnitPrefix))
                    throw TypeError(".netproto.ALD_MSG_Setting.UnitPrefix: array expected");
                message.UnitPrefix = [];
                for (var i = 0; i < object.UnitPrefix.length; ++i) {
                    if (typeof object.UnitPrefix[i] !== "object")
                        throw TypeError(".netproto.ALD_MSG_Setting.UnitPrefix: object expected");
                    message.UnitPrefix[i] = $root.netproto.ALD_UnitPrefix.fromObject(object.UnitPrefix[i]);
                }
            }
            if (object.Descriptions) {
                if (!Array.isArray(object.Descriptions))
                    throw TypeError(".netproto.ALD_MSG_Setting.Descriptions: array expected");
                message.Descriptions = [];
                for (var i = 0; i < object.Descriptions.length; ++i) {
                    if (typeof object.Descriptions[i] !== "object")
                        throw TypeError(".netproto.ALD_MSG_Setting.Descriptions: object expected");
                    message.Descriptions[i] = $root.netproto.ALD_Description.fromObject(object.Descriptions[i]);
                }
            }
            if (object.GoldBallSetting) {
                if (!Array.isArray(object.GoldBallSetting))
                    throw TypeError(".netproto.ALD_MSG_Setting.GoldBallSetting: array expected");
                message.GoldBallSetting = [];
                for (var i = 0; i < object.GoldBallSetting.length; ++i) {
                    if (typeof object.GoldBallSetting[i] !== "object")
                        throw TypeError(".netproto.ALD_MSG_Setting.GoldBallSetting: object expected");
                    message.GoldBallSetting[i] = $root.netproto.ALD_GoldBallInfo.fromObject(object.GoldBallSetting[i]);
                }
            }
            if (object.Jackpots) {
                if (!Array.isArray(object.Jackpots))
                    throw TypeError(".netproto.ALD_MSG_Setting.Jackpots: array expected");
                message.Jackpots = [];
                for (var i = 0; i < object.Jackpots.length; ++i) {
                    if (typeof object.Jackpots[i] !== "object")
                        throw TypeError(".netproto.ALD_MSG_Setting.Jackpots: object expected");
                    message.Jackpots[i] = $root.netproto.ALD_JackpotInfo.fromObject(object.Jackpots[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a ALD_MSG_Setting message. Also converts values to other types if specified.
         * @function toObject
         * @memberof netproto.ALD_MSG_Setting
         * @static
         * @param {netproto.ALD_MSG_Setting} message ALD_MSG_Setting
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ALD_MSG_Setting.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.BetMoneys = [];
                object.BetRates = [];
                object.BigWinStep = [];
                object.SymbolPayTable = [];
                object.ReelSetting = [];
                object.FreeGames = [];
                object.PayLines = [];
                object.UnitPrefix = [];
                object.Descriptions = [];
                object.GoldBallSetting = [];
                object.Jackpots = [];
            }
            if (options.defaults) {
                object.PayLineMode = 0;
                object.TotalPayLine = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.MinCarryMoney = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.MinCarryMoney = options.longs === String ? "0" : 0;
                object.RowCounts = 0;
            }
            if (message.PayLineMode != null && message.hasOwnProperty("PayLineMode"))
                object.PayLineMode = message.PayLineMode;
            if (message.TotalPayLine != null && message.hasOwnProperty("TotalPayLine"))
                object.TotalPayLine = message.TotalPayLine;
            if (message.MinCarryMoney != null && message.hasOwnProperty("MinCarryMoney"))
                if (typeof message.MinCarryMoney === "number")
                    object.MinCarryMoney = options.longs === String ? String(message.MinCarryMoney) : message.MinCarryMoney;
                else
                    object.MinCarryMoney = options.longs === String ? $util.Long.prototype.toString.call(message.MinCarryMoney) : options.longs === Number ? new $util.LongBits(message.MinCarryMoney.low >>> 0, message.MinCarryMoney.high >>> 0).toNumber() : message.MinCarryMoney;
            if (message.RowCounts != null && message.hasOwnProperty("RowCounts"))
                object.RowCounts = message.RowCounts;
            if (message.BetMoneys && message.BetMoneys.length) {
                object.BetMoneys = [];
                for (var j = 0; j < message.BetMoneys.length; ++j)
                    object.BetMoneys[j] = message.BetMoneys[j];
            }
            if (message.BetRates && message.BetRates.length) {
                object.BetRates = [];
                for (var j = 0; j < message.BetRates.length; ++j)
                    object.BetRates[j] = message.BetRates[j];
            }
            if (message.BigWinStep && message.BigWinStep.length) {
                object.BigWinStep = [];
                for (var j = 0; j < message.BigWinStep.length; ++j)
                    object.BigWinStep[j] = message.BigWinStep[j];
            }
            if (message.SymbolPayTable && message.SymbolPayTable.length) {
                object.SymbolPayTable = [];
                for (var j = 0; j < message.SymbolPayTable.length; ++j)
                    object.SymbolPayTable[j] = $root.netproto.ALD_SymbolPayTable.toObject(message.SymbolPayTable[j], options);
            }
            if (message.ReelSetting && message.ReelSetting.length) {
                object.ReelSetting = [];
                for (var j = 0; j < message.ReelSetting.length; ++j)
                    object.ReelSetting[j] = $root.netproto.ALD_ReelSetting.toObject(message.ReelSetting[j], options);
            }
            if (message.FreeGames && message.FreeGames.length) {
                object.FreeGames = [];
                for (var j = 0; j < message.FreeGames.length; ++j)
                    object.FreeGames[j] = $root.netproto.ALD_FreeGameInfo.toObject(message.FreeGames[j], options);
            }
            if (message.PayLines && message.PayLines.length) {
                object.PayLines = [];
                for (var j = 0; j < message.PayLines.length; ++j)
                    object.PayLines[j] = $root.netproto.ALD_PayLine.toObject(message.PayLines[j], options);
            }
            if (message.UnitPrefix && message.UnitPrefix.length) {
                object.UnitPrefix = [];
                for (var j = 0; j < message.UnitPrefix.length; ++j)
                    object.UnitPrefix[j] = $root.netproto.ALD_UnitPrefix.toObject(message.UnitPrefix[j], options);
            }
            if (message.Descriptions && message.Descriptions.length) {
                object.Descriptions = [];
                for (var j = 0; j < message.Descriptions.length; ++j)
                    object.Descriptions[j] = $root.netproto.ALD_Description.toObject(message.Descriptions[j], options);
            }
            if (message.GoldBallSetting && message.GoldBallSetting.length) {
                object.GoldBallSetting = [];
                for (var j = 0; j < message.GoldBallSetting.length; ++j)
                    object.GoldBallSetting[j] = $root.netproto.ALD_GoldBallInfo.toObject(message.GoldBallSetting[j], options);
            }
            if (message.Jackpots && message.Jackpots.length) {
                object.Jackpots = [];
                for (var j = 0; j < message.Jackpots.length; ++j)
                    object.Jackpots[j] = $root.netproto.ALD_JackpotInfo.toObject(message.Jackpots[j], options);
            }
            return object;
        };

        /**
         * Converts this ALD_MSG_Setting to JSON.
         * @function toJSON
         * @memberof netproto.ALD_MSG_Setting
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ALD_MSG_Setting.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ALD_MSG_Setting;
    })();

    netproto.ALD_MSG_Status = (function() {

        /**
         * Properties of a ALD_MSG_Status.
         * @memberof netproto
         * @interface IALD_MSG_Status
         * @property {number|null} [State] ALD_MSG_Status State
         */

        /**
         * Constructs a new ALD_MSG_Status.
         * @memberof netproto
         * @classdesc Represents a ALD_MSG_Status.
         * @implements IALD_MSG_Status
         * @constructor
         * @param {netproto.IALD_MSG_Status=} [properties] Properties to set
         */
        function ALD_MSG_Status(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ALD_MSG_Status State.
         * @member {number} State
         * @memberof netproto.ALD_MSG_Status
         * @instance
         */
        ALD_MSG_Status.prototype.State = 0;

        /**
         * Creates a new ALD_MSG_Status instance using the specified properties.
         * @function create
         * @memberof netproto.ALD_MSG_Status
         * @static
         * @param {netproto.IALD_MSG_Status=} [properties] Properties to set
         * @returns {netproto.ALD_MSG_Status} ALD_MSG_Status instance
         */
        ALD_MSG_Status.create = function create(properties) {
            return new ALD_MSG_Status(properties);
        };

        /**
         * Encodes the specified ALD_MSG_Status message. Does not implicitly {@link netproto.ALD_MSG_Status.verify|verify} messages.
         * @function encode
         * @memberof netproto.ALD_MSG_Status
         * @static
         * @param {netproto.IALD_MSG_Status} message ALD_MSG_Status message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ALD_MSG_Status.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.State != null && message.hasOwnProperty("State"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.State);
            return writer;
        };

        /**
         * Encodes the specified ALD_MSG_Status message, length delimited. Does not implicitly {@link netproto.ALD_MSG_Status.verify|verify} messages.
         * @function encodeDelimited
         * @memberof netproto.ALD_MSG_Status
         * @static
         * @param {netproto.IALD_MSG_Status} message ALD_MSG_Status message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ALD_MSG_Status.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ALD_MSG_Status message from the specified reader or buffer.
         * @function decode
         * @memberof netproto.ALD_MSG_Status
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {netproto.ALD_MSG_Status} ALD_MSG_Status
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ALD_MSG_Status.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.netproto.ALD_MSG_Status();
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
         * Decodes a ALD_MSG_Status message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof netproto.ALD_MSG_Status
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {netproto.ALD_MSG_Status} ALD_MSG_Status
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ALD_MSG_Status.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ALD_MSG_Status message.
         * @function verify
         * @memberof netproto.ALD_MSG_Status
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ALD_MSG_Status.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.State != null && message.hasOwnProperty("State"))
                if (!$util.isInteger(message.State))
                    return "State: integer expected";
            return null;
        };

        /**
         * Creates a ALD_MSG_Status message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof netproto.ALD_MSG_Status
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {netproto.ALD_MSG_Status} ALD_MSG_Status
         */
        ALD_MSG_Status.fromObject = function fromObject(object) {
            if (object instanceof $root.netproto.ALD_MSG_Status)
                return object;
            var message = new $root.netproto.ALD_MSG_Status();
            if (object.State != null)
                message.State = object.State | 0;
            return message;
        };

        /**
         * Creates a plain object from a ALD_MSG_Status message. Also converts values to other types if specified.
         * @function toObject
         * @memberof netproto.ALD_MSG_Status
         * @static
         * @param {netproto.ALD_MSG_Status} message ALD_MSG_Status
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ALD_MSG_Status.toObject = function toObject(message, options) {
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
         * Converts this ALD_MSG_Status to JSON.
         * @function toJSON
         * @memberof netproto.ALD_MSG_Status
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ALD_MSG_Status.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ALD_MSG_Status;
    })();

    netproto.ALD_MSG_BetStatus = (function() {

        /**
         * Properties of a ALD_MSG_BetStatus.
         * @memberof netproto
         * @interface IALD_MSG_BetStatus
         * @property {number|null} [Ret] ALD_MSG_BetStatus Ret
         * @property {number|Long|null} [Money] ALD_MSG_BetStatus Money
         */

        /**
         * Constructs a new ALD_MSG_BetStatus.
         * @memberof netproto
         * @classdesc Represents a ALD_MSG_BetStatus.
         * @implements IALD_MSG_BetStatus
         * @constructor
         * @param {netproto.IALD_MSG_BetStatus=} [properties] Properties to set
         */
        function ALD_MSG_BetStatus(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ALD_MSG_BetStatus Ret.
         * @member {number} Ret
         * @memberof netproto.ALD_MSG_BetStatus
         * @instance
         */
        ALD_MSG_BetStatus.prototype.Ret = 0;

        /**
         * ALD_MSG_BetStatus Money.
         * @member {number|Long} Money
         * @memberof netproto.ALD_MSG_BetStatus
         * @instance
         */
        ALD_MSG_BetStatus.prototype.Money = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new ALD_MSG_BetStatus instance using the specified properties.
         * @function create
         * @memberof netproto.ALD_MSG_BetStatus
         * @static
         * @param {netproto.IALD_MSG_BetStatus=} [properties] Properties to set
         * @returns {netproto.ALD_MSG_BetStatus} ALD_MSG_BetStatus instance
         */
        ALD_MSG_BetStatus.create = function create(properties) {
            return new ALD_MSG_BetStatus(properties);
        };

        /**
         * Encodes the specified ALD_MSG_BetStatus message. Does not implicitly {@link netproto.ALD_MSG_BetStatus.verify|verify} messages.
         * @function encode
         * @memberof netproto.ALD_MSG_BetStatus
         * @static
         * @param {netproto.IALD_MSG_BetStatus} message ALD_MSG_BetStatus message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ALD_MSG_BetStatus.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Ret != null && message.hasOwnProperty("Ret"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.Ret);
            if (message.Money != null && message.hasOwnProperty("Money"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.Money);
            return writer;
        };

        /**
         * Encodes the specified ALD_MSG_BetStatus message, length delimited. Does not implicitly {@link netproto.ALD_MSG_BetStatus.verify|verify} messages.
         * @function encodeDelimited
         * @memberof netproto.ALD_MSG_BetStatus
         * @static
         * @param {netproto.IALD_MSG_BetStatus} message ALD_MSG_BetStatus message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ALD_MSG_BetStatus.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ALD_MSG_BetStatus message from the specified reader or buffer.
         * @function decode
         * @memberof netproto.ALD_MSG_BetStatus
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {netproto.ALD_MSG_BetStatus} ALD_MSG_BetStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ALD_MSG_BetStatus.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.netproto.ALD_MSG_BetStatus();
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
         * Decodes a ALD_MSG_BetStatus message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof netproto.ALD_MSG_BetStatus
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {netproto.ALD_MSG_BetStatus} ALD_MSG_BetStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ALD_MSG_BetStatus.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ALD_MSG_BetStatus message.
         * @function verify
         * @memberof netproto.ALD_MSG_BetStatus
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ALD_MSG_BetStatus.verify = function verify(message) {
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
         * Creates a ALD_MSG_BetStatus message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof netproto.ALD_MSG_BetStatus
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {netproto.ALD_MSG_BetStatus} ALD_MSG_BetStatus
         */
        ALD_MSG_BetStatus.fromObject = function fromObject(object) {
            if (object instanceof $root.netproto.ALD_MSG_BetStatus)
                return object;
            var message = new $root.netproto.ALD_MSG_BetStatus();
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
         * Creates a plain object from a ALD_MSG_BetStatus message. Also converts values to other types if specified.
         * @function toObject
         * @memberof netproto.ALD_MSG_BetStatus
         * @static
         * @param {netproto.ALD_MSG_BetStatus} message ALD_MSG_BetStatus
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ALD_MSG_BetStatus.toObject = function toObject(message, options) {
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
         * Converts this ALD_MSG_BetStatus to JSON.
         * @function toJSON
         * @memberof netproto.ALD_MSG_BetStatus
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ALD_MSG_BetStatus.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ALD_MSG_BetStatus;
    })();

    netproto.ALD_MSG_GameResult = (function() {

        /**
         * Properties of a ALD_MSG_GameResult.
         * @memberof netproto
         * @interface IALD_MSG_GameResult
         * @property {number|Long|null} [BetMoney] ALD_MSG_GameResult BetMoney
         * @property {number|Long|null} [WinMoney] ALD_MSG_GameResult WinMoney
         * @property {number|Long|null} [FinalMoney] ALD_MSG_GameResult FinalMoney
         * @property {number|Long|null} [JackpotMoney] ALD_MSG_GameResult JackpotMoney
         * @property {Array.<netproto.IALD_ReelResult>|null} [ReelResult] ALD_MSG_GameResult ReelResult
         * @property {Array.<netproto.IALD_PayGroup>|null} [PayGroups] ALD_MSG_GameResult PayGroups
         * @property {number|Long|null} [FreeGameWinMoney] ALD_MSG_GameResult FreeGameWinMoney
         */

        /**
         * Constructs a new ALD_MSG_GameResult.
         * @memberof netproto
         * @classdesc Represents a ALD_MSG_GameResult.
         * @implements IALD_MSG_GameResult
         * @constructor
         * @param {netproto.IALD_MSG_GameResult=} [properties] Properties to set
         */
        function ALD_MSG_GameResult(properties) {
            this.ReelResult = [];
            this.PayGroups = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ALD_MSG_GameResult BetMoney.
         * @member {number|Long} BetMoney
         * @memberof netproto.ALD_MSG_GameResult
         * @instance
         */
        ALD_MSG_GameResult.prototype.BetMoney = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ALD_MSG_GameResult WinMoney.
         * @member {number|Long} WinMoney
         * @memberof netproto.ALD_MSG_GameResult
         * @instance
         */
        ALD_MSG_GameResult.prototype.WinMoney = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ALD_MSG_GameResult FinalMoney.
         * @member {number|Long} FinalMoney
         * @memberof netproto.ALD_MSG_GameResult
         * @instance
         */
        ALD_MSG_GameResult.prototype.FinalMoney = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ALD_MSG_GameResult JackpotMoney.
         * @member {number|Long} JackpotMoney
         * @memberof netproto.ALD_MSG_GameResult
         * @instance
         */
        ALD_MSG_GameResult.prototype.JackpotMoney = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ALD_MSG_GameResult ReelResult.
         * @member {Array.<netproto.IALD_ReelResult>} ReelResult
         * @memberof netproto.ALD_MSG_GameResult
         * @instance
         */
        ALD_MSG_GameResult.prototype.ReelResult = $util.emptyArray;

        /**
         * ALD_MSG_GameResult PayGroups.
         * @member {Array.<netproto.IALD_PayGroup>} PayGroups
         * @memberof netproto.ALD_MSG_GameResult
         * @instance
         */
        ALD_MSG_GameResult.prototype.PayGroups = $util.emptyArray;

        /**
         * ALD_MSG_GameResult FreeGameWinMoney.
         * @member {number|Long} FreeGameWinMoney
         * @memberof netproto.ALD_MSG_GameResult
         * @instance
         */
        ALD_MSG_GameResult.prototype.FreeGameWinMoney = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new ALD_MSG_GameResult instance using the specified properties.
         * @function create
         * @memberof netproto.ALD_MSG_GameResult
         * @static
         * @param {netproto.IALD_MSG_GameResult=} [properties] Properties to set
         * @returns {netproto.ALD_MSG_GameResult} ALD_MSG_GameResult instance
         */
        ALD_MSG_GameResult.create = function create(properties) {
            return new ALD_MSG_GameResult(properties);
        };

        /**
         * Encodes the specified ALD_MSG_GameResult message. Does not implicitly {@link netproto.ALD_MSG_GameResult.verify|verify} messages.
         * @function encode
         * @memberof netproto.ALD_MSG_GameResult
         * @static
         * @param {netproto.IALD_MSG_GameResult} message ALD_MSG_GameResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ALD_MSG_GameResult.encode = function encode(message, writer) {
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
                    $root.netproto.ALD_ReelResult.encode(message.ReelResult[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            if (message.PayGroups != null && message.PayGroups.length)
                for (var i = 0; i < message.PayGroups.length; ++i)
                    $root.netproto.ALD_PayGroup.encode(message.PayGroups[i], writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            if (message.FreeGameWinMoney != null && message.hasOwnProperty("FreeGameWinMoney"))
                writer.uint32(/* id 7, wireType 0 =*/56).int64(message.FreeGameWinMoney);
            return writer;
        };

        /**
         * Encodes the specified ALD_MSG_GameResult message, length delimited. Does not implicitly {@link netproto.ALD_MSG_GameResult.verify|verify} messages.
         * @function encodeDelimited
         * @memberof netproto.ALD_MSG_GameResult
         * @static
         * @param {netproto.IALD_MSG_GameResult} message ALD_MSG_GameResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ALD_MSG_GameResult.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ALD_MSG_GameResult message from the specified reader or buffer.
         * @function decode
         * @memberof netproto.ALD_MSG_GameResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {netproto.ALD_MSG_GameResult} ALD_MSG_GameResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ALD_MSG_GameResult.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.netproto.ALD_MSG_GameResult();
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
                    message.ReelResult.push($root.netproto.ALD_ReelResult.decode(reader, reader.uint32()));
                    break;
                case 6:
                    if (!(message.PayGroups && message.PayGroups.length))
                        message.PayGroups = [];
                    message.PayGroups.push($root.netproto.ALD_PayGroup.decode(reader, reader.uint32()));
                    break;
                case 7:
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
         * Decodes a ALD_MSG_GameResult message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof netproto.ALD_MSG_GameResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {netproto.ALD_MSG_GameResult} ALD_MSG_GameResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ALD_MSG_GameResult.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ALD_MSG_GameResult message.
         * @function verify
         * @memberof netproto.ALD_MSG_GameResult
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ALD_MSG_GameResult.verify = function verify(message) {
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
                    var error = $root.netproto.ALD_ReelResult.verify(message.ReelResult[i]);
                    if (error)
                        return "ReelResult." + error;
                }
            }
            if (message.PayGroups != null && message.hasOwnProperty("PayGroups")) {
                if (!Array.isArray(message.PayGroups))
                    return "PayGroups: array expected";
                for (var i = 0; i < message.PayGroups.length; ++i) {
                    var error = $root.netproto.ALD_PayGroup.verify(message.PayGroups[i]);
                    if (error)
                        return "PayGroups." + error;
                }
            }
            if (message.FreeGameWinMoney != null && message.hasOwnProperty("FreeGameWinMoney"))
                if (!$util.isInteger(message.FreeGameWinMoney) && !(message.FreeGameWinMoney && $util.isInteger(message.FreeGameWinMoney.low) && $util.isInteger(message.FreeGameWinMoney.high)))
                    return "FreeGameWinMoney: integer|Long expected";
            return null;
        };

        /**
         * Creates a ALD_MSG_GameResult message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof netproto.ALD_MSG_GameResult
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {netproto.ALD_MSG_GameResult} ALD_MSG_GameResult
         */
        ALD_MSG_GameResult.fromObject = function fromObject(object) {
            if (object instanceof $root.netproto.ALD_MSG_GameResult)
                return object;
            var message = new $root.netproto.ALD_MSG_GameResult();
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
                    throw TypeError(".netproto.ALD_MSG_GameResult.ReelResult: array expected");
                message.ReelResult = [];
                for (var i = 0; i < object.ReelResult.length; ++i) {
                    if (typeof object.ReelResult[i] !== "object")
                        throw TypeError(".netproto.ALD_MSG_GameResult.ReelResult: object expected");
                    message.ReelResult[i] = $root.netproto.ALD_ReelResult.fromObject(object.ReelResult[i]);
                }
            }
            if (object.PayGroups) {
                if (!Array.isArray(object.PayGroups))
                    throw TypeError(".netproto.ALD_MSG_GameResult.PayGroups: array expected");
                message.PayGroups = [];
                for (var i = 0; i < object.PayGroups.length; ++i) {
                    if (typeof object.PayGroups[i] !== "object")
                        throw TypeError(".netproto.ALD_MSG_GameResult.PayGroups: object expected");
                    message.PayGroups[i] = $root.netproto.ALD_PayGroup.fromObject(object.PayGroups[i]);
                }
            }
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
         * Creates a plain object from a ALD_MSG_GameResult message. Also converts values to other types if specified.
         * @function toObject
         * @memberof netproto.ALD_MSG_GameResult
         * @static
         * @param {netproto.ALD_MSG_GameResult} message ALD_MSG_GameResult
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ALD_MSG_GameResult.toObject = function toObject(message, options) {
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
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.FreeGameWinMoney = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.FreeGameWinMoney = options.longs === String ? "0" : 0;
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
                    object.ReelResult[j] = $root.netproto.ALD_ReelResult.toObject(message.ReelResult[j], options);
            }
            if (message.PayGroups && message.PayGroups.length) {
                object.PayGroups = [];
                for (var j = 0; j < message.PayGroups.length; ++j)
                    object.PayGroups[j] = $root.netproto.ALD_PayGroup.toObject(message.PayGroups[j], options);
            }
            if (message.FreeGameWinMoney != null && message.hasOwnProperty("FreeGameWinMoney"))
                if (typeof message.FreeGameWinMoney === "number")
                    object.FreeGameWinMoney = options.longs === String ? String(message.FreeGameWinMoney) : message.FreeGameWinMoney;
                else
                    object.FreeGameWinMoney = options.longs === String ? $util.Long.prototype.toString.call(message.FreeGameWinMoney) : options.longs === Number ? new $util.LongBits(message.FreeGameWinMoney.low >>> 0, message.FreeGameWinMoney.high >>> 0).toNumber() : message.FreeGameWinMoney;
            return object;
        };

        /**
         * Converts this ALD_MSG_GameResult to JSON.
         * @function toJSON
         * @memberof netproto.ALD_MSG_GameResult
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ALD_MSG_GameResult.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ALD_MSG_GameResult;
    })();

    netproto.ALD_MSG_LeftFreeGameData = (function() {

        /**
         * Properties of a ALD_MSG_LeftFreeGameData.
         * @memberof netproto
         * @interface IALD_MSG_LeftFreeGameData
         * @property {number|null} [Count] ALD_MSG_LeftFreeGameData Count
         * @property {number|Long|null} [BetMoney] ALD_MSG_LeftFreeGameData BetMoney
         * @property {number|Long|null} [BetRate] ALD_MSG_LeftFreeGameData BetRate
         * @property {number|null} [ID] ALD_MSG_LeftFreeGameData ID
         */

        /**
         * Constructs a new ALD_MSG_LeftFreeGameData.
         * @memberof netproto
         * @classdesc Represents a ALD_MSG_LeftFreeGameData.
         * @implements IALD_MSG_LeftFreeGameData
         * @constructor
         * @param {netproto.IALD_MSG_LeftFreeGameData=} [properties] Properties to set
         */
        function ALD_MSG_LeftFreeGameData(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ALD_MSG_LeftFreeGameData Count.
         * @member {number} Count
         * @memberof netproto.ALD_MSG_LeftFreeGameData
         * @instance
         */
        ALD_MSG_LeftFreeGameData.prototype.Count = 0;

        /**
         * ALD_MSG_LeftFreeGameData BetMoney.
         * @member {number|Long} BetMoney
         * @memberof netproto.ALD_MSG_LeftFreeGameData
         * @instance
         */
        ALD_MSG_LeftFreeGameData.prototype.BetMoney = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ALD_MSG_LeftFreeGameData BetRate.
         * @member {number|Long} BetRate
         * @memberof netproto.ALD_MSG_LeftFreeGameData
         * @instance
         */
        ALD_MSG_LeftFreeGameData.prototype.BetRate = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ALD_MSG_LeftFreeGameData ID.
         * @member {number} ID
         * @memberof netproto.ALD_MSG_LeftFreeGameData
         * @instance
         */
        ALD_MSG_LeftFreeGameData.prototype.ID = 0;

        /**
         * Creates a new ALD_MSG_LeftFreeGameData instance using the specified properties.
         * @function create
         * @memberof netproto.ALD_MSG_LeftFreeGameData
         * @static
         * @param {netproto.IALD_MSG_LeftFreeGameData=} [properties] Properties to set
         * @returns {netproto.ALD_MSG_LeftFreeGameData} ALD_MSG_LeftFreeGameData instance
         */
        ALD_MSG_LeftFreeGameData.create = function create(properties) {
            return new ALD_MSG_LeftFreeGameData(properties);
        };

        /**
         * Encodes the specified ALD_MSG_LeftFreeGameData message. Does not implicitly {@link netproto.ALD_MSG_LeftFreeGameData.verify|verify} messages.
         * @function encode
         * @memberof netproto.ALD_MSG_LeftFreeGameData
         * @static
         * @param {netproto.IALD_MSG_LeftFreeGameData} message ALD_MSG_LeftFreeGameData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ALD_MSG_LeftFreeGameData.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Count != null && message.hasOwnProperty("Count"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.Count);
            if (message.BetMoney != null && message.hasOwnProperty("BetMoney"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.BetMoney);
            if (message.BetRate != null && message.hasOwnProperty("BetRate"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.BetRate);
            if (message.ID != null && message.hasOwnProperty("ID"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.ID);
            return writer;
        };

        /**
         * Encodes the specified ALD_MSG_LeftFreeGameData message, length delimited. Does not implicitly {@link netproto.ALD_MSG_LeftFreeGameData.verify|verify} messages.
         * @function encodeDelimited
         * @memberof netproto.ALD_MSG_LeftFreeGameData
         * @static
         * @param {netproto.IALD_MSG_LeftFreeGameData} message ALD_MSG_LeftFreeGameData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ALD_MSG_LeftFreeGameData.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ALD_MSG_LeftFreeGameData message from the specified reader or buffer.
         * @function decode
         * @memberof netproto.ALD_MSG_LeftFreeGameData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {netproto.ALD_MSG_LeftFreeGameData} ALD_MSG_LeftFreeGameData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ALD_MSG_LeftFreeGameData.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.netproto.ALD_MSG_LeftFreeGameData();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Count = reader.int32();
                    break;
                case 2:
                    message.BetMoney = reader.int64();
                    break;
                case 3:
                    message.BetRate = reader.int64();
                    break;
                case 4:
                    message.ID = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ALD_MSG_LeftFreeGameData message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof netproto.ALD_MSG_LeftFreeGameData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {netproto.ALD_MSG_LeftFreeGameData} ALD_MSG_LeftFreeGameData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ALD_MSG_LeftFreeGameData.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ALD_MSG_LeftFreeGameData message.
         * @function verify
         * @memberof netproto.ALD_MSG_LeftFreeGameData
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ALD_MSG_LeftFreeGameData.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Count != null && message.hasOwnProperty("Count"))
                if (!$util.isInteger(message.Count))
                    return "Count: integer expected";
            if (message.BetMoney != null && message.hasOwnProperty("BetMoney"))
                if (!$util.isInteger(message.BetMoney) && !(message.BetMoney && $util.isInteger(message.BetMoney.low) && $util.isInteger(message.BetMoney.high)))
                    return "BetMoney: integer|Long expected";
            if (message.BetRate != null && message.hasOwnProperty("BetRate"))
                if (!$util.isInteger(message.BetRate) && !(message.BetRate && $util.isInteger(message.BetRate.low) && $util.isInteger(message.BetRate.high)))
                    return "BetRate: integer|Long expected";
            if (message.ID != null && message.hasOwnProperty("ID"))
                if (!$util.isInteger(message.ID))
                    return "ID: integer expected";
            return null;
        };

        /**
         * Creates a ALD_MSG_LeftFreeGameData message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof netproto.ALD_MSG_LeftFreeGameData
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {netproto.ALD_MSG_LeftFreeGameData} ALD_MSG_LeftFreeGameData
         */
        ALD_MSG_LeftFreeGameData.fromObject = function fromObject(object) {
            if (object instanceof $root.netproto.ALD_MSG_LeftFreeGameData)
                return object;
            var message = new $root.netproto.ALD_MSG_LeftFreeGameData();
            if (object.Count != null)
                message.Count = object.Count | 0;
            if (object.BetMoney != null)
                if ($util.Long)
                    (message.BetMoney = $util.Long.fromValue(object.BetMoney)).unsigned = false;
                else if (typeof object.BetMoney === "string")
                    message.BetMoney = parseInt(object.BetMoney, 10);
                else if (typeof object.BetMoney === "number")
                    message.BetMoney = object.BetMoney;
                else if (typeof object.BetMoney === "object")
                    message.BetMoney = new $util.LongBits(object.BetMoney.low >>> 0, object.BetMoney.high >>> 0).toNumber();
            if (object.BetRate != null)
                if ($util.Long)
                    (message.BetRate = $util.Long.fromValue(object.BetRate)).unsigned = false;
                else if (typeof object.BetRate === "string")
                    message.BetRate = parseInt(object.BetRate, 10);
                else if (typeof object.BetRate === "number")
                    message.BetRate = object.BetRate;
                else if (typeof object.BetRate === "object")
                    message.BetRate = new $util.LongBits(object.BetRate.low >>> 0, object.BetRate.high >>> 0).toNumber();
            if (object.ID != null)
                message.ID = object.ID | 0;
            return message;
        };

        /**
         * Creates a plain object from a ALD_MSG_LeftFreeGameData message. Also converts values to other types if specified.
         * @function toObject
         * @memberof netproto.ALD_MSG_LeftFreeGameData
         * @static
         * @param {netproto.ALD_MSG_LeftFreeGameData} message ALD_MSG_LeftFreeGameData
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ALD_MSG_LeftFreeGameData.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.Count = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.BetMoney = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.BetMoney = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.BetRate = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.BetRate = options.longs === String ? "0" : 0;
                object.ID = 0;
            }
            if (message.Count != null && message.hasOwnProperty("Count"))
                object.Count = message.Count;
            if (message.BetMoney != null && message.hasOwnProperty("BetMoney"))
                if (typeof message.BetMoney === "number")
                    object.BetMoney = options.longs === String ? String(message.BetMoney) : message.BetMoney;
                else
                    object.BetMoney = options.longs === String ? $util.Long.prototype.toString.call(message.BetMoney) : options.longs === Number ? new $util.LongBits(message.BetMoney.low >>> 0, message.BetMoney.high >>> 0).toNumber() : message.BetMoney;
            if (message.BetRate != null && message.hasOwnProperty("BetRate"))
                if (typeof message.BetRate === "number")
                    object.BetRate = options.longs === String ? String(message.BetRate) : message.BetRate;
                else
                    object.BetRate = options.longs === String ? $util.Long.prototype.toString.call(message.BetRate) : options.longs === Number ? new $util.LongBits(message.BetRate.low >>> 0, message.BetRate.high >>> 0).toNumber() : message.BetRate;
            if (message.ID != null && message.hasOwnProperty("ID"))
                object.ID = message.ID;
            return object;
        };

        /**
         * Converts this ALD_MSG_LeftFreeGameData to JSON.
         * @function toJSON
         * @memberof netproto.ALD_MSG_LeftFreeGameData
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ALD_MSG_LeftFreeGameData.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ALD_MSG_LeftFreeGameData;
    })();

    netproto.ALD_MSG_BonusGame = (function() {

        /**
         * Properties of a ALD_MSG_BonusGame.
         * @memberof netproto
         * @interface IALD_MSG_BonusGame
         * @property {Array.<netproto.IALD_BonusGameRecord>|null} [Records] ALD_MSG_BonusGame Records
         * @property {number|Long|null} [WinMoney] ALD_MSG_BonusGame WinMoney
         * @property {netproto.IALD_BonusGameRecord|null} [Others] ALD_MSG_BonusGame Others
         */

        /**
         * Constructs a new ALD_MSG_BonusGame.
         * @memberof netproto
         * @classdesc Represents a ALD_MSG_BonusGame.
         * @implements IALD_MSG_BonusGame
         * @constructor
         * @param {netproto.IALD_MSG_BonusGame=} [properties] Properties to set
         */
        function ALD_MSG_BonusGame(properties) {
            this.Records = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ALD_MSG_BonusGame Records.
         * @member {Array.<netproto.IALD_BonusGameRecord>} Records
         * @memberof netproto.ALD_MSG_BonusGame
         * @instance
         */
        ALD_MSG_BonusGame.prototype.Records = $util.emptyArray;

        /**
         * ALD_MSG_BonusGame WinMoney.
         * @member {number|Long} WinMoney
         * @memberof netproto.ALD_MSG_BonusGame
         * @instance
         */
        ALD_MSG_BonusGame.prototype.WinMoney = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ALD_MSG_BonusGame Others.
         * @member {netproto.IALD_BonusGameRecord|null|undefined} Others
         * @memberof netproto.ALD_MSG_BonusGame
         * @instance
         */
        ALD_MSG_BonusGame.prototype.Others = null;

        /**
         * Creates a new ALD_MSG_BonusGame instance using the specified properties.
         * @function create
         * @memberof netproto.ALD_MSG_BonusGame
         * @static
         * @param {netproto.IALD_MSG_BonusGame=} [properties] Properties to set
         * @returns {netproto.ALD_MSG_BonusGame} ALD_MSG_BonusGame instance
         */
        ALD_MSG_BonusGame.create = function create(properties) {
            return new ALD_MSG_BonusGame(properties);
        };

        /**
         * Encodes the specified ALD_MSG_BonusGame message. Does not implicitly {@link netproto.ALD_MSG_BonusGame.verify|verify} messages.
         * @function encode
         * @memberof netproto.ALD_MSG_BonusGame
         * @static
         * @param {netproto.IALD_MSG_BonusGame} message ALD_MSG_BonusGame message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ALD_MSG_BonusGame.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Records != null && message.Records.length)
                for (var i = 0; i < message.Records.length; ++i)
                    $root.netproto.ALD_BonusGameRecord.encode(message.Records[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.WinMoney != null && message.hasOwnProperty("WinMoney"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.WinMoney);
            if (message.Others != null && message.hasOwnProperty("Others"))
                $root.netproto.ALD_BonusGameRecord.encode(message.Others, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified ALD_MSG_BonusGame message, length delimited. Does not implicitly {@link netproto.ALD_MSG_BonusGame.verify|verify} messages.
         * @function encodeDelimited
         * @memberof netproto.ALD_MSG_BonusGame
         * @static
         * @param {netproto.IALD_MSG_BonusGame} message ALD_MSG_BonusGame message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ALD_MSG_BonusGame.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ALD_MSG_BonusGame message from the specified reader or buffer.
         * @function decode
         * @memberof netproto.ALD_MSG_BonusGame
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {netproto.ALD_MSG_BonusGame} ALD_MSG_BonusGame
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ALD_MSG_BonusGame.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.netproto.ALD_MSG_BonusGame();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.Records && message.Records.length))
                        message.Records = [];
                    message.Records.push($root.netproto.ALD_BonusGameRecord.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.WinMoney = reader.int64();
                    break;
                case 3:
                    message.Others = $root.netproto.ALD_BonusGameRecord.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ALD_MSG_BonusGame message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof netproto.ALD_MSG_BonusGame
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {netproto.ALD_MSG_BonusGame} ALD_MSG_BonusGame
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ALD_MSG_BonusGame.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ALD_MSG_BonusGame message.
         * @function verify
         * @memberof netproto.ALD_MSG_BonusGame
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ALD_MSG_BonusGame.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Records != null && message.hasOwnProperty("Records")) {
                if (!Array.isArray(message.Records))
                    return "Records: array expected";
                for (var i = 0; i < message.Records.length; ++i) {
                    var error = $root.netproto.ALD_BonusGameRecord.verify(message.Records[i]);
                    if (error)
                        return "Records." + error;
                }
            }
            if (message.WinMoney != null && message.hasOwnProperty("WinMoney"))
                if (!$util.isInteger(message.WinMoney) && !(message.WinMoney && $util.isInteger(message.WinMoney.low) && $util.isInteger(message.WinMoney.high)))
                    return "WinMoney: integer|Long expected";
            if (message.Others != null && message.hasOwnProperty("Others")) {
                var error = $root.netproto.ALD_BonusGameRecord.verify(message.Others);
                if (error)
                    return "Others." + error;
            }
            return null;
        };

        /**
         * Creates a ALD_MSG_BonusGame message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof netproto.ALD_MSG_BonusGame
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {netproto.ALD_MSG_BonusGame} ALD_MSG_BonusGame
         */
        ALD_MSG_BonusGame.fromObject = function fromObject(object) {
            if (object instanceof $root.netproto.ALD_MSG_BonusGame)
                return object;
            var message = new $root.netproto.ALD_MSG_BonusGame();
            if (object.Records) {
                if (!Array.isArray(object.Records))
                    throw TypeError(".netproto.ALD_MSG_BonusGame.Records: array expected");
                message.Records = [];
                for (var i = 0; i < object.Records.length; ++i) {
                    if (typeof object.Records[i] !== "object")
                        throw TypeError(".netproto.ALD_MSG_BonusGame.Records: object expected");
                    message.Records[i] = $root.netproto.ALD_BonusGameRecord.fromObject(object.Records[i]);
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
            if (object.Others != null) {
                if (typeof object.Others !== "object")
                    throw TypeError(".netproto.ALD_MSG_BonusGame.Others: object expected");
                message.Others = $root.netproto.ALD_BonusGameRecord.fromObject(object.Others);
            }
            return message;
        };

        /**
         * Creates a plain object from a ALD_MSG_BonusGame message. Also converts values to other types if specified.
         * @function toObject
         * @memberof netproto.ALD_MSG_BonusGame
         * @static
         * @param {netproto.ALD_MSG_BonusGame} message ALD_MSG_BonusGame
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ALD_MSG_BonusGame.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.Records = [];
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.WinMoney = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.WinMoney = options.longs === String ? "0" : 0;
                object.Others = null;
            }
            if (message.Records && message.Records.length) {
                object.Records = [];
                for (var j = 0; j < message.Records.length; ++j)
                    object.Records[j] = $root.netproto.ALD_BonusGameRecord.toObject(message.Records[j], options);
            }
            if (message.WinMoney != null && message.hasOwnProperty("WinMoney"))
                if (typeof message.WinMoney === "number")
                    object.WinMoney = options.longs === String ? String(message.WinMoney) : message.WinMoney;
                else
                    object.WinMoney = options.longs === String ? $util.Long.prototype.toString.call(message.WinMoney) : options.longs === Number ? new $util.LongBits(message.WinMoney.low >>> 0, message.WinMoney.high >>> 0).toNumber() : message.WinMoney;
            if (message.Others != null && message.hasOwnProperty("Others"))
                object.Others = $root.netproto.ALD_BonusGameRecord.toObject(message.Others, options);
            return object;
        };

        /**
         * Converts this ALD_MSG_BonusGame to JSON.
         * @function toJSON
         * @memberof netproto.ALD_MSG_BonusGame
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ALD_MSG_BonusGame.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ALD_MSG_BonusGame;
    })();

    netproto.ALD_MSG_Spin = (function() {

        /**
         * Properties of a ALD_MSG_Spin.
         * @memberof netproto
         * @interface IALD_MSG_Spin
         * @property {number|Long|null} [Money] ALD_MSG_Spin Money
         * @property {number|null} [Rate] ALD_MSG_Spin Rate
         */

        /**
         * Constructs a new ALD_MSG_Spin.
         * @memberof netproto
         * @classdesc Represents a ALD_MSG_Spin.
         * @implements IALD_MSG_Spin
         * @constructor
         * @param {netproto.IALD_MSG_Spin=} [properties] Properties to set
         */
        function ALD_MSG_Spin(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ALD_MSG_Spin Money.
         * @member {number|Long} Money
         * @memberof netproto.ALD_MSG_Spin
         * @instance
         */
        ALD_MSG_Spin.prototype.Money = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ALD_MSG_Spin Rate.
         * @member {number} Rate
         * @memberof netproto.ALD_MSG_Spin
         * @instance
         */
        ALD_MSG_Spin.prototype.Rate = 0;

        /**
         * Creates a new ALD_MSG_Spin instance using the specified properties.
         * @function create
         * @memberof netproto.ALD_MSG_Spin
         * @static
         * @param {netproto.IALD_MSG_Spin=} [properties] Properties to set
         * @returns {netproto.ALD_MSG_Spin} ALD_MSG_Spin instance
         */
        ALD_MSG_Spin.create = function create(properties) {
            return new ALD_MSG_Spin(properties);
        };

        /**
         * Encodes the specified ALD_MSG_Spin message. Does not implicitly {@link netproto.ALD_MSG_Spin.verify|verify} messages.
         * @function encode
         * @memberof netproto.ALD_MSG_Spin
         * @static
         * @param {netproto.IALD_MSG_Spin} message ALD_MSG_Spin message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ALD_MSG_Spin.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Money != null && message.hasOwnProperty("Money"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.Money);
            if (message.Rate != null && message.hasOwnProperty("Rate"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.Rate);
            return writer;
        };

        /**
         * Encodes the specified ALD_MSG_Spin message, length delimited. Does not implicitly {@link netproto.ALD_MSG_Spin.verify|verify} messages.
         * @function encodeDelimited
         * @memberof netproto.ALD_MSG_Spin
         * @static
         * @param {netproto.IALD_MSG_Spin} message ALD_MSG_Spin message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ALD_MSG_Spin.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ALD_MSG_Spin message from the specified reader or buffer.
         * @function decode
         * @memberof netproto.ALD_MSG_Spin
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {netproto.ALD_MSG_Spin} ALD_MSG_Spin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ALD_MSG_Spin.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.netproto.ALD_MSG_Spin();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Money = reader.int64();
                    break;
                case 2:
                    message.Rate = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ALD_MSG_Spin message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof netproto.ALD_MSG_Spin
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {netproto.ALD_MSG_Spin} ALD_MSG_Spin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ALD_MSG_Spin.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ALD_MSG_Spin message.
         * @function verify
         * @memberof netproto.ALD_MSG_Spin
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ALD_MSG_Spin.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Money != null && message.hasOwnProperty("Money"))
                if (!$util.isInteger(message.Money) && !(message.Money && $util.isInteger(message.Money.low) && $util.isInteger(message.Money.high)))
                    return "Money: integer|Long expected";
            if (message.Rate != null && message.hasOwnProperty("Rate"))
                if (!$util.isInteger(message.Rate))
                    return "Rate: integer expected";
            return null;
        };

        /**
         * Creates a ALD_MSG_Spin message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof netproto.ALD_MSG_Spin
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {netproto.ALD_MSG_Spin} ALD_MSG_Spin
         */
        ALD_MSG_Spin.fromObject = function fromObject(object) {
            if (object instanceof $root.netproto.ALD_MSG_Spin)
                return object;
            var message = new $root.netproto.ALD_MSG_Spin();
            if (object.Money != null)
                if ($util.Long)
                    (message.Money = $util.Long.fromValue(object.Money)).unsigned = false;
                else if (typeof object.Money === "string")
                    message.Money = parseInt(object.Money, 10);
                else if (typeof object.Money === "number")
                    message.Money = object.Money;
                else if (typeof object.Money === "object")
                    message.Money = new $util.LongBits(object.Money.low >>> 0, object.Money.high >>> 0).toNumber();
            if (object.Rate != null)
                message.Rate = object.Rate | 0;
            return message;
        };

        /**
         * Creates a plain object from a ALD_MSG_Spin message. Also converts values to other types if specified.
         * @function toObject
         * @memberof netproto.ALD_MSG_Spin
         * @static
         * @param {netproto.ALD_MSG_Spin} message ALD_MSG_Spin
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ALD_MSG_Spin.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.Money = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.Money = options.longs === String ? "0" : 0;
                object.Rate = 0;
            }
            if (message.Money != null && message.hasOwnProperty("Money"))
                if (typeof message.Money === "number")
                    object.Money = options.longs === String ? String(message.Money) : message.Money;
                else
                    object.Money = options.longs === String ? $util.Long.prototype.toString.call(message.Money) : options.longs === Number ? new $util.LongBits(message.Money.low >>> 0, message.Money.high >>> 0).toNumber() : message.Money;
            if (message.Rate != null && message.hasOwnProperty("Rate"))
                object.Rate = message.Rate;
            return object;
        };

        /**
         * Converts this ALD_MSG_Spin to JSON.
         * @function toJSON
         * @memberof netproto.ALD_MSG_Spin
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ALD_MSG_Spin.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ALD_MSG_Spin;
    })();

    netproto.ALD_MSG_JackpotPool = (function() {

        /**
         * Properties of a ALD_MSG_JackpotPool.
         * @memberof netproto
         * @interface IALD_MSG_JackpotPool
         * @property {Array.<netproto.IALD_JackpotInfo>|null} [Jackpots] ALD_MSG_JackpotPool Jackpots
         */

        /**
         * Constructs a new ALD_MSG_JackpotPool.
         * @memberof netproto
         * @classdesc Represents a ALD_MSG_JackpotPool.
         * @implements IALD_MSG_JackpotPool
         * @constructor
         * @param {netproto.IALD_MSG_JackpotPool=} [properties] Properties to set
         */
        function ALD_MSG_JackpotPool(properties) {
            this.Jackpots = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ALD_MSG_JackpotPool Jackpots.
         * @member {Array.<netproto.IALD_JackpotInfo>} Jackpots
         * @memberof netproto.ALD_MSG_JackpotPool
         * @instance
         */
        ALD_MSG_JackpotPool.prototype.Jackpots = $util.emptyArray;

        /**
         * Creates a new ALD_MSG_JackpotPool instance using the specified properties.
         * @function create
         * @memberof netproto.ALD_MSG_JackpotPool
         * @static
         * @param {netproto.IALD_MSG_JackpotPool=} [properties] Properties to set
         * @returns {netproto.ALD_MSG_JackpotPool} ALD_MSG_JackpotPool instance
         */
        ALD_MSG_JackpotPool.create = function create(properties) {
            return new ALD_MSG_JackpotPool(properties);
        };

        /**
         * Encodes the specified ALD_MSG_JackpotPool message. Does not implicitly {@link netproto.ALD_MSG_JackpotPool.verify|verify} messages.
         * @function encode
         * @memberof netproto.ALD_MSG_JackpotPool
         * @static
         * @param {netproto.IALD_MSG_JackpotPool} message ALD_MSG_JackpotPool message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ALD_MSG_JackpotPool.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Jackpots != null && message.Jackpots.length)
                for (var i = 0; i < message.Jackpots.length; ++i)
                    $root.netproto.ALD_JackpotInfo.encode(message.Jackpots[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified ALD_MSG_JackpotPool message, length delimited. Does not implicitly {@link netproto.ALD_MSG_JackpotPool.verify|verify} messages.
         * @function encodeDelimited
         * @memberof netproto.ALD_MSG_JackpotPool
         * @static
         * @param {netproto.IALD_MSG_JackpotPool} message ALD_MSG_JackpotPool message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ALD_MSG_JackpotPool.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ALD_MSG_JackpotPool message from the specified reader or buffer.
         * @function decode
         * @memberof netproto.ALD_MSG_JackpotPool
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {netproto.ALD_MSG_JackpotPool} ALD_MSG_JackpotPool
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ALD_MSG_JackpotPool.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.netproto.ALD_MSG_JackpotPool();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.Jackpots && message.Jackpots.length))
                        message.Jackpots = [];
                    message.Jackpots.push($root.netproto.ALD_JackpotInfo.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ALD_MSG_JackpotPool message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof netproto.ALD_MSG_JackpotPool
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {netproto.ALD_MSG_JackpotPool} ALD_MSG_JackpotPool
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ALD_MSG_JackpotPool.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ALD_MSG_JackpotPool message.
         * @function verify
         * @memberof netproto.ALD_MSG_JackpotPool
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ALD_MSG_JackpotPool.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Jackpots != null && message.hasOwnProperty("Jackpots")) {
                if (!Array.isArray(message.Jackpots))
                    return "Jackpots: array expected";
                for (var i = 0; i < message.Jackpots.length; ++i) {
                    var error = $root.netproto.ALD_JackpotInfo.verify(message.Jackpots[i]);
                    if (error)
                        return "Jackpots." + error;
                }
            }
            return null;
        };

        /**
         * Creates a ALD_MSG_JackpotPool message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof netproto.ALD_MSG_JackpotPool
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {netproto.ALD_MSG_JackpotPool} ALD_MSG_JackpotPool
         */
        ALD_MSG_JackpotPool.fromObject = function fromObject(object) {
            if (object instanceof $root.netproto.ALD_MSG_JackpotPool)
                return object;
            var message = new $root.netproto.ALD_MSG_JackpotPool();
            if (object.Jackpots) {
                if (!Array.isArray(object.Jackpots))
                    throw TypeError(".netproto.ALD_MSG_JackpotPool.Jackpots: array expected");
                message.Jackpots = [];
                for (var i = 0; i < object.Jackpots.length; ++i) {
                    if (typeof object.Jackpots[i] !== "object")
                        throw TypeError(".netproto.ALD_MSG_JackpotPool.Jackpots: object expected");
                    message.Jackpots[i] = $root.netproto.ALD_JackpotInfo.fromObject(object.Jackpots[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a ALD_MSG_JackpotPool message. Also converts values to other types if specified.
         * @function toObject
         * @memberof netproto.ALD_MSG_JackpotPool
         * @static
         * @param {netproto.ALD_MSG_JackpotPool} message ALD_MSG_JackpotPool
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ALD_MSG_JackpotPool.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.Jackpots = [];
            if (message.Jackpots && message.Jackpots.length) {
                object.Jackpots = [];
                for (var j = 0; j < message.Jackpots.length; ++j)
                    object.Jackpots[j] = $root.netproto.ALD_JackpotInfo.toObject(message.Jackpots[j], options);
            }
            return object;
        };

        /**
         * Converts this ALD_MSG_JackpotPool to JSON.
         * @function toJSON
         * @memberof netproto.ALD_MSG_JackpotPool
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ALD_MSG_JackpotPool.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ALD_MSG_JackpotPool;
    })();

    netproto.ALD_MSG_GameLogRead = (function() {

        /**
         * Properties of a ALD_MSG_GameLogRead.
         * @memberof netproto
         * @interface IALD_MSG_GameLogRead
         * @property {number|null} [UserID] ALD_MSG_GameLogRead UserID
         * @property {number|null} [GameID] ALD_MSG_GameLogRead GameID
         * @property {string|null} [StartTime] ALD_MSG_GameLogRead StartTime
         * @property {string|null} [EndTime] ALD_MSG_GameLogRead EndTime
         * @property {number|null} [PageIndex] ALD_MSG_GameLogRead PageIndex
         * @property {number|null} [PageSize] ALD_MSG_GameLogRead PageSize
         */

        /**
         * Constructs a new ALD_MSG_GameLogRead.
         * @memberof netproto
         * @classdesc Represents a ALD_MSG_GameLogRead.
         * @implements IALD_MSG_GameLogRead
         * @constructor
         * @param {netproto.IALD_MSG_GameLogRead=} [properties] Properties to set
         */
        function ALD_MSG_GameLogRead(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ALD_MSG_GameLogRead UserID.
         * @member {number} UserID
         * @memberof netproto.ALD_MSG_GameLogRead
         * @instance
         */
        ALD_MSG_GameLogRead.prototype.UserID = 0;

        /**
         * ALD_MSG_GameLogRead GameID.
         * @member {number} GameID
         * @memberof netproto.ALD_MSG_GameLogRead
         * @instance
         */
        ALD_MSG_GameLogRead.prototype.GameID = 0;

        /**
         * ALD_MSG_GameLogRead StartTime.
         * @member {string} StartTime
         * @memberof netproto.ALD_MSG_GameLogRead
         * @instance
         */
        ALD_MSG_GameLogRead.prototype.StartTime = "";

        /**
         * ALD_MSG_GameLogRead EndTime.
         * @member {string} EndTime
         * @memberof netproto.ALD_MSG_GameLogRead
         * @instance
         */
        ALD_MSG_GameLogRead.prototype.EndTime = "";

        /**
         * ALD_MSG_GameLogRead PageIndex.
         * @member {number} PageIndex
         * @memberof netproto.ALD_MSG_GameLogRead
         * @instance
         */
        ALD_MSG_GameLogRead.prototype.PageIndex = 0;

        /**
         * ALD_MSG_GameLogRead PageSize.
         * @member {number} PageSize
         * @memberof netproto.ALD_MSG_GameLogRead
         * @instance
         */
        ALD_MSG_GameLogRead.prototype.PageSize = 0;

        /**
         * Creates a new ALD_MSG_GameLogRead instance using the specified properties.
         * @function create
         * @memberof netproto.ALD_MSG_GameLogRead
         * @static
         * @param {netproto.IALD_MSG_GameLogRead=} [properties] Properties to set
         * @returns {netproto.ALD_MSG_GameLogRead} ALD_MSG_GameLogRead instance
         */
        ALD_MSG_GameLogRead.create = function create(properties) {
            return new ALD_MSG_GameLogRead(properties);
        };

        /**
         * Encodes the specified ALD_MSG_GameLogRead message. Does not implicitly {@link netproto.ALD_MSG_GameLogRead.verify|verify} messages.
         * @function encode
         * @memberof netproto.ALD_MSG_GameLogRead
         * @static
         * @param {netproto.IALD_MSG_GameLogRead} message ALD_MSG_GameLogRead message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ALD_MSG_GameLogRead.encode = function encode(message, writer) {
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
         * Encodes the specified ALD_MSG_GameLogRead message, length delimited. Does not implicitly {@link netproto.ALD_MSG_GameLogRead.verify|verify} messages.
         * @function encodeDelimited
         * @memberof netproto.ALD_MSG_GameLogRead
         * @static
         * @param {netproto.IALD_MSG_GameLogRead} message ALD_MSG_GameLogRead message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ALD_MSG_GameLogRead.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ALD_MSG_GameLogRead message from the specified reader or buffer.
         * @function decode
         * @memberof netproto.ALD_MSG_GameLogRead
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {netproto.ALD_MSG_GameLogRead} ALD_MSG_GameLogRead
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ALD_MSG_GameLogRead.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.netproto.ALD_MSG_GameLogRead();
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
         * Decodes a ALD_MSG_GameLogRead message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof netproto.ALD_MSG_GameLogRead
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {netproto.ALD_MSG_GameLogRead} ALD_MSG_GameLogRead
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ALD_MSG_GameLogRead.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ALD_MSG_GameLogRead message.
         * @function verify
         * @memberof netproto.ALD_MSG_GameLogRead
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ALD_MSG_GameLogRead.verify = function verify(message) {
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
         * Creates a ALD_MSG_GameLogRead message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof netproto.ALD_MSG_GameLogRead
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {netproto.ALD_MSG_GameLogRead} ALD_MSG_GameLogRead
         */
        ALD_MSG_GameLogRead.fromObject = function fromObject(object) {
            if (object instanceof $root.netproto.ALD_MSG_GameLogRead)
                return object;
            var message = new $root.netproto.ALD_MSG_GameLogRead();
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
         * Creates a plain object from a ALD_MSG_GameLogRead message. Also converts values to other types if specified.
         * @function toObject
         * @memberof netproto.ALD_MSG_GameLogRead
         * @static
         * @param {netproto.ALD_MSG_GameLogRead} message ALD_MSG_GameLogRead
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ALD_MSG_GameLogRead.toObject = function toObject(message, options) {
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
         * Converts this ALD_MSG_GameLogRead to JSON.
         * @function toJSON
         * @memberof netproto.ALD_MSG_GameLogRead
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ALD_MSG_GameLogRead.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ALD_MSG_GameLogRead;
    })();

    netproto.ALD_MSG_GameLogRecord = (function() {

        /**
         * Properties of a ALD_MSG_GameLogRecord.
         * @memberof netproto
         * @interface IALD_MSG_GameLogRecord
         * @property {number|null} [UserID] ALD_MSG_GameLogRecord UserID
         * @property {number|null} [GameID] ALD_MSG_GameLogRecord GameID
         * @property {number|null} [PageCount] ALD_MSG_GameLogRecord PageCount
         * @property {Array.<netproto.IALD_GameLog>|null} [Logs] ALD_MSG_GameLogRecord Logs
         */

        /**
         * Constructs a new ALD_MSG_GameLogRecord.
         * @memberof netproto
         * @classdesc Represents a ALD_MSG_GameLogRecord.
         * @implements IALD_MSG_GameLogRecord
         * @constructor
         * @param {netproto.IALD_MSG_GameLogRecord=} [properties] Properties to set
         */
        function ALD_MSG_GameLogRecord(properties) {
            this.Logs = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ALD_MSG_GameLogRecord UserID.
         * @member {number} UserID
         * @memberof netproto.ALD_MSG_GameLogRecord
         * @instance
         */
        ALD_MSG_GameLogRecord.prototype.UserID = 0;

        /**
         * ALD_MSG_GameLogRecord GameID.
         * @member {number} GameID
         * @memberof netproto.ALD_MSG_GameLogRecord
         * @instance
         */
        ALD_MSG_GameLogRecord.prototype.GameID = 0;

        /**
         * ALD_MSG_GameLogRecord PageCount.
         * @member {number} PageCount
         * @memberof netproto.ALD_MSG_GameLogRecord
         * @instance
         */
        ALD_MSG_GameLogRecord.prototype.PageCount = 0;

        /**
         * ALD_MSG_GameLogRecord Logs.
         * @member {Array.<netproto.IALD_GameLog>} Logs
         * @memberof netproto.ALD_MSG_GameLogRecord
         * @instance
         */
        ALD_MSG_GameLogRecord.prototype.Logs = $util.emptyArray;

        /**
         * Creates a new ALD_MSG_GameLogRecord instance using the specified properties.
         * @function create
         * @memberof netproto.ALD_MSG_GameLogRecord
         * @static
         * @param {netproto.IALD_MSG_GameLogRecord=} [properties] Properties to set
         * @returns {netproto.ALD_MSG_GameLogRecord} ALD_MSG_GameLogRecord instance
         */
        ALD_MSG_GameLogRecord.create = function create(properties) {
            return new ALD_MSG_GameLogRecord(properties);
        };

        /**
         * Encodes the specified ALD_MSG_GameLogRecord message. Does not implicitly {@link netproto.ALD_MSG_GameLogRecord.verify|verify} messages.
         * @function encode
         * @memberof netproto.ALD_MSG_GameLogRecord
         * @static
         * @param {netproto.IALD_MSG_GameLogRecord} message ALD_MSG_GameLogRecord message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ALD_MSG_GameLogRecord.encode = function encode(message, writer) {
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
                    $root.netproto.ALD_GameLog.encode(message.Logs[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified ALD_MSG_GameLogRecord message, length delimited. Does not implicitly {@link netproto.ALD_MSG_GameLogRecord.verify|verify} messages.
         * @function encodeDelimited
         * @memberof netproto.ALD_MSG_GameLogRecord
         * @static
         * @param {netproto.IALD_MSG_GameLogRecord} message ALD_MSG_GameLogRecord message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ALD_MSG_GameLogRecord.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ALD_MSG_GameLogRecord message from the specified reader or buffer.
         * @function decode
         * @memberof netproto.ALD_MSG_GameLogRecord
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {netproto.ALD_MSG_GameLogRecord} ALD_MSG_GameLogRecord
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ALD_MSG_GameLogRecord.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.netproto.ALD_MSG_GameLogRecord();
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
                    message.Logs.push($root.netproto.ALD_GameLog.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ALD_MSG_GameLogRecord message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof netproto.ALD_MSG_GameLogRecord
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {netproto.ALD_MSG_GameLogRecord} ALD_MSG_GameLogRecord
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ALD_MSG_GameLogRecord.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ALD_MSG_GameLogRecord message.
         * @function verify
         * @memberof netproto.ALD_MSG_GameLogRecord
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ALD_MSG_GameLogRecord.verify = function verify(message) {
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
                    var error = $root.netproto.ALD_GameLog.verify(message.Logs[i]);
                    if (error)
                        return "Logs." + error;
                }
            }
            return null;
        };

        /**
         * Creates a ALD_MSG_GameLogRecord message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof netproto.ALD_MSG_GameLogRecord
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {netproto.ALD_MSG_GameLogRecord} ALD_MSG_GameLogRecord
         */
        ALD_MSG_GameLogRecord.fromObject = function fromObject(object) {
            if (object instanceof $root.netproto.ALD_MSG_GameLogRecord)
                return object;
            var message = new $root.netproto.ALD_MSG_GameLogRecord();
            if (object.UserID != null)
                message.UserID = object.UserID | 0;
            if (object.GameID != null)
                message.GameID = object.GameID | 0;
            if (object.PageCount != null)
                message.PageCount = object.PageCount | 0;
            if (object.Logs) {
                if (!Array.isArray(object.Logs))
                    throw TypeError(".netproto.ALD_MSG_GameLogRecord.Logs: array expected");
                message.Logs = [];
                for (var i = 0; i < object.Logs.length; ++i) {
                    if (typeof object.Logs[i] !== "object")
                        throw TypeError(".netproto.ALD_MSG_GameLogRecord.Logs: object expected");
                    message.Logs[i] = $root.netproto.ALD_GameLog.fromObject(object.Logs[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a ALD_MSG_GameLogRecord message. Also converts values to other types if specified.
         * @function toObject
         * @memberof netproto.ALD_MSG_GameLogRecord
         * @static
         * @param {netproto.ALD_MSG_GameLogRecord} message ALD_MSG_GameLogRecord
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ALD_MSG_GameLogRecord.toObject = function toObject(message, options) {
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
                    object.Logs[j] = $root.netproto.ALD_GameLog.toObject(message.Logs[j], options);
            }
            return object;
        };

        /**
         * Converts this ALD_MSG_GameLogRecord to JSON.
         * @function toJSON
         * @memberof netproto.ALD_MSG_GameLogRecord
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ALD_MSG_GameLogRecord.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ALD_MSG_GameLogRecord;
    })();

    netproto.ALD_MSG_LightningPrepare = (function() {

        /**
         * Properties of a ALD_MSG_LightningPrepare.
         * @memberof netproto
         * @interface IALD_MSG_LightningPrepare
         * @property {number|null} [LightningStep] ALD_MSG_LightningPrepare LightningStep
         * @property {Array.<netproto.IALD_ReelSetting>|null} [ReelSetting] ALD_MSG_LightningPrepare ReelSetting
         * @property {Array.<netproto.IALD_LightningLock>|null} [LockSymbols] ALD_MSG_LightningPrepare LockSymbols
         * @property {number|null} [Count] ALD_MSG_LightningPrepare Count
         * @property {boolean|null} [IsFreeGame] ALD_MSG_LightningPrepare IsFreeGame
         * @property {Array.<netproto.IALD_ReelResult>|null} [ReelResult] ALD_MSG_LightningPrepare ReelResult
         */

        /**
         * Constructs a new ALD_MSG_LightningPrepare.
         * @memberof netproto
         * @classdesc Represents a ALD_MSG_LightningPrepare.
         * @implements IALD_MSG_LightningPrepare
         * @constructor
         * @param {netproto.IALD_MSG_LightningPrepare=} [properties] Properties to set
         */
        function ALD_MSG_LightningPrepare(properties) {
            this.ReelSetting = [];
            this.LockSymbols = [];
            this.ReelResult = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ALD_MSG_LightningPrepare LightningStep.
         * @member {number} LightningStep
         * @memberof netproto.ALD_MSG_LightningPrepare
         * @instance
         */
        ALD_MSG_LightningPrepare.prototype.LightningStep = 0;

        /**
         * ALD_MSG_LightningPrepare ReelSetting.
         * @member {Array.<netproto.IALD_ReelSetting>} ReelSetting
         * @memberof netproto.ALD_MSG_LightningPrepare
         * @instance
         */
        ALD_MSG_LightningPrepare.prototype.ReelSetting = $util.emptyArray;

        /**
         * ALD_MSG_LightningPrepare LockSymbols.
         * @member {Array.<netproto.IALD_LightningLock>} LockSymbols
         * @memberof netproto.ALD_MSG_LightningPrepare
         * @instance
         */
        ALD_MSG_LightningPrepare.prototype.LockSymbols = $util.emptyArray;

        /**
         * ALD_MSG_LightningPrepare Count.
         * @member {number} Count
         * @memberof netproto.ALD_MSG_LightningPrepare
         * @instance
         */
        ALD_MSG_LightningPrepare.prototype.Count = 0;

        /**
         * ALD_MSG_LightningPrepare IsFreeGame.
         * @member {boolean} IsFreeGame
         * @memberof netproto.ALD_MSG_LightningPrepare
         * @instance
         */
        ALD_MSG_LightningPrepare.prototype.IsFreeGame = false;

        /**
         * ALD_MSG_LightningPrepare ReelResult.
         * @member {Array.<netproto.IALD_ReelResult>} ReelResult
         * @memberof netproto.ALD_MSG_LightningPrepare
         * @instance
         */
        ALD_MSG_LightningPrepare.prototype.ReelResult = $util.emptyArray;

        /**
         * Creates a new ALD_MSG_LightningPrepare instance using the specified properties.
         * @function create
         * @memberof netproto.ALD_MSG_LightningPrepare
         * @static
         * @param {netproto.IALD_MSG_LightningPrepare=} [properties] Properties to set
         * @returns {netproto.ALD_MSG_LightningPrepare} ALD_MSG_LightningPrepare instance
         */
        ALD_MSG_LightningPrepare.create = function create(properties) {
            return new ALD_MSG_LightningPrepare(properties);
        };

        /**
         * Encodes the specified ALD_MSG_LightningPrepare message. Does not implicitly {@link netproto.ALD_MSG_LightningPrepare.verify|verify} messages.
         * @function encode
         * @memberof netproto.ALD_MSG_LightningPrepare
         * @static
         * @param {netproto.IALD_MSG_LightningPrepare} message ALD_MSG_LightningPrepare message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ALD_MSG_LightningPrepare.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.LightningStep != null && message.hasOwnProperty("LightningStep"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.LightningStep);
            if (message.ReelSetting != null && message.ReelSetting.length)
                for (var i = 0; i < message.ReelSetting.length; ++i)
                    $root.netproto.ALD_ReelSetting.encode(message.ReelSetting[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.LockSymbols != null && message.LockSymbols.length)
                for (var i = 0; i < message.LockSymbols.length; ++i)
                    $root.netproto.ALD_LightningLock.encode(message.LockSymbols[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.Count != null && message.hasOwnProperty("Count"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.Count);
            if (message.IsFreeGame != null && message.hasOwnProperty("IsFreeGame"))
                writer.uint32(/* id 5, wireType 0 =*/40).bool(message.IsFreeGame);
            if (message.ReelResult != null && message.ReelResult.length)
                for (var i = 0; i < message.ReelResult.length; ++i)
                    $root.netproto.ALD_ReelResult.encode(message.ReelResult[i], writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified ALD_MSG_LightningPrepare message, length delimited. Does not implicitly {@link netproto.ALD_MSG_LightningPrepare.verify|verify} messages.
         * @function encodeDelimited
         * @memberof netproto.ALD_MSG_LightningPrepare
         * @static
         * @param {netproto.IALD_MSG_LightningPrepare} message ALD_MSG_LightningPrepare message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ALD_MSG_LightningPrepare.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ALD_MSG_LightningPrepare message from the specified reader or buffer.
         * @function decode
         * @memberof netproto.ALD_MSG_LightningPrepare
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {netproto.ALD_MSG_LightningPrepare} ALD_MSG_LightningPrepare
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ALD_MSG_LightningPrepare.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.netproto.ALD_MSG_LightningPrepare();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.LightningStep = reader.int32();
                    break;
                case 2:
                    if (!(message.ReelSetting && message.ReelSetting.length))
                        message.ReelSetting = [];
                    message.ReelSetting.push($root.netproto.ALD_ReelSetting.decode(reader, reader.uint32()));
                    break;
                case 3:
                    if (!(message.LockSymbols && message.LockSymbols.length))
                        message.LockSymbols = [];
                    message.LockSymbols.push($root.netproto.ALD_LightningLock.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.Count = reader.int32();
                    break;
                case 5:
                    message.IsFreeGame = reader.bool();
                    break;
                case 6:
                    if (!(message.ReelResult && message.ReelResult.length))
                        message.ReelResult = [];
                    message.ReelResult.push($root.netproto.ALD_ReelResult.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ALD_MSG_LightningPrepare message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof netproto.ALD_MSG_LightningPrepare
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {netproto.ALD_MSG_LightningPrepare} ALD_MSG_LightningPrepare
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ALD_MSG_LightningPrepare.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ALD_MSG_LightningPrepare message.
         * @function verify
         * @memberof netproto.ALD_MSG_LightningPrepare
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ALD_MSG_LightningPrepare.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.LightningStep != null && message.hasOwnProperty("LightningStep"))
                if (!$util.isInteger(message.LightningStep))
                    return "LightningStep: integer expected";
            if (message.ReelSetting != null && message.hasOwnProperty("ReelSetting")) {
                if (!Array.isArray(message.ReelSetting))
                    return "ReelSetting: array expected";
                for (var i = 0; i < message.ReelSetting.length; ++i) {
                    var error = $root.netproto.ALD_ReelSetting.verify(message.ReelSetting[i]);
                    if (error)
                        return "ReelSetting." + error;
                }
            }
            if (message.LockSymbols != null && message.hasOwnProperty("LockSymbols")) {
                if (!Array.isArray(message.LockSymbols))
                    return "LockSymbols: array expected";
                for (var i = 0; i < message.LockSymbols.length; ++i) {
                    var error = $root.netproto.ALD_LightningLock.verify(message.LockSymbols[i]);
                    if (error)
                        return "LockSymbols." + error;
                }
            }
            if (message.Count != null && message.hasOwnProperty("Count"))
                if (!$util.isInteger(message.Count))
                    return "Count: integer expected";
            if (message.IsFreeGame != null && message.hasOwnProperty("IsFreeGame"))
                if (typeof message.IsFreeGame !== "boolean")
                    return "IsFreeGame: boolean expected";
            if (message.ReelResult != null && message.hasOwnProperty("ReelResult")) {
                if (!Array.isArray(message.ReelResult))
                    return "ReelResult: array expected";
                for (var i = 0; i < message.ReelResult.length; ++i) {
                    var error = $root.netproto.ALD_ReelResult.verify(message.ReelResult[i]);
                    if (error)
                        return "ReelResult." + error;
                }
            }
            return null;
        };

        /**
         * Creates a ALD_MSG_LightningPrepare message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof netproto.ALD_MSG_LightningPrepare
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {netproto.ALD_MSG_LightningPrepare} ALD_MSG_LightningPrepare
         */
        ALD_MSG_LightningPrepare.fromObject = function fromObject(object) {
            if (object instanceof $root.netproto.ALD_MSG_LightningPrepare)
                return object;
            var message = new $root.netproto.ALD_MSG_LightningPrepare();
            if (object.LightningStep != null)
                message.LightningStep = object.LightningStep | 0;
            if (object.ReelSetting) {
                if (!Array.isArray(object.ReelSetting))
                    throw TypeError(".netproto.ALD_MSG_LightningPrepare.ReelSetting: array expected");
                message.ReelSetting = [];
                for (var i = 0; i < object.ReelSetting.length; ++i) {
                    if (typeof object.ReelSetting[i] !== "object")
                        throw TypeError(".netproto.ALD_MSG_LightningPrepare.ReelSetting: object expected");
                    message.ReelSetting[i] = $root.netproto.ALD_ReelSetting.fromObject(object.ReelSetting[i]);
                }
            }
            if (object.LockSymbols) {
                if (!Array.isArray(object.LockSymbols))
                    throw TypeError(".netproto.ALD_MSG_LightningPrepare.LockSymbols: array expected");
                message.LockSymbols = [];
                for (var i = 0; i < object.LockSymbols.length; ++i) {
                    if (typeof object.LockSymbols[i] !== "object")
                        throw TypeError(".netproto.ALD_MSG_LightningPrepare.LockSymbols: object expected");
                    message.LockSymbols[i] = $root.netproto.ALD_LightningLock.fromObject(object.LockSymbols[i]);
                }
            }
            if (object.Count != null)
                message.Count = object.Count | 0;
            if (object.IsFreeGame != null)
                message.IsFreeGame = Boolean(object.IsFreeGame);
            if (object.ReelResult) {
                if (!Array.isArray(object.ReelResult))
                    throw TypeError(".netproto.ALD_MSG_LightningPrepare.ReelResult: array expected");
                message.ReelResult = [];
                for (var i = 0; i < object.ReelResult.length; ++i) {
                    if (typeof object.ReelResult[i] !== "object")
                        throw TypeError(".netproto.ALD_MSG_LightningPrepare.ReelResult: object expected");
                    message.ReelResult[i] = $root.netproto.ALD_ReelResult.fromObject(object.ReelResult[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a ALD_MSG_LightningPrepare message. Also converts values to other types if specified.
         * @function toObject
         * @memberof netproto.ALD_MSG_LightningPrepare
         * @static
         * @param {netproto.ALD_MSG_LightningPrepare} message ALD_MSG_LightningPrepare
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ALD_MSG_LightningPrepare.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.ReelSetting = [];
                object.LockSymbols = [];
                object.ReelResult = [];
            }
            if (options.defaults) {
                object.LightningStep = 0;
                object.Count = 0;
                object.IsFreeGame = false;
            }
            if (message.LightningStep != null && message.hasOwnProperty("LightningStep"))
                object.LightningStep = message.LightningStep;
            if (message.ReelSetting && message.ReelSetting.length) {
                object.ReelSetting = [];
                for (var j = 0; j < message.ReelSetting.length; ++j)
                    object.ReelSetting[j] = $root.netproto.ALD_ReelSetting.toObject(message.ReelSetting[j], options);
            }
            if (message.LockSymbols && message.LockSymbols.length) {
                object.LockSymbols = [];
                for (var j = 0; j < message.LockSymbols.length; ++j)
                    object.LockSymbols[j] = $root.netproto.ALD_LightningLock.toObject(message.LockSymbols[j], options);
            }
            if (message.Count != null && message.hasOwnProperty("Count"))
                object.Count = message.Count;
            if (message.IsFreeGame != null && message.hasOwnProperty("IsFreeGame"))
                object.IsFreeGame = message.IsFreeGame;
            if (message.ReelResult && message.ReelResult.length) {
                object.ReelResult = [];
                for (var j = 0; j < message.ReelResult.length; ++j)
                    object.ReelResult[j] = $root.netproto.ALD_ReelResult.toObject(message.ReelResult[j], options);
            }
            return object;
        };

        /**
         * Converts this ALD_MSG_LightningPrepare to JSON.
         * @function toJSON
         * @memberof netproto.ALD_MSG_LightningPrepare
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ALD_MSG_LightningPrepare.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ALD_MSG_LightningPrepare;
    })();

    netproto.ALD_MSG_LightningResult = (function() {

        /**
         * Properties of a ALD_MSG_LightningResult.
         * @memberof netproto
         * @interface IALD_MSG_LightningResult
         * @property {number|Long|null} [BetMoney] ALD_MSG_LightningResult BetMoney
         * @property {number|Long|null} [WinMoney] ALD_MSG_LightningResult WinMoney
         * @property {number|Long|null} [FinalMoney] ALD_MSG_LightningResult FinalMoney
         * @property {number|Long|null} [JackpotMoney] ALD_MSG_LightningResult JackpotMoney
         * @property {Array.<netproto.IALD_ReelResult>|null} [ReelResult] ALD_MSG_LightningResult ReelResult
         * @property {Array.<netproto.IALD_LightningPayout>|null} [PayGroups] ALD_MSG_LightningResult PayGroups
         * @property {number|Long|null} [FreeGameWinMoney] ALD_MSG_LightningResult FreeGameWinMoney
         * @property {number|null} [LightningStep] ALD_MSG_LightningResult LightningStep
         * @property {number|null} [Count] ALD_MSG_LightningResult Count
         */

        /**
         * Constructs a new ALD_MSG_LightningResult.
         * @memberof netproto
         * @classdesc Represents a ALD_MSG_LightningResult.
         * @implements IALD_MSG_LightningResult
         * @constructor
         * @param {netproto.IALD_MSG_LightningResult=} [properties] Properties to set
         */
        function ALD_MSG_LightningResult(properties) {
            this.ReelResult = [];
            this.PayGroups = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ALD_MSG_LightningResult BetMoney.
         * @member {number|Long} BetMoney
         * @memberof netproto.ALD_MSG_LightningResult
         * @instance
         */
        ALD_MSG_LightningResult.prototype.BetMoney = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ALD_MSG_LightningResult WinMoney.
         * @member {number|Long} WinMoney
         * @memberof netproto.ALD_MSG_LightningResult
         * @instance
         */
        ALD_MSG_LightningResult.prototype.WinMoney = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ALD_MSG_LightningResult FinalMoney.
         * @member {number|Long} FinalMoney
         * @memberof netproto.ALD_MSG_LightningResult
         * @instance
         */
        ALD_MSG_LightningResult.prototype.FinalMoney = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ALD_MSG_LightningResult JackpotMoney.
         * @member {number|Long} JackpotMoney
         * @memberof netproto.ALD_MSG_LightningResult
         * @instance
         */
        ALD_MSG_LightningResult.prototype.JackpotMoney = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ALD_MSG_LightningResult ReelResult.
         * @member {Array.<netproto.IALD_ReelResult>} ReelResult
         * @memberof netproto.ALD_MSG_LightningResult
         * @instance
         */
        ALD_MSG_LightningResult.prototype.ReelResult = $util.emptyArray;

        /**
         * ALD_MSG_LightningResult PayGroups.
         * @member {Array.<netproto.IALD_LightningPayout>} PayGroups
         * @memberof netproto.ALD_MSG_LightningResult
         * @instance
         */
        ALD_MSG_LightningResult.prototype.PayGroups = $util.emptyArray;

        /**
         * ALD_MSG_LightningResult FreeGameWinMoney.
         * @member {number|Long} FreeGameWinMoney
         * @memberof netproto.ALD_MSG_LightningResult
         * @instance
         */
        ALD_MSG_LightningResult.prototype.FreeGameWinMoney = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ALD_MSG_LightningResult LightningStep.
         * @member {number} LightningStep
         * @memberof netproto.ALD_MSG_LightningResult
         * @instance
         */
        ALD_MSG_LightningResult.prototype.LightningStep = 0;

        /**
         * ALD_MSG_LightningResult Count.
         * @member {number} Count
         * @memberof netproto.ALD_MSG_LightningResult
         * @instance
         */
        ALD_MSG_LightningResult.prototype.Count = 0;

        /**
         * Creates a new ALD_MSG_LightningResult instance using the specified properties.
         * @function create
         * @memberof netproto.ALD_MSG_LightningResult
         * @static
         * @param {netproto.IALD_MSG_LightningResult=} [properties] Properties to set
         * @returns {netproto.ALD_MSG_LightningResult} ALD_MSG_LightningResult instance
         */
        ALD_MSG_LightningResult.create = function create(properties) {
            return new ALD_MSG_LightningResult(properties);
        };

        /**
         * Encodes the specified ALD_MSG_LightningResult message. Does not implicitly {@link netproto.ALD_MSG_LightningResult.verify|verify} messages.
         * @function encode
         * @memberof netproto.ALD_MSG_LightningResult
         * @static
         * @param {netproto.IALD_MSG_LightningResult} message ALD_MSG_LightningResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ALD_MSG_LightningResult.encode = function encode(message, writer) {
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
                    $root.netproto.ALD_ReelResult.encode(message.ReelResult[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            if (message.PayGroups != null && message.PayGroups.length)
                for (var i = 0; i < message.PayGroups.length; ++i)
                    $root.netproto.ALD_LightningPayout.encode(message.PayGroups[i], writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            if (message.FreeGameWinMoney != null && message.hasOwnProperty("FreeGameWinMoney"))
                writer.uint32(/* id 7, wireType 0 =*/56).int64(message.FreeGameWinMoney);
            if (message.LightningStep != null && message.hasOwnProperty("LightningStep"))
                writer.uint32(/* id 8, wireType 0 =*/64).int32(message.LightningStep);
            if (message.Count != null && message.hasOwnProperty("Count"))
                writer.uint32(/* id 9, wireType 0 =*/72).int32(message.Count);
            return writer;
        };

        /**
         * Encodes the specified ALD_MSG_LightningResult message, length delimited. Does not implicitly {@link netproto.ALD_MSG_LightningResult.verify|verify} messages.
         * @function encodeDelimited
         * @memberof netproto.ALD_MSG_LightningResult
         * @static
         * @param {netproto.IALD_MSG_LightningResult} message ALD_MSG_LightningResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ALD_MSG_LightningResult.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ALD_MSG_LightningResult message from the specified reader or buffer.
         * @function decode
         * @memberof netproto.ALD_MSG_LightningResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {netproto.ALD_MSG_LightningResult} ALD_MSG_LightningResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ALD_MSG_LightningResult.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.netproto.ALD_MSG_LightningResult();
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
                    message.ReelResult.push($root.netproto.ALD_ReelResult.decode(reader, reader.uint32()));
                    break;
                case 6:
                    if (!(message.PayGroups && message.PayGroups.length))
                        message.PayGroups = [];
                    message.PayGroups.push($root.netproto.ALD_LightningPayout.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.FreeGameWinMoney = reader.int64();
                    break;
                case 8:
                    message.LightningStep = reader.int32();
                    break;
                case 9:
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
         * Decodes a ALD_MSG_LightningResult message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof netproto.ALD_MSG_LightningResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {netproto.ALD_MSG_LightningResult} ALD_MSG_LightningResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ALD_MSG_LightningResult.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ALD_MSG_LightningResult message.
         * @function verify
         * @memberof netproto.ALD_MSG_LightningResult
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ALD_MSG_LightningResult.verify = function verify(message) {
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
                    var error = $root.netproto.ALD_ReelResult.verify(message.ReelResult[i]);
                    if (error)
                        return "ReelResult." + error;
                }
            }
            if (message.PayGroups != null && message.hasOwnProperty("PayGroups")) {
                if (!Array.isArray(message.PayGroups))
                    return "PayGroups: array expected";
                for (var i = 0; i < message.PayGroups.length; ++i) {
                    var error = $root.netproto.ALD_LightningPayout.verify(message.PayGroups[i]);
                    if (error)
                        return "PayGroups." + error;
                }
            }
            if (message.FreeGameWinMoney != null && message.hasOwnProperty("FreeGameWinMoney"))
                if (!$util.isInteger(message.FreeGameWinMoney) && !(message.FreeGameWinMoney && $util.isInteger(message.FreeGameWinMoney.low) && $util.isInteger(message.FreeGameWinMoney.high)))
                    return "FreeGameWinMoney: integer|Long expected";
            if (message.LightningStep != null && message.hasOwnProperty("LightningStep"))
                if (!$util.isInteger(message.LightningStep))
                    return "LightningStep: integer expected";
            if (message.Count != null && message.hasOwnProperty("Count"))
                if (!$util.isInteger(message.Count))
                    return "Count: integer expected";
            return null;
        };

        /**
         * Creates a ALD_MSG_LightningResult message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof netproto.ALD_MSG_LightningResult
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {netproto.ALD_MSG_LightningResult} ALD_MSG_LightningResult
         */
        ALD_MSG_LightningResult.fromObject = function fromObject(object) {
            if (object instanceof $root.netproto.ALD_MSG_LightningResult)
                return object;
            var message = new $root.netproto.ALD_MSG_LightningResult();
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
                    throw TypeError(".netproto.ALD_MSG_LightningResult.ReelResult: array expected");
                message.ReelResult = [];
                for (var i = 0; i < object.ReelResult.length; ++i) {
                    if (typeof object.ReelResult[i] !== "object")
                        throw TypeError(".netproto.ALD_MSG_LightningResult.ReelResult: object expected");
                    message.ReelResult[i] = $root.netproto.ALD_ReelResult.fromObject(object.ReelResult[i]);
                }
            }
            if (object.PayGroups) {
                if (!Array.isArray(object.PayGroups))
                    throw TypeError(".netproto.ALD_MSG_LightningResult.PayGroups: array expected");
                message.PayGroups = [];
                for (var i = 0; i < object.PayGroups.length; ++i) {
                    if (typeof object.PayGroups[i] !== "object")
                        throw TypeError(".netproto.ALD_MSG_LightningResult.PayGroups: object expected");
                    message.PayGroups[i] = $root.netproto.ALD_LightningPayout.fromObject(object.PayGroups[i]);
                }
            }
            if (object.FreeGameWinMoney != null)
                if ($util.Long)
                    (message.FreeGameWinMoney = $util.Long.fromValue(object.FreeGameWinMoney)).unsigned = false;
                else if (typeof object.FreeGameWinMoney === "string")
                    message.FreeGameWinMoney = parseInt(object.FreeGameWinMoney, 10);
                else if (typeof object.FreeGameWinMoney === "number")
                    message.FreeGameWinMoney = object.FreeGameWinMoney;
                else if (typeof object.FreeGameWinMoney === "object")
                    message.FreeGameWinMoney = new $util.LongBits(object.FreeGameWinMoney.low >>> 0, object.FreeGameWinMoney.high >>> 0).toNumber();
            if (object.LightningStep != null)
                message.LightningStep = object.LightningStep | 0;
            if (object.Count != null)
                message.Count = object.Count | 0;
            return message;
        };

        /**
         * Creates a plain object from a ALD_MSG_LightningResult message. Also converts values to other types if specified.
         * @function toObject
         * @memberof netproto.ALD_MSG_LightningResult
         * @static
         * @param {netproto.ALD_MSG_LightningResult} message ALD_MSG_LightningResult
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ALD_MSG_LightningResult.toObject = function toObject(message, options) {
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
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.FreeGameWinMoney = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.FreeGameWinMoney = options.longs === String ? "0" : 0;
                object.LightningStep = 0;
                object.Count = 0;
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
                    object.ReelResult[j] = $root.netproto.ALD_ReelResult.toObject(message.ReelResult[j], options);
            }
            if (message.PayGroups && message.PayGroups.length) {
                object.PayGroups = [];
                for (var j = 0; j < message.PayGroups.length; ++j)
                    object.PayGroups[j] = $root.netproto.ALD_LightningPayout.toObject(message.PayGroups[j], options);
            }
            if (message.FreeGameWinMoney != null && message.hasOwnProperty("FreeGameWinMoney"))
                if (typeof message.FreeGameWinMoney === "number")
                    object.FreeGameWinMoney = options.longs === String ? String(message.FreeGameWinMoney) : message.FreeGameWinMoney;
                else
                    object.FreeGameWinMoney = options.longs === String ? $util.Long.prototype.toString.call(message.FreeGameWinMoney) : options.longs === Number ? new $util.LongBits(message.FreeGameWinMoney.low >>> 0, message.FreeGameWinMoney.high >>> 0).toNumber() : message.FreeGameWinMoney;
            if (message.LightningStep != null && message.hasOwnProperty("LightningStep"))
                object.LightningStep = message.LightningStep;
            if (message.Count != null && message.hasOwnProperty("Count"))
                object.Count = message.Count;
            return object;
        };

        /**
         * Converts this ALD_MSG_LightningResult to JSON.
         * @function toJSON
         * @memberof netproto.ALD_MSG_LightningResult
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ALD_MSG_LightningResult.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ALD_MSG_LightningResult;
    })();

    netproto.ALD_MSG_LightningShow = (function() {

        /**
         * Properties of a ALD_MSG_LightningShow.
         * @memberof netproto
         * @interface IALD_MSG_LightningShow
         * @property {number|null} [LightningStep] ALD_MSG_LightningShow LightningStep
         */

        /**
         * Constructs a new ALD_MSG_LightningShow.
         * @memberof netproto
         * @classdesc Represents a ALD_MSG_LightningShow.
         * @implements IALD_MSG_LightningShow
         * @constructor
         * @param {netproto.IALD_MSG_LightningShow=} [properties] Properties to set
         */
        function ALD_MSG_LightningShow(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ALD_MSG_LightningShow LightningStep.
         * @member {number} LightningStep
         * @memberof netproto.ALD_MSG_LightningShow
         * @instance
         */
        ALD_MSG_LightningShow.prototype.LightningStep = 0;

        /**
         * Creates a new ALD_MSG_LightningShow instance using the specified properties.
         * @function create
         * @memberof netproto.ALD_MSG_LightningShow
         * @static
         * @param {netproto.IALD_MSG_LightningShow=} [properties] Properties to set
         * @returns {netproto.ALD_MSG_LightningShow} ALD_MSG_LightningShow instance
         */
        ALD_MSG_LightningShow.create = function create(properties) {
            return new ALD_MSG_LightningShow(properties);
        };

        /**
         * Encodes the specified ALD_MSG_LightningShow message. Does not implicitly {@link netproto.ALD_MSG_LightningShow.verify|verify} messages.
         * @function encode
         * @memberof netproto.ALD_MSG_LightningShow
         * @static
         * @param {netproto.IALD_MSG_LightningShow} message ALD_MSG_LightningShow message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ALD_MSG_LightningShow.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.LightningStep != null && message.hasOwnProperty("LightningStep"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.LightningStep);
            return writer;
        };

        /**
         * Encodes the specified ALD_MSG_LightningShow message, length delimited. Does not implicitly {@link netproto.ALD_MSG_LightningShow.verify|verify} messages.
         * @function encodeDelimited
         * @memberof netproto.ALD_MSG_LightningShow
         * @static
         * @param {netproto.IALD_MSG_LightningShow} message ALD_MSG_LightningShow message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ALD_MSG_LightningShow.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ALD_MSG_LightningShow message from the specified reader or buffer.
         * @function decode
         * @memberof netproto.ALD_MSG_LightningShow
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {netproto.ALD_MSG_LightningShow} ALD_MSG_LightningShow
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ALD_MSG_LightningShow.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.netproto.ALD_MSG_LightningShow();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.LightningStep = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ALD_MSG_LightningShow message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof netproto.ALD_MSG_LightningShow
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {netproto.ALD_MSG_LightningShow} ALD_MSG_LightningShow
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ALD_MSG_LightningShow.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ALD_MSG_LightningShow message.
         * @function verify
         * @memberof netproto.ALD_MSG_LightningShow
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ALD_MSG_LightningShow.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.LightningStep != null && message.hasOwnProperty("LightningStep"))
                if (!$util.isInteger(message.LightningStep))
                    return "LightningStep: integer expected";
            return null;
        };

        /**
         * Creates a ALD_MSG_LightningShow message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof netproto.ALD_MSG_LightningShow
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {netproto.ALD_MSG_LightningShow} ALD_MSG_LightningShow
         */
        ALD_MSG_LightningShow.fromObject = function fromObject(object) {
            if (object instanceof $root.netproto.ALD_MSG_LightningShow)
                return object;
            var message = new $root.netproto.ALD_MSG_LightningShow();
            if (object.LightningStep != null)
                message.LightningStep = object.LightningStep | 0;
            return message;
        };

        /**
         * Creates a plain object from a ALD_MSG_LightningShow message. Also converts values to other types if specified.
         * @function toObject
         * @memberof netproto.ALD_MSG_LightningShow
         * @static
         * @param {netproto.ALD_MSG_LightningShow} message ALD_MSG_LightningShow
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ALD_MSG_LightningShow.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.LightningStep = 0;
            if (message.LightningStep != null && message.hasOwnProperty("LightningStep"))
                object.LightningStep = message.LightningStep;
            return object;
        };

        /**
         * Converts this ALD_MSG_LightningShow to JSON.
         * @function toJSON
         * @memberof netproto.ALD_MSG_LightningShow
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ALD_MSG_LightningShow.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ALD_MSG_LightningShow;
    })();

    netproto.ALD_MSG_StepGameResult = (function() {

        /**
         * Properties of a ALD_MSG_StepGameResult.
         * @memberof netproto
         * @interface IALD_MSG_StepGameResult
         * @property {number|Long} BetMoney ALD_MSG_StepGameResult BetMoney
         * @property {number|Long} WinMoney ALD_MSG_StepGameResult WinMoney
         * @property {number|Long} FinalMoney ALD_MSG_StepGameResult FinalMoney
         * @property {Array.<netproto.IALD_StepGameResult>|null} [SlotResult] ALD_MSG_StepGameResult SlotResult
         */

        /**
         * Constructs a new ALD_MSG_StepGameResult.
         * @memberof netproto
         * @classdesc Represents a ALD_MSG_StepGameResult.
         * @implements IALD_MSG_StepGameResult
         * @constructor
         * @param {netproto.IALD_MSG_StepGameResult=} [properties] Properties to set
         */
        function ALD_MSG_StepGameResult(properties) {
            this.SlotResult = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ALD_MSG_StepGameResult BetMoney.
         * @member {number|Long} BetMoney
         * @memberof netproto.ALD_MSG_StepGameResult
         * @instance
         */
        ALD_MSG_StepGameResult.prototype.BetMoney = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ALD_MSG_StepGameResult WinMoney.
         * @member {number|Long} WinMoney
         * @memberof netproto.ALD_MSG_StepGameResult
         * @instance
         */
        ALD_MSG_StepGameResult.prototype.WinMoney = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ALD_MSG_StepGameResult FinalMoney.
         * @member {number|Long} FinalMoney
         * @memberof netproto.ALD_MSG_StepGameResult
         * @instance
         */
        ALD_MSG_StepGameResult.prototype.FinalMoney = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ALD_MSG_StepGameResult SlotResult.
         * @member {Array.<netproto.IALD_StepGameResult>} SlotResult
         * @memberof netproto.ALD_MSG_StepGameResult
         * @instance
         */
        ALD_MSG_StepGameResult.prototype.SlotResult = $util.emptyArray;

        /**
         * Creates a new ALD_MSG_StepGameResult instance using the specified properties.
         * @function create
         * @memberof netproto.ALD_MSG_StepGameResult
         * @static
         * @param {netproto.IALD_MSG_StepGameResult=} [properties] Properties to set
         * @returns {netproto.ALD_MSG_StepGameResult} ALD_MSG_StepGameResult instance
         */
        ALD_MSG_StepGameResult.create = function create(properties) {
            return new ALD_MSG_StepGameResult(properties);
        };

        /**
         * Encodes the specified ALD_MSG_StepGameResult message. Does not implicitly {@link netproto.ALD_MSG_StepGameResult.verify|verify} messages.
         * @function encode
         * @memberof netproto.ALD_MSG_StepGameResult
         * @static
         * @param {netproto.IALD_MSG_StepGameResult} message ALD_MSG_StepGameResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ALD_MSG_StepGameResult.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int64(message.BetMoney);
            writer.uint32(/* id 2, wireType 0 =*/16).int64(message.WinMoney);
            writer.uint32(/* id 3, wireType 0 =*/24).int64(message.FinalMoney);
            if (message.SlotResult != null && message.SlotResult.length)
                for (var i = 0; i < message.SlotResult.length; ++i)
                    $root.netproto.ALD_StepGameResult.encode(message.SlotResult[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified ALD_MSG_StepGameResult message, length delimited. Does not implicitly {@link netproto.ALD_MSG_StepGameResult.verify|verify} messages.
         * @function encodeDelimited
         * @memberof netproto.ALD_MSG_StepGameResult
         * @static
         * @param {netproto.IALD_MSG_StepGameResult} message ALD_MSG_StepGameResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ALD_MSG_StepGameResult.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ALD_MSG_StepGameResult message from the specified reader or buffer.
         * @function decode
         * @memberof netproto.ALD_MSG_StepGameResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {netproto.ALD_MSG_StepGameResult} ALD_MSG_StepGameResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ALD_MSG_StepGameResult.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.netproto.ALD_MSG_StepGameResult();
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
                    if (!(message.SlotResult && message.SlotResult.length))
                        message.SlotResult = [];
                    message.SlotResult.push($root.netproto.ALD_StepGameResult.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("BetMoney"))
                throw $util.ProtocolError("missing required 'BetMoney'", { instance: message });
            if (!message.hasOwnProperty("WinMoney"))
                throw $util.ProtocolError("missing required 'WinMoney'", { instance: message });
            if (!message.hasOwnProperty("FinalMoney"))
                throw $util.ProtocolError("missing required 'FinalMoney'", { instance: message });
            return message;
        };

        /**
         * Decodes a ALD_MSG_StepGameResult message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof netproto.ALD_MSG_StepGameResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {netproto.ALD_MSG_StepGameResult} ALD_MSG_StepGameResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ALD_MSG_StepGameResult.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ALD_MSG_StepGameResult message.
         * @function verify
         * @memberof netproto.ALD_MSG_StepGameResult
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ALD_MSG_StepGameResult.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.BetMoney) && !(message.BetMoney && $util.isInteger(message.BetMoney.low) && $util.isInteger(message.BetMoney.high)))
                return "BetMoney: integer|Long expected";
            if (!$util.isInteger(message.WinMoney) && !(message.WinMoney && $util.isInteger(message.WinMoney.low) && $util.isInteger(message.WinMoney.high)))
                return "WinMoney: integer|Long expected";
            if (!$util.isInteger(message.FinalMoney) && !(message.FinalMoney && $util.isInteger(message.FinalMoney.low) && $util.isInteger(message.FinalMoney.high)))
                return "FinalMoney: integer|Long expected";
            if (message.SlotResult != null && message.hasOwnProperty("SlotResult")) {
                if (!Array.isArray(message.SlotResult))
                    return "SlotResult: array expected";
                for (var i = 0; i < message.SlotResult.length; ++i) {
                    var error = $root.netproto.ALD_StepGameResult.verify(message.SlotResult[i]);
                    if (error)
                        return "SlotResult." + error;
                }
            }
            return null;
        };

        /**
         * Creates a ALD_MSG_StepGameResult message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof netproto.ALD_MSG_StepGameResult
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {netproto.ALD_MSG_StepGameResult} ALD_MSG_StepGameResult
         */
        ALD_MSG_StepGameResult.fromObject = function fromObject(object) {
            if (object instanceof $root.netproto.ALD_MSG_StepGameResult)
                return object;
            var message = new $root.netproto.ALD_MSG_StepGameResult();
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
            if (object.SlotResult) {
                if (!Array.isArray(object.SlotResult))
                    throw TypeError(".netproto.ALD_MSG_StepGameResult.SlotResult: array expected");
                message.SlotResult = [];
                for (var i = 0; i < object.SlotResult.length; ++i) {
                    if (typeof object.SlotResult[i] !== "object")
                        throw TypeError(".netproto.ALD_MSG_StepGameResult.SlotResult: object expected");
                    message.SlotResult[i] = $root.netproto.ALD_StepGameResult.fromObject(object.SlotResult[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a ALD_MSG_StepGameResult message. Also converts values to other types if specified.
         * @function toObject
         * @memberof netproto.ALD_MSG_StepGameResult
         * @static
         * @param {netproto.ALD_MSG_StepGameResult} message ALD_MSG_StepGameResult
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ALD_MSG_StepGameResult.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.SlotResult = [];
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
            if (message.SlotResult && message.SlotResult.length) {
                object.SlotResult = [];
                for (var j = 0; j < message.SlotResult.length; ++j)
                    object.SlotResult[j] = $root.netproto.ALD_StepGameResult.toObject(message.SlotResult[j], options);
            }
            return object;
        };

        /**
         * Converts this ALD_MSG_StepGameResult to JSON.
         * @function toJSON
         * @memberof netproto.ALD_MSG_StepGameResult
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ALD_MSG_StepGameResult.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ALD_MSG_StepGameResult;
    })();

    netproto.ALD_ReelSetting = (function() {

        /**
         * Properties of a ALD_ReelSetting.
         * @memberof netproto
         * @interface IALD_ReelSetting
         * @property {number|null} [ReelID] ALD_ReelSetting ReelID
         * @property {Array.<netproto.IALD_Symbol>|null} [Symbols] ALD_ReelSetting Symbols
         */

        /**
         * Constructs a new ALD_ReelSetting.
         * @memberof netproto
         * @classdesc Represents a ALD_ReelSetting.
         * @implements IALD_ReelSetting
         * @constructor
         * @param {netproto.IALD_ReelSetting=} [properties] Properties to set
         */
        function ALD_ReelSetting(properties) {
            this.Symbols = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ALD_ReelSetting ReelID.
         * @member {number} ReelID
         * @memberof netproto.ALD_ReelSetting
         * @instance
         */
        ALD_ReelSetting.prototype.ReelID = 0;

        /**
         * ALD_ReelSetting Symbols.
         * @member {Array.<netproto.IALD_Symbol>} Symbols
         * @memberof netproto.ALD_ReelSetting
         * @instance
         */
        ALD_ReelSetting.prototype.Symbols = $util.emptyArray;

        /**
         * Creates a new ALD_ReelSetting instance using the specified properties.
         * @function create
         * @memberof netproto.ALD_ReelSetting
         * @static
         * @param {netproto.IALD_ReelSetting=} [properties] Properties to set
         * @returns {netproto.ALD_ReelSetting} ALD_ReelSetting instance
         */
        ALD_ReelSetting.create = function create(properties) {
            return new ALD_ReelSetting(properties);
        };

        /**
         * Encodes the specified ALD_ReelSetting message. Does not implicitly {@link netproto.ALD_ReelSetting.verify|verify} messages.
         * @function encode
         * @memberof netproto.ALD_ReelSetting
         * @static
         * @param {netproto.IALD_ReelSetting} message ALD_ReelSetting message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ALD_ReelSetting.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.ReelID != null && message.hasOwnProperty("ReelID"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.ReelID);
            if (message.Symbols != null && message.Symbols.length)
                for (var i = 0; i < message.Symbols.length; ++i)
                    $root.netproto.ALD_Symbol.encode(message.Symbols[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified ALD_ReelSetting message, length delimited. Does not implicitly {@link netproto.ALD_ReelSetting.verify|verify} messages.
         * @function encodeDelimited
         * @memberof netproto.ALD_ReelSetting
         * @static
         * @param {netproto.IALD_ReelSetting} message ALD_ReelSetting message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ALD_ReelSetting.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ALD_ReelSetting message from the specified reader or buffer.
         * @function decode
         * @memberof netproto.ALD_ReelSetting
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {netproto.ALD_ReelSetting} ALD_ReelSetting
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ALD_ReelSetting.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.netproto.ALD_ReelSetting();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.ReelID = reader.int32();
                    break;
                case 2:
                    if (!(message.Symbols && message.Symbols.length))
                        message.Symbols = [];
                    message.Symbols.push($root.netproto.ALD_Symbol.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ALD_ReelSetting message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof netproto.ALD_ReelSetting
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {netproto.ALD_ReelSetting} ALD_ReelSetting
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ALD_ReelSetting.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ALD_ReelSetting message.
         * @function verify
         * @memberof netproto.ALD_ReelSetting
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ALD_ReelSetting.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.ReelID != null && message.hasOwnProperty("ReelID"))
                if (!$util.isInteger(message.ReelID))
                    return "ReelID: integer expected";
            if (message.Symbols != null && message.hasOwnProperty("Symbols")) {
                if (!Array.isArray(message.Symbols))
                    return "Symbols: array expected";
                for (var i = 0; i < message.Symbols.length; ++i) {
                    var error = $root.netproto.ALD_Symbol.verify(message.Symbols[i]);
                    if (error)
                        return "Symbols." + error;
                }
            }
            return null;
        };

        /**
         * Creates a ALD_ReelSetting message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof netproto.ALD_ReelSetting
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {netproto.ALD_ReelSetting} ALD_ReelSetting
         */
        ALD_ReelSetting.fromObject = function fromObject(object) {
            if (object instanceof $root.netproto.ALD_ReelSetting)
                return object;
            var message = new $root.netproto.ALD_ReelSetting();
            if (object.ReelID != null)
                message.ReelID = object.ReelID | 0;
            if (object.Symbols) {
                if (!Array.isArray(object.Symbols))
                    throw TypeError(".netproto.ALD_ReelSetting.Symbols: array expected");
                message.Symbols = [];
                for (var i = 0; i < object.Symbols.length; ++i) {
                    if (typeof object.Symbols[i] !== "object")
                        throw TypeError(".netproto.ALD_ReelSetting.Symbols: object expected");
                    message.Symbols[i] = $root.netproto.ALD_Symbol.fromObject(object.Symbols[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a ALD_ReelSetting message. Also converts values to other types if specified.
         * @function toObject
         * @memberof netproto.ALD_ReelSetting
         * @static
         * @param {netproto.ALD_ReelSetting} message ALD_ReelSetting
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ALD_ReelSetting.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.Symbols = [];
            if (options.defaults)
                object.ReelID = 0;
            if (message.ReelID != null && message.hasOwnProperty("ReelID"))
                object.ReelID = message.ReelID;
            if (message.Symbols && message.Symbols.length) {
                object.Symbols = [];
                for (var j = 0; j < message.Symbols.length; ++j)
                    object.Symbols[j] = $root.netproto.ALD_Symbol.toObject(message.Symbols[j], options);
            }
            return object;
        };

        /**
         * Converts this ALD_ReelSetting to JSON.
         * @function toJSON
         * @memberof netproto.ALD_ReelSetting
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ALD_ReelSetting.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ALD_ReelSetting;
    })();

    netproto.ALD_ReelPosition = (function() {

        /**
         * Properties of a ALD_ReelPosition.
         * @memberof netproto
         * @interface IALD_ReelPosition
         * @property {number|null} [Reel] ALD_ReelPosition Reel
         * @property {number|null} [Row] ALD_ReelPosition Row
         */

        /**
         * Constructs a new ALD_ReelPosition.
         * @memberof netproto
         * @classdesc Represents a ALD_ReelPosition.
         * @implements IALD_ReelPosition
         * @constructor
         * @param {netproto.IALD_ReelPosition=} [properties] Properties to set
         */
        function ALD_ReelPosition(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ALD_ReelPosition Reel.
         * @member {number} Reel
         * @memberof netproto.ALD_ReelPosition
         * @instance
         */
        ALD_ReelPosition.prototype.Reel = 0;

        /**
         * ALD_ReelPosition Row.
         * @member {number} Row
         * @memberof netproto.ALD_ReelPosition
         * @instance
         */
        ALD_ReelPosition.prototype.Row = 0;

        /**
         * Creates a new ALD_ReelPosition instance using the specified properties.
         * @function create
         * @memberof netproto.ALD_ReelPosition
         * @static
         * @param {netproto.IALD_ReelPosition=} [properties] Properties to set
         * @returns {netproto.ALD_ReelPosition} ALD_ReelPosition instance
         */
        ALD_ReelPosition.create = function create(properties) {
            return new ALD_ReelPosition(properties);
        };

        /**
         * Encodes the specified ALD_ReelPosition message. Does not implicitly {@link netproto.ALD_ReelPosition.verify|verify} messages.
         * @function encode
         * @memberof netproto.ALD_ReelPosition
         * @static
         * @param {netproto.IALD_ReelPosition} message ALD_ReelPosition message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ALD_ReelPosition.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Reel != null && message.hasOwnProperty("Reel"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.Reel);
            if (message.Row != null && message.hasOwnProperty("Row"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.Row);
            return writer;
        };

        /**
         * Encodes the specified ALD_ReelPosition message, length delimited. Does not implicitly {@link netproto.ALD_ReelPosition.verify|verify} messages.
         * @function encodeDelimited
         * @memberof netproto.ALD_ReelPosition
         * @static
         * @param {netproto.IALD_ReelPosition} message ALD_ReelPosition message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ALD_ReelPosition.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ALD_ReelPosition message from the specified reader or buffer.
         * @function decode
         * @memberof netproto.ALD_ReelPosition
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {netproto.ALD_ReelPosition} ALD_ReelPosition
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ALD_ReelPosition.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.netproto.ALD_ReelPosition();
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
         * Decodes a ALD_ReelPosition message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof netproto.ALD_ReelPosition
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {netproto.ALD_ReelPosition} ALD_ReelPosition
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ALD_ReelPosition.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ALD_ReelPosition message.
         * @function verify
         * @memberof netproto.ALD_ReelPosition
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ALD_ReelPosition.verify = function verify(message) {
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
         * Creates a ALD_ReelPosition message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof netproto.ALD_ReelPosition
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {netproto.ALD_ReelPosition} ALD_ReelPosition
         */
        ALD_ReelPosition.fromObject = function fromObject(object) {
            if (object instanceof $root.netproto.ALD_ReelPosition)
                return object;
            var message = new $root.netproto.ALD_ReelPosition();
            if (object.Reel != null)
                message.Reel = object.Reel | 0;
            if (object.Row != null)
                message.Row = object.Row | 0;
            return message;
        };

        /**
         * Creates a plain object from a ALD_ReelPosition message. Also converts values to other types if specified.
         * @function toObject
         * @memberof netproto.ALD_ReelPosition
         * @static
         * @param {netproto.ALD_ReelPosition} message ALD_ReelPosition
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ALD_ReelPosition.toObject = function toObject(message, options) {
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
         * Converts this ALD_ReelPosition to JSON.
         * @function toJSON
         * @memberof netproto.ALD_ReelPosition
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ALD_ReelPosition.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ALD_ReelPosition;
    })();

    netproto.ALD_ReelResult = (function() {

        /**
         * Properties of a ALD_ReelResult.
         * @memberof netproto
         * @interface IALD_ReelResult
         * @property {netproto.IALD_ReelPosition|null} [Position] ALD_ReelResult Position
         * @property {netproto.IALD_Symbol|null} [Symbol] ALD_ReelResult Symbol
         * @property {boolean|null} [Blink] ALD_ReelResult Blink
         */

        /**
         * Constructs a new ALD_ReelResult.
         * @memberof netproto
         * @classdesc Represents a ALD_ReelResult.
         * @implements IALD_ReelResult
         * @constructor
         * @param {netproto.IALD_ReelResult=} [properties] Properties to set
         */
        function ALD_ReelResult(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ALD_ReelResult Position.
         * @member {netproto.IALD_ReelPosition|null|undefined} Position
         * @memberof netproto.ALD_ReelResult
         * @instance
         */
        ALD_ReelResult.prototype.Position = null;

        /**
         * ALD_ReelResult Symbol.
         * @member {netproto.IALD_Symbol|null|undefined} Symbol
         * @memberof netproto.ALD_ReelResult
         * @instance
         */
        ALD_ReelResult.prototype.Symbol = null;

        /**
         * ALD_ReelResult Blink.
         * @member {boolean} Blink
         * @memberof netproto.ALD_ReelResult
         * @instance
         */
        ALD_ReelResult.prototype.Blink = false;

        /**
         * Creates a new ALD_ReelResult instance using the specified properties.
         * @function create
         * @memberof netproto.ALD_ReelResult
         * @static
         * @param {netproto.IALD_ReelResult=} [properties] Properties to set
         * @returns {netproto.ALD_ReelResult} ALD_ReelResult instance
         */
        ALD_ReelResult.create = function create(properties) {
            return new ALD_ReelResult(properties);
        };

        /**
         * Encodes the specified ALD_ReelResult message. Does not implicitly {@link netproto.ALD_ReelResult.verify|verify} messages.
         * @function encode
         * @memberof netproto.ALD_ReelResult
         * @static
         * @param {netproto.IALD_ReelResult} message ALD_ReelResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ALD_ReelResult.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Position != null && message.hasOwnProperty("Position"))
                $root.netproto.ALD_ReelPosition.encode(message.Position, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.Symbol != null && message.hasOwnProperty("Symbol"))
                $root.netproto.ALD_Symbol.encode(message.Symbol, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.Blink != null && message.hasOwnProperty("Blink"))
                writer.uint32(/* id 3, wireType 0 =*/24).bool(message.Blink);
            return writer;
        };

        /**
         * Encodes the specified ALD_ReelResult message, length delimited. Does not implicitly {@link netproto.ALD_ReelResult.verify|verify} messages.
         * @function encodeDelimited
         * @memberof netproto.ALD_ReelResult
         * @static
         * @param {netproto.IALD_ReelResult} message ALD_ReelResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ALD_ReelResult.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ALD_ReelResult message from the specified reader or buffer.
         * @function decode
         * @memberof netproto.ALD_ReelResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {netproto.ALD_ReelResult} ALD_ReelResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ALD_ReelResult.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.netproto.ALD_ReelResult();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Position = $root.netproto.ALD_ReelPosition.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.Symbol = $root.netproto.ALD_Symbol.decode(reader, reader.uint32());
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
         * Decodes a ALD_ReelResult message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof netproto.ALD_ReelResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {netproto.ALD_ReelResult} ALD_ReelResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ALD_ReelResult.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ALD_ReelResult message.
         * @function verify
         * @memberof netproto.ALD_ReelResult
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ALD_ReelResult.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Position != null && message.hasOwnProperty("Position")) {
                var error = $root.netproto.ALD_ReelPosition.verify(message.Position);
                if (error)
                    return "Position." + error;
            }
            if (message.Symbol != null && message.hasOwnProperty("Symbol")) {
                var error = $root.netproto.ALD_Symbol.verify(message.Symbol);
                if (error)
                    return "Symbol." + error;
            }
            if (message.Blink != null && message.hasOwnProperty("Blink"))
                if (typeof message.Blink !== "boolean")
                    return "Blink: boolean expected";
            return null;
        };

        /**
         * Creates a ALD_ReelResult message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof netproto.ALD_ReelResult
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {netproto.ALD_ReelResult} ALD_ReelResult
         */
        ALD_ReelResult.fromObject = function fromObject(object) {
            if (object instanceof $root.netproto.ALD_ReelResult)
                return object;
            var message = new $root.netproto.ALD_ReelResult();
            if (object.Position != null) {
                if (typeof object.Position !== "object")
                    throw TypeError(".netproto.ALD_ReelResult.Position: object expected");
                message.Position = $root.netproto.ALD_ReelPosition.fromObject(object.Position);
            }
            if (object.Symbol != null) {
                if (typeof object.Symbol !== "object")
                    throw TypeError(".netproto.ALD_ReelResult.Symbol: object expected");
                message.Symbol = $root.netproto.ALD_Symbol.fromObject(object.Symbol);
            }
            if (object.Blink != null)
                message.Blink = Boolean(object.Blink);
            return message;
        };

        /**
         * Creates a plain object from a ALD_ReelResult message. Also converts values to other types if specified.
         * @function toObject
         * @memberof netproto.ALD_ReelResult
         * @static
         * @param {netproto.ALD_ReelResult} message ALD_ReelResult
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ALD_ReelResult.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.Position = null;
                object.Symbol = null;
                object.Blink = false;
            }
            if (message.Position != null && message.hasOwnProperty("Position"))
                object.Position = $root.netproto.ALD_ReelPosition.toObject(message.Position, options);
            if (message.Symbol != null && message.hasOwnProperty("Symbol"))
                object.Symbol = $root.netproto.ALD_Symbol.toObject(message.Symbol, options);
            if (message.Blink != null && message.hasOwnProperty("Blink"))
                object.Blink = message.Blink;
            return object;
        };

        /**
         * Converts this ALD_ReelResult to JSON.
         * @function toJSON
         * @memberof netproto.ALD_ReelResult
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ALD_ReelResult.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ALD_ReelResult;
    })();

    netproto.ALD_Symbol = (function() {

        /**
         * Properties of a ALD_Symbol.
         * @memberof netproto
         * @interface IALD_Symbol
         * @property {number|null} [SymbolID] ALD_Symbol SymbolID
         * @property {string|null} [SymbolName] ALD_Symbol SymbolName
         */

        /**
         * Constructs a new ALD_Symbol.
         * @memberof netproto
         * @classdesc Represents a ALD_Symbol.
         * @implements IALD_Symbol
         * @constructor
         * @param {netproto.IALD_Symbol=} [properties] Properties to set
         */
        function ALD_Symbol(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ALD_Symbol SymbolID.
         * @member {number} SymbolID
         * @memberof netproto.ALD_Symbol
         * @instance
         */
        ALD_Symbol.prototype.SymbolID = 0;

        /**
         * ALD_Symbol SymbolName.
         * @member {string} SymbolName
         * @memberof netproto.ALD_Symbol
         * @instance
         */
        ALD_Symbol.prototype.SymbolName = "";

        /**
         * Creates a new ALD_Symbol instance using the specified properties.
         * @function create
         * @memberof netproto.ALD_Symbol
         * @static
         * @param {netproto.IALD_Symbol=} [properties] Properties to set
         * @returns {netproto.ALD_Symbol} ALD_Symbol instance
         */
        ALD_Symbol.create = function create(properties) {
            return new ALD_Symbol(properties);
        };

        /**
         * Encodes the specified ALD_Symbol message. Does not implicitly {@link netproto.ALD_Symbol.verify|verify} messages.
         * @function encode
         * @memberof netproto.ALD_Symbol
         * @static
         * @param {netproto.IALD_Symbol} message ALD_Symbol message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ALD_Symbol.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.SymbolID != null && message.hasOwnProperty("SymbolID"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.SymbolID);
            if (message.SymbolName != null && message.hasOwnProperty("SymbolName"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.SymbolName);
            return writer;
        };

        /**
         * Encodes the specified ALD_Symbol message, length delimited. Does not implicitly {@link netproto.ALD_Symbol.verify|verify} messages.
         * @function encodeDelimited
         * @memberof netproto.ALD_Symbol
         * @static
         * @param {netproto.IALD_Symbol} message ALD_Symbol message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ALD_Symbol.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ALD_Symbol message from the specified reader or buffer.
         * @function decode
         * @memberof netproto.ALD_Symbol
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {netproto.ALD_Symbol} ALD_Symbol
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ALD_Symbol.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.netproto.ALD_Symbol();
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
         * Decodes a ALD_Symbol message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof netproto.ALD_Symbol
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {netproto.ALD_Symbol} ALD_Symbol
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ALD_Symbol.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ALD_Symbol message.
         * @function verify
         * @memberof netproto.ALD_Symbol
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ALD_Symbol.verify = function verify(message) {
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
         * Creates a ALD_Symbol message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof netproto.ALD_Symbol
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {netproto.ALD_Symbol} ALD_Symbol
         */
        ALD_Symbol.fromObject = function fromObject(object) {
            if (object instanceof $root.netproto.ALD_Symbol)
                return object;
            var message = new $root.netproto.ALD_Symbol();
            if (object.SymbolID != null)
                message.SymbolID = object.SymbolID | 0;
            if (object.SymbolName != null)
                message.SymbolName = String(object.SymbolName);
            return message;
        };

        /**
         * Creates a plain object from a ALD_Symbol message. Also converts values to other types if specified.
         * @function toObject
         * @memberof netproto.ALD_Symbol
         * @static
         * @param {netproto.ALD_Symbol} message ALD_Symbol
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ALD_Symbol.toObject = function toObject(message, options) {
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
         * Converts this ALD_Symbol to JSON.
         * @function toJSON
         * @memberof netproto.ALD_Symbol
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ALD_Symbol.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ALD_Symbol;
    })();

    netproto.ALD_PayLine = (function() {

        /**
         * Properties of a ALD_PayLine.
         * @memberof netproto
         * @interface IALD_PayLine
         * @property {number|null} [PayLineID] ALD_PayLine PayLineID
         * @property {Array.<netproto.IALD_ReelPosition>|null} [Positions] ALD_PayLine Positions
         */

        /**
         * Constructs a new ALD_PayLine.
         * @memberof netproto
         * @classdesc Represents a ALD_PayLine.
         * @implements IALD_PayLine
         * @constructor
         * @param {netproto.IALD_PayLine=} [properties] Properties to set
         */
        function ALD_PayLine(properties) {
            this.Positions = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ALD_PayLine PayLineID.
         * @member {number} PayLineID
         * @memberof netproto.ALD_PayLine
         * @instance
         */
        ALD_PayLine.prototype.PayLineID = 0;

        /**
         * ALD_PayLine Positions.
         * @member {Array.<netproto.IALD_ReelPosition>} Positions
         * @memberof netproto.ALD_PayLine
         * @instance
         */
        ALD_PayLine.prototype.Positions = $util.emptyArray;

        /**
         * Creates a new ALD_PayLine instance using the specified properties.
         * @function create
         * @memberof netproto.ALD_PayLine
         * @static
         * @param {netproto.IALD_PayLine=} [properties] Properties to set
         * @returns {netproto.ALD_PayLine} ALD_PayLine instance
         */
        ALD_PayLine.create = function create(properties) {
            return new ALD_PayLine(properties);
        };

        /**
         * Encodes the specified ALD_PayLine message. Does not implicitly {@link netproto.ALD_PayLine.verify|verify} messages.
         * @function encode
         * @memberof netproto.ALD_PayLine
         * @static
         * @param {netproto.IALD_PayLine} message ALD_PayLine message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ALD_PayLine.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.PayLineID != null && message.hasOwnProperty("PayLineID"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.PayLineID);
            if (message.Positions != null && message.Positions.length)
                for (var i = 0; i < message.Positions.length; ++i)
                    $root.netproto.ALD_ReelPosition.encode(message.Positions[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified ALD_PayLine message, length delimited. Does not implicitly {@link netproto.ALD_PayLine.verify|verify} messages.
         * @function encodeDelimited
         * @memberof netproto.ALD_PayLine
         * @static
         * @param {netproto.IALD_PayLine} message ALD_PayLine message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ALD_PayLine.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ALD_PayLine message from the specified reader or buffer.
         * @function decode
         * @memberof netproto.ALD_PayLine
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {netproto.ALD_PayLine} ALD_PayLine
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ALD_PayLine.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.netproto.ALD_PayLine();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.PayLineID = reader.int32();
                    break;
                case 2:
                    if (!(message.Positions && message.Positions.length))
                        message.Positions = [];
                    message.Positions.push($root.netproto.ALD_ReelPosition.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ALD_PayLine message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof netproto.ALD_PayLine
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {netproto.ALD_PayLine} ALD_PayLine
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ALD_PayLine.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ALD_PayLine message.
         * @function verify
         * @memberof netproto.ALD_PayLine
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ALD_PayLine.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.PayLineID != null && message.hasOwnProperty("PayLineID"))
                if (!$util.isInteger(message.PayLineID))
                    return "PayLineID: integer expected";
            if (message.Positions != null && message.hasOwnProperty("Positions")) {
                if (!Array.isArray(message.Positions))
                    return "Positions: array expected";
                for (var i = 0; i < message.Positions.length; ++i) {
                    var error = $root.netproto.ALD_ReelPosition.verify(message.Positions[i]);
                    if (error)
                        return "Positions." + error;
                }
            }
            return null;
        };

        /**
         * Creates a ALD_PayLine message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof netproto.ALD_PayLine
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {netproto.ALD_PayLine} ALD_PayLine
         */
        ALD_PayLine.fromObject = function fromObject(object) {
            if (object instanceof $root.netproto.ALD_PayLine)
                return object;
            var message = new $root.netproto.ALD_PayLine();
            if (object.PayLineID != null)
                message.PayLineID = object.PayLineID | 0;
            if (object.Positions) {
                if (!Array.isArray(object.Positions))
                    throw TypeError(".netproto.ALD_PayLine.Positions: array expected");
                message.Positions = [];
                for (var i = 0; i < object.Positions.length; ++i) {
                    if (typeof object.Positions[i] !== "object")
                        throw TypeError(".netproto.ALD_PayLine.Positions: object expected");
                    message.Positions[i] = $root.netproto.ALD_ReelPosition.fromObject(object.Positions[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a ALD_PayLine message. Also converts values to other types if specified.
         * @function toObject
         * @memberof netproto.ALD_PayLine
         * @static
         * @param {netproto.ALD_PayLine} message ALD_PayLine
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ALD_PayLine.toObject = function toObject(message, options) {
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
                    object.Positions[j] = $root.netproto.ALD_ReelPosition.toObject(message.Positions[j], options);
            }
            return object;
        };

        /**
         * Converts this ALD_PayLine to JSON.
         * @function toJSON
         * @memberof netproto.ALD_PayLine
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ALD_PayLine.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ALD_PayLine;
    })();

    netproto.ALD_PayGroup = (function() {

        /**
         * Properties of a ALD_PayGroup.
         * @memberof netproto
         * @interface IALD_PayGroup
         * @property {netproto.IALD_PayLine|null} [PayLines] ALD_PayGroup PayLines
         * @property {number|Long|null} [WinMoney] ALD_PayGroup WinMoney
         * @property {string|null} [LinkType] ALD_PayGroup LinkType
         * @property {number|null} [Count] ALD_PayGroup Count
         * @property {Array.<netproto.IALD_ReelPosition>|null} [BlinkPositions] ALD_PayGroup BlinkPositions
         * @property {number|null} [Way] ALD_PayGroup Way
         * @property {number|null} [Multi] ALD_PayGroup Multi
         */

        /**
         * Constructs a new ALD_PayGroup.
         * @memberof netproto
         * @classdesc Represents a ALD_PayGroup.
         * @implements IALD_PayGroup
         * @constructor
         * @param {netproto.IALD_PayGroup=} [properties] Properties to set
         */
        function ALD_PayGroup(properties) {
            this.BlinkPositions = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ALD_PayGroup PayLines.
         * @member {netproto.IALD_PayLine|null|undefined} PayLines
         * @memberof netproto.ALD_PayGroup
         * @instance
         */
        ALD_PayGroup.prototype.PayLines = null;

        /**
         * ALD_PayGroup WinMoney.
         * @member {number|Long} WinMoney
         * @memberof netproto.ALD_PayGroup
         * @instance
         */
        ALD_PayGroup.prototype.WinMoney = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ALD_PayGroup LinkType.
         * @member {string} LinkType
         * @memberof netproto.ALD_PayGroup
         * @instance
         */
        ALD_PayGroup.prototype.LinkType = "";

        /**
         * ALD_PayGroup Count.
         * @member {number} Count
         * @memberof netproto.ALD_PayGroup
         * @instance
         */
        ALD_PayGroup.prototype.Count = 0;

        /**
         * ALD_PayGroup BlinkPositions.
         * @member {Array.<netproto.IALD_ReelPosition>} BlinkPositions
         * @memberof netproto.ALD_PayGroup
         * @instance
         */
        ALD_PayGroup.prototype.BlinkPositions = $util.emptyArray;

        /**
         * ALD_PayGroup Way.
         * @member {number} Way
         * @memberof netproto.ALD_PayGroup
         * @instance
         */
        ALD_PayGroup.prototype.Way = 0;

        /**
         * ALD_PayGroup Multi.
         * @member {number} Multi
         * @memberof netproto.ALD_PayGroup
         * @instance
         */
        ALD_PayGroup.prototype.Multi = 0;

        /**
         * Creates a new ALD_PayGroup instance using the specified properties.
         * @function create
         * @memberof netproto.ALD_PayGroup
         * @static
         * @param {netproto.IALD_PayGroup=} [properties] Properties to set
         * @returns {netproto.ALD_PayGroup} ALD_PayGroup instance
         */
        ALD_PayGroup.create = function create(properties) {
            return new ALD_PayGroup(properties);
        };

        /**
         * Encodes the specified ALD_PayGroup message. Does not implicitly {@link netproto.ALD_PayGroup.verify|verify} messages.
         * @function encode
         * @memberof netproto.ALD_PayGroup
         * @static
         * @param {netproto.IALD_PayGroup} message ALD_PayGroup message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ALD_PayGroup.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.PayLines != null && message.hasOwnProperty("PayLines"))
                $root.netproto.ALD_PayLine.encode(message.PayLines, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.WinMoney != null && message.hasOwnProperty("WinMoney"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.WinMoney);
            if (message.LinkType != null && message.hasOwnProperty("LinkType"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.LinkType);
            if (message.Count != null && message.hasOwnProperty("Count"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.Count);
            if (message.BlinkPositions != null && message.BlinkPositions.length)
                for (var i = 0; i < message.BlinkPositions.length; ++i)
                    $root.netproto.ALD_ReelPosition.encode(message.BlinkPositions[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            if (message.Way != null && message.hasOwnProperty("Way"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.Way);
            if (message.Multi != null && message.hasOwnProperty("Multi"))
                writer.uint32(/* id 7, wireType 0 =*/56).int32(message.Multi);
            return writer;
        };

        /**
         * Encodes the specified ALD_PayGroup message, length delimited. Does not implicitly {@link netproto.ALD_PayGroup.verify|verify} messages.
         * @function encodeDelimited
         * @memberof netproto.ALD_PayGroup
         * @static
         * @param {netproto.IALD_PayGroup} message ALD_PayGroup message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ALD_PayGroup.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ALD_PayGroup message from the specified reader or buffer.
         * @function decode
         * @memberof netproto.ALD_PayGroup
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {netproto.ALD_PayGroup} ALD_PayGroup
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ALD_PayGroup.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.netproto.ALD_PayGroup();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.PayLines = $root.netproto.ALD_PayLine.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.WinMoney = reader.int64();
                    break;
                case 3:
                    message.LinkType = reader.string();
                    break;
                case 4:
                    message.Count = reader.int32();
                    break;
                case 5:
                    if (!(message.BlinkPositions && message.BlinkPositions.length))
                        message.BlinkPositions = [];
                    message.BlinkPositions.push($root.netproto.ALD_ReelPosition.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.Way = reader.int32();
                    break;
                case 7:
                    message.Multi = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ALD_PayGroup message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof netproto.ALD_PayGroup
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {netproto.ALD_PayGroup} ALD_PayGroup
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ALD_PayGroup.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ALD_PayGroup message.
         * @function verify
         * @memberof netproto.ALD_PayGroup
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ALD_PayGroup.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.PayLines != null && message.hasOwnProperty("PayLines")) {
                var error = $root.netproto.ALD_PayLine.verify(message.PayLines);
                if (error)
                    return "PayLines." + error;
            }
            if (message.WinMoney != null && message.hasOwnProperty("WinMoney"))
                if (!$util.isInteger(message.WinMoney) && !(message.WinMoney && $util.isInteger(message.WinMoney.low) && $util.isInteger(message.WinMoney.high)))
                    return "WinMoney: integer|Long expected";
            if (message.LinkType != null && message.hasOwnProperty("LinkType"))
                if (!$util.isString(message.LinkType))
                    return "LinkType: string expected";
            if (message.Count != null && message.hasOwnProperty("Count"))
                if (!$util.isInteger(message.Count))
                    return "Count: integer expected";
            if (message.BlinkPositions != null && message.hasOwnProperty("BlinkPositions")) {
                if (!Array.isArray(message.BlinkPositions))
                    return "BlinkPositions: array expected";
                for (var i = 0; i < message.BlinkPositions.length; ++i) {
                    var error = $root.netproto.ALD_ReelPosition.verify(message.BlinkPositions[i]);
                    if (error)
                        return "BlinkPositions." + error;
                }
            }
            if (message.Way != null && message.hasOwnProperty("Way"))
                if (!$util.isInteger(message.Way))
                    return "Way: integer expected";
            if (message.Multi != null && message.hasOwnProperty("Multi"))
                if (!$util.isInteger(message.Multi))
                    return "Multi: integer expected";
            return null;
        };

        /**
         * Creates a ALD_PayGroup message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof netproto.ALD_PayGroup
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {netproto.ALD_PayGroup} ALD_PayGroup
         */
        ALD_PayGroup.fromObject = function fromObject(object) {
            if (object instanceof $root.netproto.ALD_PayGroup)
                return object;
            var message = new $root.netproto.ALD_PayGroup();
            if (object.PayLines != null) {
                if (typeof object.PayLines !== "object")
                    throw TypeError(".netproto.ALD_PayGroup.PayLines: object expected");
                message.PayLines = $root.netproto.ALD_PayLine.fromObject(object.PayLines);
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
            if (object.LinkType != null)
                message.LinkType = String(object.LinkType);
            if (object.Count != null)
                message.Count = object.Count | 0;
            if (object.BlinkPositions) {
                if (!Array.isArray(object.BlinkPositions))
                    throw TypeError(".netproto.ALD_PayGroup.BlinkPositions: array expected");
                message.BlinkPositions = [];
                for (var i = 0; i < object.BlinkPositions.length; ++i) {
                    if (typeof object.BlinkPositions[i] !== "object")
                        throw TypeError(".netproto.ALD_PayGroup.BlinkPositions: object expected");
                    message.BlinkPositions[i] = $root.netproto.ALD_ReelPosition.fromObject(object.BlinkPositions[i]);
                }
            }
            if (object.Way != null)
                message.Way = object.Way | 0;
            if (object.Multi != null)
                message.Multi = object.Multi | 0;
            return message;
        };

        /**
         * Creates a plain object from a ALD_PayGroup message. Also converts values to other types if specified.
         * @function toObject
         * @memberof netproto.ALD_PayGroup
         * @static
         * @param {netproto.ALD_PayGroup} message ALD_PayGroup
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ALD_PayGroup.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.BlinkPositions = [];
            if (options.defaults) {
                object.PayLines = null;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.WinMoney = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.WinMoney = options.longs === String ? "0" : 0;
                object.LinkType = "";
                object.Count = 0;
                object.Way = 0;
                object.Multi = 0;
            }
            if (message.PayLines != null && message.hasOwnProperty("PayLines"))
                object.PayLines = $root.netproto.ALD_PayLine.toObject(message.PayLines, options);
            if (message.WinMoney != null && message.hasOwnProperty("WinMoney"))
                if (typeof message.WinMoney === "number")
                    object.WinMoney = options.longs === String ? String(message.WinMoney) : message.WinMoney;
                else
                    object.WinMoney = options.longs === String ? $util.Long.prototype.toString.call(message.WinMoney) : options.longs === Number ? new $util.LongBits(message.WinMoney.low >>> 0, message.WinMoney.high >>> 0).toNumber() : message.WinMoney;
            if (message.LinkType != null && message.hasOwnProperty("LinkType"))
                object.LinkType = message.LinkType;
            if (message.Count != null && message.hasOwnProperty("Count"))
                object.Count = message.Count;
            if (message.BlinkPositions && message.BlinkPositions.length) {
                object.BlinkPositions = [];
                for (var j = 0; j < message.BlinkPositions.length; ++j)
                    object.BlinkPositions[j] = $root.netproto.ALD_ReelPosition.toObject(message.BlinkPositions[j], options);
            }
            if (message.Way != null && message.hasOwnProperty("Way"))
                object.Way = message.Way;
            if (message.Multi != null && message.hasOwnProperty("Multi"))
                object.Multi = message.Multi;
            return object;
        };

        /**
         * Converts this ALD_PayGroup to JSON.
         * @function toJSON
         * @memberof netproto.ALD_PayGroup
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ALD_PayGroup.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ALD_PayGroup;
    })();

    netproto.ALD_SymbolPayTable = (function() {

        /**
         * Properties of a ALD_SymbolPayTable.
         * @memberof netproto
         * @interface IALD_SymbolPayTable
         * @property {netproto.IALD_Symbol|null} [Symbol] ALD_SymbolPayTable Symbol
         * @property {number|null} [Count] ALD_SymbolPayTable Count
         * @property {string|null} [Type] ALD_SymbolPayTable Type
         * @property {number|null} [Payout] ALD_SymbolPayTable Payout
         * @property {string|null} [Title] ALD_SymbolPayTable Title
         * @property {string|null} [Desc] ALD_SymbolPayTable Desc
         */

        /**
         * Constructs a new ALD_SymbolPayTable.
         * @memberof netproto
         * @classdesc Represents a ALD_SymbolPayTable.
         * @implements IALD_SymbolPayTable
         * @constructor
         * @param {netproto.IALD_SymbolPayTable=} [properties] Properties to set
         */
        function ALD_SymbolPayTable(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ALD_SymbolPayTable Symbol.
         * @member {netproto.IALD_Symbol|null|undefined} Symbol
         * @memberof netproto.ALD_SymbolPayTable
         * @instance
         */
        ALD_SymbolPayTable.prototype.Symbol = null;

        /**
         * ALD_SymbolPayTable Count.
         * @member {number} Count
         * @memberof netproto.ALD_SymbolPayTable
         * @instance
         */
        ALD_SymbolPayTable.prototype.Count = 0;

        /**
         * ALD_SymbolPayTable Type.
         * @member {string} Type
         * @memberof netproto.ALD_SymbolPayTable
         * @instance
         */
        ALD_SymbolPayTable.prototype.Type = "";

        /**
         * ALD_SymbolPayTable Payout.
         * @member {number} Payout
         * @memberof netproto.ALD_SymbolPayTable
         * @instance
         */
        ALD_SymbolPayTable.prototype.Payout = 0;

        /**
         * ALD_SymbolPayTable Title.
         * @member {string} Title
         * @memberof netproto.ALD_SymbolPayTable
         * @instance
         */
        ALD_SymbolPayTable.prototype.Title = "";

        /**
         * ALD_SymbolPayTable Desc.
         * @member {string} Desc
         * @memberof netproto.ALD_SymbolPayTable
         * @instance
         */
        ALD_SymbolPayTable.prototype.Desc = "";

        /**
         * Creates a new ALD_SymbolPayTable instance using the specified properties.
         * @function create
         * @memberof netproto.ALD_SymbolPayTable
         * @static
         * @param {netproto.IALD_SymbolPayTable=} [properties] Properties to set
         * @returns {netproto.ALD_SymbolPayTable} ALD_SymbolPayTable instance
         */
        ALD_SymbolPayTable.create = function create(properties) {
            return new ALD_SymbolPayTable(properties);
        };

        /**
         * Encodes the specified ALD_SymbolPayTable message. Does not implicitly {@link netproto.ALD_SymbolPayTable.verify|verify} messages.
         * @function encode
         * @memberof netproto.ALD_SymbolPayTable
         * @static
         * @param {netproto.IALD_SymbolPayTable} message ALD_SymbolPayTable message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ALD_SymbolPayTable.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Symbol != null && message.hasOwnProperty("Symbol"))
                $root.netproto.ALD_Symbol.encode(message.Symbol, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
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
         * Encodes the specified ALD_SymbolPayTable message, length delimited. Does not implicitly {@link netproto.ALD_SymbolPayTable.verify|verify} messages.
         * @function encodeDelimited
         * @memberof netproto.ALD_SymbolPayTable
         * @static
         * @param {netproto.IALD_SymbolPayTable} message ALD_SymbolPayTable message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ALD_SymbolPayTable.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ALD_SymbolPayTable message from the specified reader or buffer.
         * @function decode
         * @memberof netproto.ALD_SymbolPayTable
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {netproto.ALD_SymbolPayTable} ALD_SymbolPayTable
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ALD_SymbolPayTable.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.netproto.ALD_SymbolPayTable();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Symbol = $root.netproto.ALD_Symbol.decode(reader, reader.uint32());
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
         * Decodes a ALD_SymbolPayTable message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof netproto.ALD_SymbolPayTable
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {netproto.ALD_SymbolPayTable} ALD_SymbolPayTable
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ALD_SymbolPayTable.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ALD_SymbolPayTable message.
         * @function verify
         * @memberof netproto.ALD_SymbolPayTable
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ALD_SymbolPayTable.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Symbol != null && message.hasOwnProperty("Symbol")) {
                var error = $root.netproto.ALD_Symbol.verify(message.Symbol);
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
         * Creates a ALD_SymbolPayTable message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof netproto.ALD_SymbolPayTable
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {netproto.ALD_SymbolPayTable} ALD_SymbolPayTable
         */
        ALD_SymbolPayTable.fromObject = function fromObject(object) {
            if (object instanceof $root.netproto.ALD_SymbolPayTable)
                return object;
            var message = new $root.netproto.ALD_SymbolPayTable();
            if (object.Symbol != null) {
                if (typeof object.Symbol !== "object")
                    throw TypeError(".netproto.ALD_SymbolPayTable.Symbol: object expected");
                message.Symbol = $root.netproto.ALD_Symbol.fromObject(object.Symbol);
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
         * Creates a plain object from a ALD_SymbolPayTable message. Also converts values to other types if specified.
         * @function toObject
         * @memberof netproto.ALD_SymbolPayTable
         * @static
         * @param {netproto.ALD_SymbolPayTable} message ALD_SymbolPayTable
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ALD_SymbolPayTable.toObject = function toObject(message, options) {
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
                object.Symbol = $root.netproto.ALD_Symbol.toObject(message.Symbol, options);
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
         * Converts this ALD_SymbolPayTable to JSON.
         * @function toJSON
         * @memberof netproto.ALD_SymbolPayTable
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ALD_SymbolPayTable.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ALD_SymbolPayTable;
    })();

    netproto.ALD_HistoryLogData = (function() {

        /**
         * Properties of a ALD_HistoryLogData.
         * @memberof netproto
         * @interface IALD_HistoryLogData
         * @property {number|null} [UserID] ALD_HistoryLogData UserID
         * @property {number|null} [GameID] ALD_HistoryLogData GameID
         * @property {number|null} [ServerID] ALD_HistoryLogData ServerID
         * @property {number|Long|null} [CurrentAmount] ALD_HistoryLogData CurrentAmount
         * @property {number|Long|null} [BetMoney] ALD_HistoryLogData BetMoney
         * @property {number|Long|null} [WinMoney] ALD_HistoryLogData WinMoney
         * @property {number|Long|null} [FinalScore] ALD_HistoryLogData FinalScore
         * @property {number|null} [GameType] ALD_HistoryLogData GameType
         * @property {number|null} [LogType] ALD_HistoryLogData LogType
         * @property {string|null} [GameData] ALD_HistoryLogData GameData
         * @property {number|Long|null} [CurrentCoupon] ALD_HistoryLogData CurrentCoupon
         * @property {number|Long|null} [BetCoupon] ALD_HistoryLogData BetCoupon
         * @property {number|Long|null} [FinalCoupon] ALD_HistoryLogData FinalCoupon
         */

        /**
         * Constructs a new ALD_HistoryLogData.
         * @memberof netproto
         * @classdesc Represents a ALD_HistoryLogData.
         * @implements IALD_HistoryLogData
         * @constructor
         * @param {netproto.IALD_HistoryLogData=} [properties] Properties to set
         */
        function ALD_HistoryLogData(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ALD_HistoryLogData UserID.
         * @member {number} UserID
         * @memberof netproto.ALD_HistoryLogData
         * @instance
         */
        ALD_HistoryLogData.prototype.UserID = 0;

        /**
         * ALD_HistoryLogData GameID.
         * @member {number} GameID
         * @memberof netproto.ALD_HistoryLogData
         * @instance
         */
        ALD_HistoryLogData.prototype.GameID = 0;

        /**
         * ALD_HistoryLogData ServerID.
         * @member {number} ServerID
         * @memberof netproto.ALD_HistoryLogData
         * @instance
         */
        ALD_HistoryLogData.prototype.ServerID = 0;

        /**
         * ALD_HistoryLogData CurrentAmount.
         * @member {number|Long} CurrentAmount
         * @memberof netproto.ALD_HistoryLogData
         * @instance
         */
        ALD_HistoryLogData.prototype.CurrentAmount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ALD_HistoryLogData BetMoney.
         * @member {number|Long} BetMoney
         * @memberof netproto.ALD_HistoryLogData
         * @instance
         */
        ALD_HistoryLogData.prototype.BetMoney = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ALD_HistoryLogData WinMoney.
         * @member {number|Long} WinMoney
         * @memberof netproto.ALD_HistoryLogData
         * @instance
         */
        ALD_HistoryLogData.prototype.WinMoney = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ALD_HistoryLogData FinalScore.
         * @member {number|Long} FinalScore
         * @memberof netproto.ALD_HistoryLogData
         * @instance
         */
        ALD_HistoryLogData.prototype.FinalScore = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ALD_HistoryLogData GameType.
         * @member {number} GameType
         * @memberof netproto.ALD_HistoryLogData
         * @instance
         */
        ALD_HistoryLogData.prototype.GameType = 0;

        /**
         * ALD_HistoryLogData LogType.
         * @member {number} LogType
         * @memberof netproto.ALD_HistoryLogData
         * @instance
         */
        ALD_HistoryLogData.prototype.LogType = 0;

        /**
         * ALD_HistoryLogData GameData.
         * @member {string} GameData
         * @memberof netproto.ALD_HistoryLogData
         * @instance
         */
        ALD_HistoryLogData.prototype.GameData = "";

        /**
         * ALD_HistoryLogData CurrentCoupon.
         * @member {number|Long} CurrentCoupon
         * @memberof netproto.ALD_HistoryLogData
         * @instance
         */
        ALD_HistoryLogData.prototype.CurrentCoupon = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ALD_HistoryLogData BetCoupon.
         * @member {number|Long} BetCoupon
         * @memberof netproto.ALD_HistoryLogData
         * @instance
         */
        ALD_HistoryLogData.prototype.BetCoupon = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ALD_HistoryLogData FinalCoupon.
         * @member {number|Long} FinalCoupon
         * @memberof netproto.ALD_HistoryLogData
         * @instance
         */
        ALD_HistoryLogData.prototype.FinalCoupon = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new ALD_HistoryLogData instance using the specified properties.
         * @function create
         * @memberof netproto.ALD_HistoryLogData
         * @static
         * @param {netproto.IALD_HistoryLogData=} [properties] Properties to set
         * @returns {netproto.ALD_HistoryLogData} ALD_HistoryLogData instance
         */
        ALD_HistoryLogData.create = function create(properties) {
            return new ALD_HistoryLogData(properties);
        };

        /**
         * Encodes the specified ALD_HistoryLogData message. Does not implicitly {@link netproto.ALD_HistoryLogData.verify|verify} messages.
         * @function encode
         * @memberof netproto.ALD_HistoryLogData
         * @static
         * @param {netproto.IALD_HistoryLogData} message ALD_HistoryLogData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ALD_HistoryLogData.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.UserID);
            if (message.GameID != null && message.hasOwnProperty("GameID"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.GameID);
            if (message.ServerID != null && message.hasOwnProperty("ServerID"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.ServerID);
            if (message.CurrentAmount != null && message.hasOwnProperty("CurrentAmount"))
                writer.uint32(/* id 4, wireType 0 =*/32).int64(message.CurrentAmount);
            if (message.BetMoney != null && message.hasOwnProperty("BetMoney"))
                writer.uint32(/* id 5, wireType 0 =*/40).int64(message.BetMoney);
            if (message.WinMoney != null && message.hasOwnProperty("WinMoney"))
                writer.uint32(/* id 6, wireType 0 =*/48).int64(message.WinMoney);
            if (message.FinalScore != null && message.hasOwnProperty("FinalScore"))
                writer.uint32(/* id 7, wireType 0 =*/56).int64(message.FinalScore);
            if (message.GameType != null && message.hasOwnProperty("GameType"))
                writer.uint32(/* id 8, wireType 0 =*/64).int32(message.GameType);
            if (message.LogType != null && message.hasOwnProperty("LogType"))
                writer.uint32(/* id 9, wireType 0 =*/72).int32(message.LogType);
            if (message.GameData != null && message.hasOwnProperty("GameData"))
                writer.uint32(/* id 10, wireType 2 =*/82).string(message.GameData);
            if (message.CurrentCoupon != null && message.hasOwnProperty("CurrentCoupon"))
                writer.uint32(/* id 11, wireType 0 =*/88).int64(message.CurrentCoupon);
            if (message.BetCoupon != null && message.hasOwnProperty("BetCoupon"))
                writer.uint32(/* id 12, wireType 0 =*/96).int64(message.BetCoupon);
            if (message.FinalCoupon != null && message.hasOwnProperty("FinalCoupon"))
                writer.uint32(/* id 13, wireType 0 =*/104).int64(message.FinalCoupon);
            return writer;
        };

        /**
         * Encodes the specified ALD_HistoryLogData message, length delimited. Does not implicitly {@link netproto.ALD_HistoryLogData.verify|verify} messages.
         * @function encodeDelimited
         * @memberof netproto.ALD_HistoryLogData
         * @static
         * @param {netproto.IALD_HistoryLogData} message ALD_HistoryLogData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ALD_HistoryLogData.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ALD_HistoryLogData message from the specified reader or buffer.
         * @function decode
         * @memberof netproto.ALD_HistoryLogData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {netproto.ALD_HistoryLogData} ALD_HistoryLogData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ALD_HistoryLogData.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.netproto.ALD_HistoryLogData();
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
                    message.ServerID = reader.int32();
                    break;
                case 4:
                    message.CurrentAmount = reader.int64();
                    break;
                case 5:
                    message.BetMoney = reader.int64();
                    break;
                case 6:
                    message.WinMoney = reader.int64();
                    break;
                case 7:
                    message.FinalScore = reader.int64();
                    break;
                case 8:
                    message.GameType = reader.int32();
                    break;
                case 9:
                    message.LogType = reader.int32();
                    break;
                case 10:
                    message.GameData = reader.string();
                    break;
                case 11:
                    message.CurrentCoupon = reader.int64();
                    break;
                case 12:
                    message.BetCoupon = reader.int64();
                    break;
                case 13:
                    message.FinalCoupon = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ALD_HistoryLogData message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof netproto.ALD_HistoryLogData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {netproto.ALD_HistoryLogData} ALD_HistoryLogData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ALD_HistoryLogData.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ALD_HistoryLogData message.
         * @function verify
         * @memberof netproto.ALD_HistoryLogData
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ALD_HistoryLogData.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                if (!$util.isInteger(message.UserID))
                    return "UserID: integer expected";
            if (message.GameID != null && message.hasOwnProperty("GameID"))
                if (!$util.isInteger(message.GameID))
                    return "GameID: integer expected";
            if (message.ServerID != null && message.hasOwnProperty("ServerID"))
                if (!$util.isInteger(message.ServerID))
                    return "ServerID: integer expected";
            if (message.CurrentAmount != null && message.hasOwnProperty("CurrentAmount"))
                if (!$util.isInteger(message.CurrentAmount) && !(message.CurrentAmount && $util.isInteger(message.CurrentAmount.low) && $util.isInteger(message.CurrentAmount.high)))
                    return "CurrentAmount: integer|Long expected";
            if (message.BetMoney != null && message.hasOwnProperty("BetMoney"))
                if (!$util.isInteger(message.BetMoney) && !(message.BetMoney && $util.isInteger(message.BetMoney.low) && $util.isInteger(message.BetMoney.high)))
                    return "BetMoney: integer|Long expected";
            if (message.WinMoney != null && message.hasOwnProperty("WinMoney"))
                if (!$util.isInteger(message.WinMoney) && !(message.WinMoney && $util.isInteger(message.WinMoney.low) && $util.isInteger(message.WinMoney.high)))
                    return "WinMoney: integer|Long expected";
            if (message.FinalScore != null && message.hasOwnProperty("FinalScore"))
                if (!$util.isInteger(message.FinalScore) && !(message.FinalScore && $util.isInteger(message.FinalScore.low) && $util.isInteger(message.FinalScore.high)))
                    return "FinalScore: integer|Long expected";
            if (message.GameType != null && message.hasOwnProperty("GameType"))
                if (!$util.isInteger(message.GameType))
                    return "GameType: integer expected";
            if (message.LogType != null && message.hasOwnProperty("LogType"))
                if (!$util.isInteger(message.LogType))
                    return "LogType: integer expected";
            if (message.GameData != null && message.hasOwnProperty("GameData"))
                if (!$util.isString(message.GameData))
                    return "GameData: string expected";
            if (message.CurrentCoupon != null && message.hasOwnProperty("CurrentCoupon"))
                if (!$util.isInteger(message.CurrentCoupon) && !(message.CurrentCoupon && $util.isInteger(message.CurrentCoupon.low) && $util.isInteger(message.CurrentCoupon.high)))
                    return "CurrentCoupon: integer|Long expected";
            if (message.BetCoupon != null && message.hasOwnProperty("BetCoupon"))
                if (!$util.isInteger(message.BetCoupon) && !(message.BetCoupon && $util.isInteger(message.BetCoupon.low) && $util.isInteger(message.BetCoupon.high)))
                    return "BetCoupon: integer|Long expected";
            if (message.FinalCoupon != null && message.hasOwnProperty("FinalCoupon"))
                if (!$util.isInteger(message.FinalCoupon) && !(message.FinalCoupon && $util.isInteger(message.FinalCoupon.low) && $util.isInteger(message.FinalCoupon.high)))
                    return "FinalCoupon: integer|Long expected";
            return null;
        };

        /**
         * Creates a ALD_HistoryLogData message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof netproto.ALD_HistoryLogData
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {netproto.ALD_HistoryLogData} ALD_HistoryLogData
         */
        ALD_HistoryLogData.fromObject = function fromObject(object) {
            if (object instanceof $root.netproto.ALD_HistoryLogData)
                return object;
            var message = new $root.netproto.ALD_HistoryLogData();
            if (object.UserID != null)
                message.UserID = object.UserID | 0;
            if (object.GameID != null)
                message.GameID = object.GameID | 0;
            if (object.ServerID != null)
                message.ServerID = object.ServerID | 0;
            if (object.CurrentAmount != null)
                if ($util.Long)
                    (message.CurrentAmount = $util.Long.fromValue(object.CurrentAmount)).unsigned = false;
                else if (typeof object.CurrentAmount === "string")
                    message.CurrentAmount = parseInt(object.CurrentAmount, 10);
                else if (typeof object.CurrentAmount === "number")
                    message.CurrentAmount = object.CurrentAmount;
                else if (typeof object.CurrentAmount === "object")
                    message.CurrentAmount = new $util.LongBits(object.CurrentAmount.low >>> 0, object.CurrentAmount.high >>> 0).toNumber();
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
            if (object.FinalScore != null)
                if ($util.Long)
                    (message.FinalScore = $util.Long.fromValue(object.FinalScore)).unsigned = false;
                else if (typeof object.FinalScore === "string")
                    message.FinalScore = parseInt(object.FinalScore, 10);
                else if (typeof object.FinalScore === "number")
                    message.FinalScore = object.FinalScore;
                else if (typeof object.FinalScore === "object")
                    message.FinalScore = new $util.LongBits(object.FinalScore.low >>> 0, object.FinalScore.high >>> 0).toNumber();
            if (object.GameType != null)
                message.GameType = object.GameType | 0;
            if (object.LogType != null)
                message.LogType = object.LogType | 0;
            if (object.GameData != null)
                message.GameData = String(object.GameData);
            if (object.CurrentCoupon != null)
                if ($util.Long)
                    (message.CurrentCoupon = $util.Long.fromValue(object.CurrentCoupon)).unsigned = false;
                else if (typeof object.CurrentCoupon === "string")
                    message.CurrentCoupon = parseInt(object.CurrentCoupon, 10);
                else if (typeof object.CurrentCoupon === "number")
                    message.CurrentCoupon = object.CurrentCoupon;
                else if (typeof object.CurrentCoupon === "object")
                    message.CurrentCoupon = new $util.LongBits(object.CurrentCoupon.low >>> 0, object.CurrentCoupon.high >>> 0).toNumber();
            if (object.BetCoupon != null)
                if ($util.Long)
                    (message.BetCoupon = $util.Long.fromValue(object.BetCoupon)).unsigned = false;
                else if (typeof object.BetCoupon === "string")
                    message.BetCoupon = parseInt(object.BetCoupon, 10);
                else if (typeof object.BetCoupon === "number")
                    message.BetCoupon = object.BetCoupon;
                else if (typeof object.BetCoupon === "object")
                    message.BetCoupon = new $util.LongBits(object.BetCoupon.low >>> 0, object.BetCoupon.high >>> 0).toNumber();
            if (object.FinalCoupon != null)
                if ($util.Long)
                    (message.FinalCoupon = $util.Long.fromValue(object.FinalCoupon)).unsigned = false;
                else if (typeof object.FinalCoupon === "string")
                    message.FinalCoupon = parseInt(object.FinalCoupon, 10);
                else if (typeof object.FinalCoupon === "number")
                    message.FinalCoupon = object.FinalCoupon;
                else if (typeof object.FinalCoupon === "object")
                    message.FinalCoupon = new $util.LongBits(object.FinalCoupon.low >>> 0, object.FinalCoupon.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a ALD_HistoryLogData message. Also converts values to other types if specified.
         * @function toObject
         * @memberof netproto.ALD_HistoryLogData
         * @static
         * @param {netproto.ALD_HistoryLogData} message ALD_HistoryLogData
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ALD_HistoryLogData.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.UserID = 0;
                object.GameID = 0;
                object.ServerID = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.CurrentAmount = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.CurrentAmount = options.longs === String ? "0" : 0;
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
                    object.FinalScore = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.FinalScore = options.longs === String ? "0" : 0;
                object.GameType = 0;
                object.LogType = 0;
                object.GameData = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.CurrentCoupon = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.CurrentCoupon = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.BetCoupon = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.BetCoupon = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.FinalCoupon = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.FinalCoupon = options.longs === String ? "0" : 0;
            }
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                object.UserID = message.UserID;
            if (message.GameID != null && message.hasOwnProperty("GameID"))
                object.GameID = message.GameID;
            if (message.ServerID != null && message.hasOwnProperty("ServerID"))
                object.ServerID = message.ServerID;
            if (message.CurrentAmount != null && message.hasOwnProperty("CurrentAmount"))
                if (typeof message.CurrentAmount === "number")
                    object.CurrentAmount = options.longs === String ? String(message.CurrentAmount) : message.CurrentAmount;
                else
                    object.CurrentAmount = options.longs === String ? $util.Long.prototype.toString.call(message.CurrentAmount) : options.longs === Number ? new $util.LongBits(message.CurrentAmount.low >>> 0, message.CurrentAmount.high >>> 0).toNumber() : message.CurrentAmount;
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
            if (message.FinalScore != null && message.hasOwnProperty("FinalScore"))
                if (typeof message.FinalScore === "number")
                    object.FinalScore = options.longs === String ? String(message.FinalScore) : message.FinalScore;
                else
                    object.FinalScore = options.longs === String ? $util.Long.prototype.toString.call(message.FinalScore) : options.longs === Number ? new $util.LongBits(message.FinalScore.low >>> 0, message.FinalScore.high >>> 0).toNumber() : message.FinalScore;
            if (message.GameType != null && message.hasOwnProperty("GameType"))
                object.GameType = message.GameType;
            if (message.LogType != null && message.hasOwnProperty("LogType"))
                object.LogType = message.LogType;
            if (message.GameData != null && message.hasOwnProperty("GameData"))
                object.GameData = message.GameData;
            if (message.CurrentCoupon != null && message.hasOwnProperty("CurrentCoupon"))
                if (typeof message.CurrentCoupon === "number")
                    object.CurrentCoupon = options.longs === String ? String(message.CurrentCoupon) : message.CurrentCoupon;
                else
                    object.CurrentCoupon = options.longs === String ? $util.Long.prototype.toString.call(message.CurrentCoupon) : options.longs === Number ? new $util.LongBits(message.CurrentCoupon.low >>> 0, message.CurrentCoupon.high >>> 0).toNumber() : message.CurrentCoupon;
            if (message.BetCoupon != null && message.hasOwnProperty("BetCoupon"))
                if (typeof message.BetCoupon === "number")
                    object.BetCoupon = options.longs === String ? String(message.BetCoupon) : message.BetCoupon;
                else
                    object.BetCoupon = options.longs === String ? $util.Long.prototype.toString.call(message.BetCoupon) : options.longs === Number ? new $util.LongBits(message.BetCoupon.low >>> 0, message.BetCoupon.high >>> 0).toNumber() : message.BetCoupon;
            if (message.FinalCoupon != null && message.hasOwnProperty("FinalCoupon"))
                if (typeof message.FinalCoupon === "number")
                    object.FinalCoupon = options.longs === String ? String(message.FinalCoupon) : message.FinalCoupon;
                else
                    object.FinalCoupon = options.longs === String ? $util.Long.prototype.toString.call(message.FinalCoupon) : options.longs === Number ? new $util.LongBits(message.FinalCoupon.low >>> 0, message.FinalCoupon.high >>> 0).toNumber() : message.FinalCoupon;
            return object;
        };

        /**
         * Converts this ALD_HistoryLogData to JSON.
         * @function toJSON
         * @memberof netproto.ALD_HistoryLogData
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ALD_HistoryLogData.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ALD_HistoryLogData;
    })();

    netproto.ALD_LoadHistoryData = (function() {

        /**
         * Properties of a ALD_LoadHistoryData.
         * @memberof netproto
         * @interface IALD_LoadHistoryData
         * @property {number|null} [UserID] ALD_LoadHistoryData UserID
         * @property {number|null} [GameID] ALD_LoadHistoryData GameID
         * @property {string|null} [StartTime] ALD_LoadHistoryData StartTime
         * @property {string|null} [EndTime] ALD_LoadHistoryData EndTime
         * @property {number|null} [PageIndex] ALD_LoadHistoryData PageIndex
         * @property {number|null} [PageSize] ALD_LoadHistoryData PageSize
         */

        /**
         * Constructs a new ALD_LoadHistoryData.
         * @memberof netproto
         * @classdesc Represents a ALD_LoadHistoryData.
         * @implements IALD_LoadHistoryData
         * @constructor
         * @param {netproto.IALD_LoadHistoryData=} [properties] Properties to set
         */
        function ALD_LoadHistoryData(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ALD_LoadHistoryData UserID.
         * @member {number} UserID
         * @memberof netproto.ALD_LoadHistoryData
         * @instance
         */
        ALD_LoadHistoryData.prototype.UserID = 0;

        /**
         * ALD_LoadHistoryData GameID.
         * @member {number} GameID
         * @memberof netproto.ALD_LoadHistoryData
         * @instance
         */
        ALD_LoadHistoryData.prototype.GameID = 0;

        /**
         * ALD_LoadHistoryData StartTime.
         * @member {string} StartTime
         * @memberof netproto.ALD_LoadHistoryData
         * @instance
         */
        ALD_LoadHistoryData.prototype.StartTime = "";

        /**
         * ALD_LoadHistoryData EndTime.
         * @member {string} EndTime
         * @memberof netproto.ALD_LoadHistoryData
         * @instance
         */
        ALD_LoadHistoryData.prototype.EndTime = "";

        /**
         * ALD_LoadHistoryData PageIndex.
         * @member {number} PageIndex
         * @memberof netproto.ALD_LoadHistoryData
         * @instance
         */
        ALD_LoadHistoryData.prototype.PageIndex = 0;

        /**
         * ALD_LoadHistoryData PageSize.
         * @member {number} PageSize
         * @memberof netproto.ALD_LoadHistoryData
         * @instance
         */
        ALD_LoadHistoryData.prototype.PageSize = 0;

        /**
         * Creates a new ALD_LoadHistoryData instance using the specified properties.
         * @function create
         * @memberof netproto.ALD_LoadHistoryData
         * @static
         * @param {netproto.IALD_LoadHistoryData=} [properties] Properties to set
         * @returns {netproto.ALD_LoadHistoryData} ALD_LoadHistoryData instance
         */
        ALD_LoadHistoryData.create = function create(properties) {
            return new ALD_LoadHistoryData(properties);
        };

        /**
         * Encodes the specified ALD_LoadHistoryData message. Does not implicitly {@link netproto.ALD_LoadHistoryData.verify|verify} messages.
         * @function encode
         * @memberof netproto.ALD_LoadHistoryData
         * @static
         * @param {netproto.IALD_LoadHistoryData} message ALD_LoadHistoryData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ALD_LoadHistoryData.encode = function encode(message, writer) {
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
         * Encodes the specified ALD_LoadHistoryData message, length delimited. Does not implicitly {@link netproto.ALD_LoadHistoryData.verify|verify} messages.
         * @function encodeDelimited
         * @memberof netproto.ALD_LoadHistoryData
         * @static
         * @param {netproto.IALD_LoadHistoryData} message ALD_LoadHistoryData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ALD_LoadHistoryData.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ALD_LoadHistoryData message from the specified reader or buffer.
         * @function decode
         * @memberof netproto.ALD_LoadHistoryData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {netproto.ALD_LoadHistoryData} ALD_LoadHistoryData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ALD_LoadHistoryData.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.netproto.ALD_LoadHistoryData();
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
         * Decodes a ALD_LoadHistoryData message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof netproto.ALD_LoadHistoryData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {netproto.ALD_LoadHistoryData} ALD_LoadHistoryData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ALD_LoadHistoryData.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ALD_LoadHistoryData message.
         * @function verify
         * @memberof netproto.ALD_LoadHistoryData
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ALD_LoadHistoryData.verify = function verify(message) {
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
         * Creates a ALD_LoadHistoryData message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof netproto.ALD_LoadHistoryData
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {netproto.ALD_LoadHistoryData} ALD_LoadHistoryData
         */
        ALD_LoadHistoryData.fromObject = function fromObject(object) {
            if (object instanceof $root.netproto.ALD_LoadHistoryData)
                return object;
            var message = new $root.netproto.ALD_LoadHistoryData();
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
         * Creates a plain object from a ALD_LoadHistoryData message. Also converts values to other types if specified.
         * @function toObject
         * @memberof netproto.ALD_LoadHistoryData
         * @static
         * @param {netproto.ALD_LoadHistoryData} message ALD_LoadHistoryData
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ALD_LoadHistoryData.toObject = function toObject(message, options) {
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
         * Converts this ALD_LoadHistoryData to JSON.
         * @function toJSON
         * @memberof netproto.ALD_LoadHistoryData
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ALD_LoadHistoryData.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ALD_LoadHistoryData;
    })();

    netproto.ALD_SendHistoryData = (function() {

        /**
         * Properties of a ALD_SendHistoryData.
         * @memberof netproto
         * @interface IALD_SendHistoryData
         * @property {number|null} [UserID] ALD_SendHistoryData UserID
         * @property {number|null} [GameID] ALD_SendHistoryData GameID
         * @property {number|null} [PageCount] ALD_SendHistoryData PageCount
         * @property {Array.<netproto.IALD_SendHistoryLog>|null} [SendHistoryLog] ALD_SendHistoryData SendHistoryLog
         */

        /**
         * Constructs a new ALD_SendHistoryData.
         * @memberof netproto
         * @classdesc Represents a ALD_SendHistoryData.
         * @implements IALD_SendHistoryData
         * @constructor
         * @param {netproto.IALD_SendHistoryData=} [properties] Properties to set
         */
        function ALD_SendHistoryData(properties) {
            this.SendHistoryLog = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ALD_SendHistoryData UserID.
         * @member {number} UserID
         * @memberof netproto.ALD_SendHistoryData
         * @instance
         */
        ALD_SendHistoryData.prototype.UserID = 0;

        /**
         * ALD_SendHistoryData GameID.
         * @member {number} GameID
         * @memberof netproto.ALD_SendHistoryData
         * @instance
         */
        ALD_SendHistoryData.prototype.GameID = 0;

        /**
         * ALD_SendHistoryData PageCount.
         * @member {number} PageCount
         * @memberof netproto.ALD_SendHistoryData
         * @instance
         */
        ALD_SendHistoryData.prototype.PageCount = 0;

        /**
         * ALD_SendHistoryData SendHistoryLog.
         * @member {Array.<netproto.IALD_SendHistoryLog>} SendHistoryLog
         * @memberof netproto.ALD_SendHistoryData
         * @instance
         */
        ALD_SendHistoryData.prototype.SendHistoryLog = $util.emptyArray;

        /**
         * Creates a new ALD_SendHistoryData instance using the specified properties.
         * @function create
         * @memberof netproto.ALD_SendHistoryData
         * @static
         * @param {netproto.IALD_SendHistoryData=} [properties] Properties to set
         * @returns {netproto.ALD_SendHistoryData} ALD_SendHistoryData instance
         */
        ALD_SendHistoryData.create = function create(properties) {
            return new ALD_SendHistoryData(properties);
        };

        /**
         * Encodes the specified ALD_SendHistoryData message. Does not implicitly {@link netproto.ALD_SendHistoryData.verify|verify} messages.
         * @function encode
         * @memberof netproto.ALD_SendHistoryData
         * @static
         * @param {netproto.IALD_SendHistoryData} message ALD_SendHistoryData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ALD_SendHistoryData.encode = function encode(message, writer) {
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
                    $root.netproto.ALD_SendHistoryLog.encode(message.SendHistoryLog[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified ALD_SendHistoryData message, length delimited. Does not implicitly {@link netproto.ALD_SendHistoryData.verify|verify} messages.
         * @function encodeDelimited
         * @memberof netproto.ALD_SendHistoryData
         * @static
         * @param {netproto.IALD_SendHistoryData} message ALD_SendHistoryData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ALD_SendHistoryData.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ALD_SendHistoryData message from the specified reader or buffer.
         * @function decode
         * @memberof netproto.ALD_SendHistoryData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {netproto.ALD_SendHistoryData} ALD_SendHistoryData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ALD_SendHistoryData.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.netproto.ALD_SendHistoryData();
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
                    message.SendHistoryLog.push($root.netproto.ALD_SendHistoryLog.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ALD_SendHistoryData message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof netproto.ALD_SendHistoryData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {netproto.ALD_SendHistoryData} ALD_SendHistoryData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ALD_SendHistoryData.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ALD_SendHistoryData message.
         * @function verify
         * @memberof netproto.ALD_SendHistoryData
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ALD_SendHistoryData.verify = function verify(message) {
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
                    var error = $root.netproto.ALD_SendHistoryLog.verify(message.SendHistoryLog[i]);
                    if (error)
                        return "SendHistoryLog." + error;
                }
            }
            return null;
        };

        /**
         * Creates a ALD_SendHistoryData message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof netproto.ALD_SendHistoryData
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {netproto.ALD_SendHistoryData} ALD_SendHistoryData
         */
        ALD_SendHistoryData.fromObject = function fromObject(object) {
            if (object instanceof $root.netproto.ALD_SendHistoryData)
                return object;
            var message = new $root.netproto.ALD_SendHistoryData();
            if (object.UserID != null)
                message.UserID = object.UserID | 0;
            if (object.GameID != null)
                message.GameID = object.GameID | 0;
            if (object.PageCount != null)
                message.PageCount = object.PageCount | 0;
            if (object.SendHistoryLog) {
                if (!Array.isArray(object.SendHistoryLog))
                    throw TypeError(".netproto.ALD_SendHistoryData.SendHistoryLog: array expected");
                message.SendHistoryLog = [];
                for (var i = 0; i < object.SendHistoryLog.length; ++i) {
                    if (typeof object.SendHistoryLog[i] !== "object")
                        throw TypeError(".netproto.ALD_SendHistoryData.SendHistoryLog: object expected");
                    message.SendHistoryLog[i] = $root.netproto.ALD_SendHistoryLog.fromObject(object.SendHistoryLog[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a ALD_SendHistoryData message. Also converts values to other types if specified.
         * @function toObject
         * @memberof netproto.ALD_SendHistoryData
         * @static
         * @param {netproto.ALD_SendHistoryData} message ALD_SendHistoryData
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ALD_SendHistoryData.toObject = function toObject(message, options) {
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
                    object.SendHistoryLog[j] = $root.netproto.ALD_SendHistoryLog.toObject(message.SendHistoryLog[j], options);
            }
            return object;
        };

        /**
         * Converts this ALD_SendHistoryData to JSON.
         * @function toJSON
         * @memberof netproto.ALD_SendHistoryData
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ALD_SendHistoryData.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ALD_SendHistoryData;
    })();

    netproto.ALD_SendHistoryLog = (function() {

        /**
         * Properties of a ALD_SendHistoryLog.
         * @memberof netproto
         * @interface IALD_SendHistoryLog
         * @property {number|null} [RowNum] ALD_SendHistoryLog RowNum
         * @property {string|null} [CreateTime] ALD_SendHistoryLog CreateTime
         * @property {number|Long|null} [OrderID] ALD_SendHistoryLog OrderID
         * @property {number|Long|null} [BetMoney] ALD_SendHistoryLog BetMoney
         * @property {number|Long|null} [Profit] ALD_SendHistoryLog Profit
         */

        /**
         * Constructs a new ALD_SendHistoryLog.
         * @memberof netproto
         * @classdesc Represents a ALD_SendHistoryLog.
         * @implements IALD_SendHistoryLog
         * @constructor
         * @param {netproto.IALD_SendHistoryLog=} [properties] Properties to set
         */
        function ALD_SendHistoryLog(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ALD_SendHistoryLog RowNum.
         * @member {number} RowNum
         * @memberof netproto.ALD_SendHistoryLog
         * @instance
         */
        ALD_SendHistoryLog.prototype.RowNum = 0;

        /**
         * ALD_SendHistoryLog CreateTime.
         * @member {string} CreateTime
         * @memberof netproto.ALD_SendHistoryLog
         * @instance
         */
        ALD_SendHistoryLog.prototype.CreateTime = "";

        /**
         * ALD_SendHistoryLog OrderID.
         * @member {number|Long} OrderID
         * @memberof netproto.ALD_SendHistoryLog
         * @instance
         */
        ALD_SendHistoryLog.prototype.OrderID = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ALD_SendHistoryLog BetMoney.
         * @member {number|Long} BetMoney
         * @memberof netproto.ALD_SendHistoryLog
         * @instance
         */
        ALD_SendHistoryLog.prototype.BetMoney = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ALD_SendHistoryLog Profit.
         * @member {number|Long} Profit
         * @memberof netproto.ALD_SendHistoryLog
         * @instance
         */
        ALD_SendHistoryLog.prototype.Profit = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new ALD_SendHistoryLog instance using the specified properties.
         * @function create
         * @memberof netproto.ALD_SendHistoryLog
         * @static
         * @param {netproto.IALD_SendHistoryLog=} [properties] Properties to set
         * @returns {netproto.ALD_SendHistoryLog} ALD_SendHistoryLog instance
         */
        ALD_SendHistoryLog.create = function create(properties) {
            return new ALD_SendHistoryLog(properties);
        };

        /**
         * Encodes the specified ALD_SendHistoryLog message. Does not implicitly {@link netproto.ALD_SendHistoryLog.verify|verify} messages.
         * @function encode
         * @memberof netproto.ALD_SendHistoryLog
         * @static
         * @param {netproto.IALD_SendHistoryLog} message ALD_SendHistoryLog message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ALD_SendHistoryLog.encode = function encode(message, writer) {
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
         * Encodes the specified ALD_SendHistoryLog message, length delimited. Does not implicitly {@link netproto.ALD_SendHistoryLog.verify|verify} messages.
         * @function encodeDelimited
         * @memberof netproto.ALD_SendHistoryLog
         * @static
         * @param {netproto.IALD_SendHistoryLog} message ALD_SendHistoryLog message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ALD_SendHistoryLog.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ALD_SendHistoryLog message from the specified reader or buffer.
         * @function decode
         * @memberof netproto.ALD_SendHistoryLog
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {netproto.ALD_SendHistoryLog} ALD_SendHistoryLog
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ALD_SendHistoryLog.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.netproto.ALD_SendHistoryLog();
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
         * Decodes a ALD_SendHistoryLog message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof netproto.ALD_SendHistoryLog
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {netproto.ALD_SendHistoryLog} ALD_SendHistoryLog
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ALD_SendHistoryLog.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ALD_SendHistoryLog message.
         * @function verify
         * @memberof netproto.ALD_SendHistoryLog
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ALD_SendHistoryLog.verify = function verify(message) {
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
         * Creates a ALD_SendHistoryLog message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof netproto.ALD_SendHistoryLog
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {netproto.ALD_SendHistoryLog} ALD_SendHistoryLog
         */
        ALD_SendHistoryLog.fromObject = function fromObject(object) {
            if (object instanceof $root.netproto.ALD_SendHistoryLog)
                return object;
            var message = new $root.netproto.ALD_SendHistoryLog();
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
         * Creates a plain object from a ALD_SendHistoryLog message. Also converts values to other types if specified.
         * @function toObject
         * @memberof netproto.ALD_SendHistoryLog
         * @static
         * @param {netproto.ALD_SendHistoryLog} message ALD_SendHistoryLog
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ALD_SendHistoryLog.toObject = function toObject(message, options) {
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
         * Converts this ALD_SendHistoryLog to JSON.
         * @function toJSON
         * @memberof netproto.ALD_SendHistoryLog
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ALD_SendHistoryLog.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ALD_SendHistoryLog;
    })();

    netproto.ALD_GameLog = (function() {

        /**
         * Properties of a ALD_GameLog.
         * @memberof netproto
         * @interface IALD_GameLog
         * @property {number|null} [RowNum] ALD_GameLog RowNum
         * @property {string|null} [CreateTime] ALD_GameLog CreateTime
         * @property {number|Long|null} [OrderID] ALD_GameLog OrderID
         * @property {number|Long|null} [BetMoney] ALD_GameLog BetMoney
         * @property {number|Long|null} [Profit] ALD_GameLog Profit
         */

        /**
         * Constructs a new ALD_GameLog.
         * @memberof netproto
         * @classdesc Represents a ALD_GameLog.
         * @implements IALD_GameLog
         * @constructor
         * @param {netproto.IALD_GameLog=} [properties] Properties to set
         */
        function ALD_GameLog(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ALD_GameLog RowNum.
         * @member {number} RowNum
         * @memberof netproto.ALD_GameLog
         * @instance
         */
        ALD_GameLog.prototype.RowNum = 0;

        /**
         * ALD_GameLog CreateTime.
         * @member {string} CreateTime
         * @memberof netproto.ALD_GameLog
         * @instance
         */
        ALD_GameLog.prototype.CreateTime = "";

        /**
         * ALD_GameLog OrderID.
         * @member {number|Long} OrderID
         * @memberof netproto.ALD_GameLog
         * @instance
         */
        ALD_GameLog.prototype.OrderID = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ALD_GameLog BetMoney.
         * @member {number|Long} BetMoney
         * @memberof netproto.ALD_GameLog
         * @instance
         */
        ALD_GameLog.prototype.BetMoney = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ALD_GameLog Profit.
         * @member {number|Long} Profit
         * @memberof netproto.ALD_GameLog
         * @instance
         */
        ALD_GameLog.prototype.Profit = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new ALD_GameLog instance using the specified properties.
         * @function create
         * @memberof netproto.ALD_GameLog
         * @static
         * @param {netproto.IALD_GameLog=} [properties] Properties to set
         * @returns {netproto.ALD_GameLog} ALD_GameLog instance
         */
        ALD_GameLog.create = function create(properties) {
            return new ALD_GameLog(properties);
        };

        /**
         * Encodes the specified ALD_GameLog message. Does not implicitly {@link netproto.ALD_GameLog.verify|verify} messages.
         * @function encode
         * @memberof netproto.ALD_GameLog
         * @static
         * @param {netproto.IALD_GameLog} message ALD_GameLog message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ALD_GameLog.encode = function encode(message, writer) {
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
         * Encodes the specified ALD_GameLog message, length delimited. Does not implicitly {@link netproto.ALD_GameLog.verify|verify} messages.
         * @function encodeDelimited
         * @memberof netproto.ALD_GameLog
         * @static
         * @param {netproto.IALD_GameLog} message ALD_GameLog message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ALD_GameLog.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ALD_GameLog message from the specified reader or buffer.
         * @function decode
         * @memberof netproto.ALD_GameLog
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {netproto.ALD_GameLog} ALD_GameLog
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ALD_GameLog.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.netproto.ALD_GameLog();
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
         * Decodes a ALD_GameLog message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof netproto.ALD_GameLog
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {netproto.ALD_GameLog} ALD_GameLog
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ALD_GameLog.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ALD_GameLog message.
         * @function verify
         * @memberof netproto.ALD_GameLog
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ALD_GameLog.verify = function verify(message) {
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
         * Creates a ALD_GameLog message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof netproto.ALD_GameLog
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {netproto.ALD_GameLog} ALD_GameLog
         */
        ALD_GameLog.fromObject = function fromObject(object) {
            if (object instanceof $root.netproto.ALD_GameLog)
                return object;
            var message = new $root.netproto.ALD_GameLog();
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
         * Creates a plain object from a ALD_GameLog message. Also converts values to other types if specified.
         * @function toObject
         * @memberof netproto.ALD_GameLog
         * @static
         * @param {netproto.ALD_GameLog} message ALD_GameLog
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ALD_GameLog.toObject = function toObject(message, options) {
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
         * Converts this ALD_GameLog to JSON.
         * @function toJSON
         * @memberof netproto.ALD_GameLog
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ALD_GameLog.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ALD_GameLog;
    })();

    netproto.ALD_FreeGameInfo = (function() {

        /**
         * Properties of a ALD_FreeGameInfo.
         * @memberof netproto
         * @interface IALD_FreeGameInfo
         * @property {number|null} [ID] ALD_FreeGameInfo ID
         * @property {number|null} [Count] ALD_FreeGameInfo Count
         * @property {Array.<netproto.IALD_ReelSetting>|null} [ReelSetting] ALD_FreeGameInfo ReelSetting
         */

        /**
         * Constructs a new ALD_FreeGameInfo.
         * @memberof netproto
         * @classdesc Represents a ALD_FreeGameInfo.
         * @implements IALD_FreeGameInfo
         * @constructor
         * @param {netproto.IALD_FreeGameInfo=} [properties] Properties to set
         */
        function ALD_FreeGameInfo(properties) {
            this.ReelSetting = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ALD_FreeGameInfo ID.
         * @member {number} ID
         * @memberof netproto.ALD_FreeGameInfo
         * @instance
         */
        ALD_FreeGameInfo.prototype.ID = 0;

        /**
         * ALD_FreeGameInfo Count.
         * @member {number} Count
         * @memberof netproto.ALD_FreeGameInfo
         * @instance
         */
        ALD_FreeGameInfo.prototype.Count = 0;

        /**
         * ALD_FreeGameInfo ReelSetting.
         * @member {Array.<netproto.IALD_ReelSetting>} ReelSetting
         * @memberof netproto.ALD_FreeGameInfo
         * @instance
         */
        ALD_FreeGameInfo.prototype.ReelSetting = $util.emptyArray;

        /**
         * Creates a new ALD_FreeGameInfo instance using the specified properties.
         * @function create
         * @memberof netproto.ALD_FreeGameInfo
         * @static
         * @param {netproto.IALD_FreeGameInfo=} [properties] Properties to set
         * @returns {netproto.ALD_FreeGameInfo} ALD_FreeGameInfo instance
         */
        ALD_FreeGameInfo.create = function create(properties) {
            return new ALD_FreeGameInfo(properties);
        };

        /**
         * Encodes the specified ALD_FreeGameInfo message. Does not implicitly {@link netproto.ALD_FreeGameInfo.verify|verify} messages.
         * @function encode
         * @memberof netproto.ALD_FreeGameInfo
         * @static
         * @param {netproto.IALD_FreeGameInfo} message ALD_FreeGameInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ALD_FreeGameInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.ID != null && message.hasOwnProperty("ID"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.ID);
            if (message.Count != null && message.hasOwnProperty("Count"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.Count);
            if (message.ReelSetting != null && message.ReelSetting.length)
                for (var i = 0; i < message.ReelSetting.length; ++i)
                    $root.netproto.ALD_ReelSetting.encode(message.ReelSetting[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified ALD_FreeGameInfo message, length delimited. Does not implicitly {@link netproto.ALD_FreeGameInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof netproto.ALD_FreeGameInfo
         * @static
         * @param {netproto.IALD_FreeGameInfo} message ALD_FreeGameInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ALD_FreeGameInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ALD_FreeGameInfo message from the specified reader or buffer.
         * @function decode
         * @memberof netproto.ALD_FreeGameInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {netproto.ALD_FreeGameInfo} ALD_FreeGameInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ALD_FreeGameInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.netproto.ALD_FreeGameInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.ID = reader.int32();
                    break;
                case 2:
                    message.Count = reader.int32();
                    break;
                case 3:
                    if (!(message.ReelSetting && message.ReelSetting.length))
                        message.ReelSetting = [];
                    message.ReelSetting.push($root.netproto.ALD_ReelSetting.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ALD_FreeGameInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof netproto.ALD_FreeGameInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {netproto.ALD_FreeGameInfo} ALD_FreeGameInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ALD_FreeGameInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ALD_FreeGameInfo message.
         * @function verify
         * @memberof netproto.ALD_FreeGameInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ALD_FreeGameInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.ID != null && message.hasOwnProperty("ID"))
                if (!$util.isInteger(message.ID))
                    return "ID: integer expected";
            if (message.Count != null && message.hasOwnProperty("Count"))
                if (!$util.isInteger(message.Count))
                    return "Count: integer expected";
            if (message.ReelSetting != null && message.hasOwnProperty("ReelSetting")) {
                if (!Array.isArray(message.ReelSetting))
                    return "ReelSetting: array expected";
                for (var i = 0; i < message.ReelSetting.length; ++i) {
                    var error = $root.netproto.ALD_ReelSetting.verify(message.ReelSetting[i]);
                    if (error)
                        return "ReelSetting." + error;
                }
            }
            return null;
        };

        /**
         * Creates a ALD_FreeGameInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof netproto.ALD_FreeGameInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {netproto.ALD_FreeGameInfo} ALD_FreeGameInfo
         */
        ALD_FreeGameInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.netproto.ALD_FreeGameInfo)
                return object;
            var message = new $root.netproto.ALD_FreeGameInfo();
            if (object.ID != null)
                message.ID = object.ID | 0;
            if (object.Count != null)
                message.Count = object.Count | 0;
            if (object.ReelSetting) {
                if (!Array.isArray(object.ReelSetting))
                    throw TypeError(".netproto.ALD_FreeGameInfo.ReelSetting: array expected");
                message.ReelSetting = [];
                for (var i = 0; i < object.ReelSetting.length; ++i) {
                    if (typeof object.ReelSetting[i] !== "object")
                        throw TypeError(".netproto.ALD_FreeGameInfo.ReelSetting: object expected");
                    message.ReelSetting[i] = $root.netproto.ALD_ReelSetting.fromObject(object.ReelSetting[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a ALD_FreeGameInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof netproto.ALD_FreeGameInfo
         * @static
         * @param {netproto.ALD_FreeGameInfo} message ALD_FreeGameInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ALD_FreeGameInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.ReelSetting = [];
            if (options.defaults) {
                object.ID = 0;
                object.Count = 0;
            }
            if (message.ID != null && message.hasOwnProperty("ID"))
                object.ID = message.ID;
            if (message.Count != null && message.hasOwnProperty("Count"))
                object.Count = message.Count;
            if (message.ReelSetting && message.ReelSetting.length) {
                object.ReelSetting = [];
                for (var j = 0; j < message.ReelSetting.length; ++j)
                    object.ReelSetting[j] = $root.netproto.ALD_ReelSetting.toObject(message.ReelSetting[j], options);
            }
            return object;
        };

        /**
         * Converts this ALD_FreeGameInfo to JSON.
         * @function toJSON
         * @memberof netproto.ALD_FreeGameInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ALD_FreeGameInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ALD_FreeGameInfo;
    })();

    netproto.ALD_BonusGameRecord = (function() {

        /**
         * Properties of a ALD_BonusGameRecord.
         * @memberof netproto
         * @interface IALD_BonusGameRecord
         * @property {number|null} [ID] ALD_BonusGameRecord ID
         * @property {number|null} [Location] ALD_BonusGameRecord Location
         * @property {number|Long|null} [RewardValue] ALD_BonusGameRecord RewardValue
         */

        /**
         * Constructs a new ALD_BonusGameRecord.
         * @memberof netproto
         * @classdesc Represents a ALD_BonusGameRecord.
         * @implements IALD_BonusGameRecord
         * @constructor
         * @param {netproto.IALD_BonusGameRecord=} [properties] Properties to set
         */
        function ALD_BonusGameRecord(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ALD_BonusGameRecord ID.
         * @member {number} ID
         * @memberof netproto.ALD_BonusGameRecord
         * @instance
         */
        ALD_BonusGameRecord.prototype.ID = 0;

        /**
         * ALD_BonusGameRecord Location.
         * @member {number} Location
         * @memberof netproto.ALD_BonusGameRecord
         * @instance
         */
        ALD_BonusGameRecord.prototype.Location = 0;

        /**
         * ALD_BonusGameRecord RewardValue.
         * @member {number|Long} RewardValue
         * @memberof netproto.ALD_BonusGameRecord
         * @instance
         */
        ALD_BonusGameRecord.prototype.RewardValue = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new ALD_BonusGameRecord instance using the specified properties.
         * @function create
         * @memberof netproto.ALD_BonusGameRecord
         * @static
         * @param {netproto.IALD_BonusGameRecord=} [properties] Properties to set
         * @returns {netproto.ALD_BonusGameRecord} ALD_BonusGameRecord instance
         */
        ALD_BonusGameRecord.create = function create(properties) {
            return new ALD_BonusGameRecord(properties);
        };

        /**
         * Encodes the specified ALD_BonusGameRecord message. Does not implicitly {@link netproto.ALD_BonusGameRecord.verify|verify} messages.
         * @function encode
         * @memberof netproto.ALD_BonusGameRecord
         * @static
         * @param {netproto.IALD_BonusGameRecord} message ALD_BonusGameRecord message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ALD_BonusGameRecord.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.ID != null && message.hasOwnProperty("ID"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.ID);
            if (message.Location != null && message.hasOwnProperty("Location"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.Location);
            if (message.RewardValue != null && message.hasOwnProperty("RewardValue"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.RewardValue);
            return writer;
        };

        /**
         * Encodes the specified ALD_BonusGameRecord message, length delimited. Does not implicitly {@link netproto.ALD_BonusGameRecord.verify|verify} messages.
         * @function encodeDelimited
         * @memberof netproto.ALD_BonusGameRecord
         * @static
         * @param {netproto.IALD_BonusGameRecord} message ALD_BonusGameRecord message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ALD_BonusGameRecord.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ALD_BonusGameRecord message from the specified reader or buffer.
         * @function decode
         * @memberof netproto.ALD_BonusGameRecord
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {netproto.ALD_BonusGameRecord} ALD_BonusGameRecord
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ALD_BonusGameRecord.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.netproto.ALD_BonusGameRecord();
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
                    message.RewardValue = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ALD_BonusGameRecord message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof netproto.ALD_BonusGameRecord
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {netproto.ALD_BonusGameRecord} ALD_BonusGameRecord
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ALD_BonusGameRecord.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ALD_BonusGameRecord message.
         * @function verify
         * @memberof netproto.ALD_BonusGameRecord
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ALD_BonusGameRecord.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.ID != null && message.hasOwnProperty("ID"))
                if (!$util.isInteger(message.ID))
                    return "ID: integer expected";
            if (message.Location != null && message.hasOwnProperty("Location"))
                if (!$util.isInteger(message.Location))
                    return "Location: integer expected";
            if (message.RewardValue != null && message.hasOwnProperty("RewardValue"))
                if (!$util.isInteger(message.RewardValue) && !(message.RewardValue && $util.isInteger(message.RewardValue.low) && $util.isInteger(message.RewardValue.high)))
                    return "RewardValue: integer|Long expected";
            return null;
        };

        /**
         * Creates a ALD_BonusGameRecord message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof netproto.ALD_BonusGameRecord
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {netproto.ALD_BonusGameRecord} ALD_BonusGameRecord
         */
        ALD_BonusGameRecord.fromObject = function fromObject(object) {
            if (object instanceof $root.netproto.ALD_BonusGameRecord)
                return object;
            var message = new $root.netproto.ALD_BonusGameRecord();
            if (object.ID != null)
                message.ID = object.ID | 0;
            if (object.Location != null)
                message.Location = object.Location | 0;
            if (object.RewardValue != null)
                if ($util.Long)
                    (message.RewardValue = $util.Long.fromValue(object.RewardValue)).unsigned = false;
                else if (typeof object.RewardValue === "string")
                    message.RewardValue = parseInt(object.RewardValue, 10);
                else if (typeof object.RewardValue === "number")
                    message.RewardValue = object.RewardValue;
                else if (typeof object.RewardValue === "object")
                    message.RewardValue = new $util.LongBits(object.RewardValue.low >>> 0, object.RewardValue.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a ALD_BonusGameRecord message. Also converts values to other types if specified.
         * @function toObject
         * @memberof netproto.ALD_BonusGameRecord
         * @static
         * @param {netproto.ALD_BonusGameRecord} message ALD_BonusGameRecord
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ALD_BonusGameRecord.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.ID = 0;
                object.Location = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.RewardValue = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.RewardValue = options.longs === String ? "0" : 0;
            }
            if (message.ID != null && message.hasOwnProperty("ID"))
                object.ID = message.ID;
            if (message.Location != null && message.hasOwnProperty("Location"))
                object.Location = message.Location;
            if (message.RewardValue != null && message.hasOwnProperty("RewardValue"))
                if (typeof message.RewardValue === "number")
                    object.RewardValue = options.longs === String ? String(message.RewardValue) : message.RewardValue;
                else
                    object.RewardValue = options.longs === String ? $util.Long.prototype.toString.call(message.RewardValue) : options.longs === Number ? new $util.LongBits(message.RewardValue.low >>> 0, message.RewardValue.high >>> 0).toNumber() : message.RewardValue;
            return object;
        };

        /**
         * Converts this ALD_BonusGameRecord to JSON.
         * @function toJSON
         * @memberof netproto.ALD_BonusGameRecord
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ALD_BonusGameRecord.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ALD_BonusGameRecord;
    })();

    netproto.ALD_JackpotInfo = (function() {

        /**
         * Properties of a ALD_JackpotInfo.
         * @memberof netproto
         * @interface IALD_JackpotInfo
         * @property {number|Long|null} [Money] ALD_JackpotInfo Money
         * @property {string|null} [Name] ALD_JackpotInfo Name
         * @property {number|null} [ID] ALD_JackpotInfo ID
         */

        /**
         * Constructs a new ALD_JackpotInfo.
         * @memberof netproto
         * @classdesc Represents a ALD_JackpotInfo.
         * @implements IALD_JackpotInfo
         * @constructor
         * @param {netproto.IALD_JackpotInfo=} [properties] Properties to set
         */
        function ALD_JackpotInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ALD_JackpotInfo Money.
         * @member {number|Long} Money
         * @memberof netproto.ALD_JackpotInfo
         * @instance
         */
        ALD_JackpotInfo.prototype.Money = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ALD_JackpotInfo Name.
         * @member {string} Name
         * @memberof netproto.ALD_JackpotInfo
         * @instance
         */
        ALD_JackpotInfo.prototype.Name = "";

        /**
         * ALD_JackpotInfo ID.
         * @member {number} ID
         * @memberof netproto.ALD_JackpotInfo
         * @instance
         */
        ALD_JackpotInfo.prototype.ID = 0;

        /**
         * Creates a new ALD_JackpotInfo instance using the specified properties.
         * @function create
         * @memberof netproto.ALD_JackpotInfo
         * @static
         * @param {netproto.IALD_JackpotInfo=} [properties] Properties to set
         * @returns {netproto.ALD_JackpotInfo} ALD_JackpotInfo instance
         */
        ALD_JackpotInfo.create = function create(properties) {
            return new ALD_JackpotInfo(properties);
        };

        /**
         * Encodes the specified ALD_JackpotInfo message. Does not implicitly {@link netproto.ALD_JackpotInfo.verify|verify} messages.
         * @function encode
         * @memberof netproto.ALD_JackpotInfo
         * @static
         * @param {netproto.IALD_JackpotInfo} message ALD_JackpotInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ALD_JackpotInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Money != null && message.hasOwnProperty("Money"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.Money);
            if (message.Name != null && message.hasOwnProperty("Name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.Name);
            if (message.ID != null && message.hasOwnProperty("ID"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.ID);
            return writer;
        };

        /**
         * Encodes the specified ALD_JackpotInfo message, length delimited. Does not implicitly {@link netproto.ALD_JackpotInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof netproto.ALD_JackpotInfo
         * @static
         * @param {netproto.IALD_JackpotInfo} message ALD_JackpotInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ALD_JackpotInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ALD_JackpotInfo message from the specified reader or buffer.
         * @function decode
         * @memberof netproto.ALD_JackpotInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {netproto.ALD_JackpotInfo} ALD_JackpotInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ALD_JackpotInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.netproto.ALD_JackpotInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Money = reader.int64();
                    break;
                case 2:
                    message.Name = reader.string();
                    break;
                case 3:
                    message.ID = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ALD_JackpotInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof netproto.ALD_JackpotInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {netproto.ALD_JackpotInfo} ALD_JackpotInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ALD_JackpotInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ALD_JackpotInfo message.
         * @function verify
         * @memberof netproto.ALD_JackpotInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ALD_JackpotInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Money != null && message.hasOwnProperty("Money"))
                if (!$util.isInteger(message.Money) && !(message.Money && $util.isInteger(message.Money.low) && $util.isInteger(message.Money.high)))
                    return "Money: integer|Long expected";
            if (message.Name != null && message.hasOwnProperty("Name"))
                if (!$util.isString(message.Name))
                    return "Name: string expected";
            if (message.ID != null && message.hasOwnProperty("ID"))
                if (!$util.isInteger(message.ID))
                    return "ID: integer expected";
            return null;
        };

        /**
         * Creates a ALD_JackpotInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof netproto.ALD_JackpotInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {netproto.ALD_JackpotInfo} ALD_JackpotInfo
         */
        ALD_JackpotInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.netproto.ALD_JackpotInfo)
                return object;
            var message = new $root.netproto.ALD_JackpotInfo();
            if (object.Money != null)
                if ($util.Long)
                    (message.Money = $util.Long.fromValue(object.Money)).unsigned = false;
                else if (typeof object.Money === "string")
                    message.Money = parseInt(object.Money, 10);
                else if (typeof object.Money === "number")
                    message.Money = object.Money;
                else if (typeof object.Money === "object")
                    message.Money = new $util.LongBits(object.Money.low >>> 0, object.Money.high >>> 0).toNumber();
            if (object.Name != null)
                message.Name = String(object.Name);
            if (object.ID != null)
                message.ID = object.ID | 0;
            return message;
        };

        /**
         * Creates a plain object from a ALD_JackpotInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof netproto.ALD_JackpotInfo
         * @static
         * @param {netproto.ALD_JackpotInfo} message ALD_JackpotInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ALD_JackpotInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.Money = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.Money = options.longs === String ? "0" : 0;
                object.Name = "";
                object.ID = 0;
            }
            if (message.Money != null && message.hasOwnProperty("Money"))
                if (typeof message.Money === "number")
                    object.Money = options.longs === String ? String(message.Money) : message.Money;
                else
                    object.Money = options.longs === String ? $util.Long.prototype.toString.call(message.Money) : options.longs === Number ? new $util.LongBits(message.Money.low >>> 0, message.Money.high >>> 0).toNumber() : message.Money;
            if (message.Name != null && message.hasOwnProperty("Name"))
                object.Name = message.Name;
            if (message.ID != null && message.hasOwnProperty("ID"))
                object.ID = message.ID;
            return object;
        };

        /**
         * Converts this ALD_JackpotInfo to JSON.
         * @function toJSON
         * @memberof netproto.ALD_JackpotInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ALD_JackpotInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ALD_JackpotInfo;
    })();

    netproto.ALD_UnitPrefix = (function() {

        /**
         * Properties of a ALD_UnitPrefix.
         * @memberof netproto
         * @interface IALD_UnitPrefix
         * @property {string|null} [Name] ALD_UnitPrefix Name
         * @property {number|Long|null} [Multiple] ALD_UnitPrefix Multiple
         */

        /**
         * Constructs a new ALD_UnitPrefix.
         * @memberof netproto
         * @classdesc Represents a ALD_UnitPrefix.
         * @implements IALD_UnitPrefix
         * @constructor
         * @param {netproto.IALD_UnitPrefix=} [properties] Properties to set
         */
        function ALD_UnitPrefix(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ALD_UnitPrefix Name.
         * @member {string} Name
         * @memberof netproto.ALD_UnitPrefix
         * @instance
         */
        ALD_UnitPrefix.prototype.Name = "";

        /**
         * ALD_UnitPrefix Multiple.
         * @member {number|Long} Multiple
         * @memberof netproto.ALD_UnitPrefix
         * @instance
         */
        ALD_UnitPrefix.prototype.Multiple = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new ALD_UnitPrefix instance using the specified properties.
         * @function create
         * @memberof netproto.ALD_UnitPrefix
         * @static
         * @param {netproto.IALD_UnitPrefix=} [properties] Properties to set
         * @returns {netproto.ALD_UnitPrefix} ALD_UnitPrefix instance
         */
        ALD_UnitPrefix.create = function create(properties) {
            return new ALD_UnitPrefix(properties);
        };

        /**
         * Encodes the specified ALD_UnitPrefix message. Does not implicitly {@link netproto.ALD_UnitPrefix.verify|verify} messages.
         * @function encode
         * @memberof netproto.ALD_UnitPrefix
         * @static
         * @param {netproto.IALD_UnitPrefix} message ALD_UnitPrefix message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ALD_UnitPrefix.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Name != null && message.hasOwnProperty("Name"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.Name);
            if (message.Multiple != null && message.hasOwnProperty("Multiple"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.Multiple);
            return writer;
        };

        /**
         * Encodes the specified ALD_UnitPrefix message, length delimited. Does not implicitly {@link netproto.ALD_UnitPrefix.verify|verify} messages.
         * @function encodeDelimited
         * @memberof netproto.ALD_UnitPrefix
         * @static
         * @param {netproto.IALD_UnitPrefix} message ALD_UnitPrefix message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ALD_UnitPrefix.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ALD_UnitPrefix message from the specified reader or buffer.
         * @function decode
         * @memberof netproto.ALD_UnitPrefix
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {netproto.ALD_UnitPrefix} ALD_UnitPrefix
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ALD_UnitPrefix.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.netproto.ALD_UnitPrefix();
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
         * Decodes a ALD_UnitPrefix message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof netproto.ALD_UnitPrefix
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {netproto.ALD_UnitPrefix} ALD_UnitPrefix
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ALD_UnitPrefix.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ALD_UnitPrefix message.
         * @function verify
         * @memberof netproto.ALD_UnitPrefix
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ALD_UnitPrefix.verify = function verify(message) {
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
         * Creates a ALD_UnitPrefix message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof netproto.ALD_UnitPrefix
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {netproto.ALD_UnitPrefix} ALD_UnitPrefix
         */
        ALD_UnitPrefix.fromObject = function fromObject(object) {
            if (object instanceof $root.netproto.ALD_UnitPrefix)
                return object;
            var message = new $root.netproto.ALD_UnitPrefix();
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
         * Creates a plain object from a ALD_UnitPrefix message. Also converts values to other types if specified.
         * @function toObject
         * @memberof netproto.ALD_UnitPrefix
         * @static
         * @param {netproto.ALD_UnitPrefix} message ALD_UnitPrefix
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ALD_UnitPrefix.toObject = function toObject(message, options) {
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
         * Converts this ALD_UnitPrefix to JSON.
         * @function toJSON
         * @memberof netproto.ALD_UnitPrefix
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ALD_UnitPrefix.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ALD_UnitPrefix;
    })();

    netproto.ALD_Description = (function() {

        /**
         * Properties of a ALD_Description.
         * @memberof netproto
         * @interface IALD_Description
         * @property {string|null} [Name] ALD_Description Name
         * @property {string|null} [Desc] ALD_Description Desc
         * @property {string|null} [Title] ALD_Description Title
         */

        /**
         * Constructs a new ALD_Description.
         * @memberof netproto
         * @classdesc Represents a ALD_Description.
         * @implements IALD_Description
         * @constructor
         * @param {netproto.IALD_Description=} [properties] Properties to set
         */
        function ALD_Description(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ALD_Description Name.
         * @member {string} Name
         * @memberof netproto.ALD_Description
         * @instance
         */
        ALD_Description.prototype.Name = "";

        /**
         * ALD_Description Desc.
         * @member {string} Desc
         * @memberof netproto.ALD_Description
         * @instance
         */
        ALD_Description.prototype.Desc = "";

        /**
         * ALD_Description Title.
         * @member {string} Title
         * @memberof netproto.ALD_Description
         * @instance
         */
        ALD_Description.prototype.Title = "";

        /**
         * Creates a new ALD_Description instance using the specified properties.
         * @function create
         * @memberof netproto.ALD_Description
         * @static
         * @param {netproto.IALD_Description=} [properties] Properties to set
         * @returns {netproto.ALD_Description} ALD_Description instance
         */
        ALD_Description.create = function create(properties) {
            return new ALD_Description(properties);
        };

        /**
         * Encodes the specified ALD_Description message. Does not implicitly {@link netproto.ALD_Description.verify|verify} messages.
         * @function encode
         * @memberof netproto.ALD_Description
         * @static
         * @param {netproto.IALD_Description} message ALD_Description message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ALD_Description.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Name != null && message.hasOwnProperty("Name"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.Name);
            if (message.Desc != null && message.hasOwnProperty("Desc"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.Desc);
            if (message.Title != null && message.hasOwnProperty("Title"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.Title);
            return writer;
        };

        /**
         * Encodes the specified ALD_Description message, length delimited. Does not implicitly {@link netproto.ALD_Description.verify|verify} messages.
         * @function encodeDelimited
         * @memberof netproto.ALD_Description
         * @static
         * @param {netproto.IALD_Description} message ALD_Description message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ALD_Description.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ALD_Description message from the specified reader or buffer.
         * @function decode
         * @memberof netproto.ALD_Description
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {netproto.ALD_Description} ALD_Description
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ALD_Description.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.netproto.ALD_Description();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Name = reader.string();
                    break;
                case 2:
                    message.Desc = reader.string();
                    break;
                case 3:
                    message.Title = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ALD_Description message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof netproto.ALD_Description
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {netproto.ALD_Description} ALD_Description
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ALD_Description.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ALD_Description message.
         * @function verify
         * @memberof netproto.ALD_Description
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ALD_Description.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Name != null && message.hasOwnProperty("Name"))
                if (!$util.isString(message.Name))
                    return "Name: string expected";
            if (message.Desc != null && message.hasOwnProperty("Desc"))
                if (!$util.isString(message.Desc))
                    return "Desc: string expected";
            if (message.Title != null && message.hasOwnProperty("Title"))
                if (!$util.isString(message.Title))
                    return "Title: string expected";
            return null;
        };

        /**
         * Creates a ALD_Description message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof netproto.ALD_Description
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {netproto.ALD_Description} ALD_Description
         */
        ALD_Description.fromObject = function fromObject(object) {
            if (object instanceof $root.netproto.ALD_Description)
                return object;
            var message = new $root.netproto.ALD_Description();
            if (object.Name != null)
                message.Name = String(object.Name);
            if (object.Desc != null)
                message.Desc = String(object.Desc);
            if (object.Title != null)
                message.Title = String(object.Title);
            return message;
        };

        /**
         * Creates a plain object from a ALD_Description message. Also converts values to other types if specified.
         * @function toObject
         * @memberof netproto.ALD_Description
         * @static
         * @param {netproto.ALD_Description} message ALD_Description
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ALD_Description.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.Name = "";
                object.Desc = "";
                object.Title = "";
            }
            if (message.Name != null && message.hasOwnProperty("Name"))
                object.Name = message.Name;
            if (message.Desc != null && message.hasOwnProperty("Desc"))
                object.Desc = message.Desc;
            if (message.Title != null && message.hasOwnProperty("Title"))
                object.Title = message.Title;
            return object;
        };

        /**
         * Converts this ALD_Description to JSON.
         * @function toJSON
         * @memberof netproto.ALD_Description
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ALD_Description.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ALD_Description;
    })();

    netproto.ALD_GoldBallInfo = (function() {

        /**
         * Properties of a ALD_GoldBallInfo.
         * @memberof netproto
         * @interface IALD_GoldBallInfo
         * @property {string|null} [Symbol] ALD_GoldBallInfo Symbol
         * @property {string|null} [Type] ALD_GoldBallInfo Type
         * @property {number|Long|null} [Value] ALD_GoldBallInfo Value
         */

        /**
         * Constructs a new ALD_GoldBallInfo.
         * @memberof netproto
         * @classdesc Represents a ALD_GoldBallInfo.
         * @implements IALD_GoldBallInfo
         * @constructor
         * @param {netproto.IALD_GoldBallInfo=} [properties] Properties to set
         */
        function ALD_GoldBallInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ALD_GoldBallInfo Symbol.
         * @member {string} Symbol
         * @memberof netproto.ALD_GoldBallInfo
         * @instance
         */
        ALD_GoldBallInfo.prototype.Symbol = "";

        /**
         * ALD_GoldBallInfo Type.
         * @member {string} Type
         * @memberof netproto.ALD_GoldBallInfo
         * @instance
         */
        ALD_GoldBallInfo.prototype.Type = "";

        /**
         * ALD_GoldBallInfo Value.
         * @member {number|Long} Value
         * @memberof netproto.ALD_GoldBallInfo
         * @instance
         */
        ALD_GoldBallInfo.prototype.Value = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new ALD_GoldBallInfo instance using the specified properties.
         * @function create
         * @memberof netproto.ALD_GoldBallInfo
         * @static
         * @param {netproto.IALD_GoldBallInfo=} [properties] Properties to set
         * @returns {netproto.ALD_GoldBallInfo} ALD_GoldBallInfo instance
         */
        ALD_GoldBallInfo.create = function create(properties) {
            return new ALD_GoldBallInfo(properties);
        };

        /**
         * Encodes the specified ALD_GoldBallInfo message. Does not implicitly {@link netproto.ALD_GoldBallInfo.verify|verify} messages.
         * @function encode
         * @memberof netproto.ALD_GoldBallInfo
         * @static
         * @param {netproto.IALD_GoldBallInfo} message ALD_GoldBallInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ALD_GoldBallInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Symbol != null && message.hasOwnProperty("Symbol"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.Symbol);
            if (message.Type != null && message.hasOwnProperty("Type"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.Type);
            if (message.Value != null && message.hasOwnProperty("Value"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.Value);
            return writer;
        };

        /**
         * Encodes the specified ALD_GoldBallInfo message, length delimited. Does not implicitly {@link netproto.ALD_GoldBallInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof netproto.ALD_GoldBallInfo
         * @static
         * @param {netproto.IALD_GoldBallInfo} message ALD_GoldBallInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ALD_GoldBallInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ALD_GoldBallInfo message from the specified reader or buffer.
         * @function decode
         * @memberof netproto.ALD_GoldBallInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {netproto.ALD_GoldBallInfo} ALD_GoldBallInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ALD_GoldBallInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.netproto.ALD_GoldBallInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Symbol = reader.string();
                    break;
                case 2:
                    message.Type = reader.string();
                    break;
                case 3:
                    message.Value = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ALD_GoldBallInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof netproto.ALD_GoldBallInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {netproto.ALD_GoldBallInfo} ALD_GoldBallInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ALD_GoldBallInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ALD_GoldBallInfo message.
         * @function verify
         * @memberof netproto.ALD_GoldBallInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ALD_GoldBallInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Symbol != null && message.hasOwnProperty("Symbol"))
                if (!$util.isString(message.Symbol))
                    return "Symbol: string expected";
            if (message.Type != null && message.hasOwnProperty("Type"))
                if (!$util.isString(message.Type))
                    return "Type: string expected";
            if (message.Value != null && message.hasOwnProperty("Value"))
                if (!$util.isInteger(message.Value) && !(message.Value && $util.isInteger(message.Value.low) && $util.isInteger(message.Value.high)))
                    return "Value: integer|Long expected";
            return null;
        };

        /**
         * Creates a ALD_GoldBallInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof netproto.ALD_GoldBallInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {netproto.ALD_GoldBallInfo} ALD_GoldBallInfo
         */
        ALD_GoldBallInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.netproto.ALD_GoldBallInfo)
                return object;
            var message = new $root.netproto.ALD_GoldBallInfo();
            if (object.Symbol != null)
                message.Symbol = String(object.Symbol);
            if (object.Type != null)
                message.Type = String(object.Type);
            if (object.Value != null)
                if ($util.Long)
                    (message.Value = $util.Long.fromValue(object.Value)).unsigned = false;
                else if (typeof object.Value === "string")
                    message.Value = parseInt(object.Value, 10);
                else if (typeof object.Value === "number")
                    message.Value = object.Value;
                else if (typeof object.Value === "object")
                    message.Value = new $util.LongBits(object.Value.low >>> 0, object.Value.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a ALD_GoldBallInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof netproto.ALD_GoldBallInfo
         * @static
         * @param {netproto.ALD_GoldBallInfo} message ALD_GoldBallInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ALD_GoldBallInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.Symbol = "";
                object.Type = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.Value = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.Value = options.longs === String ? "0" : 0;
            }
            if (message.Symbol != null && message.hasOwnProperty("Symbol"))
                object.Symbol = message.Symbol;
            if (message.Type != null && message.hasOwnProperty("Type"))
                object.Type = message.Type;
            if (message.Value != null && message.hasOwnProperty("Value"))
                if (typeof message.Value === "number")
                    object.Value = options.longs === String ? String(message.Value) : message.Value;
                else
                    object.Value = options.longs === String ? $util.Long.prototype.toString.call(message.Value) : options.longs === Number ? new $util.LongBits(message.Value.low >>> 0, message.Value.high >>> 0).toNumber() : message.Value;
            return object;
        };

        /**
         * Converts this ALD_GoldBallInfo to JSON.
         * @function toJSON
         * @memberof netproto.ALD_GoldBallInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ALD_GoldBallInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ALD_GoldBallInfo;
    })();

    netproto.ALD_LightningPayout = (function() {

        /**
         * Properties of a ALD_LightningPayout.
         * @memberof netproto
         * @interface IALD_LightningPayout
         * @property {string|null} [Type] ALD_LightningPayout Type
         * @property {number|Long|null} [WinMoney] ALD_LightningPayout WinMoney
         * @property {netproto.IALD_ReelPosition|null} [Position] ALD_LightningPayout Position
         * @property {string|null} [JackpotType] ALD_LightningPayout JackpotType
         */

        /**
         * Constructs a new ALD_LightningPayout.
         * @memberof netproto
         * @classdesc Represents a ALD_LightningPayout.
         * @implements IALD_LightningPayout
         * @constructor
         * @param {netproto.IALD_LightningPayout=} [properties] Properties to set
         */
        function ALD_LightningPayout(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ALD_LightningPayout Type.
         * @member {string} Type
         * @memberof netproto.ALD_LightningPayout
         * @instance
         */
        ALD_LightningPayout.prototype.Type = "";

        /**
         * ALD_LightningPayout WinMoney.
         * @member {number|Long} WinMoney
         * @memberof netproto.ALD_LightningPayout
         * @instance
         */
        ALD_LightningPayout.prototype.WinMoney = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ALD_LightningPayout Position.
         * @member {netproto.IALD_ReelPosition|null|undefined} Position
         * @memberof netproto.ALD_LightningPayout
         * @instance
         */
        ALD_LightningPayout.prototype.Position = null;

        /**
         * ALD_LightningPayout JackpotType.
         * @member {string} JackpotType
         * @memberof netproto.ALD_LightningPayout
         * @instance
         */
        ALD_LightningPayout.prototype.JackpotType = "";

        /**
         * Creates a new ALD_LightningPayout instance using the specified properties.
         * @function create
         * @memberof netproto.ALD_LightningPayout
         * @static
         * @param {netproto.IALD_LightningPayout=} [properties] Properties to set
         * @returns {netproto.ALD_LightningPayout} ALD_LightningPayout instance
         */
        ALD_LightningPayout.create = function create(properties) {
            return new ALD_LightningPayout(properties);
        };

        /**
         * Encodes the specified ALD_LightningPayout message. Does not implicitly {@link netproto.ALD_LightningPayout.verify|verify} messages.
         * @function encode
         * @memberof netproto.ALD_LightningPayout
         * @static
         * @param {netproto.IALD_LightningPayout} message ALD_LightningPayout message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ALD_LightningPayout.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Type != null && message.hasOwnProperty("Type"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.Type);
            if (message.WinMoney != null && message.hasOwnProperty("WinMoney"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.WinMoney);
            if (message.Position != null && message.hasOwnProperty("Position"))
                $root.netproto.ALD_ReelPosition.encode(message.Position, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.JackpotType != null && message.hasOwnProperty("JackpotType"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.JackpotType);
            return writer;
        };

        /**
         * Encodes the specified ALD_LightningPayout message, length delimited. Does not implicitly {@link netproto.ALD_LightningPayout.verify|verify} messages.
         * @function encodeDelimited
         * @memberof netproto.ALD_LightningPayout
         * @static
         * @param {netproto.IALD_LightningPayout} message ALD_LightningPayout message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ALD_LightningPayout.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ALD_LightningPayout message from the specified reader or buffer.
         * @function decode
         * @memberof netproto.ALD_LightningPayout
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {netproto.ALD_LightningPayout} ALD_LightningPayout
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ALD_LightningPayout.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.netproto.ALD_LightningPayout();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Type = reader.string();
                    break;
                case 2:
                    message.WinMoney = reader.int64();
                    break;
                case 3:
                    message.Position = $root.netproto.ALD_ReelPosition.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.JackpotType = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ALD_LightningPayout message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof netproto.ALD_LightningPayout
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {netproto.ALD_LightningPayout} ALD_LightningPayout
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ALD_LightningPayout.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ALD_LightningPayout message.
         * @function verify
         * @memberof netproto.ALD_LightningPayout
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ALD_LightningPayout.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Type != null && message.hasOwnProperty("Type"))
                if (!$util.isString(message.Type))
                    return "Type: string expected";
            if (message.WinMoney != null && message.hasOwnProperty("WinMoney"))
                if (!$util.isInteger(message.WinMoney) && !(message.WinMoney && $util.isInteger(message.WinMoney.low) && $util.isInteger(message.WinMoney.high)))
                    return "WinMoney: integer|Long expected";
            if (message.Position != null && message.hasOwnProperty("Position")) {
                var error = $root.netproto.ALD_ReelPosition.verify(message.Position);
                if (error)
                    return "Position." + error;
            }
            if (message.JackpotType != null && message.hasOwnProperty("JackpotType"))
                if (!$util.isString(message.JackpotType))
                    return "JackpotType: string expected";
            return null;
        };

        /**
         * Creates a ALD_LightningPayout message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof netproto.ALD_LightningPayout
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {netproto.ALD_LightningPayout} ALD_LightningPayout
         */
        ALD_LightningPayout.fromObject = function fromObject(object) {
            if (object instanceof $root.netproto.ALD_LightningPayout)
                return object;
            var message = new $root.netproto.ALD_LightningPayout();
            if (object.Type != null)
                message.Type = String(object.Type);
            if (object.WinMoney != null)
                if ($util.Long)
                    (message.WinMoney = $util.Long.fromValue(object.WinMoney)).unsigned = false;
                else if (typeof object.WinMoney === "string")
                    message.WinMoney = parseInt(object.WinMoney, 10);
                else if (typeof object.WinMoney === "number")
                    message.WinMoney = object.WinMoney;
                else if (typeof object.WinMoney === "object")
                    message.WinMoney = new $util.LongBits(object.WinMoney.low >>> 0, object.WinMoney.high >>> 0).toNumber();
            if (object.Position != null) {
                if (typeof object.Position !== "object")
                    throw TypeError(".netproto.ALD_LightningPayout.Position: object expected");
                message.Position = $root.netproto.ALD_ReelPosition.fromObject(object.Position);
            }
            if (object.JackpotType != null)
                message.JackpotType = String(object.JackpotType);
            return message;
        };

        /**
         * Creates a plain object from a ALD_LightningPayout message. Also converts values to other types if specified.
         * @function toObject
         * @memberof netproto.ALD_LightningPayout
         * @static
         * @param {netproto.ALD_LightningPayout} message ALD_LightningPayout
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ALD_LightningPayout.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.Type = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.WinMoney = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.WinMoney = options.longs === String ? "0" : 0;
                object.Position = null;
                object.JackpotType = "";
            }
            if (message.Type != null && message.hasOwnProperty("Type"))
                object.Type = message.Type;
            if (message.WinMoney != null && message.hasOwnProperty("WinMoney"))
                if (typeof message.WinMoney === "number")
                    object.WinMoney = options.longs === String ? String(message.WinMoney) : message.WinMoney;
                else
                    object.WinMoney = options.longs === String ? $util.Long.prototype.toString.call(message.WinMoney) : options.longs === Number ? new $util.LongBits(message.WinMoney.low >>> 0, message.WinMoney.high >>> 0).toNumber() : message.WinMoney;
            if (message.Position != null && message.hasOwnProperty("Position"))
                object.Position = $root.netproto.ALD_ReelPosition.toObject(message.Position, options);
            if (message.JackpotType != null && message.hasOwnProperty("JackpotType"))
                object.JackpotType = message.JackpotType;
            return object;
        };

        /**
         * Converts this ALD_LightningPayout to JSON.
         * @function toJSON
         * @memberof netproto.ALD_LightningPayout
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ALD_LightningPayout.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ALD_LightningPayout;
    })();

    netproto.ALD_LightningLock = (function() {

        /**
         * Properties of a ALD_LightningLock.
         * @memberof netproto
         * @interface IALD_LightningLock
         * @property {number|null} [SymbolID] ALD_LightningLock SymbolID
         * @property {netproto.IALD_ReelPosition|null} [Position] ALD_LightningLock Position
         */

        /**
         * Constructs a new ALD_LightningLock.
         * @memberof netproto
         * @classdesc Represents a ALD_LightningLock.
         * @implements IALD_LightningLock
         * @constructor
         * @param {netproto.IALD_LightningLock=} [properties] Properties to set
         */
        function ALD_LightningLock(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ALD_LightningLock SymbolID.
         * @member {number} SymbolID
         * @memberof netproto.ALD_LightningLock
         * @instance
         */
        ALD_LightningLock.prototype.SymbolID = 0;

        /**
         * ALD_LightningLock Position.
         * @member {netproto.IALD_ReelPosition|null|undefined} Position
         * @memberof netproto.ALD_LightningLock
         * @instance
         */
        ALD_LightningLock.prototype.Position = null;

        /**
         * Creates a new ALD_LightningLock instance using the specified properties.
         * @function create
         * @memberof netproto.ALD_LightningLock
         * @static
         * @param {netproto.IALD_LightningLock=} [properties] Properties to set
         * @returns {netproto.ALD_LightningLock} ALD_LightningLock instance
         */
        ALD_LightningLock.create = function create(properties) {
            return new ALD_LightningLock(properties);
        };

        /**
         * Encodes the specified ALD_LightningLock message. Does not implicitly {@link netproto.ALD_LightningLock.verify|verify} messages.
         * @function encode
         * @memberof netproto.ALD_LightningLock
         * @static
         * @param {netproto.IALD_LightningLock} message ALD_LightningLock message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ALD_LightningLock.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.SymbolID != null && message.hasOwnProperty("SymbolID"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.SymbolID);
            if (message.Position != null && message.hasOwnProperty("Position"))
                $root.netproto.ALD_ReelPosition.encode(message.Position, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified ALD_LightningLock message, length delimited. Does not implicitly {@link netproto.ALD_LightningLock.verify|verify} messages.
         * @function encodeDelimited
         * @memberof netproto.ALD_LightningLock
         * @static
         * @param {netproto.IALD_LightningLock} message ALD_LightningLock message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ALD_LightningLock.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ALD_LightningLock message from the specified reader or buffer.
         * @function decode
         * @memberof netproto.ALD_LightningLock
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {netproto.ALD_LightningLock} ALD_LightningLock
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ALD_LightningLock.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.netproto.ALD_LightningLock();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.SymbolID = reader.int32();
                    break;
                case 2:
                    message.Position = $root.netproto.ALD_ReelPosition.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ALD_LightningLock message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof netproto.ALD_LightningLock
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {netproto.ALD_LightningLock} ALD_LightningLock
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ALD_LightningLock.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ALD_LightningLock message.
         * @function verify
         * @memberof netproto.ALD_LightningLock
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ALD_LightningLock.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.SymbolID != null && message.hasOwnProperty("SymbolID"))
                if (!$util.isInteger(message.SymbolID))
                    return "SymbolID: integer expected";
            if (message.Position != null && message.hasOwnProperty("Position")) {
                var error = $root.netproto.ALD_ReelPosition.verify(message.Position);
                if (error)
                    return "Position." + error;
            }
            return null;
        };

        /**
         * Creates a ALD_LightningLock message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof netproto.ALD_LightningLock
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {netproto.ALD_LightningLock} ALD_LightningLock
         */
        ALD_LightningLock.fromObject = function fromObject(object) {
            if (object instanceof $root.netproto.ALD_LightningLock)
                return object;
            var message = new $root.netproto.ALD_LightningLock();
            if (object.SymbolID != null)
                message.SymbolID = object.SymbolID | 0;
            if (object.Position != null) {
                if (typeof object.Position !== "object")
                    throw TypeError(".netproto.ALD_LightningLock.Position: object expected");
                message.Position = $root.netproto.ALD_ReelPosition.fromObject(object.Position);
            }
            return message;
        };

        /**
         * Creates a plain object from a ALD_LightningLock message. Also converts values to other types if specified.
         * @function toObject
         * @memberof netproto.ALD_LightningLock
         * @static
         * @param {netproto.ALD_LightningLock} message ALD_LightningLock
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ALD_LightningLock.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.SymbolID = 0;
                object.Position = null;
            }
            if (message.SymbolID != null && message.hasOwnProperty("SymbolID"))
                object.SymbolID = message.SymbolID;
            if (message.Position != null && message.hasOwnProperty("Position"))
                object.Position = $root.netproto.ALD_ReelPosition.toObject(message.Position, options);
            return object;
        };

        /**
         * Converts this ALD_LightningLock to JSON.
         * @function toJSON
         * @memberof netproto.ALD_LightningLock
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ALD_LightningLock.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ALD_LightningLock;
    })();

    netproto.ALD_StepGameResult = (function() {

        /**
         * Properties of a ALD_StepGameResult.
         * @memberof netproto
         * @interface IALD_StepGameResult
         * @property {Array.<netproto.IALD_ReelResult>|null} [InitResult] ALD_StepGameResult InitResult
         * @property {boolean} IsRespin ALD_StepGameResult IsRespin
         * @property {boolean} IsExpand ALD_StepGameResult IsExpand
         * @property {Array.<number>|null} [ExpandReel] ALD_StepGameResult ExpandReel
         * @property {string|null} [ExpandOrder] ALD_StepGameResult ExpandOrder
         * @property {netproto.IALD_MSG_GameResult} SlotResult ALD_StepGameResult SlotResult
         */

        /**
         * Constructs a new ALD_StepGameResult.
         * @memberof netproto
         * @classdesc Represents a ALD_StepGameResult.
         * @implements IALD_StepGameResult
         * @constructor
         * @param {netproto.IALD_StepGameResult=} [properties] Properties to set
         */
        function ALD_StepGameResult(properties) {
            this.InitResult = [];
            this.ExpandReel = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ALD_StepGameResult InitResult.
         * @member {Array.<netproto.IALD_ReelResult>} InitResult
         * @memberof netproto.ALD_StepGameResult
         * @instance
         */
        ALD_StepGameResult.prototype.InitResult = $util.emptyArray;

        /**
         * ALD_StepGameResult IsRespin.
         * @member {boolean} IsRespin
         * @memberof netproto.ALD_StepGameResult
         * @instance
         */
        ALD_StepGameResult.prototype.IsRespin = false;

        /**
         * ALD_StepGameResult IsExpand.
         * @member {boolean} IsExpand
         * @memberof netproto.ALD_StepGameResult
         * @instance
         */
        ALD_StepGameResult.prototype.IsExpand = false;

        /**
         * ALD_StepGameResult ExpandReel.
         * @member {Array.<number>} ExpandReel
         * @memberof netproto.ALD_StepGameResult
         * @instance
         */
        ALD_StepGameResult.prototype.ExpandReel = $util.emptyArray;

        /**
         * ALD_StepGameResult ExpandOrder.
         * @member {string} ExpandOrder
         * @memberof netproto.ALD_StepGameResult
         * @instance
         */
        ALD_StepGameResult.prototype.ExpandOrder = "";

        /**
         * ALD_StepGameResult SlotResult.
         * @member {netproto.IALD_MSG_GameResult} SlotResult
         * @memberof netproto.ALD_StepGameResult
         * @instance
         */
        ALD_StepGameResult.prototype.SlotResult = null;

        /**
         * Creates a new ALD_StepGameResult instance using the specified properties.
         * @function create
         * @memberof netproto.ALD_StepGameResult
         * @static
         * @param {netproto.IALD_StepGameResult=} [properties] Properties to set
         * @returns {netproto.ALD_StepGameResult} ALD_StepGameResult instance
         */
        ALD_StepGameResult.create = function create(properties) {
            return new ALD_StepGameResult(properties);
        };

        /**
         * Encodes the specified ALD_StepGameResult message. Does not implicitly {@link netproto.ALD_StepGameResult.verify|verify} messages.
         * @function encode
         * @memberof netproto.ALD_StepGameResult
         * @static
         * @param {netproto.IALD_StepGameResult} message ALD_StepGameResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ALD_StepGameResult.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.InitResult != null && message.InitResult.length)
                for (var i = 0; i < message.InitResult.length; ++i)
                    $root.netproto.ALD_ReelResult.encode(message.InitResult[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            writer.uint32(/* id 2, wireType 0 =*/16).bool(message.IsRespin);
            writer.uint32(/* id 3, wireType 0 =*/24).bool(message.IsExpand);
            if (message.ExpandReel != null && message.ExpandReel.length) {
                writer.uint32(/* id 4, wireType 2 =*/34).fork();
                for (var i = 0; i < message.ExpandReel.length; ++i)
                    writer.int32(message.ExpandReel[i]);
                writer.ldelim();
            }
            if (message.ExpandOrder != null && message.hasOwnProperty("ExpandOrder"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.ExpandOrder);
            $root.netproto.ALD_MSG_GameResult.encode(message.SlotResult, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified ALD_StepGameResult message, length delimited. Does not implicitly {@link netproto.ALD_StepGameResult.verify|verify} messages.
         * @function encodeDelimited
         * @memberof netproto.ALD_StepGameResult
         * @static
         * @param {netproto.IALD_StepGameResult} message ALD_StepGameResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ALD_StepGameResult.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ALD_StepGameResult message from the specified reader or buffer.
         * @function decode
         * @memberof netproto.ALD_StepGameResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {netproto.ALD_StepGameResult} ALD_StepGameResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ALD_StepGameResult.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.netproto.ALD_StepGameResult();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.InitResult && message.InitResult.length))
                        message.InitResult = [];
                    message.InitResult.push($root.netproto.ALD_ReelResult.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.IsRespin = reader.bool();
                    break;
                case 3:
                    message.IsExpand = reader.bool();
                    break;
                case 4:
                    if (!(message.ExpandReel && message.ExpandReel.length))
                        message.ExpandReel = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.ExpandReel.push(reader.int32());
                    } else
                        message.ExpandReel.push(reader.int32());
                    break;
                case 5:
                    message.ExpandOrder = reader.string();
                    break;
                case 6:
                    message.SlotResult = $root.netproto.ALD_MSG_GameResult.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("IsRespin"))
                throw $util.ProtocolError("missing required 'IsRespin'", { instance: message });
            if (!message.hasOwnProperty("IsExpand"))
                throw $util.ProtocolError("missing required 'IsExpand'", { instance: message });
            if (!message.hasOwnProperty("SlotResult"))
                throw $util.ProtocolError("missing required 'SlotResult'", { instance: message });
            return message;
        };

        /**
         * Decodes a ALD_StepGameResult message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof netproto.ALD_StepGameResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {netproto.ALD_StepGameResult} ALD_StepGameResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ALD_StepGameResult.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ALD_StepGameResult message.
         * @function verify
         * @memberof netproto.ALD_StepGameResult
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ALD_StepGameResult.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.InitResult != null && message.hasOwnProperty("InitResult")) {
                if (!Array.isArray(message.InitResult))
                    return "InitResult: array expected";
                for (var i = 0; i < message.InitResult.length; ++i) {
                    var error = $root.netproto.ALD_ReelResult.verify(message.InitResult[i]);
                    if (error)
                        return "InitResult." + error;
                }
            }
            if (typeof message.IsRespin !== "boolean")
                return "IsRespin: boolean expected";
            if (typeof message.IsExpand !== "boolean")
                return "IsExpand: boolean expected";
            if (message.ExpandReel != null && message.hasOwnProperty("ExpandReel")) {
                if (!Array.isArray(message.ExpandReel))
                    return "ExpandReel: array expected";
                for (var i = 0; i < message.ExpandReel.length; ++i)
                    if (!$util.isInteger(message.ExpandReel[i]))
                        return "ExpandReel: integer[] expected";
            }
            if (message.ExpandOrder != null && message.hasOwnProperty("ExpandOrder"))
                if (!$util.isString(message.ExpandOrder))
                    return "ExpandOrder: string expected";
            {
                var error = $root.netproto.ALD_MSG_GameResult.verify(message.SlotResult);
                if (error)
                    return "SlotResult." + error;
            }
            return null;
        };

        /**
         * Creates a ALD_StepGameResult message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof netproto.ALD_StepGameResult
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {netproto.ALD_StepGameResult} ALD_StepGameResult
         */
        ALD_StepGameResult.fromObject = function fromObject(object) {
            if (object instanceof $root.netproto.ALD_StepGameResult)
                return object;
            var message = new $root.netproto.ALD_StepGameResult();
            if (object.InitResult) {
                if (!Array.isArray(object.InitResult))
                    throw TypeError(".netproto.ALD_StepGameResult.InitResult: array expected");
                message.InitResult = [];
                for (var i = 0; i < object.InitResult.length; ++i) {
                    if (typeof object.InitResult[i] !== "object")
                        throw TypeError(".netproto.ALD_StepGameResult.InitResult: object expected");
                    message.InitResult[i] = $root.netproto.ALD_ReelResult.fromObject(object.InitResult[i]);
                }
            }
            if (object.IsRespin != null)
                message.IsRespin = Boolean(object.IsRespin);
            if (object.IsExpand != null)
                message.IsExpand = Boolean(object.IsExpand);
            if (object.ExpandReel) {
                if (!Array.isArray(object.ExpandReel))
                    throw TypeError(".netproto.ALD_StepGameResult.ExpandReel: array expected");
                message.ExpandReel = [];
                for (var i = 0; i < object.ExpandReel.length; ++i)
                    message.ExpandReel[i] = object.ExpandReel[i] | 0;
            }
            if (object.ExpandOrder != null)
                message.ExpandOrder = String(object.ExpandOrder);
            if (object.SlotResult != null) {
                if (typeof object.SlotResult !== "object")
                    throw TypeError(".netproto.ALD_StepGameResult.SlotResult: object expected");
                message.SlotResult = $root.netproto.ALD_MSG_GameResult.fromObject(object.SlotResult);
            }
            return message;
        };

        /**
         * Creates a plain object from a ALD_StepGameResult message. Also converts values to other types if specified.
         * @function toObject
         * @memberof netproto.ALD_StepGameResult
         * @static
         * @param {netproto.ALD_StepGameResult} message ALD_StepGameResult
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ALD_StepGameResult.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.InitResult = [];
                object.ExpandReel = [];
            }
            if (options.defaults) {
                object.IsRespin = false;
                object.IsExpand = false;
                object.ExpandOrder = "";
                object.SlotResult = null;
            }
            if (message.InitResult && message.InitResult.length) {
                object.InitResult = [];
                for (var j = 0; j < message.InitResult.length; ++j)
                    object.InitResult[j] = $root.netproto.ALD_ReelResult.toObject(message.InitResult[j], options);
            }
            if (message.IsRespin != null && message.hasOwnProperty("IsRespin"))
                object.IsRespin = message.IsRespin;
            if (message.IsExpand != null && message.hasOwnProperty("IsExpand"))
                object.IsExpand = message.IsExpand;
            if (message.ExpandReel && message.ExpandReel.length) {
                object.ExpandReel = [];
                for (var j = 0; j < message.ExpandReel.length; ++j)
                    object.ExpandReel[j] = message.ExpandReel[j];
            }
            if (message.ExpandOrder != null && message.hasOwnProperty("ExpandOrder"))
                object.ExpandOrder = message.ExpandOrder;
            if (message.SlotResult != null && message.hasOwnProperty("SlotResult"))
                object.SlotResult = $root.netproto.ALD_MSG_GameResult.toObject(message.SlotResult, options);
            return object;
        };

        /**
         * Converts this ALD_StepGameResult to JSON.
         * @function toJSON
         * @memberof netproto.ALD_StepGameResult
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ALD_StepGameResult.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ALD_StepGameResult;
    })();

    return netproto;
})();

module.exports = $root;
