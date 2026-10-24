/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

// var $protobuf = require("protobufjs/minimal");
var $protobuf=protobuf;

// Common aliases
var $Reader=$protobuf.Reader, $Writer=$protobuf.Writer, $util=$protobuf.util;

// Exported root namespace
var $root=$protobuf.roots["default"] || ($protobuf.roots["default"]={});

$root.GameMsg_FGSB=(function () {

    /**
     * Namespace GameMsg_FGSB.
     * @exports GameMsg_FGSB
     * @namespace
     */
    var GameMsg_FGSB={};

    GameMsg_FGSB.FGSB_Msg_GameInfo=(function () {

        /**
         * Properties of a FGSB_Msg_GameInfo.
         * @memberof GameMsg_FGSB
         * @interface IFGSB_Msg_GameInfo
         * @property {Array.<string>|null} [SideSheet] FGSB_Msg_GameInfo SideSheet
         * @property {Array.<string>|null} [SpecialSheet] FGSB_Msg_GameInfo SpecialSheet
         * @property {Array.<string>|null} [Manual] FGSB_Msg_GameInfo Manual
         * @property {Array.<GameMsg_FGSB.IFGSB_Msg_UserInfo>|null} [UserInfo] FGSB_Msg_GameInfo UserInfo
         * @property {Array.<number|Long>|null} [ChipValue] FGSB_Msg_GameInfo ChipValue
         * @property {GameMsg_FGSB.IFGSB_Msg_UserCards} BankerCards FGSB_Msg_GameInfo BankerCards
         * @property {number|Long} Bet_Limit FGSB_Msg_GameInfo Bet_Limit
         * @property {number|Long} Bet_SideLimit FGSB_Msg_GameInfo Bet_SideLimit
         * @property {number} GameState FGSB_Msg_GameInfo GameState
         * @property {number} TimeRemain FGSB_Msg_GameInfo TimeRemain
         * @property {number} Round FGSB_Msg_GameInfo Round
         * @property {GameMsg_FGSB.IFGSB_Msg_UserInfo} SelfInfo FGSB_Msg_GameInfo SelfInfo
         * @property {number} TableNo FGSB_Msg_GameInfo TableNo
         */

        /**
         * Constructs a new FGSB_Msg_GameInfo.
         * @memberof GameMsg_FGSB
         * @classdesc Represents a FGSB_Msg_GameInfo.
         * @implements IFGSB_Msg_GameInfo
         * @constructor
         * @param {GameMsg_FGSB.IFGSB_Msg_GameInfo=} [properties] Properties to set
         */
        function FGSB_Msg_GameInfo(properties) {
            this.SideSheet=[];
            this.SpecialSheet=[];
            this.Manual=[];
            this.UserInfo=[];
            this.ChipValue=[];
            if (properties)
                for (var keys=Object.keys(properties), i=0; i<keys.length; ++ i)
                    if (properties[keys[i]] != null)
                        this[keys[i]]=properties[keys[i]];
        }

        /**
         * FGSB_Msg_GameInfo SideSheet.
         * @member {Array.<string>} SideSheet
         * @memberof GameMsg_FGSB.FGSB_Msg_GameInfo
         * @instance
         */
        FGSB_Msg_GameInfo.prototype.SideSheet=$util.emptyArray;

        /**
         * FGSB_Msg_GameInfo SpecialSheet.
         * @member {Array.<string>} SpecialSheet
         * @memberof GameMsg_FGSB.FGSB_Msg_GameInfo
         * @instance
         */
        FGSB_Msg_GameInfo.prototype.SpecialSheet=$util.emptyArray;

        /**
         * FGSB_Msg_GameInfo Manual.
         * @member {Array.<string>} Manual
         * @memberof GameMsg_FGSB.FGSB_Msg_GameInfo
         * @instance
         */
        FGSB_Msg_GameInfo.prototype.Manual=$util.emptyArray;

        /**
         * FGSB_Msg_GameInfo UserInfo.
         * @member {Array.<GameMsg_FGSB.IFGSB_Msg_UserInfo>} UserInfo
         * @memberof GameMsg_FGSB.FGSB_Msg_GameInfo
         * @instance
         */
        FGSB_Msg_GameInfo.prototype.UserInfo=$util.emptyArray;

        /**
         * FGSB_Msg_GameInfo ChipValue.
         * @member {Array.<number|Long>} ChipValue
         * @memberof GameMsg_FGSB.FGSB_Msg_GameInfo
         * @instance
         */
        FGSB_Msg_GameInfo.prototype.ChipValue=$util.emptyArray;

        /**
         * FGSB_Msg_GameInfo BankerCards.
         * @member {GameMsg_FGSB.IFGSB_Msg_UserCards} BankerCards
         * @memberof GameMsg_FGSB.FGSB_Msg_GameInfo
         * @instance
         */
        FGSB_Msg_GameInfo.prototype.BankerCards=null;

        /**
         * FGSB_Msg_GameInfo Bet_Limit.
         * @member {number|Long} Bet_Limit
         * @memberof GameMsg_FGSB.FGSB_Msg_GameInfo
         * @instance
         */
        FGSB_Msg_GameInfo.prototype.Bet_Limit=$util.Long ? $util.Long.fromBits(0, 0, false) : 0;

        /**
         * FGSB_Msg_GameInfo Bet_SideLimit.
         * @member {number|Long} Bet_SideLimit
         * @memberof GameMsg_FGSB.FGSB_Msg_GameInfo
         * @instance
         */
        FGSB_Msg_GameInfo.prototype.Bet_SideLimit=$util.Long ? $util.Long.fromBits(0, 0, false) : 0;

        /**
         * FGSB_Msg_GameInfo GameState.
         * @member {number} GameState
         * @memberof GameMsg_FGSB.FGSB_Msg_GameInfo
         * @instance
         */
        FGSB_Msg_GameInfo.prototype.GameState=0;

        /**
         * FGSB_Msg_GameInfo TimeRemain.
         * @member {number} TimeRemain
         * @memberof GameMsg_FGSB.FGSB_Msg_GameInfo
         * @instance
         */
        FGSB_Msg_GameInfo.prototype.TimeRemain=0;

        /**
         * FGSB_Msg_GameInfo Round.
         * @member {number} Round
         * @memberof GameMsg_FGSB.FGSB_Msg_GameInfo
         * @instance
         */
        FGSB_Msg_GameInfo.prototype.Round=0;

        /**
         * FGSB_Msg_GameInfo SelfInfo.
         * @member {GameMsg_FGSB.IFGSB_Msg_UserInfo} SelfInfo
         * @memberof GameMsg_FGSB.FGSB_Msg_GameInfo
         * @instance
         */
        FGSB_Msg_GameInfo.prototype.SelfInfo=null;

        /**
         * FGSB_Msg_GameInfo TableNo.
         * @member {number} TableNo
         * @memberof GameMsg_FGSB.FGSB_Msg_GameInfo
         * @instance
         */
        FGSB_Msg_GameInfo.prototype.TableNo=0;

        /**
         * Creates a new FGSB_Msg_GameInfo instance using the specified properties.
         * @function create
         * @memberof GameMsg_FGSB.FGSB_Msg_GameInfo
         * @static
         * @param {GameMsg_FGSB.IFGSB_Msg_GameInfo=} [properties] Properties to set
         * @returns {GameMsg_FGSB.FGSB_Msg_GameInfo} FGSB_Msg_GameInfo instance
         */
        FGSB_Msg_GameInfo.create=function create(properties) {
            return new FGSB_Msg_GameInfo(properties);
        };

        /**
         * Encodes the specified FGSB_Msg_GameInfo message. Does not implicitly {@link GameMsg_FGSB.FGSB_Msg_GameInfo.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_FGSB.FGSB_Msg_GameInfo
         * @static
         * @param {GameMsg_FGSB.IFGSB_Msg_GameInfo} message FGSB_Msg_GameInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FGSB_Msg_GameInfo.encode=function encode(message, writer) {
            if (! writer)
                writer=$Writer.create();
            if (message.SideSheet != null && message.SideSheet.length)
                for (var i=0; i<message.SideSheet.length; ++ i)
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.SideSheet[i]);
            if (message.SpecialSheet != null && message.SpecialSheet.length)
                for (var i=0; i<message.SpecialSheet.length; ++ i)
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.SpecialSheet[i]);
            if (message.Manual != null && message.Manual.length)
                for (var i=0; i<message.Manual.length; ++ i)
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.Manual[i]);
            if (message.UserInfo != null && message.UserInfo.length)
                for (var i=0; i<message.UserInfo.length; ++ i)
                    $root.GameMsg_FGSB.FGSB_Msg_UserInfo.encode(message.UserInfo[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.ChipValue != null && message.ChipValue.length)
                for (var i=0; i<message.ChipValue.length; ++ i)
                    writer.uint32(/* id 5, wireType 0 =*/40).int64(message.ChipValue[i]);
            $root.GameMsg_FGSB.FGSB_Msg_UserCards.encode(message.BankerCards, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            writer.uint32(/* id 7, wireType 0 =*/56).int64(message.Bet_Limit);
            writer.uint32(/* id 8, wireType 0 =*/64).int64(message.Bet_SideLimit);
            writer.uint32(/* id 9, wireType 0 =*/72).int32(message.GameState);
            writer.uint32(/* id 10, wireType 0 =*/80).int32(message.TimeRemain);
            writer.uint32(/* id 11, wireType 0 =*/88).int32(message.Round);
            $root.GameMsg_FGSB.FGSB_Msg_UserInfo.encode(message.SelfInfo, writer.uint32(/* id 12, wireType 2 =*/98).fork()).ldelim();
            writer.uint32(/* id 13, wireType 0 =*/104).int32(message.TableNo);
            return writer;
        };

        /**
         * Encodes the specified FGSB_Msg_GameInfo message, length delimited. Does not implicitly {@link GameMsg_FGSB.FGSB_Msg_GameInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_FGSB.FGSB_Msg_GameInfo
         * @static
         * @param {GameMsg_FGSB.IFGSB_Msg_GameInfo} message FGSB_Msg_GameInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FGSB_Msg_GameInfo.encodeDelimited=function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FGSB_Msg_GameInfo message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_FGSB.FGSB_Msg_GameInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_FGSB.FGSB_Msg_GameInfo} FGSB_Msg_GameInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FGSB_Msg_GameInfo.decode=function decode(reader, length) {
            if (! (reader instanceof $Reader))
                reader=$Reader.create(reader);
            var end=length === undefined ? reader.len : reader.pos + length, message=new $root.GameMsg_FGSB.FGSB_Msg_GameInfo();
            while (reader.pos<end) {
                var tag=reader.uint32();
                switch (tag >>> 3) {
                    case 1:
                        if (! (message.SideSheet && message.SideSheet.length))
                            message.SideSheet=[];
                        message.SideSheet.push(reader.string());
                        break;
                    case 2:
                        if (! (message.SpecialSheet && message.SpecialSheet.length))
                            message.SpecialSheet=[];
                        message.SpecialSheet.push(reader.string());
                        break;
                    case 3:
                        if (! (message.Manual && message.Manual.length))
                            message.Manual=[];
                        message.Manual.push(reader.string());
                        break;
                    case 4:
                        if (! (message.UserInfo && message.UserInfo.length))
                            message.UserInfo=[];
                        message.UserInfo.push($root.GameMsg_FGSB.FGSB_Msg_UserInfo.decode(reader, reader.uint32()));
                        break;
                    case 5:
                        if (! (message.ChipValue && message.ChipValue.length))
                            message.ChipValue=[];
                        if ((tag & 7) === 2) {
                            var end2=reader.uint32() + reader.pos;
                            while (reader.pos<end2)
                                message.ChipValue.push(reader.int64());
                        } else
                            message.ChipValue.push(reader.int64());
                        break;
                    case 6:
                        message.BankerCards=$root.GameMsg_FGSB.FGSB_Msg_UserCards.decode(reader, reader.uint32());
                        break;
                    case 7:
                        message.Bet_Limit=reader.int64();
                        break;
                    case 8:
                        message.Bet_SideLimit=reader.int64();
                        break;
                    case 9:
                        message.GameState=reader.int32();
                        break;
                    case 10:
                        message.TimeRemain=reader.int32();
                        break;
                    case 11:
                        message.Round=reader.int32();
                        break;
                    case 12:
                        message.SelfInfo=$root.GameMsg_FGSB.FGSB_Msg_UserInfo.decode(reader, reader.uint32());
                        break;
                    case 13:
                        message.TableNo=reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                }
            }
            if (! message.hasOwnProperty("BankerCards"))
                throw $util.ProtocolError("missing required 'BankerCards'", { instance : message });
            if (! message.hasOwnProperty("Bet_Limit"))
                throw $util.ProtocolError("missing required 'Bet_Limit'", { instance : message });
            if (! message.hasOwnProperty("Bet_SideLimit"))
                throw $util.ProtocolError("missing required 'Bet_SideLimit'", { instance : message });
            if (! message.hasOwnProperty("GameState"))
                throw $util.ProtocolError("missing required 'GameState'", { instance : message });
            if (! message.hasOwnProperty("TimeRemain"))
                throw $util.ProtocolError("missing required 'TimeRemain'", { instance : message });
            if (! message.hasOwnProperty("Round"))
                throw $util.ProtocolError("missing required 'Round'", { instance : message });
            if (! message.hasOwnProperty("SelfInfo"))
                throw $util.ProtocolError("missing required 'SelfInfo'", { instance : message });
            if (! message.hasOwnProperty("TableNo"))
                throw $util.ProtocolError("missing required 'TableNo'", { instance : message });
            return message;
        };

        /**
         * Decodes a FGSB_Msg_GameInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_FGSB.FGSB_Msg_GameInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_FGSB.FGSB_Msg_GameInfo} FGSB_Msg_GameInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FGSB_Msg_GameInfo.decodeDelimited=function decodeDelimited(reader) {
            if (! (reader instanceof $Reader))
                reader=new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a FGSB_Msg_GameInfo message.
         * @function verify
         * @memberof GameMsg_FGSB.FGSB_Msg_GameInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FGSB_Msg_GameInfo.verify=function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.SideSheet != null && message.hasOwnProperty("SideSheet")) {
                if (! Array.isArray(message.SideSheet))
                    return "SideSheet: array expected";
                for (var i=0; i<message.SideSheet.length; ++ i)
                    if (! $util.isString(message.SideSheet[i]))
                        return "SideSheet: string[] expected";
            }
            if (message.SpecialSheet != null && message.hasOwnProperty("SpecialSheet")) {
                if (! Array.isArray(message.SpecialSheet))
                    return "SpecialSheet: array expected";
                for (var i=0; i<message.SpecialSheet.length; ++ i)
                    if (! $util.isString(message.SpecialSheet[i]))
                        return "SpecialSheet: string[] expected";
            }
            if (message.Manual != null && message.hasOwnProperty("Manual")) {
                if (! Array.isArray(message.Manual))
                    return "Manual: array expected";
                for (var i=0; i<message.Manual.length; ++ i)
                    if (! $util.isString(message.Manual[i]))
                        return "Manual: string[] expected";
            }
            if (message.UserInfo != null && message.hasOwnProperty("UserInfo")) {
                if (! Array.isArray(message.UserInfo))
                    return "UserInfo: array expected";
                for (var i=0; i<message.UserInfo.length; ++ i) {
                    var error=$root.GameMsg_FGSB.FGSB_Msg_UserInfo.verify(message.UserInfo[i]);
                    if (error)
                        return "UserInfo." + error;
                }
            }
            if (message.ChipValue != null && message.hasOwnProperty("ChipValue")) {
                if (! Array.isArray(message.ChipValue))
                    return "ChipValue: array expected";
                for (var i=0; i<message.ChipValue.length; ++ i)
                    if (! $util.isInteger(message.ChipValue[i]) && ! (message.ChipValue[i] && $util.isInteger(message.ChipValue[i].low) && $util.isInteger(message.ChipValue[i].high)))
                        return "ChipValue: integer|Long[] expected";
            }
            {
                var error=$root.GameMsg_FGSB.FGSB_Msg_UserCards.verify(message.BankerCards);
                if (error)
                    return "BankerCards." + error;
            }
            if (! $util.isInteger(message.Bet_Limit) && ! (message.Bet_Limit && $util.isInteger(message.Bet_Limit.low) && $util.isInteger(message.Bet_Limit.high)))
                return "Bet_Limit: integer|Long expected";
            if (! $util.isInteger(message.Bet_SideLimit) && ! (message.Bet_SideLimit && $util.isInteger(message.Bet_SideLimit.low) && $util.isInteger(message.Bet_SideLimit.high)))
                return "Bet_SideLimit: integer|Long expected";
            if (! $util.isInteger(message.GameState))
                return "GameState: integer expected";
            if (! $util.isInteger(message.TimeRemain))
                return "TimeRemain: integer expected";
            if (! $util.isInteger(message.Round))
                return "Round: integer expected";
            {
                var error=$root.GameMsg_FGSB.FGSB_Msg_UserInfo.verify(message.SelfInfo);
                if (error)
                    return "SelfInfo." + error;
            }
            if (! $util.isInteger(message.TableNo))
                return "TableNo: integer expected";
            return null;
        };

        /**
         * Creates a FGSB_Msg_GameInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_FGSB.FGSB_Msg_GameInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_FGSB.FGSB_Msg_GameInfo} FGSB_Msg_GameInfo
         */
        FGSB_Msg_GameInfo.fromObject=function fromObject(object) {
            if (object instanceof $root.GameMsg_FGSB.FGSB_Msg_GameInfo)
                return object;
            var message=new $root.GameMsg_FGSB.FGSB_Msg_GameInfo();
            if (object.SideSheet) {
                if (! Array.isArray(object.SideSheet))
                    throw TypeError(".GameMsg_FGSB.FGSB_Msg_GameInfo.SideSheet: array expected");
                message.SideSheet=[];
                for (var i=0; i<object.SideSheet.length; ++ i)
                    message.SideSheet[i]=String(object.SideSheet[i]);
            }
            if (object.SpecialSheet) {
                if (! Array.isArray(object.SpecialSheet))
                    throw TypeError(".GameMsg_FGSB.FGSB_Msg_GameInfo.SpecialSheet: array expected");
                message.SpecialSheet=[];
                for (var i=0; i<object.SpecialSheet.length; ++ i)
                    message.SpecialSheet[i]=String(object.SpecialSheet[i]);
            }
            if (object.Manual) {
                if (! Array.isArray(object.Manual))
                    throw TypeError(".GameMsg_FGSB.FGSB_Msg_GameInfo.Manual: array expected");
                message.Manual=[];
                for (var i=0; i<object.Manual.length; ++ i)
                    message.Manual[i]=String(object.Manual[i]);
            }
            if (object.UserInfo) {
                if (! Array.isArray(object.UserInfo))
                    throw TypeError(".GameMsg_FGSB.FGSB_Msg_GameInfo.UserInfo: array expected");
                message.UserInfo=[];
                for (var i=0; i<object.UserInfo.length; ++ i) {
                    if (typeof object.UserInfo[i] !== "object")
                        throw TypeError(".GameMsg_FGSB.FGSB_Msg_GameInfo.UserInfo: object expected");
                    message.UserInfo[i]=$root.GameMsg_FGSB.FGSB_Msg_UserInfo.fromObject(object.UserInfo[i]);
                }
            }
            if (object.ChipValue) {
                if (! Array.isArray(object.ChipValue))
                    throw TypeError(".GameMsg_FGSB.FGSB_Msg_GameInfo.ChipValue: array expected");
                message.ChipValue=[];
                for (var i=0; i<object.ChipValue.length; ++ i)
                    if ($util.Long)
                        (message.ChipValue[i]=$util.Long.fromValue(object.ChipValue[i])).unsigned=false;
                    else if (typeof object.ChipValue[i] === "string")
                        message.ChipValue[i]=parseInt(object.ChipValue[i], 10);
                    else if (typeof object.ChipValue[i] === "number")
                        message.ChipValue[i]=object.ChipValue[i];
                    else if (typeof object.ChipValue[i] === "object")
                        message.ChipValue[i]=new $util.LongBits(object.ChipValue[i].low >>> 0, object.ChipValue[i].high >>> 0).toNumber();
            }
            if (object.BankerCards != null) {
                if (typeof object.BankerCards !== "object")
                    throw TypeError(".GameMsg_FGSB.FGSB_Msg_GameInfo.BankerCards: object expected");
                message.BankerCards=$root.GameMsg_FGSB.FGSB_Msg_UserCards.fromObject(object.BankerCards);
            }
            if (object.Bet_Limit != null)
                if ($util.Long)
                    (message.Bet_Limit=$util.Long.fromValue(object.Bet_Limit)).unsigned=false;
                else if (typeof object.Bet_Limit === "string")
                    message.Bet_Limit=parseInt(object.Bet_Limit, 10);
                else if (typeof object.Bet_Limit === "number")
                    message.Bet_Limit=object.Bet_Limit;
                else if (typeof object.Bet_Limit === "object")
                    message.Bet_Limit=new $util.LongBits(object.Bet_Limit.low >>> 0, object.Bet_Limit.high >>> 0).toNumber();
            if (object.Bet_SideLimit != null)
                if ($util.Long)
                    (message.Bet_SideLimit=$util.Long.fromValue(object.Bet_SideLimit)).unsigned=false;
                else if (typeof object.Bet_SideLimit === "string")
                    message.Bet_SideLimit=parseInt(object.Bet_SideLimit, 10);
                else if (typeof object.Bet_SideLimit === "number")
                    message.Bet_SideLimit=object.Bet_SideLimit;
                else if (typeof object.Bet_SideLimit === "object")
                    message.Bet_SideLimit=new $util.LongBits(object.Bet_SideLimit.low >>> 0, object.Bet_SideLimit.high >>> 0).toNumber();
            if (object.GameState != null)
                message.GameState=object.GameState | 0;
            if (object.TimeRemain != null)
                message.TimeRemain=object.TimeRemain | 0;
            if (object.Round != null)
                message.Round=object.Round | 0;
            if (object.SelfInfo != null) {
                if (typeof object.SelfInfo !== "object")
                    throw TypeError(".GameMsg_FGSB.FGSB_Msg_GameInfo.SelfInfo: object expected");
                message.SelfInfo=$root.GameMsg_FGSB.FGSB_Msg_UserInfo.fromObject(object.SelfInfo);
            }
            if (object.TableNo != null)
                message.TableNo=object.TableNo | 0;
            return message;
        };

        /**
         * Creates a plain object from a FGSB_Msg_GameInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_FGSB.FGSB_Msg_GameInfo
         * @static
         * @param {GameMsg_FGSB.FGSB_Msg_GameInfo} message FGSB_Msg_GameInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FGSB_Msg_GameInfo.toObject=function toObject(message, options) {
            if (! options)
                options={};
            var object={};
            if (options.arrays || options.defaults) {
                object.SideSheet=[];
                object.SpecialSheet=[];
                object.Manual=[];
                object.UserInfo=[];
                object.ChipValue=[];
            }
            if (options.defaults) {
                object.BankerCards=null;
                if ($util.Long) {
                    var long=new $util.Long(0, 0, false);
                    object.Bet_Limit=options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.Bet_Limit=options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long=new $util.Long(0, 0, false);
                    object.Bet_SideLimit=options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.Bet_SideLimit=options.longs === String ? "0" : 0;
                object.GameState=0;
                object.TimeRemain=0;
                object.Round=0;
                object.SelfInfo=null;
                object.TableNo=0;
            }
            if (message.SideSheet && message.SideSheet.length) {
                object.SideSheet=[];
                for (var j=0; j<message.SideSheet.length; ++ j)
                    object.SideSheet[j]=message.SideSheet[j];
            }
            if (message.SpecialSheet && message.SpecialSheet.length) {
                object.SpecialSheet=[];
                for (var j=0; j<message.SpecialSheet.length; ++ j)
                    object.SpecialSheet[j]=message.SpecialSheet[j];
            }
            if (message.Manual && message.Manual.length) {
                object.Manual=[];
                for (var j=0; j<message.Manual.length; ++ j)
                    object.Manual[j]=message.Manual[j];
            }
            if (message.UserInfo && message.UserInfo.length) {
                object.UserInfo=[];
                for (var j=0; j<message.UserInfo.length; ++ j)
                    object.UserInfo[j]=$root.GameMsg_FGSB.FGSB_Msg_UserInfo.toObject(message.UserInfo[j], options);
            }
            if (message.ChipValue && message.ChipValue.length) {
                object.ChipValue=[];
                for (var j=0; j<message.ChipValue.length; ++ j)
                    if (typeof message.ChipValue[j] === "number")
                        object.ChipValue[j]=options.longs === String ? String(message.ChipValue[j]) : message.ChipValue[j];
                    else
                        object.ChipValue[j]=options.longs === String ? $util.Long.prototype.toString.call(message.ChipValue[j]) : options.longs === Number ? new $util.LongBits(message.ChipValue[j].low >>> 0, message.ChipValue[j].high >>> 0).toNumber() : message.ChipValue[j];
            }
            if (message.BankerCards != null && message.hasOwnProperty("BankerCards"))
                object.BankerCards=$root.GameMsg_FGSB.FGSB_Msg_UserCards.toObject(message.BankerCards, options);
            if (message.Bet_Limit != null && message.hasOwnProperty("Bet_Limit"))
                if (typeof message.Bet_Limit === "number")
                    object.Bet_Limit=options.longs === String ? String(message.Bet_Limit) : message.Bet_Limit;
                else
                    object.Bet_Limit=options.longs === String ? $util.Long.prototype.toString.call(message.Bet_Limit) : options.longs === Number ? new $util.LongBits(message.Bet_Limit.low >>> 0, message.Bet_Limit.high >>> 0).toNumber() : message.Bet_Limit;
            if (message.Bet_SideLimit != null && message.hasOwnProperty("Bet_SideLimit"))
                if (typeof message.Bet_SideLimit === "number")
                    object.Bet_SideLimit=options.longs === String ? String(message.Bet_SideLimit) : message.Bet_SideLimit;
                else
                    object.Bet_SideLimit=options.longs === String ? $util.Long.prototype.toString.call(message.Bet_SideLimit) : options.longs === Number ? new $util.LongBits(message.Bet_SideLimit.low >>> 0, message.Bet_SideLimit.high >>> 0).toNumber() : message.Bet_SideLimit;
            if (message.GameState != null && message.hasOwnProperty("GameState"))
                object.GameState=message.GameState;
            if (message.TimeRemain != null && message.hasOwnProperty("TimeRemain"))
                object.TimeRemain=message.TimeRemain;
            if (message.Round != null && message.hasOwnProperty("Round"))
                object.Round=message.Round;
            if (message.SelfInfo != null && message.hasOwnProperty("SelfInfo"))
                object.SelfInfo=$root.GameMsg_FGSB.FGSB_Msg_UserInfo.toObject(message.SelfInfo, options);
            if (message.TableNo != null && message.hasOwnProperty("TableNo"))
                object.TableNo=message.TableNo;
            return object;
        };

        /**
         * Converts this FGSB_Msg_GameInfo to JSON.
         * @function toJSON
         * @memberof GameMsg_FGSB.FGSB_Msg_GameInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FGSB_Msg_GameInfo.prototype.toJSON=function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return FGSB_Msg_GameInfo;
    })();

    GameMsg_FGSB.FGSB_Msg_AllUserInfo=(function () {

        /**
         * Properties of a FGSB_Msg_AllUserInfo.
         * @memberof GameMsg_FGSB
         * @interface IFGSB_Msg_AllUserInfo
         * @property {Array.<GameMsg_FGSB.IFGSB_Msg_UserInfo>|null} [UserInfo] FGSB_Msg_AllUserInfo UserInfo
         */

        /**
         * Constructs a new FGSB_Msg_AllUserInfo.
         * @memberof GameMsg_FGSB
         * @classdesc Represents a FGSB_Msg_AllUserInfo.
         * @implements IFGSB_Msg_AllUserInfo
         * @constructor
         * @param {GameMsg_FGSB.IFGSB_Msg_AllUserInfo=} [properties] Properties to set
         */
        function FGSB_Msg_AllUserInfo(properties) {
            this.UserInfo=[];
            if (properties)
                for (var keys=Object.keys(properties), i=0; i<keys.length; ++ i)
                    if (properties[keys[i]] != null)
                        this[keys[i]]=properties[keys[i]];
        }

        /**
         * FGSB_Msg_AllUserInfo UserInfo.
         * @member {Array.<GameMsg_FGSB.IFGSB_Msg_UserInfo>} UserInfo
         * @memberof GameMsg_FGSB.FGSB_Msg_AllUserInfo
         * @instance
         */
        FGSB_Msg_AllUserInfo.prototype.UserInfo=$util.emptyArray;

        /**
         * Creates a new FGSB_Msg_AllUserInfo instance using the specified properties.
         * @function create
         * @memberof GameMsg_FGSB.FGSB_Msg_AllUserInfo
         * @static
         * @param {GameMsg_FGSB.IFGSB_Msg_AllUserInfo=} [properties] Properties to set
         * @returns {GameMsg_FGSB.FGSB_Msg_AllUserInfo} FGSB_Msg_AllUserInfo instance
         */
        FGSB_Msg_AllUserInfo.create=function create(properties) {
            return new FGSB_Msg_AllUserInfo(properties);
        };

        /**
         * Encodes the specified FGSB_Msg_AllUserInfo message. Does not implicitly {@link GameMsg_FGSB.FGSB_Msg_AllUserInfo.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_FGSB.FGSB_Msg_AllUserInfo
         * @static
         * @param {GameMsg_FGSB.IFGSB_Msg_AllUserInfo} message FGSB_Msg_AllUserInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FGSB_Msg_AllUserInfo.encode=function encode(message, writer) {
            if (! writer)
                writer=$Writer.create();
            if (message.UserInfo != null && message.UserInfo.length)
                for (var i=0; i<message.UserInfo.length; ++ i)
                    $root.GameMsg_FGSB.FGSB_Msg_UserInfo.encode(message.UserInfo[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified FGSB_Msg_AllUserInfo message, length delimited. Does not implicitly {@link GameMsg_FGSB.FGSB_Msg_AllUserInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_FGSB.FGSB_Msg_AllUserInfo
         * @static
         * @param {GameMsg_FGSB.IFGSB_Msg_AllUserInfo} message FGSB_Msg_AllUserInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FGSB_Msg_AllUserInfo.encodeDelimited=function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FGSB_Msg_AllUserInfo message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_FGSB.FGSB_Msg_AllUserInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_FGSB.FGSB_Msg_AllUserInfo} FGSB_Msg_AllUserInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FGSB_Msg_AllUserInfo.decode=function decode(reader, length) {
            if (! (reader instanceof $Reader))
                reader=$Reader.create(reader);
            var end=length === undefined ? reader.len : reader.pos + length, message=new $root.GameMsg_FGSB.FGSB_Msg_AllUserInfo();
            while (reader.pos<end) {
                var tag=reader.uint32();
                switch (tag >>> 3) {
                    case 1:
                        if (! (message.UserInfo && message.UserInfo.length))
                            message.UserInfo=[];
                        message.UserInfo.push($root.GameMsg_FGSB.FGSB_Msg_UserInfo.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                }
            }
            return message;
        };

        /**
         * Decodes a FGSB_Msg_AllUserInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_FGSB.FGSB_Msg_AllUserInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_FGSB.FGSB_Msg_AllUserInfo} FGSB_Msg_AllUserInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FGSB_Msg_AllUserInfo.decodeDelimited=function decodeDelimited(reader) {
            if (! (reader instanceof $Reader))
                reader=new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a FGSB_Msg_AllUserInfo message.
         * @function verify
         * @memberof GameMsg_FGSB.FGSB_Msg_AllUserInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FGSB_Msg_AllUserInfo.verify=function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.UserInfo != null && message.hasOwnProperty("UserInfo")) {
                if (! Array.isArray(message.UserInfo))
                    return "UserInfo: array expected";
                for (var i=0; i<message.UserInfo.length; ++ i) {
                    var error=$root.GameMsg_FGSB.FGSB_Msg_UserInfo.verify(message.UserInfo[i]);
                    if (error)
                        return "UserInfo." + error;
                }
            }
            return null;
        };

        /**
         * Creates a FGSB_Msg_AllUserInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_FGSB.FGSB_Msg_AllUserInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_FGSB.FGSB_Msg_AllUserInfo} FGSB_Msg_AllUserInfo
         */
        FGSB_Msg_AllUserInfo.fromObject=function fromObject(object) {
            if (object instanceof $root.GameMsg_FGSB.FGSB_Msg_AllUserInfo)
                return object;
            var message=new $root.GameMsg_FGSB.FGSB_Msg_AllUserInfo();
            if (object.UserInfo) {
                if (! Array.isArray(object.UserInfo))
                    throw TypeError(".GameMsg_FGSB.FGSB_Msg_AllUserInfo.UserInfo: array expected");
                message.UserInfo=[];
                for (var i=0; i<object.UserInfo.length; ++ i) {
                    if (typeof object.UserInfo[i] !== "object")
                        throw TypeError(".GameMsg_FGSB.FGSB_Msg_AllUserInfo.UserInfo: object expected");
                    message.UserInfo[i]=$root.GameMsg_FGSB.FGSB_Msg_UserInfo.fromObject(object.UserInfo[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a FGSB_Msg_AllUserInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_FGSB.FGSB_Msg_AllUserInfo
         * @static
         * @param {GameMsg_FGSB.FGSB_Msg_AllUserInfo} message FGSB_Msg_AllUserInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FGSB_Msg_AllUserInfo.toObject=function toObject(message, options) {
            if (! options)
                options={};
            var object={};
            if (options.arrays || options.defaults)
                object.UserInfo=[];
            if (message.UserInfo && message.UserInfo.length) {
                object.UserInfo=[];
                for (var j=0; j<message.UserInfo.length; ++ j)
                    object.UserInfo[j]=$root.GameMsg_FGSB.FGSB_Msg_UserInfo.toObject(message.UserInfo[j], options);
            }
            return object;
        };

        /**
         * Converts this FGSB_Msg_AllUserInfo to JSON.
         * @function toJSON
         * @memberof GameMsg_FGSB.FGSB_Msg_AllUserInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FGSB_Msg_AllUserInfo.prototype.toJSON=function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return FGSB_Msg_AllUserInfo;
    })();

    GameMsg_FGSB.FGSB_Msg_UserInfo=(function () {

        /**
         * Properties of a FGSB_Msg_UserInfo.
         * @memberof GameMsg_FGSB
         * @interface IFGSB_Msg_UserInfo
         * @property {number} UserID FGSB_Msg_UserInfo UserID
         * @property {number} State FGSB_Msg_UserInfo State
         * @property {number} SeatNo FGSB_Msg_UserInfo SeatNo
         * @property {number|null} [FaceID] FGSB_Msg_UserInfo FaceID
         * @property {number|Long} Money FGSB_Msg_UserInfo Money
         * @property {number|Long} Bet_Base FGSB_Msg_UserInfo Bet_Base
         * @property {number|Long} Bet_Side FGSB_Msg_UserInfo Bet_Side
         * @property {number|Long} Bet_Double FGSB_Msg_UserInfo Bet_Double
         * @property {GameMsg_FGSB.IFGSB_Msg_UserCards} UserCards FGSB_Msg_UserInfo UserCards
         * @property {number} Winner FGSB_Msg_UserInfo Winner
         * @property {number|Long} Win_Side FGSB_Msg_UserInfo Win_Side
         * @property {number|Long} Win_Special FGSB_Msg_UserInfo Win_Special
         * @property {number|Long} Win_Base FGSB_Msg_UserInfo Win_Base
         * @property {number|Long} Win_Double FGSB_Msg_UserInfo Win_Double
         * @property {number|Long} TotalWinLose FGSB_Msg_UserInfo TotalWinLose
         */

        /**
         * Constructs a new FGSB_Msg_UserInfo.
         * @memberof GameMsg_FGSB
         * @classdesc Represents a FGSB_Msg_UserInfo.
         * @implements IFGSB_Msg_UserInfo
         * @constructor
         * @param {GameMsg_FGSB.IFGSB_Msg_UserInfo=} [properties] Properties to set
         */
        function FGSB_Msg_UserInfo(properties) {
            if (properties)
                for (var keys=Object.keys(properties), i=0; i<keys.length; ++ i)
                    if (properties[keys[i]] != null)
                        this[keys[i]]=properties[keys[i]];
        }

        /**
         * FGSB_Msg_UserInfo UserID.
         * @member {number} UserID
         * @memberof GameMsg_FGSB.FGSB_Msg_UserInfo
         * @instance
         */
        FGSB_Msg_UserInfo.prototype.UserID=0;

        /**
         * FGSB_Msg_UserInfo State.
         * @member {number} State
         * @memberof GameMsg_FGSB.FGSB_Msg_UserInfo
         * @instance
         */
        FGSB_Msg_UserInfo.prototype.State=0;

        /**
         * FGSB_Msg_UserInfo SeatNo.
         * @member {number} SeatNo
         * @memberof GameMsg_FGSB.FGSB_Msg_UserInfo
         * @instance
         */
        FGSB_Msg_UserInfo.prototype.SeatNo=0;

        /**
         * FGSB_Msg_UserInfo FaceID.
         * @member {number} FaceID
         * @memberof GameMsg_FGSB.FGSB_Msg_UserInfo
         * @instance
         */
        FGSB_Msg_UserInfo.prototype.FaceID=0;

        /**
         * FGSB_Msg_UserInfo Money.
         * @member {number|Long} Money
         * @memberof GameMsg_FGSB.FGSB_Msg_UserInfo
         * @instance
         */
        FGSB_Msg_UserInfo.prototype.Money=$util.Long ? $util.Long.fromBits(0, 0, false) : 0;

        /**
         * FGSB_Msg_UserInfo Bet_Base.
         * @member {number|Long} Bet_Base
         * @memberof GameMsg_FGSB.FGSB_Msg_UserInfo
         * @instance
         */
        FGSB_Msg_UserInfo.prototype.Bet_Base=$util.Long ? $util.Long.fromBits(0, 0, false) : 0;

        /**
         * FGSB_Msg_UserInfo Bet_Side.
         * @member {number|Long} Bet_Side
         * @memberof GameMsg_FGSB.FGSB_Msg_UserInfo
         * @instance
         */
        FGSB_Msg_UserInfo.prototype.Bet_Side=$util.Long ? $util.Long.fromBits(0, 0, false) : 0;

        /**
         * FGSB_Msg_UserInfo Bet_Double.
         * @member {number|Long} Bet_Double
         * @memberof GameMsg_FGSB.FGSB_Msg_UserInfo
         * @instance
         */
        FGSB_Msg_UserInfo.prototype.Bet_Double=$util.Long ? $util.Long.fromBits(0, 0, false) : 0;

        /**
         * FGSB_Msg_UserInfo UserCards.
         * @member {GameMsg_FGSB.IFGSB_Msg_UserCards} UserCards
         * @memberof GameMsg_FGSB.FGSB_Msg_UserInfo
         * @instance
         */
        FGSB_Msg_UserInfo.prototype.UserCards=null;

        /**
         * FGSB_Msg_UserInfo Winner.
         * @member {number} Winner
         * @memberof GameMsg_FGSB.FGSB_Msg_UserInfo
         * @instance
         */
        FGSB_Msg_UserInfo.prototype.Winner=0;

        /**
         * FGSB_Msg_UserInfo Win_Side.
         * @member {number|Long} Win_Side
         * @memberof GameMsg_FGSB.FGSB_Msg_UserInfo
         * @instance
         */
        FGSB_Msg_UserInfo.prototype.Win_Side=$util.Long ? $util.Long.fromBits(0, 0, false) : 0;

        /**
         * FGSB_Msg_UserInfo Win_Special.
         * @member {number|Long} Win_Special
         * @memberof GameMsg_FGSB.FGSB_Msg_UserInfo
         * @instance
         */
        FGSB_Msg_UserInfo.prototype.Win_Special=$util.Long ? $util.Long.fromBits(0, 0, false) : 0;

        /**
         * FGSB_Msg_UserInfo Win_Base.
         * @member {number|Long} Win_Base
         * @memberof GameMsg_FGSB.FGSB_Msg_UserInfo
         * @instance
         */
        FGSB_Msg_UserInfo.prototype.Win_Base=$util.Long ? $util.Long.fromBits(0, 0, false) : 0;

        /**
         * FGSB_Msg_UserInfo Win_Double.
         * @member {number|Long} Win_Double
         * @memberof GameMsg_FGSB.FGSB_Msg_UserInfo
         * @instance
         */
        FGSB_Msg_UserInfo.prototype.Win_Double=$util.Long ? $util.Long.fromBits(0, 0, false) : 0;

        /**
         * FGSB_Msg_UserInfo TotalWinLose.
         * @member {number|Long} TotalWinLose
         * @memberof GameMsg_FGSB.FGSB_Msg_UserInfo
         * @instance
         */
        FGSB_Msg_UserInfo.prototype.TotalWinLose=$util.Long ? $util.Long.fromBits(0, 0, false) : 0;

        /**
         * Creates a new FGSB_Msg_UserInfo instance using the specified properties.
         * @function create
         * @memberof GameMsg_FGSB.FGSB_Msg_UserInfo
         * @static
         * @param {GameMsg_FGSB.IFGSB_Msg_UserInfo=} [properties] Properties to set
         * @returns {GameMsg_FGSB.FGSB_Msg_UserInfo} FGSB_Msg_UserInfo instance
         */
        FGSB_Msg_UserInfo.create=function create(properties) {
            return new FGSB_Msg_UserInfo(properties);
        };

        /**
         * Encodes the specified FGSB_Msg_UserInfo message. Does not implicitly {@link GameMsg_FGSB.FGSB_Msg_UserInfo.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_FGSB.FGSB_Msg_UserInfo
         * @static
         * @param {GameMsg_FGSB.IFGSB_Msg_UserInfo} message FGSB_Msg_UserInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FGSB_Msg_UserInfo.encode=function encode(message, writer) {
            if (! writer)
                writer=$Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.UserID);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.State);
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.SeatNo);
            if (message.FaceID != null && Object.hasOwnProperty.call(message, "FaceID"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.FaceID);
            writer.uint32(/* id 5, wireType 0 =*/40).int64(message.Money);
            writer.uint32(/* id 6, wireType 0 =*/48).int64(message.Bet_Base);
            writer.uint32(/* id 7, wireType 0 =*/56).int64(message.Bet_Side);
            writer.uint32(/* id 8, wireType 0 =*/64).int64(message.Bet_Double);
            $root.GameMsg_FGSB.FGSB_Msg_UserCards.encode(message.UserCards, writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
            writer.uint32(/* id 10, wireType 0 =*/80).int32(message.Winner);
            writer.uint32(/* id 11, wireType 0 =*/88).int64(message.Win_Side);
            writer.uint32(/* id 12, wireType 0 =*/96).int64(message.Win_Special);
            writer.uint32(/* id 13, wireType 0 =*/104).int64(message.Win_Base);
            writer.uint32(/* id 14, wireType 0 =*/112).int64(message.Win_Double);
            writer.uint32(/* id 15, wireType 0 =*/120).int64(message.TotalWinLose);
            return writer;
        };

        /**
         * Encodes the specified FGSB_Msg_UserInfo message, length delimited. Does not implicitly {@link GameMsg_FGSB.FGSB_Msg_UserInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_FGSB.FGSB_Msg_UserInfo
         * @static
         * @param {GameMsg_FGSB.IFGSB_Msg_UserInfo} message FGSB_Msg_UserInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FGSB_Msg_UserInfo.encodeDelimited=function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FGSB_Msg_UserInfo message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_FGSB.FGSB_Msg_UserInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_FGSB.FGSB_Msg_UserInfo} FGSB_Msg_UserInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FGSB_Msg_UserInfo.decode=function decode(reader, length) {
            if (! (reader instanceof $Reader))
                reader=$Reader.create(reader);
            var end=length === undefined ? reader.len : reader.pos + length, message=new $root.GameMsg_FGSB.FGSB_Msg_UserInfo();
            while (reader.pos<end) {
                var tag=reader.uint32();
                switch (tag >>> 3) {
                    case 1:
                        message.UserID=reader.int32();
                        break;
                    case 2:
                        message.State=reader.int32();
                        break;
                    case 3:
                        message.SeatNo=reader.int32();
                        break;
                    case 4:
                        message.FaceID=reader.int32();
                        break;
                    case 5:
                        message.Money=reader.int64();
                        break;
                    case 6:
                        message.Bet_Base=reader.int64();
                        break;
                    case 7:
                        message.Bet_Side=reader.int64();
                        break;
                    case 8:
                        message.Bet_Double=reader.int64();
                        break;
                    case 9:
                        message.UserCards=$root.GameMsg_FGSB.FGSB_Msg_UserCards.decode(reader, reader.uint32());
                        break;
                    case 10:
                        message.Winner=reader.int32();
                        break;
                    case 11:
                        message.Win_Side=reader.int64();
                        break;
                    case 12:
                        message.Win_Special=reader.int64();
                        break;
                    case 13:
                        message.Win_Base=reader.int64();
                        break;
                    case 14:
                        message.Win_Double=reader.int64();
                        break;
                    case 15:
                        message.TotalWinLose=reader.int64();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                }
            }
            if (! message.hasOwnProperty("UserID"))
                throw $util.ProtocolError("missing required 'UserID'", { instance : message });
            if (! message.hasOwnProperty("State"))
                throw $util.ProtocolError("missing required 'State'", { instance : message });
            if (! message.hasOwnProperty("SeatNo"))
                throw $util.ProtocolError("missing required 'SeatNo'", { instance : message });
            if (! message.hasOwnProperty("Money"))
                throw $util.ProtocolError("missing required 'Money'", { instance : message });
            if (! message.hasOwnProperty("Bet_Base"))
                throw $util.ProtocolError("missing required 'Bet_Base'", { instance : message });
            if (! message.hasOwnProperty("Bet_Side"))
                throw $util.ProtocolError("missing required 'Bet_Side'", { instance : message });
            if (! message.hasOwnProperty("Bet_Double"))
                throw $util.ProtocolError("missing required 'Bet_Double'", { instance : message });
            if (! message.hasOwnProperty("UserCards"))
                throw $util.ProtocolError("missing required 'UserCards'", { instance : message });
            if (! message.hasOwnProperty("Winner"))
                throw $util.ProtocolError("missing required 'Winner'", { instance : message });
            if (! message.hasOwnProperty("Win_Side"))
                throw $util.ProtocolError("missing required 'Win_Side'", { instance : message });
            if (! message.hasOwnProperty("Win_Special"))
                throw $util.ProtocolError("missing required 'Win_Special'", { instance : message });
            if (! message.hasOwnProperty("Win_Base"))
                throw $util.ProtocolError("missing required 'Win_Base'", { instance : message });
            if (! message.hasOwnProperty("Win_Double"))
                throw $util.ProtocolError("missing required 'Win_Double'", { instance : message });
            if (! message.hasOwnProperty("TotalWinLose"))
                throw $util.ProtocolError("missing required 'TotalWinLose'", { instance : message });
            return message;
        };

        /**
         * Decodes a FGSB_Msg_UserInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_FGSB.FGSB_Msg_UserInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_FGSB.FGSB_Msg_UserInfo} FGSB_Msg_UserInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FGSB_Msg_UserInfo.decodeDelimited=function decodeDelimited(reader) {
            if (! (reader instanceof $Reader))
                reader=new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a FGSB_Msg_UserInfo message.
         * @function verify
         * @memberof GameMsg_FGSB.FGSB_Msg_UserInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FGSB_Msg_UserInfo.verify=function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (! $util.isInteger(message.UserID))
                return "UserID: integer expected";
            if (! $util.isInteger(message.State))
                return "State: integer expected";
            if (! $util.isInteger(message.SeatNo))
                return "SeatNo: integer expected";
            if (message.FaceID != null && message.hasOwnProperty("FaceID"))
                if (! $util.isInteger(message.FaceID))
                    return "FaceID: integer expected";
            if (! $util.isInteger(message.Money) && ! (message.Money && $util.isInteger(message.Money.low) && $util.isInteger(message.Money.high)))
                return "Money: integer|Long expected";
            if (! $util.isInteger(message.Bet_Base) && ! (message.Bet_Base && $util.isInteger(message.Bet_Base.low) && $util.isInteger(message.Bet_Base.high)))
                return "Bet_Base: integer|Long expected";
            if (! $util.isInteger(message.Bet_Side) && ! (message.Bet_Side && $util.isInteger(message.Bet_Side.low) && $util.isInteger(message.Bet_Side.high)))
                return "Bet_Side: integer|Long expected";
            if (! $util.isInteger(message.Bet_Double) && ! (message.Bet_Double && $util.isInteger(message.Bet_Double.low) && $util.isInteger(message.Bet_Double.high)))
                return "Bet_Double: integer|Long expected";
            {
                var error=$root.GameMsg_FGSB.FGSB_Msg_UserCards.verify(message.UserCards);
                if (error)
                    return "UserCards." + error;
            }
            if (! $util.isInteger(message.Winner))
                return "Winner: integer expected";
            if (! $util.isInteger(message.Win_Side) && ! (message.Win_Side && $util.isInteger(message.Win_Side.low) && $util.isInteger(message.Win_Side.high)))
                return "Win_Side: integer|Long expected";
            if (! $util.isInteger(message.Win_Special) && ! (message.Win_Special && $util.isInteger(message.Win_Special.low) && $util.isInteger(message.Win_Special.high)))
                return "Win_Special: integer|Long expected";
            if (! $util.isInteger(message.Win_Base) && ! (message.Win_Base && $util.isInteger(message.Win_Base.low) && $util.isInteger(message.Win_Base.high)))
                return "Win_Base: integer|Long expected";
            if (! $util.isInteger(message.Win_Double) && ! (message.Win_Double && $util.isInteger(message.Win_Double.low) && $util.isInteger(message.Win_Double.high)))
                return "Win_Double: integer|Long expected";
            if (! $util.isInteger(message.TotalWinLose) && ! (message.TotalWinLose && $util.isInteger(message.TotalWinLose.low) && $util.isInteger(message.TotalWinLose.high)))
                return "TotalWinLose: integer|Long expected";
            return null;
        };

        /**
         * Creates a FGSB_Msg_UserInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_FGSB.FGSB_Msg_UserInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_FGSB.FGSB_Msg_UserInfo} FGSB_Msg_UserInfo
         */
        FGSB_Msg_UserInfo.fromObject=function fromObject(object) {
            if (object instanceof $root.GameMsg_FGSB.FGSB_Msg_UserInfo)
                return object;
            var message=new $root.GameMsg_FGSB.FGSB_Msg_UserInfo();
            if (object.UserID != null)
                message.UserID=object.UserID | 0;
            if (object.State != null)
                message.State=object.State | 0;
            if (object.SeatNo != null)
                message.SeatNo=object.SeatNo | 0;
            if (object.FaceID != null)
                message.FaceID=object.FaceID | 0;
            if (object.Money != null)
                if ($util.Long)
                    (message.Money=$util.Long.fromValue(object.Money)).unsigned=false;
                else if (typeof object.Money === "string")
                    message.Money=parseInt(object.Money, 10);
                else if (typeof object.Money === "number")
                    message.Money=object.Money;
                else if (typeof object.Money === "object")
                    message.Money=new $util.LongBits(object.Money.low >>> 0, object.Money.high >>> 0).toNumber();
            if (object.Bet_Base != null)
                if ($util.Long)
                    (message.Bet_Base=$util.Long.fromValue(object.Bet_Base)).unsigned=false;
                else if (typeof object.Bet_Base === "string")
                    message.Bet_Base=parseInt(object.Bet_Base, 10);
                else if (typeof object.Bet_Base === "number")
                    message.Bet_Base=object.Bet_Base;
                else if (typeof object.Bet_Base === "object")
                    message.Bet_Base=new $util.LongBits(object.Bet_Base.low >>> 0, object.Bet_Base.high >>> 0).toNumber();
            if (object.Bet_Side != null)
                if ($util.Long)
                    (message.Bet_Side=$util.Long.fromValue(object.Bet_Side)).unsigned=false;
                else if (typeof object.Bet_Side === "string")
                    message.Bet_Side=parseInt(object.Bet_Side, 10);
                else if (typeof object.Bet_Side === "number")
                    message.Bet_Side=object.Bet_Side;
                else if (typeof object.Bet_Side === "object")
                    message.Bet_Side=new $util.LongBits(object.Bet_Side.low >>> 0, object.Bet_Side.high >>> 0).toNumber();
            if (object.Bet_Double != null)
                if ($util.Long)
                    (message.Bet_Double=$util.Long.fromValue(object.Bet_Double)).unsigned=false;
                else if (typeof object.Bet_Double === "string")
                    message.Bet_Double=parseInt(object.Bet_Double, 10);
                else if (typeof object.Bet_Double === "number")
                    message.Bet_Double=object.Bet_Double;
                else if (typeof object.Bet_Double === "object")
                    message.Bet_Double=new $util.LongBits(object.Bet_Double.low >>> 0, object.Bet_Double.high >>> 0).toNumber();
            if (object.UserCards != null) {
                if (typeof object.UserCards !== "object")
                    throw TypeError(".GameMsg_FGSB.FGSB_Msg_UserInfo.UserCards: object expected");
                message.UserCards=$root.GameMsg_FGSB.FGSB_Msg_UserCards.fromObject(object.UserCards);
            }
            if (object.Winner != null)
                message.Winner=object.Winner | 0;
            if (object.Win_Side != null)
                if ($util.Long)
                    (message.Win_Side=$util.Long.fromValue(object.Win_Side)).unsigned=false;
                else if (typeof object.Win_Side === "string")
                    message.Win_Side=parseInt(object.Win_Side, 10);
                else if (typeof object.Win_Side === "number")
                    message.Win_Side=object.Win_Side;
                else if (typeof object.Win_Side === "object")
                    message.Win_Side=new $util.LongBits(object.Win_Side.low >>> 0, object.Win_Side.high >>> 0).toNumber();
            if (object.Win_Special != null)
                if ($util.Long)
                    (message.Win_Special=$util.Long.fromValue(object.Win_Special)).unsigned=false;
                else if (typeof object.Win_Special === "string")
                    message.Win_Special=parseInt(object.Win_Special, 10);
                else if (typeof object.Win_Special === "number")
                    message.Win_Special=object.Win_Special;
                else if (typeof object.Win_Special === "object")
                    message.Win_Special=new $util.LongBits(object.Win_Special.low >>> 0, object.Win_Special.high >>> 0).toNumber();
            if (object.Win_Base != null)
                if ($util.Long)
                    (message.Win_Base=$util.Long.fromValue(object.Win_Base)).unsigned=false;
                else if (typeof object.Win_Base === "string")
                    message.Win_Base=parseInt(object.Win_Base, 10);
                else if (typeof object.Win_Base === "number")
                    message.Win_Base=object.Win_Base;
                else if (typeof object.Win_Base === "object")
                    message.Win_Base=new $util.LongBits(object.Win_Base.low >>> 0, object.Win_Base.high >>> 0).toNumber();
            if (object.Win_Double != null)
                if ($util.Long)
                    (message.Win_Double=$util.Long.fromValue(object.Win_Double)).unsigned=false;
                else if (typeof object.Win_Double === "string")
                    message.Win_Double=parseInt(object.Win_Double, 10);
                else if (typeof object.Win_Double === "number")
                    message.Win_Double=object.Win_Double;
                else if (typeof object.Win_Double === "object")
                    message.Win_Double=new $util.LongBits(object.Win_Double.low >>> 0, object.Win_Double.high >>> 0).toNumber();
            if (object.TotalWinLose != null)
                if ($util.Long)
                    (message.TotalWinLose=$util.Long.fromValue(object.TotalWinLose)).unsigned=false;
                else if (typeof object.TotalWinLose === "string")
                    message.TotalWinLose=parseInt(object.TotalWinLose, 10);
                else if (typeof object.TotalWinLose === "number")
                    message.TotalWinLose=object.TotalWinLose;
                else if (typeof object.TotalWinLose === "object")
                    message.TotalWinLose=new $util.LongBits(object.TotalWinLose.low >>> 0, object.TotalWinLose.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a FGSB_Msg_UserInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_FGSB.FGSB_Msg_UserInfo
         * @static
         * @param {GameMsg_FGSB.FGSB_Msg_UserInfo} message FGSB_Msg_UserInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FGSB_Msg_UserInfo.toObject=function toObject(message, options) {
            if (! options)
                options={};
            var object={};
            if (options.defaults) {
                object.UserID=0;
                object.State=0;
                object.SeatNo=0;
                object.FaceID=0;
                if ($util.Long) {
                    var long=new $util.Long(0, 0, false);
                    object.Money=options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.Money=options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long=new $util.Long(0, 0, false);
                    object.Bet_Base=options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.Bet_Base=options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long=new $util.Long(0, 0, false);
                    object.Bet_Side=options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.Bet_Side=options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long=new $util.Long(0, 0, false);
                    object.Bet_Double=options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.Bet_Double=options.longs === String ? "0" : 0;
                object.UserCards=null;
                object.Winner=0;
                if ($util.Long) {
                    var long=new $util.Long(0, 0, false);
                    object.Win_Side=options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.Win_Side=options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long=new $util.Long(0, 0, false);
                    object.Win_Special=options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.Win_Special=options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long=new $util.Long(0, 0, false);
                    object.Win_Base=options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.Win_Base=options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long=new $util.Long(0, 0, false);
                    object.Win_Double=options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.Win_Double=options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long=new $util.Long(0, 0, false);
                    object.TotalWinLose=options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.TotalWinLose=options.longs === String ? "0" : 0;
            }
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                object.UserID=message.UserID;
            if (message.State != null && message.hasOwnProperty("State"))
                object.State=message.State;
            if (message.SeatNo != null && message.hasOwnProperty("SeatNo"))
                object.SeatNo=message.SeatNo;
            if (message.FaceID != null && message.hasOwnProperty("FaceID"))
                object.FaceID=message.FaceID;
            if (message.Money != null && message.hasOwnProperty("Money"))
                if (typeof message.Money === "number")
                    object.Money=options.longs === String ? String(message.Money) : message.Money;
                else
                    object.Money=options.longs === String ? $util.Long.prototype.toString.call(message.Money) : options.longs === Number ? new $util.LongBits(message.Money.low >>> 0, message.Money.high >>> 0).toNumber() : message.Money;
            if (message.Bet_Base != null && message.hasOwnProperty("Bet_Base"))
                if (typeof message.Bet_Base === "number")
                    object.Bet_Base=options.longs === String ? String(message.Bet_Base) : message.Bet_Base;
                else
                    object.Bet_Base=options.longs === String ? $util.Long.prototype.toString.call(message.Bet_Base) : options.longs === Number ? new $util.LongBits(message.Bet_Base.low >>> 0, message.Bet_Base.high >>> 0).toNumber() : message.Bet_Base;
            if (message.Bet_Side != null && message.hasOwnProperty("Bet_Side"))
                if (typeof message.Bet_Side === "number")
                    object.Bet_Side=options.longs === String ? String(message.Bet_Side) : message.Bet_Side;
                else
                    object.Bet_Side=options.longs === String ? $util.Long.prototype.toString.call(message.Bet_Side) : options.longs === Number ? new $util.LongBits(message.Bet_Side.low >>> 0, message.Bet_Side.high >>> 0).toNumber() : message.Bet_Side;
            if (message.Bet_Double != null && message.hasOwnProperty("Bet_Double"))
                if (typeof message.Bet_Double === "number")
                    object.Bet_Double=options.longs === String ? String(message.Bet_Double) : message.Bet_Double;
                else
                    object.Bet_Double=options.longs === String ? $util.Long.prototype.toString.call(message.Bet_Double) : options.longs === Number ? new $util.LongBits(message.Bet_Double.low >>> 0, message.Bet_Double.high >>> 0).toNumber() : message.Bet_Double;
            if (message.UserCards != null && message.hasOwnProperty("UserCards"))
                object.UserCards=$root.GameMsg_FGSB.FGSB_Msg_UserCards.toObject(message.UserCards, options);
            if (message.Winner != null && message.hasOwnProperty("Winner"))
                object.Winner=message.Winner;
            if (message.Win_Side != null && message.hasOwnProperty("Win_Side"))
                if (typeof message.Win_Side === "number")
                    object.Win_Side=options.longs === String ? String(message.Win_Side) : message.Win_Side;
                else
                    object.Win_Side=options.longs === String ? $util.Long.prototype.toString.call(message.Win_Side) : options.longs === Number ? new $util.LongBits(message.Win_Side.low >>> 0, message.Win_Side.high >>> 0).toNumber() : message.Win_Side;
            if (message.Win_Special != null && message.hasOwnProperty("Win_Special"))
                if (typeof message.Win_Special === "number")
                    object.Win_Special=options.longs === String ? String(message.Win_Special) : message.Win_Special;
                else
                    object.Win_Special=options.longs === String ? $util.Long.prototype.toString.call(message.Win_Special) : options.longs === Number ? new $util.LongBits(message.Win_Special.low >>> 0, message.Win_Special.high >>> 0).toNumber() : message.Win_Special;
            if (message.Win_Base != null && message.hasOwnProperty("Win_Base"))
                if (typeof message.Win_Base === "number")
                    object.Win_Base=options.longs === String ? String(message.Win_Base) : message.Win_Base;
                else
                    object.Win_Base=options.longs === String ? $util.Long.prototype.toString.call(message.Win_Base) : options.longs === Number ? new $util.LongBits(message.Win_Base.low >>> 0, message.Win_Base.high >>> 0).toNumber() : message.Win_Base;
            if (message.Win_Double != null && message.hasOwnProperty("Win_Double"))
                if (typeof message.Win_Double === "number")
                    object.Win_Double=options.longs === String ? String(message.Win_Double) : message.Win_Double;
                else
                    object.Win_Double=options.longs === String ? $util.Long.prototype.toString.call(message.Win_Double) : options.longs === Number ? new $util.LongBits(message.Win_Double.low >>> 0, message.Win_Double.high >>> 0).toNumber() : message.Win_Double;
            if (message.TotalWinLose != null && message.hasOwnProperty("TotalWinLose"))
                if (typeof message.TotalWinLose === "number")
                    object.TotalWinLose=options.longs === String ? String(message.TotalWinLose) : message.TotalWinLose;
                else
                    object.TotalWinLose=options.longs === String ? $util.Long.prototype.toString.call(message.TotalWinLose) : options.longs === Number ? new $util.LongBits(message.TotalWinLose.low >>> 0, message.TotalWinLose.high >>> 0).toNumber() : message.TotalWinLose;
            return object;
        };

        /**
         * Converts this FGSB_Msg_UserInfo to JSON.
         * @function toJSON
         * @memberof GameMsg_FGSB.FGSB_Msg_UserInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FGSB_Msg_UserInfo.prototype.toJSON=function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return FGSB_Msg_UserInfo;
    })();

    GameMsg_FGSB.FGSB_Msg_PokerCard=(function () {

        /**
         * Properties of a FGSB_Msg_PokerCard.
         * @memberof GameMsg_FGSB
         * @interface IFGSB_Msg_PokerCard
         * @property {number} Color FGSB_Msg_PokerCard Color
         * @property {number} CardNumber FGSB_Msg_PokerCard CardNumber
         */

        /**
         * Constructs a new FGSB_Msg_PokerCard.
         * @memberof GameMsg_FGSB
         * @classdesc Represents a FGSB_Msg_PokerCard.
         * @implements IFGSB_Msg_PokerCard
         * @constructor
         * @param {GameMsg_FGSB.IFGSB_Msg_PokerCard=} [properties] Properties to set
         */
        function FGSB_Msg_PokerCard(properties) {
            if (properties)
                for (var keys=Object.keys(properties), i=0; i<keys.length; ++ i)
                    if (properties[keys[i]] != null)
                        this[keys[i]]=properties[keys[i]];
        }

        /**
         * FGSB_Msg_PokerCard Color.
         * @member {number} Color
         * @memberof GameMsg_FGSB.FGSB_Msg_PokerCard
         * @instance
         */
        FGSB_Msg_PokerCard.prototype.Color=0;

        /**
         * FGSB_Msg_PokerCard CardNumber.
         * @member {number} CardNumber
         * @memberof GameMsg_FGSB.FGSB_Msg_PokerCard
         * @instance
         */
        FGSB_Msg_PokerCard.prototype.CardNumber=0;

        /**
         * Creates a new FGSB_Msg_PokerCard instance using the specified properties.
         * @function create
         * @memberof GameMsg_FGSB.FGSB_Msg_PokerCard
         * @static
         * @param {GameMsg_FGSB.IFGSB_Msg_PokerCard=} [properties] Properties to set
         * @returns {GameMsg_FGSB.FGSB_Msg_PokerCard} FGSB_Msg_PokerCard instance
         */
        FGSB_Msg_PokerCard.create=function create(properties) {
            return new FGSB_Msg_PokerCard(properties);
        };

        /**
         * Encodes the specified FGSB_Msg_PokerCard message. Does not implicitly {@link GameMsg_FGSB.FGSB_Msg_PokerCard.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_FGSB.FGSB_Msg_PokerCard
         * @static
         * @param {GameMsg_FGSB.IFGSB_Msg_PokerCard} message FGSB_Msg_PokerCard message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FGSB_Msg_PokerCard.encode=function encode(message, writer) {
            if (! writer)
                writer=$Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.Color);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.CardNumber);
            return writer;
        };

        /**
         * Encodes the specified FGSB_Msg_PokerCard message, length delimited. Does not implicitly {@link GameMsg_FGSB.FGSB_Msg_PokerCard.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_FGSB.FGSB_Msg_PokerCard
         * @static
         * @param {GameMsg_FGSB.IFGSB_Msg_PokerCard} message FGSB_Msg_PokerCard message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FGSB_Msg_PokerCard.encodeDelimited=function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FGSB_Msg_PokerCard message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_FGSB.FGSB_Msg_PokerCard
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_FGSB.FGSB_Msg_PokerCard} FGSB_Msg_PokerCard
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FGSB_Msg_PokerCard.decode=function decode(reader, length) {
            if (! (reader instanceof $Reader))
                reader=$Reader.create(reader);
            var end=length === undefined ? reader.len : reader.pos + length, message=new $root.GameMsg_FGSB.FGSB_Msg_PokerCard();
            while (reader.pos<end) {
                var tag=reader.uint32();
                switch (tag >>> 3) {
                    case 1:
                        message.Color=reader.int32();
                        break;
                    case 2:
                        message.CardNumber=reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                }
            }
            if (! message.hasOwnProperty("Color"))
                throw $util.ProtocolError("missing required 'Color'", { instance : message });
            if (! message.hasOwnProperty("CardNumber"))
                throw $util.ProtocolError("missing required 'CardNumber'", { instance : message });
            return message;
        };

        /**
         * Decodes a FGSB_Msg_PokerCard message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_FGSB.FGSB_Msg_PokerCard
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_FGSB.FGSB_Msg_PokerCard} FGSB_Msg_PokerCard
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FGSB_Msg_PokerCard.decodeDelimited=function decodeDelimited(reader) {
            if (! (reader instanceof $Reader))
                reader=new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a FGSB_Msg_PokerCard message.
         * @function verify
         * @memberof GameMsg_FGSB.FGSB_Msg_PokerCard
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FGSB_Msg_PokerCard.verify=function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (! $util.isInteger(message.Color))
                return "Color: integer expected";
            if (! $util.isInteger(message.CardNumber))
                return "CardNumber: integer expected";
            return null;
        };

        /**
         * Creates a FGSB_Msg_PokerCard message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_FGSB.FGSB_Msg_PokerCard
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_FGSB.FGSB_Msg_PokerCard} FGSB_Msg_PokerCard
         */
        FGSB_Msg_PokerCard.fromObject=function fromObject(object) {
            if (object instanceof $root.GameMsg_FGSB.FGSB_Msg_PokerCard)
                return object;
            var message=new $root.GameMsg_FGSB.FGSB_Msg_PokerCard();
            if (object.Color != null)
                message.Color=object.Color | 0;
            if (object.CardNumber != null)
                message.CardNumber=object.CardNumber | 0;
            return message;
        };

        /**
         * Creates a plain object from a FGSB_Msg_PokerCard message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_FGSB.FGSB_Msg_PokerCard
         * @static
         * @param {GameMsg_FGSB.FGSB_Msg_PokerCard} message FGSB_Msg_PokerCard
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FGSB_Msg_PokerCard.toObject=function toObject(message, options) {
            if (! options)
                options={};
            var object={};
            if (options.defaults) {
                object.Color=0;
                object.CardNumber=0;
            }
            if (message.Color != null && message.hasOwnProperty("Color"))
                object.Color=message.Color;
            if (message.CardNumber != null && message.hasOwnProperty("CardNumber"))
                object.CardNumber=message.CardNumber;
            return object;
        };

        /**
         * Converts this FGSB_Msg_PokerCard to JSON.
         * @function toJSON
         * @memberof GameMsg_FGSB.FGSB_Msg_PokerCard
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FGSB_Msg_PokerCard.prototype.toJSON=function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return FGSB_Msg_PokerCard;
    })();

    GameMsg_FGSB.FGSB_Msg_UserCards=(function () {

        /**
         * Properties of a FGSB_Msg_UserCards.
         * @memberof GameMsg_FGSB
         * @interface IFGSB_Msg_UserCards
         * @property {Array.<GameMsg_FGSB.IFGSB_Msg_PokerCard>|null} [Cards] FGSB_Msg_UserCards Cards
         * @property {number} Pattern FGSB_Msg_UserCards Pattern
         */

        /**
         * Constructs a new FGSB_Msg_UserCards.
         * @memberof GameMsg_FGSB
         * @classdesc Represents a FGSB_Msg_UserCards.
         * @implements IFGSB_Msg_UserCards
         * @constructor
         * @param {GameMsg_FGSB.IFGSB_Msg_UserCards=} [properties] Properties to set
         */
        function FGSB_Msg_UserCards(properties) {
            this.Cards=[];
            if (properties)
                for (var keys=Object.keys(properties), i=0; i<keys.length; ++ i)
                    if (properties[keys[i]] != null)
                        this[keys[i]]=properties[keys[i]];
        }

        /**
         * FGSB_Msg_UserCards Cards.
         * @member {Array.<GameMsg_FGSB.IFGSB_Msg_PokerCard>} Cards
         * @memberof GameMsg_FGSB.FGSB_Msg_UserCards
         * @instance
         */
        FGSB_Msg_UserCards.prototype.Cards=$util.emptyArray;

        /**
         * FGSB_Msg_UserCards Pattern.
         * @member {number} Pattern
         * @memberof GameMsg_FGSB.FGSB_Msg_UserCards
         * @instance
         */
        FGSB_Msg_UserCards.prototype.Pattern=0;

        /**
         * Creates a new FGSB_Msg_UserCards instance using the specified properties.
         * @function create
         * @memberof GameMsg_FGSB.FGSB_Msg_UserCards
         * @static
         * @param {GameMsg_FGSB.IFGSB_Msg_UserCards=} [properties] Properties to set
         * @returns {GameMsg_FGSB.FGSB_Msg_UserCards} FGSB_Msg_UserCards instance
         */
        FGSB_Msg_UserCards.create=function create(properties) {
            return new FGSB_Msg_UserCards(properties);
        };

        /**
         * Encodes the specified FGSB_Msg_UserCards message. Does not implicitly {@link GameMsg_FGSB.FGSB_Msg_UserCards.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_FGSB.FGSB_Msg_UserCards
         * @static
         * @param {GameMsg_FGSB.IFGSB_Msg_UserCards} message FGSB_Msg_UserCards message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FGSB_Msg_UserCards.encode=function encode(message, writer) {
            if (! writer)
                writer=$Writer.create();
            if (message.Cards != null && message.Cards.length)
                for (var i=0; i<message.Cards.length; ++ i)
                    $root.GameMsg_FGSB.FGSB_Msg_PokerCard.encode(message.Cards[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.Pattern);
            return writer;
        };

        /**
         * Encodes the specified FGSB_Msg_UserCards message, length delimited. Does not implicitly {@link GameMsg_FGSB.FGSB_Msg_UserCards.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_FGSB.FGSB_Msg_UserCards
         * @static
         * @param {GameMsg_FGSB.IFGSB_Msg_UserCards} message FGSB_Msg_UserCards message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FGSB_Msg_UserCards.encodeDelimited=function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FGSB_Msg_UserCards message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_FGSB.FGSB_Msg_UserCards
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_FGSB.FGSB_Msg_UserCards} FGSB_Msg_UserCards
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FGSB_Msg_UserCards.decode=function decode(reader, length) {
            if (! (reader instanceof $Reader))
                reader=$Reader.create(reader);
            var end=length === undefined ? reader.len : reader.pos + length, message=new $root.GameMsg_FGSB.FGSB_Msg_UserCards();
            while (reader.pos<end) {
                var tag=reader.uint32();
                switch (tag >>> 3) {
                    case 1:
                        if (! (message.Cards && message.Cards.length))
                            message.Cards=[];
                        message.Cards.push($root.GameMsg_FGSB.FGSB_Msg_PokerCard.decode(reader, reader.uint32()));
                        break;
                    case 2:
                        message.Pattern=reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                }
            }
            if (! message.hasOwnProperty("Pattern"))
                throw $util.ProtocolError("missing required 'Pattern'", { instance : message });
            return message;
        };

        /**
         * Decodes a FGSB_Msg_UserCards message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_FGSB.FGSB_Msg_UserCards
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_FGSB.FGSB_Msg_UserCards} FGSB_Msg_UserCards
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FGSB_Msg_UserCards.decodeDelimited=function decodeDelimited(reader) {
            if (! (reader instanceof $Reader))
                reader=new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a FGSB_Msg_UserCards message.
         * @function verify
         * @memberof GameMsg_FGSB.FGSB_Msg_UserCards
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FGSB_Msg_UserCards.verify=function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Cards != null && message.hasOwnProperty("Cards")) {
                if (! Array.isArray(message.Cards))
                    return "Cards: array expected";
                for (var i=0; i<message.Cards.length; ++ i) {
                    var error=$root.GameMsg_FGSB.FGSB_Msg_PokerCard.verify(message.Cards[i]);
                    if (error)
                        return "Cards." + error;
                }
            }
            if (! $util.isInteger(message.Pattern))
                return "Pattern: integer expected";
            return null;
        };

        /**
         * Creates a FGSB_Msg_UserCards message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_FGSB.FGSB_Msg_UserCards
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_FGSB.FGSB_Msg_UserCards} FGSB_Msg_UserCards
         */
        FGSB_Msg_UserCards.fromObject=function fromObject(object) {
            if (object instanceof $root.GameMsg_FGSB.FGSB_Msg_UserCards)
                return object;
            var message=new $root.GameMsg_FGSB.FGSB_Msg_UserCards();
            if (object.Cards) {
                if (! Array.isArray(object.Cards))
                    throw TypeError(".GameMsg_FGSB.FGSB_Msg_UserCards.Cards: array expected");
                message.Cards=[];
                for (var i=0; i<object.Cards.length; ++ i) {
                    if (typeof object.Cards[i] !== "object")
                        throw TypeError(".GameMsg_FGSB.FGSB_Msg_UserCards.Cards: object expected");
                    message.Cards[i]=$root.GameMsg_FGSB.FGSB_Msg_PokerCard.fromObject(object.Cards[i]);
                }
            }
            if (object.Pattern != null)
                message.Pattern=object.Pattern | 0;
            return message;
        };

        /**
         * Creates a plain object from a FGSB_Msg_UserCards message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_FGSB.FGSB_Msg_UserCards
         * @static
         * @param {GameMsg_FGSB.FGSB_Msg_UserCards} message FGSB_Msg_UserCards
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FGSB_Msg_UserCards.toObject=function toObject(message, options) {
            if (! options)
                options={};
            var object={};
            if (options.arrays || options.defaults)
                object.Cards=[];
            if (options.defaults)
                object.Pattern=0;
            if (message.Cards && message.Cards.length) {
                object.Cards=[];
                for (var j=0; j<message.Cards.length; ++ j)
                    object.Cards[j]=$root.GameMsg_FGSB.FGSB_Msg_PokerCard.toObject(message.Cards[j], options);
            }
            if (message.Pattern != null && message.hasOwnProperty("Pattern"))
                object.Pattern=message.Pattern;
            return object;
        };

        /**
         * Converts this FGSB_Msg_UserCards to JSON.
         * @function toJSON
         * @memberof GameMsg_FGSB.FGSB_Msg_UserCards
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FGSB_Msg_UserCards.prototype.toJSON=function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return FGSB_Msg_UserCards;
    })();

    GameMsg_FGSB.FGSB_Msg_UserBettingStart=(function () {

        /**
         * Properties of a FGSB_Msg_UserBettingStart.
         * @memberof GameMsg_FGSB
         * @interface IFGSB_Msg_UserBettingStart
         * @property {number} TimeRemain FGSB_Msg_UserBettingStart TimeRemain
         * @property {number} Round FGSB_Msg_UserBettingStart Round
         */

        /**
         * Constructs a new FGSB_Msg_UserBettingStart.
         * @memberof GameMsg_FGSB
         * @classdesc Represents a FGSB_Msg_UserBettingStart.
         * @implements IFGSB_Msg_UserBettingStart
         * @constructor
         * @param {GameMsg_FGSB.IFGSB_Msg_UserBettingStart=} [properties] Properties to set
         */
        function FGSB_Msg_UserBettingStart(properties) {
            if (properties)
                for (var keys=Object.keys(properties), i=0; i<keys.length; ++ i)
                    if (properties[keys[i]] != null)
                        this[keys[i]]=properties[keys[i]];
        }

        /**
         * FGSB_Msg_UserBettingStart TimeRemain.
         * @member {number} TimeRemain
         * @memberof GameMsg_FGSB.FGSB_Msg_UserBettingStart
         * @instance
         */
        FGSB_Msg_UserBettingStart.prototype.TimeRemain=0;

        /**
         * FGSB_Msg_UserBettingStart Round.
         * @member {number} Round
         * @memberof GameMsg_FGSB.FGSB_Msg_UserBettingStart
         * @instance
         */
        FGSB_Msg_UserBettingStart.prototype.Round=0;

        /**
         * Creates a new FGSB_Msg_UserBettingStart instance using the specified properties.
         * @function create
         * @memberof GameMsg_FGSB.FGSB_Msg_UserBettingStart
         * @static
         * @param {GameMsg_FGSB.IFGSB_Msg_UserBettingStart=} [properties] Properties to set
         * @returns {GameMsg_FGSB.FGSB_Msg_UserBettingStart} FGSB_Msg_UserBettingStart instance
         */
        FGSB_Msg_UserBettingStart.create=function create(properties) {
            return new FGSB_Msg_UserBettingStart(properties);
        };

        /**
         * Encodes the specified FGSB_Msg_UserBettingStart message. Does not implicitly {@link GameMsg_FGSB.FGSB_Msg_UserBettingStart.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_FGSB.FGSB_Msg_UserBettingStart
         * @static
         * @param {GameMsg_FGSB.IFGSB_Msg_UserBettingStart} message FGSB_Msg_UserBettingStart message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FGSB_Msg_UserBettingStart.encode=function encode(message, writer) {
            if (! writer)
                writer=$Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.TimeRemain);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.Round);
            return writer;
        };

        /**
         * Encodes the specified FGSB_Msg_UserBettingStart message, length delimited. Does not implicitly {@link GameMsg_FGSB.FGSB_Msg_UserBettingStart.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_FGSB.FGSB_Msg_UserBettingStart
         * @static
         * @param {GameMsg_FGSB.IFGSB_Msg_UserBettingStart} message FGSB_Msg_UserBettingStart message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FGSB_Msg_UserBettingStart.encodeDelimited=function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FGSB_Msg_UserBettingStart message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_FGSB.FGSB_Msg_UserBettingStart
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_FGSB.FGSB_Msg_UserBettingStart} FGSB_Msg_UserBettingStart
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FGSB_Msg_UserBettingStart.decode=function decode(reader, length) {
            if (! (reader instanceof $Reader))
                reader=$Reader.create(reader);
            var end=length === undefined ? reader.len : reader.pos + length, message=new $root.GameMsg_FGSB.FGSB_Msg_UserBettingStart();
            while (reader.pos<end) {
                var tag=reader.uint32();
                switch (tag >>> 3) {
                    case 1:
                        message.TimeRemain=reader.int32();
                        break;
                    case 2:
                        message.Round=reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                }
            }
            if (! message.hasOwnProperty("TimeRemain"))
                throw $util.ProtocolError("missing required 'TimeRemain'", { instance : message });
            if (! message.hasOwnProperty("Round"))
                throw $util.ProtocolError("missing required 'Round'", { instance : message });
            return message;
        };

        /**
         * Decodes a FGSB_Msg_UserBettingStart message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_FGSB.FGSB_Msg_UserBettingStart
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_FGSB.FGSB_Msg_UserBettingStart} FGSB_Msg_UserBettingStart
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FGSB_Msg_UserBettingStart.decodeDelimited=function decodeDelimited(reader) {
            if (! (reader instanceof $Reader))
                reader=new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a FGSB_Msg_UserBettingStart message.
         * @function verify
         * @memberof GameMsg_FGSB.FGSB_Msg_UserBettingStart
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FGSB_Msg_UserBettingStart.verify=function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (! $util.isInteger(message.TimeRemain))
                return "TimeRemain: integer expected";
            if (! $util.isInteger(message.Round))
                return "Round: integer expected";
            return null;
        };

        /**
         * Creates a FGSB_Msg_UserBettingStart message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_FGSB.FGSB_Msg_UserBettingStart
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_FGSB.FGSB_Msg_UserBettingStart} FGSB_Msg_UserBettingStart
         */
        FGSB_Msg_UserBettingStart.fromObject=function fromObject(object) {
            if (object instanceof $root.GameMsg_FGSB.FGSB_Msg_UserBettingStart)
                return object;
            var message=new $root.GameMsg_FGSB.FGSB_Msg_UserBettingStart();
            if (object.TimeRemain != null)
                message.TimeRemain=object.TimeRemain | 0;
            if (object.Round != null)
                message.Round=object.Round | 0;
            return message;
        };

        /**
         * Creates a plain object from a FGSB_Msg_UserBettingStart message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_FGSB.FGSB_Msg_UserBettingStart
         * @static
         * @param {GameMsg_FGSB.FGSB_Msg_UserBettingStart} message FGSB_Msg_UserBettingStart
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FGSB_Msg_UserBettingStart.toObject=function toObject(message, options) {
            if (! options)
                options={};
            var object={};
            if (options.defaults) {
                object.TimeRemain=0;
                object.Round=0;
            }
            if (message.TimeRemain != null && message.hasOwnProperty("TimeRemain"))
                object.TimeRemain=message.TimeRemain;
            if (message.Round != null && message.hasOwnProperty("Round"))
                object.Round=message.Round;
            return object;
        };

        /**
         * Converts this FGSB_Msg_UserBettingStart to JSON.
         * @function toJSON
         * @memberof GameMsg_FGSB.FGSB_Msg_UserBettingStart
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FGSB_Msg_UserBettingStart.prototype.toJSON=function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return FGSB_Msg_UserBettingStart;
    })();

    GameMsg_FGSB.FGSB_Msg_Bet=(function () {

        /**
         * Properties of a FGSB_Msg_Bet.
         * @memberof GameMsg_FGSB
         * @interface IFGSB_Msg_Bet
         * @property {number} BetType FGSB_Msg_Bet BetType
         * @property {number|Long} Bet FGSB_Msg_Bet Bet
         */

        /**
         * Constructs a new FGSB_Msg_Bet.
         * @memberof GameMsg_FGSB
         * @classdesc Represents a FGSB_Msg_Bet.
         * @implements IFGSB_Msg_Bet
         * @constructor
         * @param {GameMsg_FGSB.IFGSB_Msg_Bet=} [properties] Properties to set
         */
        function FGSB_Msg_Bet(properties) {
            if (properties)
                for (var keys=Object.keys(properties), i=0; i<keys.length; ++ i)
                    if (properties[keys[i]] != null)
                        this[keys[i]]=properties[keys[i]];
        }

        /**
         * FGSB_Msg_Bet BetType.
         * @member {number} BetType
         * @memberof GameMsg_FGSB.FGSB_Msg_Bet
         * @instance
         */
        FGSB_Msg_Bet.prototype.BetType=0;

        /**
         * FGSB_Msg_Bet Bet.
         * @member {number|Long} Bet
         * @memberof GameMsg_FGSB.FGSB_Msg_Bet
         * @instance
         */
        FGSB_Msg_Bet.prototype.Bet=$util.Long ? $util.Long.fromBits(0, 0, false) : 0;

        /**
         * Creates a new FGSB_Msg_Bet instance using the specified properties.
         * @function create
         * @memberof GameMsg_FGSB.FGSB_Msg_Bet
         * @static
         * @param {GameMsg_FGSB.IFGSB_Msg_Bet=} [properties] Properties to set
         * @returns {GameMsg_FGSB.FGSB_Msg_Bet} FGSB_Msg_Bet instance
         */
        FGSB_Msg_Bet.create=function create(properties) {
            return new FGSB_Msg_Bet(properties);
        };

        /**
         * Encodes the specified FGSB_Msg_Bet message. Does not implicitly {@link GameMsg_FGSB.FGSB_Msg_Bet.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_FGSB.FGSB_Msg_Bet
         * @static
         * @param {GameMsg_FGSB.IFGSB_Msg_Bet} message FGSB_Msg_Bet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FGSB_Msg_Bet.encode=function encode(message, writer) {
            if (! writer)
                writer=$Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.BetType);
            writer.uint32(/* id 2, wireType 0 =*/16).int64(message.Bet);
            return writer;
        };

        /**
         * Encodes the specified FGSB_Msg_Bet message, length delimited. Does not implicitly {@link GameMsg_FGSB.FGSB_Msg_Bet.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_FGSB.FGSB_Msg_Bet
         * @static
         * @param {GameMsg_FGSB.IFGSB_Msg_Bet} message FGSB_Msg_Bet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FGSB_Msg_Bet.encodeDelimited=function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FGSB_Msg_Bet message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_FGSB.FGSB_Msg_Bet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_FGSB.FGSB_Msg_Bet} FGSB_Msg_Bet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FGSB_Msg_Bet.decode=function decode(reader, length) {
            if (! (reader instanceof $Reader))
                reader=$Reader.create(reader);
            var end=length === undefined ? reader.len : reader.pos + length, message=new $root.GameMsg_FGSB.FGSB_Msg_Bet();
            while (reader.pos<end) {
                var tag=reader.uint32();
                switch (tag >>> 3) {
                    case 1:
                        message.BetType=reader.int32();
                        break;
                    case 2:
                        message.Bet=reader.int64();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                }
            }
            if (! message.hasOwnProperty("BetType"))
                throw $util.ProtocolError("missing required 'BetType'", { instance : message });
            if (! message.hasOwnProperty("Bet"))
                throw $util.ProtocolError("missing required 'Bet'", { instance : message });
            return message;
        };

        /**
         * Decodes a FGSB_Msg_Bet message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_FGSB.FGSB_Msg_Bet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_FGSB.FGSB_Msg_Bet} FGSB_Msg_Bet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FGSB_Msg_Bet.decodeDelimited=function decodeDelimited(reader) {
            if (! (reader instanceof $Reader))
                reader=new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a FGSB_Msg_Bet message.
         * @function verify
         * @memberof GameMsg_FGSB.FGSB_Msg_Bet
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FGSB_Msg_Bet.verify=function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (! $util.isInteger(message.BetType))
                return "BetType: integer expected";
            if (! $util.isInteger(message.Bet) && ! (message.Bet && $util.isInteger(message.Bet.low) && $util.isInteger(message.Bet.high)))
                return "Bet: integer|Long expected";
            return null;
        };

        /**
         * Creates a FGSB_Msg_Bet message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_FGSB.FGSB_Msg_Bet
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_FGSB.FGSB_Msg_Bet} FGSB_Msg_Bet
         */
        FGSB_Msg_Bet.fromObject=function fromObject(object) {
            if (object instanceof $root.GameMsg_FGSB.FGSB_Msg_Bet)
                return object;
            var message=new $root.GameMsg_FGSB.FGSB_Msg_Bet();
            if (object.BetType != null)
                message.BetType=object.BetType | 0;
            if (object.Bet != null)
                if ($util.Long)
                    (message.Bet=$util.Long.fromValue(object.Bet)).unsigned=false;
                else if (typeof object.Bet === "string")
                    message.Bet=parseInt(object.Bet, 10);
                else if (typeof object.Bet === "number")
                    message.Bet=object.Bet;
                else if (typeof object.Bet === "object")
                    message.Bet=new $util.LongBits(object.Bet.low >>> 0, object.Bet.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a FGSB_Msg_Bet message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_FGSB.FGSB_Msg_Bet
         * @static
         * @param {GameMsg_FGSB.FGSB_Msg_Bet} message FGSB_Msg_Bet
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FGSB_Msg_Bet.toObject=function toObject(message, options) {
            if (! options)
                options={};
            var object={};
            if (options.defaults) {
                object.BetType=0;
                if ($util.Long) {
                    var long=new $util.Long(0, 0, false);
                    object.Bet=options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.Bet=options.longs === String ? "0" : 0;
            }
            if (message.BetType != null && message.hasOwnProperty("BetType"))
                object.BetType=message.BetType;
            if (message.Bet != null && message.hasOwnProperty("Bet"))
                if (typeof message.Bet === "number")
                    object.Bet=options.longs === String ? String(message.Bet) : message.Bet;
                else
                    object.Bet=options.longs === String ? $util.Long.prototype.toString.call(message.Bet) : options.longs === Number ? new $util.LongBits(message.Bet.low >>> 0, message.Bet.high >>> 0).toNumber() : message.Bet;
            return object;
        };

        /**
         * Converts this FGSB_Msg_Bet to JSON.
         * @function toJSON
         * @memberof GameMsg_FGSB.FGSB_Msg_Bet
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FGSB_Msg_Bet.prototype.toJSON=function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return FGSB_Msg_Bet;
    })();

    GameMsg_FGSB.FGSB_Msg_BetResult=(function () {

        /**
         * Properties of a FGSB_Msg_BetResult.
         * @memberof GameMsg_FGSB
         * @interface IFGSB_Msg_BetResult
         * @property {number} SeatNo FGSB_Msg_BetResult SeatNo
         * @property {number} BetType FGSB_Msg_BetResult BetType
         * @property {number|Long} Bet FGSB_Msg_BetResult Bet
         * @property {number|Long} MoneyRemain FGSB_Msg_BetResult MoneyRemain
         * @property {number} Result FGSB_Msg_BetResult Result
         */

        /**
         * Constructs a new FGSB_Msg_BetResult.
         * @memberof GameMsg_FGSB
         * @classdesc Represents a FGSB_Msg_BetResult.
         * @implements IFGSB_Msg_BetResult
         * @constructor
         * @param {GameMsg_FGSB.IFGSB_Msg_BetResult=} [properties] Properties to set
         */
        function FGSB_Msg_BetResult(properties) {
            if (properties)
                for (var keys=Object.keys(properties), i=0; i<keys.length; ++ i)
                    if (properties[keys[i]] != null)
                        this[keys[i]]=properties[keys[i]];
        }

        /**
         * FGSB_Msg_BetResult SeatNo.
         * @member {number} SeatNo
         * @memberof GameMsg_FGSB.FGSB_Msg_BetResult
         * @instance
         */
        FGSB_Msg_BetResult.prototype.SeatNo=0;

        /**
         * FGSB_Msg_BetResult BetType.
         * @member {number} BetType
         * @memberof GameMsg_FGSB.FGSB_Msg_BetResult
         * @instance
         */
        FGSB_Msg_BetResult.prototype.BetType=0;

        /**
         * FGSB_Msg_BetResult Bet.
         * @member {number|Long} Bet
         * @memberof GameMsg_FGSB.FGSB_Msg_BetResult
         * @instance
         */
        FGSB_Msg_BetResult.prototype.Bet=$util.Long ? $util.Long.fromBits(0, 0, false) : 0;

        /**
         * FGSB_Msg_BetResult MoneyRemain.
         * @member {number|Long} MoneyRemain
         * @memberof GameMsg_FGSB.FGSB_Msg_BetResult
         * @instance
         */
        FGSB_Msg_BetResult.prototype.MoneyRemain=$util.Long ? $util.Long.fromBits(0, 0, false) : 0;

        /**
         * FGSB_Msg_BetResult Result.
         * @member {number} Result
         * @memberof GameMsg_FGSB.FGSB_Msg_BetResult
         * @instance
         */
        FGSB_Msg_BetResult.prototype.Result=0;

        /**
         * Creates a new FGSB_Msg_BetResult instance using the specified properties.
         * @function create
         * @memberof GameMsg_FGSB.FGSB_Msg_BetResult
         * @static
         * @param {GameMsg_FGSB.IFGSB_Msg_BetResult=} [properties] Properties to set
         * @returns {GameMsg_FGSB.FGSB_Msg_BetResult} FGSB_Msg_BetResult instance
         */
        FGSB_Msg_BetResult.create=function create(properties) {
            return new FGSB_Msg_BetResult(properties);
        };

        /**
         * Encodes the specified FGSB_Msg_BetResult message. Does not implicitly {@link GameMsg_FGSB.FGSB_Msg_BetResult.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_FGSB.FGSB_Msg_BetResult
         * @static
         * @param {GameMsg_FGSB.IFGSB_Msg_BetResult} message FGSB_Msg_BetResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FGSB_Msg_BetResult.encode=function encode(message, writer) {
            if (! writer)
                writer=$Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.SeatNo);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.BetType);
            writer.uint32(/* id 3, wireType 0 =*/24).int64(message.Bet);
            writer.uint32(/* id 4, wireType 0 =*/32).int64(message.MoneyRemain);
            writer.uint32(/* id 5, wireType 0 =*/40).int32(message.Result);
            return writer;
        };

        /**
         * Encodes the specified FGSB_Msg_BetResult message, length delimited. Does not implicitly {@link GameMsg_FGSB.FGSB_Msg_BetResult.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_FGSB.FGSB_Msg_BetResult
         * @static
         * @param {GameMsg_FGSB.IFGSB_Msg_BetResult} message FGSB_Msg_BetResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FGSB_Msg_BetResult.encodeDelimited=function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FGSB_Msg_BetResult message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_FGSB.FGSB_Msg_BetResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_FGSB.FGSB_Msg_BetResult} FGSB_Msg_BetResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FGSB_Msg_BetResult.decode=function decode(reader, length) {
            if (! (reader instanceof $Reader))
                reader=$Reader.create(reader);
            var end=length === undefined ? reader.len : reader.pos + length, message=new $root.GameMsg_FGSB.FGSB_Msg_BetResult();
            while (reader.pos<end) {
                var tag=reader.uint32();
                switch (tag >>> 3) {
                    case 1:
                        message.SeatNo=reader.int32();
                        break;
                    case 2:
                        message.BetType=reader.int32();
                        break;
                    case 3:
                        message.Bet=reader.int64();
                        break;
                    case 4:
                        message.MoneyRemain=reader.int64();
                        break;
                    case 5:
                        message.Result=reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                }
            }
            if (! message.hasOwnProperty("SeatNo"))
                throw $util.ProtocolError("missing required 'SeatNo'", { instance : message });
            if (! message.hasOwnProperty("BetType"))
                throw $util.ProtocolError("missing required 'BetType'", { instance : message });
            if (! message.hasOwnProperty("Bet"))
                throw $util.ProtocolError("missing required 'Bet'", { instance : message });
            if (! message.hasOwnProperty("MoneyRemain"))
                throw $util.ProtocolError("missing required 'MoneyRemain'", { instance : message });
            if (! message.hasOwnProperty("Result"))
                throw $util.ProtocolError("missing required 'Result'", { instance : message });
            return message;
        };

        /**
         * Decodes a FGSB_Msg_BetResult message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_FGSB.FGSB_Msg_BetResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_FGSB.FGSB_Msg_BetResult} FGSB_Msg_BetResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FGSB_Msg_BetResult.decodeDelimited=function decodeDelimited(reader) {
            if (! (reader instanceof $Reader))
                reader=new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a FGSB_Msg_BetResult message.
         * @function verify
         * @memberof GameMsg_FGSB.FGSB_Msg_BetResult
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FGSB_Msg_BetResult.verify=function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (! $util.isInteger(message.SeatNo))
                return "SeatNo: integer expected";
            if (! $util.isInteger(message.BetType))
                return "BetType: integer expected";
            if (! $util.isInteger(message.Bet) && ! (message.Bet && $util.isInteger(message.Bet.low) && $util.isInteger(message.Bet.high)))
                return "Bet: integer|Long expected";
            if (! $util.isInteger(message.MoneyRemain) && ! (message.MoneyRemain && $util.isInteger(message.MoneyRemain.low) && $util.isInteger(message.MoneyRemain.high)))
                return "MoneyRemain: integer|Long expected";
            if (! $util.isInteger(message.Result))
                return "Result: integer expected";
            return null;
        };

        /**
         * Creates a FGSB_Msg_BetResult message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_FGSB.FGSB_Msg_BetResult
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_FGSB.FGSB_Msg_BetResult} FGSB_Msg_BetResult
         */
        FGSB_Msg_BetResult.fromObject=function fromObject(object) {
            if (object instanceof $root.GameMsg_FGSB.FGSB_Msg_BetResult)
                return object;
            var message=new $root.GameMsg_FGSB.FGSB_Msg_BetResult();
            if (object.SeatNo != null)
                message.SeatNo=object.SeatNo | 0;
            if (object.BetType != null)
                message.BetType=object.BetType | 0;
            if (object.Bet != null)
                if ($util.Long)
                    (message.Bet=$util.Long.fromValue(object.Bet)).unsigned=false;
                else if (typeof object.Bet === "string")
                    message.Bet=parseInt(object.Bet, 10);
                else if (typeof object.Bet === "number")
                    message.Bet=object.Bet;
                else if (typeof object.Bet === "object")
                    message.Bet=new $util.LongBits(object.Bet.low >>> 0, object.Bet.high >>> 0).toNumber();
            if (object.MoneyRemain != null)
                if ($util.Long)
                    (message.MoneyRemain=$util.Long.fromValue(object.MoneyRemain)).unsigned=false;
                else if (typeof object.MoneyRemain === "string")
                    message.MoneyRemain=parseInt(object.MoneyRemain, 10);
                else if (typeof object.MoneyRemain === "number")
                    message.MoneyRemain=object.MoneyRemain;
                else if (typeof object.MoneyRemain === "object")
                    message.MoneyRemain=new $util.LongBits(object.MoneyRemain.low >>> 0, object.MoneyRemain.high >>> 0).toNumber();
            if (object.Result != null)
                message.Result=object.Result | 0;
            return message;
        };

        /**
         * Creates a plain object from a FGSB_Msg_BetResult message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_FGSB.FGSB_Msg_BetResult
         * @static
         * @param {GameMsg_FGSB.FGSB_Msg_BetResult} message FGSB_Msg_BetResult
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FGSB_Msg_BetResult.toObject=function toObject(message, options) {
            if (! options)
                options={};
            var object={};
            if (options.defaults) {
                object.SeatNo=0;
                object.BetType=0;
                if ($util.Long) {
                    var long=new $util.Long(0, 0, false);
                    object.Bet=options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.Bet=options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long=new $util.Long(0, 0, false);
                    object.MoneyRemain=options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.MoneyRemain=options.longs === String ? "0" : 0;
                object.Result=0;
            }
            if (message.SeatNo != null && message.hasOwnProperty("SeatNo"))
                object.SeatNo=message.SeatNo;
            if (message.BetType != null && message.hasOwnProperty("BetType"))
                object.BetType=message.BetType;
            if (message.Bet != null && message.hasOwnProperty("Bet"))
                if (typeof message.Bet === "number")
                    object.Bet=options.longs === String ? String(message.Bet) : message.Bet;
                else
                    object.Bet=options.longs === String ? $util.Long.prototype.toString.call(message.Bet) : options.longs === Number ? new $util.LongBits(message.Bet.low >>> 0, message.Bet.high >>> 0).toNumber() : message.Bet;
            if (message.MoneyRemain != null && message.hasOwnProperty("MoneyRemain"))
                if (typeof message.MoneyRemain === "number")
                    object.MoneyRemain=options.longs === String ? String(message.MoneyRemain) : message.MoneyRemain;
                else
                    object.MoneyRemain=options.longs === String ? $util.Long.prototype.toString.call(message.MoneyRemain) : options.longs === Number ? new $util.LongBits(message.MoneyRemain.low >>> 0, message.MoneyRemain.high >>> 0).toNumber() : message.MoneyRemain;
            if (message.Result != null && message.hasOwnProperty("Result"))
                object.Result=message.Result;
            return object;
        };

        /**
         * Converts this FGSB_Msg_BetResult to JSON.
         * @function toJSON
         * @memberof GameMsg_FGSB.FGSB_Msg_BetResult
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FGSB_Msg_BetResult.prototype.toJSON=function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return FGSB_Msg_BetResult;
    })();

    GameMsg_FGSB.FGSB_Msg_StopBettingAnimation=(function () {

        /**
         * Properties of a FGSB_Msg_StopBettingAnimation.
         * @memberof GameMsg_FGSB
         * @interface IFGSB_Msg_StopBettingAnimation
         * @property {string} ActionName FGSB_Msg_StopBettingAnimation ActionName
         */

        /**
         * Constructs a new FGSB_Msg_StopBettingAnimation.
         * @memberof GameMsg_FGSB
         * @classdesc Represents a FGSB_Msg_StopBettingAnimation.
         * @implements IFGSB_Msg_StopBettingAnimation
         * @constructor
         * @param {GameMsg_FGSB.IFGSB_Msg_StopBettingAnimation=} [properties] Properties to set
         */
        function FGSB_Msg_StopBettingAnimation(properties) {
            if (properties)
                for (var keys=Object.keys(properties), i=0; i<keys.length; ++ i)
                    if (properties[keys[i]] != null)
                        this[keys[i]]=properties[keys[i]];
        }

        /**
         * FGSB_Msg_StopBettingAnimation ActionName.
         * @member {string} ActionName
         * @memberof GameMsg_FGSB.FGSB_Msg_StopBettingAnimation
         * @instance
         */
        FGSB_Msg_StopBettingAnimation.prototype.ActionName="";

        /**
         * Creates a new FGSB_Msg_StopBettingAnimation instance using the specified properties.
         * @function create
         * @memberof GameMsg_FGSB.FGSB_Msg_StopBettingAnimation
         * @static
         * @param {GameMsg_FGSB.IFGSB_Msg_StopBettingAnimation=} [properties] Properties to set
         * @returns {GameMsg_FGSB.FGSB_Msg_StopBettingAnimation} FGSB_Msg_StopBettingAnimation instance
         */
        FGSB_Msg_StopBettingAnimation.create=function create(properties) {
            return new FGSB_Msg_StopBettingAnimation(properties);
        };

        /**
         * Encodes the specified FGSB_Msg_StopBettingAnimation message. Does not implicitly {@link GameMsg_FGSB.FGSB_Msg_StopBettingAnimation.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_FGSB.FGSB_Msg_StopBettingAnimation
         * @static
         * @param {GameMsg_FGSB.IFGSB_Msg_StopBettingAnimation} message FGSB_Msg_StopBettingAnimation message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FGSB_Msg_StopBettingAnimation.encode=function encode(message, writer) {
            if (! writer)
                writer=$Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.ActionName);
            return writer;
        };

        /**
         * Encodes the specified FGSB_Msg_StopBettingAnimation message, length delimited. Does not implicitly {@link GameMsg_FGSB.FGSB_Msg_StopBettingAnimation.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_FGSB.FGSB_Msg_StopBettingAnimation
         * @static
         * @param {GameMsg_FGSB.IFGSB_Msg_StopBettingAnimation} message FGSB_Msg_StopBettingAnimation message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FGSB_Msg_StopBettingAnimation.encodeDelimited=function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FGSB_Msg_StopBettingAnimation message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_FGSB.FGSB_Msg_StopBettingAnimation
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_FGSB.FGSB_Msg_StopBettingAnimation} FGSB_Msg_StopBettingAnimation
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FGSB_Msg_StopBettingAnimation.decode=function decode(reader, length) {
            if (! (reader instanceof $Reader))
                reader=$Reader.create(reader);
            var end=length === undefined ? reader.len : reader.pos + length, message=new $root.GameMsg_FGSB.FGSB_Msg_StopBettingAnimation();
            while (reader.pos<end) {
                var tag=reader.uint32();
                switch (tag >>> 3) {
                    case 1:
                        message.ActionName=reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                }
            }
            if (! message.hasOwnProperty("ActionName"))
                throw $util.ProtocolError("missing required 'ActionName'", { instance : message });
            return message;
        };

        /**
         * Decodes a FGSB_Msg_StopBettingAnimation message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_FGSB.FGSB_Msg_StopBettingAnimation
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_FGSB.FGSB_Msg_StopBettingAnimation} FGSB_Msg_StopBettingAnimation
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FGSB_Msg_StopBettingAnimation.decodeDelimited=function decodeDelimited(reader) {
            if (! (reader instanceof $Reader))
                reader=new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a FGSB_Msg_StopBettingAnimation message.
         * @function verify
         * @memberof GameMsg_FGSB.FGSB_Msg_StopBettingAnimation
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FGSB_Msg_StopBettingAnimation.verify=function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (! $util.isString(message.ActionName))
                return "ActionName: string expected";
            return null;
        };

        /**
         * Creates a FGSB_Msg_StopBettingAnimation message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_FGSB.FGSB_Msg_StopBettingAnimation
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_FGSB.FGSB_Msg_StopBettingAnimation} FGSB_Msg_StopBettingAnimation
         */
        FGSB_Msg_StopBettingAnimation.fromObject=function fromObject(object) {
            if (object instanceof $root.GameMsg_FGSB.FGSB_Msg_StopBettingAnimation)
                return object;
            var message=new $root.GameMsg_FGSB.FGSB_Msg_StopBettingAnimation();
            if (object.ActionName != null)
                message.ActionName=String(object.ActionName);
            return message;
        };

        /**
         * Creates a plain object from a FGSB_Msg_StopBettingAnimation message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_FGSB.FGSB_Msg_StopBettingAnimation
         * @static
         * @param {GameMsg_FGSB.FGSB_Msg_StopBettingAnimation} message FGSB_Msg_StopBettingAnimation
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FGSB_Msg_StopBettingAnimation.toObject=function toObject(message, options) {
            if (! options)
                options={};
            var object={};
            if (options.defaults)
                object.ActionName="";
            if (message.ActionName != null && message.hasOwnProperty("ActionName"))
                object.ActionName=message.ActionName;
            return object;
        };

        /**
         * Converts this FGSB_Msg_StopBettingAnimation to JSON.
         * @function toJSON
         * @memberof GameMsg_FGSB.FGSB_Msg_StopBettingAnimation
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FGSB_Msg_StopBettingAnimation.prototype.toJSON=function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return FGSB_Msg_StopBettingAnimation;
    })();

    GameMsg_FGSB.FGSB_Msg_Deal=(function () {

        /**
         * Properties of a FGSB_Msg_Deal.
         * @memberof GameMsg_FGSB
         * @interface IFGSB_Msg_Deal
         * @property {GameMsg_FGSB.IFGSB_Msg_UserCards} BankerCards FGSB_Msg_Deal BankerCards
         * @property {Array.<GameMsg_FGSB.IFGSB_Msg_UserInfo>|null} [UserInfo] FGSB_Msg_Deal UserInfo
         * @property {string} ActionName FGSB_Msg_Deal ActionName
         */

        /**
         * Constructs a new FGSB_Msg_Deal.
         * @memberof GameMsg_FGSB
         * @classdesc Represents a FGSB_Msg_Deal.
         * @implements IFGSB_Msg_Deal
         * @constructor
         * @param {GameMsg_FGSB.IFGSB_Msg_Deal=} [properties] Properties to set
         */
        function FGSB_Msg_Deal(properties) {
            this.UserInfo=[];
            if (properties)
                for (var keys=Object.keys(properties), i=0; i<keys.length; ++ i)
                    if (properties[keys[i]] != null)
                        this[keys[i]]=properties[keys[i]];
        }

        /**
         * FGSB_Msg_Deal BankerCards.
         * @member {GameMsg_FGSB.IFGSB_Msg_UserCards} BankerCards
         * @memberof GameMsg_FGSB.FGSB_Msg_Deal
         * @instance
         */
        FGSB_Msg_Deal.prototype.BankerCards=null;

        /**
         * FGSB_Msg_Deal UserInfo.
         * @member {Array.<GameMsg_FGSB.IFGSB_Msg_UserInfo>} UserInfo
         * @memberof GameMsg_FGSB.FGSB_Msg_Deal
         * @instance
         */
        FGSB_Msg_Deal.prototype.UserInfo=$util.emptyArray;

        /**
         * FGSB_Msg_Deal ActionName.
         * @member {string} ActionName
         * @memberof GameMsg_FGSB.FGSB_Msg_Deal
         * @instance
         */
        FGSB_Msg_Deal.prototype.ActionName="";

        /**
         * Creates a new FGSB_Msg_Deal instance using the specified properties.
         * @function create
         * @memberof GameMsg_FGSB.FGSB_Msg_Deal
         * @static
         * @param {GameMsg_FGSB.IFGSB_Msg_Deal=} [properties] Properties to set
         * @returns {GameMsg_FGSB.FGSB_Msg_Deal} FGSB_Msg_Deal instance
         */
        FGSB_Msg_Deal.create=function create(properties) {
            return new FGSB_Msg_Deal(properties);
        };

        /**
         * Encodes the specified FGSB_Msg_Deal message. Does not implicitly {@link GameMsg_FGSB.FGSB_Msg_Deal.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_FGSB.FGSB_Msg_Deal
         * @static
         * @param {GameMsg_FGSB.IFGSB_Msg_Deal} message FGSB_Msg_Deal message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FGSB_Msg_Deal.encode=function encode(message, writer) {
            if (! writer)
                writer=$Writer.create();
            $root.GameMsg_FGSB.FGSB_Msg_UserCards.encode(message.BankerCards, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.UserInfo != null && message.UserInfo.length)
                for (var i=0; i<message.UserInfo.length; ++ i)
                    $root.GameMsg_FGSB.FGSB_Msg_UserInfo.encode(message.UserInfo[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.ActionName);
            return writer;
        };

        /**
         * Encodes the specified FGSB_Msg_Deal message, length delimited. Does not implicitly {@link GameMsg_FGSB.FGSB_Msg_Deal.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_FGSB.FGSB_Msg_Deal
         * @static
         * @param {GameMsg_FGSB.IFGSB_Msg_Deal} message FGSB_Msg_Deal message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FGSB_Msg_Deal.encodeDelimited=function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FGSB_Msg_Deal message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_FGSB.FGSB_Msg_Deal
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_FGSB.FGSB_Msg_Deal} FGSB_Msg_Deal
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FGSB_Msg_Deal.decode=function decode(reader, length) {
            if (! (reader instanceof $Reader))
                reader=$Reader.create(reader);
            var end=length === undefined ? reader.len : reader.pos + length, message=new $root.GameMsg_FGSB.FGSB_Msg_Deal();
            while (reader.pos<end) {
                var tag=reader.uint32();
                switch (tag >>> 3) {
                    case 1:
                        message.BankerCards=$root.GameMsg_FGSB.FGSB_Msg_UserCards.decode(reader, reader.uint32());
                        break;
                    case 2:
                        if (! (message.UserInfo && message.UserInfo.length))
                            message.UserInfo=[];
                        message.UserInfo.push($root.GameMsg_FGSB.FGSB_Msg_UserInfo.decode(reader, reader.uint32()));
                        break;
                    case 3:
                        message.ActionName=reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                }
            }
            if (! message.hasOwnProperty("BankerCards"))
                throw $util.ProtocolError("missing required 'BankerCards'", { instance : message });
            if (! message.hasOwnProperty("ActionName"))
                throw $util.ProtocolError("missing required 'ActionName'", { instance : message });
            return message;
        };

        /**
         * Decodes a FGSB_Msg_Deal message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_FGSB.FGSB_Msg_Deal
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_FGSB.FGSB_Msg_Deal} FGSB_Msg_Deal
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FGSB_Msg_Deal.decodeDelimited=function decodeDelimited(reader) {
            if (! (reader instanceof $Reader))
                reader=new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a FGSB_Msg_Deal message.
         * @function verify
         * @memberof GameMsg_FGSB.FGSB_Msg_Deal
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FGSB_Msg_Deal.verify=function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            {
                var error=$root.GameMsg_FGSB.FGSB_Msg_UserCards.verify(message.BankerCards);
                if (error)
                    return "BankerCards." + error;
            }
            if (message.UserInfo != null && message.hasOwnProperty("UserInfo")) {
                if (! Array.isArray(message.UserInfo))
                    return "UserInfo: array expected";
                for (var i=0; i<message.UserInfo.length; ++ i) {
                    var error=$root.GameMsg_FGSB.FGSB_Msg_UserInfo.verify(message.UserInfo[i]);
                    if (error)
                        return "UserInfo." + error;
                }
            }
            if (! $util.isString(message.ActionName))
                return "ActionName: string expected";
            return null;
        };

        /**
         * Creates a FGSB_Msg_Deal message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_FGSB.FGSB_Msg_Deal
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_FGSB.FGSB_Msg_Deal} FGSB_Msg_Deal
         */
        FGSB_Msg_Deal.fromObject=function fromObject(object) {
            if (object instanceof $root.GameMsg_FGSB.FGSB_Msg_Deal)
                return object;
            var message=new $root.GameMsg_FGSB.FGSB_Msg_Deal();
            if (object.BankerCards != null) {
                if (typeof object.BankerCards !== "object")
                    throw TypeError(".GameMsg_FGSB.FGSB_Msg_Deal.BankerCards: object expected");
                message.BankerCards=$root.GameMsg_FGSB.FGSB_Msg_UserCards.fromObject(object.BankerCards);
            }
            if (object.UserInfo) {
                if (! Array.isArray(object.UserInfo))
                    throw TypeError(".GameMsg_FGSB.FGSB_Msg_Deal.UserInfo: array expected");
                message.UserInfo=[];
                for (var i=0; i<object.UserInfo.length; ++ i) {
                    if (typeof object.UserInfo[i] !== "object")
                        throw TypeError(".GameMsg_FGSB.FGSB_Msg_Deal.UserInfo: object expected");
                    message.UserInfo[i]=$root.GameMsg_FGSB.FGSB_Msg_UserInfo.fromObject(object.UserInfo[i]);
                }
            }
            if (object.ActionName != null)
                message.ActionName=String(object.ActionName);
            return message;
        };

        /**
         * Creates a plain object from a FGSB_Msg_Deal message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_FGSB.FGSB_Msg_Deal
         * @static
         * @param {GameMsg_FGSB.FGSB_Msg_Deal} message FGSB_Msg_Deal
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FGSB_Msg_Deal.toObject=function toObject(message, options) {
            if (! options)
                options={};
            var object={};
            if (options.arrays || options.defaults)
                object.UserInfo=[];
            if (options.defaults) {
                object.BankerCards=null;
                object.ActionName="";
            }
            if (message.BankerCards != null && message.hasOwnProperty("BankerCards"))
                object.BankerCards=$root.GameMsg_FGSB.FGSB_Msg_UserCards.toObject(message.BankerCards, options);
            if (message.UserInfo && message.UserInfo.length) {
                object.UserInfo=[];
                for (var j=0; j<message.UserInfo.length; ++ j)
                    object.UserInfo[j]=$root.GameMsg_FGSB.FGSB_Msg_UserInfo.toObject(message.UserInfo[j], options);
            }
            if (message.ActionName != null && message.hasOwnProperty("ActionName"))
                object.ActionName=message.ActionName;
            return object;
        };

        /**
         * Converts this FGSB_Msg_Deal to JSON.
         * @function toJSON
         * @memberof GameMsg_FGSB.FGSB_Msg_Deal
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FGSB_Msg_Deal.prototype.toJSON=function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return FGSB_Msg_Deal;
    })();

    GameMsg_FGSB.FGSB_Msg_SideSettlement=(function () {

        /**
         * Properties of a FGSB_Msg_SideSettlement.
         * @memberof GameMsg_FGSB
         * @interface IFGSB_Msg_SideSettlement
         * @property {Array.<GameMsg_FGSB.IFGSB_Msg_UserInfo>|null} [UserInfo] FGSB_Msg_SideSettlement UserInfo
         * @property {string} ActionName FGSB_Msg_SideSettlement ActionName
         */

        /**
         * Constructs a new FGSB_Msg_SideSettlement.
         * @memberof GameMsg_FGSB
         * @classdesc Represents a FGSB_Msg_SideSettlement.
         * @implements IFGSB_Msg_SideSettlement
         * @constructor
         * @param {GameMsg_FGSB.IFGSB_Msg_SideSettlement=} [properties] Properties to set
         */
        function FGSB_Msg_SideSettlement(properties) {
            this.UserInfo=[];
            if (properties)
                for (var keys=Object.keys(properties), i=0; i<keys.length; ++ i)
                    if (properties[keys[i]] != null)
                        this[keys[i]]=properties[keys[i]];
        }

        /**
         * FGSB_Msg_SideSettlement UserInfo.
         * @member {Array.<GameMsg_FGSB.IFGSB_Msg_UserInfo>} UserInfo
         * @memberof GameMsg_FGSB.FGSB_Msg_SideSettlement
         * @instance
         */
        FGSB_Msg_SideSettlement.prototype.UserInfo=$util.emptyArray;

        /**
         * FGSB_Msg_SideSettlement ActionName.
         * @member {string} ActionName
         * @memberof GameMsg_FGSB.FGSB_Msg_SideSettlement
         * @instance
         */
        FGSB_Msg_SideSettlement.prototype.ActionName="";

        /**
         * Creates a new FGSB_Msg_SideSettlement instance using the specified properties.
         * @function create
         * @memberof GameMsg_FGSB.FGSB_Msg_SideSettlement
         * @static
         * @param {GameMsg_FGSB.IFGSB_Msg_SideSettlement=} [properties] Properties to set
         * @returns {GameMsg_FGSB.FGSB_Msg_SideSettlement} FGSB_Msg_SideSettlement instance
         */
        FGSB_Msg_SideSettlement.create=function create(properties) {
            return new FGSB_Msg_SideSettlement(properties);
        };

        /**
         * Encodes the specified FGSB_Msg_SideSettlement message. Does not implicitly {@link GameMsg_FGSB.FGSB_Msg_SideSettlement.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_FGSB.FGSB_Msg_SideSettlement
         * @static
         * @param {GameMsg_FGSB.IFGSB_Msg_SideSettlement} message FGSB_Msg_SideSettlement message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FGSB_Msg_SideSettlement.encode=function encode(message, writer) {
            if (! writer)
                writer=$Writer.create();
            if (message.UserInfo != null && message.UserInfo.length)
                for (var i=0; i<message.UserInfo.length; ++ i)
                    $root.GameMsg_FGSB.FGSB_Msg_UserInfo.encode(message.UserInfo[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.ActionName);
            return writer;
        };

        /**
         * Encodes the specified FGSB_Msg_SideSettlement message, length delimited. Does not implicitly {@link GameMsg_FGSB.FGSB_Msg_SideSettlement.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_FGSB.FGSB_Msg_SideSettlement
         * @static
         * @param {GameMsg_FGSB.IFGSB_Msg_SideSettlement} message FGSB_Msg_SideSettlement message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FGSB_Msg_SideSettlement.encodeDelimited=function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FGSB_Msg_SideSettlement message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_FGSB.FGSB_Msg_SideSettlement
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_FGSB.FGSB_Msg_SideSettlement} FGSB_Msg_SideSettlement
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FGSB_Msg_SideSettlement.decode=function decode(reader, length) {
            if (! (reader instanceof $Reader))
                reader=$Reader.create(reader);
            var end=length === undefined ? reader.len : reader.pos + length, message=new $root.GameMsg_FGSB.FGSB_Msg_SideSettlement();
            while (reader.pos<end) {
                var tag=reader.uint32();
                switch (tag >>> 3) {
                    case 1:
                        if (! (message.UserInfo && message.UserInfo.length))
                            message.UserInfo=[];
                        message.UserInfo.push($root.GameMsg_FGSB.FGSB_Msg_UserInfo.decode(reader, reader.uint32()));
                        break;
                    case 2:
                        message.ActionName=reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                }
            }
            if (! message.hasOwnProperty("ActionName"))
                throw $util.ProtocolError("missing required 'ActionName'", { instance : message });
            return message;
        };

        /**
         * Decodes a FGSB_Msg_SideSettlement message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_FGSB.FGSB_Msg_SideSettlement
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_FGSB.FGSB_Msg_SideSettlement} FGSB_Msg_SideSettlement
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FGSB_Msg_SideSettlement.decodeDelimited=function decodeDelimited(reader) {
            if (! (reader instanceof $Reader))
                reader=new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a FGSB_Msg_SideSettlement message.
         * @function verify
         * @memberof GameMsg_FGSB.FGSB_Msg_SideSettlement
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FGSB_Msg_SideSettlement.verify=function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.UserInfo != null && message.hasOwnProperty("UserInfo")) {
                if (! Array.isArray(message.UserInfo))
                    return "UserInfo: array expected";
                for (var i=0; i<message.UserInfo.length; ++ i) {
                    var error=$root.GameMsg_FGSB.FGSB_Msg_UserInfo.verify(message.UserInfo[i]);
                    if (error)
                        return "UserInfo." + error;
                }
            }
            if (! $util.isString(message.ActionName))
                return "ActionName: string expected";
            return null;
        };

        /**
         * Creates a FGSB_Msg_SideSettlement message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_FGSB.FGSB_Msg_SideSettlement
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_FGSB.FGSB_Msg_SideSettlement} FGSB_Msg_SideSettlement
         */
        FGSB_Msg_SideSettlement.fromObject=function fromObject(object) {
            if (object instanceof $root.GameMsg_FGSB.FGSB_Msg_SideSettlement)
                return object;
            var message=new $root.GameMsg_FGSB.FGSB_Msg_SideSettlement();
            if (object.UserInfo) {
                if (! Array.isArray(object.UserInfo))
                    throw TypeError(".GameMsg_FGSB.FGSB_Msg_SideSettlement.UserInfo: array expected");
                message.UserInfo=[];
                for (var i=0; i<object.UserInfo.length; ++ i) {
                    if (typeof object.UserInfo[i] !== "object")
                        throw TypeError(".GameMsg_FGSB.FGSB_Msg_SideSettlement.UserInfo: object expected");
                    message.UserInfo[i]=$root.GameMsg_FGSB.FGSB_Msg_UserInfo.fromObject(object.UserInfo[i]);
                }
            }
            if (object.ActionName != null)
                message.ActionName=String(object.ActionName);
            return message;
        };

        /**
         * Creates a plain object from a FGSB_Msg_SideSettlement message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_FGSB.FGSB_Msg_SideSettlement
         * @static
         * @param {GameMsg_FGSB.FGSB_Msg_SideSettlement} message FGSB_Msg_SideSettlement
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FGSB_Msg_SideSettlement.toObject=function toObject(message, options) {
            if (! options)
                options={};
            var object={};
            if (options.arrays || options.defaults)
                object.UserInfo=[];
            if (options.defaults)
                object.ActionName="";
            if (message.UserInfo && message.UserInfo.length) {
                object.UserInfo=[];
                for (var j=0; j<message.UserInfo.length; ++ j)
                    object.UserInfo[j]=$root.GameMsg_FGSB.FGSB_Msg_UserInfo.toObject(message.UserInfo[j], options);
            }
            if (message.ActionName != null && message.hasOwnProperty("ActionName"))
                object.ActionName=message.ActionName;
            return object;
        };

        /**
         * Converts this FGSB_Msg_SideSettlement to JSON.
         * @function toJSON
         * @memberof GameMsg_FGSB.FGSB_Msg_SideSettlement
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FGSB_Msg_SideSettlement.prototype.toJSON=function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return FGSB_Msg_SideSettlement;
    })();

    GameMsg_FGSB.FGSB_Msg_DoubleBetStart=(function () {

        /**
         * Properties of a FGSB_Msg_DoubleBetStart.
         * @memberof GameMsg_FGSB
         * @interface IFGSB_Msg_DoubleBetStart
         * @property {number} TimeRemain FGSB_Msg_DoubleBetStart TimeRemain
         */

        /**
         * Constructs a new FGSB_Msg_DoubleBetStart.
         * @memberof GameMsg_FGSB
         * @classdesc Represents a FGSB_Msg_DoubleBetStart.
         * @implements IFGSB_Msg_DoubleBetStart
         * @constructor
         * @param {GameMsg_FGSB.IFGSB_Msg_DoubleBetStart=} [properties] Properties to set
         */
        function FGSB_Msg_DoubleBetStart(properties) {
            if (properties)
                for (var keys=Object.keys(properties), i=0; i<keys.length; ++ i)
                    if (properties[keys[i]] != null)
                        this[keys[i]]=properties[keys[i]];
        }

        /**
         * FGSB_Msg_DoubleBetStart TimeRemain.
         * @member {number} TimeRemain
         * @memberof GameMsg_FGSB.FGSB_Msg_DoubleBetStart
         * @instance
         */
        FGSB_Msg_DoubleBetStart.prototype.TimeRemain=0;

        /**
         * Creates a new FGSB_Msg_DoubleBetStart instance using the specified properties.
         * @function create
         * @memberof GameMsg_FGSB.FGSB_Msg_DoubleBetStart
         * @static
         * @param {GameMsg_FGSB.IFGSB_Msg_DoubleBetStart=} [properties] Properties to set
         * @returns {GameMsg_FGSB.FGSB_Msg_DoubleBetStart} FGSB_Msg_DoubleBetStart instance
         */
        FGSB_Msg_DoubleBetStart.create=function create(properties) {
            return new FGSB_Msg_DoubleBetStart(properties);
        };

        /**
         * Encodes the specified FGSB_Msg_DoubleBetStart message. Does not implicitly {@link GameMsg_FGSB.FGSB_Msg_DoubleBetStart.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_FGSB.FGSB_Msg_DoubleBetStart
         * @static
         * @param {GameMsg_FGSB.IFGSB_Msg_DoubleBetStart} message FGSB_Msg_DoubleBetStart message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FGSB_Msg_DoubleBetStart.encode=function encode(message, writer) {
            if (! writer)
                writer=$Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.TimeRemain);
            return writer;
        };

        /**
         * Encodes the specified FGSB_Msg_DoubleBetStart message, length delimited. Does not implicitly {@link GameMsg_FGSB.FGSB_Msg_DoubleBetStart.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_FGSB.FGSB_Msg_DoubleBetStart
         * @static
         * @param {GameMsg_FGSB.IFGSB_Msg_DoubleBetStart} message FGSB_Msg_DoubleBetStart message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FGSB_Msg_DoubleBetStart.encodeDelimited=function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FGSB_Msg_DoubleBetStart message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_FGSB.FGSB_Msg_DoubleBetStart
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_FGSB.FGSB_Msg_DoubleBetStart} FGSB_Msg_DoubleBetStart
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FGSB_Msg_DoubleBetStart.decode=function decode(reader, length) {
            if (! (reader instanceof $Reader))
                reader=$Reader.create(reader);
            var end=length === undefined ? reader.len : reader.pos + length, message=new $root.GameMsg_FGSB.FGSB_Msg_DoubleBetStart();
            while (reader.pos<end) {
                var tag=reader.uint32();
                switch (tag >>> 3) {
                    case 1:
                        message.TimeRemain=reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                }
            }
            if (! message.hasOwnProperty("TimeRemain"))
                throw $util.ProtocolError("missing required 'TimeRemain'", { instance : message });
            return message;
        };

        /**
         * Decodes a FGSB_Msg_DoubleBetStart message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_FGSB.FGSB_Msg_DoubleBetStart
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_FGSB.FGSB_Msg_DoubleBetStart} FGSB_Msg_DoubleBetStart
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FGSB_Msg_DoubleBetStart.decodeDelimited=function decodeDelimited(reader) {
            if (! (reader instanceof $Reader))
                reader=new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a FGSB_Msg_DoubleBetStart message.
         * @function verify
         * @memberof GameMsg_FGSB.FGSB_Msg_DoubleBetStart
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FGSB_Msg_DoubleBetStart.verify=function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (! $util.isInteger(message.TimeRemain))
                return "TimeRemain: integer expected";
            return null;
        };

        /**
         * Creates a FGSB_Msg_DoubleBetStart message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_FGSB.FGSB_Msg_DoubleBetStart
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_FGSB.FGSB_Msg_DoubleBetStart} FGSB_Msg_DoubleBetStart
         */
        FGSB_Msg_DoubleBetStart.fromObject=function fromObject(object) {
            if (object instanceof $root.GameMsg_FGSB.FGSB_Msg_DoubleBetStart)
                return object;
            var message=new $root.GameMsg_FGSB.FGSB_Msg_DoubleBetStart();
            if (object.TimeRemain != null)
                message.TimeRemain=object.TimeRemain | 0;
            return message;
        };

        /**
         * Creates a plain object from a FGSB_Msg_DoubleBetStart message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_FGSB.FGSB_Msg_DoubleBetStart
         * @static
         * @param {GameMsg_FGSB.FGSB_Msg_DoubleBetStart} message FGSB_Msg_DoubleBetStart
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FGSB_Msg_DoubleBetStart.toObject=function toObject(message, options) {
            if (! options)
                options={};
            var object={};
            if (options.defaults)
                object.TimeRemain=0;
            if (message.TimeRemain != null && message.hasOwnProperty("TimeRemain"))
                object.TimeRemain=message.TimeRemain;
            return object;
        };

        /**
         * Converts this FGSB_Msg_DoubleBetStart to JSON.
         * @function toJSON
         * @memberof GameMsg_FGSB.FGSB_Msg_DoubleBetStart
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FGSB_Msg_DoubleBetStart.prototype.toJSON=function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return FGSB_Msg_DoubleBetStart;
    })();

    GameMsg_FGSB.FGSB_Msg_DoubleBetResult=(function () {

        /**
         * Properties of a FGSB_Msg_DoubleBetResult.
         * @memberof GameMsg_FGSB
         * @interface IFGSB_Msg_DoubleBetResult
         * @property {number} SeatNo FGSB_Msg_DoubleBetResult SeatNo
         * @property {number|Long} MoneyRemain FGSB_Msg_DoubleBetResult MoneyRemain
         * @property {number} Result FGSB_Msg_DoubleBetResult Result
         * @property {number|Long} Bet FGSB_Msg_DoubleBetResult Bet
         */

        /**
         * Constructs a new FGSB_Msg_DoubleBetResult.
         * @memberof GameMsg_FGSB
         * @classdesc Represents a FGSB_Msg_DoubleBetResult.
         * @implements IFGSB_Msg_DoubleBetResult
         * @constructor
         * @param {GameMsg_FGSB.IFGSB_Msg_DoubleBetResult=} [properties] Properties to set
         */
        function FGSB_Msg_DoubleBetResult(properties) {
            if (properties)
                for (var keys=Object.keys(properties), i=0; i<keys.length; ++ i)
                    if (properties[keys[i]] != null)
                        this[keys[i]]=properties[keys[i]];
        }

        /**
         * FGSB_Msg_DoubleBetResult SeatNo.
         * @member {number} SeatNo
         * @memberof GameMsg_FGSB.FGSB_Msg_DoubleBetResult
         * @instance
         */
        FGSB_Msg_DoubleBetResult.prototype.SeatNo=0;

        /**
         * FGSB_Msg_DoubleBetResult MoneyRemain.
         * @member {number|Long} MoneyRemain
         * @memberof GameMsg_FGSB.FGSB_Msg_DoubleBetResult
         * @instance
         */
        FGSB_Msg_DoubleBetResult.prototype.MoneyRemain=$util.Long ? $util.Long.fromBits(0, 0, false) : 0;

        /**
         * FGSB_Msg_DoubleBetResult Result.
         * @member {number} Result
         * @memberof GameMsg_FGSB.FGSB_Msg_DoubleBetResult
         * @instance
         */
        FGSB_Msg_DoubleBetResult.prototype.Result=0;

        /**
         * FGSB_Msg_DoubleBetResult Bet.
         * @member {number|Long} Bet
         * @memberof GameMsg_FGSB.FGSB_Msg_DoubleBetResult
         * @instance
         */
        FGSB_Msg_DoubleBetResult.prototype.Bet=$util.Long ? $util.Long.fromBits(0, 0, false) : 0;

        /**
         * Creates a new FGSB_Msg_DoubleBetResult instance using the specified properties.
         * @function create
         * @memberof GameMsg_FGSB.FGSB_Msg_DoubleBetResult
         * @static
         * @param {GameMsg_FGSB.IFGSB_Msg_DoubleBetResult=} [properties] Properties to set
         * @returns {GameMsg_FGSB.FGSB_Msg_DoubleBetResult} FGSB_Msg_DoubleBetResult instance
         */
        FGSB_Msg_DoubleBetResult.create=function create(properties) {
            return new FGSB_Msg_DoubleBetResult(properties);
        };

        /**
         * Encodes the specified FGSB_Msg_DoubleBetResult message. Does not implicitly {@link GameMsg_FGSB.FGSB_Msg_DoubleBetResult.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_FGSB.FGSB_Msg_DoubleBetResult
         * @static
         * @param {GameMsg_FGSB.IFGSB_Msg_DoubleBetResult} message FGSB_Msg_DoubleBetResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FGSB_Msg_DoubleBetResult.encode=function encode(message, writer) {
            if (! writer)
                writer=$Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.SeatNo);
            writer.uint32(/* id 2, wireType 0 =*/16).int64(message.MoneyRemain);
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.Result);
            writer.uint32(/* id 4, wireType 0 =*/32).int64(message.Bet);
            return writer;
        };

        /**
         * Encodes the specified FGSB_Msg_DoubleBetResult message, length delimited. Does not implicitly {@link GameMsg_FGSB.FGSB_Msg_DoubleBetResult.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_FGSB.FGSB_Msg_DoubleBetResult
         * @static
         * @param {GameMsg_FGSB.IFGSB_Msg_DoubleBetResult} message FGSB_Msg_DoubleBetResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FGSB_Msg_DoubleBetResult.encodeDelimited=function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FGSB_Msg_DoubleBetResult message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_FGSB.FGSB_Msg_DoubleBetResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_FGSB.FGSB_Msg_DoubleBetResult} FGSB_Msg_DoubleBetResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FGSB_Msg_DoubleBetResult.decode=function decode(reader, length) {
            if (! (reader instanceof $Reader))
                reader=$Reader.create(reader);
            var end=length === undefined ? reader.len : reader.pos + length, message=new $root.GameMsg_FGSB.FGSB_Msg_DoubleBetResult();
            while (reader.pos<end) {
                var tag=reader.uint32();
                switch (tag >>> 3) {
                    case 1:
                        message.SeatNo=reader.int32();
                        break;
                    case 2:
                        message.MoneyRemain=reader.int64();
                        break;
                    case 3:
                        message.Result=reader.int32();
                        break;
                    case 4:
                        message.Bet=reader.int64();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                }
            }
            if (! message.hasOwnProperty("SeatNo"))
                throw $util.ProtocolError("missing required 'SeatNo'", { instance : message });
            if (! message.hasOwnProperty("MoneyRemain"))
                throw $util.ProtocolError("missing required 'MoneyRemain'", { instance : message });
            if (! message.hasOwnProperty("Result"))
                throw $util.ProtocolError("missing required 'Result'", { instance : message });
            if (! message.hasOwnProperty("Bet"))
                throw $util.ProtocolError("missing required 'Bet'", { instance : message });
            return message;
        };

        /**
         * Decodes a FGSB_Msg_DoubleBetResult message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_FGSB.FGSB_Msg_DoubleBetResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_FGSB.FGSB_Msg_DoubleBetResult} FGSB_Msg_DoubleBetResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FGSB_Msg_DoubleBetResult.decodeDelimited=function decodeDelimited(reader) {
            if (! (reader instanceof $Reader))
                reader=new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a FGSB_Msg_DoubleBetResult message.
         * @function verify
         * @memberof GameMsg_FGSB.FGSB_Msg_DoubleBetResult
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FGSB_Msg_DoubleBetResult.verify=function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (! $util.isInteger(message.SeatNo))
                return "SeatNo: integer expected";
            if (! $util.isInteger(message.MoneyRemain) && ! (message.MoneyRemain && $util.isInteger(message.MoneyRemain.low) && $util.isInteger(message.MoneyRemain.high)))
                return "MoneyRemain: integer|Long expected";
            if (! $util.isInteger(message.Result))
                return "Result: integer expected";
            if (! $util.isInteger(message.Bet) && ! (message.Bet && $util.isInteger(message.Bet.low) && $util.isInteger(message.Bet.high)))
                return "Bet: integer|Long expected";
            return null;
        };

        /**
         * Creates a FGSB_Msg_DoubleBetResult message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_FGSB.FGSB_Msg_DoubleBetResult
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_FGSB.FGSB_Msg_DoubleBetResult} FGSB_Msg_DoubleBetResult
         */
        FGSB_Msg_DoubleBetResult.fromObject=function fromObject(object) {
            if (object instanceof $root.GameMsg_FGSB.FGSB_Msg_DoubleBetResult)
                return object;
            var message=new $root.GameMsg_FGSB.FGSB_Msg_DoubleBetResult();
            if (object.SeatNo != null)
                message.SeatNo=object.SeatNo | 0;
            if (object.MoneyRemain != null)
                if ($util.Long)
                    (message.MoneyRemain=$util.Long.fromValue(object.MoneyRemain)).unsigned=false;
                else if (typeof object.MoneyRemain === "string")
                    message.MoneyRemain=parseInt(object.MoneyRemain, 10);
                else if (typeof object.MoneyRemain === "number")
                    message.MoneyRemain=object.MoneyRemain;
                else if (typeof object.MoneyRemain === "object")
                    message.MoneyRemain=new $util.LongBits(object.MoneyRemain.low >>> 0, object.MoneyRemain.high >>> 0).toNumber();
            if (object.Result != null)
                message.Result=object.Result | 0;
            if (object.Bet != null)
                if ($util.Long)
                    (message.Bet=$util.Long.fromValue(object.Bet)).unsigned=false;
                else if (typeof object.Bet === "string")
                    message.Bet=parseInt(object.Bet, 10);
                else if (typeof object.Bet === "number")
                    message.Bet=object.Bet;
                else if (typeof object.Bet === "object")
                    message.Bet=new $util.LongBits(object.Bet.low >>> 0, object.Bet.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a FGSB_Msg_DoubleBetResult message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_FGSB.FGSB_Msg_DoubleBetResult
         * @static
         * @param {GameMsg_FGSB.FGSB_Msg_DoubleBetResult} message FGSB_Msg_DoubleBetResult
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FGSB_Msg_DoubleBetResult.toObject=function toObject(message, options) {
            if (! options)
                options={};
            var object={};
            if (options.defaults) {
                object.SeatNo=0;
                if ($util.Long) {
                    var long=new $util.Long(0, 0, false);
                    object.MoneyRemain=options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.MoneyRemain=options.longs === String ? "0" : 0;
                object.Result=0;
                if ($util.Long) {
                    var long=new $util.Long(0, 0, false);
                    object.Bet=options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.Bet=options.longs === String ? "0" : 0;
            }
            if (message.SeatNo != null && message.hasOwnProperty("SeatNo"))
                object.SeatNo=message.SeatNo;
            if (message.MoneyRemain != null && message.hasOwnProperty("MoneyRemain"))
                if (typeof message.MoneyRemain === "number")
                    object.MoneyRemain=options.longs === String ? String(message.MoneyRemain) : message.MoneyRemain;
                else
                    object.MoneyRemain=options.longs === String ? $util.Long.prototype.toString.call(message.MoneyRemain) : options.longs === Number ? new $util.LongBits(message.MoneyRemain.low >>> 0, message.MoneyRemain.high >>> 0).toNumber() : message.MoneyRemain;
            if (message.Result != null && message.hasOwnProperty("Result"))
                object.Result=message.Result;
            if (message.Bet != null && message.hasOwnProperty("Bet"))
                if (typeof message.Bet === "number")
                    object.Bet=options.longs === String ? String(message.Bet) : message.Bet;
                else
                    object.Bet=options.longs === String ? $util.Long.prototype.toString.call(message.Bet) : options.longs === Number ? new $util.LongBits(message.Bet.low >>> 0, message.Bet.high >>> 0).toNumber() : message.Bet;
            return object;
        };

        /**
         * Converts this FGSB_Msg_DoubleBetResult to JSON.
         * @function toJSON
         * @memberof GameMsg_FGSB.FGSB_Msg_DoubleBetResult
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FGSB_Msg_DoubleBetResult.prototype.toJSON=function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return FGSB_Msg_DoubleBetResult;
    })();

    GameMsg_FGSB.FGSB_Msg_Settlement=(function () {

        /**
         * Properties of a FGSB_Msg_Settlement.
         * @memberof GameMsg_FGSB
         * @interface IFGSB_Msg_Settlement
         * @property {GameMsg_FGSB.IFGSB_Msg_UserCards} BankerCards FGSB_Msg_Settlement BankerCards
         * @property {Array.<GameMsg_FGSB.IFGSB_Msg_UserInfo>|null} [UserInfo] FGSB_Msg_Settlement UserInfo
         * @property {string} ActionName FGSB_Msg_Settlement ActionName
         */

        /**
         * Constructs a new FGSB_Msg_Settlement.
         * @memberof GameMsg_FGSB
         * @classdesc Represents a FGSB_Msg_Settlement.
         * @implements IFGSB_Msg_Settlement
         * @constructor
         * @param {GameMsg_FGSB.IFGSB_Msg_Settlement=} [properties] Properties to set
         */
        function FGSB_Msg_Settlement(properties) {
            this.UserInfo=[];
            if (properties)
                for (var keys=Object.keys(properties), i=0; i<keys.length; ++ i)
                    if (properties[keys[i]] != null)
                        this[keys[i]]=properties[keys[i]];
        }

        /**
         * FGSB_Msg_Settlement BankerCards.
         * @member {GameMsg_FGSB.IFGSB_Msg_UserCards} BankerCards
         * @memberof GameMsg_FGSB.FGSB_Msg_Settlement
         * @instance
         */
        FGSB_Msg_Settlement.prototype.BankerCards=null;

        /**
         * FGSB_Msg_Settlement UserInfo.
         * @member {Array.<GameMsg_FGSB.IFGSB_Msg_UserInfo>} UserInfo
         * @memberof GameMsg_FGSB.FGSB_Msg_Settlement
         * @instance
         */
        FGSB_Msg_Settlement.prototype.UserInfo=$util.emptyArray;

        /**
         * FGSB_Msg_Settlement ActionName.
         * @member {string} ActionName
         * @memberof GameMsg_FGSB.FGSB_Msg_Settlement
         * @instance
         */
        FGSB_Msg_Settlement.prototype.ActionName="";

        /**
         * Creates a new FGSB_Msg_Settlement instance using the specified properties.
         * @function create
         * @memberof GameMsg_FGSB.FGSB_Msg_Settlement
         * @static
         * @param {GameMsg_FGSB.IFGSB_Msg_Settlement=} [properties] Properties to set
         * @returns {GameMsg_FGSB.FGSB_Msg_Settlement} FGSB_Msg_Settlement instance
         */
        FGSB_Msg_Settlement.create=function create(properties) {
            return new FGSB_Msg_Settlement(properties);
        };

        /**
         * Encodes the specified FGSB_Msg_Settlement message. Does not implicitly {@link GameMsg_FGSB.FGSB_Msg_Settlement.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_FGSB.FGSB_Msg_Settlement
         * @static
         * @param {GameMsg_FGSB.IFGSB_Msg_Settlement} message FGSB_Msg_Settlement message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FGSB_Msg_Settlement.encode=function encode(message, writer) {
            if (! writer)
                writer=$Writer.create();
            $root.GameMsg_FGSB.FGSB_Msg_UserCards.encode(message.BankerCards, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.UserInfo != null && message.UserInfo.length)
                for (var i=0; i<message.UserInfo.length; ++ i)
                    $root.GameMsg_FGSB.FGSB_Msg_UserInfo.encode(message.UserInfo[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.ActionName);
            return writer;
        };

        /**
         * Encodes the specified FGSB_Msg_Settlement message, length delimited. Does not implicitly {@link GameMsg_FGSB.FGSB_Msg_Settlement.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_FGSB.FGSB_Msg_Settlement
         * @static
         * @param {GameMsg_FGSB.IFGSB_Msg_Settlement} message FGSB_Msg_Settlement message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FGSB_Msg_Settlement.encodeDelimited=function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FGSB_Msg_Settlement message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_FGSB.FGSB_Msg_Settlement
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_FGSB.FGSB_Msg_Settlement} FGSB_Msg_Settlement
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FGSB_Msg_Settlement.decode=function decode(reader, length) {
            if (! (reader instanceof $Reader))
                reader=$Reader.create(reader);
            var end=length === undefined ? reader.len : reader.pos + length, message=new $root.GameMsg_FGSB.FGSB_Msg_Settlement();
            while (reader.pos<end) {
                var tag=reader.uint32();
                switch (tag >>> 3) {
                    case 1:
                        message.BankerCards=$root.GameMsg_FGSB.FGSB_Msg_UserCards.decode(reader, reader.uint32());
                        break;
                    case 2:
                        if (! (message.UserInfo && message.UserInfo.length))
                            message.UserInfo=[];
                        message.UserInfo.push($root.GameMsg_FGSB.FGSB_Msg_UserInfo.decode(reader, reader.uint32()));
                        break;
                    case 3:
                        message.ActionName=reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                }
            }
            if (! message.hasOwnProperty("BankerCards"))
                throw $util.ProtocolError("missing required 'BankerCards'", { instance : message });
            if (! message.hasOwnProperty("ActionName"))
                throw $util.ProtocolError("missing required 'ActionName'", { instance : message });
            return message;
        };

        /**
         * Decodes a FGSB_Msg_Settlement message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_FGSB.FGSB_Msg_Settlement
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_FGSB.FGSB_Msg_Settlement} FGSB_Msg_Settlement
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FGSB_Msg_Settlement.decodeDelimited=function decodeDelimited(reader) {
            if (! (reader instanceof $Reader))
                reader=new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a FGSB_Msg_Settlement message.
         * @function verify
         * @memberof GameMsg_FGSB.FGSB_Msg_Settlement
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FGSB_Msg_Settlement.verify=function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            {
                var error=$root.GameMsg_FGSB.FGSB_Msg_UserCards.verify(message.BankerCards);
                if (error)
                    return "BankerCards." + error;
            }
            if (message.UserInfo != null && message.hasOwnProperty("UserInfo")) {
                if (! Array.isArray(message.UserInfo))
                    return "UserInfo: array expected";
                for (var i=0; i<message.UserInfo.length; ++ i) {
                    var error=$root.GameMsg_FGSB.FGSB_Msg_UserInfo.verify(message.UserInfo[i]);
                    if (error)
                        return "UserInfo." + error;
                }
            }
            if (! $util.isString(message.ActionName))
                return "ActionName: string expected";
            return null;
        };

        /**
         * Creates a FGSB_Msg_Settlement message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_FGSB.FGSB_Msg_Settlement
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_FGSB.FGSB_Msg_Settlement} FGSB_Msg_Settlement
         */
        FGSB_Msg_Settlement.fromObject=function fromObject(object) {
            if (object instanceof $root.GameMsg_FGSB.FGSB_Msg_Settlement)
                return object;
            var message=new $root.GameMsg_FGSB.FGSB_Msg_Settlement();
            if (object.BankerCards != null) {
                if (typeof object.BankerCards !== "object")
                    throw TypeError(".GameMsg_FGSB.FGSB_Msg_Settlement.BankerCards: object expected");
                message.BankerCards=$root.GameMsg_FGSB.FGSB_Msg_UserCards.fromObject(object.BankerCards);
            }
            if (object.UserInfo) {
                if (! Array.isArray(object.UserInfo))
                    throw TypeError(".GameMsg_FGSB.FGSB_Msg_Settlement.UserInfo: array expected");
                message.UserInfo=[];
                for (var i=0; i<object.UserInfo.length; ++ i) {
                    if (typeof object.UserInfo[i] !== "object")
                        throw TypeError(".GameMsg_FGSB.FGSB_Msg_Settlement.UserInfo: object expected");
                    message.UserInfo[i]=$root.GameMsg_FGSB.FGSB_Msg_UserInfo.fromObject(object.UserInfo[i]);
                }
            }
            if (object.ActionName != null)
                message.ActionName=String(object.ActionName);
            return message;
        };

        /**
         * Creates a plain object from a FGSB_Msg_Settlement message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_FGSB.FGSB_Msg_Settlement
         * @static
         * @param {GameMsg_FGSB.FGSB_Msg_Settlement} message FGSB_Msg_Settlement
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FGSB_Msg_Settlement.toObject=function toObject(message, options) {
            if (! options)
                options={};
            var object={};
            if (options.arrays || options.defaults)
                object.UserInfo=[];
            if (options.defaults) {
                object.BankerCards=null;
                object.ActionName="";
            }
            if (message.BankerCards != null && message.hasOwnProperty("BankerCards"))
                object.BankerCards=$root.GameMsg_FGSB.FGSB_Msg_UserCards.toObject(message.BankerCards, options);
            if (message.UserInfo && message.UserInfo.length) {
                object.UserInfo=[];
                for (var j=0; j<message.UserInfo.length; ++ j)
                    object.UserInfo[j]=$root.GameMsg_FGSB.FGSB_Msg_UserInfo.toObject(message.UserInfo[j], options);
            }
            if (message.ActionName != null && message.hasOwnProperty("ActionName"))
                object.ActionName=message.ActionName;
            return object;
        };

        /**
         * Converts this FGSB_Msg_Settlement to JSON.
         * @function toJSON
         * @memberof GameMsg_FGSB.FGSB_Msg_Settlement
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FGSB_Msg_Settlement.prototype.toJSON=function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return FGSB_Msg_Settlement;
    })();

    GameMsg_FGSB.FGSB_Msg_SelectSeat=(function () {

        /**
         * Properties of a FGSB_Msg_SelectSeat.
         * @memberof GameMsg_FGSB
         * @interface IFGSB_Msg_SelectSeat
         * @property {number} SeatNo FGSB_Msg_SelectSeat SeatNo
         */

        /**
         * Constructs a new FGSB_Msg_SelectSeat.
         * @memberof GameMsg_FGSB
         * @classdesc Represents a FGSB_Msg_SelectSeat.
         * @implements IFGSB_Msg_SelectSeat
         * @constructor
         * @param {GameMsg_FGSB.IFGSB_Msg_SelectSeat=} [properties] Properties to set
         */
        function FGSB_Msg_SelectSeat(properties) {
            if (properties)
                for (var keys=Object.keys(properties), i=0; i<keys.length; ++ i)
                    if (properties[keys[i]] != null)
                        this[keys[i]]=properties[keys[i]];
        }

        /**
         * FGSB_Msg_SelectSeat SeatNo.
         * @member {number} SeatNo
         * @memberof GameMsg_FGSB.FGSB_Msg_SelectSeat
         * @instance
         */
        FGSB_Msg_SelectSeat.prototype.SeatNo=0;

        /**
         * Creates a new FGSB_Msg_SelectSeat instance using the specified properties.
         * @function create
         * @memberof GameMsg_FGSB.FGSB_Msg_SelectSeat
         * @static
         * @param {GameMsg_FGSB.IFGSB_Msg_SelectSeat=} [properties] Properties to set
         * @returns {GameMsg_FGSB.FGSB_Msg_SelectSeat} FGSB_Msg_SelectSeat instance
         */
        FGSB_Msg_SelectSeat.create=function create(properties) {
            return new FGSB_Msg_SelectSeat(properties);
        };

        /**
         * Encodes the specified FGSB_Msg_SelectSeat message. Does not implicitly {@link GameMsg_FGSB.FGSB_Msg_SelectSeat.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_FGSB.FGSB_Msg_SelectSeat
         * @static
         * @param {GameMsg_FGSB.IFGSB_Msg_SelectSeat} message FGSB_Msg_SelectSeat message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FGSB_Msg_SelectSeat.encode=function encode(message, writer) {
            if (! writer)
                writer=$Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.SeatNo);
            return writer;
        };

        /**
         * Encodes the specified FGSB_Msg_SelectSeat message, length delimited. Does not implicitly {@link GameMsg_FGSB.FGSB_Msg_SelectSeat.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_FGSB.FGSB_Msg_SelectSeat
         * @static
         * @param {GameMsg_FGSB.IFGSB_Msg_SelectSeat} message FGSB_Msg_SelectSeat message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FGSB_Msg_SelectSeat.encodeDelimited=function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FGSB_Msg_SelectSeat message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_FGSB.FGSB_Msg_SelectSeat
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_FGSB.FGSB_Msg_SelectSeat} FGSB_Msg_SelectSeat
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FGSB_Msg_SelectSeat.decode=function decode(reader, length) {
            if (! (reader instanceof $Reader))
                reader=$Reader.create(reader);
            var end=length === undefined ? reader.len : reader.pos + length, message=new $root.GameMsg_FGSB.FGSB_Msg_SelectSeat();
            while (reader.pos<end) {
                var tag=reader.uint32();
                switch (tag >>> 3) {
                    case 1:
                        message.SeatNo=reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                }
            }
            if (! message.hasOwnProperty("SeatNo"))
                throw $util.ProtocolError("missing required 'SeatNo'", { instance : message });
            return message;
        };

        /**
         * Decodes a FGSB_Msg_SelectSeat message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_FGSB.FGSB_Msg_SelectSeat
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_FGSB.FGSB_Msg_SelectSeat} FGSB_Msg_SelectSeat
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FGSB_Msg_SelectSeat.decodeDelimited=function decodeDelimited(reader) {
            if (! (reader instanceof $Reader))
                reader=new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a FGSB_Msg_SelectSeat message.
         * @function verify
         * @memberof GameMsg_FGSB.FGSB_Msg_SelectSeat
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FGSB_Msg_SelectSeat.verify=function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (! $util.isInteger(message.SeatNo))
                return "SeatNo: integer expected";
            return null;
        };

        /**
         * Creates a FGSB_Msg_SelectSeat message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_FGSB.FGSB_Msg_SelectSeat
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_FGSB.FGSB_Msg_SelectSeat} FGSB_Msg_SelectSeat
         */
        FGSB_Msg_SelectSeat.fromObject=function fromObject(object) {
            if (object instanceof $root.GameMsg_FGSB.FGSB_Msg_SelectSeat)
                return object;
            var message=new $root.GameMsg_FGSB.FGSB_Msg_SelectSeat();
            if (object.SeatNo != null)
                message.SeatNo=object.SeatNo | 0;
            return message;
        };

        /**
         * Creates a plain object from a FGSB_Msg_SelectSeat message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_FGSB.FGSB_Msg_SelectSeat
         * @static
         * @param {GameMsg_FGSB.FGSB_Msg_SelectSeat} message FGSB_Msg_SelectSeat
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FGSB_Msg_SelectSeat.toObject=function toObject(message, options) {
            if (! options)
                options={};
            var object={};
            if (options.defaults)
                object.SeatNo=0;
            if (message.SeatNo != null && message.hasOwnProperty("SeatNo"))
                object.SeatNo=message.SeatNo;
            return object;
        };

        /**
         * Converts this FGSB_Msg_SelectSeat to JSON.
         * @function toJSON
         * @memberof GameMsg_FGSB.FGSB_Msg_SelectSeat
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FGSB_Msg_SelectSeat.prototype.toJSON=function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return FGSB_Msg_SelectSeat;
    })();

    GameMsg_FGSB.FGSB_Msg_SelectSeat_OK=(function () {

        /**
         * Properties of a FGSB_Msg_SelectSeat_OK.
         * @memberof GameMsg_FGSB
         * @interface IFGSB_Msg_SelectSeat_OK
         * @property {number} SeatNo FGSB_Msg_SelectSeat_OK SeatNo
         * @property {number} Result FGSB_Msg_SelectSeat_OK Result
         */

        /**
         * Constructs a new FGSB_Msg_SelectSeat_OK.
         * @memberof GameMsg_FGSB
         * @classdesc Represents a FGSB_Msg_SelectSeat_OK.
         * @implements IFGSB_Msg_SelectSeat_OK
         * @constructor
         * @param {GameMsg_FGSB.IFGSB_Msg_SelectSeat_OK=} [properties] Properties to set
         */
        function FGSB_Msg_SelectSeat_OK(properties) {
            if (properties)
                for (var keys=Object.keys(properties), i=0; i<keys.length; ++ i)
                    if (properties[keys[i]] != null)
                        this[keys[i]]=properties[keys[i]];
        }

        /**
         * FGSB_Msg_SelectSeat_OK SeatNo.
         * @member {number} SeatNo
         * @memberof GameMsg_FGSB.FGSB_Msg_SelectSeat_OK
         * @instance
         */
        FGSB_Msg_SelectSeat_OK.prototype.SeatNo=0;

        /**
         * FGSB_Msg_SelectSeat_OK Result.
         * @member {number} Result
         * @memberof GameMsg_FGSB.FGSB_Msg_SelectSeat_OK
         * @instance
         */
        FGSB_Msg_SelectSeat_OK.prototype.Result=0;

        /**
         * Creates a new FGSB_Msg_SelectSeat_OK instance using the specified properties.
         * @function create
         * @memberof GameMsg_FGSB.FGSB_Msg_SelectSeat_OK
         * @static
         * @param {GameMsg_FGSB.IFGSB_Msg_SelectSeat_OK=} [properties] Properties to set
         * @returns {GameMsg_FGSB.FGSB_Msg_SelectSeat_OK} FGSB_Msg_SelectSeat_OK instance
         */
        FGSB_Msg_SelectSeat_OK.create=function create(properties) {
            return new FGSB_Msg_SelectSeat_OK(properties);
        };

        /**
         * Encodes the specified FGSB_Msg_SelectSeat_OK message. Does not implicitly {@link GameMsg_FGSB.FGSB_Msg_SelectSeat_OK.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_FGSB.FGSB_Msg_SelectSeat_OK
         * @static
         * @param {GameMsg_FGSB.IFGSB_Msg_SelectSeat_OK} message FGSB_Msg_SelectSeat_OK message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FGSB_Msg_SelectSeat_OK.encode=function encode(message, writer) {
            if (! writer)
                writer=$Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.SeatNo);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.Result);
            return writer;
        };

        /**
         * Encodes the specified FGSB_Msg_SelectSeat_OK message, length delimited. Does not implicitly {@link GameMsg_FGSB.FGSB_Msg_SelectSeat_OK.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_FGSB.FGSB_Msg_SelectSeat_OK
         * @static
         * @param {GameMsg_FGSB.IFGSB_Msg_SelectSeat_OK} message FGSB_Msg_SelectSeat_OK message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FGSB_Msg_SelectSeat_OK.encodeDelimited=function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FGSB_Msg_SelectSeat_OK message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_FGSB.FGSB_Msg_SelectSeat_OK
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_FGSB.FGSB_Msg_SelectSeat_OK} FGSB_Msg_SelectSeat_OK
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FGSB_Msg_SelectSeat_OK.decode=function decode(reader, length) {
            if (! (reader instanceof $Reader))
                reader=$Reader.create(reader);
            var end=length === undefined ? reader.len : reader.pos + length, message=new $root.GameMsg_FGSB.FGSB_Msg_SelectSeat_OK();
            while (reader.pos<end) {
                var tag=reader.uint32();
                switch (tag >>> 3) {
                    case 1:
                        message.SeatNo=reader.int32();
                        break;
                    case 2:
                        message.Result=reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                }
            }
            if (! message.hasOwnProperty("SeatNo"))
                throw $util.ProtocolError("missing required 'SeatNo'", { instance : message });
            if (! message.hasOwnProperty("Result"))
                throw $util.ProtocolError("missing required 'Result'", { instance : message });
            return message;
        };

        /**
         * Decodes a FGSB_Msg_SelectSeat_OK message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_FGSB.FGSB_Msg_SelectSeat_OK
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_FGSB.FGSB_Msg_SelectSeat_OK} FGSB_Msg_SelectSeat_OK
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FGSB_Msg_SelectSeat_OK.decodeDelimited=function decodeDelimited(reader) {
            if (! (reader instanceof $Reader))
                reader=new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a FGSB_Msg_SelectSeat_OK message.
         * @function verify
         * @memberof GameMsg_FGSB.FGSB_Msg_SelectSeat_OK
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FGSB_Msg_SelectSeat_OK.verify=function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (! $util.isInteger(message.SeatNo))
                return "SeatNo: integer expected";
            if (! $util.isInteger(message.Result))
                return "Result: integer expected";
            return null;
        };

        /**
         * Creates a FGSB_Msg_SelectSeat_OK message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_FGSB.FGSB_Msg_SelectSeat_OK
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_FGSB.FGSB_Msg_SelectSeat_OK} FGSB_Msg_SelectSeat_OK
         */
        FGSB_Msg_SelectSeat_OK.fromObject=function fromObject(object) {
            if (object instanceof $root.GameMsg_FGSB.FGSB_Msg_SelectSeat_OK)
                return object;
            var message=new $root.GameMsg_FGSB.FGSB_Msg_SelectSeat_OK();
            if (object.SeatNo != null)
                message.SeatNo=object.SeatNo | 0;
            if (object.Result != null)
                message.Result=object.Result | 0;
            return message;
        };

        /**
         * Creates a plain object from a FGSB_Msg_SelectSeat_OK message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_FGSB.FGSB_Msg_SelectSeat_OK
         * @static
         * @param {GameMsg_FGSB.FGSB_Msg_SelectSeat_OK} message FGSB_Msg_SelectSeat_OK
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FGSB_Msg_SelectSeat_OK.toObject=function toObject(message, options) {
            if (! options)
                options={};
            var object={};
            if (options.defaults) {
                object.SeatNo=0;
                object.Result=0;
            }
            if (message.SeatNo != null && message.hasOwnProperty("SeatNo"))
                object.SeatNo=message.SeatNo;
            if (message.Result != null && message.hasOwnProperty("Result"))
                object.Result=message.Result;
            return object;
        };

        /**
         * Converts this FGSB_Msg_SelectSeat_OK to JSON.
         * @function toJSON
         * @memberof GameMsg_FGSB.FGSB_Msg_SelectSeat_OK
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FGSB_Msg_SelectSeat_OK.prototype.toJSON=function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return FGSB_Msg_SelectSeat_OK;
    })();

    GameMsg_FGSB.FGSB_Msg_KickTip=(function () {

        /**
         * Properties of a FGSB_Msg_KickTip.
         * @memberof GameMsg_FGSB
         * @interface IFGSB_Msg_KickTip
         * @property {number} Time FGSB_Msg_KickTip Time
         * @property {number} Round FGSB_Msg_KickTip Round
         */

        /**
         * Constructs a new FGSB_Msg_KickTip.
         * @memberof GameMsg_FGSB
         * @classdesc Represents a FGSB_Msg_KickTip.
         * @implements IFGSB_Msg_KickTip
         * @constructor
         * @param {GameMsg_FGSB.IFGSB_Msg_KickTip=} [properties] Properties to set
         */
        function FGSB_Msg_KickTip(properties) {
            if (properties)
                for (var keys=Object.keys(properties), i=0; i<keys.length; ++ i)
                    if (properties[keys[i]] != null)
                        this[keys[i]]=properties[keys[i]];
        }

        /**
         * FGSB_Msg_KickTip Time.
         * @member {number} Time
         * @memberof GameMsg_FGSB.FGSB_Msg_KickTip
         * @instance
         */
        FGSB_Msg_KickTip.prototype.Time=0;

        /**
         * FGSB_Msg_KickTip Round.
         * @member {number} Round
         * @memberof GameMsg_FGSB.FGSB_Msg_KickTip
         * @instance
         */
        FGSB_Msg_KickTip.prototype.Round=0;

        /**
         * Creates a new FGSB_Msg_KickTip instance using the specified properties.
         * @function create
         * @memberof GameMsg_FGSB.FGSB_Msg_KickTip
         * @static
         * @param {GameMsg_FGSB.IFGSB_Msg_KickTip=} [properties] Properties to set
         * @returns {GameMsg_FGSB.FGSB_Msg_KickTip} FGSB_Msg_KickTip instance
         */
        FGSB_Msg_KickTip.create=function create(properties) {
            return new FGSB_Msg_KickTip(properties);
        };

        /**
         * Encodes the specified FGSB_Msg_KickTip message. Does not implicitly {@link GameMsg_FGSB.FGSB_Msg_KickTip.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_FGSB.FGSB_Msg_KickTip
         * @static
         * @param {GameMsg_FGSB.IFGSB_Msg_KickTip} message FGSB_Msg_KickTip message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FGSB_Msg_KickTip.encode=function encode(message, writer) {
            if (! writer)
                writer=$Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.Time);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.Round);
            return writer;
        };

        /**
         * Encodes the specified FGSB_Msg_KickTip message, length delimited. Does not implicitly {@link GameMsg_FGSB.FGSB_Msg_KickTip.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_FGSB.FGSB_Msg_KickTip
         * @static
         * @param {GameMsg_FGSB.IFGSB_Msg_KickTip} message FGSB_Msg_KickTip message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FGSB_Msg_KickTip.encodeDelimited=function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FGSB_Msg_KickTip message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_FGSB.FGSB_Msg_KickTip
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_FGSB.FGSB_Msg_KickTip} FGSB_Msg_KickTip
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FGSB_Msg_KickTip.decode=function decode(reader, length) {
            if (! (reader instanceof $Reader))
                reader=$Reader.create(reader);
            var end=length === undefined ? reader.len : reader.pos + length, message=new $root.GameMsg_FGSB.FGSB_Msg_KickTip();
            while (reader.pos<end) {
                var tag=reader.uint32();
                switch (tag >>> 3) {
                    case 1:
                        message.Time=reader.int32();
                        break;
                    case 2:
                        message.Round=reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                }
            }
            if (! message.hasOwnProperty("Time"))
                throw $util.ProtocolError("missing required 'Time'", { instance : message });
            if (! message.hasOwnProperty("Round"))
                throw $util.ProtocolError("missing required 'Round'", { instance : message });
            return message;
        };

        /**
         * Decodes a FGSB_Msg_KickTip message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_FGSB.FGSB_Msg_KickTip
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_FGSB.FGSB_Msg_KickTip} FGSB_Msg_KickTip
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FGSB_Msg_KickTip.decodeDelimited=function decodeDelimited(reader) {
            if (! (reader instanceof $Reader))
                reader=new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a FGSB_Msg_KickTip message.
         * @function verify
         * @memberof GameMsg_FGSB.FGSB_Msg_KickTip
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FGSB_Msg_KickTip.verify=function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (! $util.isInteger(message.Time))
                return "Time: integer expected";
            if (! $util.isInteger(message.Round))
                return "Round: integer expected";
            return null;
        };

        /**
         * Creates a FGSB_Msg_KickTip message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_FGSB.FGSB_Msg_KickTip
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_FGSB.FGSB_Msg_KickTip} FGSB_Msg_KickTip
         */
        FGSB_Msg_KickTip.fromObject=function fromObject(object) {
            if (object instanceof $root.GameMsg_FGSB.FGSB_Msg_KickTip)
                return object;
            var message=new $root.GameMsg_FGSB.FGSB_Msg_KickTip();
            if (object.Time != null)
                message.Time=object.Time | 0;
            if (object.Round != null)
                message.Round=object.Round | 0;
            return message;
        };

        /**
         * Creates a plain object from a FGSB_Msg_KickTip message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_FGSB.FGSB_Msg_KickTip
         * @static
         * @param {GameMsg_FGSB.FGSB_Msg_KickTip} message FGSB_Msg_KickTip
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FGSB_Msg_KickTip.toObject=function toObject(message, options) {
            if (! options)
                options={};
            var object={};
            if (options.defaults) {
                object.Time=0;
                object.Round=0;
            }
            if (message.Time != null && message.hasOwnProperty("Time"))
                object.Time=message.Time;
            if (message.Round != null && message.hasOwnProperty("Round"))
                object.Round=message.Round;
            return object;
        };

        /**
         * Converts this FGSB_Msg_KickTip to JSON.
         * @function toJSON
         * @memberof GameMsg_FGSB.FGSB_Msg_KickTip
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FGSB_Msg_KickTip.prototype.toJSON=function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return FGSB_Msg_KickTip;
    })();

    GameMsg_FGSB.FGSB_Msg_UserActionCommited=(function () {

        /**
         * Properties of a FGSB_Msg_UserActionCommited.
         * @memberof GameMsg_FGSB
         * @interface IFGSB_Msg_UserActionCommited
         * @property {string} ActionName FGSB_Msg_UserActionCommited ActionName
         */

        /**
         * Constructs a new FGSB_Msg_UserActionCommited.
         * @memberof GameMsg_FGSB
         * @classdesc Represents a FGSB_Msg_UserActionCommited.
         * @implements IFGSB_Msg_UserActionCommited
         * @constructor
         * @param {GameMsg_FGSB.IFGSB_Msg_UserActionCommited=} [properties] Properties to set
         */
        function FGSB_Msg_UserActionCommited(properties) {
            if (properties)
                for (var keys=Object.keys(properties), i=0; i<keys.length; ++ i)
                    if (properties[keys[i]] != null)
                        this[keys[i]]=properties[keys[i]];
        }

        /**
         * FGSB_Msg_UserActionCommited ActionName.
         * @member {string} ActionName
         * @memberof GameMsg_FGSB.FGSB_Msg_UserActionCommited
         * @instance
         */
        FGSB_Msg_UserActionCommited.prototype.ActionName="";

        /**
         * Creates a new FGSB_Msg_UserActionCommited instance using the specified properties.
         * @function create
         * @memberof GameMsg_FGSB.FGSB_Msg_UserActionCommited
         * @static
         * @param {GameMsg_FGSB.IFGSB_Msg_UserActionCommited=} [properties] Properties to set
         * @returns {GameMsg_FGSB.FGSB_Msg_UserActionCommited} FGSB_Msg_UserActionCommited instance
         */
        FGSB_Msg_UserActionCommited.create=function create(properties) {
            return new FGSB_Msg_UserActionCommited(properties);
        };

        /**
         * Encodes the specified FGSB_Msg_UserActionCommited message. Does not implicitly {@link GameMsg_FGSB.FGSB_Msg_UserActionCommited.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_FGSB.FGSB_Msg_UserActionCommited
         * @static
         * @param {GameMsg_FGSB.IFGSB_Msg_UserActionCommited} message FGSB_Msg_UserActionCommited message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FGSB_Msg_UserActionCommited.encode=function encode(message, writer) {
            if (! writer)
                writer=$Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.ActionName);
            return writer;
        };

        /**
         * Encodes the specified FGSB_Msg_UserActionCommited message, length delimited. Does not implicitly {@link GameMsg_FGSB.FGSB_Msg_UserActionCommited.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_FGSB.FGSB_Msg_UserActionCommited
         * @static
         * @param {GameMsg_FGSB.IFGSB_Msg_UserActionCommited} message FGSB_Msg_UserActionCommited message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FGSB_Msg_UserActionCommited.encodeDelimited=function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FGSB_Msg_UserActionCommited message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_FGSB.FGSB_Msg_UserActionCommited
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_FGSB.FGSB_Msg_UserActionCommited} FGSB_Msg_UserActionCommited
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FGSB_Msg_UserActionCommited.decode=function decode(reader, length) {
            if (! (reader instanceof $Reader))
                reader=$Reader.create(reader);
            var end=length === undefined ? reader.len : reader.pos + length, message=new $root.GameMsg_FGSB.FGSB_Msg_UserActionCommited();
            while (reader.pos<end) {
                var tag=reader.uint32();
                switch (tag >>> 3) {
                    case 1:
                        message.ActionName=reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                }
            }
            if (! message.hasOwnProperty("ActionName"))
                throw $util.ProtocolError("missing required 'ActionName'", { instance : message });
            return message;
        };

        /**
         * Decodes a FGSB_Msg_UserActionCommited message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_FGSB.FGSB_Msg_UserActionCommited
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_FGSB.FGSB_Msg_UserActionCommited} FGSB_Msg_UserActionCommited
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FGSB_Msg_UserActionCommited.decodeDelimited=function decodeDelimited(reader) {
            if (! (reader instanceof $Reader))
                reader=new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a FGSB_Msg_UserActionCommited message.
         * @function verify
         * @memberof GameMsg_FGSB.FGSB_Msg_UserActionCommited
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FGSB_Msg_UserActionCommited.verify=function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (! $util.isString(message.ActionName))
                return "ActionName: string expected";
            return null;
        };

        /**
         * Creates a FGSB_Msg_UserActionCommited message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_FGSB.FGSB_Msg_UserActionCommited
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_FGSB.FGSB_Msg_UserActionCommited} FGSB_Msg_UserActionCommited
         */
        FGSB_Msg_UserActionCommited.fromObject=function fromObject(object) {
            if (object instanceof $root.GameMsg_FGSB.FGSB_Msg_UserActionCommited)
                return object;
            var message=new $root.GameMsg_FGSB.FGSB_Msg_UserActionCommited();
            if (object.ActionName != null)
                message.ActionName=String(object.ActionName);
            return message;
        };

        /**
         * Creates a plain object from a FGSB_Msg_UserActionCommited message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_FGSB.FGSB_Msg_UserActionCommited
         * @static
         * @param {GameMsg_FGSB.FGSB_Msg_UserActionCommited} message FGSB_Msg_UserActionCommited
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FGSB_Msg_UserActionCommited.toObject=function toObject(message, options) {
            if (! options)
                options={};
            var object={};
            if (options.defaults)
                object.ActionName="";
            if (message.ActionName != null && message.hasOwnProperty("ActionName"))
                object.ActionName=message.ActionName;
            return object;
        };

        /**
         * Converts this FGSB_Msg_UserActionCommited to JSON.
         * @function toJSON
         * @memberof GameMsg_FGSB.FGSB_Msg_UserActionCommited
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FGSB_Msg_UserActionCommited.prototype.toJSON=function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return FGSB_Msg_UserActionCommited;
    })();

    GameMsg_FGSB.FGSB_Msg_WatchUserCount=(function () {

        /**
         * Properties of a FGSB_Msg_WatchUserCount.
         * @memberof GameMsg_FGSB
         * @interface IFGSB_Msg_WatchUserCount
         * @property {number} Count FGSB_Msg_WatchUserCount Count
         */

        /**
         * Constructs a new FGSB_Msg_WatchUserCount.
         * @memberof GameMsg_FGSB
         * @classdesc Represents a FGSB_Msg_WatchUserCount.
         * @implements IFGSB_Msg_WatchUserCount
         * @constructor
         * @param {GameMsg_FGSB.IFGSB_Msg_WatchUserCount=} [properties] Properties to set
         */
        function FGSB_Msg_WatchUserCount(properties) {
            if (properties)
                for (var keys=Object.keys(properties), i=0; i<keys.length; ++ i)
                    if (properties[keys[i]] != null)
                        this[keys[i]]=properties[keys[i]];
        }

        /**
         * FGSB_Msg_WatchUserCount Count.
         * @member {number} Count
         * @memberof GameMsg_FGSB.FGSB_Msg_WatchUserCount
         * @instance
         */
        FGSB_Msg_WatchUserCount.prototype.Count=0;

        /**
         * Creates a new FGSB_Msg_WatchUserCount instance using the specified properties.
         * @function create
         * @memberof GameMsg_FGSB.FGSB_Msg_WatchUserCount
         * @static
         * @param {GameMsg_FGSB.IFGSB_Msg_WatchUserCount=} [properties] Properties to set
         * @returns {GameMsg_FGSB.FGSB_Msg_WatchUserCount} FGSB_Msg_WatchUserCount instance
         */
        FGSB_Msg_WatchUserCount.create=function create(properties) {
            return new FGSB_Msg_WatchUserCount(properties);
        };

        /**
         * Encodes the specified FGSB_Msg_WatchUserCount message. Does not implicitly {@link GameMsg_FGSB.FGSB_Msg_WatchUserCount.verify|verify} messages.
         * @function encode
         * @memberof GameMsg_FGSB.FGSB_Msg_WatchUserCount
         * @static
         * @param {GameMsg_FGSB.IFGSB_Msg_WatchUserCount} message FGSB_Msg_WatchUserCount message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FGSB_Msg_WatchUserCount.encode=function encode(message, writer) {
            if (! writer)
                writer=$Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.Count);
            return writer;
        };

        /**
         * Encodes the specified FGSB_Msg_WatchUserCount message, length delimited. Does not implicitly {@link GameMsg_FGSB.FGSB_Msg_WatchUserCount.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg_FGSB.FGSB_Msg_WatchUserCount
         * @static
         * @param {GameMsg_FGSB.IFGSB_Msg_WatchUserCount} message FGSB_Msg_WatchUserCount message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FGSB_Msg_WatchUserCount.encodeDelimited=function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FGSB_Msg_WatchUserCount message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg_FGSB.FGSB_Msg_WatchUserCount
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg_FGSB.FGSB_Msg_WatchUserCount} FGSB_Msg_WatchUserCount
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FGSB_Msg_WatchUserCount.decode=function decode(reader, length) {
            if (! (reader instanceof $Reader))
                reader=$Reader.create(reader);
            var end=length === undefined ? reader.len : reader.pos + length, message=new $root.GameMsg_FGSB.FGSB_Msg_WatchUserCount();
            while (reader.pos<end) {
                var tag=reader.uint32();
                switch (tag >>> 3) {
                    case 1:
                        message.Count=reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                }
            }
            if (! message.hasOwnProperty("Count"))
                throw $util.ProtocolError("missing required 'Count'", { instance : message });
            return message;
        };

        /**
         * Decodes a FGSB_Msg_WatchUserCount message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg_FGSB.FGSB_Msg_WatchUserCount
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg_FGSB.FGSB_Msg_WatchUserCount} FGSB_Msg_WatchUserCount
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FGSB_Msg_WatchUserCount.decodeDelimited=function decodeDelimited(reader) {
            if (! (reader instanceof $Reader))
                reader=new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a FGSB_Msg_WatchUserCount message.
         * @function verify
         * @memberof GameMsg_FGSB.FGSB_Msg_WatchUserCount
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FGSB_Msg_WatchUserCount.verify=function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (! $util.isInteger(message.Count))
                return "Count: integer expected";
            return null;
        };

        /**
         * Creates a FGSB_Msg_WatchUserCount message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg_FGSB.FGSB_Msg_WatchUserCount
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg_FGSB.FGSB_Msg_WatchUserCount} FGSB_Msg_WatchUserCount
         */
        FGSB_Msg_WatchUserCount.fromObject=function fromObject(object) {
            if (object instanceof $root.GameMsg_FGSB.FGSB_Msg_WatchUserCount)
                return object;
            var message=new $root.GameMsg_FGSB.FGSB_Msg_WatchUserCount();
            if (object.Count != null)
                message.Count=object.Count | 0;
            return message;
        };

        /**
         * Creates a plain object from a FGSB_Msg_WatchUserCount message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg_FGSB.FGSB_Msg_WatchUserCount
         * @static
         * @param {GameMsg_FGSB.FGSB_Msg_WatchUserCount} message FGSB_Msg_WatchUserCount
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FGSB_Msg_WatchUserCount.toObject=function toObject(message, options) {
            if (! options)
                options={};
            var object={};
            if (options.defaults)
                object.Count=0;
            if (message.Count != null && message.hasOwnProperty("Count"))
                object.Count=message.Count;
            return object;
        };

        /**
         * Converts this FGSB_Msg_WatchUserCount to JSON.
         * @function toJSON
         * @memberof GameMsg_FGSB.FGSB_Msg_WatchUserCount
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FGSB_Msg_WatchUserCount.prototype.toJSON=function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return FGSB_Msg_WatchUserCount;
    })();

    return GameMsg_FGSB;
})();

module.exports=$root;
