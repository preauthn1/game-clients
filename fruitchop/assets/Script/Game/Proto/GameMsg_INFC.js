/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

//var $protobuf = require("protobufjs/minimal");
var $protobuf = protobuf;

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.GameMsg_INFC = (function() {

    /**
     * Namespace GameMsg_INFC.
     * @exports GameMsg_INFC
     * @namespace
     */
    var GameMsg_INFC = {};

    /**
     * INFC_PlayerState enum.
     * @name GameMsg_INFC.INFC_PlayerState
     * @enum {number}
     * @property {number} INFC_State_UNSPECIFIED=0 INFC_State_UNSPECIFIED value
     * @property {number} INFC_State_Gaming=1 INFC_State_Gaming value
     * @property {number} INFC_State_Dead=2 INFC_State_Dead value
     * @property {number} INFC_State_Offline=3 INFC_State_Offline value
     */
    GameMsg_INFC.INFC_PlayerState = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "INFC_State_UNSPECIFIED"] = 0;
        values[valuesById[1] = "INFC_State_Gaming"] = 1;
        values[valuesById[2] = "INFC_State_Dead"] = 2;
        values[valuesById[3] = "INFC_State_Offline"] = 3;
        return values;
    })();

    /**
     * INFC_GameMessageClassID enum.
     * @name GameMsg_INFC.INFC_GameMessageClassID
     * @enum {number}
     * @property {number} INFC_SClassID_UNSPECIFIED=0 INFC_SClassID_UNSPECIFIED value
     * @property {number} INFC_GameSettingID=10000 INFC_GameSettingID value
     * @property {number} INFC_ProtoSettingID=10001 INFC_ProtoSettingID value
     * @property {number} INFC_BetStepID=10010 INFC_BetStepID value
     * @property {number} INFC_GameStartID=10020 INFC_GameStartID value
     * @property {number} INFC_GameRankID=10030 INFC_GameRankID value
     * @property {number} INFC_GameResultID=10040 INFC_GameResultID value
     * @property {number} INFC_QueryGameSettingID=20000 INFC_QueryGameSettingID value
     * @property {number} INFC_QueryProtoSettingID=20001 INFC_QueryProtoSettingID value
     * @property {number} INFC_IncScoreID=30000 INFC_IncScoreID value
     * @property {number} INFC_MissID=30010 INFC_MissID value
     * @property {number} INFC_BoomID=30020 INFC_BoomID value
     * @property {number} INFC_GiveupID=30030 INFC_GiveupID value
     */
    GameMsg_INFC.INFC_GameMessageClassID = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "INFC_SClassID_UNSPECIFIED"] = 0;
        values[valuesById[10000] = "INFC_GameSettingID"] = 10000;
        values[valuesById[10001] = "INFC_ProtoSettingID"] = 10001;
        values[valuesById[10010] = "INFC_BetStepID"] = 10010;
        values[valuesById[10020] = "INFC_GameStartID"] = 10020;
        values[valuesById[10030] = "INFC_GameRankID"] = 10030;
        values[valuesById[10040] = "INFC_GameResultID"] = 10040;
        values[valuesById[20000] = "INFC_QueryGameSettingID"] = 20000;
        values[valuesById[20001] = "INFC_QueryProtoSettingID"] = 20001;
        values[valuesById[30000] = "INFC_IncScoreID"] = 30000;
        values[valuesById[30010] = "INFC_MissID"] = 30010;
        values[valuesById[30020] = "INFC_BoomID"] = 30020;
        values[valuesById[30030] = "INFC_GiveupID"] = 30030;
        return values;
    })();

    GameMsg_INFC.INFC_GameSetting = (function() {

        /**
         * Properties of a INFC_GameSetting.
         * @memberof GameMsg_INFC
         * @interface IINFC_GameSetting
         * @property {number|null} [TableNo] INFC_GameSetting TableNo
         * @property {number|Long|null} [Bet] INFC_GameSetting Bet
         * @property {number|Long|null} [StartTime] INFC_GameSetting StartTime
         * @property {Array.<GameMsg_INFC.IINFC_Player>|null} [Players] INFC_GameSetting Players
         */

        /**
         * Constructs a new INFC_GameSetting.
         * @memberof GameMsg_INFC
         * @classdesc Represents a INFC_GameSetting.
         * @implements IINFC_GameSetting
         * @constructor
         * @param {GameMsg_INFC.IINFC_GameSetting=} [properties] Properties to set
         */
        function INFC_GameSetting(properties) {
            this.Players = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * INFC_GameSetting TableNo.
         * @member {number} TableNo
         * @memberof GameMsg_INFC.INFC_GameSetting
         * @instance
         */
        INFC_GameSetting.prototype.TableNo = 0;

        /**
         * INFC_GameSetting Bet.
         * @member {number|Long} Bet
         * @memberof GameMsg_INFC.INFC_GameSetting
         * @instance
         */
        INFC_GameSetting.prototype.Bet = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * INFC_GameSetting StartTime.
         * @member {number|Long} StartTime
         * @memberof GameMsg_INFC.INFC_GameSetting
         * @instance
         */
        INFC_GameSetting.prototype.StartTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * INFC_GameSetting Players.
         * @member {Array.<GameMsg_INFC.IINFC_Player>} Players
         * @memberof GameMsg_INFC.INFC_GameSetting
         * @instance
         */
        INFC_GameSetting.prototype.Players = $util.emptyArray;

        /**
         * Creates a new INFC_GameSetting instance using the specified properties.
         * @function create
         * @memberof GameMsg_INFC.INFC_GameSetting
         * @static
         * @param {GameMsg_INFC.IINFC_GameSetting=} [properties] Properties to set
         * @returns {GameMsg_INFC.INFC_GameSetting} INFC_GameSetting instance
         */
        INFC_GameSetting.create = function create(properties) {
            return new INFC_GameSetting(properties);
        };

        /**
         * Encodes the specified INFC_GameSetting message. Does not implicitly {@link GameMsg_INFC.INFC_GameSetting.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_INFC.INFC_GameSetting
         * @static
         * @param {GameMsg_INFC.IINFC_GameSetting} message INFC_GameSetting message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        INFC_GameSetting.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.TableNo != null && Object.hasOwnProperty.call(message, "TableNo"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.TableNo);
            if (message.Bet != null && Object.hasOwnProperty.call(message, "Bet"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.Bet);
            if (message.StartTime != null && Object.hasOwnProperty.call(message, "StartTime"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.StartTime);
            if (message.Players != null && message.Players.length)
                for (var i = 0; i < message.Players.length; ++i)
                    $root.GameMsg_INFC.INFC_Player.encode(message.Players[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified INFC_GameSetting message, length delimited. Does not implicitly {@link GameMsg_INFC.INFC_GameSetting.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_INFC.INFC_GameSetting
         * @static
         * @param {GameMsg_INFC.IINFC_GameSetting} message INFC_GameSetting message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        INFC_GameSetting.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a INFC_GameSetting message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_INFC.INFC_GameSetting
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_INFC.INFC_GameSetting} INFC_GameSetting
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        INFC_GameSetting.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_INFC.INFC_GameSetting();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.TableNo = reader.int32();
                    break;
                case 2:
                    message.Bet = reader.int64();
                    break;
                case 3:
                    message.StartTime = reader.int64();
                    break;
                case 4:
                    if (!(message.Players && message.Players.length))
                        message.Players = [];
                    message.Players.push($root.GameMsg_INFC.INFC_Player.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a INFC_GameSetting message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_INFC.INFC_GameSetting
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_INFC.INFC_GameSetting} INFC_GameSetting
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        INFC_GameSetting.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a INFC_GameSetting message.
         * @function verify
         * @memberof GameMsg_INFC.INFC_GameSetting
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        INFC_GameSetting.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.TableNo != null && message.hasOwnProperty("TableNo"))
                if (!$util.isInteger(message.TableNo))
                    return "TableNo: integer expected";
            if (message.Bet != null && message.hasOwnProperty("Bet"))
                if (!$util.isInteger(message.Bet) && !(message.Bet && $util.isInteger(message.Bet.low) && $util.isInteger(message.Bet.high)))
                    return "Bet: integer|Long expected";
            if (message.StartTime != null && message.hasOwnProperty("StartTime"))
                if (!$util.isInteger(message.StartTime) && !(message.StartTime && $util.isInteger(message.StartTime.low) && $util.isInteger(message.StartTime.high)))
                    return "StartTime: integer|Long expected";
            if (message.Players != null && message.hasOwnProperty("Players")) {
                if (!Array.isArray(message.Players))
                    return "Players: array expected";
                for (var i = 0; i < message.Players.length; ++i) {
                    var error = $root.GameMsg_INFC.INFC_Player.verify(message.Players[i]);
                    if (error)
                        return "Players." + error;
                }
            }
            return null;
        };

        /**
         * Creates a INFC_GameSetting message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_INFC.INFC_GameSetting
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_INFC.INFC_GameSetting} INFC_GameSetting
         */
        INFC_GameSetting.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_INFC.INFC_GameSetting)
                return object;
            var message = new $root.GameMsg_INFC.INFC_GameSetting();
            if (object.TableNo != null)
                message.TableNo = object.TableNo | 0;
            if (object.Bet != null)
                if ($util.Long)
                    (message.Bet = $util.Long.fromValue(object.Bet)).unsigned = false;
                else if (typeof object.Bet === "string")
                    message.Bet = parseInt(object.Bet, 10);
                else if (typeof object.Bet === "number")
                    message.Bet = object.Bet;
                else if (typeof object.Bet === "object")
                    message.Bet = new $util.LongBits(object.Bet.low >>> 0, object.Bet.high >>> 0).toNumber();
            if (object.StartTime != null)
                if ($util.Long)
                    (message.StartTime = $util.Long.fromValue(object.StartTime)).unsigned = false;
                else if (typeof object.StartTime === "string")
                    message.StartTime = parseInt(object.StartTime, 10);
                else if (typeof object.StartTime === "number")
                    message.StartTime = object.StartTime;
                else if (typeof object.StartTime === "object")
                    message.StartTime = new $util.LongBits(object.StartTime.low >>> 0, object.StartTime.high >>> 0).toNumber();
            if (object.Players) {
                if (!Array.isArray(object.Players))
                    throw TypeError(".GameMsg_INFC.INFC_GameSetting.Players: array expected");
                message.Players = [];
                for (var i = 0; i < object.Players.length; ++i) {
                    if (typeof object.Players[i] !== "object")
                        throw TypeError(".GameMsg_INFC.INFC_GameSetting.Players: object expected");
                    message.Players[i] = $root.GameMsg_INFC.INFC_Player.fromObject(object.Players[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a INFC_GameSetting message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_INFC.INFC_GameSetting
         * @static
         * @param {GameMsg_INFC.INFC_GameSetting} message INFC_GameSetting
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        INFC_GameSetting.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.Players = [];
            if (options.defaults) {
                object.TableNo = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.Bet = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.Bet = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.StartTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.StartTime = options.longs === String ? "0" : 0;
            }
            if (message.TableNo != null && message.hasOwnProperty("TableNo"))
                object.TableNo = message.TableNo;
            if (message.Bet != null && message.hasOwnProperty("Bet"))
                if (typeof message.Bet === "number")
                    object.Bet = options.longs === String ? String(message.Bet) : message.Bet;
                else
                    object.Bet = options.longs === String ? $util.Long.prototype.toString.call(message.Bet) : options.longs === Number ? new $util.LongBits(message.Bet.low >>> 0, message.Bet.high >>> 0).toNumber() : message.Bet;
            if (message.StartTime != null && message.hasOwnProperty("StartTime"))
                if (typeof message.StartTime === "number")
                    object.StartTime = options.longs === String ? String(message.StartTime) : message.StartTime;
                else
                    object.StartTime = options.longs === String ? $util.Long.prototype.toString.call(message.StartTime) : options.longs === Number ? new $util.LongBits(message.StartTime.low >>> 0, message.StartTime.high >>> 0).toNumber() : message.StartTime;
            if (message.Players && message.Players.length) {
                object.Players = [];
                for (var j = 0; j < message.Players.length; ++j)
                    object.Players[j] = $root.GameMsg_INFC.INFC_Player.toObject(message.Players[j], options);
            }
            return object;
        };

        /**
         * Converts this INFC_GameSetting to JSON.
         * @function toJSON
         * @memberof GameMsg_INFC.INFC_GameSetting
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        INFC_GameSetting.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return INFC_GameSetting;
    })();

    GameMsg_INFC.INFC_ProtoSetting = (function() {

        /**
         * Properties of a INFC_ProtoSetting.
         * @memberof GameMsg_INFC
         * @interface IINFC_ProtoSetting
         * @property {Array.<GameMsg_INFC.IINFC_Proto_Pattern>|null} [Patterns] INFC_ProtoSetting Patterns
         * @property {Array.<GameMsg_INFC.IINFC_Proto_FruitAttribute>|null} [FruitAttributes] INFC_ProtoSetting FruitAttributes
         * @property {Array.<GameMsg_INFC.IINFC_Proto_FruitEmitter>|null} [FruitEmitters] INFC_ProtoSetting FruitEmitters
         * @property {Array.<GameMsg_INFC.IINFC_Proto_StageGroup>|null} [StageGroups] INFC_ProtoSetting StageGroups
         */

        /**
         * Constructs a new INFC_ProtoSetting.
         * @memberof GameMsg_INFC
         * @classdesc Represents a INFC_ProtoSetting.
         * @implements IINFC_ProtoSetting
         * @constructor
         * @param {GameMsg_INFC.IINFC_ProtoSetting=} [properties] Properties to set
         */
        function INFC_ProtoSetting(properties) {
            this.Patterns = [];
            this.FruitAttributes = [];
            this.FruitEmitters = [];
            this.StageGroups = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * INFC_ProtoSetting Patterns.
         * @member {Array.<GameMsg_INFC.IINFC_Proto_Pattern>} Patterns
         * @memberof GameMsg_INFC.INFC_ProtoSetting
         * @instance
         */
        INFC_ProtoSetting.prototype.Patterns = $util.emptyArray;

        /**
         * INFC_ProtoSetting FruitAttributes.
         * @member {Array.<GameMsg_INFC.IINFC_Proto_FruitAttribute>} FruitAttributes
         * @memberof GameMsg_INFC.INFC_ProtoSetting
         * @instance
         */
        INFC_ProtoSetting.prototype.FruitAttributes = $util.emptyArray;

        /**
         * INFC_ProtoSetting FruitEmitters.
         * @member {Array.<GameMsg_INFC.IINFC_Proto_FruitEmitter>} FruitEmitters
         * @memberof GameMsg_INFC.INFC_ProtoSetting
         * @instance
         */
        INFC_ProtoSetting.prototype.FruitEmitters = $util.emptyArray;

        /**
         * INFC_ProtoSetting StageGroups.
         * @member {Array.<GameMsg_INFC.IINFC_Proto_StageGroup>} StageGroups
         * @memberof GameMsg_INFC.INFC_ProtoSetting
         * @instance
         */
        INFC_ProtoSetting.prototype.StageGroups = $util.emptyArray;

        /**
         * Creates a new INFC_ProtoSetting instance using the specified properties.
         * @function create
         * @memberof GameMsg_INFC.INFC_ProtoSetting
         * @static
         * @param {GameMsg_INFC.IINFC_ProtoSetting=} [properties] Properties to set
         * @returns {GameMsg_INFC.INFC_ProtoSetting} INFC_ProtoSetting instance
         */
        INFC_ProtoSetting.create = function create(properties) {
            return new INFC_ProtoSetting(properties);
        };

        /**
         * Encodes the specified INFC_ProtoSetting message. Does not implicitly {@link GameMsg_INFC.INFC_ProtoSetting.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_INFC.INFC_ProtoSetting
         * @static
         * @param {GameMsg_INFC.IINFC_ProtoSetting} message INFC_ProtoSetting message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        INFC_ProtoSetting.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Patterns != null && message.Patterns.length)
                for (var i = 0; i < message.Patterns.length; ++i)
                    $root.GameMsg_INFC.INFC_Proto_Pattern.encode(message.Patterns[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.FruitAttributes != null && message.FruitAttributes.length)
                for (var i = 0; i < message.FruitAttributes.length; ++i)
                    $root.GameMsg_INFC.INFC_Proto_FruitAttribute.encode(message.FruitAttributes[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.FruitEmitters != null && message.FruitEmitters.length)
                for (var i = 0; i < message.FruitEmitters.length; ++i)
                    $root.GameMsg_INFC.INFC_Proto_FruitEmitter.encode(message.FruitEmitters[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.StageGroups != null && message.StageGroups.length)
                for (var i = 0; i < message.StageGroups.length; ++i)
                    $root.GameMsg_INFC.INFC_Proto_StageGroup.encode(message.StageGroups[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified INFC_ProtoSetting message, length delimited. Does not implicitly {@link GameMsg_INFC.INFC_ProtoSetting.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_INFC.INFC_ProtoSetting
         * @static
         * @param {GameMsg_INFC.IINFC_ProtoSetting} message INFC_ProtoSetting message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        INFC_ProtoSetting.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a INFC_ProtoSetting message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_INFC.INFC_ProtoSetting
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_INFC.INFC_ProtoSetting} INFC_ProtoSetting
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        INFC_ProtoSetting.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_INFC.INFC_ProtoSetting();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.Patterns && message.Patterns.length))
                        message.Patterns = [];
                    message.Patterns.push($root.GameMsg_INFC.INFC_Proto_Pattern.decode(reader, reader.uint32()));
                    break;
                case 2:
                    if (!(message.FruitAttributes && message.FruitAttributes.length))
                        message.FruitAttributes = [];
                    message.FruitAttributes.push($root.GameMsg_INFC.INFC_Proto_FruitAttribute.decode(reader, reader.uint32()));
                    break;
                case 3:
                    if (!(message.FruitEmitters && message.FruitEmitters.length))
                        message.FruitEmitters = [];
                    message.FruitEmitters.push($root.GameMsg_INFC.INFC_Proto_FruitEmitter.decode(reader, reader.uint32()));
                    break;
                case 4:
                    if (!(message.StageGroups && message.StageGroups.length))
                        message.StageGroups = [];
                    message.StageGroups.push($root.GameMsg_INFC.INFC_Proto_StageGroup.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a INFC_ProtoSetting message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_INFC.INFC_ProtoSetting
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_INFC.INFC_ProtoSetting} INFC_ProtoSetting
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        INFC_ProtoSetting.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a INFC_ProtoSetting message.
         * @function verify
         * @memberof GameMsg_INFC.INFC_ProtoSetting
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        INFC_ProtoSetting.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Patterns != null && message.hasOwnProperty("Patterns")) {
                if (!Array.isArray(message.Patterns))
                    return "Patterns: array expected";
                for (var i = 0; i < message.Patterns.length; ++i) {
                    var error = $root.GameMsg_INFC.INFC_Proto_Pattern.verify(message.Patterns[i]);
                    if (error)
                        return "Patterns." + error;
                }
            }
            if (message.FruitAttributes != null && message.hasOwnProperty("FruitAttributes")) {
                if (!Array.isArray(message.FruitAttributes))
                    return "FruitAttributes: array expected";
                for (var i = 0; i < message.FruitAttributes.length; ++i) {
                    var error = $root.GameMsg_INFC.INFC_Proto_FruitAttribute.verify(message.FruitAttributes[i]);
                    if (error)
                        return "FruitAttributes." + error;
                }
            }
            if (message.FruitEmitters != null && message.hasOwnProperty("FruitEmitters")) {
                if (!Array.isArray(message.FruitEmitters))
                    return "FruitEmitters: array expected";
                for (var i = 0; i < message.FruitEmitters.length; ++i) {
                    var error = $root.GameMsg_INFC.INFC_Proto_FruitEmitter.verify(message.FruitEmitters[i]);
                    if (error)
                        return "FruitEmitters." + error;
                }
            }
            if (message.StageGroups != null && message.hasOwnProperty("StageGroups")) {
                if (!Array.isArray(message.StageGroups))
                    return "StageGroups: array expected";
                for (var i = 0; i < message.StageGroups.length; ++i) {
                    var error = $root.GameMsg_INFC.INFC_Proto_StageGroup.verify(message.StageGroups[i]);
                    if (error)
                        return "StageGroups." + error;
                }
            }
            return null;
        };

        /**
         * Creates a INFC_ProtoSetting message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_INFC.INFC_ProtoSetting
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_INFC.INFC_ProtoSetting} INFC_ProtoSetting
         */
        INFC_ProtoSetting.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_INFC.INFC_ProtoSetting)
                return object;
            var message = new $root.GameMsg_INFC.INFC_ProtoSetting();
            if (object.Patterns) {
                if (!Array.isArray(object.Patterns))
                    throw TypeError(".GameMsg_INFC.INFC_ProtoSetting.Patterns: array expected");
                message.Patterns = [];
                for (var i = 0; i < object.Patterns.length; ++i) {
                    if (typeof object.Patterns[i] !== "object")
                        throw TypeError(".GameMsg_INFC.INFC_ProtoSetting.Patterns: object expected");
                    message.Patterns[i] = $root.GameMsg_INFC.INFC_Proto_Pattern.fromObject(object.Patterns[i]);
                }
            }
            if (object.FruitAttributes) {
                if (!Array.isArray(object.FruitAttributes))
                    throw TypeError(".GameMsg_INFC.INFC_ProtoSetting.FruitAttributes: array expected");
                message.FruitAttributes = [];
                for (var i = 0; i < object.FruitAttributes.length; ++i) {
                    if (typeof object.FruitAttributes[i] !== "object")
                        throw TypeError(".GameMsg_INFC.INFC_ProtoSetting.FruitAttributes: object expected");
                    message.FruitAttributes[i] = $root.GameMsg_INFC.INFC_Proto_FruitAttribute.fromObject(object.FruitAttributes[i]);
                }
            }
            if (object.FruitEmitters) {
                if (!Array.isArray(object.FruitEmitters))
                    throw TypeError(".GameMsg_INFC.INFC_ProtoSetting.FruitEmitters: array expected");
                message.FruitEmitters = [];
                for (var i = 0; i < object.FruitEmitters.length; ++i) {
                    if (typeof object.FruitEmitters[i] !== "object")
                        throw TypeError(".GameMsg_INFC.INFC_ProtoSetting.FruitEmitters: object expected");
                    message.FruitEmitters[i] = $root.GameMsg_INFC.INFC_Proto_FruitEmitter.fromObject(object.FruitEmitters[i]);
                }
            }
            if (object.StageGroups) {
                if (!Array.isArray(object.StageGroups))
                    throw TypeError(".GameMsg_INFC.INFC_ProtoSetting.StageGroups: array expected");
                message.StageGroups = [];
                for (var i = 0; i < object.StageGroups.length; ++i) {
                    if (typeof object.StageGroups[i] !== "object")
                        throw TypeError(".GameMsg_INFC.INFC_ProtoSetting.StageGroups: object expected");
                    message.StageGroups[i] = $root.GameMsg_INFC.INFC_Proto_StageGroup.fromObject(object.StageGroups[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a INFC_ProtoSetting message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_INFC.INFC_ProtoSetting
         * @static
         * @param {GameMsg_INFC.INFC_ProtoSetting} message INFC_ProtoSetting
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        INFC_ProtoSetting.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.Patterns = [];
                object.FruitAttributes = [];
                object.FruitEmitters = [];
                object.StageGroups = [];
            }
            if (message.Patterns && message.Patterns.length) {
                object.Patterns = [];
                for (var j = 0; j < message.Patterns.length; ++j)
                    object.Patterns[j] = $root.GameMsg_INFC.INFC_Proto_Pattern.toObject(message.Patterns[j], options);
            }
            if (message.FruitAttributes && message.FruitAttributes.length) {
                object.FruitAttributes = [];
                for (var j = 0; j < message.FruitAttributes.length; ++j)
                    object.FruitAttributes[j] = $root.GameMsg_INFC.INFC_Proto_FruitAttribute.toObject(message.FruitAttributes[j], options);
            }
            if (message.FruitEmitters && message.FruitEmitters.length) {
                object.FruitEmitters = [];
                for (var j = 0; j < message.FruitEmitters.length; ++j)
                    object.FruitEmitters[j] = $root.GameMsg_INFC.INFC_Proto_FruitEmitter.toObject(message.FruitEmitters[j], options);
            }
            if (message.StageGroups && message.StageGroups.length) {
                object.StageGroups = [];
                for (var j = 0; j < message.StageGroups.length; ++j)
                    object.StageGroups[j] = $root.GameMsg_INFC.INFC_Proto_StageGroup.toObject(message.StageGroups[j], options);
            }
            return object;
        };

        /**
         * Converts this INFC_ProtoSetting to JSON.
         * @function toJSON
         * @memberof GameMsg_INFC.INFC_ProtoSetting
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        INFC_ProtoSetting.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return INFC_ProtoSetting;
    })();

    GameMsg_INFC.INFC_GameRank = (function() {

        /**
         * Properties of a INFC_GameRank.
         * @memberof GameMsg_INFC
         * @interface IINFC_GameRank
         * @property {Array.<GameMsg_INFC.IINFC_Player>|null} [Players] INFC_GameRank Players
         */

        /**
         * Constructs a new INFC_GameRank.
         * @memberof GameMsg_INFC
         * @classdesc Represents a INFC_GameRank.
         * @implements IINFC_GameRank
         * @constructor
         * @param {GameMsg_INFC.IINFC_GameRank=} [properties] Properties to set
         */
        function INFC_GameRank(properties) {
            this.Players = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * INFC_GameRank Players.
         * @member {Array.<GameMsg_INFC.IINFC_Player>} Players
         * @memberof GameMsg_INFC.INFC_GameRank
         * @instance
         */
        INFC_GameRank.prototype.Players = $util.emptyArray;

        /**
         * Creates a new INFC_GameRank instance using the specified properties.
         * @function create
         * @memberof GameMsg_INFC.INFC_GameRank
         * @static
         * @param {GameMsg_INFC.IINFC_GameRank=} [properties] Properties to set
         * @returns {GameMsg_INFC.INFC_GameRank} INFC_GameRank instance
         */
        INFC_GameRank.create = function create(properties) {
            return new INFC_GameRank(properties);
        };

        /**
         * Encodes the specified INFC_GameRank message. Does not implicitly {@link GameMsg_INFC.INFC_GameRank.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_INFC.INFC_GameRank
         * @static
         * @param {GameMsg_INFC.IINFC_GameRank} message INFC_GameRank message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        INFC_GameRank.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Players != null && message.Players.length)
                for (var i = 0; i < message.Players.length; ++i)
                    $root.GameMsg_INFC.INFC_Player.encode(message.Players[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified INFC_GameRank message, length delimited. Does not implicitly {@link GameMsg_INFC.INFC_GameRank.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_INFC.INFC_GameRank
         * @static
         * @param {GameMsg_INFC.IINFC_GameRank} message INFC_GameRank message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        INFC_GameRank.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a INFC_GameRank message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_INFC.INFC_GameRank
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_INFC.INFC_GameRank} INFC_GameRank
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        INFC_GameRank.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_INFC.INFC_GameRank();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.Players && message.Players.length))
                        message.Players = [];
                    message.Players.push($root.GameMsg_INFC.INFC_Player.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a INFC_GameRank message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_INFC.INFC_GameRank
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_INFC.INFC_GameRank} INFC_GameRank
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        INFC_GameRank.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a INFC_GameRank message.
         * @function verify
         * @memberof GameMsg_INFC.INFC_GameRank
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        INFC_GameRank.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Players != null && message.hasOwnProperty("Players")) {
                if (!Array.isArray(message.Players))
                    return "Players: array expected";
                for (var i = 0; i < message.Players.length; ++i) {
                    var error = $root.GameMsg_INFC.INFC_Player.verify(message.Players[i]);
                    if (error)
                        return "Players." + error;
                }
            }
            return null;
        };

        /**
         * Creates a INFC_GameRank message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_INFC.INFC_GameRank
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_INFC.INFC_GameRank} INFC_GameRank
         */
        INFC_GameRank.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_INFC.INFC_GameRank)
                return object;
            var message = new $root.GameMsg_INFC.INFC_GameRank();
            if (object.Players) {
                if (!Array.isArray(object.Players))
                    throw TypeError(".GameMsg_INFC.INFC_GameRank.Players: array expected");
                message.Players = [];
                for (var i = 0; i < object.Players.length; ++i) {
                    if (typeof object.Players[i] !== "object")
                        throw TypeError(".GameMsg_INFC.INFC_GameRank.Players: object expected");
                    message.Players[i] = $root.GameMsg_INFC.INFC_Player.fromObject(object.Players[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a INFC_GameRank message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_INFC.INFC_GameRank
         * @static
         * @param {GameMsg_INFC.INFC_GameRank} message INFC_GameRank
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        INFC_GameRank.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.Players = [];
            if (message.Players && message.Players.length) {
                object.Players = [];
                for (var j = 0; j < message.Players.length; ++j)
                    object.Players[j] = $root.GameMsg_INFC.INFC_Player.toObject(message.Players[j], options);
            }
            return object;
        };

        /**
         * Converts this INFC_GameRank to JSON.
         * @function toJSON
         * @memberof GameMsg_INFC.INFC_GameRank
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        INFC_GameRank.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return INFC_GameRank;
    })();

    GameMsg_INFC.INFC_Player = (function() {

        /**
         * Properties of a INFC_Player.
         * @memberof GameMsg_INFC
         * @interface IINFC_Player
         * @property {number|null} [UserID] INFC_Player UserID
         * @property {string|null} [UserName] INFC_Player UserName
         * @property {number|Long|null} [UserScore] INFC_Player UserScore
         * @property {number|null} [Rank] INFC_Player Rank
         * @property {number|Long|null} [Score] INFC_Player Score
         * @property {GameMsg_INFC.INFC_PlayerState|null} [State] INFC_Player State
         * @property {number|null} [Miss] INFC_Player Miss
         */

        /**
         * Constructs a new INFC_Player.
         * @memberof GameMsg_INFC
         * @classdesc Represents a INFC_Player.
         * @implements IINFC_Player
         * @constructor
         * @param {GameMsg_INFC.IINFC_Player=} [properties] Properties to set
         */
        function INFC_Player(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * INFC_Player UserID.
         * @member {number} UserID
         * @memberof GameMsg_INFC.INFC_Player
         * @instance
         */
        INFC_Player.prototype.UserID = 0;

        /**
         * INFC_Player UserName.
         * @member {string} UserName
         * @memberof GameMsg_INFC.INFC_Player
         * @instance
         */
        INFC_Player.prototype.UserName = "";

        /**
         * INFC_Player UserScore.
         * @member {number|Long} UserScore
         * @memberof GameMsg_INFC.INFC_Player
         * @instance
         */
        INFC_Player.prototype.UserScore = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * INFC_Player Rank.
         * @member {number} Rank
         * @memberof GameMsg_INFC.INFC_Player
         * @instance
         */
        INFC_Player.prototype.Rank = 0;

        /**
         * INFC_Player Score.
         * @member {number|Long} Score
         * @memberof GameMsg_INFC.INFC_Player
         * @instance
         */
        INFC_Player.prototype.Score = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * INFC_Player State.
         * @member {GameMsg_INFC.INFC_PlayerState} State
         * @memberof GameMsg_INFC.INFC_Player
         * @instance
         */
        INFC_Player.prototype.State = 0;

        /**
         * INFC_Player Miss.
         * @member {number} Miss
         * @memberof GameMsg_INFC.INFC_Player
         * @instance
         */
        INFC_Player.prototype.Miss = 0;

        /**
         * Creates a new INFC_Player instance using the specified properties.
         * @function create
         * @memberof GameMsg_INFC.INFC_Player
         * @static
         * @param {GameMsg_INFC.IINFC_Player=} [properties] Properties to set
         * @returns {GameMsg_INFC.INFC_Player} INFC_Player instance
         */
        INFC_Player.create = function create(properties) {
            return new INFC_Player(properties);
        };

        /**
         * Encodes the specified INFC_Player message. Does not implicitly {@link GameMsg_INFC.INFC_Player.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_INFC.INFC_Player
         * @static
         * @param {GameMsg_INFC.IINFC_Player} message INFC_Player message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        INFC_Player.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.UserID != null && Object.hasOwnProperty.call(message, "UserID"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.UserID);
            if (message.UserName != null && Object.hasOwnProperty.call(message, "UserName"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.UserName);
            if (message.UserScore != null && Object.hasOwnProperty.call(message, "UserScore"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.UserScore);
            if (message.Rank != null && Object.hasOwnProperty.call(message, "Rank"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.Rank);
            if (message.Score != null && Object.hasOwnProperty.call(message, "Score"))
                writer.uint32(/* id 5, wireType 0 =*/40).int64(message.Score);
            if (message.State != null && Object.hasOwnProperty.call(message, "State"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.State);
            if (message.Miss != null && Object.hasOwnProperty.call(message, "Miss"))
                writer.uint32(/* id 7, wireType 0 =*/56).int32(message.Miss);
            return writer;
        };

        /**
         * Encodes the specified INFC_Player message, length delimited. Does not implicitly {@link GameMsg_INFC.INFC_Player.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_INFC.INFC_Player
         * @static
         * @param {GameMsg_INFC.IINFC_Player} message INFC_Player message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        INFC_Player.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a INFC_Player message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_INFC.INFC_Player
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_INFC.INFC_Player} INFC_Player
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        INFC_Player.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_INFC.INFC_Player();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.UserID = reader.int32();
                    break;
                case 2:
                    message.UserName = reader.string();
                    break;
                case 3:
                    message.UserScore = reader.int64();
                    break;
                case 4:
                    message.Rank = reader.int32();
                    break;
                case 5:
                    message.Score = reader.int64();
                    break;
                case 6:
                    message.State = reader.int32();
                    break;
                case 7:
                    message.Miss = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a INFC_Player message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_INFC.INFC_Player
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_INFC.INFC_Player} INFC_Player
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        INFC_Player.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a INFC_Player message.
         * @function verify
         * @memberof GameMsg_INFC.INFC_Player
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        INFC_Player.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                if (!$util.isInteger(message.UserID))
                    return "UserID: integer expected";
            if (message.UserName != null && message.hasOwnProperty("UserName"))
                if (!$util.isString(message.UserName))
                    return "UserName: string expected";
            if (message.UserScore != null && message.hasOwnProperty("UserScore"))
                if (!$util.isInteger(message.UserScore) && !(message.UserScore && $util.isInteger(message.UserScore.low) && $util.isInteger(message.UserScore.high)))
                    return "UserScore: integer|Long expected";
            if (message.Rank != null && message.hasOwnProperty("Rank"))
                if (!$util.isInteger(message.Rank))
                    return "Rank: integer expected";
            if (message.Score != null && message.hasOwnProperty("Score"))
                if (!$util.isInteger(message.Score) && !(message.Score && $util.isInteger(message.Score.low) && $util.isInteger(message.Score.high)))
                    return "Score: integer|Long expected";
            if (message.State != null && message.hasOwnProperty("State"))
                switch (message.State) {
                default:
                    return "State: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                    break;
                }
            if (message.Miss != null && message.hasOwnProperty("Miss"))
                if (!$util.isInteger(message.Miss))
                    return "Miss: integer expected";
            return null;
        };

        /**
         * Creates a INFC_Player message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_INFC.INFC_Player
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_INFC.INFC_Player} INFC_Player
         */
        INFC_Player.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_INFC.INFC_Player)
                return object;
            var message = new $root.GameMsg_INFC.INFC_Player();
            if (object.UserID != null)
                message.UserID = object.UserID | 0;
            if (object.UserName != null)
                message.UserName = String(object.UserName);
            if (object.UserScore != null)
                if ($util.Long)
                    (message.UserScore = $util.Long.fromValue(object.UserScore)).unsigned = false;
                else if (typeof object.UserScore === "string")
                    message.UserScore = parseInt(object.UserScore, 10);
                else if (typeof object.UserScore === "number")
                    message.UserScore = object.UserScore;
                else if (typeof object.UserScore === "object")
                    message.UserScore = new $util.LongBits(object.UserScore.low >>> 0, object.UserScore.high >>> 0).toNumber();
            if (object.Rank != null)
                message.Rank = object.Rank | 0;
            if (object.Score != null)
                if ($util.Long)
                    (message.Score = $util.Long.fromValue(object.Score)).unsigned = false;
                else if (typeof object.Score === "string")
                    message.Score = parseInt(object.Score, 10);
                else if (typeof object.Score === "number")
                    message.Score = object.Score;
                else if (typeof object.Score === "object")
                    message.Score = new $util.LongBits(object.Score.low >>> 0, object.Score.high >>> 0).toNumber();
            switch (object.State) {
            case "INFC_State_UNSPECIFIED":
            case 0:
                message.State = 0;
                break;
            case "INFC_State_Gaming":
            case 1:
                message.State = 1;
                break;
            case "INFC_State_Dead":
            case 2:
                message.State = 2;
                break;
            case "INFC_State_Offline":
            case 3:
                message.State = 3;
                break;
            }
            if (object.Miss != null)
                message.Miss = object.Miss | 0;
            return message;
        };

        /**
         * Creates a plain object from a INFC_Player message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_INFC.INFC_Player
         * @static
         * @param {GameMsg_INFC.INFC_Player} message INFC_Player
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        INFC_Player.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.UserID = 0;
                object.UserName = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.UserScore = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.UserScore = options.longs === String ? "0" : 0;
                object.Rank = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.Score = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.Score = options.longs === String ? "0" : 0;
                object.State = options.enums === String ? "INFC_State_UNSPECIFIED" : 0;
                object.Miss = 0;
            }
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                object.UserID = message.UserID;
            if (message.UserName != null && message.hasOwnProperty("UserName"))
                object.UserName = message.UserName;
            if (message.UserScore != null && message.hasOwnProperty("UserScore"))
                if (typeof message.UserScore === "number")
                    object.UserScore = options.longs === String ? String(message.UserScore) : message.UserScore;
                else
                    object.UserScore = options.longs === String ? $util.Long.prototype.toString.call(message.UserScore) : options.longs === Number ? new $util.LongBits(message.UserScore.low >>> 0, message.UserScore.high >>> 0).toNumber() : message.UserScore;
            if (message.Rank != null && message.hasOwnProperty("Rank"))
                object.Rank = message.Rank;
            if (message.Score != null && message.hasOwnProperty("Score"))
                if (typeof message.Score === "number")
                    object.Score = options.longs === String ? String(message.Score) : message.Score;
                else
                    object.Score = options.longs === String ? $util.Long.prototype.toString.call(message.Score) : options.longs === Number ? new $util.LongBits(message.Score.low >>> 0, message.Score.high >>> 0).toNumber() : message.Score;
            if (message.State != null && message.hasOwnProperty("State"))
                object.State = options.enums === String ? $root.GameMsg_INFC.INFC_PlayerState[message.State] : message.State;
            if (message.Miss != null && message.hasOwnProperty("Miss"))
                object.Miss = message.Miss;
            return object;
        };

        /**
         * Converts this INFC_Player to JSON.
         * @function toJSON
         * @memberof GameMsg_INFC.INFC_Player
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        INFC_Player.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return INFC_Player;
    })();

    GameMsg_INFC.INFC_IncScore = (function() {

        /**
         * Properties of a INFC_IncScore.
         * @memberof GameMsg_INFC
         * @interface IINFC_IncScore
         * @property {number|Long|null} [Score] INFC_IncScore Score
         */

        /**
         * Constructs a new INFC_IncScore.
         * @memberof GameMsg_INFC
         * @classdesc Represents a INFC_IncScore.
         * @implements IINFC_IncScore
         * @constructor
         * @param {GameMsg_INFC.IINFC_IncScore=} [properties] Properties to set
         */
        function INFC_IncScore(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * INFC_IncScore Score.
         * @member {number|Long} Score
         * @memberof GameMsg_INFC.INFC_IncScore
         * @instance
         */
        INFC_IncScore.prototype.Score = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new INFC_IncScore instance using the specified properties.
         * @function create
         * @memberof GameMsg_INFC.INFC_IncScore
         * @static
         * @param {GameMsg_INFC.IINFC_IncScore=} [properties] Properties to set
         * @returns {GameMsg_INFC.INFC_IncScore} INFC_IncScore instance
         */
        INFC_IncScore.create = function create(properties) {
            return new INFC_IncScore(properties);
        };

        /**
         * Encodes the specified INFC_IncScore message. Does not implicitly {@link GameMsg_INFC.INFC_IncScore.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_INFC.INFC_IncScore
         * @static
         * @param {GameMsg_INFC.IINFC_IncScore} message INFC_IncScore message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        INFC_IncScore.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Score != null && Object.hasOwnProperty.call(message, "Score"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.Score);
            return writer;
        };

        /**
         * Encodes the specified INFC_IncScore message, length delimited. Does not implicitly {@link GameMsg_INFC.INFC_IncScore.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_INFC.INFC_IncScore
         * @static
         * @param {GameMsg_INFC.IINFC_IncScore} message INFC_IncScore message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        INFC_IncScore.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a INFC_IncScore message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_INFC.INFC_IncScore
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_INFC.INFC_IncScore} INFC_IncScore
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        INFC_IncScore.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_INFC.INFC_IncScore();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Score = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a INFC_IncScore message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_INFC.INFC_IncScore
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_INFC.INFC_IncScore} INFC_IncScore
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        INFC_IncScore.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a INFC_IncScore message.
         * @function verify
         * @memberof GameMsg_INFC.INFC_IncScore
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        INFC_IncScore.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Score != null && message.hasOwnProperty("Score"))
                if (!$util.isInteger(message.Score) && !(message.Score && $util.isInteger(message.Score.low) && $util.isInteger(message.Score.high)))
                    return "Score: integer|Long expected";
            return null;
        };

        /**
         * Creates a INFC_IncScore message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_INFC.INFC_IncScore
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_INFC.INFC_IncScore} INFC_IncScore
         */
        INFC_IncScore.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_INFC.INFC_IncScore)
                return object;
            var message = new $root.GameMsg_INFC.INFC_IncScore();
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
         * Creates a plain object from a INFC_IncScore message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_INFC.INFC_IncScore
         * @static
         * @param {GameMsg_INFC.INFC_IncScore} message INFC_IncScore
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        INFC_IncScore.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.Score = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.Score = options.longs === String ? "0" : 0;
            if (message.Score != null && message.hasOwnProperty("Score"))
                if (typeof message.Score === "number")
                    object.Score = options.longs === String ? String(message.Score) : message.Score;
                else
                    object.Score = options.longs === String ? $util.Long.prototype.toString.call(message.Score) : options.longs === Number ? new $util.LongBits(message.Score.low >>> 0, message.Score.high >>> 0).toNumber() : message.Score;
            return object;
        };

        /**
         * Converts this INFC_IncScore to JSON.
         * @function toJSON
         * @memberof GameMsg_INFC.INFC_IncScore
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        INFC_IncScore.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return INFC_IncScore;
    })();

    GameMsg_INFC.INFC_GameResult = (function() {

        /**
         * Properties of a INFC_GameResult.
         * @memberof GameMsg_INFC
         * @interface IINFC_GameResult
         * @property {number|Long|null} [WinMoney] INFC_GameResult WinMoney
         * @property {GameMsg_INFC.IINFC_Player|null} [Winner] INFC_GameResult Winner
         * @property {GameMsg_INFC.IINFC_GameRank|null} [Rank] INFC_GameResult Rank
         */

        /**
         * Constructs a new INFC_GameResult.
         * @memberof GameMsg_INFC
         * @classdesc Represents a INFC_GameResult.
         * @implements IINFC_GameResult
         * @constructor
         * @param {GameMsg_INFC.IINFC_GameResult=} [properties] Properties to set
         */
        function INFC_GameResult(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * INFC_GameResult WinMoney.
         * @member {number|Long} WinMoney
         * @memberof GameMsg_INFC.INFC_GameResult
         * @instance
         */
        INFC_GameResult.prototype.WinMoney = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * INFC_GameResult Winner.
         * @member {GameMsg_INFC.IINFC_Player|null|undefined} Winner
         * @memberof GameMsg_INFC.INFC_GameResult
         * @instance
         */
        INFC_GameResult.prototype.Winner = null;

        /**
         * INFC_GameResult Rank.
         * @member {GameMsg_INFC.IINFC_GameRank|null|undefined} Rank
         * @memberof GameMsg_INFC.INFC_GameResult
         * @instance
         */
        INFC_GameResult.prototype.Rank = null;

        /**
         * Creates a new INFC_GameResult instance using the specified properties.
         * @function create
         * @memberof GameMsg_INFC.INFC_GameResult
         * @static
         * @param {GameMsg_INFC.IINFC_GameResult=} [properties] Properties to set
         * @returns {GameMsg_INFC.INFC_GameResult} INFC_GameResult instance
         */
        INFC_GameResult.create = function create(properties) {
            return new INFC_GameResult(properties);
        };

        /**
         * Encodes the specified INFC_GameResult message. Does not implicitly {@link GameMsg_INFC.INFC_GameResult.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_INFC.INFC_GameResult
         * @static
         * @param {GameMsg_INFC.IINFC_GameResult} message INFC_GameResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        INFC_GameResult.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.WinMoney != null && Object.hasOwnProperty.call(message, "WinMoney"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.WinMoney);
            if (message.Winner != null && Object.hasOwnProperty.call(message, "Winner"))
                $root.GameMsg_INFC.INFC_Player.encode(message.Winner, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.Rank != null && Object.hasOwnProperty.call(message, "Rank"))
                $root.GameMsg_INFC.INFC_GameRank.encode(message.Rank, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified INFC_GameResult message, length delimited. Does not implicitly {@link GameMsg_INFC.INFC_GameResult.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_INFC.INFC_GameResult
         * @static
         * @param {GameMsg_INFC.IINFC_GameResult} message INFC_GameResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        INFC_GameResult.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a INFC_GameResult message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_INFC.INFC_GameResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_INFC.INFC_GameResult} INFC_GameResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        INFC_GameResult.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_INFC.INFC_GameResult();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.WinMoney = reader.int64();
                    break;
                case 2:
                    message.Winner = $root.GameMsg_INFC.INFC_Player.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.Rank = $root.GameMsg_INFC.INFC_GameRank.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a INFC_GameResult message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_INFC.INFC_GameResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_INFC.INFC_GameResult} INFC_GameResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        INFC_GameResult.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a INFC_GameResult message.
         * @function verify
         * @memberof GameMsg_INFC.INFC_GameResult
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        INFC_GameResult.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.WinMoney != null && message.hasOwnProperty("WinMoney"))
                if (!$util.isInteger(message.WinMoney) && !(message.WinMoney && $util.isInteger(message.WinMoney.low) && $util.isInteger(message.WinMoney.high)))
                    return "WinMoney: integer|Long expected";
            if (message.Winner != null && message.hasOwnProperty("Winner")) {
                var error = $root.GameMsg_INFC.INFC_Player.verify(message.Winner);
                if (error)
                    return "Winner." + error;
            }
            if (message.Rank != null && message.hasOwnProperty("Rank")) {
                var error = $root.GameMsg_INFC.INFC_GameRank.verify(message.Rank);
                if (error)
                    return "Rank." + error;
            }
            return null;
        };

        /**
         * Creates a INFC_GameResult message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_INFC.INFC_GameResult
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_INFC.INFC_GameResult} INFC_GameResult
         */
        INFC_GameResult.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_INFC.INFC_GameResult)
                return object;
            var message = new $root.GameMsg_INFC.INFC_GameResult();
            if (object.WinMoney != null)
                if ($util.Long)
                    (message.WinMoney = $util.Long.fromValue(object.WinMoney)).unsigned = false;
                else if (typeof object.WinMoney === "string")
                    message.WinMoney = parseInt(object.WinMoney, 10);
                else if (typeof object.WinMoney === "number")
                    message.WinMoney = object.WinMoney;
                else if (typeof object.WinMoney === "object")
                    message.WinMoney = new $util.LongBits(object.WinMoney.low >>> 0, object.WinMoney.high >>> 0).toNumber();
            if (object.Winner != null) {
                if (typeof object.Winner !== "object")
                    throw TypeError(".GameMsg_INFC.INFC_GameResult.Winner: object expected");
                message.Winner = $root.GameMsg_INFC.INFC_Player.fromObject(object.Winner);
            }
            if (object.Rank != null) {
                if (typeof object.Rank !== "object")
                    throw TypeError(".GameMsg_INFC.INFC_GameResult.Rank: object expected");
                message.Rank = $root.GameMsg_INFC.INFC_GameRank.fromObject(object.Rank);
            }
            return message;
        };

        /**
         * Creates a plain object from a INFC_GameResult message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_INFC.INFC_GameResult
         * @static
         * @param {GameMsg_INFC.INFC_GameResult} message INFC_GameResult
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        INFC_GameResult.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.WinMoney = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.WinMoney = options.longs === String ? "0" : 0;
                object.Winner = null;
                object.Rank = null;
            }
            if (message.WinMoney != null && message.hasOwnProperty("WinMoney"))
                if (typeof message.WinMoney === "number")
                    object.WinMoney = options.longs === String ? String(message.WinMoney) : message.WinMoney;
                else
                    object.WinMoney = options.longs === String ? $util.Long.prototype.toString.call(message.WinMoney) : options.longs === Number ? new $util.LongBits(message.WinMoney.low >>> 0, message.WinMoney.high >>> 0).toNumber() : message.WinMoney;
            if (message.Winner != null && message.hasOwnProperty("Winner"))
                object.Winner = $root.GameMsg_INFC.INFC_Player.toObject(message.Winner, options);
            if (message.Rank != null && message.hasOwnProperty("Rank"))
                object.Rank = $root.GameMsg_INFC.INFC_GameRank.toObject(message.Rank, options);
            return object;
        };

        /**
         * Converts this INFC_GameResult to JSON.
         * @function toJSON
         * @memberof GameMsg_INFC.INFC_GameResult
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        INFC_GameResult.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return INFC_GameResult;
    })();

    GameMsg_INFC.INFC_Proto_Pattern = (function() {

        /**
         * Properties of a INFC_Proto_Pattern.
         * @memberof GameMsg_INFC
         * @interface IINFC_Proto_Pattern
         * @property {number|null} [PatternID] INFC_Proto_Pattern PatternID
         * @property {number|null} [StageGroupID] INFC_Proto_Pattern StageGroupID
         * @property {number|null} [IsLoop] INFC_Proto_Pattern IsLoop
         */

        /**
         * Constructs a new INFC_Proto_Pattern.
         * @memberof GameMsg_INFC
         * @classdesc Represents a INFC_Proto_Pattern.
         * @implements IINFC_Proto_Pattern
         * @constructor
         * @param {GameMsg_INFC.IINFC_Proto_Pattern=} [properties] Properties to set
         */
        function INFC_Proto_Pattern(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * INFC_Proto_Pattern PatternID.
         * @member {number} PatternID
         * @memberof GameMsg_INFC.INFC_Proto_Pattern
         * @instance
         */
        INFC_Proto_Pattern.prototype.PatternID = 0;

        /**
         * INFC_Proto_Pattern StageGroupID.
         * @member {number} StageGroupID
         * @memberof GameMsg_INFC.INFC_Proto_Pattern
         * @instance
         */
        INFC_Proto_Pattern.prototype.StageGroupID = 0;

        /**
         * INFC_Proto_Pattern IsLoop.
         * @member {number} IsLoop
         * @memberof GameMsg_INFC.INFC_Proto_Pattern
         * @instance
         */
        INFC_Proto_Pattern.prototype.IsLoop = 0;

        /**
         * Creates a new INFC_Proto_Pattern instance using the specified properties.
         * @function create
         * @memberof GameMsg_INFC.INFC_Proto_Pattern
         * @static
         * @param {GameMsg_INFC.IINFC_Proto_Pattern=} [properties] Properties to set
         * @returns {GameMsg_INFC.INFC_Proto_Pattern} INFC_Proto_Pattern instance
         */
        INFC_Proto_Pattern.create = function create(properties) {
            return new INFC_Proto_Pattern(properties);
        };

        /**
         * Encodes the specified INFC_Proto_Pattern message. Does not implicitly {@link GameMsg_INFC.INFC_Proto_Pattern.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_INFC.INFC_Proto_Pattern
         * @static
         * @param {GameMsg_INFC.IINFC_Proto_Pattern} message INFC_Proto_Pattern message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        INFC_Proto_Pattern.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.PatternID != null && Object.hasOwnProperty.call(message, "PatternID"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.PatternID);
            if (message.StageGroupID != null && Object.hasOwnProperty.call(message, "StageGroupID"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.StageGroupID);
            if (message.IsLoop != null && Object.hasOwnProperty.call(message, "IsLoop"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.IsLoop);
            return writer;
        };

        /**
         * Encodes the specified INFC_Proto_Pattern message, length delimited. Does not implicitly {@link GameMsg_INFC.INFC_Proto_Pattern.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_INFC.INFC_Proto_Pattern
         * @static
         * @param {GameMsg_INFC.IINFC_Proto_Pattern} message INFC_Proto_Pattern message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        INFC_Proto_Pattern.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a INFC_Proto_Pattern message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_INFC.INFC_Proto_Pattern
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_INFC.INFC_Proto_Pattern} INFC_Proto_Pattern
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        INFC_Proto_Pattern.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_INFC.INFC_Proto_Pattern();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.PatternID = reader.int32();
                    break;
                case 2:
                    message.StageGroupID = reader.int32();
                    break;
                case 3:
                    message.IsLoop = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a INFC_Proto_Pattern message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_INFC.INFC_Proto_Pattern
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_INFC.INFC_Proto_Pattern} INFC_Proto_Pattern
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        INFC_Proto_Pattern.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a INFC_Proto_Pattern message.
         * @function verify
         * @memberof GameMsg_INFC.INFC_Proto_Pattern
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        INFC_Proto_Pattern.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.PatternID != null && message.hasOwnProperty("PatternID"))
                if (!$util.isInteger(message.PatternID))
                    return "PatternID: integer expected";
            if (message.StageGroupID != null && message.hasOwnProperty("StageGroupID"))
                if (!$util.isInteger(message.StageGroupID))
                    return "StageGroupID: integer expected";
            if (message.IsLoop != null && message.hasOwnProperty("IsLoop"))
                if (!$util.isInteger(message.IsLoop))
                    return "IsLoop: integer expected";
            return null;
        };

        /**
         * Creates a INFC_Proto_Pattern message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_INFC.INFC_Proto_Pattern
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_INFC.INFC_Proto_Pattern} INFC_Proto_Pattern
         */
        INFC_Proto_Pattern.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_INFC.INFC_Proto_Pattern)
                return object;
            var message = new $root.GameMsg_INFC.INFC_Proto_Pattern();
            if (object.PatternID != null)
                message.PatternID = object.PatternID | 0;
            if (object.StageGroupID != null)
                message.StageGroupID = object.StageGroupID | 0;
            if (object.IsLoop != null)
                message.IsLoop = object.IsLoop | 0;
            return message;
        };

        /**
         * Creates a plain object from a INFC_Proto_Pattern message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_INFC.INFC_Proto_Pattern
         * @static
         * @param {GameMsg_INFC.INFC_Proto_Pattern} message INFC_Proto_Pattern
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        INFC_Proto_Pattern.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.PatternID = 0;
                object.StageGroupID = 0;
                object.IsLoop = 0;
            }
            if (message.PatternID != null && message.hasOwnProperty("PatternID"))
                object.PatternID = message.PatternID;
            if (message.StageGroupID != null && message.hasOwnProperty("StageGroupID"))
                object.StageGroupID = message.StageGroupID;
            if (message.IsLoop != null && message.hasOwnProperty("IsLoop"))
                object.IsLoop = message.IsLoop;
            return object;
        };

        /**
         * Converts this INFC_Proto_Pattern to JSON.
         * @function toJSON
         * @memberof GameMsg_INFC.INFC_Proto_Pattern
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        INFC_Proto_Pattern.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return INFC_Proto_Pattern;
    })();

    GameMsg_INFC.INFC_Proto_FruitAttribute = (function() {

        /**
         * Properties of a INFC_Proto_FruitAttribute.
         * @memberof GameMsg_INFC
         * @interface IINFC_Proto_FruitAttribute
         * @property {number|null} [ID] INFC_Proto_FruitAttribute ID
         * @property {number|null} [GroupID] INFC_Proto_FruitAttribute GroupID
         * @property {string|null} [FruitName] INFC_Proto_FruitAttribute FruitName
         * @property {number|null} [FruitWeight] INFC_Proto_FruitAttribute FruitWeight
         */

        /**
         * Constructs a new INFC_Proto_FruitAttribute.
         * @memberof GameMsg_INFC
         * @classdesc Represents a INFC_Proto_FruitAttribute.
         * @implements IINFC_Proto_FruitAttribute
         * @constructor
         * @param {GameMsg_INFC.IINFC_Proto_FruitAttribute=} [properties] Properties to set
         */
        function INFC_Proto_FruitAttribute(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * INFC_Proto_FruitAttribute ID.
         * @member {number} ID
         * @memberof GameMsg_INFC.INFC_Proto_FruitAttribute
         * @instance
         */
        INFC_Proto_FruitAttribute.prototype.ID = 0;

        /**
         * INFC_Proto_FruitAttribute GroupID.
         * @member {number} GroupID
         * @memberof GameMsg_INFC.INFC_Proto_FruitAttribute
         * @instance
         */
        INFC_Proto_FruitAttribute.prototype.GroupID = 0;

        /**
         * INFC_Proto_FruitAttribute FruitName.
         * @member {string} FruitName
         * @memberof GameMsg_INFC.INFC_Proto_FruitAttribute
         * @instance
         */
        INFC_Proto_FruitAttribute.prototype.FruitName = "";

        /**
         * INFC_Proto_FruitAttribute FruitWeight.
         * @member {number} FruitWeight
         * @memberof GameMsg_INFC.INFC_Proto_FruitAttribute
         * @instance
         */
        INFC_Proto_FruitAttribute.prototype.FruitWeight = 0;

        /**
         * Creates a new INFC_Proto_FruitAttribute instance using the specified properties.
         * @function create
         * @memberof GameMsg_INFC.INFC_Proto_FruitAttribute
         * @static
         * @param {GameMsg_INFC.IINFC_Proto_FruitAttribute=} [properties] Properties to set
         * @returns {GameMsg_INFC.INFC_Proto_FruitAttribute} INFC_Proto_FruitAttribute instance
         */
        INFC_Proto_FruitAttribute.create = function create(properties) {
            return new INFC_Proto_FruitAttribute(properties);
        };

        /**
         * Encodes the specified INFC_Proto_FruitAttribute message. Does not implicitly {@link GameMsg_INFC.INFC_Proto_FruitAttribute.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_INFC.INFC_Proto_FruitAttribute
         * @static
         * @param {GameMsg_INFC.IINFC_Proto_FruitAttribute} message INFC_Proto_FruitAttribute message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        INFC_Proto_FruitAttribute.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.ID != null && Object.hasOwnProperty.call(message, "ID"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.ID);
            if (message.GroupID != null && Object.hasOwnProperty.call(message, "GroupID"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.GroupID);
            if (message.FruitName != null && Object.hasOwnProperty.call(message, "FruitName"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.FruitName);
            if (message.FruitWeight != null && Object.hasOwnProperty.call(message, "FruitWeight"))
                writer.uint32(/* id 4, wireType 5 =*/37).float(message.FruitWeight);
            return writer;
        };

        /**
         * Encodes the specified INFC_Proto_FruitAttribute message, length delimited. Does not implicitly {@link GameMsg_INFC.INFC_Proto_FruitAttribute.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_INFC.INFC_Proto_FruitAttribute
         * @static
         * @param {GameMsg_INFC.IINFC_Proto_FruitAttribute} message INFC_Proto_FruitAttribute message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        INFC_Proto_FruitAttribute.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a INFC_Proto_FruitAttribute message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_INFC.INFC_Proto_FruitAttribute
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_INFC.INFC_Proto_FruitAttribute} INFC_Proto_FruitAttribute
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        INFC_Proto_FruitAttribute.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_INFC.INFC_Proto_FruitAttribute();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.ID = reader.int32();
                    break;
                case 2:
                    message.GroupID = reader.int32();
                    break;
                case 3:
                    message.FruitName = reader.string();
                    break;
                case 4:
                    message.FruitWeight = reader.float();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a INFC_Proto_FruitAttribute message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_INFC.INFC_Proto_FruitAttribute
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_INFC.INFC_Proto_FruitAttribute} INFC_Proto_FruitAttribute
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        INFC_Proto_FruitAttribute.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a INFC_Proto_FruitAttribute message.
         * @function verify
         * @memberof GameMsg_INFC.INFC_Proto_FruitAttribute
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        INFC_Proto_FruitAttribute.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.ID != null && message.hasOwnProperty("ID"))
                if (!$util.isInteger(message.ID))
                    return "ID: integer expected";
            if (message.GroupID != null && message.hasOwnProperty("GroupID"))
                if (!$util.isInteger(message.GroupID))
                    return "GroupID: integer expected";
            if (message.FruitName != null && message.hasOwnProperty("FruitName"))
                if (!$util.isString(message.FruitName))
                    return "FruitName: string expected";
            if (message.FruitWeight != null && message.hasOwnProperty("FruitWeight"))
                if (typeof message.FruitWeight !== "number")
                    return "FruitWeight: number expected";
            return null;
        };

        /**
         * Creates a INFC_Proto_FruitAttribute message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_INFC.INFC_Proto_FruitAttribute
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_INFC.INFC_Proto_FruitAttribute} INFC_Proto_FruitAttribute
         */
        INFC_Proto_FruitAttribute.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_INFC.INFC_Proto_FruitAttribute)
                return object;
            var message = new $root.GameMsg_INFC.INFC_Proto_FruitAttribute();
            if (object.ID != null)
                message.ID = object.ID | 0;
            if (object.GroupID != null)
                message.GroupID = object.GroupID | 0;
            if (object.FruitName != null)
                message.FruitName = String(object.FruitName);
            if (object.FruitWeight != null)
                message.FruitWeight = Number(object.FruitWeight);
            return message;
        };

        /**
         * Creates a plain object from a INFC_Proto_FruitAttribute message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_INFC.INFC_Proto_FruitAttribute
         * @static
         * @param {GameMsg_INFC.INFC_Proto_FruitAttribute} message INFC_Proto_FruitAttribute
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        INFC_Proto_FruitAttribute.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.ID = 0;
                object.GroupID = 0;
                object.FruitName = "";
                object.FruitWeight = 0;
            }
            if (message.ID != null && message.hasOwnProperty("ID"))
                object.ID = message.ID;
            if (message.GroupID != null && message.hasOwnProperty("GroupID"))
                object.GroupID = message.GroupID;
            if (message.FruitName != null && message.hasOwnProperty("FruitName"))
                object.FruitName = message.FruitName;
            if (message.FruitWeight != null && message.hasOwnProperty("FruitWeight"))
                object.FruitWeight = options.json && !isFinite(message.FruitWeight) ? String(message.FruitWeight) : message.FruitWeight;
            return object;
        };

        /**
         * Converts this INFC_Proto_FruitAttribute to JSON.
         * @function toJSON
         * @memberof GameMsg_INFC.INFC_Proto_FruitAttribute
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        INFC_Proto_FruitAttribute.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return INFC_Proto_FruitAttribute;
    })();

    GameMsg_INFC.INFC_Proto_FruitEmitter = (function() {

        /**
         * Properties of a INFC_Proto_FruitEmitter.
         * @memberof GameMsg_INFC
         * @interface IINFC_Proto_FruitEmitter
         * @property {number|null} [ID] INFC_Proto_FruitEmitter ID
         * @property {number|null} [EmitterGroupID] INFC_Proto_FruitEmitter EmitterGroupID
         * @property {number|null} [EmitterID] INFC_Proto_FruitEmitter EmitterID
         * @property {number|null} [AngleMin] INFC_Proto_FruitEmitter AngleMin
         * @property {number|null} [AngleMax] INFC_Proto_FruitEmitter AngleMax
         * @property {number|null} [ForceMin] INFC_Proto_FruitEmitter ForceMin
         * @property {number|null} [ForceMax] INFC_Proto_FruitEmitter ForceMax
         * @property {number|null} [IntervalMin] INFC_Proto_FruitEmitter IntervalMin
         * @property {number|null} [IntervalMax] INFC_Proto_FruitEmitter IntervalMax
         * @property {number|null} [FruitID] INFC_Proto_FruitEmitter FruitID
         */

        /**
         * Constructs a new INFC_Proto_FruitEmitter.
         * @memberof GameMsg_INFC
         * @classdesc Represents a INFC_Proto_FruitEmitter.
         * @implements IINFC_Proto_FruitEmitter
         * @constructor
         * @param {GameMsg_INFC.IINFC_Proto_FruitEmitter=} [properties] Properties to set
         */
        function INFC_Proto_FruitEmitter(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * INFC_Proto_FruitEmitter ID.
         * @member {number} ID
         * @memberof GameMsg_INFC.INFC_Proto_FruitEmitter
         * @instance
         */
        INFC_Proto_FruitEmitter.prototype.ID = 0;

        /**
         * INFC_Proto_FruitEmitter EmitterGroupID.
         * @member {number} EmitterGroupID
         * @memberof GameMsg_INFC.INFC_Proto_FruitEmitter
         * @instance
         */
        INFC_Proto_FruitEmitter.prototype.EmitterGroupID = 0;

        /**
         * INFC_Proto_FruitEmitter EmitterID.
         * @member {number} EmitterID
         * @memberof GameMsg_INFC.INFC_Proto_FruitEmitter
         * @instance
         */
        INFC_Proto_FruitEmitter.prototype.EmitterID = 0;

        /**
         * INFC_Proto_FruitEmitter AngleMin.
         * @member {number} AngleMin
         * @memberof GameMsg_INFC.INFC_Proto_FruitEmitter
         * @instance
         */
        INFC_Proto_FruitEmitter.prototype.AngleMin = 0;

        /**
         * INFC_Proto_FruitEmitter AngleMax.
         * @member {number} AngleMax
         * @memberof GameMsg_INFC.INFC_Proto_FruitEmitter
         * @instance
         */
        INFC_Proto_FruitEmitter.prototype.AngleMax = 0;

        /**
         * INFC_Proto_FruitEmitter ForceMin.
         * @member {number} ForceMin
         * @memberof GameMsg_INFC.INFC_Proto_FruitEmitter
         * @instance
         */
        INFC_Proto_FruitEmitter.prototype.ForceMin = 0;

        /**
         * INFC_Proto_FruitEmitter ForceMax.
         * @member {number} ForceMax
         * @memberof GameMsg_INFC.INFC_Proto_FruitEmitter
         * @instance
         */
        INFC_Proto_FruitEmitter.prototype.ForceMax = 0;

        /**
         * INFC_Proto_FruitEmitter IntervalMin.
         * @member {number} IntervalMin
         * @memberof GameMsg_INFC.INFC_Proto_FruitEmitter
         * @instance
         */
        INFC_Proto_FruitEmitter.prototype.IntervalMin = 0;

        /**
         * INFC_Proto_FruitEmitter IntervalMax.
         * @member {number} IntervalMax
         * @memberof GameMsg_INFC.INFC_Proto_FruitEmitter
         * @instance
         */
        INFC_Proto_FruitEmitter.prototype.IntervalMax = 0;

        /**
         * INFC_Proto_FruitEmitter FruitID.
         * @member {number} FruitID
         * @memberof GameMsg_INFC.INFC_Proto_FruitEmitter
         * @instance
         */
        INFC_Proto_FruitEmitter.prototype.FruitID = 0;

        /**
         * Creates a new INFC_Proto_FruitEmitter instance using the specified properties.
         * @function create
         * @memberof GameMsg_INFC.INFC_Proto_FruitEmitter
         * @static
         * @param {GameMsg_INFC.IINFC_Proto_FruitEmitter=} [properties] Properties to set
         * @returns {GameMsg_INFC.INFC_Proto_FruitEmitter} INFC_Proto_FruitEmitter instance
         */
        INFC_Proto_FruitEmitter.create = function create(properties) {
            return new INFC_Proto_FruitEmitter(properties);
        };

        /**
         * Encodes the specified INFC_Proto_FruitEmitter message. Does not implicitly {@link GameMsg_INFC.INFC_Proto_FruitEmitter.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_INFC.INFC_Proto_FruitEmitter
         * @static
         * @param {GameMsg_INFC.IINFC_Proto_FruitEmitter} message INFC_Proto_FruitEmitter message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        INFC_Proto_FruitEmitter.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.ID != null && Object.hasOwnProperty.call(message, "ID"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.ID);
            if (message.EmitterGroupID != null && Object.hasOwnProperty.call(message, "EmitterGroupID"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.EmitterGroupID);
            if (message.EmitterID != null && Object.hasOwnProperty.call(message, "EmitterID"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.EmitterID);
            if (message.AngleMin != null && Object.hasOwnProperty.call(message, "AngleMin"))
                writer.uint32(/* id 4, wireType 5 =*/37).float(message.AngleMin);
            if (message.AngleMax != null && Object.hasOwnProperty.call(message, "AngleMax"))
                writer.uint32(/* id 5, wireType 5 =*/45).float(message.AngleMax);
            if (message.ForceMin != null && Object.hasOwnProperty.call(message, "ForceMin"))
                writer.uint32(/* id 6, wireType 5 =*/53).float(message.ForceMin);
            if (message.ForceMax != null && Object.hasOwnProperty.call(message, "ForceMax"))
                writer.uint32(/* id 7, wireType 5 =*/61).float(message.ForceMax);
            if (message.IntervalMin != null && Object.hasOwnProperty.call(message, "IntervalMin"))
                writer.uint32(/* id 8, wireType 5 =*/69).float(message.IntervalMin);
            if (message.IntervalMax != null && Object.hasOwnProperty.call(message, "IntervalMax"))
                writer.uint32(/* id 9, wireType 5 =*/77).float(message.IntervalMax);
            if (message.FruitID != null && Object.hasOwnProperty.call(message, "FruitID"))
                writer.uint32(/* id 10, wireType 5 =*/85).float(message.FruitID);
            return writer;
        };

        /**
         * Encodes the specified INFC_Proto_FruitEmitter message, length delimited. Does not implicitly {@link GameMsg_INFC.INFC_Proto_FruitEmitter.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_INFC.INFC_Proto_FruitEmitter
         * @static
         * @param {GameMsg_INFC.IINFC_Proto_FruitEmitter} message INFC_Proto_FruitEmitter message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        INFC_Proto_FruitEmitter.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a INFC_Proto_FruitEmitter message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_INFC.INFC_Proto_FruitEmitter
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_INFC.INFC_Proto_FruitEmitter} INFC_Proto_FruitEmitter
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        INFC_Proto_FruitEmitter.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_INFC.INFC_Proto_FruitEmitter();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.ID = reader.int32();
                    break;
                case 2:
                    message.EmitterGroupID = reader.int32();
                    break;
                case 3:
                    message.EmitterID = reader.int32();
                    break;
                case 4:
                    message.AngleMin = reader.float();
                    break;
                case 5:
                    message.AngleMax = reader.float();
                    break;
                case 6:
                    message.ForceMin = reader.float();
                    break;
                case 7:
                    message.ForceMax = reader.float();
                    break;
                case 8:
                    message.IntervalMin = reader.float();
                    break;
                case 9:
                    message.IntervalMax = reader.float();
                    break;
                case 10:
                    message.FruitID = reader.float();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a INFC_Proto_FruitEmitter message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_INFC.INFC_Proto_FruitEmitter
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_INFC.INFC_Proto_FruitEmitter} INFC_Proto_FruitEmitter
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        INFC_Proto_FruitEmitter.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a INFC_Proto_FruitEmitter message.
         * @function verify
         * @memberof GameMsg_INFC.INFC_Proto_FruitEmitter
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        INFC_Proto_FruitEmitter.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.ID != null && message.hasOwnProperty("ID"))
                if (!$util.isInteger(message.ID))
                    return "ID: integer expected";
            if (message.EmitterGroupID != null && message.hasOwnProperty("EmitterGroupID"))
                if (!$util.isInteger(message.EmitterGroupID))
                    return "EmitterGroupID: integer expected";
            if (message.EmitterID != null && message.hasOwnProperty("EmitterID"))
                if (!$util.isInteger(message.EmitterID))
                    return "EmitterID: integer expected";
            if (message.AngleMin != null && message.hasOwnProperty("AngleMin"))
                if (typeof message.AngleMin !== "number")
                    return "AngleMin: number expected";
            if (message.AngleMax != null && message.hasOwnProperty("AngleMax"))
                if (typeof message.AngleMax !== "number")
                    return "AngleMax: number expected";
            if (message.ForceMin != null && message.hasOwnProperty("ForceMin"))
                if (typeof message.ForceMin !== "number")
                    return "ForceMin: number expected";
            if (message.ForceMax != null && message.hasOwnProperty("ForceMax"))
                if (typeof message.ForceMax !== "number")
                    return "ForceMax: number expected";
            if (message.IntervalMin != null && message.hasOwnProperty("IntervalMin"))
                if (typeof message.IntervalMin !== "number")
                    return "IntervalMin: number expected";
            if (message.IntervalMax != null && message.hasOwnProperty("IntervalMax"))
                if (typeof message.IntervalMax !== "number")
                    return "IntervalMax: number expected";
            if (message.FruitID != null && message.hasOwnProperty("FruitID"))
                if (typeof message.FruitID !== "number")
                    return "FruitID: number expected";
            return null;
        };

        /**
         * Creates a INFC_Proto_FruitEmitter message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_INFC.INFC_Proto_FruitEmitter
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_INFC.INFC_Proto_FruitEmitter} INFC_Proto_FruitEmitter
         */
        INFC_Proto_FruitEmitter.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_INFC.INFC_Proto_FruitEmitter)
                return object;
            var message = new $root.GameMsg_INFC.INFC_Proto_FruitEmitter();
            if (object.ID != null)
                message.ID = object.ID | 0;
            if (object.EmitterGroupID != null)
                message.EmitterGroupID = object.EmitterGroupID | 0;
            if (object.EmitterID != null)
                message.EmitterID = object.EmitterID | 0;
            if (object.AngleMin != null)
                message.AngleMin = Number(object.AngleMin);
            if (object.AngleMax != null)
                message.AngleMax = Number(object.AngleMax);
            if (object.ForceMin != null)
                message.ForceMin = Number(object.ForceMin);
            if (object.ForceMax != null)
                message.ForceMax = Number(object.ForceMax);
            if (object.IntervalMin != null)
                message.IntervalMin = Number(object.IntervalMin);
            if (object.IntervalMax != null)
                message.IntervalMax = Number(object.IntervalMax);
            if (object.FruitID != null)
                message.FruitID = Number(object.FruitID);
            return message;
        };

        /**
         * Creates a plain object from a INFC_Proto_FruitEmitter message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_INFC.INFC_Proto_FruitEmitter
         * @static
         * @param {GameMsg_INFC.INFC_Proto_FruitEmitter} message INFC_Proto_FruitEmitter
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        INFC_Proto_FruitEmitter.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.ID = 0;
                object.EmitterGroupID = 0;
                object.EmitterID = 0;
                object.AngleMin = 0;
                object.AngleMax = 0;
                object.ForceMin = 0;
                object.ForceMax = 0;
                object.IntervalMin = 0;
                object.IntervalMax = 0;
                object.FruitID = 0;
            }
            if (message.ID != null && message.hasOwnProperty("ID"))
                object.ID = message.ID;
            if (message.EmitterGroupID != null && message.hasOwnProperty("EmitterGroupID"))
                object.EmitterGroupID = message.EmitterGroupID;
            if (message.EmitterID != null && message.hasOwnProperty("EmitterID"))
                object.EmitterID = message.EmitterID;
            if (message.AngleMin != null && message.hasOwnProperty("AngleMin"))
                object.AngleMin = options.json && !isFinite(message.AngleMin) ? String(message.AngleMin) : message.AngleMin;
            if (message.AngleMax != null && message.hasOwnProperty("AngleMax"))
                object.AngleMax = options.json && !isFinite(message.AngleMax) ? String(message.AngleMax) : message.AngleMax;
            if (message.ForceMin != null && message.hasOwnProperty("ForceMin"))
                object.ForceMin = options.json && !isFinite(message.ForceMin) ? String(message.ForceMin) : message.ForceMin;
            if (message.ForceMax != null && message.hasOwnProperty("ForceMax"))
                object.ForceMax = options.json && !isFinite(message.ForceMax) ? String(message.ForceMax) : message.ForceMax;
            if (message.IntervalMin != null && message.hasOwnProperty("IntervalMin"))
                object.IntervalMin = options.json && !isFinite(message.IntervalMin) ? String(message.IntervalMin) : message.IntervalMin;
            if (message.IntervalMax != null && message.hasOwnProperty("IntervalMax"))
                object.IntervalMax = options.json && !isFinite(message.IntervalMax) ? String(message.IntervalMax) : message.IntervalMax;
            if (message.FruitID != null && message.hasOwnProperty("FruitID"))
                object.FruitID = options.json && !isFinite(message.FruitID) ? String(message.FruitID) : message.FruitID;
            return object;
        };

        /**
         * Converts this INFC_Proto_FruitEmitter to JSON.
         * @function toJSON
         * @memberof GameMsg_INFC.INFC_Proto_FruitEmitter
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        INFC_Proto_FruitEmitter.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return INFC_Proto_FruitEmitter;
    })();

    GameMsg_INFC.INFC_Proto_StageGroup = (function() {

        /**
         * Properties of a INFC_Proto_StageGroup.
         * @memberof GameMsg_INFC
         * @interface IINFC_Proto_StageGroup
         * @property {number|null} [StageGroupID] INFC_Proto_StageGroup StageGroupID
         * @property {number|null} [EmitterGroupID] INFC_Proto_StageGroup EmitterGroupID
         * @property {number|null} [OrderID] INFC_Proto_StageGroup OrderID
         * @property {number|null} [GroupDelayTime] INFC_Proto_StageGroup GroupDelayTime
         */

        /**
         * Constructs a new INFC_Proto_StageGroup.
         * @memberof GameMsg_INFC
         * @classdesc Represents a INFC_Proto_StageGroup.
         * @implements IINFC_Proto_StageGroup
         * @constructor
         * @param {GameMsg_INFC.IINFC_Proto_StageGroup=} [properties] Properties to set
         */
        function INFC_Proto_StageGroup(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * INFC_Proto_StageGroup StageGroupID.
         * @member {number} StageGroupID
         * @memberof GameMsg_INFC.INFC_Proto_StageGroup
         * @instance
         */
        INFC_Proto_StageGroup.prototype.StageGroupID = 0;

        /**
         * INFC_Proto_StageGroup EmitterGroupID.
         * @member {number} EmitterGroupID
         * @memberof GameMsg_INFC.INFC_Proto_StageGroup
         * @instance
         */
        INFC_Proto_StageGroup.prototype.EmitterGroupID = 0;

        /**
         * INFC_Proto_StageGroup OrderID.
         * @member {number} OrderID
         * @memberof GameMsg_INFC.INFC_Proto_StageGroup
         * @instance
         */
        INFC_Proto_StageGroup.prototype.OrderID = 0;

        /**
         * INFC_Proto_StageGroup GroupDelayTime.
         * @member {number} GroupDelayTime
         * @memberof GameMsg_INFC.INFC_Proto_StageGroup
         * @instance
         */
        INFC_Proto_StageGroup.prototype.GroupDelayTime = 0;

        /**
         * Creates a new INFC_Proto_StageGroup instance using the specified properties.
         * @function create
         * @memberof GameMsg_INFC.INFC_Proto_StageGroup
         * @static
         * @param {GameMsg_INFC.IINFC_Proto_StageGroup=} [properties] Properties to set
         * @returns {GameMsg_INFC.INFC_Proto_StageGroup} INFC_Proto_StageGroup instance
         */
        INFC_Proto_StageGroup.create = function create(properties) {
            return new INFC_Proto_StageGroup(properties);
        };

        /**
         * Encodes the specified INFC_Proto_StageGroup message. Does not implicitly {@link GameMsg_INFC.INFC_Proto_StageGroup.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_INFC.INFC_Proto_StageGroup
         * @static
         * @param {GameMsg_INFC.IINFC_Proto_StageGroup} message INFC_Proto_StageGroup message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        INFC_Proto_StageGroup.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.StageGroupID != null && Object.hasOwnProperty.call(message, "StageGroupID"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.StageGroupID);
            if (message.EmitterGroupID != null && Object.hasOwnProperty.call(message, "EmitterGroupID"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.EmitterGroupID);
            if (message.OrderID != null && Object.hasOwnProperty.call(message, "OrderID"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.OrderID);
            if (message.GroupDelayTime != null && Object.hasOwnProperty.call(message, "GroupDelayTime"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.GroupDelayTime);
            return writer;
        };

        /**
         * Encodes the specified INFC_Proto_StageGroup message, length delimited. Does not implicitly {@link GameMsg_INFC.INFC_Proto_StageGroup.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_INFC.INFC_Proto_StageGroup
         * @static
         * @param {GameMsg_INFC.IINFC_Proto_StageGroup} message INFC_Proto_StageGroup message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        INFC_Proto_StageGroup.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a INFC_Proto_StageGroup message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_INFC.INFC_Proto_StageGroup
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_INFC.INFC_Proto_StageGroup} INFC_Proto_StageGroup
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        INFC_Proto_StageGroup.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_INFC.INFC_Proto_StageGroup();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.StageGroupID = reader.int32();
                    break;
                case 2:
                    message.EmitterGroupID = reader.int32();
                    break;
                case 3:
                    message.OrderID = reader.int32();
                    break;
                case 4:
                    message.GroupDelayTime = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a INFC_Proto_StageGroup message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_INFC.INFC_Proto_StageGroup
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_INFC.INFC_Proto_StageGroup} INFC_Proto_StageGroup
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        INFC_Proto_StageGroup.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a INFC_Proto_StageGroup message.
         * @function verify
         * @memberof GameMsg_INFC.INFC_Proto_StageGroup
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        INFC_Proto_StageGroup.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.StageGroupID != null && message.hasOwnProperty("StageGroupID"))
                if (!$util.isInteger(message.StageGroupID))
                    return "StageGroupID: integer expected";
            if (message.EmitterGroupID != null && message.hasOwnProperty("EmitterGroupID"))
                if (!$util.isInteger(message.EmitterGroupID))
                    return "EmitterGroupID: integer expected";
            if (message.OrderID != null && message.hasOwnProperty("OrderID"))
                if (!$util.isInteger(message.OrderID))
                    return "OrderID: integer expected";
            if (message.GroupDelayTime != null && message.hasOwnProperty("GroupDelayTime"))
                if (!$util.isInteger(message.GroupDelayTime))
                    return "GroupDelayTime: integer expected";
            return null;
        };

        /**
         * Creates a INFC_Proto_StageGroup message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_INFC.INFC_Proto_StageGroup
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_INFC.INFC_Proto_StageGroup} INFC_Proto_StageGroup
         */
        INFC_Proto_StageGroup.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_INFC.INFC_Proto_StageGroup)
                return object;
            var message = new $root.GameMsg_INFC.INFC_Proto_StageGroup();
            if (object.StageGroupID != null)
                message.StageGroupID = object.StageGroupID | 0;
            if (object.EmitterGroupID != null)
                message.EmitterGroupID = object.EmitterGroupID | 0;
            if (object.OrderID != null)
                message.OrderID = object.OrderID | 0;
            if (object.GroupDelayTime != null)
                message.GroupDelayTime = object.GroupDelayTime | 0;
            return message;
        };

        /**
         * Creates a plain object from a INFC_Proto_StageGroup message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_INFC.INFC_Proto_StageGroup
         * @static
         * @param {GameMsg_INFC.INFC_Proto_StageGroup} message INFC_Proto_StageGroup
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        INFC_Proto_StageGroup.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.StageGroupID = 0;
                object.EmitterGroupID = 0;
                object.OrderID = 0;
                object.GroupDelayTime = 0;
            }
            if (message.StageGroupID != null && message.hasOwnProperty("StageGroupID"))
                object.StageGroupID = message.StageGroupID;
            if (message.EmitterGroupID != null && message.hasOwnProperty("EmitterGroupID"))
                object.EmitterGroupID = message.EmitterGroupID;
            if (message.OrderID != null && message.hasOwnProperty("OrderID"))
                object.OrderID = message.OrderID;
            if (message.GroupDelayTime != null && message.hasOwnProperty("GroupDelayTime"))
                object.GroupDelayTime = message.GroupDelayTime;
            return object;
        };

        /**
         * Converts this INFC_Proto_StageGroup to JSON.
         * @function toJSON
         * @memberof GameMsg_INFC.INFC_Proto_StageGroup
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        INFC_Proto_StageGroup.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return INFC_Proto_StageGroup;
    })();

    return GameMsg_INFC;
})();

module.exports = $root;
