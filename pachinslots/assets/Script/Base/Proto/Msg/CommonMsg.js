/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

//var $protobuf = require("protobufjs/minimal");
var $protobuf = protobuf;

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.CommonMsg = (function() {

    /**
     * Namespace CommonMsg.
     * @exports CommonMsg
     * @namespace
     */
    var CommonMsg = {};

    CommonMsg.RetMessage = (function() {

        /**
         * Properties of a RetMessage.
         * @memberof CommonMsg
         * @interface IRetMessage
         * @property {number} Code RetMessage Code
         * @property {string} Message RetMessage Message
         */

        /**
         * Constructs a new RetMessage.
         * @memberof CommonMsg
         * @classdesc Represents a RetMessage.
         * @implements IRetMessage
         * @constructor
         * @param {CommonMsg.IRetMessage=} [properties] Properties to set
         */
        function RetMessage(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RetMessage Code.
         * @member {number} Code
         * @memberof CommonMsg.RetMessage
         * @instance
         */
        RetMessage.prototype.Code = 0;

        /**
         * RetMessage Message.
         * @member {string} Message
         * @memberof CommonMsg.RetMessage
         * @instance
         */
        RetMessage.prototype.Message = "";

        /**
         * Creates a new RetMessage instance using the specified properties.
         * @function create
         * @memberof CommonMsg.RetMessage
         * @static
         * @param {CommonMsg.IRetMessage=} [properties] Properties to set
         * @returns {CommonMsg.RetMessage} RetMessage instance
         */
        RetMessage.create = function create(properties) {
            return new RetMessage(properties);
        };

        /**
         * Encodes the specified RetMessage message. Does not implicitly {@link CommonMsg.RetMessage.verify|verify} messages.
         * @function encode
         * @memberof CommonMsg.RetMessage
         * @static
         * @param {CommonMsg.IRetMessage} message RetMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RetMessage.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.Code);
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.Message);
            return writer;
        };

        /**
         * Encodes the specified RetMessage message, length delimited. Does not implicitly {@link CommonMsg.RetMessage.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CommonMsg.RetMessage
         * @static
         * @param {CommonMsg.IRetMessage} message RetMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RetMessage.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RetMessage message from the specified reader or buffer.
         * @function decode
         * @memberof CommonMsg.RetMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CommonMsg.RetMessage} RetMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RetMessage.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CommonMsg.RetMessage();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Code = reader.int32();
                    break;
                case 2:
                    message.Message = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("Code"))
                throw $util.ProtocolError("missing required 'Code'", { instance: message });
            if (!message.hasOwnProperty("Message"))
                throw $util.ProtocolError("missing required 'Message'", { instance: message });
            return message;
        };

        /**
         * Decodes a RetMessage message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CommonMsg.RetMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CommonMsg.RetMessage} RetMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RetMessage.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RetMessage message.
         * @function verify
         * @memberof CommonMsg.RetMessage
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RetMessage.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.Code))
                return "Code: integer expected";
            if (!$util.isString(message.Message))
                return "Message: string expected";
            return null;
        };

        /**
         * Creates a RetMessage message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CommonMsg.RetMessage
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CommonMsg.RetMessage} RetMessage
         */
        RetMessage.fromObject = function fromObject(object) {
            if (object instanceof $root.CommonMsg.RetMessage)
                return object;
            var message = new $root.CommonMsg.RetMessage();
            if (object.Code != null)
                message.Code = object.Code | 0;
            if (object.Message != null)
                message.Message = String(object.Message);
            return message;
        };

        /**
         * Creates a plain object from a RetMessage message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CommonMsg.RetMessage
         * @static
         * @param {CommonMsg.RetMessage} message RetMessage
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RetMessage.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.Code = 0;
                object.Message = "";
            }
            if (message.Code != null && message.hasOwnProperty("Code"))
                object.Code = message.Code;
            if (message.Message != null && message.hasOwnProperty("Message"))
                object.Message = message.Message;
            return object;
        };

        /**
         * Converts this RetMessage to JSON.
         * @function toJSON
         * @memberof CommonMsg.RetMessage
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RetMessage.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return RetMessage;
    })();

    CommonMsg.RPCInfo = (function() {

        /**
         * Properties of a RPCInfo.
         * @memberof CommonMsg
         * @interface IRPCInfo
         * @property {string} ConnID RPCInfo ConnID
         * @property {number} QueueID RPCInfo QueueID
         * @property {string} IPAddress RPCInfo IPAddress
         * @property {number|null} [UserID] RPCInfo UserID
         * @property {string|null} [Cer] RPCInfo Cer
         * @property {number} RouteServerID RPCInfo RouteServerID
         * @property {string|null} [ExtendInfo] RPCInfo ExtendInfo
         * @property {string|null} [ConnToken] RPCInfo ConnToken
         */

        /**
         * Constructs a new RPCInfo.
         * @memberof CommonMsg
         * @classdesc Represents a RPCInfo.
         * @implements IRPCInfo
         * @constructor
         * @param {CommonMsg.IRPCInfo=} [properties] Properties to set
         */
        function RPCInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RPCInfo ConnID.
         * @member {string} ConnID
         * @memberof CommonMsg.RPCInfo
         * @instance
         */
        RPCInfo.prototype.ConnID = "";

        /**
         * RPCInfo QueueID.
         * @member {number} QueueID
         * @memberof CommonMsg.RPCInfo
         * @instance
         */
        RPCInfo.prototype.QueueID = 0;

        /**
         * RPCInfo IPAddress.
         * @member {string} IPAddress
         * @memberof CommonMsg.RPCInfo
         * @instance
         */
        RPCInfo.prototype.IPAddress = "";

        /**
         * RPCInfo UserID.
         * @member {number} UserID
         * @memberof CommonMsg.RPCInfo
         * @instance
         */
        RPCInfo.prototype.UserID = 0;

        /**
         * RPCInfo Cer.
         * @member {string} Cer
         * @memberof CommonMsg.RPCInfo
         * @instance
         */
        RPCInfo.prototype.Cer = "";

        /**
         * RPCInfo RouteServerID.
         * @member {number} RouteServerID
         * @memberof CommonMsg.RPCInfo
         * @instance
         */
        RPCInfo.prototype.RouteServerID = 0;

        /**
         * RPCInfo ExtendInfo.
         * @member {string} ExtendInfo
         * @memberof CommonMsg.RPCInfo
         * @instance
         */
        RPCInfo.prototype.ExtendInfo = "";

        /**
         * RPCInfo ConnToken.
         * @member {string} ConnToken
         * @memberof CommonMsg.RPCInfo
         * @instance
         */
        RPCInfo.prototype.ConnToken = "";

        /**
         * Creates a new RPCInfo instance using the specified properties.
         * @function create
         * @memberof CommonMsg.RPCInfo
         * @static
         * @param {CommonMsg.IRPCInfo=} [properties] Properties to set
         * @returns {CommonMsg.RPCInfo} RPCInfo instance
         */
        RPCInfo.create = function create(properties) {
            return new RPCInfo(properties);
        };

        /**
         * Encodes the specified RPCInfo message. Does not implicitly {@link CommonMsg.RPCInfo.verify|verify} messages.
         * @function encode
         * @memberof CommonMsg.RPCInfo
         * @static
         * @param {CommonMsg.IRPCInfo} message RPCInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RPCInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.ConnID);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.QueueID);
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.IPAddress);
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.UserID);
            if (message.Cer != null && message.hasOwnProperty("Cer"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.Cer);
            writer.uint32(/* id 6, wireType 0 =*/48).int32(message.RouteServerID);
            if (message.ExtendInfo != null && message.hasOwnProperty("ExtendInfo"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.ExtendInfo);
            if (message.ConnToken != null && message.hasOwnProperty("ConnToken"))
                writer.uint32(/* id 8, wireType 2 =*/66).string(message.ConnToken);
            return writer;
        };

        /**
         * Encodes the specified RPCInfo message, length delimited. Does not implicitly {@link CommonMsg.RPCInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CommonMsg.RPCInfo
         * @static
         * @param {CommonMsg.IRPCInfo} message RPCInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RPCInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RPCInfo message from the specified reader or buffer.
         * @function decode
         * @memberof CommonMsg.RPCInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CommonMsg.RPCInfo} RPCInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RPCInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CommonMsg.RPCInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.ConnID = reader.string();
                    break;
                case 2:
                    message.QueueID = reader.int32();
                    break;
                case 3:
                    message.IPAddress = reader.string();
                    break;
                case 4:
                    message.UserID = reader.int32();
                    break;
                case 5:
                    message.Cer = reader.string();
                    break;
                case 6:
                    message.RouteServerID = reader.int32();
                    break;
                case 7:
                    message.ExtendInfo = reader.string();
                    break;
                case 8:
                    message.ConnToken = [REDACTED];
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("ConnID"))
                throw $util.ProtocolError("missing required 'ConnID'", { instance: message });
            if (!message.hasOwnProperty("QueueID"))
                throw $util.ProtocolError("missing required 'QueueID'", { instance: message });
            if (!message.hasOwnProperty("IPAddress"))
                throw $util.ProtocolError("missing required 'IPAddress'", { instance: message });
            if (!message.hasOwnProperty("RouteServerID"))
                throw $util.ProtocolError("missing required 'RouteServerID'", { instance: message });
            return message;
        };

        /**
         * Decodes a RPCInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CommonMsg.RPCInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CommonMsg.RPCInfo} RPCInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RPCInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RPCInfo message.
         * @function verify
         * @memberof CommonMsg.RPCInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RPCInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.ConnID))
                return "ConnID: string expected";
            if (!$util.isInteger(message.QueueID))
                return "QueueID: integer expected";
            if (!$util.isString(message.IPAddress))
                return "IPAddress: string expected";
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                if (!$util.isInteger(message.UserID))
                    return "UserID: integer expected";
            if (message.Cer != null && message.hasOwnProperty("Cer"))
                if (!$util.isString(message.Cer))
                    return "Cer: string expected";
            if (!$util.isInteger(message.RouteServerID))
                return "RouteServerID: integer expected";
            if (message.ExtendInfo != null && message.hasOwnProperty("ExtendInfo"))
                if (!$util.isString(message.ExtendInfo))
                    return "ExtendInfo: string expected";
            if (message.ConnToken != null && message.hasOwnProperty("ConnToken"))
                if (!$util.isString(message.ConnToken))
                    return "ConnToken: [REDACTED] expected";
            return null;
        };

        /**
         * Creates a RPCInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CommonMsg.RPCInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CommonMsg.RPCInfo} RPCInfo
         */
        RPCInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.CommonMsg.RPCInfo)
                return object;
            var message = new $root.CommonMsg.RPCInfo();
            if (object.ConnID != null)
                message.ConnID = String(object.ConnID);
            if (object.QueueID != null)
                message.QueueID = object.QueueID | 0;
            if (object.IPAddress != null)
                message.IPAddress = String(object.IPAddress);
            if (object.UserID != null)
                message.UserID = object.UserID | 0;
            if (object.Cer != null)
                message.Cer = String(object.Cer);
            if (object.RouteServerID != null)
                message.RouteServerID = object.RouteServerID | 0;
            if (object.ExtendInfo != null)
                message.ExtendInfo = String(object.ExtendInfo);
            if (object.ConnToken != null)
                message.ConnToken = [REDACTED];
            return message;
        };

        /**
         * Creates a plain object from a RPCInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CommonMsg.RPCInfo
         * @static
         * @param {CommonMsg.RPCInfo} message RPCInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RPCInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.ConnID = "";
                object.QueueID = 0;
                object.IPAddress = "";
                object.UserID = 0;
                object.Cer = "";
                object.RouteServerID = 0;
                object.ExtendInfo = "";
                object.ConnToken = "";
            }
            if (message.ConnID != null && message.hasOwnProperty("ConnID"))
                object.ConnID = message.ConnID;
            if (message.QueueID != null && message.hasOwnProperty("QueueID"))
                object.QueueID = message.QueueID;
            if (message.IPAddress != null && message.hasOwnProperty("IPAddress"))
                object.IPAddress = message.IPAddress;
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                object.UserID = message.UserID;
            if (message.Cer != null && message.hasOwnProperty("Cer"))
                object.Cer = message.Cer;
            if (message.RouteServerID != null && message.hasOwnProperty("RouteServerID"))
                object.RouteServerID = message.RouteServerID;
            if (message.ExtendInfo != null && message.hasOwnProperty("ExtendInfo"))
                object.ExtendInfo = message.ExtendInfo;
            if (message.ConnToken != null && message.hasOwnProperty("ConnToken"))
                object.ConnToken = [REDACTED];
            return object;
        };

        /**
         * Converts this RPCInfo to JSON.
         * @function toJSON
         * @memberof CommonMsg.RPCInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RPCInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return RPCInfo;
    })();

    CommonMsg.TipMessage = (function() {

        /**
         * Properties of a TipMessage.
         * @memberof CommonMsg
         * @interface ITipMessage
         * @property {string} Message TipMessage Message
         * @property {number} MsgType TipMessage MsgType
         * @property {number|null} [Param] TipMessage Param
         */

        /**
         * Constructs a new TipMessage.
         * @memberof CommonMsg
         * @classdesc Represents a TipMessage.
         * @implements ITipMessage
         * @constructor
         * @param {CommonMsg.ITipMessage=} [properties] Properties to set
         */
        function TipMessage(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TipMessage Message.
         * @member {string} Message
         * @memberof CommonMsg.TipMessage
         * @instance
         */
        TipMessage.prototype.Message = "";

        /**
         * TipMessage MsgType.
         * @member {number} MsgType
         * @memberof CommonMsg.TipMessage
         * @instance
         */
        TipMessage.prototype.MsgType = 0;

        /**
         * TipMessage Param.
         * @member {number} Param
         * @memberof CommonMsg.TipMessage
         * @instance
         */
        TipMessage.prototype.Param = 0;

        /**
         * Creates a new TipMessage instance using the specified properties.
         * @function create
         * @memberof CommonMsg.TipMessage
         * @static
         * @param {CommonMsg.ITipMessage=} [properties] Properties to set
         * @returns {CommonMsg.TipMessage} TipMessage instance
         */
        TipMessage.create = function create(properties) {
            return new TipMessage(properties);
        };

        /**
         * Encodes the specified TipMessage message. Does not implicitly {@link CommonMsg.TipMessage.verify|verify} messages.
         * @function encode
         * @memberof CommonMsg.TipMessage
         * @static
         * @param {CommonMsg.ITipMessage} message TipMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TipMessage.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.Message);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.MsgType);
            if (message.Param != null && message.hasOwnProperty("Param"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.Param);
            return writer;
        };

        /**
         * Encodes the specified TipMessage message, length delimited. Does not implicitly {@link CommonMsg.TipMessage.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CommonMsg.TipMessage
         * @static
         * @param {CommonMsg.ITipMessage} message TipMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TipMessage.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TipMessage message from the specified reader or buffer.
         * @function decode
         * @memberof CommonMsg.TipMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CommonMsg.TipMessage} TipMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TipMessage.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CommonMsg.TipMessage();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Message = reader.string();
                    break;
                case 2:
                    message.MsgType = reader.int32();
                    break;
                case 3:
                    message.Param = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("Message"))
                throw $util.ProtocolError("missing required 'Message'", { instance: message });
            if (!message.hasOwnProperty("MsgType"))
                throw $util.ProtocolError("missing required 'MsgType'", { instance: message });
            return message;
        };

        /**
         * Decodes a TipMessage message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CommonMsg.TipMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CommonMsg.TipMessage} TipMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TipMessage.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TipMessage message.
         * @function verify
         * @memberof CommonMsg.TipMessage
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TipMessage.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.Message))
                return "Message: string expected";
            if (!$util.isInteger(message.MsgType))
                return "MsgType: integer expected";
            if (message.Param != null && message.hasOwnProperty("Param"))
                if (!$util.isInteger(message.Param))
                    return "Param: integer expected";
            return null;
        };

        /**
         * Creates a TipMessage message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CommonMsg.TipMessage
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CommonMsg.TipMessage} TipMessage
         */
        TipMessage.fromObject = function fromObject(object) {
            if (object instanceof $root.CommonMsg.TipMessage)
                return object;
            var message = new $root.CommonMsg.TipMessage();
            if (object.Message != null)
                message.Message = String(object.Message);
            if (object.MsgType != null)
                message.MsgType = object.MsgType | 0;
            if (object.Param != null)
                message.Param = object.Param | 0;
            return message;
        };

        /**
         * Creates a plain object from a TipMessage message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CommonMsg.TipMessage
         * @static
         * @param {CommonMsg.TipMessage} message TipMessage
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TipMessage.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.Message = "";
                object.MsgType = 0;
                object.Param = 0;
            }
            if (message.Message != null && message.hasOwnProperty("Message"))
                object.Message = message.Message;
            if (message.MsgType != null && message.hasOwnProperty("MsgType"))
                object.MsgType = message.MsgType;
            if (message.Param != null && message.hasOwnProperty("Param"))
                object.Param = message.Param;
            return object;
        };

        /**
         * Converts this TipMessage to JSON.
         * @function toJSON
         * @memberof CommonMsg.TipMessage
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TipMessage.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return TipMessage;
    })();

    CommonMsg.HeartBeatConfig = (function() {

        /**
         * Properties of a HeartBeatConfig.
         * @memberof CommonMsg
         * @interface IHeartBeatConfig
         * @property {number} BeatInterval HeartBeatConfig BeatInterval
         * @property {number} ConnLoseTimeSpan HeartBeatConfig ConnLoseTimeSpan
         */

        /**
         * Constructs a new HeartBeatConfig.
         * @memberof CommonMsg
         * @classdesc Represents a HeartBeatConfig.
         * @implements IHeartBeatConfig
         * @constructor
         * @param {CommonMsg.IHeartBeatConfig=} [properties] Properties to set
         */
        function HeartBeatConfig(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * HeartBeatConfig BeatInterval.
         * @member {number} BeatInterval
         * @memberof CommonMsg.HeartBeatConfig
         * @instance
         */
        HeartBeatConfig.prototype.BeatInterval = 0;

        /**
         * HeartBeatConfig ConnLoseTimeSpan.
         * @member {number} ConnLoseTimeSpan
         * @memberof CommonMsg.HeartBeatConfig
         * @instance
         */
        HeartBeatConfig.prototype.ConnLoseTimeSpan = 0;

        /**
         * Creates a new HeartBeatConfig instance using the specified properties.
         * @function create
         * @memberof CommonMsg.HeartBeatConfig
         * @static
         * @param {CommonMsg.IHeartBeatConfig=} [properties] Properties to set
         * @returns {CommonMsg.HeartBeatConfig} HeartBeatConfig instance
         */
        HeartBeatConfig.create = function create(properties) {
            return new HeartBeatConfig(properties);
        };

        /**
         * Encodes the specified HeartBeatConfig message. Does not implicitly {@link CommonMsg.HeartBeatConfig.verify|verify} messages.
         * @function encode
         * @memberof CommonMsg.HeartBeatConfig
         * @static
         * @param {CommonMsg.IHeartBeatConfig} message HeartBeatConfig message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HeartBeatConfig.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.BeatInterval);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.ConnLoseTimeSpan);
            return writer;
        };

        /**
         * Encodes the specified HeartBeatConfig message, length delimited. Does not implicitly {@link CommonMsg.HeartBeatConfig.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CommonMsg.HeartBeatConfig
         * @static
         * @param {CommonMsg.IHeartBeatConfig} message HeartBeatConfig message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HeartBeatConfig.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a HeartBeatConfig message from the specified reader or buffer.
         * @function decode
         * @memberof CommonMsg.HeartBeatConfig
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CommonMsg.HeartBeatConfig} HeartBeatConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HeartBeatConfig.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CommonMsg.HeartBeatConfig();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.BeatInterval = reader.int32();
                    break;
                case 2:
                    message.ConnLoseTimeSpan = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("BeatInterval"))
                throw $util.ProtocolError("missing required 'BeatInterval'", { instance: message });
            if (!message.hasOwnProperty("ConnLoseTimeSpan"))
                throw $util.ProtocolError("missing required 'ConnLoseTimeSpan'", { instance: message });
            return message;
        };

        /**
         * Decodes a HeartBeatConfig message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CommonMsg.HeartBeatConfig
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CommonMsg.HeartBeatConfig} HeartBeatConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HeartBeatConfig.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a HeartBeatConfig message.
         * @function verify
         * @memberof CommonMsg.HeartBeatConfig
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        HeartBeatConfig.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.BeatInterval))
                return "BeatInterval: integer expected";
            if (!$util.isInteger(message.ConnLoseTimeSpan))
                return "ConnLoseTimeSpan: integer expected";
            return null;
        };

        /**
         * Creates a HeartBeatConfig message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CommonMsg.HeartBeatConfig
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CommonMsg.HeartBeatConfig} HeartBeatConfig
         */
        HeartBeatConfig.fromObject = function fromObject(object) {
            if (object instanceof $root.CommonMsg.HeartBeatConfig)
                return object;
            var message = new $root.CommonMsg.HeartBeatConfig();
            if (object.BeatInterval != null)
                message.BeatInterval = object.BeatInterval | 0;
            if (object.ConnLoseTimeSpan != null)
                message.ConnLoseTimeSpan = object.ConnLoseTimeSpan | 0;
            return message;
        };

        /**
         * Creates a plain object from a HeartBeatConfig message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CommonMsg.HeartBeatConfig
         * @static
         * @param {CommonMsg.HeartBeatConfig} message HeartBeatConfig
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        HeartBeatConfig.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.BeatInterval = 0;
                object.ConnLoseTimeSpan = 0;
            }
            if (message.BeatInterval != null && message.hasOwnProperty("BeatInterval"))
                object.BeatInterval = message.BeatInterval;
            if (message.ConnLoseTimeSpan != null && message.hasOwnProperty("ConnLoseTimeSpan"))
                object.ConnLoseTimeSpan = message.ConnLoseTimeSpan;
            return object;
        };

        /**
         * Converts this HeartBeatConfig to JSON.
         * @function toJSON
         * @memberof CommonMsg.HeartBeatConfig
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        HeartBeatConfig.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return HeartBeatConfig;
    })();

    CommonMsg.IPReport = (function() {

        /**
         * Properties of a IPReport.
         * @memberof CommonMsg
         * @interface IIPReport
         * @property {string} IPAddress IPReport IPAddress
         */

        /**
         * Constructs a new IPReport.
         * @memberof CommonMsg
         * @classdesc Represents a IPReport.
         * @implements IIPReport
         * @constructor
         * @param {CommonMsg.IIPReport=} [properties] Properties to set
         */
        function IPReport(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * IPReport IPAddress.
         * @member {string} IPAddress
         * @memberof CommonMsg.IPReport
         * @instance
         */
        IPReport.prototype.IPAddress = "";

        /**
         * Creates a new IPReport instance using the specified properties.
         * @function create
         * @memberof CommonMsg.IPReport
         * @static
         * @param {CommonMsg.IIPReport=} [properties] Properties to set
         * @returns {CommonMsg.IPReport} IPReport instance
         */
        IPReport.create = function create(properties) {
            return new IPReport(properties);
        };

        /**
         * Encodes the specified IPReport message. Does not implicitly {@link CommonMsg.IPReport.verify|verify} messages.
         * @function encode
         * @memberof CommonMsg.IPReport
         * @static
         * @param {CommonMsg.IIPReport} message IPReport message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        IPReport.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.IPAddress);
            return writer;
        };

        /**
         * Encodes the specified IPReport message, length delimited. Does not implicitly {@link CommonMsg.IPReport.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CommonMsg.IPReport
         * @static
         * @param {CommonMsg.IIPReport} message IPReport message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        IPReport.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a IPReport message from the specified reader or buffer.
         * @function decode
         * @memberof CommonMsg.IPReport
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CommonMsg.IPReport} IPReport
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        IPReport.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CommonMsg.IPReport();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.IPAddress = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("IPAddress"))
                throw $util.ProtocolError("missing required 'IPAddress'", { instance: message });
            return message;
        };

        /**
         * Decodes a IPReport message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CommonMsg.IPReport
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CommonMsg.IPReport} IPReport
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        IPReport.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a IPReport message.
         * @function verify
         * @memberof CommonMsg.IPReport
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        IPReport.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.IPAddress))
                return "IPAddress: string expected";
            return null;
        };

        /**
         * Creates a IPReport message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CommonMsg.IPReport
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CommonMsg.IPReport} IPReport
         */
        IPReport.fromObject = function fromObject(object) {
            if (object instanceof $root.CommonMsg.IPReport)
                return object;
            var message = new $root.CommonMsg.IPReport();
            if (object.IPAddress != null)
                message.IPAddress = String(object.IPAddress);
            return message;
        };

        /**
         * Creates a plain object from a IPReport message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CommonMsg.IPReport
         * @static
         * @param {CommonMsg.IPReport} message IPReport
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        IPReport.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.IPAddress = "";
            if (message.IPAddress != null && message.hasOwnProperty("IPAddress"))
                object.IPAddress = message.IPAddress;
            return object;
        };

        /**
         * Converts this IPReport to JSON.
         * @function toJSON
         * @memberof CommonMsg.IPReport
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        IPReport.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return IPReport;
    })();

    CommonMsg.ConnTokenMessage = (function() {

        /**
         * Properties of a ConnTokenMessage.
         * @memberof CommonMsg
         * @interface IConnTokenMessage
         * @property {string} token ConnTokenMessage token
         */

        /**
         * Constructs a new ConnTokenMessage.
         * @memberof CommonMsg
         * @classdesc Represents a ConnTokenMessage.
         * @implements IConnTokenMessage
         * @constructor
         * @param {CommonMsg.IConnTokenMessage=} [properties] Properties to set
         */
        function ConnTokenMessage(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ConnTokenMessage token.
         * @member {string} token
         * @memberof CommonMsg.ConnTokenMessage
         * @instance
         */
        ConnTokenMessage.prototype.token = "";

        /**
         * Creates a new ConnTokenMessage instance using the specified properties.
         * @function create
         * @memberof CommonMsg.ConnTokenMessage
         * @static
         * @param {CommonMsg.IConnTokenMessage=} [properties] Properties to set
         * @returns {CommonMsg.ConnTokenMessage} ConnTokenMessage instance
         */
        ConnTokenMessage.create = function create(properties) {
            return new ConnTokenMessage(properties);
        };

        /**
         * Encodes the specified ConnTokenMessage message. Does not implicitly {@link CommonMsg.ConnTokenMessage.verify|verify} messages.
         * @function encode
         * @memberof CommonMsg.ConnTokenMessage
         * @static
         * @param {CommonMsg.IConnTokenMessage} message ConnTokenMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ConnTokenMessage.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.token);
            return writer;
        };

        /**
         * Encodes the specified ConnTokenMessage message, length delimited. Does not implicitly {@link CommonMsg.ConnTokenMessage.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CommonMsg.ConnTokenMessage
         * @static
         * @param {CommonMsg.IConnTokenMessage} message ConnTokenMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ConnTokenMessage.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ConnTokenMessage message from the specified reader or buffer.
         * @function decode
         * @memberof CommonMsg.ConnTokenMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CommonMsg.ConnTokenMessage} ConnTokenMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ConnTokenMessage.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CommonMsg.ConnTokenMessage();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.token = [REDACTED];
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("token"))
                throw $util.ProtocolError("missing required 'token'", { instance: message });
            return message;
        };

        /**
         * Decodes a ConnTokenMessage message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CommonMsg.ConnTokenMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CommonMsg.ConnTokenMessage} ConnTokenMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ConnTokenMessage.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ConnTokenMessage message.
         * @function verify
         * @memberof CommonMsg.ConnTokenMessage
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ConnTokenMessage.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.token))
                return "token: [REDACTED] expected";
            return null;
        };

        /**
         * Creates a ConnTokenMessage message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CommonMsg.ConnTokenMessage
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CommonMsg.ConnTokenMessage} ConnTokenMessage
         */
        ConnTokenMessage.fromObject = function fromObject(object) {
            if (object instanceof $root.CommonMsg.ConnTokenMessage)
                return object;
            var message = new $root.CommonMsg.ConnTokenMessage();
            if (object.token != null)
                message.token = [REDACTED];
            return message;
        };

        /**
         * Creates a plain object from a ConnTokenMessage message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CommonMsg.ConnTokenMessage
         * @static
         * @param {CommonMsg.ConnTokenMessage} message ConnTokenMessage
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ConnTokenMessage.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.token = "";
            if (message.token != null && message.hasOwnProperty("token"))
                object.token = [REDACTED];
            return object;
        };

        /**
         * Converts this ConnTokenMessage to JSON.
         * @function toJSON
         * @memberof CommonMsg.ConnTokenMessage
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ConnTokenMessage.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ConnTokenMessage;
    })();

    return CommonMsg;
})();

module.exports = $root;
