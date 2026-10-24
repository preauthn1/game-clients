/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

//var $protobuf = require("protobufjs/minimal");
var $protobuf = protobuf;

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.GameMsg_WLYC = (function() {

    /**
     * Namespace GameMsg_WLYC.
     * @exports GameMsg_WLYC
     * @namespace
     */
    var GameMsg_WLYC = {};

    GameMsg_WLYC.WLZB_MSG_Spin = (function() {

        /**
         * Properties of a WLZB_MSG_Spin.
         * @memberof GameMsg_WLYC
         * @interface IWLZB_MSG_Spin
         * @property {number|Long|null} [Money] WLZB_MSG_Spin Money
         * @property {number|null} [Rate] WLZB_MSG_Spin Rate
         */

        /**
         * Constructs a new WLZB_MSG_Spin.
         * @memberof GameMsg_WLYC
         * @classdesc Represents a WLZB_MSG_Spin.
         * @implements IWLZB_MSG_Spin
         * @constructor
         * @param {GameMsg_WLYC.IWLZB_MSG_Spin=} [properties] Properties to set
         */
        function WLZB_MSG_Spin(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * WLZB_MSG_Spin Money.
         * @member {number|Long} Money
         * @memberof GameMsg_WLYC.WLZB_MSG_Spin
         * @instance
         */
        WLZB_MSG_Spin.prototype.Money = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * WLZB_MSG_Spin Rate.
         * @member {number} Rate
         * @memberof GameMsg_WLYC.WLZB_MSG_Spin
         * @instance
         */
        WLZB_MSG_Spin.prototype.Rate = 0;

        /**
         * Creates a new WLZB_MSG_Spin instance using the specified properties.
         * @function create
         * @memberof GameMsg_WLYC.WLZB_MSG_Spin
         * @static
         * @param {GameMsg_WLYC.IWLZB_MSG_Spin=} [properties] Properties to set
         * @returns {GameMsg_WLYC.WLZB_MSG_Spin} WLZB_MSG_Spin instance
         */
        WLZB_MSG_Spin.create = function create(properties) {
            return new WLZB_MSG_Spin(properties);
        };

        /**
         * Encodes the specified WLZB_MSG_Spin message. Does not implicitly {@link GameMsg_WLYC.WLZB_MSG_Spin.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_WLYC.WLZB_MSG_Spin
         * @static
         * @param {GameMsg_WLYC.IWLZB_MSG_Spin} message WLZB_MSG_Spin message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WLZB_MSG_Spin.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Money != null && message.hasOwnProperty("Money"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.Money);
            if (message.Rate != null && message.hasOwnProperty("Rate"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.Rate);
            return writer;
        };

        /**
         * Encodes the specified WLZB_MSG_Spin message, length delimited. Does not implicitly {@link GameMsg_WLYC.WLZB_MSG_Spin.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_WLYC.WLZB_MSG_Spin
         * @static
         * @param {GameMsg_WLYC.IWLZB_MSG_Spin} message WLZB_MSG_Spin message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WLZB_MSG_Spin.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a WLZB_MSG_Spin message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_WLYC.WLZB_MSG_Spin
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_WLYC.WLZB_MSG_Spin} WLZB_MSG_Spin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WLZB_MSG_Spin.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_WLYC.WLZB_MSG_Spin();
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
         * Decodes a WLZB_MSG_Spin message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_WLYC.WLZB_MSG_Spin
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_WLYC.WLZB_MSG_Spin} WLZB_MSG_Spin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WLZB_MSG_Spin.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a WLZB_MSG_Spin message.
         * @function verify
         * @memberof GameMsg_WLYC.WLZB_MSG_Spin
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        WLZB_MSG_Spin.verify = function verify(message) {
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
         * Creates a WLZB_MSG_Spin message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_WLYC.WLZB_MSG_Spin
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_WLYC.WLZB_MSG_Spin} WLZB_MSG_Spin
         */
        WLZB_MSG_Spin.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_WLYC.WLZB_MSG_Spin)
                return object;
            var message = new $root.GameMsg_WLYC.WLZB_MSG_Spin();
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
         * Creates a plain object from a WLZB_MSG_Spin message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_WLYC.WLZB_MSG_Spin
         * @static
         * @param {GameMsg_WLYC.WLZB_MSG_Spin} message WLZB_MSG_Spin
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        WLZB_MSG_Spin.toObject = function toObject(message, options) {
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
         * Converts this WLZB_MSG_Spin to JSON.
         * @function toJSON
         * @memberof GameMsg_WLYC.WLZB_MSG_Spin
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        WLZB_MSG_Spin.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return WLZB_MSG_Spin;
    })();

    GameMsg_WLYC.WLZB_MSG_Setting = (function() {

        /**
         * Properties of a WLZB_MSG_Setting.
         * @memberof GameMsg_WLYC
         * @interface IWLZB_MSG_Setting
         * @property {number|null} [PayLineMode] WLZB_MSG_Setting PayLineMode
         * @property {number|null} [TotalPayLine] WLZB_MSG_Setting TotalPayLine
         * @property {number|Long|null} [MinCarryMoney] WLZB_MSG_Setting MinCarryMoney
         * @property {number|null} [RowCounts] WLZB_MSG_Setting RowCounts
         * @property {Array.<number>|null} [BetMoneys] WLZB_MSG_Setting BetMoneys
         * @property {Array.<number>|null} [BetRates] WLZB_MSG_Setting BetRates
         * @property {Array.<number>|null} [BigWinStep] WLZB_MSG_Setting BigWinStep
         * @property {Array.<GameMsg_WLYC.IWLZB_SymbolPayTable>|null} [SymbolPayTable] WLZB_MSG_Setting SymbolPayTable
         * @property {Array.<GameMsg_WLYC.IWLZB_ReelSetting>|null} [ReelSetting] WLZB_MSG_Setting ReelSetting
         * @property {Array.<GameMsg_WLYC.IWLZB_FreeGameInfo>|null} [FreeGames] WLZB_MSG_Setting FreeGames
         * @property {Array.<GameMsg_WLYC.IWLZB_PayLine>|null} [PayLines] WLZB_MSG_Setting PayLines
         * @property {Array.<GameMsg_WLYC.IWLZB_UnitPrefix>|null} [UnitPrefix] WLZB_MSG_Setting UnitPrefix
         * @property {Array.<GameMsg_WLYC.IWLZB_Description>|null} [Descriptions] WLZB_MSG_Setting Descriptions
         * @property {Array.<GameMsg_WLYC.IWLZB_GoldBallInfo>|null} [GoldBallSetting] WLZB_MSG_Setting GoldBallSetting
         * @property {Array.<GameMsg_WLYC.IWLZB_JackpotInfo>|null} [Jackpots] WLZB_MSG_Setting Jackpots
         */

        /**
         * Constructs a new WLZB_MSG_Setting.
         * @memberof GameMsg_WLYC
         * @classdesc Represents a WLZB_MSG_Setting.
         * @implements IWLZB_MSG_Setting
         * @constructor
         * @param {GameMsg_WLYC.IWLZB_MSG_Setting=} [properties] Properties to set
         */
        function WLZB_MSG_Setting(properties) {
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
         * WLZB_MSG_Setting PayLineMode.
         * @member {number} PayLineMode
         * @memberof GameMsg_WLYC.WLZB_MSG_Setting
         * @instance
         */
        WLZB_MSG_Setting.prototype.PayLineMode = 0;

        /**
         * WLZB_MSG_Setting TotalPayLine.
         * @member {number} TotalPayLine
         * @memberof GameMsg_WLYC.WLZB_MSG_Setting
         * @instance
         */
        WLZB_MSG_Setting.prototype.TotalPayLine = 0;

        /**
         * WLZB_MSG_Setting MinCarryMoney.
         * @member {number|Long} MinCarryMoney
         * @memberof GameMsg_WLYC.WLZB_MSG_Setting
         * @instance
         */
        WLZB_MSG_Setting.prototype.MinCarryMoney = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * WLZB_MSG_Setting RowCounts.
         * @member {number} RowCounts
         * @memberof GameMsg_WLYC.WLZB_MSG_Setting
         * @instance
         */
        WLZB_MSG_Setting.prototype.RowCounts = 0;

        /**
         * WLZB_MSG_Setting BetMoneys.
         * @member {Array.<number>} BetMoneys
         * @memberof GameMsg_WLYC.WLZB_MSG_Setting
         * @instance
         */
        WLZB_MSG_Setting.prototype.BetMoneys = $util.emptyArray;

        /**
         * WLZB_MSG_Setting BetRates.
         * @member {Array.<number>} BetRates
         * @memberof GameMsg_WLYC.WLZB_MSG_Setting
         * @instance
         */
        WLZB_MSG_Setting.prototype.BetRates = $util.emptyArray;

        /**
         * WLZB_MSG_Setting BigWinStep.
         * @member {Array.<number>} BigWinStep
         * @memberof GameMsg_WLYC.WLZB_MSG_Setting
         * @instance
         */
        WLZB_MSG_Setting.prototype.BigWinStep = $util.emptyArray;

        /**
         * WLZB_MSG_Setting SymbolPayTable.
         * @member {Array.<GameMsg_WLYC.IWLZB_SymbolPayTable>} SymbolPayTable
         * @memberof GameMsg_WLYC.WLZB_MSG_Setting
         * @instance
         */
        WLZB_MSG_Setting.prototype.SymbolPayTable = $util.emptyArray;

        /**
         * WLZB_MSG_Setting ReelSetting.
         * @member {Array.<GameMsg_WLYC.IWLZB_ReelSetting>} ReelSetting
         * @memberof GameMsg_WLYC.WLZB_MSG_Setting
         * @instance
         */
        WLZB_MSG_Setting.prototype.ReelSetting = $util.emptyArray;

        /**
         * WLZB_MSG_Setting FreeGames.
         * @member {Array.<GameMsg_WLYC.IWLZB_FreeGameInfo>} FreeGames
         * @memberof GameMsg_WLYC.WLZB_MSG_Setting
         * @instance
         */
        WLZB_MSG_Setting.prototype.FreeGames = $util.emptyArray;

        /**
         * WLZB_MSG_Setting PayLines.
         * @member {Array.<GameMsg_WLYC.IWLZB_PayLine>} PayLines
         * @memberof GameMsg_WLYC.WLZB_MSG_Setting
         * @instance
         */
        WLZB_MSG_Setting.prototype.PayLines = $util.emptyArray;

        /**
         * WLZB_MSG_Setting UnitPrefix.
         * @member {Array.<GameMsg_WLYC.IWLZB_UnitPrefix>} UnitPrefix
         * @memberof GameMsg_WLYC.WLZB_MSG_Setting
         * @instance
         */
        WLZB_MSG_Setting.prototype.UnitPrefix = $util.emptyArray;

        /**
         * WLZB_MSG_Setting Descriptions.
         * @member {Array.<GameMsg_WLYC.IWLZB_Description>} Descriptions
         * @memberof GameMsg_WLYC.WLZB_MSG_Setting
         * @instance
         */
        WLZB_MSG_Setting.prototype.Descriptions = $util.emptyArray;

        /**
         * WLZB_MSG_Setting GoldBallSetting.
         * @member {Array.<GameMsg_WLYC.IWLZB_GoldBallInfo>} GoldBallSetting
         * @memberof GameMsg_WLYC.WLZB_MSG_Setting
         * @instance
         */
        WLZB_MSG_Setting.prototype.GoldBallSetting = $util.emptyArray;

        /**
         * WLZB_MSG_Setting Jackpots.
         * @member {Array.<GameMsg_WLYC.IWLZB_JackpotInfo>} Jackpots
         * @memberof GameMsg_WLYC.WLZB_MSG_Setting
         * @instance
         */
        WLZB_MSG_Setting.prototype.Jackpots = $util.emptyArray;

        /**
         * Creates a new WLZB_MSG_Setting instance using the specified properties.
         * @function create
         * @memberof GameMsg_WLYC.WLZB_MSG_Setting
         * @static
         * @param {GameMsg_WLYC.IWLZB_MSG_Setting=} [properties] Properties to set
         * @returns {GameMsg_WLYC.WLZB_MSG_Setting} WLZB_MSG_Setting instance
         */
        WLZB_MSG_Setting.create = function create(properties) {
            return new WLZB_MSG_Setting(properties);
        };

        /**
         * Encodes the specified WLZB_MSG_Setting message. Does not implicitly {@link GameMsg_WLYC.WLZB_MSG_Setting.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_WLYC.WLZB_MSG_Setting
         * @static
         * @param {GameMsg_WLYC.IWLZB_MSG_Setting} message WLZB_MSG_Setting message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WLZB_MSG_Setting.encode = function encode(message, writer) {
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
            if (message.BetMoneys != null && message.BetMoneys.length)
                for (var i = 0; i < message.BetMoneys.length; ++i)
                    writer.uint32(/* id 5, wireType 0 =*/40).int32(message.BetMoneys[i]);
            if (message.BetRates != null && message.BetRates.length)
                for (var i = 0; i < message.BetRates.length; ++i)
                    writer.uint32(/* id 6, wireType 0 =*/48).int32(message.BetRates[i]);
            if (message.BigWinStep != null && message.BigWinStep.length)
                for (var i = 0; i < message.BigWinStep.length; ++i)
                    writer.uint32(/* id 7, wireType 0 =*/56).int32(message.BigWinStep[i]);
            if (message.SymbolPayTable != null && message.SymbolPayTable.length)
                for (var i = 0; i < message.SymbolPayTable.length; ++i)
                    $root.GameMsg_WLYC.WLZB_SymbolPayTable.encode(message.SymbolPayTable[i], writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
            if (message.ReelSetting != null && message.ReelSetting.length)
                for (var i = 0; i < message.ReelSetting.length; ++i)
                    $root.GameMsg_WLYC.WLZB_ReelSetting.encode(message.ReelSetting[i], writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
            if (message.FreeGames != null && message.FreeGames.length)
                for (var i = 0; i < message.FreeGames.length; ++i)
                    $root.GameMsg_WLYC.WLZB_FreeGameInfo.encode(message.FreeGames[i], writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
            if (message.PayLines != null && message.PayLines.length)
                for (var i = 0; i < message.PayLines.length; ++i)
                    $root.GameMsg_WLYC.WLZB_PayLine.encode(message.PayLines[i], writer.uint32(/* id 11, wireType 2 =*/90).fork()).ldelim();
            if (message.UnitPrefix != null && message.UnitPrefix.length)
                for (var i = 0; i < message.UnitPrefix.length; ++i)
                    $root.GameMsg_WLYC.WLZB_UnitPrefix.encode(message.UnitPrefix[i], writer.uint32(/* id 12, wireType 2 =*/98).fork()).ldelim();
            if (message.Descriptions != null && message.Descriptions.length)
                for (var i = 0; i < message.Descriptions.length; ++i)
                    $root.GameMsg_WLYC.WLZB_Description.encode(message.Descriptions[i], writer.uint32(/* id 13, wireType 2 =*/106).fork()).ldelim();
            if (message.GoldBallSetting != null && message.GoldBallSetting.length)
                for (var i = 0; i < message.GoldBallSetting.length; ++i)
                    $root.GameMsg_WLYC.WLZB_GoldBallInfo.encode(message.GoldBallSetting[i], writer.uint32(/* id 14, wireType 2 =*/114).fork()).ldelim();
            if (message.Jackpots != null && message.Jackpots.length)
                for (var i = 0; i < message.Jackpots.length; ++i)
                    $root.GameMsg_WLYC.WLZB_JackpotInfo.encode(message.Jackpots[i], writer.uint32(/* id 15, wireType 2 =*/122).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified WLZB_MSG_Setting message, length delimited. Does not implicitly {@link GameMsg_WLYC.WLZB_MSG_Setting.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_WLYC.WLZB_MSG_Setting
         * @static
         * @param {GameMsg_WLYC.IWLZB_MSG_Setting} message WLZB_MSG_Setting message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WLZB_MSG_Setting.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a WLZB_MSG_Setting message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_WLYC.WLZB_MSG_Setting
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_WLYC.WLZB_MSG_Setting} WLZB_MSG_Setting
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WLZB_MSG_Setting.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_WLYC.WLZB_MSG_Setting();
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
                    message.SymbolPayTable.push($root.GameMsg_WLYC.WLZB_SymbolPayTable.decode(reader, reader.uint32()));
                    break;
                case 9:
                    if (!(message.ReelSetting && message.ReelSetting.length))
                        message.ReelSetting = [];
                    message.ReelSetting.push($root.GameMsg_WLYC.WLZB_ReelSetting.decode(reader, reader.uint32()));
                    break;
                case 10:
                    if (!(message.FreeGames && message.FreeGames.length))
                        message.FreeGames = [];
                    message.FreeGames.push($root.GameMsg_WLYC.WLZB_FreeGameInfo.decode(reader, reader.uint32()));
                    break;
                case 11:
                    if (!(message.PayLines && message.PayLines.length))
                        message.PayLines = [];
                    message.PayLines.push($root.GameMsg_WLYC.WLZB_PayLine.decode(reader, reader.uint32()));
                    break;
                case 12:
                    if (!(message.UnitPrefix && message.UnitPrefix.length))
                        message.UnitPrefix = [];
                    message.UnitPrefix.push($root.GameMsg_WLYC.WLZB_UnitPrefix.decode(reader, reader.uint32()));
                    break;
                case 13:
                    if (!(message.Descriptions && message.Descriptions.length))
                        message.Descriptions = [];
                    message.Descriptions.push($root.GameMsg_WLYC.WLZB_Description.decode(reader, reader.uint32()));
                    break;
                case 14:
                    if (!(message.GoldBallSetting && message.GoldBallSetting.length))
                        message.GoldBallSetting = [];
                    message.GoldBallSetting.push($root.GameMsg_WLYC.WLZB_GoldBallInfo.decode(reader, reader.uint32()));
                    break;
                case 15:
                    if (!(message.Jackpots && message.Jackpots.length))
                        message.Jackpots = [];
                    message.Jackpots.push($root.GameMsg_WLYC.WLZB_JackpotInfo.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a WLZB_MSG_Setting message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_WLYC.WLZB_MSG_Setting
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_WLYC.WLZB_MSG_Setting} WLZB_MSG_Setting
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WLZB_MSG_Setting.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a WLZB_MSG_Setting message.
         * @function verify
         * @memberof GameMsg_WLYC.WLZB_MSG_Setting
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        WLZB_MSG_Setting.verify = function verify(message) {
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
                    var error = $root.GameMsg_WLYC.WLZB_SymbolPayTable.verify(message.SymbolPayTable[i]);
                    if (error)
                        return "SymbolPayTable." + error;
                }
            }
            if (message.ReelSetting != null && message.hasOwnProperty("ReelSetting")) {
                if (!Array.isArray(message.ReelSetting))
                    return "ReelSetting: array expected";
                for (var i = 0; i < message.ReelSetting.length; ++i) {
                    var error = $root.GameMsg_WLYC.WLZB_ReelSetting.verify(message.ReelSetting[i]);
                    if (error)
                        return "ReelSetting." + error;
                }
            }
            if (message.FreeGames != null && message.hasOwnProperty("FreeGames")) {
                if (!Array.isArray(message.FreeGames))
                    return "FreeGames: array expected";
                for (var i = 0; i < message.FreeGames.length; ++i) {
                    var error = $root.GameMsg_WLYC.WLZB_FreeGameInfo.verify(message.FreeGames[i]);
                    if (error)
                        return "FreeGames." + error;
                }
            }
            if (message.PayLines != null && message.hasOwnProperty("PayLines")) {
                if (!Array.isArray(message.PayLines))
                    return "PayLines: array expected";
                for (var i = 0; i < message.PayLines.length; ++i) {
                    var error = $root.GameMsg_WLYC.WLZB_PayLine.verify(message.PayLines[i]);
                    if (error)
                        return "PayLines." + error;
                }
            }
            if (message.UnitPrefix != null && message.hasOwnProperty("UnitPrefix")) {
                if (!Array.isArray(message.UnitPrefix))
                    return "UnitPrefix: array expected";
                for (var i = 0; i < message.UnitPrefix.length; ++i) {
                    var error = $root.GameMsg_WLYC.WLZB_UnitPrefix.verify(message.UnitPrefix[i]);
                    if (error)
                        return "UnitPrefix." + error;
                }
            }
            if (message.Descriptions != null && message.hasOwnProperty("Descriptions")) {
                if (!Array.isArray(message.Descriptions))
                    return "Descriptions: array expected";
                for (var i = 0; i < message.Descriptions.length; ++i) {
                    var error = $root.GameMsg_WLYC.WLZB_Description.verify(message.Descriptions[i]);
                    if (error)
                        return "Descriptions." + error;
                }
            }
            if (message.GoldBallSetting != null && message.hasOwnProperty("GoldBallSetting")) {
                if (!Array.isArray(message.GoldBallSetting))
                    return "GoldBallSetting: array expected";
                for (var i = 0; i < message.GoldBallSetting.length; ++i) {
                    var error = $root.GameMsg_WLYC.WLZB_GoldBallInfo.verify(message.GoldBallSetting[i]);
                    if (error)
                        return "GoldBallSetting." + error;
                }
            }
            if (message.Jackpots != null && message.hasOwnProperty("Jackpots")) {
                if (!Array.isArray(message.Jackpots))
                    return "Jackpots: array expected";
                for (var i = 0; i < message.Jackpots.length; ++i) {
                    var error = $root.GameMsg_WLYC.WLZB_JackpotInfo.verify(message.Jackpots[i]);
                    if (error)
                        return "Jackpots." + error;
                }
            }
            return null;
        };

        /**
         * Creates a WLZB_MSG_Setting message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_WLYC.WLZB_MSG_Setting
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_WLYC.WLZB_MSG_Setting} WLZB_MSG_Setting
         */
        WLZB_MSG_Setting.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_WLYC.WLZB_MSG_Setting)
                return object;
            var message = new $root.GameMsg_WLYC.WLZB_MSG_Setting();
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
                    throw TypeError(".GameMsg_WLYC.WLZB_MSG_Setting.BetMoneys: array expected");
                message.BetMoneys = [];
                for (var i = 0; i < object.BetMoneys.length; ++i)
                    message.BetMoneys[i] = object.BetMoneys[i] | 0;
            }
            if (object.BetRates) {
                if (!Array.isArray(object.BetRates))
                    throw TypeError(".GameMsg_WLYC.WLZB_MSG_Setting.BetRates: array expected");
                message.BetRates = [];
                for (var i = 0; i < object.BetRates.length; ++i)
                    message.BetRates[i] = object.BetRates[i] | 0;
            }
            if (object.BigWinStep) {
                if (!Array.isArray(object.BigWinStep))
                    throw TypeError(".GameMsg_WLYC.WLZB_MSG_Setting.BigWinStep: array expected");
                message.BigWinStep = [];
                for (var i = 0; i < object.BigWinStep.length; ++i)
                    message.BigWinStep[i] = object.BigWinStep[i] | 0;
            }
            if (object.SymbolPayTable) {
                if (!Array.isArray(object.SymbolPayTable))
                    throw TypeError(".GameMsg_WLYC.WLZB_MSG_Setting.SymbolPayTable: array expected");
                message.SymbolPayTable = [];
                for (var i = 0; i < object.SymbolPayTable.length; ++i) {
                    if (typeof object.SymbolPayTable[i] !== "object")
                        throw TypeError(".GameMsg_WLYC.WLZB_MSG_Setting.SymbolPayTable: object expected");
                    message.SymbolPayTable[i] = $root.GameMsg_WLYC.WLZB_SymbolPayTable.fromObject(object.SymbolPayTable[i]);
                }
            }
            if (object.ReelSetting) {
                if (!Array.isArray(object.ReelSetting))
                    throw TypeError(".GameMsg_WLYC.WLZB_MSG_Setting.ReelSetting: array expected");
                message.ReelSetting = [];
                for (var i = 0; i < object.ReelSetting.length; ++i) {
                    if (typeof object.ReelSetting[i] !== "object")
                        throw TypeError(".GameMsg_WLYC.WLZB_MSG_Setting.ReelSetting: object expected");
                    message.ReelSetting[i] = $root.GameMsg_WLYC.WLZB_ReelSetting.fromObject(object.ReelSetting[i]);
                }
            }
            if (object.FreeGames) {
                if (!Array.isArray(object.FreeGames))
                    throw TypeError(".GameMsg_WLYC.WLZB_MSG_Setting.FreeGames: array expected");
                message.FreeGames = [];
                for (var i = 0; i < object.FreeGames.length; ++i) {
                    if (typeof object.FreeGames[i] !== "object")
                        throw TypeError(".GameMsg_WLYC.WLZB_MSG_Setting.FreeGames: object expected");
                    message.FreeGames[i] = $root.GameMsg_WLYC.WLZB_FreeGameInfo.fromObject(object.FreeGames[i]);
                }
            }
            if (object.PayLines) {
                if (!Array.isArray(object.PayLines))
                    throw TypeError(".GameMsg_WLYC.WLZB_MSG_Setting.PayLines: array expected");
                message.PayLines = [];
                for (var i = 0; i < object.PayLines.length; ++i) {
                    if (typeof object.PayLines[i] !== "object")
                        throw TypeError(".GameMsg_WLYC.WLZB_MSG_Setting.PayLines: object expected");
                    message.PayLines[i] = $root.GameMsg_WLYC.WLZB_PayLine.fromObject(object.PayLines[i]);
                }
            }
            if (object.UnitPrefix) {
                if (!Array.isArray(object.UnitPrefix))
                    throw TypeError(".GameMsg_WLYC.WLZB_MSG_Setting.UnitPrefix: array expected");
                message.UnitPrefix = [];
                for (var i = 0; i < object.UnitPrefix.length; ++i) {
                    if (typeof object.UnitPrefix[i] !== "object")
                        throw TypeError(".GameMsg_WLYC.WLZB_MSG_Setting.UnitPrefix: object expected");
                    message.UnitPrefix[i] = $root.GameMsg_WLYC.WLZB_UnitPrefix.fromObject(object.UnitPrefix[i]);
                }
            }
            if (object.Descriptions) {
                if (!Array.isArray(object.Descriptions))
                    throw TypeError(".GameMsg_WLYC.WLZB_MSG_Setting.Descriptions: array expected");
                message.Descriptions = [];
                for (var i = 0; i < object.Descriptions.length; ++i) {
                    if (typeof object.Descriptions[i] !== "object")
                        throw TypeError(".GameMsg_WLYC.WLZB_MSG_Setting.Descriptions: object expected");
                    message.Descriptions[i] = $root.GameMsg_WLYC.WLZB_Description.fromObject(object.Descriptions[i]);
                }
            }
            if (object.GoldBallSetting) {
                if (!Array.isArray(object.GoldBallSetting))
                    throw TypeError(".GameMsg_WLYC.WLZB_MSG_Setting.GoldBallSetting: array expected");
                message.GoldBallSetting = [];
                for (var i = 0; i < object.GoldBallSetting.length; ++i) {
                    if (typeof object.GoldBallSetting[i] !== "object")
                        throw TypeError(".GameMsg_WLYC.WLZB_MSG_Setting.GoldBallSetting: object expected");
                    message.GoldBallSetting[i] = $root.GameMsg_WLYC.WLZB_GoldBallInfo.fromObject(object.GoldBallSetting[i]);
                }
            }
            if (object.Jackpots) {
                if (!Array.isArray(object.Jackpots))
                    throw TypeError(".GameMsg_WLYC.WLZB_MSG_Setting.Jackpots: array expected");
                message.Jackpots = [];
                for (var i = 0; i < object.Jackpots.length; ++i) {
                    if (typeof object.Jackpots[i] !== "object")
                        throw TypeError(".GameMsg_WLYC.WLZB_MSG_Setting.Jackpots: object expected");
                    message.Jackpots[i] = $root.GameMsg_WLYC.WLZB_JackpotInfo.fromObject(object.Jackpots[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a WLZB_MSG_Setting message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_WLYC.WLZB_MSG_Setting
         * @static
         * @param {GameMsg_WLYC.WLZB_MSG_Setting} message WLZB_MSG_Setting
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        WLZB_MSG_Setting.toObject = function toObject(message, options) {
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
                    object.SymbolPayTable[j] = $root.GameMsg_WLYC.WLZB_SymbolPayTable.toObject(message.SymbolPayTable[j], options);
            }
            if (message.ReelSetting && message.ReelSetting.length) {
                object.ReelSetting = [];
                for (var j = 0; j < message.ReelSetting.length; ++j)
                    object.ReelSetting[j] = $root.GameMsg_WLYC.WLZB_ReelSetting.toObject(message.ReelSetting[j], options);
            }
            if (message.FreeGames && message.FreeGames.length) {
                object.FreeGames = [];
                for (var j = 0; j < message.FreeGames.length; ++j)
                    object.FreeGames[j] = $root.GameMsg_WLYC.WLZB_FreeGameInfo.toObject(message.FreeGames[j], options);
            }
            if (message.PayLines && message.PayLines.length) {
                object.PayLines = [];
                for (var j = 0; j < message.PayLines.length; ++j)
                    object.PayLines[j] = $root.GameMsg_WLYC.WLZB_PayLine.toObject(message.PayLines[j], options);
            }
            if (message.UnitPrefix && message.UnitPrefix.length) {
                object.UnitPrefix = [];
                for (var j = 0; j < message.UnitPrefix.length; ++j)
                    object.UnitPrefix[j] = $root.GameMsg_WLYC.WLZB_UnitPrefix.toObject(message.UnitPrefix[j], options);
            }
            if (message.Descriptions && message.Descriptions.length) {
                object.Descriptions = [];
                for (var j = 0; j < message.Descriptions.length; ++j)
                    object.Descriptions[j] = $root.GameMsg_WLYC.WLZB_Description.toObject(message.Descriptions[j], options);
            }
            if (message.GoldBallSetting && message.GoldBallSetting.length) {
                object.GoldBallSetting = [];
                for (var j = 0; j < message.GoldBallSetting.length; ++j)
                    object.GoldBallSetting[j] = $root.GameMsg_WLYC.WLZB_GoldBallInfo.toObject(message.GoldBallSetting[j], options);
            }
            if (message.Jackpots && message.Jackpots.length) {
                object.Jackpots = [];
                for (var j = 0; j < message.Jackpots.length; ++j)
                    object.Jackpots[j] = $root.GameMsg_WLYC.WLZB_JackpotInfo.toObject(message.Jackpots[j], options);
            }
            return object;
        };

        /**
         * Converts this WLZB_MSG_Setting to JSON.
         * @function toJSON
         * @memberof GameMsg_WLYC.WLZB_MSG_Setting
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        WLZB_MSG_Setting.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return WLZB_MSG_Setting;
    })();

    GameMsg_WLYC.WLZB_MSG_Status = (function() {

        /**
         * Properties of a WLZB_MSG_Status.
         * @memberof GameMsg_WLYC
         * @interface IWLZB_MSG_Status
         * @property {number|null} [State] WLZB_MSG_Status State
         */

        /**
         * Constructs a new WLZB_MSG_Status.
         * @memberof GameMsg_WLYC
         * @classdesc Represents a WLZB_MSG_Status.
         * @implements IWLZB_MSG_Status
         * @constructor
         * @param {GameMsg_WLYC.IWLZB_MSG_Status=} [properties] Properties to set
         */
        function WLZB_MSG_Status(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * WLZB_MSG_Status State.
         * @member {number} State
         * @memberof GameMsg_WLYC.WLZB_MSG_Status
         * @instance
         */
        WLZB_MSG_Status.prototype.State = 0;

        /**
         * Creates a new WLZB_MSG_Status instance using the specified properties.
         * @function create
         * @memberof GameMsg_WLYC.WLZB_MSG_Status
         * @static
         * @param {GameMsg_WLYC.IWLZB_MSG_Status=} [properties] Properties to set
         * @returns {GameMsg_WLYC.WLZB_MSG_Status} WLZB_MSG_Status instance
         */
        WLZB_MSG_Status.create = function create(properties) {
            return new WLZB_MSG_Status(properties);
        };

        /**
         * Encodes the specified WLZB_MSG_Status message. Does not implicitly {@link GameMsg_WLYC.WLZB_MSG_Status.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_WLYC.WLZB_MSG_Status
         * @static
         * @param {GameMsg_WLYC.IWLZB_MSG_Status} message WLZB_MSG_Status message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WLZB_MSG_Status.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.State != null && message.hasOwnProperty("State"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.State);
            return writer;
        };

        /**
         * Encodes the specified WLZB_MSG_Status message, length delimited. Does not implicitly {@link GameMsg_WLYC.WLZB_MSG_Status.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_WLYC.WLZB_MSG_Status
         * @static
         * @param {GameMsg_WLYC.IWLZB_MSG_Status} message WLZB_MSG_Status message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WLZB_MSG_Status.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a WLZB_MSG_Status message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_WLYC.WLZB_MSG_Status
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_WLYC.WLZB_MSG_Status} WLZB_MSG_Status
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WLZB_MSG_Status.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_WLYC.WLZB_MSG_Status();
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
         * Decodes a WLZB_MSG_Status message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_WLYC.WLZB_MSG_Status
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_WLYC.WLZB_MSG_Status} WLZB_MSG_Status
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WLZB_MSG_Status.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a WLZB_MSG_Status message.
         * @function verify
         * @memberof GameMsg_WLYC.WLZB_MSG_Status
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        WLZB_MSG_Status.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.State != null && message.hasOwnProperty("State"))
                if (!$util.isInteger(message.State))
                    return "State: integer expected";
            return null;
        };

        /**
         * Creates a WLZB_MSG_Status message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_WLYC.WLZB_MSG_Status
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_WLYC.WLZB_MSG_Status} WLZB_MSG_Status
         */
        WLZB_MSG_Status.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_WLYC.WLZB_MSG_Status)
                return object;
            var message = new $root.GameMsg_WLYC.WLZB_MSG_Status();
            if (object.State != null)
                message.State = object.State | 0;
            return message;
        };

        /**
         * Creates a plain object from a WLZB_MSG_Status message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_WLYC.WLZB_MSG_Status
         * @static
         * @param {GameMsg_WLYC.WLZB_MSG_Status} message WLZB_MSG_Status
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        WLZB_MSG_Status.toObject = function toObject(message, options) {
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
         * Converts this WLZB_MSG_Status to JSON.
         * @function toJSON
         * @memberof GameMsg_WLYC.WLZB_MSG_Status
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        WLZB_MSG_Status.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return WLZB_MSG_Status;
    })();

    GameMsg_WLYC.WLZB_MSG_BetStatus = (function() {

        /**
         * Properties of a WLZB_MSG_BetStatus.
         * @memberof GameMsg_WLYC
         * @interface IWLZB_MSG_BetStatus
         * @property {number|null} [Ret] WLZB_MSG_BetStatus Ret
         * @property {number|Long|null} [Money] WLZB_MSG_BetStatus Money
         */

        /**
         * Constructs a new WLZB_MSG_BetStatus.
         * @memberof GameMsg_WLYC
         * @classdesc Represents a WLZB_MSG_BetStatus.
         * @implements IWLZB_MSG_BetStatus
         * @constructor
         * @param {GameMsg_WLYC.IWLZB_MSG_BetStatus=} [properties] Properties to set
         */
        function WLZB_MSG_BetStatus(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * WLZB_MSG_BetStatus Ret.
         * @member {number} Ret
         * @memberof GameMsg_WLYC.WLZB_MSG_BetStatus
         * @instance
         */
        WLZB_MSG_BetStatus.prototype.Ret = 0;

        /**
         * WLZB_MSG_BetStatus Money.
         * @member {number|Long} Money
         * @memberof GameMsg_WLYC.WLZB_MSG_BetStatus
         * @instance
         */
        WLZB_MSG_BetStatus.prototype.Money = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new WLZB_MSG_BetStatus instance using the specified properties.
         * @function create
         * @memberof GameMsg_WLYC.WLZB_MSG_BetStatus
         * @static
         * @param {GameMsg_WLYC.IWLZB_MSG_BetStatus=} [properties] Properties to set
         * @returns {GameMsg_WLYC.WLZB_MSG_BetStatus} WLZB_MSG_BetStatus instance
         */
        WLZB_MSG_BetStatus.create = function create(properties) {
            return new WLZB_MSG_BetStatus(properties);
        };

        /**
         * Encodes the specified WLZB_MSG_BetStatus message. Does not implicitly {@link GameMsg_WLYC.WLZB_MSG_BetStatus.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_WLYC.WLZB_MSG_BetStatus
         * @static
         * @param {GameMsg_WLYC.IWLZB_MSG_BetStatus} message WLZB_MSG_BetStatus message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WLZB_MSG_BetStatus.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Ret != null && message.hasOwnProperty("Ret"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.Ret);
            if (message.Money != null && message.hasOwnProperty("Money"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.Money);
            return writer;
        };

        /**
         * Encodes the specified WLZB_MSG_BetStatus message, length delimited. Does not implicitly {@link GameMsg_WLYC.WLZB_MSG_BetStatus.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_WLYC.WLZB_MSG_BetStatus
         * @static
         * @param {GameMsg_WLYC.IWLZB_MSG_BetStatus} message WLZB_MSG_BetStatus message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WLZB_MSG_BetStatus.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a WLZB_MSG_BetStatus message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_WLYC.WLZB_MSG_BetStatus
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_WLYC.WLZB_MSG_BetStatus} WLZB_MSG_BetStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WLZB_MSG_BetStatus.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_WLYC.WLZB_MSG_BetStatus();
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
         * Decodes a WLZB_MSG_BetStatus message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_WLYC.WLZB_MSG_BetStatus
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_WLYC.WLZB_MSG_BetStatus} WLZB_MSG_BetStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WLZB_MSG_BetStatus.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a WLZB_MSG_BetStatus message.
         * @function verify
         * @memberof GameMsg_WLYC.WLZB_MSG_BetStatus
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        WLZB_MSG_BetStatus.verify = function verify(message) {
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
         * Creates a WLZB_MSG_BetStatus message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_WLYC.WLZB_MSG_BetStatus
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_WLYC.WLZB_MSG_BetStatus} WLZB_MSG_BetStatus
         */
        WLZB_MSG_BetStatus.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_WLYC.WLZB_MSG_BetStatus)
                return object;
            var message = new $root.GameMsg_WLYC.WLZB_MSG_BetStatus();
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
         * Creates a plain object from a WLZB_MSG_BetStatus message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_WLYC.WLZB_MSG_BetStatus
         * @static
         * @param {GameMsg_WLYC.WLZB_MSG_BetStatus} message WLZB_MSG_BetStatus
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        WLZB_MSG_BetStatus.toObject = function toObject(message, options) {
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
         * Converts this WLZB_MSG_BetStatus to JSON.
         * @function toJSON
         * @memberof GameMsg_WLYC.WLZB_MSG_BetStatus
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        WLZB_MSG_BetStatus.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return WLZB_MSG_BetStatus;
    })();

    GameMsg_WLYC.WLZB_MSG_GameResult = (function() {

        /**
         * Properties of a WLZB_MSG_GameResult.
         * @memberof GameMsg_WLYC
         * @interface IWLZB_MSG_GameResult
         * @property {number|Long|null} [BetMoney] WLZB_MSG_GameResult BetMoney
         * @property {number|Long|null} [WinMoney] WLZB_MSG_GameResult WinMoney
         * @property {number|Long|null} [FinalMoney] WLZB_MSG_GameResult FinalMoney
         * @property {number|Long|null} [JackpotMoney] WLZB_MSG_GameResult JackpotMoney
         * @property {Array.<GameMsg_WLYC.IWLZB_ReelResult>|null} [ReelResult] WLZB_MSG_GameResult ReelResult
         * @property {Array.<GameMsg_WLYC.IWLZB_PayGroup>|null} [PayGroups] WLZB_MSG_GameResult PayGroups
         * @property {number|Long|null} [FreeGameWinMoney] WLZB_MSG_GameResult FreeGameWinMoney
         */

        /**
         * Constructs a new WLZB_MSG_GameResult.
         * @memberof GameMsg_WLYC
         * @classdesc Represents a WLZB_MSG_GameResult.
         * @implements IWLZB_MSG_GameResult
         * @constructor
         * @param {GameMsg_WLYC.IWLZB_MSG_GameResult=} [properties] Properties to set
         */
        function WLZB_MSG_GameResult(properties) {
            this.ReelResult = [];
            this.PayGroups = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * WLZB_MSG_GameResult BetMoney.
         * @member {number|Long} BetMoney
         * @memberof GameMsg_WLYC.WLZB_MSG_GameResult
         * @instance
         */
        WLZB_MSG_GameResult.prototype.BetMoney = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * WLZB_MSG_GameResult WinMoney.
         * @member {number|Long} WinMoney
         * @memberof GameMsg_WLYC.WLZB_MSG_GameResult
         * @instance
         */
        WLZB_MSG_GameResult.prototype.WinMoney = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * WLZB_MSG_GameResult FinalMoney.
         * @member {number|Long} FinalMoney
         * @memberof GameMsg_WLYC.WLZB_MSG_GameResult
         * @instance
         */
        WLZB_MSG_GameResult.prototype.FinalMoney = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * WLZB_MSG_GameResult JackpotMoney.
         * @member {number|Long} JackpotMoney
         * @memberof GameMsg_WLYC.WLZB_MSG_GameResult
         * @instance
         */
        WLZB_MSG_GameResult.prototype.JackpotMoney = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * WLZB_MSG_GameResult ReelResult.
         * @member {Array.<GameMsg_WLYC.IWLZB_ReelResult>} ReelResult
         * @memberof GameMsg_WLYC.WLZB_MSG_GameResult
         * @instance
         */
        WLZB_MSG_GameResult.prototype.ReelResult = $util.emptyArray;

        /**
         * WLZB_MSG_GameResult PayGroups.
         * @member {Array.<GameMsg_WLYC.IWLZB_PayGroup>} PayGroups
         * @memberof GameMsg_WLYC.WLZB_MSG_GameResult
         * @instance
         */
        WLZB_MSG_GameResult.prototype.PayGroups = $util.emptyArray;

        /**
         * WLZB_MSG_GameResult FreeGameWinMoney.
         * @member {number|Long} FreeGameWinMoney
         * @memberof GameMsg_WLYC.WLZB_MSG_GameResult
         * @instance
         */
        WLZB_MSG_GameResult.prototype.FreeGameWinMoney = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new WLZB_MSG_GameResult instance using the specified properties.
         * @function create
         * @memberof GameMsg_WLYC.WLZB_MSG_GameResult
         * @static
         * @param {GameMsg_WLYC.IWLZB_MSG_GameResult=} [properties] Properties to set
         * @returns {GameMsg_WLYC.WLZB_MSG_GameResult} WLZB_MSG_GameResult instance
         */
        WLZB_MSG_GameResult.create = function create(properties) {
            return new WLZB_MSG_GameResult(properties);
        };

        /**
         * Encodes the specified WLZB_MSG_GameResult message. Does not implicitly {@link GameMsg_WLYC.WLZB_MSG_GameResult.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_WLYC.WLZB_MSG_GameResult
         * @static
         * @param {GameMsg_WLYC.IWLZB_MSG_GameResult} message WLZB_MSG_GameResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WLZB_MSG_GameResult.encode = function encode(message, writer) {
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
                    $root.GameMsg_WLYC.WLZB_ReelResult.encode(message.ReelResult[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            if (message.PayGroups != null && message.PayGroups.length)
                for (var i = 0; i < message.PayGroups.length; ++i)
                    $root.GameMsg_WLYC.WLZB_PayGroup.encode(message.PayGroups[i], writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            if (message.FreeGameWinMoney != null && message.hasOwnProperty("FreeGameWinMoney"))
                writer.uint32(/* id 7, wireType 0 =*/56).int64(message.FreeGameWinMoney);
            return writer;
        };

        /**
         * Encodes the specified WLZB_MSG_GameResult message, length delimited. Does not implicitly {@link GameMsg_WLYC.WLZB_MSG_GameResult.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_WLYC.WLZB_MSG_GameResult
         * @static
         * @param {GameMsg_WLYC.IWLZB_MSG_GameResult} message WLZB_MSG_GameResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WLZB_MSG_GameResult.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a WLZB_MSG_GameResult message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_WLYC.WLZB_MSG_GameResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_WLYC.WLZB_MSG_GameResult} WLZB_MSG_GameResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WLZB_MSG_GameResult.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_WLYC.WLZB_MSG_GameResult();
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
                    message.ReelResult.push($root.GameMsg_WLYC.WLZB_ReelResult.decode(reader, reader.uint32()));
                    break;
                case 6:
                    if (!(message.PayGroups && message.PayGroups.length))
                        message.PayGroups = [];
                    message.PayGroups.push($root.GameMsg_WLYC.WLZB_PayGroup.decode(reader, reader.uint32()));
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
         * Decodes a WLZB_MSG_GameResult message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_WLYC.WLZB_MSG_GameResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_WLYC.WLZB_MSG_GameResult} WLZB_MSG_GameResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WLZB_MSG_GameResult.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a WLZB_MSG_GameResult message.
         * @function verify
         * @memberof GameMsg_WLYC.WLZB_MSG_GameResult
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        WLZB_MSG_GameResult.verify = function verify(message) {
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
                    var error = $root.GameMsg_WLYC.WLZB_ReelResult.verify(message.ReelResult[i]);
                    if (error)
                        return "ReelResult." + error;
                }
            }
            if (message.PayGroups != null && message.hasOwnProperty("PayGroups")) {
                if (!Array.isArray(message.PayGroups))
                    return "PayGroups: array expected";
                for (var i = 0; i < message.PayGroups.length; ++i) {
                    var error = $root.GameMsg_WLYC.WLZB_PayGroup.verify(message.PayGroups[i]);
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
         * Creates a WLZB_MSG_GameResult message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_WLYC.WLZB_MSG_GameResult
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_WLYC.WLZB_MSG_GameResult} WLZB_MSG_GameResult
         */
        WLZB_MSG_GameResult.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_WLYC.WLZB_MSG_GameResult)
                return object;
            var message = new $root.GameMsg_WLYC.WLZB_MSG_GameResult();
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
                    throw TypeError(".GameMsg_WLYC.WLZB_MSG_GameResult.ReelResult: array expected");
                message.ReelResult = [];
                for (var i = 0; i < object.ReelResult.length; ++i) {
                    if (typeof object.ReelResult[i] !== "object")
                        throw TypeError(".GameMsg_WLYC.WLZB_MSG_GameResult.ReelResult: object expected");
                    message.ReelResult[i] = $root.GameMsg_WLYC.WLZB_ReelResult.fromObject(object.ReelResult[i]);
                }
            }
            if (object.PayGroups) {
                if (!Array.isArray(object.PayGroups))
                    throw TypeError(".GameMsg_WLYC.WLZB_MSG_GameResult.PayGroups: array expected");
                message.PayGroups = [];
                for (var i = 0; i < object.PayGroups.length; ++i) {
                    if (typeof object.PayGroups[i] !== "object")
                        throw TypeError(".GameMsg_WLYC.WLZB_MSG_GameResult.PayGroups: object expected");
                    message.PayGroups[i] = $root.GameMsg_WLYC.WLZB_PayGroup.fromObject(object.PayGroups[i]);
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
         * Creates a plain object from a WLZB_MSG_GameResult message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_WLYC.WLZB_MSG_GameResult
         * @static
         * @param {GameMsg_WLYC.WLZB_MSG_GameResult} message WLZB_MSG_GameResult
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        WLZB_MSG_GameResult.toObject = function toObject(message, options) {
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
                    object.ReelResult[j] = $root.GameMsg_WLYC.WLZB_ReelResult.toObject(message.ReelResult[j], options);
            }
            if (message.PayGroups && message.PayGroups.length) {
                object.PayGroups = [];
                for (var j = 0; j < message.PayGroups.length; ++j)
                    object.PayGroups[j] = $root.GameMsg_WLYC.WLZB_PayGroup.toObject(message.PayGroups[j], options);
            }
            if (message.FreeGameWinMoney != null && message.hasOwnProperty("FreeGameWinMoney"))
                if (typeof message.FreeGameWinMoney === "number")
                    object.FreeGameWinMoney = options.longs === String ? String(message.FreeGameWinMoney) : message.FreeGameWinMoney;
                else
                    object.FreeGameWinMoney = options.longs === String ? $util.Long.prototype.toString.call(message.FreeGameWinMoney) : options.longs === Number ? new $util.LongBits(message.FreeGameWinMoney.low >>> 0, message.FreeGameWinMoney.high >>> 0).toNumber() : message.FreeGameWinMoney;
            return object;
        };

        /**
         * Converts this WLZB_MSG_GameResult to JSON.
         * @function toJSON
         * @memberof GameMsg_WLYC.WLZB_MSG_GameResult
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        WLZB_MSG_GameResult.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return WLZB_MSG_GameResult;
    })();

    GameMsg_WLYC.WLZB_MSG_LeftFreeGameData = (function() {

        /**
         * Properties of a WLZB_MSG_LeftFreeGameData.
         * @memberof GameMsg_WLYC
         * @interface IWLZB_MSG_LeftFreeGameData
         * @property {number|null} [Count] WLZB_MSG_LeftFreeGameData Count
         * @property {number|Long|null} [BetMoney] WLZB_MSG_LeftFreeGameData BetMoney
         * @property {number|Long|null} [BetRate] WLZB_MSG_LeftFreeGameData BetRate
         * @property {number|null} [ID] WLZB_MSG_LeftFreeGameData ID
         */

        /**
         * Constructs a new WLZB_MSG_LeftFreeGameData.
         * @memberof GameMsg_WLYC
         * @classdesc Represents a WLZB_MSG_LeftFreeGameData.
         * @implements IWLZB_MSG_LeftFreeGameData
         * @constructor
         * @param {GameMsg_WLYC.IWLZB_MSG_LeftFreeGameData=} [properties] Properties to set
         */
        function WLZB_MSG_LeftFreeGameData(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * WLZB_MSG_LeftFreeGameData Count.
         * @member {number} Count
         * @memberof GameMsg_WLYC.WLZB_MSG_LeftFreeGameData
         * @instance
         */
        WLZB_MSG_LeftFreeGameData.prototype.Count = 0;

        /**
         * WLZB_MSG_LeftFreeGameData BetMoney.
         * @member {number|Long} BetMoney
         * @memberof GameMsg_WLYC.WLZB_MSG_LeftFreeGameData
         * @instance
         */
        WLZB_MSG_LeftFreeGameData.prototype.BetMoney = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * WLZB_MSG_LeftFreeGameData BetRate.
         * @member {number|Long} BetRate
         * @memberof GameMsg_WLYC.WLZB_MSG_LeftFreeGameData
         * @instance
         */
        WLZB_MSG_LeftFreeGameData.prototype.BetRate = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * WLZB_MSG_LeftFreeGameData ID.
         * @member {number} ID
         * @memberof GameMsg_WLYC.WLZB_MSG_LeftFreeGameData
         * @instance
         */
        WLZB_MSG_LeftFreeGameData.prototype.ID = 0;

        /**
         * Creates a new WLZB_MSG_LeftFreeGameData instance using the specified properties.
         * @function create
         * @memberof GameMsg_WLYC.WLZB_MSG_LeftFreeGameData
         * @static
         * @param {GameMsg_WLYC.IWLZB_MSG_LeftFreeGameData=} [properties] Properties to set
         * @returns {GameMsg_WLYC.WLZB_MSG_LeftFreeGameData} WLZB_MSG_LeftFreeGameData instance
         */
        WLZB_MSG_LeftFreeGameData.create = function create(properties) {
            return new WLZB_MSG_LeftFreeGameData(properties);
        };

        /**
         * Encodes the specified WLZB_MSG_LeftFreeGameData message. Does not implicitly {@link GameMsg_WLYC.WLZB_MSG_LeftFreeGameData.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_WLYC.WLZB_MSG_LeftFreeGameData
         * @static
         * @param {GameMsg_WLYC.IWLZB_MSG_LeftFreeGameData} message WLZB_MSG_LeftFreeGameData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WLZB_MSG_LeftFreeGameData.encode = function encode(message, writer) {
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
         * Encodes the specified WLZB_MSG_LeftFreeGameData message, length delimited. Does not implicitly {@link GameMsg_WLYC.WLZB_MSG_LeftFreeGameData.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_WLYC.WLZB_MSG_LeftFreeGameData
         * @static
         * @param {GameMsg_WLYC.IWLZB_MSG_LeftFreeGameData} message WLZB_MSG_LeftFreeGameData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WLZB_MSG_LeftFreeGameData.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a WLZB_MSG_LeftFreeGameData message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_WLYC.WLZB_MSG_LeftFreeGameData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_WLYC.WLZB_MSG_LeftFreeGameData} WLZB_MSG_LeftFreeGameData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WLZB_MSG_LeftFreeGameData.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_WLYC.WLZB_MSG_LeftFreeGameData();
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
         * Decodes a WLZB_MSG_LeftFreeGameData message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_WLYC.WLZB_MSG_LeftFreeGameData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_WLYC.WLZB_MSG_LeftFreeGameData} WLZB_MSG_LeftFreeGameData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WLZB_MSG_LeftFreeGameData.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a WLZB_MSG_LeftFreeGameData message.
         * @function verify
         * @memberof GameMsg_WLYC.WLZB_MSG_LeftFreeGameData
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        WLZB_MSG_LeftFreeGameData.verify = function verify(message) {
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
         * Creates a WLZB_MSG_LeftFreeGameData message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_WLYC.WLZB_MSG_LeftFreeGameData
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_WLYC.WLZB_MSG_LeftFreeGameData} WLZB_MSG_LeftFreeGameData
         */
        WLZB_MSG_LeftFreeGameData.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_WLYC.WLZB_MSG_LeftFreeGameData)
                return object;
            var message = new $root.GameMsg_WLYC.WLZB_MSG_LeftFreeGameData();
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
         * Creates a plain object from a WLZB_MSG_LeftFreeGameData message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_WLYC.WLZB_MSG_LeftFreeGameData
         * @static
         * @param {GameMsg_WLYC.WLZB_MSG_LeftFreeGameData} message WLZB_MSG_LeftFreeGameData
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        WLZB_MSG_LeftFreeGameData.toObject = function toObject(message, options) {
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
         * Converts this WLZB_MSG_LeftFreeGameData to JSON.
         * @function toJSON
         * @memberof GameMsg_WLYC.WLZB_MSG_LeftFreeGameData
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        WLZB_MSG_LeftFreeGameData.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return WLZB_MSG_LeftFreeGameData;
    })();

    GameMsg_WLYC.WLZB_MSG_GameLogRead = (function() {

        /**
         * Properties of a WLZB_MSG_GameLogRead.
         * @memberof GameMsg_WLYC
         * @interface IWLZB_MSG_GameLogRead
         * @property {number|null} [UserID] WLZB_MSG_GameLogRead UserID
         * @property {number|null} [GameID] WLZB_MSG_GameLogRead GameID
         * @property {string|null} [StartTime] WLZB_MSG_GameLogRead StartTime
         * @property {string|null} [EndTime] WLZB_MSG_GameLogRead EndTime
         * @property {number|null} [PageIndex] WLZB_MSG_GameLogRead PageIndex
         * @property {number|null} [PageSize] WLZB_MSG_GameLogRead PageSize
         */

        /**
         * Constructs a new WLZB_MSG_GameLogRead.
         * @memberof GameMsg_WLYC
         * @classdesc Represents a WLZB_MSG_GameLogRead.
         * @implements IWLZB_MSG_GameLogRead
         * @constructor
         * @param {GameMsg_WLYC.IWLZB_MSG_GameLogRead=} [properties] Properties to set
         */
        function WLZB_MSG_GameLogRead(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * WLZB_MSG_GameLogRead UserID.
         * @member {number} UserID
         * @memberof GameMsg_WLYC.WLZB_MSG_GameLogRead
         * @instance
         */
        WLZB_MSG_GameLogRead.prototype.UserID = 0;

        /**
         * WLZB_MSG_GameLogRead GameID.
         * @member {number} GameID
         * @memberof GameMsg_WLYC.WLZB_MSG_GameLogRead
         * @instance
         */
        WLZB_MSG_GameLogRead.prototype.GameID = 0;

        /**
         * WLZB_MSG_GameLogRead StartTime.
         * @member {string} StartTime
         * @memberof GameMsg_WLYC.WLZB_MSG_GameLogRead
         * @instance
         */
        WLZB_MSG_GameLogRead.prototype.StartTime = "";

        /**
         * WLZB_MSG_GameLogRead EndTime.
         * @member {string} EndTime
         * @memberof GameMsg_WLYC.WLZB_MSG_GameLogRead
         * @instance
         */
        WLZB_MSG_GameLogRead.prototype.EndTime = "";

        /**
         * WLZB_MSG_GameLogRead PageIndex.
         * @member {number} PageIndex
         * @memberof GameMsg_WLYC.WLZB_MSG_GameLogRead
         * @instance
         */
        WLZB_MSG_GameLogRead.prototype.PageIndex = 0;

        /**
         * WLZB_MSG_GameLogRead PageSize.
         * @member {number} PageSize
         * @memberof GameMsg_WLYC.WLZB_MSG_GameLogRead
         * @instance
         */
        WLZB_MSG_GameLogRead.prototype.PageSize = 0;

        /**
         * Creates a new WLZB_MSG_GameLogRead instance using the specified properties.
         * @function create
         * @memberof GameMsg_WLYC.WLZB_MSG_GameLogRead
         * @static
         * @param {GameMsg_WLYC.IWLZB_MSG_GameLogRead=} [properties] Properties to set
         * @returns {GameMsg_WLYC.WLZB_MSG_GameLogRead} WLZB_MSG_GameLogRead instance
         */
        WLZB_MSG_GameLogRead.create = function create(properties) {
            return new WLZB_MSG_GameLogRead(properties);
        };

        /**
         * Encodes the specified WLZB_MSG_GameLogRead message. Does not implicitly {@link GameMsg_WLYC.WLZB_MSG_GameLogRead.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_WLYC.WLZB_MSG_GameLogRead
         * @static
         * @param {GameMsg_WLYC.IWLZB_MSG_GameLogRead} message WLZB_MSG_GameLogRead message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WLZB_MSG_GameLogRead.encode = function encode(message, writer) {
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
         * Encodes the specified WLZB_MSG_GameLogRead message, length delimited. Does not implicitly {@link GameMsg_WLYC.WLZB_MSG_GameLogRead.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_WLYC.WLZB_MSG_GameLogRead
         * @static
         * @param {GameMsg_WLYC.IWLZB_MSG_GameLogRead} message WLZB_MSG_GameLogRead message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WLZB_MSG_GameLogRead.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a WLZB_MSG_GameLogRead message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_WLYC.WLZB_MSG_GameLogRead
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_WLYC.WLZB_MSG_GameLogRead} WLZB_MSG_GameLogRead
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WLZB_MSG_GameLogRead.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_WLYC.WLZB_MSG_GameLogRead();
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
         * Decodes a WLZB_MSG_GameLogRead message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_WLYC.WLZB_MSG_GameLogRead
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_WLYC.WLZB_MSG_GameLogRead} WLZB_MSG_GameLogRead
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WLZB_MSG_GameLogRead.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a WLZB_MSG_GameLogRead message.
         * @function verify
         * @memberof GameMsg_WLYC.WLZB_MSG_GameLogRead
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        WLZB_MSG_GameLogRead.verify = function verify(message) {
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
         * Creates a WLZB_MSG_GameLogRead message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_WLYC.WLZB_MSG_GameLogRead
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_WLYC.WLZB_MSG_GameLogRead} WLZB_MSG_GameLogRead
         */
        WLZB_MSG_GameLogRead.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_WLYC.WLZB_MSG_GameLogRead)
                return object;
            var message = new $root.GameMsg_WLYC.WLZB_MSG_GameLogRead();
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
         * Creates a plain object from a WLZB_MSG_GameLogRead message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_WLYC.WLZB_MSG_GameLogRead
         * @static
         * @param {GameMsg_WLYC.WLZB_MSG_GameLogRead} message WLZB_MSG_GameLogRead
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        WLZB_MSG_GameLogRead.toObject = function toObject(message, options) {
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
         * Converts this WLZB_MSG_GameLogRead to JSON.
         * @function toJSON
         * @memberof GameMsg_WLYC.WLZB_MSG_GameLogRead
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        WLZB_MSG_GameLogRead.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return WLZB_MSG_GameLogRead;
    })();

    GameMsg_WLYC.WLZB_MSG_GameLogRecord = (function() {

        /**
         * Properties of a WLZB_MSG_GameLogRecord.
         * @memberof GameMsg_WLYC
         * @interface IWLZB_MSG_GameLogRecord
         * @property {number|null} [UserID] WLZB_MSG_GameLogRecord UserID
         * @property {number|null} [GameID] WLZB_MSG_GameLogRecord GameID
         * @property {number|null} [PageCount] WLZB_MSG_GameLogRecord PageCount
         * @property {Array.<GameMsg_WLYC.IWLZB_GameLog>|null} [Logs] WLZB_MSG_GameLogRecord Logs
         */

        /**
         * Constructs a new WLZB_MSG_GameLogRecord.
         * @memberof GameMsg_WLYC
         * @classdesc Represents a WLZB_MSG_GameLogRecord.
         * @implements IWLZB_MSG_GameLogRecord
         * @constructor
         * @param {GameMsg_WLYC.IWLZB_MSG_GameLogRecord=} [properties] Properties to set
         */
        function WLZB_MSG_GameLogRecord(properties) {
            this.Logs = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * WLZB_MSG_GameLogRecord UserID.
         * @member {number} UserID
         * @memberof GameMsg_WLYC.WLZB_MSG_GameLogRecord
         * @instance
         */
        WLZB_MSG_GameLogRecord.prototype.UserID = 0;

        /**
         * WLZB_MSG_GameLogRecord GameID.
         * @member {number} GameID
         * @memberof GameMsg_WLYC.WLZB_MSG_GameLogRecord
         * @instance
         */
        WLZB_MSG_GameLogRecord.prototype.GameID = 0;

        /**
         * WLZB_MSG_GameLogRecord PageCount.
         * @member {number} PageCount
         * @memberof GameMsg_WLYC.WLZB_MSG_GameLogRecord
         * @instance
         */
        WLZB_MSG_GameLogRecord.prototype.PageCount = 0;

        /**
         * WLZB_MSG_GameLogRecord Logs.
         * @member {Array.<GameMsg_WLYC.IWLZB_GameLog>} Logs
         * @memberof GameMsg_WLYC.WLZB_MSG_GameLogRecord
         * @instance
         */
        WLZB_MSG_GameLogRecord.prototype.Logs = $util.emptyArray;

        /**
         * Creates a new WLZB_MSG_GameLogRecord instance using the specified properties.
         * @function create
         * @memberof GameMsg_WLYC.WLZB_MSG_GameLogRecord
         * @static
         * @param {GameMsg_WLYC.IWLZB_MSG_GameLogRecord=} [properties] Properties to set
         * @returns {GameMsg_WLYC.WLZB_MSG_GameLogRecord} WLZB_MSG_GameLogRecord instance
         */
        WLZB_MSG_GameLogRecord.create = function create(properties) {
            return new WLZB_MSG_GameLogRecord(properties);
        };

        /**
         * Encodes the specified WLZB_MSG_GameLogRecord message. Does not implicitly {@link GameMsg_WLYC.WLZB_MSG_GameLogRecord.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_WLYC.WLZB_MSG_GameLogRecord
         * @static
         * @param {GameMsg_WLYC.IWLZB_MSG_GameLogRecord} message WLZB_MSG_GameLogRecord message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WLZB_MSG_GameLogRecord.encode = function encode(message, writer) {
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
                    $root.GameMsg_WLYC.WLZB_GameLog.encode(message.Logs[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified WLZB_MSG_GameLogRecord message, length delimited. Does not implicitly {@link GameMsg_WLYC.WLZB_MSG_GameLogRecord.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_WLYC.WLZB_MSG_GameLogRecord
         * @static
         * @param {GameMsg_WLYC.IWLZB_MSG_GameLogRecord} message WLZB_MSG_GameLogRecord message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WLZB_MSG_GameLogRecord.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a WLZB_MSG_GameLogRecord message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_WLYC.WLZB_MSG_GameLogRecord
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_WLYC.WLZB_MSG_GameLogRecord} WLZB_MSG_GameLogRecord
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WLZB_MSG_GameLogRecord.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_WLYC.WLZB_MSG_GameLogRecord();
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
                    message.Logs.push($root.GameMsg_WLYC.WLZB_GameLog.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a WLZB_MSG_GameLogRecord message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_WLYC.WLZB_MSG_GameLogRecord
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_WLYC.WLZB_MSG_GameLogRecord} WLZB_MSG_GameLogRecord
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WLZB_MSG_GameLogRecord.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a WLZB_MSG_GameLogRecord message.
         * @function verify
         * @memberof GameMsg_WLYC.WLZB_MSG_GameLogRecord
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        WLZB_MSG_GameLogRecord.verify = function verify(message) {
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
                    var error = $root.GameMsg_WLYC.WLZB_GameLog.verify(message.Logs[i]);
                    if (error)
                        return "Logs." + error;
                }
            }
            return null;
        };

        /**
         * Creates a WLZB_MSG_GameLogRecord message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_WLYC.WLZB_MSG_GameLogRecord
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_WLYC.WLZB_MSG_GameLogRecord} WLZB_MSG_GameLogRecord
         */
        WLZB_MSG_GameLogRecord.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_WLYC.WLZB_MSG_GameLogRecord)
                return object;
            var message = new $root.GameMsg_WLYC.WLZB_MSG_GameLogRecord();
            if (object.UserID != null)
                message.UserID = object.UserID | 0;
            if (object.GameID != null)
                message.GameID = object.GameID | 0;
            if (object.PageCount != null)
                message.PageCount = object.PageCount | 0;
            if (object.Logs) {
                if (!Array.isArray(object.Logs))
                    throw TypeError(".GameMsg_WLYC.WLZB_MSG_GameLogRecord.Logs: array expected");
                message.Logs = [];
                for (var i = 0; i < object.Logs.length; ++i) {
                    if (typeof object.Logs[i] !== "object")
                        throw TypeError(".GameMsg_WLYC.WLZB_MSG_GameLogRecord.Logs: object expected");
                    message.Logs[i] = $root.GameMsg_WLYC.WLZB_GameLog.fromObject(object.Logs[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a WLZB_MSG_GameLogRecord message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_WLYC.WLZB_MSG_GameLogRecord
         * @static
         * @param {GameMsg_WLYC.WLZB_MSG_GameLogRecord} message WLZB_MSG_GameLogRecord
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        WLZB_MSG_GameLogRecord.toObject = function toObject(message, options) {
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
                    object.Logs[j] = $root.GameMsg_WLYC.WLZB_GameLog.toObject(message.Logs[j], options);
            }
            return object;
        };

        /**
         * Converts this WLZB_MSG_GameLogRecord to JSON.
         * @function toJSON
         * @memberof GameMsg_WLYC.WLZB_MSG_GameLogRecord
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        WLZB_MSG_GameLogRecord.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return WLZB_MSG_GameLogRecord;
    })();

    GameMsg_WLYC.WLZB_MSG_ChooseGame = (function() {

        /**
         * Properties of a WLZB_MSG_ChooseGame.
         * @memberof GameMsg_WLYC
         * @interface IWLZB_MSG_ChooseGame
         * @property {number} ID WLZB_MSG_ChooseGame ID
         */

        /**
         * Constructs a new WLZB_MSG_ChooseGame.
         * @memberof GameMsg_WLYC
         * @classdesc Represents a WLZB_MSG_ChooseGame.
         * @implements IWLZB_MSG_ChooseGame
         * @constructor
         * @param {GameMsg_WLYC.IWLZB_MSG_ChooseGame=} [properties] Properties to set
         */
        function WLZB_MSG_ChooseGame(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * WLZB_MSG_ChooseGame ID.
         * @member {number} ID
         * @memberof GameMsg_WLYC.WLZB_MSG_ChooseGame
         * @instance
         */
        WLZB_MSG_ChooseGame.prototype.ID = 0;

        /**
         * Creates a new WLZB_MSG_ChooseGame instance using the specified properties.
         * @function create
         * @memberof GameMsg_WLYC.WLZB_MSG_ChooseGame
         * @static
         * @param {GameMsg_WLYC.IWLZB_MSG_ChooseGame=} [properties] Properties to set
         * @returns {GameMsg_WLYC.WLZB_MSG_ChooseGame} WLZB_MSG_ChooseGame instance
         */
        WLZB_MSG_ChooseGame.create = function create(properties) {
            return new WLZB_MSG_ChooseGame(properties);
        };

        /**
         * Encodes the specified WLZB_MSG_ChooseGame message. Does not implicitly {@link GameMsg_WLYC.WLZB_MSG_ChooseGame.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_WLYC.WLZB_MSG_ChooseGame
         * @static
         * @param {GameMsg_WLYC.IWLZB_MSG_ChooseGame} message WLZB_MSG_ChooseGame message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WLZB_MSG_ChooseGame.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.ID);
            return writer;
        };

        /**
         * Encodes the specified WLZB_MSG_ChooseGame message, length delimited. Does not implicitly {@link GameMsg_WLYC.WLZB_MSG_ChooseGame.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_WLYC.WLZB_MSG_ChooseGame
         * @static
         * @param {GameMsg_WLYC.IWLZB_MSG_ChooseGame} message WLZB_MSG_ChooseGame message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WLZB_MSG_ChooseGame.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a WLZB_MSG_ChooseGame message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_WLYC.WLZB_MSG_ChooseGame
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_WLYC.WLZB_MSG_ChooseGame} WLZB_MSG_ChooseGame
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WLZB_MSG_ChooseGame.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_WLYC.WLZB_MSG_ChooseGame();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.ID = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("ID"))
                throw $util.ProtocolError("missing required 'ID'", { instance: message });
            return message;
        };

        /**
         * Decodes a WLZB_MSG_ChooseGame message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_WLYC.WLZB_MSG_ChooseGame
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_WLYC.WLZB_MSG_ChooseGame} WLZB_MSG_ChooseGame
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WLZB_MSG_ChooseGame.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a WLZB_MSG_ChooseGame message.
         * @function verify
         * @memberof GameMsg_WLYC.WLZB_MSG_ChooseGame
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        WLZB_MSG_ChooseGame.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.ID))
                return "ID: integer expected";
            return null;
        };

        /**
         * Creates a WLZB_MSG_ChooseGame message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_WLYC.WLZB_MSG_ChooseGame
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_WLYC.WLZB_MSG_ChooseGame} WLZB_MSG_ChooseGame
         */
        WLZB_MSG_ChooseGame.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_WLYC.WLZB_MSG_ChooseGame)
                return object;
            var message = new $root.GameMsg_WLYC.WLZB_MSG_ChooseGame();
            if (object.ID != null)
                message.ID = object.ID | 0;
            return message;
        };

        /**
         * Creates a plain object from a WLZB_MSG_ChooseGame message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_WLYC.WLZB_MSG_ChooseGame
         * @static
         * @param {GameMsg_WLYC.WLZB_MSG_ChooseGame} message WLZB_MSG_ChooseGame
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        WLZB_MSG_ChooseGame.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.ID = 0;
            if (message.ID != null && message.hasOwnProperty("ID"))
                object.ID = message.ID;
            return object;
        };

        /**
         * Converts this WLZB_MSG_ChooseGame to JSON.
         * @function toJSON
         * @memberof GameMsg_WLYC.WLZB_MSG_ChooseGame
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        WLZB_MSG_ChooseGame.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return WLZB_MSG_ChooseGame;
    })();

    GameMsg_WLYC.WLZB_MSG_ChooseGameOptions = (function() {

        /**
         * Properties of a WLZB_MSG_ChooseGameOptions.
         * @memberof GameMsg_WLYC
         * @interface IWLZB_MSG_ChooseGameOptions
         * @property {number} Times WLZB_MSG_ChooseGameOptions Times
         */

        /**
         * Constructs a new WLZB_MSG_ChooseGameOptions.
         * @memberof GameMsg_WLYC
         * @classdesc Represents a WLZB_MSG_ChooseGameOptions.
         * @implements IWLZB_MSG_ChooseGameOptions
         * @constructor
         * @param {GameMsg_WLYC.IWLZB_MSG_ChooseGameOptions=} [properties] Properties to set
         */
        function WLZB_MSG_ChooseGameOptions(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * WLZB_MSG_ChooseGameOptions Times.
         * @member {number} Times
         * @memberof GameMsg_WLYC.WLZB_MSG_ChooseGameOptions
         * @instance
         */
        WLZB_MSG_ChooseGameOptions.prototype.Times = 0;

        /**
         * Creates a new WLZB_MSG_ChooseGameOptions instance using the specified properties.
         * @function create
         * @memberof GameMsg_WLYC.WLZB_MSG_ChooseGameOptions
         * @static
         * @param {GameMsg_WLYC.IWLZB_MSG_ChooseGameOptions=} [properties] Properties to set
         * @returns {GameMsg_WLYC.WLZB_MSG_ChooseGameOptions} WLZB_MSG_ChooseGameOptions instance
         */
        WLZB_MSG_ChooseGameOptions.create = function create(properties) {
            return new WLZB_MSG_ChooseGameOptions(properties);
        };

        /**
         * Encodes the specified WLZB_MSG_ChooseGameOptions message. Does not implicitly {@link GameMsg_WLYC.WLZB_MSG_ChooseGameOptions.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_WLYC.WLZB_MSG_ChooseGameOptions
         * @static
         * @param {GameMsg_WLYC.IWLZB_MSG_ChooseGameOptions} message WLZB_MSG_ChooseGameOptions message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WLZB_MSG_ChooseGameOptions.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.Times);
            return writer;
        };

        /**
         * Encodes the specified WLZB_MSG_ChooseGameOptions message, length delimited. Does not implicitly {@link GameMsg_WLYC.WLZB_MSG_ChooseGameOptions.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_WLYC.WLZB_MSG_ChooseGameOptions
         * @static
         * @param {GameMsg_WLYC.IWLZB_MSG_ChooseGameOptions} message WLZB_MSG_ChooseGameOptions message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WLZB_MSG_ChooseGameOptions.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a WLZB_MSG_ChooseGameOptions message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_WLYC.WLZB_MSG_ChooseGameOptions
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_WLYC.WLZB_MSG_ChooseGameOptions} WLZB_MSG_ChooseGameOptions
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WLZB_MSG_ChooseGameOptions.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_WLYC.WLZB_MSG_ChooseGameOptions();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Times = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("Times"))
                throw $util.ProtocolError("missing required 'Times'", { instance: message });
            return message;
        };

        /**
         * Decodes a WLZB_MSG_ChooseGameOptions message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_WLYC.WLZB_MSG_ChooseGameOptions
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_WLYC.WLZB_MSG_ChooseGameOptions} WLZB_MSG_ChooseGameOptions
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WLZB_MSG_ChooseGameOptions.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a WLZB_MSG_ChooseGameOptions message.
         * @function verify
         * @memberof GameMsg_WLYC.WLZB_MSG_ChooseGameOptions
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        WLZB_MSG_ChooseGameOptions.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.Times))
                return "Times: integer expected";
            return null;
        };

        /**
         * Creates a WLZB_MSG_ChooseGameOptions message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_WLYC.WLZB_MSG_ChooseGameOptions
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_WLYC.WLZB_MSG_ChooseGameOptions} WLZB_MSG_ChooseGameOptions
         */
        WLZB_MSG_ChooseGameOptions.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_WLYC.WLZB_MSG_ChooseGameOptions)
                return object;
            var message = new $root.GameMsg_WLYC.WLZB_MSG_ChooseGameOptions();
            if (object.Times != null)
                message.Times = object.Times | 0;
            return message;
        };

        /**
         * Creates a plain object from a WLZB_MSG_ChooseGameOptions message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_WLYC.WLZB_MSG_ChooseGameOptions
         * @static
         * @param {GameMsg_WLYC.WLZB_MSG_ChooseGameOptions} message WLZB_MSG_ChooseGameOptions
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        WLZB_MSG_ChooseGameOptions.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.Times = 0;
            if (message.Times != null && message.hasOwnProperty("Times"))
                object.Times = message.Times;
            return object;
        };

        /**
         * Converts this WLZB_MSG_ChooseGameOptions to JSON.
         * @function toJSON
         * @memberof GameMsg_WLYC.WLZB_MSG_ChooseGameOptions
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        WLZB_MSG_ChooseGameOptions.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return WLZB_MSG_ChooseGameOptions;
    })();

    GameMsg_WLYC.WLZB_ReelSetting = (function() {

        /**
         * Properties of a WLZB_ReelSetting.
         * @memberof GameMsg_WLYC
         * @interface IWLZB_ReelSetting
         * @property {number|null} [ReelID] WLZB_ReelSetting ReelID
         * @property {Array.<GameMsg_WLYC.IWLZB_Symbol>|null} [Symbols] WLZB_ReelSetting Symbols
         */

        /**
         * Constructs a new WLZB_ReelSetting.
         * @memberof GameMsg_WLYC
         * @classdesc Represents a WLZB_ReelSetting.
         * @implements IWLZB_ReelSetting
         * @constructor
         * @param {GameMsg_WLYC.IWLZB_ReelSetting=} [properties] Properties to set
         */
        function WLZB_ReelSetting(properties) {
            this.Symbols = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * WLZB_ReelSetting ReelID.
         * @member {number} ReelID
         * @memberof GameMsg_WLYC.WLZB_ReelSetting
         * @instance
         */
        WLZB_ReelSetting.prototype.ReelID = 0;

        /**
         * WLZB_ReelSetting Symbols.
         * @member {Array.<GameMsg_WLYC.IWLZB_Symbol>} Symbols
         * @memberof GameMsg_WLYC.WLZB_ReelSetting
         * @instance
         */
        WLZB_ReelSetting.prototype.Symbols = $util.emptyArray;

        /**
         * Creates a new WLZB_ReelSetting instance using the specified properties.
         * @function create
         * @memberof GameMsg_WLYC.WLZB_ReelSetting
         * @static
         * @param {GameMsg_WLYC.IWLZB_ReelSetting=} [properties] Properties to set
         * @returns {GameMsg_WLYC.WLZB_ReelSetting} WLZB_ReelSetting instance
         */
        WLZB_ReelSetting.create = function create(properties) {
            return new WLZB_ReelSetting(properties);
        };

        /**
         * Encodes the specified WLZB_ReelSetting message. Does not implicitly {@link GameMsg_WLYC.WLZB_ReelSetting.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_WLYC.WLZB_ReelSetting
         * @static
         * @param {GameMsg_WLYC.IWLZB_ReelSetting} message WLZB_ReelSetting message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WLZB_ReelSetting.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.ReelID != null && message.hasOwnProperty("ReelID"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.ReelID);
            if (message.Symbols != null && message.Symbols.length)
                for (var i = 0; i < message.Symbols.length; ++i)
                    $root.GameMsg_WLYC.WLZB_Symbol.encode(message.Symbols[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified WLZB_ReelSetting message, length delimited. Does not implicitly {@link GameMsg_WLYC.WLZB_ReelSetting.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_WLYC.WLZB_ReelSetting
         * @static
         * @param {GameMsg_WLYC.IWLZB_ReelSetting} message WLZB_ReelSetting message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WLZB_ReelSetting.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a WLZB_ReelSetting message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_WLYC.WLZB_ReelSetting
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_WLYC.WLZB_ReelSetting} WLZB_ReelSetting
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WLZB_ReelSetting.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_WLYC.WLZB_ReelSetting();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.ReelID = reader.int32();
                    break;
                case 2:
                    if (!(message.Symbols && message.Symbols.length))
                        message.Symbols = [];
                    message.Symbols.push($root.GameMsg_WLYC.WLZB_Symbol.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a WLZB_ReelSetting message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_WLYC.WLZB_ReelSetting
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_WLYC.WLZB_ReelSetting} WLZB_ReelSetting
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WLZB_ReelSetting.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a WLZB_ReelSetting message.
         * @function verify
         * @memberof GameMsg_WLYC.WLZB_ReelSetting
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        WLZB_ReelSetting.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.ReelID != null && message.hasOwnProperty("ReelID"))
                if (!$util.isInteger(message.ReelID))
                    return "ReelID: integer expected";
            if (message.Symbols != null && message.hasOwnProperty("Symbols")) {
                if (!Array.isArray(message.Symbols))
                    return "Symbols: array expected";
                for (var i = 0; i < message.Symbols.length; ++i) {
                    var error = $root.GameMsg_WLYC.WLZB_Symbol.verify(message.Symbols[i]);
                    if (error)
                        return "Symbols." + error;
                }
            }
            return null;
        };

        /**
         * Creates a WLZB_ReelSetting message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_WLYC.WLZB_ReelSetting
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_WLYC.WLZB_ReelSetting} WLZB_ReelSetting
         */
        WLZB_ReelSetting.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_WLYC.WLZB_ReelSetting)
                return object;
            var message = new $root.GameMsg_WLYC.WLZB_ReelSetting();
            if (object.ReelID != null)
                message.ReelID = object.ReelID | 0;
            if (object.Symbols) {
                if (!Array.isArray(object.Symbols))
                    throw TypeError(".GameMsg_WLYC.WLZB_ReelSetting.Symbols: array expected");
                message.Symbols = [];
                for (var i = 0; i < object.Symbols.length; ++i) {
                    if (typeof object.Symbols[i] !== "object")
                        throw TypeError(".GameMsg_WLYC.WLZB_ReelSetting.Symbols: object expected");
                    message.Symbols[i] = $root.GameMsg_WLYC.WLZB_Symbol.fromObject(object.Symbols[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a WLZB_ReelSetting message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_WLYC.WLZB_ReelSetting
         * @static
         * @param {GameMsg_WLYC.WLZB_ReelSetting} message WLZB_ReelSetting
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        WLZB_ReelSetting.toObject = function toObject(message, options) {
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
                    object.Symbols[j] = $root.GameMsg_WLYC.WLZB_Symbol.toObject(message.Symbols[j], options);
            }
            return object;
        };

        /**
         * Converts this WLZB_ReelSetting to JSON.
         * @function toJSON
         * @memberof GameMsg_WLYC.WLZB_ReelSetting
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        WLZB_ReelSetting.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return WLZB_ReelSetting;
    })();

    GameMsg_WLYC.WLZB_ReelPosition = (function() {

        /**
         * Properties of a WLZB_ReelPosition.
         * @memberof GameMsg_WLYC
         * @interface IWLZB_ReelPosition
         * @property {number|null} [Reel] WLZB_ReelPosition Reel
         * @property {number|null} [Row] WLZB_ReelPosition Row
         */

        /**
         * Constructs a new WLZB_ReelPosition.
         * @memberof GameMsg_WLYC
         * @classdesc Represents a WLZB_ReelPosition.
         * @implements IWLZB_ReelPosition
         * @constructor
         * @param {GameMsg_WLYC.IWLZB_ReelPosition=} [properties] Properties to set
         */
        function WLZB_ReelPosition(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * WLZB_ReelPosition Reel.
         * @member {number} Reel
         * @memberof GameMsg_WLYC.WLZB_ReelPosition
         * @instance
         */
        WLZB_ReelPosition.prototype.Reel = 0;

        /**
         * WLZB_ReelPosition Row.
         * @member {number} Row
         * @memberof GameMsg_WLYC.WLZB_ReelPosition
         * @instance
         */
        WLZB_ReelPosition.prototype.Row = 0;

        /**
         * Creates a new WLZB_ReelPosition instance using the specified properties.
         * @function create
         * @memberof GameMsg_WLYC.WLZB_ReelPosition
         * @static
         * @param {GameMsg_WLYC.IWLZB_ReelPosition=} [properties] Properties to set
         * @returns {GameMsg_WLYC.WLZB_ReelPosition} WLZB_ReelPosition instance
         */
        WLZB_ReelPosition.create = function create(properties) {
            return new WLZB_ReelPosition(properties);
        };

        /**
         * Encodes the specified WLZB_ReelPosition message. Does not implicitly {@link GameMsg_WLYC.WLZB_ReelPosition.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_WLYC.WLZB_ReelPosition
         * @static
         * @param {GameMsg_WLYC.IWLZB_ReelPosition} message WLZB_ReelPosition message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WLZB_ReelPosition.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Reel != null && message.hasOwnProperty("Reel"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.Reel);
            if (message.Row != null && message.hasOwnProperty("Row"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.Row);
            return writer;
        };

        /**
         * Encodes the specified WLZB_ReelPosition message, length delimited. Does not implicitly {@link GameMsg_WLYC.WLZB_ReelPosition.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_WLYC.WLZB_ReelPosition
         * @static
         * @param {GameMsg_WLYC.IWLZB_ReelPosition} message WLZB_ReelPosition message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WLZB_ReelPosition.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a WLZB_ReelPosition message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_WLYC.WLZB_ReelPosition
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_WLYC.WLZB_ReelPosition} WLZB_ReelPosition
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WLZB_ReelPosition.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_WLYC.WLZB_ReelPosition();
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
         * Decodes a WLZB_ReelPosition message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_WLYC.WLZB_ReelPosition
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_WLYC.WLZB_ReelPosition} WLZB_ReelPosition
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WLZB_ReelPosition.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a WLZB_ReelPosition message.
         * @function verify
         * @memberof GameMsg_WLYC.WLZB_ReelPosition
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        WLZB_ReelPosition.verify = function verify(message) {
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
         * Creates a WLZB_ReelPosition message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_WLYC.WLZB_ReelPosition
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_WLYC.WLZB_ReelPosition} WLZB_ReelPosition
         */
        WLZB_ReelPosition.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_WLYC.WLZB_ReelPosition)
                return object;
            var message = new $root.GameMsg_WLYC.WLZB_ReelPosition();
            if (object.Reel != null)
                message.Reel = object.Reel | 0;
            if (object.Row != null)
                message.Row = object.Row | 0;
            return message;
        };

        /**
         * Creates a plain object from a WLZB_ReelPosition message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_WLYC.WLZB_ReelPosition
         * @static
         * @param {GameMsg_WLYC.WLZB_ReelPosition} message WLZB_ReelPosition
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        WLZB_ReelPosition.toObject = function toObject(message, options) {
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
         * Converts this WLZB_ReelPosition to JSON.
         * @function toJSON
         * @memberof GameMsg_WLYC.WLZB_ReelPosition
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        WLZB_ReelPosition.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return WLZB_ReelPosition;
    })();

    GameMsg_WLYC.WLZB_ReelResult = (function() {

        /**
         * Properties of a WLZB_ReelResult.
         * @memberof GameMsg_WLYC
         * @interface IWLZB_ReelResult
         * @property {GameMsg_WLYC.IWLZB_ReelPosition|null} [Position] WLZB_ReelResult Position
         * @property {GameMsg_WLYC.IWLZB_Symbol|null} [Symbol] WLZB_ReelResult Symbol
         * @property {boolean|null} [Blink] WLZB_ReelResult Blink
         */

        /**
         * Constructs a new WLZB_ReelResult.
         * @memberof GameMsg_WLYC
         * @classdesc Represents a WLZB_ReelResult.
         * @implements IWLZB_ReelResult
         * @constructor
         * @param {GameMsg_WLYC.IWLZB_ReelResult=} [properties] Properties to set
         */
        function WLZB_ReelResult(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * WLZB_ReelResult Position.
         * @member {GameMsg_WLYC.IWLZB_ReelPosition|null|undefined} Position
         * @memberof GameMsg_WLYC.WLZB_ReelResult
         * @instance
         */
        WLZB_ReelResult.prototype.Position = null;

        /**
         * WLZB_ReelResult Symbol.
         * @member {GameMsg_WLYC.IWLZB_Symbol|null|undefined} Symbol
         * @memberof GameMsg_WLYC.WLZB_ReelResult
         * @instance
         */
        WLZB_ReelResult.prototype.Symbol = null;

        /**
         * WLZB_ReelResult Blink.
         * @member {boolean} Blink
         * @memberof GameMsg_WLYC.WLZB_ReelResult
         * @instance
         */
        WLZB_ReelResult.prototype.Blink = false;

        /**
         * Creates a new WLZB_ReelResult instance using the specified properties.
         * @function create
         * @memberof GameMsg_WLYC.WLZB_ReelResult
         * @static
         * @param {GameMsg_WLYC.IWLZB_ReelResult=} [properties] Properties to set
         * @returns {GameMsg_WLYC.WLZB_ReelResult} WLZB_ReelResult instance
         */
        WLZB_ReelResult.create = function create(properties) {
            return new WLZB_ReelResult(properties);
        };

        /**
         * Encodes the specified WLZB_ReelResult message. Does not implicitly {@link GameMsg_WLYC.WLZB_ReelResult.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_WLYC.WLZB_ReelResult
         * @static
         * @param {GameMsg_WLYC.IWLZB_ReelResult} message WLZB_ReelResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WLZB_ReelResult.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Position != null && message.hasOwnProperty("Position"))
                $root.GameMsg_WLYC.WLZB_ReelPosition.encode(message.Position, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.Symbol != null && message.hasOwnProperty("Symbol"))
                $root.GameMsg_WLYC.WLZB_Symbol.encode(message.Symbol, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.Blink != null && message.hasOwnProperty("Blink"))
                writer.uint32(/* id 3, wireType 0 =*/24).bool(message.Blink);
            return writer;
        };

        /**
         * Encodes the specified WLZB_ReelResult message, length delimited. Does not implicitly {@link GameMsg_WLYC.WLZB_ReelResult.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_WLYC.WLZB_ReelResult
         * @static
         * @param {GameMsg_WLYC.IWLZB_ReelResult} message WLZB_ReelResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WLZB_ReelResult.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a WLZB_ReelResult message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_WLYC.WLZB_ReelResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_WLYC.WLZB_ReelResult} WLZB_ReelResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WLZB_ReelResult.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_WLYC.WLZB_ReelResult();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Position = $root.GameMsg_WLYC.WLZB_ReelPosition.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.Symbol = $root.GameMsg_WLYC.WLZB_Symbol.decode(reader, reader.uint32());
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
         * Decodes a WLZB_ReelResult message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_WLYC.WLZB_ReelResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_WLYC.WLZB_ReelResult} WLZB_ReelResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WLZB_ReelResult.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a WLZB_ReelResult message.
         * @function verify
         * @memberof GameMsg_WLYC.WLZB_ReelResult
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        WLZB_ReelResult.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Position != null && message.hasOwnProperty("Position")) {
                var error = $root.GameMsg_WLYC.WLZB_ReelPosition.verify(message.Position);
                if (error)
                    return "Position." + error;
            }
            if (message.Symbol != null && message.hasOwnProperty("Symbol")) {
                var error = $root.GameMsg_WLYC.WLZB_Symbol.verify(message.Symbol);
                if (error)
                    return "Symbol." + error;
            }
            if (message.Blink != null && message.hasOwnProperty("Blink"))
                if (typeof message.Blink !== "boolean")
                    return "Blink: boolean expected";
            return null;
        };

        /**
         * Creates a WLZB_ReelResult message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_WLYC.WLZB_ReelResult
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_WLYC.WLZB_ReelResult} WLZB_ReelResult
         */
        WLZB_ReelResult.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_WLYC.WLZB_ReelResult)
                return object;
            var message = new $root.GameMsg_WLYC.WLZB_ReelResult();
            if (object.Position != null) {
                if (typeof object.Position !== "object")
                    throw TypeError(".GameMsg_WLYC.WLZB_ReelResult.Position: object expected");
                message.Position = $root.GameMsg_WLYC.WLZB_ReelPosition.fromObject(object.Position);
            }
            if (object.Symbol != null) {
                if (typeof object.Symbol !== "object")
                    throw TypeError(".GameMsg_WLYC.WLZB_ReelResult.Symbol: object expected");
                message.Symbol = $root.GameMsg_WLYC.WLZB_Symbol.fromObject(object.Symbol);
            }
            if (object.Blink != null)
                message.Blink = Boolean(object.Blink);
            return message;
        };

        /**
         * Creates a plain object from a WLZB_ReelResult message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_WLYC.WLZB_ReelResult
         * @static
         * @param {GameMsg_WLYC.WLZB_ReelResult} message WLZB_ReelResult
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        WLZB_ReelResult.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.Position = null;
                object.Symbol = null;
                object.Blink = false;
            }
            if (message.Position != null && message.hasOwnProperty("Position"))
                object.Position = $root.GameMsg_WLYC.WLZB_ReelPosition.toObject(message.Position, options);
            if (message.Symbol != null && message.hasOwnProperty("Symbol"))
                object.Symbol = $root.GameMsg_WLYC.WLZB_Symbol.toObject(message.Symbol, options);
            if (message.Blink != null && message.hasOwnProperty("Blink"))
                object.Blink = message.Blink;
            return object;
        };

        /**
         * Converts this WLZB_ReelResult to JSON.
         * @function toJSON
         * @memberof GameMsg_WLYC.WLZB_ReelResult
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        WLZB_ReelResult.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return WLZB_ReelResult;
    })();

    GameMsg_WLYC.WLZB_Symbol = (function() {

        /**
         * Properties of a WLZB_Symbol.
         * @memberof GameMsg_WLYC
         * @interface IWLZB_Symbol
         * @property {number|null} [SymbolID] WLZB_Symbol SymbolID
         * @property {string|null} [SymbolName] WLZB_Symbol SymbolName
         */

        /**
         * Constructs a new WLZB_Symbol.
         * @memberof GameMsg_WLYC
         * @classdesc Represents a WLZB_Symbol.
         * @implements IWLZB_Symbol
         * @constructor
         * @param {GameMsg_WLYC.IWLZB_Symbol=} [properties] Properties to set
         */
        function WLZB_Symbol(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * WLZB_Symbol SymbolID.
         * @member {number} SymbolID
         * @memberof GameMsg_WLYC.WLZB_Symbol
         * @instance
         */
        WLZB_Symbol.prototype.SymbolID = 0;

        /**
         * WLZB_Symbol SymbolName.
         * @member {string} SymbolName
         * @memberof GameMsg_WLYC.WLZB_Symbol
         * @instance
         */
        WLZB_Symbol.prototype.SymbolName = "";

        /**
         * Creates a new WLZB_Symbol instance using the specified properties.
         * @function create
         * @memberof GameMsg_WLYC.WLZB_Symbol
         * @static
         * @param {GameMsg_WLYC.IWLZB_Symbol=} [properties] Properties to set
         * @returns {GameMsg_WLYC.WLZB_Symbol} WLZB_Symbol instance
         */
        WLZB_Symbol.create = function create(properties) {
            return new WLZB_Symbol(properties);
        };

        /**
         * Encodes the specified WLZB_Symbol message. Does not implicitly {@link GameMsg_WLYC.WLZB_Symbol.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_WLYC.WLZB_Symbol
         * @static
         * @param {GameMsg_WLYC.IWLZB_Symbol} message WLZB_Symbol message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WLZB_Symbol.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.SymbolID != null && message.hasOwnProperty("SymbolID"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.SymbolID);
            if (message.SymbolName != null && message.hasOwnProperty("SymbolName"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.SymbolName);
            return writer;
        };

        /**
         * Encodes the specified WLZB_Symbol message, length delimited. Does not implicitly {@link GameMsg_WLYC.WLZB_Symbol.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_WLYC.WLZB_Symbol
         * @static
         * @param {GameMsg_WLYC.IWLZB_Symbol} message WLZB_Symbol message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WLZB_Symbol.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a WLZB_Symbol message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_WLYC.WLZB_Symbol
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_WLYC.WLZB_Symbol} WLZB_Symbol
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WLZB_Symbol.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_WLYC.WLZB_Symbol();
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
         * Decodes a WLZB_Symbol message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_WLYC.WLZB_Symbol
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_WLYC.WLZB_Symbol} WLZB_Symbol
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WLZB_Symbol.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a WLZB_Symbol message.
         * @function verify
         * @memberof GameMsg_WLYC.WLZB_Symbol
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        WLZB_Symbol.verify = function verify(message) {
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
         * Creates a WLZB_Symbol message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_WLYC.WLZB_Symbol
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_WLYC.WLZB_Symbol} WLZB_Symbol
         */
        WLZB_Symbol.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_WLYC.WLZB_Symbol)
                return object;
            var message = new $root.GameMsg_WLYC.WLZB_Symbol();
            if (object.SymbolID != null)
                message.SymbolID = object.SymbolID | 0;
            if (object.SymbolName != null)
                message.SymbolName = String(object.SymbolName);
            return message;
        };

        /**
         * Creates a plain object from a WLZB_Symbol message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_WLYC.WLZB_Symbol
         * @static
         * @param {GameMsg_WLYC.WLZB_Symbol} message WLZB_Symbol
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        WLZB_Symbol.toObject = function toObject(message, options) {
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
         * Converts this WLZB_Symbol to JSON.
         * @function toJSON
         * @memberof GameMsg_WLYC.WLZB_Symbol
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        WLZB_Symbol.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return WLZB_Symbol;
    })();

    GameMsg_WLYC.WLZB_PayLine = (function() {

        /**
         * Properties of a WLZB_PayLine.
         * @memberof GameMsg_WLYC
         * @interface IWLZB_PayLine
         * @property {number|null} [PayLineID] WLZB_PayLine PayLineID
         * @property {Array.<GameMsg_WLYC.IWLZB_ReelPosition>|null} [Positions] WLZB_PayLine Positions
         */

        /**
         * Constructs a new WLZB_PayLine.
         * @memberof GameMsg_WLYC
         * @classdesc Represents a WLZB_PayLine.
         * @implements IWLZB_PayLine
         * @constructor
         * @param {GameMsg_WLYC.IWLZB_PayLine=} [properties] Properties to set
         */
        function WLZB_PayLine(properties) {
            this.Positions = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * WLZB_PayLine PayLineID.
         * @member {number} PayLineID
         * @memberof GameMsg_WLYC.WLZB_PayLine
         * @instance
         */
        WLZB_PayLine.prototype.PayLineID = 0;

        /**
         * WLZB_PayLine Positions.
         * @member {Array.<GameMsg_WLYC.IWLZB_ReelPosition>} Positions
         * @memberof GameMsg_WLYC.WLZB_PayLine
         * @instance
         */
        WLZB_PayLine.prototype.Positions = $util.emptyArray;

        /**
         * Creates a new WLZB_PayLine instance using the specified properties.
         * @function create
         * @memberof GameMsg_WLYC.WLZB_PayLine
         * @static
         * @param {GameMsg_WLYC.IWLZB_PayLine=} [properties] Properties to set
         * @returns {GameMsg_WLYC.WLZB_PayLine} WLZB_PayLine instance
         */
        WLZB_PayLine.create = function create(properties) {
            return new WLZB_PayLine(properties);
        };

        /**
         * Encodes the specified WLZB_PayLine message. Does not implicitly {@link GameMsg_WLYC.WLZB_PayLine.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_WLYC.WLZB_PayLine
         * @static
         * @param {GameMsg_WLYC.IWLZB_PayLine} message WLZB_PayLine message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WLZB_PayLine.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.PayLineID != null && message.hasOwnProperty("PayLineID"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.PayLineID);
            if (message.Positions != null && message.Positions.length)
                for (var i = 0; i < message.Positions.length; ++i)
                    $root.GameMsg_WLYC.WLZB_ReelPosition.encode(message.Positions[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified WLZB_PayLine message, length delimited. Does not implicitly {@link GameMsg_WLYC.WLZB_PayLine.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_WLYC.WLZB_PayLine
         * @static
         * @param {GameMsg_WLYC.IWLZB_PayLine} message WLZB_PayLine message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WLZB_PayLine.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a WLZB_PayLine message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_WLYC.WLZB_PayLine
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_WLYC.WLZB_PayLine} WLZB_PayLine
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WLZB_PayLine.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_WLYC.WLZB_PayLine();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.PayLineID = reader.int32();
                    break;
                case 2:
                    if (!(message.Positions && message.Positions.length))
                        message.Positions = [];
                    message.Positions.push($root.GameMsg_WLYC.WLZB_ReelPosition.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a WLZB_PayLine message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_WLYC.WLZB_PayLine
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_WLYC.WLZB_PayLine} WLZB_PayLine
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WLZB_PayLine.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a WLZB_PayLine message.
         * @function verify
         * @memberof GameMsg_WLYC.WLZB_PayLine
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        WLZB_PayLine.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.PayLineID != null && message.hasOwnProperty("PayLineID"))
                if (!$util.isInteger(message.PayLineID))
                    return "PayLineID: integer expected";
            if (message.Positions != null && message.hasOwnProperty("Positions")) {
                if (!Array.isArray(message.Positions))
                    return "Positions: array expected";
                for (var i = 0; i < message.Positions.length; ++i) {
                    var error = $root.GameMsg_WLYC.WLZB_ReelPosition.verify(message.Positions[i]);
                    if (error)
                        return "Positions." + error;
                }
            }
            return null;
        };

        /**
         * Creates a WLZB_PayLine message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_WLYC.WLZB_PayLine
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_WLYC.WLZB_PayLine} WLZB_PayLine
         */
        WLZB_PayLine.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_WLYC.WLZB_PayLine)
                return object;
            var message = new $root.GameMsg_WLYC.WLZB_PayLine();
            if (object.PayLineID != null)
                message.PayLineID = object.PayLineID | 0;
            if (object.Positions) {
                if (!Array.isArray(object.Positions))
                    throw TypeError(".GameMsg_WLYC.WLZB_PayLine.Positions: array expected");
                message.Positions = [];
                for (var i = 0; i < object.Positions.length; ++i) {
                    if (typeof object.Positions[i] !== "object")
                        throw TypeError(".GameMsg_WLYC.WLZB_PayLine.Positions: object expected");
                    message.Positions[i] = $root.GameMsg_WLYC.WLZB_ReelPosition.fromObject(object.Positions[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a WLZB_PayLine message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_WLYC.WLZB_PayLine
         * @static
         * @param {GameMsg_WLYC.WLZB_PayLine} message WLZB_PayLine
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        WLZB_PayLine.toObject = function toObject(message, options) {
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
                    object.Positions[j] = $root.GameMsg_WLYC.WLZB_ReelPosition.toObject(message.Positions[j], options);
            }
            return object;
        };

        /**
         * Converts this WLZB_PayLine to JSON.
         * @function toJSON
         * @memberof GameMsg_WLYC.WLZB_PayLine
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        WLZB_PayLine.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return WLZB_PayLine;
    })();

    GameMsg_WLYC.WLZB_PayGroup = (function() {

        /**
         * Properties of a WLZB_PayGroup.
         * @memberof GameMsg_WLYC
         * @interface IWLZB_PayGroup
         * @property {GameMsg_WLYC.IWLZB_PayLine|null} [PayLines] WLZB_PayGroup PayLines
         * @property {number|Long|null} [WinMoney] WLZB_PayGroup WinMoney
         * @property {string|null} [LinkType] WLZB_PayGroup LinkType
         * @property {number|null} [Count] WLZB_PayGroup Count
         * @property {Array.<GameMsg_WLYC.IWLZB_ReelPosition>|null} [BlinkPositions] WLZB_PayGroup BlinkPositions
         * @property {number|null} [Way] WLZB_PayGroup Way
         * @property {number|null} [Multi] WLZB_PayGroup Multi
         */

        /**
         * Constructs a new WLZB_PayGroup.
         * @memberof GameMsg_WLYC
         * @classdesc Represents a WLZB_PayGroup.
         * @implements IWLZB_PayGroup
         * @constructor
         * @param {GameMsg_WLYC.IWLZB_PayGroup=} [properties] Properties to set
         */
        function WLZB_PayGroup(properties) {
            this.BlinkPositions = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * WLZB_PayGroup PayLines.
         * @member {GameMsg_WLYC.IWLZB_PayLine|null|undefined} PayLines
         * @memberof GameMsg_WLYC.WLZB_PayGroup
         * @instance
         */
        WLZB_PayGroup.prototype.PayLines = null;

        /**
         * WLZB_PayGroup WinMoney.
         * @member {number|Long} WinMoney
         * @memberof GameMsg_WLYC.WLZB_PayGroup
         * @instance
         */
        WLZB_PayGroup.prototype.WinMoney = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * WLZB_PayGroup LinkType.
         * @member {string} LinkType
         * @memberof GameMsg_WLYC.WLZB_PayGroup
         * @instance
         */
        WLZB_PayGroup.prototype.LinkType = "";

        /**
         * WLZB_PayGroup Count.
         * @member {number} Count
         * @memberof GameMsg_WLYC.WLZB_PayGroup
         * @instance
         */
        WLZB_PayGroup.prototype.Count = 0;

        /**
         * WLZB_PayGroup BlinkPositions.
         * @member {Array.<GameMsg_WLYC.IWLZB_ReelPosition>} BlinkPositions
         * @memberof GameMsg_WLYC.WLZB_PayGroup
         * @instance
         */
        WLZB_PayGroup.prototype.BlinkPositions = $util.emptyArray;

        /**
         * WLZB_PayGroup Way.
         * @member {number} Way
         * @memberof GameMsg_WLYC.WLZB_PayGroup
         * @instance
         */
        WLZB_PayGroup.prototype.Way = 0;

        /**
         * WLZB_PayGroup Multi.
         * @member {number} Multi
         * @memberof GameMsg_WLYC.WLZB_PayGroup
         * @instance
         */
        WLZB_PayGroup.prototype.Multi = 0;

        /**
         * Creates a new WLZB_PayGroup instance using the specified properties.
         * @function create
         * @memberof GameMsg_WLYC.WLZB_PayGroup
         * @static
         * @param {GameMsg_WLYC.IWLZB_PayGroup=} [properties] Properties to set
         * @returns {GameMsg_WLYC.WLZB_PayGroup} WLZB_PayGroup instance
         */
        WLZB_PayGroup.create = function create(properties) {
            return new WLZB_PayGroup(properties);
        };

        /**
         * Encodes the specified WLZB_PayGroup message. Does not implicitly {@link GameMsg_WLYC.WLZB_PayGroup.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_WLYC.WLZB_PayGroup
         * @static
         * @param {GameMsg_WLYC.IWLZB_PayGroup} message WLZB_PayGroup message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WLZB_PayGroup.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.PayLines != null && message.hasOwnProperty("PayLines"))
                $root.GameMsg_WLYC.WLZB_PayLine.encode(message.PayLines, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.WinMoney != null && message.hasOwnProperty("WinMoney"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.WinMoney);
            if (message.LinkType != null && message.hasOwnProperty("LinkType"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.LinkType);
            if (message.Count != null && message.hasOwnProperty("Count"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.Count);
            if (message.BlinkPositions != null && message.BlinkPositions.length)
                for (var i = 0; i < message.BlinkPositions.length; ++i)
                    $root.GameMsg_WLYC.WLZB_ReelPosition.encode(message.BlinkPositions[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            if (message.Way != null && message.hasOwnProperty("Way"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.Way);
            if (message.Multi != null && message.hasOwnProperty("Multi"))
                writer.uint32(/* id 7, wireType 0 =*/56).int32(message.Multi);
            return writer;
        };

        /**
         * Encodes the specified WLZB_PayGroup message, length delimited. Does not implicitly {@link GameMsg_WLYC.WLZB_PayGroup.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_WLYC.WLZB_PayGroup
         * @static
         * @param {GameMsg_WLYC.IWLZB_PayGroup} message WLZB_PayGroup message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WLZB_PayGroup.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a WLZB_PayGroup message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_WLYC.WLZB_PayGroup
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_WLYC.WLZB_PayGroup} WLZB_PayGroup
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WLZB_PayGroup.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_WLYC.WLZB_PayGroup();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.PayLines = $root.GameMsg_WLYC.WLZB_PayLine.decode(reader, reader.uint32());
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
                    message.BlinkPositions.push($root.GameMsg_WLYC.WLZB_ReelPosition.decode(reader, reader.uint32()));
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
         * Decodes a WLZB_PayGroup message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_WLYC.WLZB_PayGroup
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_WLYC.WLZB_PayGroup} WLZB_PayGroup
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WLZB_PayGroup.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a WLZB_PayGroup message.
         * @function verify
         * @memberof GameMsg_WLYC.WLZB_PayGroup
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        WLZB_PayGroup.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.PayLines != null && message.hasOwnProperty("PayLines")) {
                var error = $root.GameMsg_WLYC.WLZB_PayLine.verify(message.PayLines);
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
                    var error = $root.GameMsg_WLYC.WLZB_ReelPosition.verify(message.BlinkPositions[i]);
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
         * Creates a WLZB_PayGroup message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_WLYC.WLZB_PayGroup
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_WLYC.WLZB_PayGroup} WLZB_PayGroup
         */
        WLZB_PayGroup.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_WLYC.WLZB_PayGroup)
                return object;
            var message = new $root.GameMsg_WLYC.WLZB_PayGroup();
            if (object.PayLines != null) {
                if (typeof object.PayLines !== "object")
                    throw TypeError(".GameMsg_WLYC.WLZB_PayGroup.PayLines: object expected");
                message.PayLines = $root.GameMsg_WLYC.WLZB_PayLine.fromObject(object.PayLines);
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
                    throw TypeError(".GameMsg_WLYC.WLZB_PayGroup.BlinkPositions: array expected");
                message.BlinkPositions = [];
                for (var i = 0; i < object.BlinkPositions.length; ++i) {
                    if (typeof object.BlinkPositions[i] !== "object")
                        throw TypeError(".GameMsg_WLYC.WLZB_PayGroup.BlinkPositions: object expected");
                    message.BlinkPositions[i] = $root.GameMsg_WLYC.WLZB_ReelPosition.fromObject(object.BlinkPositions[i]);
                }
            }
            if (object.Way != null)
                message.Way = object.Way | 0;
            if (object.Multi != null)
                message.Multi = object.Multi | 0;
            return message;
        };

        /**
         * Creates a plain object from a WLZB_PayGroup message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_WLYC.WLZB_PayGroup
         * @static
         * @param {GameMsg_WLYC.WLZB_PayGroup} message WLZB_PayGroup
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        WLZB_PayGroup.toObject = function toObject(message, options) {
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
                object.PayLines = $root.GameMsg_WLYC.WLZB_PayLine.toObject(message.PayLines, options);
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
                    object.BlinkPositions[j] = $root.GameMsg_WLYC.WLZB_ReelPosition.toObject(message.BlinkPositions[j], options);
            }
            if (message.Way != null && message.hasOwnProperty("Way"))
                object.Way = message.Way;
            if (message.Multi != null && message.hasOwnProperty("Multi"))
                object.Multi = message.Multi;
            return object;
        };

        /**
         * Converts this WLZB_PayGroup to JSON.
         * @function toJSON
         * @memberof GameMsg_WLYC.WLZB_PayGroup
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        WLZB_PayGroup.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return WLZB_PayGroup;
    })();

    GameMsg_WLYC.WLZB_SymbolPayTable = (function() {

        /**
         * Properties of a WLZB_SymbolPayTable.
         * @memberof GameMsg_WLYC
         * @interface IWLZB_SymbolPayTable
         * @property {GameMsg_WLYC.IWLZB_Symbol|null} [Symbol] WLZB_SymbolPayTable Symbol
         * @property {number|null} [Count] WLZB_SymbolPayTable Count
         * @property {string|null} [Type] WLZB_SymbolPayTable Type
         * @property {number|null} [Payout] WLZB_SymbolPayTable Payout
         * @property {string|null} [Title] WLZB_SymbolPayTable Title
         * @property {string|null} [Desc] WLZB_SymbolPayTable Desc
         */

        /**
         * Constructs a new WLZB_SymbolPayTable.
         * @memberof GameMsg_WLYC
         * @classdesc Represents a WLZB_SymbolPayTable.
         * @implements IWLZB_SymbolPayTable
         * @constructor
         * @param {GameMsg_WLYC.IWLZB_SymbolPayTable=} [properties] Properties to set
         */
        function WLZB_SymbolPayTable(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * WLZB_SymbolPayTable Symbol.
         * @member {GameMsg_WLYC.IWLZB_Symbol|null|undefined} Symbol
         * @memberof GameMsg_WLYC.WLZB_SymbolPayTable
         * @instance
         */
        WLZB_SymbolPayTable.prototype.Symbol = null;

        /**
         * WLZB_SymbolPayTable Count.
         * @member {number} Count
         * @memberof GameMsg_WLYC.WLZB_SymbolPayTable
         * @instance
         */
        WLZB_SymbolPayTable.prototype.Count = 0;

        /**
         * WLZB_SymbolPayTable Type.
         * @member {string} Type
         * @memberof GameMsg_WLYC.WLZB_SymbolPayTable
         * @instance
         */
        WLZB_SymbolPayTable.prototype.Type = "";

        /**
         * WLZB_SymbolPayTable Payout.
         * @member {number} Payout
         * @memberof GameMsg_WLYC.WLZB_SymbolPayTable
         * @instance
         */
        WLZB_SymbolPayTable.prototype.Payout = 0;

        /**
         * WLZB_SymbolPayTable Title.
         * @member {string} Title
         * @memberof GameMsg_WLYC.WLZB_SymbolPayTable
         * @instance
         */
        WLZB_SymbolPayTable.prototype.Title = "";

        /**
         * WLZB_SymbolPayTable Desc.
         * @member {string} Desc
         * @memberof GameMsg_WLYC.WLZB_SymbolPayTable
         * @instance
         */
        WLZB_SymbolPayTable.prototype.Desc = "";

        /**
         * Creates a new WLZB_SymbolPayTable instance using the specified properties.
         * @function create
         * @memberof GameMsg_WLYC.WLZB_SymbolPayTable
         * @static
         * @param {GameMsg_WLYC.IWLZB_SymbolPayTable=} [properties] Properties to set
         * @returns {GameMsg_WLYC.WLZB_SymbolPayTable} WLZB_SymbolPayTable instance
         */
        WLZB_SymbolPayTable.create = function create(properties) {
            return new WLZB_SymbolPayTable(properties);
        };

        /**
         * Encodes the specified WLZB_SymbolPayTable message. Does not implicitly {@link GameMsg_WLYC.WLZB_SymbolPayTable.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_WLYC.WLZB_SymbolPayTable
         * @static
         * @param {GameMsg_WLYC.IWLZB_SymbolPayTable} message WLZB_SymbolPayTable message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WLZB_SymbolPayTable.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Symbol != null && message.hasOwnProperty("Symbol"))
                $root.GameMsg_WLYC.WLZB_Symbol.encode(message.Symbol, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
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
         * Encodes the specified WLZB_SymbolPayTable message, length delimited. Does not implicitly {@link GameMsg_WLYC.WLZB_SymbolPayTable.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_WLYC.WLZB_SymbolPayTable
         * @static
         * @param {GameMsg_WLYC.IWLZB_SymbolPayTable} message WLZB_SymbolPayTable message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WLZB_SymbolPayTable.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a WLZB_SymbolPayTable message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_WLYC.WLZB_SymbolPayTable
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_WLYC.WLZB_SymbolPayTable} WLZB_SymbolPayTable
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WLZB_SymbolPayTable.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_WLYC.WLZB_SymbolPayTable();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Symbol = $root.GameMsg_WLYC.WLZB_Symbol.decode(reader, reader.uint32());
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
         * Decodes a WLZB_SymbolPayTable message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_WLYC.WLZB_SymbolPayTable
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_WLYC.WLZB_SymbolPayTable} WLZB_SymbolPayTable
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WLZB_SymbolPayTable.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a WLZB_SymbolPayTable message.
         * @function verify
         * @memberof GameMsg_WLYC.WLZB_SymbolPayTable
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        WLZB_SymbolPayTable.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Symbol != null && message.hasOwnProperty("Symbol")) {
                var error = $root.GameMsg_WLYC.WLZB_Symbol.verify(message.Symbol);
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
         * Creates a WLZB_SymbolPayTable message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_WLYC.WLZB_SymbolPayTable
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_WLYC.WLZB_SymbolPayTable} WLZB_SymbolPayTable
         */
        WLZB_SymbolPayTable.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_WLYC.WLZB_SymbolPayTable)
                return object;
            var message = new $root.GameMsg_WLYC.WLZB_SymbolPayTable();
            if (object.Symbol != null) {
                if (typeof object.Symbol !== "object")
                    throw TypeError(".GameMsg_WLYC.WLZB_SymbolPayTable.Symbol: object expected");
                message.Symbol = $root.GameMsg_WLYC.WLZB_Symbol.fromObject(object.Symbol);
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
         * Creates a plain object from a WLZB_SymbolPayTable message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_WLYC.WLZB_SymbolPayTable
         * @static
         * @param {GameMsg_WLYC.WLZB_SymbolPayTable} message WLZB_SymbolPayTable
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        WLZB_SymbolPayTable.toObject = function toObject(message, options) {
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
                object.Symbol = $root.GameMsg_WLYC.WLZB_Symbol.toObject(message.Symbol, options);
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
         * Converts this WLZB_SymbolPayTable to JSON.
         * @function toJSON
         * @memberof GameMsg_WLYC.WLZB_SymbolPayTable
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        WLZB_SymbolPayTable.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return WLZB_SymbolPayTable;
    })();

    GameMsg_WLYC.WLZB_GameLog = (function() {

        /**
         * Properties of a WLZB_GameLog.
         * @memberof GameMsg_WLYC
         * @interface IWLZB_GameLog
         * @property {number|null} [RowNum] WLZB_GameLog RowNum
         * @property {string|null} [CreateTime] WLZB_GameLog CreateTime
         * @property {number|Long|null} [OrderID] WLZB_GameLog OrderID
         * @property {number|Long|null} [BetMoney] WLZB_GameLog BetMoney
         * @property {number|Long|null} [Profit] WLZB_GameLog Profit
         */

        /**
         * Constructs a new WLZB_GameLog.
         * @memberof GameMsg_WLYC
         * @classdesc Represents a WLZB_GameLog.
         * @implements IWLZB_GameLog
         * @constructor
         * @param {GameMsg_WLYC.IWLZB_GameLog=} [properties] Properties to set
         */
        function WLZB_GameLog(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * WLZB_GameLog RowNum.
         * @member {number} RowNum
         * @memberof GameMsg_WLYC.WLZB_GameLog
         * @instance
         */
        WLZB_GameLog.prototype.RowNum = 0;

        /**
         * WLZB_GameLog CreateTime.
         * @member {string} CreateTime
         * @memberof GameMsg_WLYC.WLZB_GameLog
         * @instance
         */
        WLZB_GameLog.prototype.CreateTime = "";

        /**
         * WLZB_GameLog OrderID.
         * @member {number|Long} OrderID
         * @memberof GameMsg_WLYC.WLZB_GameLog
         * @instance
         */
        WLZB_GameLog.prototype.OrderID = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * WLZB_GameLog BetMoney.
         * @member {number|Long} BetMoney
         * @memberof GameMsg_WLYC.WLZB_GameLog
         * @instance
         */
        WLZB_GameLog.prototype.BetMoney = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * WLZB_GameLog Profit.
         * @member {number|Long} Profit
         * @memberof GameMsg_WLYC.WLZB_GameLog
         * @instance
         */
        WLZB_GameLog.prototype.Profit = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new WLZB_GameLog instance using the specified properties.
         * @function create
         * @memberof GameMsg_WLYC.WLZB_GameLog
         * @static
         * @param {GameMsg_WLYC.IWLZB_GameLog=} [properties] Properties to set
         * @returns {GameMsg_WLYC.WLZB_GameLog} WLZB_GameLog instance
         */
        WLZB_GameLog.create = function create(properties) {
            return new WLZB_GameLog(properties);
        };

        /**
         * Encodes the specified WLZB_GameLog message. Does not implicitly {@link GameMsg_WLYC.WLZB_GameLog.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_WLYC.WLZB_GameLog
         * @static
         * @param {GameMsg_WLYC.IWLZB_GameLog} message WLZB_GameLog message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WLZB_GameLog.encode = function encode(message, writer) {
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
         * Encodes the specified WLZB_GameLog message, length delimited. Does not implicitly {@link GameMsg_WLYC.WLZB_GameLog.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_WLYC.WLZB_GameLog
         * @static
         * @param {GameMsg_WLYC.IWLZB_GameLog} message WLZB_GameLog message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WLZB_GameLog.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a WLZB_GameLog message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_WLYC.WLZB_GameLog
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_WLYC.WLZB_GameLog} WLZB_GameLog
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WLZB_GameLog.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_WLYC.WLZB_GameLog();
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
         * Decodes a WLZB_GameLog message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_WLYC.WLZB_GameLog
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_WLYC.WLZB_GameLog} WLZB_GameLog
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WLZB_GameLog.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a WLZB_GameLog message.
         * @function verify
         * @memberof GameMsg_WLYC.WLZB_GameLog
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        WLZB_GameLog.verify = function verify(message) {
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
         * Creates a WLZB_GameLog message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_WLYC.WLZB_GameLog
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_WLYC.WLZB_GameLog} WLZB_GameLog
         */
        WLZB_GameLog.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_WLYC.WLZB_GameLog)
                return object;
            var message = new $root.GameMsg_WLYC.WLZB_GameLog();
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
         * Creates a plain object from a WLZB_GameLog message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_WLYC.WLZB_GameLog
         * @static
         * @param {GameMsg_WLYC.WLZB_GameLog} message WLZB_GameLog
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        WLZB_GameLog.toObject = function toObject(message, options) {
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
         * Converts this WLZB_GameLog to JSON.
         * @function toJSON
         * @memberof GameMsg_WLYC.WLZB_GameLog
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        WLZB_GameLog.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return WLZB_GameLog;
    })();

    GameMsg_WLYC.WLZB_FreeGameInfo = (function() {

        /**
         * Properties of a WLZB_FreeGameInfo.
         * @memberof GameMsg_WLYC
         * @interface IWLZB_FreeGameInfo
         * @property {number|null} [ID] WLZB_FreeGameInfo ID
         * @property {number|null} [Count] WLZB_FreeGameInfo Count
         * @property {Array.<GameMsg_WLYC.IWLZB_ReelSetting>|null} [ReelSetting] WLZB_FreeGameInfo ReelSetting
         */

        /**
         * Constructs a new WLZB_FreeGameInfo.
         * @memberof GameMsg_WLYC
         * @classdesc Represents a WLZB_FreeGameInfo.
         * @implements IWLZB_FreeGameInfo
         * @constructor
         * @param {GameMsg_WLYC.IWLZB_FreeGameInfo=} [properties] Properties to set
         */
        function WLZB_FreeGameInfo(properties) {
            this.ReelSetting = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * WLZB_FreeGameInfo ID.
         * @member {number} ID
         * @memberof GameMsg_WLYC.WLZB_FreeGameInfo
         * @instance
         */
        WLZB_FreeGameInfo.prototype.ID = 0;

        /**
         * WLZB_FreeGameInfo Count.
         * @member {number} Count
         * @memberof GameMsg_WLYC.WLZB_FreeGameInfo
         * @instance
         */
        WLZB_FreeGameInfo.prototype.Count = 0;

        /**
         * WLZB_FreeGameInfo ReelSetting.
         * @member {Array.<GameMsg_WLYC.IWLZB_ReelSetting>} ReelSetting
         * @memberof GameMsg_WLYC.WLZB_FreeGameInfo
         * @instance
         */
        WLZB_FreeGameInfo.prototype.ReelSetting = $util.emptyArray;

        /**
         * Creates a new WLZB_FreeGameInfo instance using the specified properties.
         * @function create
         * @memberof GameMsg_WLYC.WLZB_FreeGameInfo
         * @static
         * @param {GameMsg_WLYC.IWLZB_FreeGameInfo=} [properties] Properties to set
         * @returns {GameMsg_WLYC.WLZB_FreeGameInfo} WLZB_FreeGameInfo instance
         */
        WLZB_FreeGameInfo.create = function create(properties) {
            return new WLZB_FreeGameInfo(properties);
        };

        /**
         * Encodes the specified WLZB_FreeGameInfo message. Does not implicitly {@link GameMsg_WLYC.WLZB_FreeGameInfo.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_WLYC.WLZB_FreeGameInfo
         * @static
         * @param {GameMsg_WLYC.IWLZB_FreeGameInfo} message WLZB_FreeGameInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WLZB_FreeGameInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.ID != null && message.hasOwnProperty("ID"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.ID);
            if (message.Count != null && message.hasOwnProperty("Count"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.Count);
            if (message.ReelSetting != null && message.ReelSetting.length)
                for (var i = 0; i < message.ReelSetting.length; ++i)
                    $root.GameMsg_WLYC.WLZB_ReelSetting.encode(message.ReelSetting[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified WLZB_FreeGameInfo message, length delimited. Does not implicitly {@link GameMsg_WLYC.WLZB_FreeGameInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_WLYC.WLZB_FreeGameInfo
         * @static
         * @param {GameMsg_WLYC.IWLZB_FreeGameInfo} message WLZB_FreeGameInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WLZB_FreeGameInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a WLZB_FreeGameInfo message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_WLYC.WLZB_FreeGameInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_WLYC.WLZB_FreeGameInfo} WLZB_FreeGameInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WLZB_FreeGameInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_WLYC.WLZB_FreeGameInfo();
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
                    message.ReelSetting.push($root.GameMsg_WLYC.WLZB_ReelSetting.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a WLZB_FreeGameInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_WLYC.WLZB_FreeGameInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_WLYC.WLZB_FreeGameInfo} WLZB_FreeGameInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WLZB_FreeGameInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a WLZB_FreeGameInfo message.
         * @function verify
         * @memberof GameMsg_WLYC.WLZB_FreeGameInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        WLZB_FreeGameInfo.verify = function verify(message) {
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
                    var error = $root.GameMsg_WLYC.WLZB_ReelSetting.verify(message.ReelSetting[i]);
                    if (error)
                        return "ReelSetting." + error;
                }
            }
            return null;
        };

        /**
         * Creates a WLZB_FreeGameInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_WLYC.WLZB_FreeGameInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_WLYC.WLZB_FreeGameInfo} WLZB_FreeGameInfo
         */
        WLZB_FreeGameInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_WLYC.WLZB_FreeGameInfo)
                return object;
            var message = new $root.GameMsg_WLYC.WLZB_FreeGameInfo();
            if (object.ID != null)
                message.ID = object.ID | 0;
            if (object.Count != null)
                message.Count = object.Count | 0;
            if (object.ReelSetting) {
                if (!Array.isArray(object.ReelSetting))
                    throw TypeError(".GameMsg_WLYC.WLZB_FreeGameInfo.ReelSetting: array expected");
                message.ReelSetting = [];
                for (var i = 0; i < object.ReelSetting.length; ++i) {
                    if (typeof object.ReelSetting[i] !== "object")
                        throw TypeError(".GameMsg_WLYC.WLZB_FreeGameInfo.ReelSetting: object expected");
                    message.ReelSetting[i] = $root.GameMsg_WLYC.WLZB_ReelSetting.fromObject(object.ReelSetting[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a WLZB_FreeGameInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_WLYC.WLZB_FreeGameInfo
         * @static
         * @param {GameMsg_WLYC.WLZB_FreeGameInfo} message WLZB_FreeGameInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        WLZB_FreeGameInfo.toObject = function toObject(message, options) {
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
                    object.ReelSetting[j] = $root.GameMsg_WLYC.WLZB_ReelSetting.toObject(message.ReelSetting[j], options);
            }
            return object;
        };

        /**
         * Converts this WLZB_FreeGameInfo to JSON.
         * @function toJSON
         * @memberof GameMsg_WLYC.WLZB_FreeGameInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        WLZB_FreeGameInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return WLZB_FreeGameInfo;
    })();

    GameMsg_WLYC.WLZB_BonusGameRecord = (function() {

        /**
         * Properties of a WLZB_BonusGameRecord.
         * @memberof GameMsg_WLYC
         * @interface IWLZB_BonusGameRecord
         * @property {number|null} [ID] WLZB_BonusGameRecord ID
         * @property {number|null} [Location] WLZB_BonusGameRecord Location
         * @property {number|Long|null} [RewardValue] WLZB_BonusGameRecord RewardValue
         */

        /**
         * Constructs a new WLZB_BonusGameRecord.
         * @memberof GameMsg_WLYC
         * @classdesc Represents a WLZB_BonusGameRecord.
         * @implements IWLZB_BonusGameRecord
         * @constructor
         * @param {GameMsg_WLYC.IWLZB_BonusGameRecord=} [properties] Properties to set
         */
        function WLZB_BonusGameRecord(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * WLZB_BonusGameRecord ID.
         * @member {number} ID
         * @memberof GameMsg_WLYC.WLZB_BonusGameRecord
         * @instance
         */
        WLZB_BonusGameRecord.prototype.ID = 0;

        /**
         * WLZB_BonusGameRecord Location.
         * @member {number} Location
         * @memberof GameMsg_WLYC.WLZB_BonusGameRecord
         * @instance
         */
        WLZB_BonusGameRecord.prototype.Location = 0;

        /**
         * WLZB_BonusGameRecord RewardValue.
         * @member {number|Long} RewardValue
         * @memberof GameMsg_WLYC.WLZB_BonusGameRecord
         * @instance
         */
        WLZB_BonusGameRecord.prototype.RewardValue = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new WLZB_BonusGameRecord instance using the specified properties.
         * @function create
         * @memberof GameMsg_WLYC.WLZB_BonusGameRecord
         * @static
         * @param {GameMsg_WLYC.IWLZB_BonusGameRecord=} [properties] Properties to set
         * @returns {GameMsg_WLYC.WLZB_BonusGameRecord} WLZB_BonusGameRecord instance
         */
        WLZB_BonusGameRecord.create = function create(properties) {
            return new WLZB_BonusGameRecord(properties);
        };

        /**
         * Encodes the specified WLZB_BonusGameRecord message. Does not implicitly {@link GameMsg_WLYC.WLZB_BonusGameRecord.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_WLYC.WLZB_BonusGameRecord
         * @static
         * @param {GameMsg_WLYC.IWLZB_BonusGameRecord} message WLZB_BonusGameRecord message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WLZB_BonusGameRecord.encode = function encode(message, writer) {
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
         * Encodes the specified WLZB_BonusGameRecord message, length delimited. Does not implicitly {@link GameMsg_WLYC.WLZB_BonusGameRecord.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_WLYC.WLZB_BonusGameRecord
         * @static
         * @param {GameMsg_WLYC.IWLZB_BonusGameRecord} message WLZB_BonusGameRecord message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WLZB_BonusGameRecord.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a WLZB_BonusGameRecord message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_WLYC.WLZB_BonusGameRecord
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_WLYC.WLZB_BonusGameRecord} WLZB_BonusGameRecord
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WLZB_BonusGameRecord.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_WLYC.WLZB_BonusGameRecord();
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
         * Decodes a WLZB_BonusGameRecord message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_WLYC.WLZB_BonusGameRecord
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_WLYC.WLZB_BonusGameRecord} WLZB_BonusGameRecord
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WLZB_BonusGameRecord.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a WLZB_BonusGameRecord message.
         * @function verify
         * @memberof GameMsg_WLYC.WLZB_BonusGameRecord
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        WLZB_BonusGameRecord.verify = function verify(message) {
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
         * Creates a WLZB_BonusGameRecord message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_WLYC.WLZB_BonusGameRecord
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_WLYC.WLZB_BonusGameRecord} WLZB_BonusGameRecord
         */
        WLZB_BonusGameRecord.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_WLYC.WLZB_BonusGameRecord)
                return object;
            var message = new $root.GameMsg_WLYC.WLZB_BonusGameRecord();
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
         * Creates a plain object from a WLZB_BonusGameRecord message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_WLYC.WLZB_BonusGameRecord
         * @static
         * @param {GameMsg_WLYC.WLZB_BonusGameRecord} message WLZB_BonusGameRecord
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        WLZB_BonusGameRecord.toObject = function toObject(message, options) {
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
         * Converts this WLZB_BonusGameRecord to JSON.
         * @function toJSON
         * @memberof GameMsg_WLYC.WLZB_BonusGameRecord
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        WLZB_BonusGameRecord.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return WLZB_BonusGameRecord;
    })();

    GameMsg_WLYC.WLZB_JackpotInfo = (function() {

        /**
         * Properties of a WLZB_JackpotInfo.
         * @memberof GameMsg_WLYC
         * @interface IWLZB_JackpotInfo
         * @property {number|Long|null} [Money] WLZB_JackpotInfo Money
         * @property {string|null} [Name] WLZB_JackpotInfo Name
         * @property {number|null} [ID] WLZB_JackpotInfo ID
         */

        /**
         * Constructs a new WLZB_JackpotInfo.
         * @memberof GameMsg_WLYC
         * @classdesc Represents a WLZB_JackpotInfo.
         * @implements IWLZB_JackpotInfo
         * @constructor
         * @param {GameMsg_WLYC.IWLZB_JackpotInfo=} [properties] Properties to set
         */
        function WLZB_JackpotInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * WLZB_JackpotInfo Money.
         * @member {number|Long} Money
         * @memberof GameMsg_WLYC.WLZB_JackpotInfo
         * @instance
         */
        WLZB_JackpotInfo.prototype.Money = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * WLZB_JackpotInfo Name.
         * @member {string} Name
         * @memberof GameMsg_WLYC.WLZB_JackpotInfo
         * @instance
         */
        WLZB_JackpotInfo.prototype.Name = "";

        /**
         * WLZB_JackpotInfo ID.
         * @member {number} ID
         * @memberof GameMsg_WLYC.WLZB_JackpotInfo
         * @instance
         */
        WLZB_JackpotInfo.prototype.ID = 0;

        /**
         * Creates a new WLZB_JackpotInfo instance using the specified properties.
         * @function create
         * @memberof GameMsg_WLYC.WLZB_JackpotInfo
         * @static
         * @param {GameMsg_WLYC.IWLZB_JackpotInfo=} [properties] Properties to set
         * @returns {GameMsg_WLYC.WLZB_JackpotInfo} WLZB_JackpotInfo instance
         */
        WLZB_JackpotInfo.create = function create(properties) {
            return new WLZB_JackpotInfo(properties);
        };

        /**
         * Encodes the specified WLZB_JackpotInfo message. Does not implicitly {@link GameMsg_WLYC.WLZB_JackpotInfo.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_WLYC.WLZB_JackpotInfo
         * @static
         * @param {GameMsg_WLYC.IWLZB_JackpotInfo} message WLZB_JackpotInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WLZB_JackpotInfo.encode = function encode(message, writer) {
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
         * Encodes the specified WLZB_JackpotInfo message, length delimited. Does not implicitly {@link GameMsg_WLYC.WLZB_JackpotInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_WLYC.WLZB_JackpotInfo
         * @static
         * @param {GameMsg_WLYC.IWLZB_JackpotInfo} message WLZB_JackpotInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WLZB_JackpotInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a WLZB_JackpotInfo message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_WLYC.WLZB_JackpotInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_WLYC.WLZB_JackpotInfo} WLZB_JackpotInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WLZB_JackpotInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_WLYC.WLZB_JackpotInfo();
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
         * Decodes a WLZB_JackpotInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_WLYC.WLZB_JackpotInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_WLYC.WLZB_JackpotInfo} WLZB_JackpotInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WLZB_JackpotInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a WLZB_JackpotInfo message.
         * @function verify
         * @memberof GameMsg_WLYC.WLZB_JackpotInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        WLZB_JackpotInfo.verify = function verify(message) {
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
         * Creates a WLZB_JackpotInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_WLYC.WLZB_JackpotInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_WLYC.WLZB_JackpotInfo} WLZB_JackpotInfo
         */
        WLZB_JackpotInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_WLYC.WLZB_JackpotInfo)
                return object;
            var message = new $root.GameMsg_WLYC.WLZB_JackpotInfo();
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
         * Creates a plain object from a WLZB_JackpotInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_WLYC.WLZB_JackpotInfo
         * @static
         * @param {GameMsg_WLYC.WLZB_JackpotInfo} message WLZB_JackpotInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        WLZB_JackpotInfo.toObject = function toObject(message, options) {
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
         * Converts this WLZB_JackpotInfo to JSON.
         * @function toJSON
         * @memberof GameMsg_WLYC.WLZB_JackpotInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        WLZB_JackpotInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return WLZB_JackpotInfo;
    })();

    GameMsg_WLYC.WLZB_UnitPrefix = (function() {

        /**
         * Properties of a WLZB_UnitPrefix.
         * @memberof GameMsg_WLYC
         * @interface IWLZB_UnitPrefix
         * @property {string|null} [Name] WLZB_UnitPrefix Name
         * @property {number|Long|null} [Multiple] WLZB_UnitPrefix Multiple
         */

        /**
         * Constructs a new WLZB_UnitPrefix.
         * @memberof GameMsg_WLYC
         * @classdesc Represents a WLZB_UnitPrefix.
         * @implements IWLZB_UnitPrefix
         * @constructor
         * @param {GameMsg_WLYC.IWLZB_UnitPrefix=} [properties] Properties to set
         */
        function WLZB_UnitPrefix(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * WLZB_UnitPrefix Name.
         * @member {string} Name
         * @memberof GameMsg_WLYC.WLZB_UnitPrefix
         * @instance
         */
        WLZB_UnitPrefix.prototype.Name = "";

        /**
         * WLZB_UnitPrefix Multiple.
         * @member {number|Long} Multiple
         * @memberof GameMsg_WLYC.WLZB_UnitPrefix
         * @instance
         */
        WLZB_UnitPrefix.prototype.Multiple = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new WLZB_UnitPrefix instance using the specified properties.
         * @function create
         * @memberof GameMsg_WLYC.WLZB_UnitPrefix
         * @static
         * @param {GameMsg_WLYC.IWLZB_UnitPrefix=} [properties] Properties to set
         * @returns {GameMsg_WLYC.WLZB_UnitPrefix} WLZB_UnitPrefix instance
         */
        WLZB_UnitPrefix.create = function create(properties) {
            return new WLZB_UnitPrefix(properties);
        };

        /**
         * Encodes the specified WLZB_UnitPrefix message. Does not implicitly {@link GameMsg_WLYC.WLZB_UnitPrefix.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_WLYC.WLZB_UnitPrefix
         * @static
         * @param {GameMsg_WLYC.IWLZB_UnitPrefix} message WLZB_UnitPrefix message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WLZB_UnitPrefix.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Name != null && message.hasOwnProperty("Name"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.Name);
            if (message.Multiple != null && message.hasOwnProperty("Multiple"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.Multiple);
            return writer;
        };

        /**
         * Encodes the specified WLZB_UnitPrefix message, length delimited. Does not implicitly {@link GameMsg_WLYC.WLZB_UnitPrefix.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_WLYC.WLZB_UnitPrefix
         * @static
         * @param {GameMsg_WLYC.IWLZB_UnitPrefix} message WLZB_UnitPrefix message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WLZB_UnitPrefix.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a WLZB_UnitPrefix message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_WLYC.WLZB_UnitPrefix
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_WLYC.WLZB_UnitPrefix} WLZB_UnitPrefix
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WLZB_UnitPrefix.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_WLYC.WLZB_UnitPrefix();
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
         * Decodes a WLZB_UnitPrefix message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_WLYC.WLZB_UnitPrefix
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_WLYC.WLZB_UnitPrefix} WLZB_UnitPrefix
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WLZB_UnitPrefix.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a WLZB_UnitPrefix message.
         * @function verify
         * @memberof GameMsg_WLYC.WLZB_UnitPrefix
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        WLZB_UnitPrefix.verify = function verify(message) {
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
         * Creates a WLZB_UnitPrefix message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_WLYC.WLZB_UnitPrefix
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_WLYC.WLZB_UnitPrefix} WLZB_UnitPrefix
         */
        WLZB_UnitPrefix.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_WLYC.WLZB_UnitPrefix)
                return object;
            var message = new $root.GameMsg_WLYC.WLZB_UnitPrefix();
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
         * Creates a plain object from a WLZB_UnitPrefix message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_WLYC.WLZB_UnitPrefix
         * @static
         * @param {GameMsg_WLYC.WLZB_UnitPrefix} message WLZB_UnitPrefix
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        WLZB_UnitPrefix.toObject = function toObject(message, options) {
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
         * Converts this WLZB_UnitPrefix to JSON.
         * @function toJSON
         * @memberof GameMsg_WLYC.WLZB_UnitPrefix
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        WLZB_UnitPrefix.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return WLZB_UnitPrefix;
    })();

    GameMsg_WLYC.WLZB_Description = (function() {

        /**
         * Properties of a WLZB_Description.
         * @memberof GameMsg_WLYC
         * @interface IWLZB_Description
         * @property {string|null} [Name] WLZB_Description Name
         * @property {string|null} [Desc] WLZB_Description Desc
         * @property {string|null} [Title] WLZB_Description Title
         */

        /**
         * Constructs a new WLZB_Description.
         * @memberof GameMsg_WLYC
         * @classdesc Represents a WLZB_Description.
         * @implements IWLZB_Description
         * @constructor
         * @param {GameMsg_WLYC.IWLZB_Description=} [properties] Properties to set
         */
        function WLZB_Description(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * WLZB_Description Name.
         * @member {string} Name
         * @memberof GameMsg_WLYC.WLZB_Description
         * @instance
         */
        WLZB_Description.prototype.Name = "";

        /**
         * WLZB_Description Desc.
         * @member {string} Desc
         * @memberof GameMsg_WLYC.WLZB_Description
         * @instance
         */
        WLZB_Description.prototype.Desc = "";

        /**
         * WLZB_Description Title.
         * @member {string} Title
         * @memberof GameMsg_WLYC.WLZB_Description
         * @instance
         */
        WLZB_Description.prototype.Title = "";

        /**
         * Creates a new WLZB_Description instance using the specified properties.
         * @function create
         * @memberof GameMsg_WLYC.WLZB_Description
         * @static
         * @param {GameMsg_WLYC.IWLZB_Description=} [properties] Properties to set
         * @returns {GameMsg_WLYC.WLZB_Description} WLZB_Description instance
         */
        WLZB_Description.create = function create(properties) {
            return new WLZB_Description(properties);
        };

        /**
         * Encodes the specified WLZB_Description message. Does not implicitly {@link GameMsg_WLYC.WLZB_Description.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_WLYC.WLZB_Description
         * @static
         * @param {GameMsg_WLYC.IWLZB_Description} message WLZB_Description message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WLZB_Description.encode = function encode(message, writer) {
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
         * Encodes the specified WLZB_Description message, length delimited. Does not implicitly {@link GameMsg_WLYC.WLZB_Description.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_WLYC.WLZB_Description
         * @static
         * @param {GameMsg_WLYC.IWLZB_Description} message WLZB_Description message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WLZB_Description.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a WLZB_Description message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_WLYC.WLZB_Description
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_WLYC.WLZB_Description} WLZB_Description
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WLZB_Description.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_WLYC.WLZB_Description();
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
         * Decodes a WLZB_Description message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_WLYC.WLZB_Description
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_WLYC.WLZB_Description} WLZB_Description
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WLZB_Description.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a WLZB_Description message.
         * @function verify
         * @memberof GameMsg_WLYC.WLZB_Description
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        WLZB_Description.verify = function verify(message) {
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
         * Creates a WLZB_Description message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_WLYC.WLZB_Description
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_WLYC.WLZB_Description} WLZB_Description
         */
        WLZB_Description.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_WLYC.WLZB_Description)
                return object;
            var message = new $root.GameMsg_WLYC.WLZB_Description();
            if (object.Name != null)
                message.Name = String(object.Name);
            if (object.Desc != null)
                message.Desc = String(object.Desc);
            if (object.Title != null)
                message.Title = String(object.Title);
            return message;
        };

        /**
         * Creates a plain object from a WLZB_Description message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_WLYC.WLZB_Description
         * @static
         * @param {GameMsg_WLYC.WLZB_Description} message WLZB_Description
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        WLZB_Description.toObject = function toObject(message, options) {
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
         * Converts this WLZB_Description to JSON.
         * @function toJSON
         * @memberof GameMsg_WLYC.WLZB_Description
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        WLZB_Description.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return WLZB_Description;
    })();

    GameMsg_WLYC.WLZB_GoldBallInfo = (function() {

        /**
         * Properties of a WLZB_GoldBallInfo.
         * @memberof GameMsg_WLYC
         * @interface IWLZB_GoldBallInfo
         * @property {string|null} [Symbol] WLZB_GoldBallInfo Symbol
         * @property {string|null} [Type] WLZB_GoldBallInfo Type
         * @property {number|Long|null} [Value] WLZB_GoldBallInfo Value
         */

        /**
         * Constructs a new WLZB_GoldBallInfo.
         * @memberof GameMsg_WLYC
         * @classdesc Represents a WLZB_GoldBallInfo.
         * @implements IWLZB_GoldBallInfo
         * @constructor
         * @param {GameMsg_WLYC.IWLZB_GoldBallInfo=} [properties] Properties to set
         */
        function WLZB_GoldBallInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * WLZB_GoldBallInfo Symbol.
         * @member {string} Symbol
         * @memberof GameMsg_WLYC.WLZB_GoldBallInfo
         * @instance
         */
        WLZB_GoldBallInfo.prototype.Symbol = "";

        /**
         * WLZB_GoldBallInfo Type.
         * @member {string} Type
         * @memberof GameMsg_WLYC.WLZB_GoldBallInfo
         * @instance
         */
        WLZB_GoldBallInfo.prototype.Type = "";

        /**
         * WLZB_GoldBallInfo Value.
         * @member {number|Long} Value
         * @memberof GameMsg_WLYC.WLZB_GoldBallInfo
         * @instance
         */
        WLZB_GoldBallInfo.prototype.Value = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new WLZB_GoldBallInfo instance using the specified properties.
         * @function create
         * @memberof GameMsg_WLYC.WLZB_GoldBallInfo
         * @static
         * @param {GameMsg_WLYC.IWLZB_GoldBallInfo=} [properties] Properties to set
         * @returns {GameMsg_WLYC.WLZB_GoldBallInfo} WLZB_GoldBallInfo instance
         */
        WLZB_GoldBallInfo.create = function create(properties) {
            return new WLZB_GoldBallInfo(properties);
        };

        /**
         * Encodes the specified WLZB_GoldBallInfo message. Does not implicitly {@link GameMsg_WLYC.WLZB_GoldBallInfo.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_WLYC.WLZB_GoldBallInfo
         * @static
         * @param {GameMsg_WLYC.IWLZB_GoldBallInfo} message WLZB_GoldBallInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WLZB_GoldBallInfo.encode = function encode(message, writer) {
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
         * Encodes the specified WLZB_GoldBallInfo message, length delimited. Does not implicitly {@link GameMsg_WLYC.WLZB_GoldBallInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_WLYC.WLZB_GoldBallInfo
         * @static
         * @param {GameMsg_WLYC.IWLZB_GoldBallInfo} message WLZB_GoldBallInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WLZB_GoldBallInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a WLZB_GoldBallInfo message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_WLYC.WLZB_GoldBallInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_WLYC.WLZB_GoldBallInfo} WLZB_GoldBallInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WLZB_GoldBallInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_WLYC.WLZB_GoldBallInfo();
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
         * Decodes a WLZB_GoldBallInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_WLYC.WLZB_GoldBallInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_WLYC.WLZB_GoldBallInfo} WLZB_GoldBallInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WLZB_GoldBallInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a WLZB_GoldBallInfo message.
         * @function verify
         * @memberof GameMsg_WLYC.WLZB_GoldBallInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        WLZB_GoldBallInfo.verify = function verify(message) {
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
         * Creates a WLZB_GoldBallInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_WLYC.WLZB_GoldBallInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_WLYC.WLZB_GoldBallInfo} WLZB_GoldBallInfo
         */
        WLZB_GoldBallInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_WLYC.WLZB_GoldBallInfo)
                return object;
            var message = new $root.GameMsg_WLYC.WLZB_GoldBallInfo();
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
         * Creates a plain object from a WLZB_GoldBallInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_WLYC.WLZB_GoldBallInfo
         * @static
         * @param {GameMsg_WLYC.WLZB_GoldBallInfo} message WLZB_GoldBallInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        WLZB_GoldBallInfo.toObject = function toObject(message, options) {
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
         * Converts this WLZB_GoldBallInfo to JSON.
         * @function toJSON
         * @memberof GameMsg_WLYC.WLZB_GoldBallInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        WLZB_GoldBallInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return WLZB_GoldBallInfo;
    })();

    return GameMsg_WLYC;
})();

module.exports = $root;
