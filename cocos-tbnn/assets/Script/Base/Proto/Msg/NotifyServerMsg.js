/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

//var $protobuf = require("protobufjs/minimal");
var $protobuf = protobuf;

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.NotifyServerMsg = (function() {

    /**
     * Namespace NotifyServerMsg.
     * @exports NotifyServerMsg
     * @namespace
     */
    var NotifyServerMsg = {};

    NotifyServerMsg.NotifyServerRegInfo = (function() {

        /**
         * Properties of a NotifyServerRegInfo.
         * @memberof NotifyServerMsg
         * @interface INotifyServerRegInfo
         * @property {number} ServerID NotifyServerRegInfo ServerID
         * @property {number|null} [GameID] NotifyServerRegInfo GameID
         * @property {number} ServerType NotifyServerRegInfo ServerType
         * @property {number|null} [HostAndBackup] NotifyServerRegInfo HostAndBackup
         * @property {string|null} [GameServerAddr] NotifyServerRegInfo GameServerAddr
         * @property {string|null} [FlagID] NotifyServerRegInfo FlagID
         */

        /**
         * Constructs a new NotifyServerRegInfo.
         * @memberof NotifyServerMsg
         * @classdesc Represents a NotifyServerRegInfo.
         * @implements INotifyServerRegInfo
         * @constructor
         * @param {NotifyServerMsg.INotifyServerRegInfo=} [properties] Properties to set
         */
        function NotifyServerRegInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * NotifyServerRegInfo ServerID.
         * @member {number} ServerID
         * @memberof NotifyServerMsg.NotifyServerRegInfo
         * @instance
         */
        NotifyServerRegInfo.prototype.ServerID = 0;

        /**
         * NotifyServerRegInfo GameID.
         * @member {number} GameID
         * @memberof NotifyServerMsg.NotifyServerRegInfo
         * @instance
         */
        NotifyServerRegInfo.prototype.GameID = 0;

        /**
         * NotifyServerRegInfo ServerType.
         * @member {number} ServerType
         * @memberof NotifyServerMsg.NotifyServerRegInfo
         * @instance
         */
        NotifyServerRegInfo.prototype.ServerType = 0;

        /**
         * NotifyServerRegInfo HostAndBackup.
         * @member {number} HostAndBackup
         * @memberof NotifyServerMsg.NotifyServerRegInfo
         * @instance
         */
        NotifyServerRegInfo.prototype.HostAndBackup = 0;

        /**
         * NotifyServerRegInfo GameServerAddr.
         * @member {string} GameServerAddr
         * @memberof NotifyServerMsg.NotifyServerRegInfo
         * @instance
         */
        NotifyServerRegInfo.prototype.GameServerAddr = "";

        /**
         * NotifyServerRegInfo FlagID.
         * @member {string} FlagID
         * @memberof NotifyServerMsg.NotifyServerRegInfo
         * @instance
         */
        NotifyServerRegInfo.prototype.FlagID = "";

        /**
         * Creates a new NotifyServerRegInfo instance using the specified properties.
         * @function create
         * @memberof NotifyServerMsg.NotifyServerRegInfo
         * @static
         * @param {NotifyServerMsg.INotifyServerRegInfo=} [properties] Properties to set
         * @returns {NotifyServerMsg.NotifyServerRegInfo} NotifyServerRegInfo instance
         */
        NotifyServerRegInfo.create = function create(properties) {
            return new NotifyServerRegInfo(properties);
        };

        /**
         * Encodes the specified NotifyServerRegInfo message. Does not implicitly {@link NotifyServerMsg.NotifyServerRegInfo.verify|verify} messages.
         * @function encode
         * @memberof NotifyServerMsg.NotifyServerRegInfo
         * @static
         * @param {NotifyServerMsg.INotifyServerRegInfo} message NotifyServerRegInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NotifyServerRegInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.ServerID);
            if (message.GameID != null && message.hasOwnProperty("GameID"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.GameID);
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.ServerType);
            if (message.HostAndBackup != null && message.hasOwnProperty("HostAndBackup"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.HostAndBackup);
            if (message.GameServerAddr != null && message.hasOwnProperty("GameServerAddr"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.GameServerAddr);
            if (message.FlagID != null && message.hasOwnProperty("FlagID"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.FlagID);
            return writer;
        };

        /**
         * Encodes the specified NotifyServerRegInfo message, length delimited. Does not implicitly {@link NotifyServerMsg.NotifyServerRegInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof NotifyServerMsg.NotifyServerRegInfo
         * @static
         * @param {NotifyServerMsg.INotifyServerRegInfo} message NotifyServerRegInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NotifyServerRegInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a NotifyServerRegInfo message from the specified reader or buffer.
         * @function decode
         * @memberof NotifyServerMsg.NotifyServerRegInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {NotifyServerMsg.NotifyServerRegInfo} NotifyServerRegInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NotifyServerRegInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.NotifyServerMsg.NotifyServerRegInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.ServerID = reader.int32();
                    break;
                case 2:
                    message.GameID = reader.int32();
                    break;
                case 3:
                    message.ServerType = reader.int32();
                    break;
                case 4:
                    message.HostAndBackup = reader.int32();
                    break;
                case 5:
                    message.GameServerAddr = reader.string();
                    break;
                case 6:
                    message.FlagID = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("ServerID"))
                throw $util.ProtocolError("missing required 'ServerID'", { instance: message });
            if (!message.hasOwnProperty("ServerType"))
                throw $util.ProtocolError("missing required 'ServerType'", { instance: message });
            return message;
        };

        /**
         * Decodes a NotifyServerRegInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof NotifyServerMsg.NotifyServerRegInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {NotifyServerMsg.NotifyServerRegInfo} NotifyServerRegInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NotifyServerRegInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a NotifyServerRegInfo message.
         * @function verify
         * @memberof NotifyServerMsg.NotifyServerRegInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        NotifyServerRegInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.ServerID))
                return "ServerID: integer expected";
            if (message.GameID != null && message.hasOwnProperty("GameID"))
                if (!$util.isInteger(message.GameID))
                    return "GameID: integer expected";
            if (!$util.isInteger(message.ServerType))
                return "ServerType: integer expected";
            if (message.HostAndBackup != null && message.hasOwnProperty("HostAndBackup"))
                if (!$util.isInteger(message.HostAndBackup))
                    return "HostAndBackup: integer expected";
            if (message.GameServerAddr != null && message.hasOwnProperty("GameServerAddr"))
                if (!$util.isString(message.GameServerAddr))
                    return "GameServerAddr: string expected";
            if (message.FlagID != null && message.hasOwnProperty("FlagID"))
                if (!$util.isString(message.FlagID))
                    return "FlagID: string expected";
            return null;
        };

        /**
         * Creates a NotifyServerRegInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof NotifyServerMsg.NotifyServerRegInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {NotifyServerMsg.NotifyServerRegInfo} NotifyServerRegInfo
         */
        NotifyServerRegInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.NotifyServerMsg.NotifyServerRegInfo)
                return object;
            var message = new $root.NotifyServerMsg.NotifyServerRegInfo();
            if (object.ServerID != null)
                message.ServerID = object.ServerID | 0;
            if (object.GameID != null)
                message.GameID = object.GameID | 0;
            if (object.ServerType != null)
                message.ServerType = object.ServerType | 0;
            if (object.HostAndBackup != null)
                message.HostAndBackup = object.HostAndBackup | 0;
            if (object.GameServerAddr != null)
                message.GameServerAddr = String(object.GameServerAddr);
            if (object.FlagID != null)
                message.FlagID = String(object.FlagID);
            return message;
        };

        /**
         * Creates a plain object from a NotifyServerRegInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof NotifyServerMsg.NotifyServerRegInfo
         * @static
         * @param {NotifyServerMsg.NotifyServerRegInfo} message NotifyServerRegInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        NotifyServerRegInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.ServerID = 0;
                object.GameID = 0;
                object.ServerType = 0;
                object.HostAndBackup = 0;
                object.GameServerAddr = "";
                object.FlagID = "";
            }
            if (message.ServerID != null && message.hasOwnProperty("ServerID"))
                object.ServerID = message.ServerID;
            if (message.GameID != null && message.hasOwnProperty("GameID"))
                object.GameID = message.GameID;
            if (message.ServerType != null && message.hasOwnProperty("ServerType"))
                object.ServerType = message.ServerType;
            if (message.HostAndBackup != null && message.hasOwnProperty("HostAndBackup"))
                object.HostAndBackup = message.HostAndBackup;
            if (message.GameServerAddr != null && message.hasOwnProperty("GameServerAddr"))
                object.GameServerAddr = message.GameServerAddr;
            if (message.FlagID != null && message.hasOwnProperty("FlagID"))
                object.FlagID = message.FlagID;
            return object;
        };

        /**
         * Converts this NotifyServerRegInfo to JSON.
         * @function toJSON
         * @memberof NotifyServerMsg.NotifyServerRegInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        NotifyServerRegInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return NotifyServerRegInfo;
    })();

    NotifyServerMsg.AnnInfo = (function() {

        /**
         * Properties of an AnnInfo.
         * @memberof NotifyServerMsg
         * @interface IAnnInfo
         * @property {number} ID AnnInfo ID
         * @property {number} PlatformID AnnInfo PlatformID
         * @property {string} MsgContent AnnInfo MsgContent
         */

        /**
         * Constructs a new AnnInfo.
         * @memberof NotifyServerMsg
         * @classdesc Represents an AnnInfo.
         * @implements IAnnInfo
         * @constructor
         * @param {NotifyServerMsg.IAnnInfo=} [properties] Properties to set
         */
        function AnnInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AnnInfo ID.
         * @member {number} ID
         * @memberof NotifyServerMsg.AnnInfo
         * @instance
         */
        AnnInfo.prototype.ID = 0;

        /**
         * AnnInfo PlatformID.
         * @member {number} PlatformID
         * @memberof NotifyServerMsg.AnnInfo
         * @instance
         */
        AnnInfo.prototype.PlatformID = 0;

        /**
         * AnnInfo MsgContent.
         * @member {string} MsgContent
         * @memberof NotifyServerMsg.AnnInfo
         * @instance
         */
        AnnInfo.prototype.MsgContent = "";

        /**
         * Creates a new AnnInfo instance using the specified properties.
         * @function create
         * @memberof NotifyServerMsg.AnnInfo
         * @static
         * @param {NotifyServerMsg.IAnnInfo=} [properties] Properties to set
         * @returns {NotifyServerMsg.AnnInfo} AnnInfo instance
         */
        AnnInfo.create = function create(properties) {
            return new AnnInfo(properties);
        };

        /**
         * Encodes the specified AnnInfo message. Does not implicitly {@link NotifyServerMsg.AnnInfo.verify|verify} messages.
         * @function encode
         * @memberof NotifyServerMsg.AnnInfo
         * @static
         * @param {NotifyServerMsg.IAnnInfo} message AnnInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AnnInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.ID);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.PlatformID);
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.MsgContent);
            return writer;
        };

        /**
         * Encodes the specified AnnInfo message, length delimited. Does not implicitly {@link NotifyServerMsg.AnnInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof NotifyServerMsg.AnnInfo
         * @static
         * @param {NotifyServerMsg.IAnnInfo} message AnnInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AnnInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AnnInfo message from the specified reader or buffer.
         * @function decode
         * @memberof NotifyServerMsg.AnnInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {NotifyServerMsg.AnnInfo} AnnInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AnnInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.NotifyServerMsg.AnnInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.ID = reader.int32();
                    break;
                case 2:
                    message.PlatformID = reader.int32();
                    break;
                case 3:
                    message.MsgContent = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("ID"))
                throw $util.ProtocolError("missing required 'ID'", { instance: message });
            if (!message.hasOwnProperty("PlatformID"))
                throw $util.ProtocolError("missing required 'PlatformID'", { instance: message });
            if (!message.hasOwnProperty("MsgContent"))
                throw $util.ProtocolError("missing required 'MsgContent'", { instance: message });
            return message;
        };

        /**
         * Decodes an AnnInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof NotifyServerMsg.AnnInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {NotifyServerMsg.AnnInfo} AnnInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AnnInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AnnInfo message.
         * @function verify
         * @memberof NotifyServerMsg.AnnInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AnnInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.ID))
                return "ID: integer expected";
            if (!$util.isInteger(message.PlatformID))
                return "PlatformID: integer expected";
            if (!$util.isString(message.MsgContent))
                return "MsgContent: string expected";
            return null;
        };

        /**
         * Creates an AnnInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof NotifyServerMsg.AnnInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {NotifyServerMsg.AnnInfo} AnnInfo
         */
        AnnInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.NotifyServerMsg.AnnInfo)
                return object;
            var message = new $root.NotifyServerMsg.AnnInfo();
            if (object.ID != null)
                message.ID = object.ID | 0;
            if (object.PlatformID != null)
                message.PlatformID = object.PlatformID | 0;
            if (object.MsgContent != null)
                message.MsgContent = String(object.MsgContent);
            return message;
        };

        /**
         * Creates a plain object from an AnnInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof NotifyServerMsg.AnnInfo
         * @static
         * @param {NotifyServerMsg.AnnInfo} message AnnInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AnnInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.ID = 0;
                object.PlatformID = 0;
                object.MsgContent = "";
            }
            if (message.ID != null && message.hasOwnProperty("ID"))
                object.ID = message.ID;
            if (message.PlatformID != null && message.hasOwnProperty("PlatformID"))
                object.PlatformID = message.PlatformID;
            if (message.MsgContent != null && message.hasOwnProperty("MsgContent"))
                object.MsgContent = message.MsgContent;
            return object;
        };

        /**
         * Converts this AnnInfo to JSON.
         * @function toJSON
         * @memberof NotifyServerMsg.AnnInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AnnInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return AnnInfo;
    })();

    NotifyServerMsg.AnnList = (function() {

        /**
         * Properties of an AnnList.
         * @memberof NotifyServerMsg
         * @interface IAnnList
         * @property {Array.<NotifyServerMsg.IAnnInfo>|null} [Ann] AnnList Ann
         */

        /**
         * Constructs a new AnnList.
         * @memberof NotifyServerMsg
         * @classdesc Represents an AnnList.
         * @implements IAnnList
         * @constructor
         * @param {NotifyServerMsg.IAnnList=} [properties] Properties to set
         */
        function AnnList(properties) {
            this.Ann = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AnnList Ann.
         * @member {Array.<NotifyServerMsg.IAnnInfo>} Ann
         * @memberof NotifyServerMsg.AnnList
         * @instance
         */
        AnnList.prototype.Ann = $util.emptyArray;

        /**
         * Creates a new AnnList instance using the specified properties.
         * @function create
         * @memberof NotifyServerMsg.AnnList
         * @static
         * @param {NotifyServerMsg.IAnnList=} [properties] Properties to set
         * @returns {NotifyServerMsg.AnnList} AnnList instance
         */
        AnnList.create = function create(properties) {
            return new AnnList(properties);
        };

        /**
         * Encodes the specified AnnList message. Does not implicitly {@link NotifyServerMsg.AnnList.verify|verify} messages.
         * @function encode
         * @memberof NotifyServerMsg.AnnList
         * @static
         * @param {NotifyServerMsg.IAnnList} message AnnList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AnnList.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Ann != null && message.Ann.length)
                for (var i = 0; i < message.Ann.length; ++i)
                    $root.NotifyServerMsg.AnnInfo.encode(message.Ann[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified AnnList message, length delimited. Does not implicitly {@link NotifyServerMsg.AnnList.verify|verify} messages.
         * @function encodeDelimited
         * @memberof NotifyServerMsg.AnnList
         * @static
         * @param {NotifyServerMsg.IAnnList} message AnnList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AnnList.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AnnList message from the specified reader or buffer.
         * @function decode
         * @memberof NotifyServerMsg.AnnList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {NotifyServerMsg.AnnList} AnnList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AnnList.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.NotifyServerMsg.AnnList();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.Ann && message.Ann.length))
                        message.Ann = [];
                    message.Ann.push($root.NotifyServerMsg.AnnInfo.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an AnnList message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof NotifyServerMsg.AnnList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {NotifyServerMsg.AnnList} AnnList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AnnList.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AnnList message.
         * @function verify
         * @memberof NotifyServerMsg.AnnList
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AnnList.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Ann != null && message.hasOwnProperty("Ann")) {
                if (!Array.isArray(message.Ann))
                    return "Ann: array expected";
                for (var i = 0; i < message.Ann.length; ++i) {
                    var error = $root.NotifyServerMsg.AnnInfo.verify(message.Ann[i]);
                    if (error)
                        return "Ann." + error;
                }
            }
            return null;
        };

        /**
         * Creates an AnnList message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof NotifyServerMsg.AnnList
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {NotifyServerMsg.AnnList} AnnList
         */
        AnnList.fromObject = function fromObject(object) {
            if (object instanceof $root.NotifyServerMsg.AnnList)
                return object;
            var message = new $root.NotifyServerMsg.AnnList();
            if (object.Ann) {
                if (!Array.isArray(object.Ann))
                    throw TypeError(".NotifyServerMsg.AnnList.Ann: array expected");
                message.Ann = [];
                for (var i = 0; i < object.Ann.length; ++i) {
                    if (typeof object.Ann[i] !== "object")
                        throw TypeError(".NotifyServerMsg.AnnList.Ann: object expected");
                    message.Ann[i] = $root.NotifyServerMsg.AnnInfo.fromObject(object.Ann[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from an AnnList message. Also converts values to other types if specified.
         * @function toObject
         * @memberof NotifyServerMsg.AnnList
         * @static
         * @param {NotifyServerMsg.AnnList} message AnnList
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AnnList.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.Ann = [];
            if (message.Ann && message.Ann.length) {
                object.Ann = [];
                for (var j = 0; j < message.Ann.length; ++j)
                    object.Ann[j] = $root.NotifyServerMsg.AnnInfo.toObject(message.Ann[j], options);
            }
            return object;
        };

        /**
         * Converts this AnnList to JSON.
         * @function toJSON
         * @memberof NotifyServerMsg.AnnList
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AnnList.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return AnnList;
    })();

    NotifyServerMsg.AttrChange = (function() {

        /**
         * Properties of an AttrChange.
         * @memberof NotifyServerMsg
         * @interface IAttrChange
         * @property {number} UserID AttrChange UserID
         * @property {number} TypeID AttrChange TypeID
         * @property {number|Long|null} [Param] AttrChange Param
         * @property {string|null} [SParam] AttrChange SParam
         */

        /**
         * Constructs a new AttrChange.
         * @memberof NotifyServerMsg
         * @classdesc Represents an AttrChange.
         * @implements IAttrChange
         * @constructor
         * @param {NotifyServerMsg.IAttrChange=} [properties] Properties to set
         */
        function AttrChange(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AttrChange UserID.
         * @member {number} UserID
         * @memberof NotifyServerMsg.AttrChange
         * @instance
         */
        AttrChange.prototype.UserID = 0;

        /**
         * AttrChange TypeID.
         * @member {number} TypeID
         * @memberof NotifyServerMsg.AttrChange
         * @instance
         */
        AttrChange.prototype.TypeID = 0;

        /**
         * AttrChange Param.
         * @member {number|Long} Param
         * @memberof NotifyServerMsg.AttrChange
         * @instance
         */
        AttrChange.prototype.Param = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * AttrChange SParam.
         * @member {string} SParam
         * @memberof NotifyServerMsg.AttrChange
         * @instance
         */
        AttrChange.prototype.SParam = "";

        /**
         * Creates a new AttrChange instance using the specified properties.
         * @function create
         * @memberof NotifyServerMsg.AttrChange
         * @static
         * @param {NotifyServerMsg.IAttrChange=} [properties] Properties to set
         * @returns {NotifyServerMsg.AttrChange} AttrChange instance
         */
        AttrChange.create = function create(properties) {
            return new AttrChange(properties);
        };

        /**
         * Encodes the specified AttrChange message. Does not implicitly {@link NotifyServerMsg.AttrChange.verify|verify} messages.
         * @function encode
         * @memberof NotifyServerMsg.AttrChange
         * @static
         * @param {NotifyServerMsg.IAttrChange} message AttrChange message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AttrChange.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.UserID);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.TypeID);
            if (message.Param != null && message.hasOwnProperty("Param"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.Param);
            if (message.SParam != null && message.hasOwnProperty("SParam"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.SParam);
            return writer;
        };

        /**
         * Encodes the specified AttrChange message, length delimited. Does not implicitly {@link NotifyServerMsg.AttrChange.verify|verify} messages.
         * @function encodeDelimited
         * @memberof NotifyServerMsg.AttrChange
         * @static
         * @param {NotifyServerMsg.IAttrChange} message AttrChange message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AttrChange.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AttrChange message from the specified reader or buffer.
         * @function decode
         * @memberof NotifyServerMsg.AttrChange
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {NotifyServerMsg.AttrChange} AttrChange
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AttrChange.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.NotifyServerMsg.AttrChange();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.UserID = reader.int32();
                    break;
                case 2:
                    message.TypeID = reader.int32();
                    break;
                case 3:
                    message.Param = reader.int64();
                    break;
                case 4:
                    message.SParam = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("UserID"))
                throw $util.ProtocolError("missing required 'UserID'", { instance: message });
            if (!message.hasOwnProperty("TypeID"))
                throw $util.ProtocolError("missing required 'TypeID'", { instance: message });
            return message;
        };

        /**
         * Decodes an AttrChange message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof NotifyServerMsg.AttrChange
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {NotifyServerMsg.AttrChange} AttrChange
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AttrChange.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AttrChange message.
         * @function verify
         * @memberof NotifyServerMsg.AttrChange
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AttrChange.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.UserID))
                return "UserID: integer expected";
            if (!$util.isInteger(message.TypeID))
                return "TypeID: integer expected";
            if (message.Param != null && message.hasOwnProperty("Param"))
                if (!$util.isInteger(message.Param) && !(message.Param && $util.isInteger(message.Param.low) && $util.isInteger(message.Param.high)))
                    return "Param: integer|Long expected";
            if (message.SParam != null && message.hasOwnProperty("SParam"))
                if (!$util.isString(message.SParam))
                    return "SParam: string expected";
            return null;
        };

        /**
         * Creates an AttrChange message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof NotifyServerMsg.AttrChange
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {NotifyServerMsg.AttrChange} AttrChange
         */
        AttrChange.fromObject = function fromObject(object) {
            if (object instanceof $root.NotifyServerMsg.AttrChange)
                return object;
            var message = new $root.NotifyServerMsg.AttrChange();
            if (object.UserID != null)
                message.UserID = object.UserID | 0;
            if (object.TypeID != null)
                message.TypeID = object.TypeID | 0;
            if (object.Param != null)
                if ($util.Long)
                    (message.Param = $util.Long.fromValue(object.Param)).unsigned = false;
                else if (typeof object.Param === "string")
                    message.Param = parseInt(object.Param, 10);
                else if (typeof object.Param === "number")
                    message.Param = object.Param;
                else if (typeof object.Param === "object")
                    message.Param = new $util.LongBits(object.Param.low >>> 0, object.Param.high >>> 0).toNumber();
            if (object.SParam != null)
                message.SParam = String(object.SParam);
            return message;
        };

        /**
         * Creates a plain object from an AttrChange message. Also converts values to other types if specified.
         * @function toObject
         * @memberof NotifyServerMsg.AttrChange
         * @static
         * @param {NotifyServerMsg.AttrChange} message AttrChange
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AttrChange.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.UserID = 0;
                object.TypeID = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.Param = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.Param = options.longs === String ? "0" : 0;
                object.SParam = "";
            }
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                object.UserID = message.UserID;
            if (message.TypeID != null && message.hasOwnProperty("TypeID"))
                object.TypeID = message.TypeID;
            if (message.Param != null && message.hasOwnProperty("Param"))
                if (typeof message.Param === "number")
                    object.Param = options.longs === String ? String(message.Param) : message.Param;
                else
                    object.Param = options.longs === String ? $util.Long.prototype.toString.call(message.Param) : options.longs === Number ? new $util.LongBits(message.Param.low >>> 0, message.Param.high >>> 0).toNumber() : message.Param;
            if (message.SParam != null && message.hasOwnProperty("SParam"))
                object.SParam = message.SParam;
            return object;
        };

        /**
         * Converts this AttrChange to JSON.
         * @function toJSON
         * @memberof NotifyServerMsg.AttrChange
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AttrChange.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return AttrChange;
    })();

    NotifyServerMsg.AttrChangeList = (function() {

        /**
         * Properties of an AttrChangeList.
         * @memberof NotifyServerMsg
         * @interface IAttrChangeList
         * @property {Array.<NotifyServerMsg.IAttrChange>|null} [Attrs] AttrChangeList Attrs
         */

        /**
         * Constructs a new AttrChangeList.
         * @memberof NotifyServerMsg
         * @classdesc Represents an AttrChangeList.
         * @implements IAttrChangeList
         * @constructor
         * @param {NotifyServerMsg.IAttrChangeList=} [properties] Properties to set
         */
        function AttrChangeList(properties) {
            this.Attrs = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AttrChangeList Attrs.
         * @member {Array.<NotifyServerMsg.IAttrChange>} Attrs
         * @memberof NotifyServerMsg.AttrChangeList
         * @instance
         */
        AttrChangeList.prototype.Attrs = $util.emptyArray;

        /**
         * Creates a new AttrChangeList instance using the specified properties.
         * @function create
         * @memberof NotifyServerMsg.AttrChangeList
         * @static
         * @param {NotifyServerMsg.IAttrChangeList=} [properties] Properties to set
         * @returns {NotifyServerMsg.AttrChangeList} AttrChangeList instance
         */
        AttrChangeList.create = function create(properties) {
            return new AttrChangeList(properties);
        };

        /**
         * Encodes the specified AttrChangeList message. Does not implicitly {@link NotifyServerMsg.AttrChangeList.verify|verify} messages.
         * @function encode
         * @memberof NotifyServerMsg.AttrChangeList
         * @static
         * @param {NotifyServerMsg.IAttrChangeList} message AttrChangeList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AttrChangeList.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Attrs != null && message.Attrs.length)
                for (var i = 0; i < message.Attrs.length; ++i)
                    $root.NotifyServerMsg.AttrChange.encode(message.Attrs[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified AttrChangeList message, length delimited. Does not implicitly {@link NotifyServerMsg.AttrChangeList.verify|verify} messages.
         * @function encodeDelimited
         * @memberof NotifyServerMsg.AttrChangeList
         * @static
         * @param {NotifyServerMsg.IAttrChangeList} message AttrChangeList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AttrChangeList.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AttrChangeList message from the specified reader or buffer.
         * @function decode
         * @memberof NotifyServerMsg.AttrChangeList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {NotifyServerMsg.AttrChangeList} AttrChangeList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AttrChangeList.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.NotifyServerMsg.AttrChangeList();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.Attrs && message.Attrs.length))
                        message.Attrs = [];
                    message.Attrs.push($root.NotifyServerMsg.AttrChange.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an AttrChangeList message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof NotifyServerMsg.AttrChangeList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {NotifyServerMsg.AttrChangeList} AttrChangeList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AttrChangeList.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AttrChangeList message.
         * @function verify
         * @memberof NotifyServerMsg.AttrChangeList
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AttrChangeList.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Attrs != null && message.hasOwnProperty("Attrs")) {
                if (!Array.isArray(message.Attrs))
                    return "Attrs: array expected";
                for (var i = 0; i < message.Attrs.length; ++i) {
                    var error = $root.NotifyServerMsg.AttrChange.verify(message.Attrs[i]);
                    if (error)
                        return "Attrs." + error;
                }
            }
            return null;
        };

        /**
         * Creates an AttrChangeList message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof NotifyServerMsg.AttrChangeList
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {NotifyServerMsg.AttrChangeList} AttrChangeList
         */
        AttrChangeList.fromObject = function fromObject(object) {
            if (object instanceof $root.NotifyServerMsg.AttrChangeList)
                return object;
            var message = new $root.NotifyServerMsg.AttrChangeList();
            if (object.Attrs) {
                if (!Array.isArray(object.Attrs))
                    throw TypeError(".NotifyServerMsg.AttrChangeList.Attrs: array expected");
                message.Attrs = [];
                for (var i = 0; i < object.Attrs.length; ++i) {
                    if (typeof object.Attrs[i] !== "object")
                        throw TypeError(".NotifyServerMsg.AttrChangeList.Attrs: object expected");
                    message.Attrs[i] = $root.NotifyServerMsg.AttrChange.fromObject(object.Attrs[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from an AttrChangeList message. Also converts values to other types if specified.
         * @function toObject
         * @memberof NotifyServerMsg.AttrChangeList
         * @static
         * @param {NotifyServerMsg.AttrChangeList} message AttrChangeList
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AttrChangeList.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.Attrs = [];
            if (message.Attrs && message.Attrs.length) {
                object.Attrs = [];
                for (var j = 0; j < message.Attrs.length; ++j)
                    object.Attrs[j] = $root.NotifyServerMsg.AttrChange.toObject(message.Attrs[j], options);
            }
            return object;
        };

        /**
         * Converts this AttrChangeList to JSON.
         * @function toJSON
         * @memberof NotifyServerMsg.AttrChangeList
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AttrChangeList.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return AttrChangeList;
    })();

    NotifyServerMsg.ServerStop = (function() {

        /**
         * Properties of a ServerStop.
         * @memberof NotifyServerMsg
         * @interface IServerStop
         * @property {number} Type ServerStop Type
         * @property {number} Status ServerStop Status
         * @property {number|null} [GameID] ServerStop GameID
         * @property {number|null} [ServerID] ServerStop ServerID
         * @property {string} Message ServerStop Message
         */

        /**
         * Constructs a new ServerStop.
         * @memberof NotifyServerMsg
         * @classdesc Represents a ServerStop.
         * @implements IServerStop
         * @constructor
         * @param {NotifyServerMsg.IServerStop=} [properties] Properties to set
         */
        function ServerStop(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ServerStop Type.
         * @member {number} Type
         * @memberof NotifyServerMsg.ServerStop
         * @instance
         */
        ServerStop.prototype.Type = 0;

        /**
         * ServerStop Status.
         * @member {number} Status
         * @memberof NotifyServerMsg.ServerStop
         * @instance
         */
        ServerStop.prototype.Status = 0;

        /**
         * ServerStop GameID.
         * @member {number} GameID
         * @memberof NotifyServerMsg.ServerStop
         * @instance
         */
        ServerStop.prototype.GameID = 0;

        /**
         * ServerStop ServerID.
         * @member {number} ServerID
         * @memberof NotifyServerMsg.ServerStop
         * @instance
         */
        ServerStop.prototype.ServerID = 0;

        /**
         * ServerStop Message.
         * @member {string} Message
         * @memberof NotifyServerMsg.ServerStop
         * @instance
         */
        ServerStop.prototype.Message = "";

        /**
         * Creates a new ServerStop instance using the specified properties.
         * @function create
         * @memberof NotifyServerMsg.ServerStop
         * @static
         * @param {NotifyServerMsg.IServerStop=} [properties] Properties to set
         * @returns {NotifyServerMsg.ServerStop} ServerStop instance
         */
        ServerStop.create = function create(properties) {
            return new ServerStop(properties);
        };

        /**
         * Encodes the specified ServerStop message. Does not implicitly {@link NotifyServerMsg.ServerStop.verify|verify} messages.
         * @function encode
         * @memberof NotifyServerMsg.ServerStop
         * @static
         * @param {NotifyServerMsg.IServerStop} message ServerStop message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ServerStop.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.Type);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.Status);
            if (message.GameID != null && message.hasOwnProperty("GameID"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.GameID);
            if (message.ServerID != null && message.hasOwnProperty("ServerID"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.ServerID);
            writer.uint32(/* id 5, wireType 2 =*/42).string(message.Message);
            return writer;
        };

        /**
         * Encodes the specified ServerStop message, length delimited. Does not implicitly {@link NotifyServerMsg.ServerStop.verify|verify} messages.
         * @function encodeDelimited
         * @memberof NotifyServerMsg.ServerStop
         * @static
         * @param {NotifyServerMsg.IServerStop} message ServerStop message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ServerStop.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ServerStop message from the specified reader or buffer.
         * @function decode
         * @memberof NotifyServerMsg.ServerStop
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {NotifyServerMsg.ServerStop} ServerStop
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ServerStop.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.NotifyServerMsg.ServerStop();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Type = reader.int32();
                    break;
                case 2:
                    message.Status = reader.int32();
                    break;
                case 3:
                    message.GameID = reader.int32();
                    break;
                case 4:
                    message.ServerID = reader.int32();
                    break;
                case 5:
                    message.Message = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("Type"))
                throw $util.ProtocolError("missing required 'Type'", { instance: message });
            if (!message.hasOwnProperty("Status"))
                throw $util.ProtocolError("missing required 'Status'", { instance: message });
            if (!message.hasOwnProperty("Message"))
                throw $util.ProtocolError("missing required 'Message'", { instance: message });
            return message;
        };

        /**
         * Decodes a ServerStop message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof NotifyServerMsg.ServerStop
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {NotifyServerMsg.ServerStop} ServerStop
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ServerStop.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ServerStop message.
         * @function verify
         * @memberof NotifyServerMsg.ServerStop
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ServerStop.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.Type))
                return "Type: integer expected";
            if (!$util.isInteger(message.Status))
                return "Status: integer expected";
            if (message.GameID != null && message.hasOwnProperty("GameID"))
                if (!$util.isInteger(message.GameID))
                    return "GameID: integer expected";
            if (message.ServerID != null && message.hasOwnProperty("ServerID"))
                if (!$util.isInteger(message.ServerID))
                    return "ServerID: integer expected";
            if (!$util.isString(message.Message))
                return "Message: string expected";
            return null;
        };

        /**
         * Creates a ServerStop message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof NotifyServerMsg.ServerStop
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {NotifyServerMsg.ServerStop} ServerStop
         */
        ServerStop.fromObject = function fromObject(object) {
            if (object instanceof $root.NotifyServerMsg.ServerStop)
                return object;
            var message = new $root.NotifyServerMsg.ServerStop();
            if (object.Type != null)
                message.Type = object.Type | 0;
            if (object.Status != null)
                message.Status = object.Status | 0;
            if (object.GameID != null)
                message.GameID = object.GameID | 0;
            if (object.ServerID != null)
                message.ServerID = object.ServerID | 0;
            if (object.Message != null)
                message.Message = String(object.Message);
            return message;
        };

        /**
         * Creates a plain object from a ServerStop message. Also converts values to other types if specified.
         * @function toObject
         * @memberof NotifyServerMsg.ServerStop
         * @static
         * @param {NotifyServerMsg.ServerStop} message ServerStop
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ServerStop.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.Type = 0;
                object.Status = 0;
                object.GameID = 0;
                object.ServerID = 0;
                object.Message = "";
            }
            if (message.Type != null && message.hasOwnProperty("Type"))
                object.Type = message.Type;
            if (message.Status != null && message.hasOwnProperty("Status"))
                object.Status = message.Status;
            if (message.GameID != null && message.hasOwnProperty("GameID"))
                object.GameID = message.GameID;
            if (message.ServerID != null && message.hasOwnProperty("ServerID"))
                object.ServerID = message.ServerID;
            if (message.Message != null && message.hasOwnProperty("Message"))
                object.Message = message.Message;
            return object;
        };

        /**
         * Converts this ServerStop to JSON.
         * @function toJSON
         * @memberof NotifyServerMsg.ServerStop
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ServerStop.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ServerStop;
    })();

    NotifyServerMsg.ServerStopWhiteIPList = (function() {

        /**
         * Properties of a ServerStopWhiteIPList.
         * @memberof NotifyServerMsg
         * @interface IServerStopWhiteIPList
         * @property {Array.<string>|null} [IP] ServerStopWhiteIPList IP
         */

        /**
         * Constructs a new ServerStopWhiteIPList.
         * @memberof NotifyServerMsg
         * @classdesc Represents a ServerStopWhiteIPList.
         * @implements IServerStopWhiteIPList
         * @constructor
         * @param {NotifyServerMsg.IServerStopWhiteIPList=} [properties] Properties to set
         */
        function ServerStopWhiteIPList(properties) {
            this.IP = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ServerStopWhiteIPList IP.
         * @member {Array.<string>} IP
         * @memberof NotifyServerMsg.ServerStopWhiteIPList
         * @instance
         */
        ServerStopWhiteIPList.prototype.IP = $util.emptyArray;

        /**
         * Creates a new ServerStopWhiteIPList instance using the specified properties.
         * @function create
         * @memberof NotifyServerMsg.ServerStopWhiteIPList
         * @static
         * @param {NotifyServerMsg.IServerStopWhiteIPList=} [properties] Properties to set
         * @returns {NotifyServerMsg.ServerStopWhiteIPList} ServerStopWhiteIPList instance
         */
        ServerStopWhiteIPList.create = function create(properties) {
            return new ServerStopWhiteIPList(properties);
        };

        /**
         * Encodes the specified ServerStopWhiteIPList message. Does not implicitly {@link NotifyServerMsg.ServerStopWhiteIPList.verify|verify} messages.
         * @function encode
         * @memberof NotifyServerMsg.ServerStopWhiteIPList
         * @static
         * @param {NotifyServerMsg.IServerStopWhiteIPList} message ServerStopWhiteIPList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ServerStopWhiteIPList.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.IP != null && message.IP.length)
                for (var i = 0; i < message.IP.length; ++i)
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.IP[i]);
            return writer;
        };

        /**
         * Encodes the specified ServerStopWhiteIPList message, length delimited. Does not implicitly {@link NotifyServerMsg.ServerStopWhiteIPList.verify|verify} messages.
         * @function encodeDelimited
         * @memberof NotifyServerMsg.ServerStopWhiteIPList
         * @static
         * @param {NotifyServerMsg.IServerStopWhiteIPList} message ServerStopWhiteIPList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ServerStopWhiteIPList.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ServerStopWhiteIPList message from the specified reader or buffer.
         * @function decode
         * @memberof NotifyServerMsg.ServerStopWhiteIPList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {NotifyServerMsg.ServerStopWhiteIPList} ServerStopWhiteIPList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ServerStopWhiteIPList.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.NotifyServerMsg.ServerStopWhiteIPList();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.IP && message.IP.length))
                        message.IP = [];
                    message.IP.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ServerStopWhiteIPList message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof NotifyServerMsg.ServerStopWhiteIPList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {NotifyServerMsg.ServerStopWhiteIPList} ServerStopWhiteIPList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ServerStopWhiteIPList.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ServerStopWhiteIPList message.
         * @function verify
         * @memberof NotifyServerMsg.ServerStopWhiteIPList
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ServerStopWhiteIPList.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.IP != null && message.hasOwnProperty("IP")) {
                if (!Array.isArray(message.IP))
                    return "IP: array expected";
                for (var i = 0; i < message.IP.length; ++i)
                    if (!$util.isString(message.IP[i]))
                        return "IP: string[] expected";
            }
            return null;
        };

        /**
         * Creates a ServerStopWhiteIPList message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof NotifyServerMsg.ServerStopWhiteIPList
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {NotifyServerMsg.ServerStopWhiteIPList} ServerStopWhiteIPList
         */
        ServerStopWhiteIPList.fromObject = function fromObject(object) {
            if (object instanceof $root.NotifyServerMsg.ServerStopWhiteIPList)
                return object;
            var message = new $root.NotifyServerMsg.ServerStopWhiteIPList();
            if (object.IP) {
                if (!Array.isArray(object.IP))
                    throw TypeError(".NotifyServerMsg.ServerStopWhiteIPList.IP: array expected");
                message.IP = [];
                for (var i = 0; i < object.IP.length; ++i)
                    message.IP[i] = String(object.IP[i]);
            }
            return message;
        };

        /**
         * Creates a plain object from a ServerStopWhiteIPList message. Also converts values to other types if specified.
         * @function toObject
         * @memberof NotifyServerMsg.ServerStopWhiteIPList
         * @static
         * @param {NotifyServerMsg.ServerStopWhiteIPList} message ServerStopWhiteIPList
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ServerStopWhiteIPList.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.IP = [];
            if (message.IP && message.IP.length) {
                object.IP = [];
                for (var j = 0; j < message.IP.length; ++j)
                    object.IP[j] = message.IP[j];
            }
            return object;
        };

        /**
         * Converts this ServerStopWhiteIPList to JSON.
         * @function toJSON
         * @memberof NotifyServerMsg.ServerStopWhiteIPList
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ServerStopWhiteIPList.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ServerStopWhiteIPList;
    })();

    NotifyServerMsg.HostAndBackUp = (function() {

        /**
         * Properties of a HostAndBackUp.
         * @memberof NotifyServerMsg
         * @interface IHostAndBackUp
         * @property {NotifyServerMsg.IHostInfo} Master HostAndBackUp Master
         * @property {NotifyServerMsg.IHostInfo} Slave HostAndBackUp Slave
         */

        /**
         * Constructs a new HostAndBackUp.
         * @memberof NotifyServerMsg
         * @classdesc Represents a HostAndBackUp.
         * @implements IHostAndBackUp
         * @constructor
         * @param {NotifyServerMsg.IHostAndBackUp=} [properties] Properties to set
         */
        function HostAndBackUp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * HostAndBackUp Master.
         * @member {NotifyServerMsg.IHostInfo} Master
         * @memberof NotifyServerMsg.HostAndBackUp
         * @instance
         */
        HostAndBackUp.prototype.Master = null;

        /**
         * HostAndBackUp Slave.
         * @member {NotifyServerMsg.IHostInfo} Slave
         * @memberof NotifyServerMsg.HostAndBackUp
         * @instance
         */
        HostAndBackUp.prototype.Slave = null;

        /**
         * Creates a new HostAndBackUp instance using the specified properties.
         * @function create
         * @memberof NotifyServerMsg.HostAndBackUp
         * @static
         * @param {NotifyServerMsg.IHostAndBackUp=} [properties] Properties to set
         * @returns {NotifyServerMsg.HostAndBackUp} HostAndBackUp instance
         */
        HostAndBackUp.create = function create(properties) {
            return new HostAndBackUp(properties);
        };

        /**
         * Encodes the specified HostAndBackUp message. Does not implicitly {@link NotifyServerMsg.HostAndBackUp.verify|verify} messages.
         * @function encode
         * @memberof NotifyServerMsg.HostAndBackUp
         * @static
         * @param {NotifyServerMsg.IHostAndBackUp} message HostAndBackUp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HostAndBackUp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            $root.NotifyServerMsg.HostInfo.encode(message.Master, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            $root.NotifyServerMsg.HostInfo.encode(message.Slave, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified HostAndBackUp message, length delimited. Does not implicitly {@link NotifyServerMsg.HostAndBackUp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof NotifyServerMsg.HostAndBackUp
         * @static
         * @param {NotifyServerMsg.IHostAndBackUp} message HostAndBackUp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HostAndBackUp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a HostAndBackUp message from the specified reader or buffer.
         * @function decode
         * @memberof NotifyServerMsg.HostAndBackUp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {NotifyServerMsg.HostAndBackUp} HostAndBackUp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HostAndBackUp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.NotifyServerMsg.HostAndBackUp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Master = $root.NotifyServerMsg.HostInfo.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.Slave = $root.NotifyServerMsg.HostInfo.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("Master"))
                throw $util.ProtocolError("missing required 'Master'", { instance: message });
            if (!message.hasOwnProperty("Slave"))
                throw $util.ProtocolError("missing required 'Slave'", { instance: message });
            return message;
        };

        /**
         * Decodes a HostAndBackUp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof NotifyServerMsg.HostAndBackUp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {NotifyServerMsg.HostAndBackUp} HostAndBackUp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HostAndBackUp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a HostAndBackUp message.
         * @function verify
         * @memberof NotifyServerMsg.HostAndBackUp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        HostAndBackUp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            {
                var error = $root.NotifyServerMsg.HostInfo.verify(message.Master);
                if (error)
                    return "Master." + error;
            }
            {
                var error = $root.NotifyServerMsg.HostInfo.verify(message.Slave);
                if (error)
                    return "Slave." + error;
            }
            return null;
        };

        /**
         * Creates a HostAndBackUp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof NotifyServerMsg.HostAndBackUp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {NotifyServerMsg.HostAndBackUp} HostAndBackUp
         */
        HostAndBackUp.fromObject = function fromObject(object) {
            if (object instanceof $root.NotifyServerMsg.HostAndBackUp)
                return object;
            var message = new $root.NotifyServerMsg.HostAndBackUp();
            if (object.Master != null) {
                if (typeof object.Master !== "object")
                    throw TypeError(".NotifyServerMsg.HostAndBackUp.Master: object expected");
                message.Master = $root.NotifyServerMsg.HostInfo.fromObject(object.Master);
            }
            if (object.Slave != null) {
                if (typeof object.Slave !== "object")
                    throw TypeError(".NotifyServerMsg.HostAndBackUp.Slave: object expected");
                message.Slave = $root.NotifyServerMsg.HostInfo.fromObject(object.Slave);
            }
            return message;
        };

        /**
         * Creates a plain object from a HostAndBackUp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof NotifyServerMsg.HostAndBackUp
         * @static
         * @param {NotifyServerMsg.HostAndBackUp} message HostAndBackUp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        HostAndBackUp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.Master = null;
                object.Slave = null;
            }
            if (message.Master != null && message.hasOwnProperty("Master"))
                object.Master = $root.NotifyServerMsg.HostInfo.toObject(message.Master, options);
            if (message.Slave != null && message.hasOwnProperty("Slave"))
                object.Slave = $root.NotifyServerMsg.HostInfo.toObject(message.Slave, options);
            return object;
        };

        /**
         * Converts this HostAndBackUp to JSON.
         * @function toJSON
         * @memberof NotifyServerMsg.HostAndBackUp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        HostAndBackUp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return HostAndBackUp;
    })();

    NotifyServerMsg.HostInfo = (function() {

        /**
         * Properties of a HostInfo.
         * @memberof NotifyServerMsg
         * @interface IHostInfo
         * @property {number} GameID HostInfo GameID
         * @property {number} ServerID HostInfo ServerID
         * @property {string|null} [GameServerAddr] HostInfo GameServerAddr
         */

        /**
         * Constructs a new HostInfo.
         * @memberof NotifyServerMsg
         * @classdesc Represents a HostInfo.
         * @implements IHostInfo
         * @constructor
         * @param {NotifyServerMsg.IHostInfo=} [properties] Properties to set
         */
        function HostInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * HostInfo GameID.
         * @member {number} GameID
         * @memberof NotifyServerMsg.HostInfo
         * @instance
         */
        HostInfo.prototype.GameID = 0;

        /**
         * HostInfo ServerID.
         * @member {number} ServerID
         * @memberof NotifyServerMsg.HostInfo
         * @instance
         */
        HostInfo.prototype.ServerID = 0;

        /**
         * HostInfo GameServerAddr.
         * @member {string} GameServerAddr
         * @memberof NotifyServerMsg.HostInfo
         * @instance
         */
        HostInfo.prototype.GameServerAddr = "";

        /**
         * Creates a new HostInfo instance using the specified properties.
         * @function create
         * @memberof NotifyServerMsg.HostInfo
         * @static
         * @param {NotifyServerMsg.IHostInfo=} [properties] Properties to set
         * @returns {NotifyServerMsg.HostInfo} HostInfo instance
         */
        HostInfo.create = function create(properties) {
            return new HostInfo(properties);
        };

        /**
         * Encodes the specified HostInfo message. Does not implicitly {@link NotifyServerMsg.HostInfo.verify|verify} messages.
         * @function encode
         * @memberof NotifyServerMsg.HostInfo
         * @static
         * @param {NotifyServerMsg.IHostInfo} message HostInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HostInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.GameID);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.ServerID);
            if (message.GameServerAddr != null && message.hasOwnProperty("GameServerAddr"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.GameServerAddr);
            return writer;
        };

        /**
         * Encodes the specified HostInfo message, length delimited. Does not implicitly {@link NotifyServerMsg.HostInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof NotifyServerMsg.HostInfo
         * @static
         * @param {NotifyServerMsg.IHostInfo} message HostInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HostInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a HostInfo message from the specified reader or buffer.
         * @function decode
         * @memberof NotifyServerMsg.HostInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {NotifyServerMsg.HostInfo} HostInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HostInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.NotifyServerMsg.HostInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.GameID = reader.int32();
                    break;
                case 2:
                    message.ServerID = reader.int32();
                    break;
                case 3:
                    message.GameServerAddr = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("GameID"))
                throw $util.ProtocolError("missing required 'GameID'", { instance: message });
            if (!message.hasOwnProperty("ServerID"))
                throw $util.ProtocolError("missing required 'ServerID'", { instance: message });
            return message;
        };

        /**
         * Decodes a HostInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof NotifyServerMsg.HostInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {NotifyServerMsg.HostInfo} HostInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HostInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a HostInfo message.
         * @function verify
         * @memberof NotifyServerMsg.HostInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        HostInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.GameID))
                return "GameID: integer expected";
            if (!$util.isInteger(message.ServerID))
                return "ServerID: integer expected";
            if (message.GameServerAddr != null && message.hasOwnProperty("GameServerAddr"))
                if (!$util.isString(message.GameServerAddr))
                    return "GameServerAddr: string expected";
            return null;
        };

        /**
         * Creates a HostInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof NotifyServerMsg.HostInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {NotifyServerMsg.HostInfo} HostInfo
         */
        HostInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.NotifyServerMsg.HostInfo)
                return object;
            var message = new $root.NotifyServerMsg.HostInfo();
            if (object.GameID != null)
                message.GameID = object.GameID | 0;
            if (object.ServerID != null)
                message.ServerID = object.ServerID | 0;
            if (object.GameServerAddr != null)
                message.GameServerAddr = String(object.GameServerAddr);
            return message;
        };

        /**
         * Creates a plain object from a HostInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof NotifyServerMsg.HostInfo
         * @static
         * @param {NotifyServerMsg.HostInfo} message HostInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        HostInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.GameID = 0;
                object.ServerID = 0;
                object.GameServerAddr = "";
            }
            if (message.GameID != null && message.hasOwnProperty("GameID"))
                object.GameID = message.GameID;
            if (message.ServerID != null && message.hasOwnProperty("ServerID"))
                object.ServerID = message.ServerID;
            if (message.GameServerAddr != null && message.hasOwnProperty("GameServerAddr"))
                object.GameServerAddr = message.GameServerAddr;
            return object;
        };

        /**
         * Converts this HostInfo to JSON.
         * @function toJSON
         * @memberof NotifyServerMsg.HostInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        HostInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return HostInfo;
    })();

    NotifyServerMsg.PayOrderList = (function() {

        /**
         * Properties of a PayOrderList.
         * @memberof NotifyServerMsg
         * @interface IPayOrderList
         * @property {number} ServerID PayOrderList ServerID
         * @property {Array.<NotifyServerMsg.IPayOrderInfo>|null} [PayOrderList] PayOrderList PayOrderList
         */

        /**
         * Constructs a new PayOrderList.
         * @memberof NotifyServerMsg
         * @classdesc Represents a PayOrderList.
         * @implements IPayOrderList
         * @constructor
         * @param {NotifyServerMsg.IPayOrderList=} [properties] Properties to set
         */
        function PayOrderList(properties) {
            this.PayOrderList = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PayOrderList ServerID.
         * @member {number} ServerID
         * @memberof NotifyServerMsg.PayOrderList
         * @instance
         */
        PayOrderList.prototype.ServerID = 0;

        /**
         * PayOrderList PayOrderList.
         * @member {Array.<NotifyServerMsg.IPayOrderInfo>} PayOrderList
         * @memberof NotifyServerMsg.PayOrderList
         * @instance
         */
        PayOrderList.prototype.PayOrderList = $util.emptyArray;

        /**
         * Creates a new PayOrderList instance using the specified properties.
         * @function create
         * @memberof NotifyServerMsg.PayOrderList
         * @static
         * @param {NotifyServerMsg.IPayOrderList=} [properties] Properties to set
         * @returns {NotifyServerMsg.PayOrderList} PayOrderList instance
         */
        PayOrderList.create = function create(properties) {
            return new PayOrderList(properties);
        };

        /**
         * Encodes the specified PayOrderList message. Does not implicitly {@link NotifyServerMsg.PayOrderList.verify|verify} messages.
         * @function encode
         * @memberof NotifyServerMsg.PayOrderList
         * @static
         * @param {NotifyServerMsg.IPayOrderList} message PayOrderList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PayOrderList.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.ServerID);
            if (message.PayOrderList != null && message.PayOrderList.length)
                for (var i = 0; i < message.PayOrderList.length; ++i)
                    $root.NotifyServerMsg.PayOrderInfo.encode(message.PayOrderList[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified PayOrderList message, length delimited. Does not implicitly {@link NotifyServerMsg.PayOrderList.verify|verify} messages.
         * @function encodeDelimited
         * @memberof NotifyServerMsg.PayOrderList
         * @static
         * @param {NotifyServerMsg.IPayOrderList} message PayOrderList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PayOrderList.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PayOrderList message from the specified reader or buffer.
         * @function decode
         * @memberof NotifyServerMsg.PayOrderList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {NotifyServerMsg.PayOrderList} PayOrderList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PayOrderList.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.NotifyServerMsg.PayOrderList();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.ServerID = reader.int32();
                    break;
                case 2:
                    if (!(message.PayOrderList && message.PayOrderList.length))
                        message.PayOrderList = [];
                    message.PayOrderList.push($root.NotifyServerMsg.PayOrderInfo.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("ServerID"))
                throw $util.ProtocolError("missing required 'ServerID'", { instance: message });
            return message;
        };

        /**
         * Decodes a PayOrderList message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof NotifyServerMsg.PayOrderList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {NotifyServerMsg.PayOrderList} PayOrderList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PayOrderList.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PayOrderList message.
         * @function verify
         * @memberof NotifyServerMsg.PayOrderList
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PayOrderList.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.ServerID))
                return "ServerID: integer expected";
            if (message.PayOrderList != null && message.hasOwnProperty("PayOrderList")) {
                if (!Array.isArray(message.PayOrderList))
                    return "PayOrderList: array expected";
                for (var i = 0; i < message.PayOrderList.length; ++i) {
                    var error = $root.NotifyServerMsg.PayOrderInfo.verify(message.PayOrderList[i]);
                    if (error)
                        return "PayOrderList." + error;
                }
            }
            return null;
        };

        /**
         * Creates a PayOrderList message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof NotifyServerMsg.PayOrderList
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {NotifyServerMsg.PayOrderList} PayOrderList
         */
        PayOrderList.fromObject = function fromObject(object) {
            if (object instanceof $root.NotifyServerMsg.PayOrderList)
                return object;
            var message = new $root.NotifyServerMsg.PayOrderList();
            if (object.ServerID != null)
                message.ServerID = object.ServerID | 0;
            if (object.PayOrderList) {
                if (!Array.isArray(object.PayOrderList))
                    throw TypeError(".NotifyServerMsg.PayOrderList.PayOrderList: array expected");
                message.PayOrderList = [];
                for (var i = 0; i < object.PayOrderList.length; ++i) {
                    if (typeof object.PayOrderList[i] !== "object")
                        throw TypeError(".NotifyServerMsg.PayOrderList.PayOrderList: object expected");
                    message.PayOrderList[i] = $root.NotifyServerMsg.PayOrderInfo.fromObject(object.PayOrderList[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a PayOrderList message. Also converts values to other types if specified.
         * @function toObject
         * @memberof NotifyServerMsg.PayOrderList
         * @static
         * @param {NotifyServerMsg.PayOrderList} message PayOrderList
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PayOrderList.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.PayOrderList = [];
            if (options.defaults)
                object.ServerID = 0;
            if (message.ServerID != null && message.hasOwnProperty("ServerID"))
                object.ServerID = message.ServerID;
            if (message.PayOrderList && message.PayOrderList.length) {
                object.PayOrderList = [];
                for (var j = 0; j < message.PayOrderList.length; ++j)
                    object.PayOrderList[j] = $root.NotifyServerMsg.PayOrderInfo.toObject(message.PayOrderList[j], options);
            }
            return object;
        };

        /**
         * Converts this PayOrderList to JSON.
         * @function toJSON
         * @memberof NotifyServerMsg.PayOrderList
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PayOrderList.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return PayOrderList;
    })();

    NotifyServerMsg.PayOrderInfo = (function() {

        /**
         * Properties of a PayOrderInfo.
         * @memberof NotifyServerMsg
         * @interface IPayOrderInfo
         * @property {number} UserID PayOrderInfo UserID
         * @property {number|Long} Amount PayOrderInfo Amount
         * @property {number|Long} TimeSeq PayOrderInfo TimeSeq
         */

        /**
         * Constructs a new PayOrderInfo.
         * @memberof NotifyServerMsg
         * @classdesc Represents a PayOrderInfo.
         * @implements IPayOrderInfo
         * @constructor
         * @param {NotifyServerMsg.IPayOrderInfo=} [properties] Properties to set
         */
        function PayOrderInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PayOrderInfo UserID.
         * @member {number} UserID
         * @memberof NotifyServerMsg.PayOrderInfo
         * @instance
         */
        PayOrderInfo.prototype.UserID = 0;

        /**
         * PayOrderInfo Amount.
         * @member {number|Long} Amount
         * @memberof NotifyServerMsg.PayOrderInfo
         * @instance
         */
        PayOrderInfo.prototype.Amount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * PayOrderInfo TimeSeq.
         * @member {number|Long} TimeSeq
         * @memberof NotifyServerMsg.PayOrderInfo
         * @instance
         */
        PayOrderInfo.prototype.TimeSeq = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new PayOrderInfo instance using the specified properties.
         * @function create
         * @memberof NotifyServerMsg.PayOrderInfo
         * @static
         * @param {NotifyServerMsg.IPayOrderInfo=} [properties] Properties to set
         * @returns {NotifyServerMsg.PayOrderInfo} PayOrderInfo instance
         */
        PayOrderInfo.create = function create(properties) {
            return new PayOrderInfo(properties);
        };

        /**
         * Encodes the specified PayOrderInfo message. Does not implicitly {@link NotifyServerMsg.PayOrderInfo.verify|verify} messages.
         * @function encode
         * @memberof NotifyServerMsg.PayOrderInfo
         * @static
         * @param {NotifyServerMsg.IPayOrderInfo} message PayOrderInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PayOrderInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.UserID);
            writer.uint32(/* id 3, wireType 0 =*/24).int64(message.Amount);
            writer.uint32(/* id 4, wireType 0 =*/32).int64(message.TimeSeq);
            return writer;
        };

        /**
         * Encodes the specified PayOrderInfo message, length delimited. Does not implicitly {@link NotifyServerMsg.PayOrderInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof NotifyServerMsg.PayOrderInfo
         * @static
         * @param {NotifyServerMsg.IPayOrderInfo} message PayOrderInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PayOrderInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PayOrderInfo message from the specified reader or buffer.
         * @function decode
         * @memberof NotifyServerMsg.PayOrderInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {NotifyServerMsg.PayOrderInfo} PayOrderInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PayOrderInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.NotifyServerMsg.PayOrderInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 2:
                    message.UserID = reader.int32();
                    break;
                case 3:
                    message.Amount = reader.int64();
                    break;
                case 4:
                    message.TimeSeq = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("UserID"))
                throw $util.ProtocolError("missing required 'UserID'", { instance: message });
            if (!message.hasOwnProperty("Amount"))
                throw $util.ProtocolError("missing required 'Amount'", { instance: message });
            if (!message.hasOwnProperty("TimeSeq"))
                throw $util.ProtocolError("missing required 'TimeSeq'", { instance: message });
            return message;
        };

        /**
         * Decodes a PayOrderInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof NotifyServerMsg.PayOrderInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {NotifyServerMsg.PayOrderInfo} PayOrderInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PayOrderInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PayOrderInfo message.
         * @function verify
         * @memberof NotifyServerMsg.PayOrderInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PayOrderInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.UserID))
                return "UserID: integer expected";
            if (!$util.isInteger(message.Amount) && !(message.Amount && $util.isInteger(message.Amount.low) && $util.isInteger(message.Amount.high)))
                return "Amount: integer|Long expected";
            if (!$util.isInteger(message.TimeSeq) && !(message.TimeSeq && $util.isInteger(message.TimeSeq.low) && $util.isInteger(message.TimeSeq.high)))
                return "TimeSeq: integer|Long expected";
            return null;
        };

        /**
         * Creates a PayOrderInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof NotifyServerMsg.PayOrderInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {NotifyServerMsg.PayOrderInfo} PayOrderInfo
         */
        PayOrderInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.NotifyServerMsg.PayOrderInfo)
                return object;
            var message = new $root.NotifyServerMsg.PayOrderInfo();
            if (object.UserID != null)
                message.UserID = object.UserID | 0;
            if (object.Amount != null)
                if ($util.Long)
                    (message.Amount = $util.Long.fromValue(object.Amount)).unsigned = false;
                else if (typeof object.Amount === "string")
                    message.Amount = parseInt(object.Amount, 10);
                else if (typeof object.Amount === "number")
                    message.Amount = object.Amount;
                else if (typeof object.Amount === "object")
                    message.Amount = new $util.LongBits(object.Amount.low >>> 0, object.Amount.high >>> 0).toNumber();
            if (object.TimeSeq != null)
                if ($util.Long)
                    (message.TimeSeq = $util.Long.fromValue(object.TimeSeq)).unsigned = false;
                else if (typeof object.TimeSeq === "string")
                    message.TimeSeq = parseInt(object.TimeSeq, 10);
                else if (typeof object.TimeSeq === "number")
                    message.TimeSeq = object.TimeSeq;
                else if (typeof object.TimeSeq === "object")
                    message.TimeSeq = new $util.LongBits(object.TimeSeq.low >>> 0, object.TimeSeq.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a PayOrderInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof NotifyServerMsg.PayOrderInfo
         * @static
         * @param {NotifyServerMsg.PayOrderInfo} message PayOrderInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PayOrderInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.UserID = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.Amount = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.Amount = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.TimeSeq = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.TimeSeq = options.longs === String ? "0" : 0;
            }
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                object.UserID = message.UserID;
            if (message.Amount != null && message.hasOwnProperty("Amount"))
                if (typeof message.Amount === "number")
                    object.Amount = options.longs === String ? String(message.Amount) : message.Amount;
                else
                    object.Amount = options.longs === String ? $util.Long.prototype.toString.call(message.Amount) : options.longs === Number ? new $util.LongBits(message.Amount.low >>> 0, message.Amount.high >>> 0).toNumber() : message.Amount;
            if (message.TimeSeq != null && message.hasOwnProperty("TimeSeq"))
                if (typeof message.TimeSeq === "number")
                    object.TimeSeq = options.longs === String ? String(message.TimeSeq) : message.TimeSeq;
                else
                    object.TimeSeq = options.longs === String ? $util.Long.prototype.toString.call(message.TimeSeq) : options.longs === Number ? new $util.LongBits(message.TimeSeq.low >>> 0, message.TimeSeq.high >>> 0).toNumber() : message.TimeSeq;
            return object;
        };

        /**
         * Converts this PayOrderInfo to JSON.
         * @function toJSON
         * @memberof NotifyServerMsg.PayOrderInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PayOrderInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return PayOrderInfo;
    })();

    NotifyServerMsg.HallUserList = (function() {

        /**
         * Properties of a HallUserList.
         * @memberof NotifyServerMsg
         * @interface IHallUserList
         * @property {number} ServerID HallUserList ServerID
         * @property {Array.<number>|null} [UserIDList] HallUserList UserIDList
         */

        /**
         * Constructs a new HallUserList.
         * @memberof NotifyServerMsg
         * @classdesc Represents a HallUserList.
         * @implements IHallUserList
         * @constructor
         * @param {NotifyServerMsg.IHallUserList=} [properties] Properties to set
         */
        function HallUserList(properties) {
            this.UserIDList = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * HallUserList ServerID.
         * @member {number} ServerID
         * @memberof NotifyServerMsg.HallUserList
         * @instance
         */
        HallUserList.prototype.ServerID = 0;

        /**
         * HallUserList UserIDList.
         * @member {Array.<number>} UserIDList
         * @memberof NotifyServerMsg.HallUserList
         * @instance
         */
        HallUserList.prototype.UserIDList = $util.emptyArray;

        /**
         * Creates a new HallUserList instance using the specified properties.
         * @function create
         * @memberof NotifyServerMsg.HallUserList
         * @static
         * @param {NotifyServerMsg.IHallUserList=} [properties] Properties to set
         * @returns {NotifyServerMsg.HallUserList} HallUserList instance
         */
        HallUserList.create = function create(properties) {
            return new HallUserList(properties);
        };

        /**
         * Encodes the specified HallUserList message. Does not implicitly {@link NotifyServerMsg.HallUserList.verify|verify} messages.
         * @function encode
         * @memberof NotifyServerMsg.HallUserList
         * @static
         * @param {NotifyServerMsg.IHallUserList} message HallUserList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HallUserList.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.ServerID);
            if (message.UserIDList != null && message.UserIDList.length) {
                writer.uint32(/* id 2, wireType 2 =*/18).fork();
                for (var i = 0; i < message.UserIDList.length; ++i)
                    writer.int32(message.UserIDList[i]);
                writer.ldelim();
            }
            return writer;
        };

        /**
         * Encodes the specified HallUserList message, length delimited. Does not implicitly {@link NotifyServerMsg.HallUserList.verify|verify} messages.
         * @function encodeDelimited
         * @memberof NotifyServerMsg.HallUserList
         * @static
         * @param {NotifyServerMsg.IHallUserList} message HallUserList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HallUserList.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a HallUserList message from the specified reader or buffer.
         * @function decode
         * @memberof NotifyServerMsg.HallUserList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {NotifyServerMsg.HallUserList} HallUserList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HallUserList.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.NotifyServerMsg.HallUserList();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.ServerID = reader.int32();
                    break;
                case 2:
                    if (!(message.UserIDList && message.UserIDList.length))
                        message.UserIDList = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.UserIDList.push(reader.int32());
                    } else
                        message.UserIDList.push(reader.int32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("ServerID"))
                throw $util.ProtocolError("missing required 'ServerID'", { instance: message });
            return message;
        };

        /**
         * Decodes a HallUserList message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof NotifyServerMsg.HallUserList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {NotifyServerMsg.HallUserList} HallUserList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HallUserList.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a HallUserList message.
         * @function verify
         * @memberof NotifyServerMsg.HallUserList
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        HallUserList.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.ServerID))
                return "ServerID: integer expected";
            if (message.UserIDList != null && message.hasOwnProperty("UserIDList")) {
                if (!Array.isArray(message.UserIDList))
                    return "UserIDList: array expected";
                for (var i = 0; i < message.UserIDList.length; ++i)
                    if (!$util.isInteger(message.UserIDList[i]))
                        return "UserIDList: integer[] expected";
            }
            return null;
        };

        /**
         * Creates a HallUserList message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof NotifyServerMsg.HallUserList
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {NotifyServerMsg.HallUserList} HallUserList
         */
        HallUserList.fromObject = function fromObject(object) {
            if (object instanceof $root.NotifyServerMsg.HallUserList)
                return object;
            var message = new $root.NotifyServerMsg.HallUserList();
            if (object.ServerID != null)
                message.ServerID = object.ServerID | 0;
            if (object.UserIDList) {
                if (!Array.isArray(object.UserIDList))
                    throw TypeError(".NotifyServerMsg.HallUserList.UserIDList: array expected");
                message.UserIDList = [];
                for (var i = 0; i < object.UserIDList.length; ++i)
                    message.UserIDList[i] = object.UserIDList[i] | 0;
            }
            return message;
        };

        /**
         * Creates a plain object from a HallUserList message. Also converts values to other types if specified.
         * @function toObject
         * @memberof NotifyServerMsg.HallUserList
         * @static
         * @param {NotifyServerMsg.HallUserList} message HallUserList
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        HallUserList.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.UserIDList = [];
            if (options.defaults)
                object.ServerID = 0;
            if (message.ServerID != null && message.hasOwnProperty("ServerID"))
                object.ServerID = message.ServerID;
            if (message.UserIDList && message.UserIDList.length) {
                object.UserIDList = [];
                for (var j = 0; j < message.UserIDList.length; ++j)
                    object.UserIDList[j] = message.UserIDList[j];
            }
            return object;
        };

        /**
         * Converts this HallUserList to JSON.
         * @function toJSON
         * @memberof NotifyServerMsg.HallUserList
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        HallUserList.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return HallUserList;
    })();

    NotifyServerMsg.UserNotifyList = (function() {

        /**
         * Properties of a UserNotifyList.
         * @memberof NotifyServerMsg
         * @interface IUserNotifyList
         * @property {number} ServerID UserNotifyList ServerID
         * @property {Array.<NotifyServerMsg.IUserNotifyInfo>|null} [InfoList] UserNotifyList InfoList
         */

        /**
         * Constructs a new UserNotifyList.
         * @memberof NotifyServerMsg
         * @classdesc Represents a UserNotifyList.
         * @implements IUserNotifyList
         * @constructor
         * @param {NotifyServerMsg.IUserNotifyList=} [properties] Properties to set
         */
        function UserNotifyList(properties) {
            this.InfoList = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UserNotifyList ServerID.
         * @member {number} ServerID
         * @memberof NotifyServerMsg.UserNotifyList
         * @instance
         */
        UserNotifyList.prototype.ServerID = 0;

        /**
         * UserNotifyList InfoList.
         * @member {Array.<NotifyServerMsg.IUserNotifyInfo>} InfoList
         * @memberof NotifyServerMsg.UserNotifyList
         * @instance
         */
        UserNotifyList.prototype.InfoList = $util.emptyArray;

        /**
         * Creates a new UserNotifyList instance using the specified properties.
         * @function create
         * @memberof NotifyServerMsg.UserNotifyList
         * @static
         * @param {NotifyServerMsg.IUserNotifyList=} [properties] Properties to set
         * @returns {NotifyServerMsg.UserNotifyList} UserNotifyList instance
         */
        UserNotifyList.create = function create(properties) {
            return new UserNotifyList(properties);
        };

        /**
         * Encodes the specified UserNotifyList message. Does not implicitly {@link NotifyServerMsg.UserNotifyList.verify|verify} messages.
         * @function encode
         * @memberof NotifyServerMsg.UserNotifyList
         * @static
         * @param {NotifyServerMsg.IUserNotifyList} message UserNotifyList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserNotifyList.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.ServerID);
            if (message.InfoList != null && message.InfoList.length)
                for (var i = 0; i < message.InfoList.length; ++i)
                    $root.NotifyServerMsg.UserNotifyInfo.encode(message.InfoList[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified UserNotifyList message, length delimited. Does not implicitly {@link NotifyServerMsg.UserNotifyList.verify|verify} messages.
         * @function encodeDelimited
         * @memberof NotifyServerMsg.UserNotifyList
         * @static
         * @param {NotifyServerMsg.IUserNotifyList} message UserNotifyList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserNotifyList.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UserNotifyList message from the specified reader or buffer.
         * @function decode
         * @memberof NotifyServerMsg.UserNotifyList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {NotifyServerMsg.UserNotifyList} UserNotifyList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserNotifyList.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.NotifyServerMsg.UserNotifyList();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.ServerID = reader.int32();
                    break;
                case 2:
                    if (!(message.InfoList && message.InfoList.length))
                        message.InfoList = [];
                    message.InfoList.push($root.NotifyServerMsg.UserNotifyInfo.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("ServerID"))
                throw $util.ProtocolError("missing required 'ServerID'", { instance: message });
            return message;
        };

        /**
         * Decodes a UserNotifyList message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof NotifyServerMsg.UserNotifyList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {NotifyServerMsg.UserNotifyList} UserNotifyList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserNotifyList.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a UserNotifyList message.
         * @function verify
         * @memberof NotifyServerMsg.UserNotifyList
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UserNotifyList.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.ServerID))
                return "ServerID: integer expected";
            if (message.InfoList != null && message.hasOwnProperty("InfoList")) {
                if (!Array.isArray(message.InfoList))
                    return "InfoList: array expected";
                for (var i = 0; i < message.InfoList.length; ++i) {
                    var error = $root.NotifyServerMsg.UserNotifyInfo.verify(message.InfoList[i]);
                    if (error)
                        return "InfoList." + error;
                }
            }
            return null;
        };

        /**
         * Creates a UserNotifyList message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof NotifyServerMsg.UserNotifyList
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {NotifyServerMsg.UserNotifyList} UserNotifyList
         */
        UserNotifyList.fromObject = function fromObject(object) {
            if (object instanceof $root.NotifyServerMsg.UserNotifyList)
                return object;
            var message = new $root.NotifyServerMsg.UserNotifyList();
            if (object.ServerID != null)
                message.ServerID = object.ServerID | 0;
            if (object.InfoList) {
                if (!Array.isArray(object.InfoList))
                    throw TypeError(".NotifyServerMsg.UserNotifyList.InfoList: array expected");
                message.InfoList = [];
                for (var i = 0; i < object.InfoList.length; ++i) {
                    if (typeof object.InfoList[i] !== "object")
                        throw TypeError(".NotifyServerMsg.UserNotifyList.InfoList: object expected");
                    message.InfoList[i] = $root.NotifyServerMsg.UserNotifyInfo.fromObject(object.InfoList[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a UserNotifyList message. Also converts values to other types if specified.
         * @function toObject
         * @memberof NotifyServerMsg.UserNotifyList
         * @static
         * @param {NotifyServerMsg.UserNotifyList} message UserNotifyList
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UserNotifyList.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.InfoList = [];
            if (options.defaults)
                object.ServerID = 0;
            if (message.ServerID != null && message.hasOwnProperty("ServerID"))
                object.ServerID = message.ServerID;
            if (message.InfoList && message.InfoList.length) {
                object.InfoList = [];
                for (var j = 0; j < message.InfoList.length; ++j)
                    object.InfoList[j] = $root.NotifyServerMsg.UserNotifyInfo.toObject(message.InfoList[j], options);
            }
            return object;
        };

        /**
         * Converts this UserNotifyList to JSON.
         * @function toJSON
         * @memberof NotifyServerMsg.UserNotifyList
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserNotifyList.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UserNotifyList;
    })();

    NotifyServerMsg.UserNotifyInfo = (function() {

        /**
         * Properties of a UserNotifyInfo.
         * @memberof NotifyServerMsg
         * @interface IUserNotifyInfo
         * @property {number|Long} Idx UserNotifyInfo Idx
         * @property {number} UserID UserNotifyInfo UserID
         * @property {number} Type UserNotifyInfo Type
         * @property {string} Message UserNotifyInfo Message
         * @property {string} CreateTime UserNotifyInfo CreateTime
         * @property {number|Long} TimeSeq UserNotifyInfo TimeSeq
         */

        /**
         * Constructs a new UserNotifyInfo.
         * @memberof NotifyServerMsg
         * @classdesc Represents a UserNotifyInfo.
         * @implements IUserNotifyInfo
         * @constructor
         * @param {NotifyServerMsg.IUserNotifyInfo=} [properties] Properties to set
         */
        function UserNotifyInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UserNotifyInfo Idx.
         * @member {number|Long} Idx
         * @memberof NotifyServerMsg.UserNotifyInfo
         * @instance
         */
        UserNotifyInfo.prototype.Idx = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * UserNotifyInfo UserID.
         * @member {number} UserID
         * @memberof NotifyServerMsg.UserNotifyInfo
         * @instance
         */
        UserNotifyInfo.prototype.UserID = 0;

        /**
         * UserNotifyInfo Type.
         * @member {number} Type
         * @memberof NotifyServerMsg.UserNotifyInfo
         * @instance
         */
        UserNotifyInfo.prototype.Type = 0;

        /**
         * UserNotifyInfo Message.
         * @member {string} Message
         * @memberof NotifyServerMsg.UserNotifyInfo
         * @instance
         */
        UserNotifyInfo.prototype.Message = "";

        /**
         * UserNotifyInfo CreateTime.
         * @member {string} CreateTime
         * @memberof NotifyServerMsg.UserNotifyInfo
         * @instance
         */
        UserNotifyInfo.prototype.CreateTime = "";

        /**
         * UserNotifyInfo TimeSeq.
         * @member {number|Long} TimeSeq
         * @memberof NotifyServerMsg.UserNotifyInfo
         * @instance
         */
        UserNotifyInfo.prototype.TimeSeq = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new UserNotifyInfo instance using the specified properties.
         * @function create
         * @memberof NotifyServerMsg.UserNotifyInfo
         * @static
         * @param {NotifyServerMsg.IUserNotifyInfo=} [properties] Properties to set
         * @returns {NotifyServerMsg.UserNotifyInfo} UserNotifyInfo instance
         */
        UserNotifyInfo.create = function create(properties) {
            return new UserNotifyInfo(properties);
        };

        /**
         * Encodes the specified UserNotifyInfo message. Does not implicitly {@link NotifyServerMsg.UserNotifyInfo.verify|verify} messages.
         * @function encode
         * @memberof NotifyServerMsg.UserNotifyInfo
         * @static
         * @param {NotifyServerMsg.IUserNotifyInfo} message UserNotifyInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserNotifyInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int64(message.Idx);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.UserID);
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.Type);
            writer.uint32(/* id 4, wireType 2 =*/34).string(message.Message);
            writer.uint32(/* id 5, wireType 2 =*/42).string(message.CreateTime);
            writer.uint32(/* id 6, wireType 0 =*/48).int64(message.TimeSeq);
            return writer;
        };

        /**
         * Encodes the specified UserNotifyInfo message, length delimited. Does not implicitly {@link NotifyServerMsg.UserNotifyInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof NotifyServerMsg.UserNotifyInfo
         * @static
         * @param {NotifyServerMsg.IUserNotifyInfo} message UserNotifyInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserNotifyInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UserNotifyInfo message from the specified reader or buffer.
         * @function decode
         * @memberof NotifyServerMsg.UserNotifyInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {NotifyServerMsg.UserNotifyInfo} UserNotifyInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserNotifyInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.NotifyServerMsg.UserNotifyInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Idx = reader.int64();
                    break;
                case 2:
                    message.UserID = reader.int32();
                    break;
                case 3:
                    message.Type = reader.int32();
                    break;
                case 4:
                    message.Message = reader.string();
                    break;
                case 5:
                    message.CreateTime = reader.string();
                    break;
                case 6:
                    message.TimeSeq = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("Idx"))
                throw $util.ProtocolError("missing required 'Idx'", { instance: message });
            if (!message.hasOwnProperty("UserID"))
                throw $util.ProtocolError("missing required 'UserID'", { instance: message });
            if (!message.hasOwnProperty("Type"))
                throw $util.ProtocolError("missing required 'Type'", { instance: message });
            if (!message.hasOwnProperty("Message"))
                throw $util.ProtocolError("missing required 'Message'", { instance: message });
            if (!message.hasOwnProperty("CreateTime"))
                throw $util.ProtocolError("missing required 'CreateTime'", { instance: message });
            if (!message.hasOwnProperty("TimeSeq"))
                throw $util.ProtocolError("missing required 'TimeSeq'", { instance: message });
            return message;
        };

        /**
         * Decodes a UserNotifyInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof NotifyServerMsg.UserNotifyInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {NotifyServerMsg.UserNotifyInfo} UserNotifyInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserNotifyInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a UserNotifyInfo message.
         * @function verify
         * @memberof NotifyServerMsg.UserNotifyInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UserNotifyInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.Idx) && !(message.Idx && $util.isInteger(message.Idx.low) && $util.isInteger(message.Idx.high)))
                return "Idx: integer|Long expected";
            if (!$util.isInteger(message.UserID))
                return "UserID: integer expected";
            if (!$util.isInteger(message.Type))
                return "Type: integer expected";
            if (!$util.isString(message.Message))
                return "Message: string expected";
            if (!$util.isString(message.CreateTime))
                return "CreateTime: string expected";
            if (!$util.isInteger(message.TimeSeq) && !(message.TimeSeq && $util.isInteger(message.TimeSeq.low) && $util.isInteger(message.TimeSeq.high)))
                return "TimeSeq: integer|Long expected";
            return null;
        };

        /**
         * Creates a UserNotifyInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof NotifyServerMsg.UserNotifyInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {NotifyServerMsg.UserNotifyInfo} UserNotifyInfo
         */
        UserNotifyInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.NotifyServerMsg.UserNotifyInfo)
                return object;
            var message = new $root.NotifyServerMsg.UserNotifyInfo();
            if (object.Idx != null)
                if ($util.Long)
                    (message.Idx = $util.Long.fromValue(object.Idx)).unsigned = false;
                else if (typeof object.Idx === "string")
                    message.Idx = parseInt(object.Idx, 10);
                else if (typeof object.Idx === "number")
                    message.Idx = object.Idx;
                else if (typeof object.Idx === "object")
                    message.Idx = new $util.LongBits(object.Idx.low >>> 0, object.Idx.high >>> 0).toNumber();
            if (object.UserID != null)
                message.UserID = object.UserID | 0;
            if (object.Type != null)
                message.Type = object.Type | 0;
            if (object.Message != null)
                message.Message = String(object.Message);
            if (object.CreateTime != null)
                message.CreateTime = String(object.CreateTime);
            if (object.TimeSeq != null)
                if ($util.Long)
                    (message.TimeSeq = $util.Long.fromValue(object.TimeSeq)).unsigned = false;
                else if (typeof object.TimeSeq === "string")
                    message.TimeSeq = parseInt(object.TimeSeq, 10);
                else if (typeof object.TimeSeq === "number")
                    message.TimeSeq = object.TimeSeq;
                else if (typeof object.TimeSeq === "object")
                    message.TimeSeq = new $util.LongBits(object.TimeSeq.low >>> 0, object.TimeSeq.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a UserNotifyInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof NotifyServerMsg.UserNotifyInfo
         * @static
         * @param {NotifyServerMsg.UserNotifyInfo} message UserNotifyInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UserNotifyInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.Idx = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.Idx = options.longs === String ? "0" : 0;
                object.UserID = 0;
                object.Type = 0;
                object.Message = "";
                object.CreateTime = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.TimeSeq = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.TimeSeq = options.longs === String ? "0" : 0;
            }
            if (message.Idx != null && message.hasOwnProperty("Idx"))
                if (typeof message.Idx === "number")
                    object.Idx = options.longs === String ? String(message.Idx) : message.Idx;
                else
                    object.Idx = options.longs === String ? $util.Long.prototype.toString.call(message.Idx) : options.longs === Number ? new $util.LongBits(message.Idx.low >>> 0, message.Idx.high >>> 0).toNumber() : message.Idx;
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                object.UserID = message.UserID;
            if (message.Type != null && message.hasOwnProperty("Type"))
                object.Type = message.Type;
            if (message.Message != null && message.hasOwnProperty("Message"))
                object.Message = message.Message;
            if (message.CreateTime != null && message.hasOwnProperty("CreateTime"))
                object.CreateTime = message.CreateTime;
            if (message.TimeSeq != null && message.hasOwnProperty("TimeSeq"))
                if (typeof message.TimeSeq === "number")
                    object.TimeSeq = options.longs === String ? String(message.TimeSeq) : message.TimeSeq;
                else
                    object.TimeSeq = options.longs === String ? $util.Long.prototype.toString.call(message.TimeSeq) : options.longs === Number ? new $util.LongBits(message.TimeSeq.low >>> 0, message.TimeSeq.high >>> 0).toNumber() : message.TimeSeq;
            return object;
        };

        /**
         * Converts this UserNotifyInfo to JSON.
         * @function toJSON
         * @memberof NotifyServerMsg.UserNotifyInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserNotifyInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UserNotifyInfo;
    })();

    NotifyServerMsg.UpdateUserNotifyIdx = (function() {

        /**
         * Properties of an UpdateUserNotifyIdx.
         * @memberof NotifyServerMsg
         * @interface IUpdateUserNotifyIdx
         * @property {number} UserID UpdateUserNotifyIdx UserID
         * @property {number|Long} Idx UpdateUserNotifyIdx Idx
         */

        /**
         * Constructs a new UpdateUserNotifyIdx.
         * @memberof NotifyServerMsg
         * @classdesc Represents an UpdateUserNotifyIdx.
         * @implements IUpdateUserNotifyIdx
         * @constructor
         * @param {NotifyServerMsg.IUpdateUserNotifyIdx=} [properties] Properties to set
         */
        function UpdateUserNotifyIdx(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UpdateUserNotifyIdx UserID.
         * @member {number} UserID
         * @memberof NotifyServerMsg.UpdateUserNotifyIdx
         * @instance
         */
        UpdateUserNotifyIdx.prototype.UserID = 0;

        /**
         * UpdateUserNotifyIdx Idx.
         * @member {number|Long} Idx
         * @memberof NotifyServerMsg.UpdateUserNotifyIdx
         * @instance
         */
        UpdateUserNotifyIdx.prototype.Idx = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new UpdateUserNotifyIdx instance using the specified properties.
         * @function create
         * @memberof NotifyServerMsg.UpdateUserNotifyIdx
         * @static
         * @param {NotifyServerMsg.IUpdateUserNotifyIdx=} [properties] Properties to set
         * @returns {NotifyServerMsg.UpdateUserNotifyIdx} UpdateUserNotifyIdx instance
         */
        UpdateUserNotifyIdx.create = function create(properties) {
            return new UpdateUserNotifyIdx(properties);
        };

        /**
         * Encodes the specified UpdateUserNotifyIdx message. Does not implicitly {@link NotifyServerMsg.UpdateUserNotifyIdx.verify|verify} messages.
         * @function encode
         * @memberof NotifyServerMsg.UpdateUserNotifyIdx
         * @static
         * @param {NotifyServerMsg.IUpdateUserNotifyIdx} message UpdateUserNotifyIdx message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UpdateUserNotifyIdx.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.UserID);
            writer.uint32(/* id 2, wireType 0 =*/16).int64(message.Idx);
            return writer;
        };

        /**
         * Encodes the specified UpdateUserNotifyIdx message, length delimited. Does not implicitly {@link NotifyServerMsg.UpdateUserNotifyIdx.verify|verify} messages.
         * @function encodeDelimited
         * @memberof NotifyServerMsg.UpdateUserNotifyIdx
         * @static
         * @param {NotifyServerMsg.IUpdateUserNotifyIdx} message UpdateUserNotifyIdx message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UpdateUserNotifyIdx.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an UpdateUserNotifyIdx message from the specified reader or buffer.
         * @function decode
         * @memberof NotifyServerMsg.UpdateUserNotifyIdx
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {NotifyServerMsg.UpdateUserNotifyIdx} UpdateUserNotifyIdx
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UpdateUserNotifyIdx.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.NotifyServerMsg.UpdateUserNotifyIdx();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.UserID = reader.int32();
                    break;
                case 2:
                    message.Idx = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("UserID"))
                throw $util.ProtocolError("missing required 'UserID'", { instance: message });
            if (!message.hasOwnProperty("Idx"))
                throw $util.ProtocolError("missing required 'Idx'", { instance: message });
            return message;
        };

        /**
         * Decodes an UpdateUserNotifyIdx message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof NotifyServerMsg.UpdateUserNotifyIdx
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {NotifyServerMsg.UpdateUserNotifyIdx} UpdateUserNotifyIdx
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UpdateUserNotifyIdx.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an UpdateUserNotifyIdx message.
         * @function verify
         * @memberof NotifyServerMsg.UpdateUserNotifyIdx
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UpdateUserNotifyIdx.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.UserID))
                return "UserID: integer expected";
            if (!$util.isInteger(message.Idx) && !(message.Idx && $util.isInteger(message.Idx.low) && $util.isInteger(message.Idx.high)))
                return "Idx: integer|Long expected";
            return null;
        };

        /**
         * Creates an UpdateUserNotifyIdx message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof NotifyServerMsg.UpdateUserNotifyIdx
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {NotifyServerMsg.UpdateUserNotifyIdx} UpdateUserNotifyIdx
         */
        UpdateUserNotifyIdx.fromObject = function fromObject(object) {
            if (object instanceof $root.NotifyServerMsg.UpdateUserNotifyIdx)
                return object;
            var message = new $root.NotifyServerMsg.UpdateUserNotifyIdx();
            if (object.UserID != null)
                message.UserID = object.UserID | 0;
            if (object.Idx != null)
                if ($util.Long)
                    (message.Idx = $util.Long.fromValue(object.Idx)).unsigned = false;
                else if (typeof object.Idx === "string")
                    message.Idx = parseInt(object.Idx, 10);
                else if (typeof object.Idx === "number")
                    message.Idx = object.Idx;
                else if (typeof object.Idx === "object")
                    message.Idx = new $util.LongBits(object.Idx.low >>> 0, object.Idx.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from an UpdateUserNotifyIdx message. Also converts values to other types if specified.
         * @function toObject
         * @memberof NotifyServerMsg.UpdateUserNotifyIdx
         * @static
         * @param {NotifyServerMsg.UpdateUserNotifyIdx} message UpdateUserNotifyIdx
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UpdateUserNotifyIdx.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.UserID = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.Idx = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.Idx = options.longs === String ? "0" : 0;
            }
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                object.UserID = message.UserID;
            if (message.Idx != null && message.hasOwnProperty("Idx"))
                if (typeof message.Idx === "number")
                    object.Idx = options.longs === String ? String(message.Idx) : message.Idx;
                else
                    object.Idx = options.longs === String ? $util.Long.prototype.toString.call(message.Idx) : options.longs === Number ? new $util.LongBits(message.Idx.low >>> 0, message.Idx.high >>> 0).toNumber() : message.Idx;
            return object;
        };

        /**
         * Converts this UpdateUserNotifyIdx to JSON.
         * @function toJSON
         * @memberof NotifyServerMsg.UpdateUserNotifyIdx
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UpdateUserNotifyIdx.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UpdateUserNotifyIdx;
    })();

    return NotifyServerMsg;
})();

module.exports = $root;
