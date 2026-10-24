/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

//var $protobuf = require("protobufjs/minimal");
var $protobuf = protobuf;

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.GameRoomMsg = (function() {

    /**
     * Namespace GameRoomMsg.
     * @exports GameRoomMsg
     * @namespace
     */
    var GameRoomMsg = {};

    GameRoomMsg.LoginGameRoomInfo = (function() {

        /**
         * Properties of a LoginGameRoomInfo.
         * @memberof GameRoomMsg
         * @interface ILoginGameRoomInfo
         * @property {number} UserID LoginGameRoomInfo UserID
         * @property {string} Cer LoginGameRoomInfo Cer
         * @property {string} HDCode LoginGameRoomInfo HDCode
         * @property {number} HDType LoginGameRoomInfo HDType
         */

        /**
         * Constructs a new LoginGameRoomInfo.
         * @memberof GameRoomMsg
         * @classdesc Represents a LoginGameRoomInfo.
         * @implements ILoginGameRoomInfo
         * @constructor
         * @param {GameRoomMsg.ILoginGameRoomInfo=} [properties] Properties to set
         */
        function LoginGameRoomInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LoginGameRoomInfo UserID.
         * @member {number} UserID
         * @memberof GameRoomMsg.LoginGameRoomInfo
         * @instance
         */
        LoginGameRoomInfo.prototype.UserID = 0;

        /**
         * LoginGameRoomInfo Cer.
         * @member {string} Cer
         * @memberof GameRoomMsg.LoginGameRoomInfo
         * @instance
         */
        LoginGameRoomInfo.prototype.Cer = "";

        /**
         * LoginGameRoomInfo HDCode.
         * @member {string} HDCode
         * @memberof GameRoomMsg.LoginGameRoomInfo
         * @instance
         */
        LoginGameRoomInfo.prototype.HDCode = "";

        /**
         * LoginGameRoomInfo HDType.
         * @member {number} HDType
         * @memberof GameRoomMsg.LoginGameRoomInfo
         * @instance
         */
        LoginGameRoomInfo.prototype.HDType = 0;

        /**
         * Creates a new LoginGameRoomInfo instance using the specified properties.
         * @function create
         * @memberof GameRoomMsg.LoginGameRoomInfo
         * @static
         * @param {GameRoomMsg.ILoginGameRoomInfo=} [properties] Properties to set
         * @returns {GameRoomMsg.LoginGameRoomInfo} LoginGameRoomInfo instance
         */
        LoginGameRoomInfo.create = function create(properties) {
            return new LoginGameRoomInfo(properties);
        };

        /**
         * Encodes the specified LoginGameRoomInfo message. Does not implicitly {@link GameRoomMsg.LoginGameRoomInfo.verify|verify} messages.
         * @function encode
         * @memberof GameRoomMsg.LoginGameRoomInfo
         * @static
         * @param {GameRoomMsg.ILoginGameRoomInfo} message LoginGameRoomInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginGameRoomInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.UserID);
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.Cer);
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.HDCode);
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.HDType);
            return writer;
        };

        /**
         * Encodes the specified LoginGameRoomInfo message, length delimited. Does not implicitly {@link GameRoomMsg.LoginGameRoomInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameRoomMsg.LoginGameRoomInfo
         * @static
         * @param {GameRoomMsg.ILoginGameRoomInfo} message LoginGameRoomInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginGameRoomInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LoginGameRoomInfo message from the specified reader or buffer.
         * @function decode
         * @memberof GameRoomMsg.LoginGameRoomInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameRoomMsg.LoginGameRoomInfo} LoginGameRoomInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoginGameRoomInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len :reader.pos + length, message = new $root.GameRoomMsg.LoginGameRoomInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.UserID = reader.int32();
                    break;
                case 2:
                    message.Cer = reader.string();
                    break;
                case 3:
                    message.HDCode = reader.string();
                    break;
                case 4:
                    message.HDType = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("UserID"))
                throw $util.ProtocolError("missing required 'UserID'", { instance:message });
            if (!message.hasOwnProperty("Cer"))
                throw $util.ProtocolError("missing required 'Cer'", { instance:message });
            if (!message.hasOwnProperty("HDCode"))
                throw $util.ProtocolError("missing required 'HDCode'", { instance:message });
            if (!message.hasOwnProperty("HDType"))
                throw $util.ProtocolError("missing required 'HDType'", { instance:message });
            return message;
        };

        /**
         * Decodes a LoginGameRoomInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameRoomMsg.LoginGameRoomInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameRoomMsg.LoginGameRoomInfo} LoginGameRoomInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoginGameRoomInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LoginGameRoomInfo message.
         * @function verify
         * @memberof GameRoomMsg.LoginGameRoomInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LoginGameRoomInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.UserID))
                return "UserID:integer expected";
            if (!$util.isString(message.Cer))
                return "Cer:string expected";
            if (!$util.isString(message.HDCode))
                return "HDCode:string expected";
            if (!$util.isInteger(message.HDType))
                return "HDType:integer expected";
            return null;
        };

        /**
         * Creates a LoginGameRoomInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameRoomMsg.LoginGameRoomInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameRoomMsg.LoginGameRoomInfo} LoginGameRoomInfo
         */
        LoginGameRoomInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.GameRoomMsg.LoginGameRoomInfo)
                return object;
            var message = new $root.GameRoomMsg.LoginGameRoomInfo();
            if (object.UserID != null)
                message.UserID = object.UserID | 0;
            if (object.Cer != null)
                message.Cer = String(object.Cer);
            if (object.HDCode != null)
                message.HDCode = String(object.HDCode);
            if (object.HDType != null)
                message.HDType = object.HDType | 0;
            return message;
        };

        /**
         * Creates a plain object from a LoginGameRoomInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameRoomMsg.LoginGameRoomInfo
         * @static
         * @param {GameRoomMsg.LoginGameRoomInfo} message LoginGameRoomInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LoginGameRoomInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.UserID = 0;
                object.Cer = "";
                object.HDCode = "";
                object.HDType = 0;
            }
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                object.UserID = message.UserID;
            if (message.Cer != null && message.hasOwnProperty("Cer"))
                object.Cer = message.Cer;
            if (message.HDCode != null && message.hasOwnProperty("HDCode"))
                object.HDCode = message.HDCode;
            if (message.HDType != null && message.hasOwnProperty("HDType"))
                object.HDType = message.HDType;
            return object;
        };

        /**
         * Converts this LoginGameRoomInfo to JSON.
         * @function toJSON
         * @memberof GameRoomMsg.LoginGameRoomInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LoginGameRoomInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return LoginGameRoomInfo;
    })();

    GameRoomMsg.LoginGameRoomRet = (function() {

        /**
         * Properties of a LoginGameRoomRet.
         * @memberof GameRoomMsg
         * @interface ILoginGameRoomRet
         * @property {number} Code LoginGameRoomRet Code
         * @property {string} Message LoginGameRoomRet Message
         * @property {GameRoomMsg.ILoginGameRoomInfo|null} [LoginRequestData] LoginGameRoomRet LoginRequestData
         * @property {GameRoomMsg.IUserRoomLogonData|null} [UserData] LoginGameRoomRet UserData
         * @property {GameRoomMsg.IRoomInfo|null} [RoomInfo] LoginGameRoomRet RoomInfo
         */

        /**
         * Constructs a new LoginGameRoomRet.
         * @memberof GameRoomMsg
         * @classdesc Represents a LoginGameRoomRet.
         * @implements ILoginGameRoomRet
         * @constructor
         * @param {GameRoomMsg.ILoginGameRoomRet=} [properties] Properties to set
         */
        function LoginGameRoomRet(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LoginGameRoomRet Code.
         * @member {number} Code
         * @memberof GameRoomMsg.LoginGameRoomRet
         * @instance
         */
        LoginGameRoomRet.prototype.Code = 0;

        /**
         * LoginGameRoomRet Message.
         * @member {string} Message
         * @memberof GameRoomMsg.LoginGameRoomRet
         * @instance
         */
        LoginGameRoomRet.prototype.Message = "";

        /**
         * LoginGameRoomRet LoginRequestData.
         * @member {GameRoomMsg.ILoginGameRoomInfo|null|undefined} LoginRequestData
         * @memberof GameRoomMsg.LoginGameRoomRet
         * @instance
         */
        LoginGameRoomRet.prototype.LoginRequestData = null;

        /**
         * LoginGameRoomRet UserData.
         * @member {GameRoomMsg.IUserRoomLogonData|null|undefined} UserData
         * @memberof GameRoomMsg.LoginGameRoomRet
         * @instance
         */
        LoginGameRoomRet.prototype.UserData = null;

        /**
         * LoginGameRoomRet RoomInfo.
         * @member {GameRoomMsg.IRoomInfo|null|undefined} RoomInfo
         * @memberof GameRoomMsg.LoginGameRoomRet
         * @instance
         */
        LoginGameRoomRet.prototype.RoomInfo = null;

        /**
         * Creates a new LoginGameRoomRet instance using the specified properties.
         * @function create
         * @memberof GameRoomMsg.LoginGameRoomRet
         * @static
         * @param {GameRoomMsg.ILoginGameRoomRet=} [properties] Properties to set
         * @returns {GameRoomMsg.LoginGameRoomRet} LoginGameRoomRet instance
         */
        LoginGameRoomRet.create = function create(properties) {
            return new LoginGameRoomRet(properties);
        };

        /**
         * Encodes the specified LoginGameRoomRet message. Does not implicitly {@link GameRoomMsg.LoginGameRoomRet.verify|verify} messages.
         * @function encode
         * @memberof GameRoomMsg.LoginGameRoomRet
         * @static
         * @param {GameRoomMsg.ILoginGameRoomRet} message LoginGameRoomRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginGameRoomRet.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.Code);
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.Message);
            if (message.LoginRequestData != null && message.hasOwnProperty("LoginRequestData"))
                $root.GameRoomMsg.LoginGameRoomInfo.encode(message.LoginRequestData, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.UserData != null && message.hasOwnProperty("UserData"))
                $root.GameRoomMsg.UserRoomLogonData.encode(message.UserData, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.RoomInfo != null && message.hasOwnProperty("RoomInfo"))
                $root.GameRoomMsg.RoomInfo.encode(message.RoomInfo, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified LoginGameRoomRet message, length delimited. Does not implicitly {@link GameRoomMsg.LoginGameRoomRet.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameRoomMsg.LoginGameRoomRet
         * @static
         * @param {GameRoomMsg.ILoginGameRoomRet} message LoginGameRoomRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginGameRoomRet.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LoginGameRoomRet message from the specified reader or buffer.
         * @function decode
         * @memberof GameRoomMsg.LoginGameRoomRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameRoomMsg.LoginGameRoomRet} LoginGameRoomRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoginGameRoomRet.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len :reader.pos + length, message = new $root.GameRoomMsg.LoginGameRoomRet();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Code = reader.int32();
                    break;
                case 2:
                    message.Message = reader.string();
                    break;
                case 3:
                    message.LoginRequestData = $root.GameRoomMsg.LoginGameRoomInfo.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.UserData = $root.GameRoomMsg.UserRoomLogonData.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.RoomInfo = $root.GameRoomMsg.RoomInfo.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("Code"))
                throw $util.ProtocolError("missing required 'Code'", { instance:message });
            if (!message.hasOwnProperty("Message"))
                throw $util.ProtocolError("missing required 'Message'", { instance:message });
            return message;
        };

        /**
         * Decodes a LoginGameRoomRet message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameRoomMsg.LoginGameRoomRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameRoomMsg.LoginGameRoomRet} LoginGameRoomRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoginGameRoomRet.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LoginGameRoomRet message.
         * @function verify
         * @memberof GameRoomMsg.LoginGameRoomRet
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LoginGameRoomRet.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.Code))
                return "Code:integer expected";
            if (!$util.isString(message.Message))
                return "Message:string expected";
            if (message.LoginRequestData != null && message.hasOwnProperty("LoginRequestData")) {
                var error = $root.GameRoomMsg.LoginGameRoomInfo.verify(message.LoginRequestData);
                if (error)
                    return "LoginRequestData." + error;
            }
            if (message.UserData != null && message.hasOwnProperty("UserData")) {
                var error = $root.GameRoomMsg.UserRoomLogonData.verify(message.UserData);
                if (error)
                    return "UserData." + error;
            }
            if (message.RoomInfo != null && message.hasOwnProperty("RoomInfo")) {
                var error = $root.GameRoomMsg.RoomInfo.verify(message.RoomInfo);
                if (error)
                    return "RoomInfo." + error;
            }
            return null;
        };

        /**
         * Creates a LoginGameRoomRet message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameRoomMsg.LoginGameRoomRet
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameRoomMsg.LoginGameRoomRet} LoginGameRoomRet
         */
        LoginGameRoomRet.fromObject = function fromObject(object) {
            if (object instanceof $root.GameRoomMsg.LoginGameRoomRet)
                return object;
            var message = new $root.GameRoomMsg.LoginGameRoomRet();
            if (object.Code != null)
                message.Code = object.Code | 0;
            if (object.Message != null)
                message.Message = String(object.Message);
            if (object.LoginRequestData != null) {
                if (typeof object.LoginRequestData !== "object")
                    throw TypeError(".GameRoomMsg.LoginGameRoomRet.LoginRequestData:object expected");
                message.LoginRequestData = $root.GameRoomMsg.LoginGameRoomInfo.fromObject(object.LoginRequestData);
            }
            if (object.UserData != null) {
                if (typeof object.UserData !== "object")
                    throw TypeError(".GameRoomMsg.LoginGameRoomRet.UserData:object expected");
                message.UserData = $root.GameRoomMsg.UserRoomLogonData.fromObject(object.UserData);
            }
            if (object.RoomInfo != null) {
                if (typeof object.RoomInfo !== "object")
                    throw TypeError(".GameRoomMsg.LoginGameRoomRet.RoomInfo:object expected");
                message.RoomInfo = $root.GameRoomMsg.RoomInfo.fromObject(object.RoomInfo);
            }
            return message;
        };

        /**
         * Creates a plain object from a LoginGameRoomRet message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameRoomMsg.LoginGameRoomRet
         * @static
         * @param {GameRoomMsg.LoginGameRoomRet} message LoginGameRoomRet
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LoginGameRoomRet.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.Code = 0;
                object.Message = "";
                object.LoginRequestData = null;
                object.UserData = null;
                object.RoomInfo = null;
            }
            if (message.Code != null && message.hasOwnProperty("Code"))
                object.Code = message.Code;
            if (message.Message != null && message.hasOwnProperty("Message"))
                object.Message = message.Message;
            if (message.LoginRequestData != null && message.hasOwnProperty("LoginRequestData"))
                object.LoginRequestData = $root.GameRoomMsg.LoginGameRoomInfo.toObject(message.LoginRequestData, options);
            if (message.UserData != null && message.hasOwnProperty("UserData"))
                object.UserData = $root.GameRoomMsg.UserRoomLogonData.toObject(message.UserData, options);
            if (message.RoomInfo != null && message.hasOwnProperty("RoomInfo"))
                object.RoomInfo = $root.GameRoomMsg.RoomInfo.toObject(message.RoomInfo, options);
            return object;
        };

        /**
         * Converts this LoginGameRoomRet to JSON.
         * @function toJSON
         * @memberof GameRoomMsg.LoginGameRoomRet
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LoginGameRoomRet.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return LoginGameRoomRet;
    })();

    GameRoomMsg.UserRoomLogonData = (function() {

        /**
         * Properties of a UserRoomLogonData.
         * @memberof GameRoomMsg
         * @interface IUserRoomLogonData
         * @property {number} UserID UserRoomLogonData UserID
         * @property {number} UserType UserRoomLogonData UserType
         * @property {string} NickName UserRoomLogonData NickName
         * @property {number} FaceID UserRoomLogonData FaceID
         * @property {number} Sex UserRoomLogonData Sex
         * @property {number|Long} CashAmount UserRoomLogonData CashAmount
         * @property {number} WinCount UserRoomLogonData WinCount
         * @property {number} LoseCount UserRoomLogonData LoseCount
         * @property {number} DrawCount UserRoomLogonData DrawCount
         * @property {string|null} [ServerAddr] UserRoomLogonData ServerAddr
         * @property {string|null} [GameBuff] UserRoomLogonData GameBuff
         * @property {number|Long} TradeId UserRoomLogonData TradeId
         * @property {number|null} [LastWinLose] UserRoomLogonData LastWinLose
         * @property {number|Long} SumCharge UserRoomLogonData SumCharge
         * @property {boolean} HasBindPay UserRoomLogonData HasBindPay
         * @property {number|Long} SumConvert UserRoomLogonData SumConvert
         * @property {number|Long|null} [ExperienceCash] UserRoomLogonData ExperienceCash
         * @property {string|null} [LoginName] UserRoomLogonData LoginName
         * @property {string|null} [AlipayAccount] UserRoomLogonData AlipayAccount
         * @property {number|Long|null} [TimeSeq] UserRoomLogonData TimeSeq
         * @property {number|Long|null} [CouponAmount] UserRoomLogonData CouponAmount
         * @property {number|null} [AvatarFrameID] UserRoomLogonData AvatarFrameID
         * @property {number|Long|null} [SumWinLoss] UserRoomLogonData SumWinLoss
         */

        /**
         * Constructs a new UserRoomLogonData.
         * @memberof GameRoomMsg
         * @classdesc Represents a UserRoomLogonData.
         * @implements IUserRoomLogonData
         * @constructor
         * @param {GameRoomMsg.IUserRoomLogonData=} [properties] Properties to set
         */
        function UserRoomLogonData(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UserRoomLogonData UserID.
         * @member {number} UserID
         * @memberof GameRoomMsg.UserRoomLogonData
         * @instance
         */
        UserRoomLogonData.prototype.UserID = 0;

        /**
         * UserRoomLogonData UserType.
         * @member {number} UserType
         * @memberof GameRoomMsg.UserRoomLogonData
         * @instance
         */
        UserRoomLogonData.prototype.UserType = 0;

        /**
         * UserRoomLogonData NickName.
         * @member {string} NickName
         * @memberof GameRoomMsg.UserRoomLogonData
         * @instance
         */
        UserRoomLogonData.prototype.NickName = "";

        /**
         * UserRoomLogonData FaceID.
         * @member {number} FaceID
         * @memberof GameRoomMsg.UserRoomLogonData
         * @instance
         */
        UserRoomLogonData.prototype.FaceID = 0;

        /**
         * UserRoomLogonData Sex.
         * @member {number} Sex
         * @memberof GameRoomMsg.UserRoomLogonData
         * @instance
         */
        UserRoomLogonData.prototype.Sex = 0;

        /**
         * UserRoomLogonData CashAmount.
         * @member {number|Long} CashAmount
         * @memberof GameRoomMsg.UserRoomLogonData
         * @instance
         */
        UserRoomLogonData.prototype.CashAmount = $util.Long ? $util.Long.fromBits(0,0,false) :0;

        /**
         * UserRoomLogonData WinCount.
         * @member {number} WinCount
         * @memberof GameRoomMsg.UserRoomLogonData
         * @instance
         */
        UserRoomLogonData.prototype.WinCount = 0;

        /**
         * UserRoomLogonData LoseCount.
         * @member {number} LoseCount
         * @memberof GameRoomMsg.UserRoomLogonData
         * @instance
         */
        UserRoomLogonData.prototype.LoseCount = 0;

        /**
         * UserRoomLogonData DrawCount.
         * @member {number} DrawCount
         * @memberof GameRoomMsg.UserRoomLogonData
         * @instance
         */
        UserRoomLogonData.prototype.DrawCount = 0;

        /**
         * UserRoomLogonData ServerAddr.
         * @member {string} ServerAddr
         * @memberof GameRoomMsg.UserRoomLogonData
         * @instance
         */
        UserRoomLogonData.prototype.ServerAddr = "";

        /**
         * UserRoomLogonData GameBuff.
         * @member {string} GameBuff
         * @memberof GameRoomMsg.UserRoomLogonData
         * @instance
         */
        UserRoomLogonData.prototype.GameBuff = "";

        /**
         * UserRoomLogonData TradeId.
         * @member {number|Long} TradeId
         * @memberof GameRoomMsg.UserRoomLogonData
         * @instance
         */
        UserRoomLogonData.prototype.TradeId = $util.Long ? $util.Long.fromBits(0,0,false) :0;

        /**
         * UserRoomLogonData LastWinLose.
         * @member {number} LastWinLose
         * @memberof GameRoomMsg.UserRoomLogonData
         * @instance
         */
        UserRoomLogonData.prototype.LastWinLose = 0;

        /**
         * UserRoomLogonData SumCharge.
         * @member {number|Long} SumCharge
         * @memberof GameRoomMsg.UserRoomLogonData
         * @instance
         */
        UserRoomLogonData.prototype.SumCharge = $util.Long ? $util.Long.fromBits(0,0,false) :0;

        /**
         * UserRoomLogonData HasBindPay.
         * @member {boolean} HasBindPay
         * @memberof GameRoomMsg.UserRoomLogonData
         * @instance
         */
        UserRoomLogonData.prototype.HasBindPay = false;

        /**
         * UserRoomLogonData SumConvert.
         * @member {number|Long} SumConvert
         * @memberof GameRoomMsg.UserRoomLogonData
         * @instance
         */
        UserRoomLogonData.prototype.SumConvert = $util.Long ? $util.Long.fromBits(0,0,false) :0;

        /**
         * UserRoomLogonData ExperienceCash.
         * @member {number|Long} ExperienceCash
         * @memberof GameRoomMsg.UserRoomLogonData
         * @instance
         */
        UserRoomLogonData.prototype.ExperienceCash = $util.Long ? $util.Long.fromBits(0,0,false) :0;

        /**
         * UserRoomLogonData LoginName.
         * @member {string} LoginName
         * @memberof GameRoomMsg.UserRoomLogonData
         * @instance
         */
        UserRoomLogonData.prototype.LoginName = "";

        /**
         * UserRoomLogonData AlipayAccount.
         * @member {string} AlipayAccount
         * @memberof GameRoomMsg.UserRoomLogonData
         * @instance
         */
        UserRoomLogonData.prototype.AlipayAccount = "";

        /**
         * UserRoomLogonData TimeSeq.
         * @member {number|Long} TimeSeq
         * @memberof GameRoomMsg.UserRoomLogonData
         * @instance
         */
        UserRoomLogonData.prototype.TimeSeq = $util.Long ? $util.Long.fromBits(0,0,false) :0;

        /**
         * UserRoomLogonData CouponAmount.
         * @member {number|Long} CouponAmount
         * @memberof GameRoomMsg.UserRoomLogonData
         * @instance
         */
        UserRoomLogonData.prototype.CouponAmount = $util.Long ? $util.Long.fromBits(0,0,false) :0;

        /**
         * UserRoomLogonData AvatarFrameID.
         * @member {number} AvatarFrameID
         * @memberof GameRoomMsg.UserRoomLogonData
         * @instance
         */
        UserRoomLogonData.prototype.AvatarFrameID = 0;

        /**
         * UserRoomLogonData SumWinLoss.
         * @member {number|Long} SumWinLoss
         * @memberof GameRoomMsg.UserRoomLogonData
         * @instance
         */
        UserRoomLogonData.prototype.SumWinLoss = $util.Long ? $util.Long.fromBits(0,0,false) :0;

        /**
         * Creates a new UserRoomLogonData instance using the specified properties.
         * @function create
         * @memberof GameRoomMsg.UserRoomLogonData
         * @static
         * @param {GameRoomMsg.IUserRoomLogonData=} [properties] Properties to set
         * @returns {GameRoomMsg.UserRoomLogonData} UserRoomLogonData instance
         */
        UserRoomLogonData.create = function create(properties) {
            return new UserRoomLogonData(properties);
        };

        /**
         * Encodes the specified UserRoomLogonData message. Does not implicitly {@link GameRoomMsg.UserRoomLogonData.verify|verify} messages.
         * @function encode
         * @memberof GameRoomMsg.UserRoomLogonData
         * @static
         * @param {GameRoomMsg.IUserRoomLogonData} message UserRoomLogonData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserRoomLogonData.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.UserID);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.UserType);
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.NickName);
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.FaceID);
            writer.uint32(/* id 5, wireType 0 =*/40).int32(message.Sex);
            writer.uint32(/* id 6, wireType 0 =*/48).int64(message.CashAmount);
            writer.uint32(/* id 7, wireType 0 =*/56).int32(message.WinCount);
            writer.uint32(/* id 8, wireType 0 =*/64).int32(message.LoseCount);
            writer.uint32(/* id 9, wireType 0 =*/72).int32(message.DrawCount);
            if (message.ServerAddr != null && message.hasOwnProperty("ServerAddr"))
                writer.uint32(/* id 10, wireType 2 =*/82).string(message.ServerAddr);
            if (message.GameBuff != null && message.hasOwnProperty("GameBuff"))
                writer.uint32(/* id 11, wireType 2 =*/90).string(message.GameBuff);
            writer.uint32(/* id 12, wireType 0 =*/96).int64(message.TradeId);
            if (message.LastWinLose != null && message.hasOwnProperty("LastWinLose"))
                writer.uint32(/* id 13, wireType 0 =*/104).int32(message.LastWinLose);
            writer.uint32(/* id 14, wireType 0 =*/112).int64(message.SumCharge);
            writer.uint32(/* id 15, wireType 0 =*/120).bool(message.HasBindPay);
            writer.uint32(/* id 16, wireType 0 =*/128).int64(message.SumConvert);
            if (message.ExperienceCash != null && message.hasOwnProperty("ExperienceCash"))
                writer.uint32(/* id 17, wireType 0 =*/136).int64(message.ExperienceCash);
            if (message.LoginName != null && message.hasOwnProperty("LoginName"))
                writer.uint32(/* id 18, wireType 2 =*/146).string(message.LoginName);
            if (message.AlipayAccount != null && message.hasOwnProperty("AlipayAccount"))
                writer.uint32(/* id 19, wireType 2 =*/154).string(message.AlipayAccount);
            if (message.TimeSeq != null && message.hasOwnProperty("TimeSeq"))
                writer.uint32(/* id 20, wireType 0 =*/160).int64(message.TimeSeq);
            if (message.CouponAmount != null && message.hasOwnProperty("CouponAmount"))
                writer.uint32(/* id 21, wireType 0 =*/168).int64(message.CouponAmount);
            if (message.AvatarFrameID != null && message.hasOwnProperty("AvatarFrameID"))
                writer.uint32(/* id 22, wireType 0 =*/176).int32(message.AvatarFrameID);
            if (message.SumWinLoss != null && message.hasOwnProperty("SumWinLoss"))
                writer.uint32(/* id 23, wireType 0 =*/184).int64(message.SumWinLoss);
            return writer;
        };

        /**
         * Encodes the specified UserRoomLogonData message, length delimited. Does not implicitly {@link GameRoomMsg.UserRoomLogonData.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameRoomMsg.UserRoomLogonData
         * @static
         * @param {GameRoomMsg.IUserRoomLogonData} message UserRoomLogonData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserRoomLogonData.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UserRoomLogonData message from the specified reader or buffer.
         * @function decode
         * @memberof GameRoomMsg.UserRoomLogonData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameRoomMsg.UserRoomLogonData} UserRoomLogonData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserRoomLogonData.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len :reader.pos + length, message = new $root.GameRoomMsg.UserRoomLogonData();
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
                    message.FaceID = reader.int32();
                    break;
                case 5:
                    message.Sex = reader.int32();
                    break;
                case 6:
                    message.CashAmount = reader.int64();
                    break;
                case 7:
                    message.WinCount = reader.int32();
                    break;
                case 8:
                    message.LoseCount = reader.int32();
                    break;
                case 9:
                    message.DrawCount = reader.int32();
                    break;
                case 10:
                    message.ServerAddr = reader.string();
                    break;
                case 11:
                    message.GameBuff = reader.string();
                    break;
                case 12:
                    message.TradeId = reader.int64();
                    break;
                case 13:
                    message.LastWinLose = reader.int32();
                    break;
                case 14:
                    message.SumCharge = reader.int64();
                    break;
                case 15:
                    message.HasBindPay = reader.bool();
                    break;
                case 16:
                    message.SumConvert = reader.int64();
                    break;
                case 17:
                    message.ExperienceCash = reader.int64();
                    break;
                case 18:
                    message.LoginName = reader.string();
                    break;
                case 19:
                    message.AlipayAccount = reader.string();
                    break;
                case 20:
                    message.TimeSeq = reader.int64();
                    break;
                case 21:
                    message.CouponAmount = reader.int64();
                    break;
                case 22:
                    message.AvatarFrameID = reader.int32();
                    break;
                case 23:
                    message.SumWinLoss = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("UserID"))
                throw $util.ProtocolError("missing required 'UserID'", { instance:message });
            if (!message.hasOwnProperty("UserType"))
                throw $util.ProtocolError("missing required 'UserType'", { instance:message });
            if (!message.hasOwnProperty("NickName"))
                throw $util.ProtocolError("missing required 'NickName'", { instance:message });
            if (!message.hasOwnProperty("FaceID"))
                throw $util.ProtocolError("missing required 'FaceID'", { instance:message });
            if (!message.hasOwnProperty("Sex"))
                throw $util.ProtocolError("missing required 'Sex'", { instance:message });
            if (!message.hasOwnProperty("CashAmount"))
                throw $util.ProtocolError("missing required 'CashAmount'", { instance:message });
            if (!message.hasOwnProperty("WinCount"))
                throw $util.ProtocolError("missing required 'WinCount'", { instance:message });
            if (!message.hasOwnProperty("LoseCount"))
                throw $util.ProtocolError("missing required 'LoseCount'", { instance:message });
            if (!message.hasOwnProperty("DrawCount"))
                throw $util.ProtocolError("missing required 'DrawCount'", { instance:message });
            if (!message.hasOwnProperty("TradeId"))
                throw $util.ProtocolError("missing required 'TradeId'", { instance:message });
            if (!message.hasOwnProperty("SumCharge"))
                throw $util.ProtocolError("missing required 'SumCharge'", { instance:message });
            if (!message.hasOwnProperty("HasBindPay"))
                throw $util.ProtocolError("missing required 'HasBindPay'", { instance:message });
            if (!message.hasOwnProperty("SumConvert"))
                throw $util.ProtocolError("missing required 'SumConvert'", { instance:message });
            return message;
        };

        /**
         * Decodes a UserRoomLogonData message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameRoomMsg.UserRoomLogonData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameRoomMsg.UserRoomLogonData} UserRoomLogonData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserRoomLogonData.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a UserRoomLogonData message.
         * @function verify
         * @memberof GameRoomMsg.UserRoomLogonData
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UserRoomLogonData.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.UserID))
                return "UserID:integer expected";
            if (!$util.isInteger(message.UserType))
                return "UserType:integer expected";
            if (!$util.isString(message.NickName))
                return "NickName:string expected";
            if (!$util.isInteger(message.FaceID))
                return "FaceID:integer expected";
            if (!$util.isInteger(message.Sex))
                return "Sex:integer expected";
            if (!$util.isInteger(message.CashAmount) && !(message.CashAmount && $util.isInteger(message.CashAmount.low) && $util.isInteger(message.CashAmount.high)))
                return "CashAmount:integer|Long expected";
            if (!$util.isInteger(message.WinCount))
                return "WinCount:integer expected";
            if (!$util.isInteger(message.LoseCount))
                return "LoseCount:integer expected";
            if (!$util.isInteger(message.DrawCount))
                return "DrawCount:integer expected";
            if (message.ServerAddr != null && message.hasOwnProperty("ServerAddr"))
                if (!$util.isString(message.ServerAddr))
                    return "ServerAddr:string expected";
            if (message.GameBuff != null && message.hasOwnProperty("GameBuff"))
                if (!$util.isString(message.GameBuff))
                    return "GameBuff:string expected";
            if (!$util.isInteger(message.TradeId) && !(message.TradeId && $util.isInteger(message.TradeId.low) && $util.isInteger(message.TradeId.high)))
                return "TradeId:integer|Long expected";
            if (message.LastWinLose != null && message.hasOwnProperty("LastWinLose"))
                if (!$util.isInteger(message.LastWinLose))
                    return "LastWinLose:integer expected";
            if (!$util.isInteger(message.SumCharge) && !(message.SumCharge && $util.isInteger(message.SumCharge.low) && $util.isInteger(message.SumCharge.high)))
                return "SumCharge:integer|Long expected";
            if (typeof message.HasBindPay !== "boolean")
                return "HasBindPay:boolean expected";
            if (!$util.isInteger(message.SumConvert) && !(message.SumConvert && $util.isInteger(message.SumConvert.low) && $util.isInteger(message.SumConvert.high)))
                return "SumConvert:integer|Long expected";
            if (message.ExperienceCash != null && message.hasOwnProperty("ExperienceCash"))
                if (!$util.isInteger(message.ExperienceCash) && !(message.ExperienceCash && $util.isInteger(message.ExperienceCash.low) && $util.isInteger(message.ExperienceCash.high)))
                    return "ExperienceCash:integer|Long expected";
            if (message.LoginName != null && message.hasOwnProperty("LoginName"))
                if (!$util.isString(message.LoginName))
                    return "LoginName:string expected";
            if (message.AlipayAccount != null && message.hasOwnProperty("AlipayAccount"))
                if (!$util.isString(message.AlipayAccount))
                    return "AlipayAccount:string expected";
            if (message.TimeSeq != null && message.hasOwnProperty("TimeSeq"))
                if (!$util.isInteger(message.TimeSeq) && !(message.TimeSeq && $util.isInteger(message.TimeSeq.low) && $util.isInteger(message.TimeSeq.high)))
                    return "TimeSeq:integer|Long expected";
            if (message.CouponAmount != null && message.hasOwnProperty("CouponAmount"))
                if (!$util.isInteger(message.CouponAmount) && !(message.CouponAmount && $util.isInteger(message.CouponAmount.low) && $util.isInteger(message.CouponAmount.high)))
                    return "CouponAmount:integer|Long expected";
            if (message.AvatarFrameID != null && message.hasOwnProperty("AvatarFrameID"))
                if (!$util.isInteger(message.AvatarFrameID))
                    return "AvatarFrameID:integer expected";
            if (message.SumWinLoss != null && message.hasOwnProperty("SumWinLoss"))
                if (!$util.isInteger(message.SumWinLoss) && !(message.SumWinLoss && $util.isInteger(message.SumWinLoss.low) && $util.isInteger(message.SumWinLoss.high)))
                    return "SumWinLoss:integer|Long expected";
            return null;
        };

        /**
         * Creates a UserRoomLogonData message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameRoomMsg.UserRoomLogonData
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameRoomMsg.UserRoomLogonData} UserRoomLogonData
         */
        UserRoomLogonData.fromObject = function fromObject(object) {
            if (object instanceof $root.GameRoomMsg.UserRoomLogonData)
                return object;
            var message = new $root.GameRoomMsg.UserRoomLogonData();
            if (object.UserID != null)
                message.UserID = object.UserID | 0;
            if (object.UserType != null)
                message.UserType = object.UserType | 0;
            if (object.NickName != null)
                message.NickName = String(object.NickName);
            if (object.FaceID != null)
                message.FaceID = object.FaceID | 0;
            if (object.Sex != null)
                message.Sex = object.Sex | 0;
            if (object.CashAmount != null)
                if ($util.Long)
                    (message.CashAmount = $util.Long.fromValue(object.CashAmount)).unsigned = false;
                else if (typeof object.CashAmount === "string")
                    message.CashAmount = parseInt(object.CashAmount, 10);
                else if (typeof object.CashAmount === "number")
                    message.CashAmount = object.CashAmount;
                else if (typeof object.CashAmount === "object")
                    message.CashAmount = new $util.LongBits(object.CashAmount.low >>> 0, object.CashAmount.high >>> 0).toNumber();
            if (object.WinCount != null)
                message.WinCount = object.WinCount | 0;
            if (object.LoseCount != null)
                message.LoseCount = object.LoseCount | 0;
            if (object.DrawCount != null)
                message.DrawCount = object.DrawCount | 0;
            if (object.ServerAddr != null)
                message.ServerAddr = String(object.ServerAddr);
            if (object.GameBuff != null)
                message.GameBuff = String(object.GameBuff);
            if (object.TradeId != null)
                if ($util.Long)
                    (message.TradeId = $util.Long.fromValue(object.TradeId)).unsigned = false;
                else if (typeof object.TradeId === "string")
                    message.TradeId = parseInt(object.TradeId, 10);
                else if (typeof object.TradeId === "number")
                    message.TradeId = object.TradeId;
                else if (typeof object.TradeId === "object")
                    message.TradeId = new $util.LongBits(object.TradeId.low >>> 0, object.TradeId.high >>> 0).toNumber();
            if (object.LastWinLose != null)
                message.LastWinLose = object.LastWinLose | 0;
            if (object.SumCharge != null)
                if ($util.Long)
                    (message.SumCharge = $util.Long.fromValue(object.SumCharge)).unsigned = false;
                else if (typeof object.SumCharge === "string")
                    message.SumCharge = parseInt(object.SumCharge, 10);
                else if (typeof object.SumCharge === "number")
                    message.SumCharge = object.SumCharge;
                else if (typeof object.SumCharge === "object")
                    message.SumCharge = new $util.LongBits(object.SumCharge.low >>> 0, object.SumCharge.high >>> 0).toNumber();
            if (object.HasBindPay != null)
                message.HasBindPay = Boolean(object.HasBindPay);
            if (object.SumConvert != null)
                if ($util.Long)
                    (message.SumConvert = $util.Long.fromValue(object.SumConvert)).unsigned = false;
                else if (typeof object.SumConvert === "string")
                    message.SumConvert = parseInt(object.SumConvert, 10);
                else if (typeof object.SumConvert === "number")
                    message.SumConvert = object.SumConvert;
                else if (typeof object.SumConvert === "object")
                    message.SumConvert = new $util.LongBits(object.SumConvert.low >>> 0, object.SumConvert.high >>> 0).toNumber();
            if (object.ExperienceCash != null)
                if ($util.Long)
                    (message.ExperienceCash = $util.Long.fromValue(object.ExperienceCash)).unsigned = false;
                else if (typeof object.ExperienceCash === "string")
                    message.ExperienceCash = parseInt(object.ExperienceCash, 10);
                else if (typeof object.ExperienceCash === "number")
                    message.ExperienceCash = object.ExperienceCash;
                else if (typeof object.ExperienceCash === "object")
                    message.ExperienceCash = new $util.LongBits(object.ExperienceCash.low >>> 0, object.ExperienceCash.high >>> 0).toNumber();
            if (object.LoginName != null)
                message.LoginName = String(object.LoginName);
            if (object.AlipayAccount != null)
                message.AlipayAccount = String(object.AlipayAccount);
            if (object.TimeSeq != null)
                if ($util.Long)
                    (message.TimeSeq = $util.Long.fromValue(object.TimeSeq)).unsigned = false;
                else if (typeof object.TimeSeq === "string")
                    message.TimeSeq = parseInt(object.TimeSeq, 10);
                else if (typeof object.TimeSeq === "number")
                    message.TimeSeq = object.TimeSeq;
                else if (typeof object.TimeSeq === "object")
                    message.TimeSeq = new $util.LongBits(object.TimeSeq.low >>> 0, object.TimeSeq.high >>> 0).toNumber();
            if (object.CouponAmount != null)
                if ($util.Long)
                    (message.CouponAmount = $util.Long.fromValue(object.CouponAmount)).unsigned = false;
                else if (typeof object.CouponAmount === "string")
                    message.CouponAmount = parseInt(object.CouponAmount, 10);
                else if (typeof object.CouponAmount === "number")
                    message.CouponAmount = object.CouponAmount;
                else if (typeof object.CouponAmount === "object")
                    message.CouponAmount = new $util.LongBits(object.CouponAmount.low >>> 0, object.CouponAmount.high >>> 0).toNumber();
            if (object.AvatarFrameID != null)
                message.AvatarFrameID = object.AvatarFrameID | 0;
            if (object.SumWinLoss != null)
                if ($util.Long)
                    (message.SumWinLoss = $util.Long.fromValue(object.SumWinLoss)).unsigned = false;
                else if (typeof object.SumWinLoss === "string")
                    message.SumWinLoss = parseInt(object.SumWinLoss, 10);
                else if (typeof object.SumWinLoss === "number")
                    message.SumWinLoss = object.SumWinLoss;
                else if (typeof object.SumWinLoss === "object")
                    message.SumWinLoss = new $util.LongBits(object.SumWinLoss.low >>> 0, object.SumWinLoss.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a UserRoomLogonData message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameRoomMsg.UserRoomLogonData
         * @static
         * @param {GameRoomMsg.UserRoomLogonData} message UserRoomLogonData
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UserRoomLogonData.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.UserID = 0;
                object.UserType = 0;
                object.NickName = "";
                object.FaceID = 0;
                object.Sex = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.CashAmount = options.longs === String ? long.toString() :options.longs === Number ? long.toNumber() :long;
                } else
                    object.CashAmount = options.longs === String ? "0" :0;
                object.WinCount = 0;
                object.LoseCount = 0;
                object.DrawCount = 0;
                object.ServerAddr = "";
                object.GameBuff = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.TradeId = options.longs === String ? long.toString() :options.longs === Number ? long.toNumber() :long;
                } else
                    object.TradeId = options.longs === String ? "0" :0;
                object.LastWinLose = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.SumCharge = options.longs === String ? long.toString() :options.longs === Number ? long.toNumber() :long;
                } else
                    object.SumCharge = options.longs === String ? "0" :0;
                object.HasBindPay = false;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.SumConvert = options.longs === String ? long.toString() :options.longs === Number ? long.toNumber() :long;
                } else
                    object.SumConvert = options.longs === String ? "0" :0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.ExperienceCash = options.longs === String ? long.toString() :options.longs === Number ? long.toNumber() :long;
                } else
                    object.ExperienceCash = options.longs === String ? "0" :0;
                object.LoginName = "";
                object.AlipayAccount = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.TimeSeq = options.longs === String ? long.toString() :options.longs === Number ? long.toNumber() :long;
                } else
                    object.TimeSeq = options.longs === String ? "0" :0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.CouponAmount = options.longs === String ? long.toString() :options.longs === Number ? long.toNumber() :long;
                } else
                    object.CouponAmount = options.longs === String ? "0" :0;
                object.AvatarFrameID = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.SumWinLoss = options.longs === String ? long.toString() :options.longs === Number ? long.toNumber() :long;
                } else
                    object.SumWinLoss = options.longs === String ? "0" :0;
            }
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                object.UserID = message.UserID;
            if (message.UserType != null && message.hasOwnProperty("UserType"))
                object.UserType = message.UserType;
            if (message.NickName != null && message.hasOwnProperty("NickName"))
                object.NickName = message.NickName;
            if (message.FaceID != null && message.hasOwnProperty("FaceID"))
                object.FaceID = message.FaceID;
            if (message.Sex != null && message.hasOwnProperty("Sex"))
                object.Sex = message.Sex;
            if (message.CashAmount != null && message.hasOwnProperty("CashAmount"))
                if (typeof message.CashAmount === "number")
                    object.CashAmount = options.longs === String ? String(message.CashAmount) :message.CashAmount;
                else
                    object.CashAmount = options.longs === String ? $util.Long.prototype.toString.call(message.CashAmount) :options.longs === Number ? new $util.LongBits(message.CashAmount.low >>> 0, message.CashAmount.high >>> 0).toNumber() :message.CashAmount;
            if (message.WinCount != null && message.hasOwnProperty("WinCount"))
                object.WinCount = message.WinCount;
            if (message.LoseCount != null && message.hasOwnProperty("LoseCount"))
                object.LoseCount = message.LoseCount;
            if (message.DrawCount != null && message.hasOwnProperty("DrawCount"))
                object.DrawCount = message.DrawCount;
            if (message.ServerAddr != null && message.hasOwnProperty("ServerAddr"))
                object.ServerAddr = message.ServerAddr;
            if (message.GameBuff != null && message.hasOwnProperty("GameBuff"))
                object.GameBuff = message.GameBuff;
            if (message.TradeId != null && message.hasOwnProperty("TradeId"))
                if (typeof message.TradeId === "number")
                    object.TradeId = options.longs === String ? String(message.TradeId) :message.TradeId;
                else
                    object.TradeId = options.longs === String ? $util.Long.prototype.toString.call(message.TradeId) :options.longs === Number ? new $util.LongBits(message.TradeId.low >>> 0, message.TradeId.high >>> 0).toNumber() :message.TradeId;
            if (message.LastWinLose != null && message.hasOwnProperty("LastWinLose"))
                object.LastWinLose = message.LastWinLose;
            if (message.SumCharge != null && message.hasOwnProperty("SumCharge"))
                if (typeof message.SumCharge === "number")
                    object.SumCharge = options.longs === String ? String(message.SumCharge) :message.SumCharge;
                else
                    object.SumCharge = options.longs === String ? $util.Long.prototype.toString.call(message.SumCharge) :options.longs === Number ? new $util.LongBits(message.SumCharge.low >>> 0, message.SumCharge.high >>> 0).toNumber() :message.SumCharge;
            if (message.HasBindPay != null && message.hasOwnProperty("HasBindPay"))
                object.HasBindPay = message.HasBindPay;
            if (message.SumConvert != null && message.hasOwnProperty("SumConvert"))
                if (typeof message.SumConvert === "number")
                    object.SumConvert = options.longs === String ? String(message.SumConvert) :message.SumConvert;
                else
                    object.SumConvert = options.longs === String ? $util.Long.prototype.toString.call(message.SumConvert) :options.longs === Number ? new $util.LongBits(message.SumConvert.low >>> 0, message.SumConvert.high >>> 0).toNumber() :message.SumConvert;
            if (message.ExperienceCash != null && message.hasOwnProperty("ExperienceCash"))
                if (typeof message.ExperienceCash === "number")
                    object.ExperienceCash = options.longs === String ? String(message.ExperienceCash) :message.ExperienceCash;
                else
                    object.ExperienceCash = options.longs === String ? $util.Long.prototype.toString.call(message.ExperienceCash) :options.longs === Number ? new $util.LongBits(message.ExperienceCash.low >>> 0, message.ExperienceCash.high >>> 0).toNumber() :message.ExperienceCash;
            if (message.LoginName != null && message.hasOwnProperty("LoginName"))
                object.LoginName = message.LoginName;
            if (message.AlipayAccount != null && message.hasOwnProperty("AlipayAccount"))
                object.AlipayAccount = message.AlipayAccount;
            if (message.TimeSeq != null && message.hasOwnProperty("TimeSeq"))
                if (typeof message.TimeSeq === "number")
                    object.TimeSeq = options.longs === String ? String(message.TimeSeq) :message.TimeSeq;
                else
                    object.TimeSeq = options.longs === String ? $util.Long.prototype.toString.call(message.TimeSeq) :options.longs === Number ? new $util.LongBits(message.TimeSeq.low >>> 0, message.TimeSeq.high >>> 0).toNumber() :message.TimeSeq;
            if (message.CouponAmount != null && message.hasOwnProperty("CouponAmount"))
                if (typeof message.CouponAmount === "number")
                    object.CouponAmount = options.longs === String ? String(message.CouponAmount) :message.CouponAmount;
                else
                    object.CouponAmount = options.longs === String ? $util.Long.prototype.toString.call(message.CouponAmount) :options.longs === Number ? new $util.LongBits(message.CouponAmount.low >>> 0, message.CouponAmount.high >>> 0).toNumber() :message.CouponAmount;
            if (message.AvatarFrameID != null && message.hasOwnProperty("AvatarFrameID"))
                object.AvatarFrameID = message.AvatarFrameID;
            if (message.SumWinLoss != null && message.hasOwnProperty("SumWinLoss"))
                if (typeof message.SumWinLoss === "number")
                    object.SumWinLoss = options.longs === String ? String(message.SumWinLoss) :message.SumWinLoss;
                else
                    object.SumWinLoss = options.longs === String ? $util.Long.prototype.toString.call(message.SumWinLoss) :options.longs === Number ? new $util.LongBits(message.SumWinLoss.low >>> 0, message.SumWinLoss.high >>> 0).toNumber() :message.SumWinLoss;
            return object;
        };

        /**
         * Converts this UserRoomLogonData to JSON.
         * @function toJSON
         * @memberof GameRoomMsg.UserRoomLogonData
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserRoomLogonData.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UserRoomLogonData;
    })();

    GameRoomMsg.UserSit = (function() {

        /**
         * Properties of a UserSit.
         * @memberof GameRoomMsg
         * @interface IUserSit
         * @property {number} TableNo UserSit TableNo
         * @property {number} SeatNo UserSit SeatNo
         */

        /**
         * Constructs a new UserSit.
         * @memberof GameRoomMsg
         * @classdesc Represents a UserSit.
         * @implements IUserSit
         * @constructor
         * @param {GameRoomMsg.IUserSit=} [properties] Properties to set
         */
        function UserSit(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UserSit TableNo.
         * @member {number} TableNo
         * @memberof GameRoomMsg.UserSit
         * @instance
         */
        UserSit.prototype.TableNo = 0;

        /**
         * UserSit SeatNo.
         * @member {number} SeatNo
         * @memberof GameRoomMsg.UserSit
         * @instance
         */
        UserSit.prototype.SeatNo = 0;

        /**
         * Creates a new UserSit instance using the specified properties.
         * @function create
         * @memberof GameRoomMsg.UserSit
         * @static
         * @param {GameRoomMsg.IUserSit=} [properties] Properties to set
         * @returns {GameRoomMsg.UserSit} UserSit instance
         */
        UserSit.create = function create(properties) {
            return new UserSit(properties);
        };

        /**
         * Encodes the specified UserSit message. Does not implicitly {@link GameRoomMsg.UserSit.verify|verify} messages.
         * @function encode
         * @memberof GameRoomMsg.UserSit
         * @static
         * @param {GameRoomMsg.IUserSit} message UserSit message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserSit.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.TableNo);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.SeatNo);
            return writer;
        };

        /**
         * Encodes the specified UserSit message, length delimited. Does not implicitly {@link GameRoomMsg.UserSit.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameRoomMsg.UserSit
         * @static
         * @param {GameRoomMsg.IUserSit} message UserSit message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserSit.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UserSit message from the specified reader or buffer.
         * @function decode
         * @memberof GameRoomMsg.UserSit
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameRoomMsg.UserSit} UserSit
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserSit.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len :reader.pos + length, message = new $root.GameRoomMsg.UserSit();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.TableNo = reader.int32();
                    break;
                case 2:
                    message.SeatNo = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("TableNo"))
                throw $util.ProtocolError("missing required 'TableNo'", { instance:message });
            if (!message.hasOwnProperty("SeatNo"))
                throw $util.ProtocolError("missing required 'SeatNo'", { instance:message });
            return message;
        };

        /**
         * Decodes a UserSit message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameRoomMsg.UserSit
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameRoomMsg.UserSit} UserSit
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserSit.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a UserSit message.
         * @function verify
         * @memberof GameRoomMsg.UserSit
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UserSit.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.TableNo))
                return "TableNo:integer expected";
            if (!$util.isInteger(message.SeatNo))
                return "SeatNo:integer expected";
            return null;
        };

        /**
         * Creates a UserSit message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameRoomMsg.UserSit
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameRoomMsg.UserSit} UserSit
         */
        UserSit.fromObject = function fromObject(object) {
            if (object instanceof $root.GameRoomMsg.UserSit)
                return object;
            var message = new $root.GameRoomMsg.UserSit();
            if (object.TableNo != null)
                message.TableNo = object.TableNo | 0;
            if (object.SeatNo != null)
                message.SeatNo = object.SeatNo | 0;
            return message;
        };

        /**
         * Creates a plain object from a UserSit message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameRoomMsg.UserSit
         * @static
         * @param {GameRoomMsg.UserSit} message UserSit
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UserSit.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.TableNo = 0;
                object.SeatNo = 0;
            }
            if (message.TableNo != null && message.hasOwnProperty("TableNo"))
                object.TableNo = message.TableNo;
            if (message.SeatNo != null && message.hasOwnProperty("SeatNo"))
                object.SeatNo = message.SeatNo;
            return object;
        };

        /**
         * Converts this UserSit to JSON.
         * @function toJSON
         * @memberof GameRoomMsg.UserSit
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserSit.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UserSit;
    })();

    GameRoomMsg.GameVerInfo = (function() {

        /**
         * Properties of a GameVerInfo.
         * @memberof GameRoomMsg
         * @interface IGameVerInfo
         * @property {string} AndroidVersion GameVerInfo AndroidVersion
         * @property {string} IOSVersion GameVerInfo IOSVersion
         */

        /**
         * Constructs a new GameVerInfo.
         * @memberof GameRoomMsg
         * @classdesc Represents a GameVerInfo.
         * @implements IGameVerInfo
         * @constructor
         * @param {GameRoomMsg.IGameVerInfo=} [properties] Properties to set
         */
        function GameVerInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GameVerInfo AndroidVersion.
         * @member {string} AndroidVersion
         * @memberof GameRoomMsg.GameVerInfo
         * @instance
         */
        GameVerInfo.prototype.AndroidVersion = "";

        /**
         * GameVerInfo IOSVersion.
         * @member {string} IOSVersion
         * @memberof GameRoomMsg.GameVerInfo
         * @instance
         */
        GameVerInfo.prototype.IOSVersion = "";

        /**
         * Creates a new GameVerInfo instance using the specified properties.
         * @function create
         * @memberof GameRoomMsg.GameVerInfo
         * @static
         * @param {GameRoomMsg.IGameVerInfo=} [properties] Properties to set
         * @returns {GameRoomMsg.GameVerInfo} GameVerInfo instance
         */
        GameVerInfo.create = function create(properties) {
            return new GameVerInfo(properties);
        };

        /**
         * Encodes the specified GameVerInfo message. Does not implicitly {@link GameRoomMsg.GameVerInfo.verify|verify} messages.
         * @function encode
         * @memberof GameRoomMsg.GameVerInfo
         * @static
         * @param {GameRoomMsg.IGameVerInfo} message GameVerInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameVerInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.AndroidVersion);
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.IOSVersion);
            return writer;
        };

        /**
         * Encodes the specified GameVerInfo message, length delimited. Does not implicitly {@link GameRoomMsg.GameVerInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameRoomMsg.GameVerInfo
         * @static
         * @param {GameRoomMsg.IGameVerInfo} message GameVerInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameVerInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GameVerInfo message from the specified reader or buffer.
         * @function decode
         * @memberof GameRoomMsg.GameVerInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameRoomMsg.GameVerInfo} GameVerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameVerInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len :reader.pos + length, message = new $root.GameRoomMsg.GameVerInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.AndroidVersion = reader.string();
                    break;
                case 2:
                    message.IOSVersion = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("AndroidVersion"))
                throw $util.ProtocolError("missing required 'AndroidVersion'", { instance:message });
            if (!message.hasOwnProperty("IOSVersion"))
                throw $util.ProtocolError("missing required 'IOSVersion'", { instance:message });
            return message;
        };

        /**
         * Decodes a GameVerInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameRoomMsg.GameVerInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameRoomMsg.GameVerInfo} GameVerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameVerInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GameVerInfo message.
         * @function verify
         * @memberof GameRoomMsg.GameVerInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GameVerInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.AndroidVersion))
                return "AndroidVersion:string expected";
            if (!$util.isString(message.IOSVersion))
                return "IOSVersion:string expected";
            return null;
        };

        /**
         * Creates a GameVerInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameRoomMsg.GameVerInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameRoomMsg.GameVerInfo} GameVerInfo
         */
        GameVerInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.GameRoomMsg.GameVerInfo)
                return object;
            var message = new $root.GameRoomMsg.GameVerInfo();
            if (object.AndroidVersion != null)
                message.AndroidVersion = String(object.AndroidVersion);
            if (object.IOSVersion != null)
                message.IOSVersion = String(object.IOSVersion);
            return message;
        };

        /**
         * Creates a plain object from a GameVerInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameRoomMsg.GameVerInfo
         * @static
         * @param {GameRoomMsg.GameVerInfo} message GameVerInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GameVerInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.AndroidVersion = "";
                object.IOSVersion = "";
            }
            if (message.AndroidVersion != null && message.hasOwnProperty("AndroidVersion"))
                object.AndroidVersion = message.AndroidVersion;
            if (message.IOSVersion != null && message.hasOwnProperty("IOSVersion"))
                object.IOSVersion = message.IOSVersion;
            return object;
        };

        /**
         * Converts this GameVerInfo to JSON.
         * @function toJSON
         * @memberof GameRoomMsg.GameVerInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GameVerInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GameVerInfo;
    })();

    GameRoomMsg.RoomInfo = (function() {

        /**
         * Properties of a RoomInfo.
         * @memberof GameRoomMsg
         * @interface IRoomInfo
         * @property {number} GameID RoomInfo GameID
         * @property {string} GameName RoomInfo GameName
         * @property {string} Flag RoomInfo Flag
         * @property {number} BaseScore RoomInfo BaseScore
         */

        /**
         * Constructs a new RoomInfo.
         * @memberof GameRoomMsg
         * @classdesc Represents a RoomInfo.
         * @implements IRoomInfo
         * @constructor
         * @param {GameRoomMsg.IRoomInfo=} [properties] Properties to set
         */
        function RoomInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RoomInfo GameID.
         * @member {number} GameID
         * @memberof GameRoomMsg.RoomInfo
         * @instance
         */
        RoomInfo.prototype.GameID = 0;

        /**
         * RoomInfo GameName.
         * @member {string} GameName
         * @memberof GameRoomMsg.RoomInfo
         * @instance
         */
        RoomInfo.prototype.GameName = "";

        /**
         * RoomInfo Flag.
         * @member {string} Flag
         * @memberof GameRoomMsg.RoomInfo
         * @instance
         */
        RoomInfo.prototype.Flag = "";

        /**
         * RoomInfo BaseScore.
         * @member {number} BaseScore
         * @memberof GameRoomMsg.RoomInfo
         * @instance
         */
        RoomInfo.prototype.BaseScore = 0;

        /**
         * Creates a new RoomInfo instance using the specified properties.
         * @function create
         * @memberof GameRoomMsg.RoomInfo
         * @static
         * @param {GameRoomMsg.IRoomInfo=} [properties] Properties to set
         * @returns {GameRoomMsg.RoomInfo} RoomInfo instance
         */
        RoomInfo.create = function create(properties) {
            return new RoomInfo(properties);
        };

        /**
         * Encodes the specified RoomInfo message. Does not implicitly {@link GameRoomMsg.RoomInfo.verify|verify} messages.
         * @function encode
         * @memberof GameRoomMsg.RoomInfo
         * @static
         * @param {GameRoomMsg.IRoomInfo} message RoomInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RoomInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.GameID);
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.GameName);
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.Flag);
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.BaseScore);
            return writer;
        };

        /**
         * Encodes the specified RoomInfo message, length delimited. Does not implicitly {@link GameRoomMsg.RoomInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameRoomMsg.RoomInfo
         * @static
         * @param {GameRoomMsg.IRoomInfo} message RoomInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RoomInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RoomInfo message from the specified reader or buffer.
         * @function decode
         * @memberof GameRoomMsg.RoomInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameRoomMsg.RoomInfo} RoomInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RoomInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len :reader.pos + length, message = new $root.GameRoomMsg.RoomInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.GameID = reader.int32();
                    break;
                case 2:
                    message.GameName = reader.string();
                    break;
                case 3:
                    message.Flag = reader.string();
                    break;
                case 4:
                    message.BaseScore = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("GameID"))
                throw $util.ProtocolError("missing required 'GameID'", { instance:message });
            if (!message.hasOwnProperty("GameName"))
                throw $util.ProtocolError("missing required 'GameName'", { instance:message });
            if (!message.hasOwnProperty("Flag"))
                throw $util.ProtocolError("missing required 'Flag'", { instance:message });
            if (!message.hasOwnProperty("BaseScore"))
                throw $util.ProtocolError("missing required 'BaseScore'", { instance:message });
            return message;
        };

        /**
         * Decodes a RoomInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameRoomMsg.RoomInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameRoomMsg.RoomInfo} RoomInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RoomInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RoomInfo message.
         * @function verify
         * @memberof GameRoomMsg.RoomInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RoomInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.GameID))
                return "GameID:integer expected";
            if (!$util.isString(message.GameName))
                return "GameName:string expected";
            if (!$util.isString(message.Flag))
                return "Flag:string expected";
            if (!$util.isInteger(message.BaseScore))
                return "BaseScore:integer expected";
            return null;
        };

        /**
         * Creates a RoomInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameRoomMsg.RoomInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameRoomMsg.RoomInfo} RoomInfo
         */
        RoomInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.GameRoomMsg.RoomInfo)
                return object;
            var message = new $root.GameRoomMsg.RoomInfo();
            if (object.GameID != null)
                message.GameID = object.GameID | 0;
            if (object.GameName != null)
                message.GameName = String(object.GameName);
            if (object.Flag != null)
                message.Flag = String(object.Flag);
            if (object.BaseScore != null)
                message.BaseScore = object.BaseScore | 0;
            return message;
        };

        /**
         * Creates a plain object from a RoomInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameRoomMsg.RoomInfo
         * @static
         * @param {GameRoomMsg.RoomInfo} message RoomInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RoomInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.GameID = 0;
                object.GameName = "";
                object.Flag = "";
                object.BaseScore = 0;
            }
            if (message.GameID != null && message.hasOwnProperty("GameID"))
                object.GameID = message.GameID;
            if (message.GameName != null && message.hasOwnProperty("GameName"))
                object.GameName = message.GameName;
            if (message.Flag != null && message.hasOwnProperty("Flag"))
                object.Flag = message.Flag;
            if (message.BaseScore != null && message.hasOwnProperty("BaseScore"))
                object.BaseScore = message.BaseScore;
            return object;
        };

        /**
         * Converts this RoomInfo to JSON.
         * @function toJSON
         * @memberof GameRoomMsg.RoomInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RoomInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return RoomInfo;
    })();

    GameRoomMsg.GameStartMsg = (function() {

        /**
         * Properties of a GameStartMsg.
         * @memberof GameRoomMsg
         * @interface IGameStartMsg
         * @property {number} GameID GameStartMsg GameID
         * @property {number} UserID GameStartMsg UserID
         * @property {GameRoomMsg.ILoginGameRoomInfo|null} [LoginRequestData] GameStartMsg LoginRequestData
         */

        /**
         * Constructs a new GameStartMsg.
         * @memberof GameRoomMsg
         * @classdesc Represents a GameStartMsg.
         * @implements IGameStartMsg
         * @constructor
         * @param {GameRoomMsg.IGameStartMsg=} [properties] Properties to set
         */
        function GameStartMsg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GameStartMsg GameID.
         * @member {number} GameID
         * @memberof GameRoomMsg.GameStartMsg
         * @instance
         */
        GameStartMsg.prototype.GameID = 0;

        /**
         * GameStartMsg UserID.
         * @member {number} UserID
         * @memberof GameRoomMsg.GameStartMsg
         * @instance
         */
        GameStartMsg.prototype.UserID = 0;

        /**
         * GameStartMsg LoginRequestData.
         * @member {GameRoomMsg.ILoginGameRoomInfo|null|undefined} LoginRequestData
         * @memberof GameRoomMsg.GameStartMsg
         * @instance
         */
        GameStartMsg.prototype.LoginRequestData = null;

        /**
         * Creates a new GameStartMsg instance using the specified properties.
         * @function create
         * @memberof GameRoomMsg.GameStartMsg
         * @static
         * @param {GameRoomMsg.IGameStartMsg=} [properties] Properties to set
         * @returns {GameRoomMsg.GameStartMsg} GameStartMsg instance
         */
        GameStartMsg.create = function create(properties) {
            return new GameStartMsg(properties);
        };

        /**
         * Encodes the specified GameStartMsg message. Does not implicitly {@link GameRoomMsg.GameStartMsg.verify|verify} messages.
         * @function encode
         * @memberof GameRoomMsg.GameStartMsg
         * @static
         * @param {GameRoomMsg.IGameStartMsg} message GameStartMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameStartMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.GameID);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.UserID);
            if (message.LoginRequestData != null && message.hasOwnProperty("LoginRequestData"))
                $root.GameRoomMsg.LoginGameRoomInfo.encode(message.LoginRequestData, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified GameStartMsg message, length delimited. Does not implicitly {@link GameRoomMsg.GameStartMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameRoomMsg.GameStartMsg
         * @static
         * @param {GameRoomMsg.IGameStartMsg} message GameStartMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameStartMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GameStartMsg message from the specified reader or buffer.
         * @function decode
         * @memberof GameRoomMsg.GameStartMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameRoomMsg.GameStartMsg} GameStartMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameStartMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len :reader.pos + length, message = new $root.GameRoomMsg.GameStartMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.GameID = reader.int32();
                    break;
                case 2:
                    message.UserID = reader.int32();
                    break;
                case 3:
                    message.LoginRequestData = $root.GameRoomMsg.LoginGameRoomInfo.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("GameID"))
                throw $util.ProtocolError("missing required 'GameID'", { instance:message });
            if (!message.hasOwnProperty("UserID"))
                throw $util.ProtocolError("missing required 'UserID'", { instance:message });
            return message;
        };

        /**
         * Decodes a GameStartMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameRoomMsg.GameStartMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameRoomMsg.GameStartMsg} GameStartMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameStartMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GameStartMsg message.
         * @function verify
         * @memberof GameRoomMsg.GameStartMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GameStartMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.GameID))
                return "GameID:integer expected";
            if (!$util.isInteger(message.UserID))
                return "UserID:integer expected";
            if (message.LoginRequestData != null && message.hasOwnProperty("LoginRequestData")) {
                var error = $root.GameRoomMsg.LoginGameRoomInfo.verify(message.LoginRequestData);
                if (error)
                    return "LoginRequestData." + error;
            }
            return null;
        };

        /**
         * Creates a GameStartMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameRoomMsg.GameStartMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameRoomMsg.GameStartMsg} GameStartMsg
         */
        GameStartMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.GameRoomMsg.GameStartMsg)
                return object;
            var message = new $root.GameRoomMsg.GameStartMsg();
            if (object.GameID != null)
                message.GameID = object.GameID | 0;
            if (object.UserID != null)
                message.UserID = object.UserID | 0;
            if (object.LoginRequestData != null) {
                if (typeof object.LoginRequestData !== "object")
                    throw TypeError(".GameRoomMsg.GameStartMsg.LoginRequestData:object expected");
                message.LoginRequestData = $root.GameRoomMsg.LoginGameRoomInfo.fromObject(object.LoginRequestData);
            }
            return message;
        };

        /**
         * Creates a plain object from a GameStartMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameRoomMsg.GameStartMsg
         * @static
         * @param {GameRoomMsg.GameStartMsg} message GameStartMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GameStartMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.GameID = 0;
                object.UserID = 0;
                object.LoginRequestData = null;
            }
            if (message.GameID != null && message.hasOwnProperty("GameID"))
                object.GameID = message.GameID;
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                object.UserID = message.UserID;
            if (message.LoginRequestData != null && message.hasOwnProperty("LoginRequestData"))
                object.LoginRequestData = $root.GameRoomMsg.LoginGameRoomInfo.toObject(message.LoginRequestData, options);
            return object;
        };

        /**
         * Converts this GameStartMsg to JSON.
         * @function toJSON
         * @memberof GameRoomMsg.GameStartMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GameStartMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GameStartMsg;
    })();

    GameRoomMsg.GameStartRetMsg = (function() {

        /**
         * Properties of a GameStartRetMsg.
         * @memberof GameRoomMsg
         * @interface IGameStartRetMsg
         * @property {string} ErrMsg GameStartRetMsg ErrMsg
         * @property {number} RtnCode GameStartRetMsg RtnCode
         * @property {GameRoomMsg.ILoginGameRoomInfo|null} [LoginRequestData] GameStartRetMsg LoginRequestData
         */

        /**
         * Constructs a new GameStartRetMsg.
         * @memberof GameRoomMsg
         * @classdesc Represents a GameStartRetMsg.
         * @implements IGameStartRetMsg
         * @constructor
         * @param {GameRoomMsg.IGameStartRetMsg=} [properties] Properties to set
         */
        function GameStartRetMsg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GameStartRetMsg ErrMsg.
         * @member {string} ErrMsg
         * @memberof GameRoomMsg.GameStartRetMsg
         * @instance
         */
        GameStartRetMsg.prototype.ErrMsg = "";

        /**
         * GameStartRetMsg RtnCode.
         * @member {number} RtnCode
         * @memberof GameRoomMsg.GameStartRetMsg
         * @instance
         */
        GameStartRetMsg.prototype.RtnCode = 0;

        /**
         * GameStartRetMsg LoginRequestData.
         * @member {GameRoomMsg.ILoginGameRoomInfo|null|undefined} LoginRequestData
         * @memberof GameRoomMsg.GameStartRetMsg
         * @instance
         */
        GameStartRetMsg.prototype.LoginRequestData = null;

        /**
         * Creates a new GameStartRetMsg instance using the specified properties.
         * @function create
         * @memberof GameRoomMsg.GameStartRetMsg
         * @static
         * @param {GameRoomMsg.IGameStartRetMsg=} [properties] Properties to set
         * @returns {GameRoomMsg.GameStartRetMsg} GameStartRetMsg instance
         */
        GameStartRetMsg.create = function create(properties) {
            return new GameStartRetMsg(properties);
        };

        /**
         * Encodes the specified GameStartRetMsg message. Does not implicitly {@link GameRoomMsg.GameStartRetMsg.verify|verify} messages.
         * @function encode
         * @memberof GameRoomMsg.GameStartRetMsg
         * @static
         * @param {GameRoomMsg.IGameStartRetMsg} message GameStartRetMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameStartRetMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.ErrMsg);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.RtnCode);
            if (message.LoginRequestData != null && message.hasOwnProperty("LoginRequestData"))
                $root.GameRoomMsg.LoginGameRoomInfo.encode(message.LoginRequestData, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified GameStartRetMsg message, length delimited. Does not implicitly {@link GameRoomMsg.GameStartRetMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameRoomMsg.GameStartRetMsg
         * @static
         * @param {GameRoomMsg.IGameStartRetMsg} message GameStartRetMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameStartRetMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GameStartRetMsg message from the specified reader or buffer.
         * @function decode
         * @memberof GameRoomMsg.GameStartRetMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameRoomMsg.GameStartRetMsg} GameStartRetMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameStartRetMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len :reader.pos + length, message = new $root.GameRoomMsg.GameStartRetMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.ErrMsg = reader.string();
                    break;
                case 2:
                    message.RtnCode = reader.int32();
                    break;
                case 3:
                    message.LoginRequestData = $root.GameRoomMsg.LoginGameRoomInfo.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("ErrMsg"))
                throw $util.ProtocolError("missing required 'ErrMsg'", { instance:message });
            if (!message.hasOwnProperty("RtnCode"))
                throw $util.ProtocolError("missing required 'RtnCode'", { instance:message });
            return message;
        };

        /**
         * Decodes a GameStartRetMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameRoomMsg.GameStartRetMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameRoomMsg.GameStartRetMsg} GameStartRetMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameStartRetMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GameStartRetMsg message.
         * @function verify
         * @memberof GameRoomMsg.GameStartRetMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GameStartRetMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.ErrMsg))
                return "ErrMsg:string expected";
            if (!$util.isInteger(message.RtnCode))
                return "RtnCode:integer expected";
            if (message.LoginRequestData != null && message.hasOwnProperty("LoginRequestData")) {
                var error = $root.GameRoomMsg.LoginGameRoomInfo.verify(message.LoginRequestData);
                if (error)
                    return "LoginRequestData." + error;
            }
            return null;
        };

        /**
         * Creates a GameStartRetMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameRoomMsg.GameStartRetMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameRoomMsg.GameStartRetMsg} GameStartRetMsg
         */
        GameStartRetMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.GameRoomMsg.GameStartRetMsg)
                return object;
            var message = new $root.GameRoomMsg.GameStartRetMsg();
            if (object.ErrMsg != null)
                message.ErrMsg = String(object.ErrMsg);
            if (object.RtnCode != null)
                message.RtnCode = object.RtnCode | 0;
            if (object.LoginRequestData != null) {
                if (typeof object.LoginRequestData !== "object")
                    throw TypeError(".GameRoomMsg.GameStartRetMsg.LoginRequestData:object expected");
                message.LoginRequestData = $root.GameRoomMsg.LoginGameRoomInfo.fromObject(object.LoginRequestData);
            }
            return message;
        };

        /**
         * Creates a plain object from a GameStartRetMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameRoomMsg.GameStartRetMsg
         * @static
         * @param {GameRoomMsg.GameStartRetMsg} message GameStartRetMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GameStartRetMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.ErrMsg = "";
                object.RtnCode = 0;
                object.LoginRequestData = null;
            }
            if (message.ErrMsg != null && message.hasOwnProperty("ErrMsg"))
                object.ErrMsg = message.ErrMsg;
            if (message.RtnCode != null && message.hasOwnProperty("RtnCode"))
                object.RtnCode = message.RtnCode;
            if (message.LoginRequestData != null && message.hasOwnProperty("LoginRequestData"))
                object.LoginRequestData = $root.GameRoomMsg.LoginGameRoomInfo.toObject(message.LoginRequestData, options);
            return object;
        };

        /**
         * Converts this GameStartRetMsg to JSON.
         * @function toJSON
         * @memberof GameRoomMsg.GameStartRetMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GameStartRetMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GameStartRetMsg;
    })();

    return GameRoomMsg;
})();

module.exports = $root;
