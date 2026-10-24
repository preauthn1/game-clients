/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

//var $protobuf = require("protobufjs/minimal");
var $protobuf = protobuf;

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.Game_GEN = (function() {

    /**
     * Namespace Game_GEN.
     * @exports Game_GEN
     * @namespace
     */
    var Game_GEN = {};

    /**
     * GEN_Symbol enum.
     * @name Game_GEN.GEN_Symbol
     * @enum {string}
     * @property {number} GEN_Symbol_BlueSeven=0 GEN_Symbol_BlueSeven value
     * @property {number} GEN_Symbol_RedSeven=1 GEN_Symbol_RedSeven value
     * @property {number} GEN_Symbol_Bar=2 GEN_Symbol_Bar value
     * @property {number} GEN_Symbol_Bell=3 GEN_Symbol_Bell value
     * @property {number} GEN_Symbol_WaterMelon=4 GEN_Symbol_WaterMelon value
     * @property {number} GEN_Symbol_Berry=5 GEN_Symbol_Berry value
     * @property {number} GEN_Symbol_Replay=6 GEN_Symbol_Replay value
     */
    Game_GEN.GEN_Symbol = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "GEN_Symbol_BlueSeven"] = 0;
        values[valuesById[1] = "GEN_Symbol_RedSeven"] = 1;
        values[valuesById[2] = "GEN_Symbol_Bar"] = 2;
        values[valuesById[3] = "GEN_Symbol_Bell"] = 3;
        values[valuesById[4] = "GEN_Symbol_WaterMelon"] = 4;
        values[valuesById[5] = "GEN_Symbol_Berry"] = 5;
        values[valuesById[6] = "GEN_Symbol_Replay"] = 6;
        return values;
    })();

    /**
     * GEN_Scenario enum.
     * @name Game_GEN.GEN_Scenario
     * @enum {string}
     * @property {number} GEN_Scenario_NG=0 GEN_Scenario_NG value
     * @property {number} GEN_Scenario_RB=1 GEN_Scenario_RB value
     * @property {number} GEN_Scenario_BB=2 GEN_Scenario_BB value
     * @property {number} GEN_Scenario_JAC=3 GEN_Scenario_JAC value
     */
    Game_GEN.GEN_Scenario = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "GEN_Scenario_NG"] = 0;
        values[valuesById[1] = "GEN_Scenario_RB"] = 1;
        values[valuesById[2] = "GEN_Scenario_BB"] = 2;
        values[valuesById[3] = "GEN_Scenario_JAC"] = 3;
        return values;
    })();

    /**
     * GEN_Mode enum.
     * @name Game_GEN.GEN_Mode
     * @enum {string}
     * @property {number} GEN_MODE_Unassigned=0 GEN_MODE_Unassigned value
     * @property {number} GEN_MODE_A=1 GEN_MODE_A value
     * @property {number} GEN_MODE_B=2 GEN_MODE_B value
     * @property {number} GEN_MODE_Heaven=3 GEN_MODE_Heaven value
     */
    Game_GEN.GEN_Mode = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "GEN_MODE_Unassigned"] = 0;
        values[valuesById[1] = "GEN_MODE_A"] = 1;
        values[valuesById[2] = "GEN_MODE_B"] = 2;
        values[valuesById[3] = "GEN_MODE_Heaven"] = 3;
        return values;
    })();

    /**
     * GEN_ResultType enum.
     * @name Game_GEN.GEN_ResultType
     * @enum {string}
     * @property {number} GEN_RT_Empty=0 GEN_RT_Empty value
     * @property {number} GEN_RT_None=1 GEN_RT_None value
     * @property {number} GEN_RT_FeatureNone=2 GEN_RT_FeatureNone value
     * @property {number} GEN_RT_JACNone=3 GEN_RT_JACNone value
     * @property {number} GEN_RT_BlueSevenLink=10 GEN_RT_BlueSevenLink value
     * @property {number} GEN_RT_RedSevenLink=11 GEN_RT_RedSevenLink value
     * @property {number} GEN_RT_BarLink=12 GEN_RT_BarLink value
     * @property {number} GEN_RT_BellLink=13 GEN_RT_BellLink value
     * @property {number} GEN_RT_WaterMelonLink=14 GEN_RT_WaterMelonLink value
     * @property {number} GEN_RT_BerryLink=15 GEN_RT_BerryLink value
     * @property {number} GEN_RT_ReplayLink=16 GEN_RT_ReplayLink value
     * @property {number} GEN_RT_DoubleSevenLink=17 GEN_RT_DoubleSevenLink value
     * @property {number} GEN_RT_ReleaseRT=100 GEN_RT_ReleaseRT value
     * @property {number} GEN_RT_ReleaseRTonBB=101 GEN_RT_ReleaseRTonBB value
     * @property {number} GEN_RT_ReleaseRTonRB=102 GEN_RT_ReleaseRTonRB value
     * @property {number} GEN_RT_BonusSure=200 GEN_RT_BonusSure value
     * @property {number} GEN_RT_BerryLeftAny=10000 GEN_RT_BerryLeftAny value
     */
    Game_GEN.GEN_ResultType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "GEN_RT_Empty"] = 0;
        values[valuesById[1] = "GEN_RT_None"] = 1;
        values[valuesById[2] = "GEN_RT_FeatureNone"] = 2;
        values[valuesById[3] = "GEN_RT_JACNone"] = 3;
        values[valuesById[10] = "GEN_RT_BlueSevenLink"] = 10;
        values[valuesById[11] = "GEN_RT_RedSevenLink"] = 11;
        values[valuesById[12] = "GEN_RT_BarLink"] = 12;
        values[valuesById[13] = "GEN_RT_BellLink"] = 13;
        values[valuesById[14] = "GEN_RT_WaterMelonLink"] = 14;
        values[valuesById[15] = "GEN_RT_BerryLink"] = 15;
        values[valuesById[16] = "GEN_RT_ReplayLink"] = 16;
        values[valuesById[17] = "GEN_RT_DoubleSevenLink"] = 17;
        values[valuesById[100] = "GEN_RT_ReleaseRT"] = 100;
        values[valuesById[101] = "GEN_RT_ReleaseRTonBB"] = 101;
        values[valuesById[102] = "GEN_RT_ReleaseRTonRB"] = 102;
        values[valuesById[200] = "GEN_RT_BonusSure"] = 200;
        values[valuesById[10000] = "GEN_RT_BerryLeftAny"] = 10000;
        return values;
    })();

    /**
     * GEN_PayType enum.
     * @name Game_GEN.GEN_PayType
     * @enum {string}
     * @property {number} GEN_PTChip=0 GEN_PTChip value
     * @property {number} GEN_PTReplay=1 GEN_PTReplay value
     * @property {number} GEN_PTBonus=2 GEN_PTBonus value
     * @property {number} GEN_PT1G=3 GEN_PT1G value
     */
    Game_GEN.GEN_PayType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "GEN_PTChip"] = 0;
        values[valuesById[1] = "GEN_PTReplay"] = 1;
        values[valuesById[2] = "GEN_PTBonus"] = 2;
        values[valuesById[3] = "GEN_PT1G"] = 3;
        return values;
    })();

    /**
     * GEN_ErrorType enum.
     * @name Game_GEN.GEN_ErrorType
     * @enum {string}
     * @property {number} GEN_ErrUnknowen=0 GEN_ErrUnknowen value
     * @property {number} GEN_ErrBet_MoneyNotEnough=30000 GEN_ErrBet_MoneyNotEnough value
     * @property {number} GEN_ErrBet_IllegalOdds=30001 GEN_ErrBet_IllegalOdds value
     */
    Game_GEN.GEN_ErrorType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "GEN_ErrUnknowen"] = 0;
        values[valuesById[30000] = "GEN_ErrBet_MoneyNotEnough"] = 30000;
        values[valuesById[30001] = "GEN_ErrBet_IllegalOdds"] = 30001;
        return values;
    })();

    /**
     * GEN_GameMessageClassID enum.
     * @name Game_GEN.GEN_GameMessageClassID
     * @enum {string}
     * @property {number} GEN_None=0 GEN_None value
     * @property {number} GEN_ErrorID=5000 GEN_ErrorID value
     * @property {number} GEN_GameSettingID=10000 GEN_GameSettingID value
     * @property {number} GEN_RoadMapID=10010 GEN_RoadMapID value
     * @property {number} GEN_GameStatusID=10020 GEN_GameStatusID value
     * @property {number} GEN_GameResultID=10030 GEN_GameResultID value
     * @property {number} GEN_Read_GameSettingID=20000 GEN_Read_GameSettingID value
     * @property {number} GEN_Read_RoadMapID=20010 GEN_Read_RoadMapID value
     * @property {number} GEN_Read_GameStatusID=20020 GEN_Read_GameStatusID value
     * @property {number} GEN_BetID=30000 GEN_BetID value
     */
    Game_GEN.GEN_GameMessageClassID = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "GEN_None"] = 0;
        values[valuesById[5000] = "GEN_ErrorID"] = 5000;
        values[valuesById[10000] = "GEN_GameSettingID"] = 10000;
        values[valuesById[10010] = "GEN_RoadMapID"] = 10010;
        values[valuesById[10020] = "GEN_GameStatusID"] = 10020;
        values[valuesById[10030] = "GEN_GameResultID"] = 10030;
        values[valuesById[20000] = "GEN_Read_GameSettingID"] = 20000;
        values[valuesById[20010] = "GEN_Read_RoadMapID"] = 20010;
        values[valuesById[20020] = "GEN_Read_GameStatusID"] = 20020;
        values[valuesById[30000] = "GEN_BetID"] = 30000;
        return values;
    })();

    Game_GEN.GEN_Error = (function() {

        /**
         * Properties of a GEN_Error.
         * @memberof Game_GEN
         * @interface IGEN_Error
         * @property {Game_GEN.GEN_ErrorType|null} [Type] GEN_Error Type
         * @property {string|null} [Message] GEN_Error Message
         * @property {Game_GEN.GEN_GameMessageClassID|null} [Source] GEN_Error Source
         */

        /**
         * Constructs a new GEN_Error.
         * @memberof Game_GEN
         * @classdesc Represents a GEN_Error.
         * @implements IGEN_Error
         * @constructor
         * @param {Game_GEN.IGEN_Error=} [properties] Properties to set
         */
        function GEN_Error(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GEN_Error Type.
         * @member {Game_GEN.GEN_ErrorType} Type
         * @memberof Game_GEN.GEN_Error
         * @instance
         */
        GEN_Error.prototype.Type = 0;

        /**
         * GEN_Error Message.
         * @member {string} Message
         * @memberof Game_GEN.GEN_Error
         * @instance
         */
        GEN_Error.prototype.Message = "";

        /**
         * GEN_Error Source.
         * @member {Game_GEN.GEN_GameMessageClassID} Source
         * @memberof Game_GEN.GEN_Error
         * @instance
         */
        GEN_Error.prototype.Source = 0;

        /**
         * Creates a new GEN_Error instance using the specified properties.
         * @function create
         * @memberof Game_GEN.GEN_Error
         * @static
         * @param {Game_GEN.IGEN_Error=} [properties] Properties to set
         * @returns {Game_GEN.GEN_Error} GEN_Error instance
         */
        GEN_Error.create = function create(properties) {
            return new GEN_Error(properties);
        };

        /**
         * Encodes the specified GEN_Error message. Does not implicitly {@link Game_GEN.GEN_Error.verify|verify} messages.
         * @function encode
         * @memberof Game_GEN.GEN_Error
         * @static
         * @param {Game_GEN.IGEN_Error} message GEN_Error message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GEN_Error.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Type != null && message.hasOwnProperty("Type"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.Type);
            if (message.Message != null && message.hasOwnProperty("Message"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.Message);
            if (message.Source != null && message.hasOwnProperty("Source"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.Source);
            return writer;
        };

        /**
         * Encodes the specified GEN_Error message, length delimited. Does not implicitly {@link Game_GEN.GEN_Error.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Game_GEN.GEN_Error
         * @static
         * @param {Game_GEN.IGEN_Error} message GEN_Error message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GEN_Error.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GEN_Error message from the specified reader or buffer.
         * @function decode
         * @memberof Game_GEN.GEN_Error
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Game_GEN.GEN_Error} GEN_Error
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GEN_Error.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Game_GEN.GEN_Error();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Type = reader.int32();
                    break;
                case 2:
                    message.Message = reader.string();
                    break;
                case 3:
                    message.Source = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GEN_Error message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Game_GEN.GEN_Error
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Game_GEN.GEN_Error} GEN_Error
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GEN_Error.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GEN_Error message.
         * @function verify
         * @memberof Game_GEN.GEN_Error
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GEN_Error.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Type != null && message.hasOwnProperty("Type"))
                switch (message.Type) {
                default:
                    return "Type: enum value expected";
                case 0:
                case 30000:
                case 30001:
                    break;
                }
            if (message.Message != null && message.hasOwnProperty("Message"))
                if (!$util.isString(message.Message))
                    return "Message: string expected";
            if (message.Source != null && message.hasOwnProperty("Source"))
                switch (message.Source) {
                default:
                    return "Source: enum value expected";
                case 0:
                case 5000:
                case 10000:
                case 10010:
                case 10020:
                case 10030:
                case 20000:
                case 20010:
                case 20020:
                case 30000:
                    break;
                }
            return null;
        };

        /**
         * Creates a GEN_Error message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Game_GEN.GEN_Error
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Game_GEN.GEN_Error} GEN_Error
         */
        GEN_Error.fromObject = function fromObject(object) {
            if (object instanceof $root.Game_GEN.GEN_Error)
                return object;
            var message = new $root.Game_GEN.GEN_Error();
            switch (object.Type) {
            case "GEN_ErrUnknowen":
            case 0:
                message.Type = 0;
                break;
            case "GEN_ErrBet_MoneyNotEnough":
            case 30000:
                message.Type = 30000;
                break;
            case "GEN_ErrBet_IllegalOdds":
            case 30001:
                message.Type = 30001;
                break;
            }
            if (object.Message != null)
                message.Message = String(object.Message);
            switch (object.Source) {
            case "GEN_None":
            case 0:
                message.Source = 0;
                break;
            case "GEN_ErrorID":
            case 5000:
                message.Source = 5000;
                break;
            case "GEN_GameSettingID":
            case 10000:
                message.Source = 10000;
                break;
            case "GEN_RoadMapID":
            case 10010:
                message.Source = 10010;
                break;
            case "GEN_GameStatusID":
            case 10020:
                message.Source = 10020;
                break;
            case "GEN_GameResultID":
            case 10030:
                message.Source = 10030;
                break;
            case "GEN_Read_GameSettingID":
            case 20000:
                message.Source = 20000;
                break;
            case "GEN_Read_RoadMapID":
            case 20010:
                message.Source = 20010;
                break;
            case "GEN_Read_GameStatusID":
            case 20020:
                message.Source = 20020;
                break;
            case "GEN_BetID":
            case 30000:
                message.Source = 30000;
                break;
            }
            return message;
        };

        /**
         * Creates a plain object from a GEN_Error message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Game_GEN.GEN_Error
         * @static
         * @param {Game_GEN.GEN_Error} message GEN_Error
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GEN_Error.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.Type = options.enums === String ? "GEN_ErrUnknowen" : 0;
                object.Message = "";
                object.Source = options.enums === String ? "GEN_None" : 0;
            }
            if (message.Type != null && message.hasOwnProperty("Type"))
                object.Type = options.enums === String ? $root.Game_GEN.GEN_ErrorType[message.Type] : message.Type;
            if (message.Message != null && message.hasOwnProperty("Message"))
                object.Message = message.Message;
            if (message.Source != null && message.hasOwnProperty("Source"))
                object.Source = options.enums === String ? $root.Game_GEN.GEN_GameMessageClassID[message.Source] : message.Source;
            return object;
        };

        /**
         * Converts this GEN_Error to JSON.
         * @function toJSON
         * @memberof Game_GEN.GEN_Error
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GEN_Error.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GEN_Error;
    })();

    Game_GEN.GEN_GameSetting = (function() {

        /**
         * Properties of a GEN_GameSetting.
         * @memberof Game_GEN
         * @interface IGEN_GameSetting
         * @property {number|null} [TableNo] GEN_GameSetting TableNo
         * @property {number|Long|null} [BetOdds] GEN_GameSetting BetOdds
         * @property {Array.<number|Long>|null} [Odds] GEN_GameSetting Odds
         * @property {Array.<Game_GEN.IGEN_ReelStrip>|null} [ReelStrips] GEN_GameSetting ReelStrips
         */

        /**
         * Constructs a new GEN_GameSetting.
         * @memberof Game_GEN
         * @classdesc Represents a GEN_GameSetting.
         * @implements IGEN_GameSetting
         * @constructor
         * @param {Game_GEN.IGEN_GameSetting=} [properties] Properties to set
         */
        function GEN_GameSetting(properties) {
            this.Odds = [];
            this.ReelStrips = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GEN_GameSetting TableNo.
         * @member {number} TableNo
         * @memberof Game_GEN.GEN_GameSetting
         * @instance
         */
        GEN_GameSetting.prototype.TableNo = 0;

        /**
         * GEN_GameSetting BetOdds.
         * @member {number|Long} BetOdds
         * @memberof Game_GEN.GEN_GameSetting
         * @instance
         */
        GEN_GameSetting.prototype.BetOdds = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * GEN_GameSetting Odds.
         * @member {Array.<number|Long>} Odds
         * @memberof Game_GEN.GEN_GameSetting
         * @instance
         */
        GEN_GameSetting.prototype.Odds = $util.emptyArray;

        /**
         * GEN_GameSetting ReelStrips.
         * @member {Array.<Game_GEN.IGEN_ReelStrip>} ReelStrips
         * @memberof Game_GEN.GEN_GameSetting
         * @instance
         */
        GEN_GameSetting.prototype.ReelStrips = $util.emptyArray;

        /**
         * Creates a new GEN_GameSetting instance using the specified properties.
         * @function create
         * @memberof Game_GEN.GEN_GameSetting
         * @static
         * @param {Game_GEN.IGEN_GameSetting=} [properties] Properties to set
         * @returns {Game_GEN.GEN_GameSetting} GEN_GameSetting instance
         */
        GEN_GameSetting.create = function create(properties) {
            return new GEN_GameSetting(properties);
        };

        /**
         * Encodes the specified GEN_GameSetting message. Does not implicitly {@link Game_GEN.GEN_GameSetting.verify|verify} messages.
         * @function encode
         * @memberof Game_GEN.GEN_GameSetting
         * @static
         * @param {Game_GEN.IGEN_GameSetting} message GEN_GameSetting message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GEN_GameSetting.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.TableNo != null && message.hasOwnProperty("TableNo"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.TableNo);
            if (message.BetOdds != null && message.hasOwnProperty("BetOdds"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.BetOdds);
            if (message.Odds != null && message.Odds.length) {
                writer.uint32(/* id 3, wireType 2 =*/26).fork();
                for (var i = 0; i < message.Odds.length; ++i)
                    writer.int64(message.Odds[i]);
                writer.ldelim();
            }
            if (message.ReelStrips != null && message.ReelStrips.length)
                for (var i = 0; i < message.ReelStrips.length; ++i)
                    $root.Game_GEN.GEN_ReelStrip.encode(message.ReelStrips[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified GEN_GameSetting message, length delimited. Does not implicitly {@link Game_GEN.GEN_GameSetting.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Game_GEN.GEN_GameSetting
         * @static
         * @param {Game_GEN.IGEN_GameSetting} message GEN_GameSetting message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GEN_GameSetting.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GEN_GameSetting message from the specified reader or buffer.
         * @function decode
         * @memberof Game_GEN.GEN_GameSetting
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Game_GEN.GEN_GameSetting} GEN_GameSetting
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GEN_GameSetting.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Game_GEN.GEN_GameSetting();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.TableNo = reader.int32();
                    break;
                case 2:
                    message.BetOdds = reader.int64();
                    break;
                case 3:
                    if (!(message.Odds && message.Odds.length))
                        message.Odds = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.Odds.push(reader.int64());
                    } else
                        message.Odds.push(reader.int64());
                    break;
                case 4:
                    if (!(message.ReelStrips && message.ReelStrips.length))
                        message.ReelStrips = [];
                    message.ReelStrips.push($root.Game_GEN.GEN_ReelStrip.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GEN_GameSetting message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Game_GEN.GEN_GameSetting
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Game_GEN.GEN_GameSetting} GEN_GameSetting
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GEN_GameSetting.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GEN_GameSetting message.
         * @function verify
         * @memberof Game_GEN.GEN_GameSetting
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GEN_GameSetting.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.TableNo != null && message.hasOwnProperty("TableNo"))
                if (!$util.isInteger(message.TableNo))
                    return "TableNo: integer expected";
            if (message.BetOdds != null && message.hasOwnProperty("BetOdds"))
                if (!$util.isInteger(message.BetOdds) && !(message.BetOdds && $util.isInteger(message.BetOdds.low) && $util.isInteger(message.BetOdds.high)))
                    return "BetOdds: integer|Long expected";
            if (message.Odds != null && message.hasOwnProperty("Odds")) {
                if (!Array.isArray(message.Odds))
                    return "Odds: array expected";
                for (var i = 0; i < message.Odds.length; ++i)
                    if (!$util.isInteger(message.Odds[i]) && !(message.Odds[i] && $util.isInteger(message.Odds[i].low) && $util.isInteger(message.Odds[i].high)))
                        return "Odds: integer|Long[] expected";
            }
            if (message.ReelStrips != null && message.hasOwnProperty("ReelStrips")) {
                if (!Array.isArray(message.ReelStrips))
                    return "ReelStrips: array expected";
                for (var i = 0; i < message.ReelStrips.length; ++i) {
                    var error = $root.Game_GEN.GEN_ReelStrip.verify(message.ReelStrips[i]);
                    if (error)
                        return "ReelStrips." + error;
                }
            }
            return null;
        };

        /**
         * Creates a GEN_GameSetting message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Game_GEN.GEN_GameSetting
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Game_GEN.GEN_GameSetting} GEN_GameSetting
         */
        GEN_GameSetting.fromObject = function fromObject(object) {
            if (object instanceof $root.Game_GEN.GEN_GameSetting)
                return object;
            var message = new $root.Game_GEN.GEN_GameSetting();
            if (object.TableNo != null)
                message.TableNo = object.TableNo | 0;
            if (object.BetOdds != null)
                if ($util.Long)
                    (message.BetOdds = $util.Long.fromValue(object.BetOdds)).unsigned = false;
                else if (typeof object.BetOdds === "string")
                    message.BetOdds = parseInt(object.BetOdds, 10);
                else if (typeof object.BetOdds === "number")
                    message.BetOdds = object.BetOdds;
                else if (typeof object.BetOdds === "object")
                    message.BetOdds = new $util.LongBits(object.BetOdds.low >>> 0, object.BetOdds.high >>> 0).toNumber();
            if (object.Odds) {
                if (!Array.isArray(object.Odds))
                    throw TypeError(".Game_GEN.GEN_GameSetting.Odds: array expected");
                message.Odds = [];
                for (var i = 0; i < object.Odds.length; ++i)
                    if ($util.Long)
                        (message.Odds[i] = $util.Long.fromValue(object.Odds[i])).unsigned = false;
                    else if (typeof object.Odds[i] === "string")
                        message.Odds[i] = parseInt(object.Odds[i], 10);
                    else if (typeof object.Odds[i] === "number")
                        message.Odds[i] = object.Odds[i];
                    else if (typeof object.Odds[i] === "object")
                        message.Odds[i] = new $util.LongBits(object.Odds[i].low >>> 0, object.Odds[i].high >>> 0).toNumber();
            }
            if (object.ReelStrips) {
                if (!Array.isArray(object.ReelStrips))
                    throw TypeError(".Game_GEN.GEN_GameSetting.ReelStrips: array expected");
                message.ReelStrips = [];
                for (var i = 0; i < object.ReelStrips.length; ++i) {
                    if (typeof object.ReelStrips[i] !== "object")
                        throw TypeError(".Game_GEN.GEN_GameSetting.ReelStrips: object expected");
                    message.ReelStrips[i] = $root.Game_GEN.GEN_ReelStrip.fromObject(object.ReelStrips[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a GEN_GameSetting message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Game_GEN.GEN_GameSetting
         * @static
         * @param {Game_GEN.GEN_GameSetting} message GEN_GameSetting
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GEN_GameSetting.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.Odds = [];
                object.ReelStrips = [];
            }
            if (options.defaults) {
                object.TableNo = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.BetOdds = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.BetOdds = options.longs === String ? "0" : 0;
            }
            if (message.TableNo != null && message.hasOwnProperty("TableNo"))
                object.TableNo = message.TableNo;
            if (message.BetOdds != null && message.hasOwnProperty("BetOdds"))
                if (typeof message.BetOdds === "number")
                    object.BetOdds = options.longs === String ? String(message.BetOdds) : message.BetOdds;
                else
                    object.BetOdds = options.longs === String ? $util.Long.prototype.toString.call(message.BetOdds) : options.longs === Number ? new $util.LongBits(message.BetOdds.low >>> 0, message.BetOdds.high >>> 0).toNumber() : message.BetOdds;
            if (message.Odds && message.Odds.length) {
                object.Odds = [];
                for (var j = 0; j < message.Odds.length; ++j)
                    if (typeof message.Odds[j] === "number")
                        object.Odds[j] = options.longs === String ? String(message.Odds[j]) : message.Odds[j];
                    else
                        object.Odds[j] = options.longs === String ? $util.Long.prototype.toString.call(message.Odds[j]) : options.longs === Number ? new $util.LongBits(message.Odds[j].low >>> 0, message.Odds[j].high >>> 0).toNumber() : message.Odds[j];
            }
            if (message.ReelStrips && message.ReelStrips.length) {
                object.ReelStrips = [];
                for (var j = 0; j < message.ReelStrips.length; ++j)
                    object.ReelStrips[j] = $root.Game_GEN.GEN_ReelStrip.toObject(message.ReelStrips[j], options);
            }
            return object;
        };

        /**
         * Converts this GEN_GameSetting to JSON.
         * @function toJSON
         * @memberof Game_GEN.GEN_GameSetting
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GEN_GameSetting.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GEN_GameSetting;
    })();

    Game_GEN.GEN_PayLine = (function() {

        /**
         * Properties of a GEN_PayLine.
         * @memberof Game_GEN
         * @interface IGEN_PayLine
         * @property {number|null} [ID] GEN_PayLine ID
         * @property {Array.<Game_GEN.IGEN_Position>|null} [Position] GEN_PayLine Position
         */

        /**
         * Constructs a new GEN_PayLine.
         * @memberof Game_GEN
         * @classdesc Represents a GEN_PayLine.
         * @implements IGEN_PayLine
         * @constructor
         * @param {Game_GEN.IGEN_PayLine=} [properties] Properties to set
         */
        function GEN_PayLine(properties) {
            this.Position = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GEN_PayLine ID.
         * @member {number} ID
         * @memberof Game_GEN.GEN_PayLine
         * @instance
         */
        GEN_PayLine.prototype.ID = 0;

        /**
         * GEN_PayLine Position.
         * @member {Array.<Game_GEN.IGEN_Position>} Position
         * @memberof Game_GEN.GEN_PayLine
         * @instance
         */
        GEN_PayLine.prototype.Position = $util.emptyArray;

        /**
         * Creates a new GEN_PayLine instance using the specified properties.
         * @function create
         * @memberof Game_GEN.GEN_PayLine
         * @static
         * @param {Game_GEN.IGEN_PayLine=} [properties] Properties to set
         * @returns {Game_GEN.GEN_PayLine} GEN_PayLine instance
         */
        GEN_PayLine.create = function create(properties) {
            return new GEN_PayLine(properties);
        };

        /**
         * Encodes the specified GEN_PayLine message. Does not implicitly {@link Game_GEN.GEN_PayLine.verify|verify} messages.
         * @function encode
         * @memberof Game_GEN.GEN_PayLine
         * @static
         * @param {Game_GEN.IGEN_PayLine} message GEN_PayLine message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GEN_PayLine.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.ID != null && message.hasOwnProperty("ID"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.ID);
            if (message.Position != null && message.Position.length)
                for (var i = 0; i < message.Position.length; ++i)
                    $root.Game_GEN.GEN_Position.encode(message.Position[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified GEN_PayLine message, length delimited. Does not implicitly {@link Game_GEN.GEN_PayLine.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Game_GEN.GEN_PayLine
         * @static
         * @param {Game_GEN.IGEN_PayLine} message GEN_PayLine message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GEN_PayLine.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GEN_PayLine message from the specified reader or buffer.
         * @function decode
         * @memberof Game_GEN.GEN_PayLine
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Game_GEN.GEN_PayLine} GEN_PayLine
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GEN_PayLine.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Game_GEN.GEN_PayLine();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.ID = reader.int32();
                    break;
                case 2:
                    if (!(message.Position && message.Position.length))
                        message.Position = [];
                    message.Position.push($root.Game_GEN.GEN_Position.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GEN_PayLine message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Game_GEN.GEN_PayLine
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Game_GEN.GEN_PayLine} GEN_PayLine
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GEN_PayLine.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GEN_PayLine message.
         * @function verify
         * @memberof Game_GEN.GEN_PayLine
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GEN_PayLine.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.ID != null && message.hasOwnProperty("ID"))
                if (!$util.isInteger(message.ID))
                    return "ID: integer expected";
            if (message.Position != null && message.hasOwnProperty("Position")) {
                if (!Array.isArray(message.Position))
                    return "Position: array expected";
                for (var i = 0; i < message.Position.length; ++i) {
                    var error = $root.Game_GEN.GEN_Position.verify(message.Position[i]);
                    if (error)
                        return "Position." + error;
                }
            }
            return null;
        };

        /**
         * Creates a GEN_PayLine message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Game_GEN.GEN_PayLine
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Game_GEN.GEN_PayLine} GEN_PayLine
         */
        GEN_PayLine.fromObject = function fromObject(object) {
            if (object instanceof $root.Game_GEN.GEN_PayLine)
                return object;
            var message = new $root.Game_GEN.GEN_PayLine();
            if (object.ID != null)
                message.ID = object.ID | 0;
            if (object.Position) {
                if (!Array.isArray(object.Position))
                    throw TypeError(".Game_GEN.GEN_PayLine.Position: array expected");
                message.Position = [];
                for (var i = 0; i < object.Position.length; ++i) {
                    if (typeof object.Position[i] !== "object")
                        throw TypeError(".Game_GEN.GEN_PayLine.Position: object expected");
                    message.Position[i] = $root.Game_GEN.GEN_Position.fromObject(object.Position[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a GEN_PayLine message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Game_GEN.GEN_PayLine
         * @static
         * @param {Game_GEN.GEN_PayLine} message GEN_PayLine
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GEN_PayLine.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.Position = [];
            if (options.defaults)
                object.ID = 0;
            if (message.ID != null && message.hasOwnProperty("ID"))
                object.ID = message.ID;
            if (message.Position && message.Position.length) {
                object.Position = [];
                for (var j = 0; j < message.Position.length; ++j)
                    object.Position[j] = $root.Game_GEN.GEN_Position.toObject(message.Position[j], options);
            }
            return object;
        };

        /**
         * Converts this GEN_PayLine to JSON.
         * @function toJSON
         * @memberof Game_GEN.GEN_PayLine
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GEN_PayLine.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GEN_PayLine;
    })();

    Game_GEN.GEN_Position = (function() {

        /**
         * Properties of a GEN_Position.
         * @memberof Game_GEN
         * @interface IGEN_Position
         * @property {number|null} [Reel] GEN_Position Reel
         * @property {number|null} [Row] GEN_Position Row
         */

        /**
         * Constructs a new GEN_Position.
         * @memberof Game_GEN
         * @classdesc Represents a GEN_Position.
         * @implements IGEN_Position
         * @constructor
         * @param {Game_GEN.IGEN_Position=} [properties] Properties to set
         */
        function GEN_Position(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GEN_Position Reel.
         * @member {number} Reel
         * @memberof Game_GEN.GEN_Position
         * @instance
         */
        GEN_Position.prototype.Reel = 0;

        /**
         * GEN_Position Row.
         * @member {number} Row
         * @memberof Game_GEN.GEN_Position
         * @instance
         */
        GEN_Position.prototype.Row = 0;

        /**
         * Creates a new GEN_Position instance using the specified properties.
         * @function create
         * @memberof Game_GEN.GEN_Position
         * @static
         * @param {Game_GEN.IGEN_Position=} [properties] Properties to set
         * @returns {Game_GEN.GEN_Position} GEN_Position instance
         */
        GEN_Position.create = function create(properties) {
            return new GEN_Position(properties);
        };

        /**
         * Encodes the specified GEN_Position message. Does not implicitly {@link Game_GEN.GEN_Position.verify|verify} messages.
         * @function encode
         * @memberof Game_GEN.GEN_Position
         * @static
         * @param {Game_GEN.IGEN_Position} message GEN_Position message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GEN_Position.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Reel != null && message.hasOwnProperty("Reel"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.Reel);
            if (message.Row != null && message.hasOwnProperty("Row"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.Row);
            return writer;
        };

        /**
         * Encodes the specified GEN_Position message, length delimited. Does not implicitly {@link Game_GEN.GEN_Position.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Game_GEN.GEN_Position
         * @static
         * @param {Game_GEN.IGEN_Position} message GEN_Position message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GEN_Position.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GEN_Position message from the specified reader or buffer.
         * @function decode
         * @memberof Game_GEN.GEN_Position
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Game_GEN.GEN_Position} GEN_Position
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GEN_Position.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Game_GEN.GEN_Position();
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
         * Decodes a GEN_Position message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Game_GEN.GEN_Position
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Game_GEN.GEN_Position} GEN_Position
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GEN_Position.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GEN_Position message.
         * @function verify
         * @memberof Game_GEN.GEN_Position
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GEN_Position.verify = function verify(message) {
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
         * Creates a GEN_Position message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Game_GEN.GEN_Position
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Game_GEN.GEN_Position} GEN_Position
         */
        GEN_Position.fromObject = function fromObject(object) {
            if (object instanceof $root.Game_GEN.GEN_Position)
                return object;
            var message = new $root.Game_GEN.GEN_Position();
            if (object.Reel != null)
                message.Reel = object.Reel | 0;
            if (object.Row != null)
                message.Row = object.Row | 0;
            return message;
        };

        /**
         * Creates a plain object from a GEN_Position message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Game_GEN.GEN_Position
         * @static
         * @param {Game_GEN.GEN_Position} message GEN_Position
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GEN_Position.toObject = function toObject(message, options) {
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
         * Converts this GEN_Position to JSON.
         * @function toJSON
         * @memberof Game_GEN.GEN_Position
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GEN_Position.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GEN_Position;
    })();

    Game_GEN.GEN_ReelStrip = (function() {

        /**
         * Properties of a GEN_ReelStrip.
         * @memberof Game_GEN
         * @interface IGEN_ReelStrip
         * @property {number|null} [Reel] GEN_ReelStrip Reel
         * @property {Array.<Game_GEN.GEN_Symbol>|null} [Symbols] GEN_ReelStrip Symbols
         */

        /**
         * Constructs a new GEN_ReelStrip.
         * @memberof Game_GEN
         * @classdesc Represents a GEN_ReelStrip.
         * @implements IGEN_ReelStrip
         * @constructor
         * @param {Game_GEN.IGEN_ReelStrip=} [properties] Properties to set
         */
        function GEN_ReelStrip(properties) {
            this.Symbols = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GEN_ReelStrip Reel.
         * @member {number} Reel
         * @memberof Game_GEN.GEN_ReelStrip
         * @instance
         */
        GEN_ReelStrip.prototype.Reel = 0;

        /**
         * GEN_ReelStrip Symbols.
         * @member {Array.<Game_GEN.GEN_Symbol>} Symbols
         * @memberof Game_GEN.GEN_ReelStrip
         * @instance
         */
        GEN_ReelStrip.prototype.Symbols = $util.emptyArray;

        /**
         * Creates a new GEN_ReelStrip instance using the specified properties.
         * @function create
         * @memberof Game_GEN.GEN_ReelStrip
         * @static
         * @param {Game_GEN.IGEN_ReelStrip=} [properties] Properties to set
         * @returns {Game_GEN.GEN_ReelStrip} GEN_ReelStrip instance
         */
        GEN_ReelStrip.create = function create(properties) {
            return new GEN_ReelStrip(properties);
        };

        /**
         * Encodes the specified GEN_ReelStrip message. Does not implicitly {@link Game_GEN.GEN_ReelStrip.verify|verify} messages.
         * @function encode
         * @memberof Game_GEN.GEN_ReelStrip
         * @static
         * @param {Game_GEN.IGEN_ReelStrip} message GEN_ReelStrip message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GEN_ReelStrip.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Reel != null && message.hasOwnProperty("Reel"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.Reel);
            if (message.Symbols != null && message.Symbols.length) {
                writer.uint32(/* id 2, wireType 2 =*/18).fork();
                for (var i = 0; i < message.Symbols.length; ++i)
                    writer.int32(message.Symbols[i]);
                writer.ldelim();
            }
            return writer;
        };

        /**
         * Encodes the specified GEN_ReelStrip message, length delimited. Does not implicitly {@link Game_GEN.GEN_ReelStrip.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Game_GEN.GEN_ReelStrip
         * @static
         * @param {Game_GEN.IGEN_ReelStrip} message GEN_ReelStrip message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GEN_ReelStrip.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GEN_ReelStrip message from the specified reader or buffer.
         * @function decode
         * @memberof Game_GEN.GEN_ReelStrip
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Game_GEN.GEN_ReelStrip} GEN_ReelStrip
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GEN_ReelStrip.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Game_GEN.GEN_ReelStrip();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Reel = reader.int32();
                    break;
                case 2:
                    if (!(message.Symbols && message.Symbols.length))
                        message.Symbols = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.Symbols.push(reader.int32());
                    } else
                        message.Symbols.push(reader.int32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GEN_ReelStrip message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Game_GEN.GEN_ReelStrip
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Game_GEN.GEN_ReelStrip} GEN_ReelStrip
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GEN_ReelStrip.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GEN_ReelStrip message.
         * @function verify
         * @memberof Game_GEN.GEN_ReelStrip
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GEN_ReelStrip.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Reel != null && message.hasOwnProperty("Reel"))
                if (!$util.isInteger(message.Reel))
                    return "Reel: integer expected";
            if (message.Symbols != null && message.hasOwnProperty("Symbols")) {
                if (!Array.isArray(message.Symbols))
                    return "Symbols: array expected";
                for (var i = 0; i < message.Symbols.length; ++i)
                    switch (message.Symbols[i]) {
                    default:
                        return "Symbols: enum value[] expected";
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                    case 6:
                        break;
                    }
            }
            return null;
        };

        /**
         * Creates a GEN_ReelStrip message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Game_GEN.GEN_ReelStrip
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Game_GEN.GEN_ReelStrip} GEN_ReelStrip
         */
        GEN_ReelStrip.fromObject = function fromObject(object) {
            if (object instanceof $root.Game_GEN.GEN_ReelStrip)
                return object;
            var message = new $root.Game_GEN.GEN_ReelStrip();
            if (object.Reel != null)
                message.Reel = object.Reel | 0;
            if (object.Symbols) {
                if (!Array.isArray(object.Symbols))
                    throw TypeError(".Game_GEN.GEN_ReelStrip.Symbols: array expected");
                message.Symbols = [];
                for (var i = 0; i < object.Symbols.length; ++i)
                    switch (object.Symbols[i]) {
                    default:
                    case "GEN_Symbol_BlueSeven":
                    case 0:
                        message.Symbols[i] = 0;
                        break;
                    case "GEN_Symbol_RedSeven":
                    case 1:
                        message.Symbols[i] = 1;
                        break;
                    case "GEN_Symbol_Bar":
                    case 2:
                        message.Symbols[i] = 2;
                        break;
                    case "GEN_Symbol_Bell":
                    case 3:
                        message.Symbols[i] = 3;
                        break;
                    case "GEN_Symbol_WaterMelon":
                    case 4:
                        message.Symbols[i] = 4;
                        break;
                    case "GEN_Symbol_Berry":
                    case 5:
                        message.Symbols[i] = 5;
                        break;
                    case "GEN_Symbol_Replay":
                    case 6:
                        message.Symbols[i] = 6;
                        break;
                    }
            }
            return message;
        };

        /**
         * Creates a plain object from a GEN_ReelStrip message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Game_GEN.GEN_ReelStrip
         * @static
         * @param {Game_GEN.GEN_ReelStrip} message GEN_ReelStrip
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GEN_ReelStrip.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.Symbols = [];
            if (options.defaults)
                object.Reel = 0;
            if (message.Reel != null && message.hasOwnProperty("Reel"))
                object.Reel = message.Reel;
            if (message.Symbols && message.Symbols.length) {
                object.Symbols = [];
                for (var j = 0; j < message.Symbols.length; ++j)
                    object.Symbols[j] = options.enums === String ? $root.Game_GEN.GEN_Symbol[message.Symbols[j]] : message.Symbols[j];
            }
            return object;
        };

        /**
         * Converts this GEN_ReelStrip to JSON.
         * @function toJSON
         * @memberof Game_GEN.GEN_ReelStrip
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GEN_ReelStrip.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GEN_ReelStrip;
    })();

    Game_GEN.GEN_GameStatus = (function() {

        /**
         * Properties of a GEN_GameStatus.
         * @memberof Game_GEN
         * @interface IGEN_GameStatus
         * @property {Game_GEN.GEN_Scenario|null} [Scenario] GEN_GameStatus Scenario
         * @property {Game_GEN.GEN_Mode|null} [Mode] GEN_GameStatus Mode
         * @property {Game_GEN.GEN_Scenario|null} [Bonus] GEN_GameStatus Bonus
         * @property {number|null} [RT] GEN_GameStatus RT
         * @property {boolean|null} [Replay] GEN_GameStatus Replay
         * @property {boolean|null} [BonusSure] GEN_GameStatus BonusSure
         * @property {number|null} [RequireCoin] GEN_GameStatus RequireCoin
         * @property {number|null} [BonusLeft] GEN_GameStatus BonusLeft
         * @property {number|null} [JACLeft] GEN_GameStatus JACLeft
         * @property {number|null} [BonusStore] GEN_GameStatus BonusStore
         * @property {boolean|null} [ChanceBuff] GEN_GameStatus ChanceBuff
         * @property {number|null} [ChanceBuffDeadLine] GEN_GameStatus ChanceBuffDeadLine
         */

        /**
         * Constructs a new GEN_GameStatus.
         * @memberof Game_GEN
         * @classdesc Represents a GEN_GameStatus.
         * @implements IGEN_GameStatus
         * @constructor
         * @param {Game_GEN.IGEN_GameStatus=} [properties] Properties to set
         */
        function GEN_GameStatus(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GEN_GameStatus Scenario.
         * @member {Game_GEN.GEN_Scenario} Scenario
         * @memberof Game_GEN.GEN_GameStatus
         * @instance
         */
        GEN_GameStatus.prototype.Scenario = 0;

        /**
         * GEN_GameStatus Mode.
         * @member {Game_GEN.GEN_Mode} Mode
         * @memberof Game_GEN.GEN_GameStatus
         * @instance
         */
        GEN_GameStatus.prototype.Mode = 0;

        /**
         * GEN_GameStatus Bonus.
         * @member {Game_GEN.GEN_Scenario} Bonus
         * @memberof Game_GEN.GEN_GameStatus
         * @instance
         */
        GEN_GameStatus.prototype.Bonus = 0;

        /**
         * GEN_GameStatus RT.
         * @member {number} RT
         * @memberof Game_GEN.GEN_GameStatus
         * @instance
         */
        GEN_GameStatus.prototype.RT = 0;

        /**
         * GEN_GameStatus Replay.
         * @member {boolean} Replay
         * @memberof Game_GEN.GEN_GameStatus
         * @instance
         */
        GEN_GameStatus.prototype.Replay = false;

        /**
         * GEN_GameStatus BonusSure.
         * @member {boolean} BonusSure
         * @memberof Game_GEN.GEN_GameStatus
         * @instance
         */
        GEN_GameStatus.prototype.BonusSure = false;

        /**
         * GEN_GameStatus RequireCoin.
         * @member {number} RequireCoin
         * @memberof Game_GEN.GEN_GameStatus
         * @instance
         */
        GEN_GameStatus.prototype.RequireCoin = 0;

        /**
         * GEN_GameStatus BonusLeft.
         * @member {number} BonusLeft
         * @memberof Game_GEN.GEN_GameStatus
         * @instance
         */
        GEN_GameStatus.prototype.BonusLeft = 0;

        /**
         * GEN_GameStatus JACLeft.
         * @member {number} JACLeft
         * @memberof Game_GEN.GEN_GameStatus
         * @instance
         */
        GEN_GameStatus.prototype.JACLeft = 0;

        /**
         * GEN_GameStatus BonusStore.
         * @member {number} BonusStore
         * @memberof Game_GEN.GEN_GameStatus
         * @instance
         */
        GEN_GameStatus.prototype.BonusStore = 0;

        /**
         * GEN_GameStatus ChanceBuff.
         * @member {boolean} ChanceBuff
         * @memberof Game_GEN.GEN_GameStatus
         * @instance
         */
        GEN_GameStatus.prototype.ChanceBuff = false;

        /**
         * GEN_GameStatus ChanceBuffDeadLine.
         * @member {number} ChanceBuffDeadLine
         * @memberof Game_GEN.GEN_GameStatus
         * @instance
         */
        GEN_GameStatus.prototype.ChanceBuffDeadLine = 0;

        /**
         * Creates a new GEN_GameStatus instance using the specified properties.
         * @function create
         * @memberof Game_GEN.GEN_GameStatus
         * @static
         * @param {Game_GEN.IGEN_GameStatus=} [properties] Properties to set
         * @returns {Game_GEN.GEN_GameStatus} GEN_GameStatus instance
         */
        GEN_GameStatus.create = function create(properties) {
            return new GEN_GameStatus(properties);
        };

        /**
         * Encodes the specified GEN_GameStatus message. Does not implicitly {@link Game_GEN.GEN_GameStatus.verify|verify} messages.
         * @function encode
         * @memberof Game_GEN.GEN_GameStatus
         * @static
         * @param {Game_GEN.IGEN_GameStatus} message GEN_GameStatus message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GEN_GameStatus.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Scenario != null && message.hasOwnProperty("Scenario"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.Scenario);
            if (message.Mode != null && message.hasOwnProperty("Mode"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.Mode);
            if (message.Bonus != null && message.hasOwnProperty("Bonus"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.Bonus);
            if (message.RT != null && message.hasOwnProperty("RT"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.RT);
            if (message.Replay != null && message.hasOwnProperty("Replay"))
                writer.uint32(/* id 5, wireType 0 =*/40).bool(message.Replay);
            if (message.BonusSure != null && message.hasOwnProperty("BonusSure"))
                writer.uint32(/* id 6, wireType 0 =*/48).bool(message.BonusSure);
            if (message.RequireCoin != null && message.hasOwnProperty("RequireCoin"))
                writer.uint32(/* id 7, wireType 0 =*/56).int32(message.RequireCoin);
            if (message.BonusLeft != null && message.hasOwnProperty("BonusLeft"))
                writer.uint32(/* id 8, wireType 0 =*/64).int32(message.BonusLeft);
            if (message.JACLeft != null && message.hasOwnProperty("JACLeft"))
                writer.uint32(/* id 9, wireType 0 =*/72).int32(message.JACLeft);
            if (message.BonusStore != null && message.hasOwnProperty("BonusStore"))
                writer.uint32(/* id 10, wireType 0 =*/80).int32(message.BonusStore);
            if (message.ChanceBuff != null && message.hasOwnProperty("ChanceBuff"))
                writer.uint32(/* id 11, wireType 0 =*/88).bool(message.ChanceBuff);
            if (message.ChanceBuffDeadLine != null && message.hasOwnProperty("ChanceBuffDeadLine"))
                writer.uint32(/* id 12, wireType 0 =*/96).int32(message.ChanceBuffDeadLine);
            return writer;
        };

        /**
         * Encodes the specified GEN_GameStatus message, length delimited. Does not implicitly {@link Game_GEN.GEN_GameStatus.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Game_GEN.GEN_GameStatus
         * @static
         * @param {Game_GEN.IGEN_GameStatus} message GEN_GameStatus message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GEN_GameStatus.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GEN_GameStatus message from the specified reader or buffer.
         * @function decode
         * @memberof Game_GEN.GEN_GameStatus
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Game_GEN.GEN_GameStatus} GEN_GameStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GEN_GameStatus.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Game_GEN.GEN_GameStatus();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Scenario = reader.int32();
                    break;
                case 2:
                    message.Mode = reader.int32();
                    break;
                case 3:
                    message.Bonus = reader.int32();
                    break;
                case 4:
                    message.RT = reader.int32();
                    break;
                case 5:
                    message.Replay = reader.bool();
                    break;
                case 6:
                    message.BonusSure = reader.bool();
                    break;
                case 7:
                    message.RequireCoin = reader.int32();
                    break;
                case 8:
                    message.BonusLeft = reader.int32();
                    break;
                case 9:
                    message.JACLeft = reader.int32();
                    break;
                case 10:
                    message.BonusStore = reader.int32();
                    break;
                case 11:
                    message.ChanceBuff = reader.bool();
                    break;
                case 12:
                    message.ChanceBuffDeadLine = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GEN_GameStatus message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Game_GEN.GEN_GameStatus
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Game_GEN.GEN_GameStatus} GEN_GameStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GEN_GameStatus.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GEN_GameStatus message.
         * @function verify
         * @memberof Game_GEN.GEN_GameStatus
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GEN_GameStatus.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Scenario != null && message.hasOwnProperty("Scenario"))
                switch (message.Scenario) {
                default:
                    return "Scenario: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                    break;
                }
            if (message.Mode != null && message.hasOwnProperty("Mode"))
                switch (message.Mode) {
                default:
                    return "Mode: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                    break;
                }
            if (message.Bonus != null && message.hasOwnProperty("Bonus"))
                switch (message.Bonus) {
                default:
                    return "Bonus: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                    break;
                }
            if (message.RT != null && message.hasOwnProperty("RT"))
                if (!$util.isInteger(message.RT))
                    return "RT: integer expected";
            if (message.Replay != null && message.hasOwnProperty("Replay"))
                if (typeof message.Replay !== "boolean")
                    return "Replay: boolean expected";
            if (message.BonusSure != null && message.hasOwnProperty("BonusSure"))
                if (typeof message.BonusSure !== "boolean")
                    return "BonusSure: boolean expected";
            if (message.RequireCoin != null && message.hasOwnProperty("RequireCoin"))
                if (!$util.isInteger(message.RequireCoin))
                    return "RequireCoin: integer expected";
            if (message.BonusLeft != null && message.hasOwnProperty("BonusLeft"))
                if (!$util.isInteger(message.BonusLeft))
                    return "BonusLeft: integer expected";
            if (message.JACLeft != null && message.hasOwnProperty("JACLeft"))
                if (!$util.isInteger(message.JACLeft))
                    return "JACLeft: integer expected";
            if (message.BonusStore != null && message.hasOwnProperty("BonusStore"))
                if (!$util.isInteger(message.BonusStore))
                    return "BonusStore: integer expected";
            if (message.ChanceBuff != null && message.hasOwnProperty("ChanceBuff"))
                if (typeof message.ChanceBuff !== "boolean")
                    return "ChanceBuff: boolean expected";
            if (message.ChanceBuffDeadLine != null && message.hasOwnProperty("ChanceBuffDeadLine"))
                if (!$util.isInteger(message.ChanceBuffDeadLine))
                    return "ChanceBuffDeadLine: integer expected";
            return null;
        };

        /**
         * Creates a GEN_GameStatus message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Game_GEN.GEN_GameStatus
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Game_GEN.GEN_GameStatus} GEN_GameStatus
         */
        GEN_GameStatus.fromObject = function fromObject(object) {
            if (object instanceof $root.Game_GEN.GEN_GameStatus)
                return object;
            var message = new $root.Game_GEN.GEN_GameStatus();
            switch (object.Scenario) {
            case "GEN_Scenario_NG":
            case 0:
                message.Scenario = 0;
                break;
            case "GEN_Scenario_RB":
            case 1:
                message.Scenario = 1;
                break;
            case "GEN_Scenario_BB":
            case 2:
                message.Scenario = 2;
                break;
            case "GEN_Scenario_JAC":
            case 3:
                message.Scenario = 3;
                break;
            }
            switch (object.Mode) {
            case "GEN_MODE_Unassigned":
            case 0:
                message.Mode = 0;
                break;
            case "GEN_MODE_A":
            case 1:
                message.Mode = 1;
                break;
            case "GEN_MODE_B":
            case 2:
                message.Mode = 2;
                break;
            case "GEN_MODE_Heaven":
            case 3:
                message.Mode = 3;
                break;
            }
            switch (object.Bonus) {
            case "GEN_Scenario_NG":
            case 0:
                message.Bonus = 0;
                break;
            case "GEN_Scenario_RB":
            case 1:
                message.Bonus = 1;
                break;
            case "GEN_Scenario_BB":
            case 2:
                message.Bonus = 2;
                break;
            case "GEN_Scenario_JAC":
            case 3:
                message.Bonus = 3;
                break;
            }
            if (object.RT != null)
                message.RT = object.RT | 0;
            if (object.Replay != null)
                message.Replay = Boolean(object.Replay);
            if (object.BonusSure != null)
                message.BonusSure = Boolean(object.BonusSure);
            if (object.RequireCoin != null)
                message.RequireCoin = object.RequireCoin | 0;
            if (object.BonusLeft != null)
                message.BonusLeft = object.BonusLeft | 0;
            if (object.JACLeft != null)
                message.JACLeft = object.JACLeft | 0;
            if (object.BonusStore != null)
                message.BonusStore = object.BonusStore | 0;
            if (object.ChanceBuff != null)
                message.ChanceBuff = Boolean(object.ChanceBuff);
            if (object.ChanceBuffDeadLine != null)
                message.ChanceBuffDeadLine = object.ChanceBuffDeadLine | 0;
            return message;
        };

        /**
         * Creates a plain object from a GEN_GameStatus message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Game_GEN.GEN_GameStatus
         * @static
         * @param {Game_GEN.GEN_GameStatus} message GEN_GameStatus
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GEN_GameStatus.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.Scenario = options.enums === String ? "GEN_Scenario_NG" : 0;
                object.Mode = options.enums === String ? "GEN_MODE_Unassigned" : 0;
                object.Bonus = options.enums === String ? "GEN_Scenario_NG" : 0;
                object.RT = 0;
                object.Replay = false;
                object.BonusSure = false;
                object.RequireCoin = 0;
                object.BonusLeft = 0;
                object.JACLeft = 0;
                object.BonusStore = 0;
                object.ChanceBuff = false;
                object.ChanceBuffDeadLine = 0;
            }
            if (message.Scenario != null && message.hasOwnProperty("Scenario"))
                object.Scenario = options.enums === String ? $root.Game_GEN.GEN_Scenario[message.Scenario] : message.Scenario;
            if (message.Mode != null && message.hasOwnProperty("Mode"))
                object.Mode = options.enums === String ? $root.Game_GEN.GEN_Mode[message.Mode] : message.Mode;
            if (message.Bonus != null && message.hasOwnProperty("Bonus"))
                object.Bonus = options.enums === String ? $root.Game_GEN.GEN_Scenario[message.Bonus] : message.Bonus;
            if (message.RT != null && message.hasOwnProperty("RT"))
                object.RT = message.RT;
            if (message.Replay != null && message.hasOwnProperty("Replay"))
                object.Replay = message.Replay;
            if (message.BonusSure != null && message.hasOwnProperty("BonusSure"))
                object.BonusSure = message.BonusSure;
            if (message.RequireCoin != null && message.hasOwnProperty("RequireCoin"))
                object.RequireCoin = message.RequireCoin;
            if (message.BonusLeft != null && message.hasOwnProperty("BonusLeft"))
                object.BonusLeft = message.BonusLeft;
            if (message.JACLeft != null && message.hasOwnProperty("JACLeft"))
                object.JACLeft = message.JACLeft;
            if (message.BonusStore != null && message.hasOwnProperty("BonusStore"))
                object.BonusStore = message.BonusStore;
            if (message.ChanceBuff != null && message.hasOwnProperty("ChanceBuff"))
                object.ChanceBuff = message.ChanceBuff;
            if (message.ChanceBuffDeadLine != null && message.hasOwnProperty("ChanceBuffDeadLine"))
                object.ChanceBuffDeadLine = message.ChanceBuffDeadLine;
            return object;
        };

        /**
         * Converts this GEN_GameStatus to JSON.
         * @function toJSON
         * @memberof Game_GEN.GEN_GameStatus
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GEN_GameStatus.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GEN_GameStatus;
    })();

    Game_GEN.GEN_RoadMap = (function() {

        /**
         * Properties of a GEN_RoadMap.
         * @memberof Game_GEN
         * @interface IGEN_RoadMap
         * @property {number|Long|null} [Total] GEN_RoadMap Total
         * @property {number|Long|null} [Spin] GEN_RoadMap Spin
         * @property {Array.<Game_GEN.IGEN_RoadMapBonus>|null} [Bonus] GEN_RoadMap Bonus
         * @property {Array.<Game_GEN.IGEN_RoadMapSnapshot>|null} [Snapshots] GEN_RoadMap Snapshots
         */

        /**
         * Constructs a new GEN_RoadMap.
         * @memberof Game_GEN
         * @classdesc Represents a GEN_RoadMap.
         * @implements IGEN_RoadMap
         * @constructor
         * @param {Game_GEN.IGEN_RoadMap=} [properties] Properties to set
         */
        function GEN_RoadMap(properties) {
            this.Bonus = [];
            this.Snapshots = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GEN_RoadMap Total.
         * @member {number|Long} Total
         * @memberof Game_GEN.GEN_RoadMap
         * @instance
         */
        GEN_RoadMap.prototype.Total = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * GEN_RoadMap Spin.
         * @member {number|Long} Spin
         * @memberof Game_GEN.GEN_RoadMap
         * @instance
         */
        GEN_RoadMap.prototype.Spin = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * GEN_RoadMap Bonus.
         * @member {Array.<Game_GEN.IGEN_RoadMapBonus>} Bonus
         * @memberof Game_GEN.GEN_RoadMap
         * @instance
         */
        GEN_RoadMap.prototype.Bonus = $util.emptyArray;

        /**
         * GEN_RoadMap Snapshots.
         * @member {Array.<Game_GEN.IGEN_RoadMapSnapshot>} Snapshots
         * @memberof Game_GEN.GEN_RoadMap
         * @instance
         */
        GEN_RoadMap.prototype.Snapshots = $util.emptyArray;

        /**
         * Creates a new GEN_RoadMap instance using the specified properties.
         * @function create
         * @memberof Game_GEN.GEN_RoadMap
         * @static
         * @param {Game_GEN.IGEN_RoadMap=} [properties] Properties to set
         * @returns {Game_GEN.GEN_RoadMap} GEN_RoadMap instance
         */
        GEN_RoadMap.create = function create(properties) {
            return new GEN_RoadMap(properties);
        };

        /**
         * Encodes the specified GEN_RoadMap message. Does not implicitly {@link Game_GEN.GEN_RoadMap.verify|verify} messages.
         * @function encode
         * @memberof Game_GEN.GEN_RoadMap
         * @static
         * @param {Game_GEN.IGEN_RoadMap} message GEN_RoadMap message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GEN_RoadMap.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Total != null && message.hasOwnProperty("Total"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.Total);
            if (message.Spin != null && message.hasOwnProperty("Spin"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.Spin);
            if (message.Bonus != null && message.Bonus.length)
                for (var i = 0; i < message.Bonus.length; ++i)
                    $root.Game_GEN.GEN_RoadMapBonus.encode(message.Bonus[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.Snapshots != null && message.Snapshots.length)
                for (var i = 0; i < message.Snapshots.length; ++i)
                    $root.Game_GEN.GEN_RoadMapSnapshot.encode(message.Snapshots[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified GEN_RoadMap message, length delimited. Does not implicitly {@link Game_GEN.GEN_RoadMap.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Game_GEN.GEN_RoadMap
         * @static
         * @param {Game_GEN.IGEN_RoadMap} message GEN_RoadMap message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GEN_RoadMap.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GEN_RoadMap message from the specified reader or buffer.
         * @function decode
         * @memberof Game_GEN.GEN_RoadMap
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Game_GEN.GEN_RoadMap} GEN_RoadMap
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GEN_RoadMap.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Game_GEN.GEN_RoadMap();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Total = reader.int64();
                    break;
                case 2:
                    message.Spin = reader.int64();
                    break;
                case 3:
                    if (!(message.Bonus && message.Bonus.length))
                        message.Bonus = [];
                    message.Bonus.push($root.Game_GEN.GEN_RoadMapBonus.decode(reader, reader.uint32()));
                    break;
                case 4:
                    if (!(message.Snapshots && message.Snapshots.length))
                        message.Snapshots = [];
                    message.Snapshots.push($root.Game_GEN.GEN_RoadMapSnapshot.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GEN_RoadMap message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Game_GEN.GEN_RoadMap
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Game_GEN.GEN_RoadMap} GEN_RoadMap
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GEN_RoadMap.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GEN_RoadMap message.
         * @function verify
         * @memberof Game_GEN.GEN_RoadMap
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GEN_RoadMap.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Total != null && message.hasOwnProperty("Total"))
                if (!$util.isInteger(message.Total) && !(message.Total && $util.isInteger(message.Total.low) && $util.isInteger(message.Total.high)))
                    return "Total: integer|Long expected";
            if (message.Spin != null && message.hasOwnProperty("Spin"))
                if (!$util.isInteger(message.Spin) && !(message.Spin && $util.isInteger(message.Spin.low) && $util.isInteger(message.Spin.high)))
                    return "Spin: integer|Long expected";
            if (message.Bonus != null && message.hasOwnProperty("Bonus")) {
                if (!Array.isArray(message.Bonus))
                    return "Bonus: array expected";
                for (var i = 0; i < message.Bonus.length; ++i) {
                    var error = $root.Game_GEN.GEN_RoadMapBonus.verify(message.Bonus[i]);
                    if (error)
                        return "Bonus." + error;
                }
            }
            if (message.Snapshots != null && message.hasOwnProperty("Snapshots")) {
                if (!Array.isArray(message.Snapshots))
                    return "Snapshots: array expected";
                for (var i = 0; i < message.Snapshots.length; ++i) {
                    var error = $root.Game_GEN.GEN_RoadMapSnapshot.verify(message.Snapshots[i]);
                    if (error)
                        return "Snapshots." + error;
                }
            }
            return null;
        };

        /**
         * Creates a GEN_RoadMap message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Game_GEN.GEN_RoadMap
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Game_GEN.GEN_RoadMap} GEN_RoadMap
         */
        GEN_RoadMap.fromObject = function fromObject(object) {
            if (object instanceof $root.Game_GEN.GEN_RoadMap)
                return object;
            var message = new $root.Game_GEN.GEN_RoadMap();
            if (object.Total != null)
                if ($util.Long)
                    (message.Total = $util.Long.fromValue(object.Total)).unsigned = false;
                else if (typeof object.Total === "string")
                    message.Total = parseInt(object.Total, 10);
                else if (typeof object.Total === "number")
                    message.Total = object.Total;
                else if (typeof object.Total === "object")
                    message.Total = new $util.LongBits(object.Total.low >>> 0, object.Total.high >>> 0).toNumber();
            if (object.Spin != null)
                if ($util.Long)
                    (message.Spin = $util.Long.fromValue(object.Spin)).unsigned = false;
                else if (typeof object.Spin === "string")
                    message.Spin = parseInt(object.Spin, 10);
                else if (typeof object.Spin === "number")
                    message.Spin = object.Spin;
                else if (typeof object.Spin === "object")
                    message.Spin = new $util.LongBits(object.Spin.low >>> 0, object.Spin.high >>> 0).toNumber();
            if (object.Bonus) {
                if (!Array.isArray(object.Bonus))
                    throw TypeError(".Game_GEN.GEN_RoadMap.Bonus: array expected");
                message.Bonus = [];
                for (var i = 0; i < object.Bonus.length; ++i) {
                    if (typeof object.Bonus[i] !== "object")
                        throw TypeError(".Game_GEN.GEN_RoadMap.Bonus: object expected");
                    message.Bonus[i] = $root.Game_GEN.GEN_RoadMapBonus.fromObject(object.Bonus[i]);
                }
            }
            if (object.Snapshots) {
                if (!Array.isArray(object.Snapshots))
                    throw TypeError(".Game_GEN.GEN_RoadMap.Snapshots: array expected");
                message.Snapshots = [];
                for (var i = 0; i < object.Snapshots.length; ++i) {
                    if (typeof object.Snapshots[i] !== "object")
                        throw TypeError(".Game_GEN.GEN_RoadMap.Snapshots: object expected");
                    message.Snapshots[i] = $root.Game_GEN.GEN_RoadMapSnapshot.fromObject(object.Snapshots[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a GEN_RoadMap message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Game_GEN.GEN_RoadMap
         * @static
         * @param {Game_GEN.GEN_RoadMap} message GEN_RoadMap
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GEN_RoadMap.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.Bonus = [];
                object.Snapshots = [];
            }
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.Total = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.Total = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.Spin = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.Spin = options.longs === String ? "0" : 0;
            }
            if (message.Total != null && message.hasOwnProperty("Total"))
                if (typeof message.Total === "number")
                    object.Total = options.longs === String ? String(message.Total) : message.Total;
                else
                    object.Total = options.longs === String ? $util.Long.prototype.toString.call(message.Total) : options.longs === Number ? new $util.LongBits(message.Total.low >>> 0, message.Total.high >>> 0).toNumber() : message.Total;
            if (message.Spin != null && message.hasOwnProperty("Spin"))
                if (typeof message.Spin === "number")
                    object.Spin = options.longs === String ? String(message.Spin) : message.Spin;
                else
                    object.Spin = options.longs === String ? $util.Long.prototype.toString.call(message.Spin) : options.longs === Number ? new $util.LongBits(message.Spin.low >>> 0, message.Spin.high >>> 0).toNumber() : message.Spin;
            if (message.Bonus && message.Bonus.length) {
                object.Bonus = [];
                for (var j = 0; j < message.Bonus.length; ++j)
                    object.Bonus[j] = $root.Game_GEN.GEN_RoadMapBonus.toObject(message.Bonus[j], options);
            }
            if (message.Snapshots && message.Snapshots.length) {
                object.Snapshots = [];
                for (var j = 0; j < message.Snapshots.length; ++j)
                    object.Snapshots[j] = $root.Game_GEN.GEN_RoadMapSnapshot.toObject(message.Snapshots[j], options);
            }
            return object;
        };

        /**
         * Converts this GEN_RoadMap to JSON.
         * @function toJSON
         * @memberof Game_GEN.GEN_RoadMap
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GEN_RoadMap.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GEN_RoadMap;
    })();

    Game_GEN.GEN_RoadMapBonus = (function() {

        /**
         * Properties of a GEN_RoadMapBonus.
         * @memberof Game_GEN
         * @interface IGEN_RoadMapBonus
         * @property {Game_GEN.GEN_Scenario|null} [Type] GEN_RoadMapBonus Type
         * @property {number|Long|null} [Count] GEN_RoadMapBonus Count
         */

        /**
         * Constructs a new GEN_RoadMapBonus.
         * @memberof Game_GEN
         * @classdesc Represents a GEN_RoadMapBonus.
         * @implements IGEN_RoadMapBonus
         * @constructor
         * @param {Game_GEN.IGEN_RoadMapBonus=} [properties] Properties to set
         */
        function GEN_RoadMapBonus(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GEN_RoadMapBonus Type.
         * @member {Game_GEN.GEN_Scenario} Type
         * @memberof Game_GEN.GEN_RoadMapBonus
         * @instance
         */
        GEN_RoadMapBonus.prototype.Type = 0;

        /**
         * GEN_RoadMapBonus Count.
         * @member {number|Long} Count
         * @memberof Game_GEN.GEN_RoadMapBonus
         * @instance
         */
        GEN_RoadMapBonus.prototype.Count = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new GEN_RoadMapBonus instance using the specified properties.
         * @function create
         * @memberof Game_GEN.GEN_RoadMapBonus
         * @static
         * @param {Game_GEN.IGEN_RoadMapBonus=} [properties] Properties to set
         * @returns {Game_GEN.GEN_RoadMapBonus} GEN_RoadMapBonus instance
         */
        GEN_RoadMapBonus.create = function create(properties) {
            return new GEN_RoadMapBonus(properties);
        };

        /**
         * Encodes the specified GEN_RoadMapBonus message. Does not implicitly {@link Game_GEN.GEN_RoadMapBonus.verify|verify} messages.
         * @function encode
         * @memberof Game_GEN.GEN_RoadMapBonus
         * @static
         * @param {Game_GEN.IGEN_RoadMapBonus} message GEN_RoadMapBonus message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GEN_RoadMapBonus.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Type != null && message.hasOwnProperty("Type"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.Type);
            if (message.Count != null && message.hasOwnProperty("Count"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.Count);
            return writer;
        };

        /**
         * Encodes the specified GEN_RoadMapBonus message, length delimited. Does not implicitly {@link Game_GEN.GEN_RoadMapBonus.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Game_GEN.GEN_RoadMapBonus
         * @static
         * @param {Game_GEN.IGEN_RoadMapBonus} message GEN_RoadMapBonus message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GEN_RoadMapBonus.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GEN_RoadMapBonus message from the specified reader or buffer.
         * @function decode
         * @memberof Game_GEN.GEN_RoadMapBonus
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Game_GEN.GEN_RoadMapBonus} GEN_RoadMapBonus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GEN_RoadMapBonus.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Game_GEN.GEN_RoadMapBonus();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Type = reader.int32();
                    break;
                case 2:
                    message.Count = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GEN_RoadMapBonus message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Game_GEN.GEN_RoadMapBonus
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Game_GEN.GEN_RoadMapBonus} GEN_RoadMapBonus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GEN_RoadMapBonus.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GEN_RoadMapBonus message.
         * @function verify
         * @memberof Game_GEN.GEN_RoadMapBonus
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GEN_RoadMapBonus.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Type != null && message.hasOwnProperty("Type"))
                switch (message.Type) {
                default:
                    return "Type: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                    break;
                }
            if (message.Count != null && message.hasOwnProperty("Count"))
                if (!$util.isInteger(message.Count) && !(message.Count && $util.isInteger(message.Count.low) && $util.isInteger(message.Count.high)))
                    return "Count: integer|Long expected";
            return null;
        };

        /**
         * Creates a GEN_RoadMapBonus message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Game_GEN.GEN_RoadMapBonus
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Game_GEN.GEN_RoadMapBonus} GEN_RoadMapBonus
         */
        GEN_RoadMapBonus.fromObject = function fromObject(object) {
            if (object instanceof $root.Game_GEN.GEN_RoadMapBonus)
                return object;
            var message = new $root.Game_GEN.GEN_RoadMapBonus();
            switch (object.Type) {
            case "GEN_Scenario_NG":
            case 0:
                message.Type = 0;
                break;
            case "GEN_Scenario_RB":
            case 1:
                message.Type = 1;
                break;
            case "GEN_Scenario_BB":
            case 2:
                message.Type = 2;
                break;
            case "GEN_Scenario_JAC":
            case 3:
                message.Type = 3;
                break;
            }
            if (object.Count != null)
                if ($util.Long)
                    (message.Count = $util.Long.fromValue(object.Count)).unsigned = false;
                else if (typeof object.Count === "string")
                    message.Count = parseInt(object.Count, 10);
                else if (typeof object.Count === "number")
                    message.Count = object.Count;
                else if (typeof object.Count === "object")
                    message.Count = new $util.LongBits(object.Count.low >>> 0, object.Count.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a GEN_RoadMapBonus message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Game_GEN.GEN_RoadMapBonus
         * @static
         * @param {Game_GEN.GEN_RoadMapBonus} message GEN_RoadMapBonus
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GEN_RoadMapBonus.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.Type = options.enums === String ? "GEN_Scenario_NG" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.Count = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.Count = options.longs === String ? "0" : 0;
            }
            if (message.Type != null && message.hasOwnProperty("Type"))
                object.Type = options.enums === String ? $root.Game_GEN.GEN_Scenario[message.Type] : message.Type;
            if (message.Count != null && message.hasOwnProperty("Count"))
                if (typeof message.Count === "number")
                    object.Count = options.longs === String ? String(message.Count) : message.Count;
                else
                    object.Count = options.longs === String ? $util.Long.prototype.toString.call(message.Count) : options.longs === Number ? new $util.LongBits(message.Count.low >>> 0, message.Count.high >>> 0).toNumber() : message.Count;
            return object;
        };

        /**
         * Converts this GEN_RoadMapBonus to JSON.
         * @function toJSON
         * @memberof Game_GEN.GEN_RoadMapBonus
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GEN_RoadMapBonus.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GEN_RoadMapBonus;
    })();

    Game_GEN.GEN_RoadMapSnapshot = (function() {

        /**
         * Properties of a GEN_RoadMapSnapshot.
         * @memberof Game_GEN
         * @interface IGEN_RoadMapSnapshot
         * @property {Game_GEN.GEN_Scenario|null} [Type] GEN_RoadMapSnapshot Type
         * @property {number|Long|null} [Count] GEN_RoadMapSnapshot Count
         * @property {number|Long|null} [Time] GEN_RoadMapSnapshot Time
         */

        /**
         * Constructs a new GEN_RoadMapSnapshot.
         * @memberof Game_GEN
         * @classdesc Represents a GEN_RoadMapSnapshot.
         * @implements IGEN_RoadMapSnapshot
         * @constructor
         * @param {Game_GEN.IGEN_RoadMapSnapshot=} [properties] Properties to set
         */
        function GEN_RoadMapSnapshot(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GEN_RoadMapSnapshot Type.
         * @member {Game_GEN.GEN_Scenario} Type
         * @memberof Game_GEN.GEN_RoadMapSnapshot
         * @instance
         */
        GEN_RoadMapSnapshot.prototype.Type = 0;

        /**
         * GEN_RoadMapSnapshot Count.
         * @member {number|Long} Count
         * @memberof Game_GEN.GEN_RoadMapSnapshot
         * @instance
         */
        GEN_RoadMapSnapshot.prototype.Count = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * GEN_RoadMapSnapshot Time.
         * @member {number|Long} Time
         * @memberof Game_GEN.GEN_RoadMapSnapshot
         * @instance
         */
        GEN_RoadMapSnapshot.prototype.Time = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new GEN_RoadMapSnapshot instance using the specified properties.
         * @function create
         * @memberof Game_GEN.GEN_RoadMapSnapshot
         * @static
         * @param {Game_GEN.IGEN_RoadMapSnapshot=} [properties] Properties to set
         * @returns {Game_GEN.GEN_RoadMapSnapshot} GEN_RoadMapSnapshot instance
         */
        GEN_RoadMapSnapshot.create = function create(properties) {
            return new GEN_RoadMapSnapshot(properties);
        };

        /**
         * Encodes the specified GEN_RoadMapSnapshot message. Does not implicitly {@link Game_GEN.GEN_RoadMapSnapshot.verify|verify} messages.
         * @function encode
         * @memberof Game_GEN.GEN_RoadMapSnapshot
         * @static
         * @param {Game_GEN.IGEN_RoadMapSnapshot} message GEN_RoadMapSnapshot message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GEN_RoadMapSnapshot.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Type != null && message.hasOwnProperty("Type"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.Type);
            if (message.Count != null && message.hasOwnProperty("Count"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.Count);
            if (message.Time != null && message.hasOwnProperty("Time"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.Time);
            return writer;
        };

        /**
         * Encodes the specified GEN_RoadMapSnapshot message, length delimited. Does not implicitly {@link Game_GEN.GEN_RoadMapSnapshot.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Game_GEN.GEN_RoadMapSnapshot
         * @static
         * @param {Game_GEN.IGEN_RoadMapSnapshot} message GEN_RoadMapSnapshot message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GEN_RoadMapSnapshot.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GEN_RoadMapSnapshot message from the specified reader or buffer.
         * @function decode
         * @memberof Game_GEN.GEN_RoadMapSnapshot
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Game_GEN.GEN_RoadMapSnapshot} GEN_RoadMapSnapshot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GEN_RoadMapSnapshot.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Game_GEN.GEN_RoadMapSnapshot();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Type = reader.int32();
                    break;
                case 2:
                    message.Count = reader.int64();
                    break;
                case 3:
                    message.Time = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GEN_RoadMapSnapshot message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Game_GEN.GEN_RoadMapSnapshot
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Game_GEN.GEN_RoadMapSnapshot} GEN_RoadMapSnapshot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GEN_RoadMapSnapshot.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GEN_RoadMapSnapshot message.
         * @function verify
         * @memberof Game_GEN.GEN_RoadMapSnapshot
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GEN_RoadMapSnapshot.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Type != null && message.hasOwnProperty("Type"))
                switch (message.Type) {
                default:
                    return "Type: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                    break;
                }
            if (message.Count != null && message.hasOwnProperty("Count"))
                if (!$util.isInteger(message.Count) && !(message.Count && $util.isInteger(message.Count.low) && $util.isInteger(message.Count.high)))
                    return "Count: integer|Long expected";
            if (message.Time != null && message.hasOwnProperty("Time"))
                if (!$util.isInteger(message.Time) && !(message.Time && $util.isInteger(message.Time.low) && $util.isInteger(message.Time.high)))
                    return "Time: integer|Long expected";
            return null;
        };

        /**
         * Creates a GEN_RoadMapSnapshot message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Game_GEN.GEN_RoadMapSnapshot
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Game_GEN.GEN_RoadMapSnapshot} GEN_RoadMapSnapshot
         */
        GEN_RoadMapSnapshot.fromObject = function fromObject(object) {
            if (object instanceof $root.Game_GEN.GEN_RoadMapSnapshot)
                return object;
            var message = new $root.Game_GEN.GEN_RoadMapSnapshot();
            switch (object.Type) {
            case "GEN_Scenario_NG":
            case 0:
                message.Type = 0;
                break;
            case "GEN_Scenario_RB":
            case 1:
                message.Type = 1;
                break;
            case "GEN_Scenario_BB":
            case 2:
                message.Type = 2;
                break;
            case "GEN_Scenario_JAC":
            case 3:
                message.Type = 3;
                break;
            }
            if (object.Count != null)
                if ($util.Long)
                    (message.Count = $util.Long.fromValue(object.Count)).unsigned = false;
                else if (typeof object.Count === "string")
                    message.Count = parseInt(object.Count, 10);
                else if (typeof object.Count === "number")
                    message.Count = object.Count;
                else if (typeof object.Count === "object")
                    message.Count = new $util.LongBits(object.Count.low >>> 0, object.Count.high >>> 0).toNumber();
            if (object.Time != null)
                if ($util.Long)
                    (message.Time = $util.Long.fromValue(object.Time)).unsigned = false;
                else if (typeof object.Time === "string")
                    message.Time = parseInt(object.Time, 10);
                else if (typeof object.Time === "number")
                    message.Time = object.Time;
                else if (typeof object.Time === "object")
                    message.Time = new $util.LongBits(object.Time.low >>> 0, object.Time.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a GEN_RoadMapSnapshot message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Game_GEN.GEN_RoadMapSnapshot
         * @static
         * @param {Game_GEN.GEN_RoadMapSnapshot} message GEN_RoadMapSnapshot
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GEN_RoadMapSnapshot.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.Type = options.enums === String ? "GEN_Scenario_NG" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.Count = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.Count = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.Time = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.Time = options.longs === String ? "0" : 0;
            }
            if (message.Type != null && message.hasOwnProperty("Type"))
                object.Type = options.enums === String ? $root.Game_GEN.GEN_Scenario[message.Type] : message.Type;
            if (message.Count != null && message.hasOwnProperty("Count"))
                if (typeof message.Count === "number")
                    object.Count = options.longs === String ? String(message.Count) : message.Count;
                else
                    object.Count = options.longs === String ? $util.Long.prototype.toString.call(message.Count) : options.longs === Number ? new $util.LongBits(message.Count.low >>> 0, message.Count.high >>> 0).toNumber() : message.Count;
            if (message.Time != null && message.hasOwnProperty("Time"))
                if (typeof message.Time === "number")
                    object.Time = options.longs === String ? String(message.Time) : message.Time;
                else
                    object.Time = options.longs === String ? $util.Long.prototype.toString.call(message.Time) : options.longs === Number ? new $util.LongBits(message.Time.low >>> 0, message.Time.high >>> 0).toNumber() : message.Time;
            return object;
        };

        /**
         * Converts this GEN_RoadMapSnapshot to JSON.
         * @function toJSON
         * @memberof Game_GEN.GEN_RoadMapSnapshot
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GEN_RoadMapSnapshot.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GEN_RoadMapSnapshot;
    })();

    Game_GEN.GEN_Bet = (function() {

        /**
         * Properties of a GEN_Bet.
         * @memberof Game_GEN
         * @interface IGEN_Bet
         * @property {number|Long|null} [Odds] GEN_Bet Odds
         */

        /**
         * Constructs a new GEN_Bet.
         * @memberof Game_GEN
         * @classdesc Represents a GEN_Bet.
         * @implements IGEN_Bet
         * @constructor
         * @param {Game_GEN.IGEN_Bet=} [properties] Properties to set
         */
        function GEN_Bet(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GEN_Bet Odds.
         * @member {number|Long} Odds
         * @memberof Game_GEN.GEN_Bet
         * @instance
         */
        GEN_Bet.prototype.Odds = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new GEN_Bet instance using the specified properties.
         * @function create
         * @memberof Game_GEN.GEN_Bet
         * @static
         * @param {Game_GEN.IGEN_Bet=} [properties] Properties to set
         * @returns {Game_GEN.GEN_Bet} GEN_Bet instance
         */
        GEN_Bet.create = function create(properties) {
            return new GEN_Bet(properties);
        };

        /**
         * Encodes the specified GEN_Bet message. Does not implicitly {@link Game_GEN.GEN_Bet.verify|verify} messages.
         * @function encode
         * @memberof Game_GEN.GEN_Bet
         * @static
         * @param {Game_GEN.IGEN_Bet} message GEN_Bet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GEN_Bet.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Odds != null && message.hasOwnProperty("Odds"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.Odds);
            return writer;
        };

        /**
         * Encodes the specified GEN_Bet message, length delimited. Does not implicitly {@link Game_GEN.GEN_Bet.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Game_GEN.GEN_Bet
         * @static
         * @param {Game_GEN.IGEN_Bet} message GEN_Bet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GEN_Bet.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GEN_Bet message from the specified reader or buffer.
         * @function decode
         * @memberof Game_GEN.GEN_Bet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Game_GEN.GEN_Bet} GEN_Bet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GEN_Bet.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Game_GEN.GEN_Bet();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Odds = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GEN_Bet message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Game_GEN.GEN_Bet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Game_GEN.GEN_Bet} GEN_Bet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GEN_Bet.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GEN_Bet message.
         * @function verify
         * @memberof Game_GEN.GEN_Bet
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GEN_Bet.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Odds != null && message.hasOwnProperty("Odds"))
                if (!$util.isInteger(message.Odds) && !(message.Odds && $util.isInteger(message.Odds.low) && $util.isInteger(message.Odds.high)))
                    return "Odds: integer|Long expected";
            return null;
        };

        /**
         * Creates a GEN_Bet message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Game_GEN.GEN_Bet
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Game_GEN.GEN_Bet} GEN_Bet
         */
        GEN_Bet.fromObject = function fromObject(object) {
            if (object instanceof $root.Game_GEN.GEN_Bet)
                return object;
            var message = new $root.Game_GEN.GEN_Bet();
            if (object.Odds != null)
                if ($util.Long)
                    (message.Odds = $util.Long.fromValue(object.Odds)).unsigned = false;
                else if (typeof object.Odds === "string")
                    message.Odds = parseInt(object.Odds, 10);
                else if (typeof object.Odds === "number")
                    message.Odds = object.Odds;
                else if (typeof object.Odds === "object")
                    message.Odds = new $util.LongBits(object.Odds.low >>> 0, object.Odds.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a GEN_Bet message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Game_GEN.GEN_Bet
         * @static
         * @param {Game_GEN.GEN_Bet} message GEN_Bet
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GEN_Bet.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.Odds = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.Odds = options.longs === String ? "0" : 0;
            if (message.Odds != null && message.hasOwnProperty("Odds"))
                if (typeof message.Odds === "number")
                    object.Odds = options.longs === String ? String(message.Odds) : message.Odds;
                else
                    object.Odds = options.longs === String ? $util.Long.prototype.toString.call(message.Odds) : options.longs === Number ? new $util.LongBits(message.Odds.low >>> 0, message.Odds.high >>> 0).toNumber() : message.Odds;
            return object;
        };

        /**
         * Converts this GEN_Bet to JSON.
         * @function toJSON
         * @memberof Game_GEN.GEN_Bet
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GEN_Bet.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GEN_Bet;
    })();

    Game_GEN.GEN_GameResult = (function() {

        /**
         * Properties of a GEN_GameResult.
         * @memberof Game_GEN
         * @interface IGEN_GameResult
         * @property {number|Long|null} [BetMoney] GEN_GameResult BetMoney
         * @property {number|Long|null} [WinMoney] GEN_GameResult WinMoney
         * @property {Game_GEN.GEN_ResultType|null} [Result] GEN_GameResult Result
         * @property {Array.<number>|null} [StopIndex] GEN_GameResult StopIndex
         * @property {Array.<Game_GEN.IGEN_ReelStrip>|null} [ReelStrip] GEN_GameResult ReelStrip
         * @property {boolean|null} [ReleaseRT] GEN_GameResult ReleaseRT
         * @property {Array.<Game_GEN.IGEN_Payout>|null} [Payouts] GEN_GameResult Payouts
         * @property {Array.<Game_GEN.IGEN_Position>|null} [BlinkPositions] GEN_GameResult BlinkPositions
         */

        /**
         * Constructs a new GEN_GameResult.
         * @memberof Game_GEN
         * @classdesc Represents a GEN_GameResult.
         * @implements IGEN_GameResult
         * @constructor
         * @param {Game_GEN.IGEN_GameResult=} [properties] Properties to set
         */
        function GEN_GameResult(properties) {
            this.StopIndex = [];
            this.ReelStrip = [];
            this.Payouts = [];
            this.BlinkPositions = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GEN_GameResult BetMoney.
         * @member {number|Long} BetMoney
         * @memberof Game_GEN.GEN_GameResult
         * @instance
         */
        GEN_GameResult.prototype.BetMoney = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * GEN_GameResult WinMoney.
         * @member {number|Long} WinMoney
         * @memberof Game_GEN.GEN_GameResult
         * @instance
         */
        GEN_GameResult.prototype.WinMoney = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * GEN_GameResult Result.
         * @member {Game_GEN.GEN_ResultType} Result
         * @memberof Game_GEN.GEN_GameResult
         * @instance
         */
        GEN_GameResult.prototype.Result = 0;

        /**
         * GEN_GameResult StopIndex.
         * @member {Array.<number>} StopIndex
         * @memberof Game_GEN.GEN_GameResult
         * @instance
         */
        GEN_GameResult.prototype.StopIndex = $util.emptyArray;

        /**
         * GEN_GameResult ReelStrip.
         * @member {Array.<Game_GEN.IGEN_ReelStrip>} ReelStrip
         * @memberof Game_GEN.GEN_GameResult
         * @instance
         */
        GEN_GameResult.prototype.ReelStrip = $util.emptyArray;

        /**
         * GEN_GameResult ReleaseRT.
         * @member {boolean} ReleaseRT
         * @memberof Game_GEN.GEN_GameResult
         * @instance
         */
        GEN_GameResult.prototype.ReleaseRT = false;

        /**
         * GEN_GameResult Payouts.
         * @member {Array.<Game_GEN.IGEN_Payout>} Payouts
         * @memberof Game_GEN.GEN_GameResult
         * @instance
         */
        GEN_GameResult.prototype.Payouts = $util.emptyArray;

        /**
         * GEN_GameResult BlinkPositions.
         * @member {Array.<Game_GEN.IGEN_Position>} BlinkPositions
         * @memberof Game_GEN.GEN_GameResult
         * @instance
         */
        GEN_GameResult.prototype.BlinkPositions = $util.emptyArray;

        /**
         * Creates a new GEN_GameResult instance using the specified properties.
         * @function create
         * @memberof Game_GEN.GEN_GameResult
         * @static
         * @param {Game_GEN.IGEN_GameResult=} [properties] Properties to set
         * @returns {Game_GEN.GEN_GameResult} GEN_GameResult instance
         */
        GEN_GameResult.create = function create(properties) {
            return new GEN_GameResult(properties);
        };

        /**
         * Encodes the specified GEN_GameResult message. Does not implicitly {@link Game_GEN.GEN_GameResult.verify|verify} messages.
         * @function encode
         * @memberof Game_GEN.GEN_GameResult
         * @static
         * @param {Game_GEN.IGEN_GameResult} message GEN_GameResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GEN_GameResult.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.BetMoney != null && message.hasOwnProperty("BetMoney"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.BetMoney);
            if (message.WinMoney != null && message.hasOwnProperty("WinMoney"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.WinMoney);
            if (message.Result != null && message.hasOwnProperty("Result"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.Result);
            if (message.StopIndex != null && message.StopIndex.length) {
                writer.uint32(/* id 4, wireType 2 =*/34).fork();
                for (var i = 0; i < message.StopIndex.length; ++i)
                    writer.int32(message.StopIndex[i]);
                writer.ldelim();
            }
            if (message.ReelStrip != null && message.ReelStrip.length)
                for (var i = 0; i < message.ReelStrip.length; ++i)
                    $root.Game_GEN.GEN_ReelStrip.encode(message.ReelStrip[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            if (message.ReleaseRT != null && message.hasOwnProperty("ReleaseRT"))
                writer.uint32(/* id 6, wireType 0 =*/48).bool(message.ReleaseRT);
            if (message.Payouts != null && message.Payouts.length)
                for (var i = 0; i < message.Payouts.length; ++i)
                    $root.Game_GEN.GEN_Payout.encode(message.Payouts[i], writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
            if (message.BlinkPositions != null && message.BlinkPositions.length)
                for (var i = 0; i < message.BlinkPositions.length; ++i)
                    $root.Game_GEN.GEN_Position.encode(message.BlinkPositions[i], writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified GEN_GameResult message, length delimited. Does not implicitly {@link Game_GEN.GEN_GameResult.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Game_GEN.GEN_GameResult
         * @static
         * @param {Game_GEN.IGEN_GameResult} message GEN_GameResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GEN_GameResult.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GEN_GameResult message from the specified reader or buffer.
         * @function decode
         * @memberof Game_GEN.GEN_GameResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Game_GEN.GEN_GameResult} GEN_GameResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GEN_GameResult.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Game_GEN.GEN_GameResult();
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
                    message.Result = reader.int32();
                    break;
                case 4:
                    if (!(message.StopIndex && message.StopIndex.length))
                        message.StopIndex = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.StopIndex.push(reader.int32());
                    } else
                        message.StopIndex.push(reader.int32());
                    break;
                case 5:
                    if (!(message.ReelStrip && message.ReelStrip.length))
                        message.ReelStrip = [];
                    message.ReelStrip.push($root.Game_GEN.GEN_ReelStrip.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.ReleaseRT = reader.bool();
                    break;
                case 7:
                    if (!(message.Payouts && message.Payouts.length))
                        message.Payouts = [];
                    message.Payouts.push($root.Game_GEN.GEN_Payout.decode(reader, reader.uint32()));
                    break;
                case 8:
                    if (!(message.BlinkPositions && message.BlinkPositions.length))
                        message.BlinkPositions = [];
                    message.BlinkPositions.push($root.Game_GEN.GEN_Position.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GEN_GameResult message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Game_GEN.GEN_GameResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Game_GEN.GEN_GameResult} GEN_GameResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GEN_GameResult.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GEN_GameResult message.
         * @function verify
         * @memberof Game_GEN.GEN_GameResult
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GEN_GameResult.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.BetMoney != null && message.hasOwnProperty("BetMoney"))
                if (!$util.isInteger(message.BetMoney) && !(message.BetMoney && $util.isInteger(message.BetMoney.low) && $util.isInteger(message.BetMoney.high)))
                    return "BetMoney: integer|Long expected";
            if (message.WinMoney != null && message.hasOwnProperty("WinMoney"))
                if (!$util.isInteger(message.WinMoney) && !(message.WinMoney && $util.isInteger(message.WinMoney.low) && $util.isInteger(message.WinMoney.high)))
                    return "WinMoney: integer|Long expected";
            if (message.Result != null && message.hasOwnProperty("Result"))
                switch (message.Result) {
                default:
                    return "Result: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 10:
                case 11:
                case 12:
                case 13:
                case 14:
                case 15:
                case 16:
                case 17:
                case 100:
                case 101:
                case 102:
                case 200:
                case 10000:
                    break;
                }
            if (message.StopIndex != null && message.hasOwnProperty("StopIndex")) {
                if (!Array.isArray(message.StopIndex))
                    return "StopIndex: array expected";
                for (var i = 0; i < message.StopIndex.length; ++i)
                    if (!$util.isInteger(message.StopIndex[i]))
                        return "StopIndex: integer[] expected";
            }
            if (message.ReelStrip != null && message.hasOwnProperty("ReelStrip")) {
                if (!Array.isArray(message.ReelStrip))
                    return "ReelStrip: array expected";
                for (var i = 0; i < message.ReelStrip.length; ++i) {
                    var error = $root.Game_GEN.GEN_ReelStrip.verify(message.ReelStrip[i]);
                    if (error)
                        return "ReelStrip." + error;
                }
            }
            if (message.ReleaseRT != null && message.hasOwnProperty("ReleaseRT"))
                if (typeof message.ReleaseRT !== "boolean")
                    return "ReleaseRT: boolean expected";
            if (message.Payouts != null && message.hasOwnProperty("Payouts")) {
                if (!Array.isArray(message.Payouts))
                    return "Payouts: array expected";
                for (var i = 0; i < message.Payouts.length; ++i) {
                    var error = $root.Game_GEN.GEN_Payout.verify(message.Payouts[i]);
                    if (error)
                        return "Payouts." + error;
                }
            }
            if (message.BlinkPositions != null && message.hasOwnProperty("BlinkPositions")) {
                if (!Array.isArray(message.BlinkPositions))
                    return "BlinkPositions: array expected";
                for (var i = 0; i < message.BlinkPositions.length; ++i) {
                    var error = $root.Game_GEN.GEN_Position.verify(message.BlinkPositions[i]);
                    if (error)
                        return "BlinkPositions." + error;
                }
            }
            return null;
        };

        /**
         * Creates a GEN_GameResult message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Game_GEN.GEN_GameResult
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Game_GEN.GEN_GameResult} GEN_GameResult
         */
        GEN_GameResult.fromObject = function fromObject(object) {
            if (object instanceof $root.Game_GEN.GEN_GameResult)
                return object;
            var message = new $root.Game_GEN.GEN_GameResult();
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
            switch (object.Result) {
            case "GEN_RT_Empty":
            case 0:
                message.Result = 0;
                break;
            case "GEN_RT_None":
            case 1:
                message.Result = 1;
                break;
            case "GEN_RT_FeatureNone":
            case 2:
                message.Result = 2;
                break;
            case "GEN_RT_JACNone":
            case 3:
                message.Result = 3;
                break;
            case "GEN_RT_BlueSevenLink":
            case 10:
                message.Result = 10;
                break;
            case "GEN_RT_RedSevenLink":
            case 11:
                message.Result = 11;
                break;
            case "GEN_RT_BarLink":
            case 12:
                message.Result = 12;
                break;
            case "GEN_RT_BellLink":
            case 13:
                message.Result = 13;
                break;
            case "GEN_RT_WaterMelonLink":
            case 14:
                message.Result = 14;
                break;
            case "GEN_RT_BerryLink":
            case 15:
                message.Result = 15;
                break;
            case "GEN_RT_ReplayLink":
            case 16:
                message.Result = 16;
                break;
            case "GEN_RT_DoubleSevenLink":
            case 17:
                message.Result = 17;
                break;
            case "GEN_RT_ReleaseRT":
            case 100:
                message.Result = 100;
                break;
            case "GEN_RT_ReleaseRTonBB":
            case 101:
                message.Result = 101;
                break;
            case "GEN_RT_ReleaseRTonRB":
            case 102:
                message.Result = 102;
                break;
            case "GEN_RT_BonusSure":
            case 200:
                message.Result = 200;
                break;
            case "GEN_RT_BerryLeftAny":
            case 10000:
                message.Result = 10000;
                break;
            }
            if (object.StopIndex) {
                if (!Array.isArray(object.StopIndex))
                    throw TypeError(".Game_GEN.GEN_GameResult.StopIndex: array expected");
                message.StopIndex = [];
                for (var i = 0; i < object.StopIndex.length; ++i)
                    message.StopIndex[i] = object.StopIndex[i] | 0;
            }
            if (object.ReelStrip) {
                if (!Array.isArray(object.ReelStrip))
                    throw TypeError(".Game_GEN.GEN_GameResult.ReelStrip: array expected");
                message.ReelStrip = [];
                for (var i = 0; i < object.ReelStrip.length; ++i) {
                    if (typeof object.ReelStrip[i] !== "object")
                        throw TypeError(".Game_GEN.GEN_GameResult.ReelStrip: object expected");
                    message.ReelStrip[i] = $root.Game_GEN.GEN_ReelStrip.fromObject(object.ReelStrip[i]);
                }
            }
            if (object.ReleaseRT != null)
                message.ReleaseRT = Boolean(object.ReleaseRT);
            if (object.Payouts) {
                if (!Array.isArray(object.Payouts))
                    throw TypeError(".Game_GEN.GEN_GameResult.Payouts: array expected");
                message.Payouts = [];
                for (var i = 0; i < object.Payouts.length; ++i) {
                    if (typeof object.Payouts[i] !== "object")
                        throw TypeError(".Game_GEN.GEN_GameResult.Payouts: object expected");
                    message.Payouts[i] = $root.Game_GEN.GEN_Payout.fromObject(object.Payouts[i]);
                }
            }
            if (object.BlinkPositions) {
                if (!Array.isArray(object.BlinkPositions))
                    throw TypeError(".Game_GEN.GEN_GameResult.BlinkPositions: array expected");
                message.BlinkPositions = [];
                for (var i = 0; i < object.BlinkPositions.length; ++i) {
                    if (typeof object.BlinkPositions[i] !== "object")
                        throw TypeError(".Game_GEN.GEN_GameResult.BlinkPositions: object expected");
                    message.BlinkPositions[i] = $root.Game_GEN.GEN_Position.fromObject(object.BlinkPositions[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a GEN_GameResult message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Game_GEN.GEN_GameResult
         * @static
         * @param {Game_GEN.GEN_GameResult} message GEN_GameResult
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GEN_GameResult.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.StopIndex = [];
                object.ReelStrip = [];
                object.Payouts = [];
                object.BlinkPositions = [];
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
                object.Result = options.enums === String ? "GEN_RT_Empty" : 0;
                object.ReleaseRT = false;
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
            if (message.Result != null && message.hasOwnProperty("Result"))
                object.Result = options.enums === String ? $root.Game_GEN.GEN_ResultType[message.Result] : message.Result;
            if (message.StopIndex && message.StopIndex.length) {
                object.StopIndex = [];
                for (var j = 0; j < message.StopIndex.length; ++j)
                    object.StopIndex[j] = message.StopIndex[j];
            }
            if (message.ReelStrip && message.ReelStrip.length) {
                object.ReelStrip = [];
                for (var j = 0; j < message.ReelStrip.length; ++j)
                    object.ReelStrip[j] = $root.Game_GEN.GEN_ReelStrip.toObject(message.ReelStrip[j], options);
            }
            if (message.ReleaseRT != null && message.hasOwnProperty("ReleaseRT"))
                object.ReleaseRT = message.ReleaseRT;
            if (message.Payouts && message.Payouts.length) {
                object.Payouts = [];
                for (var j = 0; j < message.Payouts.length; ++j)
                    object.Payouts[j] = $root.Game_GEN.GEN_Payout.toObject(message.Payouts[j], options);
            }
            if (message.BlinkPositions && message.BlinkPositions.length) {
                object.BlinkPositions = [];
                for (var j = 0; j < message.BlinkPositions.length; ++j)
                    object.BlinkPositions[j] = $root.Game_GEN.GEN_Position.toObject(message.BlinkPositions[j], options);
            }
            return object;
        };

        /**
         * Converts this GEN_GameResult to JSON.
         * @function toJSON
         * @memberof Game_GEN.GEN_GameResult
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GEN_GameResult.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GEN_GameResult;
    })();

    Game_GEN.GEN_Payout = (function() {

        /**
         * Properties of a GEN_Payout.
         * @memberof Game_GEN
         * @interface IGEN_Payout
         * @property {Game_GEN.GEN_PayType|null} [Type] GEN_Payout Type
         * @property {number|Long|null} [Amount] GEN_Payout Amount
         */

        /**
         * Constructs a new GEN_Payout.
         * @memberof Game_GEN
         * @classdesc Represents a GEN_Payout.
         * @implements IGEN_Payout
         * @constructor
         * @param {Game_GEN.IGEN_Payout=} [properties] Properties to set
         */
        function GEN_Payout(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GEN_Payout Type.
         * @member {Game_GEN.GEN_PayType} Type
         * @memberof Game_GEN.GEN_Payout
         * @instance
         */
        GEN_Payout.prototype.Type = 0;

        /**
         * GEN_Payout Amount.
         * @member {number|Long} Amount
         * @memberof Game_GEN.GEN_Payout
         * @instance
         */
        GEN_Payout.prototype.Amount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new GEN_Payout instance using the specified properties.
         * @function create
         * @memberof Game_GEN.GEN_Payout
         * @static
         * @param {Game_GEN.IGEN_Payout=} [properties] Properties to set
         * @returns {Game_GEN.GEN_Payout} GEN_Payout instance
         */
        GEN_Payout.create = function create(properties) {
            return new GEN_Payout(properties);
        };

        /**
         * Encodes the specified GEN_Payout message. Does not implicitly {@link Game_GEN.GEN_Payout.verify|verify} messages.
         * @function encode
         * @memberof Game_GEN.GEN_Payout
         * @static
         * @param {Game_GEN.IGEN_Payout} message GEN_Payout message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GEN_Payout.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Type != null && message.hasOwnProperty("Type"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.Type);
            if (message.Amount != null && message.hasOwnProperty("Amount"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.Amount);
            return writer;
        };

        /**
         * Encodes the specified GEN_Payout message, length delimited. Does not implicitly {@link Game_GEN.GEN_Payout.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Game_GEN.GEN_Payout
         * @static
         * @param {Game_GEN.IGEN_Payout} message GEN_Payout message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GEN_Payout.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GEN_Payout message from the specified reader or buffer.
         * @function decode
         * @memberof Game_GEN.GEN_Payout
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Game_GEN.GEN_Payout} GEN_Payout
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GEN_Payout.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Game_GEN.GEN_Payout();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Type = reader.int32();
                    break;
                case 2:
                    message.Amount = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GEN_Payout message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Game_GEN.GEN_Payout
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Game_GEN.GEN_Payout} GEN_Payout
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GEN_Payout.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GEN_Payout message.
         * @function verify
         * @memberof Game_GEN.GEN_Payout
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GEN_Payout.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Type != null && message.hasOwnProperty("Type"))
                switch (message.Type) {
                default:
                    return "Type: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                    break;
                }
            if (message.Amount != null && message.hasOwnProperty("Amount"))
                if (!$util.isInteger(message.Amount) && !(message.Amount && $util.isInteger(message.Amount.low) && $util.isInteger(message.Amount.high)))
                    return "Amount: integer|Long expected";
            return null;
        };

        /**
         * Creates a GEN_Payout message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Game_GEN.GEN_Payout
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Game_GEN.GEN_Payout} GEN_Payout
         */
        GEN_Payout.fromObject = function fromObject(object) {
            if (object instanceof $root.Game_GEN.GEN_Payout)
                return object;
            var message = new $root.Game_GEN.GEN_Payout();
            switch (object.Type) {
            case "GEN_PTChip":
            case 0:
                message.Type = 0;
                break;
            case "GEN_PTReplay":
            case 1:
                message.Type = 1;
                break;
            case "GEN_PTBonus":
            case 2:
                message.Type = 2;
                break;
            case "GEN_PT1G":
            case 3:
                message.Type = 3;
                break;
            }
            if (object.Amount != null)
                if ($util.Long)
                    (message.Amount = $util.Long.fromValue(object.Amount)).unsigned = false;
                else if (typeof object.Amount === "string")
                    message.Amount = parseInt(object.Amount, 10);
                else if (typeof object.Amount === "number")
                    message.Amount = object.Amount;
                else if (typeof object.Amount === "object")
                    message.Amount = new $util.LongBits(object.Amount.low >>> 0, object.Amount.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a GEN_Payout message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Game_GEN.GEN_Payout
         * @static
         * @param {Game_GEN.GEN_Payout} message GEN_Payout
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GEN_Payout.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.Type = options.enums === String ? "GEN_PTChip" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.Amount = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.Amount = options.longs === String ? "0" : 0;
            }
            if (message.Type != null && message.hasOwnProperty("Type"))
                object.Type = options.enums === String ? $root.Game_GEN.GEN_PayType[message.Type] : message.Type;
            if (message.Amount != null && message.hasOwnProperty("Amount"))
                if (typeof message.Amount === "number")
                    object.Amount = options.longs === String ? String(message.Amount) : message.Amount;
                else
                    object.Amount = options.longs === String ? $util.Long.prototype.toString.call(message.Amount) : options.longs === Number ? new $util.LongBits(message.Amount.low >>> 0, message.Amount.high >>> 0).toNumber() : message.Amount;
            return object;
        };

        /**
         * Converts this GEN_Payout to JSON.
         * @function toJSON
         * @memberof Game_GEN.GEN_Payout
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GEN_Payout.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GEN_Payout;
    })();

    Game_GEN.GEN_RoomInfo = (function() {

        /**
         * Properties of a GEN_RoomInfo.
         * @memberof Game_GEN
         * @interface IGEN_RoomInfo
         * @property {Array.<number|Long>|null} [Odds] GEN_RoomInfo Odds
         * @property {Array.<Game_GEN.IGEN_TableInfo>|null} [Tables] GEN_RoomInfo Tables
         */

        /**
         * Constructs a new GEN_RoomInfo.
         * @memberof Game_GEN
         * @classdesc Represents a GEN_RoomInfo.
         * @implements IGEN_RoomInfo
         * @constructor
         * @param {Game_GEN.IGEN_RoomInfo=} [properties] Properties to set
         */
        function GEN_RoomInfo(properties) {
            this.Odds = [];
            this.Tables = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GEN_RoomInfo Odds.
         * @member {Array.<number|Long>} Odds
         * @memberof Game_GEN.GEN_RoomInfo
         * @instance
         */
        GEN_RoomInfo.prototype.Odds = $util.emptyArray;

        /**
         * GEN_RoomInfo Tables.
         * @member {Array.<Game_GEN.IGEN_TableInfo>} Tables
         * @memberof Game_GEN.GEN_RoomInfo
         * @instance
         */
        GEN_RoomInfo.prototype.Tables = $util.emptyArray;

        /**
         * Creates a new GEN_RoomInfo instance using the specified properties.
         * @function create
         * @memberof Game_GEN.GEN_RoomInfo
         * @static
         * @param {Game_GEN.IGEN_RoomInfo=} [properties] Properties to set
         * @returns {Game_GEN.GEN_RoomInfo} GEN_RoomInfo instance
         */
        GEN_RoomInfo.create = function create(properties) {
            return new GEN_RoomInfo(properties);
        };

        /**
         * Encodes the specified GEN_RoomInfo message. Does not implicitly {@link Game_GEN.GEN_RoomInfo.verify|verify} messages.
         * @function encode
         * @memberof Game_GEN.GEN_RoomInfo
         * @static
         * @param {Game_GEN.IGEN_RoomInfo} message GEN_RoomInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GEN_RoomInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Odds != null && message.Odds.length) {
                writer.uint32(/* id 1, wireType 2 =*/10).fork();
                for (var i = 0; i < message.Odds.length; ++i)
                    writer.int64(message.Odds[i]);
                writer.ldelim();
            }
            if (message.Tables != null && message.Tables.length)
                for (var i = 0; i < message.Tables.length; ++i)
                    $root.Game_GEN.GEN_TableInfo.encode(message.Tables[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified GEN_RoomInfo message, length delimited. Does not implicitly {@link Game_GEN.GEN_RoomInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Game_GEN.GEN_RoomInfo
         * @static
         * @param {Game_GEN.IGEN_RoomInfo} message GEN_RoomInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GEN_RoomInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GEN_RoomInfo message from the specified reader or buffer.
         * @function decode
         * @memberof Game_GEN.GEN_RoomInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Game_GEN.GEN_RoomInfo} GEN_RoomInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GEN_RoomInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Game_GEN.GEN_RoomInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.Odds && message.Odds.length))
                        message.Odds = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.Odds.push(reader.int64());
                    } else
                        message.Odds.push(reader.int64());
                    break;
                case 2:
                    if (!(message.Tables && message.Tables.length))
                        message.Tables = [];
                    message.Tables.push($root.Game_GEN.GEN_TableInfo.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GEN_RoomInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Game_GEN.GEN_RoomInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Game_GEN.GEN_RoomInfo} GEN_RoomInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GEN_RoomInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GEN_RoomInfo message.
         * @function verify
         * @memberof Game_GEN.GEN_RoomInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GEN_RoomInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Odds != null && message.hasOwnProperty("Odds")) {
                if (!Array.isArray(message.Odds))
                    return "Odds: array expected";
                for (var i = 0; i < message.Odds.length; ++i)
                    if (!$util.isInteger(message.Odds[i]) && !(message.Odds[i] && $util.isInteger(message.Odds[i].low) && $util.isInteger(message.Odds[i].high)))
                        return "Odds: integer|Long[] expected";
            }
            if (message.Tables != null && message.hasOwnProperty("Tables")) {
                if (!Array.isArray(message.Tables))
                    return "Tables: array expected";
                for (var i = 0; i < message.Tables.length; ++i) {
                    var error = $root.Game_GEN.GEN_TableInfo.verify(message.Tables[i]);
                    if (error)
                        return "Tables." + error;
                }
            }
            return null;
        };

        /**
         * Creates a GEN_RoomInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Game_GEN.GEN_RoomInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Game_GEN.GEN_RoomInfo} GEN_RoomInfo
         */
        GEN_RoomInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.Game_GEN.GEN_RoomInfo)
                return object;
            var message = new $root.Game_GEN.GEN_RoomInfo();
            if (object.Odds) {
                if (!Array.isArray(object.Odds))
                    throw TypeError(".Game_GEN.GEN_RoomInfo.Odds: array expected");
                message.Odds = [];
                for (var i = 0; i < object.Odds.length; ++i)
                    if ($util.Long)
                        (message.Odds[i] = $util.Long.fromValue(object.Odds[i])).unsigned = false;
                    else if (typeof object.Odds[i] === "string")
                        message.Odds[i] = parseInt(object.Odds[i], 10);
                    else if (typeof object.Odds[i] === "number")
                        message.Odds[i] = object.Odds[i];
                    else if (typeof object.Odds[i] === "object")
                        message.Odds[i] = new $util.LongBits(object.Odds[i].low >>> 0, object.Odds[i].high >>> 0).toNumber();
            }
            if (object.Tables) {
                if (!Array.isArray(object.Tables))
                    throw TypeError(".Game_GEN.GEN_RoomInfo.Tables: array expected");
                message.Tables = [];
                for (var i = 0; i < object.Tables.length; ++i) {
                    if (typeof object.Tables[i] !== "object")
                        throw TypeError(".Game_GEN.GEN_RoomInfo.Tables: object expected");
                    message.Tables[i] = $root.Game_GEN.GEN_TableInfo.fromObject(object.Tables[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a GEN_RoomInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Game_GEN.GEN_RoomInfo
         * @static
         * @param {Game_GEN.GEN_RoomInfo} message GEN_RoomInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GEN_RoomInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.Odds = [];
                object.Tables = [];
            }
            if (message.Odds && message.Odds.length) {
                object.Odds = [];
                for (var j = 0; j < message.Odds.length; ++j)
                    if (typeof message.Odds[j] === "number")
                        object.Odds[j] = options.longs === String ? String(message.Odds[j]) : message.Odds[j];
                    else
                        object.Odds[j] = options.longs === String ? $util.Long.prototype.toString.call(message.Odds[j]) : options.longs === Number ? new $util.LongBits(message.Odds[j].low >>> 0, message.Odds[j].high >>> 0).toNumber() : message.Odds[j];
            }
            if (message.Tables && message.Tables.length) {
                object.Tables = [];
                for (var j = 0; j < message.Tables.length; ++j)
                    object.Tables[j] = $root.Game_GEN.GEN_TableInfo.toObject(message.Tables[j], options);
            }
            return object;
        };

        /**
         * Converts this GEN_RoomInfo to JSON.
         * @function toJSON
         * @memberof Game_GEN.GEN_RoomInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GEN_RoomInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GEN_RoomInfo;
    })();

    Game_GEN.GEN_TableInfo = (function() {

        /**
         * Properties of a GEN_TableInfo.
         * @memberof Game_GEN
         * @interface IGEN_TableInfo
         * @property {number|null} [ID] GEN_TableInfo ID
         * @property {number|Long|null} [Odds] GEN_TableInfo Odds
         * @property {Game_GEN.IGEN_RoadMap|null} [RoadMap] GEN_TableInfo RoadMap
         * @property {boolean|null} [Occupied] GEN_TableInfo Occupied
         */

        /**
         * Constructs a new GEN_TableInfo.
         * @memberof Game_GEN
         * @classdesc Represents a GEN_TableInfo.
         * @implements IGEN_TableInfo
         * @constructor
         * @param {Game_GEN.IGEN_TableInfo=} [properties] Properties to set
         */
        function GEN_TableInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GEN_TableInfo ID.
         * @member {number} ID
         * @memberof Game_GEN.GEN_TableInfo
         * @instance
         */
        GEN_TableInfo.prototype.ID = 0;

        /**
         * GEN_TableInfo Odds.
         * @member {number|Long} Odds
         * @memberof Game_GEN.GEN_TableInfo
         * @instance
         */
        GEN_TableInfo.prototype.Odds = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * GEN_TableInfo RoadMap.
         * @member {Game_GEN.IGEN_RoadMap|null|undefined} RoadMap
         * @memberof Game_GEN.GEN_TableInfo
         * @instance
         */
        GEN_TableInfo.prototype.RoadMap = null;

        /**
         * GEN_TableInfo Occupied.
         * @member {boolean} Occupied
         * @memberof Game_GEN.GEN_TableInfo
         * @instance
         */
        GEN_TableInfo.prototype.Occupied = false;

        /**
         * Creates a new GEN_TableInfo instance using the specified properties.
         * @function create
         * @memberof Game_GEN.GEN_TableInfo
         * @static
         * @param {Game_GEN.IGEN_TableInfo=} [properties] Properties to set
         * @returns {Game_GEN.GEN_TableInfo} GEN_TableInfo instance
         */
        GEN_TableInfo.create = function create(properties) {
            return new GEN_TableInfo(properties);
        };

        /**
         * Encodes the specified GEN_TableInfo message. Does not implicitly {@link Game_GEN.GEN_TableInfo.verify|verify} messages.
         * @function encode
         * @memberof Game_GEN.GEN_TableInfo
         * @static
         * @param {Game_GEN.IGEN_TableInfo} message GEN_TableInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GEN_TableInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.ID != null && message.hasOwnProperty("ID"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.ID);
            if (message.Odds != null && message.hasOwnProperty("Odds"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.Odds);
            if (message.RoadMap != null && message.hasOwnProperty("RoadMap"))
                $root.Game_GEN.GEN_RoadMap.encode(message.RoadMap, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.Occupied != null && message.hasOwnProperty("Occupied"))
                writer.uint32(/* id 4, wireType 0 =*/32).bool(message.Occupied);
            return writer;
        };

        /**
         * Encodes the specified GEN_TableInfo message, length delimited. Does not implicitly {@link Game_GEN.GEN_TableInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Game_GEN.GEN_TableInfo
         * @static
         * @param {Game_GEN.IGEN_TableInfo} message GEN_TableInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GEN_TableInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GEN_TableInfo message from the specified reader or buffer.
         * @function decode
         * @memberof Game_GEN.GEN_TableInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Game_GEN.GEN_TableInfo} GEN_TableInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GEN_TableInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Game_GEN.GEN_TableInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.ID = reader.int32();
                    break;
                case 2:
                    message.Odds = reader.int64();
                    break;
                case 3:
                    message.RoadMap = $root.Game_GEN.GEN_RoadMap.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.Occupied = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GEN_TableInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Game_GEN.GEN_TableInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Game_GEN.GEN_TableInfo} GEN_TableInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GEN_TableInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GEN_TableInfo message.
         * @function verify
         * @memberof Game_GEN.GEN_TableInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GEN_TableInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.ID != null && message.hasOwnProperty("ID"))
                if (!$util.isInteger(message.ID))
                    return "ID: integer expected";
            if (message.Odds != null && message.hasOwnProperty("Odds"))
                if (!$util.isInteger(message.Odds) && !(message.Odds && $util.isInteger(message.Odds.low) && $util.isInteger(message.Odds.high)))
                    return "Odds: integer|Long expected";
            if (message.RoadMap != null && message.hasOwnProperty("RoadMap")) {
                var error = $root.Game_GEN.GEN_RoadMap.verify(message.RoadMap);
                if (error)
                    return "RoadMap." + error;
            }
            if (message.Occupied != null && message.hasOwnProperty("Occupied"))
                if (typeof message.Occupied !== "boolean")
                    return "Occupied: boolean expected";
            return null;
        };

        /**
         * Creates a GEN_TableInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Game_GEN.GEN_TableInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Game_GEN.GEN_TableInfo} GEN_TableInfo
         */
        GEN_TableInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.Game_GEN.GEN_TableInfo)
                return object;
            var message = new $root.Game_GEN.GEN_TableInfo();
            if (object.ID != null)
                message.ID = object.ID | 0;
            if (object.Odds != null)
                if ($util.Long)
                    (message.Odds = $util.Long.fromValue(object.Odds)).unsigned = false;
                else if (typeof object.Odds === "string")
                    message.Odds = parseInt(object.Odds, 10);
                else if (typeof object.Odds === "number")
                    message.Odds = object.Odds;
                else if (typeof object.Odds === "object")
                    message.Odds = new $util.LongBits(object.Odds.low >>> 0, object.Odds.high >>> 0).toNumber();
            if (object.RoadMap != null) {
                if (typeof object.RoadMap !== "object")
                    throw TypeError(".Game_GEN.GEN_TableInfo.RoadMap: object expected");
                message.RoadMap = $root.Game_GEN.GEN_RoadMap.fromObject(object.RoadMap);
            }
            if (object.Occupied != null)
                message.Occupied = Boolean(object.Occupied);
            return message;
        };

        /**
         * Creates a plain object from a GEN_TableInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Game_GEN.GEN_TableInfo
         * @static
         * @param {Game_GEN.GEN_TableInfo} message GEN_TableInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GEN_TableInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.ID = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.Odds = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.Odds = options.longs === String ? "0" : 0;
                object.RoadMap = null;
                object.Occupied = false;
            }
            if (message.ID != null && message.hasOwnProperty("ID"))
                object.ID = message.ID;
            if (message.Odds != null && message.hasOwnProperty("Odds"))
                if (typeof message.Odds === "number")
                    object.Odds = options.longs === String ? String(message.Odds) : message.Odds;
                else
                    object.Odds = options.longs === String ? $util.Long.prototype.toString.call(message.Odds) : options.longs === Number ? new $util.LongBits(message.Odds.low >>> 0, message.Odds.high >>> 0).toNumber() : message.Odds;
            if (message.RoadMap != null && message.hasOwnProperty("RoadMap"))
                object.RoadMap = $root.Game_GEN.GEN_RoadMap.toObject(message.RoadMap, options);
            if (message.Occupied != null && message.hasOwnProperty("Occupied"))
                object.Occupied = message.Occupied;
            return object;
        };

        /**
         * Converts this GEN_TableInfo to JSON.
         * @function toJSON
         * @memberof Game_GEN.GEN_TableInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GEN_TableInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GEN_TableInfo;
    })();

    return Game_GEN;
})();

module.exports = $root;
