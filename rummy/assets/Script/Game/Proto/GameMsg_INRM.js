/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

//var $protobuf = require("protobufjs/minimal");
var $protobuf = protobuf;

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.GameMsg_INRM = (function() {

    /**
     * Namespace GameMsg_INRM.
     * @exports GameMsg_INRM
     * @namespace
     */
    var GameMsg_INRM = {};

    /**
     * INRM_PState enum.
     * @name GameMsg_INRM.INRM_PState
     * @enum {number}
     * @property {number} INRM_PState_UNSPECIFIED=0 INRM_PState_UNSPECIFIED value
     * @property {number} INRM_PState_Wait=1 INRM_PState_Wait value
     * @property {number} INRM_PState_GameV1=10 INRM_PState_GameV1 value
     * @property {number} INRM_PState_GameV2=11 INRM_PState_GameV2 value
     * @property {number} INRM_PState_FirstGiveup=20 INRM_PState_FirstGiveup value
     * @property {number} INRM_PState_Giveup=21 INRM_PState_Giveup value
     * @property {number} INRM_PState_Bluff=30 INRM_PState_Bluff value
     * @property {number} INRM_PState_Victory=40 INRM_PState_Victory value
     * @property {number} INRM_PState_Loss=50 INRM_PState_Loss value
     */
    GameMsg_INRM.INRM_PState = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "INRM_PState_UNSPECIFIED"] = 0;
        values[valuesById[1] = "INRM_PState_Wait"] = 1;
        values[valuesById[10] = "INRM_PState_GameV1"] = 10;
        values[valuesById[11] = "INRM_PState_GameV2"] = 11;
        values[valuesById[20] = "INRM_PState_FirstGiveup"] = 20;
        values[valuesById[21] = "INRM_PState_Giveup"] = 21;
        values[valuesById[30] = "INRM_PState_Bluff"] = 30;
        values[valuesById[40] = "INRM_PState_Victory"] = 40;
        values[valuesById[50] = "INRM_PState_Loss"] = 50;
        return values;
    })();

    /**
     * INRM_GState enum.
     * @name GameMsg_INRM.INRM_GState
     * @enum {number}
     * @property {number} INRM_GState_UNSPECIFIED=0 INRM_GState_UNSPECIFIED value
     * @property {number} INRM_GState_WaitPlayer=1 INRM_GState_WaitPlayer value
     * @property {number} INRM_GState_CountDown=10 INRM_GState_CountDown value
     * @property {number} INRM_GState_Gaming=20 INRM_GState_Gaming value
     */
    GameMsg_INRM.INRM_GState = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "INRM_GState_UNSPECIFIED"] = 0;
        values[valuesById[1] = "INRM_GState_WaitPlayer"] = 1;
        values[valuesById[10] = "INRM_GState_CountDown"] = 10;
        values[valuesById[20] = "INRM_GState_Gaming"] = 20;
        return values;
    })();

    /**
     * INRM_GameMessageClassID enum.
     * @name GameMsg_INRM.INRM_GameMessageClassID
     * @enum {number}
     * @property {number} INRM_SClassID_UNSPECIFIED=0 INRM_SClassID_UNSPECIFIED value
     * @property {number} INRM_GameSettingID=10000 INRM_GameSettingID value
     * @property {number} INRM_GameStateID=10010 INRM_GameStateID value
     * @property {number} INRM_GameResultID=10020 INRM_GameResultID value
     * @property {number} INRM_PlayerCardID=10030 INRM_PlayerCardID value
     * @property {number} INRM_DeckResetID=10040 INRM_DeckResetID value
     * @property {number} INRM_GameStartCountDownID=20000 INRM_GameStartCountDownID value
     * @property {number} INRM_GameStartCountDownCancelID=20001 INRM_GameStartCountDownCancelID value
     * @property {number} INRM_PlayerActionCountDownID=20010 INRM_PlayerActionCountDownID value
     * @property {number} INRM_PlayerActionCountDownCancelID=20011 INRM_PlayerActionCountDownCancelID value
     * @property {number} INRM_WaitFinalRefreshCountDownID=20020 INRM_WaitFinalRefreshCountDownID value
     * @property {number} INRM_RefreshHandID=30000 INRM_RefreshHandID value
     * @property {number} INRM_PopOpenDeckID=30010 INRM_PopOpenDeckID value
     * @property {number} INRM_PopCloseDeckID=30011 INRM_PopCloseDeckID value
     * @property {number} INRM_GiveupID=30020 INRM_GiveupID value
     * @property {number} INRM_ThrowCardID=30030 INRM_ThrowCardID value
     * @property {number} INRM_DeclareID=30040 INRM_DeclareID value
     * @property {number} INRM_MissID=30050 INRM_MissID value
     * @property {number} INRM_RefreshHandRetID=40000 INRM_RefreshHandRetID value
     * @property {number} INRM_PopOpenDeckRetID=40010 INRM_PopOpenDeckRetID value
     * @property {number} INRM_PopCloseDeckRetID=40011 INRM_PopCloseDeckRetID value
     * @property {number} INRM_GiveupRetID=40020 INRM_GiveupRetID value
     * @property {number} INRM_ThrowCardRetID=40030 INRM_ThrowCardRetID value
     * @property {number} INRM_DeclareRetID=40040 INRM_DeclareRetID value
     * @property {number} INRM_MissRetID=40050 INRM_MissRetID value
     * @property {number} INRM_RefreshHandHappenedID=50000 INRM_RefreshHandHappenedID value
     * @property {number} INRM_PopOpenDeckHappenedID=50010 INRM_PopOpenDeckHappenedID value
     * @property {number} INRM_PopCloseDeckHappenedID=50011 INRM_PopCloseDeckHappenedID value
     * @property {number} INRM_GiveupHappenedID=50020 INRM_GiveupHappenedID value
     * @property {number} INRM_ThrowCardHappenedID=50030 INRM_ThrowCardHappenedID value
     * @property {number} INRM_DeclareHappenedID=50040 INRM_DeclareHappenedID value
     * @property {number} INRM_BluffHappenedID=50041 INRM_BluffHappenedID value
     * @property {number} INRM_MissHappenedID=50050 INRM_MissHappenedID value
     */
    GameMsg_INRM.INRM_GameMessageClassID = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "INRM_SClassID_UNSPECIFIED"] = 0;
        values[valuesById[10000] = "INRM_GameSettingID"] = 10000;
        values[valuesById[10010] = "INRM_GameStateID"] = 10010;
        values[valuesById[10020] = "INRM_GameResultID"] = 10020;
        values[valuesById[10030] = "INRM_PlayerCardID"] = 10030;
        values[valuesById[10040] = "INRM_DeckResetID"] = 10040;
        values[valuesById[20000] = "INRM_GameStartCountDownID"] = 20000;
        values[valuesById[20001] = "INRM_GameStartCountDownCancelID"] = 20001;
        values[valuesById[20010] = "INRM_PlayerActionCountDownID"] = 20010;
        values[valuesById[20011] = "INRM_PlayerActionCountDownCancelID"] = 20011;
        values[valuesById[20020] = "INRM_WaitFinalRefreshCountDownID"] = 20020;
        values[valuesById[30000] = "INRM_RefreshHandID"] = 30000;
        values[valuesById[30010] = "INRM_PopOpenDeckID"] = 30010;
        values[valuesById[30011] = "INRM_PopCloseDeckID"] = 30011;
        values[valuesById[30020] = "INRM_GiveupID"] = 30020;
        values[valuesById[30030] = "INRM_ThrowCardID"] = 30030;
        values[valuesById[30040] = "INRM_DeclareID"] = 30040;
        values[valuesById[30050] = "INRM_MissID"] = 30050;
        values[valuesById[40000] = "INRM_RefreshHandRetID"] = 40000;
        values[valuesById[40010] = "INRM_PopOpenDeckRetID"] = 40010;
        values[valuesById[40011] = "INRM_PopCloseDeckRetID"] = 40011;
        values[valuesById[40020] = "INRM_GiveupRetID"] = 40020;
        values[valuesById[40030] = "INRM_ThrowCardRetID"] = 40030;
        values[valuesById[40040] = "INRM_DeclareRetID"] = 40040;
        values[valuesById[40050] = "INRM_MissRetID"] = 40050;
        values[valuesById[50000] = "INRM_RefreshHandHappenedID"] = 50000;
        values[valuesById[50010] = "INRM_PopOpenDeckHappenedID"] = 50010;
        values[valuesById[50011] = "INRM_PopCloseDeckHappenedID"] = 50011;
        values[valuesById[50020] = "INRM_GiveupHappenedID"] = 50020;
        values[valuesById[50030] = "INRM_ThrowCardHappenedID"] = 50030;
        values[valuesById[50040] = "INRM_DeclareHappenedID"] = 50040;
        values[valuesById[50041] = "INRM_BluffHappenedID"] = 50041;
        values[valuesById[50050] = "INRM_MissHappenedID"] = 50050;
        return values;
    })();

    GameMsg_INRM.INRM_GameSetting = (function() {

        /**
         * Properties of a INRM_GameSetting.
         * @memberof GameMsg_INRM
         * @interface IINRM_GameSetting
         * @property {number|null} [TableNo] INRM_GameSetting TableNo
         * @property {number|null} [StartWaitTime] INRM_GameSetting StartWaitTime
         * @property {number|null} [ActionWaitTime] INRM_GameSetting ActionWaitTime
         * @property {number|Long|null} [ScorePerPoint] INRM_GameSetting ScorePerPoint
         * @property {number|Long|null} [HandCardLength] INRM_GameSetting HandCardLength
         * @property {number|Long|null} [MaxPoint] INRM_GameSetting MaxPoint
         * @property {number|Long|null} [GiveupPoint] INRM_GameSetting GiveupPoint
         * @property {number|null} [MissLimit] INRM_GameSetting MissLimit
         */

        /**
         * Constructs a new INRM_GameSetting.
         * @memberof GameMsg_INRM
         * @classdesc Represents a INRM_GameSetting.
         * @implements IINRM_GameSetting
         * @constructor
         * @param {GameMsg_INRM.IINRM_GameSetting=} [properties] Properties to set
         */
        function INRM_GameSetting(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * INRM_GameSetting TableNo.
         * @member {number} TableNo
         * @memberof GameMsg_INRM.INRM_GameSetting
         * @instance
         */
        INRM_GameSetting.prototype.TableNo = 0;

        /**
         * INRM_GameSetting StartWaitTime.
         * @member {number} StartWaitTime
         * @memberof GameMsg_INRM.INRM_GameSetting
         * @instance
         */
        INRM_GameSetting.prototype.StartWaitTime = 0;

        /**
         * INRM_GameSetting ActionWaitTime.
         * @member {number} ActionWaitTime
         * @memberof GameMsg_INRM.INRM_GameSetting
         * @instance
         */
        INRM_GameSetting.prototype.ActionWaitTime = 0;

        /**
         * INRM_GameSetting ScorePerPoint.
         * @member {number|Long} ScorePerPoint
         * @memberof GameMsg_INRM.INRM_GameSetting
         * @instance
         */
        INRM_GameSetting.prototype.ScorePerPoint = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * INRM_GameSetting HandCardLength.
         * @member {number|Long} HandCardLength
         * @memberof GameMsg_INRM.INRM_GameSetting
         * @instance
         */
        INRM_GameSetting.prototype.HandCardLength = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * INRM_GameSetting MaxPoint.
         * @member {number|Long} MaxPoint
         * @memberof GameMsg_INRM.INRM_GameSetting
         * @instance
         */
        INRM_GameSetting.prototype.MaxPoint = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * INRM_GameSetting GiveupPoint.
         * @member {number|Long} GiveupPoint
         * @memberof GameMsg_INRM.INRM_GameSetting
         * @instance
         */
        INRM_GameSetting.prototype.GiveupPoint = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * INRM_GameSetting MissLimit.
         * @member {number} MissLimit
         * @memberof GameMsg_INRM.INRM_GameSetting
         * @instance
         */
        INRM_GameSetting.prototype.MissLimit = 0;

        /**
         * Creates a new INRM_GameSetting instance using the specified properties.
         * @function create
         * @memberof GameMsg_INRM.INRM_GameSetting
         * @static
         * @param {GameMsg_INRM.IINRM_GameSetting=} [properties] Properties to set
         * @returns {GameMsg_INRM.INRM_GameSetting} INRM_GameSetting instance
         */
        INRM_GameSetting.create = function create(properties) {
            return new INRM_GameSetting(properties);
        };

        /**
         * Encodes the specified INRM_GameSetting message. Does not implicitly {@link GameMsg_INRM.INRM_GameSetting.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_INRM.INRM_GameSetting
         * @static
         * @param {GameMsg_INRM.IINRM_GameSetting} message INRM_GameSetting message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        INRM_GameSetting.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.TableNo != null && Object.hasOwnProperty.call(message, "TableNo"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.TableNo);
            if (message.StartWaitTime != null && Object.hasOwnProperty.call(message, "StartWaitTime"))
                writer.uint32(/* id 11, wireType 0 =*/88).int32(message.StartWaitTime);
            if (message.ActionWaitTime != null && Object.hasOwnProperty.call(message, "ActionWaitTime"))
                writer.uint32(/* id 12, wireType 0 =*/96).int32(message.ActionWaitTime);
            if (message.ScorePerPoint != null && Object.hasOwnProperty.call(message, "ScorePerPoint"))
                writer.uint32(/* id 13, wireType 0 =*/104).int64(message.ScorePerPoint);
            if (message.HandCardLength != null && Object.hasOwnProperty.call(message, "HandCardLength"))
                writer.uint32(/* id 14, wireType 0 =*/112).int64(message.HandCardLength);
            if (message.MaxPoint != null && Object.hasOwnProperty.call(message, "MaxPoint"))
                writer.uint32(/* id 15, wireType 0 =*/120).int64(message.MaxPoint);
            if (message.GiveupPoint != null && Object.hasOwnProperty.call(message, "GiveupPoint"))
                writer.uint32(/* id 16, wireType 0 =*/128).int64(message.GiveupPoint);
            if (message.MissLimit != null && Object.hasOwnProperty.call(message, "MissLimit"))
                writer.uint32(/* id 17, wireType 0 =*/136).int32(message.MissLimit);
            return writer;
        };

        /**
         * Encodes the specified INRM_GameSetting message, length delimited. Does not implicitly {@link GameMsg_INRM.INRM_GameSetting.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_INRM.INRM_GameSetting
         * @static
         * @param {GameMsg_INRM.IINRM_GameSetting} message INRM_GameSetting message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        INRM_GameSetting.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a INRM_GameSetting message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_INRM.INRM_GameSetting
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_INRM.INRM_GameSetting} INRM_GameSetting
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        INRM_GameSetting.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_INRM.INRM_GameSetting();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.TableNo = reader.int32();
                    break;
                case 11:
                    message.StartWaitTime = reader.int32();
                    break;
                case 12:
                    message.ActionWaitTime = reader.int32();
                    break;
                case 13:
                    message.ScorePerPoint = reader.int64();
                    break;
                case 14:
                    message.HandCardLength = reader.int64();
                    break;
                case 15:
                    message.MaxPoint = reader.int64();
                    break;
                case 16:
                    message.GiveupPoint = reader.int64();
                    break;
                case 17:
                    message.MissLimit = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a INRM_GameSetting message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_INRM.INRM_GameSetting
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_INRM.INRM_GameSetting} INRM_GameSetting
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        INRM_GameSetting.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a INRM_GameSetting message.
         * @function verify
         * @memberof GameMsg_INRM.INRM_GameSetting
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        INRM_GameSetting.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.TableNo != null && message.hasOwnProperty("TableNo"))
                if (!$util.isInteger(message.TableNo))
                    return "TableNo: integer expected";
            if (message.StartWaitTime != null && message.hasOwnProperty("StartWaitTime"))
                if (!$util.isInteger(message.StartWaitTime))
                    return "StartWaitTime: integer expected";
            if (message.ActionWaitTime != null && message.hasOwnProperty("ActionWaitTime"))
                if (!$util.isInteger(message.ActionWaitTime))
                    return "ActionWaitTime: integer expected";
            if (message.ScorePerPoint != null && message.hasOwnProperty("ScorePerPoint"))
                if (!$util.isInteger(message.ScorePerPoint) && !(message.ScorePerPoint && $util.isInteger(message.ScorePerPoint.low) && $util.isInteger(message.ScorePerPoint.high)))
                    return "ScorePerPoint: integer|Long expected";
            if (message.HandCardLength != null && message.hasOwnProperty("HandCardLength"))
                if (!$util.isInteger(message.HandCardLength) && !(message.HandCardLength && $util.isInteger(message.HandCardLength.low) && $util.isInteger(message.HandCardLength.high)))
                    return "HandCardLength: integer|Long expected";
            if (message.MaxPoint != null && message.hasOwnProperty("MaxPoint"))
                if (!$util.isInteger(message.MaxPoint) && !(message.MaxPoint && $util.isInteger(message.MaxPoint.low) && $util.isInteger(message.MaxPoint.high)))
                    return "MaxPoint: integer|Long expected";
            if (message.GiveupPoint != null && message.hasOwnProperty("GiveupPoint"))
                if (!$util.isInteger(message.GiveupPoint) && !(message.GiveupPoint && $util.isInteger(message.GiveupPoint.low) && $util.isInteger(message.GiveupPoint.high)))
                    return "GiveupPoint: integer|Long expected";
            if (message.MissLimit != null && message.hasOwnProperty("MissLimit"))
                if (!$util.isInteger(message.MissLimit))
                    return "MissLimit: integer expected";
            return null;
        };

        /**
         * Creates a INRM_GameSetting message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_INRM.INRM_GameSetting
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_INRM.INRM_GameSetting} INRM_GameSetting
         */
        INRM_GameSetting.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_INRM.INRM_GameSetting)
                return object;
            var message = new $root.GameMsg_INRM.INRM_GameSetting();
            if (object.TableNo != null)
                message.TableNo = object.TableNo | 0;
            if (object.StartWaitTime != null)
                message.StartWaitTime = object.StartWaitTime | 0;
            if (object.ActionWaitTime != null)
                message.ActionWaitTime = object.ActionWaitTime | 0;
            if (object.ScorePerPoint != null)
                if ($util.Long)
                    (message.ScorePerPoint = $util.Long.fromValue(object.ScorePerPoint)).unsigned = false;
                else if (typeof object.ScorePerPoint === "string")
                    message.ScorePerPoint = parseInt(object.ScorePerPoint, 10);
                else if (typeof object.ScorePerPoint === "number")
                    message.ScorePerPoint = object.ScorePerPoint;
                else if (typeof object.ScorePerPoint === "object")
                    message.ScorePerPoint = new $util.LongBits(object.ScorePerPoint.low >>> 0, object.ScorePerPoint.high >>> 0).toNumber();
            if (object.HandCardLength != null)
                if ($util.Long)
                    (message.HandCardLength = $util.Long.fromValue(object.HandCardLength)).unsigned = false;
                else if (typeof object.HandCardLength === "string")
                    message.HandCardLength = parseInt(object.HandCardLength, 10);
                else if (typeof object.HandCardLength === "number")
                    message.HandCardLength = object.HandCardLength;
                else if (typeof object.HandCardLength === "object")
                    message.HandCardLength = new $util.LongBits(object.HandCardLength.low >>> 0, object.HandCardLength.high >>> 0).toNumber();
            if (object.MaxPoint != null)
                if ($util.Long)
                    (message.MaxPoint = $util.Long.fromValue(object.MaxPoint)).unsigned = false;
                else if (typeof object.MaxPoint === "string")
                    message.MaxPoint = parseInt(object.MaxPoint, 10);
                else if (typeof object.MaxPoint === "number")
                    message.MaxPoint = object.MaxPoint;
                else if (typeof object.MaxPoint === "object")
                    message.MaxPoint = new $util.LongBits(object.MaxPoint.low >>> 0, object.MaxPoint.high >>> 0).toNumber();
            if (object.GiveupPoint != null)
                if ($util.Long)
                    (message.GiveupPoint = $util.Long.fromValue(object.GiveupPoint)).unsigned = false;
                else if (typeof object.GiveupPoint === "string")
                    message.GiveupPoint = parseInt(object.GiveupPoint, 10);
                else if (typeof object.GiveupPoint === "number")
                    message.GiveupPoint = object.GiveupPoint;
                else if (typeof object.GiveupPoint === "object")
                    message.GiveupPoint = new $util.LongBits(object.GiveupPoint.low >>> 0, object.GiveupPoint.high >>> 0).toNumber();
            if (object.MissLimit != null)
                message.MissLimit = object.MissLimit | 0;
            return message;
        };

        /**
         * Creates a plain object from a INRM_GameSetting message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_INRM.INRM_GameSetting
         * @static
         * @param {GameMsg_INRM.INRM_GameSetting} message INRM_GameSetting
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        INRM_GameSetting.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.TableNo = 0;
                object.StartWaitTime = 0;
                object.ActionWaitTime = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.ScorePerPoint = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.ScorePerPoint = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.HandCardLength = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.HandCardLength = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.MaxPoint = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.MaxPoint = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.GiveupPoint = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.GiveupPoint = options.longs === String ? "0" : 0;
                object.MissLimit = 0;
            }
            if (message.TableNo != null && message.hasOwnProperty("TableNo"))
                object.TableNo = message.TableNo;
            if (message.StartWaitTime != null && message.hasOwnProperty("StartWaitTime"))
                object.StartWaitTime = message.StartWaitTime;
            if (message.ActionWaitTime != null && message.hasOwnProperty("ActionWaitTime"))
                object.ActionWaitTime = message.ActionWaitTime;
            if (message.ScorePerPoint != null && message.hasOwnProperty("ScorePerPoint"))
                if (typeof message.ScorePerPoint === "number")
                    object.ScorePerPoint = options.longs === String ? String(message.ScorePerPoint) : message.ScorePerPoint;
                else
                    object.ScorePerPoint = options.longs === String ? $util.Long.prototype.toString.call(message.ScorePerPoint) : options.longs === Number ? new $util.LongBits(message.ScorePerPoint.low >>> 0, message.ScorePerPoint.high >>> 0).toNumber() : message.ScorePerPoint;
            if (message.HandCardLength != null && message.hasOwnProperty("HandCardLength"))
                if (typeof message.HandCardLength === "number")
                    object.HandCardLength = options.longs === String ? String(message.HandCardLength) : message.HandCardLength;
                else
                    object.HandCardLength = options.longs === String ? $util.Long.prototype.toString.call(message.HandCardLength) : options.longs === Number ? new $util.LongBits(message.HandCardLength.low >>> 0, message.HandCardLength.high >>> 0).toNumber() : message.HandCardLength;
            if (message.MaxPoint != null && message.hasOwnProperty("MaxPoint"))
                if (typeof message.MaxPoint === "number")
                    object.MaxPoint = options.longs === String ? String(message.MaxPoint) : message.MaxPoint;
                else
                    object.MaxPoint = options.longs === String ? $util.Long.prototype.toString.call(message.MaxPoint) : options.longs === Number ? new $util.LongBits(message.MaxPoint.low >>> 0, message.MaxPoint.high >>> 0).toNumber() : message.MaxPoint;
            if (message.GiveupPoint != null && message.hasOwnProperty("GiveupPoint"))
                if (typeof message.GiveupPoint === "number")
                    object.GiveupPoint = options.longs === String ? String(message.GiveupPoint) : message.GiveupPoint;
                else
                    object.GiveupPoint = options.longs === String ? $util.Long.prototype.toString.call(message.GiveupPoint) : options.longs === Number ? new $util.LongBits(message.GiveupPoint.low >>> 0, message.GiveupPoint.high >>> 0).toNumber() : message.GiveupPoint;
            if (message.MissLimit != null && message.hasOwnProperty("MissLimit"))
                object.MissLimit = message.MissLimit;
            return object;
        };

        /**
         * Converts this INRM_GameSetting to JSON.
         * @function toJSON
         * @memberof GameMsg_INRM.INRM_GameSetting
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        INRM_GameSetting.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return INRM_GameSetting;
    })();

    GameMsg_INRM.INRM_GameState = (function() {

        /**
         * Properties of a INRM_GameState.
         * @memberof GameMsg_INRM
         * @interface IINRM_GameState
         * @property {number|Long|null} [StartAt] INRM_GameState StartAt
         * @property {number|Long|null} [StartCD] INRM_GameState StartCD
         * @property {GameMsg_INRM.INRM_GState|null} [State] INRM_GameState State
         * @property {number|null} [Round] INRM_GameState Round
         * @property {number|null} [PlayerID] INRM_GameState PlayerID
         * @property {GameMsg_INRM.Poker_Rank|null} [RandJoker] INRM_GameState RandJoker
         * @property {number|null} [CloseDeckCount] INRM_GameState CloseDeckCount
         * @property {number|null} [OpenDeckCount] INRM_GameState OpenDeckCount
         * @property {GameMsg_INRM.IPoker_Card|null} [FirstOpenDeck] INRM_GameState FirstOpenDeck
         * @property {Array.<GameMsg_INRM.IINRM_Player>|null} [Players] INRM_GameState Players
         */

        /**
         * Constructs a new INRM_GameState.
         * @memberof GameMsg_INRM
         * @classdesc Represents a INRM_GameState.
         * @implements IINRM_GameState
         * @constructor
         * @param {GameMsg_INRM.IINRM_GameState=} [properties] Properties to set
         */
        function INRM_GameState(properties) {
            this.Players = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * INRM_GameState StartAt.
         * @member {number|Long} StartAt
         * @memberof GameMsg_INRM.INRM_GameState
         * @instance
         */
        INRM_GameState.prototype.StartAt = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * INRM_GameState StartCD.
         * @member {number|Long} StartCD
         * @memberof GameMsg_INRM.INRM_GameState
         * @instance
         */
        INRM_GameState.prototype.StartCD = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * INRM_GameState State.
         * @member {GameMsg_INRM.INRM_GState} State
         * @memberof GameMsg_INRM.INRM_GameState
         * @instance
         */
        INRM_GameState.prototype.State = 0;

        /**
         * INRM_GameState Round.
         * @member {number} Round
         * @memberof GameMsg_INRM.INRM_GameState
         * @instance
         */
        INRM_GameState.prototype.Round = 0;

        /**
         * INRM_GameState PlayerID.
         * @member {number} PlayerID
         * @memberof GameMsg_INRM.INRM_GameState
         * @instance
         */
        INRM_GameState.prototype.PlayerID = 0;

        /**
         * INRM_GameState RandJoker.
         * @member {GameMsg_INRM.Poker_Rank} RandJoker
         * @memberof GameMsg_INRM.INRM_GameState
         * @instance
         */
        INRM_GameState.prototype.RandJoker = 0;

        /**
         * INRM_GameState CloseDeckCount.
         * @member {number} CloseDeckCount
         * @memberof GameMsg_INRM.INRM_GameState
         * @instance
         */
        INRM_GameState.prototype.CloseDeckCount = 0;

        /**
         * INRM_GameState OpenDeckCount.
         * @member {number} OpenDeckCount
         * @memberof GameMsg_INRM.INRM_GameState
         * @instance
         */
        INRM_GameState.prototype.OpenDeckCount = 0;

        /**
         * INRM_GameState FirstOpenDeck.
         * @member {GameMsg_INRM.IPoker_Card|null|undefined} FirstOpenDeck
         * @memberof GameMsg_INRM.INRM_GameState
         * @instance
         */
        INRM_GameState.prototype.FirstOpenDeck = null;

        /**
         * INRM_GameState Players.
         * @member {Array.<GameMsg_INRM.IINRM_Player>} Players
         * @memberof GameMsg_INRM.INRM_GameState
         * @instance
         */
        INRM_GameState.prototype.Players = $util.emptyArray;

        /**
         * Creates a new INRM_GameState instance using the specified properties.
         * @function create
         * @memberof GameMsg_INRM.INRM_GameState
         * @static
         * @param {GameMsg_INRM.IINRM_GameState=} [properties] Properties to set
         * @returns {GameMsg_INRM.INRM_GameState} INRM_GameState instance
         */
        INRM_GameState.create = function create(properties) {
            return new INRM_GameState(properties);
        };

        /**
         * Encodes the specified INRM_GameState message. Does not implicitly {@link GameMsg_INRM.INRM_GameState.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_INRM.INRM_GameState
         * @static
         * @param {GameMsg_INRM.IINRM_GameState} message INRM_GameState message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        INRM_GameState.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.StartAt != null && Object.hasOwnProperty.call(message, "StartAt"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.StartAt);
            if (message.StartCD != null && Object.hasOwnProperty.call(message, "StartCD"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.StartCD);
            if (message.State != null && Object.hasOwnProperty.call(message, "State"))
                writer.uint32(/* id 10, wireType 0 =*/80).int32(message.State);
            if (message.Round != null && Object.hasOwnProperty.call(message, "Round"))
                writer.uint32(/* id 11, wireType 0 =*/88).int32(message.Round);
            if (message.PlayerID != null && Object.hasOwnProperty.call(message, "PlayerID"))
                writer.uint32(/* id 12, wireType 0 =*/96).int32(message.PlayerID);
            if (message.RandJoker != null && Object.hasOwnProperty.call(message, "RandJoker"))
                writer.uint32(/* id 20, wireType 0 =*/160).int32(message.RandJoker);
            if (message.CloseDeckCount != null && Object.hasOwnProperty.call(message, "CloseDeckCount"))
                writer.uint32(/* id 21, wireType 0 =*/168).int32(message.CloseDeckCount);
            if (message.OpenDeckCount != null && Object.hasOwnProperty.call(message, "OpenDeckCount"))
                writer.uint32(/* id 22, wireType 0 =*/176).int32(message.OpenDeckCount);
            if (message.FirstOpenDeck != null && Object.hasOwnProperty.call(message, "FirstOpenDeck"))
                $root.GameMsg_INRM.Poker_Card.encode(message.FirstOpenDeck, writer.uint32(/* id 23, wireType 2 =*/186).fork()).ldelim();
            if (message.Players != null && message.Players.length)
                for (var i = 0; i < message.Players.length; ++i)
                    $root.GameMsg_INRM.INRM_Player.encode(message.Players[i], writer.uint32(/* id 30, wireType 2 =*/242).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified INRM_GameState message, length delimited. Does not implicitly {@link GameMsg_INRM.INRM_GameState.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_INRM.INRM_GameState
         * @static
         * @param {GameMsg_INRM.IINRM_GameState} message INRM_GameState message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        INRM_GameState.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a INRM_GameState message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_INRM.INRM_GameState
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_INRM.INRM_GameState} INRM_GameState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        INRM_GameState.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_INRM.INRM_GameState();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.StartAt = reader.int64();
                    break;
                case 2:
                    message.StartCD = reader.int64();
                    break;
                case 10:
                    message.State = reader.int32();
                    break;
                case 11:
                    message.Round = reader.int32();
                    break;
                case 12:
                    message.PlayerID = reader.int32();
                    break;
                case 20:
                    message.RandJoker = reader.int32();
                    break;
                case 21:
                    message.CloseDeckCount = reader.int32();
                    break;
                case 22:
                    message.OpenDeckCount = reader.int32();
                    break;
                case 23:
                    message.FirstOpenDeck = $root.GameMsg_INRM.Poker_Card.decode(reader, reader.uint32());
                    break;
                case 30:
                    if (!(message.Players && message.Players.length))
                        message.Players = [];
                    message.Players.push($root.GameMsg_INRM.INRM_Player.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a INRM_GameState message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_INRM.INRM_GameState
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_INRM.INRM_GameState} INRM_GameState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        INRM_GameState.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a INRM_GameState message.
         * @function verify
         * @memberof GameMsg_INRM.INRM_GameState
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        INRM_GameState.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.StartAt != null && message.hasOwnProperty("StartAt"))
                if (!$util.isInteger(message.StartAt) && !(message.StartAt && $util.isInteger(message.StartAt.low) && $util.isInteger(message.StartAt.high)))
                    return "StartAt: integer|Long expected";
            if (message.StartCD != null && message.hasOwnProperty("StartCD"))
                if (!$util.isInteger(message.StartCD) && !(message.StartCD && $util.isInteger(message.StartCD.low) && $util.isInteger(message.StartCD.high)))
                    return "StartCD: integer|Long expected";
            if (message.State != null && message.hasOwnProperty("State"))
                switch (message.State) {
                default:
                    return "State: enum value expected";
                case 0:
                case 1:
                case 10:
                case 20:
                    break;
                }
            if (message.Round != null && message.hasOwnProperty("Round"))
                if (!$util.isInteger(message.Round))
                    return "Round: integer expected";
            if (message.PlayerID != null && message.hasOwnProperty("PlayerID"))
                if (!$util.isInteger(message.PlayerID))
                    return "PlayerID: integer expected";
            if (message.RandJoker != null && message.hasOwnProperty("RandJoker"))
                switch (message.RandJoker) {
                default:
                    return "RandJoker: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                case 8:
                case 9:
                case 10:
                case 11:
                case 12:
                case 13:
                    break;
                }
            if (message.CloseDeckCount != null && message.hasOwnProperty("CloseDeckCount"))
                if (!$util.isInteger(message.CloseDeckCount))
                    return "CloseDeckCount: integer expected";
            if (message.OpenDeckCount != null && message.hasOwnProperty("OpenDeckCount"))
                if (!$util.isInteger(message.OpenDeckCount))
                    return "OpenDeckCount: integer expected";
            if (message.FirstOpenDeck != null && message.hasOwnProperty("FirstOpenDeck")) {
                var error = $root.GameMsg_INRM.Poker_Card.verify(message.FirstOpenDeck);
                if (error)
                    return "FirstOpenDeck." + error;
            }
            if (message.Players != null && message.hasOwnProperty("Players")) {
                if (!Array.isArray(message.Players))
                    return "Players: array expected";
                for (var i = 0; i < message.Players.length; ++i) {
                    var error = $root.GameMsg_INRM.INRM_Player.verify(message.Players[i]);
                    if (error)
                        return "Players." + error;
                }
            }
            return null;
        };

        /**
         * Creates a INRM_GameState message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_INRM.INRM_GameState
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_INRM.INRM_GameState} INRM_GameState
         */
        INRM_GameState.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_INRM.INRM_GameState)
                return object;
            var message = new $root.GameMsg_INRM.INRM_GameState();
            if (object.StartAt != null)
                if ($util.Long)
                    (message.StartAt = $util.Long.fromValue(object.StartAt)).unsigned = false;
                else if (typeof object.StartAt === "string")
                    message.StartAt = parseInt(object.StartAt, 10);
                else if (typeof object.StartAt === "number")
                    message.StartAt = object.StartAt;
                else if (typeof object.StartAt === "object")
                    message.StartAt = new $util.LongBits(object.StartAt.low >>> 0, object.StartAt.high >>> 0).toNumber();
            if (object.StartCD != null)
                if ($util.Long)
                    (message.StartCD = $util.Long.fromValue(object.StartCD)).unsigned = false;
                else if (typeof object.StartCD === "string")
                    message.StartCD = parseInt(object.StartCD, 10);
                else if (typeof object.StartCD === "number")
                    message.StartCD = object.StartCD;
                else if (typeof object.StartCD === "object")
                    message.StartCD = new $util.LongBits(object.StartCD.low >>> 0, object.StartCD.high >>> 0).toNumber();
            switch (object.State) {
            case "INRM_GState_UNSPECIFIED":
            case 0:
                message.State = 0;
                break;
            case "INRM_GState_WaitPlayer":
            case 1:
                message.State = 1;
                break;
            case "INRM_GState_CountDown":
            case 10:
                message.State = 10;
                break;
            case "INRM_GState_Gaming":
            case 20:
                message.State = 20;
                break;
            }
            if (object.Round != null)
                message.Round = object.Round | 0;
            if (object.PlayerID != null)
                message.PlayerID = object.PlayerID | 0;
            switch (object.RandJoker) {
            case "Poker_Rank_UNSPECIFIED":
            case 0:
                message.RandJoker = 0;
                break;
            case "Poker_Rank_Ace":
            case 1:
                message.RandJoker = 1;
                break;
            case "Poker_Rank_Two":
            case 2:
                message.RandJoker = 2;
                break;
            case "Poker_Rank_Three":
            case 3:
                message.RandJoker = 3;
                break;
            case "Poker_Rank_Four":
            case 4:
                message.RandJoker = 4;
                break;
            case "Poker_Rank_Five":
            case 5:
                message.RandJoker = 5;
                break;
            case "Poker_Rank_Six":
            case 6:
                message.RandJoker = 6;
                break;
            case "Poker_Rank_Seven":
            case 7:
                message.RandJoker = 7;
                break;
            case "Poker_Rank_Eight":
            case 8:
                message.RandJoker = 8;
                break;
            case "Poker_Rank_Nine":
            case 9:
                message.RandJoker = 9;
                break;
            case "Poker_Rank_Ten":
            case 10:
                message.RandJoker = 10;
                break;
            case "Poker_Rank_Jack":
            case 11:
                message.RandJoker = 11;
                break;
            case "Poker_Rank_Queen":
            case 12:
                message.RandJoker = 12;
                break;
            case "Poker_Rank_King":
            case 13:
                message.RandJoker = 13;
                break;
            }
            if (object.CloseDeckCount != null)
                message.CloseDeckCount = object.CloseDeckCount | 0;
            if (object.OpenDeckCount != null)
                message.OpenDeckCount = object.OpenDeckCount | 0;
            if (object.FirstOpenDeck != null) {
                if (typeof object.FirstOpenDeck !== "object")
                    throw TypeError(".GameMsg_INRM.INRM_GameState.FirstOpenDeck: object expected");
                message.FirstOpenDeck = $root.GameMsg_INRM.Poker_Card.fromObject(object.FirstOpenDeck);
            }
            if (object.Players) {
                if (!Array.isArray(object.Players))
                    throw TypeError(".GameMsg_INRM.INRM_GameState.Players: array expected");
                message.Players = [];
                for (var i = 0; i < object.Players.length; ++i) {
                    if (typeof object.Players[i] !== "object")
                        throw TypeError(".GameMsg_INRM.INRM_GameState.Players: object expected");
                    message.Players[i] = $root.GameMsg_INRM.INRM_Player.fromObject(object.Players[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a INRM_GameState message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_INRM.INRM_GameState
         * @static
         * @param {GameMsg_INRM.INRM_GameState} message INRM_GameState
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        INRM_GameState.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.Players = [];
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.StartAt = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.StartAt = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.StartCD = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.StartCD = options.longs === String ? "0" : 0;
                object.State = options.enums === String ? "INRM_GState_UNSPECIFIED" : 0;
                object.Round = 0;
                object.PlayerID = 0;
                object.RandJoker = options.enums === String ? "Poker_Rank_UNSPECIFIED" : 0;
                object.CloseDeckCount = 0;
                object.OpenDeckCount = 0;
                object.FirstOpenDeck = null;
            }
            if (message.StartAt != null && message.hasOwnProperty("StartAt"))
                if (typeof message.StartAt === "number")
                    object.StartAt = options.longs === String ? String(message.StartAt) : message.StartAt;
                else
                    object.StartAt = options.longs === String ? $util.Long.prototype.toString.call(message.StartAt) : options.longs === Number ? new $util.LongBits(message.StartAt.low >>> 0, message.StartAt.high >>> 0).toNumber() : message.StartAt;
            if (message.StartCD != null && message.hasOwnProperty("StartCD"))
                if (typeof message.StartCD === "number")
                    object.StartCD = options.longs === String ? String(message.StartCD) : message.StartCD;
                else
                    object.StartCD = options.longs === String ? $util.Long.prototype.toString.call(message.StartCD) : options.longs === Number ? new $util.LongBits(message.StartCD.low >>> 0, message.StartCD.high >>> 0).toNumber() : message.StartCD;
            if (message.State != null && message.hasOwnProperty("State"))
                object.State = options.enums === String ? $root.GameMsg_INRM.INRM_GState[message.State] : message.State;
            if (message.Round != null && message.hasOwnProperty("Round"))
                object.Round = message.Round;
            if (message.PlayerID != null && message.hasOwnProperty("PlayerID"))
                object.PlayerID = message.PlayerID;
            if (message.RandJoker != null && message.hasOwnProperty("RandJoker"))
                object.RandJoker = options.enums === String ? $root.GameMsg_INRM.Poker_Rank[message.RandJoker] : message.RandJoker;
            if (message.CloseDeckCount != null && message.hasOwnProperty("CloseDeckCount"))
                object.CloseDeckCount = message.CloseDeckCount;
            if (message.OpenDeckCount != null && message.hasOwnProperty("OpenDeckCount"))
                object.OpenDeckCount = message.OpenDeckCount;
            if (message.FirstOpenDeck != null && message.hasOwnProperty("FirstOpenDeck"))
                object.FirstOpenDeck = $root.GameMsg_INRM.Poker_Card.toObject(message.FirstOpenDeck, options);
            if (message.Players && message.Players.length) {
                object.Players = [];
                for (var j = 0; j < message.Players.length; ++j)
                    object.Players[j] = $root.GameMsg_INRM.INRM_Player.toObject(message.Players[j], options);
            }
            return object;
        };

        /**
         * Converts this INRM_GameState to JSON.
         * @function toJSON
         * @memberof GameMsg_INRM.INRM_GameState
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        INRM_GameState.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return INRM_GameState;
    })();

    GameMsg_INRM.INRM_Player = (function() {

        /**
         * Properties of a INRM_Player.
         * @memberof GameMsg_INRM
         * @interface IINRM_Player
         * @property {number|null} [ID] INRM_Player ID
         * @property {GameMsg_INRM.INRM_PState|null} [State] INRM_Player State
         * @property {GameMsg_INRM.IINRM_HandResult|null} [Hands] INRM_Player Hands
         * @property {number|null} [Miss] INRM_Player Miss
         * @property {number|Long|null} [ActionCD] INRM_Player ActionCD
         * @property {number|null} [LossPoint] INRM_Player LossPoint
         * @property {number|Long|null} [UpdateScore] INRM_Player UpdateScore
         * @property {number|Long|null} [Win] INRM_Player Win
         * @property {number|Long|null} [Tax] INRM_Player Tax
         */

        /**
         * Constructs a new INRM_Player.
         * @memberof GameMsg_INRM
         * @classdesc Represents a INRM_Player.
         * @implements IINRM_Player
         * @constructor
         * @param {GameMsg_INRM.IINRM_Player=} [properties] Properties to set
         */
        function INRM_Player(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * INRM_Player ID.
         * @member {number} ID
         * @memberof GameMsg_INRM.INRM_Player
         * @instance
         */
        INRM_Player.prototype.ID = 0;

        /**
         * INRM_Player State.
         * @member {GameMsg_INRM.INRM_PState} State
         * @memberof GameMsg_INRM.INRM_Player
         * @instance
         */
        INRM_Player.prototype.State = 0;

        /**
         * INRM_Player Hands.
         * @member {GameMsg_INRM.IINRM_HandResult|null|undefined} Hands
         * @memberof GameMsg_INRM.INRM_Player
         * @instance
         */
        INRM_Player.prototype.Hands = null;

        /**
         * INRM_Player Miss.
         * @member {number} Miss
         * @memberof GameMsg_INRM.INRM_Player
         * @instance
         */
        INRM_Player.prototype.Miss = 0;

        /**
         * INRM_Player ActionCD.
         * @member {number|Long} ActionCD
         * @memberof GameMsg_INRM.INRM_Player
         * @instance
         */
        INRM_Player.prototype.ActionCD = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * INRM_Player LossPoint.
         * @member {number} LossPoint
         * @memberof GameMsg_INRM.INRM_Player
         * @instance
         */
        INRM_Player.prototype.LossPoint = 0;

        /**
         * INRM_Player UpdateScore.
         * @member {number|Long} UpdateScore
         * @memberof GameMsg_INRM.INRM_Player
         * @instance
         */
        INRM_Player.prototype.UpdateScore = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * INRM_Player Win.
         * @member {number|Long} Win
         * @memberof GameMsg_INRM.INRM_Player
         * @instance
         */
        INRM_Player.prototype.Win = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * INRM_Player Tax.
         * @member {number|Long} Tax
         * @memberof GameMsg_INRM.INRM_Player
         * @instance
         */
        INRM_Player.prototype.Tax = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new INRM_Player instance using the specified properties.
         * @function create
         * @memberof GameMsg_INRM.INRM_Player
         * @static
         * @param {GameMsg_INRM.IINRM_Player=} [properties] Properties to set
         * @returns {GameMsg_INRM.INRM_Player} INRM_Player instance
         */
        INRM_Player.create = function create(properties) {
            return new INRM_Player(properties);
        };

        /**
         * Encodes the specified INRM_Player message. Does not implicitly {@link GameMsg_INRM.INRM_Player.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_INRM.INRM_Player
         * @static
         * @param {GameMsg_INRM.IINRM_Player} message INRM_Player message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        INRM_Player.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.ID != null && Object.hasOwnProperty.call(message, "ID"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.ID);
            if (message.State != null && Object.hasOwnProperty.call(message, "State"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.State);
            if (message.Hands != null && Object.hasOwnProperty.call(message, "Hands"))
                $root.GameMsg_INRM.INRM_HandResult.encode(message.Hands, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.Miss != null && Object.hasOwnProperty.call(message, "Miss"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.Miss);
            if (message.ActionCD != null && Object.hasOwnProperty.call(message, "ActionCD"))
                writer.uint32(/* id 5, wireType 0 =*/40).int64(message.ActionCD);
            if (message.LossPoint != null && Object.hasOwnProperty.call(message, "LossPoint"))
                writer.uint32(/* id 10, wireType 0 =*/80).int32(message.LossPoint);
            if (message.UpdateScore != null && Object.hasOwnProperty.call(message, "UpdateScore"))
                writer.uint32(/* id 11, wireType 0 =*/88).int64(message.UpdateScore);
            if (message.Win != null && Object.hasOwnProperty.call(message, "Win"))
                writer.uint32(/* id 12, wireType 0 =*/96).int64(message.Win);
            if (message.Tax != null && Object.hasOwnProperty.call(message, "Tax"))
                writer.uint32(/* id 13, wireType 0 =*/104).int64(message.Tax);
            return writer;
        };

        /**
         * Encodes the specified INRM_Player message, length delimited. Does not implicitly {@link GameMsg_INRM.INRM_Player.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_INRM.INRM_Player
         * @static
         * @param {GameMsg_INRM.IINRM_Player} message INRM_Player message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        INRM_Player.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a INRM_Player message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_INRM.INRM_Player
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_INRM.INRM_Player} INRM_Player
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        INRM_Player.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_INRM.INRM_Player();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.ID = reader.int32();
                    break;
                case 2:
                    message.State = reader.int32();
                    break;
                case 3:
                    message.Hands = $root.GameMsg_INRM.INRM_HandResult.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.Miss = reader.int32();
                    break;
                case 5:
                    message.ActionCD = reader.int64();
                    break;
                case 10:
                    message.LossPoint = reader.int32();
                    break;
                case 11:
                    message.UpdateScore = reader.int64();
                    break;
                case 12:
                    message.Win = reader.int64();
                    break;
                case 13:
                    message.Tax = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a INRM_Player message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_INRM.INRM_Player
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_INRM.INRM_Player} INRM_Player
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        INRM_Player.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a INRM_Player message.
         * @function verify
         * @memberof GameMsg_INRM.INRM_Player
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        INRM_Player.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.ID != null && message.hasOwnProperty("ID"))
                if (!$util.isInteger(message.ID))
                    return "ID: integer expected";
            if (message.State != null && message.hasOwnProperty("State"))
                switch (message.State) {
                default:
                    return "State: enum value expected";
                case 0:
                case 1:
                case 10:
                case 11:
                case 20:
                case 21:
                case 30:
                case 40:
                case 50:
                    break;
                }
            if (message.Hands != null && message.hasOwnProperty("Hands")) {
                var error = $root.GameMsg_INRM.INRM_HandResult.verify(message.Hands);
                if (error)
                    return "Hands." + error;
            }
            if (message.Miss != null && message.hasOwnProperty("Miss"))
                if (!$util.isInteger(message.Miss))
                    return "Miss: integer expected";
            if (message.ActionCD != null && message.hasOwnProperty("ActionCD"))
                if (!$util.isInteger(message.ActionCD) && !(message.ActionCD && $util.isInteger(message.ActionCD.low) && $util.isInteger(message.ActionCD.high)))
                    return "ActionCD: integer|Long expected";
            if (message.LossPoint != null && message.hasOwnProperty("LossPoint"))
                if (!$util.isInteger(message.LossPoint))
                    return "LossPoint: integer expected";
            if (message.UpdateScore != null && message.hasOwnProperty("UpdateScore"))
                if (!$util.isInteger(message.UpdateScore) && !(message.UpdateScore && $util.isInteger(message.UpdateScore.low) && $util.isInteger(message.UpdateScore.high)))
                    return "UpdateScore: integer|Long expected";
            if (message.Win != null && message.hasOwnProperty("Win"))
                if (!$util.isInteger(message.Win) && !(message.Win && $util.isInteger(message.Win.low) && $util.isInteger(message.Win.high)))
                    return "Win: integer|Long expected";
            if (message.Tax != null && message.hasOwnProperty("Tax"))
                if (!$util.isInteger(message.Tax) && !(message.Tax && $util.isInteger(message.Tax.low) && $util.isInteger(message.Tax.high)))
                    return "Tax: integer|Long expected";
            return null;
        };

        /**
         * Creates a INRM_Player message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_INRM.INRM_Player
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_INRM.INRM_Player} INRM_Player
         */
        INRM_Player.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_INRM.INRM_Player)
                return object;
            var message = new $root.GameMsg_INRM.INRM_Player();
            if (object.ID != null)
                message.ID = object.ID | 0;
            switch (object.State) {
            case "INRM_PState_UNSPECIFIED":
            case 0:
                message.State = 0;
                break;
            case "INRM_PState_Wait":
            case 1:
                message.State = 1;
                break;
            case "INRM_PState_GameV1":
            case 10:
                message.State = 10;
                break;
            case "INRM_PState_GameV2":
            case 11:
                message.State = 11;
                break;
            case "INRM_PState_FirstGiveup":
            case 20:
                message.State = 20;
                break;
            case "INRM_PState_Giveup":
            case 21:
                message.State = 21;
                break;
            case "INRM_PState_Bluff":
            case 30:
                message.State = 30;
                break;
            case "INRM_PState_Victory":
            case 40:
                message.State = 40;
                break;
            case "INRM_PState_Loss":
            case 50:
                message.State = 50;
                break;
            }
            if (object.Hands != null) {
                if (typeof object.Hands !== "object")
                    throw TypeError(".GameMsg_INRM.INRM_Player.Hands: object expected");
                message.Hands = $root.GameMsg_INRM.INRM_HandResult.fromObject(object.Hands);
            }
            if (object.Miss != null)
                message.Miss = object.Miss | 0;
            if (object.ActionCD != null)
                if ($util.Long)
                    (message.ActionCD = $util.Long.fromValue(object.ActionCD)).unsigned = false;
                else if (typeof object.ActionCD === "string")
                    message.ActionCD = parseInt(object.ActionCD, 10);
                else if (typeof object.ActionCD === "number")
                    message.ActionCD = object.ActionCD;
                else if (typeof object.ActionCD === "object")
                    message.ActionCD = new $util.LongBits(object.ActionCD.low >>> 0, object.ActionCD.high >>> 0).toNumber();
            if (object.LossPoint != null)
                message.LossPoint = object.LossPoint | 0;
            if (object.UpdateScore != null)
                if ($util.Long)
                    (message.UpdateScore = $util.Long.fromValue(object.UpdateScore)).unsigned = false;
                else if (typeof object.UpdateScore === "string")
                    message.UpdateScore = parseInt(object.UpdateScore, 10);
                else if (typeof object.UpdateScore === "number")
                    message.UpdateScore = object.UpdateScore;
                else if (typeof object.UpdateScore === "object")
                    message.UpdateScore = new $util.LongBits(object.UpdateScore.low >>> 0, object.UpdateScore.high >>> 0).toNumber();
            if (object.Win != null)
                if ($util.Long)
                    (message.Win = $util.Long.fromValue(object.Win)).unsigned = false;
                else if (typeof object.Win === "string")
                    message.Win = parseInt(object.Win, 10);
                else if (typeof object.Win === "number")
                    message.Win = object.Win;
                else if (typeof object.Win === "object")
                    message.Win = new $util.LongBits(object.Win.low >>> 0, object.Win.high >>> 0).toNumber();
            if (object.Tax != null)
                if ($util.Long)
                    (message.Tax = $util.Long.fromValue(object.Tax)).unsigned = false;
                else if (typeof object.Tax === "string")
                    message.Tax = parseInt(object.Tax, 10);
                else if (typeof object.Tax === "number")
                    message.Tax = object.Tax;
                else if (typeof object.Tax === "object")
                    message.Tax = new $util.LongBits(object.Tax.low >>> 0, object.Tax.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a INRM_Player message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_INRM.INRM_Player
         * @static
         * @param {GameMsg_INRM.INRM_Player} message INRM_Player
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        INRM_Player.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.ID = 0;
                object.State = options.enums === String ? "INRM_PState_UNSPECIFIED" : 0;
                object.Hands = null;
                object.Miss = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.ActionCD = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.ActionCD = options.longs === String ? "0" : 0;
                object.LossPoint = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.UpdateScore = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.UpdateScore = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.Win = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.Win = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.Tax = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.Tax = options.longs === String ? "0" : 0;
            }
            if (message.ID != null && message.hasOwnProperty("ID"))
                object.ID = message.ID;
            if (message.State != null && message.hasOwnProperty("State"))
                object.State = options.enums === String ? $root.GameMsg_INRM.INRM_PState[message.State] : message.State;
            if (message.Hands != null && message.hasOwnProperty("Hands"))
                object.Hands = $root.GameMsg_INRM.INRM_HandResult.toObject(message.Hands, options);
            if (message.Miss != null && message.hasOwnProperty("Miss"))
                object.Miss = message.Miss;
            if (message.ActionCD != null && message.hasOwnProperty("ActionCD"))
                if (typeof message.ActionCD === "number")
                    object.ActionCD = options.longs === String ? String(message.ActionCD) : message.ActionCD;
                else
                    object.ActionCD = options.longs === String ? $util.Long.prototype.toString.call(message.ActionCD) : options.longs === Number ? new $util.LongBits(message.ActionCD.low >>> 0, message.ActionCD.high >>> 0).toNumber() : message.ActionCD;
            if (message.LossPoint != null && message.hasOwnProperty("LossPoint"))
                object.LossPoint = message.LossPoint;
            if (message.UpdateScore != null && message.hasOwnProperty("UpdateScore"))
                if (typeof message.UpdateScore === "number")
                    object.UpdateScore = options.longs === String ? String(message.UpdateScore) : message.UpdateScore;
                else
                    object.UpdateScore = options.longs === String ? $util.Long.prototype.toString.call(message.UpdateScore) : options.longs === Number ? new $util.LongBits(message.UpdateScore.low >>> 0, message.UpdateScore.high >>> 0).toNumber() : message.UpdateScore;
            if (message.Win != null && message.hasOwnProperty("Win"))
                if (typeof message.Win === "number")
                    object.Win = options.longs === String ? String(message.Win) : message.Win;
                else
                    object.Win = options.longs === String ? $util.Long.prototype.toString.call(message.Win) : options.longs === Number ? new $util.LongBits(message.Win.low >>> 0, message.Win.high >>> 0).toNumber() : message.Win;
            if (message.Tax != null && message.hasOwnProperty("Tax"))
                if (typeof message.Tax === "number")
                    object.Tax = options.longs === String ? String(message.Tax) : message.Tax;
                else
                    object.Tax = options.longs === String ? $util.Long.prototype.toString.call(message.Tax) : options.longs === Number ? new $util.LongBits(message.Tax.low >>> 0, message.Tax.high >>> 0).toNumber() : message.Tax;
            return object;
        };

        /**
         * Converts this INRM_Player to JSON.
         * @function toJSON
         * @memberof GameMsg_INRM.INRM_Player
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        INRM_Player.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return INRM_Player;
    })();

    GameMsg_INRM.INRM_ThrowCard = (function() {

        /**
         * Properties of a INRM_ThrowCard.
         * @memberof GameMsg_INRM
         * @interface IINRM_ThrowCard
         * @property {GameMsg_INRM.IPoker_Card|null} [Throw] INRM_ThrowCard Throw
         * @property {number|null} [PlayerID] INRM_ThrowCard PlayerID
         */

        /**
         * Constructs a new INRM_ThrowCard.
         * @memberof GameMsg_INRM
         * @classdesc Represents a INRM_ThrowCard.
         * @implements IINRM_ThrowCard
         * @constructor
         * @param {GameMsg_INRM.IINRM_ThrowCard=} [properties] Properties to set
         */
        function INRM_ThrowCard(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * INRM_ThrowCard Throw.
         * @member {GameMsg_INRM.IPoker_Card|null|undefined} Throw
         * @memberof GameMsg_INRM.INRM_ThrowCard
         * @instance
         */
        INRM_ThrowCard.prototype.Throw = null;

        /**
         * INRM_ThrowCard PlayerID.
         * @member {number} PlayerID
         * @memberof GameMsg_INRM.INRM_ThrowCard
         * @instance
         */
        INRM_ThrowCard.prototype.PlayerID = 0;

        /**
         * Creates a new INRM_ThrowCard instance using the specified properties.
         * @function create
         * @memberof GameMsg_INRM.INRM_ThrowCard
         * @static
         * @param {GameMsg_INRM.IINRM_ThrowCard=} [properties] Properties to set
         * @returns {GameMsg_INRM.INRM_ThrowCard} INRM_ThrowCard instance
         */
        INRM_ThrowCard.create = function create(properties) {
            return new INRM_ThrowCard(properties);
        };

        /**
         * Encodes the specified INRM_ThrowCard message. Does not implicitly {@link GameMsg_INRM.INRM_ThrowCard.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_INRM.INRM_ThrowCard
         * @static
         * @param {GameMsg_INRM.IINRM_ThrowCard} message INRM_ThrowCard message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        INRM_ThrowCard.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Throw != null && Object.hasOwnProperty.call(message, "Throw"))
                $root.GameMsg_INRM.Poker_Card.encode(message.Throw, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.PlayerID != null && Object.hasOwnProperty.call(message, "PlayerID"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.PlayerID);
            return writer;
        };

        /**
         * Encodes the specified INRM_ThrowCard message, length delimited. Does not implicitly {@link GameMsg_INRM.INRM_ThrowCard.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_INRM.INRM_ThrowCard
         * @static
         * @param {GameMsg_INRM.IINRM_ThrowCard} message INRM_ThrowCard message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        INRM_ThrowCard.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a INRM_ThrowCard message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_INRM.INRM_ThrowCard
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_INRM.INRM_ThrowCard} INRM_ThrowCard
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        INRM_ThrowCard.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_INRM.INRM_ThrowCard();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Throw = $root.GameMsg_INRM.Poker_Card.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.PlayerID = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a INRM_ThrowCard message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_INRM.INRM_ThrowCard
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_INRM.INRM_ThrowCard} INRM_ThrowCard
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        INRM_ThrowCard.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a INRM_ThrowCard message.
         * @function verify
         * @memberof GameMsg_INRM.INRM_ThrowCard
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        INRM_ThrowCard.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Throw != null && message.hasOwnProperty("Throw")) {
                var error = $root.GameMsg_INRM.Poker_Card.verify(message.Throw);
                if (error)
                    return "Throw." + error;
            }
            if (message.PlayerID != null && message.hasOwnProperty("PlayerID"))
                if (!$util.isInteger(message.PlayerID))
                    return "PlayerID: integer expected";
            return null;
        };

        /**
         * Creates a INRM_ThrowCard message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_INRM.INRM_ThrowCard
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_INRM.INRM_ThrowCard} INRM_ThrowCard
         */
        INRM_ThrowCard.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_INRM.INRM_ThrowCard)
                return object;
            var message = new $root.GameMsg_INRM.INRM_ThrowCard();
            if (object.Throw != null) {
                if (typeof object.Throw !== "object")
                    throw TypeError(".GameMsg_INRM.INRM_ThrowCard.Throw: object expected");
                message.Throw = $root.GameMsg_INRM.Poker_Card.fromObject(object.Throw);
            }
            if (object.PlayerID != null)
                message.PlayerID = object.PlayerID | 0;
            return message;
        };

        /**
         * Creates a plain object from a INRM_ThrowCard message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_INRM.INRM_ThrowCard
         * @static
         * @param {GameMsg_INRM.INRM_ThrowCard} message INRM_ThrowCard
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        INRM_ThrowCard.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.Throw = null;
                object.PlayerID = 0;
            }
            if (message.Throw != null && message.hasOwnProperty("Throw"))
                object.Throw = $root.GameMsg_INRM.Poker_Card.toObject(message.Throw, options);
            if (message.PlayerID != null && message.hasOwnProperty("PlayerID"))
                object.PlayerID = message.PlayerID;
            return object;
        };

        /**
         * Converts this INRM_ThrowCard to JSON.
         * @function toJSON
         * @memberof GameMsg_INRM.INRM_ThrowCard
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        INRM_ThrowCard.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return INRM_ThrowCard;
    })();

    GameMsg_INRM.INRM_Declare = (function() {

        /**
         * Properties of a INRM_Declare.
         * @memberof GameMsg_INRM
         * @interface IINRM_Declare
         * @property {GameMsg_INRM.IPoker_Card|null} [Throw] INRM_Declare Throw
         * @property {GameMsg_INRM.IPoker_Hand|null} [Hands] INRM_Declare Hands
         * @property {number|null} [PlayerID] INRM_Declare PlayerID
         */

        /**
         * Constructs a new INRM_Declare.
         * @memberof GameMsg_INRM
         * @classdesc Represents a INRM_Declare.
         * @implements IINRM_Declare
         * @constructor
         * @param {GameMsg_INRM.IINRM_Declare=} [properties] Properties to set
         */
        function INRM_Declare(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * INRM_Declare Throw.
         * @member {GameMsg_INRM.IPoker_Card|null|undefined} Throw
         * @memberof GameMsg_INRM.INRM_Declare
         * @instance
         */
        INRM_Declare.prototype.Throw = null;

        /**
         * INRM_Declare Hands.
         * @member {GameMsg_INRM.IPoker_Hand|null|undefined} Hands
         * @memberof GameMsg_INRM.INRM_Declare
         * @instance
         */
        INRM_Declare.prototype.Hands = null;

        /**
         * INRM_Declare PlayerID.
         * @member {number} PlayerID
         * @memberof GameMsg_INRM.INRM_Declare
         * @instance
         */
        INRM_Declare.prototype.PlayerID = 0;

        /**
         * Creates a new INRM_Declare instance using the specified properties.
         * @function create
         * @memberof GameMsg_INRM.INRM_Declare
         * @static
         * @param {GameMsg_INRM.IINRM_Declare=} [properties] Properties to set
         * @returns {GameMsg_INRM.INRM_Declare} INRM_Declare instance
         */
        INRM_Declare.create = function create(properties) {
            return new INRM_Declare(properties);
        };

        /**
         * Encodes the specified INRM_Declare message. Does not implicitly {@link GameMsg_INRM.INRM_Declare.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_INRM.INRM_Declare
         * @static
         * @param {GameMsg_INRM.IINRM_Declare} message INRM_Declare message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        INRM_Declare.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Throw != null && Object.hasOwnProperty.call(message, "Throw"))
                $root.GameMsg_INRM.Poker_Card.encode(message.Throw, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.Hands != null && Object.hasOwnProperty.call(message, "Hands"))
                $root.GameMsg_INRM.Poker_Hand.encode(message.Hands, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.PlayerID != null && Object.hasOwnProperty.call(message, "PlayerID"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.PlayerID);
            return writer;
        };

        /**
         * Encodes the specified INRM_Declare message, length delimited. Does not implicitly {@link GameMsg_INRM.INRM_Declare.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_INRM.INRM_Declare
         * @static
         * @param {GameMsg_INRM.IINRM_Declare} message INRM_Declare message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        INRM_Declare.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a INRM_Declare message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_INRM.INRM_Declare
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_INRM.INRM_Declare} INRM_Declare
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        INRM_Declare.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_INRM.INRM_Declare();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Throw = $root.GameMsg_INRM.Poker_Card.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.Hands = $root.GameMsg_INRM.Poker_Hand.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.PlayerID = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a INRM_Declare message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_INRM.INRM_Declare
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_INRM.INRM_Declare} INRM_Declare
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        INRM_Declare.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a INRM_Declare message.
         * @function verify
         * @memberof GameMsg_INRM.INRM_Declare
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        INRM_Declare.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Throw != null && message.hasOwnProperty("Throw")) {
                var error = $root.GameMsg_INRM.Poker_Card.verify(message.Throw);
                if (error)
                    return "Throw." + error;
            }
            if (message.Hands != null && message.hasOwnProperty("Hands")) {
                var error = $root.GameMsg_INRM.Poker_Hand.verify(message.Hands);
                if (error)
                    return "Hands." + error;
            }
            if (message.PlayerID != null && message.hasOwnProperty("PlayerID"))
                if (!$util.isInteger(message.PlayerID))
                    return "PlayerID: integer expected";
            return null;
        };

        /**
         * Creates a INRM_Declare message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_INRM.INRM_Declare
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_INRM.INRM_Declare} INRM_Declare
         */
        INRM_Declare.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_INRM.INRM_Declare)
                return object;
            var message = new $root.GameMsg_INRM.INRM_Declare();
            if (object.Throw != null) {
                if (typeof object.Throw !== "object")
                    throw TypeError(".GameMsg_INRM.INRM_Declare.Throw: object expected");
                message.Throw = $root.GameMsg_INRM.Poker_Card.fromObject(object.Throw);
            }
            if (object.Hands != null) {
                if (typeof object.Hands !== "object")
                    throw TypeError(".GameMsg_INRM.INRM_Declare.Hands: object expected");
                message.Hands = $root.GameMsg_INRM.Poker_Hand.fromObject(object.Hands);
            }
            if (object.PlayerID != null)
                message.PlayerID = object.PlayerID | 0;
            return message;
        };

        /**
         * Creates a plain object from a INRM_Declare message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_INRM.INRM_Declare
         * @static
         * @param {GameMsg_INRM.INRM_Declare} message INRM_Declare
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        INRM_Declare.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.Throw = null;
                object.Hands = null;
                object.PlayerID = 0;
            }
            if (message.Throw != null && message.hasOwnProperty("Throw"))
                object.Throw = $root.GameMsg_INRM.Poker_Card.toObject(message.Throw, options);
            if (message.Hands != null && message.hasOwnProperty("Hands"))
                object.Hands = $root.GameMsg_INRM.Poker_Hand.toObject(message.Hands, options);
            if (message.PlayerID != null && message.hasOwnProperty("PlayerID"))
                object.PlayerID = message.PlayerID;
            return object;
        };

        /**
         * Converts this INRM_Declare to JSON.
         * @function toJSON
         * @memberof GameMsg_INRM.INRM_Declare
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        INRM_Declare.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return INRM_Declare;
    })();

    GameMsg_INRM.INRM_GameResult = (function() {

        /**
         * Properties of a INRM_GameResult.
         * @memberof GameMsg_INRM
         * @interface IINRM_GameResult
         * @property {GameMsg_INRM.IINRM_Player|null} [Winner] INRM_GameResult Winner
         * @property {Array.<GameMsg_INRM.IINRM_Player>|null} [Losser] INRM_GameResult Losser
         */

        /**
         * Constructs a new INRM_GameResult.
         * @memberof GameMsg_INRM
         * @classdesc Represents a INRM_GameResult.
         * @implements IINRM_GameResult
         * @constructor
         * @param {GameMsg_INRM.IINRM_GameResult=} [properties] Properties to set
         */
        function INRM_GameResult(properties) {
            this.Losser = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * INRM_GameResult Winner.
         * @member {GameMsg_INRM.IINRM_Player|null|undefined} Winner
         * @memberof GameMsg_INRM.INRM_GameResult
         * @instance
         */
        INRM_GameResult.prototype.Winner = null;

        /**
         * INRM_GameResult Losser.
         * @member {Array.<GameMsg_INRM.IINRM_Player>} Losser
         * @memberof GameMsg_INRM.INRM_GameResult
         * @instance
         */
        INRM_GameResult.prototype.Losser = $util.emptyArray;

        /**
         * Creates a new INRM_GameResult instance using the specified properties.
         * @function create
         * @memberof GameMsg_INRM.INRM_GameResult
         * @static
         * @param {GameMsg_INRM.IINRM_GameResult=} [properties] Properties to set
         * @returns {GameMsg_INRM.INRM_GameResult} INRM_GameResult instance
         */
        INRM_GameResult.create = function create(properties) {
            return new INRM_GameResult(properties);
        };

        /**
         * Encodes the specified INRM_GameResult message. Does not implicitly {@link GameMsg_INRM.INRM_GameResult.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_INRM.INRM_GameResult
         * @static
         * @param {GameMsg_INRM.IINRM_GameResult} message INRM_GameResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        INRM_GameResult.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Winner != null && Object.hasOwnProperty.call(message, "Winner"))
                $root.GameMsg_INRM.INRM_Player.encode(message.Winner, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.Losser != null && message.Losser.length)
                for (var i = 0; i < message.Losser.length; ++i)
                    $root.GameMsg_INRM.INRM_Player.encode(message.Losser[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified INRM_GameResult message, length delimited. Does not implicitly {@link GameMsg_INRM.INRM_GameResult.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_INRM.INRM_GameResult
         * @static
         * @param {GameMsg_INRM.IINRM_GameResult} message INRM_GameResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        INRM_GameResult.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a INRM_GameResult message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_INRM.INRM_GameResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_INRM.INRM_GameResult} INRM_GameResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        INRM_GameResult.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_INRM.INRM_GameResult();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Winner = $root.GameMsg_INRM.INRM_Player.decode(reader, reader.uint32());
                    break;
                case 2:
                    if (!(message.Losser && message.Losser.length))
                        message.Losser = [];
                    message.Losser.push($root.GameMsg_INRM.INRM_Player.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a INRM_GameResult message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_INRM.INRM_GameResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_INRM.INRM_GameResult} INRM_GameResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        INRM_GameResult.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a INRM_GameResult message.
         * @function verify
         * @memberof GameMsg_INRM.INRM_GameResult
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        INRM_GameResult.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Winner != null && message.hasOwnProperty("Winner")) {
                var error = $root.GameMsg_INRM.INRM_Player.verify(message.Winner);
                if (error)
                    return "Winner." + error;
            }
            if (message.Losser != null && message.hasOwnProperty("Losser")) {
                if (!Array.isArray(message.Losser))
                    return "Losser: array expected";
                for (var i = 0; i < message.Losser.length; ++i) {
                    var error = $root.GameMsg_INRM.INRM_Player.verify(message.Losser[i]);
                    if (error)
                        return "Losser." + error;
                }
            }
            return null;
        };

        /**
         * Creates a INRM_GameResult message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_INRM.INRM_GameResult
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_INRM.INRM_GameResult} INRM_GameResult
         */
        INRM_GameResult.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_INRM.INRM_GameResult)
                return object;
            var message = new $root.GameMsg_INRM.INRM_GameResult();
            if (object.Winner != null) {
                if (typeof object.Winner !== "object")
                    throw TypeError(".GameMsg_INRM.INRM_GameResult.Winner: object expected");
                message.Winner = $root.GameMsg_INRM.INRM_Player.fromObject(object.Winner);
            }
            if (object.Losser) {
                if (!Array.isArray(object.Losser))
                    throw TypeError(".GameMsg_INRM.INRM_GameResult.Losser: array expected");
                message.Losser = [];
                for (var i = 0; i < object.Losser.length; ++i) {
                    if (typeof object.Losser[i] !== "object")
                        throw TypeError(".GameMsg_INRM.INRM_GameResult.Losser: object expected");
                    message.Losser[i] = $root.GameMsg_INRM.INRM_Player.fromObject(object.Losser[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a INRM_GameResult message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_INRM.INRM_GameResult
         * @static
         * @param {GameMsg_INRM.INRM_GameResult} message INRM_GameResult
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        INRM_GameResult.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.Losser = [];
            if (options.defaults)
                object.Winner = null;
            if (message.Winner != null && message.hasOwnProperty("Winner"))
                object.Winner = $root.GameMsg_INRM.INRM_Player.toObject(message.Winner, options);
            if (message.Losser && message.Losser.length) {
                object.Losser = [];
                for (var j = 0; j < message.Losser.length; ++j)
                    object.Losser[j] = $root.GameMsg_INRM.INRM_Player.toObject(message.Losser[j], options);
            }
            return object;
        };

        /**
         * Converts this INRM_GameResult to JSON.
         * @function toJSON
         * @memberof GameMsg_INRM.INRM_GameResult
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        INRM_GameResult.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return INRM_GameResult;
    })();

    GameMsg_INRM.INRM_PopCardRet = (function() {

        /**
         * Properties of a INRM_PopCardRet.
         * @memberof GameMsg_INRM
         * @interface IINRM_PopCardRet
         * @property {boolean|null} [Success] INRM_PopCardRet Success
         * @property {string|null} [Message] INRM_PopCardRet Message
         * @property {GameMsg_INRM.IPoker_Card|null} [Card] INRM_PopCardRet Card
         */

        /**
         * Constructs a new INRM_PopCardRet.
         * @memberof GameMsg_INRM
         * @classdesc Represents a INRM_PopCardRet.
         * @implements IINRM_PopCardRet
         * @constructor
         * @param {GameMsg_INRM.IINRM_PopCardRet=} [properties] Properties to set
         */
        function INRM_PopCardRet(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * INRM_PopCardRet Success.
         * @member {boolean} Success
         * @memberof GameMsg_INRM.INRM_PopCardRet
         * @instance
         */
        INRM_PopCardRet.prototype.Success = false;

        /**
         * INRM_PopCardRet Message.
         * @member {string} Message
         * @memberof GameMsg_INRM.INRM_PopCardRet
         * @instance
         */
        INRM_PopCardRet.prototype.Message = "";

        /**
         * INRM_PopCardRet Card.
         * @member {GameMsg_INRM.IPoker_Card|null|undefined} Card
         * @memberof GameMsg_INRM.INRM_PopCardRet
         * @instance
         */
        INRM_PopCardRet.prototype.Card = null;

        /**
         * Creates a new INRM_PopCardRet instance using the specified properties.
         * @function create
         * @memberof GameMsg_INRM.INRM_PopCardRet
         * @static
         * @param {GameMsg_INRM.IINRM_PopCardRet=} [properties] Properties to set
         * @returns {GameMsg_INRM.INRM_PopCardRet} INRM_PopCardRet instance
         */
        INRM_PopCardRet.create = function create(properties) {
            return new INRM_PopCardRet(properties);
        };

        /**
         * Encodes the specified INRM_PopCardRet message. Does not implicitly {@link GameMsg_INRM.INRM_PopCardRet.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_INRM.INRM_PopCardRet
         * @static
         * @param {GameMsg_INRM.IINRM_PopCardRet} message INRM_PopCardRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        INRM_PopCardRet.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Success != null && Object.hasOwnProperty.call(message, "Success"))
                writer.uint32(/* id 1, wireType 0 =*/8).bool(message.Success);
            if (message.Message != null && Object.hasOwnProperty.call(message, "Message"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.Message);
            if (message.Card != null && Object.hasOwnProperty.call(message, "Card"))
                $root.GameMsg_INRM.Poker_Card.encode(message.Card, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified INRM_PopCardRet message, length delimited. Does not implicitly {@link GameMsg_INRM.INRM_PopCardRet.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_INRM.INRM_PopCardRet
         * @static
         * @param {GameMsg_INRM.IINRM_PopCardRet} message INRM_PopCardRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        INRM_PopCardRet.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a INRM_PopCardRet message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_INRM.INRM_PopCardRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_INRM.INRM_PopCardRet} INRM_PopCardRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        INRM_PopCardRet.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_INRM.INRM_PopCardRet();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Success = reader.bool();
                    break;
                case 2:
                    message.Message = reader.string();
                    break;
                case 3:
                    message.Card = $root.GameMsg_INRM.Poker_Card.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a INRM_PopCardRet message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_INRM.INRM_PopCardRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_INRM.INRM_PopCardRet} INRM_PopCardRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        INRM_PopCardRet.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a INRM_PopCardRet message.
         * @function verify
         * @memberof GameMsg_INRM.INRM_PopCardRet
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        INRM_PopCardRet.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Success != null && message.hasOwnProperty("Success"))
                if (typeof message.Success !== "boolean")
                    return "Success: boolean expected";
            if (message.Message != null && message.hasOwnProperty("Message"))
                if (!$util.isString(message.Message))
                    return "Message: string expected";
            if (message.Card != null && message.hasOwnProperty("Card")) {
                var error = $root.GameMsg_INRM.Poker_Card.verify(message.Card);
                if (error)
                    return "Card." + error;
            }
            return null;
        };

        /**
         * Creates a INRM_PopCardRet message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_INRM.INRM_PopCardRet
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_INRM.INRM_PopCardRet} INRM_PopCardRet
         */
        INRM_PopCardRet.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_INRM.INRM_PopCardRet)
                return object;
            var message = new $root.GameMsg_INRM.INRM_PopCardRet();
            if (object.Success != null)
                message.Success = Boolean(object.Success);
            if (object.Message != null)
                message.Message = String(object.Message);
            if (object.Card != null) {
                if (typeof object.Card !== "object")
                    throw TypeError(".GameMsg_INRM.INRM_PopCardRet.Card: object expected");
                message.Card = $root.GameMsg_INRM.Poker_Card.fromObject(object.Card);
            }
            return message;
        };

        /**
         * Creates a plain object from a INRM_PopCardRet message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_INRM.INRM_PopCardRet
         * @static
         * @param {GameMsg_INRM.INRM_PopCardRet} message INRM_PopCardRet
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        INRM_PopCardRet.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.Success = false;
                object.Message = "";
                object.Card = null;
            }
            if (message.Success != null && message.hasOwnProperty("Success"))
                object.Success = message.Success;
            if (message.Message != null && message.hasOwnProperty("Message"))
                object.Message = message.Message;
            if (message.Card != null && message.hasOwnProperty("Card"))
                object.Card = $root.GameMsg_INRM.Poker_Card.toObject(message.Card, options);
            return object;
        };

        /**
         * Converts this INRM_PopCardRet to JSON.
         * @function toJSON
         * @memberof GameMsg_INRM.INRM_PopCardRet
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        INRM_PopCardRet.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return INRM_PopCardRet;
    })();

    GameMsg_INRM.INRM_ActionRet = (function() {

        /**
         * Properties of a INRM_ActionRet.
         * @memberof GameMsg_INRM
         * @interface IINRM_ActionRet
         * @property {boolean|null} [Success] INRM_ActionRet Success
         * @property {string|null} [Message] INRM_ActionRet Message
         */

        /**
         * Constructs a new INRM_ActionRet.
         * @memberof GameMsg_INRM
         * @classdesc Represents a INRM_ActionRet.
         * @implements IINRM_ActionRet
         * @constructor
         * @param {GameMsg_INRM.IINRM_ActionRet=} [properties] Properties to set
         */
        function INRM_ActionRet(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * INRM_ActionRet Success.
         * @member {boolean} Success
         * @memberof GameMsg_INRM.INRM_ActionRet
         * @instance
         */
        INRM_ActionRet.prototype.Success = false;

        /**
         * INRM_ActionRet Message.
         * @member {string} Message
         * @memberof GameMsg_INRM.INRM_ActionRet
         * @instance
         */
        INRM_ActionRet.prototype.Message = "";

        /**
         * Creates a new INRM_ActionRet instance using the specified properties.
         * @function create
         * @memberof GameMsg_INRM.INRM_ActionRet
         * @static
         * @param {GameMsg_INRM.IINRM_ActionRet=} [properties] Properties to set
         * @returns {GameMsg_INRM.INRM_ActionRet} INRM_ActionRet instance
         */
        INRM_ActionRet.create = function create(properties) {
            return new INRM_ActionRet(properties);
        };

        /**
         * Encodes the specified INRM_ActionRet message. Does not implicitly {@link GameMsg_INRM.INRM_ActionRet.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_INRM.INRM_ActionRet
         * @static
         * @param {GameMsg_INRM.IINRM_ActionRet} message INRM_ActionRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        INRM_ActionRet.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Success != null && Object.hasOwnProperty.call(message, "Success"))
                writer.uint32(/* id 1, wireType 0 =*/8).bool(message.Success);
            if (message.Message != null && Object.hasOwnProperty.call(message, "Message"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.Message);
            return writer;
        };

        /**
         * Encodes the specified INRM_ActionRet message, length delimited. Does not implicitly {@link GameMsg_INRM.INRM_ActionRet.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_INRM.INRM_ActionRet
         * @static
         * @param {GameMsg_INRM.IINRM_ActionRet} message INRM_ActionRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        INRM_ActionRet.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a INRM_ActionRet message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_INRM.INRM_ActionRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_INRM.INRM_ActionRet} INRM_ActionRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        INRM_ActionRet.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_INRM.INRM_ActionRet();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Success = reader.bool();
                    break;
                case 2:
                    message.Message = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a INRM_ActionRet message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_INRM.INRM_ActionRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_INRM.INRM_ActionRet} INRM_ActionRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        INRM_ActionRet.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a INRM_ActionRet message.
         * @function verify
         * @memberof GameMsg_INRM.INRM_ActionRet
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        INRM_ActionRet.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Success != null && message.hasOwnProperty("Success"))
                if (typeof message.Success !== "boolean")
                    return "Success: boolean expected";
            if (message.Message != null && message.hasOwnProperty("Message"))
                if (!$util.isString(message.Message))
                    return "Message: string expected";
            return null;
        };

        /**
         * Creates a INRM_ActionRet message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_INRM.INRM_ActionRet
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_INRM.INRM_ActionRet} INRM_ActionRet
         */
        INRM_ActionRet.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_INRM.INRM_ActionRet)
                return object;
            var message = new $root.GameMsg_INRM.INRM_ActionRet();
            if (object.Success != null)
                message.Success = Boolean(object.Success);
            if (object.Message != null)
                message.Message = String(object.Message);
            return message;
        };

        /**
         * Creates a plain object from a INRM_ActionRet message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_INRM.INRM_ActionRet
         * @static
         * @param {GameMsg_INRM.INRM_ActionRet} message INRM_ActionRet
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        INRM_ActionRet.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.Success = false;
                object.Message = "";
            }
            if (message.Success != null && message.hasOwnProperty("Success"))
                object.Success = message.Success;
            if (message.Message != null && message.hasOwnProperty("Message"))
                object.Message = message.Message;
            return object;
        };

        /**
         * Converts this INRM_ActionRet to JSON.
         * @function toJSON
         * @memberof GameMsg_INRM.INRM_ActionRet
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        INRM_ActionRet.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return INRM_ActionRet;
    })();

    GameMsg_INRM.INRM_RefreshHandRet = (function() {

        /**
         * Properties of a INRM_RefreshHandRet.
         * @memberof GameMsg_INRM
         * @interface IINRM_RefreshHandRet
         * @property {boolean|null} [Success] INRM_RefreshHandRet Success
         * @property {string|null} [Message] INRM_RefreshHandRet Message
         * @property {GameMsg_INRM.IINRM_HandResult|null} [Result] INRM_RefreshHandRet Result
         */

        /**
         * Constructs a new INRM_RefreshHandRet.
         * @memberof GameMsg_INRM
         * @classdesc Represents a INRM_RefreshHandRet.
         * @implements IINRM_RefreshHandRet
         * @constructor
         * @param {GameMsg_INRM.IINRM_RefreshHandRet=} [properties] Properties to set
         */
        function INRM_RefreshHandRet(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * INRM_RefreshHandRet Success.
         * @member {boolean} Success
         * @memberof GameMsg_INRM.INRM_RefreshHandRet
         * @instance
         */
        INRM_RefreshHandRet.prototype.Success = false;

        /**
         * INRM_RefreshHandRet Message.
         * @member {string} Message
         * @memberof GameMsg_INRM.INRM_RefreshHandRet
         * @instance
         */
        INRM_RefreshHandRet.prototype.Message = "";

        /**
         * INRM_RefreshHandRet Result.
         * @member {GameMsg_INRM.IINRM_HandResult|null|undefined} Result
         * @memberof GameMsg_INRM.INRM_RefreshHandRet
         * @instance
         */
        INRM_RefreshHandRet.prototype.Result = null;

        /**
         * Creates a new INRM_RefreshHandRet instance using the specified properties.
         * @function create
         * @memberof GameMsg_INRM.INRM_RefreshHandRet
         * @static
         * @param {GameMsg_INRM.IINRM_RefreshHandRet=} [properties] Properties to set
         * @returns {GameMsg_INRM.INRM_RefreshHandRet} INRM_RefreshHandRet instance
         */
        INRM_RefreshHandRet.create = function create(properties) {
            return new INRM_RefreshHandRet(properties);
        };

        /**
         * Encodes the specified INRM_RefreshHandRet message. Does not implicitly {@link GameMsg_INRM.INRM_RefreshHandRet.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_INRM.INRM_RefreshHandRet
         * @static
         * @param {GameMsg_INRM.IINRM_RefreshHandRet} message INRM_RefreshHandRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        INRM_RefreshHandRet.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Success != null && Object.hasOwnProperty.call(message, "Success"))
                writer.uint32(/* id 1, wireType 0 =*/8).bool(message.Success);
            if (message.Message != null && Object.hasOwnProperty.call(message, "Message"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.Message);
            if (message.Result != null && Object.hasOwnProperty.call(message, "Result"))
                $root.GameMsg_INRM.INRM_HandResult.encode(message.Result, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified INRM_RefreshHandRet message, length delimited. Does not implicitly {@link GameMsg_INRM.INRM_RefreshHandRet.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_INRM.INRM_RefreshHandRet
         * @static
         * @param {GameMsg_INRM.IINRM_RefreshHandRet} message INRM_RefreshHandRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        INRM_RefreshHandRet.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a INRM_RefreshHandRet message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_INRM.INRM_RefreshHandRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_INRM.INRM_RefreshHandRet} INRM_RefreshHandRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        INRM_RefreshHandRet.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_INRM.INRM_RefreshHandRet();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Success = reader.bool();
                    break;
                case 2:
                    message.Message = reader.string();
                    break;
                case 3:
                    message.Result = $root.GameMsg_INRM.INRM_HandResult.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a INRM_RefreshHandRet message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_INRM.INRM_RefreshHandRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_INRM.INRM_RefreshHandRet} INRM_RefreshHandRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        INRM_RefreshHandRet.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a INRM_RefreshHandRet message.
         * @function verify
         * @memberof GameMsg_INRM.INRM_RefreshHandRet
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        INRM_RefreshHandRet.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Success != null && message.hasOwnProperty("Success"))
                if (typeof message.Success !== "boolean")
                    return "Success: boolean expected";
            if (message.Message != null && message.hasOwnProperty("Message"))
                if (!$util.isString(message.Message))
                    return "Message: string expected";
            if (message.Result != null && message.hasOwnProperty("Result")) {
                var error = $root.GameMsg_INRM.INRM_HandResult.verify(message.Result);
                if (error)
                    return "Result." + error;
            }
            return null;
        };

        /**
         * Creates a INRM_RefreshHandRet message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_INRM.INRM_RefreshHandRet
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_INRM.INRM_RefreshHandRet} INRM_RefreshHandRet
         */
        INRM_RefreshHandRet.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_INRM.INRM_RefreshHandRet)
                return object;
            var message = new $root.GameMsg_INRM.INRM_RefreshHandRet();
            if (object.Success != null)
                message.Success = Boolean(object.Success);
            if (object.Message != null)
                message.Message = String(object.Message);
            if (object.Result != null) {
                if (typeof object.Result !== "object")
                    throw TypeError(".GameMsg_INRM.INRM_RefreshHandRet.Result: object expected");
                message.Result = $root.GameMsg_INRM.INRM_HandResult.fromObject(object.Result);
            }
            return message;
        };

        /**
         * Creates a plain object from a INRM_RefreshHandRet message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_INRM.INRM_RefreshHandRet
         * @static
         * @param {GameMsg_INRM.INRM_RefreshHandRet} message INRM_RefreshHandRet
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        INRM_RefreshHandRet.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.Success = false;
                object.Message = "";
                object.Result = null;
            }
            if (message.Success != null && message.hasOwnProperty("Success"))
                object.Success = message.Success;
            if (message.Message != null && message.hasOwnProperty("Message"))
                object.Message = message.Message;
            if (message.Result != null && message.hasOwnProperty("Result"))
                object.Result = $root.GameMsg_INRM.INRM_HandResult.toObject(message.Result, options);
            return object;
        };

        /**
         * Converts this INRM_RefreshHandRet to JSON.
         * @function toJSON
         * @memberof GameMsg_INRM.INRM_RefreshHandRet
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        INRM_RefreshHandRet.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return INRM_RefreshHandRet;
    })();

    GameMsg_INRM.INRM_HandResult = (function() {

        /**
         * Properties of a INRM_HandResult.
         * @memberof GameMsg_INRM
         * @interface IINRM_HandResult
         * @property {number|null} [Point] INRM_HandResult Point
         * @property {Array.<GameMsg_INRM.IINRM_Deck>|null} [Decks] INRM_HandResult Decks
         */

        /**
         * Constructs a new INRM_HandResult.
         * @memberof GameMsg_INRM
         * @classdesc Represents a INRM_HandResult.
         * @implements IINRM_HandResult
         * @constructor
         * @param {GameMsg_INRM.IINRM_HandResult=} [properties] Properties to set
         */
        function INRM_HandResult(properties) {
            this.Decks = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * INRM_HandResult Point.
         * @member {number} Point
         * @memberof GameMsg_INRM.INRM_HandResult
         * @instance
         */
        INRM_HandResult.prototype.Point = 0;

        /**
         * INRM_HandResult Decks.
         * @member {Array.<GameMsg_INRM.IINRM_Deck>} Decks
         * @memberof GameMsg_INRM.INRM_HandResult
         * @instance
         */
        INRM_HandResult.prototype.Decks = $util.emptyArray;

        /**
         * Creates a new INRM_HandResult instance using the specified properties.
         * @function create
         * @memberof GameMsg_INRM.INRM_HandResult
         * @static
         * @param {GameMsg_INRM.IINRM_HandResult=} [properties] Properties to set
         * @returns {GameMsg_INRM.INRM_HandResult} INRM_HandResult instance
         */
        INRM_HandResult.create = function create(properties) {
            return new INRM_HandResult(properties);
        };

        /**
         * Encodes the specified INRM_HandResult message. Does not implicitly {@link GameMsg_INRM.INRM_HandResult.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_INRM.INRM_HandResult
         * @static
         * @param {GameMsg_INRM.IINRM_HandResult} message INRM_HandResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        INRM_HandResult.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Point != null && Object.hasOwnProperty.call(message, "Point"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.Point);
            if (message.Decks != null && message.Decks.length)
                for (var i = 0; i < message.Decks.length; ++i)
                    $root.GameMsg_INRM.INRM_Deck.encode(message.Decks[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified INRM_HandResult message, length delimited. Does not implicitly {@link GameMsg_INRM.INRM_HandResult.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_INRM.INRM_HandResult
         * @static
         * @param {GameMsg_INRM.IINRM_HandResult} message INRM_HandResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        INRM_HandResult.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a INRM_HandResult message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_INRM.INRM_HandResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_INRM.INRM_HandResult} INRM_HandResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        INRM_HandResult.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_INRM.INRM_HandResult();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Point = reader.int32();
                    break;
                case 2:
                    if (!(message.Decks && message.Decks.length))
                        message.Decks = [];
                    message.Decks.push($root.GameMsg_INRM.INRM_Deck.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a INRM_HandResult message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_INRM.INRM_HandResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_INRM.INRM_HandResult} INRM_HandResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        INRM_HandResult.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a INRM_HandResult message.
         * @function verify
         * @memberof GameMsg_INRM.INRM_HandResult
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        INRM_HandResult.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Point != null && message.hasOwnProperty("Point"))
                if (!$util.isInteger(message.Point))
                    return "Point: integer expected";
            if (message.Decks != null && message.hasOwnProperty("Decks")) {
                if (!Array.isArray(message.Decks))
                    return "Decks: array expected";
                for (var i = 0; i < message.Decks.length; ++i) {
                    var error = $root.GameMsg_INRM.INRM_Deck.verify(message.Decks[i]);
                    if (error)
                        return "Decks." + error;
                }
            }
            return null;
        };

        /**
         * Creates a INRM_HandResult message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_INRM.INRM_HandResult
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_INRM.INRM_HandResult} INRM_HandResult
         */
        INRM_HandResult.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_INRM.INRM_HandResult)
                return object;
            var message = new $root.GameMsg_INRM.INRM_HandResult();
            if (object.Point != null)
                message.Point = object.Point | 0;
            if (object.Decks) {
                if (!Array.isArray(object.Decks))
                    throw TypeError(".GameMsg_INRM.INRM_HandResult.Decks: array expected");
                message.Decks = [];
                for (var i = 0; i < object.Decks.length; ++i) {
                    if (typeof object.Decks[i] !== "object")
                        throw TypeError(".GameMsg_INRM.INRM_HandResult.Decks: object expected");
                    message.Decks[i] = $root.GameMsg_INRM.INRM_Deck.fromObject(object.Decks[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a INRM_HandResult message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_INRM.INRM_HandResult
         * @static
         * @param {GameMsg_INRM.INRM_HandResult} message INRM_HandResult
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        INRM_HandResult.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.Decks = [];
            if (options.defaults)
                object.Point = 0;
            if (message.Point != null && message.hasOwnProperty("Point"))
                object.Point = message.Point;
            if (message.Decks && message.Decks.length) {
                object.Decks = [];
                for (var j = 0; j < message.Decks.length; ++j)
                    object.Decks[j] = $root.GameMsg_INRM.INRM_Deck.toObject(message.Decks[j], options);
            }
            return object;
        };

        /**
         * Converts this INRM_HandResult to JSON.
         * @function toJSON
         * @memberof GameMsg_INRM.INRM_HandResult
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        INRM_HandResult.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return INRM_HandResult;
    })();

    GameMsg_INRM.INRM_PlayerCards = (function() {

        /**
         * Properties of a INRM_PlayerCards.
         * @memberof GameMsg_INRM
         * @interface IINRM_PlayerCards
         * @property {Array.<GameMsg_INRM.IPoker_Card>|null} [Cards] INRM_PlayerCards Cards
         * @property {Array.<GameMsg_INRM.IINRM_Deck>|null} [Decks] INRM_PlayerCards Decks
         */

        /**
         * Constructs a new INRM_PlayerCards.
         * @memberof GameMsg_INRM
         * @classdesc Represents a INRM_PlayerCards.
         * @implements IINRM_PlayerCards
         * @constructor
         * @param {GameMsg_INRM.IINRM_PlayerCards=} [properties] Properties to set
         */
        function INRM_PlayerCards(properties) {
            this.Cards = [];
            this.Decks = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * INRM_PlayerCards Cards.
         * @member {Array.<GameMsg_INRM.IPoker_Card>} Cards
         * @memberof GameMsg_INRM.INRM_PlayerCards
         * @instance
         */
        INRM_PlayerCards.prototype.Cards = $util.emptyArray;

        /**
         * INRM_PlayerCards Decks.
         * @member {Array.<GameMsg_INRM.IINRM_Deck>} Decks
         * @memberof GameMsg_INRM.INRM_PlayerCards
         * @instance
         */
        INRM_PlayerCards.prototype.Decks = $util.emptyArray;

        /**
         * Creates a new INRM_PlayerCards instance using the specified properties.
         * @function create
         * @memberof GameMsg_INRM.INRM_PlayerCards
         * @static
         * @param {GameMsg_INRM.IINRM_PlayerCards=} [properties] Properties to set
         * @returns {GameMsg_INRM.INRM_PlayerCards} INRM_PlayerCards instance
         */
        INRM_PlayerCards.create = function create(properties) {
            return new INRM_PlayerCards(properties);
        };

        /**
         * Encodes the specified INRM_PlayerCards message. Does not implicitly {@link GameMsg_INRM.INRM_PlayerCards.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_INRM.INRM_PlayerCards
         * @static
         * @param {GameMsg_INRM.IINRM_PlayerCards} message INRM_PlayerCards message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        INRM_PlayerCards.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Cards != null && message.Cards.length)
                for (var i = 0; i < message.Cards.length; ++i)
                    $root.GameMsg_INRM.Poker_Card.encode(message.Cards[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.Decks != null && message.Decks.length)
                for (var i = 0; i < message.Decks.length; ++i)
                    $root.GameMsg_INRM.INRM_Deck.encode(message.Decks[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified INRM_PlayerCards message, length delimited. Does not implicitly {@link GameMsg_INRM.INRM_PlayerCards.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_INRM.INRM_PlayerCards
         * @static
         * @param {GameMsg_INRM.IINRM_PlayerCards} message INRM_PlayerCards message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        INRM_PlayerCards.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a INRM_PlayerCards message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_INRM.INRM_PlayerCards
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_INRM.INRM_PlayerCards} INRM_PlayerCards
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        INRM_PlayerCards.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_INRM.INRM_PlayerCards();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.Cards && message.Cards.length))
                        message.Cards = [];
                    message.Cards.push($root.GameMsg_INRM.Poker_Card.decode(reader, reader.uint32()));
                    break;
                case 2:
                    if (!(message.Decks && message.Decks.length))
                        message.Decks = [];
                    message.Decks.push($root.GameMsg_INRM.INRM_Deck.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a INRM_PlayerCards message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_INRM.INRM_PlayerCards
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_INRM.INRM_PlayerCards} INRM_PlayerCards
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        INRM_PlayerCards.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a INRM_PlayerCards message.
         * @function verify
         * @memberof GameMsg_INRM.INRM_PlayerCards
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        INRM_PlayerCards.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Cards != null && message.hasOwnProperty("Cards")) {
                if (!Array.isArray(message.Cards))
                    return "Cards: array expected";
                for (var i = 0; i < message.Cards.length; ++i) {
                    var error = $root.GameMsg_INRM.Poker_Card.verify(message.Cards[i]);
                    if (error)
                        return "Cards." + error;
                }
            }
            if (message.Decks != null && message.hasOwnProperty("Decks")) {
                if (!Array.isArray(message.Decks))
                    return "Decks: array expected";
                for (var i = 0; i < message.Decks.length; ++i) {
                    var error = $root.GameMsg_INRM.INRM_Deck.verify(message.Decks[i]);
                    if (error)
                        return "Decks." + error;
                }
            }
            return null;
        };

        /**
         * Creates a INRM_PlayerCards message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_INRM.INRM_PlayerCards
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_INRM.INRM_PlayerCards} INRM_PlayerCards
         */
        INRM_PlayerCards.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_INRM.INRM_PlayerCards)
                return object;
            var message = new $root.GameMsg_INRM.INRM_PlayerCards();
            if (object.Cards) {
                if (!Array.isArray(object.Cards))
                    throw TypeError(".GameMsg_INRM.INRM_PlayerCards.Cards: array expected");
                message.Cards = [];
                for (var i = 0; i < object.Cards.length; ++i) {
                    if (typeof object.Cards[i] !== "object")
                        throw TypeError(".GameMsg_INRM.INRM_PlayerCards.Cards: object expected");
                    message.Cards[i] = $root.GameMsg_INRM.Poker_Card.fromObject(object.Cards[i]);
                }
            }
            if (object.Decks) {
                if (!Array.isArray(object.Decks))
                    throw TypeError(".GameMsg_INRM.INRM_PlayerCards.Decks: array expected");
                message.Decks = [];
                for (var i = 0; i < object.Decks.length; ++i) {
                    if (typeof object.Decks[i] !== "object")
                        throw TypeError(".GameMsg_INRM.INRM_PlayerCards.Decks: object expected");
                    message.Decks[i] = $root.GameMsg_INRM.INRM_Deck.fromObject(object.Decks[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a INRM_PlayerCards message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_INRM.INRM_PlayerCards
         * @static
         * @param {GameMsg_INRM.INRM_PlayerCards} message INRM_PlayerCards
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        INRM_PlayerCards.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.Cards = [];
                object.Decks = [];
            }
            if (message.Cards && message.Cards.length) {
                object.Cards = [];
                for (var j = 0; j < message.Cards.length; ++j)
                    object.Cards[j] = $root.GameMsg_INRM.Poker_Card.toObject(message.Cards[j], options);
            }
            if (message.Decks && message.Decks.length) {
                object.Decks = [];
                for (var j = 0; j < message.Decks.length; ++j)
                    object.Decks[j] = $root.GameMsg_INRM.INRM_Deck.toObject(message.Decks[j], options);
            }
            return object;
        };

        /**
         * Converts this INRM_PlayerCards to JSON.
         * @function toJSON
         * @memberof GameMsg_INRM.INRM_PlayerCards
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        INRM_PlayerCards.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return INRM_PlayerCards;
    })();

    GameMsg_INRM.INRM_TimeCD = (function() {

        /**
         * Properties of a INRM_TimeCD.
         * @memberof GameMsg_INRM
         * @interface IINRM_TimeCD
         * @property {number|Long|null} [CD] INRM_TimeCD CD
         */

        /**
         * Constructs a new INRM_TimeCD.
         * @memberof GameMsg_INRM
         * @classdesc Represents a INRM_TimeCD.
         * @implements IINRM_TimeCD
         * @constructor
         * @param {GameMsg_INRM.IINRM_TimeCD=} [properties] Properties to set
         */
        function INRM_TimeCD(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * INRM_TimeCD CD.
         * @member {number|Long} CD
         * @memberof GameMsg_INRM.INRM_TimeCD
         * @instance
         */
        INRM_TimeCD.prototype.CD = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new INRM_TimeCD instance using the specified properties.
         * @function create
         * @memberof GameMsg_INRM.INRM_TimeCD
         * @static
         * @param {GameMsg_INRM.IINRM_TimeCD=} [properties] Properties to set
         * @returns {GameMsg_INRM.INRM_TimeCD} INRM_TimeCD instance
         */
        INRM_TimeCD.create = function create(properties) {
            return new INRM_TimeCD(properties);
        };

        /**
         * Encodes the specified INRM_TimeCD message. Does not implicitly {@link GameMsg_INRM.INRM_TimeCD.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_INRM.INRM_TimeCD
         * @static
         * @param {GameMsg_INRM.IINRM_TimeCD} message INRM_TimeCD message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        INRM_TimeCD.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.CD != null && Object.hasOwnProperty.call(message, "CD"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.CD);
            return writer;
        };

        /**
         * Encodes the specified INRM_TimeCD message, length delimited. Does not implicitly {@link GameMsg_INRM.INRM_TimeCD.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_INRM.INRM_TimeCD
         * @static
         * @param {GameMsg_INRM.IINRM_TimeCD} message INRM_TimeCD message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        INRM_TimeCD.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a INRM_TimeCD message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_INRM.INRM_TimeCD
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_INRM.INRM_TimeCD} INRM_TimeCD
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        INRM_TimeCD.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_INRM.INRM_TimeCD();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.CD = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a INRM_TimeCD message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_INRM.INRM_TimeCD
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_INRM.INRM_TimeCD} INRM_TimeCD
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        INRM_TimeCD.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a INRM_TimeCD message.
         * @function verify
         * @memberof GameMsg_INRM.INRM_TimeCD
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        INRM_TimeCD.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.CD != null && message.hasOwnProperty("CD"))
                if (!$util.isInteger(message.CD) && !(message.CD && $util.isInteger(message.CD.low) && $util.isInteger(message.CD.high)))
                    return "CD: integer|Long expected";
            return null;
        };

        /**
         * Creates a INRM_TimeCD message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_INRM.INRM_TimeCD
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_INRM.INRM_TimeCD} INRM_TimeCD
         */
        INRM_TimeCD.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_INRM.INRM_TimeCD)
                return object;
            var message = new $root.GameMsg_INRM.INRM_TimeCD();
            if (object.CD != null)
                if ($util.Long)
                    (message.CD = $util.Long.fromValue(object.CD)).unsigned = false;
                else if (typeof object.CD === "string")
                    message.CD = parseInt(object.CD, 10);
                else if (typeof object.CD === "number")
                    message.CD = object.CD;
                else if (typeof object.CD === "object")
                    message.CD = new $util.LongBits(object.CD.low >>> 0, object.CD.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a INRM_TimeCD message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_INRM.INRM_TimeCD
         * @static
         * @param {GameMsg_INRM.INRM_TimeCD} message INRM_TimeCD
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        INRM_TimeCD.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.CD = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.CD = options.longs === String ? "0" : 0;
            if (message.CD != null && message.hasOwnProperty("CD"))
                if (typeof message.CD === "number")
                    object.CD = options.longs === String ? String(message.CD) : message.CD;
                else
                    object.CD = options.longs === String ? $util.Long.prototype.toString.call(message.CD) : options.longs === Number ? new $util.LongBits(message.CD.low >>> 0, message.CD.high >>> 0).toNumber() : message.CD;
            return object;
        };

        /**
         * Converts this INRM_TimeCD to JSON.
         * @function toJSON
         * @memberof GameMsg_INRM.INRM_TimeCD
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        INRM_TimeCD.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return INRM_TimeCD;
    })();

    /**
     * INRM_Category enum.
     * @name GameMsg_INRM.INRM_Category
     * @enum {number}
     * @property {number} INRM_Category_UNSPECIFIED=0 INRM_Category_UNSPECIFIED value
     * @property {number} INRM_Category_1stLife=1 INRM_Category_1stLife value
     * @property {number} INRM_Category_2stLife=2 INRM_Category_2stLife value
     * @property {number} INRM_Category_PureSequence=3 INRM_Category_PureSequence value
     * @property {number} INRM_Category_ImpureSequence=4 INRM_Category_ImpureSequence value
     * @property {number} INRM_Category_Set=5 INRM_Category_Set value
     * @property {number} INRM_Category_None=10 INRM_Category_None value
     * @property {number} INRM_Category_Invalid=11 INRM_Category_Invalid value
     * @property {number} INRM_Category_1stLifeNeeded=21 INRM_Category_1stLifeNeeded value
     * @property {number} INRM_Category_2stLifeNeeded=22 INRM_Category_2stLifeNeeded value
     */
    GameMsg_INRM.INRM_Category = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "INRM_Category_UNSPECIFIED"] = 0;
        values[valuesById[1] = "INRM_Category_1stLife"] = 1;
        values[valuesById[2] = "INRM_Category_2stLife"] = 2;
        values[valuesById[3] = "INRM_Category_PureSequence"] = 3;
        values[valuesById[4] = "INRM_Category_ImpureSequence"] = 4;
        values[valuesById[5] = "INRM_Category_Set"] = 5;
        values[valuesById[10] = "INRM_Category_None"] = 10;
        values[valuesById[11] = "INRM_Category_Invalid"] = 11;
        values[valuesById[21] = "INRM_Category_1stLifeNeeded"] = 21;
        values[valuesById[22] = "INRM_Category_2stLifeNeeded"] = 22;
        return values;
    })();

    GameMsg_INRM.INRM_Deck = (function() {

        /**
         * Properties of a INRM_Deck.
         * @memberof GameMsg_INRM
         * @interface IINRM_Deck
         * @property {GameMsg_INRM.INRM_Category|null} [Category] INRM_Deck Category
         * @property {GameMsg_INRM.IPoker_Deck|null} [Deck] INRM_Deck Deck
         */

        /**
         * Constructs a new INRM_Deck.
         * @memberof GameMsg_INRM
         * @classdesc Represents a INRM_Deck.
         * @implements IINRM_Deck
         * @constructor
         * @param {GameMsg_INRM.IINRM_Deck=} [properties] Properties to set
         */
        function INRM_Deck(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * INRM_Deck Category.
         * @member {GameMsg_INRM.INRM_Category} Category
         * @memberof GameMsg_INRM.INRM_Deck
         * @instance
         */
        INRM_Deck.prototype.Category = 0;

        /**
         * INRM_Deck Deck.
         * @member {GameMsg_INRM.IPoker_Deck|null|undefined} Deck
         * @memberof GameMsg_INRM.INRM_Deck
         * @instance
         */
        INRM_Deck.prototype.Deck = null;

        /**
         * Creates a new INRM_Deck instance using the specified properties.
         * @function create
         * @memberof GameMsg_INRM.INRM_Deck
         * @static
         * @param {GameMsg_INRM.IINRM_Deck=} [properties] Properties to set
         * @returns {GameMsg_INRM.INRM_Deck} INRM_Deck instance
         */
        INRM_Deck.create = function create(properties) {
            return new INRM_Deck(properties);
        };

        /**
         * Encodes the specified INRM_Deck message. Does not implicitly {@link GameMsg_INRM.INRM_Deck.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_INRM.INRM_Deck
         * @static
         * @param {GameMsg_INRM.IINRM_Deck} message INRM_Deck message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        INRM_Deck.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Category != null && Object.hasOwnProperty.call(message, "Category"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.Category);
            if (message.Deck != null && Object.hasOwnProperty.call(message, "Deck"))
                $root.GameMsg_INRM.Poker_Deck.encode(message.Deck, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified INRM_Deck message, length delimited. Does not implicitly {@link GameMsg_INRM.INRM_Deck.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_INRM.INRM_Deck
         * @static
         * @param {GameMsg_INRM.IINRM_Deck} message INRM_Deck message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        INRM_Deck.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a INRM_Deck message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_INRM.INRM_Deck
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_INRM.INRM_Deck} INRM_Deck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        INRM_Deck.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_INRM.INRM_Deck();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Category = reader.int32();
                    break;
                case 2:
                    message.Deck = $root.GameMsg_INRM.Poker_Deck.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a INRM_Deck message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_INRM.INRM_Deck
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_INRM.INRM_Deck} INRM_Deck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        INRM_Deck.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a INRM_Deck message.
         * @function verify
         * @memberof GameMsg_INRM.INRM_Deck
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        INRM_Deck.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Category != null && message.hasOwnProperty("Category"))
                switch (message.Category) {
                default:
                    return "Category: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 10:
                case 11:
                case 21:
                case 22:
                    break;
                }
            if (message.Deck != null && message.hasOwnProperty("Deck")) {
                var error = $root.GameMsg_INRM.Poker_Deck.verify(message.Deck);
                if (error)
                    return "Deck." + error;
            }
            return null;
        };

        /**
         * Creates a INRM_Deck message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_INRM.INRM_Deck
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_INRM.INRM_Deck} INRM_Deck
         */
        INRM_Deck.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_INRM.INRM_Deck)
                return object;
            var message = new $root.GameMsg_INRM.INRM_Deck();
            switch (object.Category) {
            case "INRM_Category_UNSPECIFIED":
            case 0:
                message.Category = 0;
                break;
            case "INRM_Category_1stLife":
            case 1:
                message.Category = 1;
                break;
            case "INRM_Category_2stLife":
            case 2:
                message.Category = 2;
                break;
            case "INRM_Category_PureSequence":
            case 3:
                message.Category = 3;
                break;
            case "INRM_Category_ImpureSequence":
            case 4:
                message.Category = 4;
                break;
            case "INRM_Category_Set":
            case 5:
                message.Category = 5;
                break;
            case "INRM_Category_None":
            case 10:
                message.Category = 10;
                break;
            case "INRM_Category_Invalid":
            case 11:
                message.Category = 11;
                break;
            case "INRM_Category_1stLifeNeeded":
            case 21:
                message.Category = 21;
                break;
            case "INRM_Category_2stLifeNeeded":
            case 22:
                message.Category = 22;
                break;
            }
            if (object.Deck != null) {
                if (typeof object.Deck !== "object")
                    throw TypeError(".GameMsg_INRM.INRM_Deck.Deck: object expected");
                message.Deck = $root.GameMsg_INRM.Poker_Deck.fromObject(object.Deck);
            }
            return message;
        };

        /**
         * Creates a plain object from a INRM_Deck message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_INRM.INRM_Deck
         * @static
         * @param {GameMsg_INRM.INRM_Deck} message INRM_Deck
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        INRM_Deck.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.Category = options.enums === String ? "INRM_Category_UNSPECIFIED" : 0;
                object.Deck = null;
            }
            if (message.Category != null && message.hasOwnProperty("Category"))
                object.Category = options.enums === String ? $root.GameMsg_INRM.INRM_Category[message.Category] : message.Category;
            if (message.Deck != null && message.hasOwnProperty("Deck"))
                object.Deck = $root.GameMsg_INRM.Poker_Deck.toObject(message.Deck, options);
            return object;
        };

        /**
         * Converts this INRM_Deck to JSON.
         * @function toJSON
         * @memberof GameMsg_INRM.INRM_Deck
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        INRM_Deck.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return INRM_Deck;
    })();

    /**
     * Poker_Suit enum.
     * @name GameMsg_INRM.Poker_Suit
     * @enum {number}
     * @property {number} Poker_Suit_UNSPECIFIED=0 Poker_Suit_UNSPECIFIED value
     * @property {number} Poker_Suit_Spades=16 Poker_Suit_Spades value
     * @property {number} Poker_Suit_Hearts=32 Poker_Suit_Hearts value
     * @property {number} Poker_Suit_Diamonds=48 Poker_Suit_Diamonds value
     * @property {number} Poker_Suit_Clubs=64 Poker_Suit_Clubs value
     * @property {number} Poker_Suit_Jokers=80 Poker_Suit_Jokers value
     */
    GameMsg_INRM.Poker_Suit = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "Poker_Suit_UNSPECIFIED"] = 0;
        values[valuesById[16] = "Poker_Suit_Spades"] = 16;
        values[valuesById[32] = "Poker_Suit_Hearts"] = 32;
        values[valuesById[48] = "Poker_Suit_Diamonds"] = 48;
        values[valuesById[64] = "Poker_Suit_Clubs"] = 64;
        values[valuesById[80] = "Poker_Suit_Jokers"] = 80;
        return values;
    })();

    /**
     * Poker_Rank enum.
     * @name GameMsg_INRM.Poker_Rank
     * @enum {number}
     * @property {number} Poker_Rank_UNSPECIFIED=0 Poker_Rank_UNSPECIFIED value
     * @property {number} Poker_Rank_Ace=1 Poker_Rank_Ace value
     * @property {number} Poker_Rank_Two=2 Poker_Rank_Two value
     * @property {number} Poker_Rank_Three=3 Poker_Rank_Three value
     * @property {number} Poker_Rank_Four=4 Poker_Rank_Four value
     * @property {number} Poker_Rank_Five=5 Poker_Rank_Five value
     * @property {number} Poker_Rank_Six=6 Poker_Rank_Six value
     * @property {number} Poker_Rank_Seven=7 Poker_Rank_Seven value
     * @property {number} Poker_Rank_Eight=8 Poker_Rank_Eight value
     * @property {number} Poker_Rank_Nine=9 Poker_Rank_Nine value
     * @property {number} Poker_Rank_Ten=10 Poker_Rank_Ten value
     * @property {number} Poker_Rank_Jack=11 Poker_Rank_Jack value
     * @property {number} Poker_Rank_Queen=12 Poker_Rank_Queen value
     * @property {number} Poker_Rank_King=13 Poker_Rank_King value
     */
    GameMsg_INRM.Poker_Rank = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "Poker_Rank_UNSPECIFIED"] = 0;
        values[valuesById[1] = "Poker_Rank_Ace"] = 1;
        values[valuesById[2] = "Poker_Rank_Two"] = 2;
        values[valuesById[3] = "Poker_Rank_Three"] = 3;
        values[valuesById[4] = "Poker_Rank_Four"] = 4;
        values[valuesById[5] = "Poker_Rank_Five"] = 5;
        values[valuesById[6] = "Poker_Rank_Six"] = 6;
        values[valuesById[7] = "Poker_Rank_Seven"] = 7;
        values[valuesById[8] = "Poker_Rank_Eight"] = 8;
        values[valuesById[9] = "Poker_Rank_Nine"] = 9;
        values[valuesById[10] = "Poker_Rank_Ten"] = 10;
        values[valuesById[11] = "Poker_Rank_Jack"] = 11;
        values[valuesById[12] = "Poker_Rank_Queen"] = 12;
        values[valuesById[13] = "Poker_Rank_King"] = 13;
        return values;
    })();

    GameMsg_INRM.Poker_Hand = (function() {

        /**
         * Properties of a Poker_Hand.
         * @memberof GameMsg_INRM
         * @interface IPoker_Hand
         * @property {Array.<GameMsg_INRM.IPoker_Deck>|null} [Decks] Poker_Hand Decks
         */

        /**
         * Constructs a new Poker_Hand.
         * @memberof GameMsg_INRM
         * @classdesc Represents a Poker_Hand.
         * @implements IPoker_Hand
         * @constructor
         * @param {GameMsg_INRM.IPoker_Hand=} [properties] Properties to set
         */
        function Poker_Hand(properties) {
            this.Decks = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Poker_Hand Decks.
         * @member {Array.<GameMsg_INRM.IPoker_Deck>} Decks
         * @memberof GameMsg_INRM.Poker_Hand
         * @instance
         */
        Poker_Hand.prototype.Decks = $util.emptyArray;

        /**
         * Creates a new Poker_Hand instance using the specified properties.
         * @function create
         * @memberof GameMsg_INRM.Poker_Hand
         * @static
         * @param {GameMsg_INRM.IPoker_Hand=} [properties] Properties to set
         * @returns {GameMsg_INRM.Poker_Hand} Poker_Hand instance
         */
        Poker_Hand.create = function create(properties) {
            return new Poker_Hand(properties);
        };

        /**
         * Encodes the specified Poker_Hand message. Does not implicitly {@link GameMsg_INRM.Poker_Hand.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_INRM.Poker_Hand
         * @static
         * @param {GameMsg_INRM.IPoker_Hand} message Poker_Hand message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Poker_Hand.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Decks != null && message.Decks.length)
                for (var i = 0; i < message.Decks.length; ++i)
                    $root.GameMsg_INRM.Poker_Deck.encode(message.Decks[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Poker_Hand message, length delimited. Does not implicitly {@link GameMsg_INRM.Poker_Hand.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_INRM.Poker_Hand
         * @static
         * @param {GameMsg_INRM.IPoker_Hand} message Poker_Hand message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Poker_Hand.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Poker_Hand message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_INRM.Poker_Hand
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_INRM.Poker_Hand} Poker_Hand
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Poker_Hand.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_INRM.Poker_Hand();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.Decks && message.Decks.length))
                        message.Decks = [];
                    message.Decks.push($root.GameMsg_INRM.Poker_Deck.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Poker_Hand message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_INRM.Poker_Hand
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_INRM.Poker_Hand} Poker_Hand
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Poker_Hand.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Poker_Hand message.
         * @function verify
         * @memberof GameMsg_INRM.Poker_Hand
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Poker_Hand.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Decks != null && message.hasOwnProperty("Decks")) {
                if (!Array.isArray(message.Decks))
                    return "Decks: array expected";
                for (var i = 0; i < message.Decks.length; ++i) {
                    var error = $root.GameMsg_INRM.Poker_Deck.verify(message.Decks[i]);
                    if (error)
                        return "Decks." + error;
                }
            }
            return null;
        };

        /**
         * Creates a Poker_Hand message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_INRM.Poker_Hand
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_INRM.Poker_Hand} Poker_Hand
         */
        Poker_Hand.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_INRM.Poker_Hand)
                return object;
            var message = new $root.GameMsg_INRM.Poker_Hand();
            if (object.Decks) {
                if (!Array.isArray(object.Decks))
                    throw TypeError(".GameMsg_INRM.Poker_Hand.Decks: array expected");
                message.Decks = [];
                for (var i = 0; i < object.Decks.length; ++i) {
                    if (typeof object.Decks[i] !== "object")
                        throw TypeError(".GameMsg_INRM.Poker_Hand.Decks: object expected");
                    message.Decks[i] = $root.GameMsg_INRM.Poker_Deck.fromObject(object.Decks[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a Poker_Hand message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_INRM.Poker_Hand
         * @static
         * @param {GameMsg_INRM.Poker_Hand} message Poker_Hand
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Poker_Hand.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.Decks = [];
            if (message.Decks && message.Decks.length) {
                object.Decks = [];
                for (var j = 0; j < message.Decks.length; ++j)
                    object.Decks[j] = $root.GameMsg_INRM.Poker_Deck.toObject(message.Decks[j], options);
            }
            return object;
        };

        /**
         * Converts this Poker_Hand to JSON.
         * @function toJSON
         * @memberof GameMsg_INRM.Poker_Hand
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Poker_Hand.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Poker_Hand;
    })();

    GameMsg_INRM.Poker_Deck = (function() {

        /**
         * Properties of a Poker_Deck.
         * @memberof GameMsg_INRM
         * @interface IPoker_Deck
         * @property {Array.<GameMsg_INRM.IPoker_Card>|null} [Cards] Poker_Deck Cards
         */

        /**
         * Constructs a new Poker_Deck.
         * @memberof GameMsg_INRM
         * @classdesc Represents a Poker_Deck.
         * @implements IPoker_Deck
         * @constructor
         * @param {GameMsg_INRM.IPoker_Deck=} [properties] Properties to set
         */
        function Poker_Deck(properties) {
            this.Cards = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Poker_Deck Cards.
         * @member {Array.<GameMsg_INRM.IPoker_Card>} Cards
         * @memberof GameMsg_INRM.Poker_Deck
         * @instance
         */
        Poker_Deck.prototype.Cards = $util.emptyArray;

        /**
         * Creates a new Poker_Deck instance using the specified properties.
         * @function create
         * @memberof GameMsg_INRM.Poker_Deck
         * @static
         * @param {GameMsg_INRM.IPoker_Deck=} [properties] Properties to set
         * @returns {GameMsg_INRM.Poker_Deck} Poker_Deck instance
         */
        Poker_Deck.create = function create(properties) {
            return new Poker_Deck(properties);
        };

        /**
         * Encodes the specified Poker_Deck message. Does not implicitly {@link GameMsg_INRM.Poker_Deck.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_INRM.Poker_Deck
         * @static
         * @param {GameMsg_INRM.IPoker_Deck} message Poker_Deck message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Poker_Deck.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Cards != null && message.Cards.length)
                for (var i = 0; i < message.Cards.length; ++i)
                    $root.GameMsg_INRM.Poker_Card.encode(message.Cards[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Poker_Deck message, length delimited. Does not implicitly {@link GameMsg_INRM.Poker_Deck.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_INRM.Poker_Deck
         * @static
         * @param {GameMsg_INRM.IPoker_Deck} message Poker_Deck message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Poker_Deck.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Poker_Deck message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_INRM.Poker_Deck
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_INRM.Poker_Deck} Poker_Deck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Poker_Deck.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_INRM.Poker_Deck();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.Cards && message.Cards.length))
                        message.Cards = [];
                    message.Cards.push($root.GameMsg_INRM.Poker_Card.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Poker_Deck message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_INRM.Poker_Deck
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_INRM.Poker_Deck} Poker_Deck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Poker_Deck.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Poker_Deck message.
         * @function verify
         * @memberof GameMsg_INRM.Poker_Deck
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Poker_Deck.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Cards != null && message.hasOwnProperty("Cards")) {
                if (!Array.isArray(message.Cards))
                    return "Cards: array expected";
                for (var i = 0; i < message.Cards.length; ++i) {
                    var error = $root.GameMsg_INRM.Poker_Card.verify(message.Cards[i]);
                    if (error)
                        return "Cards." + error;
                }
            }
            return null;
        };

        /**
         * Creates a Poker_Deck message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_INRM.Poker_Deck
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_INRM.Poker_Deck} Poker_Deck
         */
        Poker_Deck.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_INRM.Poker_Deck)
                return object;
            var message = new $root.GameMsg_INRM.Poker_Deck();
            if (object.Cards) {
                if (!Array.isArray(object.Cards))
                    throw TypeError(".GameMsg_INRM.Poker_Deck.Cards: array expected");
                message.Cards = [];
                for (var i = 0; i < object.Cards.length; ++i) {
                    if (typeof object.Cards[i] !== "object")
                        throw TypeError(".GameMsg_INRM.Poker_Deck.Cards: object expected");
                    message.Cards[i] = $root.GameMsg_INRM.Poker_Card.fromObject(object.Cards[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a Poker_Deck message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_INRM.Poker_Deck
         * @static
         * @param {GameMsg_INRM.Poker_Deck} message Poker_Deck
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Poker_Deck.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.Cards = [];
            if (message.Cards && message.Cards.length) {
                object.Cards = [];
                for (var j = 0; j < message.Cards.length; ++j)
                    object.Cards[j] = $root.GameMsg_INRM.Poker_Card.toObject(message.Cards[j], options);
            }
            return object;
        };

        /**
         * Converts this Poker_Deck to JSON.
         * @function toJSON
         * @memberof GameMsg_INRM.Poker_Deck
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Poker_Deck.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Poker_Deck;
    })();

    GameMsg_INRM.Poker_Card = (function() {

        /**
         * Properties of a Poker_Card.
         * @memberof GameMsg_INRM
         * @interface IPoker_Card
         * @property {GameMsg_INRM.Poker_Suit|null} [Suit] Poker_Card Suit
         * @property {GameMsg_INRM.Poker_Rank|null} [Rank] Poker_Card Rank
         */

        /**
         * Constructs a new Poker_Card.
         * @memberof GameMsg_INRM
         * @classdesc Represents a Poker_Card.
         * @implements IPoker_Card
         * @constructor
         * @param {GameMsg_INRM.IPoker_Card=} [properties] Properties to set
         */
        function Poker_Card(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Poker_Card Suit.
         * @member {GameMsg_INRM.Poker_Suit} Suit
         * @memberof GameMsg_INRM.Poker_Card
         * @instance
         */
        Poker_Card.prototype.Suit = 0;

        /**
         * Poker_Card Rank.
         * @member {GameMsg_INRM.Poker_Rank} Rank
         * @memberof GameMsg_INRM.Poker_Card
         * @instance
         */
        Poker_Card.prototype.Rank = 0;

        /**
         * Creates a new Poker_Card instance using the specified properties.
         * @function create
         * @memberof GameMsg_INRM.Poker_Card
         * @static
         * @param {GameMsg_INRM.IPoker_Card=} [properties] Properties to set
         * @returns {GameMsg_INRM.Poker_Card} Poker_Card instance
         */
        Poker_Card.create = function create(properties) {
            return new Poker_Card(properties);
        };

        /**
         * Encodes the specified Poker_Card message. Does not implicitly {@link GameMsg_INRM.Poker_Card.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_INRM.Poker_Card
         * @static
         * @param {GameMsg_INRM.IPoker_Card} message Poker_Card message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Poker_Card.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Suit != null && Object.hasOwnProperty.call(message, "Suit"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.Suit);
            if (message.Rank != null && Object.hasOwnProperty.call(message, "Rank"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.Rank);
            return writer;
        };

        /**
         * Encodes the specified Poker_Card message, length delimited. Does not implicitly {@link GameMsg_INRM.Poker_Card.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_INRM.Poker_Card
         * @static
         * @param {GameMsg_INRM.IPoker_Card} message Poker_Card message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Poker_Card.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Poker_Card message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_INRM.Poker_Card
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_INRM.Poker_Card} Poker_Card
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Poker_Card.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg_INRM.Poker_Card();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Suit = reader.int32();
                    break;
                case 2:
                    message.Rank = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Poker_Card message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_INRM.Poker_Card
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_INRM.Poker_Card} Poker_Card
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Poker_Card.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Poker_Card message.
         * @function verify
         * @memberof GameMsg_INRM.Poker_Card
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Poker_Card.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Suit != null && message.hasOwnProperty("Suit"))
                switch (message.Suit) {
                default:
                    return "Suit: enum value expected";
                case 0:
                case 16:
                case 32:
                case 48:
                case 64:
                case 80:
                    break;
                }
            if (message.Rank != null && message.hasOwnProperty("Rank"))
                switch (message.Rank) {
                default:
                    return "Rank: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                case 8:
                case 9:
                case 10:
                case 11:
                case 12:
                case 13:
                    break;
                }
            return null;
        };

        /**
         * Creates a Poker_Card message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_INRM.Poker_Card
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_INRM.Poker_Card} Poker_Card
         */
        Poker_Card.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg_INRM.Poker_Card)
                return object;
            var message = new $root.GameMsg_INRM.Poker_Card();
            switch (object.Suit) {
            case "Poker_Suit_UNSPECIFIED":
            case 0:
                message.Suit = 0;
                break;
            case "Poker_Suit_Spades":
            case 16:
                message.Suit = 16;
                break;
            case "Poker_Suit_Hearts":
            case 32:
                message.Suit = 32;
                break;
            case "Poker_Suit_Diamonds":
            case 48:
                message.Suit = 48;
                break;
            case "Poker_Suit_Clubs":
            case 64:
                message.Suit = 64;
                break;
            case "Poker_Suit_Jokers":
            case 80:
                message.Suit = 80;
                break;
            }
            switch (object.Rank) {
            case "Poker_Rank_UNSPECIFIED":
            case 0:
                message.Rank = 0;
                break;
            case "Poker_Rank_Ace":
            case 1:
                message.Rank = 1;
                break;
            case "Poker_Rank_Two":
            case 2:
                message.Rank = 2;
                break;
            case "Poker_Rank_Three":
            case 3:
                message.Rank = 3;
                break;
            case "Poker_Rank_Four":
            case 4:
                message.Rank = 4;
                break;
            case "Poker_Rank_Five":
            case 5:
                message.Rank = 5;
                break;
            case "Poker_Rank_Six":
            case 6:
                message.Rank = 6;
                break;
            case "Poker_Rank_Seven":
            case 7:
                message.Rank = 7;
                break;
            case "Poker_Rank_Eight":
            case 8:
                message.Rank = 8;
                break;
            case "Poker_Rank_Nine":
            case 9:
                message.Rank = 9;
                break;
            case "Poker_Rank_Ten":
            case 10:
                message.Rank = 10;
                break;
            case "Poker_Rank_Jack":
            case 11:
                message.Rank = 11;
                break;
            case "Poker_Rank_Queen":
            case 12:
                message.Rank = 12;
                break;
            case "Poker_Rank_King":
            case 13:
                message.Rank = 13;
                break;
            }
            return message;
        };

        /**
         * Creates a plain object from a Poker_Card message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_INRM.Poker_Card
         * @static
         * @param {GameMsg_INRM.Poker_Card} message Poker_Card
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Poker_Card.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.Suit = options.enums === String ? "Poker_Suit_UNSPECIFIED" : 0;
                object.Rank = options.enums === String ? "Poker_Rank_UNSPECIFIED" : 0;
            }
            if (message.Suit != null && message.hasOwnProperty("Suit"))
                object.Suit = options.enums === String ? $root.GameMsg_INRM.Poker_Suit[message.Suit] : message.Suit;
            if (message.Rank != null && message.hasOwnProperty("Rank"))
                object.Rank = options.enums === String ? $root.GameMsg_INRM.Poker_Rank[message.Rank] : message.Rank;
            return object;
        };

        /**
         * Converts this Poker_Card to JSON.
         * @function toJSON
         * @memberof GameMsg_INRM.Poker_Card
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Poker_Card.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Poker_Card;
    })();

    return GameMsg_INRM;
})();

module.exports = $root;
